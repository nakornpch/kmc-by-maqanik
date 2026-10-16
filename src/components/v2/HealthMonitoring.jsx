// Digital health showroom for /home-v2: ONE app (Popmed Health Book) and its
// four feature groups — health log, mind care, online services (telemedicine +
// Medport health book) and missions/rewards. Copy and screenshots come from the
// "01_Popmed Health Book" deck (Oct 2026); store links are decoded from its QR codes.
// The section pins and scrolling steps through the features (the tabs scroll
// to their feature); the phone in the middle switches screen, with the copy
// beside it. It plays an intro the first time it comes into view.
// On phones there is no pinning: the features are a stack of file folders, and
// tapping a folder's tab unfolds its panel toward the reader (one open at a time);
// tapping an open folder's tab folds it closed again.
// A feature without a `screenshot` falls back to a drawn mock-up screen.
import { useEffect, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { AnimatedHeading } from "../../site.jsx";
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
  if (kind === `log`)
    return (
      <svg {...common}>
        <path d={`M3 12h4l2-5 4 10 2-5h6`} />
      </svg>
    );
  if (kind === `mind`)
    return (
      <svg {...common}>
        <path d={`M3 9h11a3 3 0 1 0-3-3`} />
        <path d={`M3 13h15a3 3 0 1 1-3 3`} />
        <path d={`M3 17h6`} />
      </svg>
    );
  if (kind === `services`)
    return (
      <svg {...common}>
        <rect x={`3`} y={`6`} width={`12`} height={`12`} rx={`2.5`} />
        <path d={`m15 10 6-3v10l-6-3`} />
      </svg>
    );
  return (
    <svg {...common}>
      <path d={`M8 4h8v5a4 4 0 0 1-8 0z`} />
      <path d={`M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7`} />
    </svg>
  );
}

