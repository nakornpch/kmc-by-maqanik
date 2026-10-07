import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import {
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  careDisciplines,
  Photo,
} from "../../site.jsx";
import { useEffect, useMemo, useRef } from "react";

export default function IntegratedCare() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    sectionRef = useRef(null),
    rows = useMemo(
      () => [
        [...careDisciplines, ...careDisciplines.slice(0, 2)],
        [...careDisciplines.slice(3), ...careDisciplines.slice(0, 3), ...careDisciplines.slice(3, 5)],
      ],
      [],
    );

  useEffect(() => {
    let frame = 0;
    function measure() {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = window.innerHeight + rect.height;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / range));
      el.style.setProperty(`--care-scroll`, progress.toFixed(4));
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener(`scroll`, onScroll, { passive: true });
    window.addEventListener(`resize`, onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(`scroll`, onScroll);
      window.removeEventListener(`resize`, onScroll);
    };
  }, []);

  return (
    <section className={`care-flow`} ref={sectionRef}>
      <RevealSection as={`div`} className={`care-flow__head mx-auto max-w-6xl px-6`}>
        <div>
          <p className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}>
            {`Personalized`}
          </p>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary mb-4`}
            text={t ? `บูรณาการการดูแลรักษาครบวงจร` : `Six disciplines, one plan`}
          />
        </div>
        <p className={`care-flow__lead`}>
          {t
            ? `แผนฟื้นฟูของแต่ละคนดึงศาสตร์ที่เหมาะสมมาทำงานร่วมกันในเคสเดียว ไม่ต้องแยกไปรักษาหลายที่`
            : `Each recovery plan draws on whichever disciplines suit the case, working together, with no need to travel between providers.`}
        </p>
      </RevealSection>

      <div className={`care-flow__marquee`} aria-label={t ? `ทีมดูแลแบบบูรณาการ` : `Integrated care team`}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`care-flow__row ${rowIndex ? `is-reverse` : ``}`}>
            <ul className={`care-flow__track`}>
              {row.map((item, i) => (
                <li key={`${rowIndex}-${item.en}-${i}`} className={`care-flow__card`}>
                  <Photo
                    name={item.photo}
                    alt={``}
                    sizes={`(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 78vw`}
                    className={`care-flow__photo`}
                  />
                  <div className={`care-flow__caption`}>
                    <span className={`font-display`}>{`0${(i % careDisciplines.length) + 1}`}</span>
                    <p className={`font-display`}>{t ? item.th : item.en}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
