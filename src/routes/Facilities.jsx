import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { a as t } from "../vendor/motion-CB540VaL.js";
import { h as _Element3, m as _Element2, p as _Element } from "../site.jsx";
var a = t(),
  o = [
    {
      th: `ห้องพักผู้ป่วยเดี่ยว`,
      en: `Private Patient Room`,
      image: `/images/facilities/patient-room-private.jpg`,
    },
    {
      th: `ห้องพักผู้ป่วยรวม`,
      en: `Shared Patient Room`,
      image: `/images/facilities/patient-room-shared.jpg`,
    },
    {
      th: `พื้นที่บำบัดรักษา`,
      en: `Therapy Areas`,
      image: `/images/facilities/therapy-area.jpg`,
    },
    {
      th: `สระธาราบำบัด`,
      en: `Hydrotherapy Pool`,
      image: `/images/facilities/hydrotherapy-pool.jpg`,
    },
    {
      th: `อุปกรณ์ฟื้นฟูสมรรถภาพ`,
      en: `Rehabilitation Equipment`,
      image: `/images/facilities/equipment.jpg`,
    },
    {
      th: `ความปลอดภัยและการเข้าถึง`,
      en: `Safety & Accessibility`,
      image: `/images/facilities/accessibility.jpg`,
    },
    {
      th: `ห้องพักพร้อมตรวจการนอนหลับ`,
      en: `Sleep Study Room`,
      photo: `sleep/room-bed`,
    },
    {
      th: `ห้องฟื้นฟูและฝึกเดิน`,
      en: `Rehabilitation Gym`,
      photo: `physio/rehab-gym`,
    },
    {
      th: `ห้องกิจกรรมบำบัด`,
      en: `Occupational Therapy Room`,
      photo: `physio/ot-room`,
    },
    {
      th: `ห้องตรวจแพทย์แผนจีน`,
      en: `Chinese Medicine Clinic`,
      photo: `chinese/consult-room`,
    },
    {
      th: `รถเข็นและอุปกรณ์ช่วยเดิน`,
      en: `Wheelchairs & Walking Aids`,
      photo: `physio/wheelchairs`,
    },
    {
      th: `ห้องทำกายภาพบำบัด`,
      en: `Treatment Room`,
      photo: `physio/gym-wide`,
    },
  ];
function s() {
  let { i18n: t } = e(),
    s = t.language === `th`;
  return (
    <div>
      <_Element
        title={s ? `สิ่งอำนวยความสะดวก` : `Facilities`}
        subtitle={
          s
            ? `พื้นที่ที่ออกแบบเพื่อความปลอดภัยและความสบายใจ`
            : `Spaces designed for safety and peace of mind.`
        }
        image={`hydro/pool-lift`}
        imageAlt={
          s ? `สระธาราบำบัดพร้อมเก้าอี้ยกลงสระ` : `The hydrotherapy pool with its patient lift`
        }
      />
      <_Element2
        className={`mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {o.map((e) =>
          e.photo ? (
            <div key={e.en} className={`relative aspect-square rounded-2xl overflow-hidden`}>
              <_Element3
                name={e.photo}
                alt={s ? e.th : e.en}
                sizes={`(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-kmc-secondary/80 via-kmc-secondary/10 to-transparent`}
              />
              <p
                className={`absolute bottom-4 left-4 right-4 font-display text-sm font-medium text-white`}
              >
                {s ? e.th : e.en}
              </p>
            </div>
          ) : e.image ? (
            <div key={e.en} className={`relative aspect-square rounded-2xl overflow-hidden`}>
              <img
                src={e.image}
                alt={s ? e.th : e.en}
                loading={`lazy`}
                decoding={`async`}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-kmc-secondary/80 via-kmc-secondary/10 to-transparent`}
              />
              <p
                className={`absolute bottom-4 left-4 right-4 font-display text-sm font-medium text-white`}
              >
                {s ? e.th : e.en}
              </p>
            </div>
          ) : (
            <div
              key={e.en}
              className={`aspect-square rounded-2xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 flex items-center justify-center text-center p-4 text-kmc-secondary/60 font-display text-sm`}
            >
              {s ? e.th : e.en}
            </div>
          ),
        )}
      </_Element2>
    </div>
  );
}
export { s as default };
