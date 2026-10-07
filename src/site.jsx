import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FloatingContact from "./components/FloatingContact.jsx";
import CookieConsent from "./components/CookieConsent.jsx";
import Hero from "./components/Hero.jsx";
import ServiceCategoryCard from "./components/ServiceCategoryCard.jsx";
import ServicesOverview from "./components/ServicesOverview.jsx";
import P4Section from "./components/P4Section.jsx";
import TeamSection from "./components/TeamSection.jsx";
import CareNeeds from "./components/CareNeeds.jsx";
import HealthMonitoring from "./components/HealthMonitoring.jsx";
import IntegratedCare from "./components/IntegratedCare.jsx";
import CorporateCommunity from "./components/CorporateCommunity.jsx";
import NewsSection from "./components/NewsSection.jsx";
import PackageCard from "./components/PackageCard.jsx";
import HomePage from "./pages/HomePage.jsx"; // original homepage, unrouted while v2 is live
import HomePageV2 from "./pages/HomePageV2.jsx";
import StrokeRehabV2 from "./pages/StrokeRehabV2.jsx";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/AboutIndex-DXteOtED.js",
      "assets/i18n-CAiZPsdd.js",
      "assets/rolldown-runtime-CNC7AqOf.js",
      "assets/react-SEPqUFC0.js",
      "assets/motion-CB540VaL.js",
      "assets/ServicesIndex-BOJsbkdp.js",
      "assets/ServiceDetail-X7lcQfId.js",
      "assets/usePageMeta-Z2vGXioM.js",
      "assets/animejs-CC9iyI6Y.js",
      "assets/NotFound-B9ISrt_u.js",
      "assets/useFaqSchema-qVCi2zFe.js",
      "assets/DoctorsIndex-BYocqVoP.js",
      "assets/DoctorsList-05l7X5B5.js",
      "assets/Facilities-DWwKlTwf.js",
      "assets/Packages-DGfop6XH.js",
      "assets/PackageDetail-CCSalqRB.js",
      "assets/Corporate-D6yGatuL.js",
      "assets/Blog-CXoHFk8a.js",
      "assets/FaqAccordion-BFnGjLiH.js",
      "assets/posts-D3CGv9gr.js",
      "assets/PostDetail-CVfk40YC.js",
      "assets/Contact-BsxYWB_0.js",
      "assets/Faq-4ObxvKV-.js",
      "assets/Legal-D4N36Kqk.js",
      "assets/PersonaLanding-DwQ0vtsn.js",
      "assets/StrokeAssessment-xXCHQ7zq.js",
      "assets/AssessmentParts-C_KTDJ2h.js",
      "assets/MemoryAssessment-zrY5ZruO.js",
      "assets/Dashboard-BqbwHyag.js",
    ]),
) => i.map((i) => d[i]);
import { a as e } from "./vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, n, r, t as useTranslation } from "./vendor/i18n-CAiZPsdd.js";
import {
  a as Outlet,
  c as useLocation,
  f as s,
  i as Navigate,
  n as Link,
  o as Route,
  p as d,
  r as f,
  s as Routes,
  t as BrowserRouter,
} from "./vendor/react-SEPqUFC0.js";
import {
  d as h,
  f as g,
  g as _,
  h as languageFromPath,
  i as y,
  l as b,
  m as languageBasename,
  n as ee,
  o as te,
  p as ne,
  r as re,
  s as ie,
  t as useHomeMeta,
  u as oe,
} from "./routes/usePageMeta.jsx";
import {
  a as se,
  i as AnimatePresence,
  n as motion,
  t as useReducedMotion,
} from "./vendor/motion-CB540VaL.js";
import { n as C, r as w, t as ue } from "./vendor/animejs-CC9iyI6Y.js";
import { n as T, t as de } from "./vendor/gsap-CfuogOgo.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var React = e(t(), 1),
  ReactDOM = d();
(r.use(n).init({
  resources: {
    th: {
      translation: {
        nav: {
          home: `หน้าแรก`,
          about: `เกี่ยวกับเรา`,
          services: `บริการ`,
          doctors: `แพทย์และผู้เชี่ยวชาญ`,
          facilities: `สิ่งอำนวยความสะดวก`,
          packages: `แพ็กเกจสุขภาพ`,
          corporate: `องค์กรและชุมชน`,
          blog: `ศูนย์ความรู้`,
          contact: `ติดต่อเรา`,
          dropdown: {
            about: {
              history: `ประวัติความเป็นมา`,
              vision: `วิสัยทัศน์และพันธกิจ`,
              team: `ทีมงานของเรา`,
            },
            doctors: {
              specialists: `ทีมแพทย์เฉพาะทาง`,
              directory: `รายชื่อแพทย์`,
            },
          },
        },
        hero: {
          eyebrow: `KMC Hospital`,
          title: `โรงพยาบาลของชุมชน เพื่อคนที่คุณรัก`,
          desc: `อยู่ใกล้บ้าน เข้าถึงง่าย ดูแลทุกช่วงวัยด้วยค่าใช้จ่ายที่คุ้มค่า`,
        },
        servicesOverview: {
          title: `บริการหลักของเรา`,
        },
        footer: {
          about: `เกี่ยวกับเรา`,
          services: `บริการ`,
          doctors: `แพทย์`,
          packages: `แพ็กเกจ`,
          blog: `บทความ`,
          contact: `ติดต่อเรา`,
          faq: `คำถามที่พบบ่อย`,
          careers: `ร่วมงานกับเรา`,
          privacy: `นโยบายความเป็นส่วนตัว`,
          terms: `ข้อกำหนดและเงื่อนไข`,
          rights: `สงวนลิขสิทธิ์`,
        },
      },
    },
    en: {
      translation: {
        nav: {
          home: `Home`,
          about: `About Us`,
          services: `Services`,
          doctors: `Doctors & Specialists`,
          facilities: `Facilities`,
          packages: `Health Packages`,
          corporate: `Organizations & Communities`,
          blog: `Knowledge Center`,
          contact: `Contact`,
          dropdown: {
            about: {
              history: `Our History`,
              vision: `Vision & Mission`,
              team: `Our Team`,
            },
            doctors: {
              specialists: `Specialist Teams`,
              directory: `Doctor Directory`,
            },
          },
        },
        hero: {
          eyebrow: `KMC Hospital`,
          title: `Your Community Hospital, For the People You Love`,
          desc: `Close to home, easy to reach, caring for every age at a cost that makes sense`,
        },
        servicesOverview: {
          title: `Our Core Services`,
        },
        footer: {
          about: `About Us`,
          services: `Services`,
          doctors: `Doctors`,
          packages: `Packages`,
          blog: `Articles`,
          contact: `Contact`,
          faq: `FAQ`,
          careers: `Careers`,
          privacy: `Privacy Policy`,
          terms: `Terms & Conditions`,
          rights: `All rights reserved.`,
        },
      },
    },
  },
  lng: typeof window < `u` ? languageFromPath(window.location.pathname) : `th`,
  fallbackLng: `th`,
  supportedLngs: ne,
  interpolation: {
    escapeValue: !1,
  },
}),
  typeof window < `u` &&
    (window.localStorage.removeItem(`i18nextLng`),
    window.localStorage.removeItem(`kmcLangDefaultReset`)),
  (document.documentElement.lang = r.language),
  r.on(`languageChanged`, (e) => {
    document.documentElement.lang = e;
  }));
