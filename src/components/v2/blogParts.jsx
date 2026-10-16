// Article card pieces shared by /blog and /blog/:slug.
import { CalendarDays, Clock } from "lucide-react";
import { ArrowLink, photoSrc } from "./kit.jsx";

export const fallbackPhotos = ["chinese/herb-jar", "physio/walking", "sleep/nurse-chat", "thai/neck", "hydro/group-class", "hospital/health-measure"];

export function formatDate(value, th, month = "short") {
  try {
    return new Date(value).toLocaleDateString(th ? "th-TH" : "en-GB", { year: "numeric", month, day: "numeric" });
  } catch {
    return "";
  }
}

// rough reading time from the article HTML (Thai has no spaces, so count characters for it)
export function readingMinutes(html = "", th) {
  const text = html.replace(/<[^>]+>/g, " ");
  return Math.max(1, Math.round(th ? text.replace(/\s+/g, "").length / 500 : text.split(/\s+/).filter(Boolean).length / 200));
}

export function PostMeta({ post, th }) {
  return <p className="kv2-post-meta">
    <span><CalendarDays size={15} />{formatDate(post.date, th)}</span>
    {post.content && <span><Clock size={15} />{th ? `อ่าน ${readingMinutes(post.content, th)} นาที` : `${readingMinutes(post.content, th)} min read`}</span>}
  </p>;
}

export function PostCard({ post, index, th }) {
  return <article className="sr-package kv2-rise" style={{ "--i": Math.min(index, 8) }}>
    <div className="sr-package__media"><img src={post.image || photoSrc(fallbackPhotos[index % fallbackPhotos.length])} alt={post.imageAlt || ""} loading="lazy" />{post.categories[0] && <span className="kv2-badge">{post.categories[0]}</span>}</div>
    <div className="sr-package__body"><h3>{post.title}</h3><p>{post.excerpt}</p><PostMeta post={post} th={th} /><ArrowLink to={`/blog/${post.slug}`}>{th ? "อ่านบทความ" : "Read article"}</ArrowLink></div>
  </article>;
}
