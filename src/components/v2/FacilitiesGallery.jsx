// "Accommodations" for /home-v2 as a photo gallery by category: pick a
// category from the tabs and its photos lay out in a light bento grid (the
// first one large). Any photo opens a full-screen viewer. Captions describe
// what is in each photo.
import { useEffect, useRef, useState } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { RevealSection, AnimatedHeading, facilityPhotos } from "../../site.jsx";
import SwipeRow from "./SwipeRow.jsx";

const photo = (name) => `/images/photos/${name}.webp`;
const facility = (file) => facilityPhotos.find((p) => p.src.endsWith(file));

function categories() {
  const room = facility(`patient-room-private.jpg`);
  const shared = facility(`patient-room-shared.jpg`);
  const pool = facility(`hydrotherapy-pool.jpg`);
  return [
    {
      key: `spaces`,
      th: `อาคารและพื้นที่`,
      en: `Building & spaces`,
      photos: [
        { src: `/images/home/hospital-front.jpg`, th: `อาคาร KMC Hospital`, en: `The KMC Hospital building` },
        { src: photo(`hospital/reception`), th: `เคาน์เตอร์ต้อนรับ`, en: `The reception counter` },
        { src: photo(`chinese/consult-room`), th: `ห้องตรวจ`, en: `A consultation room` },
        { src: `/images/facilities/accessibility.jpg`, th: `ห้องน้ำมีราวจับ`, en: `A bathroom with grab rails` },
        { src: photo(`physio/wheelchairs`), th: `รถเข็นและอุปกรณ์ช่วยเดิน`, en: `Wheelchairs and walking aids` },
      ],
    },
    {
      key: `rooms`,
      th: `ห้องพัก`,
      en: `Patient rooms`,
      photos: [
        { src: room.src, th: room.th, en: room.en },
        { src: shared.src, th: shared.th, en: shared.en },
        { src: photo(`sleep/room-wide`), th: `ห้องพักผู้ป่วย`, en: `A patient room` },
        { src: photo(`sleep/room`), th: `ห้องพักผู้ป่วย`, en: `A patient room` },
        { src: photo(`sleep/amenities`), th: `ชุดของใช้ส่วนตัว`, en: `Personal amenities` },
      ],
    },
    {
      key: `activity`,
      th: `ห้องทำกิจกรรม`,
      en: `Activity rooms`,
      photos: [
        { src: pool.src, th: pool.th, en: pool.en },
        { src: photo(`hydro/group-class`), th: `คลาสออกกำลังกายในน้ำ`, en: `A group class in the pool` },
        { src: photo(`physio/gym-wide`), th: `ห้องกายภาพบำบัด`, en: `The physiotherapy room` },
        { src: photo(`physio/ot-room`), th: `ห้องกิจกรรมบำบัด`, en: `The occupational therapy room` },
        { src: photo(`physio/treatment-room`), th: `ห้องทำกายภาพ`, en: `A treatment room` },
      ],
    },
    {
      key: `team`,
      th: `ทีมแพทย์และสหวิชาชีพ`,
      en: `Doctors & care team`,
      photos: [
        {
          src: photo(`physio/team-care`),
          th: `ทีมสหวิชาชีพดูแลผู้รับบริการร่วมกัน`,
          en: `The team caring for a patient together`,
        },
        { src: photo(`chinese/doctor-smile`), th: `แพทย์ให้คำปรึกษา`, en: `A doctor with a patient` },
        { src: photo(`sleep/nurse-couple`), th: `พยาบาลดูแลผู้รับบริการ`, en: `A nurse with patients` },
        { src: photo(`thai/assessment`), th: `ประเมินอาการ`, en: `An assessment` },
        { src: photo(`hospital/health-measure`), th: `ทีมตรวจสุขภาพ`, en: `The health check team` },
      ],
    },
  ];
}

