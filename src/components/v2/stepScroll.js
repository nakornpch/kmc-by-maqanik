// Step-by-step scrolling for the pinned sections on /home-v2.
//
// Each pinned section registers a function returning its "stops": absolute
// scrollY positions where one of its steps is shown in full. While the page is
// inside a section's stops, one scroll gesture (wheel, trackpad swipe, key or
// touch swipe) glides to exactly the next / previous stop, so a step is never
// left half-done. Past the last stop (or before the first) the page scrolls
// normally. A stop landed between (scrollbar drag, fling) is snapped to.
//
// Page mode (registerPage, used by /home-v2): every section of the page becomes a
// stop too (its top, plus one stop per screen for sections taller than the screen),
// merged with the pinned sections' own stops, so each gesture moves one full section.

const sections = new Set();
const TOL = 3; // px either side of a stop that still counts as "on" it
const DURATION = 700;
const QUIET = 220; // ms without wheel events before a new gesture is accepted

let animating = false;
let waitForQuiet = false;
let lastWheel = 0;
let snapTimer = 0;
let touchStartY = null;
let touchStartX = null;
let installed = false;
let pageSections = null; // page mode: returns the page's section elements

// layout position, ignoring transforms (sections are briefly shifted while they reveal)
function layoutTop(el) {
  let y = 0;
  for (let n = el; n; n = n.offsetParent) y += n.offsetTop;
  return y;
}

// page mode: one merged list of the pinned sections' stops plus a stop per section
// (and per screen inside sections much taller than the screen), ending at the page bottom
function pageStops(lists) {
  const vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  // the pinned sections' own ranges: no extra stops inside them
  const ranges = lists.map((l) => [l[0], l[l.length - 1]]);
  const inside = (y) => ranges.some(([a, b]) => y > a + TOL && y < b - TOL);
  const extra = [];
  for (const el of pageSections()) {
    const top = layoutTop(el);
    const h = el.offsetHeight;
    // a section that steps itself (pinned) keeps only its own stops
    if (ranges.some(([a, b]) => a >= top - TOL && b <= top + h + TOL)) continue;
    extra.push(top);
    // only sections clearly taller than the screen get a stop per screen (no tiny nudges)
    if (h - vh > vh * 0.25) {
      for (let y = top + vh; y < top + h - vh - TOL; y += vh) extra.push(y);
      extra.push(top + h - vh);
    }
  }
  extra.push(max);
  const all = [...lists.flat(), ...extra.filter((y) => !inside(y))]
    .map((y) => Math.round(Math.max(0, Math.min(max, y))))
    .sort((a, b) => a - b);
  // drop near-duplicates (a section top that is also a pinned stop, etc.)
  return all.filter((y, i) => i === 0 || y - all[i - 1] > 8);
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const reduceMotion = () => window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

function allStops() {
  const list = [];
  for (const get of sections) {
    const stops = get();
    if (stops && stops.length) list.push(stops);
  }
  return pageSections ? [pageStops(list)] : list;
}

// the stop to go to from here in `dir` (1 down, -1 up), or null to scroll normally
function targetFor(dir) {
  const y = window.scrollY;
  for (const stops of allStops()) {
    const first = stops[0];
    const last = stops[stops.length - 1];
    if (dir > 0 && y >= first - TOL && y < last - TOL) return stops.find((s) => s > y + TOL);
    if (dir < 0 && y > first + TOL && y <= last + TOL) return [...stops].reverse().find((s) => s < y - TOL);
  }
  return null;
}

function nearestOffStop() {
  const y = window.scrollY;
  for (const stops of allStops()) {
    if (y < stops[0] - TOL || y > stops[stops.length - 1] + TOL) continue;
    if (stops.some((s) => Math.abs(s - y) <= TOL)) return null;
    return stops.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a));
  }
  return null;
}

function animateTo(y) {
  const root = document.documentElement;
  const start = window.scrollY;
  const delta = y - start;
  const duration = reduceMotion() ? 0 : DURATION;
  animating = true;
  root.style.scrollBehavior = `auto`;
  const t0 = performance.now();
  function frame(now) {
    const t = duration ? Math.min(1, (now - t0) / duration) : 1;
    window.scrollTo(0, start + delta * ease(t));
    if (t < 1) requestAnimationFrame(frame);
    else {
      animating = false;
      waitForQuiet = true;
      root.style.scrollBehavior = ``;
    }
  }
  requestAnimationFrame(frame);
}

