// Design copy of HomePage, served at /home-v2 (and /en/home-v2).
// The original homepage at / stays untouched for comparison. Section
// components come from src/components/v2, so editing them does not affect /.
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { CalendarCheck, HeartPulse, ClipboardCheck, Plus, ArrowRight, Phone } from "lucide-react";
import { t as useHomeMeta } from "../routes/usePageMeta.jsx";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import Hero from "../components/v2/Hero.jsx";
import TeamSection from "../components/v2/TeamSection.jsx";
import CommunityVideo from "../components/v2/CommunityVideo.jsx";
import FacilitiesGallery from "../components/v2/FacilitiesGallery.jsx";
import CareNeeds from "../components/v2/CareNeeds.jsx";
import ServicesOverview from "../components/v2/ServicesOverview.jsx";
import HealthMonitoring from "../components/v2/HealthMonitoring.jsx";
import PackageCard from "../components/v2/PackageCard.jsx";
import IntegratedCare from "../components/v2/IntegratedCare.jsx";
import CorporateCommunity from "../components/v2/CorporateCommunity.jsx";
import NewsSection from "../components/v2/NewsSection.jsx";
import TrustedBy from "../components/v2/TrustedBy.jsx";
import P4Panels from "../components/v2/P4Panels.jsx";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
  featuredPackageIds,
  packages,
  visitSteps,
  Photo,
  lineUrl,
  phoneNumber,
  i as faqGroups,
} from "../site.jsx";

const visitStepIcons = [CalendarCheck, HeartPulse, ClipboardCheck];
const visitFaqTopics = [
  {
    th: `ก่อนเข้ารับบริการ`,
    en: `Before Your Visit`,
    keys: [`hp-services`, `hp-location`],
  },
  {
    th: `สิทธิและประกัน`,
    en: `Coverage & Insurance`,
    keys: [`hp-social-security`, `hp-insurance`],
  },
  {
    th: `การดูแลต่อเนื่อง`,
    en: `Ongoing Care`,
    keys: [`hp-elderly-care`, `hp-at-home`],
  },
];

