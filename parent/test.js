const x = function () { const C = document.createElement("link").relList; if (C && C.supports && C.supports("modulepreload")) return; for (const a of document.querySelectorAll('link[rel="modulepreload"]')) d(a); new MutationObserver(a => { for (const s of a) if (s.type === "childList") for (const u of s.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && d(u) }).observe(document, { childList: !0, subtree: !0 }); function p(a) { const s = {}; return a.integrity && (s.integrity = a.integrity), a.referrerpolicy && (s.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? s.credentials = "include" : a.crossorigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s } function d(a) { if (a.ep) return; a.ep = !0; const s = p(a); fetch(a.href, s) } }; x(); var k = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}; function U(y) { return y && y.__esModule && Object.prototype.hasOwnProperty.call(y, "default") ? y.default : y } var I = { exports: {} };/*!
 * 
 * across-tabs "1.2.4"
 * https://github.com/wingify/across-tabs
 * MIT licensed
 * 
 * Copyright (C) 2017-2019 Wingify Pvt. Ltd. - Authored by Varun Malhotra(https://github.com/softvar)
 * 
 */(function (y, C) {
    (function (d, a) { y.exports = a() })(k, function () {
        return function (p) { var d = {}; function a(s) { if (d[s]) return d[s].exports; var u = d[s] = { i: s, l: !1, exports: {} }; return p[s].call(u.exports, u, u.exports, a), u.l = !0, u.exports } return a.m = p, a.c = d, a.d = function (s, u, f) { a.o(s, u) || Object.defineProperty(s, u, { configurable: !1, enumerable: !0, get: f }) }, a.n = function (s) { var u = s && s.__esModule ? function () { return s.default } : function () { return s }; return a.d(u, "a", u), u }, a.o = function (s, u) { return Object.prototype.hasOwnProperty.call(s, u) }, a.p = "", a(a.s = 6) }([function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = { LOADED: "__TAB__LOADED_EVENT__", CUSTOM: "__TAB__CUSTOM_EVENT__", HANDSHAKE: "__TAB__HANDSHAKE_EVENT__", ON_BEFORE_UNLOAD: "__TAB__ON_BEFORE_UNLOAD__", PARENT_DISCONNECTED: "__PARENT_DISCONNECTED__", HANDSHAKE_WITH_PARENT: "__HANDSHAKE_WITH_PARENT__", PARENT_COMMUNICATED: "__PARENT_COMMUNICATED__" }; d.default = s }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = { INVALID_JSON: "Invalid JSON Object!", INVALID_DATA: "Some wrong message is being sent by Parent.", CONFIG_REQUIRED: "Configuration options required. Please read docs.", CUSTOM_EVENT: "CustomEvent(and it's polyfill) is not supported in this browser.", URL_REQUIRED: "Url is needed for creating and opening a new window/tab. Please read docs." }; d.default = s }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = a(0), u = _(s), f = a(3), o = _(f), b = a(4), v = _(b), g = a(1), E = _(g); function _(e) { return e && e.__esModule ? e : { default: e } } var n = { tabs: [], config: {} }; n._remove = function (e) { var t = void 0; t = o.default.searchByKeyName(n.tabs, "id", e.id, "index"), n.tabs.splice(t, 1) }, n._preProcessMessage = function (e) { try { e = n.config.stringify(e) } catch { throw new Error(E.default.INVALID_JSON) } return e && e.indexOf(u.default.PARENT_COMMUNICATED) === -1 && (e = u.default.PARENT_COMMUNICATED + e), e }, n.addNew = function (e) { n.tabs.push(e) }, n.getOpened = function () { return n.tabs.filter(function (e) { return e.status === v.default.OPEN }) }, n.getClosed = function () { return n.tabs.filter(function (e) { return e.status === v.default.CLOSE }) }, n.getAll = function () { return n.tabs }, n.closeTab = function (e) { var t = o.default.searchByKeyName(n.tabs, "id", e); return t && t.ref && (t.ref.close(), t.status = v.default.CLOSE), n }, n.closeAll = function () { var e = void 0; for (e = 0; e < n.tabs.length; e++)n.tabs[e] && n.tabs[e].ref && (n.tabs[e].ref.close(), n.tabs[e].status = v.default.CLOSE); return n }, n.broadCastAll = function (e, t) { var r = void 0, i = n.getOpened(); for (e = n._preProcessMessage(e), r = 0; r < i.length; r++)n.sendMessage(i[r], e, t); return n }, n.broadCastTo = function (e, t, r) { var i = void 0, h = n.getAll(); return t = n._preProcessMessage(t), i = o.default.searchByKeyName(h, "id", e), n.sendMessage(i, t, r), n }, n.sendMessage = function (e, t, r) { var i = n.config.origin || "*"; if (r && e.ref[0]) for (var h = 0; h < e.ref.length; h++)e.ref[h].postMessage(t, i); else e.ref && e.ref.top && e.ref.top.postMessage(t, i) }, d.default = n }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = {}, u = { INDEX: "index", OBJECT: "object", BOTH: "both" }; s.searchByKeyName = function (f, o, b, v) { if (!f || !o) return !1; v = v || u[1]; var g = void 0, E = void 0, _ = void 0, n = -1; for (g = 0; g < f.length; g++)if (E = f[g], !isNaN(b) && parseInt(E[o], 10) === parseInt(b, 10)) { n = g; break } else if (isNaN(b) && E[o] === b) { n = g; break } switch (n === -1 && (f[n] = {}), v) { case u.INDEX: _ = n; break; case u.BOTH: _ = { obj: f[n], index: n }; break; case u.OBJECT: default: _ = f[n]; break }return _ }, d.default = s }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = { OPEN: "open", CLOSE: "close" }; d.default = s }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = { disable: function (f) { if (!f) return !1; var o = void 0, b = document.querySelectorAll("[" + f + "]"); for (o = 0; o < b.length; o++)b[o].setAttribute("disabled", "disabled") }, enable: function (f) { if (!f) return !1; var o = void 0, b = document.querySelectorAll("[" + f + "]"); for (o = 0; o < b.length; o++)b[o].removeAttribute("disabled") } }; d.default = s }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = a(7), u = b(s), f = a(12), o = b(f); function b(g) { return g && g.__esModule ? g : { default: g } } var v = { Parent: u.default, Child: o.default }; d.default = v }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = Object.assign || function (w) { for (var c = 1; c < arguments.length; c++) { var l = arguments[c]; for (var m in l) Object.prototype.hasOwnProperty.call(l, m) && (w[m] = l[m]) } return w }, u = function () { function w(c, l) { for (var m = 0; m < l.length; m++) { var N = l[m]; N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(c, N.key, N) } } return function (c, l, m) { return l && w(c.prototype, l), m && w(c, m), c } }(), f = a(8), o = O(f), b = a(2), v = O(b), g = a(5), E = O(g), _ = a(4), n = O(_), e = a(1), t = O(e), r = a(0), i = O(r), h = a(10), T = O(h); function O(w) { return w && w.__esModule ? w : { default: w } } function M(w, c) { if (!(w instanceof c)) throw new TypeError("Cannot call a class as a function") } var A = void 0, S = void 0, L = function () { function w(c) { M(this, w), c = c || {}, typeof c.heartBeatInterval == "undefined" && (c.heartBeatInterval = 500), typeof c.shouldInitImmediately == "undefined" && (c.shouldInitImmediately = !0), typeof c.parse != "function" && (c.parse = JSON.parse), typeof c.stringify != "function" && (c.stringify = JSON.stringify), v.default.tabs = [], this.Tab = o.default, s(this, c), v.default.config = c, this.shouldInitImmediately && this.init() } return u(w, [{ key: "addInterval", value: function () { var l = void 0, m = v.default.getAll(), N = v.default.getOpened(); if (!N || !N.length) return window.clearInterval(A), A = null, !1; for (l = 0; l < m.length; l++)this.removeClosedTabs && this.watchStatus(m[l]), m[l] && m[l].ref && (m[l].status = m[l].ref.closed ? n.default.CLOSE : n.default.OPEN); this.onPollingCallback && this.onPollingCallback() } }, { key: "startPollingTabs", value: function () { var l = this; A = window.setInterval(function () { return l.addInterval() }, this.heartBeatInterval) } }, { key: "watchStatus", value: function (l) { if (!l || !l.ref) return !1; var m = l.ref.closed ? n.default.CLOSE : n.default.OPEN, N = l.status; if (!m || m === N) return !1; N === n.default.OPEN && m === n.default.CLOSE && v.default._remove(l) } }, { key: "onChildUnload", value: function (l) { this.onChildDisconnect && this.onChildDisconnect(l.detail) } }, { key: "customEventUnListener", value: function (l) { this.enableElements(), l.detail && l.detail.type === i.default.HANDSHAKE && this.onHandshakeCallback ? this.onHandshakeCallback(l.detail.tabInfo) : l.detail && l.detail.type === i.default.CUSTOM && this.onChildCommunication && this.onChildCommunication(l.detail.tabInfo) } }, { key: "addEventListeners", value: function () { var l = this; window.removeEventListener("message", T.default.onNewTab), window.addEventListener("message", T.default.onNewTab), window.removeEventListener("onCustomChildMessage", this.customEventUnListener), window.addEventListener("onCustomChildMessage", function (m) { return l.customEventUnListener(m) }), window.removeEventListener("onChildUnload", this.onChildUnload), window.addEventListener("onChildUnload", function (m) { return l.onChildUnload(m) }), window.onbeforeunload = function () { v.default.broadCastAll(i.default.PARENT_DISCONNECTED) } } }, { key: "enableElements", value: function () { E.default.enable("data-tab-opener") } }, { key: "getAllTabs", value: function () { return v.default.getAll() } }, { key: "getOpenedTabs", value: function () { return v.default.getOpened() } }, { key: "getClosedTabs", value: function () { return v.default.getClosed() } }, { key: "closeAllTabs", value: function () { return v.default.closeAll() } }, { key: "closeTab", value: function (l) { return v.default.closeTab(l) } }, { key: "broadCastAll", value: function (l) { return v.default.broadCastAll(l) } }, { key: "broadCastTo", value: function (l, m) { return v.default.broadCastTo(l, m) } }, { key: "openNewTab", value: function (l) { if (!l) throw new Error(t.default.CONFIG_REQUIRED); var m = l.url; if (!m) throw new Error(t.default.URL_REQUIRED); return S = new this.Tab, S.create(l), A || this.startPollingTabs(), S } }, { key: "init", value: function () { this.addEventListeners() } }]), w }(); d.default = L }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = Object.assign || function (t) { for (var r = 1; r < arguments.length; r++) { var i = arguments[r]; for (var h in i) Object.prototype.hasOwnProperty.call(i, h) && (t[h] = i[h]) } return t }, u = function () { function t(r, i) { for (var h = 0; h < i.length; h++) { var T = i[h]; T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(r, T.key, T) } } return function (r, i, h) { return i && t(r.prototype, i), h && t(r, h), r } }(), f = a(2), o = _(f), b = a(9), v = _(b), g = a(5), E = _(g); function _(t) { return t && t.__esModule ? t : { default: t } } function n(t, r) { if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function") } var e = function () { function t() { n(this, t), window.name = window.name || "PARENT_TAB" } return u(t, [{ key: "create", value: function (i) { return i = i || {}, s(this, i), this.id = v.default.generate() || o.default.tabs.length + 1, this.status = "open", this.ref = window.open(this.url, i.windowName || "_blank", i.windowFeatures), E.default.disable("data-tab-opener"), window.newlyTabOpened = { id: this.id, name: this.name || this.windowName, ref: this.ref }, o.default.addNew(this), this } }]), t }(); d.default = e }, function (p, d, a) {
            Object.defineProperty(d, "__esModule", { value: !0 });/**
 * UUID.js: The RFC-compliant UUID generator for JavaScript.
 * ES6 port of only `generate` method of UUID by Varun Malhotra under MIT License
 *
 * @author  LiosK
 * @version v3.3.0
 * @license The MIT License: Copyright (c) 2010-2016 LiosK.
 */var s = void 0; s = function () { function u() { } return u.generate = function () { var f = u._getRandomInt, o = u._hexAligner; return o(f(32), 8) + "-" + o(f(16), 4) + "-" + o(16384 | f(12), 4) + "-" + o(32768 | f(14), 4) + "-" + o(f(48), 12) }, u._getRandomInt = function (f) { return f < 0 ? NaN : f <= 30 ? 0 | Math.random() * (1 << f) : f <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << f - 30)) * (1 << 30) : NaN }, u._getIntAligner = function (f) { return function (o, b) { for (var v = o.toString(f), g = b - v.length, E = "0"; g > 0; g >>>= 1, E += E)g & 1 && (v = E + v); return v } }, u._hexAligner = u._getIntAligner(16), u.prototype.toString = function () { return this.hexString }, u }(), d.default = s
        }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = a(3), u = _(s), f = a(2), o = _(f), b = a(1), v = _(b), g = a(0), E = _(g); a(11); function _(e) { return e && e.__esModule ? e : { default: e } } var n = {}; n._onLoad = function (e) { var t = void 0, r = void 0, i = e.split(E.default.LOADED)[1]; if (i) try { i = o.default.config.parse(i), i.id && (t = o.default.getAll(), t.length && (window.newlyTabOpened = t[t.length - 1], window.newlyTabOpened.id = i.id, window.newlyTabOpened.name = i.name || i.windowName)) } catch { throw new Error(v.default.INVALID_JSON) } if (window.newlyTabOpened) try { r = E.default.HANDSHAKE_WITH_PARENT, r += o.default.config.stringify({ id: window.newlyTabOpened.id, name: window.newlyTabOpened.name || window.newlyTabOpened.windowName, parentName: window.name }), o.default.sendMessage(window.newlyTabOpened, r, i.isSiteInsideFrame) } catch { throw new Error(v.default.INVALID_JSON) } }, n._onCustomMessage = function (e, t) { var r = void 0, i = void 0, h = e.split(t)[1]; try { h = o.default.config.parse(h) } catch { throw new Error(v.default.INVALID_JSON) } i = { tabInfo: h, type: t }, r = new CustomEvent("onCustomChildMessage", { detail: i }), window.dispatchEvent(r) }, n._onBeforeUnload = function (e) { var t = void 0, r = e.split(E.default.ON_BEFORE_UNLOAD)[1]; try { r = o.default.config.parse(r) } catch { throw new Error(v.default.INVALID_JSON) } o.default.tabs.length && (t = o.default.getAll(), window.newlyTabOpened = u.default.searchByKeyName(t, "id", r.id) || window.newlyTabOpened); var i = new CustomEvent("onChildUnload", { detail: r }); window.dispatchEvent(i) }, n.onNewTab = function (e) { var t = e.data; if (!t || typeof t != "string" || !o.default.tabs.length || o.default.config.origin && o.default.config.origin !== e.origin) return !1; t.indexOf(E.default.LOADED) > -1 ? n._onLoad(t) : t.indexOf(E.default.CUSTOM) > -1 ? n._onCustomMessage(t, E.default.CUSTOM) : t.indexOf(E.default.HANDSHAKE) > -1 ? n._onCustomMessage(t, E.default.HANDSHAKE) : t.indexOf(E.default.ON_BEFORE_UNLOAD) > -1 && n._onBeforeUnload(t) }, d.default = n }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }), d.default = function () { function s(u) { var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = document.createEvent("CustomEvent"); return o.initCustomEvent(u, !1, !1, f.detail), o } typeof window.CustomEvent != "function" && (s.prototype = window.Event.prototype, window.CustomEvent = s) }() }, function (p, d, a) { Object.defineProperty(d, "__esModule", { value: !0 }); var s = Object.assign || function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]) } return n }, u = function () { function n(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function (e, t, r) { return t && n(e.prototype, t), r && n(e, r), e } }(), f = a(0), o = g(f), b = a(1), v = g(b); function g(n) { return n && n.__esModule ? n : { default: n } } function E(n, e) { if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function") } var _ = function () { function n(e) { E(this, n), this.sessionStorageKey = "__vwo_new_tab_info__", e || (e = {}), typeof e.handshakeExpiryLimit == "undefined" && (e.handshakeExpiryLimit = 5e3), typeof e.shouldInitImmediately == "undefined" && (e.shouldInitImmediately = !0), typeof e.parse != "function" && (e.parse = JSON.parse), typeof e.stringify != "function" && (e.stringify = JSON.stringify), this.tabName = window.name, this.tabId = null, this.tabParentName = null, s(this, e), this.config = e, this.shouldInitImmediately && this.init() } return u(n, [{ key: "_isSessionStorage", value: function () { return !!("sessionStorage" in window && window.sessionStorage) } }, { key: "_getData", value: function () { return this.isSessionStorageSupported ? window.sessionStorage.getItem(this.sessionStorageKey) : !1 } }, { key: "_setData", value: function (t) { return this.isSessionStorageSupported ? (window.sessionStorage.setItem(this.sessionStorageKey, t), t) : !1 } }, { key: "_restoreData", value: function () { if (!this.isSessionStorageSupported) return !1; if (this.isSessionStorageSupported) { var t = this._getData(); this._parseData(t) } } }, { key: "_parseData", value: function (t) { var r = void 0; try { r = this.config.parse(t), this.tabId = r && r.id, this.tabName = r && r.name, this.tabParentName = r && r.parentName } catch { throw new Error(v.default.INVALID_DATA) } } }, { key: "onCommunication", value: function (t) { var r = this, i = void 0, h = t.data; if (!(!h || typeof h != "string") && !(this.config.origin && this.config.origin !== t.origin)) { if (window.clearTimeout(this.timeout), h.indexOf(o.default.PARENT_DISCONNECTED) > -1 && (this.config.onParentDisconnect && this.config.onParentDisconnect(), window.removeEventListener("message", function (O) { return r.onCommunication(O) })), h.indexOf(o.default.HANDSHAKE_WITH_PARENT) > -1) { var T = void 0; i = h.split(o.default.HANDSHAKE_WITH_PARENT)[1], this._setData(i), this._parseData(i), T = { id: this.tabId, isSiteInsideFrame: this.config.isSiteInsideFrame }, this.sendMessageToParent(T, o.default.HANDSHAKE), this.config.onInitialize && this.config.onInitialize() } if (h.indexOf(o.default.PARENT_COMMUNICATED) > -1) { i = h.split(o.default.PARENT_COMMUNICATED)[1]; try { i = this.config.parse(i) } catch { throw new Error(v.default.INVALID_JSON) } this.config.onParentCommunication && this.config.onParentCommunication(i) } } } }, { key: "addListeners", value: function () { var t = this; window.onbeforeunload = function (r) { var i = { id: t.tabId, isSiteInsideFrame: t.config.isSiteInsideFrame }; t.sendMessageToParent(i, o.default.ON_BEFORE_UNLOAD) }, window.removeEventListener("message", function (r) { return t.onCommunication(r) }), window.addEventListener("message", function (r) { return t.onCommunication(r) }) } }, { key: "setHandshakeExpiry", value: function () { var t = this; return window.setTimeout(function () { t.config.onHandShakeExpiry && t.config.onHandShakeExpiry() }, this.handshakeExpiryLimit) } }, { key: "sendMessageToParent", value: function (t, r) { var i = void 0, h = r || o.default.CUSTOM; t = h + this.config.stringify(t), window.top.opener && (i = this.config.origin || "*", window.top.opener.postMessage(t, i)) } }, { key: "getTabInfo", value: function () { return { id: this.tabId, name: this.tabName, parentName: this.tabParentName, isSiteInsideFrame: this.config.isSiteInsideFrame } } }, { key: "init", value: function () { this.isSessionStorageSupported = this._isSessionStorage(), this.addListeners(), this._restoreData(), this.sendMessageToParent(this.getTabInfo(), o.default.LOADED), this.timeout = this.setHandshakeExpiry(), this.config.onReady && this.config.onReady() } }]), n }(); d.default = _ }])
    })
})(I); var R = U(I.exports); function H() {
    const y = document.createElement("html"); let C = `<head>

  <style>

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .head {
     
      text-align: center;
     
  }

  html .web-editor-inspect,
html .web-editor-inspect-active {
  outline: 2px dashed rgb(119, 0, 255) !important;
  cursor: default !important;
}
html .web-editor-inspect-active {
  outline-style: solid !important;
}

  .moe-editor{
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100vw;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(184, 193, 205, 0.61), 1px 4px 6px rgba(235, 239, 248, 0.1);
    border-radius: 0px 0px 10px 10px;
    padding-top:10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
  }



  </style>

</head>`, p = `
  <body>
    <div class="moe-editor">
      <h2 class="head">Moengage Editor</h2>
      <div>
        <input id="moe-message"/>
        <button id="moe-send">Send to parent</button>
        <button id="moe-exit">Save and Exit</button>
      <div>
    </div>
  </body>  
`; y.innerHTML = `${C}${p}`, document.body.insertBefore(y, document.body.childNodes[0])
} H(); var B = { onHandshakeCallback: function () { console.log("onHandshakeCallback :>> ", "onHandshakeCallback") }, onReady: function () { console.log("onReady") }, onInitialize: function () { console.log("onInitialize") }, onParentDisconnect: function () { console.log("onParentDisconnect"), alert("Parent disconnected") }, handshakeExpiryLimit: 4e3, onParentCommunication: function (y) { console.log("data :>> ", y), alert("Parent message: " + y) } }; let F = new R.Child(B); function D(y) { F.sendMessageToParent(y) } let P = document.getElementById("moe-message"), K = document.getElementById("moe-send"); K.addEventListener("click", () => { D(P.value) }); let j = document.getElementById("moe-exit"); j.addEventListener("click", () => { D(P.value), window.close() });
