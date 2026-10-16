// Shared building blocks for the v2 inner pages (services, packages, facilities, corporate,
// blog, about, contact, FAQ, legal), lifted from the stroke rehab page so every page shares
// its hero, section heads, cards, FAQ, closing CTA and reveal effects. Styles: v2-base.css
// (the stroke page's design system) plus v2-pages.css (additions for the other pages).
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ChevronRight as Chevron, Phone, Play, Plus, X } from "lucide-react";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { AnimatedHeading, lineUrl, phoneNumber } from "../../site.jsx";
import "../../styles/v2-base.css";
import "../../styles/v2-pages.css";
import "../../styles/v2-heroes.css";

// a function, not a constant: site.jsx imports the stroke page (and so this file) before phoneNumber exists
export const telHref = () => `tel:${phoneNumber.replace(/-/g, "")}`;

// fade-up reveal for [data-sr-reveal] blocks, one-after-another for [data-sr-stagger] lists,
// and the hero's --sr-scroll (drives the floating tags' parallax)
export function useKv2Effects(root, hero) {
  useEffect(() => {
    const element = root.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    const blocks = element.querySelectorAll("[data-sr-reveal]");
    blocks.forEach((block) => { block.classList.add("sr-reveal"); observer.observe(block); });
    const lists = element.querySelectorAll("[data-sr-stagger]");
    lists.forEach((list) => {
      [...list.children].forEach((child, index) => child.style.setProperty("--si", Math.min(index, 8)));
      list.classList.add("sr-stagger");
      observer.observe(list);
    });
    return () => {
      observer.disconnect();
      blocks.forEach((block) => block.classList.remove("sr-reveal", "is-visible"));
      lists.forEach((list) => list.classList.remove("sr-stagger", "is-visible"));
    };
  }, [root]);

  useEffect(() => {
    if (!hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
  }, [hero]);
}

// LINE glyph, same as the floating LINE button
export function LineIcon({ size = 20 }) {
  return <svg className="sr-line-icon" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 5.66 2 10.15c0 4.02 3.58 7.39 8.42 8.03.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.07-.46 5.8-3.42 7.92-5.85C21.44 13.5 22 11.9 22 10.15 22 5.66 17.52 2 12 2zm-3.3 10.6H7.05a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v3.7h1.25a.4.4 0 1 1 0 .8zm2.1 0h-.8a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v4.1a.4.4 0 0 1-.4.4zm4.65-.4a.4.4 0 0 1-.72.24l-1.88-2.56v2.32a.4.4 0 1 1-.8 0V8.1c0-.18.12-.34.29-.38a.4.4 0 0 1 .43.14l1.88 2.56V8.1a.4.4 0 1 1 .8 0v4.1zm2.65.4h-1.65a.4.4 0 0 1-.4-.4V8.1a.4.4 0 0 1 .4-.4h1.65a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8z" />
  </svg>;
}

// the two arcs of the KMC "K" mark, as on the homepage hero
export function KArcs({ className = "" }) {
  return <svg className={`sr-arcs ${className}`} viewBox="0 0 800 800" aria-hidden="true">
    <path d="M266.62,0H0c0,441.86,358.13,799.99,799.99,799.99v-266.62C505.41,533.38,266.62,294.59,266.62,0Z" />
    <path d="M800,266.62V0C358.14,0,0,358.13,0,799.99h266.62c0-294.58,238.79-533.37,533.38-533.38Z" />
  </svg>;
}

// a link that is a router Link for in-site paths and an <a> for LINE, tel: and other URLs
export function SmartLink({ to, href, children, ...props }) {
  if (to) return <Link to={to} {...props}>{children}</Link>;
  const external = href && !href.startsWith("tel:") && !href.startsWith("#");
  return <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>{children}</a>;
}

// primary (navy / white on dark) + outline buttons; a LINE href gets the LINE glyph, a tel: a phone
export function Actions({ items, placement, className = "" }) {
  return <div className={`sr-actions ${className}`} data-cta-placement={placement}>
    {items.filter(Boolean).map((item, index) => {
      const isLine = item.href?.includes("line.me");
      const isTel = item.href?.startsWith("tel:");
      return <SmartLink key={item.label} to={item.to} href={item.href} className={`sr-button${index > 0 ? " sr-button--outline" : ""}`}>
        {isLine && <LineIcon />}{isTel && <Phone size={18} />}{item.label}{!isLine && !isTel && <ArrowUpRight size={19} />}
      </SmartLink>;
    })}
  </div>;
}

// the usual pair: book / talk on LINE
export function lineAction(isTh, label) {
  return { href: lineUrl, label: label || (isTh ? "สอบถามผ่าน LINE" : "Ask us on LINE") };
}
export function callAction(isTh) {
  return { href: telHref(), label: isTh ? `โทร ${phoneNumber}` : `Call ${phoneNumber}` };
}

// small trail above the hero headline: [{ to, label }], the last item is the current page
export function Crumbs({ items, isTh }) {
  return <nav className="kv2-crumbs" aria-label={isTh ? "เส้นทางหน้า" : "Breadcrumb"}>
    <ol>{items.map((item, index) => <li key={item.label}>
      {index > 0 && <Chevron size={14} aria-hidden="true" />}
      {item.to && index < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </li>)}</ol>
  </nav>;
}

// Hero. Each kind of page has its own `variant`:
//   "photo"     full-bleed navy photo hero with floating tags (service pages, as the stroke page);
//               size "full" | "compact"; "plain" drops the photo (articles)
//   "mosaic"    navy, text beside a four-photo mosaic (services index)          photos: [src]
//   "split"     light, text beside a framed photo with floating badges (packages)  photo, badges
//   "band"      short light band, text beside an endless carousel of round photos and fact chips (packages)  photos: [{ src, label }], badges
//   "summary"   short navy band, text beside a large square photo that hangs over the bottom edge (package detail)  photo
//   "arch"      navy, text beside an arch-shaped photo and a floating card     photo, aside
//   "panorama"  background slideshow (slow zoom-out) with an up-next strip of thumbnails (facilities)  photos: [{ src, thumb, label }]
//   "duo"       half navy text, half full-height photo (corporate)              photo
//   "editorial" light, centred, a fan of three photo cards (blog)               photos: [src]
//   "center"    full photo, centred text (about); scatter: up to six photo cards around it  photo, scatter
//   "stage"     solid tone colour with the K arcs, centred text, a key photo hanging over the bottom edge (corporate)  photo, tone
//   "tiles"     light, text beside quick-contact tiles (contact)                aside
//   "search"    light, centred, with a search box as children (FAQ)
//   "document"  light minimal document header (legal)
// before: content above the eyebrow (e.g. a switch); tags (photo variant): up to three { label, photo }
export function Hero(props) {
  const { variant = "photo" } = props;
  if (variant === "photo") return <PhotoHero {...props} />;
  const { heroRef, photo, photoAlt = "", photos = [], badges, aside, title, isTh, tone, scatter } = props;
  const long = typeof title === "string" && title.length > 38;
  const light = ["split", "band", "editorial", "tiles", "search", "document"].includes(variant);
  const text = <HeroText {...props} />;
  return <section ref={heroRef} className={`kv2-h kv2-h--${variant}${light ? " kv2-h--light" : " kv2-h--dark"}${long ? " kv2-h--long" : ""}${tone ? ` kv2-tone-${tone}` : ""}`}>
    {variant === "mosaic" && <div className="sr-wrap kv2-h__grid">{text}<div className="kv2-h__mosaic" aria-hidden="true">{photos.slice(0, 4).map((src, index) => <img key={src} src={src} alt="" style={{ "--i": index }} fetchPriority={index === 0 ? "high" : undefined} />)}</div></div>}
    {variant === "split" && <div className="sr-wrap kv2-h__grid">{text}<figure className="kv2-h__frame"><img src={photo} alt={photoAlt} fetchPriority="high" />
      {badges?.length > 0 && <ul className="kv2-h__badges">{badges.map((badge, index) => <li key={badge.label} style={{ "--i": index }}>{badge.icon}<span><b>{badge.value}</b>{badge.label}</span></li>)}</ul>}</figure></div>}
    {variant === "band" && <div className="sr-wrap kv2-h__grid kv2-h__grid--band">{text}
      <div className="kv2-h__side">
        {/* circles drift right-to-left forever: the list is rendered twice so the loop is seamless */}
        <div className="kv2-h__marquee" aria-hidden="true"><ul style={{ "--n": photos.length }}>{[...photos, ...photos].map((item, index) => <li key={index}><img src={item.src} alt="" fetchPriority={index === 0 ? "high" : undefined} loading={index < 4 ? undefined : "lazy"} /><span>{item.label}</span></li>)}</ul></div>
        {badges?.length > 0 && <ul className="kv2-h__chips">{badges.map((badge) => <li key={badge.label}>{badge.icon}<b>{badge.value}</b><span>{badge.label}</span></li>)}</ul>}
      </div></div>}
    {variant === "summary" && <div className="sr-wrap kv2-h__grid kv2-h__grid--summary">{text}<figure className="kv2-h__summary">{photo && <img src={photo} alt={photoAlt} fetchPriority="high" />}</figure></div>}
    {variant === "arch" && <div className="sr-wrap kv2-h__grid">{text}<figure className="kv2-h__arch"><img src={photo} alt={photoAlt} fetchPriority="high" />{aside && <div className="kv2-h__float">{aside}</div>}</figure></div>}
    {variant === "panorama" && <PanoramaSlides slides={photos} isTh={isTh} text={text} />}
    {variant === "duo" && <div className="kv2-h__duo"><div className="kv2-h__duo-text">{text}</div><div className="kv2-h__duo-photo"><img src={photo} alt={photoAlt} fetchPriority="high" /></div></div>}
    {variant === "editorial" && <div className="sr-wrap kv2-h__center">{text}{photos.length > 0 && <div className="kv2-h__fan" aria-hidden="true">{photos.slice(0, 3).map((src, index) => <img key={src} src={src} alt="" style={{ "--i": index }} />)}</div>}</div>}
    {variant === "stage" && <>
      <div className="kv2-h__clip" aria-hidden="true"><KArcs className="kv2-stage__arcs kv2-stage__arcs--right" /><KArcs className="kv2-stage__arcs kv2-stage__arcs--left" /></div>
      <div className="sr-wrap kv2-h__center">{text}</div>
      <div className="sr-wrap"><figure className="kv2-stage__photo"><img key={photo} src={photo} alt={photoAlt} fetchPriority="high" /></figure></div>
    </>}
    {variant === "center" && <><img key={photo} className="kv2-h__bg" src={photo} alt={photoAlt} fetchPriority="high" />
      {/* optional photo cards scattered left and right of the text, drifting at their own speed on scroll */}
      {scatter?.length > 0 && <ul className="kv2-scatter" aria-hidden="true">{scatter.slice(0, 6).map((src, index) => <li key={src} style={{ "--i": index }}><img src={src} alt="" loading="lazy" /></li>)}</ul>}
      <div className="sr-wrap kv2-h__center">{text}</div></>}
    {variant === "tiles" && <div className="sr-wrap kv2-h__grid">{text}<div className="kv2-h__tiles">{aside}</div></div>}
    {(variant === "search" || variant === "document") && <div className={`sr-wrap ${variant === "search" ? "kv2-h__center" : ""}`}>{text}</div>}
    {/* arcs sit in their own clipping layer, so a hero (summary) can let its photo hang over the bottom edge */}
    {(!light || variant === "split" || variant === "band") && variant !== "stage" && <div className="kv2-h__clip" aria-hidden="true"><KArcs className="kv2-h__arcs" /></div>}
  </section>;
}

// panorama hero: the background cross-fades through `slides`, each one slowly zooming out; the strip
// below lists every slide in a fixed order, the one on screen in full colour with a progress bar and
// the rest faded, and
// clicking a thumbnail jumps to it. Pauses while hovered; no auto-play when motion is reduced.
const SLIDE_MS = 6500;
function PanoramaSlides({ slides, isTh, text }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still] = useState(() => typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);
  const count = slides.length;
  useEffect(() => {
    if (still || paused || count < 2) return;
    const timer = setTimeout(() => setCurrent((index) => (index + 1) % count), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [current, paused, still, count]);
    return <div className="kv2-pano" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} style={{ "--slide-ms": `${SLIDE_MS}ms` }} data-paused={paused || still || undefined}>
    <div className="kv2-pano__bg" aria-hidden="true">{slides.map((slide, index) => <img key={slide.src} src={slide.src} alt="" className={index === current ? "is-active" : ""} fetchPriority={index === 0 ? "high" : undefined} loading={index === 0 ? undefined : "lazy"} />)}</div>
    <div className="sr-wrap kv2-h__bottom">{text}</div>
    {/* top-right: the area on screen, with a ring that fills over the slide's time (keyed to restart) */}
    {count > 1 && <p key={current} className="kv2-pano__now"><svg className="kv2-pano__ring" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="9" pathLength="100" /></svg>{slides[current].label}</p>}
    {count > 1 && <div className="sr-wrap">
      {/* thumbnails stay in a fixed order; the one on screen is highlighted (and fills a progress bar) */}
      <ul className="kv2-h__strip kv2-pano__strip" style={{ "--n": count }}>{slides.map((slide, index) => <li key={slide.src} style={{ "--i": index }} className={index === current ? "is-current" : undefined}>
        <button type="button" onClick={() => setCurrent(index)} aria-label={`${isTh ? "แสดงภาพ" : "Show"} ${slide.label}`} aria-current={index === current || undefined}>
          <img src={slide.thumb || slide.src} alt="" loading="lazy" />
          {index === current && <i key={current} className="kv2-pano__progress" aria-hidden="true" />}
          <span>{slide.label}</span>
        </button>
      </li>)}</ul>
    </div>}
  </div>;
}

function HeroText({ crumbs, before, eyebrow, title, accent, lead, actions, children, isTh }) {
  return <div className="kv2-h__text">
    {crumbs && <Crumbs items={crumbs} isTh={isTh} />}
    {before}
    {eyebrow && <p className="sr-eyebrow">{eyebrow}</p>}
    <h1>{title}{accent && <span><span className="sr-accent">{accent}</span></span>}</h1>
    {lead && <p className="kv2-h__lead">{lead}</p>}
    {actions}
    {children}
  </div>;
}

function PhotoHero({ heroRef, before, size = "full", photo, photoAlt = "", photoPosition, mirror = true, crumbs, eyebrow, title, accent, lead, actions, tags, children, isTh }) {
  // long headlines (corporate, package and article titles) step down a size
  const long = typeof title === "string" && title.length > 38;
  return <section ref={heroRef} className={`sr-hero kv2-hero kv2-hero--${size}${mirror ? "" : " kv2-hero--unmirrored"}${long ? " kv2-hero--long" : ""}`}>
    {photo && size !== "plain" && <img className="sr-hero__photo" src={photo} alt={photoAlt} fetchPriority="high" style={photoPosition ? { objectPosition: photoPosition } : undefined} />}
    <div className="sr-hero__body sr-wrap">
      {crumbs && <Crumbs items={crumbs} isTh={isTh} />}
      {before}
      {eyebrow && <p className="sr-eyebrow">{eyebrow}</p>}
      <h1>{title}{accent && <span><span className="sr-accent">{accent}</span></span>}</h1>
      {lead && <p className="sr-hero__lead">{lead}</p>}
      {actions}
      {children}
    </div>
    <KArcs className="sr-arcs--hero" />
    {tags?.length > 0 && <ul className="sr-hero__tags sr-wrap">{tags.slice(0, 3).map((tag, index) => <li key={tag.label} style={{ "--i": index }}><div className="sr-tag">
      {tag.photo ? <img className="sr-tag__photo" src={tag.photo} alt="" loading="lazy" /> : <i className="sr-tag__photo kv2-tag__blank" aria-hidden="true" />}<i className="sr-tag__line" aria-hidden="true" /><span>{tag.label}</span>
    </div></li>)}</ul>}
  </section>;
}

// floating pill bar of in-page anchors, over the hero's bottom edge. Once it scrolls away, a slim copy
// pins under the main header: it highlights the section on screen and slides to keep that item in
// view; it can be swiped or stepped with the arrows, and clicking an item scrolls to its section.
// With a `title`, desktop also swaps the main header's menu for that title while the bar is pinned.
export function SectionNav({ label, items, title, titleEn, isTh }) {
  const inline = useRef(null);
  const bar = useRef(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(items[0]?.href);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
      document.documentElement.style.setProperty("--kv2-header", `${Math.round(header)}px`);
      // the hero pill bar is hidden on phones: fall back to the bottom of the hero above it
      const own = inline.current?.getBoundingClientRect();
      const edge = own && own.height > 0 ? own.bottom : inline.current?.previousElementSibling?.getBoundingClientRect().bottom ?? 0;
      setPinned(edge < header);
      // the active section is the last one whose top has passed a line about a third of the way down
      const line = Math.max(header + 140, window.innerHeight * 0.35);
      let current = items[0]?.href;
      items.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= line) current = item.href;
      });
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [items]);

  // desktop: while pinned, the header menu gives way to the page title (styles key off this attribute)
  useEffect(() => {
    if (!title) return;
    const root = document.documentElement;
    if (pinned) root.setAttribute("data-kv2-compact", ""); else root.removeAttribute("data-kv2-compact");
    return () => root.removeAttribute("data-kv2-compact");
  }, [pinned, title]);

  // keep the active item centred in the pinned bar, and track whether more items hide at either end
  const list = () => bar.current?.querySelector(".kv2-subnav__list");
  const measure = () => {
    const element = list();
    if (!element) return;
    const max = element.scrollWidth - element.clientWidth;
    setEdges({ start: element.scrollLeft > 2, end: max > 2 && element.scrollLeft < max - 2 });
  };
  useEffect(() => {
    const element = list();
    const link = element?.querySelector(`[href="${active}"]`);
    if (element && link) element.scrollTo({ left: link.offsetLeft - (element.clientWidth - link.offsetWidth) / 2, behavior: pinned ? "smooth" : "auto" });
  }, [active, pinned]);
  useEffect(() => { measure(); }, [pinned]);
  const step = (direction) => list()?.scrollBy({ left: direction * 220, behavior: "smooth" });

  const links = (pinnedCopy) => items.map((item) => <a key={item.href} href={item.href} className={active === item.href ? "is-active" : undefined}
    aria-current={pinnedCopy && active === item.href ? "location" : undefined} tabIndex={pinnedCopy && !pinned ? -1 : undefined}>{item.label}</a>);

  return <>
    {title && <button type="button" className={`kv2-header-title${pinned ? " is-on" : ""}`} aria-hidden={!pinned} tabIndex={pinned ? undefined : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} title={isTh ? "กลับขึ้นด้านบน" : "Back to top"}>
      <small>{isTh ? "บริการ" : "Service"}</small><span>{title}{titleEn && titleEn !== title && <em> ({titleEn})</em>}</span>
    </button>}
    <nav ref={inline} className="sr-section-nav" aria-label={label}><div>{links(false)}</div></nav>
    <div ref={bar} className={`kv2-subnav${pinned ? " is-on" : ""}`} aria-hidden={!pinned}>
      <div className="sr-wrap kv2-subnav__inner">
        <button type="button" className={`kv2-subnav__arrow${edges.start ? " is-on" : ""}`} onClick={() => step(-1)} tabIndex={-1} aria-hidden="true"><ChevronLeft size={18} /></button>
        <nav className="kv2-subnav__list" aria-label={label} onScroll={measure} data-fade-start={edges.start || undefined} data-fade-end={edges.end || undefined}>{links(true)}</nav>
        <button type="button" className={`kv2-subnav__arrow${edges.end ? " is-on" : ""}`} onClick={() => step(1)} tabIndex={-1} aria-hidden="true"><ChevronRight size={18} /></button>
      </div>
    </div>
  </>;
}

