// /packages/:slug, one template for every package in the v2 page style: short hero with a square photo, what the
// package includes and how booking works beside a sticky navy price card, then related
// packages, questions about coverage and the closing CTA.
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight, Check, ClipboardList } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link, u as useParams } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { a as findPackage, c as getPackages, s as hasDetails, i as faqGroups, AnimatedHeading } from "../site.jsx";
import NotFound from "./NotFound.jsx";
import { Actions, ArrowLink, FaqBlock, FinalCta, Hero, KArcs, SectionHead, callAction, lineAction, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";

function PackagePage({ item, th }) {
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  useKv2Effects(root, hero);
  const all = getPackages(th);
  const sameCategory = all.filter((other) => other.key !== item.key && other.category === item.category);
  const related = (sameCategory.length ? sameCategory : all.filter((other) => other.key !== item.key)).slice(0, 3);
  const photo = item.image || (item.photo ? photoSrc(item.photo) : "/images/photos/hospital/reception.webp");
  const contact = [lineAction(th), callAction(th)];
  const hospitalQuestions = faqGroups.find((group) => group.key === "hospital")?.items ?? [];
  const questions = ["hp-insurance", "hp-social-security", "hp-services"]
    .map((key) => hospitalQuestions.find((question) => question.key === key)).filter(Boolean)
    .map((question) => question[th ? "th" : "en"]);
  const steps = [
    copy("สอบถามรายละเอียดและเลือกแพ็กเกจกับทีมงานทาง LINE หรือโทรศัพท์", "Ask about the package and choose with our team on LINE or by phone"),
    copy("นัดหมายวันและเวลาที่สะดวก พร้อมรับคำแนะนำการเตรียมตัว", "Book a convenient date and get advice on how to prepare"),
    copy("เข้ารับบริการตามแผน โดยทีมสหวิชาชีพของโรงพยาบาล", "Receive the care in your plan from our multidisciplinary team"),
    copy("รับสรุปผลและคำแนะนำ พร้อมการติดตามผลต่อเนื่อง", "Get your results and advice, with follow-up afterwards"),
  ];

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="summary" photo={photo} photoAlt={item.imageAlt || item.name}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { to: "/packages", label: copy("แพ็กเกจ", "Packages") }, { label: item.name }]}
      eyebrow={item.category ? `KMC HOSPITAL / ${item.category}` : "KMC HOSPITAL / PACKAGE"} title={item.name} lead={item.desc}
      actions={<Actions items={contact} placement="package-hero" />} />

    <section className="sr-wrap sr-section" data-sr-reveal>
      <div className="kv2-detail">
        <div>
          <div className="kv2-detail__block">
            <p className="sr-eyebrow">WHAT'S INCLUDED</p>
            <AnimatedHeading as="h2" text={copy("รายละเอียดแพ็กเกจ", "What the package includes")} />
            {item.content
              ? <div className="kv2-prose kv2-prose-content" dangerouslySetInnerHTML={{ __html: item.content }} />
              : item.includes.length > 0
                ? <ul className="kv2-checks" data-sr-stagger>{item.includes.map((line) => <li key={line}><Check size={18} /><span>{line}</span></li>)}</ul>
                : <p className="kv2-note"><ClipboardList />{copy("รายการตรวจและบริการในแพ็กเกจนี้กำลังจัดเตรียม สอบถามรายละเอียดได้ทาง LINE หรือโทรหาเรา ทีมงานยินดีแนะนำรายการที่เหมาะกับคุณ", "The full list of what this package covers is on its way. Ask us on LINE or call, and our team will walk you through what suits you.")}</p>}
          </div>
          <div className="kv2-detail__block">
            <p className="sr-eyebrow">HOW IT WORKS</p>
            <AnimatedHeading as="h2" text={copy("ขั้นตอนการใช้บริการ", "How booking works")} />
            <ol className="sr-steps" data-sr-stagger>{steps.map((step, index) => <li key={step}><span className="sr-num sr-num--light">0{index + 1}</span><p>{step}</p></li>)}</ol>
          </div>
        </div>
        <aside className="kv2-price-card" aria-label={copy("ราคาและการจอง", "Price and booking")}>
          <KArcs />
          <p className="sr-eyebrow">{copy("ราคาแพ็กเกจ", "PACKAGE PRICE")}</p>
          <p className="kv2-price-card__value">{item.price || copy("สอบถามราคา", "Price on request")}{!item.price && <small>{copy("ราคาขึ้นกับรายการที่เลือกและโปรโมชันปัจจุบัน", "Depends on the items chosen and current offers")}</small>}</p>
          <p>{copy("ทีมงานช่วยแนะนำแพ็กเกจที่เหมาะกับคุณ และนัดหมายวันเข้ารับบริการ", "Our team can help you choose the right package and book a date.")}</p>
          <Actions items={contact} placement="package-card" />
          <ul>{[copy("ปรึกษาก่อนตัดสินใจ ไม่มีข้อผูกมัด", "Talk it through first, no commitment"), copy("ปรับรายการให้เหมาะกับแต่ละคนได้", "Items can be tailored to each person"), copy("สอบถามเรื่องประกันได้ก่อนเข้ารับบริการ", "Check your insurance with us beforehand")].map((line) => <li key={line}><Check size={15} />{line}</li>)}</ul>
        </aside>
      </div>
    </section>

    {related.length > 0 && <section className="sr-gallery-section" data-sr-reveal>
      <div className="sr-wrap"><SectionHead eyebrow="YOU MAY ALSO LIKE" title={sameCategory.length ? copy("แพ็กเกจในหมวดเดียวกัน", "More in this category") : copy("แพ็กเกจอื่น ๆ", "Other packages")}><Link to="/packages">{copy("ดูแพ็กเกจทั้งหมด", "All packages")}<ArrowUpRight size={19} /></Link></SectionHead>
        <div className="kv2-pkg-grid" data-sr-stagger>{related.map((other, index) => <article className="sr-package" key={other.key}>
          <div className="sr-package__media">{other.photo && <img src={photoSrc(other.photo)} alt="" loading="lazy" />}{other.category && <span className="kv2-badge">{other.category}</span>}</div>
          <div className="sr-package__body"><h3>{other.name}</h3><p>{other.desc}</p><ArrowLink to={`/packages/${other.key}`}>{copy("ดูรายละเอียด", "View details")}</ArrowLink></div>
        </article>)}</div>
      </div>
    </section>}

    <FaqBlock isTh={th} items={questions} name="package-faq" eyebrow="BEFORE YOU BOOK" title={copy("คำถามก่อนจองแพ็กเกจ", "Questions before you book")} />

    <FinalCta title={copy("พร้อมเริ่มต้นแล้วหรือยัง?", "Ready to get started?")} lead={copy(`สอบถาม${item.name}กับทีม KMC Hospital`, `Ask the KMC Hospital team about the ${item.name}`)} actions={contact} placement="package-final" />
    <div className="sr-wrap kv2-back-row"><Link to="/packages" className="kv2-back"><ArrowLeft size={18} />{copy("กลับไปหน้าแพ็กเกจทั้งหมด", "Back to all packages")}</Link></div>
  </div>;
}

export default function PackageDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const item = findPackage(slug, th);
  usePageMeta({
    title: item ? item.name : th ? "ไม่พบแพ็กเกจ" : "Package not found",
    description: item?.desc,
    noindex: !item || !hasDetails(item),
  });
  if (!item) return <NotFound />;
  return <PackagePage key={slug} item={item} th={th} />;
}
