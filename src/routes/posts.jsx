var e = [],
  t = Array.isArray(e) ? e : [];
function n(e) {
  let n = e ? `th` : `en`,
    r = t.filter((e) => e.lang === n);
  return r.length ? r : t;
}
function r(e) {
  return t.find((t) => t.slug === e) || null;
}
[...new Set(t.flatMap((e) => e.categories))];
export { r as n, n as r, t };
