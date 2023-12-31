function ep(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Oc = { exports: {} },
  So = {},
  Dc = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for("react.element"),
  tp = Symbol.for("react.portal"),
  np = Symbol.for("react.fragment"),
  rp = Symbol.for("react.strict_mode"),
  ip = Symbol.for("react.profiler"),
  op = Symbol.for("react.provider"),
  lp = Symbol.for("react.context"),
  sp = Symbol.for("react.forward_ref"),
  ap = Symbol.for("react.suspense"),
  up = Symbol.for("react.memo"),
  cp = Symbol.for("react.lazy"),
  Ja = Symbol.iterator;
function dp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ja && e[Ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Uc = Object.assign,
  $c = {};
function Un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $c),
    (this.updater = n || Fc);
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Bc() {}
Bc.prototype = Un.prototype;
function Fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $c),
    (this.updater = n || Fc);
}
var Us = (Fs.prototype = new Bc());
Us.constructor = Fs;
Uc(Us, Un.prototype);
Us.isPureReactComponent = !0;
var Ka = Array.isArray,
  Vc = Object.prototype.hasOwnProperty,
  $s = { current: null },
  Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Vc.call(t, r) && !Hc.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Qr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: $s.current,
  };
}
function fp(e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function hp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ya = /\/+/g;
function Ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? hp("" + e.key)
    : t.toString(36);
}
function _i(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qr:
          case tp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Ko(l, 0) : r),
      Ka(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ya, "$&/") + "/"),
          _i(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bs(i) &&
            (i = fp(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ya, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Ka(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Ko(o, s);
      l += _i(o, t, n, a, i);
    }
  else if (((a = dp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Ko(o, s++)), (l += _i(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function oi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    _i(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function pp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Li = { transition: null },
  mp = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: $s,
  };
z.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Un;
z.Fragment = np;
z.Profiler = ip;
z.PureComponent = Fs;
z.StrictMode = rp;
z.Suspense = ap;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mp;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Uc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = $s.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Vc.call(t, a) &&
        !Hc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: op, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Wc;
z.createFactory = function (e) {
  var t = Wc.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: sp, render: e };
};
z.isValidElement = Bs;
z.lazy = function (e) {
  return { $$typeof: cp, _payload: { _status: -1, _result: e }, _init: pp };
};
z.memo = function (e, t) {
  return { $$typeof: up, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
z.useContext = function (e) {
  return he.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
z.useId = function () {
  return he.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return he.current.useRef(e);
};
z.useState = function (e) {
  return he.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return he.current.useTransition();
};
z.version = "18.2.0";
Dc.exports = z;
var S = Dc.exports;
const Gc = zc(S),
  gp = ep({ __proto__: null, default: Gc }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = S,
  yp = Symbol.for("react.element"),
  wp = Symbol.for("react.fragment"),
  kp = Object.prototype.hasOwnProperty,
  Sp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) kp.call(t, r) && !xp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: yp,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Sp.current,
  };
}
So.Fragment = wp;
So.jsx = Qc;
So.jsxs = Qc;
Oc.exports = So;
var v = Oc.exports,
  Il = {},
  qc = { exports: {} },
  Pe = {},
  Jc = { exports: {} },
  Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, A) {
    var M = I.length;
    I.push(A);
    e: for (; 0 < M; ) {
      var K = (M - 1) >>> 1,
        te = I[K];
      if (0 < i(te, A)) (I[K] = A), (I[M] = te), (M = K);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var A = I[0],
      M = I.pop();
    if (M !== A) {
      I[0] = M;
      e: for (var K = 0, te = I.length, ri = te >>> 1; K < ri; ) {
        var $t = 2 * (K + 1) - 1,
          Jo = I[$t],
          Bt = $t + 1,
          ii = I[Bt];
        if (0 > i(Jo, M))
          Bt < te && 0 > i(ii, Jo)
            ? ((I[K] = ii), (I[Bt] = M), (K = Bt))
            : ((I[K] = Jo), (I[$t] = M), (K = $t));
        else if (Bt < te && 0 > i(ii, M)) (I[K] = ii), (I[Bt] = M), (K = Bt);
        else break e;
      }
    }
    return A;
  }
  function i(I, A) {
    var M = I.sortIndex - A.sortIndex;
    return M !== 0 ? M : I.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    h = 1,
    d = null,
    p = 3,
    g = !1,
    y = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(I) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= I)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function k(I) {
    if (((w = !1), m(I), !y))
      if (n(a) !== null) (y = !0), Qo(E);
      else {
        var A = n(u);
        A !== null && qo(k, A.startTime - I);
      }
  }
  function E(I, A) {
    (y = !1), w && ((w = !1), f(N), (N = -1)), (g = !0);
    var M = p;
    try {
      for (
        m(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (I && !H()));

      ) {
        var K = d.callback;
        if (typeof K == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var te = K(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(a) && r(a),
            m(A);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var ri = !0;
      else {
        var $t = n(u);
        $t !== null && qo(k, $t.startTime - A), (ri = !1);
      }
      return ri;
    } finally {
      (d = null), (p = M), (g = !1);
    }
  }
  var _ = !1,
    L = null,
    N = -1,
    O = 5,
    R = -1;
  function H() {
    return !(e.unstable_now() - R < O);
  }
  function Le() {
    if (L !== null) {
      var I = e.unstable_now();
      R = I;
      var A = !0;
      try {
        A = L(!0, I);
      } finally {
        A ? Te() : ((_ = !1), (L = null));
      }
    } else _ = !1;
  }
  var Te;
  if (typeof c == "function")
    Te = function () {
      c(Le);
    };
  else if (typeof MessageChannel < "u") {
    var ni = new MessageChannel(),
      Zh = ni.port2;
    (ni.port1.onmessage = Le),
      (Te = function () {
        Zh.postMessage(null);
      });
  } else
    Te = function () {
      C(Le, 0);
    };
  function Qo(I) {
    (L = I), _ || ((_ = !0), Te());
  }
  function qo(I, A) {
    N = C(function () {
      I(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Qo(E));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (I) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var M = p;
      p = A;
      try {
        return I();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, A) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var M = p;
      p = I;
      try {
        return A();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, A, M) {
      var K = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? K + M : K))
          : (M = K),
        I)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = M + te),
        (I = {
          id: h++,
          callback: A,
          priorityLevel: I,
          startTime: M,
          expirationTime: te,
          sortIndex: -1,
        }),
        M > K
          ? ((I.sortIndex = M),
            t(u, I),
            n(a) === null &&
              I === n(u) &&
              (w ? (f(N), (N = -1)) : (w = !0), qo(k, M - K)))
          : ((I.sortIndex = te), t(a, I), y || g || ((y = !0), Qo(E))),
        I
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (I) {
      var A = p;
      return function () {
        var M = p;
        p = A;
        try {
          return I.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(Kc);
Jc.exports = Kc;
var Cp = Jc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc = S,
  Ee = Cp;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bc = new Set(),
  kr = {};
function rn(e, t) {
  jn(e, t), jn(e + "Capture", t);
}
function jn(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) bc.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nl = Object.prototype.hasOwnProperty,
  Ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ba = {},
  Xa = {};
function Pp(e) {
  return Nl.call(Xa, e)
    ? !0
    : Nl.call(ba, e)
    ? !1
    : Ep.test(e)
    ? (Xa[e] = !0)
    : ((ba[e] = !0), !1);
}
function _p(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lp(e, t, n, r) {
  if (t === null || typeof t > "u" || _p(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vs = /[\-:]([a-z])/g;
function Hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vs, Hs);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vs, Hs);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vs, Hs);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ws(e, t, n, r) {
  var i = le.hasOwnProperty(t) ? le[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lp(t, n, i, r) && (n = null),
    r || i === null
      ? Pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  li = Symbol.for("react.element"),
  dn = Symbol.for("react.portal"),
  fn = Symbol.for("react.fragment"),
  Gs = Symbol.for("react.strict_mode"),
  jl = Symbol.for("react.profiler"),
  Xc = Symbol.for("react.provider"),
  Zc = Symbol.for("react.context"),
  Qs = Symbol.for("react.forward_ref"),
  Rl = Symbol.for("react.suspense"),
  Al = Symbol.for("react.suspense_list"),
  qs = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  ed = Symbol.for("react.offscreen"),
  Za = Symbol.iterator;
function Gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Za && e[Za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Yo;
function nr(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yo = (t && t[1]) || "";
    }
  return (
    `
` +
    Yo +
    e
  );
}
var bo = !1;
function Xo(e, t) {
  if (!e || bo) return "";
  bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (bo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? nr(e) : "";
}
function Tp(e) {
  switch (e.tag) {
    case 5:
      return nr(e.type);
    case 16:
      return nr("Lazy");
    case 13:
      return nr("Suspense");
    case 19:
      return nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e;
    case 11:
      return (e = Xo(e.type.render, !1)), e;
    case 1:
      return (e = Xo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fn:
      return "Fragment";
    case dn:
      return "Portal";
    case jl:
      return "Profiler";
    case Gs:
      return "StrictMode";
    case Rl:
      return "Suspense";
    case Al:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zc:
        return (e.displayName || "Context") + ".Consumer";
      case Xc:
        return (e._context.displayName || "Context") + ".Provider";
      case Qs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qs:
        return (
          (t = e.displayName || null), t !== null ? t : Ml(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return Ml(e(t));
        } catch {}
    }
  return null;
}
function Ip(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ml(t);
    case 8:
      return t === Gs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Np(e) {
  var t = td(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function si(e) {
  e._valueTracker || (e._valueTracker = Np(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $i(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zl(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function eu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && Ws(e, "checked", t, !1);
}
function Ol(e, t) {
  rd(e, t);
  var n = Mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Dl(e, t, n) {
  (t !== "number" || $i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rr = Array.isArray;
function Cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (rr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function id(e, t) {
  var n = Mt(t.value),
    r = Mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ul(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? od(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ai,
  ld = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ai = ai || document.createElement("div"),
          ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jp = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function (e) {
  jp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
  });
});
function sd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = sd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Rp = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function $l(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Bl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vl = null;
function Js(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hl = null,
  En = null,
  Pn = null;
function iu(e) {
  if ((e = Kr(e))) {
    if (typeof Hl != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Hl(e.stateNode, e.type, t));
  }
}
function ud(e) {
  En ? (Pn ? Pn.push(e) : (Pn = [e])) : (En = e);
}
function cd() {
  if (En) {
    var e = En,
      t = Pn;
    if (((Pn = En = null), iu(e), t)) for (e = 0; e < t.length; e++) iu(t[e]);
  }
}
function dd(e, t) {
  return e(t);
}
function fd() {}
var Zo = !1;
function hd(e, t, n) {
  if (Zo) return e(t, n);
  Zo = !0;
  try {
    return dd(e, t, n);
  } finally {
    (Zo = !1), (En !== null || Pn !== null) && (fd(), cd());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var Wl = !1;
if (st)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        Wl = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    Wl = !1;
  }
function Ap(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var ar = !1,
  Bi = null,
  Vi = !1,
  Gl = null,
  Mp = {
    onError: function (e) {
      (ar = !0), (Bi = e);
    },
  };
function zp(e, t, n, r, i, o, l, s, a) {
  (ar = !1), (Bi = null), Ap.apply(Mp, arguments);
}
function Op(e, t, n, r, i, o, l, s, a) {
  if ((zp.apply(this, arguments), ar)) {
    if (ar) {
      var u = Bi;
      (ar = !1), (Bi = null);
    } else throw Error(x(198));
    Vi || ((Vi = !0), (Gl = u));
  }
}
function on(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
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
function ou(e) {
  if (on(e) !== e) throw Error(x(188));
}
function Dp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ou(i), e;
        if (o === r) return ou(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function md(e) {
  return (e = Dp(e)), e !== null ? gd(e) : null;
}
function gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vd = Ee.unstable_scheduleCallback,
  lu = Ee.unstable_cancelCallback,
  Fp = Ee.unstable_shouldYield,
  Up = Ee.unstable_requestPaint,
  Y = Ee.unstable_now,
  $p = Ee.unstable_getCurrentPriorityLevel,
  Ks = Ee.unstable_ImmediatePriority,
  yd = Ee.unstable_UserBlockingPriority,
  Hi = Ee.unstable_NormalPriority,
  Bp = Ee.unstable_LowPriority,
  wd = Ee.unstable_IdlePriority,
  xo = null,
  Ze = null;
function Vp(e) {
  if (Ze && typeof Ze.onCommitFiberRoot == "function")
    try {
      Ze.onCommitFiberRoot(xo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Gp,
  Hp = Math.log,
  Wp = Math.LN2;
function Gp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hp(e) / Wp) | 0)) | 0;
}
var ui = 64,
  ci = 4194304;
function ir(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = ir(s)) : ((o &= l), o !== 0 && (r = ir(o)));
  } else (l = n & ~i), l !== 0 ? (r = ir(l)) : o !== 0 && (r = ir(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Qp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ge(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = Qp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function kd() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function el(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function Jp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ge(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ys(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function Sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xd,
  bs,
  Cd,
  Ed,
  Pd,
  ql = !1,
  di = [],
  Et = null,
  Pt = null,
  _t = null,
  Cr = new Map(),
  Er = new Map(),
  vt = [],
  Kp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      Cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Er.delete(t.pointerId);
  }
}
function qn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Kr(t)), t !== null && bs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Yp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Et = qn(Et, e, t, n, r, i)), !0;
    case "dragenter":
      return (Pt = qn(Pt, e, t, n, r, i)), !0;
    case "mouseover":
      return (_t = qn(_t, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Cr.set(o, qn(Cr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Er.set(o, qn(Er.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function _d(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Pd(e.priority, function () {
              Cd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ti(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vl = r), n.target.dispatchEvent(r), (Vl = null);
    } else return (t = Kr(n)), t !== null && bs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function au(e, t, n) {
  Ti(e) && n.delete(t);
}
function bp() {
  (ql = !1),
    Et !== null && Ti(Et) && (Et = null),
    Pt !== null && Ti(Pt) && (Pt = null),
    _t !== null && Ti(_t) && (_t = null),
    Cr.forEach(au),
    Er.forEach(au);
}
function Jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ql ||
      ((ql = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, bp)));
}
function Pr(e) {
  function t(i) {
    return Jn(i, e);
  }
  if (0 < di.length) {
    Jn(di[0], e);
    for (var n = 1; n < di.length; n++) {
      var r = di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && Jn(Et, e),
      Pt !== null && Jn(Pt, e),
      _t !== null && Jn(_t, e),
      Cr.forEach(t),
      Er.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    (r = vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null); )
    _d(n), n.blockedOn === null && vt.shift();
}
var _n = ft.ReactCurrentBatchConfig,
  Gi = !0;
function Xp(e, t, n, r) {
  var i = F,
    o = _n.transition;
  _n.transition = null;
  try {
    (F = 1), Xs(e, t, n, r);
  } finally {
    (F = i), (_n.transition = o);
  }
}
function Zp(e, t, n, r) {
  var i = F,
    o = _n.transition;
  _n.transition = null;
  try {
    (F = 4), Xs(e, t, n, r);
  } finally {
    (F = i), (_n.transition = o);
  }
}
function Xs(e, t, n, r) {
  if (Gi) {
    var i = Jl(e, t, n, r);
    if (i === null) cl(e, t, r, Qi, n), su(e, r);
    else if (Yp(i, e, t, n, r)) r.stopPropagation();
    else if ((su(e, r), t & 4 && -1 < Kp.indexOf(e))) {
      for (; i !== null; ) {
        var o = Kr(i);
        if (
          (o !== null && xd(o),
          (o = Jl(e, t, n, r)),
          o === null && cl(e, t, r, Qi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else cl(e, t, r, null, n);
  }
}
var Qi = null;
function Jl(e, t, n, r) {
  if (((Qi = null), (e = Js(r)), (e = Qt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qi = e), null;
}
function Ld(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($p()) {
        case Ks:
          return 1;
        case yd:
          return 4;
        case Hi:
        case Bp:
          return 16;
        case wd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Zs = null,
  Ii = null;
function Td() {
  if (Ii) return Ii;
  var e,
    t = Zs,
    n = t.length,
    r,
    i = "value" in wt ? wt.value : wt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fi() {
  return !0;
}
function uu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fi
        : uu),
      (this.isPropagationStopped = uu),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi));
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  );
}
var $n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ea = _e($n),
  Jr = q({}, $n, { view: 0, detail: 0 }),
  em = _e(Jr),
  tl,
  nl,
  Kn,
  Co = q({}, Jr, {
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
    getModifierState: ta,
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
      return "movementX" in e
        ? e.movementX
        : (e !== Kn &&
            (Kn && e.type === "mousemove"
              ? ((tl = e.screenX - Kn.screenX), (nl = e.screenY - Kn.screenY))
              : (nl = tl = 0),
            (Kn = e)),
          tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nl;
    },
  }),
  cu = _e(Co),
  tm = q({}, Co, { dataTransfer: 0 }),
  nm = _e(tm),
  rm = q({}, Jr, { relatedTarget: 0 }),
  rl = _e(rm),
  im = q({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = _e(im),
  lm = q({}, $n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sm = _e(lm),
  am = q({}, $n, { data: 0 }),
  du = _e(am),
  um = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
}
function ta() {
  return fm;
}
var hm = q({}, Jr, {
    key: function (e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ta,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pm = _e(hm),
  mm = q({}, Co, {
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
  fu = _e(mm),
  gm = q({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ta,
  }),
  vm = _e(gm),
  ym = q({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wm = _e(ym),
  km = q({}, Co, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sm = _e(km),
  xm = [9, 13, 27, 32],
  na = st && "CompositionEvent" in window,
  ur = null;
st && "documentMode" in document && (ur = document.documentMode);
var Cm = st && "TextEvent" in window && !ur,
  Id = st && (!na || (ur && 8 < ur && 11 >= ur)),
  hu = String.fromCharCode(32),
  pu = !1;
function Nd(e, t) {
  switch (e) {
    case "keyup":
      return xm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function jd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function Em(e, t) {
  switch (e) {
    case "compositionend":
      return jd(t);
    case "keypress":
      return t.which !== 32 ? null : ((pu = !0), hu);
    case "textInput":
      return (e = t.data), e === hu && pu ? null : e;
    default:
      return null;
  }
}
function Pm(e, t) {
  if (hn)
    return e === "compositionend" || (!na && Nd(e, t))
      ? ((e = Td()), (Ii = Zs = wt = null), (hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _m = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_m[e.type] : t === "textarea";
}
function Rd(e, t, n, r) {
  ud(r),
    (t = qi(t, "onChange")),
    0 < t.length &&
      ((n = new ea("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var cr = null,
  _r = null;
function Lm(e) {
  Hd(e, 0);
}
function Eo(e) {
  var t = gn(e);
  if (nd(t)) return e;
}
function Tm(e, t) {
  if (e === "change") return t;
}
var Ad = !1;
if (st) {
  var il;
  if (st) {
    var ol = "oninput" in document;
    if (!ol) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"),
        (ol = typeof gu.oninput == "function");
    }
    il = ol;
  } else il = !1;
  Ad = il && (!document.documentMode || 9 < document.documentMode);
}
function vu() {
  cr && (cr.detachEvent("onpropertychange", Md), (_r = cr = null));
}
function Md(e) {
  if (e.propertyName === "value" && Eo(_r)) {
    var t = [];
    Rd(t, _r, e, Js(e)), hd(Lm, t);
  }
}
function Im(e, t, n) {
  e === "focusin"
    ? (vu(), (cr = t), (_r = n), cr.attachEvent("onpropertychange", Md))
    : e === "focusout" && vu();
}
function Nm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Eo(_r);
}
function jm(e, t) {
  if (e === "click") return Eo(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change") return Eo(t);
}
function Am(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Am;
function Lr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Nl.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wu(e, t) {
  var n = yu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = yu(n);
  }
}
function zd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Od() {
  for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $i(e.document);
  }
  return t;
}
function ra(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mm(e) {
  var t = Od(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ra(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = wu(n, o));
        var l = wu(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zm = st && "documentMode" in document && 11 >= document.documentMode,
  pn = null,
  Kl = null,
  dr = null,
  Yl = !1;
function ku(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yl ||
    pn == null ||
    pn !== $i(r) ||
    ((r = pn),
    "selectionStart" in r && ra(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && Lr(dr, r)) ||
      ((dr = r),
      (r = qi(Kl, "onSelect")),
      0 < r.length &&
        ((t = new ea("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pn))));
}
function hi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var mn = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionend: hi("Transition", "TransitionEnd"),
  },
  ll = {},
  Dd = {};
st &&
  ((Dd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mn.animationend.animation,
    delete mn.animationiteration.animation,
    delete mn.animationstart.animation),
  "TransitionEvent" in window || delete mn.transitionend.transition);
function Po(e) {
  if (ll[e]) return ll[e];
  if (!mn[e]) return e;
  var t = mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dd) return (ll[e] = t[n]);
  return e;
}
var Fd = Po("animationend"),
  Ud = Po("animationiteration"),
  $d = Po("animationstart"),
  Bd = Po("transitionend"),
  Vd = new Map(),
  Su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ot(e, t) {
  Vd.set(e, t), rn(t, [e]);
}
for (var sl = 0; sl < Su.length; sl++) {
  var al = Su[sl],
    Om = al.toLowerCase(),
    Dm = al[0].toUpperCase() + al.slice(1);
  Ot(Om, "on" + Dm);
}
Ot(Fd, "onAnimationEnd");
Ot(Ud, "onAnimationIteration");
Ot($d, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Bd, "onTransitionEnd");
jn("onMouseEnter", ["mouseout", "mouseover"]);
jn("onMouseLeave", ["mouseout", "mouseover"]);
jn("onPointerEnter", ["pointerout", "pointerover"]);
jn("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fm = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function xu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Op(r, t, void 0, e), (e.currentTarget = null);
}
function Hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          xu(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          xu(i, s, u), (o = a);
        }
    }
  }
  if (Vi) throw ((e = Gl), (Vi = !1), (Gl = null), e);
}
function $(e, t) {
  var n = t[ts];
  n === void 0 && (n = t[ts] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wd(t, e, 2, !1), n.add(r));
}
function ul(e, t, n) {
  var r = 0;
  t && (r |= 4), Wd(n, e, r, t);
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[pi]) {
    (e[pi] = !0),
      bc.forEach(function (n) {
        n !== "selectionchange" && (Fm.has(n) || ul(n, !1, e), ul(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), ul("selectionchange", !1, t));
  }
}
function Wd(e, t, n, r) {
  switch (Ld(t)) {
    case 1:
      var i = Xp;
      break;
    case 4:
      i = Zp;
      break;
    default:
      i = Xs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Wl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function cl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Qt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  hd(function () {
    var u = o,
      h = Js(n),
      d = [];
    e: {
      var p = Vd.get(e);
      if (p !== void 0) {
        var g = ea,
          y = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = pm;
            break;
          case "focusin":
            (y = "focus"), (g = rl);
            break;
          case "focusout":
            (y = "blur"), (g = rl);
            break;
          case "beforeblur":
          case "afterblur":
            g = rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = cu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = vm;
            break;
          case Fd:
          case Ud:
          case $d:
            g = om;
            break;
          case Bd:
            g = wm;
            break;
          case "scroll":
            g = em;
            break;
          case "wheel":
            g = Sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = sm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = fu;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              f !== null && ((k = xr(c, f)), k != null && w.push(Ir(c, k, m)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((p = new g(p, y, null, n, h)), d.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Vl &&
            (y = n.relatedTarget || n.fromElement) &&
            (Qt(y) || y[at]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Qt(y) : null),
              y !== null &&
                ((C = on(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((w = cu),
            (k = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = fu),
              (k = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = g == null ? p : gn(g)),
            (m = y == null ? p : gn(y)),
            (p = new w(k, c + "leave", g, n, h)),
            (p.target = C),
            (p.relatedTarget = m),
            (k = null),
            Qt(h) === u &&
              ((w = new w(f, c + "enter", y, n, h)),
              (w.target = m),
              (w.relatedTarget = C),
              (k = w)),
            (C = k),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, m = w; m; m = an(m)) c++;
              for (m = 0, k = f; k; k = an(k)) m++;
              for (; 0 < c - m; ) (w = an(w)), c--;
              for (; 0 < m - c; ) (f = an(f)), m--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = an(w)), (f = an(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Cu(d, p, g, w, !1),
            y !== null && C !== null && Cu(d, C, y, w, !0);
        }
      }
      e: {
        if (
          ((p = u ? gn(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Tm;
        else if (mu(p))
          if (Ad) E = Rm;
          else {
            E = Nm;
            var _ = Im;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = jm);
        if (E && (E = E(e, u))) {
          Rd(d, E, n, h);
          break e;
        }
        _ && _(e, p, u),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            Dl(p, "number", p.value);
      }
      switch (((_ = u ? gn(u) : window), e)) {
        case "focusin":
          (mu(_) || _.contentEditable === "true") &&
            ((pn = _), (Kl = u), (dr = null));
          break;
        case "focusout":
          dr = Kl = pn = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), ku(d, n, h);
          break;
        case "selectionchange":
          if (zm) break;
        case "keydown":
        case "keyup":
          ku(d, n, h);
      }
      var L;
      if (na)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        hn
          ? Nd(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Id &&
          n.locale !== "ko" &&
          (hn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && hn && (L = Td())
            : ((wt = h),
              (Zs = "value" in wt ? wt.value : wt.textContent),
              (hn = !0))),
        (_ = qi(u, N)),
        0 < _.length &&
          ((N = new du(N, e, null, n, h)),
          d.push({ event: N, listeners: _ }),
          L ? (N.data = L) : ((L = jd(n)), L !== null && (N.data = L)))),
        (L = Cm ? Em(e, n) : Pm(e, n)) &&
          ((u = qi(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new du("onBeforeInput", "beforeinput", null, n, h)),
            d.push({ event: h, listeners: u }),
            (h.data = L)));
    }
    Hd(d, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = xr(e, n)),
      o != null && r.unshift(Ir(e, o, i)),
      (o = xr(e, t)),
      o != null && r.push(Ir(e, o, i))),
      (e = e.return);
  }
  return r;
}
function an(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cu(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = xr(n, o)), a != null && l.unshift(Ir(n, a, s)))
        : i || ((a = xr(n, o)), a != null && l.push(Ir(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Um = /\r\n?/g,
  $m = /\u0000|\uFFFD/g;
function Eu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Um,
      `
`
    )
    .replace($m, "");
}
function mi(e, t, n) {
  if (((t = Eu(t)), Eu(e) !== t && n)) throw Error(x(425));
}
function Ji() {}
var bl = null,
  Xl = null;
function Zl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var es = typeof setTimeout == "function" ? setTimeout : void 0,
  Bm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pu = typeof Promise == "function" ? Promise : void 0,
  Vm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pu < "u"
      ? function (e) {
          return Pu.resolve(null).then(e).catch(Hm);
        }
      : es;
function Hm(e) {
  setTimeout(function () {
    throw e;
  });
}
function dl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Pr(t);
}
function Lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bn = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + Bn,
  Nr = "__reactProps$" + Bn,
  at = "__reactContainer$" + Bn,
  ts = "__reactEvents$" + Bn,
  Wm = "__reactListeners$" + Bn,
  Gm = "__reactHandles$" + Bn;
function Qt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = _u(e); e !== null; ) {
          if ((n = e[Xe])) return n;
          e = _u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Kr(e) {
  return (
    (e = e[Xe] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function _o(e) {
  return e[Nr] || null;
}
var ns = [],
  vn = -1;
function Dt(e) {
  return { current: e };
}
function B(e) {
  0 > vn || ((e.current = ns[vn]), (ns[vn] = null), vn--);
}
function U(e, t) {
  vn++, (ns[vn] = e.current), (e.current = t);
}
var zt = {},
  ce = Dt(zt),
  ye = Dt(!1),
  bt = zt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Ki() {
  B(ye), B(ce);
}
function Lu(e, t, n) {
  if (ce.current !== zt) throw Error(x(168));
  U(ce, t), U(ye, n);
}
function Gd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Ip(e) || "Unknown", i));
  return q({}, n, r);
}
function Yi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (bt = ce.current),
    U(ce, e),
    U(ye, ye.current),
    !0
  );
}
function Tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Gd(e, t, bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ye),
      B(ce),
      U(ce, e))
    : B(ye),
    U(ye, n);
}
var rt = null,
  Lo = !1,
  fl = !1;
function Qd(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Qm(e) {
  (Lo = !0), Qd(e);
}
function Ft() {
  if (!fl && rt !== null) {
    fl = !0;
    var e = 0,
      t = F;
    try {
      var n = rt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (Lo = !1);
    } catch (i) {
      throw (rt !== null && (rt = rt.slice(e + 1)), vd(Ks, Ft), i);
    } finally {
      (F = t), (fl = !1);
    }
  }
  return null;
}
var yn = [],
  wn = 0,
  bi = null,
  Xi = 0,
  Ne = [],
  je = 0,
  Xt = null,
  it = 1,
  ot = "";
function Ht(e, t) {
  (yn[wn++] = Xi), (yn[wn++] = bi), (bi = e), (Xi = t);
}
function qd(e, t, n) {
  (Ne[je++] = it), (Ne[je++] = ot), (Ne[je++] = Xt), (Xt = e);
  var r = it;
  e = ot;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ge(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (it = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (ot = o + e);
  } else (it = (1 << o) | (n << i) | r), (ot = e);
}
function ia(e) {
  e.return !== null && (Ht(e, 1), qd(e, 1, 0));
}
function oa(e) {
  for (; e === bi; )
    (bi = yn[--wn]), (yn[wn] = null), (Xi = yn[--wn]), (yn[wn] = null);
  for (; e === Xt; )
    (Xt = Ne[--je]),
      (Ne[je] = null),
      (ot = Ne[--je]),
      (Ne[je] = null),
      (it = Ne[--je]),
      (Ne[je] = null);
}
var Ce = null,
  xe = null,
  V = !1,
  Ve = null;
function Jd(e, t) {
  var n = Me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (xe = Lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: it, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function rs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function is(e) {
  if (V) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (rs(e)) throw Error(x(418));
        t = Lt(n.nextSibling);
        var r = Ce;
        t && Iu(e, t)
          ? Jd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e));
      }
    } else {
      if (rs(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e);
    }
  }
}
function Nu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function gi(e) {
  if (e !== Ce) return !1;
  if (!V) return Nu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (rs(e)) throw (Kd(), Error(x(418)));
    for (; t; ) Jd(e, t), (t = Lt(t.nextSibling));
  }
  if ((Nu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ce ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function Kd() {
  for (var e = xe; e; ) e = Lt(e.nextSibling);
}
function An() {
  (xe = Ce = null), (V = !1);
}
function la(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var qm = ft.ReactCurrentBatchConfig;
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zi = Dt(null),
  eo = null,
  kn = null,
  sa = null;
function aa() {
  sa = kn = eo = null;
}
function ua(e) {
  var t = Zi.current;
  B(Zi), (e._currentValue = t);
}
function os(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ln(e, t) {
  (eo = e),
    (sa = kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (sa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kn === null)) {
      if (eo === null) throw Error(x(308));
      (kn = e), (eo.dependencies = { lanes: 0, firstContext: e });
    } else kn = kn.next = e;
  return t;
}
var qt = null;
function ca(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function Yd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ca(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ut(e, r)
  );
}
function ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ut(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ca(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ut(e, n)
  );
}
function ji(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ys(e, n);
  }
}
function ju(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function to(e, t, n, r) {
  var i = e.updateQueue;
  gt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = u) : (s.next = u),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = i.baseState;
    (l = 0), (h = u = a = null), (s = o);
    do {
      var p = s.lane,
        g = s.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((p = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(g, d, p);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (p = typeof y == "function" ? y.call(g, d, p) : y),
                p == null)
              )
                break e;
              d = q({}, d, p);
              break e;
            case 2:
              gt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((u = h = g), (a = d)) : (h = h.next = g),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (en |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Ru(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var Xd = new Yc.Component().refs;
function ls(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var To = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = Nt(e),
      o = lt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, i)),
      t !== null && (Qe(t, e, i, r), ji(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = Nt(e),
      o = lt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, i)),
      t !== null && (Qe(t, e, i, r), ji(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = Nt(e),
      i = lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Tt(e, i, r)),
      t !== null && (Qe(t, e, r, n), ji(t, e, r));
  },
};
function Au(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lr(n, r) || !Lr(i, o)
      : !0
  );
}
function Zd(e, t, n) {
  var r = !1,
    i = zt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = De(o))
      : ((i = we(t) ? bt : ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Rn(e, i) : zt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = To),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Mu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && To.enqueueReplaceState(t, t.state, null);
}
function ss(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Xd), da(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = De(o))
    : ((o = we(t) ? bt : ce.current), (i.context = Rn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ls(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && To.enqueueReplaceState(i, i.state, null),
      to(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Xd && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function zu(e) {
  var t = e._init;
  return t(e._payload);
}
function ef(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function i(f, c) {
    return (f = jt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, m, k) {
    return c === null || c.tag !== 6
      ? ((c = wl(m, f.mode, k)), (c.return = f), c)
      : ((c = i(c, m)), (c.return = f), c);
  }
  function a(f, c, m, k) {
    var E = m.type;
    return E === fn
      ? h(f, c, m.props.children, k, m.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === mt &&
            zu(E) === c.type))
      ? ((k = i(c, m.props)), (k.ref = Yn(f, c, m)), (k.return = f), k)
      : ((k = Di(m.type, m.key, m.props, null, f.mode, k)),
        (k.ref = Yn(f, c, m)),
        (k.return = f),
        k);
  }
  function u(f, c, m, k) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = kl(m, f.mode, k)), (c.return = f), c)
      : ((c = i(c, m.children || [])), (c.return = f), c);
  }
  function h(f, c, m, k, E) {
    return c === null || c.tag !== 7
      ? ((c = Yt(m, f.mode, k, E)), (c.return = f), c)
      : ((c = i(c, m)), (c.return = f), c);
  }
  function d(f, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = wl("" + c, f.mode, m)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case li:
          return (
            (m = Di(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = Yn(f, null, c)),
            (m.return = f),
            m
          );
        case dn:
          return (c = kl(c, f.mode, m)), (c.return = f), c;
        case mt:
          var k = c._init;
          return d(f, k(c._payload), m);
      }
      if (rr(c) || Gn(c))
        return (c = Yt(c, f.mode, m, null)), (c.return = f), c;
      vi(f, c);
    }
    return null;
  }
  function p(f, c, m, k) {
    var E = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return E !== null ? null : s(f, c, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case li:
          return m.key === E ? a(f, c, m, k) : null;
        case dn:
          return m.key === E ? u(f, c, m, k) : null;
        case mt:
          return (E = m._init), p(f, c, E(m._payload), k);
      }
      if (rr(m) || Gn(m)) return E !== null ? null : h(f, c, m, k, null);
      vi(f, m);
    }
    return null;
  }
  function g(f, c, m, k, E) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (f = f.get(m) || null), s(c, f, "" + k, E);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case li:
          return (f = f.get(k.key === null ? m : k.key) || null), a(c, f, k, E);
        case dn:
          return (f = f.get(k.key === null ? m : k.key) || null), u(c, f, k, E);
        case mt:
          var _ = k._init;
          return g(f, c, m, _(k._payload), E);
      }
      if (rr(k) || Gn(k)) return (f = f.get(m) || null), h(c, f, k, E, null);
      vi(c, k);
    }
    return null;
  }
  function y(f, c, m, k) {
    for (
      var E = null, _ = null, L = c, N = (c = 0), O = null;
      L !== null && N < m.length;
      N++
    ) {
      L.index > N ? ((O = L), (L = null)) : (O = L.sibling);
      var R = p(f, L, m[N], k);
      if (R === null) {
        L === null && (L = O);
        break;
      }
      e && L && R.alternate === null && t(f, L),
        (c = o(R, c, N)),
        _ === null ? (E = R) : (_.sibling = R),
        (_ = R),
        (L = O);
    }
    if (N === m.length) return n(f, L), V && Ht(f, N), E;
    if (L === null) {
      for (; N < m.length; N++)
        (L = d(f, m[N], k)),
          L !== null &&
            ((c = o(L, c, N)), _ === null ? (E = L) : (_.sibling = L), (_ = L));
      return V && Ht(f, N), E;
    }
    for (L = r(f, L); N < m.length; N++)
      (O = g(L, f, N, m[N], k)),
        O !== null &&
          (e && O.alternate !== null && L.delete(O.key === null ? N : O.key),
          (c = o(O, c, N)),
          _ === null ? (E = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        L.forEach(function (H) {
          return t(f, H);
        }),
      V && Ht(f, N),
      E
    );
  }
  function w(f, c, m, k) {
    var E = Gn(m);
    if (typeof E != "function") throw Error(x(150));
    if (((m = E.call(m)), m == null)) throw Error(x(151));
    for (
      var _ = (E = null), L = c, N = (c = 0), O = null, R = m.next();
      L !== null && !R.done;
      N++, R = m.next()
    ) {
      L.index > N ? ((O = L), (L = null)) : (O = L.sibling);
      var H = p(f, L, R.value, k);
      if (H === null) {
        L === null && (L = O);
        break;
      }
      e && L && H.alternate === null && t(f, L),
        (c = o(H, c, N)),
        _ === null ? (E = H) : (_.sibling = H),
        (_ = H),
        (L = O);
    }
    if (R.done) return n(f, L), V && Ht(f, N), E;
    if (L === null) {
      for (; !R.done; N++, R = m.next())
        (R = d(f, R.value, k)),
          R !== null &&
            ((c = o(R, c, N)), _ === null ? (E = R) : (_.sibling = R), (_ = R));
      return V && Ht(f, N), E;
    }
    for (L = r(f, L); !R.done; N++, R = m.next())
      (R = g(L, f, N, R.value, k)),
        R !== null &&
          (e && R.alternate !== null && L.delete(R.key === null ? N : R.key),
          (c = o(R, c, N)),
          _ === null ? (E = R) : (_.sibling = R),
          (_ = R));
    return (
      e &&
        L.forEach(function (Le) {
          return t(f, Le);
        }),
      V && Ht(f, N),
      E
    );
  }
  function C(f, c, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === fn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case li:
          e: {
            for (var E = m.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (((E = m.type), E === fn)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = i(_, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === mt &&
                    zu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = i(_, m.props)),
                    (c.ref = Yn(f, _, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            m.type === fn
              ? ((c = Yt(m.props.children, f.mode, k, m.key)),
                (c.return = f),
                (f = c))
              : ((k = Di(m.type, m.key, m.props, null, f.mode, k)),
                (k.ref = Yn(f, c, m)),
                (k.return = f),
                (f = k));
          }
          return l(f);
        case dn:
          e: {
            for (_ = m.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = i(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = kl(m, f.mode, k)), (c.return = f), (f = c);
          }
          return l(f);
        case mt:
          return (_ = m._init), C(f, c, _(m._payload), k);
      }
      if (rr(m)) return y(f, c, m, k);
      if (Gn(m)) return w(f, c, m, k);
      vi(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = i(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = wl(m, f.mode, k)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return C;
}
var Mn = ef(!0),
  tf = ef(!1),
  Yr = {},
  et = Dt(Yr),
  jr = Dt(Yr),
  Rr = Dt(Yr);
function Jt(e) {
  if (e === Yr) throw Error(x(174));
  return e;
}
function fa(e, t) {
  switch ((U(Rr, t), U(jr, e), U(et, Yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ul(t, e));
  }
  B(et), U(et, t);
}
function zn() {
  B(et), B(jr), B(Rr);
}
function nf(e) {
  Jt(Rr.current);
  var t = Jt(et.current),
    n = Ul(t, e.type);
  t !== n && (U(jr, e), U(et, n));
}
function ha(e) {
  jr.current === e && (B(et), B(jr));
}
var W = Dt(0);
function no(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var hl = [];
function pa() {
  for (var e = 0; e < hl.length; e++)
    hl[e]._workInProgressVersionPrimary = null;
  hl.length = 0;
}
var Ri = ft.ReactCurrentDispatcher,
  pl = ft.ReactCurrentBatchConfig,
  Zt = 0,
  Q = null,
  Z = null,
  ne = null,
  ro = !1,
  fr = !1,
  Ar = 0,
  Jm = 0;
function se() {
  throw Error(x(321));
}
function ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function ga(e, t, n, r, i, o) {
  if (
    ((Zt = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ri.current = e === null || e.memoizedState === null ? Xm : Zm),
    (e = n(r, i)),
    fr)
  ) {
    o = 0;
    do {
      if (((fr = !1), (Ar = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (Ri.current = eg),
        (e = n(r, i));
    } while (fr);
  }
  if (
    ((Ri.current = io),
    (t = Z !== null && Z.next !== null),
    (Zt = 0),
    (ne = Z = Q = null),
    (ro = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function va() {
  var e = Ar !== 0;
  return (Ar = 0), e;
}
function Ye() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Fe() {
  if (Z === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ne === null ? Q.memoizedState : ne.next;
  if (t !== null) (ne = t), (Z = e);
  else {
    if (e === null) throw Error(x(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = Z,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var h = u.lane;
      if ((Zt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = d), (l = r)) : (a = a.next = d),
          (Q.lanes |= h),
          (en |= h);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      qe(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (en |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gl(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    qe(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function rf() {}
function of(e, t) {
  var n = Q,
    r = Fe(),
    i = t(),
    o = !qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ve = !0)),
    (r = r.queue),
    ya(af.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, sf.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(x(349));
    Zt & 30 || lf(n, t, i);
  }
  return i;
}
function lf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), uf(t) && cf(e);
}
function af(e, t, n) {
  return n(function () {
    uf(t) && cf(e);
  });
}
function uf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function cf(e) {
  var t = ut(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function Ou(e) {
  var t = Ye();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bm.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function df() {
  return Fe().memoizedState;
}
function Ai(e, t, n, r) {
  var i = Ye();
  (Q.flags |= e),
    (i.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Io(e, t, n, r) {
  var i = Fe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Z !== null) {
    var l = Z.memoizedState;
    if (((o = l.destroy), r !== null && ma(r, l.deps))) {
      i.memoizedState = zr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = zr(1 | t, n, o, r));
}
function Du(e, t) {
  return Ai(8390656, 8, e, t);
}
function ya(e, t) {
  return Io(2048, 8, e, t);
}
function ff(e, t) {
  return Io(4, 2, e, t);
}
function hf(e, t) {
  return Io(4, 4, e, t);
}
function pf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Io(4, 4, pf.bind(null, t, e), n)
  );
}
function wa() {}
function gf(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vf(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yf(e, t, n) {
  return Zt & 21
    ? (qe(n, t) || ((n = kd()), (Q.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Km(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = pl.transition;
  pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (pl.transition = r);
  }
}
function wf() {
  return Fe().memoizedState;
}
function Ym(e, t, n) {
  var r = Nt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kf(e))
  )
    Sf(t, n);
  else if (((n = Yd(e, t, n, r)), n !== null)) {
    var i = fe();
    Qe(n, e, r, i), xf(n, t, r);
  }
}
function bm(e, t, n) {
  var r = Nt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kf(e)) Sf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), qe(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ca(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yd(e, t, i, r)),
      n !== null && ((i = fe()), Qe(n, e, r, i), xf(n, t, r));
  }
}
function kf(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Sf(e, t) {
  fr = ro = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function xf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ys(e, n);
  }
}
var io = {
    readContext: De,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Du,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ai(4194308, 4, pf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ai(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ai(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ye();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ye();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ym.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ou,
    useDebugValue: wa,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = Ou(!1),
        t = e[0];
      return (e = Km.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = Ye();
      if (V) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(x(349));
        Zt & 30 || lf(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Du(af.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        zr(9, sf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ye(),
        t = re.identifierPrefix;
      if (V) {
        var n = ot,
          r = it;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: De,
    useCallback: gf,
    useContext: De,
    useEffect: ya,
    useImperativeHandle: mf,
    useInsertionEffect: ff,
    useLayoutEffect: hf,
    useMemo: vf,
    useReducer: ml,
    useRef: df,
    useState: function () {
      return ml(Mr);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = Fe();
      return yf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(Mr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: of,
    useId: wf,
    unstable_isNewReconciler: !1,
  },
  eg = {
    readContext: De,
    useCallback: gf,
    useContext: De,
    useEffect: ya,
    useImperativeHandle: mf,
    useInsertionEffect: ff,
    useLayoutEffect: hf,
    useMemo: vf,
    useReducer: gl,
    useRef: df,
    useState: function () {
      return gl(Mr);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = Fe();
      return Z === null ? (t.memoizedState = e) : yf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = gl(Mr)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: of,
    useId: wf,
    unstable_isNewReconciler: !1,
  };
function On(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function vl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function as(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tg = typeof WeakMap == "function" ? WeakMap : Map;
function Cf(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      lo || ((lo = !0), (ys = r)), as(e, t);
    }),
    n
  );
}
function Ef(e, t, n) {
  (n = lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        as(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        as(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Fu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = mg.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $u(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lt(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ng = ft.ReactCurrentOwner,
  ve = !1;
function de(e, t, n, r) {
  t.child = e === null ? tf(t, null, n, r) : Mn(t, e.child, n, r);
}
function Bu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Ln(t, i),
    (r = ga(e, t, n, r, o, i)),
    (n = va()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ct(e, t, i))
      : (V && n && ia(t), (t.flags |= 1), de(e, t, r, i), t.child)
  );
}
function Vu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !La(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pf(e, t, o, r, i))
      : ((e = Di(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(l, r) && e.ref === t.ref)
    )
      return ct(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lr(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), ct(e, t, i);
  }
  return us(e, t, n, r, i);
}
function _f(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(xn, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(xn, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(xn, Se),
        (Se |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(xn, Se),
      (Se |= r);
  return de(e, t, i, n), t.child;
}
function Lf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function us(e, t, n, r, i) {
  var o = we(n) ? bt : ce.current;
  return (
    (o = Rn(t, o)),
    Ln(t, i),
    (n = ga(e, t, n, r, o, i)),
    (r = va()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ct(e, t, i))
      : (V && r && ia(t), (t.flags |= 1), de(e, t, n, i), t.child)
  );
}
function Hu(e, t, n, r, i) {
  if (we(n)) {
    var o = !0;
    Yi(t);
  } else o = !1;
  if ((Ln(t, i), t.stateNode === null))
    Mi(e, t), Zd(t, n, r), ss(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = De(u))
      : ((u = we(n) ? bt : ce.current), (u = Rn(t, u)));
    var h = n.getDerivedStateFromProps,
      d =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Mu(t, l, r, u)),
      (gt = !1);
    var p = t.memoizedState;
    (l.state = p),
      to(t, r, l, i),
      (a = t.memoizedState),
      s !== r || p !== a || ye.current || gt
        ? (typeof h == "function" && (ls(t, n, h, r), (a = t.memoizedState)),
          (s = gt || Au(t, n, s, r, p, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      bd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : $e(t.type, s)),
      (l.props = u),
      (d = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = De(a))
        : ((a = we(n) ? bt : ce.current), (a = Rn(t, a)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || p !== a) && Mu(t, l, r, a)),
      (gt = !1),
      (p = t.memoizedState),
      (l.state = p),
      to(t, r, l, i);
    var y = t.memoizedState;
    s !== d || p !== y || ye.current || gt
      ? (typeof g == "function" && (ls(t, n, g, r), (y = t.memoizedState)),
        (u = gt || Au(t, n, u, r, p, y, a) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cs(e, t, n, r, o, i);
}
function cs(e, t, n, r, i, o) {
  Lf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Tu(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (ng.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Mn(t, e.child, null, o)), (t.child = Mn(t, null, s, o)))
      : de(e, t, s, o),
    (t.memoizedState = r.state),
    i && Tu(t, n, !0),
    t.child
  );
}
function Tf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    fa(e, t.containerInfo);
}
function Wu(e, t, n, r, i) {
  return An(), la(i), (t.flags |= 256), de(e, t, n, r), t.child;
}
var ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function If(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(W, i & 1),
    e === null)
  )
    return (
      is(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Ro(l, r, 0, null)),
              (e = Yt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = fs(n)),
              (t.memoizedState = ds),
              e)
            : ka(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return rg(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = jt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = jt(s, o)) : ((o = Yt(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? fs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ds),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = jt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ka(e, t) {
  return (
    (t = Ro({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && la(r),
    Mn(t, e.child, null, n),
    (e = ka(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rg(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vl(Error(x(422)))), yi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ro({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Yt(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Mn(t, e.child, null, l),
        (t.child.memoizedState = fs(l)),
        (t.memoizedState = ds),
        o);
  if (!(t.mode & 1)) return yi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(x(419))), (r = vl(o, r, void 0)), yi(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), ve || s)) {
    if (((r = re), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ut(e, i), Qe(r, e, i, -1));
    }
    return _a(), (r = vl(Error(x(421)))), yi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xe = Lt(i.nextSibling)),
      (Ce = t),
      (V = !0),
      (Ve = null),
      e !== null &&
        ((Ne[je++] = it),
        (Ne[je++] = ot),
        (Ne[je++] = Xt),
        (it = e.id),
        (ot = e.overflow),
        (Xt = t)),
      (t = ka(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), os(e.return, t, n);
}
function yl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Nf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((de(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
        else if (e.tag === 19) Gu(e, n, t);
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
    r &= 1;
  }
  if ((U(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && no(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          yl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && no(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        yl(t, !0, n, null, o);
        break;
      case "together":
        yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Mi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ig(e, t, n) {
  switch (t.tag) {
    case 3:
      Tf(t), An();
      break;
    case 5:
      nf(t);
      break;
    case 1:
      we(t.type) && Yi(t);
      break;
    case 4:
      fa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(Zi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? If(e, t, n)
          : (U(W, W.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _f(e, t, n);
  }
  return ct(e, t, n);
}
var jf, hs, Rf, Af;
jf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hs = function () {};
Rf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Jt(et.current);
    var o = null;
    switch (n) {
      case "input":
        (i = zl(e, i)), (r = zl(e, r)), (o = []);
        break;
      case "select":
        (i = q({}, i, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Fl(e, i)), (r = Fl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ji);
    }
    $l(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (kr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (kr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && $("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Af = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ae(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function og(e, t, n) {
  var r = t.pendingProps;
  switch ((oa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ae(t), null;
    case 1:
      return we(t.type) && Ki(), ae(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zn(),
        B(ye),
        B(ce),
        pa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (Ss(Ve), (Ve = null)))),
        hs(e, t),
        ae(t),
        null
      );
    case 5:
      ha(t);
      var i = Jt(Rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Rf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ae(t), null;
        }
        if (((e = Jt(et.current)), gi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Xe] = t), (r[Nr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < or.length; i++) $(or[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              eu(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              nu(r, o), $("invalid", r);
          }
          $l(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : kr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              si(r), tu(r, o, !0);
              break;
            case "textarea":
              si(r), ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ji);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = od(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Xe] = t),
            (e[Nr] = r),
            jf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Bl(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < or.length; i++) $(or[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                eu(e, r), (i = zl(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                nu(e, r), (i = Fl(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            $l(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? ad(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ld(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Sr(e, a)
                    : typeof a == "number" && Sr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (kr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && $("scroll", e)
                      : a != null && Ws(e, o, a, l));
              }
            switch (n) {
              case "input":
                si(e), tu(e, r, !1);
                break;
              case "textarea":
                si(e), ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Cn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ji);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ae(t), null;
    case 6:
      if (e && t.stateNode != null) Af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Jt(Rr.current)), Jt(et.current), gi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r);
      }
      return ae(t), null;
    case 13:
      if (
        (B(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && xe !== null && t.mode & 1 && !(t.flags & 128))
          Kd(), An(), (t.flags |= 98560), (o = !1);
        else if (((o = gi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[Xe] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ae(t), (o = !1);
        } else Ve !== null && (Ss(Ve), (Ve = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? ee === 0 && (ee = 3) : _a())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        zn(), hs(e, t), e === null && Tr(t.stateNode.containerInfo), ae(t), null
      );
    case 10:
      return ua(t.type._context), ae(t), null;
    case 17:
      return we(t.type) && Ki(), ae(t), null;
    case 19:
      if ((B(W), (o = t.memoizedState), o === null)) return ae(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) bn(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = no(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    bn(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > Dn &&
            ((t.flags |= 128), (r = !0), bn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = no(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              bn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !V)
            )
              return ae(t), null;
          } else
            2 * Y() - o.renderingStartTime > Dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), bn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Y()),
          (t.sibling = null),
          (n = W.current),
          U(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function lg(e, t) {
  switch ((oa(t), t.tag)) {
    case 1:
      return (
        we(t.type) && Ki(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zn(),
        B(ye),
        B(ce),
        pa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ha(t), null;
    case 13:
      if ((B(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        An();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(W), null;
    case 4:
      return zn(), null;
    case 10:
      return ua(t.type._context), null;
    case 22:
    case 23:
      return Pa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wi = !1,
  ue = !1,
  sg = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Sn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function ps(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Qu = !1;
function ag(e, t) {
  if (((bl = Gi), (e = Od()), ra(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            h = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (s = l + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (p = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === i && (s = l),
                p === o && ++h === r && (a = l),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = g;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xl = { focusedElem: e, selectionRange: n }, Gi = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    C = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : $e(t.type, w),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (k) {
          J(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (y = Qu), (Qu = !1), y;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ps(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function No(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ms(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[Nr], delete t[ts], delete t[Wm], delete t[Gm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ji));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), (e = e.sibling);
}
function vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), (e = e.sibling);
}
var ie = null,
  Be = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) Of(e, t, n), (n = n.sibling);
}
function Of(e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == "function")
    try {
      Ze.onCommitFiberUnmount(xo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || Sn(n, t);
    case 6:
      var r = ie,
        i = Be;
      (ie = null),
        ht(e, t, n),
        (ie = r),
        (Be = i),
        ie !== null &&
          (Be
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (Be
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? dl(e.parentNode, n)
              : e.nodeType === 1 && dl(e, n),
            Pr(e))
          : dl(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (i = Be),
        (ie = n.stateNode.containerInfo),
        (Be = !0),
        ht(e, t, n),
        (ie = r),
        (Be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && ps(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (Sn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          J(n, t, s);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ht(e, t, n), (ue = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sg()),
      t.forEach(function (r) {
        var i = vg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ie = s.stateNode), (Be = !1);
              break e;
            case 3:
              (ie = s.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (ie = s.stateNode.containerInfo), (Be = !0);
              break e;
          }
          s = s.return;
        }
        if (ie === null) throw Error(x(160));
        Of(o, l, i), (ie = null), (Be = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Df(t, e), (t = t.sibling);
}
function Df(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ke(e), r & 4)) {
        try {
          hr(3, e, e.return), No(3, e);
        } catch (w) {
          J(e, e.return, w);
        }
        try {
          hr(5, e, e.return);
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Ke(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ke(e),
        r & 512 && n !== null && Sn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Sr(i, "");
        } catch (w) {
          J(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && rd(i, o),
              Bl(s, l);
            var u = Bl(s, o);
            for (l = 0; l < a.length; l += 2) {
              var h = a[l],
                d = a[l + 1];
              h === "style"
                ? ad(i, d)
                : h === "dangerouslySetInnerHTML"
                ? ld(i, d)
                : h === "children"
                ? Sr(i, d)
                : Ws(i, h, d, u);
            }
            switch (s) {
              case "input":
                Ol(i, o);
                break;
              case "textarea":
                id(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Cn(i, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Cn(i, !!o.multiple, o.defaultValue, !0)
                      : Cn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Nr] = o;
          } catch (w) {
            J(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ke(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          J(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pr(t.containerInfo);
        } catch (w) {
          J(e, e.return, w);
        }
      break;
    case 4:
      Ue(t, e), Ke(e);
      break;
    case 13:
      Ue(t, e),
        Ke(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ca = Y())),
        r & 4 && Ju(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (u = ue) || h), Ue(t, e), (ue = u)) : Ue(t, e),
        Ke(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (T = e, h = e.child; h !== null; ) {
            for (d = T = h; T !== null; ) {
              switch (((p = T), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, p, p.return);
                  break;
                case 1:
                  Sn(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      J(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Sn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Yu(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (T = g)) : Yu(d);
            }
            h = h.sibling;
          }
        e: for (h = null, d = e; ; ) {
          if (d.tag === 5) {
            if (h === null) {
              h = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = sd("display", l)));
              } catch (w) {
                J(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (h === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                J(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            h === d && (h = null), (d = d.return);
          }
          h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ke(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Sr(i, ""), (r.flags &= -33));
          var o = qu(e);
          vs(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = qu(e);
          gs(e, s, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ug(e, t, n) {
  (T = e), Ff(e);
}
function Ff(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || wi;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || ue;
        s = wi;
        var u = ue;
        if (((wi = l), (ue = a) && !u))
          for (T = i; T !== null; )
            (l = T),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? bu(i)
                : a !== null
                ? ((a.return = l), (T = a))
                : bu(i);
        for (; o !== null; ) (T = o), Ff(o), (o = o.sibling);
        (T = i), (wi = s), (ue = u);
      }
      Ku(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (T = o)) : Ku(e);
  }
}
function Ku(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || No(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ru(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ru(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var d = h.dehydrated;
                    d !== null && Pr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ue || (t.flags & 512 && ms(t));
      } catch (p) {
        J(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Yu(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function bu(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            No(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, i, a);
            }
          }
          var o = t.return;
          try {
            ms(t);
          } catch (a) {
            J(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ms(t);
          } catch (a) {
            J(t, l, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (T = s);
      break;
    }
    T = t.return;
  }
}
var cg = Math.ceil,
  oo = ft.ReactCurrentDispatcher,
  Sa = ft.ReactCurrentOwner,
  Oe = ft.ReactCurrentBatchConfig,
  D = 0,
  re = null,
  b = null,
  oe = 0,
  Se = 0,
  xn = Dt(0),
  ee = 0,
  Or = null,
  en = 0,
  jo = 0,
  xa = 0,
  pr = null,
  ge = null,
  Ca = 0,
  Dn = 1 / 0,
  tt = null,
  lo = !1,
  ys = null,
  It = null,
  ki = !1,
  kt = null,
  so = 0,
  mr = 0,
  ws = null,
  zi = -1,
  Oi = 0;
function fe() {
  return D & 6 ? Y() : zi !== -1 ? zi : (zi = Y());
}
function Nt(e) {
  return e.mode & 1
    ? D & 2 && oe !== 0
      ? oe & -oe
      : qm.transition !== null
      ? (Oi === 0 && (Oi = kd()), Oi)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ld(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < mr) throw ((mr = 0), (ws = null), Error(x(185)));
  qr(e, n, r),
    (!(D & 2) || e !== re) &&
      (e === re && (!(D & 2) && (jo |= n), ee === 4 && yt(e, oe)),
      ke(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Dn = Y() + 500), Lo && Ft()));
}
function ke(e, t) {
  var n = e.callbackNode;
  qp(e, t);
  var r = Wi(e, e === re ? oe : 0);
  if (r === 0)
    n !== null && lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && lu(n), t === 1))
      e.tag === 0 ? Qm(Xu.bind(null, e)) : Qd(Xu.bind(null, e)),
        Vm(function () {
          !(D & 6) && Ft();
        }),
        (n = null);
    else {
      switch (Sd(r)) {
        case 1:
          n = Ks;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = Hi;
          break;
        case 536870912:
          n = wd;
          break;
        default:
          n = Hi;
      }
      n = Qf(n, Uf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Uf(e, t) {
  if (((zi = -1), (Oi = 0), D & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = Wi(e, e === re ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ao(e, r);
  else {
    t = r;
    var i = D;
    D |= 2;
    var o = Bf();
    (re !== e || oe !== t) && ((tt = null), (Dn = Y() + 500), Kt(e, t));
    do
      try {
        hg();
        break;
      } catch (s) {
        $f(e, s);
      }
    while (1);
    aa(),
      (oo.current = o),
      (D = i),
      b !== null ? (t = 0) : ((re = null), (oe = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ql(e)), i !== 0 && ((r = i), (t = ks(e, i)))), t === 1)
    )
      throw ((n = Or), Kt(e, 0), yt(e, r), ke(e, Y()), n);
    if (t === 6) yt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !dg(i) &&
          ((t = ao(e, r)),
          t === 2 && ((o = Ql(e)), o !== 0 && ((r = o), (t = ks(e, o)))),
          t === 1))
      )
        throw ((n = Or), Kt(e, 0), yt(e, r), ke(e, Y()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Wt(e, ge, tt);
          break;
        case 3:
          if (
            (yt(e, r), (r & 130023424) === r && ((t = Ca + 500 - Y()), 10 < t))
          ) {
            if (Wi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = es(Wt.bind(null, e, ge, tt), t);
            break;
          }
          Wt(e, ge, tt);
          break;
        case 4:
          if ((yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ge(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = es(Wt.bind(null, e, ge, tt), r);
            break;
          }
          Wt(e, ge, tt);
          break;
        case 5:
          Wt(e, ge, tt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ke(e, Y()), e.callbackNode === n ? Uf.bind(null, e) : null;
}
function ks(e, t) {
  var n = pr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = ao(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Ss(t)),
    e
  );
}
function Ss(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function dg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function yt(e, t) {
  for (
    t &= ~xa,
      t &= ~jo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xu(e) {
  if (D & 6) throw Error(x(327));
  Tn();
  var t = Wi(e, 0);
  if (!(t & 1)) return ke(e, Y()), null;
  var n = ao(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ql(e);
    r !== 0 && ((t = r), (n = ks(e, r)));
  }
  if (n === 1) throw ((n = Or), Kt(e, 0), yt(e, t), ke(e, Y()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wt(e, ge, tt),
    ke(e, Y()),
    null
  );
}
function Ea(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((Dn = Y() + 500), Lo && Ft());
  }
}
function tn(e) {
  kt !== null && kt.tag === 0 && !(D & 6) && Tn();
  var t = D;
  D |= 1;
  var n = Oe.transition,
    r = F;
  try {
    if (((Oe.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Oe.transition = n), (D = t), !(D & 6) && Ft();
  }
}
function Pa() {
  (Se = xn.current), B(xn);
}
function Kt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bm(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((oa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ki();
          break;
        case 3:
          zn(), B(ye), B(ce), pa();
          break;
        case 5:
          ha(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          B(W);
          break;
        case 19:
          B(W);
          break;
        case 10:
          ua(r.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (b = e = jt(e.current, null)),
    (oe = Se = t),
    (ee = 0),
    (Or = null),
    (xa = jo = en = 0),
    (ge = pr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function $f(e, t) {
  do {
    var n = b;
    try {
      if ((aa(), (Ri.current = io), ro)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ro = !1;
      }
      if (
        ((Zt = 0),
        (ne = Z = Q = null),
        (fr = !1),
        (Ar = 0),
        (Sa.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (Or = t), (b = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = oe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            h = s,
            d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Uu(l);
          if (g !== null) {
            (g.flags &= -257),
              $u(g, l, s, o, t),
              g.mode & 1 && Fu(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Fu(o, u, t), _a();
              break e;
            }
            a = Error(x(426));
          }
        } else if (V && s.mode & 1) {
          var C = Uu(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              $u(C, l, s, o, t),
              la(On(a, s));
            break e;
          }
        }
        (o = a = On(a, s)),
          ee !== 4 && (ee = 2),
          pr === null ? (pr = [o]) : pr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Cf(o, a, t);
              ju(o, f);
              break e;
            case 1:
              s = a;
              var c = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (It === null || !It.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = Ef(o, s, t);
                ju(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hf(n);
    } catch (E) {
      (t = E), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Bf() {
  var e = oo.current;
  return (oo.current = io), e === null ? io : e;
}
function _a() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    re === null || (!(en & 268435455) && !(jo & 268435455)) || yt(re, oe);
}
function ao(e, t) {
  var n = D;
  D |= 2;
  var r = Bf();
  (re !== e || oe !== t) && ((tt = null), Kt(e, t));
  do
    try {
      fg();
      break;
    } catch (i) {
      $f(e, i);
    }
  while (1);
  if ((aa(), (D = n), (oo.current = r), b !== null)) throw Error(x(261));
  return (re = null), (oe = 0), ee;
}
function fg() {
  for (; b !== null; ) Vf(b);
}
function hg() {
  for (; b !== null && !Fp(); ) Vf(b);
}
function Vf(e) {
  var t = Gf(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hf(e) : (b = t),
    (Sa.current = null);
}
function Hf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lg(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (b = null);
        return;
      }
    } else if (((n = og(n, t, Se)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Wt(e, t, n) {
  var r = F,
    i = Oe.transition;
  try {
    (Oe.transition = null), (F = 1), pg(e, t, n, r);
  } finally {
    (Oe.transition = i), (F = r);
  }
  return null;
}
function pg(e, t, n, r) {
  do Tn();
  while (kt !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Jp(e, o),
    e === re && ((b = re = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      Qf(Hi, function () {
        return Tn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Oe.transition), (Oe.transition = null);
    var l = F;
    F = 1;
    var s = D;
    (D |= 4),
      (Sa.current = null),
      ag(e, n),
      Df(n, e),
      Mm(Xl),
      (Gi = !!bl),
      (Xl = bl = null),
      (e.current = n),
      ug(n),
      Up(),
      (D = s),
      (F = l),
      (Oe.transition = o);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (kt = e), (so = i)),
    (o = e.pendingLanes),
    o === 0 && (It = null),
    Vp(n.stateNode),
    ke(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (lo) throw ((lo = !1), (e = ys), (ys = null), e);
  return (
    so & 1 && e.tag !== 0 && Tn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ws ? mr++ : ((mr = 0), (ws = e))) : (mr = 0),
    Ft(),
    null
  );
}
function Tn() {
  if (kt !== null) {
    var e = Sd(so),
      t = Oe.transition,
      n = F;
    try {
      if (((Oe.transition = null), (F = 16 > e ? 16 : e), kt === null))
        var r = !1;
      else {
        if (((e = kt), (kt = null), (so = 0), D & 6)) throw Error(x(331));
        var i = D;
        for (D |= 4, T = e.current; T !== null; ) {
          var o = T,
            l = o.child;
          if (T.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (T = u; T !== null; ) {
                  var h = T;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, h, o);
                  }
                  var d = h.child;
                  if (d !== null) (d.return = h), (T = d);
                  else
                    for (; T !== null; ) {
                      h = T;
                      var p = h.sibling,
                        g = h.return;
                      if ((Mf(h), h === u)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (T = p);
                        break;
                      }
                      T = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (T = l);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (T = f);
                break e;
              }
              T = o.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          l = T;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (T = m);
          else
            e: for (l = c; T !== null; ) {
              if (((s = T), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(9, s);
                  }
                } catch (E) {
                  J(s, s.return, E);
                }
              if (s === l) {
                T = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (T = k);
                break e;
              }
              T = s.return;
            }
        }
        if (
          ((D = i), Ft(), Ze && typeof Ze.onPostCommitFiberRoot == "function")
        )
          try {
            Ze.onPostCommitFiberRoot(xo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Oe.transition = t);
    }
  }
  return !1;
}
function Zu(e, t, n) {
  (t = On(n, t)),
    (t = Cf(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = fe()),
    e !== null && (qr(e, 1, t), ke(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          (e = On(n, e)),
            (e = Ef(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = fe()),
            t !== null && (qr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > Y() - Ca)
        ? Kt(e, 0)
        : (xa |= n)),
    ke(e, t);
}
function Wf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = fe();
  (e = ut(e, t)), e !== null && (qr(e, t, n), ke(e, n));
}
function gg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wf(e, n);
}
function vg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Wf(e, n);
}
var Gf;
Gf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), ig(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), V && t.flags & 1048576 && qd(t, Xi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Mi(e, t), (e = t.pendingProps);
      var i = Rn(t, ce.current);
      Ln(t, n), (i = ga(null, t, r, e, i, n));
      var o = va();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((o = !0), Yi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            da(t),
            (i.updater = To),
            (t.stateNode = i),
            (i._reactInternals = t),
            ss(t, r, e, n),
            (t = cs(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && ia(t), de(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Mi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = wg(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = us(null, t, r, e, n);
            break e;
          case 1:
            t = Hu(null, t, r, e, n);
            break e;
          case 11:
            t = Bu(null, t, r, e, n);
            break e;
          case 14:
            t = Vu(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        us(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Hu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Tf(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          bd(e, t),
          to(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = On(Error(x(423)), t)), (t = Wu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = On(Error(x(424)), t)), (t = Wu(e, t, r, n, i));
            break e;
          } else
            for (
              xe = Lt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                V = !0,
                Ve = null,
                n = tf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((An(), r === i)) {
            t = ct(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nf(t),
        e === null && is(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Zl(r, i) ? (l = null) : o !== null && Zl(r, o) && (t.flags |= 32),
        Lf(e, t),
        de(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && is(t), null;
    case 13:
      return If(e, t, n);
    case 4:
      return (
        fa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mn(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Bu(e, t, r, i, n)
      );
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          U(Zi, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (qe(o.value, l)) {
            if (o.children === i.children && !ye.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = lt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      os(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(x(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  os(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        de(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ln(t, n),
        (i = De(i)),
        (r = r(i)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        Vu(e, t, r, i, n)
      );
    case 15:
      return Pf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Mi(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), Yi(t)) : (e = !1),
        Ln(t, n),
        Zd(t, r, i),
        ss(t, r, i, n),
        cs(null, t, r, !0, e, n)
      );
    case 19:
      return Nf(e, t, n);
    case 22:
      return _f(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Qf(e, t) {
  return vd(e, t);
}
function yg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Me(e, t, n, r) {
  return new yg(e, t, n, r);
}
function La(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wg(e) {
  if (typeof e == "function") return La(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qs)) return 11;
    if (e === qs) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Di(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) La(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case fn:
        return Yt(n.children, i, o, t);
      case Gs:
        (l = 8), (i |= 8);
        break;
      case jl:
        return (
          (e = Me(12, n, t, i | 2)), (e.elementType = jl), (e.lanes = o), e
        );
      case Rl:
        return (e = Me(13, n, t, i)), (e.elementType = Rl), (e.lanes = o), e;
      case Al:
        return (e = Me(19, n, t, i)), (e.elementType = Al), (e.lanes = o), e;
      case ed:
        return Ro(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xc:
              l = 10;
              break e;
            case Zc:
              l = 9;
              break e;
            case Qs:
              l = 11;
              break e;
            case qs:
              l = 14;
              break e;
            case mt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Yt(e, t, n, r) {
  return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function Ro(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wl(e, t, n) {
  return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function kl(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = el(0)),
    (this.expirationTimes = el(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = el(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ta(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new kg(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Me(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    da(o),
    e
  );
}
function Sg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qf(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return Gd(e, n, t);
  }
  return t;
}
function Jf(e, t, n, r, i, o, l, s, a) {
  return (
    (e = Ta(n, r, !0, e, i, o, l, s, a)),
    (e.context = qf(null)),
    (n = e.current),
    (r = fe()),
    (i = Nt(n)),
    (o = lt(r, i)),
    (o.callback = t ?? null),
    Tt(n, o, i),
    (e.current.lanes = i),
    qr(e, i, r),
    ke(e, r),
    e
  );
}
function Ao(e, t, n, r) {
  var i = t.current,
    o = fe(),
    l = Nt(i);
  return (
    (n = qf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(i, t, l)),
    e !== null && (Qe(e, i, l, o), ji(e, i, l)),
    l
  );
}
function uo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ec(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ia(e, t) {
  ec(e, t), (e = e.alternate) && ec(e, t);
}
function xg() {
  return null;
}
var Kf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Na(e) {
  this._internalRoot = e;
}
Mo.prototype.render = Na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Ao(e, t, null, null);
};
Mo.prototype.unmount = Na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      Ao(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Mo(e) {
  this._internalRoot = e;
}
Mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ed();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    vt.splice(n, 0, e), n === 0 && _d(e);
  }
};
function ja(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function tc() {}
function Cg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = uo(l);
        o.call(u);
      };
    }
    var l = Jf(t, r, e, 0, null, !1, !1, "", tc);
    return (
      (e._reactRootContainer = l),
      (e[at] = l.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = uo(a);
      s.call(u);
    };
  }
  var a = Ta(e, 0, !1, null, null, !1, !1, "", tc);
  return (
    (e._reactRootContainer = a),
    (e[at] = a.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Ao(t, a, n, r);
    }),
    a
  );
}
function Oo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = uo(l);
        s.call(a);
      };
    }
    Ao(t, l, e, i);
  } else l = Cg(n, t, e, i, r);
  return uo(l);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 &&
          (Ys(t, n | 1), ke(t, Y()), !(D & 6) && ((Dn = Y() + 500), Ft()));
      }
      break;
    case 13:
      tn(function () {
        var r = ut(e, 1);
        if (r !== null) {
          var i = fe();
          Qe(r, e, 1, i);
        }
      }),
        Ia(e, 1);
  }
};
bs = function (e) {
  if (e.tag === 13) {
    var t = ut(e, 134217728);
    if (t !== null) {
      var n = fe();
      Qe(t, e, 134217728, n);
    }
    Ia(e, 134217728);
  }
};
Cd = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = ut(e, t);
    if (n !== null) {
      var r = fe();
      Qe(n, e, t, r);
    }
    Ia(e, t);
  }
};
Ed = function () {
  return F;
};
Pd = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Hl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = _o(r);
            if (!i) throw Error(x(90));
            nd(r), Ol(r, i);
          }
        }
      }
      break;
    case "textarea":
      id(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cn(e, !!n.multiple, t, !1);
  }
};
dd = Ea;
fd = tn;
var Eg = { usingClientEntryPoint: !1, Events: [Kr, gn, _o, ud, cd, Ea] },
  Xn = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pg = {
    bundleType: Xn.bundleType,
    version: Xn.version,
    rendererPackageName: Xn.rendererPackageName,
    rendererConfig: Xn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = md(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Xn.findFiberByHostInstance || xg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (xo = Si.inject(Pg)), (Ze = Si);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Eg;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ja(t)) throw Error(x(200));
  return Sg(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!ja(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = Kf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ta(e, 1, !1, null, null, n, !1, r, i)),
    (e[at] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new Na(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return tn(e);
};
Pe.hydrate = function (e, t, n) {
  if (!zo(t)) throw Error(x(200));
  return Oo(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!ja(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Kf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Jf(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[at] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Mo(t);
};
Pe.render = function (e, t, n) {
  if (!zo(t)) throw Error(x(200));
  return Oo(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!zo(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (tn(function () {
        Oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = Ea;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Oo(e, t, n, !1, r);
};
Pe.version = "18.2.0-next-9e3b772b8-20220608";
function Yf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yf);
    } catch (e) {
      console.error(e);
    }
}
Yf(), (qc.exports = Pe);
var bf = qc.exports,
  nc = bf;
(Il.createRoot = nc.createRoot), (Il.hydrateRoot = nc.hydrateRoot);
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dr() {
  return (
    (Dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dr.apply(this, arguments)
  );
}
var St;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(St || (St = {}));
const rc = "popstate";
function _g(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return xs(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : co(i);
  }
  return Tg(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ra(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Lg() {
  return Math.random().toString(36).substr(2, 8);
}
function ic(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function xs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Dr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Vn(t) : t,
      { state: n, key: (t && t.key) || r || Lg() }
    )
  );
}
function co(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Vn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Tg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = St.Pop,
    a = null,
    u = h();
  u == null && ((u = 0), l.replaceState(Dr({}, l.state, { idx: u }), ""));
  function h() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    s = St.Pop;
    let C = h(),
      f = C == null ? null : C - u;
    (u = C), a && a({ action: s, location: w.location, delta: f });
  }
  function p(C, f) {
    s = St.Push;
    let c = xs(w.location, C, f);
    n && n(c, C), (u = h() + 1);
    let m = ic(c, u),
      k = w.createHref(c);
    try {
      l.pushState(m, "", k);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      i.location.assign(k);
    }
    o && a && a({ action: s, location: w.location, delta: 1 });
  }
  function g(C, f) {
    s = St.Replace;
    let c = xs(w.location, C, f);
    n && n(c, C), (u = h());
    let m = ic(c, u),
      k = w.createHref(c);
    l.replaceState(m, "", k),
      o && a && a({ action: s, location: w.location, delta: 0 });
  }
  function y(C) {
    let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
      c = typeof C == "string" ? C : co(C);
    return (
      X(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(rc, d),
        (a = C),
        () => {
          i.removeEventListener(rc, d), (a = null);
        }
      );
    },
    createHref(C) {
      return t(i, C);
    },
    createURL: y,
    encodeLocation(C) {
      let f = y(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: p,
    replace: g,
    go(C) {
      return l.go(C);
    },
  };
  return w;
}
var oc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(oc || (oc = {}));
function Ig(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Vn(t) : t,
    i = Aa(r.pathname || "/", n);
  if (i == null) return null;
  let o = Xf(e);
  Ng(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) l = Ug(o[s], Vg(i));
  return l;
}
function Xf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (X(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Rt([r, a.relativePath]),
      h = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xf(o.children, t, h, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Dg(u, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of Zf(o.path)) i(o, l, a);
    }),
    t
  );
}
function Zf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Zf(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ng(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const jg = /^:\w+$/,
  Rg = 3,
  Ag = 2,
  Mg = 1,
  zg = 10,
  Og = -2,
  lc = (e) => e === "*";
function Dg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(lc) && (r += Og),
    t && (r += Ag),
    n
      .filter((i) => !lc(i))
      .reduce((i, o) => i + (jg.test(o) ? Rg : o === "" ? Mg : zg), r)
  );
}
function Fg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ug(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      h = $g(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let d = s.route;
    o.push({
      params: r,
      pathname: Rt([i, h.pathname]),
      pathnameBase: Qg(Rt([i, h.pathnameBase])),
      route: d,
    }),
      h.pathnameBase !== "/" && (i = Rt([i, h.pathnameBase]));
  }
  return o;
}
function $g(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bg(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, h, d) => {
      if (h === "*") {
        let p = s[d] || "";
        l = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (u[h] = Hg(s[d] || "", h)), u;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Bg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ra(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (l, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Vg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Ra(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Hg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Ra(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Aa(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Vn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Gg(n, t)) : t,
    search: qg(r),
    hash: Jg(i),
  };
}
function Gg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Sl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function eh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function th(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Vn(e))
    : ((i = Dr({}, e)),
      X(
        !i.pathname || !i.pathname.includes("?"),
        Sl("?", "pathname", "search", i)
      ),
      X(
        !i.pathname || !i.pathname.includes("#"),
        Sl("#", "pathname", "hash", i)
      ),
      X(!i.search || !i.search.includes("#"), Sl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (r || l == null) s = n;
  else {
    let d = t.length - 1;
    if (l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      i.pathname = p.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = Wg(i, s),
    u = l && l !== "/" && l.endsWith("/"),
    h = (o || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || h) && (a.pathname += "/"), a;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Qg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  qg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Jg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Kg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const nh = ["post", "put", "patch", "delete"];
new Set(nh);
const Yg = ["get", ...nh];
new Set(Yg);
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fo() {
  return (
    (fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fo.apply(this, arguments)
  );
}
const Ma = S.createContext(null),
  bg = S.createContext(null),
  Hn = S.createContext(null),
  Do = S.createContext(null),
  ln = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rh = S.createContext(null);
function Xg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  br() || X(!1);
  let { basename: r, navigator: i } = S.useContext(Hn),
    { hash: o, pathname: l, search: s } = oh(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Rt([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  );
}
function br() {
  return S.useContext(Do) != null;
}
function Fo() {
  return br() || X(!1), S.useContext(Do).location;
}
function ih(e) {
  S.useContext(Hn).static || S.useLayoutEffect(e);
}
function Zg() {
  let { isDataRoute: e } = S.useContext(ln);
  return e ? fv() : ev();
}
function ev() {
  br() || X(!1);
  let e = S.useContext(Ma),
    { basename: t, navigator: n } = S.useContext(Hn),
    { matches: r } = S.useContext(ln),
    { pathname: i } = Fo(),
    o = JSON.stringify(eh(r).map((a) => a.pathnameBase)),
    l = S.useRef(!1);
  return (
    ih(() => {
      l.current = !0;
    }),
    S.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let h = th(a, JSON.parse(o), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Rt([t, h.pathname])),
          (u.replace ? n.replace : n.push)(h, u.state, u);
      },
      [t, n, o, i, e]
    )
  );
}
function oh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(ln),
    { pathname: i } = Fo(),
    o = JSON.stringify(eh(r).map((l) => l.pathnameBase));
  return S.useMemo(() => th(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function tv(e, t) {
  return nv(e, t);
}
function nv(e, t, n) {
  br() || X(!1);
  let { navigator: r } = S.useContext(Hn),
    { matches: i } = S.useContext(ln),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Fo(),
    u;
  if (t) {
    var h;
    let w = typeof t == "string" ? Vn(t) : t;
    s === "/" || ((h = w.pathname) != null && h.startsWith(s)) || X(!1),
      (u = w);
  } else u = a;
  let d = u.pathname || "/",
    p = s === "/" ? d : d.slice(s.length) || "/",
    g = Ig(e, { pathname: p }),
    y = sv(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Rt([
              s,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? s
                : Rt([
                    s,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? S.createElement(
        Do.Provider,
        {
          value: {
            location: fo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: St.Pop,
          },
        },
        y
      )
    : y;
}
function rv() {
  let e = dv(),
    t = Kg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    o
  );
}
const iv = S.createElement(rv, null);
class ov extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          ln.Provider,
          { value: this.props.routeContext },
          S.createElement(rh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(Ma);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(ln.Provider, { value: t }, r)
  );
}
function sv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let s = o.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id])
    );
    s >= 0 || X(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, a, u) => {
    let h = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      d = null;
    n && (d = a.route.errorElement || iv);
    let p = t.concat(o.slice(0, u + 1)),
      g = () => {
        let y;
        return (
          h
            ? (y = d)
            : a.route.Component
            ? (y = S.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = s),
          S.createElement(lv, {
            match: a,
            routeContext: { outlet: s, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || u === 0)
      ? S.createElement(ov, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var lh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(lh || {}),
  ho = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ho || {});
function av(e) {
  let t = S.useContext(Ma);
  return t || X(!1), t;
}
function uv(e) {
  let t = S.useContext(bg);
  return t || X(!1), t;
}
function cv(e) {
  let t = S.useContext(ln);
  return t || X(!1), t;
}
function sh(e) {
  let t = cv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function dv() {
  var e;
  let t = S.useContext(rh),
    n = uv(ho.UseRouteError),
    r = sh(ho.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function fv() {
  let { router: e } = av(lh.UseNavigateStable),
    t = sh(ho.UseNavigateStable),
    n = S.useRef(!1);
  return (
    ih(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, fo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function cn(e) {
  X(!1);
}
function hv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = St.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  br() && X(!1);
  let s = t.replace(/^\/*/, "/"),
    a = S.useMemo(() => ({ basename: s, navigator: o, static: l }), [s, o, l]);
  typeof r == "string" && (r = Vn(r));
  let {
      pathname: u = "/",
      search: h = "",
      hash: d = "",
      state: p = null,
      key: g = "default",
    } = r,
    y = S.useMemo(() => {
      let w = Aa(u, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: d, state: p, key: g },
            navigationType: i,
          };
    }, [s, u, h, d, p, g, i]);
  return y == null
    ? null
    : S.createElement(
        Hn.Provider,
        { value: a },
        S.createElement(Do.Provider, { children: n, value: y })
      );
}
function pv(e) {
  let { children: t, location: n } = e;
  return tv(Cs(t), n);
}
new Promise(() => {});
function Cs(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, Cs(r.props.children, o));
        return;
      }
      r.type !== cn && X(!1), !r.props.index || !r.props.children || X(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = Cs(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Es.apply(this, arguments)
  );
}
function mv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function gv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !gv(e);
}
const yv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  wv = "startTransition",
  sc = gp[wv];
function kv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = S.useRef();
  o.current == null && (o.current = _g({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, a] = S.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    h = S.useCallback(
      (d) => {
        u && sc ? sc(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    S.useLayoutEffect(() => l.listen(h), [l, h]),
    S.createElement(hv, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
    })
  );
}
const Sv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  xv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ac = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: h,
      } = t,
      d = mv(t, yv),
      { basename: p } = S.useContext(Hn),
      g,
      y = !1;
    if (typeof u == "string" && xv.test(u) && ((g = u), Sv))
      try {
        let c = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          k = Aa(m.pathname, p);
        m.origin === c.origin && k != null
          ? (u = k + m.search + m.hash)
          : (y = !0);
      } catch {}
    let w = Xg(u, { relative: i }),
      C = Cv(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: h,
        relative: i,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || C(c);
    }
    return S.createElement(
      "a",
      Es({}, d, { href: g || w, onClick: y || o ? r : f, ref: n, target: a })
    );
  });
var uc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(uc || (uc = {}));
var cc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(cc || (cc = {}));
function Cv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
    } = t === void 0 ? {} : t,
    s = Zg(),
    a = Fo(),
    u = oh(e, { relative: l });
  return S.useCallback(
    (h) => {
      if (vv(h, n)) {
        h.preventDefault();
        let d = r !== void 0 ? r : co(a) === co(u);
        s(e, { replace: d, state: i, preventScrollReset: o, relative: l });
      }
    },
    [a, s, u, r, i, n, e, o, l]
  );
}
var ah = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (o) {
          var l = typeof o;
          if (l === "string" || l === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = n.apply(null, o);
              s && r.push(s);
            }
          } else if (l === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var a in o) t.call(o, a) && o[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(ah);
var Ev = ah.exports;
const Ut = zc(Ev),
  Pv = ["xxl", "xl", "lg", "md", "sm", "xs"],
  _v = "xs",
  za = S.createContext({ prefixes: {}, breakpoints: Pv, minBreakpoint: _v });
function Wn(e, t) {
  const { prefixes: n } = S.useContext(za);
  return e || n[t] || t;
}
function uh() {
  const { breakpoints: e } = S.useContext(za);
  return e;
}
function ch() {
  const { minBreakpoint: e } = S.useContext(za);
  return e;
}
const dh = (e) =>
  S.forwardRef((t, n) =>
    v.jsx("div", { ...t, ref: n, className: Ut(t.className, e) })
  );
var Lv = /-(.)/g;
function Tv(e) {
  return e.replace(Lv, function (t, n) {
    return n.toUpperCase();
  });
}
const Iv = (e) => e[0].toUpperCase() + Tv(e).slice(1);
function sn(e, { displayName: t = Iv(e), Component: n, defaultProps: r } = {}) {
  const i = S.forwardRef(
    ({ className: o, bsPrefix: l, as: s = n || "div", ...a }, u) => {
      const h = { ...r, ...a },
        d = Wn(l, e);
      return v.jsx(s, { ref: u, className: Ut(o, d), ...h });
    }
  );
  return (i.displayName = t), i;
}
const fh = S.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...i }, o) => {
    const l = Wn(e, "card-img");
    return v.jsx(r, { ref: o, className: Ut(n ? `${l}-${n}` : l, t), ...i });
  }
);
fh.displayName = "CardImg";
const Nv = fh,
  hh = S.createContext(null);
hh.displayName = "CardHeaderContext";
const jv = hh,
  ph = S.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const o = Wn(e, "card-header"),
      l = S.useMemo(() => ({ cardHeaderBsPrefix: o }), [o]);
    return v.jsx(jv.Provider, {
      value: l,
      children: v.jsx(n, { ref: i, ...r, className: Ut(t, o) }),
    });
  });
ph.displayName = "CardHeader";
const Rv = ph,
  Av = dh("h5"),
  Mv = dh("h6"),
  mh = sn("card-body"),
  zv = sn("card-title", { Component: Av }),
  Ov = sn("card-subtitle", { Component: Mv }),
  Dv = sn("card-link", { Component: "a" }),
  Fv = sn("card-text", { Component: "p" }),
  Uv = sn("card-footer"),
  $v = sn("card-img-overlay"),
  gh = S.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: i,
        body: o = !1,
        children: l,
        as: s = "div",
        ...a
      },
      u
    ) => {
      const h = Wn(e, "card");
      return v.jsx(s, {
        ref: u,
        ...a,
        className: Ut(
          t,
          h,
          n && `bg-${n}`,
          r && `text-${r}`,
          i && `border-${i}`
        ),
        children: o ? v.jsx(mh, { children: l }) : l,
      });
    }
  );
gh.displayName = "Card";
const Vt = Object.assign(gh, {
  Img: Nv,
  Title: zv,
  Subtitle: Ov,
  Body: mh,
  Link: Dv,
  Text: Fv,
  Header: Rv,
  Footer: Uv,
  ImgOverlay: $v,
});
function Bv({ as: e, bsPrefix: t, className: n, ...r }) {
  t = Wn(t, "col");
  const i = uh(),
    o = ch(),
    l = [],
    s = [];
  return (
    i.forEach((a) => {
      const u = r[a];
      delete r[a];
      let h, d, p;
      typeof u == "object" && u != null
        ? ({ span: h, offset: d, order: p } = u)
        : (h = u);
      const g = a !== o ? `-${a}` : "";
      h && l.push(h === !0 ? `${t}${g}` : `${t}${g}-${h}`),
        p != null && s.push(`order${g}-${p}`),
        d != null && s.push(`offset${g}-${d}`);
    }),
    [
      { ...r, className: Ut(n, ...l, ...s) },
      { as: e, bsPrefix: t, spans: l },
    ]
  );
}
const vh = S.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: o, spans: l }] =
    Bv(e);
  return v.jsx(i, { ...r, ref: t, className: Ut(n, !l.length && o) });
});
vh.displayName = "Col";
const Vv = vh,
  yh = S.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const o = Wn(e, "row"),
      l = uh(),
      s = ch(),
      a = `${o}-cols`,
      u = [];
    return (
      l.forEach((h) => {
        const d = r[h];
        delete r[h];
        let p;
        d != null && typeof d == "object" ? ({ cols: p } = d) : (p = d);
        const g = h !== s ? `-${h}` : "";
        p != null && u.push(`${a}${g}-${p}`);
      }),
      v.jsx(n, { ref: i, ...r, className: Ut(t, o, ...u) })
    );
  });
yh.displayName = "Row";
const Hv = yh,
  Wv = [
    {
      Name: "Maxime Antoine",
      Image: "https://www.maxime-antoine.fr/img/profil-pic-3.jpg",
      GithubLink: "https://github.com/maxime-antoine-dev/",
      SecondndLink: "https://www.maxime-antoine.fr/",
      Text: "'Je ne jure que par PHP, mon fils s'appellera Symfony'",
    },
    {
      Name: "Jules Ginhac",
      Image:
        "https://media.licdn.com/dms/image/D4E03AQGpIrZdBgKQdw/profile-displayphoto-shrink_200_200/0/1672048152759?e=1695254400&v=beta&t=H-t3ou9eNXLEiDdzC_OMIdWjJtGMXh1rJ-k_5ILXAUI",
      GithubLink: "https://github.com/JulesUSG15",
      SecondndLink: "https://www.linkedin.com/in/jules-ginhac-2b1b3b1a9/",
      Text: " 'Je te couperai les cheveux un jour Mathieu'",
    },
    {
      Name: "Antonin Sylvestre",
      Image: "https://avatars.githubusercontent.com/u/114994785?v=4",
      GithubLink: "https://github.com/antonin-slv",
      SecondndLink: "https://www.instagram.com/antosyl/",
      Text: "",
    },
    {
      Name: "Uku3Lig",
      Image: "https://avatars.githubusercontent.com/u/61147779?v=4",
      GithubLink: "https://github.com/uku3lig",
      SecondndLink: "",
      Text: "",
    },
    {
      Name: "Guillaume Calderon",
      Image: "https://avatars.githubusercontent.com/u/26602207?v=4",
      GithubLink: "https://github.com/FlashOnFire",
      SecondndLink: "",
      Text: "",
    },
    {
      Name: "Clément Viris",
      Image: "https://avatars.githubusercontent.com/u/133783141?v=4",
      GithubLink: "https://github.com/VirisOnGithub",
      SecondndLink: "https://virisongithub.github.io/",
      Text: "",
    },
    {
      Name: "Alexandre Honoré",
      Image:
        "https://pbs.twimg.com/profile_images/995644302469554176/CYlCb0Yq_400x400.jpg",
      GithubLink: "https://github.com/Tibouyou",
      SecondndLink: "",
      Text: "Tibebou",
    },
    {
      Name: "Romain Rochebloine",
      Image: "https://avatars.githubusercontent.com/u/104299526?v=4",
      GithubLink: "https://github.com/rrrroo",
      SecondndLink: "",
      Text: "",
    },
    {
      Name: "Dorian Tonnis",
      Image: "https://avatars.githubusercontent.com/u/114983555?v=4",
      GithubLink: "https://github.com/Dorian-T",
      SecondndLink: "https://dorian-tonnis.fr/",
      Text: "Etudiant ingénieur en informatique, j'apprends le C++ et le web.",
    },
    {
      Name: "Pablo Verchère",
      Image: "https://avatars.githubusercontent.com/u/107038880?v=4",
      GithubLink: "https://github.com/PabloVerchere",
      SecondndLink: "",
      Text: "",
    },
  ];
function Gv(e) {
  const { Name: t } = e,
    n = Wv.find((l) => l.Name === t);
  if (!n) return null;
  const { Image: r } = n,
    { GithubLink: i } = n,
    { SecondndLink: o } = n;
  return v.jsx(Vt, {
    style: { width: "18rem" },
    children: v.jsxs(Vt.Body, {
      children: [
        v.jsx(Vt.Title, { children: t }),
        v.jsx(Vt.Img, { variant: "top", src: r }),
        v.jsx(Vt.Text, { children: n.Text }),
        v.jsx(Vt.Link, { href: i, children: "Github" }),
        v.jsx(Vt.Link, { href: o, children: "Website" }),
      ],
    }),
  });
}
function Qv(e) {
  const {
    Title: t,
    Author: n,
    Date: r,
    Language: i,
    Content: o,
    Image1Link: l,
    Image2Link: s,
    GithubRepoLink: a,
    HostLink: u,
    CoAuthors: h,
  } = e;
  function d(g) {
    const y = {
      python: [
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      ],
      js: [
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      ],
      cpp: [
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
      ],
      typescript: [
        "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      ],
      react: [
        "https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB",
      ],
      html: [
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      ],
      css: [
        "https://img.shields.io/badge/CSS-239120?&style=flat&logo=css3&logoColor=white",
      ],
      angular: [
        "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
      ],
      bootstrap: [
        "https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white",
      ],
      php: [
        "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
      ],
      reactnative: [
        "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      ],
    };
    return i === "C++" ? y.cpp : y[g.toLowerCase()];
  }
  const p = d(i);
  return v.jsxs("div", {
    className: "article",
    children: [
      v.jsx("p", { className: "article-title", children: t }),
      p &&
        p.map((g, y) =>
          v.jsx("img", { className: "language-badge", src: g, alt: i }, y)
        ),
      v.jsxs("div", {
        className: "article-meta",
        children: [
          v.jsx("p", { className: "article-author", children: n }),
          v.jsx("p", { className: "article-date", children: r }),
          v.jsx("p", { className: "article-language", children: i }),
        ],
      }),
      v.jsxs("div", {
        className: "article-content",
        children: [
          v.jsxs("div", {
            className: "article-content-images",
            children: [
              v.jsx("img", { src: l, alt: "Image1" }),
              s && v.jsx("img", { src: s, alt: "Image2" }),
            ],
          }),
          v.jsx("div", {
            className: "article-content-text",
            children: v.jsx("p", { children: o }),
          }),
        ],
      }),
      h &&
        h[0] !== "" &&
        v.jsxs("div", {
          className: "article-co-authors",
          children: [
            v.jsx("h3", { children: "Co-authors:" }),
            v.jsx(Hv, {
              className: "article-co-authors-list",
              children: h.map((g, y) =>
                v.jsx(Vv, { children: v.jsx(Gv, { Name: g }) }, y)
              ),
            }),
          ],
        }),
      v.jsxs("div", {
        className: "article-links",
        children: [
          v.jsx("a", {
            href: a,
            children: a && v.jsx("h3", { children: "Github Repo" }),
          }),
          v.jsx("a", {
            href: u,
            children: u && v.jsx("h3", { children: "Host Link" }),
          }),
        ],
      }),
    ],
  });
}
function qv({ onLanguageChange: e, onOrderChange: t, onYearChange: n }) {
  const r = (l) => {
      e(l);
    },
    i = (l) => {
      t(l);
    },
    o = (l) => {
      n(l);
    };
  return v.jsxs("div", {
    className: "filter-container",
    children: [
      v.jsx("label", { htmlFor: "language", children: "Language:" }),
      v.jsxs("select", {
        id: "language",
        children: [
          v.jsx("option", {
            value: "c++",
            onClick: () => r("C++"),
            children: "C++",
          }),
          v.jsx("option", {
            value: "js",
            onClick: () => r("Js"),
            children: "JavaScript",
          }),
          v.jsx("option", {
            value: "python",
            onClick: () => r("Python"),
            children: "Python",
          }),
          v.jsx("option", {
            value: "ts",
            onClick: () => r("TypeScript"),
            children: "TypeScript",
          }),
          v.jsx("option", {
            value: "php",
            onClick: () => r("PHP"),
            children: "PHP",
          }),
          v.jsx("option", {
            value: "reset",
            onClick: () => r(""),
            children: "All",
          }),
        ],
      }),
      v.jsx("label", { htmlFor: "date", children: "Year" }),
      v.jsxs("select", {
        id: "date",
        children: [
          v.jsxs("option", {
            value: "All",
            onClick: () => o(null),
            children: [" ", "All", " "],
          }),
          v.jsx("option", {
            value: "2022",
            onClick: () => o("2022"),
            children: "2022",
          }),
          v.jsx("option", {
            value: "2023",
            onClick: () => o("2023"),
            children: "2023",
          }),
        ],
      }),
      v.jsxs("div", {
        className: "button-container",
        children: [
          v.jsx("button", {
            id: "reset-button",
            onClick: () => {
              r(""), i("chronoOrder"), o(null);
            },
            children: "Reset",
          }),
          v.jsx("button", {
            id: "chrono-order",
            onClick: () => i("reverseChronoOrder"),
            children: "Reverse Order",
          }),
        ],
      }),
    ],
  });
}
const Jv = [
  {
    name: "Dinau'tt",
    Author: "Mathieu Ponton",
    Content:
      "Well, this is where we start. One afternoon I was bored so I tried looking for tutorials on how to make simple web games. I found a tutorial to make an infinite runner in Js and that's how i started learning it. Weeks later, as the project became more ambitous, i was joined by other students from Polytech Lyon and we started the AuttGames Team. The Dinautt is obviously inspired by the dino game by google. I learnt the basics of canvas, and arrays. I also learnt setInterval and setTimeOut functions. We later implemented a leaderboard to keep track of the better scores, using php and a database.",
    Date: "2022-11-10",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/dinautt.png",
    Image2Link: "",
    HostLink: "https://claq-dev.com/host/dinautt",
    GithubRepoLink: "https://github.com/Claquettes/auttgames/tree/main/dinautt",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  {
    name: "2048x",
    Author: "Mathieu Ponton",
    Content:
      "A 2048 game I made in JS. I learnt how to use the canvas and how to make a game loop. I also learnt how to use the keyboard to control the game.",
    Date: "2022-12-02",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/2048.png",
    Image2Link: "",
    GithubRepoLink:
      "https://github.com/Claquettes/auttgames/tree/main/views/2048",
    HostLink: "https://claq.fr/2048",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  {
    name: "Envoie!",
    Author: "Mathieu Ponton",
    Content:
      "A simple meme generator made in Js with others members of the AuttGames Team. The user can easily add text to a meme and download it. He can also just send the link to his friends. Made using Sharp.js.",
    Date: "2022-12-10",
    Language: "Js",
    Image1Link: "https://media.giphy.com/media/tEN32Ko5PGfdkYhtif/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://claq.fr/envoie",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  {
    name: "Snak",
    Author: "Mathieu Ponton",
    Content:
      "A minimalist Snake game playable in the browser, created in Html, CSS and Javascript. The goal is to eat as many apples as possible without touching the walls or the snake's body. The game was developed in 3 days, it was a personal challenge to see if I could create a game in such a short time. The player has the option to choose the speed of the snake as well as a safety distance (which prevents apples from appearing too close to the edges).",
    Date: "2023-01-04",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/snak.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Snak-autt",
    HostLink: "https://claquettes.github.io/Snak-autt/",
    CoAuthors: [""],
  },
  {
    name: "Casse-Brik",
    Author: "Mathieu Ponton",
    Content:
      "A Recreation of the classic Breakout game, created in Html, CSS and Javascript. The goal is to destroy all the bricks by bouncing the ball on the paddle. The player can choose to play differents levels, currently there are 6 levels. ",
    Date: "2023-01-10",
    Language: "Js",
    Image1Link: "https://media.giphy.com/media/lbmgZRIYHm5sEyZvqE/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/casse-briques",
    HostLink: "https://claq.fr/casse-briques",
    CoAuthors: [""],
  },
  {
    name: "PolyDarts",
    Author: "Mathieu Ponton | Maxime Antoine",
    Content: `Made using react-native with Maxime Antoine, Polydarts is a mobile application that helps dart players to keep track of their scores. The user can choose between different games (301, 501, Cricket, etc...) but also between "fun modes" (golden carrot, catch the rabbit, etc...). The application also contains stats about the player's games. The goal is to help players keep track of their scores, stats, and also to create a new way to play darts with the fun modes.`,
    Date: "2023-01-17",
    Language: "ReactNative",
    Image1Link: "https://claq-dev.com/host/Polydarts.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Polydarts",
    HostLink: "",
    CoAuthors: ["Maxime Antoine"],
  },
  {
    name: "Polyressources",
    Author: "Mathieu Ponton | More",
    Content:
      "A website to help students from Polytech Lyon find useful resources for their courses. The website is made in Html, CSS and Javascript. The user can choose between differents courses and then he will be redirected to a page with all the resources for this course. The goal is to help students find resources easily.",
    Date: "2023-02-16",
    Language: "Js",
    Image1Link:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVjMzgxYmIyYWFjYzdjMGM1ZmJmODI5ZjU0NTg2Y2JiYzZhMjlkYiZjdD1n/VKQiOKDIrKL2KxaNj3/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Polyressources",
    HostLink: "https://claq.fr/polyressources",
    CoAuthors: [
      "Guillaume Calderon",
      "Romain Rochebloine",
      "Clément Viris",
      "Dorian Tonnis",
    ],
  },
  {
    name: "Personal Webpage",
    Author: "Mathieu Ponton",
    Content:
      "My personnal webpage, built using Anime.js and Particle.js. The goal was to have a simple webpage to present myself and my projects. It was made when i was looking for an internship.",
    Date: "2023-03-10",
    Language: "Js",
    Image1Link:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjhhZjY3ODk5NjViOGNlYWNiNGMwY2ZjNWQ5NDAzNWE4NjA2YjllZSZjdD1n/dBsQOnzNymwm64RixT/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/mathi.eu",
    HostLink: "https://ponton-mathi.eu",
    CoAuthors: [""],
  },
  {
    name: "Ratio-Generateur",
    Author: "Mathieu Ponton | Uku3lig",
    Content:
      "A python script to generate -ratios-. It will generate a sentence starting with -ratio +- and then a random word from a list of words. The goal is to make a funny sentence. The library of words is composed of popular internet references, memes, french expressions and inside jokes from Polytech Lyon's students. Uku3lig helped me to tweak the script to make it work better. The GUI was made using Tkinter.",
    Date: "2023-03-13",
    Language: "Python",
    Image1Link: "https://claq-dev.com/host/ratio.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/ratio-generateur",
    HostLink: "",
    CoAuthors: ["Uku3Lig"],
  },
  {
    name: "Claquettix",
    Author: "Mathieu Ponton | Antonin Sylverstre",
    Content:
      "A script made with Selenium in Python to help the player wins at the game Pedantix using brute force. The script imput a selection of words to fill the blanks and give the player a huge boost at the beginning of the game. Antonin Sylvestre helped me by writting a script to pick the best words from a 600 000 words dictionnary. The GUI was made using Tkinter, and it allows the user to choose the number of words he wants to input and start the script.",
    Date: "2023-03-20",
    Language: "Python",
    Image1Link: "https://claq-dev.com/host/claquetix.png",
    Image2Link: "https://media.giphy.com/media/8mjdhnujKhJRdK5BwM/giphy.gif",
    GithubRepoLink: "https://github.com/Claquettes/Claquetix",
    HostLink: "",
    CoAuthors: ["Antonin Sylvestre"],
  },
  {
    name: "Claquipedia",
    Author: "Mathieu Ponton",
    Content:
      "Another Python script with a gui made with Tkinter. This script is a Wikipedia scraper that allows the user to search for a word and then the script will return the text from the Wikipedia page. The script also allows the user to copy and paste in one click the text from the Wikipedia page. The user can choose between 8 languages. It was designed to troll my friends on Discord.",
    Date: "2023-03-25",
    Language: "Python",
    Image1Link: "https://claq-dev.com/host/claquipedia.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Claquipedia",
    HostLink: "",
    CoAuthors: [""],
  },
  {
    name: "AuttGarden",
    Author: "Mathieu Ponton | AuttGames",
    Content:
      "It's a calm and relaxing game where you can make your own tiny island/garden. You have the ability to export/import every creation you make, and share it with your friends. The project was started by myself, but other members (FlashOnFire, Sun and Tibouyou) of the AuttGames Team joined me later. Together we added more than 100 differents tiles, the ability to change the size of the island, a day night cycle, and way more! It was made using Js canvas. The exemple island you see above was made by Sun. The site also has a lofi playlist embeded, using a soundcloud iframe.",
    Date: "2023-04-12",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/garden.png",
    Image2Link: "https://claq-dev.com/host/garden-creation.png",
    GithubRepoLink: "https://github.com/AuttGamesTeam/Autt-Garden",
    HostLink: "https://claq.fr/garden",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  {
    name: "Planetarium",
    Author: "Mathieu Ponton",
    Content:
      "A fork from The Garden. This is a 0 player game inspired by Conway's Game of Life. The game randomly generate a planet with a random quantity of water, grass, mountains and sand. The player has the capacity to place 5 populations tiles, that will evolve and grow depending on the quantity of water, grass, mountains and sand around them. The goal is to create a planet with a maximum of population.It's still in developpement.",
    Date: "2023-05-06",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/planet-empty.png",
    Image2Link: "https://claq-dev.com/host/planet.png",
    GithubRepoLink: "https://github.com/Claquettes/Planetarium",
    HostLink: "https://claquettes.github.io/Planetarium/",
    CoAuthors: [""],
  },
  {
    name: "Miso Mania!",
    Author: "Mathieu Ponton | Jules Ginhac | Romain Rochebloine",
    Content:
      " Project carried out as part of the EU LIFAP4 at the University Claude Bernard Lyon 1, as part of our second year of preparatory courses for Polytech engineering schools (Peip). The lectures for this teaching unit were provided by Alexandre Meyer and Nicolas Pronost, both researchers at LIRIS, a CNRS laboratory. Miso Mania is a 2D platform game. This game is at the crossroads, between platform game and die and retry. The player controls a character who must reach the end of the level. The game feature a level editor, a level sharing system as well as a leaderboard. Miso Mania allows the player to create an user inside of the game, and this user can purchase skins for the character, and can also purchase particles. The coins are earned by completing levels, and the closer the player is to the top of the leaderboard, the more coins he will earn. The game is distributed on WSL, Mac and Linux. The game was created using SDL2 library and C++ by Romain Rochebloine, Jules Ginhac and myself. For this project, we were ranked 3rd out of 68 groups, with a grade of 18.42/20.",
    Date: "2023-01/2023-05",
    Language: "C++",
    Image1Link: "https://claq-dev.com/host/miso1.gif",
    Image2Link: "https://claq-dev.com/host/miso2.gif",
    GithubRepoLink: "https://github.com/Miso-Mania/Game",
    HostLink: "",
    CoAuthors: ["Jules Ginhac", "Romain Rochebloine"],
  },
  {
    name: "Info4",
    Author: "Mathieu Ponton | Jules Ginhac | Maxime Antoine | Pablo Verchère",
    Content:
      " Project carried out as part of my studies at Polytech Lyon, with Maxime Antoine,Jules Ginhac and Pablo Verchère under the supervision of M. Bonnevay Stéphane. The goal of the project was to develop a python program to find the shortest path between 100 points on a map. This project was a version of The Salesman problem (TSP). The program allowed the user to choose between 1 truck to deliver all of the points, or multiple trucks. The program was developed using the python library Turtle, and the algorithm used was the nearest neighbor algorithm for the initial solution, and 2-opt, relocate and swap for the local search. All of the algorithms were developed by us. The program had a GUI, that showed in real time the current best path. All of the data was saved in .xlsx files to allow us to analyze the results. For this project, we were ranked 1 out of 40 groups, with a grade of 19/20.",
    Date: "2023-04/2023-05",
    Language: "Python",
    Image1Link: "https://claq-dev.com/host/info.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Jules Ginhac", "Maxime Antoine", "Pablo Verchère"],
  },
  {
    name: "TodoList",
    Author: "Mathieu Ponton",
    Content:
      "This project was my first using angular. The goal was to create a todo list, to make us of angular's components. The user can add tasks, delete them, and mark them as done. I implemented a dark mode using 'providers' and services.",
    Date: "2023-05",
    Language: "Angular",
    Image1Link: "https://claq-dev.com/host/listl.png",
    Image2Link: "https://claq-dev.com/host/listd.png",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: [""],
  },
  {
    name: "CatWisdom",
    Author: "Mathieu Ponton",
    Content:
      "My first venture into creating a Visual Studio Code (VSCode) extension. Leveraging boilerplate code from Yeoman and VSCode templates. To develop CatWisdom, I utilized webviews, a powerful component of VSCode extensions. With webviews, I created a dedicated window within the explorer tab that presents users with a delightful experience upon launching VSCode. This window features a random cat image and an accompanying quote about programming",
    Date: "2023-05",
    Language: "Typescript",
    Image1Link: "https://claq-dev.com/host/cw1.png",
    Image2Link: "https://claq-dev.com/host/cw2.png",
    GithubRepoLink: "",
    HostLink:
      "https://marketplace.visualstudio.com/items?itemName=Claquettes.cat-wisdom",
    CoAuthors: [""],
  },
  {
    name: "BDanse",
    Author: "Mathieu Ponton | Jules Ginhac ",
    Content:
      "Project carried out as part of the EU LIFABDW at the University Claude Bernard Lyon 1, as part of our second year of preparatory courses for Polytech engineering schools (Peip). The lectures for this teaching unit were provided by Nicolas Lumineau and Mohand-Saïd HACID, both researchers at the CNRS. This project was realised with Jules Ginhac.This project is a website, created using the MVC architecture, which allows the management of a dance school. It allows the management of the school's students, teachers, courses, rooms, etc. It also allows the management of a dance federation, with the management of the dancers, the competitions, the results, etc. This project was made using PHP, HTML, CSS, JS and MySQL. For this project, we were ranked 9 out of 59 groups, with a grade of 16.25/20.",
    Date: "2023-05",
    Language: "PHP",
    Image1Link: "https://claq-dev.com/host/bdanse.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Jules Ginhac"],
  },
  {
    name: "DevBlog v1",
    Author: "Mathieu Ponton",
    Content:
      "This blog serves as a platform where I share my projects, thoughts, learning process, and experiences as a developer. It aims to document my journey and provide a space for me to easily share my work with others, beyond GitHub or a traditional resume. My personal dev blog is a place where I showcase my projects, reflect on my progress, and share insights into my development journey. Through this blog, I aim to engage with a wider community, gather feedback, and continue learning from others. The blog is built using simple HTML and CSS for the design, while JavaScript handles the logic. The posts are stored as HTML files, and the site is dynamically generated using the data from these files. This setup allows for easy maintenance and scalability.It was really fun to build this blog, and I am excited to continue adding new features and posts to it.",
    Date: "2023-05",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/blog.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://ponton-mathi.eu/blog",
    CoAuthors: [""],
  },
  {
    name: "PolyNetwork",
    Author: "Mathieu Ponton | Maxime Antoine ",
    Content:
      " A project done with Maxime Antoine in 48h. Polynetwork is a social network for Polytech students. Polynetwork allows students to create an account, add their socials, portefolio, GitHub, Linkedin and personnal website. They can, if they want, share the major they are in and their year of study. The Goal behind this website is to allow students to easily create a network, and to allow recruiters to easily find students. This project was made using PHP, HTML, CSS, JS and MySQL.",
    Date: "2023-06",
    Language: "PHP",
    Image1Link: "https://claq-dev.com/host/pnetwork.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Maxime Antoine"],
  },
  {
    name: "Untilted Rythm Game",
    Author: "Mathieu Ponton",
    Content:
      "A Rythm game made from scratch in C++ using SDL2. It is heavily inspired by the franchise -Taiko no Tatsujin- and by the game -osu!-The game is still in development, but the core gameplay is done. The game is playable, there are menus, animations, and a scoring system.<br>What needs to be done is the implementation of a level editor, that will allow the player to create their own levels, and some more animations.<br>I havent yet implemented graphics, so everything is done using SDL2's primitives.The game is still in development. The lastest thing added was a fully working level creator and editor, including a GUI. The game is now playable, and the player can create their own levels. The next step is to add graphics, and to add more animations.",
    Date: "2023-06",
    Language: "C++",
    Image1Link: "https://claq-dev.com/host/Rythm.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/RythmClaq-",
    HostLink: "",
    CoAuthors: [""],
  },
  {
    name: "Cookin'",
    Author: "Mathieu Ponton",
    Content:
      "Cookin is an app build with React Native. It allows user to interract with websites Marmiton, a site that contains a lot of recipes. The user can search for recipes, use filters, or ask for a random recipe. The next features to implement are the ability to mark a recipe as favorite, and to create a shopping list from a recipe. The app is available in french and english. It is published in the Expo Store. The app is still in development.",
    Date: "2023-06",
    Language: "ReactNative",
    Image1Link: "https://claq-dev.com/host/cookin.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: [""],
  },
  {
    name: "ElementBox",
    Author: "Mathieu Ponton",
    Content:
      "A SandBox game made with JavaScript and HTML5 Canvas. This project was inspired by the game -The Powder Toy-.Currently, the user can place solids, liquids, powders, explosives and gases. The goal is also to add a lot of different elements, and to add a lot of interactions between them. The latest verion introduces electricity, and the ability to create circuits by placing wires and logic gates. The game is still in development, and I'm working on it from time to time.",
    Date: "2023-06",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/elementbox1.gif",
    Image2Link: "https://claq-dev.com/host/elementbox2.gif",
    GithubRepoLink: "https://claquettes.github.io/ElementBox/",
    HostLink: "https://github.com/Claquettes/SandBox",
    CoAuthors: [""],
  },
  {
    name: "ProdByFzu's Website",
    Author: "Mathieu Ponton",
    Content:
      " A website I made for my friend ProdByFzu, who is a really talented producer and beatmaker. To make the site, I used HTML, CSS, and JavaScript. I used the template i made the index page of this site, and modified it to fit his needs. This time, I used Anime.js to animate clouds and the background.",
    Date: "2023-07",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/fzu.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://prodbyfzu.fr",
    CoAuthors: [""],
  },
  {
    name: "LeTacoToque's Website",
    Author: "Mathieu Ponton",
    Content:
      "A website I made for LeTacoToqué, a french streaming group and e-sport Team which I co-founded. They are really great people, and they needed a website to easily share all of their social media and content. To make the site, I used HTML, CSS, and JavaScript. I used the template i made the index page of this site, and modified it to fit their needs. This time, I made a simple css animation for the background, and a Js script that randomly create a grid of emojis that fits the screen size.",
    Date: "2023-07",
    Language: "Js",
    Image1Link: "https://claq-dev.com/host/tacotoque.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://letacotoque.fr",
    CoAuthors: [""],
  },
];
function wh() {
  const [e, t] = S.useState(""),
    [n, r] = S.useState(!1),
    [i, o] = S.useState(Jv),
    [l, s] = S.useState(null),
    a = (p) => {
      r(!0),
        setTimeout(() => {
          r(!1);
        }, 1e3),
        t(p);
    },
    u = (p) => {
      r(!0),
        setTimeout(() => {
          r(!1);
        }, 1e3),
        p === "reverseChronoOrder" && o([...i].reverse());
    },
    h = (p) => {
      r(!0),
        setTimeout(() => {
          r(!1);
        }, 1e3),
        s(p);
    },
    d = i.filter(
      (p) => !((e && p.Language !== e) || (l && !p.Date.startsWith(l)))
    );
  return (
    d.reverse(),
    v.jsx(v.Fragment, {
      children: n
        ? v.jsx("div", {
            className: "load-wrapp",
            children: v.jsx("h1", { children: "Your content is loading " }),
          })
        : v.jsxs("div", {
            className: "Corpus-container",
            children: [
              v.jsx("div", {
                className: "Articles-container",
                children: d.map((p, g) =>
                  v.jsx(
                    Qv,
                    {
                      Title: p.name,
                      Author: p.Author,
                      Date: p.Date,
                      Language: p.Language,
                      Content: p.Content,
                      Image1Link: p.Image1Link,
                      Image2Link: p.Image2Link,
                      GithubRepoLink: p.GithubRepoLink,
                      HostLink: p.HostLink,
                      CoAuthors: p.CoAuthors,
                    },
                    g
                  )
                ),
              }),
              v.jsx("div", {
                className: "FiltersHolder",
                children: v.jsx(qv, {
                  onLanguageChange: a,
                  onOrderChange: u,
                  onYearChange: h,
                }),
              }),
            ],
          }),
    })
  );
}
function kh() {
  return v.jsx("div", {
    children: v.jsxs("div", {
      className: "about-me",
      children: [
        v.jsx("h1", { children: "About Me" }),
        v.jsxs("p", {
          children: [
            "Hey, I'm Mathieu Ponton, also known as Claquettes on the internet. I am a french apprentice software engineer, currently studying at",
            " ",
            v.jsx("a", {
              href: "https://polytech.univ-lyon1.fr/",
              children: "Polytech Lyon",
            }),
            ". I am interested in full stack web development and software engineering (mostly in C/C++). I love to learn new things and I am always looking for new challenges.",
          ],
        }),
        v.jsx("p", {
          children:
            "I am currently [as of september 2023] in a 3 years apprenticeship at the Metropole du Grand Lyon, and doing my diploma as a software engineer at Polytech Lyon.",
        }),
        v.jsxs("p", {
          children: [
            "Feel free to contact me at",
            " ",
            v.jsx("a", {
              href: `mailto:
        math@claq.fr`,
              children: "this mail.",
            }),
          ],
        }),
      ],
    }),
  });
}
function Kv() {
  return v.jsx("div", {
    children: v.jsxs("div", {
      className: "about-me",
      children: [
        v.jsx("h1", { children: "The Technologies I..." }),
        v.jsxs("div", {
          className: "love-to-use",
          children: [
            v.jsx("h1", { children: "Love to use" }),
            v.jsxs("div", {
              className: "technologies",
              children: [
                v.jsx("img", {
                  src: "https://claq.fr/host/c.png",
                  alt: "c",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/cpp.png",
                  alt: "cpp",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/js.png",
                  alt: "js",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/ts.png",
                  alt: "TypeScript",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/sql.png",
                  alt: "sql",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/html.png",
                  alt: "html",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/css.png",
                  alt: "css",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/ejs.png",
                  alt: "ejs",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/linux.png",
                  alt: "linux",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/git.png",
                  alt: "git",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/vscode.png",
                  alt: "vscode",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/ps.png",
                  alt: "ps",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/pr.png",
                  alt: "ai",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                  alt: "react",
                  className: "language-logo",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "have-used",
          children: [
            v.jsx("h1", { children: "Have used" }),
            v.jsxs("div", {
              className: "technologies",
              children: [
                v.jsx("img", {
                  src: "https://claq.fr/host/py.png",
                  alt: "python",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/php.png",
                  alt: "php",
                  className: "language-logo",
                }),
                v.jsx("img", {
                  src: "https://claq.fr/host/s.png",
                  alt: "scheme",
                  className: "language-logo",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var Yv = Object.defineProperty,
  bv = (e, t) => {
    for (var n in t) Yv(e, n, { get: t[n], enumerable: !0 });
  },
  Je = {};
bv(Je, {
  assign: () => e0,
  colors: () => At,
  createStringInterpolator: () => Va,
  skipAnimation: () => Lh,
  to: () => _h,
  willAdvance: () => Ha,
});
var Oa = Zr(),
  j = (e) => Xr(e, Oa),
  Da = Zr();
j.write = (e) => Xr(e, Da);
var Uo = Zr();
j.onStart = (e) => Xr(e, Uo);
var Fa = Zr();
j.onFrame = (e) => Xr(e, Fa);
var Ua = Zr();
j.onFinish = (e) => Xr(e, Ua);
var In = [];
j.setTimeout = (e, t) => {
  const n = j.now() + t,
    r = () => {
      const o = In.findIndex((l) => l.cancel == r);
      ~o && In.splice(o, 1), (Ct -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return In.splice(Sh(n), 0, i), (Ct += 1), xh(), i;
};
var Sh = (e) => ~(~In.findIndex((t) => t.time > e) || ~In.length);
j.cancel = (e) => {
  Uo.delete(e), Fa.delete(e), Ua.delete(e), Oa.delete(e), Da.delete(e);
};
j.sync = (e) => {
  (Ps = !0), j.batchedUpdates(e), (Ps = !1);
};
j.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), j.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      Uo.delete(n), (t = null);
    }),
    r
  );
};
var $a = typeof window < "u" ? window.requestAnimationFrame : () => {};
j.use = (e) => ($a = e);
j.now = typeof performance < "u" ? () => performance.now() : Date.now;
j.batchedUpdates = (e) => e();
j.catch = console.error;
j.frameLoop = "always";
j.advance = () => {
  j.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : Eh();
};
var xt = -1,
  Ct = 0,
  Ps = !1;
function Xr(e, t) {
  Ps ? (t.delete(e), e(0)) : (t.add(e), xh());
}
function xh() {
  xt < 0 && ((xt = 0), j.frameLoop !== "demand" && $a(Ch));
}
function Xv() {
  xt = -1;
}
function Ch() {
  ~xt && ($a(Ch), j.batchedUpdates(Eh));
}
function Eh() {
  const e = xt;
  xt = j.now();
  const t = Sh(xt);
  if ((t && (Ph(In.splice(0, t), (n) => n.handler()), (Ct -= t)), !Ct)) {
    Xv();
    return;
  }
  Uo.flush(),
    Oa.flush(e ? Math.min(64, xt - e) : 16.667),
    Fa.flush(),
    Da.flush(),
    Ua.flush();
}
function Zr() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Ct += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Ct -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Ct -= t.size),
        Ph(t, (r) => r(n) && e.add(r)),
        (Ct += e.size),
        (t = e));
    },
  };
}
function Ph(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      j.catch(r);
    }
  });
}
function _s() {}
var Zv = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  P = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function nt(e, t) {
  if (P.arr(e)) {
    if (!P.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var G = (e, t) => e.forEach(t);
function dt(e, t, n) {
  if (P.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var ze = (e) => (P.und(e) ? [] : P.arr(e) ? e : [e]);
function gr(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), G(n, t);
  }
}
var lr = (e, ...t) => gr(e, (n) => n(...t)),
  Ba = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Va,
  _h,
  At = null,
  Lh = !1,
  Ha = _s,
  e0 = (e) => {
    e.to && (_h = e.to),
      e.now && (j.now = e.now),
      e.colors !== void 0 && (At = e.colors),
      e.skipAnimation != null && (Lh = e.skipAnimation),
      e.createStringInterpolator && (Va = e.createStringInterpolator),
      e.requestAnimationFrame && j.use(e.requestAnimationFrame),
      e.batchedUpdates && (j.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Ha = e.willAdvance),
      e.frameLoop && (j.frameLoop = e.frameLoop);
  },
  vr = new Set(),
  Ae = [],
  xl = [],
  po = 0,
  $o = {
    get idle() {
      return !vr.size && !Ae.length;
    },
    start(e) {
      po > e.priority ? (vr.add(e), j.onStart(t0)) : (Th(e), j(Ls));
    },
    advance: Ls,
    sort(e) {
      if (po) j.onFrame(() => $o.sort(e));
      else {
        const t = Ae.indexOf(e);
        ~t && (Ae.splice(t, 1), Ih(e));
      }
    },
    clear() {
      (Ae = []), vr.clear();
    },
  };
function t0() {
  vr.forEach(Th), vr.clear(), j(Ls);
}
function Th(e) {
  Ae.includes(e) || Ih(e);
}
function Ih(e) {
  Ae.splice(
    n0(Ae, (t) => t.priority > e.priority),
    0,
    e
  );
}
function Ls(e) {
  const t = xl;
  for (let n = 0; n < Ae.length; n++) {
    const r = Ae[n];
    (po = r.priority), r.idle || (Ha(r), r.advance(e), r.idle || t.push(r));
  }
  return (po = 0), (xl = Ae), (xl.length = 0), (Ae = t), Ae.length > 0;
}
function n0(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var r0 = (e, t, n) => Math.min(Math.max(n, e), t),
  i0 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  We = "[-+]?\\d*\\.?\\d+",
  mo = We + "%";
function Bo(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var o0 = new RegExp("rgb" + Bo(We, We, We)),
  l0 = new RegExp("rgba" + Bo(We, We, We, We)),
  s0 = new RegExp("hsl" + Bo(We, mo, mo)),
  a0 = new RegExp("hsla" + Bo(We, mo, mo, We)),
  u0 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  c0 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  d0 = /^#([0-9a-fA-F]{6})$/,
  f0 = /^#([0-9a-fA-F]{8})$/;
function h0(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = d0.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : At && At[e] !== void 0
    ? At[e]
    : (t = o0.exec(e))
    ? ((un(t[1]) << 24) | (un(t[2]) << 16) | (un(t[3]) << 8) | 255) >>> 0
    : (t = l0.exec(e))
    ? ((un(t[1]) << 24) | (un(t[2]) << 16) | (un(t[3]) << 8) | hc(t[4])) >>> 0
    : (t = u0.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = f0.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = c0.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = s0.exec(e))
    ? (dc(fc(t[1]), xi(t[2]), xi(t[3])) | 255) >>> 0
    : (t = a0.exec(e))
    ? (dc(fc(t[1]), xi(t[2]), xi(t[3])) | hc(t[4])) >>> 0
    : null;
}
function Cl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function dc(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = Cl(i, r, e + 1 / 3),
    l = Cl(i, r, e),
    s = Cl(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(l * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function un(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function fc(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function hc(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xi(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function pc(e) {
  let t = h0(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var Fr = (e, t, n) => {
  if (P.fun(e)) return e;
  if (P.arr(e)) return Fr({ range: e, output: t, extrapolate: n });
  if (P.str(e.output[0])) return Va(e);
  const r = e,
    i = r.output,
    o = r.range || [0, 1],
    l = r.extrapolateLeft || r.extrapolate || "extend",
    s = r.extrapolateRight || r.extrapolate || "extend",
    a = r.easing || ((u) => u);
  return (u) => {
    const h = m0(u, o);
    return p0(u, o[h], o[h + 1], i[h], i[h + 1], a, l, s, r.map);
  };
};
function p0(e, t, n, r, i, o, l, s, a) {
  let u = a ? a(e) : e;
  if (u < t) {
    if (l === "identity") return u;
    l === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity") return u;
    s === "clamp" && (u = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (u = -u)
        : n === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (n - t)),
      (u = o(u)),
      r === -1 / 0
        ? (u = -u)
        : i === 1 / 0
        ? (u = u + r)
        : (u = u * (i - r) + r),
      u);
}
function m0(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var g0 =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return r0(0, 1, i / e);
    },
  go = 1.70158,
  Ci = go * 1.525,
  mc = go + 1,
  gc = (2 * Math.PI) / 3,
  vc = (2 * Math.PI) / 4.5,
  Ei = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  v0 = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => mc * e * e * e - go * e * e,
    easeOutBack: (e) => 1 + mc * Math.pow(e - 1, 3) + go * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Ci + 1) * 2 * e - Ci)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Ci + 1) * (e * 2 - 2) + Ci) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * gc),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * gc) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * vc)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * vc)) / 2 +
          1,
    easeInBounce: (e) => 1 - Ei(1 - e),
    easeOutBounce: Ei,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Ei(1 - 2 * e)) / 2 : (1 + Ei(2 * e - 1)) / 2,
    steps: g0,
  },
  Ur = Symbol.for("FluidValue.get"),
  Fn = Symbol.for("FluidValue.observers"),
  Re = (e) => !!(e && e[Ur]),
  me = (e) => (e && e[Ur] ? e[Ur]() : e),
  yc = (e) => e[Fn] || null;
function y0(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function $r(e, t) {
  const n = e[Fn];
  n &&
    n.forEach((r) => {
      y0(r, t);
    });
}
var Nh = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error("Unknown getter");
      w0(this, e);
    }
  },
  w0 = (e, t) => jh(e, Ur, t);
function ei(e, t) {
  if (e[Ur]) {
    let n = e[Fn];
    n || jh(e, Fn, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Br(e, t) {
  const n = e[Fn];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[Fn] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var jh = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Fi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  k0 =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  wc = new RegExp(`(${Fi.source})(%|[a-z]+)`, "i"),
  S0 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Vo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Rh = (e) => {
    const [t, n] = x0(e);
    if (!t || Ba()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith("--")) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && Vo.test(n)) return Rh(n);
      if (n) return n;
    }
    return e;
  },
  x0 = (e) => {
    const t = Vo.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  El,
  C0 = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  Ah = (e) => {
    El ||
      (El = At
        ? new RegExp(`(${Object.keys(At).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    const t = e.output.map((o) =>
        me(o).replace(Vo, Rh).replace(k0, pc).replace(El, pc)
      ),
      n = t.map((o) => o.match(Fi).map(Number)),
      i = n[0]
        .map((o, l) =>
          n.map((s) => {
            if (!(l in s))
              throw Error('The arity of each "output" value must be equal');
            return s[l];
          })
        )
        .map((o) => Fr({ ...e, output: o }));
    return (o) => {
      var a;
      const l =
        !wc.test(t[0]) &&
        ((a = t.find((u) => wc.test(u))) == null ? void 0 : a.replace(Fi, ""));
      let s = 0;
      return t[0].replace(Fi, () => `${i[s++](o)}${l || ""}`).replace(S0, C0);
    };
  },
  Mh = "react-spring: ",
  zh = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Mh}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  E0 = zh(console.warn);
function P0() {
  E0(`${Mh}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
zh(console.warn);
function Ho(e) {
  return (
    P.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!Ba() && Vo.test(e)) || e in (At || {}))
  );
}
var Oh = Ba() ? S.useEffect : S.useLayoutEffect,
  _0 = () => {
    const e = S.useRef(!1);
    return (
      Oh(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function L0() {
  const e = S.useState()[1],
    t = _0();
  return () => {
    t.current && e(Math.random());
  };
}
function vo(e, t) {
  const [n] = S.useState(() => ({ inputs: t, result: e() })),
    r = S.useRef(),
    i = r.current;
  let o = i;
  return (
    o
      ? (t && o.inputs && T0(t, o.inputs)) || (o = { inputs: t, result: e() })
      : (o = n),
    S.useEffect(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function T0(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var yo = (e) => S.useEffect(e, I0),
  I0 = [],
  Vr = Symbol.for("Animated:node"),
  N0 = (e) => !!e && e[Vr] === e,
  be = (e) => e && e[Vr],
  Wa = (e, t) => Zv(e, Vr, t),
  Wo = (e) => e && e[Vr] && e[Vr].getPayload(),
  Dh = class {
    constructor() {
      Wa(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  ti = class extends Dh {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        P.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new ti(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        P.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        P.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  Hr = class extends ti {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = Fr({ output: [e, e] }));
    }
    static create(e) {
      return new Hr(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (P.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = Fr({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  wo = { dependencies: null },
  Go = class extends Dh {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        dt(this.source, (n, r) => {
          N0(n)
            ? (t[r] = n.getValue(e))
            : Re(n)
            ? (t[r] = me(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && G(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return dt(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      wo.dependencies && Re(e) && wo.dependencies.add(e);
      const t = Wo(e);
      t && G(t, (n) => this.add(n));
    }
  },
  Fh = class extends Go {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Fh(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(j0)), !0);
    }
  };
function j0(e) {
  return (Ho(e) ? Hr : ti).create(e);
}
function Ts(e) {
  const t = be(e);
  return t ? t.constructor : P.arr(e) ? Fh : Ho(e) ? Hr : ti;
}
var kc = (e, t) => {
    const n = !P.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return S.forwardRef((r, i) => {
      const o = S.useRef(null),
        l =
          n &&
          S.useCallback(
            (y) => {
              o.current = M0(i, y);
            },
            [i]
          ),
        [s, a] = A0(r, t),
        u = L0(),
        h = () => {
          const y = o.current;
          if (n && !y) return;
          (y ? t.applyAnimatedValues(y, s.getValue(!0)) : !1) === !1 && u();
        },
        d = new R0(h, a),
        p = S.useRef();
      Oh(
        () => (
          (p.current = d),
          G(a, (y) => ei(y, d)),
          () => {
            p.current &&
              (G(p.current.deps, (y) => Br(y, p.current)),
              j.cancel(p.current.update));
          }
        )
      ),
        S.useEffect(h, []),
        yo(() => () => {
          const y = p.current;
          G(y.deps, (w) => Br(w, y));
        });
      const g = t.getComponentProps(s.getValue());
      return S.createElement(e, { ...g, ref: l });
    });
  },
  R0 = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && j.write(this.update);
    }
  };
function A0(e, t) {
  const n = new Set();
  return (
    (wo.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Go(e)),
    (wo.dependencies = null),
    [e, n]
  );
}
function M0(e, t) {
  return e && (P.fun(e) ? e(t) : (e.current = t)), t;
}
var Sc = Symbol.for("AnimatedComponent"),
  z0 = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new Go(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (l) => {
        const s = xc(l) || "Anonymous";
        return (
          P.str(l)
            ? (l = o[l] || (o[l] = kc(l, i)))
            : (l = l[Sc] || (l[Sc] = kc(l, i))),
          (l.displayName = `Animated(${s})`),
          l
        );
      };
    return (
      dt(e, (l, s) => {
        P.arr(e) && (s = xc(l)), (o[s] = o(l));
      }),
      { animated: o }
    );
  },
  xc = (e) =>
    P.str(e)
      ? e
      : e && P.str(e.displayName)
      ? e.displayName
      : (P.fun(e) && e.name) || null;
function Gt(e, ...t) {
  return P.fun(e) ? e(...t) : e;
}
var yr = (e, t) =>
    e === !0 || !!(t && e && (P.fun(e) ? e(t) : ze(e).includes(t))),
  Uh = (e, t) => (P.obj(e) ? t && e[t] : e),
  $h = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  O0 = (e) => e,
  Bh = (e, t = O0) => {
    let n = D0;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const o = t(e[i], i);
      P.und(o) || (r[i] = o);
    }
    return r;
  },
  D0 = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  F0 = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function U0(e) {
  const t = {};
  let n = 0;
  if (
    (dt(e, (r, i) => {
      F0[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function Vh(e) {
  const t = U0(e);
  if (t) {
    const n = { to: t };
    return dt(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function Wr(e) {
  return (
    (e = me(e)),
    P.arr(e)
      ? e.map(Wr)
      : Ho(e)
      ? Je.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function Is(e) {
  return P.fun(e) || (P.arr(e) && P.obj(e[0]));
}
var Hh = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Ns = { ...Hh.default, mass: 1, damping: 1, easing: v0.linear, clamp: !1 },
  $0 = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, Ns);
    }
  };
function B0(e, t, n) {
  n && ((n = { ...n }), Cc(n, t), (t = { ...n, ...t })),
    Cc(e, t),
    Object.assign(e, t);
  for (const l in Ns) e[l] == null && (e[l] = Ns[l]);
  let { frequency: r, damping: i } = e;
  const { mass: o } = e;
  return (
    P.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
      (e.friction = (4 * Math.PI * i * o) / r)),
    e
  );
}
function Cc(e, t) {
  if (!P.und(t.decay)) e.duration = void 0;
  else {
    const n = !P.und(t.tension) || !P.und(t.friction);
    (n || !P.und(t.frequency) || !P.und(t.damping) || !P.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var Ec = [],
  V0 = class {
    constructor() {
      (this.changed = !1),
        (this.values = Ec),
        (this.toValues = null),
        (this.fromValues = Ec),
        (this.config = new $0()),
        (this.immediate = !1);
    }
  };
function Wh(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((l, s) => {
    let a,
      u,
      h = yr(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (h) g();
    else {
      P.und(n.pause) || (i.paused = yr(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = i.paused || yr(y, t)),
        (a = Gt(n.delay || 0, t)),
        y ? (i.resumeQueue.add(p), o.pause()) : (o.resume(), p());
    }
    function d() {
      i.resumeQueue.add(p),
        i.timeouts.delete(u),
        u.cancel(),
        (a = u.time - j.now());
    }
    function p() {
      a > 0 && !Je.skipAnimation
        ? ((i.delayed = !0),
          (u = j.setTimeout(g, a)),
          i.pauseQueue.add(d),
          i.timeouts.add(u))
        : g();
    }
    function g() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(d),
        i.timeouts.delete(u),
        e <= (i.cancelId || 0) && (h = !0);
      try {
        o.start({ ...n, callId: e, cancel: h }, l);
      } catch (y) {
        s(y);
      }
    }
  });
}
var Ga = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Nn(e.get())
      : t.every((n) => n.noop)
      ? Gh(e.get())
      : He(
          e.get(),
          t.every((n) => n.finished)
        ),
  Gh = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  He = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Nn = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Qh(e, t, n, r) {
  const { callId: i, parentId: o, onRest: l } = t,
    { asyncTo: s, promise: a } = n;
  return !o && e === s && !t.reset
    ? a
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const u = Bh(t, (C, f) => (f === "onRest" ? void 0 : C));
        let h, d;
        const p = new Promise((C, f) => ((h = C), (d = f))),
          g = (C) => {
            const f =
              (i <= (n.cancelId || 0) && Nn(r)) ||
              (i !== n.asyncId && He(r, !1));
            if (f) throw ((C.result = f), d(C), C);
          },
          y = (C, f) => {
            const c = new Pc(),
              m = new _c();
            return (async () => {
              if (Je.skipAnimation)
                throw (Gr(n), (m.result = He(r, !1)), d(m), m);
              g(c);
              const k = P.obj(C) ? { ...C } : { ...f, to: C };
              (k.parentId = i),
                dt(u, (_, L) => {
                  P.und(k[L]) && (k[L] = _);
                });
              const E = await r.start(k);
              return (
                g(c),
                n.paused &&
                  (await new Promise((_) => {
                    n.resumeQueue.add(_);
                  })),
                E
              );
            })();
          };
        let w;
        if (Je.skipAnimation) return Gr(n), He(r, !1);
        try {
          let C;
          P.arr(e)
            ? (C = (async (f) => {
                for (const c of f) await y(c);
              })(e))
            : (C = Promise.resolve(e(y, r.stop.bind(r)))),
            await Promise.all([C.then(h), p]),
            (w = He(r.get(), !0, !1));
        } catch (C) {
          if (C instanceof Pc) w = C.result;
          else if (C instanceof _c) w = C.result;
          else throw C;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = o),
            (n.asyncTo = o ? s : void 0),
            (n.promise = o ? a : void 0));
        }
        return (
          P.fun(l) &&
            j.batchedUpdates(() => {
              l(w, r, r.item);
            }),
          w
        );
      })());
}
function Gr(e, t) {
  gr(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var Pc = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
    }
  },
  _c = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  js = (e) => e instanceof Qa,
  H0 = 1,
  Qa = class extends Nh {
    constructor() {
      super(...arguments), (this.id = H0++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = be(this);
      return e && e.getValue();
    }
    to(...e) {
      return Je.to(this, e);
    }
    interpolate(...e) {
      return P0(), Je.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      $r(this, { type: "change", parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || $o.sort(this),
        $r(this, { type: "priority", parent: this, priority: e });
    }
  },
  nn = Symbol.for("SpringPhase"),
  qh = 1,
  Rs = 2,
  As = 4,
  Pl = (e) => (e[nn] & qh) > 0,
  pt = (e) => (e[nn] & Rs) > 0,
  Zn = (e) => (e[nn] & As) > 0,
  Lc = (e, t) => (t ? (e[nn] |= Rs | qh) : (e[nn] &= ~Rs)),
  Tc = (e, t) => (t ? (e[nn] |= As) : (e[nn] &= ~As)),
  W0 = class extends Qa {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new V0()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !P.und(e) || !P.und(t))
      ) {
        const n = P.obj(e) ? { ...e } : { ...t, from: e };
        P.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(pt(this) || this._state.asyncTo) || Zn(this);
    }
    get goal() {
      return me(this.animation.to);
    }
    get velocity() {
      const e = be(this);
      return e instanceof ti
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return Pl(this);
    }
    get isAnimating() {
      return pt(this);
    }
    get isPaused() {
      return Zn(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: o } = r,
        l = Wo(r.to);
      !l && Re(r.to) && (i = ze(me(r.to))),
        r.values.forEach((u, h) => {
          if (u.done) return;
          const d = u.constructor == Hr ? 1 : l ? l[h].lastPosition : i[h];
          let p = r.immediate,
            g = d;
          if (!p) {
            if (((g = u.lastPosition), o.tension <= 0)) {
              u.done = !0;
              return;
            }
            let y = (u.elapsedTime += e);
            const w = r.fromValues[h],
              C =
                u.v0 != null
                  ? u.v0
                  : (u.v0 = P.arr(o.velocity) ? o.velocity[h] : o.velocity);
            let f;
            const c =
              o.precision ||
              (w == d ? 0.005 : Math.min(1, Math.abs(d - w) * 0.001));
            if (P.und(o.duration))
              if (o.decay) {
                const m = o.decay === !0 ? 0.998 : o.decay,
                  k = Math.exp(-(1 - m) * y);
                (g = w + (C / (1 - m)) * (1 - k)),
                  (p = Math.abs(u.lastPosition - g) <= c),
                  (f = C * k);
              } else {
                f = u.lastVelocity == null ? C : u.lastVelocity;
                const m = o.restVelocity || c / 10,
                  k = o.clamp ? 0 : o.bounce,
                  E = !P.und(k),
                  _ = w == d ? u.v0 > 0 : w < d;
                let L,
                  N = !1;
                const O = 1,
                  R = Math.ceil(e / O);
                for (
                  let H = 0;
                  H < R &&
                  ((L = Math.abs(f) > m),
                  !(!L && ((p = Math.abs(d - g) <= c), p)));
                  ++H
                ) {
                  E &&
                    ((N = g == d || g > d == _), N && ((f = -f * k), (g = d)));
                  const Le = -o.tension * 1e-6 * (g - d),
                    Te = -o.friction * 0.001 * f,
                    ni = (Le + Te) / o.mass;
                  (f = f + ni * O), (g = g + f * O);
                }
              }
            else {
              let m = 1;
              o.duration > 0 &&
                (this._memoizedDuration !== o.duration &&
                  ((this._memoizedDuration = o.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = o.duration * u.durationProgress),
                    (y = u.elapsedTime += e))),
                (m = (o.progress || 0) + y / this._memoizedDuration),
                (m = m > 1 ? 1 : m < 0 ? 0 : m),
                (u.durationProgress = m)),
                (g = w + o.easing(m) * (d - w)),
                (f = (g - u.lastPosition) / e),
                (p = m == 1);
            }
            (u.lastVelocity = f),
              Number.isNaN(g) &&
                (console.warn("Got NaN while animating:", this), (p = !0));
          }
          l && !l[h].done && (p = !1),
            p ? (u.done = !0) : (t = !1),
            u.setValue(g, o.round) && (n = !0);
        });
      const s = be(this),
        a = s.getValue();
      if (t) {
        const u = me(r.to);
        (a !== u || n) && !o.decay
          ? (s.setValue(u), this._onChange(u))
          : n && o.decay && this._onChange(a),
          this._stop();
      } else n && this._onChange(a);
    }
    set(e) {
      return (
        j.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (pt(this)) {
        const { to: e, config: t } = this.animation;
        j.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        P.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [P.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => Ga(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        Gr(this._state, e && this._lastCallId),
        j.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == "change"
        ? this._start()
        : e.type == "priority" && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || "";
      let { to: n, from: r } = e;
      (n = P.obj(n) ? n[t] : n),
        (n == null || Is(n)) && (n = void 0),
        (r = P.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        Pl(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = me(r)),
          P.und(r) ? be(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Bh(e, (l, s) => (/^on/.test(s) ? Uh(l, n) : l))
        ),
        Nc(this, e, "onProps"),
        tr(this, "onProps", e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      const o = this._state;
      return Wh(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: o,
        actions: {
          pause: () => {
            Zn(this) ||
              (Tc(this, !0),
              lr(o.pauseQueue),
              tr(this, "onPause", He(this, er(this, this.animation.to)), this));
          },
          resume: () => {
            Zn(this) &&
              (Tc(this, !1),
              pt(this) && this._resume(),
              lr(o.resumeQueue),
              tr(
                this,
                "onResume",
                He(this, er(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((l) => {
        if (e.loop && l.finished && !(t && l.noop)) {
          const s = Jh(e);
          if (s) return this._update(s, !0);
        }
        return l;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Nn(this));
      const r = !P.und(e.to),
        i = !P.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Nn(this));
      const { key: o, defaultProps: l, animation: s } = this,
        { to: a, from: u } = s;
      let { to: h = a, from: d = u } = e;
      i && !r && (!t.default || P.und(h)) && (h = d),
        t.reverse && ([h, d] = [d, h]);
      const p = !nt(d, u);
      p && (s.from = d), (d = me(d));
      const g = !nt(h, a);
      g && this._focus(h);
      const y = Is(t.to),
        { config: w } = s,
        { decay: C, velocity: f } = w;
      (r || i) && (w.velocity = 0),
        t.config &&
          !y &&
          B0(
            w,
            Gt(t.config, o),
            t.config !== l.config ? Gt(l.config, o) : void 0
          );
      let c = be(this);
      if (!c || P.und(h)) return n(He(this, !0));
      const m = P.und(t.reset) ? i && !t.default : !P.und(d) && yr(t.reset, o),
        k = m ? d : this.get(),
        E = Wr(h),
        _ = P.num(E) || P.arr(E) || Ho(E),
        L = !y && (!_ || yr(l.immediate || t.immediate, o));
      if (g) {
        const H = Ts(h);
        if (H !== c.constructor)
          if (L) c = this._set(E);
          else
            throw Error(
              `Cannot animate between ${c.constructor.name} and ${H.name}, as the "to" prop suggests`
            );
      }
      const N = c.constructor;
      let O = Re(h),
        R = !1;
      if (!O) {
        const H = m || (!Pl(this) && p);
        (g || H) && ((R = nt(Wr(k), E)), (O = !R)),
          ((!nt(s.immediate, L) && !L) ||
            !nt(w.decay, C) ||
            !nt(w.velocity, f)) &&
            (O = !0);
      }
      if (
        (R && pt(this) && (s.changed && !m ? (O = !0) : O || this._stop(a)),
        !y &&
          ((O || Re(a)) &&
            ((s.values = c.getPayload()),
            (s.toValues = Re(h) ? null : N == Hr ? [1] : ze(E))),
          s.immediate != L && ((s.immediate = L), !L && !m && this._set(a)),
          O))
      ) {
        const { onRest: H } = s;
        G(G0, (Te) => Nc(this, t, Te));
        const Le = He(this, er(this, a));
        lr(this._pendingCalls, Le),
          this._pendingCalls.add(n),
          s.changed &&
            j.batchedUpdates(() => {
              var Te;
              (s.changed = !m),
                H == null || H(Le, this),
                m
                  ? Gt(l.onRest, Le)
                  : (Te = s.onStart) == null || Te.call(s, Le, this);
            });
      }
      m && this._set(k),
        y
          ? n(Qh(t.to, t, this._state, this))
          : O
          ? this._start()
          : pt(this) && !g
          ? this._pendingCalls.add(n)
          : n(Gh(k));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (yc(this) && this._detach(), (t.to = e), yc(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Re(t) && (ei(t, this), js(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Re(e) && Br(e, this);
    }
    _set(e, t = !0) {
      const n = me(e);
      if (!P.und(n)) {
        const r = be(this);
        if (!r || !nt(n, r.getValue())) {
          const i = Ts(n);
          !r || r.constructor != i ? Wa(this, i.create(n)) : r.setValue(n),
            r &&
              j.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return be(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), tr(this, "onStart", He(this, er(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), Gt(this.animation.onChange, e, this)),
        Gt(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      be(this).reset(me(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        pt(this) || (Lc(this, !0), Zn(this) || this._resume());
    }
    _resume() {
      Je.skipAnimation ? this.finish() : $o.start(this);
    }
    _stop(e, t) {
      if (pt(this)) {
        Lc(this, !1);
        const n = this.animation;
        G(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          $r(this, { type: "idle", parent: this });
        const r = t ? Nn(this.get()) : He(this.get(), er(this, e ?? n.to));
        lr(this._pendingCalls, r),
          n.changed && ((n.changed = !1), tr(this, "onRest", r, this));
      }
    }
  };
function er(e, t) {
  const n = Wr(t),
    r = Wr(e.get());
  return nt(r, n);
}
function Jh(e, t = e.loop, n = e.to) {
  const r = Gt(t);
  if (r) {
    const i = r !== !0 && Vh(r),
      o = (i || e).reverse,
      l = !i || i.reset;
    return Ms({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || Is(n) ? n : void 0,
      from: l ? e.from : void 0,
      reset: l,
      ...i,
    });
  }
}
function Ms(e) {
  const { to: t, from: n } = (e = Vh(e)),
    r = new Set();
  return (
    P.obj(t) && Ic(t, r),
    P.obj(n) && Ic(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function Ic(e, t) {
  dt(e, (n, r) => n != null && t.add(r));
}
var G0 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Nc(e, t, n) {
  e.animation[n] = t[n] !== $h(t, n) ? Uh(t[n], e.key) : void 0;
}
function tr(e, t, ...n) {
  var r, i, o, l;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (l = (o = e.defaultProps)[t]) == null || l.call(o, ...n);
}
var Q0 = ["onStart", "onChange", "onRest"],
  q0 = 1,
  Kh = class {
    constructor(e, t) {
      (this.id = q0++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        P.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(Ms(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = ze(e).map(Ms)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (bh(this, t), J0(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        G(ze(t), (r) => n[r].stop(!!e));
      } else Gr(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (P.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        G(ze(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (P.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        G(ze(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      dt(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        gr(e, ([s, a]) => {
          (a.value = this.get()), s(a, this, this._item);
        }));
      const o = !r && this._started,
        l = i || (o && n.size) ? this.get() : null;
      i &&
        t.size &&
        gr(t, ([s, a]) => {
          (a.value = l), s(a, this, this._item);
        }),
        o &&
          ((this._started = !1),
          gr(n, ([s, a]) => {
            (a.value = l), s(a, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      j.onFrame(this._onFrame);
    }
  };
function J0(e, t) {
  return Promise.all(t.map((n) => Yh(e, n))).then((n) => Ga(e, n));
}
async function Yh(e, t, n) {
  const { keys: r, to: i, from: o, loop: l, onRest: s, onResolve: a } = t,
    u = P.obj(t.default) && t.default;
  l && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const h = P.arr(i) || P.fun(i) ? i : void 0;
  h
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : G(Q0, (w) => {
        const C = t[w];
        if (P.fun(C)) {
          const f = e._events[w];
          (t[w] = ({ finished: c, cancelled: m }) => {
            const k = f.get(C);
            k
              ? (c || (k.finished = !1), m && (k.cancelled = !0))
              : f.set(C, {
                  value: null,
                  finished: c || !1,
                  cancelled: m || !1,
                });
          }),
            u && (u[w] = t[w]);
        }
      });
  const d = e._state;
  t.pause === !d.paused
    ? ((d.paused = t.pause), lr(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0);
  const p = (r || Object.keys(e.springs)).map((w) => e.springs[w].start(t)),
    g = t.cancel === !0 || $h(t, "cancel") === !0;
  (h || (g && d.asyncId)) &&
    p.push(
      Wh(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: _s,
          resume: _s,
          start(w, C) {
            g
              ? (Gr(d, e._lastAsyncId), C(Nn(e)))
              : ((w.onRest = s), C(Qh(h, w, d, e)));
          },
        },
      })
    ),
    d.paused &&
      (await new Promise((w) => {
        d.resumeQueue.add(w);
      }));
  const y = Ga(e, await Promise.all(p));
  if (l && y.finished && !(n && y.noop)) {
    const w = Jh(t, l, i);
    if (w) return bh(e, [w]), Yh(e, w, !0);
  }
  return a && j.batchedUpdates(() => a(y, e, e.item)), y;
}
function K0(e, t) {
  const n = new W0();
  return (n.key = e), t && ei(n, t), n;
}
function Y0(e, t, n) {
  t.keys &&
    G(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function bh(e, t) {
  G(t, (n) => {
    Y0(e.springs, n, (r) => K0(r, e));
  });
}
var qa = ({ children: e, ...t }) => {
    const n = S.useContext(ko),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = vo(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: o } = ko;
    return S.createElement(o, { value: t }, e);
  },
  ko = b0(qa, {});
qa.Provider = ko.Provider;
qa.Consumer = ko.Consumer;
function b0(e, t) {
  return (
    Object.assign(e, S.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var X0 = class extends Qa {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = Fr(...t));
    const n = this._get(),
      r = Ts(n);
    Wa(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    nt(t, n) || (be(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && jc(this._active) && _l(this);
  }
  _get() {
    const e = P.arr(this.source) ? this.source.map(me) : ze(me(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !jc(this._active) &&
      ((this.idle = !1),
      G(Wo(this), (e) => {
        e.done = !1;
      }),
      Je.skipAnimation
        ? (j.batchedUpdates(() => this.advance()), _l(this))
        : $o.start(this));
  }
  _attach() {
    let e = 1;
    G(ze(this.source), (t) => {
      Re(t) && ei(t, this),
        js(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    G(ze(this.source), (e) => {
      Re(e) && Br(e, this);
    }),
      this._active.clear(),
      _l(this);
  }
  eventObserved(e) {
    e.type == "change"
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == "idle"
      ? this._active.delete(e.parent)
      : e.type == "priority" &&
        (this.priority = ze(this.source).reduce(
          (t, n) => Math.max(t, (js(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function Z0(e) {
  return e.idle !== !1;
}
function jc(e) {
  return !e.size || Array.from(e).every(Z0);
}
function _l(e) {
  e.idle ||
    ((e.idle = !0),
    G(Wo(e), (t) => {
      t.done = !0;
    }),
    $r(e, { type: "idle", parent: e }));
}
Je.assign({ createStringInterpolator: Ah, to: (e, t) => new X0(e, t) });
var Xh = /^--/;
function ey(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Xh.test(e) &&
      !(wr.hasOwnProperty(e) && wr[e])
    ? t + "px"
    : ("" + t).trim();
}
var Rc = {};
function ty(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: i,
      scrollTop: o,
      scrollLeft: l,
      viewBox: s,
      ...a
    } = t,
    u = Object.values(a),
    h = Object.keys(a).map((d) =>
      n || e.hasAttribute(d)
        ? d
        : Rc[d] || (Rc[d] = d.replace(/([A-Z])/g, (p) => "-" + p.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const p = ey(d, r[d]);
      Xh.test(d) ? e.style.setProperty(d, p) : (e.style[d] = p);
    }
  h.forEach((d, p) => {
    e.setAttribute(d, u[p]);
  }),
    o !== void 0 && (e.scrollTop = o),
    l !== void 0 && (e.scrollLeft = l),
    s !== void 0 && e.setAttribute("viewBox", s);
}
var wr = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ny = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  ry = ["Webkit", "Ms", "Moz", "O"];
wr = Object.keys(wr).reduce(
  (e, t) => (ry.forEach((n) => (e[ny(n, t)] = e[t])), e),
  wr
);
var iy = /^(matrix|translate|scale|rotate|skew)/,
  oy = /^(translate)/,
  ly = /^(rotate|skew)/,
  Ll = (e, t) => (P.num(e) && e !== 0 ? e + t : e),
  Ui = (e, t) =>
    P.arr(e)
      ? e.every((n) => Ui(n, t))
      : P.num(e)
      ? e === t
      : parseFloat(e) === t,
  sy = class extends Go {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        o = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        o.push((l) => [
          `translate3d(${l.map((s) => Ll(s, "px")).join(",")})`,
          Ui(l, 0),
        ])),
        dt(r, (l, s) => {
          if (s === "transform")
            i.push([l || ""]), o.push((a) => [a, a === ""]);
          else if (iy.test(s)) {
            if ((delete r[s], P.und(l))) return;
            const a = oy.test(s) ? "px" : ly.test(s) ? "deg" : "";
            i.push(ze(l)),
              o.push(
                s === "rotate3d"
                  ? ([u, h, d, p]) => [
                      `rotate3d(${u},${h},${d},${Ll(p, a)})`,
                      Ui(p, 0),
                    ]
                  : (u) => [
                      `${s}(${u.map((h) => Ll(h, a)).join(",")})`,
                      Ui(u, s.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new ay(i, o)),
        super(r);
    }
  },
  ay = class extends Nh {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = "",
        t = !0;
      return (
        G(this.inputs, (n, r) => {
          const i = me(n[0]),
            [o, l] = this.transforms[r](P.arr(i) ? i : n.map(me));
          (e += " " + o), (t = t && l);
        }),
        t ? "none" : e
      );
    }
    observerAdded(e) {
      e == 1 && G(this.inputs, (t) => G(t, (n) => Re(n) && ei(n, this)));
    }
    observerRemoved(e) {
      e == 0 && G(this.inputs, (t) => G(t, (n) => Re(n) && Br(n, this)));
    }
    eventObserved(e) {
      e.type == "change" && (this._value = null), $r(this, e);
    }
  },
  uy = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
Je.assign({
  batchedUpdates: bf.unstable_batchedUpdates,
  createStringInterpolator: Ah,
  colors: i0,
});
var cy = z0(uy, {
    applyAnimatedValues: ty,
    createAnimatedStyle: (e) => new sy(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  zs = cy.animated,
  Os = S.createContext(null);
function Tl(e) {
  return e ? "scrollLeft" : "scrollTop";
}
function Ds(e, t) {
  const n = (r) => (r.type ? r.type === S.Fragment : r === S.Fragment);
  return S.Children.map(e, (r) => (n(r) ? Ds(r.props.children, t) : t(r)));
}
var Ac = "translate3d(0px,0px,0px)",
  Pi = "translate(0px,0px)",
  Ie = S.memo(
    S.forwardRef(
      (
        {
          horizontal: e,
          factor: t = 1,
          offset: n = 0,
          speed: r = 0,
          sticky: i,
          ...o
        },
        l
      ) => {
        const s = S.useContext(Os),
          a = vo(() => {
            let g;
            if (i) g = (i.start || 0) * s.space;
            else {
              const y = Math.floor(n) * s.space,
                w = s.space * n + y * r;
              g = -(s.current * r) + w;
            }
            return new Kh({ space: i ? s.space : s.space * t, translate: g });
          }, []),
          u = vo(
            () => ({
              horizontal: e === void 0 || i ? s.horizontal : e,
              sticky: void 0,
              isSticky: !1,
              setPosition(g, y, w = !1) {
                if (i) d(g, y);
                else {
                  const C = Math.floor(n) * g,
                    f = g * n + C * r;
                  a.start({
                    translate: -(y * r) + f,
                    config: s.config,
                    immediate: w,
                  });
                }
              },
              setHeight(g, y = !1) {
                a.start({
                  space: i ? g : g * t,
                  config: s.config,
                  immediate: y,
                });
              },
            }),
            []
          );
        yo(() => {
          if (i) {
            const g = i.start || 0,
              y = i.end || g + 1;
            u.sticky = { start: g, end: y };
          }
        }),
          S.useImperativeHandle(l, () => u);
        const h = S.useRef(),
          d = (g, y) => {
            const w = u.sticky.start * g,
              C = u.sticky.end * g,
              f = y >= w && y <= C;
            if (f === u.isSticky) return;
            u.isSticky = f;
            const c = h.current;
            (c.style.position = f ? "sticky" : "absolute"),
              a.set({ translate: f ? 0 : y < w ? w : C });
          };
        yo(() => {
          if (s)
            return (
              s.layers.add(u),
              s.update(),
              () => {
                s.layers.delete(u), s.update();
              }
            );
        });
        const p = a.springs.translate.to(
          u.horizontal
            ? (g) => `translate3d(${g}px,0,0)`
            : (g) => `translate3d(0,${g}px,0)`
        );
        return S.createElement(zs.div, {
          ...o,
          ref: h,
          style: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
            [u.horizontal ? "height" : "width"]: "100%",
            [u.horizontal ? "width" : "height"]: a.springs.space,
            WebkitTransform: p,
            msTransform: p,
            transform: p,
            ...o.style,
          },
        });
      }
    )
  ),
  dy = S.memo(
    S.forwardRef((e, t) => {
      const [n, r] = S.useState(!1),
        {
          pages: i,
          innerStyle: o,
          config: l = Hh.slow,
          enabled: s = !0,
          horizontal: a = !1,
          children: u,
          ...h
        } = e,
        d = S.useRef(),
        p = S.useRef(),
        g = vo(
          () => ({
            config: l,
            horizontal: a,
            busy: !1,
            space: 0,
            current: 0,
            offset: 0,
            controller: new Kh({ scroll: 0 }),
            layers: new Set(),
            container: d,
            content: p,
            update: () => y(),
            scrollTo: (c) => w(c),
            stop: () => g.controller.stop(),
          }),
          []
        );
      S.useEffect(() => {
        g.config = l;
      }, [l]),
        S.useImperativeHandle(t, () => g);
      const y = () => {
          const c = d.current;
          if (!c) return;
          const m = a ? "clientWidth" : "clientHeight";
          g.space = c[m];
          const k = Tl(a);
          s ? (g.current = c[k]) : (c[k] = g.current = g.offset * g.space);
          const E = p.current;
          if (E) {
            const _ = a ? "width" : "height";
            E.style[_] = `${g.space * i}px`;
          }
          g.layers.forEach((_) => {
            _.setHeight(g.space, !0), _.setPosition(g.space, g.current, !0);
          });
        },
        w = (c) => {
          const m = d.current,
            k = Tl(a);
          (g.offset = c),
            g.controller.set({ scroll: g.current }),
            g.controller.stop().start({
              scroll: c * g.space,
              config: l,
              onChange({ value: { scroll: E } }) {
                m[k] = E;
              },
            });
        },
        C = (c) => {
          g.busy ||
            ((g.busy = !0),
            (g.current = c.target[Tl(a)]),
            j.onStart(() => {
              g.layers.forEach((m) => m.setPosition(g.space, g.current)),
                (g.busy = !1);
            }));
        };
      S.useEffect(() => g.update()),
        yo(() => {
          r(!0);
          const c = () => {
            const m = () => g.update();
            j.onFrame(m), setTimeout(m, 150);
          };
          return (
            window.addEventListener("resize", c, !1),
            () => window.removeEventListener("resize", c, !1)
          );
        });
      const f = s
        ? {
            overflowY: a ? "hidden" : "scroll",
            overflowX: a ? "scroll" : "hidden",
          }
        : { overflowY: "hidden", overflowX: "hidden" };
      return S.createElement(
        zs.div,
        {
          ...h,
          ref: d,
          onScroll: C,
          onWheel: s ? g.stop : void 0,
          onTouchStart: s ? g.stop : void 0,
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            ...f,
            WebkitOverflowScrolling: "touch",
            WebkitTransform: Pi,
            msTransform: Pi,
            transform: Ac,
            ...h.style,
          },
        },
        n &&
          S.createElement(
            S.Fragment,
            null,
            S.createElement(
              zs.div,
              {
                ref: p,
                style: {
                  overflow: "hidden",
                  position: "absolute",
                  [a ? "height" : "width"]: "100%",
                  [a ? "width" : "height"]: g.space * i,
                  WebkitTransform: Pi,
                  msTransform: Pi,
                  transform: Ac,
                  ...e.innerStyle,
                },
              },
              S.createElement(
                Os.Provider,
                { value: g },
                Ds(u, (c) => !c.props.sticky && c)
              )
            ),
            S.createElement(
              Os.Provider,
              { value: g },
              Ds(u, (c) => c.props.sticky && c)
            )
          )
      );
    })
  );
function fy() {
  return v.jsx("div", {
    children: v.jsx("div", {
      className: "Name-center",
      children: v.jsxs("div", {
        className: "container",
        children: [
          v.jsx("div", { className: "neon", children: "Hello!" }),
          v.jsx("div", { className: "flux", children: "I'm MATHIEU" }),
        ],
      }),
    }),
  });
}
function hy() {
  const e = (t) => {
    const n = document.getElementById(t);
    n && n.scrollIntoView({ behavior: "smooth" });
  };
  return v.jsxs("div", {
    className: "TopBar",
    children: [
      v.jsx("div", {
        className: "Name",
        children: v.jsx("a", {
          href: "/",
          children: v.jsx("h1", { children: "Mathieu Ponton" }),
        }),
      }),
      v.jsxs("div", {
        className: "NavBarDiv",
        children: [
          v.jsx("span", {
            className: "TopBarLink",
            onClick: () => e("LandingPage"),
            children: "Home",
          }),
          v.jsx("span", {
            className: "TopBarLink",
            children: v.jsx("a", {
              href: "https://github.com/Claquettes",
              target: "_blank",
              children: "Github",
            }),
          }),
          v.jsx(ac, {
            to: "https://www.linkedin.com/in/mathieu-ponton/",
            children: v.jsx("span", {
              className: "TopBarLink",
              children: "Linkedin",
            }),
          }),
          v.jsx(ac, {
            to: "https://www.linkedin.com/in/mathieu-ponton/overlay/1635518664594/single-media-viewer/?profileId=ACoAADOJ2fUBvelmwOJb_f5vHvyX8em8_iQ27Xs",
            children: v.jsx("span", {
              className: "TopBarLink",
              children: "Resume",
            }),
          }),
        ],
      }),
    ],
  });
}
const py = "assets/wptop1-62e69f70.png",
  my = "assets/wptwo-fc5c1e5c.png",
  gy = "assets/side-aaf5b3a0.png",
  vy = "assets/portrait-1ab754ec.png",
  yy = "assets/bikes2-6c03b1e5.png",
  wy = "assets/lamp-b0f10597.png";
function Mc() {
  return v.jsx("div", {
    children: v.jsx("div", {
      children: v.jsxs(dy, {
        pages: 10,
        children: [
          v.jsx(Ie, {
            offset: 0,
            speed: 0.005,
            factor: 1,
            style: { zIndex: 10 },
            children: v.jsx(hy, {}),
          }),
          v.jsx(Ie, {
            offset: 0,
            speed: 0.7,
            factor: 1,
            style: {
              zIndex: -10,
              backgroundImage: `url(${py})`,
              backgroundSize: "fill",
              backgroundPosition: "right",
              marginTop: "-12%",
            },
          }),
          v.jsx(Ie, {
            offset: 0,
            speed: 1.5,
            factor: 1.2,
            style: { zIndex: "9", marginTop: "-5%", marginLeft: "-15%" },
            children: v.jsx("div", {
              className: "NameTitle",
              children: v.jsx("section", {
                className: "LandingPage",
                children: v.jsx(fy, {}),
              }),
            }),
          }),
          v.jsx(Ie, {
            offset: 0.7,
            speed: 0.5,
            factor: 1.2,
            style: {
              zIndex: -1,
              backgroundImage: `url(${vy})`,
              backgroundSize: "contain",
              backgroundPosition: "right",
            },
          }),
          v.jsx(Ie, {
            offset: 0.6,
            speed: 1,
            factor: 1,
            style: {
              zIndex: -1,
              backgroundImage: `url(${yy})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
            },
          }),
          v.jsx(Ie, {
            offset: 0.25,
            speed: 3.5,
            factor: 0.35,
            style: {
              zIndex: 3,
              backgroundImage: `url(${gy})`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              marginLeft: "-10%",
            },
          }),
          v.jsx(Ie, {
            offset: 0.51,
            speed: 1.2,
            factor: 1,
            style: {
              zIndex: -1,
              backgroundImage: `url(${my})`,
              backgroundSize: "fill",
              backgroundPosition: "right",
            },
          }),
          v.jsx(Ie, {
            offset: 0.8,
            speed: 2,
            factor: 1,
            style: { zIndex: 1, marginTop: "-5%" },
            children: v.jsx("section", {
              className: "aboutme",
              id: "aboutme",
              children: v.jsx(kh, {}),
            }),
          }),
          v.jsx(Ie, {
            offset: 0.99,
            speed: 1.5,
            factor: 1,
            style: { zIndex: 1 },
            children: v.jsx(Kv, {}),
          }),
          v.jsx(Ie, {
            offset: 0.8,
            speed: 3.5,
            factor: 1.5,
            style: {
              zIndex: -5,
              backgroundImage: `url(${wy})`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              filter: "blur(1px)",
              boxShadow: "0px 0px 20px 20px rgba(0,0,0,0.75)",
            },
          }),
          v.jsx(Ie, {
            offset: 1,
            speed: 2.1,
            factor: 106,
            style: { zIndex: 1, marginTop: "-55%" },
            children: v.jsx("section", {
              className: "projects",
              id: "projects",
              children: v.jsx(wh, {}),
            }),
          }),
          v.jsx(Ie, { offset: 25, speed: 2.5, factor: 1 }),
        ],
      }),
    }),
  });
}
const ky = () => v.jsx("div", { children: "This is the Other page." });
function Sy() {
  return v.jsx(kv, {
    children: v.jsxs(pv, {
      children: [
        v.jsx(cn, { path: "/", element: v.jsx(Mc, {}) }),
        v.jsx(cn, { path: "/OtherPage", element: v.jsx(ky, {}) }),
        v.jsx(cn, { path: "/AboutMePage", element: v.jsx(kh, {}) }),
        v.jsx(cn, { path: "/Projects", element: v.jsx(wh, {}) }),
        v.jsx(cn, {
          path: "*",
          element: v.jsx("div", { children: v.jsx(Mc, {}) }),
        }),
      ],
    }),
  });
}
Il.createRoot(document.getElementById("root")).render(
  v.jsx(Gc.StrictMode, { children: v.jsx(Sy, {}) })
);
