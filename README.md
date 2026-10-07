# KMC Hospital Local React Copy

Local copy of https://kmc-hospital.com/, recovered on 2026-10-05 for authorized design editing.

```sh
npm install
npm run dev -- --port 5173
```

Open http://localhost:5173/. Thai and English routes are supported.

## Editing

- `src/pages/HomePage.jsx`: homepage sections and layout (the original, kept for comparison).
- `src/pages/HomePageV2.jsx` + `src/components/v2/`: design copy of the homepage at `/home-v2` (and `/en/home-v2`). Edit these freely; `/` is unaffected. Scope new CSS under `.home-v2` in `custom.css` so it only applies to the copy.
- `src/pages/StrokeRehabV2.jsx` + `src/styles/stroke-rehab-v2.css`: the stroke rehabilitation page at `/services/stroke-rehab-v2`, styled after `/home-v2`. Its editable content (price table, case-review clips, gallery tabs) lives in `src/components/v2/strokeRehabContent.js`; set a clip's `src` there to replace its placeholder.
- `src/components/`: Hero, Header, Footer, P4Section, TeamSection, and other editable JSX components.
- `src/site.jsx`: shared content, package data, navigation, effects, and routing.
- `src/styles/custom.css`: put design overrides here.
- `src/styles/original.css`: original compiled Tailwind stylesheet, including its original breakpoints and design tokens.
- `src/styles/fonts.css`: original font families and unicode subsets served locally.
- `public/images`, `public/logo`, `public/media`, `public/fonts`: local assets.

Existing Tailwind classes retain their original appearance. For new styles, use `custom.css`; this project preserves the published utility CSS rather than generating new Tailwind utilities.

The recovered React 19.2.7, router, i18n, Motion, Anime.js, and GSAP libraries live in `src/vendor`. Vite maps standard `react`, `react/jsx-runtime`, and `react-dom/client` imports to the same runtime, so new components can use ordinary React imports and hooks.

## Deploying (Vercel)

Import the GitHub repository in Vercel; `vercel.json` sets the Vite build (`npm run build` → `dist`) and rewrites every route to `index.html` so direct links and refreshes on client-side routes work. No environment variables are needed for the public pages.

## Verification

```sh
npm run build
npm run compare:screenshots
```

`reference/screenshots` contains local/reference captures and pixel differences. `reference/verification.json` records the DOM and interaction checks. Screenshot comparisons synchronize the hero video frame and use reduced motion. The original canvas still contains randomly positioned particles, so its pixels naturally vary between loads.

## Provenance

This is reconstructed editable JSX from the public production modules, not the original unpublished repository. Original component names and project folder structure cannot be recovered exactly. Published markup, content, CSS, media, and application behavior are preserved.

`reference/asset-manifest.json` records downloaded files and SHA-256 hashes. Original downloaded modules remain under `public/assets` as a reference. Production tracking tags are not added to the local HTML, and the Google Analytics / Google tag code in `src/routes/usePageMeta.jsx` is replaced with no-op stubs (`public/consent-defaults.js` was removed). Remote backend services are not included.

`scripts/sync-original.mjs` refreshes public assets and font CSS. `scripts/recover-react.mjs` regenerates recovered JSX from those modules; rerunning it overwrites edits in the generated component and route files.
