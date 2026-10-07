const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/lottie_light-Cwi94DeK.js", "assets/rolldown-runtime-CNC7AqOf.js"]),
) => i.map((i) => d[i]);
import { a as e } from "../vendor/rolldown-runtime-CNC7AqOf.js";
import { i as t } from "../vendor/i18n-CAiZPsdd.js";
import { c as n, f as r, n as _Element } from "../vendor/react-SEPqUFC0.js";
import { t as a } from "./usePageMeta.jsx";
import { a as o, i as _Element17, n as c, r as _Element11 } from "../vendor/motion-CB540VaL.js";
import { r as u, t as d } from "../vendor/animejs-CC9iyI6Y.js";
import { t as f } from "../site.jsx";
var p = e(t(), 1),
  m = new Set(),
  h = new WeakMap(),
  g = new WeakMap(),
  _ = new WeakMap(),
  v = new WeakMap(),
  y = new WeakMap(),
  b = new WeakMap(),
  x = new WeakMap(),
  S = new WeakMap(),
  C = new WeakSet(),
  w,
  T = 0,
  E = 0,
  D = `__aa_tgt`,
  O = `__aa_del`,
  k = `__aa_new`,
  A = (e) => {
    let t = ie(e);
    t && t.forEach((e) => oe(e));
  },
  j = (e) => {
    e.forEach((e) => {
      (e.target === w && ee(), h.has(e.target) && P(e.target));
    });
  };
function M(e) {
  let t = e.getBoundingClientRect(),
    n = w?.clientWidth || 0,
    r = w?.clientHeight || 0;
  return t.bottom < 0 || t.top > r || t.right < 0 || t.left > n;
}
function N(e) {
  v.get(e)?.disconnect();
  let t = h.get(e),
    n = 0;
  t || ((t = L(e)), h.set(e, t));
  let { offsetWidth: r, offsetHeight: i } = w,
    a = [t.top - 5, r - (t.left + 5 + t.width), i - (t.top + 5 + t.height), t.left - 5]
      .map((e) => `${-1 * Math.floor(e)}px`)
      .join(` `),
    o = new IntersectionObserver(
      () => {
        ++n > 1 && P(e);
      },
      {
        root: w,
        threshold: 1,
        rootMargin: a,
      },
    );
  (o.observe(e), v.set(e, o));
}
function P(e, t = !0) {
  clearTimeout(S.get(e));
  let n = le(e),
    r = t ? (me(n) ? 500 : n.duration) : 0;
  S.set(
    e,
    setTimeout(async () => {
      let t = _.get(e);
      try {
        (await t?.finished, h.set(e, L(e)), N(e));
      } catch {}
    }, r),
  );
}
function ee() {
  (clearTimeout(S.get(w)),
    S.set(
      w,
      setTimeout(() => {
        m.forEach((e) => fe(e, (e) => F(() => P(e))));
      }, 100),
    ));
}
function te(e) {
  setTimeout(
    () => {
      b.set(
        e,
        setInterval(() => F(P.bind(null, e)), 2e3),
      );
    },
    Math.round(2e3 * Math.random()),
  );
}
function F(e) {
  typeof requestIdleCallback == `function`
    ? requestIdleCallback(() => e())
    : requestAnimationFrame(() => e());
}
var ne,
  re = typeof window < `u` && `ResizeObserver` in window;
re &&
  ((w = document.documentElement),
  new MutationObserver(A),
  (ne = new ResizeObserver(j)),
  window.addEventListener(`scroll`, () => {
    ((E = window.scrollY), (T = window.scrollX));
  }),
  ne.observe(w));
