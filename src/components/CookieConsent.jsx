import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { l as b } from "../routes/usePageMeta.jsx";
import { u as oe } from "../routes/usePageMeta.jsx";
import { i as y } from "../routes/usePageMeta.jsx";
import { r as re } from "../routes/usePageMeta.jsx";
import { n as ee } from "../routes/usePageMeta.jsx";
import { f as g } from "../routes/usePageMeta.jsx";
import { o as te } from "../routes/usePageMeta.jsx";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { s as ie } from "../routes/usePageMeta.jsx";
import { React, jsxRuntime, He, I } from "../site.jsx";
export default function CookieConsent() {
  let { i18n: e } = useTranslation(),
    t = e.language === `th`,
    [n, r] = (0, React.useState)(null),
    a = (0, React.useRef)(null),
    o = (0, React.useRef)(null);
  ((0, React.useEffect)(() => (r(b()), oe(r)), []),
    (0, React.useEffect)(() => {
      n === `granted` ? y() : n === `denied` && re();
    }, [n]));
  let s = n === `unset` && ee;
  (0, React.useEffect)(() => {
    s && ((o.current = document.activeElement), a.current?.focus());
  }, [s]);
  let c = (0, React.useCallback)((e) => {
    g(e);
    let t = o.current;
    t instanceof HTMLElement && document.contains(t) && t.focus();
  }, []);
  return (
    (0, React.useEffect)(() => {
      if (!s) return;
      let e = (e) => {
        e.key === `Escape` && c(te);
      };
      return (
        document.addEventListener(`keydown`, e),
        () => document.removeEventListener(`keydown`, e)
      );
    }, [s, c]),
    s ? (
      <div
        role={`region`}
        aria-labelledby={`cookie-consent-heading`}
        ref={a}
        tabIndex={-1}
        className={`animate-consent-in fixed inset-x-3 bottom-[64px] z-[60] outline-none sm:inset-x-auto sm:left-6 sm:bottom-6 sm:w-[400px]`}
      >
        <div
          className={`overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md ring-1 ring-kmc-secondary/10 shadow-[0_24px_60px_-18px_rgba(9,27,58,0.45)]`}
        >
          <div
            aria-hidden={`true`}
            className={`h-1 bg-gradient-to-r from-fog-2 via-kmc-primary-deep/60 to-fog-3`}
          />
          <div className={`p-5 sm:p-6`}>
            <div className={`flex items-start gap-3.5`}>
              <span
                aria-hidden={`true`}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-fog-1 text-kmc-primary-deep`}
              >
                <He />
              </span>
              <div className={`min-w-0`}>
                <h2
                  id={`cookie-consent-heading`}
                  className={`font-display text-base font-semibold leading-snug text-kmc-secondary`}
                >
                  {t ? `เว็บไซต์นี้ใช้คุกกี้` : `This site uses cookies`}
                </h2>
                <p className={`mt-1.5 text-[13px] leading-relaxed text-kmc-secondary/70`}>
                  {t
                    ? `เราใช้คุกกี้เพื่อวัดผลการเข้าชมเว็บไซต์และผลของโฆษณา (Google Analytics และ Google Ads) คุณเลือกไม่ยอมรับได้ เว็บไซต์ยังใช้งานได้ตามปกติทุกอย่าง`
                    : `We use cookies to measure how the site is used and how our ads perform (Google Analytics and Google Ads). You can decline. The site works exactly the same either way.`}
                  {` `}
                  <Link
                    to={`/privacy`}
                    className={`font-medium text-kmc-primary-deep underline decoration-kmc-primary-deep/30 underline-offset-[3px] transition hover:decoration-kmc-primary-deep`}
                  >
                    {t ? `นโยบายความเป็นส่วนตัว` : `Privacy policy`}
                  </Link>
                </p>
              </div>
            </div>
            <div className={`mt-5 grid grid-cols-2 gap-2.5`}>
              <button
                type={`button`}
                onClick={() => c(te)}
                className={`${I} bg-fog-1 text-kmc-secondary ring-1 ring-inset ring-kmc-secondary/10 hover:bg-fog-2/50`}
              >
                {t ? `ไม่ยอมรับ` : `Decline`}
              </button>
              <button
                type={`button`}
                onClick={() => c(ie)}
                className={`${I} bg-kmc-secondary text-white shadow-sm shadow-kmc-secondary/30 hover:brightness-125`}
              >
                {t ? `ยอมรับ` : `Accept`}
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
}
