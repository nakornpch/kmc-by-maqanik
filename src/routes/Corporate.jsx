// /corporate (organizations) and /corporate/community, in the v2 page style: colour hero with a key photo and a colour-coded
// two-way switch, solution cards, the app demo beside a phone mockup, community activities,
// FAQ, related packages and the closing CTA. Copy for both tabs lives in `content` below.
import { useEffect, useRef } from "react";
import { ArrowUpRight, Building2, Users } from "lucide-react";
import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { d as useSearchParams, l as useNavigate, n as Link, u as useParams } from "../vendor/react-SEPqUFC0.js";
import { t as usePageMeta } from "./usePageMeta.jsx";
import { lineUrl as l, AnimatedHeading } from "../site.jsx";
import { t as useFaqSchema } from "./useFaqSchema.jsx";
import { Actions, FaqBlock, FinalCta, Hero, KArcs, SectionHead, photoSrc, useKv2Effects } from "../components/v2/kit.jsx";

const tabs = [
    {
      key: `corporate`,
      th: `สำหรับองค์กร (HR)`,
      en: `For organizations (HR)`,
    },
    {
      key: `community`,
      th: `สำหรับชุมชน/หมู่บ้าน`,
      en: `For communities`,
    },
];
const content = {
    corporate: {
      th: {
        h1: `โซลูชันดูแลสุขภาพพนักงานสำหรับองค์กร ลดต้นทุน ลดเวลา เพิ่มประสิทธิภาพงาน HR`,
        tagline: `ดูแลสวัสดิการสุขภาพพนักงานครบวงจร บริหารได้ในที่เดียว`,
        meta: {
          title: `โซลูชันสุขภาพองค์กรสำหรับ HR ลดต้นทุน ลดเวลา | KMC Hospital`,
          description: `โซลูชันดูแลสุขภาพพนักงานครบวงจรสำหรับฝ่าย HR ลดต้นทุนค่ารักษา ลดเวลาเดินทาง พร้อมโปรแกรมป้องกันสุขภาพเชิงรุกผ่าน Digital Health App บริหารสวัสดิการพนักงานได้ง่ายในที่เดียว`,
          keywords: [
            `สวัสดิการพนักงาน โรงพยาบาล`,
            `โปรแกรมสุขภาพองค์กร`,
            `Employee Wellness Program`,
            `ตรวจสุขภาพพนักงานประจำปี ราคา`,
            `Digital Health Platform องค์กร`,
            `ลดต้นทุนค่ารักษาพยาบาลพนักงาน`,
            `corporate wellness program Thailand`,
          ],
        },
        intro: `KMC Hospital ให้บริการโซลูชันสุขภาพองค์กรแบบครบวงจรสำหรับฝ่ายทรัพยากรบุคคล (HR) ที่ต้องการดูแลสวัสดิการสุขภาพพนักงานอย่างมีประสิทธิภาพ ครอบคลุมตั้งแต่ตรวจสุขภาพประจำปี วัคซีน กายภาพบำบัด Office Syndrome ไปจนถึงระบบติดตามสุขภาพเชิงป้องกันผ่านแอปพลิเคชัน (Digital Health) ที่ช่วยลดภาระต้นทุนและเวลาที่พนักงานต้องเดินทางออกนอกสถานที่ ให้ HR บริหารสวัสดิการพนักงานได้ในที่เดียว`,
        solutionsLead: `โซลูชันขององค์กรของ KMC Hospital ออกแบบมาเพื่อตอบโจทย์ 3 เรื่องที่ HR กังวลมากที่สุดเวลาวางแผนสวัสดิการสุขภาพพนักงาน:`,
        solutions: [
          {
            title: `ลดภาระต้นทุน (Cost Efficiency)`,
            points: [
              `แพ็กเกจตรวจสุขภาพ วัคซีน และกายภาพบำบัดในราคาพิเศษสำหรับองค์กร ผ่านสัญญารายปี ลดค่าใช้จ่ายเทียบกับให้พนักงานจ่ายเองรายบุคคล`,
              `รวมหลายบริการไว้ในสัญญาเดียว (ตรวจสุขภาพ + วัคซีน + กายภาพบำบัด Office Syndrome + Telemedicine) ลดความซับซ้อนในการจัดซื้อจัดจ้างของ HR`,
              `รายงานสรุปค่าใช้จ่ายและการใช้บริการระดับองค์กรทุกรอบบิล ช่วยวางแผนงบประมาณสวัสดิการปีถัดไปได้แม่นยำขึ้น`,
            ],
          },
          {
            title: `ลดเวลาเดินทางและเวลาทำงานที่เสียไป (Less Travel Time)`,
            points: [
              `หน่วยตรวจสุขภาพและฉีดวัคซีนเคลื่อนที่เข้าไปให้บริการถึงสถานประกอบการ ลดเวลาที่พนักงานต้องออกนอกออฟฟิศ`,
              `Telemedicine ให้พนักงานปรึกษาแพทย์ผ่านวิดีโอคอลระหว่างเวลาพักหรือเวลางานได้ โดยไม่ต้องลาครึ่งวัน`,
              `ระบบนัดหมายออนไลน์ล่วงหน้า ลดเวลารอคิวเมื่อพนักงานต้องเดินทางมาโรงพยาบาลจริง`,
            ],
          },
          {
            title: `โปรแกรมป้องกันสุขภาพเชิงรุกด้วย Digital Health (Prevention & Predictive)`,
            points: [
              `เชื่อมผลตรวจสุขภาพพนักงานเข้าสู่แอปพลิเคชัน ให้พนักงานเห็นแนวโน้มสุขภาพของตัวเอง และได้รับการแจ้งเตือนความเสี่ยงล่วงหน้า ก่อนกลายเป็นโรคเรื้อรัง`,
              `แดชบอร์ดระดับองค์กรให้ HR เห็นภาพรวมความเสี่ยงสุขภาพของพนักงานแบบสรุปรวม (ไม่ระบุตัวตนรายบุคคล) นำไปวางแผนสวัสดิการเชิงป้องกันได้ตรงจุด`,
              `ช่วยลดอัตราการลาป่วยระยะยาวและค่าใช้จ่ายรักษาพยาบาลสะสม ด้วยการดูแลตั้งแต่ก่อนป่วย ไม่ใช่รอให้ป่วยก่อนจึงรักษา`,
            ],
          },
        ],
        demo: {
          title: `แอปพลิเคชัน Digital Health สำหรับองค์กร`,
          lead: `แอป Digital Health ของ KMC Hospital คือศูนย์กลางข้อมูลสุขภาพพนักงานที่เชื่อมต่อกับทุกบริการขององค์กร ให้ทั้งพนักงานและฝ่าย HR ใช้งานง่ายในที่เดียว ทีมงานยินดีเข้าไปสาธิตการใช้งานจริงให้ฝ่าย HR ดูก่อนตัดสินใจ`,
          features: [
            `ผลตรวจสุขภาพและประวัติการรักษาของพนักงานอยู่ในที่เดียว ดูย้อนหลังและเห็นแนวโน้มได้ตลอดเวลา`,
            `แจ้งเตือนความเสี่ยงสุขภาพและคำแนะนำจากทีมแพทย์ ก่อนอาการแสดงออกมา`,
            `จองนัดหมายและปรึกษาแพทย์ผ่าน Telemedicine ได้จากในแอปเดียว ไม่ต้องโทรติดต่อหลายช่องทาง`,
            `แดชบอร์ดสรุปภาพรวมสุขภาพองค์กรสำหรับ HR ใช้ประกอบการวางแผนสวัสดิการและงบประมาณ`,
            `กิจกรรมส่งเสริมสุขภาพในแอป (เช่น นับก้าว แลกของรางวัล) ช่วยสร้าง Employee Engagement ควบคู่ไปกับการดูแลสุขภาพ`,
          ],
          note: `ขอชม Demo การใช้งานจริงได้ฟรี — ทีมงานเข้าไปนำเสนอถึงบริษัทหรือผ่านวิดีโอคอลได้ตามความสะดวกของฝ่าย HR`,
        },
        faq: [
          {
            q: `โปรแกรมสุขภาพองค์กรของ KMC เหมาะกับบริษัทขนาดไหน?`,
            a: `ออกแบบให้ปรับตามขนาดองค์กรได้ ตั้งแต่บริษัทขนาดเล็กไปจนถึงโรงงานขนาดใหญ่ ทีมงานจะประเมินและเสนอแผนที่เหมาะกับจำนวนพนักงานและงบประมาณของแต่ละองค์กร`,
          },
          {
            q: `มีจำนวนพนักงานขั้นต่ำในการสมัครโปรแกรมไหม?`,
            a: `สอบถามเงื่อนไขจำนวนพนักงานขั้นต่ำและอัตราค่าบริการได้กับทีมองค์กรของโรงพยาบาลโดยตรง เนื่องจากแต่ละแพ็กเกจมีเงื่อนไขต่างกัน`,
          },
          {
            q: `ข้อมูลสุขภาพพนักงานที่ HR เห็นในแดชบอร์ดละเอียดแค่ไหน?`,
            a: `แดชบอร์ดสำหรับ HR แสดงผลแบบภาพรวมระดับองค์กร ไม่ระบุตัวตนหรือรายละเอียดทางการแพทย์รายบุคคล เพื่อรักษาความเป็นส่วนตัวของพนักงานตามหลักจริยธรรมทางการแพทย์`,
          },
          {
            q: `ต้องทำสัญญาระยะยาวหรือไม่?`,
            a: `มีทั้งรูปแบบสัญญารายปีและแบบทดลองใช้ในกลุ่มพนักงานบางส่วนก่อน สอบถามรายละเอียดเงื่อนไขสัญญาได้กับทีมองค์กร`,
          },
          {
            q: `แอป Digital Health นี้ต่างจากแอปสุขภาพทั่วไปอย่างไร?`,
            a: `เชื่อมตรงกับผลตรวจแล็บและแพทย์เฉพาะทางของ KMC Hospital จริง ไม่ใช่แอปบันทึกข้อมูลสุขภาพทั่วไปที่ไม่เชื่อมกับสถานพยาบาล`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจตรวจสุขภาพประจำปีสำหรับองค์กร (ปรับตามกลุ่มอายุ/ตำแหน่งงาน)`,
          `แพ็กเกจตรวจอาชีวอนามัยตามความเสี่ยงของงาน`,
          `แพ็กเกจ Digital Health รายพนักงาน/เดือน (Lab+App)`,
          `แพ็กเกจ Office Syndrome สำหรับองค์กร (สวัสดิการพนักงาน)`,
        ],
        cta: {
          primary: {
            label: `นัดทีมองค์กรเพื่อขอใบเสนอราคา / Demo ฟรี`,
            to: `/contact?topic=corporate#appointment`,
          },
          secondary: {
            label: `สอบถามผ่าน LINE`,
            href: l,
          },
        },
      },
      en: {
        h1: `Employee health for organizations: lower cost, less time lost, easier for HR`,
        tagline: `Complete employee health benefits, managed from one place`,
        meta: {
          title: `Corporate Health Solutions for HR | KMC Hospital`,
          description: `Complete employee health solutions for HR teams, lower treatment costs, less travel time, and proactive preventive care through a digital health app, all managed in one place.`,
          keywords: [
            `employee health benefits hospital`,
            `corporate health program`,
            `employee wellness program`,
            `annual employee health screening cost`,
            `corporate digital health platform`,
            `reduce employee healthcare costs`,
            `corporate wellness program Thailand`,
          ],
        },
        intro: `KMC Hospital provides complete corporate health solutions for HR teams responsible for employee health benefits. Annual screening, vaccines, office syndrome physiotherapy, and preventive health monitoring through a digital health app. It cuts both the cost and the time employees spend away from work, and lets HR run the whole benefit from one place.`,
        solutionsLead: `Our corporate solutions are built around the three things HR teams worry about most when planning employee health benefits:`,
        solutions: [
          {
            title: `Cost efficiency`,
            points: [
              `Screening, vaccination and physiotherapy packages at corporate rates under an annual agreement, cheaper than employees paying individually.`,
              `Several services under one agreement (screening + vaccines + office syndrome physiotherapy + telemedicine), which simplifies procurement.`,
              `A cost and utilization summary each billing cycle, so next year’s benefits budget can be planned accurately.`,
            ],
          },
          {
            title: `Less travel and less working time lost`,
            points: [
              `A mobile screening and vaccination unit comes to your premises, so employees stay on site.`,
              `Telemedicine lets employees consult a doctor by video during a break or working hours, without taking half a day off.`,
              `Online advance booking cuts queue time when employees do need to come in.`,
            ],
          },
          {
            title: `Proactive prevention through digital health`,
            points: [
              `Employee results link into the app, so staff can see their own health trends and be alerted to risk before it becomes a chronic condition.`,
              `An organization-level dashboard gives HR an aggregate view of workforce health risk (never individually identifiable), to target preventive benefits where they matter.`,
              `Long-term sick leave and accumulated treatment costs fall when care starts before illness, rather than after it.`,
            ],
          },
        ],
        demo: {
          title: `Digital Health app for organizations`,
          lead: `KMC Hospital’s digital health app is the centre of employee health data, connected to every corporate service and simple for both employees and HR. Our team is glad to demonstrate it before you decide.`,
          features: [
            `Employee results and treatment history in one place, with history and trends always visible`,
            `Health risk alerts and advice from the medical team, before symptoms appear`,
            `Appointment booking and telemedicine consultations inside the same app, no calling several channels`,
            `An organization-level dashboard for HR, for benefits and budget planning`,
            `In-app health activities (step counts, reward redemption) that build engagement alongside the care itself`,
          ],
          note: `A live demo is free, our team will present at your office or by video call, whichever suits HR.`,
        },
        faq: [
          {
            q: `What size of company is this suited to?`,
            a: `It scales from small companies to large factories. Our team assesses and proposes a plan matched to your headcount and budget.`,
          },
          {
            q: `Is there a minimum number of employees?`,
            a: `Minimum headcount and rates vary by package. Ask our corporate team directly.`,
          },
          {
            q: `How much employee health detail does HR see on the dashboard?`,
            a: `The HR dashboard shows organization-level aggregates only, never identifying individuals or their medical details, to protect employee privacy under medical ethics.`,
          },
          {
            q: `Do we have to sign a long-term contract?`,
            a: `There are annual agreements and trial runs with a subset of employees. Ask our corporate team about the terms.`,
          },
          {
            q: `How is this different from a general health app?`,
            a: `It connects directly to KMC Hospital’s own lab results and specialists, not a standalone health tracker with no clinical connection.`,
          },
        ],
        relatedPackages: [
          `Annual corporate screening package (by age group / role)`,
          `Occupational health screening by workplace risk`,
          `Digital Health package per employee/month (Lab + App)`,
          `Corporate office syndrome package (employee benefit)`,
        ],
        cta: {
          primary: {
            label: `Request a quote or a free demo`,
            to: `/contact?topic=corporate#appointment`,
          },
          secondary: {
            label: `Ask us on LINE`,
            href: l,
          },
        },
      },
    },
    community: {
      th: {
        h1: `สุขภาพดีไปกับ KMC Hospital ดูแลคนในชุมชนแบบใกล้ชิด ถึงหน้าบ้าน`,
        tagline: `โครงการดูแลสุขภาพชุมชน ร่วมกับนิติบุคคลหมู่บ้านและคณะกรรมการชุมชน`,
        meta: {
          title: `โครงการสุขภาพหมู่บ้าน สุขภาพดีไปกับ KMC Hospital`,
          description: `โครงการดูแลสุขภาพชุมชน "สุขภาพดีไปกับ KMC Hospital" หมอประจำบ้าน ศูนย์สุขภาพเคลื่อนที่ถึงหมู่บ้าน และแอป Well-being ดูแลลูกบ้านใกล้ชิด ลดภาระค่าใช้จ่ายและการเดินทาง`,
          keywords: [
            `โครงการสุขภาพหมู่บ้าน`,
            `กิจกรรมสุขภาพชุมชน`,
            `ศูนย์สุขภาพเคลื่อนที่`,
            `หมอประจำบ้าน`,
            `สิทธิพิเศษลูกบ้านโรงพยาบาล`,
            `แอปสุขภาพชุมชน`,
          ],
        },
        intro: `โครงการ "สุขภาพดีไปกับ KMC Hospital" คือโครงการดูแลสุขภาพชุมชนของ KMC Hospital ที่ร่วมมือกับนิติบุคคลหมู่บ้านและคณะกรรมการชุมชน จัดกิจกรรมดูแลสุขภาพลูกบ้านถึงในพื้นที่ ลดภาระค่าใช้จ่ายและเวลาเดินทาง พร้อมสร้างความสัมพันธ์ที่ดีระหว่างโรงพยาบาลกับคนในชุมชนในระยะยาว`,
        solutionsLead: `โซลูชันของโครงการชุมชนออกแบบมาเพื่อตอบโจทย์ 3 เรื่องเดียวกับที่ครอบครัวในหมู่บ้านกังวลมากที่สุดเวลาดูแลสุขภาพ:`,
        solutions: [
          {
            title: `ลดภาระค่าใช้จ่าย (Cost)`,
            points: [
              `สิทธิพิเศษส่วนลดค่าตรวจสุขภาพและบริการต่าง ๆ สำหรับลูกบ้านที่เข้าร่วมโครงการ`,
              `แพ็กเกจราคากลุ่มพิเศษ เมื่อจัดกิจกรรมร่วมกับนิติบุคคลหมู่บ้าน`,
              `ตรวจคัดกรองสุขภาพเบื้องต้นฟรีในกิจกรรม Health Talk และหน่วยเคลื่อนที่ ช่วยลดค่าใช้จ่ายก่อนตัดสินใจตรวจเพิ่มเติม`,
            ],
          },
          {
            title: `ลดเวลาเดินทาง (Less Travel Time)`,
            points: [
              `ศูนย์สุขภาพเคลื่อนที่เข้าไปให้บริการถึงในหมู่บ้าน ไม่ต้องเดินทางไกลมาโรงพยาบาล`,
              `หมอประจำบ้านจัดกิจกรรม Health Talk ทั้งช่องทาง Online และ Offline ลูกบ้านเลือกร่วมจากที่บ้านได้`,
              `Telemedicine ให้ลูกบ้านปรึกษาแพทย์เบื้องต้นผ่านวิดีโอคอลได้ทันทีเมื่อไม่สะดวกเดินทาง`,
            ],
          },
          {
            title: `โปรแกรมป้องกันสุขภาพผ่าน Digital Health (Well-being Application)`,
            points: [
              `แอป Well-being ให้ลูกบ้านเก็บสถิติสุขภาพ เช่น จำนวนก้าวเดิน แล้วนำมาแลกของรางวัลได้`,
              `กิจกรรมแข่งขันดูแลสุขภาพร่วมกันทั้งหมู่บ้าน เช่น การติดตามแข่งขันลดไขมันในเลือด สร้างแรงจูงใจต่อเนื่อง`,
              `แจ้งเตือนความเสี่ยงสุขภาพจากข้อมูลที่เก็บผ่านแอป ก่อนกลายเป็นอาการป่วย ตามแนวคิดป้องกันก่อนป่วยของ KMC Hospital`,
            ],
          },
        ],
        demo: {
          title: `แอปพลิเคชัน Well-being สำหรับคนในชุมชน`,
          lead: `แอป Well-being คือเครื่องมือหลักที่ทำให้โครงการ "สุขภาพดีไปกับ KMC Hospital" ดูแลลูกบ้านได้ต่อเนื่องแม้ไม่มีกิจกรรมในพื้นที่ ทีมงานยินดีเข้าไปสาธิตการใช้งานจริงในที่ประชุมนิติบุคคลหมู่บ้าน`,
          features: [
            `นับก้าวเดินและกิจกรรมสุขภาพประจำวัน สะสมแต้มแลกของรางวัล`,
            `กระดานแข่งขัน/ท้าทายสุขภาพร่วมกันทั้งหมู่บ้าน เช่น แข่งขันลดไขมันในเลือด`,
            `แจ้งเตือนสุขภาพและคำแนะนำจากทีมแพทย์ KMC Hospital`,
            `จองนัดหมาย Health Talk หรือปรึกษาแพทย์ผ่าน Telemedicine ได้ในแอปเดียว`,
          ],
          note: `นัดหมายให้ทีมงานเข้าไปสาธิตการใช้แอปในที่ประชุมนิติบุคคลหมู่บ้านได้ฟรี ไม่มีค่าใช้จ่าย`,
        },
        activities: [
          {
            title: `หมอประจำบ้าน (Health Talk Series)`,
            desc: `กิจกรรม Health Talk โดยทีมแพทย์ KMC Hospital ผ่านช่องทาง Online และ Offline ดึงหัวข้อที่น่าสนใจ พร้อมเปิดโอกาสให้ลูกบ้านถามตอบกับหมอโดยตรง`,
          },
          {
            title: `ศูนย์สุขภาพเคลื่อนที่`,
            desc: `หน่วยสุขภาพเคลื่อนที่เข้าไปจัดกิจกรรมดูแลถึงในหมู่บ้าน เช่น ฉีดวัคซีน ตรวจสุขภาพ และตรวจประเมินด้านกายภาพบำบัด`,
          },
          {
            title: `Well-being ผ่าน Application`,
            desc: `กิจกรรมสุขภาพผ่านแอป เช่น เก็บจำนวนก้าวแลกของรางวัล และการติดตามแข่งขันลดไขมันในเลือดร่วมกันทั้งหมู่บ้าน`,
          },
        ],
        faq: [
          {
            q: `โครงการนี้มีค่าใช้จ่ายกับนิติบุคคลหมู่บ้านหรือไม่?`,
            a: `กิจกรรมหลักของโครงการไม่มีค่าใช้จ่ายในการเข้าร่วมสำหรับนิติบุคคลหมู่บ้าน ส่วนบริการตรวจ/รักษาเพิ่มเติมที่ลูกบ้านเลือกใช้จะมีสิทธิพิเศษราคาตามที่ตกลงร่วมกัน`,
          },
          {
            q: `หมู่บ้านต้องมีจำนวนหลังคาเรือนขั้นต่ำถึงจะเข้าร่วมได้ไหม?`,
            a: `สอบถามเงื่อนไขการเข้าร่วมโครงการได้กับทีมชุมชนสัมพันธ์ของโรงพยาบาลโดยตรง เนื่องจากรูปแบบกิจกรรมสามารถปรับตามขนาดชุมชนได้`,
          },
          {
            q: `กิจกรรม Health Talk จัดบ่อยแค่ไหน?`,
            a: `จัดเป็น series ประมาณเดือนละ 1-2 ครั้ง โดยทีมแพทย์ KMC Hospital ดึงหัวข้อที่ลูกบ้านสนใจ พร้อมเปิดโอกาสให้ถามตอบกับหมอโดยตรง`,
          },
          {
            q: `ลูกบ้านที่ไม่ถนัดใช้แอปสมาร์ทโฟนเข้าร่วมโครงการได้ไหม?`,
            a: `ได้ กิจกรรม Health Talk และศูนย์สุขภาพเคลื่อนที่เข้าร่วมได้โดยไม่ต้องใช้แอป ส่วนแอป Well-being เป็นทางเลือกเสริมสำหรับผู้ที่สะดวกใช้งาน`,
          },
        ],
        relatedPackages: [
          `แพ็กเกจกิจกรรมตรวจสุขภาพ+วัคซีนสำหรับหมู่บ้าน`,
          `สิทธิพิเศษลูกบ้านสำหรับบริการของโรงพยาบาล`,
        ],
        cta: {
          primary: {
            label: `ติดต่อทีมชุมชนสัมพันธ์`,
            to: `/contact?topic=community#appointment`,
          },
          secondary: {
            label: `ขอนัดหมายทีมงานเข้าประชุมนิติบุคคล`,
            href: l,
          },
        },
      },
      en: {
        h1: `Good health, together with KMC Hospital: community care that reaches your doorstep`,
        tagline: `A community health program run with village committees and residents’ associations`,
        meta: {
          title: `Community Health Program | KMC Hospital`,
          description: `The "Good health with KMC Hospital" community program. A doctor for the neighbourhood, a mobile health unit that visits your village, and a well-being app, lowering both cost and travel for residents.`,
          keywords: [
            `community health program`,
            `village health activities`,
            `mobile health unit`,
            `neighbourhood doctor`,
            `resident hospital privileges`,
            `community wellbeing app`,
          ],
        },
        intro: `The "Good health with KMC Hospital" program is our community health initiative, run together with village committees and residents’ associations. We bring health activities into the neighbourhood itself, lowering the cost and travel time for residents, and building a lasting relationship between the hospital and the community around it.`,
        solutionsLead: `The community program answers the same three concerns families have about looking after their health:`,
        solutions: [
          {
            title: `Lower cost`,
            points: [
              `Discounted screening and service rates for residents taking part in the program.`,
              `Special group pricing when activities are organized with the village committee.`,
              `Free initial screening at Health Talk events and mobile unit visits, so nobody pays to find out whether further testing is worth it.`,
            ],
          },
          {
            title: `Less travel`,
            points: [
              `A mobile health centre comes into the village, no long journey to the hospital.`,
              `Neighbourhood doctors run Health Talk sessions both online and in person, so residents can join from home.`,
              `Telemedicine gives residents an initial consultation by video whenever travelling isn’t practical.`,
            ],
          },
          {
            title: `Prevention through the well-being app`,
            points: [
              `The well-being app lets residents track health measures such as daily steps and redeem them for rewards.`,
              `Village-wide health challenges, a shared push to lower blood lipids, for example, keep the motivation going.`,
              `Health risk alerts drawn from the app’s data, before anything becomes symptoms, in keeping with our prevention-first approach.`,
            ],
          },
        ],
        demo: {
          title: `Well-being app for the community`,
          lead: `The well-being app is what keeps the program caring for residents between visits. Our team is glad to demonstrate it live at a village committee meeting.`,
          features: [
            `Step counts and daily health activities, earning points for rewards`,
            `Village-wide leaderboards and health challenges, such as a blood lipid challenge`,
            `Health alerts and advice from the KMC Hospital medical team`,
            `Health Talk booking and telemedicine consultations in the same app`,
          ],
          note: `A demo at your village committee meeting is free of charge.`,
        },
        activities: [
          {
            title: `Neighbourhood doctor (Health Talk series)`,
            desc: `Health Talk sessions run by KMC Hospital doctors, online and in person, on the topics residents care about, with time to put questions to a doctor directly.`,
          },
          {
            title: `Mobile health centre`,
            desc: `A mobile unit brings care into the village, vaccination, health screening and physiotherapy assessment.`,
          },
          {
            title: `Well-being through the app`,
            desc: `In-app health activities, from step counts redeemed for rewards to a village-wide blood lipid challenge.`,
          },
        ],
        faq: [
          {
            q: `Does the village committee have to pay for this?`,
            a: `The core program activities are free for the village committee to host. Additional testing or treatment residents choose is charged at the agreed preferential rates.`,
          },
          {
            q: `Is there a minimum number of households?`,
            a: `Ask our community relations team. The format of the activities adapts to the size of the community.`,
          },
          {
            q: `How often are Health Talk sessions held?`,
            a: `As a series, roughly once or twice a month, with KMC Hospital doctors covering the topics residents are interested in and answering questions directly.`,
          },
          {
            q: `Can residents who aren’t comfortable with apps take part?`,
            a: `Yes. Health Talks and the mobile health centre need no app at all. The well-being app is an optional extra for those who want it.`,
          },
        ],
        relatedPackages: [
          `On-site screening + vaccination package for villages`,
          `Resident privileges across hospital services`,
        ],
        cta: {
          primary: {
            label: `Contact our community relations team`,
            to: `/contact?topic=community#appointment`,
          },
          secondary: {
            label: `Invite us to your committee meeting`,
            href: l,
          },
        },
      },
    },
};
const defaultTab = `corporate`;
const solutionPhotos = {
    corporate: [`hospital/health-measure`, `physio/pms-close`, `sleep/sensor-belt`],
    community: [`hospital/health-check`, `hospital/pulse-diagnosis`, `physio/balance`],
};