function ie(e) {
  return e
    .reduce((e, t) => [...e, ...Array.from(t.addedNodes), ...Array.from(t.removedNodes)], [])
    .every((e) => e.nodeName === `#comment`)
    ? !1
    : e.reduce((e, t) => {
        if (e === !1) return !1;
        if (t.target instanceof Element) {
          if ((ae(t.target), !e.has(t.target))) {
            e.add(t.target);
            for (let n = 0; n < t.target.children.length; n++) {
              let r = t.target.children.item(n);
              if (r) {
                if (O in r) return !1;
                (ae(t.target, r), e.add(r));
              }
            }
          }
          if (t.removedNodes.length)
            for (let n = 0; n < t.removedNodes.length; n++) {
              let r = t.removedNodes[n];
              if (O in r) return !1;
              r instanceof Element &&
                (e.add(r), ae(t.target, r), g.set(r, [t.previousSibling, t.nextSibling]));
            }
        }
        return e;
      }, new Set());
}
function ae(e, t) {
  !t && !(D in e)
    ? Object.defineProperty(e, D, {
        value: e,
      })
    : t &&
      !(D in t) &&
      Object.defineProperty(t, D, {
        value: e,
      });
}
function oe(e) {
  var t;
  let n = e.isConnected,
    r = h.has(e);
  (n && g.has(e) && g.delete(e),
    _.get(e)?.playState !== `finished` && ((t = _.get(e)) == null || t.cancel()),
    k in e ? ge(e) : r && n ? he(e) : r && !n ? ve(e) : ge(e));
}
function I(e) {
  return Number(e.replace(/[^0-9.\-]/g, ``));
}
function se(e) {
  let t = e.parentElement;
  for (; t;) {
    if (t.scrollLeft || t.scrollTop)
      return {
        x: t.scrollLeft,
        y: t.scrollTop,
      };
    t = t.parentElement;
  }
  return {
    x: 0,
    y: 0,
  };
}
function L(e) {
  let t = e.getBoundingClientRect(),
    { x: n, y: r } = se(e);
  return {
    top: t.top + r,
    left: t.left + n,
    width: t.width,
    height: t.height,
  };
}
function ce(e, t, n) {
  let r = t.width,
    i = t.height,
    a = n.width,
    o = n.height,
    s = getComputedStyle(e);
  if (s.getPropertyValue(`box-sizing`) === `content-box`) {
    let e = I(s.paddingTop) + I(s.paddingBottom) + I(s.borderTopWidth) + I(s.borderBottomWidth),
      t = I(s.paddingLeft) + I(s.paddingRight) + I(s.borderRightWidth) + I(s.borderLeftWidth);
    ((r -= t), (a -= t), (i -= e), (o -= e));
  }
  return [r, a, i, o].map(Math.round);
}
function le(e) {
  return D in e && x.has(e[D])
    ? x.get(e[D])
    : {
        duration: 250,
        easing: `ease-in-out`,
      };
}
function ue(e) {
  if (D in e) return e[D];
}
function de(e) {
  let t = ue(e);
  return t ? C.has(t) : !1;
}
function fe(e, ...t) {
  t.forEach((t) => t(e, x.has(e)));
  for (let n = 0; n < e.children.length; n++) {
    let r = e.children.item(n);
    r && t.forEach((e) => e(r, x.has(r)));
  }
}
function pe(e) {
  return Array.isArray(e) ? e : [e];
}
function me(e) {
  return typeof e == `function`;
}
function he(e) {
  let t = h.get(e),
    n = L(e);
  if (!de(e)) return h.set(e, n);
  if (M(e)) {
    (h.set(e, n), N(e));
    return;
  }
  let r;
  if (!t) return;
  let i = le(e);
  if (typeof i != `function`) {
    let a = t.left - n.left,
      o = t.top - n.top,
      s = t.left + t.width - (n.left + n.width);
    (t.top + t.height - (n.top + n.height) == 0 && (o = 0), s == 0 && (a = 0));
    let [c, l, u, d] = ce(e, t, n),
      f = {
        transform: `translate(${a}px, ${o}px)`,
      },
      p = {
        transform: `translate(0, 0)`,
      };
    (c !== l && ((f.width = `${c}px`), (p.width = `${l}px`)),
      u !== d && ((f.height = `${u}px`), (p.height = `${d}px`)),
      (r = e.animate([f, p], {
        duration: i.duration,
        easing: i.easing,
      })));
  } else {
    let [a] = pe(i(e, `remain`, t, n));
    ((r = new Animation(a)), r.play());
  }
  (_.set(e, r),
    h.set(e, n),
    r.addEventListener(`finish`, P.bind(null, e, !1), {
      once: !0,
    }));
}
function ge(e) {
  k in e && delete e[k];
  let t = L(e);
  h.set(e, t);
  let n = le(e);
  if (!de(e)) return;
  if (M(e)) {
    N(e);
    return;
  }
  let r;
  if (typeof n != `function`)
    r = e.animate(
      [
        {
          transform: `scale(.98)`,
          opacity: 0,
        },
        {
          transform: `scale(0.98)`,
          opacity: 0,
          offset: 0.5,
        },
        {
          transform: `scale(1)`,
          opacity: 1,
        },
      ],
      {
        duration: n.duration * 1.5,
        easing: `ease-in`,
      },
    );
  else {
    let [i] = pe(n(e, `add`, t));
    ((r = new Animation(i)), r.play());
  }
  (_.set(e, r),
    r.addEventListener(`finish`, P.bind(null, e, !1), {
      once: !0,
    }));
}
function _e(e, t) {
  var n;
  (e.remove(),
    h.delete(e),
    g.delete(e),
    _.delete(e),
    (n = v.get(e)) == null || n.disconnect(),
    setTimeout(() => {
      if (
        (O in e && delete e[O],
        Object.defineProperty(e, k, {
          value: !0,
          configurable: !0,
        }),
        t && e instanceof HTMLElement)
      )
        for (let n in t) e.style[n] = ``;
    }, 0));
}
function ve(e) {
  var t;
  if (!g.has(e) || !h.has(e)) return;
  let [n, r] = g.get(e);
  Object.defineProperty(e, O, {
    value: !0,
    configurable: !0,
  });
  let i = window.scrollX,
    a = window.scrollY;
  if (
    (r && r.parentNode && r.parentNode instanceof Element
      ? r.parentNode.insertBefore(e, r)
      : n && n.parentNode
        ? n.parentNode.appendChild(e)
        : (t = ue(e)) == null || t.appendChild(e),
    !de(e))
  )
    return _e(e);
  let [o, s, c, l] = be(e),
    u = le(e),
    d = h.get(e);
  (i !== T || a !== E) && ye(e, i, a, u);
  let f,
    p = {
      position: `absolute`,
      top: `${o}px`,
      left: `${s}px`,
      width: `${c}px`,
      height: `${l}px`,
      margin: `0`,
      pointerEvents: `none`,
      transformOrigin: `center`,
      zIndex: `100`,
    };
  if (!me(u))
    (Object.assign(e.style, p),
      (f = e.animate(
        [
          {
            transform: `scale(1)`,
            opacity: 1,
          },
          {
            transform: `scale(.98)`,
            opacity: 0,
          },
        ],
        {
          duration: u.duration,
          easing: `ease-out`,
        },
      )));
  else {
    let [t, n] = pe(u(e, `remove`, d));
    (n?.styleReset !== !1 && ((p = n?.styleReset || p), Object.assign(e.style, p)),
      (f = new Animation(t)),
      f.play());
  }
  (_.set(e, f),
    f.addEventListener(`finish`, () => _e(e, p), {
      once: !0,
    }));
}
function ye(e, t, n, r) {
  let i = T - t,
    a = E - n,
    o = document.documentElement.style.scrollBehavior;
  if (
    (getComputedStyle(w).scrollBehavior === `smooth` &&
      (document.documentElement.style.scrollBehavior = `auto`),
    window.scrollTo(window.scrollX + i, window.scrollY + a),
    !e.parentElement)
  )
    return;
  let s = e.parentElement,
    c = s.clientHeight,
    l = s.clientWidth,
    u = performance.now();
  function d() {
    requestAnimationFrame(() => {
      if (!me(r)) {
        let e = c - s.clientHeight,
          t = l - s.clientWidth;
        u + r.duration > performance.now()
          ? (window.scrollTo({
              left: window.scrollX - t,
              top: window.scrollY - e,
            }),
            (c = s.clientHeight),
            (l = s.clientWidth),
            d())
          : (document.documentElement.style.scrollBehavior = o);
      }
    });
  }
  d();
}
function be(e) {
  let t = h.get(e),
    [n, , r] = ce(e, t, L(e)),
    i = e.parentElement;
  for (; i && (getComputedStyle(i).position === `static` || i instanceof HTMLBodyElement);)
    i = i.parentElement;
  i ||= document.body;
  let a = getComputedStyle(i),
    o = !_.has(e) || _.get(e)?.playState === `finished` ? L(i) : h.get(i);
  return [
    Math.round(t.top - o.top) - I(a.borderTopWidth),
    Math.round(t.left - o.left) - I(a.borderLeftWidth),
    n,
    r,
  ];
}
function xe(e, t = {}) {
  if (
    re &&
    ne &&
    !(
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches &&
      !me(t) &&
      !t.disrespectUserMotionPreference
    )
  ) {
    (C.add(e),
      getComputedStyle(e).position === `static` &&
        Object.assign(e.style, {
          position: `relative`,
        }),
      fe(e, P, te, (e) => ne?.observe(e)),
      me(t)
        ? x.set(e, t)
        : x.set(e, {
            duration: 250,
            easing: `ease-in-out`,
            ...t,
          }));
    let n = new MutationObserver(A);
    (n.observe(e, {
      childList: !0,
    }),
      y.set(e, n),
      m.add(e));
  }
  return Object.freeze({
    parent: e,
    enable: () => {
      C.add(e);
    },
    disable: () => {
      (C.delete(e),
        fe(e, (e) => {
          let t = _.get(e);
          try {
            t?.cancel();
          } catch {}
          _.delete(e);
          let n = S.get(e);
          (n && clearTimeout(n), S.delete(e));
          let r = b.get(e);
          (r && clearInterval(r), b.delete(e));
        }));
    },
    isEnabled: () => C.has(e),
    destroy: () => {
      (C.delete(e),
        m.delete(e),
        x.delete(e),
        y.get(e)?.disconnect(),
        y.delete(e),
        fe(e, (e) => {
          ne?.unobserve(e);
          let t = _.get(e);
          try {
            t?.cancel();
          } catch {}
          (_.delete(e), v.get(e)?.disconnect(), v.delete(e));
          let n = b.get(e);
          (n && clearInterval(n), b.delete(e));
          let r = S.get(e);
          (r && clearTimeout(r), S.delete(e), h.delete(e), g.delete(e));
        }));
    },
  });
}
function Se(e) {
  let [t, n] = (0, p.useState)(),
    r = (0, p.useMemo)(() => e, []),
    i = (0, p.useCallback)(
      (e) => {
        e instanceof HTMLElement ? n(xe(e, r)) : n(void 0);
      },
      [r],
    ),
    a = (0, p.useCallback)(
      (e) => {
        t && (e ? t.enable() : t.disable());
      },
      [t],
    );
  return (
    (0, p.useEffect)(
      () => () => {
        var e;
        (e = t?.destroy) == null || e.call(t);
      },
      [t],
    ),
    [i, a]
  );
}
var R = {
    th: {
      title: `แดชบอร์ดการตลาด`,
      source: `ข้อมูลจาก Google Analytics 4`,
      rangeSuffix: `ล่าสุด`,
      updating: `กำลังปรับปรุงข้อมูล`,
      loading: `กำลังโหลดข้อมูล`,
      signOut: `ออกจากระบบ`,
      downloadPdf: `ดาวน์โหลดรายงาน PDF`,
      preparingPdf: `กำลังจัดเตรียมรายงาน`,
      themeToDark: `โหมดกลางคืน`,
      themeToLight: `โหมดกลางวัน`,
      rangeGroup: `ช่วงเวลา`,
      sectionGroup: `หมวดข้อมูล`,
      days7: `7 วัน`,
      days28: `28 วัน`,
      days90: `90 วัน`,
      rangeMonth: `รายเดือน`,
      rangeCustom: `กำหนดเอง`,
      rangeMonthLabel: `เลือกเดือน`,
      rangeFrom: `ตั้งแต่วันที่`,
      rangeTo: `ถึงวันที่`,
      rangeComparedMonth: `เทียบกับเดือนก่อนหน้า`,
      rangeComparedDays: (e) => `เทียบกับ ${e} วันก่อนช่วงนี้`,
      rangeOf: (e, t) => `${e} ถึง ${t}`,
      lockIntro: `สำหรับเจ้าหน้าที่ภายใน กรุณากรอกรหัสผ่านเพื่อเข้าใช้งาน`,
      password: `รหัสผ่าน`,
      signIn: `เข้าสู่ระบบ`,
      wrongPassword: `รหัสผ่านไม่ถูกต้อง`,
      lockedOut: (e) => `กรอกรหัสผ่านไม่ถูกต้องหลายครั้ง กรุณาลองใหม่อีกครั้งใน ${e} นาที`,
      secOverview: `ภาพรวม`,
      secPages: `หน้าเว็บไซต์`,
      secAudience: `ผู้เข้าชม`,
      secTraffic: `ช่องทางและอุปกรณ์`,
      secSearch: `คำค้นหา`,
      secContact: `การติดต่อ`,
      users: `ผู้ใช้งาน`,
      sessions: `เซสชัน`,
      views: `การเข้าชมหน้า`,
      ctaClicks: `การคลิกปุ่มติดต่อ`,
      avgDuration: `ระยะเวลาเฉลี่ยต่อเซสชัน`,
      viewsPerSession: `จำนวนหน้าต่อเซสชัน`,
      contactRate: `อัตราการติดต่อ`,
      vsPrevious: `เทียบกับช่วงก่อนหน้า`,
      noPrevious: `ไม่มีข้อมูลช่วงก่อนหน้าให้เปรียบเทียบ`,
      unchanged: `ไม่เปลี่ยนแปลง`,
      unitTimes: ` ครั้ง`,
      unitSessions: ` เซสชัน`,
      newUsers: `ผู้ใช้งานใหม่`,
      returningUsers: `ผู้ใช้งานที่กลับมาซ้ำ`,
      engagementRate: `อัตราการมีส่วนร่วม`,
      downloadCsv: `ดาวน์โหลด CSV`,
      live: `กำลังใช้งานอยู่`,
      liveSub: `ผู้ใช้งานบนเว็บไซต์ในขณะนี้`,
      dailyUsers: `ผู้ใช้งานรายวัน`,
      dailyUsersSub: `แนวโน้มจำนวนผู้เข้าชมในแต่ละวัน`,
      topPages: `หน้าที่มีผู้เข้าชมมากที่สุด`,
      topPagesSub: `5 อันดับแรก ดูข้อมูลทั้งหมดได้ที่หมวด “หน้าเว็บไซต์”`,
      topPagesFull: `หน้าที่มีผู้เข้าชมมากที่สุด`,
      channels: `ช่องทางที่นำผู้ใช้งานเข้าสู่เว็บไซต์`,
      channelsSub: `5 อันดับแรก ดูรายละเอียดได้ที่หมวด “ช่องทางและอุปกรณ์”`,
      channelsFull: `ช่องทางที่นำผู้ใช้งานเข้าสู่เว็บไซต์`,
      channelsFullSub: `นับตามจำนวนเซสชัน`,
      sectionShare: `ความสนใจตามหมวดเนื้อหา`,
      sectionShareSub: `รวมการเข้าชมตามหมวด นับภาษาไทยและภาษาอังกฤษด้วยกัน`,
      landings: `หน้าแรกที่ผู้ใช้งานเข้าชม`,
      landingsSub: `ใช้ประเมินว่าช่องทางโฆษณานำผู้ใช้งานเข้าสู่หน้าใด`,
      allPages: `สถิติรายหน้าทั้งหมด`,
      allPagesSub: `ค้นหาและจัดเรียงได้ · ระยะเวลาอ่านเฉลี่ยคือเวลาที่ผู้ใช้งานอยู่บนหน้านั้นต่อคน · อ่านจนจบคือสัดส่วนผู้ที่เลื่อนถึง 90% ของหน้า`,
      devices: `อุปกรณ์ที่ใช้เข้าชม`,
      devicesSub: `ใช้ประกอบการตัดสินใจออกแบบหน้าจอ`,
      ctaChannel: `ช่องทางการติดต่อที่ผู้ใช้งานเลือก`,
      ctaChannelSub: `นับจากการคลิกปุ่มติดต่อบนเว็บไซต์`,
      ctaPlacement: `ตำแหน่งของปุ่มที่ถูกคลิก`,
      ctaPlacementSub: `ปุ่มหลัก ปุ่มรอง หรือปุ่มในแบบประเมินตนเอง ใช้ตัดสินใจว่าควรเน้นปุ่มใด`,
      ctaPlacementUnavailable: `ยังไม่สามารถอ่านข้อมูลได้ กรุณาลงทะเบียน custom dimension ชื่อ cta_placement (Scope = Event) ใน GA4 ข้อมูลจะเริ่มแสดงภายในประมาณ 24 ชั่วโมง`,
      placementNames: {
        primary: `ปุ่มหลักของหน้า`,
        secondary: `ปุ่มรองของหน้า`,
        tool: `ปุ่มในแบบประเมินตนเอง`,
        floating: `ปุ่มลอย LINE / โทร`,
        appointment: `ส่วนนัดหมายในหน้าติดต่อเรา`,
        header: `เมนูด้านบน`,
        footer: `ส่วนท้ายเว็บไซต์`,
        content: `ลิงก์ในเนื้อหา`,
        "(not set)": `ไม่ระบุ (คลิกก่อนเริ่มเก็บข้อมูล)`,
      },
      ctaLabels: `ปุ่มที่มีการคลิกมากที่สุด`,
      ctaLabelsSub: `ข้อความบนปุ่มที่ได้ผลจริง`,
      ctaPages: `หน้าที่นำไปสู่การติดต่อ`,
      ctaPagesSub: `ใช้จัดลำดับความสำคัญของการลงโฆษณา`,
      contactRateHint: `สัดส่วนผู้ใช้งานที่คลิกปุ่มติดต่อ`,
      ctaTileHint: `ทุกช่องทางติดต่อ: โทรศัพท์ LINE อีเมล และหน้าติดต่อ จากทุกตำแหน่งบนเว็บไซต์`,
      ctaTileUnavailable: `ยังไม่สามารถอ่านข้อมูลได้ ดูรายละเอียดที่หมวด “การติดต่อ”`,
      highlightsTitle: `ไฮไลต์ของช่วงนี้`,
      highlightsSub: `ประเด็นที่โดดเด่นที่สุดของช่วงเวลาที่เลือก คำนวณจากตัวเลขในแดชบอร์ดโดยอัตโนมัติ · กดที่การ์ดเพื่อดูรายละเอียด`,
      hl: {
        usersUp: `ผู้ใช้งานเพิ่มขึ้นเมื่อเทียบกับช่วงก่อนหน้า`,
        usersDown: `ผู้ใช้งานลดลงเมื่อเทียบกับช่วงก่อนหน้า`,
        bestChannel: (e) => `อัตราการติดต่อสูงที่สุดมาจากช่องทาง ${e}`,
        bestPage: (e) => `หน้าที่เปลี่ยนผู้เข้าชมเป็นการติดต่อได้ดีที่สุด คือ ${e}`,
        fixPage: (e) => `${e} มีผู้เข้าชมมากแต่มีการติดต่อน้อย ควรปรับปุ่มติดต่อหรือเนื้อหา`,
        busiest: (e) => `ช่วงที่มีผู้เข้าชมมากที่สุด คือ${e}`,
        topCity: (e) => `ของเซสชันมาจาก${e}`,
        mobile: `ของเซสชันเข้าชมผ่านโทรศัพท์มือถือ`,
      },
      hlSeeMore: `ดูรายละเอียด`,
      hlEarly: `ข้อมูลยังน้อย`,
      legendCurrent: `ช่วงนี้`,
      legendPrevious: `ช่วงก่อนหน้า`,
      smallSample: (e) =>
        `ในช่วงเวลานี้มีการติดต่อเพียง ${e} ครั้ง การจัดกลุ่มด้านล่างจึงยังเปลี่ยนแปลงได้ง่าย ควรใช้ประกอบการพิจารณาเท่านั้น และดูอีกครั้งเมื่อมีข้อมูลมากขึ้น`,
      journeyTitle: `เส้นทางสู่การติดต่อ`,
      journeySub: `จำนวนผู้ใช้งานที่ไปถึงแต่ละขั้น คิดเป็นสัดส่วนของผู้เข้าชมทั้งหมด · ผู้ใช้งานบางคนติดต่อผ่านปุ่มลอยได้โดยไม่ผ่านขั้นก่อนหน้า`,
      journeySteps: {
        visitors: `เข้าชมเว็บไซต์`,
        browsed: `ดูหน้าบริการ แพ็กเกจ หรือแคมเปญ`,
        contactPage: `เปิดหน้าติดต่อเรา`,
        contacted: `กดติดต่อ (โทร LINE อีเมล หรือหน้าติดต่อ)`,
      },
      channelQuality: `คุณภาพของแต่ละช่องทาง`,
      channelQualitySub: `ไม่ใช่แค่ช่องทางไหนพาคนมามาก แต่ช่องทางไหนพาคนที่ติดต่อจริง · แกนนอนคือจำนวนเซสชัน แกนตั้งคืออัตราการติดต่อ เส้นประแนวนอนคือค่าเฉลี่ยของทั้งเว็บไซต์`,
      axisSessions: `จำนวนเซสชัน`,
      siteAverage: `ค่าเฉลี่ยเว็บไซต์`,
      thContacts: `การติดต่อ`,
      thContactRate: `อัตราการติดต่อ`,
      thVerdict: `การประเมิน`,
      verdicts: {
        star: `ดาวเด่น`,
        fix: `คนมาก แต่ติดต่อน้อย`,
        grow: `ติดต่อดี แต่คนน้อย`,
        review: `ควรทบทวน`,
      },
      contentMatrix: `จัดกลุ่มหน้าเว็บตามผลลัพธ์`,
      contentMatrixSub: `เทียบจำนวนการเข้าชมกับอัตราการติดต่อของ 30 หน้าที่มีผู้เข้าชมมากที่สุด แล้วแบ่งเป็น 4 กลุ่ม พร้อมสิ่งที่ควรทำกับแต่ละกลุ่ม · ตัวเลขข้างชื่อหน้าคือ การเข้าชม · อัตราการติดต่อ`,
      matrixHints: {
        star: `ผู้เข้าชมมากและติดต่อดี รักษาไว้ และใช้เป็นต้นแบบในการปรับหน้าอื่น`,
        fix: `ผู้เข้าชมมากแต่ติดต่อน้อย ปรับปุ่มติดต่อให้เห็นเร็วขึ้น หรือเพิ่มข้อมูลที่ช่วยตัดสินใจ เช่น ราคาและขั้นตอน`,
        grow: `ติดต่อดีแต่ผู้เข้าชมน้อย ควรพาผู้ใช้งานมาเพิ่ม ด้วยโฆษณา SEO หรือการแชร์ลิงก์`,
        review: `ผู้เข้าชมน้อยและติดต่อน้อย ทบทวนว่าหน้านี้ตอบโจทย์กลุ่มใด หรือควรรวมกับหน้าอื่น`,
      },
      matrixEmpty: `ไม่มีหน้าในกลุ่มนี้`,
      unitPages: `หน้า`,
      andMore: (e) => `และอีก ${e} หน้า`,
      lowCtr: `คำค้นที่ถูกแสดงบ่อย แต่มีผู้คลิกน้อย`,
      lowCtrSub: `ติดอันดับในหน้าแรกแล้ว แต่อัตราการคลิกต่ำกว่าครึ่งหนึ่งของค่าโดยประมาณสำหรับอันดับนั้น · ควรปรับหัวข้อ (title) และคำอธิบาย (meta description) ของหน้าที่ระบุให้ตรงกับสิ่งที่ผู้ค้นหาต้องการ`,
      lowCtrEmpty: `ไม่พบคำค้นที่เข้าเกณฑ์ในช่วงเวลานี้`,
      thPageToFix: `หน้าที่ควรปรับ`,
      brandSplit: `ค้นด้วยชื่อโรงพยาบาล เทียบกับคำค้นทั่วไป`,
      brandSplitSub: `คำค้นที่มีชื่อ KMC หรือเคเอ็มซีสะท้อนการรู้จักแบรนด์ ส่วนคำค้นทั่วไปคือผู้ที่ค้นหาบริการหรืออาการแล้วพบเว็บไซต์ ยิ่งคำค้นทั่วไปเติบโต ยิ่งแปลว่าเว็บไซต์ช่วยหาผู้ป่วยใหม่ได้`,
      brandQueries: `ค้นด้วยชื่อโรงพยาบาล`,
      nonBrandQueries: `ค้นด้วยคำทั่วไป`,
      brandImpressions: `การแสดงผล`,
      brandClicks: `คลิก`,
      lineTitle: `LINE Official Account @kmchealth`,
      lineAsOf: (e) => `ข้อมูล ณ วันที่ ${e} · LINE สรุปข้อมูลล่าช้าประมาณ 1 วัน`,
      lineReach: `เพื่อนที่ยังติดตาม`,
      lineReachHint: `เพื่อนทั้งหมดหักจำนวนที่บล็อก คือจำนวนคนที่ข้อความบรอดแคสต์ส่งถึงได้จริง`,
      lineJoined: `เพื่อนใหม่ในช่วงนี้`,
      lineBlocked: `บล็อกในช่วงนี้`,
      lineBlockedHint: `ถ้าเพิ่มขึ้นหลังส่งบรอดแคสต์ อาจส่งถี่หรือเนื้อหาไม่ตรงความสนใจ`,
      lineQuota: `ข้อความที่ใช้เดือนนี้`,
      lineQuotaOf: (e) => `จากโควตา ${e} ข้อความต่อเดือน`,
      lineQuotaUnlimited: `แพ็กเกจปัจจุบันไม่จำกัดจำนวนข้อความ`,
      webToLine: `คนที่กดเข้า LINE จากหน้าเว็บ`,
      webToLineHeadline: `คน กดเข้า LINE จากหน้าเว็บในช่วงนี้`,
      webToLineClicksNote: (e) => `รวม ${e} ครั้ง (บางคนกดมากกว่าหนึ่งครั้ง)`,
      webToLineByPage: `กดจากหน้าไหน`,
      webToLinePeople: `จำนวนคน`,
      webToLineClicks: `จำนวนครั้ง`,
      webToLineNone: `ยังไม่มีคนกดเข้า LINE จากหน้าเว็บในช่วงนี้`,
      webToLineNote: `นับเฉพาะผู้เข้าชมที่ยอมรับคุกกี้ · คนเดียวที่กดจากหลายหน้าจะนับในทุกหน้าที่กด`,
      webToLineNoCta: `ยังนับไม่ได้ จนกว่าจะลงทะเบียน custom dimension cta_channel ใน GA4`,
      unitPeople: ` คน`,
      pageNames: {
        "/": `หน้าแรก`,
        "/contact": `ติดต่อเรา`,
        "/packages": `แพ็กเกจ`,
        "/about": `เกี่ยวกับเรา`,
        "/faq": `คำถามที่พบบ่อย`,
        "/blog": `ศูนย์ความรู้`,
        "/facilities": `สิ่งอำนวยความสะดวก`,
        "/corporate": `องค์กรและชุมชน`,
      },
      lineWho: `กลุ่มผู้ติดตาม`,
      lineWhoSub: `สัดส่วนโดยประมาณที่ LINE คำนวณจากข้อมูลผู้ใช้ ใช้วางแผนเนื้อหาและการกำหนดกลุ่มเป้าหมายของบรอดแคสต์`,
      lineWhoUnavailable: `LINE ยังไม่แสดงข้อมูลกลุ่มผู้ติดตาม เนื่องจากจำนวนเพื่อนยังไม่ถึงเกณฑ์ที่ LINE กำหนด`,
      lineGender: `เพศ`,
      lineAge: `อายุ`,
      lineArea: `พื้นที่`,
      lineGenders: {
        male: `ชาย`,
        female: `หญิง`,
        unknown: `ไม่ระบุ`,
      },
      lineAges: {
        from0to14: `ต่ำกว่า 15 ปี`,
        from15to19: `15–19 ปี`,
        from20to24: `20–24 ปี`,
        from25to29: `25–29 ปี`,
        from30to34: `30–34 ปี`,
        from35to39: `35–39 ปี`,
        from40to44: `40–44 ปี`,
        from45to49: `45–49 ปี`,
        from50: `50 ปีขึ้นไป`,
        unknown: `ไม่ระบุ`,
      },
      lineLoading: `กำลังโหลดข้อมูลจาก LINE`,
      lineReasons: {
        "no-token": {
          title: `ยังไม่ได้เชื่อมต่อ LINE Official Account`,
          steps: [
            `เปิด manager.line.biz → บัญชี @kmchealth → ตั้งค่า → Messaging API แล้วคัดลอก Channel ID และ Channel secret`,
            `เพิ่ม 2 ตัวแปรใน Vercel → Settings → Environment Variables คือ LINE_CHANNEL_ID และ LINE_CHANNEL_SECRET แล้ว Redeploy หนึ่งครั้ง`,
            `ไม่ต้องกด Issue หรือ Reissue token ใดๆ แดชบอร์ดออก token อายุสั้นเองทุกครั้งที่อ่านข้อมูล จึงไม่กระทบระบบอื่นที่ใช้ LINE OA นี้อยู่`,
            `อย่าแก้ไข Webhook URL ที่ตั้งไว้ แดชบอร์ดไม่ใช้ Webhook และอ่านสถิติเพียงอย่างเดียว`,
          ],
        },
        "bad-token": {
          title: `LINE ไม่ยอมรับ Channel ID หรือ Channel secret`,
          steps: [
            `ตรวจว่า LINE_CHANNEL_ID และ LINE_CHANNEL_SECRET ใน Vercel ตรงกับหน้า Messaging API ของ @kmchealth ทุกตัวอักษร`,
            `ถ้ามีการออก Channel secret ใหม่ ต้องอัปเดตค่าใน Vercel ด้วย แล้ว Redeploy หนึ่งครั้ง`,
          ],
        },
        unready: {
          title: `LINE ยังสรุปข้อมูลของวันล่าสุดไม่เสร็จ`,
          steps: [`กรุณาลองใหม่อีกครั้งในภายหลัง โดยปกติ LINE สรุปข้อมูลแต่ละวันภายใน 1 วัน`],
        },
        "rate-limited": {
          title: `เรียกข้อมูลจาก LINE ถี่เกินไป`,
          steps: [`กรุณารอสักครู่แล้วรีเฟรชหน้านี้อีกครั้ง`],
        },
        failed: {
          title: `ไม่สามารถอ่านข้อมูลจาก LINE ได้ในขณะนี้`,
          steps: [`กรุณาลองใหม่อีกครั้ง หากยังไม่สำเร็จ โปรดตรวจสอบข้อความด้านล่าง`],
        },
      },
      utmBuilder: `สร้างลิงก์สำหรับติดตามแคมเปญ`,
      utmBuilderSub: `ใช้ลิงก์ที่สร้างจากที่นี่ทุกครั้งที่นำไปโพสต์ เพื่อให้การ์ด “แคมเปญที่ติดแท็ก UTM” ด้านบนมีข้อมูล · ชื่อช่องทางถูกกำหนดไว้แล้วเพื่อไม่ให้พิมพ์ไม่ตรงกันแล้วข้อมูลแตกเป็นหลายรายการ`,
      utmChannel: `ช่องทางที่นำไปเผยแพร่`,
      utmDestination: `หน้าปลายทาง`,
      utmSource: `แหล่งที่มา (utm_source)`,
      utmMedium: `ประเภท (utm_medium)`,
      utmCampaign: `ชื่อแคมเปญ (utm_campaign)`,
      utmCampaignPlaceholder: `sleep-test-oct`,
      utmCampaignHint: `ตั้งชื่อให้สื่อถึงแคมเปญและเดือน ใช้ชื่อเดิมได้ทุกช่องทางของแคมเปญเดียวกัน`,
      utmContent: `ระบุชิ้นงาน (utm_content) — ใส่หรือไม่ใส่ก็ได้`,
      utmContentPlaceholder: `post-1`,
      utmContentHint: `ใช้แยกว่าโพสต์ชิ้นไหนหรือปุ่มไหนในชิ้นงานเดียวกันได้ผลกว่า`,
      utmResult: `ลิงก์ที่ได้`,
      utmCopy: `คัดลอกลิงก์`,
      utmCopied: `คัดลอกแล้ว`,
      utmIncomplete: `กรุณากรอกชื่อแคมเปญก่อน`,
      utmChannels: {
        line: `LINE (บรอดแคสต์หรือข้อความ)`,
        facebook: `Facebook (โพสต์ปกติ)`,
        instagram: `Instagram`,
        tiktok: `TikTok`,
        googleAds: `Google Ads`,
        facebookAds: `Facebook / Instagram Ads`,
        email: `อีเมล`,
        print: `สื่อสิ่งพิมพ์ หรือ QR code`,
        partner: `เว็บไซต์พันธมิตร`,
        other: `อื่น ๆ (กรอกเอง)`,
      },
      newVsReturningHint: `สัดส่วนผู้ใช้งานที่เข้าชมครั้งแรก`,
      returningHint: `ผู้ที่เคยเข้าชมแล้วและกลับมาอีกครั้ง`,
      engagementRateHint: `สัดส่วนเซสชันที่ผู้ใช้งานอยู่นานกว่า 10 วินาที หรือเปิดมากกว่า 1 หน้า`,
      cities: `พื้นที่ของผู้เข้าชม`,
      citiesSub: `ใช้ประเมินว่าผู้ที่สนใจอยู่ในระยะที่เดินทางมาโรงพยาบาลได้`,
      weekHeat: `ช่วงเวลาที่มีผู้เข้าชม`,
      weekHeatSub: `สีเข้มคือช่วงที่มีผู้เข้าชมมาก ใช้กำหนดเวลาเผยแพร่เนื้อหาและเวลาเตรียมรับสาย`,
      busiest: `ช่วงที่มีผู้เข้าชมมากที่สุด`,
      sources: `แหล่งที่มาโดยละเอียด`,
      sourcesSub: `เว็บไซต์หรือแอปพลิเคชันต้นทาง คู่กับประเภทของการเข้าชม`,
      campaigns: `แคมเปญที่ติดแท็ก UTM`,
      campaignsSub: `นับเฉพาะลิงก์ที่ติดพารามิเตอร์ utm_campaign ไว้`,
      emptyCampaigns: `ยังไม่พบลิงก์ที่ติดแท็กแคมเปญ หากต้องการวัดผลรายแคมเปญ กรุณาเพิ่ม ?utm_source=line&utm_medium=social&utm_campaign=ชื่อแคมเปญ ต่อท้ายลิงก์ที่นำไปเผยแพร่`,
      languageSplit: `ภาษาของหน้าที่เข้าชม`,
      languageSplitSub: `ใช้ประเมินความคุ้มค่าของการดูแลเนื้อหาภาษาอังกฤษ`,
      langThai: `หน้าภาษาไทย`,
      langEnglish: `หน้าภาษาอังกฤษ`,
      audienceUnavailable: `ไม่สามารถอ่านข้อมูลกลุ่มผู้เข้าชมได้ในขณะนี้`,
      thBounce: `ออกทันที`,
      landingsBounceSub: `“ออกทันที” คือสัดส่วนผู้ที่เข้ามาแล้วออกไปโดยไม่มีปฏิสัมพันธ์กับหน้านั้น`,
      searchClicks: `คลิกจากผลค้นหา`,
      searchImpressions: `จำนวนครั้งที่ถูกแสดง`,
      searchCtr: `อัตราการคลิก`,
      searchPosition: `อันดับเฉลี่ย`,
      searchClicksHint: `จำนวนครั้งที่ผู้ค้นหากดเข้าเว็บไซต์จากผลการค้นหา Google`,
      searchImpressionsHint: `จำนวนครั้งที่เว็บไซต์ปรากฏในผลการค้นหา`,
      searchPositionHint: `ตัวเลขน้อยกว่าคืออันดับที่ดีกว่า`,
      searchTrend: `แนวโน้มการค้นหารายวัน`,
      searchTrendSub: `จำนวนการแสดงผลและการคลิกในแต่ละวัน`,
      topQueries: `คำค้นหาที่นำผู้ใช้งานเข้าเว็บไซต์`,
      topQueriesSub: `จัดเรียงได้ทุกคอลัมน์ · ใช้เป็นหัวข้อบทความและคำโฆษณาได้โดยตรง`,
      nearFirstPage: `คำค้นหาที่ใกล้ติดหน้าแรก`,
      nearFirstPageSub: `อยู่อันดับ 8 ถึง 20 และมีผู้ค้นหาจำนวนมาก การปรับปรุงเนื้อหาเพียงเล็กน้อยมีโอกาสขึ้นหน้าแรก`,
      searchPagesCard: `หน้าที่ได้รับคลิกจากการค้นหา`,
      searchPagesSub: `จัดเรียงตามจำนวนคลิก`,
      coverage: `หน้าที่ยังไม่ปรากฏในผลการค้นหา`,
      coverageSub: `เปรียบเทียบรายการหน้าทั้งหมดใน sitemap กับหน้าที่เคยถูกแสดงในผลการค้นหา หน้าที่อยู่ในรายการนี้คือหน้าที่ Google ยังไม่เคยแสดงให้ผู้ค้นหาเห็น ซึ่งมักหมายถึงยังไม่ถูกจัดทำดัชนี`,
      coverageCount: (e, t) => `ปรากฏในผลการค้นหาแล้ว ${e} หน้า จากทั้งหมด ${t} หน้า`,
      coverageAllShown: `ทุกหน้าใน sitemap เคยปรากฏในผลการค้นหาแล้ว`,
      searchRangeNote: (e, t) =>
        `ข้อมูลระหว่างวันที่ ${e} ถึง ${t} · Search Console สรุปข้อมูลล่าช้าประมาณ 2 วัน จึงไม่รวมวันล่าสุด`,
      searchLoading: `กำลังโหลดข้อมูลจาก Search Console`,
      thQuery: `คำค้นหา`,
      thClicks: `คลิก`,
      thImpressions: `การแสดงผล`,
      thCtr: `CTR`,
      thPosition: `อันดับ`,
      thPage: `หน้า`,
      thViews: `การเข้าชม`,
      thUsers: `ผู้ใช้งาน`,
      thAvgTime: `เวลาอ่านเฉลี่ย`,
      thReadToEnd: `อ่านจนจบ`,
      thSessions: `เซสชัน`,
      thCtaClicks: `การคลิกปุ่มติดต่อ`,
      thDate: `วันที่`,
      searchPages: `ค้นหาหน้า เช่น sleep-test`,
      sortBy: `จัดเรียงตาม`,
      showAll: (e) => `แสดงทั้งหมด ${e} หน้า`,
      showAllRows: (e) => `แสดงทั้งหมด ${e} รายการ`,
      showLess: `แสดงเฉพาะ 15 อันดับแรก`,
      noMatch: `ไม่พบหน้าที่ค้นหา`,
      asTable: `แสดงเป็นตาราง`,
      asChart: `แสดงเป็นกราฟ`,
      empty: `ไม่มีข้อมูลในช่วงเวลาที่เลือก`,
      emptyCta: `ไม่มีการคลิกปุ่มติดต่อในช่วงเวลาที่เลือก`,
      sections: {
        home: `หน้าแรก`,
        services: `บริการ`,
        packages: `แพ็กเกจ`,
        campaign: `หน้าแคมเปญโฆษณา`,
        tools: `แบบประเมินตนเอง`,
        blog: `ศูนย์ความรู้`,
        corporate: `องค์กรและชุมชน`,
        about: `เกี่ยวกับเรา`,
        facilities: `สิ่งอำนวยความสะดวก`,
        contact: `ติดต่อเรา`,
        faq: `คำถามที่พบบ่อย`,
        doctors: `แพทย์`,
        other: `อื่น ๆ`,
      },
      channelsNames: {
        line: `LINE`,
        appointment: `หน้าติดต่อ / จองนัดหมาย`,
        phone: `โทรศัพท์`,
        email: `อีเมล`,
        other: `ปุ่มอื่น ๆ`,
        "(not set)": `ไม่ระบุ (คลิกก่อนเริ่มเก็บข้อมูล)`,
      },
      weekdays: [
        `วันอาทิตย์`,
        `วันจันทร์`,
        `วันอังคาร`,
        `วันพุธ`,
        `วันพฤหัสบดี`,
        `วันศุกร์`,
        `วันเสาร์`,
      ],
      weekdaysShort: [`อา.`, `จ.`, `อ.`, `พ.`, `พฤ.`, `ศ.`, `ส.`],
      atHour: (e) => `${String(e).padStart(2, `0`)}.00 น.`,
      deviceNames: {
        mobile: `โทรศัพท์มือถือ`,
        desktop: `คอมพิวเตอร์`,
        tablet: `แท็บเล็ต`,
        smarttv: `สมาร์ตทีวี`,
      },
      reportTitle: `รายงานการตลาด KMC Hospital`,
      reportTaken: `ออกรายงานเมื่อ`,
      footnote: `ข้อมูลนับเฉพาะผู้เข้าชมที่ให้ความยินยอมด้านคุกกี้ตาม PDPA ตัวเลขจึงต่ำกว่าจำนวนผู้เข้าชมจริงเล็กน้อย · ข้อมูลถูกจัดเก็บชั่วคราว 5 นาที · ข้อมูลของวันล่าสุดอาจใช้เวลาถึง 24 ชั่วโมงจึงจะสมบูรณ์`,
      setupTitle: `การตั้งค่ายังไม่สมบูรณ์`,
      setupIntro: `แดชบอร์ดต้องการค่าต่อไปนี้ใน Vercel → Settings → Environment Variables จากนั้น Redeploy หนึ่งครั้ง`,
      setupDocs: `ขั้นตอนการสร้าง service account และการให้สิทธิ์อ่าน GA4 อยู่ใน`,
      errGeneric: `ไม่สามารถดึงข้อมูลจาก GA4 ได้`,
      errFromGoogle: `ข้อความจาก Google`,
      ctaSetupTitle: `ยังไม่สามารถอ่านข้อมูลปุ่มติดต่อได้`,
      ctaSetupSub: `ต้องลงทะเบียน custom dimension ใน GA4 ก่อน`,
      ctaSetupSteps: [
        `GA4 → Admin → Custom definitions → Create custom dimension`,
        `สร้าง 2 รายการ โดยตั้ง Scope = Event ได้แก่ cta_channel และ cta_label`,
        `ข้อมูลจะเริ่มแสดงหลังจากนั้นประมาณ 24 ชั่วโมง และนับตั้งแต่วันที่ตั้งค่าเป็นต้นไป`,
      ],
      ga4Reasons: {
        "no-access": {
          title: `GA4 ยังไม่ได้ให้สิทธิ์อ่านข้อมูลแก่ service account`,
          steps: [
            `GA4 → Admin → เลือก property ของเว็บไซต์นี้`,
            `เปิด Property access management (คอลัมน์ Property ไม่ใช่ Account)`,
            `กดปุ่ม + → Add users → กรอกอีเมลของ service account (ลงท้ายด้วย .iam.gserviceaccount.com)`,
            `เลือก Role เป็น Viewer แล้วกด Add จากนั้นรีเฟรชหน้านี้`,
          ],
        },
        "bad-property": {
          title: `ค่า GA4_PROPERTY_ID อาจไม่ถูกต้อง`,
          steps: [
            `ต้องเป็น Property ID ที่เป็นตัวเลขล้วน ดูได้ที่ GA4 → Admin → Property details`,
            `ไม่ใช่ Measurement ID (G-XXXXXXXXXX) Stream ID หรือ Account ID`,
            `แก้ไขค่าใน Vercel → Settings → Environment Variables แล้ว Redeploy หนึ่งครั้ง`,
          ],
        },
        "bad-key": {
          title: `กุญแจของ service account ใช้งานไม่ได้`,
          steps: [
            `ตรวจสอบว่า GA4_CLIENT_EMAIL และ GA4_PRIVATE_KEY มาจากไฟล์ JSON เดียวกัน`,
            `GA4_PRIVATE_KEY ต้องครบตั้งแต่ -----BEGIN PRIVATE KEY----- ถึง -----END PRIVATE KEY-----`,
            `แก้ไขแล้ว Redeploy หนึ่งครั้ง`,
          ],
        },
      },
      gscReasons: {
        "no-site": {
          title: `ยังไม่ได้เชื่อมต่อ Google Search Console`,
          steps: [
            `เปิด Google Cloud Console → APIs & Services → Library → ค้นหา Google Search Console API แล้วกด Enable`,
            `เปิด search.google.com/search-console → Settings → Users and permissions → Add user`,
            `กรอกอีเมลของ service account (ลงท้ายด้วย .iam.gserviceaccount.com) และเลือก Permission เป็น Full หรือ Restricted`,
            `เพิ่มตัวแปร GSC_SITE_URL ใน Vercel → Settings → Environment Variables โดยใช้ค่า sc-domain:kmc-hospital.com สำหรับ Domain property หรือ https://kmc-hospital.com/ สำหรับ URL prefix property`,
            `Redeploy หนึ่งครั้ง แล้วกลับมาที่หน้านี้`,
          ],
        },
        "no-access": {
          title: `service account ยังไม่มีสิทธิ์อ่านข้อมูล Search Console`,
          steps: [
            `เปิด search.google.com/search-console → Settings → Users and permissions`,
            `กด Add user กรอกอีเมลของ service account แล้วเลือก Permission เป็น Full`,
            `รอประมาณ 1 นาที แล้วรีเฟรชหน้านี้`,
          ],
        },
        "bad-site": {
          title: `ค่า GSC_SITE_URL ไม่ตรงกับ property ที่มีอยู่`,
          steps: [
            `ค่าต้องตรงกับที่ปรากฏใน Search Console ทุกตัวอักษร`,
            `Domain property ใช้รูปแบบ sc-domain:kmc-hospital.com`,
            `URL prefix property ใช้รูปแบบ https://kmc-hospital.com/ โดยต้องมีเครื่องหมาย / ปิดท้าย`,
            `แก้ไขใน Vercel → Settings → Environment Variables แล้ว Redeploy หนึ่งครั้ง`,
          ],
        },
        "api-off": {
          title: `ยังไม่ได้เปิดใช้งาน Google Search Console API`,
          steps: [
            `เปิด Google Cloud Console → เลือกโครงการเดียวกับที่สร้าง service account`,
            `APIs & Services → Library → ค้นหา Google Search Console API → กด Enable`,
            `รอประมาณ 1 นาที แล้วรีเฟรชหน้านี้`,
          ],
        },
        "too-recent": {
          title: `ช่วงเวลาที่เลือกยังไม่มีข้อมูลใน Search Console`,
          steps: [
            `Search Console สรุปข้อมูลล่าช้ากว่า Google Analytics ประมาณ 2 วัน`,
            `กรุณาเลือกช่วงเวลาที่สิ้นสุดก่อนหน้านี้อย่างน้อย 2 วัน`,
          ],
        },
        failed: {
          title: `ไม่สามารถอ่านข้อมูลจาก Search Console ได้`,
          steps: [`กรุณาลองใหม่อีกครั้ง หากยังไม่สำเร็จ โปรดตรวจสอบข้อความจาก Google ด้านล่าง`],
        },
      },
      sampleTitle: `ข้อมูลตัวอย่าง ไม่ใช่ตัวเลขจริง`,
      sampleBody: `ขณะนี้ตั้งค่า GA4_SAMPLE=1 ไว้ กรุณาลบตัวแปรนี้ออกจาก Vercel และกรอกข้อมูล service account เพื่อแสดงข้อมูลจริง`,
    },
    en: {
      title: `Marketing Dashboard`,
      source: `Data from Google Analytics 4`,
      rangeSuffix: ``,
      updating: `Updating`,
      loading: `Loading data`,
      signOut: `Sign out`,
      downloadPdf: `Download PDF report`,
      preparingPdf: `Preparing report`,
      themeToDark: `Dark mode`,
      themeToLight: `Light mode`,
      rangeGroup: `Date range`,
      sectionGroup: `Sections`,
      days7: `7 days`,
      days28: `28 days`,
      days90: `90 days`,
      rangeMonth: `Monthly`,
      rangeCustom: `Custom`,
      rangeMonthLabel: `Month`,
      rangeFrom: `From`,
      rangeTo: `To`,
      rangeComparedMonth: `compared with the month before`,
      rangeComparedDays: (e) => `compared with the ${e} days before this period`,
      rangeOf: (e, t) => `${e} to ${t}`,
      lockIntro: `Internal use only. Please enter the password to continue.`,
      password: `Password`,
      signIn: `Sign in`,
      wrongPassword: `Incorrect password`,
      lockedOut: (e) => `Too many incorrect attempts. Please try again in ${e} minutes.`,
      secOverview: `Overview`,
      secPages: `Pages`,
      secAudience: `Audience`,
      secTraffic: `Traffic & devices`,
      secSearch: `Search`,
      secContact: `Contact`,
      users: `Users`,
      sessions: `Sessions`,
      views: `Page views`,
      ctaClicks: `Contact button clicks`,
      avgDuration: `Average session duration`,
      viewsPerSession: `Pages per session`,
      contactRate: `Contact rate`,
      vsPrevious: `vs previous period`,
      noPrevious: `No previous period to compare`,
      unchanged: `No change`,
      unitTimes: ``,
      unitSessions: ``,
      newUsers: `New users`,
      returningUsers: `Returning users`,
      engagementRate: `Engagement rate`,
      downloadCsv: `Download CSV`,
      live: `Active now`,
      liveSub: `People on the site at this moment`,
      dailyUsers: `Daily users`,
      dailyUsersSub: `How visitor numbers move day by day`,
      topPages: `Most visited pages`,
      topPagesSub: `Top five; the full list is under “Pages”`,
      topPagesFull: `Most visited pages`,
      channels: `How people arrive`,
      channelsSub: `Top five; details are under “Traffic & devices”`,
      channelsFull: `How people arrive`,
      channelsFullSub: `Counted in sessions`,
      sectionShare: `Interest by section`,
      sectionShareSub: `Page views per section, Thai and English counted together`,
      landings: `Landing pages`,
      landingsSub: `The first page of each visit, so campaigns can be judged by where they land`,
      allPages: `Every page`,
      allPagesSub: `Searchable and sortable · average reading time is time on that page per user · read to end is the share who scrolled to 90%`,
      devices: `Devices`,
      devicesSub: `Which screen the site is designed for first`,
      ctaChannel: `Contact channel chosen`,
      ctaChannelSub: `Counted from contact buttons on the site`,
      ctaPlacement: `Where the clicked button sits`,
      ctaPlacementSub: `Primary, secondary, or inside a self-assessment: which button deserves the emphasis`,
      ctaPlacementUnavailable: `Not readable yet. Register a custom dimension cta_placement (Scope = Event) in GA4; data appears in about 24 hours.`,
      placementNames: {
        primary: `Primary page button`,
        secondary: `Secondary page button`,
        tool: `Self-assessment button`,
        floating: `Floating LINE / call button`,
        appointment: `Appointment section, contact page`,
        header: `Top menu`,
        footer: `Footer`,
        content: `Link in the text`,
        "(not set)": `Not set (clicked before collection began)`,
      },
      ctaLabels: `Most clicked buttons`,
      ctaLabelsSub: `Which wording actually works`,
      ctaPages: `Pages that lead to contact`,
      ctaPagesSub: `Where advertising is worth its money`,
      contactRateHint: `Share of users who clicked a contact button`,
      ctaTileHint: `Every way in: phone, LINE, email and the contact page, from anywhere on the site`,
      ctaTileUnavailable: `Not readable yet; see the “Contact” section`,
      highlightsTitle: `Highlights`,
      highlightsSub: `What stands out in the selected period, picked from the dashboard’s figures automatically · select a card for the detail`,
      hl: {
        usersUp: `More users than the previous period`,
        usersDown: `Fewer users than the previous period`,
        bestChannel: (e) => `The highest contact rate came through ${e}`,
        bestPage: (e) => `The page that turns visitors into contacts best is ${e}`,
        fixPage: (e) =>
          `${e} is busy but few get in touch: worth reworking its contact buttons or content`,
        busiest: (e) => `The busiest hour is on ${e}`,
        topCity: (e) => `of sessions came from ${e}`,
        mobile: `of sessions were on a mobile phone`,
      },
      hlSeeMore: `See the detail`,
      hlEarly: `Little data yet`,
      legendCurrent: `This period`,
      legendPrevious: `Previous period`,
      smallSample: (e) =>
        `Only ${e} contact clicks in this period, so the grouping below can shift easily. Treat it as a hint, and look again once there is more data.`,
      journeyTitle: `From visit to contact`,
      journeySub: `Users who reached each step, as a share of all visitors · some get in touch through the floating buttons without passing the earlier steps`,
      journeySteps: {
        visitors: `Visited the site`,
        browsed: `Viewed a service, package or campaign page`,
        contactPage: `Opened the contact page`,
        contacted: `Got in touch (phone, LINE, email or contact page)`,
      },
      channelQuality: `Channel quality`,
      channelQualitySub: `Not which channel brings the most people, but which brings people who get in touch · across is sessions, up is contact rate, the dashed line is the site average`,
      axisSessions: `Sessions`,
      siteAverage: `Site average`,
      thContacts: `Contacts`,
      thContactRate: `Contact rate`,
      thVerdict: `Verdict`,
      verdicts: {
        star: `Star`,
        fix: `Busy, few contacts`,
        grow: `Converts, needs traffic`,
        review: `Review`,
      },
      contentMatrix: `Pages sorted by results`,
      contentMatrixSub: `Views against contact rate for the 30 most visited pages, in four groups with what to do about each · figures beside a page are views · contact rate`,
      matrixHints: {
        star: `Busy and converting. Keep it, and use it as the model for the others.`,
        fix: `Busy but few get in touch. Make the contact buttons visible sooner, or add what helps people decide, such as price and steps.`,
        grow: `Converts well but few see it. Bring people to it with ads, SEO or shared links.`,
        review: `Quiet and not converting. Ask who it is for, or fold it into another page.`,
      },
      matrixEmpty: `No pages in this group`,
      unitPages: `pages`,
      andMore: (e) => `and ${e} more`,
      lowCtr: `Shown often, clicked rarely`,
      lowCtrSub: `On the first page of results but clicked at under half the rough norm for that position · rewrite the title and meta description of the page shown so they match what people searched for`,
      lowCtrEmpty: `No queries meet the criteria in this period`,
      thPageToFix: `Page to fix`,
      brandSplit: `Searches for the hospital’s name against everything else`,
      brandSplitSub: `Queries naming KMC show brand awareness; the rest are people searching a service or a symptom who found the site. Growth in the second is the site finding new patients.`,
      brandQueries: `Searched the hospital’s name`,
      nonBrandQueries: `Searched anything else`,
      brandImpressions: `Impressions`,
      brandClicks: `Clicks`,
      lineTitle: `LINE Official Account @kmchealth`,
      lineAsOf: (e) => `As of ${e} · LINE completes each day about a day late`,
      lineReach: `Reachable friends`,
      lineReachHint: `All friends less those who blocked the account: the people a broadcast actually reaches`,
      lineJoined: `New friends in this period`,
      lineBlocked: `Blocks in this period`,
      lineBlockedHint: `A rise after a broadcast can mean sending too often, or off-interest content`,
      lineQuota: `Messages used this month`,
      lineQuotaOf: (e) => `of a ${e}-message monthly allowance`,
      lineQuotaUnlimited: `The current plan has no message limit`,
      webToLine: `People who went to LINE from the website`,
      webToLineHeadline: `people went to LINE from the website in this period`,
      webToLineClicksNote: (e) => `${e} clicks in all (some clicked more than once)`,
      webToLineByPage: `From which page`,
      webToLinePeople: `People`,
      webToLineClicks: `Clicks`,
      webToLineNone: `Nobody went to LINE from the website in this period`,
      webToLineNote: `Counts only visitors who accepted cookies · someone who clicked on two pages is counted on both`,
      webToLineNoCta: `Not countable until the cta_channel custom dimension is registered in GA4`,
      unitPeople: ``,
      pageNames: {
        "/": `Home`,
        "/contact": `Contact`,
        "/packages": `Packages`,
        "/about": `About us`,
        "/faq": `FAQ`,
        "/blog": `Knowledge centre`,
        "/facilities": `Facilities`,
        "/corporate": `Organizations`,
      },
      lineWho: `Who follows`,
      lineWhoSub: `LINE’s estimated shares, for planning content and targeting broadcasts`,
      lineWhoUnavailable: `LINE does not show follower demographics until the account has enough friends`,
      lineGender: `Gender`,
      lineAge: `Age`,
      lineArea: `Area`,
      lineGenders: {
        male: `Male`,
        female: `Female`,
        unknown: `Unknown`,
      },
      lineAges: {
        from0to14: `Under 15`,
        from15to19: `15–19`,
        from20to24: `20–24`,
        from25to29: `25–29`,
        from30to34: `30–34`,
        from35to39: `35–39`,
        from40to44: `40–44`,
        from45to49: `45–49`,
        from50: `50 and over`,
        unknown: `Unknown`,
      },
      lineLoading: `Loading LINE data`,
      lineReasons: {
        "no-token": {
          title: `The LINE Official Account is not connected yet`,
          steps: [
            `manager.line.biz → @kmchealth → Settings → Messaging API, and copy the Channel ID and Channel secret`,
            `Add LINE_CHANNEL_ID and LINE_CHANNEL_SECRET in Vercel → Settings → Environment Variables, then redeploy once`,
            `Do not issue or reissue any token: the dashboard makes a short-lived one for each read, so other systems using this account are not affected`,
            `Leave the Webhook URL as it is: the dashboard uses no webhook and only reads statistics`,
          ],
        },
        "bad-token": {
          title: `LINE does not accept the Channel ID or Channel secret`,
          steps: [
            `Check LINE_CHANNEL_ID and LINE_CHANNEL_SECRET in Vercel match the @kmchealth Messaging API page exactly`,
            `If the Channel secret has been reissued, update it in Vercel too, then redeploy once`,
          ],
        },
        unready: {
          title: `LINE has not finished counting the latest day`,
          steps: [`Please try again later; LINE usually completes each day within a day`],
        },
        "rate-limited": {
          title: `Too many requests to LINE`,
          steps: [`Please wait a moment, then refresh the page`],
        },
        failed: {
          title: `LINE data cannot be read just now`,
          steps: [`Please try again; if it keeps failing, check the message below`],
        },
      },
      utmBuilder: `Build a trackable campaign link`,
      utmBuilderSub: `Publish the link built here and the “Tagged UTM campaigns” card above fills in · the channel names are fixed, so one campaign does not arrive as three differently spelled ones`,
      utmChannel: `Where it will be published`,
      utmDestination: `Destination page`,
      utmSource: `Source (utm_source)`,
      utmMedium: `Medium (utm_medium)`,
      utmCampaign: `Campaign name (utm_campaign)`,
      utmCampaignPlaceholder: `sleep-test-oct`,
      utmCampaignHint: `Name it for the campaign and the month; reuse the same name across every channel of one campaign`,
      utmContent: `Variant (utm_content) — optional`,
      utmContentPlaceholder: `post-1`,
      utmContentHint: `Tells apart which post, or which button in one post, did the work`,
      utmResult: `Your link`,
      utmCopy: `Copy link`,
      utmCopied: `Copied`,
      utmIncomplete: `Enter a campaign name first`,
      utmChannels: {
        line: `LINE (broadcast or message)`,
        facebook: `Facebook (organic post)`,
        instagram: `Instagram`,
        tiktok: `TikTok`,
        googleAds: `Google Ads`,
        facebookAds: `Facebook / Instagram Ads`,
        email: `Email`,
        print: `Print or QR code`,
        partner: `Partner website`,
        other: `Other (type it in)`,
      },
      newVsReturningHint: `Share of users visiting for the first time`,
      returningHint: `People who had been here before and came back`,
      engagementRateHint: `Sessions lasting over 10 seconds or covering more than one page`,
      cities: `Where visitors are`,
      citiesSub: `Whether the interest is within travelling distance of the hospital`,
      weekHeat: `When people visit`,
      weekHeatSub: `Darker is busier — when to publish, and when someone should be ready to answer the phone`,
      busiest: `Busiest hours`,
      sources: `Sources in detail`,
      sourcesSub: `The site or app people came from, paired with the kind of visit`,
      campaigns: `Tagged UTM campaigns`,
      campaignsSub: `Only links carrying a utm_campaign parameter are counted`,
      emptyCampaigns: `No tagged campaign links found. To measure a campaign, append ?utm_source=line&utm_medium=social&utm_campaign=name to the link you publish.`,
      languageSplit: `Language of the pages viewed`,
      languageSplitSub: `Whether the English pages earn the care they take`,
      langThai: `Thai pages`,
      langEnglish: `English pages`,
      audienceUnavailable: `Audience data cannot be read at the moment`,
      thBounce: `Bounced`,
      landingsBounceSub: `“Bounced” is the share who left without interacting with the page`,
      searchClicks: `Clicks from search`,
      searchImpressions: `Times shown`,
      searchCtr: `Click-through rate`,
      searchPosition: `Average position`,
      searchClicksHint: `Times someone opened the site from Google results`,
      searchImpressionsHint: `Times the site appeared in results`,
      searchPositionHint: `Lower is better`,
      searchTrend: `Daily search trend`,
      searchTrendSub: `Impressions and clicks per day`,
      topQueries: `What people searched for`,
      topQueriesSub: `Sortable by any column · article titles and ad copy, straight from the source`,
      nearFirstPage: `Nearly on the first page`,
      nearFirstPageSub: `Ranked 8 to 20 with real demand, where a small improvement can reach the first page`,
      searchPagesCard: `Pages earning clicks from search`,
      searchPagesSub: `Ordered by clicks`,
      coverage: `Pages never shown in search`,
      coverageSub: `The sitemap compared against the pages search has shown. A page listed here has never been put in front of a searcher, which usually means it is not indexed yet.`,
      coverageCount: (e, t) => `${e} of ${t} pages have appeared in search results`,
      coverageAllShown: `Every page in the sitemap has appeared in search results`,
      searchRangeNote: (e, t) =>
        `${e} to ${t} · Search Console completes a day about two days late, so the latest day is left out`,
      searchLoading: `Loading Search Console data`,
      thQuery: `Query`,
      thClicks: `Clicks`,
      thImpressions: `Impressions`,
      thCtr: `CTR`,
      thPosition: `Position`,
      thPage: `Page`,
      thViews: `Views`,
      thUsers: `Users`,
      thAvgTime: `Avg. reading time`,
      thReadToEnd: `Read to end`,
      thSessions: `Sessions`,
      thCtaClicks: `Contact clicks`,
      thDate: `Date`,
      searchPages: `Search pages, e.g. sleep-test`,
      sortBy: `Sort by`,
      showAll: (e) => `Show all ${e} pages`,
      showAllRows: (e) => `Show all ${e} rows`,
      showLess: `Show top 15 only`,
      noMatch: `No page matches that search`,
      asTable: `View as table`,
      asChart: `View as chart`,
      empty: `No data for the selected period`,
      emptyCta: `No contact button clicks in the selected period`,
      sections: {
        home: `Home`,
        services: `Services`,
        packages: `Packages`,
        campaign: `Campaign landing pages`,
        tools: `Self-assessments`,
        blog: `Knowledge centre`,
        corporate: `Organizations & communities`,
        about: `About us`,
        facilities: `Facilities`,
        contact: `Contact`,
        faq: `FAQ`,
        doctors: `Doctors`,
        other: `Other`,
      },
      channelsNames: {
        line: `LINE`,
        appointment: `Contact / appointment page`,
        phone: `Phone`,
        email: `Email`,
        other: `Other buttons`,
        "(not set)": `Not set (clicked before collection began)`,
      },
      weekdays: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
      weekdaysShort: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
      atHour: (e) => `${String(e).padStart(2, `0`)}:00`,
      deviceNames: {
        mobile: `Mobile`,
        desktop: `Desktop`,
        tablet: `Tablet`,
        smarttv: `Smart TV`,
      },
      reportTitle: `KMC Hospital marketing report`,
      reportTaken: `Generated`,
      footnote: `Counts only visitors who accepted cookies (PDPA), so the real figures are slightly higher · data is cached for 5 minutes · the most recent day can take up to 24 hours to complete`,
      setupTitle: `Setup is not complete`,
      setupIntro: `The dashboard needs these values in Vercel → Settings → Environment Variables, then one redeploy`,
      setupDocs: `Creating the service account and granting GA4 access is covered in`,
      errGeneric: `Could not read data from GA4`,
      errFromGoogle: `Message from Google`,
      ctaSetupTitle: `Contact button data is not readable yet`,
      ctaSetupSub: `The custom dimensions have to be registered in GA4 first`,
      ctaSetupSteps: [
        `GA4 → Admin → Custom definitions → Create custom dimension`,
        `Create two with Scope = Event: cta_channel and cta_label`,
        `Data appears about 24 hours later, counted from the day it was set up`,
      ],
      ga4Reasons: {
        "no-access": {
          title: `The service account has not been granted access to the property`,
          steps: [
            `GA4 → Admin → select this website’s property`,
            `Open Property access management (the Property column, not Account)`,
            `Press + → Add users → paste the service account address (ends in .iam.gserviceaccount.com)`,
            `Set Role to Viewer, press Add, then refresh this page`,
          ],
        },
        "bad-property": {
          title: `GA4_PROPERTY_ID looks wrong`,
          steps: [
            `It is the numeric Property ID, under GA4 → Admin → Property details`,
            `Not the Measurement ID (G-XXXXXXXXXX), the Stream ID or the Account ID`,
            `Fix it in Vercel → Settings → Environment Variables, then redeploy once`,
          ],
        },
        "bad-key": {
          title: `The service account key cannot be used`,
          steps: [
            `Check that GA4_CLIENT_EMAIL and GA4_PRIVATE_KEY come from the same JSON file`,
            `GA4_PRIVATE_KEY must run from -----BEGIN PRIVATE KEY----- to -----END PRIVATE KEY-----`,
            `Redeploy once after fixing it`,
          ],
        },
      },
      gscReasons: {
        "no-site": {
          title: `Google Search Console is not connected yet`,
          steps: [
            `Google Cloud Console → APIs & Services → Library → search for Google Search Console API → Enable`,
            `search.google.com/search-console → Settings → Users and permissions → Add user`,
            `Paste the service account address (ends in .iam.gserviceaccount.com) and give it Full or Restricted permission`,
            `Add GSC_SITE_URL in Vercel → Settings → Environment Variables: sc-domain:kmc-hospital.com for a Domain property, or https://kmc-hospital.com/ for a URL prefix property`,
            `Redeploy once, then come back to this page`,
          ],
        },
        "no-access": {
          title: `The service account cannot read this Search Console property`,
          steps: [
            `search.google.com/search-console → Settings → Users and permissions`,
            `Add user → paste the service account address → Permission: Full`,
            `Wait a minute, then refresh this page`,
          ],
        },
        "bad-site": {
          title: `GSC_SITE_URL does not match an existing property`,
          steps: [
            `It has to match what Search Console shows, character for character`,
            `A Domain property reads sc-domain:kmc-hospital.com`,
            `A URL prefix property reads https://kmc-hospital.com/, trailing slash included`,
            `Fix it in Vercel → Settings → Environment Variables, then redeploy once`,
          ],
        },
        "api-off": {
          title: `The Google Search Console API is not enabled`,
          steps: [
            `Google Cloud Console → the same project as the service account`,
            `APIs & Services → Library → Google Search Console API → Enable`,
            `Wait a minute, then refresh this page`,
          ],
        },
        "too-recent": {
          title: `Search Console has nothing for that period yet`,
          steps: [
            `Search Console completes a day about two days later than Google Analytics`,
            `Choose a period that ends at least two days ago`,
          ],
        },
        failed: {
          title: `Search Console could not be read`,
          steps: [`Please try again; if it keeps failing, check the message from Google below`],
        },
      },
      sampleTitle: `Sample data, not real figures`,
      sampleBody: `GA4_SAMPLE=1 is set. Remove it in Vercel and fill in the service account to see real data.`,
    },
  },
  Ce = {
    Bangkok: `กรุงเทพมหานคร`,
    Nonthaburi: `นนทบุรี`,
    "Samut Prakan": `สมุทรปราการ`,
    "Pathum Thani": `ปทุมธานี`,
    "Nakhon Pathom": `นครปฐม`,
    "Samut Sakhon": `สมุทรสาคร`,
    "Chon Buri": `ชลบุรี`,
    Chonburi: `ชลบุรี`,
    "Chiang Mai": `เชียงใหม่`,
    "Chiang Rai": `เชียงราย`,
    "Nakhon Ratchasima": `นครราชสีมา`,
    "Khon Kaen": `ขอนแก่น`,
    "Udon Thani": `อุดรธานี`,
    "Ubon Ratchathani": `อุบลราชธานี`,
    Rayong: `ระยอง`,
    "Hat Yai": `หาดใหญ่`,
    Songkhla: `สงขลา`,
    Phuket: `ภูเก็ต`,
    "Surat Thani": `สุราษฎร์ธานี`,
    "Nakhon Si Thammarat": `นครศรีธรรมราช`,
    Ayutthaya: `พระนครศรีอยุธยา`,
    "Phra Nakhon Si Ayutthaya": `พระนครศรีอยุธยา`,
    Saraburi: `สระบุรี`,
    Lampang: `ลำปาง`,
    Phitsanulok: `พิษณุโลก`,
    "Nakhon Sawan": `นครสวรรค์`,
    Chachoengsao: `ฉะเชิงเทรา`,
    Ratchaburi: `ราชบุรี`,
    Kanchanaburi: `กาญจนบุรี`,
    Phetchaburi: `เพชรบุรี`,
  },
  we = (0, p.createContext)(`th`);
