import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element6 } from "../vendor/react-SEPqUFC0.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import {
  d as r,
  h as _Element5,
  m as _Element2,
  p as _Element,
  u as _Element4,
  y as _Element3,
} from "../site.jsx";
var l = n(),
  u = [
    {
      th: `ผสาน 3 ศาสตร์การแพทย์`,
      en: `Three medical traditions, combined`,
      photo: `chinese/electro-acupuncture`,
      descTh: `แพทย์แผนตะวันตก แผนจีน และแผนไทย ทำงานร่วมกันเพื่อผลลัพธ์การฟื้นฟูที่ดีที่สุด`,
      descEn: `Western, Chinese, and Thai medicine working together for the best rehabilitation outcome.`,
    },
    {
      th: `ทีมสหวิชาชีพครบวงจร`,
      en: `A full multidisciplinary team`,
      photo: `physio/back-prep`,
      descTh: `แพทย์ พยาบาล นักกายภาพบำบัด และผู้ดูแล ดูแลผู้ป่วยแต่ละคนร่วมกัน`,
      descEn: `Doctors, nurses, physiotherapists, and caregivers working as one team around every patient.`,
    },
    {
      th: `แผนการดูแลรายบุคคล`,
      en: `Care built around the individual`,
      photo: `thai/sitting-stretch`,
      descTh: `ไม่มีสูตรสำเร็จ — แผนฟื้นฟูออกแบบเฉพาะตามอาการและเป้าหมายของแต่ละคน`,
      descEn: `No one-size-fits-all plan, every rehab program is built around each patient's condition and goals.`,
    },
  ],
  d = [
    {
      photo: `sleep/room-wide`,
      th: `ห้องพักผู้ป่วย`,
      en: `A patient room`,
    },
    {
      photo: `chinese/cupping-rest`,
      th: `ห้องทำหัตถการแพทย์แผนจีน`,
      en: `The Chinese medicine treatment room`,
    },
    {
      photo: `hydro/float`,
      th: `สระธาราบำบัด`,
      en: `The hydrotherapy pool`,
    },
    {
      photo: `physio/pms-machine`,
      th: `เครื่องกระตุ้นแม่เหล็กไฟฟ้า (PMS)`,
      en: `The PMS magnetic stimulation unit`,
    },
    {
      photo: `physio/treatment-room`,
      th: `ห้องทำกายภาพบำบัด`,
      en: `The treatment room`,
    },
    {
      photo: `chinese/acupoint-model`,
      th: `หุ่นจุดฝังเข็ม`,
      en: `An acupoint model`,
    },
    {
      photo: `hydro/dumbbells`,
      th: `อุปกรณ์ออกกำลังกายในน้ำ`,
      en: `Water exercise equipment`,
    },
    {
      photo: `sleep/amenities`,
      th: `ของใช้ส่วนตัวสำหรับผู้ป่วย`,
      en: `Patient amenities`,
    },
    {
      photo: `physio/ot-shelves`,
      th: `อุปกรณ์กิจกรรมบำบัด`,
      en: `Occupational therapy tools`,
    },
  ];
