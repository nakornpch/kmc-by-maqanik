import { useEffect, useRef } from "react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { c as useLocation } from "../vendor/react-SEPqUFC0.js";
import { Ne, jsxRuntime, lineUrl, Ie, Re } from "../site.jsx";

// On /home-v2 the floating buttons first sit in a row inside the hero (at the
// element marked data-cta-dock). Once the hero starts to leave they fade down
// and out there, then fade up into their usual corner (and the reverse on the
// way back). The real buttons are moved, not duplicated.
function useHeroDock(stackRef, enabled) {
  useEffect(() => {
    const stack = stackRef.current;
    if (!enabled || !stack) return;
    const items = [...stack.querySelectorAll(`[data-cta-item]`)];
    const reduce = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    let natural = [];
    let docked = null; // where the buttons are drawn right now
    let wanted = null; // where they should end up
    let swapTimer = 0;
    let frame = 0;

    function measureNatural() {
      items.forEach((el) => (el.style.transform = `none`));
      natural = items.map((el) => el.getBoundingClientRect());
    }
    function place() {
      const dock = docked && document.querySelector(`[data-cta-dock]`);
      if (!dock) {
        items.forEach((el) => (el.style.transform = ``));
        return;
      }
      const target = dock.getBoundingClientRect();
      let x = target.left;
      items.forEach((el, i) => {
        const n = natural[i];
        el.style.transform = `translate(${x - n.left}px, ${target.top - n.top}px)`;
        x += n.width + 12;
      });
    }
    function swap() {
      if (reduce || docked === null) {
        docked = wanted;
        place();
        return;
      }
      items.forEach((el, i) =>
        el.animate([{ opacity: 1, translate: `0 0` }, { opacity: 0, translate: `0 14px` }], {
          duration: 260,
          delay: i * 50,
          easing: `cubic-bezier(0.4, 0, 1, 1)`,
          fill: `forwards`,
        }),
      );
      swapTimer = setTimeout(() => {
        swapTimer = 0;
        docked = wanted;
        place();
        items.forEach((el, i) => {
          el.getAnimations().forEach((a) => a.cancel());
          el.animate([{ opacity: 0, translate: `0 14px` }, { opacity: 1, translate: `0 0` }], {
            duration: 650,
            delay: 60 + i * 110,
            easing: `cubic-bezier(0.16, 1, 0.3, 1)`,
            fill: `backwards`,
          });
        });
      }, 360);
    }
    function update() {
      const dock = document.querySelector(`[data-cta-dock]`);
      const hero = document.querySelector(`.hero-deck`);
      // the stack is hidden on phones; the mobile bar stays as it is
      const usable = dock && hero && getComputedStyle(stack).display !== `none`;
      // hand over about half way through the hero's shrink-out
      wanted = !!usable && hero.getBoundingClientRect().bottom > window.innerHeight * 1.25;
      if (wanted !== docked && !swapTimer) swap();
      else place();
    }
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
        // the hero re-renders its scroll offsets a frame later; follow it
        requestAnimationFrame(place);
      });
    }
    function onResize() {
      measureNatural();
      schedule();
    }

    measureNatural();
    update();
    // fade in with the hero copy the first time
    stack.animate?.([{ opacity: 0 }, { opacity: 1 }], {
      duration: reduce ? 0 : 700,
      delay: reduce ? 0 : 500,
      fill: `backwards`,
    });
    window.addEventListener(`scroll`, schedule, { passive: true });
    window.addEventListener(`resize`, onResize);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(swapTimer);
      window.removeEventListener(`scroll`, schedule);
      window.removeEventListener(`resize`, onResize);
      items.forEach((el) => {
        el.getAnimations().forEach((a) => a.cancel());
        el.style.transform = ``;
      });
    };
  }, [stackRef, enabled]);
}

export default function FloatingContact({ hideStack: e = !1 }) {
  let { i18n: t } = useTranslation(),
    n = t.language === `th`,
    r = Ne(0.3),
    stackRef = useRef(null);
  useHeroDock(stackRef, useLocation().pathname === `/home-v2`);
  return (
    <jsxRuntime.Fragment>
      <div
        ref={stackRef}
        data-cta-placement={`floating`}
        className={`${e ? `hidden` : `hidden sm:flex`} fixed bottom-6 right-6 z-40 flex-col items-end gap-3`}
      >
        <div data-cta-item>
          <a
            ref={r}
            href={lineUrl}
            target={`_blank`}
            rel={`noopener noreferrer`}
            aria-label={`LINE @kmchealth`}
            className={`group flex items-center gap-3 rounded-full bg-[#06C755] text-white pl-4 pr-5 py-3 shadow-lg shadow-[#06C755]/30 hover:brightness-105 transition`}
          >
            <Ie />
            <span className={`text-sm font-medium whitespace-nowrap`}>{n ? `แชท LINE` : `Chat on LINE`}</span>
          </a>
        </div>
        <div data-cta-item>
          <Re variant={`stack`} isTh={n} />
        </div>
      </div>
      <div
        data-cta-placement={`floating`}
        className={`animate-sticky-in fixed bottom-0 left-0 w-full z-40 grid grid-cols-2 sm:hidden`}
      >
        <a
          href={lineUrl}
          target={`_blank`}
          rel={`noopener noreferrer`}
          className={`flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-white bg-[#06C755] active:brightness-95 transition`}
        >
          <Ie />
          {n ? `แชท LINE` : `LINE`}
        </a>
        <Re variant={`bar`} isTh={n} />
      </div>
    </jsxRuntime.Fragment>
  );
}