function z() {
  let e = (0, p.useContext)(we);
  return {
    lang: e,
    c: R[e] || R.th,
  };
}
var Te = 60,
  B = (e) => ({
    a: 0,
    k: e,
  }),
  Ee = {
    i: {
      x: [1],
      y: [1],
    },
    o: {
      x: [0],
      y: [0],
    },
  },
  De = {
    i: {
      x: [0.45, 0.45, 0.45],
      y: [1, 1, 1],
    },
    o: {
      x: [0.55, 0.55, 0.55],
      y: [0, 0, 0],
    },
  };
function V({
  position: e = [0, 0],
  scale: t = [100, 100],
  rotation: n = 0,
  opacity: r = 100,
} = {}) {
  return {
    o: typeof r == `number` ? B(r) : r,
    r: typeof n == `number` ? B(n) : n,
    p: B([...e, 0]),
    a: B([0, 0, 0]),
    s: Array.isArray(t) ? B([...t, 100]) : t,
  };
}
var Oe = {
    ty: `tr`,
    p: B([0, 0]),
    a: B([0, 0]),
    s: B([100, 100]),
    r: B(0),
    o: B(100),
    sk: B(0),
    sa: B(0),
  },
  ke = (e, t = 100) => ({
    ty: `fl`,
    c: B([...e, 1]),
    o: B(t),
    r: 1,
  }),
  Ae = (e, t, n = 100) => ({
    ty: `st`,
    c: B([...e, 1]),
    o: B(n),
    w: B(t),
    lc: 2,
    lj: 2,
  }),
  je = 0;
