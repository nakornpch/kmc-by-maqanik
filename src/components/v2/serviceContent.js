// Extra copy for the v2 service pages (/services and /services/:slug). The service data itself
// (names, intro, highlights, steps, FAQ...) stays in site.jsx; this adds what the new layout needs.

// second, highlighted line of each service hero headline, and the packages its cards link to
// (keys of `packages` in site.jsx, in the order of the service's relatedPackages; null = no
// matching package yet, so that card links to /packages)
export const serviceExtras = {
  telemedicine: { th: "พบแพทย์ได้จากที่บ้าน", en: "See a doctor from home", packages: ["health-monitoring", null] },
  "lab-testing": { th: "รู้ผลชัด ดูแลต่อได้ทันที", en: "Clear results, care that follows", packages: ["checkup-by-age", null] },
  "occupational-health": { th: "ดูแลพนักงานทั้งองค์กร", en: "Care for your whole workforce", packages: [null, "preventive-corporate"] },
  "sleep-test": { th: "เพื่อการนอนที่มีคุณภาพ", en: "For sleep that restores you", packages: [null] },
  "chinese-medicine": { th: "ศาสตร์ดั้งเดิม ดูแลอย่างใส่ใจ", en: "Traditional care, done carefully", packages: [null, null] },
  "thai-massage": { th: "ผ่อนคลายอย่างตรงจุด", en: "Relief right where you need it", packages: [null] },
  physiotherapy: { th: "กลับมาเคลื่อนไหวได้มั่นใจ", en: "Move with confidence again", packages: [null, "rehab-postop"] },
  "stroke-rehab": { th: "ด้วยแผนเฉพาะคุณ", en: "Care built around you", packages: ["rehab-stroke", null] },
  "nursing-home": { th: "อบอุ่นเหมือนอยู่บ้าน", en: "As warm as home", packages: ["senior-longterm", null] },
  "elderly-care": { th: "ดูแลด้วยความเข้าใจ", en: "Care that understands", packages: ["homecare-daily", "senior-longterm"] },
  "home-care": { th: "ทีมดูแลไปถึงบ้านคุณ", en: "Our team comes to you", packages: ["homecare-daily", null] },
  hydrotherapy: { th: "ฟื้นฟูอย่างนุ่มนวลในน้ำ", en: "Gentle recovery in the water", packages: [null] },
  "health-monitoring": { th: "เห็นแนวโน้มก่อนเจ็บป่วย", en: "See the trend before illness", packages: ["health-monitoring", "health-monitoring-corporate"] },
  "annual-checkup-vaccine": { th: "ป้องกันไว้ก่อนทุกปี", en: "Prevention, every year", packages: ["checkup-by-age", "vaccine-adult", "checkup-onsite"] },
  "office-syndrome": { th: "คลายปวดจากการทำงาน", en: "Ease the aches of desk work", packages: ["office-syndrome-individual", "office-syndrome-corporate"] },
};

// clinician / family self-check tools shown on a service page
export const serviceTools = {
  "stroke-rehab": {
    to: "/tools/stroke-assessment",
    th: { kicker: "เครื่องมือสำหรับแพทย์", title: "แบบประเมินความรุนแรงโรคหลอดเลือดสมอง (NIHSS)", body: "15 ข้อ คิดคะแนนอัตโนมัติ พร้อมใบสรุปสำหรับพิมพ์", cta: "เริ่มประเมิน" },
    en: { kicker: "FOR CLINICIANS", title: "Stroke Severity Assessment (NIHSS)", body: "15 items, scored automatically, with a printable summary.", cta: "Start assessment" },
  },
  "elderly-care": {
    to: "/tools/memory-assessment",
    th: { kicker: "แบบสังเกตสำหรับครอบครัว", title: "พ่อแม่เปลี่ยนไป หรือเราคิดไปเอง?", body: "ตอบ 8 ข้อใน 3 นาที เพื่อดูว่าควรพาผู้สูงอายุไปพบแพทย์เรื่องความจำหรือยัง", cta: "เริ่มทำแบบสังเกต" },
    en: { kicker: "FOR FAMILIES", title: "Has Mum or Dad changed, or is it just me?", body: "Eight questions in three minutes to see whether a memory check-up is due.", cta: "Start the check" },
  },
};

