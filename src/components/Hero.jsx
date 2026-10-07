import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as C } from "../vendor/animejs-CC9iyI6Y.js";
import { r as w } from "../vendor/animejs-CC9iyI6Y.js";
import { React, jsxRuntime, heroVideo } from "../site.jsx";
export default function Hero() {
  let { t: e, i18n: t } = useTranslation(),
    n = t.language === `th`,
    r = (0, React.useRef)(null),
    a = (0, React.useRef)(null),
    [o] = (0, React.useState)(() => window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),
    [s, c] = (0, React.useState)(!o);
  function l() {
    let e = a.current;
    e &&
      (e.paused
        ? e.play().then(
            () => c(!0),
            () => {},
          )
        : (e.pause(), c(!1)));
  }
  return (
    (0, React.useEffect)(() => {
      !r.current ||
        o ||
        (C(r.current, {
          opacity: 0,
          translateY: 16,
        }),
        w(r.current, {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 700,
          easing: `easeOutQuad`,
        }));
    }, [o]),
    (
      <section
        className={`
        relative
        isolate
        min-h-screen
        flex
        items-end
        overflow-hidden
        bg-kmc-secondary
      `}
      >
        <div className={`absolute inset-0 -z-10`}>
          <video
            ref={a}
            aria-hidden={`true`}
            src={heroVideo}
            autoPlay={!o}
            muted={!0}
            loop={!0}
            playsInline={!0}
            preload={o ? `metadata` : `auto`}
            className={`w-full h-full object-cover scale-105`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-kmc-secondary via-kmc-secondary/40 to-kmc-secondary/10`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r from-kmc-secondary/70 via-kmc-secondary/10 to-transparent`}
          />
        </div>
        <div
          ref={r}
          className={`
          relative
          w-full
          mx-auto
          max-w-6xl
          px-6
          pt-40
          pb-36
          sm:pb-24
        `}
        >
          <p
            className={`
            font-display
            uppercase
            tracking-[0.3em]
            text-sm
            text-kmc-primary
            mb-4
          `}
          >
            {e(`hero.eyebrow`)}
          </p>
          <h1
            className={`
            font-display
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-semibold
            text-white
            leading-tight
            mb-5
            max-w-3xl
          `}
          >
            {e(`hero.title`)}
          </h1>
          <p
            className={`
            text-lg
            sm:text-xl
            text-white/80
            max-w-xl
          `}
          >
            {e(`hero.desc`)}
          </p>
          <button
            type={`button`}
            onClick={l}
            aria-pressed={!s}
            aria-label={
              s
                ? n
                  ? `หยุดวิดีโอพื้นหลัง`
                  : `Pause background video`
                : n
                  ? `เล่นวิดีโอพื้นหลัง`
                  : `Play background video`
            }
            className={`absolute bottom-20 sm:bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-kmc-secondary/40 text-white backdrop-blur-sm transition-colors hover:bg-kmc-secondary/70`}
          >
            <svg
              viewBox={`0 0 24 24`}
              className={`h-4 w-4`}
              fill={`currentColor`}
              aria-hidden={`true`}
            >
              {s ? (
                <path d={`M7 5h3.5v14H7zM13.5 5H17v14h-3.5z`} />
              ) : (
                <path d={`M8 5.5v13l10.5-6.5z`} />
              )}
            </svg>
          </button>
        </div>
      </section>
    )
  );
}
