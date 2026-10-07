import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  careDisciplines,
  Photo,
} from "../site.jsx";
export default function IntegratedCare() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    n = useStaggerReveal({
      delayEach: 70,
    });
  return (
    <RevealSection>
      <div className={`mx-auto max-w-6xl px-6 py-20`}>
        <p
          className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}
        >{`Personalized`}</p>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl font-semibold text-kmc-secondary mb-4`}
          text={t ? `บูรณาการการดูแลรักษาครบวงจร` : `Six disciplines, one plan`}
        />
        <p className={`text-kmc-secondary/65 leading-relaxed max-w-2xl mb-10`}>
          {t
            ? `แผนฟื้นฟูของแต่ละคนดึงศาสตร์ที่เหมาะสมมาทำงานร่วมกันในเคสเดียว ไม่ต้องแยกไปรักษาหลายที่`
            : `Each recovery plan draws on whichever disciplines suit the case, working together, with no need to travel between providers.`}
        </p>
        <ol ref={n} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {careDisciplines.map((e, n) => (
            <li
              key={e.en}
              className={`flex items-center gap-4 rounded-2xl border border-kmc-secondary/10 bg-white p-3 pr-6`}
            >
              <Photo
                name={e.photo}
                alt={``}
                sizes={`80px`}
                className={`w-20 h-20 shrink-0 rounded-xl object-cover`}
              />
              <span
                className={`font-display text-sm font-medium text-kmc-primary-deep`}
                aria-hidden={`true`}
              >
                {`0`}
                {n + 1}
              </span>
              <p className={`font-display font-medium text-kmc-secondary`}>{t ? e.th : e.en}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
