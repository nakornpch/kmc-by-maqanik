import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { a as t } from "../vendor/motion-CB540VaL.js";
import { m as _Element2, p as _Element } from "../site.jsx";
var i = t(),
  a = {
    privacy: {
      th: {
        title: `นโยบายความเป็นส่วนตัว`,
        subtitle: `การคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้บริการ (PDPA)`,
        sections: [
          `ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม`,
          `วัตถุประสงค์ในการใช้ข้อมูล`,
          `การใช้คุกกี้และเครื่องมือวัดผลการเข้าชมและโฆษณา (Google Analytics, Google Ads)`,
          `การเปิดเผยข้อมูลต่อบุคคลที่สาม`,
          `ระยะเวลาการเก็บรักษาข้อมูล`,
          `สิทธิของเจ้าของข้อมูล`,
          `ช่องทางติดต่อเจ้าหน้าที่คุ้มครองข้อมูล (DPO)`,
        ],
      },
      en: {
        title: `Privacy Policy`,
        subtitle: `How we protect your personal data (PDPA)`,
        sections: [
          `Personal data we collect`,
          `How we use your data`,
          `Cookies, website analytics and advertising (Google Analytics, Google Ads)`,
          `Disclosure to third parties`,
          `Data retention period`,
          `Your rights as a data subject`,
          `Contacting our Data Protection Officer (DPO)`,
        ],
      },
    },
    terms: {
      th: {
        title: `ข้อกำหนดและเงื่อนไข`,
        subtitle: `เงื่อนไขการใช้งานเว็บไซต์และบริการ`,
        sections: [
          `ขอบเขตการใช้งานเว็บไซต์`,
          `ข้อจำกัดความรับผิดชอบของข้อมูลด้านสุขภาพ`,
          `การนัดหมายและการยกเลิก`,
          `ทรัพย์สินทางปัญญา`,
          `การเปลี่ยนแปลงข้อกำหนด`,
        ],
      },
      en: {
        title: `Terms & Conditions`,
        subtitle: `Terms of using this website and our services`,
        sections: [
          `Scope of website use`,
          `Health information disclaimer`,
          `Appointments and cancellation`,
          `Intellectual property`,
          `Changes to these terms`,
        ],
      },
    },
  };
function o({ kind: t = `privacy` }) {
  let { i18n: o } = e(),
    s = o.language === `th`,
    c = s ? a[t].th : a[t].en;
  return (
    <div>
      <_Element
        title={c.title}
        subtitle={c.subtitle}
        image={`building/front`}
        imageAlt={s ? `อาคาร KMC Hospital` : `The KMC Hospital building`}
      />
      <_Element2 className={`mx-auto max-w-3xl px-6 py-16 space-y-8`}>
        {c.sections.map((e, t) => (
          <div key={e}>
            <h2 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
              {t + 1}
              {`. `}
              {e}
            </h2>
            <p className={`text-sm text-kmc-secondary/50`}>
              {`[ `}
              {s
                ? `รอเนื้อหาจริงจากฝ่ายกฎหมาย/ผู้ดูแลระบบของโรงพยาบาล`
                : `Awaiting real copy from the hospital’s legal team`}
              {` ]`}
            </p>
          </div>
        ))}
      </_Element2>
    </div>
  );
}
export { o as default };
