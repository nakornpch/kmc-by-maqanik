import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { jsxRuntime, RevealSection, AnimatedHeading, Photo } from "../site.jsx";
export default function TeamSection() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`;
  return (
    <RevealSection
      className={`mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center`}
    >
      <div>
        <p className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}>
          {t ? `ทีมของเรา` : `Our team`}
        </p>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl font-semibold text-kmc-secondary mb-5`}
          text={t ? `ทีมแพทย์และสหวิชาชีพที่ดูแลคุณ` : `The people who will look after you`}
        />
        <p className={`text-kmc-secondary/70 leading-relaxed mb-8`}>
          {t
            ? `แพทย์เฉพาะทาง พยาบาล นักกายภาพบำบัด นักกิจกรรมบำบัด และนักอรรถบำบัด ทำงานร่วมกันในเคสเดียวกัน เพื่อให้แผนการดูแลของคุณต่อเนื่องตั้งแต่วันแรกจนถึงวันที่กลับไปใช้ชีวิตได้เอง`
            : `Specialists, nurses, physiotherapists, occupational therapists and speech therapists work the same case together, so your plan carries through from the first day to the day you no longer need us.`}
        </p>
        <Link
          to={`/about`}
          className={`inline-flex min-h-11 items-center text-kmc-secondary font-medium hover:underline`}
        >
          {t ? `รู้จักเรามากขึ้น →` : `More about us →`}
        </Link>
      </div>
      <div
        className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3`}
      >
        <Photo
          name={`physio/team-care`}
          alt={
            t ? `ทีมสหวิชาชีพดูแลผู้รับบริการร่วมกัน` : `Our team looking after a patient together`
          }
          className={`absolute inset-0 w-full h-full object-cover`}
        />
      </div>
    </RevealSection>
  );
}
