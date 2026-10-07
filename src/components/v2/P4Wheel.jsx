// P4 option B: a wheel of four photo quadrants around a "P4" hub, ordered
// clockwise as a journey (Prevention → Predictive → Personalized → Participation).
// The wheel is pinned while scrolling steps through the quadrants; an accent
// arc snaps round the rim onto the current quadrant. Clicking a quadrant scrolls to it.
// Not on the page at the moment: kept to reuse in another section.
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { RevealSection, p4Items, Photo } from "../../site.jsx";
import { P4Intro, pad2, useScrollSteps } from "./p4Shared.jsx";

export default function P4Wheel() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const steps = p4Items.length;
  const { ref, active, goTo } = useScrollSteps(steps);
  const item = p4Items[active];
  const copy = isTh ? item.th : item.en;

  return (
    <section className={`p4w`}>
      <RevealSection as={`div`} className={`mx-auto max-w-6xl px-6 pt-20`}>
        <P4Intro isTh={isTh} />
      </RevealSection>
      <div ref={ref} className={`p4-track`} style={{ "--steps": steps }}>
        <div className={`p4-stage`}>
          <div className={`mx-auto max-w-6xl px-6 p4w__layout`}>
            <div className={`p4w__wheel`}>
              <svg className={`p4w__rim`} viewBox={`0 0 200 200`} aria-hidden={`true`}>
                <circle cx={`100`} cy={`100`} r={`97`} className={`p4w__track`} />
                {/* quarter arc over the top-left quadrant, turned to the active one */}
                <path
                  d={`M3 100A97 97 0 0 1 100 3`}
                  className={`p4w__arc`}
                  style={{ transform: `rotate(${active * 90}deg)` }}
                />
              </svg>
              <div className={`p4w__disc`}>
                {p4Items.map((it, i) => (
                  <button
                    key={it.key}
                    type={`button`}
                    className={`p4w__quad ${active === i ? `is-active` : ``}`}
                    data-q={i}
                    aria-pressed={active === i}
                    onClick={() => goTo(i)}
                  >
                    <Photo name={it.photo} alt={``} sizes={`(min-width: 768px) 20vw, 50vw`} />
                    <span className={`p4w__qlabel font-display`}>
                      <b>{pad2(i + 1)}</b>
                      {it.key}
                    </span>
                  </button>
                ))}
                <div className={`p4w__hub font-display`} aria-hidden={`true`}>
                  <span>P4</span>
                </div>
              </div>
            </div>

            <div className={`p4w__detail`} aria-live={`polite`}>
              {/* keyed so the copy re-animates on every change */}
              <div key={item.key} className={`p4w__copy`}>
                <p className={`p4-num p4-num--light font-display`} aria-hidden={`true`}>
                  {pad2(active + 1)}
                </p>
                <p className={`font-display text-xs uppercase tracking-[0.25em] text-kmc-primary-deep mb-2`}>
                  {item.key}
                </p>
                <h3 className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-3`}>
                  {copy.name}
                </h3>
                <p className={`text-kmc-secondary/70 leading-relaxed mb-6`}>{copy.desc}</p>
                <Link to={item.to} className={`p4w__link`}>
                  {isTh ? `ดูรายละเอียด` : `See details`}
                  <span aria-hidden={`true`}>{`→`}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
