import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import {
  useStaggerReveal,
  jsxRuntime,
  RevealSection,
  nt as _Element,
  AnimatedHeading,
  serviceGroups,
  ServiceCategoryCard,
} from "../site.jsx";
export default function ServicesOverview() {
  let { t: e, i18n: t } = useTranslation(),
    n = t.language === `th`,
    r = useStaggerReveal({
      delayEach: 90,
    });
  return (
    <RevealSection
      className={`relative isolate overflow-hidden bg-gradient-to-b from-fog-1 via-fog-2 to-fog-3`}
    >
      <_Element variant={`sweep`} />
      <div className={`relative mx-auto max-w-6xl px-6 py-20`}>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl font-semibold text-kmc-secondary mb-10 text-center`}
          text={e(`servicesOverview.title`)}
        />
        <div ref={r} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {serviceGroups.map((e) => (
            <ServiceCategoryCard key={e.key} group={e} isTh={n} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
