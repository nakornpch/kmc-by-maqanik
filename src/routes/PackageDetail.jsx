import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element9, u as n } from "../vendor/react-SEPqUFC0.js";
import { t as r } from "./usePageMeta.jsx";
import { a as i } from "../vendor/motion-CB540VaL.js";
import {
  C as a,
  _ as _Element3,
  a as s,
  c,
  f as _Element2,
  h as _Element6,
  l as _Element8,
  m as _Element5,
  n as p,
  s as m,
  y as _Element4,
} from "../site.jsx";
import _Element from "./NotFound.jsx";
var _ = i();
function _Element7({ children: e }) {
  return (
    <p
      className={`rounded-xl border border-dashed border-kmc-secondary/25 bg-white px-5 py-4 text-sm text-kmc-secondary/75`}
    >
      {e}
    </p>
  );
}
function y() {
  let { slug: i } = n(),
    { i18n: y } = e(),
    b = y.language === `th`,
    x = s(i, b);
  if (
    (r({
      title: x ? x.name : b ? `ไม่พบแพ็กเกจ` : `Package not found`,
      description: x?.desc,
      noindex: !x || !m(x),
    }),
    !x)
  )
    return <_Element />;
  let S = c(b)
      .filter((e) => e.key !== x.key && e.category === x.category)
      .slice(0, 3),
    C = {
      primary: {
        label: b ? `สอบถามผ่าน LINE` : `Ask us on LINE`,
        href: a,
      },
      secondary: {
        label: b ? `โทร ${p}` : `Call ${p}`,
        href: `tel:${p.replace(/-/g, ``)}`,
      },
    };
  return (
    <div>
      <_Element2>
        <_Element3 current={x.name} className={`mb-4`} />
        {x.category && (
          <p
            className={`font-display uppercase tracking-[0.25em] text-xs font-medium text-kmc-secondary mb-3`}
          >
            {x.category}
          </p>
        )}
        <_Element4
          as={`h1`}
          className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary leading-snug max-w-3xl`}
          text={x.name}
        />
        <p className={`mt-4 text-kmc-secondary/80 leading-relaxed max-w-2xl`}>{x.desc}</p>
      </_Element2>
      <_Element5
        className={`mx-auto max-w-6xl px-6 py-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start`}
      >
        <div className={`min-w-0`}>
          <div
            className={`relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3`}
          >
            {x.image ? (
              <img
                src={x.image}
                alt={x.imageAlt}
                loading={`lazy`}
                decoding={`async`}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
            ) : x.photo ? (
              <_Element6
                name={x.photo}
                alt={x.name}
                sizes={`(min-width: 1024px) 60vw, 100vw`}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
            ) : (
              <div className={`absolute inset-0 flex items-center justify-center`}>
                <span
                  className={`text-sm bg-white/80 text-kmc-secondary/80 px-3 py-1.5 rounded-md border border-kmc-secondary/10`}
                >
                  {b ? `รอภาพแพ็กเกจ` : `Package image coming soon`}
                </span>
              </div>
            )}
          </div>
          <h2 className={`font-display text-2xl font-semibold text-kmc-secondary mt-12 mb-5`}>
            {b ? `รายละเอียดแพ็กเกจ` : `What the package includes`}
          </h2>
          {x.content ? (
            <div
              className={`article-body text-kmc-secondary/80 leading-relaxed`}
              dangerouslySetInnerHTML={{
                __html: x.content,
              }}
            />
          ) : x.includes.length > 0 ? (
            <ul className={`grid gap-3 sm:grid-cols-2`}>
              {x.includes.map((e) => (
                <li
                  key={e}
                  className={`flex items-start gap-3 rounded-2xl border border-kmc-secondary/10 bg-white px-5 py-4 text-kmc-secondary/85`}
                >
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
                  {e}
                </li>
              ))}
            </ul>
          ) : (
            <_Element7>
              {b
                ? `รายการตรวจและบริการในแพ็กเกจนี้กำลังจัดเตรียม สอบถามรายละเอียดได้ทาง LINE หรือโทรหาเรา`
                : `The full list of what this package covers is on its way. Ask us on LINE or call for details.`}
            </_Element7>
          )}
        </div>
        <aside
          aria-label={b ? `ราคาและการจอง` : `Price and booking`}
          className={`rounded-3xl border border-kmc-secondary/10 bg-white p-7 lg:sticky lg:top-24`}
        >
          <p className={`text-sm text-kmc-secondary/75 mb-1`}>{b ? `ราคา` : `Price`}</p>
          {x.price ? (
            <p className={`font-display text-3xl font-semibold text-kmc-secondary`}>{x.price}</p>
          ) : (
            <p className={`font-display text-lg font-medium text-kmc-secondary`}>
              {b ? `สอบถามราคา` : `Price on request`}
            </p>
          )}
          <p className={`mt-3 text-sm text-kmc-secondary/75 leading-relaxed`}>
            {b
              ? `ทีมงานช่วยแนะนำแพ็กเกจที่เหมาะกับคุณ และนัดหมายวันเข้ารับบริการ`
              : `Our team can help you choose the right package and book a date.`}
          </p>
          <_Element8 className={`mt-6 flex-col [&>*]:text-center`} {...C} />
        </aside>
      </_Element5>
      {S.length > 0 && (
        <_Element5 className={`bg-white/60 border-y border-kmc-secondary/10`}>
          <div className={`mx-auto max-w-6xl px-6 py-16`}>
            <h2 className={`font-display text-2xl font-semibold text-kmc-secondary mb-8`}>
              {b ? `แพ็กเกจในหมวดเดียวกัน` : `More in this category`}
            </h2>
            <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
              {S.map((e) => (
                <_Element9
                  key={e.key}
                  to={`/packages/${e.key}`}
                  className={`card-lift group flex flex-col rounded-2xl border border-kmc-secondary/10 bg-white overflow-hidden hover:border-kmc-primary-deep/40`}
                >
                  {e.photo && (
                    <div className={`aspect-[16/10] overflow-hidden`}>
                      <_Element6
                        name={e.photo}
                        alt={``}
                        sizes={`(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                      />
                    </div>
                  )}
                  <div className={`flex flex-1 flex-col p-7`}>
                    <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
                      {e.name}
                    </h3>
                    <p className={`text-sm text-kmc-secondary/75 leading-relaxed flex-1`}>
                      {e.desc}
                    </p>
                    <span
                      className={`mt-5 inline-flex items-center gap-1 text-sm font-medium text-kmc-primary-deep`}
                    >
                      {b ? `ดูรายละเอียด` : `View details`}
                      <span aria-hidden={`true`}>{`→`}</span>
                    </span>
                  </div>
                </_Element9>
              ))}
            </div>
          </div>
        </_Element5>
      )}
      <_Element5 className={`mx-auto max-w-6xl px-6 py-14 text-center`}>
        <_Element9
          to={`/packages`}
          className={`inline-flex min-h-11 items-center text-kmc-secondary font-medium hover:underline`}
        >
          {`← `}
          {b ? `ดูแพ็กเกจทั้งหมด` : `All packages`}
        </_Element9>
      </_Element5>
    </div>
  );
}
export { y as default };
