// /contact in the v2 page style: light hero with quick-contact tiles (LINE, phone, address), a navy
// booking panel with the three booking steps, the map, and a few common questions. ?service=<slug>
// names the service the visitor came from, so the team knows what to talk about.
import { useRef } from "react";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { d as useSearchParams, n as Link } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { S as address, T as mapsLink, w as mapEmbed, i as faqGroups, services, lineUrl, phoneNumber, AnimatedHeading } from "../site.jsx";
import { Actions, FaqBlock, Hero, KArcs, LineIcon, callAction, lineAction, telHref, useKv2Effects } from "../components/v2/kit.jsx";

export default function Contact() {
  const { i18n } = useTranslation();
  const th = i18n.language === "th";
  const copy = (thai, english) => th ? thai : english;
  const root = useRef(null);
  const hero = useRef(null);
  const [params] = useSearchParams();
  const service = services[params.get("service")];
  const serviceName = service ? service[th ? "th" : "en"].name : null;
  useKv2Effects(root, hero);
  usePageMeta({ title: copy("ติดต่อเรา", "Contact Us"), description: copy("จองนัดหมาย หรือสอบถามข้อมูลเพิ่มเติม", "Book an appointment or ask us anything.") });
  const book = [lineAction(th, copy("นัดหมายผ่าน LINE", "Book on LINE")), callAction(th)];
  const hospitalQuestions = faqGroups.find((group) => group.key === "hospital")?.items ?? [];
  const questions = hospitalQuestions.slice(0, 4).map((item) => item[th ? "th" : "en"]);

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="tiles"
      crumbs={[{ to: "/", label: copy("หน้าแรก", "Home") }, { label: copy("ติดต่อเรา", "Contact") }]}
      eyebrow="KMC HOSPITAL / CONTACT US" title={copy("ติดต่อเรา", "Contact us")} accent={copy("ทีมของเราพร้อมดูแล", "Our team is here for you")}
      lead={copy("จองนัดหมาย หรือสอบถามข้อมูลเพิ่มเติมได้ทาง LINE และโทรศัพท์ ทีมนัดหมายจะช่วยเลือกบริการและวันเวลาที่สะดวกให้", "Book an appointment or ask us anything, on LINE or by phone. The appointment team will find the right service and time.")}
      aside={<>
        <a className="kv2-h__tile kv2-h__tile--navy" href={lineUrl} target="_blank" rel="noopener noreferrer" style={{ "--i": 0 }}><span className="kv2-h__tile-line"><LineIcon size={26} /></span><small>LINE Official</small><b>@kmchealth</b></a>
        <a className="kv2-h__tile" href={telHref()} style={{ "--i": 1 }}><Phone /><small>{copy("โทรศัพท์", "Phone")}</small><b>{phoneNumber}</b></a>
        <a className="kv2-h__tile kv2-h__tile--wide" href={mapsLink} target="_blank" rel="noopener noreferrer" style={{ "--i": 2 }}><MapPin /><small>{copy("ที่อยู่ · เปิดใน Google Maps", "Address · open in Google Maps")}</small><b>{address}</b></a>
      </>} />

    <section id="appointment" className="sr-wrap sr-section" data-sr-reveal>
      <div className="kv2-contact kv2-contact--single">
        <div className="kv2-book" data-line-topic={serviceName || undefined}>
          <KArcs />
          <p className="sr-eyebrow">BOOK AN APPOINTMENT</p>
          <AnimatedHeading as="h2" text={copy("จองนัดหมาย", "Book an appointment")} />
          {serviceName && <p className="kv2-book__topic">{copy("บริการที่คุณสนใจ:", "You are interested in:")} <strong>{serviceName}</strong></p>}
          <p>{copy("นัดหมายหรือสอบถามได้ทันทีผ่าน LINE หรือโทรศัพท์ ทีมนัดหมายจะช่วยเลือกบริการและวันเวลาที่สะดวกให้", "Book or ask us anything on LINE or by phone. The appointment team will help you choose the service and a time that suits you.")}{serviceName && copy(" แจ้งชื่อบริการนี้กับทีมงานได้เลย", " Just mention this service.")}</p>
          <Actions items={book} placement="appointment" />
          <ol className="kv2-book__steps">{[
            copy("ทักแชทหรือโทรหาทีมนัดหมาย", "Message or call the appointment team"),
            copy("เลือกบริการและวันเวลาที่สะดวก", "Choose the service and a convenient time"),
            copy("รับการยืนยันนัดและคำแนะนำการเตรียมตัว", "Get your confirmation and preparation tips"),
          ].map((step, index) => <li key={step}><span className="sr-num">0{index + 1}</span>{step}</li>)}</ol>
        </div>
      </div>
      <div className="kv2-map">
        <iframe title={copy("แผนที่ตั้งโรงพยาบาล", "Hospital location map")} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className="kv2-map__bar"><p>{address}</p><a className="sr-button" href={mapsLink} target="_blank" rel="noopener noreferrer">{copy("เปิดใน Google Maps / ดูเส้นทาง", "Open in Google Maps / directions")}<ArrowUpRight size={19} /></a></div>
      </div>
    </section>

    <FaqBlock isTh={th} items={questions} name="contact-faq" eyebrow="BEFORE YOU VISIT" title={copy("คำถามก่อนมาโรงพยาบาล", "Before you visit")} lead={copy("คำถามที่ครอบครัวถามบ่อย ดูทั้งหมดได้ที่หน้าคำถามที่พบบ่อย", "What families ask most. See every answer on the FAQ page.")} showPhone={false} className="kv2-faq-tail" />
    <div className="sr-wrap kv2-back-row"><Link className="kv2-back" to="/faq">{copy("ดูคำถามที่พบบ่อยทั้งหมด", "See all FAQs")}<ArrowUpRight size={18} /></Link></div>
  </div>;
}
