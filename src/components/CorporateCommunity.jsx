import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  communityPrograms,
  Photo,
} from "../site.jsx";
export default function CorporateCommunity() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    n = useStaggerReveal({
      delayEach: 110,
    });
  return (
    <RevealSection className={`mx-auto max-w-6xl px-6 py-20`}>
      <AnimatedHeading
        as={`h2`}
        className={`font-display text-3xl font-semibold text-kmc-secondary mb-10`}
        text={t ? `ไม่ได้ดูแลแค่รายบุคคล` : `Not only individual care`}
      />
      <div ref={n} className={`grid md:grid-cols-2 gap-6`}>
        {communityPrograms.map((e) => {
          let n = t ? e.th : e.en;
          return (
            <Link
              key={e.to}
              to={e.to}
              className={`card-lift group flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3`}
            >
              <div className={`aspect-[16/8] overflow-hidden`}>
                <Photo
                  name={e.photo}
                  alt={``}
                  sizes={`(min-width: 768px) 50vw, 100vw`}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
              <div className={`p-10`}>
                <p
                  className={`font-display uppercase tracking-[0.25em] text-xs font-medium text-kmc-secondary mb-3`}
                >
                  {n.kicker}
                </p>
                <h3
                  className={`font-display text-xl font-semibold text-kmc-secondary mb-3 leading-snug`}
                >
                  {n.name}
                </h3>
                <p className={`text-sm text-kmc-secondary/80 leading-relaxed mb-6`}>{n.desc}</p>
                <span className={`text-sm font-medium text-kmc-secondary`}>
                  {n.cta}
                  {` `}
                  <span
                    className={`inline-block group-hover:translate-x-1 transition-transform`}
                    aria-hidden={`true`}
                  >{`→`}</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </RevealSection>
  );
}
