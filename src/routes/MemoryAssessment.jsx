import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5 } from "../vendor/react-SEPqUFC0.js";
import { a as i, t as a } from "./usePageMeta.jsx";
import { a as o } from "../vendor/motion-CB540VaL.js";
import "../site.jsx";
import {
  a as _Element4,
  c,
  i as _Element3,
  l as u,
  n as _Element6,
  o as _Element2,
  r as _Element,
  t as m,
} from "./AssessmentParts.jsx";
var h = e(t(), 1),
  g = {
    th: `เปรียบเทียบกับเมื่อไม่กี่ปีก่อน มีการเปลี่ยนแปลงเรื่องนี้หรือไม่`,
    en: `Compared with a few years ago, has this changed?`,
  },
  _ = [
    {
      id: `A-01`,
      th: `การตัดสินใจแย่ลง`,
      en: `Poorer judgement`,
      detail: {
        th: `เช่น ตัดสินใจเรื่องเงินผิดพลาด ถูกหลอกหรือถูกชักจูงง่ายขึ้น หรือตัดสินใจเรื่องที่เคยตัดสินใจเองได้ไม่ได้แล้ว`,
        en: `For example, money mistakes, being tricked or persuaded more easily, or no longer making decisions they used to make on their own.`,
      },
    },
    {
      id: `A-02`,
      th: `ความสนใจในงานอดิเรกหรือกิจกรรมลดลง`,
      en: `Less interest in hobbies or activities`,
      detail: {
        th: `เลิกทำสิ่งที่เคยชอบ ไม่อยากออกไปพบเพื่อน หรือไม่สนใจกิจกรรมที่เคยทำเป็นประจำ`,
        en: `Giving up things they enjoyed, not wanting to see friends, or losing interest in regular activities.`,
      },
    },
    {
      id: `A-03`,
      th: `พูดหรือถามเรื่องเดิมซ้ำ ๆ`,
      en: `Repeating the same questions or stories`,
      detail: {
        th: `ถามคำถามเดิมหลายครั้งในเวลาไม่นาน หรือเล่าเรื่องเดิมซ้ำโดยไม่รู้ว่าเคยเล่าไปแล้ว`,
        en: `Asking the same question several times in a short while, or retelling a story without realising they already told it.`,
      },
    },
    {
      id: `A-04`,
      th: `เรียนรู้การใช้อุปกรณ์ใหม่ได้ยากขึ้น`,
      en: `Harder to learn how to use a new device`,
      detail: {
        th: `เช่น รีโมททีวี เครื่องซักผ้า ไมโครเวฟ หรือโทรศัพท์มือถือเครื่องใหม่`,
        en: `For example, a TV remote, washing machine, microwave or a new mobile phone.`,
      },
    },
    {
      id: `A-05`,
      th: `ลืมเดือนหรือปีปัจจุบัน`,
      en: `Forgetting the current month or year`,
      detail: {
        th: `สับสนว่าตอนนี้เดือนอะไร ปีอะไร หรือวันนี้เป็นวันอะไร`,
        en: `Confused about which month or year it is, or what day it is today.`,
      },
    },
    {
      id: `A-06`,
      th: `จัดการเรื่องเงินที่ซับซ้อนได้ยากขึ้น`,
      en: `Harder to handle complicated money matters`,
      detail: {
        th: `เช่น จ่ายบิล คำนวณเงินทอน ทำบัญชีรายรับรายจ่าย หรือจัดการเรื่องธนาคาร`,
        en: `For example, paying bills, working out change, keeping household accounts or dealing with the bank.`,
      },
    },
    {
      id: `A-07`,
      th: `จำนัดหมายไม่ได้`,
      en: `Forgetting appointments`,
      detail: {
        th: `ลืมนัดหมอ ลืมนัดกับญาติ หรือต้องมีคนคอยเตือนทุกครั้ง`,
        en: `Missing doctor or family appointments, or needing a reminder every time.`,
      },
    },
    {
      id: `A-08`,
      th: `มีปัญหาด้านความคิดและความจำในชีวิตประจำวันอย่างต่อเนื่อง`,
      en: `Ongoing everyday problems with thinking and memory`,
      detail: {
        th: `เป็นทุกวันหรือเกือบทุกวัน ไม่ใช่เป็นครั้งคราวเวลาเหนื่อยหรือเครียด`,
        en: `Every day or nearly every day, not just now and then when tired or stressed.`,
      },
    },
  ],
  v = [
    {
      value: `yes`,
      th: `ใช่ เปลี่ยนไปจากเดิม`,
      en: `Yes, it has changed`,
    },
    {
      value: `no`,
      th: `ไม่ใช่ ไม่มีการเปลี่ยนแปลง`,
      en: `No change`,
    },
    {
      value: `unknown`,
      th: `ไม่ทราบ`,
      en: `Don't know`,
    },
  ];
