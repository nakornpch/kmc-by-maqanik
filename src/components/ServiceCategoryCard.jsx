import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { services, jsxRuntime, servicePhotos, Photo, ServiceIcon } from "../site.jsx";
export default function ServiceCategoryCard({ group: e, isTh: t }) {
  let n = e.slugs
    .map((e) => services[e])
    .filter(Boolean)
    .slice(0, 3)
    .map((e) => (t ? e.th.name : e.en.name))
    .join(` · `);
  return (
    <Link
      to={`/services`}
      className={`card-lift group relative overflow-hidden rounded-2xl bg-white border border-kmc-secondary/10`}
    >
      {servicePhotos[e.key] && (
        <div className={`aspect-[4/3] overflow-hidden`}>
          <Photo
            name={servicePhotos[e.key]}
            alt={``}
            sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw`}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
          />
        </div>
      )}
      <div className={`card-fog`} aria-hidden={`true`} />
      <div className={`relative px-8 pb-8`}>
        <div
          className={`-mt-7 w-14 h-14 rounded-xl bg-fog-1 text-kmc-primary-deep flex items-center justify-center mb-5 shadow-md ring-4 ring-white transition-colors duration-300 group-hover:bg-kmc-secondary group-hover:text-white`}
        >
          <ServiceIcon category={e.key} />
        </div>
        <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
          {t ? e.th : e.en}
        </h3>
        <p className={`text-sm text-kmc-secondary/75`}>{n}</p>
      </div>
    </Link>
  );
}
