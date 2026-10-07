// "Explore by what you need" for /home-v2: a guided picker. The visitor finishes
// the sentence "I'm looking for…" by choosing one of the six needs, and the card
// beside it shows that need's photo, description and link.
import { useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { RevealSection, AnimatedHeading, careNeeds, Photo } from "../../site.jsx";

export default function CareNeeds() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const [picked, setPicked] = useState(0);
  const need = careNeeds[picked];
  const copy = isTh ? need.th : need.en;

  return (
    <RevealSection className={`picker`}>
      <div className={`mx-auto max-w-6xl px-6 py-20`}>
        <div className={`picker__panel`}>
          <div className={`picker__ask`}>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary mb-3`}
              text={isTh ? `สำรวจตามความต้องการคุณ` : `Explore by what you need`}
            />
            <p className={`text-kmc-secondary/70 mb-8 max-w-md`}>
              {isTh
                ? `เลือกเรื่องที่ตรงกับคุณหรือคนในครอบครัวมากที่สุด เราพาไปยังบริการที่ออกแบบมาเพื่อเรื่องนั้นโดยเฉพาะ`
                : `Pick whichever is closest to your situation and we’ll take you to the service built for it.`}
            </p>
            <p id={`picker-prompt`} className={`picker__prompt font-display`}>
              {isTh ? `ฉันกำลังมองหา…` : `I’m looking for…`}
            </p>
            <div className={`picker__chips`} role={`group`} aria-labelledby={`picker-prompt`}>
              {careNeeds.map((n, i) => (
                <button
                  key={n.to}
                  type={`button`}
                  className={`picker__chip ${picked === i ? `is-picked` : ``}`}
                  aria-pressed={picked === i}
                  aria-controls={`picker-result`}
                  onClick={() => setPicked(i)}
                >
                  {isTh ? n.th.name : n.en.name}
                </button>
              ))}
            </div>
          </div>

          <div id={`picker-result`} className={`picker__result`} aria-live={`polite`}>
            {/* keyed so the card re-animates on every pick */}
            <Link key={need.to} to={need.to} className={`picker__card group`}>
              <div className={`picker__photo`}>
                <Photo
                  name={need.photo}
                  alt={``}
                  sizes={`(min-width: 768px) 40vw, 100vw`}
                  className={`transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <div className={`picker__body`}>
                <h3 className={`font-display text-2xl font-semibold text-kmc-secondary mb-2`}>{copy.name}</h3>
                <p className={`text-kmc-secondary/70 leading-relaxed mb-5`}>{copy.desc}</p>
                <span className={`picker__cta`}>
                  {isTh ? `ดูบริการนี้` : `See this service`}
                  <span aria-hidden={`true`}>{`→`}</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
