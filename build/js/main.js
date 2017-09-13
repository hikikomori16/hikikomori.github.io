'use strict';

svg4everybody();

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

(function() {
	var t,
		i,
		e,
		s,
		n,
		o,
		a,
		h,
		r,
		l,
		p,
		c,
		u,
		d = [].slice,
		g = {}.hasOwnProperty,
		m = function m(t, i) {
			function e() {
				this.constructor = t;
			}
			for (var s in i) {
				g.call(i, s) && (t[s] = i[s]);
			}
			return e.prototype = i.prototype, t.prototype = new e(), t.__super__ = i.prototype, t;
		};
	! function() {
		var t, i, e, s, n, o, a;
		for (e = 0, n = (a = ["ms", "moz", "webkit", "o"]).length; e < n && (o = a[e], !window.requestAnimationFrame); e++) {
			window.requestAnimationFrame = window[o + "RequestAnimationFrame"], window.cancelAnimationFrame = window[o + "CancelAnimationFrame"] || window[o + "CancelRequestAnimationFrame"];
		}
		t = null, s = 0, i = {}, requestAnimationFrame ? window.cancelAnimationFrame || (t = window.requestAnimationFrame, window.requestAnimationFrame = function(e, n) {
			var o;
			return o = ++s, t(function() {
				if (!i[o]) return e();
			}, n), o;
		}, window.cancelAnimationFrame = function(t) {
			return i[t] = !0;
		}) : (window.requestAnimationFrame = function(t, i) {
			var e, s, n, o;
			return e = new Date().getTime(), o = Math.max(0, 16 - (e - n)), s = window.setTimeout(function() {
				return t(e + o);
			}, o), n = e + o, s;
		}, window.cancelAnimationFrame = function(t) {
			return clearTimeout(t);
		});
	}(), u = function u(t) {
			var i, e;
			for (t -= 3600 * (i = Math.floor(t / 3600)) + 60 * (e = Math.floor((t - 3600 * i) / 60)), t += "", e += ""; e.length < 2;) {
				e = "0" + e;
			}
			for (; t.length < 2;) {
				t = "0" + t;
			}
			return (i = i ? i + ":" : "") + e + ":" + t;
		}, p = function p() {
			var t, i, e;
			return i = 1 <= arguments.length ? d.call(arguments, 0) : [], e = i[0], t = i[1], r(e.toFixed(t));
		}, c = function c(t, i) {
			var e, s, n;
			s = {};
			for (e in t) {
				g.call(t, e) && (n = t[e], s[e] = n);
			}
			for (e in i) {
				g.call(i, e) && (n = i[e], s[e] = n);
			}
			return s;
		}, r = function r(t) {
			var i, e, s, n;
			for (s = (e = (t += "").split("."))[0], n = "", e.length > 1 && (n = "." + e[1]), i = /(\d+)(\d{3})/; i.test(s);) {
				s = s.replace(i, "$1,$2");
			}
			return s + n;
		}, l = function l(t) {
			return "#" === t.charAt(0) ? t.substring(1, 7) : t;
		}, e = function(t) {
			function i() {
				return i.__super__.constructor.apply(this, arguments);
			}
			return m(i, t), i.prototype.displayScale = 1, i.prototype.forceUpdate = !0, i.prototype.setTextField = function(t, i) {
				return this.textField = t instanceof a ? t : new a(t, i);
			}, i.prototype.setMinValue = function(t, i) {
				var e, s, n, o, a;
				if (this.minValue = t, null == i && (i = !0), i) {
					for (this.displayedValue = this.minValue, a = [], s = 0, n = (o = this.gp || []).length; s < n; s++) {
						e = o[s], a.push(e.displayedValue = this.minValue);
					}
					return a;
				}
			}, i.prototype.setOptions = function(t) {
				return null == t && (t = null), this.options = c(this.options, t), this.textField && (this.textField.el.style.fontSize = t.fontSize + "px"), this.options.angle > .5 && (this.options.angle = .5), this.configDisplayScale(), this;
			}, i.prototype.configDisplayScale = function() {
				var t, i, e, s, n;
				return s = this.displayScale, !1 === this.options.highDpiSupport ? delete this.displayScale : (i = window.devicePixelRatio || 1, t = this.ctx.webkitBackingStorePixelRatio || this.ctx.mozBackingStorePixelRatio || this.ctx.msBackingStorePixelRatio || this.ctx.oBackingStorePixelRatio || this.ctx.backingStorePixelRatio || 1, this.displayScale = i / t), this.displayScale !== s && (n = this.canvas.G__width || this.canvas.width, e = this.canvas.G__height || this.canvas.height, this.canvas.width = n * this.displayScale, this.canvas.height = e * this.displayScale, this.canvas.style.width = n + "px", this.canvas.style.height = e + "px", this.canvas.G__width = n, this.canvas.G__height = e), this;
			}, i.prototype.parseValue = function(t) {
				return t = parseFloat(t) || Number(t), isFinite(t) ? t : 0;
			}, i;
		}(h = function() {
			function t(t, i) {
				null == t && (t = !0), this.clear = null == i || i, t && AnimationUpdater.add(this);
			}
			return t.prototype.animationSpeed = 32, t.prototype.update = function(t) {
				var i;
				return null == t && (t = !1), !(!t && this.displayedValue === this.value) && (this.ctx && this.clear && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), i = this.value - this.displayedValue, Math.abs(i / this.animationSpeed) <= .001 ? this.displayedValue = this.value : this.displayedValue = this.displayedValue + i / this.animationSpeed, this.render(), !0);
			}, t;
		}()), a = function() {
			function t(t, i) {
				this.el = t, this.fractionDigits = i;
			}
			return t.prototype.render = function(t) {
				return this.el.innerHTML = p(t.displayedValue, this.fractionDigits);
			}, t;
		}(), t = function(t) {
			function i(t, i) {
				this.elem = t, this.text = null != i && i, this.value = 1 * this.elem.innerHTML, this.text && (this.value = 0);
			}
			return m(i, t), i.prototype.displayedValue = 0, i.prototype.value = 0, i.prototype.setVal = function(t) {
				return this.value = 1 * t;
			}, i.prototype.render = function() {
				var t;
				return t = this.text ? u(this.displayedValue.toFixed(0)) : r(p(this.displayedValue)), this.elem.innerHTML = t;
			}, i;
		}(h), o = function(t) {
			function i(t) {
				this.gauge = t, this.ctx = this.gauge.ctx, this.canvas = this.gauge.canvas, i.__super__.constructor.call(this, !1, !1), this.setOptions();
			}
			return m(i, t), i.prototype.displayedValue = 0, i.prototype.value = 0, i.prototype.options = {
				strokeWidth: .035,
				length: .1,
				color: "#000000",
				iconPath: null,
				iconScale: 1,
				iconAngle: 0
			}, i.prototype.img = null, i.prototype.setOptions = function(t) {
				if (null == t && (t = null), this.options = c(this.options, t), this.length = 2 * this.gauge.radius * this.gauge.options.radiusScale * this.options.length, this.strokeWidth = this.canvas.height * this.options.strokeWidth, this.maxValue = this.gauge.maxValue, this.minValue = this.gauge.minValue, this.animationSpeed = this.gauge.animationSpeed, this.options.angle = this.gauge.options.angle, this.options.iconPath) return this.img = new Image(), this.img.src = this.options.iconPath;
			}, i.prototype.render = function() {
				var t, i, e, s, n, o, a, h, r;
				if (t = this.gauge.getAngle.call(this, this.displayedValue), h = Math.round(this.length * Math.cos(t)), r = Math.round(this.length * Math.sin(t)), o = Math.round(this.strokeWidth * Math.cos(t - Math.PI / 2)), a = Math.round(this.strokeWidth * Math.sin(t - Math.PI / 2)), i = Math.round(this.strokeWidth * Math.cos(t + Math.PI / 2)), e = Math.round(this.strokeWidth * Math.sin(t + Math.PI / 2)), this.ctx.fillStyle = this.options.color, this.ctx.beginPath(), this.ctx.arc(0, 0, this.strokeWidth, 0, 2 * Math.PI, !0), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(o, a), this.ctx.lineTo(h, r), this.ctx.lineTo(i, e), this.ctx.fill(), this.img) return s = Math.round(this.img.width * this.options.iconScale), n = Math.round(this.img.height * this.options.iconScale), this.ctx.save(), this.ctx.translate(h, r), this.ctx.rotate(t + Math.PI / 180 * (90 + this.options.iconAngle)), this.ctx.drawImage(this.img, -s / 2, -n / 2, s, n), this.ctx.restore();
			}, i;
		}(h),
		function() {
			function t(t) {
				this.elem = t;
			}
			t.prototype.updateValues = function(t) {
				return this.value = t[0], this.maxValue = t[1], this.avgValue = t[2], this.render();
			}, t.prototype.render = function() {
				var t, i;
				return this.textField && this.textField.text(p(this.value)), 0 === this.maxValue && (this.maxValue = 2 * this.avgValue), i = this.value / this.maxValue * 100, t = this.avgValue / this.maxValue * 100, $(".bar-value", this.elem).css({
					width: i + "%"
				}), $(".typical-value", this.elem).css({
					width: t + "%"
				});
			};
		}(), n = function(t) {
			function i(t) {
				var e, s;
				this.canvas = t, i.__super__.constructor.call(this), this.percentColors = null, "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), e = this.canvas.clientHeight, s = this.canvas.clientWidth, this.canvas.height = e, this.canvas.width = s, this.gp = [new o(this)], this.setOptions(), this.render();
			}
			return m(i, t), i.prototype.elem = null, i.prototype.value = [20], i.prototype.maxValue = 80, i.prototype.minValue = 0, i.prototype.displayedAngle = 0, i.prototype.displayedValue = 0, i.prototype.lineWidth = 40, i.prototype.paddingTop = .1, i.prototype.paddingBottom = .1, i.prototype.percentColors = null, i.prototype.options = {
				colorStart: "#6fadcf",
				colorStop: void 0,
				gradientType: 0,
				strokeColor: "#e0e0e0",
				pointer: {
					length: .8,
					strokeWidth: .035,
					iconScale: 1
				},
				angle: .15,
				lineWidth: .44,
				radiusScale: 1,
				fontSize: 40,
				limitMax: !1,
				limitMin: !1
			}, i.prototype.setOptions = function(t) {
				var e, s, n, o, a;
				for (null == t && (t = null), i.__super__.setOptions.call(this, t), this.configPercentColors(), this.extraPadding = 0, this.options.angle < 0 && (o = Math.PI * (1 + this.options.angle), this.extraPadding = Math.sin(o)), this.availableHeight = this.canvas.height * (1 - this.paddingTop - this.paddingBottom), this.lineWidth = this.availableHeight * this.options.lineWidth, this.radius = (this.availableHeight - this.lineWidth / 2) / (1 + this.extraPadding), this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), s = 0, n = (a = this.gp).length; s < n; s++) {
					(e = a[s]).setOptions(this.options.pointer), e.render();
				}
				return this;
			}, i.prototype.configPercentColors = function() {
				var t, i, e, s, n, o, a;
				if (this.percentColors = null, void 0 !== this.options.percentColors) {
					for (this.percentColors = new Array(), o = [], e = s = 0, n = this.options.percentColors.length - 1; 0 <= n ? s <= n : s >= n; e = 0 <= n ? ++s : --s) {
						a = parseInt(l(this.options.percentColors[e][1]).substring(0, 2), 16), i = parseInt(l(this.options.percentColors[e][1]).substring(2, 4), 16), t = parseInt(l(this.options.percentColors[e][1]).substring(4, 6), 16), o.push(this.percentColors[e] = {
							pct: this.options.percentColors[e][0],
							color: {
								r: a,
								g: i,
								b: t
							}
						});
					}
					return o;
				}
			}, i.prototype.set = function(t) {
				var i, e, s, n, a, h, r, l, p;
				for (t instanceof Array || (t = [t]), e = s = 0, r = t.length - 1; 0 <= r ? s <= r : s >= r; e = 0 <= r ? ++s : --s) {
					t[e] = this.parseValue(t[e]);
				}
				if (t.length > this.gp.length)
					for (e = n = 0, l = t.length - this.gp.length; 0 <= l ? n < l : n > l; e = 0 <= l ? ++n : --n) {
						(i = new o(this)).setOptions(this.options.pointer), this.gp.push(i);
					} else t.length < this.gp.length && (this.gp = this.gp.slice(this.gp.length - t.length));
				for (e = 0, a = 0, h = t.length; a < h; a++) {
					(p = t[a]) > this.maxValue ? this.options.limitMax ? p = this.maxValue : this.maxValue = p + 1 : p < this.minValue && (this.options.limitMin ? p = this.minValue : this.minValue = p - 1), this.gp[e].value = p, this.gp[e++].setOptions({
						minValue: this.minValue,
						maxValue: this.maxValue,
						angle: this.options.angle
					});
				}
				return this.value = Math.max(Math.min(t[t.length - 1], this.maxValue), this.minValue), AnimationUpdater.run(this.forceUpdate), this.forceUpdate = !1;
			}, i.prototype.getAngle = function(t) {
				return (1 + this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (1 - 2 * this.options.angle) * Math.PI;
			}, i.prototype.getColorForPercentage = function(t, i) {
				var e, s, n, o, a, h, r;
				if (0 === t) e = this.percentColors[0].color;
				else
					for (e = this.percentColors[this.percentColors.length - 1].color, n = o = 0, h = this.percentColors.length - 1; 0 <= h ? o <= h : o >= h; n = 0 <= h ? ++o : --o) {
						if (t <= this.percentColors[n].pct) {
							!0 === i ? (r = this.percentColors[n - 1] || this.percentColors[0], s = this.percentColors[n], a = (t - r.pct) / (s.pct - r.pct), e = {
								r: Math.floor(r.color.r * (1 - a) + s.color.r * a),
								g: Math.floor(r.color.g * (1 - a) + s.color.g * a),
								b: Math.floor(r.color.b * (1 - a) + s.color.b * a)
							}) : e = this.percentColors[n].color;
							break;
						}
					}
				return "rgb(" + [e.r, e.g, e.b].join(",") + ")";
			}, i.prototype.getColorForValue = function(t, i) {
				var e;
				return e = (t - this.minValue) / (this.maxValue - this.minValue), this.getColorForPercentage(e, i);
			}, i.prototype.renderStaticLabels = function(t, i, e, s) {
				var n, o, a, h, r, l, c, u, d, g;
				for (this.ctx.save(), this.ctx.translate(i, e), l = /\d+\.?\d?/, r = (n = t.font || "10px Times").match(l)[0], u = n.slice(r.length), o = parseFloat(r) * this.displayScale, this.ctx.font = o + u, this.ctx.fillStyle = t.color || "#000000", this.ctx.textBaseline = "bottom", this.ctx.textAlign = "center", a = 0, h = (c = t.labels).length; a < h; a++) {
					g = c[a], (!this.options.limitMin || g >= this.minValue) && (!this.options.limitMax || g <= this.maxValue) && (d = this.getAngle(g) - 3 * Math.PI / 2, this.ctx.rotate(d), this.ctx.fillText(p(g, t.fractionDigits), 0, -s - this.lineWidth / 2), this.ctx.rotate(-d));
				}
				return this.ctx.restore();
			}, i.prototype.render = function() {
				var t, i, e, s, n, o, a, h, r, l, p, c, u, d;
				if (u = this.canvas.width / 2, e = this.canvas.height * this.paddingTop + this.availableHeight - (this.radius + this.lineWidth / 2) * this.extraPadding, t = this.getAngle(this.displayedValue), this.textField && this.textField.render(this), this.ctx.lineCap = "butt", l = this.radius * this.options.radiusScale, this.options.staticLabels && this.renderStaticLabels(this.options.staticLabels, u, e, l), this.options.staticZones) {
					for (this.ctx.save(), this.ctx.translate(u, e), this.ctx.lineWidth = this.lineWidth, s = 0, o = (p = this.options.staticZones).length; s < o; s++) {
						r = (d = p[s]).min, this.options.limitMin && r < this.minValue && (r = this.minValue), h = d.max, this.options.limitMax && h > this.maxValue && (h = this.maxValue), this.ctx.strokeStyle = d.strokeStyle, this.ctx.beginPath(), this.ctx.arc(0, 0, l, this.getAngle(r), this.getAngle(h), !1), this.ctx.stroke();
					}
					this.ctx.restore();
				} else void 0 !== this.options.customFillStyle ? i = this.options.customFillStyle(this) : null !== this.percentColors ? i = this.getColorForValue(this.displayedValue, this.options.generateGradient) : void 0 !== this.options.colorStop ? ((i = 0 === this.options.gradientType ? this.ctx.createRadialGradient(u, e, 9, u, e, 70) : this.ctx.createLinearGradient(0, 0, u, 0)).addColorStop(0, this.options.colorStart), i.addColorStop(1, this.options.colorStop)) : i = this.options.colorStart, this.ctx.strokeStyle = i, this.ctx.beginPath(), this.ctx.arc(u, e, l, (1 + this.options.angle) * Math.PI, t, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.stroke(), this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(u, e, l, t, (2 - this.options.angle) * Math.PI, !1), this.ctx.stroke();
				for (this.ctx.translate(u, e), n = 0, a = (c = this.gp).length; n < a; n++) {
					c[n].update(!0);
				}
				return this.ctx.translate(-u, -e);
			}, i;
		}(e), i = function(t) {
			function i(t) {
				this.canvas = t, i.__super__.constructor.call(this), "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), this.setOptions(), this.render();
			}
			return m(i, t), i.prototype.lineWidth = 15, i.prototype.displayedValue = 0, i.prototype.value = 33, i.prototype.maxValue = 80, i.prototype.minValue = 0, i.prototype.options = {
				lineWidth: .1,
				colorStart: "#6f6ea0",
				colorStop: "#c0c0db",
				strokeColor: "#eeeeee",
				shadowColor: "#d5d5d5",
				angle: .35,
				radiusScale: 1
			}, i.prototype.getAngle = function(t) {
				return (1 - this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (2 + this.options.angle - (1 - this.options.angle)) * Math.PI;
			}, i.prototype.setOptions = function(t) {
				return null == t && (t = null), i.__super__.setOptions.call(this, t), this.lineWidth = this.canvas.height * this.options.lineWidth, this.radius = this.options.radiusScale * (this.canvas.height / 2 - this.lineWidth / 2), this;
			}, i.prototype.set = function(t) {
				return this.value = this.parseValue(t), this.value > this.maxValue ? this.options.limitMax ? this.value = this.maxValue : this.maxValue = this.value : this.value < this.minValue && (this.options.limitMin ? this.value = this.minValue : this.minValue = this.value), AnimationUpdater.run(this.forceUpdate), this.forceUpdate = !1;
			}, i.prototype.render = function() {
				var t, i, e, s;
				return t = this.getAngle(this.displayedValue), s = this.canvas.width / 2, e = this.canvas.height / 2, this.textField && this.textField.render(this), (i = this.ctx.createRadialGradient(s, e, 39, s, e, 70)).addColorStop(0, this.options.colorStart), i.addColorStop(1, this.options.colorStop), this.radius - this.lineWidth / 2, this.radius + this.lineWidth / 2, this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(s, e, this.radius, (1 - this.options.angle) * Math.PI, (2 + this.options.angle) * Math.PI, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.lineCap = "round", this.ctx.stroke(), this.ctx.strokeStyle = i, this.ctx.beginPath(), this.ctx.arc(s, e, this.radius, (1 - this.options.angle) * Math.PI, t, !1), this.ctx.stroke();
			}, i;
		}(e), s = function(t) {
			function i() {
				return i.__super__.constructor.apply(this, arguments);
			}
			return m(i, t), i.prototype.strokeGradient = function(t, i, e, s) {
				var n;
				return (n = this.ctx.createRadialGradient(t, i, e, t, i, s)).addColorStop(0, this.options.shadowColor), n.addColorStop(.12, this.options._orgStrokeColor), n.addColorStop(.88, this.options._orgStrokeColor), n.addColorStop(1, this.options.shadowColor), n;
			}, i.prototype.setOptions = function(t) {
				var e, s, n, o;
				return null == t && (t = null), i.__super__.setOptions.call(this, t), o = this.canvas.width / 2, e = this.canvas.height / 2, s = this.radius - this.lineWidth / 2, n = this.radius + this.lineWidth / 2, this.options._orgStrokeColor = this.options.strokeColor, this.options.strokeColor = this.strokeGradient(o, e, s, n), this;
			}, i;
		}(i), window.AnimationUpdater = {
			elements: [],
			animId: null,
			addAll: function addAll(t) {
				var i, e, s, n;
				for (n = [], e = 0, s = t.length; e < s; e++) {
					i = t[e], n.push(AnimationUpdater.elements.push(i));
				}
				return n;
			},
			add: function add(t) {
				return AnimationUpdater.elements.push(t);
			},
			run: function run(t) {
				var i, e, s, n;
				if (null == t && (t = !1), isFinite(parseFloat(t)) || !0 === t) {
					for (i = !0, e = 0, s = (n = AnimationUpdater.elements).length; e < s; e++) {
						n[e].update(!0 === t) && (i = !1);
					}
					return AnimationUpdater.animId = i ? null : requestAnimationFrame(AnimationUpdater.run);
				}
				if (!1 === t) return !0 === AnimationUpdater.animId && cancelAnimationFrame(AnimationUpdater.animId), AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run);
			}
		}, "function" == typeof window.define && null != window.define.amd ? define(function() {
			return {
				Gauge: n,
				Donut: s,
				BaseDonut: i,
				TextRenderer: a
			};
		}) : "undefined" != typeof module && null != module.exports ? module.exports = {
			Gauge: n,
			Donut: s,
			BaseDonut: i,
			TextRenderer: a
		} : (window.Gauge = n, window.Donut = s, window.BaseDonut = i, window.TextRenderer = a);
}).call(undefined);

var opts = {
	angle: 0, // The span of the gauge arc
	lineWidth: 0.43, // The line thickness
	radiusScale: 1, // Relative radius
	pointer: {
		length: 0.27, // // Relative to gauge radius
		strokeWidth: 0.055, // The thickness
		color: '#3e3d40' // Fill color
	},
	limitMax: false, // If false, max value increases automatically if value > maxValue
	limitMin: false, // If true, the min value of the gauge will be fixed
	colorStart: '#6FADCF', // Colors
	colorStop: '#8FC0DA', // just experiment with them
	strokeColor: '#E0E0E0', // to see which ones work best for you
	staticZones: [{
		strokeStyle: "#ffc815",
		min: 0,
		max: 1450
	}, {
		strokeStyle: "transparent",
		min: 1450,
		max: 1600
	}, {
		strokeStyle: "#a3cd3b",
		min: 1600,
		max: 3400
	}, {
		strokeStyle: "transparent",
		min: 3400,
		max: 3550
	}, {
		strokeStyle: "#0093d7",
		min: 3550,
		max: 5000
	}],
	generateGradient: true,
	highDpiSupport: true
};
var target = document.getElementById('js-level-gauge'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.setTextField(document.getElementById('js-level-value'));
gauge.maxValue = 5000; // set max gauge value
gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 50; // set animation speed (32 is default value)
gauge.set(2000); // set actual value