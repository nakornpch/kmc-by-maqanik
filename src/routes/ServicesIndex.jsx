// /services, in the v2 page style: navy hero with a four-photo mosaic, then for
// each group in its own layout (cards, navy photo cards, bento, fog panel); then the trust strip and a CTA.
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { services, serviceGroups, trustPoints, AnimatedHeading } from "../site.jsx";
import { Actions, ArrowLink, FinalCta, Hero, KArcs, SectionHead, lineAction, useKv2Effects } from "../components/v2/kit.jsx";
import { groupExtras } from "../components/v2/serviceContent.js";

// which layout each service group uses
const layouts = { health: "cards", physical: "dark", care: "bento", preventive: "panel" };

export default function ServicesIndex() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("บริการ", "Services"),
    description: copy("บริการดูแลสุขภาพครบวงจร ตั้งแต่ตรวจสุขภาพ กายภาพบำบัด ถึงการดูแลและฟื้นฟูผู้สูงอายุ", "Full-spectrum care, from health screening and physical therapy to elderly rehabilitation."),
  });
  const book = { to: "/contact#appointment", label: copy("จองนัดหมาย", "Book an appointment") };
  const groupName = (group) => (th ? group.th : group.en).replace(/^หมวด/, "");

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="mosaic" photos={serviceGroups.map((group) => groupExtras[group.key].photo)}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("บริการ", "Services") }]}
      eyebrow="KMC HOSPITAL / OUR SERVICES" title={copy("บริการของเรา", "Our services")} accent={copy("ดูแลครบในที่เดียว", "All your care, in one place")}
      lead={copy("ตั้งแต่ตรวจสุขภาพ กายภาพบำบัด แพทย์แผนจีนและแผนไทย ไปจนถึงการฟื้นฟูและดูแลผู้สูงอายุ โดยทีมสหวิชาชีพเดียวกัน", "From check-ups, physiotherapy, Chinese and Thai medicine to rehabilitation and elderly care, by one multidisciplinary team.")}
      actions={<Actions items={[book, lineAction(th)]} placement="services-hero" />} />


    {/* each group gets its own layout, all borrowed from other v2 pages, so a new group reads as
        a new section at a glance: package cards / navy photo cards / bento / fog panel with rows */}
    {serviceGroups.map((group, groupIndex) => {
      const extra = groupExtras[group.key];
      const items = group.slugs.map((slug) => [slug, services[slug]]).filter(([, service]) => service)
        .map(([slug, service]) => ({ slug, image: service.images?.[0] ?? service.image, ...service[th ? "th" : "en"] }));
      const head = <SectionHead eyebrow={`0${groupIndex + 1} / ${group.en.toUpperCase()}`} title={groupName(group)} lead={th ? extra.th : extra.en} />;
      const more = copy("ดูรายละเอียด", "View details");
      const layout = layouts[group.key] ?? "cards";

      if (layout === "dark") return <section key={group.key} id={`group-${group.key}`} className="kv2-svc-band kv2-svc-band--dark" data-sr-reveal>
        <KArcs className="kv2-svc-band__arcs" />
        <div className="sr-wrap">{head}
          <div className="kv2-svc-dark" data-sr-stagger>{items.map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="kv2-photo-card kv2-svc-photo">
            {item.image && <img src={item.image} alt="" loading="lazy" decoding="async" />}
            <span className="kv2-svc-go" aria-hidden="true"><ArrowUpRight size={18} /></span>
            <h3>{item.name}</h3><p>{item.tagline}</p>
          </Link>)}</div>
        </div>
      </section>;

      if (layout === "bento") return <section key={group.key} id={`group-${group.key}`} className="kv2-svc-band sr-gallery-section" data-sr-reveal>
        <div className="sr-wrap">{head}
          <ul className="kv2-svc-bento" data-sr-stagger>{items.map((item) => <li key={item.slug}><Link to={`/services/${item.slug}`} className="kv2-svc-tile">
            {item.image && <img src={item.image} alt="" loading="lazy" decoding="async" />}
            <span className="kv2-svc-go" aria-hidden="true"><ArrowUpRight size={18} /></span>
            <span className="kv2-svc-tile__text"><h3>{item.name}</h3><p>{item.tagline}</p></span>
          </Link></li>)}</ul>
        </div>
      </section>;

      if (layout === "panel") return <section key={group.key} id={`group-${group.key}`} className="kv2-svc-band kv2-svc-band--panel" data-sr-reveal>
        <div className="sr-wrap"><div className="sr-fit__grid kv2-svc-panel">
          <div>
            <p className="sr-eyebrow">{`0${groupIndex + 1} / ${group.en.toUpperCase()}`}</p>
            <AnimatedHeading as="h2" text={groupName(group)} />
            <p>{th ? extra.th : extra.en}</p>
          </div>
          <ul data-sr-stagger>{items.map((item) => <li key={item.slug}><Link to={`/services/${item.slug}`} className="kv2-svc-row">
            <span className="kv2-svc-row__media">{item.image && <img src={item.image} alt="" loading="lazy" decoding="async" />}</span>
            <span><h3>{item.name}</h3><p>{item.tagline}</p></span>
            <span className="kv2-svc-go" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </Link></li>)}</ul>
        </div></div>
      </section>;

      return <section key={group.key} id={`group-${group.key}`} className="kv2-svc-band" data-sr-reveal>
        <div className="sr-wrap">{head}
          <div className="kv2-pkg-grid kv2-svc-grid" data-count={items.length} data-sr-stagger>{items.map((item) => <article className="sr-package" key={item.slug}>
            <div className="sr-package__media">{item.image && <img src={item.image} alt="" loading="lazy" decoding="async" />}</div>
            <div className="sr-package__body"><h3>{item.name}</h3><p>{item.tagline}</p><ArrowLink to={`/services/${item.slug}`}>{more}</ArrowLink></div>
          </article>)}</div>
        </div>
      </section>;
    })}

    <section className="sr-wrap sr-section kv2-svc-trust" data-sr-reveal>
      <SectionHead eyebrow="WHY KMC HOSPITAL" lines={[copy("ทุกบริการ", "Every service,"), copy("ดูแลโดยทีมเดียวกัน", "one connected team")]} lead={copy("แพทย์ พยาบาล นักกายภาพบำบัด และผู้ดูแล ทำงานร่วมกัน ข้อมูลการดูแลต่อเนื่องในทุกบริการ", "Doctors, nurses, physiotherapists and caregivers work together, with your care record carried across every service.")} />
      <div className="kv2-stats" data-sr-stagger>{trustPoints.map((point, index) => <div key={point.en}><span className="sr-num">0{index + 1}</span><h3>{th ? point.th : point.en}</h3><p>{th ? point.descTh : point.descEn}</p></div>)}</div>
    </section>

    <FinalCta eyebrow="NOT SURE WHERE TO START?" title={copy("ให้ทีมช่วยแนะนำบริการที่เหมาะกับคุณ", "Let our team point you to the right care")} lead={copy("เล่าอาการหรือความต้องการให้เราฟัง ทีมนัดหมายจะช่วยเลือกบริการและวันเวลาที่สะดวก", "Tell us what you need. The appointment team will help you choose the service and a convenient time.")} actions={[book, lineAction(th)]} placement="services-final" />
  </div>;
}
