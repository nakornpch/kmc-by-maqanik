// Digital services showroom for /home-v2 (replaces the single "Health
// Monitoring Program" block). Three apps/tools the hospital already offers:
// the Lab + App monitoring program, Telemedicine, and the online self-checks.
// The section pins and scrolling steps through the three apps (the tabs scroll
// to their app); the phone in the middle switches screen, with the copy either
// side. It plays an intro the first time it comes into view.
// On phones there is no pinning: the three apps are a stack of file folders, and
// tapping a folder's tab unfolds its panel toward the reader (one open at a time);
// tapping an open folder's tab folds it closed again.
// All copy comes from existing content, except the section heading and the
// self-checks tab name. Phone screens are mock-ups until an app gets a
// `screenshot` (e.g. `/images/apps/monitoring.png`, portrait 9:19.5).
import { useEffect, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { AnimatedHeading, services, gt as monitoringSteps } from "../../site.jsx";
import { useScrollSteps } from "./p4Shared.jsx";

function AppIcon({ kind }) {
  const common = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  };
  if (kind === `monitoring`)
    return (
      <svg {...common}>
        <path d={`M3 17l5-5 4 3 8-8`} />
        <path d={`M15 7h5v5`} />
      </svg>
    );
  if (kind === `telemedicine`)
    return (
      <svg {...common}>
        <rect x={`3`} y={`6`} width={`12`} height={`12`} rx={`2.5`} />
        <path d={`m15 10 6-3v10l-6-3`} />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x={`5`} y={`4`} width={`14`} height={`17`} rx={`2.5`} />
      <path d={`M9 4.5h6M9 12.5l2 2 4-4`} />
    </svg>
  );
}

function Screen({ kind }) {
  if (kind === `monitoring`) {
    return (
      <div className={`app-screen app-screen--monitor`}>
        <div className={`app-screen__bar`} />
        <div className={`app-screen__card`}>
          {/* rising trend line with a flagged point */}
          <svg viewBox={`0 0 200 90`} className={`app-screen__chart`} aria-hidden={`true`}>
            <path d={`M0 70 C30 66 45 72 70 58 S110 50 130 40 S170 22 200 18`} className={`app-screen__line`} />
            <circle cx={`130`} cy={`40`} r={`5`} className={`app-screen__dot`} />
          </svg>
        </div>
        <div className={`app-screen__rows`}>
          <span />
          <span />
          <span />
        </div>
        <div className={`app-screen__alert`} />
      </div>
    );
  }
  if (kind === `telemedicine`) {
    return (
      <div className={`app-screen app-screen--call`}>
        <div className={`app-screen__caller`} />
        <div className={`app-screen__self`} />
        <div className={`app-screen__controls`}>
          <span />
          <span className={`is-end`} />
          <span />
        </div>
      </div>
    );
  }
  return (
    <div className={`app-screen app-screen--quiz`}>
      <div className={`app-screen__bar`} />
      <div className={`app-screen__progress`}>
        <span />
      </div>
      <div className={`app-screen__question`} />
      <div className={`app-screen__options`}>
        <span />
        <span className={`is-picked`} />
        <span />
      </div>
      <div className={`app-screen__next`} />
    </div>
  );
}