// the service groups on /services: a photo and a line about each group
export const groupExtras = {
  health: {
    photo: "/images/photos/hospital/health-check.webp",
    th: "ตรวจ วินิจฉัย และปรึกษาแพทย์ ทั้งที่โรงพยาบาลและทางออนไลน์",
    en: "Testing, diagnosis and consultations, at the hospital and online.",
  },
  physical: {
    photo: "/images/photos/chinese/electro-acupuncture.webp",
    th: "กายภาพบำบัด แพทย์แผนจีน และแผนไทย ทำงานร่วมกันเพื่อบรรเทาอาการ",
    en: "Physiotherapy, Chinese and Thai medicine working together for relief.",
  },
  care: {
    photo: "/images/photos/physio/parallel-bars.webp",
    th: "ฟื้นฟูและดูแลระยะยาว ทั้งที่โรงพยาบาล ศูนย์ดูแล และที่บ้าน",
    en: "Rehabilitation and long-term care, at the hospital, our centres and at home.",
  },
  preventive: {
    photo: "/images/photos/sleep/sensor-fit.webp",
    th: "ป้องกันก่อนป่วย และติดตามสุขภาพต่อเนื่องอย่างเป็นระบบ",
    en: "Prevention before illness, and steady follow-up over time.",
  },
};

// gallery tabs on every service page (as the stroke page): the service's own photos first, then the
// spaces of its group and the care team. Five photos per tab fill the bento grid.
const photo = (name, th, en) => ({ src: name.startsWith("/") ? name : `/images/photos/${name}.webp`, th, en });
export const galleryTabs = {
  spaces: {
    health: { key: "spaces", th: "ห้องตรวจและคลินิก", en: "Exam rooms & clinics", photos: [
      photo("hospital/exam-room", "ห้องตรวจ", "An examination room"),
      photo("hospital/reception", "เคาน์เตอร์ต้อนรับ", "The reception desk"),
      photo("hospital/health-check", "ตรวจสุขภาพเบื้องต้น", "A health check"),
      photo("hospital/health-measure", "วัดค่าสุขภาพ", "Health measurements"),
      photo("chinese/consult-room", "ห้องให้คำปรึกษา", "A consultation room"),
    ] },
    physical: { key: "spaces", th: "ห้องบำบัดและอุปกรณ์", en: "Therapy rooms & equipment", photos: [
      photo("physio/gym-wide", "ห้องทำกายภาพบำบัด", "The physiotherapy room"),
      photo("physio/treatment-room", "ห้องหัตถการ", "A treatment room"),
      photo("physio/pms-machine", "เครื่องกระตุ้นแม่เหล็กไฟฟ้า (PMS)", "The PMS magnetic stimulation unit"),
      photo("chinese/consult-room", "ห้องตรวจแพทย์แผนจีน", "The Chinese medicine clinic"),
      photo("physio/rehab-gym", "ห้องฟื้นฟูและฝึกเดิน", "The rehabilitation gym"),
    ] },
    care: { key: "spaces", th: "ห้องพักฟื้น", en: "Recovery rooms", photos: [
      photo("/images/facilities/patient-room-private.jpg", "ห้องพักเดี่ยว", "A private room"),
      photo("/images/facilities/patient-room-shared.jpg", "ห้องพักรวม", "A shared room"),
      photo("sleep/room-wide", "บรรยากาศห้องพัก", "A look inside the rooms"),
      photo("sleep/bathroom-rail", "ห้องน้ำมีราวจับ", "A bathroom with grab rails"),
      photo("sleep/amenities", "ของใช้ส่วนตัว", "Personal amenities"),
    ] },
    preventive: { key: "spaces", th: "ห้องตรวจคัดกรอง", en: "Screening rooms", photos: [
      photo("hospital/health-check", "ตรวจสุขภาพ", "A health check"),
      photo("sleep/sensor-fit", "ติดอุปกรณ์ติดตามสุขภาพ", "Fitting a health monitor"),
      photo("hospital/exam-room", "ห้องตรวจ", "An examination room"),
      photo("hospital/pulse-diagnosis", "ตรวจชีพจร", "A pulse check"),
      photo("hospital/reception", "เคาน์เตอร์ต้อนรับ", "The reception desk"),
    ] },
  },
  team: { key: "team", th: "ทีมดูแล", en: "Care team", photos: [
    photo("physio/team-care", "ทีมสหวิชาชีพดูแลร่วมกัน", "The team caring together"),
    photo("chinese/doctor-smile", "แพทย์ให้คำปรึกษา", "A doctor in consultation"),
    photo("sleep/nurse-chat", "พยาบาลดูแลผู้ป่วย", "A nurse with a patient"),
    photo("physio/shoulder-assess", "นักกายภาพบำบัดประเมินอาการ", "A physiotherapist's assessment"),
    photo("sleep/nurse-couple", "ดูแลอย่างใกล้ชิด", "Close, attentive care"),
  ] },
};
