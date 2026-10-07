import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5, u as i } from "../vendor/react-SEPqUFC0.js";
import { t as a } from "./usePageMeta.jsx";
import { a as o } from "../vendor/motion-CB540VaL.js";
import { r as s } from "../vendor/animejs-CC9iyI6Y.js";
import {
  _ as _Element2,
  b as l,
  d as u,
  f as _Element,
  g as f,
  l as _Element6,
  m as _Element4,
  y as _Element3,
} from "../site.jsx";
import _Element8 from "./NotFound.jsx";
import { n as _, t as v } from "./useFaqSchema.jsx";
var y = e(t(), 1),
  b = o();
function _Element7({ images: e, index: t, onClose: n, onIndexChange: r }) {
  let [i, a] = (0, y.useState)(1),
    o = (0, y.useRef)(null),
    s = (n) => {
      (a(n), r((t + n + e.length) % e.length));
    };
  return (
    (0, y.useEffect)(() => {
      let e = (e) => {
        (e.key === `Escape` && n(), e.key === `ArrowRight` && s(1), e.key === `ArrowLeft` && s(-1));
      };
      document.addEventListener(`keydown`, e);
      let t = document.body.style.overflow;
      return (
        (document.body.style.overflow = `hidden`),
        () => {
          (document.removeEventListener(`keydown`, e), (document.body.style.overflow = t));
        }
      );
    }, [t]),
    (
      <div
        role={`dialog`}
        aria-modal={`true`}
        className={`fixed inset-0 z-[100] bg-black/95 flex items-center justify-center`}
        onClick={n}
      >
        <button
          type={`button`}
          onClick={n}
          aria-label={`Close`}
          className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-10`}
        >
          <svg
            viewBox={`0 0 24 24`}
            className={`w-5 h-5`}
            fill={`none`}
            stroke={`currentColor`}
            strokeWidth={2}
            strokeLinecap={`round`}
          >
            <path d={`M6 6l12 12M18 6 6 18`} />
          </svg>
        </button>
        <span
          className={`absolute top-5 sm:top-7 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium`}
        >
          {t + 1}
          {` / `}
          {e.length}
        </span>
        {e.length > 1 && (
          <b.Fragment>
            <button
              type={`button`}
              onClick={(e) => {
                (e.stopPropagation(), s(-1));
              }}
              aria-label={`Previous`}
              className={`absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-10`}
            >
              <svg
                viewBox={`0 0 24 24`}
                className={`w-5 h-5`}
                fill={`none`}
                stroke={`currentColor`}
                strokeWidth={2}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
              >
                <path d={`m15 18-6-6 6-6`} />
              </svg>
            </button>
            <button
              type={`button`}
              onClick={(e) => {
                (e.stopPropagation(), s(1));
              }}
              aria-label={`Next`}
              className={`absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-10`}
            >
              <svg
                viewBox={`0 0 24 24`}
                className={`w-5 h-5`}
                fill={`none`}
                stroke={`currentColor`}
                strokeWidth={2}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
              >
                <path d={`m9 18 6-6-6-6`} />
              </svg>
            </button>
          </b.Fragment>
        )}
        <div
          className={`relative w-full h-full flex items-center justify-center px-14 sm:px-20 py-16 overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => {
            o.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (o.current === null) return;
            let t = e.changedTouches[0].clientX - o.current;
            (t > 50 ? s(-1) : t < -50 && s(1), (o.current = null));
          }}
        >
          <img
            key={t}
            src={e[t]}
            alt={``}
            className={`max-w-full max-h-full object-contain rounded-lg ${i >= 0 ? `animate-lightbox-in-right` : `animate-lightbox-in-left`}`}
          />
        </div>
      </div>
    )
  );
}
function S({ images: e, highlights: t = [], name: n, isTh: r, onOpenImage: i }) {
  let [a, o] = (0, y.useState)(0),
    c = (0, y.useRef)(1),
    l = (0, y.useRef)(null),
    u = (0, y.useRef)(null),
    d = e.length,
    f = (e) => {
      ((c.current = e), o((t) => (t + e + d) % d));
    },
    p = (e) => {
      ((c.current = e > a ? 1 : -1), o(e));
    };
  (0, y.useEffect)(() => {
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
      (l.current &&
        s(l.current, {
          opacity: [0, 1],
          scale: [1.07, 1],
          translateX: c.current >= 0 ? [28, 0] : [-28, 0],
          duration: 850,
          easing: `easeOutCubic`,
        }),
      u.current &&
        s(u.current, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 550,
          delay: 150,
          easing: `easeOutCubic`,
        }));
  }, [a]);
  let m = t.length ? t[a % t.length] : null;
  return (
    <div className={`w-full`}>
      <div
        className={`relative aspect-[4/3] sm:aspect-[16/9] rounded-3xl overflow-hidden bg-fog-1`}
      >
        <button
          type={`button`}
          onClick={() => i?.(a)}
          aria-label={r ? `ดูภาพขยาย` : `View larger photo`}
          className={`absolute inset-0 w-full h-full`}
        >
          <div ref={l} className={`absolute inset-0`}>
            <img
              key={a}
              src={e[a]}
              alt={`${n} ${a + 1}`}
              loading={`lazy`}
              decoding={`async`}
              className={`w-full h-full object-cover`}
            />
          </div>
        </button>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-kmc-secondary/75 via-kmc-secondary/5 to-transparent pointer-events-none`}
        />
        {m && (
          <div
            ref={u}
            className={`absolute left-0 right-0 bottom-0 p-6 sm:p-8 pointer-events-none`}
          >
            <span className={`font-display text-xs text-white/60 tracking-[0.25em]`}>
              {String(a + 1).padStart(2, `0`)}
              {` / `}
              {String(d).padStart(2, `0`)}
            </span>
            <p className={`font-display text-lg sm:text-xl font-medium text-white mt-1`}>
              {m.title}
            </p>
            <p className={`text-sm text-white/70 mt-1 max-w-md leading-relaxed`}>{m.desc}</p>
          </div>
        )}
        {d > 1 && (
          <b.Fragment>
            <button
              type={`button`}
              onClick={() => f(-1)}
              aria-label={r ? `ภาพก่อนหน้า` : `Previous photo`}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition`}
            >
              <svg
                viewBox={`0 0 24 24`}
                className={`w-4 h-4`}
                fill={`none`}
                stroke={`currentColor`}
                strokeWidth={2}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
              >
                <path d={`m15 18-6-6 6-6`} />
              </svg>
            </button>
            <button
              type={`button`}
              onClick={() => f(1)}
              aria-label={r ? `ภาพถัดไป` : `Next photo`}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition`}
            >
              <svg
                viewBox={`0 0 24 24`}
                className={`w-4 h-4`}
                fill={`none`}
                stroke={`currentColor`}
                strokeWidth={2}
                strokeLinecap={`round`}
                strokeLinejoin={`round`}
              >
                <path d={`m9 18 6-6-6-6`} />
              </svg>
            </button>
          </b.Fragment>
        )}
      </div>
      {d > 1 && (
        <div className={`flex items-center justify-center gap-2 mt-5`}>
          {e.map((e, t) => (
            <button
              key={t}
              type={`button`}
              onClick={() => p(t)}
              aria-label={r ? `ไปที่ภาพ ${t + 1}` : `Go to photo ${t + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${t === a ? `w-6 bg-kmc-secondary` : `w-1.5 bg-kmc-secondary/20 hover:bg-kmc-secondary/40`}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
var C = {
  "stroke-rehab": {
    to: `/tools/stroke-assessment`,
    th: {
      kicker: `เครื่องมือสำหรับแพทย์`,
      title: `แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)`,
      body: `15 ข้อ คิดคะแนนอัตโนมัติ พร้อมใบสรุปสำหรับพิมพ์`,
      cta: `เริ่มประเมิน`,
    },
    en: {
      kicker: `For clinicians`,
      title: `Stroke Severity Assessment (NIHSS)`,
      body: `15 items, scored automatically, with a printable summary.`,
      cta: `Start assessment`,
    },
  },
  "elderly-care": {
    to: `/tools/memory-assessment`,
    th: {
      kicker: `แบบสังเกตสำหรับครอบครัว`,
      title: `พ่อแม่เปลี่ยนไป หรือเราคิดไปเอง?`,
      body: `ตอบ 8 ข้อใน 3 นาที เพื่อดูว่าควรพาผู้สูงอายุไปพบแพทย์เรื่องความจำหรือยัง`,
      cta: `เริ่มทำแบบสังเกต`,
    },
    en: {
      kicker: `For families`,
      title: `Has Mum or Dad changed, or is it just me?`,
      body: `Eight questions in three minutes to see whether a memory check-up is due.`,
      cta: `Start the check`,
    },
  },
};
function w() {
  let { slug: e } = i(),
    { i18n: t } = n(),
    o = t.language === `th`,
    s = u({
      delayEach: 100,
    }),
    [w, T] = (0, y.useState)(null),
    E = l[e],
    D = E ? (o ? E.th : E.en) : null,
    O = E?.images ?? (E?.image ? [E.image] : []),
    k = O.map(f).find(Boolean),
    A = k && O.length > 1 ? O.filter((e) => f(e) !== k) : O;
  return (
    a({
      title: D ? D.name : o ? `ไม่พบหน้านี้` : `Page not found`,
      metaTitle: D?.meta?.title,
      description: D?.meta?.description || D?.tagline,
      keywords: D?.meta?.keywords,
    }),
    v(D?.faq, `service-faq-jsonld`),
    E ? (
      <div>
        <_Element image={k} imageAlt={D.name} className={`py-24`}>
          <_Element2 current={D.name} className={`mb-4`} />
          <p
            className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}
          >
            {o ? `บริการ` : `Services`}
          </p>
          <_Element3
            as={`h1`}
            className={`font-display text-4xl sm:text-5xl font-semibold text-kmc-secondary mb-4`}
            text={D.h1 || D.name}
          />
          <p className={`text-lg text-kmc-secondary/75 max-w-xl`}>{D.tagline}</p>
        </_Element>
        <_Element4 className={`mx-auto max-w-3xl px-6 pt-16 pb-10 text-center`}>
          <p className={`text-kmc-secondary/80 leading-relaxed text-lg`}>{D.intro}</p>
        </_Element4>
        <_Element4 className={`mx-auto max-w-5xl px-6 pb-16`}>
          {A.length > 0 ? (
            <S images={A} highlights={D.highlights} name={D.name} isTh={o} onOpenImage={T} />
          ) : (
            <div
              className={`aspect-[16/9] rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 flex items-center justify-center`}
            >
              <span
                className={`text-[0.65rem] tracking-wide bg-white/70 text-kmc-secondary/60 px-2.5 py-1 rounded-md border border-kmc-secondary/10`}
              >
                {o ? `รอภาพถ่ายจริง` : `Photo coming soon`}
              </span>
            </div>
          )}
        </_Element4>
        <_Element4 className={`bg-white/60 border-y border-kmc-secondary/10`}>
          <div className={`mx-auto max-w-6xl px-6 py-16`}>
            <_Element3
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-10`}
              text={o ? `จุดเด่นของบริการ` : `Service highlights`}
            />
            <div ref={s} className={`grid md:grid-cols-3 gap-6`}>
              {D.highlights.map((e, t) => (
                <div
                  key={e.title}
                  className={`rounded-2xl bg-white border border-kmc-secondary/10 p-8`}
                >
                  <span className={`font-display text-sm text-kmc-secondary/40`}>
                    {`0`}
                    {t + 1}
                  </span>
                  <p className={`font-display text-lg font-medium text-kmc-secondary mt-2 mb-3`}>
                    {e.title}
                  </p>
                  <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </_Element4>
        <_Element4
          className={`mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start`}
        >
          <div>
            <_Element3
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-6`}
              text={o ? `เหมาะกับใคร` : `Who is this for?`}
            />
            <ul className={`space-y-3`}>
              {D.forWho.map((e) => (
                <li key={e} className={`flex items-start gap-3 text-kmc-secondary/80`}>
                  <svg
                    viewBox={`0 0 24 24`}
                    className={`w-5 h-5 mt-0.5 shrink-0 text-kmc-primary-deep`}
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
          </div>
          {D.steps?.length > 0 ? (
            <div
              className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-8 py-10`}
            >
              <h2 className={`font-display text-xl font-semibold text-kmc-secondary mb-6`}>
                {o ? `ขั้นตอนการดูแล` : `How the care works`}
              </h2>
              <ol className={`space-y-5`}>
                {D.steps.map((e, t) => (
                  <li key={e} className={`flex items-start gap-4`}>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full bg-white text-kmc-secondary font-display text-sm font-semibold flex items-center justify-center`}
                    >
                      {t + 1}
                    </span>
                    <p className={`text-sm text-kmc-secondary/80 leading-relaxed pt-1.5`}>{e}</p>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div
              className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-10 py-14 text-center`}
            >
              <h3 className={`font-display text-xl font-semibold text-kmc-secondary mb-2`}>
                {o ? `ปรึกษาหรือนัดหมายบริการนี้` : `Ask about this service`}
              </h3>
              <p className={`text-sm text-kmc-secondary/60 mb-6`}>
                {o
                  ? `ทีมงานพร้อมให้คำแนะนำและประเมินเบื้องต้น`
                  : `Our team is ready to advise and assess.`}
              </p>
              <_Element5
                to={`/contact?service=${e}#appointment`}
                className={`shiny-pill inline-block rounded-full bg-kmc-secondary text-white px-8 py-3 font-medium hover:brightness-110 transition`}
              >
                {o ? `จองนัดหมาย` : `Book an appointment`}
              </_Element5>
            </div>
          )}
        </_Element4>
        {D.whyKmc?.length > 0 && (
          <_Element4 className={`bg-kmc-secondary text-white`}>
            <div className={`mx-auto max-w-6xl px-6 py-16`}>
              <_Element3
                as={`h2`}
                className={`font-display text-2xl sm:text-3xl font-semibold mb-10`}
                text={o ? `ทำไมต้อง KMC Hospital` : `Why KMC Hospital`}
              />
              <div className={`grid md:grid-cols-3 gap-6`}>
                {D.whyKmc.map((e) => (
                  <p
                    key={e}
                    className={`rounded-2xl bg-white/10 p-6 text-sm leading-relaxed text-white/85`}
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </_Element4>
        )}
        {C[e] &&
          (() => {
            let t = C[e],
              n = o ? t.th : t.en;
            return (
              <_Element4 className={`mx-auto max-w-4xl px-6 pt-16`}>
                <_Element5
                  to={t.to}
                  className={`group flex flex-col gap-6 rounded-3xl bg-kmc-secondary px-8 py-9 text-white shadow-lg shadow-kmc-secondary/10 transition hover:brightness-110 sm:flex-row sm:items-center sm:justify-between`}
                >
                  <span>
                    <span className={`block text-sm text-kmc-primary`}>{n.kicker}</span>
                    <span className={`mt-2 block font-display text-2xl font-semibold leading-snug`}>
                      {n.title}
                    </span>
                    <span className={`mt-2 block leading-relaxed text-white/75`}>{n.body}</span>
                  </span>
                  <span
                    className={`inline-flex min-h-[48px] shrink-0 items-center gap-2 self-start rounded-full bg-white px-7 font-medium text-kmc-secondary sm:self-center`}
                  >
                    {n.cta}
                    {` `}
                    <span
                      aria-hidden={`true`}
                      className={`transition group-hover:translate-x-1`}
                    >{`→`}</span>
                  </span>
                </_Element5>
              </_Element4>
            );
          })()}
        {D.faq?.length > 0 && (
          <_Element4 className={`mx-auto max-w-3xl px-6 py-16`}>
            <_Element3
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-8`}
              text={o ? `คำถามที่พบบ่อย` : `Frequently asked questions`}
            />
            <_ items={D.faq} />
          </_Element4>
        )}
        {(D.relatedPackages?.length > 0 || D.cta) && (
          <_Element4 className={`mx-auto max-w-4xl px-6 pb-20`}>
            <div
              className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-8 py-12 text-center`}
            >
              {D.relatedPackages?.length > 0 && (
                <b.Fragment>
                  <h2 className={`font-display text-xl font-semibold text-kmc-secondary mb-5`}>
                    {o ? `แพ็กเกจที่เกี่ยวข้อง` : `Related packages`}
                  </h2>
                  <div className={`flex flex-wrap justify-center gap-2.5 mb-8`}>
                    {D.relatedPackages.map((e) => (
                      <_Element5
                        key={e}
                        to={`/packages`}
                        className={`rounded-full border border-kmc-secondary/20 bg-white px-5 py-2.5 text-sm font-medium text-kmc-secondary/80 hover:border-kmc-secondary/50 hover:text-kmc-secondary transition`}
                      >
                        {e}
                      </_Element5>
                    ))}
                  </div>
                </b.Fragment>
              )}
              <_Element6
                primary={
                  D.cta?.primary ?? {
                    label: o ? `จองนัดหมาย` : `Book an appointment`,
                    to: `/contact?service=${e}#appointment`,
                  }
                }
                secondary={
                  D.cta?.secondary ?? {
                    label: o ? `แชทสอบถามผ่าน LINE` : `Ask us on LINE`,
                    href: `https://line.me/R/ti/p/@kmchealth`,
                  }
                }
              />
            </div>
          </_Element4>
        )}
        <_Element4 className={`mx-auto max-w-6xl px-6 pb-24`}>
          <h2 className={`font-display text-xl font-semibold text-kmc-secondary mb-6`}>
            {o ? `บริการอื่นๆ` : `Other services`}
          </h2>
          <div className={`flex flex-wrap gap-3`}>
            {Object.entries(l)
              .filter(([t]) => t !== e)
              .map(([e, t]) => (
                <_Element5
                  key={e}
                  to={`/services/${e}`}
                  className={`rounded-full border border-kmc-secondary/15 bg-white px-5 py-2.5 text-sm font-medium text-kmc-secondary/80 hover:border-kmc-primary-deep/40 hover:text-kmc-secondary transition`}
                >
                  {o ? t.th.name : t.en.name}
                </_Element5>
              ))}
          </div>
        </_Element4>
        {w !== null && <_Element7 images={A} index={w} onClose={() => T(null)} onIndexChange={T} />}
      </div>
    ) : (
      <_Element8 />
    )
  );
}
export { w as default };