export default function Corporate() {
  const { i18n } = useTranslation();
  const th = i18n.language === `th`;
  const copy = (thai, english) => th ? thai : english;
  const { tab: tabParam } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const root = useRef(null);
  const hero = useRef(null);
  const legacyTab = searchParams.get(`tab`);
  const tab = content[tabParam] ? tabParam : content[legacyTab] ? legacyTab : defaultTab;
  const go = (key) => navigate(key === defaultTab ? `/corporate` : `/corporate/${key}`, { replace: true });
  // old ?tab= links move to the path form
  useEffect(() => { if (legacyTab) go(legacyTab); }, [legacyTab]);
  const data = content[tab][th ? `th` : `en`];
  usePageMeta({ title: copy(`องค์กรและชุมชน`, `Organizations & Communities`), metaTitle: data.meta.title, description: data.meta.description, keywords: data.meta.keywords });
  useFaqSchema(data.faq, `solution-faq-jsonld`);
  useKv2Effects(root, hero);
  const community = tab === `community`;
  const actions = [data.cta.primary, data.cta.secondary];

  return <div ref={root} className="kv2">
    <Hero heroRef={hero} isTh={th} variant="stage" tone={community ? "community" : "org"}
      photo={photoSrc(community ? `chinese/consult-model` : `hospital/seminar`)}
      photoAlt={community ? copy(`แพทย์ให้คำปรึกษาผู้รับบริการ`, `A doctor advising a patient`) : copy(`สัมมนาสุขภาพสำหรับองค์กร`, `A health seminar for an organization`)}
      crumbs={[{ to: `/`, label: copy(`หน้าแรก`, `Home`) }, { label: copy(`องค์กรและชุมชน`, `Organizations & Communities`) }]}
      eyebrow={community ? `KMC HOSPITAL / COMMUNITY PROGRAM` : `KMC HOSPITAL / CORPORATE WELLNESS`}
      title={data.h1} lead={data.tagline}
      actions={<Actions items={actions} placement={`corporate-${tab}-hero`} />}
      before={<div className="kv2-switch kv2-switch--tones" role="group" aria-label={copy(`เลือกกลุ่มผู้รับบริการ`, `Choose who it is for`)}>
        {tabs.map((item) => {
          const Icon = item.key === `community` ? Users : Building2;
          return <button key={item.key} type="button" data-tone={item.key === `community` ? `community` : `org`} aria-pressed={item.key === tab} onClick={() => go(item.key)}><Icon size={17} />{th ? item.th : item.en}</button>;
        })}
      </div>} />


    <section id="corp-solutions" className="sr-wrap sr-section" data-sr-reveal>
      <SectionHead eyebrow={community ? `FOR COMMUNITIES` : `FOR HR TEAMS`} title={copy(`Solution ที่ตอบโจทย์การดูแล`, `What the solution answers`)} lead={data.intro} />
      <p className="kv2-lead-strip">{data.solutionsLead}</p>
      <div key={tab} className="kv2-solutions">{data.solutions.map((item, index) => <article className="sr-package kv2-rise" style={{ "--i": index }} key={item.title}>
        <div className="sr-package__media"><img src={photoSrc(solutionPhotos[tab][index % solutionPhotos[tab].length])} alt="" loading="lazy" /><span className="sr-num" aria-hidden="true">0{index + 1}</span></div>
        <div className="sr-package__body"><h3>{item.title}</h3><ul className="kv2-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
      </article>)}</div>
    </section>

    <section id="corp-demo" className="sr-fit kv2-demo">
      <div className="sr-wrap" data-sr-reveal><div className="sr-fit__grid">
        <div>
          <p className="sr-eyebrow">PRODUCT DEMO</p><AnimatedHeading key={tab} as="h2" text={data.demo.title} /><p>{data.demo.lead}</p>
          <ul className="kv2-checks kv2-demo__features">{data.demo.features.map((feature, index) => <li key={feature}><span className="kv2-demo__num">0{index + 1}</span><span>{feature}</span></li>)}</ul>
        </div>
        <div className="kv2-phone" aria-hidden="true">
          <KArcs />
          <div className="kv2-phone__head"><i style={{ width: `45%` }} /><i style={{ width: `70%` }} /><b>KMC Health</b></div>
          {[60, 75, 50].map((width) => <div key={width} className="kv2-phone__card"><span /><div><i style={{ width: `${width}%` }} /><i style={{ width: `${width - 20}%` }} /></div></div>)}
          <div className="kv2-phone__bars">{[40, 65, 50, 80, 60, 90, 70].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          <span className="kv2-phone__soon">{copy(`รอภาพ Mockup แอปพลิเคชัน`, `App mockup coming soon`)}</span>
        </div>
      </div>
        {/* sits under the panel, on the page itself */}
        <p className="kv2-demo__note">{data.demo.note}</p>
      </div>
    </section>

    {data.activities?.length > 0 && <section id="corp-activities" className="sr-why sr-wrap" data-sr-reveal>
      <img src={photoSrc(`hydro/group-class`)} alt="" loading="lazy" />
      <div className="sr-why__body"><p className="sr-eyebrow">WHAT THE PROGRAM RUNS</p><AnimatedHeading as="h2" text={copy(`กิจกรรมภายใต้โครงการ`, `What the program runs`)} />
        <ul className="kv2-why-list">{data.activities.map((item, index) => <li key={item.title}><span className="sr-num">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></li>)}</ul>
      </div>
    </section>}

    <FaqBlock key={`${tab}-faq`} id="corp-faq" isTh={th} items={data.faq} name={`${tab}-faq`} />

    {data.relatedPackages?.length > 0 && <div className="sr-wrap sr-other" data-sr-reveal><h3>{copy(`แพ็กเกจที่เกี่ยวข้อง`, `Related packages`)}</h3><div>{data.relatedPackages.map((name) => <Link key={name} to="/packages">{name}<ArrowUpRight size={14} /></Link>)}</div></div>}

    <FinalCta eyebrow={community ? `LET'S WORK TOGETHER` : `LET'S TALK WELLNESS`} title={community ? copy(`ร่วมดูแลสุขภาพชุมชนไปด้วยกัน`, `Let's care for your community together`) : copy(`วางแผนสวัสดิการสุขภาพพนักงานกับเรา`, `Plan your employee health benefits with us`)} lead={data.tagline} actions={actions} placement={`corporate-${tab}-final`} />
  </div>;
}