function ee(e) {
  let t = _.map((t) => e[t.id] ?? null);
  if (t.includes(null)) return null;
  let n = t.filter((e) => e === `yes`).length,
    r = t.filter((e) => e === `unknown`).length;
  return r >= 3
    ? {
        kind: `inconclusive`,
        yesCount: n,
        unknownCount: r,
      }
    : n <= 1
      ? {
          kind: `no-concern`,
          yesCount: n,
          unknownCount: r,
        }
      : {
          kind: `see-doctor`,
          yesCount: n,
          unknownCount: r,
        };
}
var y = [
    {
      th: `ความจำเสื่อมจนกระทบชีวิตประจำวัน`,
      en: `Memory loss that disrupts daily life`,
    },
    {
      th: `วางแผนหรือแก้ปัญหาได้ยากขึ้น`,
      en: `Trouble planning or solving problems`,
    },
    {
      th: `ทำกิจวัตรที่เคยทำเป็นประจำได้ยากขึ้น`,
      en: `Difficulty with familiar everyday tasks`,
    },
    {
      th: `สับสนเรื่องวัน เวลา หรือสถานที่`,
      en: `Confusion about time or place`,
    },
    {
      th: `มีปัญหาในการเข้าใจภาพหรือกะระยะ`,
      en: `Trouble understanding images or judging distance`,
    },
    {
      th: `นึกคำพูดไม่ออก หรือพูดคุยต่อเนื่องได้ยาก`,
      en: `Problems finding words or following a conversation`,
    },
    {
      th: `วางของผิดที่ และย้อนนึกไม่ได้ว่าวางไว้ที่ไหน`,
      en: `Misplacing things and being unable to retrace steps`,
    },
    {
      th: `การตัดสินใจแย่ลง`,
      en: `Poorer judgement`,
    },
    {
      th: `แยกตัวจากงานหรือกิจกรรมทางสังคม`,
      en: `Withdrawing from work or social activities`,
    },
    {
      th: `อารมณ์หรือบุคลิกภาพเปลี่ยนไป`,
      en: `Changes in mood or personality`,
    },
  ],
  b = o(),
  x = {
    th: `ทำแบบสังเกตความจำให้ผู้สูงอายุอีกครั้ง`,
    en: `Repeat the memory check for your family member`,
  };
