// P4 section: four tall panels side by side. The chosen one opens up with its
// photo, copy and link; the others fold down to a number and a vertical label.
// Hovering a panel (mouse) opens it; clicking, tapping or focusing it does too.
// The first panel starts open. On phones the panels stack vertically.
import { useEffect, useRef, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { RevealSection, p4Items, Photo } from "../../site.jsx";
import { P4Intro, journeyEnds } from "./p4Shared.jsx";

export default function P4Panels() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const [active, setActive] = useState(0);
  const ends = isTh ? journeyEnds.th : journeyEnds.en;
  // a short delay keeps panels from flapping open while the pointer sweeps across them
  const hoverTimer = useRef(0);
  const canHover = useRef(typeof window !== `undefined` && window.matchMedia(`(hover: hover) and (pointer: fine)`).matches);
  function hoverPanel(i) {
    if (!canHover.current) return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(i), 120);
  }
  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  return (
    <section className={`p4p`}>
      <RevealSection as={`div`} className={`mx-auto max-w-6xl px-6 p4p__wrap`}>
        <P4Intro isTh={isTh} />
        <ul className={`p4p__panels`}>
          {p4Items.map((item, i) => {
            const copy = isTh ? item.th : item.en;
            const open = active === i;
            return (
              <li key={item.key} className={`p4p__panel ${open ? `is-open` : ``}`} onMouseEnter={() => hoverPanel(i)}>
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
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
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
      </RevealSection>
    </section>
  );
}
