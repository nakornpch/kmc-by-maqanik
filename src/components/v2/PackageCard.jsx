import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import { At, Lt, jsxRuntime, Photo } from "../../site.jsx";
export default function PackageCard({ pkg: e, isTh: t }) {
  let n = t ? e.th : e.en,
    r = At.find((t) => t.key === e.category),
    i = Lt(e.key, t);
  return (
    <Link
      to={i ? `/packages/${e.key}` : `/packages`}
      className={`pkg-v2 card-lift group`}
    >
      {i?.photo && (
        <div className={`pkg-v2__media`}>
          <Photo
            name={i.photo}
            alt={``}
            sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw`}
            className={`pkg-v2__photo`}
          />
          {r && <span className={`pkg-v2__badge`}>{t ? r.th : r.en}</span>}
        </div>
      )}
      <div className={`pkg-v2__body`}>
        {!i?.photo && r && <span className={`pkg-v2__kicker`}>{t ? r.th : r.en}</span>}
        <h3 className={`pkg-v2__title`}>{n.name}</h3>
        <p className={`pkg-v2__desc`}>{n.desc}</p>
        <span className={`pkg-v2__cta`}>
          <span>{t ? `ดูรายละเอียด` : `Learn more`}</span>
          <span className={`pkg-v2__arrow`} aria-hidden={`true`}>
            <span>{`→`}</span>
          </span>
        </span>
      </div>
    </Link>
  );
}
