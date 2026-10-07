import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  careNeeds,
  Photo,
} from "../site.jsx";
export default function CareNeeds() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    n = useStaggerReveal({
      delayEach: 80,
    });
  return (
    <RevealSection className={`mx-auto max-w-6xl px-6 py-20`}>
      <AnimatedHeading
        as={`h2`}
        className={`font-display text-3xl font-semibold text-kmc-secondary mb-3`}
        text={t ? `เลือกดูตามความต้องการของคุณ` : `Start with what brought you here`}
      />
      <p className={`text-kmc-secondary/75 mb-10 max-w-2xl`}>
        {t
          ? `เลือกเรื่องที่ตรงกับคุณหรือคนในครอบครัวมากที่สุด เราพาไปยังบริการที่ออกแบบมาเพื่อเรื่องนั้นโดยเฉพาะ`
          : `Pick whichever is closest to your situation and we’ll take you to the service built for it.`}
      </p>
      <div ref={n} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5`}>
        {careNeeds.map((e) => {
          let n = t ? e.th : e.en;
          return (
            <Link
              key={e.to}
              to={e.to}
              className={`card-lift group flex flex-col rounded-2xl border border-kmc-secondary/10 bg-white overflow-hidden hover:border-kmc-primary-deep/40`}
            >
              <div className={`aspect-[16/10] overflow-hidden`}>
                <Photo
                  name={e.photo}
                  alt={``}
                  sizes={`(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
              <div className={`flex flex-1 flex-col p-7`}>
                <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
                  {n.name}
                </h3>
                <p className={`text-sm text-kmc-secondary/70 leading-relaxed mb-4 flex-1`}>
                  {n.desc}
                </p>
                <span className={`text-sm font-medium text-kmc-primary-deep`}>
                  {t ? `ดูรายละเอียด` : `See details`}
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
