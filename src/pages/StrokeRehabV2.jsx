import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ClipboardCheck, Play, HeartHandshake, Phone, Plus, Stethoscope, X } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "../routes/usePageMeta.jsx";
import { t as useFaqSchema } from "../routes/useFaqSchema.jsx";
import { services, lineUrl, phoneNumber } from "../site.jsx";
import { strokeRehabPriceTable, strokeRehabGallery, strokeRehabGalleryTabs, strokeRehabCaseClips } from "../components/v2/strokeRehabContent.js";
import "../styles/stroke-rehab-v2.css";

function PhotoViewer({ items, index, setIndex, onClose, isTh }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  const item = items[index];
  const move = (direction) => setIndex((index + direction + items.length) % items.length);
  return <dialog ref={dialog} className="sr-viewer" aria-label={isTh ? "ภาพการดูแลและแพ็กเกจ" : "Care and package photos"}
    onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
    <button type="button" className="sr-viewer__close" onClick={onClose} aria-label={isTh ? "ปิดภาพ" : "Close image"} title={isTh ? "ปิดภาพ" : "Close image"}><X /></button>
    <figure><img src={item.src} alt={isTh ? item.th : item.en} /><figcaption>{isTh ? item.th : item.en} <span>{index + 1} / {items.length}</span></figcaption></figure>
    {items.length > 1 && <div className="sr-viewer__controls">
      <button type="button" onClick={() => move(-1)} aria-label={isTh ? "ภาพก่อนหน้า" : "Previous image"} title={isTh ? "ภาพก่อนหน้า" : "Previous image"}><ChevronLeft /></button>
      <button type="button" onClick={() => move(1)} aria-label={isTh ? "ภาพถัดไป" : "Next image"} title={isTh ? "ภาพถัดไป" : "Next image"}><ChevronRight /></button>
    </div>}
  </dialog>;
}

// LINE glyph, same as the floating LINE button
function LineIcon({ size = 20 }) {
  return <svg className="sr-line-icon" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 5.66 2 10.15c0 4.02 3.58 7.39 8.42 8.03.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.07-.46 5.8-3.42 7.92-5.85C21.44 13.5 22 11.9 22 10.15 22 5.66 17.52 2 12 2zm-3.3 10.6H7.05a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v3.7h1.25a.4.4 0 1 1 0 .8zm2.1 0h-.8a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v4.1a.4.4 0 0 1-.4.4zm4.65-.4a.4.4 0 0 1-.72.24l-1.88-2.56v2.32a.4.4 0 1 1-.8 0V8.1c0-.18.12-.34.29-.38a.4.4 0 0 1 .43.14l1.88 2.56V8.1a.4.4 0 1 1 .8 0v4.1zm2.65.4h-1.65a.4.4 0 0 1-.4-.4V8.1a.4.4 0 0 1 .4-.4h1.65a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8z" />
  </svg>;
}

// the two arcs of the KMC "K" mark, as on the /home-v2 hero
function KArcs({ className }) {
  return <svg className={`sr-arcs ${className}`} viewBox="0 0 800 800" aria-hidden="true">
    <path d="M266.62,0H0c0,441.86,358.13,799.99,799.99,799.99v-266.62C505.41,533.38,266.62,294.59,266.62,0Z" />
    <path d="M800,266.62V0C358.14,0,0,358.13,0,799.99h266.62c0-294.58,238.79-533.37,533.38-533.38Z" />
  </svg>;
}

