import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element3 } from "../vendor/react-SEPqUFC0.js";
import { t as n } from "./usePageMeta.jsx";
import { a as r } from "../vendor/motion-CB540VaL.js";
import { h as _Element2, m as _Element } from "../site.jsx";
var o = r();
function s() {
  let { i18n: r } = e(),
    s = r.language === `th`;
  return (
    n({
      title: s ? `ไม่พบหน้านี้` : `Page not found`,
      noindex: !0,
    }),
    (
      <_Element className={`mx-auto max-w-3xl px-6 py-24 text-center`}>
        <div className={`mx-auto mb-8 w-full max-w-md aspect-[16/9] rounded-3xl overflow-hidden`}>
          <_Element2
            name={`hydro/pool-lift`}
            alt={s ? `สระธาราบำบัดของโรงพยาบาล` : `The hospital hydrotherapy pool`}
            sizes={`448px`}
            className={`w-full h-full object-cover`}
          />
        </div>
        <p className={`font-display text-8xl font-semibold text-kmc-primary mb-4`}>{`404`}</p>
        <h1 className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-3`}>
          {s ? `ไม่พบหน้าที่คุณกำลังมองหา` : `We can't find that page`}
        </h1>
        <p className={`text-kmc-secondary/60 mb-10`}>
          {s
            ? `หน้านี้อาจถูกย้ายหรือยังไม่เปิดใช้งาน ลองเริ่มจากลิงก์ด้านล่างนี้`
            : `It may have moved or is not live yet. Try one of these instead.`}
        </p>
        <div className={`flex flex-wrap justify-center gap-4`}>
          {[
            {
              to: `/`,
              th: `กลับหน้าแรก`,
              en: `Back to home`,
            },
            {
              to: `/services`,
              th: `ดูบริการของเรา`,
              en: `Browse our services`,
            },
            {
              to: `/contact`,
              th: `ติดต่อเรา`,
              en: `Contact us`,
            },
          ].map((e, n) => (
            <_Element3
              key={e.to}
              to={e.to}
              className={
                n === 0
                  ? `rounded-full bg-kmc-secondary text-white px-7 py-3 font-medium hover:brightness-110 transition`
                  : `rounded-full border border-kmc-secondary/30 text-kmc-secondary px-7 py-3 font-medium hover:bg-fog-1 transition`
              }
            >
              {s ? e.th : e.en}
            </_Element3>
          ))}
        </div>
      </_Element>
    )
  );
}
export { s as default };
