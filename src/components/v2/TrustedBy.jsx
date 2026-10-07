// "Trusted by" strip for /home-v2: corporate clients and government agencies
// that have used KMC's services, as two slow, opposite-moving logo rows.
//
// The logos below are MOCK placeholders. To use real ones, give an entry a
// `src` (e.g. `/images/clients/acme.svg`, ideally a single-colour SVG or a PNG
// on a transparent background) and its `name`; entries without `src` render
// the placeholder mark.
import { t as useTranslation } from "../../vendor/i18n-CAiZPsdd.js";
import { RevealSection } from "../../site.jsx";

const rows = [
  {
    key: `corporate`,
    logos: [
      { name: `Corporate client 1`, mark: `circle`, word: `logoipsum` },
      { name: `Corporate client 2`, mark: `square`, word: `LOGOIPSUM` },
      { name: `Corporate client 3`, mark: `bars`, word: `logo·ipsum` },
      { name: `Corporate client 4`, mark: `triangle`, word: `Logoipsum` },
      { name: `Corporate client 5`, mark: `hex`, word: `logoipsum` },
      { name: `Corporate client 6`, mark: `ring`, word: `LOGO IPSUM` },
      { name: `Corporate client 7`, mark: `leaf`, word: `logoipsum` },
    ],
  },
  {
    key: `government`,
    logos: [
      { name: `Government agency 1`, mark: `seal`, word: `logoipsum` },
      { name: `Government agency 2`, mark: `shield`, word: `LOGOIPSUM` },
      { name: `Government agency 3`, mark: `seal`, word: `Logo Ipsum` },
      { name: `Government agency 4`, mark: `shield`, word: `logoipsum` },
      { name: `Government agency 5`, mark: `seal`, word: `LOGO·IPSUM` },
      { name: `Government agency 6`, mark: `shield`, word: `Logoipsum` },
    ],
  },
];

const marks = {
  circle: <circle cx={`16`} cy={`16`} r={`11`} />,
  square: <rect x={`5`} y={`5`} width={`22`} height={`22`} rx={`6`} />,
  bars: (
    <>
      <rect x={`5`} y={`6`} width={`6`} height={`20`} rx={`2`} />
      <rect x={`13`} y={`11`} width={`6`} height={`15`} rx={`2`} />
      <rect x={`21`} y={`3`} width={`6`} height={`23`} rx={`2`} />
    </>
  ),
  triangle: <path d={`M16 4 28 26H4Z`} />,
  hex: <path d={`m16 3 11 6.5v13L16 29 5 22.5v-13Z`} />,
  ring: <path fillRule={`evenodd`} d={`M16 4a12 12 0 1 1 0 24 12 12 0 0 1 0-24Zm0 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z`} />,
  leaf: <path d={`M5 27C5 13 13 5 27 5c0 14-8 22-22 22Z`} />,
  seal: (
    <>
      <circle cx={`16`} cy={`16`} r={`13`} fill={`none`} stroke={`currentColor`} strokeWidth={`2`} />
      <circle cx={`16`} cy={`16`} r={`8.5`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.5`} strokeDasharray={`2 2`} />
      <path d={`m16 10 1.8 3.7 4 .6-2.9 2.8.7 4L16 19.2l-3.6 1.9.7-4-2.9-2.8 4-.6Z`} />
    </>
  ),
  shield: <path d={`M16 3 27 7v8c0 7-4.6 12-11 14C9.6 27 5 22 5 15V7Z`} />,
};

function Logo({ logo }) {
  if (logo.src) {
    return <img src={logo.src} alt={logo.name} loading={`lazy`} decoding={`async`} className={`trusted__img`} />;
  }
  return (
    <span className={`trusted__mock`} role={`img`} aria-label={logo.name}>
      <svg viewBox={`0 0 32 32`} fill={`currentColor`} aria-hidden={`true`}>
        {marks[logo.mark]}
      </svg>
      <span>{logo.word}</span>
    </span>
  );
}

export default function TrustedBy() {
  const { i18n } = useTranslation();
  const isTh = i18n.language === `th`;
  return (
    <RevealSection className={`trusted`} aria-labelledby={`trusted-title`}>
      <div className={`mx-auto max-w-6xl px-6`}>
        <p id={`trusted-title`} className={`trusted__title font-display`}>
          {isTh ? `ได้รับความไว้วางใจจาก` : `Trusted by`}
        </p>
      </div>
      <div className={`trusted__rows`}>
        {rows.map((row, r) => (
          <div key={row.key} className={`trusted__row`}>
            <div className={`trusted__viewport`}>
              {/* the list is rendered twice so the loop is seamless; the copy is hidden from assistive tech */}
              <div className={`trusted__track ${r % 2 ? `is-reverse` : ``}`}>
                {[0, 1].map((copy) => (
                  <ul key={copy} className={`trusted__list`} aria-hidden={copy === 1 || undefined}>
                    {row.logos.map((logo) => (
                      <li key={logo.name}>
                        <Logo logo={logo} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
