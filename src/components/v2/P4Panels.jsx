// P4 section: four tall panels side by side. The chosen one opens up with its
// photo, copy and link; the others fold down to a number and a vertical label.
// Scrolling steps through the panels while they are pinned; clicking or
// focusing a panel scrolls to it. On phones the panels stack vertically.
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { RevealSection, p4Items, Photo } from "../../site.jsx";
import { P4Intro, journeyEnds, useScrollSteps } from "./p4Shared.jsx";

export default function P4Panels() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const { ref, active, goTo } = useScrollSteps(p4Items.length);
  const ends = isTh ? journeyEnds.th : journeyEnds.en;

  return (
    <section className={`p4p`}>
      <RevealSection as={`div`} className={`mx-auto max-w-6xl px-6 pt-20`}>
        <P4Intro isTh={isTh} />
      </RevealSection>
      <div ref={ref} className={`p4-track`} style={{ "--steps": p4Items.length }}>
        <div className={`p4-stage`}>
          <div className={`mx-auto max-w-6xl px-6 p4p__stage`}>
            <ul className={`p4p__panels`}>
              {p4Items.map((item, i) => {
                const copy = isTh ? item.th : item.en;
                const open = active === i;
                return (
                  <li key={item.key} className={`p4p__panel ${open ? `is-open` : ``}`}>
                    <Photo
                      name={item.photo}
                      alt={``}
                      sizes={`(min-width: 768px) 60vw, 100vw`}
                      className={`p4p__photo`}
                    />
                    <button
                      type={`button`}
                      className={`p4p__tab`}
                      aria-expanded={open}
                      aria-controls={`p4p-${item.key}`}
                      onClick={() => goTo(i)}
                    >
                      <span className={`p4p__tabnum font-display`}>{`P${i + 1}`}</span>
                      <span className={`p4p__tabkey font-display`}>{item.key}</span>
                    </button>
                    <div id={`p4p-${item.key}`} className={`p4p__content`} aria-hidden={!open}>
                      <p className={`p4-num font-display`} aria-hidden={`true`}>
                        {`P${i + 1}`}
                      </p>
                      <p className={`font-display text-xs uppercase tracking-[0.25em] text-kmc-primary mb-2`}>
                        {item.key}
                      </p>
                      <h3 className={`font-display text-2xl sm:text-3xl font-semibold text-white mb-3`}>{copy.name}</h3>
                      <p className={`text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mb-6`}>{copy.desc}</p>
                      <Link to={item.to} className={`p4p__link`} tabIndex={open ? 0 : -1}>
                        {isTh ? `ดูรายละเอียด` : `See details`}
                        <span aria-hidden={`true`}>{`→`}</span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={`p4-journey`} style={{ "--fill": (active + 1) / p4Items.length }} aria-hidden={`true`}>
              <span>{ends[0]}</span>
              <i />
              <span>{ends[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
