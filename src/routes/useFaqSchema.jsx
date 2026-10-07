import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t } from "../vendor/i18n-CAiZPsdd.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import { d as r } from "../site.jsx";
var i = n();
function a({ items: e = [] }) {
  let t = r({
    delayEach: 60,
  });
  return e.length ? (
    <div ref={t} className={`space-y-3`}>
      {e.map((e) => (
        <details
          key={e.q}
          className={`group rounded-2xl bg-white border border-kmc-secondary/10 px-6 open:shadow-lg open:shadow-kmc-primary/10 transition-shadow`}
        >
          <summary
            className={`flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-display font-medium text-kmc-secondary [&::-webkit-details-marker]:hidden`}
          >
            {e.q}
            <span
              aria-hidden={`true`}
              className={`shrink-0 w-6 h-6 rounded-full bg-fog-1 text-kmc-primary-deep flex items-center justify-center text-sm transition-transform duration-300 group-open:rotate-45`}
            >{`+`}</span>
          </summary>
          <div className={`pb-6`}>
            <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>{e.a}</p>
          </div>
        </details>
      ))}
    </div>
  ) : null;
}
var o = e(t(), 1);
function s(e, t = `faq-jsonld`) {
  let n = e?.length
    ? JSON.stringify({
        "@context": `https://schema.org`,
        "@type": `FAQPage`,
        mainEntity: e.map((e) => ({
          "@type": `Question`,
          name: e.q,
          acceptedAnswer: {
            "@type": `Answer`,
            text: e.a,
          },
        })),
      })
    : null;
  (0, o.useEffect)(() => {
    if ((document.getElementById(t)?.remove(), !n)) return;
    let e = document.createElement(`script`);
    return (
      (e.id = t),
      (e.type = `application/ld+json`),
      (e.textContent = n),
      document.head.appendChild(e),
      () => e.remove()
    );
  }, [n, t]);
}
export { a as n, s as t };
