// Team & technology section for /home-v2: a complete specialist team working with
// modern equipment. Two columns of team and equipment photos that slide past each other (one up, one down) as
// the section is scrolled while pinned, to show how many people and roles are
// and tools are involved. On phones the columns become two rows sliding sideways.
import { ArrowRight } from "lucide-react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { AnimatedHeading, Photo } from "../../site.jsx";
import { useScrollSteps } from "./p4Shared.jsx";

// team photos mixed with the equipment the copy names (PMS, ultrasound, pool, sleep test)
const reel = [
  [`physio/team-care`, `physio/pms-machine`, `chinese/doctor-smile`, `hydro/therapist-guide`, `physio/balance`],
  [`sleep/nurse-couple`, `sleep/sensor-fit`, `hospital/health-measure`, `physio/ultrasound`, `hospital/exam-room`],
];

const points = [
  { th: `แพทย์เฉพาะทางและทีมสหวิชาชีพ ดูแลร่วมกันในเคสเดียว`, en: `Specialists and allied health professionals on one shared case` },
  { th: `เครื่องมือฟื้นฟูทันสมัย และสระธาราบำบัด`, en: `Modern rehabilitation equipment and a hydrotherapy pool` },
  { th: `Sleep Test, Telemedicine และแอปติดตามผลสุขภาพ`, en: `Sleep testing, telemedicine and a health-tracking app` },
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
              {isTh ? `ทีมแพทย์และเทคโนโลยี` : `Team & technology`}
            </p>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-3xl font-semibold text-kmc-secondary mb-5`}
              text={isTh ? `ทีมแพทย์ครบทุกด้าน พร้อมเทคโนโลยีที่ทันสมัย` : `A complete medical team, with modern technology`}
            />
            <p className={`text-kmc-secondary/70 leading-relaxed mb-6`}>
              {isTh
                ? `แพทย์เฉพาะทาง พยาบาล นักกายภาพบำบัด นักกิจกรรมบำบัด และนักอรรถบำบัด ทำงานร่วมกันบนเครื่องมือและระบบที่ทันสมัย ตั้งแต่การตรวจวินิจฉัย การฟื้นฟู ไปจนถึงการติดตามผลหลังกลับบ้าน`
                : `Specialists, nurses, physiotherapists, occupational and speech therapists work together with modern equipment and systems, from diagnosis and rehabilitation to follow-up after you go home.`}
            </p>
            <ul className={`team-reel__points`}>
              {points.map((point) => (
                <li key={point.en}>{isTh ? point.th : point.en}</li>
              ))}
            </ul>
            <div className={`team-reel__links`}>
              <Link to={`/doctors`} className={`team-reel__btn`}>
                {isTh ? `รู้จักทีมแพทย์` : `Our doctors`}
                <ArrowRight size={18} aria-hidden={`true`} />
              </Link>
              <Link to={`/facilities`} className={`team-reel__btn team-reel__btn--ghost`}>
                {isTh ? `สำรวจเครื่องมือและสถานที่` : `Our facilities`}
                <ArrowRight size={18} aria-hidden={`true`} />
              </Link>
            </div>
          </div>

          <div
            className={`team-reel__frame`}
            role={`img`}
            aria-label={
              isTh
                ? `ทีมแพทย์ พยาบาล และนักบำบัดของเรา กับเครื่องมือฟื้นฟูและตรวจวินิจฉัย`
                : `Our doctors, nurses and therapists, with rehabilitation and diagnostic equipment`
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
