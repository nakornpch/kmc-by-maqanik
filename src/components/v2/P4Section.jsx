import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  p4Items,
  Photo,
} from "../../site.jsx";
export default function P4Section() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    n = useStaggerReveal({
      delayEach: 100,
    });
  return (
    <RevealSection className={`bg-white/70 border-y border-kmc-secondary/10`}>
      <div className={`mx-auto max-w-6xl px-6 py-20`}>
        <p
          className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3 text-center`}
        >
          {t ? `แนวคิดการดูแลสุขภาพของเรา` : `How we think about care`}
        </p>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary mb-5 text-center leading-snug`}
          text={
            t
              ? `สุขภาพดี เริ่มต้นก่อนวันที่ป่วย ด้วยแนวคิด P4`
              : `Good health starts before the day you fall ill, the P4 approach`
          }
        />
        <p className={`text-kmc-secondary/70 leading-relaxed max-w-3xl mx-auto text-center mb-12`}>
          {t
            ? `ที่ KMC Hospital เราไม่รอให้คุณป่วยแล้วค่อยรักษา แต่ออกแบบการดูแลให้อยู่เคียงข้างคุณตั้งแต่ก่อนเจ็บป่วย ไปจนถึงวันที่ต้องฟื้นฟูร่างกาย ผ่านแนวคิด P4 ที่เป็นหัวใจของทุกบริการของเรา`
            : `At KMC Hospital we don’t wait for illness before we start caring. Our care is designed to stay alongside you from before you are unwell through to the day you are rebuilding your strength, through P4, the idea at the heart of every service we run.`}
        </p>
        <div ref={n} className={`grid sm:grid-cols-2 gap-6`}>
          {p4Items.map((e) => {
            let n = t ? e.th : e.en;
            return (
              <Link
                key={e.key}
                to={e.to}
                className={`card-lift group flex flex-col sm:flex-row rounded-2xl border border-kmc-secondary/10 bg-white overflow-hidden hover:border-kmc-primary-deep/40`}
              >
                <div className={`sm:w-2/5 shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden`}>
                  <Photo
                    name={e.photo}
                    alt={``}
                    sizes={`(min-width: 640px) 20vw, 100vw`}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
                <div className={`p-7`}>
                  <p
                    className={`font-display text-xs uppercase tracking-[0.25em] text-kmc-primary-deep mb-2`}
                  >
                    {e.key}
                  </p>
                  <h3 className={`font-display text-xl font-medium text-kmc-secondary mb-3`}>
                    {n.name}
                  </h3>
                  <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>{n.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
