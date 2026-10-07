// "A full-service community hospital under KMC Health" for /home-v2: the
// heading followed by the hospital video. It works like the hero in reverse:
// the section pins, and scrolling grows the video from a framed card under the
// heading to the full screen (by opening up a clip-path, so the video stays
// sharp), while the heading moves out of its way.
// The section pins and everything is driven by the scroll position (so scrolling back up
// plays it backward): the two arcs of the KMC "K" mark assemble on the left while the
// heading's words rise in, then the video card slides up and the K settles back, then the
// video grows to full screen while the heading moves out of its way.
// Uses the hero clip for now; swap `src` when the hospital film is ready.
import { useEffect, useRef, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { AnimatedHeading, heroVideo } from "../../site.jsx";
import { useScrollSteps } from "./p4Shared.jsx";

// the K-mark arcs, in brand blues for this light section (same paths as the hero's).
// As in the logo, the front arc (bottom-left → top-right) is a light tone over a darker
// back arc, so the crossing reads as a K.
function KArcs() {
  return (
    <svg className={`cv__arcs`} viewBox={`0 0 800 800`} aria-hidden={`true`}>
      <defs>
        {/* back arc: darker */}
        <linearGradient id={`cv-arc-a`} x1={`0`} y1={`0`} x2={`800`} y2={`800`} gradientUnits={`userSpaceOnUse`}>
          <stop offset={`0`} stopColor={`#8fbcd9`} />
          <stop offset={`.55`} stopColor={`#5f8fb5`} />
          <stop offset={`1`} stopColor={`#3e6e94`} />
        </linearGradient>
        {/* front arc: light */}
        <linearGradient id={`cv-arc-b`} x1={`0`} y1={`800`} x2={`800`} y2={`0`} gradientUnits={`userSpaceOnUse`}>
          <stop offset={`0`} stopColor={`#b5d3e5`} />
          <stop offset={`1`} stopColor={`#e6f3fc`} />
        </linearGradient>
      </defs>
      <g className={`cv__arcwrap cv__arcwrap--a`}>
      <path
        className={`cv__arc cv__arc--a`}
        fill={`url(#cv-arc-a)`}
        d={`M266.62,0H0c0,441.86,358.13,799.99,799.99,799.99v-266.62C505.41,533.38,266.62,294.59,266.62,0Z`}
      />
      </g>
      <g className={`cv__arcwrap cv__arcwrap--b`}>
      <path
        className={`cv__arc cv__arc--b`}
        fill={`url(#cv-arc-b)`}
        d={`M800,266.62V0C358.14,0,0,358.13,0,799.99h266.62c0-294.58,238.79-533.37,533.38-533.38Z`}
      />
      </g>
    </svg>
  );
}

export default function CommunityVideo() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  // scaled runs 0 → 1 across the pinned range; each scroll gesture glides one stop:
  // K + heading formed → video in → video full screen (held) → the top of the next section,
  // so leaving the full-screen video goes straight to the whole next section, never half of each
  const { ref, scaled } = useScrollSteps(1, (top, range) => [
    top + range * 0.3,
    top + range * 0.55,
    top + range * 0.96,
    top + range + window.innerHeight,
  ]);
  const videoRef = useRef(null);
  const headRef = useRef(null);
  // phones get their own line breaks, so each phrase stays whole
  const [narrow, setNarrow] = useState(() => window.matchMedia(`(max-width: 639px)`).matches);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: 639px)`);
    const update = () => setNarrow(mq.matches);
    mq.addEventListener(`change`, update);
    return () => mq.removeEventListener(`change`, update);
  }, []);
  // the video card starts just under the heading, however many lines the heading wraps to
  useEffect(() => {
    const head = headRef.current;
    const section = ref.current;
    if (!head || !section) return;
    const place = () => section.style.setProperty(`--top`, `${head.offsetTop + head.offsetHeight}px`);
    place();
    const ro = new ResizeObserver(place);
    ro.observe(head);
    window.addEventListener(`resize`, place);
    return () => {
      ro.disconnect();
      window.removeEventListener(`resize`, place);
    };
  }, [ref]);
  const [reduceMotion] = useState(() => window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
  const [wantsPlay, setWantsPlay] = useState(!reduceMotion);
  const [inView, setInView] = useState(false);
  // stage progress from the scroll: k the K assembling, h the heading words, v the video coming
  // up, g the video growing to full screen (reduced motion: everything already in place)
  const clamp = (x) => Math.min(1, Math.max(0, x));
  const easeOut = (x) => 1 - (1 - x) ** 3;
  const k = reduceMotion ? 1 : easeOut(clamp(scaled / 0.28));
  const h = reduceMotion ? 1 : clamp((scaled - 0.03) / 0.25);
  const v = reduceMotion ? 1 : easeOut(clamp((scaled - 0.33) / 0.2));
  const grow = clamp((scaled - 0.56) / 0.38);

  // only play while the section is on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView && wantsPlay) v.play().catch(() => {});
    else v.pause();
  }, [inView, wantsPlay]);

  return (
    <section ref={ref} className={`cv`} style={{ "--k": k, "--h": h, "--v": v, "--g": grow }}>
      <div className={`cv__stage`}>
        <KArcs />
        <div ref={headRef} className={`cv__head`}>
          <AnimatedHeading
            as={`h2`}
            className={`font-display font-semibold leading-snug text-kmc-secondary`}
            key={narrow ? `narrow` : `wide`}
            accent={[`KMC`, `Health`]}
            manual
            lines={
              isTh
                ? [`โรงพยาบาลชุมชนครบวงจร`, `ภายใต้เครือ KMC Health`]
                : narrow
                  ? [`A Full-Service`, `Community Hospital`, `Under KMC Health Group`]
                  : [`A Full-Service Community Hospital`, `Under KMC Health Group`]
            }
          />
        </div>
        <video
          ref={videoRef}
          className={`cv__video`}
          src={heroVideo}
          muted
          loop
          playsInline
          preload={`metadata`}
          aria-label={isTh ? `วิดีโอแนะนำ KMC Hospital` : `An introduction to KMC Hospital`}
        />
        <button
          type={`button`}
          className={`cv__play`}
          onClick={() => setWantsPlay((w) => !w)}
          aria-pressed={!wantsPlay}
          aria-label={
            wantsPlay
              ? isTh ? `หยุดวิดีโอ` : `Pause video`
              : isTh ? `เล่นวิดีโอ` : `Play video`
          }
        >
          <svg viewBox={`0 0 24 24`} className={`h-4 w-4`} fill={`currentColor`} aria-hidden={`true`}>
            {wantsPlay ? <path d={`M7 5h3.5v14H7zM13.5 5H17v14h-3.5z`} /> : <path d={`M8 5.5v13l10.5-6.5z`} />}
          </svg>
        </button>
      </div>
    </section>
  );
}
