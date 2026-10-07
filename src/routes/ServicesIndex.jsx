import { t as e } from "../vendor/i18n-CAiZPsdd.js";
import { n as _Element2 } from "../vendor/react-SEPqUFC0.js";
import { a as n } from "../vendor/motion-CB540VaL.js";
import { b as r, d as i, g as a, h as _Element3, p as _Element, x as c } from "../site.jsx";
var l = n();
function u() {
  let { i18n: n } = e(),
    u = n.language === `th`,
    d = i({
      delayEach: 70,
    });
  return (
    <div>
      <_Element
        title={u ? `บริการ` : `Services`}
        subtitle={
          u
            ? `บริการดูแลสุขภาพครบวงจร ตั้งแต่ตรวจสุขภาพ กายภาพบำบัด ถึงการดูแลและฟื้นฟูผู้สูงอายุ`
            : `Full-spectrum care, from health screening and physical therapy to elderly rehabilitation.`
        }
        image={`physio/gym-wide`}
        imageAlt={u ? `ห้องทำกายภาพบำบัดของโรงพยาบาล` : `The hospital physiotherapy room`}
      />
      <div className={`mx-auto max-w-6xl px-6 py-16 flex flex-col gap-14`}>
        {c.map((e) => (
          <div key={e.key}>
            <h2 className={`font-display text-2xl font-semibold text-kmc-secondary mb-6`}>
              {u ? e.th : e.en}
            </h2>
            <div ref={d} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {e.slugs.map((e) => {
                let n = r[e];
                if (!n) return null;
                let i = u ? n.th : n.en,
                  s = a(n.images?.[0]);
                return (
                  <_Element2
                    key={e}
                    to={`/services/${e}`}
                    className={`group flex flex-col rounded-2xl bg-white border border-kmc-secondary/10 overflow-hidden hover:shadow-xl hover:shadow-kmc-primary/20 hover:-translate-y-1 transition-all`}
                  >
                    {s && (
                      <div className={`aspect-[16/10] overflow-hidden`}>
                        <_Element3
                          name={s}
                          alt={``}
                          sizes={`(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                        />
                      </div>
                    )}
                    <div className={`p-7 flex-1 flex flex-col`}>
                      <p className={`font-display text-xl font-medium text-kmc-secondary mb-2`}>
                        {i.name}
                      </p>
                      <p className={`text-sm text-kmc-secondary/70 mb-4 flex-1`}>{i.tagline}</p>
                      <span className={`text-kmc-primary-deep text-sm font-medium`}>
                        {u ? `ดูรายละเอียด →` : `View details →`}
                      </span>
                    </div>
                  </_Element2>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { u as default };