function step(dir, e) {
  const target = targetFor(dir);
  if (target == null) return false;
  e?.preventDefault();
  animateTo(target);
  return true;
}

function onWheel(e) {
  if (e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
  const now = performance.now();
  const gap = now - lastWheel;
  lastWheel = now;
  if (animating) {
    e.preventDefault();
    return;
  }
  // swallow the tail (trackpad momentum) of the gesture that just stepped
  if (waitForQuiet) {
    if (gap < QUIET && targetFor(e.deltaY > 0 ? 1 : -1) != null) {
      e.preventDefault();
      return;
    }
    waitForQuiet = false;
  }
  if (Math.abs(e.deltaY) < 1) return;
  step(e.deltaY > 0 ? 1 : -1, e);
}

function onKey(e) {
  if (e.defaultPrevented || e.altKey || e.metaKey || e.ctrlKey) return;
  const t = e.target;
  if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName))) return;
  let dir = 0;
  if (e.key === `ArrowDown` || e.key === `PageDown` || (e.key === ` ` && !e.shiftKey)) dir = 1;
  if (e.key === `ArrowUp` || e.key === `PageUp` || (e.key === ` ` && e.shiftKey)) dir = -1;
  if (!dir) return;
  if (animating) {
    e.preventDefault();
    return;
  }
  step(dir, e);
}

function onTouchStart(e) {
  touchStartY = e.touches[0]?.clientY ?? null;
  touchStartX = e.touches[0]?.clientX ?? null;
}
// a mostly sideways swipe (tab rows, carousels) is left alone
const sideways = (dx, dy) => Math.abs(dx) > Math.abs(dy);
function onTouchMove(e) {
  if (touchStartY == null) return;
  const dy = touchStartY - e.touches[0].clientY;
  const dx = touchStartX - e.touches[0].clientX;
  if (sideways(dx, dy)) return;
  if (animating || (Math.abs(dy) > 4 && targetFor(dy > 0 ? 1 : -1) != null)) e.preventDefault();
}
function onTouchEnd(e) {
  if (touchStartY == null || animating) return;
  const dy = touchStartY - (e.changedTouches[0]?.clientY ?? touchStartY);
  const dx = touchStartX - (e.changedTouches[0]?.clientX ?? touchStartX);
  touchStartY = null;
  if (sideways(dx, dy)) return;
  if (Math.abs(dy) > 30) step(dy > 0 ? 1 : -1);
}

function onScroll() {
  if (animating) return;
  clearTimeout(snapTimer);
  snapTimer = setTimeout(() => {
    if (animating) return;
    const y = nearestOffStop();
    if (y != null) animateTo(y);
  }, 160);
}

function install() {
  if (installed) return;
  installed = true;
  window.addEventListener(`wheel`, onWheel, { passive: false });
  window.addEventListener(`keydown`, onKey);
  window.addEventListener(`touchstart`, onTouchStart, { passive: true });
  window.addEventListener(`touchmove`, onTouchMove, { passive: false });
  window.addEventListener(`touchend`, onTouchEnd);
  window.addEventListener(`scroll`, onScroll, { passive: true });
}
function uninstall() {
  if (!installed || sections.size || pageSections) return;
  installed = false;
  window.removeEventListener(`wheel`, onWheel);
  window.removeEventListener(`keydown`, onKey);
  window.removeEventListener(`touchstart`, onTouchStart);
  window.removeEventListener(`touchmove`, onTouchMove);
  window.removeEventListener(`touchend`, onTouchEnd);
  window.removeEventListener(`scroll`, onScroll);
}

// Register a section; `getStops` returns ascending absolute scrollY stops.
// Returns the unregister function (use it as an effect cleanup).
export function registerStops(getStops) {
  sections.add(getStops);
  install();
  return () => {
    sections.delete(getStops);
    uninstall();
  };
}

// Page mode: `getSections` returns the page's section elements; each becomes a stop.
// Returns the unregister function (use it as an effect cleanup).
export function registerPage(getSections) {
  pageSections = getSections;
  install();
  return () => {
    pageSections = null;
    uninstall();
  };
}

// glide to a stop (used by nav buttons so clicks move the same way as scrolling)
export function scrollToStop(y) {
  if (!animating) animateTo(y);
}

// helper: absolute top of an element in page coordinates
export const pageTop = (el) => el.getBoundingClientRect().top + window.scrollY;