// eyebrow + animated heading on the left, a lead paragraph (or a link) on the right
export function SectionHead({ eyebrow, title, lines, as = "h2", lead, children, className = "" }) {
  return <div className={`sr-section-head ${className}`}>
    <div>{eyebrow && <p className="sr-eyebrow">{eyebrow}</p>}<AnimatedHeading as={as} {...(lines ? { lines } : { text: title })} /></div>
    {lead && <p>{lead}</p>}
    {children}
  </div>;
}

// question list styled as the stroke FAQ: an intro column (sticky) and the answers
export function FaqBlock({ id, eyebrow, title, lead, items, name, isTh, showPhone = true, className = "" }) {
  if (!items?.length) return null;
  return <section id={id} className={`sr-wrap sr-section sr-faq ${className}`} data-sr-reveal>
    <div>
      <p className="sr-eyebrow">{eyebrow || "YOUR QUESTIONS"}</p>
      <AnimatedHeading as="h2" text={title || (isTh ? "คำถามที่พบบ่อย" : "Frequently asked questions")} />
      <p>{lead || (isTh ? "ยังมีเรื่องที่อยากสอบถาม? คุยกับทีมของเราได้โดยตรง" : "Have another question? Talk directly with our team.")}</p>
      {showPhone && <a href={telHref()} className="sr-phone"><Phone size={19} />{phoneNumber}</a>}
    </div>
    <div data-sr-stagger>{items.map((item) => <details key={item.q} name={name}><summary>{item.q}<Plus size={20} /></summary>
      <div className="kv2-answer"><p>{item.a}</p>{item.extra}</div>
    </details>)}</div>
  </section>;
}

