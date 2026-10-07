import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element4 } from "../vendor/react-SEPqUFC0.js";
import { a as r } from "../vendor/motion-CB540VaL.js";
import { _ as _Element3, h as _Element2 } from "../site.jsx";
var o = e(t(), 1),
  s = r(),
  c = {
    check: <path d={`M20 6 9 17l-5-5`} />,
    phone: (
      <path
        d={`M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z`}
      />
    ),
    printer: (
      <s.Fragment>
        <path d={`M6 9V2h12v7`} />
        <path d={`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`} />
        <path d={`M6 14h12v8H6z`} />
      </s.Fragment>
    ),
    arrowLeft: <path d={`M19 12H5m7 7-7-7 7-7`} />,
    arrowRight: <path d={`M5 12h14m-7-7 7 7-7 7`} />,
    shield: <path d={`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`} />,
    clock: (
      <s.Fragment>
        <circle cx={`12`} cy={`12`} r={`10`} />
        <path d={`M12 6v6l4 2`} />
      </s.Fragment>
    ),
    list: <path d={`M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01`} />,
    reset: (
      <s.Fragment>
        <path d={`M3 12a9 9 0 1 0 3-6.7L3 8`} />
        <path d={`M3 3v5h5`} />
      </s.Fragment>
    ),
    calendar: (
      <s.Fragment>
        <rect x={`3`} y={`4`} width={`18`} height={`18`} rx={`2`} />
        <path d={`M16 2v4M8 2v4M3 10h18`} />
      </s.Fragment>
    ),
    share: (
      <s.Fragment>
        <circle cx={`18`} cy={`5`} r={`3`} />
        <circle cx={`6`} cy={`12`} r={`3`} />
        <circle cx={`18`} cy={`19`} r={`3`} />
        <path d={`m8.6 13.5 6.8 4M15.4 6.5l-6.8 4`} />
      </s.Fragment>
    ),
    chat: (
      <path d={`M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.8L3 21l1.9-5A8.4 8.4 0 1 1 21 11.5z`} />
    ),
    alert: (
      <s.Fragment>
        <path d={`M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z`} />
        <path d={`M12 9v4M12 17h.01`} />
      </s.Fragment>
    ),
    pencil: <path d={`M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z`} />,
    book: (
      <path
        d={`M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5`}
      />
    ),
    chevronDown: <path d={`m6 9 6 6 6-6`} />,
  };
