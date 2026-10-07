// Shared pieces for the P4 section on /home-v2 (P4Panels) and the two
// alternative designs kept for reuse (P4Wheel, P4Row). Same copy as the original P4Section.
import { useEffect, useRef, useState } from "react";
import { AnimatedHeading } from "../../site.jsx";
import { registerStops, scrollToStop, pageTop } from "./stepScroll.js";

export const pad2 = (n) => String(n).padStart(2, `0`);

// the intro already frames P4 as a path from "before you are unwell" to "rebuilding your strength"
export const journeyEnds = {
  th: [`ก่อนเจ็บป่วย`, `ฟื้นฟูและดูแลต่อเนื่อง`],
  en: [`Before you are unwell`, `Recovery and beyond`],
};

export function P4Intro({ isTh, align = `center` }) {
  const centered = align === `center`;
  return (
    <div className={centered ? `text-center` : ``}>
      <p className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}>
        {isTh ? `แนวคิดการดูแลสุขภาพของเรา` : `How we think about care`}
      </p>
      <AnimatedHeading
        as={`h2`}
        className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary mb-5 leading-snug`}
        text={
          isTh
            ? `สุขภาพดี เริ่มต้นก่อนวันที่ป่วย ด้วยแนวคิด P4`
            : `Good health starts before the day you fall ill, the P4 approach`
        }
      />
      <p className={`text-kmc-secondary/70 leading-relaxed max-w-3xl ${centered ? `mx-auto` : ``}`}>
        {isTh
          ? `ที่ KMC Hospital เราไม่รอให้คุณป่วยแล้วค่อยรักษา แต่ออกแบบการดูแลให้อยู่เคียงข้างคุณตั้งแต่ก่อนเจ็บป่วย ไปจนถึงวันที่ต้องฟื้นฟูร่างกาย ผ่านแนวคิด P4 ที่เป็นหัวใจของทุกบริการของเรา`
          : `At KMC Hospital we don’t wait for illness before we start caring. Our care is designed to stay alongside you from before you are unwell through to the day you are rebuilding your strength, through P4, the idea at the heart of every service we run.`}
      </p>
    </div>
  );
}

// Scroll-driven stepping for a pinned block (same model as the hero): the
// returned ref goes on a tall track whose child is position: sticky. `scaled`
// runs 0 → steps as the track scrolls past. Each step is a scroll stop (see
// stepScroll.js), so one scroll gesture moves exactly one step; `stopsFor`
// can replace the default stops (the middle of each step) with custom ones,
// given the track's page top and scroll range. goTo(i) glides to stop i.
export function useScrollSteps(steps, stopsFor) {
  const ref = useRef(null);
  const [scaled, setScaled] = useState(0);
  const stopsRef = useRef(stopsFor);
  stopsRef.current = stopsFor;
  function stops() {
    const el = ref.current;
    if (!el) return [];
    const range = el.offsetHeight - window.innerHeight;
    const top = pageTop(el);
    if (range <= 0) return [];
    return stopsRef.current
      ? stopsRef.current(top, range)
      : Array.from({ length: steps }, (_, i) => top + ((i + 0.5) / steps) * range);
  }
  useEffect(() => {
    let frame = 0;
    function measure() {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const scrolled = Math.min(range, Math.max(0, -el.getBoundingClientRect().top));
      setScaled((scrolled / range) * steps);
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener(`scroll`, onScroll, { passive: true });
    window.addEventListener(`resize`, onScroll);
    const unregister = registerStops(stops);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(`scroll`, onScroll);
      window.removeEventListener(`resize`, onScroll);
      unregister();
    };
  }, [steps]);
  function goTo(i) {
    const s = stops();
    if (s[i] != null) scrollToStop(s[i]);
  }
  const active = Math.min(steps - 1, Math.floor(scaled));
  return { ref, scaled, active, goTo };
}