function f() {
  let { i18n: n } = e(),
    f = n.language === `th`,
    p = r({
      delayEach: 100,
    });
  return (
    <div>
      <_Element
        title={f ? `เกี่ยวกับ KMC Hospital` : `About KMC Hospital`}
        subtitle={
          f
            ? `โรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health`
            : `A full-service community hospital, under KMC Health Group.`
        }
        image={`building/front`}
        imageAlt={f ? `อาคาร KMC Hospital` : `The KMC Hospital building`}
      />
      <_Element2 className={`mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center`}>
        <div className={`space-y-5 text-kmc-secondary/80 leading-relaxed text-lg`}>
          <_Element3
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-2`}
            text={
              f
                ? `โรงพยาบาลของชุมชน เพื่อคนที่คุณรัก`
                : `A community hospital, for the people you love`
            }
          />
          <p>
            {f
              ? `KMC Hospital เป็นโรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health อยู่ใกล้บ้าน เข้าถึงง่าย ให้บริการทางการแพทย์หลากหลายสาขาด้วยค่าใช้จ่ายที่คุ้มค่า เราเชื่อว่าการดูแลที่ดีไม่จำเป็นต้องไกลจากครอบครัว`
              : `KMC Hospital is a full-service community hospital under KMC Health Group, close to home, easy to reach, offering a wide range of medical services at a fair cost. We believe good care shouldn't mean being far from family.`}
          </p>
          <p>
            {f
              ? `เราดูแลผู้ป่วยด้วยทีมสหวิชาชีพครบวงจร ผสานศาสตร์การแพทย์ตะวันตก แผนจีน และแผนไทยเข้าด้วยกัน พร้อมพยาบาลประจำการตลอด 24 ชั่วโมง เพื่อให้ทุกครอบครัววางใจได้ในทุกช่วงของการดูแลรักษา`
              : `Our patients are cared for by a full multidisciplinary team, combining Western, Chinese, and Thai medicine, with nurses on duty around the clock, so every family can feel at ease through every stage of care.`}
          </p>
        </div>
        <_Element4 className={`aspect-[4/3] rounded-3xl overflow-hidden`}>
          <_Element5
            name={`chinese/doctor-smile`}
            alt={f ? `แพทย์ให้คำปรึกษาผู้รับบริการ` : `A doctor talking with a patient`}
            className={`w-full h-full object-cover`}
          />
        </_Element4>
      </_Element2>
      <_Element2 className={`bg-white/60 border-y border-kmc-secondary/10`}>
        <div className={`mx-auto max-w-6xl px-6 py-20`}>
          <_Element3
            as={`h2`}
            className={`font-display text-3xl font-semibold text-kmc-secondary mb-10 text-center`}
            text={f ? `แนวทางการดูแลของเรา` : `Our approach to care`}
          />
          <div ref={p} className={`grid sm:grid-cols-3 gap-6`}>
            {u.map((e) => (
              <div
                key={e.en}
                className={`rounded-2xl bg-white border border-kmc-secondary/10 overflow-hidden`}
              >
                <div className={`aspect-[4/3] overflow-hidden`}>
                  <_Element5
                    name={e.photo}
                    alt={``}
                    sizes={`(min-width: 640px) 33vw, 100vw`}
                    className={`w-full h-full object-cover`}
                  />
                </div>
                <div className={`p-8`}>
                  <p className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
                    {f ? e.th : e.en}
                  </p>
                  <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>
                    {f ? e.descTh : e.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </_Element2>
      <_Element2 className={`bg-white/60 border-y border-kmc-secondary/10`}>
        <div className={`mx-auto max-w-6xl px-6 py-20`}>
          <_Element3
            as={`h2`}
            className={`font-display text-3xl font-semibold text-kmc-secondary mb-3`}
            text={f ? `บรรยากาศภายในโรงพยาบาล` : `A look inside`}
          />
          <p className={`text-kmc-secondary/70 leading-relaxed max-w-2xl mb-10`}>
            {f
              ? `ห้องพัก ห้องฟื้นฟู สระธาราบำบัด และพื้นที่ดูแลผู้ป่วยของ KMC Hospital`
              : `Patient rooms, rehab spaces, the hydrotherapy pool and the rest of the places where care happens at KMC Hospital.`}
          </p>
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[10rem] sm:auto-rows-[13rem]`}
          >
            {d.map((e, t) => (
              <figure
                key={e.photo}
                className={`relative rounded-2xl overflow-hidden ${t === 0 ? `col-span-2 row-span-2` : ``}`}
              >
                <_Element5
                  name={e.photo}
                  alt={f ? e.th : e.en}
                  sizes={
                    t === 0 ? `(min-width: 768px) 50vw, 100vw` : `(min-width: 768px) 25vw, 50vw`
                  }
                  className={`absolute inset-0 w-full h-full object-cover`}
                />
                <figcaption
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-kmc-secondary/80 to-transparent px-4 pb-3 pt-8 text-xs sm:text-sm font-medium text-white`}
                >
                  {f ? e.th : e.en}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </_Element2>
      <_Element2 className={`bg-white/60 border-y border-kmc-secondary/10`}>
        <div className={`mx-auto max-w-3xl px-6 py-20 text-center`}>
          <p
            className={`font-display uppercase tracking-[0.3em] text-sm text-kmc-primary-deep mb-3`}
          >
            {f ? `แนวคิดการดูแลของเรา` : `How we think about care`}
          </p>
          <_Element3
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-4`}
            text={
              f
                ? `ดูแลตั้งแต่ก่อนป่วย ด้วยแนวคิด P4`
                : `Care that starts before illness: the P4 approach`
            }
          />
          <p className={`text-kmc-secondary/70 leading-relaxed mb-6`}>
            {f
              ? `ทุกบริการของ KMC Hospital ออกแบบบนแนวคิด P4 — ป้องกันก่อนป่วย (Prevention), คาดการณ์ความเสี่ยงล่วงหน้า (Predictive), ดูแลเฉพาะบุคคล (Personalized) และดูแลไปด้วยกันกับผู้ป่วย ครอบครัว และชุมชน (Participation) เราจึงไม่ได้รอให้คุณป่วยแล้วค่อยรักษา แต่อยู่เคียงข้างตั้งแต่ก่อนเจ็บป่วยไปจนถึงวันที่ต้องฟื้นฟูร่างกาย`
              : `Every KMC Hospital service is built on P4. Prevention, Predictive, Personalized and Participation. We don’t wait for illness before we start caring: we stay alongside you from before you are unwell through to the day you are rebuilding your strength, with you, your family and your community taking part in it.`}
          </p>
          <_Element6 to={`/services`} className={`text-kmc-secondary font-medium hover:underline`}>
            {f ? `ดูบริการของเรา →` : `See our services →`}
          </_Element6>
        </div>
      </_Element2>
      <_Element2 className={`mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center`}>
        <div
          className={`mx-auto w-full max-w-sm aspect-[2/3] rounded-3xl overflow-hidden md:order-2`}
        >
          <_Element5
            name={`sleep/bathroom`}
            alt={
              f
                ? `ห้องน้ำผู้ป่วยพร้อมราวจับกันลื่นและเก้าอี้นั่งอาบน้ำ`
                : `A patient bathroom with grab rails and a fold-down shower seat`
            }
            sizes={`(min-width: 768px) 384px, 100vw`}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div>
          <_Element3
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-4`}
            text={f ? `มาตรฐานความปลอดภัย` : `Safety, as standard`}
          />
          <p className={`text-kmc-secondary/70 leading-relaxed`}>
            {f
              ? `เราให้ความสำคัญกับความปลอดภัยและคุณภาพการดูแลในทุกขั้นตอน ตั้งแต่การพยาบาล อุปกรณ์ทางการแพทย์ ไปจนถึงความสะอาดและการควบคุมการติดเชื้อ หากมีข้อสงสัยเรื่องมาตรฐานการดูแล ทีมงานของเรายินดีให้ข้อมูลเพิ่มเติม`
              : `Safety and quality of care come first at every step, from nursing practice and medical equipment to hygiene and infection control. If you have questions about our standards of care, our team is happy to walk you through them.`}
          </p>
        </div>
      </_Element2>
      <_Element2 className={`mx-auto max-w-4xl px-6 pb-28 text-center`}>
        <div className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-10 py-14`}>
          <_Element3
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-6`}
            text={f ? `อยากรู้จักเรามากขึ้น?` : `Want to know more?`}
          />
          <div className={`flex flex-wrap justify-center gap-4`}>
            <_Element6
              to={`/services`}
              className={`rounded-full bg-kmc-secondary text-white px-7 py-3 font-medium hover:brightness-110 transition`}
            >
              {f ? `บริการของเรา` : `Our services`}
            </_Element6>
            <_Element6
              to={`/contact`}
              className={`rounded-full border border-kmc-secondary/30 text-kmc-secondary px-7 py-3 font-medium hover:bg-white/60 transition`}
            >
              {f ? `ติดต่อเรา` : `Contact us`}
            </_Element6>
          </div>
        </div>
      </_Element2>
    </div>
  );
}
export { f as default };