function _Element({ name: e, className: t = `h-5 w-5` }) {
  return (
    <svg
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={`currentColor`}
      strokeWidth={1.8}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
      className={t}
      aria-hidden={`true`}
      focusable={`false`}
    >
      {c[e]}
    </svg>
  );
}
function u({ name: e, value: t, checked: n, onChange: r, label: i, size: a = `md` }) {
  return (
    <label
      className={`group flex cursor-pointer items-center gap-3.5 rounded-2xl border bg-white leading-relaxed transition-colors duration-200
        has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-kmc-primary-deep
        ${a === `lg` ? `min-h-[56px] px-4 py-3 sm:min-h-[64px] sm:px-5 sm:py-4 sm:text-lg` : `min-h-[52px] px-4 py-3`}
        ${n ? `border-kmc-secondary bg-fog-1/70 text-kmc-secondary shadow-[inset_0_0_0_1px_var(--color-kmc-secondary)]` : `border-kmc-secondary/15 text-kmc-secondary/90 hover:border-kmc-primary-deep/60 hover:bg-kmc-bg`}`}
    >
      <input type={`radio`} name={e} value={t} checked={n} onChange={r} className={`sr-only`} />
      <span
        aria-hidden={`true`}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-200 ${n ? `border-kmc-secondary bg-kmc-secondary text-white` : `border-kmc-secondary/25 text-transparent group-hover:border-kmc-primary-deep/60`}`}
      >
        <_Element name={`check`} className={`h-3.5 w-3.5`} />
      </span>
      <span className={`flex-1 ${n ? `font-medium` : ``}`}>{i}</span>
    </label>
  );
}
function d({
  open: e,
  title: t,
  body: n,
  confirmLabel: r,
  cancelLabel: i,
  onConfirm: a,
  onCancel: c,
}) {
  let u = (0, o.useRef)(null);
  return (
    (0, o.useEffect)(() => {
      let t = u.current;
      t && (e && !t.open && t.showModal(), !e && t.open && t.close());
    }, [e]),
    (
      <dialog
        ref={u}
        onCancel={(e) => {
          (e.preventDefault(), c());
        }}
        aria-labelledby={`confirm-title`}
        className={`m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl bg-white p-0 text-kmc-secondary shadow-2xl backdrop:bg-kmc-secondary/50 backdrop:backdrop-blur-sm`}
      >
        <div className={`p-7`}>
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-700`}
          >
            <_Element name={`reset`} />
          </span>
          <h2 id={`confirm-title`} className={`mt-4 font-display text-xl font-semibold`}>
            {t}
          </h2>
          <p className={`mt-2 leading-relaxed text-kmc-secondary/75`}>{n}</p>
          <div className={`mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end`}>
            <button type={`button`} onClick={c} autoFocus={!0} className={f.secondary}>
              {i}
            </button>
            <button
              type={`button`}
              onClick={a}
              className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-full bg-red-700 px-6 font-medium text-white transition-colors duration-200 hover:bg-red-800`}
            >
              {r}
            </button>
          </div>
        </div>
      </dialog>
    )
  );
}
var f = {
  primary: `inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full py-2 text-center leading-snug bg-kmc-secondary px-6 font-medium text-white transition duration-200 hover:bg-kmc-primary-deep disabled:cursor-not-allowed disabled:bg-kmc-secondary/20 disabled:text-kmc-secondary/50`,
  secondary: `inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-full py-2 text-center leading-snug border border-kmc-secondary/20 bg-white px-6 font-medium text-kmc-secondary transition-colors duration-200 hover:border-kmc-secondary/60 disabled:cursor-not-allowed disabled:opacity-40`,
  ghost: `inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 font-medium text-kmc-secondary/70 transition-colors duration-200 hover:bg-kmc-secondary/5 hover:text-kmc-secondary disabled:cursor-not-allowed disabled:opacity-40`,
};
function p(e) {
  let t = document.getElementById(`q-${e}`);
  if (!t) return;
  let n = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  (t.scrollIntoView({
    behavior: n ? `auto` : `smooth`,
    block: `start`,
  }),
    t.querySelector(`input`)?.focus({
      preventScroll: !0,
    }));
}
function m() {
  let e = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
  window.scrollTo({
    top: 0,
    behavior: e ? `auto` : `smooth`,
  });
}
function h(e, t) {
  return new Intl.DateTimeFormat(t ? `th-TH` : `en-GB`, {
    dateStyle: `long`,
    timeStyle: `short`,
    timeZone: `Asia/Bangkok`,
  }).format(e);
}
function g({ eyebrow: e, title: t, intro: n, meta: r = [], aside: o, compact: c = !1, photo: u }) {
  return (
    <header
      className={`relative overflow-hidden bg-gradient-to-br from-fog-1 via-kmc-bg to-fog-1 print:hidden`}
    >
      {u && !c && (
        <div aria-hidden={`true`} className={`hidden lg:block absolute inset-y-0 right-0 w-1/2`}>
          <_Element2
            name={u}
            alt={``}
            eager={!0}
            sizes={`50vw`}
            className={`w-full h-full object-cover`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-fog-1 via-fog-1/60 to-fog-1/10`}
          />
        </div>
      )}
      <div
        aria-hidden={`true`}
        className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(181,211,229,0.7),transparent_45%)]`}
      />
      <div
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 ${c ? `pb-6 pt-24 sm:pb-8 sm:pt-28` : `pb-8 pt-24 sm:pb-16 sm:pt-32`}`}
      >
        <_Element3 current={t} className={`mb-6 hidden sm:block`} />
        <div
          className={`grid gap-6 sm:gap-10 ${o ? `lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end` : ``}`}
        >
          <div>
            <p
              className={`items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-kmc-primary-deep ring-1 ring-kmc-primary-deep/15 sm:px-3.5 sm:py-1.5 sm:text-sm ${c ? `hidden sm:inline-flex` : `inline-flex`}`}
            >
              {e}
            </p>
            <h1
              className={`mt-3 max-w-[22ch] text-balance sm:mt-4 font-display font-semibold leading-tight text-kmc-secondary ${c ? `text-xl sm:text-3xl` : `text-[1.65rem] sm:text-5xl`}`}
            >
              {t}
            </h1>
            {n && !c && (
              <div
                className={`mt-3 max-w-2xl space-y-3 leading-relaxed sm:mt-5 sm:text-lg text-kmc-secondary/75`}
              >
                {n}
              </div>
            )}
            {r.length > 0 && !c && (
              <ul
                className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-kmc-secondary/80 sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-base`}
              >
                {r.map((e) => (
                  <li key={e.label} className={`flex items-center gap-2`}>
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8 text-kmc-primary-deep ring-1 ring-kmc-secondary/10`}
                    >
                      <_Element name={e.icon} className={`h-4 w-4`} />
                    </span>
                    {e.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {o}
        </div>
      </div>
    </header>
  );
}
function _({ isTh: e, text: t }) {
  return (
    <p
      className={`flex items-start gap-2.5 text-sm leading-relaxed text-kmc-secondary/65 print:hidden`}
    >
      <_Element name={`shield`} className={`mt-0.5 h-4 w-4 shrink-0 text-kmc-primary-deep`} />
      <span>
        {t}
        {` `}
        <_Element4
          to={`/privacy`}
          className={`font-medium text-kmc-primary-deep underline underline-offset-4`}
        >
          {e ? `นโยบายความเป็นส่วนตัว` : `Privacy policy`}
        </_Element4>
      </span>
    </p>
  );
}
export { _ as a, m as c, u as i, h as l, d as n, g as o, _Element as r, p as s, f as t };
