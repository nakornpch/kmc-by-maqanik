import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { a as r } from "../vendor/motion-CB540VaL.js";
import { n as i, r as a, t as o } from "../vendor/animejs-CC9iyI6Y.js";
import { m as _Element2, p as _Element } from "../site.jsx";
var l = e(t(), 1),
  u = [
    {
      key: `all`,
      th: `ทั้งหมด`,
      en: `All`,
    },
    {
      key: `geriatrics`,
      th: `ผู้สูงอายุและฟื้นฟู`,
      en: `Geriatrics & Rehab`,
    },
    {
      key: `internal`,
      th: `อายุรกรรม`,
      en: `Internal Medicine`,
    },
    {
      key: `physio`,
      th: `กายภาพบำบัด`,
      en: `Physiotherapy`,
    },
    {
      key: `chinese`,
      th: `แพทย์แผนจีน`,
      en: `Chinese Medicine`,
    },
    {
      key: `thai`,
      th: `แพทย์แผนไทย`,
      en: `Thai Medicine`,
    },
  ],
  d = (e, t) => ({
    id: `${e}-${t}`,
    dept: e,
    placeholder: !0,
    photo: null,
    th: {
      name: `[ รอชื่อแพทย์ ]`,
      specialty: `[ รอสาขาความเชี่ยวชาญ ]`,
    },
    en: {
      name: `[ Doctor name pending ]`,
      specialty: `[ Specialty pending ]`,
    },
  }),
  f = [
    d(`geriatrics`, 1),
    d(`geriatrics`, 2),
    d(`internal`, 1),
    d(`internal`, 2),
    d(`physio`, 1),
    d(`physio`, 2),
    d(`chinese`, 1),
    d(`thai`, 1),
  ],
  p = r();
function _Element3({ doctor: e, isTh: t }) {
  let n = t ? e.th : e.en,
    r = u.find((t) => t.key === e.dept);
  return (
    <div
      className={`rounded-2xl bg-white border border-kmc-secondary/10 overflow-hidden hover:shadow-xl hover:shadow-kmc-primary/20 hover:-translate-y-1 transition-all duration-300`}
    >
      <div
        className={`aspect-[4/3] bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 flex items-center justify-center`}
      >
        {e.photo ? (
          <img src={e.photo} alt={n.name} className={`w-full h-full object-cover`} />
        ) : (
          <svg
            viewBox={`0 0 24 24`}
            className={`w-14 h-14 text-kmc-primary-deep/40`}
            fill={`none`}
            stroke={`currentColor`}
            strokeWidth={`1.5`}
            strokeLinecap={`round`}
          >
            <circle cx={`12`} cy={`8`} r={`4`} />
            <path d={`M4 21c1.5-4 5-6 8-6s6.5 2 8 6`} />
          </svg>
        )}
      </div>
      <div className={`p-5`}>
        <span
          className={`inline-block text-[0.65rem] tracking-wide bg-fog-1 text-kmc-primary-deep px-2.5 py-1 rounded-md mb-3`}
        >
          {t ? r.th : r.en}
        </span>
        <p className={`font-display font-medium text-kmc-secondary`}>{n.name}</p>
        <p className={`text-sm text-kmc-secondary/60 mt-1`}>{n.specialty}</p>
      </div>
    </div>
  );
}
function h() {
  let { i18n: e } = n(),
    t = e.language === `th`,
    [r, d] = (0, l.useState)(`all`),
    h = (0, l.useRef)(null),
    g = r === `all` ? f : f.filter((e) => e.dept === r),
    _ = (e) => {
      e !== r &&
        (d(e),
        requestAnimationFrame(() => {
          let e = h.current;
          if (!e || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
          let t = Array.from(e.children);
          (i(t, {
            opacity: 0,
            translateY: 16,
          }),
            a(t, {
              opacity: [0, 1],
              translateY: [16, 0],
              duration: 450,
              delay: o(60),
              easing: `easeOutCubic`,
            }));
        }));
    };
  return (
    <div>
      <_Element
        title={t ? `รายชื่อแพทย์` : `Doctor Directory`}
        subtitle={
          t
            ? `ค้นหาแพทย์และผู้เชี่ยวชาญตามแผนก — รายชื่อจริงจะแทนที่ข้อมูลตัวอย่างเมื่อพร้อม`
            : `Browse doctors and specialists by department, real roster coming soon.`
        }
        image={`chinese/consult-female`}
        imageAlt={t ? `แพทย์ให้คำปรึกษาผู้รับบริการ` : `A doctor advising a patient`}
      />
      <_Element2 className={`mx-auto max-w-6xl px-6 py-14`}>
        <div
          role={`group`}
          aria-label={t ? `กรองตามแผนก` : `Filter by department`}
          className={`flex flex-wrap gap-2 mb-10`}
        >
          {u.map((e) => (
            <button
              key={e.key}
              type={`button`}
              onClick={() => _(e.key)}
              aria-pressed={r === e.key}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors duration-200 ${r === e.key ? `bg-kmc-secondary text-white border-kmc-secondary` : `bg-white text-kmc-secondary/70 border-kmc-secondary/15 hover:border-kmc-primary-deep/40 hover:text-kmc-secondary`}`}
            >
              {t ? e.th : e.en}
            </button>
          ))}
        </div>
        <div ref={h} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {g.map((e) => (
            <_Element3 key={e.id} doctor={e} isTh={t} />
          ))}
        </div>
        {g.length === 0 && (
          <p className={`text-center text-kmc-secondary/50 py-16`}>
            {t ? `ยังไม่มีแพทย์ในแผนกนี้` : `No doctors in this department yet.`}
          </p>
        )}
      </_Element2>
      <_Element2 className={`mx-auto max-w-4xl px-6 pb-24 text-center`}>
        <div className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-10 py-12`}>
          <h2 className={`font-display text-2xl font-semibold text-kmc-secondary mb-3`}>
            {t ? `ต้องการปรึกษาแพทย์ของเรา?` : `Want to consult our doctors?`}
          </h2>
          <p className={`text-kmc-secondary/60`}>
            {t ? `แชท LINE หรือโทรหาเราได้ทันที` : `Chat on LINE or call us any time`}
          </p>
        </div>
      </_Element2>
    </div>
  );
}
export { h as default };
