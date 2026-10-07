import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t, t as n } from "../vendor/i18n-CAiZPsdd.js";
import { c as r } from "../vendor/react-SEPqUFC0.js";
var i = e(t(), 1),
  a = [`th`, `en`],
  o = `/en`;
function s(e = `/`) {
  return e === o || e.startsWith(`${o}/`) ? `en` : `th`;
}
function c(e) {
  return e === `en` ? o : ``;
}
function l(e, t) {
  return t === `en` ? (e === `/` ? o : `${o}${e}`) : e;
}
var u = `kmc-cookie-consent`,
  d = 2,
  f = `granted`,
  p = `denied`,
  m = `unset`,
  h = new Set();
function g() {
  try {
    return JSON.parse(localStorage.getItem(u) || `null`);
  } catch {
    return null;
  }
}
function _() {
  if (typeof window > `u`) return m;
  let e = g();
  return !e || e.version !== d ? m : e.analytics === `granted` ? f : p;
}
function v(e) {
  let t = e === `granted` ? f : p;
  try {
    localStorage.setItem(
      u,
      JSON.stringify({
        version: d,
        analytics: t,
        at: new Date().toISOString(),
      }),
    );
  } catch {}
  return (h.forEach((e) => e(t)), t);
}
function y() {
  try {
    localStorage.removeItem(u);
  } catch {}
  h.forEach((e) => e(m));
}
function b(e) {
  return (h.add(e), () => h.delete(e));
}
// Google Analytics / Google tag removed from this design copy: nothing is
// loaded from googletagmanager.com and no tracking events are sent. The
// functions below keep their names because other modules import them.
var O = !1;
function P() {}
function F() {}
function I() {}
function L() {}
var R = /^\/(en\/)?contact\/?$/;
function z(e) {
  let t = e.getAttribute(`href`) || ``;
  if (t.startsWith(`tel:`)) return t.replace(/\D/g, ``).length <= 5 ? null : `phone`;
  if (t.startsWith(`mailto:`)) return `email`;
  try {
    let e = new URL(t, window.location.href);
    if (/(^|\.)(line\.me|lin\.ee)$/.test(e.hostname)) return `line`;
    if (e.origin === window.location.origin && R.test(e.pathname)) return `appointment`;
  } catch {}
  return null;
}
function B(e) {
  let t = e.closest(`[data-cta-placement]`);
  return t
    ? t.getAttribute(`data-cta-placement`)
    : e.closest(`header, nav`)
      ? `header`
      : e.closest(`footer`)
        ? `footer`
        : `content`;
}
function V(e) {
  return (
    e.getAttribute(`data-cta-label`) ||
    e.textContent.replace(/\s+/g, ` `).trim() ||
    e.getAttribute(`aria-label`) ||
    e.getAttribute(`href`)
  ).slice(0, 100);
}
function H(e) {
  if (!e?.matches?.(`a[href]`)) return null;
  let t = z(e) || (e.hasAttribute(`data-cta`) ? `other` : null);
  return t
    ? {
        cta_channel: t,
        cta_label: V(e),
        cta_placement: B(e),
      }
    : null;
}
function U(e) {
  let t = H(e.target instanceof Element ? e.target.closest(`a[href]`) : null);
  t && L(`cta_click`, t);
}
function W() {
  N || typeof document > `u` || ((N = !0), document.addEventListener(`click`, U, !0));
}
var G = `KMC Hospital`,
  K = `https://kmc-hospital.com`.replace(/\/$/, ``);
function q(e, t, n) {
  let r = document.head.querySelector(`meta[${e}="${t}"]`);
  (r || ((r = document.createElement(`meta`)), r.setAttribute(e, t), document.head.appendChild(r)),
    r.setAttribute(`content`, n));
}
function J(e, t) {
  document.head.querySelector(`meta[${e}="${t}"]`)?.remove();
}
function Y(e) {
  document.head.querySelectorAll(`link[rel="alternate"][hreflang]`).forEach((e) => e.remove());
  for (let [t, n] of e) {
    let e = document.createElement(`link`);
    (e.setAttribute(`rel`, `alternate`),
      e.setAttribute(`hreflang`, t),
      e.setAttribute(`href`, n),
      document.head.appendChild(e));
  }
}
function X(e) {
  let t = document.head.querySelector(`link[rel="canonical"]`);
  (t ||
    ((t = document.createElement(`link`)),
    t.setAttribute(`rel`, `canonical`),
    document.head.appendChild(t)),
    t.setAttribute(`href`, e));
}
function Z({
  title: e,
  metaTitle: t,
  description: o,
  keywords: s,
  noindex: c = !1,
  contentLocale: u = null,
} = {}) {
  let { i18n: d } = n(),
    { pathname: f, search: p } = r(),
    m = Array.isArray(s) ? s.join(`, `) : s;
  (0, i.useEffect)(() => {
    let n = d.language === `th`,
      r = t || (e ? `${e} · ${G}` : G),
      i =
        o ||
        (n
          ? `โรงพยาบาลชุมชนครบวงจร ภายใต้เครือ KMC Health ดูแลโดยทีมสหวิชาชีพตลอด 24 ชั่วโมง`
          : `A full-service community hospital under KMC Health Group, multidisciplinary care, 24 hours a day.`);
    ((document.title = r),
      q(`name`, `description`, i),
      q(`property`, `og:title`, r),
      q(`property`, `og:description`, i));
    let s = d.language,
      h = (e) => K + l(f, e) + p,
      g = !u || u === s,
      _ = h(g ? s : u);
    (q(`property`, `og:url`, _),
      q(`property`, `og:locale`, s === `th` ? `th_TH` : `en_US`),
      X(_),
      Y(u ? [] : [...a.map((e) => [e, h(e)]), [`x-default`, h(`th`)]]),
      m ? q(`name`, `keywords`, m) : J(`name`, `keywords`),
      c || !g ? q(`name`, `robots`, `noindex, follow`) : J(`name`, `robots`),
      I(l(f, s) + p, r));
  }, [e, t, o, m, c, u, f, p, d.language]);
}
export {
  L as a,
  m as c,
  y as d,
  v as f,
  l as g,
  s as h,
  P as i,
  _ as l,
  c as m,
  O as n,
  p as o,
  a as p,
  F as r,
  f as s,
  Z as t,
  b as u,
};
