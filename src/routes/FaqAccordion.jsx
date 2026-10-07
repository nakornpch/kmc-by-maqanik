import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element } from "../vendor/react-SEPqUFC0.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import { d as r, i } from "../site.jsx";
var a = n();
function _Element3({ link: e, isTh: n }) {
  let r = n ? e.th : e.en,
    i = `inline-flex items-center gap-1.5 rounded-full border border-kmc-secondary/20 bg-fog-1/60 px-4 py-2 text-xs font-medium text-kmc-secondary hover:border-kmc-secondary/50 hover:bg-fog-1 transition`;
  if (e.to)
    return (
      <_Element to={e.to} className={i}>
        {r}
        {` `}
        <span aria-hidden={`true`}>{`→`}</span>
      </_Element>
    );
  let o = e.href.startsWith(`tel:`);
  return (
    <a
      href={e.href}
      className={i}
      {...(o
        ? {}
        : {
            target: `_blank`,
            rel: `noopener noreferrer`,
          })}
    >
      {r}
      {` `}
      <span aria-hidden={`true`}>{o ? `☎` : `↗`}</span>
    </a>
  );
}
var s = `inline-flex items-center gap-1 rounded-full border border-kmc-secondary/20 bg-white px-3 py-1.5 text-xs font-medium text-kmc-secondary hover:border-kmc-secondary/50 transition`;
function _Element2({ branch: e, isTh: t }) {
  let n = t ? e.th : e.en;
  return (
    <div className={`rounded-xl border border-kmc-secondary/15 bg-fog-1/40 p-4`}>
      <p className={`font-display font-medium text-kmc-secondary`}>{n.name}</p>
      <p className={`text-xs text-kmc-secondary/50 mt-0.5`}>{n.note}</p>
      <p className={`text-xs text-kmc-secondary/70 mt-2 leading-relaxed`}>{n.address}</p>
      {e.fromPrice && (
        <p className={`text-xs font-medium text-kmc-primary-deep mt-2`}>
          {t
            ? `เริ่มต้น ${e.fromPrice.toLocaleString(`en-US`)} บาท/เดือน`
            : `From ฿${e.fromPrice.toLocaleString(`en-US`)}/month`}
        </p>
      )}
      <div className={`mt-3 flex flex-wrap gap-2`}>
        <a href={e.mapUrl} target={`_blank`} rel={`noopener noreferrer`} className={s}>
          {t ? `ดูแผนที่` : `Map`}
          {` `}
          <span aria-hidden={`true`}>{`↗`}</span>
        </a>
        {e.detailUrl && (
          <a href={e.detailUrl} target={`_blank`} rel={`noopener noreferrer`} className={s}>
            {t ? `รายละเอียดสาขา` : `Branch details`}
            {` `}
            <span aria-hidden={`true`}>{`↗`}</span>
          </a>
        )}
      </div>
    </div>
  );
}
function l() {
  let { i18n: t } = e(),
    n = t.language === `th`;
  return (
    <div
      ref={r({
        delayEach: 60,
      })}
      className={`space-y-12`}
    >
      {i.map((e) => (
        <section key={e.key}>
          <h2 className={`font-display text-xl font-medium text-kmc-secondary mb-4`}>
            {n ? e.th : e.en}
          </h2>
          <div className={`space-y-3`}>
            {e.items.map((e) => {
              let t = n ? e.th : e.en;
              return (
                <details
                  key={e.key}
                  className={`group rounded-2xl bg-white border border-kmc-secondary/10 px-6 open:shadow-lg open:shadow-kmc-primary/10 transition-shadow`}
                >
                  <summary
                    className={`flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-display font-medium text-kmc-secondary [&::-webkit-details-marker]:hidden`}
                  >
                    {t.q}
                    <span
                      aria-hidden={`true`}
                      className={`shrink-0 w-6 h-6 rounded-full bg-fog-1 text-kmc-primary-deep flex items-center justify-center text-sm transition-transform duration-300 group-open:rotate-45`}
                    >{`+`}</span>
                  </summary>
                  <div className={`pb-6`}>
                    <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>{t.a}</p>
                    {e.branches?.length > 0 && (
                      <div className={`mt-4 grid gap-3 sm:grid-cols-2`}>
                        {e.branches.map((e) => (
                          <_Element2 key={e.key} branch={e} isTh={n} />
                        ))}
                      </div>
                    )}
                    {e.links?.length > 0 && (
                      <div className={`mt-4 flex flex-wrap gap-2`}>
                        {e.links.map((e) => (
                          <_Element3 key={e.to || e.href} link={e} isTh={n} />
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
export { l as t };
