// Scroll-driven hero for /home-v2. The main video stays as the backdrop while
// the trust points sit in a stacked card deck. The section is several screens
// tall with a sticky stage:
//   - scrolling deals the cards one by one, each led by an oversized number,
//     with an ambient glow taken from the card's photo behind the deck,
//   - after the last card the whole stage shrinks into a framed panel before
//     the page continues to the next section.
// The two arcs of the KMC "K" mark (from /icon) float behind the deck.
import { useEffect, useRef, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { heroVideo, trustPoints, Photo } from "../../site.jsx";
import { registerStops, scrollToStop, pageTop } from "./stepScroll.js";

const cardVisuals = [
  { photos: [`physio/team-care`] },
  {
    photos: [`hospital/health-check`, `chinese/electro-acupuncture`, `thai/back-press`],
    labels: [
      { th: `แผนปัจจุบัน`, en: `Western` },
      { th: `แผนจีน`, en: `Chinese` },
      { th: `แผนไทย`, en: `Thai` },
    ],
  },
  { photos: [`sleep/nurse-chat`], night: true },
  { photos: [`physio/walking`] },
];

// scroll length of the exit (shrink) phase, relative to one card step
const EXIT = 0.8;

// Split the headline so the second phrase can carry the accent:
// "โรงพยาบาลของชุมชน | เพื่อคนที่คุณรัก", "Your Community Hospital, | For the People You Love"
function splitTitle(title) {
  const comma = title.indexOf(`, `);
  if (comma > -1) return [title.slice(0, comma + 1), title.slice(comma + 2)];
  const space = title.indexOf(` `);
  return space > -1 ? [title.slice(0, space), title.slice(space + 1)] : [title];
}

function KArcs() {
  return (
    <svg className={`hero-deck__arcs`} viewBox={`0 0 800 800`} aria-hidden={`true`}>
      <defs>
        <linearGradient
          id={`hero-arc-a`}
          x1={`-165`}
          y1={`-204`}
          x2={`841`}
          y2={`909`}
          gradientUnits={`userSpaceOnUse`}
        >
          <stop offset={`0`} stopColor={`#e5f2fc`} />
          <stop offset={`.39`} stopColor={`#b5d2e3`} />
          <stop offset={`1`} stopColor={`#a4bfcc`} />
        </linearGradient>
        <linearGradient id={`hero-arc-b`} x1={`215`} y1={`38`} x2={`797`} y2={`1181`} gradientUnits={`userSpaceOnUse`}>
          <stop offset={`0`} stopColor={`#e5f2fc`} />
          <stop offset={`.49`} stopColor={`#b5d2e3`} />
          <stop offset={`1`} stopColor={`#a4bfcc`} />
        </linearGradient>
      </defs>
      <path
        className={`hero-deck__arc hero-deck__arc--a`}
        fill={`url(#hero-arc-a)`}
        d={`M266.62,0H0c0,441.86,358.13,799.99,799.99,799.99v-266.62C505.41,533.38,266.62,294.59,266.62,0Z`}
      />
      <path
        className={`hero-deck__arc hero-deck__arc--b`}
        fill={`url(#hero-arc-b)`}
        d={`M800,266.62V0C358.14,0,0,358.13,0,799.99h266.62c0-294.58,238.79-533.37,533.38-533.38Z`}
      />
    </svg>
  );
}

export default function Hero() {
  const { t: tr, i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  // read at render time: site.jsx and this file import each other
  const steps = trustPoints.length;
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [reduceMotion] = useState(() => window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [ready, setReady] = useState(false);
  const [scroll, setScroll] = useState({ scaled: 0, exit: 0 });

  useEffect(() => {
    let frame = 0;
    function measure() {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const range = el.offsetHeight - window.innerHeight;
      if (range <= 0) return;
      const step = range / (steps + EXIT);
      const scrolled = Math.min(range, Math.max(0, -el.getBoundingClientRect().top));
      setScroll({
        scaled: Math.min(steps, scrolled / step),
        exit: Math.min(1, Math.max(0, (scrolled - steps * step) / (EXIT * step))),
      });
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener(`scroll`, onScroll, { passive: true });
    window.addEventListener(`resize`, onScroll);
    // let the first paint happen before the intro transitions start
    let intro = requestAnimationFrame(() => {
      intro = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(intro);
      window.removeEventListener(`scroll`, onScroll);
      window.removeEventListener(`resize`, onScroll);
    };
  }, [steps]);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused)
      v.play().then(
        () => setPlaying(true),
        () => {},
      );
    else {
      v.pause();
      setPlaying(false);
    }
  }

  // one stop per card, then one at the end of the shrink-out: a scroll gesture moves exactly one of them
  function stops() {
    const el = sectionRef.current;
    if (!el) return [];
    const range = el.offsetHeight - window.innerHeight;
    if (range <= 0) return [];
    const top = pageTop(el);
    const step = range / (steps + EXIT);
    return [...Array.from({ length: steps }, (_, i) => top + i * step + 1), top + range];
  }
  useEffect(() => registerStops(stops), [steps]);

  function goTo(i) {
    const s = stops();
    if (s[i] != null) scrollToStop(s[i]);
  }

  const { scaled, exit } = scroll;
  const active = Math.min(steps - 1, Math.floor(scaled));
  const titleParts = splitTitle(tr(`hero.title`));

  return (
    <section
      ref={sectionRef}
      className={`hero-deck ${ready ? `is-ready` : ``}`}
      style={{
        "--steps": steps,
        "--exit-len": EXIT,
        "--p": scaled / steps,
        "--exit": reduceMotion ? 0 : exit,
      }}
    >
      <div className={`hero-deck__stage`}>
        <div className={`hero-deck__bg`} aria-hidden={`true`}>
          <video
            ref={videoRef}
            src={heroVideo}
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload={reduceMotion ? `metadata` : `auto`}
          />
        </div>

        <div className={`hero-deck__inner`}>
          <div className={`hero-deck__copy`}>
            <p className={`hero-deck__eyebrow font-display uppercase tracking-[0.3em] text-sm text-kmc-primary mb-4`}>
              {tr(`hero.eyebrow`)}
            </p>
            <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-5`}>
              {/* each phrase is its own line that rises out of a mask, so Thai never breaks mid-phrase */}
              {titleParts.map((part, i) => (
                <span key={i} className={`hero-deck__line`} style={{ "--i": i }}>
                  <span className={i === 1 ? `hero-deck__accent` : undefined}>{part}</span>
                  {i < titleParts.length - 1 && ` `}
                </span>
              ))}
            </h1>
            <p className={`hero-deck__desc text-lg sm:text-xl text-white/80 max-w-xl`}>{tr(`hero.desc`)}</p>
            {/* the floating LINE / call buttons park here while the hero is on screen (see FloatingContact) */}
            <div className={`hero-deck__cta`} data-cta-dock aria-hidden={`true`} />
          </div>

          <div className={`hero-deck__side`}>
            <div className={`hero-deck__deck`}>
              <KArcs />

              {/* ambient glow: the active card's photo, blurred, bleeding into the backdrop */}
              <div className={`hero-deck__glow`} aria-hidden={`true`}>
                {cardVisuals.map((v, i) => (
                  <img
                    key={i}
                    src={`/images/photos/${v.photos[v.photos.length > 1 ? 1 : 0]}-sm.webp`}
                    alt={``}
                    className={active === i ? `is-active` : ``}
                  />
                ))}
              </div>

              <div className={`hero-deck__cards`} aria-live={`polite`}>
                {trustPoints.map((p, i) => {
                  const offset = i - active;
                  const v = cardVisuals[i];
                  return (
                    <article
                      key={p.en}
                      className={`hero-deck__card ${offset === 0 ? `is-active` : ``} ${v.night ? `is-night` : ``}`}
                      style={{ "--offset": offset, zIndex: steps - Math.abs(offset) }}
                      data-pos={offset < 0 ? `past` : offset === 0 ? `current` : `next`}
                      aria-hidden={offset !== 0}
                    >
                      <div className={`hero-deck__visual`}>
                        {v.photos.length > 1 ? (
                          <div className={`hero-deck__triptych`}>
                            {v.photos.map((name, k) => (
                              <figure key={name} style={{ "--k": k }}>
                                <Photo name={name} alt={``} sizes={`(min-width: 768px) 14vw, 33vw`} />
                                <figcaption>{isTh ? v.labels[k].th : v.labels[k].en}</figcaption>
                              </figure>
                            ))}
                          </div>
                        ) : (
                          <Photo name={v.photos[0]} alt={``} sizes={`(min-width: 768px) 40vw, 100vw`} eager={i === 0} />
                        )}
                        <span className={`hero-deck__sheen`} aria-hidden={`true`} />
                      </div>
                      <div className={`hero-deck__body`}>
                        {/* oversized step number, bleeding out of the card */}
                      <p className={`hero-deck__figure font-display`} aria-hidden={`true`}>{String(i + 1).padStart(2, `0`)}</p>
                        <div>
                          <h2 className={`font-display text-xl sm:text-2xl font-semibold text-white leading-snug`}>
                            {isTh ? p.th : p.en}
                          </h2>
                          <p className={`text-sm sm:text-base text-white/75 mt-1`}>{isTh ? p.descTh : p.descEn}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <nav className={`hero-deck__nav`} aria-label={isTh ? `จุดเด่นของเรา` : `Highlights`}>
              {trustPoints.map((p, i) => (
                <button
                  key={p.en}
                  type={`button`}
                  onClick={() => goTo(i)}
                  aria-current={active === i ? `step` : undefined}
                  aria-label={isTh ? p.th : p.en}
                  className={active === i ? `is-active` : ``}
                >
                  <span className={`hero-deck__bar`} aria-hidden={`true`}>
                    <span style={{ transform: `scaleX(${active >= i ? 1 : 0})` }} />
                  </span>
                  <span className={`hero-deck__navnum font-display`} aria-hidden={`true`}>
                    {String(i + 1).padStart(2, `0`)}
                  </span>
                </button>
              ))}
            </nav>
            {/* sits on the stage on desktop, on the card corner on mobile */}
            <button
              type={`button`}
              onClick={togglePlay}
              aria-pressed={!playing}
              aria-label={
                playing
                  ? isTh
                    ? `หยุดวิดีโอพื้นหลัง`
                    : `Pause background video`
                  : isTh
                    ? `เล่นวิดีโอพื้นหลัง`
                    : `Play background video`
              }
              className={`hero-deck__play`}
            >
              <svg viewBox={`0 0 24 24`} className={`h-4 w-4`} fill={`currentColor`} aria-hidden={`true`}>
                {playing ? <path d={`M7 5h3.5v14H7zM13.5 5H17v14h-3.5z`} /> : <path d={`M8 5.5v13l10.5-6.5z`} />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
