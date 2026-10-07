// Team section for /home-v2. The copy stays as it was; the single photo becomes
// two columns of team photos that slide past each other (one up, one down) as
// the section is scrolled while pinned, to show how many people and roles are
// involved. On phones the columns become two rows sliding sideways.
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { AnimatedHeading, Photo } from "../../site.jsx";
import { useScrollSteps } from "./p4Shared.jsx";

const reel = [
  [`physio/team-care`, `chinese/doctor-smile`, `hydro/therapist-guide`, `hospital/reception`, `physio/balance`],
  [`sleep/nurse-couple`, `thai/assessment`, `physio/shoulder-assess`, `hospital/health-measure`, `hospital/exam-room`],
];

export default function TeamSection() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  // a single "step": scaled runs 0 → 1 while the section is pinned
  // two stops: reel at its start, reel at its end; one scroll plays it through
  const { ref, scaled } = useScrollSteps(1, (top, range) => [top, top + range]);

  return (
    <section ref={ref} className={`team-reel`} style={{ "--p": scaled }}>
      <div className={`team-reel__stage`}>
        <div className={`mx-auto max-w-6xl px-6 team-reel__layout`}>
          <div className={`team-reel__copy`}>
            <p className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}>
              {isTh ? `ทีมของเรา` : `Our team`}
            </p>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-3xl font-semibold text-kmc-secondary mb-5`}
              text={isTh ? `ทีมแพทย์และสหวิชาชีพที่ดูแลคุณ` : `The people who will look after you`}
            />
            <p className={`text-kmc-secondary/70 leading-relaxed mb-8`}>
              {isTh
                ? `แพทย์เฉพาะทาง พยาบาล นักกายภาพบำบัด นักกิจกรรมบำบัด และนักอรรถบำบัด ทำงานร่วมกันในเคสเดียวกัน เพื่อให้แผนการดูแลของคุณต่อเนื่องตั้งแต่วันแรกจนถึงวันที่กลับไปใช้ชีวิตได้เอง`
                : `Specialists, nurses, physiotherapists, occupational therapists and speech therapists work the same case together, so your plan carries through from the first day to the day you no longer need us.`}
            </p>
            <Link to={`/about`} className={`inline-flex min-h-11 items-center text-kmc-secondary font-medium hover:underline`}>
              {isTh ? `รู้จักเรามากขึ้น →` : `More about us →`}
            </Link>
          </div>

          <div
            className={`team-reel__frame`}
            role={`img`}
            aria-label={
              isTh
                ? `ทีมแพทย์ พยาบาล และนักบำบัดของเราขณะดูแลผู้รับบริการ`
                : `Our doctors, nurses and therapists at work with patients`
            }
          >
            {reel.map((col, c) => (
              <div key={c} className={`team-reel__col ${c ? `is-reverse` : ``}`}>
                {col.map((name) => (
                  <div key={name} className={`team-reel__photo`}>
                    <Photo name={name} alt={``} sizes={`(min-width: 768px) 22vw, 45vw`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
