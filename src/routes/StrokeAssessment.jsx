import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5 } from "../vendor/react-SEPqUFC0.js";
import { a as i, t as a } from "./usePageMeta.jsx";
import { a as o } from "../vendor/motion-CB540VaL.js";
import {
  a as _Element4,
  c,
  i as _Element3,
  l as u,
  n as _Element6,
  o as _Element,
  r as _Element2,
  s as m,
  t as h,
} from "./AssessmentParts.jsx";
var g = e(t(), 1),
  _ = (e, t, n, r = {}) => ({
    score: e,
    th: t,
    en: n,
    ...r,
  }),
  v = [
    _(0, `ยกค้างได้ครบ 10 วินาที ไม่ตก`, `Holds for the full 10 seconds, no drift`),
    _(1, `แขนตกลงมาแต่ไม่ถึงเตียง`, `Drifts down, but does not reach the bed`),
    _(2, `แขนตกลงถึงเตียง`, `Drifts down to the bed`),
    _(2, `ยกต้านแรงโน้มถ่วงได้บ้าง`, `Some effort against gravity`),
    _(3, `ยกต้านแรงโน้มถ่วงไม่ได้เลย`, `No effort against gravity`),
    _(4, `ไม่มีการเคลื่อนไหว`, `No movement`),
    _(0, `ตัดแขนหรือข้อติดแข็ง ประเมินไม่ได้`, `Amputation or joint fusion, unable to assess`, {
      un: !0,
    }),
  ],
  y = [
    _(0, `ยกค้างได้ครบ 5 วินาที ไม่ตก`, `Holds for the full 5 seconds, no drift`),
    _(1, `ขาตกลงมาแต่ไม่ถึงเตียง`, `Drifts down, but does not reach the bed`),
    _(2, `ขาตกลงถึงเตียง`, `Drifts down to the bed`),
    _(2, `ยกต้านแรงโน้มถ่วงได้บ้าง`, `Some effort against gravity`),
    _(3, `ยกต้านแรงโน้มถ่วงไม่ได้เลย`, `No effort against gravity`),
    _(4, `ไม่มีการเคลื่อนไหว`, `No movement`),
    _(0, `ตัดขาหรือข้อติดแข็ง ประเมินไม่ได้`, `Amputation or joint fusion, unable to assess`, {
      un: !0,
    }),
  ],
  b = [
    {
      th: `กลุ่มที่ 1 · ระดับความรู้สึกตัว`,
      en: `Group 1 · Level of consciousness`,
      items: [
        {
          id: `1A`,
          th: `ระดับความรู้สึกตัว`,
          en: `Level of consciousness`,
          options: [
            _(0, `รู้สึกตัวดี ตอบสนองทันที`, `Alert, responds immediately`),
            _(1, `ซึม ปลุกตื่นได้ด้วยการกระตุ้นเล็กน้อย`, `Drowsy, rouses with minor stimulation`),
            _(2, `ต้องกระตุ้นซ้ำ ๆ จึงตอบสนอง`, `Responds only to repeated stimulation`),
            _(
              2,
              `ตอบสนองต่อความเจ็บปวดด้วยการเคลื่อนไหวเท่านั้น`,
              `Responds to pain with movement only`,
            ),
            _(3, `ไม่ตอบสนอง หรือมีท่าเกร็งผิดปกติ`, `Unresponsive, or abnormal posturing`),
          ],
        },
        {
          id: `1B`,
          th: `ถามเดือนปัจจุบันและอายุ`,
          en: `Asks the current month and their age`,
          options: [
            _(0, `ตอบถูกทั้งสองข้อ`, `Answers both correctly`),
            _(1, `ตอบถูกหนึ่งข้อ`, `Answers one correctly`),
            _(2, `ตอบผิดทั้งสองข้อ`, `Answers neither correctly`),
            _(
              1,
              `พูดไม่ชัด ใส่ท่อช่วยหายใจ หรือมีอุปสรรคทางภาษา`,
              `Dysarthric, intubated, or a language barrier`,
            ),
            _(2, `มีภาวะเสียการสื่อความ (aphasia)`, `Aphasic`),
          ],
        },
        {
          id: `1C`,
          th: `สั่งให้ลืมตา–หลับตา และกำมือ–แบมือ`,
          en: `Commands: open and close the eyes, grip and release the hand`,
          options: [
            _(0, `ทำได้ทั้งสองคำสั่ง`, `Performs both tasks`),
            _(1, `ทำได้หนึ่งคำสั่ง`, `Performs one task`),
            _(2, `ทำไม่ได้ทั้งสองคำสั่ง`, `Performs neither task`),
          ],
        },
      ],
    },
    {
      th: `กลุ่มที่ 2 · การมองเห็นและใบหน้า`,
      en: `Group 2 · Vision and face`,
      items: [
        {
          id: `2`,
          th: `การกลอกตาแนวราบ`,
          en: `Horizontal eye movement`,
          options: [
            _(0, `ปกติ`, `Normal`),
            _(
              1,
              `อัมพาตการกลอกตาบางส่วน แก้ไขได้ด้วยความตั้งใจ`,
              `Partial gaze palsy, corrected voluntarily`,
            ),
            _(
              1,
              `อัมพาตการกลอกตาบางส่วน แก้ไขได้ด้วย oculocephalic reflex`,
              `Partial gaze palsy, corrected by oculocephalic reflex`,
            ),
            _(2, `ตาค้างไปด้านใดด้านหนึ่ง แก้ไขไม่ได้`, `Forced deviation, cannot be overcome`),
          ],
        },
        {
          id: `3`,
          th: `ลานสายตา`,
          en: `Visual fields`,
          options: [
            _(0, `ปกติ ไม่สูญเสียลานสายตา`, `Normal, no visual loss`),
            _(1, `สูญเสียลานสายตาครึ่งซีกบางส่วน`, `Partial hemianopia`),
            _(2, `สูญเสียลานสายตาครึ่งซีกสมบูรณ์`, `Complete hemianopia`),
            _(3, `ตาบอดทั้งสองข้าง`, `Blind in both eyes`),
            _(3, `สูญเสียลานสายตาครึ่งซีกทั้งสองข้าง`, `Bilateral hemianopia`),
          ],
        },
        {
          id: `4`,
          th: `กล้ามเนื้อใบหน้า`,
          en: `Facial muscles`,
          options: [
            _(0, `ปกติ ใบหน้าสมมาตร`, `Normal, symmetrical face`),
            _(
              1,
              `อ่อนแรงเล็กน้อย ร่องแก้มตื้น ยิ้มไม่เท่ากัน`,
              `Minor weakness, flattened nasolabial fold, uneven smile`,
            ),
            _(2, `อัมพาตบางส่วนของใบหน้าส่วนล่าง`, `Partial paralysis of the lower face`),
            _(3, `อัมพาตสมบูรณ์ครึ่งซีก`, `Complete paralysis of one side`),
            _(3, `อัมพาตสมบูรณ์ทั้งสองข้าง`, `Complete paralysis of both sides`),
          ],
        },
      ],
    },
    {
      th: `กลุ่มที่ 3 · กำลังกล้ามเนื้อแขน (ยกค้าง 10 วินาที)`,
      en: `Group 3 · Arm strength (hold for 10 seconds)`,
      items: [
        {
          id: `5A`,
          th: `แขนซ้าย`,
          en: `Left arm`,
          options: v,
        },
        {
          id: `5B`,
          th: `แขนขวา`,
          en: `Right arm`,
          options: v,
        },
      ],
    },
    {
      th: `กลุ่มที่ 4 · กำลังกล้ามเนื้อขา (ยกค้าง 5 วินาที)`,
      en: `Group 4 · Leg strength (hold for 5 seconds)`,
      items: [
        {
          id: `6A`,
          th: `ขาซ้าย`,
          en: `Left leg`,
          options: y,
        },
        {
          id: `6B`,
          th: `ขาขวา`,
          en: `Right leg`,
          options: y,
        },
      ],
    },
    {
      th: `กลุ่มที่ 5 · การประสานงาน การรับรู้ และการสื่อสาร`,
      en: `Group 5 · Coordination, sensation and communication`,
      items: [
        {
          id: `7`,
          th: `การทำงานประสานของแขนขา (ataxia)`,
          en: `Limb coordination (ataxia)`,
          options: [
            _(0, `ไม่พบความผิดปกติ`, `Absent`),
            _(1, `พบใน 1 แขนหรือขา`, `Present in one limb`),
            _(2, `พบตั้งแต่ 2 ส่วนขึ้นไป`, `Present in two or more limbs`),
            _(0, `ไม่เข้าใจคำสั่ง`, `Does not understand the command`),
            _(0, `เป็นอัมพาต`, `Paralysed`),
            _(0, `ตัดแขนขาหรือข้อติดแข็ง`, `Amputation or joint fusion`),
          ],
        },
        {
          id: `8`,
          th: `การรับความรู้สึก`,
          en: `Sensation`,
          options: [
            _(0, `ปกติ ไม่สูญเสียการรับความรู้สึก`, `Normal, no sensory loss`),
            _(
              1,
              `สูญเสียเล็กน้อยถึงปานกลาง รู้สึกทื่อลงเมื่อทดสอบด้วยของแหลม`,
              `Mild to moderate loss, pinprick feels duller`,
            ),
            _(
              1,
              `สูญเสียเล็กน้อยถึงปานกลาง ยังรับรู้การสัมผัสได้`,
              `Mild to moderate loss, still aware of being touched`,
            ),
            _(2, `สูญเสียสมบูรณ์ ไม่รับรู้การสัมผัส`, `Complete loss, not aware of being touched`),
            _(2, `ไม่ตอบสนองและอัมพาตทั้งตัว`, `Unresponsive and quadriplegic`),
            _(2, `ไม่รู้สึกตัว`, `Unconscious`),
          ],
        },
        {
          id: `9`,
          th: `ภาษา (aphasia)`,
          en: `Language (aphasia)`,
          options: [
            _(0, `ปกติ ไม่มีความบกพร่องทางภาษา`, `Normal, no language impairment`),
            _(
              1,
              `บกพร่องเล็กน้อยถึงปานกลาง สื่อสารได้แต่เห็นความผิดปกติชัด`,
              `Mild to moderate, communicates but clearly impaired`,
            ),
            _(
              2,
              `บกพร่องรุนแรง พูดเป็นคำ ๆ ไม่ต่อเนื่อง ต้องเดาความหมาย`,
              `Severe, fragmented speech, listener must guess the meaning`,
            ),
            _(3, `พูดไม่ได้เลย หรือมีภาวะเสียการสื่อความทั้งหมด`, `Mute, or global aphasia`),
            _(3, `ไม่รู้สึกตัว`, `Unconscious`),
          ],
        },
        {
          id: `10`,
          th: `การพูดไม่ชัด (dysarthria)`,
          en: `Slurred speech (dysarthria)`,
          options: [
            _(0, `ปกติ`, `Normal`),
            _(
              1,
              `เล็กน้อยถึงปานกลาง พูดไม่ชัดแต่ยังฟังเข้าใจ`,
              `Mild to moderate, slurred but understandable`,
            ),
            _(2, `รุนแรง พูดไม่ชัดจนฟังไม่รู้เรื่อง`, `Severe, unintelligible`),
            _(2, `พูดไม่ได้เลย`, `Unable to speak`),
            _(0, `ใส่ท่อช่วยหายใจหรือประเมินไม่ได้`, `Intubated or unable to assess`, {
              un: !0,
            }),
          ],
        },
        {
          id: `11`,
          th: `การละเลยข้างใดข้างหนึ่ง (extinction / inattention)`,
          en: `Neglect of one side (extinction / inattention)`,
          options: [
            _(0, `ปกติ`, `Normal`),
            _(
              1,
              `ละเลยด้านการมองเห็น การสัมผัส การได้ยิน พื้นที่ หรือร่างกาย อย่างใดอย่างหนึ่ง`,
              `Inattention in one modality: visual, tactile, auditory, spatial or personal`,
            ),
            _(
              1,
              `ไม่รับรู้เมื่อถูกกระตุ้นสองข้างพร้อมกัน`,
              `Extinction to bilateral simultaneous stimulation`,
            ),
            _(2, `ละเลยครึ่งซีกอย่างรุนแรง`, `Profound hemi-inattention`),
            _(2, `ละเลยมากกว่าหนึ่งระบบประสาทรับรู้`, `Inattention in more than one modality`),
          ],
        },
      ],
    },
  ],
  x = b.flatMap((e) => e.items),
  S = {
    th: `เกณฑ์การแปลผลอ้างอิงจาก NIH Stroke Scale (National Institute of Neurological Disorders and Stroke)`,
    en: `Interpretation based on the NIH Stroke Scale (National Institute of Neurological Disorders and Stroke)`,
  },
  C = [
    {
      min: 0,
      max: 0,
      th: `ไม่พบอาการของโรคหลอดเลือดสมอง`,
      en: `No stroke symptoms`,
    },
    {
      min: 1,
      max: 4,
      th: `อาการเล็กน้อย`,
      en: `Minor stroke`,
    },
    {
      min: 5,
      max: 15,
      th: `อาการปานกลาง`,
      en: `Moderate stroke`,
    },
    {
      min: 16,
      max: 20,
      th: `ปานกลางถึงรุนแรง`,
      en: `Moderate to severe stroke`,
    },
    {
      min: 21,
      max: 42,
      th: `รุนแรง`,
      en: `Severe stroke`,
    },
  ];