export default function HealthMonitoring() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const steps = 3;
  // phones: folders instead of the pinned showroom, and no scroll stops for this section
  const [narrow, setNarrow] = useState(() => window.matchMedia(`(max-width: 767px)`).matches);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: 767px)`);
    const update = () => setNarrow(mq.matches);
    mq.addEventListener(`change`, update);
    return () => mq.removeEventListener(`change`, update);
  }, []);
  const { ref, active, goTo } = useScrollSteps(steps, narrow ? () => [] : undefined);
  const [openFolder, setOpenFolder] = useState(0);
  const [inView, setInView] = useState(false);
  // play the intro once, the first time the section shows up
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  const tele = isTh ? services.telemedicine.th : services.telemedicine.en;

  const apps = [
    {
      key: `monitoring`,
      name: `Health Monitoring`,
      short: isTh ? `เห็นแนวโน้มผลแล็บต่อเนื่อง` : `Your lab results as a trend`,
      screenshot: null, // e.g. `/images/apps/monitoring.png`
      kicker: `Predictive`,
      tab: isTh ? `ติดตามสุขภาพ (Lab + App)` : `Health monitoring (Lab + App)`,
      title: isTh ? `โปรแกรมติดตามสุขภาพ (Lab + App)` : `Health Monitoring Program (Lab + App)`,
      desc: isTh
        ? `เชื่อมผลตรวจแล็บเข้ากับแอปพลิเคชัน ให้คุณเห็นแนวโน้มค่าสุขภาพของตัวเองอย่างต่อเนื่อง ไม่ใช่แค่ตัวเลขครั้งเดียวตอนตรวจ และให้ทีมแพทย์แจ้งเตือนความเสี่ยงได้ตั้งแต่เนิ่น ๆ`
        : `Your lab results, linked to an app, so you follow your own health as a trend instead of a single set of numbers, and our doctors can flag risk early.`,
      points: monitoringSteps.map((s) => (isTh ? s.th : s.en)),
      numbered: true,
      links: [{ to: `/services/health-monitoring`, label: isTh ? `ดูรายละเอียดโปรแกรม` : `See how it works` }],
    },
    {
      key: `telemedicine`,
      name: `Telemedicine`,
      short: isTh ? `ปรึกษาแพทย์ทางไกล` : `See a doctor remotely`,
      screenshot: null,
      kicker: `Participation`,
      tab: tele.name,
      title: tele.name,
      desc: tele.tagline,
      points: (tele.highlights ?? []).map((h) => `${h.title}: ${h.desc}`),
      links: [
        tele.cta?.primary?.to && { to: tele.cta.primary.to, label: tele.cta.primary.label },
        { to: `/services/telemedicine`, label: isTh ? `ดูรายละเอียด` : `Details`, quiet: true },
      ].filter(Boolean),
    },
    {
      key: `checks`,
      name: `Online Self-Checks`,
      short: isTh ? `ประเมินเบื้องต้นด้วยตัวเอง` : `Quick checks you can do yourself`,
      screenshot: null,
      kicker: `Self-check`,
      tab: isTh ? `แบบประเมินออนไลน์` : `Online self-checks`,
      title: isTh ? `แบบประเมินสุขภาพออนไลน์` : `Online health self-checks`,
      desc: isTh
        ? `ประมวลผลในเบราว์เซอร์ ไม่เก็บข้อมูล ใช้ประกอบการตัดสินใจว่าควรพบแพทย์หรือยัง`
        : `They run in your browser and store nothing; use them to help decide whether it is time to see a doctor.`,
      tools: [
        {
          to: `/tools/memory-assessment`,
          title: isTh
            ? `แบบสังเกตความจำและการรู้คิด สำหรับครอบครัวผู้สูงวัย`
            : `Memory & Thinking Check for Families of Older Adults`,
          desc: isTh ? `ตอบ 8 ข้อใน 3 นาที สำหรับลูกหลาน` : `Eight questions in three minutes, for families`,
        },
        {
          to: `/tools/stroke-assessment`,
          title: isTh ? `แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)` : `Stroke Severity Assessment (NIHSS)`,
          desc: isTh
            ? `15 ข้อตาม NIH Stroke Scale พิมพ์ใบสรุปได้`
            : `15 items on the NIH Stroke Scale, printable summary`,
        },
      ],
    },
  ];
  const app = apps[active];

  // the reading copy for one app, shared by the desktop column and the phone folders:
  // the head (kicker, title, description) and the rest (points, tools, links)
  function renderHead(a) {
    return (
      <>
        <p className={`apps__kicker font-display`}>{a.kicker}</p>
        <h3 className={`apps__title font-display`}>{a.title}</h3>
        <p className={`apps__desc`}>{a.desc}</p>
      </>
    );
  }
  function renderCopy(a) {
    return (
      <>
      {renderHead(a)}
      {renderRest(a)}
      </>
    );
  }
  function renderRest(a) {
    return (
      <>

      {a.points && (
        <ol className={`apps__points ${a.numbered ? `is-numbered` : ``}`}>
          {a.points.map((p, i) => (
            <li key={p}>
              <span className={`apps__mark font-display`} aria-hidden={`true`}>
                {a.numbered ? String(i + 1).padStart(2, `0`) : `—`}
              </span>
              {p}
            </li>
          ))}
        </ol>
      )}

      {a.tools && (
        <ul className={`apps__tools`}>
          {a.tools.map((t) => (
            <li key={t.to}>
              <Link to={t.to}>
                <span>
                  <b className={`font-display`}>{t.title}</b>
                  {t.desc}
                </span>
                <span className={`apps__arrow`} aria-hidden={`true`}>{`→`}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {a.links && (
        <div className={`apps__links`}>
          {a.links.map((l) => (
            <Link key={l.to} to={l.to} className={l.quiet ? `apps__quiet` : `apps__cta`}>
              {l.label}
              {!l.quiet && <span aria-hidden={`true`}>{`→`}</span>}
            </Link>
          ))}
        </div>
      )}
      </>
    );
  }


  return (
    <section ref={ref} className={`apps ${inView ? `is-in` : ``}`} style={{ "--steps": steps }}>
      <div className={`apps__pin`}>
        <div className={`mx-auto max-w-6xl px-6 apps__inner`}>
          <div className={`apps__head`}>
            <p className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary mb-3`}>
              {isTh ? `ดิจิทัลเฮลท์` : `Digital health`}
            </p>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-white`}
              text={isTh ? `บริการสุขภาพดิจิทัล` : `Digital health services`}
            />
          </div>

          {narrow ? (
            <ul className={`apps__folders`}>
              {apps.map((a, i) => {
                const open = openFolder === i;
                return (
                  <li key={a.key} className={`apps__folder ${open ? `is-open` : ``}`} style={{ "--i": i }}>
                    <button
                      type={`button`}
                      className={`apps__folder-tab`}
                      aria-expanded={open}
                      aria-controls={`apps-folder-${a.key}`}
                      onClick={() => setOpenFolder(open ? -1 : i)}
                    >
                      <span className={`apps__icon`} aria-hidden={`true`}>
                        <AppIcon kind={a.key} />
                      </span>
                      <span className={`apps__docktext`}>
                        <b className={`font-display`}>{a.name}</b>
                        <span>{a.short}</span>
                      </span>
                      <span className={`apps__folder-chev`} aria-hidden={`true`} />
                    </button>
                    <div id={`apps-folder-${a.key}`} className={`apps__folder-body`} inert={!open}>
                      <div className={`apps__folder-sheet`}>
                        {/* screen on the left (a peek of the app, replaying each time the folder opens),
                            title and description on the right over a soft radial glow */}
                        <div className={`apps__folder-top`}>
                          <div className={`apps__folder-device`} aria-hidden={`true`}>
                            <div className={`apps__phone`}>
                              <div className={`apps__notch`} />
                              <div className={`apps__screen ${open ? `is-active` : ``}`}>
                                {a.screenshot ? <img src={a.screenshot} alt={``} className={`apps__shot`} /> : <Screen kind={a.key} />}
                              </div>
                            </div>
                          </div>
                          <div className={`apps__folder-head`}>{renderHead(a)}</div>
                        </div>
                        <div className={`apps__copy`}>{renderRest(a)}</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
          <>
          {/* phone + one reading column, centred together */}
          <div id={`apps-panel`} className={`apps__stage`}>
            <div className={`apps__device`} aria-hidden={`true`}>
              <div className={`apps__glow`} />
              <div className={`apps__phone`}>
                <div className={`apps__notch`} />
                {apps.map((a, i) => (
                  <div key={a.key} className={`apps__screen ${active === i ? `is-active` : ``}`}>
                    {a.screenshot ? (
                      <img src={a.screenshot} alt={``} className={`apps__shot`} />
                    ) : (
                      <Screen kind={a.key} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`apps__col`}>
              {/* keyed so the copy re-animates per app */}
              <div key={app.key} className={`apps__copy`}>
                {renderCopy(app)}
              </div>
            </div>
          </div>

          {/* app switcher: icon, English name, one-line description; the current app's tile is lit */}
          <nav className={`apps__dock`} aria-label={isTh ? `แอปของเรา` : `Our apps`}>
            {apps.map((a, i) => (
              <button
                key={a.key}
                type={`button`}
                onClick={() => goTo(i)}
                aria-current={active === i ? `step` : undefined}
                aria-label={`${a.name}: ${a.short}`}
                className={`apps__dockitem ${active === i ? `is-active` : ``}`}
              >
                <span className={`apps__icon`} aria-hidden={`true`}>
                  <AppIcon kind={a.key} />
                </span>
                <span className={`apps__docktext`}>
                  <b className={`font-display`}>{a.name}</b>
                  <span>{a.short}</span>
                </span>
              </button>
            ))}
          </nav>
          </>
          )}
        </div>
      </div>
    </section>
  );
}
