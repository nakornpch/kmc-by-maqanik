import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element3 } from "../vendor/react-SEPqUFC0.js";
import { t as i } from "./usePageMeta.jsx";
import { a } from "../vendor/motion-CB540VaL.js";
import { d as o, h as _Element4, m as _Element2, p as _Element, r as u } from "../site.jsx";
import { t as _Element5 } from "./FaqAccordion.jsx";
import { r as f } from "./posts.jsx";
var p = e(t(), 1),
  m = a(),
  h = [
    `chinese/herb-jar`,
    `physio/walking`,
    `sleep/nurse-chat`,
    `thai/neck`,
    `hydro/group-class`,
    `hospital/health-measure`,
  ];
function g(e, t) {
  try {
    return new Date(e).toLocaleDateString(t ? `th-TH` : `en-GB`, {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
    });
  } catch {
    return ``;
  }
}
var _ = [
  {
    key: `news`,
    th: `ข่าวทั่วไป`,
    en: `General News`,
  },
  {
    key: `faq`,
    th: `คำถามที่พบบ่อย`,
    en: `FAQ`,
  },
];
function v(e, t) {
  (0, p.useEffect)(() => {
    let n = `faq-jsonld`;
    if ((document.getElementById(n)?.remove(), !e)) return;
    let r = document.createElement(`script`);
    return (
      (r.id = n),
      (r.type = `application/ld+json`),
      (r.textContent = JSON.stringify({
        "@context": `https://schema.org`,
        "@type": `FAQPage`,
        mainEntity: u.map((e) => ({
          "@type": `Question`,
          name: t ? e.th.q : e.en.q,
          acceptedAnswer: {
            "@type": `Answer`,
            text: t ? e.th.a : e.en.a,
          },
        })),
      })),
      document.head.appendChild(r),
      () => r.remove()
    );
  }, [e, t]);
}
function y() {
  let { i18n: e } = n(),
    t = e.language === `th`,
    [a, u] = (0, p.useState)(`news`),
    [y, b] = (0, p.useState)(null),
    x = o({
      delayEach: 70,
    }),
    S = f(t),
    C = [...new Set(S.flatMap((e) => e.categories))],
    w = y ? S.filter((e) => e.categories.includes(y)) : S;
  return (
    i({
      title: t ? `ศูนย์ความรู้ / บทความ` : `Knowledge Center`,
      description: t
        ? `บทความสุขภาพ ข่าวสาร และคำถามที่พบบ่อยเกี่ยวกับการดูแลผู้สูงอายุ การฟื้นฟูสมรรถภาพ และบริการของ KMC Hospital`
        : `Health articles, hospital news, and frequently asked questions about elderly care, rehabilitation, and KMC Hospital services.`,
    }),
    v(a === `faq`, t),
    (
      <div>
        <_Element
          title={t ? `ศูนย์ความรู้ / บทความ` : `Knowledge Center`}
          subtitle={
            t
              ? `ข่าวสาร บทความสุขภาพ และคำถามที่พบบ่อย รวมไว้ในที่เดียว`
              : `News, health articles, and frequently asked questions in one place.`
          }
          image={`chinese/pulse-hands`}
          imageAlt={t ? `แพทย์แผนจีนตรวจชีพจร` : `A Chinese medicine doctor reading a pulse`}
        />
        <_Element2
          className={`sticky top-16 z-20 bg-kmc-bg/90 backdrop-blur-sm border-b border-kmc-secondary/10`}
        >
          <div className={`mx-auto max-w-6xl px-6 py-4 flex gap-2.5`}>
            {_.map((e) => (
              <button
                key={e.key}
                onClick={() => u(e.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${a === e.key ? `bg-kmc-secondary text-white` : `bg-white text-kmc-secondary/70 border border-kmc-secondary/15 hover:border-kmc-secondary/40`}`}
              >
                {t ? e.th : e.en}
              </button>
            ))}
          </div>
        </_Element2>
        {a === `news` ? (
          <_Element2 className={`mx-auto max-w-6xl px-6 py-16`}>
            {C.length > 0 && (
              <div className={`flex flex-wrap gap-2.5 mb-10`}>
                <button
                  type={`button`}
                  onClick={() => b(null)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${y === null ? `bg-kmc-secondary text-white` : `border border-kmc-secondary/20 text-kmc-secondary/70 hover:border-kmc-secondary/50`}`}
                >
                  {t ? `ทั้งหมด` : `All`}
                </button>
                {C.map((e) => (
                  <button
                    key={e}
                    type={`button`}
                    onClick={() => b(e)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition ${y === e ? `bg-kmc-secondary text-white` : `border border-kmc-secondary/20 text-kmc-secondary/70 hover:border-kmc-secondary/50`}`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}
            {w.length > 0 ? (
              <div ref={x} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
                {w.map((e, n) => (
                  <_Element3
                    key={e.slug}
                    to={`/blog/${e.slug}`}
                    className={`group rounded-2xl border border-kmc-secondary/10 bg-white overflow-hidden hover:shadow-xl hover:shadow-kmc-primary/15 hover:-translate-y-1 transition-all`}
                  >
                    <div
                      className={`aspect-[16/9] overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3`}
                    >
                      {e.image ? (
                        <img
                          src={e.image}
                          alt={e.imageAlt}
                          loading={`lazy`}
                          decoding={`async`}
                          className={`w-full h-full object-cover`}
                        />
                      ) : (
                        <_Element4
                          name={h[n % h.length]}
                          alt={``}
                          sizes={`(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                        />
                      )}
                    </div>
                    <div className={`p-6`}>
                      {e.categories.length > 0 && (
                        <p
                          className={`font-display uppercase tracking-[0.2em] text-[0.65rem] text-kmc-primary-deep mb-2`}
                        >
                          {e.categories[0]}
                        </p>
                      )}
                      <p
                        className={`font-display text-lg font-medium text-kmc-secondary mb-2 leading-snug`}
                      >
                        {e.title}
                      </p>
                      <p
                        className={`text-sm text-kmc-secondary/60 leading-relaxed line-clamp-3 mb-3`}
                      >
                        {e.excerpt}
                      </p>
                      <p className={`text-xs text-kmc-secondary/40`}>{g(e.date, t)}</p>
                    </div>
                  </_Element3>
                ))}
              </div>
            ) : (
              <div
                className={`rounded-3xl border border-dashed border-kmc-secondary/25 p-12 text-center`}
              >
                <p className={`font-display text-lg text-kmc-secondary/70 mb-2`}>
                  {t ? `ยังไม่มีบทความเผยแพร่` : `No articles published yet`}
                </p>
                <p className={`text-sm text-kmc-secondary/50`}>
                  {t
                    ? `บทความจากทีมของเราจะแสดงที่นี่เร็ว ๆ นี้`
                    : `Articles from our team will appear here soon.`}
                </p>
              </div>
            )}
          </_Element2>
        ) : (
          <_Element2 className={`mx-auto max-w-3xl px-6 py-16`}>
            <_Element5 />
            <div
              className={`mt-12 rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-8 py-10 text-center`}
            >
              <p className={`font-display text-lg font-medium text-kmc-secondary mb-4`}>
                {t ? `ยังไม่พบคำตอบที่ต้องการ?` : `Still have a question?`}
              </p>
              <_Element3
                to={`/contact`}
                className={`inline-block rounded-full bg-kmc-secondary text-white px-7 py-3 font-medium hover:brightness-110 transition`}
              >
                {t ? `ติดต่อทีมงาน` : `Contact our team`}
              </_Element3>
            </div>
          </_Element2>
        )}
      </div>
    )
  );
}
export { y as default };
