import { samplePosts } from "./samplePosts.js";
var e = [],
  // no published articles yet: development shows placeholder articles so the blog design can be
  // reviewed; production keeps the real (empty) list
  t = Array.isArray(e) && e.length ? e : import.meta.env.DEV ? samplePosts : [];
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