export default function HomePageV2() {
  const hospitalQuestions = faqGroups.find((group) => group.key === `hospital`).items;
  const visitFaqGroups = visitFaqTopics.map((group) => ({
    ...group,
    items: group.keys.map((key) => hospitalQuestions.find((item) => item.key === key)),
  }));
  let { i18n: e } = useTranslation(),
    t = e.language === `th`;
  useHomeMeta();
  let n = useStaggerReveal({
      delayEach: 100,
    }),
    r = useStaggerReveal({
      delayEach: 120,
    });
  return (
    <div className={`home-v2`}>
      <Hero />
      <TrustedBy />
      {/* P4Wheel.jsx and P4Row.jsx are alternative P4 designs, kept unused to reuse elsewhere */}
      <P4Panels />
      <TeamSection />
      <CareNeeds />
      <ServicesOverview />
      <CommunityVideo />
      <HealthMonitoring />
      <FacilitiesGallery />
      <RevealSection className={`band-tint`}>
        <div className={`mx-auto max-w-6xl px-6 py-20`}>
          <div className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-1 mb-10`}>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-3xl font-semibold text-kmc-secondary`}
              text={t ? `แพ็กเกจแนะนำ` : `Featured Packages`}
            />
            <Link
              to={`/packages`}
              className={`text-kmc-secondary font-medium hover:underline inline-flex min-h-11 items-center`}
            >
              {t ? `ดูแพ็กเกจทั้งหมด →` : `See all packages →`}
            </Link>
          </div>
          <div ref={n} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
            {featuredPackageIds.map((e) => {
              let n = packages.find((t) => t.key === e);
              return n ? <PackageCard key={e} pkg={n} isTh={t} /> : null;
            })}
          </div>
        </div>
      </RevealSection>
      <IntegratedCare />
      <RevealSection className={`band-tint`}>
        <div className={`visit-planner mx-auto max-w-6xl px-6 py-20`}>
          <div className={`visit-planner__head`}>
            <div>
              <p className={`visit-planner__kicker font-display`}>
                {t ? `เตรียมตัวก่อนมา KMC` : `Before You Arrive`}
              </p>
              <AnimatedHeading
                as={`h2`}
                className={`font-display text-3xl font-semibold text-kmc-secondary`}
                text={t ? `วางแผนการเข้ารับบริการ` : `Plan Your Visit`}
              />
            </div>
            <p className={`visit-planner__intro`}>
              {t
                ? `เห็นภาพตั้งแต่การเตรียมเอกสาร วันเข้ารับบริการ ไปจนถึงการติดตามหลังกลับบ้าน`
                : `See what to prepare, what happens during care, and how follow-up works after you return home.`}
            </p>
          </div>
          <div className={`visit-planner__grid`}>
            <section className={`visit-planner__steps`} aria-labelledby={`visit-steps-title`}>
              <div className={`visit-planner__panel-head`}>
                <span className={`font-display`}>{t ? `ลำดับการเข้ารับบริการ` : `Care Flow`}</span>
                <h3 id={`visit-steps-title`} className={`font-display`}>
                  {t ? `รู้ว่าต้องทำอะไรในแต่ละช่วง` : `Know what happens next`}
                </h3>
              </div>
              <ol ref={r} className={`visit-planner__list`}>
                {visitSteps.map((e, n) => {
                  const StepIcon = visitStepIcons[n];
                  return (
                  <li key={e.en} className={`visit-planner__step`}>
                    <span className={`visit-planner__step-marker`} aria-hidden={`true`}>
                      <StepIcon size={26} strokeWidth={1.6} />
                      <span className={`visit-planner__num font-display`}>{`0${n + 1}`}</span>
                    </span>
                    <div>
                      <h4 className={`font-display`}>{t ? e.th : e.en}</h4>
                      <p>{t ? e.descTh : e.descEn}</p>
                    </div>
                  </li>
                  );
                })}
              </ol>
            </section>
            <section className={`visit-planner__faq`} aria-labelledby={`visit-faq-title`}>
              <div className={`visit-planner__panel-head`}>
                <span className={`font-display`}>{t ? `คำถามที่พบบ่อย` : `FAQ by Topic`}</span>
                <h3 id={`visit-faq-title`} className={`font-display`}>
                  {t ? `เลือกดูตามเรื่องที่กังวล` : `Find answers by concern`}
                </h3>
              </div>
              <div className={`visit-planner__faq-groups`}>
                {visitFaqGroups.map((group) => (
                  <div key={group.en} className={`visit-planner__faq-group`}>
                    <p className={`font-display`}>{t ? group.th : group.en}</p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.key}>
                          <details className={`visit-planner__question`} name={`visit-faq`}>
                            <summary>
                              <span>{t ? item.th.q : item.en.q}</span>
                              <Plus className={`visit-planner__question-toggle`} size={20} aria-hidden={`true`} />
                            </summary>
                            <div className={`visit-planner__answer`}>
                              <p>{t ? item.th.a : item.en.a}</p>
                              {item.links?.map((link) => link.to ? (
                                <Link key={link.to} to={link.to} className={`visit-planner__answer-link`}>
                                  {t ? link.th : link.en}<ArrowRight size={14} aria-hidden={`true`} />
                                </Link>
                              ) : (
                                <a key={link.href} href={link.href} className={`visit-planner__answer-link`}
                                  {...(link.href.startsWith(`tel:`) ? {} : { target: `_blank`, rel: `noopener noreferrer` })}>
                                  {t ? link.th : link.en}<ArrowRight size={14} aria-hidden={`true`} />
                                </a>
                              ))}
                            </div>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link to={`/faq`} className={`visit-planner__all-faq`}>
                {t ? `ดูคำถามทั้งหมด` : `See all FAQs`}
                <span aria-hidden={`true`}>{`→`}</span>
              </Link>
            </section>
          </div>
        </div>
      </RevealSection>
      <CorporateCommunity />
      <NewsSection />
      {/* closing CTA, same design as the stroke rehab page: navy panel with the K-mark arcs */}
      <RevealSection className={`mx-auto max-w-6xl px-6 pb-24`}>
        <div className={`cta-final`}>
          <svg className={`cta-final__arcs`} viewBox={`0 0 800 800`} aria-hidden={`true`}>
            <path d={`M266.62,0H0c0,441.86,358.13,799.99,799.99,799.99v-266.62C505.41,533.38,266.62,294.59,266.62,0Z`} />
            <path d={`M800,266.62V0C358.14,0,0,358.13,0,799.99h266.62c0-294.58,238.79-533.37,533.38-533.38Z`} />
          </svg>
          <p className={`cta-final__eyebrow font-display`}>{t ? `KMC HOSPITAL · พร้อมดูแล` : `KMC HOSPITAL · HERE FOR YOU`}</p>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl sm:text-4xl font-semibold`}
            text={t ? `พร้อมดูแลคุณและครอบครัว` : `Ready to care for you and your family`}
          />
          <p className={`cta-final__lead`}>{t ? `แชท LINE หรือโทรหาเราได้ทันที` : `Chat on LINE or call us any time`}</p>
          <div className={`cta-final__actions`} data-cta-placement={`home-final`}>
            <a className={`cta-final__btn`} href={lineUrl} target={`_blank`} rel={`noopener noreferrer`} data-cta={``}>
              <svg viewBox={`0 0 24 24`} width={20} height={20} fill={`currentColor`} aria-hidden={`true`}>
                <path d={`M12 2C6.48 2 2 5.66 2 10.15c0 4.02 3.58 7.39 8.42 8.03.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.07-.46 5.8-3.42 7.92-5.85C21.44 13.5 22 11.9 22 10.15 22 5.66 17.52 2 12 2zm-3.3 10.6H7.05a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v3.7h1.25a.4.4 0 1 1 0 .8zm2.1 0h-.8a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v4.1a.4.4 0 0 1-.4.4zm4.65-.4a.4.4 0 0 1-.72.24l-1.88-2.56v2.32a.4.4 0 1 1-.8 0V8.1c0-.18.12-.34.29-.38a.4.4 0 0 1 .43.14l1.88 2.56V8.1a.4.4 0 1 1 .8 0v4.1zm2.65.4h-1.65a.4.4 0 0 1-.4-.4V8.1a.4.4 0 0 1 .4-.4h1.65a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8z`} />
              </svg>
              {t ? `แชท LINE` : `Chat on LINE`}
            </a>
            <a className={`cta-final__btn cta-final__btn--ghost`} href={`tel:${phoneNumber.replace(/-/g, ``)}`} data-cta={``}>
              <Phone size={18} aria-hidden={`true`} />
              {t ? `โทร ${phoneNumber}` : `Call ${phoneNumber}`}
            </a>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
