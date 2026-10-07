// Stroke rehabilitation package prices in baht, by room type (rows) and care tier (columns).
export const strokeRehabPriceTable = {
  tiers: ["Basic", "Standard", "Rehab", "Rehab Plus"],
  rooms: [
    { th: "ห้องรวม", en: "Shared room", prices: [49000, 59000, 69000, 79000] },
    { th: "ห้องคู่", en: "Twin room", prices: [59000, 69000, 79000, 89000] },
    { th: "ห้องเดี่ยว", en: "Private room", prices: [69000, 79000, 99000, 109000] },
  ],
};

export const strokeRehabGallery = [
  { src: "/images/photos/physio/parallel-bars.webp", th: "กายภาพบำบัดและการฝึกเดิน", en: "Physiotherapy and walking practice" },
  { src: "/images/photos/physio/ot-puzzle.webp", th: "กิจกรรมบำบัด", en: "Occupational therapy" },
  { src: "/images/photos/physio/walker.webp", th: "ฝึกการเคลื่อนไหวด้วยอุปกรณ์ช่วยเดิน", en: "Movement with walking aids" },
  { src: "/images/services/stroke-rehab/1.jpg", th: "ทีมดูแลและครอบครัว", en: "Care team and family" },
  { src: "/images/services/stroke-rehab/2.jpg", th: "การดูแลระหว่างฟื้นฟู", en: "Care during rehabilitation" },
  { src: "/images/photos/physio/rehab-gym.webp", th: "พื้นที่กายภาพบำบัด", en: "Rehabilitation facilities" },
  { src: "/images/photos/sleep/room-wide.webp", th: "บรรยากาศห้องพัก", en: "A look inside the rooms" },
];

// Vertical (9:16) case-review clips for "เส้นทางการฟื้นฟู". Set `src` to the clip URL
// (e.g. "/media/stroke-rehab/case-1.mp4"); until then the poster shows with a placeholder.
export const strokeRehabCaseClips = [
  { src: null, poster: "/images/photos/physio/walker.webp", th: "จากเตียง สู่การลุกยืน", en: "From bed to standing" },
  { src: null, poster: "/images/photos/physio/parallel-bars.webp", th: "กลับมาเดินได้อีกครั้ง", en: "Walking again" },
  { src: null, poster: "/images/services/stroke-rehab/1.jpg", th: "กลับไปใช้ชีวิตที่บ้าน", en: "Back to life at home" },
];

// "เห็นภาพการดูแล" gallery, same layout as the /home-v2 accommodations: pick a category,
// its photos lay out in a bento grid (first one large). Five photos per category fill the grid.
const photo = (name) => `/images/photos/${name}.webp`;
export const strokeRehabGalleryTabs = [
  {
    key: "training", th: "ฝึกเดินและกายภาพ", en: "Walking & physio",
    photos: [
      { src: photo("physio/parallel-bars"), th: "กายภาพบำบัดและการฝึกเดิน", en: "Physiotherapy and walking practice" },
      { src: photo("physio/walking"), th: "ฝึกเดินกับนักกายภาพบำบัด", en: "Walking with a physiotherapist" },
      { src: photo("physio/balance"), th: "ฝึกการทรงตัว", en: "Balance training" },
      { src: photo("physio/shoulder-exercise"), th: "ฝึกการเคลื่อนไหวแขนและไหล่", en: "Arm and shoulder exercises" },
      { src: photo("physio/walker"), th: "ฝึกการเคลื่อนไหวด้วยอุปกรณ์ช่วยเดิน", en: "Movement with walking aids" },
    ],
  },
  {
    key: "spaces", th: "ห้องฟื้นฟูและอุปกรณ์", en: "Rehab rooms & equipment",
    photos: [
      { src: photo("physio/rehab-gym"), th: "พื้นที่กายภาพบำบัด", en: "Rehabilitation facilities" },
      { src: photo("physio/ot-room"), th: "ห้องกิจกรรมบำบัด", en: "The occupational therapy room" },
      { src: photo("physio/ot-puzzle"), th: "กิจกรรมบำบัด", en: "Occupational therapy" },
      { src: photo("physio/ot-toys"), th: "อุปกรณ์กิจกรรมบำบัด", en: "Occupational therapy tools" },
      { src: photo("physio/wheelchairs"), th: "รถเข็นและอุปกรณ์ช่วยเดิน", en: "Wheelchairs and walking aids" },
    ],
  },
  {
    key: "rooms", th: "ห้องพักฟื้น", en: "Recovery rooms",
    photos: [
      { src: "/images/facilities/patient-room-private.jpg", th: "ห้องพักเดี่ยว", en: "A private room" },
      { src: "/images/facilities/patient-room-shared.jpg", th: "ห้องพักรวม", en: "A shared room" },
      { src: photo("sleep/room-wide"), th: "บรรยากาศห้องพัก", en: "A look inside the rooms" },
      { src: photo("sleep/bathroom-rail"), th: "ห้องน้ำมีราวจับ", en: "A bathroom with grab rails" },
      { src: photo("sleep/amenities"), th: "ชุดของใช้ส่วนตัว", en: "Personal amenities" },
    ],
  },
  {
    key: "team", th: "ทีมดูแลและครอบครัว", en: "Care team & family",
    photos: [
      { src: "/images/services/stroke-rehab/1.jpg", th: "ทีมดูแลและครอบครัว", en: "Care team and family" },
      { src: photo("physio/team-care"), th: "ทีมสหวิชาชีพดูแลร่วมกัน", en: "The team caring together" },
      { src: "/images/services/stroke-rehab/2.jpg", th: "การดูแลระหว่างฟื้นฟู", en: "Care during rehabilitation" },
      { src: photo("sleep/nurse-chat"), th: "พยาบาลดูแลผู้ป่วย", en: "A nurse with a patient" },
      { src: photo("physio/shoulder-assess"), th: "ประเมินการเคลื่อนไหว", en: "A movement assessment" },
    ],
  },
];
