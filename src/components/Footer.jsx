import { t as useTranslation } from "../vendor/i18n-CAiZPsdd.js";
import { n as Link } from "../vendor/react-SEPqUFC0.js";
import { d as h } from "../routes/usePageMeta.jsx";
import { jsxRuntime, je } from "../site.jsx";
export default function Footer() {
  let { t: e, i18n: t } = useTranslation(),
    n = new Date().getFullYear(),
    r = [
      {
        title: e(`footer.about`),
        to: `/about`,
      },
      {
        title: e(`footer.services`),
        to: `/services`,
      },
      {
        title: e(`footer.doctors`),
        to: `/doctors`,
        hidden: !0,
      },
      {
        title: e(`footer.packages`),
        to: `/packages`,
      },
      {
        title: e(`footer.blog`),
        to: `/blog`,
      },
      {
        title: e(`footer.contact`),
        to: `/contact`,
      },
      {
        title: e(`footer.faq`),
        to: `/faq`,
      },
      {
        title: e(`footer.careers`),
        to: `/about/careers`,
      },
    ].filter((e) => !e.hidden);
  return (
    <footer className={`bg-kmc-secondary text-white/80 mt-24`}>
      <div className={`mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4`}>
        <div>
          <img
            src={`/logo/KMCHospitalLogo.png`}
            alt={`KMC Hospital`}
            loading={`lazy`}
            decoding={`async`}
            className={`h-9 w-auto mb-3`}
          />
          <p className={`text-sm leading-relaxed text-white/60 max-w-xs`}>
            {`93 สุขาภิบาล 2 ซอย 27 แขวงดอกไม้ เขตประเวศ กรุงเทพมหานคร 10250 ·`}
            {` `}
            <a
              href={`tel:+6621094210`}
              className={`inline-block py-1 hover:text-white transition`}
            >{`02-109-4210`}</a>
          </p>
        </div>
        <div className={`grid grid-cols-2 gap-4 md:col-span-2`}>
          {r.map((e) => (
            <Link
              key={e.title}
              to={e.to}
              className={`inline-block py-1 text-sm hover:text-white transition`}
            >
              {e.title}
            </Link>
          ))}
        </div>
        <div className={`flex md:justify-end gap-4 items-start`}>
          {je.map((e) => (
            <span
              key={e.key}
              title={`${e.key}, coming soon`}
              className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:scale-110`}
            >
              <e.Icon />
              <span className={`sr-only`}>
                {e.key}
                {` (coming soon)`}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className={`border-t border-white/10 py-5 text-center text-xs text-white/50`}>
        {`© `}
        {n}
        {` KMC Hospital. `}
        {e(`footer.rights`)}
        {` ·`}
        {` `}
        <Link to={`/privacy`} className={`inline-block py-1 hover:text-white transition`}>
          {e(`footer.privacy`)}
        </Link>
        {` `}
        {`·`}
        {` `}
        <button
          type={`button`}
          onClick={h}
          className={`inline-block py-1 hover:text-white transition`}
        >
          {t.language === `th` ? `ตั้งค่าคุกกี้` : `Cookie settings`}
        </button>
        {` `}
        {`·`}
        {` `}
        <Link to={`/terms`} className={`inline-block py-1 hover:text-white transition`}>
          {e(`footer.terms`)}
        </Link>
      </div>
    </footer>
  );
}