function Screen({ kind }) {
  if (kind === `log`) {
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
  if (kind === `services`) {
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
  const steps = 4;
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
  const stores = [
    { href: `https://apps.apple.com/th/app/popmed-health-book/id6780253726`, label: `App Store` },
    { href: `https://play.google.com/store/apps/details?id=co.popmed.healthbook`, label: `Google Play`, quiet: true },
  ];

  const apps = [
    {
      key: `log`,
      name: isTh ? `บันทึกสุขภาพ` : `Health log`,
      short: isTh ? `ค่าสุขภาพ อาหาร ก้าวเดิน` : `Vitals, meals, steps`,
      screenshot: `/images/apps/healthbook-log.webp`,
      kicker: `Daily care`,
      title: isTh ? `ติดตามค่าสุขภาพได้ที่บ้าน` : `Track your health at home`,
      desc: isTh
        ? `จดค่าที่วัดเองที่บ้านเก็บไว้ดูย้อนหลัง ให้เห็นแนวโน้มระหว่างนัดพบแพทย์ โรคเรื้อรังอย่างความดันสูงและเบาหวานจึงไม่ถูกมองข้ามอีกต่อไป`
        : `Log the readings you take at home and look back over them, so the trend between doctor visits is visible and conditions like high blood pressure and diabetes are not missed.`,
      points: isTh
        ? [
            `สัญญาณชีพ 9 รายการ: ความดัน ชีพจร อุณหภูมิ น้ำตาลในเลือด SpO₂ น้ำหนัก รอบเอว ส่วนสูง อัตราการหายใจ`,
            `ถ่ายรูปอาหาร ให้ AI บอกชื่อเมนู แคลอรี่ สารอาหาร พร้อมคำแนะนำสั้น ๆ และสรุปโภชนาการประจำวัน`,
            `บันทึกการออกกำลังกาย ระบุเวลาเป็นนาที แอปประเมินแคลอรี่ที่เผาผลาญให้`,
            `นับก้าวอัตโนมัติจากแอปสุขภาพในมือถือหรือ Smart Watch`,
            `ทุกบันทึกรวมอยู่ในไดอารี่ เป็นไทม์ไลน์ประจำวัน`,
          ]
        : [
            `Nine vital signs: blood pressure, pulse, temperature, blood sugar, SpO₂, weight, waist, height and breathing rate`,
            `Snap a meal and AI names the dish, counts calories and nutrients, adds a short tip and a daily nutrition summary`,
            `Log exercise in minutes and the app estimates the calories burned`,
            `Steps sync automatically from your phone's health app or a smartwatch`,
            `Every entry lands in a daily diary timeline`,
          ],
      numbered: true,
    },
    {
      key: `mind`,
      name: `Mind care`,
      short: isTh ? `ดูแลใจ อารมณ์ การหายใจ` : `Mood, breathing, self-check`,
      screenshot: `/images/apps/healthbook-mind.webp`,
      kicker: `Mind care`,
      title: isTh ? `ดูแลใจไปพร้อมกับร่างกาย` : `Look after your mind, too`,
      desc: isTh
        ? `บันทึกอารมณ์ในแต่ละช่วงของวัน และมีเครื่องมือดูแลใจด้วยตัวเองอยู่ในแท็บสุขภาพ`
        : `Note how you feel through the day, with self-care tools for the mind in the Health tab.`,
      points: isTh
        ? [
            `สำรวจใจตัวเองด้วย DASS-21 แบบประเมินภาวะซึมเศร้า วิตกกังวล และความเครียด`,
            `ฝึกหายใจ 1 นาที: 4-4-4-4 ช่วยให้มีสมาธิ, 4-4-6 ช่วยผ่อนคลาย, 4-7-8 ช่วยให้นอนหลับ`,
            `บันทึกอารมณ์และระดับความรู้สึกลงไดอารี่ประจำวัน`,
            `บทความสุขภาพสั้น ๆ อ่านได้ในแอป`,
          ]
        : [
            `Check in with yourself using DASS-21, a screen for depression, anxiety and stress`,
            `One-minute breathing: 4-4-4-4 to focus, 4-4-6 to relax, 4-7-8 to fall asleep`,
            `Record your mood and how strongly you feel it in the daily diary`,
            `Short health articles to read in the app`,
          ],
    },
    {
      key: `services`,
      name: isTh ? `บริการออนไลน์` : `Online services`,
      short: isTh ? `ปรึกษาแพทย์ สมุดสุขภาพ` : `Doctor visits, health record`,
      screenshot: `/images/apps/healthbook-services.webp`,
      kicker: `Services`,
      title: isTh ? `พบแพทย์และดูประวัติสุขภาพได้จากที่บ้าน` : `See a doctor and your records from home`,
      desc: isTh
        ? `เมนูบริการรวมการปรึกษาแพทย์ออนไลน์และสมุดสุขภาพไว้ด้วยกัน ไม่ต้องเดินทาง ไม่ต้องรอคิว และประวัติสุขภาพไม่ต้องกระจัดกระจายอยู่ตามแต่ละคลินิก`
        : `The Services menu puts online consultations and your health record side by side: no travel, no queue, and no history scattered across clinics.`,
      points: isTh
        ? [
            `ปรึกษาแพทย์ออนไลน์ (Telemedicine) ผ่านวิดีโอคอลได้ทันที ผ่านเว็บไซต์ Kitmeechai Health`,
            `สมุดสุขภาพ Medport ผูกกับเบอร์โทรของคุณ เปิดดูได้ทุกที่ ใช้ประกอบการพบแพทย์ หรือแชร์ให้ครอบครัว`,
          ]
        : [
            `Online consultations (telemedicine) by video call straight away, through the Kitmeechai Health website`,
            `Medport health record, tied to your phone number: open it anywhere, bring it to appointments or share it with family`,
          ],
      links: [
        { to: `/services/telemedicine`, label: isTh ? `ดูบริการ Telemedicine` : `About telemedicine` },
        { to: `/services/health-monitoring`, label: isTh ? `โปรแกรมติดตามผลแล็บ (Lab + App)` : `Lab + App monitoring program`, quiet: true },
      ],
    },
    {
      key: `missions`,
      name: isTh ? `ภารกิจและรางวัล` : `Missions & rewards`,
      short: isTh ? `สะสม EXP เลื่อนเลเวล` : `Earn EXP, level up`,
      screenshot: `/images/apps/healthbook-missions.webp`,
      kicker: `Gamification`,
      title: isTh ? `สนุกกับการดูแลสุขภาพในสไตล์ของคุณ` : `Make looking after yourself fun`,
      desc: isTh
        ? `ทำภารกิจทั้งนับก้าว บันทึกอาหาร บันทึกอารมณ์ เพื่อสะสม EXP และ Points เลื่อนเลเวล รับรางวัล และแข่งขันกับเพื่อน ช่วยให้การดูแลสุขภาพไม่น่าเบื่อ`
        : `Complete missions such as walking, logging meals and moods to earn EXP and Points, level up, win rewards and compete with friends.`,
      points: isTh
        ? [
            `ภารกิจรายวัน เช่น เปิดแอป บันทึกอาหาร บันทึกอารมณ์ เดินครบเป้า`,
            `ภารกิจพิเศษด้านออกกำลังกาย โภชนาการ และสุขภาพจิต ได้คะแนนมากกว่า`,
            `9 เลเวล ตั้งแต่ “ก้าวแรก” (First Step) ถึง Health Legend`,
            `นำ Points ไปแลกของรางวัล`,
            `สำหรับองค์กร: ใส่รหัสเชิญจากบริษัทตอนสมัคร แล้ว HR ดูภาพรวมก้าวเดิน อาหาร และอารมณ์ได้ใน HR Dashboard`,
          ]
        : [
            `Daily missions: open the app, log a meal, log your mood, hit your step goal`,
            `Special missions in exercise, nutrition and mental health that pay more`,
            `Nine levels, from First Step to Health Legend`,
            `Trade Points for rewards`,
            `For organisations: sign up with a company invite code and HR sees overall steps, nutrition and mood on the HR Dashboard`,
          ],
      links: stores,
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
          {a.links.map((l) => {
            const inner = (
              <>
                {l.label}
                {!l.quiet && <span aria-hidden={`true`}>{`→`}</span>}
              </>
            );
            const cls = l.quiet ? `apps__quiet` : `apps__cta`;
            // store links leave the site; everything else is an in-app route
            return l.href ? (
              <a key={l.href} href={l.href} className={cls} target={`_blank`} rel={`noopener noreferrer`}>
                {inner}
              </a>
            ) : (
              <Link key={l.to} to={l.to} className={cls}>
                {inner}
              </Link>
            );
          })}
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
              Popmed Health Book
            </p>
            <AnimatedHeading
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-white`}
              text={isTh ? `แอปเดียว ดูแลสุขภาพครบในที่เดียว` : `One app for your everyday health`}
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

          {/* feature switcher: icon, name, one-line description; the current feature's tile is lit */}
          <nav className={`apps__dock`} aria-label={isTh ? `ฟีเจอร์ในแอป` : `App features`}>
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