function H(e, t, n, r) {
  return (
    (je += 1),
    {
      ddd: 0,
      ind: je,
      ty: 4,
      nm: e,
      sr: 1,
      ks: n,
      ao: 0,
      shapes: [
        {
          ty: `gr`,
          it: [...t, Oe],
        },
      ],
      ip: 0,
      op: r,
      st: 0,
      bm: 0,
    }
  );
}
function Me(e, t, n, r, i) {
  return {
    v: `5.7.4`,
    fr: Te,
    ip: 0,
    op: r,
    w: t,
    h: n,
    nm: e,
    ddd: 0,
    assets: [],
    layers: i,
  };
}
function Ne(e) {
  let t = String(e || ``).trim(),
    n = t.match(/^#([0-9a-f]{6})$/i);
  if (n) return [0, 2, 4].map((e) => parseInt(n[1].slice(e, e + 2), 16) / 255);
  let r = t.match(/rgba?\(([^)]+)\)/i);
  return r
    ? r[1]
        .split(`,`)
        .slice(0, 3)
        .map((e) => Number(e.trim()) / 255)
    : [42 / 255, 120 / 255, 214 / 255];
}
function Pe(e) {
  je = 0;
  let t = Ne(e),
    n = Array.from(
      {
        length: 7,
      },
      (e, n) => {
        let r = Array.from(
          {
            length: 7,
          },
          (e, t) => {
            let r = (t / 6) * 60,
              i = 28 + 72 * (0.5 + 0.5 * Math.sin((2 * Math.PI * r) / 60 - n * 0.85));
            return {
              t: r,
              s: [100, Math.round(i), 100],
              ...De,
            };
          },
        );
        return (
          (r[r.length - 1] = {
            t: 60,
            s: r[0].s,
          }),
          H(
            `bar ${n + 1}`,
            [
              {
                ty: `rc`,
                d: 1,
                s: B([8, 38]),
                p: B([0, -38 / 2]),
                r: B(3),
              },
              ke(t, 100 - n * 8),
            ],
            V({
              position: [8 + n * 16 + 8 / 2, 44],
              scale: {
                a: 1,
                k: r,
              },
            }),
            60,
          )
        );
      },
    ),
    r = H(
      `baseline`,
      [
        {
          ty: `rc`,
          d: 1,
          s: B([108, 1.5]),
          p: B([0, 0]),
          r: B(1),
        },
        ke(t, 25),
      ],
      V({
        position: [120 / 2, 46],
      }),
      60,
    );
  return Me(`dashboard loader`, 120, 48, 60, [...n, r]);
}
function Fe(e) {
  je = 0;
  let t = Ne(e),
    n = (e, n, r = 1.5) =>
      H(
        `ring ${e}`,
        [
          {
            ty: `el`,
            d: 1,
            s: B([e, e]),
            p: B([0, 0]),
          },
          Ae(t, r, n),
        ],
        V({
          position: [40, 40],
        }),
        144,
      ),
    r = H(
      `sweep`,
      [
        {
          ty: `sh`,
          ks: B({
            i: [
              [0, 0],
              [0, 0],
            ],
            o: [
              [0, 0],
              [0, 0],
            ],
            v: [
              [0, 0],
              [0, -30],
            ],
            c: !1,
          }),
        },
        Ae(t, 2, 70),
      ],
      V({
        position: [40, 40],
        rotation: {
          a: 1,
          k: [
            {
              t: 0,
              s: [0],
              ...Ee,
            },
            {
              t: 144,
              s: [360],
            },
          ],
        },
      }),
      144,
    );
  return Me(`dashboard empty`, 80, 80, 144, [
    H(
      `blip`,
      [
        {
          ty: `el`,
          d: 1,
          s: B([5, 5]),
          p: B([0, 0]),
        },
        ke(t, 100),
      ],
      V({
        position: [58, 49],
        opacity: {
          a: 1,
          k: [
            {
              t: 0,
              s: [0],
              ...Ee,
            },
            {
              t: 44,
              s: [0],
              ...Ee,
            },
            {
              t: 50,
              s: [90],
              ...Ee,
            },
            {
              t: 110,
              s: [0],
              ...Ee,
            },
            {
              t: 144,
              s: [0],
            },
          ],
        },
      }),
      144,
    ),
    H(
      `centre`,
      [
        {
          ty: `el`,
          d: 1,
          s: B([5, 5]),
          p: B([0, 0]),
        },
        ke(t, 90),
      ],
      V({
        position: [40, 40],
      }),
      144,
    ),
    r,
    n(60, 30),
    n(36, 20),
    n(12, 15, 1),
  ]);
}
var U = o(),
  Ie = {
    loader: Pe,
    empty: Fe,
  },
  Le = {
    loader: 12,
    empty: 50,
  },
  Re = null,
  ze = () => (
    (Re ||= r(
      () =>
        import("../vendor/lottie_light-Cwi94DeK.js")
          .then((t) => e(t.default, 1))
          .then((e) => e.default || e),
      __vite__mapDeps([0, 1]),
    )),
    Re
  );
function Be({ scene: e, className: t = `` }) {
  let n = (0, p.useRef)(null);
  return (
    (0, p.useEffect)(() => {
      let t = n.current;
      if (!t) return;
      let r = null,
        i = !1,
        a = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        o = (n) => {
          if (i) return;
          r?.destroy();
          let o = getComputedStyle(t).getPropertyValue(`--dash-series`);
          ((r = n.loadAnimation({
            container: t,
            renderer: `svg`,
            loop: !a,
            autoplay: !a,
            animationData: Ie[e](o),
            rendererSettings: {
              preserveAspectRatio: `xMidYMid meet`,
            },
          })),
            a && r.goToAndStop(Le[e], !0));
        },
        s = null;
      return (
        ze()
          .then((e) => {
            (o(e),
              (s = new MutationObserver(() => o(e))),
              s.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: [`data-dash-theme`],
              }));
          })
          .catch(() => {}),
        () => {
          ((i = !0), s?.disconnect(), r?.destroy());
        }
      );
    }, [e]),
    (<div ref={n} className={t} aria-hidden={`true`} />)
  );
}
var W = `var(--dash-series)`,
  G = (e) => Math.round(e || 0).toLocaleString(`th-TH`),
  K = (e, t = 1) => `${((e || 0) * 100).toFixed(t)}%`;
