import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { At, Lt, jsxRuntime, Photo } from "../site.jsx";
export default function PackageCard({ pkg: e, isTh: t }) {
  let n = t ? e.th : e.en,
    r = At.find((t) => t.key === e.category),
    i = Lt(e.key, t);
  return (
    <Link
      to={i ? `/packages/${e.key}` : `/packages`}
      className={`card-lift group flex flex-col rounded-2xl bg-white border border-kmc-secondary/10 overflow-hidden hover:border-kmc-primary-deep/40`}
    >
      {i?.photo && (
        <div className={`aspect-[4/3] overflow-hidden`}>
          <Photo
            name={i.photo}
            alt={``}
            sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw`}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col p-7`}>
        {r && (
          <span
            className={`text-xs uppercase tracking-[0.2em] text-kmc-primary-deep font-medium mb-3`}
          >
            {t ? r.th : r.en}
          </span>
        )}
        <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>{n.name}</h3>
        <p className={`text-sm text-kmc-secondary/75 leading-relaxed flex-1`}>{n.desc}</p>
        <span
          className={`mt-5 inline-flex items-center gap-1 text-sm font-medium text-kmc-secondary group-hover:gap-2 transition-all`}
        >
          {t ? `ดูรายละเอียด` : `Learn more`}
          <span aria-hidden={`true`}>{`→`}</span>
        </span>
      </div>
    </Link>
  );
}