function S() {
  if (typeof navigator > `u`) return `other`;
  let e = navigator.userAgent || ``,
    t = navigator.userAgentData?.platform || ``;
  return /android/i.test(t) || /android/i.test(e)
    ? `android`
    : /iphone|ipad|ipod|macintosh|mac os x/i.test(e) || /macos|ios/i.test(t)
      ? `apple`
      : `other`;
}
function C(e) {
  let t = (e) => String(e).padStart(2, `0`);
  return `${e.getFullYear()}${t(e.getMonth() + 1)}${t(e.getDate())}`;
}
function w() {
  let e = new Date();
  e.setMonth(e.getMonth() + 6);
  let t = new Date(e);
  return (
    t.setDate(t.getDate() + 1),
    {
      start: C(e),
      end: C(t),
    }
  );
}
function T() {
  return `${window.location.origin}${window.location.pathname}`;
}
function E(e) {
  let { start: t, end: n } = w();
  return `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: `TEMPLATE`,
    text: e ? x.th : x.en,
    dates: `${t}/${n}`,
    details: T(),
  })}`;
}
function D(e) {
  let { start: t, end: n } = w(),
    r = e ? x.th : x.en,
    i = [
      `BEGIN:VCALENDAR`,
      `VERSION:2.0`,
      `PRODID:-//KMC Hospital//Memory check reminder//TH`,
      `BEGIN:VEVENT`,
      `UID:${Date.now()}@kmc-hospital.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, ``).slice(0, 15)}Z`,
      `DTSTART;VALUE=DATE:${t}`,
      `DTEND;VALUE=DATE:${n}`,
      `SUMMARY:${r}`,
      `DESCRIPTION:${T()}`,
      `BEGIN:VALARM`,
      `ACTION:DISPLAY`,
      `DESCRIPTION:${r}`,
      `TRIGGER:PT9H`,
      `END:VALARM`,
      `BEGIN:VALARM`,
      `ACTION:DISPLAY`,
      `DESCRIPTION:${r}`,
      `TRIGGER:-PT15H`,
      `END:VALARM`,
      `END:VEVENT`,
      `END:VCALENDAR`,
    ].join(`\r
`),
    a = document.createElement(`a`);
  ((a.href = URL.createObjectURL(
    new Blob([i], {
      type: `text/calendar`,
    }),
  )),
    (a.download = `kmc-memory-check-reminder.ics`),
    a.click(),
    setTimeout(() => URL.revokeObjectURL(a.href), 1e3));
}
function O({ isTh: e }) {
  let [t, n] = (0, h.useState)(`other`),
    [r, i] = (0, h.useState)(!1),
    [a, o] = (0, h.useState)(``);
  (0, h.useEffect)(() => {
    n(S());
  }, []);
  let s = (t) => (
      <a
        href={E(e)}
        target={`_blank`}
        rel={`noopener noreferrer`}
        onClick={() =>
          o(
            e
              ? `เปิด Google Calendar แล้ว กด "บันทึก" เพื่อเพิ่มนัด`
              : `Google Calendar is open. Tap "Save" to add the reminder.`,
          )
        }
        className={t ? m.primary : m.secondary}
      >
        <_Element name={`calendar`} className={`h-4 w-4`} />
        {e ? `เพิ่มใน Google Calendar` : `Add to Google Calendar`}
      </a>
    ),
    c = (n) => (
      <button
        type={`button`}
        onClick={() => {
          (D(e),
            o(
              t === `apple`
                ? e
                  ? `กด "เพิ่ม" ในหน้าต่างปฏิทินที่ขึ้นมา เพื่อบันทึกนัด`
                  : `Tap "Add" in the calendar prompt to save the reminder.`
                : e
                  ? `ดาวน์โหลดไฟล์นัดแล้ว เปิดไฟล์เพื่อเพิ่มลงปฏิทิน`
                  : `Reminder file downloaded. Open it to add it to your calendar.`,
            ));
        }}
        className={n ? m.primary : m.secondary}
      >
        <_Element name={`calendar`} className={`h-4 w-4`} />
        {t === `apple`
          ? e
            ? `เพิ่มลงปฏิทิน`
            : `Add to Calendar`
          : e
            ? `ดาวน์โหลดไฟล์ปฏิทิน (Outlook / Apple)`
            : `Download calendar file (Outlook / Apple)`}
      </button>
    ),
    l = t === `android` ? s(!0) : t === `apple` ? c(!0) : null;
  return (
    <div className={`w-full rounded-2xl bg-white/70 p-4 ring-1 ring-emerald-200 sm:p-5`}>
      <p className={`font-medium text-kmc-secondary`}>
        {e ? `ตั้งเตือนให้กลับมาเช็กอีกครั้งใน 6 เดือน` : `Remind me to check again in 6 months`}
      </p>
      <div className={`mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap`}>
        {l || (
          <b.Fragment>
            {s(!0)}
            {c(!1)}
          </b.Fragment>
        )}
        {l && r && (t === `android` ? c(!1) : s(!1))}
      </div>
      {l && !r && (
        <button
          type={`button`}
          onClick={() => i(!0)}
          className={`mt-2 inline-flex min-h-[44px] cursor-pointer items-center text-sm font-medium text-kmc-primary-deep underline underline-offset-4`}
        >
          {e ? `ใช้ปฏิทินอื่น` : `Use a different calendar`}
        </button>
      )}
      <p
        aria-live={`polite`}
        className={`mt-2 text-sm leading-relaxed text-emerald-900 empty:hidden`}
      >
        {a}
      </p>
    </div>
  );
}
var k = _.length,
  A = {
    "no-concern": {
      card: `bg-emerald-50 ring-emerald-200`,
      badge: `bg-emerald-700`,
    },
    "see-doctor": {
      card: `bg-amber-50 ring-amber-200`,
      badge: `bg-amber-700`,
    },
    inconclusive: {
      card: `bg-fog-1 ring-fog-2`,
      badge: `bg-kmc-primary-deep`,
    },
  };