var pe = `KMC Hospital โรงพยาบาลกายภาพเคเอ็มซี`,
  lineUrl = `https://line.me/R/ti/p/@kmchealth`,
  me = `93 สุขาภิบาล 2 ซอย 27 แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250`,
  O = `https://maps.app.goo.gl/KcDzc9vZsqfeCd91A`,
  he = `https://www.google.com/maps?q=${encodeURIComponent(pe)}&output=embed`,
  k = [
    {
      key: `wongwaen`,
      mapUrl: O,
      th: {
        name: `สาขาวงแหวน`,
        note: `ภายในโรงพยาบาล KMC`,
        address: me,
      },
      en: {
        name: `Wong Waen`,
        note: `Inside KMC Hospital`,
        address: `93 Sukhaphiban 2 Soi 27, Dok Mai, Prawet, Bangkok 10250`,
      },
    },
    {
      key: `prachauthit`,
      detailUrl: `https://agyhero.com/nursinghome/สาขาประชาอุทิศ/`,
      mapUrl: `https://maps.app.goo.gl/pSLwVJNod9ST5Nuv8`,
      fromPrice: 25e3,
      th: {
        name: `สาขาประชาอุทิศ`,
        note: `AGY Care Plus`,
        address: `84 ซ. ประชาอุทิศ 60/2 แขวงทุ่งครุ เขตทุ่งครุ กรุงเทพมหานคร 10140`,
      },
      en: {
        name: `Pracha Uthit`,
        note: `AGY Care Plus`,
        address: `84 Soi Pracha Uthit 60/2, Thung Khru, Bangkok 10140`,
      },
    },
    {
      key: `salaya`,
      detailUrl: `https://agyhero.com/nursinghome/สาขาศาลายา/`,
      mapUrl: `https://maps.app.goo.gl/33J93VmbaDA3nKtQ8`,
      fromPrice: 19e3,
      th: {
        name: `สาขาศาลายา`,
        note: `ศูนย์ดูแลผู้สูงอายุ แคร์ดี`,
        address: `95 ตำบลศาลายา อำเภอพุทธมณฑล นครปฐม 73170`,
      },
      en: {
        name: `Salaya`,
        note: `Care Dee elderly care centre`,
        address: `95 Salaya, Phutthamonthon District, Nakhon Pathom 73170`,
      },
    },
    {
      key: `viphavadi`,
      detailUrl: `https://agyhero.com/nursinghome/สาขาวิภาวดี/`,
      mapUrl: `https://maps.app.goo.gl/vKMhg35bHw5hjh7PA`,
      fromPrice: 25e3,
      th: {
        name: `สาขาวิภาวดี 44`,
        note: `ศูนย์ดูแลผู้สูงอายุบ้านหอมลำดวน`,
        address: `เลขที่ 8 ซอยวิภาวดีรังสิต 44 แขวงลาดยาว เขตจตุจักร กรุงเทพมหานคร 10900`,
      },
      en: {
        name: `Viphavadi 44`,
        note: `Baan Hom Lamduan elderly care centre`,
        address: `8 Soi Viphavadi Rangsit 44, Lat Yao, Chatuchak, Bangkok 10900`,
      },
    },
  ],
  ge = k.map((e) => e.fromPrice).filter(Boolean),
  _e = Math.min(...ge),
  ve = Math.max(...ge),
  serviceGroups = [
    {
      key: `health`,
      th: `หมวดสุขภาพ`,
      en: `Health Screening`,
      slugs: [`telemedicine`, `lab-testing`, `occupational-health`, `sleep-test`],
    },
    {
      key: `physical`,
      th: `หมวดกายภาพ`,
      en: `Physical & Traditional Therapy`,
      slugs: [`chinese-medicine`, `thai-massage`, `physiotherapy`],
    },
    {
      key: `care`,
      th: `หมวดดูแลและฟื้นฟูผู้ป่วยและผู้สูงอายุ`,
      en: `Patient & Elderly Care / Rehabilitation`,
      slugs: [`stroke-rehab`, `nursing-home`, `elderly-care`, `home-care`, `hydrotherapy`],
    },
    {
      key: `preventive`,
      th: `หมวดเชิงป้องกัน & ติดตามผล`,
      en: `Preventive & Monitoring`,
      slugs: [`health-monitoring`, `annual-checkup-vaccine`, `office-syndrome`],
    },
  ],
  services = {
    telemedicine: {
      images: [
        `/images/photos/chinese/doctor.webp`,
        `/images/photos/hospital/exam-room.webp`,
        `/images/photos/chinese/consult-model.webp`,
        `/images/photos/sleep/room-bed.webp`,
      ],
      th: {
        name: `Telemedicine`,
        tagline: `ปรึกษาแพทย์ทางไกล สะดวก รวดเร็ว ไม่ต้องเดินทาง`,
        h1: `Telemedicine ปรึกษาแพทย์ทางไกล ไม่ต้องเดินทางก็อุ่นใจ`,
        meta: {
          title: `Telemedicine ปรึกษาแพทย์ออนไลน์ | KMC Hospital`,
          description: `ปรึกษาแพทย์ผ่านวิดีโอคอลกับ KMC Hospital ได้ทุกที่ทุกเวลา นัดหมายง่าย ลดเวลาเดินทาง เหมาะสำหรับติดตามอาการต่อเนื่องและปรึกษาเบื้องต้น`,
          keywords: [
            `ปรึกษาแพทย์ออนไลน์`,
            `Telemedicine โรงพยาบาล`,
            `หาหมอออนไลน์ใกล้บ้าน`,
            `วิดีโอคอลหาหมอ`,
          ],
        },
        intro: `Telemedicine ของ KMC Hospital คือบริการปรึกษาแพทย์ผ่านวิดีโอคอล ที่ให้คุณพบแพทย์เฉพาะทางได้จากที่บ้าน เหมาะสำหรับติดตามอาการต่อเนื่อง ปรับยา หรือปรึกษาอาการเบื้องต้น โดยไม่ต้องเสียเวลาเดินทางมาโรงพยาบาล`,
        highlights: [
          {
            title: `นัดหมายออนไลน์`,
            desc: `เลือกเวลาที่สะดวก พบแพทย์ผ่านวิดีโอคอล`,
          },
          {
            title: `ติดตามอาการต่อเนื่อง`,
            desc: `เหมาะกับผู้ป่วยโรคเรื้อรังหรือหลังการรักษา`,
          },
          {
            title: `เชื่อมประวัติกับโรงพยาบาล`,
            desc: `แพทย์เห็นประวัติเดิม ไม่ต้องเล่าซ้ำทุกครั้ง`,
          },
        ],
        forWho: [
          `ผู้ป่วยที่ต้องติดตามอาการต่อเนื่อง (เบาหวาน ความดัน)`,
          `ผู้สูงอายุหรือผู้ป่วยที่เดินทางลำบาก`,
          `คนวัยทำงานที่ต้องการปรึกษาอาการเบื้องต้นระหว่างวัน`,
          `ครอบครัวที่ดูแลผู้ป่วยติดเตียงจากระยะไกล`,
        ],
        steps: [
          `นัดหมายผ่านเว็บไซต์/LINE OA เลือกแพทย์และเวลาที่สะดวก`,
          `รับลิงก์วิดีโอคอลก่อนถึงเวลานัด`,
          `พบแพทย์ผ่านวิดีโอคอล ซักถามอาการ`,
          `รับใบสั่งยา/คำแนะนำ จัดส่งยาถึงบ้านได้ [ รอยืนยันขอบเขตบริการจัดส่งยา ]`,
        ],
        whyKmc: [
          `แพทย์เฉพาะทางทีมเดียวกับที่ให้บริการ OPD จริง ไม่ใช่ทีมแยก`,
          `เชื่อมข้อมูลประวัติการรักษากับระบบของโรงพยาบาล ต่อเนื่องไม่ต้องเล่าซ้ำ`,
          `รองรับการติดตามร่วมกับโปรแกรมสุขภาพ (Lab+App) เพื่อเห็นแนวโน้มสุขภาพก่อนนัด`,
        ],
        faq: [
          {
            q: `Telemedicine ใช้ได้กับอาการแบบไหน?`,
            a: `เหมาะกับการติดตามอาการต่อเนื่อง ปรับยา ปรึกษาอาการเบื้องต้น และให้คำแนะนำด้านสุขภาพ ไม่เหมาะกับภาวะฉุกเฉินที่ต้องตรวจร่างกายหรือหัตถการ`,
          },
          {
            q: `ต้องมีอุปกรณ์อะไรบ้าง?`,
            a: `สมาร์ทโฟนหรือคอมพิวเตอร์ที่มีกล้องและอินเทอร์เน็ต พร้อมแอปหรือลิงก์ที่ทางโรงพยาบาลส่งให้`,
          },
          {
            q: `ค่าบริการเท่าไหร่?`,
            a: `ขึ้นอยู่กับแผนกและแพทย์ผู้ตรวจ สอบถามอัตราค่าบริการได้ที่ LINE OA หรือเบอร์ติดต่อโรงพยาบาล`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจติดตามอาการรายเดือน (Telemedicine + Lab+App)`,
          `แพ็กเกจปรึกษาครั้งเดียว`,
        ],
        cta: {
          primary: {
            label: `นัดปรึกษาแพทย์ออนไลน์`,
            to: `/contact?service=telemedicine#appointment`,
          },
          secondary: {
            label: `แชทสอบถามผ่าน LINE`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Telemedicine`,
        tagline: `Remote doctor consultations: convenient, fast, no travel needed`,
        h1: `Telemedicine: see a doctor without the journey`,
        meta: {
          title: `Telemedicine: Online Doctor Consultations | KMC Hospital`,
          description: `Consult a KMC Hospital doctor by video call, wherever you are. Easy booking, no travel time. Ideal for ongoing follow-up and initial advice.`,
          keywords: [
            `online doctor consultation`,
            `telemedicine hospital Bangkok`,
            `video call doctor`,
            `remote medical consultation`,
          ],
        },
        intro: `KMC Hospital’s telemedicine service is a video consultation with our specialists from wherever you are, suited to ongoing follow-up, medication adjustment or initial advice, without the trip to the hospital.`,
        highlights: [
          {
            title: `Book online`,
            desc: `Pick a time that suits you and meet by video call`,
          },
          {
            title: `Continuous follow-up`,
            desc: `Suited to chronic conditions or post-treatment monitoring`,
          },
          {
            title: `Linked to your hospital record`,
            desc: `Your doctor already has your history, so there is no starting over`,
          },
        ],
        forWho: [
          `Patients on continuous follow-up (diabetes, hypertension)`,
          `Older adults and patients for whom travelling is difficult`,
          `Working adults wanting initial advice during the day`,
          `Families caring for a bedridden relative from a distance`,
        ],
        steps: [
          `Book through the website or LINE OA, choosing your doctor and time`,
          `Receive a video call link before your appointment`,
          `Meet your doctor by video call and discuss your symptoms`,
          `Receive a prescription and advice, with medication delivery available [ delivery coverage to be confirmed ]`,
        ],
        whyKmc: [
          `The same specialists who run our outpatient clinics, not a separate remote-only team.`,
          `Linked to your record in the hospital system, so you never have to start your history over.`,
          `Works alongside the Health Monitoring Program (Lab + App), so trends are visible before the call.`,
        ],
        faq: [
          {
            q: `What is telemedicine suitable for?`,
            a: `Ongoing follow-up, medication adjustment, initial advice and general health guidance. It is not suitable for emergencies or anything needing a physical examination or procedure.`,
          },
          {
            q: `What equipment do I need?`,
            a: `A smartphone or computer with a camera and internet connection, plus the app or link the hospital sends you.`,
          },
          {
            q: `What does it cost?`,
            a: `It depends on the department and the doctor. Ask about rates through our LINE OA or by phone.`,
          },
        ],
        relatedPackages: [
          `Monthly follow-up package (Telemedicine + Lab & App)`,
          `Single consultation package`,
        ],
        cta: {
          primary: {
            label: `Book an online consultation`,
            to: `/contact?service=telemedicine#appointment`,
          },
          secondary: {
            label: `Ask us on LINE`,
            href: lineUrl,
          },
        },
      },
    },
    "lab-testing": {
      images: [
        `/images/photos/hospital/health-measure.webp`,
        `/images/photos/sleep/sensor-fit.webp`,
        `/images/photos/hospital/health-check.webp`,
        `/images/photos/hospital/reception.webp`,
      ],
      th: {
        name: `บริการตรวจทางห้องปฏิบัติการ`,
        tagline: `ตรวจเลือด ตรวจปัสสาวะ และตรวจทางห้องปฏิบัติการอื่นๆ ครบวงจร แม่นยำ รู้ผลรวดเร็ว`,
        h1: `ตรวจทางห้องปฏิบัติการ (Lab) ผลตรวจแม่นยำ เชื่อมข้อมูลสุขภาพของคุณ`,
        meta: {
          title: `ตรวจแล็บ ตรวจเลือด ผลแม่นยำ | KMC Hospital`,
          description: `บริการตรวจทางห้องปฏิบัติการครบวงจร ตรวจเลือด ตรวจปัสสาวะ และตรวจค่าสุขภาพเฉพาะทาง พร้อมทีมนักเทคนิคการแพทย์ ผลตรวจแม่นยำ รอรับผลได้รวดเร็ว`,
          keywords: [
            `ตรวจเลือด`,
            `ตรวจแล็บใกล้บ้าน`,
            `ตรวจสุขภาพห้องปฏิบัติการ`,
            `Lab test โรงพยาบาล`,
          ],
        },
        intro: `บริการตรวจทางห้องปฏิบัติการของ KMC Hospital ครอบคลุมการตรวจเลือด ปัสสาวะ และค่าสุขภาพเฉพาะทาง ดำเนินการโดยนักเทคนิคการแพทย์ พร้อมผลตรวจที่แม่นยำ เพื่อสนับสนุนการวินิจฉัยของแพทย์และการติดตามสุขภาพของคุณอย่างต่อเนื่อง`,
        highlights: [
          {
            title: `ตรวจได้หลากหลาย`,
            desc: `ตรวจเลือด ตรวจปัสสาวะ และการตรวจทางห้องปฏิบัติการอื่นๆ ในที่เดียว`,
          },
          {
            title: `รู้ผลรวดเร็ว`,
            desc: `รายการพื้นฐานทราบผลภายในวันเดียว รายการเฉพาะทางประมาณ 2-3 วัน`,
          },
          {
            title: `แพทย์อ่านผลให้ทุกครั้ง`,
            desc: `อธิบายค่าตรวจและคำแนะนำต่อเนื่อง`,
          },
        ],
        forWho: [
          `ผู้ที่แพทย์นัดตรวจติดตามผลก่อน/หลังการรักษา`,
          `ผู้ที่ต้องตรวจค่าประจำปีตามแพ็กเกจสุขภาพ`,
          `ผู้ป่วยโรคเรื้อรังที่ต้องตรวจค่าตามรอบ (เบาหวาน ไต ไขมัน)`,
          `องค์กรที่จัดตรวจสุขภาพพนักงานประจำปี`,
        ],
        steps: [
          `ลงทะเบียน/ยื่นใบสั่งตรวจจากแพทย์`,
          `เจาะเลือด/เก็บตัวอย่างโดยนักเทคนิคการแพทย์`,
          `ห้องแล็บวิเคราะห์ผล`,
          `รับผลผ่านแพทย์หรือแอปติดตามสุขภาพ (เชื่อมกับโปรแกรม Lab+App ได้)`,
        ],
        whyKmc: [
          `ผลตรวจเชื่อมตรงกับโปรแกรมติดตามสุขภาพ (Lab+App) เห็นแนวโน้มค่าสุขภาพย้อนหลัง ไม่ใช่แค่ตัวเลขครั้งเดียว`,
          `นักเทคนิคการแพทย์ที่มีประสบการณ์ เจาะเลือดเจ็บน้อย`,
          `แจ้งผลผ่านแพทย์พร้อมคำแนะนำ ไม่ใช่แค่ส่งตัวเลขให้ตีความเอง`,
        ],
        faq: [
          {
            q: `ต้องงดน้ำงดอาหารก่อนตรวจไหม?`,
            a: `ขึ้นอยู่กับรายการตรวจ บางรายการ (เช่น น้ำตาลในเลือด ไขมัน) ต้องงดอาหาร 8-12 ชั่วโมง เจ้าหน้าที่จะแจ้งก่อนวันตรวจ`,
          },
          {
            q: `รอผลนานแค่ไหน?`,
            a: `รายการพื้นฐานทราบผลภายในวันเดียว บางรายการเฉพาะทางอาจใช้เวลา 2-3 วัน`,
          },
          {
            q: `ตรวจได้โดยไม่มีใบสั่งแพทย์หรือไม่?`,
            a: `ตรวจได้ทั้งแบบมีใบสั่งแพทย์และแบบเลือกตรวจเองตามแพ็กเกจสุขภาพ`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจตรวจสุขภาพประจำปี (พื้นฐาน/ครอบคลุม)`,
          `ตรวจค่าเฉพาะทาง (เบาหวาน ไขมัน ไต)`,
        ],
        cta: {
          primary: {
            label: `จองคิวตรวจแล็บ`,
            to: `/contact?service=lab-testing#appointment`,
          },
          secondary: {
            label: `สอบถามรายการตรวจ`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Laboratory Testing Services`,
        tagline: `Blood, urine, and other lab tests: accurate, fast turnaround`,
        h1: `Laboratory testing: accurate results, connected to your health record`,
        meta: {
          title: `Laboratory Testing & Blood Tests | KMC Hospital`,
          description: `Full laboratory services, blood tests, urine tests and specialist panels, run by qualified medical technologists with accurate results and fast turnaround.`,
          keywords: [
            `blood test Bangkok`,
            `laboratory testing hospital`,
            `health screening lab`,
            `lab test near me`,
          ],
        },
        intro: `KMC Hospital’s laboratory service covers blood, urine and specialist health panels, run by qualified medical technologists. Accurate results support your doctor’s diagnosis and let you follow your health over time.`,
        highlights: [
          {
            title: `A wide range of tests`,
            desc: `Blood, urine and other laboratory work in one place`,
          },
          {
            title: `Fast turnaround`,
            desc: `Standard panels same-day; specialist tests roughly two to three days`,
          },
          {
            title: `A doctor reads every result`,
            desc: `Values explained, with guidance on what comes next`,
          },
        ],
        forWho: [
          `Patients sent for follow-up testing before or after treatment`,
          `Anyone due annual values under a health package`,
          `Patients with chronic conditions on a regular testing cycle (diabetes, kidney, lipids)`,
          `Organizations running annual employee screening`,
        ],
        steps: [
          `Register, or present your doctor’s test order`,
          `Sample collection by a medical technologist`,
          `Analysis in our laboratory`,
          `Results through your doctor or the health monitoring app (linked to the Lab + App program)`,
        ],
        whyKmc: [
          `Results feed straight into the Health Monitoring Program (Lab + App), so you see the trend behind the number.`,
          `Experienced medical technologists. A gentler draw.`,
          `Results are delivered by a doctor with guidance, not as numbers to interpret on your own.`,
        ],
        faq: [
          {
            q: `Do I need to fast beforehand?`,
            a: `It depends on the test. Some (blood sugar, lipids) need 8–12 hours of fasting. Staff will tell you before the appointment.`,
          },
          {
            q: `How long do results take?`,
            a: `Standard panels are usually same-day; some specialist tests take two to three days.`,
          },
          {
            q: `Can I test without a doctor’s order?`,
            a: `Yes, either with a doctor’s order, or by choosing tests yourself through a health package.`,
          },
        ],
        relatedPackages: [
          `Annual check-up packages (standard / comprehensive)`,
          `Specialist panels (diabetes, lipids, kidney function)`,
        ],
        cta: {
          primary: {
            label: `Book a lab appointment`,
            to: `/contact?service=lab-testing#appointment`,
          },
          secondary: {
            label: `Ask which tests you need`,
            href: lineUrl,
          },
        },
      },
    },
    "occupational-health": {
      images: [
        `/images/photos/hospital/seminar.webp`,
        `/images/photos/physio/shoulder-assess.webp`,
        `/images/photos/thai/assessment.webp`,
        `/images/photos/physio/pms-close.webp`,
      ],
      th: {
        name: `อาชีวอนามัย`,
        tagline: `ตรวจสุขภาพตามความเสี่ยงจากการทำงาน เพื่อความปลอดภัยของพนักงาน`,
        h1: `บริการอาชีวอนามัย ดูแลสุขภาพพนักงานตามความเสี่ยงจากการทำงาน`,
        meta: {
          title: `ตรวจอาชีวอนามัย ตรวจสุขภาพพนักงาน | KMC Hospital`,
          description: `บริการตรวจสุขภาพตามความเสี่ยงจากการทำงาน (อาชีวอนามัย) สำหรับองค์กรและโรงงาน ครบตามกฎหมาย พร้อมทีมแพทย์อาชีวเวชศาสตร์และรายงานผลระดับองค์กร`,
          keywords: [
            `ตรวจอาชีวอนามัย`,
            `ตรวจสุขภาพพนักงานประจำปี`,
            `อาชีวเวชศาสตร์`,
            `ตรวจสุขภาพตามความเสี่ยง`,
          ],
        },
        intro: `บริการอาชีวอนามัยของ KMC Hospital คือการตรวจสุขภาพพนักงานตามปัจจัยเสี่ยงเฉพาะของแต่ละอาชีพ เช่น เสียง ฝุ่น สารเคมี หรือการยกของหนัก ให้ครบตามที่กฎหมายกำหนด พร้อมรายงานผลระดับองค์กรที่ฝ่ายบุคคลนำไปวางแผนดูแลพนักงานต่อได้`,
        highlights: [
          {
            title: `ตรวจตามปัจจัยเสี่ยงงาน`,
            desc: `[ รอรายการตรวจจริงตามประเภทอุตสาหกรรม ]`,
          },
          {
            title: `รายงานผลระดับองค์กร`,
            desc: `สรุปภาพรวมสุขภาพพนักงานให้ฝ่ายบุคคล`,
          },
          {
            title: `ให้คำปรึกษาต่อเนื่อง`,
            desc: `แนะนำแนวทางป้องกันและปรับสภาพแวดล้อมการทำงาน`,
          },
        ],
        forWho: [
          `โรงงาน/สถานประกอบการที่ต้องตรวจสุขภาพตามความเสี่ยงตามกฎหมาย`,
          `ฝ่ายบุคคลที่ต้องการวางแผน Employee Well-Being เชิงป้องกัน`,
          `องค์กรที่ต้องการหน่วยตรวจสุขภาพเคลื่อนที่เข้าไปตรวจในสถานที่`,
        ],
        steps: [
          `ประเมินความเสี่ยงของแต่ละแผนก/ตำแหน่งงานร่วมกับฝ่ายบุคคล`,
          `จัดรายการตรวจให้ตรงตามความเสี่ยง`,
          `ตรวจที่โรงพยาบาลหรือหน่วยเคลื่อนที่เข้าสถานประกอบการ`,
          `สรุปผลรายบุคคลและรายงานภาพรวมองค์กร`,
        ],
        whyKmc: [
          `มีทีมแพทย์อาชีวเวชศาสตร์และนักเทคนิคที่เข้าใจข้อกฎหมายด้านความปลอดภัยแรงงาน`,
          `บริการหน่วยตรวจเคลื่อนที่ ลดเวลาที่พนักงานต้องออกนอกสถานที่`,
          `ต่อยอดสู่โปรแกรมองค์กร/สวัสดิการพนักงานระยะยาวได้กับทีมองค์กรและชุมชนสัมพันธ์`,
        ],
        faq: [
          {
            q: `อาชีวอนามัยต่างจากตรวจสุขภาพประจำปีทั่วไปอย่างไร?`,
            a: `อาชีวอนามัยเน้นตรวจตามปัจจัยเสี่ยงเฉพาะของงาน (เสียง ฝุ่น สารเคมี ฯลฯ) ตามที่กฎหมายกำหนด ส่วนตรวจสุขภาพประจำปีเป็นการตรวจสุขภาพทั่วไป`,
          },
          {
            q: `รับตรวจนอกสถานที่ได้หรือไม่?`,
            a: `ได้ มีบริการหน่วยตรวจสุขภาพเคลื่อนที่เข้าไปตรวจในสถานประกอบการ`,
          },
          {
            q: `มีรายงานผลให้ฝ่ายบุคคลไหม?`,
            a: `มี สรุปเป็นรายงานภาพรวมระดับองค์กรควบคู่กับผลรายบุคคล`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจตรวจอาชีวอนามัยตามกลุ่มความเสี่ยง`,
          `แพ็กเกจองค์กร (ตรวจ+ให้คำปรึกษาต่อเนื่อง)`,
        ],
        cta: {
          primary: {
            label: `ติดต่อทีมองค์กรเพื่อขอใบเสนอราคา`,
            to: `/corporate`,
          },
          secondary: {
            label: `สอบถามรายละเอียดโปรแกรม`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Occupational Health`,
        tagline: `Work-risk health screening to keep employees safe`,
        h1: `Occupational health: employee screening matched to workplace risk`,
        meta: {
          title: `Occupational Health & Employee Screening | KMC Hospital`,
          description: `Workplace-risk-based health screening for organizations and factories, legally complete, with occupational medicine doctors and organization-level reporting.`,
          keywords: [
            `occupational health screening`,
            `annual employee health check`,
            `occupational medicine Thailand`,
            `workplace risk screening`,
          ],
        },
        intro: `KMC Hospital’s occupational health service screens employees against the specific risks of their work, noise, dust, chemicals, heavy lifting, to the standard the law requires, with an organization-level report HR can plan from.`,
        highlights: [
          {
            title: `Risk-based screening`,
            desc: `[ Test panels by industry to be confirmed ]`,
          },
          {
            title: `Organization-level reporting`,
            desc: `Workforce health summaries for HR`,
          },
          {
            title: `Ongoing consultation`,
            desc: `Guidance on prevention and workplace conditions`,
          },
        ],
        forWho: [
          `Factories and workplaces required by law to screen against occupational risk`,
          `HR teams planning preventive employee well-being`,
          `Organizations wanting a mobile screening unit on site`,
        ],
        steps: [
          `Assess risk by department and role together with HR`,
          `Build the test panel around those risks`,
          `Screen at the hospital, or with a mobile unit at your premises`,
          `Individual results plus an organization-level summary report`,
        ],
        whyKmc: [
          `Occupational medicine doctors and technologists who know the labour safety requirements.`,
          `A mobile screening unit cuts the time employees spend away from work.`,
          `Extends into a longer-term corporate or employee benefit program with our corporate and community team.`,
        ],
        faq: [
          {
            q: `How does this differ from a general annual check-up?`,
            a: `Occupational health screening targets the specific risks of the job (noise, dust, chemicals and so on) as required by law; an annual check-up is general health screening.`,
          },
          {
            q: `Can you screen at our site?`,
            a: `Yes. A mobile screening unit can run the testing at your premises.`,
          },
          {
            q: `Does HR receive a report?`,
            a: `Yes. An organization-level summary alongside individual results.`,
          },
        ],
        relatedPackages: [
          `Occupational screening packages by risk group`,
          `Corporate package (screening + ongoing consultation)`,
        ],
        cta: {
          primary: {
            label: `Request a quote from our corporate team`,
            to: `/corporate`,
          },
          secondary: {
            label: `Ask about the program`,
            href: lineUrl,
          },
        },
      },
    },
    "sleep-test": {
      images: [
        `/images/photos/sleep/mask-fitting.webp`,
        `/images/photos/sleep/cpap.webp`,
        `/images/photos/sleep/sensor-belt.webp`,
        `/images/photos/sleep/room-wide.webp`,
        `/images/photos/sleep/monitor-belt.webp`,
      ],
      th: {
        name: `ตรวจการนอนหลับ`,
        tagline: `ตรวจวินิจฉัยภาวะหยุดหายใจขณะหลับและปัญหาการนอนอื่นๆ`,
        h1: `ตรวจการนอนหลับ (Sleep Test) หาสาเหตุที่แท้จริงของการนอนไม่มีคุณภาพ`,
        meta: {
          title: `ตรวจการนอนหลับ (Sleep Test) | KMC Hospital`,
          description: `ตรวจคุณภาพการนอนหลับ (Sleep Test) หาสาเหตุนอนกรน หยุดหายใจขณะหลับ นอนไม่อิ่ม โดยทีมแพทย์เฉพาะทาง วิเคราะห์ผลแม่นยำ วางแผนรักษาตรงจุด`,
          keywords: [`ตรวจการนอนหลับ`, `Sleep Test`, `นอนกรนหยุดหายใจ`, `ภาวะหยุดหายใจขณะหลับ`],
        },
        intro: `หากคุณนอนกรนเสียงดัง ตื่นมาไม่สดชื่น หรือคนข้างเคียงสังเกตว่าหยุดหายใจเป็นช่วง ๆ ขณะหลับ บริการตรวจการนอนหลับของ KMC Hospital ช่วยวิเคราะห์คุณภาพการนอนอย่างละเอียด เพื่อหาสาเหตุและวางแผนดูแลที่ตรงจุด`,
        highlights: [
          {
            title: `ตรวจในสภาพแวดล้อมคล้ายบ้าน`,
            desc: `ห้องตรวจที่ออกแบบให้ผ่อนคลายเพื่อผลตรวจที่แม่นยำ`,
          },
          {
            title: `แพทย์ประเมินผลโดยตรง`,
            desc: `[ รอรายละเอียดขั้นตอนและระยะเวลารอผลจริง ]`,
          },
          {
            title: `วางแผนรักษาต่อเนื่อง`,
            desc: `รวมถึงการปรับเครื่อง CPAP ให้เหมาะกับผู้ป่วยแต่ละราย`,
          },
        ],
        forWho: [
          `ผู้ที่นอนกรนเสียงดังหรือมีคนสังเกตว่าหยุดหายใจขณะหลับ`,
          `ผู้ที่ตื่นมาแล้วไม่สดชื่น ปวดหัวตอนเช้า ง่วงนอนตอนกลางวันบ่อย`,
          `ผู้ที่มีน้ำหนักเกินหรือมีโรคประจำตัว (ความดัน หัวใจ) ร่วมกับปัญหาการนอน`,
        ],
        steps: [
          `พบแพทย์เพื่อซักประวัติและประเมินความเสี่ยงเบื้องต้น`,
          `นัดตรวจการนอนหลับ (ที่โรงพยาบาลหรืออุปกรณ์พกพาที่บ้าน ตามความเหมาะสม)`,
          `ทีมแพทย์วิเคราะห์ผลข้อมูลการนอนตลอดคืน`,
          `แพทย์อธิบายผลและวางแผนรักษา (ปรับพฤติกรรม/เครื่องช่วยหายใจ/ส่งต่อการรักษาเฉพาะทาง)`,
        ],
        whyKmc: [
          `ทีมแพทย์แปลผลร่วมกับประวัติสุขภาพโดยรวม ไม่ดูแค่ตัวเลขจากเครื่องตรวจ`,
          `เชื่อมต่อสู่แผนกกายภาพบำบัดและฟื้นฟูได้ในโรงพยาบาลเดียว หากพบสาเหตุร่วม เช่น ปัญหาทางเดินหายใจส่วนบน`,
        ],
        faq: [
          {
            q: `ตรวจการนอนหลับต้องนอนโรงพยาบาลไหม?`,
            a: `บางกรณีตรวจด้วยอุปกรณ์พกพาที่บ้านได้ แพทย์จะพิจารณาความเหมาะสมเป็นรายบุคคล`,
          },
          {
            q: `ใช้เวลาตรวจนานแค่ไหน?`,
            a: `ใช้เวลาบันทึกข้อมูลตลอดการนอนหลับคืนหนึ่ง แล้วนัดฟังผลอีกครั้ง`,
          },
          {
            q: `อาการนอนกรนธรรมดาต้องตรวจไหม?`,
            a: `หากกรนโดยไม่มีอาการอื่นร่วม อาจไม่จำเป็น แต่ควรปรึกษาแพทย์หากมีอาการหยุดหายใจ ง่วงกลางวันมาก หรือมีโรคประจำตัวร่วม`,
          },
        ],
        relatedPackages: [`แพ็กเกจตรวจการนอนหลับ (Sleep Test) พร้อมพบแพทย์แปลผล`],
        cta: {
          primary: {
            label: `นัดพบแพทย์ประเมินก่อนตรวจ`,
            to: `/contact?service=sleep-test#appointment`,
          },
          secondary: {
            label: `สอบถามค่าบริการตรวจการนอนหลับ`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Sleep Test`,
        tagline: `Diagnosing sleep apnea and other sleep disorders`,
        h1: `Sleep test: find the real reason your sleep isn’t working`,
        meta: {
          title: `Sleep Test (Polysomnography) | KMC Hospital`,
          description: `A detailed sleep study to find the cause of snoring, sleep apnoea and unrefreshing sleep, read by specialists, with a treatment plan that targets the cause.`,
          keywords: [
            `sleep test`,
            `sleep apnoea test`,
            `snoring treatment`,
            `polysomnography Bangkok`,
          ],
        },
        intro: `If you snore loudly, wake up unrefreshed, or someone has noticed you stop breathing during the night, KMC Hospital’s sleep test analyses your sleep in detail to find the cause and plan care that targets it.`,
        highlights: [
          {
            title: `A home-like testing environment`,
            desc: `A relaxed setting designed for an accurate result`,
          },
          {
            title: `Doctor-reviewed results`,
            desc: `[ Procedure and turnaround time to be confirmed ]`,
          },
          {
            title: `Ongoing treatment planning`,
            desc: `Including CPAP fitting tailored to each patient`,
          },
        ],
        forWho: [
          `Anyone who snores loudly, or has been observed to stop breathing while asleep`,
          `People who wake unrefreshed, with morning headaches or frequent daytime sleepiness`,
          `People carrying extra weight or with an existing condition (hypertension, heart disease) alongside sleep problems`,
        ],
        steps: [
          `See a doctor for history-taking and an initial risk assessment`,
          `Book the study. In hospital or with a home device, whichever suits`,
          `Our team analyses a full night of sleep data`,
          `Your doctor explains the results and plans treatment (behavioural change, breathing support, or specialist referral)`,
        ],
        whyKmc: [
          `Results are read alongside your overall health history, not as numbers from a machine.`,
          `If a contributing cause turns up, upper airway problems, for instance, physiotherapy and rehabilitation are in the same hospital.`,
        ],
        faq: [
          {
            q: `Do I have to stay overnight at the hospital?`,
            a: `In some cases a portable home device is enough, your doctor will decide what suits your case.`,
          },
          {
            q: `How long does the test take?`,
            a: `It records through one full night of sleep, with a separate appointment to review the results.`,
          },
          {
            q: `Does ordinary snoring need testing?`,
            a: `Snoring alone may not. See a doctor if there are pauses in breathing, heavy daytime sleepiness, or an existing condition alongside it.`,
          },
        ],
        relatedPackages: [`Sleep test package, including the results consultation`],
        cta: {
          primary: {
            label: `Book a pre-test assessment`,
            to: `/contact?service=sleep-test#appointment`,
          },
          secondary: {
            label: `Ask about sleep test fees`,
            href: lineUrl,
          },
        },
      },
    },
    physiotherapy: {
      images: [
        `/images/photos/physio/pms-session.webp`,
        `/images/photos/physio/ultrasound-close.webp`,
        `/images/photos/physio/shoulder-exercise.webp`,
        `/images/photos/physio/pms-machine.webp`,
        `/images/photos/physio/walking.webp`,
      ],
      th: {
        name: `กายภาพบำบัด`,
        tagline: `ฟื้นฟูการเคลื่อนไหวและความแข็งแรง โดยนักกายภาพบำบัดวิชาชีพ`,
        h1: `กายภาพบำบัด ฟื้นฟูการเคลื่อนไหว คืนคุณภาพชีวิตให้ทุกวัย`,
        meta: {
          title: `กายภาพบำบัด รักษาอาการปวด ฟื้นฟูการเคลื่อนไหว | KMC Hospital`,
          description: `บริการกายภาพบำบัดโดยนักกายภาพบำบัดวิชาชีพ ดูแลอาการปวดกล้ามเนื้อ ข้อ กระดูก ฟื้นฟูหลังผ่าตัดและหลังบาดเจ็บ ด้วยเครื่องมือทันสมัยและแผนการรักษารายบุคคล`,
          keywords: [
            `กายภาพบำบัด`,
            `คลินิกกายภาพบำบัดใกล้บ้าน`,
            `ฟื้นฟูหลังผ่าตัด`,
            `รักษาอาการปวดหลัง`,
          ],
        },
        intro: `แผนกกายภาพบำบัดของ KMC Hospital ดูแลอาการปวดกล้ามเนื้อ ข้อ และกระดูก ฟื้นฟูร่างกายหลังผ่าตัดหรือหลังบาดเจ็บ ด้วยนักกายภาพบำบัดวิชาชีพและเครื่องมือที่ทันสมัย โดยออกแบบแผนการรักษาเฉพาะบุคคลตามอาการและเป้าหมายของแต่ละคน`,
        highlights: [
          {
            title: `ประเมินเฉพาะราย`,
            desc: `ออกแบบโปรแกรมตามอาการและเป้าหมายของผู้ป่วย`,
          },
          {
            title: `อุปกรณ์ครบครัน`,
            desc: `[ รอรายละเอียดอุปกรณ์และเครื่องมือจริง ]`,
          },
          {
            title: `ทำงานร่วมกับแพทย์เจ้าของไข้`,
            desc: `ติดตามความคืบหน้าและปรับแผนต่อเนื่อง`,
          },
        ],
        forWho: [
          `ผู้ที่มีอาการปวดหลัง คอ บ่า ไหล่ เรื้อรัง`,
          `ผู้ป่วยพักฟื้นหลังผ่าตัด (กระดูก ข้อเข่า ข้อสะโพก)`,
          `ผู้ที่ได้รับบาดเจ็บจากอุบัติเหตุหรือการเล่นกีฬา`,
          `วัยทำงานที่มีอาการ Office Syndrome`,
        ],
        steps: [
          `นักกายภาพบำบัดตรวจประเมินร่างกายและซักประวัติ`,
          `วางแผนการรักษาเฉพาะบุคคล (ท่าบริหาร/เครื่องมือทางกายภาพ/การจัดดัดร่างกาย)`,
          `ติดตามความก้าวหน้าและปรับแผนตามผลลัพธ์จริง`,
        ],
        whyKmc: [
          `แผนการรักษาออกแบบเฉพาะบุคคลจริง ไม่ใช่โปรแกรมสำเร็จรูปเดียวสำหรับทุกคน (หลัก Personalized ของแนวคิด P4)`,
          `เชื่อมต่อกับแผนกฟื้นฟูโรคหลอดเลือดสมอง ธาราบำบัด และดูแลที่บ้านได้ในระบบเดียวกัน หากต้องดูแลต่อเนื่อง`,
        ],
        faq: [
          {
            q: `ต้องมีใบส่งตัวจากแพทย์ไหม?`,
            a: `บางกรณีแนะนำให้พบแพทย์ก่อนเพื่อวินิจฉัยสาเหตุ แต่สามารถเข้ารับการประเมินจากนักกายภาพบำบัดได้โดยตรงในหลายกรณี`,
          },
          {
            q: `ฟื้นฟูหลังผ่าตัดข้อเข่าใช้เวลานานแค่ไหน?`,
            a: `ขึ้นอยู่กับชนิดการผ่าตัดและสภาพร่างกายผู้ป่วย นักกายภาพบำบัดจะประเมินและแจ้งระยะเวลาที่เหมาะสมเป็นรายบุคคล`,
          },
          {
            q: `มีบริการทำกายภาพที่บ้านไหม?`,
            a: `มี ผ่านบริการดูแลที่บ้านของ KMC Hospital สำหรับผู้ที่เดินทางมาโรงพยาบาลลำบาก`,
          },
        ],
        relatedPackages: [
          `คอร์สกายภาพบำบัดทั่วไป (รายครั้ง/แพ็กเกจ)`,
          `คอร์สฟื้นฟูหลังผ่าตัด (เฉพาะทาง)`,
        ],
        cta: {
          primary: {
            label: `นัดประเมินอาการกับนักกายภาพบำบัด`,
            to: `/contact?service=physiotherapy#appointment`,
          },
          secondary: {
            label: `สอบถามผ่าน LINE`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Physiotherapy`,
        tagline: `Restoring movement and strength with licensed physiotherapists`,
        h1: `Physiotherapy: movement restored, at any age`,
        meta: {
          title: `Physiotherapy: Pain Treatment & Movement Recovery | KMC Hospital`,
          description: `Physiotherapy from licensed practitioners for muscle, joint and bone pain, post-surgical and post-injury recovery, modern equipment and a plan built for each patient.`,
          keywords: [
            `physiotherapy clinic`,
            `post-surgery rehabilitation`,
            `back pain treatment`,
            `physical therapy Bangkok`,
          ],
        },
        intro: `KMC Hospital’s physiotherapy department treats muscle, joint and bone pain and supports recovery after surgery or injury, licensed physiotherapists and modern equipment, with a treatment plan built around each person’s symptoms and goals.`,
        highlights: [
          {
            title: `Individual assessment`,
            desc: `Programs designed around each patient’s condition and goals`,
          },
          {
            title: `Full equipment`,
            desc: `[ Equipment details to be confirmed ]`,
          },
          {
            title: `Coordinated with your doctor`,
            desc: `Progress tracked and plans adjusted over time`,
          },
        ],
        forWho: [
          `People with chronic back, neck or shoulder pain`,
          `Patients recovering from surgery (bone, knee, hip)`,
          `People injured in an accident or through sport`,
          `Working adults with office syndrome`,
        ],
        steps: [
          `Physical assessment and history-taking by a physiotherapist`,
          `A personal treatment plan (exercise, physical modalities, manual therapy)`,
          `Progress tracked and the plan adjusted against real results`,
        ],
        whyKmc: [
          `Plans are genuinely individual, not one off-the-shelf program for everyone, the Personalized pillar of P4.`,
          `Connected to stroke rehabilitation, hydrotherapy and home care in the same system when care needs to continue.`,
        ],
        faq: [
          {
            q: `Do I need a doctor’s referral?`,
            a: `In some cases seeing a doctor first is advisable to diagnose the cause, but in many cases you can be assessed by a physiotherapist directly.`,
          },
          {
            q: `How long does knee surgery rehabilitation take?`,
            a: `It depends on the type of surgery and the patient’s condition. Your physiotherapist will assess and give you a realistic timeline.`,
          },
          {
            q: `Do you offer physiotherapy at home?`,
            a: `Yes, through KMC Hospital’s home care service, for patients who find travelling difficult.`,
          },
        ],
        relatedPackages: [
          `General physiotherapy course (per session / package)`,
          `Post-surgical rehabilitation course (specialist)`,
        ],
        cta: {
          primary: {
            label: `Book a physiotherapy assessment`,
            to: `/contact?service=physiotherapy#appointment`,
          },
          secondary: {
            label: `Ask us on LINE`,
            href: lineUrl,
          },
        },
      },
    },
    "stroke-rehab": {
      images: [
        `/images/photos/physio/parallel-bars.webp`,
        `/images/photos/physio/ot-puzzle.webp`,
        `/images/photos/physio/walker.webp`,
        `/images/services/stroke-rehab/1.jpg`,
        `/images/services/stroke-rehab/2.jpg`,
      ],
      th: {
        name: `ฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง`,
        tagline: `โปรแกรมฟื้นฟูเฉพาะทางสำหรับผู้ป่วย Stroke`,
        h1: `ฟื้นฟูโรคหลอดเลือดสมอง (Stroke Rehabilitation) โดยทีมสหวิชาชีพ`,
        meta: {
          title: `ฟื้นฟูโรคหลอดเลือดสมอง (Stroke) | KMC Hospital`,
          description: `ศูนย์ฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง (Stroke) โดยทีมสหวิชาชีพ กายภาพบำบัด กิจกรรมบำบัด และฝึกพูด วางแผนฟื้นฟูเฉพาะบุคคล เพิ่มโอกาสกลับมาใช้ชีวิตได้ใกล้เคียงปกติ`,
          keywords: [
            `ฟื้นฟูผู้ป่วย Stroke`,
            `ฟื้นฟูโรคหลอดเลือดสมองที่ไหนดี`,
            `กายภาพบำบัดอัมพฤกษ์อัมพาต`,
            `ศูนย์ฟื้นฟู Stroke`,
          ],
        },
        intro: `ศูนย์ฟื้นฟูผู้ป่วยโรคหลอดเลือดสมองของ KMC Hospital ดูแลผู้ป่วยอัมพฤกษ์-อัมพาตด้วยทีมสหวิชาชีพ ทั้งกายภาพบำบัด กิจกรรมบำบัด และฝึกการพูด เพื่อฟื้นฟูความสามารถในการเคลื่อนไหวและการใช้ชีวิตประจำวันให้ใกล้เคียงปกติที่สุด ด้วยแผนการฟื้นฟูที่ออกแบบเฉพาะบุคคล`,
        highlights: [
          {
            title: `ทีมฟื้นฟูเฉพาะทาง`,
            desc: `แพทย์ นักกายภาพ และนักกิจกรรมบำบัดทำงานร่วมกัน`,
          },
          {
            title: `แผนฟื้นฟูรายบุคคล`,
            desc: `ปรับตามระดับความรุนแรงและเป้าหมายของผู้ป่วย`,
          },
          {
            title: `ติดตามความก้าวหน้า`,
            desc: `[ รอรายละเอียดรูปแบบการประเมินผลจริง ]`,
          },
        ],
        forWho: [
          `ผู้ป่วย Stroke ระยะหลังจำหน่ายจากโรงพยาบาลที่ต้องฟื้นฟูต่อเนื่อง`,
          `ผู้ป่วยที่มีอาการแขนขาอ่อนแรง พูดลำบาก หรือกลืนลำบากจากโรคหลอดเลือดสมอง`,
          `ครอบครัวที่ต้องการแผนฟื้นฟูระยะยาวแบบมีทีมสหวิชาชีพดูแล`,
        ],
        steps: [
          `ทีมสหวิชาชีพประเมินระดับความสามารถและข้อจำกัดของผู้ป่วย`,
          `วางแผนฟื้นฟูเฉพาะบุคคล (กายภาพบำบัด/กิจกรรมบำบัด/ฝึกพูด)`,
          `ฟื้นฟูต่อเนื่องพร้อมประเมินความก้าวหน้าเป็นระยะ`,
          `วางแผนดูแลต่อที่บ้านหรือเนอร์สซิ่งโฮมตามความเหมาะสม`,
        ],
        whyKmc: [
          `ทีมสหวิชาชีพครบในที่เดียว ไม่ต้องส่งต่อหลายสถานที่`,
          `มีธาราบำบัดและกายภาพบำบัดแผนไทย/แผนจีนเป็นทางเลือกเสริมในการฟื้นฟู`,
          `เชื่อมต่อแผนดูแลระยะยาวกับเนอร์สซิ่งโฮมและบริการดูแลที่บ้านได้อย่างต่อเนื่อง`,
        ],
        faq: [
          {
            q: `ควรเริ่มฟื้นฟูเมื่อไหร่หลังเป็น Stroke?`,
            a: `ควรเริ่มโดยเร็วที่สุดหลังพ้นภาวะวิกฤตตามคำแนะนำของแพทย์ เนื่องจากช่วงแรกมีผลต่อการฟื้นตัวสูง`,
          },
          {
            q: `ฟื้นฟูใช้เวลานานแค่ไหน?`,
            a: `แตกต่างกันในแต่ละคน ขึ้นอยู่กับความรุนแรงและตำแหน่งที่ได้รับผลกระทบ ทีมสหวิชาชีพจะประเมินและวางแผนเป็นระยะ`,
          },
          {
            q: `มีบริการพักรักษาตัวระหว่างฟื้นฟูไหม?`,
            a: `มี ทั้งแบบผู้ป่วยนอกและแบบพักฟื้นในเนอร์สซิ่งโฮมของโรงพยาบาล`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจฟื้นฟู Stroke ระยะเข้มข้น (สหวิชาชีพ)`,
          `แพ็กเกจฟื้นฟูต่อเนื่องรายเดือน`,
        ],
        cta: {
          primary: {
            label: `นัดประเมินแผนฟื้นฟูกับทีมสหวิชาชีพ`,
            to: `/contact?service=stroke-rehab#appointment`,
          },
          secondary: {
            label: `สอบถามค่าบริการฟื้นฟู`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Stroke Rehabilitation`,
        tagline: `A dedicated rehabilitation program for stroke patients`,
        h1: `Stroke rehabilitation, with a full multidisciplinary team`,
        meta: {
          title: `Stroke Rehabilitation | KMC Hospital`,
          description: `A stroke rehabilitation centre with a multidisciplinary team, physiotherapy, occupational therapy and speech therapy, and an individual recovery plan to restore as much independence as possible.`,
          keywords: [
            `stroke rehabilitation`,
            `stroke recovery centre`,
            `physiotherapy after stroke`,
            `paralysis rehabilitation`,
          ],
        },
        intro: `KMC Hospital’s stroke rehabilitation centre cares for patients with paresis and paralysis through a multidisciplinary team, physiotherapy, occupational therapy and speech therapy, working from an individual plan to restore movement and daily independence as far as possible.`,
        highlights: [
          {
            title: `Dedicated rehab team`,
            desc: `Doctors, physiotherapists, and occupational therapists working together`,
          },
          {
            title: `Individual rehab plan`,
            desc: `Adjusted to severity and the patient’s goals`,
          },
          {
            title: `Progress tracking`,
            desc: `[ Assessment methodology to be confirmed ]`,
          },
        ],
        forWho: [
          `Stroke patients discharged from hospital who need continuing rehabilitation`,
          `Patients with limb weakness, difficulty speaking or difficulty swallowing after a stroke`,
          `Families wanting a long-term recovery plan run by a multidisciplinary team`,
        ],
        steps: [
          `The multidisciplinary team assesses the patient’s abilities and limitations`,
          `An individual plan is built (physiotherapy, occupational therapy, speech therapy)`,
          `Continuous rehabilitation with periodic progress review`,
          `A plan for continuing care at home or in the nursing home, whichever suits`,
        ],
        whyKmc: [
          `The full multidisciplinary team is in one place, no referrals across several sites.`,
          `Hydrotherapy, Thai physical therapy and Chinese medicine are available as complements to recovery.`,
          `Long-term care carries on seamlessly through the nursing home and home care services.`,
        ],
        faq: [
          {
            q: `When should rehabilitation start after a stroke?`,
            a: `As soon as the patient is out of the critical phase and their doctor advises, the early period has a strong influence on recovery.`,
          },
          {
            q: `How long does rehabilitation take?`,
            a: `It varies, depending on severity and which areas are affected. The team assesses and plans in stages.`,
          },
          {
            q: `Can the patient stay during rehabilitation?`,
            a: `Yes, both as an outpatient and as a resident in the hospital’s nursing home.`,
          },
        ],
        relatedPackages: [
          `Intensive stroke rehabilitation package (multidisciplinary)`,
          `Monthly continuing rehabilitation package`,
        ],
        cta: {
          primary: {
            label: `Book a rehabilitation assessment`,
            to: `/contact?service=stroke-rehab#appointment`,
          },
          secondary: {
            label: `Ask about rehabilitation fees`,
            href: lineUrl,
          },
        },
      },
    },
    "elderly-care": {
      images: [
        `/images/photos/sleep/nurse-chat.webp`,
        `/images/services/elderly-care/1.jpg`,
        `/images/photos/chinese/arm-exam.webp`,
        `/images/photos/physio/wheelchairs.webp`,
      ],
      th: {
        name: `ดูแลผู้สูงอายุ`,
        tagline: `ดูแลระยะยาวและฟื้นฟูสมรรถภาพ โดยทีมสหวิชาชีพ`,
        h1: `ดูแลผู้สูงอายุ (Long Term Care) ใกล้บ้าน อุ่นใจทั้งครอบครัว`,
        meta: {
          title: `ดูแลผู้สูงอายุ Long Term Care | KMC Hospital`,
          description: `บริการดูแลผู้สูงอายุครบวงจร ทั้งที่โรงพยาบาลและที่บ้าน โดยทีมพยาบาลและผู้ช่วยพยาบาลมืออาชีพ ดูแลสุขภาพกาย ใจ และกิจวัตรประจำวัน อย่างเข้าใจและอบอุ่น`,
          keywords: [
            `ดูแลผู้สูงอายุ`,
            `Long Term Care ผู้สูงอายุ`,
            `ศูนย์ดูแลผู้สูงอายุใกล้บ้าน`,
            `ผู้ช่วยดูแลผู้สูงอายุ`,
          ],
        },
        intro: `บริการดูแลผู้สูงอายุของ KMC Hospital ครอบคลุมการดูแลสุขภาพกาย ใจ และกิจวัตรประจำวันของผู้สูงอายุในระยะยาว โดยทีมพยาบาลและผู้ช่วยพยาบาลที่เข้าใจธรรมชาติของผู้สูงอายุ พร้อมเชื่อมต่อกับแพทย์เฉพาะทางของโรงพยาบาลได้ทันทีเมื่อจำเป็น`,
        highlights: [
          {
            title: `แผนดูแลรายบุคคล`,
            desc: `ประเมินและวางแผนเฉพาะแต่ละเคส ปรับตามอาการจริง`,
          },
          {
            title: `ทีมสหวิชาชีพ`,
            desc: `แพทย์ พยาบาล นักกายภาพ และผู้ดูแล ทำงานเป็นทีมเดียว`,
          },
          {
            title: `ติดตามต่อเนื่อง`,
            desc: `รายงานอาการสม่ำเสมอ ครอบครัวรับรู้ทุกความคืบหน้า`,
          },
        ],
        forWho: [
          `ผู้สูงอายุที่ต้องการผู้ดูแลกิจวัตรประจำวันบางส่วนหรือทั้งหมด`,
          `ครอบครัวที่ต้องทำงานและไม่มีเวลาดูแลผู้สูงอายุตลอดวัน`,
          `ผู้สูงอายุที่มีโรคประจำตัวที่ต้องติดตามใกล้ชิด`,
        ],
        steps: [
          `ประเมินสภาพร่างกาย ความสามารถในการช่วยเหลือตัวเอง และความต้องการของผู้สูงอายุ`,
          `วางแผนการดูแลร่วมกับครอบครัว (ที่บ้านหรือที่โรงพยาบาล)`,
          `ดูแลตามแผน พร้อมติดตามสุขภาพและปรับแผนตามความเปลี่ยนแปลง`,
        ],
        whyKmc: [
          `เชื่อมต่อกับแพทย์เฉพาะทาง กายภาพบำบัด และเนอร์สซิ่งโฮมในระบบเดียวกัน หากอาการเปลี่ยนแปลงหรือต้องยกระดับการดูแล`,
          `ทีมงานเข้าใจภาวะของผู้สูงอายุไทย ดูแลด้วยความอบอุ่นเสมือนคนในครอบครัว`,
        ],
        faq: [
          {
            q: `ดูแลผู้สูงอายุที่บ้านหรือที่โรงพยาบาลดีกว่ากัน?`,
            a: `ขึ้นอยู่กับสภาพร่างกายและความสะดวกของครอบครัว ทีมงานจะช่วยประเมินและแนะนำรูปแบบที่เหมาะสมที่สุด`,
          },
          {
            q: `ผู้ดูแลมีคุณสมบัติอย่างไร?`,
            a: `เป็นพยาบาลและผู้ช่วยพยาบาลที่ผ่านการอบรมดูแลผู้สูงอายุโดยเฉพาะ`,
          },
          {
            q: `หากผู้สูงอายุมีอาการฉุกเฉินระหว่างดูแลที่บ้านต้องทำอย่างไร?`,
            a: `ทีมงานมีแนวทางประสานส่งต่อมายังโรงพยาบาลได้ทันที`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจดูแลผู้สูงอายุรายวัน/รายเดือน (ที่บ้าน)`,
          `แพ็กเกจดูแลผู้สูงอายุที่โรงพยาบาล`,
        ],
        cta: {
          primary: {
            label: `ปรึกษาทีมดูแลผู้สูงอายุ`,
            to: `/contact?service=elderly-care#appointment`,
          },
          secondary: {
            label: `ประเมินความต้องการการดูแลฟรี`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Elderly Care`,
        tagline: `Long-term care and rehabilitation by a multidisciplinary team`,
        h1: `Long-term elderly care, close to home`,
        meta: {
          title: `Elderly Care & Long-Term Care | KMC Hospital`,
          description: `Complete elderly care at the hospital or at home, from professional nurses and nursing assistants, physical health, emotional wellbeing and daily routine, with warmth and understanding.`,
          keywords: [
            `elderly care`,
            `long term care for seniors`,
            `elderly care centre near me`,
            `senior caregiver service`,
          ],
        },
        intro: `KMC Hospital’s elderly care covers physical health, emotional wellbeing and daily routine over the long term, delivered by nurses and nursing assistants who understand older adults, with the hospital’s specialists a step away when needed.`,
        highlights: [
          {
            title: `Personalized care plans`,
            desc: `Assessed and planned per case, adjusted as conditions evolve`,
          },
          {
            title: `Multidisciplinary team`,
            desc: `Doctors, nurses, therapists, and caregivers working together`,
          },
          {
            title: `Continuous follow-up`,
            desc: `Regular reports keep families informed of every step`,
          },
        ],
        forWho: [
          `Older adults needing help with some or all of their daily routine`,
          `Working families without the hours to provide all-day care`,
          `Older adults with conditions that need close monitoring`,
        ],
        steps: [
          `Assessment of physical condition, independence and what the person actually needs`,
          `A care plan agreed with the family (at home or at the hospital)`,
          `Care delivered to plan, with health monitored and the plan adjusted as things change`,
        ],
        whyKmc: [
          `Connected to specialists, physiotherapy and the nursing home in one system, should the level of care need to change.`,
          `A team that understands older Thai adults, caring for them as family would.`,
        ],
        faq: [
          {
            q: `Is care better at home or at the hospital?`,
            a: `It depends on physical condition and what works for the family. Our team will assess and recommend what suits best.`,
          },
          {
            q: `What qualifications do caregivers have?`,
            a: `They are nurses and nursing assistants with specific training in elderly care.`,
          },
          {
            q: `What happens in an emergency during home care?`,
            a: `The team has a defined route to transfer the patient to the hospital immediately.`,
          },
        ],
        relatedPackages: [
          `Daily / monthly elderly care package (at home)`,
          `Elderly care package at the hospital`,
        ],
        cta: {
          primary: {
            label: `Talk to our elderly care team`,
            to: `/contact?service=elderly-care#appointment`,
          },
          secondary: {
            label: `Free care-needs assessment`,
            href: lineUrl,
          },
        },
      },
    },
    "nursing-home": {
      images: [
        `/images/photos/sleep/nurse-couple.webp`,
        `/images/services/nursing-home/1.jpg`,
        `/images/photos/sleep/bathroom-rail.webp`,
        `/images/photos/sleep/amenities.webp`,
      ],
      th: {
        name: `เนอร์สซิ่งโฮม`,
        tagline: `ที่พักและการดูแลตลอด 24 ชั่วโมง อบอุ่นเหมือนบ้าน`,
        h1: `เนอร์สซิ่งโฮม บ้านพักฟื้นที่มีทีมพยาบาลดูแลใกล้ชิดตลอด 24 ชั่วโมง`,
        meta: {
          title: `เนอร์สซิ่งโฮม ดูแลผู้ป่วย/ผู้สูงอายุพักฟื้น | KMC Hospital`,
          description: `เนอร์สซิ่งโฮมของ KMC Hospital ดูแลผู้สูงอายุและผู้ป่วยพักฟื้นระยะยาวโดยทีมพยาบาลตลอด 24 ชั่วโมง ในบรรยากาศอบอุ่นเหมือนอยู่บ้าน พร้อมแพทย์ดูแลใกล้ชิด`,
          keywords: [
            `เนอร์สซิ่งโฮมใกล้ฉัน`,
            `ดูแลผู้สูงอายุพักฟื้นหลังผ่าตัด`,
            `สถานพักฟื้นผู้ป่วย`,
            `nursing home ราคา`,
          ],
        },
        intro: `เนอร์สซิ่งโฮมของ KMC Hospital คือสถานที่พักฟื้นระยะยาวสำหรับผู้สูงอายุและผู้ป่วยที่ต้องการการดูแลต่อเนื่อง โดยทีมพยาบาลและผู้ช่วยพยาบาลดูแลตลอด 24 ชั่วโมง ในบรรยากาศอบอุ่นใกล้เคียงบ้าน พร้อมแพทย์ประจำที่ดูแลใกล้ชิดและเชื่อมต่อกับแผนกฟื้นฟูของโรงพยาบาลได้ทันที`,
        highlights: [
          {
            title: `พยาบาล 24 ชั่วโมง`,
            desc: `ประจำการทุกวัน พร้อมระบบเรียกพยาบาลทุกเตียง`,
          },
          {
            title: `ห้องพักหลายรูปแบบ`,
            desc: `[ รอรายละเอียดประเภทห้องและราคาจริง ]`,
          },
          {
            title: `กิจกรรมประจำวัน`,
            desc: `กายภาพ กิจกรรมกลุ่ม และการฟื้นฟูตามแผน`,
          },
        ],
        forWho: [
          `ผู้สูงอายุที่ครอบครัวไม่สามารถดูแลได้ตลอดเวลา`,
          `ผู้ป่วยพักฟื้นหลังผ่าตัดหรือหลัง Stroke ที่ต้องการการดูแลต่อเนื่อง`,
          `ผู้ป่วยติดเตียงหรือต้องการการพยาบาลเฉพาะทาง`,
        ],
        steps: [
          `ประเมินสภาพร่างกายและความต้องการการดูแลของผู้ป่วย`,
          `วางแผนการดูแลรายบุคคลร่วมกับครอบครัว`,
          `เข้าพักพร้อมทีมพยาบาลดูแล 24 ชั่วโมง`,
          `ติดตามและปรับแผนการดูแล พร้อมรายงานความคืบหน้าให้ครอบครัวทราบ`,
        ],
        whyKmc: [
          `อยู่ในโรงพยาบาลเดียวกับแผนกฟื้นฟู หากมีเหตุฉุกเฉินหรือต้องพบแพทย์เฉพาะทางไม่ต้องเคลื่อนย้ายไปสถานที่อื่น`,
          `ทีมพยาบาลดูแลใกล้ชิด ครอบครัวติดตามความคืบหน้าได้สม่ำเสมอ`,
        ],
        faq: [
          {
            q: `เนอร์สซิ่งโฮมต่างจากรับดูแลที่บ้านอย่างไร?`,
            a: `เนอร์สซิ่งโฮมคือการเข้าพักที่สถานพยาบาลโดยมีทีมดูแลตลอด 24 ชั่วโมง ส่วนดูแลที่บ้านคือทีมไปดูแลผู้ป่วยที่บ้านของผู้ป่วยเอง เลือกได้ตามความเหมาะสมของแต่ละครอบครัว`,
          },
          {
            q: `ครอบครัวเยี่ยมได้บ่อยแค่ไหน?`,
            a: `สามารถเยี่ยมได้ตามช่วงเวลาที่โรงพยาบาลกำหนด สอบถามรายละเอียดเวลาเยี่ยมได้กับเจ้าหน้าที่`,
          },
          {
            q: `มีค่าใช้จ่ายแบบไหนบ้าง?`,
            a: `มีทั้งแบบรายวันและรายเดือน ขึ้นอยู่กับระดับการดูแลที่ต้องการ สอบถามอัตราค่าบริการได้กับเจ้าหน้าที่`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจเนอร์สซิ่งโฮมรายเดือน (ตามระดับการดูแล)`,
          `แพ็กเกจพักฟื้นระยะสั้นหลังผ่าตัด`,
        ],
        cta: {
          primary: {
            label: `นัดเยี่ยมชมและสอบถามอัตราค่าบริการ`,
            to: `/contact?service=nursing-home#appointment`,
          },
          secondary: {
            label: `ปรึกษาทีมดูแลผู้สูงอายุ`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Nursing Home`,
        tagline: `24-hour residential care that feels like home`,
        h1: `Nursing home: a place to recover, with nurses close by around the clock`,
        meta: {
          title: `Nursing Home & Long-Stay Recovery Care | KMC Hospital`,
          description: `KMC Hospital’s nursing home cares for older adults and long-stay recovery patients with 24-hour nursing in a warm, home-like setting, with doctors close at hand.`,
          keywords: [
            `nursing home near me`,
            `post-surgery recovery care`,
            `long stay care facility`,
            `nursing home cost`,
          ],
        },
        intro: `KMC Hospital’s nursing home is long-stay accommodation for older adults and patients who need continuing care, with nurses and nursing assistants on hand 24 hours a day in a warm, home-like setting, resident doctors close by, and the hospital’s rehabilitation department a corridor away.`,
        highlights: [
          {
            title: `24-hour nursing`,
            desc: `On duty every day, nurse-call system at every bed`,
          },
          {
            title: `A range of rooms`,
            desc: `[ Room types and pricing to be confirmed ]`,
          },
          {
            title: `Daily activities`,
            desc: `Physio, group activities, and planned rehabilitation`,
          },
        ],
        forWho: [
          `Older adults whose families cannot provide round-the-clock care`,
          `Patients recovering from surgery or a stroke who need continuing care`,
          `Bedridden patients, or anyone needing specialist nursing`,
        ],
        steps: [
          `Assessment of the resident’s physical condition and care needs`,
          `An individual care plan agreed with the family`,
          `Move-in, with 24-hour nursing care`,
          `Ongoing review and adjustment, with progress reported back to the family`,
        ],
        whyKmc: [
          `It sits inside the same hospital as the rehabilitation department. An emergency or a specialist appointment needs no transfer elsewhere.`,
          `Nurses are close at hand, and families can follow progress regularly.`,
        ],
        faq: [
          {
            q: `How does a nursing home differ from home care?`,
            a: `A nursing home means staying at the facility with a team on hand 24 hours a day; home care means our team comes to the patient’s own home. Families choose whichever fits.`,
          },
          {
            q: `How often can family visit?`,
            a: `During the hospital’s visiting hours. Ask our staff for the current times.`,
          },
          {
            q: `How is it charged?`,
            a: `Daily and monthly options, depending on the level of care needed. Ask our staff for current rates.`,
          },
        ],
        relatedPackages: [
          `Monthly nursing home package (by level of care)`,
          `Short-stay post-surgical recovery package`,
        ],
        cta: {
          primary: {
            label: `Arrange a visit and ask about rates`,
            to: `/contact?service=nursing-home#appointment`,
          },
          secondary: {
            label: `Talk to our elderly care team`,
            href: lineUrl,
          },
        },
      },
    },
    "home-care": {
      images: [
        `/images/photos/thai/notes.webp`,
        `/images/services/home-care/1.jpg`,
        `/images/photos/thai/family.webp`,
      ],
      th: {
        name: `ดูแลที่บ้าน`,
        tagline: `พยาบาลและผู้ดูแลถึงบ้านคุณ ยืดหยุ่นตามความต้องการ`,
        h1: `บริการดูแลที่บ้าน (Home Care) ทีมแพทย์และพยาบาลไปถึงบ้านคุณ`,
        meta: {
          title: `บริการดูแลที่บ้าน (Home Care) | KMC Hospital`,
          description: `บริการดูแลผู้ป่วยและผู้สูงอายุที่บ้าน โดยพยาบาลและนักกายภาพบำบัดของ KMC Hospital เดินทางถึงบ้านคุณ ดูแลแผล ทำกายภาพ และติดตามสุขภาพ ลดความจำเป็นต้องเดินทาง`,
          keywords: [
            `ดูแลที่บ้าน`,
            `Home Care พยาบาล`,
            `กายภาพบำบัดที่บ้าน`,
            `พยาบาลไปดูแลที่บ้าน`,
          ],
        },
        intro: `บริการดูแลที่บ้านของ KMC Hospital ให้ทีมพยาบาลและนักกายภาพบำบัดเดินทางไปดูแลผู้ป่วยหรือผู้สูงอายุถึงที่บ้าน ทั้งการทำแผล ให้สารน้ำ ทำกายภาพบำบัด และติดตามสุขภาพ เหมาะสำหรับผู้ที่เดินทางมาโรงพยาบาลลำบากแต่ยังต้องการการดูแลต่อเนื่องอย่างมีคุณภาพ`,
        highlights: [
          {
            title: `ยืดหยุ่นตามครอบครัว`,
            desc: `รายวัน รายสัปดาห์ หรือประจำ เลือกได้ตามความต้องการ`,
          },
          {
            title: `ทีมที่ผ่านการอบรม`,
            desc: `พยาบาลและผู้ดูแลภายใต้มาตรฐานเดียวกับโรงพยาบาล`,
          },
          {
            title: `เชื่อมต่อทีมแพทย์`,
            desc: `รายงานอาการถึงแพทย์ ปรับแผนการดูแลได้ต่อเนื่อง`,
          },
        ],
        forWho: [
          `ผู้ป่วยติดเตียงหรือเคลื่อนไหวลำบาก`,
          `ผู้ป่วยพักฟื้นหลังผ่าตัดที่ต้องทำแผลหรือทำกายภาพต่อเนื่อง`,
          `ผู้สูงอายุที่ครอบครัวต้องการให้ผู้เชี่ยวชาญดูแลถึงบ้าน`,
        ],
        steps: [
          `ติดต่อทีมดูแลที่บ้านเพื่อแจ้งความต้องการและอาการของผู้ป่วย`,
          `ทีมประเมินและวางแผนการดูแล (ทำแผล/กายภาพบำบัด/ติดตามสุขภาพ)`,
          `ทีมพยาบาล/นักกายภาพบำบัดเดินทางไปดูแลตามรอบที่กำหนด`,
          `รายงานความคืบหน้าและปรับแผนร่วมกับแพทย์เมื่อจำเป็น`,
        ],
        whyKmc: [
          `ทีมที่ไปดูแลที่บ้านเป็นทีมเดียวกับที่ดูแลในโรงพยาบาล เชื่อมข้อมูลอาการต่อเนื่อง ไม่ต้องเล่าประวัติซ้ำ`,
          `เชื่อมต่อกับ Telemedicine ให้แพทย์ร่วมประเมินจากระยะไกลได้ทันทีหากจำเป็น`,
        ],
        faq: [
          {
            q: `บริการดูแลที่บ้านครอบคลุมพื้นที่ไหนบ้าง?`,
            a: `ครอบคลุมพื้นที่ใกล้เคียงโรงพยาบาล สอบถามพื้นที่ให้บริการที่แน่นอนได้กับเจ้าหน้าที่`,
          },
          {
            q: `ต้องดูแลทุกวันหรือเลือกความถี่ได้?`,
            a: `เลือกความถี่ได้ตามความจำเป็นของอาการ ตั้งแต่รายครั้งจนถึงดูแลต่อเนื่องรายสัปดาห์`,
          },
          {
            q: `หากอาการทรุดระหว่างดูแลที่บ้านต้องทำอย่างไร?`,
            a: `ทีมงานมีแนวทางประสานส่งต่อมาที่โรงพยาบาลได้ทันที`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจดูแลที่บ้านรายครั้ง (ทำแผล/กายภาพบำบัด)`,
          `แพ็กเกจดูแลที่บ้านต่อเนื่องรายเดือน`,
        ],
        cta: {
          primary: {
            label: `นัดทีมดูแลที่บ้าน`,
            to: `/contact?service=home-care#appointment`,
          },
          secondary: {
            label: `สอบถามพื้นที่ให้บริการ`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Home Care`,
        tagline: `Nurses and caregivers at your home, on your schedule`,
        h1: `Home care: our nurses and therapists come to you`,
        meta: {
          title: `Home Care Services | KMC Hospital`,
          description: `KMC Hospital nurses and physiotherapists visit patients and older adults at home, wound care, IV therapy, physiotherapy and health monitoring, without the journey in.`,
          keywords: [
            `home care service`,
            `home nursing care`,
            `physiotherapy at home`,
            `nurse home visit Bangkok`,
          ],
        },
        intro: `KMC Hospital’s home care service sends nurses and physiotherapists to the patient’s home, wound care, IV fluids, physiotherapy and health monitoring, for people who find the journey to hospital difficult but still need proper continuing care.`,
        highlights: [
          {
            title: `Flexible arrangements`,
            desc: `Daily, weekly, or live-in, whichever fits your family`,
          },
          {
            title: `Trained team`,
            desc: `Nurses and caregivers held to hospital standards`,
          },
          {
            title: `Connected to our doctors`,
            desc: `Condition reports flow back so care plans keep up`,
          },
        ],
        forWho: [
          `Bedridden patients, or anyone with limited mobility`,
          `Post-surgical patients needing ongoing wound care or physiotherapy`,
          `Older adults whose families want professional care delivered at home`,
        ],
        steps: [
          `Contact the home care team with the patient’s needs and condition`,
          `The team assesses and builds a care plan (wound care, physiotherapy, monitoring)`,
          `Nurses and physiotherapists visit on the agreed schedule`,
          `Progress is reported and the plan adjusted with a doctor where needed`,
        ],
        whyKmc: [
          `The team visiting your home is the same team that cares for patients in the hospital, the record follows you, so nothing needs repeating.`,
          `Linked to telemedicine, so a doctor can join the assessment remotely when needed.`,
        ],
        faq: [
          {
            q: `Which areas do you cover?`,
            a: `The areas around the hospital. Ask our staff about the exact service area.`,
          },
          {
            q: `Does it have to be daily, or can we choose?`,
            a: `You choose the frequency your situation calls for, from single visits to ongoing weekly care.`,
          },
          {
            q: `What if the patient deteriorates during home care?`,
            a: `The team has a defined route to transfer the patient to the hospital immediately.`,
          },
        ],
        relatedPackages: [
          `Per-visit home care package (wound care / physiotherapy)`,
          `Monthly continuing home care package`,
        ],
        cta: {
          primary: {
            label: `Book the home care team`,
            to: `/contact?service=home-care#appointment`,
          },
          secondary: {
            label: `Ask about the service area`,
            href: lineUrl,
          },
        },
      },
    },
    hydrotherapy: {
      images: [
        `/images/photos/hydro/noodle-pair.webp`,
        `/images/photos/hydro/dumbbell-class.webp`,
        `/images/photos/hydro/pool-lift.webp`,
        `/images/photos/hydro/dumbbells.webp`,
        `/images/photos/hydro/group-class.webp`,
        `/images/photos/hydro/therapist-guide.webp`,
      ],
      th: {
        name: `ธาราบำบัด`,
        tagline: `ฟื้นฟูร่างกายในน้ำ ลดแรงกระแทก เพิ่มการเคลื่อนไหว`,
        h1: `ธาราบำบัด (Hydrotherapy) ฟื้นฟูร่างกายในน้ำ เคลื่อนไหวได้อย่างปลอดภัย`,
        meta: {
          title: `ธาราบำบัด (Hydrotherapy) ฟื้นฟูในน้ำ | KMC Hospital`,
          description: `ธาราบำบัดโดยนักกายภาพบำบัดผู้เชี่ยวชาญ ใช้คุณสมบัติของน้ำช่วยลดแรงกระแทกต่อข้อ เหมาะสำหรับฟื้นฟูข้อเข่า หลัง และผู้ป่วย Stroke ที่ต้องการการเคลื่อนไหวอย่างปลอดภัย`,
          keywords: [`ธาราบำบัด`, `Hydrotherapy`, `กายภาพบำบัดในน้ำ`, `ฟื้นฟูข้อเข่าในสระ`],
        },
        intro: `ธาราบำบัดของ KMC Hospital ใช้คุณสมบัติของน้ำ ทั้งแรงลอยตัวและแรงต้าน ช่วยให้ผู้ป่วยเคลื่อนไหวร่างกายได้ง่ายขึ้นโดยลดแรงกระแทกต่อข้อ ดำเนินการโดยนักกายภาพบำบัดผู้เชี่ยวชาญในสระธาราบำบัดที่ออกแบบมาเฉพาะทางการแพทย์`,
        highlights: [
          {
            title: `ลดแรงกระแทก`,
            desc: `แรงพยุงของน้ำช่วยให้ขยับข้อต่อได้โดยเจ็บน้อยลง`,
          },
          {
            title: `นักกายภาพประกบ`,
            desc: `ทุกเซสชันออกแบบและคุมโดยนักกายภาพบำบัด`,
          },
          {
            title: `สระมาตรฐาน`,
            desc: `[ รอรายละเอียดสระและอุปกรณ์จริง ]`,
          },
        ],
        forWho: [
          `ผู้ป่วยฟื้นฟูข้อเข่า ข้อสะโพก หรือหลังผ่าตัดกระดูก`,
          `ผู้ป่วย Stroke ที่ต้องฝึกการเคลื่อนไหวแต่ยังรับแรงกระแทกที่ข้อไม่ได้เต็มที่`,
          `ผู้ที่มีอาการปวดข้อเรื้อรังที่การออกกำลังกายบนบกทำได้ยาก`,
        ],
        steps: [
          `นักกายภาพบำบัดประเมินความสามารถและข้อจำกัดในการเคลื่อนไหว`,
          `ออกแบบโปรแกรมธาราบำบัดเฉพาะบุคคล`,
          `ฝึกในสระธาราบำบัดภายใต้การดูแลของนักกายภาพบำบัดตลอดโปรแกรม`,
          `ประเมินความก้าวหน้าและปรับโปรแกรมต่อเนื่อง`,
        ],
        whyKmc: [
          `มีสระธาราบำบัดที่ออกแบบเฉพาะทางการแพทย์ในโรงพยาบาล ไม่ใช่สระออกกำลังกายทั่วไป`,
          `นักกายภาพบำบัดดูแลตลอดโปรแกรม เชื่อมกับแผนฟื้นฟู Stroke และกายภาพบำบัดหลักในแผนเดียวกัน`,
        ],
        faq: [
          {
            q: `ธาราบำบัดต้องว่ายน้ำเป็นไหม?`,
            a: `ไม่จำเป็น นักกายภาพบำบัดจะดูแลและออกแบบท่าฝึกให้เหมาะกับความสามารถของแต่ละคน`,
          },
          {
            q: `อุณหภูมิน้ำเหมาะสมแค่ไหน?`,
            a: `สระธาราบำบัดควบคุมอุณหภูมิให้เหมาะกับการรักษาทางการแพทย์ ไม่เย็นจนทำให้กล้ามเนื้อเกร็งตัว`,
          },
          {
            q: `ใช้ร่วมกับกายภาพบำบัดปกติได้ไหม?`,
            a: `ได้ นักกายภาพบำบัดมักใช้ธาราบำบัดควบคู่กับกายภาพบำบัดบนบกเพื่อผลลัพธ์ที่ดีขึ้น`,
          },
        ],
        relatedPackages: [`คอร์สธาราบำบัด (รายครั้ง/แพ็กเกจ)`],
        cta: {
          primary: {
            label: `นัดประเมินก่อนเริ่มธาราบำบัด`,
            to: `/contact?service=hydrotherapy#appointment`,
          },
          secondary: {
            label: `สอบถามตารางสระธาราบำบัด`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Hydrotherapy`,
        tagline: `Water-based rehab: less impact, more movement`,
        h1: `Hydrotherapy: recovery in water, movement without the impact`,
        meta: {
          title: `Hydrotherapy: Recovery in Water | KMC Hospital`,
          description: `Hydrotherapy with specialist physiotherapists, using the properties of water to take load off the joints, for knee and back recovery and for stroke patients who need to move safely.`,
          keywords: [
            `hydrotherapy`,
            `aquatic physical therapy`,
            `pool rehabilitation`,
            `knee rehabilitation in water`,
          ],
        },
        intro: `KMC Hospital’s hydrotherapy uses the buoyancy and resistance of water to make movement easier while taking load off the joints, run by specialist physiotherapists in a pool designed for clinical use.`,
        highlights: [
          {
            title: `Low impact`,
            desc: `Buoyancy lets joints move with less pain`,
          },
          {
            title: `Therapist-led sessions`,
            desc: `Every session designed and supervised by a physiotherapist`,
          },
          {
            title: `Purpose-built pool`,
            desc: `[ Pool and equipment details to be confirmed ]`,
          },
        ],
        forWho: [
          `Patients recovering from knee or hip surgery, or other orthopaedic surgery`,
          `Stroke patients who need to practise movement but cannot yet take full load through the joints`,
          `People with chronic joint pain for whom land-based exercise is difficult`,
        ],
        steps: [
          `A physiotherapist assesses movement ability and limitations`,
          `An individual hydrotherapy program is designed`,
          `Sessions in the therapy pool, supervised by a physiotherapist throughout`,
          `Progress reviewed and the program adjusted as you go`,
        ],
        whyKmc: [
          `A therapy pool designed for clinical use inside the hospital, not a general exercise pool.`,
          `A physiotherapist supervises every session, and the program sits inside the same plan as stroke rehabilitation and core physiotherapy.`,
        ],
        faq: [
          {
            q: `Do I need to know how to swim?`,
            a: `No. A physiotherapist supervises and designs the movements around what you are able to do.`,
          },
          {
            q: `What temperature is the water?`,
            a: `The therapy pool is temperature-controlled for clinical use, never cold enough to tighten the muscles.`,
          },
          {
            q: `Can it be combined with regular physiotherapy?`,
            a: `Yes. Physiotherapists often pair hydrotherapy with land-based physiotherapy for better results.`,
          },
        ],
        relatedPackages: [`Hydrotherapy course (per session / package)`],
        cta: {
          primary: {
            label: `Book a pre-hydrotherapy assessment`,
            to: `/contact?service=hydrotherapy#appointment`,
          },
          secondary: {
            label: `Ask about pool times`,
            href: lineUrl,
          },
        },
      },
    },
    "chinese-medicine": {
      images: [
        `/images/photos/chinese/doctor-patient.webp`,
        `/images/photos/chinese/acupuncture-machine.webp`,
        `/images/photos/chinese/cupping-fire.webp`,
        `/images/photos/chinese/electro-close.webp`,
        `/images/photos/chinese/acupoint-model.webp`,
        `/images/photos/chinese/cupping-rest.webp`,
        `/images/photos/chinese/pulse-hands.webp`,
      ],
      th: {
        name: `แพทย์แผนจีน`,
        tagline: `ศาสตร์ตะวันออกดั้งเดิม ผสานการดูแลแบบองค์รวม`,
        h1: `แพทย์แผนจีน ดูแลร่างกายแบบองค์รวมด้วยศาสตร์การแพทย์แผนจีน`,
        meta: {
          title: `แพทย์แผนจีน ฝังเข็ม สมุนไพรจีน | KMC Hospital`,
          description: `บริการแพทย์แผนจีนโดยแพทย์จีนผู้เชี่ยวชาญ ฝังเข็ม ครอบแก้ว จ่ายยาสมุนไพรจีน ดูแลอาการปวดเรื้อรัง อัมพฤกษ์ และฟื้นฟูร่างกายแบบองค์รวม`,
          keywords: [`แพทย์แผนจีน`, `ฝังเข็ม`, `คลินิกแพทย์จีนใกล้บ้าน`, `สมุนไพรจีน`],
        },
        intro: `บริการแพทย์แผนจีนของ KMC Hospital ให้การดูแลด้วยศาสตร์การแพทย์แผนจีนโดยแพทย์จีนที่ได้รับใบประกอบวิชาชีพ ครอบคลุมการฝังเข็ม ครอบแก้ว และการจ่ายยาสมุนไพรจีน เพื่อบรรเทาอาการปวดเรื้อรัง ฟื้นฟูร่างกาย และดูแลสุขภาพแบบองค์รวมควบคู่กับการแพทย์แผนปัจจุบัน`,
        highlights: [
          {
            title: `ฝังเข็ม`,
            desc: `บรรเทาปวด ฟื้นฟูระบบประสาท และปรับสมดุล`,
          },
          {
            title: `ทำงานร่วมกับแผนปัจจุบัน`,
            desc: `วางแผนร่วมกับแพทย์เจ้าของไข้ ไม่ขัดการรักษาหลัก`,
          },
          {
            title: `แพทย์จีนเฉพาะทาง`,
            desc: `[ รอข้อมูลแพทย์และใบประกอบวิชาชีพ ]`,
          },
        ],
        forWho: [
          `ผู้ที่มีอาการปวดเรื้อรัง (ปวดคอ บ่า หลัง ไมเกรน)`,
          `ผู้ป่วยอัมพฤกษ์-อัมพาตที่ต้องการฟื้นฟูร่วมกับศาสตร์แผนจีน`,
          `ผู้ที่ต้องการดูแลสุขภาพแบบองค์รวมควบคู่การรักษาหลัก`,
        ],
        steps: [
          `พบแพทย์แผนจีนเพื่อซักประวัติและตรวจชีพจร/ลิ้นตามศาสตร์แผนจีน`,
          `วางแผนการรักษา (ฝังเข็ม/ครอบแก้ว/ยาสมุนไพร)`,
          `ติดตามผลและปรับแผนการรักษาต่อเนื่อง`,
        ],
        whyKmc: [
          `แพทย์จีนทำงานร่วมกับทีมกายภาพบำบัดและแพทย์แผนปัจจุบันในเคสเดียวกันได้ ไม่ต้องแยกสถานที่รักษา`,
          `เหมาะเป็นทางเลือกเสริมสำหรับผู้ป่วยฟื้นฟูโรคหลอดเลือดสมองและผู้สูงอายุที่ดูแลอยู่ในระบบ KMC อยู่แล้ว`,
        ],
        faq: [
          {
            q: `ฝังเข็มเจ็บไหม?`,
            a: `ความรู้สึกแตกต่างกันในแต่ละคน ส่วนใหญ่รู้สึกตึงหรือหน่วงเล็กน้อย ไม่ใช่ความเจ็บปวดรุนแรง`,
          },
          {
            q: `รักษากี่ครั้งจึงเห็นผล?`,
            a: `ขึ้นอยู่กับอาการและความรุนแรง แพทย์จะประเมินและวางแผนจำนวนครั้งเป็นรายบุคคล`,
          },
          {
            q: `ใช้ร่วมกับยาแผนปัจจุบันได้ไหม?`,
            a: `แพทย์แผนจีนจะซักประวัติยาที่ใช้อยู่และพิจารณาความเหมาะสมร่วมกับแพทย์แผนปัจจุบัน`,
          },
        ],
        relatedPackages: [
          `คอร์สฝังเข็มบรรเทาอาการปวด (รายครั้ง/แพ็กเกจ)`,
          `คอร์สฟื้นฟูอัมพฤกษ์ด้วยแพทย์แผนจีน`,
        ],
        cta: {
          primary: {
            label: `นัดพบแพทย์แผนจีน`,
            to: `/contact?service=chinese-medicine#appointment`,
          },
          secondary: {
            label: `สอบถามอาการก่อนนัด`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Chinese Medicine`,
        tagline: `Traditional Eastern medicine, integrated holistically`,
        h1: `Chinese medicine: whole-body care through traditional Chinese practice`,
        meta: {
          title: `Chinese Medicine, Acupuncture & Herbal Care | KMC Hospital`,
          description: `Traditional Chinese medicine from licensed practitioners: acupuncture, cupping and Chinese herbal prescriptions for chronic pain, paresis and whole-body recovery.`,
          keywords: [
            `Chinese medicine clinic`,
            `acupuncture Bangkok`,
            `Chinese herbal medicine`,
            `cupping therapy`,
          ],
        },
        intro: `KMC Hospital’s Chinese medicine service is delivered by licensed practitioners and covers acupuncture, cupping and Chinese herbal prescriptions, easing chronic pain, supporting recovery and caring for the body as a whole alongside conventional medicine.`,
        highlights: [
          {
            title: `Acupuncture`,
            desc: `Pain relief, neuro rehabilitation, and rebalancing`,
          },
          {
            title: `Integrated with modern care`,
            desc: `Planned with your attending doctor, never against it`,
          },
          {
            title: `Specialist practitioners`,
            desc: `[ Practitioner credentials to be confirmed ]`,
          },
        ],
        forWho: [
          `People with chronic pain (neck, shoulder, back, migraine)`,
          `Patients with paresis or paralysis wanting Chinese medicine alongside their rehabilitation`,
          `Anyone wanting whole-body care alongside their main treatment`,
        ],
        steps: [
          `Consultation with a Chinese medicine practitioner, including pulse and tongue diagnosis`,
          `A treatment plan (acupuncture, cupping, herbal prescription)`,
          `Follow-up and continuous adjustment of the plan`,
        ],
        whyKmc: [
          `Our Chinese medicine practitioners can work on the same case as the physiotherapy team and Western-trained doctors, in one place.`,
          `A useful complement for stroke rehabilitation patients and older adults already under KMC care.`,
        ],
        faq: [
          {
            q: `Does acupuncture hurt?`,
            a: `It varies between people. Most describe a mild tightness or heaviness rather than sharp pain.`,
          },
          {
            q: `How many sessions before I notice a difference?`,
            a: `It depends on the condition and its severity, your practitioner will assess and plan the number of sessions individually.`,
          },
          {
            q: `Can it be combined with Western medication?`,
            a: `Your practitioner will review the medication you are taking and consider suitability together with your doctor.`,
          },
        ],
        relatedPackages: [
          `Acupuncture pain-relief course (per session / package)`,
          `Chinese medicine paresis rehabilitation course`,
        ],
        cta: {
          primary: {
            label: `Book a Chinese medicine consultation`,
            to: `/contact?service=chinese-medicine#appointment`,
          },
          secondary: {
            label: `Describe your symptoms first`,
            href: lineUrl,
          },
        },
      },
    },
    "thai-massage": {
      images: [
        `/images/photos/thai/back-press-close.webp`,
        `/images/photos/thai/leg-stretch.webp`,
        `/images/photos/thai/neck.webp`,
        `/images/photos/thai/seated-stretch.webp`,
        `/images/photos/thai/sitting-stretch.webp`,
      ],
      th: {
        name: `กายภาพบำบัดแผนไทย`,
        tagline: `ภูมิปัญญาไทย ผสานหลักกายภาพบำบัด เพื่อการฟื้นฟูร่างกาย`,
        h1: `กายภาพบำบัดแผนไทย ฟื้นฟูร่างกายอย่างอ่อนโยนด้วยศาสตร์ไทย`,
        meta: {
          title: `กายภาพบำบัดแผนไทย นวดไทยเพื่อการรักษา | KMC Hospital`,
          description: `กายภาพบำบัดแผนไทยโดยผู้เชี่ยวชาญ ผสานนวดไทยเพื่อการรักษา ประคบสมุนไพร และท่าบริหารแบบไทย ช่วยคลายกล้ามเนื้อ ลดอาการปวด ฟื้นฟูร่างกายอย่างอ่อนโยน`,
          keywords: [`กายภาพบำบัดแผนไทย`, `นวดไทยเพื่อการรักษา`, `ประคบสมุนไพร`, `คลายกล้ามเนื้อ`],
        },
        intro: `กายภาพบำบัดแผนไทยของ KMC Hospital ผสานองค์ความรู้นวดไทยเพื่อการรักษาเข้ากับหลักกายภาพบำบัด ช่วยคลายกล้ามเนื้อที่ตึงตัว ลดอาการปวด และฟื้นฟูการเคลื่อนไหวอย่างอ่อนโยน เหมาะสำหรับผู้ที่ต้องการการดูแลแบบไทยควบคู่กับหลักวิชาการที่ปลอดภัย`,
        highlights: [
          {
            title: `ปรับให้เหมาะแต่ละราย`,
            desc: `ท่าและน้ำหนักมือออกแบบตามสภาพร่างกาย`,
          },
          {
            title: `เสริมการฟื้นฟู`,
            desc: `ทำงานร่วมกับแผนกายภาพบำบัดหลักของผู้ป่วย`,
          },
          {
            title: `นักกายภาพบำบัดวิชาชีพ`,
            desc: `ประเมินอาการก่อนรักษา ไม่ใช่การนวดผ่อนคลายทั่วไป`,
          },
        ],
        forWho: [
          `ผู้มีอาการปวดกล้ามเนื้อ/เอ็นจากการทำงานหรือ Office Syndrome`,
          `ผู้สูงอายุที่ต้องการการฟื้นฟูแบบอ่อนโยน`,
          `ผู้ที่ชอบแนวทางนวดไทยแต่ต้องการความปลอดภัยระดับการแพทย์`,
        ],
        steps: [
          `นักกายภาพบำบัดประเมินอาการและจุดที่ตึงตัว`,
          `เลือกวิธีดูแล (นวดไทยเพื่อการรักษา/ประคบสมุนไพร/ท่าบริหาร) ตามอาการ`,
          `ติดตามความคืบหน้าและปรับโปรแกรมต่อเนื่อง`,
        ],
        whyKmc: [
          `ดำเนินการโดยนักกายภาพบำบัดที่มีใบประกอบวิชาชีพ ไม่ใช่พนักงานนวดทั่วไป`,
          `เชื่อมกับแผนกกายภาพบำบัดหลักและโปรแกรม Office Syndrome ได้ในที่เดียว`,
        ],
        faq: [
          {
            q: `ต่างจากนวดแผนไทยทั่วไปอย่างไร?`,
            a: `ดำเนินการโดยนักกายภาพบำบัดที่ประเมินอาการก่อนรักษา เน้นแก้ปัญหาเฉพาะจุดตามหลักวิชาการ ไม่ใช่การนวดเพื่อผ่อนคลายทั่วไป`,
          },
          {
            q: `เหมาะกับผู้สูงอายุไหม?`,
            a: `เหมาะ เพราะเป็นการดูแลแบบอ่อนโยน นักกายภาพบำบัดจะปรับแรงและวิธีให้เหมาะกับสภาพร่างกายแต่ละคน`,
          },
          {
            q: `ต้องมาบ่อยแค่ไหน?`,
            a: `ขึ้นอยู่กับอาการ นักกายภาพบำบัดจะแนะนำความถี่ที่เหมาะสมหลังประเมินครั้งแรก`,
          },
        ],
        relatedPackages: [`คอร์สกายภาพบำบัดแผนไทย (รายครั้ง/แพ็กเกจ 5-10 ครั้ง)`],
        cta: {
          primary: {
            label: `นัดประเมินอาการ`,
            to: `/contact?service=thai-massage#appointment`,
          },
          secondary: {
            label: `สอบถามผ่าน LINE`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Traditional Thai Physical Therapy`,
        tagline: `Thai therapeutic technique applied to physical rehabilitation`,
        h1: `Traditional Thai physical therapy: gentle recovery, Thai technique`,
        meta: {
          title: `Traditional Thai Physical Therapy | KMC Hospital`,
          description: `Thai physical therapy from qualified specialists, combining therapeutic Thai massage, herbal compress and Thai exercise to release muscle tension and ease pain gently.`,
          keywords: [
            `Thai physical therapy`,
            `therapeutic Thai massage`,
            `herbal compress therapy`,
            `muscle tension relief`,
          ],
        },
        intro: `KMC Hospital’s Thai physical therapy combines therapeutic Thai massage with physiotherapy principles, releasing tight muscle, easing pain and restoring movement gently, for people who want Thai technique with clinical safety behind it.`,
        highlights: [
          {
            title: `Adapted to each patient`,
            desc: `Technique and pressure matched to physical condition`,
          },
          {
            title: `Supports rehabilitation`,
            desc: `Works alongside the patient’s core physiotherapy plan`,
          },
          {
            title: `Licensed physiotherapists`,
            desc: `Assessed before treatment, not general relaxation massage`,
          },
        ],
        forWho: [
          `People with muscle or tendon pain from work or office syndrome`,
          `Older adults wanting gentle rehabilitation`,
          `Anyone who prefers Thai technique but wants medical-grade safety`,
        ],
        steps: [
          `A physiotherapist assesses your symptoms and where the tension sits`,
          `A method is chosen to match (therapeutic Thai massage, herbal compress, exercise)`,
          `Progress is followed and the program adjusted over time`,
        ],
        whyKmc: [
          `Delivered by licensed physiotherapists, not general massage staff.`,
          `Connected to the core physiotherapy department and the Office Syndrome program in one place.`,
        ],
        faq: [
          {
            q: `How is this different from ordinary Thai massage?`,
            a: `A physiotherapist assesses you before treating, and the work targets a specific problem on clinical grounds rather than general relaxation.`,
          },
          {
            q: `Is it suitable for older adults?`,
            a: `Yes. It is gentle care, and the physiotherapist adjusts pressure and technique to each person’s physical condition.`,
          },
          {
            q: `How often should I come?`,
            a: `It depends on your symptoms. Your physiotherapist will recommend a frequency after the first assessment.`,
          },
        ],
        relatedPackages: [`Thai physical therapy course (per session / 5–10 session package)`],
        cta: {
          primary: {
            label: `Book an assessment`,
            to: `/contact?service=thai-massage#appointment`,
          },
          secondary: {
            label: `Ask us on LINE`,
            href: lineUrl,
          },
        },
      },
    },
    "health-monitoring": {
      images: [
        `/images/photos/hospital/health-check.webp`,
        `/images/photos/physio/balance.webp`,
        `/images/photos/sleep/sensor-fit.webp`,
      ],
      th: {
        name: `โปรแกรมติดตามสุขภาพ (Lab + App)`,
        h1: `โปรแกรมติดตามสุขภาพ (Lab + App) รู้แนวโน้มสุขภาพ ก่อนอาการจะแสดงออกมา`,
        tagline: `เชื่อมผลตรวจแล็บเข้ากับแอป เห็นแนวโน้มสุขภาพต่อเนื่อง ไม่ใช่แค่ตัวเลขครั้งเดียว`,
        meta: {
          title: `โปรแกรมติดตามสุขภาพ Lab+App | KMC Hospital`,
          description: `โปรแกรมติดตามสุขภาพเชื่อมผลแล็บเข้ากับแอปพลิเคชัน ให้คุณและแพทย์เห็นแนวโน้มสุขภาพล่วงหน้า แจ้งเตือนความเสี่ยงก่อนป่วย ตามแนวคิด P4 ของ KMC Hospital`,
          keywords: [
            `โปรแกรมติดตามสุขภาพ`,
            `ตรวจสุขภาพเชื่อมแอป`,
            `ติดตามผลแล็บออนไลน์`,
            `สุขภาพเชิงป้องกัน`,
          ],
        },
        intro: `โปรแกรมติดตามสุขภาพของ KMC Hospital เชื่อมผลตรวจทางห้องปฏิบัติการเข้ากับแอปพลิเคชัน ให้คุณเห็นแนวโน้มค่าสุขภาพของตัวเองอย่างต่อเนื่อง ไม่ใช่แค่ตัวเลขครั้งเดียวตอนตรวจ ทีมแพทย์สามารถแจ้งเตือนความเสี่ยงได้ล่วงหน้า ตามแนวคิด Predictive ซึ่งเป็นหนึ่งในหลัก P4 ของโรงพยาบาล`,
        highlights: [
          {
            title: `เห็นแนวโน้ม ไม่ใช่แค่ตัวเลข`,
            desc: `ผลตรวจย้อนหลังเรียงต่อเนื่องในแอป เทียบการเปลี่ยนแปลงได้เอง`,
          },
          {
            title: `แจ้งเตือนก่อนเป็นโรค`,
            desc: `ทีมแพทย์ติดตามค่าและแจ้งเตือนเมื่อพบแนวโน้มความเสี่ยง`,
          },
          {
            title: `เชื่อมกับแล็บและแพทย์ของโรงพยาบาลจริง`,
            desc: `ไม่ใช่แอปบันทึกสุขภาพทั่วไปที่ไม่เชื่อมกับสถานพยาบาล`,
          },
        ],
        forWho: [
          `ผู้ที่มีความเสี่ยงโรคเรื้อรัง (เบาหวาน ความดัน ไขมัน) ที่ต้องการติดตามค่าอย่างต่อเนื่อง`,
          `ผู้ที่ตรวจสุขภาพประจำปีแล้วอยากรู้แนวโน้มเปลี่ยนแปลงระหว่างปี ไม่ใช่แค่ผลปีละครั้ง`,
          `องค์กรที่ต้องการโปรแกรมสุขภาพเชิงป้องกันให้พนักงานระยะยาว`,
        ],
        steps: [
          `ตรวจแล็บพื้นฐานเพื่อเริ่มบันทึกข้อมูลสุขภาพ`,
          `เชื่อมผลตรวจเข้าสู่แอปพลิเคชันของโปรแกรม`,
          `ระบบและทีมแพทย์ติดตามแนวโน้มค่าสุขภาพอย่างต่อเนื่อง`,
          `แจ้งเตือนและให้คำแนะนำเมื่อพบแนวโน้มความเสี่ยง ก่อนกลายเป็นอาการป่วย`,
        ],
        whyKmc: [
          `เป็นหนึ่งในบริการเรือธงที่ออกแบบตามแนวคิด P4 โดยเฉพาะ เชื่อมกับแผนกตรวจแล็บและแพทย์เฉพาะทางในโรงพยาบาลเดียวกัน`,
          `ผู้ป่วยและครอบครัวเห็นข้อมูลของตัวเองได้เอง สอดคล้องหลัก Participation ที่ให้ทุกคนมีส่วนร่วมดูแลสุขภาพตัวเอง`,
        ],
        faq: [
          {
            q: `ต้องมีแอปสมาร์ทโฟนหรือไม่?`,
            a: `ต้องมี เพื่อใช้ดูแนวโน้มผลตรวจและรับการแจ้งเตือนจากทีมแพทย์`,
          },
          {
            q: `ต้องตรวจแล็บบ่อยแค่ไหน?`,
            a: `ความถี่ขึ้นอยู่กับแพ็กเกจและความเสี่ยงของแต่ละคน ทีมแพทย์จะแนะนำรอบการตรวจที่เหมาะสม`,
          },
          {
            q: `เหมาะกับคนที่สุขภาพแข็งแรงดีอยู่แล้วไหม?`,
            a: `เหมาะ เพราะเป้าหมายคือป้องกันและรู้ความเสี่ยงล่วงหน้า ไม่ใช่รอให้มีอาการก่อนจึงตรวจ`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจติดตามสุขภาพรายเดือน/รายปี (Lab+App)`,
          `แพ็กเกจองค์กร (Lab+App สำหรับพนักงาน)`,
        ],
        cta: {
          primary: {
            label: `สมัครโปรแกรมติดตามสุขภาพ`,
            to: `/contact?service=health-monitoring#appointment`,
          },
          secondary: {
            label: `สอบถามรายละเอียดแอป`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Health Monitoring Program (Lab + App)`,
        h1: `Health Monitoring (Lab + App): see where your health is heading, before symptoms show`,
        tagline: `Lab results linked to an app, so you see the trend: not a single number once a year`,
        meta: {
          title: `Health Monitoring Program (Lab + App) | KMC Hospital`,
          description: `A health monitoring program linking your lab results to an app, so you and our doctors can see health trends early and act on risk before illness, the Predictive pillar of KMC Hospital’s P4 approach.`,
          keywords: [
            `health monitoring program`,
            `lab results app`,
            `preventive health Thailand`,
            `predictive health care`,
          ],
        },
        intro: `KMC Hospital’s health monitoring program links your laboratory results to an app, so you can follow your own health values over time rather than reading a single set of numbers once a year. Our medical team can flag emerging risk early, the Predictive pillar of the hospital’s P4 approach.`,
        highlights: [
          {
            title: `Trends, not isolated numbers`,
            desc: `Past results sit side by side in the app so change is visible`,
          },
          {
            title: `Early risk alerts`,
            desc: `Our doctors follow your values and reach out when a trend needs attention`,
          },
          {
            title: `Connected to a real hospital`,
            desc: `Linked to our own lab and specialists, not a standalone tracking app`,
          },
        ],
        forWho: [
          `People at risk of chronic disease (diabetes, hypertension, cholesterol) who want continuous tracking`,
          `Anyone who has an annual check-up but wants to see what changes in between`,
          `Organizations wanting a long-term preventive health program for employees`,
        ],
        steps: [
          `A baseline lab panel to start your health record`,
          `Results are linked into the program’s app`,
          `Our system and medical team follow your values over time`,
          `You get alerts and advice when a risk trend appears, before it becomes illness`,
        ],
        whyKmc: [
          `A flagship service built around the P4 approach, connected to the same lab department and specialists inside the hospital.`,
          `Patients and families can see their own data, the Participation pillar, where everyone takes part in their own care.`,
        ],
        faq: [
          {
            q: `Do I need a smartphone app?`,
            a: `Yes, the app is how you view your result trends and receive alerts from the medical team.`,
          },
          {
            q: `How often do I need lab tests?`,
            a: `It depends on your package and personal risk. Our doctors will recommend a testing interval that suits you.`,
          },
          {
            q: `Is it worth it if I am already healthy?`,
            a: `Yes. The point is prevention and seeing risk early, rather than waiting for symptoms before testing.`,
          },
        ],
        relatedPackages: [
          `Monthly / annual health monitoring package (Lab + App)`,
          `Corporate package (Lab + App for employees)`,
        ],
        cta: {
          primary: {
            label: `Join the monitoring program`,
            to: `/contact?service=health-monitoring#appointment`,
          },
          secondary: {
            label: `Ask about the app`,
            href: lineUrl,
          },
        },
      },
    },
    "annual-checkup-vaccine": {
      images: [
        `/images/photos/chinese/neck-exam.webp`,
        `/images/photos/hospital/pulse-diagnosis.webp`,
        `/images/photos/chinese/jaw-exam.webp`,
        `/images/photos/hospital/exam-room.webp`,
      ],
      th: {
        name: `ตรวจสุขภาพประจำปี & วัคซีน`,
        h1: `ตรวจสุขภาพประจำปีและวัคซีน ป้องกันก่อนป่วย ในจุดเดียวกัน`,
        tagline: `แพ็กเกจตรวจตามช่วงวัย พร้อมวัคซีนที่จำเป็นสำหรับผู้ใหญ่และผู้สูงอายุ`,
        meta: {
          title: `ตรวจสุขภาพประจำปีและวัคซีนผู้ใหญ่ | KMC Hospital`,
          description: `แพ็กเกจตรวจสุขภาพประจำปีตามช่วงวัย พร้อมวัคซีนที่จำเป็นสำหรับผู้ใหญ่และผู้สูงอายุ ตรวจครบ วางแผนป้องกันโรคล่วงหน้าตามแนวคิด P4 ของ KMC Hospital`,
          keywords: [
            `ตรวจสุขภาพประจำปีราคา`,
            `วัคซีนผู้ใหญ่มีอะไรบ้าง`,
            `ตรวจสุขภาพผู้สูงอายุ`,
            `วัคซีนไข้หวัดใหญ่ผู้สูงอายุ`,
          ],
        },
        intro: `บริการตรวจสุขภาพประจำปีและวัคซีนของ KMC Hospital ออกแบบแพ็กเกจตามช่วงวัยและความเสี่ยงของแต่ละคน พร้อมให้คำแนะนำวัคซีนที่จำเป็นสำหรับผู้ใหญ่และผู้สูงอายุ เพื่อลดโอกาสเจ็บป่วยตั้งแต่ต้นทาง ตามแนวคิด Prevention ที่เป็นหัวใจของ KMC Hospital`,
        highlights: [
          {
            title: `แพ็กเกจตามช่วงวัย`,
            desc: `รายการตรวจต่างกันตามวัย 20+ / 40+ / 60+ ไม่ใช่แพ็กเกจเดียวสำหรับทุกคน`,
          },
          {
            title: `ตรวจและฉีดวัคซีนในที่เดียว`,
            desc: `ฟังผลกับแพทย์ แล้วรับวัคซีนที่จำเป็นต่อได้เลย`,
          },
          {
            title: `หน่วยเคลื่อนที่ถึงพื้นที่`,
            desc: `จัดกิจกรรมตรวจสุขภาพและวัคซีนให้องค์กรและหมู่บ้านได้`,
          },
        ],
        forWho: [
          `ผู้ที่ต้องการตรวจสุขภาพประจำปีตามช่วงวัย (20+, 40+, 60+)`,
          `ผู้สูงอายุที่ต้องการวัคซีนป้องกันโรค (ไข้หวัดใหญ่ ปอดอักเสบ งูสวัด)`,
          `องค์กรที่ต้องการจัดตรวจสุขภาพและฉีดวัคซีนให้พนักงานประจำปี`,
          `ชุมชน/หมู่บ้านที่ต้องการจัดกิจกรรมตรวจสุขภาพและฉีดวัคซีนให้ลูกบ้าน`,
        ],
        steps: [
          `เลือกแพ็กเกจตามช่วงวัยหรือให้แพทย์ประเมินความเสี่ยงเพื่อแนะนำรายการที่เหมาะสม`,
          `ตรวจร่างกายและตรวจแล็บตามแพ็กเกจ`,
          `พบแพทย์ฟังผลและรับคำแนะนำวัคซีนที่จำเป็น`,
          `รับวัคซีนตามคำแนะนำและวางแผนการตรวจ/ฉีดครั้งต่อไป`,
        ],
        whyKmc: [
          `แพ็กเกจออกแบบตามช่วงวัยจริง ไม่ใช่แพ็กเกจเดียวสำหรับทุกคน`,
          `ต่อยอดเข้าโปรแกรมติดตามสุขภาพ (Lab+App) ได้ทันทีหากต้องการติดตามผลต่อเนื่องระหว่างปี`,
          `มีบริการหน่วยเคลื่อนที่สำหรับจัดกิจกรรมตรวจสุขภาพ/วัคซีนถึงในหมู่บ้านและองค์กร`,
        ],
        faq: [
          {
            q: `ควรตรวจสุขภาพประจำปีบ่อยแค่ไหน?`,
            a: `โดยทั่วไปควรตรวจปีละ 1 ครั้ง แต่ผู้มีความเสี่ยงหรือโรคประจำตัวอาจต้องตรวจถี่กว่านั้น แพทย์จะแนะนำตามความเหมาะสม`,
          },
          {
            q: `ผู้สูงอายุต้องฉีดวัคซีนอะไรบ้าง?`,
            a: `ที่พบบ่อย เช่น วัคซีนไข้หวัดใหญ่ ปอดอักเสบ และงูสวัด แพทย์จะประเมินและแนะนำตามสุขภาพและประวัติของแต่ละคน`,
          },
          {
            q: `จัดกิจกรรมตรวจสุขภาพให้หมู่บ้าน/องค์กรได้ไหม?`,
            a: `ได้ มีทีมและหน่วยเคลื่อนที่สำหรับจัดกิจกรรมตรวจสุขภาพและฉีดวัคซีนถึงในพื้นที่ ติดต่อทีมองค์กรและชุมชนของโรงพยาบาลเพื่อวางแผนร่วมกัน`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจตรวจสุขภาพตามช่วงวัย (20+/40+/60+)`,
          `แพ็กเกจวัคซีนผู้ใหญ่/ผู้สูงอายุ`,
          `แพ็กเกจกิจกรรมตรวจสุขภาพ+วัคซีนสำหรับหมู่บ้าน/องค์กร`,
        ],
        cta: {
          primary: {
            label: `จองคิวตรวจสุขภาพประจำปี`,
            to: `/contact?service=annual-checkup-vaccine#appointment`,
          },
          secondary: {
            label: `สอบถามแพ็กเกจวัคซีน`,
            href: lineUrl,
          },
        },
      },
      en: {
        name: `Annual Health Check-up & Vaccines`,
        h1: `Annual check-ups and vaccines: prevention, in one place`,
        tagline: `Check-up packages by age group, with the vaccines adults and seniors actually need`,
        meta: {
          title: `Annual Health Check-up & Adult Vaccines | KMC Hospital`,
          description: `Annual health check-up packages built around your age group, alongside the vaccines adults and older adults need, preventive planning under KMC Hospital’s P4 approach.`,
          keywords: [
            `annual health checkup`,
            `adult vaccines`,
            `senior health screening`,
            `flu vaccine for seniors`,
          ],
        },
        intro: `KMC Hospital’s annual check-up and vaccination service builds packages around your age group and personal risk, with guidance on the vaccines adults and older adults need, reducing the chance of illness at the source, under the Prevention pillar of our P4 approach.`,
        highlights: [
          {
            title: `Packages by age group`,
            desc: `Different panels for 20+, 40+ and 60+ rather than one package for everyone`,
          },
          {
            title: `Screening and vaccines together`,
            desc: `Review results with a doctor, then take the vaccines you need in the same visit`,
          },
          {
            title: `Mobile unit`,
            desc: `Check-up and vaccination events run on site for organizations and residential communities`,
          },
        ],
        forWho: [
          `Anyone due an annual check-up for their age group (20+, 40+, 60+)`,
          `Older adults needing preventive vaccines (influenza, pneumococcal, shingles)`,
          `Organizations running annual employee screening and vaccination`,
          `Communities and residential villages organizing health events for residents`,
        ],
        steps: [
          `Choose a package by age group, or have a doctor assess your risk and recommend the right panel`,
          `Physical examination and lab work per the package`,
          `Review the results with a doctor and get vaccine recommendations`,
          `Receive the recommended vaccines and plan the next round`,
        ],
        whyKmc: [
          `Packages are designed around real age groups, not one panel for everyone.`,
          `Roll straight into the Health Monitoring Program (Lab + App) if you want to follow your values through the year.`,
          `A mobile unit runs screening and vaccination events inside organizations and residential communities.`,
        ],
        faq: [
          {
            q: `How often should I have a check-up?`,
            a: `Once a year for most people. Those with risk factors or an existing condition may need more frequent testing. Your doctor will advise.`,
          },
          {
            q: `Which vaccines do older adults need?`,
            a: `Commonly influenza, pneumococcal and shingles. A doctor will assess and recommend based on each person’s health and history.`,
          },
          {
            q: `Can you run a screening event for our village or company?`,
            a: `Yes. We have a team and a mobile unit for on-site screening and vaccination. Contact our corporate and community team to plan one.`,
          },
        ],
        relatedPackages: [
          `Age-based check-up packages (20+/40+/60+)`,
          `Adult and senior vaccine packages`,
          `On-site screening + vaccination packages for communities and organizations`,
        ],
        cta: {
          primary: {
            label: `Book an annual check-up`,
            to: `/contact?service=annual-checkup-vaccine#appointment`,
          },
          secondary: {
            label: `Ask about vaccine packages`,
            href: lineUrl,
          },
        },
      },
    },
    "office-syndrome": {
      images: [
        `/images/photos/physio/ultrasound.webp`,
        `/images/photos/physio/back-prep.webp`,
        `/images/photos/thai/back-press.webp`,
        `/images/photos/physio/pms-close.webp`,
      ],
      th: {
        name: `โปรแกรม Office Syndrome`,
        h1: `โปรแกรม Office Syndrome ดูแลวัยทำงาน ตั้งแต่ปวดครั้งแรกจนไม่กลับมาเป็นซ้ำ`,
        tagline: `ประเมินอาการ กายภาพบำบัด และวางแผนป้องกันการกลับมาเป็นซ้ำ`,
        meta: {
          title: `โปรแกรม Office Syndrome รักษาและป้องกัน | KMC Hospital`,
          description: `โปรแกรมดูแล Office Syndrome ครบวงจร ประเมินอาการ กายภาพบำบัด และวางแผนป้องกันการกลับมาเป็นซ้ำ เหมาะสำหรับวัยทำงานที่ปวดคอ บ่า หลัง จากการทำงานหน้าจอ`,
          keywords: [
            `Office Syndrome รักษาอย่างไร`,
            `กายภาพบำบัด Office Syndrome`,
            `ปวดคอบ่าไหล่วัยทำงาน`,
            `โปรแกรมองค์กร Office Syndrome`,
          ],
        },
        intro: `โปรแกรม Office Syndrome ของ KMC Hospital ออกแบบมาสำหรับวัยทำงานที่มีอาการปวดคอ บ่า ไหล่ หรือหลัง จากการนั่งทำงานหน้าจอเป็นเวลานาน ครอบคลุมตั้งแต่การประเมินอาการ กายภาพบำบัดเพื่อบรรเทาอาการ ไปจนถึงการวางแผนป้องกันไม่ให้อาการกลับมาเป็นซ้ำในระยะยาว`,
        highlights: [
          {
            title: `ประเมินถึงต้นเหตุ`,
            desc: `ดูทั้งอาการและท่าทางการทำงานจริง ไม่ใช่แค่บรรเทาจุดที่ปวด`,
          },
          {
            title: `บูรณาการหลายศาสตร์`,
            desc: `กายภาพบำบัด กายภาพบำบัดแผนไทย และแพทย์แผนจีน ในโปรแกรมเดียว`,
          },
          {
            title: `ต่อยอดเป็นสวัสดิการองค์กรได้`,
            desc: `ปรับเป็นโปรแกรมดูแลพนักงานให้บริษัทได้ทันที`,
          },
        ],
        forWho: [
          `คนวัยทำงานที่ปวดคอ บ่า ไหล่ หลัง จากการนั่งทำงานนาน`,
          `ผู้ที่มีอาการมือชา นิ้วล็อกจากการใช้คอมพิวเตอร์/มือถือต่อเนื่อง`,
          `องค์กรที่ต้องการโปรแกรม Office Syndrome เป็นสวัสดิการพนักงาน`,
        ],
        steps: [
          `ประเมินอาการและท่าทางการทำงานโดยนักกายภาพบำบัด`,
          `รักษาด้วยกายภาพบำบัด (เครื่องมือ/ท่าบริหาร/นวดไทยเพื่อการรักษาเสริม)`,
          `ให้คำแนะนำปรับสภาพแวดล้อมการทำงานและท่าทางที่ถูกต้อง`,
          `ติดตามผลและวางแผนป้องกันการกลับมาเป็นซ้ำ`,
        ],
        whyKmc: [
          `เชื่อมกายภาพบำบัดหลัก กายภาพบำบัดแผนไทย และแพทย์แผนจีนเป็นทางเลือกดูแลในโปรแกรมเดียว`,
          `ต่อยอดเป็นโปรแกรมองค์กรสำหรับบริษัทที่ต้องการดูแลพนักงานเชิงป้องกันระยะยาวได้ทันที`,
        ],
        faq: [
          {
            q: `ปวดคอบ่าไหล่แบบไหนควรมาพบแพทย์/นักกายภาพบำบัด?`,
            a: `หากปวดต่อเนื่องเกิน 1-2 สัปดาห์ มีอาการชาร่วมด้วย หรือปวดจนกระทบการทำงาน ควรเข้ารับการประเมิน`,
          },
          {
            q: `รักษากี่ครั้งจึงดีขึ้น?`,
            a: `ขึ้นอยู่กับความรุนแรงและระยะเวลาที่เป็น นักกายภาพบำบัดจะประเมินและวางแผนจำนวนครั้งเป็นรายบุคคล`,
          },
          {
            q: `มีโปรแกรมสำหรับองค์กรไหม?`,
            a: `มี ออกแบบเป็นสวัสดิการ Office Syndrome ให้พนักงาน ติดต่อทีมองค์กรและชุมชนของโรงพยาบาลเพื่อขอรายละเอียด`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจประเมิน+กายภาพบำบัด Office Syndrome (รายครั้ง/คอร์ส)`,
          `แพ็กเกจองค์กร Office Syndrome (สวัสดิการพนักงาน)`,
        ],
        cta: {
          primary: {
            label: `จองประเมินอาการฟรี`,
            to: `/contact?service=office-syndrome#appointment`,
          },
          secondary: {
            label: `สอบถามโปรแกรมองค์กร`,
            to: `/corporate`,
          },
        },
      },
      en: {
        name: `Office Syndrome Program`,
        h1: `Office Syndrome Program: from the first ache to not having it come back`,
        tagline: `Assessment, physiotherapy, and a plan that keeps the pain from returning`,
        meta: {
          title: `Office Syndrome Program: Treatment & Prevention | KMC Hospital`,
          description: `A complete office syndrome program, symptom assessment, physiotherapy, and a plan to prevent recurrence. For desk workers with neck, shoulder and back pain from screen work.`,
          keywords: [
            `office syndrome treatment`,
            `physiotherapy for office syndrome`,
            `neck and shoulder pain desk work`,
            `corporate office syndrome program`,
          ],
        },
        intro: `KMC Hospital’s Office Syndrome program is built for desk workers with neck, shoulder or back pain from long hours at a screen. It runs from symptom assessment through physiotherapy to relieve the pain, and on to a plan that keeps it from coming back.`,
        highlights: [
          {
            title: `Assessed at the cause`,
            desc: `We look at your working posture, not only the spot that hurts`,
          },
          {
            title: `Several disciplines, one program`,
            desc: `Physiotherapy, Thai physical therapy and Chinese medicine as options`,
          },
          {
            title: `Scales into a staff benefit`,
            desc: `The same program adapts into a corporate employee benefit`,
          },
        ],
        forWho: [
          `Desk workers with neck, shoulder or back pain from prolonged sitting`,
          `Anyone with numb hands or trigger finger from constant computer or phone use`,
          `Organizations wanting an office syndrome program as an employee benefit`,
        ],
        steps: [
          `A physiotherapist assesses your symptoms and working posture`,
          `Treatment through physiotherapy (equipment, exercise, Thai therapeutic massage as support)`,
          `Guidance on correcting your workstation setup and posture`,
          `Follow-up and a plan to prevent recurrence`,
        ],
        whyKmc: [
          `Core physiotherapy, Thai physical therapy and Chinese medicine sit inside one program as care options.`,
          `The same program extends into a corporate offering for companies investing in long-term preventive employee care.`,
        ],
        faq: [
          {
            q: `When should neck or shoulder pain be assessed?`,
            a: `If it persists beyond one to two weeks, comes with numbness, or is affecting your work, it is worth being assessed.`,
          },
          {
            q: `How many sessions until it improves?`,
            a: `It depends on severity and how long you have had it. Your physiotherapist will assess and plan the number of sessions individually.`,
          },
          {
            q: `Is there a program for companies?`,
            a: `Yes, designed as an office syndrome employee benefit. Contact our corporate and community team for details.`,
          },
        ],
        relatedPackages: [
          `Office syndrome assessment + physiotherapy (per session / course)`,
          `Corporate office syndrome package (employee benefit)`,
        ],
        cta: {
          primary: {
            label: `Book a free assessment`,
            to: `/contact?service=office-syndrome#appointment`,
          },
          secondary: {
            label: `Ask about the corporate program`,
            to: `/corporate`,
          },
        },
      },
    },
  },
  jsxRuntime = se(),
  languages = [
    {
      code: `th`,
      label: `ไทย`,
      short: `TH`,
    },
    {
      code: `en`,
      label: `English`,
      short: `EN`,
    },
  ];
function useLanguageSwitch() {
  let { i18n: e } = useTranslation(),
    { pathname: t, search: n, hash: r } = useLocation();
  return (i) => {
    i !== e.language && window.location.assign(_(t, i) + n + r);
  };
}
function ChevronIcon({ open: e }) {
  return (
    <svg
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={`currentColor`}
      strokeWidth={2}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
      className={`w-3.5 h-3.5 transition-transform duration-300 ${e ? `rotate-180` : ``}`}
    >
      <path d={`m6 9 6 6 6-6`} />
    </svg>
  );
}
function LanguageMenu() {
  let { i18n: e } = useTranslation(),
    t = useLanguageSwitch(),
    [n, r] = (0, React.useState)(!1),
    a = (0, React.useRef)(null),
    o = languages.find((t) => t.code === e.language) || languages[0];
  return (
    (0, React.useEffect)(() => {
      if (!n) return;
      function e(e) {
        a.current && !a.current.contains(e.target) && r(!1);
      }
      function t(e) {
        e.key === `Escape` && r(!1);
      }
      return (
        document.addEventListener(`mousedown`, e),
        document.addEventListener(`keydown`, t),
        () => {
          (document.removeEventListener(`mousedown`, e),
            document.removeEventListener(`keydown`, t));
        }
      );
    }, [n]),
    (
      <div ref={a} className={`relative`}>
        <button
          type={`button`}
          onClick={() => r((e) => !e)}
          aria-expanded={n}
          aria-haspopup={`listbox`}
          aria-label={e.language === `th` ? `เปลี่ยนภาษา` : `Change language`}
          className={`flex items-center gap-1.5 text-sm font-medium text-white/80 border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 transition`}
        >
          {o.short}
          <ChevronIcon open={n} />
        </button>
        {n && (
          <div
            role={`listbox`}
            className={`absolute top-full right-0 mt-2 w-36 rounded-2xl bg-white shadow-2xl border border-kmc-secondary/10 overflow-hidden py-1.5 animate-dropdown`}
          >
            {languages.map((n) => (
              <button
                key={n.code}
                type={`button`}
                role={`option`}
                aria-selected={n.code === e.language}
                onClick={() => {
                  (t(n.code), r(!1));
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${n.code === e.language ? `text-kmc-primary-deep font-medium` : `text-kmc-secondary/70 hover:bg-fog-1/60`}`}
              >
                {n.label}
                {n.code === e.language && (
                  <svg
                    viewBox={`0 0 24 24`}
                    className={`w-4 h-4`}
                    fill={`none`}
                    stroke={`currentColor`}
                    strokeWidth={2.2}
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                  >
                    <path d={`M20 7 9 18l-5-5`} />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  );
}
function MobileLanguageMenu() {
  let { i18n: e } = useTranslation(),
    t = useLanguageSwitch(),
    [n, r] = (0, React.useState)(!1),
    a = languages.find((t) => t.code === e.language) || languages[0];
  return (
    <div className={`rounded-xl bg-white/5 border border-white/10`}>
      <button
        type={`button`}
        onClick={() => r((e) => !e)}
        aria-expanded={n}
        className={`flex w-full items-center justify-between px-4 py-3 text-white/90 font-medium`}
      >
        <span>
          {e.language === `th` ? `ภาษา` : `Language`}
          {` · `}
          {a.label}
        </span>
        <ChevronIcon open={n} />
      </button>
      {n && (
        <div className={`border-t border-white/10 px-2 py-2 flex flex-col gap-1`}>
          {languages.map((n) => (
            <button
              key={n.code}
              type={`button`}
              onClick={() => {
                (t(n.code), r(!1));
              }}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${n.code === e.language ? `bg-white/15 text-white font-medium` : `text-white/70 hover:bg-white/10`}`}
            >
              {n.label}
              {n.code === e.language && (
                <svg
                  viewBox={`0 0 24 24`}
                  className={`w-4 h-4`}
                  fill={`none`}
                  stroke={`currentColor`}
                  strokeWidth={2.2}
                  strokeLinecap={`round`}
                  strokeLinejoin={`round`}
                >
                  <path d={`M20 7 9 18l-5-5`} />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
var P = {
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.8,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  "aria-hidden": !0,
};
function HealthIcon(e) {
  return (
    <svg {...P} {...e}>
      <path d={`M11 2v2`} />
      <path d={`M5 2v2`} />
      <path d={`M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1`} />
      <path d={`M8 15a6 6 0 0 0 12 0v-3`} />
      <circle cx={`20`} cy={`10`} r={`2`} />
    </svg>
  );
}
function TherapyIcon(e) {
  return (
    <svg {...P} {...e}>
      <circle cx={`12`} cy={`4.5`} r={`2`} />
      <path d={`m9 21 3-7 3 7`} />
      <path d={`m5 9 7 2 7-2`} />
      <path d={`M12 11v3`} />
    </svg>
  );
}
function CareIcon(e) {
  return (
    <svg {...P} {...e}>
      <path d={`M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16`} />
      <path
        d={`m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9`}
      />
      <path d={`m2 15 6 6`} />
      <path
        d={`M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z`}
      />
    </svg>
  );
}
function PreventionIcon(e) {
  return (
    <svg {...P} {...e}>
      <path d={`M12 3 5 6v5.5c0 4.2 2.9 8.1 7 9.5 4.1-1.4 7-5.3 7-9.5V6z`} />
      <path d={`M8.5 12h2l1.5-2.5L13.5 14l1-2h1`} />
    </svg>
  );
}
var De = {
  health: HealthIcon,
  physical: TherapyIcon,
  care: CareIcon,
  preventive: PreventionIcon,
};
function ServiceIcon({ category: e, className: t = `w-7 h-7` }) {
  let _Element = De[e];
  return _Element ? <_Element className={t} /> : null;
}
var navigationItems = [
  {
    key: `services`,
    to: `/services`,
    groups: serviceGroups,
  },
  {
    key: `doctors`,
    to: `/doctors`,
    hidden: !0,
    children: [
      {
        key: `specialists`,
        to: `/doctors/specialists`,
      },
      {
        key: `directory`,
        to: `/doctors/list`,
      },
    ],
  },
  {
    key: `facilities`,
    to: `/facilities`,
  },
  {
    key: `packages`,
    to: `/packages`,
  },
  {
    key: `corporate`,
    to: `/corporate`,
  },
  {
    key: `blog`,
    to: `/blog`,
  },
  {
    key: `contact`,
    to: `/contact`,
  },
  {
    key: `about`,
    to: `/about`,
  },
]
  .filter((e) => !e.hidden)
  .map((e) =>
    e.children
      ? {
          ...e,
          children: e.children.filter((e) => !e.hidden),
        }
      : e,
  );
var F = {
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.8,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    className: `w-4.5 h-4.5`,
  },
  je = [
    {
      key: `LINE`,
      Icon: () => (
        <svg {...F}>
          <path
            d={`M21 11.5a8.5 7.5 0 0 1-8.5 7.5c-.8 0-1.6-.1-2.3-.3L6 20l.7-2.8A8 7.3 0 0 1 4 11.5 8.5 7.5 0 0 1 12.5 4 8.5 7.5 0 0 1 21 11.5z`}
          />
        </svg>
      ),
    },
    {
      key: `Facebook`,
      Icon: () => (
        <svg {...F}>
          <path
            d={`M14 8h2V5h-2a3.5 3.5 0 0 0-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V8.8A.8.8 0 0 1 14 8z`}
          />
        </svg>
      ),
    },
    {
      key: `Instagram`,
      Icon: () => (
        <svg {...F}>
          <rect x={`4`} y={`4`} width={`16`} height={`16`} rx={`4`} />
          <circle cx={`12`} cy={`12`} r={`3.5`} />
          <circle cx={`17`} cy={`7`} r={`0.5`} fill={`currentColor`} />
        </svg>
      ),
    },
  ];
function Ne(e = 0.25) {
  let t = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let n = t.current;
      if (!n || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      function r(t) {
        let r = n.getBoundingClientRect(),
          i = (t.clientX - r.left - r.width / 2) * e,
          a = (t.clientY - r.top - r.height / 2) * e;
        w(n, {
          translateX: i,
          translateY: a,
          duration: 300,
          easing: `easeOutQuad`,
        });
      }
      function i() {
        w(n, {
          translateX: 0,
          translateY: 0,
          duration: 400,
          easing: `easeOutElastic(1, 0.6)`,
        });
      }
      return (
        n.addEventListener(`mousemove`, r),
        n.addEventListener(`mouseleave`, i),
        () => {
          (n.removeEventListener(`mousemove`, r), n.removeEventListener(`mouseleave`, i));
        }
      );
    }, [e]),
    t
  );
}
var Pe = `tel:+6621094210`,
  Fe = `02-109-4210`;
function Ie() {
  return (
    <svg viewBox={`0 0 24 24`} fill={`currentColor`} className={`w-5 h-5 sm:w-6 sm:h-6`}>
      <path
        d={`M12 2C6.48 2 2 5.66 2 10.15c0 4.02 3.58 7.39 8.42 8.03.33.07.77.22.88.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1 .88.55 1.07-.46 5.8-3.42 7.92-5.85C21.44 13.5 22 11.9 22 10.15 22 5.66 17.52 2 12 2zm-3.3 10.6H7.05a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v3.7h1.25a.4.4 0 1 1 0 .8zm2.1 0h-.8a.4.4 0 0 1-.4-.4V8.1a.4.4 0 1 1 .8 0v4.1a.4.4 0 0 1-.4.4zm4.65-.4a.4.4 0 0 1-.72.24l-1.88-2.56v2.32a.4.4 0 1 1-.8 0V8.1c0-.18.12-.34.29-.38a.4.4 0 0 1 .43.14l1.88 2.56V8.1a.4.4 0 1 1 .8 0v4.1zm2.65.4h-1.65a.4.4 0 0 1-.4-.4V8.1a.4.4 0 0 1 .4-.4h1.65a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8h-1.25v.98h1.25a.4.4 0 1 1 0 .8z`}
      />
    </svg>
  );
}
function Le() {
  return (
    <svg
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={`currentColor`}
      strokeWidth={1.8}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
      className={`w-5 h-5 sm:w-6 sm:h-6`}
    >
      <path
        d={`M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z`}
      />
    </svg>
  );
}
function Re({ variant: e, isTh: t }) {
  let [n, r] = (0, React.useState)(!1),
    i = (0, React.useRef)(null),
    a = Ne(0.3);
  (0, React.useEffect)(() => {
    if (!n) return;
    function e(e) {
      i.current && !i.current.contains(e.target) && r(!1);
    }
    function t(e) {
      e.key === `Escape` && r(!1);
    }
    return (
      document.addEventListener(`mousedown`, e),
      document.addEventListener(`keydown`, t),
      () => {
        (document.removeEventListener(`mousedown`, e), document.removeEventListener(`keydown`, t));
      }
    );
  }, [n]);
  let o = t ? `โทรหาเรา` : `Call us`;
  return (
    <div ref={i} className={e === `stack` ? `relative` : `relative w-full`}>
      {n && (
        <div
          role={`dialog`}
          className={`
            absolute
            ${e === `stack` ? `right-0 bottom-[calc(100%+0.75rem)]` : `left-1/2 -translate-x-1/2 bottom-[calc(100%+0.75rem)]`}
            w-56
            rounded-2xl
            bg-white
            shadow-2xl
            border
            border-kmc-secondary/10
            p-4
            text-center
          `}
        >
          <p className={`text-xs text-kmc-secondary/60 mb-1.5`}>{t ? `โทรหาเรา` : `Call us at`}</p>
          <a
            href={Pe}
            className={`block font-display text-xl font-semibold text-kmc-secondary hover:underline`}
          >
            {Fe}
          </a>
        </div>
      )}
      <button
        ref={e === `stack` ? a : void 0}
        type={`button`}
        onClick={() => r((e) => !e)}
        aria-expanded={n}
        aria-label={o}
        className={
          e === `stack`
            ? `group flex items-center gap-3 rounded-full bg-kmc-secondary text-white pl-4 pr-5 py-3 shadow-lg shadow-kmc-secondary/30 hover:brightness-110 transition`
            : `flex w-full items-center justify-center gap-2 py-3.5 text-sm font-medium text-white bg-kmc-secondary active:brightness-95 transition`
        }
      >
        <Le />
        <span className={`text-sm font-medium whitespace-nowrap`}>{o}</span>
      </button>
    </div>
  );
}
function ScrollProgress() {
  let e = (0, React.useRef)(null),
    t = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let n = e.current;
      if (!n) return;
      let r = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
      function i() {
        let { scrollTop: e, scrollHeight: i, clientHeight: a } = document.documentElement,
          o = i - a,
          s = o > 0 ? Math.min(1, Math.max(0, e / o)) : 0;
        if (r) {
          C(n, {
            scaleX: s,
          });
          return;
        }
        (t.current?.pause(),
          (t.current = w(n, {
            scaleX: s,
            duration: 200,
            easing: `easeOutQuad`,
          })));
      }
      return (
        C(n, {
          scaleX: 0,
        }),
        i(),
        window.addEventListener(`scroll`, i, {
          passive: !0,
        }),
        window.addEventListener(`resize`, i),
        () => {
          (window.removeEventListener(`scroll`, i),
            window.removeEventListener(`resize`, i),
            t.current?.pause());
        }
      );
    }, []),
    (
      <div
        aria-hidden={`true`}
        className={`fixed top-0 left-0 w-full h-[3px] z-[60] pointer-events-none`}
      >
        <div
          ref={e}
          className={`h-full w-full origin-left bg-gradient-to-r from-kmc-primary to-kmc-primary-deep`}
        />
      </div>
    )
  );
}
var I = `min-h-[44px] rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kmc-primary-deep`;
function He() {
  return (
    <svg
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={`currentColor`}
      strokeWidth={1.8}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
      className={`h-5 w-5`}
    >
      <path d={`M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3.5-3A3 3 0 0 1 14 5.5 2.5 2.5 0 0 1 12 3Z`} />
      <circle cx={`8.5`} cy={`10`} r={`0.6`} fill={`currentColor`} />
      <circle cx={`10`} cy={`15.5`} r={`0.6`} fill={`currentColor`} />
      <circle cx={`15`} cy={`14.5`} r={`0.6`} fill={`currentColor`} />
    </svg>
  );
}
function SiteLayout() {
  let e = useLocation(),
    t = useReducedMotion(),
    { i18n: n } = useTranslation();
  return (
    (0, React.useEffect)(() => {
      if (e.hash) {
        let t = document.getElementById(e.hash.slice(1));
        if (t) {
          t.scrollIntoView({
            block: `start`,
          });
          return;
        }
      }
      window.scrollTo(0, 0);
    }, [e.pathname, e.hash]),
    (
      <div className={`flex flex-col min-h-screen`}>
        <a
          href={`#main-content`}
          className={`sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-kmc-secondary focus:shadow-lg`}
        >
          {n.language === `th` ? `ข้ามไปยังเนื้อหา` : `Skip to content`}
        </a>
        <div className={`print:hidden`}>
          <ScrollProgress />
          <Header />
        </div>
        <main id={`main-content`} className={`flex-1`}>
          <AnimatePresence mode={`wait`}>
            <motion.div
              key={e.pathname}
              initial={{
                opacity: 0,
                y: t ? 0 : 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: t ? 0 : -8,
              }}
              transition={{
                duration: t ? 0 : 0.3,
                ease: `easeOut`,
              }}
            >
              <React.Suspense fallback={<div className={`min-h-screen`} />}>
                <Outlet />
              </React.Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        <div className={`print:hidden`}>
          <Footer />
          {!e.pathname.startsWith(`/tools/`) && e.pathname !== `/contact` && (
            <FloatingContact hideStack={e.pathname.startsWith(`/packages/`)} />
          )}
          <CookieConsent />
        </div>
      </div>
    )
  );
}
var heroVideo = `/media/hero/hero.mp4`;
function useScrollReveal(e = {}) {
  let t = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let n = t.current;
      if (!n) return;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        C(n, {
          opacity: 1,
          translateY: 0,
        });
        return;
      }
      C(n, {
        opacity: 0,
        translateY: 28,
      });
      let r = new IntersectionObserver(
        ([t]) => {
          t.isIntersecting &&
            (w(n, {
              opacity: [0, 1],
              translateY: [28, 0],
              duration: 700,
              easing: `easeOutCubic`,
              delay: e.delay || 0,
            }),
            r.unobserve(n));
        },
        {
          threshold: 0.15,
        },
      );
      return (r.observe(n), () => r.disconnect());
    }, [e.delay]),
    t
  );
}
function qe(e) {
  if (typeof Intl < `u` && Intl.Segmenter) {
    let t = new Intl.Segmenter(void 0, {
      granularity: `word`,
    });
    return Array.from(t.segment(e), (e) => e.segment);
  }
  return e.split(/(\s+)/);
}
function AnimatedHeading({
  text: e,
  lines: t,
  as: _Element2 = `span`,
  className: r = ``,
  delayEach: i = 34,
  duration: a = 650,
  ...o
}) {
  let s = (0, React.useRef)(null),
    c = t || [e ?? ``];
  return (
    (0, React.useEffect)(() => {
      let e = s.current;
      if (!e) return;
      let t = e.querySelectorAll(`[data-reveal-seg]`);
      if (t.length === 0) return;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        C(t, {
          translateY: `0%`,
        });
        return;
      }
      C(t, {
        translateY: `120%`,
      });
      let n = new IntersectionObserver(
        ([r]) => {
          r.isIntersecting &&
            (w(t, {
              translateY: [`120%`, `0%`],
              duration: a,
              delay: ue(i),
              easing: `easeOutCubic`,
            }),
            n.unobserve(e));
        },
        {
          threshold: 0.2,
        },
      );
      return (n.observe(e), () => n.disconnect());
    }, [e, t, i, a]),
    (
      <_Element2 ref={s} className={r} {...o}>
        {c.map((e, t) => (
          <span key={`${e}-${t}`} className={`block`}>
            {qe(e).map((e, t) =>
              e.trim() === `` ? (
                <span key={t}>{e}</span>
              ) : (
                <span
                  key={t}
                  className={`inline-block overflow-hidden align-bottom py-[0.14em] -my-[0.14em]`}
                >
                  <span data-reveal-seg={!0} className={`inline-block will-change-transform`}>
                    {e}
                  </span>
                </span>
              ),
            )}
          </span>
        ))}
      </_Element2>
    )
  );
}
var R = [
  {
    key: `about`,
    path: `/about`,
    th: `เกี่ยวกับเรา`,
    en: `About Us`,
    children: [
      {
        key: `history`,
        path: `/about/history`,
        th: `ประวัติความเป็นมา`,
        en: `Our History`,
        hidden: !0,
      },
      {
        key: `vision`,
        path: `/about/vision`,
        th: `วิสัยทัศน์และพันธกิจ`,
        en: `Vision & Mission`,
        hidden: !0,
      },
      {
        key: `team`,
        path: `/about/team`,
        th: `ทีมงานของเรา`,
        en: `Our Team`,
        hidden: !0,
        children: [
          {
            key: `doctors`,
            path: `/about/team/doctors`,
            th: `แพทย์`,
            en: `Doctors`,
          },
          {
            key: `nurses`,
            path: `/about/team/nurses`,
            th: `พยาบาล`,
            en: `Nurses`,
          },
          {
            key: `physiotherapists`,
            path: `/about/team/physiotherapists`,
            th: `นักกายภาพบำบัด`,
            en: `Physiotherapists`,
          },
          {
            key: `caregivers`,
            path: `/about/team/caregivers`,
            th: `ผู้ดูแลผู้สูงอายุ`,
            en: `Caregivers`,
          },
        ],
      },
      {
        key: `atmosphere`,
        path: `/about/atmosphere`,
        th: `สิ่งอำนวยความสะดวกและบรรยากาศ`,
        en: `Facilities & Atmosphere`,
        hidden: !0,
      },
      {
        key: `standards`,
        path: `/about/standards`,
        th: `มาตรฐานและการรับรองคุณภาพ`,
        en: `Standards & Accreditation`,
        hidden: !0,
      },
      {
        key: `careers`,
        path: `/about/careers`,
        th: `ร่วมงานกับเรา`,
        en: `Careers`,
      },
      {
        key: `partners`,
        path: `/about/partners`,
        th: `เครือข่ายพันธมิตร`,
        en: `Partner Network`,
      },
    ],
  },
  {
    key: `services`,
    path: `/services`,
    th: `บริการ`,
    en: `Services`,
    children: [
      {
        key: `telemedicine`,
        path: `/services/telemedicine`,
        th: `Telemedicine`,
        en: `Telemedicine`,
      },
      {
        key: `lab-testing`,
        path: `/services/lab-testing`,
        th: `บริการตรวจทางห้องปฏิบัติการ`,
        en: `Laboratory Testing Services`,
      },
      {
        key: `occupational-health`,
        path: `/services/occupational-health`,
        th: `อาชีวอนามัย`,
        en: `Occupational Health`,
      },
      {
        key: `sleep-test`,
        path: `/services/sleep-test`,
        th: `ตรวจการนอนหลับ`,
        en: `Sleep Test`,
      },
      {
        key: `chinese-medicine`,
        path: `/services/chinese-medicine`,
        th: `แพทย์แผนจีน`,
        en: `Chinese Medicine`,
      },
      {
        key: `thai-massage`,
        path: `/services/thai-massage`,
        th: `กายภาพบำบัดแผนไทย`,
        en: `Traditional Thai Physical Therapy`,
      },
      {
        key: `physiotherapy`,
        path: `/services/physiotherapy`,
        th: `กายภาพบำบัด`,
        en: `Physiotherapy`,
      },
      {
        key: `stroke-rehab`,
        path: `/services/stroke-rehab`,
        th: `ฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง`,
        en: `Stroke Rehabilitation`,
      },
      {
        key: `nursing-home`,
        path: `/services/nursing-home`,
        th: `เนอร์สซิ่งโฮม`,
        en: `Nursing Home`,
      },
      {
        key: `elderly-care`,
        path: `/services/elderly-care`,
        th: `ดูแลผู้สูงอายุ`,
        en: `Elderly Care`,
      },
      {
        key: `home-care`,
        path: `/services/home-care`,
        th: `ดูแลที่บ้าน`,
        en: `Home Care`,
      },
      {
        key: `hydrotherapy`,
        path: `/services/hydrotherapy`,
        th: `ธาราบำบัด`,
        en: `Hydrotherapy`,
      },
      {
        key: `health-monitoring`,
        path: `/services/health-monitoring`,
        th: `โปรแกรมติดตามสุขภาพ (Lab + App)`,
        en: `Health Monitoring Program (Lab + App)`,
      },
      {
        key: `annual-checkup-vaccine`,
        path: `/services/annual-checkup-vaccine`,
        th: `ตรวจสุขภาพประจำปี & วัคซีน`,
        en: `Annual Health Check-up & Vaccines`,
      },
      {
        key: `office-syndrome`,
        path: `/services/office-syndrome`,
        th: `โปรแกรม Office Syndrome`,
        en: `Office Syndrome Program`,
      },
    ],
  },
  {
    key: `doctors`,
    path: `/doctors`,
    th: `แพทย์และผู้เชี่ยวชาญ`,
    en: `Doctors & Specialists`,
    hidden: !0,
    children: [
      {
        key: `list`,
        path: `/doctors/list`,
        th: `รายชื่อแพทย์`,
        en: `Doctor Directory`,
      },
      {
        key: `specialists`,
        path: `/doctors/specialists`,
        th: `ทีมแพทย์เฉพาะทาง`,
        en: `Specialist Teams`,
      },
      {
        key: `therapists`,
        path: `/doctors/therapists`,
        th: `โปรไฟล์นักบำบัด`,
        en: `Therapist Profiles`,
      },
      {
        key: `schedule`,
        path: `/doctors/schedule`,
        th: `ตารางออกตรวจ`,
        en: `Clinic Schedule`,
      },
    ],
  },
  {
    key: `facilities`,
    path: `/facilities`,
    th: `สิ่งอำนวยความสะดวก`,
    en: `Facilities`,
  },
  {
    key: `packages`,
    path: `/packages`,
    th: `โปรแกรมสุขภาพและแพ็กเกจ`,
    en: `Health Programs & Packages`,
  },
  {
    key: `corporate`,
    path: `/corporate`,
    th: `องค์กรและชุมชน`,
    en: `Organizations & Communities`,
  },
  {
    key: `blog`,
    path: `/blog`,
    th: `ศูนย์ความรู้ / บทความ`,
    en: `Knowledge Center`,
  },
  {
    key: `contact`,
    path: `/contact`,
    th: `ติดต่อเรา`,
    en: `Contact Us`,
  },
];
function z(e = R, t = []) {
  for (let n of e) (t.push(n), n.children && z(n.children, t));
  return t;
}
var Je = z();
function Ye({ current: e, className: t = `` }) {
  let { i18n: n } = useTranslation(),
    r = n.language === `th`,
    { pathname: a } = useLocation();
  if (a === `/`) return null;
  let s = a.split(`/`).filter(Boolean),
    c = [
      {
        path: `/`,
        label: r ? `หน้าแรก` : `Home`,
      },
    ],
    u = ``;
  return (
    s.forEach((t, n) => {
      u += `/${t}`;
      let i = Je.find((e) => e.path === u),
        a = n === s.length - 1,
        o = a && e ? e : i ? (r ? i.th : i.en) : null;
      o &&
        c.push({
          path: u,
          label: o,
          isLast: a,
        });
    }),
    c.length < 2 ? null : (
      <nav aria-label={`Breadcrumb`} className={t}>
        <ol className={`flex flex-wrap items-center gap-1.5 text-sm text-kmc-secondary/50`}>
          {c.map((e) => (
            <li key={e.path} className={`flex items-center gap-1.5`}>
              {e.path !== `/` && <span aria-hidden={`true`}>{`›`}</span>}
              {e.isLast ? (
                <span aria-current={`page`} className={`text-kmc-secondary/80`}>
                  {e.label}
                </span>
              ) : (
                <Link
                  to={e.path}
                  className={`inline-block py-0.5 hover:text-kmc-secondary hover:underline transition`}
                >
                  {e.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  );
}
function B(e, t = !1) {
  return `/images/photos/${e}${t ? `-sm` : ``}.webp`;
}
function Xe(e) {
  let t = /^\/images\/photos\/(.+)\.webp$/.exec(e || ``);
  return t ? t[1] : null;
}
function Photo({
  name: e,
  alt: t = ``,
  className: n = ``,
  sizes: r = `(min-width: 1024px) 50vw, 100vw`,
  eager: i = !1,
  ...a
}) {
  return (
    <img
      src={B(e)}
      srcSet={`${B(e, !0)} 800w, ${B(e)} 1600w`}
      sizes={r}
      alt={t}
      loading={i ? `eager` : `lazy`}
      decoding={`async`}
      className={n}
      {...a}
    />
  );
}
function RevealSection({
  children: e,
  className: t = ``,
  delay: n = 0,
  as: _Element3 = `section`,
  ...i
}) {
  return (
    <_Element3
      ref={useScrollReveal({
        delay: n,
      })}
      className={t}
      {...i}
    >
      {e}
    </_Element3>
  );
}
function Ze({ title: e, subtitle: t, noindex: n = !1, image: r, imageAlt: i = ``, children: a }) {
  return (
    useHomeMeta({
      title: e,
      description: t,
      noindex: n,
    }),
    (
      <Qe image={r} imageAlt={i}>
        <Ye current={e} className={`mb-4`} />
        <AnimatedHeading
          as={`h1`}
          className={`font-display text-3xl sm:text-4xl font-semibold text-kmc-secondary`}
          text={e}
        />
        {t && <p className={`mt-3 text-kmc-secondary/75 max-w-xl`}>{t}</p>}
        {a}
      </Qe>
    )
  );
}
function Qe({ image: e, imageAlt: t = ``, className: n = `py-20`, children: r }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3`}
    >
      <div className={`relative w-full mx-auto max-w-6xl px-6 ${n}`}>
        <div className={e ? `md:max-w-[46%]` : ``}>{r}</div>
      </div>
      {e && (
        <div
          className={`relative h-44 -mt-6 md:mt-0 md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2`}
        >
          <Photo
            name={e}
            alt={t}
            eager={!0}
            sizes={`(min-width: 768px) 50vw, 100vw`}
            className={`w-full h-full object-cover`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-fog-2 via-transparent to-transparent md:bg-gradient-to-r md:from-fog-1 md:via-fog-1/30`}
          />
          <div
            className={`hidden md:block absolute inset-0 bg-gradient-to-t from-fog-2/50 to-transparent`}
          />
        </div>
      )}
    </div>
  );
}
var $e = `480 / 487`,
  et = [
    {
      key: `top-left`,
      box: `top-[-10%] left-[-8%] w-[16rem] sm:w-[20rem] lg:w-[26rem]`,
      style: {
        transform: `rotate(-14deg)`,
        opacity: 0.28,
      },
    },
    {
      key: `top-center`,
      box: `top-[-14%] left-[30%] w-[12rem] sm:w-[15rem] lg:w-[18rem]`,
      style: {
        transform: `scaleY(-1) rotate(-6deg)`,
        opacity: 0.2,
      },
    },
    {
      key: `top-right`,
      box: `top-[-8%] right-[-10%] w-[18rem] sm:w-[23rem] lg:w-[30rem]`,
      style: {
        transform: `rotate(10deg)`,
        opacity: 0.26,
      },
    },
    {
      key: `mid-left`,
      box: `top-[32%] left-[-10%] w-[12rem] sm:w-[15rem] lg:w-[18rem]`,
      style: {
        transform: `rotate(20deg)`,
        opacity: 0.16,
      },
    },
    {
      key: `center`,
      box: `top-[38%] left-[38%] w-[14rem] sm:w-[17rem] lg:w-[21rem]`,
      style: {
        transform: `scaleX(-1) rotate(24deg)`,
        opacity: 0.19,
      },
    },
    {
      key: `mid-right`,
      box: `top-[16%] right-[2%] w-[10rem] sm:w-[12rem] lg:w-[15rem]`,
      style: {
        transform: `scaleY(-1) rotate(-22deg)`,
        opacity: 0.15,
      },
    },
    {
      key: `bottom-left`,
      box: `bottom-[-14%] left-[-8%] w-[15rem] sm:w-[19rem] lg:w-[23rem]`,
      style: {
        transform: `scaleX(-1) rotate(-10deg)`,
        opacity: 0.24,
      },
    },
    {
      key: `bottom-center`,
      box: `bottom-[-18%] left-[28%] w-[11rem] sm:w-[14rem] lg:w-[17rem]`,
      style: {
        transform: `rotate(30deg)`,
        opacity: 0.17,
      },
    },
    {
      key: `bottom-right`,
      box: `bottom-[-16%] right-[-6%] w-[16rem] sm:w-[20rem] lg:w-[26rem]`,
      style: {
        transform: `scaleY(-1) rotate(16deg)`,
        opacity: 0.23,
      },
    },
  ],
  tt = {
    box: `top-1/2 left-1/2 w-[36rem] -mt-[18.3rem] -ml-[18rem] sm:w-[48rem] sm:-mt-[24.4rem] sm:-ml-[24rem] lg:w-[62rem] lg:-mt-[31.5rem] lg:-ml-[31rem]`,
    style: {
      transform: `rotate(22deg)`,
      opacity: 0.55,
      mixBlendMode: `multiply`,
    },
  };
function nt({ variant: e = `scattered` }) {
  return (
    <div
      className={`absolute inset-0 z-[-15] overflow-hidden pointer-events-none`}
      aria-hidden={`true`}
    >
      {(e === `sweep`
        ? [
            {
              key: `sweep`,
              ...tt,
            },
          ]
        : et
      ).map((e) => (
        <div
          key={e.key}
          className={`absolute ${e.box}`}
          style={{
            aspectRatio: $e,
            backgroundImage: `url(/logo/KMCHospitalLOGO-Cut.png)`,
            backgroundSize: `auto 100%`,
            backgroundPosition: `left top`,
            backgroundRepeat: `no-repeat`,
            ...e.style,
          }}
        />
      ))}
    </div>
  );
}
function useStaggerReveal({ delayEach: e = 80 } = {}) {
  let t = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let n = t.current;
      if (!n) return;
      let r = Array.from(n.children);
      if (r.length === 0) return;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        C(r, {
          opacity: 1,
          translateY: 0,
        });
        return;
      }
      C(r, {
        opacity: 0,
        translateY: 24,
      });
      let i = new IntersectionObserver(
        ([t]) => {
          t.isIntersecting &&
            (w(r, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 600,
              delay: ue(e),
              easing: `easeOutCubic`,
            }),
            i.unobserve(n));
        },
        {
          threshold: 0.15,
        },
      );
      return (i.observe(n), () => i.disconnect());
    }, [e]),
    t
  );
}
var servicePhotos = {
  health: `sleep/cpap`,
  physical: `thai/back-press`,
  care: `physio/walker`,
  preventive: `physio/balance`,
};
var p4Items = [
  {
    key: `Prevention`,
    th: {
      name: `ป้องกันก่อนป่วย`,
      desc: `เราเชื่อว่าการตรวจพบความเสี่ยงตั้งแต่เนิ่น ๆ คือการดูแลที่ดีที่สุด จึงมีแพ็กเกจตรวจสุขภาพประจำปี วัคซีนสำหรับผู้ใหญ่และผู้สูงอายุ ไปจนถึงโปรแกรมตรวจสุขภาพเชิงป้องกันสำหรับองค์กร เพื่อลดโอกาสเจ็บป่วยตั้งแต่ต้นทาง`,
    },
    en: {
      name: `Prevention`,
      desc: `Finding risk early is the best care there is. Annual check-up packages, vaccines for adults and older adults, and preventive screening programs for organizations, all aimed at reducing illness at the source.`,
    },
    to: `/services/annual-checkup-vaccine`,
    photo: `chinese/exam`,
  },
  {
    key: `Predictive`,
    th: {
      name: `คาดการณ์ล่วงหน้า`,
      desc: `ด้วยโปรแกรมติดตามสุขภาพที่เชื่อมผลตรวจแล็บเข้ากับแอปพลิเคชัน ทีมแพทย์ของเราเห็นแนวโน้มสุขภาพของคุณและแจ้งเตือนความเสี่ยงได้ตั้งแต่เนิ่น ๆ ก่อนที่อาการจะแสดงออกมา`,
    },
    en: {
      name: `Predictive`,
      desc: `Our health monitoring program links lab results to an app, so our doctors can see where your health is heading and flag risk early, before symptoms show.`,
    },
    to: `/services/health-monitoring`,
    photo: `sleep/monitor-belt`,
  },
  {
    key: `Personalized`,
    th: {
      name: `ดูแลเฉพาะคุณ`,
      desc: `ไม่มีสูตรสำเร็จสำหรับทุกคน แผนการดูแลและฟื้นฟูของเราออกแบบเฉพาะสำหรับแต่ละบุคคล ตามอาการ เป้าหมาย และไลฟ์สไตล์ที่แตกต่างกัน`,
    },
    en: {
      name: `Personalized`,
      desc: `There is no formula that fits everyone. Our care and rehabilitation plans are built for the individual, around their symptoms, their goals and how they live.`,
    },
    to: `/services/physiotherapy`,
    photo: `physio/walking`,
  },
  {
    key: `Participation`,
    th: {
      name: `ดูแลไปด้วยกัน`,
      desc: `เราเชื่อว่าผู้ป่วยและครอบครัวคือส่วนหนึ่งของการดูแล ไม่ใช่แค่ฝ่ายรับการรักษา ผ่านแอปติดตามผลที่ดูได้เอง บริการ Telemedicine ที่ปรึกษาได้ทุกที่ และกิจกรรมสุขภาพที่ชวนชุมชนมามีส่วนร่วมไปด้วยกัน`,
    },
    en: {
      name: `Participation`,
      desc: `Patients and families are part of the care, not only on the receiving end of it, through an app they can read themselves, telemedicine wherever they are, and health activities that bring the community in.`,
    },
    to: `/services/telemedicine`,
    photo: `thai/family`,
  },
];
var careNeeds = [
  {
    to: `/services/physiotherapy`,
    photo: `hydro/therapist-guide`,
    th: {
      name: `ฟื้นฟูหลังผ่าตัด`,
      desc: `กลับมาเดินและใช้ชีวิตได้เร็วขึ้นหลังผ่าตัดกระดูกหรือข้อ`,
    },
    en: {
      name: `Recovery after surgery`,
      desc: `Back on your feet sooner after bone or joint surgery`,
    },
  },
  {
    to: `/services/stroke-rehab`,
    photo: `physio/parallel-bars`,
    th: {
      name: `ฟื้นฟูสโตรก`,
      desc: `ทีมสหวิชาชีพฟื้นฟูการเคลื่อนไหว การพูด และการใช้ชีวิตประจำวัน`,
    },
    en: {
      name: `Stroke rehabilitation`,
      desc: `A multidisciplinary team rebuilding movement, speech and daily independence`,
    },
  },
  {
    to: `/services/office-syndrome`,
    photo: `thai/neck`,
    th: {
      name: `Office Syndrome`,
      desc: `ปวดคอ บ่า ไหล่ จากการนั่งทำงานนาน ดูแลตั้งแต่ประเมินจนป้องกันซ้ำ`,
    },
    en: {
      name: `Office syndrome`,
      desc: `Neck, shoulder and back pain from desk work: assessed, treated and prevented`,
    },
  },
  {
    to: `/services/annual-checkup-vaccine`,
    photo: `chinese/jaw-exam`,
    th: {
      name: `ตรวจสุขภาพและวัคซีน`,
      desc: `แพ็กเกจตรวจตามช่วงวัย พร้อมวัคซีนที่จำเป็น`,
    },
    en: {
      name: `Check-ups and vaccines`,
      desc: `Screening packages by age group, with the vaccines you need`,
    },
  },
  {
    to: `/services/elderly-care`,
    photo: `sleep/nurse-chat`,
    th: {
      name: `ดูแลผู้สูงอายุ`,
      desc: `ดูแลระยะยาวทั้งที่บ้านและที่โรงพยาบาล โดยทีมที่เข้าใจผู้สูงอายุ`,
    },
    en: {
      name: `Elderly care`,
      desc: `Long-term care at home or at the hospital, from a team who understand older adults`,
    },
  },
];
var dt = 55e3,
  ft = 35,
  W = 240,
  pt = 0.16,
  mt = 1e3 / 30,
  G = (e, t) => e + Math.random() * (t - e);
function HospitalBackdrop({ className: e = `` }) {
  let t = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let e = t.current,
        n = e?.getContext(`2d`);
      if (!n) return;
      let r = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        i = 0,
        a = 0,
        o = [];
      function s() {
        let e = Math.min(ft, Math.round((i * a) / dt));
        o = Array.from(
          {
            length: e,
          },
          () => ({
            x: G(0, i),
            y: G(0, a),
            vx: G(-7, 7),
            vy: G(-7, 7),
            r: G(3.75, 6.75),
            phase: G(0, Math.PI * 2),
          }),
        );
      }
      function c() {
        let t = e.getBoundingClientRect();
        if (!t.width || !t.height) return !1;
        let r = Math.min(window.devicePixelRatio || 1, 2),
          c = t.width > i * 1.25 || t.height > a * 1.25;
        return (
          (i = t.width),
          (a = t.height),
          (e.width = Math.round(i * r)),
          (e.height = Math.round(a * r)),
          n.setTransform(r, 0, 0, r, 0, 0),
          (!o.length || c) && s(),
          !0
        );
      }
      function l(e) {
        (n.clearRect(0, 0, i, a), (n.lineWidth = 1.2));
        for (let e = 0; e < o.length; e++) {
          let t = o[e];
          for (let r = e + 1; r < o.length; r++) {
            let e = o[r],
              i = t.x - e.x,
              a = t.y - e.y;
            if (Math.abs(i) > W || Math.abs(a) > W) continue;
            let s = Math.hypot(i, a);
            s >= W ||
              ((n.strokeStyle = `rgba(181,211,229,${(1 - s / W) * pt})`),
              n.beginPath(),
              n.moveTo(t.x, t.y),
              n.lineTo(e.x, e.y),
              n.stroke());
          }
        }
        for (let t of o)
          ((n.fillStyle = `rgba(230,243,252,${0.3 + Math.sin(e * 0.9 + t.phase) * 0.1})`),
            n.beginPath(),
            n.arc(t.x, t.y, t.r, 0, Math.PI * 2),
            n.fill());
      }
      function u(e) {
        for (let t of o)
          ((t.x += t.vx * e),
            (t.y += t.vy * e),
            (t.x < 0 || t.x > i) && ((t.vx *= -1), (t.x = Math.max(0, Math.min(i, t.x)))),
            (t.y < 0 || t.y > a) && ((t.vy *= -1), (t.y = Math.max(0, Math.min(a, t.y)))));
      }
      let d = 0,
        f = 0,
        p = !1;
      function m(e) {
        if (((d = requestAnimationFrame(m)), e - f < mt)) return;
        let t = Math.min((e - f) / 1e3, 0.1);
        ((f = e), u(t), l(e / 1e3));
      }
      function h() {
        r ||
          d ||
          !p ||
          document.hidden ||
          !o.length ||
          ((f = performance.now()), (d = requestAnimationFrame(m)));
      }
      function g() {
        (cancelAnimationFrame(d), (d = 0));
      }
      c() && l(0);
      let _ = new ResizeObserver(() => {
        c() && (l(performance.now() / 1e3), h());
      });
      _.observe(e);
      let v = new IntersectionObserver(([e]) => {
        ((p = e.isIntersecting), p ? h() : g());
      });
      v.observe(e);
      let y = () => (document.hidden ? g() : h());
      return (
        document.addEventListener(`visibilitychange`, y),
        () => {
          (g(),
            _.disconnect(),
            v.disconnect(),
            document.removeEventListener(`visibilitychange`, y));
        }
      );
    }, []),
    (
      <canvas
        ref={t}
        aria-hidden={`true`}
        className={`pointer-events-none block h-full w-full ${e}`}
      />
    )
  );
}
var gt = [
  {
    th: `ตรวจแล็บพื้นฐานเพื่อเริ่มบันทึกข้อมูลสุขภาพ`,
    en: `A baseline lab panel starts your health record`,
  },
  {
    th: `เชื่อมผลตรวจเข้าสู่แอปพลิเคชันของโปรแกรม`,
    en: `Results are linked into the program’s app`,
  },
  {
    th: `ระบบและทีมแพทย์ติดตามแนวโน้มค่าสุขภาพอย่างต่อเนื่อง`,
    en: `Our system and doctors follow your values over time`,
  },
  {
    th: `แจ้งเตือนและให้คำแนะนำก่อนกลายเป็นอาการป่วย`,
    en: `You’re alerted and advised before it becomes illness`,
  },
];
var careDisciplines = [
  {
    th: `แพทย์แผนปัจจุบัน`,
    en: `Modern medicine`,
    photo: `hospital/exam-room`,
  },
  {
    th: `แพทย์แผนไทย`,
    en: `Thai traditional medicine`,
    photo: `thai/seated-stretch`,
  },
  {
    th: `แพทย์แผนจีน`,
    en: `Chinese medicine`,
    photo: `chinese/cupping`,
  },
  {
    th: `กายภาพบำบัด`,
    en: `Physiotherapy`,
    photo: `physio/ultrasound`,
  },
  {
    th: `นักกิจกรรมบำบัด`,
    en: `Occupational therapy`,
    photo: `physio/ot-toys`,
  },
  {
    th: `นักอรรถบำบัด`,
    en: `Speech therapy`,
    photo: `physio/shoulder-assess`,
  },
];
var communityPrograms = [
  {
    to: `/corporate`,
    photo: `hospital/seminar`,
    th: {
      kicker: `สำหรับองค์กร`,
      name: `ดูแลสุขภาพพนักงาน ลดต้นทุน ลดเวลา`,
      desc: `ตรวจสุขภาพประจำปี วัคซีน กายภาพบำบัด Office Syndrome และระบบติดตามสุขภาพผ่านแอป บริหารสวัสดิการได้ในที่เดียว`,
      cta: `ดูโซลูชันองค์กร`,
    },
    en: {
      kicker: `For organizations`,
      name: `Employee health that costs less and takes less time`,
      desc: `Annual screening, vaccines, office syndrome physiotherapy and app-based health monitoring, one place to run the whole benefit.`,
      cta: `See corporate solutions`,
    },
  },
  {
    to: `/corporate/community`,
    photo: `hospital/pulse-diagnosis`,
    th: {
      kicker: `สำหรับหมู่บ้านและชุมชน`,
      name: `สุขภาพดีไปกับ KMC Hospital`,
      desc: `หมอประจำบ้าน ศูนย์สุขภาพเคลื่อนที่ถึงในหมู่บ้าน และแอป Well-being ที่ชวนลูกบ้านดูแลสุขภาพไปด้วยกัน`,
      cta: `ดูโครงการชุมชน`,
    },
    en: {
      kicker: `For communities`,
      name: `Good health, together with KMC Hospital`,
      desc: `A doctor for the neighbourhood, a mobile health unit that comes to you, and a well-being app that gets residents looking after each other.`,
      cta: `See the community program`,
    },
  },
];
var newsItems = [];
T.registerPlugin(de);
function ParallaxGallery({ children: e, className: t = `` }) {
  let n = (0, React.useRef)(null);
  return (
    (0, React.useEffect)(() => {
      let e = n.current;
      if (!e || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let t = T.context(() => {
        T.fromTo(
          e,
          {
            y: 40,
            scale: 0.96,
          },
          {
            y: -20,
            scale: 1,
            ease: `none`,
            scrollTrigger: {
              trigger: e,
              start: `top bottom`,
              end: `bottom top`,
              scrub: 0.6,
            },
          },
        );
      }, n);
      return () => t.revert();
    }, []),
    (
      <div ref={n} className={t}>
        {e}
      </div>
    )
  );
}
var Tt = `shiny-pill inline-block rounded-full bg-kmc-secondary text-white px-8 py-3 font-medium hover:brightness-110 transition`,
  Et = `inline-block rounded-full border border-kmc-secondary/25 bg-white px-8 py-3 font-medium text-kmc-secondary hover:border-kmc-secondary/60 transition`;
function ContactButton({ cta: e, className: t, placement: n }) {
  if (!e) return null;
  let r = {
    "data-cta": ``,
    "data-cta-placement": n,
  };
  if (e.to)
    return (
      <Link to={e.to} className={t} {...r}>
        {e.label}
      </Link>
    );
  let i = e.href?.startsWith(`tel:`);
  return (
    <a
      href={e.href}
      className={t}
      {...r}
      {...(i
        ? {}
        : {
            target: `_blank`,
            rel: `noopener noreferrer`,
          })}
    >
      {e.label}
    </a>
  );
}
function ContactButtons({ primary: e, secondary: t, className: n = `` }) {
  return !e && !t ? null : (
    <div className={`flex flex-wrap justify-center gap-3 ${n}`}>
      <ContactButton cta={e} className={Tt} placement={`primary`} />
      <ContactButton cta={t} className={Et} placement={`secondary`} />
    </div>
  );
}
var kt = [],
  At = [
    {
      key: `senior`,
      th: `สุขภาพผู้สูงอายุ`,
      en: `Senior Health`,
    },
    {
      key: `rehab`,
      th: `ฟื้นฟูร่างกาย`,
      en: `Rehabilitation`,
    },
    {
      key: `homecare`,
      th: `ดูแลที่บ้าน`,
      en: `Home Care`,
    },
    {
      key: `preventive`,
      th: `ดูแลสุขภาพเชิงป้องกัน`,
      en: `Preventive Care`,
    },
    {
      key: `checkup`,
      th: `ตรวจสุขภาพ & วัคซีน`,
      en: `Check-ups & Vaccines`,
    },
    {
      key: `office-syndrome`,
      th: `Office Syndrome`,
      en: `Office Syndrome`,
    },
    {
      key: `membership`,
      th: `สมาชิกและโปรโมชั่น`,
      en: `Membership & Promotions`,
    },
  ],
  jt = {
    "senior-checkup": `chinese/arm-exam`,
    "senior-longterm": `sleep/bathroom-rail`,
    "rehab-stroke": `physio/walker`,
    "rehab-postop": `physio/shoulder-exercise`,
    "homecare-daily": `thai/assessment`,
    "homecare-live-in": `thai/leg-stretch`,
    "preventive-corporate": `chinese/consult-model`,
    "preventive-individual": `chinese/consult-female`,
    "checkup-by-age": `sleep/sensor-fit`,
    "vaccine-adult": `hospital/exam-room`,
    "checkup-onsite": `chinese/jaw-exam`,
    "health-monitoring": `sleep/monitor-belt`,
    "health-monitoring-corporate": `sleep/sensor-belt`,
    "office-syndrome-individual": `physio/ultrasound-close`,
    "office-syndrome-corporate": `physio/pms-machine`,
    membership: `chinese/happy-patient`,
    promotions: `hydro/dumbbell-class`,
  },
  packages = [
    {
      key: `senior-checkup`,
      category: `senior`,
      th: {
        name: `แพ็กเกจตรวจสุขภาพผู้สูงอายุ`,
        desc: `ตรวจคัดกรองโรคที่พบบ่อยในผู้สูงอายุแบบครบวงจร`,
      },
      en: {
        name: `Senior Health Checkup`,
        desc: `Comprehensive screening for the most common conditions in older adults`,
      },
    },
    {
      key: `senior-longterm`,
      category: `senior`,
      th: {
        name: `แพ็กเกจดูแลผู้สูงอายุระยะยาว`,
        desc: `ดูแลต่อเนื่องโดยทีมสหวิชาชีพ ปรับแผนตามอาการ`,
      },
      en: {
        name: `Long-Term Senior Care Package`,
        desc: `Ongoing care from a multidisciplinary team, adjusted as needs change`,
      },
    },
    {
      key: `rehab-stroke`,
      category: `rehab`,
      th: {
        name: `แพ็กเกจฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง`,
        desc: `กายภาพบำบัดและฟื้นฟูการเคลื่อนไหวหลัง stroke`,
      },
      en: {
        name: `Stroke Rehabilitation Package`,
        desc: `Physiotherapy and movement rehab following a stroke`,
      },
    },
    {
      key: `rehab-postop`,
      category: `rehab`,
      th: {
        name: `แพ็กเกจฟื้นฟูหลังผ่าตัด`,
        desc: `ฟื้นฟูร่างกายหลังการผ่าตัดข้อหรือกระดูก รวมธาราบำบัด`,
      },
      en: {
        name: `Post-Surgery Rehabilitation Package`,
        desc: `Recovery support after joint or bone surgery, including hydrotherapy`,
      },
    },
    {
      key: `homecare-daily`,
      category: `homecare`,
      th: {
        name: `แพ็กเกจดูแลที่บ้านรายวัน`,
        desc: `พยาบาลหรือผู้ดูแลไปดูแลถึงบ้าน เลือกความถี่ได้`,
      },
      en: {
        name: `Daily Home Care Package`,
        desc: `Nurses or caregivers visit your home, at a frequency you choose`,
      },
    },
    {
      key: `homecare-live-in`,
      category: `homecare`,
      th: {
        name: `แพ็กเกจผู้ดูแลประจำที่บ้าน`,
        desc: `ผู้ดูแลมืออาชีพประจำบ้าน พร้อมทีมพยาบาลติดตามอาการ`,
      },
      en: {
        name: `Live-In Caregiver Package`,
        desc: `A dedicated caregiver at home, with nurses monitoring condition`,
      },
    },
    {
      key: `preventive-corporate`,
      category: `preventive`,
      th: {
        name: `โปรแกรมตรวจสุขภาพเชิงป้องกันสำหรับองค์กร`,
        desc: `ตรวจคัดกรองก่อนเกิดโรค ลดความเสี่ยงระยะยาวให้พนักงาน`,
      },
      en: {
        name: `Corporate Preventive Health Program`,
        desc: `Early screening to reduce long-term health risk for employees`,
      },
    },
    {
      key: `preventive-individual`,
      category: `preventive`,
      th: {
        name: `โปรแกรมดูแลสุขภาพเชิงป้องกันรายบุคคล`,
        desc: `ประเมินความเสี่ยงและวางแผนสุขภาพระยะยาว`,
      },
      en: {
        name: `Individual Preventive Care Program`,
        desc: `Risk assessment and a long-term health plan`,
      },
    },
    {
      key: `checkup-by-age`,
      category: `checkup`,
      th: {
        name: `แพ็กเกจตรวจสุขภาพตามช่วงวัย (20+/40+/60+)`,
        desc: `รายการตรวจต่างกันตามช่วงวัยและความเสี่ยง ไม่ใช่แพ็กเกจเดียวสำหรับทุกคน`,
      },
      en: {
        name: `Age-Based Check-up Packages (20+/40+/60+)`,
        desc: `Different panels for different ages and risk profiles, not one package for everyone`,
      },
    },
    {
      key: `vaccine-adult`,
      category: `checkup`,
      th: {
        name: `แพ็กเกจวัคซีนผู้ใหญ่และผู้สูงอายุ`,
        desc: `วัคซีนไข้หวัดใหญ่ ปอดอักเสบ งูสวัด ตามคำแนะนำของแพทย์`,
      },
      en: {
        name: `Adult & Senior Vaccine Packages`,
        desc: `Influenza, pneumococcal and shingles vaccines as recommended by a doctor`,
      },
    },
    {
      key: `checkup-onsite`,
      category: `checkup`,
      th: {
        name: `แพ็กเกจตรวจสุขภาพ+วัคซีนนอกสถานที่`,
        desc: `หน่วยเคลื่อนที่เข้าไปจัดกิจกรรมให้องค์กรและหมู่บ้าน`,
      },
      en: {
        name: `On-Site Check-up + Vaccination Package`,
        desc: `A mobile unit runs the event inside your organization or community`,
      },
    },
    {
      key: `health-monitoring`,
      category: `preventive`,
      th: {
        name: `แพ็กเกจติดตามสุขภาพรายเดือน/รายปี (Lab+App)`,
        desc: `ตรวจแล็บตามรอบ เชื่อมผลเข้าแอป พร้อมทีมแพทย์ติดตามแนวโน้ม`,
      },
      en: {
        name: `Health Monitoring Package, Monthly / Annual (Lab + App)`,
        desc: `Scheduled lab work linked into the app, with our doctors following the trend`,
      },
    },
    {
      key: `health-monitoring-corporate`,
      category: `preventive`,
      th: {
        name: `แพ็กเกจ Digital Health สำหรับองค์กร (Lab+App รายพนักงาน)`,
        desc: `โปรแกรมติดตามสุขภาพพนักงาน พร้อมแดชบอร์ดภาพรวมสำหรับฝ่ายบุคคล`,
      },
      en: {
        name: `Corporate Digital Health Package (Lab + App, per employee)`,
        desc: `Employee health monitoring with an organization-level dashboard for HR`,
      },
    },
    {
      key: `office-syndrome-individual`,
      category: `office-syndrome`,
      th: {
        name: `แพ็กเกจประเมิน + กายภาพบำบัด Office Syndrome`,
        desc: `เลือกได้ทั้งแบบรายครั้งและแบบคอร์ส พร้อมแผนป้องกันการกลับมาเป็นซ้ำ`,
      },
      en: {
        name: `Office Syndrome Assessment + Physiotherapy`,
        desc: `Per session or as a course, with a plan to prevent recurrence`,
      },
    },
    {
      key: `office-syndrome-corporate`,
      category: `office-syndrome`,
      th: {
        name: `แพ็กเกจองค์กร Office Syndrome (สวัสดิการพนักงาน)`,
        desc: `โปรแกรมดูแลพนักงานที่ทำงานหน้าจอ จัดได้ทั้งที่โรงพยาบาลและในองค์กร`,
      },
      en: {
        name: `Corporate Office Syndrome Package (Employee Benefit)`,
        desc: `A program for desk-based staff, run at the hospital or on your premises`,
      },
    },
    {
      key: `membership`,
      category: `membership`,
      th: {
        name: `โปรแกรมสมาชิก KMC`,
        desc: `สิทธิพิเศษและส่วนลดค่าบริการสำหรับสมาชิก`,
      },
      en: {
        name: `KMC Membership Program`,
        desc: `Member privileges and discounts across our services`,
      },
    },
    {
      key: `promotions`,
      category: `membership`,
      th: {
        name: `โปรโมชั่นประจำเดือน`,
        desc: `ข้อเสนอพิเศษที่เปลี่ยนแปลงตามช่วงเวลา`,
      },
      en: {
        name: `Monthly Promotions`,
        desc: `Limited-time offers that rotate through the year`,
      },
    },
  ],
  K = Array.isArray(kt) ? kt : [],
  Nt = K.length > 0;
function Pt(e) {
  let t = e ? `th` : `en`;
  return packages.map((e) => {
    let n = e[t],
      r = At.find((t) => t.key === e.category);
    return {
      key: e.key,
      name: n.name,
      desc: n.desc,
      category: r ? r[t] : ``,
      price: e.price?.[t] || null,
      includes: e.includes?.[t] || [],
      content: null,
      image: e.image || null,
      imageAlt: e.imageAlt?.[t] || n.name,
      photo: jt[e.key] || null,
    };
  });
}
function Ft(e) {
  let t = e ? `th` : `en`,
    n = K.filter((e) => e.lang === t);
  return (n.length ? n : K).map((e) => ({
    key: e.slug,
    name: e.title,
    desc: e.excerpt,
    category: e.categories[0] || ``,
    price: e.price || null,
    includes: [],
    content: e.content || null,
    image: e.image || null,
    imageAlt: e.imageAlt || e.title,
    photo: jt[J(e.slug)] || null,
  }));
}
function q(e) {
  return Nt ? Ft(e) : Pt(e);
}
function J(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function It(e) {
  return !!(e.price || e.includes.length || e.content || e.image);
}
function Lt(e, t) {
  let n = J(e);
  return q(t).find((e) => J(e.key) === n) || null;
}
function Rt(e) {
  return [
    ...new Set(
      q(e)
        .map((e) => e.category)
        .filter(Boolean),
    ),
  ];
}
var Y = (e) => e.toLocaleString(`en-US`),
  phoneNumber = `02-109-4210`,
  Z = {
    to: `/packages`,
    th: `ดูแพ็กเกจและราคา`,
    en: `View packages & pricing`,
  },
  zt = {
    href: O,
    th: `ดูแผนที่ Google Maps`,
    en: `Open in Google Maps`,
  },
  Q = {
    href: `tel:${phoneNumber.replace(/-/g, ``)}`,
    th: `โทร ${phoneNumber}`,
    en: `Call ${phoneNumber}`,
  },
  Bt = [
    {
      key: `hospital`,
      th: `Hospital (โรงพยาบาล)`,
      en: `Hospital`,
      items: [
        {
          key: `hp-services`,
          th: {
            q: `โรงพยาบาลมีบริการอะไรบ้าง?`,
            a: `เราให้บริการตรวจรักษาทั่วไป ตรวจสุขภาพ ฟื้นฟูและกายภาพบำบัด ดูแลผู้สูงอายุ และบริการดูแลที่บ้าน ดูรายละเอียดทั้งหมดได้ที่หน้าบริการและหน้าแพ็กเกจ`,
          },
          en: {
            q: `What services does the hospital offer?`,
            a: `General treatment, health check-ups, rehabilitation and physiotherapy, elderly care, and home care. See the services and packages pages for everything we offer.`,
          },
          links: [
            {
              to: `/services`,
              th: `ดูบริการทั้งหมด`,
              en: `View all services`,
            },
            Z,
          ],
        },
        {
          key: `hp-location`,
          th: {
            q: `โรงพยาบาลตั้งอยู่ที่ไหน?`,
            a: `ดูที่ตั้งและเส้นทางมายังโรงพยาบาลได้จาก Google Maps`,
          },
          en: {
            q: `Where is the hospital located?`,
            a: `You can find our location and directions on Google Maps.`,
          },
          links: [zt],
        },
        {
          key: `hp-social-security`,
          th: {
            q: `โรงพยาบาลรับประกันสังคมหรือไม่?`,
            a: `ณ ขณะนี้ยังไม่มีการรับประกันสังคม`,
          },
          en: {
            q: `Do you accept social security coverage?`,
            a: `Not at this time, we do not currently accept social security.`,
          },
        },
        {
          key: `hp-insurance`,
          th: {
            q: `โรงพยาบาลรับประกันภัยหรือไม่?`,
            a: `รับ แนะนำให้นำกรมธรรม์มาปรึกษาทีมงานก่อนเข้ารับบริการ`,
          },
          en: {
            q: `Do you accept private insurance?`,
            a: `Yes. We recommend discussing your policy with our team before your visit.`,
          },
        },
        {
          key: `hp-elderly-care`,
          th: {
            q: `มีบริการดูแลผู้สูงอายุรายวันและรายเดือนหรือไม่?`,
            a: `มี ทั้งแบบรายวันและรายเดือน ดูรายละเอียดและอัตราค่าบริการได้ที่หน้าแพ็กเกจ`,
          },
          en: {
            q: `Is elderly care available daily and monthly?`,
            a: `Yes, both daily and monthly. Details and pricing are on the packages page.`,
          },
          links: [Z],
        },
        {
          key: `hp-at-home`,
          th: {
            q: `มีการให้บริการอะไรที่บ้านบ้าง?`,
            a: `มีบริการรถกอล์ฟไปรับในสถานที่ใกล้เคียง บริการ Telemedicine และบริการเจาะเลือดถึงที่บ้าน`,
          },
          en: {
            q: `What services do you provide at home?`,
            a: `A golf-cart pickup service for nearby locations, telemedicine consultations, and at-home blood draws.`,
          },
          links: [
            {
              to: `/services/home-care`,
              th: `ดูบริการดูแลที่บ้าน`,
              en: `See home care services`,
            },
          ],
        },
      ],
    },
    {
      key: `nursing-home`,
      th: `Nursing Home (ศูนย์ดูแลผู้สูงอายุ)`,
      en: `Nursing Home`,
      items: [
        {
          key: `nh-price`,
          th: {
            q: `ราคาเท่าไหร่?`,
            a: `อัตราค่าบริการต่างกันไปในแต่ละสาขา ขึ้นอยู่กับระดับการดูแลและประเภทห้องพัก เริ่มต้นที่ ${Y(_e)} - ${Y(ve)} บาท/เดือน กดที่สาขาด้านล่างเพื่อดูแพ็กเกจและโปรโมชั่นของแต่ละแห่ง`,
          },
          en: {
            q: `How much does it cost?`,
            a: `Rates differ by branch, depending on the level of care and the room type, starting from ฿${Y(_e)}–${Y(ve)} per month. Open a branch below for its packages and promotions.`,
          },
          branches: k,
          links: [Z],
        },
        {
          key: `nh-branches`,
          th: {
            q: `มีสาขาที่ไหนบ้าง?`,
            a: `เรามีทั้งหมด ${k.length} สาขา กดที่แต่ละสาขาเพื่อดูที่ตั้ง ประเภทห้องพัก สิ่งอำนวยความสะดวก และแพ็กเกจ`,
          },
          en: {
            q: `Where are your branches?`,
            a: `We have ${k.length} branches. Open one to see its location, room types, facilities, and packages.`,
          },
          branches: k,
        },
        {
          key: `nh-booking`,
          th: {
            q: `ต้องจองล่วงหน้าหรือไม่?`,
            a: `โทรสอบถามการจองเตียงล่วงหน้าได้ที่ ${phoneNumber}`,
          },
          en: {
            q: `Do I need to book in advance?`,
            a: `Call ${phoneNumber} to ask about reserving a bed in advance.`,
          },
          links: [Q],
        },
        {
          key: `nh-included`,
          th: {
            q: `ค่าใช้จ่ายแพ็กเกจรวมอะไรบ้าง?`,
            a: `ค่าใช้จ่ายในแพ็กเกจรวมแพมเพิส อาหาร 3 มื้อ และการดูแลตลอด 24 ชั่วโมง`,
          },
          en: {
            q: `What does the package include?`,
            a: `The package covers adult diapers, three meals a day, and round-the-clock care.`,
          },
        },
        {
          key: `nh-excluded`,
          th: {
            q: `ค่าใช้จ่ายแพ็กเกจไม่รวมอะไร?`,
            a: `ไม่รวมค่ายาประจำตัวของผู้ป่วย และของใช้ส่วนตัว`,
          },
          en: {
            q: `What is not included in the package?`,
            a: `The patient’s regular medication and personal items are not included.`,
          },
        },
        {
          key: `nh-activities`,
          th: {
            q: `มีกิจกรรมอะไรให้ผู้ป่วยทำบ้าง?`,
            a: `AGY HERO Nursing Home มีกิจกรรมมากมาย เช่น กิจกรรมบำบัด การทำสปามือเท้า การวาดรูป ตักบาตรประจำวัน และอื่นๆ อีกมากมาย`,
          },
          en: {
            q: `What activities are there for residents?`,
            a: `AGY HERO Nursing Home runs a full activity programme, occupational therapy, hand and foot spa, painting, daily merit-making, and much more.`,
          },
        },
        {
          key: `nh-stroke`,
          th: {
            q: `รับดูแลผู้ป่วยโรคหลอดเลือดสมองหรือไม่?`,
            a: `รับ และเรามีแพ็กเกจการฟื้นฟูและกายภาพพิเศษสำหรับผู้ป่วยโดยเฉพาะ`,
          },
          en: {
            q: `Do you care for stroke patients?`,
            a: `Yes, and we have a dedicated rehabilitation and physiotherapy package for them.`,
          },
          links: [
            {
              to: `/services/stroke-rehab`,
              th: `ดูโปรแกรมฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง`,
              en: `See the stroke rehab programme`,
            },
          ],
        },
        {
          key: `nh-alzheimer`,
          th: {
            q: `รับดูแลผู้ป่วยโรคอัลไซเมอร์หรือไม่?`,
            a: `รับ รบกวนญาติแจ้งล่วงหน้าก่อนทำการจอง`,
          },
          en: {
            q: `Do you care for patients with Alzheimer’s?`,
            a: `Yes. We ask families to let us know in advance when booking.`,
          },
        },
      ],
    },
    {
      key: `home-care`,
      th: `Home Care (ดูแลที่บ้าน)`,
      en: `Home Care`,
      items: [
        {
          key: `hc-qualification`,
          th: {
            q: `ผู้ดูแลมีวุฒิอะไร?`,
            a: `นักบริบาล ผู้ช่วยพยาบาล และพยาบาลวิชาชีพ ขึ้นอยู่กับความจำเป็นของคนไข้ และผู้ดูแลทุกท่านได้ผ่านการตรวจสอบประวัติอาชญากรรมมาเรียบร้อยแล้ว`,
          },
          en: {
            q: `What qualifications do the caregivers hold?`,
            a: `Certified caregivers, nurse assistants, and registered nurses, matched to what the patient needs. Every caregiver has passed a criminal background check.`,
          },
        },
        {
          key: `hc-scope`,
          th: {
            q: `ผู้ดูแลสามารถช่วยเหลือด้านใดได้บ้าง?`,
            a: `ดูแลกิจวัตรประจำวัน ดูแลสุขอนามัย ดูแลอาหารและยา ดูแลพื้นที่พักอาศัยของคนไข้ เตียงนอน ความเรียบร้อยภายในห้องพัก ห้องน้ำ อำนวยความสะดวกทั่วไป พาทำกายภาพพื้นฐาน และพาไปพบหมอตามนัด`,
          },
          en: {
            q: `What can a caregiver help with?`,
            a: `Daily routines, personal hygiene, meals and medication, keeping the patient’s living space, bed, room and bathroom in order, general assistance, basic physiotherapy, and accompanying them to medical appointments.`,
          },
        },
        {
          key: `hc-lead-time`,
          th: {
            q: `จองล่วงหน้านานเท่าไหร่?`,
            a: `แนะนำให้จองล่วงหน้า 3 - 5 วัน`,
          },
          en: {
            q: `How far in advance should I book?`,
            a: `We recommend booking 3–5 days ahead.`,
          },
          links: [Q],
        },
        {
          key: `hc-price`,
          th: {
            q: `ราคาเท่าไหร่บ้าง?`,
            a: `บริการดูแลที่บ้านมีทั้งแบบรายวันและรายเดือน ดูรายละเอียดและอัตราค่าบริการได้ที่หน้าแพ็กเกจ`,
          },
          en: {
            q: `How much does it cost?`,
            a: `Home care is available daily or monthly, see the packages page for the rates.`,
          },
          links: [Z],
        },
        {
          key: `hc-room`,
          th: {
            q: `หากจ้างเป็นรายเดือน ต้องหาห้องนอนให้ผู้ดูแลหรือไม่?`,
            a: `หากจ้างเป็นรายเดือนแบบ 24 ชั่วโมง จำเป็นต้องหาที่นอนให้ผู้ดูแล และพื้นที่เก็บของใช้ส่วนตัว`,
          },
          en: {
            q: `For a monthly hire, do we need to provide a room for the caregiver?`,
            a: `For a monthly, 24-hour arrangement, yes, the caregiver needs somewhere to sleep and space for their personal belongings.`,
          },
        },
      ],
    },
    {
      key: `preventive`,
      th: `สุขภาพเชิงป้องกันและติดตามผล`,
      en: `Preventive Care & Monitoring`,
      items: [
        {
          key: `pv-frequency`,
          th: {
            q: `ควรตรวจสุขภาพประจำปีบ่อยแค่ไหน?`,
            a: `โดยทั่วไปควรตรวจปีละ 1 ครั้ง แต่ผู้มีความเสี่ยงหรือโรคประจำตัวอาจต้องตรวจถี่กว่านั้น แพทย์จะแนะนำตามความเหมาะสม`,
          },
          en: {
            q: `How often should I have an annual check-up?`,
            a: `Once a year for most people. Those with risk factors or an existing condition may need more frequent testing. Your doctor will advise.`,
          },
          links: [
            {
              to: `/services/annual-checkup-vaccine`,
              th: `ดูแพ็กเกจตรวจสุขภาพและวัคซีน`,
              en: `See check-up & vaccine packages`,
            },
          ],
        },
        {
          key: `pv-vaccines`,
          th: {
            q: `ผู้สูงอายุต้องฉีดวัคซีนอะไรบ้าง?`,
            a: `ที่พบบ่อย เช่น วัคซีนไข้หวัดใหญ่ ปอดอักเสบ และงูสวัด แพทย์จะประเมินและแนะนำตามสุขภาพและประวัติของแต่ละคน`,
          },
          en: {
            q: `Which vaccines do older adults need?`,
            a: `Commonly influenza, pneumococcal and shingles. A doctor will assess and recommend based on each person’s health and history.`,
          },
        },
        {
          key: `pv-monitoring`,
          th: {
            q: `โปรแกรมติดตามสุขภาพ (Lab + App) ทำงานอย่างไร?`,
            a: `เริ่มจากตรวจแล็บพื้นฐาน แล้วเชื่อมผลเข้าแอปพลิเคชัน ทีมแพทย์ติดตามแนวโน้มค่าสุขภาพต่อเนื่องและแจ้งเตือนเมื่อพบความเสี่ยง ก่อนกลายเป็นอาการป่วย`,
          },
          en: {
            q: `How does the Health Monitoring Program (Lab + App) work?`,
            a: `It starts with a baseline lab panel, linked into an app. Our doctors follow your values over time and alert you when a risk trend appears, before it becomes illness.`,
          },
          links: [
            {
              to: `/services/health-monitoring`,
              th: `ดูโปรแกรมติดตามสุขภาพ`,
              en: `See the monitoring program`,
            },
          ],
        },
        {
          key: `pv-healthy`,
          th: {
            q: `สุขภาพแข็งแรงดีอยู่แล้ว ต้องเข้าโปรแกรมติดตามสุขภาพไหม?`,
            a: `เหมาะ เพราะเป้าหมายคือป้องกันและรู้ความเสี่ยงล่วงหน้า ไม่ใช่รอให้มีอาการก่อนจึงตรวจ`,
          },
          en: {
            q: `I feel healthy. Is the monitoring program still worth it?`,
            a: `Yes. The point is prevention and seeing risk early, rather than waiting for symptoms before testing.`,
          },
        },
        {
          key: `pv-office-syndrome`,
          th: {
            q: `ปวดคอบ่าไหล่จากการทำงานแบบไหนควรมาพบนักกายภาพบำบัด?`,
            a: `หากปวดต่อเนื่องเกิน 1-2 สัปดาห์ มีอาการชาร่วมด้วย หรือปวดจนกระทบการทำงาน ควรเข้ารับการประเมิน`,
          },
          en: {
            q: `When should work-related neck or shoulder pain be assessed?`,
            a: `If it persists beyond one to two weeks, comes with numbness, or is affecting your work, it is worth being assessed.`,
          },
          links: [
            {
              to: `/services/office-syndrome`,
              th: `ดูโปรแกรม Office Syndrome`,
              en: `See the office syndrome program`,
            },
          ],
        },
      ],
    },
    {
      key: `organizations`,
      th: `องค์กรและชุมชน`,
      en: `Organizations & Communities`,
      items: [
        {
          key: `org-size`,
          th: {
            q: `โปรแกรมสุขภาพองค์กรเหมาะกับบริษัทขนาดไหน?`,
            a: `ออกแบบให้ปรับตามขนาดองค์กรได้ ตั้งแต่บริษัทขนาดเล็กไปจนถึงโรงงานขนาดใหญ่ ทีมงานจะประเมินและเสนอแผนที่เหมาะกับจำนวนพนักงานและงบประมาณ`,
          },
          en: {
            q: `What size of company are the corporate programs for?`,
            a: `They scale from small companies to large factories. Our team assesses and proposes a plan matched to your headcount and budget.`,
          },
          links: [
            {
              to: `/corporate`,
              th: `ดูโซลูชันองค์กร`,
              en: `See corporate solutions`,
            },
          ],
        },
        {
          key: `org-privacy`,
          th: {
            q: `ข้อมูลสุขภาพพนักงานที่ฝ่ายบุคคลเห็นละเอียดแค่ไหน?`,
            a: `แดชบอร์ดสำหรับ HR แสดงผลแบบภาพรวมระดับองค์กร ไม่ระบุตัวตนหรือรายละเอียดทางการแพทย์รายบุคคล เพื่อรักษาความเป็นส่วนตัวของพนักงานตามหลักจริยธรรมทางการแพทย์`,
          },
          en: {
            q: `How much employee health detail does HR see?`,
            a: `The HR dashboard shows organization-level aggregates only, never identifying individuals or their medical details, to protect employee privacy under medical ethics.`,
          },
        },
        {
          key: `org-onsite`,
          th: {
            q: `จัดตรวจสุขภาพและฉีดวัคซีนนอกสถานที่ได้ไหม?`,
            a: `ได้ มีทีมและหน่วยเคลื่อนที่สำหรับจัดกิจกรรมตรวจสุขภาพและฉีดวัคซีนถึงในสถานประกอบการและในหมู่บ้าน`,
          },
          en: {
            q: `Can you run screening and vaccination at our site?`,
            a: `Yes, we have a team and a mobile unit that runs screening and vaccination events at workplaces and inside residential communities.`,
          },
        },
        {
          key: `community-cost`,
          th: {
            q: `โครงการชุมชนมีค่าใช้จ่ายกับนิติบุคคลหมู่บ้านหรือไม่?`,
            a: `กิจกรรมหลักของโครงการไม่มีค่าใช้จ่ายในการเข้าร่วมสำหรับนิติบุคคลหมู่บ้าน ส่วนบริการตรวจ/รักษาเพิ่มเติมที่ลูกบ้านเลือกใช้จะมีสิทธิพิเศษราคาตามที่ตกลงร่วมกัน`,
          },
          en: {
            q: `Does the community program cost the village committee anything?`,
            a: `The core activities are free for the committee to host. Additional testing or treatment residents choose is charged at the agreed preferential rates.`,
          },
          links: [
            {
              to: `/corporate/community`,
              th: `ดูโครงการชุมชน`,
              en: `See the community program`,
            },
          ],
        },
        {
          key: `community-app`,
          th: {
            q: `ลูกบ้านที่ไม่ถนัดใช้แอปสมาร์ทโฟนเข้าร่วมโครงการได้ไหม?`,
            a: `ได้ กิจกรรม Health Talk และศูนย์สุขภาพเคลื่อนที่เข้าร่วมได้โดยไม่ต้องใช้แอป ส่วนแอป Well-being เป็นทางเลือกเสริมสำหรับผู้ที่สะดวกใช้งาน`,
          },
          en: {
            q: `Can residents who aren’t comfortable with apps take part?`,
            a: `Yes. Health Talks and the mobile health centre need no app at all. The well-being app is an optional extra for those who want it.`,
          },
        },
      ],
    },
  ],
  Vt = Bt.flatMap((e) => e.items),
  trustPoints = [
    {
      th: `ทีมสหวิชาชีพครบวงจร`,
      en: `Full multidisciplinary team`,
      descTh: `แพทย์ พยาบาล นักกายภาพ ผู้ดูแล`,
      descEn: `Doctors, nurses, therapists, caregivers`,
    },
    {
      th: `ผสาน 3 ศาสตร์การแพทย์`,
      en: `3 medical traditions, combined`,
      descTh: `ตะวันตก แผนจีน และแผนไทย`,
      descEn: `Western, Chinese, and Thai medicine`,
    },
    {
      th: `ดูแลตลอด 24 ชั่วโมง`,
      en: `24-hour care`,
      descTh: `พยาบาลประจำการทุกวัน`,
      descEn: `Nurses on duty every day`,
    },
    {
      th: `แผนฟื้นฟูรายบุคคล`,
      en: `Personalized rehab plans`,
      descTh: `ออกแบบเฉพาะแต่ละเคส`,
      descEn: `Tailored to each case`,
    },
  ],
  facilityPhotos = [
    {
      src: `/images/facilities/patient-room-private.jpg`,
      th: `ห้องพักผู้ป่วยเดี่ยว มีเตียงผู้ป่วยปรับไฟฟ้า โซฟาสำหรับญาติ และทีวี`,
      en: `A private patient room with an electric bed, a sofa for relatives and a TV`,
    },
    {
      src: `/images/facilities/hydrotherapy-pool.jpg`,
      th: `สระธาราบำบัด นักกายภาพบำบัดกำลังดูแลผู้รับบริการออกกำลังกายในน้ำ`,
      en: `The hydrotherapy pool, with a physiotherapist leading an exercise session in the water`,
    },
    {
      src: `/images/facilities/patient-room-shared.jpg`,
      th: `ห้องพักผู้ป่วยรวมสองเตียง มีม่านกั้นระหว่างเตียงและโซฟาสำหรับญาติ`,
      en: `A two-bed shared room with privacy curtains and a sofa for relatives`,
    },
    {
      src: `/images/facilities/equipment.jpg`,
      th: `ดัมเบลโฟมสำหรับออกกำลังกายในสระธาราบำบัด`,
      en: `Foam dumbbells used for exercise in the hydrotherapy pool`,
    },
  ],
  amenities = [
    {
      th: `เตียงผู้ป่วยปรับไฟฟ้า`,
      en: `Electronically adjustable beds`,
    },
    {
      th: `พยาบาลดูแลตลอด 24 ชั่วโมง`,
      en: `24-hour nursing service`,
    },
    {
      th: `ทีวีดิจิทัลเพื่อความบันเทิง`,
      en: `Digital TV for entertainment`,
    },
    {
      th: `Wi-Fi ความเร็วสูง`,
      en: `Hi-speed Wi-Fi`,
    },
    {
      th: `โซฟาสำหรับญาติผู้ป่วย`,
      en: `Sofa bed for relatives`,
    },
    {
      th: `ระบบเรียกพยาบาลอัตโนมัติ`,
      en: `Nurse call system`,
    },
  ],
  featuredPackageIds = [`senior-checkup`, `rehab-postop`, `homecare-daily`, `membership`],
  visitSteps = [
    {
      th: `ก่อนเข้ารับบริการ`,
      en: `Preparing for your visit`,
      descTh: `เตรียมเอกสาร ประกันสุขภาพ และนัดหมายล่วงหน้า`,
      descEn: `Documents, insurance, and scheduling ahead of time.`,
      photo: `hospital/reception`,
    },
    {
      th: `ระหว่างเข้ารับบริการ`,
      en: `During your visit`,
      descTh: `ห้องพักหลากหลายรูปแบบ เพื่อความสบายตลอดการรักษา`,
      descEn: `A range of room options for a comfortable stay.`,
      photo: `sleep/room`,
    },
    {
      th: `หลังเข้ารับบริการ`,
      en: `Preparing to go home`,
      descTh: `สรุปเวชระเบียนและติดตามอาการหลังกลับบ้าน`,
      descEn: `Medical records and follow-up care after discharge.`,
      photo: `sleep/nurse-couple`,
    },
  ];
function Yt({ th: e, en: t, note: n }) {
  let { i18n: r } = useTranslation();
  return (
    <div>
      <Ze
        noindex={!0}
        title={r.language === `th` ? e : t}
        subtitle={
          r.language === `th`
            ? `หน้านี้ยังไม่มีคอนเทนต์จริง — เตรียมโครงไว้ตามผังเว็บไซต์ พร้อมใส่เนื้อหาต่อได้ทันที`
            : `Content for this page is not written yet, structured and ready for real copy.`
        }
        image={`physio/treatment-room`}
        imageAlt={
          r.language === `th` ? `ห้องทำกายภาพบำบัดของโรงพยาบาล` : `The hospital treatment room`
        }
      />
      <RevealSection className={`mx-auto max-w-4xl px-6 py-16`}>
        <div
          className={`rounded-3xl border border-dashed border-kmc-secondary/25 p-10 text-center text-kmc-secondary/50`}
        >
          {`[ `}
          {n ||
            (r.language === `th`
              ? `พื้นที่สำหรับเนื้อหา/รูปภาพ`
              : `Placeholder for content / imagery`)}
          {` ]`}
        </div>
      </RevealSection>
    </div>
  );
}
var Xt = new Set([
    `/`,
    `/about`,
    `/services`,
    `/doctors`,
    `/doctors/list`,
    `/facilities`,
    `/packages`,
    `/corporate`,
    `/blog`,
    `/contact`,
    ...Object.keys(services).map((e) => `/services/${e}`),
  ]),
  Zt = [`/about/history`, `/about/vision`, `/about/team`, `/about/atmosphere`, `/about/standards`];
function Qt(e, t = []) {
  for (let n of e)
    (!Xt.has(n.path) && !Zt.includes(n.path) && t.push(n), n.children && Qt(n.children, t));
  return t;
}
var $t = Qt(R);
new Set($t.map((e) => e.path));
var en = `marketing.`;
function tn(e) {
  return (e ?? (typeof window > `u` ? `` : window.location.hostname)).startsWith(en);
}
var _Element5 = (0, React.lazy)(() =>
    s(() => import("./routes/AboutIndex.jsx"), __vite__mapDeps([0, 1, 2, 3, 4])),
  ),
  _Element8 = (0, React.lazy)(() =>
    s(() => import("./routes/ServicesIndex.jsx"), __vite__mapDeps([5, 1, 2, 3, 4])),
  ),
  _Element9 = (0, React.lazy)(() =>
    s(() => import("./routes/ServiceDetail.jsx"), __vite__mapDeps([6, 2, 1, 3, 7, 4, 8, 9, 10])),
  ),
  _Element0 = (0, React.lazy)(() =>
    s(() => import("./routes/DoctorsIndex.jsx"), __vite__mapDeps([11, 1, 2, 3, 4])),
  ),
  _Element1 = (0, React.lazy)(() =>
    s(() => import("./routes/DoctorsList.jsx"), __vite__mapDeps([12, 2, 1, 4, 8])),
  ),
  _Element10 = (0, React.lazy)(() =>
    s(() => import("./routes/Facilities.jsx"), __vite__mapDeps([13, 1, 2, 4])),
  ),
  _Element11 = (0, React.lazy)(() =>
    s(() => import("./routes/Packages.jsx"), __vite__mapDeps([14, 2, 1, 3, 4])),
  ),
  _Element12 = (0, React.lazy)(() =>
    s(() => import("./routes/PackageDetail.jsx"), __vite__mapDeps([15, 1, 2, 3, 7, 4, 9])),
  ),
  _Element13 = (0, React.lazy)(() =>
    s(() => import("./routes/Corporate.jsx"), __vite__mapDeps([16, 2, 1, 3, 7, 4, 10])),
  ),
  _Element14 = (0, React.lazy)(() =>
    s(() => import("./routes/Blog.jsx"), __vite__mapDeps([17, 2, 1, 3, 7, 4, 18, 19])),
  ),
  _Element15 = (0, React.lazy)(() =>
    s(() => import("./routes/PostDetail.jsx"), __vite__mapDeps([20, 1, 2, 3, 7, 4, 9, 19])),
  ),
  _Element16 = (0, React.lazy)(() =>
    s(() => import("./routes/Contact.jsx"), __vite__mapDeps([21, 2, 1, 3, 4])),
  ),
  _Element6 = (0, React.lazy)(() =>
    s(() => import("./routes/Faq.jsx"), __vite__mapDeps([22, 1, 2, 3, 4, 18])),
  ),
  _Element7 = (0, React.lazy)(() =>
    s(() => import("./routes/Legal.jsx"), __vite__mapDeps([23, 1, 2, 4])),
  ),
  _n = (0, React.lazy)(() =>
    s(() => import("./routes/PersonaLanding.jsx"), __vite__mapDeps([24, 1, 2, 3, 7, 4, 9])),
  ),
  _Element17 = (0, React.lazy)(() =>
    s(() => import("./routes/StrokeAssessment.jsx"), __vite__mapDeps([25, 2, 1, 3, 7, 4, 26])),
  ),
  _Element18 = (0, React.lazy)(() =>
    s(() => import("./routes/MemoryAssessment.jsx"), __vite__mapDeps([27, 2, 1, 3, 7, 4, 26])),
  ),
  _Element19 = (0, React.lazy)(() =>
    s(() => import("./routes/NotFound.jsx"), __vite__mapDeps([9, 1, 2, 3, 7, 4])),
  ),
  _Element4 = (0, React.lazy)(() =>
    s(() => import("./routes/Dashboard.jsx"), __vite__mapDeps([28, 2, 1, 3, 7, 4, 8])),
  );
function SiteRoutes() {
  return tn() ? (
    <Routes>
      <Route path={`*`} element={<_Element4 />} />
    </Routes>
  ) : (
    <Routes>
      {!1}
      <Route element={<SiteLayout />}>
        {/* v2 designs are live; the originals (HomePage, the generic stroke-rehab service page) are
            kept in the code but unrouted for now. Old -v2 addresses redirect to the live paths. */}
        <Route path={`/`} element={<HomePageV2 />} />
        <Route path={`/home-v2`} element={<Navigate to={`/`} replace={!0} />} />
        <Route path={`/services/stroke-rehab`} element={<StrokeRehabV2 />} />
        <Route path={`/services/stroke-rehab-v2`} element={<Navigate to={`/services/stroke-rehab`} replace={!0} />} />
        <Route path={`/about`} element={<_Element5 />} />
        {Zt.map((e) => (
          <Route key={e} path={e} element={<Navigate to={`/about`} replace={!0} />} />
        ))}
        <Route path={`/faq`} element={<_Element6 />} />
        <Route path={`/privacy`} element={<_Element7 kind={`privacy`} />} />
        <Route path={`/terms`} element={<_Element7 kind={`terms`} />} />
        <Route path={`/services`} element={<_Element8 />} />
        <Route path={`/services/:slug`} element={<_Element9 />} />
        <Route path={`/doctors`} element={<_Element0 />} />
        <Route path={`/doctors/list`} element={<_Element1 />} />
        <Route path={`/facilities`} element={<_Element10 />} />
        <Route path={`/packages`} element={<_Element11 />} />
        <Route path={`/packages/:slug`} element={<_Element12 />} />
        <Route path={`/corporate`} element={<_Element13 />} />
        <Route path={`/corporate/:tab`} element={<_Element13 />} />
        <Route path={`/blog`} element={<_Element14 />} />
        <Route path={`/blog/:slug`} element={<_Element15 />} />
        <Route path={`/contact`} element={<_Element16 />} />
        <Route path={`/tools/stroke-assessment`} element={<_Element17 />} />
        <Route path={`/tools/memory-assessment`} element={<_Element18 />} />
        <Route path={`/for/:slug`} element={<_n />} />
        {$t.map((e) => (
          <Route key={e.path} path={e.path} element={<Yt th={e.th} en={e.en} />} />
        ))}
        <Route path={`*`} element={<_Element19 />} />
      </Route>
    </Routes>
  );
}
var Cn = lineUrl.split(`/`).pop(),
  $ = `KMC Hospital`,
  wn = /^\/(en\/)?(services|packages|for|tools)\//,
  Tn = () => {
    let e = navigator.userAgent || ``;
    return (
      /Android|iPhone|iPad|iPod/i.test(e) || (/Macintosh/.test(e) && navigator.maxTouchPoints > 1)
    );
  },
  En = (e) => {
    try {
      let t = new URL(e.href);
      return (
        /(^|\.)line\.me$/.test(t.hostname) &&
        t.pathname.includes(`/ti/p/`) &&
        t.pathname.endsWith(Cn)
      );
    } catch {
      return !1;
    }
  };
function Dn(e) {
  let t = e.closest(`[data-line-topic]`)?.getAttribute(`data-line-topic`);
  if (t) return t;
  if (!wn.test(window.location.pathname)) return null;
  let n = document.title.replace(/\s*[|·–—-]\s*KMC Hospital\s*$/i, ``).trim();
  return n && n !== $ ? n : null;
}
function On(e, t) {
  let n = t
    ? [
        e ? `I'd like to ask about: ${e}` : `I'd like to ask a question`,
        `(Contacting you from the ${$} website)`,
      ]
    : [e ? `สนใจสอบถามข้อมูลเรื่อง: ${e}` : `สนใจสอบถามข้อมูล`, `(ติดต่อจากเว็บไซต์ ${$})`];
  return `https://line.me/R/oaMessage/${encodeURIComponent(Cn)}/?${encodeURIComponent(
    n.join(`
`),
  )}`;
}
function kn(e) {
  let t = e.target instanceof Element ? e.target.closest(`a[href]`) : null;
  if (!t || !En(t) || !Tn()) return;
  let n = window.location.pathname === `/en` || window.location.pathname.startsWith(`/en/`),
    r = t.getAttribute(`href`);
  ((t.href = On(Dn(t), n)), setTimeout(() => t.setAttribute(`href`, r), 0));
}
var An = !1;
function jn() {
  An || typeof document > `u` || ((An = !0), document.addEventListener(`click`, kn, !0));
}
jn();
export {
  lineUrl as C,
  me as S,
  O as T,
  Ye as _,
  Lt as a,
  services as b,
  q as c,
  useStaggerReveal as d,
  Qe as f,
  Xe as g,
  Photo as h,
  Bt as i,
  ContactButtons as l,
  RevealSection as m,
  phoneNumber as n,
  Rt as o,
  Ze as p,
  Vt as r,
  It as s,
  tn as t,
  ParallaxGallery as u,
  R as v,
  he as w,
  serviceGroups as x,
  AnimatedHeading as y,
};
export {
  React,
  ReactDOM,
  BrowserRouter,
  languageFromPath,
  languageBasename,
  jsxRuntime,
  navigationItems,
  ServiceIcon,
  services,
  LanguageMenu,
  MobileLanguageMenu,
  je,
  Ne,
  lineUrl,
  Ie,
  Re,
  He,
  I,
  heroVideo,
  servicePhotos,
  Photo,
  useStaggerReveal,
  RevealSection,
  nt,
  AnimatedHeading,
  serviceGroups,
  ServiceCategoryCard,
  p4Items,
  careNeeds,
  HospitalBackdrop,
  gt,
  careDisciplines,
  communityPrograms,
  newsItems,
  At,
  Lt,
  Hero,
  trustPoints,
  P4Section,
  TeamSection,
  CareNeeds,
  ServicesOverview,
  HealthMonitoring,
  amenities,
  ParallaxGallery,
  facilityPhotos,
  featuredPackageIds,
  packages,
  PackageCard,
  IntegratedCare,
  visitSteps,
  CorporateCommunity,
  NewsSection,
  ContactButtons,
  phoneNumber,
};
export default SiteRoutes;
