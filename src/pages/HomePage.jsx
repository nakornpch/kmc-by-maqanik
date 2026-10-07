import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { t as useHomeMeta } from "../routes/usePageMeta.jsx";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  jsxRuntime,
  Hero,
  RevealSection,
  trustPoints,
  P4Section,
  TeamSection,
  CareNeeds,
  ServicesOverview,
  HospitalBackdrop,
  AnimatedHeading,
  HealthMonitoring,
  amenities,
  ParallaxGallery,
  facilityPhotos,
  featuredPackageIds,
  packages,
  PackageCard,
  IntegratedCare,
  visitSteps,
  Photo,
  CorporateCommunity,
  NewsSection,
  ContactButtons,
  lineUrl,
  phoneNumber,
} from "../site.jsx";
export default function HomePage() {
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
    <div>
      <Hero />
      <RevealSection className={`border-b border-kmc-secondary/10 bg-white/70`}>
        <div
          className={`mx-auto max-w-6xl px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8`}
        >
          {trustPoints.map((e) => (
            <div key={e.en} className={`flex items-start gap-3`}>
              <svg
                viewBox={`0 0 24 24`}
                className={`w-5 h-5 mt-0.5 shrink-0 text-kmc-primary-deep`}
                aria-hidden={`true`}
                fill={`none`}
                stroke={`currentColor`}
                strokeWidth={`2`}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
              >
                <path d={`M20 7 9 18l-5-5`} />
              </svg>
              <div>
                <p className={`font-display font-medium text-kmc-secondary text-sm`}>
                  {t ? e.th : e.en}
                </p>
                <p className={`text-xs text-kmc-secondary/75 mt-0.5`}>{t ? e.descTh : e.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
      <P4Section />
      <TeamSection />
      <CareNeeds />
      <ServicesOverview />
      <section className={`relative overflow-hidden bg-kmc-secondary text-white`}>
        <HospitalBackdrop className={`absolute inset-0`} />
        <RevealSection as={`div`} className={`relative mx-auto max-w-5xl px-6 py-20 text-center`}>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl sm:text-4xl font-semibold mb-8 leading-snug`}
            lines={
              t
                ? [`โรงพยาบาลชุมชนครบวงจร`, `ภายใต้เครือ KMC Health`]
                : [`A Full-Service Community Hospital`, `Under KMC Health Group`]
            }
          />
          <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden`}>
            <img
              src={`/images/home/hospital-front.jpg`}
              alt={t ? `อาคาร KMC Hospital` : `The KMC Hospital building`}
              loading={`lazy`}
              decoding={`async`}
              className={`absolute inset-0 w-full h-full object-cover`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-kmc-secondary/50 via-transparent to-transparent`}
            />
          </div>
        </RevealSection>
      </section>
      <HealthMonitoring />
      <RevealSection
        className={`mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center`}
      >
        <div>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl font-semibold text-kmc-secondary mb-6`}
            text={t ? `สิ่งอำนวยความสะดวก` : `Accommodations`}
          />
          <ul className={`space-y-3 mb-8`}>
            {amenities.map((e) => (
              <li key={e.en} className={`flex items-center gap-3 text-kmc-secondary/80`}>
                <span
                  className={`w-1.5 h-1.5 shrink-0 rounded-full bg-kmc-secondary`}
                  aria-hidden={`true`}
                />
                {t ? e.th : e.en}
              </li>
            ))}
          </ul>
          <Link
            to={`/facilities`}
            className={`inline-flex min-h-11 items-center text-kmc-secondary font-medium hover:underline`}
          >
            {t ? `ดูรายละเอียด →` : `See details →`}
          </Link>
        </div>
        <ParallaxGallery className={`grid grid-cols-2 gap-4`}>
          {facilityPhotos.map((e) => (
            <div key={e.src} className={`aspect-square rounded-2xl overflow-hidden`}>
              <img
                src={e.src}
                alt={t ? e.th : e.en}
                loading={`lazy`}
                decoding={`async`}
                className={`w-full h-full object-cover`}
              />
            </div>
          ))}
        </ParallaxGallery>
      </RevealSection>
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
        <div className={`mx-auto max-w-6xl px-6 py-20`}>
          <div className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-1 mb-10`}>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-3xl font-semibold text-kmc-secondary`}
              text={t ? `วางแผนการเข้ารับบริการ` : `Plan Your Visit`}
            />
            <Link
              to={`/faq`}
              className={`text-kmc-secondary font-medium hover:underline inline-flex min-h-11 items-center`}
            >
              {t ? `คำถามที่พบบ่อย →` : `FAQ →`}
            </Link>
          </div>
          <ol ref={r} className={`grid md:grid-cols-3 gap-6`}>
            {visitSteps.map((e, n) => (
              <li
                key={e.en}
                className={`rounded-2xl border border-kmc-secondary/10 bg-white overflow-hidden`}
              >
                <div className={`aspect-[16/10] overflow-hidden`}>
                  <Photo
                    name={e.photo}
                    alt={``}
                    sizes={`(min-width: 768px) 33vw, 100vw`}
                    className={`w-full h-full object-cover`}
                  />
                </div>
                <div className={`p-8`}>
                  <span
                    className={`font-display text-sm font-medium text-kmc-primary-deep`}
                    aria-hidden={`true`}
                  >
                    {`0`}
                    {n + 1}
                  </span>
                  <h3 className={`font-display text-lg font-medium text-kmc-secondary mt-2 mb-3`}>
                    {t ? e.th : e.en}
                  </h3>
                  <p className={`text-sm text-kmc-secondary/75 leading-relaxed`}>
                    {t ? e.descTh : e.descEn}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>
      <CorporateCommunity />
      <NewsSection />
      <RevealSection className={`mx-auto max-w-4xl px-6 pb-28 text-center`}>
        <div className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-10 py-14`}>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-3`}
            text={t ? `พร้อมดูแลคุณและครอบครัว` : `Ready to care for you and your family`}
          />
          <p className={`text-kmc-secondary/75`}>
            {t ? `แชท LINE หรือโทรหาเราได้ทันที` : `Chat on LINE or call us any time`}
          </p>
          <ContactButtons
            className={`mt-7`}
            primary={{
              label: t ? `แชท LINE` : `Chat on LINE`,
              href: lineUrl,
            }}
            secondary={{
              label: t ? `โทร ${phoneNumber}` : `Call ${phoneNumber}`,
              href: `tel:${phoneNumber.replace(/-/g, ``)}`,
            }}
          />
        </div>
      </RevealSection>
    </div>
  );
}
