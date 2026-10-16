// /packages in the v2 page style: short light hero band with a carousel of round photos, a category sidebar beside the package cards
// (photo, category badge, outlined number), a help-me-choose panel and the closing CTA.
import { useMemo, useRef, useState } from "react";
import { Check, HeartHandshake, Layers, PackageSearch, Search, Sparkles, X } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { c as getPackages, o as getCategories, AnimatedHeading } from "../site.jsx";
import { Actions, ArrowLink, FinalCta, Hero, SectionHead, callAction, lineAction, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";

export default function Packages() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  const [category, setCategory] = useState("all");
  const all = useMemo(() => getPackages(th), [th]);
  const categories = useMemo(() => getCategories(th), [th]);
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  // category and search narrow the list together; search looks at the name, description and category
  const shown = all.filter((item) => (category === "all" || item.category === category)
    && (!needle || `${item.name} ${item.desc} ${item.category}`.toLowerCase().includes(needle)));
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("โปรแกรมสุขภาพและแพ็กเกจ", "Health Programs & Packages"),
    description: copy("เลือกแพ็กเกจที่เหมาะกับความต้องการของครอบครัวคุณ", "Find the package that fits your family."),
  });
  const tabs = [{ key: "all", label: copy("ทั้งหมด", "All"), count: all.length }, ...categories.map((name) => ({ key: name, label: name, count: all.filter((item) => item.category === name).length }))];

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="band"
      photos={categories.map((name) => all.find((item) => item.category === name && item.photo)).filter(Boolean).map((item) => ({ src: photoSrc(item.photo, true), label: item.category }))}
      badges={[
        { icon: <Layers />, value: copy(`${all.length} แพ็กเกจ`, `${all.length} packages`), label: copy(`ใน ${categories.length} หมวด`, `in ${categories.length} categories`) },
        { icon: <HeartHandshake />, value: copy("ปรึกษาฟรี", "Free advice"), label: copy("ก่อนตัดสินใจ", "first") },
        { icon: <Sparkles />, value: copy("ปรับได้", "Tailored"), label: copy("ตามความต้องการ", "to your needs") },
      ]}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("แพ็กเกจ", "Packages") }]}
      eyebrow="KMC HOSPITAL / HEALTH PROGRAMS & PACKAGES" title={copy("แพ็กเกจสุขภาพ", "Health packages")} accent={copy("ที่เหมาะกับครอบครัวคุณ", "that fit your family")}
      lead={copy("ตรวจสุขภาพ ฟื้นฟู ดูแลผู้สูงอายุ และดูแลที่บ้าน ให้ทีมช่วยวางแผนที่เหมาะกับคุณ", "Check-ups, rehabilitation, elderly and home care, with a plan shaped around you.")}
      actions={<Actions items={[lineAction(th), callAction(th)]} placement="packages-hero" />} />

    <section id="pkg-list" className="sr-wrap sr-section">
      <div data-sr-reveal><SectionHead eyebrow="CHOOSE YOUR PACKAGE" title={copy("แพ็กเกจทั้งหมด", "All packages")} />
        <form className="kv2-search kv2-pkg-search" role="search" onSubmit={(event) => event.preventDefault()}>
          <Search size={20} />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy("ค้นหาแพ็กเกจ เช่น ผู้สูงอายุ วัคซีน กายภาพ", "Search packages, e.g. senior, vaccine, physio")} aria-label={copy("ค้นหาแพ็กเกจ", "Search packages")} />
          {query && <button type="button" onClick={() => setQuery("")} aria-label={copy("ล้างคำค้น", "Clear search")} title={copy("ล้างคำค้น", "Clear search")}><X size={16} /></button>}
        </form>
        {needle && <p className="kv2-search-hint" aria-live="polite">{copy(`พบ ${shown.length} แพ็กเกจ`, `${shown.length} packages found`)}</p>}
      </div>
      <div className="kv2-pkg-layout">
      <div className="kv2-pkg-main">
      {shown.length > 0
        // keyed so the cards rise in again for every category
        ? <div key={`${category}-${needle}`} className="kv2-pkg-grid">{shown.map((item, index) => <article className="sr-package kv2-rise" style={{ "--i": Math.min(index, 8) }} key={item.key}>
          <div className="sr-package__media">
            {item.image ? <img src={item.image} alt="" loading="lazy" /> : item.photo ? <img src={photoSrc(item.photo)} alt="" loading="lazy" /> : null}
            {item.category && <span className="kv2-badge">{item.category}</span>}
          </div>
          <div className="sr-package__body">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            {item.price && <p className="kv2-price">{item.price}</p>}
            <ArrowLink to={`/packages/${item.key}`}>{copy("ดูรายละเอียด", "View details")}</ArrowLink>
          </div>
        </article>)}</div>
        : <div className="kv2-empty"><PackageSearch /><h3>{needle ? copy("ไม่พบแพ็กเกจที่ตรงกับคำค้น", "No packages match your search") : copy("ไม่พบแพ็กเกจในหมวดนี้", "No packages in this category yet")}</h3><p>{copy("ลองใช้คำอื่นหรือเลือกหมวดอื่น หรือสอบถามทีมงานผ่าน LINE", "Try another word or category, or ask our team on LINE.")}</p></div>}
      </div>
      {/* category filter: a sticky sidebar on wide screens, a swipeable row above the cards on phones */}
      <aside className="kv2-pkg-side">
        <div><p className="kv2-pkg-side__title">{copy("หมวดแพ็กเกจ", "Categories")}</p><p className="kv2-pkg-side__lead">{copy("กรองตามหมวด เพื่อดูแพ็กเกจที่ใกล้เคียงกับสิ่งที่คุณกำลังมองหา", "Filter by category to see the packages closest to what you need.")}</p></div>
        <div className="kv2-pkg-side__list" role="toolbar" aria-label={copy("หมวดแพ็กเกจ", "Package categories")}>{tabs.map((tab) => <button key={tab.key} type="button" aria-pressed={category === tab.key} className={category === tab.key ? "is-active" : ""} onClick={() => setCategory(tab.key)}><span>{tab.label}</span><small>{tab.count}</small></button>)}</div>
        <div className="kv2-pkg-side__help"><p>{copy("ไม่แน่ใจว่าแพ็กเกจไหนเหมาะ?", "Not sure which fits?")}</p><Actions items={[lineAction(th)]} placement="packages-sidebar" /></div>
      </aside>
      </div>
    </section>

    <section className="sr-fit">
      <div className="sr-wrap" data-sr-reveal><div className="sr-fit__grid">
        <div><p className="sr-eyebrow">HELP ME CHOOSE</p><AnimatedHeading as="h2" lines={[copy("ไม่แน่ใจว่า", "Not sure which"), copy("แพ็กเกจไหนเหมาะ?", "package fits?")]} /><p>{copy("บอกเราเรื่องอายุ อาการ หรือเป้าหมายด้านสุขภาพ ทีมงานจะช่วยแนะนำแพ็กเกจและแจ้งค่าบริการให้", "Tell us about age, symptoms or health goals, and our team will suggest a package and explain the fees.")}</p>
          <Actions className="kv2-fit-actions" items={[lineAction(th), callAction(th)]} placement="packages-help" /></div>
        <ul data-sr-stagger>{[
          copy("ปรึกษาฟรีก่อนตัดสินใจ ไม่มีข้อผูกมัด", "A free conversation before you decide, no commitment"),
          copy("ปรับรายการในแพ็กเกจให้เหมาะกับแต่ละคนได้", "Package items can be adjusted for each person"),
          copy("สอบถามเงื่อนไขประกันและโปรโมชันปัจจุบันได้", "Ask about insurance terms and current offers"),
          copy("นัดวันเข้ารับบริการได้ทันทีหลังพูดคุย", "Book your date right after the conversation"),
        ].map((item) => <li key={item}><Check size={18} /><span>{item}</span></li>)}</ul>
      </div></div>
    </section>

    <FinalCta title={copy("เริ่มดูแลสุขภาพกับแพ็กเกจที่ใช่", "Start with the package that fits")} lead={copy("พูดคุยกับทีม KMC Hospital เรื่องแพ็กเกจและค่าบริการ", "Talk to the KMC Hospital team about packages and fees")} actions={[lineAction(th), callAction(th)]} placement="packages-final" />
  </div>;
}
