;
window.Modernizr = function (a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) {
            return v.call(a, b)
        } : w = function (a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function () {
                    if (this instanceof e) {
                        var a = function () {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function () {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function (a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function (a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function () {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function () {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function () {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function (a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function (a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("http://www.domik.kwst.net/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function () {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function (a, b) {
            z[a] = b
        }, B.addFilter = function (a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function () {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

function init() {
    if (!document.body) return;
    var e = document.body;
    var t = document.documentElement;
    var n = window.innerHeight;
    var r = e.scrollHeight;
    root = document.compatMode.indexOf("CSS") >= 0 ? t : e;
    activeElement = e;
    initdone = true;
    if (top != self) {
        frame = true
    } else if (r > n && (e.offsetHeight <= n || t.offsetHeight <= n)) {
        var i = false;
        var s = function () {
            if (!i && t.scrollHeight != document.height) {
                i = true;
                setTimeout(function () {
                    t.style.height = document.height + "px";
                    i = false
                }, 500)
            }
        };
        t.style.height = "";
        setTimeout(s, 10);
        addEvent("DOMNodeInserted", s);
        addEvent("DOMNodeRemoved", s);
        if (root.offsetHeight <= n) {
            var o = document.createElement("div");
            o.style.clear = "both";
            e.appendChild(o)
        }
    }
    if (document.URL.indexOf("mail.google.com") > -1) {
        var u = document.createElement("style");
        u.innerHTML = ".iu { visibility: hidden }";
        (document.getElementsByTagName("head")[0] || t).appendChild(u)
    }
    if (!fixedback && !disabled) {
        e.style.backgroundAttachment = "scroll";
        t.style.backgroundAttachment = "scroll"
    }
}

function scrollArray(e, t, n, r) {
    r || (r = 1e3);
    directionCheck(t, n);
    if (acceleration) {
        var i = +(new Date);
        var s = i - lastScroll;
        if (s < accelDelta) {
            var o = (1 + 30 / s) / 2;
            if (o > 1) {
                o = Math.min(o, accelMax);
                t *= o;
                n *= o
            }
        }
        lastScroll = +(new Date)
    }
    que.push({
        x: t,
        y: n,
        lastX: t < 0 ? .99 : -.99,
        lastY: n < 0 ? .99 : -.99,
        start: +(new Date)
    });
    if (pending) {
        return
    }
    var u = e === document.body;
    var a = function () {
        var i = +(new Date);
        var s = 0;
        var o = 0;
        for (var f = 0; f < que.length; f++) {
            var l = que[f];
            var c = i - l.start;
            var h = c >= animtime;
            var p = h ? 1 : c / animtime;
            if (pulseAlgorithm) {
                p = pulse(p)
            }
            var d = l.x * p - l.lastX >> 0;
            var v = l.y * p - l.lastY >> 0;
            s += d;
            o += v;
            l.lastX += d;
            l.lastY += v;
            if (h) {
                que.splice(f, 1);
                f--
            }
        }
        if (u) {
            window.scrollBy(s, o)
        } else {
            if (s) e.scrollLeft += s;
            if (o) e.scrollTop += o
        }
        if (!t && !n) {
            que = []
        }
        if (que.length) {
            requestFrame(a, e, r / framerate + 1)
        } else {
            pending = false
        }
    };
    requestFrame(a, e, 0);
    pending = true
}

function wheel(e) {
    if (!initdone) {
        init()
    }
    var t = e.target;
    var n = overflowingAncestor(t);
    if (!n || e.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(t, "embed") && /\.pdf/i.test(t.src)) {
        return true
    }
    var r = e.wheelDeltaX || 0;
    var i = e.wheelDeltaY || 0;
    if (!r && !i) {
        i = e.wheelDelta || 0
    }
    if (Math.abs(r) > 1.2) {
        r *= stepsize / 120
    }
    if (Math.abs(i) > 1.2) {
        i *= stepsize / 120
    }
    scrollArray(n, -r, -i);
    e.preventDefault()
}

function keydown(e) {
    var t = e.target;
    var n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== key.spacebar;
    if (/input|textarea|select|embed/i.test(t.nodeName) || t.isContentEditable || e.defaultPrevented || n) {
        return true
    }
    if (isNodeName(t, "button") && e.keyCode === key.spacebar) {
        return true
    }
    var r, i = 0,
        s = 0;
    var o = overflowingAncestor(activeElement);
    var u = o.clientHeight;
    if (o == document.body) {
        u = window.innerHeight
    }
    switch (e.keyCode) {
        case key.up:
            s = -arrowscroll;
            break;
        case key.down:
            s = arrowscroll;
            break;
        case key.spacebar:
            r = e.shiftKey ? 1 : -1;
            s = -r * u * .9;
            break;
        case key.pageup:
            s = -u * .9;
            break;
        case key.pagedown:
            s = u * .9;
            break;
        case key.home:
            s = -o.scrollTop;
            break;
        case key.end:
            var a = o.scrollHeight - o.scrollTop - u;
            s = a > 0 ? a + 10 : 0;
            break;
        case key.left:
            i = -arrowscroll;
            break;
        case key.right:
            i = arrowscroll;
            break;
        default:
            return true
    }
    scrollArray(o, i, s);
    e.preventDefault()
}

function mousedown(e) {
    activeElement = e.target
}

function setCache(e, t) {
    for (var n = e.length; n--;) cache[uniqueID(e[n])] = t;
    return t
}

function overflowingAncestor(e) {
    var t = [];
    var n = root.scrollHeight;
    do {
        var r = cache[uniqueID(e)];
        if (r) {
            return setCache(t, r)
        }
        t.push(e);
        if (n === e.scrollHeight) {
            if (!frame || root.clientHeight + 10 < n) {
                return setCache(t, document.body)
            }
        } else if (e.clientHeight + 10 < e.scrollHeight) {
            overflow = getComputedStyle(e, "").getPropertyValue("overflow-y");
            if (overflow === "scroll" || overflow === "auto") {
                return setCache(t, e)
            }
        }
    } while (e = e.parentNode)
}

function addEvent(e, t, n) {
    window.addEventListener(e, t, n || false)
}

function removeEvent(e, t, n) {
    window.removeEventListener(e, t, n || false)
}

function isNodeName(e, t) {
    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
}

function directionCheck(e, t) {
    e = e > 0 ? 1 : -1;
    t = t > 0 ? 1 : -1;
    if (direction.x !== e || direction.y !== t) {
        direction.x = e;
        direction.y = t;
        que = [];
        lastScroll = 0
    }
}

function pulse_(e) {
    var t, n, r;
    e = e * pulseScale;
    if (e < 1) {
        t = e - (1 - Math.exp(-e))
    } else {
        n = Math.exp(-1);
        e -= 1;
        r = 1 - Math.exp(-e);
        t = n + r * (1 - n)
    }
    return t * pulseNormalize
}

function pulse(e) {
    if (e >= 1) return 1;
    if (e <= 0) return 0;
    if (pulseNormalize == 1) {
        pulseNormalize /= pulse_(1)
    }
    return pulse_(e)
}
var framerate = 250;
var animtime = 1200;
var stepsize = 130;
var pulseAlgorithm = true;
var pulseScale = 8;
var pulseNormalize = 1;
var acceleration = true;
var accelDelta = 10;
var accelMax = 1;
var keyboardsupport = true;
var disableKeyboard = false;
var arrowscroll = 50;
var exclude = "";
var disabled = false;
var frame = false;
var direction = {
    x: 0,
    y: 0
};
var initdone = false;
var fixedback = true;
var root = document.documentElement;
var activeElement;
var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
};
var que = [];
var pending = false;
var lastScroll = +(new Date);
var cache = {};
setInterval(function () {
    cache = {}
}, 10 * 1e3);
var uniqueID = function () {
    var e = 0;
    return function (t) {
        return t.uniqueID || (t.uniqueID = e++)
    }
}();
var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60)
    }
}();
addEvent("mousedown", mousedown);
addEvent("mousewheel", wheel);
addEvent("load", init);


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function (a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function () {};
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {};
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function (a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function (a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function () {
                            var a = d ? function (a) {
                                return d(a, null)
                            } : function (a) {
                                return a.currentStyle
                            };
                            return function (b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function (a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function (a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function (a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function () {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function (a, b, c) {
        var d = {};
        d.extend = function (a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function (a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function (a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function (a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
            return a.indexOf(b)
        } : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function (a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
            return a instanceof HTMLElement
        } : function (a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function () {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function (a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function (a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function (a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function (a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function () {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function () {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function (a) {
            return a.replace(/(.)([A-Z])/g, function (a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function (c, e) {
            b(function () {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function (a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function (a) {
                return i(a, null)
            } : function (a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function () {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function () {
            this.size = c(this.element)
        }, g.prototype.css = function (a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function () {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function () {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function (a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function (a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function (a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function (a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function (a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function (a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function (a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function (a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function () {
            this.css(t)
        }, g.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function () {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function () {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function (a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function () {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
            e.extend(this.options, a)
        }, g.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function (a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function (a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function () {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
            this.getSize()
        }, g.prototype.getSize = function () {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function (a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function (a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function (a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function (a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function (a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function () {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function (a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function (a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function (a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function (a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function (a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function (a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function (a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function () {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function (a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function () {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function () {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function () {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function () {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function (a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function (a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function (a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function (a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function (a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function (a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function (a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function (a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function () {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function (a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function (a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function (a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function () {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function () {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function (a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function () {
            function a(a) {
                return function () {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function () {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function (a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function () {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function (a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function (a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function () {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function (a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function (a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function () {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function () {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function (a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.maxY
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function (a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function () {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function () {
            return {
                height: this.y
            }
        }, b
    }),
    function (a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function (a, b, c, d, e, f, g) {
        function h(a, b) {
            return function (c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function (a) {
                return a.trim()
            } : function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function (a) {
                return a.textContent
            } : function (a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function () {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function () {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function (a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function () {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function (a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function () {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function () {
                b = !0, a()
            }), this.once("hideComplete", function () {
                c = !0, a()
            }), this.once("revealComplete", function () {
                d = !0, a()
            })
        }, m.prototype._filter = function (a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function (a) {
            return i && this.options.isJQueryFiltering ? function (b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function (b) {
                return a(b.element)
            } : function (b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function (a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function () {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function (a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function () {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function (a) {
                    return a && h(g(a))
                } : function (a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function (b) {
                    return b.getAttribute(a)
                } : function (a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function (a) {
                return parseInt(a, 10)
            },
            parseFloat: function (a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function () {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function () {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function () {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function (a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function (a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function (a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function (a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function (a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function () {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function (a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function () {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });

(function () {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function () {};
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function (e, n, i) {
            e[n + i] = i.handleEvent ? function () {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function () {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function () {};
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function (e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function () {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function (e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function () {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function (e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function () {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function () {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function (e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function () {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function (e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function () {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function (e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function (e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function (e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function (e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });


(function (e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function () {},
        b = !!window.jQuery,
        I = e(window),
        x = function (e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function (t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function (n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function () {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function () {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function (n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function () {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function (n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function (t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function (n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function () {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(M), x(l + "." + M, function () {
                    B()
                })
            },
            getInline: function (n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function () {
            F && i.removeClass(F)
        },
        A = function () {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function (n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function (i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function () {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function () {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function () {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        j && clearInterval(j), j = setInterval(function () {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function () {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function () {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                                r.css(t._getOffset(!0)), o = setTimeout(function () {
                                    d(), setTimeout(function () {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function () {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function (n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function (e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(Z), x("BeforeChange", function (e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function () {
                    D()
                })
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function (e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function (e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function () {
                            t.prev()
                        }), a[s](function () {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function () {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function () {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), x("ElementParse." + U, function (t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function () {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function () {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function (o) {
                return e(this).each(function () {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function (e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function (e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function () {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function () {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
"function" !== typeof Object.create && (Object.create = function (f) {
    function g() {}
    g.prototype = f;
    return new g
});

(function (f, g, k) {
    var l = {
        init: function (a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function () {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function () {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function () {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function () {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function () {
            var a = this;
            g.setTimeout(function () {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function () {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function () {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function () {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function () {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function (a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function () {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function () {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function () {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function () {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function (c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function () {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function () {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function () {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function () {
            return 0
        },
        loops: function () {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function () {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function () {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function () {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function () {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function () {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function () {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function () {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function () {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        },
        next: function (a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function (a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function (a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function (a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function () {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function () {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function () {
            "stop" !== this.apStatus && this.play()
        },
        play: function () {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function () {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function (a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function (a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function (a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function (a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function (a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function (a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function () {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function () {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function () {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function () {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function (a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function () {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function () {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function () {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function (d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function () {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function () {
            var a = this;
            a.$elem.on("owl.next", function () {
                a.next()
            });
            a.$elem.on("owl.prev", function () {
                a.prev()
            });
            a.$elem.on("owl.play", function (b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function () {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function (b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function (b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function () {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
                a.stop()
            }), a.$elem.on("mouseout", function () {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function () {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function (a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function () {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function (a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function () {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function (a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function () {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function (a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function () {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function (a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function (a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function (a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function (a) {
        return this.each(function () {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
! function (a) {
    a.fn.gMap = function (b, c) {
        switch (b) {
            case "addMarker":
                return a(this).trigger("gMap.addMarker", [c.latitude, c.longitude, c.content, c.icon, c.popup]);
            case "centerAt":
                return a(this).trigger("gMap.centerAt", [c.latitude, c.longitude, c.zoom]);
            case "clearMarkers":
                return a(this).trigger("gMap.clearMarkers")
        }
        var d = a.extend({}, a.fn.gMap.defaults, b);
        return this.each(function () {
            var b = new google.maps.Map(this);
            a(this).data("gMap.reference", b);
            var c = new google.maps.Geocoder;
            d.address ? c.geocode({
                address: d.address
            }, function (a) {
                a && a.length && b.setCenter(a[0].geometry.location)
            }) : d.latitude && d.longitude ? b.setCenter(new google.maps.LatLng(d.latitude, d.longitude)) : a.isArray(d.markers) && d.markers.length > 0 ? d.markers[0].address ? c.geocode({
                address: d.markers[0].address
            }, function (a) {
                a && a.length > 0 && b.setCenter(a[0].geometry.location)
            }) : b.setCenter(new google.maps.LatLng(d.markers[0].latitude, d.markers[0].longitude)) : b.setCenter(new google.maps.LatLng(34.885931, 9.84375)), b.setZoom(d.zoom), b.setMapTypeId(google.maps.MapTypeId[d.maptype]);
            var e = {
                scrollwheel: d.scrollwheel,
                disableDoubleClickZoom: !d.doubleclickzoom
            };
            d.controls === !1 ? a.extend(e, {
                disableDefaultUI: !0
            }) : 0 !== d.controls.length && a.extend(e, d.controls, {
                disableDefaultUI: !0
            }), b.setOptions(e);
            var f, g, h = new google.maps.Marker;
            f = new google.maps.MarkerImage(d.icon.image), f.size = new google.maps.Size(d.icon.iconsize[0], d.icon.iconsize[1]), f.anchor = new google.maps.Point(d.icon.iconanchor[0], d.icon.iconanchor[1]), h.setIcon(f), d.icon.shadow && (g = new google.maps.MarkerImage(d.icon.shadow), g.size = new google.maps.Size(d.icon.shadowsize[0], d.icon.shadowsize[1]), g.anchor = new google.maps.Point(d.icon.shadowanchor[0], d.icon.shadowanchor[1]), h.setShadow(g)), a(this).bind("gMap.centerAt", function (a, c, d, e) {
                e && b.setZoom(e), b.panTo(new google.maps.LatLng(parseFloat(c), parseFloat(d)))
            });
            var i = [];
            a(this).bind("gMap.clearMarkers", function () {
                for (; i[0];) i.pop().setMap(null)
            });
            var j;
            a(this).bind("gMap.addMarker", function (a, c, e, f, g, k) {
                var l, m, n = new google.maps.LatLng(parseFloat(c), parseFloat(e)),
                    o = new google.maps.Marker({
                        position: n
                    });
                if (g ? (l = new google.maps.MarkerImage(g.image), l.size = new google.maps.Size(g.iconsize[0], g.iconsize[1]), l.anchor = new google.maps.Point(g.iconanchor[0], g.iconanchor[1]), o.setIcon(l), g.shadow && (m = new google.maps.MarkerImage(g.shadow), m.size = new google.maps.Size(g.shadowsize[0], g.shadowsize[1]), m.anchor = new google.maps.Point(g.shadowanchor[0], g.shadowanchor[1]), h.setShadow(m))) : (o.setIcon(h.getIcon()), o.setShadow(h.getShadow())), f) {
                    "_latlng" === f && (f = c + ", " + e);
                    var p = new google.maps.InfoWindow({
                        content: d.html_prepend + f + d.html_append
                    });
                    google.maps.event.addListener(o, "click", function () {
                        j && j.close(), p.open(b, o), j = p
                    }), k && google.maps.event.addListenerOnce(b, "tilesloaded", function () {
                        p.open(b, o)
                    })
                }
                o.setMap(b), i.push(o)
            });
            for (var k, l = this, m = function (b) {
                    return function (c) {
                        c && c.length > 0 && a(l).trigger("gMap.addMarker", [c[0].geometry.location.lat(), c[0].geometry.location.lng(), b.html, b.icon, b.popup])
                    }
                }, n = 0; n < d.markers.length; n++) k = d.markers[n], k.address ? ("_address" === k.html && (k.html = k.address), c.geocode({
                address: k.address
            }, m(k))) : a(this).trigger("gMap.addMarker", [k.latitude, k.longitude, k.html, k.icon, k.popup])
        })
    }, a.fn.gMap.defaults = {
        address: "",
        latitude: 0,
        longitude: 0,
        zoom: 1,
        markers: [],
        controls: [],
        scrollwheel: !1,
        doubleclickzoom: !0,
        maptype: "ROADMAP",
        html_prepend: '<div class="gmap_marker">',
        html_append: "</div>",
        icon: {
            image: "http://www.google.com/mapfiles/marker.png",
            shadow: "http://www.google.com/mapfiles/shadow50.png",
            iconsize: [20, 34],
            shadowsize: [37, 34],
            iconanchor: [9, 34],
            shadowanchor: [6, 34]
        }
    }
}(jQuery);;
(function ($) {
    var eventNamespace = 'waitForImages';
    $.waitForImages = {
        hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
        hasImageAttributes: ['srcset']
    };
    $.expr[':'].uncached = function (obj) {
        if (!$(obj).is('img[src][src!=""]')) {
            return false
        }
        var img = new Image();
        img.src = obj.src;
        return !img.complete
    };
    $.fn.waitForImages = function () {
        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();
        var finishedCallback;
        var eachCallback;
        var waitForAll;
        if ($.isPlainObject(arguments[0])) {
            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished
        } else {
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0]
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2]
            }
        }
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;
        waitForAll = !!waitForAll;
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }
        this.each(function () {
            var obj = $(this);
            var allImgs = [];
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (waitForAll) {
                obj.find('*').addBack().each(function () {
                    var element = $(this);
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        })
                    }
                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;
                        if (!propertyValue) {
                            return true
                        }
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            })
                        }
                    });
                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;
                        if (!attributeValue) {
                            return true
                        }
                        attributeValues = attributeValue.split(',');
                        $.each(attributeValues, function (i, value) {
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            })
                        })
                    })
                })
            } else {
                obj.find('img:uncached').each(function () {
                    allImgs.push({
                        src: this.src,
                        element: this
                    })
                })
            }
            allImgsLength = allImgs.length;
            allImgsLoaded = 0;
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0])
            }
            $.each(allImgs, function (i, img) {
                var image = new Image();
                var events = 'load.' + eventNamespace + ' error.' + eventNamespace;
                $(image).one(events, function me(event) {
                    var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
                    allImgsLoaded++;
                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);
                    $(this).off(events, me);
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false
                    }
                });
                image.src = img.src
            })
        });
        return deferred.promise()
    }
}(jQuery));
(function (e, t, r) {
    "use strict";

    function n(r) {
        if (o = t.documentElement, a = t.body, Y(), lt = this, r = r || {}, mt = r.constants || {}, r.easing)
            for (var n in r.easing) X[n] = r.easing[n];
        Tt = r.edgeStrategy || "set", ft = {
            beforerender: r.beforerender,
            render: r.render,
            keyframe: r.keyframe
        }, ut = r.forceHeight !== !1, ut && (zt = r.scale || 1), pt = r.mobileDeceleration || x, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || A, ht = {
            targetTop: lt.getScrollTop()
        }, Kt = (r.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Kt ? (ct = t.getElementById(r.skrollrBody || E), ct && it(), j(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), lt.refresh(), kt(e, "resize orientationchange", function () {
            var e = o.clientWidth,
                t = o.clientHeight;
            (t !== Bt || e !== $t) && (Bt = t, $t = e, _t = !0)
        });
        var i = R();
        return function l() {
            J(), St = i(l)
        }(), lt
    }
    var o, a, i = {
            get: function () {
                return lt
            },
            init: function (e) {
                return lt || new n(e)
            },
            VERSION: "0.6.29"
        },
        l = Object.prototype.hasOwnProperty,
        s = e.Math,
        c = e.getComputedStyle,
        f = "touchstart",
        u = "touchmove",
        m = "touchcancel",
        p = "touchend",
        d = "skrollable",
        g = d + "-before",
        v = d + "-between",
        h = d + "-after",
        y = "skrollr",
        T = "no-" + y,
        b = y + "-desktop",
        S = y + "-mobile",
        k = "linear",
        w = 1e3,
        x = .004,
        E = "skrollr-body",
        A = 200,
        F = "start",
        C = "end",
        H = "center",
        D = "bottom",
        I = "___skrollable_id",
        P = /^(?:input|textarea|button|select)$/i,
        N = /^\s+|\s+$/g,
        O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        z = /^(@?[a-z\-]+)\[(\w+)\]$/,
        q = /-([a-z0-9_])/g,
        L = function (e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        _ = /[a-z\-]+-gradient/g,
        G = "",
        K = "",
        Y = function () {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (c) {
                var t = c(a, null);
                for (var n in t)
                    if (G = n.match(e) || +n == n && t[n].match(e)) break;
                if (!G) return G = K = "", r;
                G = G[0], "-" === G.slice(0, 1) ? (K = G, G = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[G]) : K = "-" + G.toLowerCase() + "-"
            }
        },
        R = function () {
            var t = e.requestAnimationFrame || e[G.toLowerCase() + "RequestAnimationFrame"],
                r = Nt();
            return (Kt || !t) && (t = function (t) {
                var n = Nt() - r,
                    o = s.max(0, 1e3 / 60 - n);
                return e.setTimeout(function () {
                    r = Nt(), t()
                }, o)
            }), t
        },
        U = function () {
            var t = e.cancelAnimationFrame || e[G.toLowerCase() + "CancelAnimationFrame"];
            return (Kt || !t) && (t = function (t) {
                return e.clearTimeout(t)
            }), t
        },
        X = {
            begin: function () {
                return 0
            },
            end: function () {
                return 1
            },
            linear: function (e) {
                return e
            },
            quadratic: function (e) {
                return e * e
            },
            cubic: function (e) {
                return e * e * e
            },
            swing: function (e) {
                return -s.cos(e * s.PI) / 2 + .5
            },
            sqrt: function (e) {
                return s.sqrt(e)
            },
            outCubic: function (e) {
                return s.pow(e - 1, 3) + 1
            },
            bounce: function (e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
            }
        };
    n.prototype.refresh = function (e) {
        var n, o, a = !1;
        for (e === r ? (a = !0, st = [], Gt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
            var i = e[n],
                l = i,
                s = [],
                c = gt,
                f = Tt,
                u = !1;
            if (a && I in i && delete i[I], i.attributes) {
                for (var m = 0, p = i.attributes.length; p > m; m++) {
                    var g = i.attributes[m];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(O);
                                    if (null !== v) {
                                        var h = {
                                            props: g.value,
                                            element: i,
                                            eventType: g.name.replace(q, L)
                                        };
                                        s.push(h);
                                        var y = v[1];
                                        y && (h.constant = y.substr(1));
                                        var T = v[2];
                                        /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                                        var b = v[3],
                                            S = v[4] || b;
                                        b && b !== F && b !== C ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === C ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * zt))
                                    }
                                } else u = !0;
                    else f = g.value;
                    else c = "off" !== g.value;
                    else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) {
                    var k, w, x;
                    !a && I in i ? (x = i[I], k = st[x].styleAttr, w = st[x].classAttr) : (x = i[I] = Gt++, k = i.style.cssText, w = Ht(i)), st[x] = {
                        element: i,
                        styleAttr: k,
                        classAttr: w,
                        anchorTarget: l,
                        keyFrames: s,
                        smoothScrolling: c,
                        edgeStrategy: f,
                        emitEvents: u,
                        lastFrameIndex: -1
                    }, Dt(i, [d], [])
                }
            }
        }
        for (At(), n = 0, o = e.length; o > n; n++) {
            var E = st[e[n][I]];
            E !== r && (Q(E), tt(E))
        }
        return lt
    }, n.prototype.relativeToAbsolute = function (e, t, r) {
        var n = o.clientHeight,
            a = e.getBoundingClientRect(),
            i = a.top,
            l = a.bottom - a.top;
        return t === D ? i -= n : t === H && (i -= n / 2), r === D ? i += l : r === H && (i += l / 2), i += lt.getScrollTop(), 0 | i + .5
    }, n.prototype.animateTo = function (e, t) {
        t = t || {};
        var n = Nt(),
            o = lt.getScrollTop();
        return dt = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: t.duration || w,
            startTime: n,
            endTime: n + (t.duration || w),
            easing: X[t.easing || k],
            done: t.done
        }, dt.topDiff || (dt.done && dt.done.call(lt, !1), dt = r), lt
    }, n.prototype.stopAnimateTo = function () {
        dt && dt.done && dt.done.call(lt, !0), dt = r
    }, n.prototype.isAnimatingTo = function () {
        return !!dt
    }, n.prototype.isMobile = function () {
        return Kt
    }, n.prototype.setScrollTop = function (t, r) {
        return yt = r === !0, Kt ? Yt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), lt
    }, n.prototype.getScrollTop = function () {
        return Kt ? Yt : e.pageYOffset || o.scrollTop || a.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function () {
        return Vt
    }, n.prototype.on = function (e, t) {
        return ft[e] = t, lt
    }, n.prototype.off = function (e) {
        return delete ft[e], lt
    }, n.prototype.destroy = function () {
        var e = U();
        e(St), xt(), Dt(o, [T], [y, b, S]);
        for (var t = 0, n = st.length; n > t; t++) at(st[t].element);
        o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", ct && i.setStyle(ct, "transform", "none"), lt = r, ct = r, ft = r, ut = r, Vt = 0, zt = 1, mt = r, pt = r, qt = "down", Lt = -1, $t = 0, Bt = 0, _t = !1, dt = r, gt = r, vt = r, ht = r, yt = r, Gt = 0, Tt = r, Kt = !1, Yt = 0, bt = r
    };
    var j = function () {
            var n, i, l, c, d, g, v, h, y, T, b, S;
            kt(o, [f, u, m, p].join(" "), function (e) {
                var o = e.changedTouches[0];
                for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
                switch (d = o.clientY, g = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) {
                    case f:
                        n && n.blur(), lt.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
                        break;
                    case u:
                        P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, lt.setScrollTop(Yt - h, !0), v = d, b = T;
                        break;
                    default:
                    case m:
                    case p:
                        var a = i - d,
                            k = l - g,
                            w = k * k + a * a;
                        if (49 > w) {
                            if (!P.test(n.tagName)) {
                                n.focus();
                                var x = t.createEvent("MouseEvents");
                                x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                            }
                            return
                        }
                        n = r;
                        var E = h / S;
                        E = s.max(s.min(E, 3), -3);
                        var A = s.abs(E / pt),
                            F = E * A + .5 * pt * A * A,
                            C = lt.getScrollTop() - F,
                            H = 0;
                        C > Vt ? (H = (Vt - C) / F, C = Vt) : 0 > C && (H = -C / F, C = 0), A *= 1 - H, lt.animateTo(0 | C + .5, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
        },
        W = function () {
            var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight,
                d = Ft();
            for (c = 0, f = st.length; f > c; c++)
                for (e = st[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (at(t), l.frame = lt.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, at(t, !0)), l.frame += m, ut && !l.isEnd && l.frame > Vt && (Vt = l.frame);
            for (Vt = s.max(Vt, Ct()), c = 0, f = st.length; f > c; c++) {
                for (e = st[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + m);
                e.keyFrames.sort(Ot)
            }
        },
        Z = function (e, t) {
            for (var r = 0, n = st.length; n > r; r++) {
                var o, a, s = st[r],
                    c = s.element,
                    f = s.smoothScrolling ? e : t,
                    u = s.keyFrames,
                    m = u.length,
                    p = u[0],
                    y = u[u.length - 1],
                    T = p.frame > f,
                    b = f > y.frame,
                    S = T ? p : y,
                    k = s.emitEvents,
                    w = s.lastFrameIndex;
                if (T || b) {
                    if (T && -1 === s.edge || b && 1 === s.edge) continue;
                    switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (Et(c, p.eventType, qt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (Et(c, y.eventType, qt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
                        case "reset":
                            at(c);
                            continue;
                        case "ease":
                            f = S.frame;
                            break;
                        default:
                        case "set":
                            var x = S.props;
                            for (o in x) l.call(x, o) && (a = ot(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
                            continue
                    }
                } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);
                for (var E = 0; m - 1 > E; E++)
                    if (f >= u[E].frame && u[E + 1].frame >= f) {
                        var A = u[E],
                            F = u[E + 1];
                        for (o in A.props)
                            if (l.call(A.props, o)) {
                                var C = (f - A.frame) / (F.frame - A.frame);
                                C = A.props[o].easing(C), a = nt(A.props[o].value, F.props[o].value, C), a = ot(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
                            }
                        k && w !== E && ("down" === qt ? Et(c, A.eventType, qt) : Et(c, F.eventType, qt), s.lastFrameIndex = E);
                        break
                    }
            }
        },
        J = function () {
            _t && (_t = !1, At());
            var e, t, n = lt.getScrollTop(),
                o = Nt();
            if (dt) o >= dt.endTime ? (n = dt.targetTop, e = dt.done, dt = r) : (t = dt.easing((o - dt.startTime) / dt.duration), n = 0 | dt.startTop + t * dt.topDiff), lt.setScrollTop(n, !0);
            else if (!yt) {
                var a = ht.targetTop - n;
                a && (ht = {
                    startTop: Lt,
                    topDiff: n - Lt,
                    targetTop: n,
                    startTime: Mt,
                    endTime: Mt + vt
                }), ht.endTime >= o && (t = X.sqrt((o - ht.startTime) / vt), n = 0 | ht.startTop + t * ht.topDiff)
            }
            if (Kt && ct && i.setStyle(ct, "transform", "translate(0, " + -Yt + "px) " + bt), yt || Lt !== n) {
                qt = n > Lt ? "down" : Lt > n ? "up" : qt, yt = !1;
                var l = {
                        curTop: n,
                        lastTop: Lt,
                        maxTop: Vt,
                        direction: qt
                    },
                    s = ft.beforerender && ft.beforerender.call(lt, l);
                s !== !1 && (Z(n, lt.getScrollTop()), Lt = n, ft.render && ft.render.call(lt, l)), e && e.call(lt, !1)
            }
            Mt = o
        },
        Q = function (e) {
            for (var t = 0, r = e.keyFrames.length; r > t; t++) {
                for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = V.exec(l.props));) a = i[1], o = i[2], n = a.match(z), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? et(o) : [o.slice(1)], s[a] = {
                    value: o,
                    easing: X[n]
                };
                l.props = s
            }
        },
        et = function (e) {
            var t = [];
            return B.lastIndex = 0, e = e.replace(B, function (e) {
                return e.replace(M, function (e) {
                    return 100 * (e / 255) + "%"
                })
            }), K && (_.lastIndex = 0, e = e.replace(_, function (e) {
                return K + e
            })), e = e.replace(M, function (e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        tt = function (e) {
            var t, r, n = {};
            for (t = 0, r = e.keyFrames.length; r > t; t++) rt(e.keyFrames[t], n);
            for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) rt(e.keyFrames[t], n)
        },
        rt = function (e, t) {
            var r;
            for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
            for (r in e.props) t[r] = e.props[r]
        },
        nt = function (e, t, r) {
            var n, o = e.length;
            if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var a = [e[0]];
            for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
            return a
        },
        ot = function (e) {
            var t = 1;
            return $.lastIndex = 0, e[0].replace($, function () {
                return e[t++]
            })
        },
        at = function (e, t) {
            e = [].concat(e);
            for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = st[n[I]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ht(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)))
        },
        it = function () {
            bt = "translateZ(0)", i.setStyle(ct, "transform", bt);
            var e = c(ct),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(K + "transform"),
                n = t && "none" !== t || r && "none" !== r;
            n || (bt = "")
        };
    i.setStyle = function (e, t, r) {
        var n = e.style;
        if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try {
            G && (n[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (o) {}
    };
    var lt, st, ct, ft, ut, mt, pt, dt, gt, vt, ht, yt, Tt, bt, St, kt = i.addEvent = function (t, r, n) {
            var o = function (t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), n.call(this, t)
            };
            r = r.split(" ");
            for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Rt.push({
                element: t,
                name: a,
                listener: n
            })
        },
        wt = i.removeEvent = function (e, t, r) {
            t = t.split(" ");
            for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
        },
        xt = function () {
            for (var e, t = 0, r = Rt.length; r > t; t++) e = Rt[t], wt(e.element, e.name, e.listener);
            Rt = []
        },
        Et = function (e, t, r) {
            ft.keyframe && ft.keyframe.call(lt, e, t, r)
        },
        At = function () {
            var e = lt.getScrollTop();
            Vt = 0, ut && !Kt && (a.style.height = ""), W(), ut && !Kt && (a.style.height = Vt + o.clientHeight + "px"), Kt ? lt.setScrollTop(s.min(lt.getScrollTop(), Vt)) : lt.setScrollTop(e, !0), yt = !0
        },
        Ft = function () {
            var e, t, r = o.clientHeight,
                n = {};
            for (e in mt) t = mt[e], "function" == typeof t ? t = t.call(lt) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        Ct = function () {
            var e, t = 0;
            return ct && (t = s.max(ct.offsetHeight, ct.scrollHeight)), e = s.max(t, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), e - o.clientHeight
        },
        Ht = function (t) {
            var r = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
        },
        Dt = function (t, n, o) {
            var a = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;
            for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Pt(i).replace(Pt(o[l]), " ");
            i = It(i);
            for (var c = 0, f = n.length; f > c; c++) - 1 === Pt(i).indexOf(Pt(n[c])) && (i += " " + n[c]);
            t[a] = It(i)
        },
        It = function (e) {
            return e.replace(N, "")
        },
        Pt = function (e) {
            return " " + e + " "
        },
        Nt = Date.now || function () {
            return +new Date
        },
        Ot = function (e, t) {
            return e.frame - t.frame
        },
        Vt = 0,
        zt = 1,
        qt = "down",
        Lt = -1,
        Mt = Nt(),
        $t = 0,
        Bt = 0,
        _t = !1,
        Gt = 0,
        Kt = !1,
        Yt = 0,
        Rt = [];
    "function" == typeof define && define.amd ? define([], function () {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
})(window, document);
var Swiper = function (f, b) {
    function g(a) {
        return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a)
    }

    function h() {
        var c = y - l;
        b.freeMode && (c = y - l);
        b.slidesPerView > a.slides.length && (c = 0);
        0 > c && (c = 0);
        return c
    }

    function n() {
        function c(c) {
            var d = new Image;
            d.onload = function () {
                a.imagesLoaded++;
                if (a.imagesLoaded == a.imagesToLoad.length && (a.reInit(), b.onImagesReady)) b.onImagesReady(a)
            };
            d.src = c
        }
        a.browser.ie10 ? (a.h.addEventListener(a.wrapper, a.touchEvents.touchStart, z, !1), a.h.addEventListener(document, a.touchEvents.touchMove,
            A, !1), a.h.addEventListener(document, a.touchEvents.touchEnd, B, !1)) : (a.support.touch && (a.h.addEventListener(a.wrapper, "touchstart", z, !1), a.h.addEventListener(a.wrapper, "touchmove", A, !1), a.h.addEventListener(a.wrapper, "touchend", B, !1)), b.simulateTouch && (a.h.addEventListener(a.wrapper, "mousedown", z, !1), a.h.addEventListener(document, "mousemove", A, !1), a.h.addEventListener(document, "mouseup", B, !1)));
        b.autoResize && a.h.addEventListener(window, "resize", a.resizeFix, !1);
        t();
        a._wheelEvent = !1;
        if (b.mousewheelControl) {
            void 0 !==
                document.onmousewheel && (a._wheelEvent = "mousewheel");
            try {
                WheelEvent("wheel"), a._wheelEvent = "wheel"
            } catch (d) {}
            a._wheelEvent || (a._wheelEvent = "DOMMouseScroll");
            a._wheelEvent && a.h.addEventListener(a.container, a._wheelEvent, N, !1)
        }
        b.keyboardControl && a.h.addEventListener(document, "keydown", O, !1);
        if (b.updateOnImagesReady) {
            document.querySelectorAll ? a.imagesToLoad = a.container.querySelectorAll("img") : window.jQuery && (a.imagesToLoad = g(a.container).find("img"));
            for (var e = 0; e < a.imagesToLoad.length; e++) c(a.imagesToLoad[e].getAttribute("src"))
        }
    }

    function t() {
        if (b.preventLinks) {
            var c = [];
            document.querySelectorAll ? c = a.container.querySelectorAll("a") : window.jQuery && (c = g(a.container).find("a"));
            for (var d = 0; d < c.length; d++) a.h.addEventListener(c[d], "click", P, !1)
        }
        if (b.releaseFormElements)
            for (c = document.querySelectorAll ? a.container.querySelectorAll("input, textarea, select") : g(a.container).find("input, textarea, select"), d = 0; d < c.length; d++) a.h.addEventListener(c[d], a.touchEvents.touchStart, Q, !0);
        if (b.onSlideClick)
            for (d = 0; d < a.slides.length; d++) a.h.addEventListener(a.slides[d],
                "click", R, !1);
        if (b.onSlideTouch)
            for (d = 0; d < a.slides.length; d++) a.h.addEventListener(a.slides[d], a.touchEvents.touchStart, S, !1)
    }

    function v() {
        if (b.onSlideClick)
            for (var c = 0; c < a.slides.length; c++) a.h.removeEventListener(a.slides[c], "click", R, !1);
        if (b.onSlideTouch)
            for (c = 0; c < a.slides.length; c++) a.h.removeEventListener(a.slides[c], a.touchEvents.touchStart, S, !1);
        if (b.releaseFormElements)
            for (var d = document.querySelectorAll ? a.container.querySelectorAll("input, textarea, select") : g(a.container).find("input, textarea, select"),
                    c = 0; c < d.length; c++) a.h.removeEventListener(d[c], a.touchEvents.touchStart, Q, !0);
        if (b.preventLinks)
            for (d = [], document.querySelectorAll ? d = a.container.querySelectorAll("a") : window.jQuery && (d = g(a.container).find("a")), c = 0; c < d.length; c++) a.h.removeEventListener(d[c], "click", P, !1)
    }

    function O(c) {
        var b = c.keyCode || c.charCode;
        if (37 == b || 39 == b || 38 == b || 40 == b) {
            for (var e = !1, f = a.h.getOffset(a.container), h = a.h.windowScroll().left, g = a.h.windowScroll().top, m = a.h.windowWidth(), l = a.h.windowHeight(), f = [[f.left, f.top], [f.left +
a.width, f.top], [f.left, f.top + a.height], [f.left + a.width, f.top + a.height]], p = 0; p < f.length; p++) {
                var r = f[p];
                r[0] >= h && (r[0] <= h + m && r[1] >= g && r[1] <= g + l) && (e = !0)
            }
            if (!e) return
        }
        if (k) {
            if (37 == b || 39 == b) c.preventDefault ? c.preventDefault() : c.returnValue = !1;
            39 == b && a.swipeNext();
            37 == b && a.swipePrev()
        } else {
            if (38 == b || 40 == b) c.preventDefault ? c.preventDefault() : c.returnValue = !1;
            40 == b && a.swipeNext();
            38 == b && a.swipePrev()
        }
    }

    function N(c) {
        var d = a._wheelEvent,
            e;
        c.detail ? e = -c.detail : "mousewheel" == d ? e = c.wheelDelta : "DOMMouseScroll" ==
            d ? e = -c.detail : "wheel" == d && (e = Math.abs(c.deltaX) > Math.abs(c.deltaY) ? -c.deltaX : -c.deltaY);
        b.freeMode ? (k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"), k ? (d = a.getWrapperTranslate("x") + e, e = a.getWrapperTranslate("y"), 0 < d && (d = 0), d < -h() && (d = -h())) : (d = a.getWrapperTranslate("x"), e = a.getWrapperTranslate("y") + e, 0 < e && (e = 0), e < -h() && (e = -h())), a.setWrapperTransition(0), a.setWrapperTranslate(d, e, 0), k ? a.updateActiveSlide(d) : a.updateActiveSlide(e)) : 0 > e ? a.swipeNext() : a.swipePrev();
        b.autoplay && a.stopAutoplay();
        c.preventDefault ? c.preventDefault() : c.returnValue = !1;
        return !1
    }

    function T(a) {
        for (var d = !1; !d;) - 1 < a.className.indexOf(b.slideClass) && (d = a), a = a.parentElement;
        return d
    }

    function R(c) {
        a.allowSlideClick && (c.target ? (a.clickedSlide = this, a.clickedSlideIndex = a.slides.indexOf(this)) : (a.clickedSlide = T(c.srcElement), a.clickedSlideIndex = a.slides.indexOf(a.clickedSlide)), b.onSlideClick(a))
    }

    function S(c) {
        a.clickedSlide = c.target ? this : T(c.srcElement);
        a.clickedSlideIndex = a.slides.indexOf(a.clickedSlide);
        b.onSlideTouch(a)
    }

    function P(b) {
        if (!a.allowLinks) return b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1
    }

    function Q(a) {
        a.stopPropagation ? a.stopPropagation() : a.returnValue = !1;
        return !1
    }

    function z(c) {
        b.preventLinks && (a.allowLinks = !0);
        if (a.isTouched || b.onlyExternal) return !1;
        var d;
        if (d = b.noSwiping)
            if (d = c.target || c.srcElement) {
                d = c.target || c.srcElement;
                var e = !1;
                do -1 < d.className.indexOf(b.noSwipingClass) && (e = !0), d = d.parentElement; while (!e && d.parentElement && -1 == d.className.indexOf(b.wrapperClass));
                !e && (-1 < d.className.indexOf(b.wrapperClass) &&
                    -1 < d.className.indexOf(b.noSwipingClass)) && (e = !0);
                d = e
            }
        if (d) return !1;
        G = !1;
        a.isTouched = !0;
        u = "touchstart" == c.type;
        if (!u || 1 == c.targetTouches.length) {
            b.loop && a.fixLoop();
            a.callPlugins("onTouchStartBegin");
            u || (c.preventDefault ? c.preventDefault() : c.returnValue = !1);
            d = u ? c.targetTouches[0].pageX : c.pageX || c.clientX;
            c = u ? c.targetTouches[0].pageY : c.pageY || c.clientY;
            a.touches.startX = a.touches.currentX = d;
            a.touches.startY = a.touches.currentY = c;
            a.touches.start = a.touches.current = k ? d : c;
            a.setWrapperTransition(0);
            a.positions.start =
                a.positions.current = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            k ? a.setWrapperTranslate(a.positions.start, 0, 0) : a.setWrapperTranslate(0, a.positions.start, 0);
            a.times.start = (new Date).getTime();
            x = void 0;
            0 < b.moveStartThreshold && (M = !1);
            if (b.onTouchStart) b.onTouchStart(a);
            a.callPlugins("onTouchStartEnd")
        }
    }

    function A(c) {
        if (a.isTouched && !b.onlyExternal && (!u || "mousemove" != c.type)) {
            var d = u ? c.targetTouches[0].pageX : c.pageX || c.clientX,
                e = u ? c.targetTouches[0].pageY : c.pageY || c.clientY;
            "undefined" ===
            typeof x && k && (x = !!(x || Math.abs(e - a.touches.startY) > Math.abs(d - a.touches.startX)));
            "undefined" !== typeof x || k || (x = !!(x || Math.abs(e - a.touches.startY) < Math.abs(d - a.touches.startX)));
            if (x) a.isTouched = !1;
            else if (c.assignedToSwiper) a.isTouched = !1;
            else if (c.assignedToSwiper = !0, a.isMoved = !0, b.preventLinks && (a.allowLinks = !1), b.onSlideClick && (a.allowSlideClick = !1), b.autoplay && a.stopAutoplay(), !u || 1 == c.touches.length) {
                a.callPlugins("onTouchMoveStart");
                c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                a.touches.current =
                    k ? d : e;
                a.positions.current = (a.touches.current - a.touches.start) * b.touchRatio + a.positions.start;
                if (0 < a.positions.current && b.onResistanceBefore) b.onResistanceBefore(a, a.positions.current);
                if (a.positions.current < -h() && b.onResistanceAfter) b.onResistanceAfter(a, Math.abs(a.positions.current + h()));
                b.resistance && "100%" != b.resistance && (0 < a.positions.current && (c = 1 - a.positions.current / l / 2, a.positions.current = 0.5 > c ? l / 2 : a.positions.current * c), a.positions.current < -h() && (d = (a.touches.current - a.touches.start) * b.touchRatio +
                    (h() + a.positions.start), c = (l + d) / l, d = a.positions.current - d * (1 - c) / 2, e = -h() - l / 2, a.positions.current = d < e || 0 >= c ? e : d));
                b.resistance && "100%" == b.resistance && (0 < a.positions.current && (!b.freeMode || b.freeModeFluid) && (a.positions.current = 0), a.positions.current < -h() && (!b.freeMode || b.freeModeFluid) && (a.positions.current = -h()));
                if (b.followFinger) {
                    b.moveStartThreshold ? Math.abs(a.touches.current - a.touches.start) > b.moveStartThreshold || M ? (M = !0, k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0,
                        a.positions.current, 0)) : a.positions.current = a.positions.start : k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0, a.positions.current, 0);
                    (b.freeMode || b.watchActiveIndex) && a.updateActiveSlide(a.positions.current);
                    b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grabbing", a.container.style.cursor = "-moz-grabbin", a.container.style.cursor = "-webkit-grabbing");
                    D || (D = a.touches.current);
                    H || (H = (new Date).getTime());
                    a.velocity = (a.touches.current - D) / ((new Date).getTime() -
                        H) / 2;
                    2 > Math.abs(a.touches.current - D) && (a.velocity = 0);
                    D = a.touches.current;
                    H = (new Date).getTime();
                    a.callPlugins("onTouchMoveEnd");
                    if (b.onTouchMove) b.onTouchMove(a);
                    return !1
                }
            }
        }
    }

    function B(c) {
        x && a.swipeReset();
        if (!b.onlyExternal && a.isTouched) {
            a.isTouched = !1;
            b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grab", a.container.style.cursor = "-moz-grab", a.container.style.cursor = "-webkit-grab");
            a.positions.current || 0 === a.positions.current || (a.positions.current = a.positions.start);
            b.followFinger &&
                (k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0, a.positions.current, 0));
            a.times.end = (new Date).getTime();
            a.touches.diff = a.touches.current - a.touches.start;
            a.touches.abs = Math.abs(a.touches.diff);
            a.positions.diff = a.positions.current - a.positions.start;
            a.positions.abs = Math.abs(a.positions.diff);
            var d = a.positions.diff,
                e = a.positions.abs;
            c = a.times.end - a.times.start;
            5 > e && (300 > c && !1 == a.allowLinks) && (b.freeMode || 0 == e || a.swipeReset(), b.preventLinks && (a.allowLinks = !0), b.onSlideClick &&
                (a.allowSlideClick = !0));
            setTimeout(function () {
                b.preventLinks && (a.allowLinks = !0);
                b.onSlideClick && (a.allowSlideClick = !0)
            }, 100);
            if (a.isMoved) {
                a.isMoved = !1;
                var f = h();
                if (0 < a.positions.current) a.swipeReset();
                else if (a.positions.current < -f) a.swipeReset();
                else if (b.freeMode) {
                    if (b.freeModeFluid) {
                        var e = 1E3 * b.momentumRatio,
                            d = a.positions.current + a.velocity * e,
                            g = !1,
                            F, m = 20 * Math.abs(a.velocity) * b.momentumBounceRatio;
                        d < -f && (b.momentumBounce && a.support.transitions ? (d + f < -m && (d = -f - m), F = -f, G = g = !0) : d = -f);
                        0 < d && (b.momentumBounce &&
                            a.support.transitions ? (d > m && (d = m), F = 0, G = g = !0) : d = 0);
                        0 != a.velocity && (e = Math.abs((d - a.positions.current) / a.velocity));
                        k ? a.setWrapperTranslate(d, 0, 0) : a.setWrapperTranslate(0, d, 0);
                        a.setWrapperTransition(e);
                        b.momentumBounce && g && a.wrapperTransitionEnd(function () {
                            if (G) {
                                if (b.onMomentumBounce) b.onMomentumBounce(a);
                                k ? a.setWrapperTranslate(F, 0, 0) : a.setWrapperTranslate(0, F, 0);
                                a.setWrapperTransition(300)
                            }
                        });
                        a.updateActiveSlide(d)
                    }(!b.freeModeFluid || 300 <= c) && a.updateActiveSlide(a.positions.current)
                } else {
                    E = 0 > d ? "toNext" :
                        "toPrev";
                    "toNext" == E && 300 >= c && (30 > e || !b.shortSwipes ? a.swipeReset() : a.swipeNext(!0));
                    "toPrev" == E && 300 >= c && (30 > e || !b.shortSwipes ? a.swipeReset() : a.swipePrev(!0));
                    f = 0;
                    if ("auto" == b.slidesPerView) {
                        for (var d = Math.abs(k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y")), q = g = 0; q < a.slides.length; q++)
                            if (m = k ? a.slides[q].getWidth(!0) : a.slides[q].getHeight(!0), g += m, g > d) {
                                f = m;
                                break
                            }
                        f > l && (f = l)
                    } else f = p * b.slidesPerView;
                    "toNext" == E && 300 < c && (e >= 0.5 * f ? a.swipeNext(!0) : a.swipeReset());
                    "toPrev" == E && 300 < c && (e >= 0.5 * f ?
                        a.swipePrev(!0) : a.swipeReset())
                }
                if (b.onTouchEnd) b.onTouchEnd(a);
                a.callPlugins("onTouchEnd")
            } else {
                a.isMoved = !1;
                if (b.onTouchEnd) b.onTouchEnd(a);
                a.callPlugins("onTouchEnd");
                a.swipeReset()
            }
        }
    }

    function I(c, d, e) {
        function f() {
            g += m;
            if (p = "toNext" == l ? g > c : g < c) k ? a.setWrapperTranslate(Math.round(g), 0) : a.setWrapperTranslate(0, Math.round(g)), a._DOMAnimating = !0, window.setTimeout(function () {
                f()
            }, 1E3 / 60);
            else {
                if (b.onSlideChangeEnd) b.onSlideChangeEnd(a);
                k ? a.setWrapperTranslate(c, 0) : a.setWrapperTranslate(0, c);
                a._DOMAnimating = !1
            }
        }
        if (a.support.transitions || !b.DOMAnimation) {
            k ? a.setWrapperTranslate(c, 0, 0) : a.setWrapperTranslate(0, c, 0);
            var h = "to" == d && 0 <= e.speed ? e.speed : b.speed;
            a.setWrapperTransition(h)
        } else {
            var g = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"),
                h = "to" == d && 0 <= e.speed ? e.speed : b.speed,
                m = Math.ceil((c - g) / h * (1E3 / 60)),
                l = g > c ? "toNext" : "toPrev",
                p = "toNext" == l ? g > c : g < c;
            if (a._DOMAnimating) return;
            f()
        }
        a.updateActiveSlide(c);
        if (b.onSlideNext && "next" == d) b.onSlideNext(a, c);
        if (b.onSlidePrev && "prev" == d) b.onSlidePrev(a, c);
        if (b.onSlideReset && "reset" == d) b.onSlideReset(a, c);
        ("next" == d || "prev" == d || "to" == d && !0 == e.runCallbacks) && W()
    }

    function W() {
        a.callPlugins("onSlideChangeStart");
        if (b.onSlideChangeStart)
            if (b.queueStartCallbacks && a.support.transitions) {
                if (a._queueStartCallbacks) return;
                a._queueStartCallbacks = !0;
                b.onSlideChangeStart(a);
                a.wrapperTransitionEnd(function () {
                    a._queueStartCallbacks = !1
                })
            } else b.onSlideChangeStart(a);
        b.onSlideChangeEnd && (a.support.transitions ? b.queueEndCallbacks ? a._queueEndCallbacks || (a._queueEndCallbacks = !0, a.wrapperTransitionEnd(b.onSlideChangeEnd)) : a.wrapperTransitionEnd(b.onSlideChangeEnd) : b.DOMAnimation || setTimeout(function () {
            b.onSlideChangeEnd(a)
        }, 10))
    }

    function U() {
        for (var b = a.paginationButtons, d = 0; d < b.length; d++) a.h.removeEventListener(b[d], "click", V, !1)
    }

    function V(b) {
        var d;
        b = b.target || b.srcElement;
        for (var e = a.paginationButtons, f = 0; f < e.length; f++) b === e[f] && (d = f);
        a.swipeTo(d)
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var s = HTMLElement.prototype;
        s.__defineGetter__ && s.__defineGetter__("outerHTML",
            function () {
                return (new XMLSerializer).serializeToString(this)
            })
    }
    window.getComputedStyle || (window.getComputedStyle = function (a, b) {
        this.el = a;
        this.getPropertyValue = function (b) {
            var d = /(\-([a-z]){1})/g;
            "float" === b && (b = "styleFloat");
            d.test(b) && (b = b.replace(d, function (a, b, c) {
                return c.toUpperCase()
            }));
            return a.currentStyle[b] ? a.currentStyle[b] : null
        };
        return this
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
        for (var e = b || 0, f = this.length; e < f; e++)
            if (this[e] === a) return e;
        return -1
    });
    if ((document.querySelectorAll ||
            window.jQuery) && "undefined" !== typeof f && (f.nodeType || 0 !== g(f).length)) {
        var a = this;
        a.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        };
        a.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        };
        a.times = {
            start: 0,
            end: 0
        };
        a.id = (new Date).getTime();
        a.container = f.nodeType ? f : g(f)[0];
        a.isTouched = !1;
        a.isMoved = !1;
        a.activeIndex = 0;
        a.activeLoaderIndex = 0;
        a.activeLoopIndex = 0;
        a.previousIndex = null;
        a.velocity = 0;
        a.snapGrid = [];
        a.slidesGrid = [];
        a.imagesToLoad = [];
        a.imagesLoaded = 0;
        a.wrapperLeft = 0;
        a.wrapperRight =
            0;
        a.wrapperTop = 0;
        a.wrapperBottom = 0;
        var J, p, y, E, x, l, s = {
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            moveStartThreshold: !1,
            autoplay: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelDebounce: 600,
            useCSS3Transforms: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            calculateHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var q in s)
            if (q in b && "object" === typeof b[q])
                for (var C in s[q]) C in b[q] || (b[q][C] = s[q][C]);
            else q in b || (b[q] = s[q]);
        a.params = b;
        b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0);
        b.loop && (b.resistance =
            "100%");
        var k = "horizontal" === b.mode;
        a.touchEvents = {
            touchStart: a.support.touch || !b.simulateTouch ? "touchstart" : a.browser.ie10 ? "MSPointerDown" : "mousedown",
            touchMove: a.support.touch || !b.simulateTouch ? "touchmove" : a.browser.ie10 ? "MSPointerMove" : "mousemove",
            touchEnd: a.support.touch || !b.simulateTouch ? "touchend" : a.browser.ie10 ? "MSPointerUp" : "mouseup"
        };
        for (q = a.container.childNodes.length - 1; 0 <= q; q--)
            if (a.container.childNodes[q].className)
                for (C = a.container.childNodes[q].className.split(" "), s = 0; s < C.length; s++) C[s] ===
                    b.wrapperClass && (J = a.container.childNodes[q]);
        a.wrapper = J;
        a._extendSwiperSlide = function (c) {
            c.append = function () {
                b.loop ? (c.insertAfter(a.slides.length - a.loopedSlides), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.wrapper.appendChild(c);
                a.reInit();
                return c
            };
            c.prepend = function () {
                b.loop ? (a.wrapper.insertBefore(c, a.slides[a.loopedSlides]), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.wrapper.insertBefore(c, a.wrapper.firstChild);
                a.reInit();
                return c
            };
            c.insertAfter = function (d) {
                if ("undefined" ===
                    typeof d) return !1;
                b.loop ? (d = a.slides[d + 1 + a.loopedSlides], a.wrapper.insertBefore(c, d), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : (d = a.slides[d + 1], a.wrapper.insertBefore(c, d));
                a.reInit();
                return c
            };
            c.clone = function () {
                return a._extendSwiperSlide(c.cloneNode(!0))
            };
            c.remove = function () {
                a.wrapper.removeChild(c);
                a.reInit()
            };
            c.html = function (a) {
                if ("undefined" === typeof a) return c.innerHTML;
                c.innerHTML = a;
                return c
            };
            c.index = function () {
                for (var b, e = a.slides.length - 1; 0 <= e; e--) c === a.slides[e] && (b = e);
                return b
            };
            c.isActive = function () {
                return c.index() === a.activeIndex ? !0 : !1
            };
            c.swiperSlideDataStorage || (c.swiperSlideDataStorage = {});
            c.getData = function (a) {
                return c.swiperSlideDataStorage[a]
            };
            c.setData = function (a, b) {
                c.swiperSlideDataStorage[a] = b;
                return c
            };
            c.data = function (a, b) {
                return b ? (c.setAttribute("data-" + a, b), c) : c.getAttribute("data-" + a)
            };
            c.getWidth = function (b) {
                return a.h.getWidth(c, b)
            };
            c.getHeight = function (b) {
                return a.h.getHeight(c, b)
            };
            c.getOffset = function () {
                return a.h.getOffset(c)
            };
            return c
        };
        a.calcSlides = function (c) {
            var d =
                a.slides ? a.slides.length : !1;
            a.slides = [];
            a.displaySlides = [];
            for (var e = 0; e < a.wrapper.childNodes.length; e++)
                if (a.wrapper.childNodes[e].className)
                    for (var f = a.wrapper.childNodes[e].className.split(" "), g = 0; g < f.length; g++) f[g] === b.slideClass && a.slides.push(a.wrapper.childNodes[e]);
            for (e = a.slides.length - 1; 0 <= e; e--) a._extendSwiperSlide(a.slides[e]);
            d && (d !== a.slides.length || c) && (v(), t(), a.updateActiveSlide(), b.createPagination && a.params.pagination && a.createPagination(), a.callPlugins("numberOfSlidesChanged"))
        };
        a.createSlide = function (c, d, e) {
            d = d || a.params.slideClass;
            e = e || b.slideElement;
            e = document.createElement(e);
            e.innerHTML = c || "";
            e.className = d;
            return a._extendSwiperSlide(e)
        };
        a.appendSlide = function (b, d, e) {
            if (b) return b.nodeType ? a._extendSwiperSlide(b).append() : a.createSlide(b, d, e).append()
        };
        a.prependSlide = function (b, d, e) {
            if (b) return b.nodeType ? a._extendSwiperSlide(b).prepend() : a.createSlide(b, d, e).prepend()
        };
        a.insertSlideAfter = function (b, d, e, f) {
            return "undefined" === typeof b ? !1 : d.nodeType ? a._extendSwiperSlide(d).insertAfter(b) :
                a.createSlide(d, e, f).insertAfter(b)
        };
        a.removeSlide = function (c) {
            if (a.slides[c]) {
                if (b.loop) {
                    if (!a.slides[c + a.loopedSlides]) return !1;
                    a.slides[c + a.loopedSlides].remove();
                    a.removeLoopedSlides();
                    a.calcSlides();
                    a.createLoop()
                } else a.slides[c].remove();
                return !0
            }
            return !1
        };
        a.removeLastSlide = function () {
            return 0 < a.slides.length ? (b.loop ? (a.slides[a.slides.length - 1 - a.loopedSlides].remove(), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.slides[a.slides.length - 1].remove(), !0) : !1
        };
        a.removeAllSlides = function () {
            for (var b =
                    a.slides.length - 1; 0 <= b; b--) a.slides[b].remove()
        };
        a.getSlide = function (b) {
            return a.slides[b]
        };
        a.getLastSlide = function () {
            return a.slides[a.slides.length - 1]
        };
        a.getFirstSlide = function () {
            return a.slides[0]
        };
        a.activeSlide = function () {
            return a.slides[a.activeIndex]
        };
        var K = [],
            L;
        for (L in a.plugins) b[L] && (q = a.plugins[L](a, b[L])) && K.push(q);
        a.callPlugins = function (a, b) {
            b || (b = {});
            for (var e = 0; e < K.length; e++)
                if (a in K[e]) K[e][a](b)
        };
        a.browser.ie10 && !b.onlyExternal && (k ? a.wrapper.classList.add("swiper-wp8-horizontal") :
            a.wrapper.classList.add("swiper-wp8-vertical"));
        b.freeMode && (a.container.className += " swiper-free-mode");
        a.initialized = !1;
        a.init = function (c, d) {
            var e = a.h.getWidth(a.container),
                f = a.h.getHeight(a.container);
            if (e !== a.width || f !== a.height || c) {
                a.width = e;
                a.height = f;
                l = k ? e : f;
                e = a.wrapper;
                c && a.calcSlides(d);
                if ("auto" === b.slidesPerView) {
                    var g = 0,
                        h = 0;
                    0 < b.slidesOffset && (e.style.paddingLeft = "", e.style.paddingRight = "", e.style.paddingTop = "", e.style.paddingBottom = "");
                    e.style.width = "";
                    e.style.height = "";
                    0 < b.offsetPxBefore &&
                        (k ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (k ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (k ? (a.wrapperLeft = (l - this.slides[0].getWidth(!0)) / 2, a.wrapperRight = (l - a.slides[a.slides.length - 1].getWidth(!0)) / 2) : (a.wrapperTop = (l - a.slides[0].getHeight(!0)) / 2, a.wrapperBottom = (l - a.slides[a.slides.length - 1].getHeight(!0)) / 2));
                    k ? (0 <= a.wrapperLeft && (e.style.paddingLeft = a.wrapperLeft + "px"), 0 <= a.wrapperRight && (e.style.paddingRight = a.wrapperRight +
                        "px")) : (0 <= a.wrapperTop && (e.style.paddingTop = a.wrapperTop + "px"), 0 <= a.wrapperBottom && (e.style.paddingBottom = a.wrapperBottom + "px"));
                    var m = 0,
                        q = 0;
                    a.snapGrid = [];
                    a.slidesGrid = [];
                    for (var n = 0, r = 0; r < a.slides.length; r++) {
                        var f = a.slides[r].getWidth(!0),
                            s = a.slides[r].getHeight(!0);
                        b.calculateHeight && (n = Math.max(n, s));
                        var t = k ? f : s;
                        if (b.centeredSlides) {
                            var u = r === a.slides.length - 1 ? 0 : a.slides[r + 1].getWidth(!0),
                                w = r === a.slides.length - 1 ? 0 : a.slides[r + 1].getHeight(!0),
                                u = k ? u : w;
                            if (t > l) {
                                for (w = 0; w <= Math.floor(t / (l + a.wrapperLeft)); w++) 0 ===
                                    w ? a.snapGrid.push(m + a.wrapperLeft) : a.snapGrid.push(m + a.wrapperLeft + l * w);
                                a.slidesGrid.push(m + a.wrapperLeft)
                            } else a.snapGrid.push(q), a.slidesGrid.push(q);
                            q += t / 2 + u / 2
                        } else {
                            if (t > l)
                                for (w = 0; w <= Math.floor(t / l); w++) a.snapGrid.push(m + l * w);
                            else a.snapGrid.push(m);
                            a.slidesGrid.push(m)
                        }
                        m += t;
                        g += f;
                        h += s
                    }
                    b.calculateHeight && (a.height = n);
                    k ? (y = g + a.wrapperRight + a.wrapperLeft, e.style.width = g + "px", e.style.height = a.height + "px") : (y = h + a.wrapperTop + a.wrapperBottom, e.style.width = a.width + "px", e.style.height = h + "px")
                } else if (b.scrollContainer) e.style.width =
                    "", e.style.height = "", n = a.slides[0].getWidth(!0), g = a.slides[0].getHeight(!0), y = k ? n : g, e.style.width = n + "px", e.style.height = g + "px", p = k ? n : g;
                else {
                    if (b.calculateHeight) {
                        g = n = 0;
                        k || (a.container.style.height = "");
                        e.style.height = "";
                        for (r = 0; r < a.slides.length; r++) a.slides[r].style.height = "", n = Math.max(a.slides[r].getHeight(!0), n), k || (g += a.slides[r].getHeight(!0));
                        s = n;
                        a.height = s;
                        k ? g = s : (l = s, a.container.style.height = l + "px")
                    } else s = k ? a.height : a.height / b.slidesPerView, g = k ? a.height : a.slides.length * s;
                    f = k ? a.width / b.slidesPerView :
                        a.width;
                    n = k ? a.slides.length * f : a.width;
                    p = k ? f : s;
                    0 < b.offsetSlidesBefore && (k ? a.wrapperLeft = p * b.offsetSlidesBefore : a.wrapperTop = p * b.offsetSlidesBefore);
                    0 < b.offsetSlidesAfter && (k ? a.wrapperRight = p * b.offsetSlidesAfter : a.wrapperBottom = p * b.offsetSlidesAfter);
                    0 < b.offsetPxBefore && (k ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (k ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (k ? (a.wrapperLeft = (l - p) / 2, a.wrapperRight = (l - p) / 2) : (a.wrapperTop =
                        (l - p) / 2, a.wrapperBottom = (l - p) / 2));
                    k ? (0 < a.wrapperLeft && (e.style.paddingLeft = a.wrapperLeft + "px"), 0 < a.wrapperRight && (e.style.paddingRight = a.wrapperRight + "px")) : (0 < a.wrapperTop && (e.style.paddingTop = a.wrapperTop + "px"), 0 < a.wrapperBottom && (e.style.paddingBottom = a.wrapperBottom + "px"));
                    y = k ? n + a.wrapperRight + a.wrapperLeft : g + a.wrapperTop + a.wrapperBottom;
                    e.style.width = n + "px";
                    e.style.height = g + "px";
                    m = 0;
                    a.snapGrid = [];
                    a.slidesGrid = [];
                    for (r = 0; r < a.slides.length; r++) a.snapGrid.push(m), a.slidesGrid.push(m), m += p, a.slides[r].style.width =
                        f + "px", a.slides[r].style.height = s + "px"
                }
                if (a.initialized) {
                    if (a.callPlugins("onInit"), b.onFirstInit) b.onInit(a)
                } else if (a.callPlugins("onFirstInit"), b.onFirstInit) b.onFirstInit(a);
                a.initialized = !0
            }
        };
        a.reInit = function (b) {
            a.init(!0, b)
        };
        a.resizeFix = function (c) {
            a.callPlugins("beforeResizeFix");
            a.init(b.resizeReInit || c);
            if (!b.freeMode) b.loop ? a.swipeTo(a.activeLoopIndex, 0, !1) : a.swipeTo(a.activeIndex, 0, !1);
            else if ((k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y")) < -h()) {
                c = k ? -h() : 0;
                var d = k ? 0 : -h();
                a.setWrapperTransition(0);
                a.setWrapperTranslate(c, d, 0)
            }
            a.callPlugins("afterResizeFix")
        };
        a.destroy = function (c) {
            a.browser.ie10 ? (a.h.removeEventListener(a.wrapper, a.touchEvents.touchStart, z, !1), a.h.removeEventListener(document, a.touchEvents.touchMove, A, !1), a.h.removeEventListener(document, a.touchEvents.touchEnd, B, !1)) : (a.support.touch && (a.h.removeEventListener(a.wrapper, "touchstart", z, !1), a.h.removeEventListener(a.wrapper, "touchmove", A, !1), a.h.removeEventListener(a.wrapper, "touchend", B, !1)), b.simulateTouch && (a.h.removeEventListener(a.wrapper,
                "mousedown", z, !1), a.h.removeEventListener(document, "mousemove", A, !1), a.h.removeEventListener(document, "mouseup", B, !1)));
            b.autoResize && a.h.removeEventListener(window, "resize", a.resizeFix, !1);
            v();
            b.paginationClickable && U();
            b.mousewheelControl && a._wheelEvent && a.h.removeEventListener(a.container, a._wheelEvent, N, !1);
            b.keyboardControl && a.h.removeEventListener(document, "keydown", O, !1);
            b.autoplay && a.stopAutoplay();
            a.callPlugins("onDestroy");
            a = null
        };
        b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor =
            "grab", a.container.style.cursor = "-moz-grab", a.container.style.cursor = "-webkit-grab");
        a.allowSlideClick = !0;
        a.allowLinks = !0;
        var u = !1,
            M, G = !0,
            D, H;
        a.swipeNext = function (c) {
            !c && b.loop && a.fixLoop();
            a.callPlugins("onSwipeNext");
            var d = c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            if ("auto" == b.slidesPerView)
                for (var e = 0; e < a.snapGrid.length; e++) {
                    if (-c >= a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = -a.snapGrid[e + 1];
                        break
                    }
                } else d = p * b.slidesPerGroup, d = -(Math.floor(Math.abs(c) / Math.floor(d)) * d + d);
            d < -h() && (d = -h());
            if (d == c) return !1;
            I(d, "next");
            return !0
        };
        a.swipePrev = function (c) {
            !c && b.loop && a.fixLoop();
            !c && b.autoplay && a.stopAutoplay();
            a.callPlugins("onSwipePrev");
            c = Math.ceil(k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"));
            var d;
            if ("auto" == b.slidesPerView) {
                d = 0;
                for (var e = 1; e < a.snapGrid.length; e++) {
                    if (-c == a.snapGrid[e]) {
                        d = -a.snapGrid[e - 1];
                        break
                    }
                    if (-c > a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = -a.snapGrid[e];
                        break
                    }
                }
            } else d = p * b.slidesPerGroup, d *= -(Math.ceil(-c / d) - 1);
            0 < d && (d = 0);
            if (d == c) return !1;
            I(d, "prev");
            return !0
        };
        a.swipeReset = function () {
            a.callPlugins("onSwipeReset");
            var c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"),
                d = p * b.slidesPerGroup;
            h();
            if ("auto" == b.slidesPerView) {
                for (var e = d = 0; e < a.snapGrid.length; e++) {
                    if (-c === a.snapGrid[e]) return;
                    if (-c >= a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = 0 < a.positions.diff ? -a.snapGrid[e + 1] : -a.snapGrid[e];
                        break
                    }
                } - c >= a.snapGrid[a.snapGrid.length - 1] && (d = -a.snapGrid[a.snapGrid.length - 1]);
                c <= -h() && (d = -h())
            } else d = 0 > c ? Math.round(c / d) * d : 0;
            b.scrollContainer && (d = 0 > c ? c : 0);
            d < -h() &&
                (d = -h());
            b.scrollContainer && l > p && (d = 0);
            if (d == c) return !1;
            I(d, "reset");
            return !0
        };
        a.swipeTo = function (c, d, e) {
            c = parseInt(c, 10);
            a.callPlugins("onSwipeTo", {
                index: c,
                speed: d
            });
            b.loop && (c += a.loopedSlides);
            var f = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            if (!(c > a.slides.length - 1 || 0 > c)) {
                var g;
                g = "auto" == b.slidesPerView ? -a.slidesGrid[c] : -c * p;
                g < -h() && (g = -h());
                if (g == f) return !1;
                I(g, "to", {
                    index: c,
                    speed: d,
                    runCallbacks: !1 === e ? !1 : !0
                });
                return !0
            }
        };
        a._queueStartCallbacks = !1;
        a._queueEndCallbacks = !1;
        a.updateActiveSlide =
            function (c) {
                if (a.initialized && 0 != a.slides.length) {
                    a.previousIndex = a.activeIndex;
                    0 < c && (c = 0);
                    "undefined" == typeof c && (c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"));
                    if ("auto" == b.slidesPerView) {
                        if (a.activeIndex = a.slidesGrid.indexOf(-c), 0 > a.activeIndex) {
                            for (var d = 0; d < a.slidesGrid.length - 1 && !(-c > a.slidesGrid[d] && -c < a.slidesGrid[d + 1]); d++);
                            var e = Math.abs(a.slidesGrid[d] + c),
                                f = Math.abs(a.slidesGrid[d + 1] + c);
                            a.activeIndex = e <= f ? d : d + 1
                        }
                    } else a.activeIndex = b.visibilityFullFit ? Math.ceil(-c / p) : Math.round(-c /
                        p);
                    a.activeIndex == a.slides.length && (a.activeIndex = a.slides.length - 1);
                    0 > a.activeIndex && (a.activeIndex = 0);
                    if (a.slides[a.activeIndex]) {
                        a.calcVisibleSlides(c);
                        e = RegExp("\\s*" + b.slideActiveClass);
                        f = RegExp("\\s*" + b.slideVisibleClass);
                        for (d = 0; d < a.slides.length; d++) a.slides[d].className = a.slides[d].className.replace(e, "").replace(f, ""), 0 <= a.visibleSlides.indexOf(a.slides[d]) && (a.slides[d].className += " " + b.slideVisibleClass);
                        a.slides[a.activeIndex].className += " " + b.slideActiveClass;
                        b.loop ? (d = a.loopedSlides,
                            a.activeLoopIndex = a.activeIndex - d, a.activeLoopIndex >= a.slides.length - 2 * d && (a.activeLoopIndex = a.slides.length - 2 * d - a.activeLoopIndex), 0 > a.activeLoopIndex && (a.activeLoopIndex = a.slides.length - 2 * d + a.activeLoopIndex)) : a.activeLoopIndex = a.activeIndex;
                        b.pagination && a.updatePagination(c)
                    }
                }
            };
        a.createPagination = function (c) {
            b.paginationClickable && a.paginationButtons && U();
            var d = "",
                e = a.slides.length;
            b.loop && (e -= 2 * a.loopedSlides);
            for (var f = 0; f < e; f++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass +
                '"></' + b.paginationElement + ">";
            a.paginationContainer = b.pagination.nodeType ? b.pagination : g(b.pagination)[0];
            a.paginationContainer.innerHTML = d;
            a.paginationButtons = [];
            document.querySelectorAll ? a.paginationButtons = a.paginationContainer.querySelectorAll("." + b.paginationElementClass) : window.jQuery && (a.paginationButtons = g(a.paginationContainer).find("." + b.paginationElementClass));
            c || a.updatePagination();
            a.callPlugins("onCreatePagination");
            if (b.paginationClickable)
                for (c = a.paginationButtons, d = 0; d < c.length; d++) a.h.addEventListener(c[d],
                    "click", V, !1)
        };
        a.updatePagination = function (c) {
            if (b.pagination && !(1 > a.slides.length)) {
                if (document.querySelectorAll) var d = a.paginationContainer.querySelectorAll("." + b.paginationActiveClass);
                else window.jQuery && (d = g(a.paginationContainer).find("." + b.paginationActiveClass));
                if (d && (d = a.paginationButtons, 0 != d.length)) {
                    for (var e = 0; e < d.length; e++) d[e].className = b.paginationElementClass;
                    var f = b.loop ? a.loopedSlides : 0;
                    if (b.paginationAsRange) {
                        a.visibleSlides || a.calcVisibleSlides(c);
                        c = [];
                        for (e = 0; e < a.visibleSlides.length; e++) {
                            var h =
                                a.slides.indexOf(a.visibleSlides[e]) - f;
                            b.loop && 0 > h && (h = a.slides.length - 2 * a.loopedSlides + h);
                            b.loop && h >= a.slides.length - 2 * a.loopedSlides && (h = a.slides.length - 2 * a.loopedSlides - h, h = Math.abs(h));
                            c.push(h)
                        }
                        for (e = 0; e < c.length; e++) d[c[e]] && (d[c[e]].className += " " + b.paginationVisibleClass);
                        b.loop ? d[a.activeLoopIndex].className += " " + b.paginationActiveClass : d[a.activeIndex].className += " " + b.paginationActiveClass
                    } else b.loop ? d[a.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass :
                        d[a.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
                }
            }
        };
        a.calcVisibleSlides = function (c) {
            var d = [],
                e = 0,
                f = 0,
                g = 0;
            k && 0 < a.wrapperLeft && (c += a.wrapperLeft);
            !k && 0 < a.wrapperTop && (c += a.wrapperTop);
            for (var h = 0; h < a.slides.length; h++) {
                var e = e + f,
                    f = "auto" == b.slidesPerView ? k ? a.h.getWidth(a.slides[h], !0) : a.h.getHeight(a.slides[h], !0) : p,
                    g = e + f,
                    m = !1;
                b.visibilityFullFit ? (e >= -c && g <= -c + l && (m = !0), e <= -c && g >= -c + l && (m = !0)) : (g > -c && g <= -c + l && (m = !0), e >= -c && e < -c + l && (m = !0), e < -c && g > -c + l && (m = !0));
                m &&
                    d.push(a.slides[h])
            }
            0 == d.length && (d = [a.slides[a.activeIndex]]);
            a.visibleSlides = d
        };
        a.autoPlayIntervalId = void 0;
        a.startAutoplay = function () {
            if ("undefined" !== typeof a.autoPlayIntervalId) return !1;
            b.autoplay && !b.loop && (a.autoPlayIntervalId = setInterval(function () {
                a.swipeNext(!0) || a.swipeTo(0)
            }, b.autoplay));
            b.autoplay && b.loop && (a.autoPlayIntervalId = setInterval(function () {
                a.swipeNext()
            }, b.autoplay));
            a.callPlugins("onAutoplayStart")
        };
        a.stopAutoplay = function () {
            a.autoPlayIntervalId && clearInterval(a.autoPlayIntervalId);
            a.autoPlayIntervalId = void 0;
            a.callPlugins("onAutoplayStop")
        };
        a.loopCreated = !1;
        a.removeLoopedSlides = function () {
            if (a.loopCreated)
                for (var b = 0; b < a.slides.length; b++) !0 === a.slides[b].getData("looped") && a.wrapper.removeChild(a.slides[b])
        };
        a.createLoop = function () {
            if (0 != a.slides.length) {
                a.loopedSlides = b.slidesPerView + b.loopAdditionalSlides;
                for (var c = "", d = "", e = 0; e < a.loopedSlides; e++) c += a.slides[e].outerHTML;
                for (e = a.slides.length - a.loopedSlides; e < a.slides.length; e++) d += a.slides[e].outerHTML;
                J.innerHTML = d + J.innerHTML +
                    c;
                a.loopCreated = !0;
                a.calcSlides();
                for (e = 0; e < a.slides.length; e++)(e < a.loopedSlides || e >= a.slides.length - a.loopedSlides) && a.slides[e].setData("looped", !0);
                a.callPlugins("onCreateLoop")
            }
        };
        a.fixLoop = function () {
            if (a.activeIndex < a.loopedSlides) {
                var c = a.slides.length - 3 * a.loopedSlides + a.activeIndex;
                a.swipeTo(c, 0, !1)
            } else a.activeIndex > a.slides.length - 2 * b.slidesPerView && (c = -a.slides.length + a.activeIndex + a.loopedSlides, a.swipeTo(c, 0, !1))
        };
        a.loadSlides = function () {
            var c = "";
            a.activeLoaderIndex = 0;
            for (var d = b.loader.slides,
                    e = b.loader.loadAllSlides ? d.length : b.slidesPerView * (1 + b.loader.surroundGroups), f = 0; f < e; f++) c = "outer" == b.loader.slidesHTMLType ? c + d[f] : c + ("<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + f + '">' + d[f] + "</" + b.slideElement + ">");
            a.wrapper.innerHTML = c;
            a.calcSlides(!0);
            b.loader.loadAllSlides || a.wrapperTransitionEnd(a.reloadSlides, !0)
        };
        a.reloadSlides = function () {
            var c = b.loader.slides,
                d = parseInt(a.activeSlide().data("swiperindex"), 10);
            if (!(0 > d || d > c.length - 1)) {
                a.activeLoaderIndex = d;
                var e = Math.max(0,
                        d - b.slidesPerView * b.loader.surroundGroups),
                    f = Math.min(d + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, c.length - 1);
                0 < d && (d = -p * (d - e), k ? a.setWrapperTranslate(d, 0, 0) : a.setWrapperTranslate(0, d, 0), a.setWrapperTransition(0));
                if ("reload" === b.loader.logic) {
                    for (var g = a.wrapper.innerHTML = "", d = e; d <= f; d++) g += "outer" == b.loader.slidesHTMLType ? c[d] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + d + '">' + c[d] + "</" + b.slideElement + ">";
                    a.wrapper.innerHTML = g
                } else {
                    for (var g = 1E3, h = 0, d = 0; d < a.slides.length; d++) {
                        var l =
                            a.slides[d].data("swiperindex");
                        l < e || l > f ? a.wrapper.removeChild(a.slides[d]) : (g = Math.min(l, g), h = Math.max(l, h))
                    }
                    for (d = e; d <= f; d++) d < g && (e = document.createElement(b.slideElement), e.className = b.slideClass, e.setAttribute("data-swiperindex", d), e.innerHTML = c[d], a.wrapper.insertBefore(e, a.wrapper.firstChild)), d > h && (e = document.createElement(b.slideElement), e.className = b.slideClass, e.setAttribute("data-swiperindex", d), e.innerHTML = c[d], a.wrapper.appendChild(e))
                }
                a.reInit(!0)
            }
        };
        a.calcSlides();
        0 < b.loader.slides.length &&
            0 == a.slides.length && a.loadSlides();
        b.loop && a.createLoop();
        a.init();
        n();
        b.pagination && b.createPagination && a.createPagination(!0);
        b.loop || 0 < b.initialSlide ? a.swipeTo(b.initialSlide, 0, !1) : a.updateActiveSlide(0);
        b.autoplay && a.startAutoplay()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function (f, b) {
        function g() {
            f(h);
            h.params.queueEndCallbacks && (h._queueEndCallbacks = !1);
            if (!b)
                for (var v = 0; v < t.length; v++) h.h.removeEventListener(n, t[v], g, !1)
        }
        var h = this,
            n = h.wrapper,
            t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (f)
            for (var v = 0; v < t.length; v++) h.h.addEventListener(n, t[v], g, !1)
    },
    getWrapperTranslate: function (f) {
        var b = this.wrapper,
            g, h, n = window.WebKitCSSMatrix ? new WebKitCSSMatrix(window.getComputedStyle(b,
                null).webkitTransform) : window.getComputedStyle(b, null).MozTransform || window.getComputedStyle(b, null).OTransform || window.getComputedStyle(b, null).MsTransform || window.getComputedStyle(b, null).msTransform || window.getComputedStyle(b, null).transform || window.getComputedStyle(b, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        g = n.toString().split(",");
        this.params.useCSS3Transforms ? ("x" == f && (h = 16 == g.length ? parseFloat(g[12]) : window.WebKitCSSMatrix ? n.m41 : parseFloat(g[4])), "y" ==
            f && (h = 16 == g.length ? parseFloat(g[13]) : window.WebKitCSSMatrix ? n.m42 : parseFloat(g[5]))) : ("x" == f && (h = parseFloat(b.style.left, 10) || 0), "y" == f && (h = parseFloat(b.style.top, 10) || 0));
        return h || 0
    },
    setWrapperTranslate: function (f, b, g) {
        var h = this.wrapper.style;
        f = f || 0;
        b = b || 0;
        g = g || 0;
        this.params.useCSS3Transforms ? this.support.transforms3d ? h.webkitTransform = h.MsTransform = h.msTransform = h.MozTransform = h.OTransform = h.transform = "translate3d(" + f + "px, " + b + "px, " + g + "px)" : (h.webkitTransform = h.MsTransform = h.msTransform = h.MozTransform =
            h.OTransform = h.transform = "translate(" + f + "px, " + b + "px)", this.support.transforms || (h.left = f + "px", h.top = b + "px")) : (h.left = f + "px", h.top = b + "px");
        this.callPlugins("onSetWrapperTransform", {
            x: f,
            y: b,
            z: g
        })
    },
    setWrapperTransition: function (f) {
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = f / 1E3 + "s";
        this.callPlugins("onSetWrapperTransition", {
            duration: f
        })
    },
    h: {
        getWidth: function (f, b) {
            var g = window.getComputedStyle(f,
                    null).getPropertyValue("width"),
                h = parseFloat(g);
            if (isNaN(h) || 0 < g.indexOf("%")) h = f.offsetWidth - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-right"));
            b && (h += parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-right")));
            return h
        },
        getHeight: function (f, b) {
            if (b) return f.offsetHeight;
            var g = window.getComputedStyle(f,
                    null).getPropertyValue("height"),
                h = parseFloat(g);
            if (isNaN(h) || 0 < g.indexOf("%")) h = f.offsetHeight - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-bottom"));
            b && (h += parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-bottom")));
            return h
        },
        getOffset: function (f) {
            var b = f.getBoundingClientRect(),
                g = document.body,
                h = f.clientTop ||
                g.clientTop || 0,
                g = f.clientLeft || g.clientLeft || 0,
                n = window.pageYOffset || f.scrollTop;
            f = window.pageXOffset || f.scrollLeft;
            document.documentElement && !window.pageYOffset && (n = document.documentElement.scrollTop, f = document.documentElement.scrollLeft);
            return {
                top: b.top + n - h,
                left: b.left + f - g
            }
        },
        windowWidth: function () {
            if (window.innerWidth) return window.innerWidth;
            if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth
        },
        windowHeight: function () {
            if (window.innerHeight) return window.innerHeight;
            if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight
        },
        windowScroll: function () {
            if ("undefined" != typeof pageYOffset) return {
                left: window.pageXOffset,
                top: window.pageYOffset
            };
            if (document.documentElement) return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        },
        addEventListener: function (f, b, g, h) {
            f.addEventListener ? f.addEventListener(b, g, h) : f.attachEvent && f.attachEvent("on" + b, g)
        },
        removeEventListener: function (f, b, g, h) {
            f.removeEventListener ?
                f.removeEventListener(b, g, h) : f.detachEvent && f.detachEvent("on" + b, g)
        }
    },
    setTransform: function (f, b) {
        var g = f.style;
        g.webkitTransform = g.MsTransform = g.msTransform = g.MozTransform = g.OTransform = g.transform = b
    },
    setTranslate: function (f, b) {
        var g = f.style,
            h = b.x || 0,
            n = b.y || 0,
            t = b.z || 0;
        g.webkitTransform = g.MsTransform = g.msTransform = g.MozTransform = g.OTransform = g.transform = this.support.transforms3d ? "translate3d(" + h + "px," + n + "px," + t + "px)" : "translate(" + h + "px," + n + "px)";
        this.support.transforms || (g.left = h + "px", g.top = n + "px")
    },
    setTransition: function (f, b) {
        var g = f.style;
        g.webkitTransitionDuration = g.MsTransitionDuration = g.msTransitionDuration = g.MozTransitionDuration = g.OTransitionDuration = g.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && !0 === Modernizr.touch || function () {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function () {
            var f = document.createElement("div");
            return "webkitPerspective" in f.style || "MozPerspective" in
                f.style || "OPerspective" in f.style || "MsPerspective" in f.style || "perspective" in f.style
        }(),
        transforms: window.Modernizr && !0 === Modernizr.csstransforms || function () {
            var f = document.createElement("div").style;
            return "transform" in f || "WebkitTransform" in f || "MozTransform" in f || "msTransform" in f || "MsTransform" in f || "OTransform" in f
        }(),
        transitions: window.Modernizr && !0 === Modernizr.csstransitions || function () {
            var f = document.createElement("div").style;
            return "transition" in f || "WebkitTransition" in f || "MozTransition" in
                f || "msTransition" in f || "MsTransition" in f || "OTransition" in f
        }()
    },
    browser: {
        ie8: function () {
            var f = -1;
            "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (f = parseFloat(RegExp.$1));
            return -1 != f && 9 > f
        }(),
        ie10: window.navigator.msPointerEnabled
    }
};
(window.jQuery || window.Zepto) && function (f) {
    f.fn.swiper = function (b) {
        b = new Swiper(f(this)[0], b);
        f(this).data("swiper", b);
        return b
    }
}(window.jQuery || window.Zepto);
"undefined" !== typeof module && (module.exports = Swiper);
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();
var Intense = (function () {
    'use strict';
    var KEYCODE_ESC = 27;
    var mouse = {
        xCurr: 0,
        yCurr: 0,
        xDest: 0,
        yDest: 0
    };
    var horizontalOrientation = true;
    var looper;
    var lastPosition, currentPosition = 0;
    var sourceDimensions, target;
    var targetDimensions = {
        w: 0,
        h: 0
    };
    var container;
    var containerDimensions = {
        w: 0,
        h: 0
    };
    var overflowArea = {
        x: 0,
        y: 0
    };
    var overflowValue;

    function extend(target, source) {
        for (var key in source)
            if (!(key in target))
                target[key] = source[key];
        return target;
    }

    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    function getFit(
        source) {
        var heightRatio = window.innerHeight / source.h;
        if ((source.w * heightRatio) > window.innerWidth) {
            return {
                w: source.w * heightRatio,
                h: source.h * heightRatio,
                fit: true
            };
        } else {
            var widthRatio = window.innerWidth / source.w;
            return {
                w: source.w * widthRatio,
                h: source.h * widthRatio,
                fit: false
            };
        }
    }

    function startTracking(passedElements) {
        var i;
        if (passedElements.length) {
            for (i = 0; i < passedElements.length; i++) {
                track(passedElements[i]);
            }
        } else {
            track(passedElements);
        }
    }

    function track(element) {
        if (element.src) {
            element.addEventListener('click', function () {
                init(this);
            }, false);
        }
    }

    function start() {
        loop();
    }

    function stop() {
        cancelRequestAnimFrame(looper);
    }

    function loop() {
        looper = requestAnimFrame(loop);
        positionTarget();
    }

    function lockBody() {
        overflowValue = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }

    function unlockBody() {
        document.body.style.overflow = overflowValue;
    }

    function createViewer(title, caption) {
        var containerProperties = {
            'backgroundColor': 'rgba(0,0,0,0.8)',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'top': '0px',
            'left': '0px',
            'overflow': 'hidden',
            'zIndex': '999999',
            'margin': '0px',
            'webkitTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'MozTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'transition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'opacity': '0'
        }
        container = document.createElement('figure');
        container.appendChild(target);
        applyProperties(container, containerProperties);

        var imageProperties = {
            'cursor': 'url( "'
        }
        applyProperties(target, imageProperties);
        var captionContainerProperties = {
            'fontFamily': 'Georgia, Times, "Times New Roman", serif',
            'position': 'fixed',
            'bottom': '0px',
            'left': '0px',
            'padding': '20px',
            'color': '#fff',
            'wordSpacing': '0.2px',
            'webkitFontSmoothing': 'antialiased',
            'textShadow': '-1px 0px 1px rgba(0,0,0,0.4)'
        }
        var captionContainer = document.createElement('figcaption');
        applyProperties(captionContainer, captionContainerProperties);
        if (title) {
            var captionTitleProperties = {
                'margin': '0px',
                'padding': '0px',
                'fontWeight': 'normal',
                'fontSize': '40px',
                'letterSpacing': '0.5px',
                'lineHeight': '35px',
                'textAlign': 'left'
            }
            var captionTitle = document.createElement('h1');
            applyProperties(captionTitle, captionTitleProperties);
            captionTitle.innerHTML = title;
            captionContainer.appendChild(captionTitle);
        }
        if (caption) {
            var captionTextProperties = {
                'margin': '0px',
                'padding': '0px',
                'fontWeight': 'normal',
                'fontSize': '20px',
                'letterSpacing': '0.1px',
                'maxWidth': '500px',
                'textAlign': 'left',
                'background': 'none',
                'marginTop': '5px'
            }
            var captionText = document.createElement('h2');
            applyProperties(captionText, captionTextProperties);
            captionText.innerHTML = caption;
            captionContainer.appendChild(captionText);
        }
        container.appendChild(captionContainer);
        setDimensions();
        mouse.xCurr = mouse.xDest = window.innerWidth / 2;
        mouse.yCurr = mouse.yDest = window.innerHeight / 2;
        document.body.appendChild(container);
        setTimeout(function () {
            container.style['opacity'] = '1';
        }, 10);
    }

    function removeViewer() {
        unlockBody();
        unbindEvents();
        stop();
        document.body.removeChild(container);
    }

    function setDimensions() {
        var imageDimensions = getFit(sourceDimensions);
        target.width = imageDimensions.w;
        target.height = imageDimensions.h;
        horizontalOrientation = imageDimensions.fit;
        targetDimensions = {
            w: target.width,
            h: target.height
        };
        containerDimensions = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        overflowArea = {
            x: containerDimensions.w - targetDimensions.w,
            y: containerDimensions.h - targetDimensions.h
        };
    }

    function init(element) {
        var imageSource = element.src;
        var title = element.getAttribute('data-title');
        var caption = element.getAttribute('data-caption');
        var img = new Image();
        img.onload = function () {
            sourceDimensions = {
                w: img.width,
                h: img.height
            };
            target = this;
            createViewer(title, caption);
            lockBody();
            bindEvents();
            loop();
        }
        img.src = imageSource;
    }

    function bindEvents() {
        container.addEventListener('mousemove', onMouseMove, false);
        container.addEventListener('touchmove', onTouchMove, false);
        window.addEventListener('resize', setDimensions, false);
        window.addEventListener('keyup', onKeyUp, false);
        target.addEventListener('click', removeViewer, false);
    }

    function unbindEvents() {
        container.removeEventListener('mousemove', onMouseMove, false);
        container.removeEventListener('touchmove', onTouchMove, false);
        window.removeEventListener('resize', setDimensions, false);
        window.removeEventListener('keyup', onKeyUp, false);
        target.removeEventListener('click', removeViewer, false)
    }

    function onMouseMove(event) {
        mouse.xDest = event.clientX;
        mouse.yDest = event.clientY;
    }

    function onTouchMove(event) {
        event.preventDefault();
        mouse.xDest = event.touches[0].clientX;
        mouse.yDest = event.touches[0].clientY;
    }

    function onKeyUp(event) {
        event.preventDefault();
        if (event.keyCode === KEYCODE_ESC) {
            removeViewer();
        }
    }

    function positionTarget() {
        mouse.xCurr += (mouse.xDest - mouse.xCurr) * 0.05;
        mouse.yCurr += (mouse.yDest - mouse.yCurr) * 0.05;
        if (horizontalOrientation === true) {
            currentPosition += (mouse.xCurr - currentPosition);
            if (mouse.xCurr !== lastPosition) {
                var position = parseFloat(currentPosition / containerDimensions.w);
                position = overflowArea.x * position;
                target.style['webkitTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                target.style['MozTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                target.style['msTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                lastPosition = mouse.xCurr;
            }
        } else if (horizontalOrientation === false) {
            currentPosition += (mouse.yCurr - currentPosition);
            if (mouse.yCurr !== lastPosition) {
                var position = parseFloat(currentPosition / containerDimensions.h);
                position = overflowArea.y * position;
                target.style['webkitTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                target.style['MozTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                target.style['msTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                lastPosition = mouse.yCurr;
            }
        }
    }

    function main(element) {
        if (!element) {
            throw 'You need to pass an element!';
        }
        startTracking(element);
    }
    return extend(main, {
        resize: setDimensions,
        start: start,
        stop: stop
    });

})();
(function ($) {
    $.fn.extend({
        socialShare: function (options) {
            var defaults = {
                social: '',
                title: document.title,
                shareUrl: window.location.href,
                description: $('meta[name="description"]').attr('content'),
                animation: 'launchpad',
                chainAnimationSpeed: 100,
                whenSelect: false,
                selectContainer: '',
                blur: false
            };
            var options = $.extend(true, defaults, options);
            var beforeDivs = '<div class="arthref arthrefSocialShare"><div class="overla ' + options.animation + '"><div class="icon-container"><div class="centered"><ul>';
            var afterDivs = '</ul></div></div></div></div>';
            return this.each(function () {
                var o = options;
                var obj = $(this);
                if (o.whenSelect) {
                    $(o.selectContainer).mouseup(function (e) {
                        var selection = getSelected();
                        if (selection && (selection = new String(selection).replace(/^\s+|\s+$/g, ''))) {
                            options.title = selection
                        }
                    })
                }
                obj.click(function () {
                    createContainer();
                    if (o.blur) {}
                    setTimeout(function () {;
                        $('.arthrefSocialShare').find('ul').addClass('active');
                        if (o.animation == 'chain') chainAnimation($('.arthrefSocialShare').find('li'), o.chainAnimationSpeed, '1')
                    }, 0)
                });
                $(document).on("click touchstart", ".arthrefSocialShare .overlay", function (e) {
                    destroyContainer(o)
                });
                $(document).on("keydown", function (e) {
                    if (e.keyCode == 27) destroyContainer(o)
                });
                $(document).on("click touchstart", ".arthrefSocialShare li", function (e) {
                    e.stopPropagation()
                })
            });

            function getSelected() {
                if (window.getSelection) {
                    return window.getSelection()
                } else if (document.getSelection) {
                    return document.getSelection()
                } else {
                    var selection = document.selection && document.selection.createRange();
                    if (selection.text) {
                        return selection.text
                    }
                    return false
                }
                return false
            };

            function chainAnimation(e, s, o) {
                var $fade = $(e);
                $fade.each(function (i) {
                    $(this).delay(i * s).fadeTo(s, o)
                })
            };

            function createContainer() {
                var siteSettings = {
                    'blogger': {
                        text: 'Blogger',
                        className: 'aBlogger',
                        url: 'http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}'
                    },
                    'delicious': {
                        text: 'Delicious',
                        className: 'aDelicious',
                        url: 'http://del.icio.us/post?url={u}&amp;title={t}'
                    },
                    'digg': {
                        text: 'aDigg',
                        className: 'Digg',
                        url: 'http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}'
                    },
                    'facebook': {
                        text: 'Facebook',
                        className: 'aFacebook',
                        url: 'http://www.facebook.com/sharer.php?u={u}&amp;t={t}'
                    },
                    'friendfeed': {
                        text: 'FriendFeed',
                        className: 'aFriendFeed',
                        url: 'http://friendfeed.com/share?url={u}&amp;title={t}'
                    },
                    'google': {
                        text: 'Google Plus',
                        className: 'aGooglePlus',
                        url: 'https://plus.google.com/share?url={u}'
                    },
                    'linkedin': {
                        text: 'LinkedIn',
                        className: 'aLinkedIn',
                        url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source='
                    },
                    'myspace': {
                        text: 'MySpace',
                        className: 'aMySpace',
                        url: 'http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}'
                    },
                    'pinterest': {
                        text: 'Pinterest',
                        className: 'aPinterest',
                        url: 'http://pinterest.com/pin/create/button/?url={u}&amp;description={d}'
                    },
                    'reddit': {
                        text: 'Reddit',
                        className: 'aReddit',
                        url: 'http://reddit.com/submit?url={u}&amp;title={t}'
                    },
                    'stumbleupon': {
                        text: 'StumbleUpon',
                        className: 'aStumbleUpon',
                        url: 'http://www.stumbleupon.com/submit?url={u}&amp;title={t}'
                    },
                    'tumblr': {
                        text: 'Tumblr',
                        className: 'aTumblr',
                        url: 'http://www.tumblr.com/share/link?url={u}&name={t}&description={d}'
                    },
                    'twitter': {
                        text: 'Twitter',
                        className: 'aTwitter',
                        url: 'http://twitter.com/home?status={t}%20{u}'
                    },
                    'windows': {
                        text: 'Windows',
                        className: 'aWindows',
                        url: 'http://profile.live.com/badge?url={u}'
                    },
                    'yahoo': {
                        text: 'Yahoo',
                        className: 'aYahoo',
                        url: 'http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}'
                    }
                };
                var sites = options.social.split(',');
                var listItem = '';
                for (var i = 0; i <= sites.length - 1; i++) {
                    siteSettings[sites[i]]['url'] = siteSettings[sites[i]]['url'].replace('{t}', encodeURIComponent(options.title)).replace('{u}', encodeURI(options.shareUrl)).replace('{d}', encodeURIComponent(options.description));
                    listItem += '<li><a href="' + siteSettings[sites[i]]['url'] + '" target="_blank" rel="nofollow" class="' + siteSettings[sites[i]]['className'] + '"></a><span class="transition">' + siteSettings[sites[i]]['text'] + '</span></li>'
                };
                $('.share-container').append(beforeDivs + listItem + afterDivs)
            }

            function destroyContainer(o) {
                if (o.blur) $('.share-container').children().removeClass('blurred');
                $('.arthrefSocialShare').find('.overlay').removeClass('active');
                $('.arthrefSocialShare').find('ul').removeClass('active');
                setTimeout(function () {
                    $('.arthrefSocialShare').remove()
                }, 300)
            }
        }
    })
})(jQuery);
(function ($) {
    var selectors = [];
    var check_binded = false;
    var check_lock = false;
    var defaults = {
        interval: 250,
        force_process: false
    };
    var $window = $(window);
    var $prior_appeared;

    function process() {
        check_lock = false;
        for (var index in selectors) {
            var $appeared = $(selectors[index]).filter(function () {
                return $(this).is(':appeared');
            });
            $appeared.trigger('appear', [$appeared]);
            if ($prior_appeared) {
                var $disappeared = $prior_appeared.not($appeared);
                $disappeared.trigger('disappear', [$disappeared]);
            }
            $prior_appeared = $appeared;
        }
    }
    $.expr[':']['appeared'] = function (element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }
        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;
        if (top + $element.height() >= window_top && top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
            return true;
        } else {
            return false;
        }
    };
    $.fn.extend({
        appear: function (options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function () {
                    if (check_lock) {
                        return;
                    }
                    check_lock = true;
                    setTimeout(process, opts.interval);
                };
                $(window).scroll(on_check).resize(on_check);
                check_binded = true;
            }
            if (opts.force_process) {
                setTimeout(process, opts.interval);
            }
            selectors.push(selector);
            return $(selector);
        }
    });
    $.extend({
        force_appear: function () {
            if (check_binded) {
                process();
                return true;
            };
            return false;
        }
    });
})(jQuery);
if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {
    var
        loadAPI = function loadAPI(callback) {
            var tag = document.createElement('script'),
                head = document.getElementsByTagName('head')[0];
            tag.src = location.protocol + '//www.youtube.com/iframe_api';
            head.appendChild(tag);
            head = null;
            tag = null;

            iframeIsReady(callback);
        },
        iframeIsReady = function iframeIsReady(callback) {
            if (typeof YT === 'undefined' && typeof window.loadingPlayer === 'undefined') {
                window.loadingPlayer = true;
                window.dfd = $.Deferred();
                window.onYouTubeIframeAPIReady = function () {
                    window.onYouTubeIframeAPIReady = null;
                    window.dfd.resolve("John");
                    callback();
                };
            } else {
                window.dfd.done(function (name) {
                    callback();
                });
            }
        };
    YTPlayer = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: 'LSmgKRx5pBo',
            mute: true,
            repeat: true,
            width: $(window).width(),
            playButtonClass: 'YTPlayer-play',
            pauseButtonClass: 'YTPlayer-pause',
            muteButtonClass: 'YTPlayer-mute',
            volumeUpClass: 'YTPlayer-volume-up',
            volumeDownClass: 'YTPlayer-volume-down',
            start: 0,
            pauseOnScroll: false,
            fitToBackground: true,
            playerVars: {
                modestbranding: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            },
            events: null
        },
        init: function init(node, userOptions) {
            var self = this;
            self.userOptions = userOptions;
            self.$body = $('body'),
                self.$node = $(node),
                self.$window = $(window);
            self.defaults.events = {
                onReady: function (e) {
                    self.onPlayerReady(e);
                    if (self.options.pauseOnScroll) {
                        self.pauseOnScroll();
                    }
                    if (typeof self.options.callback == 'function') {
                        self.options.callback.call(this);
                    }
                },
                onStateChange: function (e) {
                    if (e.data === 1) {
                        self.$node.addClass('loaded');
                    } else if (e.data === 0 && self.options.repeat) {
                        self.player.seekTo(self.options.start);
                    }
                }
            }
            self.options = $.extend(true, {}, self.defaults, self.userOptions);
            self.ID = (new Date()).getTime();
            self.holderID = 'YTPlayer-ID-' + self.ID;
            if (self.options.fitToBackground) {
                self.createBackgroundVideo();
            } else {
                self.createContainerVideo();
            }
            self.$window.on('resize.YTplayer' + self.ID, function () {
                self.resize(self);
            });

            loadAPI(self.onYouTubeIframeAPIReady.bind(self));

            self.resize(self);

            return self;
        },
        pauseOnScroll: function pauseOnScroll() {
            var self = this;
            self.$window.on('scroll.YTplayer' + self.ID, function () {
                var state = self.player.getPlayerState();
                if (state === 1) {
                    self.player.pauseVideo();
                }
            });
            self.$window.scrollStopped(function () {
                var state = self.player.getPlayerState();
                if (state === 2) {
                    self.player.playVideo();
                }
            });
        },
        createContainerVideo: function createContainerVideo() {
            var self = this;
            var $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" >\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div> \
                                    </div> \
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        createBackgroundVideo: function createBackgroundVideo() {
            var self = this,
                $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        resize: function resize(self) {
            var container = $(window);

            if (!self.options.fitToBackground) {
                container = self.$node;
            }
            var width = container.width(),
                pWidth,
                height = container.height(),
                pHeight,
                $YTPlayerPlayer = $('#' + self.holderID);
            if (width / self.options.ratio < height) {
                pWidth = Math.ceil(height * self.options.ratio);
                $YTPlayerPlayer.width(pWidth).height(height).css({
                    left: (width - pWidth) / 2,
                    top: 0
                });
            } else {
                pHeight = Math.ceil(width / self.options.ratio); // get new player height
                $YTPlayerPlayer.width(width).height(pHeight).css({
                    left: 0,
                    top: 0
                });
            }
            $YTPlayerPlayer = null;
            container = null;
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
            var self = this;

            self.player = new window.YT.Player(self.holderID, {
                width: self.options.width,
                height: Math.ceil(self.options.width / self.options.ratio),
                videoId: self.options.videoId,
                playerVars: self.options.playerVars,
                events: self.options.events
            });
        },
        onPlayerReady: function onPlayerReady(e) {
            if (this.options.mute) {
                e.target.mute();
            }
            e.target.playVideo();
        },
        getPlayer: function getPlayer() {
            return this.player;
        },
        destroy: function destroy() {
            var self = this;
            self.$node
                .removeData('yt-init')
                .removeData('ytPlayer')
                .removeClass('loaded');
            self.$YTPlayerString.remove();
            $(window).off('resize.YTplayer' + self.ID);
            $(window).off('scroll.YTplayer' + self.ID);
            self.$body = null;
            self.$node = null;
            self.$YTPlayerString = null;
            self.player.destroy();
            self.player = null;
        }
    };
    $.fn.scrollStopped = function (callback) {
        var $this = $(this),
            self = this;
        $this.scroll(function () {
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, 250, self));
        });
    };
    $.fn.YTPlayer = function (options) {
        return this.each(function () {
            var el = this;
            $(el).data("yt-init", true);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };
})(jQuery, window, document);
