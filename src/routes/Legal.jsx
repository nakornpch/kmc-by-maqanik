// /privacy and /terms in the v2 page style: document header, a sticky contents list beside the
// numbered section cards, and a contact strip. Section bodies await the hospital's legal copy.
import { useRef } from "react";
import { FileText } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { Actions, Hero, callAction, lineAction, useKv2Effects } from "../components/v2/kit.jsx";

const pages = {
  privacy: {
    th: {
      title: "นโยบายความเป็นส่วนตัว",
      subtitle: "การคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้บริการ (PDPA)",
      sections: ["ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม", "วัตถุประสงค์ในการใช้ข้อมูล", "การใช้คุกกี้และเครื่องมือวัดผลการเข้าชมและโฆษณา (Google Analytics, Google Ads)", "การเปิดเผยข้อมูลต่อบุคคลที่สาม", "ระยะเวลาการเก็บรักษาข้อมูล", "สิทธิของเจ้าของข้อมูล", "ช่องทางติดต่อเจ้าหน้าที่คุ้มครองข้อมูล (DPO)"],
    },
    en: {
      title: "Privacy Policy",
      subtitle: "How we protect your personal data (PDPA)",
      sections: ["Personal data we collect", "How we use your data", "Cookies, website analytics and advertising (Google Analytics, Google Ads)", "Disclosure to third parties", "Data retention period", "Your rights as a data subject", "Contacting our Data Protection Officer (DPO)"],
    },
  },
  terms: {
    th: {
      title: "ข้อกำหนดและเงื่อนไข",
      subtitle: "เงื่อนไขการใช้งานเว็บไซต์และบริการ",
      sections: ["ขอบเขตการใช้งานเว็บไซต์", "ข้อจำกัดความรับผิดชอบของข้อมูลด้านสุขภาพ", "การนัดหมายและการยกเลิก", "ทรัพย์สินทางปัญญา", "การเปลี่ยนแปลงข้อกำหนด"],
    },
    en: {
      title: "Terms & Conditions",
      subtitle: "Terms of using this website and our services",
      sections: ["Scope of website use", "Health information disclaimer", "Appointments and cancellation", "Intellectual property", "Changes to these terms"],
    },
  },
};

export default function Legal({ kind = "privacy" }) {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const page = pages[kind][th ? "th" : "en"];
  const other = kind === "privacy" ? "terms" : "privacy";
  const root = useRef(null);
  useKv2Effects(root);
  usePageMeta({ title: page.title, description: page.subtitle });

  return <div ref={root} className="kv2">
    <Hero isTh={th} variant="document" crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: page.title }]}
      eyebrow={kind === "privacy" ? "KMC HOSPITAL / PRIVACY" : "KMC HOSPITAL / TERMS"} title={page.title} lead={page.subtitle}>
      <div className="kv2-hero__meta"><span><FileText size={15} />{copy(`${page.sections.length} หัวข้อ`, `${page.sections.length} sections`)}</span></div>
    </Hero>

    <section className="sr-wrap sr-section">
      <div className="kv2-legal">
        <nav className="kv2-toc" aria-label={copy("สารบัญ", "Contents")}>
          <p>{copy("สารบัญ", "Contents")}</p>
          <ol>{page.sections.map((title, index) => <li key={title}><a href={`#legal-${index + 1}`}><span>{index + 1}.</span>{title}</a></li>)}</ol>
        </nav>
        <div>
          <div className="kv2-legal__sections" data-sr-stagger>{page.sections.map((title, index) => <section key={title} id={`legal-${index + 1}`} className="kv2-legal__section">
            <span className="sr-num" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div><h2>{title}</h2><p>[ {copy("รอเนื้อหาจริงจากฝ่ายกฎหมาย/ผู้ดูแลระบบของโรงพยาบาล", "Awaiting real copy from the hospital’s legal team")} ]</p></div>
          </section>)}</div>
          <div className="kv2-legal__meta" data-sr-reveal>
            <p>{copy("มีคำถามเกี่ยวกับเอกสารนี้? ติดต่อทีมงานได้ทาง LINE หรือโทรศัพท์", "Questions about this document? Contact our team on LINE or by phone.")}<br /><Link to={`/${other}`} className="kv2-inline-link">{other === "terms" ? copy("อ่านข้อกำหนดและเงื่อนไข", "Read the Terms & Conditions") : copy("อ่านนโยบายความเป็นส่วนตัว", "Read the Privacy Policy")}</Link></p>
            <Actions items={[lineAction(th), callAction(th)]} placement={`legal-${kind}`} />
          </div>
        </div>
      </div>
    </section>
  </div>;
}
