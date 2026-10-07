// "Our core services" for /home-v2: the original four category cards, on a
// white band (so it doesn't merge with the tinted picker above), with two
// touches: the card tilts towards the pointer under a soft glare, and on hover
// it turns into a menu of the group's full list of services, each a direct link.
import { useRef } from "react";
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../../vendor/react-SEPqUFC0.js";
import {
  useStaggerReveal,
  RevealSection,
  AnimatedHeading,
  serviceGroups,
  services,
  servicePhotos,
  Photo,
  ServiceIcon,
} from "../../site.jsx";

function ServiceCard({ group, isTh }) {
  const ref = useRef(null);
  const items = group.slugs.map((slug) => [slug, services[slug]]).filter(([, s]) => s);
  const summary = items
    .slice(0, 3)
    .map(([, s]) => (isTh ? s.th.name : s.en.name))
    .join(` · `);

  function tilt(e) {
    const el = ref.current;
    if (!el || e.pointerType !== `mouse` || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty(`--rx`, `${(0.5 - y) * 8}deg`);
    el.style.setProperty(`--ry`, `${(x - 0.5) * 10}deg`);
    el.style.setProperty(`--gx`, `${x * 100}%`);
    el.style.setProperty(`--gy`, `${y * 100}%`);
  }
  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty(`--rx`, `0deg`);
    el.style.setProperty(`--ry`, `0deg`);
  }

  return (
    // the wrapper takes the stagger-in animation, the card inside takes the tilt
    <div className={`svc-card-wrap`}>
      <div ref={ref} className={`svc-card group`} onPointerMove={tilt} onPointerLeave={reset}>
        <div className={`svc-card__photo`}>
          {servicePhotos[group.key] && (
            <Photo
              name={servicePhotos[group.key]}
              alt={``}
              sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw`}
            />
          )}
        </div>
        <div className={`card-fog`} aria-hidden={`true`} />
        <div className={`svc-card__body px-8 pb-8`}>
          <div
            className={`svc-card__icon -mt-7 w-14 h-14 rounded-xl bg-fog-1 text-kmc-primary-deep flex items-center justify-center mb-5 shadow-md ring-4 ring-white transition-colors duration-300 group-hover:bg-kmc-secondary group-hover:text-white`}
          >
            <ServiceIcon category={group.key} />
          </div>
          <h3 className={`font-display text-lg font-medium text-kmc-secondary mb-2`}>
            {/* stretched link: the whole card still goes to /services */}
            <Link to={`/services`} className={`svc-card__link`}>
              {isTh ? group.th : group.en}
            </Link>
          </h3>
          <p className={`text-sm text-kmc-secondary/75`}>{summary}</p>
        </div>
        {/* hover / keyboard focus turns the card into the group's full service menu */}
        <div className={`svc-card__menu`}>
          <p className={`svc-card__menutitle font-display`} aria-hidden={`true`}>{isTh ? group.th : group.en}</p>
          <ul className={`svc-card__list`}>
            {items.map(([slug, s]) => (
              <li key={slug}>
                <Link to={`/services/${slug}`}>
                  {isTh ? s.th.name : s.en.name}
                  <span aria-hidden={`true`}>{`→`}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span className={`svc-card__glare`} aria-hidden={`true`} />
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  const { t: tr, i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  const listRef = useStaggerReveal({ delayEach: 90 });

  return (
    <RevealSection className={`svc`}>
      <div className={`mx-auto max-w-6xl px-6 py-20`}>
        <AnimatedHeading
          as={`h2`}
          className={`font-display text-3xl font-semibold text-kmc-secondary mb-10 text-center`}
          text={tr(`servicesOverview.title`)}
        />
        <div ref={listRef} className={`svc__grid`}>
          {serviceGroups.map((g) => (
            <ServiceCard key={g.key} group={g} isTh={isTh} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
