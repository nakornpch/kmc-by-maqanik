import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element5, u as n } from "../vendor/react-SEPqUFC0.js";
import { t as r } from "./usePageMeta.jsx";
import { a as i } from "../vendor/motion-CB540VaL.js";
import {
  C as a,
  b as o,
  d as s,
  g as c,
  h as _Element,
  l as _Element3,
  m as _Element4,
  y as _Element2,
} from "../site.jsx";
import _Element6 from "./NotFound.jsx";
var m = {
    "office-syndrome": {
      photo: `thai/neck`,
      th: {
        name: `Office Syndrome`,
        h1: `ปวดคอ บ่า ไหล่ จากการนั่งทำงานหน้าจอ ไม่ต้องทนอีกต่อไป`,
        meta: {
          title: `ปวดคอบ่าไหล่จากทำงานหน้าจอ — โปรแกรม Office Syndrome | KMC Hospital`,
          description: `ประเมินอาการ Office Syndrome ฟรีกับนักกายภาพบำบัด KMC Hospital พร้อมแผนกายภาพบำบัดและการป้องกันไม่ให้กลับมาเป็นซ้ำ`,
          keywords: [`ปวดคอบ่าไหล่`, `Office Syndrome`, `กายภาพบำบัดวัยทำงาน`, `ประเมินอาการฟรี`],
        },
        intro: `อาการปวดคอ บ่า ไหล่ หรือหลัง จากการนั่งทำงานหน้าจอนาน ๆ ไม่ได้หายไปเองด้วยการนวดครั้งเดียว โปรแกรม Office Syndrome ของ KMC Hospital ดูแลตั้งแต่หาสาเหตุ รักษา ไปจนถึงปรับท่าทางการทำงานเพื่อไม่ให้กลับมาเป็นซ้ำ`,
        painPoints: [
          `ปวดคอ บ่า ไหล่ ทุกเย็นหลังเลิกงาน และเป็นหนักขึ้นเรื่อย ๆ`,
          `มือชา นิ้วล็อก จากการใช้คีย์บอร์ดและมือถือต่อเนื่อง`,
          `นวดแล้วดีขึ้นแค่ไม่กี่วัน แล้วกลับมาปวดเหมือนเดิม`,
          `ปวดจนสมาธิในการทำงานลดลง หรือรบกวนการนอน`,
        ],
        packages: [
          `แพ็กเกจประเมิน + กายภาพบำบัด Office Syndrome (รายครั้ง/คอร์ส)`,
          `แพ็กเกจองค์กร Office Syndrome (สวัสดิการพนักงาน)`,
        ],
        services: [`office-syndrome`, `physiotherapy`, `thai-massage`, `chinese-medicine`],
        cta: {
          primary: {
            label: `จองประเมินอาการฟรี`,
            to: `/contact?service=office-syndrome#appointment`,
          },
          secondary: {
            label: `สอบถามผ่าน LINE`,
            href: a,
          },
        },
      },
      en: {
        name: `Office Syndrome`,
        h1: `Neck, shoulder and back pain from desk work: you don’t have to live with it`,
        meta: {
          title: `Desk-Work Neck & Shoulder Pain: Office Syndrome Program | KMC Hospital`,
          description: `A free office syndrome assessment with a KMC Hospital physiotherapist, plus a treatment plan and the changes that keep the pain from coming back.`,
          keywords: [
            `neck and shoulder pain`,
            `office syndrome`,
            `physiotherapy for desk workers`,
            `free assessment`,
          ],
        },
        intro: `Neck, shoulder or back pain from long hours at a screen doesn’t go away with a single massage. KMC Hospital’s Office Syndrome program works from finding the cause through treatment to fixing how you sit, so it stops coming back.`,
        painPoints: [
          `Neck and shoulder pain every evening after work, getting steadily worse`,
          `Numb hands or trigger finger from constant keyboard and phone use`,
          `A massage helps for a few days, then the pain returns unchanged`,
          `Pain bad enough to cost you concentration at work, or sleep at night`,
        ],
        packages: [
          `Office syndrome assessment + physiotherapy (per session / course)`,
          `Corporate office syndrome package (employee benefit)`,
        ],
        services: [`office-syndrome`, `physiotherapy`, `thai-massage`, `chinese-medicine`],
        cta: {
          primary: {
            label: `Book a free assessment`,
            to: `/contact?service=office-syndrome#appointment`,
          },
          secondary: {
            label: `Ask us on LINE`,
            href: a,
          },
        },
      },
    },
  },
  h = i();