// closing navy panel with the brand arcs
export function FinalCta({ eyebrow = "LET'S PLAN THE NEXT STEP", title, lead, actions, placement = "final" }) {
  return <section className="sr-final sr-wrap" data-sr-reveal>
    <KArcs className="sr-arcs--final" />
    <div><p className="sr-eyebrow">{eyebrow}</p><AnimatedHeading as="h2" text={title} />{lead && <p>{lead}</p>}<Actions items={actions} placement={placement} /></div>
  </section>;
}

// round-arrow link pill, as on the package cards
export function ArrowLink({ to, href, children, className = "" }) {
  return <SmartLink to={to} href={href} className={`sr-package__link ${className}`}>{children}<ArrowUpRight size={20} /></SmartLink>;
}

// full-screen viewer for photos (and clips: an item with `video` plays it, `soon` marks a clip not ready yet)
export function PhotoViewer({ items, index, setIndex, onClose, isTh }) {
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
  return <dialog ref={dialog} className="sr-viewer" aria-label={isTh ? "ภาพบรรยากาศ" : "Photos"}
    onCancel={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
    }}>
    <button type="button" className="sr-viewer__close" onClick={onClose} aria-label={isTh ? "ปิดภาพ" : "Close image"} title={isTh ? "ปิดภาพ" : "Close image"}><X /></button>
    <figure>
      {item.video
        ? <video key={item.video} src={item.video} poster={item.src} controls autoPlay playsInline aria-label={isTh ? item.th : item.en} />
        : <div className="sr-viewer__media"><img src={item.src} alt={isTh ? item.th : item.en} />{item.soon && <span className="sr-viewer__soon"><Play size={18} fill="currentColor" />{isTh ? "คลิปรีวิวเคส · เร็ว ๆ นี้" : "Case review · coming soon"}</span>}</div>}
      <figcaption>{isTh ? item.th : item.en} <span>{index + 1} / {items.length}</span></figcaption>
    </figure>
    {items.length > 1 && <div className="sr-viewer__controls">
      <button type="button" onClick={() => move(-1)} aria-label={isTh ? "ภาพก่อนหน้า" : "Previous image"} title={isTh ? "ภาพก่อนหน้า" : "Previous image"}><ChevronLeft /></button>
      <button type="button" onClick={() => move(1)} aria-label={isTh ? "ภาพถัดไป" : "Next image"} title={isTh ? "ภาพถัดไป" : "Next image"}><ChevronRight /></button>
    </div>}
  </dialog>;
}

// bento photo grid (first photo large) that opens the viewer; shows up to five photos and
// marks the last tile with how many more the viewer holds. photos: [{ src, th, en }]
export function BentoGallery({ photos, isTh, onOpen, className = "" }) {
  const shown = photos.slice(0, 5);
  const more = photos.length - shown.length;
  return <ul className={`sr-gal__grid kv2-bento ${className}`} data-count={shown.length}>{shown.map((image, index) => <li key={image.src} style={{ "--i": index }}>
    <button type="button" className="sr-gal__item" onClick={() => onOpen(photos, index)} aria-label={`${isTh ? image.th : image.en}: ${isTh ? "ดูภาพเต็มจอ" : "view full screen"}`}>
      <img src={image.src} alt="" loading="lazy" decoding="async" /><span className="sr-gal__caption">{isTh ? image.th : image.en}</span>
      {more > 0 && index === shown.length - 1 && <span className="kv2-bento__more">+{more}</span>}
    </button>
  </li>)}</ul>;
}

// "/images/photos/x/y.webp" from the short photo names used in site.jsx ("x/y")
export const photoSrc = (name, small = false) => name.startsWith("/") ? name : `/images/photos/${name}${small ? "-sm" : ""}.webp`;
