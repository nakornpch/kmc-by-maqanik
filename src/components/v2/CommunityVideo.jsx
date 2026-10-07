// "A full-service community hospital under KMC Health" for /home-v2: the
// heading followed by the hospital video. It works like the hero in reverse:
// the section pins, and scrolling grows the video from a framed card under the
// heading to the full screen (by opening up a clip-path, so the video stays
// sharp), while the heading moves out of its way.
// Uses the hero clip for now; swap `src` when the hospital film is ready.
import { useEffect, useRef, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { AnimatedHeading, heroVideo } from "../../site.jsx";
import { useScrollSteps } from "./p4Shared.jsx";

export default function CommunityVideo() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  // one "step": scaled runs 0 → 1 while the section is pinned
  // two stops: the framed card, then full screen; one scroll grows it
  const { ref, scaled } = useScrollSteps(1, (top, range) => [top, top + range * 0.75]);
  // reach full screen a little before the end, so it holds there for a moment
  const grow = Math.min(1, scaled / 0.75);
  const videoRef = useRef(null);
  const [reduceMotion] = useState(() => window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
  const [wantsPlay, setWantsPlay] = useState(!reduceMotion);
  const [inView, setInView] = useState(false);

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
    <section ref={ref} className={`cv`} style={{ "--g": grow }}>
      <div className={`cv__stage`}>
        <div className={`cv__head`}>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl sm:text-4xl font-semibold leading-snug text-kmc-secondary`}
            lines={
              isTh
                ? [`โรงพยาบาลชุมชนครบวงจร`, `ภายใต้เครือ KMC Health`]
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
