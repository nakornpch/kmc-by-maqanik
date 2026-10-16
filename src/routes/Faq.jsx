// /faq in the v2 page style: light hero with a search box that filters the questions, a jump bar
// as an intro column beside its questions, and the closing CTA.
import { useRef, useState } from "react";
import { SearchX, Search } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { i as faqGroups } from "../site.jsx";
import FaqGroups from "../components/v2/FaqGroups.jsx";
import { FinalCta, Hero, SectionNav, callAction, lineAction, useKv2Effects } from "../components/v2/kit.jsx";

export default function Faq() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("คำถามที่พบบ่อย", "Frequently Asked Questions"),
    description: copy("รวมคำตอบเรื่องการเตรียมตัว ค่าใช้จ่าย และการดูแลที่ครอบครัวถามบ่อยที่สุด", "Answers about preparation, costs, and care that families ask most."),
  });
  const contact = [lineAction(th), callAction(th)];
  // the hero search filters questions and answers in either language field shown
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const groups = needle ? faqGroups.map((group) => ({ ...group, items: group.items.filter((item) => {
    const text = item[th ? "th" : "en"];
    return `${text.q} ${text.a}`.toLowerCase().includes(needle);
  }) })).filter((group) => group.items.length) : faqGroups;
  const found = groups.reduce((sum, group) => sum + group.items.length, 0);
  const suggestions = th ? ["ประกัน", "ราคา", "ผู้สูงอายุ", "นัดหมาย"] : ["insurance", "price", "elderly", "appointment"];
  // "Hospital (โรงพยาบาล)" reads as "โรงพยาบาล" in the jump bar
  const short = (group) => (th ? group.th : group.en).replace(/^.*\((.+)\)$/, "$1");

  return <div ref={root} className="kv2 kv2-faq-page">
    <Hero heroRef={hero} isTh={th} variant="search"
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("คำถามที่พบบ่อย", "FAQ") }]}
      eyebrow="KMC HOSPITAL / FAQ" title={copy("มีคำถามอะไร", "How can we")} accent={copy("ให้เราช่วยตอบ?", "help you today?")}
      lead={copy("รวมคำตอบเรื่องการเตรียมตัว ค่าใช้จ่าย และการดูแลที่ครอบครัวถามบ่อยที่สุด", "Answers about preparation, costs, and care that families ask most.")}>
      <form className="kv2-search" role="search" onSubmit={(event) => { event.preventDefault(); document.querySelector(".kv2-faq-list")?.scrollIntoView({ behavior: "smooth" }); }}>
        <Search size={20} />
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy("ค้นหาคำถาม เช่น ประกัน ราคา การนัดหมาย", "Search, e.g. insurance, price, appointments")} aria-label={copy("ค้นหาคำถาม", "Search questions")} />
        <button type="submit">{copy("ค้นหา", "Search")}</button>
      </form>
      {needle ? <p className="kv2-search-hint" aria-live="polite">{copy(`พบ ${found} คำถาม`, `${found} questions found`)}</p>
        : <div className="kv2-search-chips">{suggestions.map((word) => <button key={word} type="button" onClick={() => setQuery(word)}>{word}</button>)}</div>}
    </Hero>
    {!needle && <SectionNav label={copy("หมวดคำถาม", "Question groups")} items={faqGroups.map((group) => ({ href: `#faq-${group.key}`, label: short(group) }))} />}
    <div className="kv2-faq-list">{groups.length > 0 ? <FaqGroups isTh={th} groups={groups} />
      : <div className="sr-wrap"><div className="kv2-empty"><SearchX /><h3>{copy("ไม่พบคำถามที่ตรงกับคำค้น", "No questions match your search")}</h3><p>{copy("ลองใช้คำอื่น หรือสอบถามทีมงานโดยตรงทาง LINE และโทรศัพท์", "Try another word, or ask our team directly on LINE or by phone.")}</p><button type="button" className="sr-button" onClick={() => setQuery("")}>{copy("ล้างคำค้น", "Clear search")}</button></div></div>}</div>
    <FinalCta eyebrow="STILL HAVE A QUESTION?" title={copy("ยังไม่พบคำตอบที่ต้องการ?", "Still have a question?")} lead={copy("ทีมงานพร้อมตอบทุกคำถามทาง LINE และโทรศัพท์", "Our team is happy to help on LINE or by phone.")} actions={contact} placement="faq-final" />
  </div>;
}