function Arrow({ dir }) {
  return (
    <svg viewBox={`0 0 24 24`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.75`} aria-hidden={`true`}>
      <path d={dir < 0 ? `M15 5l-7 7 7 7` : `M9 5l7 7-7 7`} strokeLinecap={`round`} strokeLinejoin={`round`} />
    </svg>
  );
}

export default function FacilitiesGallery() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const cats = categories();
  const [catIndex, setCatIndex] = useState(0);
  const [viewing, setViewing] = useState(-1); // index of the photo open full screen, or -1
  const cat = cats[catIndex];
  const count = cat.photos.length;
  const label = (p) => (isTh ? p.th : p.en);
  const pad = (n) => String(n).padStart(2, `0`);
  const go = (d) => setViewing((i) => (i + d + count) % count);

  // full-screen viewer: a native <dialog> in the top layer (Esc and focus return come built in)
  const dialogRef = useRef(null);
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const open = viewing > -1;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    if (!open) return;
    function onKey(e) {
      if (e.key === `ArrowRight`) go(1);
      if (e.key === `ArrowLeft`) go(-1);
    }
    window.addEventListener(`keydown`, onKey);
    return () => window.removeEventListener(`keydown`, onKey);
  }, [viewing > -1]);
  const shown = viewing > -1 ? cat.photos[viewing] : null;

  return (
    <RevealSection className={`gal`}>
      <div className={`mx-auto max-w-6xl px-6 gal__wrap`}>
        <div className={`gal__head`}>
          <AnimatedHeading
            as={`h2`}
            className={`font-display text-3xl font-semibold text-kmc-secondary`}
            text={isTh ? `สิ่งอำนวยความสะดวก` : `Accommodations`}
          />
          <Link to={`/facilities`} className={`gal__more`}>
            {isTh ? `ดูรายละเอียด` : `See details`}
            <span aria-hidden={`true`}>{`→`}</span>
          </Link>
        </div>

        <SwipeRow className={`gal__tabs`} isTh={isTh} role={`tablist`} aria-label={isTh ? `หมวดหมู่` : `Categories`}>
          {cats.map((c, i) => (
            <button
              key={c.key}
              type={`button`}
              role={`tab`}
              id={`gal-tab-${c.key}`}
              aria-selected={catIndex === i}
              aria-controls={`gal-panel`}
              className={`gal__tab ${catIndex === i ? `is-active` : ``}`}
              onClick={() => setCatIndex(i)}
            >
              {isTh ? c.th : c.en}
            </button>
          ))}
        </SwipeRow>

        {/* keyed so the photos re-animate in for every category */}
        <ul
          key={cat.key}
          id={`gal-panel`}
          role={`tabpanel`}
          aria-labelledby={`gal-tab-${cat.key}`}
          className={`gal__grid`}
        >
          {cat.photos.map((p, i) => (
            <li key={p.src} style={{ "--i": i }}>
              <button
                type={`button`}
                className={`gal__item`}
                onClick={() => setViewing(i)}
                aria-label={`${label(p)}: ${isTh ? `ดูภาพเต็มจอ` : `view full screen`}`}
              >
                <img src={p.src} alt={``} loading={`lazy`} decoding={`async`} />
                <span className={`gal__caption`}>{label(p)}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className={`gal-lb`}
        aria-label={shown ? label(shown) : undefined}
        onClose={() => setViewing(-1)}
        onClick={(e) => e.target === e.currentTarget && setViewing(-1)}
      >
        {shown && (
          <>
            <img src={shown.src} alt={label(shown)} />
            <p className={`gal-lb__caption`}>
              <span className={`font-display`}>
                {pad(viewing + 1)} / {pad(count)}
              </span>
              {label(shown)}
            </p>
          </>
        )}
        <button
          type={`button`}
          className={`gal-lb__close`}
          onClick={() => setViewing(-1)}
          aria-label={isTh ? `ปิด` : `Close`}
        >
          <svg viewBox={`0 0 24 24`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.75`} aria-hidden={`true`}>
            <path d={`M6 6l12 12M18 6 6 18`} strokeLinecap={`round`} />
          </svg>
        </button>
        <button
          type={`button`}
          className={`gal-lb__nav is-prev`}
          onClick={() => go(-1)}
          aria-label={isTh ? `ภาพก่อนหน้า` : `Previous photo`}
        >
          <Arrow dir={-1} />
        </button>
        <button
          type={`button`}
          className={`gal-lb__nav is-next`}
          onClick={() => go(1)}
          aria-label={isTh ? `ภาพถัดไป` : `Next photo`}
        >
          <Arrow dir={1} />
        </button>
      </dialog>
    </RevealSection>
  );
}