function w(e) {
  return C.find((t) => e >= t.min && e <= t.max);
}
var T = o(),
  E = x.length,
  D = `tel:+6621094210`,
  O = `02-109-4210`,
  k = [
    {
      card: `bg-emerald-50 text-emerald-950 ring-emerald-200`,
      bar: `bg-emerald-600`,
    },
    {
      card: `bg-sky-50 text-sky-950 ring-sky-200`,
      bar: `bg-sky-600`,
    },
    {
      card: `bg-amber-50 text-amber-950 ring-amber-200`,
      bar: `bg-amber-600`,
    },
    {
      card: `bg-orange-50 text-orange-950 ring-orange-200`,
      bar: `bg-orange-600`,
    },
    {
      card: `bg-red-50 text-red-950 ring-red-200`,
      bar: `bg-red-700`,
    },
  ];
function A() {
  let { i18n: e } = n(),
    t = e.language === `th`,
    o = (e) => (t ? e.th : e.en);
  a({
    title: t
      ? `แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)`
      : `Stroke Severity Assessment (NIHSS)`,
    description: t
      ? `เครื่องมือช่วยประเมินความรุนแรงของโรคหลอดเลือดสมองตาม NIH Stroke Scale 15 ข้อ สรุปผลเมื่อตอบครบ พิมพ์ใบสรุปได้ ประมวลผลในเบราว์เซอร์ ไม่เก็บข้อมูล`
      : `A 15-item NIH Stroke Scale assessment that summarises the result once complete and prints a summary. Runs in your browser; nothing is stored.`,
    keywords: t
      ? `NIHSS, ประเมินโรคหลอดเลือดสมอง, stroke scale`
      : `NIHSS, stroke scale, stroke assessment`,
    noindex: !0,
  });
  let [_, v] = (0, g.useState)({}),
    [y, A] = (0, g.useState)(`form`),
    [j, M] = (0, g.useState)(null),
    [N, P] = (0, g.useState)(``),
    [F, I] = (0, g.useState)(``),
    [L, R] = (0, g.useState)(!1),
    z = (0, g.useRef)(!1),
    B = x.filter((e) => _[e.id] == null),
    V = E - B.length,
    H = B.length === 0,
    U = x.reduce((e, t) => e + (_[t.id] == null ? 0 : t.options[_[t.id]].score), 0),
    W = H ? w(U) : null,
    G = W ? C.indexOf(W) : -1,
    K = t ? `ตอบแล้ว ${V} จาก ${E} ข้อ` : `${V} of ${E} answered`,
    q = (e, t) =>
      v((n) => ({
        ...n,
        [e]: t,
      })),
    J = () => {
      if (!H) {
        m(B[0].id);
        return;
      }
      (M(new Date()),
        A(`result`),
        (z.current ||=
          (i(`assessment_complete`, {
            assessment: `stroke`,
          }),
          !0)),
        c());
    };
  return (
    <div className={`bg-kmc-bg`}>
      <_Element
        photo={`physio/ot-puzzle`}
        compact={y === `result`}
        eyebrow={
          <T.Fragment>
            <_Element2 name={`list`} className={`h-4 w-4`} />
            {t ? `สำหรับแพทย์และบุคลากรการแพทย์` : `For physicians and clinical staff`}
          </T.Fragment>
        }
        title={
          t ? `แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)` : `Stroke Severity Assessment (NIHSS)`
        }
        intro={
          <p>
            {t
              ? `ประเมินตามหัวข้อของ NIH Stroke Scale เมื่อตอบครบทุกข้อ ระบบจะสรุปผลเป็นระดับความรุนแรงพร้อมใบสรุปสำหรับพิมพ์`
              : `Work through the NIH Stroke Scale items. Once every item is answered, the result is summarised as a severity level with a printable summary.`}
          </p>
        }
        meta={[
          {
            icon: `list`,
            label: t ? `15 หัวข้อ` : `15 items`,
          },
          {
            icon: `clock`,
            label: t ? `ประมาณ 5–8 นาที` : `About 5–8 minutes`,
          },
          {
            icon: `shield`,
            label: t ? `ไม่เก็บข้อมูลผู้ป่วย` : `No patient data stored`,
          },
        ]}
        aside={
          y === `form` && (
            <a
              href={`tel:1669`}
              aria-label={
                t
                  ? `โทรฉุกเฉิน 1669 สถาบันการแพทย์ฉุกเฉินแห่งชาติ`
                  : `Emergency call 1669, Thai emergency medical services`
              }
              className={`group flex cursor-pointer items-center gap-4 rounded-2xl bg-white p-3.5 shadow-sm sm:rounded-3xl sm:p-5 ring-1 ring-red-200 transition duration-200 hover:ring-red-400`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 sm:h-14 sm:w-14 sm:rounded-2xl text-white`}
              >
                <_Element2 name={`phone`} className={`h-6 w-6`} />
              </span>
              <span className={`leading-relaxed`}>
                <span className={`block text-sm font-medium text-red-800`}>
                  {t ? `ผู้ป่วยมีอาการเฉียบพลันอยู่ตอนนี้?` : `Symptoms happening right now?`}
                </span>
                <span
                  className={`block font-display text-xl font-semibold text-kmc-secondary sm:text-2xl`}
                >
                  {t ? `โทร 1669 ทันที` : `Call 1669 now`}
                </span>
              </span>
            </a>
          )
        }
      />
      {y === `form` ? (
        <div
          className={`mx-auto grid max-w-6xl gap-8 px-4 pb-32 pt-6 sm:px-6 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:pb-20`}
        >
          <aside className={`hidden lg:order-2 lg:block`}>
            <nav
              aria-label={t ? `รายการหัวข้อ` : `Items`}
              className={`sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-3xl bg-white px-5 py-4 ring-1 ring-kmc-secondary/10`}
            >
              <p
                className={`font-display text-lg font-semibold text-kmc-secondary`}
                aria-live={`polite`}
              >
                {K}
              </p>
              <div
                className={`mt-2.5 h-1.5 overflow-hidden rounded-full bg-kmc-secondary/10`}
                aria-hidden={`true`}
              >
                <div
                  className={`h-full rounded-full bg-kmc-primary-deep transition-[width] duration-300`}
                  style={{
                    width: `${(V / E) * 100}%`,
                  }}
                />
              </div>
              <ol className={`mt-4 space-y-2.5`}>
                {b.map((e) => (
                  <li key={e.th}>
                    <p className={`text-[0.7rem] font-medium leading-snug text-kmc-secondary/65`}>
                      {o(e)
                        .replace(/^.*·\s*/, ``)
                        .replace(/\s*\(.*\)$/, ``)}
                    </p>
                    <div className={`mt-1 flex flex-wrap gap-1`}>
                      {e.items.map((e) => {
                        let n = _[e.id] != null;
                        return (
                          <button
                            key={e.id}
                            type={`button`}
                            onClick={() => m(e.id)}
                            title={o(e)}
                            aria-label={`${t ? `ข้อ` : `Item`} ${e.id} ${o(e)}${n ? (t ? ` ตอบแล้ว` : `, answered`) : ``}`}
                            className={`inline-flex h-8 min-w-10 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-semibold transition-colors duration-200 ${n ? `bg-kmc-secondary text-white hover:bg-kmc-primary-deep` : `bg-kmc-bg text-kmc-secondary/70 ring-1 ring-kmc-secondary/15 hover:ring-kmc-primary-deep/60`}`}
                          >
                            {e.id}
                          </button>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ol>
              <button type={`button`} onClick={J} className={`${h.primary} mt-4 w-full`}>
                {H
                  ? t
                    ? `สรุปผลการประเมิน`
                    : `Summarise result`
                  : t
                    ? `เหลืออีก ${B.length} ข้อ`
                    : `${B.length} left`}
                <_Element2 name={`arrowRight`} className={`h-4 w-4`} />
              </button>
              <button
                type={`button`}
                onClick={() => R(!0)}
                disabled={V === 0}
                className={`${h.ghost} mt-1 w-full text-sm`}
              >
                <_Element2 name={`reset`} className={`h-4 w-4`} />
                {t ? `ล้างคำตอบ` : `Clear answers`}
              </button>
            </nav>
          </aside>
          <div className={`min-w-0 space-y-10 sm:space-y-14 lg:order-1`}>
            {b.map((e, t) => (
              <section key={e.th} aria-labelledby={`group-${t}`}>
                <div
                  className={`mb-5 flex items-baseline gap-3 border-b border-kmc-secondary/10 pb-3`}
                >
                  <span className={`font-display text-sm font-semibold text-kmc-primary-deep`}>
                    {String(t + 1).padStart(2, `0`)}
                  </span>
                  <h2
                    id={`group-${t}`}
                    className={`font-display text-xl font-semibold text-kmc-secondary`}
                  >
                    {o(e).replace(/^.*·\s*/, ``)}
                  </h2>
                </div>
                <div className={`space-y-5`}>
                  {e.items.map((e) => {
                    let t = _[e.id];
                    return (
                      <fieldset
                        key={e.id}
                        id={`q-${e.id}`}
                        className={`scroll-mt-28 rounded-3xl bg-white p-5 ring-1 ring-kmc-secondary/10 sm:p-7`}
                      >
                        <legend className={`float-left mb-5 flex w-full items-center gap-3`}>
                          <span
                            className={`inline-flex h-9 min-w-11 items-center justify-center rounded-xl px-2 font-display font-semibold transition-colors duration-200 ${t == null ? `bg-fog-1 text-kmc-primary-deep` : `bg-kmc-secondary text-white`}`}
                          >
                            {e.id}
                          </span>
                          <span
                            className={`font-display text-lg font-medium leading-snug text-kmc-secondary sm:text-xl`}
                          >
                            {o(e)}
                          </span>
                        </legend>
                        <div className={`clear-both grid gap-2.5 md:grid-cols-2`}>
                          {e.options.map((n, r) => (
                            <_Element3
                              key={r}
                              name={`stroke-${e.id}`}
                              value={r}
                              checked={t === r}
                              onChange={() => q(e.id, r)}
                              label={o(n)}
                            />
                          ))}
                        </div>
                      </fieldset>
                    );
                  })}
                </div>
              </section>
            ))}
            <div
              className={`rounded-3xl bg-white p-6 text-center ring-1 ring-kmc-secondary/10 sm:p-10`}
            >
              <p className={`font-display text-xl font-semibold text-kmc-secondary`}>
                {H
                  ? t
                    ? `ตอบครบทุกข้อแล้ว`
                    : `All items answered`
                  : t
                    ? `ยังไม่ครบ เหลืออีก ${B.length} ข้อ`
                    : `Not finished: ${B.length} left`}
              </p>
              {!H && (
                <p className={`mt-2 text-kmc-secondary/70`}>
                  {t ? `ข้อที่ยังว่าง: ` : `Still empty: `}
                  {B.map((e, t) => (
                    <span key={e.id}>
                      {t > 0 && `, `}
                      <button
                        type={`button`}
                        onClick={() => m(e.id)}
                        className={`inline-flex min-h-[32px] cursor-pointer items-center font-semibold text-kmc-primary-deep underline underline-offset-4`}
                      >
                        {e.id}
                      </button>
                    </span>
                  ))}
                </p>
              )}
              <button
                type={`button`}
                onClick={J}
                disabled={!H}
                className={`${h.primary} mt-6 px-8`}
              >
                {t ? `สรุปผลการประเมิน` : `Summarise result`}
                <_Element2 name={`arrowRight`} className={`h-4 w-4`} />
              </button>
            </div>
            <_Element4
              isTh={t}
              text={
                t
                  ? `คำตอบประมวลผลในเบราว์เซอร์นี้เท่านั้น ไม่มีการส่งหรือเก็บข้อมูลผู้ป่วย`
                  : `Answers stay in this browser; no patient data is sent or stored.`
              }
            />
          </div>
          <div
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-kmc-secondary/10 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden print:hidden`}
          >
            <div className={`mx-auto flex max-w-xl items-center gap-3`}>
              <div className={`min-w-0 flex-1`} aria-live={`polite`}>
                <p className={`text-sm font-medium text-kmc-secondary`}>{K}</p>
                <div
                  className={`mt-1.5 h-1.5 overflow-hidden rounded-full bg-kmc-secondary/10`}
                  aria-hidden={`true`}
                >
                  <div
                    className={`h-full rounded-full bg-kmc-primary-deep transition-[width] duration-300`}
                    style={{
                      width: `${(V / E) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <button
                type={`button`}
                onClick={J}
                className={`${h.primary} shrink-0 whitespace-nowrap px-5`}
              >
                {H ? (t ? `สรุปผล` : `Result`) : t ? `ข้อที่ว่าง` : `Next empty`}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6 print:p-0`}>
          <div
            className={`grid grid-cols-2 items-center gap-2 sm:flex sm:justify-between print:hidden`}
          >
            <button
              type={`button`}
              onClick={() => {
                (A(`form`), c());
              }}
              className={`${h.ghost} col-span-2 justify-self-start`}
            >
              <_Element2 name={`arrowLeft`} className={`h-4 w-4`} />
              {t ? `แก้ไขคำตอบ` : `Edit answers`}
            </button>
            <div className={`col-span-2 grid grid-cols-2 gap-2 sm:flex`}>
              <button
                type={`button`}
                onClick={() => R(!0)}
                className={`${h.secondary.replace(`px-6`, `px-3 sm:px-6`)} whitespace-nowrap text-sm sm:text-base`}
              >
                <_Element2 name={`reset`} className={`h-4 w-4`} />
                {t ? `ผู้ป่วยรายใหม่` : `New patient`}
              </button>
              <button
                type={`button`}
                onClick={() => window.print()}
                className={`${h.primary.replace(`px-6`, `px-3 sm:px-6`)} whitespace-nowrap text-sm sm:text-base`}
              >
                <_Element2 name={`printer`} className={`h-4 w-4`} />
                {t ? `พิมพ์ / บันทึก PDF` : `Print / Save PDF`}
              </button>
            </div>
          </div>
          <article
            aria-labelledby={`result-title`}
            className={`mt-6 overflow-hidden rounded-3xl bg-white ring-1 ring-kmc-secondary/10 print:mt-0 print:ring-0`}
          >
            <div
              className={`flex flex-wrap items-start justify-between gap-4 border-b border-kmc-secondary/10 px-5 py-5 sm:px-10 sm:py-6`}
            >
              <div>
                <p className={`text-sm font-medium text-kmc-primary-deep`}>{`KMC Hospital`}</p>
                <h2
                  id={`result-title`}
                  className={`mt-1 font-display text-2xl font-semibold text-kmc-secondary`}
                >
                  {t ? `สรุปผลการประเมิน NIHSS` : `NIHSS assessment summary`}
                </h2>
              </div>
              <p className={`text-sm text-kmc-secondary/65`}>
                {t ? `ประเมินเมื่อ` : `Assessed`}
                {` `}
                {u(j, t)}
              </p>
            </div>
            <div className={`px-5 py-6 sm:px-10 sm:py-8`}>
              <div className={`rounded-3xl p-5 ring-1 sm:p-8 ${k[G].card}`}>
                <p className={`text-sm font-medium opacity-80`}>{t ? `ผลการประเมิน` : `Result`}</p>
                <p className={`mt-1 font-display text-3xl font-semibold leading-snug sm:text-4xl`}>
                  {o(W)}
                </p>
                <ol
                  className={`mt-6 grid gap-2.5 sm:mt-7 sm:grid-cols-5 sm:gap-2`}
                  aria-label={t ? `ระดับความรุนแรง` : `Severity levels`}
                >
                  {C.map((e, n) => (
                    <li
                      key={e.min}
                      className={`flex items-center gap-3 text-sm leading-snug sm:block`}
                    >
                      <span
                        aria-hidden={`true`}
                        className={`block h-2 w-10 shrink-0 rounded-full sm:w-auto ${n === G ? k[n].bar : `bg-kmc-secondary/10`}`}
                      />
                      <span className={`block sm:mt-2 ${n === G ? `font-semibold` : `opacity-60`}`}>
                        {o(e)}
                        {n === G && (
                          <span className={`sr-only`}>
                            {` (`}
                            {t ? `ผลของผู้ป่วยรายนี้` : `this result`}
                            {`)`}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className={`mt-8 grid gap-4 sm:grid-cols-2`}>
                <label className={`block`}>
                  <span className={`mb-1.5 block text-sm font-medium text-kmc-secondary/80`}>
                    {t ? `รหัสผู้ป่วย (ไม่บังคับ)` : `Patient ID (optional)`}
                  </span>
                  <input
                    value={N}
                    onChange={(e) => P(e.target.value)}
                    autoComplete={`off`}
                    className={`min-h-[48px] w-full rounded-xl border border-kmc-secondary/20 bg-white px-4 text-kmc-secondary`}
                  />
                </label>
                <label className={`block`}>
                  <span className={`mb-1.5 block text-sm font-medium text-kmc-secondary/80`}>
                    {t ? `ชื่อผู้ประเมิน (ไม่บังคับ)` : `Assessed by (optional)`}
                  </span>
                  <input
                    value={F}
                    onChange={(e) => I(e.target.value)}
                    autoComplete={`off`}
                    className={`min-h-[48px] w-full rounded-xl border border-kmc-secondary/20 bg-white px-4 text-kmc-secondary`}
                  />
                </label>
              </div>
              <p className={`mt-2 text-xs text-kmc-secondary/60 print:hidden`}>
                {t
                  ? `ใช้สำหรับพิมพ์เท่านั้น ไม่ถูกบันทึก และหายไปเมื่อปิดหน้านี้`
                  : `For printing only. Not saved; cleared when you close this page.`}
              </p>
              <h3 className={`mt-10 font-display text-lg font-semibold text-kmc-secondary`}>
                {t ? `ผลที่พบรายข้อ` : `Findings per item`}
              </h3>
              <ul
                className={`mt-3 divide-y divide-kmc-secondary/10 rounded-2xl ring-1 ring-kmc-secondary/10`}
              >
                {x.map((e) => (
                  <li
                    key={e.id}
                    className={`grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 px-4 py-3 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-x-4`}
                  >
                    <span className={`font-semibold text-kmc-primary-deep`}>{e.id}</span>
                    <span className={`font-medium text-kmc-secondary sm:font-normal`}>{o(e)}</span>
                    <span
                      className={`col-start-2 text-sm leading-relaxed text-kmc-secondary/75 sm:col-start-auto sm:text-base`}
                    >
                      {o(e.options[_[e.id]])}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-xs leading-relaxed text-kmc-secondary/60`}>{o(S)}</p>
              <p
                className={`mt-4 flex items-start gap-3 rounded-2xl bg-kmc-accent/10 px-5 py-4 text-sm leading-relaxed text-kmc-secondary ring-1 ring-kmc-accent/40`}
              >
                <_Element2
                  name={`alert`}
                  className={`mt-0.5 h-4 w-4 shrink-0 text-kmc-secondary`}
                />
                {t
                  ? `ผลนี้เป็นเครื่องมือช่วยประเมิน ไม่ใช่การวินิจฉัย และไม่ใช้แทนดุลยพินิจของแพทย์`
                  : `This result is an assessment aid, not a diagnosis, and does not replace clinical judgement.`}
              </p>
            </div>
          </article>
          <section
            className={`mt-8 flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10 print:hidden`}
          >
            <div>
              <p className={`font-display text-2xl font-semibold leading-snug text-kmc-secondary`}>
                {t
                  ? `ส่งต่อผู้ป่วยเข้าโปรแกรมฟื้นฟูกับ KMC`
                  : `Refer a patient to KMC’s rehabilitation program`}
              </p>
              <p className={`mt-2 text-kmc-secondary/75`}>
                {t ? `สายตรงทีมรับส่งต่อ` : `Referral team direct line`}
                {` `}
                <a
                  href={D}
                  data-cta-placement={`tool`}
                  data-cta-label={`stroke_referral`}
                  className={`font-semibold text-kmc-secondary underline underline-offset-4`}
                >
                  {O}
                </a>
              </p>
            </div>
            <div className={`flex flex-wrap gap-3`}>
              <a
                href={D}
                data-cta-placement={`tool`}
                data-cta-label={`stroke_referral`}
                className={h.primary}
              >
                <_Element2 name={`phone`} className={`h-4 w-4`} />
                {t ? `โทรส่งต่อผู้ป่วย` : `Call to refer`}
              </a>
              <_Element5 to={`/services/stroke-rehab`} className={h.secondary}>
                {t ? `ดูโปรแกรมฟื้นฟู` : `About the program`}
              </_Element5>
            </div>
          </section>
          <div className={`mt-8`}>
            <_Element4
              isTh={t}
              text={
                t
                  ? `คำตอบประมวลผลในเบราว์เซอร์นี้เท่านั้น ไม่มีการส่งหรือเก็บข้อมูลผู้ป่วย`
                  : `Answers stay in this browser; no patient data is sent or stored.`
              }
            />
          </div>
        </div>
      )}
      <_Element6
        open={L}
        title={t ? `ล้างคำตอบทั้งหมด?` : `Clear all answers?`}
        body={
          t
            ? `คำตอบที่เลือกไว้ ${V} ข้อจะหายทั้งหมด และย้อนกลับไม่ได้`
            : `All ${V} answers will be removed. This cannot be undone.`
        }
        confirmLabel={t ? `ล้างคำตอบ` : `Clear`}
        cancelLabel={t ? `ยกเลิก` : `Cancel`}
        onConfirm={() => {
          (v({}), A(`form`), M(null), P(``), I(``), R(!1), c());
        }}
        onCancel={() => R(!1)}
      />
    </div>
  );
}
export { A as default };