function g() {
  let { slug: i } = n(),
    { i18n: a } = e(),
    g = a.language === `th`,
    _ = s({
      delayEach: 80,
    }),
    v = m[i],
    y = v ? (g ? v.th : v.en) : null;
  return (
    r({
      title: y ? y.name : g ? `ไม่พบหน้านี้` : `Page not found`,
      metaTitle: y?.meta?.title,
      description: y?.meta?.description,
      keywords: y?.meta?.keywords,
    }),
    v ? (
      <div>
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 py-24`}
        >
          {v.photo && (
            <h.Fragment>
              <_Element
                name={v.photo}
                alt={``}
                eager={!0}
                sizes={`100vw`}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
              <div className={`absolute inset-0 bg-fog-1/85`} />
            </h.Fragment>
          )}
          <div className={`relative mx-auto max-w-4xl px-6 text-center`}>
            <_Element2
              as={`h1`}
              className={`font-display text-3xl sm:text-5xl font-semibold text-kmc-secondary mb-6 leading-snug`}
              text={y.h1}
            />
            <p className={`text-lg text-kmc-secondary/70 max-w-2xl mx-auto mb-9`}>{y.intro}</p>
            <_Element3 primary={y.cta.primary} secondary={y.cta.secondary} />
          </div>
        </div>
        <_Element4 className={`mx-auto max-w-4xl px-6 py-16`}>
          <_Element2
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-8 text-center`}
            text={g ? `ถ้าคุณกำลังเจอแบบนี้อยู่` : `If any of this sounds familiar`}
          />
          <div ref={_} className={`grid sm:grid-cols-2 gap-4`}>
            {y.painPoints.map((e) => (
              <div
                key={e}
                className={`rounded-2xl border border-kmc-secondary/10 bg-white px-7 py-6 text-kmc-secondary/80 leading-relaxed`}
              >
                {e}
              </div>
            ))}
          </div>
        </_Element4>
        <_Element4 className={`bg-white/60 border-y border-kmc-secondary/10`}>
          <div className={`mx-auto max-w-4xl px-6 py-16 text-center`}>
            <_Element2
              as={`h2`}
              className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-8`}
              text={g ? `แพ็กเกจแนะนำ` : `Recommended packages`}
            />
            <div className={`flex flex-wrap justify-center gap-2.5`}>
              {y.packages.map((e) => (
                <_Element5
                  key={e}
                  to={`/packages`}
                  className={`rounded-full border border-kmc-secondary/20 bg-white px-5 py-2.5 text-sm font-medium text-kmc-secondary/80 hover:border-kmc-secondary/50 hover:text-kmc-secondary transition`}
                >
                  {e}
                </_Element5>
              ))}
            </div>
          </div>
        </_Element4>
        <_Element4 className={`mx-auto max-w-6xl px-6 py-16`}>
          <_Element2
            as={`h2`}
            className={`font-display text-2xl sm:text-3xl font-semibold text-kmc-secondary mb-8`}
            text={g ? `บริการที่เกี่ยวข้อง` : `The services behind it`}
          />
          <div className={`grid sm:grid-cols-2 gap-5`}>
            {y.services.map((e) => {
              let n = o[e];
              if (!n) return null;
              let r = g ? n.th : n.en;
              return (
                <_Element5
                  key={e}
                  to={`/services/${e}`}
                  className={`flex items-center gap-5 rounded-2xl border border-kmc-secondary/10 bg-white p-4 hover:shadow-xl hover:shadow-kmc-primary/15 hover:-translate-y-1 transition-all`}
                >
                  {c(n.images?.[0]) && (
                    <div className={`shrink-0 w-24 h-24 rounded-xl overflow-hidden`}>
                      <_Element
                        name={c(n.images[0])}
                        alt={``}
                        sizes={`96px`}
                        className={`w-full h-full object-cover`}
                      />
                    </div>
                  )}
                  <div>
                    <p className={`font-display text-lg font-medium text-kmc-secondary mb-1`}>
                      {r.name}
                    </p>
                    <p className={`text-sm text-kmc-secondary/70 leading-relaxed`}>{r.tagline}</p>
                  </div>
                </_Element5>
              );
            })}
          </div>
        </_Element4>
        <_Element4 className={`mx-auto max-w-4xl px-6 pb-24`}>
          <div
            className={`rounded-3xl bg-gradient-to-br from-fog-1 via-fog-2 to-fog-3 px-8 py-14 text-center`}
          >
            <h2 className={`font-display text-2xl font-semibold text-kmc-secondary mb-3`}>
              {g ? `เริ่มจากการประเมินอาการ` : `Start with an assessment`}
            </h2>
            <p className={`text-kmc-secondary/60 mb-8 max-w-lg mx-auto`}>
              {g
                ? `ทีมงานจะประเมินและแนะนำแผนการดูแลที่เหมาะกับอาการของคุณ ก่อนตัดสินใจเริ่มโปรแกรม`
                : `Our team will assess you and recommend a plan that fits your symptoms, before you commit to anything.`}
            </p>
            <_Element3 primary={y.cta.primary} secondary={y.cta.secondary} />
          </div>
        </_Element4>
      </div>
    ) : (
      <_Element6 />
    )
  );
}
export { g as default };
