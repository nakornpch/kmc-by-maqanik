import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element2 } from "../vendor/react-SEPqUFC0.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import { d as r, p as _Element, v as a } from "../site.jsx";
var o = n(),
  s = a.find((e) => e.key === `doctors`).children;
function c() {
  let { i18n: n } = e(),
    a = n.language === `th`,
    c = r({
      delayEach: 60,
    });
  return (
    <div>
      <_Element
        title={a ? `แพทย์และผู้เชี่ยวชาญ` : `Doctors & Specialists`}
        subtitle={
          a ? `ทีมสหวิชาชีพที่พร้อมดูแลคุณ` : `A multidisciplinary team ready to care for you.`
        }
        image={`chinese/consult`}
        imageAlt={a ? `แพทย์ตรวจชีพจรผู้ป่วย` : `A doctor taking a patient's pulse`}
      />
      <div ref={c} className={`mx-auto max-w-5xl px-6 py-16 grid sm:grid-cols-2 gap-4`}>
        {s.map((e) => (
          <_Element2
            key={e.key}
            to={e.path}
            className={`rounded-xl border border-kmc-secondary/10 bg-white px-6 py-5 hover:border-kmc-primary hover:-translate-y-0.5 transition-all`}
          >
            {a ? e.th : e.en}
          </_Element2>
        ))}
      </div>
    </div>
  );
}
export { c as default };
