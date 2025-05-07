const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index.esm-DF9lrgu6.js',
      'assets/index.esm2017-BEx9365g.js',
      'assets/index.esm-BoZj0zIi.js',
      'assets/mantine-BTrqRPtO.js',
      'assets/InitialPage-kdmrBlGX.js',
      'assets/InitialPage-AzX4qPBb.css',
      'assets/DesignSystem-DfNPh3qG.js',
      'assets/BasketButton-ragN9VfS.js',
      'assets/BasketButton-_2yz_fQ4.css',
      'assets/AnimationPage-BT2aSIEX.js',
      'assets/AnimationPage-qDI3wFLg.css',
      'assets/HomeScreen-Byiqis04.js',
      'assets/Navbar-BWb8xyZh.js',
      'assets/Navbar-kJONL1iI.css',
      'assets/HomeScreen-D-i4DuYa.css',
      'assets/_detail_carousel-D7NSymJF.css',
      'assets/ProductDetail-oPtrOdAL.js',
      'assets/ProductDetail-B3uUYryN.css',
      'assets/BasketPage-B7EdCWds.js',
      'assets/BasketPage-9R2LK7RM.css',
      'assets/SignUpPage-Dbll9aPh.js',
      'assets/SignUpPage-DVtozowm.css',
      'assets/LoginPage-CcgF5o0V.js',
      'assets/LoginPage-B7tys1ho.css',
      'assets/PersonalLookPage-DeKMhj-R.js',
      'assets/PersonalLookPage-DgeUpvIJ.css',
      'assets/ProfilePage-BJabT2rb.js',
      'assets/ProfilePage-H0AHJPDj.css',
    ])
) => i.map(i => d[i]);
import {
  r as Sm,
  a as bm,
  g as xm,
  b as g,
  j as m,
  C as Em,
  L as Ci,
  S as pi,
  c as Tm,
  R as Rt,
  d as Si,
  _ as T0,
  e as Nm,
  N as Cm,
  f as Am,
  u as Mm,
  h as Dm,
  i as Om,
  k as zm,
  l as jm,
  m as Rm,
  n as _m,
  O as Um,
  B as Dl,
  o as l0,
  p as Bm,
  q as Hm,
  s as Je,
  T as Pt,
  t as N0,
  v as Qe,
  G as Ai,
  P as a0,
  D as Jn,
  w as wm,
  x as ge,
  M as qm,
  y as n0,
  z as Lm,
  A as Gm,
} from './mantine-BTrqRPtO.js';
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) f(r);
  new MutationObserver(r => {
    for (const h of r)
      if (h.type === 'childList')
        for (const y of h.addedNodes)
          y.tagName === 'LINK' && y.rel === 'modulepreload' && f(y);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(r) {
    const h = {};
    return (
      r.integrity && (h.integrity = r.integrity),
      r.referrerPolicy && (h.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (h.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (h.credentials = 'omit')
          : (h.credentials = 'same-origin'),
      h
    );
  }
  function f(r) {
    if (r.ep) return;
    r.ep = !0;
    const h = d(r);
    fetch(r.href, h);
  }
})();
var kf = { exports: {} },
  Qn = {},
  Jf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function Ym() {
  return (
    u0 ||
      ((u0 = 1),
      (function (i) {
        function o(D, q) {
          var Q = D.length;
          D.push(q);
          e: for (; 0 < Q; ) {
            var P = (Q - 1) >>> 1,
              ae = D[P];
            if (0 < r(ae, q)) (D[P] = q), (D[Q] = ae), (Q = P);
            else break e;
          }
        }
        function d(D) {
          return D.length === 0 ? null : D[0];
        }
        function f(D) {
          if (D.length === 0) return null;
          var q = D[0],
            Q = D.pop();
          if (Q !== q) {
            D[0] = Q;
            e: for (var P = 0, ae = D.length, Ge = ae >>> 1; P < Ge; ) {
              var xe = 2 * (P + 1) - 1,
                oe = D[xe],
                Ue = xe + 1,
                Ct = D[Ue];
              if (0 > r(oe, Q))
                Ue < ae && 0 > r(Ct, oe)
                  ? ((D[P] = Ct), (D[Ue] = Q), (P = Ue))
                  : ((D[P] = oe), (D[xe] = Q), (P = xe));
              else if (Ue < ae && 0 > r(Ct, Q))
                (D[P] = Ct), (D[Ue] = Q), (P = Ue);
              else break e;
            }
          }
          return q;
        }
        function r(D, q) {
          var Q = D.sortIndex - q.sortIndex;
          return Q !== 0 ? Q : D.id - q.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var y = Date,
            S = y.now();
          i.unstable_now = function () {
            return y.now() - S;
          };
        }
        var b = [],
          x = [],
          C = 1,
          _ = null,
          O = 3,
          H = !1,
          j = !1,
          Y = !1,
          G = !1,
          B = typeof setTimeout == 'function' ? setTimeout : null,
          w = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        function X(D) {
          for (var q = d(x); q !== null; ) {
            if (q.callback === null) f(x);
            else if (q.startTime <= D)
              f(x), (q.sortIndex = q.expirationTime), o(b, q);
            else break;
            q = d(x);
          }
        }
        function $(D) {
          if (((Y = !1), X(D), !j))
            if (d(b) !== null) (j = !0), pe || ((pe = !0), ve());
            else {
              var q = d(x);
              q !== null && Z($, q.startTime - D);
            }
        }
        var pe = !1,
          ie = -1,
          ce = 5,
          me = -1;
        function Re() {
          return G ? !0 : !(i.unstable_now() - me < ce);
        }
        function _e() {
          if (((G = !1), pe)) {
            var D = i.unstable_now();
            me = D;
            var q = !0;
            try {
              e: {
                (j = !1), Y && ((Y = !1), w(ie), (ie = -1)), (H = !0);
                var Q = O;
                try {
                  t: {
                    for (
                      X(D), _ = d(b);
                      _ !== null && !(_.expirationTime > D && Re());

                    ) {
                      var P = _.callback;
                      if (typeof P == 'function') {
                        (_.callback = null), (O = _.priorityLevel);
                        var ae = P(_.expirationTime <= D);
                        if (((D = i.unstable_now()), typeof ae == 'function')) {
                          (_.callback = ae), X(D), (q = !0);
                          break t;
                        }
                        _ === d(b) && f(b), X(D);
                      } else f(b);
                      _ = d(b);
                    }
                    if (_ !== null) q = !0;
                    else {
                      var Ge = d(x);
                      Ge !== null && Z($, Ge.startTime - D), (q = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (O = Q), (H = !1);
                }
                q = void 0;
              }
            } finally {
              q ? ve() : (pe = !1);
            }
          }
        }
        var ve;
        if (typeof L == 'function')
          ve = function () {
            L(_e);
          };
        else if (typeof MessageChannel < 'u') {
          var st = new MessageChannel(),
            Le = st.port2;
          (st.port1.onmessage = _e),
            (ve = function () {
              Le.postMessage(null);
            });
        } else
          ve = function () {
            B(_e, 0);
          };
        function Z(D, q) {
          ie = B(function () {
            D(i.unstable_now());
          }, q);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (i.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ce = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (i.unstable_next = function (D) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = O;
            }
            var Q = O;
            O = q;
            try {
              return D();
            } finally {
              O = Q;
            }
          }),
          (i.unstable_requestPaint = function () {
            G = !0;
          }),
          (i.unstable_runWithPriority = function (D, q) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var Q = O;
            O = D;
            try {
              return q();
            } finally {
              O = Q;
            }
          }),
          (i.unstable_scheduleCallback = function (D, q, Q) {
            var P = i.unstable_now();
            switch (
              (typeof Q == 'object' && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == 'number' && 0 < Q ? P + Q : P))
                : (Q = P),
              D)
            ) {
              case 1:
                var ae = -1;
                break;
              case 2:
                ae = 250;
                break;
              case 5:
                ae = 1073741823;
                break;
              case 4:
                ae = 1e4;
                break;
              default:
                ae = 5e3;
            }
            return (
              (ae = Q + ae),
              (D = {
                id: C++,
                callback: q,
                priorityLevel: D,
                startTime: Q,
                expirationTime: ae,
                sortIndex: -1,
              }),
              Q > P
                ? ((D.sortIndex = Q),
                  o(x, D),
                  d(b) === null &&
                    D === d(x) &&
                    (Y ? (w(ie), (ie = -1)) : (Y = !0), Z($, Q - P)))
                : ((D.sortIndex = ae),
                  o(b, D),
                  j || H || ((j = !0), pe || ((pe = !0), ve()))),
              D
            );
          }),
          (i.unstable_shouldYield = Re),
          (i.unstable_wrapCallback = function (D) {
            var q = O;
            return function () {
              var Q = O;
              O = q;
              try {
                return D.apply(this, arguments);
              } finally {
                O = Q;
              }
            };
          });
      })(Wf)),
    Wf
  );
}
var i0;
function Vm() {
  return i0 || ((i0 = 1), (Jf.exports = Ym())), Jf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0;
function Xm() {
  if (c0) return Qn;
  c0 = 1;
  var i = Vm(),
    o = Sm(),
    d = bm();
  function f(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function y(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (h(e) !== e) throw Error(f(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return S(n), e;
          if (u === a) return S(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var c = !1, s = n.child; s; ) {
          if (s === l) {
            (c = !0), (l = n), (a = u);
            break;
          }
          if (s === a) {
            (c = !0), (a = n), (l = u);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = u.child; s; ) {
            if (s === l) {
              (c = !0), (l = u), (a = n);
              break;
            }
            if (s === a) {
              (c = !0), (a = u), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = x(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var C = Object.assign,
    _ = Symbol.for('react.element'),
    O = Symbol.for('react.transitional.element'),
    H = Symbol.for('react.portal'),
    j = Symbol.for('react.fragment'),
    Y = Symbol.for('react.strict_mode'),
    G = Symbol.for('react.profiler'),
    B = Symbol.for('react.provider'),
    w = Symbol.for('react.consumer'),
    L = Symbol.for('react.context'),
    X = Symbol.for('react.forward_ref'),
    $ = Symbol.for('react.suspense'),
    pe = Symbol.for('react.suspense_list'),
    ie = Symbol.for('react.memo'),
    ce = Symbol.for('react.lazy'),
    me = Symbol.for('react.activity'),
    Re = Symbol.for('react.memo_cache_sentinel'),
    _e = Symbol.iterator;
  function ve(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_e && e[_e]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var st = Symbol.for('react.client.reference');
  function Le(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === st ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case j:
        return 'Fragment';
      case G:
        return 'Profiler';
      case Y:
        return 'StrictMode';
      case $:
        return 'Suspense';
      case pe:
        return 'SuspenseList';
      case me:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case H:
          return 'Portal';
        case L:
          return (e.displayName || 'Context') + '.Provider';
        case w:
          return (e._context.displayName || 'Context') + '.Consumer';
        case X:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ie:
          return (
            (t = e.displayName || null), t !== null ? t : Le(e.type) || 'Memo'
          );
        case ce:
          (t = e._payload), (e = e._init);
          try {
            return Le(e(t));
          } catch {}
      }
    return null;
  }
  var Z = Array.isArray,
    D = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    P = [],
    ae = -1;
  function Ge(e) {
    return { current: e };
  }
  function xe(e) {
    0 > ae || ((e.current = P[ae]), (P[ae] = null), ae--);
  }
  function oe(e, t) {
    ae++, (P[ae] = e.current), (e.current = t);
  }
  var Ue = Ge(null),
    Ct = Ge(null),
    al = Ge(null),
    tu = Ge(null);
  function lu(e, t) {
    switch ((oe(al, t), oe(Ct, e), oe(Ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? zd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = zd(t)), (e = jd(t, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    xe(Ue), oe(Ue, e);
  }
  function ea() {
    xe(Ue), xe(Ct), xe(al);
  }
  function ji(e) {
    e.memoizedState !== null && oe(tu, e);
    var t = Ue.current,
      l = jd(t, e.type);
    t !== l && (oe(Ct, e), oe(Ue, l));
  }
  function au(e) {
    Ct.current === e && (xe(Ue), xe(Ct)),
      tu.current === e && (xe(tu), (Gn._currentValue = Q));
  }
  var Ri = Object.prototype.hasOwnProperty,
    _i = i.unstable_scheduleCallback,
    Ui = i.unstable_cancelCallback,
    F0 = i.unstable_shouldYield,
    P0 = i.unstable_requestPaint,
    At = i.unstable_now,
    I0 = i.unstable_getCurrentPriorityLevel,
    rr = i.unstable_ImmediatePriority,
    or = i.unstable_UserBlockingPriority,
    nu = i.unstable_NormalPriority,
    eh = i.unstable_LowPriority,
    sr = i.unstable_IdlePriority,
    th = i.log,
    lh = i.unstable_setDisableYieldValue,
    ka = null,
    lt = null;
  function nl(e) {
    if (
      (typeof th == 'function' && lh(e),
      lt && typeof lt.setStrictMode == 'function')
    )
      try {
        lt.setStrictMode(ka, e);
      } catch {}
  }
  var at = Math.clz32 ? Math.clz32 : uh,
    ah = Math.log,
    nh = Math.LN2;
  function uh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ah(e) / nh) | 0)) | 0;
  }
  var uu = 256,
    iu = 4194304;
  function zl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function cu(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~u),
          a !== 0
            ? (n = zl(a))
            : ((c &= s),
              c !== 0
                ? (n = zl(c))
                : l || ((l = s & ~e), l !== 0 && (n = zl(l)))))
        : ((s = a & ~u),
          s !== 0
            ? (n = zl(s))
            : c !== 0
              ? (n = zl(c))
              : l || ((l = a & ~e), l !== 0 && (n = zl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ja(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ih(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dr() {
    var e = uu;
    return (uu <<= 1), (uu & 4194048) === 0 && (uu = 256), e;
  }
  function hr() {
    var e = iu;
    return (iu <<= 1), (iu & 62914560) === 0 && (iu = 4194304), e;
  }
  function Bi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Wa(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ch(e, t, l, a, n, u) {
    var c = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var s = e.entanglements,
      v = e.expirationTimes,
      N = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var z = 31 - at(l),
        U = 1 << z;
      (s[z] = 0), (v[z] = -1);
      var A = N[z];
      if (A !== null)
        for (N[z] = null, z = 0; z < A.length; z++) {
          var M = A[z];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~U;
    }
    a !== 0 && mr(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
  }
  function mr(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - at(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function vr(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - at(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function Hi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yr() {
    var e = q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $d(e.type));
  }
  function fh(e, t) {
    var l = q.p;
    try {
      return (q.p = e), t();
    } finally {
      q.p = l;
    }
  }
  var ul = Math.random().toString(36).slice(2),
    Ke = '__reactFiber$' + ul,
    Fe = '__reactProps$' + ul,
    ta = '__reactContainer$' + ul,
    qi = '__reactEvents$' + ul,
    rh = '__reactListeners$' + ul,
    oh = '__reactHandles$' + ul,
    gr = '__reactResources$' + ul,
    $a = '__reactMarker$' + ul;
  function Li(e) {
    delete e[Ke], delete e[Fe], delete e[qi], delete e[rh], delete e[oh];
  }
  function la(e) {
    var t = e[Ke];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ta] || l[Ke])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Bd(e); e !== null; ) {
            if ((l = e[Ke])) return l;
            e = Bd(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function aa(e) {
    if ((e = e[Ke] || e[ta])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Fa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function na(e) {
    var t = e[gr];
    return (
      t ||
        (t = e[gr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Be(e) {
    e[$a] = !0;
  }
  var pr = new Set(),
    Sr = {};
  function jl(e, t) {
    ua(e, t), ua(e + 'Capture', t);
  }
  function ua(e, t) {
    for (Sr[e] = t, e = 0; e < t.length; e++) pr.add(t[e]);
  }
  var sh = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    br = {},
    xr = {};
  function dh(e) {
    return Ri.call(xr, e)
      ? !0
      : Ri.call(br, e)
        ? !1
        : sh.test(e)
          ? (xr[e] = !0)
          : ((br[e] = !0), !1);
  }
  function fu(e, t, l) {
    if (dh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function ru(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function wt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  var Gi, Er;
  function ia(e) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Gi = (t && t[1]) || ''),
          (Er =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Gi +
      e +
      Er
    );
  }
  var Yi = !1;
  function Vi(e, t) {
    if (!e || Yi) return '';
    Yi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (M) {
                  var A = M;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (M) {
                  A = M;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                A = M;
              }
              (U = e()) &&
                typeof U.catch == 'function' &&
                U.catch(function () {});
            }
          } catch (M) {
            if (M && A && typeof M.stack == 'string') return [M.stack, A.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name'
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var u = a.DetermineComponentFrameRoot(),
        c = u[0],
        s = u[1];
      if (c && s) {
        var v = c.split(`
`),
          N = s.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes('DetermineComponentFrameRoot');

        )
          a++;
        for (; n < N.length && !N[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === v.length || n === N.length)
          for (
            a = v.length - 1, n = N.length - 1;
            1 <= a && 0 <= n && v[a] !== N[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== N[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== N[n])) {
                  var z =
                    `
` + v[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      z.includes('<anonymous>') &&
                      (z = z.replace('<anonymous>', e.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Yi = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : '') ? ia(l) : '';
  }
  function hh(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ia(e.type);
      case 16:
        return ia('Lazy');
      case 13:
        return ia('Suspense');
      case 19:
        return ia('SuspenseList');
      case 0:
      case 15:
        return Vi(e.type, !1);
      case 11:
        return Vi(e.type.render, !1);
      case 1:
        return Vi(e.type, !0);
      case 31:
        return ia('Activity');
      default:
        return '';
    }
  }
  function Tr(e) {
    try {
      var t = '';
      do (t += hh(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function dt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Nr(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function mh(e) {
    var t = Nr(e) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            (a = '' + c), u.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = '' + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ou(e) {
    e._valueTracker || (e._valueTracker = mh(e));
  }
  function Cr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e && (a = Nr(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function su(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var vh = /[\n"\\]/g;
  function ht(e) {
    return e.replace(vh, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Xi(e, t, l, a, n, u, c, s) {
    (e.name = ''),
      c != null &&
      typeof c != 'function' &&
      typeof c != 'symbol' &&
      typeof c != 'boolean'
        ? (e.type = c)
        : e.removeAttribute('type'),
      t != null
        ? c === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + dt(t))
          : e.value !== '' + dt(t) && (e.value = '' + dt(t))
        : (c !== 'submit' && c !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Zi(e, c, dt(t))
        : l != null
          ? Zi(e, c, dt(l))
          : a != null && e.removeAttribute('value'),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      s != null &&
      typeof s != 'function' &&
      typeof s != 'symbol' &&
      typeof s != 'boolean'
        ? (e.name = '' + dt(s))
        : e.removeAttribute('name');
  }
  function Ar(e, t, l, a, n, u, c, s) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) return;
      (l = l != null ? '' + dt(l) : ''),
        (t = t != null ? '' + dt(t) : l),
        s || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = s ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != 'function' &&
        typeof c != 'symbol' &&
        typeof c != 'boolean' &&
        (e.name = c);
  }
  function Zi(e, t, l) {
    (t === 'number' && su(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function ca(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = '' + dt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mr(e, t, l) {
    if (
      t != null &&
      ((t = '' + dt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + dt(l) : '';
  }
  function Dr(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Z(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ''), (t = l);
    }
    (l = dt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a);
  }
  function fa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yh = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Or(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || yh.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function zr(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(f(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && Or(e, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && Or(e, u, t[u]);
  }
  function Qi(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var gh = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    ph =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function du(e) {
    return ph.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ki = null;
  function ki(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ra = null,
    oa = null;
  function jr(e) {
    var t = aa(e);
    if (t && (e = t.stateNode)) {
      var l = e[Fe] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Xi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ht('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[Fe] || null;
                if (!n) throw Error(f(90));
                Xi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Cr(a);
          }
          break e;
        case 'textarea':
          Mr(e, l.value, l.defaultValue);
          break e;
        case 'select':
          (t = l.value), t != null && ca(e, !!l.multiple, t, !1);
      }
    }
  }
  var Ji = !1;
  function Rr(e, t, l) {
    if (Ji) return e(t, l);
    Ji = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ji = !1),
        (ra !== null || oa !== null) &&
          (Fu(), ra && ((t = ra), (e = oa), (oa = ra = null), jr(t), e)))
      )
        for (t = 0; t < e.length; t++) jr(e[t]);
    }
  }
  function Pa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[Fe] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(f(231, t, typeof l));
    return l;
  }
  var qt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Wi = !1;
  if (qt)
    try {
      var Ia = {};
      Object.defineProperty(Ia, 'passive', {
        get: function () {
          Wi = !0;
        },
      }),
        window.addEventListener('test', Ia, Ia),
        window.removeEventListener('test', Ia, Ia);
    } catch {
      Wi = !1;
    }
  var il = null,
    $i = null,
    hu = null;
  function _r() {
    if (hu) return hu;
    var e,
      t = $i,
      l = t.length,
      a,
      n = 'value' in il ? il.value : il.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[u - a]; a++);
    return (hu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function mu(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function vu() {
    return !0;
  }
  function Ur() {
    return !1;
  }
  function Pe(e) {
    function t(l, a, n, u, c) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(u) : u[s]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? vu
          : Ur),
        (this.isPropagationStopped = Ur),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = vu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = vu));
        },
        persist: function () {},
        isPersistent: vu,
      }),
      t
    );
  }
  var Rl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    yu = Pe(Rl),
    en = C({}, Rl, { view: 0, detail: 0 }),
    Sh = Pe(en),
    Fi,
    Pi,
    tn,
    gu = C({}, en, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ec,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== tn &&
              (tn && e.type === 'mousemove'
                ? ((Fi = e.screenX - tn.screenX), (Pi = e.screenY - tn.screenY))
                : (Pi = Fi = 0),
              (tn = e)),
            Fi);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Pi;
      },
    }),
    Br = Pe(gu),
    bh = C({}, gu, { dataTransfer: 0 }),
    xh = Pe(bh),
    Eh = C({}, en, { relatedTarget: 0 }),
    Ii = Pe(Eh),
    Th = C({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nh = Pe(Th),
    Ch = C({}, Rl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ah = Pe(Ch),
    Mh = C({}, Rl, { data: 0 }),
    Hr = Pe(Mh),
    Dh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Oh = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    zh = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = zh[e])
        ? !!t[e]
        : !1;
  }
  function ec() {
    return jh;
  }
  var Rh = C({}, en, {
      key: function (e) {
        if (e.key) {
          var t = Dh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = mu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? Oh[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ec,
      charCode: function (e) {
        return e.type === 'keypress' ? mu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? mu(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    _h = Pe(Rh),
    Uh = C({}, gu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    wr = Pe(Uh),
    Bh = C({}, en, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ec,
    }),
    Hh = Pe(Bh),
    wh = C({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qh = Pe(wh),
    Lh = C({}, gu, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Gh = Pe(Lh),
    Yh = C({}, Rl, { newState: 0, oldState: 0 }),
    Vh = Pe(Yh),
    Xh = [9, 13, 27, 32],
    tc = qt && 'CompositionEvent' in window,
    ln = null;
  qt && 'documentMode' in document && (ln = document.documentMode);
  var Zh = qt && 'TextEvent' in window && !ln,
    qr = qt && (!tc || (ln && 8 < ln && 11 >= ln)),
    Lr = ' ',
    Gr = !1;
  function Yr(e, t) {
    switch (e) {
      case 'keyup':
        return Xh.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Vr(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var sa = !1;
  function Qh(e, t) {
    switch (e) {
      case 'compositionend':
        return Vr(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Gr = !0), Lr);
      case 'textInput':
        return (e = t.data), e === Lr && Gr ? null : e;
      default:
        return null;
    }
  }
  function Kh(e, t) {
    if (sa)
      return e === 'compositionend' || (!tc && Yr(e, t))
        ? ((e = _r()), (hu = $i = il = null), (sa = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return qr && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var kh = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Xr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!kh[e.type] : t === 'textarea';
  }
  function Zr(e, t, l, a) {
    ra ? (oa ? oa.push(a) : (oa = [a])) : (ra = a),
      (t = ai(t, 'onChange')),
      0 < t.length &&
        ((l = new yu('onChange', 'change', null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var an = null,
    nn = null;
  function Jh(e) {
    Cd(e, 0);
  }
  function pu(e) {
    var t = Fa(e);
    if (Cr(t)) return e;
  }
  function Qr(e, t) {
    if (e === 'change') return t;
  }
  var Kr = !1;
  if (qt) {
    var lc;
    if (qt) {
      var ac = 'oninput' in document;
      if (!ac) {
        var kr = document.createElement('div');
        kr.setAttribute('oninput', 'return;'),
          (ac = typeof kr.oninput == 'function');
      }
      lc = ac;
    } else lc = !1;
    Kr = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jr() {
    an && (an.detachEvent('onpropertychange', Wr), (nn = an = null));
  }
  function Wr(e) {
    if (e.propertyName === 'value' && pu(nn)) {
      var t = [];
      Zr(t, nn, e, ki(e)), Rr(Jh, t);
    }
  }
  function Wh(e, t, l) {
    e === 'focusin'
      ? (Jr(), (an = t), (nn = l), an.attachEvent('onpropertychange', Wr))
      : e === 'focusout' && Jr();
  }
  function $h(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return pu(nn);
  }
  function Fh(e, t) {
    if (e === 'click') return pu(t);
  }
  function Ph(e, t) {
    if (e === 'input' || e === 'change') return pu(t);
  }
  function Ih(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == 'function' ? Object.is : Ih;
  function un(e, t) {
    if (nt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ri.call(t, n) || !nt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function $r(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fr(e, t) {
    var l = $r(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = $r(l);
    }
  }
  function Pr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Pr(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ir(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = su(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = su(e.document);
    }
    return t;
  }
  function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var e2 = qt && 'documentMode' in document && 11 >= document.documentMode,
    da = null,
    uc = null,
    cn = null,
    ic = !1;
  function eo(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ic ||
      da == null ||
      da !== su(a) ||
      ((a = da),
      'selectionStart' in a && nc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (cn && un(cn, a)) ||
        ((cn = a),
        (a = ai(uc, 'onSelect')),
        0 < a.length &&
          ((t = new yu('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = da))));
  }
  function _l(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var ha = {
      animationend: _l('Animation', 'AnimationEnd'),
      animationiteration: _l('Animation', 'AnimationIteration'),
      animationstart: _l('Animation', 'AnimationStart'),
      transitionrun: _l('Transition', 'TransitionRun'),
      transitionstart: _l('Transition', 'TransitionStart'),
      transitioncancel: _l('Transition', 'TransitionCancel'),
      transitionend: _l('Transition', 'TransitionEnd'),
    },
    cc = {},
    to = {};
  qt &&
    ((to = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ha.animationend.animation,
      delete ha.animationiteration.animation,
      delete ha.animationstart.animation),
    'TransitionEvent' in window || delete ha.transitionend.transition);
  function Ul(e) {
    if (cc[e]) return cc[e];
    if (!ha[e]) return e;
    var t = ha[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in to) return (cc[e] = t[l]);
    return e;
  }
  var lo = Ul('animationend'),
    ao = Ul('animationiteration'),
    no = Ul('animationstart'),
    t2 = Ul('transitionrun'),
    l2 = Ul('transitionstart'),
    a2 = Ul('transitioncancel'),
    uo = Ul('transitionend'),
    io = new Map(),
    fc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  fc.push('scrollEnd');
  function Et(e, t) {
    io.set(e, t), jl(t, [e]);
  }
  var co = new WeakMap();
  function mt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = co.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Tr(t) }), co.set(e, t), t);
    }
    return { value: e, source: t, stack: Tr(t) };
  }
  var vt = [],
    ma = 0,
    rc = 0;
  function Su() {
    for (var e = ma, t = (rc = ma = 0); t < e; ) {
      var l = vt[t];
      vt[t++] = null;
      var a = vt[t];
      vt[t++] = null;
      var n = vt[t];
      vt[t++] = null;
      var u = vt[t];
      if (((vt[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n);
      }
      u !== 0 && fo(l, n, u);
    }
  }
  function bu(e, t, l, a) {
    (vt[ma++] = e),
      (vt[ma++] = t),
      (vt[ma++] = l),
      (vt[ma++] = a),
      (rc |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function oc(e, t, l, a) {
    return bu(e, t, l, a), xu(e);
  }
  function va(e, t) {
    return bu(e, null, null, t), xu(e);
  }
  function fo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - at(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function xu(e) {
    if (50 < Rn) throw ((Rn = 0), (gf = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ya = {};
  function n2(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ut(e, t, l, a) {
    return new n2(e, t, l, a);
  }
  function sc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Lt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ut(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function ro(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Eu(e, t, l, a, n, u) {
    var c = 0;
    if (((a = e), typeof e == 'function')) sc(e) && (c = 1);
    else if (typeof e == 'string')
      c = im(e, l, Ue.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case me:
          return (e = ut(31, l, t, n)), (e.elementType = me), (e.lanes = u), e;
        case j:
          return Bl(l.children, n, u, t);
        case Y:
          (c = 8), (n |= 24);
          break;
        case G:
          return (
            (e = ut(12, l, t, n | 2)), (e.elementType = G), (e.lanes = u), e
          );
        case $:
          return (e = ut(13, l, t, n)), (e.elementType = $), (e.lanes = u), e;
        case pe:
          return (e = ut(19, l, t, n)), (e.elementType = pe), (e.lanes = u), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case B:
              case L:
                c = 10;
                break e;
              case w:
                c = 9;
                break e;
              case X:
                c = 11;
                break e;
              case ie:
                c = 14;
                break e;
              case ce:
                (c = 16), (a = null);
                break e;
            }
          (c = 29),
            (l = Error(f(130, e === null ? 'null' : typeof e, ''))),
            (a = null);
      }
    return (
      (t = ut(c, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    );
  }
  function Bl(e, t, l, a) {
    return (e = ut(7, e, a, t)), (e.lanes = l), e;
  }
  function dc(e, t, l) {
    return (e = ut(6, e, null, t)), (e.lanes = l), e;
  }
  function hc(e, t, l) {
    return (
      (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ga = [],
    pa = 0,
    Tu = null,
    Nu = 0,
    yt = [],
    gt = 0,
    Hl = null,
    Gt = 1,
    Yt = '';
  function wl(e, t) {
    (ga[pa++] = Nu), (ga[pa++] = Tu), (Tu = e), (Nu = t);
  }
  function oo(e, t, l) {
    (yt[gt++] = Gt), (yt[gt++] = Yt), (yt[gt++] = Hl), (Hl = e);
    var a = Gt;
    e = Yt;
    var n = 32 - at(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - at(t) + n;
    if (30 < u) {
      var c = n - (n % 5);
      (u = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Gt = (1 << (32 - at(t) + n)) | (l << n) | a),
        (Yt = u + e);
    } else (Gt = (1 << u) | (l << n) | a), (Yt = e);
  }
  function mc(e) {
    e.return !== null && (wl(e, 1), oo(e, 1, 0));
  }
  function vc(e) {
    for (; e === Tu; )
      (Tu = ga[--pa]), (ga[pa] = null), (Nu = ga[--pa]), (ga[pa] = null);
    for (; e === Hl; )
      (Hl = yt[--gt]),
        (yt[gt] = null),
        (Yt = yt[--gt]),
        (yt[gt] = null),
        (Gt = yt[--gt]),
        (yt[gt] = null);
  }
  var We = null,
    Ne = null,
    ue = !1,
    ql = null,
    Mt = !1,
    yc = Error(f(519));
  function Ll(e) {
    var t = Error(f(418, ''));
    throw (on(mt(t, e)), yc);
  }
  function so(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ke] = e), (t[Fe] = a), l)) {
      case 'dialog':
        te('cancel', t), te('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        te('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Un.length; l++) te(Un[l], t);
        break;
      case 'source':
        te('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        te('error', t), te('load', t);
        break;
      case 'details':
        te('toggle', t);
        break;
      case 'input':
        te('invalid', t),
          Ar(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          ou(t);
        break;
      case 'select':
        te('invalid', t);
        break;
      case 'textarea':
        te('invalid', t), Dr(t, a.value, a.defaultValue, a.children), ou(t);
    }
    (l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      Od(t.textContent, l)
        ? (a.popover != null && (te('beforetoggle', t), te('toggle', t)),
          a.onScroll != null && te('scroll', t),
          a.onScrollEnd != null && te('scrollend', t),
          a.onClick != null && (t.onclick = ni),
          (t = !0))
        : (t = !1),
      t || Ll(e);
  }
  function ho(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 13:
          Mt = !1;
          return;
        case 27:
        case 3:
          Mt = !0;
          return;
        default:
          We = We.return;
      }
  }
  function fn(e) {
    if (e !== We) return !1;
    if (!ue) return ho(e), (ue = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || _f(e.type, e.memoizedProps))),
        (l = !l)),
      l && Ne && Ll(e),
      ho(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === '/$')) {
              if (t === 0) {
                Ne = Nt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || t++;
          e = e.nextSibling;
        }
        Ne = null;
      }
    } else
      t === 27
        ? ((t = Ne), El(e.type) ? ((e = wf), (wf = null), (Ne = e)) : (Ne = t))
        : (Ne = We ? Nt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function rn() {
    (Ne = We = null), (ue = !1);
  }
  function mo() {
    var e = ql;
    return (
      e !== null &&
        (tt === null ? (tt = e) : tt.push.apply(tt, e), (ql = null)),
      e
    );
  }
  function on(e) {
    ql === null ? (ql = [e]) : ql.push(e);
  }
  var gc = Ge(null),
    Gl = null,
    Vt = null;
  function cl(e, t, l) {
    oe(gc, t._currentValue), (t._currentValue = l);
  }
  function Xt(e) {
    (e._currentValue = gc.current), xe(gc);
  }
  function pc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Sc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var c = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var v = 0; v < t.length; v++)
            if (s.context === t[v]) {
              (u.lanes |= l),
                (s = u.alternate),
                s !== null && (s.lanes |= l),
                pc(u.return, l, e),
                a || (c = null);
              break e;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(f(341));
        (c.lanes |= l),
          (u = c.alternate),
          u !== null && (u.lanes |= l),
          pc(c, l, e),
          (c = null);
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            (n.return = c.return), (c = n);
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function sn(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = n.type;
          nt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (n === tu.current) {
        if (((c = n.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Gn) : (e = [Gn]));
      }
      n = n.return;
    }
    e !== null && Sc(t, e, l, a), (t.flags |= 262144);
  }
  function Cu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Yl(e) {
    (Gl = e),
      (Vt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function ke(e) {
    return vo(Gl, e);
  }
  function Au(e, t) {
    return Gl === null && Yl(e), vo(e, t);
  }
  function vo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Vt === null)) {
      if (e === null) throw Error(f(308));
      (Vt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Vt = Vt.next = t;
    return l;
  }
  var u2 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    i2 = i.unstable_scheduleCallback,
    c2 = i.unstable_NormalPriority,
    ze = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bc() {
    return { controller: new u2(), data: new Map(), refCount: 0 };
  }
  function dn(e) {
    e.refCount--,
      e.refCount === 0 &&
        i2(c2, function () {
          e.controller.abort();
        });
  }
  var hn = null,
    xc = 0,
    Sa = 0,
    ba = null;
  function f2(e, t) {
    if (hn === null) {
      var l = (hn = []);
      (xc = 0),
        (Sa = Nf()),
        (ba = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return xc++, t.then(yo, yo), t;
  }
  function yo() {
    if (--xc === 0 && hn !== null) {
      ba !== null && (ba.status = 'fulfilled');
      var e = hn;
      (hn = null), (Sa = 0), (ba = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function r2(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = 'fulfilled'), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var go = D.S;
  D.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      f2(e, t),
      go !== null && go(e, t);
  };
  var Vl = Ge(null);
  function Ec() {
    var e = Vl.current;
    return e !== null ? e : Se.pooledCache;
  }
  function Mu(e, t) {
    t === null ? oe(Vl, Vl.current) : oe(Vl, t.pool);
  }
  function po() {
    var e = Ec();
    return e === null ? null : { parent: ze._currentValue, pool: e };
  }
  var mn = Error(f(460)),
    So = Error(f(474)),
    Du = Error(f(542)),
    Tc = { then: function () {} };
  function bo(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Ou() {}
  function xo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Ou, Ou), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), To(e), e);
      default:
        if (typeof t.status == 'string') t.then(Ou, Ou);
        else {
          if (((e = Se), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  (n.status = 'fulfilled'), (n.value = a);
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  (n.status = 'rejected'), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), To(e), e);
        }
        throw ((vn = t), mn);
    }
  }
  var vn = null;
  function Eo() {
    if (vn === null) throw Error(f(459));
    var e = vn;
    return (vn = null), e;
  }
  function To(e) {
    if (e === mn || e === Du) throw Error(f(483));
  }
  var fl = !1;
  function Nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Cc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ol(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (fe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = xu(e)),
        fo(e, null, l),
        t
      );
    }
    return bu(e, a, t, l), xu(e);
  }
  function yn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), vr(e, l);
    }
  }
  function Ac(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = c) : (u = u.next = c), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var Mc = !1;
  function gn() {
    if (Mc) {
      var e = ba;
      if (e !== null) throw e;
    }
  }
  function pn(e, t, l, a) {
    Mc = !1;
    var n = e.updateQueue;
    fl = !1;
    var u = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var v = s,
        N = v.next;
      (v.next = null), c === null ? (u = N) : (c.next = N), (c = v);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (s = z.lastBaseUpdate),
        s !== c &&
          (s === null ? (z.firstBaseUpdate = N) : (s.next = N),
          (z.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var U = n.baseState;
      (c = 0), (z = N = v = null), (s = u);
      do {
        var A = s.lane & -536870913,
          M = A !== s.lane;
        if (M ? (le & A) === A : (a & A) === A) {
          A !== 0 && A === Sa && (Mc = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var W = e,
              k = s;
            A = t;
            var he = l;
            switch (k.tag) {
              case 1:
                if (((W = k.payload), typeof W == 'function')) {
                  U = W.call(he, U, A);
                  break e;
                }
                U = W;
                break e;
              case 3:
                W.flags = (W.flags & -65537) | 128;
              case 0:
                if (
                  ((W = k.payload),
                  (A = typeof W == 'function' ? W.call(he, U, A) : W),
                  A == null)
                )
                  break e;
                U = C({}, U, A);
                break e;
              case 2:
                fl = !0;
            }
          }
          (A = s.callback),
            A !== null &&
              ((e.flags |= 64),
              M && (e.flags |= 8192),
              (M = n.callbacks),
              M === null ? (n.callbacks = [A]) : M.push(A));
        } else
          (M = {
            lane: A,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            z === null ? ((N = z = M), (v = U)) : (z = z.next = M),
            (c |= A);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (M = s),
            (s = M.next),
            (M.next = null),
            (n.lastBaseUpdate = M),
            (n.shared.pending = null);
        }
      } while (!0);
      z === null && (v = U),
        (n.baseState = v),
        (n.firstBaseUpdate = N),
        (n.lastBaseUpdate = z),
        u === null && (n.shared.lanes = 0),
        (pl |= c),
        (e.lanes = c),
        (e.memoizedState = U);
    }
  }
  function No(e, t) {
    if (typeof e != 'function') throw Error(f(191, e));
    e.call(t);
  }
  function Co(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) No(l[e], t);
  }
  var xa = Ge(null),
    zu = Ge(0);
  function Ao(e, t) {
    (e = $t), oe(zu, e), oe(xa, t), ($t = e | t.baseLanes);
  }
  function Dc() {
    oe(zu, $t), oe(xa, xa.current);
  }
  function Oc() {
    ($t = zu.current), xe(xa), xe(zu);
  }
  var sl = 0,
    F = null,
    se = null,
    De = null,
    ju = !1,
    Ea = !1,
    Xl = !1,
    Ru = 0,
    Sn = 0,
    Ta = null,
    o2 = 0;
  function Ae() {
    throw Error(f(321));
  }
  function zc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!nt(e[l], t[l])) return !1;
    return !0;
  }
  function jc(e, t, l, a, n, u) {
    return (
      (sl = u),
      (F = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? rs : os),
      (Xl = !1),
      (u = l(a, n)),
      (Xl = !1),
      Ea && (u = Do(t, l, a, n)),
      Mo(e),
      u
    );
  }
  function Mo(e) {
    D.H = qu;
    var t = se !== null && se.next !== null;
    if (((sl = 0), (De = se = F = null), (ju = !1), (Sn = 0), (Ta = null), t))
      throw Error(f(300));
    e === null ||
      He ||
      ((e = e.dependencies), e !== null && Cu(e) && (He = !0));
  }
  function Do(e, t, l, a) {
    F = e;
    var n = 0;
    do {
      if ((Ea && (Ta = null), (Sn = 0), (Ea = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (De = se = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (D.H = g2), (u = t(l, a));
    } while (Ea);
    return u;
  }
  function s2() {
    var e = D.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? bn(t) : t),
      (e = e.useState()[0]),
      (se !== null ? se.memoizedState : null) !== e && (F.flags |= 1024),
      t
    );
  }
  function Rc() {
    var e = Ru !== 0;
    return (Ru = 0), e;
  }
  function _c(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Uc(e) {
    if (ju) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      ju = !1;
    }
    (sl = 0), (De = se = F = null), (Ea = !1), (Sn = Ru = 0), (Ta = null);
  }
  function Ie() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return De === null ? (F.memoizedState = De = e) : (De = De.next = e), De;
  }
  function Oe() {
    if (se === null) {
      var e = F.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = se.next;
    var t = De === null ? F.memoizedState : De.next;
    if (t !== null) (De = t), (se = e);
    else {
      if (e === null)
        throw F.alternate === null ? Error(f(467)) : Error(f(310));
      (se = e),
        (e = {
          memoizedState: se.memoizedState,
          baseState: se.baseState,
          baseQueue: se.baseQueue,
          queue: se.queue,
          next: null,
        }),
        De === null ? (F.memoizedState = De = e) : (De = De.next = e);
    }
    return De;
  }
  function Bc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function bn(e) {
    var t = Sn;
    return (
      (Sn += 1),
      Ta === null && (Ta = []),
      (e = xo(Ta, e, t)),
      (t = F),
      (De === null ? t.memoizedState : De.next) === null &&
        ((t = t.alternate),
        (D.H = t === null || t.memoizedState === null ? rs : os)),
      e
    );
  }
  function _u(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return bn(e);
      if (e.$$typeof === L) return ke(e);
    }
    throw Error(f(438, String(e)));
  }
  function Hc(e) {
    var t = null,
      l = F.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = F.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Bc()), (F.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Re;
    return t.index++, l;
  }
  function Zt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Uu(e) {
    var t = Oe();
    return wc(t, se, e);
  }
  function wc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var c = n.next;
        (n.next = u.next), (u.next = c);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var s = (c = null),
        v = null,
        N = t,
        z = !1;
      do {
        var U = N.lane & -536870913;
        if (U !== N.lane ? (le & U) === U : (sl & U) === U) {
          var A = N.revertLane;
          if (A === 0)
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              U === Sa && (z = !0);
          else if ((sl & A) === A) {
            (N = N.next), A === Sa && (z = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              v === null ? ((s = v = U), (c = u)) : (v = v.next = U),
              (F.lanes |= A),
              (pl |= A);
          (U = N.action),
            Xl && l(u, U),
            (u = N.hasEagerState ? N.eagerState : l(u, U));
        } else
          (A = {
            lane: U,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            v === null ? ((s = v = A), (c = u)) : (v = v.next = A),
            (F.lanes |= U),
            (pl |= U);
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (v === null ? (c = u) : (v.next = s),
        !nt(u, e.memoizedState) && ((He = !0), z && ((l = ba), l !== null)))
      )
        throw l;
      (e.memoizedState = u),
        (e.baseState = c),
        (e.baseQueue = v),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function qc(e) {
    var t = Oe(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do (u = e(u, c.action)), (c = c.next);
      while (c !== n);
      nt(u, t.memoizedState) || (He = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function Oo(e, t, l) {
    var a = F,
      n = Oe(),
      u = ue;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var c = !nt((se || n).memoizedState, l);
    c && ((n.memoizedState = l), (He = !0)), (n = n.queue);
    var s = Ro.bind(null, a, n, e);
    if (
      (xn(2048, 8, s, [e]),
      n.getSnapshot !== t || c || (De !== null && De.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Na(9, Bu(), jo.bind(null, a, n, l, t), null),
        Se === null)
      )
        throw Error(f(349));
      u || (sl & 124) !== 0 || zo(a, t, l);
    }
    return l;
  }
  function zo(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = F.updateQueue),
      t === null
        ? ((t = Bc()), (F.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function jo(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), _o(t) && Uo(e);
  }
  function Ro(e, t, l) {
    return l(function () {
      _o(t) && Uo(e);
    });
  }
  function _o(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !nt(e, l);
    } catch {
      return !0;
    }
  }
  function Uo(e) {
    var t = va(e, 2);
    t !== null && ot(t, e, 2);
  }
  function Lc(e) {
    var t = Ie();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Xl)) {
        nl(!0);
        try {
          l();
        } finally {
          nl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Bo(e, t, l, a) {
    return (e.baseState = l), wc(e, se, typeof a == 'function' ? a : Zt);
  }
  function d2(e, t, l, a, n) {
    if (wu(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          u.listeners.push(c);
        },
      };
      D.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), Ho(t, u))
          : ((u.next = l.next), (t.pending = l.next = u));
    }
  }
  function Ho(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = D.T,
        c = {};
      D.T = c;
      try {
        var s = l(n, a),
          v = D.S;
        v !== null && v(c, s), wo(e, t, s);
      } catch (N) {
        Gc(e, t, N);
      } finally {
        D.T = u;
      }
    } else
      try {
        (u = l(n, a)), wo(e, t, u);
      } catch (N) {
        Gc(e, t, N);
      }
  }
  function wo(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            qo(e, t, a);
          },
          function (a) {
            return Gc(e, t, a);
          }
        )
      : qo(e, t, l);
  }
  function qo(e, t, l) {
    (t.status = 'fulfilled'),
      (t.value = l),
      Lo(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), Ho(e, l)));
  }
  function Gc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = 'rejected'), (t.reason = l), Lo(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function Lo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Go(e, t) {
    return t;
  }
  function Yo(e, t) {
    if (ue) {
      var l = Se.formState;
      if (l !== null) {
        e: {
          var a = F;
          if (ue) {
            if (Ne) {
              t: {
                for (var n = Ne, u = Mt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Nt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === 'F!' || u === 'F' ? n : null);
              }
              if (n) {
                (Ne = Nt(n.nextSibling)), (a = n.data === 'F!');
                break e;
              }
            }
            Ll(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Ie()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = is.bind(null, F, a)),
      (a.dispatch = l),
      (a = Lc(!1)),
      (u = Qc.bind(null, F, !1, a.queue)),
      (a = Ie()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = d2.bind(null, F, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Vo(e) {
    var t = Oe();
    return Xo(t, se, e);
  }
  function Xo(e, t, l) {
    if (
      ((t = wc(e, t, Go)[0]),
      (e = Uu(Zt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = bn(t);
      } catch (c) {
        throw c === mn ? Du : c;
      }
    else a = t;
    t = Oe();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((F.flags |= 2048), Na(9, Bu(), h2.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function h2(e, t) {
    e.action = t;
  }
  function Zo(e) {
    var t = Oe(),
      l = se;
    if (l !== null) return Xo(t, l, e);
    Oe(), (t = t.memoizedState), (l = Oe());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function Na(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = F.updateQueue),
      t === null && ((t = Bc()), (F.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Bu() {
    return { destroy: void 0, resource: void 0 };
  }
  function Qo() {
    return Oe().memoizedState;
  }
  function Hu(e, t, l, a) {
    var n = Ie();
    (a = a === void 0 ? null : a),
      (F.flags |= e),
      (n.memoizedState = Na(1 | t, Bu(), l, a));
  }
  function xn(e, t, l, a) {
    var n = Oe();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    se !== null && a !== null && zc(a, se.memoizedState.deps)
      ? (n.memoizedState = Na(t, u, l, a))
      : ((F.flags |= e), (n.memoizedState = Na(1 | t, u, l, a)));
  }
  function Ko(e, t) {
    Hu(8390656, 8, e, t);
  }
  function ko(e, t) {
    xn(2048, 8, e, t);
  }
  function Jo(e, t) {
    return xn(4, 2, e, t);
  }
  function Wo(e, t) {
    return xn(4, 4, e, t);
  }
  function $o(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Fo(e, t, l) {
    (l = l != null ? l.concat([e]) : null), xn(4, 4, $o.bind(null, t, e), l);
  }
  function Yc() {}
  function Po(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && zc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Io(e, t) {
    var l = Oe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && zc(t, a[1])) return a[0];
    if (((a = e()), Xl)) {
      nl(!0);
      try {
        e();
      } finally {
        nl(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function Vc(e, t, l) {
    return l === void 0 || (sl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = ld()), (F.lanes |= e), (pl |= e), l);
  }
  function es(e, t, l, a) {
    return nt(l, t)
      ? l
      : xa.current !== null
        ? ((e = Vc(e, l, a)), nt(e, t) || (He = !0), e)
        : (sl & 42) === 0
          ? ((He = !0), (e.memoizedState = l))
          : ((e = ld()), (F.lanes |= e), (pl |= e), t);
  }
  function ts(e, t, l, a, n) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var c = D.T,
      s = {};
    (D.T = s), Qc(e, !1, t, l);
    try {
      var v = n(),
        N = D.S;
      if (
        (N !== null && N(s, v),
        v !== null && typeof v == 'object' && typeof v.then == 'function')
      ) {
        var z = r2(v, a);
        En(e, t, z, rt(e));
      } else En(e, t, a, rt(e));
    } catch (U) {
      En(e, t, { then: function () {}, status: 'rejected', reason: U }, rt());
    } finally {
      (q.p = u), (D.T = c);
    }
  }
  function m2() {}
  function Xc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = ls(e).queue;
    ts(
      e,
      n,
      t,
      Q,
      l === null
        ? m2
        : function () {
            return as(e), l(a);
          }
    );
  }
  function ls(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: Q,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function as(e) {
    var t = ls(e).next.queue;
    En(e, t, {}, rt());
  }
  function Zc() {
    return ke(Gn);
  }
  function ns() {
    return Oe().memoizedState;
  }
  function us() {
    return Oe().memoizedState;
  }
  function v2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = rt();
          e = rl(l);
          var a = ol(t, e, l);
          a !== null && (ot(a, t, l), yn(a, t, l)),
            (t = { cache: bc() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function y2(e, t, l) {
    var a = rt();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      wu(e)
        ? cs(t, l)
        : ((l = oc(e, t, l, a)), l !== null && (ot(l, e, a), fs(l, t, a)));
  }
  function is(e, t, l) {
    var a = rt();
    En(e, t, l, a);
  }
  function En(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (wu(e)) cs(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            s = u(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), nt(s, c)))
            return bu(e, t, n, 0), Se === null && Su(), !1;
        } catch {
        } finally {
        }
      if (((l = oc(e, t, n, a)), l !== null))
        return ot(l, e, a), fs(l, t, a), !0;
    }
    return !1;
  }
  function Qc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Nf(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      wu(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = oc(e, l, a, 2)), t !== null && ot(t, e, 2);
  }
  function wu(e) {
    var t = e.alternate;
    return e === F || (t !== null && t === F);
  }
  function cs(e, t) {
    Ea = ju = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function fs(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), vr(e, l);
    }
  }
  var qu = {
      readContext: ke,
      use: _u,
      useCallback: Ae,
      useContext: Ae,
      useEffect: Ae,
      useImperativeHandle: Ae,
      useLayoutEffect: Ae,
      useInsertionEffect: Ae,
      useMemo: Ae,
      useReducer: Ae,
      useRef: Ae,
      useState: Ae,
      useDebugValue: Ae,
      useDeferredValue: Ae,
      useTransition: Ae,
      useSyncExternalStore: Ae,
      useId: Ae,
      useHostTransitionStatus: Ae,
      useFormState: Ae,
      useActionState: Ae,
      useOptimistic: Ae,
      useMemoCache: Ae,
      useCacheRefresh: Ae,
    },
    rs = {
      readContext: ke,
      use: _u,
      useCallback: function (e, t) {
        return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ke,
      useEffect: Ko,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          Hu(4194308, 4, $o.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Hu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Hu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Ie();
        t = t === void 0 ? null : t;
        var a = e();
        if (Xl) {
          nl(!0);
          try {
            e();
          } finally {
            nl(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = Ie();
        if (l !== void 0) {
          var n = l(t);
          if (Xl) {
            nl(!0);
            try {
              l(t);
            } finally {
              nl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = y2.bind(null, F, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ie();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Lc(e);
        var t = e.queue,
          l = is.bind(null, F, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: Yc,
      useDeferredValue: function (e, t) {
        var l = Ie();
        return Vc(l, e, t);
      },
      useTransition: function () {
        var e = Lc(!1);
        return (
          (e = ts.bind(null, F, e.queue, !0, !1)),
          (Ie().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = F,
          n = Ie();
        if (ue) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = t()), Se === null)) throw Error(f(349));
          (le & 124) !== 0 || zo(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          Ko(Ro.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          Na(9, Bu(), jo.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Ie(),
          t = Se.identifierPrefix;
        if (ue) {
          var l = Yt,
            a = Gt;
          (l = (a & ~(1 << (32 - at(a) - 1))).toString(32) + l),
            (t = '«' + t + 'R' + l),
            (l = Ru++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '»');
        } else (l = o2++), (t = '«' + t + 'r' + l.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Zc,
      useFormState: Yo,
      useActionState: Yo,
      useOptimistic: function (e) {
        var t = Ie();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l), (t = Qc.bind(null, F, !0, l)), (l.dispatch = t), [e, t]
        );
      },
      useMemoCache: Hc,
      useCacheRefresh: function () {
        return (Ie().memoizedState = v2.bind(null, F));
      },
    },
    os = {
      readContext: ke,
      use: _u,
      useCallback: Po,
      useContext: ke,
      useEffect: ko,
      useImperativeHandle: Fo,
      useInsertionEffect: Jo,
      useLayoutEffect: Wo,
      useMemo: Io,
      useReducer: Uu,
      useRef: Qo,
      useState: function () {
        return Uu(Zt);
      },
      useDebugValue: Yc,
      useDeferredValue: function (e, t) {
        var l = Oe();
        return es(l, se.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uu(Zt)[0],
          t = Oe().memoizedState;
        return [typeof e == 'boolean' ? e : bn(e), t];
      },
      useSyncExternalStore: Oo,
      useId: ns,
      useHostTransitionStatus: Zc,
      useFormState: Vo,
      useActionState: Vo,
      useOptimistic: function (e, t) {
        var l = Oe();
        return Bo(l, se, e, t);
      },
      useMemoCache: Hc,
      useCacheRefresh: us,
    },
    g2 = {
      readContext: ke,
      use: _u,
      useCallback: Po,
      useContext: ke,
      useEffect: ko,
      useImperativeHandle: Fo,
      useInsertionEffect: Jo,
      useLayoutEffect: Wo,
      useMemo: Io,
      useReducer: qc,
      useRef: Qo,
      useState: function () {
        return qc(Zt);
      },
      useDebugValue: Yc,
      useDeferredValue: function (e, t) {
        var l = Oe();
        return se === null ? Vc(l, e, t) : es(l, se.memoizedState, e, t);
      },
      useTransition: function () {
        var e = qc(Zt)[0],
          t = Oe().memoizedState;
        return [typeof e == 'boolean' ? e : bn(e), t];
      },
      useSyncExternalStore: Oo,
      useId: ns,
      useHostTransitionStatus: Zc,
      useFormState: Zo,
      useActionState: Zo,
      useOptimistic: function (e, t) {
        var l = Oe();
        return se !== null
          ? Bo(l, se, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: Hc,
      useCacheRefresh: us,
    },
    Ca = null,
    Tn = 0;
  function Lu(e) {
    var t = Tn;
    return (Tn += 1), Ca === null && (Ca = []), xo(Ca, e, t);
  }
  function Nn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Gu(e, t) {
    throw t.$$typeof === _
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ));
  }
  function ss(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ds(e) {
    function t(E, p) {
      if (e) {
        var T = E.deletions;
        T === null ? ((E.deletions = [p]), (E.flags |= 16)) : T.push(p);
      }
    }
    function l(E, p) {
      if (!e) return null;
      for (; p !== null; ) t(E, p), (p = p.sibling);
      return null;
    }
    function a(E) {
      for (var p = new Map(); E !== null; )
        E.key !== null ? p.set(E.key, E) : p.set(E.index, E), (E = E.sibling);
      return p;
    }
    function n(E, p) {
      return (E = Lt(E, p)), (E.index = 0), (E.sibling = null), E;
    }
    function u(E, p, T) {
      return (
        (E.index = T),
        e
          ? ((T = E.alternate),
            T !== null
              ? ((T = T.index), T < p ? ((E.flags |= 67108866), p) : T)
              : ((E.flags |= 67108866), p))
          : ((E.flags |= 1048576), p)
      );
    }
    function c(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function s(E, p, T, R) {
      return p === null || p.tag !== 6
        ? ((p = dc(T, E.mode, R)), (p.return = E), p)
        : ((p = n(p, T)), (p.return = E), p);
    }
    function v(E, p, T, R) {
      var V = T.type;
      return V === j
        ? z(E, p, T.props.children, R, T.key)
        : p !== null &&
            (p.elementType === V ||
              (typeof V == 'object' &&
                V !== null &&
                V.$$typeof === ce &&
                ss(V) === p.type))
          ? ((p = n(p, T.props)), Nn(p, T), (p.return = E), p)
          : ((p = Eu(T.type, T.key, T.props, null, E.mode, R)),
            Nn(p, T),
            (p.return = E),
            p);
    }
    function N(E, p, T, R) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== T.containerInfo ||
        p.stateNode.implementation !== T.implementation
        ? ((p = hc(T, E.mode, R)), (p.return = E), p)
        : ((p = n(p, T.children || [])), (p.return = E), p);
    }
    function z(E, p, T, R, V) {
      return p === null || p.tag !== 7
        ? ((p = Bl(T, E.mode, R, V)), (p.return = E), p)
        : ((p = n(p, T)), (p.return = E), p);
    }
    function U(E, p, T) {
      if (
        (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
      )
        return (p = dc('' + p, E.mode, T)), (p.return = E), p;
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case O:
            return (
              (T = Eu(p.type, p.key, p.props, null, E.mode, T)),
              Nn(T, p),
              (T.return = E),
              T
            );
          case H:
            return (p = hc(p, E.mode, T)), (p.return = E), p;
          case ce:
            var R = p._init;
            return (p = R(p._payload)), U(E, p, T);
        }
        if (Z(p) || ve(p))
          return (p = Bl(p, E.mode, T, null)), (p.return = E), p;
        if (typeof p.then == 'function') return U(E, Lu(p), T);
        if (p.$$typeof === L) return U(E, Au(E, p), T);
        Gu(E, p);
      }
      return null;
    }
    function A(E, p, T, R) {
      var V = p !== null ? p.key : null;
      if (
        (typeof T == 'string' && T !== '') ||
        typeof T == 'number' ||
        typeof T == 'bigint'
      )
        return V !== null ? null : s(E, p, '' + T, R);
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case O:
            return T.key === V ? v(E, p, T, R) : null;
          case H:
            return T.key === V ? N(E, p, T, R) : null;
          case ce:
            return (V = T._init), (T = V(T._payload)), A(E, p, T, R);
        }
        if (Z(T) || ve(T)) return V !== null ? null : z(E, p, T, R, null);
        if (typeof T.then == 'function') return A(E, p, Lu(T), R);
        if (T.$$typeof === L) return A(E, p, Au(E, T), R);
        Gu(E, T);
      }
      return null;
    }
    function M(E, p, T, R, V) {
      if (
        (typeof R == 'string' && R !== '') ||
        typeof R == 'number' ||
        typeof R == 'bigint'
      )
        return (E = E.get(T) || null), s(p, E, '' + R, V);
      if (typeof R == 'object' && R !== null) {
        switch (R.$$typeof) {
          case O:
            return (
              (E = E.get(R.key === null ? T : R.key) || null), v(p, E, R, V)
            );
          case H:
            return (
              (E = E.get(R.key === null ? T : R.key) || null), N(p, E, R, V)
            );
          case ce:
            var I = R._init;
            return (R = I(R._payload)), M(E, p, T, R, V);
        }
        if (Z(R) || ve(R)) return (E = E.get(T) || null), z(p, E, R, V, null);
        if (typeof R.then == 'function') return M(E, p, T, Lu(R), V);
        if (R.$$typeof === L) return M(E, p, T, Au(p, R), V);
        Gu(p, R);
      }
      return null;
    }
    function W(E, p, T, R) {
      for (
        var V = null, I = null, K = p, J = (p = 0), qe = null;
        K !== null && J < T.length;
        J++
      ) {
        K.index > J ? ((qe = K), (K = null)) : (qe = K.sibling);
        var ne = A(E, K, T[J], R);
        if (ne === null) {
          K === null && (K = qe);
          break;
        }
        e && K && ne.alternate === null && t(E, K),
          (p = u(ne, p, J)),
          I === null ? (V = ne) : (I.sibling = ne),
          (I = ne),
          (K = qe);
      }
      if (J === T.length) return l(E, K), ue && wl(E, J), V;
      if (K === null) {
        for (; J < T.length; J++)
          (K = U(E, T[J], R)),
            K !== null &&
              ((p = u(K, p, J)),
              I === null ? (V = K) : (I.sibling = K),
              (I = K));
        return ue && wl(E, J), V;
      }
      for (K = a(K); J < T.length; J++)
        (qe = M(K, E, J, T[J], R)),
          qe !== null &&
            (e &&
              qe.alternate !== null &&
              K.delete(qe.key === null ? J : qe.key),
            (p = u(qe, p, J)),
            I === null ? (V = qe) : (I.sibling = qe),
            (I = qe));
      return (
        e &&
          K.forEach(function (Ml) {
            return t(E, Ml);
          }),
        ue && wl(E, J),
        V
      );
    }
    function k(E, p, T, R) {
      if (T == null) throw Error(f(151));
      for (
        var V = null, I = null, K = p, J = (p = 0), qe = null, ne = T.next();
        K !== null && !ne.done;
        J++, ne = T.next()
      ) {
        K.index > J ? ((qe = K), (K = null)) : (qe = K.sibling);
        var Ml = A(E, K, ne.value, R);
        if (Ml === null) {
          K === null && (K = qe);
          break;
        }
        e && K && Ml.alternate === null && t(E, K),
          (p = u(Ml, p, J)),
          I === null ? (V = Ml) : (I.sibling = Ml),
          (I = Ml),
          (K = qe);
      }
      if (ne.done) return l(E, K), ue && wl(E, J), V;
      if (K === null) {
        for (; !ne.done; J++, ne = T.next())
          (ne = U(E, ne.value, R)),
            ne !== null &&
              ((p = u(ne, p, J)),
              I === null ? (V = ne) : (I.sibling = ne),
              (I = ne));
        return ue && wl(E, J), V;
      }
      for (K = a(K); !ne.done; J++, ne = T.next())
        (ne = M(K, E, J, ne.value, R)),
          ne !== null &&
            (e &&
              ne.alternate !== null &&
              K.delete(ne.key === null ? J : ne.key),
            (p = u(ne, p, J)),
            I === null ? (V = ne) : (I.sibling = ne),
            (I = ne));
      return (
        e &&
          K.forEach(function (pm) {
            return t(E, pm);
          }),
        ue && wl(E, J),
        V
      );
    }
    function he(E, p, T, R) {
      if (
        (typeof T == 'object' &&
          T !== null &&
          T.type === j &&
          T.key === null &&
          (T = T.props.children),
        typeof T == 'object' && T !== null)
      ) {
        switch (T.$$typeof) {
          case O:
            e: {
              for (var V = T.key; p !== null; ) {
                if (p.key === V) {
                  if (((V = T.type), V === j)) {
                    if (p.tag === 7) {
                      l(E, p.sibling),
                        (R = n(p, T.props.children)),
                        (R.return = E),
                        (E = R);
                      break e;
                    }
                  } else if (
                    p.elementType === V ||
                    (typeof V == 'object' &&
                      V !== null &&
                      V.$$typeof === ce &&
                      ss(V) === p.type)
                  ) {
                    l(E, p.sibling),
                      (R = n(p, T.props)),
                      Nn(R, T),
                      (R.return = E),
                      (E = R);
                    break e;
                  }
                  l(E, p);
                  break;
                } else t(E, p);
                p = p.sibling;
              }
              T.type === j
                ? ((R = Bl(T.props.children, E.mode, R, T.key)),
                  (R.return = E),
                  (E = R))
                : ((R = Eu(T.type, T.key, T.props, null, E.mode, R)),
                  Nn(R, T),
                  (R.return = E),
                  (E = R));
            }
            return c(E);
          case H:
            e: {
              for (V = T.key; p !== null; ) {
                if (p.key === V)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === T.containerInfo &&
                    p.stateNode.implementation === T.implementation
                  ) {
                    l(E, p.sibling),
                      (R = n(p, T.children || [])),
                      (R.return = E),
                      (E = R);
                    break e;
                  } else {
                    l(E, p);
                    break;
                  }
                else t(E, p);
                p = p.sibling;
              }
              (R = hc(T, E.mode, R)), (R.return = E), (E = R);
            }
            return c(E);
          case ce:
            return (V = T._init), (T = V(T._payload)), he(E, p, T, R);
        }
        if (Z(T)) return W(E, p, T, R);
        if (ve(T)) {
          if (((V = ve(T)), typeof V != 'function')) throw Error(f(150));
          return (T = V.call(T)), k(E, p, T, R);
        }
        if (typeof T.then == 'function') return he(E, p, Lu(T), R);
        if (T.$$typeof === L) return he(E, p, Au(E, T), R);
        Gu(E, T);
      }
      return (typeof T == 'string' && T !== '') ||
        typeof T == 'number' ||
        typeof T == 'bigint'
        ? ((T = '' + T),
          p !== null && p.tag === 6
            ? (l(E, p.sibling), (R = n(p, T)), (R.return = E), (E = R))
            : (l(E, p), (R = dc(T, E.mode, R)), (R.return = E), (E = R)),
          c(E))
        : l(E, p);
    }
    return function (E, p, T, R) {
      try {
        Tn = 0;
        var V = he(E, p, T, R);
        return (Ca = null), V;
      } catch (K) {
        if (K === mn || K === Du) throw K;
        var I = ut(29, K, null, E.mode);
        return (I.lanes = R), (I.return = E), I;
      } finally {
      }
    };
  }
  var Aa = ds(!0),
    hs = ds(!1),
    pt = Ge(null),
    Dt = null;
  function dl(e) {
    var t = e.alternate;
    oe(je, je.current & 1),
      oe(pt, e),
      Dt === null &&
        (t === null || xa.current !== null || t.memoizedState !== null) &&
        (Dt = e);
  }
  function ms(e) {
    if (e.tag === 22) {
      if ((oe(je, je.current), oe(pt, e), Dt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Dt = e);
      }
    } else hl();
  }
  function hl() {
    oe(je, je.current), oe(pt, pt.current);
  }
  function Qt(e) {
    xe(pt), Dt === e && (Dt = null), xe(je);
  }
  var je = Ge(0);
  function Yu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || Hf(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Kc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : C({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var kc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = rt(),
        n = rl(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = ol(e, n, a)),
        t !== null && (ot(t, e, a), yn(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = rt(),
        n = rl(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = ol(e, n, a)),
        t !== null && (ot(t, e, a), yn(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = rt(),
        a = rl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ol(e, a, l)),
        t !== null && (ot(t, e, l), yn(t, e, l));
    },
  };
  function vs(e, t, l, a, n, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, u, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !un(l, a) || !un(n, u)
          : !0
    );
  }
  function ys(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && kc.enqueueReplaceState(t, t.state, null);
  }
  function Zl(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = C({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Vu =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function gs(e) {
    Vu(e);
  }
  function ps(e) {
    console.error(e);
  }
  function Ss(e) {
    Vu(e);
  }
  function Xu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function bs(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Jc(e, t, l) {
    return (
      (l = rl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Xu(e, t);
      }),
      l
    );
  }
  function xs(e) {
    return (e = rl(e)), (e.tag = 3), e;
  }
  function Es(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var u = a.value;
      (e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          bs(t, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (e.callback = function () {
        bs(t, l, a),
          typeof n != 'function' &&
            (Sl === null ? (Sl = new Set([this])) : Sl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : '',
        });
      });
  }
  function p2(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && sn(t, l, n, !0),
        (l = pt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Dt === null ? Sf() : l.alternate === null && Ce === 0 && (Ce = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  xf(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Tc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  xf(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return xf(e, a, n), Sf(), !1;
    }
    if (ue)
      return (
        (t = pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== yc && ((e = Error(f(422), { cause: a })), on(mt(e, l))))
          : (a !== yc && ((t = Error(f(423), { cause: a })), on(mt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = mt(a, l)),
            (n = Jc(e.stateNode, a, n)),
            Ac(e, n),
            Ce !== 4 && (Ce = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = mt(u, l)),
      jn === null ? (jn = [u]) : jn.push(u),
      Ce !== 4 && (Ce = 2),
      t === null)
    )
      return !0;
    (a = mt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Jc(l.stateNode, a, e)),
            Ac(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (Sl === null || !Sl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = xs(n)),
              Es(n, e, l, a),
              Ac(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ts = Error(f(461)),
    He = !1;
  function Ye(e, t, l, a) {
    t.child = e === null ? hs(t, null, l, a) : Aa(t, e.child, l, a);
  }
  function Ns(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ('ref' in a) {
      var c = {};
      for (var s in a) s !== 'ref' && (c[s] = a[s]);
    } else c = a;
    return (
      Yl(t),
      (a = jc(e, t, l, c, u, n)),
      (s = Rc()),
      e !== null && !He
        ? (_c(e, t, n), Kt(e, t, n))
        : (ue && s && mc(t), (t.flags |= 1), Ye(e, t, a, n), t.child)
    );
  }
  function Cs(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == 'function' &&
        !sc(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), As(e, t, u, a, n))
        : ((e = Eu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !lf(e, n))) {
      var c = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : un), l(c, a) && e.ref === t.ref)
      )
        return Kt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Lt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function As(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (un(u, a) && e.ref === t.ref)
        if (((He = !1), (t.pendingProps = a = u), lf(e, n)))
          (e.flags & 131072) !== 0 && (He = !0);
        else return (t.lanes = e.lanes), Kt(e, t, n);
    }
    return Wc(e, t, l, a, n);
  }
  function Ms(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = u & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return Ds(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Mu(t, u !== null ? u.cachePool : null),
          u !== null ? Ao(t, u) : Dc(),
          ms(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Ds(e, t, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (Mu(t, u.cachePool), Ao(t, u), hl(), (t.memoizedState = null))
        : (e !== null && Mu(t, null), Dc(), hl());
    return Ye(e, t, n, l), t.child;
  }
  function Ds(e, t, l, a) {
    var n = Ec();
    return (
      (n = n === null ? null : { parent: ze._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && Mu(t, null),
      Dc(),
      ms(t),
      e !== null && sn(e, t, a, !0),
      null
    );
  }
  function Zu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Wc(e, t, l, a, n) {
    return (
      Yl(t),
      (l = jc(e, t, l, a, void 0, n)),
      (a = Rc()),
      e !== null && !He
        ? (_c(e, t, n), Kt(e, t, n))
        : (ue && a && mc(t), (t.flags |= 1), Ye(e, t, l, n), t.child)
    );
  }
  function Os(e, t, l, a, n, u) {
    return (
      Yl(t),
      (t.updateQueue = null),
      (l = Do(t, a, l, n)),
      Mo(e),
      (a = Rc()),
      e !== null && !He
        ? (_c(e, t, u), Kt(e, t, u))
        : (ue && a && mc(t), (t.flags |= 1), Ye(e, t, l, u), t.child)
    );
  }
  function zs(e, t, l, a, n) {
    if ((Yl(t), t.stateNode === null)) {
      var u = ya,
        c = l.contextType;
      typeof c == 'object' && c !== null && (u = ke(c)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = kc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Nc(t),
        (c = l.contextType),
        (u.context = typeof c == 'object' && c !== null ? ke(c) : ya),
        (u.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == 'function' && (Kc(t, l, c, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((c = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' &&
            u.UNSAFE_componentWillMount(),
          c !== u.state && kc.enqueueReplaceState(u, u.state, null),
          pn(t, a, u, n),
          gn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      u = t.stateNode;
      var s = t.memoizedProps,
        v = Zl(l, s);
      u.props = v;
      var N = u.context,
        z = l.contextType;
      (c = ya), typeof z == 'object' && z !== null && (c = ke(z));
      var U = l.getDerivedStateFromProps;
      (z =
        typeof U == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function'),
        (s = t.pendingProps !== s),
        z ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((s || N !== c) && ys(t, u, a, c)),
        (fl = !1);
      var A = t.memoizedState;
      (u.state = A),
        pn(t, a, u, n),
        gn(),
        (N = t.memoizedState),
        s || A !== N || fl
          ? (typeof U == 'function' && (Kc(t, l, U, a), (N = t.memoizedState)),
            (v = fl || vs(t, l, v, a, A, N, c))
              ? (z ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = N)),
            (u.props = a),
            (u.state = N),
            (u.context = c),
            (a = v))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        Cc(e, t),
        (c = t.memoizedProps),
        (z = Zl(l, c)),
        (u.props = z),
        (U = t.pendingProps),
        (A = u.context),
        (N = l.contextType),
        (v = ya),
        typeof N == 'object' && N !== null && (v = ke(N)),
        (s = l.getDerivedStateFromProps),
        (N =
          typeof s == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((c !== U || A !== v) && ys(t, u, a, v)),
        (fl = !1),
        (A = t.memoizedState),
        (u.state = A),
        pn(t, a, u, n),
        gn();
      var M = t.memoizedState;
      c !== U ||
      A !== M ||
      fl ||
      (e !== null && e.dependencies !== null && Cu(e.dependencies))
        ? (typeof s == 'function' && (Kc(t, l, s, a), (M = t.memoizedState)),
          (z =
            fl ||
            vs(t, l, z, a, A, M, v) ||
            (e !== null && e.dependencies !== null && Cu(e.dependencies)))
            ? (N ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' &&
                  u.componentWillUpdate(a, M, v),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(a, M, v)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = M)),
          (u.props = a),
          (u.state = M),
          (u.context = v),
          (a = z))
        : (typeof u.componentDidUpdate != 'function' ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Zu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != 'function'
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Aa(t, e.child, null, n)),
              (t.child = Aa(t, null, l, n)))
            : Ye(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Kt(e, t, n)),
      e
    );
  }
  function js(e, t, l, a) {
    return rn(), (t.flags |= 256), Ye(e, t, l, a), t.child;
  }
  var $c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Fc(e) {
    return { baseLanes: e, cachePool: po() };
  }
  function Pc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= St), e;
  }
  function Rs(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ue) {
        if ((n ? dl(t) : hl(), ue)) {
          var s = Ne,
            v;
          if ((v = s)) {
            e: {
              for (v = s, s = Mt; v.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break e;
                }
                if (((v = Nt(v.nextSibling)), v === null)) {
                  s = null;
                  break e;
                }
              }
              s = v;
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: Hl !== null ? { id: Gt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (v = ut(18, null, null, 0)),
                (v.stateNode = s),
                (v.return = t),
                (t.child = v),
                (We = t),
                (Ne = null),
                (v = !0))
              : (v = !1);
          }
          v || Ll(t);
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return Hf(s) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Qt(t);
      }
      return (
        (s = a.children),
        (a = a.fallback),
        n
          ? (hl(),
            (n = t.mode),
            (s = Qu({ mode: 'hidden', children: s }, n)),
            (a = Bl(a, n, l, null)),
            (s.return = t),
            (a.return = t),
            (s.sibling = a),
            (t.child = s),
            (n = t.child),
            (n.memoizedState = Fc(l)),
            (n.childLanes = Pc(e, c, l)),
            (t.memoizedState = $c),
            a)
          : (dl(t), Ic(t, s))
      );
    }
    if (
      ((v = e.memoizedState), v !== null && ((s = v.dehydrated), s !== null))
    ) {
      if (u)
        t.flags & 256
          ? (dl(t), (t.flags &= -257), (t = ef(e, t, l)))
          : t.memoizedState !== null
            ? (hl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (hl(),
              (n = a.fallback),
              (s = t.mode),
              (a = Qu({ mode: 'visible', children: a.children }, s)),
              (n = Bl(n, s, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              Aa(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Fc(l)),
              (a.childLanes = Pc(e, c, l)),
              (t.memoizedState = $c),
              (t = n));
      else if ((dl(t), Hf(s))) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var N = c.dgst;
        (c = N),
          (a = Error(f(419))),
          (a.stack = ''),
          (a.digest = c),
          on({ value: a, source: null, stack: null }),
          (t = ef(e, t, l));
      } else if (
        (He || sn(e, t, l, !1), (c = (l & e.childLanes) !== 0), He || c)
      ) {
        if (
          ((c = Se),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : Hi(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), va(e, a), ot(c, e, a), Ts);
        s.data === '$?' || Sf(), (t = ef(e, t, l));
      } else
        s.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = v.treeContext),
            (Ne = Nt(s.nextSibling)),
            (We = t),
            (ue = !0),
            (ql = null),
            (Mt = !1),
            e !== null &&
              ((yt[gt++] = Gt),
              (yt[gt++] = Yt),
              (yt[gt++] = Hl),
              (Gt = e.id),
              (Yt = e.overflow),
              (Hl = t)),
            (t = Ic(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (hl(),
        (n = a.fallback),
        (s = t.mode),
        (v = e.child),
        (N = v.sibling),
        (a = Lt(v, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        N !== null ? (n = Lt(N, n)) : ((n = Bl(n, s, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (s = e.child.memoizedState),
        s === null
          ? (s = Fc(l))
          : ((v = s.cachePool),
            v !== null
              ? ((N = ze._currentValue),
                (v = v.parent !== N ? { parent: N, pool: N } : v))
              : (v = po()),
            (s = { baseLanes: s.baseLanes | l, cachePool: v })),
        (n.memoizedState = s),
        (n.childLanes = Pc(e, c, l)),
        (t.memoizedState = $c),
        a)
      : (dl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Lt(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Ic(e, t) {
    return (
      (t = Qu({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Qu(e, t) {
    return (
      (e = ut(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function ef(e, t, l) {
    return (
      Aa(t, e.child, null, l),
      (e = Ic(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _s(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), pc(e.return, t, l);
  }
  function tf(e, t, l, a, n) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function Us(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if ((Ye(e, t, a.children, l), (a = je.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && _s(e, l, t);
          else if (e.tag === 19) _s(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((oe(je, a), n)) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && Yu(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          tf(t, !1, n, l, u);
        break;
      case 'backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Yu(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        tf(t, !0, l, null, u);
        break;
      case 'together':
        tf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Kt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (pl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((sn(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Lt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Lt(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function lf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Cu(e)));
  }
  function S2(e, t, l) {
    switch (t.tag) {
      case 3:
        lu(t, t.stateNode.containerInfo),
          cl(t, ze, e.memoizedState.cache),
          rn();
        break;
      case 27:
      case 5:
        ji(t);
        break;
      case 4:
        lu(t, t.stateNode.containerInfo);
        break;
      case 10:
        cl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (dl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? Rs(e, t, l)
              : (dl(t), (e = Kt(e, t, l)), e !== null ? e.sibling : null);
        dl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (sn(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return Us(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          oe(je, je.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ms(e, t, l);
      case 24:
        cl(t, ze, e.memoizedState.cache);
    }
    return Kt(e, t, l);
  }
  function Bs(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) He = !0;
      else {
        if (!lf(e, l) && (t.flags & 128) === 0) return (He = !1), S2(e, t, l);
        He = (e.flags & 131072) !== 0;
      }
    else (He = !1), ue && (t.flags & 1048576) !== 0 && oo(t, Nu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == 'function'))
            sc(a)
              ? ((e = Zl(a, e)), (t.tag = 1), (t = zs(null, t, a, e, l)))
              : ((t.tag = 0), (t = Wc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === X)) {
                (t.tag = 11), (t = Ns(null, t, a, e, l));
                break e;
              } else if (n === ie) {
                (t.tag = 14), (t = Cs(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = Le(a) || a), Error(f(306, t, '')));
          }
        }
        return t;
      case 0:
        return Wc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Zl(a, t.pendingProps)), zs(e, t, a, n, l);
      case 3:
        e: {
          if ((lu(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), Cc(e, t), pn(t, a, null, l);
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            cl(t, ze, a),
            a !== u.cache && Sc(t, [ze], l, !0),
            gn(),
            (a = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = js(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = mt(Error(f(424)), t)), on(n), (t = js(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Ne = Nt(e.firstChild),
                  We = t,
                  ue = !0,
                  ql = null,
                  Mt = !0,
                  l = hs(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((rn(), a === n)) {
              t = Kt(e, t, l);
              break e;
            }
            Ye(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Zu(e, t),
          e === null
            ? (l = Ld(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ue ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ui(al.current).createElement(l)),
                (a[Ke] = t),
                (a[Fe] = e),
                Xe(a, l, e),
                Be(a),
                (t.stateNode = a))
            : (t.memoizedState = Ld(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          ji(t),
          e === null &&
            ue &&
            ((a = t.stateNode = Hd(t.type, t.pendingProps, al.current)),
            (We = t),
            (Mt = !0),
            (n = Ne),
            El(t.type) ? ((wf = n), (Ne = Nt(a.firstChild))) : (Ne = n)),
          Ye(e, t, t.pendingProps.children, l),
          Zu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ue &&
            ((n = a = Ne) &&
              ((a = k2(a, t.type, t.pendingProps, Mt)),
              a !== null
                ? ((t.stateNode = a),
                  (We = t),
                  (Ne = Nt(a.firstChild)),
                  (Mt = !1),
                  (n = !0))
                : (n = !1)),
            n || Ll(t)),
          ji(t),
          (n = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = u.children),
          _f(n, u) ? (a = null) : c !== null && _f(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = jc(e, t, s2, null, null, l)), (Gn._currentValue = n)),
          Zu(e, t),
          Ye(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ue &&
            ((e = l = Ne) &&
              ((l = J2(l, t.pendingProps, Mt)),
              l !== null
                ? ((t.stateNode = l), (We = t), (Ne = null), (e = !0))
                : (e = !1)),
            e || Ll(t)),
          null
        );
      case 13:
        return Rs(e, t, l);
      case 4:
        return (
          lu(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Aa(t, null, a, l)) : Ye(e, t, a, l),
          t.child
        );
      case 11:
        return Ns(e, t, t.type, t.pendingProps, l);
      case 7:
        return Ye(e, t, t.pendingProps, l), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          cl(t, t.type, a.value),
          Ye(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Yl(t),
          (n = ke(n)),
          (a = a(n)),
          (t.flags |= 1),
          Ye(e, t, a, l),
          t.child
        );
      case 14:
        return Cs(e, t, t.type, t.pendingProps, l);
      case 15:
        return As(e, t, t.type, t.pendingProps, l);
      case 19:
        return Us(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Qu(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = Lt(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return Ms(e, t, l);
      case 24:
        return (
          Yl(t),
          (a = ke(ze)),
          e === null
            ? ((n = Ec()),
              n === null &&
                ((n = Se),
                (u = bc()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Nc(t),
              cl(t, ze, n))
            : ((e.lanes & l) !== 0 && (Cc(e, t), pn(t, null, null, l), gn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  cl(t, ze, a))
                : ((a = u.cache),
                  cl(t, ze, a),
                  a !== n.cache && Sc(t, [ze], l, !0))),
          Ye(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function kt(e) {
    e.flags |= 4;
  }
  function Hs(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Zd(t))) {
      if (
        ((t = pt.current),
        t !== null &&
          ((le & 4194048) === le
            ? Dt !== null
            : ((le & 62914560) !== le && (le & 536870912) === 0) || t !== Dt))
      )
        throw ((vn = Tc), So);
      e.flags |= 8192;
    }
  }
  function Ku(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? hr() : 536870912), (e.lanes |= t), (za |= t));
  }
  function Cn(e, t) {
    if (!ue)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function b2(e, t, l) {
    var a = t.pendingProps;
    switch ((vc(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(t), null;
      case 1:
        return Ee(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(ze),
          ea(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (fn(t)
              ? kt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), mo())),
          Ee(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (kt(t),
              l !== null ? (Ee(t), Hs(t, l)) : (Ee(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (kt(t), Ee(t), Hs(t, l))
                : (Ee(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && kt(t), Ee(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        au(t), (l = al.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Ee(t), null;
          }
          (e = Ue.current),
            fn(t) ? so(t) : ((e = Hd(n, a, l)), (t.stateNode = e), kt(t));
        }
        return Ee(t), null;
      case 5:
        if ((au(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return Ee(t), null;
          }
          if (((e = Ue.current), fn(t))) so(t);
          else {
            switch (((n = ui(al.current)), e)) {
              case 1:
                e = n.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                e = n.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    e = n.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    e = n.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l
                    );
                    break;
                  case 'script':
                    (e = n.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof a.is == 'string'
                        ? n.createElement('select', { is: a.is })
                        : n.createElement('select')),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == 'string'
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[Ke] = t), (e[Fe] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((Xe(e, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && kt(t);
          }
        }
        return Ee(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && kt(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(f(166));
          if (((e = al.current), fn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = We),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[Ke] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Od(e.nodeValue, l)
              )),
              e || Ll(t);
          } else (e = ui(e).createTextNode(a)), (e[Ke] = t), (t.stateNode = e);
        }
        return Ee(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = fn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Ke] = t;
            } else
              rn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ee(t), (n = !1);
          } else
            (n = mo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        if ((Qt(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Ku(t, t.updateQueue),
          Ee(t),
          null
        );
      case 4:
        return ea(), e === null && Df(t.stateNode.containerInfo), Ee(t), null;
      case 10:
        return Xt(t.type), Ee(t), null;
      case 19:
        if ((xe(je), (n = t.memoizedState), n === null)) return Ee(t), null;
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) Cn(n, !1);
          else {
            if (Ce !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Yu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Cn(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Ku(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    ro(l, e), (l = l.sibling);
                  return oe(je, (je.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              At() > Wu &&
              ((t.flags |= 128), (a = !0), Cn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Yu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ku(t, e),
                Cn(n, !0),
                n.tail === null &&
                  n.tailMode === 'hidden' &&
                  !u.alternate &&
                  !ue)
              )
                return Ee(t), null;
            } else
              2 * At() - n.renderingStartTime > Wu &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Cn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = At()),
            (t.sibling = null),
            (e = je.current),
            oe(je, a ? (e & 1) | 2 : e & 1),
            t)
          : (Ee(t), null);
      case 22:
      case 23:
        return (
          Qt(t),
          Oc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
          (l = t.updateQueue),
          l !== null && Ku(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && xe(Vl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Xt(ze),
          Ee(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function x2(e, t) {
    switch ((vc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(ze),
          ea(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return au(t), null;
      case 13:
        if (
          (Qt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          rn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return xe(je), null;
      case 4:
        return ea(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return (
          Qt(t),
          Oc(),
          e !== null && xe(Vl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Xt(ze), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ws(e, t) {
    switch ((vc(t), t.tag)) {
      case 3:
        Xt(ze), ea();
        break;
      case 26:
      case 27:
      case 5:
        au(t);
        break;
      case 4:
        ea();
        break;
      case 13:
        Qt(t);
        break;
      case 19:
        xe(je);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        Qt(t), Oc(), e !== null && xe(Vl);
        break;
      case 24:
        Xt(ze);
    }
  }
  function An(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              c = l.inst;
            (a = u()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      ye(t, t.return, s);
    }
  }
  function ml(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (n = t);
              var v = l,
                N = s;
              try {
                N();
              } catch (z) {
                ye(n, v, z);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      ye(t, t.return, z);
    }
  }
  function qs(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Co(t, l);
      } catch (a) {
        ye(e, e.return, a);
      }
    }
  }
  function Ls(e, t, l) {
    (l.props = Zl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      ye(e, t, a);
    }
  }
  function Mn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      ye(e, t, n);
    }
  }
  function Ot(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          ye(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          ye(e, t, n);
        }
      else l.current = null;
  }
  function Gs(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function af(e, t, l) {
    try {
      var a = e.stateNode;
      V2(a, e.type, l, t), (a[Fe] = t);
    } catch (n) {
      ye(e, e.return, n);
    }
  }
  function Ys(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && El(e.type)) ||
      e.tag === 4
    );
  }
  function nf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ys(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && El(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uf(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ni));
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (uf(e, t, l), e = e.sibling; e !== null; )
        uf(e, t, l), (e = e.sibling);
  }
  function ku(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && El(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (ku(e, t, l), e = e.sibling; e !== null; )
        ku(e, t, l), (e = e.sibling);
  }
  function Vs(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Xe(t, a, l), (t[Ke] = e), (t[Fe] = l);
    } catch (u) {
      ye(e, e.return, u);
    }
  }
  var Jt = !1,
    Me = !1,
    cf = !1,
    Xs = typeof WeakSet == 'function' ? WeakSet : Set,
    we = null;
  function E2(e, t) {
    if (((e = e.containerInfo), (jf = si), (e = Ir(e)), nc(e))) {
      if ('selectionStart' in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var c = 0,
              s = -1,
              v = -1,
              N = 0,
              z = 0,
              U = e,
              A = null;
            t: for (;;) {
              for (
                var M;
                U !== l || (n !== 0 && U.nodeType !== 3) || (s = c + n),
                  U !== u || (a !== 0 && U.nodeType !== 3) || (v = c + a),
                  U.nodeType === 3 && (c += U.nodeValue.length),
                  (M = U.firstChild) !== null;

              )
                (A = U), (U = M);
              for (;;) {
                if (U === e) break t;
                if (
                  (A === l && ++N === n && (s = c),
                  A === u && ++z === a && (v = c),
                  (M = U.nextSibling) !== null)
                )
                  break;
                (U = A), (A = U.parentNode);
              }
              U = M;
            }
            l = s === -1 || v === -1 ? null : { start: s, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Rf = { focusedElem: e, selectionRange: l }, si = !1, we = t;
      we !== null;

    )
      if (
        ((t = we), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (we = e);
      else
        for (; we !== null; ) {
          switch (((t = we), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var W = Zl(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(W, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (k) {
                  ye(l, l.return, k);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Bf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Bf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (we = e);
            break;
          }
          we = t.return;
        }
  }
  function Zs(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        vl(e, l), a & 4 && An(5, l);
        break;
      case 1:
        if ((vl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              ye(l, l.return, c);
            }
          else {
            var n = Zl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              ye(l, l.return, c);
            }
          }
        a & 64 && qs(l), a & 512 && Mn(l, l.return);
        break;
      case 3:
        if ((vl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Co(e, t);
          } catch (c) {
            ye(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Vs(l);
      case 26:
      case 5:
        vl(e, l), t === null && a & 4 && Gs(l), a & 512 && Mn(l, l.return);
        break;
      case 12:
        vl(e, l);
        break;
      case 13:
        vl(e, l),
          a & 4 && ks(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = j2.bind(null, l)), W2(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Jt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Me), (n = Jt);
          var u = Me;
          (Jt = a),
            (Me = t) && !u ? yl(e, l, (l.subtreeFlags & 8772) !== 0) : vl(e, l),
            (Jt = n),
            (Me = u);
        }
        break;
      case 30:
        break;
      default:
        vl(e, l);
    }
  }
  function Qs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Qs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Li(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var be = null,
    et = !1;
  function Wt(e, t, l) {
    for (l = l.child; l !== null; ) Ks(e, t, l), (l = l.sibling);
  }
  function Ks(e, t, l) {
    if (lt && typeof lt.onCommitFiberUnmount == 'function')
      try {
        lt.onCommitFiberUnmount(ka, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Me || Ot(l, t),
          Wt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Me || Ot(l, t);
        var a = be,
          n = et;
        El(l.type) && ((be = l.stateNode), (et = !1)),
          Wt(e, t, l),
          Hn(l.stateNode),
          (be = a),
          (et = n);
        break;
      case 5:
        Me || Ot(l, t);
      case 6:
        if (
          ((a = be),
          (n = et),
          (be = null),
          Wt(e, t, l),
          (be = a),
          (et = n),
          be !== null)
        )
          if (et)
            try {
              (be.nodeType === 9
                ? be.body
                : be.nodeName === 'HTML'
                  ? be.ownerDocument.body
                  : be
              ).removeChild(l.stateNode);
            } catch (u) {
              ye(l, t, u);
            }
          else
            try {
              be.removeChild(l.stateNode);
            } catch (u) {
              ye(l, t, u);
            }
        break;
      case 18:
        be !== null &&
          (et
            ? ((e = be),
              Ud(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                l.stateNode
              ),
              Zn(e))
            : Ud(be, l.stateNode));
        break;
      case 4:
        (a = be),
          (n = et),
          (be = l.stateNode.containerInfo),
          (et = !0),
          Wt(e, t, l),
          (be = a),
          (et = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Me || ml(2, l, t), Me || ml(4, l, t), Wt(e, t, l);
        break;
      case 1:
        Me ||
          (Ot(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && Ls(l, t, a)),
          Wt(e, t, l);
        break;
      case 21:
        Wt(e, t, l);
        break;
      case 22:
        (Me = (a = Me) || l.memoizedState !== null), Wt(e, t, l), (Me = a);
        break;
      default:
        Wt(e, t, l);
    }
  }
  function ks(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Zn(e);
      } catch (l) {
        ye(t, t.return, l);
      }
  }
  function T2(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Xs()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Xs()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function ff(e, t) {
    var l = T2(e);
    t.forEach(function (a) {
      var n = R2.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function it(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          c = t,
          s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (El(s.type)) {
                (be = s.stateNode), (et = !1);
                break e;
              }
              break;
            case 5:
              (be = s.stateNode), (et = !1);
              break e;
            case 3:
            case 4:
              (be = s.stateNode.containerInfo), (et = !0);
              break e;
          }
          s = s.return;
        }
        if (be === null) throw Error(f(160));
        Ks(u, c, n),
          (be = null),
          (et = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Js(t, e), (t = t.sibling);
  }
  var Tt = null;
  function Js(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        it(t, e),
          ct(e),
          a & 4 && (ml(3, e, e.return), An(3, e), ml(5, e, e.return));
        break;
      case 1:
        it(t, e),
          ct(e),
          a & 512 && (Me || l === null || Ot(l, l.return)),
          a & 64 &&
            Jt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Tt;
        if (
          (it(t, e),
          ct(e),
          a & 512 && (Me || l === null || Ot(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case 'title':
                      (u = n.getElementsByTagName('title')[0]),
                        (!u ||
                          u[$a] ||
                          u[Ke] ||
                          u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          u.hasAttribute('itemprop')) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector('head > title')
                          )),
                        Xe(u, a, l),
                        (u[Ke] = e),
                        Be(u),
                        (a = u);
                      break e;
                    case 'link':
                      var c = Vd('link', 'href', n).get(a + (l.href || ''));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              u.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Xe(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case 'meta':
                      if (
                        (c = Vd('meta', 'content', n).get(
                          a + (l.content || '')
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((u = c[s]),
                            u.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              u.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Xe(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Ke] = e), Be(u), (a = u);
                }
                e.stateNode = a;
              } else Xd(n, e.type, e.stateNode);
            else e.stateNode = Yd(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? Xd(n, e.type, e.stateNode)
                  : Yd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                af(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        it(t, e),
          ct(e),
          a & 512 && (Me || l === null || Ot(l, l.return)),
          l !== null && a & 4 && af(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (it(t, e),
          ct(e),
          a & 512 && (Me || l === null || Ot(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            fa(n, '');
          } catch (M) {
            ye(e, e.return, M);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), af(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (cf = !0);
        break;
      case 6:
        if ((it(t, e), ct(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (M) {
            ye(e, e.return, M);
          }
        }
        break;
      case 3:
        if (
          ((fi = null),
          (n = Tt),
          (Tt = ii(t.containerInfo)),
          it(t, e),
          (Tt = n),
          ct(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Zn(t.containerInfo);
          } catch (M) {
            ye(e, e.return, M);
          }
        cf && ((cf = !1), Ws(e));
        break;
      case 4:
        (a = Tt),
          (Tt = ii(e.stateNode.containerInfo)),
          it(t, e),
          ct(e),
          (Tt = a);
        break;
      case 12:
        it(t, e), ct(e);
        break;
      case 13:
        it(t, e),
          ct(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (mf = At()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ff(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          N = Jt,
          z = Me;
        if (
          ((Jt = N || n),
          (Me = z || v),
          it(t, e),
          (Me = z),
          (Jt = N),
          ct(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || v || Jt || Me || Ql(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (((u = v.stateNode), n))
                    (c = u.style),
                      typeof c.setProperty == 'function'
                        ? c.setProperty('display', 'none', 'important')
                        : (c.display = 'none');
                  else {
                    s = v.stateNode;
                    var U = v.memoizedProps.style,
                      A =
                        U != null && U.hasOwnProperty('display')
                          ? U.display
                          : null;
                    s.style.display =
                      A == null || typeof A == 'boolean' ? '' : ('' + A).trim();
                  }
                } catch (M) {
                  ye(v, v.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = n ? '' : v.memoizedProps;
                } catch (M) {
                  ye(v, v.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), ff(e, l))));
        break;
      case 19:
        it(t, e),
          ct(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ff(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        it(t, e), ct(e);
    }
  }
  function ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Ys(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = nf(e);
            ku(e, u, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (fa(c, ''), (l.flags &= -33));
            var s = nf(e);
            ku(e, s, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              N = nf(e);
            uf(e, N, v);
            break;
          default:
            throw Error(f(161));
        }
      } catch (z) {
        ye(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ws(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ws(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function vl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Zs(e, t.alternate, t), (t = t.sibling);
  }
  function Ql(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ml(4, t, t.return), Ql(t);
          break;
        case 1:
          Ot(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == 'function' && Ls(t, t.return, l),
            Ql(t);
          break;
        case 27:
          Hn(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Ql(t);
          break;
        case 22:
          t.memoizedState === null && Ql(t);
          break;
        case 30:
          Ql(t);
          break;
        default:
          Ql(t);
      }
      e = e.sibling;
    }
  }
  function yl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        c = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yl(n, u, l), An(4, u);
          break;
        case 1:
          if (
            (yl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (N) {
              ye(a, a.return, N);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  No(v[n], s);
            } catch (N) {
              ye(a, a.return, N);
            }
          }
          l && c & 64 && qs(u), Mn(u, u.return);
          break;
        case 27:
          Vs(u);
        case 26:
        case 5:
          yl(n, u, l), l && a === null && c & 4 && Gs(u), Mn(u, u.return);
          break;
        case 12:
          yl(n, u, l);
          break;
        case 13:
          yl(n, u, l), l && c & 4 && ks(n, u);
          break;
        case 22:
          u.memoizedState === null && yl(n, u, l), Mn(u, u.return);
          break;
        case 30:
          break;
        default:
          yl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function rf(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && dn(l));
  }
  function of(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && dn(e));
  }
  function zt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) $s(e, t, l, a), (t = t.sibling);
  }
  function $s(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(e, t, l, a), n & 2048 && An(9, t);
        break;
      case 1:
        zt(e, t, l, a);
        break;
      case 3:
        zt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && dn(e)));
        break;
      case 12:
        if (n & 2048) {
          zt(e, t, l, a), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              c = u.id,
              s = u.onPostCommit;
            typeof s == 'function' &&
              s(
                c,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              );
          } catch (v) {
            ye(t, t.return, v);
          }
        } else zt(e, t, l, a);
        break;
      case 13:
        zt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? zt(e, t, l, a)
              : Dn(e, t)
            : u._visibility & 2
              ? zt(e, t, l, a)
              : ((u._visibility |= 2),
                Ma(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && rf(c, t);
        break;
      case 24:
        zt(e, t, l, a), n & 2048 && of(t.alternate, t);
        break;
      default:
        zt(e, t, l, a);
    }
  }
  function Ma(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        c = t,
        s = l,
        v = a,
        N = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ma(u, c, s, v, n), An(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null
            ? z._visibility & 2
              ? Ma(u, c, s, v, n)
              : Dn(u, c)
            : ((z._visibility |= 2), Ma(u, c, s, v, n)),
            n && N & 2048 && rf(c.alternate, c);
          break;
        case 24:
          Ma(u, c, s, v, n), n && N & 2048 && of(c.alternate, c);
          break;
        default:
          Ma(u, c, s, v, n);
      }
      t = t.sibling;
    }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            Dn(l, a), n & 2048 && rf(a.alternate, a);
            break;
          case 24:
            Dn(l, a), n & 2048 && of(a.alternate, a);
            break;
          default:
            Dn(l, a);
        }
        t = t.sibling;
      }
  }
  var On = 8192;
  function Da(e) {
    if (e.subtreeFlags & On)
      for (e = e.child; e !== null; ) Fs(e), (e = e.sibling);
  }
  function Fs(e) {
    switch (e.tag) {
      case 26:
        Da(e),
          e.flags & On &&
            e.memoizedState !== null &&
            fm(Tt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Da(e);
        break;
      case 3:
      case 4:
        var t = Tt;
        (Tt = ii(e.stateNode.containerInfo)), Da(e), (Tt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = On), (On = 16777216), Da(e), (On = t))
            : Da(e));
        break;
      default:
        Da(e);
    }
  }
  function Ps(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function zn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (we = a), ed(a, e);
        }
      Ps(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Is(e), (e = e.sibling);
  }
  function Is(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        zn(e), e.flags & 2048 && ml(9, e, e.return);
        break;
      case 3:
        zn(e);
        break;
      case 12:
        zn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ju(e))
          : zn(e);
        break;
      default:
        zn(e);
    }
  }
  function Ju(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (we = a), ed(a, e);
        }
      Ps(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ml(8, t, t.return), Ju(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ju(t));
          break;
        default:
          Ju(t);
      }
      e = e.sibling;
    }
  }
  function ed(e, t) {
    for (; we !== null; ) {
      var l = we;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ml(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          dn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (we = a);
      else
        e: for (l = e; we !== null; ) {
          a = we;
          var n = a.sibling,
            u = a.return;
          if ((Qs(a), a === l)) {
            we = null;
            break e;
          }
          if (n !== null) {
            (n.return = u), (we = n);
            break e;
          }
          we = u;
        }
    }
  }
  var N2 = {
      getCacheForType: function (e) {
        var t = ke(ze),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    C2 = typeof WeakMap == 'function' ? WeakMap : Map,
    fe = 0,
    Se = null,
    ee = null,
    le = 0,
    re = 0,
    ft = null,
    gl = !1,
    Oa = !1,
    sf = !1,
    $t = 0,
    Ce = 0,
    pl = 0,
    Kl = 0,
    df = 0,
    St = 0,
    za = 0,
    jn = null,
    tt = null,
    hf = !1,
    mf = 0,
    Wu = 1 / 0,
    $u = null,
    Sl = null,
    Ve = 0,
    bl = null,
    ja = null,
    Ra = 0,
    vf = 0,
    yf = null,
    td = null,
    Rn = 0,
    gf = null;
  function rt() {
    if ((fe & 2) !== 0 && le !== 0) return le & -le;
    if (D.T !== null) {
      var e = Sa;
      return e !== 0 ? e : Nf();
    }
    return yr();
  }
  function ld() {
    St === 0 && (St = (le & 536870912) === 0 || ue ? dr() : 536870912);
    var e = pt.current;
    return e !== null && (e.flags |= 32), St;
  }
  function ot(e, t, l) {
    ((e === Se && (re === 2 || re === 9)) || e.cancelPendingCommit !== null) &&
      (_a(e, 0), xl(e, le, St, !1)),
      Wa(e, l),
      ((fe & 2) === 0 || e !== Se) &&
        (e === Se &&
          ((fe & 2) === 0 && (Kl |= l), Ce === 4 && xl(e, le, St, !1)),
        jt(e));
  }
  function ad(e, t, l) {
    if ((fe & 6) !== 0) throw Error(f(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ja(e, t),
      n = a ? D2(e, t) : bf(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Oa && !a && xl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !A2(l))) {
          (n = bf(e, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var c = 0;
          else
            (c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            e: {
              var s = e;
              n = jn;
              var v = s.current.memoizedState.isDehydrated;
              if ((v && (_a(s, c).flags |= 256), (c = bf(s, c, !1)), c !== 2)) {
                if (sf && !v) {
                  (s.errorRecoveryDisabledLanes |= u), (Kl |= u), (n = 4);
                  break e;
                }
                (u = tt),
                  (tt = n),
                  u !== null && (tt === null ? (tt = u) : tt.push.apply(tt, u));
              }
              n = c;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          _a(e, 0), xl(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xl(a, t, St, !gl);
              break e;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((n = mf + 300 - At()), 10 < n)) {
            if ((xl(a, t, St, !gl), cu(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = Rd(
              nd.bind(null, a, l, tt, $u, hf, t, St, Kl, za, gl, u, 2, -0, 0),
              n
            );
            break e;
          }
          nd(a, l, tt, $u, hf, t, St, Kl, za, gl, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    jt(e);
  }
  function nd(e, t, l, a, n, u, c, s, v, N, z, U, A, M) {
    if (
      ((e.timeoutHandle = -1),
      (U = t.subtreeFlags),
      (U & 8192 || (U & 16785408) === 16785408) &&
        ((Ln = { stylesheets: null, count: 0, unsuspend: cm }),
        Fs(t),
        (U = rm()),
        U !== null))
    ) {
      (e.cancelPendingCommit = U(
        sd.bind(null, e, t, u, l, a, n, c, s, v, z, 1, A, M)
      )),
        xl(e, u, c, !N);
      return;
    }
    sd(e, t, u, l, a, n, c, s, v);
  }
  function A2(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!nt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function xl(e, t, l, a) {
    (t &= ~df),
      (t &= ~Kl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - at(n),
        c = 1 << u;
      (a[u] = -1), (n &= ~c);
    }
    l !== 0 && mr(e, l, t);
  }
  function Fu() {
    return (fe & 6) === 0 ? (_n(0), !1) : !0;
  }
  function pf() {
    if (ee !== null) {
      if (re === 0) var e = ee.return;
      else (e = ee), (Vt = Gl = null), Uc(e), (Ca = null), (Tn = 0), (e = ee);
      for (; e !== null; ) ws(e.alternate, e), (e = e.return);
      ee = null;
    }
  }
  function _a(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), Z2(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      pf(),
      (Se = e),
      (ee = l = Lt(e.current, null)),
      (le = t),
      (re = 0),
      (ft = null),
      (gl = !1),
      (Oa = Ja(e, t)),
      (sf = !1),
      (za = St = df = Kl = pl = Ce = 0),
      (tt = jn = null),
      (hf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - at(a),
          u = 1 << n;
        (t |= e[n]), (a &= ~u);
      }
    return ($t = t), Su(), l;
  }
  function ud(e, t) {
    (F = null),
      (D.H = qu),
      t === mn || t === Du
        ? ((t = Eo()), (re = 3))
        : t === So
          ? ((t = Eo()), (re = 4))
          : (re =
              t === Ts
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (ft = t),
      ee === null && ((Ce = 1), Xu(e, mt(t, e.current)));
  }
  function id() {
    var e = D.H;
    return (D.H = qu), e === null ? qu : e;
  }
  function cd() {
    var e = D.A;
    return (D.A = N2), e;
  }
  function Sf() {
    (Ce = 4),
      gl || ((le & 4194048) !== le && pt.current !== null) || (Oa = !0),
      ((pl & 134217727) === 0 && (Kl & 134217727) === 0) ||
        Se === null ||
        xl(Se, le, St, !1);
  }
  function bf(e, t, l) {
    var a = fe;
    fe |= 2;
    var n = id(),
      u = cd();
    (Se !== e || le !== t) && (($u = null), _a(e, t)), (t = !1);
    var c = Ce;
    e: do
      try {
        if (re !== 0 && ee !== null) {
          var s = ee,
            v = ft;
          switch (re) {
            case 8:
              pf(), (c = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pt.current === null && (t = !0);
              var N = re;
              if (((re = 0), (ft = null), Ua(e, s, v, N), l && Oa)) {
                c = 0;
                break e;
              }
              break;
            default:
              (N = re), (re = 0), (ft = null), Ua(e, s, v, N);
          }
        }
        M2(), (c = Ce);
        break;
      } catch (z) {
        ud(e, z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Vt = Gl = null),
      (fe = a),
      (D.H = n),
      (D.A = u),
      ee === null && ((Se = null), (le = 0), Su()),
      c
    );
  }
  function M2() {
    for (; ee !== null; ) fd(ee);
  }
  function D2(e, t) {
    var l = fe;
    fe |= 2;
    var a = id(),
      n = cd();
    Se !== e || le !== t
      ? (($u = null), (Wu = At() + 500), _a(e, t))
      : (Oa = Ja(e, t));
    e: do
      try {
        if (re !== 0 && ee !== null) {
          t = ee;
          var u = ft;
          t: switch (re) {
            case 1:
              (re = 0), (ft = null), Ua(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (bo(u)) {
                (re = 0), (ft = null), rd(t);
                break;
              }
              (t = function () {
                (re !== 2 && re !== 9) || Se !== e || (re = 7), jt(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              re = 7;
              break e;
            case 4:
              re = 5;
              break e;
            case 7:
              bo(u)
                ? ((re = 0), (ft = null), rd(t))
                : ((re = 0), (ft = null), Ua(e, t, u, 7));
              break;
            case 5:
              var c = null;
              switch (ee.tag) {
                case 26:
                  c = ee.memoizedState;
                case 5:
                case 27:
                  var s = ee;
                  if (!c || Zd(c)) {
                    (re = 0), (ft = null);
                    var v = s.sibling;
                    if (v !== null) ee = v;
                    else {
                      var N = s.return;
                      N !== null ? ((ee = N), Pu(N)) : (ee = null);
                    }
                    break t;
                  }
              }
              (re = 0), (ft = null), Ua(e, t, u, 5);
              break;
            case 6:
              (re = 0), (ft = null), Ua(e, t, u, 6);
              break;
            case 8:
              pf(), (Ce = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        O2();
        break;
      } catch (z) {
        ud(e, z);
      }
    while (!0);
    return (
      (Vt = Gl = null),
      (D.H = a),
      (D.A = n),
      (fe = l),
      ee !== null ? 0 : ((Se = null), (le = 0), Su(), Ce)
    );
  }
  function O2() {
    for (; ee !== null && !F0(); ) fd(ee);
  }
  function fd(e) {
    var t = Bs(e.alternate, e, $t);
    (e.memoizedProps = e.pendingProps), t === null ? Pu(e) : (ee = t);
  }
  function rd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Os(l, t, t.pendingProps, t.type, void 0, le);
        break;
      case 11:
        t = Os(l, t, t.pendingProps, t.type.render, t.ref, le);
        break;
      case 5:
        Uc(t);
      default:
        ws(l, t), (t = ee = ro(t, $t)), (t = Bs(l, t, $t));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Pu(e) : (ee = t);
  }
  function Ua(e, t, l, a) {
    (Vt = Gl = null), Uc(t), (Ca = null), (Tn = 0);
    var n = t.return;
    try {
      if (p2(e, n, t, l, le)) {
        (Ce = 1), Xu(e, mt(l, e.current)), (ee = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ee = n), u);
      (Ce = 1), Xu(e, mt(l, e.current)), (ee = null);
      return;
    }
    t.flags & 32768
      ? (ue || a === 1
          ? (e = !0)
          : Oa || (le & 536870912) !== 0
            ? (e = !1)
            : ((gl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = pt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        od(t, e))
      : Pu(t);
  }
  function Pu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        od(t, gl);
        return;
      }
      e = t.return;
      var l = b2(t.alternate, t, $t);
      if (l !== null) {
        ee = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ee = t;
        return;
      }
      ee = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function od(e, t) {
    do {
      var l = x2(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (ee = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ee = e;
        return;
      }
      ee = e = l;
    } while (e !== null);
    (Ce = 6), (ee = null);
  }
  function sd(e, t, l, a, n, u, c, s, v) {
    e.cancelPendingCommit = null;
    do Iu();
    while (Ve !== 0);
    if ((fe & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= rc),
        ch(e, l, u, c, s, v),
        e === Se && ((ee = Se = null), (le = 0)),
        (ja = t),
        (bl = e),
        (Ra = l),
        (vf = u),
        (yf = n),
        (td = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            _2(nu, function () {
              return yd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = D.T), (D.T = null), (n = q.p), (q.p = 2), (c = fe), (fe |= 4);
        try {
          E2(e, t, l);
        } finally {
          (fe = c), (q.p = n), (D.T = a);
        }
      }
      (Ve = 1), dd(), hd(), md();
    }
  }
  function dd() {
    if (Ve === 1) {
      Ve = 0;
      var e = bl,
        t = ja,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = q.p;
        q.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Js(t, e);
          var u = Rf,
            c = Ir(e.containerInfo),
            s = u.focusedElem,
            v = u.selectionRange;
          if (
            c !== s &&
            s &&
            s.ownerDocument &&
            Pr(s.ownerDocument.documentElement, s)
          ) {
            if (v !== null && nc(s)) {
              var N = v.start,
                z = v.end;
              if ((z === void 0 && (z = N), 'selectionStart' in s))
                (s.selectionStart = N),
                  (s.selectionEnd = Math.min(z, s.value.length));
              else {
                var U = s.ownerDocument || document,
                  A = (U && U.defaultView) || window;
                if (A.getSelection) {
                  var M = A.getSelection(),
                    W = s.textContent.length,
                    k = Math.min(v.start, W),
                    he = v.end === void 0 ? k : Math.min(v.end, W);
                  !M.extend && k > he && ((c = he), (he = k), (k = c));
                  var E = Fr(s, k),
                    p = Fr(s, he);
                  if (
                    E &&
                    p &&
                    (M.rangeCount !== 1 ||
                      M.anchorNode !== E.node ||
                      M.anchorOffset !== E.offset ||
                      M.focusNode !== p.node ||
                      M.focusOffset !== p.offset)
                  ) {
                    var T = U.createRange();
                    T.setStart(E.node, E.offset),
                      M.removeAllRanges(),
                      k > he
                        ? (M.addRange(T), M.extend(p.node, p.offset))
                        : (T.setEnd(p.node, p.offset), M.addRange(T));
                  }
                }
              }
            }
            for (U = [], M = s; (M = M.parentNode); )
              M.nodeType === 1 &&
                U.push({ element: M, left: M.scrollLeft, top: M.scrollTop });
            for (
              typeof s.focus == 'function' && s.focus(), s = 0;
              s < U.length;
              s++
            ) {
              var R = U[s];
              (R.element.scrollLeft = R.left), (R.element.scrollTop = R.top);
            }
          }
          (si = !!jf), (Rf = jf = null);
        } finally {
          (fe = n), (q.p = a), (D.T = l);
        }
      }
      (e.current = t), (Ve = 2);
    }
  }
  function hd() {
    if (Ve === 2) {
      Ve = 0;
      var e = bl,
        t = ja,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = D.T), (D.T = null);
        var a = q.p;
        q.p = 2;
        var n = fe;
        fe |= 4;
        try {
          Zs(e, t.alternate, t);
        } finally {
          (fe = n), (q.p = a), (D.T = l);
        }
      }
      Ve = 3;
    }
  }
  function md() {
    if (Ve === 4 || Ve === 3) {
      (Ve = 0), P0();
      var e = bl,
        t = ja,
        l = Ra,
        a = td;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ve = 5)
        : ((Ve = 0), (ja = bl = null), vd(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Sl = null),
        wi(l),
        (t = t.stateNode),
        lt && typeof lt.onCommitFiberRoot == 'function')
      )
        try {
          lt.onCommitFiberRoot(ka, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = D.T), (n = q.p), (q.p = 2), (D.T = null);
        try {
          for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
            var s = a[c];
            u(s.value, { componentStack: s.stack });
          }
        } finally {
          (D.T = t), (q.p = n);
        }
      }
      (Ra & 3) !== 0 && Iu(),
        jt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === gf
            ? Rn++
            : ((Rn = 0), (gf = e))
          : (Rn = 0),
        _n(0);
    }
  }
  function vd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), dn(t)));
  }
  function Iu(e) {
    return dd(), hd(), md(), yd();
  }
  function yd() {
    if (Ve !== 5) return !1;
    var e = bl,
      t = vf;
    vf = 0;
    var l = wi(Ra),
      a = D.T,
      n = q.p;
    try {
      (q.p = 32 > l ? 32 : l), (D.T = null), (l = yf), (yf = null);
      var u = bl,
        c = Ra;
      if (((Ve = 0), (ja = bl = null), (Ra = 0), (fe & 6) !== 0))
        throw Error(f(331));
      var s = fe;
      if (
        ((fe |= 4),
        Is(u.current),
        $s(u, u.current, c, l),
        (fe = s),
        _n(0, !1),
        lt && typeof lt.onPostCommitFiberRoot == 'function')
      )
        try {
          lt.onPostCommitFiberRoot(ka, u);
        } catch {}
      return !0;
    } finally {
      (q.p = n), (D.T = a), vd(e, t);
    }
  }
  function gd(e, t, l) {
    (t = mt(l, t)),
      (t = Jc(e.stateNode, t, 2)),
      (e = ol(e, t, 2)),
      e !== null && (Wa(e, 2), jt(e));
  }
  function ye(e, t, l) {
    if (e.tag === 3) gd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (Sl === null || !Sl.has(a)))
          ) {
            (e = mt(l, e)),
              (l = xs(2)),
              (a = ol(t, l, 2)),
              a !== null && (Es(l, a, t, e), Wa(a, 2), jt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function xf(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new C2();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((sf = !0), n.add(l), (e = z2.bind(null, e, t, l)), t.then(e, e));
  }
  function z2(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Se === e &&
        (le & l) === l &&
        (Ce === 4 || (Ce === 3 && (le & 62914560) === le && 300 > At() - mf)
          ? (fe & 2) === 0 && _a(e, 0)
          : (df |= l),
        za === le && (za = 0)),
      jt(e);
  }
  function pd(e, t) {
    t === 0 && (t = hr()), (e = va(e, t)), e !== null && (Wa(e, t), jt(e));
  }
  function j2(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), pd(e, l);
  }
  function R2(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), pd(e, l);
  }
  function _2(e, t) {
    return _i(e, t);
  }
  var ei = null,
    Ba = null,
    Ef = !1,
    ti = !1,
    Tf = !1,
    kl = 0;
  function jt(e) {
    e !== Ba &&
      e.next === null &&
      (Ba === null ? (ei = Ba = e) : (Ba = Ba.next = e)),
      (ti = !0),
      Ef || ((Ef = !0), B2());
  }
  function _n(e, t) {
    if (!Tf && ti) {
      Tf = !0;
      do
        for (var l = !1, a = ei; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var c = a.suspendedLanes,
                s = a.pingedLanes;
              (u = (1 << (31 - at(42 | e) + 1)) - 1),
                (u &= n & ~(c & ~s)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), Ed(a, u));
          } else
            (u = le),
              (u = cu(
                a,
                a === Se ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ja(a, u) || ((l = !0), Ed(a, u));
          a = a.next;
        }
      while (l);
      Tf = !1;
    }
  }
  function U2() {
    Sd();
  }
  function Sd() {
    ti = Ef = !1;
    var e = 0;
    kl !== 0 && (X2() && (e = kl), (kl = 0));
    for (var t = At(), l = null, a = ei; a !== null; ) {
      var n = a.next,
        u = bd(a, t);
      u === 0
        ? ((a.next = null),
          l === null ? (ei = n) : (l.next = n),
          n === null && (Ba = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (ti = !0)),
        (a = n);
    }
    _n(e);
  }
  function bd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var c = 31 - at(u),
        s = 1 << c,
        v = n[c];
      v === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[c] = ih(s, t))
        : v <= t && (e.expiredLanes |= s),
        (u &= ~s);
    }
    if (
      ((t = Se),
      (l = le),
      (l = cu(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (re === 2 || re === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ui(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ja(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Ui(a), wi(l))) {
        case 2:
        case 8:
          l = or;
          break;
        case 32:
          l = nu;
          break;
        case 268435456:
          l = sr;
          break;
        default:
          l = nu;
      }
      return (
        (a = xd.bind(null, e)),
        (l = _i(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Ui(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function xd(e, t) {
    if (Ve !== 0 && Ve !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Iu() && e.callbackNode !== l) return null;
    var a = le;
    return (
      (a = cu(
        e,
        e === Se ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (ad(e, a, t),
          bd(e, At()),
          e.callbackNode != null && e.callbackNode === l
            ? xd.bind(null, e)
            : null)
    );
  }
  function Ed(e, t) {
    if (Iu()) return null;
    ad(e, t, !0);
  }
  function B2() {
    Q2(function () {
      (fe & 6) !== 0 ? _i(rr, U2) : Sd();
    });
  }
  function Nf() {
    return kl === 0 && (kl = dr()), kl;
  }
  function Td(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : du('' + e);
  }
  function Nd(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function H2(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var u = Td((n[Fe] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[Fe] || null)
          ? Td(t.formAction)
          : c.getAttribute('formAction')),
        t !== null && ((u = t), (c = null)));
      var s = new yu('action', 'action', null, a, n);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (kl !== 0) {
                  var v = c ? Nd(n, c) : new FormData(n);
                  Xc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    null,
                    v
                  );
                }
              } else
                typeof u == 'function' &&
                  (s.preventDefault(),
                  (v = c ? Nd(n, c) : new FormData(n)),
                  Xc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    u,
                    v
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Cf = 0; Cf < fc.length; Cf++) {
    var Af = fc[Cf],
      w2 = Af.toLowerCase(),
      q2 = Af[0].toUpperCase() + Af.slice(1);
    Et(w2, 'on' + q2);
  }
  Et(lo, 'onAnimationEnd'),
    Et(ao, 'onAnimationIteration'),
    Et(no, 'onAnimationStart'),
    Et('dblclick', 'onDoubleClick'),
    Et('focusin', 'onFocus'),
    Et('focusout', 'onBlur'),
    Et(t2, 'onTransitionRun'),
    Et(l2, 'onTransitionStart'),
    Et(a2, 'onTransitionCancel'),
    Et(uo, 'onTransitionEnd'),
    ua('onMouseEnter', ['mouseout', 'mouseover']),
    ua('onMouseLeave', ['mouseout', 'mouseover']),
    ua('onPointerEnter', ['pointerout', 'pointerover']),
    ua('onPointerLeave', ['pointerout', 'pointerover']),
    jl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    jl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    jl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    jl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    jl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    jl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    );
  var Un =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    L2 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Un)
    );
  function Cd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c],
              v = s.instance,
              N = s.currentTarget;
            if (((s = s.listener), v !== u && n.isPropagationStopped()))
              break e;
            (u = s), (n.currentTarget = N);
            try {
              u(n);
            } catch (z) {
              Vu(z);
            }
            (n.currentTarget = null), (u = v);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((s = a[c]),
              (v = s.instance),
              (N = s.currentTarget),
              (s = s.listener),
              v !== u && n.isPropagationStopped())
            )
              break e;
            (u = s), (n.currentTarget = N);
            try {
              u(n);
            } catch (z) {
              Vu(z);
            }
            (n.currentTarget = null), (u = v);
          }
      }
    }
  }
  function te(e, t) {
    var l = t[qi];
    l === void 0 && (l = t[qi] = new Set());
    var a = e + '__bubble';
    l.has(a) || (Ad(t, e, 2, !1), l.add(a));
  }
  function Mf(e, t, l) {
    var a = 0;
    t && (a |= 4), Ad(l, e, a, t);
  }
  var li = '_reactListening' + Math.random().toString(36).slice(2);
  function Df(e) {
    if (!e[li]) {
      (e[li] = !0),
        pr.forEach(function (l) {
          l !== 'selectionchange' && (L2.has(l) || Mf(l, !1, e), Mf(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[li] || ((t[li] = !0), Mf('selectionchange', !1, t));
    }
  }
  function Ad(e, t, l, a) {
    switch ($d(t)) {
      case 2:
        var n = dm;
        break;
      case 8:
        n = hm;
        break;
      default:
        n = Vf;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Wi ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1);
  }
  function Of(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (((c = la(s)), c === null)) return;
            if (((v = c.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = u = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Rr(function () {
      var N = u,
        z = ki(l),
        U = [];
      e: {
        var A = io.get(e);
        if (A !== void 0) {
          var M = yu,
            W = e;
          switch (e) {
            case 'keypress':
              if (mu(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              M = _h;
              break;
            case 'focusin':
              (W = 'focus'), (M = Ii);
              break;
            case 'focusout':
              (W = 'blur'), (M = Ii);
              break;
            case 'beforeblur':
            case 'afterblur':
              M = Ii;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              M = Br;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              M = xh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              M = Hh;
              break;
            case lo:
            case ao:
            case no:
              M = Nh;
              break;
            case uo:
              M = qh;
              break;
            case 'scroll':
            case 'scrollend':
              M = Sh;
              break;
            case 'wheel':
              M = Gh;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              M = Ah;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              M = wr;
              break;
            case 'toggle':
            case 'beforetoggle':
              M = Vh;
          }
          var k = (t & 4) !== 0,
            he = !k && (e === 'scroll' || e === 'scrollend'),
            E = k ? (A !== null ? A + 'Capture' : null) : A;
          k = [];
          for (var p = N, T; p !== null; ) {
            var R = p;
            if (
              ((T = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                T === null ||
                E === null ||
                ((R = Pa(p, E)), R != null && k.push(Bn(p, R, T))),
              he)
            )
              break;
            p = p.return;
          }
          0 < k.length &&
            ((A = new M(A, W, null, l, z)), U.push({ event: A, listeners: k }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === 'mouseover' || e === 'pointerover'),
            (M = e === 'mouseout' || e === 'pointerout'),
            A &&
              l !== Ki &&
              (W = l.relatedTarget || l.fromElement) &&
              (la(W) || W[ta]))
          )
            break e;
          if (
            (M || A) &&
            ((A =
              z.window === z
                ? z
                : (A = z.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            M
              ? ((W = l.relatedTarget || l.toElement),
                (M = N),
                (W = W ? la(W) : null),
                W !== null &&
                  ((he = h(W)),
                  (k = W.tag),
                  W !== he || (k !== 5 && k !== 27 && k !== 6)) &&
                  (W = null))
              : ((M = null), (W = N)),
            M !== W)
          ) {
            if (
              ((k = Br),
              (R = 'onMouseLeave'),
              (E = 'onMouseEnter'),
              (p = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((k = wr),
                (R = 'onPointerLeave'),
                (E = 'onPointerEnter'),
                (p = 'pointer')),
              (he = M == null ? A : Fa(M)),
              (T = W == null ? A : Fa(W)),
              (A = new k(R, p + 'leave', M, l, z)),
              (A.target = he),
              (A.relatedTarget = T),
              (R = null),
              la(z) === N &&
                ((k = new k(E, p + 'enter', W, l, z)),
                (k.target = T),
                (k.relatedTarget = he),
                (R = k)),
              (he = R),
              M && W)
            )
              t: {
                for (k = M, E = W, p = 0, T = k; T; T = Ha(T)) p++;
                for (T = 0, R = E; R; R = Ha(R)) T++;
                for (; 0 < p - T; ) (k = Ha(k)), p--;
                for (; 0 < T - p; ) (E = Ha(E)), T--;
                for (; p--; ) {
                  if (k === E || (E !== null && k === E.alternate)) break t;
                  (k = Ha(k)), (E = Ha(E));
                }
                k = null;
              }
            else k = null;
            M !== null && Md(U, A, M, k, !1),
              W !== null && he !== null && Md(U, he, W, k, !0);
          }
        }
        e: {
          if (
            ((A = N ? Fa(N) : window),
            (M = A.nodeName && A.nodeName.toLowerCase()),
            M === 'select' || (M === 'input' && A.type === 'file'))
          )
            var V = Qr;
          else if (Xr(A))
            if (Kr) V = Ph;
            else {
              V = $h;
              var I = Wh;
            }
          else
            (M = A.nodeName),
              !M ||
              M.toLowerCase() !== 'input' ||
              (A.type !== 'checkbox' && A.type !== 'radio')
                ? N && Qi(N.elementType) && (V = Qr)
                : (V = Fh);
          if (V && (V = V(e, N))) {
            Zr(U, V, l, z);
            break e;
          }
          I && I(e, A, N),
            e === 'focusout' &&
              N &&
              A.type === 'number' &&
              N.memoizedProps.value != null &&
              Zi(A, 'number', A.value);
        }
        switch (((I = N ? Fa(N) : window), e)) {
          case 'focusin':
            (Xr(I) || I.contentEditable === 'true') &&
              ((da = I), (uc = N), (cn = null));
            break;
          case 'focusout':
            cn = uc = da = null;
            break;
          case 'mousedown':
            ic = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (ic = !1), eo(U, l, z);
            break;
          case 'selectionchange':
            if (e2) break;
          case 'keydown':
          case 'keyup':
            eo(U, l, z);
        }
        var K;
        if (tc)
          e: {
            switch (e) {
              case 'compositionstart':
                var J = 'onCompositionStart';
                break e;
              case 'compositionend':
                J = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                J = 'onCompositionUpdate';
                break e;
            }
            J = void 0;
          }
        else
          sa
            ? Yr(e, l) && (J = 'onCompositionEnd')
            : e === 'keydown' &&
              l.keyCode === 229 &&
              (J = 'onCompositionStart');
        J &&
          (qr &&
            l.locale !== 'ko' &&
            (sa || J !== 'onCompositionStart'
              ? J === 'onCompositionEnd' && sa && (K = _r())
              : ((il = z),
                ($i = 'value' in il ? il.value : il.textContent),
                (sa = !0))),
          (I = ai(N, J)),
          0 < I.length &&
            ((J = new Hr(J, e, null, l, z)),
            U.push({ event: J, listeners: I }),
            K ? (J.data = K) : ((K = Vr(l)), K !== null && (J.data = K)))),
          (K = Zh ? Qh(e, l) : Kh(e, l)) &&
            ((J = ai(N, 'onBeforeInput')),
            0 < J.length &&
              ((I = new Hr('onBeforeInput', 'beforeinput', null, l, z)),
              U.push({ event: I, listeners: J }),
              (I.data = K))),
          H2(U, e, N, l, z);
      }
      Cd(U, t);
    });
  }
  function Bn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ai(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Pa(e, l)),
          n != null && a.unshift(Bn(e, n, u)),
          (n = Pa(e, t)),
          n != null && a.push(Bn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Ha(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Md(e, t, l, a, n) {
    for (var u = t._reactName, c = []; l !== null && l !== a; ) {
      var s = l,
        v = s.alternate,
        N = s.stateNode;
      if (((s = s.tag), v !== null && v === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        N === null ||
        ((v = N),
        n
          ? ((N = Pa(l, u)), N != null && c.unshift(Bn(l, N, v)))
          : n || ((N = Pa(l, u)), N != null && c.push(Bn(l, N, v)))),
        (l = l.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var G2 = /\r\n?/g,
    Y2 = /\u0000|\uFFFD/g;
  function Dd(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        G2,
        `
`
      )
      .replace(Y2, '');
  }
  function Od(e, t) {
    return (t = Dd(t)), Dd(e) === t;
  }
  function ni() {}
  function de(e, t, l, a, n, u) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || fa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            t !== 'body' &&
            fa(e, '' + a);
        break;
      case 'className':
        ru(e, 'class', a);
        break;
      case 'tabIndex':
        ru(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ru(e, l, a);
        break;
      case 'style':
        zr(e, a, u);
        break;
      case 'data':
        if (t !== 'object') {
          ru(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = du('' + a)), e.setAttribute(l, a);
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && de(e, t, 'name', n.name, n, null),
                de(e, t, 'formEncType', n.formEncType, n, null),
                de(e, t, 'formMethod', n.formMethod, n, null),
                de(e, t, 'formTarget', n.formTarget, n, null))
              : (de(e, t, 'encType', n.encType, n, null),
                de(e, t, 'method', n.method, n, null),
                de(e, t, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        (a = du('' + a)), e.setAttribute(l, a);
        break;
      case 'onClick':
        a != null && (e.onclick = ni);
        break;
      case 'onScroll':
        a != null && te('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && te('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        (l = du('' + a)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 &&
              a != null &&
              typeof a != 'function' &&
              typeof a != 'symbol'
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case 'popover':
        te('beforetoggle', e), te('toggle', e), fu(e, 'popover', a);
        break;
      case 'xlinkActuate':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        wt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        wt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        fu(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = gh.get(l) || l), fu(e, l, a));
    }
  }
  function zf(e, t, l, a, n, u) {
    switch (l) {
      case 'style':
        zr(e, a, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? fa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && fa(e, '' + a);
        break;
      case 'onScroll':
        a != null && te('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && te('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = ni);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Sr.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[Fe] || null),
              (u = u != null ? u[l] : null),
              typeof u == 'function' && e.removeEventListener(t, u, n),
              typeof a == 'function')
            ) {
              typeof u != 'function' &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, '')
                : fu(e, l, a);
          }
    }
  }
  function Xe(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        te('error', e), te('load', e);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var c = l[u];
            if (c != null)
              switch (u) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, t));
                default:
                  de(e, t, u, c, l, null);
              }
          }
        n && de(e, t, 'srcSet', l.srcSet, l, null),
          a && de(e, t, 'src', l.src, l, null);
        return;
      case 'input':
        te('invalid', e);
        var s = (u = c = n = null),
          v = null,
          N = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case 'name':
                  n = z;
                  break;
                case 'type':
                  c = z;
                  break;
                case 'checked':
                  v = z;
                  break;
                case 'defaultChecked':
                  N = z;
                  break;
                case 'value':
                  u = z;
                  break;
                case 'defaultValue':
                  s = z;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (z != null) throw Error(f(137, t));
                  break;
                default:
                  de(e, t, a, z, l, null);
              }
          }
        Ar(e, u, s, v, N, c, n, !1), ou(e);
        return;
      case 'select':
        te('invalid', e), (a = c = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case 'value':
                u = s;
                break;
              case 'defaultValue':
                c = s;
                break;
              case 'multiple':
                a = s;
              default:
                de(e, t, n, s, l, null);
            }
        (t = u),
          (l = c),
          (e.multiple = !!a),
          t != null ? ca(e, !!a, t, !1) : l != null && ca(e, !!a, l, !0);
        return;
      case 'textarea':
        te('invalid', e), (u = n = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((s = l[c]), s != null))
            switch (c) {
              case 'value':
                a = s;
                break;
              case 'defaultValue':
                n = s;
                break;
              case 'children':
                u = s;
                break;
              case 'dangerouslySetInnerHTML':
                if (s != null) throw Error(f(91));
                break;
              default:
                de(e, t, c, s, l, null);
            }
        Dr(e, a, n, u), ou(e);
        return;
      case 'option':
        for (v in l)
          if (l.hasOwnProperty(v) && ((a = l[v]), a != null))
            switch (v) {
              case 'selected':
                e.selected =
                  a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                de(e, t, v, a, l, null);
            }
        return;
      case 'dialog':
        te('beforetoggle', e), te('toggle', e), te('cancel', e), te('close', e);
        break;
      case 'iframe':
      case 'object':
        te('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Un.length; a++) te(Un[a], e);
        break;
      case 'image':
        te('error', e), te('load', e);
        break;
      case 'details':
        te('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        te('error', e), te('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (N in l)
          if (l.hasOwnProperty(N) && ((a = l[N]), a != null))
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, t));
              default:
                de(e, t, N, a, l, null);
            }
        return;
      default:
        if (Qi(t)) {
          for (z in l)
            l.hasOwnProperty(z) &&
              ((a = l[z]), a !== void 0 && zf(e, t, z, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && de(e, t, s, a, l, null));
  }
  function V2(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          u = null,
          c = null,
          s = null,
          v = null,
          N = null,
          z = null;
        for (M in l) {
          var U = l[M];
          if (l.hasOwnProperty(M) && U != null)
            switch (M) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                v = U;
              default:
                a.hasOwnProperty(M) || de(e, t, M, null, a, U);
            }
        }
        for (var A in a) {
          var M = a[A];
          if (((U = l[A]), a.hasOwnProperty(A) && (M != null || U != null)))
            switch (A) {
              case 'type':
                u = M;
                break;
              case 'name':
                n = M;
                break;
              case 'checked':
                N = M;
                break;
              case 'defaultChecked':
                z = M;
                break;
              case 'value':
                c = M;
                break;
              case 'defaultValue':
                s = M;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (M != null) throw Error(f(137, t));
                break;
              default:
                M !== U && de(e, t, A, M, a, U);
            }
        }
        Xi(e, c, s, v, N, z, u, n);
        return;
      case 'select':
        M = c = s = A = null;
        for (u in l)
          if (((v = l[u]), l.hasOwnProperty(u) && v != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                M = v;
              default:
                a.hasOwnProperty(u) || de(e, t, u, null, a, v);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (v = l[n]),
            a.hasOwnProperty(n) && (u != null || v != null))
          )
            switch (n) {
              case 'value':
                A = u;
                break;
              case 'defaultValue':
                s = u;
                break;
              case 'multiple':
                c = u;
              default:
                u !== v && de(e, t, n, u, a, v);
            }
        (t = s),
          (l = c),
          (a = M),
          A != null
            ? ca(e, !!l, A, !1)
            : !!a != !!l &&
              (t != null ? ca(e, !!l, t, !0) : ca(e, !!l, l ? [] : '', !1));
        return;
      case 'textarea':
        M = A = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                de(e, t, s, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (u = l[c]),
            a.hasOwnProperty(c) && (n != null || u != null))
          )
            switch (c) {
              case 'value':
                A = n;
                break;
              case 'defaultValue':
                M = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && de(e, t, c, n, a, u);
            }
        Mr(e, A, M);
        return;
      case 'option':
        for (var W in l)
          if (
            ((A = l[W]),
            l.hasOwnProperty(W) && A != null && !a.hasOwnProperty(W))
          )
            switch (W) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                de(e, t, W, null, a, A);
            }
        for (v in a)
          if (
            ((A = a[v]),
            (M = l[v]),
            a.hasOwnProperty(v) && A !== M && (A != null || M != null))
          )
            switch (v) {
              case 'selected':
                e.selected =
                  A && typeof A != 'function' && typeof A != 'symbol';
                break;
              default:
                de(e, t, v, A, a, M);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var k in l)
          (A = l[k]),
            l.hasOwnProperty(k) &&
              A != null &&
              !a.hasOwnProperty(k) &&
              de(e, t, k, null, a, A);
        for (N in a)
          if (
            ((A = a[N]),
            (M = l[N]),
            a.hasOwnProperty(N) && A !== M && (A != null || M != null))
          )
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(f(137, t));
                break;
              default:
                de(e, t, N, A, a, M);
            }
        return;
      default:
        if (Qi(t)) {
          for (var he in l)
            (A = l[he]),
              l.hasOwnProperty(he) &&
                A !== void 0 &&
                !a.hasOwnProperty(he) &&
                zf(e, t, he, void 0, a, A);
          for (z in a)
            (A = a[z]),
              (M = l[z]),
              !a.hasOwnProperty(z) ||
                A === M ||
                (A === void 0 && M === void 0) ||
                zf(e, t, z, A, a, M);
          return;
        }
    }
    for (var E in l)
      (A = l[E]),
        l.hasOwnProperty(E) &&
          A != null &&
          !a.hasOwnProperty(E) &&
          de(e, t, E, null, a, A);
    for (U in a)
      (A = a[U]),
        (M = l[U]),
        !a.hasOwnProperty(U) ||
          A === M ||
          (A == null && M == null) ||
          de(e, t, U, A, a, M);
  }
  var jf = null,
    Rf = null;
  function ui(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function jd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function _f(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uf = null;
  function X2() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Uf
        ? !1
        : ((Uf = e), !0)
      : ((Uf = null), !1);
  }
  var Rd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Z2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    _d = typeof Promise == 'function' ? Promise : void 0,
    Q2 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof _d < 'u'
          ? function (e) {
              return _d.resolve(null).then(e).catch(K2);
            }
          : Rd;
  function K2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function El(e) {
    return e === 'head';
  }
  function Ud(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (0 < a && 8 > a) {
            l = a;
            var c = e.ownerDocument;
            if ((l & 1 && Hn(c.documentElement), l & 2 && Hn(c.body), l & 4))
              for (l = c.head, Hn(l), c = l.firstChild; c; ) {
                var s = c.nextSibling,
                  v = c.nodeName;
                c[$a] ||
                  v === 'SCRIPT' ||
                  v === 'STYLE' ||
                  (v === 'LINK' && c.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(c),
                  (c = s);
              }
          }
          if (n === 0) {
            e.removeChild(u), Zn(t);
            return;
          }
          n--;
        } else
          l === '$' || l === '$?' || l === '$!'
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = u;
    } while (l);
    Zn(t);
  }
  function Bf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Bf(l), Li(l);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function k2(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[$a])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var u = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = Nt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function J2(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !l) ||
        ((e = Nt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hf(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    );
  }
  function W2(e, t) {
    var l = e.ownerDocument;
    if (e.data !== '$?' || l.readyState === 'complete') t();
    else {
      var a = function () {
        t(), l.removeEventListener('DOMContentLoaded', a);
      };
      l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a);
    }
  }
  function Nt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var wf = null;
  function Bd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (t === 0) return e;
          t--;
        } else l === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Hd(e, t, l) {
    switch (((t = ui(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function Hn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Li(e);
  }
  var bt = new Map(),
    wd = new Set();
  function ii(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Ft = q.d;
  q.d = { f: $2, r: F2, D: P2, C: I2, L: em, m: tm, X: am, S: lm, M: nm };
  function $2() {
    var e = Ft.f(),
      t = Fu();
    return e || t;
  }
  function F2(e) {
    var t = aa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? as(t) : Ft.r(e);
  }
  var wa = typeof document > 'u' ? null : document;
  function qd(e, t, l) {
    var a = wa;
    if (a && typeof t == 'string' && t) {
      var n = ht(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        wd.has(n) ||
          (wd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')),
            Xe(t, 'link', e),
            Be(t),
            a.head.appendChild(t)));
    }
  }
  function P2(e) {
    Ft.D(e), qd('dns-prefetch', e, null);
  }
  function I2(e, t) {
    Ft.C(e, t), qd('preconnect', e, t);
  }
  function em(e, t, l) {
    Ft.L(e, t, l);
    var a = wa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + ht(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ht(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (n += '[imagesizes="' + ht(l.imageSizes) + '"]'))
        : (n += '[href="' + ht(e) + '"]');
      var u = n;
      switch (t) {
        case 'style':
          u = qa(e);
          break;
        case 'script':
          u = La(e);
      }
      bt.has(u) ||
        ((e = C(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        bt.set(u, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(wn(u))) ||
          (t === 'script' && a.querySelector(qn(u))) ||
          ((t = a.createElement('link')),
          Xe(t, 'link', e),
          Be(t),
          a.head.appendChild(t)));
    }
  }
  function tm(e, t) {
    Ft.m(e, t);
    var l = wa;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + ht(a) + '"][href="' + ht(e) + '"]',
        u = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          u = La(e);
      }
      if (
        !bt.has(u) &&
        ((e = C({ rel: 'modulepreload', href: e }, t)),
        bt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(qn(u))) return;
        }
        (a = l.createElement('link')),
          Xe(a, 'link', e),
          Be(a),
          l.head.appendChild(a);
      }
    }
  }
  function lm(e, t, l) {
    Ft.S(e, t, l);
    var a = wa;
    if (a && e) {
      var n = na(a).hoistableStyles,
        u = qa(e);
      t = t || 'default';
      var c = n.get(u);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = a.querySelector(wn(u)))) s.loading = 5;
        else {
          (e = C({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = bt.get(u)) && qf(e, l);
          var v = (c = a.createElement('link'));
          Be(v),
            Xe(v, 'link', e),
            (v._p = new Promise(function (N, z) {
              (v.onload = N), (v.onerror = z);
            })),
            v.addEventListener('load', function () {
              s.loading |= 1;
            }),
            v.addEventListener('error', function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            ci(c, t, a);
        }
        (c = { type: 'stylesheet', instance: c, count: 1, state: s }),
          n.set(u, c);
      }
    }
  }
  function am(e, t) {
    Ft.X(e, t);
    var l = wa;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = La(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = C({ src: e, async: !0 }, t)),
          (t = bt.get(n)) && Lf(e, t),
          (u = l.createElement('script')),
          Be(u),
          Xe(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function nm(e, t) {
    Ft.M(e, t);
    var l = wa;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = La(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(qn(n))),
        u ||
          ((e = C({ src: e, async: !0, type: 'module' }, t)),
          (t = bt.get(n)) && Lf(e, t),
          (u = l.createElement('script')),
          Be(u),
          Xe(u, 'link', e),
          l.head.appendChild(u)),
        (u = { type: 'script', instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Ld(e, t, l, a) {
    var n = (n = al.current) ? ii(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = qa(l.href)),
            (l = na(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = qa(l.href);
          var u = na(n).hoistableStyles,
            c = u.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, c),
              (u = n.querySelector(wn(e))) &&
                !u._p &&
                ((c.instance = u), (c.state.loading = 5)),
              bt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                bt.set(e, l),
                u || um(n, e, l, c.state))),
            t && a === null)
          )
            throw Error(f(528, ''));
          return c;
        }
        if (t && a !== null) throw Error(f(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = La(l)),
              (l = na(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function qa(e) {
    return 'href="' + ht(e) + '"';
  }
  function wn(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Gd(e) {
    return C({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function um(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        Xe(t, 'link', l),
        Be(t),
        e.head.appendChild(t));
  }
  function La(e) {
    return '[src="' + ht(e) + '"]';
  }
  function qn(e) {
    return 'script[async]' + e;
  }
  function Yd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + ht(l.href) + '"]');
          if (a) return (t.instance = a), Be(a), a;
          var n = C({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            Be(a),
            Xe(a, 'style', n),
            ci(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = qa(l.href);
          var u = e.querySelector(wn(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), Be(u), u;
          (a = Gd(l)),
            (n = bt.get(n)) && qf(a, n),
            (u = (e.ownerDocument || e).createElement('link')),
            Be(u);
          var c = u;
          return (
            (c._p = new Promise(function (s, v) {
              (c.onload = s), (c.onerror = v);
            })),
            Xe(u, 'link', a),
            (t.state.loading |= 4),
            ci(u, l.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = La(l.src)),
            (n = e.querySelector(qn(u)))
              ? ((t.instance = n), Be(n), n)
              : ((a = l),
                (n = bt.get(u)) && ((a = C({}, l)), Lf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement('script')),
                Be(n),
                Xe(n, 'link', a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ci(a, l.precedence, e));
    return t.instance;
  }
  function ci(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var s = a[c];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function qf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Lf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var fi = null;
  function Vd(e, t, l) {
    if (fi === null) {
      var a = new Map(),
        n = (fi = new Map());
      n.set(l, a);
    } else (n = fi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[$a] ||
          u[Ke] ||
          (e === 'link' && u.getAttribute('rel') === 'stylesheet')
        ) &&
        u.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var c = u.getAttribute(t) || '';
        c = e + c;
        var s = a.get(c);
        s ? s.push(u) : a.set(c, [u]);
      }
    }
    return a;
  }
  function Xd(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null
      );
  }
  function im(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled), typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Zd(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Ln = null;
  function cm() {}
  function fm(e, t, l) {
    if (Ln === null) throw Error(f(475));
    var a = Ln;
    if (
      t.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = qa(l.href),
          u = e.querySelector(wn(n));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = ri.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            Be(u);
          return;
        }
        (u = e.ownerDocument || e),
          (l = Gd(l)),
          (n = bt.get(n)) && qf(l, n),
          (u = u.createElement('link')),
          Be(u);
        var c = u;
        (c._p = new Promise(function (s, v) {
          (c.onload = s), (c.onerror = v);
        })),
          Xe(u, 'link', l),
          (t.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = ri.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function rm() {
    if (Ln === null) throw Error(f(475));
    var e = Ln;
    return (
      e.stylesheets && e.count === 0 && Gf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Gf(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function ri() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var oi = null;
  function Gf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (oi = new Map()),
        t.forEach(om, e),
        (oi = null),
        ri.call(e));
  }
  function om(e, t) {
    if (!(t.state.loading & 4)) {
      var l = oi.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), oi.set(e, l);
        for (
          var n = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var c = n[u];
          (c.nodeName === 'LINK' || c.getAttribute('media') !== 'not all') &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (c = n.getAttribute('data-precedence')),
        (u = l.get(c) || a),
        u === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = ri.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Gn = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function sm(e, t, l, a, n, u, c, s) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Bi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Bi(0)),
      (this.hiddenUpdates = Bi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function Qd(e, t, l, a, n, u, c, s, v, N, z, U) {
    return (
      (e = new sm(e, t, l, c, s, v, N, U)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ut(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = bc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Nc(u),
      e
    );
  }
  function Kd(e) {
    return e ? ((e = ya), e) : ya;
  }
  function kd(e, t, l, a, n, u) {
    (n = Kd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = rl(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ol(e, a, t)),
      l !== null && (ot(l, e, t), yn(l, e, t));
  }
  function Jd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Yf(e, t) {
    Jd(e, t), (e = e.alternate) && Jd(e, t);
  }
  function Wd(e) {
    if (e.tag === 13) {
      var t = va(e, 67108864);
      t !== null && ot(t, e, 67108864), Yf(e, 67108864);
    }
  }
  var si = !0;
  function dm(e, t, l, a) {
    var n = D.T;
    D.T = null;
    var u = q.p;
    try {
      (q.p = 2), Vf(e, t, l, a);
    } finally {
      (q.p = u), (D.T = n);
    }
  }
  function hm(e, t, l, a) {
    var n = D.T;
    D.T = null;
    var u = q.p;
    try {
      (q.p = 8), Vf(e, t, l, a);
    } finally {
      (q.p = u), (D.T = n);
    }
  }
  function Vf(e, t, l, a) {
    if (si) {
      var n = Xf(a);
      if (n === null) Of(e, t, a, di, l), Fd(e, a);
      else if (vm(n, e, t, l, a)) a.stopPropagation();
      else if ((Fd(e, a), t & 4 && -1 < mm.indexOf(e))) {
        for (; n !== null; ) {
          var u = aa(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var c = zl(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var v = 1 << (31 - at(c));
                      (s.entanglements[1] |= v), (c &= ~v);
                    }
                    jt(u), (fe & 6) === 0 && ((Wu = At() + 500), _n(0));
                  }
                }
                break;
              case 13:
                (s = va(u, 2)), s !== null && ot(s, u, 2), Fu(), Yf(u, 2);
            }
          if (((u = Xf(a)), u === null && Of(e, t, a, di, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Of(e, t, a, null, l);
    }
  }
  function Xf(e) {
    return (e = ki(e)), Zf(e);
  }
  var di = null;
  function Zf(e) {
    if (((di = null), (e = la(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (di = e), null;
  }
  function $d(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (I0()) {
          case rr:
            return 2;
          case or:
            return 8;
          case nu:
          case eh:
            return 32;
          case sr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qf = !1,
    Tl = null,
    Nl = null,
    Cl = null,
    Yn = new Map(),
    Vn = new Map(),
    Al = [],
    mm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Fd(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Tl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Nl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Cl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Yn.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Vn.delete(t.pointerId);
    }
  }
  function Xn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = aa(t)), t !== null && Wd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function vm(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return (Tl = Xn(Tl, e, t, l, a, n)), !0;
      case 'dragenter':
        return (Nl = Xn(Nl, e, t, l, a, n)), !0;
      case 'mouseover':
        return (Cl = Xn(Cl, e, t, l, a, n)), !0;
      case 'pointerover':
        var u = n.pointerId;
        return Yn.set(u, Xn(Yn.get(u) || null, e, t, l, a, n)), !0;
      case 'gotpointercapture':
        return (
          (u = n.pointerId), Vn.set(u, Xn(Vn.get(u) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function Pd(e) {
    var t = la(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = y(l)), t !== null)) {
            (e.blockedOn = t),
              fh(e.priority, function () {
                if (l.tag === 13) {
                  var a = rt();
                  a = Hi(a);
                  var n = va(l, a);
                  n !== null && ot(n, l, a), Yf(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function hi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Xf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Ki = a), l.target.dispatchEvent(a), (Ki = null);
      } else return (t = aa(l)), t !== null && Wd(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function Id(e, t, l) {
    hi(e) && l.delete(t);
  }
  function ym() {
    (Qf = !1),
      Tl !== null && hi(Tl) && (Tl = null),
      Nl !== null && hi(Nl) && (Nl = null),
      Cl !== null && hi(Cl) && (Cl = null),
      Yn.forEach(Id),
      Vn.forEach(Id);
  }
  function mi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Qf ||
        ((Qf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ym)));
  }
  var vi = null;
  function e0(e) {
    vi !== e &&
      ((vi = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        vi === e && (vi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (Zf(a || l) === null) continue;
            break;
          }
          var u = aa(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Xc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Zn(e) {
    function t(v) {
      return mi(v, e);
    }
    Tl !== null && mi(Tl, e),
      Nl !== null && mi(Nl, e),
      Cl !== null && mi(Cl, e),
      Yn.forEach(t),
      Vn.forEach(t);
    for (var l = 0; l < Al.length; l++) {
      var a = Al[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Al.length && ((l = Al[0]), l.blockedOn === null); )
      Pd(l), l.blockedOn === null && Al.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          c = n[Fe] || null;
        if (typeof u == 'function') c || e0(l);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute('formAction')) {
            if (((n = u), (c = u[Fe] || null))) s = c.formAction;
            else if (Zf(n) !== null) continue;
          } else s = c.action;
          typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            e0(l);
        }
      }
  }
  function Kf(e) {
    this._internalRoot = e;
  }
  (yi.prototype.render = Kf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = rt();
      kd(l, a, e, t, null, null);
    }),
    (yi.prototype.unmount = Kf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          kd(e.current, 2, null, e, null, null), Fu(), (t[ta] = null);
        }
      });
  function yi(e) {
    this._internalRoot = e;
  }
  yi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Al.length && t !== 0 && t < Al[l].priority; l++);
      Al.splice(l, 0, e), l === 0 && Pd(e);
    }
  };
  var t0 = o.version;
  if (t0 !== '19.1.0') throw Error(f(527, t0, '19.1.0'));
  q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(f(188))
        : ((e = Object.keys(e).join(',')), Error(f(268, e)));
    return (
      (e = b(t)),
      (e = e !== null ? x(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var gm = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: D,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gi.isDisabled && gi.supportsFiber)
      try {
        (ka = gi.inject(gm)), (lt = gi);
      } catch {}
  }
  return (
    (Qn.createRoot = function (e, t) {
      if (!r(e)) throw Error(f(299));
      var l = !1,
        a = '',
        n = gs,
        u = ps,
        c = Ss,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (s = t.unstable_transitionCallbacks)),
        (t = Qd(e, 1, !1, null, null, l, a, n, u, c, s, null)),
        (e[ta] = t.current),
        Df(e),
        new Kf(t)
      );
    }),
    (Qn.hydrateRoot = function (e, t, l) {
      if (!r(e)) throw Error(f(299));
      var a = !1,
        n = '',
        u = gs,
        c = ps,
        s = Ss,
        v = null,
        N = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (v = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (N = l.formState)),
        (t = Qd(e, 1, !0, t, l ?? null, a, n, u, c, s, v, N)),
        (t.context = Kd(null)),
        (l = t.current),
        (a = rt()),
        (a = Hi(a)),
        (n = rl(a)),
        (n.callback = null),
        ol(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Wa(t, l),
        jt(t),
        (e[ta] = t.current),
        Df(e),
        new yi(t)
      );
    }),
    (Qn.version = '19.1.0'),
    Qn
  );
}
var f0;
function Zm() {
  if (f0) return kf.exports;
  f0 = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), (kf.exports = Xm()), kf.exports;
}
var Qm = Zm();
const Km = xm(Qm),
  km = 'modulepreload',
  Jm = function (i) {
    return '/' + i;
  },
  r0 = {},
  xt = function (o, d, f) {
    let r = Promise.resolve();
    if (d && d.length > 0) {
      let y = function (x) {
        return Promise.all(
          x.map(C =>
            Promise.resolve(C).then(
              _ => ({ status: 'fulfilled', value: _ }),
              _ => ({ status: 'rejected', reason: _ })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const S = document.querySelector('meta[property=csp-nonce]'),
        b =
          (S == null ? void 0 : S.nonce) ||
          (S == null ? void 0 : S.getAttribute('nonce'));
      r = y(
        d.map(x => {
          if (((x = Jm(x)), x in r0)) return;
          r0[x] = !0;
          const C = x.endsWith('.css'),
            _ = C ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${x}"]${_}`)) return;
          const O = document.createElement('link');
          if (
            ((O.rel = C ? 'stylesheet' : km),
            C || (O.as = 'script'),
            (O.crossOrigin = ''),
            (O.href = x),
            b && O.setAttribute('nonce', b),
            document.head.appendChild(O),
            C)
          )
            return new Promise((H, j) => {
              O.addEventListener('load', H),
                O.addEventListener('error', () =>
                  j(new Error(`Unable to preload CSS for ${x}`))
                );
            });
        })
      );
    }
    function h(y) {
      const S = new Event('vite:preloadError', { cancelable: !0 });
      if (((S.payload = y), window.dispatchEvent(S), !S.defaultPrevented))
        throw y;
    }
    return r.then(y => {
      for (const S of y || []) S.status === 'rejected' && h(S.reason);
      return o().catch(h);
    });
  };
var Kn = {},
  o0;
function Wm() {
  if (o0) return Kn;
  (o0 = 1),
    Object.defineProperty(Kn, '__esModule', { value: !0 }),
    (Kn.parse = y),
    (Kn.serialize = x);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    d =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    r = Object.prototype.toString,
    h = (() => {
      const O = function () {};
      return (O.prototype = Object.create(null)), O;
    })();
  function y(O, H) {
    const j = new h(),
      Y = O.length;
    if (Y < 2) return j;
    const G = (H == null ? void 0 : H.decode) || C;
    let B = 0;
    do {
      const w = O.indexOf('=', B);
      if (w === -1) break;
      const L = O.indexOf(';', B),
        X = L === -1 ? Y : L;
      if (w > X) {
        B = O.lastIndexOf(';', w - 1) + 1;
        continue;
      }
      const $ = S(O, B, w),
        pe = b(O, w, $),
        ie = O.slice($, pe);
      if (j[ie] === void 0) {
        let ce = S(O, w + 1, X),
          me = b(O, X, ce);
        const Re = G(O.slice(ce, me));
        j[ie] = Re;
      }
      B = X + 1;
    } while (B < Y);
    return j;
  }
  function S(O, H, j) {
    do {
      const Y = O.charCodeAt(H);
      if (Y !== 32 && Y !== 9) return H;
    } while (++H < j);
    return j;
  }
  function b(O, H, j) {
    for (; H > j; ) {
      const Y = O.charCodeAt(--H);
      if (Y !== 32 && Y !== 9) return H + 1;
    }
    return j;
  }
  function x(O, H, j) {
    const Y = (j == null ? void 0 : j.encode) || encodeURIComponent;
    if (!i.test(O)) throw new TypeError(`argument name is invalid: ${O}`);
    const G = Y(H);
    if (!o.test(G)) throw new TypeError(`argument val is invalid: ${H}`);
    let B = O + '=' + G;
    if (!j) return B;
    if (j.maxAge !== void 0) {
      if (!Number.isInteger(j.maxAge))
        throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);
      B += '; Max-Age=' + j.maxAge;
    }
    if (j.domain) {
      if (!d.test(j.domain))
        throw new TypeError(`option domain is invalid: ${j.domain}`);
      B += '; Domain=' + j.domain;
    }
    if (j.path) {
      if (!f.test(j.path))
        throw new TypeError(`option path is invalid: ${j.path}`);
      B += '; Path=' + j.path;
    }
    if (j.expires) {
      if (!_(j.expires) || !Number.isFinite(j.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${j.expires}`);
      B += '; Expires=' + j.expires.toUTCString();
    }
    if (
      (j.httpOnly && (B += '; HttpOnly'),
      j.secure && (B += '; Secure'),
      j.partitioned && (B += '; Partitioned'),
      j.priority)
    )
      switch (
        typeof j.priority == 'string' ? j.priority.toLowerCase() : void 0
      ) {
        case 'low':
          B += '; Priority=Low';
          break;
        case 'medium':
          B += '; Priority=Medium';
          break;
        case 'high':
          B += '; Priority=High';
          break;
        default:
          throw new TypeError(`option priority is invalid: ${j.priority}`);
      }
    if (j.sameSite)
      switch (
        typeof j.sameSite == 'string' ? j.sameSite.toLowerCase() : j.sameSite
      ) {
        case !0:
        case 'strict':
          B += '; SameSite=Strict';
          break;
        case 'lax':
          B += '; SameSite=Lax';
          break;
        case 'none':
          B += '; SameSite=None';
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${j.sameSite}`);
      }
    return B;
  }
  function C(O) {
    if (O.indexOf('%') === -1) return O;
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }
  function _(O) {
    return r.call(O) === '[object Date]';
  }
  return Kn;
}
Wm();
var s0 = 'popstate';
function $m(i = {}) {
  function o(f, r) {
    let { pathname: h, search: y, hash: S } = f.location;
    return If(
      '',
      { pathname: h, search: y, hash: S },
      (r.state && r.state.usr) || null,
      (r.state && r.state.key) || 'default'
    );
  }
  function d(f, r) {
    return typeof r == 'string' ? r : $n(r);
  }
  return Pm(o, d, null, i);
}
function Te(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o);
}
function _t(i, o) {
  if (!i) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Fm() {
  return Math.random().toString(36).substring(2, 10);
}
function d0(i, o) {
  return { usr: i.state, key: i.key, idx: o };
}
function If(i, o, d = null, f) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof o == 'string' ? Va(o) : o),
    state: d,
    key: (o && o.key) || f || Fm(),
  };
}
function $n({ pathname: i = '/', search: o = '', hash: d = '' }) {
  return (
    o && o !== '?' && (i += o.charAt(0) === '?' ? o : '?' + o),
    d && d !== '#' && (i += d.charAt(0) === '#' ? d : '#' + d),
    i
  );
}
function Va(i) {
  let o = {};
  if (i) {
    let d = i.indexOf('#');
    d >= 0 && ((o.hash = i.substring(d)), (i = i.substring(0, d)));
    let f = i.indexOf('?');
    f >= 0 && ((o.search = i.substring(f)), (i = i.substring(0, f))),
      i && (o.pathname = i);
  }
  return o;
}
function Pm(i, o, d, f = {}) {
  let { window: r = document.defaultView, v5Compat: h = !1 } = f,
    y = r.history,
    S = 'POP',
    b = null,
    x = C();
  x == null && ((x = 0), y.replaceState({ ...y.state, idx: x }, ''));
  function C() {
    return (y.state || { idx: null }).idx;
  }
  function _() {
    S = 'POP';
    let G = C(),
      B = G == null ? null : G - x;
    (x = G), b && b({ action: S, location: Y.location, delta: B });
  }
  function O(G, B) {
    S = 'PUSH';
    let w = If(Y.location, G, B);
    x = C() + 1;
    let L = d0(w, x),
      X = Y.createHref(w);
    try {
      y.pushState(L, '', X);
    } catch ($) {
      if ($ instanceof DOMException && $.name === 'DataCloneError') throw $;
      r.location.assign(X);
    }
    h && b && b({ action: S, location: Y.location, delta: 1 });
  }
  function H(G, B) {
    S = 'REPLACE';
    let w = If(Y.location, G, B);
    x = C();
    let L = d0(w, x),
      X = Y.createHref(w);
    y.replaceState(L, '', X),
      h && b && b({ action: S, location: Y.location, delta: 0 });
  }
  function j(G) {
    let B = r.location.origin !== 'null' ? r.location.origin : r.location.href,
      w = typeof G == 'string' ? G : $n(G);
    return (
      (w = w.replace(/ $/, '%20')),
      Te(
        B,
        `No window.location.(origin|href) available to create URL for href: ${w}`
      ),
      new URL(w, B)
    );
  }
  let Y = {
    get action() {
      return S;
    },
    get location() {
      return i(r, y);
    },
    listen(G) {
      if (b) throw new Error('A history only accepts one active listener');
      return (
        r.addEventListener(s0, _),
        (b = G),
        () => {
          r.removeEventListener(s0, _), (b = null);
        }
      );
    },
    createHref(G) {
      return o(r, G);
    },
    createURL: j,
    encodeLocation(G) {
      let B = j(G);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: O,
    replace: H,
    go(G) {
      return y.go(G);
    },
  };
  return Y;
}
function C0(i, o, d = '/') {
  return Im(i, o, d, !1);
}
function Im(i, o, d, f) {
  let r = typeof o == 'string' ? Va(o) : o,
    h = el(r.pathname || '/', d);
  if (h == null) return null;
  let y = A0(i);
  e1(y);
  let S = null;
  for (let b = 0; S == null && b < y.length; ++b) {
    let x = s1(h);
    S = r1(y[b], x, f);
  }
  return S;
}
function A0(i, o = [], d = [], f = '') {
  let r = (h, y, S) => {
    let b = {
      relativePath: S === void 0 ? h.path || '' : S,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    };
    b.relativePath.startsWith('/') &&
      (Te(
        b.relativePath.startsWith(f),
        `Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(f.length)));
    let x = It([f, b.relativePath]),
      C = d.concat(b);
    h.children &&
      h.children.length > 0 &&
      (Te(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
      ),
      A0(h.children, o, C, x)),
      !(h.path == null && !h.index) &&
        o.push({ path: x, score: c1(x, h.index), routesMeta: C });
  };
  return (
    i.forEach((h, y) => {
      var S;
      if (h.path === '' || !((S = h.path) != null && S.includes('?'))) r(h, y);
      else for (let b of M0(h.path)) r(h, y, b);
    }),
    o
  );
}
function M0(i) {
  let o = i.split('/');
  if (o.length === 0) return [];
  let [d, ...f] = o,
    r = d.endsWith('?'),
    h = d.replace(/\?$/, '');
  if (f.length === 0) return r ? [h, ''] : [h];
  let y = M0(f.join('/')),
    S = [];
  return (
    S.push(...y.map(b => (b === '' ? h : [h, b].join('/')))),
    r && S.push(...y),
    S.map(b => (i.startsWith('/') && b === '' ? '/' : b))
  );
}
function e1(i) {
  i.sort((o, d) =>
    o.score !== d.score
      ? d.score - o.score
      : f1(
          o.routesMeta.map(f => f.childrenIndex),
          d.routesMeta.map(f => f.childrenIndex)
        )
  );
}
var t1 = /^:[\w-]+$/,
  l1 = 3,
  a1 = 2,
  n1 = 1,
  u1 = 10,
  i1 = -2,
  h0 = i => i === '*';
function c1(i, o) {
  let d = i.split('/'),
    f = d.length;
  return (
    d.some(h0) && (f += i1),
    o && (f += a1),
    d
      .filter(r => !h0(r))
      .reduce((r, h) => r + (t1.test(h) ? l1 : h === '' ? n1 : u1), f)
  );
}
function f1(i, o) {
  return i.length === o.length && i.slice(0, -1).every((f, r) => f === o[r])
    ? i[i.length - 1] - o[o.length - 1]
    : 0;
}
function r1(i, o, d = !1) {
  let { routesMeta: f } = i,
    r = {},
    h = '/',
    y = [];
  for (let S = 0; S < f.length; ++S) {
    let b = f[S],
      x = S === f.length - 1,
      C = h === '/' ? o : o.slice(h.length) || '/',
      _ = Ti(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: x },
        C
      ),
      O = b.route;
    if (
      (!_ &&
        x &&
        d &&
        !f[f.length - 1].route.index &&
        (_ = Ti(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          C
        )),
      !_)
    )
      return null;
    Object.assign(r, _.params),
      y.push({
        params: r,
        pathname: It([h, _.pathname]),
        pathnameBase: v1(It([h, _.pathnameBase])),
        route: O,
      }),
      _.pathnameBase !== '/' && (h = It([h, _.pathnameBase]));
  }
  return y;
}
function Ti(i, o) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [d, f] = o1(i.path, i.caseSensitive, i.end),
    r = o.match(d);
  if (!r) return null;
  let h = r[0],
    y = h.replace(/(.)\/+$/, '$1'),
    S = r.slice(1);
  return {
    params: f.reduce((x, { paramName: C, isOptional: _ }, O) => {
      if (C === '*') {
        let j = S[O] || '';
        y = h.slice(0, h.length - j.length).replace(/(.)\/+$/, '$1');
      }
      const H = S[O];
      return (
        _ && !H ? (x[C] = void 0) : (x[C] = (H || '').replace(/%2F/g, '/')), x
      );
    }, {}),
    pathname: h,
    pathnameBase: y,
    pattern: i,
  };
}
function o1(i, o = !1, d = !0) {
  _t(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`
  );
  let f = [],
    r =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (y, S, b) => (
            f.push({ paramName: S, isOptional: b != null }),
            b ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    i.endsWith('*')
      ? (f.push({ paramName: '*' }),
        (r += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : d
        ? (r += '\\/*$')
        : i !== '' && i !== '/' && (r += '(?:(?=\\/|$))'),
    [new RegExp(r, o ? void 0 : 'i'), f]
  );
}
function s1(i) {
  try {
    return i
      .split('/')
      .map(o => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      _t(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      i
    );
  }
}
function el(i, o) {
  if (o === '/') return i;
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null;
  let d = o.endsWith('/') ? o.length - 1 : o.length,
    f = i.charAt(d);
  return f && f !== '/' ? null : i.slice(d) || '/';
}
function d1(i, o = '/') {
  let {
    pathname: d,
    search: f = '',
    hash: r = '',
  } = typeof i == 'string' ? Va(i) : i;
  return {
    pathname: d ? (d.startsWith('/') ? d : h1(d, o)) : o,
    search: y1(f),
    hash: g1(r),
  };
}
function h1(i, o) {
  let d = o.replace(/\/+$/, '').split('/');
  return (
    i.split('/').forEach(r => {
      r === '..' ? d.length > 1 && d.pop() : r !== '.' && d.push(r);
    }),
    d.length > 1 ? d.join('/') : '/'
  );
}
function $f(i, o, d, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function m1(i) {
  return i.filter(
    (o, d) => d === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function D0(i) {
  let o = m1(i);
  return o.map((d, f) => (f === o.length - 1 ? d.pathname : d.pathnameBase));
}
function O0(i, o, d, f = !1) {
  let r;
  typeof i == 'string'
    ? (r = Va(i))
    : ((r = { ...i }),
      Te(
        !r.pathname || !r.pathname.includes('?'),
        $f('?', 'pathname', 'search', r)
      ),
      Te(
        !r.pathname || !r.pathname.includes('#'),
        $f('#', 'pathname', 'hash', r)
      ),
      Te(!r.search || !r.search.includes('#'), $f('#', 'search', 'hash', r)));
  let h = i === '' || r.pathname === '',
    y = h ? '/' : r.pathname,
    S;
  if (y == null) S = d;
  else {
    let _ = o.length - 1;
    if (!f && y.startsWith('..')) {
      let O = y.split('/');
      for (; O[0] === '..'; ) O.shift(), (_ -= 1);
      r.pathname = O.join('/');
    }
    S = _ >= 0 ? o[_] : '/';
  }
  let b = d1(r, S),
    x = y && y !== '/' && y.endsWith('/'),
    C = (h || y === '.') && d.endsWith('/');
  return !b.pathname.endsWith('/') && (x || C) && (b.pathname += '/'), b;
}
var It = i => i.join('/').replace(/\/\/+/g, '/'),
  v1 = i => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  y1 = i => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  g1 = i => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i);
function p1(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
var z0 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(z0);
var S1 = ['GET', ...z0];
new Set(S1);
var Xa = g.createContext(null);
Xa.displayName = 'DataRouter';
var Mi = g.createContext(null);
Mi.displayName = 'DataRouterState';
var j0 = g.createContext({ isTransitioning: !1 });
j0.displayName = 'ViewTransition';
var b1 = g.createContext(new Map());
b1.displayName = 'Fetchers';
var x1 = g.createContext(null);
x1.displayName = 'Await';
var Ut = g.createContext(null);
Ut.displayName = 'Navigation';
var Fn = g.createContext(null);
Fn.displayName = 'Location';
var Bt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Bt.displayName = 'Route';
var ar = g.createContext(null);
ar.displayName = 'RouteError';
function E1(i, { relative: o } = {}) {
  Te(
    Pn(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: d, navigator: f } = g.useContext(Ut),
    { hash: r, pathname: h, search: y } = In(i, { relative: o }),
    S = h;
  return (
    d !== '/' && (S = h === '/' ? d : It([d, h])),
    f.createHref({ pathname: S, search: y, hash: r })
  );
}
function Pn() {
  return g.useContext(Fn) != null;
}
function Fl() {
  return (
    Te(
      Pn(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    g.useContext(Fn).location
  );
}
var R0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function _0(i) {
  g.useContext(Ut).static || g.useLayoutEffect(i);
}
function Ht() {
  let { isDataRoute: i } = g.useContext(Bt);
  return i ? B1() : T1();
}
function T1() {
  Te(
    Pn(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let i = g.useContext(Xa),
    { basename: o, navigator: d } = g.useContext(Ut),
    { matches: f } = g.useContext(Bt),
    { pathname: r } = Fl(),
    h = JSON.stringify(D0(f)),
    y = g.useRef(!1);
  return (
    _0(() => {
      y.current = !0;
    }),
    g.useCallback(
      (b, x = {}) => {
        if ((_t(y.current, R0), !y.current)) return;
        if (typeof b == 'number') {
          d.go(b);
          return;
        }
        let C = O0(b, JSON.parse(h), r, x.relative === 'path');
        i == null &&
          o !== '/' &&
          (C.pathname = C.pathname === '/' ? o : It([o, C.pathname])),
          (x.replace ? d.replace : d.push)(C, x.state, x);
      },
      [o, d, h, r, i]
    )
  );
}
g.createContext(null);
function Ey() {
  let { matches: i } = g.useContext(Bt),
    o = i[i.length - 1];
  return o ? o.params : {};
}
function In(i, { relative: o } = {}) {
  let { matches: d } = g.useContext(Bt),
    { pathname: f } = Fl(),
    r = JSON.stringify(D0(d));
  return g.useMemo(() => O0(i, JSON.parse(r), f, o === 'path'), [i, r, f, o]);
}
function N1(i, o) {
  return U0(i, o);
}
function U0(i, o, d, f) {
  var w;
  Te(
    Pn(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: r, static: h } = g.useContext(Ut),
    { matches: y } = g.useContext(Bt),
    S = y[y.length - 1],
    b = S ? S.params : {},
    x = S ? S.pathname : '/',
    C = S ? S.pathnameBase : '/',
    _ = S && S.route;
  {
    let L = (_ && _.path) || '';
    B0(
      x,
      !_ || L.endsWith('*') || L.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === '/' ? '*' : `${L}/*`}">.`
    );
  }
  let O = Fl(),
    H;
  if (o) {
    let L = typeof o == 'string' ? Va(o) : o;
    Te(
      C === '/' || ((w = L.pathname) == null ? void 0 : w.startsWith(C)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${L.pathname}" was given in the \`location\` prop.`
    ),
      (H = L);
  } else H = O;
  let j = H.pathname || '/',
    Y = j;
  if (C !== '/') {
    let L = C.replace(/^\//, '').split('/');
    Y = '/' + j.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let G =
    !h && d && d.matches && d.matches.length > 0
      ? d.matches
      : C0(i, { pathname: Y });
  _t(
    _ || G != null,
    `No routes matched location "${H.pathname}${H.search}${H.hash}" `
  ),
    _t(
      G == null ||
        G[G.length - 1].route.element !== void 0 ||
        G[G.length - 1].route.Component !== void 0 ||
        G[G.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let B = O1(
    G &&
      G.map(L =>
        Object.assign({}, L, {
          params: Object.assign({}, b, L.params),
          pathname: It([
            C,
            r.encodeLocation
              ? r.encodeLocation(L.pathname).pathname
              : L.pathname,
          ]),
          pathnameBase:
            L.pathnameBase === '/'
              ? C
              : It([
                  C,
                  r.encodeLocation
                    ? r.encodeLocation(L.pathnameBase).pathname
                    : L.pathnameBase,
                ]),
        })
      ),
    y,
    d,
    f
  );
  return o && B
    ? g.createElement(
        Fn.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...H,
            },
            navigationType: 'POP',
          },
        },
        B
      )
    : B;
}
function C1() {
  let i = U1(),
    o = p1(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    d = i instanceof Error ? i.stack : null,
    f = 'rgba(200,200,200, 0.5)',
    r = { padding: '0.5rem', backgroundColor: f },
    h = { padding: '2px 4px', backgroundColor: f },
    y = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (y = g.createElement(
      g.Fragment,
      null,
      g.createElement('p', null, '💿 Hey developer 👋'),
      g.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        g.createElement('code', { style: h }, 'ErrorBoundary'),
        ' or',
        ' ',
        g.createElement('code', { style: h }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    g.createElement(
      g.Fragment,
      null,
      g.createElement('h2', null, 'Unexpected Application Error!'),
      g.createElement('h3', { style: { fontStyle: 'italic' } }, o),
      d ? g.createElement('pre', { style: r }, d) : null,
      y
    )
  );
}
var A1 = g.createElement(C1, null),
  M1 = class extends g.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, o) {
      return o.location !== i.location ||
        (o.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          };
    }
    componentDidCatch(i, o) {
      console.error(
        'React Router caught the following error during render',
        i,
        o
      );
    }
    render() {
      return this.state.error !== void 0
        ? g.createElement(
            Bt.Provider,
            { value: this.props.routeContext },
            g.createElement(ar.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function D1({ routeContext: i, match: o, children: d }) {
  let f = g.useContext(Xa);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    g.createElement(Bt.Provider, { value: i }, d)
  );
}
function O1(i, o = [], d = null, f = null) {
  if (i == null) {
    if (!d) return null;
    if (d.errors) i = d.matches;
    else if (o.length === 0 && !d.initialized && d.matches.length > 0)
      i = d.matches;
    else return null;
  }
  let r = i,
    h = d == null ? void 0 : d.errors;
  if (h != null) {
    let b = r.findIndex(
      x => x.route.id && (h == null ? void 0 : h[x.route.id]) !== void 0
    );
    Te(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(',')}`
    ),
      (r = r.slice(0, Math.min(r.length, b + 1)));
  }
  let y = !1,
    S = -1;
  if (d)
    for (let b = 0; b < r.length; b++) {
      let x = r[b];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (S = b),
        x.route.id)
      ) {
        let { loaderData: C, errors: _ } = d,
          O =
            x.route.loader &&
            !C.hasOwnProperty(x.route.id) &&
            (!_ || _[x.route.id] === void 0);
        if (x.route.lazy || O) {
          (y = !0), S >= 0 ? (r = r.slice(0, S + 1)) : (r = [r[0]]);
          break;
        }
      }
    }
  return r.reduceRight((b, x, C) => {
    let _,
      O = !1,
      H = null,
      j = null;
    d &&
      ((_ = h && x.route.id ? h[x.route.id] : void 0),
      (H = x.route.errorElement || A1),
      y &&
        (S < 0 && C === 0
          ? (B0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (O = !0),
            (j = null))
          : S === C &&
            ((O = !0), (j = x.route.hydrateFallbackElement || null))));
    let Y = o.concat(r.slice(0, C + 1)),
      G = () => {
        let B;
        return (
          _
            ? (B = H)
            : O
              ? (B = j)
              : x.route.Component
                ? (B = g.createElement(x.route.Component, null))
                : x.route.element
                  ? (B = x.route.element)
                  : (B = b),
          g.createElement(D1, {
            match: x,
            routeContext: { outlet: b, matches: Y, isDataRoute: d != null },
            children: B,
          })
        );
      };
    return d && (x.route.ErrorBoundary || x.route.errorElement || C === 0)
      ? g.createElement(M1, {
          location: d.location,
          revalidation: d.revalidation,
          component: H,
          error: _,
          children: G(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
        })
      : G();
  }, null);
}
function nr(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function z1(i) {
  let o = g.useContext(Xa);
  return Te(o, nr(i)), o;
}
function j1(i) {
  let o = g.useContext(Mi);
  return Te(o, nr(i)), o;
}
function R1(i) {
  let o = g.useContext(Bt);
  return Te(o, nr(i)), o;
}
function ur(i) {
  let o = R1(i),
    d = o.matches[o.matches.length - 1];
  return (
    Te(
      d.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    d.route.id
  );
}
function _1() {
  return ur('useRouteId');
}
function U1() {
  var f;
  let i = g.useContext(ar),
    o = j1('useRouteError'),
    d = ur('useRouteError');
  return i !== void 0 ? i : (f = o.errors) == null ? void 0 : f[d];
}
function B1() {
  let { router: i } = z1('useNavigate'),
    o = ur('useNavigate'),
    d = g.useRef(!1);
  return (
    _0(() => {
      d.current = !0;
    }),
    g.useCallback(
      async (r, h = {}) => {
        _t(d.current, R0),
          d.current &&
            (typeof r == 'number'
              ? i.navigate(r)
              : await i.navigate(r, { fromRouteId: o, ...h }));
      },
      [i, o]
    )
  );
}
var m0 = {};
function B0(i, o, d) {
  !o && !m0[i] && ((m0[i] = !0), _t(!1, d));
}
g.memo(H1);
function H1({ routes: i, future: o, state: d }) {
  return U0(i, void 0, d, o);
}
function Ze(i) {
  Te(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function w1({
  basename: i = '/',
  children: o = null,
  location: d,
  navigationType: f = 'POP',
  navigator: r,
  static: h = !1,
}) {
  Te(
    !Pn(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let y = i.replace(/^\/*/, '/'),
    S = g.useMemo(
      () => ({ basename: y, navigator: r, static: h, future: {} }),
      [y, r, h]
    );
  typeof d == 'string' && (d = Va(d));
  let {
      pathname: b = '/',
      search: x = '',
      hash: C = '',
      state: _ = null,
      key: O = 'default',
    } = d,
    H = g.useMemo(() => {
      let j = el(b, y);
      return j == null
        ? null
        : {
            location: { pathname: j, search: x, hash: C, state: _, key: O },
            navigationType: f,
          };
    }, [y, b, x, C, _, O, f]);
  return (
    _t(
      H != null,
      `<Router basename="${y}"> is not able to match the URL "${b}${x}${C}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    H == null
      ? null
      : g.createElement(
          Ut.Provider,
          { value: S },
          g.createElement(Fn.Provider, { children: o, value: H })
        )
  );
}
function q1({ children: i, location: o }) {
  return N1(er(i), o);
}
function er(i, o = []) {
  let d = [];
  return (
    g.Children.forEach(i, (f, r) => {
      if (!g.isValidElement(f)) return;
      let h = [...o, r];
      if (f.type === g.Fragment) {
        d.push.apply(d, er(f.props.children, h));
        return;
      }
      Te(
        f.type === Ze,
        `[${typeof f.type == 'string' ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Te(
          !f.props.index || !f.props.children,
          'An index route cannot have child routes.'
        );
      let y = {
        id: f.props.id || h.join('-'),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (y.children = er(f.props.children, h)), d.push(y);
    }),
    d
  );
}
var xi = 'get',
  Ei = 'application/x-www-form-urlencoded';
function Di(i) {
  return i != null && typeof i.tagName == 'string';
}
function L1(i) {
  return Di(i) && i.tagName.toLowerCase() === 'button';
}
function G1(i) {
  return Di(i) && i.tagName.toLowerCase() === 'form';
}
function Y1(i) {
  return Di(i) && i.tagName.toLowerCase() === 'input';
}
function V1(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function X1(i, o) {
  return i.button === 0 && (!o || o === '_self') && !V1(i);
}
var bi = null;
function Z1() {
  if (bi === null)
    try {
      new FormData(document.createElement('form'), 0), (bi = !1);
    } catch {
      bi = !0;
    }
  return bi;
}
var Q1 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Ff(i) {
  return i != null && !Q1.has(i)
    ? (_t(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ei}"`
      ),
      null)
    : i;
}
function K1(i, o) {
  let d, f, r, h, y;
  if (G1(i)) {
    let S = i.getAttribute('action');
    (f = S ? el(S, o) : null),
      (d = i.getAttribute('method') || xi),
      (r = Ff(i.getAttribute('enctype')) || Ei),
      (h = new FormData(i));
  } else if (L1(i) || (Y1(i) && (i.type === 'submit' || i.type === 'image'))) {
    let S = i.form;
    if (S == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = i.getAttribute('formaction') || S.getAttribute('action');
    if (
      ((f = b ? el(b, o) : null),
      (d = i.getAttribute('formmethod') || S.getAttribute('method') || xi),
      (r =
        Ff(i.getAttribute('formenctype')) ||
        Ff(S.getAttribute('enctype')) ||
        Ei),
      (h = new FormData(S, i)),
      !Z1())
    ) {
      let { name: x, type: C, value: _ } = i;
      if (C === 'image') {
        let O = x ? `${x}.` : '';
        h.append(`${O}x`, '0'), h.append(`${O}y`, '0');
      } else x && h.append(x, _);
    }
  } else {
    if (Di(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (d = xi), (f = null), (r = Ei), (y = i);
  }
  return (
    h && r === 'text/plain' && ((y = h), (h = void 0)),
    { action: f, method: d.toLowerCase(), encType: r, formData: h, body: y }
  );
}
function ir(i, o) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(o);
}
async function k1(i, o) {
  if (i.id in o) return o[i.id];
  try {
    let d = await import(i.module);
    return (o[i.id] = d), d;
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function J1(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === 'preload' &&
        typeof i.imageSrcSet == 'string' &&
        typeof i.imageSizes == 'string'
      : typeof i.rel == 'string' && typeof i.href == 'string';
}
async function W1(i, o, d) {
  let f = await Promise.all(
    i.map(async r => {
      let h = o.routes[r.route.id];
      if (h) {
        let y = await k1(h, d);
        return y.links ? y.links() : [];
      }
      return [];
    })
  );
  return I1(
    f
      .flat(1)
      .filter(J1)
      .filter(r => r.rel === 'stylesheet' || r.rel === 'preload')
      .map(r =>
        r.rel === 'stylesheet'
          ? { ...r, rel: 'prefetch', as: 'style' }
          : { ...r, rel: 'prefetch' }
      )
  );
}
function v0(i, o, d, f, r, h) {
  let y = (b, x) => (d[x] ? b.route.id !== d[x].route.id : !0),
    S = (b, x) => {
      var C;
      return (
        d[x].pathname !== b.pathname ||
        (((C = d[x].route.path) == null ? void 0 : C.endsWith('*')) &&
          d[x].params['*'] !== b.params['*'])
      );
    };
  return h === 'assets'
    ? o.filter((b, x) => y(b, x) || S(b, x))
    : h === 'data'
      ? o.filter((b, x) => {
          var _;
          let C = f.routes[b.route.id];
          if (!C || !C.hasLoader) return !1;
          if (y(b, x) || S(b, x)) return !0;
          if (b.route.shouldRevalidate) {
            let O = b.route.shouldRevalidate({
              currentUrl: new URL(
                r.pathname + r.search + r.hash,
                window.origin
              ),
              currentParams: ((_ = d[0]) == null ? void 0 : _.params) || {},
              nextUrl: new URL(i, window.origin),
              nextParams: b.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof O == 'boolean') return O;
          }
          return !0;
        })
      : [];
}
function $1(i, o, { includeHydrateFallback: d } = {}) {
  return F1(
    i
      .map(f => {
        let r = o.routes[f.route.id];
        if (!r) return [];
        let h = [r.module];
        return (
          r.clientActionModule && (h = h.concat(r.clientActionModule)),
          r.clientLoaderModule && (h = h.concat(r.clientLoaderModule)),
          d &&
            r.hydrateFallbackModule &&
            (h = h.concat(r.hydrateFallbackModule)),
          r.imports && (h = h.concat(r.imports)),
          h
        );
      })
      .flat(1)
  );
}
function F1(i) {
  return [...new Set(i)];
}
function P1(i) {
  let o = {},
    d = Object.keys(i).sort();
  for (let f of d) o[f] = i[f];
  return o;
}
function I1(i, o) {
  let d = new Set();
  return (
    new Set(o),
    i.reduce((f, r) => {
      let h = JSON.stringify(P1(r));
      return d.has(h) || (d.add(h), f.push({ key: h, link: r })), f;
    }, [])
  );
}
var ev = new Set([100, 101, 204, 205]);
function tv(i, o) {
  let d =
    typeof i == 'string'
      ? new URL(
          i,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : i;
  return (
    d.pathname === '/'
      ? (d.pathname = '_root.data')
      : o && el(d.pathname, o) === '/'
        ? (d.pathname = `${o.replace(/\/$/, '')}/_root.data`)
        : (d.pathname = `${d.pathname.replace(/\/$/, '')}.data`),
    d
  );
}
function H0() {
  let i = g.useContext(Xa);
  return (
    ir(
      i,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    i
  );
}
function lv() {
  let i = g.useContext(Mi);
  return (
    ir(
      i,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    i
  );
}
var cr = g.createContext(void 0);
cr.displayName = 'FrameworkContext';
function w0() {
  let i = g.useContext(cr);
  return (
    ir(i, 'You must render this element inside a <HydratedRouter> element'), i
  );
}
function av(i, o) {
  let d = g.useContext(cr),
    [f, r] = g.useState(!1),
    [h, y] = g.useState(!1),
    {
      onFocus: S,
      onBlur: b,
      onMouseEnter: x,
      onMouseLeave: C,
      onTouchStart: _,
    } = o,
    O = g.useRef(null);
  g.useEffect(() => {
    if ((i === 'render' && y(!0), i === 'viewport')) {
      let Y = B => {
          B.forEach(w => {
            y(w.isIntersecting);
          });
        },
        G = new IntersectionObserver(Y, { threshold: 0.5 });
      return (
        O.current && G.observe(O.current),
        () => {
          G.disconnect();
        }
      );
    }
  }, [i]),
    g.useEffect(() => {
      if (f) {
        let Y = setTimeout(() => {
          y(!0);
        }, 100);
        return () => {
          clearTimeout(Y);
        };
      }
    }, [f]);
  let H = () => {
      r(!0);
    },
    j = () => {
      r(!1), y(!1);
    };
  return d
    ? i !== 'intent'
      ? [h, O, {}]
      : [
          h,
          O,
          {
            onFocus: kn(S, H),
            onBlur: kn(b, j),
            onMouseEnter: kn(x, H),
            onMouseLeave: kn(C, j),
            onTouchStart: kn(_, H),
          },
        ]
    : [!1, O, {}];
}
function kn(i, o) {
  return d => {
    i && i(d), d.defaultPrevented || o(d);
  };
}
function nv({ page: i, ...o }) {
  let { router: d } = H0(),
    f = g.useMemo(() => C0(d.routes, i, d.basename), [d.routes, i, d.basename]);
  return f ? g.createElement(iv, { page: i, matches: f, ...o }) : null;
}
function uv(i) {
  let { manifest: o, routeModules: d } = w0(),
    [f, r] = g.useState([]);
  return (
    g.useEffect(() => {
      let h = !1;
      return (
        W1(i, o, d).then(y => {
          h || r(y);
        }),
        () => {
          h = !0;
        }
      );
    }, [i, o, d]),
    f
  );
}
function iv({ page: i, matches: o, ...d }) {
  let f = Fl(),
    { manifest: r, routeModules: h } = w0(),
    { basename: y } = H0(),
    { loaderData: S, matches: b } = lv(),
    x = g.useMemo(() => v0(i, o, b, r, f, 'data'), [i, o, b, r, f]),
    C = g.useMemo(() => v0(i, o, b, r, f, 'assets'), [i, o, b, r, f]),
    _ = g.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return [];
      let j = new Set(),
        Y = !1;
      if (
        (o.forEach(B => {
          var L;
          let w = r.routes[B.route.id];
          !w ||
            !w.hasLoader ||
            ((!x.some(X => X.route.id === B.route.id) &&
              B.route.id in S &&
              (L = h[B.route.id]) != null &&
              L.shouldRevalidate) ||
            w.hasClientLoader
              ? (Y = !0)
              : j.add(B.route.id));
        }),
        j.size === 0)
      )
        return [];
      let G = tv(i, y);
      return (
        Y &&
          j.size > 0 &&
          G.searchParams.set(
            '_routes',
            o
              .filter(B => j.has(B.route.id))
              .map(B => B.route.id)
              .join(',')
          ),
        [G.pathname + G.search]
      );
    }, [y, S, f, r, x, o, i, h]),
    O = g.useMemo(() => $1(C, r), [C, r]),
    H = uv(C);
  return g.createElement(
    g.Fragment,
    null,
    _.map(j =>
      g.createElement('link', {
        key: j,
        rel: 'prefetch',
        as: 'fetch',
        href: j,
        ...d,
      })
    ),
    O.map(j =>
      g.createElement('link', { key: j, rel: 'modulepreload', href: j, ...d })
    ),
    H.map(({ key: j, link: Y }) => g.createElement('link', { key: j, ...Y }))
  );
}
function cv(...i) {
  return o => {
    i.forEach(d => {
      typeof d == 'function' ? d(o) : d != null && (d.current = o);
    });
  };
}
var q0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  q0 && (window.__reactRouterVersion = '7.5.2');
} catch {}
function fv({ basename: i, children: o, window: d }) {
  let f = g.useRef();
  f.current == null && (f.current = $m({ window: d, v5Compat: !0 }));
  let r = f.current,
    [h, y] = g.useState({ action: r.action, location: r.location }),
    S = g.useCallback(
      b => {
        g.startTransition(() => y(b));
      },
      [y]
    );
  return (
    g.useLayoutEffect(() => r.listen(S), [r, S]),
    g.createElement(w1, {
      basename: i,
      children: o,
      location: h.location,
      navigationType: h.action,
      navigator: r,
    })
  );
}
var L0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Oi = g.forwardRef(function (
    {
      onClick: o,
      discover: d = 'render',
      prefetch: f = 'none',
      relative: r,
      reloadDocument: h,
      replace: y,
      state: S,
      target: b,
      to: x,
      preventScrollReset: C,
      viewTransition: _,
      ...O
    },
    H
  ) {
    let { basename: j } = g.useContext(Ut),
      Y = typeof x == 'string' && L0.test(x),
      G,
      B = !1;
    if (typeof x == 'string' && Y && ((G = x), q0))
      try {
        let me = new URL(window.location.href),
          Re = x.startsWith('//') ? new URL(me.protocol + x) : new URL(x),
          _e = el(Re.pathname, j);
        Re.origin === me.origin && _e != null
          ? (x = _e + Re.search + Re.hash)
          : (B = !0);
      } catch {
        _t(
          !1,
          `<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let w = E1(x, { relative: r }),
      [L, X, $] = av(f, O),
      pe = dv(x, {
        replace: y,
        state: S,
        target: b,
        preventScrollReset: C,
        relative: r,
        viewTransition: _,
      });
    function ie(me) {
      o && o(me), me.defaultPrevented || pe(me);
    }
    let ce = g.createElement('a', {
      ...O,
      ...$,
      href: G || w,
      onClick: B || h ? o : ie,
      ref: cv(H, X),
      target: b,
      'data-discover': !Y && d === 'render' ? 'true' : void 0,
    });
    return L && !Y
      ? g.createElement(g.Fragment, null, ce, g.createElement(nv, { page: w }))
      : ce;
  });
Oi.displayName = 'Link';
var rv = g.forwardRef(function (
  {
    'aria-current': o = 'page',
    caseSensitive: d = !1,
    className: f = '',
    end: r = !1,
    style: h,
    to: y,
    viewTransition: S,
    children: b,
    ...x
  },
  C
) {
  let _ = In(y, { relative: x.relative }),
    O = Fl(),
    H = g.useContext(Mi),
    { navigator: j, basename: Y } = g.useContext(Ut),
    G = H != null && gv(_) && S === !0,
    B = j.encodeLocation ? j.encodeLocation(_).pathname : _.pathname,
    w = O.pathname,
    L =
      H && H.navigation && H.navigation.location
        ? H.navigation.location.pathname
        : null;
  d ||
    ((w = w.toLowerCase()),
    (L = L ? L.toLowerCase() : null),
    (B = B.toLowerCase())),
    L && Y && (L = el(L, Y) || L);
  const X = B !== '/' && B.endsWith('/') ? B.length - 1 : B.length;
  let $ = w === B || (!r && w.startsWith(B) && w.charAt(X) === '/'),
    pe =
      L != null &&
      (L === B || (!r && L.startsWith(B) && L.charAt(B.length) === '/')),
    ie = { isActive: $, isPending: pe, isTransitioning: G },
    ce = $ ? o : void 0,
    me;
  typeof f == 'function'
    ? (me = f(ie))
    : (me = [
        f,
        $ ? 'active' : null,
        pe ? 'pending' : null,
        G ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let Re = typeof h == 'function' ? h(ie) : h;
  return g.createElement(
    Oi,
    {
      ...x,
      'aria-current': ce,
      className: me,
      ref: C,
      style: Re,
      to: y,
      viewTransition: S,
    },
    typeof b == 'function' ? b(ie) : b
  );
});
rv.displayName = 'NavLink';
var ov = g.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: o,
      navigate: d,
      reloadDocument: f,
      replace: r,
      state: h,
      method: y = xi,
      action: S,
      onSubmit: b,
      relative: x,
      preventScrollReset: C,
      viewTransition: _,
      ...O
    },
    H
  ) => {
    let j = vv(),
      Y = yv(S, { relative: x }),
      G = y.toLowerCase() === 'get' ? 'get' : 'post',
      B = typeof S == 'string' && L0.test(S),
      w = L => {
        if ((b && b(L), L.defaultPrevented)) return;
        L.preventDefault();
        let X = L.nativeEvent.submitter,
          $ = (X == null ? void 0 : X.getAttribute('formmethod')) || y;
        j(X || L.currentTarget, {
          fetcherKey: o,
          method: $,
          navigate: d,
          replace: r,
          state: h,
          relative: x,
          preventScrollReset: C,
          viewTransition: _,
        });
      };
    return g.createElement('form', {
      ref: H,
      method: G,
      action: Y,
      onSubmit: f ? b : w,
      ...O,
      'data-discover': !B && i === 'render' ? 'true' : void 0,
    });
  }
);
ov.displayName = 'Form';
function sv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function G0(i) {
  let o = g.useContext(Xa);
  return Te(o, sv(i)), o;
}
function dv(
  i,
  {
    target: o,
    replace: d,
    state: f,
    preventScrollReset: r,
    relative: h,
    viewTransition: y,
  } = {}
) {
  let S = Ht(),
    b = Fl(),
    x = In(i, { relative: h });
  return g.useCallback(
    C => {
      if (X1(C, o)) {
        C.preventDefault();
        let _ = d !== void 0 ? d : $n(b) === $n(x);
        S(i, {
          replace: _,
          state: f,
          preventScrollReset: r,
          relative: h,
          viewTransition: y,
        });
      }
    },
    [b, S, x, d, f, o, i, r, h, y]
  );
}
var hv = 0,
  mv = () => `__${String(++hv)}__`;
function vv() {
  let { router: i } = G0('useSubmit'),
    { basename: o } = g.useContext(Ut),
    d = _1();
  return g.useCallback(
    async (f, r = {}) => {
      let { action: h, method: y, encType: S, formData: b, body: x } = K1(f, o);
      if (r.navigate === !1) {
        let C = r.fetcherKey || mv();
        await i.fetch(C, d, r.action || h, {
          preventScrollReset: r.preventScrollReset,
          formData: b,
          body: x,
          formMethod: r.method || y,
          formEncType: r.encType || S,
          flushSync: r.flushSync,
        });
      } else
        await i.navigate(r.action || h, {
          preventScrollReset: r.preventScrollReset,
          formData: b,
          body: x,
          formMethod: r.method || y,
          formEncType: r.encType || S,
          replace: r.replace,
          state: r.state,
          fromRouteId: d,
          flushSync: r.flushSync,
          viewTransition: r.viewTransition,
        });
    },
    [i, o, d]
  );
}
function yv(i, { relative: o } = {}) {
  let { basename: d } = g.useContext(Ut),
    f = g.useContext(Bt);
  Te(f, 'useFormAction must be used inside a RouteContext');
  let [r] = f.matches.slice(-1),
    h = { ...In(i || '.', { relative: o }) },
    y = Fl();
  if (i == null) {
    h.search = y.search;
    let S = new URLSearchParams(h.search),
      b = S.getAll('index');
    if (b.some(C => C === '')) {
      S.delete('index'), b.filter(_ => _).forEach(_ => S.append('index', _));
      let C = S.toString();
      h.search = C ? `?${C}` : '';
    }
  }
  return (
    (!i || i === '.') &&
      r.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, '?index&') : '?index'),
    d !== '/' && (h.pathname = h.pathname === '/' ? d : It([d, h.pathname])),
    $n(h)
  );
}
function gv(i, o = {}) {
  let d = g.useContext(j0);
  Te(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = G0('useViewTransitionState'),
    r = In(i, { relative: o.relative });
  if (!d.isTransitioning) return !1;
  let h = el(d.currentLocation.pathname, f) || d.currentLocation.pathname,
    y = el(d.nextLocation.pathname, f) || d.nextLocation.pathname;
  return Ti(r.pathname, y) != null || Ti(r.pathname, h) != null;
}
new TextEncoder();
[...ev];
function pv() {
  return m.jsx(Em, {
    style: { height: '100vh' },
    children: m.jsx(Ci, { size: 'xl' }),
  });
}
const Y0 = g.createContext();
function Sv({ children: i }) {
  const [o, d] = g.useState(
      () => JSON.parse(localStorage.getItem('checkout_personal')) || {}
    ),
    [f, r] = g.useState(
      () => JSON.parse(localStorage.getItem('checkout_friend')) || {}
    ),
    [h, y] = g.useState(
      () => JSON.parse(localStorage.getItem('checkout_address')) || {}
    ),
    [S, b] = g.useState(
      () => JSON.parse(localStorage.getItem('checkout_payment')) || {}
    );
  return (
    g.useEffect(() => {
      localStorage.setItem('checkout_personal', JSON.stringify(o));
    }, [o]),
    g.useEffect(() => {
      localStorage.setItem('checkout_friend', JSON.stringify(f));
    }, [f]),
    g.useEffect(() => {
      localStorage.setItem('checkout_address', JSON.stringify(h));
    }, [h]),
    g.useEffect(() => {
      localStorage.setItem('checkout_payment', JSON.stringify(S));
    }, [S]),
    m.jsx(Y0.Provider, {
      value: {
        personalInfo: o,
        setPersonalInfo: d,
        friendInfo: f,
        setFriendInfo: r,
        addressInfo: h,
        setAddressInfo: y,
        paymentMethod: S,
        setPaymentMethod: b,
      },
      children: i,
    })
  );
}
function V0() {
  const i = g.useContext(Y0);
  if (!i) throw new Error('useCheckout must be used within a CheckoutProvider');
  return i;
}
function zi({ active: i }) {
  return m.jsxs(pi, {
    active: i,
    className: 'custom-stepper',
    classNames: {
      separator: 'custom-stepper-separator',
      stepIcon: 'custom-step-icon',
      step: 'custom-step',
    },
    children: [m.jsx(pi.Step, {}), m.jsx(pi.Step, {}), m.jsx(pi.Step, {})],
  });
}
function bv(i) {
  let o = i,
    d = !1;
  const f = new Set();
  return {
    getState() {
      return o;
    },
    updateState(r) {
      o = typeof r == 'function' ? r(o) : r;
    },
    setState(r) {
      this.updateState(r), f.forEach(h => h(o));
    },
    initialize(r) {
      d || ((o = r), (d = !0));
    },
    subscribe(r) {
      return f.add(r), () => f.delete(r);
    },
  };
}
function xv(i) {
  return g.useSyncExternalStore(
    i.subscribe,
    () => i.getState(),
    () => i.getState()
  );
}
function Ev(i, o, d) {
  const f = [],
    r = [],
    h = {};
  for (const y of i) {
    const S = y.position || o;
    (h[S] = h[S] || 0), (h[S] += 1), h[S] <= d ? r.push(y) : f.push(y);
  }
  return { notifications: r, queue: f };
}
const Tv = () =>
    bv({
      notifications: [],
      queue: [],
      defaultPosition: 'bottom-right',
      limit: 5,
    }),
  Pl = Tv(),
  Nv = (i = Pl) => xv(i);
function Za(i, o) {
  const d = i.getState(),
    f = o([...d.notifications, ...d.queue]),
    r = Ev(f, d.defaultPosition, d.limit);
  i.setState({
    notifications: r.notifications,
    queue: r.queue,
    limit: d.limit,
    defaultPosition: d.defaultPosition,
  });
}
function $e(i, o = Pl) {
  const d = i.id || Tm();
  return (
    Za(o, f =>
      i.id && f.some(r => r.id === i.id) ? f : [...f, { ...i, id: d }]
    ),
    d
  );
}
function X0(i, o = Pl) {
  return (
    Za(o, d =>
      d.filter(f => {
        var r;
        return f.id === i ? ((r = f.onClose) == null || r.call(f, f), !1) : !0;
      })
    ),
    i
  );
}
function Cv(i, o = Pl) {
  return Za(o, d => d.map(f => (f.id === i.id ? { ...f, ...i } : f))), i.id;
}
function Av(i = Pl) {
  Za(i, () => []);
}
function Mv(i = Pl) {
  Za(i, o => o.slice(0, i.getState().limit));
}
const Qa = {
  show: $e,
  hide: X0,
  update: Cv,
  clean: Av,
  cleanQueue: Mv,
  updateState: Za,
};
function tr(i, o) {
  return (
    (tr = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (d, f) {
          return (d.__proto__ = f), d;
        }),
    tr(i, o)
  );
}
function Z0(i, o) {
  (i.prototype = Object.create(o.prototype)),
    (i.prototype.constructor = i),
    tr(i, o);
}
const y0 = { disabled: !1 },
  Ni = Rt.createContext(null);
var Dv = function (o) {
    return o.scrollTop;
  },
  Wn = 'unmounted',
  Jl = 'exited',
  Wl = 'entering',
  Ya = 'entered',
  lr = 'exiting',
  tl = (function (i) {
    Z0(o, i);
    function o(f, r) {
      var h;
      h = i.call(this, f, r) || this;
      var y = r,
        S = y && !y.isMounting ? f.enter : f.appear,
        b;
      return (
        (h.appearStatus = null),
        f.in
          ? S
            ? ((b = Jl), (h.appearStatus = Wl))
            : (b = Ya)
          : f.unmountOnExit || f.mountOnEnter
            ? (b = Wn)
            : (b = Jl),
        (h.state = { status: b }),
        (h.nextCallback = null),
        h
      );
    }
    o.getDerivedStateFromProps = function (r, h) {
      var y = r.in;
      return y && h.status === Wn ? { status: Jl } : null;
    };
    var d = o.prototype;
    return (
      (d.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (d.componentDidUpdate = function (r) {
        var h = null;
        if (r !== this.props) {
          var y = this.state.status;
          this.props.in
            ? y !== Wl && y !== Ya && (h = Wl)
            : (y === Wl || y === Ya) && (h = lr);
        }
        this.updateStatus(!1, h);
      }),
      (d.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (d.getTimeouts = function () {
        var r = this.props.timeout,
          h,
          y,
          S;
        return (
          (h = y = S = r),
          r != null &&
            typeof r != 'number' &&
            ((h = r.exit),
            (y = r.enter),
            (S = r.appear !== void 0 ? r.appear : y)),
          { exit: h, enter: y, appear: S }
        );
      }),
      (d.updateStatus = function (r, h) {
        if ((r === void 0 && (r = !1), h !== null))
          if ((this.cancelNextCallback(), h === Wl)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var y = this.props.nodeRef
                ? this.props.nodeRef.current
                : Si.findDOMNode(this);
              y && Dv(y);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Jl &&
            this.setState({ status: Wn });
      }),
      (d.performEnter = function (r) {
        var h = this,
          y = this.props.enter,
          S = this.context ? this.context.isMounting : r,
          b = this.props.nodeRef ? [S] : [Si.findDOMNode(this), S],
          x = b[0],
          C = b[1],
          _ = this.getTimeouts(),
          O = S ? _.appear : _.enter;
        if ((!r && !y) || y0.disabled) {
          this.safeSetState({ status: Ya }, function () {
            h.props.onEntered(x);
          });
          return;
        }
        this.props.onEnter(x, C),
          this.safeSetState({ status: Wl }, function () {
            h.props.onEntering(x, C),
              h.onTransitionEnd(O, function () {
                h.safeSetState({ status: Ya }, function () {
                  h.props.onEntered(x, C);
                });
              });
          });
      }),
      (d.performExit = function () {
        var r = this,
          h = this.props.exit,
          y = this.getTimeouts(),
          S = this.props.nodeRef ? void 0 : Si.findDOMNode(this);
        if (!h || y0.disabled) {
          this.safeSetState({ status: Jl }, function () {
            r.props.onExited(S);
          });
          return;
        }
        this.props.onExit(S),
          this.safeSetState({ status: lr }, function () {
            r.props.onExiting(S),
              r.onTransitionEnd(y.exit, function () {
                r.safeSetState({ status: Jl }, function () {
                  r.props.onExited(S);
                });
              });
          });
      }),
      (d.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (d.safeSetState = function (r, h) {
        (h = this.setNextCallback(h)), this.setState(r, h);
      }),
      (d.setNextCallback = function (r) {
        var h = this,
          y = !0;
        return (
          (this.nextCallback = function (S) {
            y && ((y = !1), (h.nextCallback = null), r(S));
          }),
          (this.nextCallback.cancel = function () {
            y = !1;
          }),
          this.nextCallback
        );
      }),
      (d.onTransitionEnd = function (r, h) {
        this.setNextCallback(h);
        var y = this.props.nodeRef
            ? this.props.nodeRef.current
            : Si.findDOMNode(this),
          S = r == null && !this.props.addEndListener;
        if (!y || S) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var b = this.props.nodeRef
              ? [this.nextCallback]
              : [y, this.nextCallback],
            x = b[0],
            C = b[1];
          this.props.addEndListener(x, C);
        }
        r != null && setTimeout(this.nextCallback, r);
      }),
      (d.render = function () {
        var r = this.state.status;
        if (r === Wn) return null;
        var h = this.props,
          y = h.children;
        h.in,
          h.mountOnEnter,
          h.unmountOnExit,
          h.appear,
          h.enter,
          h.exit,
          h.timeout,
          h.addEndListener,
          h.onEnter,
          h.onEntering,
          h.onEntered,
          h.onExit,
          h.onExiting,
          h.onExited,
          h.nodeRef;
        var S = T0(h, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return Rt.createElement(
          Ni.Provider,
          { value: null },
          typeof y == 'function'
            ? y(r, S)
            : Rt.cloneElement(Rt.Children.only(y), S)
        );
      }),
      o
    );
  })(Rt.Component);
tl.contextType = Ni;
tl.propTypes = {};
function Ga() {}
tl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ga,
  onEntering: Ga,
  onEntered: Ga,
  onExit: Ga,
  onExiting: Ga,
  onExited: Ga,
};
tl.UNMOUNTED = Wn;
tl.EXITED = Jl;
tl.ENTERING = Wl;
tl.ENTERED = Ya;
tl.EXITING = lr;
function Ov(i) {
  if (i === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return i;
}
function fr(i, o) {
  var d = function (h) {
      return o && g.isValidElement(h) ? o(h) : h;
    },
    f = Object.create(null);
  return (
    i &&
      g.Children.map(i, function (r) {
        return r;
      }).forEach(function (r) {
        f[r.key] = d(r);
      }),
    f
  );
}
function zv(i, o) {
  (i = i || {}), (o = o || {});
  function d(C) {
    return C in o ? o[C] : i[C];
  }
  var f = Object.create(null),
    r = [];
  for (var h in i) h in o ? r.length && ((f[h] = r), (r = [])) : r.push(h);
  var y,
    S = {};
  for (var b in o) {
    if (f[b])
      for (y = 0; y < f[b].length; y++) {
        var x = f[b][y];
        S[f[b][y]] = d(x);
      }
    S[b] = d(b);
  }
  for (y = 0; y < r.length; y++) S[r[y]] = d(r[y]);
  return S;
}
function $l(i, o, d) {
  return d[o] != null ? d[o] : i.props[o];
}
function jv(i, o) {
  return fr(i.children, function (d) {
    return g.cloneElement(d, {
      onExited: o.bind(null, d),
      in: !0,
      appear: $l(d, 'appear', i),
      enter: $l(d, 'enter', i),
      exit: $l(d, 'exit', i),
    });
  });
}
function Rv(i, o, d) {
  var f = fr(i.children),
    r = zv(o, f);
  return (
    Object.keys(r).forEach(function (h) {
      var y = r[h];
      if (g.isValidElement(y)) {
        var S = h in o,
          b = h in f,
          x = o[h],
          C = g.isValidElement(x) && !x.props.in;
        b && (!S || C)
          ? (r[h] = g.cloneElement(y, {
              onExited: d.bind(null, y),
              in: !0,
              exit: $l(y, 'exit', i),
              enter: $l(y, 'enter', i),
            }))
          : !b && S && !C
            ? (r[h] = g.cloneElement(y, { in: !1 }))
            : b &&
              S &&
              g.isValidElement(x) &&
              (r[h] = g.cloneElement(y, {
                onExited: d.bind(null, y),
                in: x.props.in,
                exit: $l(y, 'exit', i),
                enter: $l(y, 'enter', i),
              }));
      }
    }),
    r
  );
}
var _v =
    Object.values ||
    function (i) {
      return Object.keys(i).map(function (o) {
        return i[o];
      });
    },
  Uv = {
    component: 'div',
    childFactory: function (o) {
      return o;
    },
  },
  Ol = (function (i) {
    Z0(o, i);
    function o(f, r) {
      var h;
      h = i.call(this, f, r) || this;
      var y = h.handleExited.bind(Ov(h));
      return (
        (h.state = {
          contextValue: { isMounting: !0 },
          handleExited: y,
          firstRender: !0,
        }),
        h
      );
    }
    var d = o.prototype;
    return (
      (d.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (d.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (o.getDerivedStateFromProps = function (r, h) {
        var y = h.children,
          S = h.handleExited,
          b = h.firstRender;
        return { children: b ? jv(r, S) : Rv(r, y, S), firstRender: !1 };
      }),
      (d.handleExited = function (r, h) {
        var y = fr(this.props.children);
        r.key in y ||
          (r.props.onExited && r.props.onExited(h),
          this.mounted &&
            this.setState(function (S) {
              var b = Nm({}, S.children);
              return delete b[r.key], { children: b };
            }));
      }),
      (d.render = function () {
        var r = this.props,
          h = r.component,
          y = r.childFactory,
          S = T0(r, ['component', 'childFactory']),
          b = this.state.contextValue,
          x = _v(this.state.children).map(y);
        return (
          delete S.appear,
          delete S.enter,
          delete S.exit,
          h === null
            ? Rt.createElement(Ni.Provider, { value: b }, x)
            : Rt.createElement(
                Ni.Provider,
                { value: b },
                Rt.createElement(h, S, x)
              )
        );
      }),
      o
    );
  })(Rt.Component);
Ol.propTypes = {};
Ol.defaultProps = Uv;
const Q0 = [
  'bottom-center',
  'bottom-left',
  'bottom-right',
  'top-center',
  'top-left',
  'top-right',
];
function Bv(i, o) {
  return i.reduce(
    (d, f) => (d[f.position || o].push(f), d),
    Q0.reduce((d, f) => ((d[f] = []), d), {})
  );
}
const g0 = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    'top-center': 'translateY(-100%)',
    'bottom-center': 'translateY(100%)',
  },
  Hv = {
    left: 'translateX(0)',
    right: 'translateX(0)',
    'top-center': 'translateY(0)',
    'bottom-center': 'translateY(0)',
  };
function wv({ state: i, maxHeight: o, position: d, transitionDuration: f }) {
  const [r, h] = d.split('-'),
    y = h === 'center' ? `${r}-center` : h,
    S = {
      opacity: 0,
      maxHeight: o,
      transform: g0[y],
      transitionDuration: `${f}ms, ${f}ms, ${f}ms`,
      transitionTimingFunction:
        'cubic-bezier(.51,.3,0,1.21), cubic-bezier(.51,.3,0,1.21), linear',
      transitionProperty: 'opacity, transform, max-height',
    },
    b = { opacity: 1, transform: Hv[y] },
    x = { opacity: 0, maxHeight: 0, transform: g0[y] };
  return { ...S, ...{ entering: b, entered: b, exiting: x, exited: x }[i] };
}
function qv(i, o) {
  return typeof o == 'number' ? o : o === !1 || i === !1 ? !1 : i;
}
const K0 = g.forwardRef(({ data: i, onHide: o, autoClose: d, ...f }, r) => {
  const { autoClose: h, message: y, ...S } = i,
    b = qv(d, i.autoClose),
    x = g.useRef(-1),
    C = () => window.clearTimeout(x.current),
    _ = () => {
      o(i.id), C();
    },
    O = () => {
      typeof b == 'number' && (x.current = window.setTimeout(_, b));
    };
  return (
    g.useEffect(() => {
      var H;
      (H = i.onOpen) == null || H.call(i, i);
    }, []),
    g.useEffect(() => (O(), C), [b]),
    m.jsx(Cm, {
      ...f,
      ...S,
      onClose: _,
      ref: r,
      onMouseEnter: C,
      onMouseLeave: O,
      children: y,
    })
  );
});
K0.displayName = '@mantine/notifications/NotificationContainer';
var k0 = { root: 'm_b37d9ac7', notification: 'm_5ed0edd0' };
const Lv = tl,
  Gv = {
    position: 'bottom-right',
    autoClose: 4e3,
    transitionDuration: 250,
    containerWidth: 440,
    notificationMaxHeight: 200,
    limit: 5,
    zIndex: Dm('overlay'),
    store: Pl,
    withinPortal: !0,
  },
  Yv = Bm((i, { zIndex: o, containerWidth: d }) => ({
    root: {
      '--notifications-z-index': o == null ? void 0 : o.toString(),
      '--notifications-container-width': Hm(d),
    },
  })),
  ll = Am((i, o) => {
    const d = Mm('Notifications', Gv, i),
      {
        classNames: f,
        className: r,
        style: h,
        styles: y,
        unstyled: S,
        vars: b,
        position: x,
        autoClose: C,
        transitionDuration: _,
        containerWidth: O,
        notificationMaxHeight: H,
        limit: j,
        zIndex: Y,
        store: G,
        portalProps: B,
        withinPortal: w,
        ...L
      } = d,
      X = Om(),
      $ = Nv(G),
      pe = zm(),
      ie = jm(),
      ce = g.useRef({}),
      me = g.useRef(0),
      _e = (X.respectReducedMotion ? ie : !1) ? 1 : _,
      ve = Rm({
        name: 'Notifications',
        classes: k0,
        props: d,
        className: r,
        style: h,
        classNames: f,
        styles: y,
        unstyled: S,
        vars: b,
        varsResolver: Yv,
      });
    g.useEffect(() => {
      G == null ||
        G.updateState(Z => ({ ...Z, limit: j || 5, defaultPosition: x }));
    }, [j, x]),
      _m(() => {
        $.notifications.length > me.current && setTimeout(() => pe(), 0),
          (me.current = $.notifications.length);
      }, [$.notifications]);
    const st = Bv($.notifications, x),
      Le = Q0.reduce(
        (Z, D) => (
          (Z[D] = st[D].map(({ style: q, ...Q }) =>
            m.jsx(
              Lv,
              {
                timeout: _e,
                onEnter: () => ce.current[Q.id].offsetHeight,
                nodeRef: { current: ce.current[Q.id] },
                children: P =>
                  m.jsx(K0, {
                    ref: ae => {
                      ce.current[Q.id] = ae;
                    },
                    data: Q,
                    onHide: ae => X0(ae, G),
                    autoClose: C,
                    ...ve('notification', {
                      style: {
                        ...wv({
                          state: P,
                          position: D,
                          transitionDuration: _e,
                          maxHeight: H,
                        }),
                        ...q,
                      },
                    }),
                  }),
              },
              Q.id
            )
          )),
          Z
        ),
        {}
      );
    return m.jsxs(Um, {
      withinPortal: w,
      ...B,
      children: [
        m.jsx(Dl, {
          ...ve('root'),
          'data-position': 'top-center',
          ref: o,
          ...L,
          children: m.jsx(Ol, { children: Le['top-center'] }),
        }),
        m.jsx(Dl, {
          ...ve('root'),
          'data-position': 'top-left',
          ...L,
          children: m.jsx(Ol, { children: Le['top-left'] }),
        }),
        m.jsx(Dl, {
          ...ve('root', { className: l0.classNames.fullWidth }),
          'data-position': 'top-right',
          ...L,
          children: m.jsx(Ol, { children: Le['top-right'] }),
        }),
        m.jsx(Dl, {
          ...ve('root', { className: l0.classNames.fullWidth }),
          'data-position': 'bottom-right',
          ...L,
          children: m.jsx(Ol, { children: Le['bottom-right'] }),
        }),
        m.jsx(Dl, {
          ...ve('root'),
          'data-position': 'bottom-left',
          ...L,
          children: m.jsx(Ol, { children: Le['bottom-left'] }),
        }),
        m.jsx(Dl, {
          ...ve('root'),
          'data-position': 'bottom-center',
          ...L,
          children: m.jsx(Ol, { children: Le['bottom-center'] }),
        }),
      ],
    });
  });
ll.classes = k0;
ll.displayName = '@mantine/notifications/Notifications';
ll.show = Qa.show;
ll.hide = Qa.hide;
ll.update = Qa.update;
ll.clean = Qa.clean;
ll.cleanQueue = Qa.cleanQueue;
ll.updateState = Qa.updateState;
function Vv() {
  const i = Ht(),
    [o, d] = g.useState(!1);
  async function f(r) {
    const h = localStorage.getItem('userId');
    if (!h) throw new Error('Not logged in');
    d(!0);
    try {
      const y = await fetch('/api/users/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: h, ...r }),
        }),
        S = await y.json();
      if (!y.ok) throw new Error(S.error || 'Update failed');
      i('/profile');
    } catch (y) {
      $e({
        title: 'Update failed',
        message: y.message,
        color: 'red',
        position: 'top-center',
      });
    } finally {
      d(!1);
    }
  }
  return { updateUser: f, loading: o };
}
const J0 =
    "data:image/svg+xml,%3csvg%20width='29'%20height='32'%20viewBox='0%200%2029%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.2437%2028.2341H5.58233C5.29597%2028.2358%205.0191%2028.1314%204.80518%2027.941C4.59126%2027.7506%204.45546%2027.4878%204.42396%2027.2031L3.50886%2013.4707C3.50403%2013.3173%203.53069%2013.1645%203.58719%2013.0218C3.6437%2012.879%203.72885%2012.7494%203.83739%2012.6409C3.94593%2012.5323%204.07557%2012.4472%204.21829%2012.3907C4.36101%2012.3342%204.5138%2012.3075%204.66723%2012.3123H25.3499C25.6571%2012.3123%2025.9518%2012.4344%2026.169%2012.6516C26.3863%2012.8688%2026.5083%2013.1635%2026.5083%2013.4707L25.4021%2027.2147C25.3679%2027.4973%2025.2309%2027.7573%2025.0173%2027.9453C24.8036%2028.1334%2024.5283%2028.2361%2024.2437%2028.2341Z'%20fill='%23FBFBFB'%20stroke='%23FBFBFB'%20stroke-width='2.40407'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.21387%2016.0713V9.70029C9.21387%208.1642%209.82409%206.69102%2010.9103%205.60483C11.9965%204.51865%2013.4696%203.90845%2015.0057%203.90845C16.5418%203.90845%2018.015%204.51865%2019.1012%205.60483C20.1874%206.69102%2020.7976%208.1642%2020.7976%209.70029V16.0713'%20stroke='%23FBFBFB'%20stroke-width='2.40407'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Xv =
    "data:image/svg+xml,%3csvg%20width='8'%20height='13'%20viewBox='0%200%208%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='8'%20height='13'%20fill='%231E1E1E'/%3e%3cg%20id='Scenario%202%20-%20Buy%20a%20look'%3e%3cpath%20d='M-1845%20-4156C-1845%20-4157.1%20-1844.1%20-4158%20-1843%20-4158H6467C6468.1%20-4158%206469%20-4157.1%206469%20-4156V1781C6469%201782.1%206468.1%201783%206467%201783H-1843C-1844.1%201783%20-1845%201782.1%20-1845%201781V-4156Z'%20fill='%23444444'/%3e%3cpath%20d='M-1843%20-4157H6467V-4159H-1843V-4157ZM6468%20-4156V1781H6470V-4156H6468ZM6467%201782H-1843V1784H6467V1782ZM-1844%201781V-4156H-1846V1781H-1844ZM-1843%201782C-1843.55%201782%20-1844%201781.55%20-1844%201781H-1846C-1846%201782.66%20-1844.66%201784%20-1843%201784V1782ZM6468%201781C6468%201781.55%206467.55%201782%206467%201782V1784C6468.66%201784%206470%201782.66%206470%201781H6468ZM6467%20-4157C6467.55%20-4157%206468%20-4156.55%206468%20-4156H6470C6470%20-4157.66%206468.66%20-4159%206467%20-4159V-4157ZM-1843%20-4159C-1844.66%20-4159%20-1846%20-4157.66%20-1846%20-4156H-1844C-1844%20-4156.55%20-1843.55%20-4157%20-1843%20-4157V-4159Z'%20fill='white'%20fill-opacity='0.1'/%3e%3cg%20id='Look%20page'%20clip-path='url(%23clip0_874_4709)'%3e%3crect%20width='412'%20height='2143'%20transform='translate(-370%20-2081)'%20fill='%23E5DFDF'/%3e%3cg%20id='whole%20page'%3e%3cg%20id='everything'%3e%3cg%20id='Body'%3e%3cg%20id='Reviews'%3e%3cg%20id='Frame%20117'%3e%3cg%20id='Frame%20116'%20filter='url(%23filter0_d_874_4709)'%3e%3crect%20x='-109'%20y='-11'%20width='129'%20height='34'%20rx='17'%20fill='%23AA1DA4'/%3e%3cg%20id='Frame%2061'%3e%3cg%20id='Chevron'%3e%3cg%20id='Frame%20318'%3e%3cg%20id='Next'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M1.34985%2011.3003L6.65004%206.28008L1.48398%201.22998'%20stroke='%23FBFBFB'%20stroke-width='2.07523'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_874_4709'%20x='-113'%20y='-11'%20width='137'%20height='42'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.18%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_874_4709'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_874_4709'%20result='shape'/%3e%3c/filter%3e%3cclipPath%20id='clip0_874_4709'%3e%3crect%20width='412'%20height='2143'%20fill='white'%20transform='translate(-370%20-2081)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Zv =
    "data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.7787%208.73774H33.0001'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%208.73774H17.8795'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.1445%2010.4755C26.0872%2010.4755%2026.8515%209.69751%2026.8515%208.73776C26.8515%207.77801%2026.0872%206.99998%2025.1445%206.99998C24.2017%206.99998%2023.4375%207.77801%2023.4375%208.73776C23.4375%209.69751%2024.2017%2010.4755%2025.1445%2010.4755Z'%20fill='%232D2D2D'%20stroke='%232D2D2D'%20stroke-width='3.59562'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.7787%2030.1511H33.0001'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2030.1511H17.8795'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.1445%2031.8889C26.0872%2031.8889%2026.8515%2031.1108%2026.8515%2030.1511C26.8515%2029.1913%2026.0872%2028.4133%2025.1445%2028.4133C24.2017%2028.4133%2023.4375%2029.1913%2023.4375%2030.1511C23.4375%2031.1108%2024.2017%2031.8889%2025.1445%2031.8889Z'%20fill='%232D2D2D'%20stroke='%232D2D2D'%20stroke-width='3.59562'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.2213%2019.4444H5'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.0001%2019.4444H20.1205'%20stroke='%232D2D2D'%20stroke-width='2.48889'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12.8555%2021.1822C13.7983%2021.1822%2014.5625%2020.4042%2014.5625%2019.4444C14.5625%2018.4847%2013.7983%2017.7067%2012.8555%2017.7067C11.9128%2017.7067%2011.1485%2018.4847%2011.1485%2019.4444C11.1485%2020.4042%2011.9128%2021.1822%2012.8555%2021.1822Z'%20fill='%232D2D2D'%20stroke='%232D2D2D'%20stroke-width='3.59562'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Qv =
    "data:image/svg+xml,%3csvg%20width='38'%20height='38'%20viewBox='0%200%2038%2038'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.4657%2029.8149L7%2030.3939L8.14433%2023.4728L23.3722%208.30695C24.2098%207.47009%2025.3454%207%2026.5295%207C27.7135%207%2028.8491%207.47009%2029.6867%208.30695V8.30695C30.103%208.72137%2030.4332%209.21391%2030.6586%209.75631C30.884%2010.2987%2031%2010.8803%2031%2011.4677C31%2012.055%2030.884%2012.6366%2030.6586%2013.179C30.4332%2013.7214%2030.103%2014.2139%2029.6867%2014.6283L14.4657%2029.8149Z'%20stroke='%232D2D2D'%20stroke-width='3.44678'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.897%2010.2234L27.7427%2016.0691'%20stroke='%232D2D2D'%20stroke-width='3.44678'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",
  Kv =
    "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Facebook'%3e%3crect%20width='26'%20height='26'%20rx='13'%20fill='%231877F2'/%3e%3cpath%20id='Vector'%20d='M18.0604%2016.7578L18.6367%2013H15.0312V10.5625C15.0312%209.53418%2015.534%208.53125%2017.1488%208.53125H18.7891V5.33203C18.7891%205.33203%2017.3012%205.07812%2015.8793%205.07812C12.9086%205.07812%2010.9688%206.87832%2010.9688%2010.1359V13H7.66797V16.7578H10.9688V25.8426C11.6314%2025.9467%2012.3094%2026%2013%2026C13.6906%2026%2014.3686%2025.9467%2015.0312%2025.8426V16.7578H18.0604Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",
  kv =
    "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Google'%20clip-path='url(%23clip0_881_5703)'%3e%3cg%20id='Group'%3e%3cpath%20id='Shape'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.48%2013.2955C25.48%2012.3737%2025.3973%2011.4873%2025.2436%2010.6364H13V15.665H19.9964C19.695%2017.29%2018.7791%2018.6668%2017.4023%2019.5887V22.8505H21.6036C24.0618%2020.5873%2025.48%2017.2546%2025.48%2013.2955Z'%20fill='%234285F4'/%3e%3cpath%20id='Shape_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0001%2026C16.5101%2026%2019.4528%2024.8359%2021.6037%2022.8505L17.4024%2019.5886C16.2383%2020.3686%2014.7492%2020.8295%2013.0001%2020.8295C9.61418%2020.8295%206.74827%2018.5427%205.72599%2015.47H1.38281V18.8382C3.5219%2023.0868%207.91827%2026%2013.0001%2026Z'%20fill='%2334A853'/%3e%3cpath%20id='Shape_3'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.72591%2015.47C5.46591%2014.69%205.31818%2013.8568%205.31818%2013C5.31818%2012.1432%205.46591%2011.31%205.72591%2010.53V7.16183H1.38273C0.502273%208.91683%200%2010.9023%200%2013C0%2015.0977%200.502273%2017.0832%201.38273%2018.8382L5.72591%2015.47Z'%20fill='%23FBBC05'/%3e%3cpath%20id='Shape_4'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.0001%205.17045C14.9087%205.17045%2016.6224%205.82636%2017.9696%207.11455L21.6983%203.38591C19.4469%201.28818%2016.5042%200%2013.0001%200C7.91827%200%203.5219%202.91318%201.38281%207.16182L5.72599%2010.53C6.74827%207.45727%209.61418%205.17045%2013.0001%205.17045Z'%20fill='%23EA4335'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_881_5703'%3e%3crect%20width='26'%20height='26'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Jv =
    "data:image/svg+xml,%3csvg%20width='21'%20height='26'%20viewBox='0%200%2021%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon%20/%20Apple'%3e%3cpath%20id='&%23239;&%23163;&%23191;'%20d='M10.0395%205.7C11.1211%205.7%2012.477%204.94628%2013.2844%203.94132C14.0156%203.03058%2014.5488%201.75868%2014.5488%200.486776C14.5488%200.314049%2014.5336%200.141322%2014.5031%200C13.2996%200.0471075%2011.8523%200.832231%2010.984%201.8843C10.2984%202.68512%209.67383%203.94132%209.67383%205.22893C9.67383%205.41736%209.7043%205.60579%209.71953%205.6686C9.7957%205.6843%209.91758%205.7%2010.0395%205.7ZM6.23086%2024.7C7.70859%2024.7%208.36367%2023.6793%2010.207%2023.6793C12.0809%2023.6793%2012.4922%2024.6686%2014.1375%2024.6686C15.7523%2024.6686%2016.834%2023.1298%2017.8547%2021.6223C18.9973%2019.895%2019.4695%2018.1992%2019.5%2018.1207C19.3934%2018.0893%2016.3008%2016.786%2016.3008%2013.1273C16.3008%209.95537%2018.7383%208.52645%2018.8754%208.41653C17.2605%206.02975%2014.8078%205.96694%2014.1375%205.96694C12.3246%205.96694%2010.8469%207.09752%209.91758%207.09752C8.91211%207.09752%207.58672%206.02975%206.01758%206.02975C3.03164%206.02975%200%208.57355%200%2013.3785C0%2016.362%201.12734%2019.5182%202.51367%2021.5595C3.70195%2023.2868%204.73789%2024.7%206.23086%2024.7Z'%20fill='%230B0B0B'/%3e%3c/g%3e%3c/svg%3e";
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Wv = {
  outline: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  filled: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    stroke: 'none',
  },
};
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ka = (i, o, d, f) => {
  const r = g.forwardRef(
    (
      {
        color: h = 'currentColor',
        size: y = 24,
        stroke: S = 2,
        title: b,
        className: x,
        children: C,
        ..._
      },
      O
    ) =>
      g.createElement(
        'svg',
        {
          ref: O,
          ...Wv[i],
          width: y,
          height: y,
          className: ['tabler-icon', `tabler-icon-${o}`, x].join(' '),
          ...(i === 'filled' ? { fill: h } : { strokeWidth: S, stroke: h }),
          ..._,
        },
        [
          b && g.createElement('title', { key: 'svg-title' }, b),
          ...f.map(([H, j]) => g.createElement(H, j)),
          ...(Array.isArray(C) ? C : [C]),
        ]
      )
  );
  return (r.displayName = `${d}`), r;
};
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var $v = Ka('outline', 'chevron-left', 'IconChevronLeft', [
  ['path', { d: 'M15 6l-6 6l6 6', key: 'svg-0' }],
]);
function Ty({ onClick: i, ...o }) {
  return m.jsx(Je, {
    classNames: { root: 'add-to-basket-icon-button' },
    leftSection: m.jsx('img', {
      src: J0,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    onClick: i,
    ...o,
    children: 'Add to basket',
  });
}
function Ny(i) {
  return m.jsx(Je, {
    classNames: { root: 'see-reviews-icon-button' },
    leftSection: m.jsx('img', {
      src: Xv,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'See reviews',
  });
}
function Cy(i) {
  return m.jsx(Je, {
    classNames: { root: 'filter-icon-button' },
    leftSection: m.jsx('img', {
      src: Zv,
      alt: '',
      'aria-hidden': 'true',
      width: 25,
      height: 25,
    }),
    ...i,
    children: 'Filter',
  });
}
function Ay(i) {
  return m.jsx(Je, {
    classNames: { root: 'leave-a-review-icon-button' },
    leftSection: m.jsx('img', {
      src: Qv,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'Leave a review',
  });
}
function My(i) {
  return m.jsx(Je, {
    classNames: { root: 'repurchase-icon-button' },
    leftSection: m.jsx('img', {
      src: J0,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'Repurchase',
  });
}
function Fv(i) {
  return m.jsx(Je, {
    classNames: { root: 'continue-with-facebook-icon-button' },
    leftSection: m.jsx('img', {
      src: Kv,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'Continue with Facebook',
  });
}
function Pv(i) {
  return m.jsx(Je, {
    classNames: { root: 'continue-with-google-icon-button' },
    leftSection: m.jsx('img', {
      src: kv,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'Continue with Google',
  });
}
function Dy(i) {
  return m.jsx(Je, {
    classNames: { root: 'continue-with-apple-icon-button' },
    leftSection: m.jsx('img', {
      src: Jv,
      alt: '',
      'aria-hidden': 'true',
      width: 16,
      height: 16,
    }),
    ...i,
    children: 'Continue with Apple',
  });
}
function Il({ onClick: i, ...o }) {
  const d = Ht(),
    f = r => {
      i ? i(r) : d(-1);
    };
  return m.jsx('button', {
    className: 'back-icon-button',
    onClick: f,
    'aria-label': 'Go back',
    ...o,
    children: m.jsx($v, { size: 20, stroke: 2 }),
  });
}
function Oy({ text: i, onBack: o, backButtonStyle: d }) {
  return m.jsxs('div', {
    className: 'back-header',
    children: [
      m.jsx(Il, { onClick: o, style: d }),
      m.jsx(Pt, { order: 2, children: i }),
    ],
  });
}
function zy(i) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'checkout-button' },
    ...i,
    children: 'Check-out',
  });
}
function jy(i) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'confirm-purchase-button' },
    ...i,
    children: 'Confirm Purchase',
  });
}
function Ry(i) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'log-in-button' },
    ...i,
    children: 'Log in',
  });
}
function _y(i) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'white-log-in-button' },
    ...i,
    children: 'Log in',
  });
}
function Iv(i) {
  return m.jsx(Oi, {
    to: '/signup',
    prefetch: 'intent',
    style: { textDecoration: 'none' },
    children: m.jsx(Je, {
      classNames: { root: 'sign-up-button' },
      ...i,
      children: 'Sign up',
    }),
  });
}
function W0({ text: i = 'Continue', ...o }) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'continue-button' },
    ...o,
    children: i,
  });
}
function Uy(i) {
  return m.jsx(Je, {
    type: 'button',
    classNames: { root: 'more-info-button' },
    ...i,
    children: 'More info',
  });
}
function eu(i) {
  return m.jsx('div', {
    className: 'bottom-bar',
    children: m.jsx(W0, { ...i }),
  });
}
function $0() {
  const i = Ht(),
    { updateUser: o, loading: d } = Vv(),
    [f, r] = g.useState(''),
    [h, y] = g.useState(''),
    [S, b] = g.useState(''),
    [x, C] = g.useState(''),
    [_, O] = g.useState(''),
    [H, j] = g.useState(''),
    [Y, G] = g.useState([]),
    [B, w] = g.useState(!1);
  g.useEffect(() => {
    const X = sessionStorage.getItem('countries');
    if (X) {
      G(JSON.parse(X));
      return;
    }
    w(!0),
      fetch('https://restcountries.com/v3.1/all?fields=name')
        .then($ => $.json())
        .then($ => {
          const pe = $.map(ie => ie.name.common).sort((ie, ce) =>
            ie.localeCompare(ce)
          );
          G(pe), sessionStorage.setItem('countries', JSON.stringify(pe));
        })
        .catch($ => {
          console.error('Failed to fetch countries', $);
        })
        .finally(() => {
          w(!1);
        });
  }, []);
  const L = async () => {
    const X = `${h} ${S}, ${x}, ${f}`;
    try {
      await o({
        address_1: X,
        phone: _,
        birthdate: H || null,
        country: f || null,
      }),
        i('/homescreen');
    } catch ($) {
      console.error('Failed to update user', $);
    }
  };
  return m.jsxs('div', {
    className: 'personal-info-page',
    children: [
      m.jsx(Il, {}),
      m.jsx(zi, { active: 2 }),
      m.jsxs('div', {
        className: 'personal-form',
        style: { marginTop: '2rem' },
        children: [
          m.jsx('h2', { children: 'Personal information' }),
          m.jsxs('div', {
            className: 'step-description',
            children: [
              m.jsx('p', {
                children:
                  'Press "Confirm & Continue" if you wish to skip this part.',
              }),
              m.jsx('p', {
                children:
                  'Your addresses can always be edited in the profile settings.',
              }),
            ],
          }),
          m.jsx(N0, {
            label: 'Country',
            placeholder: 'Select your country',
            data: Y,
            value: f,
            onChange: r,
            searchable: !0,
            nothingFoundMessage: 'No country found',
            rightSection: B ? m.jsx(Ci, { size: 'xs' }) : null,
            mt: 'md',
          }),
          m.jsx(Qe, {
            label: 'Street',
            placeholder: 'Enter street name',
            value: h,
            onChange: X => y(X.currentTarget.value),
            mt: 'md',
          }),
          m.jsxs(Ai, {
            grow: !0,
            children: [
              m.jsx(Qe, {
                label: 'House Number',
                placeholder: 'e.g. 12A',
                value: S,
                onChange: X => b(X.currentTarget.value),
                mt: 'md',
              }),
              m.jsx(Qe, {
                label: 'Postal Code',
                placeholder: 'e.g. 1000',
                value: x,
                onChange: X => C(X.currentTarget.value),
                mt: 'md',
              }),
            ],
          }),
          m.jsx(Qe, {
            label: 'Phone number',
            placeholder: 'Enter your phone number',
            value: _,
            onChange: X => O(X.currentTarget.value),
            mt: 'md',
          }),
          m.jsx(Qe, {
            label: 'Date of Birth',
            type: 'date',
            value: H,
            onChange: X => j(X.currentTarget.value),
            mt: 'md',
          }),
          m.jsx(eu, { text: 'Confirm & Continue', onClick: L, loading: d }),
        ],
      }),
    ],
  });
}
const By = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $0 },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  p0 = 'shippingAddress';
function ey() {
  const i = Ht(),
    o = JSON.parse(localStorage.getItem(p0) || '{}'),
    [d, f] = g.useState(o.country || ''),
    [r, h] = g.useState(o.street || ''),
    [y, S] = g.useState(o.houseNumber || ''),
    [b, x] = g.useState(o.postalCode || ''),
    [C, _] = g.useState(o.phone || ''),
    [O, H] = g.useState([]),
    [j, Y] = g.useState(!1);
  g.useEffect(() => {
    const B = {
      country: d,
      street: r,
      houseNumber: y,
      postalCode: b,
      phone: C,
    };
    localStorage.setItem(p0, JSON.stringify(B));
  }, [d, r, y, b, C]),
    g.useEffect(() => {
      const B = sessionStorage.getItem('countries');
      if (B) {
        H(JSON.parse(B));
        return;
      }
      Y(!0),
        fetch('https://restcountries.com/v3.1/all?fields=name')
          .then(w => w.json())
          .then(w => {
            const L = w
              .map(X => X.name.common)
              .sort((X, $) => X.localeCompare($));
            H(L), sessionStorage.setItem('countries', JSON.stringify(L));
          })
          .catch(w => console.error('Failed to fetch countries', w))
          .finally(() => Y(!1));
    }, []);
  const G = () => {
    if (!d || !r || !y || !b || !C) {
      $e({
        title: 'Missing Fields',
        message: 'Please complete all address fields.',
        color: 'red',
        position: 'top-center',
      });
      return;
    }
    i('/checkout/payment-method');
  };
  return m.jsxs('div', {
    className: 'address-page',
    children: [
      m.jsx(Il, {}),
      m.jsx(zi, { active: 1 }),
      m.jsxs('div', {
        className: 'personal-form',
        children: [
          m.jsx(Pt, { order: 3, children: 'Shipping Address' }),
          m.jsx(N0, {
            label: 'Country',
            placeholder: 'Select your country',
            data: O,
            value: d,
            onChange: f,
            searchable: !0,
            nothingFoundMessage: 'No country found',
            rightSection: j ? m.jsx(Ci, { size: 'xs' }) : null,
            mt: 'md',
            required: !0,
          }),
          m.jsx(Qe, {
            label: 'Street',
            placeholder: 'Enter street name',
            value: r,
            onChange: B => h(B.currentTarget.value),
            mt: 'md',
            required: !0,
          }),
          m.jsxs(Ai, {
            grow: !0,
            children: [
              m.jsx(Qe, {
                label: 'House Number',
                placeholder: 'e.g. 12A',
                value: y,
                onChange: B => S(B.currentTarget.value),
                mt: 'md',
                required: !0,
              }),
              m.jsx(Qe, {
                label: 'Postal Code',
                placeholder: 'e.g. 1000',
                value: b,
                onChange: B => x(B.currentTarget.value),
                mt: 'md',
                required: !0,
              }),
            ],
          }),
          m.jsx(Qe, {
            label: 'Phone number',
            placeholder: 'Enter your phone number',
            value: C,
            onChange: B => _(B.currentTarget.value),
            mt: 'md',
            required: !0,
          }),
          m.jsx(eu, { text: 'Confirm & Continue', onClick: G }),
        ],
      }),
    ],
  });
}
const S0 = async () => {
  const { initializeApp: i } = await xt(
      async () => {
        const { initializeApp: C } = await import('./index.esm-DF9lrgu6.js');
        return { initializeApp: C };
      },
      __vite__mapDeps([0, 1])
    ),
    {
      getAuth: o,
      GoogleAuthProvider: d,
      FacebookAuthProvider: f,
      signInWithPopup: r,
      signInWithEmailAndPassword: h,
      createUserWithEmailAndPassword: y,
    } = await xt(
      async () => {
        const {
          getAuth: C,
          GoogleAuthProvider: _,
          FacebookAuthProvider: O,
          signInWithPopup: H,
          signInWithEmailAndPassword: j,
          createUserWithEmailAndPassword: Y,
        } = await import('./index.esm-BoZj0zIi.js');
        return {
          getAuth: C,
          GoogleAuthProvider: _,
          FacebookAuthProvider: O,
          signInWithPopup: H,
          signInWithEmailAndPassword: j,
          createUserWithEmailAndPassword: Y,
        };
      },
      __vite__mapDeps([2, 1, 3])
    ),
    b = i({
      apiKey: 'AIzaSyCB6zO-qCX0B92sHgh1FI8_2iZ3pTERYzQ',
      authDomain: 'rouge-e249d.firebaseapp.com',
      projectId: 'rouge-e249d',
      storageBucket: 'rouge-e249d.appspot.com',
      messagingSenderId: '227400891514',
      appId: '1:227400891514:web:40db4c3e1576d060f74fc3',
    });
  return {
    auth: o(b),
    googleProvider: new d(),
    facebookProvider: new f(),
    signInWithPopup: r,
    signInWithEmailAndPassword: h,
    createUserWithEmailAndPassword: y,
  };
};
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ty = Ka('outline', 'eye', 'IconEye', [
  ['path', { d: 'M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0', key: 'svg-0' }],
  [
    'path',
    {
      d: 'M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6',
      key: 'svg-1',
    },
  ],
]);
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ly = Ka('outline', 'eye-off', 'IconEyeOff', [
  ['path', { d: 'M10.585 10.587a2 2 0 0 0 2.829 2.828', key: 'svg-0' }],
  [
    'path',
    {
      d: 'M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87',
      key: 'svg-1',
    },
  ],
  ['path', { d: 'M3 3l18 18', key: 'svg-2' }],
]);
const b0 = 'personalInfo';
function ay() {
  const [i, o] = g.useState(''),
    [d, f] = g.useState(''),
    [r, h] = g.useState(''),
    [y, S] = g.useState(''),
    [b, x] = g.useState(''),
    [C, _] = g.useState(!1),
    [O, H] = g.useState(''),
    [j, Y] = g.useState(''),
    [G, B] = g.useState(!1),
    [w, L] = g.useState(!1),
    [X, $] = g.useState(''),
    [pe, ie] = g.useState(''),
    [ce, me] = g.useState(''),
    Re = Ht(),
    { setPersonalInfo: _e } = V0();
  g.useEffect(() => {
    const Z = JSON.parse(localStorage.getItem(b0) || '{}');
    Z.firstName && o(Z.firstName),
      Z.lastName && f(Z.lastName),
      Z.email && h(Z.email),
      Z.companyName && H(Z.companyName),
      Z.vatNumber && Y(Z.vatNumber),
      Z.addGiftWrap != null && B(Z.addGiftWrap),
      Z.addPersonalCard != null && L(Z.addPersonalCard),
      Z.friendName && $(Z.friendName),
      Z.friendEmail && ie(Z.friendEmail),
      Z.personalNote && me(Z.personalNote);
  }, []);
  const ve = Z => {
      _e(Z),
        localStorage.setItem(b0, JSON.stringify(Z)),
        Re('/checkout/friend-info');
    },
    st = async () => {
      if (!i || !d || !r || !y || !b) {
        $e({
          title: 'Missing Fields',
          message: 'Please fill out all fields.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (!r.includes('@') || !r.includes('.')) {
        $e({
          title: 'Invalid Email',
          message: 'Please enter a valid email address.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (y.length < 6) {
        $e({
          title: 'Weak Password',
          message: 'Password must be at least 6 characters.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      if (y !== b) {
        $e({
          title: 'Password Mismatch',
          message: 'Passwords do not match.',
          color: 'red',
          position: 'top-center',
        });
        return;
      }
      try {
        const { auth: Z, createUserWithEmailAndPassword: D } = await S0(),
          Q = (await D(Z, r, y)).user;
        $e({
          title: 'Signed up!',
          message: `Welcome ${Q.displayName || i}!`,
          color: 'green',
          position: 'top-center',
        }),
          ve({
            firstName: i,
            lastName: d,
            email: r,
            companyName: O,
            vatNumber: j,
            addGiftWrap: G,
            addPersonalCard: w,
            friendName: X,
            friendEmail: pe,
            personalNote: ce,
          });
      } catch (Z) {
        $e({
          title: 'Sign-up error',
          message: Z.message,
          color: 'red',
          position: 'top-center',
        });
      }
    },
    Le = async (Z, D) => {
      try {
        const { auth: q, signInWithPopup: Q } = await S0(),
          ae = (await Q(q, Z)).user,
          Ge = {
            firstName: ae.displayName || '',
            lastName: '',
            email: ae.email || '',
            companyName: '',
            vatNumber: '',
            addGiftWrap: !1,
            addPersonalCard: !1,
            friendName: '',
            friendEmail: '',
            personalNote: '',
          };
        $e({
          title: `Logged in with ${D}`,
          message: `Welcome ${ae.displayName || 'back'}!`,
          color: 'green',
          position: 'top-center',
        }),
          ve(Ge);
      } catch (q) {
        $e({
          title: `${D} sign-in error`,
          message: q.message,
          color: 'red',
          position: 'top-center',
        });
      }
    };
  return m.jsxs('div', {
    className: 'signup-page',
    children: [
      m.jsx(Il, {}),
      m.jsx('h2', { children: 'Account' }),
      m.jsxs('div', {
        className: 'step-description',
        children: [
          m.jsx('p', {
            style: { color: 'red', fontWeight: 'bold' },
            children: 'Before proceeding!',
          }),
          m.jsx('p', {
            children:
              "Seems like you don't have an account or aren't logged in!",
          }),
        ],
      }),
      m.jsx(Qe, {
        label: 'First Name',
        placeholder: 'Your first name',
        value: i,
        onChange: Z => o(Z.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      m.jsx(Qe, {
        label: 'Last Name',
        placeholder: 'Your last name',
        value: d,
        onChange: Z => f(Z.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      m.jsx(Qe, {
        label: 'Email',
        placeholder: 'Your email...',
        value: r,
        onChange: Z => h(Z.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      m.jsx(a0, {
        label: 'Password',
        placeholder: 'Enter your password...',
        visible: C,
        onVisibilityChange: () => _(!C),
        visibilityToggleIcon: ({ reveal: Z }) =>
          Z ? m.jsx(ly, { size: 16 }) : m.jsx(ty, { size: 16 }),
        value: y,
        onChange: Z => S(Z.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      m.jsx(a0, {
        label: 'Confirm Password',
        placeholder: 'Confirm your password',
        value: b,
        onChange: Z => x(Z.currentTarget.value),
        className: 'input-field',
        required: !0,
      }),
      m.jsx(Iv, { fullWidth: !0, onClick: st }),
      m.jsxs('div', {
        className: 'social-register-section',
        children: [
          m.jsx(Jn, {
            className: 'social-divider',
            label: 'Or log in with',
            labelPosition: 'center',
          }),
          m.jsxs('div', {
            className: 'social-buttons',
            children: [
              m.jsx(Fv, {
                fullWidth: !0,
                onClick: () => Le(facebookProvider, 'Facebook'),
              }),
              m.jsx(Pv, {
                fullWidth: !0,
                onClick: () => Le(googleProvider, 'Google'),
              }),
              m.jsx('div', {
                className: 'login-link',
                children: m.jsx(Oi, {
                  to: '/login',
                  children: 'Already have an account? Log in',
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ny = Ka('outline', 'brand-apple', 'IconBrandApple', [
  [
    'path',
    {
      d: 'M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z',
      key: 'svg-0',
    },
  ],
  ['path', { d: 'M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2', key: 'svg-1' }],
]);
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var uy = Ka('outline', 'brand-paypal', 'IconBrandPaypal', [
  [
    'path',
    {
      d: 'M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4',
      key: 'svg-0',
    },
  ],
]);
/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */ var x0 = Ka('outline', 'credit-card', 'IconCreditCard', [
  [
    'path',
    {
      d: 'M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z',
      key: 'svg-0',
    },
  ],
  ['path', { d: 'M3 10l18 0', key: 'svg-1' }],
  ['path', { d: 'M7 15l.01 0', key: 'svg-2' }],
  ['path', { d: 'M11 15l2 0', key: 'svg-3' }],
]);
const E0 = 'paymentMethod';
function iy() {
  const i = Ht(),
    o = JSON.parse(localStorage.getItem(E0) || '{}'),
    [d, f] = g.useState(o.method || ''),
    [r, h] = g.useState(o.cardName || ''),
    [y, S] = g.useState(o.cardNumber || ''),
    [b, x] = g.useState(o.cvc || ''),
    [C, _] = g.useState(!1);
  g.useEffect(() => {
    const w = { method: d, cardName: r, cardNumber: y, cvc: b };
    localStorage.setItem(E0, JSON.stringify(w));
  }, [d, r, y, b]);
  const O = [
      {
        value: 'card',
        label: 'Credit / Debit Card',
        icon: m.jsx(x0, { size: 24 }),
      },
      { value: 'paypal', label: 'PayPal', icon: m.jsx(uy, { size: 24 }) },
      { value: 'klarna', label: 'Klarna', icon: m.jsx(x0, { size: 24 }) },
      { value: 'applepay', label: 'Apple Pay', icon: m.jsx(ny, { size: 24 }) },
    ],
    H = w => {
      w === 'card' ? (_(!1), f(L => (L === w ? '' : w))) : (f(w), _(!0));
    },
    j = () => {
      _(!1), i('/checkout/summary');
    },
    Y = () => {
      d && ((d === 'card' && (!r || !y || !b)) || i('/checkout/summary'));
    },
    G = {
      paypal: 'Pay with PayPal',
      klarna: 'Pay with Klarna',
      applepay: 'Pay with Apple Pay',
    },
    B = {
      paypal: 'You will be redirected to PayPal to complete your purchase.',
      klarna: 'Proceed with Klarna to complete your payment.',
      applepay: 'Use Face ID or Touch ID to complete the payment.',
    };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs('div', {
        className: 'payment-method-page',
        children: [
          m.jsx(Il, {}),
          m.jsx(zi, { active: 2 }),
          m.jsx('h2', { children: 'Choose your payment method' }),
          m.jsxs(Dl, {
            className: 'payment-method-form',
            children: [
              m.jsx(Ai, {
                direction: 'row',
                spacing: 'sm',
                children: O.map(({ value: w, label: L, icon: X }) =>
                  m.jsxs(
                    wm,
                    {
                      withBorder: !0,
                      radius: 'md',
                      className: `payment-option ${d === w ? 'selected' : ''}`,
                      onClick: () => H(w),
                      children: [X, m.jsx(ge, { children: L })],
                    },
                    w
                  )
                ),
              }),
              d === 'card' &&
                m.jsxs(Dl, {
                  className: 'card-details',
                  children: [
                    m.jsx(Qe, {
                      label: 'Cardholder Name',
                      placeholder: 'John Doe',
                      value: r,
                      onChange: w => h(w.currentTarget.value),
                      mb: 'sm',
                    }),
                    m.jsx(Qe, {
                      label: 'Card Number',
                      placeholder: '1234 5678 9012 3456',
                      value: y,
                      onChange: w => S(w.currentTarget.value),
                      mb: 'sm',
                    }),
                    m.jsx(Qe, {
                      label: 'CVC',
                      placeholder: '123',
                      value: b,
                      onChange: w => x(w.currentTarget.value),
                      mb: 'sm',
                    }),
                  ],
                }),
              m.jsx(eu, {
                text: 'Continue',
                fullWidth: !0,
                disabled: !d || (d === 'card' && (!r || !y || !b)),
                onClick: Y,
              }),
            ],
          }),
        ],
      }),
      m.jsxs(qm, {
        opened: C,
        onClose: () => _(!1),
        title: G[d] || '',
        children: [
          m.jsx(ge, { mb: 'md', children: B[d] || '' }),
          m.jsx(W0, { fullWidth: !0, onClick: j, text: 'Authenticate' }),
        ],
      }),
    ],
  });
}
const Pf = 'personalInfo';
function cy() {
  const i = Ht(),
    { friendInfo: o, setFriendInfo: d } = V0(),
    f = JSON.parse(localStorage.getItem(Pf) || '{}'),
    r = {
      addGiftWrap: f.addGiftWrap ?? o.addGiftWrap ?? !1,
      addPersonalCard: f.addPersonalCard ?? o.addPersonalCard ?? !1,
      friendName: f.friendName ?? o.friendName ?? '',
      friendEmail: f.friendEmail ?? o.friendEmail ?? '',
      personalNote: f.personalNote ?? o.personalNote ?? '',
    },
    [h, y] = g.useState(r.addGiftWrap),
    [S, b] = g.useState(r.addPersonalCard),
    [x, C] = g.useState(r.friendName),
    [_, O] = g.useState(r.friendEmail),
    [H, j] = g.useState(r.personalNote),
    Y = 3.99,
    G = 2.99;
  g.useEffect(() => {
    const w = {
      addGiftWrap: h,
      addPersonalCard: S,
      friendName: x,
      friendEmail: _,
      personalNote: H,
    };
    d(w);
    const L = JSON.parse(localStorage.getItem(Pf) || '{}');
    localStorage.setItem(Pf, JSON.stringify({ ...L, ...w }));
  }, [h, S, x, _, H]);
  const B = () => {
    i('/checkout/address');
  };
  return m.jsxs('div', {
    className: 'forfriend-page',
    children: [
      m.jsx(Il, {}),
      m.jsx(zi, { active: 0 }),
      m.jsxs('div', {
        className: 'checkout-summary',
        children: [
          m.jsx('h2', { children: 'Buying for a friend' }),
          m.jsx('p', {
            children: "If you're buying for a friend fillout these.",
          }),
          m.jsx(Qe, {
            className: 'checkout-form',
            label: 'Name',
            placeholder: "Friend's name...",
            value: x,
            onChange: w => C(w.currentTarget.value),
            mt: 'sm',
          }),
          m.jsx(Qe, {
            className: 'checkout-form',
            label: 'Email',
            placeholder: "Friend's email...",
            type: 'email',
            value: _,
            onChange: w => O(w.currentTarget.value),
            mt: 'sm',
          }),
        ],
      }),
      m.jsxs('div', {
        className: 'additional',
        children: [
          m.jsx('h3', { children: 'Additional' }),
          m.jsxs('div', {
            className: 'checkboxes-part',
            children: [
              m.jsx(n0, {
                label: `🎁 Gift wrapping (€${Y.toFixed(2)})`,
                mt: 'md',
                checked: h,
                onChange: w => y(w.currentTarget.checked),
              }),
              m.jsx(n0, {
                label: `✉️ Personal card (€${G.toFixed(2)})`,
                mt: 'md',
                checked: S,
                onChange: w => b(w.currentTarget.checked),
              }),
            ],
          }),
          S &&
            m.jsx(Lm, {
              className: 'my-custom-textarea',
              label: 'Personal Note',
              placeholder: 'Write a message...',
              value: H,
              onChange: w => j(w.currentTarget.value),
              minRows: 3,
              autosize: !0,
              mt: 'sm',
            }),
          m.jsx(eu, { onClick: B }),
        ],
      }),
    ],
  });
}
function fy() {
  const i = Ht(),
    [o, d] = g.useState(!0);
  g.useEffect(() => {
    fetch('/api/basket', { method: 'DELETE' })
      .catch(console.error)
      .then(() => {
        localStorage.removeItem('basket'),
          localStorage.removeItem('personalInfo'),
          localStorage.removeItem('shippingAddress'),
          localStorage.removeItem('paymentMethod'),
          localStorage.setItem('resetBasket', 'true'),
          window.dispatchEvent(
            new StorageEvent('storage', { key: 'basket', newValue: null })
          );
      })
      .finally(() => d(!1));
  }, []);
  const f = () => {
    localStorage.setItem('basketRefresh', Date.now().toString()),
      i('/homescreen', { replace: !0 }),
      window.location.reload();
  };
  return m.jsx('div', {
    className: 'order-confirmation-screen',
    children: m.jsx('div', {
      className: 'confirmation-bubble',
      children: o
        ? m.jsxs(Ai, {
            direction: 'column',
            align: 'center',
            spacing: 'md',
            children: [
              m.jsx(Ci, {}),
              m.jsx(ge, { children: 'Finalizing your order…' }),
            ],
          })
        : m.jsxs(m.Fragment, {
            children: [
              m.jsx(Pt, { order: 3, children: 'Thank you for your order!' }),
              m.jsx(ge, {
                children:
                  'Your order has been received and is currently being processed.',
              }),
              m.jsxs(ge, {
                children: [
                  'You will receive an ',
                  m.jsx('strong', { children: 'email confirmation' }),
                  ' with tracking information soon.',
                ],
              }),
              m.jsx(Je, {
                className: 'continue-button',
                onClick: f,
                children: 'Continue shopping',
              }),
            ],
          }),
    }),
  });
}
function ry() {
  Ht();
  const [i, o] = g.useState(!1),
    d = JSON.parse(localStorage.getItem('personalInfo') || '{}'),
    f = JSON.parse(localStorage.getItem('shippingAddress') || '{}'),
    r = JSON.parse(localStorage.getItem('paymentMethod') || '{}'),
    {
      firstName: h,
      lastName: y,
      email: S,
      companyName: b,
      vatNumber: x,
      addGiftWrap: C,
      addPersonalCard: _,
      friendName: O,
      friendEmail: H,
      personalNote: j,
    } = d,
    { country: Y, street: G, houseNumber: B, postalCode: w, phone: L } = f,
    { method: X, cardName: $, cardNumber: pe } = r,
    [ie, ce] = g.useState([]),
    [me, Re] = g.useState(0),
    _e = 5,
    ve = C ? 3.99 : 0,
    st = _ ? 2.99 : 0,
    Le = (me + _e + ve + st).toFixed(2).replace('.', ',');
  g.useEffect(() => {
    fetch('http://localhost:8000/api/basket')
      .then(q => q.json())
      .then(q => {
        ce(q.items || []), Re(q.total_price || 0);
      })
      .catch(q => console.error('Failed to fetch basket:', q));
  }, []);
  const Z = {
      card: 'Credit / Debit card',
      paypal: 'PayPal',
      klarna: 'Klarna',
      applepay: 'Apple Pay',
    },
    D = async () => {
      if (!h || !y || !S) {
        $e({
          title: 'Missing info',
          message: 'Personal info incomplete',
          color: 'red',
        });
        return;
      }
      if (!Y || !G || !B || !w || !L) {
        $e({
          title: 'Missing info',
          message: 'Address incomplete',
          color: 'red',
        });
        return;
      }
      if (!X) {
        $e({
          title: 'Missing info',
          message: 'Payment method not selected',
          color: 'red',
        });
        return;
      }
      const q = ie.map(P => ({
          id: P.id,
          name: P.name,
          quantity: P.quantity,
          price: P.price,
        })),
        Q = {
          full_name: `${h} ${y}`,
          email: S,
          phone: L,
          address_1: `${G} ${B}`,
          address_2: '',
          company_name: b || '',
          vat_number: x || '',
          payment_method: X,
          is_gift: C ? 1 : 0,
          friend_name: O || null,
          friend_email: H || null,
          personal_note: j || null,
          items: q,
          shipping_cost: _e,
          gift_wrap_cost: ve,
          card_cost: st,
        };
      try {
        const P = await fetch('http://localhost:8000/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Q),
        });
        if (!P.ok) throw new Error(`Server responded ${P.status}`);
        localStorage.removeItem('personalInfo'),
          localStorage.removeItem('shippingAddress'),
          localStorage.removeItem('paymentMethod'),
          o(!0);
      } catch (P) {
        console.error(P),
          $e({
            title: 'Order failed',
            message: 'Could not submit order. Please try again.',
            color: 'red',
          });
      }
    };
  return i
    ? m.jsx(fy, {})
    : m.jsxs('div', {
        className: 'summary-page',
        children: [
          m.jsx(Il, {}),
          m.jsxs('div', {
            className: 'summary-top',
            children: [
              m.jsx('h2', { children: 'Review Your Order' }),
              m.jsx('p', {
                children:
                  'Before finalizing the purchase check if your information is correct!',
              }),
            ],
          }),
          m.jsxs('div', {
            className: 'checkout-overview',
            children: [
              m.jsxs('div', {
                className: 'checkout-personal-info',
                children: [
                  m.jsxs('div', {
                    className: 'section',
                    children: [
                      m.jsx(Pt, { order: 4, children: 'Personal information' }),
                      m.jsxs(ge, { children: [h, ' ', y] }),
                      m.jsx(ge, { children: S }),
                    ],
                  }),
                  m.jsxs('div', {
                    className: 'section',
                    children: [
                      m.jsx(Pt, { order: 4, children: 'Buying for a friend' }),
                      m.jsxs('div', {
                        className: 'friend-additional',
                        children: [
                          m.jsx(ge, {
                            children: C
                              ? '🎁 Gift wrapping added'
                              : 'No gift wrapping',
                          }),
                          m.jsx(ge, {
                            children: _
                              ? '✉️ Personal card added'
                              : 'No personal card',
                          }),
                        ],
                      }),
                      (C || _) &&
                        m.jsxs(m.Fragment, {
                          children: [
                            m.jsx(Jn, {}),
                            m.jsxs(ge, {
                              children: [
                                m.jsx('span', {
                                  className: 'subtitle-text',
                                  children: 'Name:',
                                }),
                                ' ',
                                O || '-',
                              ],
                            }),
                            m.jsxs(ge, {
                              children: [
                                m.jsx('span', {
                                  className: 'subtitle-text',
                                  children: 'Email:',
                                }),
                                ' ',
                                H || '-',
                              ],
                            }),
                            _ &&
                              m.jsxs(ge, {
                                children: [
                                  m.jsx('span', {
                                    className: 'subtitle-text',
                                    children: 'Note:',
                                  }),
                                  ' ',
                                  j || '-',
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                  m.jsxs('div', {
                    className: 'section',
                    children: [
                      m.jsx(Pt, { order: 4, children: 'Shipping information' }),
                      m.jsxs(ge, {
                        children: [
                          m.jsx('span', {
                            className: 'subtitle-text',
                            children: 'Address:',
                          }),
                          ' ',
                          G,
                          ' ',
                          B,
                          ', ',
                          w,
                          ', ',
                          Y,
                        ],
                      }),
                      m.jsxs(ge, {
                        children: [
                          m.jsx('span', {
                            className: 'subtitle-text',
                            children: 'Phone:',
                          }),
                          ' ',
                          L,
                        ],
                      }),
                      m.jsx(Jn, {}),
                      m.jsx(Pt, { order: 4, children: 'Payment method' }),
                      m.jsxs(ge, {
                        children: [
                          m.jsx('span', {
                            className: 'subtitle-text',
                            children: 'Method:',
                          }),
                          ' ',
                          Z[X] || '-',
                        ],
                      }),
                      X === 'card' &&
                        m.jsxs(m.Fragment, {
                          children: [
                            m.jsxs(ge, {
                              children: [
                                m.jsx('span', {
                                  className: 'subtitle-text',
                                  children: 'Cardholder:',
                                }),
                                ' ',
                                $,
                              ],
                            }),
                            m.jsxs(ge, {
                              children: [
                                m.jsx('span', {
                                  className: 'subtitle-text',
                                  children: 'Card number:',
                                }),
                                ' **** **** **** ',
                                pe.slice(-4),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              m.jsxs('div', {
                className: 'checkout-order-info',
                children: [
                  m.jsx(Pt, { order: 4, children: 'Order summary' }),
                  ie.map(q =>
                    m.jsxs(
                      'div',
                      {
                        className: 'summary-line',
                        children: [
                          m.jsxs(ge, { children: [q.name, ' x', q.quantity] }),
                          m.jsxs(ge, {
                            children: [
                              '€',
                              (q.price * q.quantity)
                                .toFixed(2)
                                .replace('.', ','),
                            ],
                          }),
                        ],
                      },
                      q.id
                    )
                  ),
                  m.jsx(Jn, { my: 'sm' }),
                  m.jsx(Pt, { order: 4, children: 'Costs' }),
                  m.jsxs('div', {
                    className: 'summary-line',
                    children: [
                      m.jsx(ge, { children: 'Shipping' }),
                      m.jsxs(ge, {
                        children: ['€', _e.toFixed(2).replace('.', ',')],
                      }),
                    ],
                  }),
                  C &&
                    m.jsxs('div', {
                      className: 'summary-line',
                      children: [
                        m.jsx(ge, { children: '🎁 Gift wrapping' }),
                        m.jsxs(ge, {
                          children: ['€', ve.toFixed(2).replace('.', ',')],
                        }),
                      ],
                    }),
                  _ &&
                    m.jsxs('div', {
                      className: 'summary-line',
                      children: [
                        m.jsx(ge, { children: '✉️ Personal card' }),
                        m.jsxs(ge, {
                          children: ['€', st.toFixed(2).replace('.', ',')],
                        }),
                      ],
                    }),
                  m.jsx(Jn, { my: 'sm' }),
                  m.jsxs('div', {
                    className: 'summary-line-total',
                    children: [
                      m.jsx(ge, {
                        className: 'total-text',
                        children: 'Final total',
                      }),
                      m.jsxs(ge, {
                        className: 'total-text',
                        children: ['€', Le],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx(eu, {
                fullWidth: !0,
                onClick: D,
                text: 'Finalize purchase',
              }),
            ],
          }),
        ],
      });
}
const oy = g.lazy(() =>
    xt(() => import('./InitialPage-kdmrBlGX.js'), __vite__mapDeps([4, 3, 5]))
  ),
  sy = g.lazy(() =>
    xt(
      () => import('./DesignSystem-DfNPh3qG.js'),
      __vite__mapDeps([6, 3, 7, 8])
    )
  ),
  dy = g.lazy(() =>
    xt(() => import('./AnimationPage-BT2aSIEX.js'), __vite__mapDeps([9, 3, 10]))
  ),
  hy = g.lazy(() =>
    xt(
      () => import('./HomeScreen-Byiqis04.js'),
      __vite__mapDeps([11, 3, 7, 8, 12, 13, 14, 15])
    )
  ),
  my = g.lazy(() =>
    xt(
      () => import('./ProductDetail-oPtrOdAL.js'),
      __vite__mapDeps([16, 3, 7, 8, 17, 15])
    )
  ),
  vy = g.lazy(() =>
    xt(() => import('./BasketPage-B7EdCWds.js'), __vite__mapDeps([18, 3, 19]))
  ),
  yy = g.lazy(() =>
    xt(() => import('./SignUpPage-Dbll9aPh.js'), __vite__mapDeps([20, 3, 21]))
  ),
  gy = g.lazy(() =>
    xt(() => import('./LoginPage-CcgF5o0V.js'), __vite__mapDeps([22, 3, 23]))
  ),
  py = g.lazy(() =>
    xt(
      () => import('./PersonalLookPage-DeKMhj-R.js'),
      __vite__mapDeps([24, 3, 25])
    )
  ),
  Sy = g.lazy(() =>
    xt(
      () => import('./ProfilePage-BJabT2rb.js'),
      __vite__mapDeps([26, 3, 7, 8, 12, 13, 27])
    )
  );
function by() {
  return m.jsx(fv, {
    children: m.jsx(Sv, {
      children: m.jsx(g.Suspense, {
        fallback: m.jsx(pv, {}),
        children: m.jsxs(q1, {
          children: [
            m.jsx(Ze, { path: '/', element: m.jsx(oy, {}) }),
            m.jsx(Ze, { path: '/design-system', element: m.jsx(sy, {}) }),
            m.jsx(Ze, { path: '/animation', element: m.jsx(dy, {}) }),
            m.jsx(Ze, { path: '/homescreen', element: m.jsx(hy, {}) }),
            m.jsx(Ze, { path: '/item/:id', element: m.jsx(my, {}) }),
            m.jsx(Ze, { path: '/basket', element: m.jsx(vy, {}) }),
            m.jsx(Ze, {
              path: '/checkout/payment-method',
              element: m.jsx(iy, {}),
            }),
            m.jsx(Ze, {
              path: '/checkout/friend-info',
              element: m.jsx(cy, {}),
            }),
            m.jsx(Ze, { path: '/checkout/address', element: m.jsx(ey, {}) }),
            m.jsx(Ze, { path: '/checkout/summary', element: m.jsx(ry, {}) }),
            m.jsx(Ze, {
              path: '/checkout/personal-info',
              element: m.jsx(ay, {}),
            }),
            m.jsx(Ze, { path: '/signup', element: m.jsx(yy, {}) }),
            m.jsx(Ze, { path: '/login', element: m.jsx(gy, {}) }),
            m.jsx(Ze, { path: '/personal-look', element: m.jsx(py, {}) }),
            m.jsx(Ze, { path: '/personal-info', element: m.jsx($0, {}) }),
            m.jsx(Ze, { path: '/profile', element: m.jsx(Sy, {}) }),
          ],
        }),
      }),
    }),
  });
}
Km.createRoot(document.getElementById('root')).render(
  m.jsx(Rt.StrictMode, {
    children: m.jsxs(Gm, {
      withGlobalStyles: !0,
      withNormalizeCSS: !0,
      children: [
        m.jsx(ll, { position: 'top-center', zIndex: 1e3 }),
        m.jsx(by, {}),
      ],
    }),
  })
);
export {
  Ty as A,
  Il as B,
  zy as C,
  Cy as F,
  ly as I,
  Ry as L,
  Uy as M,
  rv as N,
  By as P,
  My as R,
  Iv as S,
  _y as W,
  xt as _,
  jy as a,
  W0 as b,
  Ny as c,
  Ay as d,
  Fv as e,
  Pv as f,
  Dy as g,
  Oy as h,
  eu as i,
  Ka as j,
  Oi as k,
  Ey as l,
  zi as m,
  Qa as n,
  ty as o,
  S0 as p,
  Fl as q,
  J0 as r,
  $e as s,
  Ht as u,
};
