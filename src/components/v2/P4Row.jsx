// P4 option C: four cards in one row, joined by a journey line that runs
// through a dot above each card, from "before you are unwell" to "recovery".
// Not on the page at the moment: kept to reuse in another section.
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { useStaggerReveal, RevealSection, p4Items, Photo } from "../../site.jsx";
import { P4Intro, journeyEnds, pad2 } from "./p4Shared.jsx";

export default function P4Row() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const ends = isTh ? journeyEnds.th : journeyEnds.en;
  const listRef = useStaggerReveal({ delayEach: 110 });

  return (
    <RevealSection className={`p4r`}>
      <div className={`mx-auto max-w-6xl px-6 py-20`}>
        <P4Intro isTh={isTh} />
        <div className={`p4r__ends font-display`} aria-hidden={`true`}>
          <span>{ends[0]}</span>
          <span>{ends[1]}</span>
        </div>
        <ol ref={listRef} className={`p4r__list`}>
          {p4Items.map((item, i) => {
            const copy = isTh ? item.th : item.en;
            return (
              <li key={item.key}>
                <span className={`p4r__dot`} aria-hidden={`true`} />
                <Link to={item.to} className={`p4r__card card-lift group`}>
                  <div className={`p4r__photo`}>
                    <Photo
                      name={item.photo}
                      alt={``}
                      sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw`}
                      className={`transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>
                  <div className={`p4r__body`}>
                    <p className={`p4-num p4-num--light font-display`} aria-hidden={`true`}>
                      {pad2(i + 1)}
                    </p>
                    <p className={`font-display text-xs uppercase tracking-[0.25em] text-kmc-primary-deep mb-2`}>
                      {item.key}
                    </p>
                    <h3 className={`font-display text-xl font-semibold text-kmc-secondary mb-2`}>{copy.name}</h3>
                    <p className={`text-sm text-kmc-secondary/70 leading-relaxed flex-1`}>{copy.desc}</p>
                    <span className={`mt-5 text-sm font-medium text-kmc-primary-deep`}>
                      {isTh ? `ดูรายละเอียด` : `See details`}{` `}
                      <span className={`inline-block transition-transform group-hover:translate-x-1`} aria-hidden={`true`}>
                        {`→`}
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </RevealSection>
  );
}
