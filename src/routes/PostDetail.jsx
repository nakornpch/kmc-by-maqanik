import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5, u as n } from "../vendor/react-SEPqUFC0.js";
import { t as r } from "./usePageMeta.jsx";
import { a as i } from "../vendor/motion-CB540VaL.js";
import { _ as _Element2, m as _Element4, y as _Element3 } from "../site.jsx";
import _Element from "./NotFound.jsx";
import { n as l, t as u } from "./posts.jsx";
var d = i();
function f(e, t) {
  try {
    return new Date(e).toLocaleDateString(t ? `th-TH` : `en-GB`, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    });
  } catch {
    return ``;
  }
}
function p() {
  let { slug: i } = n(),
    { i18n: p } = e(),
    m = p.language === `th`,
    h = l(i);
  if (
    (r({
      title: h ? h.title : m ? `ไม่พบบทความ` : `Article not found`,
      description: h?.excerpt,
      contentLocale: h?.lang,
    }),
    !h)
  )
    return <_Element />;
  let g = u.filter((e) => e.slug !== i).slice(0, 3);
  return (
    <div>
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 py-20`}
      >
        <div className={`mx-auto max-w-3xl px-6`}>
          <_Element2 current={h.title} className={`mb-4`} />
          {h.categories.length > 0 && (
            <p
              className={`font-display uppercase tracking-[0.25em] text-xs text-kmc-primary-deep mb-3`}
            >
              {h.categories.join(` · `)}
            </p>
          )}
          <_Element3
            as={`h1`}
            className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary leading-snug`}
            text={h.title}
          />
          <p className={`mt-4 text-sm text-kmc-secondary/55`}>{f(h.date, m)}</p>
        </div>
      </div>
      {h.image && (
        <_Element4 className={`mx-auto max-w-4xl px-6 pt-12`}>
          <div className={`aspect-[16/9] rounded-3xl overflow-hidden`}>
            <img
              src={h.image}
              alt={h.imageAlt}
              loading={`lazy`}
              decoding={`async`}
              className={`w-full h-full object-cover`}
            />
          </div>
        </_Element4>
      )}
      <_Element4 className={`mx-auto max-w-3xl px-6 py-14`}>
        <div
          className={`article-body text-kmc-secondary/80 leading-relaxed`}
          dangerouslySetInnerHTML={{
            __html: h.content,
          }}
        />
      </_Element4>
      {g.length > 0 && (
        <_Element4 className={`mx-auto max-w-6xl px-6 pb-20`}>
          <h2 className={`font-display text-xl font-semibold text-kmc-secondary mb-6`}>
            {m ? `บทความอื่น ๆ` : `More articles`}
          </h2>
          <div className={`grid sm:grid-cols-3 gap-5`}>
            {g.map((e) => (
              <_Element5
                key={e.slug}
                to={`/blog/${e.slug}`}
                className={`rounded-2xl border border-kmc-secondary/10 bg-white p-6 hover:shadow-xl hover:shadow-kmc-primary/15 hover:-translate-y-1 transition-all`}
              >
                <p className={`font-display font-medium text-kmc-secondary mb-2`}>{e.title}</p>
                <p className={`text-sm text-kmc-secondary/60 leading-relaxed line-clamp-3`}>
                  {e.excerpt}
                </p>
              </_Element5>
            ))}
          </div>
        </_Element4>
      )}
      <_Element4 className={`mx-auto max-w-3xl px-6 pb-24 text-center`}>
        <_Element5 to={`/blog`} className={`text-kmc-secondary font-medium hover:underline`}>
          {`← `}
          {m ? `กลับไปศูนย์ความรู้` : `Back to the Knowledge Center`}
        </_Element5>
      </_Element4>
    </div>
  );
}
export { p as default };
