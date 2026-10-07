import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { ArrowUpRight, Building2, House } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  jsxRuntime,
  communityPrograms,
  Photo,
} from "../../site.jsx";
export default function CorporateCommunity() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    const motion = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    if (!section) return;
    const heading = section.querySelector(`.community-hero__heading`);
    const split = section.querySelector(`.community-hero__split`);
    let frame = 0;
    const progress = (element) => Math.min(1, Math.max(0,
      (window.innerHeight * 0.95 - element.getBoundingClientRect().top) / (window.innerHeight * 0.6),
    ));
    function measure() {
      frame = 0;
      section.style.setProperty(`--community-heading-progress`, motion.matches ? 1 : progress(heading));
      section.style.setProperty(`--community-panel-progress`, motion.matches ? 1 : progress(split));
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    measure();
    section.classList.add(`is-scroll-driven`);
    window.addEventListener(`scroll`, onScroll, { passive: true });
    window.addEventListener(`resize`, onScroll);
    motion.addEventListener(`change`, onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(`scroll`, onScroll);
      window.removeEventListener(`resize`, onScroll);
      motion.removeEventListener(`change`, onScroll);
      section.classList.remove(`is-scroll-driven`);
      section.style.removeProperty(`--community-heading-progress`);
      section.style.removeProperty(`--community-panel-progress`);
    };
  }, []);
  let { i18n: e } = useTranslation(),
    t = e.language === `th`;
  return (
    <section ref={sectionRef} className={`community-hero`}>
      <div className={`community-hero__heading mx-auto max-w-6xl px-6`}>
        <h2 className={`community-hero__headline font-display`}>
          {t ? `ไม่ได้ดูแลแค่รายบุคคล` : `Not only individual care`}
        </h2>
        <p className={`community-hero__intro`}>
          {t
            ? <>จากสุขภาพของพนักงาน<br />ถึงคุณภาพชีวิตของคนในชุมชน เราดูแลไปด้วยกัน</>
            : <>From employee health<br />to well-being in your neighbourhood, we care together.</>}
        </p>
      </div>
      <div className={`community-hero__split`}>
        {communityPrograms.map((e, index) => {
          let n = t ? e.th : e.en;
          const AudienceIcon = index === 0 ? Building2 : House;
          const services = index === 0
            ? (t ? [`ตรวจสุขภาพพนักงาน`, `วัคซีน`, `Office Syndrome`] : [`Employee screening`, `Vaccines`, `Office syndrome`])
            : (t ? [`หมอประจำบ้าน`, `หน่วยสุขภาพเคลื่อนที่`, `Well-being App`] : [`Neighbourhood doctor`, `Mobile health unit`, `Well-being app`]);
          return (
            <article
              key={e.to}
              className={`community-hero__panel`}
              aria-labelledby={`community-hero-title-${index}`}
            >
                <Photo
                  name={e.photo}
                  alt={``}
                  sizes={`(min-width: 768px) 50vw, 100vw`}
                  className={`community-hero__photo`}
                />
              <div className={`community-hero__label`}>
                <AudienceIcon size={23} strokeWidth={1.5} aria-hidden={`true`} />
                <span>{index === 0 ? `CORPORATE HEALTH` : `COMMUNITY CARE`}</span>
                <span className={`community-hero__index font-display`} aria-hidden={`true`}>{`0${index + 1}`}</span>
              </div>
              <div className={`community-hero__content`}>
                <h3
                  id={`community-hero-title-${index}`}
                  className={`community-hero__title font-display`}
                >
                  {n.kicker}
                </h3>
                <p className={`community-hero__subtitle font-display`}>{n.name}</p>
                <p className={`community-hero__description`}>{n.desc}</p>
                <ul className={`community-hero__services`}>
                  {services.map((service) => <li key={service}>{service}</li>)}
                </ul>
                <Link to={e.to} className={`community-hero__cta`}>
                  {n.cta}
                  <span className={`community-hero__cta-icon`}><ArrowUpRight size={22} aria-hidden={`true`} /></span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