function Ve(e, t = `th`) {
  let n = Math.round(e || 0);
  return t === `en`
    ? n >= 60
      ? `${Math.floor(n / 60)}m ${n % 60}s`
      : `${n}s`
    : n >= 60
      ? `${Math.floor(n / 60)} นาที ${n % 60} วินาที`
      : `${n} วินาที`;
}
function He(e, { long: t = !1, lang: n = `th` } = {}) {
  let r = new Date(`${e.slice(0, 4)}-${e.slice(4, 6)}-${e.slice(6, 8)}T00:00:00`),
    i = n === `en` ? `en-GB` : `th-TH`;
  return r.toLocaleDateString(
    i,
    t
      ? {
          day: `numeric`,
          month: `long`,
        }
      : {
          day: `numeric`,
          month: `short`,
        },
  );
}
var Ue = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
function We(e) {
  let [t, n] = (0, p.useState)(e),
    r = (0, p.useRef)(e);
  return (
    (0, p.useEffect)(() => {
      if (Ue()) {
        (n(e), (r.current = e));
        return;
      }
      let t = {
        n: r.current,
      };
      r.current = e;
      let i = u(t, {
        n: e,
        duration: 700,
        easing: `easeOutCubic`,
        onUpdate: () => n(t.n),
      });
      return () => i.pause();
    }, [e]),
    t
  );
}
function Ge({ now: e, before: t, invert: n = !1 }) {
  let { c: r } = z();
  if (!t) return <span className={`text-sm text-[var(--dash-muted)]`}>{r.noPrevious}</span>;
  let i = ((e - t) / t) * 100,
    a = Math.abs(i) < 0.5;
  return (
    <span
      className={`inline-flex flex-wrap items-center gap-x-1 text-sm font-medium`}
      style={{
        color: a
          ? `var(--dash-muted)`
          : (n ? i < 0 : i > 0)
            ? `var(--dash-up)`
            : `var(--dash-down)`,
      }}
    >
      <span className={`whitespace-nowrap`}>
        <span aria-hidden={`true`}>{a ? `→` : i > 0 ? `↑` : `↓`}</span>
        {` `}
        {a ? r.unchanged : `${Math.abs(i).toFixed(i >= 10 ? 0 : 1)}%`}
      </span>
      <span className={`whitespace-nowrap font-normal text-[var(--dash-muted)]`}>
        {r.vsPrevious}
      </span>
    </span>
  );
}
function _Element2({
  label: e,
  value: t,
  previous: n,
  format: r = G,
  invert: i = !1,
  hint: a,
  accent: o = `var(--dash-c1)`,
  trend: s,
}) {
  let c = We(t);
  return (
    <div
      data-tile={!0}
      className={`relative overflow-hidden rounded-2xl border border-[var(--dash-border)] bg-[var(--dash-card)] p-6`}
    >
      <span
        className={`absolute inset-x-0 top-0 h-1`}
        style={{
          background: o,
        }}
        aria-hidden={`true`}
      />
      <p className={`text-sm text-[var(--dash-muted)]`}>{e}</p>
      <div className={`mt-1 flex items-end justify-between gap-3`}>
        <p className={`font-display text-3xl font-semibold text-[var(--dash-ink)] tabular-nums`}>
          {r(c)}
        </p>
        <Ke values={s} color={o} />
      </div>
      {n !== null && (
        <div className={`mt-2`}>
          <Ge now={t} before={n} invert={i} />
        </div>
      )}
      {a && <p className={`mt-2 text-xs text-[var(--dash-muted)] leading-relaxed`}>{a}</p>}
    </div>
  );
}
function Ke({ values: e, color: t = W, width: n = 96, height: r = 32 }) {
  let i = (0, p.useRef)(null);
  if (
    ((0, p.useEffect)(() => {
      let e = i.current;
      if (!e || Ue()) return;
      let t = e.getTotalLength(),
        n = u(e, {
          strokeDasharray: [`0 ${t}`, `${t} 0`],
          duration: 900,
          easing: `easeOutQuart`,
        });
      return () => n.pause();
    }, [e]),
    !e || e.length < 2)
  )
    return null;
  let a = Math.max(...e),
    o = Math.min(...e),
    s = a - o || 1,
    c = (t) => 3 + (t / (e.length - 1)) * (n - 6),
    l = (e) => (a === o ? r / 2 : 3 + (1 - (e - o) / s) * (r - 6)),
    d = e.map((e, t) => `${t ? `L` : `M`}${c(t).toFixed(1)} ${l(e).toFixed(1)}`).join(` `);
  return (
    <svg viewBox={`0 0 ${n} ${r}`} width={n} height={r} className={`shrink-0`} aria-hidden={`true`}>
      <path
        d={`${d} L${c(e.length - 1).toFixed(1)} ${r} L${c(0).toFixed(1)} ${r} Z`}
        fill={t}
        fillOpacity={`0.1`}
      />
      <path
        ref={i}
        d={d}
        fill={`none`}
        stroke={t}
        strokeWidth={`2`}
        strokeLinecap={`round`}
        strokeLinejoin={`round`}
      />
      <circle cx={c(e.length - 1)} cy={l(e[e.length - 1])} r={`2.5`} fill={t} />
    </svg>
  );
}
function _Element4({ data: e, height: t = 260, labels: n, previous: r }) {
  let { lang: i, c: a } = z(),
    o = n?.primary || a.users,
    s = n?.secondary || a.sessions,
    [c, l] = (0, p.useState)(null),
    [d, f] = (0, p.useState)(!1),
    m = (0, p.useRef)(null),
    h = (0, p.useRef)(null),
    g = (0, p.useRef)(null),
    _ = (0, p.useId)(),
    [v, y] = (0, p.useState)(960);
  if (
    ((0, p.useEffect)(() => {
      let e = h.current;
      if (!e || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(([e]) => y(Math.max(280, e.contentRect.width)));
      return (t.observe(e), () => t.disconnect());
    }, [d]),
    (0, p.useEffect)(() => {
      let e = g.current;
      if (!e || d || Ue()) return;
      let t = e.getTotalLength(),
        n = u(e, {
          strokeDasharray: [`0 ${t}`, `${t} 0`],
          duration: 900,
          easing: `easeOutQuart`,
        });
      return () => n.pause();
    }, [d, e, v]),
    !e?.length)
  )
    return <Ze />;
  let b = v,
    x = t,
    S = {
      top: 16,
      right: 16,
      bottom: 28,
      left: 44,
    },
    C = b - S.left - S.right,
    w = x - S.top - S.bottom,
    T = r?.length ? r.slice(0, e.length) : null,
    E = Math.max(...e.map((e) => e.users), ...(T || []), 1),
    D = Math.max(1, Math.ceil(E / 4 / 5) * 5),
    O = D * 4,
    k = (t) => S.left + (e.length === 1 ? C / 2 : (t / (e.length - 1)) * C),
    A = (e) => S.top + w - (e / O) * w,
    j = e.map((e, t) => `${t ? `L` : `M`}${k(t).toFixed(1)} ${A(e.users).toFixed(1)}`).join(` `),
    M = `${j} L${k(e.length - 1).toFixed(1)} ${S.top + w} L${k(0).toFixed(1)} ${S.top + w} Z`,
    N = T?.map((e, t) => `${t ? `L` : `M`}${k(t).toFixed(1)} ${A(e).toFixed(1)}`).join(` `);
  function P(t) {
    let n = m.current.getBoundingClientRect(),
      r = ((t.clientX - n.left) / n.width) * b,
      i = Math.round(((r - S.left) / C) * (e.length - 1));
    l(Math.min(e.length - 1, Math.max(0, i)));
  }
  return (
    <div>
      <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-2`}>
        {T ? (
          <div className={`flex items-center gap-4 text-xs text-[var(--dash-muted)]`}>
            <span className={`inline-flex items-center gap-1.5`}>
              <svg width={`20`} height={`6`} aria-hidden={`true`}>
                <line
                  x1={`0`}
                  x2={`20`}
                  y1={`3`}
                  y2={`3`}
                  stroke={W}
                  strokeWidth={`2`}
                  strokeLinecap={`round`}
                />
              </svg>
              {a.legendCurrent}
            </span>
            <span className={`inline-flex items-center gap-1.5`}>
              <svg width={`20`} height={`6`} aria-hidden={`true`}>
                <line
                  x1={`0`}
                  x2={`20`}
                  y1={`3`}
                  y2={`3`}
                  stroke={`var(--dash-muted)`}
                  strokeWidth={`1.5`}
                  strokeDasharray={`4 3`}
                />
              </svg>
              {a.legendPrevious}
            </span>
          </div>
        ) : (
          <span />
        )}
        <button
          type={`button`}
          onClick={() => f((e) => !e)}
          className={`text-sm text-[var(--dash-series)] hover:underline min-h-11 px-2`}
        >
          {d ? a.asChart : a.asTable}
        </button>
      </div>
      {d ? (
        <Je
          columns={T ? [a.thDate, o, s, `${o} · ${a.legendPrevious}`] : [a.thDate, o, s]}
          rows={e.map((e, t) => {
            let n = [
              He(e.date, {
                long: !0,
                lang: i,
              }),
              G(e.users),
              G(e.sessions),
            ];
            return T ? [...n, T[t] == null ? `–` : G(T[t])] : n;
          })}
        />
      ) : (
        <div className={`relative`} ref={h}>
          <svg
            ref={m}
            viewBox={`0 0 ${b} ${x}`}
            width={b}
            height={x}
            className={`w-full touch-none`}
            role={`img`}
            aria-label={`${a.dailyUsers} — ${G(E)}`}
            onPointerMove={P}
            onPointerLeave={() => l(null)}
          >
            <defs>
              <linearGradient id={_} x1={`0`} y1={`0`} x2={`0`} y2={`1`}>
                <stop offset={`0%`} stopColor={W} stopOpacity={`0.22`} />
                <stop offset={`100%`} stopColor={W} stopOpacity={`0`} />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((e) => {
              let t = D * e;
              return (
                <g key={e}>
                  <line
                    x1={S.left}
                    x2={b - S.right}
                    y1={A(t)}
                    y2={A(t)}
                    stroke={`currentColor`}
                    className={`text-[var(--dash-ink)]`}
                    strokeOpacity={e === 0 ? 0.2 : 0.08}
                  />
                  <text
                    x={S.left - 8}
                    y={A(t) + 4}
                    textAnchor={`end`}
                    fontSize={`12`}
                    fill={`var(--dash-muted)`}
                  >
                    {G(t)}
                  </text>
                </g>
              );
            })}
            <path d={M} fill={`url(#${_})`} />
            {N && (
              <path
                d={N}
                fill={`none`}
                stroke={`var(--dash-muted)`}
                strokeOpacity={`0.8`}
                strokeWidth={`1.5`}
                strokeDasharray={`5 4`}
                strokeLinejoin={`round`}
              />
            )}
            <path
              ref={g}
              d={j}
              fill={`none`}
              stroke={W}
              strokeWidth={`2`}
              strokeLinejoin={`round`}
              strokeLinecap={`round`}
            />
            {e.map((t, n) =>
              n === 0 || n === e.length - 1 || n % Math.ceil(e.length / (b < 520 ? 3 : 6)) === 0 ? (
                <text
                  key={t.date}
                  x={k(n)}
                  y={x - 8}
                  textAnchor={`middle`}
                  fontSize={`12`}
                  fill={`var(--dash-muted)`}
                >
                  {He(t.date, {
                    lang: i,
                  })}
                </text>
              ) : null,
            )}
            {c !== null && (
              <g>
                <line
                  x1={k(c)}
                  x2={k(c)}
                  y1={S.top}
                  y2={S.top + w}
                  stroke={`currentColor`}
                  className={`text-[var(--dash-ink)]`}
                  strokeOpacity={`0.3`}
                  strokeDasharray={`4 4`}
                />
                <circle
                  cx={k(c)}
                  cy={A(e[c].users)}
                  r={`5`}
                  fill={W}
                  stroke={`var(--dash-card)`}
                  strokeWidth={`2`}
                />
              </g>
            )}
          </svg>
          {c !== null && (
            <div
              className={`pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl px-3 py-2 text-xs shadow-lg`}
              style={{
                left: `${(k(c) / b) * 100}%`,
                top: `${(A(e[c].users) / x) * 100}%`,
                background: `var(--dash-ink)`,
                color: `var(--dash-card)`,
              }}
            >
              <p className={`font-medium`}>
                {He(e[c].date, {
                  long: !0,
                  lang: i,
                })}
              </p>
              <p className={`opacity-80`}>
                {o}
                {` `}
                {G(e[c].users)}
                {` · `}
                {s}
                {` `}
                {G(e[c].sessions)}
              </p>
              {T?.[c] != null && (
                <p className={`opacity-70`}>
                  {a.legendPrevious}
                  {` `}
                  {G(T[c])}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
function J({ items: e, formatLabel: t = (e) => e, unit: n = ``, emptyNote: r, accent: i = W }) {
  let a = (0, p.useRef)(null);
  if (
    ((0, p.useEffect)(() => {
      let e = a.current;
      if (!e || Ue()) return;
      let t = e.querySelectorAll(`[data-bar]`);
      if (!t.length) return;
      let n = u(t, {
        scaleX: [0, 1],
        duration: 650,
        delay: (e, t) => t * 45,
        easing: `easeOutCubic`,
      });
      return () => n.pause();
    }, [e]),
    !e?.length)
  )
    return <Ze note={r} />;
  let o = Math.max(...e.map((e) => e.value), 1);
  return (
    <ul className={`space-y-3`} ref={a}>
      {e.map((e) => (
        <li key={e.label}>
          <div className={`flex items-baseline justify-between gap-4 mb-1`}>
            <span className={`text-sm text-[var(--dash-ink)] break-all`}>{t(e.label)}</span>
            <span className={`text-sm font-medium text-[var(--dash-ink)] tabular-nums shrink-0`}>
              {G(e.value)}
              {n}
            </span>
          </div>
          <div className={`h-2.5 rounded-full bg-[var(--dash-track)]`}>
            <div
              data-bar={!0}
              className={`h-full rounded-full origin-left`}
              style={{
                width: `${Math.max(2, (e.value / o) * 100)}%`,
                background: i,
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
function Je({ columns: e, rows: t, emptyNote: n }) {
  return t?.length ? (
    <div className={`overflow-x-auto`}>
      <table className={`w-full text-sm`}>
        <thead>
          <tr className={`text-left text-[var(--dash-muted)]`}>
            {e.map((e, t) => (
              <th key={e} className={`pb-2 font-medium ${t ? `text-right` : ``}`}>
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.map((e) => (
            <tr
              key={e[0]}
              className={`border-t border-[var(--dash-border)] text-[var(--dash-ink)]`}
            >
              {e.map((e, t) => (
                <td key={t} className={`py-2 ${t ? `text-right tabular-nums` : `break-all pr-4`}`}>
                  {e}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <Ze note={n} />
  );
}
function Y({ title: e, subtitle: t, children: n, className: r = ``, csv: i }) {
  let { c: a } = z();
  return (
    <section
      className={`rounded-2xl border border-[var(--dash-border)] bg-[var(--dash-card)] p-6 ${r}`}
      data-card={!0}
    >
      <div className={`flex items-start justify-between gap-4`}>
        <div className={`min-w-0`}>
          <h2 className={`font-display text-lg font-medium text-[var(--dash-ink)]`}>{e}</h2>
          {t && <p className={`text-sm text-[var(--dash-muted)] mt-1 mb-4`}>{t}</p>}
        </div>
        {i && i.rows?.length > 0 && (
          <button
            type={`button`}
            onClick={() => Ye(i)}
            className={`shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-[var(--dash-border)] px-2.5 py-1.5 text-xs font-medium text-[var(--dash-muted)] transition hover:border-[var(--dash-series)] hover:text-[var(--dash-ink)] print:hidden`}
          >
            <svg
              viewBox={`0 0 24 24`}
              className={`h-3.5 w-3.5`}
              fill={`none`}
              stroke={`currentColor`}
              strokeWidth={`2`}
              strokeLinecap={`round`}
              strokeLinejoin={`round`}
              aria-hidden={`true`}
            >
              <path d={`M12 3v12`} />
              <path d={`m7 11 5 5 5-5`} />
              <path d={`M5 21h14`} />
            </svg>
            {a.downloadCsv}
          </button>
        )}
      </div>
      <div className={t ? `` : `mt-4`}>{n}</div>
    </section>
  );
}
function Ye({ name: e, columns: t, rows: n }) {
  let r = (e) => {
      let t = e == null ? `` : String(e);
      return /[",\r\n;]/.test(t) ? `"${t.replace(/"/g, `""`)}"` : t;
    },
    i = [t, ...n].map((e) => e.map(r).join(`,`)).join(`\r
`),
    a = new Blob([`\ufeff${i}`], {
      type: `text/csv;charset=utf-8`,
    }),
    o = URL.createObjectURL(a),
    s = document.createElement(`a`);
  ((s.href = o),
    (s.download = `${e}-${new Date().toISOString().slice(0, 10)}.csv`),
    s.click(),
    URL.revokeObjectURL(o));
}
function Xe({ week: e }) {
  let { c: t } = z(),
    n = (0, p.useRef)(null),
    {
      rows: r,
      max: i,
      busiest: a,
    } = (0, p.useMemo)(() => {
      let t = Array.from(
        {
          length: 7,
        },
        () => Array(24).fill(0),
      );
      for (let n of e || [])
        n.day >= 0 && n.day < 7 && n.hour >= 0 && n.hour < 24 && (t[n.day][n.hour] = n.value);
      let n = (e || []).filter((e) => e.value > 0).sort((e, t) => t.value - e.value);
      return {
        rows: t,
        max: Math.max(...t.flat(), 1),
        busiest: n.slice(0, 5),
      };
    }, [e]);
  if (
    ((0, p.useEffect)(() => {
      let e = n.current;
      if (!e || Ue()) return;
      let t = e.querySelectorAll(`[data-cell]`);
      if (!t.length) return;
      let r = u(t, {
        opacity: [0, 1],
        duration: 420,
        delay: d(4),
        easing: `linear`,
      });
      return () => r.pause();
    }, [e]),
    !e?.length)
  )
    return <Ze />;
  let o = (e) =>
    e === 0
      ? `var(--dash-track)`
      : `color-mix(in oklab, var(--dash-series) ${Math.round(12 + (e / i) * 88)}%, var(--dash-card))`;
  return (
    <div>
      <div className={`overflow-x-auto`}>
        <div className={`min-w-[520px]`} ref={n}>
          <div className={`flex`}>
            <span className={`w-9 shrink-0`} />
            <div
              className={`grid flex-1 grid-cols-[repeat(24,minmax(0,1fr))] text-[10px] text-[var(--dash-muted)]`}
            >
              {Array.from(
                {
                  length: 24,
                },
                (e, t) => (
                  <span key={t} className={`text-center tabular-nums`}>
                    {t % 3 == 0 ? t : ``}
                  </span>
                ),
              )}
            </div>
          </div>
          {r.map((e, n) => (
            <div key={n} className={`flex items-center`}>
              <span className={`w-9 shrink-0 text-[11px] text-[var(--dash-muted)]`}>
                {t.weekdaysShort[n]}
              </span>
              <div className={`grid flex-1 grid-cols-[repeat(24,minmax(0,1fr))] gap-0.5 py-0.5`}>
                {e.map((e, r) => (
                  <div
                    key={r}
                    data-cell={!0}
                    title={`${t.weekdays[n]} ${t.atHour(r)} · ${G(e)}${t.unitSessions}`}
                    className={`h-4 rounded-sm`}
                    style={{
                      background: o(e),
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-4 flex items-center gap-2 text-xs text-[var(--dash-muted)]`}>
        <span>{`0`}</span>
        {[0, 0.25, 0.5, 0.75, 1].map((e) => (
          <span
            key={e}
            className={`h-3 w-6 rounded-sm`}
            style={{
              background: o(e * i),
            }}
            aria-hidden={`true`}
          />
        ))}
        <span className={`tabular-nums`}>{G(i)}</span>
      </div>
      {a.length > 0 && (
        <div className={`mt-4 border-t border-[var(--dash-border)] pt-4`}>
          <p className={`text-sm font-medium text-[var(--dash-ink)] mb-2`}>{t.busiest}</p>
          <ol className={`space-y-1 text-sm text-[var(--dash-muted)]`}>
            {a.map((e) => (
              <li key={`${e.day}-${e.hour}`} className={`flex justify-between gap-4`}>
                <span>
                  {t.weekdays[e.day]}
                  {` `}
                  {t.atHour(e.hour)}
                </span>
                <span className={`tabular-nums text-[var(--dash-ink)]`}>
                  {G(e.value)}
                  {t.unitSessions}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
function X({ columns: e, rows: t, initial: n, limit: r = 15, emptyNote: i }) {
  let { c: a } = z(),
    [o, s] = (0, p.useState)(n || e[1]?.key),
    [c, l] = (0, p.useState)(!1),
    [u, d] = (0, p.useState)(!1),
    [f] = Se({
      duration: 220,
      easing: `ease-out`,
    }),
    m = (0, p.useMemo)(() => {
      let e = [...(t || [])];
      return (
        e.sort((e, t) => {
          let n = e[o],
            r = t[o],
            i = typeof n == `string` ? String(n).localeCompare(String(r), `th`) : n - r;
          return c ? i : -i;
        }),
        e
      );
    }, [t, o, c]);
  if (!t?.length) return <Ze note={i} />;
  let h = u ? m : m.slice(0, r);
  function g(t) {
    if (t === o) return l((e) => !e);
    (s(t), l(!!e.find((e) => e.key === t)?.lowerIsBetter));
  }
  return (
    <div>
      <div className={`overflow-x-auto`}>
        <table className={`w-full text-sm`}>
          <thead>
            <tr className={`text-[var(--dash-muted)]`}>
              {e.map((e, t) => (
                <th
                  key={e.key}
                  className={`pb-2 font-medium whitespace-nowrap ${t ? `text-right` : `text-left`}`}
                  aria-sort={o === e.key ? (c ? `ascending` : `descending`) : `none`}
                >
                  <button
                    type={`button`}
                    onClick={() => g(e.key)}
                    className={`transition hover:text-[var(--dash-ink)] ${o === e.key ? `text-[var(--dash-ink)]` : ``}`}
                  >
                    {e.label}
                    <span aria-hidden={`true`} className={`ml-1 text-[10px]`}>
                      {o === e.key ? (c ? `▲` : `▼`) : ``}
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={f}>
            {h.map((t) => (
              <tr
                key={t.key ?? t[e[0].key]}
                className={`border-t border-[var(--dash-border)] text-[var(--dash-ink)]`}
              >
                {e.map((e, n) => (
                  <td
                    key={e.key}
                    className={`py-2 ${n ? `text-right tabular-nums whitespace-nowrap` : `break-words pr-4`}`}
                  >
                    {e.format ? e.format(t[e.key], t) : t[e.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {m.length > r && (
        <button
          type={`button`}
          onClick={() => d((e) => !e)}
          className={`mt-4 min-h-11 text-sm font-medium text-[var(--dash-series)] hover:underline print:hidden`}
        >
          {u ? a.showLess : a.showAllRows(G(m.length))}
        </button>
      )}
    </div>
  );
}
function Ze({ note: e }) {
  let { c: t } = z();
  return (
    <div className={`flex flex-col items-center gap-2 py-6`}>
      <Be scene={`empty`} className={`h-16 w-16 print:hidden`} />
      <p className={`text-sm text-[var(--dash-muted)] text-center leading-relaxed max-w-sm`}>
        {e || t.empty}
      </p>
    </div>
  );
}
var Qe = [
    {
      key: `home`,
      match: (e) => e === `/`,
    },
    {
      key: `services`,
      match: (e) => e.startsWith(`/services`),
    },
    {
      key: `packages`,
      match: (e) => e.startsWith(`/packages`),
    },
    {
      key: `campaign`,
      match: (e) => e.startsWith(`/for/`),
    },
    {
      key: `tools`,
      match: (e) => e.startsWith(`/tools`),
    },
    {
      key: `blog`,
      match: (e) => e.startsWith(`/blog`),
    },
    {
      key: `corporate`,
      match: (e) => e.startsWith(`/corporate`),
    },
    {
      key: `about`,
      match: (e) => e.startsWith(`/about`),
    },
    {
      key: `facilities`,
      match: (e) => e.startsWith(`/facilities`),
    },
    {
      key: `contact`,
      match: (e) => e.startsWith(`/contact`),
    },
    {
      key: `faq`,
      match: (e) => e.startsWith(`/faq`),
    },
    {
      key: `doctors`,
      match: (e) => e.startsWith(`/doctors`),
    },
    {
      key: `other`,
      match: () => !0,
    },
  ],
  $e = (e) => (e === `/en` ? `/` : e.replace(/^\/en(?=\/|$)/, ``) || `/`),
  et = (e) => Qe.find((t) => t.match($e(e))),
  tt = (e) => {
    let t = Math.round(e || 0);
    return t >= 60
      ? `${Math.floor(t / 60)}:${String(t % 60).padStart(2, `0`)}`
      : `0:${String(t).padStart(2, `0`)}`;
  },
  nt = {
    views: {
      key: `thViews`,
      get: (e) => e.views,
    },
    users: {
      key: `thUsers`,
      get: (e) => e.users,
    },
    avgEngagement: {
      key: `thAvgTime`,
      get: (e) => e.avgEngagement,
    },
    readToEnd: {
      key: `thReadToEnd`,
      get: (e) => e.readToEnd,
    },
  };
function _Element7({ pages: e }) {
  let { c: t } = z();
  return (
    <J
      items={(0, p.useMemo)(() => {
        let n = new Map();
        for (let t of e || []) {
          let e = et(t.path).key;
          n.set(e, (n.get(e) || 0) + t.views);
        }
        return [...n.entries()]
          .map(([e, n]) => ({
            label: t.sections[e] || e,
            value: n,
          }))
          .sort((e, t) => t.value - e.value);
      }, [e, t])}
      unit={t.unitTimes}
    />
  );
}
function _Element8({ pages: e, expanded: t = !1 }) {
  let { c: n } = z(),
    [r, i] = (0, p.useState)(``),
    [a, o] = (0, p.useState)(`views`),
    [s, c] = (0, p.useState)(!1),
    [l] = Se({
      duration: 220,
      easing: `ease-out`,
    }),
    u = (0, p.useMemo)(() => {
      let t = r.trim().toLowerCase();
      return (e || [])
        .filter((e) => !t || e.path.toLowerCase().includes(t))
        .sort((e, t) => nt[a].get(t) - nt[a].get(e));
    }, [e, r, a]),
    d = s || t ? u : u.slice(0, 15),
    f = (e || []).some((e) => e.readToEnd > 0);
  return e?.length ? (
    <div>
      <div className={`flex flex-wrap items-center gap-3 mb-4 ${t ? `hidden` : ``}`}>
        <input
          type={`search`}
          value={r}
          onChange={(e) => i(e.target.value)}
          placeholder={n.searchPages}
          aria-label={n.searchPages}
          className={`flex-1 min-w-48 rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] text-[var(--dash-ink)] px-4 py-2.5 text-sm outline-none focus:border-[var(--dash-series)]`}
        />
        <label className={`text-sm text-[var(--dash-muted)]`}>
          {n.sortBy}
          {` `}
          <select
            value={a}
            onChange={(e) => o(e.target.value)}
            className={`rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] text-[var(--dash-ink)] px-3 py-2 text-sm outline-none focus:border-[var(--dash-series)]`}
          >
            {Object.entries(nt).map(([e, t]) => (
              <option key={e} value={e}>
                {n[t.key]}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={`overflow-x-auto`}>
        <table className={`w-full text-sm`}>
          <thead>
            <tr className={`text-[var(--dash-muted)]`}>
              <th className={`pb-2 text-left font-medium`}>{n.thPage}</th>
              <th className={`pb-2 text-right font-medium`}>{n.thViews}</th>
              <th className={`pb-2 text-right font-medium`}>{n.thUsers}</th>
              <th className={`pb-2 text-right font-medium whitespace-nowrap`}>{n.thAvgTime}</th>
              {f && (
                <th className={`pb-2 text-right font-medium whitespace-nowrap`}>{n.thReadToEnd}</th>
              )}
            </tr>
          </thead>
          <tbody ref={l}>
            {d.map((e) => (
              <tr
                key={e.path}
                className={`border-t border-[var(--dash-border)] text-[var(--dash-ink)]`}
              >
                <td className={`py-2 pr-4`}>
                  <span className={`break-all`}>{e.path}</span>
                  <span className={`block text-xs text-[var(--dash-muted)]`}>
                    {n.sections[et(e.path).key]}
                  </span>
                </td>
                <td className={`py-2 text-right tabular-nums`}>{G(e.views)}</td>
                <td className={`py-2 text-right tabular-nums`}>{G(e.users)}</td>
                <td className={`py-2 text-right tabular-nums whitespace-nowrap`}>
                  {tt(e.avgEngagement)}
                </td>
                {f && (
                  <td className={`py-2 text-right tabular-nums`}>
                    {Math.round((e.readToEnd || 0) * 100)}
                    {`%`}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {u.length > 15 && !t && (
        <button
          type={`button`}
          onClick={() => c((e) => !e)}
          className={`mt-4 min-h-11 text-sm font-medium text-[var(--dash-series)] hover:underline`}
        >
          {s ? n.showLess : n.showAll(G(u.length))}
        </button>
      )}
      {!u.length && (
        <p className={`py-6 text-center text-sm text-[var(--dash-muted)]`}>{n.noMatch}</p>
      )}
    </div>
  ) : (
    <p className={`text-sm text-[var(--dash-muted)] py-6 text-center`}>{n.empty}</p>
  );
}
var at = `https://kmc-hospital.com`,
  ot = [
    {
      key: `line`,
      source: `line`,
      medium: `social`,
    },
    {
      key: `facebook`,
      source: `facebook`,
      medium: `social`,
    },
    {
      key: `instagram`,
      source: `instagram`,
      medium: `social`,
    },
    {
      key: `tiktok`,
      source: `tiktok`,
      medium: `social`,
    },
    {
      key: `googleAds`,
      source: `google`,
      medium: `cpc`,
    },
    {
      key: `facebookAds`,
      source: `facebook`,
      medium: `paid_social`,
    },
    {
      key: `email`,
      source: `email`,
      medium: `email`,
    },
    {
      key: `print`,
      source: `print`,
      medium: `qr`,
    },
    {
      key: `partner`,
      source: `partner`,
      medium: `referral`,
    },
    {
      key: `other`,
      source: ``,
      medium: ``,
    },
  ],
  Z = (e) =>
    e
      .trim()
      .toLowerCase()
      .replace(/\s+/g, `-`)
      .replace(/[?&#=/\\%]/g, ``)
      .replace(/-{2,}/g, `-`)
      .replace(/^-|-$/g, ``);
function st({ path: e, source: t, medium: n, campaign: r, content: i }) {
  let a = new URL(e || `/`, at),
    o = (e, t) => t && a.searchParams.set(e, t);
  return (
    o(`utm_source`, Z(t)),
    o(`utm_medium`, Z(n)),
    o(`utm_campaign`, Z(r)),
    o(`utm_content`, Z(i)),
    decodeURIComponent(a.toString())
  );
}
function _Element9({ pages: e }) {
  let { c: t } = z(),
    [n, r] = (0, p.useState)(`line`),
    [i, a] = (0, p.useState)(`/`),
    [o, s] = (0, p.useState)(``),
    [c, l] = (0, p.useState)(``),
    [u, d] = (0, p.useState)({
      source: ``,
      medium: ``,
    }),
    [f, m] = (0, p.useState)(!1),
    h = (0, p.useMemo)(() => {
      let n = new Set([`/`]),
        r = [
          {
            value: `/`,
            label: `/ — ${t.sections.home}`,
          },
        ];
      for (let t of e || []) {
        let e = t.path.split(`?`)[0].replace(/\/$/, ``) || `/`;
        n.has(e) ||
          !e.startsWith(`/`) ||
          (n.add(e),
          r.push({
            value: e,
            label: e,
          }));
      }
      return r;
    }, [e, t]),
    g = ot.find((e) => e.key === n) || ot[0],
    _ = g.key === `other` ? u.source : g.source,
    v = g.key === `other` ? u.medium : g.medium,
    y = !!(Z(o) && Z(_) && Z(v)),
    b = st({
      path: i,
      source: _,
      medium: v,
      campaign: o,
      content: c,
    });
  async function x() {
    try {
      await navigator.clipboard.writeText(b);
    } catch {
      return;
    }
    (m(!0), setTimeout(() => m(!1), 2e3));
  }
  let S = `w-full rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] text-[var(--dash-ink)] px-3 py-2.5 text-sm outline-none focus:border-[var(--dash-series)]`;
  return (
    <div className={`print:hidden`}>
      <div className={`grid gap-4 sm:grid-cols-2`}>
        <label className={`block`}>
          <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
            {t.utmChannel}
          </span>
          <select value={n} onChange={(e) => r(e.target.value)} className={S}>
            {ot.map((e) => (
              <option key={e.key} value={e.key}>
                {t.utmChannels[e.key]}
              </option>
            ))}
          </select>
        </label>
        <label className={`block`}>
          <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
            {t.utmDestination}
          </span>
          <select value={i} onChange={(e) => a(e.target.value)} className={S}>
            {h.map((e) => (
              <option key={e.value} value={e.value}>
                {e.label}
              </option>
            ))}
          </select>
        </label>
        {g.key === `other` && (
          <U.Fragment>
            <label className={`block`}>
              <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
                {t.utmSource}
              </span>
              <input
                value={u.source}
                onChange={(e) =>
                  d((t) => ({
                    ...t,
                    source: e.target.value,
                  }))
                }
                placeholder={`partner-site`}
                className={S}
              />
            </label>
            <label className={`block`}>
              <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
                {t.utmMedium}
              </span>
              <input
                value={u.medium}
                onChange={(e) =>
                  d((t) => ({
                    ...t,
                    medium: e.target.value,
                  }))
                }
                placeholder={`referral`}
                className={S}
              />
            </label>
          </U.Fragment>
        )}
        <label className={`block`}>
          <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
            {t.utmCampaign}
          </span>
          <input
            value={o}
            onChange={(e) => s(e.target.value)}
            placeholder={t.utmCampaignPlaceholder}
            className={S}
          />
          <span className={`block text-xs text-[var(--dash-muted)] mt-1.5`}>
            {t.utmCampaignHint}
          </span>
        </label>
        <label className={`block`}>
          <span className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}>
            {t.utmContent}
          </span>
          <input
            value={c}
            onChange={(e) => l(e.target.value)}
            placeholder={t.utmContentPlaceholder}
            className={S}
          />
          <span className={`block text-xs text-[var(--dash-muted)] mt-1.5`}>
            {t.utmContentHint}
          </span>
        </label>
      </div>
      <div className={`mt-6 rounded-xl bg-[var(--dash-bg)] p-4`}>
        <p className={`text-sm font-medium text-[var(--dash-ink)] mb-2`}>{t.utmResult}</p>
        <p
          className={`font-mono text-sm break-all ${y ? `text-[var(--dash-ink)]` : `text-[var(--dash-muted)]`}`}
        >
          {b}
        </p>
        <div className={`mt-4 flex flex-wrap items-center gap-3`}>
          <button
            type={`button`}
            onClick={x}
            disabled={!y}
            className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-white transition disabled:opacity-50`}
            style={{
              background: `var(--dash-series)`,
            }}
          >
            {f ? t.utmCopied : t.utmCopy}
          </button>
          {!y && <span className={`text-xs text-[var(--dash-muted)]`}>{t.utmIncomplete}</span>}
        </div>
      </div>
    </div>
  );
}
var lt = () => typeof window < `u` && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
  ut = (e) => {
    let t = [...e].sort((e, t) => e - t);
    if (!t.length) return 0;
    let n = Math.floor(t.length / 2);
    return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2;
  },
  dt = (e, t) => (e ? (t ? `star` : `fix`) : t ? `grow` : `review`);
function _Element6({ contacts: e }) {
  let { c: t } = z();
  return e >= 10 ? null : (
    <p
      className={`mb-4 rounded-xl border border-amber-400/60 bg-amber-50 px-4 py-2.5 text-xs leading-relaxed text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200`}
    >
      {t.smallSample(e)}
    </p>
  );
}
var pt = [`visitors`, `browsed`, `contactPage`, `contacted`];
function _Element5({ funnel: e }) {
  let { c: t } = z(),
    n = (0, p.useRef)(null);
  return (
    (0, p.useEffect)(() => {
      let e = n.current;
      if (!e || lt()) return;
      let t = e.querySelectorAll(`[data-bar]`);
      if (!t.length) return;
      let r = u(t, {
        scaleX: [0, 1],
        duration: 700,
        delay: d(90),
        easing: `easeOutCubic`,
      });
      return () => r.pause();
    }, [e]),
    e?.visitors ? (
      <ol className={`space-y-4`} ref={n}>
        {pt.map((n, r) => {
          let i = e[n] || 0,
            a = i / e.visitors;
          return (
            <li key={n}>
              <div className={`flex items-baseline justify-between gap-4 mb-1.5`}>
                <span className={`text-sm text-[var(--dash-ink)]`}>
                  <span
                    className={`mr-2 text-xs font-semibold text-[var(--dash-muted)] tabular-nums`}
                  >
                    {r + 1}
                  </span>
                  {t.journeySteps[n]}
                </span>
                <span className={`shrink-0 text-sm tabular-nums text-[var(--dash-ink)]`}>
                  <span className={`font-semibold`}>{G(i)}</span>
                  <span className={`text-[var(--dash-muted)]`}>
                    {` · `}
                    {K(a)}
                  </span>
                </span>
              </div>
              <div className={`h-3 rounded-full bg-[var(--dash-track)]`}>
                <div
                  data-bar={!0}
                  className={`h-full rounded-full origin-left`}
                  style={{
                    width: `${Math.max(1.5, Math.min(100, a * 100))}%`,
                    background: `color-mix(in oklab, var(--dash-series) ${55 + r * 15}%, var(--dash-card))`,
                  }}
                />
              </div>
            </li>
          );
        })}
      </ol>
    ) : (
      <p className={`text-sm text-[var(--dash-muted)] py-6 text-center`}>{t.empty}</p>
    )
  );
}
function ht(e) {
  return (0, p.useMemo)(() => {
    let t = new Map((e.journey?.channelContacts || []).map((e) => [e.label, e.value])),
      n = (e.channels || [])
        .filter((e) => e.value > 0)
        .map((e) => ({
          label: e.label,
          sessions: e.value,
          contacts: t.get(e.label) || 0,
        }))
        .map((e) => ({
          ...e,
          rate: e.contacts / e.sessions,
        })),
      r = n.reduce((e, t) => e + t.sessions, 0),
      i = n.reduce((e, t) => e + t.contacts, 0),
      a = r ? i / r : 0,
      o = ut(n.map((e) => e.sessions));
    return {
      average: a,
      busyLine: o,
      totalContacts: i,
      rows: n.map((e) => ({
        ...e,
        verdict: dt(e.sessions >= o, e.contacts > 0 && e.rate >= a),
      })),
    };
  }, [e]);
}
function _Element0({ rows: e, average: t, busyLine: n }) {
  let { c: r } = z(),
    i = (0, p.useRef)(null);
  if (
    ((0, p.useEffect)(() => {
      let e = i.current;
      if (!e || lt()) return;
      let t = e.querySelectorAll(`[data-dot]`);
      if (!t.length) return;
      let n = u(t, {
        opacity: [0, 1],
        scale: [0.4, 1],
        duration: 500,
        delay: d(70),
      });
      return () => n.pause();
    }, [e]),
    !e.length)
  )
    return null;
  let a = {
      top: 18,
      right: 24,
      bottom: 36,
      left: 48,
    },
    o = 640 - a.left - a.right,
    s = 300 - a.top - a.bottom,
    c = Math.max(...e.map((e) => e.sessions), 1),
    l = Math.max(...e.map((e) => e.rate), t * 1.5, 0.01),
    f = (e) => a.left + (Math.sqrt(e) / Math.sqrt(c)) * o,
    m = (e) => a.top + s - (e / l) * s;
  return (
    <div className={`overflow-x-auto`} ref={i}>
      <svg
        viewBox={`0 0 640 300`}
        className={`w-full min-w-[480px]`}
        role={`img`}
        aria-label={r.channelQuality}
      >
        <line
          x1={a.left}
          x2={640 - a.right}
          y1={a.top + s}
          y2={a.top + s}
          stroke={`var(--dash-ink)`}
          strokeOpacity={`0.2`}
        />
        <line
          x1={a.left}
          x2={a.left}
          y1={a.top}
          y2={a.top + s}
          stroke={`var(--dash-ink)`}
          strokeOpacity={`0.2`}
        />
        <line
          x1={a.left}
          x2={640 - a.right}
          y1={m(t)}
          y2={m(t)}
          stroke={`var(--dash-ink)`}
          strokeOpacity={`0.35`}
          strokeDasharray={`5 5`}
        />
        <text
          x={640 - a.right}
          y={m(t) - 6}
          textAnchor={`end`}
          fontSize={`11`}
          fill={`var(--dash-muted)`}
        >
          {r.siteAverage}
          {` `}
          {K(t)}
        </text>
        <line
          x1={f(n)}
          x2={f(n)}
          y1={a.top}
          y2={a.top + s}
          stroke={`var(--dash-ink)`}
          strokeOpacity={`0.2`}
          strokeDasharray={`5 5`}
        />
        <text
          x={a.left + o / 2}
          y={294}
          textAnchor={`middle`}
          fontSize={`12`}
          fill={`var(--dash-muted)`}
        >
          {r.axisSessions}
          {` →`}
        </text>
        <text
          x={14}
          y={a.top + s / 2}
          textAnchor={`middle`}
          fontSize={`12`}
          fill={`var(--dash-muted)`}
          transform={`rotate(-90 14 ${a.top + s / 2})`}
        >
          {r.thContactRate}
          {` →`}
        </text>
        {e.map((e) => {
          let t = f(e.sessions),
            n = m(e.rate),
            i = t > 470;
          return (
            <g
              key={e.label}
              data-dot={!0}
              style={{
                transformOrigin: `${t}px ${n}px`,
              }}
            >
              <title>{`${e.label}: ${G(e.sessions)} ${r.thSessions} · ${G(e.contacts)} ${r.thContacts} · ${K(e.rate)}`}</title>
              <circle
                cx={t}
                cy={n}
                r={`7`}
                fill={`var(--dash-series)`}
                stroke={`var(--dash-card)`}
                strokeWidth={`2`}
              />
              <text
                x={i ? t - 12 : t + 12}
                y={n + 4}
                textAnchor={i ? `end` : `start`}
                fontSize={`12`}
                fill={`var(--dash-ink)`}
              >
                {e.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
function _t({ verdict: e }) {
  let { c: t } = z(),
    n = {
      star: `var(--dash-up)`,
      grow: `var(--dash-c1)`,
      fix: `var(--dash-c2)`,
      review: `var(--dash-muted)`,
    }[e];
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-[var(--dash-ink)]`}
    >
      <span
        className={`h-2 w-2 rounded-full`}
        style={{
          background: n,
        }}
        aria-hidden={`true`}
      />
      {t.verdicts[e]}
    </span>
  );
}
var vt = [`star`, `fix`, `grow`, `review`],
  yt = /^\/(en\/)?contact\/?$/,
  bt = 30,
  xt = 6;
function St(e) {
  return (0, p.useMemo)(() => {
    let t = new Map((e.cta?.byPage || []).map((e) => [e.label, e.value])),
      n = (e.pages || [])
        .filter((e) => e.views > 0 && !yt.test(e.path))
        .slice(0, bt)
        .map((e) => ({
          path: e.path,
          views: e.views,
          contacts: t.get(e.path) || 0,
        }))
        .map((e) => ({
          ...e,
          rate: e.contacts / e.views,
        })),
      r = n.reduce((e, t) => e + t.views, 0),
      i = n.reduce((e, t) => e + t.contacts, 0),
      a = r ? i / r : 0,
      o = ut(n.map((e) => e.views)),
      s = Object.fromEntries(vt.map((e) => [e, []]));
    for (let e of n) s[dt(e.views >= o, e.contacts > 0 && e.rate >= a)].push(e);
    return {
      groups: s,
      average: a,
      totalContacts: i,
      considered: n.length,
    };
  }, [e]);
}
function Ct({ groups: e }) {
  let { c: t } = z();
  return (
    <div className={`grid gap-3 sm:grid-cols-2`}>
      {vt.map((n) => {
        let r = e[n];
        return (
          <div key={n} className={`rounded-xl border border-[var(--dash-border)] p-4`}>
            <div className={`flex items-center justify-between gap-2`}>
              <_t verdict={n} />
              <span className={`text-xs tabular-nums text-[var(--dash-muted)]`}>
                {G(r.length)}
                {` `}
                {t.unitPages}
              </span>
            </div>
            <p className={`mt-1.5 text-xs leading-relaxed text-[var(--dash-muted)]`}>
              {t.matrixHints[n]}
            </p>
            {r.length ? (
              <ul className={`mt-3 space-y-1.5`}>
                {r.slice(0, xt).map((e) => (
                  <li key={e.path} className={`flex items-baseline justify-between gap-3 text-sm`}>
                    <span className={`min-w-0 break-all text-[var(--dash-ink)]`}>{e.path}</span>
                    <span className={`shrink-0 text-xs tabular-nums text-[var(--dash-muted)]`}>
                      {G(e.views)}
                      {` · `}
                      {K(e.rate)}
                    </span>
                  </li>
                ))}
                {r.length > xt && (
                  <li className={`text-xs text-[var(--dash-muted)]`}>{t.andMore(r.length - xt)}</li>
                )}
              </ul>
            ) : (
              <p className={`mt-3 text-xs text-[var(--dash-muted)]`}>{t.matrixEmpty}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
var wt = 6,
  Tt = 5;
function Et(e) {
  let { lang: t, c: n } = z(),
    r = ht(e),
    i = St(e);
  return (0, p.useMemo)(() => {
    let a = [],
      o = r.totalContacts < 10,
      s = (e) => (e === `/` || e === `/en` ? `${n.sections.home} (${e})` : e),
      c = e.totals;
    if (c.previous.users > 0) {
      let e = (c.users - c.previous.users) / c.previous.users;
      Math.abs(e) >= 0.005 &&
        a.push({
          key: `users`,
          icon: e > 0 ? `up` : `down`,
          tone: e > 0 ? `good` : `watch`,
          value: `${e > 0 ? `+` : `−`}${K(Math.abs(e), 0)}`,
          text: e > 0 ? n.hl.usersUp : n.hl.usersDown,
        });
    }
    let l = r.rows
      .filter((e) => e.contacts > 0 && e.sessions >= Tt)
      .sort((e, t) => t.rate - e.rate)[0];
    l &&
      a.push({
        key: `channel`,
        icon: `channel`,
        tone: `good`,
        value: K(l.rate),
        text: n.hl.bestChannel(l.label),
        to: `/traffic`,
        early: o,
      });
    let u = [...i.groups.star, ...i.groups.grow]
      .filter((e) => e.contacts > 0)
      .sort((e, t) => t.rate - e.rate)[0];
    u &&
      a.push({
        key: `page`,
        icon: `page`,
        tone: `good`,
        value: K(u.rate),
        text: n.hl.bestPage(s(u.path)),
        to: `/pages`,
        early: o,
      });
    let d = [...i.groups.fix].sort((e, t) => t.views - e.views)[0];
    d &&
      a.push({
        key: `fix`,
        icon: `fix`,
        tone: `watch`,
        value: `${G(d.views)}${n.unitTimes}`,
        text: n.hl.fixPage(s(d.path)),
        to: `/pages`,
        early: o,
      });
    let f = [...(e.audience?.week || [])].sort((e, t) => t.value - e.value)[0];
    f?.value > 0 &&
      a.push({
        key: `time`,
        icon: `clock`,
        tone: `neutral`,
        value: n.atHour(f.hour),
        text: n.hl.busiest(n.weekdays[f.day]),
        to: `/audience`,
      });
    let p = e.audience?.cities?.[0];
    if (p && c.sessions > 0) {
      let e = (t === `th` && Ce[p.label]) || p.label;
      a.push({
        key: `city`,
        icon: `pin`,
        tone: `neutral`,
        value: K(p.value / c.sessions, 0),
        text: n.hl.topCity(e),
        to: `/audience`,
      });
    }
    let m = e.devices || [],
      h = m.reduce((e, t) => e + t.value, 0),
      g = m.find((e) => e.label === `mobile`);
    return (
      g &&
        h > 0 &&
        a.push({
          key: `mobile`,
          icon: `phone`,
          tone: `neutral`,
          value: K(g.value / h, 0),
          text: n.hl.mobile,
          to: `/traffic`,
        }),
      a.slice(0, wt)
    );
  }, [e, r, i, n, t]);
}
var Dt = {
    up: <path d={`M4 16l6-6 4 4 6-7M15 7h5v5`} />,
    down: <path d={`M4 8l6 6 4-4 6 7M15 17h5v-5`} />,
    channel: <path d={`M4 12h3l3-7 4 14 3-7h3`} />,
    page: <path d={`M7 3h7l4 4v14H7zM14 3v4h4M10 13l2 2 4-4`} />,
    fix: <path d={`M7 3h7l4 4v14H7zM14 3v4h4M12 11v4M12 18h.01`} />,
    clock: <path d={`M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z`} />,
    pin: (
      <path
        d={`M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z`}
      />
    ),
    phone: (
      <path d={`M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2`} />
    ),
  },
  Ot = {
    good: `var(--dash-up)`,
    watch: `var(--dash-down)`,
    neutral: `var(--dash-series)`,
  };
function _Element3({ items: e, linkTo: t }) {
  let { c: n } = z();
  return e.length ? (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`}>
      {e.map((e) => {
        let r = (
            <U.Fragment>
              <div className={`flex items-start justify-between gap-3`}>
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl`}
                  style={{
                    background: `color-mix(in oklab, ${Ot[e.tone]} 14%, transparent)`,
                  }}
                  aria-hidden={`true`}
                >
                  <svg
                    viewBox={`0 0 24 24`}
                    className={`h-[18px] w-[18px]`}
                    fill={`none`}
                    stroke={Ot[e.tone]}
                    strokeWidth={`1.8`}
                    strokeLinecap={`round`}
                    strokeLinejoin={`round`}
                  >
                    {Dt[e.icon]}
                  </svg>
                </span>
                {e.early && (
                  <span
                    className={`rounded-full border border-amber-400/60 px-2 py-0.5 text-[11px] text-amber-700 dark:text-amber-300`}
                  >
                    {n.hlEarly}
                  </span>
                )}
              </div>
              <p
                className={`mt-3 font-display text-2xl font-semibold tabular-nums text-[var(--dash-ink)]`}
              >
                {e.value}
              </p>
              <p className={`mt-1 text-sm leading-relaxed text-[var(--dash-ink)] break-words`}>
                {e.text}
              </p>
              {e.to && t && (
                <p className={`mt-3 text-xs font-medium text-[var(--dash-series)] print:hidden`}>
                  {n.hlSeeMore}
                  {` `}
                  <span aria-hidden={`true`}>{`→`}</span>
                </p>
              )}
            </U.Fragment>
          ),
          a = `block rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] p-4 transition`;
        return e.to && t ? (
          <_Element
            key={e.key}
            to={t(e.to)}
            className={`${a} hover:border-[var(--dash-series)] hover:-translate-y-0.5 focus-visible:border-[var(--dash-series)]`}
          >
            {r}
          </_Element>
        ) : (
          <div key={e.key} className={a}>
            {r}
          </div>
        );
      })}
    </div>
  ) : null;
}
var At = (e) => (e <= 1.5 ? 0.25 : e <= 2.5 ? 0.15 : e <= 3.5 ? 0.1 : e <= 5.5 ? 0.06 : 0.03);
function jt(e, t) {
  return (e || [])
    .filter((e) => e.position <= 10 && e.impressions >= 10 && !t(e.query))
    .filter((e) => e.ctr < At(e.position) / 2)
    .sort((e, t) => t.impressions - e.impressions)
    .slice(0, 15);
}
var Mt = (e) => /kmc|เค\s*เอ็ม\s*ซี/i.test(e),
  Nt = [
    {
      path: `/`,
      key: `overview`,
      labelKey: `secOverview`,
    },
    {
      path: `/pages`,
      key: `pages`,
      labelKey: `secPages`,
    },
    {
      path: `/audience`,
      key: `audience`,
      labelKey: `secAudience`,
    },
    {
      path: `/traffic`,
      key: `traffic`,
      labelKey: `secTraffic`,
    },
    {
      path: `/search`,
      key: `search`,
      labelKey: `secSearch`,
    },
    {
      path: `/cta`,
      key: `cta`,
      labelKey: `secContact`,
    },
  ],
  Pt = new Set([`search`]),
  Q = (e, t, n) => ({
    name: e,
    columns: t,
    rows: n,
  }),
  $ = (e, t, n) =>
    Q(
      e,
      t,
      (n || []).map((e) => [e.label, e.value]),
    );
function Ft({ data: e, linkTo: t }) {
  let { c: n } = z(),
    r = e.cta,
    i = Et(e),
    a = e.timeseries || [],
    o = new Map((e.trends?.contactsByDay || []).map((e) => [e.date, e.value]));
  return (
    <U.Fragment>
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        <_Element2
          label={n.users}
          value={e.totals.users}
          previous={e.totals.previous.users}
          accent={`var(--dash-c1)`}
          trend={a.map((e) => e.users)}
        />
        <_Element2
          label={n.sessions}
          value={e.totals.sessions}
          previous={e.totals.previous.sessions}
          accent={`var(--dash-c3)`}
          trend={a.map((e) => e.sessions)}
        />
        <_Element2
          label={n.views}
          value={e.totals.views}
          previous={e.totals.previous.views}
          accent={`var(--dash-c4)`}
          trend={a[0]?.views == null ? null : a.map((e) => e.views)}
        />
        <_Element2
          label={n.ctaClicks}
          value={r?.total ?? 0}
          previous={r?.totalPrevious ?? 0}
          accent={`var(--dash-c2)`}
          hint={r?.unavailable ? n.ctaTileUnavailable : n.ctaTileHint}
          trend={e.trends?.contactsByDay ? a.map((e) => o.get(e.date) || 0) : null}
        />
      </div>
      {i.length > 0 && (
        <Y title={n.highlightsTitle} subtitle={n.highlightsSub}>
          <_Element3 items={i} linkTo={t} />
        </Y>
      )}
      <Y title={n.dailyUsers} subtitle={n.dailyUsersSub}>
        <_Element4 data={a} previous={e.trends?.previous?.map((e) => e.users)} />
      </Y>
      {e.journey?.funnel && (
        <Y title={n.journeyTitle} subtitle={n.journeySub}>
          <_Element5 funnel={e.journey.funnel} />
        </Y>
      )}
      <div className={`grid gap-6 lg:grid-cols-2`}>
        <Y title={n.topPages} subtitle={n.topPagesSub}>
          <J items={e.topPages?.slice(0, 5)} unit={n.unitTimes} />
        </Y>
        <Y title={n.channels} subtitle={n.channelsSub}>
          <J items={e.channels?.slice(0, 5)} unit={n.unitSessions} accent={`var(--dash-c3)`} />
        </Y>
      </div>
    </U.Fragment>
  );
}
function It({ data: e, forPrint: t = !1 }) {
  let { c: n } = z(),
    r = St(e);
  return (
    <U.Fragment>
      {r.considered > 0 && (
        <Y
          title={n.contentMatrix}
          subtitle={n.contentMatrixSub}
          csv={Q(
            `pages-by-result`,
            [n.thPage, n.thVerdict, n.thViews, n.thContacts, n.thContactRate],
            Object.entries(r.groups).flatMap(([e, t]) =>
              t.map((t) => [t.path, n.verdicts[e], t.views, t.contacts, K(t.rate)]),
            ),
          )}
        >
          {!e.cta?.unavailable && <_Element6 contacts={r.totalContacts} />}
          <Ct groups={r.groups} />
        </Y>
      )}
      <div className={`grid gap-6 lg:grid-cols-2`}>
        <Y title={n.sectionShare} subtitle={n.sectionShareSub}>
          <_Element7 pages={e.pages} />
        </Y>
        <Y
          title={n.landings}
          subtitle={n.landingsSub}
          csv={$(`landing-pages`, [n.thPage, n.thSessions], e.landings)}
        >
          <J items={e.landings} unit={n.unitSessions} accent={`var(--dash-c4)`} />
        </Y>
      </div>
      <Y
        title={n.allPages}
        subtitle={n.allPagesSub}
        csv={Q(
          `pages`,
          [n.thPage, n.thViews, n.thUsers, n.thAvgTime, n.thReadToEnd],
          (e.pages || []).map((e) => [
            e.path,
            Math.round(e.views),
            Math.round(e.users),
            Math.round(e.avgEngagement),
            `${Math.round((e.readToEnd || 0) * 100)}%`,
          ]),
        )}
      >
        <_Element8 pages={e.pages} expanded={t} />
      </Y>
    </U.Fragment>
  );
}
function Lt({ data: e }) {
  let { lang: t, c: n } = z(),
    r = e.audience,
    i = e.totals,
    a = (e) => (t === `th` && Ce[e]) || e,
    o = (() => {
      let t = 0,
        r = 0;
      for (let n of e.pages || [])
        n.path === `/en` || n.path.startsWith(`/en/`) ? (t += n.views) : (r += n.views);
      return [
        {
          label: n.langThai,
          value: r,
        },
        {
          label: n.langEnglish,
          value: t,
        },
      ].filter((e) => e.value > 0);
    })();
  return (
    <U.Fragment>
      <div className={`grid gap-4 sm:grid-cols-3`}>
        <_Element2
          label={n.newUsers}
          value={r?.visitors?.new ?? i.newUsers}
          previous={r?.visitorsPrevious?.new ?? i.previous.newUsers}
          accent={`var(--dash-c1)`}
          hint={n.newVsReturningHint}
        />
        <_Element2
          label={n.returningUsers}
          value={r?.visitors?.returning ?? 0}
          previous={r?.visitorsPrevious?.returning ?? 0}
          accent={`var(--dash-c3)`}
          hint={n.returningHint}
        />
        <_Element2
          label={n.engagementRate}
          value={i.engagementRate}
          previous={i.previous.engagementRate}
          format={(e) => K(e)}
          accent={`var(--dash-c4)`}
          hint={n.engagementRateHint}
        />
      </div>
      {r?.unavailable ? (
        <Y title={n.audienceUnavailable}>
          <p className={`text-xs text-[var(--dash-muted)] break-all`}>
            {`(`}
            {r.unavailable}
            {`)`}
          </p>
        </Y>
      ) : (
        <U.Fragment>
          <Y title={n.weekHeat} subtitle={n.weekHeatSub}>
            <Xe week={r?.week} />
          </Y>
          <div className={`grid gap-6 lg:grid-cols-2`}>
            <Y
              title={n.cities}
              subtitle={n.citiesSub}
              csv={$(
                `cities`,
                [n.cities, n.thSessions],
                (r?.cities || []).map((e) => ({
                  ...e,
                  label: a(e.label),
                })),
              )}
            >
              <J
                items={r?.cities}
                formatLabel={a}
                unit={n.unitSessions}
                accent={`var(--dash-c1)`}
              />
            </Y>
            <Y
              title={n.sources}
              subtitle={n.sourcesSub}
              csv={$(`sources`, [n.sources, n.thSessions], r?.sources)}
            >
              <J items={r?.sources} unit={n.unitSessions} accent={`var(--dash-c3)`} />
            </Y>
          </div>
          <div className={`grid gap-6 lg:grid-cols-2`}>
            <Y
              title={n.campaigns}
              subtitle={n.campaignsSub}
              csv={$(`campaigns`, [n.campaigns, n.thSessions], r?.campaigns)}
            >
              <J
                items={r?.campaigns}
                unit={n.unitSessions}
                accent={`var(--dash-c2)`}
                emptyNote={n.emptyCampaigns}
              />
            </Y>
            <Y title={n.languageSplit} subtitle={n.languageSplitSub}>
              <J items={o} unit={n.unitTimes} accent={`var(--dash-c4)`} />
            </Y>
          </div>
          <Y title={n.utmBuilder} subtitle={n.utmBuilderSub} className={`print:hidden`}>
            <_Element9 pages={e.pages} />
          </Y>
        </U.Fragment>
      )}
    </U.Fragment>
  );
}
function Rt({ data: e }) {
  let { lang: t, c: n } = z(),
    r = (e.landings || []).some((e) => e.bounce != null),
    i = ht(e);
  return (
    <U.Fragment>
      <div className={`grid gap-4 sm:grid-cols-3`}>
        <_Element2
          label={n.sessions}
          value={e.totals.sessions}
          previous={e.totals.previous.sessions}
          accent={`var(--dash-c3)`}
        />
        <_Element2
          label={n.avgDuration}
          value={e.totals.avgDuration}
          previous={e.totals.previous.avgDuration}
          format={(e) => Ve(e, t)}
          accent={`var(--dash-c1)`}
        />
        <_Element2
          label={n.viewsPerSession}
          value={e.totals.sessions ? e.totals.views / e.totals.sessions : 0}
          previous={
            e.totals.previous.sessions ? e.totals.previous.views / e.totals.previous.sessions : 0
          }
          format={(e) => (e || 0).toFixed(1)}
          accent={`var(--dash-c4)`}
        />
      </div>
      {e.journey?.channelContacts && i.rows.length > 0 && (
        <Y
          title={n.channelQuality}
          subtitle={n.channelQualitySub}
          csv={Q(
            `channel-quality`,
            [n.channelsFull, n.thSessions, n.thContacts, n.thContactRate, n.thVerdict],
            i.rows.map((e) => [e.label, e.sessions, e.contacts, K(e.rate), n.verdicts[e.verdict]]),
          )}
        >
          <_Element6 contacts={i.totalContacts} />
          <_Element0 rows={i.rows} average={i.average} busyLine={i.busyLine} />
          <div className={`mt-4`}>
            <X
              columns={[
                {
                  key: `label`,
                  label: n.channelsFull,
                },
                {
                  key: `sessions`,
                  label: n.thSessions,
                  format: G,
                },
                {
                  key: `contacts`,
                  label: n.thContacts,
                  format: G,
                },
                {
                  key: `rate`,
                  label: n.thContactRate,
                  format: (e) => K(e),
                },
                {
                  key: `verdict`,
                  label: n.thVerdict,
                  format: (e) => <_t verdict={e} />,
                },
              ]}
              rows={i.rows}
              initial={`sessions`}
            />
          </div>
        </Y>
      )}
      <div className={`grid gap-6 lg:grid-cols-2`}>
        <Y
          title={n.channelsFull}
          subtitle={n.channelsFullSub}
          csv={$(`channels`, [n.channelsFull, n.thSessions], e.channels)}
        >
          <J items={e.channels} unit={n.unitSessions} accent={`var(--dash-c3)`} />
        </Y>
        <Y title={n.devices} subtitle={n.devicesSub}>
          <J
            items={e.devices}
            formatLabel={(e) => n.deviceNames[e] || e}
            unit={n.unitSessions}
            accent={`var(--dash-c1)`}
          />
        </Y>
      </div>
      <Y
        title={n.landings}
        subtitle={r ? `${n.landingsSub} · ${n.landingsBounceSub}` : n.landingsSub}
        csv={Q(
          `landing-pages`,
          [n.thPage, n.thSessions, n.thBounce],
          (e.landings || []).map((e) => [e.label, e.value, K(e.bounce, 0)]),
        )}
      >
        <Je
          columns={r ? [n.thPage, n.thSessions, n.thBounce] : [n.thPage, n.thSessions]}
          rows={(e.landings || []).map((e) =>
            r ? [e.label, G(e.value), K(e.bounce, 0)] : [e.label, G(e.value)],
          )}
        />
      </Y>
    </U.Fragment>
  );
}
function zt({ search: e }) {
  let { c: t } = z();
  if (!e)
    return (
      <div className={`flex flex-col items-center gap-3 py-16`} role={`status`}>
        <Be scene={`loader`} className={`h-12 w-[120px]`} />
        <p className={`text-sm text-[var(--dash-muted)]`}>
          {t.searchLoading}
          {`…`}
        </p>
      </div>
    );
  if (e.unavailable) {
    let n = t.gscReasons[e.unavailable] || t.gscReasons.failed;
    return (
      <Y title={n.title}>
        <ol
          className={`list-decimal pl-5 space-y-2 text-sm text-[var(--dash-ink)] leading-relaxed`}
        >
          {n.steps.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ol>
        {e.message && (
          <p className={`mt-4 text-xs text-[var(--dash-muted)] break-all`}>
            {`(`}
            {e.message}
            {`)`}
          </p>
        )}
      </Y>
    );
  }
  let { totals: n, previous: r, queries: i = [], pages: a = [], coverage: o } = e,
    s = i
      .filter((e) => e.position >= 8 && e.position <= 20 && e.impressions > 0)
      .sort((e, t) => t.impressions - e.impressions)
      .slice(0, 12),
    c = i.filter((e) => Mt(e.label)),
    l = i.filter((e) => !Mt(e.label)),
    u = (e, t) => e.reduce((e, n) => e + (n[t] || 0), 0),
    d = [
      {
        label: t.brandQueries,
        impressions: u(c, `impressions`),
        clicks: u(c, `clicks`),
      },
      {
        label: t.nonBrandQueries,
        impressions: u(l, `impressions`),
        clicks: u(l, `clicks`),
      },
    ],
    f = jt(e.queryPages, Mt),
    p = [
      {
        key: `label`,
        label: t.thQuery,
      },
      {
        key: `clicks`,
        label: t.thClicks,
        format: G,
      },
      {
        key: `impressions`,
        label: t.thImpressions,
        format: G,
      },
      {
        key: `ctr`,
        label: t.thCtr,
        format: (e) => K(e),
      },
      {
        key: `position`,
        label: t.thPosition,
        format: (e) => (e || 0).toFixed(1),
        lowerIsBetter: !0,
      },
    ],
    m = (e, n, r) =>
      Q(
        e,
        [r, t.thClicks, t.thImpressions, t.thCtr, t.thPosition],
        n.map((e) => [e.label, e.clicks, e.impressions, K(e.ctr), (e.position || 0).toFixed(1)]),
      );
  return (
    <U.Fragment>
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        <_Element2
          label={t.searchClicks}
          value={n.clicks}
          previous={r.clicks}
          accent={`var(--dash-c1)`}
          hint={t.searchClicksHint}
        />
        <_Element2
          label={t.searchImpressions}
          value={n.impressions}
          previous={r.impressions}
          accent={`var(--dash-c3)`}
          hint={t.searchImpressionsHint}
        />
        <_Element2
          label={t.searchCtr}
          value={n.ctr}
          previous={r.ctr}
          format={(e) => K(e)}
          accent={`var(--dash-c4)`}
        />
        <_Element2
          label={t.searchPosition}
          value={n.position}
          previous={r.position}
          format={(e) => (e || 0).toFixed(1)}
          invert={!0}
          accent={`var(--dash-c2)`}
          hint={t.searchPositionHint}
        />
      </div>
      {e.range && (
        <p className={`text-xs text-[var(--dash-muted)]`}>
          {t.searchRangeNote(e.range.startDate, e.range.endDate)}
        </p>
      )}
      <Y title={t.searchTrend} subtitle={t.searchTrendSub}>
        <_Element4
          data={(e.timeseries || []).map((e) => ({
            date: e.date,
            users: e.impressions,
            sessions: e.clicks,
          }))}
          labels={{
            primary: t.searchImpressions,
            secondary: t.searchClicks,
          }}
        />
      </Y>
      <Y title={t.topQueries} subtitle={t.topQueriesSub} csv={m(`search-queries`, i, t.thQuery)}>
        <X columns={p} rows={i} initial={`clicks`} />
      </Y>
      <div className={`grid gap-6 lg:grid-cols-2`}>
        <Y
          title={t.brandSplit}
          subtitle={t.brandSplitSub}
          csv={Q(
            `brand-vs-generic`,
            [``, t.brandImpressions, t.brandClicks],
            d.map((e) => [e.label, e.impressions, e.clicks]),
          )}
        >
          <p className={`text-sm font-medium text-[var(--dash-muted)] mb-2`}>
            {t.brandImpressions}
          </p>
          <J
            items={d.map((e) => ({
              label: e.label,
              value: e.impressions,
            }))}
            unit={t.unitTimes}
            accent={`var(--dash-c3)`}
          />
          <p className={`text-sm font-medium text-[var(--dash-muted)] mt-5 mb-2`}>
            {t.brandClicks}
          </p>
          <J
            items={d.map((e) => ({
              label: e.label,
              value: e.clicks,
            }))}
            unit={t.unitTimes}
            accent={`var(--dash-c1)`}
          />
        </Y>
        <Y
          title={t.lowCtr}
          subtitle={t.lowCtrSub}
          csv={Q(
            `titles-to-rewrite`,
            [t.thQuery, t.thPageToFix, t.thImpressions, t.thCtr, t.thPosition],
            f.map((e) => [e.query, e.page, e.impressions, K(e.ctr), (e.position || 0).toFixed(1)]),
          )}
        >
          <X
            columns={[
              {
                key: `query`,
                label: t.thQuery,
              },
              {
                key: `page`,
                label: t.thPageToFix,
              },
              {
                key: `impressions`,
                label: t.thImpressions,
                format: G,
              },
              {
                key: `ctr`,
                label: t.thCtr,
                format: (e) => K(e),
              },
            ]}
            rows={f.map((e) => ({
              ...e,
              key: `${e.query}|${e.page}`,
            }))}
            initial={`impressions`}
            limit={10}
            emptyNote={t.lowCtrEmpty}
          />
        </Y>
      </div>
      <div className={`grid gap-6`}>
        <Y
          title={t.nearFirstPage}
          subtitle={t.nearFirstPageSub}
          csv={m(`near-first-page`, s, t.thQuery)}
        >
          <X columns={p} rows={s} initial={`impressions`} limit={12} />
        </Y>
        <Y
          title={t.searchPagesCard}
          subtitle={t.searchPagesSub}
          csv={m(`search-pages`, a, t.thPage)}
        >
          <X
            columns={[
              {
                ...p[0],
                label: t.thPage,
              },
              ...p.slice(1),
            ]}
            rows={a}
            initial={`clicks`}
          />
        </Y>
      </div>
      {o?.total > 0 && (
        <Y
          title={t.coverage}
          subtitle={t.coverageSub}
          csv={Q(
            `pages-not-in-search`,
            [t.thPage],
            (o.missing || []).map((e) => [e]),
          )}
        >
          <p className={`text-sm text-[var(--dash-ink)]`}>{t.coverageCount(o.shown, o.total)}</p>
          {o.missing?.length ? (
            <ul className={`mt-4 grid gap-1 text-sm text-[var(--dash-muted)] sm:grid-cols-2`}>
              {o.missing.map((e) => (
                <li key={e} className={`break-all`}>
                  {e}
                </li>
              ))}
            </ul>
          ) : (
            <p className={`mt-2 text-sm text-[var(--dash-muted)]`}>{t.coverageAllShown}</p>
          )}
        </Y>
      )}
    </U.Fragment>
  );
}
function Bt({ data: e, line: t }) {
  let { c: n } = z(),
    r = e.cta;
  if (r?.unavailable)
    return (
      <U.Fragment>
        <Y title={n.ctaSetupTitle} subtitle={n.ctaSetupSub}>
          <ol
            className={`list-decimal pl-5 space-y-2 text-sm text-[var(--dash-ink)] leading-relaxed`}
          >
            {n.ctaSetupSteps.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
          <p className={`mt-4 text-xs text-[var(--dash-muted)] break-all`}>
            {`(`}
            {r.unavailable}
            {`)`}
          </p>
        </Y>
        <Ut line={t} cta={null} />
      </U.Fragment>
    );
  let i = new Map((e.pages || []).map((e) => [e.path, e.views])),
    a = (r?.byPage || []).map((e) => ({
      label: e.label,
      clicks: e.value,
      views: i.get(e.label) || 0,
      rate: i.get(e.label) ? e.value / i.get(e.label) : 0,
    }));
  return (
    <U.Fragment>
      <div className={`grid gap-4 sm:grid-cols-3`}>
        <_Element2
          label={n.ctaClicks}
          value={r?.total ?? 0}
          previous={r?.totalPrevious ?? 0}
          accent={`var(--dash-c2)`}
        />
        <_Element2
          label={n.users}
          value={e.totals.users}
          previous={e.totals.previous.users}
          accent={`var(--dash-c1)`}
        />
        <_Element2
          label={n.contactRate}
          value={e.totals.users ? ((r?.total ?? 0) / e.totals.users) * 100 : 0}
          previous={
            e.totals.previous.users ? ((r?.totalPrevious ?? 0) / e.totals.previous.users) * 100 : 0
          }
          format={(e) => `${(e || 0).toFixed(1)}%`}
          accent={`var(--dash-c3)`}
          hint={n.contactRateHint}
        />
      </div>
      <div className={`grid gap-6 lg:grid-cols-3`}>
        <Y
          title={n.ctaChannel}
          subtitle={n.ctaChannelSub}
          csv={$(
            `contact-channels`,
            [n.ctaChannel, n.thCtaClicks],
            (r?.byChannel || []).map((e) => ({
              ...e,
              label: n.channelsNames[e.label] || e.label,
            })),
          )}
        >
          <J
            items={r?.byChannel}
            formatLabel={(e) => n.channelsNames[e] || e || n.channelsNames.other}
            unit={n.unitTimes}
            accent={`var(--dash-c2)`}
            emptyNote={n.emptyCta}
          />
        </Y>
        <Y
          title={n.ctaPlacement}
          subtitle={n.ctaPlacementSub}
          csv={$(
            `contact-placement`,
            [n.ctaPlacement, n.thCtaClicks],
            (r?.byPlacement || []).map((e) => ({
              ...e,
              label: n.placementNames[e.label] || e.label,
            })),
          )}
        >
          {r?.placementUnavailable ? (
            <p className={`text-sm text-[var(--dash-muted)] leading-relaxed`}>
              {n.ctaPlacementUnavailable}
            </p>
          ) : (
            <J
              items={r?.byPlacement}
              formatLabel={(e) => n.placementNames[e] || e}
              unit={n.unitTimes}
              accent={`var(--dash-c2)`}
              emptyNote={n.emptyCta}
            />
          )}
        </Y>
        <Y
          title={n.ctaLabels}
          subtitle={n.ctaLabelsSub}
          csv={$(`contact-buttons`, [n.ctaLabels, n.thCtaClicks], r?.byLabel)}
        >
          <J
            items={r?.byLabel}
            unit={n.unitTimes}
            accent={`var(--dash-c2)`}
            emptyNote={n.emptyCta}
          />
        </Y>
      </div>
      <Y
        title={n.ctaPages}
        subtitle={n.ctaPagesSub}
        csv={Q(
          `contact-by-page`,
          [n.thPage, n.thCtaClicks, n.thViews, n.contactRate],
          a.map((e) => [e.label, e.clicks, Math.round(e.views), K(e.rate)]),
        )}
      >
        <X
          columns={[
            {
              key: `label`,
              label: n.thPage,
            },
            {
              key: `clicks`,
              label: n.thCtaClicks,
              format: G,
            },
            {
              key: `views`,
              label: n.thViews,
              format: G,
            },
            {
              key: `rate`,
              label: n.contactRate,
              format: (e) => K(e),
            },
          ]}
          rows={a}
          initial={`clicks`}
          emptyNote={n.emptyCta}
        />
      </Y>
      <Ut line={t} cta={r} />
    </U.Fragment>
  );
}
function Vt({ cta: e }) {
  let { c: t } = z(),
    n = e?.line;
  return n ? (
    <Y
      title={t.webToLine}
      csv={
        n.pages.length
          ? Q(
              `line-from-website`,
              [t.thPage, t.webToLinePeople, t.webToLineClicks],
              n.pages.map((e) => [e.label, e.value, e.clicks]),
            )
          : void 0
      }
    >
      <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1`}>
        <p className={`font-display text-4xl font-semibold tabular-nums text-[var(--dash-ink)]`}>
          {G(n.people)}
        </p>
        <p className={`text-base text-[var(--dash-ink)]`}>{t.webToLineHeadline}</p>
      </div>
      {n.clicks > n.people && (
        <p className={`mt-1 text-sm text-[var(--dash-muted)]`}>
          {t.webToLineClicksNote(G(n.clicks))}
        </p>
      )}
      {n.pages.length > 0 ? (
        <div className={`mt-6`}>
          <p className={`text-sm font-medium text-[var(--dash-muted)] mb-3`}>{t.webToLineByPage}</p>
          <J
            items={n.pages}
            formatLabel={(e) => {
              let n = t.pageNames[e.replace(/^\/en(?=\/|$)/, ``) || `/`];
              return n ? `${n} (${e})` : e;
            }}
            unit={t.unitPeople}
            accent={`#06C755`}
          />
        </div>
      ) : (
        <p className={`mt-4 text-sm text-[var(--dash-muted)]`}>{t.webToLineNone}</p>
      )}
      <p className={`mt-5 text-xs leading-relaxed text-[var(--dash-muted)]`}>{t.webToLineNote}</p>
    </Y>
  ) : (
    <Y title={t.webToLine}>
      <p className={`text-sm text-[var(--dash-muted)]`}>{t.webToLineNoCta}</p>
    </Y>
  );
}
var Ht = (e, t) =>
  new Date(`${e.slice(0, 4)}-${e.slice(4, 6)}-${e.slice(6, 8)}T00:00:00`).toLocaleDateString(
    t === `en` ? `en-GB` : `th-TH`,
    {
      day: `numeric`,
      month: `long`,
      year: `numeric`,
    },
  );
function Ut({ line: e, cta: t }) {
  let { lang: n, c: r } = z(),
    i = (
      <div className={`flex items-center gap-3 pt-2`}>
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white`}
          style={{
            background: `#06C755`,
          }}
          aria-hidden={`true`}
        >{`LINE`}</span>
        <div>
          <h2 className={`font-display text-lg font-medium text-[var(--dash-ink)]`}>
            {r.lineTitle}
          </h2>
          {e?.asOf && (
            <p className={`text-xs text-[var(--dash-muted)]`}>{r.lineAsOf(Ht(e.asOf, n))}</p>
          )}
        </div>
      </div>
    );
  if (!e)
    return (
      <U.Fragment>
        {i}
        <div className={`flex flex-col items-center gap-3 py-10 print:hidden`} role={`status`}>
          <Be scene={`loader`} className={`h-12 w-[120px]`} />
          <p className={`text-sm text-[var(--dash-muted)]`}>
            {r.lineLoading}
            {`…`}
          </p>
        </div>
      </U.Fragment>
    );
  if (e.unavailable) {
    let t = r.lineReasons[e.unavailable] || r.lineReasons.failed;
    return (
      <U.Fragment>
        {i}
        <Y title={t.title}>
          <ol
            className={`list-decimal pl-5 space-y-2 text-sm text-[var(--dash-ink)] leading-relaxed`}
          >
            {t.steps.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
          {e.message && (
            <p className={`mt-4 text-xs text-[var(--dash-muted)] break-all`}>
              {`(`}
              {e.message}
              {`)`}
            </p>
          )}
        </Y>
      </U.Fragment>
    );
  }
  let a = e.demographic,
    o = (e, t, n) =>
      (e || [])
        .filter((e) => e.percentage > 0)
        .map((e) => ({
          label: (n && n[e[t]]) || e[t],
          value: e.percentage,
        }));
  return (
    <U.Fragment>
      {i}
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
        <_Element2
          label={r.lineReach}
          value={e.now.reach}
          previous={null}
          accent={`#06C755`}
          hint={r.lineReachHint}
          trend={e.series?.map((e) => e.reach)}
        />
        <_Element2
          label={r.lineJoined}
          value={e.joined ?? 0}
          previous={null}
          format={(e) => `+${G(e)}`}
          accent={`var(--dash-c1)`}
        />
        <_Element2
          label={r.lineBlocked}
          value={e.blocked ?? 0}
          previous={null}
          format={(e) => `+${G(e)}`}
          accent={`var(--dash-c2)`}
          hint={r.lineBlockedHint}
        />
        {e.quota && (
          <_Element2
            label={r.lineQuota}
            value={e.quota.used}
            previous={null}
            accent={`var(--dash-c4)`}
            hint={e.quota.limit ? r.lineQuotaOf(G(e.quota.limit)) : r.lineQuotaUnlimited}
          />
        )}
      </div>
      <Vt cta={t} />
      {a && (
        <Y title={r.lineWho} subtitle={r.lineWhoSub}>
          {a.available ? (
            <div className={`grid gap-8 lg:grid-cols-3`}>
              <div>
                <p className={`text-sm font-medium text-[var(--dash-muted)] mb-3`}>
                  {r.lineGender}
                </p>
                <J items={o(a.genders, `gender`, r.lineGenders)} unit={`%`} accent={`#06C755`} />
              </div>
              <div>
                <p className={`text-sm font-medium text-[var(--dash-muted)] mb-3`}>{r.lineAge}</p>
                <J items={o(a.ages, `age`, r.lineAges)} unit={`%`} accent={`#06C755`} />
              </div>
              <div>
                <p className={`text-sm font-medium text-[var(--dash-muted)] mb-3`}>{r.lineArea}</p>
                <J
                  items={o(a.areas, `area`).slice(0, 8)}
                  formatLabel={(e) => (n === `th` && Ce[e]) || e}
                  unit={`%`}
                  accent={`#06C755`}
                />
              </div>
            </div>
          ) : (
            <p className={`text-sm text-[var(--dash-muted)]`}>{r.lineWhoUnavailable}</p>
          )}
        </Y>
      )}
    </U.Fragment>
  );
}
var Wt = {
  overview: Ft,
  pages: It,
  audience: Lt,
  traffic: Rt,
  search: zt,
  cta: Bt,
};
function Gt({ data: e, search: t, line: n, rangeLabel: r, onDone: i }) {
  let { lang: a, c: o } = z(),
    s = (0, p.useRef)(null);
  (0, p.useEffect)(() => {
    let e = setTimeout(() => window.print(), 900),
      t = setTimeout(() => i?.(), 12e4),
      n = () => i?.();
    return (
      window.addEventListener(`afterprint`, n),
      () => {
        (clearTimeout(e), clearTimeout(t), window.removeEventListener(`afterprint`, n));
      }
    );
  }, [i]);
  let c = new Date().toLocaleString(a === `en` ? `en-GB` : `th-TH`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
    hour: `2-digit`,
    minute: `2-digit`,
  });
  return (
    <div
      ref={s}
      className={`dash-print absolute -left-[9999px] top-0 w-[760px] print:static print:left-auto print:w-full`}
      aria-hidden={`true`}
    >
      <header className={`mb-6`}>
        <h1 className={`font-display text-2xl font-semibold text-[var(--dash-ink)]`}>
          {o.reportTitle}
        </h1>
        <p className={`text-sm text-[var(--dash-muted)] mt-1`}>
          {o.source}
          {` · `}
          {r}
          {` · `}
          {o.reportTaken}
          {` `}
          {c}
        </p>
      </header>
      {Nt.map((r) => {
        let _Element1 = Wt[r.key];
        return Pt.has(r.key) && !t ? null : (
          <section key={r.key} data-print-section={!0} className={`mb-8`}>
            <h2
              className={`font-display text-xl font-semibold text-[var(--dash-ink)] mb-4 border-b border-[var(--dash-border)] pb-2`}
            >
              {o[r.labelKey]}
            </h2>
            <div className={`space-y-5`}>
              <_Element1 data={e} search={t} line={n} forPrint={!0} />
            </div>
          </section>
        );
      })}
      <p className={`text-xs text-[var(--dash-muted)] leading-relaxed`}>{o.footnote}</p>
    </div>
  );
}
var Kt = /localhost|127\.0\.0\.1|vercel\.app|\.local$/i,
  qt = [
    [/submitted and indexed|indexed, not submitted/i, `ok`, `อยู่ใน Google แล้ว`, `In Google`],
    [
      /discovered/i,
      `wait`,
      `Google รู้ว่ามีหน้านี้ แต่ยังไม่ได้เข้ามาอ่าน (รอคิว)`,
      `Known to Google, not crawled yet (queued)`,
    ],
    [
      /crawled/i,
      `warn`,
      `Google อ่านแล้ว แต่ยังไม่เลือกเก็บ (มักเพราะเนื้อหาน้อยหรือคล้ายหน้าอื่น)`,
      `Crawled but not kept (often thin or similar content)`,
    ],
    [/unknown/i, `wait`, `Google ยังไม่รู้จักหน้านี้`, `Unknown to Google`],
    [
      /duplicate|canonical/i,
      `warn`,
      `Google มองว่าซ้ำกับหน้าอื่น`,
      `Treated as a duplicate of another page`,
    ],
    [/noindex/i, `bad`, `ถูกตั้งไม่ให้ index (noindex)`, `Excluded by noindex`],
    [/robots/i, `bad`, `ถูก robots.txt บล็อก`, `Blocked by robots.txt`],
    [/redirect/i, `warn`, `หน้านี้ redirect ไปที่อื่น`, `Redirects elsewhere`],
    [/not found|404/i, `bad`, `หาไม่เจอ (404)`, `Not found (404)`],
  ],
  Jt = (e, t) => {
    let n = qt.find(([t]) => t.test(e || ``));
    return n
      ? {
          tone: n[1],
          text: t ? n[2] : n[3],
        }
      : {
          tone: `warn`,
          text: e || `–`,
        };
  },
  Yt = {
    ok: `✅`,
    wait: `⏳`,
    warn: `⚠️`,
    bad: `⛔`,
  };
function Xt({ th: e, onResults: t }) {
  let [n, r] = (0, p.useState)({
    status: `idle`,
    done: 0,
    total: 0,
    results: [],
  });
  async function i() {
    let e = 0,
      n = [];
    r({
      status: `running`,
      done: 0,
      total: 0,
      results: n,
    });
    for (let t = 0; t < 30; t += 1) {
      let t = await fetch(`/api/ga4`, {
        method: `POST`,
        headers: {
          "content-type": `application/json`,
        },
        body: JSON.stringify({
          action: `inspect`,
          offset: e,
        }),
      }).then((e) => e.json());
      if (t.unavailable)
        return r({
          status: `error`,
          error: t.unavailable,
          done: 0,
          total: 0,
          results: n,
        });
      if (
        ((n = [...n, ...t.results]),
        r({
          status: `running`,
          done: t.next,
          total: t.total,
          results: n,
        }),
        t.next >= t.total || !t.results.length)
      )
        break;
      e = t.next;
    }
    (r((e) => ({
      ...e,
      status: `done`,
    })),
      t(n));
  }
  let a = {};
  for (let t of n.results) {
    let n = t.error ? (e ? `ตรวจไม่สำเร็จ` : `Check failed`) : Jt(t.coverage, e).text;
    a[n] = (a[n] || 0) + 1;
  }
  let o = n.results.filter((e) => e.lastCrawl).length;
  return (
    <Y
      title={
        e
          ? `สถานะการ index ใน Google (ทุกหน้าใน sitemap)`
          : `Index status in Google (every sitemap page)`
      }
      subtitle={
        e
          ? `ถาม Google โดยตรงผ่าน Search Console ทีละหน้า ใช้เวลาประมาณ 1 นาที · Google ให้ตรวจได้ 2,000 ครั้งต่อวัน`
          : `Asks Google directly through Search Console, page by page; about a minute · 2,000 checks a day`
      }
    >
      <button
        type={`button`}
        onClick={i}
        disabled={n.status === `running`}
        className={`inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-white disabled:opacity-60`}
        style={{
          background: `var(--dash-series)`,
        }}
      >
        {n.status === `running`
          ? `${e ? `กำลังตรวจ` : `Checking`} ${n.done}/${n.total || `…`}`
          : e
            ? `ตรวจทุกหน้า`
            : `Check every page`}
      </button>
      {n.status === `error` && (
        <p className={`mt-3 text-sm break-all text-[var(--dash-muted)]`}>{n.error}</p>
      )}
      {n.results.length > 0 && (
        <U.Fragment>
          <ul className={`mt-5 space-y-1.5 text-sm text-[var(--dash-ink)]`}>
            {Object.entries(a)
              .sort((e, t) => t[1] - e[1])
              .map(([t, n]) => (
                <li key={t}>
                  <strong className={`tabular-nums`}>{n}</strong>
                  {` `}
                  {e ? `หน้า` : `pages`}
                  {` · `}
                  {t}
                </li>
              ))}
            <li className={`text-[var(--dash-muted)]`}>
              {e ? `Google เคยเข้ามาอ่านแล้ว ${o} หน้า` : `${o} pages have been crawled`}
            </li>
          </ul>
          <div className={`mt-5`}>
            <Je
              columns={[
                e ? `หน้า` : `page`,
                e ? `สถานะ` : `status`,
                e ? `อ่านล่าสุด` : `last crawl`,
              ]}
              rows={n.results.map((t) => {
                let n = t.error
                  ? {
                      tone: `bad`,
                      text: t.error,
                    }
                  : Jt(t.coverage, e);
                return [
                  t.path,
                  `${Yt[n.tone]} ${n.text}`,
                  t.lastCrawl ? t.lastCrawl.slice(0, 10) : `–`,
                ];
              })}
            />
          </div>
        </U.Fragment>
      )}
    </Y>
  );
}
function Zt({ body: e }) {
  let { lang: t } = z(),
    n = t !== `en`,
    [r, i] = (0, p.useState)(null),
    [a, o] = (0, p.useState)(!1),
    [s, c] = (0, p.useState)(null),
    l = JSON.stringify(e);
  if (
    ((0, p.useEffect)(() => {
      let e = !0;
      return (
        i(null),
        fetch(`/api/ga4`, {
          method: `POST`,
          headers: {
            "content-type": `application/json`,
          },
          body: JSON.stringify({
            action: `audit`,
            ...JSON.parse(l),
          }),
        })
          .then((e) => e.json())
          .then((t) => e && i(t))
          .catch(
            (t) =>
              e &&
              i({
                unavailable: String(t.message || t),
              }),
          ),
        () => {
          e = !1;
        }
      );
    }, [l]),
    !r)
  )
    return (
      <p className={`py-12 text-center text-[var(--dash-muted)]`}>
        {n ? `กำลังตรวจข้อมูล…` : `Checking…`}
      </p>
    );
  if (r.unavailable)
    return (
      <Y title={n ? `ตรวจข้อมูลไม่สำเร็จ` : `The check failed`}>
        <p className={`text-sm break-all text-[var(--dash-muted)]`}>{r.unavailable}</p>
      </Y>
    );
  let u = [],
    d = (r.streams || [])
      .filter((e) => e.type === `WEB_DATA_STREAM`)
      .some((e) => e.enhancedMeasurement?.pageChangesEnabled);
  r.streams && d
    ? u.push({
        bad: !0,
        text: n
          ? `GA4 เปิด "Page changes based on browser history events" อยู่ ขณะที่เว็บไซต์ส่งการเข้าชมหน้าเองด้วย การเข้าชมหน้าจึงถูกนับซ้ำประมาณ 2 เท่า วิธีแก้: GA4 → Admin → Data streams → เลือก stream ของเว็บไซต์ → Enhanced measurement (ไอคอนฟันเฟือง) → Page views → Show advanced settings → ปิด "Page changes based on browser history events" แล้วกด Save`
          : `GA4 has "Page changes based on browser history events" on while the site also sends its own page views, so views are counted about twice. Fix: GA4 → Admin → Data streams → the website stream → Enhanced measurement (gear) → Page views → Show advanced settings → turn off "Page changes based on browser history events" → Save`,
      })
    : r.streams
      ? u.push({
          bad: !1,
          text: n
            ? `ไม่พบการนับการเข้าชมหน้าซ้ำจากการตั้งค่า GA4`
            : `No double counting of page views from GA4 settings`,
        })
      : u.push({
          bad: null,
          text: n
            ? `อ่านการตั้งค่า GA4 ไม่ได้ (${r.adminError}) ถ้าต้องการให้ตรวจข้อนี้ ให้เปิด Google Analytics Admin API ใน Google Cloud project เดียวกับ service account`
            : `GA4 settings could not be read (${r.adminError}); enable the Google Analytics Admin API in the service account's Google Cloud project to check this`,
        });
  let f = (r.hosts || []).filter((e) => Kt.test(e.host));
  if (f.length) {
    let e = f.reduce((e, t) => e + t.views, 0);
    u.push({
      bad: !0,
      text: n
        ? `มีข้อมูลจากเว็บทดสอบปนอยู่ (${f.map((e) => e.host).join(`, `)}) รวม ${G(e)} การเข้าชม`
        : `Testing traffic is mixed in (${f.map((e) => e.host).join(`, `)}): ${G(e)} views`,
    });
  }
  if (r.firstDayWithData) {
    let e = r.firstDayWithData,
      t = `${e.slice(6, 8)}/${e.slice(4, 6)}/${e.slice(0, 4)}`;
    u.push({
      bad: null,
      text: n
        ? `GA4 เริ่มมีข้อมูลวันที่ ${t} ช่วงก่อนหน้านั้นจึงไม่มีตัวเลขให้เทียบ`
        : `GA4 has data from ${t}; there is nothing to compare with before that`,
    });
  }
  let m = JSON.stringify(
      s
        ? {
            ...r,
            index: s,
          }
        : r,
      null,
      2,
    ),
    h = async () => {
      try {
        (await navigator.clipboard.writeText(m), o(!0), setTimeout(() => o(!1), 2e3));
      } catch {}
    },
    g = (e, t, n) => (
      <Y title={e}>
        <Je columns={t} rows={n} />
      </Y>
    );
  return (
    <U.Fragment>
      <Y title={n ? `ตรวจคุณภาพข้อมูล` : `Data quality check`}>
        <ul className={`space-y-3`}>
          {u.map((e) => (
            <li
              key={e.text}
              className={`flex gap-3 text-sm leading-relaxed text-[var(--dash-ink)]`}
            >
              <span aria-hidden={`true`}>{e.bad === !0 ? `⚠️` : e.bad === !1 ? `✅` : `ℹ️`}</span>
              <span>{e.text}</span>
            </li>
          ))}
        </ul>
        <button
          type={`button`}
          onClick={h}
          className={`mt-5 inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-white`}
          style={{
            background: `var(--dash-series)`,
          }}
        >
          {a ? (n ? `คัดลอกแล้ว` : `Copied`) : n ? `คัดลอกผลตรวจทั้งหมด` : `Copy the full result`}
        </button>
      </Y>
      <Xt th={n} onResults={c} />
      {g(
        n ? `Event ทั้งหมด` : `All events`,
        [`event`, n ? `จำนวนครั้ง` : `count`, n ? `ผู้ใช้` : `users`],
        (r.events || []).map((e) => [e.event, G(e.count), G(e.users)]),
      )}
      {g(
        n ? `โดเมนที่ส่งข้อมูล` : `Host names`,
        [`host`, `views`, `sessions`, `users`],
        (r.hosts || []).map((e) => [e.host, G(e.views), G(e.sessions), G(e.users)]),
      )}
      {g(
        n ? `หน้าที่มีการเข้าชมมากที่สุด` : `Most viewed pages`,
        [`page`, `views`, `sessions`, `views / session`],
        (r.pages || []).map((e) => [
          e.page,
          G(e.views),
          G(e.sessions),
          e.sessions ? (e.views / e.sessions).toFixed(1) : `–`,
        ]),
      )}
      {g(
        n
          ? `ใครเปิดเยอะที่สุด (เมือง · วัน · เบราว์เซอร์) — เมืองเดาจาก IP ของผู้ให้บริการอินเทอร์เน็ต จึงอาจไม่ตรงกับที่อยู่จริง`
          : `Heaviest readers (city · day · browser) — the city is guessed from the internet provider’s address and is often wrong`,
        [
          n ? `เมือง · วันที่` : `city · date`,
          n ? `เบราว์เซอร์ · ระบบ · อุปกรณ์` : `browser · system · device`,
          `views`,
          `sessions`,
        ],
        (r.heavy || []).map((e) => [
          `${e.city} · ${e.date.slice(6, 8)}/${e.date.slice(4, 6)}`,
          `${e.browser} · ${e.os} · ${e.device}`,
          G(e.views),
          G(e.sessions),
        ]),
      )}
      {g(
        n ? `พื้นที่และอุปกรณ์` : `Places and devices`,
        [`city / device`, `users`, `sessions`, `views`],
        (r.places || []).map((e) => [
          `${e.city} · ${e.device}`,
          G(e.users),
          G(e.sessions),
          G(e.views),
        ]),
      )}
    </U.Fragment>
  );
}
var Qt = [
    {
      days: 7,
      labelKey: `days7`,
    },
    {
      days: 28,
      labelKey: `days28`,
    },
    {
      days: 90,
      labelKey: `days90`,
    },
  ],
  $t = 13,
  en = 864e5,
  tn = (e) => new Date(e).toISOString().slice(0, 10),
  nn = (e) =>
    e.mode === `month`
      ? {
          month: e.month,
        }
      : e.mode === `custom`
        ? {
            start: e.start,
            end: e.end,
          }
        : {
            days: e.days,
          },
  rn = () => tn(Date.now()).slice(0, 7),
  an = (e) => (/^\d+$/.test(e) ? Number(e) : e),
  on = (e, t) => (e > t ? e : t),
  sn = (e, t) => (e < t ? e : t),
  cn = `kmc-dash-theme`,
  ln = `kmc-dash-lang`,
  un = {
    overview: Ft,
    pages: It,
    audience: Lt,
    traffic: Rt,
    search: zt,
    cta: Bt,
  };
function dn(e, t, n) {
  let r = (0, p.useRef)(new Map()),
    [i, a] = (0, p.useState)(null),
    o = JSON.stringify(nn(n));
  return (
    (0, p.useEffect)(() => {
      if (!t) return;
      let n = r.current.get(o);
      if (n) return a(n);
      let i = !0;
      return (
        a(null),
        fetch(`/api/ga4`, {
          method: `POST`,
          headers: {
            "content-type": `application/json`,
          },
          body: JSON.stringify({
            action: e,
            ...JSON.parse(o),
          }),
        })
          .then((e) => e.json())
          .then((e) => {
            i && (e?.unavailable || r.current.set(o, e), a(e));
          })
          .catch((e) => {
            i &&
              a({
                unavailable: `failed`,
                message: String(e.message || e),
              });
          }),
        () => {
          i = !1;
        }
      );
    }, [e, t, o]),
    i
  );
}
function fn() {
  let [e, t] = (0, p.useState)(() => {
    try {
      return localStorage.getItem(cn) || `light`;
    } catch {
      return `light`;
    }
  });
  return (
    (0, p.useEffect)(() => {
      document.documentElement.dataset.dashTheme = e;
      try {
        localStorage.setItem(cn, e);
      } catch {}
      return () => delete document.documentElement.dataset.dashTheme;
    }, [e]),
    [e, () => t((e) => (e === `dark` ? `light` : `dark`))]
  );
}
function pn() {
  let [e, t] = (0, p.useState)(() => {
    try {
      return localStorage.getItem(ln) || `th`;
    } catch {
      return `th`;
    }
  });
  return [
    e,
    (e) => {
      t(e);
      try {
        localStorage.setItem(ln, e);
      } catch {}
    },
  ];
}
function mn() {
  let [e, t] = pn(),
    r = R[e];
  a({
    title: r.title,
    noindex: !0,
  });
  let [o, u] = (0, p.useState)(!0),
    [d, m] = (0, p.useState)({
      mode: `days`,
      days: 28,
    }),
    [h, g] = (0, p.useState)({
      status: `loading`,
    }),
    [_, v] = fn(),
    [y, b] = (0, p.useState)(!1),
    { pathname: x } = n(),
    S = f() ? `` : `/admin`,
    C = S && x.startsWith(S) ? x.slice(S.length) || `/` : x,
    w = (e) => `${S}${e}`.replace(/\/$/, ``) || `/`,
    T = Nt.find((e) => e.path === C) || Nt[0],
    E = C === `/audit`,
    D = un[T.key],
    O = (0, p.useCallback)(
      async (t, n) => {
        g((e) => ({
          ...e,
          status: e.data ? `refreshing` : `loading`,
        }));
        try {
          let r = await fetch(`/api/ga4`, {
              method: `POST`,
              headers: {
                "content-type": `application/json`,
              },
              body: JSON.stringify(
                n
                  ? {
                      password: n,
                      ...nn(t),
                    }
                  : nn(t),
              ),
            }),
            i = await r.json().catch(() => ({}));
          if (r.status === 401)
            return (
              u(!1),
              g({
                status: `locked`,
                error: n ? R[e].wrongPassword : null,
              })
            );
          if (r.status === 429)
            return (
              u(!1),
              g({
                status: `locked`,
                error: R[e].lockedOut(i.retryInMinutes || 10),
              })
            );
          if (r.status === 503)
            return g({
              status: `setup`,
              missing: i.missing || [],
            });
          if (!r.ok)
            return g({
              status: `error`,
              reason: i.reason,
              error: i.message || `ดึงข้อมูลจาก GA4 ไม่สำเร็จ`,
            });
          (u(!0),
            g({
              status: `ready`,
              data: i,
            }));
        } catch (e) {
          g({
            status: `error`,
            error: String(e.message || e),
          });
        }
      },
      [e],
    );
  (0, p.useEffect)(() => {
    o && O(d);
  }, [o, d, O]);
  let k = o && h.status !== `loading` && h.status !== `locked`,
    A = dn(`search`, k && (T.key === `search` || y), d),
    j = dn(`line`, k && (T.key === `cta` || y), d),
    M = (0, p.useMemo)(
      () =>
        Array.from(
          {
            length: $t,
          },
          (t, n) => {
            let r = new Date();
            return (
              r.setUTCDate(1),
              r.setUTCMonth(r.getUTCMonth() - n),
              {
                value: `${r.getUTCFullYear()}-${String(r.getUTCMonth() + 1).padStart(2, `0`)}`,
                label: r.toLocaleDateString(e === `en` ? `en-GB` : `th-TH`, {
                  month: `long`,
                  year: `numeric`,
                  timeZone: `UTC`,
                }),
              }
            );
          },
        ),
      [e],
    ),
    N = (() => {
      if (d.mode === `month`) return M.find((e) => e.value === d.month)?.label || d.month;
      if (d.mode === `custom`) return r.rangeOf(d.start, d.end);
      let e = r[Qt.find((e) => e.days === d.days)?.labelKey];
      return r.rangeSuffix ? `${e} ${r.rangeSuffix}` : e;
    })(),
    P = [
      ...Qt.map((e) => ({
        value: e.days,
        label: r[e.labelKey],
      })),
      {
        value: `month`,
        label: r.rangeMonth,
      },
      {
        value: `custom`,
        label: r.rangeCustom,
      },
    ],
    ee = d.mode === `days` ? d.days : d.mode,
    te = (e) => {
      if (e === `month`)
        return m({
          mode: `month`,
          month: rn(),
        });
      if (e === `custom`) {
        let e = tn(Date.now());
        return m({
          mode: `custom`,
          start: tn(Date.now() - 27 * en),
          end: e,
        });
      }
      m({
        mode: `days`,
        days: Qt.some((t) => t.days === Number(e)) ? Number(e) : 28,
      });
    };
  if (h.status === `locked`)
    return (
      <we.Provider value={e}>
        <Cn error={h.error} onSubmit={(e) => O(d, e)} lang={e} onLang={t} />
      </we.Provider>
    );
  if (h.status === `setup`)
    return (
      <we.Provider value={e}>
        <_Element10 missing={h.missing} />
      </we.Provider>
    );
  let F = h.data;
  return (
    <we.Provider value={e}>
      <_Element11 reducedMotion={`user`}>
        <div className={`dash-root min-h-screen bg-[var(--dash-bg)] text-[var(--dash-ink)]`}>
          <header
            className={`border-b border-[var(--dash-border)] bg-[var(--dash-card)] print:hidden`}
          >
            <div className={`mx-auto max-w-6xl px-6`}>
              <div className={`flex items-center justify-between gap-4 py-3`}>
                <div className={`min-w-0`}>
                  <h1 className={`font-display text-lg font-semibold leading-tight truncate`}>
                    {r.title}
                  </h1>
                  <p className={`text-xs text-[var(--dash-muted)] truncate`}>
                    {r.source}
                    {h.status === `refreshing` && ` · ${r.updating}…`}
                  </p>
                </div>
                <div className={`flex items-center gap-1.5 shrink-0`}>
                  <_Element12 />
                  <_Element13
                    label={`Language`}
                    options={[`th`, `en`].map((e) => ({
                      value: e,
                      label: e.toUpperCase(),
                    }))}
                    value={e}
                    onChange={t}
                    size={`sm`}
                  />
                  <_n
                    onClick={v}
                    pressed={_ === `dark`}
                    title={_ === `dark` ? r.themeToLight : r.themeToDark}
                  >
                    {_ === `dark` ? <_Element14 /> : <_Element15 />}
                  </_n>
                  <button
                    type={`button`}
                    onClick={async () => {
                      (await fetch(`/api/ga4`, {
                        method: `POST`,
                        headers: {
                          "content-type": `application/json`,
                        },
                        body: JSON.stringify({
                          action: `logout`,
                        }),
                      }).catch(() => {}),
                        u(!1),
                        g({
                          status: `locked`,
                        }));
                    }}
                    title={r.signOut}
                    aria-label={r.signOut}
                    className={`inline-flex h-10 items-center gap-2 rounded-xl border border-rose-500/50 px-2.5 text-sm font-medium text-rose-600 transition hover:bg-rose-600 hover:text-white dark:text-rose-400 dark:hover:text-white`}
                  >
                    <_Element16 />
                    <span className={`hidden sm:inline`}>{r.signOut}</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div
            className={`relative sm:sticky sm:top-0 z-20 border-b border-[var(--dash-border)] bg-[var(--dash-card)]/90 backdrop-blur-md print:hidden`}
          >
            <span className={`dash-scanline`} aria-hidden={`true`} />
            <div className={`mx-auto max-w-6xl px-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-1.5`}>
                <nav
                  aria-label={r.sectionGroup}
                  className={`-mb-px flex gap-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
                >
                  {Nt.map((e) => {
                    let t = !E && e.key === T.key;
                    return (
                      <_Element
                        key={e.key}
                        to={w(e.path)}
                        aria-current={t ? `page` : void 0}
                        className={`relative whitespace-nowrap px-2.5 py-3 text-sm font-medium transition ${t ? `text-[var(--dash-ink)]` : `text-[var(--dash-muted)] hover:text-[var(--dash-ink)]`}`}
                      >
                        {r[e.labelKey]}
                        {t && (
                          <c.span
                            layoutId={`dash-tab-underline`}
                            className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full`}
                            style={{
                              background: `var(--dash-series)`,
                              boxShadow: `0 0 10px var(--dash-series)`,
                            }}
                            transition={{
                              type: `spring`,
                              stiffness: 520,
                              damping: 42,
                            }}
                            aria-hidden={`true`}
                          />
                        )}
                      </_Element>
                    );
                  })}
                </nav>
                <div className={`flex items-center gap-2 py-1`}>
                  <div className={`hidden sm:block`}>
                    <_Element13 label={r.rangeGroup} options={P} value={ee} onChange={te} />
                  </div>
                  <label className={`sm:hidden`}>
                    <span className={`sr-only`}>{r.rangeGroup}</span>
                    <select
                      value={ee}
                      onChange={(e) => te(an(e.target.value))}
                      className={`h-10 rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] px-2 text-sm text-[var(--dash-ink)] outline-none focus:border-[var(--dash-series)]`}
                    >
                      {P.map((e) => (
                        <option key={e.value} value={e.value}>
                          {e.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    type={`button`}
                    onClick={() => b(!0)}
                    disabled={!F || y}
                    title={r.downloadPdf}
                    aria-label={r.downloadPdf}
                    className={`inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--dash-border)] px-3 text-sm font-medium text-[var(--dash-muted)] transition hover:border-[var(--dash-series)] hover:text-[var(--dash-ink)] disabled:opacity-50`}
                  >
                    <Sn />
                    <span className={`hidden sm:inline 2xl:hidden`}>{y ? `…` : `PDF`}</span>
                    <span className={`hidden 2xl:inline`}>
                      {y ? `${r.preparingPdf}…` : r.downloadPdf}
                    </span>
                  </button>
                </div>
              </div>
              {d.mode !== `days` && (
                <div
                  className={`flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--dash-border)] py-2.5`}
                >
                  {d.mode === `month` ? (
                    <label className={`flex items-center gap-2 text-sm text-[var(--dash-muted)]`}>
                      {r.rangeMonthLabel}
                      <select
                        value={d.month}
                        onChange={(e) =>
                          m({
                            mode: `month`,
                            month: e.target.value,
                          })
                        }
                        className={`rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] px-3 py-2 text-sm text-[var(--dash-ink)] outline-none focus:border-[var(--dash-series)]`}
                      >
                        {M.map((e) => (
                          <option key={e.value} value={e.value}>
                            {e.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  ) : (
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2`}>
                      <label className={`flex items-center gap-2 text-sm text-[var(--dash-muted)]`}>
                        {r.rangeFrom}
                        <input
                          type={`date`}
                          value={d.start}
                          max={d.end}
                          onChange={(e) =>
                            m((t) => ({
                              ...t,
                              start: e.target.value,
                              end: on(e.target.value, t.end),
                            }))
                          }
                          className={`rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] px-3 py-2 text-sm text-[var(--dash-ink)] outline-none focus:border-[var(--dash-series)]`}
                        />
                      </label>
                      <label className={`flex items-center gap-2 text-sm text-[var(--dash-muted)]`}>
                        {r.rangeTo}
                        <input
                          type={`date`}
                          value={d.end}
                          min={d.start}
                          max={tn(Date.now())}
                          onChange={(e) =>
                            m((t) => ({
                              ...t,
                              end: e.target.value,
                              start: sn(e.target.value, t.start),
                            }))
                          }
                          className={`rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] px-3 py-2 text-sm text-[var(--dash-ink)] outline-none focus:border-[var(--dash-series)]`}
                        />
                      </label>
                    </div>
                  )}
                  <span className={`text-xs text-[var(--dash-muted)]`}>
                    {d.mode === `month`
                      ? r.rangeComparedMonth
                      : r.rangeComparedDays(
                          Math.round((Date.parse(d.end) - Date.parse(d.start)) / en) + 1,
                        )}
                  </span>
                </div>
              )}
            </div>
          </div>
          <main className={`mx-auto max-w-6xl px-6 py-8 space-y-6 print:hidden`}>
            {h.status === `error` && <Tn reason={h.reason} message={h.error} />}
            {F?.sample && (
              <p
                className={`rounded-2xl border border-amber-400 bg-amber-100 px-6 py-4 text-sm text-amber-900 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200`}
              >
                <strong>{r.sampleTitle}</strong>
                {` — `}
                {r.sampleBody}
              </p>
            )}
            {!F && h.status === `loading` && (
              <div className={`flex flex-col items-center gap-3 py-16`} role={`status`}>
                <Be scene={`loader`} className={`h-12 w-[120px]`} />
                <p className={`text-sm text-[var(--dash-muted)]`}>
                  {r.loading}
                  {`…`}
                </p>
              </div>
            )}
            {F && (
              <U.Fragment>
                <_Element17 mode={`wait`} initial={!1}>
                  <c.div
                    key={E ? `audit` : T.key}
                    className={`space-y-6`}
                    initial={{
                      opacity: 0,
                      y: 10,
                      filter: `blur(4px)`,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: `blur(0px)`,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                      filter: `blur(2px)`,
                    }}
                    transition={{
                      duration: 0.24,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {E ? <Zt body={nn(d)} /> : <D data={F} search={A} line={j} linkTo={w} />}
                  </c.div>
                </_Element17>
                <p className={`text-xs text-[var(--dash-muted)] leading-relaxed`}>{r.footnote}</p>
              </U.Fragment>
            )}
          </main>
          {y && F && <Gt data={F} search={A} line={j} rangeLabel={N} onDone={() => b(!1)} />}
        </div>
      </_Element11>
    </we.Provider>
  );
}
function _Element12() {
  let { c: e } = z(),
    [t, n] = (0, p.useState)(null);
  return (
    (0, p.useEffect)(() => {
      let e = !0,
        t = () =>
          fetch(`/api/ga4`, {
            method: `POST`,
            headers: {
              "content-type": `application/json`,
            },
            body: JSON.stringify({
              action: `realtime`,
            }),
          })
            .then((e) => e.json())
            .then((t) => {
              e && n(t?.unavailable ? null : (t?.active ?? null));
            })
            .catch(() => {});
      t();
      let r = setInterval(t, 6e4);
      return () => {
        ((e = !1), clearInterval(r));
      };
    }, []),
    t ? (
      <span
        title={e.liveSub}
        className={`hidden md:inline-flex h-8 items-center gap-2 rounded-xl bg-[var(--dash-bg)] px-3 text-xs text-[var(--dash-muted)]`}
      >
        <span className={`relative flex h-2 w-2`} aria-hidden={`true`}>
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden`}
          />
          <span className={`relative inline-flex h-2 w-2 rounded-full bg-emerald-500`} />
        </span>
        <span className={`font-medium tabular-nums text-[var(--dash-ink)]`}>{G(t)}</span>
        {e.live}
      </span>
    ) : null
  );
}
function _Element13({ label: e, options: t, value: n, onChange: r, size: i = `md` }) {
  return (
    <div role={`group`} aria-label={e} className={`flex rounded-xl bg-[var(--dash-bg)] p-1`}>
      {t.map((e) => {
        let t = e.value === n;
        return (
          <button
            key={e.value}
            type={`button`}
            onClick={() => r(e.value)}
            aria-pressed={t}
            className={`rounded-lg font-medium transition ${i === `sm` ? `h-8 px-2.5 text-xs` : `h-8 px-2.5 text-sm`} ${t ? `text-white shadow-sm` : `text-[var(--dash-muted)] hover:text-[var(--dash-ink)]`}`}
            style={
              t
                ? {
                    background: `var(--dash-series)`,
                  }
                : void 0
            }
          >
            {e.label}
          </button>
        );
      })}
    </div>
  );
}
function _n({ onClick: e, title: t, children: n, pressed: r, tone: i = `default` }) {
  return (
    <button
      type={`button`}
      onClick={e}
      title={t}
      aria-label={t}
      aria-pressed={r}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${i === `danger` ? `border-rose-500/40 text-rose-600 hover:bg-rose-600 hover:text-white dark:text-rose-400` : `border-[var(--dash-border)] text-[var(--dash-muted)] hover:border-[var(--dash-series)] hover:text-[var(--dash-ink)]`}`}
    >
      {n}
    </button>
  );
}
var vn = {
    viewBox: `0 0 24 24`,
    className: `h-[18px] w-[18px]`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 1.8,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    "aria-hidden": !0,
  },
  _Element15 = () => (
    <svg {...vn}>
      <path d={`M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z`} />
    </svg>
  ),
  _Element14 = () => (
    <svg {...vn}>
      <circle cx={`12`} cy={`12`} r={`4`} />
      <path
        d={`M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4`}
      />
    </svg>
  ),
  _Element16 = () => (
    <svg {...vn}>
      <path d={`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`} />
      <path d={`m16 17 5-5-5-5`} />
      <path d={`M21 12H9`} />
    </svg>
  ),
  Sn = () => (
    <svg {...vn}>
      <path d={`M12 3v12`} />
      <path d={`m7 11 5 5 5-5`} />
      <path d={`M5 21h14`} />
    </svg>
  );
function Cn({ error: e, onSubmit: t, lang: n, onLang: r }) {
  let { c: i } = z(),
    [a, o] = (0, p.useState)(``);
  return (
    <main
      className={`dash-root min-h-screen bg-[var(--dash-bg)] flex items-center justify-center px-6`}
    >
      <form
        onSubmit={(e) => {
          (e.preventDefault(), a && t(a));
        }}
        className={`w-full max-w-sm rounded-3xl border border-[var(--dash-border)] bg-[var(--dash-card)] p-8`}
      >
        <div className={`flex items-start justify-between gap-4`}>
          <h1 className={`font-display text-xl font-semibold text-[var(--dash-ink)]`}>{i.title}</h1>
          <div className={`flex rounded-full bg-[var(--dash-bg)] p-1 shrink-0`}>
            {[`th`, `en`].map((e) => (
              <button
                key={e}
                type={`button`}
                onClick={() => r(e)}
                aria-pressed={n === e}
                className={`min-h-9 rounded-full px-3 text-xs font-medium uppercase ${n === e ? `text-white` : `text-[var(--dash-muted)]`}`}
                style={
                  n === e
                    ? {
                        background: `var(--dash-series)`,
                      }
                    : void 0
                }
              >
                {e}
              </button>
            ))}
          </div>
        </div>
        <p className={`text-sm text-[var(--dash-muted)] mt-1 mb-6`}>{i.lockIntro}</p>
        <label
          className={`block text-sm font-medium text-[var(--dash-ink)] mb-1.5`}
          htmlFor={`dashboard-password`}
        >
          {i.password}
        </label>
        <input
          id={`dashboard-password`}
          type={`password`}
          autoFocus={!0}
          value={a}
          onChange={(e) => o(e.target.value)}
          className={`w-full rounded-xl border border-[var(--dash-border)] bg-[var(--dash-card)] text-[var(--dash-ink)] px-4 py-3 outline-none focus:border-[var(--dash-series)]`}
        />
        {e && <p className={`mt-3 text-sm text-rose-600 dark:text-rose-300`}>{e}</p>}
        <button
          type={`submit`}
          className={`mt-6 w-full rounded-full px-6 py-3 font-medium text-white transition hover:brightness-110`}
          style={{
            background: `var(--dash-series)`,
          }}
        >
          {i.signIn}
        </button>
      </form>
    </main>
  );
}
function _Element10({ missing: e }) {
  let { c: t } = z();
  return (
    <main className={`dash-root min-h-screen bg-[var(--dash-bg)] px-6 py-16`}>
      <div
        className={`mx-auto max-w-2xl rounded-3xl border border-[var(--dash-border)] bg-[var(--dash-card)] p-8`}
      >
        <h1 className={`font-display text-xl font-semibold text-[var(--dash-ink)]`}>
          {t.setupTitle}
        </h1>
        <p className={`text-sm text-[var(--dash-muted)] mt-2 leading-relaxed`}>{t.setupIntro}</p>
        <ul className={`mt-4 space-y-2`}>
          {e.map((e) => (
            <li
              key={e}
              className={`rounded-xl bg-[var(--dash-bg)] px-4 py-3 font-mono text-sm text-[var(--dash-ink)]`}
            >
              {e}
            </li>
          ))}
        </ul>
        <p className={`text-sm text-[var(--dash-muted)] mt-5 leading-relaxed`}>
          {t.setupDocs}
          {` `}
          <code>{`docs/ga4-dashboard-guide.md`}</code>
        </p>
      </div>
    </main>
  );
}
function Tn({ reason: e, message: t }) {
  let { c: n } = z(),
    r = n.ga4Reasons[e];
  return (
    <div
      className={`rounded-2xl border border-rose-300 bg-rose-50 px-6 py-5 text-sm text-rose-900 dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-200`}
    >
      <p className={`font-medium`}>{r ? r.title : n.errGeneric}</p>
      {r && (
        <ol className={`mt-3 space-y-1.5 list-decimal pl-5 leading-relaxed`}>
          {r.steps.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ol>
      )}
      <p className={`mt-3 text-xs text-rose-700/80 dark:text-rose-200/70 break-all`}>
        {n.errFromGoogle}
        {`: `}
        {t}
      </p>
    </div>
  );
}
export { mn as default };
