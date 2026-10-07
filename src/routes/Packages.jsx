import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element4 } from "../vendor/react-SEPqUFC0.js";
import { a as i } from "../vendor/motion-CB540VaL.js";
import { c as a, h as _Element3, m as _Element2, o as c, p as _Element } from "../site.jsx";
var u = e(t(), 1),
  d = i();
function f() {
  let { i18n: e } = n(),
    t = e.language === `th`,
    [i, f] = (0, u.useState)(`all`),
    p = (0, u.useMemo)(() => a(t), [t]),
    m = (0, u.useMemo)(() => c(t), [t]),
    h = (0, u.useMemo)(() => (i === `all` ? p : p.filter((e) => e.category === i)), [p, i]);
  return (
    <div>
      <_Element
        title={t ? `โปรแกรมสุขภาพและแพ็กเกจ` : `Health Programs & Packages`}
        subtitle={
          t
            ? `เลือกแพ็กเกจที่เหมาะกับความต้องการของครอบครัวคุณ`
            : `Find the package that fits your family.`
        }
        image={`hydro/float`}
        imageAlt={t ? `ผู้รับบริการออกกำลังกายในสระธาราบำบัด` : `Exercise in the hydrotherapy pool`}
      />
      <_Element2
        className={`sticky top-16 z-20 bg-kmc-bg/90 backdrop-blur-sm border-b border-kmc-secondary/10`}
      >
        <div className={`mx-auto max-w-6xl px-6 py-4 flex flex-wrap gap-2.5`}>
          <button
            onClick={() => f(`all`)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === `all` ? `bg-kmc-secondary text-white` : `bg-white text-kmc-secondary/70 border border-kmc-secondary/15 hover:border-kmc-secondary/40`}`}
          >
            {t ? `ทั้งหมด` : `All`}
          </button>
          {m.map((e) => (
            <button
              key={e}
              onClick={() => f(e)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === e ? `bg-kmc-secondary text-white` : `bg-white text-kmc-secondary/70 border border-kmc-secondary/15 hover:border-kmc-secondary/40`}`}
            >
              {e}
            </button>
          ))}
        </div>
      </_Element2>
      <_Element2 className={`mx-auto max-w-4xl px-6 py-12 flex flex-col gap-4`}>
        {h.map((e) => (
          <div
            key={e.key}
            className={`rounded-2xl border border-kmc-secondary/10 bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6`}
          >
            {e.photo && (
              <div
                className={`shrink-0 w-full sm:w-40 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden`}
              >
                <_Element3
                  name={e.photo}
                  alt={``}
                  sizes={`(min-width: 640px) 160px, 100vw`}
                  className={`w-full h-full object-cover`}
                />
              </div>
            )}
            <div className={`flex-1 min-w-0`}>
              <p
                className={`text-xs uppercase tracking-[0.2em] text-kmc-primary-deep font-medium mb-1.5`}
              >
                {e.category}
              </p>
              <p className={`font-display text-lg font-medium text-kmc-secondary mb-1.5`}>
                {e.name}
              </p>
              <p className={`text-sm text-kmc-secondary/75 max-w-lg`}>{e.desc}</p>
            </div>
            <div className={`flex flex-col sm:items-end gap-2 shrink-0`}>
              {e.price ? (
                <p className={`font-display font-medium text-kmc-secondary`}>{e.price}</p>
              ) : (
                <p className={`text-sm text-kmc-secondary/70`}>
                  {`[ `}
                  {t ? `ราคา / รายละเอียด` : `Price / details`}
                  {` ]`}
                </p>
              )}
              <_Element4
                to={`/packages/${e.key}`}
                className={`inline-flex min-h-11 items-center gap-1 rounded-full bg-kmc-secondary text-white text-sm font-medium px-5 py-2 hover:brightness-125 transition whitespace-nowrap`}
              >
                {t ? `ดูรายละเอียด` : `View details`}
                <span aria-hidden={`true`}>{`→`}</span>
              </_Element4>
            </div>
          </div>
        ))}
        {h.length === 0 && (
          <p className={`text-center text-kmc-secondary/50 py-16`}>
            {t ? `ไม่พบแพ็กเกจในหมวดนี้` : `No packages in this category yet.`}
          </p>
        )}
      </_Element2>
    </div>
  );
}
export { f as default };
