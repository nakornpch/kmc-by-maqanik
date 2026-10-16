// /blog (Knowledge Center) in the v2 page style: centred editorial hero, news / FAQ switch, category
// chips, the latest article as a wide feature card, the rest as cards, and the closing CTA.
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { r as allQuestions } from "../site.jsx";
import { r as postsFor } from "./posts.jsx";
import SwipeRow from "../components/v2/SwipeRow.jsx";
import FaqGroups from "../components/v2/FaqGroups.jsx";
import { FinalCta, Hero, SectionHead, callAction, lineAction, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";
import { PostCard, PostMeta, fallbackPhotos } from "../components/v2/blogParts.jsx";

// FAQPage structured data while the FAQ tab is open
function useFaqJsonLd(active, th) {
  useEffect(() => {
    const id = "faq-jsonld";
    document.getElementById(id)?.remove();
    if (!active) return;
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allQuestions.map((item) => ({ "@type": "Question", name: th ? item.th.q : item.en.q, acceptedAnswer: { "@type": "Answer", text: th ? item.th.a : item.en.a } })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [active, th]);
}

export default function Blog() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  const [tab, setTab] = useState("news");
  const [category, setCategory] = useState(null);
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("ศูนย์ความรู้ / บทความ", "Knowledge Center"),
    description: copy("บทความสุขภาพ ข่าวสาร และคำถามที่พบบ่อยเกี่ยวกับการดูแลผู้สูงอายุ การฟื้นฟูสมรรถภาพ และบริการของ KMC Hospital", "Health articles, hospital news, and frequently asked questions about elderly care, rehabilitation, and KMC Hospital services."),
  });
  useFaqJsonLd(tab === "faq", th);
  const posts = postsFor(th);
  const categories = [...new Set(posts.flatMap((post) => post.categories))];
  const shown = category ? posts.filter((post) => post.categories.includes(category)) : posts;
  const [feature, ...rest] = shown;
  const tabs = [{ key: "news", label: copy("บทความและข่าวสาร", "Articles & news") }, { key: "faq", label: copy("คำถามที่พบบ่อย", "FAQ") }];

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="editorial" photos={[...posts.map((post) => post.image).filter(Boolean), ...fallbackPhotos.map((name) => photoSrc(name))].slice(0, 3)}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("ศูนย์ความรู้", "Knowledge Center") }]}
      eyebrow="KMC HOSPITAL / KNOWLEDGE CENTER" title={copy("ศูนย์ความรู้", "Knowledge Center")} accent={copy("เรื่องสุขภาพที่ใช้ได้จริง", "Health know-how you can use")}
      lead={copy("ข่าวสาร บทความสุขภาพ และคำถามที่พบบ่อย รวมไว้ในที่เดียว", "News, health articles, and frequently asked questions in one place.")} />

    <section className="sr-wrap sr-section kv2-blog">
      <div className="kv2-blog__bar" data-sr-reveal>
        <div className="kv2-switch kv2-switch--light" role="group" aria-label={copy("ประเภทเนื้อหา", "Content type")}>{tabs.map((item) => <button key={item.key} type="button" aria-pressed={tab === item.key} onClick={() => setTab(item.key)}>{item.label}</button>)}</div>
        {tab === "news" && categories.length > 0 && <SwipeRow className="kv2-cats" isTh={th} role="group" aria-label={copy("หมวดบทความ", "Article categories")}>
          <button type="button" aria-pressed={category === null} onClick={() => setCategory(null)}>{copy("ทั้งหมด", "All")}</button>
          {categories.map((name) => <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
        </SwipeRow>}
      </div>

      {tab === "news" ? (feature
        ? <div key={category || "all"}>
          <Link to={`/blog/${feature.slug}`} className="kv2-feature kv2-rise">
            <div className="kv2-feature__media"><img src={feature.image || photoSrc(fallbackPhotos[0])} alt={feature.imageAlt || ""} /><span className="kv2-badge">{copy("บทความล่าสุด", "Latest")}</span></div>
            <div className="kv2-feature__body"><p className="sr-eyebrow">{feature.categories.join(" · ") || "ARTICLE"}</p><h3>{feature.title}</h3><p>{feature.excerpt}</p><PostMeta post={feature} th={th} /><span className="sr-package__link">{copy("อ่านบทความ", "Read article")}<ArrowUpRight size={20} /></span></div>
          </Link>
          {rest.length > 0 && <div className="kv2-post-grid">{rest.map((post, index) => <PostCard key={post.slug} post={post} index={index + 1} th={th} />)}</div>}
        </div>
        : <div className="kv2-empty"><Newspaper /><h3>{copy("ยังไม่มีบทความเผยแพร่", "No articles published yet")}</h3><p>{copy("บทความจากทีมแพทย์และนักบำบัดของเราจะแสดงที่นี่เร็ว ๆ นี้ ระหว่างนี้ดูคำถามที่พบบ่อยได้", "Articles from our doctors and therapists will appear here soon. Meanwhile, browse the FAQ.")}</p><button type="button" className="sr-button" onClick={() => setTab("faq")}>{copy("ดูคำถามที่พบบ่อย", "Browse the FAQ")}</button></div>)
        : <div className="kv2-faq-page kv2-blog-faq"><SectionHead eyebrow="YOUR QUESTIONS" title={copy("คำถามที่พบบ่อย", "Frequently asked questions")} lead={copy("คำตอบเรื่องการเตรียมตัว ค่าใช้จ่าย และการดูแลที่ครอบครัวถามบ่อยที่สุด", "Answers about preparation, costs and care that families ask most.")} /><FaqGroups isTh={th} /></div>}
    </section>

    <FinalCta eyebrow="TALK TO OUR TEAM" title={copy("มีคำถามเรื่องสุขภาพ? คุยกับเราได้", "Have a health question? Talk to us")} lead={copy("ทีมงานพร้อมให้คำแนะนำทาง LINE และโทรศัพท์", "Our team is here to help on LINE or by phone.")} actions={[lineAction(th), callAction(th)]} placement="blog-final" />
  </div>;
}
