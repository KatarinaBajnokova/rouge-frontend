function Oa(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
function ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Gn = { exports: {} },
  Dt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ro;
function Ia() {
  if (Ro) return Dt;
  Ro = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.fragment');
  function n(r, o, s) {
    var i = null;
    if (
      (s !== void 0 && (i = '' + s),
      o.key !== void 0 && (i = '' + o.key),
      'key' in o)
    ) {
      s = {};
      for (var a in o) a !== 'key' && (s[a] = o[a]);
    } else s = o;
    return (
      (o = s.ref),
      { $$typeof: e, type: r, key: i, ref: o !== void 0 ? o : null, props: s }
    );
  }
  return (Dt.Fragment = t), (Dt.jsx = n), (Dt.jsxs = n), Dt;
}
var $o;
function Ma() {
  return $o || (($o = 1), (Gn.exports = Ia())), Gn.exports;
}
var h = Ma(),
  Un = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o;
function La() {
  if (_o) return X;
  _o = 1;
  var e = Symbol.for('react.transitional.element'),
    t = Symbol.for('react.portal'),
    n = Symbol.for('react.fragment'),
    r = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    s = Symbol.for('react.consumer'),
    i = Symbol.for('react.context'),
    a = Symbol.for('react.forward_ref'),
    l = Symbol.for('react.suspense'),
    c = Symbol.for('react.memo'),
    u = Symbol.for('react.lazy'),
    d = Symbol.iterator;
  function f(b) {
    return b === null || typeof b != 'object'
      ? null
      : ((b = (d && b[d]) || b['@@iterator']),
        typeof b == 'function' ? b : null);
  }
  var p = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    g = Object.assign,
    v = {};
  function y(b, _, O) {
    (this.props = b),
      (this.context = _),
      (this.refs = v),
      (this.updater = O || p);
  }
  (y.prototype.isReactComponent = {}),
    (y.prototype.setState = function (b, _) {
      if (typeof b != 'object' && typeof b != 'function' && b != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, b, _, 'setState');
    }),
    (y.prototype.forceUpdate = function (b) {
      this.updater.enqueueForceUpdate(this, b, 'forceUpdate');
    });
  function w() {}
  w.prototype = y.prototype;
  function S(b, _, O) {
    (this.props = b),
      (this.context = _),
      (this.refs = v),
      (this.updater = O || p);
  }
  var x = (S.prototype = new w());
  (x.constructor = S), g(x, y.prototype), (x.isPureReactComponent = !0);
  var C = Array.isArray,
    R = { H: null, A: null, T: null, S: null, V: null },
    $ = Object.prototype.hasOwnProperty;
  function N(b, _, O, A, U, q) {
    return (
      (O = q.ref),
      { $$typeof: e, type: b, key: _, ref: O !== void 0 ? O : null, props: q }
    );
  }
  function E(b, _) {
    return N(b.type, _, void 0, void 0, void 0, b.props);
  }
  function M(b) {
    return typeof b == 'object' && b !== null && b.$$typeof === e;
  }
  function k(b) {
    var _ = { '=': '=0', ':': '=2' };
    return (
      '$' +
      b.replace(/[=:]/g, function (O) {
        return _[O];
      })
    );
  }
  var Y = /\/+/g;
  function L(b, _) {
    return typeof b == 'object' && b !== null && b.key != null
      ? k('' + b.key)
      : _.toString(36);
  }
  function z() {}
  function V(b) {
    switch (b.status) {
      case 'fulfilled':
        return b.value;
      case 'rejected':
        throw b.reason;
      default:
        switch (
          (typeof b.status == 'string'
            ? b.then(z, z)
            : ((b.status = 'pending'),
              b.then(
                function (_) {
                  b.status === 'pending' &&
                    ((b.status = 'fulfilled'), (b.value = _));
                },
                function (_) {
                  b.status === 'pending' &&
                    ((b.status = 'rejected'), (b.reason = _));
                }
              )),
          b.status)
        ) {
          case 'fulfilled':
            return b.value;
          case 'rejected':
            throw b.reason;
        }
    }
    throw b;
  }
  function G(b, _, O, A, U) {
    var q = typeof b;
    (q === 'undefined' || q === 'boolean') && (b = null);
    var F = !1;
    if (b === null) F = !0;
    else
      switch (q) {
        case 'bigint':
        case 'string':
        case 'number':
          F = !0;
          break;
        case 'object':
          switch (b.$$typeof) {
            case e:
            case t:
              F = !0;
              break;
            case u:
              return (F = b._init), G(F(b._payload), _, O, A, U);
          }
      }
    if (F)
      return (
        (U = U(b)),
        (F = A === '' ? '.' + L(b, 0) : A),
        C(U)
          ? ((O = ''),
            F != null && (O = F.replace(Y, '$&/') + '/'),
            G(U, _, O, '', function (ne) {
              return ne;
            }))
          : U != null &&
            (M(U) &&
              (U = E(
                U,
                O +
                  (U.key == null || (b && b.key === U.key)
                    ? ''
                    : ('' + U.key).replace(Y, '$&/') + '/') +
                  F
              )),
            _.push(U)),
        1
      );
    F = 0;
    var te = A === '' ? '.' : A + ':';
    if (C(b))
      for (var K = 0; K < b.length; K++)
        (A = b[K]), (q = te + L(A, K)), (F += G(A, _, O, q, U));
    else if (((K = f(b)), typeof K == 'function'))
      for (b = K.call(b), K = 0; !(A = b.next()).done; )
        (A = A.value), (q = te + L(A, K++)), (F += G(A, _, O, q, U));
    else if (q === 'object') {
      if (typeof b.then == 'function') return G(V(b), _, O, A, U);
      throw (
        ((_ = String(b)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (_ === '[object Object]'
              ? 'object with keys {' + Object.keys(b).join(', ') + '}'
              : _) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    }
    return F;
  }
  function j(b, _, O) {
    if (b == null) return b;
    var A = [],
      U = 0;
    return (
      G(b, A, '', '', function (q) {
        return _.call(O, q, U++);
      }),
      A
    );
  }
  function H(b) {
    if (b._status === -1) {
      var _ = b._result;
      (_ = _()),
        _.then(
          function (O) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 1), (b._result = O));
          },
          function (O) {
            (b._status === 0 || b._status === -1) &&
              ((b._status = 2), (b._result = O));
          }
        ),
        b._status === -1 && ((b._status = 0), (b._result = _));
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var T =
    typeof reportError == 'function'
      ? reportError
      : function (b) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var _ = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof b == 'object' &&
                b !== null &&
                typeof b.message == 'string'
                  ? String(b.message)
                  : String(b),
              error: b,
            });
            if (!window.dispatchEvent(_)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', b);
            return;
          }
          console.error(b);
        };
  function B() {}
  return (
    (X.Children = {
      map: j,
      forEach: function (b, _, O) {
        j(
          b,
          function () {
            _.apply(this, arguments);
          },
          O
        );
      },
      count: function (b) {
        var _ = 0;
        return (
          j(b, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (b) {
        return (
          j(b, function (_) {
            return _;
          }) || []
        );
      },
      only: function (b) {
        if (!M(b))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return b;
      },
    }),
    (X.Component = y),
    (X.Fragment = n),
    (X.Profiler = o),
    (X.PureComponent = S),
    (X.StrictMode = r),
    (X.Suspense = l),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (b) {
        return R.H.useMemoCache(b);
      },
    }),
    (X.cache = function (b) {
      return function () {
        return b.apply(null, arguments);
      };
    }),
    (X.cloneElement = function (b, _, O) {
      if (b == null)
        throw Error(
          'The argument must be a React element, but you passed ' + b + '.'
        );
      var A = g({}, b.props),
        U = b.key,
        q = void 0;
      if (_ != null)
        for (F in (_.ref !== void 0 && (q = void 0),
        _.key !== void 0 && (U = '' + _.key),
        _))
          !$.call(_, F) ||
            F === 'key' ||
            F === '__self' ||
            F === '__source' ||
            (F === 'ref' && _.ref === void 0) ||
            (A[F] = _[F]);
      var F = arguments.length - 2;
      if (F === 1) A.children = O;
      else if (1 < F) {
        for (var te = Array(F), K = 0; K < F; K++) te[K] = arguments[K + 2];
        A.children = te;
      }
      return N(b.type, U, void 0, void 0, q, A);
    }),
    (X.createContext = function (b) {
      return (
        (b = {
          $$typeof: i,
          _currentValue: b,
          _currentValue2: b,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (b.Provider = b),
        (b.Consumer = { $$typeof: s, _context: b }),
        b
      );
    }),
    (X.createElement = function (b, _, O) {
      var A,
        U = {},
        q = null;
      if (_ != null)
        for (A in (_.key !== void 0 && (q = '' + _.key), _))
          $.call(_, A) &&
            A !== 'key' &&
            A !== '__self' &&
            A !== '__source' &&
            (U[A] = _[A]);
      var F = arguments.length - 2;
      if (F === 1) U.children = O;
      else if (1 < F) {
        for (var te = Array(F), K = 0; K < F; K++) te[K] = arguments[K + 2];
        U.children = te;
      }
      if (b && b.defaultProps)
        for (A in ((F = b.defaultProps), F)) U[A] === void 0 && (U[A] = F[A]);
      return N(b, q, void 0, void 0, null, U);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (b) {
      return { $$typeof: a, render: b };
    }),
    (X.isValidElement = M),
    (X.lazy = function (b) {
      return { $$typeof: u, _payload: { _status: -1, _result: b }, _init: H };
    }),
    (X.memo = function (b, _) {
      return { $$typeof: c, type: b, compare: _ === void 0 ? null : _ };
    }),
    (X.startTransition = function (b) {
      var _ = R.T,
        O = {};
      R.T = O;
      try {
        var A = b(),
          U = R.S;
        U !== null && U(O, A),
          typeof A == 'object' &&
            A !== null &&
            typeof A.then == 'function' &&
            A.then(B, T);
      } catch (q) {
        T(q);
      } finally {
        R.T = _;
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (X.use = function (b) {
      return R.H.use(b);
    }),
    (X.useActionState = function (b, _, O) {
      return R.H.useActionState(b, _, O);
    }),
    (X.useCallback = function (b, _) {
      return R.H.useCallback(b, _);
    }),
    (X.useContext = function (b) {
      return R.H.useContext(b);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (b, _) {
      return R.H.useDeferredValue(b, _);
    }),
    (X.useEffect = function (b, _, O) {
      var A = R.H;
      if (typeof O == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return A.useEffect(b, _);
    }),
    (X.useId = function () {
      return R.H.useId();
    }),
    (X.useImperativeHandle = function (b, _, O) {
      return R.H.useImperativeHandle(b, _, O);
    }),
    (X.useInsertionEffect = function (b, _) {
      return R.H.useInsertionEffect(b, _);
    }),
    (X.useLayoutEffect = function (b, _) {
      return R.H.useLayoutEffect(b, _);
    }),
    (X.useMemo = function (b, _) {
      return R.H.useMemo(b, _);
    }),
    (X.useOptimistic = function (b, _) {
      return R.H.useOptimistic(b, _);
    }),
    (X.useReducer = function (b, _, O) {
      return R.H.useReducer(b, _, O);
    }),
    (X.useRef = function (b) {
      return R.H.useRef(b);
    }),
    (X.useState = function (b) {
      return R.H.useState(b);
    }),
    (X.useSyncExternalStore = function (b, _, O) {
      return R.H.useSyncExternalStore(b, _, O);
    }),
    (X.useTransition = function () {
      return R.H.useTransition();
    }),
    (X.version = '19.1.0'),
    X
  );
}
var Eo;
function bs() {
  return Eo || ((Eo = 1), (Un.exports = La())), Un.exports;
}
var m = bs();
const mt = ys(m),
  Da = Oa({ __proto__: null, default: mt }, [m]);
var qn = { exports: {} },
  me = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Po;
function za() {
  if (Po) return me;
  Po = 1;
  var e = bs();
  function t(l) {
    var c = 'https://react.dev/errors/' + l;
    if (1 < arguments.length) {
      c += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        c += '&args[]=' + encodeURIComponent(arguments[u]);
    }
    return (
      'Minified React error #' +
      l +
      '; visit ' +
      c +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function n() {}
  var r = {
      d: {
        f: n,
        r: function () {
          throw Error(t(522));
        },
        D: n,
        C: n,
        L: n,
        m: n,
        X: n,
        S: n,
        M: n,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function s(l, c, u) {
    var d =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: d == null ? null : '' + d,
      children: l,
      containerInfo: c,
      implementation: u,
    };
  }
  var i = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function a(l, c) {
    if (l === 'font') return '';
    if (typeof c == 'string') return c === 'use-credentials' ? c : '';
  }
  return (
    (me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (me.createPortal = function (l, c) {
      var u =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!c || (c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11))
        throw Error(t(299));
      return s(l, c, null, u);
    }),
    (me.flushSync = function (l) {
      var c = i.T,
        u = r.p;
      try {
        if (((i.T = null), (r.p = 2), l)) return l();
      } finally {
        (i.T = c), (r.p = u), r.d.f();
      }
    }),
    (me.preconnect = function (l, c) {
      typeof l == 'string' &&
        (c
          ? ((c = c.crossOrigin),
            (c =
              typeof c == 'string'
                ? c === 'use-credentials'
                  ? c
                  : ''
                : void 0))
          : (c = null),
        r.d.C(l, c));
    }),
    (me.prefetchDNS = function (l) {
      typeof l == 'string' && r.d.D(l);
    }),
    (me.preinit = function (l, c) {
      if (typeof l == 'string' && c && typeof c.as == 'string') {
        var u = c.as,
          d = a(u, c.crossOrigin),
          f = typeof c.integrity == 'string' ? c.integrity : void 0,
          p = typeof c.fetchPriority == 'string' ? c.fetchPriority : void 0;
        u === 'style'
          ? r.d.S(l, typeof c.precedence == 'string' ? c.precedence : void 0, {
              crossOrigin: d,
              integrity: f,
              fetchPriority: p,
            })
          : u === 'script' &&
            r.d.X(l, {
              crossOrigin: d,
              integrity: f,
              fetchPriority: p,
              nonce: typeof c.nonce == 'string' ? c.nonce : void 0,
            });
      }
    }),
    (me.preinitModule = function (l, c) {
      if (typeof l == 'string')
        if (typeof c == 'object' && c !== null) {
          if (c.as == null || c.as === 'script') {
            var u = a(c.as, c.crossOrigin);
            r.d.M(l, {
              crossOrigin: u,
              integrity: typeof c.integrity == 'string' ? c.integrity : void 0,
              nonce: typeof c.nonce == 'string' ? c.nonce : void 0,
            });
          }
        } else c == null && r.d.M(l);
    }),
    (me.preload = function (l, c) {
      if (
        typeof l == 'string' &&
        typeof c == 'object' &&
        c !== null &&
        typeof c.as == 'string'
      ) {
        var u = c.as,
          d = a(u, c.crossOrigin);
        r.d.L(l, u, {
          crossOrigin: d,
          integrity: typeof c.integrity == 'string' ? c.integrity : void 0,
          nonce: typeof c.nonce == 'string' ? c.nonce : void 0,
          type: typeof c.type == 'string' ? c.type : void 0,
          fetchPriority:
            typeof c.fetchPriority == 'string' ? c.fetchPriority : void 0,
          referrerPolicy:
            typeof c.referrerPolicy == 'string' ? c.referrerPolicy : void 0,
          imageSrcSet:
            typeof c.imageSrcSet == 'string' ? c.imageSrcSet : void 0,
          imageSizes: typeof c.imageSizes == 'string' ? c.imageSizes : void 0,
          media: typeof c.media == 'string' ? c.media : void 0,
        });
      }
    }),
    (me.preloadModule = function (l, c) {
      if (typeof l == 'string')
        if (c) {
          var u = a(c.as, c.crossOrigin);
          r.d.m(l, {
            as: typeof c.as == 'string' && c.as !== 'script' ? c.as : void 0,
            crossOrigin: u,
            integrity: typeof c.integrity == 'string' ? c.integrity : void 0,
          });
        } else r.d.m(l);
    }),
    (me.requestFormReset = function (l) {
      r.d.r(l);
    }),
    (me.unstable_batchedUpdates = function (l, c) {
      return l(c);
    }),
    (me.useFormState = function (l, c, u) {
      return i.H.useFormState(l, c, u);
    }),
    (me.useFormStatus = function () {
      return i.H.useHostTransitionStatus();
    }),
    (me.version = '19.1.0'),
    me
  );
}
var No;
function Ba() {
  if (No) return qn.exports;
  No = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), (qn.exports = za()), qn.exports;
}
var _r = Ba();
const Fa = ys(_r);
var Be = function () {
  return (
    (Be =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    Be.apply(this, arguments)
  );
};
function xs(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Ha(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var ln = 'right-scroll-bar-position',
  un = 'width-before-scroll-bar',
  Wa = 'with-scroll-bars-hidden',
  Va = '--removed-body-scroll-bar-size';
function Xn(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Ya(e, t) {
  var n = m.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Ga = typeof window < 'u' ? m.useLayoutEffect : m.useEffect,
  To = new WeakMap();
function Ua(e, t) {
  var n = Ya(null, function (r) {
    return e.forEach(function (o) {
      return Xn(o, r);
    });
  });
  return (
    Ga(
      function () {
        var r = To.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            s.has(a) || Xn(a, null);
          }),
            s.forEach(function (a) {
              o.has(a) || Xn(a, i);
            });
        }
        To.set(n, e);
      },
      [e]
    ),
    n
  );
}
function qa(e) {
  return e;
}
function Xa(e, t) {
  t === void 0 && (t = qa);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(s), (i = n);
        }
        var l = function () {
            var u = i;
            (i = []), u.forEach(s);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (u) {
              i.push(u), c();
            },
            filter: function (u) {
              return (i = i.filter(u)), n;
            },
          });
      },
    };
  return o;
}
function Za(e) {
  e === void 0 && (e = {});
  var t = Xa(null);
  return (t.options = Be({ async: !0, ssr: !1 }, e)), t;
}
var ws = function (e) {
  var t = e.sideCar,
    n = xs(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car'
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return m.createElement(r, Be({}, n));
};
ws.isSideCarExport = !0;
function Ka(e, t) {
  return e.useMedium(t), ws;
}
var Ss = Za(),
  Zn = function () {},
  yn = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: Zn,
        onWheelCapture: Zn,
        onTouchMoveCapture: Zn,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      g = e.inert,
      v = e.allowPinchZoom,
      y = e.as,
      w = y === void 0 ? 'div' : y,
      S = e.gapMode,
      x = xs(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      C = f,
      R = Ua([n, t]),
      $ = Be(Be({}, x), o);
    return m.createElement(
      m.Fragment,
      null,
      u &&
        m.createElement(C, {
          sideCar: Ss,
          removeScrollBar: c,
          shards: d,
          noIsolation: p,
          inert: g,
          setCallbacks: s,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: S,
        }),
      i
        ? m.cloneElement(m.Children.only(a), Be(Be({}, $), { ref: R }))
        : m.createElement(w, Be({}, $, { className: l, ref: R }), a)
    );
  });
yn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
yn.classNames = { fullWidth: un, zeroRight: ln };
var Qa = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Ja() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = Qa();
  return t && e.setAttribute('nonce', t), e;
}
function ec(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function tc(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var nc = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Ja()) && (ec(t, n), tc(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  rc = function () {
    var e = nc();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Cs = function () {
    var e = rc(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  oc = { left: 0, top: 0, right: 0, gap: 0 },
  Kn = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  sc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Kn(n), Kn(r), Kn(o)];
  },
  ic = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return oc;
    var t = sc(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  ac = Cs(),
  $t = 'data-scroll-locked',
  cc = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          Wa,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          $t,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, 'px ')
                .concat(
                  r,
                  `;
    `
                ),
            n === 'padding' &&
              'padding-right: '.concat(a, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          ln,
          ` {
    right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          un,
          ` {
    margin-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ln, ' .')
        .concat(
          ln,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(un, ' .')
        .concat(
          un,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          $t,
          `] {
    `
        )
        .concat(Va, ': ')
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Ao = function () {
    var e = parseInt(document.body.getAttribute($t) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  lc = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute($t, (Ao() + 1).toString()),
        function () {
          var e = Ao() - 1;
          e <= 0
            ? document.body.removeAttribute($t)
            : document.body.setAttribute($t, e.toString());
        }
      );
    }, []);
  },
  uc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    lc();
    var s = m.useMemo(
      function () {
        return ic(o);
      },
      [o]
    );
    return m.createElement(ac, { styles: cc(s, !t, o, n ? '' : '!important') });
  },
  ur = !1;
if (typeof window < 'u')
  try {
    var tn = Object.defineProperty({}, 'passive', {
      get: function () {
        return (ur = !0), !0;
      },
    });
    window.addEventListener('test', tn, tn),
      window.removeEventListener('test', tn, tn);
  } catch {
    ur = !1;
  }
var xt = ur ? { passive: !1 } : !1,
  dc = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Rs = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !dc(e) && n[t] === 'visible')
    );
  },
  fc = function (e) {
    return Rs(e, 'overflowY');
  },
  pc = function (e) {
    return Rs(e, 'overflowX');
  },
  jo = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = $s(e, r);
      if (o) {
        var s = _s(e, r),
          i = s[1],
          a = s[2];
        if (i > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  mc = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  hc = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  $s = function (e, t) {
    return e === 'v' ? fc(t) : pc(t);
  },
  _s = function (e, t) {
    return e === 'v' ? mc(t) : hc(t);
  },
  gc = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  vc = function (e, t, n, r, o) {
    var s = gc(e, window.getComputedStyle(t).direction),
      i = s * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = i > 0,
      d = 0,
      f = 0;
    do {
      var p = _s(e, a),
        g = p[0],
        v = p[1],
        y = p[2],
        w = v - y - s * g;
      (g || w) && $s(e, a) && ((d += w), (f += g)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (c = !0), c;
  },
  nn = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ko = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Oo = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  yc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  bc = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  xc = 0,
  wt = [];
function wc(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState(xc++)[0],
    s = m.useState(Cs)[0],
    i = m.useRef(e);
  m.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var v = Ha([e.lockRef.current], (e.shards || []).map(Oo), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (y) {
              return y.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                v.forEach(function (y) {
                  return y.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = m.useCallback(function (v, y) {
      if (
        ('touches' in v && v.touches.length === 2) ||
        (v.type === 'wheel' && v.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var w = nn(v),
        S = n.current,
        x = 'deltaX' in v ? v.deltaX : S[0] - w[0],
        C = 'deltaY' in v ? v.deltaY : S[1] - w[1],
        R,
        $ = v.target,
        N = Math.abs(x) > Math.abs(C) ? 'h' : 'v';
      if ('touches' in v && N === 'h' && $.type === 'range') return !1;
      var E = jo(N, $);
      if (!E) return !0;
      if ((E ? (R = N) : ((R = N === 'v' ? 'h' : 'v'), (E = jo(N, $))), !E))
        return !1;
      if (
        (!r.current && 'changedTouches' in v && (x || C) && (r.current = R), !R)
      )
        return !0;
      var M = r.current || R;
      return vc(M, y, v, M === 'h' ? x : C);
    }, []),
    l = m.useCallback(function (v) {
      var y = v;
      if (!(!wt.length || wt[wt.length - 1] !== s)) {
        var w = 'deltaY' in y ? ko(y) : nn(y),
          S = t.current.filter(function (R) {
            return (
              R.name === y.type &&
              (R.target === y.target || y.target === R.shadowParent) &&
              yc(R.delta, w)
            );
          })[0];
        if (S && S.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!S) {
          var x = (i.current.shards || [])
              .map(Oo)
              .filter(Boolean)
              .filter(function (R) {
                return R.contains(y.target);
              }),
            C = x.length > 0 ? a(y, x[0]) : !i.current.noIsolation;
          C && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    c = m.useCallback(function (v, y, w, S) {
      var x = { name: v, delta: y, target: w, should: S, shadowParent: Sc(w) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== x;
          });
        }, 1);
    }, []),
    u = m.useCallback(function (v) {
      (n.current = nn(v)), (r.current = void 0);
    }, []),
    d = m.useCallback(function (v) {
      c(v.type, ko(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = m.useCallback(function (v) {
      c(v.type, nn(v), v.target, a(v, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      wt.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener('wheel', l, xt),
      document.addEventListener('touchmove', l, xt),
      document.addEventListener('touchstart', u, xt),
      function () {
        (wt = wt.filter(function (v) {
          return v !== s;
        })),
          document.removeEventListener('wheel', l, xt),
          document.removeEventListener('touchmove', l, xt),
          document.removeEventListener('touchstart', u, xt);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    g = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    g ? m.createElement(s, { styles: bc(o) }) : null,
    p ? m.createElement(uc, { gapMode: e.gapMode }) : null
  );
}
function Sc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Cc = Ka(Ss, wc);
var Es = m.forwardRef(function (e, t) {
  return m.createElement(yn, Be({}, e, { ref: t, sideCar: Cc }));
});
Es.classNames = yn.classNames;
function Fe(e) {
  return Object.keys(e);
}
function Qn(e) {
  return e && typeof e == 'object' && !Array.isArray(e);
}
function Er(e, t) {
  const n = { ...e },
    r = t;
  return (
    Qn(e) &&
      Qn(t) &&
      Object.keys(t).forEach(o => {
        Qn(r[o]) && o in e ? (n[o] = Er(n[o], r[o])) : (n[o] = r[o]);
      }),
    n
  );
}
function Rc(e) {
  return e.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
}
function $c(e) {
  var t;
  return typeof e != 'string' || !e.includes('var(--mantine-scale)')
    ? e
    : (t = e.match(/^calc\((.*?)\)$/)) == null
      ? void 0
      : t[1].split('*')[0].trim();
}
function dr(e) {
  const t = $c(e);
  return typeof t == 'number'
    ? t
    : typeof t == 'string'
      ? t.includes('calc') || t.includes('var')
        ? t
        : t.includes('px')
          ? Number(t.replace('px', ''))
          : t.includes('rem')
            ? Number(t.replace('rem', '')) * 16
            : t.includes('em')
              ? Number(t.replace('em', '')) * 16
              : Number(t)
      : NaN;
}
function Jn(e) {
  return e === '0rem' ? '0rem' : `calc(${e} * var(--mantine-scale))`;
}
function Ps(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === '0') return `0${e}`;
    if (typeof r == 'number') {
      const o = `${r / 16}${e}`;
      return t ? Jn(o) : o;
    }
    if (typeof r == 'string') {
      if (
        r === '' ||
        r.startsWith('calc(') ||
        r.startsWith('clamp(') ||
        r.includes('rgba(')
      )
        return r;
      if (r.includes(','))
        return r
          .split(',')
          .map(s => n(s))
          .join(',');
      if (r.includes(' '))
        return r
          .split(' ')
          .map(s => n(s))
          .join(' ');
      if (r.includes(e)) return t ? Jn(r) : r;
      const o = r.replace('px', '');
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? Jn(s) : s;
      }
    }
    return r;
  }
  return n;
}
const P = Ps('rem', { shouldScale: !0 }),
  Io = Ps('em');
function Pr(e) {
  return Object.keys(e).reduce(
    (t, n) => (e[n] !== void 0 && (t[n] = e[n]), t),
    {}
  );
}
function Ns(e) {
  if (typeof e == 'number') return !0;
  if (typeof e == 'string') {
    if (
      e.startsWith('calc(') ||
      e.startsWith('var(') ||
      (e.includes(' ') && e.trim() !== '')
    )
      return !0;
    const t =
      /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return e
      .trim()
      .split(/\s+/)
      .every(r => t.test(r));
  }
  return !1;
}
function Yt(e) {
  return Array.isArray(e) || e === null
    ? !1
    : typeof e == 'object'
      ? e.type !== m.Fragment
      : !1;
}
function ct(e) {
  const t = m.createContext(null);
  return [
    ({ children: o, value: s }) => h.jsx(t.Provider, { value: s, children: o }),
    () => {
      const o = m.useContext(t);
      if (o === null) throw new Error(e);
      return o;
    },
  ];
}
function bn(e = null) {
  const t = m.createContext(e);
  return [
    ({ children: o, value: s }) => h.jsx(t.Provider, { value: s, children: o }),
    () => m.useContext(t),
  ];
}
const _c = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function vt(e) {
  return _c[e];
}
const Ec = () => {};
function Pc(e, t = { active: !0 }) {
  return typeof e != 'function' || !t.active
    ? t.onKeyDown || Ec
    : n => {
        var r;
        n.key === 'Escape' && (e(n), (r = t.onTrigger) == null || r.call(t));
      };
}
function J(e, t = 'size', n = !0) {
  if (e !== void 0) return Ns(e) ? (n ? P(e) : e) : `var(--${t}-${e})`;
}
function ht(e) {
  return J(e, 'mantine-spacing');
}
function ce(e) {
  return e === void 0
    ? 'var(--mantine-radius-default)'
    : J(e, 'mantine-radius');
}
function de(e) {
  return J(e, 'mantine-font-size');
}
function Nc(e) {
  return J(e, 'mantine-line-height', !1);
}
function Nr(e) {
  if (e) return J(e, 'mantine-shadow', !1);
}
function Tc(e, t) {
  return e in t ? dr(t[e]) : dr(e);
}
function Bm(e, t) {
  const n = e.map(r => ({ value: r, px: Tc(r, t) }));
  return n.sort((r, o) => r.px - o.px), n;
}
function Fm(e) {
  return typeof e == 'object' && e !== null
    ? 'base' in e
      ? e.base
      : void 0
    : e;
}
function Ac(e, t, n) {
  return t === void 0 && n === void 0
    ? e
    : t !== void 0 && n === void 0
      ? Math.max(e, t)
      : Math.min(t === void 0 && n !== void 0 ? e : Math.max(e, t), n);
}
function jc(e = 'mantine-') {
  return `${e}${Math.random().toString(36).slice(2, 11)}`;
}
function ft(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    m.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
const kc = () => {};
function xn(e, t) {
  const n = typeof t == 'number' ? t : t.delay,
    r = typeof t == 'number' ? !1 : t.flushOnUnmount,
    o = ft(e),
    s = m.useRef(0),
    i = Object.assign(
      m.useCallback(
        (...a) => {
          window.clearTimeout(s.current);
          const l = () => {
            s.current !== 0 && ((s.current = 0), o(...a));
          };
          (i.flush = l), (s.current = window.setTimeout(l, n));
        },
        [o, n]
      ),
      { flush: kc }
    );
  return (
    m.useEffect(
      () => () => {
        window.clearTimeout(s.current), r && i.flush();
      },
      [i, r]
    ),
    i
  );
}
const Mo = ['mousedown', 'touchstart'];
function Oc(e, t, n) {
  const r = m.useRef(null);
  return (
    m.useEffect(() => {
      const o = s => {
        const { target: i } = s ?? {};
        if (Array.isArray(n)) {
          const a =
            (i == null
              ? void 0
              : i.hasAttribute('data-ignore-outside-clicks')) ||
            (!document.body.contains(i) && i.tagName !== 'HTML');
          n.every(c => !!c && !s.composedPath().includes(c)) && !a && e();
        } else r.current && !r.current.contains(i) && e();
      };
      return (
        (t || Mo).forEach(s => document.addEventListener(s, o)),
        () => {
          (t || Mo).forEach(s => document.removeEventListener(s, o));
        }
      );
    }, [r, e, n]),
    r
  );
}
function Ic(e, t) {
  try {
    return (
      e.addEventListener('change', t), () => e.removeEventListener('change', t)
    );
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Mc(e, t) {
  return typeof window < 'u' && 'matchMedia' in window
    ? window.matchMedia(e).matches
    : !1;
}
function Lc(
  e,
  t,
  { getInitialValueInEffect: n } = { getInitialValueInEffect: !0 }
) {
  const [r, o] = m.useState(n ? t : Mc(e)),
    s = m.useRef(null);
  return (
    m.useEffect(() => {
      if ('matchMedia' in window)
        return (
          (s.current = window.matchMedia(e)),
          o(s.current.matches),
          Ic(s.current, i => o(i.matches))
        );
    }, [e]),
    r
  );
}
const Gt = typeof document < 'u' ? m.useLayoutEffect : m.useEffect;
function Et(e, t) {
  const n = m.useRef(!1);
  m.useEffect(
    () => () => {
      n.current = !1;
    },
    []
  ),
    m.useEffect(() => {
      if (n.current) return e();
      n.current = !0;
    }, t);
}
function Ts({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = m.useRef(null),
    r = () => {
      var o;
      n.current &&
        'focus' in n.current &&
        typeof n.current.focus == 'function' &&
        ((o = n.current) == null || o.focus({ preventScroll: !0 }));
    };
  return (
    Et(() => {
      let o = -1;
      const s = i => {
        i.key === 'Tab' && window.clearTimeout(o);
      };
      return (
        document.addEventListener('keydown', s),
        e
          ? (n.current = document.activeElement)
          : t && (o = window.setTimeout(r, 10)),
        () => {
          window.clearTimeout(o), document.removeEventListener('keydown', s);
        }
      );
    }, [e, t]),
    r
  );
}
const Dc = /input|select|textarea|button|object/,
  As = 'a, input, select, textarea, button, object, [tabindex]';
function zc(e) {
  return e.style.display === 'none';
}
function Bc(e) {
  if (
    e.getAttribute('aria-hidden') ||
    e.getAttribute('hidden') ||
    e.getAttribute('type') === 'hidden'
  )
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (zc(n)) return !1;
    n = n.parentNode;
  }
  return !0;
}
function js(e) {
  let t = e.getAttribute('tabindex');
  return t === null && (t = void 0), parseInt(t, 10);
}
function fr(e) {
  const t = e.nodeName.toLowerCase(),
    n = !Number.isNaN(js(e));
  return (
    ((Dc.test(t) && !e.disabled) ||
      (e instanceof HTMLAnchorElement && e.href) ||
      n) &&
    Bc(e)
  );
}
function ks(e) {
  const t = js(e);
  return (Number.isNaN(t) || t >= 0) && fr(e);
}
function Fc(e) {
  return Array.from(e.querySelectorAll(As)).filter(ks);
}
function Hc(e, t) {
  const n = Fc(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1],
    o = e.getRootNode();
  let s = r === o.activeElement || e === o.activeElement;
  const i = o.activeElement;
  if (
    (i.tagName === 'INPUT' &&
      i.getAttribute('type') === 'radio' &&
      (s = n
        .filter(
          u =>
            u.getAttribute('type') === 'radio' &&
            u.getAttribute('name') === i.getAttribute('name')
        )
        .includes(r)),
    !s)
  )
    return;
  t.preventDefault();
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
function Wc(e = !0) {
  const t = m.useRef(null),
    n = o => {
      let s = o.querySelector('[data-autofocus]');
      if (!s) {
        const i = Array.from(o.querySelectorAll(As));
        (s = i.find(ks) || i.find(fr) || null), !s && fr(o) && (s = o);
      }
      s && s.focus({ preventScroll: !0 });
    },
    r = m.useCallback(
      o => {
        e &&
          o !== null &&
          t.current !== o &&
          (o
            ? (setTimeout(() => {
                o.getRootNode() && n(o);
              }),
              (t.current = o))
            : (t.current = null));
      },
      [e]
    );
  return (
    m.useEffect(() => {
      if (!e) return;
      t.current && setTimeout(() => n(t.current));
      const o = s => {
        s.key === 'Tab' && t.current && Hc(t.current, s);
      };
      return (
        document.addEventListener('keydown', o),
        () => document.removeEventListener('keydown', o)
      );
    }, [e]),
    r
  );
}
const Vc = e => (e + 1) % 1e6;
function Hm() {
  const [, e] = m.useReducer(Vc, 0);
  return e;
}
const Yc = mt.useId || (() => {});
function Gc() {
  const e = Yc();
  return e ? `mantine-${e.replace(/:/g, '')}` : '';
}
function Ze(e) {
  const t = Gc(),
    [n, r] = m.useState(t);
  return (
    Gt(() => {
      r(jc());
    }, []),
    typeof e == 'string' ? e : typeof window > 'u' ? t : n
  );
}
function Uc(e, t, n) {
  m.useEffect(
    () => (
      window.addEventListener(e, t, n),
      () => window.removeEventListener(e, t, n)
    ),
    [e, t]
  );
}
function pr(e, t) {
  if (typeof e == 'function') return e(t);
  typeof e == 'object' && e !== null && 'current' in e && (e.current = t);
}
function qc(...e) {
  const t = new Map();
  return n => {
    if (
      (e.forEach(r => {
        const o = pr(r, n);
        o && t.set(r, o);
      }),
      t.size > 0)
    )
      return () => {
        e.forEach(r => {
          const o = t.get(r);
          o ? o() : pr(r, null);
        }),
          t.clear();
      };
  };
}
function $e(...e) {
  return m.useCallback(qc(...e), e);
}
function st({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {},
}) {
  const [o, s] = m.useState(t !== void 0 ? t : n),
    i = (a, ...l) => {
      s(a), r == null || r(a, ...l);
    };
  return e !== void 0 ? [e, r, !0] : [o, i, !1];
}
function Os(e, t) {
  return Lc('(prefers-reduced-motion: reduce)', e, t);
}
function Xc(e) {
  const t = m.useRef(void 0);
  return (
    m.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var Zc = {};
function Kc() {
  return typeof process < 'u' && Zc ? 'production' : 'development';
}
function Is(e) {
  var n;
  const t = mt.version;
  return typeof mt.version != 'string' || t.startsWith('18.')
    ? e == null
      ? void 0
      : e.ref
    : (n = e == null ? void 0 : e.props) == null
      ? void 0
      : n.ref;
}
function Wm(e) {
  return e;
}
function Ms(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Ms(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function ge() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Ms(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Qc = {};
function Jc(e) {
  const t = {};
  return (
    e.forEach(n => {
      Object.entries(n).forEach(([r, o]) => {
        t[r] ? (t[r] = ge(t[r], o)) : (t[r] = o);
      });
    }),
    t
  );
}
function wn({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map(i =>
    typeof i == 'function' ? i(e, n, r) : i || Qc
  );
  return Jc(s);
}
function fn({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce(
    (s, i) =>
      typeof i == 'function' ? { ...s, ...i(e, n, r) } : { ...s, ...i },
    {}
  );
}
const Ls = m.createContext(null);
function lt() {
  const e = m.useContext(Ls);
  if (!e)
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  return e;
}
function el() {
  return lt().cssVariablesResolver;
}
function tl() {
  return lt().classNamesPrefix;
}
function Tr() {
  return lt().getStyleNonce;
}
function nl() {
  return lt().withStaticClasses;
}
function rl() {
  return lt().headless;
}
function ol() {
  var e;
  return (e = lt().stylesTransform) == null ? void 0 : e.sx;
}
function sl() {
  var e;
  return (e = lt().stylesTransform) == null ? void 0 : e.styles;
}
function Ds() {
  return lt().env || 'default';
}
function il(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function al(e) {
  let t = e.replace('#', '');
  if (t.length === 3) {
    const i = t.split('');
    t = [i[0], i[0], i[1], i[1], i[2], i[2]].join('');
  }
  if (t.length === 8) {
    const i = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: i,
    };
  }
  const n = parseInt(t, 16),
    r = (n >> 16) & 255,
    o = (n >> 8) & 255,
    s = n & 255;
  return { r, g: o, b: s, a: 1 };
}
function cl(e) {
  const [t, n, r, o] = e
    .replace(/[^0-9,./]/g, '')
    .split(/[/,]/)
    .map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function ll(e) {
  const t =
      /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
    n = e.match(t);
  if (!n) return { r: 0, g: 0, b: 0, a: 1 };
  const r = parseInt(n[1], 10),
    o = parseInt(n[2], 10) / 100,
    s = parseInt(n[3], 10) / 100,
    i = n[5] ? parseFloat(n[5]) : void 0,
    a = (1 - Math.abs(2 * s - 1)) * o,
    l = r / 60,
    c = a * (1 - Math.abs((l % 2) - 1)),
    u = s - a / 2;
  let d, f, p;
  return (
    l >= 0 && l < 1
      ? ((d = a), (f = c), (p = 0))
      : l >= 1 && l < 2
        ? ((d = c), (f = a), (p = 0))
        : l >= 2 && l < 3
          ? ((d = 0), (f = a), (p = c))
          : l >= 3 && l < 4
            ? ((d = 0), (f = c), (p = a))
            : l >= 4 && l < 5
              ? ((d = c), (f = 0), (p = a))
              : ((d = a), (f = 0), (p = c)),
    {
      r: Math.round((d + u) * 255),
      g: Math.round((f + u) * 255),
      b: Math.round((p + u) * 255),
      a: i || 1,
    }
  );
}
function Ar(e) {
  return il(e)
    ? al(e)
    : e.startsWith('rgb')
      ? cl(e)
      : e.startsWith('hsl')
        ? ll(e)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function rn(e, t) {
  if (e.startsWith('var('))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = Ar(e),
    i = 1 - t,
    a = l => Math.round(l * i);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${s})`;
}
function Ht(e, t) {
  return typeof e.primaryShade == 'number'
    ? e.primaryShade
    : t === 'dark'
      ? e.primaryShade.dark
      : e.primaryShade.light;
}
function er(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function ul(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function dl(e) {
  if (e.startsWith('oklch(')) return (ul(e) || 0) / 100;
  const { r: t, g: n, b: r } = Ar(e),
    o = t / 255,
    s = n / 255,
    i = r / 255,
    a = er(o),
    l = er(s),
    c = er(i);
  return 0.2126 * a + 0.7152 * l + 0.0722 * c;
}
function zt(e, t = 0.179) {
  return e.startsWith('var(') ? !1 : dl(e) > t;
}
function yt({ color: e, theme: t, colorScheme: n }) {
  if (typeof e != 'string')
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
    );
  if (e === 'bright')
    return {
      color: e,
      value: n === 'dark' ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: zt(n === 'dark' ? t.white : t.black, t.luminanceThreshold),
      variable: '--mantine-color-bright',
    };
  if (e === 'dimmed')
    return {
      color: e,
      value: n === 'dark' ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: zt(
        n === 'dark' ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: '--mantine-color-dimmed',
    };
  if (e === 'white' || e === 'black')
    return {
      color: e,
      value: e === 'white' ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: zt(e === 'white' ? t.white : t.black, t.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [r, o] = e.split('.'),
    s = o ? Number(o) : void 0,
    i = r in t.colors;
  if (i) {
    const a = s !== void 0 ? t.colors[r][s] : t.colors[r][Ht(t, n || 'light')];
    return {
      color: r,
      value: a,
      shade: s,
      isThemeColor: i,
      isLight: zt(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: zt(e, t.luminanceThreshold),
    shade: s,
    variable: void 0,
  };
}
function xe(e, t) {
  const n = yt({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function mr(e, t) {
  const n = {
      from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
      to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
      deg: (e == null ? void 0 : e.deg) ?? t.defaultGradient.deg ?? 0,
    },
    r = xe(n.from, t),
    o = xe(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function ze(e, t) {
  if (typeof e != 'string' || t > 1 || t < 0) return 'rgba(0, 0, 0, 1)';
  if (e.startsWith('var(')) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith('oklch'))
    return e.includes('/')
      ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`)
      : e.replace(')', ` / ${t})`);
  const { r: n, g: r, b: o } = Ar(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const St = ze,
  fl = ({ color: e, theme: t, variant: n, gradient: r, autoContrast: o }) => {
    const s = yt({ color: e, theme: t }),
      i = typeof o == 'boolean' ? o : t.autoContrast;
    if (n === 'filled') {
      const a =
        i && s.isLight
          ? 'var(--mantine-color-black)'
          : 'var(--mantine-color-white)';
      return s.isThemeColor
        ? s.shade === void 0
          ? {
              background: `var(--mantine-color-${e}-filled)`,
              hover: `var(--mantine-color-${e}-filled-hover)`,
              color: a,
              border: `${P(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${s.color}-${s.shade})`,
              hover: `var(--mantine-color-${s.color}-${s.shade === 9 ? 8 : s.shade + 1})`,
              color: a,
              border: `${P(1)} solid transparent`,
            }
        : {
            background: e,
            hover: rn(e, 0.1),
            color: a,
            border: `${P(1)} solid transparent`,
          };
    }
    if (n === 'light') {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${P(1)} solid transparent`,
          };
        const a = t.colors[s.color][s.shade];
        return {
          background: ze(a, 0.1),
          hover: ze(a, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${P(1)} solid transparent`,
        };
      }
      return {
        background: ze(e, 0.1),
        hover: ze(e, 0.12),
        color: e,
        border: `${P(1)} solid transparent`,
      };
    }
    if (n === 'outline')
      return s.isThemeColor
        ? s.shade === void 0
          ? {
              background: 'transparent',
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${P(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: 'transparent',
              hover: ze(t.colors[s.color][s.shade], 0.05),
              color: `var(--mantine-color-${s.color}-${s.shade})`,
              border: `${P(1)} solid var(--mantine-color-${s.color}-${s.shade})`,
            }
        : {
            background: 'transparent',
            hover: ze(e, 0.05),
            color: e,
            border: `${P(1)} solid ${e}`,
          };
    if (n === 'subtle') {
      if (s.isThemeColor) {
        if (s.shade === void 0)
          return {
            background: 'transparent',
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${P(1)} solid transparent`,
          };
        const a = t.colors[s.color][s.shade];
        return {
          background: 'transparent',
          hover: ze(a, 0.12),
          color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
          border: `${P(1)} solid transparent`,
        };
      }
      return {
        background: 'transparent',
        hover: ze(e, 0.12),
        color: e,
        border: `${P(1)} solid transparent`,
      };
    }
    return n === 'transparent'
      ? s.isThemeColor
        ? s.shade === void 0
          ? {
              background: 'transparent',
              hover: 'transparent',
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${P(1)} solid transparent`,
            }
          : {
              background: 'transparent',
              hover: 'transparent',
              color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
              border: `${P(1)} solid transparent`,
            }
        : {
            background: 'transparent',
            hover: 'transparent',
            color: e,
            border: `${P(1)} solid transparent`,
          }
      : n === 'white'
        ? s.isThemeColor
          ? s.shade === void 0
            ? {
                background: 'var(--mantine-color-white)',
                hover: rn(t.white, 0.01),
                color: `var(--mantine-color-${e}-filled)`,
                border: `${P(1)} solid transparent`,
              }
            : {
                background: 'var(--mantine-color-white)',
                hover: rn(t.white, 0.01),
                color: `var(--mantine-color-${s.color}-${s.shade})`,
                border: `${P(1)} solid transparent`,
              }
          : {
              background: 'var(--mantine-color-white)',
              hover: rn(t.white, 0.01),
              color: e,
              border: `${P(1)} solid transparent`,
            }
        : n === 'gradient'
          ? {
              background: mr(r, t),
              hover: mr(r, t),
              color: 'var(--mantine-color-white)',
              border: 'none',
            }
          : n === 'default'
            ? {
                background: 'var(--mantine-color-default)',
                hover: 'var(--mantine-color-default-hover)',
                color: 'var(--mantine-color-default-color)',
                border: `${P(1)} solid var(--mantine-color-default-border)`,
              }
            : {};
  },
  pl = {
    dark: [
      '#C9C9C9',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424',
      '#1f1f1f',
      '#141414',
    ],
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
    pink: [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d',
    ],
    grape: [
      '#f8f0fc',
      '#f3d9fa',
      '#eebefa',
      '#e599f7',
      '#da77f2',
      '#cc5de8',
      '#be4bdb',
      '#ae3ec9',
      '#9c36b5',
      '#862e9c',
    ],
    violet: [
      '#f3f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b197fc',
      '#9775fa',
      '#845ef7',
      '#7950f2',
      '#7048e8',
      '#6741d9',
      '#5f3dc4',
    ],
    indigo: [
      '#edf2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
    cyan: [
      '#e3fafc',
      '#c5f6fa',
      '#99e9f2',
      '#66d9e8',
      '#3bc9db',
      '#22b8cf',
      '#15aabf',
      '#1098ad',
      '#0c8599',
      '#0b7285',
    ],
    teal: [
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#63e6be',
      '#38d9a9',
      '#20c997',
      '#12b886',
      '#0ca678',
      '#099268',
      '#087f5b',
    ],
    green: [
      '#ebfbee',
      '#d3f9d8',
      '#b2f2bb',
      '#8ce99a',
      '#69db7c',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44',
      '#2b8a3e',
    ],
    lime: [
      '#f4fce3',
      '#e9fac8',
      '#d8f5a2',
      '#c0eb75',
      '#a9e34b',
      '#94d82d',
      '#82c91e',
      '#74b816',
      '#66a80f',
      '#5c940d',
    ],
    yellow: [
      '#fff9db',
      '#fff3bf',
      '#ffec99',
      '#ffe066',
      '#ffd43b',
      '#fcc419',
      '#fab005',
      '#f59f00',
      '#f08c00',
      '#e67700',
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f',
    ],
  },
  Lo =
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  jr = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: 'auto',
    white: '#fff',
    black: '#000',
    colors: pl,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: 'blue',
    variantColorResolver: fl,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: Lo,
    fontFamilyMonospace:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    respectReducedMotion: !1,
    cursorType: 'default',
    defaultGradient: { from: 'blue', to: 'cyan', deg: 45 },
    defaultRadius: 'sm',
    activeClassName: 'mantine-active',
    focusClassName: '',
    headings: {
      fontFamily: Lo,
      fontWeight: '700',
      textWrap: 'wrap',
      sizes: {
        h1: { fontSize: P(34), lineHeight: '1.3' },
        h2: { fontSize: P(26), lineHeight: '1.35' },
        h3: { fontSize: P(22), lineHeight: '1.4' },
        h4: { fontSize: P(18), lineHeight: '1.45' },
        h5: { fontSize: P(16), lineHeight: '1.5' },
        h6: { fontSize: P(14), lineHeight: '1.5' },
      },
    },
    fontSizes: { xs: P(12), sm: P(14), md: P(16), lg: P(18), xl: P(20) },
    lineHeights: { xs: '1.4', sm: '1.45', md: '1.55', lg: '1.6', xl: '1.65' },
    radius: { xs: P(2), sm: P(4), md: P(8), lg: P(16), xl: P(32) },
    spacing: { xs: P(10), sm: P(12), md: P(16), lg: P(20), xl: P(32) },
    breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
    shadows: {
      xs: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), 0 ${P(1)} ${P(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(10)} ${P(15)} ${P(-5)}, rgba(0, 0, 0, 0.04) 0 ${P(7)} ${P(7)} ${P(-5)}`,
      md: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(20)} ${P(25)} ${P(-5)}, rgba(0, 0, 0, 0.04) 0 ${P(10)} ${P(10)} ${P(-5)}`,
      lg: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(28)} ${P(23)} ${P(-7)}, rgba(0, 0, 0, 0.04) 0 ${P(12)} ${P(12)} ${P(-7)}`,
      xl: `0 ${P(1)} ${P(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${P(36)} ${P(28)} ${P(-7)}, rgba(0, 0, 0, 0.04) 0 ${P(17)} ${P(17)} ${P(-7)}`,
    },
    other: {},
    components: {},
  };
function Do(e) {
  return e === 'auto' || e === 'dark' || e === 'light';
}
function ml({ key: e = 'mantine-color-scheme-value' } = {}) {
  let t;
  return {
    get: n => {
      if (typeof window > 'u') return n;
      try {
        const r = window.localStorage.getItem(e);
        return Do(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: n => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',
          r
        );
      }
    },
    subscribe: n => {
      (t = r => {
        r.storageArea === window.localStorage &&
          r.key === e &&
          Do(r.newValue) &&
          n(r.newValue);
      }),
        window.addEventListener('storage', t);
    },
    unsubscribe: () => {
      window.removeEventListener('storage', t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    },
  };
}
const hl =
    '[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color',
  zo =
    '[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }';
function tr(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Bo(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(hl);
  if (
    typeof e.primaryShade == 'object' &&
    (!tr(e.primaryShade.dark) || !tr(e.primaryShade.light))
  )
    throw new Error(zo);
  if (typeof e.primaryShade == 'number' && !tr(e.primaryShade))
    throw new Error(zo);
}
function gl(e, t) {
  var r;
  if (!t) return Bo(e), e;
  const n = Er(e, t);
  return (
    t.fontFamily &&
      !((r = t.headings) != null && r.fontFamily) &&
      (n.headings.fontFamily = t.fontFamily),
    Bo(n),
    n
  );
}
const kr = m.createContext(null),
  vl = () => m.useContext(kr) || jr;
function Je() {
  const e = m.useContext(kr);
  if (!e)
    throw new Error(
      '@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app'
    );
  return e;
}
function zs({ theme: e, children: t, inherit: n = !0 }) {
  const r = vl(),
    o = m.useMemo(() => gl(n ? r : jr, e), [e, r, n]);
  return h.jsx(kr.Provider, { value: o, children: t });
}
zs.displayName = '@mantine/core/MantineThemeProvider';
function yl() {
  const e = Je(),
    t = Tr(),
    n = Fe(e.breakpoints).reduce((r, o) => {
      const s = e.breakpoints[o].includes('px'),
        i = dr(e.breakpoints[o]),
        a = s ? `${i - 0.1}px` : Io(i - 0.1),
        l = s ? `${i}px` : Io(i);
      return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${o} {display: none !important;}}`;
    }, '');
  return h.jsx('style', {
    'data-mantine-styles': 'classes',
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: n },
  });
}
function nr(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n};`)
    .join('');
}
function Bt(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function bl(e, t) {
  const n = nr(e.variables),
    r = n ? Bt(t, n) : '',
    o = nr(e.dark),
    s = nr(e.light),
    i = o
      ? Bt(
          t === ':host'
            ? `${t}([data-mantine-color-scheme="dark"])`
            : `${t}[data-mantine-color-scheme="dark"]`,
          o
        )
      : '',
    a = s
      ? Bt(
          t === ':host'
            ? `${t}([data-mantine-color-scheme="light"])`
            : `${t}[data-mantine-color-scheme="light"]`,
          s
        )
      : '';
  return `${r}${i}${a}`;
}
function Sn({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == 'boolean' ? n : t.autoContrast) &&
    yt({ color: e || t.primaryColor, theme: t }).isLight
    ? 'var(--mantine-color-black)'
    : 'var(--mantine-color-white)';
}
function Fo(e, t) {
  return Sn({
    color: e.colors[e.primaryColor][Ht(e, t)],
    theme: e,
    autoContrast: null,
  });
}
function on({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0,
}) {
  if (!e.colors[t]) return {};
  if (n === 'light') {
    const a = Ht(e, 'light'),
      l = {
        [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
        [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${a === 9 ? 8 : a + 1})`,
        [`--mantine-color-${r}-light`]: St(e.colors[t][a], 0.1),
        [`--mantine-color-${r}-light-hover`]: St(e.colors[t][a], 0.12),
        [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
        [`--mantine-color-${r}-outline-hover`]: St(e.colors[t][a], 0.05),
      };
    return o
      ? {
          [`--mantine-color-${r}-0`]: e.colors[t][0],
          [`--mantine-color-${r}-1`]: e.colors[t][1],
          [`--mantine-color-${r}-2`]: e.colors[t][2],
          [`--mantine-color-${r}-3`]: e.colors[t][3],
          [`--mantine-color-${r}-4`]: e.colors[t][4],
          [`--mantine-color-${r}-5`]: e.colors[t][5],
          [`--mantine-color-${r}-6`]: e.colors[t][6],
          [`--mantine-color-${r}-7`]: e.colors[t][7],
          [`--mantine-color-${r}-8`]: e.colors[t][8],
          [`--mantine-color-${r}-9`]: e.colors[t][9],
          ...l,
        }
      : l;
  }
  const s = Ht(e, 'dark'),
    i = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${s === 9 ? 8 : s + 1})`,
      [`--mantine-color-${r}-light`]: St(e.colors[t][Math.max(0, s - 2)], 0.15),
      [`--mantine-color-${r}-light-hover`]: St(
        e.colors[t][Math.max(0, s - 2)],
        0.2
      ),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(s - 5, 0)})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(s - 4, 0)})`,
      [`--mantine-color-${r}-outline-hover`]: St(
        e.colors[t][Math.max(s - 4, 0)],
        0.05
      ),
    };
  return o
    ? {
        [`--mantine-color-${r}-0`]: e.colors[t][0],
        [`--mantine-color-${r}-1`]: e.colors[t][1],
        [`--mantine-color-${r}-2`]: e.colors[t][2],
        [`--mantine-color-${r}-3`]: e.colors[t][3],
        [`--mantine-color-${r}-4`]: e.colors[t][4],
        [`--mantine-color-${r}-5`]: e.colors[t][5],
        [`--mantine-color-${r}-6`]: e.colors[t][6],
        [`--mantine-color-${r}-7`]: e.colors[t][7],
        [`--mantine-color-${r}-8`]: e.colors[t][8],
        [`--mantine-color-${r}-9`]: e.colors[t][9],
        ...i,
      }
    : i;
}
function xl(e) {
  return !!e && typeof e == 'object' && 'mantine-virtual-color' in e;
}
function Ct(e, t, n) {
  Fe(t).forEach(r => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] }));
}
const Bs = e => {
  const t = Ht(e, 'light'),
    n =
      e.defaultRadius in e.radius
        ? e.radius[e.defaultRadius]
        : P(e.defaultRadius),
    r = {
      variables: {
        '--mantine-scale': e.scale.toString(),
        '--mantine-cursor-type': e.cursorType,
        '--mantine-color-scheme': 'light dark',
        '--mantine-webkit-font-smoothing': e.fontSmoothing
          ? 'antialiased'
          : 'unset',
        '--mantine-moz-font-smoothing': e.fontSmoothing ? 'grayscale' : 'unset',
        '--mantine-color-white': e.white,
        '--mantine-color-black': e.black,
        '--mantine-line-height': e.lineHeights.md,
        '--mantine-font-family': e.fontFamily,
        '--mantine-font-family-monospace': e.fontFamilyMonospace,
        '--mantine-font-family-headings': e.headings.fontFamily,
        '--mantine-heading-font-weight': e.headings.fontWeight,
        '--mantine-heading-text-wrap': e.headings.textWrap,
        '--mantine-radius-default': n,
        '--mantine-primary-color-filled': `var(--mantine-color-${e.primaryColor}-filled)`,
        '--mantine-primary-color-filled-hover': `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        '--mantine-primary-color-light': `var(--mantine-color-${e.primaryColor}-light)`,
        '--mantine-primary-color-light-hover': `var(--mantine-color-${e.primaryColor}-light-hover)`,
        '--mantine-primary-color-light-color': `var(--mantine-color-${e.primaryColor}-light-color)`,
      },
      light: {
        '--mantine-primary-color-contrast': Fo(e, 'light'),
        '--mantine-color-bright': 'var(--mantine-color-black)',
        '--mantine-color-text': e.black,
        '--mantine-color-body': e.white,
        '--mantine-color-error': 'var(--mantine-color-red-6)',
        '--mantine-color-placeholder': 'var(--mantine-color-gray-5)',
        '--mantine-color-anchor': `var(--mantine-color-${e.primaryColor}-${t})`,
        '--mantine-color-default': 'var(--mantine-color-white)',
        '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
        '--mantine-color-default-color': 'var(--mantine-color-black)',
        '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
        '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
      },
      dark: {
        '--mantine-primary-color-contrast': Fo(e, 'dark'),
        '--mantine-color-bright': 'var(--mantine-color-white)',
        '--mantine-color-text': 'var(--mantine-color-dark-0)',
        '--mantine-color-body': 'var(--mantine-color-dark-7)',
        '--mantine-color-error': 'var(--mantine-color-red-8)',
        '--mantine-color-placeholder': 'var(--mantine-color-dark-3)',
        '--mantine-color-anchor': `var(--mantine-color-${e.primaryColor}-4)`,
        '--mantine-color-default': 'var(--mantine-color-dark-6)',
        '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
        '--mantine-color-default-color': 'var(--mantine-color-white)',
        '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
        '--mantine-color-dimmed': 'var(--mantine-color-dark-2)',
      },
    };
  Ct(r.variables, e.breakpoints, 'breakpoint'),
    Ct(r.variables, e.spacing, 'spacing'),
    Ct(r.variables, e.fontSizes, 'font-size'),
    Ct(r.variables, e.lineHeights, 'line-height'),
    Ct(r.variables, e.shadows, 'shadow'),
    Ct(r.variables, e.radius, 'radius'),
    e.colors[e.primaryColor].forEach((s, i) => {
      r.variables[`--mantine-primary-color-${i}`] =
        `var(--mantine-color-${e.primaryColor}-${i})`;
    }),
    Fe(e.colors).forEach(s => {
      const i = e.colors[s];
      if (xl(i)) {
        Object.assign(
          r.light,
          on({
            theme: e,
            name: i.name,
            color: i.light,
            colorScheme: 'light',
            withColorValues: !0,
          })
        ),
          Object.assign(
            r.dark,
            on({
              theme: e,
              name: i.name,
              color: i.dark,
              colorScheme: 'dark',
              withColorValues: !0,
            })
          );
        return;
      }
      i.forEach((a, l) => {
        r.variables[`--mantine-color-${s}-${l}`] = a;
      }),
        Object.assign(
          r.light,
          on({ theme: e, color: s, colorScheme: 'light', withColorValues: !1 })
        ),
        Object.assign(
          r.dark,
          on({ theme: e, color: s, colorScheme: 'dark', withColorValues: !1 })
        );
    });
  const o = e.headings.sizes;
  return (
    Fe(o).forEach(s => {
      (r.variables[`--mantine-${s}-font-size`] = o[s].fontSize),
        (r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight),
        (r.variables[`--mantine-${s}-font-weight`] =
          o[s].fontWeight || e.headings.fontWeight);
    }),
    r
  );
};
function wl({ theme: e, generator: t }) {
  const n = Bs(e),
    r = t == null ? void 0 : t(e);
  return r ? Er(n, r) : n;
}
const rr = Bs(jr);
function Sl(e) {
  const t = { variables: {}, light: {}, dark: {} };
  return (
    Fe(e.variables).forEach(n => {
      rr.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
    }),
    Fe(e.light).forEach(n => {
      rr.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
    }),
    Fe(e.dark).forEach(n => {
      rr.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
    }),
    t
  );
}
function Cl(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Fs({ cssVariablesSelector: e, deduplicateCssVariables: t }) {
  const n = Je(),
    r = Tr(),
    o = el(),
    s = wl({ theme: n, generator: o }),
    i = e === ':root' && t,
    a = i ? Sl(s) : s,
    l = bl(a, e);
  return l
    ? h.jsx('style', {
        'data-mantine-styles': !0,
        nonce: r == null ? void 0 : r(),
        dangerouslySetInnerHTML: { __html: `${l}${i ? '' : Cl(e)}` },
      })
    : null;
}
Fs.displayName = '@mantine/CssVariables';
function Rl() {
  const e = console.error;
  console.error = (...t) => {
    (t.length > 1 &&
      typeof t[0] == 'string' &&
      t[0].toLowerCase().includes('extra attributes from the server') &&
      typeof t[1] == 'string' &&
      t[1].toLowerCase().includes('data-mantine-color-scheme')) ||
      e(...t);
  };
}
function Rt(e, t) {
  var o, s;
  const n =
      typeof window < 'u' &&
      'matchMedia' in window &&
      ((o = window.matchMedia('(prefers-color-scheme: dark)')) == null
        ? void 0
        : o.matches),
    r = e !== 'auto' ? e : n ? 'dark' : 'light';
  (s = t()) == null || s.setAttribute('data-mantine-color-scheme', r);
}
function $l({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r,
}) {
  const o = m.useRef(null),
    [s, i] = m.useState(() => e.get(t)),
    a = r || s,
    l = m.useCallback(
      u => {
        r || (Rt(u, n), i(u), e.set(u));
      },
      [e.set, a, r]
    ),
    c = m.useCallback(() => {
      i(t), Rt(t, n), e.clear();
    }, [e.clear, t]);
  return (
    m.useEffect(
      () => (e.subscribe(l), e.unsubscribe),
      [e.subscribe, e.unsubscribe]
    ),
    Gt(() => {
      Rt(e.get(t), n);
    }, []),
    m.useEffect(() => {
      var d;
      if (r) return Rt(r, n), () => {};
      r === void 0 && Rt(s, n),
        typeof window < 'u' &&
          'matchMedia' in window &&
          (o.current = window.matchMedia('(prefers-color-scheme: dark)'));
      const u = f => {
        s === 'auto' && Rt(f.matches ? 'dark' : 'light', n);
      };
      return (
        (d = o.current) == null || d.addEventListener('change', u),
        () => {
          var f;
          return (f = o.current) == null
            ? void 0
            : f.removeEventListener('change', u);
        }
      );
    }, [s, r]),
    { colorScheme: a, setColorScheme: l, clearColorScheme: c }
  );
}
function _l({ respectReducedMotion: e, getRootElement: t }) {
  Gt(() => {
    var n;
    e &&
      ((n = t()) == null ||
        n.setAttribute('data-respect-reduced-motion', 'true'));
  }, [e]);
}
Rl();
function El({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: a = ':root',
  classNamesPrefix: l = 'mantine',
  colorSchemeManager: c = ml(),
  defaultColorScheme: u = 'light',
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: p,
  stylesTransform: g,
  env: v,
}) {
  const {
    colorScheme: y,
    setColorScheme: w,
    clearColorScheme: S,
  } = $l({
    defaultColorScheme: u,
    forceColorScheme: p,
    manager: c,
    getRootElement: d,
  });
  return (
    _l({
      respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
      getRootElement: d,
    }),
    h.jsx(Ls.Provider, {
      value: {
        colorScheme: y,
        setColorScheme: w,
        clearColorScheme: S,
        getRootElement: d,
        classNamesPrefix: l,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: a,
        withStaticClasses: r,
        stylesTransform: g,
        env: v,
      },
      children: h.jsxs(zs, {
        theme: e,
        children: [
          i &&
            h.jsx(Fs, { cssVariablesSelector: a, deduplicateCssVariables: s }),
          o && h.jsx(yl, {}),
          t,
        ],
      }),
    })
  );
}
El.displayName = '@mantine/core/MantineProvider';
function Cn({ classNames: e, styles: t, props: n, stylesCtx: r }) {
  const o = Je();
  return {
    resolvedClassNames: wn({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0,
    }),
    resolvedStyles: fn({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0,
    }),
  };
}
const Pl = {
  always: 'mantine-focus-always',
  auto: 'mantine-focus-auto',
  never: 'mantine-focus-never',
};
function Nl({ theme: e, options: t, unstyled: n }) {
  return ge(
    (t == null ? void 0 : t.focusable) &&
      !n &&
      (e.focusClassName || Pl[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function Tl({ selector: e, stylesCtx: t, options: n, props: r, theme: o }) {
  return wn({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t,
  })[e];
}
function Ho({ selector: e, stylesCtx: t, theme: n, classNames: r, props: o }) {
  return wn({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function Al({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function jl({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function kl({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r,
}) {
  return r === !1 ? [] : e.map(o => `${t}-${o}-${n}`);
}
function Ol({ themeName: e, theme: t, selector: n, props: r, stylesCtx: o }) {
  return e.map(s => {
    var i, a;
    return (a = wn({
      theme: t,
      classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
      props: r,
      stylesCtx: o,
    })) == null
      ? void 0
      : a[n];
  });
}
function Il({ options: e, classes: t, selector: n, unstyled: r }) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function Ml({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: s,
  classes: i,
  unstyled: a,
  className: l,
  rootSelector: c,
  props: u,
  stylesCtx: d,
  withStaticClasses: f,
  headless: p,
  transformedStyles: g,
}) {
  return ge(
    Nl({ theme: e, options: t, unstyled: a || p }),
    Ol({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    Il({ options: t, classes: i, selector: r, unstyled: a }),
    Ho({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    Ho({ selector: r, stylesCtx: d, theme: e, classNames: g, props: u }),
    Tl({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    Al({ rootSelector: c, selector: r, className: l }),
    jl({ selector: r, classes: i, unstyled: a || p }),
    f &&
      !p &&
      kl({
        themeName: n,
        classNamesPrefix: o,
        selector: r,
        withStaticClass: t == null ? void 0 : t.withStaticClass,
      }),
    t == null ? void 0 : t.className
  );
}
function Ll({ theme: e, themeName: t, props: n, stylesCtx: r, selector: o }) {
  return t
    .map(s => {
      var i;
      return fn({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r,
      })[o];
    })
    .reduce((s, i) => ({ ...s, ...i }), {});
}
function hr({ style: e, theme: t }) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...hr({ style: r, theme: t }) }), {})
    : typeof e == 'function'
      ? e(t)
      : (e ?? {});
}
function Dl(e) {
  return e.reduce(
    (t, n) => (
      n &&
        Object.keys(n).forEach(r => {
          t[r] = { ...t[r], ...Pr(n[r]) };
        }),
      t
    ),
    {}
  );
}
function zl({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: s,
  themeName: i,
  headless: a,
}) {
  var l;
  return (l = Dl([
    a ? {} : t == null ? void 0 : t(n, r, o),
    ...i.map(c => {
      var u, d, f;
      return (f =
        (d = (u = n.components) == null ? void 0 : u[c]) == null
          ? void 0
          : d.vars) == null
        ? void 0
        : f.call(d, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o),
  ])) == null
    ? void 0
    : l[s];
}
function Bl({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: s,
  rootSelector: i,
  styles: a,
  style: l,
  vars: c,
  varsResolver: u,
  headless: d,
  withStylesTransform: f,
}) {
  return {
    ...(!f &&
      Ll({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n })),
    ...(!f && fn({ theme: e, styles: a, props: o, stylesCtx: s })[n]),
    ...(!f &&
      fn({
        theme: e,
        styles: r == null ? void 0 : r.styles,
        props: (r == null ? void 0 : r.props) || o,
        stylesCtx: s,
      })[n]),
    ...zl({
      theme: e,
      props: o,
      stylesCtx: s,
      vars: c,
      varsResolver: u,
      selector: n,
      themeName: t,
      headless: d,
    }),
    ...(i === n ? hr({ style: l, theme: e }) : null),
    ...hr({ style: r == null ? void 0 : r.style, theme: e }),
  };
}
function Fl({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = Je(),
    o = (i = sl()) == null ? void 0 : i();
  return {
    getTransformedStyles: a =>
      o
        ? [
            ...a.map(c => o(c, { props: e, theme: r, ctx: t })),
            ...n.map(c => {
              var u;
              return o((u = r.components[c]) == null ? void 0 : u.styles, {
                props: e,
                theme: r,
                ctx: t,
              });
            }),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!o,
  };
}
function Z({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: s,
  rootSelector: i = 'root',
  unstyled: a,
  classNames: l,
  styles: c,
  vars: u,
  varsResolver: d,
}) {
  const f = Je(),
    p = tl(),
    g = nl(),
    v = rl(),
    y = (Array.isArray(e) ? e : [e]).filter(x => x),
    { withStylesTransform: w, getTransformedStyles: S } = Fl({
      props: n,
      stylesCtx: r,
      themeName: y,
    });
  return (x, C) => ({
    className: Ml({
      theme: f,
      options: C,
      themeName: y,
      selector: x,
      classNamesPrefix: p,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: g,
      headless: v,
      transformedStyles: S([C == null ? void 0 : C.styles, c]),
    }),
    style: Bl({
      theme: f,
      themeName: y,
      selector: x,
      options: C,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: c,
      style: s,
      vars: u,
      varsResolver: d,
      headless: v,
      withStylesTransform: w,
    }),
  });
}
function Or(e, t) {
  return typeof e == 'boolean' ? e : t.autoContrast;
}
function I(e, t, n) {
  var i;
  const r = Je(),
    o = (i = r.components[e]) == null ? void 0 : i.defaultProps,
    s = typeof o == 'function' ? o(r) : o;
  return { ...t, ...s, ...Pr(n) };
}
function or(e) {
  return Fe(e)
    .reduce((t, n) => (e[n] !== void 0 ? `${t}${Rc(n)}:${e[n]};` : t), '')
    .trim();
}
function Hl({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? or(t) : '',
    s = Array.isArray(n)
      ? n.map(a => `@media${a.query}{${e}{${or(a.styles)}}}`)
      : [],
    i = Array.isArray(r)
      ? r.map(a => `@container ${a.query}{${e}{${or(a.styles)}}}`)
      : [];
  return `${o ? `${e}{${o}}` : ''}${s.join('')}${i.join('')}`.trim();
}
function Wl(e) {
  const t = Tr();
  return h.jsx('style', {
    'data-mantine-styles': 'inline',
    nonce: t == null ? void 0 : t(),
    dangerouslySetInnerHTML: { __html: Hl(e) },
  });
}
function Ut(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: a,
    me: l,
    ms: c,
    p: u,
    px: d,
    py: f,
    pt: p,
    pb: g,
    pl: v,
    pr: y,
    pe: w,
    ps: S,
    bd: x,
    bg: C,
    c: R,
    opacity: $,
    ff: N,
    fz: E,
    fw: M,
    lts: k,
    ta: Y,
    lh: L,
    fs: z,
    tt: V,
    td: G,
    w: j,
    miw: H,
    maw: T,
    h: B,
    mih: b,
    mah: _,
    bgsz: O,
    bgp: A,
    bgr: U,
    bga: q,
    pos: F,
    top: te,
    left: K,
    bottom: ne,
    right: ve,
    inset: Ee,
    display: Ge,
    flex: Le,
    hiddenFrom: rt,
    visibleFrom: ot,
    lightHidden: le,
    darkHidden: se,
    sx: Ue,
    ...Pe
  } = e;
  return {
    styleProps: Pr({
      m: t,
      mx: n,
      my: r,
      mt: o,
      mb: s,
      ml: i,
      mr: a,
      me: l,
      ms: c,
      p: u,
      px: d,
      py: f,
      pt: p,
      pb: g,
      pl: v,
      pr: y,
      pe: w,
      ps: S,
      bd: x,
      bg: C,
      c: R,
      opacity: $,
      ff: N,
      fz: E,
      fw: M,
      lts: k,
      ta: Y,
      lh: L,
      fs: z,
      tt: V,
      td: G,
      w: j,
      miw: H,
      maw: T,
      h: B,
      mih: b,
      mah: _,
      bgsz: O,
      bgp: A,
      bgr: U,
      bga: q,
      pos: F,
      top: te,
      left: K,
      bottom: ne,
      right: ve,
      inset: Ee,
      display: Ge,
      flex: Le,
      hiddenFrom: rt,
      visibleFrom: ot,
      lightHidden: le,
      darkHidden: se,
      sx: Ue,
    }),
    rest: Pe,
  };
}
const Vl = {
  m: { type: 'spacing', property: 'margin' },
  mt: { type: 'spacing', property: 'marginTop' },
  mb: { type: 'spacing', property: 'marginBottom' },
  ml: { type: 'spacing', property: 'marginLeft' },
  mr: { type: 'spacing', property: 'marginRight' },
  ms: { type: 'spacing', property: 'marginInlineStart' },
  me: { type: 'spacing', property: 'marginInlineEnd' },
  mx: { type: 'spacing', property: 'marginInline' },
  my: { type: 'spacing', property: 'marginBlock' },
  p: { type: 'spacing', property: 'padding' },
  pt: { type: 'spacing', property: 'paddingTop' },
  pb: { type: 'spacing', property: 'paddingBottom' },
  pl: { type: 'spacing', property: 'paddingLeft' },
  pr: { type: 'spacing', property: 'paddingRight' },
  ps: { type: 'spacing', property: 'paddingInlineStart' },
  pe: { type: 'spacing', property: 'paddingInlineEnd' },
  px: { type: 'spacing', property: 'paddingInline' },
  py: { type: 'spacing', property: 'paddingBlock' },
  bd: { type: 'border', property: 'border' },
  bg: { type: 'color', property: 'background' },
  c: { type: 'textColor', property: 'color' },
  opacity: { type: 'identity', property: 'opacity' },
  ff: { type: 'fontFamily', property: 'fontFamily' },
  fz: { type: 'fontSize', property: 'fontSize' },
  fw: { type: 'identity', property: 'fontWeight' },
  lts: { type: 'size', property: 'letterSpacing' },
  ta: { type: 'identity', property: 'textAlign' },
  lh: { type: 'lineHeight', property: 'lineHeight' },
  fs: { type: 'identity', property: 'fontStyle' },
  tt: { type: 'identity', property: 'textTransform' },
  td: { type: 'identity', property: 'textDecoration' },
  w: { type: 'spacing', property: 'width' },
  miw: { type: 'spacing', property: 'minWidth' },
  maw: { type: 'spacing', property: 'maxWidth' },
  h: { type: 'spacing', property: 'height' },
  mih: { type: 'spacing', property: 'minHeight' },
  mah: { type: 'spacing', property: 'maxHeight' },
  bgsz: { type: 'size', property: 'backgroundSize' },
  bgp: { type: 'identity', property: 'backgroundPosition' },
  bgr: { type: 'identity', property: 'backgroundRepeat' },
  bga: { type: 'identity', property: 'backgroundAttachment' },
  pos: { type: 'identity', property: 'position' },
  top: { type: 'size', property: 'top' },
  left: { type: 'size', property: 'left' },
  bottom: { type: 'size', property: 'bottom' },
  right: { type: 'size', property: 'right' },
  inset: { type: 'size', property: 'inset' },
  display: { type: 'identity', property: 'display' },
  flex: { type: 'identity', property: 'flex' },
};
function Ir(e, t) {
  const n = yt({ color: e, theme: t });
  return n.color === 'dimmed'
    ? 'var(--mantine-color-dimmed)'
    : n.color === 'bright'
      ? 'var(--mantine-color-bright)'
      : n.variable
        ? `var(${n.variable})`
        : n.color;
}
function Yl(e, t) {
  const n = yt({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0
    ? `var(--mantine-color-${n.color}-text)`
    : Ir(e, t);
}
function Gl(e, t) {
  if (typeof e == 'number') return P(e);
  if (typeof e == 'string') {
    const [n, r, ...o] = e.split(' ').filter(i => i.trim() !== '');
    let s = `${P(n)}`;
    return (
      r && (s += ` ${r}`),
      o.length > 0 && (s += ` ${Ir(o.join(' '), t)}`),
      s.trim()
    );
  }
  return e;
}
const Wo = {
  text: 'var(--mantine-font-family)',
  mono: 'var(--mantine-font-family-monospace)',
  monospace: 'var(--mantine-font-family-monospace)',
  heading: 'var(--mantine-font-family-headings)',
  headings: 'var(--mantine-font-family-headings)',
};
function Ul(e) {
  return typeof e == 'string' && e in Wo ? Wo[e] : e;
}
const ql = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
function Xl(e, t) {
  return typeof e == 'string' && e in t.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == 'string' && ql.includes(e)
      ? `var(--mantine-${e}-font-size)`
      : typeof e == 'number' || typeof e == 'string'
        ? P(e)
        : e;
}
function Zl(e) {
  return e;
}
const Kl = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
function Ql(e, t) {
  return typeof e == 'string' && e in t.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == 'string' && Kl.includes(e)
      ? `var(--mantine-${e}-line-height)`
      : e;
}
function Jl(e) {
  return typeof e == 'number' ? P(e) : e;
}
function eu(e, t) {
  if (typeof e == 'number') return P(e);
  if (typeof e == 'string') {
    const n = e.replace('-', '');
    if (!(n in t.spacing)) return P(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith('-') ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const sr = {
  color: Ir,
  textColor: Yl,
  fontSize: Xl,
  spacing: eu,
  identity: Zl,
  size: Jl,
  lineHeight: Ql,
  fontFamily: Ul,
  border: Gl,
};
function Vo(e) {
  return e.replace('(min-width: ', '').replace('em)', '');
}
function tu({ media: e, ...t }) {
  const r = Object.keys(e)
    .sort((o, s) => Number(Vo(o)) - Number(Vo(s)))
    .map(o => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function nu(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === 'base');
}
function ru(e) {
  return typeof e == 'object' && e !== null
    ? 'base' in e
      ? e.base
      : void 0
    : e;
}
function ou(e) {
  return typeof e == 'object' && e !== null
    ? Fe(e).filter(t => t !== 'base')
    : [];
}
function su(e, t) {
  return typeof e == 'object' && e !== null && t in e ? e[t] : e;
}
function iu({ styleProps: e, data: t, theme: n }) {
  return tu(
    Fe(e).reduce(
      (r, o) => {
        if (o === 'hiddenFrom' || o === 'visibleFrom' || o === 'sx') return r;
        const s = t[o],
          i = Array.isArray(s.property) ? s.property : [s.property],
          a = ru(e[o]);
        if (!nu(e[o]))
          return (
            i.forEach(c => {
              r.inlineStyles[c] = sr[s.type](a, n);
            }),
            r
          );
        r.hasResponsiveStyles = !0;
        const l = ou(e[o]);
        return (
          i.forEach(c => {
            a && (r.styles[c] = sr[s.type](a, n)),
              l.forEach(u => {
                const d = `(min-width: ${n.breakpoints[u]})`;
                r.media[d] = { ...r.media[d], [c]: sr[s.type](su(e[o], u), n) };
              });
          }),
          r
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} }
    )
  );
}
function au() {
  return `__m__-${m.useId().replace(/:/g, '')}`;
}
function Hs(e) {
  return e.startsWith('data-') ? e : `data-${e}`;
}
function cu(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return (
      r === void 0 || r === '' || r === !1 || r === null || (t[Hs(n)] = e[n]), t
    );
  }, {});
}
function Ws(e) {
  return e
    ? typeof e == 'string'
      ? { [Hs(e)]: !0 }
      : Array.isArray(e)
        ? [...e].reduce((t, n) => ({ ...t, ...Ws(n) }), {})
        : cu(e)
    : null;
}
function gr(e, t) {
  return Array.isArray(e)
    ? [...e].reduce((n, r) => ({ ...n, ...gr(r, t) }), {})
    : typeof e == 'function'
      ? e(t)
      : (e ?? {});
}
function lu({ theme: e, style: t, vars: n, styleProps: r }) {
  const o = gr(t, e),
    s = gr(n, e);
  return { ...o, ...s, ...r };
}
const Vs = m.forwardRef(
  (
    {
      component: e,
      style: t,
      __vars: n,
      className: r,
      variant: o,
      mod: s,
      size: i,
      hiddenFrom: a,
      visibleFrom: l,
      lightHidden: c,
      darkHidden: u,
      renderRoot: d,
      __size: f,
      ...p
    },
    g
  ) => {
    var E;
    const v = Je(),
      y = e || 'div',
      { styleProps: w, rest: S } = Ut(p),
      x = ol(),
      C = (E = x == null ? void 0 : x()) == null ? void 0 : E(w.sx),
      R = au(),
      $ = iu({ styleProps: w, theme: v, data: Vl }),
      N = {
        ref: g,
        style: lu({ theme: v, style: t, vars: n, styleProps: $.inlineStyles }),
        className: ge(r, C, {
          [R]: $.hasResponsiveStyles,
          'mantine-light-hidden': c,
          'mantine-dark-hidden': u,
          [`mantine-hidden-from-${a}`]: a,
          [`mantine-visible-from-${l}`]: l,
        }),
        'data-variant': o,
        'data-size': Ns(i) ? void 0 : i || void 0,
        size: f,
        ...Ws(s),
        ...S,
      };
    return h.jsxs(h.Fragment, {
      children: [
        $.hasResponsiveStyles &&
          h.jsx(Wl, { selector: `.${R}`, styles: $.styles, media: $.media }),
        typeof d == 'function' ? d(N) : h.jsx(y, { ...N }),
      ],
    });
  }
);
Vs.displayName = '@mantine/core/Box';
const D = Vs;
function Ys(e) {
  return e;
}
function W(e) {
  const t = m.forwardRef(e);
  return (
    (t.extend = Ys),
    (t.withProps = n => {
      const r = m.forwardRef((o, s) => h.jsx(t, { ...n, ...o, ref: s }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    t
  );
}
function _e(e) {
  const t = m.forwardRef(e);
  return (
    (t.withProps = n => {
      const r = m.forwardRef((o, s) => h.jsx(t, { ...n, ...o, ref: s }));
      return (
        (r.extend = t.extend),
        (r.displayName = `WithProps(${t.displayName})`),
        r
      );
    }),
    (t.extend = Ys),
    t
  );
}
const uu = m.createContext({
  dir: 'ltr',
  toggleDirection: () => {},
  setDirection: () => {},
});
function qt() {
  return m.useContext(uu);
}
function Rn() {
  return typeof window < 'u';
}
function jt(e) {
  return Gs(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Re(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ve(e) {
  var t;
  return (t = (Gs(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gs(e) {
  return Rn() ? e instanceof Node || e instanceof Re(e).Node : !1;
}
function be(e) {
  return Rn() ? e instanceof Element || e instanceof Re(e).Element : !1;
}
function We(e) {
  return Rn() ? e instanceof HTMLElement || e instanceof Re(e).HTMLElement : !1;
}
function Yo(e) {
  return !Rn() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof Re(e).ShadowRoot;
}
function Xt(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Oe(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function du(e) {
  return ['table', 'td', 'th'].includes(jt(e));
}
function $n(e) {
  return [':popover-open', ':modal'].some(t => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Mr(e) {
  const t = Lr(),
    n = be(e) ? Oe(e) : e;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(r =>
      n[r] ? n[r] !== 'none' : !1
    ) ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(
      r => (n.willChange || '').includes(r)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some(r =>
      (n.contain || '').includes(r)
    )
  );
}
function fu(e) {
  let t = it(e);
  for (; We(t) && !Pt(t); ) {
    if (Mr(t)) return t;
    if ($n(t)) return null;
    t = it(t);
  }
  return null;
}
function Lr() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Pt(e) {
  return ['html', 'body', '#document'].includes(jt(e));
}
function Oe(e) {
  return Re(e).getComputedStyle(e);
}
function _n(e) {
  return be(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function it(e) {
  if (jt(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (Yo(e) && e.host) || Ve(e);
  return Yo(t) ? t.host : t;
}
function Us(e) {
  const t = it(e);
  return Pt(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : We(t) && Xt(t)
      ? t
      : Us(t);
}
function Wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Us(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Re(o);
  if (s) {
    const a = vr(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Xt(o) ? o : [],
      a && n ? Wt(a) : []
    );
  }
  return t.concat(o, Wt(o, [], n));
}
function vr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const Ie = Math.min,
  he = Math.max,
  pn = Math.round,
  sn = Math.floor,
  He = e => ({ x: e, y: e }),
  pu = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  mu = { start: 'end', end: 'start' };
function yr(e, t, n) {
  return he(e, Ie(t, n));
}
function Ke(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Me(e) {
  return e.split('-')[0];
}
function kt(e) {
  return e.split('-')[1];
}
function Dr(e) {
  return e === 'x' ? 'y' : 'x';
}
function zr(e) {
  return e === 'y' ? 'height' : 'width';
}
function Qe(e) {
  return ['top', 'bottom'].includes(Me(e)) ? 'y' : 'x';
}
function Br(e) {
  return Dr(Qe(e));
}
function hu(e, t, n) {
  n === void 0 && (n = !1);
  const r = kt(e),
    o = Br(e),
    s = zr(o);
  let i =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[s] > t.floating[s] && (i = mn(i)), [i, mn(i)];
}
function gu(e) {
  const t = mn(e);
  return [br(e), t, br(t)];
}
function br(e) {
  return e.replace(/start|end/g, t => mu[t]);
}
function vu(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    s = ['top', 'bottom'],
    i = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? s : i;
    default:
      return [];
  }
}
function yu(e, t, n, r) {
  const o = kt(e);
  let s = vu(Me(e), n === 'start', r);
  return (
    o && ((s = s.map(i => i + '-' + o)), t && (s = s.concat(s.map(br)))), s
  );
}
function mn(e) {
  return e.replace(/left|right|bottom|top/g, t => pu[t]);
}
function bu(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Fr(e) {
  return typeof e != 'number'
    ? bu(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Nt(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Go(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = Qe(t),
    i = Br(t),
    a = zr(i),
    l = Me(t),
    c = s === 'y',
    u = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    f = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
    case 'top':
      p = { x: u, y: r.y - o.height };
      break;
    case 'bottom':
      p = { x: u, y: r.y + r.height };
      break;
    case 'right':
      p = { x: r.x + r.width, y: d };
      break;
    case 'left':
      p = { x: r.x - o.width, y: d };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (kt(t)) {
    case 'start':
      p[i] -= f * (n && c ? -1 : 1);
      break;
    case 'end':
      p[i] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const xu = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: d } = Go(c, r, l),
    f = r,
    p = {},
    g = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: y, fn: w } = a[v],
      {
        x: S,
        y: x,
        data: C,
        reset: R,
      } = await w({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: p,
        rects: c,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (u = S ?? u),
      (d = x ?? d),
      (p = { ...p, [y]: { ...p[y], ...C } }),
      R &&
        g <= 50 &&
        (g++,
        typeof R == 'object' &&
          (R.placement && (f = R.placement),
          R.rects &&
            (c =
              R.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : R.rects),
          ({ x: u, y: d } = Go(c, f, l))),
        (v = -1));
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: p };
};
async function Hr(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: c = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: d = 'floating',
      altBoundary: f = !1,
      padding: p = 0,
    } = Ke(t, e),
    g = Fr(p),
    y = a[f ? (d === 'floating' ? 'reference' : 'floating') : d],
    w = Nt(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null ||
          n
            ? y
            : y.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      })
    ),
    S =
      d === 'floating'
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    C = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    R = Nt(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: S,
            offsetParent: x,
            strategy: l,
          })
        : S
    );
  return {
    top: (w.top - R.top + g.top) / C.y,
    bottom: (R.bottom - w.bottom + g.bottom) / C.y,
    left: (w.left - R.left + g.left) / C.x,
    right: (R.right - w.right + g.right) / C.x,
  };
}
const wu = e => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: u = 0 } = Ke(e, t) || {};
      if (c == null) return {};
      const d = Fr(u),
        f = { x: n, y: r },
        p = Br(o),
        g = zr(p),
        v = await i.getDimensions(c),
        y = p === 'y',
        w = y ? 'top' : 'left',
        S = y ? 'bottom' : 'right',
        x = y ? 'clientHeight' : 'clientWidth',
        C = s.reference[g] + s.reference[p] - f[p] - s.floating[g],
        R = f[p] - s.reference[p],
        $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
      let N = $ ? $[x] : 0;
      (!N || !(await (i.isElement == null ? void 0 : i.isElement($)))) &&
        (N = a.floating[x] || s.floating[g]);
      const E = C / 2 - R / 2,
        M = N / 2 - v[g] / 2 - 1,
        k = Ie(d[w], M),
        Y = Ie(d[S], M),
        L = k,
        z = N - v[g] - Y,
        V = N / 2 - v[g] / 2 + E,
        G = yr(L, V, z),
        j =
          !l.arrow &&
          kt(o) != null &&
          V !== G &&
          s.reference[g] / 2 - (V < L ? k : Y) - v[g] / 2 < 0,
        H = j ? (V < L ? V - L : V - z) : 0;
      return {
        [p]: f[p] + H,
        data: {
          [p]: G,
          centerOffset: V - G - H,
          ...(j && { alignmentOffset: H }),
        },
        reset: j,
      };
    },
  }),
  Su = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: p = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: v = !0,
              ...y
            } = Ke(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const w = Me(o),
            S = Qe(a),
            x = Me(a) === a,
            C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            R = f || (x || !v ? [mn(a)] : gu(a)),
            $ = g !== 'none';
          !f && $ && R.push(...yu(a, v, g, C));
          const N = [a, ...R],
            E = await Hr(t, y),
            M = [];
          let k = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((u && M.push(E[w]), d)) {
            const V = hu(o, i, C);
            M.push(E[V[0]], E[V[1]]);
          }
          if (
            ((k = [...k, { placement: o, overflows: M }]),
            !M.every(V => V <= 0))
          ) {
            var Y, L;
            const V = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1,
              G = N[V];
            if (G)
              return {
                data: { index: V, overflows: k },
                reset: { placement: G },
              };
            let j =
              (L = k
                .filter(H => H.overflows[0] <= 0)
                .sort((H, T) => H.overflows[1] - T.overflows[1])[0]) == null
                ? void 0
                : L.placement;
            if (!j)
              switch (p) {
                case 'bestFit': {
                  var z;
                  const H =
                    (z = k
                      .filter(T => {
                        if ($) {
                          const B = Qe(T.placement);
                          return B === S || B === 'y';
                        }
                        return !0;
                      })
                      .map(T => [
                        T.placement,
                        T.overflows
                          .filter(B => B > 0)
                          .reduce((B, b) => B + b, 0),
                      ])
                      .sort((T, B) => T[1] - B[1])[0]) == null
                      ? void 0
                      : z[0];
                  H && (j = H);
                  break;
                }
                case 'initialPlacement':
                  j = a;
                  break;
              }
            if (o !== j) return { reset: { placement: j } };
          }
          return {};
        },
      }
    );
  };
function qs(e) {
  const t = Ie(...e.map(s => s.left)),
    n = Ie(...e.map(s => s.top)),
    r = he(...e.map(s => s.right)),
    o = he(...e.map(s => s.bottom));
  return { x: t, y: n, width: r - t, height: o - n };
}
function Cu(e) {
  const t = e.slice().sort((o, s) => o.y - s.y),
    n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s),
      (r = s);
  }
  return n.map(o => Nt(qs(o)));
}
const Ru = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'inline',
      options: e,
      async fn(t) {
        const {
            placement: n,
            elements: r,
            rects: o,
            platform: s,
            strategy: i,
          } = t,
          { padding: a = 2, x: l, y: c } = Ke(e, t),
          u = Array.from(
            (await (s.getClientRects == null
              ? void 0
              : s.getClientRects(r.reference))) || []
          ),
          d = Cu(u),
          f = Nt(qs(u)),
          p = Fr(a);
        function g() {
          if (
            d.length === 2 &&
            d[0].left > d[1].right &&
            l != null &&
            c != null
          )
            return (
              d.find(
                y =>
                  l > y.left - p.left &&
                  l < y.right + p.right &&
                  c > y.top - p.top &&
                  c < y.bottom + p.bottom
              ) || f
            );
          if (d.length >= 2) {
            if (Qe(n) === 'y') {
              const k = d[0],
                Y = d[d.length - 1],
                L = Me(n) === 'top',
                z = k.top,
                V = Y.bottom,
                G = L ? k.left : Y.left,
                j = L ? k.right : Y.right,
                H = j - G,
                T = V - z;
              return {
                top: z,
                bottom: V,
                left: G,
                right: j,
                width: H,
                height: T,
                x: G,
                y: z,
              };
            }
            const y = Me(n) === 'left',
              w = he(...d.map(k => k.right)),
              S = Ie(...d.map(k => k.left)),
              x = d.filter(k => (y ? k.left === S : k.right === w)),
              C = x[0].top,
              R = x[x.length - 1].bottom,
              $ = S,
              N = w,
              E = N - $,
              M = R - C;
            return {
              top: C,
              bottom: R,
              left: $,
              right: N,
              width: E,
              height: M,
              x: $,
              y: C,
            };
          }
          return f;
        }
        const v = await s.getElementRects({
          reference: { getBoundingClientRect: g },
          floating: r.floating,
          strategy: i,
        });
        return o.reference.x !== v.reference.x ||
          o.reference.y !== v.reference.y ||
          o.reference.width !== v.reference.width ||
          o.reference.height !== v.reference.height
          ? { reset: { rects: v } }
          : {};
      },
    }
  );
};
async function $u(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Me(n),
    a = kt(n),
    l = Qe(n) === 'y',
    c = ['left', 'top'].includes(i) ? -1 : 1,
    u = s && l ? -1 : 1,
    d = Ke(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: g,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof g == 'number' && (p = a === 'end' ? g * -1 : g),
    l ? { x: p * u, y: f * c } : { x: f * c, y: p * u }
  );
}
const _u = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await $u(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  Eu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: y => {
                  let { x: w, y: S } = y;
                  return { x: w, y: S };
                },
              },
              ...l
            } = Ke(e, t),
            c = { x: n, y: r },
            u = await Hr(t, l),
            d = Qe(Me(o)),
            f = Dr(d);
          let p = c[f],
            g = c[d];
          if (s) {
            const y = f === 'y' ? 'top' : 'left',
              w = f === 'y' ? 'bottom' : 'right',
              S = p + u[y],
              x = p - u[w];
            p = yr(S, p, x);
          }
          if (i) {
            const y = d === 'y' ? 'top' : 'left',
              w = d === 'y' ? 'bottom' : 'right',
              S = g + u[y],
              x = g - u[w];
            g = yr(S, g, x);
          }
          const v = a.fn({ ...t, [f]: p, [d]: g });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [f]: s, [d]: i } },
          };
        },
      }
    );
  },
  Pu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Ke(e, t),
            u = { x: n, y: r },
            d = Qe(o),
            f = Dr(d);
          let p = u[f],
            g = u[d];
          const v = Ke(a, t),
            y =
              typeof v == 'number'
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (l) {
            const x = f === 'y' ? 'height' : 'width',
              C = s.reference[f] - s.floating[x] + y.mainAxis,
              R = s.reference[f] + s.reference[x] - y.mainAxis;
            p < C ? (p = C) : p > R && (p = R);
          }
          if (c) {
            var w, S;
            const x = f === 'y' ? 'width' : 'height',
              C = ['top', 'left'].includes(Me(o)),
              R =
                s.reference[d] -
                s.floating[x] +
                ((C && ((w = i.offset) == null ? void 0 : w[d])) || 0) +
                (C ? 0 : y.crossAxis),
              $ =
                s.reference[d] +
                s.reference[x] +
                (C ? 0 : ((S = i.offset) == null ? void 0 : S[d]) || 0) -
                (C ? y.crossAxis : 0);
            g < R ? (g = R) : g > $ && (g = $);
          }
          return { [f]: p, [d]: g };
        },
      }
    );
  },
  Nu = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: a } = t,
            { apply: l = () => {}, ...c } = Ke(e, t),
            u = await Hr(t, c),
            d = Me(o),
            f = kt(o),
            p = Qe(o) === 'y',
            { width: g, height: v } = s.floating;
          let y, w;
          d === 'top' || d === 'bottom'
            ? ((y = d),
              (w =
                f ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((w = d), (y = f === 'end' ? 'top' : 'bottom'));
          const S = v - u.top - u.bottom,
            x = g - u.left - u.right,
            C = Ie(v - u[y], S),
            R = Ie(g - u[w], x),
            $ = !t.middlewareData.shift;
          let N = C,
            E = R;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (E = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = S),
            $ && !f)
          ) {
            const k = he(u.left, 0),
              Y = he(u.right, 0),
              L = he(u.top, 0),
              z = he(u.bottom, 0);
            p
              ? (E = g - 2 * (k !== 0 || Y !== 0 ? k + Y : he(u.left, u.right)))
              : (N =
                  v - 2 * (L !== 0 || z !== 0 ? L + z : he(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: E, availableHeight: N });
          const M = await i.getDimensions(a.floating);
          return g !== M.width || v !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Xs(e) {
  const t = Oe(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = We(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = pn(n) !== s || pn(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function Wr(e) {
  return be(e) ? e : e.contextElement;
}
function _t(e) {
  const t = Wr(e);
  if (!We(t)) return He(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Xs(t);
  let i = (s ? pn(n.width) : n.width) / r,
    a = (s ? pn(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const Tu = He(0);
function Zs(e) {
  const t = Re(e);
  return !Lr() || !t.visualViewport
    ? Tu
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Au(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Re(e)) ? !1 : t;
}
function gt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = Wr(e);
  let i = He(1);
  t && (r ? be(r) && (i = _t(r)) : (i = _t(e)));
  const a = Au(s, n, r) ? Zs(s) : He(0);
  let l = (o.left + a.x) / i.x,
    c = (o.top + a.y) / i.y,
    u = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const f = Re(s),
      p = r && be(r) ? Re(r) : r;
    let g = f,
      v = vr(g);
    for (; v && r && p !== g; ) {
      const y = _t(v),
        w = v.getBoundingClientRect(),
        S = Oe(v),
        x = w.left + (v.clientLeft + parseFloat(S.paddingLeft)) * y.x,
        C = w.top + (v.clientTop + parseFloat(S.paddingTop)) * y.y;
      (l *= y.x),
        (c *= y.y),
        (u *= y.x),
        (d *= y.y),
        (l += x),
        (c += C),
        (g = Re(v)),
        (v = vr(g));
    }
  }
  return Nt({ width: u, height: d, x: l, y: c });
}
function Vr(e, t) {
  const n = _n(e).scrollLeft;
  return t ? t.left + n : gt(Ve(e)).left + n;
}
function Ks(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Vr(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function ju(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === 'fixed',
    i = Ve(r),
    a = t ? $n(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = He(1);
  const u = He(0),
    d = We(r);
  if (
    (d || (!d && !s)) &&
    ((jt(r) !== 'body' || Xt(i)) && (l = _n(r)), We(r))
  ) {
    const p = gt(r);
    (c = _t(r)), (u.x = p.x + r.clientLeft), (u.y = p.y + r.clientTop);
  }
  const f = i && !d && !s ? Ks(i, l, !0) : He(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
  };
}
function ku(e) {
  return Array.from(e.getClientRects());
}
function Ou(e) {
  const t = Ve(e),
    n = _n(e),
    r = e.ownerDocument.body,
    o = he(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = he(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Vr(e);
  const a = -n.scrollTop;
  return (
    Oe(r).direction === 'rtl' && (i += he(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
function Iu(e, t) {
  const n = Re(e),
    r = Ve(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = Lr();
    (!c || (c && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: s, height: i, x: a, y: l };
}
function Mu(e, t) {
  const n = gt(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = We(e) ? _t(e) : He(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    c = r * s.y;
  return { width: i, height: a, x: l, y: c };
}
function Uo(e, t, n) {
  let r;
  if (t === 'viewport') r = Iu(e, n);
  else if (t === 'document') r = Ou(Ve(e));
  else if (be(t)) r = Mu(t, n);
  else {
    const o = Zs(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Nt(r);
}
function Qs(e, t) {
  const n = it(e);
  return n === t || !be(n) || Pt(n)
    ? !1
    : Oe(n).position === 'fixed' || Qs(n, t);
}
function Lu(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Wt(e, [], !1).filter(a => be(a) && jt(a) !== 'body'),
    o = null;
  const s = Oe(e).position === 'fixed';
  let i = s ? it(e) : e;
  for (; be(i) && !Pt(i); ) {
    const a = Oe(i),
      l = Mr(i);
    !l && a.position === 'fixed' && (o = null),
      (
        s
          ? !l && !o
          : (!l &&
              a.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (Xt(i) && !l && Qs(e, i))
      )
        ? (r = r.filter(u => u !== i))
        : (o = a),
      (i = it(i));
  }
  return t.set(e, r), r;
}
function Du(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === 'clippingAncestors'
        ? $n(t)
          ? []
          : Lu(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce(
      (c, u) => {
        const d = Uo(t, u, o);
        return (
          (c.top = he(d.top, c.top)),
          (c.right = Ie(d.right, c.right)),
          (c.bottom = Ie(d.bottom, c.bottom)),
          (c.left = he(d.left, c.left)),
          c
        );
      },
      Uo(t, a, o)
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function zu(e) {
  const { width: t, height: n } = Xs(e);
  return { width: t, height: n };
}
function Bu(e, t, n) {
  const r = We(t),
    o = Ve(t),
    s = n === 'fixed',
    i = gt(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = He(0);
  if (r || (!r && !s))
    if (((jt(t) !== 'body' || Xt(o)) && (a = _n(t)), r)) {
      const f = gt(t, !0, s, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else o && (l.x = Vr(o));
  const c = o && !r && !s ? Ks(o, a) : He(0),
    u = i.left + a.scrollLeft - l.x - c.x,
    d = i.top + a.scrollTop - l.y - c.y;
  return { x: u, y: d, width: i.width, height: i.height };
}
function ir(e) {
  return Oe(e).position === 'static';
}
function qo(e, t) {
  if (!We(e) || Oe(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Ve(e) === n && (n = n.ownerDocument.body), n;
}
function Js(e, t) {
  const n = Re(e);
  if ($n(e)) return n;
  if (!We(e)) {
    let o = it(e);
    for (; o && !Pt(o); ) {
      if (be(o) && !ir(o)) return o;
      o = it(o);
    }
    return n;
  }
  let r = qo(e, t);
  for (; r && du(r) && ir(r); ) r = qo(r, t);
  return r && Pt(r) && ir(r) && !Mr(r) ? n : r || fu(e) || n;
}
const Fu = async function (e) {
  const t = this.getOffsetParent || Js,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Bu(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Hu(e) {
  return Oe(e).direction === 'rtl';
}
const Wu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ju,
  getDocumentElement: Ve,
  getClippingRect: Du,
  getOffsetParent: Js,
  getElementRects: Fu,
  getClientRects: ku,
  getDimensions: zu,
  getScale: _t,
  isElement: be,
  isRTL: Hu,
};
function ei(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Vu(e, t) {
  let n = null,
    r;
  const o = Ve(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = c;
    if ((a || t(), !f || !p)) return;
    const g = sn(d),
      v = sn(o.clientWidth - (u + f)),
      y = sn(o.clientHeight - (d + p)),
      w = sn(u),
      x = {
        rootMargin: -g + 'px ' + -v + 'px ' + -y + 'px ' + -w + 'px',
        threshold: he(0, Ie(1, l)) || 1,
      };
    let C = !0;
    function R($) {
      const N = $[0].intersectionRatio;
      if (N !== l) {
        if (!C) return i();
        N
          ? i(!1, N)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      N === 1 && !ei(c, e.getBoundingClientRect()) && i(), (C = !1);
    }
    try {
      n = new IntersectionObserver(R, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(R, x);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Yu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: a = typeof IntersectionObserver == 'function',
      animationFrame: l = !1,
    } = r,
    c = Wr(e),
    u = o || s ? [...(c ? Wt(c) : []), ...Wt(t)] : [];
  u.forEach(w => {
    o && w.addEventListener('scroll', n, { passive: !0 }),
      s && w.addEventListener('resize', n);
  });
  const d = c && a ? Vu(c, n) : null;
  let f = -1,
    p = null;
  i &&
    ((p = new ResizeObserver(w => {
      let [S] = w;
      S &&
        S.target === c &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var x;
          (x = p) == null || x.observe(t);
        }))),
        n();
    })),
    c && !l && p.observe(c),
    p.observe(t));
  let g,
    v = l ? gt(e) : null;
  l && y();
  function y() {
    const w = gt(e);
    v && !ei(v, w) && n(), (v = w), (g = requestAnimationFrame(y));
  }
  return (
    n(),
    () => {
      var w;
      u.forEach(S => {
        o && S.removeEventListener('scroll', n),
          s && S.removeEventListener('resize', n);
      }),
        d == null || d(),
        (w = p) == null || w.disconnect(),
        (p = null),
        l && cancelAnimationFrame(g);
    }
  );
}
const Gu = _u,
  Uu = Eu,
  qu = Su,
  Xu = Nu,
  Xo = wu,
  Zu = Ru,
  Ku = Pu,
  Qu = (e, t, n) => {
    const r = new Map(),
      o = { platform: Wu, ...n },
      s = { ...o.platform, _c: r };
    return xu(e, t, { ...o, platform: s });
  };
var dn = typeof document < 'u' ? m.useLayoutEffect : m.useEffect;
function hn(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!hn(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === '_owner' && e.$$typeof) && !hn(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ti(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zo(e, t) {
  const n = ti(e);
  return Math.round(t * n) / n;
}
function ar(e) {
  const t = m.useRef(e);
  return (
    dn(() => {
      t.current = e;
    }),
    t
  );
}
function Ju(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, d] = m.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = m.useState(r);
  hn(f, r) || p(r);
  const [g, v] = m.useState(null),
    [y, w] = m.useState(null),
    S = m.useCallback(T => {
      T !== $.current && (($.current = T), v(T));
    }, []),
    x = m.useCallback(T => {
      T !== N.current && ((N.current = T), w(T));
    }, []),
    C = s || g,
    R = i || y,
    $ = m.useRef(null),
    N = m.useRef(null),
    E = m.useRef(u),
    M = l != null,
    k = ar(l),
    Y = ar(o),
    L = ar(c),
    z = m.useCallback(() => {
      if (!$.current || !N.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      Y.current && (T.platform = Y.current),
        Qu($.current, N.current, T).then(B => {
          const b = { ...B, isPositioned: L.current !== !1 };
          V.current &&
            !hn(E.current, b) &&
            ((E.current = b),
            _r.flushSync(() => {
              d(b);
            }));
        });
    }, [f, t, n, Y, L]);
  dn(() => {
    c === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), d(T => ({ ...T, isPositioned: !1 })));
  }, [c]);
  const V = m.useRef(!1);
  dn(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    dn(() => {
      if ((C && ($.current = C), R && (N.current = R), C && R)) {
        if (k.current) return k.current(C, R, z);
        z();
      }
    }, [C, R, z, k, M]);
  const G = m.useMemo(
      () => ({ reference: $, floating: N, setReference: S, setFloating: x }),
      [S, x]
    ),
    j = m.useMemo(() => ({ reference: C, floating: R }), [C, R]),
    H = m.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!j.floating) return T;
      const B = Zo(j.floating, u.x),
        b = Zo(j.floating, u.y);
      return a
        ? {
            ...T,
            transform: 'translate(' + B + 'px, ' + b + 'px)',
            ...(ti(j.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: B, top: b };
    }, [n, a, j.floating, u.x, u.y]);
  return m.useMemo(
    () => ({ ...u, update: z, refs: G, elements: j, floatingStyles: H }),
    [u, z, G, j, H]
  );
}
const ed = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Xo({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Xo({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  td = (e, t) => ({ ...Gu(e), options: [e, t] }),
  nd = (e, t) => ({ ...Uu(e), options: [e, t] }),
  Ko = (e, t) => ({ ...Ku(e), options: [e, t] }),
  Qo = (e, t) => ({ ...qu(e), options: [e, t] }),
  rd = (e, t) => ({ ...Xu(e), options: [e, t] }),
  Jo = (e, t) => ({ ...Zu(e), options: [e, t] }),
  od = (e, t) => ({ ...ed(e), options: [e, t] });
function sd(e) {
  return m.useMemo(
    () =>
      e.every(t => t == null)
        ? null
        : t => {
            e.forEach(n => {
              typeof n == 'function' ? n(t) : n != null && (n.current = t);
            });
          },
    e
  );
}
const ni = { ...Da },
  id = ni.useInsertionEffect,
  ad = id || (e => e());
function cd(e) {
  const t = m.useRef(() => {});
  return (
    ad(() => {
      t.current = e;
    }),
    m.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
var xr = typeof document < 'u' ? m.useLayoutEffect : m.useEffect;
let es = !1,
  ld = 0;
const ts = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + ld++;
function ud() {
  const [e, t] = m.useState(() => (es ? ts() : void 0));
  return (
    xr(() => {
      e == null && t(ts());
    }, []),
    m.useEffect(() => {
      es = !0;
    }, []),
    e
  );
}
const dd = ni.useId,
  fd = dd || ud;
function pd() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach(o => o(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      var r;
      e.set(
        t,
        ((r = e.get(t)) == null ? void 0 : r.filter(o => o !== n)) || []
      );
    },
  };
}
const md = m.createContext(null),
  hd = m.createContext(null),
  gd = () => {
    var e;
    return ((e = m.useContext(md)) == null ? void 0 : e.id) || null;
  },
  vd = () => m.useContext(hd);
function yd(e) {
  const { open: t = !1, onOpenChange: n, elements: r } = e,
    o = fd(),
    s = m.useRef({}),
    [i] = m.useState(() => pd()),
    a = gd() != null,
    [l, c] = m.useState(r.reference),
    u = cd((p, g, v) => {
      (s.current.openEvent = p ? g : void 0),
        i.emit('openchange', { open: p, event: g, reason: v, nested: a }),
        n == null || n(p, g, v);
    }),
    d = m.useMemo(() => ({ setPositionReference: c }), []),
    f = m.useMemo(
      () => ({
        reference: l || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference,
      }),
      [l, r.reference, r.floating]
    );
  return m.useMemo(
    () => ({
      dataRef: s,
      open: t,
      onOpenChange: u,
      elements: f,
      events: i,
      floatingId: o,
      refs: d,
    }),
    [t, u, f, i, o, d]
  );
}
function bd(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    n = yd({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    r = e.rootContext || n,
    o = r.elements,
    [s, i] = m.useState(null),
    [a, l] = m.useState(null),
    u = (o == null ? void 0 : o.domReference) || s,
    d = m.useRef(null),
    f = vd();
  xr(() => {
    u && (d.current = u);
  }, [u]);
  const p = Ju({ ...e, elements: { ...o, ...(a && { reference: a }) } }),
    g = m.useCallback(
      x => {
        const C = be(x)
          ? {
              getBoundingClientRect: () => x.getBoundingClientRect(),
              contextElement: x,
            }
          : x;
        l(C), p.refs.setReference(C);
      },
      [p.refs]
    ),
    v = m.useCallback(
      x => {
        (be(x) || x === null) && ((d.current = x), i(x)),
          (be(p.refs.reference.current) ||
            p.refs.reference.current === null ||
            (x !== null && !be(x))) &&
            p.refs.setReference(x);
      },
      [p.refs]
    ),
    y = m.useMemo(
      () => ({
        ...p.refs,
        setReference: v,
        setPositionReference: g,
        domReference: d,
      }),
      [p.refs, v, g]
    ),
    w = m.useMemo(() => ({ ...p.elements, domReference: u }), [p.elements, u]),
    S = m.useMemo(
      () => ({ ...p, ...r, refs: y, elements: w, nodeId: t }),
      [p, y, w, t, r]
    );
  return (
    xr(() => {
      r.dataRef.current.floatingContext = S;
      const x = f == null ? void 0 : f.nodesRef.current.find(C => C.id === t);
      x && (x.context = S);
    }),
    m.useMemo(() => ({ ...p, context: S, refs: y, elements: w }), [p, y, w, S])
  );
}
const [xd, Te] = ct('ScrollArea.Root component was not found in tree');
function Tt(e, t) {
  const n = ft(t);
  Gt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
const wd = m.forwardRef((e, t) => {
    const { style: n, ...r } = e,
      o = Te(),
      [s, i] = m.useState(0),
      [a, l] = m.useState(0),
      c = !!(s && a);
    return (
      Tt(o.scrollbarX, () => {
        var d;
        const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
        o.onCornerHeightChange(u), l(u);
      }),
      Tt(o.scrollbarY, () => {
        var d;
        const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
        o.onCornerWidthChange(u), i(u);
      }),
      c
        ? h.jsx('div', { ...r, ref: t, style: { ...n, width: s, height: a } })
        : null
    );
  }),
  Sd = m.forwardRef((e, t) => {
    const n = Te(),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== 'scroll' && r ? h.jsx(wd, { ...e, ref: t }) : null;
  }),
  Cd = { scrollHideDelay: 1e3, type: 'hover' },
  ri = m.forwardRef((e, t) => {
    const n = I('ScrollAreaRoot', Cd, e),
      { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n,
      [a, l] = m.useState(null),
      [c, u] = m.useState(null),
      [d, f] = m.useState(null),
      [p, g] = m.useState(null),
      [v, y] = m.useState(null),
      [w, S] = m.useState(0),
      [x, C] = m.useState(0),
      [R, $] = m.useState(!1),
      [N, E] = m.useState(!1),
      M = $e(t, k => l(k));
    return h.jsx(xd, {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: c,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: g,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: $,
        scrollbarY: v,
        onScrollbarYChange: y,
        scrollbarYEnabled: N,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: S,
        onCornerHeightChange: C,
      },
      children: h.jsx(D, {
        ...i,
        ref: M,
        __vars: {
          '--sa-corner-width': s !== 'xy' ? '0px' : `${w}px`,
          '--sa-corner-height': s !== 'xy' ? '0px' : `${x}px`,
        },
      }),
    });
  });
ri.displayName = '@mantine/core/ScrollAreaRoot';
function oi(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function En(e) {
  const t = oi(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function si(e, t) {
  return n => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Rd(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ns(e, t, n = 'ltr') {
  const r = En(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    i = t.content - t.viewport,
    a = s - r,
    l = n === 'ltr' ? [0, i] : [i * -1, 0],
    c = Rd(e, l);
  return si([0, i], [0, a])(c);
}
function $d(e, t, n, r = 'ltr') {
  const o = En(n),
    s = o / 2,
    i = t || s,
    a = o - i,
    l = n.scrollbar.paddingStart + i,
    c = n.scrollbar.size - n.scrollbar.paddingEnd - a,
    u = n.content - n.viewport,
    d = r === 'ltr' ? [0, u] : [u * -1, 0];
  return si([l, c], d)(e);
}
function ii(e, t) {
  return e > 0 && e < t;
}
function gn(e) {
  return e ? parseInt(e, 10) : 0;
}
function pt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return r => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [_d, ai] = ct('ScrollAreaScrollbar was not found in tree'),
  ci = m.forwardRef((e, t) => {
    const {
        sizes: n,
        hasThumb: r,
        onThumbChange: o,
        onThumbPointerUp: s,
        onThumbPointerDown: i,
        onThumbPositionChange: a,
        onDragScroll: l,
        onWheelScroll: c,
        onResize: u,
        ...d
      } = e,
      f = Te(),
      [p, g] = m.useState(null),
      v = $e(t, E => g(E)),
      y = m.useRef(null),
      w = m.useRef(''),
      { viewport: S } = f,
      x = n.content - n.viewport,
      C = ft(c),
      R = ft(a),
      $ = xn(u, 10),
      N = E => {
        if (y.current) {
          const M = E.clientX - y.current.left,
            k = E.clientY - y.current.top;
          l({ x: M, y: k });
        }
      };
    return (
      m.useEffect(() => {
        const E = M => {
          const k = M.target;
          (p == null ? void 0 : p.contains(k)) && C(M, x);
        };
        return (
          document.addEventListener('wheel', E, { passive: !1 }),
          () => document.removeEventListener('wheel', E, { passive: !1 })
        );
      }, [S, p, x, C]),
      m.useEffect(R, [n, R]),
      Tt(p, $),
      Tt(f.content, $),
      h.jsx(_d, {
        value: {
          scrollbar: p,
          hasThumb: r,
          onThumbChange: ft(o),
          onThumbPointerUp: ft(s),
          onThumbPositionChange: R,
          onThumbPointerDown: ft(i),
        },
        children: h.jsx('div', {
          ...d,
          ref: v,
          'data-mantine-scrollbar': !0,
          style: { position: 'absolute', ...d.style },
          onPointerDown: pt(e.onPointerDown, E => {
            E.preventDefault(),
              E.button === 0 &&
                (E.target.setPointerCapture(E.pointerId),
                (y.current = p.getBoundingClientRect()),
                (w.current = document.body.style.webkitUserSelect),
                (document.body.style.webkitUserSelect = 'none'),
                N(E));
          }),
          onPointerMove: pt(e.onPointerMove, N),
          onPointerUp: pt(e.onPointerUp, E => {
            const M = E.target;
            M.hasPointerCapture(E.pointerId) &&
              (E.preventDefault(), M.releasePointerCapture(E.pointerId));
          }),
          onLostPointerCapture: () => {
            (document.body.style.webkitUserSelect = w.current),
              (y.current = null);
          },
        }),
      })
    );
  }),
  li = m.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e,
      i = Te(),
      [a, l] = m.useState(),
      c = m.useRef(null),
      u = $e(t, c, i.onScrollbarXChange);
    return (
      m.useEffect(() => {
        c.current && l(getComputedStyle(c.current));
      }, [c]),
      h.jsx(ci, {
        'data-orientation': 'horizontal',
        ...s,
        ref: u,
        sizes: n,
        style: { ...o, '--sa-thumb-width': `${En(n)}px` },
        onThumbPointerDown: d => e.onThumbPointerDown(d.x),
        onDragScroll: d => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), ii(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          c.current &&
            i.viewport &&
            a &&
            r({
              content: i.viewport.scrollWidth,
              viewport: i.viewport.offsetWidth,
              scrollbar: {
                size: c.current.clientWidth,
                paddingStart: gn(a.paddingLeft),
                paddingEnd: gn(a.paddingRight),
              },
            });
        },
      })
    );
  });
li.displayName = '@mantine/core/ScrollAreaScrollbarX';
const ui = m.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, style: o, ...s } = e,
    i = Te(),
    [a, l] = m.useState(),
    c = m.useRef(null),
    u = $e(t, c, i.onScrollbarYChange);
  return (
    m.useEffect(() => {
      c.current && l(window.getComputedStyle(c.current));
    }, []),
    h.jsx(ci, {
      ...s,
      'data-orientation': 'vertical',
      ref: u,
      sizes: n,
      style: { '--sa-thumb-height': `${En(n)}px`, ...o },
      onThumbPointerDown: d => e.onThumbPointerDown(d.y),
      onDragScroll: d => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (i.viewport) {
          const p = i.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), ii(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current &&
          i.viewport &&
          a &&
          r({
            content: i.viewport.scrollHeight,
            viewport: i.viewport.offsetHeight,
            scrollbar: {
              size: c.current.clientHeight,
              paddingStart: gn(a.paddingTop),
              paddingEnd: gn(a.paddingBottom),
            },
          });
      },
    })
  );
});
ui.displayName = '@mantine/core/ScrollAreaScrollbarY';
const Pn = m.forwardRef((e, t) => {
  const { orientation: n = 'vertical', ...r } = e,
    { dir: o } = qt(),
    s = Te(),
    i = m.useRef(null),
    a = m.useRef(0),
    [l, c] = m.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
    }),
    u = oi(l.viewport, l.content),
    d = {
      ...r,
      sizes: l,
      onSizesChange: c,
      hasThumb: u > 0 && u < 1,
      onThumbChange: p => {
        i.current = p;
      },
      onThumbPointerUp: () => {
        a.current = 0;
      },
      onThumbPointerDown: p => {
        a.current = p;
      },
    },
    f = (p, g) => $d(p, a.current, l, g);
  return n === 'horizontal'
    ? h.jsx(li, {
        ...d,
        ref: t,
        onThumbPositionChange: () => {
          if (s.viewport && i.current) {
            const p = s.viewport.scrollLeft,
              g = ns(p, l, o);
            i.current.style.transform = `translate3d(${g}px, 0, 0)`;
          }
        },
        onWheelScroll: p => {
          s.viewport && (s.viewport.scrollLeft = p);
        },
        onDragScroll: p => {
          s.viewport && (s.viewport.scrollLeft = f(p, o));
        },
      })
    : n === 'vertical'
      ? h.jsx(ui, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (s.viewport && i.current) {
              const p = s.viewport.scrollTop,
                g = ns(p, l);
              l.scrollbar.size === 0
                ? i.current.style.setProperty('--thumb-opacity', '0')
                : i.current.style.setProperty('--thumb-opacity', '1'),
                (i.current.style.transform = `translate3d(0, ${g}px, 0)`);
            }
          },
          onWheelScroll: p => {
            s.viewport && (s.viewport.scrollTop = p);
          },
          onDragScroll: p => {
            s.viewport && (s.viewport.scrollTop = f(p));
          },
        })
      : null;
});
Pn.displayName = '@mantine/core/ScrollAreaScrollbarVisible';
const Yr = m.forwardRef((e, t) => {
  const n = Te(),
    { forceMount: r, ...o } = e,
    [s, i] = m.useState(!1),
    a = e.orientation === 'horizontal',
    l = xn(() => {
      if (n.viewport) {
        const c = n.viewport.offsetWidth < n.viewport.scrollWidth,
          u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        i(a ? c : u);
      }
    }, 10);
  return (
    Tt(n.viewport, l),
    Tt(n.content, l),
    r || s
      ? h.jsx(Pn, { 'data-state': s ? 'visible' : 'hidden', ...o, ref: t })
      : null
  );
});
Yr.displayName = '@mantine/core/ScrollAreaScrollbarAuto';
const di = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e,
    o = Te(),
    [s, i] = m.useState(!1);
  return (
    m.useEffect(() => {
      const { scrollArea: a } = o;
      let l = 0;
      if (a) {
        const c = () => {
            window.clearTimeout(l), i(!0);
          },
          u = () => {
            l = window.setTimeout(() => i(!1), o.scrollHideDelay);
          };
        return (
          a.addEventListener('pointerenter', c),
          a.addEventListener('pointerleave', u),
          () => {
            window.clearTimeout(l),
              a.removeEventListener('pointerenter', c),
              a.removeEventListener('pointerleave', u);
          }
        );
      }
    }, [o.scrollArea, o.scrollHideDelay]),
    n || s
      ? h.jsx(Yr, { 'data-state': s ? 'visible' : 'hidden', ...r, ref: t })
      : null
  );
});
di.displayName = '@mantine/core/ScrollAreaScrollbarHover';
const Ed = m.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Te(),
      s = e.orientation === 'horizontal',
      [i, a] = m.useState('hidden'),
      l = xn(() => a('idle'), 100);
    return (
      m.useEffect(() => {
        if (i === 'idle') {
          const c = window.setTimeout(() => a('hidden'), o.scrollHideDelay);
          return () => window.clearTimeout(c);
        }
      }, [i, o.scrollHideDelay]),
      m.useEffect(() => {
        const { viewport: c } = o,
          u = s ? 'scrollLeft' : 'scrollTop';
        if (c) {
          let d = c[u];
          const f = () => {
            const p = c[u];
            d !== p && (a('scrolling'), l()), (d = p);
          };
          return (
            c.addEventListener('scroll', f),
            () => c.removeEventListener('scroll', f)
          );
        }
      }, [o.viewport, s, l]),
      n || i !== 'hidden'
        ? h.jsx(Pn, {
            'data-state': i === 'hidden' ? 'hidden' : 'visible',
            ...r,
            ref: t,
            onPointerEnter: pt(e.onPointerEnter, () => a('interacting')),
            onPointerLeave: pt(e.onPointerLeave, () => a('idle')),
          })
        : null
    );
  }),
  wr = m.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Te(),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o,
      a = e.orientation === 'horizontal';
    return (
      m.useEffect(
        () => (
          a ? s(!0) : i(!0),
          () => {
            a ? s(!1) : i(!1);
          }
        ),
        [a, s, i]
      ),
      o.type === 'hover'
        ? h.jsx(di, { ...r, ref: t, forceMount: n })
        : o.type === 'scroll'
          ? h.jsx(Ed, { ...r, ref: t, forceMount: n })
          : o.type === 'auto'
            ? h.jsx(Yr, { ...r, ref: t, forceMount: n })
            : o.type === 'always'
              ? h.jsx(Pn, { ...r, ref: t })
              : null
    );
  });
wr.displayName = '@mantine/core/ScrollAreaScrollbar';
function Pd(e, t = () => {}) {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const s = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== s.left,
        a = n.top !== s.top;
      (i || a) && t(), (n = s), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
}
const fi = m.forwardRef((e, t) => {
  const { style: n, ...r } = e,
    o = Te(),
    s = ai(),
    { onThumbPositionChange: i } = s,
    a = $e(t, u => s.onThumbChange(u)),
    l = m.useRef(void 0),
    c = xn(() => {
      l.current && (l.current(), (l.current = void 0));
    }, 100);
  return (
    m.useEffect(() => {
      const { viewport: u } = o;
      if (u) {
        const d = () => {
          if ((c(), !l.current)) {
            const f = Pd(u, i);
            (l.current = f), i();
          }
        };
        return (
          i(),
          u.addEventListener('scroll', d),
          () => u.removeEventListener('scroll', d)
        );
      }
    }, [o.viewport, c, i]),
    h.jsx('div', {
      'data-state': s.hasThumb ? 'visible' : 'hidden',
      ...r,
      ref: a,
      style: {
        width: 'var(--sa-thumb-width)',
        height: 'var(--sa-thumb-height)',
        ...n,
      },
      onPointerDownCapture: pt(e.onPointerDownCapture, u => {
        const f = u.target.getBoundingClientRect(),
          p = u.clientX - f.left,
          g = u.clientY - f.top;
        s.onThumbPointerDown({ x: p, y: g });
      }),
      onPointerUp: pt(e.onPointerUp, s.onThumbPointerUp),
    })
  );
});
fi.displayName = '@mantine/core/ScrollAreaThumb';
const Sr = m.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e,
    o = ai();
  return n || o.hasThumb ? h.jsx(fi, { ref: t, ...r }) : null;
});
Sr.displayName = '@mantine/core/ScrollAreaThumb';
const pi = m.forwardRef(({ children: e, style: t, ...n }, r) => {
  const o = Te(),
    s = $e(r, o.onViewportChange);
  return h.jsx(D, {
    ...n,
    ref: s,
    style: {
      overflowX: o.scrollbarXEnabled ? 'scroll' : 'hidden',
      overflowY: o.scrollbarYEnabled ? 'scroll' : 'hidden',
      ...t,
    },
    children: h.jsx('div', {
      style: { minWidth: '100%', display: 'table' },
      ref: o.onContentChange,
      children: e,
    }),
  });
});
pi.displayName = '@mantine/core/ScrollAreaViewport';
var Gr = {
  root: 'm_d57069b5',
  viewport: 'm_c0783ff9',
  viewportInner: 'm_f8f631dd',
  scrollbar: 'm_c44ba933',
  thumb: 'm_d8b5e363',
  corner: 'm_21657268',
};
const mi = { scrollHideDelay: 1e3, type: 'hover', scrollbars: 'xy' },
  Nd = (e, { scrollbarSize: t, overscrollBehavior: n }) => ({
    root: {
      '--scrollarea-scrollbar-size': P(t),
      '--scrollarea-over-scroll-behavior': n,
    },
  }),
  Zt = W((e, t) => {
    const n = I('ScrollArea', mi, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        scrollbarSize: l,
        vars: c,
        type: u,
        scrollHideDelay: d,
        viewportProps: f,
        viewportRef: p,
        onScrollPositionChange: g,
        children: v,
        offsetScrollbars: y,
        scrollbars: w,
        onBottomReached: S,
        onTopReached: x,
        overscrollBehavior: C,
        ...R
      } = n,
      [$, N] = m.useState(!1),
      [E, M] = m.useState(!1),
      [k, Y] = m.useState(!1),
      L = Z({
        name: 'ScrollArea',
        props: n,
        classes: Gr,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: c,
        varsResolver: Nd,
      }),
      z = m.useRef(null),
      V = sd([p, z]);
    return (
      m.useEffect(() => {
        if (!z.current || y !== 'present') return;
        const G = z.current,
          j = new ResizeObserver(() => {
            const {
              scrollHeight: H,
              clientHeight: T,
              scrollWidth: B,
              clientWidth: b,
            } = G;
            M(H > T), Y(B > b);
          });
        return j.observe(G), () => j.disconnect();
      }, [z, y]),
      h.jsxs(ri, {
        type: u === 'never' ? 'always' : u,
        scrollHideDelay: d,
        ref: t,
        scrollbars: w,
        ...L('root'),
        ...R,
        children: [
          h.jsx(pi, {
            ...f,
            ...L('viewport', { style: f == null ? void 0 : f.style }),
            ref: V,
            'data-offset-scrollbars': y === !0 ? 'xy' : y || void 0,
            'data-scrollbars': w || void 0,
            'data-horizontal-hidden': y === 'present' && !k ? 'true' : void 0,
            'data-vertical-hidden': y === 'present' && !E ? 'true' : void 0,
            onScroll: G => {
              var B;
              (B = f == null ? void 0 : f.onScroll) == null || B.call(f, G),
                g == null ||
                  g({
                    x: G.currentTarget.scrollLeft,
                    y: G.currentTarget.scrollTop,
                  });
              const {
                scrollTop: j,
                scrollHeight: H,
                clientHeight: T,
              } = G.currentTarget;
              j - (H - T) >= 0 && (S == null || S()),
                j === 0 && (x == null || x());
            },
            children: v,
          }),
          (w === 'xy' || w === 'x') &&
            h.jsx(wr, {
              ...L('scrollbar'),
              orientation: 'horizontal',
              'data-hidden':
                u === 'never' || (y === 'present' && !k) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => N(!0),
              onMouseLeave: () => N(!1),
              children: h.jsx(Sr, { ...L('thumb') }),
            }),
          (w === 'xy' || w === 'y') &&
            h.jsx(wr, {
              ...L('scrollbar'),
              orientation: 'vertical',
              'data-hidden':
                u === 'never' || (y === 'present' && !E) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => N(!0),
              onMouseLeave: () => N(!1),
              children: h.jsx(Sr, { ...L('thumb') }),
            }),
          h.jsx(Sd, {
            ...L('corner'),
            'data-hovered': $ || void 0,
            'data-hidden': u === 'never' || void 0,
          }),
        ],
      })
    );
  });
Zt.displayName = '@mantine/core/ScrollArea';
const Ur = W((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: s,
    scrollHideDelay: i,
    type: a,
    dir: l,
    offsetScrollbars: c,
    viewportRef: u,
    onScrollPositionChange: d,
    unstyled: f,
    variant: p,
    viewportProps: g,
    scrollbars: v,
    style: y,
    vars: w,
    onBottomReached: S,
    onTopReached: x,
    ...C
  } = I('ScrollAreaAutosize', mi, e);
  return h.jsx(D, {
    ...C,
    ref: t,
    style: [{ display: 'flex', overflow: 'auto' }, y],
    children: h.jsx(D, {
      style: { display: 'flex', flexDirection: 'column', flex: 1 },
      children: h.jsx(Zt, {
        classNames: r,
        styles: o,
        scrollHideDelay: i,
        scrollbarSize: s,
        type: a,
        dir: l,
        offsetScrollbars: c,
        viewportRef: u,
        onScrollPositionChange: d,
        unstyled: f,
        variant: p,
        viewportProps: g,
        vars: w,
        scrollbars: v,
        onBottomReached: S,
        onTopReached: x,
        children: n,
      }),
    }),
  });
});
Zt.classes = Gr;
Ur.displayName = '@mantine/core/ScrollAreaAutosize';
Ur.classes = Gr;
Zt.Autosize = Ur;
var hi = { root: 'm_87cf2631' };
const Td = { __staticSelector: 'UnstyledButton' },
  bt = _e((e, t) => {
    const n = I('UnstyledButton', Td, e),
      {
        className: r,
        component: o = 'button',
        __staticSelector: s,
        unstyled: i,
        classNames: a,
        styles: l,
        style: c,
        ...u
      } = n,
      d = Z({
        name: s,
        props: n,
        classes: hi,
        className: r,
        style: c,
        classNames: a,
        styles: l,
        unstyled: i,
      });
    return h.jsx(D, {
      ...d('root', { focusable: !0 }),
      component: o,
      ref: t,
      type: o === 'button' ? 'button' : void 0,
      ...u,
    });
  });
bt.classes = hi;
bt.displayName = '@mantine/core/UnstyledButton';
var gi = { root: 'm_515a97f8' };
const Ad = {},
  qr = W((e, t) => {
    const n = I('VisuallyHidden', Ad, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        ...c
      } = n,
      u = Z({
        name: 'VisuallyHidden',
        classes: gi,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
      });
    return h.jsx(D, { component: 'span', ref: t, ...u('root'), ...c });
  });
qr.classes = gi;
qr.displayName = '@mantine/core/VisuallyHidden';
var vi = { root: 'm_1b7284a3' };
const jd = {},
  kd = (e, { radius: t, shadow: n }) => ({
    root: {
      '--paper-radius': t === void 0 ? void 0 : ce(t),
      '--paper-shadow': Nr(n),
    },
  }),
  Xr = _e((e, t) => {
    const n = I('Paper', jd, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        withBorder: l,
        vars: c,
        radius: u,
        shadow: d,
        variant: f,
        mod: p,
        ...g
      } = n,
      v = Z({
        name: 'Paper',
        props: n,
        classes: vi,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: c,
        varsResolver: kd,
      });
    return h.jsx(D, {
      ref: t,
      mod: [{ 'data-with-border': l }, p],
      ...v('root'),
      variant: f,
      ...g,
    });
  });
Xr.classes = vi;
Xr.displayName = '@mantine/core/Paper';
function Od(e, t) {
  if (e === 'rtl' && (t.includes('right') || t.includes('left'))) {
    const [n, r] = t.split('-'),
      o = n === 'right' ? 'left' : 'right';
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function rs(e, t, n, r) {
  return e === 'center' || r === 'center'
    ? { top: t }
    : e === 'end'
      ? { bottom: n }
      : e === 'start'
        ? { top: n }
        : {};
}
function os(e, t, n, r, o) {
  return e === 'center' || r === 'center'
    ? { left: t }
    : e === 'end'
      ? { [o === 'ltr' ? 'right' : 'left']: n }
      : e === 'start'
        ? { [o === 'ltr' ? 'left' : 'right']: n }
        : {};
}
const Id = {
  bottom: 'borderTopLeftRadius',
  left: 'borderTopRightRadius',
  right: 'borderBottomLeftRadius',
  top: 'borderBottomRightRadius',
};
function Md({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: s,
  arrowY: i,
  dir: a,
}) {
  const [l, c = 'center'] = e.split('-'),
    u = {
      width: t,
      height: t,
      transform: 'rotate(45deg)',
      position: 'absolute',
      [Id[l]]: r,
    },
    d = -t / 2;
  return l === 'left'
    ? {
        ...u,
        ...rs(c, i, n, o),
        right: d,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
      }
    : l === 'right'
      ? {
          ...u,
          ...rs(c, i, n, o),
          left: d,
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
        }
      : l === 'top'
        ? {
            ...u,
            ...os(c, s, n, o, a),
            bottom: d,
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
          }
        : l === 'bottom'
          ? {
              ...u,
              ...os(c, s, n, o, a),
              top: d,
              borderBottomColor: 'transparent',
              borderRightColor: 'transparent',
              clipPath: 'polygon(0 100%, 0 0, 100% 0)',
            }
          : {};
}
const yi = m.forwardRef(
  (
    {
      position: e,
      arrowSize: t,
      arrowOffset: n,
      arrowRadius: r,
      arrowPosition: o,
      visible: s,
      arrowX: i,
      arrowY: a,
      style: l,
      ...c
    },
    u
  ) => {
    const { dir: d } = qt();
    return s
      ? h.jsx('div', {
          ...c,
          ref: u,
          style: {
            ...l,
            ...Md({
              position: e,
              arrowSize: t,
              arrowOffset: n,
              arrowRadius: r,
              arrowPosition: o,
              dir: d,
              arrowX: i,
              arrowY: a,
            }),
          },
        })
      : null;
  }
);
yi.displayName = '@mantine/core/FloatingArrow';
var bi = { root: 'm_9814e45f' };
const Ld = { zIndex: vt('modal') },
  Dd = (
    e,
    {
      gradient: t,
      color: n,
      backgroundOpacity: r,
      blur: o,
      radius: s,
      zIndex: i,
    }
  ) => ({
    root: {
      '--overlay-bg':
        t ||
        ((n !== void 0 || r !== void 0) && ze(n || '#000', r ?? 0.6)) ||
        void 0,
      '--overlay-filter': o ? `blur(${P(o)})` : void 0,
      '--overlay-radius': s === void 0 ? void 0 : ce(s),
      '--overlay-z-index': i == null ? void 0 : i.toString(),
    },
  }),
  Nn = _e((e, t) => {
    const n = I('Overlay', Ld, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        fixed: c,
        center: u,
        children: d,
        radius: f,
        zIndex: p,
        gradient: g,
        blur: v,
        color: y,
        backgroundOpacity: w,
        mod: S,
        ...x
      } = n,
      C = Z({
        name: 'Overlay',
        props: n,
        classes: bi,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Dd,
      });
    return h.jsx(D, {
      ref: t,
      ...C('root'),
      mod: [{ center: u, fixed: c }, S],
      ...x,
      children: d,
    });
  });
Nn.classes = bi;
Nn.displayName = '@mantine/core/Overlay';
function cr(e) {
  const t = document.createElement('div');
  return (
    t.setAttribute('data-portal', 'true'),
    typeof e.className == 'string' &&
      t.classList.add(...e.className.split(' ').filter(Boolean)),
    typeof e.style == 'object' && Object.assign(t.style, e.style),
    typeof e.id == 'string' && t.setAttribute('id', e.id),
    t
  );
}
function zd({ target: e, reuseTargetNode: t, ...n }) {
  if (e) return typeof e == 'string' ? document.querySelector(e) || cr(n) : e;
  if (t) {
    const r = document.querySelector('[data-mantine-shared-portal-node]');
    if (r) return r;
    const o = cr(n);
    return (
      o.setAttribute('data-mantine-shared-portal-node', 'true'),
      document.body.appendChild(o),
      o
    );
  }
  return cr(n);
}
const Bd = {},
  xi = W((e, t) => {
    const {
        children: n,
        target: r,
        reuseTargetNode: o,
        ...s
      } = I('Portal', Bd, e),
      [i, a] = m.useState(!1),
      l = m.useRef(null);
    return (
      Gt(
        () => (
          a(!0),
          (l.current = zd({ target: r, reuseTargetNode: o, ...s })),
          pr(t, l.current),
          !r && !o && l.current && document.body.appendChild(l.current),
          () => {
            !r && !o && l.current && document.body.removeChild(l.current);
          }
        ),
        [r]
      ),
      !i || !l.current
        ? null
        : _r.createPortal(h.jsx(h.Fragment, { children: n }), l.current)
    );
  });
xi.displayName = '@mantine/core/Portal';
const Tn = W(({ withinPortal: e = !0, children: t, ...n }, r) =>
  Ds() === 'test' || !e
    ? h.jsx(h.Fragment, { children: t })
    : h.jsx(xi, { ref: r, ...n, children: t })
);
Tn.displayName = '@mantine/core/OptionalPortal';
const Ft = e => ({
    in: { opacity: 1, transform: 'scale(1)' },
    out: {
      opacity: 0,
      transform: `scale(.9) translateY(${e === 'bottom' ? 10 : -10}px)`,
    },
    transitionProperty: 'transform, opacity',
  }),
  an = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: 'opacity',
    },
    'fade-up': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(30px)' },
      transitionProperty: 'opacity, transform',
    },
    'fade-down': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(-30px)' },
      transitionProperty: 'opacity, transform',
    },
    'fade-left': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(30px)' },
      transitionProperty: 'opacity, transform',
    },
    'fade-right': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(-30px)' },
      transitionProperty: 'opacity, transform',
    },
    scale: {
      in: { opacity: 1, transform: 'scale(1)' },
      out: { opacity: 0, transform: 'scale(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },
    'scale-y': {
      in: { opacity: 1, transform: 'scaleY(1)' },
      out: { opacity: 0, transform: 'scaleY(0)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },
    'scale-x': {
      in: { opacity: 1, transform: 'scaleX(1)' },
      out: { opacity: 0, transform: 'scaleX(0)' },
      common: { transformOrigin: 'left' },
      transitionProperty: 'transform, opacity',
    },
    'skew-up': {
      in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
      out: { opacity: 0, transform: 'translateY(-20px) skew(-10deg, -5deg)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },
    'skew-down': {
      in: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
      out: { opacity: 0, transform: 'translateY(20px) skew(-10deg, -5deg)' },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },
    'rotate-left': {
      in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
      out: { opacity: 0, transform: 'translateY(20px) rotate(-5deg)' },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },
    'rotate-right': {
      in: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
      out: { opacity: 0, transform: 'translateY(20px) rotate(5deg)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },
    'slide-down': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(-100%)' },
      common: { transformOrigin: 'top' },
      transitionProperty: 'transform, opacity',
    },
    'slide-up': {
      in: { opacity: 1, transform: 'translateY(0)' },
      out: { opacity: 0, transform: 'translateY(100%)' },
      common: { transformOrigin: 'bottom' },
      transitionProperty: 'transform, opacity',
    },
    'slide-left': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(100%)' },
      common: { transformOrigin: 'left' },
      transitionProperty: 'transform, opacity',
    },
    'slide-right': {
      in: { opacity: 1, transform: 'translateX(0)' },
      out: { opacity: 0, transform: 'translateX(-100%)' },
      common: { transformOrigin: 'right' },
      transitionProperty: 'transform, opacity',
    },
    pop: { ...Ft('bottom'), common: { transformOrigin: 'center center' } },
    'pop-bottom-left': {
      ...Ft('bottom'),
      common: { transformOrigin: 'bottom left' },
    },
    'pop-bottom-right': {
      ...Ft('bottom'),
      common: { transformOrigin: 'bottom right' },
    },
    'pop-top-left': { ...Ft('top'), common: { transformOrigin: 'top left' } },
    'pop-top-right': { ...Ft('top'), common: { transformOrigin: 'top right' } },
  },
  ss = {
    entering: 'in',
    entered: 'in',
    exiting: 'out',
    exited: 'out',
    'pre-exiting': 'out',
    'pre-entering': 'out',
  };
function Fd({ transition: e, state: t, duration: n, timingFunction: r }) {
  const o = {
    WebkitBackfaceVisibility: 'hidden',
    willChange: 'transform, opacity',
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r,
  };
  return typeof e == 'string'
    ? e in an
      ? {
          transitionProperty: an[e].transitionProperty,
          ...o,
          ...an[e].common,
          ...an[e][ss[t]],
        }
      : {}
    : {
        transitionProperty: e.transitionProperty,
        ...o,
        ...e.common,
        ...e[ss[t]],
      };
}
function Hd({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: a,
  enterDelay: l,
  exitDelay: c,
}) {
  const u = Je(),
    d = Os(),
    f = u.respectReducedMotion ? d : !1,
    [p, g] = m.useState(f ? 0 : e),
    [v, y] = m.useState(r ? 'entered' : 'exited'),
    w = m.useRef(-1),
    S = m.useRef(-1),
    x = m.useRef(-1),
    C = $ => {
      const N = $ ? o : s,
        E = $ ? i : a;
      window.clearTimeout(w.current);
      const M = f ? 0 : $ ? e : t;
      g(M),
        M === 0
          ? (typeof N == 'function' && N(),
            typeof E == 'function' && E(),
            y($ ? 'entered' : 'exited'))
          : (x.current = requestAnimationFrame(() => {
              Fa.flushSync(() => {
                y($ ? 'pre-entering' : 'pre-exiting');
              }),
                (x.current = requestAnimationFrame(() => {
                  typeof N == 'function' && N(),
                    y($ ? 'entering' : 'exiting'),
                    (w.current = window.setTimeout(() => {
                      typeof E == 'function' && E(),
                        y($ ? 'entered' : 'exited');
                    }, M));
                }));
            }));
    },
    R = $ => {
      if ((window.clearTimeout(S.current), typeof ($ ? l : c) != 'number')) {
        C($);
        return;
      }
      S.current = window.setTimeout(
        () => {
          C($);
        },
        $ ? l : c
      );
    };
  return (
    Et(() => {
      R(r);
    }, [r]),
    m.useEffect(
      () => () => {
        window.clearTimeout(w.current), cancelAnimationFrame(x.current);
      },
      []
    ),
    {
      transitionDuration: p,
      transitionStatus: v,
      transitionTimingFunction: n || 'ease',
    }
  );
}
function ut({
  keepMounted: e,
  transition: t = 'fade',
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: s,
  timingFunction: i = 'ease',
  onExit: a,
  onEntered: l,
  onEnter: c,
  onExited: u,
  enterDelay: d,
  exitDelay: f,
}) {
  const p = Ds(),
    {
      transitionDuration: g,
      transitionStatus: v,
      transitionTimingFunction: y,
    } = Hd({
      mounted: o,
      exitDuration: r,
      duration: n,
      timingFunction: i,
      onExit: a,
      onEntered: l,
      onEnter: c,
      onExited: u,
      enterDelay: d,
      exitDelay: f,
    });
  return g === 0 || p === 'test'
    ? o
      ? h.jsx(h.Fragment, { children: s({}) })
      : e
        ? s({ display: 'none' })
        : null
    : v === 'exited'
      ? e
        ? s({ display: 'none' })
        : null
      : h.jsx(h.Fragment, {
          children: s(
            Fd({ transition: t, duration: g, state: v, timingFunction: y })
          ),
        });
}
ut.displayName = '@mantine/core/Transition';
const [Wd, wi] = ct('Popover component was not found in the tree');
function An({ children: e, active: t = !0, refProp: n = 'ref', innerRef: r }) {
  const o = Wc(t),
    s = $e(o, r);
  return Yt(e) ? m.cloneElement(e, { [n]: s }) : e;
}
function Si(e) {
  return h.jsx(qr, { tabIndex: -1, 'data-autofocus': !0, ...e });
}
An.displayName = '@mantine/core/FocusTrap';
Si.displayName = '@mantine/core/FocusTrapInitialFocus';
An.InitialFocus = Si;
var Ci = { dropdown: 'm_38a85659', arrow: 'm_a31dc6c1', overlay: 'm_3d7bc908' };
const Vd = {},
  Zr = W((e, t) => {
    var y, w, S, x;
    const n = I('PopoverDropdown', Vd, e),
      {
        className: r,
        style: o,
        vars: s,
        children: i,
        onKeyDownCapture: a,
        variant: l,
        classNames: c,
        styles: u,
        ...d
      } = n,
      f = wi(),
      p = Ts({ opened: f.opened, shouldReturnFocus: f.returnFocus }),
      g = f.withRoles
        ? {
            'aria-labelledby': f.getTargetId(),
            id: f.getDropdownId(),
            role: 'dialog',
            tabIndex: -1,
          }
        : {},
      v = $e(t, f.floating);
    return f.disabled
      ? null
      : h.jsx(Tn, {
          ...f.portalProps,
          withinPortal: f.withinPortal,
          children: h.jsx(ut, {
            mounted: f.opened,
            ...f.transitionProps,
            transition:
              ((y = f.transitionProps) == null ? void 0 : y.transition) ||
              'fade',
            duration:
              ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
            keepMounted: f.keepMounted,
            exitDuration:
              typeof ((S = f.transitionProps) == null
                ? void 0
                : S.exitDuration) == 'number'
                ? f.transitionProps.exitDuration
                : (x = f.transitionProps) == null
                  ? void 0
                  : x.duration,
            children: C =>
              h.jsx(An, {
                active: f.trapFocus && f.opened,
                innerRef: v,
                children: h.jsxs(D, {
                  ...g,
                  ...d,
                  variant: l,
                  onKeyDownCapture: Pc(
                    () => {
                      var R, $;
                      (R = f.onClose) == null || R.call(f),
                        ($ = f.onDismiss) == null || $.call(f);
                    },
                    { active: f.closeOnEscape, onTrigger: p, onKeyDown: a }
                  ),
                  'data-position': f.placement,
                  'data-fixed': f.floatingStrategy === 'fixed' || void 0,
                  ...f.getStyles('dropdown', {
                    className: r,
                    props: n,
                    classNames: c,
                    styles: u,
                    style: [
                      {
                        ...C,
                        zIndex: f.zIndex,
                        top: f.y ?? 0,
                        left: f.x ?? 0,
                        width: f.width === 'target' ? void 0 : P(f.width),
                      },
                      f.resolvedStyles.dropdown,
                      u == null ? void 0 : u.dropdown,
                      o,
                    ],
                  }),
                  children: [
                    i,
                    h.jsx(yi, {
                      ref: f.arrowRef,
                      arrowX: f.arrowX,
                      arrowY: f.arrowY,
                      visible: f.withArrow,
                      position: f.placement,
                      arrowSize: f.arrowSize,
                      arrowRadius: f.arrowRadius,
                      arrowOffset: f.arrowOffset,
                      arrowPosition: f.arrowPosition,
                      ...f.getStyles('arrow', {
                        props: n,
                        classNames: c,
                        styles: u,
                      }),
                    }),
                  ],
                }),
              }),
          }),
        });
  });
Zr.classes = Ci;
Zr.displayName = '@mantine/core/PopoverDropdown';
const Yd = { refProp: 'ref', popupType: 'dialog' },
  Ri = W((e, t) => {
    const {
      children: n,
      refProp: r,
      popupType: o,
      ...s
    } = I('PopoverTarget', Yd, e);
    if (!Yt(n))
      throw new Error(
        'Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
      );
    const i = s,
      a = wi(),
      l = $e(a.reference, Is(n), t),
      c = a.withRoles
        ? {
            'aria-haspopup': o,
            'aria-expanded': a.opened,
            'aria-controls': a.getDropdownId(),
            id: a.getTargetId(),
          }
        : {};
    return m.cloneElement(n, {
      ...i,
      ...c,
      ...a.targetProps,
      className: ge(a.targetProps.className, i.className, n.props.className),
      [r]: l,
      ...(a.controlled ? null : { onClick: a.onToggle }),
    });
  });
Ri.displayName = '@mantine/core/PopoverTarget';
function Gd({ opened: e, floating: t, position: n, positionDependencies: r }) {
  const [o, s] = m.useState(0);
  m.useEffect(() => {
    if (t.refs.reference.current && t.refs.floating.current && e)
      return Yu(t.refs.reference.current, t.refs.floating.current, t.update);
  }, [t.refs.reference.current, t.refs.floating.current, e, o, n]),
    Et(() => {
      t.update();
    }, r),
    Et(() => {
      s(i => i + 1);
    }, [e]);
}
function Ud(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const t = { ...e };
  return (
    e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t
  );
}
function qd(e, t) {
  const n = Ud(e.middlewares),
    r = [td(e.offset)];
  return (
    n.shift &&
      r.push(
        nd(
          typeof n.shift == 'boolean'
            ? { limiter: Ko(), padding: 5 }
            : { limiter: Ko(), padding: 5, ...n.shift }
        )
      ),
    n.flip && r.push(typeof n.flip == 'boolean' ? Qo() : Qo(n.flip)),
    n.inline && r.push(typeof n.inline == 'boolean' ? Jo() : Jo(n.inline)),
    r.push(od({ element: e.arrowRef, padding: e.arrowOffset })),
    (n.size || e.width === 'target') &&
      r.push(
        rd({
          ...(typeof n.size == 'boolean' ? {} : n.size),
          apply({ rects: o, availableWidth: s, availableHeight: i, ...a }) {
            var u;
            const c =
              ((u = t().refs.floating.current) == null ? void 0 : u.style) ??
              {};
            n.size &&
              (typeof n.size == 'object' && n.size.apply
                ? n.size.apply({
                    rects: o,
                    availableWidth: s,
                    availableHeight: i,
                    ...a,
                  })
                : Object.assign(c, {
                    maxWidth: `${s}px`,
                    maxHeight: `${i}px`,
                  })),
              e.width === 'target' &&
                Object.assign(c, { width: `${o.reference.width}px` });
          },
        })
      ),
    r
  );
}
function Xd(e) {
  const [t, n] = st({
      value: e.opened,
      defaultValue: e.defaultOpened,
      finalValue: !1,
      onChange: e.onChange,
    }),
    r = m.useRef(t),
    o = () => {
      t && n(!1);
    },
    s = () => n(!t),
    i = bd({
      strategy: e.strategy,
      placement: e.position,
      middleware: qd(e, () => i),
    });
  return (
    Gd({
      opened: t,
      position: e.position,
      positionDependencies: e.positionDependencies || [],
      floating: i,
    }),
    Et(() => {
      var a;
      (a = e.onPositionChange) == null || a.call(e, i.placement);
    }, [i.placement]),
    Et(() => {
      var a, l;
      t !== r.current &&
        (t
          ? (l = e.onOpen) == null || l.call(e)
          : (a = e.onClose) == null || a.call(e)),
        (r.current = t);
    }, [t, e.onClose, e.onOpen]),
    {
      floating: i,
      controlled: typeof e.opened == 'boolean',
      opened: t,
      onClose: o,
      onToggle: s,
    }
  );
}
const Zd = {
    position: 'bottom',
    offset: 8,
    positionDependencies: [],
    transitionProps: { transition: 'fade', duration: 150 },
    middlewares: { flip: !0, shift: !0, inline: !1 },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: 'side',
    closeOnClickOutside: !0,
    withinPortal: !0,
    closeOnEscape: !0,
    trapFocus: !1,
    withRoles: !0,
    returnFocus: !1,
    withOverlay: !1,
    clickOutsideEvents: ['mousedown', 'touchstart'],
    zIndex: vt('popover'),
    __staticSelector: 'Popover',
    width: 'max-content',
  },
  Kd = (e, { radius: t, shadow: n }) => ({
    dropdown: {
      '--popover-radius': t === void 0 ? void 0 : ce(t),
      '--popover-shadow': Nr(n),
    },
  });
function dt(e) {
  var Ce, qe, De, ae, fe, Lt;
  const t = I('Popover', Zd, e),
    {
      children: n,
      position: r,
      offset: o,
      onPositionChange: s,
      positionDependencies: i,
      opened: a,
      transitionProps: l,
      onExitTransitionEnd: c,
      onEnterTransitionEnd: u,
      width: d,
      middlewares: f,
      withArrow: p,
      arrowSize: g,
      arrowOffset: v,
      arrowRadius: y,
      arrowPosition: w,
      unstyled: S,
      classNames: x,
      styles: C,
      closeOnClickOutside: R,
      withinPortal: $,
      portalProps: N,
      closeOnEscape: E,
      clickOutsideEvents: M,
      trapFocus: k,
      onClose: Y,
      onDismiss: L,
      onOpen: z,
      onChange: V,
      zIndex: G,
      radius: j,
      shadow: H,
      id: T,
      defaultOpened: B,
      __staticSelector: b,
      withRoles: _,
      disabled: O,
      returnFocus: A,
      variant: U,
      keepMounted: q,
      vars: F,
      floatingStrategy: te,
      withOverlay: K,
      overlayProps: ne,
      ...ve
    } = t,
    Ee = Z({
      name: b,
      props: t,
      classes: Ci,
      classNames: x,
      styles: C,
      unstyled: S,
      rootSelector: 'dropdown',
      vars: F,
      varsResolver: Kd,
    }),
    { resolvedStyles: Ge } = Cn({ classNames: x, styles: C, props: t }),
    Le = m.useRef(null),
    [rt, ot] = m.useState(null),
    [le, se] = m.useState(null),
    { dir: Ue } = qt(),
    Pe = Ze(T),
    re = Xd({
      middlewares: f,
      width: d,
      position: Od(Ue, r),
      offset: typeof o == 'number' ? o + (p ? g / 2 : 0) : o,
      arrowRef: Le,
      arrowOffset: v,
      onPositionChange: s,
      positionDependencies: i,
      opened: a,
      defaultOpened: B,
      onChange: V,
      onOpen: z,
      onClose: Y,
      onDismiss: L,
      strategy: te,
    });
  Oc(
    () => {
      R && (re.onClose(), L == null || L());
    },
    M,
    [rt, le]
  );
  const Q = m.useCallback(
      pe => {
        ot(pe), re.floating.refs.setReference(pe);
      },
      [re.floating.refs.setReference]
    ),
    ie = m.useCallback(
      pe => {
        se(pe), re.floating.refs.setFloating(pe);
      },
      [re.floating.refs.setFloating]
    ),
    Ne = m.useCallback(() => {
      var pe;
      (pe = l == null ? void 0 : l.onExited) == null || pe.call(l),
        c == null || c();
    }, [l == null ? void 0 : l.onExited, c]),
    ue = m.useCallback(() => {
      var pe;
      (pe = l == null ? void 0 : l.onEntered) == null || pe.call(l),
        u == null || u();
    }, [l == null ? void 0 : l.onEntered, u]);
  return h.jsxs(Wd, {
    value: {
      returnFocus: A,
      disabled: O,
      controlled: re.controlled,
      reference: Q,
      floating: ie,
      x: re.floating.x,
      y: re.floating.y,
      arrowX:
        (De =
          (qe = (Ce = re.floating) == null ? void 0 : Ce.middlewareData) == null
            ? void 0
            : qe.arrow) == null
          ? void 0
          : De.x,
      arrowY:
        (Lt =
          (fe = (ae = re.floating) == null ? void 0 : ae.middlewareData) == null
            ? void 0
            : fe.arrow) == null
          ? void 0
          : Lt.y,
      opened: re.opened,
      arrowRef: Le,
      transitionProps: { ...l, onExited: Ne, onEntered: ue },
      width: d,
      withArrow: p,
      arrowSize: g,
      arrowOffset: v,
      arrowRadius: y,
      arrowPosition: w,
      placement: re.floating.placement,
      trapFocus: k,
      withinPortal: $,
      portalProps: N,
      zIndex: G,
      radius: j,
      shadow: H,
      closeOnEscape: E,
      onDismiss: L,
      onClose: re.onClose,
      onToggle: re.onToggle,
      getTargetId: () => `${Pe}-target`,
      getDropdownId: () => `${Pe}-dropdown`,
      withRoles: _,
      targetProps: ve,
      __staticSelector: b,
      classNames: x,
      styles: C,
      unstyled: S,
      variant: U,
      keepMounted: q,
      getStyles: Ee,
      resolvedStyles: Ge,
      floatingStrategy: te,
    },
    children: [
      n,
      K &&
        h.jsx(ut, {
          transition: 'fade',
          mounted: re.opened,
          duration: (l == null ? void 0 : l.duration) || 250,
          exitDuration: (l == null ? void 0 : l.exitDuration) || 250,
          children: pe =>
            h.jsx(Tn, {
              withinPortal: $,
              children: h.jsx(Nn, {
                ...ne,
                ...Ee('overlay', {
                  className: ne == null ? void 0 : ne.className,
                  style: [pe, ne == null ? void 0 : ne.style],
                }),
              }),
            }),
        }),
    ],
  });
}
dt.Target = Ri;
dt.Dropdown = Zr;
dt.displayName = '@mantine/core/Popover';
dt.extend = e => e;
var ke = {
  root: 'm_5ae2e3c',
  barsLoader: 'm_7a2bd4cd',
  bar: 'm_870bb79',
  'bars-loader-animation': 'm_5d2b3b9d',
  dotsLoader: 'm_4e3f22d7',
  dot: 'm_870c4af',
  'loader-dots-animation': 'm_aac34a1',
  ovalLoader: 'm_b34414df',
  'oval-loader-animation': 'm_f8e89c4b',
};
const $i = m.forwardRef(({ className: e, ...t }, n) =>
  h.jsxs(D, {
    component: 'span',
    className: ge(ke.barsLoader, e),
    ...t,
    ref: n,
    children: [
      h.jsx('span', { className: ke.bar }),
      h.jsx('span', { className: ke.bar }),
      h.jsx('span', { className: ke.bar }),
    ],
  })
);
$i.displayName = '@mantine/core/Bars';
const _i = m.forwardRef(({ className: e, ...t }, n) =>
  h.jsxs(D, {
    component: 'span',
    className: ge(ke.dotsLoader, e),
    ...t,
    ref: n,
    children: [
      h.jsx('span', { className: ke.dot }),
      h.jsx('span', { className: ke.dot }),
      h.jsx('span', { className: ke.dot }),
    ],
  })
);
_i.displayName = '@mantine/core/Dots';
const Ei = m.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(D, { component: 'span', className: ge(ke.ovalLoader, e), ...t, ref: n })
);
Ei.displayName = '@mantine/core/Oval';
const Pi = { bars: $i, oval: Ei, dots: _i },
  Qd = { loaders: Pi, type: 'oval' },
  Jd = (e, { size: t, color: n }) => ({
    root: {
      '--loader-size': J(t, 'loader-size'),
      '--loader-color': n ? xe(n, e) : void 0,
    },
  }),
  at = W((e, t) => {
    const n = I('Loader', Qd, e),
      {
        size: r,
        color: o,
        type: s,
        vars: i,
        className: a,
        style: l,
        classNames: c,
        styles: u,
        unstyled: d,
        loaders: f,
        variant: p,
        children: g,
        ...v
      } = n,
      y = Z({
        name: 'Loader',
        props: n,
        classes: ke,
        className: a,
        style: l,
        classNames: c,
        styles: u,
        unstyled: d,
        vars: i,
        varsResolver: Jd,
      });
    return g
      ? h.jsx(D, { ...y('root'), ref: t, ...v, children: g })
      : h.jsx(D, {
          ...y('root'),
          ref: t,
          component: f[s],
          variant: p,
          size: r,
          ...v,
        });
  });
at.defaultLoaders = Pi;
at.classes = ke;
at.displayName = '@mantine/core/Loader';
var Ot = {
  root: 'm_8d3f4000',
  icon: 'm_8d3afb97',
  loader: 'm_302b9fb1',
  group: 'm_1a0f1b21',
  groupSection: 'm_437b6484',
};
const is = { orientation: 'horizontal' },
  ef = (e, { borderWidth: t }) => ({ group: { '--ai-border-width': P(t) } }),
  Kr = W((e, t) => {
    const n = I('ActionIconGroup', is, e),
      {
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        orientation: l,
        vars: c,
        borderWidth: u,
        variant: d,
        mod: f,
        ...p
      } = I('ActionIconGroup', is, e),
      g = Z({
        name: 'ActionIconGroup',
        props: n,
        classes: Ot,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: c,
        varsResolver: ef,
        rootSelector: 'group',
      });
    return h.jsx(D, {
      ...g('group'),
      ref: t,
      variant: d,
      mod: [{ 'data-orientation': l }, f],
      role: 'group',
      ...p,
    });
  });
Kr.classes = Ot;
Kr.displayName = '@mantine/core/ActionIconGroup';
const as = {},
  tf = (
    e,
    { radius: t, color: n, gradient: r, variant: o, autoContrast: s, size: i }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || 'filled',
      autoContrast: s,
    });
    return {
      groupSection: {
        '--section-height': J(i, 'section-height'),
        '--section-padding-x': J(i, 'section-padding-x'),
        '--section-fz': de(i),
        '--section-radius': t === void 0 ? void 0 : ce(t),
        '--section-bg': n || o ? a.background : void 0,
        '--section-color': a.color,
        '--section-bd': n || o ? a.border : void 0,
      },
    };
  },
  Qr = W((e, t) => {
    const n = I('ActionIconGroupSection', as, e),
      {
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: l,
        variant: c,
        gradient: u,
        radius: d,
        autoContrast: f,
        ...p
      } = I('ActionIconGroupSection', as, e),
      g = Z({
        name: 'ActionIconGroupSection',
        props: n,
        classes: Ot,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: tf,
        rootSelector: 'groupSection',
      });
    return h.jsx(D, { ...g('groupSection'), ref: t, variant: c, ...p });
  });
Qr.classes = Ot;
Qr.displayName = '@mantine/core/ActionIconGroupSection';
const nf = {},
  rf = (
    e,
    { size: t, radius: n, variant: r, gradient: o, color: s, autoContrast: i }
  ) => {
    const a = e.variantColorResolver({
      color: s || e.primaryColor,
      theme: e,
      gradient: o,
      variant: r || 'filled',
      autoContrast: i,
    });
    return {
      root: {
        '--ai-size': J(t, 'ai-size'),
        '--ai-radius': n === void 0 ? void 0 : ce(n),
        '--ai-bg': s || r ? a.background : void 0,
        '--ai-hover': s || r ? a.hover : void 0,
        '--ai-hover-color': s || r ? a.hoverColor : void 0,
        '--ai-color': a.color,
        '--ai-bd': s || r ? a.border : void 0,
      },
    };
  },
  Kt = _e((e, t) => {
    const n = I('ActionIcon', nf, e),
      {
        className: r,
        unstyled: o,
        variant: s,
        classNames: i,
        styles: a,
        style: l,
        loading: c,
        loaderProps: u,
        size: d,
        color: f,
        radius: p,
        __staticSelector: g,
        gradient: v,
        vars: y,
        children: w,
        disabled: S,
        'data-disabled': x,
        autoContrast: C,
        mod: R,
        ...$
      } = n,
      N = Z({
        name: ['ActionIcon', g],
        props: n,
        className: r,
        style: l,
        classes: Ot,
        classNames: i,
        styles: a,
        unstyled: o,
        vars: y,
        varsResolver: rf,
      });
    return h.jsxs(bt, {
      ...N('root', { active: !S && !c && !x }),
      ...$,
      unstyled: o,
      variant: s,
      size: d,
      disabled: S || c,
      ref: t,
      mod: [{ loading: c, disabled: S || x }, R],
      children: [
        h.jsx(ut, {
          mounted: !!c,
          transition: 'slide-down',
          duration: 150,
          children: E =>
            h.jsx(D, {
              component: 'span',
              ...N('loader', { style: E }),
              'aria-hidden': !0,
              children: h.jsx(at, {
                color: 'var(--ai-color)',
                size: 'calc(var(--ai-size) * 0.55)',
                ...u,
              }),
            }),
        }),
        h.jsx(D, {
          component: 'span',
          mod: { loading: c },
          ...N('icon'),
          children: w,
        }),
      ],
    });
  });
Kt.classes = Ot;
Kt.displayName = '@mantine/core/ActionIcon';
Kt.Group = Kr;
Kt.GroupSection = Qr;
const Ni = m.forwardRef(
  ({ size: e = 'var(--cb-icon-size, 70%)', style: t, ...n }, r) =>
    h.jsx('svg', {
      viewBox: '0 0 15 15',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: h.jsx('path', {
        d: 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z',
        fill: 'currentColor',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }),
    })
);
Ni.displayName = '@mantine/core/CloseIcon';
var Ti = { root: 'm_86a44da5', 'root--subtle': 'm_220c80f2' };
const of = { variant: 'subtle' },
  sf = (e, { size: t, radius: n, iconSize: r }) => ({
    root: {
      '--cb-size': J(t, 'cb-size'),
      '--cb-radius': n === void 0 ? void 0 : ce(n),
      '--cb-icon-size': P(r),
    },
  }),
  Qt = _e((e, t) => {
    const n = I('CloseButton', of, e),
      {
        iconSize: r,
        children: o,
        vars: s,
        radius: i,
        className: a,
        classNames: l,
        style: c,
        styles: u,
        unstyled: d,
        'data-disabled': f,
        disabled: p,
        variant: g,
        icon: v,
        mod: y,
        __staticSelector: w,
        ...S
      } = n,
      x = Z({
        name: w || 'CloseButton',
        props: n,
        className: a,
        style: c,
        classes: Ti,
        classNames: l,
        styles: u,
        unstyled: d,
        vars: s,
        varsResolver: sf,
      });
    return h.jsxs(bt, {
      ref: t,
      ...S,
      unstyled: d,
      variant: g,
      disabled: p,
      mod: [{ disabled: p || f }, y],
      ...x('root', { variant: g, active: !p && !f }),
      children: [v || h.jsx(Ni, {}), o],
    });
  });
Qt.classes = Ti;
Qt.displayName = '@mantine/core/CloseButton';
function af(e) {
  return m.Children.toArray(e).filter(Boolean);
}
var Ai = { root: 'm_4081bf90' };
const cf = {
    preventGrowOverflow: !0,
    gap: 'md',
    align: 'center',
    justify: 'flex-start',
    wrap: 'wrap',
  },
  lf = (
    e,
    { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i },
    { childWidth: a }
  ) => ({
    root: {
      '--group-child-width': t && n ? a : void 0,
      '--group-gap': ht(r),
      '--group-align': o,
      '--group-justify': s,
      '--group-wrap': i,
    },
  }),
  ji = W((e, t) => {
    const n = I('Group', cf, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        children: l,
        gap: c,
        align: u,
        justify: d,
        wrap: f,
        grow: p,
        preventGrowOverflow: g,
        vars: v,
        variant: y,
        __size: w,
        mod: S,
        ...x
      } = n,
      C = af(l),
      R = C.length,
      $ = ht(c ?? 'md'),
      E = { childWidth: `calc(${100 / R}% - (${$} - ${$} / ${R}))` },
      M = Z({
        name: 'Group',
        props: n,
        stylesCtx: E,
        className: o,
        style: s,
        classes: Ai,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: v,
        varsResolver: lf,
      });
    return h.jsx(D, {
      ...M('root'),
      ref: t,
      variant: y,
      mod: [{ grow: p }, S],
      size: w,
      ...x,
      children: C,
    });
  });
ji.classes = Ai;
ji.displayName = '@mantine/core/Group';
const [uf, et] = ct('ModalBase component was not found in tree');
function df({ opened: e, transitionDuration: t }) {
  const [n, r] = m.useState(e),
    o = m.useRef(-1),
    i = Os() ? 0 : t;
  return (
    m.useEffect(
      () => (
        e
          ? (r(!0), window.clearTimeout(o.current))
          : i === 0
            ? r(!1)
            : (o.current = window.setTimeout(() => r(!1), i)),
        () => window.clearTimeout(o.current)
      ),
      [e, i]
    ),
    n
  );
}
function ff({
  id: e,
  transitionProps: t,
  opened: n,
  trapFocus: r,
  closeOnEscape: o,
  onClose: s,
  returnFocus: i,
}) {
  const a = Ze(e),
    [l, c] = m.useState(!1),
    [u, d] = m.useState(!1),
    f =
      typeof (t == null ? void 0 : t.duration) == 'number'
        ? t == null
          ? void 0
          : t.duration
        : 200,
    p = df({ opened: n, transitionDuration: f });
  return (
    Uc(
      'keydown',
      g => {
        var v;
        g.key === 'Escape' &&
          o &&
          n &&
          ((v = g.target) == null
            ? void 0
            : v.getAttribute('data-mantine-stop-propagation')) !== 'true' &&
          s();
      },
      { capture: !0 }
    ),
    Ts({ opened: n, shouldReturnFocus: r && i }),
    {
      _id: a,
      titleMounted: l,
      bodyMounted: u,
      shouldLockScroll: p,
      setTitleMounted: c,
      setBodyMounted: d,
    }
  );
}
const ki = m.forwardRef(
  (
    {
      keepMounted: e,
      opened: t,
      onClose: n,
      id: r,
      transitionProps: o,
      onExitTransitionEnd: s,
      onEnterTransitionEnd: i,
      trapFocus: a,
      closeOnEscape: l,
      returnFocus: c,
      closeOnClickOutside: u,
      withinPortal: d,
      portalProps: f,
      lockScroll: p,
      children: g,
      zIndex: v,
      shadow: y,
      padding: w,
      __vars: S,
      unstyled: x,
      removeScrollProps: C,
      ...R
    },
    $
  ) => {
    const {
        _id: N,
        titleMounted: E,
        bodyMounted: M,
        shouldLockScroll: k,
        setTitleMounted: Y,
        setBodyMounted: L,
      } = ff({
        id: r,
        transitionProps: o,
        opened: t,
        trapFocus: a,
        closeOnEscape: l,
        onClose: n,
        returnFocus: c,
      }),
      { key: z, ...V } = C || {};
    return h.jsx(Tn, {
      ...f,
      withinPortal: d,
      children: h.jsx(uf, {
        value: {
          opened: t,
          onClose: n,
          closeOnClickOutside: u,
          onExitTransitionEnd: s,
          onEnterTransitionEnd: i,
          transitionProps: { ...o, keepMounted: e },
          getTitleId: () => `${N}-title`,
          getBodyId: () => `${N}-body`,
          titleMounted: E,
          bodyMounted: M,
          setTitleMounted: Y,
          setBodyMounted: L,
          trapFocus: a,
          closeOnEscape: l,
          zIndex: v,
          unstyled: x,
        },
        children: h.jsx(
          Es,
          {
            enabled: k && p,
            ...V,
            children: h.jsx(D, {
              ref: $,
              ...R,
              __vars: {
                ...S,
                '--mb-z-index': (v || vt('modal')).toString(),
                '--mb-shadow': Nr(y),
                '--mb-padding': ht(w),
              },
              children: g,
            }),
          },
          z
        ),
      }),
    });
  }
);
ki.displayName = '@mantine/core/ModalBase';
function pf() {
  const e = et();
  return (
    m.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []),
    e.getBodyId()
  );
}
var At = {
  title: 'm_615af6c9',
  header: 'm_b5489c3c',
  inner: 'm_60c222c7',
  content: 'm_fd1ab0aa',
  close: 'm_606cb269',
  body: 'm_5df29311',
};
const Oi = m.forwardRef(({ className: e, ...t }, n) => {
  const r = pf(),
    o = et();
  return h.jsx(D, {
    ref: n,
    ...t,
    id: r,
    className: ge({ [At.body]: !o.unstyled }, e),
  });
});
Oi.displayName = '@mantine/core/ModalBaseBody';
const Ii = m.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const o = et();
  return h.jsx(Qt, {
    ref: r,
    ...n,
    onClick: s => {
      o.onClose(), t == null || t(s);
    },
    className: ge({ [At.close]: !o.unstyled }, e),
    unstyled: o.unstyled,
  });
});
Ii.displayName = '@mantine/core/ModalBaseCloseButton';
const Mi = m.forwardRef(
  (
    {
      transitionProps: e,
      className: t,
      innerProps: n,
      onKeyDown: r,
      style: o,
      ...s
    },
    i
  ) => {
    const a = et();
    return h.jsx(ut, {
      mounted: a.opened,
      transition: 'pop',
      ...a.transitionProps,
      onExited: () => {
        var l, c, u;
        (l = a.onExitTransitionEnd) == null || l.call(a),
          (u = (c = a.transitionProps) == null ? void 0 : c.onExited) == null ||
            u.call(c);
      },
      onEntered: () => {
        var l, c, u;
        (l = a.onEnterTransitionEnd) == null || l.call(a),
          (u = (c = a.transitionProps) == null ? void 0 : c.onEntered) ==
            null || u.call(c);
      },
      ...e,
      children: l =>
        h.jsx('div', {
          ...n,
          className: ge({ [At.inner]: !a.unstyled }, n.className),
          children: h.jsx(An, {
            active: a.opened && a.trapFocus,
            innerRef: i,
            children: h.jsx(Xr, {
              ...s,
              component: 'section',
              role: 'dialog',
              tabIndex: -1,
              'aria-modal': !0,
              'aria-describedby': a.bodyMounted ? a.getBodyId() : void 0,
              'aria-labelledby': a.titleMounted ? a.getTitleId() : void 0,
              style: [o, l],
              className: ge({ [At.content]: !a.unstyled }, t),
              unstyled: a.unstyled,
              children: s.children,
            }),
          }),
        }),
    });
  }
);
Mi.displayName = '@mantine/core/ModalBaseContent';
const Li = m.forwardRef(({ className: e, ...t }, n) => {
  const r = et();
  return h.jsx(D, {
    component: 'header',
    ref: n,
    className: ge({ [At.header]: !r.unstyled }, e),
    ...t,
  });
});
Li.displayName = '@mantine/core/ModalBaseHeader';
const mf = { duration: 200, timingFunction: 'ease', transition: 'fade' };
function hf(e) {
  const t = et();
  return { ...mf, ...t.transitionProps, ...e };
}
const Di = m.forwardRef(
  ({ onClick: e, transitionProps: t, style: n, visible: r, ...o }, s) => {
    const i = et(),
      a = hf(t);
    return h.jsx(ut, {
      mounted: r !== void 0 ? r : i.opened,
      ...a,
      transition: 'fade',
      children: l =>
        h.jsx(Nn, {
          ref: s,
          fixed: !0,
          style: [n, l],
          zIndex: i.zIndex,
          unstyled: i.unstyled,
          onClick: c => {
            e == null || e(c), i.closeOnClickOutside && i.onClose();
          },
          ...o,
        }),
    });
  }
);
Di.displayName = '@mantine/core/ModalBaseOverlay';
function gf() {
  const e = et();
  return (
    m.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
const zi = m.forwardRef(({ className: e, ...t }, n) => {
  const r = gf(),
    o = et();
  return h.jsx(D, {
    component: 'h2',
    ref: n,
    className: ge({ [At.title]: !o.unstyled }, e),
    ...t,
    id: r,
  });
});
zi.displayName = '@mantine/core/ModalBaseTitle';
function vf({ children: e }) {
  return h.jsx(h.Fragment, { children: e });
}
const [yf, bf] = bn({ size: 'sm' }),
  xf = {},
  Bi = W((e, t) => {
    const n = I('InputClearButton', xf, e),
      { size: r, variant: o, vars: s, classNames: i, styles: a, ...l } = n,
      c = bf(),
      { resolvedClassNames: u, resolvedStyles: d } = Cn({
        classNames: i,
        styles: a,
        props: n,
      });
    return h.jsx(Qt, {
      variant: o || 'transparent',
      ref: t,
      size: r || (c == null ? void 0 : c.size) || 'sm',
      classNames: u,
      styles: d,
      __staticSelector: 'InputClearButton',
      ...l,
    });
  });
Bi.displayName = '@mantine/core/InputClearButton';
const [wf, Jt] = bn({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Ae = {
  wrapper: 'm_6c018570',
  input: 'm_8fb7ebe7',
  section: 'm_82577fc2',
  placeholder: 'm_88bacfd0',
  root: 'm_46b77525',
  label: 'm_8fdc1311',
  required: 'm_78a94662',
  error: 'm_8f816625',
  description: 'm_fe47ce59',
};
const cs = {},
  Sf = (e, { size: t }) => ({
    description: {
      '--input-description-size':
        t === void 0 ? void 0 : `calc(${de(t)} - ${P(2)})`,
    },
  }),
  jn = W((e, t) => {
    const n = I('InputDescription', cs, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        size: c,
        __staticSelector: u,
        __inheritStyles: d = !0,
        variant: f,
        ...p
      } = I('InputDescription', cs, n),
      g = Jt(),
      v = Z({
        name: ['InputWrapper', u],
        props: n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        rootSelector: 'description',
        vars: l,
        varsResolver: Sf,
      }),
      y = (d && (g == null ? void 0 : g.getStyles)) || v;
    return h.jsx(D, {
      component: 'p',
      ref: t,
      variant: f,
      size: c,
      ...y(
        'description',
        g != null && g.getStyles ? { className: o, style: s } : void 0
      ),
      ...p,
    });
  });
jn.classes = Ae;
jn.displayName = '@mantine/core/InputDescription';
const Cf = {},
  Rf = (e, { size: t }) => ({
    error: {
      '--input-error-size': t === void 0 ? void 0 : `calc(${de(t)} - ${P(2)})`,
    },
  }),
  kn = W((e, t) => {
    const n = I('InputError', Cf, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        size: c,
        __staticSelector: u,
        __inheritStyles: d = !0,
        variant: f,
        ...p
      } = n,
      g = Z({
        name: ['InputWrapper', u],
        props: n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        rootSelector: 'error',
        vars: l,
        varsResolver: Rf,
      }),
      v = Jt(),
      y = (d && (v == null ? void 0 : v.getStyles)) || g;
    return h.jsx(D, {
      component: 'p',
      ref: t,
      variant: f,
      size: c,
      ...y(
        'error',
        v != null && v.getStyles ? { className: o, style: s } : void 0
      ),
      ...p,
    });
  });
kn.classes = Ae;
kn.displayName = '@mantine/core/InputError';
const ls = { labelElement: 'label' },
  $f = (e, { size: t }) => ({
    label: { '--input-label-size': de(t), '--input-asterisk-color': void 0 },
  }),
  On = W((e, t) => {
    const n = I('InputLabel', ls, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        labelElement: c,
        size: u,
        required: d,
        htmlFor: f,
        onMouseDown: p,
        children: g,
        __staticSelector: v,
        variant: y,
        mod: w,
        ...S
      } = I('InputLabel', ls, n),
      x = Z({
        name: ['InputWrapper', v],
        props: n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        rootSelector: 'label',
        vars: l,
        varsResolver: $f,
      }),
      C = Jt(),
      R = (C == null ? void 0 : C.getStyles) || x;
    return h.jsxs(D, {
      ...R(
        'label',
        C != null && C.getStyles ? { className: o, style: s } : void 0
      ),
      component: c,
      variant: y,
      size: u,
      ref: t,
      htmlFor: c === 'label' ? f : void 0,
      mod: [{ required: d }, w],
      onMouseDown: $ => {
        p == null || p($),
          !$.defaultPrevented && $.detail > 1 && $.preventDefault();
      },
      ...S,
      children: [
        g,
        d &&
          h.jsx('span', {
            ...R('required'),
            'aria-hidden': !0,
            children: ' *',
          }),
      ],
    });
  });
On.classes = Ae;
On.displayName = '@mantine/core/InputLabel';
const us = {},
  Jr = W((e, t) => {
    const n = I('InputPlaceholder', us, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        __staticSelector: c,
        variant: u,
        error: d,
        mod: f,
        ...p
      } = I('InputPlaceholder', us, n),
      g = Z({
        name: ['InputPlaceholder', c],
        props: n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        rootSelector: 'placeholder',
      });
    return h.jsx(D, {
      ...g('placeholder'),
      mod: [{ error: !!d }, f],
      component: 'span',
      variant: u,
      ref: t,
      ...p,
    });
  });
Jr.classes = Ae;
Jr.displayName = '@mantine/core/InputPlaceholder';
function _f(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex(l => l === 'input'),
    o = e.slice(0, r),
    s = e.slice(r + 1),
    i = (t && o.includes('description')) || (n && o.includes('error'));
  return {
    offsetBottom:
      (t && s.includes('description')) || (n && s.includes('error')),
    offsetTop: i,
  };
}
const Ef = {
    labelElement: 'label',
    inputContainer: e => e,
    inputWrapperOrder: ['label', 'description', 'input', 'error'],
  },
  Pf = (e, { size: t }) => ({
    label: { '--input-label-size': de(t), '--input-asterisk-color': void 0 },
    error: {
      '--input-error-size': t === void 0 ? void 0 : `calc(${de(t)} - ${P(2)})`,
    },
    description: {
      '--input-description-size':
        t === void 0 ? void 0 : `calc(${de(t)} - ${P(2)})`,
    },
  }),
  eo = W((e, t) => {
    const n = I('InputWrapper', Ef, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        size: c,
        variant: u,
        __staticSelector: d,
        inputContainer: f,
        inputWrapperOrder: p,
        label: g,
        error: v,
        description: y,
        labelProps: w,
        descriptionProps: S,
        errorProps: x,
        labelElement: C,
        children: R,
        withAsterisk: $,
        id: N,
        required: E,
        __stylesApiProps: M,
        mod: k,
        ...Y
      } = n,
      L = Z({
        name: ['InputWrapper', d],
        props: M || n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Pf,
      }),
      z = { size: c, variant: u, __staticSelector: d },
      V = Ze(N),
      G = typeof $ == 'boolean' ? $ : E,
      j = (x == null ? void 0 : x.id) || `${V}-error`,
      H = (S == null ? void 0 : S.id) || `${V}-description`,
      T = V,
      B = !!v && typeof v != 'boolean',
      b = !!y,
      _ = `${B ? j : ''} ${b ? H : ''}`,
      O = _.trim().length > 0 ? _.trim() : void 0,
      A = (w == null ? void 0 : w.id) || `${V}-label`,
      U =
        g &&
        h.jsx(
          On,
          {
            labelElement: C,
            id: A,
            htmlFor: T,
            required: G,
            ...z,
            ...w,
            children: g,
          },
          'label'
        ),
      q =
        b &&
        h.jsx(
          jn,
          {
            ...S,
            ...z,
            size: (S == null ? void 0 : S.size) || z.size,
            id: (S == null ? void 0 : S.id) || H,
            children: y,
          },
          'description'
        ),
      F = h.jsx(m.Fragment, { children: f(R) }, 'input'),
      te =
        B &&
        m.createElement(
          kn,
          {
            ...x,
            ...z,
            size: (x == null ? void 0 : x.size) || z.size,
            key: 'error',
            id: (x == null ? void 0 : x.id) || j,
          },
          v
        ),
      K = p.map(ne => {
        switch (ne) {
          case 'label':
            return U;
          case 'input':
            return F;
          case 'description':
            return q;
          case 'error':
            return te;
          default:
            return null;
        }
      });
    return h.jsx(wf, {
      value: {
        getStyles: L,
        describedBy: O,
        inputId: T,
        labelId: A,
        ..._f(p, { hasDescription: b, hasError: B }),
      },
      children: h.jsx(D, {
        ref: t,
        variant: u,
        size: c,
        mod: [{ error: !!v }, k],
        ...L('root'),
        ...Y,
        children: K,
      }),
    });
  });
eo.classes = Ae;
eo.displayName = '@mantine/core/InputWrapper';
const Nf = {
    variant: 'default',
    leftSectionPointerEvents: 'none',
    rightSectionPointerEvents: 'none',
    withAria: !0,
    withErrorStyles: !0,
  },
  Tf = (e, t, n) => ({
    wrapper: {
      '--input-margin-top': n.offsetTop
        ? 'calc(var(--mantine-spacing-xs) / 2)'
        : void 0,
      '--input-margin-bottom': n.offsetBottom
        ? 'calc(var(--mantine-spacing-xs) / 2)'
        : void 0,
      '--input-height': J(t.size, 'input-height'),
      '--input-fz': de(t.size),
      '--input-radius': t.radius === void 0 ? void 0 : ce(t.radius),
      '--input-left-section-width':
        t.leftSectionWidth !== void 0 ? P(t.leftSectionWidth) : void 0,
      '--input-right-section-width':
        t.rightSectionWidth !== void 0 ? P(t.rightSectionWidth) : void 0,
      '--input-padding-y': t.multiline ? J(t.size, 'input-padding-y') : void 0,
      '--input-left-section-pointer-events': t.leftSectionPointerEvents,
      '--input-right-section-pointer-events': t.rightSectionPointerEvents,
    },
  }),
  oe = _e((e, t) => {
    const n = I('Input', Nf, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        required: l,
        __staticSelector: c,
        __stylesApiProps: u,
        size: d,
        wrapperProps: f,
        error: p,
        disabled: g,
        leftSection: v,
        leftSectionProps: y,
        leftSectionWidth: w,
        rightSection: S,
        rightSectionProps: x,
        rightSectionWidth: C,
        rightSectionPointerEvents: R,
        leftSectionPointerEvents: $,
        variant: N,
        vars: E,
        pointer: M,
        multiline: k,
        radius: Y,
        id: L,
        withAria: z,
        withErrorStyles: V,
        mod: G,
        inputSize: j,
        __clearSection: H,
        __clearable: T,
        __defaultRightSection: B,
        ...b
      } = n,
      { styleProps: _, rest: O } = Ut(b),
      A = Jt(),
      U = {
        offsetBottom: A == null ? void 0 : A.offsetBottom,
        offsetTop: A == null ? void 0 : A.offsetTop,
      },
      q = Z({
        name: ['Input', c],
        props: u || n,
        classes: Ae,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        stylesCtx: U,
        rootSelector: 'wrapper',
        vars: E,
        varsResolver: Tf,
      }),
      F = z
        ? {
            required: l,
            disabled: g,
            'aria-invalid': !!p,
            'aria-describedby': A == null ? void 0 : A.describedBy,
            id: (A == null ? void 0 : A.inputId) || L,
          }
        : {},
      te = S || (T && H) || B;
    return h.jsx(yf, {
      value: { size: d || 'sm' },
      children: h.jsxs(D, {
        ...q('wrapper'),
        ..._,
        ...f,
        mod: [
          {
            error: !!p && V,
            pointer: M,
            disabled: g,
            multiline: k,
            'data-with-right-section': !!te,
            'data-with-left-section': !!v,
          },
          G,
        ],
        variant: N,
        size: d,
        children: [
          v &&
            h.jsx('div', {
              ...y,
              'data-position': 'left',
              ...q('section', {
                className: y == null ? void 0 : y.className,
                style: y == null ? void 0 : y.style,
              }),
              children: v,
            }),
          h.jsx(D, {
            component: 'input',
            ...O,
            ...F,
            ref: t,
            required: l,
            mod: { disabled: g, error: !!p && V },
            variant: N,
            __size: j,
            ...q('input'),
          }),
          te &&
            h.jsx('div', {
              ...x,
              'data-position': 'right',
              ...q('section', {
                className: x == null ? void 0 : x.className,
                style: x == null ? void 0 : x.style,
              }),
              children: te,
            }),
        ],
      }),
    });
  });
oe.classes = Ae;
oe.Wrapper = eo;
oe.Label = On;
oe.Error = kn;
oe.Description = jn;
oe.Placeholder = Jr;
oe.ClearButton = Bi;
oe.displayName = '@mantine/core/Input';
function Af(e, t, n) {
  const r = I(e, t, n),
    {
      label: o,
      description: s,
      error: i,
      required: a,
      classNames: l,
      styles: c,
      className: u,
      unstyled: d,
      __staticSelector: f,
      __stylesApiProps: p,
      errorProps: g,
      labelProps: v,
      descriptionProps: y,
      wrapperProps: w,
      id: S,
      size: x,
      style: C,
      inputContainer: R,
      inputWrapperOrder: $,
      withAsterisk: N,
      variant: E,
      vars: M,
      mod: k,
      ...Y
    } = r,
    { styleProps: L, rest: z } = Ut(Y),
    V = {
      label: o,
      description: s,
      error: i,
      required: a,
      classNames: l,
      className: u,
      __staticSelector: f,
      __stylesApiProps: p || r,
      errorProps: g,
      labelProps: v,
      descriptionProps: y,
      unstyled: d,
      styles: c,
      size: x,
      style: C,
      inputContainer: R,
      inputWrapperOrder: $,
      withAsterisk: N,
      variant: E,
      id: S,
      mod: k,
      ...w,
    };
  return {
    ...z,
    classNames: l,
    styles: c,
    unstyled: d,
    wrapperProps: { ...V, ...L },
    inputProps: {
      required: a,
      classNames: l,
      styles: c,
      unstyled: d,
      size: x,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: i,
      variant: E,
      id: S,
    },
  };
}
const jf = { __staticSelector: 'InputBase', withAria: !0 },
  tt = _e((e, t) => {
    const { inputProps: n, wrapperProps: r, ...o } = Af('InputBase', jf, e);
    return h.jsx(oe.Wrapper, {
      ...r,
      children: h.jsx(oe, { ...n, ...o, ref: t }),
    });
  });
tt.classes = { ...oe.classes, ...oe.Wrapper.classes };
tt.displayName = '@mantine/core/InputBase';
function kf({ style: e, size: t = 16, ...n }) {
  return h.jsx('svg', {
    viewBox: '0 0 15 15',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { ...e, width: P(t), height: P(t), display: 'block' },
    ...n,
    children: h.jsx('path', {
      d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }),
  });
}
kf.displayName = '@mantine/core/AccordionChevron';
var Fi = { root: 'm_b6d8b162' };
function Of(e) {
  if (e === 'start') return 'start';
  if (e === 'end' || e) return 'end';
}
const If = { inherit: !1 },
  Mf = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
    root: {
      '--text-fz': de(o),
      '--text-lh': Nc(o),
      '--text-gradient': t === 'gradient' ? mr(r, e) : void 0,
      '--text-line-clamp': typeof n == 'number' ? n.toString() : void 0,
      '--text-color': s ? xe(s, e) : void 0,
    },
  }),
  Hi = _e((e, t) => {
    const n = I('Text', If, e),
      {
        lineClamp: r,
        truncate: o,
        inline: s,
        inherit: i,
        gradient: a,
        span: l,
        __staticSelector: c,
        vars: u,
        className: d,
        style: f,
        classNames: p,
        styles: g,
        unstyled: v,
        variant: y,
        mod: w,
        size: S,
        ...x
      } = n,
      C = Z({
        name: ['Text', c],
        props: n,
        classes: Fi,
        className: d,
        style: f,
        classNames: p,
        styles: g,
        unstyled: v,
        vars: u,
        varsResolver: Mf,
      });
    return h.jsx(D, {
      ...C('root', { focusable: !0 }),
      ref: t,
      component: l ? 'span' : 'p',
      variant: y,
      mod: [
        {
          'data-truncate': Of(o),
          'data-line-clamp': typeof r == 'number',
          'data-inline': s,
          'data-inherit': i,
        },
        w,
      ],
      size: S,
      ...x,
    });
  });
Hi.classes = Fi;
Hi.displayName = '@mantine/core/Text';
function Wi(e) {
  return typeof e == 'string'
    ? { value: e, label: e }
    : 'value' in e && !('label' in e)
      ? { value: e.value, label: e.value, disabled: e.disabled }
      : typeof e == 'number'
        ? { value: e.toString(), label: e.toString() }
        : 'group' in e
          ? { group: e.group, items: e.items.map(t => Wi(t)) }
          : e;
}
function Lf(e) {
  return e ? e.map(t => Wi(t)) : [];
}
function Vi(e) {
  return e.reduce(
    (t, n) => ('group' in n ? { ...t, ...Vi(n.items) } : ((t[n.value] = n), t)),
    {}
  );
}
var Se = {
  dropdown: 'm_88b62a41',
  search: 'm_985517d8',
  options: 'm_b2821a6e',
  option: 'm_92253aa5',
  empty: 'm_2530cd1d',
  header: 'm_858f94bd',
  footer: 'm_82b967cb',
  group: 'm_254f3e4f',
  groupLabel: 'm_2bb2e9e5',
  chevron: 'm_2943220b',
  optionsDropdownOption: 'm_390b5f4',
  optionsDropdownCheckIcon: 'm_8ee53fc2',
};
const Df = { error: null },
  zf = (e, { size: t, color: n }) => ({
    chevron: {
      '--combobox-chevron-size': J(t, 'combobox-chevron-size'),
      '--combobox-chevron-color': n ? xe(n, e) : void 0,
    },
  }),
  to = W((e, t) => {
    const n = I('ComboboxChevron', Df, e),
      {
        size: r,
        error: o,
        style: s,
        className: i,
        classNames: a,
        styles: l,
        unstyled: c,
        vars: u,
        mod: d,
        ...f
      } = n,
      p = Z({
        name: 'ComboboxChevron',
        classes: Se,
        props: n,
        style: s,
        className: i,
        classNames: a,
        styles: l,
        unstyled: c,
        vars: u,
        varsResolver: zf,
        rootSelector: 'chevron',
      });
    return h.jsx(D, {
      component: 'svg',
      ...f,
      ...p('chevron'),
      size: r,
      viewBox: '0 0 15 15',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      mod: ['combobox-chevron', { error: o }, d],
      ref: t,
      children: h.jsx('path', {
        d: 'M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z',
        fill: 'currentColor',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }),
    });
  });
to.classes = Se;
to.displayName = '@mantine/core/ComboboxChevron';
const [Bf, je] = ct('Combobox component was not found in tree'),
  Yi = m.forwardRef(
    ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) =>
      h.jsx(oe.ClearButton, {
        ref: s,
        tabIndex: -1,
        'aria-hidden': !0,
        ...o,
        onMouseDown: i => {
          i.preventDefault(), t == null || t(i);
        },
        onClick: i => {
          r(), n == null || n(i);
        },
      })
  );
Yi.displayName = '@mantine/core/ComboboxClearButton';
const Ff = {},
  no = W((e, t) => {
    const {
        classNames: n,
        styles: r,
        className: o,
        style: s,
        hidden: i,
        ...a
      } = I('ComboboxDropdown', Ff, e),
      l = je();
    return h.jsx(dt.Dropdown, {
      ...a,
      ref: t,
      role: 'presentation',
      'data-hidden': i || void 0,
      ...l.getStyles('dropdown', {
        className: o,
        style: s,
        classNames: n,
        styles: r,
      }),
    });
  });
no.classes = Se;
no.displayName = '@mantine/core/ComboboxDropdown';
const Hf = { refProp: 'ref' },
  Gi = W((e, t) => {
    const { children: n, refProp: r } = I('ComboboxDropdownTarget', Hf, e);
    if ((je(), !Yt(n)))
      throw new Error(
        'Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
      );
    return h.jsx(dt.Target, { ref: t, refProp: r, children: n });
  });
Gi.displayName = '@mantine/core/ComboboxDropdownTarget';
const Wf = {},
  ro = W((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...a
      } = I('ComboboxEmpty', Wf, e),
      l = je();
    return h.jsx(D, {
      ref: t,
      ...l.getStyles('empty', {
        className: r,
        classNames: n,
        styles: s,
        style: o,
      }),
      ...a,
    });
  });
ro.classes = Se;
ro.displayName = '@mantine/core/ComboboxEmpty';
function oo({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s,
}) {
  const i = je(),
    [a, l] = m.useState(null),
    c = d => {
      if ((e == null || e(d), !i.readOnly && t)) {
        if (d.nativeEvent.isComposing) return;
        if (
          (d.nativeEvent.code === 'ArrowDown' &&
            (d.preventDefault(),
            i.store.dropdownOpened
              ? l(i.store.selectNextOption())
              : (i.store.openDropdown('keyboard'),
                l(i.store.selectActiveOption()),
                i.store.updateSelectedOptionIndex('selected', {
                  scrollIntoView: !0,
                }))),
          d.nativeEvent.code === 'ArrowUp' &&
            (d.preventDefault(),
            i.store.dropdownOpened
              ? l(i.store.selectPreviousOption())
              : (i.store.openDropdown('keyboard'),
                l(i.store.selectActiveOption()),
                i.store.updateSelectedOptionIndex('selected', {
                  scrollIntoView: !0,
                }))),
          d.nativeEvent.code === 'Enter' ||
            d.nativeEvent.code === 'NumpadEnter')
        ) {
          if (d.nativeEvent.keyCode === 229) return;
          const f = i.store.getSelectedOptionIndex();
          i.store.dropdownOpened && f !== -1
            ? (d.preventDefault(), i.store.clickSelectedOption())
            : o === 'button' &&
              (d.preventDefault(), i.store.openDropdown('keyboard'));
        }
        d.key === 'Escape' && i.store.closeDropdown('keyboard'),
          d.nativeEvent.code === 'Space' &&
            o === 'button' &&
            (d.preventDefault(), i.store.toggleDropdown('keyboard'));
      }
    };
  return {
    ...(n
      ? {
          'aria-haspopup': 'listbox',
          'aria-expanded':
            (r && !!(i.store.listId && i.store.dropdownOpened)) || void 0,
          'aria-controls': i.store.dropdownOpened ? i.store.listId : void 0,
          'aria-activedescendant': (i.store.dropdownOpened && a) || void 0,
          autoComplete: s,
          'data-expanded': i.store.dropdownOpened || void 0,
          'data-mantine-stop-propagation': i.store.dropdownOpened || void 0,
        }
      : {}),
    onKeyDown: c,
  };
}
const Vf = {
    refProp: 'ref',
    targetType: 'input',
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: 'off',
  },
  Ui = W((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: a,
      autoComplete: l,
      ...c
    } = I('ComboboxEventsTarget', Vf, e);
    if (!Yt(n))
      throw new Error(
        'Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
      );
    const u = je(),
      d = oo({
        targetType: a,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: l,
      });
    return m.cloneElement(n, {
      ...d,
      ...c,
      [r]: $e(t, u.store.targetRef, Is(n)),
    });
  });
Ui.displayName = '@mantine/core/ComboboxEventsTarget';
const Yf = {},
  so = W((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...a
      } = I('ComboboxFooter', Yf, e),
      l = je();
    return h.jsx(D, {
      ref: t,
      ...l.getStyles('footer', {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...a,
      onMouseDown: c => {
        c.preventDefault();
      },
    });
  });
so.classes = Se;
so.displayName = '@mantine/core/ComboboxFooter';
const Gf = {},
  io = W((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        children: a,
        label: l,
        ...c
      } = I('ComboboxGroup', Gf, e),
      u = je();
    return h.jsxs(D, {
      ref: t,
      ...u.getStyles('group', {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...c,
      children: [
        l &&
          h.jsx('div', {
            ...u.getStyles('groupLabel', { classNames: n, styles: s }),
            children: l,
          }),
        a,
      ],
    });
  });
io.classes = Se;
io.displayName = '@mantine/core/ComboboxGroup';
const Uf = {},
  ao = W((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        ...a
      } = I('ComboboxHeader', Uf, e),
      l = je();
    return h.jsx(D, {
      ref: t,
      ...l.getStyles('header', {
        className: r,
        classNames: n,
        style: o,
        styles: s,
      }),
      ...a,
      onMouseDown: c => {
        c.preventDefault();
      },
    });
  });
ao.classes = Se;
ao.displayName = '@mantine/core/ComboboxHeader';
function qi({ value: e, valuesDivider: t = ',', ...n }) {
  return h.jsx('input', {
    type: 'hidden',
    value: Array.isArray(e) ? e.join(t) : e || '',
    ...n,
  });
}
qi.displayName = '@mantine/core/ComboboxHiddenInput';
const qf = {},
  co = W((e, t) => {
    const n = I('ComboboxOption', qf, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: a,
        onClick: l,
        id: c,
        active: u,
        onMouseDown: d,
        onMouseOver: f,
        disabled: p,
        selected: g,
        mod: v,
        ...y
      } = n,
      w = je(),
      S = m.useId(),
      x = c || S;
    return h.jsx(D, {
      ...w.getStyles('option', {
        className: o,
        classNames: r,
        styles: i,
        style: s,
      }),
      ...y,
      ref: t,
      id: x,
      mod: [
        'combobox-option',
        {
          'combobox-active': u,
          'combobox-disabled': p,
          'combobox-selected': g,
        },
        v,
      ],
      role: 'option',
      onClick: C => {
        var R;
        p
          ? C.preventDefault()
          : ((R = w.onOptionSubmit) == null || R.call(w, n.value, n),
            l == null || l(C));
      },
      onMouseDown: C => {
        C.preventDefault(), d == null || d(C);
      },
      onMouseOver: C => {
        w.resetSelectionOnOptionHover && w.store.resetSelectedOption(),
          f == null || f(C);
      },
    });
  });
co.classes = Se;
co.displayName = '@mantine/core/ComboboxOption';
const Xf = {},
  lo = W((e, t) => {
    const n = I('ComboboxOptions', Xf, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        id: a,
        onMouseDown: l,
        labelledBy: c,
        ...u
      } = n,
      d = je(),
      f = Ze(a);
    return (
      m.useEffect(() => {
        d.store.setListId(f);
      }, [f]),
      h.jsx(D, {
        ref: t,
        ...d.getStyles('options', {
          className: o,
          style: s,
          classNames: r,
          styles: i,
        }),
        ...u,
        id: f,
        role: 'listbox',
        'aria-labelledby': c,
        onMouseDown: p => {
          p.preventDefault(), l == null || l(p);
        },
      })
    );
  });
lo.classes = Se;
lo.displayName = '@mantine/core/ComboboxOptions';
const Zf = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  uo = W((e, t) => {
    const n = I('ComboboxSearch', Zf, e),
      {
        classNames: r,
        styles: o,
        unstyled: s,
        vars: i,
        withAriaAttributes: a,
        onKeyDown: l,
        withKeyboardNavigation: c,
        size: u,
        ...d
      } = n,
      f = je(),
      p = f.getStyles('search'),
      g = oo({
        targetType: 'input',
        withAriaAttributes: a,
        withKeyboardNavigation: c,
        withExpandedAttribute: !1,
        onKeyDown: l,
        autoComplete: 'off',
      });
    return h.jsx(oe, {
      ref: $e(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...g,
      ...d,
      __staticSelector: 'Combobox',
    });
  });
uo.classes = Se;
uo.displayName = '@mantine/core/ComboboxSearch';
const Kf = {
    refProp: 'ref',
    targetType: 'input',
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: 'off',
  },
  Xi = W((e, t) => {
    const {
      children: n,
      refProp: r,
      withKeyboardNavigation: o,
      withAriaAttributes: s,
      withExpandedAttribute: i,
      targetType: a,
      autoComplete: l,
      ...c
    } = I('ComboboxTarget', Kf, e);
    if (!Yt(n))
      throw new Error(
        'Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
      );
    const u = je(),
      d = oo({
        targetType: a,
        withAriaAttributes: s,
        withKeyboardNavigation: o,
        withExpandedAttribute: i,
        onKeyDown: n.props.onKeyDown,
        autoComplete: l,
      }),
      f = m.cloneElement(n, { ...d, ...c });
    return h.jsx(dt.Target, { ref: $e(t, u.store.targetRef), children: f });
  });
Xi.displayName = '@mantine/core/ComboboxTarget';
function Qf(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute('data-combobox-disabled')) return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute('data-combobox-disabled')) return r;
  }
  return e;
}
function Jf(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute('data-combobox-disabled')) return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute('data-combobox-disabled')) return r;
  }
  return e;
}
function ep(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute('data-combobox-disabled')) return t;
  return -1;
}
function Zi({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = 'instant',
} = {}) {
  const [a, l] = st({ value: t, defaultValue: e, finalValue: !1, onChange: n }),
    c = m.useRef(null),
    u = m.useRef(-1),
    d = m.useRef(null),
    f = m.useRef(null),
    p = m.useRef(-1),
    g = m.useRef(-1),
    v = m.useRef(-1),
    y = m.useCallback(
      (j = 'unknown') => {
        a || (l(!0), o == null || o(j));
      },
      [l, o, a]
    ),
    w = m.useCallback(
      (j = 'unknown') => {
        a && (l(!1), r == null || r(j));
      },
      [l, r, a]
    ),
    S = m.useCallback(
      (j = 'unknown') => {
        a ? w(j) : y(j);
      },
      [w, y, a]
    ),
    x = m.useCallback(() => {
      const j = document.querySelector(
        `#${c.current} [data-combobox-selected]`
      );
      j == null || j.removeAttribute('data-combobox-selected'),
        j == null || j.removeAttribute('aria-selected');
    }, []),
    C = m.useCallback(
      j => {
        const H = document.getElementById(c.current),
          T = H == null ? void 0 : H.querySelectorAll('[data-combobox-option]');
        if (!T) return null;
        const B = j >= T.length ? 0 : j < 0 ? T.length - 1 : j;
        return (
          (u.current = B),
          T != null && T[B] && !T[B].hasAttribute('data-combobox-disabled')
            ? (x(),
              T[B].setAttribute('data-combobox-selected', 'true'),
              T[B].setAttribute('aria-selected', 'true'),
              T[B].scrollIntoView({ block: 'nearest', behavior: i }),
              T[B].id)
            : null
        );
      },
      [i, x]
    ),
    R = m.useCallback(() => {
      const j = document.querySelector(`#${c.current} [data-combobox-active]`);
      if (j) {
        const H = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          T = Array.from(H).findIndex(B => B === j);
        return C(T);
      }
      return C(0);
    }, [C]),
    $ = m.useCallback(
      () =>
        C(
          Jf(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [C, s]
    ),
    N = m.useCallback(
      () =>
        C(
          Qf(
            u.current,
            document.querySelectorAll(`#${c.current} [data-combobox-option]`),
            s
          )
        ),
      [C, s]
    ),
    E = m.useCallback(
      () =>
        C(
          ep(document.querySelectorAll(`#${c.current} [data-combobox-option]`))
        ),
      [C]
    ),
    M = m.useCallback((j = 'selected', H) => {
      v.current = window.setTimeout(() => {
        var b;
        const T = document.querySelectorAll(
            `#${c.current} [data-combobox-option]`
          ),
          B = Array.from(T).findIndex(_ =>
            _.hasAttribute(`data-combobox-${j}`)
          );
        (u.current = B),
          H != null &&
            H.scrollIntoView &&
            ((b = T[B]) == null ||
              b.scrollIntoView({ block: 'nearest', behavior: i }));
      }, 0);
    }, []),
    k = m.useCallback(() => {
      (u.current = -1), x();
    }, [x]),
    Y = m.useCallback(() => {
      const j = document.querySelectorAll(
          `#${c.current} [data-combobox-option]`
        ),
        H = j == null ? void 0 : j[u.current];
      H == null || H.click();
    }, []),
    L = m.useCallback(j => {
      c.current = j;
    }, []),
    z = m.useCallback(() => {
      p.current = window.setTimeout(() => d.current.focus(), 0);
    }, []),
    V = m.useCallback(() => {
      g.current = window.setTimeout(() => f.current.focus(), 0);
    }, []),
    G = m.useCallback(() => u.current, []);
  return (
    m.useEffect(
      () => () => {
        window.clearTimeout(p.current),
          window.clearTimeout(g.current),
          window.clearTimeout(v.current);
      },
      []
    ),
    {
      dropdownOpened: a,
      openDropdown: y,
      closeDropdown: w,
      toggleDropdown: S,
      selectedOptionIndex: u.current,
      getSelectedOptionIndex: G,
      selectOption: C,
      selectFirstOption: E,
      selectActiveOption: R,
      selectNextOption: $,
      selectPreviousOption: N,
      resetSelectedOption: k,
      updateSelectedOptionIndex: M,
      listId: c.current,
      setListId: L,
      clickSelectedOption: Y,
      searchRef: d,
      focusSearchInput: z,
      targetRef: f,
      focusTarget: V,
    }
  );
}
const tp = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: 'target',
    transitionProps: { transition: 'fade', duration: 0 },
  },
  np = (e, { size: t, dropdownPadding: n }) => ({
    options: {
      '--combobox-option-fz': de(t),
      '--combobox-option-padding': J(t, 'combobox-option-padding'),
    },
    dropdown: {
      '--combobox-padding': n === void 0 ? void 0 : P(n),
      '--combobox-option-fz': de(t),
      '--combobox-option-padding': J(t, 'combobox-option-padding'),
    },
  });
function ee(e) {
  const t = I('Combobox', tp, e),
    {
      classNames: n,
      styles: r,
      unstyled: o,
      children: s,
      store: i,
      vars: a,
      onOptionSubmit: l,
      onClose: c,
      size: u,
      dropdownPadding: d,
      resetSelectionOnOptionHover: f,
      __staticSelector: p,
      readOnly: g,
      ...v
    } = t,
    y = Zi(),
    w = i || y,
    S = Z({
      name: p || 'Combobox',
      classes: Se,
      props: t,
      classNames: n,
      styles: r,
      unstyled: o,
      vars: a,
      varsResolver: np,
    }),
    x = () => {
      c == null || c(), w.closeDropdown();
    };
  return h.jsx(Bf, {
    value: {
      getStyles: S,
      store: w,
      onOptionSubmit: l,
      size: u,
      resetSelectionOnOptionHover: f,
      readOnly: g,
    },
    children: h.jsx(dt, {
      opened: w.dropdownOpened,
      ...v,
      onChange: C => !C && x(),
      withRoles: !1,
      unstyled: o,
      children: s,
    }),
  });
}
const rp = e => e;
ee.extend = rp;
ee.classes = Se;
ee.displayName = '@mantine/core/Combobox';
ee.Target = Xi;
ee.Dropdown = no;
ee.Options = lo;
ee.Option = co;
ee.Search = uo;
ee.Empty = ro;
ee.Chevron = to;
ee.Footer = so;
ee.Header = ao;
ee.EventsTarget = Ui;
ee.DropdownTarget = Gi;
ee.Group = io;
ee.ClearButton = Yi;
ee.HiddenInput = qi;
var Ki = {
  root: 'm_5f75b09e',
  body: 'm_5f6e695e',
  labelWrapper: 'm_d3ea56bb',
  label: 'm_8ee546b8',
  description: 'm_328f68c0',
  error: 'm_8e8a99cc',
};
const op = Ki,
  Qi = m.forwardRef(
    (
      {
        __staticSelector: e,
        __stylesApiProps: t,
        className: n,
        classNames: r,
        styles: o,
        unstyled: s,
        children: i,
        label: a,
        description: l,
        id: c,
        disabled: u,
        error: d,
        size: f,
        labelPosition: p = 'left',
        bodyElement: g = 'div',
        labelElement: v = 'label',
        variant: y,
        style: w,
        vars: S,
        mod: x,
        ...C
      },
      R
    ) => {
      const $ = Z({
        name: e,
        props: t,
        className: n,
        style: w,
        classes: Ki,
        classNames: r,
        styles: o,
        unstyled: s,
      });
      return h.jsx(D, {
        ...$('root'),
        ref: R,
        __vars: { '--label-fz': de(f), '--label-lh': J(f, 'label-lh') },
        mod: [{ 'label-position': p }, x],
        variant: y,
        size: f,
        ...C,
        children: h.jsxs(D, {
          component: g,
          htmlFor: g === 'label' ? c : void 0,
          ...$('body'),
          children: [
            i,
            h.jsxs('div', {
              ...$('labelWrapper'),
              'data-disabled': u || void 0,
              children: [
                a &&
                  h.jsx(D, {
                    component: v,
                    htmlFor: v === 'label' ? c : void 0,
                    ...$('label'),
                    'data-disabled': u || void 0,
                    children: a,
                  }),
                l &&
                  h.jsx(oe.Description, {
                    size: f,
                    __inheritStyles: !1,
                    ...$('description'),
                    children: l,
                  }),
                d &&
                  typeof d != 'boolean' &&
                  h.jsx(oe.Error, {
                    size: f,
                    __inheritStyles: !1,
                    ...$('error'),
                    children: d,
                  }),
              ],
            }),
          ],
        }),
      });
    }
  );
Qi.displayName = '@mantine/core/InlineInput';
const Ji = m.createContext(null),
  sp = Ji.Provider,
  ea = () => m.useContext(Ji),
  [ip, ap] = bn();
var ta = { card: 'm_26775b0a' };
const cp = { withBorder: !0 },
  lp = (e, { radius: t }) => ({ card: { '--card-radius': ce(t) } }),
  fo = W((e, t) => {
    const n = I('CheckboxCard', cp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        checked: c,
        mod: u,
        withBorder: d,
        value: f,
        onClick: p,
        defaultChecked: g,
        onChange: v,
        ...y
      } = n,
      w = Z({
        name: 'CheckboxCard',
        classes: ta,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: lp,
        rootSelector: 'card',
      }),
      S = ea(),
      x = typeof c == 'boolean' ? c : S ? S.value.includes(f || '') : void 0,
      [C, R] = st({ value: x, defaultValue: g, finalValue: !1, onChange: v });
    return h.jsx(ip, {
      value: { checked: C },
      children: h.jsx(bt, {
        ref: t,
        mod: [{ 'with-border': d, checked: C }, u],
        ...w('card'),
        ...y,
        role: 'checkbox',
        'aria-checked': C,
        onClick: $ => {
          p == null || p($), S == null || S.onChange(f || ''), R(!C);
        },
      }),
    });
  });
fo.displayName = '@mantine/core/CheckboxCard';
fo.classes = ta;
function up({ children: e, role: t }) {
  const n = Jt();
  return n
    ? h.jsx('div', {
        role: t,
        'aria-labelledby': n.labelId,
        'aria-describedby': n.describedBy,
        children: e,
      })
    : h.jsx(h.Fragment, { children: e });
}
const dp = {},
  po = W((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onChange: o,
        size: s,
        wrapperProps: i,
        children: a,
        readOnly: l,
        ...c
      } = I('CheckboxGroup', dp, e),
      [u, d] = st({ value: n, defaultValue: r, finalValue: [], onChange: o }),
      f = p => {
        const g = typeof p == 'string' ? p : p.currentTarget.value;
        !l && d(u.includes(g) ? u.filter(v => v !== g) : [...u, g]);
      };
    return h.jsx(sp, {
      value: { value: u, onChange: f, size: s },
      children: h.jsx(oe.Wrapper, {
        size: s,
        ref: t,
        ...i,
        ...c,
        labelElement: 'div',
        __staticSelector: 'CheckboxGroup',
        children: h.jsx(up, { role: 'group', children: a }),
      }),
    });
  });
po.classes = oe.Wrapper.classes;
po.displayName = '@mantine/core/CheckboxGroup';
function mo({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: P(e), height: P(e), ...t } : t;
  return h.jsx('svg', {
    viewBox: '0 0 10 7',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: r,
    'aria-hidden': !0,
    ...n,
    children: h.jsx('path', {
      d: 'M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }),
  });
}
function na({ indeterminate: e, ...t }) {
  return e
    ? h.jsx('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 32 6',
        'aria-hidden': !0,
        ...t,
        children: h.jsx('rect', {
          width: '32',
          height: '6',
          fill: 'currentColor',
          rx: '3',
        }),
      })
    : h.jsx(mo, { ...t });
}
var ra = {
  indicator: 'm_5e5256ee',
  icon: 'm_1b1c543a',
  'indicator--outline': 'm_76e20374',
};
const fp = { icon: na },
  pp = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const a = yt({ color: n || e.primaryColor, theme: e }),
      l =
        a.isThemeColor && a.shade === void 0
          ? `var(--mantine-color-${a.color}-outline)`
          : a.color;
    return {
      indicator: {
        '--checkbox-size': J(r, 'checkbox-size'),
        '--checkbox-radius': t === void 0 ? void 0 : ce(t),
        '--checkbox-color': s === 'outline' ? l : xe(n, e),
        '--checkbox-icon-color': o
          ? xe(o, e)
          : Or(i, e)
            ? Sn({ color: n, theme: e, autoContrast: i })
            : void 0,
      },
    };
  },
  ho = W((e, t) => {
    const n = I('CheckboxIndicator', fp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        icon: c,
        indeterminate: u,
        radius: d,
        color: f,
        iconColor: p,
        autoContrast: g,
        checked: v,
        mod: y,
        variant: w,
        disabled: S,
        ...x
      } = n,
      C = c,
      R = Z({
        name: 'CheckboxIndicator',
        classes: ra,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: pp,
        rootSelector: 'indicator',
      }),
      $ = ap(),
      N =
        typeof v == 'boolean' || typeof u == 'boolean'
          ? v || u
          : ($ == null ? void 0 : $.checked) || !1;
    return h.jsx(D, {
      ref: t,
      ...R('indicator', { variant: w }),
      variant: w,
      mod: [{ checked: N, disabled: S }, y],
      ...x,
      children: h.jsx(C, { indeterminate: u, ...R('icon') }),
    });
  });
ho.displayName = '@mantine/core/CheckboxIndicator';
ho.classes = ra;
var oa = {
  root: 'm_bf2d988c',
  inner: 'm_26062bec',
  input: 'm_26063560',
  icon: 'm_bf295423',
  'input--outline': 'm_215c4542',
};
const mp = { labelPosition: 'right', icon: na },
  hp = (
    e,
    { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }
  ) => {
    const a = yt({ color: n || e.primaryColor, theme: e }),
      l =
        a.isThemeColor && a.shade === void 0
          ? `var(--mantine-color-${a.color}-outline)`
          : a.color;
    return {
      root: {
        '--checkbox-size': J(r, 'checkbox-size'),
        '--checkbox-radius': t === void 0 ? void 0 : ce(t),
        '--checkbox-color': s === 'outline' ? l : xe(n, e),
        '--checkbox-icon-color': o
          ? xe(o, e)
          : Or(i, e)
            ? Sn({ color: n, theme: e, autoContrast: i })
            : void 0,
      },
    };
  },
  en = W((e, t) => {
    const n = I('Checkbox', mp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        color: c,
        label: u,
        id: d,
        size: f,
        radius: p,
        wrapperProps: g,
        checked: v,
        labelPosition: y,
        description: w,
        error: S,
        disabled: x,
        variant: C,
        indeterminate: R,
        icon: $,
        rootRef: N,
        iconColor: E,
        onChange: M,
        autoContrast: k,
        mod: Y,
        ...L
      } = n,
      z = ea(),
      V = f || (z == null ? void 0 : z.size),
      G = $,
      j = Z({
        name: 'Checkbox',
        props: n,
        classes: oa,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: hp,
      }),
      { styleProps: H, rest: T } = Ut(L),
      B = Ze(d),
      b = z
        ? {
            checked: z.value.includes(T.value),
            onChange: A => {
              z.onChange(A), M == null || M(A);
            },
          }
        : {},
      _ = m.useRef(null),
      O = t || _;
    return (
      m.useEffect(() => {
        O && 'current' in O && O.current && (O.current.indeterminate = R || !1);
      }, [R, O]),
      h.jsx(Qi, {
        ...j('root'),
        __staticSelector: 'Checkbox',
        __stylesApiProps: n,
        id: B,
        size: V,
        labelPosition: y,
        label: u,
        description: w,
        error: S,
        disabled: x,
        classNames: r,
        styles: i,
        unstyled: a,
        'data-checked': b.checked || v || void 0,
        variant: C,
        ref: N,
        mod: Y,
        ...H,
        ...g,
        children: h.jsxs(D, {
          ...j('inner'),
          mod: { 'data-label-position': y },
          children: [
            h.jsx(D, {
              component: 'input',
              id: B,
              ref: O,
              checked: v,
              disabled: x,
              mod: { error: !!S, indeterminate: R },
              ...j('input', { focusable: !0, variant: C }),
              onChange: M,
              ...T,
              ...b,
              type: 'checkbox',
            }),
            h.jsx(G, { indeterminate: R, ...j('icon') }),
          ],
        }),
      })
    );
  });
en.classes = { ...oa, ...op };
en.displayName = '@mantine/core/Checkbox';
en.Group = po;
en.Indicator = ho;
en.Card = fo;
function Vt(e) {
  return 'group' in e;
}
function sa({ options: e, search: t, limit: n }) {
  const r = t.trim().toLowerCase(),
    o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n) return o;
    Vt(i) &&
      o.push({
        group: i.group,
        items: sa({ options: i.items, search: t, limit: n - o.length }),
      }),
      Vt(i) || (i.label.toLowerCase().includes(r) && o.push(i));
  }
  return o;
}
function gp(e) {
  if (e.length === 0) return !0;
  for (const t of e) if (!('group' in t) || t.items.length > 0) return !1;
  return !0;
}
function ia(e, t = new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Vt(n)) ia(n.items, t);
      else {
        if (typeof n.value > 'u')
          throw new Error(
            '[@mantine/core] Each option must have value property'
          );
        if (typeof n.value != 'string')
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`
          );
        if (t.has(n.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`
          );
        t.add(n.value);
      }
}
function vp(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function aa({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s,
}) {
  if (!Vt(e)) {
    const a = vp(n, e.value),
      l = t && a && h.jsx(mo, { className: Se.optionsDropdownCheckIcon }),
      c = h.jsxs(h.Fragment, {
        children: [
          r === 'left' && l,
          h.jsx('span', { children: e.label }),
          r === 'right' && l,
        ],
      });
    return h.jsx(ee.Option, {
      value: e.value,
      disabled: e.disabled,
      className: ge({ [Se.optionsDropdownOption]: !o }),
      'data-reverse': r === 'right' || void 0,
      'data-checked': a || void 0,
      'aria-selected': a,
      active: a,
      children: typeof s == 'function' ? s({ option: e, checked: a }) : c,
    });
  }
  const i = e.items.map(a =>
    h.jsx(
      aa,
      {
        data: a,
        value: n,
        unstyled: o,
        withCheckIcon: t,
        checkIconPosition: r,
        renderOption: s,
      },
      a.value
    )
  );
  return h.jsx(ee.Group, { label: e.group, children: i });
}
function yp({
  data: e,
  hidden: t,
  hiddenWhenEmpty: n,
  filter: r,
  search: o,
  limit: s,
  maxDropdownHeight: i,
  withScrollArea: a = !0,
  filterOptions: l = !0,
  withCheckIcon: c = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: p,
  labelId: g,
  renderOption: v,
  scrollAreaProps: y,
  'aria-label': w,
}) {
  ia(e);
  const x =
      typeof o == 'string'
        ? (r || sa)({ options: e, search: l ? o : '', limit: s ?? 1 / 0 })
        : e,
    C = gp(x),
    R = x.map($ =>
      h.jsx(
        aa,
        {
          data: $,
          withCheckIcon: c,
          value: u,
          checkIconPosition: d,
          unstyled: p,
          renderOption: v,
        },
        Vt($) ? $.group : $.value
      )
    );
  return h.jsx(ee.Dropdown, {
    hidden: t || (n && C),
    'data-composed': !0,
    children: h.jsxs(ee.Options, {
      labelledBy: g,
      'aria-label': w,
      children: [
        a
          ? h.jsx(Zt.Autosize, {
              mah: i ?? 220,
              type: 'scroll',
              scrollbarSize: 'var(--combobox-padding)',
              offsetScrollbars: 'y',
              ...y,
              children: R,
            })
          : R,
        C && f && h.jsx(ee.Empty, { children: f }),
      ],
    }),
  });
}
const ca = m.createContext(null),
  bp = ca.Provider;
function xp() {
  return { withinGroup: !!m.useContext(ca) };
}
var In = {
  group: 'm_11def92b',
  root: 'm_f85678b6',
  image: 'm_11f8ac07',
  placeholder: 'm_104cd71f',
};
const wp = {},
  Sp = (e, { spacing: t }) => ({ group: { '--ag-spacing': ht(t) } }),
  go = W((e, t) => {
    const n = I('AvatarGroup', wp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        spacing: c,
        ...u
      } = n,
      d = Z({
        name: 'AvatarGroup',
        classes: In,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Sp,
        rootSelector: 'group',
      });
    return h.jsx(bp, {
      value: !0,
      children: h.jsx(D, { ref: t, ...d('group'), ...u }),
    });
  });
go.classes = In;
go.displayName = '@mantine/core/AvatarGroup';
function Cp(e) {
  return h.jsx('svg', {
    ...e,
    'data-avatar-placeholder-icon': !0,
    viewBox: '0 0 15 15',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: h.jsx('path', {
      d: 'M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }),
  });
}
function Rp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) {
    const r = e.charCodeAt(n);
    (t = (t << 5) - t + r), (t |= 0);
  }
  return t;
}
const $p = [
  'blue',
  'cyan',
  'grape',
  'green',
  'indigo',
  'lime',
  'orange',
  'pink',
  'red',
  'teal',
  'violet',
];
function _p(e, t = $p) {
  const n = Rp(e),
    r = Math.abs(n) % t.length;
  return t[r];
}
function Ep(e, t = 2) {
  const n = e.split(' ');
  return n.length === 1
    ? e.slice(0, t).toUpperCase()
    : n
        .map(r => r[0])
        .slice(0, t)
        .join('')
        .toUpperCase();
}
const Pp = {},
  Np = (
    e,
    {
      size: t,
      radius: n,
      variant: r,
      gradient: o,
      color: s,
      autoContrast: i,
      name: a,
      allowedInitialsColors: l,
    }
  ) => {
    const c = s === 'initials' && typeof a == 'string' ? _p(a, l) : s,
      u = e.variantColorResolver({
        color: c || 'gray',
        theme: e,
        gradient: o,
        variant: r || 'light',
        autoContrast: i,
      });
    return {
      root: {
        '--avatar-size': J(t, 'avatar-size'),
        '--avatar-radius': n === void 0 ? void 0 : ce(n),
        '--avatar-bg': c || r ? u.background : void 0,
        '--avatar-color': c || r ? u.color : void 0,
        '--avatar-bd': c || r ? u.border : void 0,
      },
    };
  },
  vo = _e((e, t) => {
    const n = I('Avatar', Pp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        src: c,
        alt: u,
        radius: d,
        color: f,
        gradient: p,
        imageProps: g,
        children: v,
        autoContrast: y,
        mod: w,
        name: S,
        allowedInitialsColors: x,
        ...C
      } = n,
      R = xp(),
      [$, N] = m.useState(!c),
      E = Z({
        name: 'Avatar',
        props: n,
        classes: In,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Np,
      });
    return (
      m.useEffect(() => N(!c), [c]),
      h.jsx(D, {
        ...E('root'),
        mod: [{ 'within-group': R.withinGroup }, w],
        ref: t,
        ...C,
        children: $
          ? h.jsx('span', {
              ...E('placeholder'),
              title: u,
              children: v || (typeof S == 'string' && Ep(S)) || h.jsx(Cp, {}),
            })
          : h.jsx('img', {
              ...g,
              ...E('image'),
              src: c,
              alt: u,
              onError: M => {
                var k;
                N(!0),
                  (k = g == null ? void 0 : g.onError) == null || k.call(g, M);
              },
            }),
      })
    );
  });
vo.classes = In;
vo.displayName = '@mantine/core/Avatar';
vo.Group = go;
var la = {
  root: 'm_347db0ec',
  'root--dot': 'm_fbd81e3d',
  label: 'm_5add502a',
  section: 'm_91fdda9b',
};
const Tp = {},
  Ap = (
    e,
    { radius: t, color: n, gradient: r, variant: o, size: s, autoContrast: i }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || 'filled',
      autoContrast: i,
    });
    return {
      root: {
        '--badge-height': J(s, 'badge-height'),
        '--badge-padding-x': J(s, 'badge-padding-x'),
        '--badge-fz': J(s, 'badge-fz'),
        '--badge-radius': t === void 0 ? void 0 : ce(t),
        '--badge-bg': n || o ? a.background : void 0,
        '--badge-color': n || o ? a.color : void 0,
        '--badge-bd': n || o ? a.border : void 0,
        '--badge-dot-color': o === 'dot' ? xe(n, e) : void 0,
      },
    };
  },
  ua = _e((e, t) => {
    const n = I('Badge', Tp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        radius: c,
        color: u,
        gradient: d,
        leftSection: f,
        rightSection: p,
        children: g,
        variant: v,
        fullWidth: y,
        autoContrast: w,
        circle: S,
        mod: x,
        ...C
      } = n,
      R = Z({
        name: 'Badge',
        props: n,
        classes: la,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Ap,
      });
    return h.jsxs(D, {
      variant: v,
      mod: [
        {
          block: y,
          circle: S,
          'with-right-section': !!p,
          'with-left-section': !!f,
        },
        x,
      ],
      ...R('root', { variant: v }),
      ref: t,
      ...C,
      children: [
        f &&
          h.jsx('span', {
            ...R('section'),
            'data-position': 'left',
            children: f,
          }),
        h.jsx('span', { ...R('label'), children: g }),
        p &&
          h.jsx('span', {
            ...R('section'),
            'data-position': 'right',
            children: p,
          }),
      ],
    });
  });
ua.classes = la;
ua.displayName = '@mantine/core/Badge';
var It = {
  root: 'm_77c9d27d',
  inner: 'm_80f1301b',
  label: 'm_811560b9',
  section: 'm_a74036a',
  loader: 'm_a25b86ee',
  group: 'm_80d6d844',
  groupSection: 'm_70be2a01',
};
const ds = { orientation: 'horizontal' },
  jp = (e, { borderWidth: t }) => ({
    group: { '--button-border-width': P(t) },
  }),
  yo = W((e, t) => {
    const n = I('ButtonGroup', ds, e),
      {
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        orientation: l,
        vars: c,
        borderWidth: u,
        variant: d,
        mod: f,
        ...p
      } = I('ButtonGroup', ds, e),
      g = Z({
        name: 'ButtonGroup',
        props: n,
        classes: It,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: c,
        varsResolver: jp,
        rootSelector: 'group',
      });
    return h.jsx(D, {
      ...g('group'),
      ref: t,
      variant: d,
      mod: [{ 'data-orientation': l }, f],
      role: 'group',
      ...p,
    });
  });
yo.classes = It;
yo.displayName = '@mantine/core/ButtonGroup';
const fs = {},
  kp = (
    e,
    { radius: t, color: n, gradient: r, variant: o, autoContrast: s, size: i }
  ) => {
    const a = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || 'filled',
      autoContrast: s,
    });
    return {
      groupSection: {
        '--section-height': J(i, 'section-height'),
        '--section-padding-x': J(i, 'section-padding-x'),
        '--section-fz':
          i != null && i.includes('compact')
            ? de(i.replace('compact-', ''))
            : de(i),
        '--section-radius': t === void 0 ? void 0 : ce(t),
        '--section-bg': n || o ? a.background : void 0,
        '--section-color': a.color,
        '--section-bd': n || o ? a.border : void 0,
      },
    };
  },
  bo = W((e, t) => {
    const n = I('ButtonGroupSection', fs, e),
      {
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: l,
        variant: c,
        gradient: u,
        radius: d,
        autoContrast: f,
        ...p
      } = I('ButtonGroupSection', fs, e),
      g = Z({
        name: 'ButtonGroupSection',
        props: n,
        classes: It,
        className: r,
        style: o,
        classNames: s,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: kp,
        rootSelector: 'groupSection',
      });
    return h.jsx(D, { ...g('groupSection'), ref: t, variant: c, ...p });
  });
bo.classes = It;
bo.displayName = '@mantine/core/ButtonGroupSection';
const Op = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${P(1)}))` },
    out: { opacity: 0, transform: 'translate(-50%, -200%)' },
    common: { transformOrigin: 'center' },
    transitionProperty: 'transform, opacity',
  },
  Ip = {},
  Mp = (
    e,
    {
      radius: t,
      color: n,
      gradient: r,
      variant: o,
      size: s,
      justify: i,
      autoContrast: a,
    }
  ) => {
    const l = e.variantColorResolver({
      color: n || e.primaryColor,
      theme: e,
      gradient: r,
      variant: o || 'filled',
      autoContrast: a,
    });
    return {
      root: {
        '--button-justify': i,
        '--button-height': J(s, 'button-height'),
        '--button-padding-x': J(s, 'button-padding-x'),
        '--button-fz':
          s != null && s.includes('compact')
            ? de(s.replace('compact-', ''))
            : de(s),
        '--button-radius': t === void 0 ? void 0 : ce(t),
        '--button-bg': n || o ? l.background : void 0,
        '--button-hover': n || o ? l.hover : void 0,
        '--button-color': l.color,
        '--button-bd': n || o ? l.border : void 0,
        '--button-hover-color': n || o ? l.hoverColor : void 0,
      },
    };
  },
  Mn = _e((e, t) => {
    const n = I('Button', Ip, e),
      {
        style: r,
        vars: o,
        className: s,
        color: i,
        disabled: a,
        children: l,
        leftSection: c,
        rightSection: u,
        fullWidth: d,
        variant: f,
        radius: p,
        loading: g,
        loaderProps: v,
        gradient: y,
        classNames: w,
        styles: S,
        unstyled: x,
        'data-disabled': C,
        autoContrast: R,
        mod: $,
        ...N
      } = n,
      E = Z({
        name: 'Button',
        props: n,
        classes: It,
        className: s,
        style: r,
        classNames: w,
        styles: S,
        unstyled: x,
        vars: o,
        varsResolver: Mp,
      }),
      M = !!c,
      k = !!u;
    return h.jsxs(bt, {
      ref: t,
      ...E('root', { active: !a && !g && !C }),
      unstyled: x,
      variant: f,
      disabled: a || g,
      mod: [
        {
          disabled: a || C,
          loading: g,
          block: d,
          'with-left-section': M,
          'with-right-section': k,
        },
        $,
      ],
      ...N,
      children: [
        h.jsx(ut, {
          mounted: !!g,
          transition: Op,
          duration: 150,
          children: Y =>
            h.jsx(D, {
              component: 'span',
              ...E('loader', { style: Y }),
              'aria-hidden': !0,
              children: h.jsx(at, {
                color: 'var(--button-color)',
                size: 'calc(var(--button-height) / 1.8)',
                ...v,
              }),
            }),
        }),
        h.jsxs('span', {
          ...E('inner'),
          children: [
            c &&
              h.jsx(D, {
                component: 'span',
                ...E('section'),
                mod: { position: 'left' },
                children: c,
              }),
            h.jsx(D, {
              component: 'span',
              mod: { loading: g },
              ...E('label'),
              children: l,
            }),
            u &&
              h.jsx(D, {
                component: 'span',
                ...E('section'),
                mod: { position: 'right' },
                children: u,
              }),
          ],
        }),
      ],
    });
  });
Mn.classes = It;
Mn.displayName = '@mantine/core/Button';
Mn.Group = yo;
Mn.GroupSection = bo;
var da = { root: 'm_4451eb3a' };
const Lp = {},
  fa = _e((e, t) => {
    const n = I('Center', Lp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        inline: c,
        mod: u,
        ...d
      } = n,
      f = Z({
        name: 'Center',
        props: n,
        classes: da,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
      });
    return h.jsx(D, { ref: t, mod: [{ inline: c }, u], ...f('root'), ...d });
  });
fa.classes = da;
fa.displayName = '@mantine/core/Center';
var pa = { root: 'm_3eebeb36', label: 'm_9e365f20' };
const Dp = { orientation: 'horizontal' },
  zp = (e, { color: t, variant: n, size: r }) => ({
    root: {
      '--divider-color': t ? xe(t, e) : void 0,
      '--divider-border-style': n,
      '--divider-size': J(r, 'divider-size'),
    },
  }),
  ma = W((e, t) => {
    const n = I('Divider', Dp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        color: c,
        orientation: u,
        label: d,
        labelPosition: f,
        mod: p,
        ...g
      } = n,
      v = Z({
        name: 'Divider',
        classes: pa,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: zp,
      });
    return h.jsx(D, {
      ref: t,
      mod: [{ orientation: u, 'with-label': !!d }, p],
      ...v('root'),
      ...g,
      role: 'separator',
      children:
        d &&
        h.jsx(D, {
          component: 'span',
          mod: { position: f },
          ...v('label'),
          children: d,
        }),
    });
  });
ma.classes = pa;
ma.displayName = '@mantine/core/Divider';
var ha = { root: 'm_9e117634' };
const Bp = {},
  Fp = (e, { radius: t, fit: n }) => ({
    root: {
      '--image-radius': t === void 0 ? void 0 : ce(t),
      '--image-object-fit': n,
    },
  }),
  ga = _e((e, t) => {
    const n = I('Image', Bp, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        onError: c,
        src: u,
        radius: d,
        fit: f,
        fallbackSrc: p,
        mod: g,
        ...v
      } = n,
      [y, w] = m.useState(!u);
    m.useEffect(() => w(!u), [u]);
    const S = Z({
      name: 'Image',
      classes: ha,
      props: n,
      className: o,
      style: s,
      classNames: r,
      styles: i,
      unstyled: a,
      vars: l,
      varsResolver: Fp,
    });
    return y && p
      ? h.jsx(D, {
          component: 'img',
          ref: t,
          src: p,
          ...S('root'),
          onError: c,
          mod: ['fallback', g],
          ...v,
        })
      : h.jsx(D, {
          component: 'img',
          ref: t,
          ...S('root'),
          src: u,
          onError: x => {
            c == null || c(x), w(!0);
          },
          mod: g,
          ...v,
        });
  });
ga.classes = ha;
ga.displayName = '@mantine/core/Image';
function Cr() {
  return (
    (Cr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cr.apply(null, arguments)
  );
}
function Hp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Wp = m.useLayoutEffect,
  Vp = function (t) {
    var n = mt.useRef(t);
    return (
      Wp(function () {
        n.current = t;
      }),
      n
    );
  },
  ps = function (t, n) {
    if (typeof t == 'function') {
      t(n);
      return;
    }
    t.current = n;
  },
  Yp = function (t, n) {
    var r = mt.useRef();
    return mt.useCallback(
      function (o) {
        (t.current = o),
          r.current && ps(r.current, null),
          (r.current = n),
          n && ps(n, o);
      },
      [n]
    );
  },
  ms = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0',
    display: 'block',
  },
  Gp = function (t) {
    Object.keys(ms).forEach(function (n) {
      t.style.setProperty(n, ms[n], 'important');
    });
  },
  hs = Gp,
  ye = null,
  gs = function (t, n) {
    var r = t.scrollHeight;
    return n.sizingStyle.boxSizing === 'border-box'
      ? r + n.borderSize
      : r - n.paddingSize;
  };
function Up(e, t, n, r) {
  n === void 0 && (n = 1),
    r === void 0 && (r = 1 / 0),
    ye ||
      ((ye = document.createElement('textarea')),
      ye.setAttribute('tabindex', '-1'),
      ye.setAttribute('aria-hidden', 'true'),
      hs(ye)),
    ye.parentNode === null && document.body.appendChild(ye);
  var o = e.paddingSize,
    s = e.borderSize,
    i = e.sizingStyle,
    a = i.boxSizing;
  Object.keys(i).forEach(function (f) {
    var p = f;
    ye.style[p] = i[p];
  }),
    hs(ye),
    (ye.value = t);
  var l = gs(ye, e);
  (ye.value = t), (l = gs(ye, e)), (ye.value = 'x');
  var c = ye.scrollHeight - o,
    u = c * n;
  a === 'border-box' && (u = u + o + s), (l = Math.max(u, l));
  var d = c * r;
  return a === 'border-box' && (d = d + o + s), (l = Math.min(d, l)), [l, c];
}
var vs = function () {},
  qp = function (t, n) {
    return t.reduce(function (r, o) {
      return (r[o] = n[o]), r;
    }, {});
  },
  Xp = [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'boxSizing',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'tabSize',
    'textIndent',
    'textRendering',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'scrollbarGutter',
  ],
  Zp = !!document.documentElement.currentStyle,
  Kp = function (t) {
    var n = window.getComputedStyle(t);
    if (n === null) return null;
    var r = qp(Xp, n),
      o = r.boxSizing;
    if (o === '') return null;
    Zp &&
      o === 'border-box' &&
      (r.width =
        parseFloat(r.width) +
        parseFloat(r.borderRightWidth) +
        parseFloat(r.borderLeftWidth) +
        parseFloat(r.paddingRight) +
        parseFloat(r.paddingLeft) +
        'px');
    var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
      i = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
    return { sizingStyle: r, paddingSize: s, borderSize: i };
  },
  Qp = Kp;
function xo(e, t, n) {
  var r = Vp(n);
  m.useLayoutEffect(function () {
    var o = function (i) {
      return r.current(i);
    };
    if (e)
      return (
        e.addEventListener(t, o),
        function () {
          return e.removeEventListener(t, o);
        }
      );
  }, []);
}
var Jp = function (t, n) {
    xo(document.body, 'reset', function (r) {
      t.current.form === r.target && n(r);
    });
  },
  em = function (t) {
    xo(window, 'resize', t);
  },
  tm = function (t) {
    xo(document.fonts, 'loadingdone', t);
  },
  nm = [
    'cacheMeasurements',
    'maxRows',
    'minRows',
    'onChange',
    'onHeightChange',
  ],
  rm = function (t, n) {
    var r = t.cacheMeasurements,
      o = t.maxRows,
      s = t.minRows,
      i = t.onChange,
      a = i === void 0 ? vs : i,
      l = t.onHeightChange,
      c = l === void 0 ? vs : l,
      u = Hp(t, nm),
      d = u.value !== void 0,
      f = m.useRef(null),
      p = Yp(f, n),
      g = m.useRef(0),
      v = m.useRef(),
      y = function () {
        var x = f.current,
          C = r && v.current ? v.current : Qp(x);
        if (C) {
          v.current = C;
          var R = Up(C, x.value || x.placeholder || 'x', s, o),
            $ = R[0],
            N = R[1];
          g.current !== $ &&
            ((g.current = $),
            x.style.setProperty('height', $ + 'px', 'important'),
            c($, { rowHeight: N }));
        }
      },
      w = function (x) {
        d || y(), a(x);
      };
    return (
      m.useLayoutEffect(y),
      Jp(f, function () {
        if (!d) {
          var S = f.current.value;
          requestAnimationFrame(function () {
            var x = f.current;
            x && S !== x.value && y();
          });
        }
      }),
      em(y),
      tm(y),
      m.createElement('textarea', Cr({}, u, { onChange: w, ref: p }))
    );
  },
  om = m.forwardRef(rm);
const sm = {},
  va = W((e, t) => {
    const {
        autosize: n,
        maxRows: r,
        minRows: o,
        __staticSelector: s,
        resize: i,
        ...a
      } = I('Textarea', sm, e),
      l = n && Kc() !== 'test',
      c = l ? { maxRows: r, minRows: o } : {};
    return h.jsx(tt, {
      component: l ? om : 'textarea',
      ref: t,
      ...a,
      __staticSelector: s || 'Textarea',
      multiline: !0,
      'data-no-overflow': (n && r === void 0) || void 0,
      __vars: { '--input-resize': i },
      ...c,
    });
  });
va.classes = tt.classes;
va.displayName = '@mantine/core/Textarea';
const [im, Mt] = ct('Modal component was not found in tree');
var nt = {
  root: 'm_9df02822',
  content: 'm_54c44539',
  inner: 'm_1f958f16',
  header: 'm_d0e2b9cd',
};
const am = {},
  Ln = W((e, t) => {
    const n = I('ModalBody', am, e),
      { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n,
      c = Mt();
    return h.jsx(Oi, {
      ref: t,
      ...c.getStyles('body', {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...l,
    });
  });
Ln.classes = nt;
Ln.displayName = '@mantine/core/ModalBody';
const cm = {},
  Dn = W((e, t) => {
    const n = I('ModalCloseButton', cm, e),
      { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n,
      c = Mt();
    return h.jsx(Ii, {
      ref: t,
      ...c.getStyles('close', {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...l,
    });
  });
Dn.classes = nt;
Dn.displayName = '@mantine/core/ModalCloseButton';
const lm = {},
  zn = W((e, t) => {
    const n = I('ModalContent', lm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        vars: a,
        children: l,
        __hidden: c,
        ...u
      } = n,
      d = Mt(),
      f = d.scrollAreaComponent || vf;
    return h.jsx(Mi, {
      ...d.getStyles('content', {
        className: o,
        style: s,
        styles: i,
        classNames: r,
      }),
      innerProps: d.getStyles('inner', {
        className: o,
        style: s,
        styles: i,
        classNames: r,
      }),
      'data-full-screen': d.fullScreen || void 0,
      'data-modal-content': !0,
      'data-hidden': c || void 0,
      ref: t,
      ...u,
      children: h.jsx(f, {
        style: {
          maxHeight: d.fullScreen
            ? '100dvh'
            : `calc(100dvh - (${P(d.yOffset)} * 2))`,
        },
        children: l,
      }),
    });
  });
zn.classes = nt;
zn.displayName = '@mantine/core/ModalContent';
const um = {},
  Bn = W((e, t) => {
    const n = I('ModalHeader', um, e),
      { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n,
      c = Mt();
    return h.jsx(Li, {
      ref: t,
      ...c.getStyles('header', {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...l,
    });
  });
Bn.classes = nt;
Bn.displayName = '@mantine/core/ModalHeader';
const dm = {},
  Fn = W((e, t) => {
    const n = I('ModalOverlay', dm, e),
      { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n,
      c = Mt();
    return h.jsx(Di, {
      ref: t,
      ...c.getStyles('overlay', {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...l,
    });
  });
Fn.classes = nt;
Fn.displayName = '@mantine/core/ModalOverlay';
const fm = {
    __staticSelector: 'Modal',
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: vt('modal'),
    transitionProps: { duration: 200, transition: 'fade-down' },
    yOffset: '5dvh',
  },
  pm = (e, { radius: t, size: n, yOffset: r, xOffset: o }) => ({
    root: {
      '--modal-radius': t === void 0 ? void 0 : ce(t),
      '--modal-size': J(n, 'modal-size'),
      '--modal-y-offset': P(r),
      '--modal-x-offset': P(o),
    },
  }),
  Hn = W((e, t) => {
    const n = I('ModalRoot', fm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        yOffset: c,
        scrollAreaComponent: u,
        radius: d,
        fullScreen: f,
        centered: p,
        xOffset: g,
        __staticSelector: v,
        ...y
      } = n,
      w = Z({
        name: v,
        classes: nt,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: pm,
      });
    return h.jsx(im, {
      value: {
        yOffset: c,
        scrollAreaComponent: u,
        getStyles: w,
        fullScreen: f,
      },
      children: h.jsx(ki, {
        ref: t,
        ...w('root'),
        'data-full-screen': f || void 0,
        'data-centered': p || void 0,
        unstyled: a,
        ...y,
      }),
    });
  });
Hn.classes = nt;
Hn.displayName = '@mantine/core/ModalRoot';
const [mm, hm] = bn();
function ya({ children: e }) {
  const [t, n] = m.useState([]),
    [r, o] = m.useState(vt('modal'));
  return h.jsx(mm, {
    value: {
      stack: t,
      addModal: (s, i) => {
        n(a => [...new Set([...a, s])]),
          o(a =>
            typeof i == 'number' && typeof a == 'number' ? Math.max(a, i) : a
          );
      },
      removeModal: s => n(i => i.filter(a => a !== s)),
      getZIndex: s => `calc(${r} + ${t.indexOf(s)} + 1)`,
      currentId: t[t.length - 1],
      maxZIndex: r,
    },
    children: e,
  });
}
ya.displayName = '@mantine/core/ModalStack';
const gm = {},
  Wn = W((e, t) => {
    const n = I('ModalTitle', gm, e),
      { classNames: r, className: o, style: s, styles: i, vars: a, ...l } = n,
      c = Mt();
    return h.jsx(zi, {
      ref: t,
      ...c.getStyles('title', {
        classNames: r,
        style: s,
        styles: i,
        className: o,
      }),
      ...l,
    });
  });
Wn.classes = nt;
Wn.displayName = '@mantine/core/ModalTitle';
const vm = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: vt('modal'),
    transitionProps: { duration: 200, transition: 'fade-down' },
    withOverlay: !0,
    withCloseButton: !0,
  },
  Ye = W((e, t) => {
    const {
        title: n,
        withOverlay: r,
        overlayProps: o,
        withCloseButton: s,
        closeButtonProps: i,
        children: a,
        radius: l,
        opened: c,
        stackId: u,
        zIndex: d,
        ...f
      } = I('Modal', vm, e),
      p = hm(),
      g = !!n || s,
      v =
        p && u
          ? {
              closeOnEscape: p.currentId === u,
              trapFocus: p.currentId === u,
              zIndex: p.getZIndex(u),
            }
          : {},
      y = r === !1 ? !1 : u && p ? p.currentId === u : c;
    return (
      m.useEffect(() => {
        p && u && (c ? p.addModal(u, d || vt('modal')) : p.removeModal(u));
      }, [c, u, d]),
      h.jsxs(Hn, {
        ref: t,
        radius: l,
        opened: c,
        zIndex: p && u ? p.getZIndex(u) : d,
        ...f,
        ...v,
        children: [
          r &&
            h.jsx(Fn, {
              visible: y,
              transitionProps: p && u ? { duration: 0 } : void 0,
              ...o,
            }),
          h.jsxs(zn, {
            radius: l,
            __hidden: p && u && c ? u !== p.currentId : !1,
            children: [
              g &&
                h.jsxs(Bn, {
                  children: [
                    n && h.jsx(Wn, { children: n }),
                    s && h.jsx(Dn, { ...i }),
                  ],
                }),
              h.jsx(Ln, { children: a }),
            ],
          }),
        ],
      })
    );
  });
Ye.classes = nt;
Ye.displayName = '@mantine/core/Modal';
Ye.Root = Hn;
Ye.Overlay = Fn;
Ye.Content = zn;
Ye.Body = Ln;
Ye.Header = Bn;
Ye.Title = Wn;
Ye.CloseButton = Dn;
Ye.Stack = ya;
var ba = {
  root: 'm_a513464',
  icon: 'm_a4ceffb',
  loader: 'm_b0920b15',
  body: 'm_a49ed24',
  title: 'm_3feedf16',
  description: 'm_3d733a3a',
  closeButton: 'm_919a4d88',
};
const ym = { withCloseButton: !0 },
  bm = (e, { radius: t, color: n }) => ({
    root: {
      '--notification-radius': t === void 0 ? void 0 : ce(t),
      '--notification-color': n ? xe(n, e) : void 0,
    },
  }),
  xa = W((e, t) => {
    const n = I('Notification', ym, e),
      {
        className: r,
        color: o,
        radius: s,
        loading: i,
        withCloseButton: a,
        withBorder: l,
        title: c,
        icon: u,
        children: d,
        onClose: f,
        closeButtonProps: p,
        classNames: g,
        style: v,
        styles: y,
        unstyled: w,
        variant: S,
        vars: x,
        mod: C,
        loaderProps: R,
        ...$
      } = n,
      N = Z({
        name: 'Notification',
        classes: ba,
        props: n,
        className: r,
        style: v,
        classNames: g,
        styles: y,
        unstyled: w,
        vars: x,
        varsResolver: bm,
      });
    return h.jsxs(D, {
      ...N('root'),
      mod: [{ 'data-with-icon': !!u || i, 'data-with-border': l }, C],
      ref: t,
      variant: S,
      ...$,
      role: 'alert',
      children: [
        u && !i && h.jsx('div', { ...N('icon'), children: u }),
        i && h.jsx(at, { size: 28, color: o, ...R, ...N('loader') }),
        h.jsxs('div', {
          ...N('body'),
          children: [
            c && h.jsx('div', { ...N('title'), children: c }),
            h.jsx(D, {
              ...N('description'),
              mod: { 'data-with-title': !!c },
              children: d,
            }),
          ],
        }),
        a &&
          h.jsx(Qt, {
            iconSize: 16,
            color: 'gray',
            ...p,
            unstyled: w,
            onClick: f,
            ...N('closeButton'),
          }),
      ],
    });
  });
xa.classes = ba;
xa.displayName = '@mantine/core/Notification';
const xm = ({ reveal: e }) =>
  h.jsx('svg', {
    viewBox: '0 0 15 15',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' },
    children: h.jsx('path', {
      d: e
        ? 'M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z'
        : 'M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }),
  });
var Rr = {
  root: 'm_f61ca620',
  input: 'm_ccf8da4c',
  innerInput: 'm_f2d85dd2',
  visibilityToggle: 'm_b1072d44',
};
const wm = { visibilityToggleIcon: xm },
  Sm = (e, { size: t }) => ({
    root: {
      '--psi-icon-size': J(t, 'psi-icon-size'),
      '--psi-button-size': J(t, 'psi-button-size'),
    },
  }),
  wa = W((e, t) => {
    const n = I('PasswordInput', wm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        required: c,
        error: u,
        leftSection: d,
        disabled: f,
        id: p,
        variant: g,
        inputContainer: v,
        description: y,
        label: w,
        size: S,
        errorProps: x,
        descriptionProps: C,
        labelProps: R,
        withAsterisk: $,
        inputWrapperOrder: N,
        wrapperProps: E,
        radius: M,
        rightSection: k,
        rightSectionWidth: Y,
        rightSectionPointerEvents: L,
        leftSectionWidth: z,
        visible: V,
        defaultVisible: G,
        onVisibilityChange: j,
        visibilityToggleIcon: H,
        visibilityToggleButtonProps: T,
        rightSectionProps: B,
        leftSectionProps: b,
        leftSectionPointerEvents: _,
        withErrorStyles: O,
        mod: A,
        ...U
      } = n,
      q = Ze(p),
      [F, te] = st({ value: V, defaultValue: G, finalValue: !1, onChange: j }),
      K = () => te(!F),
      ne = Z({
        name: 'PasswordInput',
        classes: Rr,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Sm,
      }),
      { resolvedClassNames: ve, resolvedStyles: Ee } = Cn({
        classNames: r,
        styles: i,
        props: n,
      }),
      { styleProps: Ge, rest: Le } = Ut(U),
      rt = H,
      ot = h.jsx(Kt, {
        ...ne('visibilityToggle'),
        disabled: f,
        radius: M,
        'aria-hidden': !T,
        tabIndex: -1,
        ...T,
        variant: (T == null ? void 0 : T.variant) ?? 'subtle',
        color: 'gray',
        unstyled: a,
        onTouchEnd: le => {
          var se;
          le.preventDefault(),
            (se = T == null ? void 0 : T.onTouchEnd) == null || se.call(T, le),
            K();
        },
        onMouseDown: le => {
          var se;
          le.preventDefault(),
            (se = T == null ? void 0 : T.onMouseDown) == null || se.call(T, le),
            K();
        },
        onKeyDown: le => {
          var se;
          (se = T == null ? void 0 : T.onKeyDown) == null || se.call(T, le),
            le.key === ' ' && (le.preventDefault(), K());
        },
        children: h.jsx(rt, { reveal: F }),
      });
    return h.jsx(oe.Wrapper, {
      required: c,
      id: q,
      label: w,
      error: u,
      description: y,
      size: S,
      classNames: ve,
      styles: Ee,
      __staticSelector: 'PasswordInput',
      errorProps: x,
      descriptionProps: C,
      unstyled: a,
      withAsterisk: $,
      inputWrapperOrder: N,
      inputContainer: v,
      variant: g,
      labelProps: { ...R, htmlFor: q },
      mod: A,
      ...ne('root'),
      ...Ge,
      ...E,
      children: h.jsx(oe, {
        component: 'div',
        error: u,
        leftSection: d,
        size: S,
        classNames: { ...ve, input: ge(Rr.input, ve.input) },
        styles: Ee,
        radius: M,
        disabled: f,
        __staticSelector: 'PasswordInput',
        rightSectionWidth: Y,
        rightSection: k ?? ot,
        variant: g,
        unstyled: a,
        leftSectionWidth: z,
        rightSectionPointerEvents: L || 'all',
        rightSectionProps: B,
        leftSectionProps: b,
        leftSectionPointerEvents: _,
        withAria: !1,
        withErrorStyles: O,
        children: h.jsx('input', {
          required: c,
          'data-invalid': !!u || void 0,
          'data-with-left-section': !!d || void 0,
          ...ne('innerInput'),
          disabled: f,
          id: q,
          ref: t,
          ...Le,
          autoComplete: Le.autoComplete || 'off',
          type: F ? 'text' : 'password',
        }),
      }),
    });
  });
wa.classes = { ...tt.classes, ...Rr };
wa.displayName = '@mantine/core/PasswordInput';
const [Cm, Sa] = ct('Rating was not found in tree');
function Ca(e) {
  const { width: t, height: n, style: r, ...o } = e;
  return h.jsx('svg', {
    viewBox: '0 0 24 24',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { width: t, height: n, ...r },
    ...o,
    children: h.jsx('path', {
      d: 'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
    }),
  });
}
Ca.displayName = '@mantine/core/StarIcon';
function $r({ type: e }) {
  const t = Sa();
  return h.jsx(Ca, {
    ...t.getStyles('starSymbol'),
    'data-filled': e === 'full' || void 0,
  });
}
$r.displayName = '@mantine/core/StarSymbol';
function Ra({
  getSymbolLabel: e,
  emptyIcon: t,
  fullIcon: n,
  full: r,
  active: o,
  value: s,
  readOnly: i,
  fractionValue: a,
  color: l,
  id: c,
  onBlur: u,
  onChange: d,
  onInputChange: f,
  style: p,
  ...g
}) {
  var x;
  const v = Sa(),
    y = typeof n == 'function' ? n(s) : n,
    w = typeof t == 'function' ? t(s) : t,
    { dir: S } = qt();
  return h.jsxs(h.Fragment, {
    children: [
      !i &&
        h.jsx('input', {
          ...v.getStyles('input'),
          onKeyDown: C => C.key === ' ' && d(s),
          id: c,
          type: 'radio',
          'data-active': o || void 0,
          'aria-label': e == null ? void 0 : e(s),
          value: s,
          onBlur: u,
          onChange: f,
          ...g,
        }),
      h.jsx(D, {
        component: i ? 'div' : 'label',
        ...v.getStyles('label'),
        'data-read-only': i || void 0,
        htmlFor: c,
        onClick: () => d(s),
        __vars: {
          '--rating-item-z-index':
            (x = a === 1 ? void 0 : o ? 2 : 0) == null ? void 0 : x.toString(),
        },
        children: h.jsx(D, {
          ...v.getStyles('symbolBody'),
          __vars: {
            '--rating-symbol-clip-path':
              a === 1
                ? void 0
                : S === 'ltr'
                  ? `inset(0 ${o ? 100 - a * 100 : 100}% 0 0)`
                  : `inset(0 0 0 ${o ? 100 - a * 100 : 100}% )`,
          },
          children: r
            ? y || h.jsx($r, { type: 'full' })
            : w || h.jsx($r, { type: 'empty' }),
        }),
      }),
    ],
  });
}
Ra.displayName = '@mantine/core/RatingItem';
var $a = {
  root: 'm_f8d312f2',
  symbolGroup: 'm_61734bb7',
  starSymbol: 'm_5662a89a',
  input: 'm_211007ba',
  label: 'm_21342ee4',
  symbolBody: 'm_fae05d6a',
};
function lr(e, t) {
  var o;
  const n = Math.round(e / t) * t,
    r = ((o = `${t}`.split('.')[1]) == null ? void 0 : o.length) || 0;
  return Number(n.toFixed(r));
}
const Rm = {
    size: 'sm',
    getSymbolLabel: e => `${e}`,
    count: 5,
    fractions: 1,
    color: 'yellow',
  },
  $m = (e, { size: t, color: n }) => ({
    root: { '--rating-size': J(t, 'rating-size'), '--rating-color': xe(n, e) },
  }),
  _a = W((e, t) => {
    const n = I('Rating', Rm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        name: c,
        id: u,
        value: d,
        defaultValue: f,
        onChange: p,
        fractions: g,
        count: v,
        onMouseEnter: y,
        readOnly: w,
        onMouseMove: S,
        onHover: x,
        onMouseLeave: C,
        onTouchStart: R,
        onTouchEnd: $,
        size: N,
        variant: E,
        getSymbolLabel: M,
        color: k,
        emptySymbol: Y,
        fullSymbol: L,
        highlightSelectedOnly: z,
        ...V
      } = n,
      G = Z({
        name: 'Rating',
        classes: $a,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: $m,
      }),
      { dir: j } = qt(),
      H = Ze(c),
      T = Ze(u),
      B = m.useRef(null),
      [b, _] = st({ value: d, defaultValue: f, finalValue: 0, onChange: p }),
      [O, A] = m.useState(-1),
      [U, q] = m.useState(!0),
      F = Math.floor(g),
      te = Math.floor(v),
      K = 1 / F,
      ne = lr(b, K),
      ve = O !== -1 ? O : ne,
      Ee = Q => {
        const {
            left: ie,
            right: Ne,
            width: ue,
          } = B.current.getBoundingClientRect(),
          Ce = ue / te,
          De = (j === 'rtl' ? Ne - Q : Q - ie) / Ce;
        return Ac(lr(De + K / 2, K), K, te);
      },
      Ge = Q => {
        y == null || y(Q), !w && q(!1);
      },
      Le = Q => {
        if ((S == null || S(Q), w)) return;
        const ie = Ee(Q.clientX);
        A(ie), ie !== O && (x == null || x(ie));
      },
      rt = Q => {
        C == null || C(Q),
          !w && (A(-1), q(!0), O !== -1 && (x == null || x(-1)));
      },
      ot = Q => {
        const { touches: ie } = Q;
        if (ie.length === 1) {
          if (!w) {
            const Ne = ie[0];
            _(Ee(Ne.clientX));
          }
          R == null || R(Q);
        }
      },
      le = Q => {
        Q.preventDefault(), $ == null || $(Q);
      },
      se = () => U && A(-1),
      Ue = Q => {
        w || A(typeof Q == 'number' ? Q : parseFloat(Q.target.value));
      },
      Pe = Q => {
        w || _(typeof Q == 'number' ? Q : parseFloat(Q.target.value));
      },
      re = Array(te)
        .fill(0)
        .map((Q, ie) => {
          const Ne = ie + 1,
            ue = Array.from(new Array(ie === 0 ? F + 1 : F)),
            Ce = !w && Math.ceil(O) === Ne;
          return h.jsx(
            'div',
            {
              'data-active': Ce || void 0,
              ...G('symbolGroup'),
              children: ue.map((qe, De) => {
                const ae = K * (ie === 0 ? De : De + 1),
                  fe = lr(Ne - 1 + ae, K);
                return h.jsx(
                  Ra,
                  {
                    getSymbolLabel: M,
                    emptyIcon: Y,
                    fullIcon: L,
                    full: z ? fe === ve : fe <= ve,
                    active: fe === ve,
                    checked: fe === ne,
                    readOnly: w,
                    fractionValue: ae,
                    value: fe,
                    name: H,
                    onChange: Pe,
                    onBlur: se,
                    onInputChange: Ue,
                    id: `${T}-${ie}-${De}`,
                  },
                  `${Ne}-${fe}`
                );
              }),
            },
            Ne
          );
        });
    return h.jsx(Cm, {
      value: { getStyles: G },
      children: h.jsx(D, {
        ref: $e(B, t),
        ...G('root'),
        onMouseMove: Le,
        onMouseEnter: Ge,
        onMouseLeave: rt,
        onTouchStart: ot,
        onTouchEnd: le,
        variant: E,
        size: N,
        id: T,
        ...V,
        children: re,
      }),
    });
  });
_a.classes = $a;
_a.displayName = '@mantine/core/Rating';
const _m = {
    searchable: !1,
    withCheckIcon: !0,
    allowDeselect: !0,
    checkIconPosition: 'left',
  },
  Ea = W((e, t) => {
    const n = I('Select', _m, e),
      {
        classNames: r,
        styles: o,
        unstyled: s,
        vars: i,
        dropdownOpened: a,
        defaultDropdownOpened: l,
        onDropdownClose: c,
        onDropdownOpen: u,
        onFocus: d,
        onBlur: f,
        onClick: p,
        onChange: g,
        data: v,
        value: y,
        defaultValue: w,
        selectFirstOptionOnChange: S,
        onOptionSubmit: x,
        comboboxProps: C,
        readOnly: R,
        disabled: $,
        filter: N,
        limit: E,
        withScrollArea: M,
        maxDropdownHeight: k,
        size: Y,
        searchable: L,
        rightSection: z,
        checkIconPosition: V,
        withCheckIcon: G,
        nothingFoundMessage: j,
        name: H,
        form: T,
        searchValue: B,
        defaultSearchValue: b,
        onSearchChange: _,
        allowDeselect: O,
        error: A,
        rightSectionPointerEvents: U,
        id: q,
        clearable: F,
        clearButtonProps: te,
        hiddenInputProps: K,
        renderOption: ne,
        onClear: ve,
        autoComplete: Ee,
        scrollAreaProps: Ge,
        __defaultRightSection: Le,
        __clearSection: rt,
        __clearable: ot,
        chevronColor: le,
        ...se
      } = n,
      Ue = m.useMemo(() => Lf(v), [v]),
      Pe = m.useMemo(() => Vi(Ue), [Ue]),
      re = Ze(q),
      [Q, ie, Ne] = st({
        value: y,
        defaultValue: w,
        finalValue: null,
        onChange: g,
      }),
      ue = typeof Q == 'string' ? Pe[Q] : void 0,
      Ce = Xc(ue),
      [qe, De] = st({
        value: B,
        defaultValue: b,
        finalValue: ue ? ue.label : '',
        onChange: _,
      }),
      ae = Zi({
        opened: a,
        defaultOpened: l,
        onDropdownOpen: () => {
          u == null || u(),
            ae.updateSelectedOptionIndex('active', { scrollIntoView: !0 });
        },
        onDropdownClose: () => {
          c == null || c(), ae.resetSelectedOption();
        },
      }),
      fe = we => {
        De(we), ae.resetSelectedOption();
      },
      { resolvedClassNames: Lt, resolvedStyles: pe } = Cn({
        props: n,
        styles: o,
        classNames: r,
      });
    m.useEffect(() => {
      S && ae.selectFirstOption();
    }, [S, qe]),
      m.useEffect(() => {
        y === null && fe(''),
          typeof y == 'string' &&
            ue &&
            ((Ce == null ? void 0 : Ce.value) !== ue.value ||
              (Ce == null ? void 0 : Ce.label) !== ue.label) &&
            fe(ue.label);
      }, [y, ue]);
    const ka = h.jsx(ee.ClearButton, {
        ...te,
        onClear: () => {
          ie(null, null), fe(''), ve == null || ve();
        },
      }),
      Co = F && !!Q && !$ && !R;
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs(ee, {
          store: ae,
          __staticSelector: 'Select',
          classNames: Lt,
          styles: pe,
          unstyled: s,
          readOnly: R,
          onOptionSubmit: we => {
            x == null || x(we);
            const Xe = O && Pe[we].value === Q ? null : Pe[we],
              Yn = Xe ? Xe.value : null;
            Yn !== Q && ie(Yn, Xe),
              !Ne &&
                fe(
                  (typeof Yn == 'string' && (Xe == null ? void 0 : Xe.label)) ||
                    ''
                ),
              ae.closeDropdown();
          },
          size: Y,
          ...C,
          children: [
            h.jsx(ee.Target, {
              targetType: L ? 'input' : 'button',
              autoComplete: Ee,
              children: h.jsx(tt, {
                id: re,
                ref: t,
                __defaultRightSection: h.jsx(ee.Chevron, {
                  size: Y,
                  error: A,
                  unstyled: s,
                  color: le,
                }),
                __clearSection: ka,
                __clearable: Co,
                rightSection: z,
                rightSectionPointerEvents: U || (Co ? 'all' : 'none'),
                ...se,
                size: Y,
                __staticSelector: 'Select',
                disabled: $,
                readOnly: R || !L,
                value: qe,
                onChange: we => {
                  fe(we.currentTarget.value),
                    ae.openDropdown(),
                    S && ae.selectFirstOption();
                },
                onFocus: we => {
                  L && ae.openDropdown(), d == null || d(we);
                },
                onBlur: we => {
                  var Xe;
                  L && ae.closeDropdown(),
                    fe(
                      (Q != null &&
                        ((Xe = Pe[Q]) == null ? void 0 : Xe.label)) ||
                        ''
                    ),
                    f == null || f(we);
                },
                onClick: we => {
                  L ? ae.openDropdown() : ae.toggleDropdown(),
                    p == null || p(we);
                },
                classNames: Lt,
                styles: pe,
                unstyled: s,
                pointer: !L,
                error: A,
              }),
            }),
            h.jsx(yp, {
              data: Ue,
              hidden: R || $,
              filter: N,
              search: qe,
              limit: E,
              hiddenWhenEmpty: !j,
              withScrollArea: M,
              maxDropdownHeight: k,
              filterOptions: L && (ue == null ? void 0 : ue.label) !== qe,
              value: Q,
              checkIconPosition: V,
              withCheckIcon: G,
              nothingFoundMessage: j,
              unstyled: s,
              labelId: se.label ? `${re}-label` : void 0,
              'aria-label': se.label ? void 0 : se['aria-label'],
              renderOption: ne,
              scrollAreaProps: Ge,
            }),
          ],
        }),
        h.jsx(ee.HiddenInput, {
          value: Q,
          name: H,
          form: T,
          disabled: $,
          ...K,
        }),
      ],
    });
  });
Ea.classes = { ...tt.classes, ...ee.classes };
Ea.displayName = '@mantine/core/Select';
var Pa = { root: 'm_6d731127' };
const Em = { gap: 'md', align: 'stretch', justify: 'flex-start' },
  Pm = (e, { gap: t, align: n, justify: r }) => ({
    root: { '--stack-gap': ht(t), '--stack-align': n, '--stack-justify': r },
  }),
  Na = W((e, t) => {
    const n = I('Stack', Em, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        align: c,
        justify: u,
        gap: d,
        variant: f,
        ...p
      } = n,
      g = Z({
        name: 'Stack',
        props: n,
        classes: Pa,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: Pm,
      });
    return h.jsx(D, { ref: t, ...g('root'), variant: f, ...p });
  });
Na.classes = Pa;
Na.displayName = '@mantine/core/Stack';
const [Nm, Tm] = ct('Stepper component was not found in tree'),
  vn = () => null;
vn.displayName = '@mantine/core/StepperCompleted';
var wo = {
  root: 'm_cbb4ea7e',
  steps: 'm_aaf89d0b',
  separator: 'm_2a371ac9',
  content: 'm_78da155d',
  step: 'm_cbb57068',
  'step--horizontal': 'm_f56b1e2c',
  'step--vertical': 'm_833edb7e',
  verticalSeparator: 'm_6496b3f3',
  stepWrapper: 'm_818e70b',
  stepIcon: 'm_1959ad01',
  stepCompletedIcon: 'm_a79331dc',
  stepBody: 'm_1956aa2a',
  stepLabel: 'm_12051f6c',
  stepDescription: 'm_164eea74',
};
const cn = (e, t) => (typeof e == 'function' ? h.jsx(e, { step: t || 0 }) : e),
  Am = { withIcon: !0, allowStepClick: !0, iconPosition: 'left' },
  So = W((e, t) => {
    const {
        classNames: n,
        className: r,
        style: o,
        styles: s,
        vars: i,
        step: a,
        state: l,
        color: c,
        icon: u,
        completedIcon: d,
        progressIcon: f,
        label: p,
        description: g,
        withIcon: v,
        iconSize: y,
        loading: w,
        allowStepClick: S,
        allowStepSelect: x,
        iconPosition: C,
        orientation: R,
        mod: $,
        ...N
      } = I('StepperStep', Am, e),
      E = Tm(),
      M = Je(),
      k = { classNames: n, styles: s },
      Y = l === 'stepCompleted' ? null : l === 'stepProgress' ? f : u,
      L = {
        'data-progress': l === 'stepProgress' || void 0,
        'data-completed': l === 'stepCompleted' || void 0,
      };
    return h.jsxs(bt, {
      ...E.getStyles('step', {
        className: r,
        style: o,
        variant: E.orientation,
        ...k,
      }),
      mod: [{ 'icon-position': C || E.iconPosition, 'allow-click': S }, $],
      ref: t,
      ...L,
      ...N,
      __vars: { '--step-color': c ? xe(c, M) : void 0 },
      tabIndex: S ? 0 : -1,
      children: [
        v &&
          h.jsxs('span', {
            ...E.getStyles('stepWrapper', k),
            children: [
              h.jsxs('span', {
                ...E.getStyles('stepIcon', k),
                ...L,
                children: [
                  h.jsx(ut, {
                    mounted: l === 'stepCompleted',
                    transition: 'pop',
                    duration: 200,
                    children: z =>
                      h.jsx('span', {
                        ...E.getStyles('stepCompletedIcon', { style: z, ...k }),
                        children: w
                          ? h.jsx(at, {
                              color: 'var(--mantine-color-white)',
                              size: 'calc(var(--stepper-icon-size) / 2)',
                              ...E.getStyles('stepLoader', k),
                            })
                          : cn(d, a) || h.jsx(mo, { size: '60%' }),
                      }),
                  }),
                  l !== 'stepCompleted'
                    ? w
                      ? h.jsx(at, {
                          ...E.getStyles('stepLoader', k),
                          size: 'calc(var(--stepper-icon-size) / 2)',
                          color: c,
                        })
                      : cn(Y || u, a)
                    : null,
                ],
              }),
              R === 'vertical' &&
                h.jsx('span', {
                  ...E.getStyles('verticalSeparator', k),
                  'data-active': l === 'stepCompleted' || void 0,
                }),
            ],
          }),
        (p || g) &&
          h.jsxs('span', {
            ...E.getStyles('stepBody', k),
            'data-orientation': E.orientation,
            'data-icon-position': C || E.iconPosition,
            children: [
              p &&
                h.jsx('span', {
                  ...E.getStyles('stepLabel', k),
                  children: cn(p, a),
                }),
              g &&
                h.jsx('span', {
                  ...E.getStyles('stepDescription', k),
                  children: cn(g, a),
                }),
            ],
          }),
      ],
    });
  });
So.classes = wo;
So.displayName = '@mantine/core/StepperStep';
const jm = {
    orientation: 'horizontal',
    iconPosition: 'left',
    allowNextStepsSelect: !0,
    wrap: !0,
  },
  km = (
    e,
    {
      color: t,
      iconSize: n,
      size: r,
      contentPadding: o,
      radius: s,
      autoContrast: i,
    }
  ) => ({
    root: {
      '--stepper-color': t ? xe(t, e) : void 0,
      '--stepper-icon-color': Or(i, e)
        ? Sn({ color: t, theme: e, autoContrast: i })
        : void 0,
      '--stepper-icon-size': n === void 0 ? J(r, 'stepper-icon-size') : P(n),
      '--stepper-content-padding': ht(o),
      '--stepper-radius': s === void 0 ? void 0 : ce(s),
      '--stepper-fz': de(r),
      '--stepper-spacing': ht(r),
    },
  }),
  Vn = W((e, t) => {
    var T, B, b;
    const n = I('Stepper', jm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        vars: l,
        children: c,
        onStepClick: u,
        active: d,
        icon: f,
        completedIcon: p,
        progressIcon: g,
        color: v,
        iconSize: y,
        contentPadding: w,
        orientation: S,
        iconPosition: x,
        size: C,
        radius: R,
        allowNextStepsSelect: $,
        wrap: N,
        autoContrast: E,
        ...M
      } = n,
      k = Z({
        name: 'Stepper',
        classes: wo,
        props: n,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: l,
        varsResolver: km,
      }),
      Y = m.Children.toArray(c),
      L = Y.filter(_ => _.type !== vn),
      z = Y.find(_ => _.type === vn),
      V = L.reduce((_, O, A) => {
        const U =
            d === A ? 'stepProgress' : d > A ? 'stepCompleted' : 'stepInactive',
          F =
            typeof u != 'function'
              ? !1
              : typeof O.props.allowStepSelect == 'boolean'
                ? O.props.allowStepSelect
                : U === 'stepCompleted' || $;
        return (
          _.push(
            m.cloneElement(O, {
              icon: O.props.icon || f || A + 1,
              key: A,
              step: A,
              state: U,
              onClick: () => F && (u == null ? void 0 : u(A)),
              allowStepClick: F,
              completedIcon: O.props.completedIcon || p,
              progressIcon: O.props.progressIcon || g,
              color: O.props.color || v,
              iconSize: y,
              iconPosition: O.props.iconPosition || x,
              orientation: S,
            })
          ),
          S === 'horizontal' &&
            A !== L.length - 1 &&
            _.push(
              m.createElement('div', {
                ...k('separator'),
                'data-active': A < d || void 0,
                'data-orientation': S,
                key: `separator-${A}`,
              })
            ),
          _
        );
      }, []),
      G =
        (B = (T = L[d]) == null ? void 0 : T.props) == null
          ? void 0
          : B.children,
      j = (b = z == null ? void 0 : z.props) == null ? void 0 : b.children,
      H = d > L.length - 1 ? j : G;
    return h.jsx(Nm, {
      value: { getStyles: k, orientation: S, iconPosition: x },
      children: h.jsxs(D, {
        ...k('root'),
        ref: t,
        size: C,
        ...M,
        children: [
          h.jsx(D, {
            ...k('steps'),
            mod: {
              orientation: S,
              'icon-position': x,
              wrap: N && S !== 'vertical',
            },
            children: V,
          }),
          H && h.jsx('div', { ...k('content'), children: H }),
        ],
      }),
    });
  });
Vn.classes = wo;
Vn.displayName = '@mantine/core/Stepper';
Vn.Completed = vn;
Vn.Step = So;
const Om = {},
  Ta = W((e, t) => {
    const n = I('TextInput', Om, e);
    return h.jsx(tt, {
      component: 'input',
      ref: t,
      ...n,
      __staticSelector: 'TextInput',
    });
  });
Ta.classes = tt.classes;
Ta.displayName = '@mantine/core/TextInput';
const Im = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  Mm = ['xs', 'sm', 'md', 'lg', 'xl'];
function Lm(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return Im.includes(n)
    ? {
        fontSize: `var(--mantine-${n}-font-size)`,
        fontWeight: `var(--mantine-${n}-font-weight)`,
        lineHeight: `var(--mantine-${n}-line-height)`,
      }
    : Mm.includes(n)
      ? {
          fontSize: `var(--mantine-font-size-${n})`,
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`,
        }
      : {
          fontSize: P(n),
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`,
        };
}
var Aa = { root: 'm_8a5d1357' };
const Dm = { order: 1 },
  zm = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
    const s = Lm(t, n);
    return {
      root: {
        '--title-fw': s.fontWeight,
        '--title-lh': s.lineHeight,
        '--title-fz': s.fontSize,
        '--title-line-clamp': typeof r == 'number' ? r.toString() : void 0,
        '--title-text-wrap': o,
      },
    };
  },
  ja = W((e, t) => {
    const n = I('Title', Dm, e),
      {
        classNames: r,
        className: o,
        style: s,
        styles: i,
        unstyled: a,
        order: l,
        vars: c,
        size: u,
        variant: d,
        lineClamp: f,
        textWrap: p,
        mod: g,
        ...v
      } = n,
      y = Z({
        name: 'Title',
        props: n,
        classes: Aa,
        className: o,
        style: s,
        classNames: r,
        styles: i,
        unstyled: a,
        vars: c,
        varsResolver: zm,
      });
    return [1, 2, 3, 4, 5, 6].includes(l)
      ? h.jsx(D, {
          ...y('root'),
          component: `h${l}`,
          variant: d,
          ref: t,
          mod: [{ order: l, 'data-line-clamp': typeof f == 'number' }, g],
          size: u,
          ...v,
        })
      : null;
  });
ja.classes = Aa;
ja.displayName = '@mantine/core/Title';
export {
  ua as $,
  El as A,
  D as B,
  fa as C,
  ma as D,
  ct as E,
  Pr as F,
  ji as G,
  ht as H,
  Fm as I,
  Wl as J,
  Fe as K,
  at as L,
  Ye as M,
  xa as N,
  Tn as O,
  wa as P,
  Bm as Q,
  mt as R,
  Vn as S,
  ja as T,
  dr as U,
  au as V,
  qt as W,
  Ac as X,
  bt as Y,
  kf as Z,
  Hp as _,
  Ba as a,
  _a as a0,
  Na as a1,
  ga as a2,
  Kt as a3,
  vo as a4,
  xs as a5,
  m as b,
  jc as c,
  Fa as d,
  Cr as e,
  W as f,
  ys as g,
  vt as h,
  Je as i,
  h as j,
  Hm as k,
  Os as l,
  Z as m,
  Et as n,
  Es as o,
  Wm as p,
  P as q,
  bs as r,
  Mn as s,
  Ea as t,
  I as u,
  Ta as v,
  Xr as w,
  Hi as x,
  en as y,
  va as z,
};