function j() {
  let { i18n: e } = n(),
    t = e.language === `th`,
    o = (e) => (t ? e.th : e.en);
  a({
    title: t
      ? `แบบสังเกตความจำและการรู้คิด สำหรับครอบครัวผู้สูงวัย`
      : `Memory & Thinking Check for Families of Older Adults`,
    description: t
      ? `พ่อแม่เปลี่ยนไปหรือเราคิดไปเอง ตอบ 8 ข้อใน 3 นาที แบบสังเกตสำหรับลูกหลาน ช่วยตัดสินใจว่าควรพาผู้สูงอายุไปพบแพทย์หรือยัง`
      : `Has your parent changed, or is it just you? Eight questions in three minutes to help families decide whether it is time to see a doctor.`,
    keywords: t
      ? `แบบประเมินความจำ, สมองเสื่อม, อัลไซเมอร์, AD8, ผู้สูงอายุขี้ลืม`
      : `memory test, dementia checklist, Alzheimer’s warning signs, AD8`,
  });
  let [x, S] = (0, h.useState)(`intro`),
    [C, w] = (0, h.useState)(0),
    [T, E] = (0, h.useState)({}),
    [D, j] = (0, h.useState)(null),
    [M, N] = (0, h.useState)(!1),
    [P, F] = (0, h.useState)(!1),
    [I, L] = (0, h.useState)(!1),
    R = (0, h.useRef)(null),
    z = (0, h.useRef)(null),
    B = (0, h.useRef)(null),
    V = (0, h.useRef)(null),
    H = (0, h.useRef)(!1),
    U = _.filter((e) => T[e.id]).length,
    W = _.filter((e) => !T[e.id]),
    G = ee(T),
    K = _[C],
    q = C === k - 1;
  ((0, h.useEffect)(() => {
    (x === `questions` &&
      R.current?.focus({
        preventScroll: !0,
      }),
      x === `result` &&
        z.current?.focus({
          preventScroll: !0,
        }));
  }, [x, C]),
    (0, h.useEffect)(() => () => clearTimeout(V.current), []));
  let J = (e) => {
      (clearTimeout(V.current), w(e), c());
    },
    Y = () => {
      (S(`questions`), w(W.length && W.length < k ? _.indexOf(W[0]) : 0), c());
    },
    X = (e) => {
      (E((t) => ({
        ...t,
        [K.id]: e,
      })),
        q ||
          (clearTimeout(V.current),
          (V.current = setTimeout(() => w((e) => Math.min(e + 1, k - 1)), 350))));
    },
    Z = () => {
      if (!G) {
        J(_.indexOf(W[0]));
        return;
      }
      (j(new Date()),
        S(`result`),
        (H.current ||=
          (i(`assessment_complete`, {
            assessment: `memory`,
          }),
          !0)),
        c());
    },
    Q = () => {
      (E({}), w(0), S(`questions`), N(!1), c());
    },
    $ = () => {
      (L(!0),
        requestAnimationFrame(() =>
          B.current?.scrollIntoView({
            behavior: `smooth`,
            block: `start`,
          }),
        ));
    };
  return (
    <div className={`bg-kmc-bg`}>
      <_Element2
        photo={`physio/wheelchairs`}
        compact={x !== `intro`}
        eyebrow={
          <b.Fragment>
            <_Element name={`shield`} className={`h-4 w-4`} />
            {t ? `แบบสังเกตสำหรับครอบครัว` : `For families`}
          </b.Fragment>
        }
        title={t ? `พ่อแม่เปลี่ยนไป หรือเราคิดไปเอง?` : `Has Mum or Dad changed, or is it just me?`}
        intro={
          <p>
            {t
              ? `แบบสังเกตนี้สำหรับลูกหลานหรือคนใกล้ชิดที่เห็นผู้สูงอายุเป็นประจำ ไม่ใช่แบบทดสอบที่ผู้สูงอายุทำเอง เพราะคนที่มองเห็นความเปลี่ยนแปลงได้ชัดที่สุดคือคนรอบตัว`
              : `This is for children or close family who see the older person regularly, not a test for the older person to take. The people around them notice change most clearly.`}
          </p>
        }
        meta={[
          {
            icon: `list`,
            label: t ? `8 ข้อ` : `8 questions`,
          },
          {
            icon: `clock`,
            label: t ? `ประมาณ 3 นาที` : `About 3 minutes`,
          },
          {
            icon: `shield`,
            label: t ? `ไม่เก็บข้อมูล` : `Nothing stored`,
          },
        ]}
        aside={
          x === `intro` && (
            <div
              className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ring-kmc-secondary/10 sm:p-7`}
            >
              <p className={`font-display text-lg font-semibold text-kmc-secondary`}>
                {t ? `ก่อนเริ่มตอบ` : `Before you start`}
              </p>
              <p className={`mt-2 leading-relaxed text-kmc-secondary/75`}>
                {t
                  ? `ให้เปรียบเทียบกับเมื่อไม่กี่ปีก่อน และตอบเฉพาะการเปลี่ยนแปลงที่เกิดจากปัญหาด้านความคิดและความจำ ไม่ใช่จากปัญหาทางร่างกาย เช่น ปวดเข่าจนไม่ได้ออกไปไหน`
                  : `Compare with a few years ago, and count only changes caused by thinking and memory problems, not physical ones such as knee pain that keeps them at home.`}
              </p>
              <button type={`button`} onClick={Y} className={`${m.primary} mt-6 w-full text-lg`}>
                {U > 0
                  ? t
                    ? `ทำต่อจากเดิม`
                    : `Continue`
                  : t
                    ? `เริ่มตอบคำถาม`
                    : `Start the questions`}
                <_Element name={`arrowRight`} className={`h-4 w-4`} />
              </button>
              <div className={`mt-6 border-t border-kmc-secondary/10 pt-5`}>
                <p className={`text-center text-sm text-kmc-secondary/65`}>
                  {t ? `ยังไม่แน่ใจว่าควรทำไหม?` : `Not sure yet?`}
                </p>
                <button type={`button`} onClick={$} className={`${m.secondary} mt-3 w-full`}>
                  <_Element name={`book`} className={`h-4 w-4`} />
                  {t ? `อ่าน 10 สัญญาณเตือนก่อน` : `Read the 10 warning signs`}
                </button>
              </div>
            </div>
          )
        }
      />
      {x === `questions` && (
        <div className={`mx-auto max-w-2xl px-4 pb-20 pt-5 sm:px-6 sm:pt-8`}>
          <div className={`flex items-center justify-between gap-4`}>
            <p className={`font-medium text-kmc-secondary`} aria-live={`polite`}>
              {t ? `ข้อ ${C + 1} จาก ${k}` : `Question ${C + 1} of ${k}`}
            </p>
            <p className={`text-sm text-kmc-secondary/60`}>
              {t ? `ตอบแล้ว ${U} ข้อ` : `${U} answered`}
            </p>
          </div>
          <ol className={`mt-2 grid grid-cols-8 gap-1.5 sm:mt-3`}>
            {_.map((e, n) => (
              <li key={e.id}>
                <button
                  type={`button`}
                  onClick={() => J(n)}
                  aria-label={`${t ? `ไปข้อ` : `Go to question`} ${n + 1}${T[e.id] ? (t ? ` ตอบแล้ว` : `, answered`) : ``}`}
                  aria-current={n === C ? `step` : void 0}
                  className={`group flex h-6 w-full cursor-pointer items-center`}
                >
                  <span
                    className={`block h-2 w-full rounded-full transition-colors duration-200 ${n === C ? `bg-kmc-secondary` : T[e.id] ? `bg-kmc-primary-deep/60 group-hover:bg-kmc-primary-deep` : `bg-kmc-secondary/10 group-hover:bg-kmc-secondary/25`}`}
                  />
                </button>
              </li>
            ))}
          </ol>
          <fieldset
            key={K.id}
            className={`mt-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-kmc-secondary/10 motion-safe:animate-[fade-up_300ms_ease-out] sm:mt-6 sm:p-9`}
          >
            <legend className={`sr-only`}>
              {o(g)}
              {` `}
              {o(K)}
            </legend>
            <p className={`text-sm font-medium leading-relaxed text-kmc-primary-deep`}>{o(g)}</p>
            <h2
              ref={R}
              tabIndex={-1}
              className={`mt-2 font-display text-[1.4rem] font-semibold leading-snug text-kmc-secondary outline-none sm:mt-3 sm:text-3xl`}
            >
              {o(K)}
            </h2>
            <p className={`mt-2 leading-relaxed text-kmc-secondary/70 sm:mt-3 sm:text-lg`}>
              {o(K.detail)}
            </p>
            <div className={`mt-5 grid gap-2.5 sm:mt-7 sm:gap-3`}>
              {v.map((e) => (
                <_Element3
                  key={e.value}
                  size={`lg`}
                  name={`memory-${K.id}`}
                  value={e.value}
                  checked={T[K.id] === e.value}
                  onChange={() => X(e.value)}
                  label={o(e)}
                />
              ))}
            </div>
          </fieldset>
          <div className={`mt-4 flex items-center justify-between gap-3 sm:mt-6`}>
            <button
              type={`button`}
              onClick={() => (C === 0 ? S(`intro`) : J(C - 1))}
              className={m.ghost}
            >
              <_Element name={`arrowLeft`} className={`h-4 w-4`} />
              {t ? `ย้อนกลับ` : `Back`}
            </button>
            {q || U === k ? (
              <button type={`button`} onClick={Z} className={`${m.primary} px-7`}>
                {G
                  ? t
                    ? `ดูผลการสังเกต`
                    : `See the result`
                  : t
                    ? `เหลืออีก ${W.length} ข้อ`
                    : `${W.length} left`}
                <_Element name={`arrowRight`} className={`h-4 w-4`} />
              </button>
            ) : (
              <button
                type={`button`}
                onClick={() => J(C + 1)}
                disabled={!T[K.id]}
                className={m.secondary}
              >
                {t ? `ข้อถัดไป` : `Next`}
                <_Element name={`arrowRight`} className={`h-4 w-4`} />
              </button>
            )}
          </div>
          <div className={`mt-10`}>
            <_Element4
              isTh={t}
              text={
                t
                  ? `คำตอบอยู่ในเบราว์เซอร์นี้เท่านั้น ไม่มีการส่งหรือเก็บข้อมูล`
                  : `Answers stay in this browser. Nothing is sent or stored.`
              }
            />
          </div>
        </div>
      )}
      {x === `result` && G && (
        <div className={`mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 print:p-0`}>
          <div className={`flex flex-wrap items-center justify-between gap-3 print:hidden`}>
            <button
              type={`button`}
              onClick={() => {
                (S(`questions`), c());
              }}
              className={m.ghost}
            >
              <_Element name={`pencil`} className={`h-4 w-4`} />
              {t ? `แก้ไขคำตอบ` : `Edit answers`}
            </button>
            <button type={`button`} onClick={() => N(!0)} className={m.ghost}>
              <_Element name={`reset`} className={`h-4 w-4`} />
              {t ? `ทำใหม่` : `Start over`}
            </button>
          </div>
          <section className={`mt-4 rounded-3xl p-5 ring-1 sm:p-10 print:hidden ${A[G.kind].card}`}>
            <p
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white ${A[G.kind].badge}`}
            >
              {G.kind === `no-concern` && (t ? `ยังไม่พบสัญญาณที่น่ากังวล` : `No signs of concern`)}
              {G.kind === `see-doctor` && (t ? `ควรพบแพทย์` : `See a doctor`)}
              {G.kind === `inconclusive` && (t ? `ยังสรุปไม่ได้` : `Inconclusive`)}
            </p>
            <h2
              ref={z}
              tabIndex={-1}
              className={`mt-4 font-display text-[1.4rem] font-semibold leading-snug text-kmc-secondary outline-none sm:text-3xl`}
            >
              {G.kind === `no-concern` &&
                (t
                  ? `จากสิ่งที่คุณสังเกต ยังไม่พบสัญญาณที่ต้องกังวลในตอนนี้`
                  : `From what you’ve noticed, there are no signs to worry about right now`)}
              {G.kind === `see-doctor` &&
                (t
                  ? `คุณสังเกตเห็นการเปลี่ยนแปลง ${G.yesCount} เรื่อง ควรให้แพทย์ประเมินเพิ่มเติม`
                  : `You noticed ${G.yesCount} changes. A doctor should take a closer look`)}
              {G.kind === `inconclusive` &&
                (t
                  ? `ยังสรุปผลไม่ได้ เพราะมีหลายข้อที่คุณยังไม่แน่ใจ`
                  : `We can’t draw a conclusion yet: several answers were “don’t know”`)}
            </h2>
            <div
              className={`mt-4 space-y-4 leading-relaxed text-kmc-secondary/80 sm:mt-5 sm:text-lg`}
            >
              {G.kind === `no-concern` && (
                <b.Fragment>
                  <p>
                    {t
                      ? `คำตอบของคุณไม่พบการเปลี่ยนแปลงที่บ่งชี้ปัญหาด้านความจำและการรู้คิด แต่แบบสังเกตนี้เป็นเพียงการคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัย`
                      : `Your answers don’t show changes that point to memory or thinking problems. This is only a first screen, not a diagnosis.`}
                  </p>
                  <p>
                    {t
                      ? `ความจำที่ถดถอยมักค่อยเป็นค่อยไปจนคนใกล้ตัวไม่ทันสังเกต แนะนำให้กลับมาทำแบบสังเกตนี้อีกครั้งใน 6 เดือน และหากมีอาการเปลี่ยนแปลงชัดเจนก่อนหน้านั้น ให้พาไปพบแพทย์ได้เลยโดยไม่ต้องรอ`
                      : `Memory decline is often so gradual that family miss it. Come back in 6 months, and if you see clear changes before then, see a doctor without waiting.`}
                  </p>
                </b.Fragment>
              )}
              {G.kind === `see-doctor` && (
                <p>
                  {t
                    ? `สิ่งที่คุณเห็นไม่ใช่เรื่องที่ควรมองข้าม แต่ก็ยังไม่ใช่คำวินิจฉัย แบบสังเกตนี้บอกได้เพียงว่ามีความเปลี่ยนแปลงมากพอที่ควรให้แพทย์ตรวจหาสาเหตุ`
                    : `What you’ve seen shouldn’t be ignored, but it isn’t a diagnosis either. It only tells us there is enough change for a doctor to look for the cause.`}
                </p>
              )}
              {G.kind === `inconclusive` && (
                <b.Fragment>
                  <p>
                    {t
                      ? `แบบสังเกตนี้ต้องอาศัยคนที่เห็นผู้สูงอายุเป็นประจำ หากคุณไม่ได้อยู่ด้วยทุกวัน ผลที่ได้อาจต่ำกว่าความเป็นจริง`
                      : `This check relies on someone who sees the older person regularly. If you don’t live with them, the result may understate what is happening.`}
                  </p>
                  <p>
                    {t
                      ? `แนะนำให้ชวนคนที่ดูแลหรืออยู่กับท่านเป็นประจำมาตอบร่วมกัน หรือสังเกตเพิ่มอีกสักระยะแล้วกลับมาตอบใหม่ หากมีข้อใดที่คุณมั่นใจว่าเปลี่ยนไปจริง ไม่ต้องรอให้ครบทุกข้อ พาไปพบแพทย์ได้เลย`
                      : `Ask whoever looks after or lives with them to answer with you, or observe a little longer and come back. If you’re sure about any one change, don’t wait: see a doctor.`}
                  </p>
                </b.Fragment>
              )}
            </div>
            <div className={`mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap`}>
              {G.kind === `no-concern` && (
                <b.Fragment>
                  <O isTh={t} />
                  <button type={`button`} onClick={$} className={m.secondary}>
                    <_Element name={`book`} className={`h-4 w-4`} />
                    {t ? `อ่าน 10 สัญญาณเตือน` : `Read the 10 warning signs`}
                  </button>
                </b.Fragment>
              )}
              {G.kind === `see-doctor` && (
                <b.Fragment>
                  <button type={`button`} onClick={() => window.print()} className={m.primary}>
                    <_Element name={`printer`} className={`h-4 w-4`} />
                    {t ? `ดาวน์โหลดใบสรุปไปพบแพทย์` : `Download the summary for the doctor`}
                  </button>
                  <a
                    href={`https://line.me/R/ti/p/@kmchealth`}
                    target={`_blank`}
                    rel={`noopener noreferrer`}
                    data-cta-placement={`tool`}
                    data-cta-label={`memory_consult`}
                    className={m.secondary}
                  >
                    <_Element name={`chat`} className={`h-4 w-4`} />
                    {t ? `ปรึกษาทีมดูแลของ KMC` : `Talk to KMC’s care team`}
                  </a>
                </b.Fragment>
              )}
              {G.kind === `inconclusive` && (
                <b.Fragment>
                  <button
                    type={`button`}
                    onClick={async () => {
                      let e = `${window.location.origin}${window.location.pathname}`;
                      try {
                        if (navigator.share) {
                          await navigator.share({
                            title: t
                              ? `ช่วยตอบแบบสังเกตความจำให้หน่อย`
                              : `Could you fill in this memory check?`,
                            url: e,
                          });
                          return;
                        }
                        (await navigator.clipboard.writeText(e),
                          F(!0),
                          setTimeout(() => F(!1), 3e3));
                      } catch {}
                    }}
                    className={m.primary}
                  >
                    <_Element name={P ? `check` : `share`} className={`h-4 w-4`} />
                    {P
                      ? t
                        ? `คัดลอกลิงก์แล้ว`
                        : `Link copied`
                      : t
                        ? `ส่งลิงก์ให้คนที่ดูแลท่านตอบ`
                        : `Send the link to their carer`}
                  </button>
                  <button type={`button`} onClick={() => N(!0)} className={m.secondary}>
                    <_Element name={`reset`} className={`h-4 w-4`} />
                    {t ? `ทำใหม่อีกครั้ง` : `Start again`}
                  </button>
                </b.Fragment>
              )}
            </div>
          </section>
          {G.kind === `see-doctor` && (
            <section className={`mt-6 grid gap-4 sm:grid-cols-2 print:hidden`}>
              <div className={`rounded-3xl bg-white p-6 ring-1 ring-kmc-secondary/10 sm:p-7`}>
                <p className={`font-display text-lg font-semibold text-kmc-secondary`}>
                  {t ? `สิ่งที่หลายครอบครัวไม่รู้` : `What many families don’t know`}
                </p>
                <p className={`mt-2 leading-relaxed text-kmc-secondary/75`}>
                  {t
                    ? `อาการความจำถดถอยในผู้สูงอายุมีสาเหตุหลายอย่าง และบางสาเหตุรักษาให้ดีขึ้นได้ เช่น ภาวะซึมเศร้า ภาวะไทรอยด์ทำงานต่ำ การขาดวิตามินบี 12 ผลข้างเคียงจากยาบางชนิด หรือการนอนหลับที่มีปัญหา การไปพบแพทย์จึงไม่ใช่การไปฟังคำตัดสิน แต่คือการไปหาสาเหตุ`
                    : `Memory decline in older adults has many causes, and some can be treated: depression, an underactive thyroid, low vitamin B12, side effects of some medicines, or poor sleep. Seeing a doctor isn’t hearing a verdict; it’s finding the cause.`}
                </p>
              </div>
              <div className={`rounded-3xl bg-white p-6 ring-1 ring-kmc-secondary/10 sm:p-7`}>
                <p className={`font-display text-lg font-semibold text-kmc-secondary`}>
                  {t ? `ขั้นตอนต่อไป` : `Next steps`}
                </p>
                <ol className={`mt-3 space-y-3`}>
                  {[
                    t
                      ? `ดาวน์โหลดใบสรุปผล แล้วนำติดตัวไปด้วยในวันนัด แพทย์จะได้เห็นว่าคุณสังเกตอะไรมาบ้าง`
                      : `Download the summary and bring it to the appointment, so the doctor sees what you noticed.`,
                    t
                      ? `นัดพบแพทย์ผู้สูงอายุ อายุรแพทย์ระบบประสาท หรือคลินิกความจำ`
                      : `Book with a geriatrician, a neurologist or a memory clinic.`,
                    t
                      ? `จดเพิ่มว่าอาการเริ่มเมื่อไร และเปลี่ยนแปลงเร็วแค่ไหน ข้อมูลนี้ช่วยแพทย์มาก`
                      : `Note when it started and how fast it has changed. This helps the doctor a lot.`,
                  ].map((e, t) => (
                    <li key={t} className={`flex gap-3 leading-relaxed text-kmc-secondary/80`}>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-kmc-secondary text-sm font-semibold text-white`}
                      >
                        {t + 1}
                      </span>
                      {e}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}
          <article
            aria-labelledby={`summary-title`}
            className={`mt-6 rounded-3xl bg-white p-6 ring-1 ring-kmc-secondary/10 sm:p-9 print:mt-0 print:p-0 print:ring-0`}
          >
            <div
              className={`flex flex-wrap items-start justify-between gap-3 border-b border-kmc-secondary/10 pb-5`}
            >
              <div>
                <p className={`text-sm font-medium text-kmc-primary-deep`}>{`KMC Hospital`}</p>
                <h2
                  id={`summary-title`}
                  className={`mt-1 font-display text-xl font-semibold text-kmc-secondary`}
                >
                  {t
                    ? `ใบสรุปการสังเกตความจำและการรู้คิด`
                    : `Memory and thinking observation summary`}
                </h2>
              </div>
              <p className={`text-sm text-kmc-secondary/65`}>{u(D, t)}</p>
            </div>
            <p className={`mt-4 text-kmc-secondary/75`}>
              {t
                ? `ตอบโดยคนใกล้ชิด · เปลี่ยนไปจากเดิม ${G.yesCount} เรื่อง · ไม่ทราบ ${G.unknownCount} เรื่อง`
                : `Answered by family · ${G.yesCount} changed · ${G.unknownCount} don’t know`}
            </p>
            <ul className={`mt-5 divide-y divide-kmc-secondary/10`}>
              {_.map((e) => {
                let t = T[e.id];
                return (
                  <li key={e.id} className={`flex items-start justify-between gap-4 py-3`}>
                    <span className={`leading-relaxed text-kmc-secondary`}>{o(e)}</span>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-sm font-medium ${t === `yes` ? `bg-amber-100 text-amber-900` : t === `unknown` ? `bg-kmc-secondary/10 text-kmc-secondary` : `bg-emerald-50 text-emerald-900`}`}
                    >
                      {o(v.find((e) => e.value === t))}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className={`mt-5 text-xs leading-relaxed text-kmc-secondary/60`}>
              {t
                ? `แบบสังเกตนี้เป็นการคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัย และไม่ใช้แทนการตรวจโดยแพทย์ · KMC Hospital · 02-109-4210`
                : `This is a first screen, not a diagnosis, and does not replace a doctor’s assessment · KMC Hospital · 02-109-4210`}
            </p>
          </article>
          <section
            className={`mt-6 flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9 print:hidden`}
          >
            <div>
              <p className={`font-display text-xl font-semibold text-kmc-secondary`}>
                {t ? `ดูแลผู้สูงวัยที่มีปัญหาความจำ` : `Care for older adults with memory problems`}
              </p>
              <p className={`mt-1 text-kmc-secondary/75`}>
                {t
                  ? `ทีมแพทย์และพยาบาลของ KMC พร้อมให้คำปรึกษาครอบครัว`
                  : `KMC’s doctors and nurses are here to advise families.`}
              </p>
            </div>
            <_Element5 to={`/services/elderly-care`} className={`${m.primary} shrink-0`}>
              {t ? `บริการดูแลผู้สูงอายุ` : `Elderly care services`}
              <_Element name={`arrowRight`} className={`h-4 w-4`} />
            </_Element5>
          </section>
        </div>
      )}
      {x !== `questions` && (
        <section
          ref={B}
          aria-labelledby={`signs-title`}
          className={`mx-auto max-w-3xl scroll-mt-24 px-4 pb-20 sm:px-6 print:hidden`}
        >
          <details
            open={I}
            onToggle={(e) => L(e.currentTarget.open)}
            className={`group rounded-3xl bg-white ring-1 ring-kmc-secondary/10`}
          >
            <summary
              className={`flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-8 [&::-webkit-details-marker]:hidden`}
            >
              <span className={`flex items-center gap-3`}>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-fog-1 text-kmc-primary-deep`}
                >
                  <_Element name={`book`} />
                </span>
                <h2
                  id={`signs-title`}
                  className={`font-display text-lg font-semibold text-kmc-secondary sm:text-xl`}
                >
                  {t ? `10 สัญญาณเตือนภาวะสมองเสื่อม` : `10 warning signs of dementia`}
                </h2>
              </span>
              <_Element
                name={`chevronDown`}
                className={`h-5 w-5 text-kmc-secondary/60 transition-transform duration-200 group-open:rotate-180`}
              />
            </summary>
            <ol className={`grid gap-2.5 px-6 pb-7 sm:grid-cols-2 sm:px-8`}>
              {y.map((e, t) => (
                <li
                  key={e.th}
                  className={`flex items-start gap-3 rounded-2xl bg-kmc-bg px-4 py-3 leading-relaxed text-kmc-secondary`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-kmc-primary-deep ring-1 ring-kmc-secondary/10`}
                  >
                    {t + 1}
                  </span>
                  {o(e)}
                </li>
              ))}
            </ol>
          </details>
          {x === `intro` && (
            <div className={`mt-8`}>
              <_Element4
                isTh={t}
                text={
                  t
                    ? `คำตอบอยู่ในเบราว์เซอร์นี้เท่านั้น ไม่มีการส่งหรือเก็บข้อมูล`
                    : `Answers stay in this browser. Nothing is sent or stored.`
                }
              />
            </div>
          )}
        </section>
      )}
      <_Element6
        open={M}
        title={t ? `ล้างคำตอบทั้งหมด?` : `Clear all answers?`}
        body={
          t
            ? `คำตอบที่เลือกไว้จะหายทั้งหมด และย้อนกลับไม่ได้`
            : `All your answers will be removed. This cannot be undone.`
        }
        confirmLabel={t ? `ล้างคำตอบ` : `Clear`}
        cancelLabel={t ? `ยกเลิก` : `Cancel`}
        onConfirm={Q}
        onCancel={() => N(!1)}
      />
    </div>
  );
}
export { j as default };
