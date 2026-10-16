// /facilities in the v2 page style: slideshow hero with an up-next strip, room amenities and room cards,
// photo cards of the care spaces, a tabbed bento gallery, the safety panel, visit steps and a CTA.
import { useRef, useState } from "react";
import { Accessibility, BedDouble, BellRing, ShieldCheck, Sofa, Stethoscope, Tv, Wifi } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { amenities, visitSteps, AnimatedHeading } from "../site.jsx";
import SwipeRow from "../components/v2/SwipeRow.jsx";
import { Actions, ArrowLink, BentoGallery, FinalCta, Hero, PhotoViewer, SectionHead, callAction, lineAction, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";

const amenityIcons = [BedDouble, Stethoscope, Tv, Wifi, Sofa, BellRing];
const photo = (name, th, en) => ({ src: name.startsWith("/") ? name : photoSrc(name), th, en });

const rooms = [
  { photo: "/images/facilities/patient-room-private.jpg", th: "ห้องพักผู้ป่วยเดี่ยว", en: "Private room", descTh: "เตียงผู้ป่วยปรับไฟฟ้า โซฟาสำหรับญาติ และทีวี ความเป็นส่วนตัวเต็มที่", descEn: "An electric bed, a sofa for relatives and a TV, with full privacy." },
  { photo: "/images/facilities/patient-room-shared.jpg", th: "ห้องพักผู้ป่วยรวม", en: "Shared room", descTh: "ห้องสองเตียง มีม่านกั้นระหว่างเตียง และโซฟาสำหรับญาติ", descEn: "Two beds with privacy curtains between them and a sofa for relatives." },
];

const spaces = [
  { photo: "hydro/pool-lift", th: "สระธาราบำบัด", en: "Hydrotherapy pool", descTh: "พร้อมเก้าอี้ยกลงสระ สำหรับการออกกำลังกายและฟื้นฟูในน้ำ", descEn: "With a patient lift, for exercise and recovery in the water." },
  { photo: "physio/rehab-gym", th: "ห้องฟื้นฟูและฝึกเดิน", en: "Rehabilitation gym", descTh: "ราวฝึกเดินและอุปกรณ์ฟื้นฟูการเคลื่อนไหว", descEn: "Walking bars and equipment for movement rehab." },
  { photo: "physio/ot-room", th: "ห้องกิจกรรมบำบัด", en: "Occupational therapy room", descTh: "ฝึกทักษะการใช้ชีวิตประจำวันกับนักกิจกรรมบำบัด", descEn: "Practise everyday skills with an occupational therapist." },
  { photo: "chinese/consult-room", th: "ห้องตรวจแพทย์แผนจีน", en: "Chinese medicine clinic", descTh: "ตรวจ ฝังเข็ม และทำหัตถการแพทย์แผนจีน", descEn: "Consultations, acupuncture and Chinese medicine treatments." },
  { photo: "sleep/room-bed", th: "ห้องพักพร้อมตรวจการนอนหลับ", en: "Sleep study room", descTh: "ห้องพักที่ออกแบบสำหรับการตรวจการนอนหลับ", descEn: "A room set up for overnight sleep testing." },
  { photo: "physio/gym-wide", th: "ห้องทำกายภาพบำบัด", en: "Treatment room", descTh: "พื้นที่กว้าง พร้อมเครื่องมือกายภาพบำบัด", descEn: "A spacious room with physiotherapy equipment." },
];

const galleryTabs = [
  { key: "rooms", th: "ห้องพักผู้ป่วย", en: "Patient rooms", photos: [
    photo("/images/facilities/patient-room-private.jpg", "ห้องพักผู้ป่วยเดี่ยว", "A private patient room"),
    photo("/images/facilities/patient-room-shared.jpg", "ห้องพักผู้ป่วยรวม", "A shared patient room"),
    photo("sleep/room-wide", "บรรยากาศห้องพัก", "A look inside the rooms"),
    photo("sleep/bathroom-rail", "ห้องน้ำมีราวจับ", "A bathroom with grab rails"),
    photo("sleep/amenities", "ของใช้ส่วนตัวสำหรับผู้ป่วย", "Patient amenities"),
  ] },
  { key: "rehab", th: "ฟื้นฟูและกายภาพ", en: "Rehab & physio", photos: [
    photo("physio/rehab-gym", "ห้องฟื้นฟูและฝึกเดิน", "The rehabilitation gym"),
    photo("physio/parallel-bars", "ราวฝึกเดิน", "Walking bars"),
    photo("physio/ot-room", "ห้องกิจกรรมบำบัด", "The occupational therapy room"),
    photo("physio/pms-machine", "เครื่องกระตุ้นแม่เหล็กไฟฟ้า (PMS)", "The PMS magnetic stimulation unit"),
    photo("physio/wheelchairs", "รถเข็นและอุปกรณ์ช่วยเดิน", "Wheelchairs and walking aids"),
  ] },
  { key: "hydro", th: "สระธาราบำบัด", en: "Hydrotherapy", photos: [
    photo("/images/facilities/hydrotherapy-pool.jpg", "สระธาราบำบัด", "The hydrotherapy pool"),
    photo("hydro/pool-lift", "เก้าอี้ยกลงสระ", "The pool lift"),
    photo("hydro/group-class", "คลาสออกกำลังกายในน้ำ", "A water exercise class"),
    photo("hydro/therapist-guide", "นักกายภาพดูแลในสระ", "A therapist guiding in the pool"),
    photo("hydro/dumbbells", "อุปกรณ์ออกกำลังกายในน้ำ", "Water exercise equipment"),
  ] },
  { key: "clinics", th: "ห้องตรวจและคลินิก", en: "Clinics", photos: [
    photo("chinese/consult-room", "ห้องตรวจแพทย์แผนจีน", "The Chinese medicine clinic"),
    photo("hospital/reception", "เคาน์เตอร์ต้อนรับ", "The reception desk"),
    photo("hospital/exam-room", "ห้องตรวจ", "An examination room"),
    photo("chinese/cupping-rest", "ห้องทำหัตถการแพทย์แผนจีน", "The Chinese medicine treatment room"),
    photo("sleep/room-bed", "ห้องตรวจการนอนหลับ", "The sleep study room"),
  ] },
];

export default function Facilities() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  const [tab, setTab] = useState(0);
  const [viewer, setViewer] = useState(null);
  const open = (items, index) => setViewer({ items, index });
  useKv2Effects(root, hero);
  usePageMeta({
    title: copy("สิ่งอำนวยความสะดวก", "Facilities"),
    description: copy("ห้องพักผู้ป่วย สระธาราบำบัด ห้องฟื้นฟู และพื้นที่ดูแลผู้ป่วยของ KMC Hospital ออกแบบเพื่อความปลอดภัยและความสบายใจ", "Patient rooms, the hydrotherapy pool, rehab spaces and the rest of KMC Hospital, designed for safety and peace of mind."),
  });
  const contact = [lineAction(th, copy("สอบถามห้องพักและบริการ", "Ask about rooms and services")), callAction(th)];
  const spacePhotos = spaces.map((space) => photo(space.photo, space.th, space.en));

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="panorama"
      photos={[
        { src: photoSrc("hydro/pool-lift"), thumb: photoSrc("hydro/pool-lift", true), label: copy("สระธาราบำบัด", "Hydrotherapy pool") },
        ...rooms.map((room) => ({ src: room.photo, label: th ? room.th : room.en })),
        ...spaces.slice(1, 4).map((space) => ({ src: photoSrc(space.photo), thumb: photoSrc(space.photo, true), label: th ? space.th : space.en })),
      ]}
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("สิ่งอำนวยความสะดวก", "Facilities") }]}
      eyebrow="KMC HOSPITAL / FACILITIES" title={copy("สิ่งอำนวยความสะดวก", "Our facilities")} accent={copy("ปลอดภัย อุ่นใจ", "Safe and reassuring")}
      lead={copy("ห้องพักผู้ป่วย สระธาราบำบัด ห้องฟื้นฟู และพื้นที่ดูแลทุกส่วน ออกแบบให้ผู้ป่วยและครอบครัวรู้สึกอุ่นใจตลอดการดูแล", "Patient rooms, the hydrotherapy pool, rehab spaces and every care area, designed so patients and families feel at ease throughout.")}
      actions={<Actions items={contact} placement="facilities-hero" />} />


    <section id="fac-rooms" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="PATIENT ROOMS" lines={[copy("ห้องพักที่สบาย", "Rooms that feel"), copy("เหมือนอยู่บ้าน", "close to home")]} lead={copy("เลือกได้ทั้งห้องพักเดี่ยวและห้องพักรวม ทุกห้องมีพยาบาลดูแลตลอด 24 ชั่วโมง พร้อมสิ่งอำนวยความสะดวกสำหรับผู้ป่วยและญาติ", "Choose a private or shared room. Every room has round-the-clock nursing and comforts for patients and relatives.")} />
      <div className="sr-packages" data-sr-stagger>{rooms.map((room, index) => <article className="sr-package" key={room.en}>
        <div className="sr-package__media"><img src={room.photo} alt={th ? room.th : room.en} loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span></div>
        <div className="sr-package__body"><p className="sr-eyebrow">{index === 0 ? "PRIVATE ROOM" : "SHARED ROOM"}</p><h3>{th ? room.th : room.en}</h3><p>{th ? room.descTh : room.descEn}</p>
          <ArrowLink href={contact[0].href}>{copy("สอบถามห้องว่างและราคา", "Ask about availability and rates")}</ArrowLink></div>
      </article>)}</div>
      <ul className="kv2-amenities" data-sr-stagger>{amenities.map((item, index) => {
        const Icon = amenityIcons[index % amenityIcons.length];
        return <li key={item.en}><span className="sr-icon"><Icon size={22} strokeWidth={1.7} /></span>{th ? item.th : item.en}</li>;
      })}</ul>
    </section>

    <section id="fac-spaces" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="CARE SPACES" lines={[copy("พื้นที่ดูแล", "Spaces built"), copy("ครบในที่เดียว", "for every kind of care")]} lead={copy("ตั้งแต่สระธาราบำบัด ห้องฟื้นฟู ไปจนถึงคลินิกแพทย์แผนจีน แตะที่ภาพเพื่อดูแบบเต็มจอ", "From the hydrotherapy pool and rehab gym to the Chinese medicine clinic. Tap a photo to see it full screen.")} />
      <div className="kv2-spaces" data-sr-stagger>{spaces.map((space, index) => <button type="button" key={space.en} className="kv2-photo-card" onClick={() => open(spacePhotos, index)}>
        <img src={photoSrc(space.photo)} alt="" loading="lazy" decoding="async" /><span className="sr-num" aria-hidden="true">0{index + 1}</span>
        <h3>{th ? space.th : space.en}</h3><p>{th ? space.descTh : space.descEn}</p>
      </button>)}</div>
    </section>

    <section id="fac-gallery" className="sr-gallery-section" data-sr-reveal>
      <div className="sr-wrap"><SectionHead eyebrow="A CLOSER LOOK" lines={[copy("เห็นภาพการดูแล", "See the care"), copy("ก่อนตัดสินใจ", "before you decide")]} lead={copy("เลือกหมวด แล้วแตะที่ภาพเพื่อดูแบบเต็มจอ", "Pick a category, then tap a photo to see it full screen.")} /></div>
      <div className="sr-wrap">
        <SwipeRow className="sr-gal__tabs" isTh={th} role="tablist" aria-label={copy("หมวดหมู่ภาพ", "Photo categories")}>{galleryTabs.map((item, index) => <button key={item.key} type="button" role="tab" id={`fac-tab-${item.key}`} aria-selected={tab === index} aria-controls="fac-panel" className={`sr-gal__tab${tab === index ? " is-active" : ""}`} onClick={() => setTab(index)}>{th ? item.th : item.en}</button>)}</SwipeRow>
        <div key={galleryTabs[tab].key} id="fac-panel" role="tabpanel" aria-labelledby={`fac-tab-${galleryTabs[tab].key}`}><BentoGallery photos={galleryTabs[tab].photos} isTh={th} onOpen={open} /></div>
      </div>
    </section>

    <section className="sr-why sr-wrap" data-sr-reveal>
      <img src="/images/facilities/accessibility.jpg" alt="" loading="lazy" />
      <div className="sr-why__body"><p className="sr-eyebrow">SAFETY & ACCESSIBILITY</p><AnimatedHeading as="h2" lines={[copy("ปลอดภัย", "Safe and easy"), copy("เข้าถึงได้ง่ายทุกพื้นที่", "to get around")]} />
        <ul className="kv2-why-list" data-sr-stagger>{[
          { Icon: Accessibility, th: "ห้องน้ำผู้ป่วยมีราวจับกันลื่นและเก้าอี้นั่งอาบน้ำ", en: "Patient bathrooms with grab rails and a fold-down shower seat" },
          { Icon: BellRing, th: "ระบบเรียกพยาบาลอัตโนมัติในห้องพัก", en: "A nurse call system in every room" },
          { Icon: Stethoscope, th: "พยาบาลประจำการดูแลตลอด 24 ชั่วโมง", en: "Nurses on duty around the clock" },
          { Icon: ShieldCheck, th: "ใส่ใจความสะอาดและการควบคุมการติดเชื้อทุกขั้นตอน", en: "Hygiene and infection control at every step" },
        ].map((item, index) => <li key={item.en}><span className="sr-num">0{index + 1}</span><p>{th ? item.th : item.en}</p></li>)}</ul>
      </div>
    </section>

    <section id="fac-visit" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow="YOUR VISIT" title={copy("เตรียมพร้อมก่อนเข้ารับบริการ", "Planning your visit")} lead={copy("ตั้งแต่เตรียมเอกสารก่อนมาโรงพยาบาล จนถึงการดูแลต่อหลังกลับบ้าน", "From the documents to bring to follow-up care after you go home")} />
      <div className="sr-packages kv2-visit" data-sr-stagger>{visitSteps.map((step, index) => <article className="sr-package" key={step.en}>
        <div className="sr-package__media"><img src={photoSrc(step.photo)} alt="" loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span></div>
        <div className="sr-package__body"><h3>{th ? step.th : step.en}</h3><p>{th ? step.descTh : step.descEn}</p></div>
      </article>)}</div>
    </section>

    <FinalCta eyebrow="COME AND SEE FOR YOURSELF" title={copy("สอบถามห้องพักและบริการกับทีมของเรา", "Ask our team about rooms and services")} lead={copy("ทีมงานพร้อมแนะนำห้องพักและบริการที่เหมาะกับผู้ป่วยและครอบครัว", "We'll help you find the room and care that suit the patient and family")} actions={contact} placement="facilities-final" />
    {viewer && <PhotoViewer {...viewer} isTh={th} onClose={() => setViewer(null)} setIndex={(index) => setViewer((current) => ({ ...current, index }))} />}
  </div>;
}