export default function StrokeRehabV2() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const data = services["stroke-rehab"][th ? "th" : "en"];
  const root = useRef(null);
  const hero = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [galleryTab, setGalleryTab] = useState(0);
  usePageMeta({ title: data.name, description: data.meta.description, keywords: data.meta.keywords });
  useFaqSchema(data.faq, "stroke-v2-faq");

  useEffect(() => {
    const elements = root.current.querySelectorAll("[data-sr-reveal]");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    elements.forEach((element) => { element.classList.add("sr-reveal"); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach((element) => element.classList.remove("sr-reveal", "is-visible")); };
  }, []);

  // hero tags drift at different speeds while the hero scrolls out (desktop, motion allowed)
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = hero.current;
      if (element) element.style.setProperty("--sr-scroll", Math.min(window.scrollY, element.offsetHeight).toFixed(1));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  const openImages = (items, index = 0) => setViewer({ items, index });
  const contact = <div className="sr-actions" data-cta-placement="stroke-v2">
    <Link className="sr-button" to={data.cta.primary.to}>{copy("นัดประเมินแผนฟื้นฟู", "Book a rehab assessment")}<ArrowUpRight size={19} /></Link>
    <a className="sr-button sr-button--outline" href={lineUrl} target="_blank" rel="noopener noreferrer"><LineIcon />{copy("สอบถามแพ็กเกจ", "Ask about packages")}</a>
  </div>;

  return <div ref={root} className="stroke-v2">
    <section ref={hero} className="sr-hero">
      <img className="sr-hero__photo" src="/images/photos/physio/parallel-bars.webp" alt={copy("นักกายภาพบำบัดดูแลการฝึกเดินด้วยราวคู่", "Walking practice with a physiotherapist and parallel bars")} fetchPriority="high" />
      <div className="sr-hero__body sr-wrap">
        <p className="sr-eyebrow">KMC HOSPITAL / STROKE REHABILITATION</p>
        <h1>{copy("ฟื้นฟูโรคหลอดเลือดสมอง", "Stroke Rehabilitation")}<span><span className="sr-accent">{copy("ด้วยแผนเฉพาะคุณ", "Care built around you")}</span></span></h1>
        <p className="sr-hero__lead">{data.tagline}<br />{copy("ดูแลโดยทีมสหวิชาชีพ เพื่อการเคลื่อนไหวและชีวิตประจำวัน", "Multidisciplinary care for movement and everyday life")}</p>
        {contact}
      </div>
      <KArcs className="sr-arcs--hero" />
      <ul className="sr-hero__tags sr-wrap">{[
        { label: copy("กายภาพบำบัด", "Physiotherapy"), photo: "/images/photos/physio/walking-sm.webp" },
        { label: copy("กิจกรรมบำบัด", "Occupational therapy"), photo: "/images/photos/physio/ot-puzzle-sm.webp" },
        { label: copy("ฝึกการพูด", "Speech therapy"), photo: "/images/photos/sleep/nurse-chat-sm.webp" },
      ].map((tag, index) => <li key={tag.label} style={{ "--i": index }}><div className="sr-tag">
        <img className="sr-tag__photo" src={tag.photo} alt="" loading="lazy" /><i className="sr-tag__line" aria-hidden="true" /><span>{tag.label}</span>
      </div></li>)}</ul>
    </section>

    <nav className="sr-section-nav" aria-label={copy("เนื้อหาบริการฟื้นฟู", "Rehabilitation page sections")}>
      <div><a href="#sr-care">{copy("แนวทางฟื้นฟู", "Our approach")}</a><a href="#sr-packages">{copy("แพ็กเกจและราคา", "Packages & pricing")}</a><a href="#sr-gallery">{copy("ภาพการดูแล", "Care gallery")}</a><a href="#sr-faq">{copy("คำถามที่พบบ่อย", "FAQs")}</a></div>
    </nav>

    <section id="sr-care" className="sr-wrap sr-section" data-sr-reveal>
      <div className="sr-section-head"><div><p className="sr-eyebrow">PERSONALIZED RECOVERY</p><h2>{copy("ทุกก้าวของการฟื้นฟู", "Every step of recovery")}<br />{copy("มีทีมดูแลไปด้วยกัน", "with a team beside you")}</h2></div><p>{data.intro}</p></div>
      <div className="sr-highlights">{data.highlights.map((item, index) => {
        const Icon = [Stethoscope, HeartHandshake, ClipboardCheck][index];
        return <div key={item.title}><span className="sr-icon"><Icon size={26} strokeWidth={1.6} /></span><h3>{item.title}</h3><p>{index === 2 ? data.steps[2] : item.desc}</p></div>;
      })}</div>
      <div className="sr-journey">
        <div className="sr-journey__head"><h3>{copy("เส้นทางการฟื้นฟู", "The road to recovery")}</h3><p>{copy("เรื่องจริงจากผู้ป่วยและครอบครัวที่ฟื้นฟูกับเรา", "Real stories from patients and families who recovered with us")}</p></div>
        <ol className="sr-clips">{strokeRehabCaseClips.map((clip, index) => <li key={index} className="sr-clip">
          {clip.src
            ? <video src={clip.src} poster={clip.poster} controls playsInline preload="metadata" aria-label={th ? clip.th : clip.en} />
            : <div className="sr-clip__placeholder"><img src={clip.poster} alt="" loading="lazy" /><span className="sr-clip__play" aria-hidden="true"><Play size={22} fill="currentColor" /></span><span className="sr-clip__soon">{copy("คลิปรีวิวเคส · เร็ว ๆ นี้", "Case review · coming soon")}</span></div>}
          <div className="sr-clip__caption"><span className="sr-num">0{index + 1}</span><p>{th ? clip.th : clip.en}</p></div>
        </li>)}</ol>
      </div>
    </section>

    <section className="sr-fit">
      <div className="sr-wrap" data-sr-reveal><div className="sr-fit__grid"><div><p className="sr-eyebrow">THE RIGHT CARE</p><h2>{copy("กำลังมองหาการฟื้นฟู", "Looking for continuing")}<br />{copy("ให้คนที่คุณรัก?", "care for a loved one?")}</h2><p>{copy("เริ่มจากพูดคุยกับทีม เพื่อเลือกแนวทางที่เหมาะกับผู้ป่วยและครอบครัว", "Start a conversation with our team about the approach that suits your family.")}</p></div>
        <ul>{data.forWho.map((item) => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul>
      </div></div>
    </section>

    <section id="sr-packages" className="sr-wrap sr-section" data-sr-reveal>
      <div className="sr-section-head"><div><p className="sr-eyebrow">YOUR RECOVERY PLAN</p><h2>{copy("แพ็กเกจฟื้นฟู Stroke", "Stroke rehabilitation packages")}</h2></div><p>{copy("เลือกจุดเริ่มต้นของการดูแล แล้วให้ทีมช่วยประเมินแผนและค่าใช้จ่ายที่เหมาะกับคุณ", "Choose a starting point, then discuss the care plan and costs with our team.")}</p></div>
      <div className="sr-packages">{data.relatedPackages.map((name, index) => <article className="sr-package" key={name}>
        <div className="sr-package__media"><img src={strokeRehabGallery[index === 0 ? 0 : 4].src} alt={copy("บรรยากาศการฟื้นฟู", "Rehabilitation care")} loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span></div>
        <div className="sr-package__body"><p className="sr-eyebrow">{index === 0 ? "INTENSIVE REHABILITATION" : "CONTINUING CARE"}</p><h3>{name}</h3>
          <p>{copy(index === 0 ? "พูดคุยเรื่องเป้าหมายและแผนฟื้นฟูกับทีมสหวิชาชีพ" : "พูดคุยเรื่องการฟื้นฟูต่อเนื่องและการดูแลระยะยาว", index === 0 ? "Discuss your recovery goals and multidisciplinary plan." : "Discuss continuing rehabilitation and longer-term care.")}</p>
          <Link to="/packages/rehab-stroke" className="sr-package__link">{copy("รายละเอียดเพิ่มเติม", "More details")}<ArrowUpRight size={20} /></Link>
        </div>
      </article>)}</div>

      <div className="sr-pricing">
        <div className="sr-pricing__head">
          <div><p className="sr-eyebrow">PACKAGE PRICING</p><h3>{copy("ค่าบริการแพ็กเกจฟื้นฟู", "Rehabilitation package fees")}</h3></div>
          <p>{copy("เลือกระดับการดูแลและประเภทห้องพักที่เหมาะกับผู้ป่วย ราคาเป็นบาท", "Choose the care level and room type that suit the patient. Prices in Thai baht.")}</p>
        </div>
        <div className="sr-pricing__scroll">
          <table className="sr-pricing__table">
            <thead><tr><th scope="col">{copy("ประเภทห้องพัก", "Room type")}</th>{strokeRehabPriceTable.tiers.map((tier, index) => <th scope="col" key={tier} data-tier={index}>{tier}</th>)}</tr></thead>
            <tbody>{strokeRehabPriceTable.rooms.map((room) => <tr key={room.en}>
              <th scope="row">{th ? <><span className="sr-pricing__prefix">ค่าบริการ</span>{room.th}</> : room.en}</th>
              {room.prices.map((price, index) => <td key={index} data-tier={index}>{price.toLocaleString("en-US")}</td>)}
            </tr>)}</tbody>
          </table>
        </div>
        <div className="sr-pricing__foot">
          <p>{copy("สอบถามรายการที่รวมในแพ็กเกจ เงื่อนไข และโปรโมชันปัจจุบันได้กับทีมงาน", "Ask our team about package inclusions, conditions and current promotions.")}</p>
          <a className="sr-button" href={lineUrl} target="_blank" rel="noopener noreferrer"><LineIcon />{data.cta.secondary.label}</a>
        </div>
      </div>
    </section>

    <section className="sr-why sr-wrap"><img src="/images/photos/physio/team-care.webp" alt={copy("ทีมดูแลการฟื้นฟู", "Rehabilitation care team")} loading="lazy" /><div className="sr-why__body" data-sr-reveal><p className="sr-eyebrow">WHY KMC HOSPITAL</p><h2>{copy("ทีมเดียวกัน", "One team")}<br />{copy("เชื่อมต่อทุกช่วงการดูแล", "Connected care")}</h2><ul>{data.whyKmc.map((item, index) => <li key={item}><span className="sr-num">0{index + 1}</span><p>{item}</p></li>)}</ul></div></section>

    <section className="sr-wrap sr-section" data-sr-reveal><div className="sr-section-head"><div><p className="sr-eyebrow">STEP BY STEP</p><h2>{copy("เริ่มต้นแผนฟื้นฟู", "Start your recovery plan")}</h2></div><p>{copy("ตั้งแต่วันประเมิน ไปจนถึงการวางแผนดูแลต่อที่บ้าน", "From the first assessment to planning care at home")}</p></div>
      <ol className="sr-steps">{data.steps.map((step, index) => <li key={step}><span className="sr-num sr-num--light">0{index + 1}</span><p>{step}</p></li>)}</ol>
      <div className="sr-preparation"><div><h3>{copy("ก่อนพูดคุยกับทีม", "Before contacting the team")}</h3><p>{copy("เตรียมคำถามเรื่องเป้าหมายการฟื้นฟู รูปแบบการดูแล ค่าใช้จ่าย และเอกสารที่ต้องใช้ เพื่อให้ทีมช่วยแนะนำขั้นตอนถัดไป", "Bring your questions about recovery goals, care options, costs and required documents so the team can explain the next steps.")}</p></div>{contact}</div>
    </section>

    <section id="sr-gallery" className="sr-gallery-section"><div className="sr-wrap sr-section-head"><div><p className="sr-eyebrow">A CLOSER LOOK</p><h2>{copy("เห็นภาพการดูแล", "See the care")}<br />{copy("ก่อนตัดสินใจ", "before you decide")}</h2></div><Link to="/facilities">{copy("ดูสิ่งอำนวยความสะดวก", "Explore our facilities")}<ArrowUpRight size={19} /></Link></div>
      <div className="sr-wrap">
        <div className="sr-gal__tabs" role="tablist" aria-label={copy("หมวดหมู่ภาพ", "Photo categories")}>{strokeRehabGalleryTabs.map((tab, index) => <button key={tab.key} type="button" role="tab" id={`sr-gal-tab-${tab.key}`} aria-selected={galleryTab === index} aria-controls="sr-gal-panel" className={`sr-gal__tab${galleryTab === index ? " is-active" : ""}`} onClick={() => setGalleryTab(index)}>{th ? tab.th : tab.en}</button>)}</div>
        {/* keyed so the photos animate in again for every category */}
        <ul key={strokeRehabGalleryTabs[galleryTab].key} id="sr-gal-panel" role="tabpanel" aria-labelledby={`sr-gal-tab-${strokeRehabGalleryTabs[galleryTab].key}`} className="sr-gal__grid">{strokeRehabGalleryTabs[galleryTab].photos.map((image, index, photos) => <li key={image.src} style={{ "--i": index }}>
          <button type="button" className="sr-gal__item" onClick={() => openImages(photos, index)} aria-label={`${th ? image.th : image.en}: ${copy("ดูภาพเต็มจอ", "view full screen")}`}>
            <img src={image.src} alt="" loading="lazy" decoding="async" /><span className="sr-gal__caption">{th ? image.th : image.en}</span>
          </button>
        </li>)}</ul>
      </div>
    </section>

    <section id="sr-faq" className="sr-wrap sr-section sr-faq" data-sr-reveal><div><p className="sr-eyebrow">YOUR QUESTIONS</p><h2>{copy("คำตอบก่อนเริ่มฟื้นฟู", "Before you begin")}</h2><p>{copy("ยังมีเรื่องที่อยากสอบถาม? คุยกับทีมของเราได้โดยตรง", "Have another question? Talk directly with our team.")}</p><a href={`tel:${phoneNumber.replace(/-/g, "")}`} className="sr-phone"><Phone size={19} />{phoneNumber}</a></div>
      <div>{data.faq.map((item) => <details key={item.q} name="stroke-faq"><summary>{item.q}<Plus size={20} /></summary><p>{item.a}</p></details>)}</div>
    </section>

    <aside className="sr-clinical sr-wrap"><ClipboardCheck size={26} /><div><p className="sr-eyebrow">{copy("เครื่องมือสำหรับแพทย์", "FOR CLINICIANS")}</p><h3>{copy("แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)", "Stroke Severity Assessment (NIHSS)")}</h3><p>{copy("15 ข้อ คิดคะแนนอัตโนมัติ พร้อมใบสรุปสำหรับพิมพ์", "15 items, scored automatically, with a printable summary")}</p></div><Link to="/tools/stroke-assessment">{copy("เริ่มประเมิน", "Start assessment")}<ArrowUpRight size={19} /></Link></aside>

    <section className="sr-final sr-wrap"><KArcs className="sr-arcs--final" /><div><p className="sr-eyebrow">LET'S PLAN THE NEXT STEP</p><h2>{copy("เริ่มจากแผนที่เหมาะกับคุณ", "Start with a plan that suits you")}</h2><p>{copy("พูดคุยเรื่องการฟื้นฟูและแพ็กเกจกับทีม KMC Hospital", "Discuss rehabilitation and packages with the KMC Hospital team")}</p>{contact}</div></section>
    <div className="sr-wrap sr-other"><h3>{copy("บริการอื่น ๆ", "Other services")}</h3><div>{Object.entries(services).filter(([key]) => key !== "stroke-rehab").map(([key, service]) => <Link key={key} to={`/services/${key}`}>{service[th ? "th" : "en"].name}<ArrowUpRight size={14} /></Link>)}</div></div>
    {viewer && <PhotoViewer {...viewer} isTh={th} onClose={() => setViewer(null)} setIndex={(index) => setViewer((current) => ({ ...current, index }))} />}
  </div>;
}
