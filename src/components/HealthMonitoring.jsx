import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import {
  jsxRuntime,
  HospitalBackdrop,
  RevealSection,
  AnimatedHeading,
  Photo,
  gt,
} from "../site.jsx";
export default function HealthMonitoring() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`;
  return (
    <section className={`relative overflow-hidden bg-kmc-secondary text-white`}>
      <HospitalBackdrop className={`absolute inset-0`} />
      <RevealSection
        as={`div`}
        className={`relative mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center`}
      >
        <div>
          <p
            className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary mb-3`}
          >{`Predictive`}</p>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl font-semibold mb-5 leading-snug`}
            text={t ? `โปรแกรมติดตามสุขภาพ (Lab + App)` : `Health Monitoring Program (Lab + App)`}
          />
          <p className={`text-white/75 leading-relaxed mb-8`}>
            {t
              ? `เชื่อมผลตรวจแล็บเข้ากับแอปพลิเคชัน ให้คุณเห็นแนวโน้มค่าสุขภาพของตัวเองอย่างต่อเนื่อง ไม่ใช่แค่ตัวเลขครั้งเดียวตอนตรวจ และให้ทีมแพทย์แจ้งเตือนความเสี่ยงได้ตั้งแต่เนิ่น ๆ`
              : `Your lab results, linked to an app, so you follow your own health as a trend instead of a single set of numbers, and our doctors can flag risk early.`}
          </p>
          <Link
            to={`/services/health-monitoring`}
            className={`shiny-pill inline-block rounded-full bg-white text-kmc-secondary px-8 py-3 font-medium hover:brightness-105 transition`}
          >
            {t ? `ดูรายละเอียดโปรแกรม` : `See how it works`}
          </Link>
        </div>
        <div>
          <div className={`aspect-[16/9] rounded-2xl overflow-hidden mb-5`}>
            <Photo
              name={`hospital/health-check`}
              alt={t ? `เจ้าหน้าที่ตรวจวัดค่าสุขภาพ` : `A staff member taking health measurements`}
              sizes={`(min-width: 768px) 50vw, 100vw`}
              className={`w-full h-full object-cover`}
            />
          </div>
          <ol className={`space-y-4`}>
            {gt.map((e, n) => (
              <li key={e.en} className={`flex items-start gap-4 rounded-2xl bg-white/10 px-6 py-5`}>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full bg-white/90 text-kmc-secondary font-display text-sm font-semibold flex items-center justify-center`}
                >
                  {n + 1}
                </span>
                <p className={`text-sm text-white/85 leading-relaxed pt-1.5`}>{t ? e.th : e.en}</p>
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>
    </section>
  );
}
