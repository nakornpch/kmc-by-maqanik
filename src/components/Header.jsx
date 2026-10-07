import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { c as useLocation } from "../vendor/react-SEPqUFC0.js";
import { t as useReducedMotion } from "../vendor/motion-CB540VaL.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { r as _Element } from "../vendor/react-SEPqUFC0.js";
import { i as AnimatePresence } from "../vendor/motion-CB540VaL.js";
import { n as motion } from "../vendor/motion-CB540VaL.js";
import {
  React,
  jsxRuntime,
  navigationItems,
  ServiceIcon,
  services,
  LanguageMenu,
  MobileLanguageMenu,
} from "../site.jsx";
export default function Header() {
  let { t: e, i18n: t } = useTranslation(),
    n = t.language === `th`,
    r = useLocation(),
    [a, s] = (0, React.useState)(!1),
    [c, u] = (0, React.useState)(!1),
    [d, p] = (0, React.useState)(null),
    m = (0, React.useRef)(null),
    h = (0, React.useRef)(!1);
  function g(e) {
    (clearTimeout(m.current), p(e));
  }
  function _() {
    (clearTimeout(m.current), (m.current = setTimeout(() => p(null), 150)));
  }
  ((0, React.useEffect)(() => () => clearTimeout(m.current), []),
    (0, React.useEffect)(() => {
      p(null);
    }, [r.pathname]));
  let [v, y] = (0, React.useState)(null),
    b = useReducedMotion(),
    x = r.pathname === `/` && !c;
  return (
    (0, React.useEffect)(() => {
      s(!1);
    }, [r.pathname]),
    (0, React.useEffect)(() => {
      let e = () => {
        // the homepage (v2) keeps the big logo for the whole pinned hero and brings the
        // navbar in half way through the hero's shrink-out (the same moment the
        // floating LINE / call buttons move to their corner, see FloatingContact).
        let t = r.pathname === `/` && document.querySelector(`.hero-deck`);
        u(t ? t.getBoundingClientRect().bottom < window.innerHeight * 1.25 : window.scrollY > 40);
      };
      return (
        e(),
        window.addEventListener(`scroll`, e, {
          passive: !0,
        }),
        () => {
          window.removeEventListener(`scroll`, e);
        }
      );
    }, [r.pathname]),
    (
      <header
        className={`

fixed

top-0

left-0

w-full

z-50


transition-all

duration-500


${x ? `bg-gradient-to-b from-kmc-secondary/90 via-kmc-secondary/40 to-transparent` : `bg-kmc-secondary/95 backdrop-blur-md shadow-lg shadow-kmc-secondary/10`}

`}
      >
        <nav
          className={`

relative

mx-auto

max-w-7xl

px-6


flex

items-center

justify-between


gap-6


transition-all

duration-700

ease-[cubic-bezier(.22,1,.36,1)]


${x ? `h-24` : `h-16`}

`}
        >
          <Link
            to={`/`}
            aria-label={n ? `KMC Hospital — กลับสู่หน้าแรก` : `KMC Hospital, back to home`}
            className={`relative flex-shrink-0`}
          >
            <div
              className={`
      relative

      transition-all
      duration-700
      ease-[cubic-bezier(.22,1,.36,1)]

      ${x ? `w-[170px] h-[26px] sm:w-[260px] sm:h-[40px] lg:w-[600px] lg:h-[92px]` : `w-[125px] h-[40px]`}
    `}
            >
              <div
                className={`
        absolute
        left-0
        top-1/2

        h-full

        origin-left

        transition-all
        duration-700
        ease-[cubic-bezier(.22,1,.36,1)]

        ${
          x
            ? `
          -translate-y-1/2
          lg:translate-y-[15%]
          lg:scale-[1.15]
          `
            : `
          scale-75
          -translate-y-1/2
          lg:-translate-x-[13%]
          `
        }
      `}
              >
                <img
                  src={`/logo/KMCHospitalLogo.png`}
                  alt={`KMC Hospital`}
                  className={`
          h-full
          w-auto
          max-w-none

          transition-opacity
          duration-500
          ease-out

          ${x ? `opacity-100` : `opacity-0`}
        `}
                />
                <img
                  src={`/logo/KMCHospitalLOGO-Cut.png`}
                  alt={``}
                  aria-hidden={`true`}
                  className={`
          absolute
          left-0
          top-0

          h-full
          w-auto
          max-w-none

          transition-opacity
          duration-500
          ease-out

          ${x ? `opacity-0` : `opacity-100`}
        `}
                />
              </div>
            </div>
          </Link>
          <div
            className={`

        hidden

        xl:flex


        items-center

        justify-center


        gap-6 2xl:gap-9


        flex-1


        transition-[width,height]

        duration-500



        ${
          x
            ? `

          opacity-0

          pointer-events-none

          translate-y-2

          `
            : `

          opacity-100

          translate-none

          `
        }

        `}
          >
            {navigationItems.map((t) => (
              <div
                key={t.key}
                className={`${t.groups ? `` : `relative`} group`}
                onMouseEnter={() => {
                  (t.children || t.groups) && g(t.key);
                }}
                onMouseLeave={() => {
                  (t.children || t.groups) && _();
                }}
                onFocus={() => {
                  if (h.current) {
                    h.current = !1;
                    return;
                  }
                  (t.children || t.groups) && g(t.key);
                }}
                onBlur={(e) => {
                  (t.children || t.groups) && !e.currentTarget.contains(e.relatedTarget) && p(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === `Escape` && d === t.key) {
                    p(null);
                    let t = e.currentTarget.querySelector(`a`);
                    t && document.activeElement !== t && ((h.current = !0), t.focus());
                  }
                }}
              >
                <_Element
                  to={t.to}
                  aria-expanded={t.children || t.groups ? d === t.key : void 0}
                  className={({ isActive: e }) => `

                relative

                flex

                items-center


                text-sm

                font-medium


                whitespace-nowrap


                transition-colors

                duration-300



                ${e ? `text-white` : `text-white/70 hover:text-white`}

                `}
                >
                  {e(`nav.${t.key}`)}
                  {(t.children || t.groups) && (
                    <span
                      className={`

                      ml-1

                      text-[10px]

                      opacity-70

                      transition-transform

                      duration-300

                      group-hover:rotate-180

                      `}
                    >{`▼`}</span>
                  )}
                </_Element>
                {(t.children || t.groups) &&
                  d === t.key &&
                  (t.groups ? (
                    <div className={`absolute inset-x-6 top-full pt-3`}>
                      <div
                        className={`animate-dropdown max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain rounded-2xl border border-kmc-secondary/10 bg-white shadow-2xl shadow-kmc-secondary/20`}
                      >
                        <div
                          className={`flex items-center justify-between gap-6 border-b border-kmc-secondary/10 px-8 py-4`}
                        >
                          <p className={`font-display text-base font-semibold text-kmc-secondary`}>
                            {e(`nav.${t.key}`)}
                          </p>
                          <Link
                            to={t.to}
                            className={`group/all inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-kmc-primary-deep hover:text-kmc-secondary`}
                          >
                            {n ? `ดูบริการทั้งหมด` : `All services`}
                            <span
                              aria-hidden={`true`}
                              className={`transition-transform group-hover/all:translate-x-0.5`}
                            >{`→`}</span>
                          </Link>
                        </div>
                        <div className={`grid grid-cols-4 gap-x-6 px-8 py-6`}>
                          {t.groups.map((e) => (
                            <div key={e.key}>
                              <div className={`mb-3 flex items-center gap-2.5 px-3`}>
                                <span
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fog-1 text-kmc-primary-deep`}
                                >
                                  <ServiceIcon category={e.key} className={`h-5 w-5`} />
                                </span>
                                <p
                                  className={`font-display text-sm font-semibold leading-snug text-kmc-secondary`}
                                >
                                  {n ? e.th : e.en}
                                </p>
                              </div>
                              <ul className={`space-y-0.5`}>
                                {e.slugs.map((e) => {
                                  let t = services[e];
                                  return t ? (
                                    <li key={e}>
                                      <_Element
                                        to={`/services/${e}`}
                                        className={({ isActive: e }) =>
                                          `group/item flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm leading-snug transition-colors duration-200 ${e ? `bg-fog-1 font-medium text-kmc-secondary` : `text-kmc-secondary/80 hover:bg-fog-1 hover:text-kmc-secondary`}`
                                        }
                                      >
                                        <span>{n ? t.th.name : t.en.name}</span>
                                        <span
                                          aria-hidden={`true`}
                                          className={`shrink-0 text-kmc-primary-deep opacity-0 transition-opacity duration-200 group-hover/item:opacity-100 group-focus-visible/item:opacity-100`}
                                        >{`→`}</span>
                                      </_Element>
                                    </li>
                                  ) : null;
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-3`}>
                      <ul
                        className={`animate-dropdown overflow-hidden rounded-2xl border border-kmc-secondary/10 bg-white p-2 shadow-2xl shadow-kmc-secondary/20`}
                      >
                        {t.children.map((n) => (
                          <li key={n.key}>
                            <_Element
                              to={n.to}
                              className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm text-kmc-secondary/80 transition-colors hover:bg-fog-1 hover:text-kmc-secondary`}
                            >
                              {e(`nav.dropdown.${t.key}.${n.key}`)}
                            </_Element>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </div>
          <div
            className={`

        hidden

        xl:flex


        items-center


        gap-4


        flex-shrink-0



        transition-all

        duration-500



        ${
          x
            ? `

          opacity-0

          pointer-events-none

          translate-y-2

          `
            : `

          opacity-100

          translate-y-0

          `
        }

        `}
          >
            <LanguageMenu />
          </div>
          <button
            className={`

        xl:hidden

        ${x ? `text-kmc-secondary` : `text-white`}

        flex-shrink-0
        relative
        w-6
        h-6
        flex
        flex-col
        justify-center
        items-center
        gap-1.5

        `}
            onClick={() => s(!a)}
            aria-label={`Toggle menu`}
            aria-expanded={a}
            aria-controls={`mobile-menu`}
          >
            <span
              className={`
            block h-0.5 w-6 rounded-full bg-current
            transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]
            ${a ? `translate-y-2 rotate-45` : ``}
          `}
            />
            <span
              className={`
            block h-0.5 w-6 rounded-full bg-current
            transition-opacity duration-200 ease-out
            ${a ? `opacity-0` : `opacity-100`}
          `}
            />
            <span
              className={`
            block h-0.5 w-6 rounded-full bg-current
            transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)]
            ${a ? `-translate-y-2 -rotate-45` : ``}
          `}
            />
          </button>
        </nav>
        <AnimatePresence>
          {a && (
            <motion.div
              id={`mobile-menu`}
              className={`xl:hidden border-t border-white/10 bg-kmc-secondary/95 backdrop-blur-md overflow-y-auto max-h-[calc(100vh-4rem)]`}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: `auto`,
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: b ? 0 : 0.28,
                ease: `easeInOut`,
              }}
            >
              <div className={`px-6 py-5 flex flex-col gap-3`}>
                <MobileLanguageMenu />
                {navigationItems.map((t) => (
                  <div key={t.key}>
                    <div className={`flex items-center justify-between gap-2`}>
                      <_Element to={t.to} className={`flex-1 text-white/90 font-medium py-2`}>
                        {e(`nav.${t.key}`)}
                      </_Element>
                      {(t.children || t.groups) && (
                        <button
                          type={`button`}
                          onClick={() => y((e) => (e === t.key ? null : t.key))}
                          aria-expanded={v === t.key}
                          aria-label={n ? `แสดง/ซ่อนเมนูย่อย` : `Toggle submenu`}
                          className={`p-2 text-white/60`}
                        >
                          <svg
                            viewBox={`0 0 24 24`}
                            fill={`none`}
                            stroke={`currentColor`}
                            strokeWidth={2}
                            strokeLinecap={`round`}
                            strokeLinejoin={`round`}
                            className={`w-4 h-4 transition-transform duration-300 ${v === t.key ? `rotate-180` : ``}`}
                          >
                            <path d={`m6 9 6 6 6-6`} />
                          </svg>
                        </button>
                      )}
                    </div>
                    {(t.children || t.groups) && v === t.key && (
                      <div
                        className={`

                      ml-4

                      border-l

                      border-white/20

                      pl-4

                      flex

                      flex-col

                      gap-2

                      `}
                      >
                        {t.groups
                          ? t.groups.map((e) => (
                              <div key={e.key} className={`mb-3 last:mb-0`}>
                                <p
                                  className={`text-[11px] uppercase tracking-[0.15em] text-white/40 font-medium mb-1.5`}
                                >
                                  {n ? e.th : e.en}
                                </p>
                                <div className={`flex flex-col gap-2`}>
                                  {e.slugs.map((e) => {
                                    let t = services[e];
                                    if (!t) return null;
                                    let r = n ? t.th.name : t.en.name;
                                    return (
                                      <_Element
                                        key={e}
                                        to={`/services/${e}`}
                                        className={`py-1.5 text-sm text-white/70 hover:text-white transition`}
                                      >
                                        {r}
                                      </_Element>
                                    );
                                  })}
                                </div>
                              </div>
                            ))
                          : t.children.map((n) => (
                              <_Element
                                key={n.key}
                                to={n.to}
                                className={`

                          text-sm

                          text-white/70

                          hover:text-white

                          transition

                          `}
                              >
                                {e(`nav.dropdown.${t.key}.${n.key}`)}
                              </_Element>
                            ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    )
  );
}
