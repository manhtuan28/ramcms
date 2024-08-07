/*!
 * artplayer.js v4.5.12
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2022 Harvey Zack
 * Released under the MIT License.
 */
! function(e, t, r, o, i) {
	var a = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
		n = "function" == typeof a.parcelRequireb749 && a.parcelRequireb749,
		s = n.cache || {},
		l = "undefined" != typeof module && "function" == typeof module.require && module.require.bind(module);

	function c(t, r) {
		if (!s[t]) {
			if (!e[t]) {
				var o = "function" == typeof a.parcelRequireb749 && a.parcelRequireb749;
				if (!r && o) return o(t, !0);
				if (n) return n(t, !0);
				if (l && "string" == typeof t) return l(t);
				var i = new Error("Cannot find module '" + t + "'");
				throw i.code = "MODULE_NOT_FOUND", i
			}
			p.resolve = function(r) {
				var o = e[t][1][r];
				return null != o ? o : r
			}, p.cache = {};
			var u = s[t] = new c.Module(t);
			e[t][0].call(u.exports, p, u, u.exports, this)
		}
		return s[t].exports;

		function p(e) {
			var t = p.resolve(e);
			return !1 === t ? {} : c(t)
		}
	}
	c.isParcelRequire = !0, c.Module = function(e) {
		this.id = e, this.bundle = c, this.exports = {}
	}, c.modules = e, c.cache = s, c.parent = n, c.register = function(t, r) {
		e[t] = [function(e, t) {
			t.exports = r
		}, {}]
	}, Object.defineProperty(c, "root", {
		get: function() {
			return a.parcelRequireb749
		}
	}), a.parcelRequireb749 = c;
	for (var u = 0; u < t.length; u++) c(t[u]);
	var p = c(r);
	"object" == typeof exports && "undefined" != typeof module ? module.exports = p : "function" == typeof define && define.amd && define((function() {
		return p
	}))
}({
	abjMI: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("bundle-text:./style/index.less"),
			a = o.interopDefault(i),
			n = e("option-validator"),
			s = o.interopDefault(n),
			l = e("./utils/emitter"),
			c = o.interopDefault(l),
			u = e("./utils"),
			p = e("./scheme"),
			d = o.interopDefault(p),
			f = e("./config"),
			h = o.interopDefault(f),
			m = e("./whitelist"),
			g = o.interopDefault(m),
			y = e("./template"),
			v = o.interopDefault(y),
			b = e("./i18n"),
			x = o.interopDefault(b),
			w = e("./player"),
			j = o.interopDefault(w),
			k = e("./control"),
			S = o.interopDefault(k),
			I = e("./contextmenu"),
			$ = o.interopDefault(I),
			O = e("./info"),
			T = o.interopDefault(O),
			E = e("./subtitle"),
			M = o.interopDefault(E),
			P = e("./events"),
			F = o.interopDefault(P),
			C = e("./hotkey"),
			H = o.interopDefault(C),
			A = e("./layer"),
			R = o.interopDefault(A),
			D = e("./loading"),
			z = o.interopDefault(D),
			B = e("./notice"),
			L = o.interopDefault(B),
			N = e("./mask"),
			V = o.interopDefault(N),
			_ = e("./icons"),
			Z = o.interopDefault(_),
			q = e("./setting"),
			W = o.interopDefault(q),
			U = e("./storage"),
			Y = o.interopDefault(U),
			X = e("./plugins"),
			G = o.interopDefault(X),
			J = e("./mobile"),
			K = o.interopDefault(J);
		let Q = 0;
		const ee = [];
		class te extends c.default {
			constructor(e, t) {
				super(), this.id = ++Q;
				const r = u.mergeDeep(te.option, e);
				if (this.option = (0, s.default)(r, d.default), this.isLock = !1, this.isReady = !1, this.isFocus = !1, this.isInput = !1, this.isRotate = !1, this.isDestroy = !1, this.whitelist = new(0, g.default)(this), this.template = new(0, v.default)(this), this.events = new(0, F.default)(this), this.whitelist.state ? (this.storage = new(0, Y.default)(this), this.icons = new(0, Z.default)(this), this.i18n = new(0, x.default)(this), this.notice = new(0, L.default)(this), this.player = new(0, j.default)(this), this.layers = new(0, R.default)(this), this.controls = new(0, S.default)(this), this.contextmenu = new(0, $.default)(this), this.subtitle = new(0, M.default)(this), this.info = new(0, T.default)(this), this.loading = new(0, z.default)(this), this.hotkey = new(0, H.default)(this), this.mask = new(0, V.default)(this), this.setting = new(0, W.default)(this), this.plugins = new(0, G.default)(this)) : this.mobile = new(0, K.default)(this), "function" == typeof t && this.on("ready", (() => t.call(this, this))), te.DEGUG) {
					const e = e => console.log(`[ART.${this.id}] -> ${e}`);
					e("Version@" + te.version), e("Env@" + te.env), e("Build@" + te.build);
					for (let t = 0; t < h.default.events.length; t++) this.on("video:" + h.default.events[t], (t => e("Event@" + t.type)))
				}
				ee.push(this)
			}
			static get instances() {
				return ee
			}
			static get version() {
				return "4.5.12"
			}
			static get env() {
				return "production"
			}
			static get build() {
				return "2022-11-20 12:35:22"
			}
			static get config() {
				return h.default
			}
			static get utils() {
				return u
			}
			static get scheme() {
				return d.default
			}
			static get Emitter() {
				return c.default
			}
			static get validator() {
				return s.default
			}
			static get kindOf() {
				return s.default.kindOf
			}
			static get html() {
				return v.default.html
			}
			static get option() {
				return {
					id: "",
					container: "#artplayer",
					url: "",
					poster: "",
					title: "",
					type: "",
					theme: "#f00",
					volume: .7,
					isLive: !1,
					muted: !1,
					autoplay: !1,
					autoSize: !1,
					autoMini: !1,
					loop: !1,
					flip: !1,
					playbackRate: !1,
					aspectRatio: !1,
					screenshot: !1,
					setting: !1,
					hotkey: !0,
					pip: !1,
					mutex: !0,
					backdrop: !0,
					fullscreen: !1,
					fullscreenWeb: !1,
					subtitleOffset: !1,
					miniProgressBar: !1,
					useSSR: !1,
					playsInline: !0,
					lock: !1,
					fastForward: !1,
					autoPlayback: !1,
					autoOrientation: !1,
					airplay: !1,
					layers: [],
					contextmenu: [],
					controls: [],
					settings: [],
					quality: [],
					highlight: [],
					plugins: [],
					whitelist: [],
					thumbnails: {
						url: "",
						number: 60,
						column: 10,
						width: 0,
						height: 0
					},
					subtitle: {
						url: "",
						type: "",
						style: {},
						encoding: "utf-8"
					},
					moreVideoAttr: {
						controls: !1,
						preload: u.isSafari ? "auto" : "metadata"
					},
					icons: {},
					customType: {},
					lang: navigator.language.toLowerCase()
				}
			}
			get proxy() {
				return this.events.proxy
			}
			get query() {
				return this.template.query
			}
			get video() {
				return this.template.$video
			}
			destroy(e = !0) {
				this.events.destroy(), this.template.destroy(e), ee.splice(ee.indexOf(this), 1), this.isDestroy = !0, this.emit("destroy")
			}
		}
		if (r.default = te, te.DEGUG = !1, te.CONTEXTMENU = !0, te.NOTICE_TIME = 2e3, te.SETTING_WIDTH = 250, te.SETTING_ITEM_WIDTH = 200, te.SETTING_ITEM_HEIGHT = 35, te.INDICATOR_SIZE = 14, te.INDICATOR_SIZE_ICON = 16, te.INDICATOR_SIZE_MOBILE = 18, te.INDICATOR_SIZE_MOBILE_ICON = 20, te.VOLUME_PANEL_WIDTH = 60, te.VOLUME_HANDLE_WIDTH = 12, te.RESIZE_TIME = 500, te.SCROLL_TIME = 200, te.SCROLL_GAP = 50, te.AUTO_PLAYBACK_MAX = 10, te.AUTO_PLAYBACK_MIN = 5, te.AUTO_PLAYBACK_TIMEOUT = 3e3, te.RECONNECT_TIME_MAX = 5, te.RECONNECT_SLEEP_TIME = 1e3, te.CONTROL_HIDE_TIME = 3e3, te.DB_CLICE_TIME = 300, te.MOBILE_AUTO_PLAYBACKRATE = 3, te.MOBILE_AUTO_PLAYBACKRATE_TIME = 1e3, te.MOBILE_AUTO_ORIENTATION_TIME = 200, te.INFO_LOOP_TIME = 1e3, te.FAST_FORWARD_VALUE = 3, te.FAST_FORWARD_TIME = 1e3, te.TOUCH_MOVE_RATIO = .5, te.VOLUME_STEP = .1, te.SEEK_STEP = 5, te.PROGRESS_HEIGHT = 4, te.PLAYBACK_RATE = [.5, .75, 1, 1.25, 1.5, 2], te.ASPECT_RATIO = ["default", "4:3", "16:9"], te.FLIP = ["normal", "horizontal", "vertical"], "undefined" != typeof document && !document.getElementById("artplayer-style")) {
			const e = u.createElement("style");
			e.id = "artplayer-style", e.textContent = a.default, document.head.appendChild(e)
		}
		"undefined" != typeof window && (window.Artplayer = te), console.log(`%c ArtPlayer %c ${te.version} %c https://artplayer.org`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "")
	}, {
		"bundle-text:./style/index.less": "kfOe8",
		"option-validator": "9I0i9",
		"./utils/emitter": "2bGVu",
		"./utils": "h3rH9",
		"./scheme": "AdvwB",
		"./config": "9Xmqu",
		"./whitelist": "jgRHH",
		"./template": "2gKYH",
		"./i18n": "1AdeF",
		"./player": "556MW",
		"./control": "14IBq",
		"./contextmenu": "7iUum",
		"./info": "hD2Lg",
		"./subtitle": "lum0D",
		"./events": "1Epl5",
		"./hotkey": "eTow4",
		"./layer": "4fDoD",
		"./loading": "fE0Sp",
		"./notice": "9PuGy",
		"./mask": "2etr0",
		"./icons": "6dYSr",
		"./setting": "bRHiA",
		"./storage": "f2Thp",
		"./plugins": "96ThS",
		"./mobile": "6M149",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	kfOe8: [function(e, t, r) {
		t.exports = '.art-video-player{z-index:20;width:100%;height:100%;zoom:1;color:#eee;text-align:left;direction:ltr;user-select:none;-webkit-tap-highlight-color:#0000;touch-action:manipulation;-ms-high-contrast-adjust:none;background-color:#000;outline:0;margin:0 auto;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:14px;line-height:1.3;display:flex;position:relative}.art-video-player *,.art-video-player :before,.art-video-player :after{box-sizing:border-box;margin:0;padding:0}.art-video-player ::-webkit-scrollbar{width:5px;height:5px}.art-video-player ::-webkit-scrollbar-thumb{background-color:#666}.art-video-player ::-webkit-scrollbar-thumb:hover{background-color:#ccc}.art-video-player .art-icon{justify-content:center;align-items:center;line-height:1.5;display:inline-flex}.art-video-player .art-icon svg{fill:#fff}.art-video-player img{max-width:100%;vertical-align:top}@supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)){.art-video-player .art-backdrop-filter{-webkit-backdrop-filter:saturate(180%)blur(20px);backdrop-filter:saturate(180%)blur(20px);background-color:#000000b3!important}}.art-video-player .art-video{z-index:10;width:100%;height:100%;cursor:pointer;background-color:#000;position:absolute;inset:0}.art-video-player .art-poster{z-index:11;width:100%;height:100%;user-select:none;pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;inset:0}.art-video-player .art-subtitle{z-index:20;width:100%;text-align:center;color:#fff;pointer-events:none;text-shadow:1px 0 1px #000,0 1px 1px #000,-1px 0 1px #000,0 -1px 1px #000,1px 1px 1px #000,-1px -1px 1px #000,1px -1px 1px #000,-1px 1px 1px #000;padding:0 20px;font-size:20px;transition:bottom .2s;display:none;position:absolute;bottom:10px}.art-video-player .art-subtitle p{word-break:break-all;height:fit-content;margin:5px 0 0;line-height:1.2}.art-video-player.art-subtitle-show .art-subtitle{display:block}.art-video-player.art-control-show .art-subtitle{bottom:50px}.art-video-player .art-danmuku{z-index:30;width:100%;height:100%;pointer-events:none;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers{z-index:40;width:100%;height:100%;pointer-events:none;display:none;position:absolute;inset:0;overflow:hidden}.art-video-player .art-layers .art-layer{pointer-events:auto}.art-video-player.art-layer-show .art-layers{display:block}.art-video-player .art-mask{z-index:50;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:none;position:absolute;inset:0;overflow:hidden}.art-video-player .art-mask .art-state{width:60px;height:60px;opacity:.85;cursor:pointer;pointer-events:auto;justify-content:center;align-items:center;display:flex;position:absolute;bottom:65px;right:30px}.art-video-player.art-mask-show .art-mask{display:flex}.art-video-player.art-mobile .art-state{position:static}.art-video-player .art-loading{z-index:70;width:100%;height:100%;pointer-events:none;justify-content:center;align-items:center;display:none;position:absolute;inset:0}.art-video-player.art-loading-show .art-loading{display:flex}.art-video-player .art-bottom{z-index:60;height:100px;opacity:0;visibility:hidden;pointer-events:none;background-image:linear-gradient(#0000,#0006,#000);background-position:bottom;background-repeat:repeat-x;flex-direction:column;justify-content:space-between;padding:50px 10px 0;transition:all .2s ease-in-out;display:flex;position:absolute;bottom:0;left:0;right:0}.art-video-player .art-bottom .art-progress{z-index:0;pointer-events:auto;flex:1;position:relative}.art-video-player .art-bottom .art-progress .art-control-progress{height:4px;cursor:pointer;flex-direction:row;align-items:center;display:flex;position:relative}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner{height:50%;width:100%;background:#fff3;align-items:center;transition:all .2s;display:flex;position:relative}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded{z-index:10;height:100%;width:0;background:#fff6;position:absolute;inset:0}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played{z-index:20;height:100%;width:0;position:absolute;inset:0}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight{z-index:30;height:100%;pointer-events:none;position:absolute;inset:0}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span{width:7px;height:100%;pointer-events:auto;background:#fff;display:inline-block;position:absolute;top:0;left:0}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{visibility:hidden;z-index:40;border-radius:50%;justify-content:center;align-items:center;transition:transform .1s ease-in-out;position:absolute;transform:scale(.1)}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon{width:100%;height:100%;pointer-events:none;user-select:none}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover{transform:scale(1.2)!important}.art-video-player .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip{z-index:50;height:20px;color:#fff;text-align:center;white-space:nowrap;background:#000000b3;border-radius:3px;padding:0 5px;font-size:12px;font-weight:700;line-height:20px;display:none;position:absolute;top:-25px;left:0}.art-video-player .art-bottom .art-progress .art-control-thumbnails{pointer-events:none;background-color:#000000b3;display:none;position:absolute;bottom:8px;left:0}.art-video-player .art-bottom .art-progress .art-control-loop{width:100%;height:100%;pointer-events:none;display:none;position:absolute;inset:0}.art-video-player .art-bottom .art-progress .art-control-loop .art-loop-point{width:2px;height:8px;background:#ffffffbf;position:absolute;top:-2px;left:0}.art-video-player .art-bottom .art-controls{z-index:1;pointer-events:auto;height:45px;justify-content:space-between;align-items:center;display:flex;position:relative}.art-video-player .art-bottom .art-controls .art-controls-left,.art-video-player .art-bottom .art-controls .art-controls-right{display:flex}.art-video-player .art-bottom .art-controls .art-controls-center{height:100%;flex:1;justify-content:center;align-items:center;padding:0 10px;display:flex}.art-video-player .art-bottom .art-controls .art-controls-right{justify-content:flex-end}.art-video-player .art-bottom .art-controls .art-control{opacity:.9;min-height:36px;min-width:36px;text-align:center;cursor:pointer;white-space:nowrap;justify-content:center;align-items:center;font-size:12px;line-height:1;display:flex}.art-video-player .art-bottom .art-controls .art-control .art-icon{float:left;height:36px;width:36px;justify-content:center;align-items:center;display:flex}.art-video-player .art-bottom .art-controls .art-control:hover{opacity:1}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel{float:left;width:0;height:100%;transition:margin .2s cubic-bezier(.4,0,1,1),width .2s cubic-bezier(.4,0,1,1);position:relative;overflow:hidden}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle{width:12px;height:12px;background:#fff;border-radius:12px;margin-top:-6px;position:absolute;top:50%;left:0}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before{background:#fff;left:-54px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after{background:#fff3;left:6px}.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:before,.art-video-player .art-bottom .art-controls .art-control-volume .art-volume-panel .art-volume-slider-handle:after{content:"";height:3px;width:60px;margin-top:-2px;display:block;position:absolute;top:50%}.art-video-player .art-bottom .art-controls .art-control-volume:hover .art-volume-panel{width:60px}.art-video-player .art-bottom .art-controls .art-control-quality{z-index:30;position:relative}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys{width:100px;text-align:center;color:#fff;background:#000c;border-radius:3px;padding:5px 0;display:none;position:absolute;bottom:35px}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item{height:30px;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px #00000080;line-height:30px;overflow:hidden}.art-video-player .art-bottom .art-controls .art-control-quality .art-qualitys .art-quality-item:hover{background-color:#ffffff1a}.art-video-player .art-bottom .art-controls .art-control-quality:hover .art-qualitys{display:block}.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner{height:100%}.art-video-player .art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator{visibility:visible;transform:scale(1)}.art-video-player.art-control-show .art-bottom,.art-video-player.art-hover .art-bottom{opacity:1;visibility:visible}.art-video-player.art-error .art-progress-indicator,.art-video-player.art-destroy .art-progress-indicator,.art-video-player.art-error .art-progress-tip,.art-video-player.art-destroy .art-progress-tip{display:none!important}.art-video-player.art-mobile .art-bottom{height:105px;padding:50px 7px 0}.art-video-player.art-mobile .art-bottom .art-controls{height:40px}.art-video-player.art-mobile .art-bottom .art-progress-indicator{visibility:visible!important;transform:scale(1)!important}.art-video-player .art-notice{z-index:80;width:100%;pointer-events:none;padding:10px;font-size:14px;display:none;position:absolute;top:0;left:0}.art-video-player .art-notice .art-notice-inner{color:#fff;background-color:#0009;border-radius:3px;padding:5px 10px;display:inline-block}.art-video-player.art-notice-show .art-notice{display:flex}.art-video-player .art-contextmenus{z-index:120;min-width:200px;background-color:#000000e6;border-radius:3px;flex-direction:column;padding:5px 0;display:none;position:absolute;top:10px;left:10px}.art-video-player .art-contextmenus .art-contextmenu{cursor:pointer;color:#fff;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px #00000080;border-bottom:1px solid #ffffff1a;padding:10px 15px;font-size:12px;display:block;overflow:hidden}.art-video-player .art-contextmenus .art-contextmenu a{color:#fff;text-decoration:none}.art-video-player .art-contextmenus .art-contextmenu span{padding:0 7px;display:inline-block}.art-video-player .art-contextmenus .art-contextmenu span:hover,.art-video-player .art-contextmenus .art-contextmenu span.art-current{color:var(--theme)}.art-video-player .art-contextmenus .art-contextmenu:hover{background-color:#ffffff1a}.art-video-player .art-contextmenus .art-contextmenu:last-child{border-bottom:none}.art-video-player.art-contextmenu-show .art-contextmenus{display:flex}.art-video-player .art-settings{z-index:90;height:auto;max-height:300px;background-color:#000000e6;border-radius:3px;font-size:13px;transition:all .2s;display:none;position:absolute;bottom:50px;right:10px;overflow:auto}.art-video-player .art-settings .art-setting-panel{display:none}.art-video-player .art-settings .art-setting-panel.art-current{display:block}.art-video-player .art-settings .art-setting-panel .art-setting-item{height:35px;cursor:pointer;color:#fffc;justify-content:space-between;align-items:center;padding:0 5px;line-height:1;display:flex;overflow:hidden}.art-video-player .art-settings .art-setting-panel .art-setting-item:hover{color:#fff;background-color:#ffffff1a}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current{color:var(--theme)}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon{width:30px;height:30px;justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check{visibility:hidden;height:15px}.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check{visibility:visible}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left{white-space:nowrap;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon{height:24px;width:24px;justify-content:center;align-items:center;margin-right:10px;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right{align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip{white-space:nowrap;color:#ffffff80;margin-right:5px;font-size:12px}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon{height:24px;justify-content:center;align-items:center;display:flex}.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range{height:3px;width:80px;appearance:none;background-color:#fff3;outline:none}.art-video-player .art-settings .art-setting-panel .art-setting-item-back{border-bottom:1px solid #ffffff1a}.art-video-player.art-setting-show .art-settings{display:block}.art-video-player.art-mobile .art-settings{max-height:200px}.art-video-player .art-info{z-index:100;width:350px;color:#fff;-webkit-font-smoothing:antialiased;background-color:#000000e6;flex-direction:column;padding:10px;font-family:Noto Sans CJK SC DemiLight,Roboto,Segoe UI,Tahoma,Arial,Helvetica,sans-serif;font-size:12px;display:none;position:absolute;top:10px;left:10px}.art-video-player .art-info .art-info-item{margin-bottom:5px;display:flex}.art-video-player .art-info .art-info-item .art-info-title{width:100px;text-align:right}.art-video-player .art-info .art-info-item .art-info-content{text-overflow:ellipsis;white-space:nowrap;user-select:all;flex:1;padding-left:5px;overflow:hidden}.art-video-player .art-info .art-info-item:last-child{margin-bottom:0}.art-video-player .art-info .art-info-close{cursor:pointer;position:absolute;top:5px;right:5px}.art-video-player.art-info-show .art-info{display:flex}.art-video-player.art-hide-cursor *{cursor:none!important}.art-video-player[data-aspect-ratio] video{box-sizing:content-box;object-fit:fill}.art-video-player.art-fullscreen-web{z-index:9999;width:100%;height:100%;position:fixed;inset:0}.art-video-player .art-mini-header{z-index:110;height:35px;color:#fff;opacity:0;visibility:hidden;background-color:#00000080;justify-content:space-between;align-items:center;line-height:35px;transition:all .2s ease-in-out;display:none;position:absolute;top:0;left:0;right:0}.art-video-player .art-mini-header .art-mini-title{text-overflow:ellipsis;white-space:nowrap;cursor:move;flex:1;padding:0 10px;overflow:hidden}.art-video-player .art-mini-header .art-mini-close{width:35px;text-align:center;cursor:pointer;font-size:22px}.art-video-player.art-is-dragging{opacity:.7}.art-video-player.art-mini{z-index:9999;width:400px;height:225px;position:fixed;box-shadow:0 2px 5px #00000029,0 3px 6px #0003}.art-video-player.art-mini .art-mini-header{user-select:none;display:flex}.art-video-player.art-mini.art-hover .art-mini-header{opacity:1;visibility:visible}.art-video-player.art-mini .art-mask .art-state{position:static}.art-video-player.art-mini .art-contextmenu,.art-video-player.art-mini .art-bottom,.art-video-player.art-mini .art-danmu,.art-video-player.art-mini .art-info,.art-video-player.art-mini .art-layers,.art-video-player.art-mini .art-notice,.art-video-player.art-mini .art-settings,.art-video-player.art-mini .art-subtitle{display:none!important}.art-auto-size{justify-content:center;align-items:center;display:flex}.art-auto-size .art-video-player{transition:all .2s}.art-video-player[data-flip=horizontal] .art-video{transform:scaleX(-1)}.art-video-player[data-flip=vertical] .art-video{transform:scaleY(-1)}.art-video-player .art-layer-miniProgressBar{height:2px;background-color:var(--theme);display:block;position:absolute;bottom:0;left:0;right:0}.art-video-player .art-layer-lock{height:34px;width:34px;color:#fff;background-color:#00000080;border-radius:50%;justify-content:center;align-items:center;display:none;position:absolute;top:calc(50% - 17px);left:15px}.art-video-player .art-layer-autoPlayback{background-color:#000c;border-radius:3px;align-items:center;padding:10px;line-height:1;display:none;position:absolute;bottom:60px;left:20px}.art-video-player .art-layer-autoPlayback .art-autoPlayback-close{cursor:pointer;align-items:center;margin-right:10px;display:flex}.art-video-player .art-layer-autoPlayback .art-autoPlayback-close svg{width:15px;height:15px;fill:var(--theme)}.art-video-player .art-layer-autoPlayback .art-autoPlayback-last{margin-right:10px}.art-video-player .art-layer-autoPlayback .art-autoPlayback-jump{color:var(--theme);cursor:pointer}.art-video-player.art-lock .art-bottom{display:none!important}.art-video-player.art-lock .art-subtitle{bottom:10px!important}.art-video-player.art-lock .art-layer-miniProgressBar{display:block!important}.art-video-player.art-control-show .art-layer-miniProgressBar{display:none}.art-video-player.art-control-show .art-layer-lock{display:flex}.art-video-player .art-control-selector{position:relative}.art-video-player .art-control-selector .art-selector-list{min-width:100px;max-width:200px;max-height:200px;text-align:center;color:#fff;background-color:#000c;border-radius:3px;padding:5px 0;display:none;position:absolute;bottom:35px;overflow:auto}.art-video-player .art-control-selector .art-selector-list .art-selector-item{height:30px;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 0 2px #00000080;padding:0 5px;line-height:30px;overflow:hidden}.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover{background-color:#ffffff1a}.art-video-player .art-control-selector .art-selector-list .art-selector-item:hover,.art-video-player .art-control-selector .art-selector-list .art-selector-item.art-current{color:var(--theme)}.art-video-player .art-control-selector:hover .art-selector-list{display:block}[class*=hint--]{font-style:normal;display:inline-block;position:relative}[class*=hint--]:before,[class*=hint--]:after{visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:all .3s;position:absolute;transform:translate(0,0)}[class*=hint--]:hover:before,[class*=hint--]:hover:after{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";z-index:1000001;background:0 0;border:6px solid #0000;position:absolute}[class*=hint--]:after{color:#fff;white-space:nowrap;background:#000;padding:8px 10px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;line-height:12px}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:before,[aria-label=""]:after,[data-hint=""]:before,[data-hint=""]:after{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#000}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#000}.hint--left:before{border-left-color:#000}.hint--right:before{border-right-color:#000}.hint--top:before{margin-bottom:-11px}.hint--top:before,.hint--top:after{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translate(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translate(-50%)translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:before,.hint--bottom:after{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translate(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translate(-50%)translateY(8px)}.hint--right:before{margin-bottom:-6px;margin-left:-11px}.hint--right:after{margin-bottom:-14px}.hint--right:before,.hint--right:after{bottom:50%;left:100%}.hint--right:hover:before,.hint--right:hover:after{transform:translate(8px)}.hint--left:before{margin-bottom:-6px;margin-right:-11px}.hint--left:after{margin-bottom:-14px}.hint--left:before,.hint--left:after{bottom:50%;right:100%}.hint--left:hover:before,.hint--left:hover:after{transform:translate(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:before,.hint--top-left:after{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{margin-left:12px;transform:translate(-100%)}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translate(-100%)translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:before,.hint--top-right:after{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{margin-left:-12px;transform:translate(0)}.hint--top-right:hover:before,.hint--top-right:hover:after{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:before,.hint--bottom-left:after{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{margin-left:12px;transform:translate(-100%)}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translate(-100%)translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:before,.hint--bottom-right:after{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{margin-left:-12px;transform:translate(0)}.hint--bottom-right:hover:before,.hint--bottom-right:hover:after{transform:translateY(8px)}.hint--small:after,.hint--medium:after,.hint--large:after{white-space:normal;word-wrap:break-word;line-height:1.4em}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px #000;box-shadow:4px 4px 8px #0000004d}.hint--error:after{text-shadow:0 -1px #592726;background-color:#b34e4d}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{text-shadow:0 -1px #6c5328;background-color:#c09854}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{text-shadow:0 -1px #1a3c4d;background-color:#3986ac}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{text-shadow:0 -1px #1a321a;background-color:#458746}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translate(-50%)translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translate(-100%)translateY(-8px)}.hint--always.hint--top-right:before,.hint--always.hint--top-right:after{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translate(-50%)translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translate(-100%)translateY(8px)}.hint--always.hint--bottom-right:before,.hint--always.hint--bottom-right:after{transform:translateY(8px)}.hint--always.hint--left:before,.hint--always.hint--left:after{transform:translate(-8px)}.hint--always.hint--right:before,.hint--always.hint--right:after{transform:translate(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:before,.hint--no-animate:after{transition-duration:0s}.hint--bounce:before,.hint--bounce:after{-webkit-transition:opacity .3s,visibility .3s,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s,visibility .3s,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s,visibility .3s,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:before,.hint--no-shadow:after{text-shadow:initial;box-shadow:initial}.hint--no-arrow:before{display:none}'
	}, {}],
	"9I0i9": [function(e, t, r) {
		t.exports = function() {
			"use strict";

			function e(t) {
				return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(t)
			}
			var t = Object.prototype.toString,
				r = function(r) {
					if (void 0 === r) return "undefined";
					if (null === r) return "null";
					var i = e(r);
					if ("boolean" === i) return "boolean";
					if ("string" === i) return "string";
					if ("number" === i) return "number";
					if ("symbol" === i) return "symbol";
					if ("function" === i) return function(e) {
						return "GeneratorFunction" === o(e)
					}(r) ? "generatorfunction" : "function";
					if (function(e) {
							return Array.isArray ? Array.isArray(e) : e instanceof Array
						}(r)) return "array";
					if (function(e) {
							return !(!e.constructor || "function" != typeof e.constructor.isBuffer) && e.constructor.isBuffer(e)
						}(r)) return "buffer";
					if (function(e) {
							try {
								if ("number" == typeof e.length && "function" == typeof e.callee) return !0
							} catch (e) {
								if (-1 !== e.message.indexOf("callee")) return !0
							}
							return !1
						}(r)) return "arguments";
					if (function(e) {
							return e instanceof Date || "function" == typeof e.toDateString && "function" == typeof e.getDate && "function" == typeof e.setDate
						}(r)) return "date";
					if (function(e) {
							return e instanceof Error || "string" == typeof e.message && e.constructor && "number" == typeof e.constructor.stackTraceLimit
						}(r)) return "error";
					if (function(e) {
							return e instanceof RegExp || "string" == typeof e.flags && "boolean" == typeof e.ignoreCase && "boolean" == typeof e.multiline && "boolean" == typeof e.global
						}(r)) return "regexp";
					switch (o(r)) {
						case "Symbol":
							return "symbol";
						case "Promise":
							return "promise";
						case "WeakMap":
							return "weakmap";
						case "WeakSet":
							return "weakset";
						case "Map":
							return "map";
						case "Set":
							return "set";
						case "Int8Array":
							return "int8array";
						case "Uint8Array":
							return "uint8array";
						case "Uint8ClampedArray":
							return "uint8clampedarray";
						case "Int16Array":
							return "int16array";
						case "Uint16Array":
							return "uint16array";
						case "Int32Array":
							return "int32array";
						case "Uint32Array":
							return "uint32array";
						case "Float32Array":
							return "float32array";
						case "Float64Array":
							return "float64array"
					}
					if (function(e) {
							return "function" == typeof e.throw && "function" == typeof e.return && "function" == typeof e.next
						}(r)) return "generator";
					switch (i = t.call(r)) {
						case "[object Object]":
							return "object";
						case "[object Map Iterator]":
							return "mapiterator";
						case "[object Set Iterator]":
							return "setiterator";
						case "[object String Iterator]":
							return "stringiterator";
						case "[object Array Iterator]":
							return "arrayiterator"
					}
					return i.slice(8, -1).toLowerCase().replace(/\s/g, "")
				};

			function o(e) {
				return e.constructor ? e.constructor.name : null
			}

			function i(e, t) {
				var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["option"];
				return a(e, t, o), n(e, t, o),
					function(e, t, o) {
						var s = r(t),
							l = r(e);
						if ("object" === s) {
							if ("object" !== l) throw new Error("[Type Error]: '".concat(o.join("."), "' require 'object' type, but got '").concat(l, "'"));
							Object.keys(t).forEach((function(r) {
								var s = e[r],
									l = t[r],
									c = o.slice();
								c.push(r), a(s, l, c), n(s, l, c), i(s, l, c)
							}))
						}
						if ("array" === s) {
							if ("array" !== l) throw new Error("[Type Error]: '".concat(o.join("."), "' require 'array' type, but got '").concat(l, "'"));
							e.forEach((function(r, s) {
								var l = e[s],
									c = t[s] || t[0],
									u = o.slice();
								u.push(s), a(l, c, u), n(l, c, u), i(l, c, u)
							}))
						}
					}(e, t, o), e
			}

			function a(e, t, o) {
				if ("string" === r(t)) {
					var i = r(e);
					if ("?" === t[0] && (t = t.slice(1) + "|undefined"), !(-1 < t.indexOf("|") ? t.split("|").map((function(e) {
							return e.toLowerCase().trim()
						})).filter(Boolean).some((function(e) {
							return i === e
						})) : t.toLowerCase().trim() === i)) throw new Error("[Type Error]: '".concat(o.join("."), "' require '").concat(t, "' type, but got '").concat(i, "'"))
				}
			}

			function n(e, t, o) {
				if ("function" === r(t)) {
					var i = t(e, r(e), o);
					if (!0 !== i) {
						var a = r(i);
						throw "string" === a ? new Error(i) : "error" === a ? i : new Error("[Validator Error]: The scheme for '".concat(o.join("."), "' validator require return true, but got '").concat(i, "'"))
					}
				}
			}
			return i.kindOf = r, i
		}()
	}, {}],
	"2bGVu": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		r.default = class {
			on(e, t, r) {
				const o = this.e || (this.e = {});
				return (o[e] || (o[e] = [])).push({
					fn: t,
					ctx: r
				}), this
			}
			once(e, t, r) {
				const o = this;

				function i(...a) {
					o.off(e, i), t.apply(r, a)
				}
				return i._ = t, this.on(e, i, r)
			}
			emit(e, ...t) {
				const r = ((this.e || (this.e = {}))[e] || []).slice();
				for (let e = 0; e < r.length; e += 1) r[e].fn.apply(r[e].ctx, t);
				return this
			}
			off(e, t) {
				const r = this.e || (this.e = {}),
					o = r[e],
					i = [];
				if (o && t)
					for (let e = 0, r = o.length; e < r; e += 1) o[e].fn !== t && o[e].fn._ !== t && i.push(o[e]);
				return i.length ? r[e] = i : delete r[e], this
			}
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	guZOB: [function(e, t, r) {
		r.interopDefault = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}, r.defineInteropFlag = function(e) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, r.exportAll = function(e, t) {
			return Object.keys(e).forEach((function(r) {
				"default" === r || "__esModule" === r || t.hasOwnProperty(r) || Object.defineProperty(t, r, {
					enumerable: !0,
					get: function() {
						return e[r]
					}
				})
			})), t
		}, r.export = function(e, t, r) {
			Object.defineProperty(e, t, {
				enumerable: !0,
				get: r
			})
		}
	}, {}],
	h3rH9: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./dom");
		o.exportAll(i, r);
		var a = e("./error");
		o.exportAll(a, r);
		var n = e("./subtitle");
		o.exportAll(n, r);
		var s = e("./file");
		o.exportAll(s, r);
		var l = e("./property");
		o.exportAll(l, r);
		var c = e("./time");
		o.exportAll(c, r);
		var u = e("./format");
		o.exportAll(u, r);
		var p = e("./compatibility");
		o.exportAll(p, r)
	}, {
		"./dom": "XgAQE",
		"./error": "2nFlF",
		"./subtitle": "yqFoT",
		"./file": "1VRQn",
		"./property": "3weX2",
		"./time": "7kBIx",
		"./format": "13atT",
		"./compatibility": "luXC1",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	XgAQE: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "query", (() => a)), o.export(r, "queryAll", (() => n)), o.export(r, "addClass", (() => s)), o.export(r, "removeClass", (() => l)), o.export(r, "hasClass", (() => c)), o.export(r, "append", (() => u)), o.export(r, "remove", (() => p)), o.export(r, "setStyle", (() => d)), o.export(r, "setStyles", (() => f)), o.export(r, "getStyle", (() => h)), o.export(r, "sublings", (() => m)), o.export(r, "inverseClass", (() => g)), o.export(r, "tooltip", (() => y)), o.export(r, "isInViewport", (() => v)), o.export(r, "includeFromEvent", (() => b)), o.export(r, "replaceElement", (() => x)), o.export(r, "createElement", (() => w));
		var i = e("./compatibility");

		function a(e, t = document) {
			return t.querySelector(e)
		}

		function n(e, t = document) {
			return Array.from(t.querySelectorAll(e))
		}

		function s(e, t) {
			return e.classList.add(t)
		}

		function l(e, t) {
			return e.classList.remove(t)
		}

		function c(e, t) {
			return e.classList.contains(t)
		}

		function u(e, t) {
			return t instanceof Element ? e.appendChild(t) : e.insertAdjacentHTML("beforeend", String(t)), e.lastElementChild || e.lastChild
		}

		function p(e) {
			return e.parentNode.removeChild(e)
		}

		function d(e, t, r) {
			return e.style[t] = r, e
		}

		function f(e, t) {
			return Object.keys(t).forEach((r => {
				d(e, r, t[r])
			})), e
		}

		function h(e, t, r = !0) {
			const o = window.getComputedStyle(e, null).getPropertyValue(t);
			return r ? parseFloat(o) : o
		}

		function m(e) {
			return Array.from(e.parentElement.children).filter((t => t !== e))
		}

		function g(e, t) {
			m(e).forEach((e => l(e, t))), s(e, t)
		}

		function y(e, t, r = "top") {
			i.isMobile || (e.setAttribute("aria-label", t), s(e, "hint--rounded"), s(e, `hint--${r}`))
		}

		function v(e, t = 0) {
			const r = e.getBoundingClientRect(),
				o = window.innerHeight || document.documentElement.clientHeight,
				i = window.innerWidth || document.documentElement.clientWidth,
				a = r.top - t <= o && r.top + r.height + t >= 0,
				n = r.left - t <= i + t && r.left + r.width + t >= 0;
			return a && n
		}

		function b(e, t) {
			return e.composedPath && e.composedPath().indexOf(t) > -1
		}

		function x(e, t) {
			return t.parentNode.replaceChild(e, t), e
		}

		function w(e) {
			return document.createElement(e)
		}
	}, {
		"./compatibility": "luXC1",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	luXC1: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "userAgent", (() => i)), o.export(r, "isMobile", (() => a)), o.export(r, "isSafari", (() => n)), o.export(r, "isWechat", (() => s)), o.export(r, "isIE", (() => l)), o.export(r, "isAndroid", (() => c)), o.export(r, "isIOS", (() => u));
		const i = "undefined" != typeof window ? window.navigator.userAgent : "",
			a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i),
			n = /^((?!chrome|android).)*safari/i.test(i),
			s = /MicroMessenger/i.test(i),
			l = /MSIE|Trident/i.test(i),
			c = /android/i.test(i),
			u = /iPad|iPhone|iPod/i.test(i) && !window.MSStream
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2nFlF": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "ArtPlayerError", (() => i)), o.export(r, "errorHandle", (() => a));
		class i extends Error {
			constructor(e, t) {
				super(e), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t || this.constructor), this.name = "ArtPlayerError"
			}
		}

		function a(e, t) {
			if (!e) throw new i(t);
			return e
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	yqFoT: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");

		function i(e) {
			return "WEBVTT \r\n\r\n".concat((t = e, t.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, ((e, t, r) => {
				let o = r.slice(0, 3);
				return 1 === r.length && (o = r + "00"), 2 === r.length && (o = r + "0"), `${t},${o}`
			}))).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
			var t
		}

		function a(e) {
			return URL.createObjectURL(new Blob([e], {
				type: "text/vtt"
			}))
		}

		function n(e) {
			const t = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");

			function r(e = "") {
				return e.split(/[:.]/).map(((e, t, r) => {
					if (t === r.length - 1) {
						if (1 === e.length) return `.${e}00`;
						if (2 === e.length) return `.${e}0`
					} else if (1 === e.length) return (0 === t ? "0" : ":0") + e;
					return 0 === t ? e : t === r.length - 1 ? `.${e}` : `:${e}`
				})).join("")
			}
			return `WEBVTT\n\n${e.split(/\r?\n/).map((e=>{const o=e.match(t);return o?{start:r(o[1].trim()),end:r(o[2].trim()),text:o[5].replace(/{[\s\S]*?}/g,"").replace(/(\\N)/g,"\n").trim().split(/\r?\n/).map((e=>e.trim())).join("\n")}:null})).filter((e=>e)).map(((e,t)=>e?`
			$ {
				t + 1
			}\
			n$ {
				e.start
			}--\x3e $ {
				e.end
			}\
			n$ {
				e.text
			}
			`:"")).filter((e=>e.trim())).join("\n\n")}`
		}
		o.defineInteropFlag(r), o.export(r, "srtToVtt", (() => i)), o.export(r, "vttToBlob", (() => a)), o.export(r, "assToVtt", (() => n))
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"1VRQn": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");

		function i(e) {
			return e.includes("?") ? i(e.split("?")[0]) : e.includes("#") ? i(e.split("#")[0]) : e.trim().toLowerCase().split(".").pop()
		}

		function a(e, t) {
			const r = document.createElement("a");
			r.style.display = "none", r.href = e, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r)
		}
		o.defineInteropFlag(r), o.export(r, "getExt", (() => i)), o.export(r, "download", (() => a))
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"3weX2": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "def", (() => i)), o.export(r, "has", (() => n)), o.export(r, "get", (() => s)), o.export(r, "mergeDeep", (() => l));
		const i = Object.defineProperty,
			{
				hasOwnProperty: a
			} = Object.prototype;

		function n(e, t) {
			return a.call(e, t)
		}

		function s(e, t) {
			return Object.getOwnPropertyDescriptor(e, t)
		}

		function l(...e) {
			const t = e => e && "object" == typeof e && !Array.isArray(e);
			return e.reduce(((e, r) => (Object.keys(r).forEach((o => {
				const i = e[o],
					a = r[o];
				Array.isArray(i) && Array.isArray(a) ? e[o] = i.concat(...a) : !t(i) || !t(a) || a instanceof Element ? e[o] = a : e[o] = l(i, a)
			})), e)), {})
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7kBIx": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");

		function i(e = 0) {
			return new Promise((t => setTimeout(t, e)))
		}

		function a(e, t, r) {
			let o;

			function i(...i) {
				clearTimeout(o), o = setTimeout((function() {
					o = null, e.apply(r, i)
				}), t)
			}
			return i.clearTimeout = function() {
				clearTimeout(o)
			}, i
		}

		function n(e, t) {
			let r, o, i = !1;
			return function a(...n) {
				if (i) return r = n, void(o = this);
				i = !0, e.apply(this, n), setTimeout((() => {
					i = !1, r && (a.apply(o, r), r = null, o = null)
				}), t)
			}
		}
		o.defineInteropFlag(r), o.export(r, "sleep", (() => i)), o.export(r, "debounce", (() => a)), o.export(r, "throttle", (() => n))
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"13atT": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");

		function i(e, t, r) {
			return Math.max(Math.min(e, Math.max(t, r)), Math.min(t, r))
		}

		function a(e) {
			return e.charAt(0).toUpperCase() + e.slice(1)
		}

		function n(e) {
			return ["string", "number"].includes(typeof e)
		}

		function s(e) {
			const t = Math.floor(e / 3600),
				r = Math.floor((e - 3600 * t) / 60),
				o = Math.floor(e - 3600 * t - 60 * r);
			return (t > 0 ? [t, r, o] : [r, o]).map((e => e < 10 ? `0${e}` : String(e))).join(":")
		}

		function l(e) {
			return e.replace(/[&<>'"]/g, (e => ({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				'"': "&quot;"
			} [e] || e)))
		}
		o.defineInteropFlag(r), o.export(r, "clamp", (() => i)), o.export(r, "capitalize", (() => a)), o.export(r, "isStringOrNumber", (() => n)), o.export(r, "secondToTime", (() => s)), o.export(r, "escape", (() => l))
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	AdvwB: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "ComponentOption", (() => d));
		var i = e("../utils");
		const a = "array",
			n = "boolean",
			s = "string",
			l = "number",
			c = "object",
			u = "function";

		function p(e, t, r) {
			return (0, i.errorHandle)(t === s || t === l || e instanceof Element, `${r.join(".")} require '${s}' or 'Element' type`)
		}
		const d = {
			html: p,
			disable: `?${n}`,
			name: `?${s}`,
			index: `?${l}`,
			style: `?${c}`,
			click: `?${u}`,
			mounted: `?${u}`,
			tooltip: `?${s}|${l}`,
			width: `?${l}`,
			selector: `?${a}`,
			onSelect: `?${u}`,
			switch: `?${n}`,
			onSwitch: `?${u}`,
			range: `?${a}`,
			onRange: `?${u}`,
			onChange: `?${u}`
		};
		r.default = {
			id: s,
			container: p,
			url: s,
			poster: s,
			title: s,
			type: s,
			theme: s,
			lang: s,
			volume: l,
			isLive: n,
			muted: n,
			autoplay: n,
			autoSize: n,
			autoMini: n,
			loop: n,
			flip: n,
			playbackRate: n,
			aspectRatio: n,
			screenshot: n,
			setting: n,
			hotkey: n,
			pip: n,
			mutex: n,
			backdrop: n,
			fullscreen: n,
			fullscreenWeb: n,
			subtitleOffset: n,
			miniProgressBar: n,
			useSSR: n,
			playsInline: n,
			lock: n,
			fastForward: n,
			autoPlayback: n,
			autoOrientation: n,
			airplay: n,
			plugins: [u],
			whitelist: [`${s}|${u}|regexp`],
			layers: [d],
			contextmenu: [d],
			settings: [d],
			controls: [{
				...d,
				position: (e, t, r) => {
					const o = ["top", "left", "right"];
					return (0, i.errorHandle)(o.includes(e), `${r.join(".")} only accept ${o.toString()} as parameters`)
				}
			}],
			quality: [{
				default: `?${n}`,
				html: s,
				url: s
			}],
			highlight: [{
				time: l,
				text: s
			}],
			thumbnails: {
				url: s,
				number: l,
				column: l,
				width: l,
				height: l
			},
			subtitle: {
				url: s,
				type: s,
				style: c,
				encoding: s
			},
			moreVideoAttr: c,
			icons: c,
			customType: c
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9Xmqu": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = {
			propertys: ["audioTracks", "autoplay", "buffered", "controller", "controls", "crossOrigin", "currentSrc", "currentTime", "defaultMuted", "defaultPlaybackRate", "duration", "ended", "error", "loop", "mediaGroup", "muted", "networkState", "paused", "playbackRate", "played", "preload", "readyState", "seekable", "seeking", "src", "startDate", "textTracks", "videoTracks", "volume"],
			methods: ["addTextTrack", "canPlayType", "load", "play", "pause"],
			events: ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"],
			prototypes: ["width", "height", "videoWidth", "videoHeight", "poster", "webkitDecodedFrameCount", "webkitDroppedFrameCount", "playsInline", "webkitSupportsFullscreen", "webkitDisplayingFullscreen", "onenterpictureinpicture", "onleavepictureinpicture", "disablePictureInPicture", "cancelVideoFrameCallback", "requestVideoFrameCallback", "getVideoPlaybackQuality", "requestPictureInPicture", "webkitEnterFullScreen", "webkitEnterFullscreen", "webkitExitFullScreen", "webkitExitFullscreen"]
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	jgRHH: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("./utils");
		r.default = class {
			constructor(e) {
				this.art = e
			}
			get state() {
				const {
					option: e,
					constructor: {
						kindOf: t
					}
				} = this.art;
				return !o.isMobile || !e.whitelist.length || e.whitelist.some((e => {
					switch (t(e)) {
						case "string":
							return "*" === e || o.userAgent.indexOf(e) > -1;
						case "function":
							return e(o.userAgent);
						case "regexp":
							return e.test(o.userAgent);
						default:
							return !1
					}
				}))
			}
		}
	}, {
		"./utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2gKYH": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("./utils");
		class i {
			constructor(e) {
				this.art = e;
				const {
					option: t,
					constructor: r,
					whitelist: i
				} = e;
				t.container instanceof Element ? this.$container = t.container : (this.$container = (0, o.query)(t.container), (0, o.errorHandle)(this.$container, `No container element found by ${t.container}`));
				const a = this.$container.tagName.toLowerCase();
				(0, o.errorHandle)("div" === a, `Unsupported container element type, only support 'div' but got '${a}'`), (0, o.errorHandle)(r.instances.every((e => e.template.$container !== this.$container)), "Cannot mount multiple instances on the same dom element"), this.query = this.query.bind(this), this.$container.dataset.artId = e.id, this.$original = this.$container.cloneNode(!0), i.state ? this.desktop() : this.mobile()
			}
			static get html() {
				return '<div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show"><video class="art-video"><track default kind="metadata" src=""></track></video><div class="art-poster"></div><div class="art-subtitle"></div><div class="art-danmuku"></div><div class="art-layers"></div><div class="art-mask"><div class="art-state"></div></div><div class="art-bottom"><div class="art-progress"></div><div class="art-controls"><div class="art-controls-left"></div><div class="art-controls-center"></div><div class="art-controls-right"></div></div></div><div class="art-loading"></div><div class="art-notice"><div class="art-notice-inner"></div></div><div class="art-settings"></div><div class="art-info"><div class="art-info-panel"><div class="art-info-item"><div class="art-info-title">Player version:</div><div class="art-info-content">4.5.12</div></div><div class="art-info-item"><div class="art-info-title">Video url:</div><div class="art-info-content" data-video="src"></div></div><div class="art-info-item"><div class="art-info-title">Video volume:</div><div class="art-info-content" data-video="volume"></div></div><div class="art-info-item"><div class="art-info-title">Video time:</div><div class="art-info-content" data-video="currentTime"></div></div><div class="art-info-item"><div class="art-info-title">Video duration:</div><div class="art-info-content" data-video="duration"></div></div><div class="art-info-item"><div class="art-info-title">Video resolution:</div><div class="art-info-content"><span data-video="videoWidth"></span> x <span data-video="videoHeight"></span></div></div></div><div class="art-info-close">[x]</div></div><div class="art-mini-header"><div class="art-mini-title"></div><div class="art-mini-close">×</div></div><div class="art-contextmenus"></div></div>'
			}
			query(e) {
				return (0, o.query)(e, this.$container)
			}
			desktop() {
				const {
					option: e
				} = this.art;
				e.useSSR || (this.$container.innerHTML = i.html), this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video"), this.$track = this.query("track"), this.$poster = this.query(".art-poster"), this.$subtitle = this.query(".art-subtitle"), this.$danmuku = this.query(".art-danmuku"), this.$bottom = this.query(".art-bottom"), this.$progress = this.query(".art-progress"), this.$controls = this.query(".art-controls"), this.$controlsLeft = this.query(".art-controls-left"), this.$controlsCenter = this.query(".art-controls-center"), this.$controlsRight = this.query(".art-controls-right"), this.$layer = this.query(".art-layers"), this.$loading = this.query(".art-loading"), this.$notice = this.query(".art-notice"), this.$noticeInner = this.query(".art-notice-inner"), this.$mask = this.query(".art-mask"), this.$state = this.query(".art-state"), this.$setting = this.query(".art-settings"), this.$info = this.query(".art-info"), this.$infoPanel = this.query(".art-info-panel"), this.$infoClose = this.query(".art-info-close"), this.$miniHeader = this.query(".art-mini-header"), this.$miniTitle = this.query(".art-mini-title"), this.$miniClose = this.query(".art-mini-close"), this.$contextmenu = this.query(".art-contextmenus"), e.backdrop && ((0, o.addClass)(this.$setting, "art-backdrop-filter"), (0, o.addClass)(this.$contextmenu, "art-backdrop-filter"), (0, o.addClass)(this.$info, "art-backdrop-filter")), o.isMobile && (0, o.addClass)(this.$player, "art-mobile")
			}
			mobile() {
				this.$container.innerHTML = '<div class="art-video-player"><video class="art-video"></video></div>', this.$player = this.query(".art-video-player"), this.$video = this.query(".art-video")
			}
			destroy(e) {
				e ? (0, o.replaceElement)(this.$original, this.$container) : (0, o.addClass)(this.$player, "art-destroy")
			}
		}
		r.default = i
	}, {
		"./utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"1AdeF": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils"),
			a = e("./zh-cn.json"),
			n = o.interopDefault(a),
			s = e("./zh-tw.json"),
			l = o.interopDefault(s),
			c = e("./pl.json"),
			u = o.interopDefault(c),
			p = e("./cs.json"),
			d = o.interopDefault(p),
			f = e("./es.json"),
			h = o.interopDefault(f),
			m = e("./fa.json"),
			g = o.interopDefault(m);
		r.default = class {
			constructor(e) {
				this.art = e, this.languages = {
					"zh-cn": n.default,
					"zh-tw": l.default,
					pl: u.default,
					cs: d.default,
					es: h.default,
					fa: g.default
				}, this.init()
			}
			init() {
				const e = this.art.option.lang.toLowerCase();
				this.language = this.languages[e] || {}
			}
			get(e) {
				return this.language[e] || e
			}
			update(e) {
				this.languages = (0, i.mergeDeep)(this.languages, e), this.init()
			}
		}
	}, {
		"../utils": "h3rH9",
		"./zh-cn.json": "ho6iH",
		"./zh-tw.json": "7iMjq",
		"./pl.json": "dBKEE",
		"./cs.json": "6SDKc",
		"./es.json": "dtcbg",
		"./fa.json": "l5Cvm",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	ho6iH: [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"统计信息","Close":"关闭","Video Load Failed":"加载失败","Volume":"音量","Play":"播放","Pause":"暂停","Rate":"速度","Mute":"静音","Video Flip":"画面翻转","Horizontal":"水平","Vertical":"垂直","Reconnect":"重新连接","Show Setting":"显示设置","Hide Setting":"隐藏设置","Screenshot":"截图","Play Speed":"播放速度","Aspect Ratio":"画面比例","Default":"默认","Normal":"正常","Open":"打开","Switch Video":"切换","Switch Subtitle":"切换字幕","Fullscreen":"全屏","Exit Fullscreen":"退出全屏","Web Fullscreen":"网页全屏","Exit Web Fullscreen":"退出网页全屏","Mini Player":"迷你播放器","PIP Mode":"开启画中画","Exit PIP Mode":"退出画中画","PIP Not Supported":"不支持画中画","Fullscreen Not Supported":"不支持全屏","Subtitle Offset":"字幕偏移","Last Seen":"上次看到","Xem tiếp":"跳转播放","AirPlay":"隔空播放","AirPlay Not Available":"隔空播放不可用"}')
	}, {}],
	"7iMjq": [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"統計訊息","Close":"關閉","Video Load Failed":"載入失敗","Volume":"音量","Play":"播放","Pause":"暫停","Rate":"速度","Mute":"靜音","Video Flip":"畫面翻轉","Horizontal":"水平","Vertical":"垂直","Reconnect":"重新連接","Show Setting":"顯示设置","Hide Setting":"隱藏设置","Screenshot":"截圖","Play Speed":"播放速度","Aspect Ratio":"畫面比例","Default":"默認","Normal":"正常","Open":"打開","Switch Video":"切換","Switch Subtitle":"切換字幕","Fullscreen":"全屏","Exit Fullscreen":"退出全屏","Web Fullscreen":"網頁全屏","Exit Web Fullscreen":"退出網頁全屏","Mini Player":"迷你播放器","PIP Mode":"開啟畫中畫","Exit PIP Mode":"退出畫中畫","PIP Not Supported":"不支持畫中畫","Fullscreen Not Supported":"不支持全屏","Subtitle Offset":"字幕偏移","Last Seen":"上次看到","Xem tiếp":"跳轉播放","AirPlay":"隔空播放","AirPlay Not Available":"隔空播放不可用"}')
	}, {}],
	dBKEE: [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"Informacje o wideo","Close":"Zamknij","Video Load Failed":"Błąd ładowania wideo","Volume":"Głośność","Play":"Odtwórz","Pause":"Wstrzymaj","Rate":"Oceń","Mute":"Wycisz","Video Flip":"Rotacja wideo","Horizontal":"Pozioma","Vertical":"Pionowa","Reconnect":"Połącz ponownie","Show Setting":"Pokaż ustawienia","Hide Setting":"Ukryj ustawienia","Screenshot":"Zrzut ekranu","Play Speed":"Prędkość odtwarzania","Aspect Ratio":"Współczynnik proporcji","Default":"Domyślny","Normal":"Normalny","Open":"Otwórz","Switch Video":"Przełącz wideo","Switch Subtitle":"Przełącz napisy","Fullscreen":"Pełny ekran","Exit Fullscreen":"Zamknij pełny ekran","Web Fullscreen":"Tryb pełnej strony","Exit Web Fullscreen":"Zamknij tryb pełnej strony","Mini Player":"Miniodtwarzacz","PIP Mode":"Tryb PiP","Exit PIP Mode":"Zamknij tryb PiP","PIP Not Supported":"Tryb PiP nieobsługiwany","Fullscreen Not Supported":"Pełny ekran nieobsługiwany","Subtitle Offset":"Przesunięcie napisów","Last Seen":"Ostatnio widziany","Xem tiếp":"Skocz do gry","AirPlay":"AirPlay","AirPlay Not Available":"AirPlay nie jest dostępny"}')
	}, {}],
	"6SDKc": [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"Info o videu","Close":"Zavřít","Video Load Failed":"Nahrání videa selhalo","Volume":"Hlasitost","Play":"Přehrát","Pause":"Pozastavit","Rate":"Hodnocení","Mute":"Ztlumit","Video Flip":"Otočit video","Horizontal":"Horizontálně","Vertical":"Vertikálně","Reconnect":"Opětovné připojení","Show Setting":"Zobrazit nastavení","Hide Setting":"Skrýt nastavení","Screenshot":"Snímek obrazovky","Play Speed":"Rychlost přehrávání","Aspect Ratio":"Poměr stran","Default":"Výchozí","Normal":"Normální","Open":"Otevřít","Switch Video":"Přepnout video","Switch Subtitle":"Přepnout titulky","Fullscreen":"Celá obrazovka","Exit Fullscreen":"Opustit režim celé obrazovky","Web Fullscreen":"Celá stránka","Exit Web Fullscreen":"Zavřít režim celé stránky","Mini Player":"Mini přehrávač","PIP Mode":"Režim PIP","Exit PIP Mode":"Opustit režim PIP","PIP Not Supported":"Režim PIP není podporován","Fullscreen Not Supported":"Režim celé obrazovky není podporován","Subtitle Offset":"Posun titulků","Last Seen":"Naposledy viděn","Xem tiếp":"Hra na skok","AirPlay":"AirPlay","AirPlay Not Available":"AirPlay není k dispozici"}')
	}, {}],
	dtcbg: [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"Información del video","Close":"Cerrar","Video Load Failed":"Falló carga de video","Volume":"Volumen","Play":"Reproduciendo","Pause":"Pausa","Rate":"Velocidad","Mute":"Silencio","Video Flip":"Rotar video","Horizontal":"Horizontal","Vertical":"Vertical","Reconnect":"Reconectando","Show Setting":"Mostrar ajustes","Hide Setting":"Ocultar ajustes","Screenshot":"Captura de Pantalla","Play Speed":"Velocidad de reproducción","Aspect Ratio":"Relación de aspecto","Default":"Por defecto","Normal":"Normal","Open":"Abrir","Switch Video":"Cambiar video","Switch Subtitle":"Cambiar subtítulo","Fullscreen":"Pantalla completa","Exit Fullscreen":"Salir de Pantalla completa","Web Fullscreen":"Pantalla completa Web","Exit Web Fullscreen":"Salir de Pantalla completa","Mini Player":"Mini reproductor","PIP Mode":"Modo PiP","Exit PIP Mode":"Cerrar modo PiP","PIP Not Supported":"Modo PiP no compatible","Fullscreen Not Supported":"Pantalla completa no soportada","Subtitle Offset":"Ajuste subtítulo","Last Seen":"Visto última vez","Xem tiếp":"Saltar","AirPlay":"AirPlay","AirPlay Not Available":"AirPlay no disponible"}')
	}, {}],
	l5Cvm: [function(e, t, r) {
		t.exports = JSON.parse('{"Video Info":"اطلاعات ویدیو","Close":"بستن","Video Load Failed":"بارگذاری ناموفق","Play":"پخش","Volume":"میزان صدا","Pause":"توقف","Rate":"نرخ","Mute":"سکوت","Video Flip":"چرخش تصویر","Horizontal":"افقی","Vertical":"عمودی","Reconnect":"اتصال مجدد","Show Setting":"تنظیمات","Hide Setting":"بستن تنظیمات","Screenshot":"عکس از صفحه","Play Speed":"سرعت پخش","Aspect Ratio":"نسبت تصویر","Default":"حالت پیشفرض","Normal":" حالت عادی","Open":"بازکردن","Switch Video":"تغییر ویدیو","Switch Subtitle":"نغییر زیرنویس","Fullscreen":"تمام صفحه","Exit Fullscreen":"کوچک کردن","Web Fullscreen":"حالت تئاتر","Exit Web Fullscreen":"خروج از حالت تئاتر","Mini Player":"حالت پخش کوچک","PIP Mode":" مینی پلیر","Exit PIP Mode":"خروج از مینی پلیر","PIP Not Supported":"عدم پشتیبانی از مینی پلیر","Fullscreen Not Supported":"عدم پشتیبانی از حالت تمام صفحه","Subtitle Offset":"افست زیرنویس","Last Seen":"آخرین بازدید","Xem tiếp":"جامپ پلی","AirPlay":"ایر پلی","AirPlay Not Available":"عدم پشتیبانی از ایرپلی"}')
	}, {}],
	"556MW": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./urlMix"),
			a = o.interopDefault(i),
			n = e("./attrMix"),
			s = o.interopDefault(n),
			l = e("./playMix"),
			c = o.interopDefault(l),
			u = e("./pauseMix"),
			p = o.interopDefault(u),
			d = e("./toggleMix"),
			f = o.interopDefault(d),
			h = e("./seekMix"),
			m = o.interopDefault(h),
			g = e("./volumeMix"),
			y = o.interopDefault(g),
			v = e("./currentTimeMix"),
			b = o.interopDefault(v),
			x = e("./durationMix"),
			w = o.interopDefault(x),
			j = e("./switchMix"),
			k = o.interopDefault(j),
			S = e("./playbackRateMix"),
			I = o.interopDefault(S),
			$ = e("./aspectRatioMix"),
			O = o.interopDefault($),
			T = e("./screenshotMix"),
			E = o.interopDefault(T),
			M = e("./fullscreenMix"),
			P = o.interopDefault(M),
			F = e("./fullscreenWebMix"),
			C = o.interopDefault(F),
			H = e("./pipMix"),
			A = o.interopDefault(H),
			R = e("./loadedMix"),
			D = o.interopDefault(R),
			z = e("./playedMix"),
			B = o.interopDefault(z),
			L = e("./playingMix"),
			N = o.interopDefault(L),
			V = e("./autoSizeMix"),
			_ = o.interopDefault(V),
			Z = e("./rectMix"),
			q = o.interopDefault(Z),
			W = e("./flipMix"),
			U = o.interopDefault(W),
			Y = e("./miniMix"),
			X = o.interopDefault(Y),
			G = e("./loopMix"),
			J = o.interopDefault(G),
			K = e("./posterMix"),
			Q = o.interopDefault(K),
			ee = e("./autoHeightMix"),
			te = o.interopDefault(ee),
			re = e("./themeMix"),
			oe = o.interopDefault(re),
			ie = e("./titleMix"),
			ae = o.interopDefault(ie),
			ne = e("./typeMix"),
			se = o.interopDefault(ne),
			le = e("./normalSizeMix"),
			ce = o.interopDefault(le),
			ue = e("./subtitleOffsetMix"),
			pe = o.interopDefault(ue),
			de = e("./airplayMix"),
			fe = o.interopDefault(de),
			he = e("./optionInit"),
			me = o.interopDefault(he),
			ge = e("./eventInit"),
			ye = o.interopDefault(ge);
		r.default = class {
			constructor(e) {
				(0, a.default)(e), (0, s.default)(e), (0, c.default)(e), (0, p.default)(e), (0, f.default)(e), (0, m.default)(e), (0, y.default)(e), (0, b.default)(e), (0, w.default)(e), (0, k.default)(e), (0, I.default)(e), (0, O.default)(e), (0, E.default)(e), (0, P.default)(e), (0, C.default)(e), (0, A.default)(e), (0, D.default)(e), (0, B.default)(e), (0, N.default)(e), (0, _.default)(e), (0, q.default)(e), (0, U.default)(e), (0, X.default)(e), (0, J.default)(e), (0, Q.default)(e), (0, te.default)(e), (0, oe.default)(e), (0, ae.default)(e), (0, se.default)(e), (0, ce.default)(e), (0, pe.default)(e), (0, fe.default)(e), (0, ye.default)(e), (0, me.default)(e)
			}
		}
	}, {
		"./urlMix": "2mRAc",
		"./attrMix": "2EA19",
		"./playMix": "fD2Tc",
		"./pauseMix": "c3LGJ",
		"./toggleMix": "fVsAa",
		"./seekMix": "dmROF",
		"./volumeMix": "9jtfB",
		"./currentTimeMix": "7NCDR",
		"./durationMix": "YS7JL",
		"./switchMix": "dzUqN",
		"./playbackRateMix": "5I2mT",
		"./aspectRatioMix": "7m6R8",
		"./screenshotMix": "2dgtR",
		"./fullscreenMix": "fKDW8",
		"./fullscreenWebMix": "lNvYI",
		"./pipMix": "8j7oC",
		"./loadedMix": "dwVOT",
		"./playedMix": "dDeLx",
		"./playingMix": "ceoBp",
		"./autoSizeMix": "lcWXX",
		"./rectMix": "f7y88",
		"./flipMix": "l4qt5",
		"./miniMix": "9ZPBQ",
		"./loopMix": "d89IV",
		"./posterMix": "5K8hA",
		"./autoHeightMix": "3T5ls",
		"./themeMix": "7lcSc",
		"./titleMix": "a8ZHz",
		"./typeMix": "8JgTw",
		"./normalSizeMix": "3EY4s",
		"./subtitleOffsetMix": "hJvIy",
		"./airplayMix": "4Tp0U",
		"./optionInit": "iPdgW",
		"./eventInit": "3mj0J",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2mRAc": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				template: {
					$video: r
				}
			} = e;
			(0, o.def)(e, "url", {
				get: () => r.currentSrc,
				async set(i) {
					if (i) {
						const a = t.type || (0, o.getExt)(i),
							n = t.customType[a];
						a && n ? (await (0, o.sleep)(), e.loading.show = !0, n.call(e, r, i, e)) : (e.url && e.url !== i && e.once("video:canplay", (() => {
							e.isReady && e.emit("restart")
						})), r.src = i, e.option.url = i, e.emit("url", i))
					} else await (0, o.sleep)(), e.loading.show = !0
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2EA19": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$video: t
				}
			} = e;
			(0, o.def)(e, "attr", {
				value(e, r) {
					if (void 0 === r) return t[e];
					t[e] = r
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fD2Tc: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				notice: r,
				option: i,
				constructor: {
					instances: a
				},
				template: {
					$video: n
				}
			} = e;
			(0, o.def)(e, "play", {
				value: async function() {
					const o = await n.play();
					if (r.show = t.get("Play"), e.emit("play"), i.mutex)
						for (let t = 0; t < a.length; t++) {
							const r = a[t];
							r !== e && r.pause()
						}
					return o
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	c3LGJ: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$video: t
				},
				i18n: r,
				notice: i
			} = e;
			(0, o.def)(e, "pause", {
				value() {
					const o = t.pause();
					return i.show = r.get("Pause"), e.emit("pause"), o
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fVsAa: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "toggle", {
				value: () => e.playing ? e.pause() : e.play()
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	dmROF: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				notice: t
			} = e;
			(0, o.def)(e, "seek", {
				set(r) {
					e.currentTime = r, e.emit("seek", e.currentTime), e.duration && (t.show = `${(0,o.secondToTime)(e.currentTime)} / ${(0,o.secondToTime)(e.duration)}`)
				}
			}), (0, o.def)(e, "forward", {
				set(t) {
					e.seek = e.currentTime + t
				}
			}), (0, o.def)(e, "backward", {
				set(t) {
					e.seek = e.currentTime - t
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9jtfB": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$video: t
				},
				i18n: r,
				notice: i,
				storage: a
			} = e;
			(0, o.def)(e, "volume", {
				get: () => t.volume || 0,
				set: n => {
					t.volume = (0, o.clamp)(n, 0, 1), i.show = `${r.get("Volume")}: ${parseInt(100*t.volume,10)}`, 0 !== t.volume && a.set("volume", t.volume), e.emit("volume", t.volume)
				}
			}), (0, o.def)(e, "muted", {
				get: () => t.muted,
				set: r => {
					t.muted = r, e.emit("volume", t.volume)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7NCDR": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				$video: t
			} = e.template;
			(0, o.def)(e, "currentTime", {
				get: () => t.currentTime || 0,
				set: r => {
					r = parseFloat(r), Number.isNaN(r) || (t.currentTime = (0, o.clamp)(r, 0, e.duration))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	YS7JL: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "duration", {
				get: () => {
					const {
						duration: t
					} = e.template.$video;
					return t === 1 / 0 ? 0 : t || 0
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	dzUqN: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				option: r,
				notice: i
			} = e;

			function a(o, a, n) {
				return new Promise((s => {
					if (o === e.url) return s(o);
					const {
						playing: l
					} = e;
					e.pause(), URL.revokeObjectURL(e.url), e.url = o, e.once("video:canplay", (() => {
						e.playbackRate = !1, e.aspectRatio = !1, e.flip = "normal", e.autoSize = r.autoSize, e.currentTime = n, e.notice.show = "", l && e.play(), a && (i.show = `${t.get("Switch Video")}: ${a}`), e.emit("switch", o), s(o)
					}))
				}))
			}(0, o.def)(e, "switchQuality", {
				value: (t, r) => a(t, r, e.currentTime)
			}), (0, o.def)(e, "switchUrl", {
				value: (e, t) => a(e, t, 0)
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"5I2mT": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$video: t
				},
				i18n: r,
				notice: i
			} = e;
			(0, o.def)(e, "playbackRate", {
				get: () => t.playbackRate,
				set(o) {
					if (o) {
						if (o === t.playbackRate) return;
						t.playbackRate = o, i.show = `${r.get("Rate")}: ${1===o?r.get("Normal"):`${o}x`}`, e.emit("playbackRate", o)
					} else e.playbackRate = 1, e.emit("playbackRate", 1)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7m6R8": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$video: t,
					$player: r
				},
				i18n: i,
				notice: a
			} = e;
			(0, o.def)(e, "aspectRatio", {
				get: () => r.dataset.aspectRatio || "default",
				set(n) {
					if (n || (n = "default"), "default" === n)(0, o.setStyle)(t, "width", null), (0, o.setStyle)(t, "height", null), (0, o.setStyle)(t, "padding", null), delete r.dataset.aspectRatio;
					else {
						const e = n.split(":").map(Number),
							{
								videoWidth: i,
								videoHeight: a
							} = t,
							{
								clientWidth: s,
								clientHeight: l
							} = r,
							c = i / a,
							u = e[0] / e[1];
						if (c > u) {
							const e = u * a / i;
							(0, o.setStyle)(t, "width", 100 * e + "%"), (0, o.setStyle)(t, "height", "100%"), (0, o.setStyle)(t, "padding", `0 ${(s-s*e)/2}px`)
						} else {
							const e = i / u / a;
							(0, o.setStyle)(t, "width", "100%"), (0, o.setStyle)(t, "height", 100 * e + "%"), (0, o.setStyle)(t, "padding", (l - l * e) / 2 + "px 0")
						}
						r.dataset.aspectRatio = n
					}
					a.show = `${i.get("Aspect Ratio")}: ${"default"===n?i.get("Default"):n}`, e.emit("aspectRatio", n)
				}
			}), (0, o.def)(e, "aspectRatioReset", {
				set(t) {
					if (t) {
						const {
							aspectRatio: t
						} = e;
						e.aspectRatio = t
					}
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2dgtR": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				notice: r,
				template: {
					$video: i
				}
			} = e, a = (0, o.createElement)("canvas");
			(0, o.def)(e, "getDataURL", {
				value: () => new Promise(((e, t) => {
					try {
						a.width = i.videoWidth, a.height = i.videoHeight, a.getContext("2d").drawImage(i, 0, 0), e(a.toDataURL("image/png"))
					} catch (e) {
						r.show = e, t(e)
					}
				}))
			}), (0, o.def)(e, "getBlobUrl", {
				value: () => new Promise(((e, t) => {
					try {
						a.width = i.videoWidth, a.height = i.videoHeight, a.getContext("2d").drawImage(i, 0, 0), a.toBlob((t => {
							e(URL.createObjectURL(t))
						}))
					} catch (e) {
						r.show = e, t(e)
					}
				}))
			}), (0, o.def)(e, "screenshot", {
				value: async () => {
					const r = await e.getDataURL();
					return (0, o.download)(r, `${t.title||"artplayer"}_${(0,o.secondToTime)(i.currentTime)}.png`), e.emit("screenshot", r), r
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fKDW8: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../libs/screenfull"),
			a = o.interopDefault(i),
			n = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				notice: r,
				template: {
					$video: o,
					$player: i
				}
			} = e;
			e.once("video:loadedmetadata", (() => {
				a.default.isEnabled ? (e => {
					(0, n.def)(e, "fullscreen", {
						get: () => a.default.isFullscreen,
						async set(t) {
							t ? (e.normalSize = "fullscreen", e.aspectRatioReset = !0, e.autoSize = !1, await a.default.request(i), (0, n.addClass)(i, "art-fullscreen"), e.emit("resize"), e.emit("fullscreen", !0), r.show = "") : (e.aspectRatioReset = !0, e.autoSize = e.option.autoSize, await a.default.exit(), (0, n.removeClass)(i, "art-fullscreen"), e.emit("resize"), e.emit("fullscreen", !1), r.show = "")
						}
					})
				})(e) : document.fullscreenEnabled || o.webkitSupportsFullscreen ? (e => {
					(0, n.def)(e, "fullscreen", {
						get: () => o.webkitDisplayingFullscreen,
						set(t) {
							t ? (e.normalSize = "fullscreen", o.webkitEnterFullscreen(), e.emit("fullscreen", !0), r.show = "") : (o.webkitExitFullscreen(), e.emit("fullscreen", !1), r.show = "")
						}
					})
				})(e) : (0, n.def)(e, "fullscreen", {
					get: () => !1,
					set() {
						r.show = t.get("Fullscreen Not Supported")
					}
				}), (0, n.def)(e, "fullscreen", (0, n.get)(e, "fullscreen"))
			}))
		}
	}, {
		"../libs/screenfull": "lUahW",
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	lUahW: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		const o = [
				["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
				["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
				["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
				["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
				["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
			],
			i = (() => {
				if ("undefined" == typeof document) return !1;
				const e = o[0],
					t = {};
				for (const r of o) {
					if (r[1] in document) {
						for (const [o, i] of r.entries()) t[e[o]] = i;
						return t
					}
				}
				return !1
			})(),
			a = {
				change: i.fullscreenchange,
				error: i.fullscreenerror
			};
		let n = {
			request: (e = document.documentElement, t) => new Promise(((r, o) => {
				const a = () => {
					n.off("change", a), r()
				};
				n.on("change", a);
				const s = e[i.requestFullscreen](t);
				s instanceof Promise && s.then(a).catch(o)
			})),
			exit: () => new Promise(((e, t) => {
				if (!n.isFullscreen) return void e();
				const r = () => {
					n.off("change", r), e()
				};
				n.on("change", r);
				const o = document[i.exitFullscreen]();
				o instanceof Promise && o.then(r).catch(t)
			})),
			toggle: (e, t) => n.isFullscreen ? n.exit() : n.request(e, t),
			onchange(e) {
				n.on("change", e)
			},
			onerror(e) {
				n.on("error", e)
			},
			on(e, t) {
				const r = a[e];
				r && document.addEventListener(r, t, !1)
			},
			off(e, t) {
				const r = a[e];
				r && document.removeEventListener(r, t, !1)
			},
			raw: i
		};
		Object.defineProperties(n, {
			isFullscreen: {
				get: () => Boolean(document[i.fullscreenElement])
			},
			element: {
				enumerable: !0,
				get: () => document[i.fullscreenElement]
			},
			isEnabled: {
				enumerable: !0,
				get: () => Boolean(document[i.fullscreenEnabled])
			}
		}), i || (n = {
			isEnabled: !1
		}), r.default = n
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	lNvYI: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				notice: t,
				template: {
					$player: r
				}
			} = e;
			(0, o.def)(e, "fullscreenWeb", {
				get: () => (0, o.hasClass)(r, "art-fullscreen-web"),
				set(i) {
					i ? (e.normalSize = "fullscreenWeb", (0, o.addClass)(r, "art-fullscreen-web"), e.aspectRatioReset = !0, e.autoSize = !1, e.emit("resize"), e.emit("fullscreenWeb", !0), t.show = "") : ((0, o.removeClass)(r, "art-fullscreen-web"), e.aspectRatioReset = !0, e.autoSize = e.option.autoSize, e.emit("resize"), e.emit("fullscreenWeb", !1), t.show = "")
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"8j7oC": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				notice: r,
				template: {
					$video: i
				}
			} = e;
			document.pictureInPictureEnabled ? function(e) {
				const {
					template: {
						$video: t
					},
					proxy: r,
					notice: i
				} = e;
				t.disablePictureInPicture = !1, (0, o.def)(e, "pip", {
					get: () => document.pictureInPictureElement,
					set(r) {
						r ? (e.normalSize = "pip", t.requestPictureInPicture().catch((e => {
							throw i.show = e, e
						}))) : document.exitPictureInPicture().catch((e => {
							throw i.show = e, e
						}))
					}
				}), r(t, "enterpictureinpicture", (() => {
					e.emit("pip", !0)
				})), r(t, "leavepictureinpicture", (() => {
					e.emit("pip", !1)
				}))
			}(e) : i.webkitSupportsPresentationMode ? function(e) {
				const {
					$video: t
				} = e.template;
				t.webkitSetPresentationMode("inline"), (0, o.def)(e, "pip", {
					get: () => "picture-in-picture" === t.webkitPresentationMode,
					set(r) {
						r ? (e.normalSize = "pip", t.webkitSetPresentationMode("picture-in-picture"), e.emit("pip", !0)) : (t.webkitSetPresentationMode("inline"), e.emit("pip", !1))
					}
				})
			}(e) : (0, o.def)(e, "pip", {
				get: () => !1,
				set() {
					r.show = t.get("PIP Not Supported")
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	dwVOT: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				$video: t
			} = e.template;
			(0, o.def)(e, "loaded", {
				get: () => e.loadedTime / t.duration
			}), (0, o.def)(e, "loadedTime", {
				get: () => t.buffered.length ? t.buffered.end(t.buffered.length - 1) : 0
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	dDeLx: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "played", {
				get: () => e.currentTime / e.duration
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	ceoBp: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				$video: t
			} = e.template;
			(0, o.def)(e, "playing", {
				get: () => !!(t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2)
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	lcWXX: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				$container: t,
				$player: r,
				$video: i
			} = e.template;
			(0, o.def)(e, "autoSize", {
				get: () => (0, o.hasClass)(t, "art-auto-size"),
				set(a) {
					if (a) {
						const {
							videoWidth: a,
							videoHeight: n
						} = i, {
							width: s,
							height: l
						} = t.getBoundingClientRect(), c = a / n, u = s / l;
						if ((0, o.addClass)(t, "art-auto-size"), u > c) {
							const e = l * c / s * 100;
							(0, o.setStyle)(r, "width", `${e}%`), (0, o.setStyle)(r, "height", "100%")
						} else {
							const e = s / c / l * 100;
							(0, o.setStyle)(r, "width", "100%"), (0, o.setStyle)(r, "height", `${e}%`)
						}
						e.emit("autoSize", {
							width: e.width,
							height: e.height
						})
					} else(0, o.removeClass)(t, "art-auto-size"), (0, o.setStyle)(r, "width", null), (0, o.setStyle)(r, "height", null), e.emit("autoSize")
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	f7y88: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "rect", {
				get: () => e.template.$player.getBoundingClientRect()
			});
			const t = ["bottom", "height", "left", "right", "top", "width"];
			for (let r = 0; r < t.length; r++) {
				const i = t[r];
				(0, o.def)(e, i, {
					get: () => e.rect[i]
				})
			}(0, o.def)(e, "x", {
				get: () => e.left + window.pageXOffset
			}), (0, o.def)(e, "y", {
				get: () => e.top + window.pageYOffset
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	l4qt5: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				template: {
					$player: t
				},
				i18n: r,
				notice: i
			} = e;
			(0, o.def)(e, "flip", {
				get: () => t.dataset.flip || "normal",
				set(a) {
					a || (a = "normal"), "normal" === a ? delete t.dataset.flip : t.dataset.flip = a, i.show = `${r.get("Video Flip")}: ${r.get((0,o.capitalize)(a))}`, e.emit("flip", a)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9ZPBQ": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				option: r,
				storage: i,
				proxy: a,
				template: {
					$player: n,
					$miniClose: s,
					$miniTitle: l,
					$miniHeader: c
				}
			} = e;
			let u = !1,
				p = 0,
				d = 0,
				f = 0,
				h = 0;
			a(c, "mousedown", (t => {
				u = !0, p = t.pageX, d = t.pageY, f = e.left, h = e.top
			})), a(document, "mousemove", (e => {
				if (u) {
					(0, o.addClass)(n, "art-is-dragging");
					const t = h + e.pageY - d,
						r = f + e.pageX - p;
					(0, o.setStyle)(n, "top", `${t}px`), (0, o.setStyle)(n, "left", `${r}px`), i.set("top", t), i.set("left", r)
				}
			})), a(document, "mouseup", (() => {
				u = !1, (0, o.removeClass)(n, "art-is-dragging")
			})), a(s, "click", (() => {
				e.mini = !1, u = !1, (0, o.removeClass)(n, "art-is-dragging")
			})), (0, o.append)(l, r.title || t.get("Mini Player")), (0, o.def)(e, "mini", {
				get: () => (0, o.hasClass)(n, "art-mini"),
				set(t) {
					if (t) {
						e.normalSize = "mini", e.autoSize = !1, (0, o.addClass)(n, "art-mini");
						const t = i.get("top"),
							r = i.get("left");
						if (t && r)(0, o.setStyle)(n, "top", `${t}px`), (0, o.setStyle)(n, "left", `${r}px`), (0, o.isInViewport)(c) || (i.del("top"), i.del("left"), e.mini = !0);
						else {
							const t = window.innerHeight - e.height - 50,
								r = window.innerWidth - e.width - 50;
							i.set("top", t), i.set("left", r), (0, o.setStyle)(n, "top", `${t}px`), (0, o.setStyle)(n, "left", `${r}px`)
						}
						e.aspectRatio = !1, e.playbackRate = !1, e.notice.show = "", e.emit("mini", !0)
					} else(0, o.removeClass)(n, "art-mini"), (0, o.setStyle)(n, "top", null), (0, o.setStyle)(n, "left", null), e.aspectRatio = !1, e.playbackRate = !1, e.autoSize = r.autoSize, e.notice.show = "", e.emit("mini", !1)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	d89IV: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			let t = [];
			(0, o.def)(e, "loop", {
				get: () => t,
				set: r => {
					if (Array.isArray(r) && "number" == typeof r[0] && "number" == typeof r[1]) {
						const i = (0, o.clamp)(r[0], 0, Math.min(r[1], e.duration)),
							a = (0, o.clamp)(r[1], i, e.duration);
						a - i >= 1 ? (t = [i, a], e.emit("loop", t)) : (t = [], e.emit("loop", []))
					} else t = [], e.emit("loop", [])
				}
			}), e.on("video:timeupdate", (() => {
				t.length && (e.currentTime < t[0] || e.currentTime > t[1]) && (e.seek = t[0])
			}))
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"5K8hA": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				template: {
					$poster: r
				}
			} = e;
			(0, o.def)(e, "poster", {
				get: () => t.poster,
				set(e) {
					t.poster = e, (0, o.setStyle)(r, "backgroundImage", `url(${e})`)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"3T5ls": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				template: {
					$container: r,
					$video: i
				}
			} = e, a = r.style.height;
			(0, o.def)(e, "autoHeight", {
				get: () => (0, o.hasClass)(r, "art-auto-height"),
				set(n) {
					if (n) {
						const {
							clientWidth: a
						} = r, {
							videoHeight: n,
							videoWidth: s
						} = i, l = n * (a / s);
						(0, o.setStyle)(r, "height", l + "px"), (0, o.addClass)(r, "art-auto-height"), e.autoSize = t.autoSize, e.emit("autoHeight", l)
					} else(0, o.setStyle)(r, "height", a), (0, o.removeClass)(r, "art-auto-height"), e.autoSize = t.autoSize, e.emit("autoHeight")
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7lcSc": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				template: {
					$player: r
				}
			} = e;
			(0, o.def)(e, "theme", {
				get: () => getComputedStyle(r).getPropertyValue("--theme"),
				set(e) {
					t.theme = e, r.style.setProperty("--theme", e)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	a8ZHz: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "title", {
				get: () => e.option.title,
				set(t) {
					e.option.title = t
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"8JgTw": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			(0, o.def)(e, "type", {
				get: () => e.option.type,
				set(t) {
					e.option.type = t
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"3EY4s": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const t = ["mini", "pip", "fullscreen", "fullscreenWeb"];
			(0, o.def)(e, "normalSize", {
				get: () => t.every((t => !e[t])),
				set(r) {
					t.filter((e => e !== r)).forEach((t => {
						e[t] && (e[t] = !1)
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	hJvIy: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				clamp: t
			} = e.constructor.utils, {
				notice: r,
				template: i,
				i18n: a
			} = e;
			let n = 0,
				s = [];
			e.on("subtitle:switch", (() => {
				s = []
			})), (0, o.def)(e, "subtitleOffset", {
				get: () => n,
				set(o) {
					if (i.$track && i.$track.track) {
						const l = Array.from(i.$track.track.cues);
						n = t(o, -5, 5);
						for (let r = 0; r < l.length; r++) {
							const o = l[r];
							s[r] || (s[r] = {
								startTime: o.startTime,
								endTime: o.endTime
							}), o.startTime = t(s[r].startTime + n, 0, e.duration), o.endTime = t(s[r].endTime + n, 0, e.duration)
						}
						e.subtitle.update(), r.show = `${a.get("Subtitle Offset")}: ${o}s`, e.emit("subtitleOffset", o)
					} else e.emit("subtitleOffset", 0)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"4Tp0U": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				notice: r,
				proxy: i,
				template: {
					$video: a
				}
			} = e;
			let n = !0;
			window.WebKitPlaybackTargetAvailabilityEvent && a.webkitShowPlaybackTargetPicker ? i(a, "webkitplaybacktargetavailabilitychanged", (e => {
				switch (e.availability) {
					case "available":
						n = !0;
						break;
					case "not-available":
						n = !1
				}
			})) : n = !1, (0, o.def)(e, "airplay", {
				value() {
					n ? (a.webkitShowPlaybackTargetPicker(), e.emit("airplay")) : r.show = t.get("AirPlay Not Available")
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	iPdgW: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				storage: r,
				template: {
					$video: i,
					$poster: a
				}
			} = e;
			Object.keys(t.moreVideoAttr).forEach((r => {
				e.attr(r, t.moreVideoAttr[r])
			})), t.muted && (e.muted = t.muted), t.volume && (i.volume = (0, o.clamp)(t.volume, 0, 1));
			const n = r.get("volume");
			"number" == typeof n && (i.volume = (0, o.clamp)(n, 0, 1)), t.poster && (0, o.setStyle)(a, "backgroundImage", `url(${t.poster})`), t.autoplay && (i.autoplay = t.autoplay), t.playsInline && (i.playsInline = !0, i["webkit-playsinline"] = !0), t.theme && (e.theme = t.theme), e.url = t.url
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"3mj0J": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../config"),
			a = o.interopDefault(i),
			n = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				notice: r,
				option: o,
				constructor: i,
				proxy: s,
				template: {
					$player: l,
					$video: c,
					$poster: u
				}
			} = e;
			let p = 0;
			for (let t = 0; t < a.default.events.length; t++) s(c, a.default.events[t], (t => {
				e.emit(`video:${t.type}`, t)
			}));
			e.on("video:canplay", (() => {
				p = 0, e.loading.show = !1
			})), e.once("video:canplay", (() => {
				e.loading.show = !1, e.controls.show = !0, e.mask.show = !0, e.isReady = !0, e.emit("ready")
			})), e.on("video:ended", (() => {
				o.loop ? (e.seek = 0, e.play(), e.controls.show = !1, e.mask.show = !1) : (e.controls.show = !0, e.mask.show = !0)
			})), e.on("video:error", (async a => {
				p < i.RECONNECT_TIME_MAX ? (await (0, n.sleep)(i.RECONNECT_SLEEP_TIME), p += 1, e.url = o.url, r.show = `${t.get("Reconnect")}: ${p}`, e.emit("error", a, p)) : (e.mask.show = !0, e.loading.show = !1, e.controls.show = !0, (0, n.addClass)(l, "art-error"), await (0, n.sleep)(i.RECONNECT_SLEEP_TIME), r.show = t.get("Video Load Failed"), e.destroy(!1))
			})), e.on("video:loadedmetadata", (() => {
				e.autoSize = o.autoSize, n.isMobile && (e.loading.show = !1, e.controls.show = !0, e.mask.show = !0)
			})), e.on("video:loadstart", (() => {
				e.loading.show = !0, e.mask.show = !1, e.controls.show = !0
			})), e.on("video:pause", (() => {
				e.controls.show = !0, e.mask.show = !0
			})), e.on("video:play", (() => {
				e.mask.show = !1, (0, n.setStyle)(u, "display", "none")
			})), e.on("video:playing", (() => {
				e.mask.show = !1
			})), e.on("video:seeked", (() => {
				e.loading.show = !1
			})), e.on("video:seeking", (() => {
				e.loading.show = !0, e.mask.show = !1
			})), e.on("video:timeupdate", (() => {
				e.mask.show = !1
			})), e.on("video:waiting", (() => {
				e.loading.show = !0, e.mask.show = !1
			}))
		}
	}, {
		"../config": "9Xmqu",
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"14IBq": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils"),
			a = e("../utils/component"),
			n = o.interopDefault(a),
			s = e("./fullscreen"),
			l = o.interopDefault(s),
			c = e("./fullscreenWeb"),
			u = o.interopDefault(c),
			p = e("./pip"),
			d = o.interopDefault(p),
			f = e("./playAndPause"),
			h = o.interopDefault(f),
			m = e("./progress"),
			g = o.interopDefault(m),
			y = e("./time"),
			v = o.interopDefault(y),
			b = e("./volume"),
			x = o.interopDefault(b),
			w = e("./setting"),
			j = o.interopDefault(w),
			k = e("./thumbnails"),
			S = o.interopDefault(k),
			I = e("./screenshot"),
			$ = o.interopDefault(I),
			O = e("./quality"),
			T = o.interopDefault(O),
			E = e("./loop"),
			M = o.interopDefault(E),
			P = e("./airplay"),
			F = o.interopDefault(P);
		class C extends n.default {
			constructor(e) {
				super(e), this.name = "control";
				const {
					proxy: t,
					constructor: r,
					template: {
						$player: o
					}
				} = e;
				let a = Date.now();
				t(o, ["click", "mousemove", "touchstart", "touchmove"], (() => {
					this.show = !0, (0, i.removeClass)(o, "art-hide-cursor"), (0, i.addClass)(o, "art-hover"), a = Date.now()
				})), e.on("video:timeupdate", (() => {
					!e.isInput && e.playing && this.show && Date.now() - a >= r.CONTROL_HIDE_TIME && (this.show = !1, (0, i.addClass)(o, "art-hide-cursor"), (0, i.removeClass)(o, "art-hover"))
				})), this.init()
			}
			init() {
				const {
					option: e
				} = this.art;
				e.isLive || this.add((0, g.default)({
					name: "progress",
					position: "top",
					index: 10
				})), !e.thumbnails.url || e.isLive || i.isMobile || this.add((0, S.default)({
					name: "thumbnails",
					position: "top",
					index: 20
				})), this.add((0, M.default)({
					name: "loop",
					position: "top",
					index: 30
				})), this.add((0, h.default)({
					name: "playAndPause",
					position: "left",
					index: 10
				})), this.add((0, x.default)({
					name: "volume",
					position: "left",
					index: 20
				})), e.isLive || this.add((0, v.default)({
					name: "time",
					position: "left",
					index: 30
				})), e.quality.length && this.add((0, T.default)({
					name: "quality",
					position: "right",
					index: 10
				})), e.screenshot && !i.isMobile && this.add((0, $.default)({
					name: "screenshot",
					position: "right",
					index: 20
				})), e.setting && this.add((0, j.default)({
					name: "setting",
					position: "right",
					index: 30
				})), e.pip && this.add((0, d.default)({
					name: "pip",
					position: "right",
					index: 40
				})), e.airplay && window.WebKitPlaybackTargetAvailabilityEvent && this.add((0, F.default)({
					name: "airplay",
					position: "right",
					index: 50
				})), e.fullscreenWeb && this.add((0, u.default)({
					name: "fullscreenWeb",
					position: "right",
					index: 60
				})), e.fullscreen && this.add((0, l.default)({
					name: "fullscreen",
					position: "right",
					index: 70
				}));
				for (let t = 0; t < e.controls.length; t++) this.add(e.controls[t])
			}
			add(e) {
				const t = "function" == typeof e ? e(this.art) : e,
					{
						$progress: r,
						$controlsLeft: o,
						$controlsRight: a
					} = this.art.template;
				switch (t.position) {
					case "top":
						this.$parent = r;
						break;
					case "left":
						this.$parent = o;
						break;
					case "right":
						this.$parent = a;
						break;
					default:
						(0, i.errorHandle)(!1, "Control option.position must one of 'top', 'left', 'right'")
				}
				super.add(t)
			}
		}
		r.default = C
	}, {
		"../utils": "h3rH9",
		"../utils/component": "guki8",
		"./fullscreen": "cxHNK",
		"./fullscreenWeb": "66eEC",
		"./pip": "kCFkA",
		"./playAndPause": "iRhgD",
		"./progress": "aBBSH",
		"./time": "7H0CE",
		"./volume": "lMwFm",
		"./setting": "8BrCu",
		"./thumbnails": "2HiWx",
		"./screenshot": "c1GeG",
		"./quality": "5oUJF",
		"./loop": "fiwRm",
		"./airplay": "6GRju",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	guki8: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./dom"),
			a = e("option-validator"),
			n = o.interopDefault(a),
			s = e("../scheme"),
			l = e("./property"),
			c = e("./error");
		r.default = class {
			constructor(e) {
				this.id = 0, this.art = e, this.add = this.add.bind(this)
			}
			get show() {
				return (0, i.hasClass)(this.art.template.$player, `art-${this.name}-show`)
			}
			set show(e) {
				const {
					$player: t
				} = this.art.template, r = `art-${this.name}-show`;
				e ? (0, i.addClass)(t, r) : (0, i.removeClass)(t, r), this.art.emit(this.name, e)
			}
			set toggle(e) {
				e && (this.show = !this.show)
			}
			add(e) {
				const t = "function" == typeof e ? e(this.art) : e;
				if (t.html = t.html || "", (0, n.default)(t, s.ComponentOption), !this.$parent || !this.name || t.disable) return;
				const r = t.name || `${this.name}${this.id}`;
				(0, c.errorHandle)(!(0, l.has)(this, r), `Cannot add an existing name [${r}] to the [${this.name}]`), this.id += 1;
				const o = (0, i.createElement)("div");
				(0, i.addClass)(o, `art-${this.name}`), (0, i.addClass)(o, `art-${this.name}-${r}`);
				const a = Array.from(this.$parent.children);
				o.dataset.index = t.index || this.id;
				const u = a.find((e => Number(e.dataset.index) >= Number(o.dataset.index)));
				return u ? u.insertAdjacentElement("beforebegin", o) : (0, i.append)(this.$parent, o), t.html && (0, i.append)(o, t.html), t.style && (0, i.setStyles)(o, t.style), t.tooltip && (0, i.tooltip)(o, t.tooltip), t.click && this.art.events.proxy(o, "click", (e => {
					e.preventDefault(), t.click.call(this.art, this, e)
				})), t.selector && ["left", "right"].includes(t.position) && this.selector(t, o), t.mounted && t.mounted.call(this.art, o), (0, l.def)(this, r, {
					value: o
				}), o
			}
			selector(e, t) {
				const {
					hover: r,
					proxy: o
				} = this.art.events;
				(0, i.addClass)(t, "art-control-selector");
				const a = (0, i.createElement)("div");
				(0, i.addClass)(a, "art-selector-value"), (0, i.append)(a, e.html), t.innerText = "", (0, i.append)(t, a);
				const n = e.selector.map(((e, t) => `<div class="art-selector-item ${e.default?"art-current":""}" data-index="${t}">${e.html}</div>`)).join(""),
					s = (0, i.createElement)("div");
				(0, i.addClass)(s, "art-selector-list"), (0, i.append)(s, n), (0, i.append)(t, s);
				const l = () => {
					const e = (0, i.getStyle)(t, "width") / 2 - (0, i.getStyle)(s, "width") / 2;
					s.style.left = `${e}px`
				};
				r(t, l), o(s, "click", (async t => {
					const r = (t.composedPath() || []).find((e => (0, i.hasClass)(e, "art-selector-item")));
					if (!r) return;
					(0, i.inverseClass)(r, "art-current");
					const o = Number(r.dataset.index),
						n = e.selector[o] || {};
					if (a.innerText = r.innerText, e.onSelect) {
						const o = await e.onSelect.call(this.art, n, r, t);
						"string" != typeof o && "number" != typeof o || (a.innerHTML = o)
					}
					l(), this.art.emit("selector", n, r)
				}))
			}
		}
	}, {
		"./dom": "XgAQE",
		"option-validator": "9I0i9",
		"../scheme": "AdvwB",
		"./property": "3weX2",
		"./error": "2nFlF",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	cxHNK: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("Fullscreen"),
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t, n = (0, o.append)(e, i.fullscreenOn), s = (0, o.append)(e, i.fullscreenOff);
					(0, o.setStyle)(s, "display", "none"), r(e, "click", (() => {
						t.fullscreen = !t.fullscreen
					})), t.on("fullscreen", (t => {
						t ? ((0, o.tooltip)(e, a.get("Exit Fullscreen")), (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "inline-flex")) : ((0, o.tooltip)(e, a.get("Fullscreen")), (0, o.setStyle)(n, "display", "inline-flex"), (0, o.setStyle)(s, "display", "none"))
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"66eEC": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("Web Fullscreen"),
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t, n = (0, o.append)(e, i.fullscreenWebOn), s = (0, o.append)(e, i.fullscreenWebOff);
					(0, o.setStyle)(s, "display", "none"), r(e, "click", (() => {
						t.fullscreenWeb = !t.fullscreenWeb
					})), t.on("fullscreenWeb", (t => {
						t ? ((0, o.tooltip)(e, a.get("Exit Web Fullscreen")), (0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "inline-flex")) : ((0, o.tooltip)(e, a.get("Web Fullscreen")), (0, o.setStyle)(n, "display", "inline-flex"), (0, o.setStyle)(s, "display", "none"))
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	kCFkA: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("PIP Mode"),
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t;
					(0, o.append)(e, i.pip), r(e, "click", (() => {
						t.pip = !t.pip
					})), t.on("pip", (t => {
						(0, o.tooltip)(e, a.get(t ? "Exit PIP Mode" : "PIP Mode"))
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	iRhgD: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t, n = (0, o.append)(e, i.play), s = (0, o.append)(e, i.pause);

					function l() {
						(0, o.setStyle)(n, "display", "flex"), (0, o.setStyle)(s, "display", "none")
					}

					function c() {
						(0, o.setStyle)(n, "display", "none"), (0, o.setStyle)(s, "display", "flex")
					}(0, o.tooltip)(n, a.get("Play")), (0, o.tooltip)(s, a.get("Pause")), r(n, "click", (() => {
						t.play()
					})), r(s, "click", (() => {
						t.pause()
					})), t.playing ? c() : l(), t.on("video:playing", (() => {
						c()
					})), t.on("video:pause", (() => {
						l()
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	aBBSH: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r), o.export(r, "getPosFromEvent", (() => a)), o.export(r, "setCurrentTime", (() => n));
		var i = e("../utils");

		function a(e, t) {
			const {
				$progress: r
			} = e.template, {
				left: o
			} = r.getBoundingClientRect(), a = i.isMobile ? t.touches[0].clientX : t.pageX, n = (0, i.clamp)(a - o, 0, r.clientWidth), s = n / r.clientWidth * e.duration;
			return {
				second: s,
				time: (0, i.secondToTime)(s),
				width: n,
				percentage: (0, i.clamp)(n / r.clientWidth, 0, 1)
			}
		}

		function n(e, t) {
			if (e.isRotate) {
				const r = t.touches[0].clientY / e.height,
					o = r * e.duration;
				e.emit("setBar", "played", r), e.seek = o
			} else {
				const {
					second: r,
					percentage: o
				} = a(e, t);
				e.emit("setBar", "played", o), e.seek = r
			}
		}
		r.default = function(e) {
			return t => {
				const {
					icons: r,
					option: o,
					proxy: s
				} = t;
				return {
					...e,
					html: '<div class="art-control-progress-inner"><div class="art-progress-loaded"></div><div class="art-progress-played"></div><div class="art-progress-highlight"></div><div class="art-progress-indicator"></div><div class="art-progress-tip"></div></div>',
					mounted: e => {
						let l = !1;
						const c = (0, i.query)(".art-progress-loaded", e),
							u = (0, i.query)(".art-progress-played", e),
							p = (0, i.query)(".art-progress-highlight", e),
							d = (0, i.query)(".art-progress-indicator", e),
							f = (0, i.query)(".art-progress-tip", e),
							{
								PROGRESS_HEIGHT: h,
								INDICATOR_SIZE: m,
								INDICATOR_SIZE_ICON: g,
								INDICATOR_SIZE_MOBILE: y,
								INDICATOR_SIZE_MOBILE_ICON: v
							} = t.constructor;
						(0, i.setStyle)(e, "height", `${h}px`), (0, i.setStyle)(u, "backgroundColor", "var(--theme)");
						let b = m;

						function x(e, t) {
							"loaded" === e && (0, i.setStyle)(c, "width", 100 * t + "%"), "played" === e && ((0, i.setStyle)(u, "width", 100 * t + "%"), (0, i.setStyle)(d, "left", `calc(${100*t}% - ${b/2}px)`))
						}
						r.indicator ? (b = g, (0, i.append)(d, r.indicator)) : (0, i.setStyles)(d, {
							backgroundColor: "var(--theme)"
						}), i.isMobile && (b = y, r.indicator && (b = v)), (0, i.setStyles)(d, {
							left: `-${b/2}px`,
							width: `${b}px`,
							height: `${b}px`
						}), t.on("video:loadedmetadata", (() => {
							for (let e = 0; e < o.highlight.length; e++) {
								const r = o.highlight[e],
									a = (0, i.clamp)(r.time, 0, t.duration) / t.duration * 100;
								(0, i.append)(p, `<span data-text="${r.text}" data-time="${r.time}" style="left: ${a}%"></span>`)
							}
						})), x("loaded", t.loaded), t.on("setBar", ((e, t) => {
							x(e, t)
						})), t.on("video:progress", (() => {
							x("loaded", t.loaded)
						})), t.on("video:timeupdate", (() => {
							x("played", t.played)
						})), t.on("video:ended", (() => {
							x("played", 1)
						})), i.isMobile || (s(e, "click", (e => {
							e.target !== d && n(t, e)
						})), s(e, "mousemove", (r => {
							(0, i.setStyle)(f, "display", "block"), (0, i.includeFromEvent)(r, p) ? function(r) {
								const {
									width: o
								} = a(t, r), {
									text: n
								} = r.target.dataset;
								f.innerHTML = n;
								const s = f.clientWidth;
								o <= s / 2 ? (0, i.setStyle)(f, "left", 0) : o > e.clientWidth - s / 2 ? (0, i.setStyle)(f, "left", e.clientWidth - s + "px") : (0, i.setStyle)(f, "left", o - s / 2 + "px")
							}(r) : function(r) {
								const {
									width: o,
									time: n
								} = a(t, r);
								f.innerHTML = n;
								const s = f.clientWidth;
								o <= s / 2 ? (0, i.setStyle)(f, "left", 0) : o > e.clientWidth - s / 2 ? (0, i.setStyle)(f, "left", e.clientWidth - s + "px") : (0, i.setStyle)(f, "left", o - s / 2 + "px")
							}(r)
						})), s(e, "mouseout", (() => {
							(0, i.setStyle)(f, "display", "none")
						})), s(e, "mousedown", (() => {
							l = !0
						})), s(document, "mousemove", (e => {
							if (l) {
								const {
									second: r,
									percentage: o
								} = a(t, e);
								x("played", o), t.seek = r
							}
						})), s(document, "mouseup", (() => {
							l && (l = !1)
						})))
					}
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7H0CE": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				style: {
					cursor: "auto",
					marginLeft: "10px"
				},
				mounted: e => {
					function r() {
						const r = `${(0,o.secondToTime)(t.currentTime)} / ${(0,o.secondToTime)(t.duration)}`;
						r !== e.innerText && (e.innerText = r)
					}
					r();
					const i = ["video:loadedmetadata", "video:timeupdate", "video:progress"];
					for (let e = 0; e < i.length; e++) t.on(i[e], r)
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	lMwFm: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t;
					let n = !1;
					const s = t.constructor.VOLUME_PANEL_WIDTH,
						l = t.constructor.VOLUME_HANDLE_WIDTH,
						c = (0, o.append)(e, i.volume),
						u = (0, o.append)(e, i.volumeClose),
						p = (0, o.append)(e, '<div class="art-volume-panel"></div>'),
						d = (0, o.append)(p, '<div class="art-volume-slider-handle"></div>');

					function f(e) {
						const {
							left: t
						} = p.getBoundingClientRect();
						return (0, o.clamp)(e.pageX - t - l / 2, 0, s - l / 2) / (s - l)
					}

					function h(e = .7) {
						if (t.muted || 0 === e)(0, o.setStyle)(c, "display", "none"), (0, o.setStyle)(u, "display", "flex"), (0, o.setStyle)(d, "left", "0");
						else {
							const t = (s - l) * e;
							(0, o.setStyle)(c, "display", "flex"), (0, o.setStyle)(u, "display", "none"), (0, o.setStyle)(d, "left", `${t}px`)
						}
					}(0, o.tooltip)(c, a.get("Mute")), (0, o.setStyle)(u, "display", "none"), o.isMobile && (0, o.setStyle)(p, "display", "none"), h(t.volume), t.on("video:volumechange", (() => {
						h(t.volume)
					})), r(c, "click", (() => {
						t.muted = !0
					})), r(u, "click", (() => {
						t.muted = !1
					})), r(p, "click", (e => {
						t.muted = !1, t.volume = f(e)
					})), r(d, "mousedown", (() => {
						n = !0
					})), r(e, "mousemove", (e => {
						n && (t.muted = !1, t.volume = f(e))
					})), r(document, "mouseup", (() => {
						n && (n = !1)
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"8BrCu": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("Show Setting"),
				mounted: e => {
					const {
						proxy: r,
						icons: i,
						i18n: a
					} = t;
					(0, o.append)(e, i.setting), r(e, "click", (() => {
						t.setting.toggle = !0
					})), t.on("setting", (t => {
						(0, o.tooltip)(e, a.get(t ? "Hide Setting" : "Show Setting"))
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2HiWx": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils"),
			i = e("./progress");
		r.default = function(e) {
			return t => ({
				...e,
				mounted: e => {
					const {
						option: r,
						template: {
							$progress: a,
							$video: n
						},
						events: {
							proxy: s,
							loadImg: l
						}
					} = t;
					let c = null,
						u = !1,
						p = !1;
					s(a, "mousemove", (async s => {
						if (!u) {
							u = !0;
							const e = await l(r.thumbnails.url);
							c = e, p = !0
						}
						p && ((0, o.setStyle)(e, "display", "block"), function(s) {
							const {
								width: l
							} = (0, i.getPosFromEvent)(t, s), {
								url: u,
								number: p,
								column: d,
								width: f,
								height: h
							} = r.thumbnails, m = f || c.naturalWidth / d, g = h || m / (n.videoWidth / n.videoHeight), y = a.clientWidth / p, v = Math.floor(l / y), b = Math.ceil(v / d) - 1, x = v % d || d - 1;
							(0, o.setStyle)(e, "backgroundImage", `url(${u})`), (0, o.setStyle)(e, "height", `${g}px`), (0, o.setStyle)(e, "width", `${m}px`), (0, o.setStyle)(e, "backgroundPosition", `-${x*m}px -${b*g}px`), l <= m / 2 ? (0, o.setStyle)(e, "left", 0) : l > a.clientWidth - m / 2 ? (0, o.setStyle)(e, "left", a.clientWidth - m + "px") : (0, o.setStyle)(e, "left", l - m / 2 + "px")
						}(s))
					})), s(a, "mouseout", (() => {
						(0, o.setStyle)(e, "display", "none")
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"./progress": "aBBSH",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	c1GeG: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("Screenshot"),
				mounted: e => {
					const {
						proxy: r,
						icons: i
					} = t;
					(0, o.append)(e, i.screenshot), r(e, "click", (() => {
						t.screenshot()
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"5oUJF": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e) {
			return t => {
				const r = t.option.quality,
					o = r.find((e => e.default)) || r[0];
				return {
					...e,
					style: {
						marginRight: "10px"
					},
					html: o ? o.html : "",
					selector: r,
					onSelect(e) {
						t.switchQuality(e.url, e.html)
					}
				}
			}
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fiwRm: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				mounted: e => {
					const r = (0, o.append)(e, '<span class="art-loop-point"></span>'),
						i = (0, o.append)(e, '<span class="art-loop-point"></span>');
					t.on("loop", (a => {
						a && a.length ? ((0, o.setStyle)(e, "display", "block"), (0, o.setStyle)(r, "left", `calc(${a[0]/t.duration*100}% - ${r.clientWidth}px)`), (0, o.setStyle)(i, "left", a[1] / t.duration * 100 + "%")) : (0, o.setStyle)(e, "display", "none")
					}))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"6GRju": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => ({
				...e,
				tooltip: t.i18n.get("AirPlay"),
				mounted: e => {
					const {
						proxy: r,
						icons: i
					} = t;
					(0, o.append)(e, i.airplay), r(e, "click", (() => t.airplay()))
				}
			})
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"7iUum": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils"),
			a = e("../utils/component"),
			n = o.interopDefault(a),
			s = e("./playbackRate"),
			l = o.interopDefault(s),
			c = e("./aspectRatio"),
			u = o.interopDefault(c),
			p = e("./flip"),
			d = o.interopDefault(p),
			f = e("./info"),
			h = o.interopDefault(f),
			m = e("./version"),
			g = o.interopDefault(m),
			y = e("./close"),
			v = o.interopDefault(y);
		class b extends n.default {
			constructor(e) {
				super(e), this.name = "contextmenu", this.$parent = e.template.$contextmenu, i.isMobile || this.init()
			}
			init() {
				const {
					option: e,
					proxy: t,
					template: {
						$player: r,
						$contextmenu: o
					}
				} = this.art;
				e.playbackRate && this.add((0, l.default)({
					name: "playbackRate",
					index: 10
				})), e.aspectRatio && this.add((0, u.default)({
					name: "aspectRatio",
					index: 20
				})), e.flip && this.add((0, d.default)({
					name: "flip",
					index: 30
				})), this.add((0, h.default)({
					name: "info",
					index: 40
				})), this.add((0, g.default)({
					name: "version",
					index: 50
				})), this.add((0, v.default)({
					name: "close",
					index: 60
				}));
				for (let t = 0; t < e.contextmenu.length; t++) this.add(e.contextmenu[t]);
				t(r, "contextmenu", (e => {
					if (e.preventDefault(), !this.art.constructor.CONTEXTMENU) return;
					this.show = !0;
					const t = e.clientX,
						a = e.clientY,
						{
							height: n,
							width: s,
							left: l,
							top: c
						} = r.getBoundingClientRect(),
						{
							height: u,
							width: p
						} = o.getBoundingClientRect();
					let d = t - l,
						f = a - c;
					t + p > l + s && (d = s - p), a + u > c + n && (f = n - u), (0, i.setStyles)(o, {
						top: `${f}px`,
						left: `${d}px`
					})
				})), t(r, "click", (e => {
					(0, i.includeFromEvent)(e, o) || (this.show = !1)
				})), this.art.on("blur", (() => {
					this.show = !1
				}))
			}
		}
		r.default = b
	}, {
		"../utils": "h3rH9",
		"../utils/component": "guki8",
		"./playbackRate": "f1W36",
		"./aspectRatio": "afxZC",
		"./flip": "9jCuX",
		"./info": "k8wIZ",
		"./version": "bb0TU",
		"./close": "9zTkI",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	f1W36: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => {
				const {
					i18n: r,
					constructor: {
						PLAYBACK_RATE: i
					}
				} = t;
				return {
					...e,
					html: `${r.get("Play Speed")}:\n                ${i.map((e=>`<span data-value="${e}">${1===e?r.get("Normal"):e}</span>`)).join("")}\n            `,
					click: (e, r) => {
						const {
							value: o
						} = r.target.dataset;
						o && (t.playbackRate = Number(o), e.show = !1)
					},
					mounted: e => {
						const r = (0, o.query)('[data-value="1"]', e);
						r && (0, o.inverseClass)(r, "art-current"), t.on("playbackRate", (t => {
							const r = (0, o.queryAll)("span", e).find((e => Number(e.dataset.value) === t));
							r && (0, o.inverseClass)(r, "art-current")
						}))
					}
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	afxZC: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => {
				const {
					i18n: r,
					constructor: {
						ASPECT_RATIO: i
					}
				} = t;
				return {
					...e,
					html: `${r.get("Aspect Ratio")}:\n                ${i.map((e=>`<span data-value="${e}">${"default"===e?r.get("Default"):e}</span>`)).join("")}\n            `,
					click: (e, r) => {
						const {
							value: o
						} = r.target.dataset;
						o && (t.aspectRatio = o, e.show = !1)
					},
					mounted: e => {
						const r = (0, o.query)('[data-value="default"]', e);
						r && (0, o.inverseClass)(r, "art-current"), t.on("aspectRatio", (t => {
							const r = (0, o.queryAll)("span", e).find((e => e.dataset.value === t));
							r && (0, o.inverseClass)(r, "art-current")
						}))
					}
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9jCuX": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			return t => {
				const {
					i18n: r,
					constructor: {
						FLIP: i
					}
				} = t;
				return {
					...e,
					html: `${r.get("Video Flip")}:\n                ${i.map((e=>`<span data-value="${e}">${r.get((0,o.capitalize)(e))}</span>`)).join("")}\n            `,
					click: (e, r) => {
						const {
							value: o
						} = r.target.dataset;
						o && (t.flip = o.toLowerCase(), e.show = !1)
					},
					mounted: e => {
						const r = (0, o.query)('[data-value="normal"]', e);
						r && (0, o.inverseClass)(r, "art-current"), t.on("flip", (t => {
							const r = (0, o.queryAll)("span", e).find((e => e.dataset.value === t));
							r && (0, o.inverseClass)(r, "art-current")
						}))
					}
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	k8wIZ: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e) {
			return t => ({
				...e,
				html: t.i18n.get("Video Info"),
				click: e => {
					t.info.show = !0, e.show = !1
				}
			})
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	bb0TU: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e) {
			return {
				...e,
				html: '<a href="https://artplayer.org" target="_blank">ArtPlayer 4.5.12</a>'
			}
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9zTkI": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e) {
			return t => ({
				...e,
				html: t.i18n.get("Close"),
				click: e => {
					e.show = !1
				}
			})
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	hD2Lg: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./utils"),
			a = e("./utils/component"),
			n = o.interopDefault(a);
		class s extends n.default {
			constructor(e) {
				super(e), this.name = "info", i.isMobile || this.init()
			}
			init() {
				const {
					proxy: e,
					constructor: t,
					template: {
						$infoPanel: r,
						$infoClose: o,
						$video: a
					}
				} = this.art;
				e(o, "click", (() => {
					this.show = !1
				}));
				let n = null;
				const s = (0, i.queryAll)("[data-video]", r) || [];
				this.art.on("destroy", (() => {
						clearTimeout(n)
					})),
					function e() {
						for (let e = 0; e < s.length; e++) {
							const t = s[e],
								r = a[t.dataset.video],
								o = "number" == typeof r ? r.toFixed(2) : r;
							t.innerText !== o && (t.innerText = o)
						}
						n = setTimeout(e, t.INFO_LOOP_TIME)
					}()
			}
		}
		r.default = s
	}, {
		"./utils": "h3rH9",
		"./utils/component": "guki8",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	lum0D: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./utils"),
			a = e("./utils/component"),
			n = o.interopDefault(a),
			s = e("option-validator"),
			l = o.interopDefault(s),
			c = e("./scheme"),
			u = o.interopDefault(c);
		class p extends n.default {
			constructor(e) {
				super(e), this.name = "subtitle", this.eventDestroy = () => null, this.init(e.option.subtitle);
				let t = !1;
				e.on("video:timeupdate", (() => {
					if (!this.url) return;
					const e = this.art.template.$video.webkitDisplayingFullscreen;
					"boolean" == typeof e && e !== t && (t = e, this.createTrack(e ? "subtitles" : "metadata", this.url))
				}))
			}
			get url() {
				return this.art.template.$track.src
			}
			set url(e) {
				this.switch(e)
			}
			get textTrack() {
				return this.art.template.$video.textTracks[0]
			}
			get activeCue() {
				return this.textTrack.activeCues[0]
			}
			style(e, t) {
				const {
					$subtitle: r
				} = this.art.template;
				return "object" == typeof e ? (0, i.setStyles)(r, e) : (0, i.setStyle)(r, e, t)
			}
			update() {
				const {
					$subtitle: e
				} = this.art.template;
				e.innerHTML = "", this.activeCue && (e.innerHTML = this.activeCue.text.split(/\r?\n/).map((e => `<p>${(0,i.escape)(e)}</p>`)).join(""), this.art.emit("subtitleUpdate", this.activeCue.text))
			}
			async switch (e, t = {}) {
				const {
					i18n: r,
					notice: o,
					option: i
				} = this.art, a = {
					...i.subtitle,
					...t,
					url: e
				}, n = await this.init(a);
				return t.name && (o.show = `${r.get("Switch Subtitle")}: ${t.name}`), n
			}
			createTrack(e, t) {
				const {
					template: r,
					proxy: o
				} = this.art, {
					$video: a,
					$track: n
				} = r, s = (0, i.createElement)("track");
				s.default = !0, s.kind = e, s.src = t, s.track.mode = "hidden", this.eventDestroy(), (0, i.remove)(n), (0, i.append)(a, s), r.$track = s, this.eventDestroy = o(this.textTrack, "cuechange", (() => this.update()))
			}
			async init(e) {
				const {
					notice: t,
					template: {
						$subtitle: r
					}
				} = this.art;
				if ((0, l.default)(e, u.default.subtitle), e.url) return this.style(e.style), fetch(e.url).then((e => e.arrayBuffer())).then((t => {
					const r = new TextDecoder(e.encoding).decode(t);
					switch (this.art.emit("subtitleLoad", e.url), e.type || (0, i.getExt)(e.url)) {
						case "srt":
							return (0, i.vttToBlob)((0, i.srtToVtt)(r));
						case "ass":
							return (0, i.vttToBlob)((0, i.assToVtt)(r));
						case "vtt":
							return (0, i.vttToBlob)(r);
						default:
							return e.url
					}
				})).then((e => (r.innerHTML = "", this.url === e || (URL.revokeObjectURL(this.url), this.createTrack("metadata", e), this.art.emit("subtitleSwitch", e)), e))).catch((e => {
					throw t.show = e, e
				}))
			}
		}
		r.default = p
	}, {
		"./utils": "h3rH9",
		"./utils/component": "guki8",
		"option-validator": "9I0i9",
		"./scheme": "AdvwB",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"1Epl5": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils/error"),
			a = e("./clickInit"),
			n = o.interopDefault(a),
			s = e("./hoverInit"),
			l = o.interopDefault(s),
			c = e("./mousemoveInit"),
			u = o.interopDefault(c),
			p = e("./resizeInit"),
			d = o.interopDefault(p),
			f = e("./gestureInit"),
			h = o.interopDefault(f),
			m = e("./viewInit"),
			g = o.interopDefault(m);
		r.default = class {
			constructor(e) {
				this.destroyEvents = [], this.proxy = this.proxy.bind(this), this.hover = this.hover.bind(this), this.loadImg = this.loadImg.bind(this), e.whitelist.state && ((0, n.default)(e, this), (0, l.default)(e, this), (0, u.default)(e, this), (0, d.default)(e, this), (0, h.default)(e, this), (0, g.default)(e, this))
			}
			proxy(e, t, r, o = {}) {
				if (Array.isArray(t)) return t.map((t => this.proxy(e, t, r, o)));
				e.addEventListener(t, r, o);
				const i = () => e.removeEventListener(t, r, o);
				return this.destroyEvents.push(i), i
			}
			hover(e, t, r) {
				t && this.proxy(e, "mouseenter", t), r && this.proxy(e, "mouseleave", r)
			}
			loadImg(e) {
				return new Promise(((t, r) => {
					let o;
					if (e instanceof HTMLImageElement) o = e;
					else {
						if ("string" != typeof e) return r(new(0, i.ArtPlayerError)("Unable to get Image"));
						o = new Image, o.src = e
					}
					if (o.complete) return t(o);
					this.proxy(o, "load", (() => t(o))), this.proxy(o, "error", (() => r(new(0, i.ArtPlayerError)(`Failed to load Image: ${o.src}`))))
				}))
			}
			destroy() {
				for (let e = 0; e < this.destroyEvents.length; e++) this.destroyEvents[e]()
			}
		}
	}, {
		"../utils/error": "2nFlF",
		"./clickInit": "gzL6e",
		"./hoverInit": "kpTJf",
		"./mousemoveInit": "9tYbi",
		"./resizeInit": "9TXOX",
		"./gestureInit": "dePMU",
		"./viewInit": "hDyWF",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	gzL6e: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e, t) {
			const {
				constructor: r,
				template: {
					$player: i,
					$video: a
				}
			} = e;
			t.proxy(document, ["click", "contextmenu"], (t => {
				(0, o.includeFromEvent)(t, i) ? (e.isInput = "INPUT" === t.target.tagName, e.isFocus = !0, e.emit("focus")) : (e.isInput = !1, e.isFocus = !1, e.emit("blur"))
			}));
			let n = 0;
			t.proxy(a, "click", (() => {
				const t = Date.now();
				t - n <= r.DB_CLICE_TIME ? (e.emit("dblclick"), o.isMobile ? e.isLock || e.toggle() : e.fullscreen = !e.fullscreen) : (e.emit("click"), o.isMobile || e.toggle()), n = t
			}))
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	kpTJf: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e, t) {
			const {
				$player: r
			} = e.template;
			t.hover(r, (() => {
				(0, o.addClass)(r, "art-hover"), e.emit("hover", !0)
			}), (() => {
				(0, o.removeClass)(r, "art-hover"), e.emit("hover", !1)
			}))
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9tYbi": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e, t) {
			const {
				$player: r
			} = e.template;
			t.proxy(r, "mousemove", (t => {
				e.emit("mousemove", t)
			}))
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9TXOX": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e, t) {
			const {
				option: r
			} = e, i = (0, o.throttle)((() => {
				e.normalSize && (e.autoSize = r.autoSize), e.aspectRatioReset = !0, e.notice.show = "", e.emit("resize")
			}), e.constructor.RESIZE_TIME);
			t.proxy(window, ["orientationchange", "resize"], (() => {
				i()
			})), screen && screen.orientation && screen.orientation.onchange && t.proxy(screen.orientation, "change", (() => {
				i()
			}))
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	dePMU: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils"),
			i = e("../control/progress");
		r.default = function(e, t) {
			if (o.isMobile && !e.option.isLive) {
				const {
					$video: r,
					$progress: a
				} = e.template;
				let n = null,
					s = !1,
					l = 0,
					c = 0,
					u = 0;
				const p = t => {
						if (1 === t.touches.length && !e.isLock) {
							n === a && (0, i.setCurrentTime)(e, t), s = !0;
							const {
								clientX: r,
								clientY: o
							} = t.touches[0];
							l = r, c = o, u = e.currentTime
						}
					},
					d = t => {
						if (1 === t.touches.length && s && e.duration) {
							const {
								clientX: i,
								clientY: a
							} = t.touches[0], s = (0, o.clamp)((i - l) / e.width, -1, 1), p = (0, o.clamp)((a - c) / e.height, -1, 1), d = e.isRotate ? p : s, f = n === r ? e.constructor.TOUCH_MOVE_RATIO : 1, h = (0, o.clamp)(u + e.duration * d * f, 0, e.duration);
							e.seek = h, e.emit("setBar", "played", (0, o.clamp)(h / e.duration, 0, 1)), e.notice.show = `${(0,o.secondToTime)(h)} / ${(0,o.secondToTime)(e.duration)}`
						}
					},
					f = () => {
						s && (l = 0, c = 0, u = 0, s = !1, n = null)
					};
				t.proxy(a, "touchstart", (e => {
					n = a, p(e)
				})), t.proxy(r, "touchstart", (e => {
					n = r, p(e)
				})), t.proxy(r, "touchmove", d), t.proxy(a, "touchmove", d), t.proxy(document, "touchend", f)
			}
		}
	}, {
		"../utils": "h3rH9",
		"../control/progress": "aBBSH",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	hDyWF: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e, t) {
			const {
				option: r,
				constructor: i,
				template: {
					$container: a
				}
			} = e, n = (0, o.throttle)((() => {
				e.emit("view", (0, o.isInViewport)(a, i.SCROLL_GAP))
			}), i.SCROLL_TIME);
			t.proxy(window, "scroll", (() => {
				n()
			})), e.on("view", (t => {
				r.autoMini && (e.mini = !t)
			}))
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	eTow4: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("./utils");
		r.default = class {
			constructor(e) {
				this.art = e, this.keys = {}, e.option.hotkey && !o.isMobile && this.init()
			}
			init() {
				const {
					proxy: e,
					constructor: t
				} = this.art;
				this.add(27, (() => {
					this.art.fullscreenWeb && (this.art.fullscreenWeb = !1)
				})), this.add(32, (() => {
					this.art.toggle()
				})), this.add(37, (() => {
					this.art.backward = t.SEEK_STEP
				})), this.add(38, (() => {
					this.art.volume += t.VOLUME_STEP
				})), this.add(39, (() => {
					this.art.forward = t.SEEK_STEP
				})), this.add(40, (() => {
					this.art.volume -= t.VOLUME_STEP
				})), e(window, "keydown", (e => {
					if (this.art.isFocus) {
						const t = document.activeElement.tagName.toUpperCase(),
							r = document.activeElement.getAttribute("contenteditable");
						if ("INPUT" !== t && "TEXTAREA" !== t && "" !== r && "true" !== r) {
							const t = this.keys[e.keyCode];
							if (t) {
								e.preventDefault();
								for (let r = 0; r < t.length; r++) t[r].call(this.art, e);
								this.art.emit("hotkey", e)
							}
						}
					}
				}))
			}
			add(e, t) {
				return this.keys[e] ? this.keys[e].push(t) : this.keys[e] = [t], this
			}
			remove(e, t) {
				if (this.keys[e]) {
					const r = this.keys[e].indexOf(t); - 1 !== r && this.keys[e].splice(r, 1)
				}
				return this
			}
		}
	}, {
		"./utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"4fDoD": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./utils/component"),
			a = o.interopDefault(i);
		class n extends a.default {
			constructor(e) {
				super(e);
				const {
					option: t,
					template: {
						$layer: r
					}
				} = e;
				this.name = "layer", this.$parent = r;
				for (let e = 0; e < t.layers.length; e++) this.add(t.layers[e])
			}
		}
		r.default = n
	}, {
		"./utils/component": "guki8",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fE0Sp: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./utils"),
			a = e("./utils/component"),
			n = o.interopDefault(a);
		class s extends n.default {
			constructor(e) {
				super(e), this.name = "loading", (0, i.append)(e.template.$loading, e.icons.loading)
			}
		}
		r.default = s
	}, {
		"./utils": "h3rH9",
		"./utils/component": "guki8",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"9PuGy": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("./utils");
		r.default = class {
			constructor(e) {
				this.art = e, this.timer = null
			}
			set show(e) {
				const {
					constructor: t,
					template: {
						$player: r,
						$noticeInner: i
					}
				} = this.art;
				e ? (i.innerText = e instanceof Error ? e.message.trim() : e, (0, o.addClass)(r, "art-notice-show"), clearTimeout(this.timer), this.timer = setTimeout((() => {
					i.innerText = "", (0, o.removeClass)(r, "art-notice-show")
				}), t.NOTICE_TIME)) : (0, o.removeClass)(r, "art-notice-show")
			}
		}
	}, {
		"./utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2etr0": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./utils"),
			a = e("./utils/component"),
			n = o.interopDefault(a);
		class s extends n.default {
			constructor(e) {
				super(e), this.name = "mask";
				const {
					template: t,
					icons: r,
					events: o
				} = e, a = (0, i.append)(t.$state, r.state), n = (0, i.append)(t.$state, r.error);
				(0, i.setStyle)(n, "display", "none"), e.on("destroy", (() => {
					(0, i.setStyle)(a, "display", "none"), (0, i.setStyle)(n, "display", null)
				})), o.proxy(t.$state, "click", (() => e.play()))
			}
		}
		r.default = s
	}, {
		"./utils": "h3rH9",
		"./utils/component": "guki8",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"6dYSr": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils"),
			a = e("bundle-text:./loading.svg"),
			n = o.interopDefault(a),
			s = e("bundle-text:./state.svg"),
			l = o.interopDefault(s),
			c = e("bundle-text:./check.svg"),
			u = o.interopDefault(c),
			p = e("bundle-text:./play.svg"),
			d = o.interopDefault(p),
			f = e("bundle-text:./pause.svg"),
			h = o.interopDefault(f),
			m = e("bundle-text:./volume.svg"),
			g = o.interopDefault(m),
			y = e("bundle-text:./volume-close.svg"),
			v = o.interopDefault(y),
			b = e("bundle-text:./screenshot.svg"),
			x = o.interopDefault(b),
			w = e("bundle-text:./setting.svg"),
			j = o.interopDefault(w),
			k = e("bundle-text:./arrow-left.svg"),
			S = o.interopDefault(k),
			I = e("bundle-text:./arrow-right.svg"),
			$ = o.interopDefault(I),
			O = e("bundle-text:./playback-rate.svg"),
			T = o.interopDefault(O),
			E = e("bundle-text:./aspect-ratio.svg"),
			M = o.interopDefault(E),
			P = e("bundle-text:./config.svg"),
			F = o.interopDefault(P),
			C = e("bundle-text:./pip.svg"),
			H = o.interopDefault(C),
			A = e("bundle-text:./lock.svg"),
			R = o.interopDefault(A),
			D = e("bundle-text:./unlock.svg"),
			z = o.interopDefault(D),
			B = e("bundle-text:./fullscreen-off.svg"),
			L = o.interopDefault(B),
			N = e("bundle-text:./fullscreen-on.svg"),
			V = o.interopDefault(N),
			_ = e("bundle-text:./fullscreen-web-off.svg"),
			Z = o.interopDefault(_),
			q = e("bundle-text:./fullscreen-web-on.svg"),
			W = o.interopDefault(q),
			U = e("bundle-text:./switch-on.svg"),
			Y = o.interopDefault(U),
			X = e("bundle-text:./switch-off.svg"),
			G = o.interopDefault(X),
			J = e("bundle-text:./flip.svg"),
			K = o.interopDefault(J),
			Q = e("bundle-text:./error.svg"),
			ee = o.interopDefault(Q),
			te = e("bundle-text:./close.svg"),
			re = o.interopDefault(te),
			oe = e("bundle-text:./airplay.svg"),
			ie = o.interopDefault(oe);
		r.default = class {
			constructor(e) {
				const t = {
					loading: n.default,
					state: l.default,
					play: d.default,
					pause: h.default,
					check: u.default,
					volume: g.default,
					volumeClose: v.default,
					screenshot: x.default,
					setting: j.default,
					pip: H.default,
					arrowLeft: S.default,
					arrowRight: $.default,
					playbackRate: T.default,
					aspectRatio: M.default,
					config: F.default,
					lock: R.default,
					flip: K.default,
					unlock: z.default,
					fullscreenOff: L.default,
					fullscreenOn: V.default,
					fullscreenWebOff: Z.default,
					fullscreenWebOn: W.default,
					switchOn: Y.default,
					switchOff: G.default,
					error: ee.default,
					close: re.default,
					airplay: ie.default,
					...e.option.icons
				};
				Object.keys(t).forEach((e => {
					(0, i.def)(this, e, {
						get: () => {
							const r = (0, i.createElement)("i");
							return (0, i.addClass)(r, "art-icon"), (0, i.addClass)(r, `art-icon-${e}`), (0, i.append)(r, t[e]), r
						}
					})
				}))
			}
		}
	}, {
		"../utils": "h3rH9",
		"bundle-text:./loading.svg": "fY5Gt",
		"bundle-text:./state.svg": "iNfLt",
		"bundle-text:./check.svg": "jtE9u",
		"bundle-text:./play.svg": "elgfY",
		"bundle-text:./pause.svg": "eKokJ",
		"bundle-text:./volume.svg": "hNB4y",
		"bundle-text:./volume-close.svg": "i9vta",
		"bundle-text:./screenshot.svg": "kB3Mf",
		"bundle-text:./setting.svg": "3MONs",
		"bundle-text:./arrow-left.svg": "iMCpk",
		"bundle-text:./arrow-right.svg": "3oe4L",
		"bundle-text:./playback-rate.svg": "liE22",
		"bundle-text:./aspect-ratio.svg": "8HqYc",
		"bundle-text:./config.svg": "hYAAH",
		"bundle-text:./pip.svg": "jmNrH",
		"bundle-text:./lock.svg": "cIqko",
		"bundle-text:./unlock.svg": "65zy4",
		"bundle-text:./fullscreen-off.svg": "jaJRT",
		"bundle-text:./fullscreen-on.svg": "cRY1X",
		"bundle-text:./fullscreen-web-off.svg": "3aVGL",
		"bundle-text:./fullscreen-web-on.svg": "4DiVn",
		"bundle-text:./switch-on.svg": "kwdKE",
		"bundle-text:./switch-off.svg": "bWfXZ",
		"bundle-text:./flip.svg": "h3zZ9",
		"bundle-text:./error.svg": "7Oyth",
		"bundle-text:./close.svg": "U5Jcy",
		"bundle-text:./airplay.svg": "jK5Fx",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fY5Gt: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default"><path fill="none" class="bk" d="M0 0h100v100H0z"/><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(30 105.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(60 75.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(90 65 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(120 58.66 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(150 54.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-150 45.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-120 41.34 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-90 35 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-60 24.02 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="40" width="6" height="20" rx="5" ry="5" fill="#fff" transform="rotate(-30 -5.98 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect></svg>'
	}, {}],
	iNfLt: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" style="filter:drop-shadow(0 1px 1px #000)" viewBox="0 0 24 24"><path d="M20 2H4C1.8 2 0 3.8 0 6v12c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-4.4 10.8L10.5 16c-.6.5-1.5 0-1.5-.8V8.8c0-.8.9-1.3 1.5-.8l5.1 3.2c.7.3.7 1.3 0 1.6z"/></svg>'
	}, {}],
	jtE9u: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:100%;height:100%"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>'
	}, {}],
	elgfY: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M17.982 9.275 8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"/></svg>'
	}, {}],
	eKokJ: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zm8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"/></svg>'
	}, {}],
	hNB4y: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M10.188 4.65 6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zm4.258-.872a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"/><path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"/></svg>'
	}, {}],
	i9vta: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"/><path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zm5.195 13.195-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"/></svg>'
	}, {}],
	kB3Mf: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50"><path d="M19.402 6a5 5 0 0 0-4.902 4.012L14.098 12H9a5 5 0 0 0-5 5v21a5 5 0 0 0 5 5h32a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5h-5.098l-.402-1.988A5 5 0 0 0 30.598 6ZM25 17c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10Zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z"/></svg>'
	}, {}],
	"3MONs": [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22"><circle cx="11" cy="11" r="2"/><path d="M19.164 8.861 17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>'
	}, {}],
	iMCpk: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m19.41 20.09-4.58-4.59 4.58-4.59L18 9.5l-6 6 6 6z" fill="#fff"/></svg>'
	}, {}],
	"3oe4L": [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"><path d="m12.59 20.34 4.58-4.59-4.58-4.59L14 9.75l6 6-6 6z" fill="#fff"/></svg>'
	}, {}],
	liE22: [function(e, t, r) {
		t.exports = '<svg height="24" width="24"><path d="M10 8v8l6-4-6-4zM6.3 5l-.6-.8C7.2 3 9 2.2 11 2l.1 1c-1.8.2-3.4.9-4.8 2zM5 6.3l-.8-.6C3 7.2 2.2 9 2 11l1 .1c.2-1.8.9-3.4 2-4.8zm0 11.4c-1.1-1.4-1.8-3.1-2-4.8L2 13c.2 2 1 3.8 2.2 5.4l.8-.7zm6.1 3.3c-1.8-.2-3.4-.9-4.8-2l-.6.8C7.2 21 9 21.8 11 22l.1-1zM22 12c0-5.2-3.9-9.4-9-10l-.1 1c4.6.5 8.1 4.3 8.1 9s-3.5 8.5-8.1 9l.1 1c5.2-.5 9-4.8 9-10z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
	}, {}],
	"8HqYc": [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style="width:100%;height:100%;transform:translate(0,0)"><defs><clipPath id="__lottie_element_216"><path d="M0 0h88v88H0z"/></clipPath></defs><g style="display:block" clip-path="url(\'#__lottie_element_216\')"><path fill="#FFF" d="m12.438-12.702-2.82 2.82c-.79.79-.79 2.05 0 2.83l7.07 7.07-7.07 7.07c-.79.79-.79 2.05 0 2.83l2.82 2.83c.79.78 2.05.78 2.83 0l11.32-11.31c.78-.78.78-2.05 0-2.83l-11.32-11.31c-.78-.79-2.04-.79-2.83 0zm-24.88 0c-.74-.74-1.92-.78-2.7-.12l-.13.12-11.31 11.31a2 2 0 0 0-.12 2.7l.12.13 11.31 11.31a2 2 0 0 0 2.7.12l.13-.12 2.83-2.83c.74-.74.78-1.91.11-2.7l-.11-.13-7.07-7.07 7.07-7.07c.74-.74.78-1.91.11-2.7l-.11-.13-2.83-2.82zM28-28c4.42 0 8 3.58 8 8v40c0 4.42-3.58 8-8 8h-56c-4.42 0-8-3.58-8-8v-40c0-4.42 3.58-8 8-8h56z" style="--darkreader-inline-fill:#a8a6a4" transform="translate(44 44)"/></g></svg>'
	}, {}],
	hYAAH: [function(e, t, r) {
		t.exports = '<svg height="24" width="24"><path d="M15 17h6v1h-6v-1zm-4 0H3v1h8v2h1v-5h-1v2zm3-9h1V3h-1v2H3v1h11v2zm4-3v1h3V5h-3zM6 14h1V9H6v2H3v1h3v2zm4-2h11v-1H10v1z" fill="#fff" style="--darkreader-inline-fill:#a8a6a4"/></svg>'
	}, {}],
	jmNrH: [function(e, t, r) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" height="32" width="32"><path d="M25 17h-8v6h8v-6Zm4 8V10.98C29 9.88 28.1 9 27 9H9c-1.1 0-2 .88-2 1.98V25c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2Zm-2 .02H9V10.97h18v14.05Z"/></svg>'
	}, {}],
	cIqko: [function(e, t, r) {
		t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M298.667 426.667v-85.334a213.333 213.333 0 1 1 426.666 0v85.334H768A85.333 85.333 0 0 1 853.333 512v256A85.333 85.333 0 0 1 768 853.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667zM512 213.333a128 128 0 0 0-128 128v85.334h256v-85.334a128 128 0 0 0-128-128z" fill="#fff"/></svg>'
	}, {}],
	"65zy4": [function(e, t, r) {
		t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="m666.752 194.517-49.365 74.112A128 128 0 0 0 384 341.333l.043 85.334h384A85.333 85.333 0 0 1 853.376 512v256a85.333 85.333 0 0 1-85.333 85.333H256A85.333 85.333 0 0 1 170.667 768V512A85.333 85.333 0 0 1 256 426.667h42.667v-85.334a213.333 213.333 0 0 1 368.085-146.816z" fill="#fff"/></svg>'
	}, {}],
	jaJRT: [function(e, t, r) {
		t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M768 298.667h170.667V384h-256V128H768v170.667zM341.333 384h-256v-85.333H256V128h85.333v256zM768 725.333V896h-85.333V640h256v85.333H768zM341.333 640v256H256V725.333H85.333V640h256z"/></svg>'
	}, {}],
	cRY1X: [function(e, t, r) {
		t.exports = '<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M625.778 256H768v142.222h113.778v-256h-256V256zM256 398.222V256h142.222V142.222h-256v256H256zm512 227.556V768H625.778v113.778h256v-256H768zM398.222 768H256V625.778H142.222v256h256V768z"/></svg>'
	}, {}],
	"3aVGL": [function(e, t, r) {
		t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640H768v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208l8-.384H896zm-640 0a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144l-8 .448H256z"/></svg>'
	}, {}],
	"4DiVn": [function(e, t, r) {
		t.exports = '<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4a76.8 76.8 0 0 0 76.8 76.8h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zm-576 64a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144l8-.448H448zm256 640a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 .384H704z"/></svg>'
	}, {}],
	kwdKE: [function(e, t, r) {
		t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"/></svg>'
	}, {}],
	bWfXZ: [function(e, t, r) {
		t.exports = '<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M511.898 1024h670.515c282.419-.41 511.18-229.478 511.18-511.898 0-282.419-228.761-511.488-511.18-511.897H511.898C229.478.615.717 229.683.717 512.102c0 282.42 228.761 511.488 511.18 511.898zm-.564-975.36A464.589 464.589 0 1 1 48.026 513.024 463.872 463.872 0 0 1 511.334 48.435v.205z"/></svg>'
	}, {}],
	h3zZ9: [function(e, t, r) {
		t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M554.667 810.667V896h-85.334v-85.333h85.334zm-384-632.662a42.667 42.667 0 0 1 34.986 18.219l203.904 291.328a42.667 42.667 0 0 1 0 48.896L205.611 827.776A42.667 42.667 0 0 1 128 803.328V220.672a42.667 42.667 0 0 1 42.667-42.667zm682.666 0a42.667 42.667 0 0 1 42.368 37.718l.299 4.949v582.656a42.667 42.667 0 0 1-74.24 28.63l-3.413-4.182-203.904-291.328a42.667 42.667 0 0 1-3.03-43.861l3.03-5.035 203.946-291.328a42.667 42.667 0 0 1 34.944-18.219zM554.667 640v85.333h-85.334V640h85.334zm-358.4-320.896V716.8L335.957 512 196.31 319.104zm358.4 150.23v85.333h-85.334v-85.334h85.334zm0-170.667V384h-85.334v-85.333h85.334zm0-170.667v85.333h-85.334V128h85.334z" fill="#fff"/></svg>'
	}, {}],
	"7Oyth": [function(e, t, r) {
		t.exports = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><path d="M593.818 168.55 949.82 763.76c26.153 43.746 10.732 99.738-34.447 125.052-14.397 8.069-30.72 12.308-47.37 12.308H155.976c-52.224 0-94.536-40.96-94.536-91.505 0-16.097 4.383-31.928 12.718-45.875l356.004-595.19c26.173-43.724 84.009-58.654 129.208-33.341a93.082 93.082 0 0 1 34.448 33.341zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88zm0-512a72.315 72.315 0 0 0-71.762 81.306l25.723 205.721a46.408 46.408 0 0 0 92.078 0l25.723-205.742A72.315 72.315 0 0 0 512 307.2z"/></svg>'
	}, {}],
	U5Jcy: [function(e, t, r) {
		t.exports = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"/></svg>'
	}, {}],
	jK5Fx: [function(e, t, r) {
		t.exports = '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="M16 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-2H3V3h12v8h-2v2h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/><path d="M4 17h10l-5-6z"/></g></svg>'
	}, {}],
	bRHiA: [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./flip"),
			a = o.interopDefault(i),
			n = e("./aspectRatio"),
			s = o.interopDefault(n),
			l = e("./playbackRate"),
			c = o.interopDefault(l),
			u = e("./subtitleOffset"),
			p = o.interopDefault(u),
			d = e("../utils/component"),
			f = o.interopDefault(d),
			h = e("../utils");
		class m extends f.default {
			constructor(e) {
				super(e);
				const {
					option: t,
					proxy: r,
					template: {
						$setting: o,
						$player: i
					}
				} = e;
				if (this.name = "setting", this.$parent = o, this.option = [], this.events = [], this.cache = new Map, t.setting) {
					t.playbackRate && this.option.push((0, c.default)(e)), t.aspectRatio && this.option.push((0, s.default)(e)), t.flip && this.option.push((0, a.default)(e)), t.subtitleOffset && this.option.push((0, p.default)(e));
					for (let e = 0; e < t.settings.length; e++) this.option.push(t.settings[e]);
					this.update(), e.on("blur", (() => {
						this.show && (this.show = !1, this.init(this.option))
					})), r(i, "click", (t => {
						!this.show || (0, h.includeFromEvent)(t, e.controls.setting) || (0, h.includeFromEvent)(t, this.$parent) || (this.show = !1, this.init(this.option))
					}))
				}
			}
			static makeRecursion(e, t, r) {
				for (let o = 0; o < e.length; o++) {
					const i = e[o];
					i.$parentItem = t, i.$parentList = r, i.selector && m.makeRecursion(i.selector, i, e)
				}
				return e
			}
			update() {
				return this.cache = new Map, this.events.forEach((e => e())), this.events = [], this.$parent.innerHTML = "", this.option = m.makeRecursion(this.option), this.init(this.option), this.option
			}
			add(e) {
				return this.option.push(e), this.update(), e
			}
			creatHeader(e) {
				const {
					icons: t,
					proxy: r
				} = this.art, o = (0, h.createElement)("div");
				(0, h.addClass)(o, "art-setting-item"), (0, h.addClass)(o, "art-setting-item-back");
				const i = (0, h.append)(o, '<div class="art-setting-item-left"></div>'),
					a = (0, h.createElement)("div");
				(0, h.addClass)(a, "art-setting-item-left-icon"), (0, h.append)(a, t.arrowLeft), (0, h.append)(i, a), (0, h.append)(i, e.$parentItem.html);
				const n = r(o, "click", (() => this.init(e.$parentList)));
				return this.events.push(n), o
			}
			creatItem(e, t) {
				const {
					icons: r,
					proxy: o
				} = this.art, i = (0, h.createElement)("div");
				(0, h.addClass)(i, "art-setting-item"), (0, h.isStringOrNumber)(t.name) && (i.dataset.name = t.name), (0, h.isStringOrNumber)(t.value) && (i.dataset.value = t.value);
				const a = (0, h.append)(i, '<div class="art-setting-item-left"></div>'),
					n = (0, h.append)(i, '<div class="art-setting-item-right"></div>'),
					s = (0, h.createElement)("div");
				switch ((0, h.addClass)(s, "art-setting-item-left-icon"), e) {
					case "switch":
					case "range":
						(0, h.append)(s, (0, h.isStringOrNumber)(t.icon) || t.icon instanceof Element ? t.icon : r.config);
						break;
					case "selector":
						t.selector && t.selector.length ? (0, h.append)(s, (0, h.isStringOrNumber)(t.icon) || t.icon instanceof Element ? t.icon : r.config) : (0, h.append)(s, r.check)
				}(0, h.append)(a, s), t.$icon = s, (0, h.def)(t, "icon", {
					configurable: !0,
					get: () => s.innerHTML,
					set(e) {
						(0, h.isStringOrNumber)(e) && (s.innerHTML = e)
					}
				});
				const l = (0, h.createElement)("div");
				(0, h.addClass)(l, "art-setting-item-left-text"), (0, h.append)(l, t.html || ""), (0, h.append)(a, l), t.$html = l, (0, h.def)(t, "html", {
					configurable: !0,
					get: () => l.innerHTML,
					set(e) {
						(0, h.isStringOrNumber)(e) && (l.innerHTML = e)
					}
				});
				const c = (0, h.createElement)("div");
				switch ((0, h.addClass)(c, "art-setting-item-right-tooltip"), (0, h.append)(c, t.tooltip || ""), (0, h.append)(n, c), t.$tooltip = c, (0, h.def)(t, "tooltip", {
						configurable: !0,
						get: () => c.innerHTML,
						set(e) {
							(0, h.isStringOrNumber)(e) && (c.innerHTML = e)
						}
					}), e) {
					case "switch": {
						const e = (0, h.createElement)("div");
						(0, h.addClass)(e, "art-setting-item-right-icon");
						const o = (0, h.append)(e, r.switchOn),
							i = (0, h.append)(e, r.switchOff);
						(0, h.setStyle)(t.switch ? i : o, "display", "none"), (0, h.append)(n, e), t.$switch = t.switch, (0, h.def)(t, "switch", {
							configurable: !0,
							get: () => t.$switch,
							set(e) {
								t.$switch = e, e ? ((0, h.setStyle)(i, "display", "none"), (0, h.setStyle)(o, "display", null)) : ((0, h.setStyle)(i, "display", null), (0, h.setStyle)(o, "display", "none"))
							}
						});
						break
					}
					case "range": {
						const e = (0, h.createElement)("div");
						(0, h.addClass)(e, "art-setting-item-right-icon");
						const r = (0, h.append)(e, '<input type="range">');
						r.value = t.range[0] || 0, r.min = t.range[1] || 0, r.max = t.range[2] || 10, r.step = t.range[3] || 1, (0, h.addClass)(r, "art-setting-range"), (0, h.append)(n, e), t.$range = r, (0, h.def)(t, "range", {
							configurable: !0,
							get: () => r.valueAsNumber,
							set(e) {
								r.value = Number(e)
							}
						})
					}
					break;
					case "selector":
						if (t.selector && t.selector.length) {
							const e = (0, h.createElement)("div");
							(0, h.addClass)(e, "art-setting-item-right-icon"), (0, h.append)(e, r.arrowRight), (0, h.append)(n, e)
						}
				}
				switch (e) {
					case "switch":
						if (t.onSwitch) {
							const e = o(i, "click", (async e => {
								t.switch = await t.onSwitch.call(this.art, t, i, e)
							}));
							this.events.push(e)
						}
						break;
					case "range":
						if (t.$range) {
							if (t.onRange) {
								const e = o(t.$range, "change", (async e => {
									t.tooltip = await t.onRange.call(this.art, t, i, e)
								}));
								this.events.push(e)
							}
							if (t.onChange) {
								const e = o(t.$range, "input", (async e => {
									t.tooltip = await t.onChange.call(this.art, t, i, e)
								}));
								this.events.push(e)
							}
						}
						break;
					case "selector": {
						const e = o(i, "click", (async e => {
							if (t.selector && t.selector.length) this.init(t.selector, t.width);
							else {
								(0, h.inverseClass)(i, "art-current");
								for (let e = 0; e < t.$parentItem.selector.length; e++) {
									const r = t.$parentItem.selector[e];
									r.default = r === t
								}
								if (t.$parentList && this.init(t.$parentList), t.$parentItem && t.$parentItem.onSelect) {
									const r = await t.$parentItem.onSelect.call(this.art, t, i, e);
									t.$parentItem.$tooltip && (0, h.isStringOrNumber)(r) && (t.$parentItem.$tooltip.innerHTML = r)
								}
							}
						}));
						this.events.push(e), t.default && (0, h.addClass)(i, "art-current")
					}
				}
				return i
			}
			init(e, t) {
				const {
					constructor: r
				} = this.art;
				if (this.cache.has(e)) {
					const t = this.cache.get(e);
					(0, h.inverseClass)(t, "art-current"), (0, h.setStyle)(this.$parent, "width", `${t.dataset.width}px`), (0, h.setStyle)(this.$parent, "height", `${t.dataset.height}px`)
				} else {
					const o = (0, h.createElement)("div");
					(0, h.addClass)(o, "art-setting-panel"), o.dataset.width = t || r.SETTING_WIDTH, o.dataset.height = e.length * r.SETTING_ITEM_HEIGHT, e[0] && e[0].$parentItem && ((0, h.append)(o, this.creatHeader(e[0])), o.dataset.height = Number(o.dataset.height) + r.SETTING_ITEM_HEIGHT);
					for (let t = 0; t < e.length; t++) {
						const r = e[t];
						(0, h.has)(r, "switch") ? (0, h.append)(o, this.creatItem("switch", r)) : (0, h.has)(r, "range") ? (0, h.append)(o, this.creatItem("range", r)) : (0, h.append)(o, this.creatItem("selector", r))
					}(0, h.append)(this.$parent, o), this.cache.set(e, o), (0, h.inverseClass)(o, "art-current"), (0, h.setStyle)(this.$parent, "width", `${o.dataset.width}px`), (0, h.setStyle)(this.$parent, "height", `${o.dataset.height}px`), e[0] && e[0].$parentItem && e[0].$parentItem.mounted && e[0].$parentItem.mounted.call(this.art, o, e[0].$parentItem)
				}
			}
		}
		r.default = m
	}, {
		"./flip": "bNOaj",
		"./aspectRatio": "5lAsp",
		"./playbackRate": "e6hsR",
		"./subtitleOffset": "fFNEr",
		"../utils/component": "guki8",
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	bNOaj: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				icons: r,
				constructor: {
					SETTING_ITEM_WIDTH: i,
					FLIP: a
				}
			} = e;

			function n(e, r, i) {
				r && (r.innerText = t.get((0, o.capitalize)(i)));
				const a = (0, o.queryAll)(".art-setting-item", e).find((e => e.dataset.value === i));
				a && (0, o.inverseClass)(a, "art-current")
			}
			return {
				width: i,
				html: t.get("Video Flip"),
				tooltip: t.get((0, o.capitalize)(e.flip)),
				icon: r.flip,
				selector: a.map((r => ({
					value: r,
					default: r === e.flip,
					html: t.get((0, o.capitalize)(r))
				}))),
				onSelect(t) {
					e.flip = t.value
				},
				mounted: (t, r) => {
					n(t, r.$tooltip, e.flip), e.on("flip", (() => {
						n(t, r.$tooltip, e.flip)
					}))
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"5lAsp": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				icons: r,
				constructor: {
					SETTING_ITEM_WIDTH: i,
					ASPECT_RATIO: a
				}
			} = e;

			function n(e) {
				return "default" === e ? t.get("Default") : e
			}

			function s(e, t, r) {
				t && (t.innerText = n(r));
				const i = (0, o.queryAll)(".art-setting-item", e).find((e => e.dataset.value === r));
				i && (0, o.inverseClass)(i, "art-current")
			}
			return {
				width: i,
				html: t.get("Aspect Ratio"),
				icon: r.aspectRatio,
				tooltip: n(e.aspectRatio),
				selector: a.map((t => ({
					value: t,
					default: t === e.aspectRatio,
					html: n(t)
				}))),
				onSelect(t) {
					e.aspectRatio = t.value
				},
				mounted: (t, r) => {
					s(t, r.$tooltip, e.aspectRatio), e.on("aspectRatio", (() => {
						s(t, r.$tooltip, e.aspectRatio)
					}))
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	e6hsR: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				icons: r,
				constructor: {
					SETTING_ITEM_WIDTH: i,
					PLAYBACK_RATE: a
				}
			} = e;

			function n(e) {
				return 1 === e ? t.get("Normal") : e
			}

			function s(e, t, r) {
				t && (t.innerText = n(r));
				const i = (0, o.queryAll)(".art-setting-item", e).find((e => Number(e.dataset.value) === r));
				i && (0, o.inverseClass)(i, "art-current")
			}
			return {
				width: i,
				html: t.get("Play Speed"),
				tooltip: n(e.playbackRate),
				icon: r.playbackRate,
				selector: a.map((t => ({
					value: t,
					default: t === e.playbackRate,
					html: n(t)
				}))),
				onSelect(t) {
					e.playbackRate = t.value
				},
				mounted: (t, r) => {
					s(t, r.$tooltip, e.playbackRate), e.on("playbackRate", (() => {
						s(t, r.$tooltip, e.playbackRate)
					}))
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	fFNEr: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				icons: r,
				constructor: i
			} = e;

			function a(e) {
				return 0 === e ? t.get("Normal") : e
			}

			function n(e, t, r) {
				t && (t.innerText = a(r));
				const i = (0, o.queryAll)(".art-setting-item", e).find((e => Number(e.dataset.value) === r));
				i && (0, o.inverseClass)(i, "art-current")
			}
			return {
				width: i.SETTING_ITEM_WIDTH,
				html: t.get("Subtitle Offset"),
				tooltip: a(e.subtitleOffset),
				icon: r.subtitle,
				selector: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((t => ({
					value: t,
					default: t === e.subtitleOffset,
					html: a(t)
				}))),
				onSelect(t) {
					e.subtitleOffset = t.value
				},
				mounted: (t, r) => {
					n(t, r.$tooltip, e.subtitleOffset), e.on("subtitleOffset", (() => {
						n(t, r.$tooltip, e.subtitleOffset)
					}))
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	f2Thp: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		r.default = class {
			constructor() {
				this.name = "artplayer_settings", this.settings = {}
			}
			get(e) {
				try {
					const t = JSON.parse(window.localStorage.getItem(this.name)) || {};
					return e ? t[e] : t
				} catch (t) {
					return e ? this.settings[e] : this.settings
				}
			}
			set(e, t) {
				try {
					const r = Object.assign({}, this.get(), {
						[e]: t
					});
					window.localStorage.setItem(this.name, JSON.stringify(r))
				} catch (r) {
					this.settings[e] = t
				}
			}
			del(e) {
				try {
					const t = this.get();
					delete t[e], window.localStorage.setItem(this.name, JSON.stringify(t))
				} catch (t) {
					delete this.settings[e]
				}
			}
			clear() {
				try {
					window.localStorage.removeItem(this.name)
				} catch (e) {
					this.settings = {}
				}
			}
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"96ThS": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("../utils"),
			a = e("./miniProgressBar"),
			n = o.interopDefault(a),
			s = e("./autoOrientation"),
			l = o.interopDefault(s),
			c = e("./autoPlayback"),
			u = o.interopDefault(c),
			p = e("./fastForward"),
			d = o.interopDefault(p),
			f = e("./lock"),
			h = o.interopDefault(f);
		r.default = class {
			constructor(e) {
				this.art = e, this.id = 0;
				const {
					option: t
				} = e;
				t.miniProgressBar && !t.isLive && this.add(n.default), t.lock && i.isMobile && this.add(h.default), t.autoPlayback && !t.isLive && this.add(u.default), t.autoOrientation && i.isMobile && this.add(l.default), t.fastForward && i.isMobile && !t.isLive && this.add(d.default);
				for (let e = 0; e < t.plugins.length; e++) this.add(t.plugins[e])
			}
			add(e) {
				this.id += 1;
				const t = e.call(this.art, this.art),
					r = t && t.name || e.name || `plugin${this.id}`;
				return (0, i.errorHandle)(!(0, i.has)(this, r), `Cannot add a plugin that already has the same name: ${r}`), (0, i.def)(this, r, {
					value: t
				}), this
			}
		}
	}, {
		"../utils": "h3rH9",
		"./miniProgressBar": "iBx4M",
		"./autoOrientation": "2O9qO",
		"./autoPlayback": "iiOc1",
		"./fastForward": "d9NUE",
		"./lock": "5dnKh",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	iBx4M: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r), r.default = function(e) {
			return e.on("ready", (() => {
				e.layers.add({
					name: "miniProgressBar",
					mounted(t) {
						e.on("destroy", (() => {
							t.style.display = "none"
						})), e.on("video:timeupdate", (() => {
							t.style.width = 100 * e.played + "%"
						})), e.on("setBar", ((e, r) => {
							"played" === e && (t.style.width = 100 * r + "%")
						}))
					}
				})
			})), {
				name: "miniProgressBar"
			}
		}
	}, {
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"2O9qO": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				option: t,
				constructor: r,
				template: {
					$player: i,
					$video: a
				}
			} = e;
			return e.on("fullscreenWeb", (n => {
				if (n) {
					const {
						videoWidth: t,
						videoHeight: n
					} = a, {
						clientWidth: s,
						clientHeight: l
					} = document.documentElement;
					(t > n && s < l || t < n && s > l) && setTimeout((() => {
						(0, o.setStyle)(i, "width", `${l}px`), (0, o.setStyle)(i, "height", `${s}px`), (0, o.setStyle)(i, "transform-origin", "0 0"), (0, o.setStyle)(i, "transform", `rotate(90deg) translate(0, -${s}px)`), (0, o.addClass)(i, "art-auto-orientation"), e.isRotate = !0, e.emit("resize")
					}), r.MOBILE_AUTO_ORIENTATION_TIME)
				} else(0, o.hasClass)(i, "art-auto-orientation") && ((0, o.setStyle)(i, "width", null), (0, o.setStyle)(i, "height", null), (0, o.setStyle)(i, "transform", null), (0, o.setStyle)(i, "transform-origin", null), (0, o.removeClass)(i, "art-auto-orientation"), e.isRotate = !1, e.aspectRatioReset = !0, e.autoSize = t.autoSize, e.notice.show = "", e.emit("resize"))
			})), e.on("fullscreen", (async e => {
				const t = screen.orientation.type;
				if (e) {
					const {
						videoWidth: e,
						videoHeight: r
					} = a, {
						clientWidth: n,
						clientHeight: s
					} = document.documentElement;
					if (e > r && n < s || e < r && n > s) {
						const e = t.startsWith("portrait") ? "landscape" : "portrait";
						await screen.orientation.lock(e), (0, o.addClass)(i, "art-auto-orientation-fullscreen")
					}
				} else(0, o.hasClass)(i, "art-auto-orientation-fullscreen") && (await screen.orientation.lock(t), (0, o.removeClass)(i, "art-auto-orientation-fullscreen"))
			})), {
				name: "autoOrientation",
				get state() {
					return (0, o.hasClass)(i, "art-auto-orientation")
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	iiOc1: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				i18n: t,
				icons: r,
				storage: i,
				constructor: a,
				proxy: n,
				template: {
					$poster: s
				}
			} = e, l = e.layers.add({
				name: "autoPlayback",
				html: '<div class="art-autoPlayback-close"></div><div class="art-autoPlayback-last"></div><div class="art-autoPlayback-jump"></div>'
			}), c = (0, o.query)(".art-autoPlayback-last", l), u = (0, o.query)(".art-autoPlayback-jump", l), p = (0, o.query)(".art-autoPlayback-close", l);
			return e.on("video:timeupdate", (() => {
				const t = i.get("times") || {},
					r = Object.keys(t);
				r.length > a.AUTO_PLAYBACK_MAX && delete t[r[0]], t[e.option.id || e.option.url] = e.currentTime, i.set("times", t)
			})), e.on("ready", (() => {
				const d = (i.get("times") || {})[e.option.id || e.option.url];
				d && d >= a.AUTO_PLAYBACK_MIN && ((0, o.append)(p, r.close), (0, o.setStyle)(l, "display", "flex"), c.innerText = `${t.get("Last Seen")} ${(0,o.secondToTime)(d)}`, u.innerText = t.get("Xem tiếp"), n(p, "click", (() => {
					(0, o.setStyle)(l, "display", "none")
				})), n(u, "click", (() => {
					e.seek = d, e.play(), (0, o.setStyle)(s, "display", "none"), (0, o.setStyle)(l, "display", "none")
				})), e.once("video:timeupdate", (() => {
					setTimeout((() => {
						(0, o.setStyle)(l, "display", "none")
					}), a.AUTO_PLAYBACK_TIMEOUT)
				})))
			})), {
				name: "autoPlayback",
				get times() {
					return i.get("times") || {}
				},
				clear: () => i.del("times"),
				delete(e) {
					const t = i.get("times") || {};
					return delete t[e], i.set("times", t), t
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	d9NUE: [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				constructor: t,
				proxy: r,
				template: {
					$player: i,
					$video: a
				}
			} = e;
			let n = null,
				s = !1,
				l = 1;
			const c = () => {
				clearTimeout(n), s && (s = !1, e.playbackRate = l, (0, o.removeClass)(i, "art-fast-forward"))
			};
			return r(a, "touchstart", (r => {
				1 === r.touches.length && e.playing && !e.isLock && (n = setTimeout((() => {
					s = !0, l = e.playbackRate, e.playbackRate = t.FAST_FORWARD_VALUE, (0, o.addClass)(i, "art-fast-forward")
				}), t.FAST_FORWARD_TIME))
			})), r(document, "touchmove", c), r(document, "touchend", c), {
				name: "fastForward",
				get state() {
					return (0, o.hasClass)(i, "art-fast-forward")
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"5dnKh": [function(e, t, r) {
		e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);
		var o = e("../utils");
		r.default = function(e) {
			const {
				layers: t,
				icons: r,
				template: {
					$player: i
				}
			} = e;
			return t.add({
				name: "lock",
				mounted(t) {
					const i = (0, o.append)(t, r.lock),
						a = (0, o.append)(t, r.unlock);
					(0, o.setStyle)(i, "display", "none"), e.on("lock", (e => {
						e ? ((0, o.setStyle)(i, "display", "inline-flex"), (0, o.setStyle)(a, "display", "none")) : ((0, o.setStyle)(i, "display", "none"), (0, o.setStyle)(a, "display", "inline-flex"))
					}))
				},
				click() {
					(0, o.hasClass)(i, "art-lock") ? ((0, o.removeClass)(i, "art-lock"), this.isLock = !1, e.emit("lock", !1)) : ((0, o.addClass)(i, "art-lock"), this.isLock = !0, e.emit("lock", !0))
				}
			}), {
				name: "lock",
				get state() {
					return (0, o.hasClass)(i, "art-lock")
				}
			}
		}
	}, {
		"../utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}],
	"6M149": [function(e, t, r) {
		var o = e("@parcel/transformer-js/src/esmodule-helpers.js");
		o.defineInteropFlag(r);
		var i = e("./config"),
			a = o.interopDefault(i),
			n = e("./utils");
		r.default = class {
			constructor(e) {
				const {
					option: t,
					proxy: r,
					template: {
						$video: o
					}
				} = e;
				for (let t = 0; t < a.default.events.length; t++) r(o, a.default.events[t], (t => {
					e.emit(`video:${t.type}`, t)
				}));
				Object.keys(t.moreVideoAttr).forEach((e => {
					o[e] = t.moreVideoAttr[e]
				})), o.controls = !0, t.muted && (o.muted = t.muted), t.volume && (o.volume = (0, n.clamp)(t.volume, 0, 1)), t.poster && (o.poster = t.poster), t.autoplay && (o.autoplay = t.autoplay), t.playsInline && (o.playsInline = !0, o["webkit-playsinline"] = !0);
				const i = t.type || (0, n.getExt)(t.url),
					s = t.customType[i];
				i && s ? (s(o, t.url, e), e.emit("customType", i)) : (o.src = t.url, e.emit("url", o.src))
			}
		}
	}, {
		"./config": "9Xmqu",
		"./utils": "h3rH9",
		"@parcel/transformer-js/src/esmodule-helpers.js": "guZOB"
	}]
}, ["abjMI"], "abjMI");