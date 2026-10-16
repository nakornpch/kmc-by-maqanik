// /about in the v2 page style: centred full-photo hero with scattered photo cards, the hospital's story beside a photo, the trust strip,
// approach cards, the P4 navy panel, a bento gallery, the safety panel and the closing CTA.
import { useRef, useState } from "react";
import { HeartHandshake, ShieldCheck } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { trustPoints, AnimatedHeading } from "../site.jsx";
import { Actions, ArrowLink, BentoGallery, FinalCta, Hero, PhotoViewer, SectionHead, SectionNav, lineAction, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";

const approach = [
  { th: "ผสาน 3 ศาสตร์การแพทย์", en: "Three medical traditions, combined", photo: "chinese/electro-acupuncture", descTh: "แพทย์แผนตะวันตก แผนจีน และแผนไทย ทำงานร่วมกันเพื่อผลลัพธ์การฟื้นฟูที่ดีที่สุด", descEn: "Western, Chinese, and Thai medicine working together for the best rehabilitation outcome." },
  { th: "ทีมสหวิชาชีพครบวงจร", en: "A full multidisciplinary team", photo: "physio/back-prep", descTh: "แพทย์ พยาบาล นักกายภาพบำบัด และผู้ดูแล ดูแลผู้ป่วยแต่ละคนร่วมกัน", descEn: "Doctors, nurses, physiotherapists, and caregivers working as one team around every patient." },
  { th: "แผนการดูแลรายบุคคล", en: "Care built around the individual", photo: "thai/sitting-stretch", descTh: "ไม่มีสูตรสำเร็จ แผนฟื้นฟูออกแบบเฉพาะตามอาการและเป้าหมายของแต่ละคน", descEn: "No one-size-fits-all plan, every rehab program is built around each patient's condition and goals." },
];

const p4 = [
  { key: "Prevention", th: "ป้องกันก่อนป่วย", en: "Preventing illness before it starts" },
  { key: "Predictive", th: "คาดการณ์ความเสี่ยงล่วงหน้า", en: "Spotting risks ahead of time" },
  { key: "Personalized", th: "ดูแลเฉพาะบุคคล", en: "Care shaped around each person" },
  { key: "Participation", th: "ดูแลไปด้วยกันกับผู้ป่วย ครอบครัว และชุมชน", en: "Care shared with patients, families and the community" },
];

const gallery = [
  { src: photoSrc("sleep/room-wide"), th: "ห้องพักผู้ป่วย", en: "A patient room" },
  { src: photoSrc("chinese/cupping-rest"), th: "ห้องทำหัตถการแพทย์แผนจีน", en: "The Chinese medicine treatment room" },
  { src: photoSrc("hydro/float"), th: "สระธาราบำบัด", en: "The hydrotherapy pool" },
  { src: photoSrc("physio/pms-machine"), th: "เครื่องกระตุ้นแม่เหล็กไฟฟ้า (PMS)", en: "The PMS magnetic stimulation unit" },
  { src: photoSrc("physio/treatment-room"), th: "ห้องทำกายภาพบำบัด", en: "The treatment room" },
  { src: photoSrc("chinese/acupoint-model"), th: "หุ่นจุดฝังเข็ม", en: "An acupoint model" },
  { src: photoSrc("hydro/dumbbells"), th: "อุปกรณ์ออกกำลังกายในน้ำ", en: "Water exercise equipment" },
  { src: photoSrc("sleep/amenities"), th: "ของใช้ส่วนตัวสำหรับผู้ป่วย", en: "Patient amenities" },
  { src: photoSrc("physio/ot-shelves"), th: "อุปกรณ์กิจกรรมบำบัด", en: "Occupational therapy tools" },
];

export default function AboutIndex() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  const [viewer, setViewer] = useState(null);
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("เกี่ยวกับ KMC Hospital", "About KMC Hospital"),
    description: copy("โรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health", "A full-service community hospital, under KMC Health Group."),
  });
  const actions = [{ to: "/services", label: copy("บริการของเรา", "Our services") }, { to: "/contact", label: copy("ติดต่อเรา", "Contact us") }];

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="center" photo="/images/home/hospital-front.jpg"
      scatter={["chinese/doctor-smile", "hydro/float", "sleep/room-wide", "physio/team-care", "chinese/cupping-rest", "physio/treatment-room"].map((name) => photoSrc(name, true))} photoAlt={copy("อาคาร KMC Hospital", "The KMC Hospital building")}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("เกี่ยวกับเรา", "About us") }]}
      eyebrow="KMC HOSPITAL / ABOUT US" title="KMC Hospital" accent={copy("โรงพยาบาลของชุมชน", "A hospital for the community")}
      lead={copy("โรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health ใกล้บ้าน เข้าถึงง่าย ดูแลด้วยทีมสหวิชาชีพตลอด 24 ชั่วโมง", "A full-service community hospital under KMC Health Group, close to home and easy to reach, with a multidisciplinary team around the clock.")}
      actions={<Actions items={actions} placement="about-hero" />} />

    <SectionNav label={copy("เนื้อหาหน้าเกี่ยวกับเรา", "About page sections")} items={[
      { href: "#about-story", label: copy("เรื่องราวของเรา", "Our story") },
      { href: "#about-approach", label: copy("แนวทางการดูแล", "Our approach") },
      { href: "#about-p4", label: copy("แนวคิด P4", "The P4 approach") },
      { href: "#about-gallery", label: copy("บรรยากาศ", "A look inside") },
    ]} />

    <section id="about-story" className="sr-wrap sr-section" data-sr-reveal>
      <div className="kv2-story">
        <div className="kv2-story__text">
          <p className="sr-eyebrow">OUR STORY</p>
          <AnimatedHeading as="h2" lines={[copy("โรงพยาบาลของชุมชน", "A community hospital,"), copy("เพื่อคนที่คุณรัก", "for the people you love")]} />
          <p>{copy("KMC Hospital เป็นโรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health อยู่ใกล้บ้าน เข้าถึงง่าย ให้บริการทางการแพทย์หลากหลายสาขาด้วยค่าใช้จ่ายที่คุ้มค่า เราเชื่อว่าการดูแลที่ดีไม่จำเป็นต้องไกลจากครอบครัว", "KMC Hospital is a full-service community hospital under KMC Health Group, close to home, easy to reach, offering a wide range of medical services at a fair cost. We believe good care shouldn't mean being far from family.")}</p>
          <p>{copy("เราดูแลผู้ป่วยด้วยทีมสหวิชาชีพครบวงจร ผสานศาสตร์การแพทย์ตะวันตก แผนจีน และแผนไทยเข้าด้วยกัน พร้อมพยาบาลประจำการตลอด 24 ชั่วโมง เพื่อให้ทุกครอบครัววางใจได้ในทุกช่วงของการดูแลรักษา", "Our patients are cared for by a full multidisciplinary team, combining Western, Chinese, and Thai medicine, with nurses on duty around the clock, so every family can feel at ease through every stage of care.")}</p>
        </div>
        <div className="kv2-story__media">
          <img src={photoSrc("chinese/doctor-smile")} alt={copy("แพทย์ให้คำปรึกษาผู้รับบริการ", "A doctor talking with a patient")} loading="lazy" />
          <div className="kv2-story__badge"><span className="sr-icon"><HeartHandshake size={22} /></span><span><b>KMC Health Group</b><small>{copy("ดูแลใกล้บ้าน ครบทุกช่วงวัย", "Care close to home, for every age")}</small></span></div>
        </div>
      </div>
      <div className="kv2-stats kv2-stats--below" data-sr-stagger>{trustPoints.map((point, index) => <div key={point.en}><span className="sr-num">0{index + 1}</span><h3>{th ? point.th : point.en}</h3><p>{th ? point.descTh : point.descEn}</p></div>)}</div>
    </section>

    <section id="about-approach" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="OUR APPROACH" title={copy("แนวทางการดูแลของเรา", "Our approach to care")} lead={copy("สามหลักที่อยู่เบื้องหลังทุกบริการของ KMC Hospital", "Three principles behind every KMC Hospital service")} />
      <div className="kv2-visit sr-packages" data-sr-stagger>{approach.map((item, index) => <article className="sr-package" key={item.en}>
        <div className="sr-package__media"><img src={photoSrc(item.photo)} alt="" loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span></div>
        <div className="sr-package__body"><h3>{th ? item.th : item.en}</h3><p>{th ? item.descTh : item.descEn}</p></div>
      </article>)}</div>
    </section>

    <section id="about-p4" className="sr-why sr-wrap" data-sr-reveal>
      <img src={photoSrc("physio/team-care")} alt="" loading="lazy" />
      <div className="sr-why__body"><p className="sr-eyebrow">HOW WE THINK ABOUT CARE</p><AnimatedHeading as="h2" lines={[copy("ดูแลตั้งแต่ก่อนป่วย", "Care that starts"), copy("ด้วยแนวคิด P4", "before illness: P4")]} />
        <p className="kv2-why-lead">{copy("เราไม่ได้รอให้คุณป่วยแล้วค่อยรักษา แต่อยู่เคียงข้างตั้งแต่ก่อนเจ็บป่วยไปจนถึงวันที่ต้องฟื้นฟูร่างกาย", "We don't wait for illness before we start caring: we stay alongside you from before you are unwell through to the day you are rebuilding your strength.")}</p>
        <ul className="kv2-why-list" data-sr-stagger>{p4.map((item, index) => <li key={item.key}><span className="sr-num">0{index + 1}</span><div><h3>{item.key}</h3><p>{th ? item.th : item.en}</p></div></li>)}</ul>
        <div className="kv2-why-link"><ArrowLink to="/services">{copy("ดูบริการของเรา", "See our services")}</ArrowLink></div>
      </div>
    </section>

    <section id="about-gallery" className="sr-gallery-section" data-sr-reveal>
      <div className="sr-wrap"><SectionHead eyebrow="A LOOK INSIDE" title={copy("บรรยากาศภายในโรงพยาบาล", "A look inside")} lead={copy("ห้องพัก ห้องฟื้นฟู สระธาราบำบัด และพื้นที่ดูแลผู้ป่วยของ KMC Hospital", "Patient rooms, rehab spaces, the hydrotherapy pool and the rest of the places where care happens.")} /></div>
      <div className="sr-wrap"><BentoGallery photos={gallery} isTh={th} onOpen={(items, index) => setViewer({ items, index })} /></div>
    </section>

    <section className="sr-fit">
      <div className="sr-wrap" data-sr-reveal><div className="sr-fit__grid kv2-safety">
        <img src={photoSrc("sleep/bathroom")} alt={copy("ห้องน้ำผู้ป่วยพร้อมราวจับกันลื่นและเก้าอี้นั่งอาบน้ำ", "A patient bathroom with grab rails and a fold-down shower seat")} loading="lazy" />
        <div><p className="sr-eyebrow">SAFETY, AS STANDARD</p><AnimatedHeading as="h2" text={copy("มาตรฐานความปลอดภัย", "Safety, as standard")} />
          <p>{copy("เราให้ความสำคัญกับความปลอดภัยและคุณภาพการดูแลในทุกขั้นตอน ตั้งแต่การพยาบาล อุปกรณ์ทางการแพทย์ ไปจนถึงความสะอาดและการควบคุมการติดเชื้อ หากมีข้อสงสัยเรื่องมาตรฐานการดูแล ทีมงานของเรายินดีให้ข้อมูลเพิ่มเติม", "Safety and quality of care come first at every step, from nursing practice and medical equipment to hygiene and infection control. If you have questions about our standards of care, our team is happy to walk you through them.")}</p>
          <ul className="kv2-checks kv2-safety__list">{[copy("พยาบาลประจำการตลอด 24 ชั่วโมง", "Nurses on duty around the clock"), copy("ห้องน้ำมีราวจับกันลื่นและเก้าอี้นั่งอาบน้ำ", "Grab rails and shower seats in patient bathrooms"), copy("ระบบเรียกพยาบาลอัตโนมัติ", "A nurse call system")].map((line) => <li key={line}><ShieldCheck size={18} /><span>{line}</span></li>)}</ul>
        </div>
      </div></div>
    </section>

    <FinalCta eyebrow="GET TO KNOW US" title={copy("อยากรู้จักเรามากขึ้น?", "Want to know more?")} lead={copy("ดูบริการทั้งหมด หรือพูดคุยกับทีมของเราได้เลย", "Browse our services, or talk to our team.")} actions={[actions[0], lineAction(th)]} placement="about-final" />
    {viewer && <PhotoViewer {...viewer} isTh={th} onClose={() => setViewer(null)} setIndex={(index) => setViewer((current) => ({ ...current, index }))} />}
  </div>;
}
