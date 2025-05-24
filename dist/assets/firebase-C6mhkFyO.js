import { o as Un, _ as je } from './vendor-DRc0kkrK.js';
const Fn = () => {};
var ct = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nt = function (n) {
    const e = [];
    let t = 0;
    for (let r = 0; r < n.length; r++) {
      let i = n.charCodeAt(r);
      i < 128
        ? (e[t++] = i)
        : i < 2048
          ? ((e[t++] = (i >> 6) | 192), (e[t++] = (i & 63) | 128))
          : (i & 64512) === 55296 &&
              r + 1 < n.length &&
              (n.charCodeAt(r + 1) & 64512) === 56320
            ? ((i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
              (e[t++] = (i >> 18) | 240),
              (e[t++] = ((i >> 12) & 63) | 128),
              (e[t++] = ((i >> 6) & 63) | 128),
              (e[t++] = (i & 63) | 128))
            : ((e[t++] = (i >> 12) | 224),
              (e[t++] = ((i >> 6) & 63) | 128),
              (e[t++] = (i & 63) | 128));
    }
    return e;
  },
  xn = function (n) {
    const e = [];
    let t = 0,
      r = 0;
    for (; t < n.length; ) {
      const i = n[t++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = n[t++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = n[t++],
          o = n[t++],
          a = n[t++],
          c =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (c >> 10))),
          (e[r++] = String.fromCharCode(56320 + (c & 1023)));
      } else {
        const s = n[t++],
          o = n[t++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join('');
  },
  Dt = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(n, e) {
      if (!Array.isArray(n))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < n.length; i += 3) {
        const s = n[i],
          o = i + 1 < n.length,
          a = o ? n[i + 1] : 0,
          c = i + 2 < n.length,
          l = c ? n[i + 2] : 0,
          d = s >> 2,
          h = ((s & 3) << 4) | (a >> 4);
        let p = ((a & 15) << 2) | (l >> 6),
          y = l & 63;
        c || ((y = 64), o || (p = 64)), r.push(t[d], t[h], t[p], t[y]);
      }
      return r.join('');
    },
    encodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(n)
        : this.encodeByteArray(Nt(n), e);
    },
    decodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(n)
        : xn(this.decodeStringToByteArray(n, e));
    },
    decodeStringToByteArray(n, e) {
      this.init_();
      const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < n.length; ) {
        const s = t[n.charAt(i++)],
          a = i < n.length ? t[n.charAt(i)] : 0;
        ++i;
        const l = i < n.length ? t[n.charAt(i)] : 64;
        ++i;
        const h = i < n.length ? t[n.charAt(i)] : 64;
        if ((++i, s == null || a == null || l == null || h == null))
          throw new Hn();
        const p = (s << 2) | (a >> 4);
        if ((r.push(p), l !== 64)) {
          const y = ((a << 4) & 240) | (l >> 2);
          if ((r.push(y), h !== 64)) {
            const j = ((l << 6) & 192) | h;
            r.push(j);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  };
class Hn extends Error {
  constructor() {
    super(...arguments), (this.name = 'DecodeBase64StringError');
  }
}
const Bn = function (n) {
    const e = Nt(n);
    return Dt.encodeByteArray(e, !0);
  },
  Lt = function (n) {
    return Bn(n).replace(/\./g, '');
  },
  Mt = function (n) {
    try {
      return Dt.decodeString(n, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $n() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof global < 'u') return global;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vn = () => $n().__FIREBASE_DEFAULTS__,
  Wn = () => {
    if (typeof process > 'u' || typeof ct > 'u') return;
    const n = ct.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  jn = () => {
    if (typeof document > 'u') return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = n && Mt(n[1]);
    return e && JSON.parse(e);
  },
  ze = () => {
    try {
      return Fn() || Vn() || Wn() || jn();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  zn = n => {
    var e, t;
    return (t =
      (e = ze()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || t === void 0
      ? void 0
      : t[n];
  },
  Ut = () => {
    var n;
    return (n = ze()) === null || n === void 0 ? void 0 : n.config;
  },
  Ft = n => {
    var e;
    return (e = ze()) === null || e === void 0 ? void 0 : e[`_${n}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      }));
  }
  wrapCallback(e) {
    return (t, r) => {
      t ? this.reject(t) : this.resolve(r),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function g() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function Kn() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())
  );
}
function qn() {
  return typeof navigator < 'u' && navigator.userAgent === 'Cloudflare-Workers';
}
function Jn() {
  const n =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof n == 'object' && n.id !== void 0;
}
function Yn() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Xn() {
  const n = g();
  return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function Qn() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function Zn() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const r = 'validate-browser-context-for-indexeddb-analytics-module',
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (i.onupgradeneeded = () => {
          t = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ''
          );
        });
    } catch (t) {
      e(t);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const er = 'FirebaseError';
class O extends Error {
  constructor(e, t, r) {
    super(t),
      (this.code = e),
      (this.customData = r),
      (this.name = er),
      Object.setPrototypeOf(this, O.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, se.prototype.create);
  }
}
class se {
  constructor(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  create(e, ...t) {
    const r = t[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? tr(s, r) : 'Error',
      a = `${this.serviceName}: ${o} (${i}).`;
    return new O(i, a, r);
  }
}
function tr(n, e) {
  return n.replace(nr, (t, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const nr = /\{\$([^}]+)}/g;
function rr(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
function q(n, e) {
  if (n === e) return !0;
  const t = Object.keys(n),
    r = Object.keys(e);
  for (const i of t) {
    if (!r.includes(i)) return !1;
    const s = n[i],
      o = e[i];
    if (lt(s) && lt(o)) {
      if (!q(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!t.includes(i)) return !1;
  return !0;
}
function lt(n) {
  return n !== null && typeof n == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oe(n) {
  const e = [];
  for (const [t, r] of Object.entries(n))
    Array.isArray(r)
      ? r.forEach(i => {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(r));
  return e.length ? '&' + e.join('&') : '';
}
function Z(n) {
  const e = {};
  return (
    n
      .replace(/^\?/, '')
      .split('&')
      .forEach(r => {
        if (r) {
          const [i, s] = r.split('=');
          e[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    e
  );
}
function ee(n) {
  const e = n.indexOf('?');
  if (!e) return '';
  const t = n.indexOf('#', e);
  return n.substring(e, t > 0 ? t : void 0);
}
function ir(n, e) {
  const t = new sr(n, e);
  return t.subscribe.bind(t);
}
class sr {
  constructor(e, t) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch(r => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver(t => {
      t.next(e);
    });
  }
  error(e) {
    this.forEachObserver(t => {
      t.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver(e => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, t, r) {
    let i;
    if (e === void 0 && t === void 0 && r === void 0)
      throw new Error('Missing Observer.');
    or(e, ['next', 'error', 'complete'])
      ? (i = e)
      : (i = { next: e, error: t, complete: r }),
      i.next === void 0 && (i.next = De),
      i.error === void 0 && (i.error = De),
      i.complete === void 0 && (i.complete = De);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (r) {
          typeof console < 'u' && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function or(n, e) {
  if (typeof n != 'object' || n === null) return !1;
  for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
  return !1;
}
function De() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(n) {
  return n && n._delegate ? n._delegate : n;
}
class J {
  constructor(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const H = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar {
  constructor(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const r = new Gn();
      if (
        (this.instancesDeferred.set(t, r),
        this.isInitialized(t) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: t });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (lr(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: H });
        } catch {}
      for (const [t, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(t);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = H) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter(t => 'INTERNAL' in t).map(t => t.INTERNAL.delete()),
      ...e.filter(t => '_delete' in t).map(t => t._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = H) {
    return this.instances.has(e);
  }
  getOptions(e = H) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: t,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(s);
      r === a && o.resolve(i);
    }
    return i;
  }
  onInit(e, t) {
    var r;
    const i = this.normalizeInstanceIdentifier(t),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, t) {
    const r = this.onInitCallbacks.get(t);
    if (r)
      for (const i of r)
        try {
          i(e, t);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: cr(e),
        options: t,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, t),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = H) {
    return this.component ? (this.component.multipleInstances ? e : H) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function cr(n) {
  return n === H ? void 0 : n;
}
function lr(n) {
  return n.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ur {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const t = new ar(e, this);
    return this.providers.set(e, t), t;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var f;
(function (n) {
  (n[(n.DEBUG = 0)] = 'DEBUG'),
    (n[(n.VERBOSE = 1)] = 'VERBOSE'),
    (n[(n.INFO = 2)] = 'INFO'),
    (n[(n.WARN = 3)] = 'WARN'),
    (n[(n.ERROR = 4)] = 'ERROR'),
    (n[(n.SILENT = 5)] = 'SILENT');
})(f || (f = {}));
const dr = {
    debug: f.DEBUG,
    verbose: f.VERBOSE,
    info: f.INFO,
    warn: f.WARN,
    error: f.ERROR,
    silent: f.SILENT,
  },
  hr = f.INFO,
  fr = {
    [f.DEBUG]: 'log',
    [f.VERBOSE]: 'log',
    [f.INFO]: 'info',
    [f.WARN]: 'warn',
    [f.ERROR]: 'error',
  },
  pr = (n, e, ...t) => {
    if (e < n.logLevel) return;
    const r = new Date().toISOString(),
      i = fr[e];
    if (i) console[i](`[${r}]  ${n.name}:`, ...t);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class xt {
  constructor(e) {
    (this.name = e),
      (this._logLevel = hr),
      (this._logHandler = pr),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in f))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? dr[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, f.DEBUG, ...e),
      this._logHandler(this, f.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, f.VERBOSE, ...e),
      this._logHandler(this, f.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, f.INFO, ...e),
      this._logHandler(this, f.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, f.WARN, ...e),
      this._logHandler(this, f.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, f.ERROR, ...e),
      this._logHandler(this, f.ERROR, ...e);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gr {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map(t => {
        if (mr(t)) {
          const r = t.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter(t => t)
      .join(' ');
  }
}
function mr(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Fe = '@firebase/app',
  ut = '0.11.4';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const k = new xt('@firebase/app'),
  _r = '@firebase/app-compat',
  vr = '@firebase/analytics-compat',
  Ir = '@firebase/analytics',
  Er = '@firebase/app-check-compat',
  yr = '@firebase/app-check',
  wr = '@firebase/auth',
  br = '@firebase/auth-compat',
  Tr = '@firebase/database',
  Sr = '@firebase/data-connect',
  Ar = '@firebase/database-compat',
  Cr = '@firebase/functions',
  Rr = '@firebase/functions-compat',
  kr = '@firebase/installations',
  Pr = '@firebase/installations-compat',
  Or = '@firebase/messaging',
  Nr = '@firebase/messaging-compat',
  Dr = '@firebase/performance',
  Lr = '@firebase/performance-compat',
  Mr = '@firebase/remote-config',
  Ur = '@firebase/remote-config-compat',
  Fr = '@firebase/storage',
  xr = '@firebase/storage-compat',
  Hr = '@firebase/firestore',
  Br = '@firebase/vertexai',
  $r = '@firebase/firestore-compat',
  Vr = 'firebase',
  Wr = '11.6.0';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const me = '[DEFAULT]',
  jr = {
    [Fe]: 'fire-core',
    [_r]: 'fire-core-compat',
    [Ir]: 'fire-analytics',
    [vr]: 'fire-analytics-compat',
    [yr]: 'fire-app-check',
    [Er]: 'fire-app-check-compat',
    [wr]: 'fire-auth',
    [br]: 'fire-auth-compat',
    [Tr]: 'fire-rtdb',
    [Sr]: 'fire-data-connect',
    [Ar]: 'fire-rtdb-compat',
    [Cr]: 'fire-fn',
    [Rr]: 'fire-fn-compat',
    [kr]: 'fire-iid',
    [Pr]: 'fire-iid-compat',
    [Or]: 'fire-fcm',
    [Nr]: 'fire-fcm-compat',
    [Dr]: 'fire-perf',
    [Lr]: 'fire-perf-compat',
    [Mr]: 'fire-rc',
    [Ur]: 'fire-rc-compat',
    [Fr]: 'fire-gcs',
    [xr]: 'fire-gcs-compat',
    [Hr]: 'fire-fst',
    [$r]: 'fire-fst-compat',
    [Br]: 'fire-vertex',
    'fire-js': 'fire-js',
    [Vr]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ne = new Map(),
  Ht = new Map(),
  _e = new Map();
function xe(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    k.debug(
      `Component ${e.name} failed to register with FirebaseApp ${n.name}`,
      t
    );
  }
}
function Y(n) {
  const e = n.name;
  if (_e.has(e))
    return (
      k.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  _e.set(e, n);
  for (const t of ne.values()) xe(t, n);
  for (const t of Ht.values()) xe(t, n);
  return !0;
}
function Ge(n, e) {
  const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function m(n) {
  return n == null ? !1 : n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zr = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  L = new se('app', 'Firebase', zr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gr {
  constructor(e, t, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, t)),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new J('app', () => this, 'PUBLIC'));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw L.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q = Wr;
function Bt(n, e = {}) {
  let t = n;
  typeof e != 'object' && (e = { name: e });
  const r = Object.assign({ name: me, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != 'string' || !i)
    throw L.create('bad-app-name', { appName: String(i) });
  if ((t || (t = Ut()), !t)) throw L.create('no-options');
  const s = ne.get(i);
  if (s) {
    if (q(t, s.options) && q(r, s.config)) return s;
    throw L.create('duplicate-app', { appName: i });
  }
  const o = new ur(i);
  for (const c of _e.values()) o.addComponent(c);
  const a = new Gr(t, r, o);
  return ne.set(i, a), a;
}
function $t(n = me) {
  const e = ne.get(n);
  if (!e && n === me && Ut()) return Bt();
  if (!e) throw L.create('no-app', { appName: n });
  return e;
}
function $(n, e, t) {
  var r;
  let i = (r = jr[n]) !== null && r !== void 0 ? r : n;
  t && (i += `-${t}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const a = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      a.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && a.push('and'),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      k.warn(a.join(' '));
    return;
  }
  Y(new J(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kr = 'firebase-heartbeat-database',
  qr = 1,
  re = 'firebase-heartbeat-store';
let Le = null;
function Vt() {
  return (
    Le ||
      (Le = Un(Kr, qr, {
        upgrade: (n, e) => {
          switch (e) {
            case 0:
              try {
                n.createObjectStore(re);
              } catch (t) {
                console.warn(t);
              }
          }
        },
      }).catch(n => {
        throw L.create('idb-open', { originalErrorMessage: n.message });
      })),
    Le
  );
}
async function Jr(n) {
  try {
    const t = (await Vt()).transaction(re),
      r = await t.objectStore(re).get(Wt(n));
    return await t.done, r;
  } catch (e) {
    if (e instanceof O) k.warn(e.message);
    else {
      const t = L.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      k.warn(t.message);
    }
  }
}
async function dt(n, e) {
  try {
    const r = (await Vt()).transaction(re, 'readwrite');
    await r.objectStore(re).put(e, Wt(n)), await r.done;
  } catch (t) {
    if (t instanceof O) k.warn(t.message);
    else {
      const r = L.create('idb-set', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      k.warn(r.message);
    }
  }
}
function Wt(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yr = 1024,
  Xr = 30;
class Qr {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const t = this.container.getProvider('app').getImmediate();
    (this._storage = new ei(t)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then(r => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, t;
    try {
      const i = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        s = ht();
      if (
        (((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((t = this._heartbeatsCache) === null || t === void 0
            ? void 0
            : t.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some(o => o.date === s)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        this._heartbeatsCache.heartbeats.length > Xr)
      ) {
        const o = ti(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(o, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (r) {
      k.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return '';
      const t = ht(),
        { heartbeatsToSend: r, unsentEntries: i } = Zr(
          this._heartbeatsCache.heartbeats
        ),
        s = Lt(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (t) {
      return k.warn(t), '';
    }
  }
}
function ht() {
  return new Date().toISOString().substring(0, 10);
}
function Zr(n, e = Yr) {
  const t = [];
  let r = n.slice();
  for (const i of n) {
    const s = t.find(o => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), ft(t) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((t.push({ agent: i.agent, dates: [i.date] }), ft(t) > e)) {
      t.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: t, unsentEntries: r };
}
class ei {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Qn()
      ? Zn()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await Jr(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return dt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return dt(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function ft(n) {
  return Lt(JSON.stringify({ version: 2, heartbeats: n })).length;
}
function ti(n) {
  if (n.length === 0) return -1;
  let e = 0,
    t = n[0].date;
  for (let r = 1; r < n.length; r++)
    n[r].date < t && ((t = n[r].date), (e = r));
  return e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ni(n) {
  Y(new J('platform-logger', e => new gr(e), 'PRIVATE')),
    Y(new J('heartbeat', e => new Qr(e), 'PRIVATE')),
    $(Fe, ut, n),
    $(Fe, ut, 'esm2017'),
    $('fire-js', '');
}
ni('');
var ri = 'firebase',
  ii = '11.6.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ $(ri, ii, 'app');
const ho = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      FirebaseError: O,
      SDK_VERSION: Q,
      _DEFAULT_ENTRY_NAME: me,
      _addComponent: xe,
      _apps: ne,
      _components: _e,
      _getProvider: Ge,
      _isFirebaseServerApp: m,
      _registerComponent: Y,
      _serverApps: Ht,
      getApp: $t,
      initializeApp: Bt,
      registerVersion: $,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function jt() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const zt = jt,
  Gt = new se('auth', 'Firebase', jt());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ve = new xt('@firebase/auth');
function si(n, ...e) {
  ve.logLevel <= f.WARN && ve.warn(`Auth (${Q}): ${n}`, ...e);
}
function he(n, ...e) {
  ve.logLevel <= f.ERROR && ve.error(`Auth (${Q}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _(n, ...e) {
  throw qe(n, ...e);
}
function I(n, ...e) {
  return qe(n, ...e);
}
function Ke(n, e, t) {
  const r = Object.assign(Object.assign({}, zt()), { [e]: t });
  return new se('auth', 'Firebase', r).create(e, { appName: n.name });
}
function R(n) {
  return Ke(
    n,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
  );
}
function oi(n, e, t) {
  const r = t;
  if (!(e instanceof r))
    throw (
      (r.name !== e.constructor.name && _(n, 'argument-error'),
      Ke(
        n,
        'argument-error',
        `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function qe(n, ...e) {
  if (typeof n != 'string') {
    const t = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
  }
  return Gt.create(n, ...e);
}
function u(n, e, ...t) {
  if (!n) throw qe(e, ...t);
}
function A(n) {
  const e = 'INTERNAL ASSERTION FAILED: ' + n;
  throw (he(e), new Error(e));
}
function P(n, e) {
  n || A(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function He() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.href)) ||
    ''
  );
}
function ai() {
  return pt() === 'http:' || pt() === 'https:';
}
function pt() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ci() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (ai() || Jn() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function li() {
  if (typeof navigator > 'u') return null;
  const n = navigator;
  return (n.languages && n.languages[0]) || n.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae {
  constructor(e, t) {
    (this.shortDelay = e),
      (this.longDelay = t),
      P(t > e, 'Short delay should be less than long delay!'),
      (this.isMobile = Kn() || Yn());
  }
  get() {
    return ci()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Je(n, e) {
  P(n.emulator, 'Emulator should always be set here');
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kt {
  static initialize(e, t, r) {
    (this.fetchImpl = e),
      t && (this.headersImpl = t),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    A(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    A(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    A(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ui = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const di = [
    '/v1/accounts:signInWithCustomToken',
    '/v1/accounts:signInWithEmailLink',
    '/v1/accounts:signInWithIdp',
    '/v1/accounts:signInWithPassword',
    '/v1/accounts:signInWithPhoneNumber',
    '/v1/token',
  ],
  hi = new ae(3e4, 6e4);
function U(n, e) {
  return n.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
    : e;
}
async function F(n, e, t, r, i = {}) {
  return qt(n, i, async () => {
    let s = {},
      o = {};
    r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
    const a = oe(Object.assign({ key: n.config.apiKey }, o)).slice(1),
      c = await n._getAdditionalHeaders();
    (c['Content-Type'] = 'application/json'),
      n.languageCode && (c['X-Firebase-Locale'] = n.languageCode);
    const l = Object.assign({ method: e, headers: c }, s);
    return (
      qn() || (l.referrerPolicy = 'no-referrer'),
      Kt.fetch()(await Jt(n, n.config.apiHost, t, a), l)
    );
  });
}
async function qt(n, e, t) {
  n._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, ui), e);
  try {
    const i = new pi(n),
      s = await Promise.race([t(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ('needConfirmation' in o)
      throw de(n, 'account-exists-with-different-credential', o);
    if (s.ok && !('errorMessage' in o)) return o;
    {
      const a = s.ok ? o.errorMessage : o.error.message,
        [c, l] = a.split(' : ');
      if (c === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw de(n, 'credential-already-in-use', o);
      if (c === 'EMAIL_EXISTS') throw de(n, 'email-already-in-use', o);
      if (c === 'USER_DISABLED') throw de(n, 'user-disabled', o);
      const d = r[c] || c.toLowerCase().replace(/[_\s]+/g, '-');
      if (l) throw Ke(n, d, l);
      _(n, d);
    }
  } catch (i) {
    if (i instanceof O) throw i;
    _(n, 'network-request-failed', { message: String(i) });
  }
}
async function ce(n, e, t, r, i = {}) {
  const s = await F(n, e, t, r, i);
  return (
    'mfaPendingCredential' in s &&
      _(n, 'multi-factor-auth-required', { _serverResponse: s }),
    s
  );
}
async function Jt(n, e, t, r) {
  const i = `${e}${t}?${r}`,
    s = n,
    o = s.config.emulator ? Je(n.config, i) : `${n.config.apiScheme}://${i}`;
  return di.includes(t) &&
    (await s._persistenceManagerAvailable, s._getPersistenceType() === 'COOKIE')
    ? s._getPersistence()._getFinalTarget(o).toString()
    : o;
}
function fi(n) {
  switch (n) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class pi {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((t, r) => {
        this.timer = setTimeout(
          () => r(I(this.auth, 'network-request-failed')),
          hi.get()
        );
      }));
  }
}
function de(n, e, t) {
  const r = { appName: n.name };
  t.email && (r.email = t.email),
    t.phoneNumber && (r.phoneNumber = t.phoneNumber);
  const i = I(n, e, r);
  return (i.customData._tokenResponse = t), i;
}
function gt(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class gi {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    (this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return fi(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    );
  }
  isAnyProviderEnabled() {
    return (
      this.isProviderEnabled('EMAIL_PASSWORD_PROVIDER') ||
      this.isProviderEnabled('PHONE_PROVIDER')
    );
  }
}
async function mi(n, e) {
  return F(n, 'GET', '/v2/recaptchaConfig', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _i(n, e) {
  return F(n, 'POST', '/v1/accounts:delete', e);
}
async function Ie(n, e) {
  return F(n, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function te(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function Yt(n, e = !1) {
  const t = N(n),
    r = await t.getIdToken(e),
    i = Ye(r);
  u(i && i.exp && i.auth_time && i.iat, t.auth, 'internal-error');
  const s = typeof i.firebase == 'object' ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: te(Me(i.auth_time)),
    issuedAtTime: te(Me(i.iat)),
    expirationTime: te(Me(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function Me(n) {
  return Number(n) * 1e3;
}
function Ye(n) {
  const [e, t, r] = n.split('.');
  if (e === void 0 || t === void 0 || r === void 0)
    return he('JWT malformed, contained fewer than 3 sections'), null;
  try {
    const i = Mt(t);
    return i
      ? JSON.parse(i)
      : (he('Failed to decode base64 JWT payload'), null);
  } catch (i) {
    return (
      he(
        'Caught error parsing JWT payload as JSON',
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function mt(n) {
  const e = Ye(n);
  return (
    u(e, 'internal-error'),
    u(typeof e.exp < 'u', 'internal-error'),
    u(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ie(n, e, t = !1) {
  if (t) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof O &&
        vi(r) &&
        n.auth.currentUser === n &&
        (await n.auth.signOut()),
      r)
    );
  }
}
function vi({ code: n }) {
  return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ii {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0
          ? t
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Be {
  constructor(e, t) {
    (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = te(this.lastLoginAt)),
      (this.creationTime = te(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ee(n) {
  var e;
  const t = n.auth,
    r = await n.getIdToken(),
    i = await ie(n, Ie(t, { idToken: r }));
  u(i == null ? void 0 : i.users.length, t, 'internal-error');
  const s = i.users[0];
  n._notifyReloadListener(s);
  const o =
      !((e = s.providerUserInfo) === null || e === void 0) && e.length
        ? Qt(s.providerUserInfo)
        : [],
    a = Ei(n.providerData, o),
    c = n.isAnonymous,
    l = !(n.email && s.passwordHash) && !(a != null && a.length),
    d = c ? l : !1,
    h = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: a,
      metadata: new Be(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(n, h);
}
async function Xt(n) {
  const e = N(n);
  await Ee(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function Ei(n, e) {
  return [...n.filter(r => !e.some(i => i.providerId === r.providerId)), ...e];
}
function Qt(n) {
  return n.map(e => {
    var { providerId: t } = e,
      r = je(e, ['providerId']);
    return {
      providerId: t,
      uid: r.rawId || '',
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function yi(n, e) {
  const t = await qt(n, {}, async () => {
    const r = oe({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: s } = n.config,
      o = await Jt(n, i, '/v1/token', `key=${s}`),
      a = await n._getAdditionalHeaders();
    return (
      (a['Content-Type'] = 'application/x-www-form-urlencoded'),
      Kt.fetch()(o, { method: 'POST', headers: a, body: r })
    );
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token,
  };
}
async function wi(n, e) {
  return F(n, 'POST', '/v2/accounts:revokeToken', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    u(e.idToken, 'internal-error'),
      u(typeof e.idToken < 'u', 'internal-error'),
      u(typeof e.refreshToken < 'u', 'internal-error');
    const t =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : mt(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    u(e.length !== 0, 'internal-error');
    const t = mt(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : (u(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await yi(e, t);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(e, t, r) {
    (this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, t) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = t,
      o = new z();
    return (
      r &&
        (u(typeof r == 'string', 'internal-error', { appName: e }),
        (o.refreshToken = r)),
      i &&
        (u(typeof i == 'string', 'internal-error', { appName: e }),
        (o.accessToken = i)),
      s &&
        (u(typeof s == 'number', 'internal-error', { appName: e }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new z(), this.toJSON());
  }
  _performRefresh() {
    return A('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function D(n, e) {
  u(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class v {
  constructor(e) {
    var { uid: t, auth: r, stsTokenManager: i } = e,
      s = je(e, ['uid', 'auth', 'stsTokenManager']);
    (this.providerId = 'firebase'),
      (this.proactiveRefresh = new Ii(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = t),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Be(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const t = await ie(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      u(t, this.auth, 'internal-error'),
      this.accessToken !== t &&
        ((this.accessToken = t),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      t
    );
  }
  getIdTokenResult(e) {
    return Yt(this, e);
  }
  reload() {
    return Xt(this);
  }
  _assign(e) {
    this !== e &&
      (u(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map(t => Object.assign({}, t))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new v(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return t.metadata._copy(this.metadata), t;
  }
  _onReload(e) {
    u(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      t && (await Ee(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (m(this.auth.app)) return Promise.reject(R(this.auth));
    const e = await this.getIdToken();
    return (
      await ie(this, _i(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map(e => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, t) {
    var r, i, s, o, a, c, l, d;
    const h = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
      p = (i = t.email) !== null && i !== void 0 ? i : void 0,
      y = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
      j = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
      nt = (a = t.tenantId) !== null && a !== void 0 ? a : void 0,
      ke = (c = t._redirectEventId) !== null && c !== void 0 ? c : void 0,
      rt = (l = t.createdAt) !== null && l !== void 0 ? l : void 0,
      it = (d = t.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      {
        uid: Pe,
        emailVerified: st,
        isAnonymous: ot,
        providerData: Oe,
        stsTokenManager: at,
      } = t;
    u(Pe && at, e, 'internal-error');
    const Ln = z.fromJSON(this.name, at);
    u(typeof Pe == 'string', e, 'internal-error'),
      D(h, e.name),
      D(p, e.name),
      u(typeof st == 'boolean', e, 'internal-error'),
      u(typeof ot == 'boolean', e, 'internal-error'),
      D(y, e.name),
      D(j, e.name),
      D(nt, e.name),
      D(ke, e.name),
      D(rt, e.name),
      D(it, e.name);
    const Ne = new v({
      uid: Pe,
      auth: e,
      email: p,
      emailVerified: st,
      displayName: h,
      isAnonymous: ot,
      photoURL: j,
      phoneNumber: y,
      tenantId: nt,
      stsTokenManager: Ln,
      createdAt: rt,
      lastLoginAt: it,
    });
    return (
      Oe &&
        Array.isArray(Oe) &&
        (Ne.providerData = Oe.map(Mn => Object.assign({}, Mn))),
      ke && (Ne._redirectEventId = ke),
      Ne
    );
  }
  static async _fromIdTokenResponse(e, t, r = !1) {
    const i = new z();
    i.updateFromServerResponse(t);
    const s = new v({
      uid: t.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Ee(s), s;
  }
  static async _fromGetAccountInfoResponse(e, t, r) {
    const i = t.users[0];
    u(i.localId !== void 0, 'internal-error');
    const s = i.providerUserInfo !== void 0 ? Qt(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      a = new z();
    a.updateFromIdToken(r);
    const c = new v({
        uid: i.localId,
        auth: e,
        stsTokenManager: a,
        isAnonymous: o,
      }),
      l = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Be(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(c, l), c;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _t = new Map();
function C(n) {
  P(n instanceof Function, 'Expected a class definition');
  let e = _t.get(n);
  return e
    ? (P(e instanceof n, 'Instance stored in cache mismatched with class'), e)
    : ((e = new n()), _t.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zt {
  constructor() {
    (this.type = 'NONE'), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
Zt.type = 'NONE';
const $e = Zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fe(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class G {
  constructor(e, t, r) {
    (this.persistence = e), (this.auth = t), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = fe(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = fe('persistence', i.apiKey, s)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    if (!e) return null;
    if (typeof e == 'string') {
      const t = await Ie(this.auth, { idToken: e }).catch(() => {});
      return t ? v._fromGetAccountInfoResponse(this.auth, t, e) : null;
    }
    return v._fromJSON(this.auth, e);
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, r = 'authUser') {
    if (!t.length) return new G(C($e), e, r);
    const i = (
      await Promise.all(
        t.map(async l => {
          if (await l._isAvailable()) return l;
        })
      )
    ).filter(l => l);
    let s = i[0] || C($e);
    const o = fe(r, e.config.apiKey, e.name);
    let a = null;
    for (const l of t)
      try {
        const d = await l._get(o);
        if (d) {
          let h;
          if (typeof d == 'string') {
            const p = await Ie(e, { idToken: d }).catch(() => {});
            if (!p) break;
            h = await v._fromGetAccountInfoResponse(e, p, d);
          } else h = v._fromJSON(e, d);
          l !== s && (a = h), (s = l);
          break;
        }
      } catch {}
    const c = i.filter(l => l._shouldAllowMigration);
    return !s._shouldAllowMigration || !c.length
      ? new G(s, e, r)
      : ((s = c[0]),
        a && (await s._set(o, a.toJSON())),
        await Promise.all(
          t.map(async l => {
            if (l !== s)
              try {
                await l._remove(o);
              } catch {}
          })
        ),
        new G(s, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vt(n) {
  const e = n.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (rn(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (en(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (on(e)) return 'Blackberry';
  if (an(e)) return 'Webos';
  if (tn(e)) return 'Safari';
  if ((e.includes('chrome/') || nn(e)) && !e.includes('edge/')) return 'Chrome';
  if (sn(e)) return 'Android';
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = n.match(t);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return 'Other';
}
function en(n = g()) {
  return /firefox\//i.test(n);
}
function tn(n = g()) {
  const e = n.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function nn(n = g()) {
  return /crios\//i.test(n);
}
function rn(n = g()) {
  return /iemobile/i.test(n);
}
function sn(n = g()) {
  return /android/i.test(n);
}
function on(n = g()) {
  return /blackberry/i.test(n);
}
function an(n = g()) {
  return /webos/i.test(n);
}
function Xe(n = g()) {
  return (
    /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n))
  );
}
function bi(n = g()) {
  var e;
  return (
    Xe(n) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Ti() {
  return Xn() && document.documentMode === 10;
}
function cn(n = g()) {
  return Xe(n) || sn(n) || an(n) || on(n) || /windows phone/i.test(n) || rn(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ln(n, e = []) {
  let t;
  switch (n) {
    case 'Browser':
      t = vt(g());
      break;
    case 'Worker':
      t = `${vt(g())}-${n}`;
      break;
    default:
      t = n;
  }
  const r = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${t}/JsCore/${Q}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Si {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, t) {
    const r = s =>
      new Promise((o, a) => {
        try {
          const c = e(s);
          o(c);
        } catch (c) {
          a(c);
        }
      });
    (r.onAbort = t), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const t = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort);
    } catch (r) {
      t.reverse();
      for (const i of t)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ai(n, e = {}) {
  return F(n, 'GET', '/v2/passwordPolicy', U(n, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ci = 6;
class Ri {
  constructor(e) {
    var t, r, i, s;
    const o = e.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (t = o.minPasswordLength) !== null && t !== void 0 ? t : Ci),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join('')) !== null && i !== void 0
          ? i
          : ''),
      (this.forceUpgradeOnSignin =
        (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = e.schemaVersion);
  }
  validatePassword(e) {
    var t, r, i, s, o, a;
    const c = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, c),
      this.validatePasswordCharacterOptions(e, c),
      c.isValid &&
        (c.isValid =
          (t = c.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0),
      c.isValid &&
        (c.isValid =
          (r = c.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      c.isValid &&
        (c.isValid =
          (i = c.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      c.isValid &&
        (c.isValid =
          (s = c.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      c.isValid &&
        (c.isValid =
          (o = c.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      c.isValid &&
        (c.isValid =
          (a = c.containsNonAlphanumericCharacter) !== null && a !== void 0
            ? a
            : !0),
      c
    );
  }
  validatePasswordLengthOptions(e, t) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (t.meetsMinPasswordLength = e.length >= r),
      i && (t.meetsMaxPasswordLength = e.length <= i);
  }
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < e.length; i++)
      (r = e.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          t,
          r >= 'a' && r <= 'z',
          r >= 'A' && r <= 'Z',
          r >= '0' && r <= '9',
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ki {
  constructor(e, t, r, i) {
    (this.app = e),
      (this.heartbeatServiceProvider = t),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new It(this)),
      (this.idTokenSubscription = new It(this)),
      (this.beforeStateQueue = new Si(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Gt),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this._resolvePersistenceManagerAvailable = void 0),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion),
      (this._persistenceManagerAvailable = new Promise(
        s => (this._resolvePersistenceManagerAvailable = s)
      ));
  }
  _initializeWithPersistence(e, t) {
    return (
      t && (this._popupRedirectResolver = C(t)),
      (this._initializationPromise = this.queue(async () => {
        var r, i, s;
        if (
          !this._deleted &&
          ((this.persistenceManager = await G.create(this, e)),
          (r = this._resolvePersistenceManagerAvailable) === null ||
            r === void 0 ||
            r.call(this),
          !this._deleted)
        ) {
          if (
            !((i = this._popupRedirectResolver) === null || i === void 0) &&
            i._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(t),
            (this.lastNotifiedUid =
              ((s = this.currentUser) === null || s === void 0
                ? void 0
                : s.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await Ie(this, { idToken: e }),
        r = await v._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(r);
    } catch (t) {
      console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        t
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (m(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise(a => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(a, a)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (t = this.redirectUser) === null || t === void 0
            ? void 0
            : t._redirectEventId,
        a = i == null ? void 0 : i._redirectEventId,
        c = await this.tryRedirectSignIn(e);
      (!o || o === a) && c != null && c.user && ((i = c.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      u(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await Ee(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = li();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (m(this.app)) return Promise.reject(R(this));
    const t = e ? N(e) : null;
    return (
      t &&
        u(
          t.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token'
        ),
      this._updateCurrentUser(t && t._clone(this))
    );
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return (
        e && u(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        t || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return m(this.app)
      ? Promise.reject(R(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return m(this.app)
      ? Promise.reject(R(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(C(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {}
          )
        )
      : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Ai(this),
      t = new Ri(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = t)
      : (this._tenantPasswordPolicies[this.tenantId] = t);
  }
  _getPersistenceType() {
    return this.assertedPersistence.persistence.type;
  }
  _getPersistence() {
    return this.assertedPersistence.persistence;
  }
  _updateErrorMap(e) {
    this._errorFactory = new se('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, t, r) {
    return this.registerStateListener(this.authStateSubscription, e, t, r);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, r) {
    return this.registerStateListener(this.idTokenSubscription, e, t, r);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, t);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(),
        r = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: t,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await wi(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, t) {
    const r = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = (e && C(e)) || this._popupRedirectResolver;
      u(t, this, 'argument-error'),
        (this.redirectPersistenceManager = await G.create(
          this,
          [C(t._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((t = this._currentUser) === null || t === void 0
        ? void 0
        : t._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
              ? void 0
              : r._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && t !== void 0
        ? t
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, r, i) {
    if (this._deleted) return () => {};
    const s = typeof t == 'function' ? t : t.next.bind(t);
    let o = !1;
    const a = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (u(a, this, 'internal-error'),
      a.then(() => {
        o || s(this.currentUser);
      }),
      typeof t == 'function')
    ) {
      const c = e.addObserver(t, r, i);
      return () => {
        (o = !0), c();
      };
    } else {
      const c = e.addObserver(t);
      return () => {
        (o = !0), c();
      };
    }
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      u(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = ln(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (t['X-Firebase-gmpid'] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (t['X-Firebase-Client'] = r);
    const i = await this._getAppCheckToken();
    return i && (t['X-Firebase-AppCheck'] = i), t;
  }
  async _getAppCheckToken() {
    var e;
    if (m(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      t != null &&
        t.error &&
        si(`Error while retrieving App Check token: ${t.error}`),
      t == null ? void 0 : t.token
    );
  }
}
function x(n) {
  return N(n);
}
class It {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = ir(t => (this.observer = t)));
  }
  get next() {
    return (
      u(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Te = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function Pi(n) {
  Te = n;
}
function un(n) {
  return Te.loadJS(n);
}
function Oi() {
  return Te.recaptchaEnterpriseScript;
}
function Ni() {
  return Te.gapiScript;
}
function Di(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
class Li {
  constructor() {
    this.enterprise = new Mi();
  }
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve('token');
  }
  render(e, t) {
    return '';
  }
}
class Mi {
  ready(e) {
    e();
  }
  execute(e, t) {
    return Promise.resolve('token');
  }
  render(e, t) {
    return '';
  }
}
const Ui = 'recaptcha-enterprise',
  dn = 'NO_RECAPTCHA';
class Fi {
  constructor(e) {
    (this.type = Ui), (this.auth = x(e));
  }
  async verify(e = 'verify', t = !1) {
    async function r(s) {
      if (!t) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, a) => {
        mi(s, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then(c => {
            if (c.recaptchaKey === void 0)
              a(new Error('recaptcha Enterprise site key undefined'));
            else {
              const l = new gi(c);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = l)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = l),
                o(l.siteKey)
              );
            }
          })
          .catch(c => {
            a(c);
          });
      });
    }
    function i(s, o, a) {
      const c = window.grecaptcha;
      gt(c)
        ? c.enterprise.ready(() => {
            c.enterprise
              .execute(s, { action: e })
              .then(l => {
                o(l);
              })
              .catch(() => {
                o(dn);
              });
          })
        : a(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return this.auth.settings.appVerificationDisabledForTesting
      ? new Li().execute('siteKey', { action: 'verify' })
      : new Promise((s, o) => {
          r(this.auth)
            .then(a => {
              if (!t && gt(window.grecaptcha)) i(a, s, o);
              else {
                if (typeof window > 'u') {
                  o(
                    new Error('RecaptchaVerifier is only supported in browser')
                  );
                  return;
                }
                let c = Oi();
                c.length !== 0 && (c += a),
                  un(c)
                    .then(() => {
                      i(a, s, o);
                    })
                    .catch(l => {
                      o(l);
                    });
              }
            })
            .catch(a => {
              o(a);
            });
        });
  }
}
async function Et(n, e, t, r = !1, i = !1) {
  const s = new Fi(n);
  let o;
  if (i) o = dn;
  else
    try {
      o = await s.verify(t);
    } catch {
      o = await s.verify(t, !0);
    }
  const a = Object.assign({}, e);
  if (t === 'mfaSmsEnrollment' || t === 'mfaSmsSignIn') {
    if ('phoneEnrollmentInfo' in a) {
      const c = a.phoneEnrollmentInfo.phoneNumber,
        l = a.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(a, {
        phoneEnrollmentInfo: {
          phoneNumber: c,
          recaptchaToken: l,
          captchaResponse: o,
          clientType: 'CLIENT_TYPE_WEB',
          recaptchaVersion: 'RECAPTCHA_ENTERPRISE',
        },
      });
    } else if ('phoneSignInInfo' in a) {
      const c = a.phoneSignInInfo.recaptchaToken;
      Object.assign(a, {
        phoneSignInInfo: {
          recaptchaToken: c,
          captchaResponse: o,
          clientType: 'CLIENT_TYPE_WEB',
          recaptchaVersion: 'RECAPTCHA_ENTERPRISE',
        },
      });
    }
    return a;
  }
  return (
    r
      ? Object.assign(a, { captchaResp: o })
      : Object.assign(a, { captchaResponse: o }),
    Object.assign(a, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(a, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    a
  );
}
async function Ve(n, e, t, r, i) {
  var s;
  if (
    !((s = n._getRecaptchaConfig()) === null || s === void 0) &&
    s.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const o = await Et(n, e, t, t === 'getOobCode');
    return r(n, o);
  } else
    return r(n, e).catch(async o => {
      if (o.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const a = await Et(n, e, t, t === 'getOobCode');
        return r(n, a);
      } else return Promise.reject(o);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hn(n, e) {
  const t = Ge(n, 'auth');
  if (t.isInitialized()) {
    const i = t.getImmediate(),
      s = t.getOptions();
    if (q(s, e ?? {})) return i;
    _(i, 'already-initialized');
  }
  return t.initialize({ options: e });
}
function xi(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(t) ? t : [t]).map(C);
  e != null && e.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    );
}
function fn(n, e, t) {
  const r = x(n);
  u(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
  const i = !1,
    s = pn(e),
    { host: o, port: a } = Hi(e),
    c = a === null ? '' : `:${a}`,
    l = { url: `${s}//${o}${c}/` },
    d = Object.freeze({
      host: o,
      port: a,
      protocol: s.replace(':', ''),
      options: Object.freeze({ disableWarnings: i }),
    });
  if (!r._canInitEmulator) {
    u(r.config.emulator && r.emulatorConfig, r, 'emulator-config-failed'),
      u(
        q(l, r.config.emulator) && q(d, r.emulatorConfig),
        r,
        'emulator-config-failed'
      );
    return;
  }
  (r.config.emulator = l),
    (r.emulatorConfig = d),
    (r.settings.appVerificationDisabledForTesting = !0),
    Bi();
}
function pn(n) {
  const e = n.indexOf(':');
  return e < 0 ? '' : n.substr(0, e + 1);
}
function Hi(n) {
  const e = pn(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t) return { host: '', port: null };
  const r = t[2].split('@').pop() || '',
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: yt(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(':');
    return { host: s, port: yt(o) };
  }
}
function yt(n) {
  if (!n) return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Bi() {
  function n() {
    const e = document.createElement('p'),
      t = e.style;
    (e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (t.position = 'fixed'),
      (t.width = '100%'),
      (t.backgroundColor = '#ffffff'),
      (t.border = '.1em solid #000000'),
      (t.color = '#b50000'),
      (t.bottom = '0px'),
      (t.left = '0px'),
      (t.margin = '0px'),
      (t.zIndex = '10000'),
      (t.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e);
  }
  typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', n)
        : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Se {
  constructor(e, t) {
    (this.providerId = e), (this.signInMethod = t);
  }
  toJSON() {
    return A('not implemented');
  }
  _getIdTokenResponse(e) {
    return A('not implemented');
  }
  _linkToIdToken(e, t) {
    return A('not implemented');
  }
  _getReauthenticationResolver(e) {
    return A('not implemented');
  }
}
async function $i(n, e) {
  return F(n, 'POST', '/v1/accounts:signUp', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Vi(n, e) {
  return ce(n, 'POST', '/v1/accounts:signInWithPassword', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wi(n, e) {
  return ce(n, 'POST', '/v1/accounts:signInWithEmailLink', U(n, e));
}
async function ji(n, e) {
  return ce(n, 'POST', '/v1/accounts:signInWithEmailLink', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X extends Se {
  constructor(e, t, r, i = null) {
    super('password', r),
      (this._email = e),
      (this._password = t),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(e, t) {
    return new X(e, t, 'password');
  }
  static _fromEmailAndCode(e, t, r = null) {
    return new X(e, t, 'emailLink', r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e;
    if (t != null && t.email && t != null && t.password) {
      if (t.signInMethod === 'password')
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === 'emailLink')
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Ve(e, t, 'signInWithPassword', Vi);
      case 'emailLink':
        return Wi(e, { email: this._email, oobCode: this._password });
      default:
        _(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case 'password':
        const r = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return Ve(e, r, 'signUpPassword', $i);
      case 'emailLink':
        return ji(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        _(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function K(n, e) {
  return ce(n, 'POST', '/v1/accounts:signInWithIdp', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zi = 'http://localhost';
class M extends Se {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const t = new M(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : _('argument-error'),
      t
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = t,
      s = je(t, ['providerId', 'signInMethod']);
    if (!r || !i) return null;
    const o = new M(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return K(e, t);
  }
  _linkToIdToken(e, t) {
    const r = this.buildRequest();
    return (r.idToken = t), K(e, r);
  }
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return (t.autoCreate = !1), K(e, t);
  }
  buildRequest() {
    const e = { requestUri: zi, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const t = {};
      this.idToken && (t.id_token = this.idToken),
        this.accessToken && (t.access_token = this.accessToken),
        this.secret && (t.oauth_token_secret = this.secret),
        (t.providerId = this.providerId),
        this.nonce && !this.pendingToken && (t.nonce = this.nonce),
        (e.postBody = oe(t));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gi(n) {
  switch (n) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function Ki(n) {
  const e = Z(ee(n)).link,
    t = e ? Z(ee(e)).deep_link_id : null,
    r = Z(ee(n)).deep_link_id;
  return (r ? Z(ee(r)).link : null) || r || t || e || n;
}
class Ae {
  constructor(e) {
    var t, r, i, s, o, a;
    const c = Z(ee(e)),
      l = (t = c.apiKey) !== null && t !== void 0 ? t : null,
      d = (r = c.oobCode) !== null && r !== void 0 ? r : null,
      h = Gi((i = c.mode) !== null && i !== void 0 ? i : null);
    u(l && d && h, 'argument-error'),
      (this.apiKey = l),
      (this.operation = h),
      (this.code = d),
      (this.continueUrl =
        (s = c.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode =
        (o = c.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (a = c.tenantId) !== null && a !== void 0 ? a : null);
  }
  static parseLink(e) {
    const t = Ki(e);
    try {
      return new Ae(t);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W {
  constructor() {
    this.providerId = W.PROVIDER_ID;
  }
  static credential(e, t) {
    return X._fromEmailAndPassword(e, t);
  }
  static credentialWithLink(e, t) {
    const r = Ae.parseLink(t);
    return u(r, 'argument-error'), X._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
W.PROVIDER_ID = 'password';
W.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
W.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qe {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class le extends Qe {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w extends le {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return M._fromParams({
      providerId: w.PROVIDER_ID,
      signInMethod: w.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return w.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return w.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return w.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
w.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
w.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b extends le {
  constructor() {
    super('google.com'), this.addScope('profile');
  }
  static credential(e, t) {
    return M._fromParams({
      providerId: b.PROVIDER_ID,
      signInMethod: b.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t,
    });
  }
  static credentialFromResult(e) {
    return b.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return b.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: t, oauthAccessToken: r } = e;
    if (!t && !r) return null;
    try {
      return b.credential(t, r);
    } catch {
      return null;
    }
  }
}
b.GOOGLE_SIGN_IN_METHOD = 'google.com';
b.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T extends le {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return M._fromParams({
      providerId: T.PROVIDER_ID,
      signInMethod: T.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return T.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return T.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return T.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
T.GITHUB_SIGN_IN_METHOD = 'github.com';
T.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class S extends le {
  constructor() {
    super('twitter.com');
  }
  static credential(e, t) {
    return M._fromParams({
      providerId: S.PROVIDER_ID,
      signInMethod: S.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t,
    });
  }
  static credentialFromResult(e) {
    return S.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return S.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: t, oauthTokenSecret: r } = e;
    if (!t || !r) return null;
    try {
      return S.credential(t, r);
    } catch {
      return null;
    }
  }
}
S.TWITTER_SIGN_IN_METHOD = 'twitter.com';
S.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qi(n, e) {
  return ce(n, 'POST', '/v1/accounts:signUp', U(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class V {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, t, r, i = !1) {
    const s = await v._fromIdTokenResponse(e, r, i),
      o = wt(r);
    return new V({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: t,
    });
  }
  static async _forOperation(e, t, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = wt(r);
    return new V({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: t,
    });
  }
}
function wt(n) {
  return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ye extends O {
  constructor(e, t, r, i) {
    var s;
    super(t.code, t.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, ye.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: t.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, t, r, i) {
    return new ye(e, t, r, i);
  }
}
function gn(n, e, t, r) {
  return (
    e === 'reauthenticate'
      ? t._getReauthenticationResolver(n)
      : t._getIdTokenResponse(n)
  ).catch(s => {
    throw s.code === 'auth/multi-factor-auth-required'
      ? ye._fromErrorAndOperation(n, s, e, r)
      : s;
  });
}
async function Ji(n, e, t = !1) {
  const r = await ie(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return V._forOperation(n, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Yi(n, e, t = !1) {
  const { auth: r } = n;
  if (m(r.app)) return Promise.reject(R(r));
  const i = 'reauthenticate';
  try {
    const s = await ie(n, gn(r, i, e, n), t);
    u(s.idToken, r, 'internal-error');
    const o = Ye(s.idToken);
    u(o, r, 'internal-error');
    const { sub: a } = o;
    return u(n.uid === a, r, 'user-mismatch'), V._forOperation(n, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === 'auth/user-not-found' &&
        _(r, 'user-mismatch'),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function mn(n, e, t = !1) {
  if (m(n.app)) return Promise.reject(R(n));
  const r = 'signIn',
    i = await gn(n, r, e),
    s = await V._fromIdTokenResponse(n, r, i);
  return t || (await n._updateCurrentUser(s.user)), s;
}
async function _n(n, e) {
  return mn(x(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function vn(n) {
  const e = x(n);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function Xi(n, e, t) {
  if (m(n.app)) return Promise.reject(R(n));
  const r = x(n),
    o = await Ve(
      r,
      {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      qi
    ).catch(c => {
      throw (c.code === 'auth/password-does-not-meet-requirements' && vn(n), c);
    }),
    a = await V._fromIdTokenResponse(r, 'signIn', o);
  return await r._updateCurrentUser(a.user), a;
}
function Qi(n, e, t) {
  return m(n.app)
    ? Promise.reject(R(n))
    : _n(N(n), W.credential(e, t)).catch(async r => {
        throw (
          (r.code === 'auth/password-does-not-meet-requirements' && vn(n), r)
        );
      });
}
function In(n, e, t, r) {
  return N(n).onIdTokenChanged(e, t, r);
}
function En(n, e, t) {
  return N(n).beforeAuthStateChanged(e, t);
}
function Zi(n, e, t, r) {
  return N(n).onAuthStateChanged(e, t, r);
}
function es(n) {
  return N(n).signOut();
}
const we = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yn {
  constructor(e, t) {
    (this.storageRetriever = e), (this.type = t);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(we, '1'),
          this.storage.removeItem(we),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ts = 1e3,
  ns = 10;
class wn extends yn {
  constructor() {
    super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = cn()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const r = this.storage.getItem(t),
        i = this.localCache[t];
      r !== i && e(t, i, r);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((o, a, c) => {
        this.notifyListeners(o, c);
      });
      return;
    }
    const r = e.key;
    t ? this.detachListener() : this.stopPolling();
    const i = () => {
        const o = this.storage.getItem(r);
        (!t && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    Ti() && s !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, ns)
      : i();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(t && JSON.parse(t));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, t, r) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: t, newValue: r }),
            !0
          );
        });
      }, ts));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, t) {
    await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
  }
  async _get(e) {
    const t = await super._get(e);
    return (this.localCache[e] = JSON.stringify(t)), t;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
wn.type = 'LOCAL';
const bn = wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tn extends yn {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
Tn.type = 'SESSION';
const Ze = Tn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rs(n) {
  return Promise.all(
    n.map(async e => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (t) {
        return { fulfilled: !1, reason: t };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ce {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const t = this.receivers.find(i => i.isListeningto(e));
    if (t) return t;
    const r = new Ce(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const t = e,
      { eventId: r, eventType: i, data: s } = t.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    t.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
    const a = Array.from(o).map(async l => l(t.origin, s)),
      c = await rs(a);
    t.ports[0].postMessage({
      status: 'done',
      eventId: r,
      eventType: i,
      response: c,
    });
  }
  _subscribe(e, t) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t);
  }
  _unsubscribe(e, t) {
    this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
  }
}
Ce.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function et(n = '', e = 10) {
  let t = '';
  for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class is {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, t, r = 50) {
    const i = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!i) throw new Error('connection_unavailable');
    let s, o;
    return new Promise((a, c) => {
      const l = et('', 20);
      i.port1.start();
      const d = setTimeout(() => {
        c(new Error('unsupported_event'));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(h) {
          const p = h;
          if (p.data.eventId === l)
            switch (p.data.status) {
              case 'ack':
                clearTimeout(d),
                  (s = setTimeout(() => {
                    c(new Error('timeout'));
                  }, 3e3));
                break;
              case 'done':
                clearTimeout(s), a(p.data.response);
                break;
              default:
                clearTimeout(d),
                  clearTimeout(s),
                  c(new Error('invalid_response'));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener('message', o.onMessage),
        this.target.postMessage({ eventType: e, eventId: l, data: t }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E() {
  return window;
}
function ss(n) {
  E().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sn() {
  return (
    typeof E().WorkerGlobalScope < 'u' && typeof E().importScripts == 'function'
  );
}
async function os() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function as() {
  var n;
  return (
    ((n = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    n === void 0
      ? void 0
      : n.controller) || null
  );
}
function cs() {
  return Sn() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const An = 'firebaseLocalStorageDb',
  ls = 1,
  be = 'firebaseLocalStorage',
  Cn = 'fbase_key';
class ue {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          t(this.request.error);
        });
    });
  }
}
function Re(n, e) {
  return n.transaction([be], e ? 'readwrite' : 'readonly').objectStore(be);
}
function us() {
  const n = indexedDB.deleteDatabase(An);
  return new ue(n).toPromise();
}
function We() {
  const n = indexedDB.open(An, ls);
  return new Promise((e, t) => {
    n.addEventListener('error', () => {
      t(n.error);
    }),
      n.addEventListener('upgradeneeded', () => {
        const r = n.result;
        try {
          r.createObjectStore(be, { keyPath: Cn });
        } catch (i) {
          t(i);
        }
      }),
      n.addEventListener('success', async () => {
        const r = n.result;
        r.objectStoreNames.contains(be)
          ? e(r)
          : (r.close(), await us(), e(await We()));
      });
  });
}
async function bt(n, e, t) {
  const r = Re(n, !0).put({ [Cn]: e, value: t });
  return new ue(r).toPromise();
}
async function ds(n, e) {
  const t = Re(n, !1).get(e),
    r = await new ue(t).toPromise();
  return r === void 0 ? null : r.value;
}
function Tt(n, e) {
  const t = Re(n, !0).delete(e);
  return new ue(t).toPromise();
}
const hs = 800,
  fs = 3;
class Rn {
  constructor() {
    (this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await We()), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (t++ > fs) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Sn() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ce._getInstance(cs())),
      this.receiver._subscribe('keyChanged', async (e, t) => ({
        keyProcessed: (await this._poll()).includes(t.key),
      })),
      this.receiver._subscribe('ping', async (e, t) => ['keyChanged']);
  }
  async initializeSender() {
    var e, t;
    if (((this.activeServiceWorker = await os()), !this.activeServiceWorker))
      return;
    this.sender = new is(this.activeServiceWorker);
    const r = await this.sender._send('ping', {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((t = r[0]) === null || t === void 0) &&
      t.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        as() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await We();
      return await bt(e, we, '1'), await Tt(e, we), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries(r => bt(r, e, t)),
        (this.localCache[e] = t),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const t = await this._withRetries(r => ds(r, e));
    return (this.localCache[e] = t), t;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries(t => Tt(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries(i => {
      const s = Re(i, !1).getAll();
      return new ue(s).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const t = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: s } of e)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), t.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), t.push(i));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(t);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), hs));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, t) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(t);
  }
  _removeListener(e, t) {
    this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Rn.type = 'LOCAL';
const kn = Rn;
new ae(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pn(n, e) {
  return e
    ? C(e)
    : (u(n._popupRedirectResolver, n, 'argument-error'),
      n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tt extends Se {
  constructor(e) {
    super('custom', 'custom'), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return K(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return K(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return K(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (t.idToken = e), t;
  }
}
function ps(n) {
  return mn(n.auth, new tt(n), n.bypassAuthState);
}
function gs(n) {
  const { auth: e, user: t } = n;
  return u(t, e, 'internal-error'), Yi(t, new tt(n), n.bypassAuthState);
}
async function ms(n) {
  const { auth: e, user: t } = n;
  return u(t, e, 'internal-error'), Ji(t, new tt(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class On {
  constructor(e, t, r, i, s = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(t) ? t : [t]);
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: t,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: a,
    } = e;
    if (o) {
      this.reject(o);
      return;
    }
    const c = {
      auth: this.auth,
      requestUri: t,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(c));
    } catch (l) {
      this.reject(l);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return ps;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return ms;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return gs;
      default:
        _(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    P(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    P(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _s = new ae(2e3, 1e4);
async function vs(n, e, t) {
  if (m(n.app))
    return Promise.reject(I(n, 'operation-not-supported-in-this-environment'));
  const r = x(n);
  oi(n, e, Qe);
  const i = Pn(r, t);
  return new B(r, 'signInViaPopup', e, i).executeNotNull();
}
class B extends On {
  constructor(e, t, r, i, s) {
    super(e, t, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      B.currentPopupAction && B.currentPopupAction.cancel(),
      (B.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return u(e, this.auth, 'internal-error'), e;
  }
  async onExecution() {
    P(this.filter.length === 1, 'Popup operations only handle one event');
    const e = et();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch(t => {
        this.reject(t);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, t => {
        t || this.reject(I(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(I(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (B.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var t, r;
      if (
        !(
          (r =
            (t = this.authWindow) === null || t === void 0
              ? void 0
              : t.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(I(this.auth, 'popup-closed-by-user'));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, _s.get());
    };
    e();
  }
}
B.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Is = 'pendingRedirect',
  pe = new Map();
class Es extends On {
  constructor(e, t, r = !1) {
    super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      t,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = pe.get(this.auth._key());
    if (!e) {
      try {
        const r = (await ys(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      pe.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        pe.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t) return (this.user = t), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function ys(n, e) {
  const t = Ts(e),
    r = bs(n);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(t)) === 'true';
  return await r._remove(t), i;
}
function ws(n, e) {
  pe.set(n._key(), e);
}
function bs(n) {
  return C(n._redirectPersistence);
}
function Ts(n) {
  return fe(Is, n.config.apiKey, n.name);
}
async function Ss(n, e, t = !1) {
  if (m(n.app)) return Promise.reject(R(n));
  const r = x(n),
    i = Pn(r, e),
    o = await new Es(r, i, t).execute();
  return (
    o &&
      !t &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, e)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const As = 10 * 60 * 1e3;
class Cs {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let t = !1;
    return (
      this.consumers.forEach(r => {
        this.isEventForConsumer(e, r) &&
          ((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !Rs(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        t || ((this.queuedRedirectEvent = e), (t = !0))),
      t
    );
  }
  sendToConsumer(e, t) {
    var r;
    if (e.error && !Nn(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split('auth/')[1]) || 'internal-error';
      t.onError(I(this.auth, i));
    } else t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const r = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
    return t.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= As &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(St(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(St(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function St(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId].filter(e => e).join('-');
}
function Nn({ type: n, error: e }) {
  return (
    n === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  );
}
function Rs(n) {
  switch (n.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return Nn(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ks(n, e = {}) {
  return F(n, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ps = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Os = /^https?/;
async function Ns(n) {
  if (n.config.emulator) return;
  const { authorizedDomains: e } = await ks(n);
  for (const t of e)
    try {
      if (Ds(t)) return;
    } catch {}
  _(n, 'unauthorized-domain');
}
function Ds(n) {
  const e = He(),
    { protocol: t, hostname: r } = new URL(e);
  if (n.startsWith('chrome-extension://')) {
    const o = new URL(n);
    return o.hostname === '' && r === ''
      ? t === 'chrome-extension:' &&
          n.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : t === 'chrome-extension:' && o.hostname === r;
  }
  if (!Os.test(t)) return !1;
  if (Ps.test(n)) return r === n;
  const i = n.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ls = new ae(3e4, 6e4);
function At() {
  const n = E().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (
        ((n.H[e].r = n.H[e].r || []),
        (n.H[e].L = n.H[e].L || []),
        (n.H[e].r = [...n.H[e].L]),
        n.CP)
      )
        for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
  }
}
function Ms(n) {
  return new Promise((e, t) => {
    var r, i, s;
    function o() {
      At(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            At(), t(I(n, 'network-request-failed'));
          },
          timeout: Ls.get(),
        });
    }
    if (
      !(
        (i = (r = E().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((s = E().gapi) === null || s === void 0) && s.load) o();
    else {
      const a = Di('iframefcb');
      return (
        (E()[a] = () => {
          gapi.load ? o() : t(I(n, 'network-request-failed'));
        }),
        un(`${Ni()}?onload=${a}`).catch(c => t(c))
      );
    }
  }).catch(e => {
    throw ((ge = null), e);
  });
}
let ge = null;
function Us(n) {
  return (ge = ge || Ms(n)), ge;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fs = new ae(5e3, 15e3),
  xs = '__/auth/iframe',
  Hs = 'emulator/auth/iframe',
  Bs = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  $s = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function Vs(n) {
  const e = n.config;
  u(e.authDomain, n, 'auth-domain-config-required');
  const t = e.emulator ? Je(e, Hs) : `https://${n.config.authDomain}/${xs}`,
    r = { apiKey: e.apiKey, appName: n.name, v: Q },
    i = $s.get(n.config.apiHost);
  i && (r.eid = i);
  const s = n._getFrameworks();
  return s.length && (r.fw = s.join(',')), `${t}?${oe(r).slice(1)}`;
}
async function Ws(n) {
  const e = await Us(n),
    t = E().gapi;
  return (
    u(t, n, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: Vs(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Bs,
        dontclear: !0,
      },
      r =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = I(n, 'network-request-failed'),
            a = E().setTimeout(() => {
              s(o);
            }, Fs.get());
          function c() {
            E().clearTimeout(a), i(r);
          }
          r.ping(c).then(c, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const js = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  zs = 500,
  Gs = 600,
  Ks = '_blank',
  qs = 'http://localhost';
class Ct {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function Js(n, e, t, r = zs, i = Gs) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = '';
  const c = Object.assign(Object.assign({}, js), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    l = g().toLowerCase();
  t && (a = nn(l) ? Ks : t), en(l) && ((e = e || qs), (c.scrollbars = 'yes'));
  const d = Object.entries(c).reduce((p, [y, j]) => `${p}${y}=${j},`, '');
  if (bi(l) && a !== '_self') return Ys(e || '', a), new Ct(null);
  const h = window.open(e || '', a, d);
  u(h, n, 'popup-blocked');
  try {
    h.focus();
  } catch {}
  return new Ct(h);
}
function Ys(n, e) {
  const t = document.createElement('a');
  (t.href = n), (t.target = e);
  const r = document.createEvent('MouseEvent');
  r.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xs = '__/auth/handler',
  Qs = 'emulator/auth/handler',
  Zs = encodeURIComponent('fac');
async function Rt(n, e, t, r, i, s) {
  u(n.config.authDomain, n, 'auth-domain-config-required'),
    u(n.config.apiKey, n, 'invalid-api-key');
  const o = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: r,
    v: Q,
    eventId: i,
  };
  if (e instanceof Qe) {
    e.setDefaultLanguage(n.languageCode),
      (o.providerId = e.providerId || ''),
      rr(e.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [d, h] of Object.entries({})) o[d] = h;
  }
  if (e instanceof le) {
    const d = e.getScopes().filter(h => h !== '');
    d.length > 0 && (o.scopes = d.join(','));
  }
  n.tenantId && (o.tid = n.tenantId);
  const a = o;
  for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
  const c = await n._getAppCheckToken(),
    l = c ? `#${Zs}=${encodeURIComponent(c)}` : '';
  return `${eo(n)}?${oe(a).slice(1)}${l}`;
}
function eo({ config: n }) {
  return n.emulator ? Je(n, Qs) : `https://${n.authDomain}/${Xs}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ue = 'webStorageSupport';
class to {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Ze),
      (this._completeRedirectFn = Ss),
      (this._overrideRedirectResult = ws);
  }
  async _openPopup(e, t, r, i) {
    var s;
    P(
      (s = this.eventManagers[e._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      '_initialize() not called before _openPopup()'
    );
    const o = await Rt(e, t, r, He(), i);
    return Js(e, o, et());
  }
  async _openRedirect(e, t, r, i) {
    await this._originValidation(e);
    const s = await Rt(e, t, r, He(), i);
    return ss(s), new Promise(() => {});
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: i, promise: s } = this.eventManagers[t];
      return i
        ? Promise.resolve(i)
        : (P(s, 'If manager is not set, promise should be'), s);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[t] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[t];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const t = await Ws(e),
      r = new Cs(e);
    return (
      t.register(
        'authEvent',
        i => (
          u(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
          { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = t),
      r
    );
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(
      Ue,
      { type: Ue },
      i => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Ue];
        o !== void 0 && t(!!o), _(e, 'internal-error');
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const t = e._key();
    return (
      this.originValidationPromises[t] ||
        (this.originValidationPromises[t] = Ns(e)),
      this.originValidationPromises[t]
    );
  }
  get _shouldInitProactively() {
    return cn() || tn() || Xe();
  }
}
const Dn = to;
var kt = '@firebase/auth',
  Pt = '1.10.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class no {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const t = this.auth.onIdTokenChanged(r => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, t), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    u(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth'
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ro(n) {
  switch (n) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function io(n) {
  Y(
    new J(
      'auth',
      (e, { options: t }) => {
        const r = e.getProvider('app').getImmediate(),
          i = e.getProvider('heartbeat'),
          s = e.getProvider('app-check-internal'),
          { apiKey: o, authDomain: a } = r.options;
        u(o && !o.includes(':'), 'invalid-api-key', { appName: r.name });
        const c = {
            apiKey: o,
            authDomain: a,
            clientPlatform: n,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: ln(n),
          },
          l = new ki(r, i, s, c);
        return xi(l, t), l;
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, t, r) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    Y(
      new J(
        'auth-internal',
        e => {
          const t = x(e.getProvider('auth').getImmediate());
          return (r => new no(r))(t);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    $(kt, Pt, ro(n)),
    $(kt, Pt, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const so = 5 * 60,
  oo = Ft('authIdTokenMaxAge') || so;
let Ot = null;
const ao = n => async e => {
  const t = e && (await e.getIdTokenResult()),
    r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (r && r > oo) return;
  const i = t == null ? void 0 : t.token;
  Ot !== i &&
    ((Ot = i),
    await fetch(n, {
      method: i ? 'POST' : 'DELETE',
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function co(n = $t()) {
  const e = Ge(n, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const t = hn(n, { popupRedirectResolver: Dn, persistence: [kn, bn, Ze] }),
    r = Ft('authTokenSyncURL');
  if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = ao(s.toString());
      En(t, o, () => o(t.currentUser)), In(t, a => o(a));
    }
  }
  const i = zn('auth');
  return i && fn(t, `http://${i}`), t;
}
function lo() {
  var n, e;
  return (e =
    (n = document.getElementsByTagName('head')) === null || n === void 0
      ? void 0
      : n[0]) !== null && e !== void 0
    ? e
    : document;
}
Pi({
  loadJS(n) {
    return new Promise((e, t) => {
      const r = document.createElement('script');
      r.setAttribute('src', n),
        (r.onload = e),
        (r.onerror = i => {
          const s = I('internal-error');
          (s.customData = i), t(s);
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        lo().appendChild(r);
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
io('Browser');
const fo = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ActionCodeURL: Ae,
      AuthCredential: Se,
      EmailAuthCredential: X,
      EmailAuthProvider: W,
      FacebookAuthProvider: w,
      GithubAuthProvider: T,
      GoogleAuthProvider: b,
      OAuthCredential: M,
      TwitterAuthProvider: S,
      beforeAuthStateChanged: En,
      browserLocalPersistence: bn,
      browserPopupRedirectResolver: Dn,
      browserSessionPersistence: Ze,
      connectAuthEmulator: fn,
      createUserWithEmailAndPassword: Xi,
      getAuth: co,
      getIdTokenResult: Yt,
      inMemoryPersistence: $e,
      indexedDBLocalPersistence: kn,
      initializeAuth: hn,
      onAuthStateChanged: Zi,
      onIdTokenChanged: In,
      prodErrorMap: zt,
      reload: Xt,
      signInWithCredential: _n,
      signInWithEmailAndPassword: Qi,
      signInWithPopup: vs,
      signOut: es,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export { fo as a, ho as i };
