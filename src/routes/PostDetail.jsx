// /blog/:slug in the v2 page style: plain navy hero with the title, date and reading time; the
// cover photo overlapping the hero edge; the article beside a sticky contact / share column;
// more articles and a way back to the Knowledge Center.
import { useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock, Link2 } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link, u as useParams } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import NotFound from "./NotFound.jsx";
import { n as findPost, t as allPosts } from "./posts.jsx";
import { Actions, Hero, SectionHead, callAction, lineAction, useKv2Effects } from "../components/v2/kit.jsx";
import { PostCard, formatDate, readingMinutes } from "../components/v2/blogParts.jsx";

function ShareLink({ th }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked: nothing to do */ }
  };
  return <button type="button" onClick={copy}>{copied ? <Check size={16} /> : <Link2 size={16} />}{copied ? (th ? "คัดลอกแล้ว" : "Copied") : (th ? "คัดลอกลิงก์" : "Copy link")}</button>;
}

function Article({ post, th }) {
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  useKv2Effects(root, hero);
  const more = allPosts.filter((other) => other.slug !== post.slug && other.lang === post.lang).slice(0, 3);
  const shareUrl = typeof window === "undefined" ? "" : encodeURIComponent(window.location.href);

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} size="plain"
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { to: "/blog", label: copy("ศูนย์ความรู้", "Knowledge Center") }, { label: post.title }]}
      eyebrow={post.categories.length ? post.categories.join(" · ") : "ARTICLE"} title={post.title}>
      <div className="kv2-hero__meta">
        <span><CalendarDays size={15} />{formatDate(post.date, th, "long")}</span>
        <span><Clock size={15} />{th ? `อ่าน ${readingMinutes(post.content, th)} นาที` : `${readingMinutes(post.content, th)} min read`}</span>
      </div>
    </Hero>

    <div className="sr-wrap kv2-article-wrap">
      {post.image && <figure className="kv2-article__cover"><img src={post.image} alt={post.imageAlt || ""} /></figure>}
      <div className="kv2-article">
        <article className="kv2-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
        <aside className="kv2-aside">
          <div className="kv2-aside-card">
            <p className="sr-eyebrow">TALK TO OUR TEAM</p>
            <h3>{copy("มีคำถามเรื่องนี้?", "Questions about this?")}</h3>
            <p>{copy("ทีมงานพร้อมให้คำแนะนำ และช่วยนัดหมายบริการที่เหมาะกับคุณ", "Our team can advise you and book the care that suits you.")}</p>
            <Actions items={[lineAction(th), callAction(th)]} placement="article-aside" />
          </div>
          <div className="kv2-aside-card kv2-aside-card--fog">
            <h3>{copy("แชร์บทความ", "Share this article")}</h3>
            <div className="kv2-share">
              <a href={`https://social-plugins.line.me/lineit/share?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">LINE<ArrowUpRight size={14} /></a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">Facebook<ArrowUpRight size={14} /></a>
              <ShareLink th={th} />
            </div>
          </div>
        </aside>
      </div>
    </div>

    {more.length > 0 && <section className="sr-gallery-section kv2-more" data-sr-reveal>
      <div className="sr-wrap"><SectionHead eyebrow="KEEP READING" title={copy("บทความอื่น ๆ", "More articles")}><Link to="/blog">{copy("ดูบทความทั้งหมด", "All articles")}<ArrowUpRight size={19} /></Link></SectionHead>
        <div className="kv2-post-grid">{more.map((other, index) => <PostCard key={other.slug} post={other} index={index} th={th} />)}</div>
      </div>
    </section>}
    <div className="sr-wrap kv2-back-row"><Link to="/blog" className="kv2-back"><ArrowLeft size={18} />{copy("กลับไปศูนย์ความรู้", "Back to the Knowledge Center")}</Link></div>
  </div>;
}

export default function PostDetail() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const post = findPost(slug);
  usePageMeta({
    title: post ? post.title : th ? "ไม่พบบทความ" : "Article not found",
    description: post?.excerpt,
    contentLocale: post?.lang,
  });
  if (!post) return <NotFound />;
  return <Article key={slug} post={post} th={th} />;
}
