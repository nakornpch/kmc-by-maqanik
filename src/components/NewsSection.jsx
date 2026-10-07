import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  newsItems,
  jsxRuntime,
  RevealSection,
  AnimatedHeading,
} from "../site.jsx";
export default function NewsSection() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    n = useStaggerReveal({
      delayEach: 80,
    });
  return newsItems.length ? (
    <RevealSection className={`mx-auto max-w-6xl px-6 py-20`}>
      <div className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-1 mb-10`}>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl font-semibold text-kmc-secondary`}
          text={t ? `ข่าวสารประชาสัมพันธ์` : `News & Announcements`}
        />
        <Link
          to={`/blog`}
          className={`text-kmc-secondary font-medium hover:underline inline-flex min-h-11 items-center`}
        >
          {t ? `ดูทั้งหมด →` : `See all →`}
        </Link>
      </div>
      <div ref={n} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {newsItems.map((e) => {
          let n = t ? e.th : e.en;
          return (
            <article
              key={e.key}
              className={`rounded-2xl border border-kmc-secondary/10 bg-white p-7`}
            >
              <p className={`text-xs text-kmc-secondary/75 mb-2`}>{e.date}</p>
              <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
                {n.title}
              </h3>
              <p className={`text-sm text-kmc-secondary/65 leading-relaxed`}>{n.summary}</p>
            </article>
          );
        })}
      </div>
    </RevealSection>
  ) : null;
}
