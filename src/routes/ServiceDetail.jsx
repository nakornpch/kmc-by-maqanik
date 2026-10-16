// One template for every service page (/services/:slug), laid out after the stroke rehab page:
// photo hero with floating highlight tags, approach cards, who-it's-for panel, package cards,
// why-KMC panel, steps, photo gallery, FAQ and closing CTA. Content: services in site.jsx,
// plus serviceExtras / serviceTools in components/v2/serviceContent.js.
import { useRef, useState } from "react";
import { ArrowUpRight, Check, ClipboardCheck, HeartHandshake, Sparkles, Stethoscope } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link, u as useParams } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { t as useFaqSchema } from "./useFaqSchema.jsx";
import { services, serviceGroups, lineUrl, AnimatedHeading, Lt as findPackage } from "../site.jsx";
import SwipeRow from "../components/v2/SwipeRow.jsx";
import NotFound from "./NotFound.jsx";
import { Actions, ArrowLink, BentoGallery, FaqBlock, FinalCta, Hero, PhotoViewer, SectionHead, SectionNav, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";
import { galleryTabs, serviceExtras, serviceTools } from "../components/v2/serviceContent.js";

const highlightIcons = [Stethoscope, HeartHandshake, ClipboardCheck, Sparkles];

function ServicePage({ slug, service, th }) {
  const copy = (thai, english) => th ? thai : english;
  const data = service[th ? "th" : "en"];
  const extra = serviceExtras[slug] || {};
  const tool = serviceTools[slug];
  const root = useRef(null);
  const hero = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [galleryTab, setGalleryTab] = useState(0);
  useKv2Effects(root, hero);

  const images = service.images ?? (service.image ? [service.image] : []);
  // gallery captions: the service name on the first photo, then its highlights
  const gallery = images.map((src, index) => {
    const caption = (index > 0 && data.highlights[index - 1]?.title) || data.name;
    return { src, th: caption, en: caption };
  });
  // gallery tabs: this service, then its group's spaces and the care team
  const group = serviceGroups.find((item) => item.slugs.includes(slug));
  const tabs = [
    { key: "service", th: data.name, en: data.name, photos: gallery },
    galleryTabs.spaces[group?.key],
    galleryTabs.team,
  ].filter((tab) => tab && tab.photos.length > 0);
  const primary = data.cta?.primary ?? { label: copy("จองนัดหมาย", "Book an appointment"), to: `/contact?service=${slug}#appointment` };
  const line = { href: lineUrl, label: data.cta?.secondary?.label ?? copy("แชทสอบถามผ่าน LINE", "Ask us on LINE") };
  const contactItems = [primary, line];
  const nav = [
    { href: "#svc-approach", label: copy("แนวทางการดูแล", "Our approach") },
    data.relatedPackages?.length > 0 && { href: "#svc-packages", label: copy("แพ็กเกจ", "Packages") },
    data.steps?.length > 0 && { href: "#svc-steps", label: copy("ขั้นตอน", "How it works") },
    { href: "#svc-gallery", label: copy("ภาพบรรยากาศ", "Gallery") },
    data.faq?.length > 0 && { href: "#svc-faq", label: copy("คำถามที่พบบ่อย", "FAQs") },
  ].filter(Boolean);

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} mirror={false} photo={images[0]} photoAlt={data.name}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { to: "/services", label: copy("บริการ", "Services") }, { label: data.name }]}
      eyebrow={`KMC HOSPITAL / ${service.en.name.toUpperCase()}`}
      title={data.name} accent={th ? extra.th : extra.en} lead={data.tagline}
      actions={<Actions items={contactItems} placement={`service-${slug}`} />}
      tags={data.highlights.slice(0, 3).map((item, index) => ({ label: item.title, photo: images[(index + 1) % images.length] }))} />

    <SectionNav label={copy("เนื้อหาบริการ", "Service page sections")} items={nav} title={data.name} titleEn={th ? service.en.name : undefined} isTh={th} />

    <section id="svc-approach" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="OUR APPROACH" lines={[copy("สิ่งที่คุณจะได้รับ", "What you can expect"), copy("จากทีมของเรา", "from our team")]} lead={data.intro} />
      <div className="sr-highlights" data-sr-stagger>{data.highlights.map((item, index) => {
        const Icon = highlightIcons[index % highlightIcons.length];
        return <div key={item.title}><span className="sr-icon"><Icon size={26} strokeWidth={1.6} /></span><h3>{item.title}</h3><p>{item.desc}</p></div>;
      })}</div>
    </section>

    {data.forWho?.length > 0 && <section className="sr-fit">
      <div className="sr-wrap" data-sr-reveal><div className="sr-fit__grid">
        <div><p className="sr-eyebrow">THE RIGHT CARE</p><AnimatedHeading as="h2" lines={[copy("บริการนี้", "Who is this"), copy("เหมาะกับใคร?", "service for?")]} /><p>{copy("ไม่แน่ใจว่าเหมาะกับคุณหรือคนในครอบครัวไหม? เริ่มจากพูดคุยกับทีมของเราได้เลย", "Not sure it fits you or your family? Start with a conversation with our team.")}</p></div>
        <ul data-sr-stagger>{data.forWho.map((item) => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul>
      </div></div>
    </section>}

    {data.relatedPackages?.length > 0 && <section id="svc-packages" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="PACKAGES" title={copy(`แพ็กเกจ${data.name}`, `${data.name} packages`)} lead={copy("เลือกจุดเริ่มต้นของการดูแล แล้วให้ทีมช่วยแนะนำแผนและค่าใช้จ่ายที่เหมาะกับคุณ", "Choose a starting point, then let our team suggest the plan and costs that suit you.")} />
      <div className={`sr-packages${data.relatedPackages.length === 1 ? " kv2-packages--single" : data.relatedPackages.length === 3 ? " kv2-visit" : ""}`} data-sr-stagger>{data.relatedPackages.map((name, index) => {
        const key = extra.packages?.[index];
        const pkg = key ? findPackage(key, th) : null;
        const photo = pkg?.photo ? photoSrc(pkg.photo) : images[(index + 2) % images.length];
        return <article className="sr-package" key={name}>
          <div className="sr-package__media"><img src={photo} alt="" loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span>{pkg?.category && <span className="kv2-badge">{pkg.category}</span>}</div>
          <div className="sr-package__body"><p className="sr-eyebrow">{index === 0 ? "RECOMMENDED" : "ALSO AVAILABLE"}</p><h3>{name}</h3>
            <p>{pkg?.desc || copy("สอบถามรายละเอียด รายการที่รวมในแพ็กเกจ และค่าบริการได้กับทีมงาน", "Ask our team about what is included and the fees.")}</p>
            <ArrowLink to={pkg ? `/packages/${pkg.key}` : "/packages"}>{copy("รายละเอียดแพ็กเกจ", "Package details")}</ArrowLink>
          </div>
        </article>;
      })}</div>
      <div className="sr-preparation"><div><h3>{copy("สอบถามราคาและโปรโมชัน", "Ask about prices and offers")}</h3><p>{copy("ค่าบริการขึ้นกับแผนการดูแลของแต่ละคน ทีมงานพร้อมแจ้งรายละเอียด เงื่อนไข และโปรโมชันปัจจุบัน", "Fees depend on each person's care plan. Our team can explain the details, conditions and current offers.")}</p></div><Actions items={[line]} placement={`service-${slug}-price`} /></div>
    </section>}

    {data.whyKmc?.length > 0 && <section className="sr-why sr-wrap" data-sr-reveal>
      <img src={images[images.length - 1]} alt="" loading="lazy" />
      <div className="sr-why__body"><p className="sr-eyebrow">WHY KMC HOSPITAL</p><AnimatedHeading as="h2" lines={[copy("ทำไมต้อง", "Why choose"), "KMC Hospital"]} />
        <ul data-sr-stagger>{data.whyKmc.map((item, index) => <li key={item}><span className="sr-num">0{index + 1}</span><p>{item}</p></li>)}</ul>
      </div>
    </section>}

    {data.steps?.length > 0 && <section id="svc-steps" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="STEP BY STEP" title={copy("ขั้นตอนการรับบริการ", "How the care works")} lead={copy("ตั้งแต่นัดหมายครั้งแรก ไปจนถึงการติดตามผลอย่างต่อเนื่อง", "From your first appointment to ongoing follow-up")} />
      <ol className="sr-steps" data-count={data.steps.length} data-sr-stagger>{data.steps.map((step, index) => <li key={step}><span className="sr-num sr-num--light">0{index + 1}</span><p>{step}</p></li>)}</ol>
      <div className="sr-preparation"><div><h3>{copy("พร้อมเริ่มต้นแล้วหรือยัง?", "Ready to get started?")}</h3><p>{copy("นัดหมายหรือสอบถามข้อมูลเพิ่มเติมได้ทาง LINE หรือโทรศัพท์ ทีมนัดหมายจะช่วยเลือกวันเวลาที่สะดวกให้", "Book or ask us anything on LINE or by phone. The appointment team will find a time that suits you.")}</p></div><Actions items={contactItems} placement={`service-${slug}-steps`} /></div>
    </section>}

    <section id="svc-gallery" className="sr-gallery-section" data-sr-reveal>
      <div className="sr-wrap sr-section-head"><div><p className="sr-eyebrow">A CLOSER LOOK</p><AnimatedHeading as="h2" lines={[copy("เห็นภาพการดูแล", "See the care"), copy("ก่อนตัดสินใจ", "before you decide")]} /></div><Link to="/facilities">{copy("ดูสิ่งอำนวยความสะดวก", "Explore our facilities")}<ArrowUpRight size={19} /></Link></div>
      <div className="sr-wrap">
        <SwipeRow className="sr-gal__tabs" isTh={th} role="tablist" aria-label={copy("หมวดหมู่ภาพ", "Photo categories")}>{tabs.map((tab, index) => <button key={tab.key} type="button" role="tab" id={`svc-gal-tab-${tab.key}`} aria-selected={galleryTab === index} aria-controls="svc-gal-panel" className={`sr-gal__tab${galleryTab === index ? " is-active" : ""}`} onClick={() => setGalleryTab(index)}>{th ? tab.th : tab.en}</button>)}</SwipeRow>
        {/* keyed so the photos animate in again for every category */}
        <div key={tabs[galleryTab].key} id="svc-gal-panel" role="tabpanel" aria-labelledby={`svc-gal-tab-${tabs[galleryTab].key}`}><BentoGallery photos={tabs[galleryTab].photos} isTh={th} onOpen={(items, index) => setViewer({ items, index })} /></div>
      </div>
    </section>

    <FaqBlock id="svc-faq" isTh={th} items={data.faq} name={`${slug}-faq`} title={copy("คำตอบก่อนเริ่มรับบริการ", "Before you begin")} />

    {tool && <aside className="sr-clinical sr-wrap" data-sr-reveal><ClipboardCheck size={26} /><div><p className="sr-eyebrow">{tool[th ? "th" : "en"].kicker}</p><h3>{tool[th ? "th" : "en"].title}</h3><p>{tool[th ? "th" : "en"].body}</p></div><Link to={tool.to}>{tool[th ? "th" : "en"].cta}<ArrowUpRight size={19} /></Link></aside>}

    <FinalCta title={copy("เริ่มจากการพูดคุยกับทีมของเรา", "Start with a conversation")} lead={copy(`ปรึกษาเรื่อง${data.name}กับทีม KMC Hospital`, `Talk to the KMC Hospital team about ${data.name.toLowerCase()}`)} actions={contactItems} placement={`service-${slug}-final`} />

    <div className="sr-wrap sr-other" data-sr-reveal><h3>{copy("บริการอื่น ๆ", "Other services")}</h3><div data-sr-stagger>{Object.entries(services).filter(([key]) => key !== slug).map(([key, other]) => <Link key={key} to={`/services/${key}`}>{other[th ? "th" : "en"].name}<ArrowUpRight size={14} /></Link>)}</div></div>
    {viewer && <PhotoViewer {...viewer} isTh={th} onClose={() => setViewer(null)} setIndex={(index) => setViewer((current) => ({ ...current, index }))} />}
  </div>;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const service = services[slug];
  const data = service ? service[th ? "th" : "en"] : null;
  usePageMeta({
    title: data ? data.name : th ? "ไม่พบหน้านี้" : "Page not found",
    metaTitle: data?.meta?.title,
    description: data?.meta?.description || data?.tagline,
    keywords: data?.meta?.keywords,
  });
  useFaqSchema(data?.faq, "service-faq-jsonld");
  if (!service) return <NotFound />;
  // keyed so the reveal effects and hero restart when moving between services
  return <ServicePage key={slug} slug={slug} service={service} th={th} />;
}

