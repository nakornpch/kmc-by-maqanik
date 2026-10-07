import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5 } from "../vendor/react-SEPqUFC0.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import { h as _Element4, m as _Element2, p as _Element } from "../site.jsx";
import { t as _Element3 } from "./FaqAccordion.jsx";
var s = n();
function c() {
  let { i18n: n } = e(),
    c = n.language === `th`;
  return (
    <div>
      <_Element
        title={c ? `คำถามที่พบบ่อย` : `Frequently Asked Questions`}
        subtitle={
          c
            ? `รวมคำตอบเรื่องการเตรียมตัว ค่าใช้จ่าย และการดูแลที่ครอบครัวถามบ่อยที่สุด`
            : `Answers about preparation, costs, and care that families ask most.`
        }
        image={`hospital/reception`}
        imageAlt={c ? `เคาน์เตอร์ต้อนรับ` : `The reception desk`}
      />
      <_Element2 className={`mx-auto max-w-3xl px-6 py-16`}>
        <_Element3 />
        <div
          className={`relative mt-12 rounded-3xl overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-8 py-10 text-center`}
        >
          <_Element4
            name={`chinese/consult-room`}
            alt={``}
            sizes={`768px`}
            className={`absolute inset-0 w-full h-full object-cover`}
          />
          <div className={`absolute inset-0 bg-fog-1/85`} />
          <div className={`relative`}>
            <p className={`font-display text-lg font-medium text-kmc-secondary mb-4`}>
              {c ? `ยังไม่พบคำตอบที่ต้องการ?` : `Still have a question?`}
            </p>
            <_Element5
              to={`/contact`}
              className={`inline-block rounded-full bg-kmc-secondary text-white px-7 py-3 font-medium hover:brightness-110 transition`}
            >
              {c ? `ติดต่อทีมงาน` : `Contact our team`}
            </_Element5>
          </div>
        </div>
      </_Element2>
    </div>
  );
}
export { c as default };
