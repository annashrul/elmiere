!function(t, e) {
    for (var r in e)
        t[r] = e[r]
}(window, function(t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var a = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(a.exports, a, a.exports, r),
            a.l = !0,
            a.exports
    }
    return r.m = t,
        r.c = e,
        r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }),
                2 & e && "string" != typeof t)
                for (var a in t)
                    r.d(n, a, function(e) {
                        return t[e]
                    }
                        .bind(null, a));
            return n
        }
        ,
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
            ;
            return r.d(e, "a", e),
                e
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "",
        r(r.s = 475)
}({
    181: function(t, e, r) {
        var n;
        "undefined" != typeof self && self,
            n = function() {
                return function(t) {
                    var e = {};
                    function r(n) {
                        if (e[n])
                            return e[n].exports;
                        var a = e[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return t[n].call(a.exports, a, a.exports, r),
                            a.l = !0,
                            a.exports
                    }
                    return r.m = t,
                        r.c = e,
                        r.d = function(t, e, n) {
                            r.o(t, e) || Object.defineProperty(t, e, {
                                enumerable: !0,
                                get: n
                            })
                        }
                        ,
                        r.r = function(t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                                value: "Module"
                            }),
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                        }
                        ,
                        r.t = function(t, e) {
                            if (1 & e && (t = r(t)),
                                8 & e)
                                return t;
                            if (4 & e && "object" == typeof t && t && t.__esModule)
                                return t;
                            var n = Object.create(null);
                            if (r.r(n),
                                    Object.defineProperty(n, "default", {
                                        enumerable: !0,
                                        value: t
                                    }),
                                2 & e && "string" != typeof t)
                                for (var a in t)
                                    r.d(n, a, function(e) {
                                        return t[e]
                                    }
                                        .bind(null, a));
                            return n
                        }
                        ,
                        r.n = function(t) {
                            var e = t && t.__esModule ? function() {
                                    return t.default
                                }
                                : function() {
                                    return t
                                }
                            ;
                            return r.d(e, "a", e),
                                e
                        }
                        ,
                        r.o = function(t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e)
                        }
                        ,
                        r.p = "",
                        r(r.s = 1)
                }([function(t, e, r) {}
                    , function(t, e, r) {
                        "use strict";
                        r.r(e),
                            r(0);
                        var n = function() {
                            function t(t, e, r) {
                                this.lexer = void 0,
                                    this.start = void 0,
                                    this.end = void 0,
                                    this.lexer = t,
                                    this.start = e,
                                    this.end = r
                            }
                            return t.range = function(e, r) {
                                return r ? e && e.loc && r.loc && e.loc.lexer === r.loc.lexer ? new t(e.loc.lexer,e.loc.start,r.loc.end) : null : e && e.loc
                            }
                                ,
                                t
                        }()
                            , a = function() {
                            function t(t, e) {
                                this.text = void 0,
                                    this.loc = void 0,
                                    this.noexpand = void 0,
                                    this.treatAsRelax = void 0,
                                    this.text = t,
                                    this.loc = e
                            }
                            return t.prototype.range = function(e, r) {
                                return new t(r,n.range(this, e))
                            }
                                ,
                                t
                        }()
                            , i = function t(e, r) {
                            this.position = void 0;
                            var n, a = "KaTeX parse error: " + e, i = r && r.loc;
                            if (i && i.start <= i.end) {
                                var o = i.lexer.input;
                                n = i.start;
                                var s = i.end;
                                n === o.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
                                var l = o.slice(n, s).replace(/[^]/g, "$&̲");
                                a += (n > 15 ? "…" + o.slice(n - 15, n) : o.slice(0, n)) + l + (s + 15 < o.length ? o.slice(s, s + 15) + "…" : o.slice(s))
                            }
                            var h = new Error(a);
                            return h.name = "ParseError",
                                h.__proto__ = t.prototype,
                                h.position = n,
                                h
                        };
                        i.prototype.__proto__ = Error.prototype;
                        var o = i
                            , s = /([A-Z])/g
                            , l = {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#x27;"
                        }
                            , h = /[&><"']/g
                            , m = function t(e) {
                            return "ordgroup" === e.type || "color" === e.type ? 1 === e.body.length ? t(e.body[0]) : e : "font" === e.type ? t(e.body) : e
                        }
                            , c = {
                            contains: function(t, e) {
                                return -1 !== t.indexOf(e)
                            },
                            deflt: function(t, e) {
                                return void 0 === t ? e : t
                            },
                            escape: function(t) {
                                return String(t).replace(h, (function(t) {
                                        return l[t]
                                    }
                                ))
                            },
                            hyphenate: function(t) {
                                return t.replace(s, "-$1").toLowerCase()
                            },
                            getBaseElem: m,
                            isCharacterBox: function(t) {
                                var e = m(t);
                                return "mathord" === e.type || "textord" === e.type || "atom" === e.type
                            },
                            protocolFromUrl: function(t) {
                                var e = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(t);
                                return null != e ? e[1] : "_relative"
                            }
                        }
                            , u = function() {
                            function t(t) {
                                this.displayMode = void 0,
                                    this.output = void 0,
                                    this.leqno = void 0,
                                    this.fleqn = void 0,
                                    this.throwOnError = void 0,
                                    this.errorColor = void 0,
                                    this.macros = void 0,
                                    this.minRuleThickness = void 0,
                                    this.colorIsTextColor = void 0,
                                    this.strict = void 0,
                                    this.trust = void 0,
                                    this.maxSize = void 0,
                                    this.maxExpand = void 0,
                                    this.globalGroup = void 0,
                                    t = t || {},
                                    this.displayMode = c.deflt(t.displayMode, !1),
                                    this.output = c.deflt(t.output, "htmlAndMathml"),
                                    this.leqno = c.deflt(t.leqno, !1),
                                    this.fleqn = c.deflt(t.fleqn, !1),
                                    this.throwOnError = c.deflt(t.throwOnError, !0),
                                    this.errorColor = c.deflt(t.errorColor, "#cc0000"),
                                    this.macros = t.macros || {},
                                    this.minRuleThickness = Math.max(0, c.deflt(t.minRuleThickness, 0)),
                                    this.colorIsTextColor = c.deflt(t.colorIsTextColor, !1),
                                    this.strict = c.deflt(t.strict, "warn"),
                                    this.trust = c.deflt(t.trust, !1),
                                    this.maxSize = Math.max(0, c.deflt(t.maxSize, 1 / 0)),
                                    this.maxExpand = Math.max(0, c.deflt(t.maxExpand, 1e3)),
                                    this.globalGroup = c.deflt(t.globalGroup, !1)
                            }
                            var e = t.prototype;
                            return e.reportNonstrict = function(t, e, r) {
                                var n = this.strict;
                                if ("function" == typeof n && (n = n(t, e, r)),
                                    n && "ignore" !== n) {
                                    if (!0 === n || "error" === n)
                                        throw new o("LaTeX-incompatible input and strict mode is set to 'error': " + e + " [" + t + "]",r);
                                    "warn" === n ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]")
                                }
                            }
                                ,
                                e.useStrictBehavior = function(t, e, r) {
                                    var n = this.strict;
                                    if ("function" == typeof n)
                                        try {
                                            n = n(t, e, r)
                                        } catch (t) {
                                            n = "error"
                                        }
                                    return !(!n || "ignore" === n || !0 !== n && "error" !== n && ("warn" === n ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]"),
                                        1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]"),
                                        1)))
                                }
                                ,
                                e.isTrusted = function(t) {
                                    t.url && !t.protocol && (t.protocol = c.protocolFromUrl(t.url));
                                    var e = "function" == typeof this.trust ? this.trust(t) : this.trust;
                                    return Boolean(e)
                                }
                                ,
                                t
                        }()
                            , p = function() {
                            function t(t, e, r) {
                                this.id = void 0,
                                    this.size = void 0,
                                    this.cramped = void 0,
                                    this.id = t,
                                    this.size = e,
                                    this.cramped = r
                            }
                            var e = t.prototype;
                            return e.sup = function() {
                                return d[f[this.id]]
                            }
                                ,
                                e.sub = function() {
                                    return d[g[this.id]]
                                }
                                ,
                                e.fracNum = function() {
                                    return d[x[this.id]]
                                }
                                ,
                                e.fracDen = function() {
                                    return d[v[this.id]]
                                }
                                ,
                                e.cramp = function() {
                                    return d[b[this.id]]
                                }
                                ,
                                e.text = function() {
                                    return d[y[this.id]]
                                }
                                ,
                                e.isTight = function() {
                                    return this.size >= 2
                                }
                                ,
                                t
                        }()
                            , d = [new p(0,0,!1), new p(1,0,!0), new p(2,1,!1), new p(3,1,!0), new p(4,2,!1), new p(5,2,!0), new p(6,3,!1), new p(7,3,!0)]
                            , f = [4, 5, 4, 5, 6, 7, 6, 7]
                            , g = [5, 5, 5, 5, 7, 7, 7, 7]
                            , x = [2, 3, 4, 5, 6, 7, 6, 7]
                            , v = [3, 3, 5, 5, 7, 7, 7, 7]
                            , b = [1, 1, 3, 3, 5, 5, 7, 7]
                            , y = [0, 1, 2, 3, 2, 3, 2, 3]
                            , w = {
                            DISPLAY: d[0],
                            TEXT: d[2],
                            SCRIPT: d[4],
                            SCRIPTSCRIPT: d[6]
                        }
                            , k = [{
                            name: "latin",
                            blocks: [[256, 591], [768, 879]]
                        }, {
                            name: "cyrillic",
                            blocks: [[1024, 1279]]
                        }, {
                            name: "brahmic",
                            blocks: [[2304, 4255]]
                        }, {
                            name: "georgian",
                            blocks: [[4256, 4351]]
                        }, {
                            name: "cjk",
                            blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
                        }, {
                            name: "hangul",
                            blocks: [[44032, 55215]]
                        }]
                            , S = [];
                        function M(t) {
                            for (var e = 0; e < S.length; e += 2)
                                if (t >= S[e] && t <= S[e + 1])
                                    return !0;
                            return !1
                        }
                        k.forEach((function(t) {
                                return t.blocks.forEach((function(t) {
                                        return S.push.apply(S, t)
                                    }
                                ))
                            }
                        ));
                        var z = {
                            leftParenInner: "M291 0 H417 V300 H291 z",
                            rightParenInner: "M457 0 H583 V300 H457 z",
                            doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                            doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                            leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                            leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                            leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                            leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                            leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                            leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                            leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                            leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                            leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                            lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                            leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                            leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                            leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                            longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                            midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                            midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                            oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                            oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                            oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                            oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                            rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                            rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                            rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                            rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                            rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                            rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                            rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                            rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                            rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                            righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                            rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                            rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                            twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                            twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                            tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                            tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                            tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                            tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                            vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                            widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                            widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                            widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                            rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                            baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                            rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                            shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                            shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
                        }
                            , A = function() {
                            function t(t) {
                                this.children = void 0,
                                    this.classes = void 0,
                                    this.height = void 0,
                                    this.depth = void 0,
                                    this.maxFontSize = void 0,
                                    this.style = void 0,
                                    this.children = t,
                                    this.classes = [],
                                    this.height = 0,
                                    this.depth = 0,
                                    this.maxFontSize = 0,
                                    this.style = {}
                            }
                            var e = t.prototype;
                            return e.hasClass = function(t) {
                                return c.contains(this.classes, t)
                            }
                                ,
                                e.toNode = function() {
                                    for (var t = document.createDocumentFragment(), e = 0; e < this.children.length; e++)
                                        t.appendChild(this.children[e].toNode());
                                    return t
                                }
                                ,
                                e.toMarkup = function() {
                                    for (var t = "", e = 0; e < this.children.length; e++)
                                        t += this.children[e].toMarkup();
                                    return t
                                }
                                ,
                                e.toText = function() {
                                    var t = function(t) {
                                        return t.toText()
                                    };
                                    return this.children.map(t).join("")
                                }
                                ,
                                t
                        }()
                            , T = function(t) {
                            return t.filter((function(t) {
                                    return t
                                }
                            )).join(" ")
                        }
                            , B = function(t, e, r) {
                            if (this.classes = t || [],
                                    this.attributes = {},
                                    this.height = 0,
                                    this.depth = 0,
                                    this.maxFontSize = 0,
                                    this.style = r || {},
                                    e) {
                                e.style.isTight() && this.classes.push("mtight");
                                var n = e.getColor();
                                n && (this.style.color = n)
                            }
                        }
                            , C = function(t) {
                            var e = document.createElement(t);
                            for (var r in e.className = T(this.classes),
                                this.style)
                                this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
                            for (var n in this.attributes)
                                this.attributes.hasOwnProperty(n) && e.setAttribute(n, this.attributes[n]);
                            for (var a = 0; a < this.children.length; a++)
                                e.appendChild(this.children[a].toNode());
                            return e
                        }
                            , q = function(t) {
                            var e = "<" + t;
                            this.classes.length && (e += ' class="' + c.escape(T(this.classes)) + '"');
                            var r = "";
                            for (var n in this.style)
                                this.style.hasOwnProperty(n) && (r += c.hyphenate(n) + ":" + this.style[n] + ";");
                            for (var a in r && (e += ' style="' + c.escape(r) + '"'),
                                this.attributes)
                                this.attributes.hasOwnProperty(a) && (e += " " + a + '="' + c.escape(this.attributes[a]) + '"');
                            e += ">";
                            for (var i = 0; i < this.children.length; i++)
                                e += this.children[i].toMarkup();
                            return e += "</" + t + ">"
                        }
                            , N = function() {
                            function t(t, e, r, n) {
                                this.children = void 0,
                                    this.attributes = void 0,
                                    this.classes = void 0,
                                    this.height = void 0,
                                    this.depth = void 0,
                                    this.width = void 0,
                                    this.maxFontSize = void 0,
                                    this.style = void 0,
                                    B.call(this, t, r, n),
                                    this.children = e || []
                            }
                            var e = t.prototype;
                            return e.setAttribute = function(t, e) {
                                this.attributes[t] = e
                            }
                                ,
                                e.hasClass = function(t) {
                                    return c.contains(this.classes, t)
                                }
                                ,
                                e.toNode = function() {
                                    return C.call(this, "span")
                                }
                                ,
                                e.toMarkup = function() {
                                    return q.call(this, "span")
                                }
                                ,
                                t
                        }()
                            , I = function() {
                            function t(t, e, r, n) {
                                this.children = void 0,
                                    this.attributes = void 0,
                                    this.classes = void 0,
                                    this.height = void 0,
                                    this.depth = void 0,
                                    this.maxFontSize = void 0,
                                    this.style = void 0,
                                    B.call(this, e, n),
                                    this.children = r || [],
                                    this.setAttribute("href", t)
                            }
                            var e = t.prototype;
                            return e.setAttribute = function(t, e) {
                                this.attributes[t] = e
                            }
                                ,
                                e.hasClass = function(t) {
                                    return c.contains(this.classes, t)
                                }
                                ,
                                e.toNode = function() {
                                    return C.call(this, "a")
                                }
                                ,
                                e.toMarkup = function() {
                                    return q.call(this, "a")
                                }
                                ,
                                t
                        }()
                            , O = function() {
                            function t(t, e, r) {
                                this.src = void 0,
                                    this.alt = void 0,
                                    this.classes = void 0,
                                    this.height = void 0,
                                    this.depth = void 0,
                                    this.maxFontSize = void 0,
                                    this.style = void 0,
                                    this.alt = e,
                                    this.src = t,
                                    this.classes = ["mord"],
                                    this.style = r
                            }
                            var e = t.prototype;
                            return e.hasClass = function(t) {
                                return c.contains(this.classes, t)
                            }
                                ,
                                e.toNode = function() {
                                    var t = document.createElement("img");
                                    for (var e in t.src = this.src,
                                        t.alt = this.alt,
                                        t.className = "mord",
                                        this.style)
                                        this.style.hasOwnProperty(e) && (t.style[e] = this.style[e]);
                                    return t
                                }
                                ,
                                e.toMarkup = function() {
                                    var t = "<img  src='" + this.src + " 'alt='" + this.alt + "' "
                                        , e = "";
                                    for (var r in this.style)
                                        this.style.hasOwnProperty(r) && (e += c.hyphenate(r) + ":" + this.style[r] + ";");
                                    return e && (t += ' style="' + c.escape(e) + '"'),
                                        t += "'/>"
                                }
                                ,
                                t
                        }()
                            , R = {
                            "î": "ı̂",
                            "ï": "ı̈",
                            "í": "ı́",
                            "ì": "ı̀"
                        }
                            , E = function() {
                            function t(t, e, r, n, a, i, o, s) {
                                this.text = void 0,
                                    this.height = void 0,
                                    this.depth = void 0,
                                    this.italic = void 0,
                                    this.skew = void 0,
                                    this.width = void 0,
                                    this.maxFontSize = void 0,
                                    this.classes = void 0,
                                    this.style = void 0,
                                    this.text = t,
                                    this.height = e || 0,
                                    this.depth = r || 0,
                                    this.italic = n || 0,
                                    this.skew = a || 0,
                                    this.width = i || 0,
                                    this.classes = o || [],
                                    this.style = s || {},
                                    this.maxFontSize = 0;
                                var l = function(t) {
                                    for (var e = 0; e < k.length; e++)
                                        for (var r = k[e], n = 0; n < r.blocks.length; n++) {
                                            var a = r.blocks[n];
                                            if (t >= a[0] && t <= a[1])
                                                return r.name
                                        }
                                    return null
                                }(this.text.charCodeAt(0));
                                l && this.classes.push(l + "_fallback"),
                                /[îïíì]/.test(this.text) && (this.text = R[this.text])
                            }
                            var e = t.prototype;
                            return e.hasClass = function(t) {
                                return c.contains(this.classes, t)
                            }
                                ,
                                e.toNode = function() {
                                    var t = document.createTextNode(this.text)
                                        , e = null;
                                    for (var r in this.italic > 0 && ((e = document.createElement("span")).style.marginRight = this.italic + "em"),
                                    this.classes.length > 0 && ((e = e || document.createElement("span")).className = T(this.classes)),
                                        this.style)
                                        this.style.hasOwnProperty(r) && ((e = e || document.createElement("span")).style[r] = this.style[r]);
                                    return e ? (e.appendChild(t),
                                        e) : t
                                }
                                ,
                                e.toMarkup = function() {
                                    var t = !1
                                        , e = "<span";
                                    this.classes.length && (t = !0,
                                        e += ' class="',
                                        e += c.escape(T(this.classes)),
                                        e += '"');
                                    var r = "";
                                    for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"),
                                        this.style)
                                        this.style.hasOwnProperty(n) && (r += c.hyphenate(n) + ":" + this.style[n] + ";");
                                    r && (t = !0,
                                        e += ' style="' + c.escape(r) + '"');
                                    var a = c.escape(this.text);
                                    return t ? (e += ">",
                                        e += a,
                                        e += "</span>") : a
                                }
                                ,
                                t
                        }()
                            , L = function() {
                            function t(t, e) {
                                this.children = void 0,
                                    this.attributes = void 0,
                                    this.children = t || [],
                                    this.attributes = e || {}
                            }
                            var e = t.prototype;
                            return e.toNode = function() {
                                var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                for (var e in this.attributes)
                                    Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                for (var r = 0; r < this.children.length; r++)
                                    t.appendChild(this.children[r].toNode());
                                return t
                            }
                                ,
                                e.toMarkup = function() {
                                    var t = "<svg";
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
                                    t += ">";
                                    for (var r = 0; r < this.children.length; r++)
                                        t += this.children[r].toMarkup();
                                    return t += "</svg>"
                                }
                                ,
                                t
                        }()
                            , P = function() {
                            function t(t, e) {
                                this.pathName = void 0,
                                    this.alternate = void 0,
                                    this.pathName = t,
                                    this.alternate = e
                            }
                            var e = t.prototype;
                            return e.toNode = function() {
                                var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", z[this.pathName]),
                                    t
                            }
                                ,
                                e.toMarkup = function() {
                                    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + z[this.pathName] + "'/>"
                                }
                                ,
                                t
                        }()
                            , D = function() {
                            function t(t) {
                                this.attributes = void 0,
                                    this.attributes = t || {}
                            }
                            var e = t.prototype;
                            return e.toNode = function() {
                                var t = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                for (var e in this.attributes)
                                    Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                return t
                            }
                                ,
                                e.toMarkup = function() {
                                    var t = "<line";
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
                                    return t += "/>"
                                }
                                ,
                                t
                        }();
                        function H(t) {
                            if (t instanceof E)
                                return t;
                            throw new Error("Expected symbolNode but got " + String(t) + ".")
                        }
                        var F = {
                            "AMS-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68889, 0, 0, .72222],
                                66: [0, .68889, 0, 0, .66667],
                                67: [0, .68889, 0, 0, .72222],
                                68: [0, .68889, 0, 0, .72222],
                                69: [0, .68889, 0, 0, .66667],
                                70: [0, .68889, 0, 0, .61111],
                                71: [0, .68889, 0, 0, .77778],
                                72: [0, .68889, 0, 0, .77778],
                                73: [0, .68889, 0, 0, .38889],
                                74: [.16667, .68889, 0, 0, .5],
                                75: [0, .68889, 0, 0, .77778],
                                76: [0, .68889, 0, 0, .66667],
                                77: [0, .68889, 0, 0, .94445],
                                78: [0, .68889, 0, 0, .72222],
                                79: [.16667, .68889, 0, 0, .77778],
                                80: [0, .68889, 0, 0, .61111],
                                81: [.16667, .68889, 0, 0, .77778],
                                82: [0, .68889, 0, 0, .72222],
                                83: [0, .68889, 0, 0, .55556],
                                84: [0, .68889, 0, 0, .66667],
                                85: [0, .68889, 0, 0, .72222],
                                86: [0, .68889, 0, 0, .72222],
                                87: [0, .68889, 0, 0, 1],
                                88: [0, .68889, 0, 0, .72222],
                                89: [0, .68889, 0, 0, .72222],
                                90: [0, .68889, 0, 0, .66667],
                                107: [0, .68889, 0, 0, .55556],
                                160: [0, 0, 0, 0, .25],
                                165: [0, .675, .025, 0, .75],
                                174: [.15559, .69224, 0, 0, .94666],
                                240: [0, .68889, 0, 0, .55556],
                                295: [0, .68889, 0, 0, .54028],
                                710: [0, .825, 0, 0, 2.33334],
                                732: [0, .9, 0, 0, 2.33334],
                                770: [0, .825, 0, 0, 2.33334],
                                771: [0, .9, 0, 0, 2.33334],
                                989: [.08167, .58167, 0, 0, .77778],
                                1008: [0, .43056, .04028, 0, .66667],
                                8245: [0, .54986, 0, 0, .275],
                                8463: [0, .68889, 0, 0, .54028],
                                8487: [0, .68889, 0, 0, .72222],
                                8498: [0, .68889, 0, 0, .55556],
                                8502: [0, .68889, 0, 0, .66667],
                                8503: [0, .68889, 0, 0, .44445],
                                8504: [0, .68889, 0, 0, .66667],
                                8513: [0, .68889, 0, 0, .63889],
                                8592: [-.03598, .46402, 0, 0, .5],
                                8594: [-.03598, .46402, 0, 0, .5],
                                8602: [-.13313, .36687, 0, 0, 1],
                                8603: [-.13313, .36687, 0, 0, 1],
                                8606: [.01354, .52239, 0, 0, 1],
                                8608: [.01354, .52239, 0, 0, 1],
                                8610: [.01354, .52239, 0, 0, 1.11111],
                                8611: [.01354, .52239, 0, 0, 1.11111],
                                8619: [0, .54986, 0, 0, 1],
                                8620: [0, .54986, 0, 0, 1],
                                8621: [-.13313, .37788, 0, 0, 1.38889],
                                8622: [-.13313, .36687, 0, 0, 1],
                                8624: [0, .69224, 0, 0, .5],
                                8625: [0, .69224, 0, 0, .5],
                                8630: [0, .43056, 0, 0, 1],
                                8631: [0, .43056, 0, 0, 1],
                                8634: [.08198, .58198, 0, 0, .77778],
                                8635: [.08198, .58198, 0, 0, .77778],
                                8638: [.19444, .69224, 0, 0, .41667],
                                8639: [.19444, .69224, 0, 0, .41667],
                                8642: [.19444, .69224, 0, 0, .41667],
                                8643: [.19444, .69224, 0, 0, .41667],
                                8644: [.1808, .675, 0, 0, 1],
                                8646: [.1808, .675, 0, 0, 1],
                                8647: [.1808, .675, 0, 0, 1],
                                8648: [.19444, .69224, 0, 0, .83334],
                                8649: [.1808, .675, 0, 0, 1],
                                8650: [.19444, .69224, 0, 0, .83334],
                                8651: [.01354, .52239, 0, 0, 1],
                                8652: [.01354, .52239, 0, 0, 1],
                                8653: [-.13313, .36687, 0, 0, 1],
                                8654: [-.13313, .36687, 0, 0, 1],
                                8655: [-.13313, .36687, 0, 0, 1],
                                8666: [.13667, .63667, 0, 0, 1],
                                8667: [.13667, .63667, 0, 0, 1],
                                8669: [-.13313, .37788, 0, 0, 1],
                                8672: [-.064, .437, 0, 0, 1.334],
                                8674: [-.064, .437, 0, 0, 1.334],
                                8705: [0, .825, 0, 0, .5],
                                8708: [0, .68889, 0, 0, .55556],
                                8709: [.08167, .58167, 0, 0, .77778],
                                8717: [0, .43056, 0, 0, .42917],
                                8722: [-.03598, .46402, 0, 0, .5],
                                8724: [.08198, .69224, 0, 0, .77778],
                                8726: [.08167, .58167, 0, 0, .77778],
                                8733: [0, .69224, 0, 0, .77778],
                                8736: [0, .69224, 0, 0, .72222],
                                8737: [0, .69224, 0, 0, .72222],
                                8738: [.03517, .52239, 0, 0, .72222],
                                8739: [.08167, .58167, 0, 0, .22222],
                                8740: [.25142, .74111, 0, 0, .27778],
                                8741: [.08167, .58167, 0, 0, .38889],
                                8742: [.25142, .74111, 0, 0, .5],
                                8756: [0, .69224, 0, 0, .66667],
                                8757: [0, .69224, 0, 0, .66667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8765: [-.13313, .37788, 0, 0, .77778],
                                8769: [-.13313, .36687, 0, 0, .77778],
                                8770: [-.03625, .46375, 0, 0, .77778],
                                8774: [.30274, .79383, 0, 0, .77778],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8778: [.08167, .58167, 0, 0, .77778],
                                8782: [.06062, .54986, 0, 0, .77778],
                                8783: [.06062, .54986, 0, 0, .77778],
                                8785: [.08198, .58198, 0, 0, .77778],
                                8786: [.08198, .58198, 0, 0, .77778],
                                8787: [.08198, .58198, 0, 0, .77778],
                                8790: [0, .69224, 0, 0, .77778],
                                8791: [.22958, .72958, 0, 0, .77778],
                                8796: [.08198, .91667, 0, 0, .77778],
                                8806: [.25583, .75583, 0, 0, .77778],
                                8807: [.25583, .75583, 0, 0, .77778],
                                8808: [.25142, .75726, 0, 0, .77778],
                                8809: [.25142, .75726, 0, 0, .77778],
                                8812: [.25583, .75583, 0, 0, .5],
                                8814: [.20576, .70576, 0, 0, .77778],
                                8815: [.20576, .70576, 0, 0, .77778],
                                8816: [.30274, .79383, 0, 0, .77778],
                                8817: [.30274, .79383, 0, 0, .77778],
                                8818: [.22958, .72958, 0, 0, .77778],
                                8819: [.22958, .72958, 0, 0, .77778],
                                8822: [.1808, .675, 0, 0, .77778],
                                8823: [.1808, .675, 0, 0, .77778],
                                8828: [.13667, .63667, 0, 0, .77778],
                                8829: [.13667, .63667, 0, 0, .77778],
                                8830: [.22958, .72958, 0, 0, .77778],
                                8831: [.22958, .72958, 0, 0, .77778],
                                8832: [.20576, .70576, 0, 0, .77778],
                                8833: [.20576, .70576, 0, 0, .77778],
                                8840: [.30274, .79383, 0, 0, .77778],
                                8841: [.30274, .79383, 0, 0, .77778],
                                8842: [.13597, .63597, 0, 0, .77778],
                                8843: [.13597, .63597, 0, 0, .77778],
                                8847: [.03517, .54986, 0, 0, .77778],
                                8848: [.03517, .54986, 0, 0, .77778],
                                8858: [.08198, .58198, 0, 0, .77778],
                                8859: [.08198, .58198, 0, 0, .77778],
                                8861: [.08198, .58198, 0, 0, .77778],
                                8862: [0, .675, 0, 0, .77778],
                                8863: [0, .675, 0, 0, .77778],
                                8864: [0, .675, 0, 0, .77778],
                                8865: [0, .675, 0, 0, .77778],
                                8872: [0, .69224, 0, 0, .61111],
                                8873: [0, .69224, 0, 0, .72222],
                                8874: [0, .69224, 0, 0, .88889],
                                8876: [0, .68889, 0, 0, .61111],
                                8877: [0, .68889, 0, 0, .61111],
                                8878: [0, .68889, 0, 0, .72222],
                                8879: [0, .68889, 0, 0, .72222],
                                8882: [.03517, .54986, 0, 0, .77778],
                                8883: [.03517, .54986, 0, 0, .77778],
                                8884: [.13667, .63667, 0, 0, .77778],
                                8885: [.13667, .63667, 0, 0, .77778],
                                8888: [0, .54986, 0, 0, 1.11111],
                                8890: [.19444, .43056, 0, 0, .55556],
                                8891: [.19444, .69224, 0, 0, .61111],
                                8892: [.19444, .69224, 0, 0, .61111],
                                8901: [0, .54986, 0, 0, .27778],
                                8903: [.08167, .58167, 0, 0, .77778],
                                8905: [.08167, .58167, 0, 0, .77778],
                                8906: [.08167, .58167, 0, 0, .77778],
                                8907: [0, .69224, 0, 0, .77778],
                                8908: [0, .69224, 0, 0, .77778],
                                8909: [-.03598, .46402, 0, 0, .77778],
                                8910: [0, .54986, 0, 0, .76042],
                                8911: [0, .54986, 0, 0, .76042],
                                8912: [.03517, .54986, 0, 0, .77778],
                                8913: [.03517, .54986, 0, 0, .77778],
                                8914: [0, .54986, 0, 0, .66667],
                                8915: [0, .54986, 0, 0, .66667],
                                8916: [0, .69224, 0, 0, .66667],
                                8918: [.0391, .5391, 0, 0, .77778],
                                8919: [.0391, .5391, 0, 0, .77778],
                                8920: [.03517, .54986, 0, 0, 1.33334],
                                8921: [.03517, .54986, 0, 0, 1.33334],
                                8922: [.38569, .88569, 0, 0, .77778],
                                8923: [.38569, .88569, 0, 0, .77778],
                                8926: [.13667, .63667, 0, 0, .77778],
                                8927: [.13667, .63667, 0, 0, .77778],
                                8928: [.30274, .79383, 0, 0, .77778],
                                8929: [.30274, .79383, 0, 0, .77778],
                                8934: [.23222, .74111, 0, 0, .77778],
                                8935: [.23222, .74111, 0, 0, .77778],
                                8936: [.23222, .74111, 0, 0, .77778],
                                8937: [.23222, .74111, 0, 0, .77778],
                                8938: [.20576, .70576, 0, 0, .77778],
                                8939: [.20576, .70576, 0, 0, .77778],
                                8940: [.30274, .79383, 0, 0, .77778],
                                8941: [.30274, .79383, 0, 0, .77778],
                                8994: [.19444, .69224, 0, 0, .77778],
                                8995: [.19444, .69224, 0, 0, .77778],
                                9416: [.15559, .69224, 0, 0, .90222],
                                9484: [0, .69224, 0, 0, .5],
                                9488: [0, .69224, 0, 0, .5],
                                9492: [0, .37788, 0, 0, .5],
                                9496: [0, .37788, 0, 0, .5],
                                9585: [.19444, .68889, 0, 0, .88889],
                                9586: [.19444, .74111, 0, 0, .88889],
                                9632: [0, .675, 0, 0, .77778],
                                9633: [0, .675, 0, 0, .77778],
                                9650: [0, .54986, 0, 0, .72222],
                                9651: [0, .54986, 0, 0, .72222],
                                9654: [.03517, .54986, 0, 0, .77778],
                                9660: [0, .54986, 0, 0, .72222],
                                9661: [0, .54986, 0, 0, .72222],
                                9664: [.03517, .54986, 0, 0, .77778],
                                9674: [.11111, .69224, 0, 0, .66667],
                                9733: [.19444, .69224, 0, 0, .94445],
                                10003: [0, .69224, 0, 0, .83334],
                                10016: [0, .69224, 0, 0, .83334],
                                10731: [.11111, .69224, 0, 0, .66667],
                                10846: [.19444, .75583, 0, 0, .61111],
                                10877: [.13667, .63667, 0, 0, .77778],
                                10878: [.13667, .63667, 0, 0, .77778],
                                10885: [.25583, .75583, 0, 0, .77778],
                                10886: [.25583, .75583, 0, 0, .77778],
                                10887: [.13597, .63597, 0, 0, .77778],
                                10888: [.13597, .63597, 0, 0, .77778],
                                10889: [.26167, .75726, 0, 0, .77778],
                                10890: [.26167, .75726, 0, 0, .77778],
                                10891: [.48256, .98256, 0, 0, .77778],
                                10892: [.48256, .98256, 0, 0, .77778],
                                10901: [.13667, .63667, 0, 0, .77778],
                                10902: [.13667, .63667, 0, 0, .77778],
                                10933: [.25142, .75726, 0, 0, .77778],
                                10934: [.25142, .75726, 0, 0, .77778],
                                10935: [.26167, .75726, 0, 0, .77778],
                                10936: [.26167, .75726, 0, 0, .77778],
                                10937: [.26167, .75726, 0, 0, .77778],
                                10938: [.26167, .75726, 0, 0, .77778],
                                10949: [.25583, .75583, 0, 0, .77778],
                                10950: [.25583, .75583, 0, 0, .77778],
                                10955: [.28481, .79383, 0, 0, .77778],
                                10956: [.28481, .79383, 0, 0, .77778],
                                57350: [.08167, .58167, 0, 0, .22222],
                                57351: [.08167, .58167, 0, 0, .38889],
                                57352: [.08167, .58167, 0, 0, .77778],
                                57353: [0, .43056, .04028, 0, .66667],
                                57356: [.25142, .75726, 0, 0, .77778],
                                57357: [.25142, .75726, 0, 0, .77778],
                                57358: [.41951, .91951, 0, 0, .77778],
                                57359: [.30274, .79383, 0, 0, .77778],
                                57360: [.30274, .79383, 0, 0, .77778],
                                57361: [.41951, .91951, 0, 0, .77778],
                                57366: [.25142, .75726, 0, 0, .77778],
                                57367: [.25142, .75726, 0, 0, .77778],
                                57368: [.25142, .75726, 0, 0, .77778],
                                57369: [.25142, .75726, 0, 0, .77778],
                                57370: [.13597, .63597, 0, 0, .77778],
                                57371: [.13597, .63597, 0, 0, .77778]
                            },
                            "Caligraphic-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68333, 0, .19445, .79847],
                                66: [0, .68333, .03041, .13889, .65681],
                                67: [0, .68333, .05834, .13889, .52653],
                                68: [0, .68333, .02778, .08334, .77139],
                                69: [0, .68333, .08944, .11111, .52778],
                                70: [0, .68333, .09931, .11111, .71875],
                                71: [.09722, .68333, .0593, .11111, .59487],
                                72: [0, .68333, .00965, .11111, .84452],
                                73: [0, .68333, .07382, 0, .54452],
                                74: [.09722, .68333, .18472, .16667, .67778],
                                75: [0, .68333, .01445, .05556, .76195],
                                76: [0, .68333, 0, .13889, .68972],
                                77: [0, .68333, 0, .13889, 1.2009],
                                78: [0, .68333, .14736, .08334, .82049],
                                79: [0, .68333, .02778, .11111, .79611],
                                80: [0, .68333, .08222, .08334, .69556],
                                81: [.09722, .68333, 0, .11111, .81667],
                                82: [0, .68333, 0, .08334, .8475],
                                83: [0, .68333, .075, .13889, .60556],
                                84: [0, .68333, .25417, 0, .54464],
                                85: [0, .68333, .09931, .08334, .62583],
                                86: [0, .68333, .08222, 0, .61278],
                                87: [0, .68333, .08222, .08334, .98778],
                                88: [0, .68333, .14643, .13889, .7133],
                                89: [.09722, .68333, .08222, .08334, .66834],
                                90: [0, .68333, .07944, .13889, .72473],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Fraktur-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69141, 0, 0, .29574],
                                34: [0, .69141, 0, 0, .21471],
                                38: [0, .69141, 0, 0, .73786],
                                39: [0, .69141, 0, 0, .21201],
                                40: [.24982, .74947, 0, 0, .38865],
                                41: [.24982, .74947, 0, 0, .38865],
                                42: [0, .62119, 0, 0, .27764],
                                43: [.08319, .58283, 0, 0, .75623],
                                44: [0, .10803, 0, 0, .27764],
                                45: [.08319, .58283, 0, 0, .75623],
                                46: [0, .10803, 0, 0, .27764],
                                47: [.24982, .74947, 0, 0, .50181],
                                48: [0, .47534, 0, 0, .50181],
                                49: [0, .47534, 0, 0, .50181],
                                50: [0, .47534, 0, 0, .50181],
                                51: [.18906, .47534, 0, 0, .50181],
                                52: [.18906, .47534, 0, 0, .50181],
                                53: [.18906, .47534, 0, 0, .50181],
                                54: [0, .69141, 0, 0, .50181],
                                55: [.18906, .47534, 0, 0, .50181],
                                56: [0, .69141, 0, 0, .50181],
                                57: [.18906, .47534, 0, 0, .50181],
                                58: [0, .47534, 0, 0, .21606],
                                59: [.12604, .47534, 0, 0, .21606],
                                61: [-.13099, .36866, 0, 0, .75623],
                                63: [0, .69141, 0, 0, .36245],
                                65: [0, .69141, 0, 0, .7176],
                                66: [0, .69141, 0, 0, .88397],
                                67: [0, .69141, 0, 0, .61254],
                                68: [0, .69141, 0, 0, .83158],
                                69: [0, .69141, 0, 0, .66278],
                                70: [.12604, .69141, 0, 0, .61119],
                                71: [0, .69141, 0, 0, .78539],
                                72: [.06302, .69141, 0, 0, .7203],
                                73: [0, .69141, 0, 0, .55448],
                                74: [.12604, .69141, 0, 0, .55231],
                                75: [0, .69141, 0, 0, .66845],
                                76: [0, .69141, 0, 0, .66602],
                                77: [0, .69141, 0, 0, 1.04953],
                                78: [0, .69141, 0, 0, .83212],
                                79: [0, .69141, 0, 0, .82699],
                                80: [.18906, .69141, 0, 0, .82753],
                                81: [.03781, .69141, 0, 0, .82699],
                                82: [0, .69141, 0, 0, .82807],
                                83: [0, .69141, 0, 0, .82861],
                                84: [0, .69141, 0, 0, .66899],
                                85: [0, .69141, 0, 0, .64576],
                                86: [0, .69141, 0, 0, .83131],
                                87: [0, .69141, 0, 0, 1.04602],
                                88: [0, .69141, 0, 0, .71922],
                                89: [.18906, .69141, 0, 0, .83293],
                                90: [.12604, .69141, 0, 0, .60201],
                                91: [.24982, .74947, 0, 0, .27764],
                                93: [.24982, .74947, 0, 0, .27764],
                                94: [0, .69141, 0, 0, .49965],
                                97: [0, .47534, 0, 0, .50046],
                                98: [0, .69141, 0, 0, .51315],
                                99: [0, .47534, 0, 0, .38946],
                                100: [0, .62119, 0, 0, .49857],
                                101: [0, .47534, 0, 0, .40053],
                                102: [.18906, .69141, 0, 0, .32626],
                                103: [.18906, .47534, 0, 0, .5037],
                                104: [.18906, .69141, 0, 0, .52126],
                                105: [0, .69141, 0, 0, .27899],
                                106: [0, .69141, 0, 0, .28088],
                                107: [0, .69141, 0, 0, .38946],
                                108: [0, .69141, 0, 0, .27953],
                                109: [0, .47534, 0, 0, .76676],
                                110: [0, .47534, 0, 0, .52666],
                                111: [0, .47534, 0, 0, .48885],
                                112: [.18906, .52396, 0, 0, .50046],
                                113: [.18906, .47534, 0, 0, .48912],
                                114: [0, .47534, 0, 0, .38919],
                                115: [0, .47534, 0, 0, .44266],
                                116: [0, .62119, 0, 0, .33301],
                                117: [0, .47534, 0, 0, .5172],
                                118: [0, .52396, 0, 0, .5118],
                                119: [0, .52396, 0, 0, .77351],
                                120: [.18906, .47534, 0, 0, .38865],
                                121: [.18906, .47534, 0, 0, .49884],
                                122: [.18906, .47534, 0, 0, .39054],
                                160: [0, 0, 0, 0, .25],
                                8216: [0, .69141, 0, 0, .21471],
                                8217: [0, .69141, 0, 0, .21471],
                                58112: [0, .62119, 0, 0, .49749],
                                58113: [0, .62119, 0, 0, .4983],
                                58114: [.18906, .69141, 0, 0, .33328],
                                58115: [.18906, .69141, 0, 0, .32923],
                                58116: [.18906, .47534, 0, 0, .50343],
                                58117: [0, .69141, 0, 0, .33301],
                                58118: [0, .62119, 0, 0, .33409],
                                58119: [0, .47534, 0, 0, .50073]
                            },
                            "Main-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .35],
                                34: [0, .69444, 0, 0, .60278],
                                35: [.19444, .69444, 0, 0, .95833],
                                36: [.05556, .75, 0, 0, .575],
                                37: [.05556, .75, 0, 0, .95833],
                                38: [0, .69444, 0, 0, .89444],
                                39: [0, .69444, 0, 0, .31944],
                                40: [.25, .75, 0, 0, .44722],
                                41: [.25, .75, 0, 0, .44722],
                                42: [0, .75, 0, 0, .575],
                                43: [.13333, .63333, 0, 0, .89444],
                                44: [.19444, .15556, 0, 0, .31944],
                                45: [0, .44444, 0, 0, .38333],
                                46: [0, .15556, 0, 0, .31944],
                                47: [.25, .75, 0, 0, .575],
                                48: [0, .64444, 0, 0, .575],
                                49: [0, .64444, 0, 0, .575],
                                50: [0, .64444, 0, 0, .575],
                                51: [0, .64444, 0, 0, .575],
                                52: [0, .64444, 0, 0, .575],
                                53: [0, .64444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [0, .64444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [0, .64444, 0, 0, .575],
                                58: [0, .44444, 0, 0, .31944],
                                59: [.19444, .44444, 0, 0, .31944],
                                60: [.08556, .58556, 0, 0, .89444],
                                61: [-.10889, .39111, 0, 0, .89444],
                                62: [.08556, .58556, 0, 0, .89444],
                                63: [0, .69444, 0, 0, .54305],
                                64: [0, .69444, 0, 0, .89444],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, 0, 0, .81805],
                                67: [0, .68611, 0, 0, .83055],
                                68: [0, .68611, 0, 0, .88194],
                                69: [0, .68611, 0, 0, .75555],
                                70: [0, .68611, 0, 0, .72361],
                                71: [0, .68611, 0, 0, .90416],
                                72: [0, .68611, 0, 0, .9],
                                73: [0, .68611, 0, 0, .43611],
                                74: [0, .68611, 0, 0, .59444],
                                75: [0, .68611, 0, 0, .90138],
                                76: [0, .68611, 0, 0, .69166],
                                77: [0, .68611, 0, 0, 1.09166],
                                78: [0, .68611, 0, 0, .9],
                                79: [0, .68611, 0, 0, .86388],
                                80: [0, .68611, 0, 0, .78611],
                                81: [.19444, .68611, 0, 0, .86388],
                                82: [0, .68611, 0, 0, .8625],
                                83: [0, .68611, 0, 0, .63889],
                                84: [0, .68611, 0, 0, .8],
                                85: [0, .68611, 0, 0, .88472],
                                86: [0, .68611, .01597, 0, .86944],
                                87: [0, .68611, .01597, 0, 1.18888],
                                88: [0, .68611, 0, 0, .86944],
                                89: [0, .68611, .02875, 0, .86944],
                                90: [0, .68611, 0, 0, .70277],
                                91: [.25, .75, 0, 0, .31944],
                                92: [.25, .75, 0, 0, .575],
                                93: [.25, .75, 0, 0, .31944],
                                94: [0, .69444, 0, 0, .575],
                                95: [.31, .13444, .03194, 0, .575],
                                97: [0, .44444, 0, 0, .55902],
                                98: [0, .69444, 0, 0, .63889],
                                99: [0, .44444, 0, 0, .51111],
                                100: [0, .69444, 0, 0, .63889],
                                101: [0, .44444, 0, 0, .52708],
                                102: [0, .69444, .10903, 0, .35139],
                                103: [.19444, .44444, .01597, 0, .575],
                                104: [0, .69444, 0, 0, .63889],
                                105: [0, .69444, 0, 0, .31944],
                                106: [.19444, .69444, 0, 0, .35139],
                                107: [0, .69444, 0, 0, .60694],
                                108: [0, .69444, 0, 0, .31944],
                                109: [0, .44444, 0, 0, .95833],
                                110: [0, .44444, 0, 0, .63889],
                                111: [0, .44444, 0, 0, .575],
                                112: [.19444, .44444, 0, 0, .63889],
                                113: [.19444, .44444, 0, 0, .60694],
                                114: [0, .44444, 0, 0, .47361],
                                115: [0, .44444, 0, 0, .45361],
                                116: [0, .63492, 0, 0, .44722],
                                117: [0, .44444, 0, 0, .63889],
                                118: [0, .44444, .01597, 0, .60694],
                                119: [0, .44444, .01597, 0, .83055],
                                120: [0, .44444, 0, 0, .60694],
                                121: [.19444, .44444, .01597, 0, .60694],
                                122: [0, .44444, 0, 0, .51111],
                                123: [.25, .75, 0, 0, .575],
                                124: [.25, .75, 0, 0, .31944],
                                125: [.25, .75, 0, 0, .575],
                                126: [.35, .34444, 0, 0, .575],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .86853],
                                168: [0, .69444, 0, 0, .575],
                                172: [0, .44444, 0, 0, .76666],
                                176: [0, .69444, 0, 0, .86944],
                                177: [.13333, .63333, 0, 0, .89444],
                                184: [.17014, 0, 0, 0, .51111],
                                198: [0, .68611, 0, 0, 1.04166],
                                215: [.13333, .63333, 0, 0, .89444],
                                216: [.04861, .73472, 0, 0, .89444],
                                223: [0, .69444, 0, 0, .59722],
                                230: [0, .44444, 0, 0, .83055],
                                247: [.13333, .63333, 0, 0, .89444],
                                248: [.09722, .54167, 0, 0, .575],
                                305: [0, .44444, 0, 0, .31944],
                                338: [0, .68611, 0, 0, 1.16944],
                                339: [0, .44444, 0, 0, .89444],
                                567: [.19444, .44444, 0, 0, .35139],
                                710: [0, .69444, 0, 0, .575],
                                711: [0, .63194, 0, 0, .575],
                                713: [0, .59611, 0, 0, .575],
                                714: [0, .69444, 0, 0, .575],
                                715: [0, .69444, 0, 0, .575],
                                728: [0, .69444, 0, 0, .575],
                                729: [0, .69444, 0, 0, .31944],
                                730: [0, .69444, 0, 0, .86944],
                                732: [0, .69444, 0, 0, .575],
                                733: [0, .69444, 0, 0, .575],
                                915: [0, .68611, 0, 0, .69166],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, 0, 0, .89444],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, 0, 0, .76666],
                                928: [0, .68611, 0, 0, .9],
                                931: [0, .68611, 0, 0, .83055],
                                933: [0, .68611, 0, 0, .89444],
                                934: [0, .68611, 0, 0, .83055],
                                936: [0, .68611, 0, 0, .89444],
                                937: [0, .68611, 0, 0, .83055],
                                8211: [0, .44444, .03194, 0, .575],
                                8212: [0, .44444, .03194, 0, 1.14999],
                                8216: [0, .69444, 0, 0, .31944],
                                8217: [0, .69444, 0, 0, .31944],
                                8220: [0, .69444, 0, 0, .60278],
                                8221: [0, .69444, 0, 0, .60278],
                                8224: [.19444, .69444, 0, 0, .51111],
                                8225: [.19444, .69444, 0, 0, .51111],
                                8242: [0, .55556, 0, 0, .34444],
                                8407: [0, .72444, .15486, 0, .575],
                                8463: [0, .69444, 0, 0, .66759],
                                8465: [0, .69444, 0, 0, .83055],
                                8467: [0, .69444, 0, 0, .47361],
                                8472: [.19444, .44444, 0, 0, .74027],
                                8476: [0, .69444, 0, 0, .83055],
                                8501: [0, .69444, 0, 0, .70277],
                                8592: [-.10889, .39111, 0, 0, 1.14999],
                                8593: [.19444, .69444, 0, 0, .575],
                                8594: [-.10889, .39111, 0, 0, 1.14999],
                                8595: [.19444, .69444, 0, 0, .575],
                                8596: [-.10889, .39111, 0, 0, 1.14999],
                                8597: [.25, .75, 0, 0, .575],
                                8598: [.19444, .69444, 0, 0, 1.14999],
                                8599: [.19444, .69444, 0, 0, 1.14999],
                                8600: [.19444, .69444, 0, 0, 1.14999],
                                8601: [.19444, .69444, 0, 0, 1.14999],
                                8636: [-.10889, .39111, 0, 0, 1.14999],
                                8637: [-.10889, .39111, 0, 0, 1.14999],
                                8640: [-.10889, .39111, 0, 0, 1.14999],
                                8641: [-.10889, .39111, 0, 0, 1.14999],
                                8656: [-.10889, .39111, 0, 0, 1.14999],
                                8657: [.19444, .69444, 0, 0, .70277],
                                8658: [-.10889, .39111, 0, 0, 1.14999],
                                8659: [.19444, .69444, 0, 0, .70277],
                                8660: [-.10889, .39111, 0, 0, 1.14999],
                                8661: [.25, .75, 0, 0, .70277],
                                8704: [0, .69444, 0, 0, .63889],
                                8706: [0, .69444, .06389, 0, .62847],
                                8707: [0, .69444, 0, 0, .63889],
                                8709: [.05556, .75, 0, 0, .575],
                                8711: [0, .68611, 0, 0, .95833],
                                8712: [.08556, .58556, 0, 0, .76666],
                                8715: [.08556, .58556, 0, 0, .76666],
                                8722: [.13333, .63333, 0, 0, .89444],
                                8723: [.13333, .63333, 0, 0, .89444],
                                8725: [.25, .75, 0, 0, .575],
                                8726: [.25, .75, 0, 0, .575],
                                8727: [-.02778, .47222, 0, 0, .575],
                                8728: [-.02639, .47361, 0, 0, .575],
                                8729: [-.02639, .47361, 0, 0, .575],
                                8730: [.18, .82, 0, 0, .95833],
                                8733: [0, .44444, 0, 0, .89444],
                                8734: [0, .44444, 0, 0, 1.14999],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .31944],
                                8741: [.25, .75, 0, 0, .575],
                                8743: [0, .55556, 0, 0, .76666],
                                8744: [0, .55556, 0, 0, .76666],
                                8745: [0, .55556, 0, 0, .76666],
                                8746: [0, .55556, 0, 0, .76666],
                                8747: [.19444, .69444, .12778, 0, .56875],
                                8764: [-.10889, .39111, 0, 0, .89444],
                                8768: [.19444, .69444, 0, 0, .31944],
                                8771: [.00222, .50222, 0, 0, .89444],
                                8776: [.02444, .52444, 0, 0, .89444],
                                8781: [.00222, .50222, 0, 0, .89444],
                                8801: [.00222, .50222, 0, 0, .89444],
                                8804: [.19667, .69667, 0, 0, .89444],
                                8805: [.19667, .69667, 0, 0, .89444],
                                8810: [.08556, .58556, 0, 0, 1.14999],
                                8811: [.08556, .58556, 0, 0, 1.14999],
                                8826: [.08556, .58556, 0, 0, .89444],
                                8827: [.08556, .58556, 0, 0, .89444],
                                8834: [.08556, .58556, 0, 0, .89444],
                                8835: [.08556, .58556, 0, 0, .89444],
                                8838: [.19667, .69667, 0, 0, .89444],
                                8839: [.19667, .69667, 0, 0, .89444],
                                8846: [0, .55556, 0, 0, .76666],
                                8849: [.19667, .69667, 0, 0, .89444],
                                8850: [.19667, .69667, 0, 0, .89444],
                                8851: [0, .55556, 0, 0, .76666],
                                8852: [0, .55556, 0, 0, .76666],
                                8853: [.13333, .63333, 0, 0, .89444],
                                8854: [.13333, .63333, 0, 0, .89444],
                                8855: [.13333, .63333, 0, 0, .89444],
                                8856: [.13333, .63333, 0, 0, .89444],
                                8857: [.13333, .63333, 0, 0, .89444],
                                8866: [0, .69444, 0, 0, .70277],
                                8867: [0, .69444, 0, 0, .70277],
                                8868: [0, .69444, 0, 0, .89444],
                                8869: [0, .69444, 0, 0, .89444],
                                8900: [-.02639, .47361, 0, 0, .575],
                                8901: [-.02639, .47361, 0, 0, .31944],
                                8902: [-.02778, .47222, 0, 0, .575],
                                8968: [.25, .75, 0, 0, .51111],
                                8969: [.25, .75, 0, 0, .51111],
                                8970: [.25, .75, 0, 0, .51111],
                                8971: [.25, .75, 0, 0, .51111],
                                8994: [-.13889, .36111, 0, 0, 1.14999],
                                8995: [-.13889, .36111, 0, 0, 1.14999],
                                9651: [.19444, .69444, 0, 0, 1.02222],
                                9657: [-.02778, .47222, 0, 0, .575],
                                9661: [.19444, .69444, 0, 0, 1.02222],
                                9667: [-.02778, .47222, 0, 0, .575],
                                9711: [.19444, .69444, 0, 0, 1.14999],
                                9824: [.12963, .69444, 0, 0, .89444],
                                9825: [.12963, .69444, 0, 0, .89444],
                                9826: [.12963, .69444, 0, 0, .89444],
                                9827: [.12963, .69444, 0, 0, .89444],
                                9837: [0, .75, 0, 0, .44722],
                                9838: [.19444, .69444, 0, 0, .44722],
                                9839: [.19444, .69444, 0, 0, .44722],
                                10216: [.25, .75, 0, 0, .44722],
                                10217: [.25, .75, 0, 0, .44722],
                                10815: [0, .68611, 0, 0, .9],
                                10927: [.19667, .69667, 0, 0, .89444],
                                10928: [.19667, .69667, 0, 0, .89444],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Main-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .11417, 0, .38611],
                                34: [0, .69444, .07939, 0, .62055],
                                35: [.19444, .69444, .06833, 0, .94444],
                                37: [.05556, .75, .12861, 0, .94444],
                                38: [0, .69444, .08528, 0, .88555],
                                39: [0, .69444, .12945, 0, .35555],
                                40: [.25, .75, .15806, 0, .47333],
                                41: [.25, .75, .03306, 0, .47333],
                                42: [0, .75, .14333, 0, .59111],
                                43: [.10333, .60333, .03306, 0, .88555],
                                44: [.19444, .14722, 0, 0, .35555],
                                45: [0, .44444, .02611, 0, .41444],
                                46: [0, .14722, 0, 0, .35555],
                                47: [.25, .75, .15806, 0, .59111],
                                48: [0, .64444, .13167, 0, .59111],
                                49: [0, .64444, .13167, 0, .59111],
                                50: [0, .64444, .13167, 0, .59111],
                                51: [0, .64444, .13167, 0, .59111],
                                52: [.19444, .64444, .13167, 0, .59111],
                                53: [0, .64444, .13167, 0, .59111],
                                54: [0, .64444, .13167, 0, .59111],
                                55: [.19444, .64444, .13167, 0, .59111],
                                56: [0, .64444, .13167, 0, .59111],
                                57: [0, .64444, .13167, 0, .59111],
                                58: [0, .44444, .06695, 0, .35555],
                                59: [.19444, .44444, .06695, 0, .35555],
                                61: [-.10889, .39111, .06833, 0, .88555],
                                63: [0, .69444, .11472, 0, .59111],
                                64: [0, .69444, .09208, 0, .88555],
                                65: [0, .68611, 0, 0, .86555],
                                66: [0, .68611, .0992, 0, .81666],
                                67: [0, .68611, .14208, 0, .82666],
                                68: [0, .68611, .09062, 0, .87555],
                                69: [0, .68611, .11431, 0, .75666],
                                70: [0, .68611, .12903, 0, .72722],
                                71: [0, .68611, .07347, 0, .89527],
                                72: [0, .68611, .17208, 0, .8961],
                                73: [0, .68611, .15681, 0, .47166],
                                74: [0, .68611, .145, 0, .61055],
                                75: [0, .68611, .14208, 0, .89499],
                                76: [0, .68611, 0, 0, .69777],
                                77: [0, .68611, .17208, 0, 1.07277],
                                78: [0, .68611, .17208, 0, .8961],
                                79: [0, .68611, .09062, 0, .85499],
                                80: [0, .68611, .0992, 0, .78721],
                                81: [.19444, .68611, .09062, 0, .85499],
                                82: [0, .68611, .02559, 0, .85944],
                                83: [0, .68611, .11264, 0, .64999],
                                84: [0, .68611, .12903, 0, .7961],
                                85: [0, .68611, .17208, 0, .88083],
                                86: [0, .68611, .18625, 0, .86555],
                                87: [0, .68611, .18625, 0, 1.15999],
                                88: [0, .68611, .15681, 0, .86555],
                                89: [0, .68611, .19803, 0, .86555],
                                90: [0, .68611, .14208, 0, .70888],
                                91: [.25, .75, .1875, 0, .35611],
                                93: [.25, .75, .09972, 0, .35611],
                                94: [0, .69444, .06709, 0, .59111],
                                95: [.31, .13444, .09811, 0, .59111],
                                97: [0, .44444, .09426, 0, .59111],
                                98: [0, .69444, .07861, 0, .53222],
                                99: [0, .44444, .05222, 0, .53222],
                                100: [0, .69444, .10861, 0, .59111],
                                101: [0, .44444, .085, 0, .53222],
                                102: [.19444, .69444, .21778, 0, .4],
                                103: [.19444, .44444, .105, 0, .53222],
                                104: [0, .69444, .09426, 0, .59111],
                                105: [0, .69326, .11387, 0, .35555],
                                106: [.19444, .69326, .1672, 0, .35555],
                                107: [0, .69444, .11111, 0, .53222],
                                108: [0, .69444, .10861, 0, .29666],
                                109: [0, .44444, .09426, 0, .94444],
                                110: [0, .44444, .09426, 0, .64999],
                                111: [0, .44444, .07861, 0, .59111],
                                112: [.19444, .44444, .07861, 0, .59111],
                                113: [.19444, .44444, .105, 0, .53222],
                                114: [0, .44444, .11111, 0, .50167],
                                115: [0, .44444, .08167, 0, .48694],
                                116: [0, .63492, .09639, 0, .385],
                                117: [0, .44444, .09426, 0, .62055],
                                118: [0, .44444, .11111, 0, .53222],
                                119: [0, .44444, .11111, 0, .76777],
                                120: [0, .44444, .12583, 0, .56055],
                                121: [.19444, .44444, .105, 0, .56166],
                                122: [0, .44444, .13889, 0, .49055],
                                126: [.35, .34444, .11472, 0, .59111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, .11473, 0, .59111],
                                176: [0, .69444, 0, 0, .94888],
                                184: [.17014, 0, 0, 0, .53222],
                                198: [0, .68611, .11431, 0, 1.02277],
                                216: [.04861, .73472, .09062, 0, .88555],
                                223: [.19444, .69444, .09736, 0, .665],
                                230: [0, .44444, .085, 0, .82666],
                                248: [.09722, .54167, .09458, 0, .59111],
                                305: [0, .44444, .09426, 0, .35555],
                                338: [0, .68611, .11431, 0, 1.14054],
                                339: [0, .44444, .085, 0, .82666],
                                567: [.19444, .44444, .04611, 0, .385],
                                710: [0, .69444, .06709, 0, .59111],
                                711: [0, .63194, .08271, 0, .59111],
                                713: [0, .59444, .10444, 0, .59111],
                                714: [0, .69444, .08528, 0, .59111],
                                715: [0, .69444, 0, 0, .59111],
                                728: [0, .69444, .10333, 0, .59111],
                                729: [0, .69444, .12945, 0, .35555],
                                730: [0, .69444, 0, 0, .94888],
                                732: [0, .69444, .11472, 0, .59111],
                                733: [0, .69444, .11472, 0, .59111],
                                915: [0, .68611, .12903, 0, .69777],
                                916: [0, .68611, 0, 0, .94444],
                                920: [0, .68611, .09062, 0, .88555],
                                923: [0, .68611, 0, 0, .80666],
                                926: [0, .68611, .15092, 0, .76777],
                                928: [0, .68611, .17208, 0, .8961],
                                931: [0, .68611, .11431, 0, .82666],
                                933: [0, .68611, .10778, 0, .88555],
                                934: [0, .68611, .05632, 0, .82666],
                                936: [0, .68611, .10778, 0, .88555],
                                937: [0, .68611, .0992, 0, .82666],
                                8211: [0, .44444, .09811, 0, .59111],
                                8212: [0, .44444, .09811, 0, 1.18221],
                                8216: [0, .69444, .12945, 0, .35555],
                                8217: [0, .69444, .12945, 0, .35555],
                                8220: [0, .69444, .16772, 0, .62055],
                                8221: [0, .69444, .07939, 0, .62055]
                            },
                            "Main-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .12417, 0, .30667],
                                34: [0, .69444, .06961, 0, .51444],
                                35: [.19444, .69444, .06616, 0, .81777],
                                37: [.05556, .75, .13639, 0, .81777],
                                38: [0, .69444, .09694, 0, .76666],
                                39: [0, .69444, .12417, 0, .30667],
                                40: [.25, .75, .16194, 0, .40889],
                                41: [.25, .75, .03694, 0, .40889],
                                42: [0, .75, .14917, 0, .51111],
                                43: [.05667, .56167, .03694, 0, .76666],
                                44: [.19444, .10556, 0, 0, .30667],
                                45: [0, .43056, .02826, 0, .35778],
                                46: [0, .10556, 0, 0, .30667],
                                47: [.25, .75, .16194, 0, .51111],
                                48: [0, .64444, .13556, 0, .51111],
                                49: [0, .64444, .13556, 0, .51111],
                                50: [0, .64444, .13556, 0, .51111],
                                51: [0, .64444, .13556, 0, .51111],
                                52: [.19444, .64444, .13556, 0, .51111],
                                53: [0, .64444, .13556, 0, .51111],
                                54: [0, .64444, .13556, 0, .51111],
                                55: [.19444, .64444, .13556, 0, .51111],
                                56: [0, .64444, .13556, 0, .51111],
                                57: [0, .64444, .13556, 0, .51111],
                                58: [0, .43056, .0582, 0, .30667],
                                59: [.19444, .43056, .0582, 0, .30667],
                                61: [-.13313, .36687, .06616, 0, .76666],
                                63: [0, .69444, .1225, 0, .51111],
                                64: [0, .69444, .09597, 0, .76666],
                                65: [0, .68333, 0, 0, .74333],
                                66: [0, .68333, .10257, 0, .70389],
                                67: [0, .68333, .14528, 0, .71555],
                                68: [0, .68333, .09403, 0, .755],
                                69: [0, .68333, .12028, 0, .67833],
                                70: [0, .68333, .13305, 0, .65277],
                                71: [0, .68333, .08722, 0, .77361],
                                72: [0, .68333, .16389, 0, .74333],
                                73: [0, .68333, .15806, 0, .38555],
                                74: [0, .68333, .14028, 0, .525],
                                75: [0, .68333, .14528, 0, .76888],
                                76: [0, .68333, 0, 0, .62722],
                                77: [0, .68333, .16389, 0, .89666],
                                78: [0, .68333, .16389, 0, .74333],
                                79: [0, .68333, .09403, 0, .76666],
                                80: [0, .68333, .10257, 0, .67833],
                                81: [.19444, .68333, .09403, 0, .76666],
                                82: [0, .68333, .03868, 0, .72944],
                                83: [0, .68333, .11972, 0, .56222],
                                84: [0, .68333, .13305, 0, .71555],
                                85: [0, .68333, .16389, 0, .74333],
                                86: [0, .68333, .18361, 0, .74333],
                                87: [0, .68333, .18361, 0, .99888],
                                88: [0, .68333, .15806, 0, .74333],
                                89: [0, .68333, .19383, 0, .74333],
                                90: [0, .68333, .14528, 0, .61333],
                                91: [.25, .75, .1875, 0, .30667],
                                93: [.25, .75, .10528, 0, .30667],
                                94: [0, .69444, .06646, 0, .51111],
                                95: [.31, .12056, .09208, 0, .51111],
                                97: [0, .43056, .07671, 0, .51111],
                                98: [0, .69444, .06312, 0, .46],
                                99: [0, .43056, .05653, 0, .46],
                                100: [0, .69444, .10333, 0, .51111],
                                101: [0, .43056, .07514, 0, .46],
                                102: [.19444, .69444, .21194, 0, .30667],
                                103: [.19444, .43056, .08847, 0, .46],
                                104: [0, .69444, .07671, 0, .51111],
                                105: [0, .65536, .1019, 0, .30667],
                                106: [.19444, .65536, .14467, 0, .30667],
                                107: [0, .69444, .10764, 0, .46],
                                108: [0, .69444, .10333, 0, .25555],
                                109: [0, .43056, .07671, 0, .81777],
                                110: [0, .43056, .07671, 0, .56222],
                                111: [0, .43056, .06312, 0, .51111],
                                112: [.19444, .43056, .06312, 0, .51111],
                                113: [.19444, .43056, .08847, 0, .46],
                                114: [0, .43056, .10764, 0, .42166],
                                115: [0, .43056, .08208, 0, .40889],
                                116: [0, .61508, .09486, 0, .33222],
                                117: [0, .43056, .07671, 0, .53666],
                                118: [0, .43056, .10764, 0, .46],
                                119: [0, .43056, .10764, 0, .66444],
                                120: [0, .43056, .12042, 0, .46389],
                                121: [.19444, .43056, .08847, 0, .48555],
                                122: [0, .43056, .12292, 0, .40889],
                                126: [.35, .31786, .11585, 0, .51111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .66786, .10474, 0, .51111],
                                176: [0, .69444, 0, 0, .83129],
                                184: [.17014, 0, 0, 0, .46],
                                198: [0, .68333, .12028, 0, .88277],
                                216: [.04861, .73194, .09403, 0, .76666],
                                223: [.19444, .69444, .10514, 0, .53666],
                                230: [0, .43056, .07514, 0, .71555],
                                248: [.09722, .52778, .09194, 0, .51111],
                                338: [0, .68333, .12028, 0, .98499],
                                339: [0, .43056, .07514, 0, .71555],
                                710: [0, .69444, .06646, 0, .51111],
                                711: [0, .62847, .08295, 0, .51111],
                                713: [0, .56167, .10333, 0, .51111],
                                714: [0, .69444, .09694, 0, .51111],
                                715: [0, .69444, 0, 0, .51111],
                                728: [0, .69444, .10806, 0, .51111],
                                729: [0, .66786, .11752, 0, .30667],
                                730: [0, .69444, 0, 0, .83129],
                                732: [0, .66786, .11585, 0, .51111],
                                733: [0, .69444, .1225, 0, .51111],
                                915: [0, .68333, .13305, 0, .62722],
                                916: [0, .68333, 0, 0, .81777],
                                920: [0, .68333, .09403, 0, .76666],
                                923: [0, .68333, 0, 0, .69222],
                                926: [0, .68333, .15294, 0, .66444],
                                928: [0, .68333, .16389, 0, .74333],
                                931: [0, .68333, .12028, 0, .71555],
                                933: [0, .68333, .11111, 0, .76666],
                                934: [0, .68333, .05986, 0, .71555],
                                936: [0, .68333, .11111, 0, .76666],
                                937: [0, .68333, .10257, 0, .71555],
                                8211: [0, .43056, .09208, 0, .51111],
                                8212: [0, .43056, .09208, 0, 1.02222],
                                8216: [0, .69444, .12417, 0, .30667],
                                8217: [0, .69444, .12417, 0, .30667],
                                8220: [0, .69444, .1685, 0, .51444],
                                8221: [0, .69444, .06961, 0, .51444],
                                8463: [0, .68889, 0, 0, .54028]
                            },
                            "Main-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .27778],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .77778],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.19444, .10556, 0, 0, .27778],
                                45: [0, .43056, 0, 0, .33333],
                                46: [0, .10556, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .64444, 0, 0, .5],
                                49: [0, .64444, 0, 0, .5],
                                50: [0, .64444, 0, 0, .5],
                                51: [0, .64444, 0, 0, .5],
                                52: [0, .64444, 0, 0, .5],
                                53: [0, .64444, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [0, .64444, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [0, .64444, 0, 0, .5],
                                58: [0, .43056, 0, 0, .27778],
                                59: [.19444, .43056, 0, 0, .27778],
                                60: [.0391, .5391, 0, 0, .77778],
                                61: [-.13313, .36687, 0, 0, .77778],
                                62: [.0391, .5391, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .77778],
                                65: [0, .68333, 0, 0, .75],
                                66: [0, .68333, 0, 0, .70834],
                                67: [0, .68333, 0, 0, .72222],
                                68: [0, .68333, 0, 0, .76389],
                                69: [0, .68333, 0, 0, .68056],
                                70: [0, .68333, 0, 0, .65278],
                                71: [0, .68333, 0, 0, .78472],
                                72: [0, .68333, 0, 0, .75],
                                73: [0, .68333, 0, 0, .36111],
                                74: [0, .68333, 0, 0, .51389],
                                75: [0, .68333, 0, 0, .77778],
                                76: [0, .68333, 0, 0, .625],
                                77: [0, .68333, 0, 0, .91667],
                                78: [0, .68333, 0, 0, .75],
                                79: [0, .68333, 0, 0, .77778],
                                80: [0, .68333, 0, 0, .68056],
                                81: [.19444, .68333, 0, 0, .77778],
                                82: [0, .68333, 0, 0, .73611],
                                83: [0, .68333, 0, 0, .55556],
                                84: [0, .68333, 0, 0, .72222],
                                85: [0, .68333, 0, 0, .75],
                                86: [0, .68333, .01389, 0, .75],
                                87: [0, .68333, .01389, 0, 1.02778],
                                88: [0, .68333, 0, 0, .75],
                                89: [0, .68333, .025, 0, .75],
                                90: [0, .68333, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .27778],
                                92: [.25, .75, 0, 0, .5],
                                93: [.25, .75, 0, 0, .27778],
                                94: [0, .69444, 0, 0, .5],
                                95: [.31, .12056, .02778, 0, .5],
                                97: [0, .43056, 0, 0, .5],
                                98: [0, .69444, 0, 0, .55556],
                                99: [0, .43056, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .55556],
                                101: [0, .43056, 0, 0, .44445],
                                102: [0, .69444, .07778, 0, .30556],
                                103: [.19444, .43056, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .55556],
                                105: [0, .66786, 0, 0, .27778],
                                106: [.19444, .66786, 0, 0, .30556],
                                107: [0, .69444, 0, 0, .52778],
                                108: [0, .69444, 0, 0, .27778],
                                109: [0, .43056, 0, 0, .83334],
                                110: [0, .43056, 0, 0, .55556],
                                111: [0, .43056, 0, 0, .5],
                                112: [.19444, .43056, 0, 0, .55556],
                                113: [.19444, .43056, 0, 0, .52778],
                                114: [0, .43056, 0, 0, .39167],
                                115: [0, .43056, 0, 0, .39445],
                                116: [0, .61508, 0, 0, .38889],
                                117: [0, .43056, 0, 0, .55556],
                                118: [0, .43056, .01389, 0, .52778],
                                119: [0, .43056, .01389, 0, .72222],
                                120: [0, .43056, 0, 0, .52778],
                                121: [.19444, .43056, .01389, 0, .52778],
                                122: [0, .43056, 0, 0, .44445],
                                123: [.25, .75, 0, 0, .5],
                                124: [.25, .75, 0, 0, .27778],
                                125: [.25, .75, 0, 0, .5],
                                126: [.35, .31786, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .76909],
                                167: [.19444, .69444, 0, 0, .44445],
                                168: [0, .66786, 0, 0, .5],
                                172: [0, .43056, 0, 0, .66667],
                                176: [0, .69444, 0, 0, .75],
                                177: [.08333, .58333, 0, 0, .77778],
                                182: [.19444, .69444, 0, 0, .61111],
                                184: [.17014, 0, 0, 0, .44445],
                                198: [0, .68333, 0, 0, .90278],
                                215: [.08333, .58333, 0, 0, .77778],
                                216: [.04861, .73194, 0, 0, .77778],
                                223: [0, .69444, 0, 0, .5],
                                230: [0, .43056, 0, 0, .72222],
                                247: [.08333, .58333, 0, 0, .77778],
                                248: [.09722, .52778, 0, 0, .5],
                                305: [0, .43056, 0, 0, .27778],
                                338: [0, .68333, 0, 0, 1.01389],
                                339: [0, .43056, 0, 0, .77778],
                                567: [.19444, .43056, 0, 0, .30556],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .62847, 0, 0, .5],
                                713: [0, .56778, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .66786, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .75],
                                732: [0, .66786, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .68333, 0, 0, .625],
                                916: [0, .68333, 0, 0, .83334],
                                920: [0, .68333, 0, 0, .77778],
                                923: [0, .68333, 0, 0, .69445],
                                926: [0, .68333, 0, 0, .66667],
                                928: [0, .68333, 0, 0, .75],
                                931: [0, .68333, 0, 0, .72222],
                                933: [0, .68333, 0, 0, .77778],
                                934: [0, .68333, 0, 0, .72222],
                                936: [0, .68333, 0, 0, .77778],
                                937: [0, .68333, 0, 0, .72222],
                                8211: [0, .43056, .02778, 0, .5],
                                8212: [0, .43056, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5],
                                8224: [.19444, .69444, 0, 0, .44445],
                                8225: [.19444, .69444, 0, 0, .44445],
                                8230: [0, .12, 0, 0, 1.172],
                                8242: [0, .55556, 0, 0, .275],
                                8407: [0, .71444, .15382, 0, .5],
                                8463: [0, .68889, 0, 0, .54028],
                                8465: [0, .69444, 0, 0, .72222],
                                8467: [0, .69444, 0, .11111, .41667],
                                8472: [.19444, .43056, 0, .11111, .63646],
                                8476: [0, .69444, 0, 0, .72222],
                                8501: [0, .69444, 0, 0, .61111],
                                8592: [-.13313, .36687, 0, 0, 1],
                                8593: [.19444, .69444, 0, 0, .5],
                                8594: [-.13313, .36687, 0, 0, 1],
                                8595: [.19444, .69444, 0, 0, .5],
                                8596: [-.13313, .36687, 0, 0, 1],
                                8597: [.25, .75, 0, 0, .5],
                                8598: [.19444, .69444, 0, 0, 1],
                                8599: [.19444, .69444, 0, 0, 1],
                                8600: [.19444, .69444, 0, 0, 1],
                                8601: [.19444, .69444, 0, 0, 1],
                                8614: [.011, .511, 0, 0, 1],
                                8617: [.011, .511, 0, 0, 1.126],
                                8618: [.011, .511, 0, 0, 1.126],
                                8636: [-.13313, .36687, 0, 0, 1],
                                8637: [-.13313, .36687, 0, 0, 1],
                                8640: [-.13313, .36687, 0, 0, 1],
                                8641: [-.13313, .36687, 0, 0, 1],
                                8652: [.011, .671, 0, 0, 1],
                                8656: [-.13313, .36687, 0, 0, 1],
                                8657: [.19444, .69444, 0, 0, .61111],
                                8658: [-.13313, .36687, 0, 0, 1],
                                8659: [.19444, .69444, 0, 0, .61111],
                                8660: [-.13313, .36687, 0, 0, 1],
                                8661: [.25, .75, 0, 0, .61111],
                                8704: [0, .69444, 0, 0, .55556],
                                8706: [0, .69444, .05556, .08334, .5309],
                                8707: [0, .69444, 0, 0, .55556],
                                8709: [.05556, .75, 0, 0, .5],
                                8711: [0, .68333, 0, 0, .83334],
                                8712: [.0391, .5391, 0, 0, .66667],
                                8715: [.0391, .5391, 0, 0, .66667],
                                8722: [.08333, .58333, 0, 0, .77778],
                                8723: [.08333, .58333, 0, 0, .77778],
                                8725: [.25, .75, 0, 0, .5],
                                8726: [.25, .75, 0, 0, .5],
                                8727: [-.03472, .46528, 0, 0, .5],
                                8728: [-.05555, .44445, 0, 0, .5],
                                8729: [-.05555, .44445, 0, 0, .5],
                                8730: [.2, .8, 0, 0, .83334],
                                8733: [0, .43056, 0, 0, .77778],
                                8734: [0, .43056, 0, 0, 1],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .27778],
                                8741: [.25, .75, 0, 0, .5],
                                8743: [0, .55556, 0, 0, .66667],
                                8744: [0, .55556, 0, 0, .66667],
                                8745: [0, .55556, 0, 0, .66667],
                                8746: [0, .55556, 0, 0, .66667],
                                8747: [.19444, .69444, .11111, 0, .41667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8768: [.19444, .69444, 0, 0, .27778],
                                8771: [-.03625, .46375, 0, 0, .77778],
                                8773: [-.022, .589, 0, 0, 1],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8781: [-.03625, .46375, 0, 0, .77778],
                                8784: [-.133, .67, 0, 0, .778],
                                8801: [-.03625, .46375, 0, 0, .77778],
                                8804: [.13597, .63597, 0, 0, .77778],
                                8805: [.13597, .63597, 0, 0, .77778],
                                8810: [.0391, .5391, 0, 0, 1],
                                8811: [.0391, .5391, 0, 0, 1],
                                8826: [.0391, .5391, 0, 0, .77778],
                                8827: [.0391, .5391, 0, 0, .77778],
                                8834: [.0391, .5391, 0, 0, .77778],
                                8835: [.0391, .5391, 0, 0, .77778],
                                8838: [.13597, .63597, 0, 0, .77778],
                                8839: [.13597, .63597, 0, 0, .77778],
                                8846: [0, .55556, 0, 0, .66667],
                                8849: [.13597, .63597, 0, 0, .77778],
                                8850: [.13597, .63597, 0, 0, .77778],
                                8851: [0, .55556, 0, 0, .66667],
                                8852: [0, .55556, 0, 0, .66667],
                                8853: [.08333, .58333, 0, 0, .77778],
                                8854: [.08333, .58333, 0, 0, .77778],
                                8855: [.08333, .58333, 0, 0, .77778],
                                8856: [.08333, .58333, 0, 0, .77778],
                                8857: [.08333, .58333, 0, 0, .77778],
                                8866: [0, .69444, 0, 0, .61111],
                                8867: [0, .69444, 0, 0, .61111],
                                8868: [0, .69444, 0, 0, .77778],
                                8869: [0, .69444, 0, 0, .77778],
                                8872: [.249, .75, 0, 0, .867],
                                8900: [-.05555, .44445, 0, 0, .5],
                                8901: [-.05555, .44445, 0, 0, .27778],
                                8902: [-.03472, .46528, 0, 0, .5],
                                8904: [.005, .505, 0, 0, .9],
                                8942: [.03, .9, 0, 0, .278],
                                8943: [-.19, .31, 0, 0, 1.172],
                                8945: [-.1, .82, 0, 0, 1.282],
                                8968: [.25, .75, 0, 0, .44445],
                                8969: [.25, .75, 0, 0, .44445],
                                8970: [.25, .75, 0, 0, .44445],
                                8971: [.25, .75, 0, 0, .44445],
                                8994: [-.14236, .35764, 0, 0, 1],
                                8995: [-.14236, .35764, 0, 0, 1],
                                9136: [.244, .744, 0, 0, .412],
                                9137: [.244, .744, 0, 0, .412],
                                9651: [.19444, .69444, 0, 0, .88889],
                                9657: [-.03472, .46528, 0, 0, .5],
                                9661: [.19444, .69444, 0, 0, .88889],
                                9667: [-.03472, .46528, 0, 0, .5],
                                9711: [.19444, .69444, 0, 0, 1],
                                9824: [.12963, .69444, 0, 0, .77778],
                                9825: [.12963, .69444, 0, 0, .77778],
                                9826: [.12963, .69444, 0, 0, .77778],
                                9827: [.12963, .69444, 0, 0, .77778],
                                9837: [0, .75, 0, 0, .38889],
                                9838: [.19444, .69444, 0, 0, .38889],
                                9839: [.19444, .69444, 0, 0, .38889],
                                10216: [.25, .75, 0, 0, .38889],
                                10217: [.25, .75, 0, 0, .38889],
                                10222: [.244, .744, 0, 0, .412],
                                10223: [.244, .744, 0, 0, .412],
                                10229: [.011, .511, 0, 0, 1.609],
                                10230: [.011, .511, 0, 0, 1.638],
                                10231: [.011, .511, 0, 0, 1.859],
                                10232: [.024, .525, 0, 0, 1.609],
                                10233: [.024, .525, 0, 0, 1.638],
                                10234: [.024, .525, 0, 0, 1.858],
                                10236: [.011, .511, 0, 0, 1.638],
                                10815: [0, .68333, 0, 0, .75],
                                10927: [.13597, .63597, 0, 0, .77778],
                                10928: [.13597, .63597, 0, 0, .77778],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Math-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .44444, 0, 0, .575],
                                49: [0, .44444, 0, 0, .575],
                                50: [0, .44444, 0, 0, .575],
                                51: [.19444, .44444, 0, 0, .575],
                                52: [.19444, .44444, 0, 0, .575],
                                53: [.19444, .44444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [.19444, .44444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [.19444, .44444, 0, 0, .575],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, .04835, 0, .8664],
                                67: [0, .68611, .06979, 0, .81694],
                                68: [0, .68611, .03194, 0, .93812],
                                69: [0, .68611, .05451, 0, .81007],
                                70: [0, .68611, .15972, 0, .68889],
                                71: [0, .68611, 0, 0, .88673],
                                72: [0, .68611, .08229, 0, .98229],
                                73: [0, .68611, .07778, 0, .51111],
                                74: [0, .68611, .10069, 0, .63125],
                                75: [0, .68611, .06979, 0, .97118],
                                76: [0, .68611, 0, 0, .75555],
                                77: [0, .68611, .11424, 0, 1.14201],
                                78: [0, .68611, .11424, 0, .95034],
                                79: [0, .68611, .03194, 0, .83666],
                                80: [0, .68611, .15972, 0, .72309],
                                81: [.19444, .68611, 0, 0, .86861],
                                82: [0, .68611, .00421, 0, .87235],
                                83: [0, .68611, .05382, 0, .69271],
                                84: [0, .68611, .15972, 0, .63663],
                                85: [0, .68611, .11424, 0, .80027],
                                86: [0, .68611, .25555, 0, .67778],
                                87: [0, .68611, .15972, 0, 1.09305],
                                88: [0, .68611, .07778, 0, .94722],
                                89: [0, .68611, .25555, 0, .67458],
                                90: [0, .68611, .06979, 0, .77257],
                                97: [0, .44444, 0, 0, .63287],
                                98: [0, .69444, 0, 0, .52083],
                                99: [0, .44444, 0, 0, .51342],
                                100: [0, .69444, 0, 0, .60972],
                                101: [0, .44444, 0, 0, .55361],
                                102: [.19444, .69444, .11042, 0, .56806],
                                103: [.19444, .44444, .03704, 0, .5449],
                                104: [0, .69444, 0, 0, .66759],
                                105: [0, .69326, 0, 0, .4048],
                                106: [.19444, .69326, .0622, 0, .47083],
                                107: [0, .69444, .01852, 0, .6037],
                                108: [0, .69444, .0088, 0, .34815],
                                109: [0, .44444, 0, 0, 1.0324],
                                110: [0, .44444, 0, 0, .71296],
                                111: [0, .44444, 0, 0, .58472],
                                112: [.19444, .44444, 0, 0, .60092],
                                113: [.19444, .44444, .03704, 0, .54213],
                                114: [0, .44444, .03194, 0, .5287],
                                115: [0, .44444, 0, 0, .53125],
                                116: [0, .63492, 0, 0, .41528],
                                117: [0, .44444, 0, 0, .68102],
                                118: [0, .44444, .03704, 0, .56666],
                                119: [0, .44444, .02778, 0, .83148],
                                120: [0, .44444, 0, 0, .65903],
                                121: [.19444, .44444, .03704, 0, .59028],
                                122: [0, .44444, .04213, 0, .55509],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68611, .15972, 0, .65694],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, .03194, 0, .86722],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, .07458, 0, .84125],
                                928: [0, .68611, .08229, 0, .98229],
                                931: [0, .68611, .05451, 0, .88507],
                                933: [0, .68611, .15972, 0, .67083],
                                934: [0, .68611, 0, 0, .76666],
                                936: [0, .68611, .11653, 0, .71402],
                                937: [0, .68611, .04835, 0, .8789],
                                945: [0, .44444, 0, 0, .76064],
                                946: [.19444, .69444, .03403, 0, .65972],
                                947: [.19444, .44444, .06389, 0, .59003],
                                948: [0, .69444, .03819, 0, .52222],
                                949: [0, .44444, 0, 0, .52882],
                                950: [.19444, .69444, .06215, 0, .50833],
                                951: [.19444, .44444, .03704, 0, .6],
                                952: [0, .69444, .03194, 0, .5618],
                                953: [0, .44444, 0, 0, .41204],
                                954: [0, .44444, 0, 0, .66759],
                                955: [0, .69444, 0, 0, .67083],
                                956: [.19444, .44444, 0, 0, .70787],
                                957: [0, .44444, .06898, 0, .57685],
                                958: [.19444, .69444, .03021, 0, .50833],
                                959: [0, .44444, 0, 0, .58472],
                                960: [0, .44444, .03704, 0, .68241],
                                961: [.19444, .44444, 0, 0, .6118],
                                962: [.09722, .44444, .07917, 0, .42361],
                                963: [0, .44444, .03704, 0, .68588],
                                964: [0, .44444, .13472, 0, .52083],
                                965: [0, .44444, .03704, 0, .63055],
                                966: [.19444, .44444, 0, 0, .74722],
                                967: [.19444, .44444, 0, 0, .71805],
                                968: [.19444, .69444, .03704, 0, .75833],
                                969: [0, .44444, .03704, 0, .71782],
                                977: [0, .69444, 0, 0, .69155],
                                981: [.19444, .69444, 0, 0, .7125],
                                982: [0, .44444, .03194, 0, .975],
                                1009: [.19444, .44444, 0, 0, .6118],
                                1013: [0, .44444, 0, 0, .48333],
                                57649: [0, .44444, 0, 0, .39352],
                                57911: [.19444, .44444, 0, 0, .43889]
                            },
                            "Math-Italic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .43056, 0, 0, .5],
                                49: [0, .43056, 0, 0, .5],
                                50: [0, .43056, 0, 0, .5],
                                51: [.19444, .43056, 0, 0, .5],
                                52: [.19444, .43056, 0, 0, .5],
                                53: [.19444, .43056, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [.19444, .43056, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [.19444, .43056, 0, 0, .5],
                                65: [0, .68333, 0, .13889, .75],
                                66: [0, .68333, .05017, .08334, .75851],
                                67: [0, .68333, .07153, .08334, .71472],
                                68: [0, .68333, .02778, .05556, .82792],
                                69: [0, .68333, .05764, .08334, .7382],
                                70: [0, .68333, .13889, .08334, .64306],
                                71: [0, .68333, 0, .08334, .78625],
                                72: [0, .68333, .08125, .05556, .83125],
                                73: [0, .68333, .07847, .11111, .43958],
                                74: [0, .68333, .09618, .16667, .55451],
                                75: [0, .68333, .07153, .05556, .84931],
                                76: [0, .68333, 0, .02778, .68056],
                                77: [0, .68333, .10903, .08334, .97014],
                                78: [0, .68333, .10903, .08334, .80347],
                                79: [0, .68333, .02778, .08334, .76278],
                                80: [0, .68333, .13889, .08334, .64201],
                                81: [.19444, .68333, 0, .08334, .79056],
                                82: [0, .68333, .00773, .08334, .75929],
                                83: [0, .68333, .05764, .08334, .6132],
                                84: [0, .68333, .13889, .08334, .58438],
                                85: [0, .68333, .10903, .02778, .68278],
                                86: [0, .68333, .22222, 0, .58333],
                                87: [0, .68333, .13889, 0, .94445],
                                88: [0, .68333, .07847, .08334, .82847],
                                89: [0, .68333, .22222, 0, .58056],
                                90: [0, .68333, .07153, .08334, .68264],
                                97: [0, .43056, 0, 0, .52859],
                                98: [0, .69444, 0, 0, .42917],
                                99: [0, .43056, 0, .05556, .43276],
                                100: [0, .69444, 0, .16667, .52049],
                                101: [0, .43056, 0, .05556, .46563],
                                102: [.19444, .69444, .10764, .16667, .48959],
                                103: [.19444, .43056, .03588, .02778, .47697],
                                104: [0, .69444, 0, 0, .57616],
                                105: [0, .65952, 0, 0, .34451],
                                106: [.19444, .65952, .05724, 0, .41181],
                                107: [0, .69444, .03148, 0, .5206],
                                108: [0, .69444, .01968, .08334, .29838],
                                109: [0, .43056, 0, 0, .87801],
                                110: [0, .43056, 0, 0, .60023],
                                111: [0, .43056, 0, .05556, .48472],
                                112: [.19444, .43056, 0, .08334, .50313],
                                113: [.19444, .43056, .03588, .08334, .44641],
                                114: [0, .43056, .02778, .05556, .45116],
                                115: [0, .43056, 0, .05556, .46875],
                                116: [0, .61508, 0, .08334, .36111],
                                117: [0, .43056, 0, .02778, .57246],
                                118: [0, .43056, .03588, .02778, .48472],
                                119: [0, .43056, .02691, .08334, .71592],
                                120: [0, .43056, 0, .02778, .57153],
                                121: [.19444, .43056, .03588, .05556, .49028],
                                122: [0, .43056, .04398, .05556, .46505],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68333, .13889, .08334, .61528],
                                916: [0, .68333, 0, .16667, .83334],
                                920: [0, .68333, .02778, .08334, .76278],
                                923: [0, .68333, 0, .16667, .69445],
                                926: [0, .68333, .07569, .08334, .74236],
                                928: [0, .68333, .08125, .05556, .83125],
                                931: [0, .68333, .05764, .08334, .77986],
                                933: [0, .68333, .13889, .05556, .58333],
                                934: [0, .68333, 0, .08334, .66667],
                                936: [0, .68333, .11, .05556, .61222],
                                937: [0, .68333, .05017, .08334, .7724],
                                945: [0, .43056, .0037, .02778, .6397],
                                946: [.19444, .69444, .05278, .08334, .56563],
                                947: [.19444, .43056, .05556, 0, .51773],
                                948: [0, .69444, .03785, .05556, .44444],
                                949: [0, .43056, 0, .08334, .46632],
                                950: [.19444, .69444, .07378, .08334, .4375],
                                951: [.19444, .43056, .03588, .05556, .49653],
                                952: [0, .69444, .02778, .08334, .46944],
                                953: [0, .43056, 0, .05556, .35394],
                                954: [0, .43056, 0, 0, .57616],
                                955: [0, .69444, 0, 0, .58334],
                                956: [.19444, .43056, 0, .02778, .60255],
                                957: [0, .43056, .06366, .02778, .49398],
                                958: [.19444, .69444, .04601, .11111, .4375],
                                959: [0, .43056, 0, .05556, .48472],
                                960: [0, .43056, .03588, 0, .57003],
                                961: [.19444, .43056, 0, .08334, .51702],
                                962: [.09722, .43056, .07986, .08334, .36285],
                                963: [0, .43056, .03588, 0, .57141],
                                964: [0, .43056, .1132, .02778, .43715],
                                965: [0, .43056, .03588, .02778, .54028],
                                966: [.19444, .43056, 0, .08334, .65417],
                                967: [.19444, .43056, 0, .05556, .62569],
                                968: [.19444, .69444, .03588, .11111, .65139],
                                969: [0, .43056, .03588, 0, .62245],
                                977: [0, .69444, 0, .08334, .59144],
                                981: [.19444, .69444, 0, .08334, .59583],
                                982: [0, .43056, .02778, 0, .82813],
                                1009: [.19444, .43056, 0, .08334, .51702],
                                1013: [0, .43056, 0, .05556, .4059],
                                57649: [0, .43056, 0, .02778, .32246],
                                57911: [.19444, .43056, 0, .08334, .38403]
                            },
                            "SansSerif-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .36667],
                                34: [0, .69444, 0, 0, .55834],
                                35: [.19444, .69444, 0, 0, .91667],
                                36: [.05556, .75, 0, 0, .55],
                                37: [.05556, .75, 0, 0, 1.02912],
                                38: [0, .69444, 0, 0, .83056],
                                39: [0, .69444, 0, 0, .30556],
                                40: [.25, .75, 0, 0, .42778],
                                41: [.25, .75, 0, 0, .42778],
                                42: [0, .75, 0, 0, .55],
                                43: [.11667, .61667, 0, 0, .85556],
                                44: [.10556, .13056, 0, 0, .30556],
                                45: [0, .45833, 0, 0, .36667],
                                46: [0, .13056, 0, 0, .30556],
                                47: [.25, .75, 0, 0, .55],
                                48: [0, .69444, 0, 0, .55],
                                49: [0, .69444, 0, 0, .55],
                                50: [0, .69444, 0, 0, .55],
                                51: [0, .69444, 0, 0, .55],
                                52: [0, .69444, 0, 0, .55],
                                53: [0, .69444, 0, 0, .55],
                                54: [0, .69444, 0, 0, .55],
                                55: [0, .69444, 0, 0, .55],
                                56: [0, .69444, 0, 0, .55],
                                57: [0, .69444, 0, 0, .55],
                                58: [0, .45833, 0, 0, .30556],
                                59: [.10556, .45833, 0, 0, .30556],
                                61: [-.09375, .40625, 0, 0, .85556],
                                63: [0, .69444, 0, 0, .51945],
                                64: [0, .69444, 0, 0, .73334],
                                65: [0, .69444, 0, 0, .73334],
                                66: [0, .69444, 0, 0, .73334],
                                67: [0, .69444, 0, 0, .70278],
                                68: [0, .69444, 0, 0, .79445],
                                69: [0, .69444, 0, 0, .64167],
                                70: [0, .69444, 0, 0, .61111],
                                71: [0, .69444, 0, 0, .73334],
                                72: [0, .69444, 0, 0, .79445],
                                73: [0, .69444, 0, 0, .33056],
                                74: [0, .69444, 0, 0, .51945],
                                75: [0, .69444, 0, 0, .76389],
                                76: [0, .69444, 0, 0, .58056],
                                77: [0, .69444, 0, 0, .97778],
                                78: [0, .69444, 0, 0, .79445],
                                79: [0, .69444, 0, 0, .79445],
                                80: [0, .69444, 0, 0, .70278],
                                81: [.10556, .69444, 0, 0, .79445],
                                82: [0, .69444, 0, 0, .70278],
                                83: [0, .69444, 0, 0, .61111],
                                84: [0, .69444, 0, 0, .73334],
                                85: [0, .69444, 0, 0, .76389],
                                86: [0, .69444, .01528, 0, .73334],
                                87: [0, .69444, .01528, 0, 1.03889],
                                88: [0, .69444, 0, 0, .73334],
                                89: [0, .69444, .0275, 0, .73334],
                                90: [0, .69444, 0, 0, .67223],
                                91: [.25, .75, 0, 0, .34306],
                                93: [.25, .75, 0, 0, .34306],
                                94: [0, .69444, 0, 0, .55],
                                95: [.35, .10833, .03056, 0, .55],
                                97: [0, .45833, 0, 0, .525],
                                98: [0, .69444, 0, 0, .56111],
                                99: [0, .45833, 0, 0, .48889],
                                100: [0, .69444, 0, 0, .56111],
                                101: [0, .45833, 0, 0, .51111],
                                102: [0, .69444, .07639, 0, .33611],
                                103: [.19444, .45833, .01528, 0, .55],
                                104: [0, .69444, 0, 0, .56111],
                                105: [0, .69444, 0, 0, .25556],
                                106: [.19444, .69444, 0, 0, .28611],
                                107: [0, .69444, 0, 0, .53056],
                                108: [0, .69444, 0, 0, .25556],
                                109: [0, .45833, 0, 0, .86667],
                                110: [0, .45833, 0, 0, .56111],
                                111: [0, .45833, 0, 0, .55],
                                112: [.19444, .45833, 0, 0, .56111],
                                113: [.19444, .45833, 0, 0, .56111],
                                114: [0, .45833, .01528, 0, .37222],
                                115: [0, .45833, 0, 0, .42167],
                                116: [0, .58929, 0, 0, .40417],
                                117: [0, .45833, 0, 0, .56111],
                                118: [0, .45833, .01528, 0, .5],
                                119: [0, .45833, .01528, 0, .74445],
                                120: [0, .45833, 0, 0, .5],
                                121: [.19444, .45833, .01528, 0, .5],
                                122: [0, .45833, 0, 0, .47639],
                                126: [.35, .34444, 0, 0, .55],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, 0, 0, .55],
                                176: [0, .69444, 0, 0, .73334],
                                180: [0, .69444, 0, 0, .55],
                                184: [.17014, 0, 0, 0, .48889],
                                305: [0, .45833, 0, 0, .25556],
                                567: [.19444, .45833, 0, 0, .28611],
                                710: [0, .69444, 0, 0, .55],
                                711: [0, .63542, 0, 0, .55],
                                713: [0, .63778, 0, 0, .55],
                                728: [0, .69444, 0, 0, .55],
                                729: [0, .69444, 0, 0, .30556],
                                730: [0, .69444, 0, 0, .73334],
                                732: [0, .69444, 0, 0, .55],
                                733: [0, .69444, 0, 0, .55],
                                915: [0, .69444, 0, 0, .58056],
                                916: [0, .69444, 0, 0, .91667],
                                920: [0, .69444, 0, 0, .85556],
                                923: [0, .69444, 0, 0, .67223],
                                926: [0, .69444, 0, 0, .73334],
                                928: [0, .69444, 0, 0, .79445],
                                931: [0, .69444, 0, 0, .79445],
                                933: [0, .69444, 0, 0, .85556],
                                934: [0, .69444, 0, 0, .79445],
                                936: [0, .69444, 0, 0, .85556],
                                937: [0, .69444, 0, 0, .79445],
                                8211: [0, .45833, .03056, 0, .55],
                                8212: [0, .45833, .03056, 0, 1.10001],
                                8216: [0, .69444, 0, 0, .30556],
                                8217: [0, .69444, 0, 0, .30556],
                                8220: [0, .69444, 0, 0, .55834],
                                8221: [0, .69444, 0, 0, .55834]
                            },
                            "SansSerif-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .05733, 0, .31945],
                                34: [0, .69444, .00316, 0, .5],
                                35: [.19444, .69444, .05087, 0, .83334],
                                36: [.05556, .75, .11156, 0, .5],
                                37: [.05556, .75, .03126, 0, .83334],
                                38: [0, .69444, .03058, 0, .75834],
                                39: [0, .69444, .07816, 0, .27778],
                                40: [.25, .75, .13164, 0, .38889],
                                41: [.25, .75, .02536, 0, .38889],
                                42: [0, .75, .11775, 0, .5],
                                43: [.08333, .58333, .02536, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, .01946, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, .13164, 0, .5],
                                48: [0, .65556, .11156, 0, .5],
                                49: [0, .65556, .11156, 0, .5],
                                50: [0, .65556, .11156, 0, .5],
                                51: [0, .65556, .11156, 0, .5],
                                52: [0, .65556, .11156, 0, .5],
                                53: [0, .65556, .11156, 0, .5],
                                54: [0, .65556, .11156, 0, .5],
                                55: [0, .65556, .11156, 0, .5],
                                56: [0, .65556, .11156, 0, .5],
                                57: [0, .65556, .11156, 0, .5],
                                58: [0, .44444, .02502, 0, .27778],
                                59: [.125, .44444, .02502, 0, .27778],
                                61: [-.13, .37, .05087, 0, .77778],
                                63: [0, .69444, .11809, 0, .47222],
                                64: [0, .69444, .07555, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, .08293, 0, .66667],
                                67: [0, .69444, .11983, 0, .63889],
                                68: [0, .69444, .07555, 0, .72223],
                                69: [0, .69444, .11983, 0, .59722],
                                70: [0, .69444, .13372, 0, .56945],
                                71: [0, .69444, .11983, 0, .66667],
                                72: [0, .69444, .08094, 0, .70834],
                                73: [0, .69444, .13372, 0, .27778],
                                74: [0, .69444, .08094, 0, .47222],
                                75: [0, .69444, .11983, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, .08094, 0, .875],
                                78: [0, .69444, .08094, 0, .70834],
                                79: [0, .69444, .07555, 0, .73611],
                                80: [0, .69444, .08293, 0, .63889],
                                81: [.125, .69444, .07555, 0, .73611],
                                82: [0, .69444, .08293, 0, .64584],
                                83: [0, .69444, .09205, 0, .55556],
                                84: [0, .69444, .13372, 0, .68056],
                                85: [0, .69444, .08094, 0, .6875],
                                86: [0, .69444, .1615, 0, .66667],
                                87: [0, .69444, .1615, 0, .94445],
                                88: [0, .69444, .13372, 0, .66667],
                                89: [0, .69444, .17261, 0, .66667],
                                90: [0, .69444, .11983, 0, .61111],
                                91: [.25, .75, .15942, 0, .28889],
                                93: [.25, .75, .08719, 0, .28889],
                                94: [0, .69444, .0799, 0, .5],
                                95: [.35, .09444, .08616, 0, .5],
                                97: [0, .44444, .00981, 0, .48056],
                                98: [0, .69444, .03057, 0, .51667],
                                99: [0, .44444, .08336, 0, .44445],
                                100: [0, .69444, .09483, 0, .51667],
                                101: [0, .44444, .06778, 0, .44445],
                                102: [0, .69444, .21705, 0, .30556],
                                103: [.19444, .44444, .10836, 0, .5],
                                104: [0, .69444, .01778, 0, .51667],
                                105: [0, .67937, .09718, 0, .23889],
                                106: [.19444, .67937, .09162, 0, .26667],
                                107: [0, .69444, .08336, 0, .48889],
                                108: [0, .69444, .09483, 0, .23889],
                                109: [0, .44444, .01778, 0, .79445],
                                110: [0, .44444, .01778, 0, .51667],
                                111: [0, .44444, .06613, 0, .5],
                                112: [.19444, .44444, .0389, 0, .51667],
                                113: [.19444, .44444, .04169, 0, .51667],
                                114: [0, .44444, .10836, 0, .34167],
                                115: [0, .44444, .0778, 0, .38333],
                                116: [0, .57143, .07225, 0, .36111],
                                117: [0, .44444, .04169, 0, .51667],
                                118: [0, .44444, .10836, 0, .46111],
                                119: [0, .44444, .10836, 0, .68334],
                                120: [0, .44444, .09169, 0, .46111],
                                121: [.19444, .44444, .10836, 0, .46111],
                                122: [0, .44444, .08752, 0, .43472],
                                126: [.35, .32659, .08826, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, .06385, 0, .5],
                                176: [0, .69444, 0, 0, .73752],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, .04169, 0, .23889],
                                567: [.19444, .44444, .04169, 0, .26667],
                                710: [0, .69444, .0799, 0, .5],
                                711: [0, .63194, .08432, 0, .5],
                                713: [0, .60889, .08776, 0, .5],
                                714: [0, .69444, .09205, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, .09483, 0, .5],
                                729: [0, .67937, .07774, 0, .27778],
                                730: [0, .69444, 0, 0, .73752],
                                732: [0, .67659, .08826, 0, .5],
                                733: [0, .69444, .09205, 0, .5],
                                915: [0, .69444, .13372, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, .07555, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, .12816, 0, .66667],
                                928: [0, .69444, .08094, 0, .70834],
                                931: [0, .69444, .11983, 0, .72222],
                                933: [0, .69444, .09031, 0, .77778],
                                934: [0, .69444, .04603, 0, .72222],
                                936: [0, .69444, .09031, 0, .77778],
                                937: [0, .69444, .08293, 0, .72222],
                                8211: [0, .44444, .08616, 0, .5],
                                8212: [0, .44444, .08616, 0, 1],
                                8216: [0, .69444, .07816, 0, .27778],
                                8217: [0, .69444, .07816, 0, .27778],
                                8220: [0, .69444, .14205, 0, .5],
                                8221: [0, .69444, .00316, 0, .5]
                            },
                            "SansSerif-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .31945],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .75834],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, 0, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .65556, 0, 0, .5],
                                49: [0, .65556, 0, 0, .5],
                                50: [0, .65556, 0, 0, .5],
                                51: [0, .65556, 0, 0, .5],
                                52: [0, .65556, 0, 0, .5],
                                53: [0, .65556, 0, 0, .5],
                                54: [0, .65556, 0, 0, .5],
                                55: [0, .65556, 0, 0, .5],
                                56: [0, .65556, 0, 0, .5],
                                57: [0, .65556, 0, 0, .5],
                                58: [0, .44444, 0, 0, .27778],
                                59: [.125, .44444, 0, 0, .27778],
                                61: [-.13, .37, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, 0, 0, .66667],
                                67: [0, .69444, 0, 0, .63889],
                                68: [0, .69444, 0, 0, .72223],
                                69: [0, .69444, 0, 0, .59722],
                                70: [0, .69444, 0, 0, .56945],
                                71: [0, .69444, 0, 0, .66667],
                                72: [0, .69444, 0, 0, .70834],
                                73: [0, .69444, 0, 0, .27778],
                                74: [0, .69444, 0, 0, .47222],
                                75: [0, .69444, 0, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, 0, 0, .875],
                                78: [0, .69444, 0, 0, .70834],
                                79: [0, .69444, 0, 0, .73611],
                                80: [0, .69444, 0, 0, .63889],
                                81: [.125, .69444, 0, 0, .73611],
                                82: [0, .69444, 0, 0, .64584],
                                83: [0, .69444, 0, 0, .55556],
                                84: [0, .69444, 0, 0, .68056],
                                85: [0, .69444, 0, 0, .6875],
                                86: [0, .69444, .01389, 0, .66667],
                                87: [0, .69444, .01389, 0, .94445],
                                88: [0, .69444, 0, 0, .66667],
                                89: [0, .69444, .025, 0, .66667],
                                90: [0, .69444, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .28889],
                                93: [.25, .75, 0, 0, .28889],
                                94: [0, .69444, 0, 0, .5],
                                95: [.35, .09444, .02778, 0, .5],
                                97: [0, .44444, 0, 0, .48056],
                                98: [0, .69444, 0, 0, .51667],
                                99: [0, .44444, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .51667],
                                101: [0, .44444, 0, 0, .44445],
                                102: [0, .69444, .06944, 0, .30556],
                                103: [.19444, .44444, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .51667],
                                105: [0, .67937, 0, 0, .23889],
                                106: [.19444, .67937, 0, 0, .26667],
                                107: [0, .69444, 0, 0, .48889],
                                108: [0, .69444, 0, 0, .23889],
                                109: [0, .44444, 0, 0, .79445],
                                110: [0, .44444, 0, 0, .51667],
                                111: [0, .44444, 0, 0, .5],
                                112: [.19444, .44444, 0, 0, .51667],
                                113: [.19444, .44444, 0, 0, .51667],
                                114: [0, .44444, .01389, 0, .34167],
                                115: [0, .44444, 0, 0, .38333],
                                116: [0, .57143, 0, 0, .36111],
                                117: [0, .44444, 0, 0, .51667],
                                118: [0, .44444, .01389, 0, .46111],
                                119: [0, .44444, .01389, 0, .68334],
                                120: [0, .44444, 0, 0, .46111],
                                121: [.19444, .44444, .01389, 0, .46111],
                                122: [0, .44444, 0, 0, .43472],
                                126: [.35, .32659, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, 0, 0, .5],
                                176: [0, .69444, 0, 0, .66667],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, 0, 0, .23889],
                                567: [.19444, .44444, 0, 0, .26667],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .63194, 0, 0, .5],
                                713: [0, .60889, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .67937, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .66667],
                                732: [0, .67659, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .69444, 0, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, 0, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, 0, 0, .66667],
                                928: [0, .69444, 0, 0, .70834],
                                931: [0, .69444, 0, 0, .72222],
                                933: [0, .69444, 0, 0, .77778],
                                934: [0, .69444, 0, 0, .72222],
                                936: [0, .69444, 0, 0, .77778],
                                937: [0, .69444, 0, 0, .72222],
                                8211: [0, .44444, .02778, 0, .5],
                                8212: [0, .44444, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5]
                            },
                            "Script-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .7, .22925, 0, .80253],
                                66: [0, .7, .04087, 0, .90757],
                                67: [0, .7, .1689, 0, .66619],
                                68: [0, .7, .09371, 0, .77443],
                                69: [0, .7, .18583, 0, .56162],
                                70: [0, .7, .13634, 0, .89544],
                                71: [0, .7, .17322, 0, .60961],
                                72: [0, .7, .29694, 0, .96919],
                                73: [0, .7, .19189, 0, .80907],
                                74: [.27778, .7, .19189, 0, 1.05159],
                                75: [0, .7, .31259, 0, .91364],
                                76: [0, .7, .19189, 0, .87373],
                                77: [0, .7, .15981, 0, 1.08031],
                                78: [0, .7, .3525, 0, .9015],
                                79: [0, .7, .08078, 0, .73787],
                                80: [0, .7, .08078, 0, 1.01262],
                                81: [0, .7, .03305, 0, .88282],
                                82: [0, .7, .06259, 0, .85],
                                83: [0, .7, .19189, 0, .86767],
                                84: [0, .7, .29087, 0, .74697],
                                85: [0, .7, .25815, 0, .79996],
                                86: [0, .7, .27523, 0, .62204],
                                87: [0, .7, .27523, 0, .80532],
                                88: [0, .7, .26006, 0, .94445],
                                89: [0, .7, .2939, 0, .70961],
                                90: [0, .7, .24037, 0, .8212],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Size1-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.35001, .85, 0, 0, .45834],
                                41: [.35001, .85, 0, 0, .45834],
                                47: [.35001, .85, 0, 0, .57778],
                                91: [.35001, .85, 0, 0, .41667],
                                92: [.35001, .85, 0, 0, .57778],
                                93: [.35001, .85, 0, 0, .41667],
                                123: [.35001, .85, 0, 0, .58334],
                                125: [.35001, .85, 0, 0, .58334],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .72222, 0, 0, .55556],
                                732: [0, .72222, 0, 0, .55556],
                                770: [0, .72222, 0, 0, .55556],
                                771: [0, .72222, 0, 0, .55556],
                                8214: [-99e-5, .601, 0, 0, .77778],
                                8593: [1e-5, .6, 0, 0, .66667],
                                8595: [1e-5, .6, 0, 0, .66667],
                                8657: [1e-5, .6, 0, 0, .77778],
                                8659: [1e-5, .6, 0, 0, .77778],
                                8719: [.25001, .75, 0, 0, .94445],
                                8720: [.25001, .75, 0, 0, .94445],
                                8721: [.25001, .75, 0, 0, 1.05556],
                                8730: [.35001, .85, 0, 0, 1],
                                8739: [-.00599, .606, 0, 0, .33333],
                                8741: [-.00599, .606, 0, 0, .55556],
                                8747: [.30612, .805, .19445, 0, .47222],
                                8748: [.306, .805, .19445, 0, .47222],
                                8749: [.306, .805, .19445, 0, .47222],
                                8750: [.30612, .805, .19445, 0, .47222],
                                8896: [.25001, .75, 0, 0, .83334],
                                8897: [.25001, .75, 0, 0, .83334],
                                8898: [.25001, .75, 0, 0, .83334],
                                8899: [.25001, .75, 0, 0, .83334],
                                8968: [.35001, .85, 0, 0, .47222],
                                8969: [.35001, .85, 0, 0, .47222],
                                8970: [.35001, .85, 0, 0, .47222],
                                8971: [.35001, .85, 0, 0, .47222],
                                9168: [-99e-5, .601, 0, 0, .66667],
                                10216: [.35001, .85, 0, 0, .47222],
                                10217: [.35001, .85, 0, 0, .47222],
                                10752: [.25001, .75, 0, 0, 1.11111],
                                10753: [.25001, .75, 0, 0, 1.11111],
                                10754: [.25001, .75, 0, 0, 1.11111],
                                10756: [.25001, .75, 0, 0, .83334],
                                10758: [.25001, .75, 0, 0, .83334]
                            },
                            "Size2-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.65002, 1.15, 0, 0, .59722],
                                41: [.65002, 1.15, 0, 0, .59722],
                                47: [.65002, 1.15, 0, 0, .81111],
                                91: [.65002, 1.15, 0, 0, .47222],
                                92: [.65002, 1.15, 0, 0, .81111],
                                93: [.65002, 1.15, 0, 0, .47222],
                                123: [.65002, 1.15, 0, 0, .66667],
                                125: [.65002, 1.15, 0, 0, .66667],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1],
                                732: [0, .75, 0, 0, 1],
                                770: [0, .75, 0, 0, 1],
                                771: [0, .75, 0, 0, 1],
                                8719: [.55001, 1.05, 0, 0, 1.27778],
                                8720: [.55001, 1.05, 0, 0, 1.27778],
                                8721: [.55001, 1.05, 0, 0, 1.44445],
                                8730: [.65002, 1.15, 0, 0, 1],
                                8747: [.86225, 1.36, .44445, 0, .55556],
                                8748: [.862, 1.36, .44445, 0, .55556],
                                8749: [.862, 1.36, .44445, 0, .55556],
                                8750: [.86225, 1.36, .44445, 0, .55556],
                                8896: [.55001, 1.05, 0, 0, 1.11111],
                                8897: [.55001, 1.05, 0, 0, 1.11111],
                                8898: [.55001, 1.05, 0, 0, 1.11111],
                                8899: [.55001, 1.05, 0, 0, 1.11111],
                                8968: [.65002, 1.15, 0, 0, .52778],
                                8969: [.65002, 1.15, 0, 0, .52778],
                                8970: [.65002, 1.15, 0, 0, .52778],
                                8971: [.65002, 1.15, 0, 0, .52778],
                                10216: [.65002, 1.15, 0, 0, .61111],
                                10217: [.65002, 1.15, 0, 0, .61111],
                                10752: [.55001, 1.05, 0, 0, 1.51112],
                                10753: [.55001, 1.05, 0, 0, 1.51112],
                                10754: [.55001, 1.05, 0, 0, 1.51112],
                                10756: [.55001, 1.05, 0, 0, 1.11111],
                                10758: [.55001, 1.05, 0, 0, 1.11111]
                            },
                            "Size3-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.95003, 1.45, 0, 0, .73611],
                                41: [.95003, 1.45, 0, 0, .73611],
                                47: [.95003, 1.45, 0, 0, 1.04445],
                                91: [.95003, 1.45, 0, 0, .52778],
                                92: [.95003, 1.45, 0, 0, 1.04445],
                                93: [.95003, 1.45, 0, 0, .52778],
                                123: [.95003, 1.45, 0, 0, .75],
                                125: [.95003, 1.45, 0, 0, .75],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1.44445],
                                732: [0, .75, 0, 0, 1.44445],
                                770: [0, .75, 0, 0, 1.44445],
                                771: [0, .75, 0, 0, 1.44445],
                                8730: [.95003, 1.45, 0, 0, 1],
                                8968: [.95003, 1.45, 0, 0, .58334],
                                8969: [.95003, 1.45, 0, 0, .58334],
                                8970: [.95003, 1.45, 0, 0, .58334],
                                8971: [.95003, 1.45, 0, 0, .58334],
                                10216: [.95003, 1.45, 0, 0, .75],
                                10217: [.95003, 1.45, 0, 0, .75]
                            },
                            "Size4-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [1.25003, 1.75, 0, 0, .79167],
                                41: [1.25003, 1.75, 0, 0, .79167],
                                47: [1.25003, 1.75, 0, 0, 1.27778],
                                91: [1.25003, 1.75, 0, 0, .58334],
                                92: [1.25003, 1.75, 0, 0, 1.27778],
                                93: [1.25003, 1.75, 0, 0, .58334],
                                123: [1.25003, 1.75, 0, 0, .80556],
                                125: [1.25003, 1.75, 0, 0, .80556],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .825, 0, 0, 1.8889],
                                732: [0, .825, 0, 0, 1.8889],
                                770: [0, .825, 0, 0, 1.8889],
                                771: [0, .825, 0, 0, 1.8889],
                                8730: [1.25003, 1.75, 0, 0, 1],
                                8968: [1.25003, 1.75, 0, 0, .63889],
                                8969: [1.25003, 1.75, 0, 0, .63889],
                                8970: [1.25003, 1.75, 0, 0, .63889],
                                8971: [1.25003, 1.75, 0, 0, .63889],
                                9115: [.64502, 1.155, 0, 0, .875],
                                9116: [1e-5, .6, 0, 0, .875],
                                9117: [.64502, 1.155, 0, 0, .875],
                                9118: [.64502, 1.155, 0, 0, .875],
                                9119: [1e-5, .6, 0, 0, .875],
                                9120: [.64502, 1.155, 0, 0, .875],
                                9121: [.64502, 1.155, 0, 0, .66667],
                                9122: [-99e-5, .601, 0, 0, .66667],
                                9123: [.64502, 1.155, 0, 0, .66667],
                                9124: [.64502, 1.155, 0, 0, .66667],
                                9125: [-99e-5, .601, 0, 0, .66667],
                                9126: [.64502, 1.155, 0, 0, .66667],
                                9127: [1e-5, .9, 0, 0, .88889],
                                9128: [.65002, 1.15, 0, 0, .88889],
                                9129: [.90001, 0, 0, 0, .88889],
                                9130: [0, .3, 0, 0, .88889],
                                9131: [1e-5, .9, 0, 0, .88889],
                                9132: [.65002, 1.15, 0, 0, .88889],
                                9133: [.90001, 0, 0, 0, .88889],
                                9143: [.88502, .915, 0, 0, 1.05556],
                                10216: [1.25003, 1.75, 0, 0, .80556],
                                10217: [1.25003, 1.75, 0, 0, .80556],
                                57344: [-.00499, .605, 0, 0, 1.05556],
                                57345: [-.00499, .605, 0, 0, 1.05556],
                                57680: [0, .12, 0, 0, .45],
                                57681: [0, .12, 0, 0, .45],
                                57682: [0, .12, 0, 0, .45],
                                57683: [0, .12, 0, 0, .45]
                            },
                            "Typewriter-Regular": {
                                32: [0, 0, 0, 0, .525],
                                33: [0, .61111, 0, 0, .525],
                                34: [0, .61111, 0, 0, .525],
                                35: [0, .61111, 0, 0, .525],
                                36: [.08333, .69444, 0, 0, .525],
                                37: [.08333, .69444, 0, 0, .525],
                                38: [0, .61111, 0, 0, .525],
                                39: [0, .61111, 0, 0, .525],
                                40: [.08333, .69444, 0, 0, .525],
                                41: [.08333, .69444, 0, 0, .525],
                                42: [0, .52083, 0, 0, .525],
                                43: [-.08056, .53055, 0, 0, .525],
                                44: [.13889, .125, 0, 0, .525],
                                45: [-.08056, .53055, 0, 0, .525],
                                46: [0, .125, 0, 0, .525],
                                47: [.08333, .69444, 0, 0, .525],
                                48: [0, .61111, 0, 0, .525],
                                49: [0, .61111, 0, 0, .525],
                                50: [0, .61111, 0, 0, .525],
                                51: [0, .61111, 0, 0, .525],
                                52: [0, .61111, 0, 0, .525],
                                53: [0, .61111, 0, 0, .525],
                                54: [0, .61111, 0, 0, .525],
                                55: [0, .61111, 0, 0, .525],
                                56: [0, .61111, 0, 0, .525],
                                57: [0, .61111, 0, 0, .525],
                                58: [0, .43056, 0, 0, .525],
                                59: [.13889, .43056, 0, 0, .525],
                                60: [-.05556, .55556, 0, 0, .525],
                                61: [-.19549, .41562, 0, 0, .525],
                                62: [-.05556, .55556, 0, 0, .525],
                                63: [0, .61111, 0, 0, .525],
                                64: [0, .61111, 0, 0, .525],
                                65: [0, .61111, 0, 0, .525],
                                66: [0, .61111, 0, 0, .525],
                                67: [0, .61111, 0, 0, .525],
                                68: [0, .61111, 0, 0, .525],
                                69: [0, .61111, 0, 0, .525],
                                70: [0, .61111, 0, 0, .525],
                                71: [0, .61111, 0, 0, .525],
                                72: [0, .61111, 0, 0, .525],
                                73: [0, .61111, 0, 0, .525],
                                74: [0, .61111, 0, 0, .525],
                                75: [0, .61111, 0, 0, .525],
                                76: [0, .61111, 0, 0, .525],
                                77: [0, .61111, 0, 0, .525],
                                78: [0, .61111, 0, 0, .525],
                                79: [0, .61111, 0, 0, .525],
                                80: [0, .61111, 0, 0, .525],
                                81: [.13889, .61111, 0, 0, .525],
                                82: [0, .61111, 0, 0, .525],
                                83: [0, .61111, 0, 0, .525],
                                84: [0, .61111, 0, 0, .525],
                                85: [0, .61111, 0, 0, .525],
                                86: [0, .61111, 0, 0, .525],
                                87: [0, .61111, 0, 0, .525],
                                88: [0, .61111, 0, 0, .525],
                                89: [0, .61111, 0, 0, .525],
                                90: [0, .61111, 0, 0, .525],
                                91: [.08333, .69444, 0, 0, .525],
                                92: [.08333, .69444, 0, 0, .525],
                                93: [.08333, .69444, 0, 0, .525],
                                94: [0, .61111, 0, 0, .525],
                                95: [.09514, 0, 0, 0, .525],
                                96: [0, .61111, 0, 0, .525],
                                97: [0, .43056, 0, 0, .525],
                                98: [0, .61111, 0, 0, .525],
                                99: [0, .43056, 0, 0, .525],
                                100: [0, .61111, 0, 0, .525],
                                101: [0, .43056, 0, 0, .525],
                                102: [0, .61111, 0, 0, .525],
                                103: [.22222, .43056, 0, 0, .525],
                                104: [0, .61111, 0, 0, .525],
                                105: [0, .61111, 0, 0, .525],
                                106: [.22222, .61111, 0, 0, .525],
                                107: [0, .61111, 0, 0, .525],
                                108: [0, .61111, 0, 0, .525],
                                109: [0, .43056, 0, 0, .525],
                                110: [0, .43056, 0, 0, .525],
                                111: [0, .43056, 0, 0, .525],
                                112: [.22222, .43056, 0, 0, .525],
                                113: [.22222, .43056, 0, 0, .525],
                                114: [0, .43056, 0, 0, .525],
                                115: [0, .43056, 0, 0, .525],
                                116: [0, .55358, 0, 0, .525],
                                117: [0, .43056, 0, 0, .525],
                                118: [0, .43056, 0, 0, .525],
                                119: [0, .43056, 0, 0, .525],
                                120: [0, .43056, 0, 0, .525],
                                121: [.22222, .43056, 0, 0, .525],
                                122: [0, .43056, 0, 0, .525],
                                123: [.08333, .69444, 0, 0, .525],
                                124: [.08333, .69444, 0, 0, .525],
                                125: [.08333, .69444, 0, 0, .525],
                                126: [0, .61111, 0, 0, .525],
                                127: [0, .61111, 0, 0, .525],
                                160: [0, 0, 0, 0, .525],
                                176: [0, .61111, 0, 0, .525],
                                184: [.19445, 0, 0, 0, .525],
                                305: [0, .43056, 0, 0, .525],
                                567: [.22222, .43056, 0, 0, .525],
                                711: [0, .56597, 0, 0, .525],
                                713: [0, .56555, 0, 0, .525],
                                714: [0, .61111, 0, 0, .525],
                                715: [0, .61111, 0, 0, .525],
                                728: [0, .61111, 0, 0, .525],
                                730: [0, .61111, 0, 0, .525],
                                770: [0, .61111, 0, 0, .525],
                                771: [0, .61111, 0, 0, .525],
                                776: [0, .61111, 0, 0, .525],
                                915: [0, .61111, 0, 0, .525],
                                916: [0, .61111, 0, 0, .525],
                                920: [0, .61111, 0, 0, .525],
                                923: [0, .61111, 0, 0, .525],
                                926: [0, .61111, 0, 0, .525],
                                928: [0, .61111, 0, 0, .525],
                                931: [0, .61111, 0, 0, .525],
                                933: [0, .61111, 0, 0, .525],
                                934: [0, .61111, 0, 0, .525],
                                936: [0, .61111, 0, 0, .525],
                                937: [0, .61111, 0, 0, .525],
                                8216: [0, .61111, 0, 0, .525],
                                8217: [0, .61111, 0, 0, .525],
                                8242: [0, .61111, 0, 0, .525],
                                9251: [.11111, .21944, 0, 0, .525]
                            }
                        }
                            , V = {
                            slant: [.25, .25, .25],
                            space: [0, 0, 0],
                            stretch: [0, 0, 0],
                            shrink: [0, 0, 0],
                            xHeight: [.431, .431, .431],
                            quad: [1, 1.171, 1.472],
                            extraSpace: [0, 0, 0],
                            num1: [.677, .732, .925],
                            num2: [.394, .384, .387],
                            num3: [.444, .471, .504],
                            denom1: [.686, .752, 1.025],
                            denom2: [.345, .344, .532],
                            sup1: [.413, .503, .504],
                            sup2: [.363, .431, .404],
                            sup3: [.289, .286, .294],
                            sub1: [.15, .143, .2],
                            sub2: [.247, .286, .4],
                            supDrop: [.386, .353, .494],
                            subDrop: [.05, .071, .1],
                            delim1: [2.39, 1.7, 1.98],
                            delim2: [1.01, 1.157, 1.42],
                            axisHeight: [.25, .25, .25],
                            defaultRuleThickness: [.04, .049, .049],
                            bigOpSpacing1: [.111, .111, .111],
                            bigOpSpacing2: [.166, .166, .166],
                            bigOpSpacing3: [.2, .2, .2],
                            bigOpSpacing4: [.6, .611, .611],
                            bigOpSpacing5: [.1, .143, .143],
                            sqrtRuleThickness: [.04, .04, .04],
                            ptPerEm: [10, 10, 10],
                            doubleRuleSep: [.2, .2, .2],
                            arrayRuleWidth: [.04, .04, .04],
                            fboxsep: [.3, .3, .3],
                            fboxrule: [.04, .04, .04]
                        }
                            , U = {
                            "Å": "A",
                            "Ç": "C",
                            "Ð": "D",
                            "Þ": "o",
                            "å": "a",
                            "ç": "c",
                            "ð": "d",
                            "þ": "o",
                            "А": "A",
                            "Б": "B",
                            "В": "B",
                            "Г": "F",
                            "Д": "A",
                            "Е": "E",
                            "Ж": "K",
                            "З": "3",
                            "И": "N",
                            "Й": "N",
                            "К": "K",
                            "Л": "N",
                            "М": "M",
                            "Н": "H",
                            "О": "O",
                            "П": "N",
                            "Р": "P",
                            "С": "C",
                            "Т": "T",
                            "У": "y",
                            "Ф": "O",
                            "Х": "X",
                            "Ц": "U",
                            "Ч": "h",
                            "Ш": "W",
                            "Щ": "W",
                            "Ъ": "B",
                            "Ы": "X",
                            "Ь": "B",
                            "Э": "3",
                            "Ю": "X",
                            "Я": "R",
                            "а": "a",
                            "б": "b",
                            "в": "a",
                            "г": "r",
                            "д": "y",
                            "е": "e",
                            "ж": "m",
                            "з": "e",
                            "и": "n",
                            "й": "n",
                            "к": "n",
                            "л": "n",
                            "м": "m",
                            "н": "n",
                            "о": "o",
                            "п": "n",
                            "р": "p",
                            "с": "c",
                            "т": "o",
                            "у": "y",
                            "ф": "b",
                            "х": "x",
                            "ц": "n",
                            "ч": "n",
                            "ш": "w",
                            "щ": "w",
                            "ъ": "a",
                            "ы": "m",
                            "ь": "a",
                            "э": "e",
                            "ю": "m",
                            "я": "r"
                        };
                        function G(t, e, r) {
                            if (!F[e])
                                throw new Error("Font metrics not found for font: " + e + ".");
                            var n = t.charCodeAt(0)
                                , a = F[e][n];
                            if (!a && t[0]in U && (n = U[t[0]].charCodeAt(0),
                                    a = F[e][n]),
                                a || "text" !== r || M(n) && (a = F[e][77]),
                                    a)
                                return {
                                    depth: a[0],
                                    height: a[1],
                                    italic: a[2],
                                    skew: a[3],
                                    width: a[4]
                                }
                        }
                        var Y = {}
                            , _ = {
                            bin: 1,
                            close: 1,
                            inner: 1,
                            open: 1,
                            punct: 1,
                            rel: 1
                        }
                            , W = {
                            "accent-token": 1,
                            mathord: 1,
                            "op-token": 1,
                            spacing: 1,
                            textord: 1
                        }
                            , X = {
                            math: {},
                            text: {}
                        }
                            , j = X;
                        function $(t, e, r, n, a, i) {
                            X[t][a] = {
                                font: e,
                                group: r,
                                replace: n
                            },
                            i && n && (X[t][n] = X[t][a])
                        }
                        var Z = "main"
                            , K = "ams"
                            , J = "bin"
                            , Q = "mathord"
                            , tt = "op-token"
                            , et = "rel";
                        $("math", Z, et, "≡", "\\equiv", !0),
                            $("math", Z, et, "≺", "\\prec", !0),
                            $("math", Z, et, "≻", "\\succ", !0),
                            $("math", Z, et, "∼", "\\sim", !0),
                            $("math", Z, et, "⊥", "\\perp"),
                            $("math", Z, et, "⪯", "\\preceq", !0),
                            $("math", Z, et, "⪰", "\\succeq", !0),
                            $("math", Z, et, "≃", "\\simeq", !0),
                            $("math", Z, et, "∣", "\\mid", !0),
                            $("math", Z, et, "≪", "\\ll", !0),
                            $("math", Z, et, "≫", "\\gg", !0),
                            $("math", Z, et, "≍", "\\asymp", !0),
                            $("math", Z, et, "∥", "\\parallel"),
                            $("math", Z, et, "⋈", "\\bowtie", !0),
                            $("math", Z, et, "⌣", "\\smile", !0),
                            $("math", Z, et, "⊑", "\\sqsubseteq", !0),
                            $("math", Z, et, "⊒", "\\sqsupseteq", !0),
                            $("math", Z, et, "≐", "\\doteq", !0),
                            $("math", Z, et, "⌢", "\\frown", !0),
                            $("math", Z, et, "∋", "\\ni", !0),
                            $("math", Z, et, "∝", "\\propto", !0),
                            $("math", Z, et, "⊢", "\\vdash", !0),
                            $("math", Z, et, "⊣", "\\dashv", !0),
                            $("math", Z, et, "∋", "\\owns"),
                            $("math", Z, "punct", ".", "\\ldotp"),
                            $("math", Z, "punct", "⋅", "\\cdotp"),
                            $("math", Z, "textord", "#", "\\#"),
                            $("text", Z, "textord", "#", "\\#"),
                            $("math", Z, "textord", "&", "\\&"),
                            $("text", Z, "textord", "&", "\\&"),
                            $("math", Z, "textord", "ℵ", "\\aleph", !0),
                            $("math", Z, "textord", "∀", "\\forall", !0),
                            $("math", Z, "textord", "ℏ", "\\hbar", !0),
                            $("math", Z, "textord", "∃", "\\exists", !0),
                            $("math", Z, "textord", "∇", "\\nabla", !0),
                            $("math", Z, "textord", "♭", "\\flat", !0),
                            $("math", Z, "textord", "ℓ", "\\ell", !0),
                            $("math", Z, "textord", "♮", "\\natural", !0),
                            $("math", Z, "textord", "♣", "\\clubsuit", !0),
                            $("math", Z, "textord", "℘", "\\wp", !0),
                            $("math", Z, "textord", "♯", "\\sharp", !0),
                            $("math", Z, "textord", "♢", "\\diamondsuit", !0),
                            $("math", Z, "textord", "ℜ", "\\Re", !0),
                            $("math", Z, "textord", "♡", "\\heartsuit", !0),
                            $("math", Z, "textord", "ℑ", "\\Im", !0),
                            $("math", Z, "textord", "♠", "\\spadesuit", !0),
                            $("text", Z, "textord", "§", "\\S", !0),
                            $("text", Z, "textord", "¶", "\\P", !0),
                            $("math", Z, "textord", "†", "\\dag"),
                            $("text", Z, "textord", "†", "\\dag"),
                            $("text", Z, "textord", "†", "\\textdagger"),
                            $("math", Z, "textord", "‡", "\\ddag"),
                            $("text", Z, "textord", "‡", "\\ddag"),
                            $("text", Z, "textord", "‡", "\\textdaggerdbl"),
                            $("math", Z, "close", "⎱", "\\rmoustache", !0),
                            $("math", Z, "open", "⎰", "\\lmoustache", !0),
                            $("math", Z, "close", "⟯", "\\rgroup", !0),
                            $("math", Z, "open", "⟮", "\\lgroup", !0),
                            $("math", Z, J, "∓", "\\mp", !0),
                            $("math", Z, J, "⊖", "\\ominus", !0),
                            $("math", Z, J, "⊎", "\\uplus", !0),
                            $("math", Z, J, "⊓", "\\sqcap", !0),
                            $("math", Z, J, "∗", "\\ast"),
                            $("math", Z, J, "⊔", "\\sqcup", !0),
                            $("math", Z, J, "◯", "\\bigcirc"),
                            $("math", Z, J, "∙", "\\bullet"),
                            $("math", Z, J, "‡", "\\ddagger"),
                            $("math", Z, J, "≀", "\\wr", !0),
                            $("math", Z, J, "⨿", "\\amalg"),
                            $("math", Z, J, "&", "\\And"),
                            $("math", Z, et, "⟵", "\\longleftarrow", !0),
                            $("math", Z, et, "⇐", "\\Leftarrow", !0),
                            $("math", Z, et, "⟸", "\\Longleftarrow", !0),
                            $("math", Z, et, "⟶", "\\longrightarrow", !0),
                            $("math", Z, et, "⇒", "\\Rightarrow", !0),
                            $("math", Z, et, "⟹", "\\Longrightarrow", !0),
                            $("math", Z, et, "↔", "\\leftrightarrow", !0),
                            $("math", Z, et, "⟷", "\\longleftrightarrow", !0),
                            $("math", Z, et, "⇔", "\\Leftrightarrow", !0),
                            $("math", Z, et, "⟺", "\\Longleftrightarrow", !0),
                            $("math", Z, et, "↦", "\\mapsto", !0),
                            $("math", Z, et, "⟼", "\\longmapsto", !0),
                            $("math", Z, et, "↗", "\\nearrow", !0),
                            $("math", Z, et, "↩", "\\hookleftarrow", !0),
                            $("math", Z, et, "↪", "\\hookrightarrow", !0),
                            $("math", Z, et, "↘", "\\searrow", !0),
                            $("math", Z, et, "↼", "\\leftharpoonup", !0),
                            $("math", Z, et, "⇀", "\\rightharpoonup", !0),
                            $("math", Z, et, "↙", "\\swarrow", !0),
                            $("math", Z, et, "↽", "\\leftharpoondown", !0),
                            $("math", Z, et, "⇁", "\\rightharpoondown", !0),
                            $("math", Z, et, "↖", "\\nwarrow", !0),
                            $("math", Z, et, "⇌", "\\rightleftharpoons", !0),
                            $("math", K, et, "≮", "\\nless", !0),
                            $("math", K, et, "", "\\@nleqslant"),
                            $("math", K, et, "", "\\@nleqq"),
                            $("math", K, et, "⪇", "\\lneq", !0),
                            $("math", K, et, "≨", "\\lneqq", !0),
                            $("math", K, et, "", "\\@lvertneqq"),
                            $("math", K, et, "⋦", "\\lnsim", !0),
                            $("math", K, et, "⪉", "\\lnapprox", !0),
                        $("math", K, et, "⊀", "\\nprec", !0),
                        $("math", K, et, "⋠", "\\npreceq", !0),
                        $("math", K, et, "⋨", "\\precnsim", !0),
                        $("math", K, et, "⪹", "\\precnapprox", !0),
                        $("math", K, et, "≁", "\\nsim", !0),
                        $("math", K, et, "", "\\@nshortmid"),
                        $("math", K, et, "∤", "\\nmid", !0),
                        $("math", K, et, "⊬", "\\nvdash", !0),
                        $("math", K, et, "⊭", "\\nvDash", !0),
                        $("math", K, et, "⋪", "\\ntriangleleft"),
                        $("math", K, et, "⋬", "\\ntrianglelefteq", !0),
                        $("math", K, et, "⊊", "\\subsetneq", !0),
                        $("math", K, et, "", "\\@varsubsetneq"),
                        $("math", K, et, "⫋", "\\subsetneqq", !0),
                        $("math", K, et, "", "\\@varsubsetneqq"),
                        $("math", K, et, "≯", "\\ngtr", !0),
                        $("math", K, et, "", "\\@ngeqslant"),
                        $("math", K, et, "", "\\@ngeqq"),
                        $("math", K, et, "⪈", "\\gneq", !0),
                        $("math", K, et, "≩", "\\gneqq", !0),
                        $("math", K, et, "", "\\@gvertneqq"),
                        $("math", K, et, "⋧", "\\gnsim", !0),
                        $("math", K, et, "⪊", "\\gnapprox", !0),
                        $("math", K, et, "⊁", "\\nsucc", !0),
                        $("math", K, et, "⋡", "\\nsucceq", !0),
                        $("math", K, et, "⋩", "\\succnsim", !0),
                        $("math", K, et, "⪺", "\\succnapprox", !0),
                        $("math", K, et, "≆", "\\ncong", !0),
                        $("math", K, et, "", "\\@nshortparallel"),
                        $("math", K, et, "∦", "\\nparallel", !0),
                        $("math", K, et, "⊯", "\\nVDash", !0),
                        $("math", K, et, "⋫", "\\ntriangleright"),
                        $("math", K, et, "⋭", "\\ntrianglerighteq", !0),
                        $("math", K, et, "", "\\@nsupseteqq"),
                        $("math", K, et, "⊋", "\\supsetneq", !0),
                        $("math", K, et, "", "\\@varsupsetneq"),
                        $("math", K, et, "⫌", "\\supsetneqq", !0),
                        $("math", K, et, "", "\\@varsupsetneqq"),
                        $("math", K, et, "⊮", "\\nVdash", !0),
                        $("math", K, et, "⪵", "\\precneqq", !0),
                        $("math", K, et, "⪶", "\\succneqq", !0),
                        $("math", K, et, "", "\\@nsubseteqq"),
                        $("math", K, J, "⊴", "\\unlhd"),
                        $("math", K, J, "⊵", "\\unrhd"),
                        $("math", K, et, "↚", "\\nleftarrow", !0),
                        $("math", K, et, "↛", "\\nrightarrow", !0),
                        $("math", K, et, "⇍", "\\nLeftarrow", !0),
                        $("math", K, et, "⇏", "\\nRightarrow", !0),
                        $("math", K, et, "↮", "\\nleftrightarrow", !0),
                        $("math", K, et, "⇎", "\\nLeftrightarrow", !0),
                        $("math", K, et, "△", "\\vartriangle"),
                        $("math", K, "textord", "ℏ", "\\hslash"),
                        $("math", K, "textord", "▽", "\\triangledown"),
                        $("math", K, "textord", "◊", "\\lozenge"),
                        $("math", K, "textord", "Ⓢ", "\\circledS"),
                        $("math", K, "textord", "®", "\\circledR"),
                        $("text", K, "textord", "®", "\\circledR"),
                        $("math", K, "textord", "∡", "\\measuredangle", !0),
                        $("math", K, "textord", "∄", "\\nexists"),
                        $("math", K, "textord", "℧", "\\mho"),
                        $("math", K, "textord", "Ⅎ", "\\Finv", !0),
                        $("math", K, "textord", "⅁", "\\Game", !0),
                        $("math", K, "textord", "‵", "\\backprime"),
                        $("math", K, "textord", "▲", "\\blacktriangle"),
                        $("math", K, "textord", "▼", "\\blacktriangledown"),
                        $("math", K, "textord", "■", "\\blacksquare"),
                        $("math", K, "textord", "⧫", "\\blacklozenge"),
                        $("math", K, "textord", "★", "\\bigstar"),
                        $("math", K, "textord", "∢", "\\sphericalangle", !0),
                        $("math", K, "textord", "∁", "\\complement", !0),
                        $("math", K, "textord", "ð", "\\eth", !0),
                        $("text", Z, "textord", "ð", "ð"),
                        $("math", K, "textord", "╱", "\\diagup"),
                        $("math", K, "textord", "╲", "\\diagdown"),
                        $("math", K, "textord", "□", "\\square"),
                        $("math", K, "textord", "□", "\\Box"),
                        $("math", K, "textord", "◊", "\\Diamond"),
                        $("math", K, "textord", "¥", "\\yen", !0),
                        $("text", K, "textord", "¥", "\\yen", !0),
                        $("math", K, "textord", "✓", "\\checkmark", !0),
                        $("text", K, "textord", "✓", "\\checkmark"),
                        $("math", K, "textord", "ℶ", "\\beth", !0),
                        $("math", K, "textord", "ℸ", "\\daleth", !0),
                        $("math", K, "textord", "ℷ", "\\gimel", !0),
                        $("math", K, "textord", "ϝ", "\\digamma", !0),
                        $("math", K, "textord", "ϰ", "\\varkappa"),
                        $("math", K, "open", "┌", "\\@ulcorner", !0),
                        $("math", K, "close", "┐", "\\@urcorner", !0),
                        $("math", K, "open", "└", "\\@llcorner", !0),
                        $("math", K, "close", "┘", "\\@lrcorner", !0),
                        $("math", K, et, "≦", "\\leqq", !0),
                        $("math", K, et, "⩽", "\\leqslant", !0),
                        $("math", K, et, "⪕", "\\eqslantless", !0),
                        $("math", K, et, "≲", "\\lesssim", !0),
                        $("math", K, et, "⪅", "\\lessapprox", !0),
                        $("math", K, et, "≊", "\\approxeq", !0),
                        $("math", K, J, "⋖", "\\lessdot"),
                        $("math", K, et, "⋘", "\\lll", !0),
                        $("math", K, et, "≶", "\\lessgtr", !0),
                        $("math", K, et, "⋚", "\\lesseqgtr", !0),
                        $("math", K, et, "⪋", "\\lesseqqgtr", !0),
                        $("math", K, et, "≑", "\\doteqdot"),
                        $("math", K, et, "≓", "\\risingdotseq", !0),
                        $("math", K, et, "≒", "\\fallingdotseq", !0),
                        $("math", K, et, "∽", "\\backsim", !0),
                        $("math", K, et, "⋍", "\\backsimeq", !0),
                        $("math", K, et, "⫅", "\\subseteqq", !0),
                        $("math", K, et, "⋐", "\\Subset", !0),
                        $("math", K, et, "⊏", "\\sqsubset", !0),
                        $("math", K, et, "≼", "\\preccurlyeq", !0),
                        $("math", K, et, "⋞", "\\curlyeqprec", !0),
                        $("math", K, et, "≾", "\\precsim", !0),
                        $("math", K, et, "⪷", "\\precapprox", !0),
                        $("math", K, et, "⊲", "\\vartriangleleft"),
                        $("math", K, et, "⊴", "\\trianglelefteq"),
                        $("math", K, et, "⊨", "\\vDash", !0),
                        $("math", K, et, "⊪", "\\Vvdash", !0),
                        $("math", K, et, "⌣", "\\smallsmile"),
                        $("math", K, et, "⌢", "\\smallfrown"),
                        $("math", K, et, "≏", "\\bumpeq", !0),
                        $("math", K, et, "≎", "\\Bumpeq", !0),
                        $("math", K, et, "≧", "\\geqq", !0),
                        $("math", K, et, "⩾", "\\geqslant", !0),
                        $("math", K, et, "⪖", "\\eqslantgtr", !0),
                        $("math", K, et, "≳", "\\gtrsim", !0),
                        $("math", K, et, "⪆", "\\gtrapprox", !0),
                        $("math", K, J, "⋗", "\\gtrdot"),
                        $("math", K, et, "⋙", "\\ggg", !0),
                        $("math", K, et, "≷", "\\gtrless", !0),
                        $("math", K, et, "⋛", "\\gtreqless", !0),
                        $("math", K, et, "⪌", "\\gtreqqless", !0),
                        $("math", K, et, "≖", "\\eqcirc", !0),
                        $("math", K, et, "≗", "\\circeq", !0),
                        $("math", K, et, "≜", "\\triangleq", !0),
                        $("math", K, et, "∼", "\\thicksim"),
                        $("math", K, et, "≈", "\\thickapprox"),
                        $("math", K, et, "⫆", "\\supseteqq", !0),
                        $("math", K, et, "⋑", "\\Supset", !0),
                        $("math", K, et, "⊐", "\\sqsupset", !0),
                        $("math", K, et, "≽", "\\succcurlyeq", !0),
                        $("math", K, et, "⋟", "\\curlyeqsucc", !0),
                        $("math", K, et, "≿", "\\succsim", !0),
                        $("math", K, et, "⪸", "\\succapprox", !0),
                        $("math", K, et, "⊳", "\\vartriangleright"),
                        $("math", K, et, "⊵", "\\trianglerighteq"),
                        $("math", K, et, "⊩", "\\Vdash", !0),
                        $("math", K, et, "∣", "\\shortmid"),
                        $("math", K, et, "∥", "\\shortparallel"),
                        $("math", K, et, "≬", "\\between", !0),
                        $("math", K, et, "⋔", "\\pitchfork", !0),
                        $("math", K, et, "∝", "\\varpropto"),
                        $("math", K, et, "◀", "\\blacktriangleleft"),
                        $("math", K, et, "∴", "\\therefore", !0),
                        $("math", K, et, "∍", "\\backepsilon"),
                        $("math", K, et, "▶", "\\blacktriangleright"),
                        $("math", K, et, "∵", "\\because", !0),
                        $("math", K, et, "⋘", "\\llless"),
                        $("math", K, et, "⋙", "\\gggtr"),
                        $("math", K, J, "⊲", "\\lhd"),
                        $("math", K, J, "⊳", "\\rhd"),
                        $("math", K, et, "≂", "\\eqsim", !0),
                        $("math", Z, et, "⋈", "\\Join"),
                        $("math", K, et, "≑", "\\Doteq", !0),
                        $("math", K, J, "∔", "\\dotplus", !0),
                        $("math", K, J, "∖", "\\smallsetminus"),
                        $("math", K, J, "⋒", "\\Cap", !0),
                        $("math", K, J, "⋓", "\\Cup", !0),
                        $("math", K, J, "⩞", "\\doublebarwedge", !0),
                        $("math", K, J, "⊟", "\\boxminus", !0),
                        $("math", K, J, "⊞", "\\boxplus", !0),
                        $("math", K, J, "⋇", "\\divideontimes", !0),
                        $("math", K, J, "⋉", "\\ltimes", !0),
                        $("math", K, J, "⋊", "\\rtimes", !0),
                        $("math", K, J, "⋋", "\\leftthreetimes", !0),
                        $("math", K, J, "⋌", "\\rightthreetimes", !0),
                        $("math", K, J, "⋏", "\\curlywedge", !0),
                        $("math", K, J, "⋎", "\\curlyvee", !0),
                        $("math", K, J, "⊝", "\\circleddash", !0),
                        $("math", K, J, "⊛", "\\circledast", !0),
                        $("math", K, J, "⋅", "\\centerdot"),
                        $("math", K, J, "⊺", "\\intercal", !0),
                        $("math", K, J, "⋒", "\\doublecap"),
                        $("math", K, J, "⋓", "\\doublecup"),
                        $("math", K, J, "⊠", "\\boxtimes", !0),
                        $("math", K, et, "⇢", "\\dashrightarrow", !0),
                        $("math", K, et, "⇠", "\\dashleftarrow", !0),
                        $("math", K, et, "⇇", "\\leftleftarrows", !0),
                        $("math", K, et, "⇆", "\\leftrightarrows", !0),
                        $("math", K, et, "⇚", "\\Lleftarrow", !0),
                        $("math", K, et, "↞", "\\twoheadleftarrow", !0),
                        $("math", K, et, "↢", "\\leftarrowtail", !0),
                        $("math", K, et, "↫", "\\looparrowleft", !0),
                        $("math", K, et, "⇋", "\\leftrightharpoons", !0),
                        $("math", K, et, "↶", "\\curvearrowleft", !0),
                        $("math", K, et, "↺", "\\circlearrowleft", !0),
                        $("math", K, et, "↰", "\\Lsh", !0),
                        $("math", K, et, "⇈", "\\upuparrows", !0),
                        $("math", K, et, "↿", "\\upharpoonleft", !0),
                        $("math", K, et, "⇃", "\\downharpoonleft", !0),
                        $("math", K, et, "⊸", "\\multimap", !0),
                        $("math", K, et, "↭", "\\leftrightsquigarrow", !0),
                        $("math", K, et, "⇉", "\\rightrightarrows", !0),
                        $("math", K, et, "⇄", "\\rightleftarrows", !0),
                        $("math", K, et, "↠", "\\twoheadrightarrow", !0),
                        $("math", K, et, "↣", "\\rightarrowtail", !0),
                        $("math", K, et, "↬", "\\looparrowright", !0),
                        $("math", K, et, "↷", "\\curvearrowright", !0),
                        $("math", K, et, "↻", "\\circlearrowright", !0),
                        $("math", K, et, "↱", "\\Rsh", !0),
                        $("math", K, et, "⇊", "\\downdownarrows", !0),
                        $("math", K, et, "↾", "\\upharpoonright", !0),
                        $("math", K, et, "⇂", "\\downharpoonright", !0),
                        $("math", K, et, "⇝", "\\rightsquigarrow", !0),
                        $("math", K, et, "⇝", "\\leadsto"),
                        $("math", K, et, "⇛", "\\Rrightarrow", !0),
                        $("math", K, et, "↾", "\\restriction"),
                        $("math", Z, "textord", "‘", "`"),
                        $("math", Z, "textord", "$", "\\$"),
                        $("text", Z, "textord", "$", "\\$"),
                        $("text", Z, "textord", "$", "\\textdollar"),
                        $("math", Z, "textord", "%", "\\%"),
                        $("text", Z, "textord", "%", "\\%"),
                        $("math", Z, "textord", "_", "\\_"),
                        $("text", Z, "textord", "_", "\\_"),
                        $("text", Z, "textord", "_", "\\textunderscore"),
                        $("math", Z, "textord", "∠", "\\angle", !0),
                        $("math", Z, "textord", "∞", "\\infty", !0),
                        $("math", Z, "textord", "′", "\\prime"),
                        $("math", Z, "textord", "△", "\\triangle"),
                        $("math", Z, "textord", "Γ", "\\Gamma", !0),
                        $("math", Z, "textord", "Δ", "\\Delta", !0),
                        $("math", Z, "textord", "Θ", "\\Theta", !0),
                        $("math", Z, "textord", "Λ", "\\Lambda", !0),
                        $("math", Z, "textord", "Ξ", "\\Xi", !0),
                        $("math", Z, "textord", "Π", "\\Pi", !0),
                        $("math", Z, "textord", "Σ", "\\Sigma", !0),
                        $("math", Z, "textord", "Υ", "\\Upsilon", !0),
                        $("math", Z, "textord", "Φ", "\\Phi", !0),
                        $("math", Z, "textord", "Ψ", "\\Psi", !0),
                        $("math", Z, "textord", "Ω", "\\Omega", !0),
                        $("math", Z, "textord", "A", "Α"),
                        $("math", Z, "textord", "B", "Β"),
                        $("math", Z, "textord", "E", "Ε"),
                        $("math", Z, "textord", "Z", "Ζ"),
                        $("math", Z, "textord", "H", "Η"),
                        $("math", Z, "textord", "I", "Ι"),
                        $("math", Z, "textord", "K", "Κ"),
                        $("math", Z, "textord", "M", "Μ"),
                        $("math", Z, "textord", "N", "Ν"),
                        $("math", Z, "textord", "O", "Ο"),
                        $("math", Z, "textord", "P", "Ρ"),
                        $("math", Z, "textord", "T", "Τ"),
                        $("math", Z, "textord", "X", "Χ"),
                        $("math", Z, "textord", "¬", "\\neg", !0),
                        $("math", Z, "textord", "¬", "\\lnot"),
                        $("math", Z, "textord", "⊤", "\\top"),
                        $("math", Z, "textord", "⊥", "\\bot"),
                        $("math", Z, "textord", "∅", "\\emptyset"),
                        $("math", K, "textord", "∅", "\\varnothing"),
                        $("math", Z, Q, "α", "\\alpha", !0),
                        $("math", Z, Q, "β", "\\beta", !0),
                        $("math", Z, Q, "γ", "\\gamma", !0),
                        $("math", Z, Q, "δ", "\\delta", !0),
                        $("math", Z, Q, "ϵ", "\\epsilon", !0),
                        $("math", Z, Q, "ζ", "\\zeta", !0),
                        $("math", Z, Q, "η", "\\eta", !0),
                        $("math", Z, Q, "θ", "\\theta", !0),
                        $("math", Z, Q, "ι", "\\iota", !0),
                        $("math", Z, Q, "κ", "\\kappa", !0),
                        $("math", Z, Q, "λ", "\\lambda", !0),
                        $("math", Z, Q, "μ", "\\mu", !0),
                        $("math", Z, Q, "ν", "\\nu", !0),
                        $("math", Z, Q, "ξ", "\\xi", !0),
                        $("math", Z, Q, "ο", "\\omicron", !0),
                        $("math", Z, Q, "π", "\\pi", !0),
                        $("math", Z, Q, "ρ", "\\rho", !0),
                        $("math", Z, Q, "σ", "\\sigma", !0),
                        $("math", Z, Q, "τ", "\\tau", !0),
                        $("math", Z, Q, "υ", "\\upsilon", !0),
                        $("math", Z, Q, "ϕ", "\\phi", !0),
                        $("math", Z, Q, "χ", "\\chi", !0),
                        $("math", Z, Q, "ψ", "\\psi", !0),
                        $("math", Z, Q, "ω", "\\omega", !0),
                        $("math", Z, Q, "ε", "\\varepsilon", !0),
                        $("math", Z, Q, "ϑ", "\\vartheta", !0),
                        $("math", Z, Q, "ϖ", "\\varpi", !0),
                        $("math", Z, Q, "ϱ", "\\varrho", !0),
                        $("math", Z, Q, "ς", "\\varsigma", !0),
                        $("math", Z, Q, "φ", "\\varphi", !0),
                        $("math", Z, J, "∗", "*"),
                        $("math", Z, J, "+", "+"),
                        $("math", Z, J, "−", "-"),
                        $("math", Z, J, "⋅", "\\cdot", !0),
                        $("math", Z, J, "∘", "\\circ"),
                        $("math", Z, J, "÷", "\\div", !0),
                        $("math", Z, J, "±", "\\pm", !0),
                        $("math", Z, J, "×", "\\times", !0),
                        $("math", Z, J, "∩", "\\cap", !0),
                        $("math", Z, J, "∪", "\\cup", !0),
                        $("math", Z, J, "∖", "\\setminus"),
                        $("math", Z, J, "∧", "\\land"),
                        $("math", Z, J, "∨", "\\lor"),
                        $("math", Z, J, "∧", "\\wedge", !0),
                        $("math", Z, J, "∨", "\\vee", !0),
                        $("math", Z, "textord", "√", "\\surd"),
                        $("math", Z, "open", "⟨", "\\langle", !0),
                        $("math", Z, "open", "∣", "\\lvert"),
                        $("math", Z, "open", "∥", "\\lVert"),
                        $("math", Z, "close", "?", "?"),
                        $("math", Z, "close", "!", "!"),
                        $("math", Z, "close", "⟩", "\\rangle", !0),
                        $("math", Z, "close", "∣", "\\rvert"),
                        $("math", Z, "close", "∥", "\\rVert"),
                        $("math", Z, et, "=", "="),
                        $("math", Z, et, ":", ":"),
                        $("math", Z, et, "≈", "\\approx", !0),
                        $("math", Z, et, "≅", "\\cong", !0),
                        $("math", Z, et, "≥", "\\ge"),
                        $("math", Z, et, "≥", "\\geq", !0),
                        $("math", Z, et, "←", "\\gets"),
                        $("math", Z, et, ">", "\\gt", !0),
                        $("math", Z, et, "∈", "\\in", !0),
                        $("math", Z, et, "", "\\@not"),
                        $("math", Z, et, "⊂", "\\subset", !0),
                        $("math", Z, et, "⊃", "\\supset", !0),
                        $("math", Z, et, "⊆", "\\subseteq", !0),
                        $("math", Z, et, "⊇", "\\supseteq", !0),
                        $("math", K, et, "⊈", "\\nsubseteq", !0),
                        $("math", K, et, "⊉", "\\nsupseteq", !0),
                        $("math", Z, et, "⊨", "\\models"),
                        $("math", Z, et, "←", "\\leftarrow", !0),
                        $("math", Z, et, "≤", "\\le"),
                        $("math", Z, et, "≤", "\\leq", !0),
                        $("math", Z, et, "<", "\\lt", !0),
                        $("math", Z, et, "→", "\\rightarrow", !0),
                        $("math", Z, et, "→", "\\to"),
                        $("math", K, et, "≱", "\\ngeq", !0),
                        $("math", K, et, "≰", "\\nleq", !0),
                        $("math", Z, "spacing", " ", "\\ "),
                        $("math", Z, "spacing", " ", "~"),
                        $("math", Z, "spacing", " ", "\\space"),
                        $("math", Z, "spacing", " ", "\\nobreakspace"),
                        $("text", Z, "spacing", " ", "\\ "),
                        $("text", Z, "spacing", " ", " "),
                        $("text", Z, "spacing", " ", "~"),
                        $("text", Z, "spacing", " ", "\\space"),
                        $("text", Z, "spacing", " ", "\\nobreakspace"),
                        $("math", Z, "spacing", null, "\\nobreak"),
                        $("math", Z, "spacing", null, "\\allowbreak"),
                        $("math", Z, "punct", ",", ","),
                        $("math", Z, "punct", ";", ";"),
                        $("math", K, J, "⊼", "\\barwedge", !0),
                        $("math", K, J, "⊻", "\\veebar", !0),
                        $("math", Z, J, "⊙", "\\odot", !0),
                        $("math", Z, J, "⊕", "\\oplus", !0),
                        $("math", Z, J, "⊗", "\\otimes", !0),
                        $("math", Z, "textord", "∂", "\\partial", !0),
                        $("math", Z, J, "⊘", "\\oslash", !0),
                        $("math", K, J, "⊚", "\\circledcirc", !0),
                        $("math", K, J, "⊡", "\\boxdot", !0),
                        $("math", Z, J, "△", "\\bigtriangleup"),
                        $("math", Z, J, "▽", "\\bigtriangledown"),
                        $("math", Z, J, "†", "\\dagger"),
                        $("math", Z, J, "⋄", "\\diamond"),
                        $("math", Z, J, "⋆", "\\star"),
                        $("math", Z, J, "◃", "\\triangleleft"),
                        $("math", Z, J, "▹", "\\triangleright"),
                        $("math", Z, "open", "{", "\\{"),
                        $("text", Z, "textord", "{", "\\{"),
                        $("text", Z, "textord", "{", "\\textbraceleft"),
                        $("math", Z, "close", "}", "\\}"),
                        $("text", Z, "textord", "}", "\\}"),
                        $("text", Z, "textord", "}", "\\textbraceright"),
                        $("math", Z, "open", "{", "\\lbrace"),
                        $("math", Z, "close", "}", "\\rbrace"),
                        $("math", Z, "open", "[", "\\lbrack", !0),
                        $("text", Z, "textord", "[", "\\lbrack", !0),
                        $("math", Z, "close", "]", "\\rbrack", !0),
                        $("text", Z, "textord", "]", "\\rbrack", !0),
                        $("math", Z, "open", "(", "\\lparen", !0),
                        $("math", Z, "close", ")", "\\rparen", !0),
                        $("text", Z, "textord", "<", "\\textless", !0),
                        $("text", Z, "textord", ">", "\\textgreater", !0),
                        $("math", Z, "open", "⌊", "\\lfloor", !0),
                        $("math", Z, "close", "⌋", "\\rfloor", !0),
                        $("math", Z, "open", "⌈", "\\lceil", !0),
                        $("math", Z, "close", "⌉", "\\rceil", !0),
                        $("math", Z, "textord", "\\", "\\backslash"),
                        $("math", Z, "textord", "∣", "|"),
                        $("math", Z, "textord", "∣", "\\vert"),
                        $("text", Z, "textord", "|", "\\textbar", !0),
                        $("math", Z, "textord", "∥", "\\|"),
                        $("math", Z, "textord", "∥", "\\Vert"),
                        $("text", Z, "textord", "∥", "\\textbardbl"),
                        $("text", Z, "textord", "~", "\\textasciitilde"),
                        $("text", Z, "textord", "\\", "\\textbackslash"),
                        $("text", Z, "textord", "^", "\\textasciicircum"),
                        $("math", Z, et, "↑", "\\uparrow", !0),
                        $("math", Z, et, "⇑", "\\Uparrow", !0),
                        $("math", Z, et, "↓", "\\downarrow", !0),
                        $("math", Z, et, "⇓", "\\Downarrow", !0),
                        $("math", Z, et, "↕", "\\updownarrow", !0),
                        $("math", Z, et, "⇕", "\\Updownarrow", !0),
                        $("math", Z, tt, "∐", "\\coprod"),
                        $("math", Z, tt, "⋁", "\\bigvee"),
                        $("math", Z, tt, "⋀", "\\bigwedge"),
                        $("math", Z, tt, "⨄", "\\biguplus"),
                        $("math", Z, tt, "⋂", "\\bigcap"),
                        $("math", Z, tt, "⋃", "\\bigcup"),
                        $("math", Z, tt, "∫", "\\int"),
                        $("math", Z, tt, "∫", "\\intop"),
                        $("math", Z, tt, "∬", "\\iint"),
                        $("math", Z, tt, "∭", "\\iiint"),
                        $("math", Z, tt, "∏", "\\prod"),
                        $("math", Z, tt, "∑", "\\sum"),
                        $("math", Z, tt, "⨂", "\\bigotimes"),
                        $("math", Z, tt, "⨁", "\\bigoplus"),
                        $("math", Z, tt, "⨀", "\\bigodot"),
                        $("math", Z, tt, "∮", "\\oint"),
                        $("math", Z, tt, "⨆", "\\bigsqcup"),
                        $("math", Z, tt, "∫", "\\smallint"),
                        $("text", Z, "inner", "…", "\\textellipsis"),
                        $("math", Z, "inner", "…", "\\mathellipsis"),
                        $("text", Z, "inner", "…", "\\ldots", !0),
                        $("math", Z, "inner", "…", "\\ldots", !0),
                        $("math", Z, "inner", "⋯", "\\@cdots", !0),
                        $("math", Z, "inner", "⋱", "\\ddots", !0),
                        $("math", Z, "textord", "⋮", "\\varvdots"),
                        $("math", Z, "accent-token", "ˊ", "\\acute"),
                        $("math", Z, "accent-token", "ˋ", "\\grave"),
                        $("math", Z, "accent-token", "¨", "\\ddot"),
                        $("math", Z, "accent-token", "~", "\\tilde"),
                        $("math", Z, "accent-token", "ˉ", "\\bar"),
                        $("math", Z, "accent-token", "˘", "\\breve"),
                        $("math", Z, "accent-token", "ˇ", "\\check"),
                        $("math", Z, "accent-token", "^", "\\hat"),
                        $("math", Z, "accent-token", "⃗", "\\vec"),
                        $("math", Z, "accent-token", "˙", "\\dot"),
                        $("math", Z, "accent-token", "˚", "\\mathring"),
                        $("math", Z, Q, "", "\\@imath"),
                        $("math", Z, Q, "", "\\@jmath"),
                        $("math", Z, "textord", "ı", "ı"),
                        $("math", Z, "textord", "ȷ", "ȷ"),
                        $("text", Z, "textord", "ı", "\\i", !0),
                        $("text", Z, "textord", "ȷ", "\\j", !0),
                        $("text", Z, "textord", "ß", "\\ss", !0),
                        $("text", Z, "textord", "æ", "\\ae", !0),
                        $("text", Z, "textord", "œ", "\\oe", !0),
                        $("text", Z, "textord", "ø", "\\o", !0),
                        $("text", Z, "textord", "Æ", "\\AE", !0),
                        $("text", Z, "textord", "Œ", "\\OE", !0),
                        $("text", Z, "textord", "Ø", "\\O", !0),
                        $("text", Z, "accent-token", "ˊ", "\\'"),
                        $("text", Z, "accent-token", "ˋ", "\\`"),
                        $("text", Z, "accent-token", "ˆ", "\\^"),
                        $("text", Z, "accent-token", "˜", "\\~"),
                        $("text", Z, "accent-token", "ˉ", "\\="),
                        $("text", Z, "accent-token", "˘", "\\u"),
                        $("text", Z, "accent-token", "˙", "\\."),
                        $("text", Z, "accent-token", "˚", "\\r"),
                        $("text", Z, "accent-token", "ˇ", "\\v"),
                        $("text", Z, "accent-token", "¨", '\\"'),
                        $("text", Z, "accent-token", "˝", "\\H"),
                        $("text", Z, "accent-token", "◯", "\\textcircled");
                        var rt = {
                            "--": !0,
                            "---": !0,
                            "``": !0,
                            "''": !0
                        };
                        $("text", Z, "textord", "–", "--", !0),
                            $("text", Z, "textord", "–", "\\textendash"),
                            $("text", Z, "textord", "—", "---", !0),
                            $("text", Z, "textord", "—", "\\textemdash"),
                            $("text", Z, "textord", "‘", "`", !0),
                            $("text", Z, "textord", "‘", "\\textquoteleft"),
                            $("text", Z, "textord", "’", "'", !0),
                            $("text", Z, "textord", "’", "\\textquoteright"),
                            $("text", Z, "textord", "“", "``", !0),
                            $("text", Z, "textord", "“", "\\textquotedblleft"),
                            $("text", Z, "textord", "”", "''", !0),
                            $("text", Z, "textord", "”", "\\textquotedblright"),
                            $("math", Z, "textord", "°", "\\degree", !0),
                            $("text", Z, "textord", "°", "\\degree"),
                            $("text", Z, "textord", "°", "\\textdegree", !0),
                            $("math", Z, "textord", "£", "\\pounds"),
                            $("math", Z, "textord", "£", "\\mathsterling", !0),
                            $("text", Z, "textord", "£", "\\pounds"),
                            $("text", Z, "textord", "£", "\\textsterling", !0),
                            $("math", K, "textord", "✠", "\\maltese"),
                            $("text", K, "textord", "✠", "\\maltese");
                        for (var nt = 0; nt < '0123456789/@."'.length; nt++) {
                            var at = '0123456789/@."'.charAt(nt);
                            $("math", Z, "textord", at, at)
                        }
                        for (var it = 0; it < '0123456789!@*()-=+";:?/.,'.length; it++) {
                            var ot = '0123456789!@*()-=+";:?/.,'.charAt(it);
                            $("text", Z, "textord", ot, ot)
                        }
                        for (var st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", lt = 0; lt < st.length; lt++) {
                            var ht = st.charAt(lt);
                            $("math", Z, Q, ht, ht),
                                $("text", Z, "textord", ht, ht)
                        }
                        $("math", K, "textord", "C", "ℂ"),
                            $("text", K, "textord", "C", "ℂ"),
                            $("math", K, "textord", "H", "ℍ"),
                            $("text", K, "textord", "H", "ℍ"),
                            $("math", K, "textord", "N", "ℕ"),
                            $("text", K, "textord", "N", "ℕ"),
                            $("math", K, "textord", "P", "ℙ"),
                            $("text", K, "textord", "P", "ℙ"),
                            $("math", K, "textord", "Q", "ℚ"),
                            $("text", K, "textord", "Q", "ℚ"),
                            $("math", K, "textord", "R", "ℝ"),
                            $("text", K, "textord", "R", "ℝ"),
                            $("math", K, "textord", "Z", "ℤ"),
                            $("text", K, "textord", "Z", "ℤ"),
                            $("math", Z, Q, "h", "ℎ"),
                            $("text", Z, Q, "h", "ℎ");
                        for (var mt = "", ct = 0; ct < st.length; ct++) {
                            var ut = st.charAt(ct);
                            $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56320 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56372 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56424 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56580 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56736 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56788 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56840 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56944 + ct)),
                                $("text", Z, "textord", ut, mt),
                            ct < 26 && ($("math", Z, Q, ut, mt = String.fromCharCode(55349, 56632 + ct)),
                                $("text", Z, "textord", ut, mt),
                                $("math", Z, Q, ut, mt = String.fromCharCode(55349, 56476 + ct)),
                                $("text", Z, "textord", ut, mt))
                        }
                        $("math", Z, Q, "k", mt = String.fromCharCode(55349, 56668)),
                            $("text", Z, "textord", "k", mt);
                        for (var pt = 0; pt < 10; pt++) {
                            var dt = pt.toString();
                            $("math", Z, Q, dt, mt = String.fromCharCode(55349, 57294 + pt)),
                                $("text", Z, "textord", dt, mt),
                                $("math", Z, Q, dt, mt = String.fromCharCode(55349, 57314 + pt)),
                                $("text", Z, "textord", dt, mt),
                                $("math", Z, Q, dt, mt = String.fromCharCode(55349, 57324 + pt)),
                                $("text", Z, "textord", dt, mt),
                                $("math", Z, Q, dt, mt = String.fromCharCode(55349, 57334 + pt)),
                                $("text", Z, "textord", dt, mt)
                        }
                        for (var ft = 0; ft < "ÇÐÞçþ".length; ft++) {
                            var gt = "ÇÐÞçþ".charAt(ft);
                            $("math", Z, Q, gt, gt),
                                $("text", Z, "textord", gt, gt)
                        }
                        var xt = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathnormal", "textit", "Math-Italic"], ["mathnormal", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]]
                            , vt = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]]
                            , bt = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]]
                            , yt = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488]
                            , wt = function(t, e) {
                            return e.size < 2 ? t : bt[t - 1][e.size - 1]
                        }
                            , kt = function() {
                            function t(e) {
                                this.style = void 0,
                                    this.color = void 0,
                                    this.size = void 0,
                                    this.textSize = void 0,
                                    this.phantom = void 0,
                                    this.font = void 0,
                                    this.fontFamily = void 0,
                                    this.fontWeight = void 0,
                                    this.fontShape = void 0,
                                    this.sizeMultiplier = void 0,
                                    this.maxSize = void 0,
                                    this.minRuleThickness = void 0,
                                    this._fontMetrics = void 0,
                                    this.style = e.style,
                                    this.color = e.color,
                                    this.size = e.size || t.BASESIZE,
                                    this.textSize = e.textSize || this.size,
                                    this.phantom = !!e.phantom,
                                    this.font = e.font || "",
                                    this.fontFamily = e.fontFamily || "",
                                    this.fontWeight = e.fontWeight || "",
                                    this.fontShape = e.fontShape || "",
                                    this.sizeMultiplier = yt[this.size - 1],
                                    this.maxSize = e.maxSize,
                                    this.minRuleThickness = e.minRuleThickness,
                                    this._fontMetrics = void 0
                            }
                            var e = t.prototype;
                            return e.extend = function(e) {
                                var r = {
                                    style: this.style,
                                    size: this.size,
                                    textSize: this.textSize,
                                    color: this.color,
                                    phantom: this.phantom,
                                    font: this.font,
                                    fontFamily: this.fontFamily,
                                    fontWeight: this.fontWeight,
                                    fontShape: this.fontShape,
                                    maxSize: this.maxSize,
                                    minRuleThickness: this.minRuleThickness
                                };
                                for (var n in e)
                                    e.hasOwnProperty(n) && (r[n] = e[n]);
                                return new t(r)
                            }
                                ,
                                e.havingStyle = function(t) {
                                    return this.style === t ? this : this.extend({
                                        style: t,
                                        size: wt(this.textSize, t)
                                    })
                                }
                                ,
                                e.havingCrampedStyle = function() {
                                    return this.havingStyle(this.style.cramp())
                                }
                                ,
                                e.havingSize = function(t) {
                                    return this.size === t && this.textSize === t ? this : this.extend({
                                        style: this.style.text(),
                                        size: t,
                                        textSize: t,
                                        sizeMultiplier: yt[t - 1]
                                    })
                                }
                                ,
                                e.havingBaseStyle = function(e) {
                                    e = e || this.style.text();
                                    var r = wt(t.BASESIZE, e);
                                    return this.size === r && this.textSize === t.BASESIZE && this.style === e ? this : this.extend({
                                        style: e,
                                        size: r
                                    })
                                }
                                ,
                                e.havingBaseSizing = function() {
                                    var t;
                                    switch (this.style.id) {
                                        case 4:
                                        case 5:
                                            t = 3;
                                            break;
                                        case 6:
                                        case 7:
                                            t = 1;
                                            break;
                                        default:
                                            t = 6
                                    }
                                    return this.extend({
                                        style: this.style.text(),
                                        size: t
                                    })
                                }
                                ,
                                e.withColor = function(t) {
                                    return this.extend({
                                        color: t
                                    })
                                }
                                ,
                                e.withPhantom = function() {
                                    return this.extend({
                                        phantom: !0
                                    })
                                }
                                ,
                                e.withFont = function(t) {
                                    return this.extend({
                                        font: t
                                    })
                                }
                                ,
                                e.withTextFontFamily = function(t) {
                                    return this.extend({
                                        fontFamily: t,
                                        font: ""
                                    })
                                }
                                ,
                                e.withTextFontWeight = function(t) {
                                    return this.extend({
                                        fontWeight: t,
                                        font: ""
                                    })
                                }
                                ,
                                e.withTextFontShape = function(t) {
                                    return this.extend({
                                        fontShape: t,
                                        font: ""
                                    })
                                }
                                ,
                                e.sizingClasses = function(t) {
                                    return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : []
                                }
                                ,
                                e.baseSizingClasses = function() {
                                    return this.size !== t.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + t.BASESIZE] : []
                                }
                                ,
                                e.fontMetrics = function() {
                                    return this._fontMetrics || (this._fontMetrics = function(t) {
                                        var e;
                                        if (!Y[e = t >= 5 ? 0 : t >= 3 ? 1 : 2]) {
                                            var r = Y[e] = {
                                                cssEmPerMu: V.quad[e] / 18
                                            };
                                            for (var n in V)
                                                V.hasOwnProperty(n) && (r[n] = V[n][e])
                                        }
                                        return Y[e]
                                    }(this.size)),
                                        this._fontMetrics
                                }
                                ,
                                e.getColor = function() {
                                    return this.phantom ? "transparent" : this.color
                                }
                                ,
                                t
                        }();
                        kt.BASESIZE = 6;
                        var St = kt
                            , Mt = {
                            pt: 1,
                            mm: 7227 / 2540,
                            cm: 7227 / 254,
                            in: 72.27,
                            bp: 1.00375,
                            pc: 12,
                            dd: 1238 / 1157,
                            cc: 14856 / 1157,
                            nd: 685 / 642,
                            nc: 1370 / 107,
                            sp: 1 / 65536,
                            px: 1.00375
                        }
                            , zt = {
                            ex: !0,
                            em: !0,
                            mu: !0
                        }
                            , At = function(t) {
                            return "string" != typeof t && (t = t.unit),
                            t in Mt || t in zt || "ex" === t
                        }
                            , Tt = function(t, e) {
                            var r;
                            if (t.unit in Mt)
                                r = Mt[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
                            else if ("mu" === t.unit)
                                r = e.fontMetrics().cssEmPerMu;
                            else {
                                var n;
                                if (n = e.style.isTight() ? e.havingStyle(e.style.text()) : e,
                                    "ex" === t.unit)
                                    r = n.fontMetrics().xHeight;
                                else {
                                    if ("em" !== t.unit)
                                        throw new o("Invalid unit: '" + t.unit + "'");
                                    r = n.fontMetrics().quad
                                }
                                n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier)
                            }
                            return Math.min(t.number * r, e.maxSize)
                        }
                            , Bt = function(t, e, r) {
                            return j[r][t] && j[r][t].replace && (t = j[r][t].replace),
                                {
                                    value: t,
                                    metrics: G(t, e, r)
                                }
                        }
                            , Ct = function(t, e, r, n, a) {
                            var i, o = Bt(t, e, r), s = o.metrics;
                            if (t = o.value,
                                    s) {
                                var l = s.italic;
                                ("text" === r || n && "mathit" === n.font) && (l = 0),
                                    i = new E(t,s.height,s.depth,l,s.skew,s.width,a)
                            } else
                                "undefined" != typeof console && console.warn("No character metrics for '" + t + "' in style '" + e + "' and mode '" + r + "'"),
                                    i = new E(t,0,0,0,0,0,a);
                            if (n) {
                                i.maxFontSize = n.sizeMultiplier,
                                n.style.isTight() && i.classes.push("mtight");
                                var h = n.getColor();
                                h && (i.style.color = h)
                            }
                            return i
                        }
                            , qt = function(t, e) {
                            if (T(t.classes) !== T(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize)
                                return !1;
                            for (var r in t.style)
                                if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
                                    return !1;
                            for (var n in e.style)
                                if (e.style.hasOwnProperty(n) && t.style[n] !== e.style[n])
                                    return !1;
                            return !0
                        }
                            , Nt = function(t) {
                            for (var e = 0, r = 0, n = 0, a = 0; a < t.children.length; a++) {
                                var i = t.children[a];
                                i.height > e && (e = i.height),
                                i.depth > r && (r = i.depth),
                                i.maxFontSize > n && (n = i.maxFontSize)
                            }
                            t.height = e,
                                t.depth = r,
                                t.maxFontSize = n
                        }
                            , It = function(t, e, r, n) {
                            var a = new N(t,e,r,n);
                            return Nt(a),
                                a
                        }
                            , Ot = function(t, e, r, n) {
                            return new N(t,e,r,n)
                        }
                            , Rt = function(t) {
                            var e = new A(t);
                            return Nt(e),
                                e
                        }
                            , Et = function(t, e, r) {
                            var n = "";
                            switch (t) {
                                case "amsrm":
                                    n = "AMS";
                                    break;
                                case "textrm":
                                    n = "Main";
                                    break;
                                case "textsf":
                                    n = "SansSerif";
                                    break;
                                case "texttt":
                                    n = "Typewriter";
                                    break;
                                default:
                                    n = t
                            }
                            return n + "-" + ("textbf" === e && "textit" === r ? "BoldItalic" : "textbf" === e ? "Bold" : "textit" === e ? "Italic" : "Regular")
                        }
                            , Lt = {
                            mathbf: {
                                variant: "bold",
                                fontName: "Main-Bold"
                            },
                            mathrm: {
                                variant: "normal",
                                fontName: "Main-Regular"
                            },
                            textit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathnormal: {
                                variant: "italic",
                                fontName: "Math-Italic"
                            },
                            mathbb: {
                                variant: "double-struck",
                                fontName: "AMS-Regular"
                            },
                            mathcal: {
                                variant: "script",
                                fontName: "Caligraphic-Regular"
                            },
                            mathfrak: {
                                variant: "fraktur",
                                fontName: "Fraktur-Regular"
                            },
                            mathscr: {
                                variant: "script",
                                fontName: "Script-Regular"
                            },
                            mathsf: {
                                variant: "sans-serif",
                                fontName: "SansSerif-Regular"
                            },
                            mathtt: {
                                variant: "monospace",
                                fontName: "Typewriter-Regular"
                            }
                        }
                            , Pt = {
                            vec: ["vec", .471, .714],
                            oiintSize1: ["oiintSize1", .957, .499],
                            oiintSize2: ["oiintSize2", 1.472, .659],
                            oiiintSize1: ["oiiintSize1", 1.304, .499],
                            oiiintSize2: ["oiiintSize2", 1.98, .659],
                            leftParenInner: ["leftParenInner", .875, .3],
                            rightParenInner: ["rightParenInner", .875, .3]
                        }
                            , Dt = {
                            fontMap: Lt,
                            makeSymbol: Ct,
                            mathsym: function(t, e, r, n) {
                                return void 0 === n && (n = []),
                                    "boldsymbol" === r.font && Bt(t, "Main-Bold", e).metrics ? Ct(t, "Main-Bold", e, r, n.concat(["mathbf"])) : "\\" === t || "main" === j[e][t].font ? Ct(t, "Main-Regular", e, r, n) : Ct(t, "AMS-Regular", e, r, n.concat(["amsrm"]))
                            },
                            makeSpan: It,
                            makeSvgSpan: Ot,
                            makeLineSpan: function(t, e, r) {
                                var n = It([t], [], e);
                                return n.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness),
                                    n.style.borderBottomWidth = n.height + "em",
                                    n.maxFontSize = 1,
                                    n
                            },
                            makeAnchor: function(t, e, r, n) {
                                var a = new I(t,e,r,n);
                                return Nt(a),
                                    a
                            },
                            makeFragment: Rt,
                            wrapFragment: function(t, e) {
                                return t instanceof A ? It([], [t], e) : t
                            },
                            makeVList: function(t, e) {
                                for (var r = function(t) {
                                    if ("individualShift" === t.positionType) {
                                        for (var e = t.children, r = [e[0]], n = -e[0].shift - e[0].elem.depth, a = n, i = 1; i < e.length; i++) {
                                            var o = -e[i].shift - a - e[i].elem.depth
                                                , s = o - (e[i - 1].elem.height + e[i - 1].elem.depth);
                                            a += o,
                                                r.push({
                                                    type: "kern",
                                                    size: s
                                                }),
                                                r.push(e[i])
                                        }
                                        return {
                                            children: r,
                                            depth: n
                                        }
                                    }
                                    var l;
                                    if ("top" === t.positionType) {
                                        for (var h = t.positionData, m = 0; m < t.children.length; m++) {
                                            var c = t.children[m];
                                            h -= "kern" === c.type ? c.size : c.elem.height + c.elem.depth
                                        }
                                        l = h
                                    } else if ("bottom" === t.positionType)
                                        l = -t.positionData;
                                    else {
                                        var u = t.children[0];
                                        if ("elem" !== u.type)
                                            throw new Error('First child must have type "elem".');
                                        if ("shift" === t.positionType)
                                            l = -u.elem.depth - t.positionData;
                                        else {
                                            if ("firstBaseline" !== t.positionType)
                                                throw new Error("Invalid positionType " + t.positionType + ".");
                                            l = -u.elem.depth
                                        }
                                    }
                                    return {
                                        children: t.children,
                                        depth: l
                                    }
                                }(t), n = r.children, a = r.depth, i = 0, o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    if ("elem" === s.type) {
                                        var l = s.elem;
                                        i = Math.max(i, l.maxFontSize, l.height)
                                    }
                                }
                                i += 2;
                                var h = It(["pstrut"], []);
                                h.style.height = i + "em";
                                for (var m = [], c = a, u = a, p = a, d = 0; d < n.length; d++) {
                                    var f = n[d];
                                    if ("kern" === f.type)
                                        p += f.size;
                                    else {
                                        var g = f.elem
                                            , x = f.wrapperClasses || []
                                            , v = f.wrapperStyle || {}
                                            , b = It(x, [h, g], void 0, v);
                                        b.style.top = -i - p - g.depth + "em",
                                        f.marginLeft && (b.style.marginLeft = f.marginLeft),
                                        f.marginRight && (b.style.marginRight = f.marginRight),
                                            m.push(b),
                                            p += g.height + g.depth
                                    }
                                    c = Math.min(c, p),
                                        u = Math.max(u, p)
                                }
                                var y, w = It(["vlist"], m);
                                if (w.style.height = u + "em",
                                    c < 0) {
                                    var k = It([], [])
                                        , S = It(["vlist"], [k]);
                                    S.style.height = -c + "em";
                                    var M = It(["vlist-s"], [new E("​")]);
                                    y = [It(["vlist-r"], [w, M]), It(["vlist-r"], [S])]
                                } else
                                    y = [It(["vlist-r"], [w])];
                                var z = It(["vlist-t"], y);
                                return 2 === y.length && z.classes.push("vlist-t2"),
                                    z.height = u,
                                    z.depth = -c,
                                    z
                            },
                            makeOrd: function(t, e, r) {
                                var n = t.mode
                                    , a = t.text
                                    , i = ["mord"]
                                    , s = "math" === n || "text" === n && e.font
                                    , l = s ? e.font : e.fontFamily;
                                if (55349 === a.charCodeAt(0)) {
                                    var h = function(t, e) {
                                        var r = 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536
                                            , n = "math" === e ? 0 : 1;
                                        if (119808 <= r && r < 120484) {
                                            var a = Math.floor((r - 119808) / 26);
                                            return [xt[a][2], xt[a][n]]
                                        }
                                        if (120782 <= r && r <= 120831) {
                                            var i = Math.floor((r - 120782) / 10);
                                            return [vt[i][2], vt[i][n]]
                                        }
                                        if (120485 === r || 120486 === r)
                                            return [xt[0][2], xt[0][n]];
                                        if (120486 < r && r < 120782)
                                            return ["", ""];
                                        throw new o("Unsupported character: " + t)
                                    }(a, n)
                                        , m = h[0]
                                        , c = h[1];
                                    return Ct(a, m, n, e, i.concat(c))
                                }
                                if (l) {
                                    var u, p;
                                    if ("boldsymbol" === l) {
                                        var d = function(t, e, r, n, a) {
                                            return "textord" !== a && Bt(t, "Math-BoldItalic", e).metrics ? {
                                                fontName: "Math-BoldItalic",
                                                fontClass: "boldsymbol"
                                            } : {
                                                fontName: "Main-Bold",
                                                fontClass: "mathbf"
                                            }
                                        }(a, n, 0, 0, r);
                                        u = d.fontName,
                                            p = [d.fontClass]
                                    } else
                                        s ? (u = Lt[l].fontName,
                                            p = [l]) : (u = Et(l, e.fontWeight, e.fontShape),
                                            p = [l, e.fontWeight, e.fontShape]);
                                    if (Bt(a, u, n).metrics)
                                        return Ct(a, u, n, e, i.concat(p));
                                    if (rt.hasOwnProperty(a) && "Typewriter" === u.substr(0, 10)) {
                                        for (var f = [], g = 0; g < a.length; g++)
                                            f.push(Ct(a[g], u, n, e, i.concat(p)));
                                        return Rt(f)
                                    }
                                }
                                if ("mathord" === r)
                                    return Ct(a, "Math-Italic", n, e, i.concat(["mathnormal"]));
                                if ("textord" === r) {
                                    var x = j[n][a] && j[n][a].font;
                                    if ("ams" === x) {
                                        var v = Et("amsrm", e.fontWeight, e.fontShape);
                                        return Ct(a, v, n, e, i.concat("amsrm", e.fontWeight, e.fontShape))
                                    }
                                    if ("main" !== x && x) {
                                        var b = Et(x, e.fontWeight, e.fontShape);
                                        return Ct(a, b, n, e, i.concat(b, e.fontWeight, e.fontShape))
                                    }
                                    var y = Et("textrm", e.fontWeight, e.fontShape);
                                    return Ct(a, y, n, e, i.concat(e.fontWeight, e.fontShape))
                                }
                                throw new Error("unexpected type: " + r + " in makeOrd")
                            },
                            makeGlue: function(t, e) {
                                var r = It(["mspace"], [], e)
                                    , n = Tt(t, e);
                                return r.style.marginRight = n + "em",
                                    r
                            },
                            staticSvg: function(t, e) {
                                var r = Pt[t]
                                    , n = r[0]
                                    , a = r[1]
                                    , i = r[2]
                                    , o = new P(n)
                                    , s = new L([o],{
                                    width: a + "em",
                                    height: i + "em",
                                    style: "width:" + a + "em",
                                    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
                                    preserveAspectRatio: "xMinYMin"
                                })
                                    , l = Ot(["overlay"], [s], e);
                                return l.height = i,
                                    l.style.height = i + "em",
                                    l.style.width = a + "em",
                                    l
                            },
                            svgData: Pt,
                            tryCombineChars: function(t) {
                                for (var e = 0; e < t.length - 1; e++) {
                                    var r = t[e]
                                        , n = t[e + 1];
                                    r instanceof E && n instanceof E && qt(r, n) && (r.text += n.text,
                                        r.height = Math.max(r.height, n.height),
                                        r.depth = Math.max(r.depth, n.depth),
                                        r.italic = n.italic,
                                        t.splice(e + 1, 1),
                                        e--)
                                }
                                return t
                            }
                        }
                            , Ht = {
                            number: 3,
                            unit: "mu"
                        }
                            , Ft = {
                            number: 4,
                            unit: "mu"
                        }
                            , Vt = {
                            number: 5,
                            unit: "mu"
                        }
                            , Ut = {
                            mord: {
                                mop: Ht,
                                mbin: Ft,
                                mrel: Vt,
                                minner: Ht
                            },
                            mop: {
                                mord: Ht,
                                mop: Ht,
                                mrel: Vt,
                                minner: Ht
                            },
                            mbin: {
                                mord: Ft,
                                mop: Ft,
                                mopen: Ft,
                                minner: Ft
                            },
                            mrel: {
                                mord: Vt,
                                mop: Vt,
                                mopen: Vt,
                                minner: Vt
                            },
                            mopen: {},
                            mclose: {
                                mop: Ht,
                                mbin: Ft,
                                mrel: Vt,
                                minner: Ht
                            },
                            mpunct: {
                                mord: Ht,
                                mop: Ht,
                                mrel: Vt,
                                mopen: Ht,
                                mclose: Ht,
                                mpunct: Ht,
                                minner: Ht
                            },
                            minner: {
                                mord: Ht,
                                mop: Ht,
                                mbin: Ft,
                                mrel: Vt,
                                mopen: Ht,
                                mpunct: Ht,
                                minner: Ht
                            }
                        }
                            , Gt = {
                            mord: {
                                mop: Ht
                            },
                            mop: {
                                mord: Ht,
                                mop: Ht
                            },
                            mbin: {},
                            mrel: {},
                            mopen: {},
                            mclose: {
                                mop: Ht
                            },
                            mpunct: {},
                            minner: {
                                mop: Ht
                            }
                        }
                            , Yt = {}
                            , _t = {}
                            , Wt = {};
                        function Xt(t) {
                            for (var e = t.type, r = t.names, n = t.props, a = t.handler, i = t.htmlBuilder, o = t.mathmlBuilder, s = {
                                type: e,
                                numArgs: n.numArgs,
                                argTypes: n.argTypes,
                                greediness: void 0 === n.greediness ? 1 : n.greediness,
                                allowedInText: !!n.allowedInText,
                                allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
                                numOptionalArgs: n.numOptionalArgs || 0,
                                infix: !!n.infix,
                                handler: a
                            }, l = 0; l < r.length; ++l)
                                Yt[r[l]] = s;
                            e && (i && (_t[e] = i),
                            o && (Wt[e] = o))
                        }
                        function jt(t) {
                            Xt({
                                type: t.type,
                                names: [],
                                props: {
                                    numArgs: 0
                                },
                                handler: function() {
                                    throw new Error("Should never be called.")
                                },
                                htmlBuilder: t.htmlBuilder,
                                mathmlBuilder: t.mathmlBuilder
                            })
                        }
                        var $t = function(t) {
                            return "ordgroup" === t.type ? t.body : [t]
                        }
                            , Zt = Dt.makeSpan
                            , Kt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]
                            , Jt = ["rightmost", "mrel", "mclose", "mpunct"]
                            , Qt = {
                            display: w.DISPLAY,
                            text: w.TEXT,
                            script: w.SCRIPT,
                            scriptscript: w.SCRIPTSCRIPT
                        }
                            , te = {
                            mord: "mord",
                            mop: "mop",
                            mbin: "mbin",
                            mrel: "mrel",
                            mopen: "mopen",
                            mclose: "mclose",
                            mpunct: "mpunct",
                            minner: "minner"
                        }
                            , ee = function(t, e, r, n) {
                            void 0 === n && (n = [null, null]);
                            for (var a = [], i = 0; i < t.length; i++) {
                                var o = oe(t[i], e);
                                if (o instanceof A) {
                                    var s = o.children;
                                    a.push.apply(a, s)
                                } else
                                    a.push(o)
                            }
                            if (!r)
                                return a;
                            var l = e;
                            if (1 === t.length) {
                                var h = t[0];
                                "sizing" === h.type ? l = e.havingSize(h.size) : "styling" === h.type && (l = e.havingStyle(Qt[h.style]))
                            }
                            var m = Zt([n[0] || "leftmost"], [], e)
                                , u = Zt([n[1] || "rightmost"], [], e)
                                , p = "root" === r;
                            return re(a, (function(t, e) {
                                    var r = e.classes[0]
                                        , n = t.classes[0];
                                    "mbin" === r && c.contains(Jt, n) ? e.classes[0] = "mord" : "mbin" === n && c.contains(Kt, r) && (t.classes[0] = "mord")
                                }
                            ), {
                                node: m
                            }, u, p),
                                re(a, (function(t, e) {
                                        var r = ae(e)
                                            , n = ae(t)
                                            , a = r && n ? t.hasClass("mtight") ? Gt[r][n] : Ut[r][n] : null;
                                        if (a)
                                            return Dt.makeGlue(a, l)
                                    }
                                ), {
                                    node: m
                                }, u, p),
                                a
                        }
                            , re = function t(e, r, n, a, i) {
                            a && e.push(a);
                            for (var o = 0; o < e.length; o++) {
                                var s = e[o]
                                    , l = ne(s);
                                if (l)
                                    t(l.children, r, n, null, i);
                                else {
                                    var h = !s.hasClass("mspace");
                                    if (h) {
                                        var m = r(s, n.node);
                                        m && (n.insertAfter ? n.insertAfter(m) : (e.unshift(m),
                                            o++))
                                    }
                                    h ? n.node = s : i && s.hasClass("newline") && (n.node = Zt(["leftmost"])),
                                        n.insertAfter = function(t) {
                                            return function(r) {
                                                e.splice(t + 1, 0, r),
                                                    o++
                                            }
                                        }(o)
                                }
                            }
                            a && e.pop()
                        }
                            , ne = function(t) {
                            return t instanceof A || t instanceof I || t instanceof N && t.hasClass("enclosing") ? t : null
                        }
                            , ae = function(t, e) {
                            return t ? (e && (t = function t(e, r) {
                                var n = ne(e);
                                if (n) {
                                    var a = n.children;
                                    if (a.length) {
                                        if ("right" === r)
                                            return t(a[a.length - 1], "right");
                                        if ("left" === r)
                                            return t(a[0], "left")
                                    }
                                }
                                return e
                            }(t, e)),
                            te[t.classes[0]] || null) : null
                        }
                            , ie = function(t, e) {
                            var r = ["nulldelimiter"].concat(t.baseSizingClasses());
                            return Zt(e.concat(r))
                        }
                            , oe = function(t, e, r) {
                            if (!t)
                                return Zt();
                            if (_t[t.type]) {
                                var n = _t[t.type](t, e);
                                if (r && e.size !== r.size) {
                                    n = Zt(e.sizingClasses(r), [n], e);
                                    var a = e.sizeMultiplier / r.sizeMultiplier;
                                    n.height *= a,
                                        n.depth *= a
                                }
                                return n
                            }
                            throw new o("Got group of unknown type: '" + t.type + "'")
                        };
                        function se(t, e) {
                            var r = Zt(["base"], t, e)
                                , n = Zt(["strut"]);
                            return n.style.height = r.height + r.depth + "em",
                                n.style.verticalAlign = -r.depth + "em",
                                r.children.unshift(n),
                                r
                        }
                        function le(t, e) {
                            var r = null;
                            1 === t.length && "tag" === t[0].type && (r = t[0].tag,
                                t = t[0].body);
                            for (var n, a = ee(t, e, "root"), i = [], o = [], s = 0; s < a.length; s++)
                                if (o.push(a[s]),
                                    a[s].hasClass("mbin") || a[s].hasClass("mrel") || a[s].hasClass("allowbreak")) {
                                    for (var l = !1; s < a.length - 1 && a[s + 1].hasClass("mspace") && !a[s + 1].hasClass("newline"); )
                                        s++,
                                            o.push(a[s]),
                                        a[s].hasClass("nobreak") && (l = !0);
                                    l || (i.push(se(o, e)),
                                        o = [])
                                } else
                                    a[s].hasClass("newline") && (o.pop(),
                                    o.length > 0 && (i.push(se(o, e)),
                                        o = []),
                                        i.push(a[s]));
                            o.length > 0 && i.push(se(o, e)),
                            r && ((n = se(ee(r, e, !0))).classes = ["tag"],
                                i.push(n));
                            var h = Zt(["katex-html"], i);
                            if (h.setAttribute("aria-hidden", "true"),
                                    n) {
                                var m = n.children[0];
                                m.style.height = h.height + h.depth + "em",
                                    m.style.verticalAlign = -h.depth + "em"
                            }
                            return h
                        }
                        function he(t) {
                            return new A(t)
                        }
                        var me = function() {
                            function t(t, e) {
                                this.type = void 0,
                                    this.attributes = void 0,
                                    this.children = void 0,
                                    this.type = t,
                                    this.attributes = {},
                                    this.children = e || []
                            }
                            var e = t.prototype;
                            return e.setAttribute = function(t, e) {
                                this.attributes[t] = e
                            }
                                ,
                                e.getAttribute = function(t) {
                                    return this.attributes[t]
                                }
                                ,
                                e.toNode = function() {
                                    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
                                    for (var r = 0; r < this.children.length; r++)
                                        t.appendChild(this.children[r].toNode());
                                    return t
                                }
                                ,
                                e.toMarkup = function() {
                                    var t = "<" + this.type;
                                    for (var e in this.attributes)
                                        Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="',
                                            t += c.escape(this.attributes[e]),
                                            t += '"');
                                    t += ">";
                                    for (var r = 0; r < this.children.length; r++)
                                        t += this.children[r].toMarkup();
                                    return t += "</" + this.type + ">"
                                }
                                ,
                                e.toText = function() {
                                    return this.children.map((function(t) {
                                            return t.toText()
                                        }
                                    )).join("")
                                }
                                ,
                                t
                        }()
                            , ce = function() {
                            function t(t) {
                                this.text = void 0,
                                    this.text = t
                            }
                            var e = t.prototype;
                            return e.toNode = function() {
                                return document.createTextNode(this.text)
                            }
                                ,
                                e.toMarkup = function() {
                                    return c.escape(this.toText())
                                }
                                ,
                                e.toText = function() {
                                    return this.text
                                }
                                ,
                                t
                        }()
                            , ue = {
                            MathNode: me,
                            TextNode: ce,
                            SpaceNode: function() {
                                function t(t) {
                                    this.width = void 0,
                                        this.character = void 0,
                                        this.width = t,
                                        this.character = t >= .05555 && t <= .05556 ? " " : t >= .1666 && t <= .1667 ? " " : t >= .2222 && t <= .2223 ? " " : t >= .2777 && t <= .2778 ? "  " : t >= -.05556 && t <= -.05555 ? " ⁣" : t >= -.1667 && t <= -.1666 ? " ⁣" : t >= -.2223 && t <= -.2222 ? " ⁣" : t >= -.2778 && t <= -.2777 ? " ⁣" : null
                                }
                                var e = t.prototype;
                                return e.toNode = function() {
                                    if (this.character)
                                        return document.createTextNode(this.character);
                                    var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                                    return t.setAttribute("width", this.width + "em"),
                                        t
                                }
                                    ,
                                    e.toMarkup = function() {
                                        return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>'
                                    }
                                    ,
                                    e.toText = function() {
                                        return this.character ? this.character : " "
                                    }
                                    ,
                                    t
                            }(),
                            newDocumentFragment: he
                        }
                            , pe = function(t, e, r) {
                            return !j[e][t] || !j[e][t].replace || 55349 === t.charCodeAt(0) || rt.hasOwnProperty(t) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (t = j[e][t].replace),
                                new ue.TextNode(t)
                        }
                            , de = function(t) {
                            return 1 === t.length ? t[0] : new ue.MathNode("mrow",t)
                        }
                            , fe = function(t, e) {
                            if ("texttt" === e.fontFamily)
                                return "monospace";
                            if ("textsf" === e.fontFamily)
                                return "textit" === e.fontShape && "textbf" === e.fontWeight ? "sans-serif-bold-italic" : "textit" === e.fontShape ? "sans-serif-italic" : "textbf" === e.fontWeight ? "bold-sans-serif" : "sans-serif";
                            if ("textit" === e.fontShape && "textbf" === e.fontWeight)
                                return "bold-italic";
                            if ("textit" === e.fontShape)
                                return "italic";
                            if ("textbf" === e.fontWeight)
                                return "bold";
                            var r = e.font;
                            if (!r || "mathnormal" === r)
                                return null;
                            var n = t.mode;
                            if ("mathit" === r)
                                return "italic";
                            if ("boldsymbol" === r)
                                return "textord" === t.type ? "bold" : "bold-italic";
                            if ("mathbf" === r)
                                return "bold";
                            if ("mathbb" === r)
                                return "double-struck";
                            if ("mathfrak" === r)
                                return "fraktur";
                            if ("mathscr" === r || "mathcal" === r)
                                return "script";
                            if ("mathsf" === r)
                                return "sans-serif";
                            if ("mathtt" === r)
                                return "monospace";
                            var a = t.text;
                            return c.contains(["\\imath", "\\jmath"], a) ? null : (j[n][a] && j[n][a].replace && (a = j[n][a].replace),
                                G(a, Dt.fontMap[r].fontName, n) ? Dt.fontMap[r].variant : null)
                        }
                            , ge = function(t, e, r) {
                            if (1 === t.length) {
                                var n = ve(t[0], e);
                                return r && n instanceof me && "mo" === n.type && (n.setAttribute("lspace", "0em"),
                                    n.setAttribute("rspace", "0em")),
                                    [n]
                            }
                            for (var a, i = [], o = 0; o < t.length; o++) {
                                var s = ve(t[o], e);
                                if (s instanceof me && a instanceof me) {
                                    if ("mtext" === s.type && "mtext" === a.type && s.getAttribute("mathvariant") === a.getAttribute("mathvariant")) {
                                        var l;
                                        (l = a.children).push.apply(l, s.children);
                                        continue
                                    }
                                    if ("mn" === s.type && "mn" === a.type) {
                                        var h;
                                        (h = a.children).push.apply(h, s.children);
                                        continue
                                    }
                                    if ("mi" === s.type && 1 === s.children.length && "mn" === a.type) {
                                        var m = s.children[0];
                                        if (m instanceof ce && "." === m.text) {
                                            var c;
                                            (c = a.children).push.apply(c, s.children);
                                            continue
                                        }
                                    } else if ("mi" === a.type && 1 === a.children.length) {
                                        var u = a.children[0];
                                        if (u instanceof ce && "̸" === u.text && ("mo" === s.type || "mi" === s.type || "mn" === s.type)) {
                                            var p = s.children[0];
                                            p instanceof ce && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1),
                                                i.pop())
                                        }
                                    }
                                }
                                i.push(s),
                                    a = s
                            }
                            return i
                        }
                            , xe = function(t, e, r) {
                            return de(ge(t, e, r))
                        }
                            , ve = function(t, e) {
                            if (!t)
                                return new ue.MathNode("mrow");
                            if (Wt[t.type])
                                return Wt[t.type](t, e);
                            throw new o("Got group of unknown type: '" + t.type + "'")
                        };
                        function be(t, e, r, n, a) {
                            var i, o = ge(t, r);
                            i = 1 === o.length && o[0]instanceof me && c.contains(["mrow", "mtable"], o[0].type) ? o[0] : new ue.MathNode("mrow",o);
                            var s = new ue.MathNode("annotation",[new ue.TextNode(e)]);
                            s.setAttribute("encoding", "application/x-tex");
                            var l = new ue.MathNode("semantics",[i, s])
                                , h = new ue.MathNode("math",[l]);
                            h.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
                            n && h.setAttribute("display", "block");
                            var m = a ? "katex" : "katex-mathml";
                            return Dt.makeSpan([m], [h])
                        }
                        var ye = function(t) {
                            return new St({
                                style: t.displayMode ? w.DISPLAY : w.TEXT,
                                maxSize: t.maxSize,
                                minRuleThickness: t.minRuleThickness
                            })
                        }
                            , we = function(t, e) {
                            if (e.displayMode) {
                                var r = ["katex-display"];
                                e.leqno && r.push("leqno"),
                                e.fleqn && r.push("fleqn"),
                                    t = Dt.makeSpan(r, [t])
                            }
                            return t
                        }
                            , ke = function(t, e, r) {
                            var n, a = ye(r);
                            if ("mathml" === r.output)
                                return be(t, e, a, r.displayMode, !0);
                            if ("html" === r.output) {
                                var i = le(t, a);
                                n = Dt.makeSpan(["katex"], [i])
                            } else {
                                var o = be(t, e, a, r.displayMode, !1)
                                    , s = le(t, a);
                                n = Dt.makeSpan(["katex"], [o, s])
                            }
                            return we(n, r)
                        }
                            , Se = {
                            widehat: "^",
                            widecheck: "ˇ",
                            widetilde: "~",
                            utilde: "~",
                            overleftarrow: "←",
                            underleftarrow: "←",
                            xleftarrow: "←",
                            overrightarrow: "→",
                            underrightarrow: "→",
                            xrightarrow: "→",
                            underbrace: "⏟",
                            overbrace: "⏞",
                            overgroup: "⏠",
                            undergroup: "⏡",
                            overleftrightarrow: "↔",
                            underleftrightarrow: "↔",
                            xleftrightarrow: "↔",
                            Overrightarrow: "⇒",
                            xRightarrow: "⇒",
                            overleftharpoon: "↼",
                            xleftharpoonup: "↼",
                            overrightharpoon: "⇀",
                            xrightharpoonup: "⇀",
                            xLeftarrow: "⇐",
                            xLeftrightarrow: "⇔",
                            xhookleftarrow: "↩",
                            xhookrightarrow: "↪",
                            xmapsto: "↦",
                            xrightharpoondown: "⇁",
                            xleftharpoondown: "↽",
                            xrightleftharpoons: "⇌",
                            xleftrightharpoons: "⇋",
                            xtwoheadleftarrow: "↞",
                            xtwoheadrightarrow: "↠",
                            xlongequal: "=",
                            xtofrom: "⇄",
                            xrightleftarrows: "⇄",
                            xrightequilibrium: "⇌",
                            xleftequilibrium: "⇋"
                        }
                            , Me = {
                            overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
                            overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
                            underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
                            underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
                            xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
                            xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
                            Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
                            xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
                            xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
                            overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
                            xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
                            xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
                            overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
                            xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
                            xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
                            xlongequal: [["longequal"], .888, 334, "xMinYMin"],
                            xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
                            xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
                            overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
                            overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
                            underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
                            underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
                            xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
                            xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
                            xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
                            xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
                            xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
                            xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
                            overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
                            underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
                            overgroup: [["leftgroup", "rightgroup"], .888, 342],
                            undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
                            xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
                            xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
                            xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
                            xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
                            xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
                        }
                            , ze = function(t, e, r, n) {
                            var a, i = t.height + t.depth + 2 * r;
                            if (/fbox|color/.test(e)) {
                                if (a = Dt.makeSpan(["stretchy", e], [], n),
                                    "fbox" === e) {
                                    var o = n.color && n.getColor();
                                    o && (a.style.borderColor = o)
                                }
                            } else {
                                var s = [];
                                /^[bx]cancel$/.test(e) && s.push(new D({
                                    x1: "0",
                                    y1: "0",
                                    x2: "100%",
                                    y2: "100%",
                                    "stroke-width": "0.046em"
                                })),
                                /^x?cancel$/.test(e) && s.push(new D({
                                    x1: "0",
                                    y1: "100%",
                                    x2: "100%",
                                    y2: "0",
                                    "stroke-width": "0.046em"
                                }));
                                var l = new L(s,{
                                    width: "100%",
                                    height: i + "em"
                                });
                                a = Dt.makeSvgSpan([], [l], n)
                            }
                            return a.height = i,
                                a.style.height = i + "em",
                                a
                        }
                            , Ae = function(t) {
                            var e = new ue.MathNode("mo",[new ue.TextNode(Se[t.substr(1)])]);
                            return e.setAttribute("stretchy", "true"),
                                e
                        }
                            , Te = function(t, e) {
                            var r = function() {
                                var r = 4e5
                                    , n = t.label.substr(1);
                                if (c.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                                    var a, i, o, s = "ordgroup" === (d = t.base).type ? d.body.length : 1;
                                    if (s > 5)
                                        "widehat" === n || "widecheck" === n ? (a = 420,
                                            r = 2364,
                                            o = .42,
                                            i = n + "4") : (a = 312,
                                            r = 2340,
                                            o = .34,
                                            i = "tilde4");
                                    else {
                                        var l = [1, 1, 2, 2, 3, 3][s];
                                        "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][l],
                                            a = [0, 239, 300, 360, 420][l],
                                            o = [0, .24, .3, .3, .36, .42][l],
                                            i = n + l) : (r = [0, 600, 1033, 2339, 2340][l],
                                            a = [0, 260, 286, 306, 312][l],
                                            o = [0, .26, .286, .3, .306, .34][l],
                                            i = "tilde" + l)
                                    }
                                    var h = new P(i)
                                        , m = new L([h],{
                                        width: "100%",
                                        height: o + "em",
                                        viewBox: "0 0 " + r + " " + a,
                                        preserveAspectRatio: "none"
                                    });
                                    return {
                                        span: Dt.makeSvgSpan([], [m], e),
                                        minWidth: 0,
                                        height: o
                                    }
                                }
                                var u, p, d, f = [], g = Me[n], x = g[0], v = g[1], b = g[2], y = b / 1e3, w = x.length;
                                if (1 === w)
                                    u = ["hide-tail"],
                                        p = [g[3]];
                                else if (2 === w)
                                    u = ["halfarrow-left", "halfarrow-right"],
                                        p = ["xMinYMin", "xMaxYMin"];
                                else {
                                    if (3 !== w)
                                        throw new Error("Correct katexImagesData or update code here to support\n                    " + w + " children.");
                                    u = ["brace-left", "brace-center", "brace-right"],
                                        p = ["xMinYMin", "xMidYMin", "xMaxYMin"]
                                }
                                for (var k = 0; k < w; k++) {
                                    var S = new P(x[k])
                                        , M = new L([S],{
                                        width: "400em",
                                        height: y + "em",
                                        viewBox: "0 0 " + r + " " + b,
                                        preserveAspectRatio: p[k] + " slice"
                                    })
                                        , z = Dt.makeSvgSpan([u[k]], [M], e);
                                    if (1 === w)
                                        return {
                                            span: z,
                                            minWidth: v,
                                            height: y
                                        };
                                    z.style.height = y + "em",
                                        f.push(z)
                                }
                                return {
                                    span: Dt.makeSpan(["stretchy"], f, e),
                                    minWidth: v,
                                    height: y
                                }
                            }()
                                , n = r.span
                                , a = r.minWidth
                                , i = r.height;
                            return n.height = i,
                                n.style.height = i + "em",
                            a > 0 && (n.style.minWidth = a + "em"),
                                n
                        };
                        function Be(t, e) {
                            if (!t || t.type !== e)
                                throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
                            return t
                        }
                        function Ce(t) {
                            var e = qe(t);
                            if (!e)
                                throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
                            return e
                        }
                        function qe(t) {
                            return t && ("atom" === t.type || W.hasOwnProperty(t.type)) ? t : null
                        }
                        var Ne = function(t, e) {
                            var r, n, a;
                            t && "supsub" === t.type ? (r = (n = Be(t.base, "accent")).base,
                                t.base = r,
                                a = function(t) {
                                    if (t instanceof N)
                                        return t;
                                    throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".")
                                }(oe(t, e)),
                                t.base = n) : r = (n = Be(t, "accent")).base;
                            var i = oe(r, e.havingCrampedStyle())
                                , o = 0;
                            if (n.isShifty && c.isCharacterBox(r)) {
                                var s = c.getBaseElem(r);
                                o = H(oe(s, e.havingCrampedStyle())).skew
                            }
                            var l, h = Math.min(i.height, e.fontMetrics().xHeight);
                            if (n.isStretchy)
                                l = Te(n, e),
                                    l = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: i
                                        }, {
                                            type: "elem",
                                            elem: l,
                                            wrapperClasses: ["svg-align"],
                                            wrapperStyle: o > 0 ? {
                                                width: "calc(100% - " + 2 * o + "em)",
                                                marginLeft: 2 * o + "em"
                                            } : void 0
                                        }]
                                    }, e);
                            else {
                                var m, u;
                                "\\vec" === n.label ? (m = Dt.staticSvg("vec", e),
                                    u = Dt.svgData.vec[1]) : ((m = H(m = Dt.makeOrd({
                                    mode: n.mode,
                                    text: n.label
                                }, e, "textord"))).italic = 0,
                                    u = m.width),
                                    l = Dt.makeSpan(["accent-body"], [m]);
                                var p = "\\textcircled" === n.label;
                                p && (l.classes.push("accent-full"),
                                    h = i.height);
                                var d = o;
                                p || (d -= u / 2),
                                    l.style.left = d + "em",
                                "\\textcircled" === n.label && (l.style.top = ".2em"),
                                    l = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: i
                                        }, {
                                            type: "kern",
                                            size: -h
                                        }, {
                                            type: "elem",
                                            elem: l
                                        }]
                                    }, e)
                            }
                            var f = Dt.makeSpan(["mord", "accent"], [l], e);
                            return a ? (a.children[0] = f,
                                a.height = Math.max(f.height, a.height),
                                a.classes[0] = "mord",
                                a) : f
                        }
                            , Ie = function(t, e) {
                            var r = t.isStretchy ? Ae(t.label) : new ue.MathNode("mo",[pe(t.label, t.mode)])
                                , n = new ue.MathNode("mover",[ve(t.base, e), r]);
                            return n.setAttribute("accent", "true"),
                                n
                        }
                            , Oe = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((function(t) {
                                return "\\" + t
                            }
                        )).join("|"));
                        Xt({
                            type: "accent",
                            names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = e[0]
                                    , n = !Oe.test(t.funcName)
                                    , a = !n || "\\widehat" === t.funcName || "\\widetilde" === t.funcName || "\\widecheck" === t.funcName;
                                return {
                                    type: "accent",
                                    mode: t.parser.mode,
                                    label: t.funcName,
                                    isStretchy: n,
                                    isShifty: a,
                                    base: r
                                }
                            },
                            htmlBuilder: Ne,
                            mathmlBuilder: Ie
                        }),
                            Xt({
                                type: "accent",
                                names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function(t, e) {
                                    var r = e[0];
                                    return {
                                        type: "accent",
                                        mode: t.parser.mode,
                                        label: t.funcName,
                                        isStretchy: !1,
                                        isShifty: !0,
                                        base: r
                                    }
                                },
                                htmlBuilder: Ne,
                                mathmlBuilder: Ie
                            }),
                            Xt({
                                type: "accentUnder",
                                names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , a = e[0];
                                    return {
                                        type: "accentUnder",
                                        mode: r.mode,
                                        label: n,
                                        base: a
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = oe(t.base, e)
                                        , n = Te(t, e)
                                        , a = "\\utilde" === t.label ? .12 : 0
                                        , i = Dt.makeVList({
                                        positionType: "top",
                                        positionData: r.height,
                                        children: [{
                                            type: "elem",
                                            elem: n,
                                            wrapperClasses: ["svg-align"]
                                        }, {
                                            type: "kern",
                                            size: a
                                        }, {
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e);
                                    return Dt.makeSpan(["mord", "accentunder"], [i], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = Ae(t.label)
                                        , n = new ue.MathNode("munder",[ve(t.base, e), r]);
                                    return n.setAttribute("accentunder", "true"),
                                        n
                                }
                            });
                        var Re = function(t) {
                            var e = new ue.MathNode("mpadded",t ? [t] : []);
                            return e.setAttribute("width", "+0.6em"),
                                e.setAttribute("lspace", "0.3em"),
                                e
                        };
                        Xt({
                            type: "xArrow",
                            names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"],
                            props: {
                                numArgs: 1,
                                numOptionalArgs: 1
                            },
                            handler: function(t, e, r) {
                                var n = t.parser
                                    , a = t.funcName;
                                return {
                                    type: "xArrow",
                                    mode: n.mode,
                                    label: a,
                                    body: e[0],
                                    below: r[0]
                                }
                            },
                            htmlBuilder: function(t, e) {
                                var r, n = e.style, a = e.havingStyle(n.sup()), i = Dt.wrapFragment(oe(t.body, a, e), e);
                                i.classes.push("x-arrow-pad"),
                                t.below && (a = e.havingStyle(n.sub()),
                                    (r = Dt.wrapFragment(oe(t.below, a, e), e)).classes.push("x-arrow-pad"));
                                var o, s = Te(t, e), l = -e.fontMetrics().axisHeight + .5 * s.height, h = -e.fontMetrics().axisHeight - .5 * s.height - .111;
                                if ((i.depth > .25 || "\\xleftequilibrium" === t.label) && (h -= i.depth),
                                        r) {
                                    var m = -e.fontMetrics().axisHeight + r.height + .5 * s.height + .111;
                                    o = Dt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: i,
                                            shift: h
                                        }, {
                                            type: "elem",
                                            elem: s,
                                            shift: l
                                        }, {
                                            type: "elem",
                                            elem: r,
                                            shift: m
                                        }]
                                    }, e)
                                } else
                                    o = Dt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: i,
                                            shift: h
                                        }, {
                                            type: "elem",
                                            elem: s,
                                            shift: l
                                        }]
                                    }, e);
                                return o.children[0].children[0].children[1].classes.push("svg-align"),
                                    Dt.makeSpan(["mrel", "x-arrow"], [o], e)
                            },
                            mathmlBuilder: function(t, e) {
                                var r, n = Ae(t.label);
                                if (t.body) {
                                    var a = Re(ve(t.body, e));
                                    if (t.below) {
                                        var i = Re(ve(t.below, e));
                                        r = new ue.MathNode("munderover",[n, i, a])
                                    } else
                                        r = new ue.MathNode("mover",[n, a])
                                } else if (t.below) {
                                    var o = Re(ve(t.below, e));
                                    r = new ue.MathNode("munder",[n, o])
                                } else
                                    r = Re(),
                                        r = new ue.MathNode("mover",[n, r]);
                                return r
                            }
                        }),
                            Xt({
                                type: "textord",
                                names: ["\\@char"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    for (var r = t.parser, n = Be(e[0], "ordgroup").body, a = "", i = 0; i < n.length; i++)
                                        a += Be(n[i], "textord").text;
                                    var s = parseInt(a);
                                    if (isNaN(s))
                                        throw new o("\\@char has non-numeric argument " + a);
                                    return {
                                        type: "textord",
                                        mode: r.mode,
                                        text: String.fromCharCode(s)
                                    }
                                }
                            });
                        var Ee = function(t, e) {
                            var r = ee(t.body, e.withColor(t.color), !1);
                            return Dt.makeFragment(r)
                        }
                            , Le = function(t, e) {
                            var r = ge(t.body, e.withColor(t.color))
                                , n = new ue.MathNode("mstyle",r);
                            return n.setAttribute("mathcolor", t.color),
                                n
                        };
                        Xt({
                            type: "color",
                            names: ["\\textcolor"],
                            props: {
                                numArgs: 2,
                                allowedInText: !0,
                                greediness: 3,
                                argTypes: ["color", "original"]
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = Be(e[0], "color-token").color
                                    , a = e[1];
                                return {
                                    type: "color",
                                    mode: r.mode,
                                    color: n,
                                    body: $t(a)
                                }
                            },
                            htmlBuilder: Ee,
                            mathmlBuilder: Le
                        }),
                            Xt({
                                type: "color",
                                names: ["\\color"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0,
                                    greediness: 3,
                                    argTypes: ["color"]
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = t.breakOnTokenText
                                        , a = Be(e[0], "color-token").color;
                                    r.gullet.macros.set("\\current@color", a);
                                    var i = r.parseExpression(!0, n);
                                    return {
                                        type: "color",
                                        mode: r.mode,
                                        color: a,
                                        body: i
                                    }
                                },
                                htmlBuilder: Ee,
                                mathmlBuilder: Le
                            }),
                            Xt({
                                type: "cr",
                                names: ["\\cr", "\\newline"],
                                props: {
                                    numArgs: 0,
                                    numOptionalArgs: 1,
                                    argTypes: ["size"],
                                    allowedInText: !0
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = t.funcName
                                        , i = r[0]
                                        , o = "\\cr" === a
                                        , s = !1;
                                    return o || (s = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode")),
                                        {
                                            type: "cr",
                                            mode: n.mode,
                                            newLine: s,
                                            newRow: o,
                                            size: i && Be(i, "size").value
                                        }
                                },
                                htmlBuilder: function(t, e) {
                                    if (t.newRow)
                                        throw new o("\\cr valid only within a tabular/array environment");
                                    var r = Dt.makeSpan(["mspace"], [], e);
                                    return t.newLine && (r.classes.push("newline"),
                                    t.size && (r.style.marginTop = Tt(t.size, e) + "em")),
                                        r
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mspace");
                                    return t.newLine && (r.setAttribute("linebreak", "newline"),
                                    t.size && r.setAttribute("height", Tt(t.size, e) + "em")),
                                        r
                                }
                            });
                        var Pe = {
                            "\\global": "\\global",
                            "\\long": "\\\\globallong",
                            "\\\\globallong": "\\\\globallong",
                            "\\def": "\\gdef",
                            "\\gdef": "\\gdef",
                            "\\edef": "\\xdef",
                            "\\xdef": "\\xdef",
                            "\\let": "\\\\globallet",
                            "\\futurelet": "\\\\globalfuture"
                        }
                            , De = function(t) {
                            var e = t.text;
                            if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
                                throw new o("Expected a control sequence",t);
                            return e
                        }
                            , He = function(t, e, r, n) {
                            var a = t.gullet.macros.get(r.text);
                            null == a && (r.noexpand = !0,
                                a = {
                                    tokens: [r],
                                    numArgs: 0,
                                    unexpandable: !t.gullet.isExpandable(r.text)
                                }),
                                t.gullet.macros.set(e, a, n)
                        };
                        Xt({
                            type: "internal",
                            names: ["\\global", "\\long", "\\\\globallong"],
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function(t) {
                                var e = t.parser
                                    , r = t.funcName;
                                e.consumeSpaces();
                                var n = e.fetch();
                                if (Pe[n.text])
                                    return "\\global" !== r && "\\\\globallong" !== r || (n.text = Pe[n.text]),
                                        Be(e.parseFunction(), "internal");
                                throw new o("Invalid token after macro prefix",n)
                            }
                        }),
                            Xt({
                                type: "internal",
                                names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function(t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = e.gullet.consumeArgs(1)[0];
                                    if (1 !== n.length)
                                        throw new o("\\gdef's first argument must be a macro name");
                                    var a = n[0].text
                                        , i = 0;
                                    for (n = e.gullet.consumeArgs(1)[0]; 1 === n.length && "#" === n[0].text; ) {
                                        if (1 !== (n = e.gullet.consumeArgs(1)[0]).length)
                                            throw new o('Invalid argument number length "' + n.length + '"');
                                        if (!/^[1-9]$/.test(n[0].text))
                                            throw new o('Invalid argument number "' + n[0].text + '"');
                                        if (i++,
                                            parseInt(n[0].text) !== i)
                                            throw new o('Argument number "' + n[0].text + '" out of order');
                                        n = e.gullet.consumeArgs(1)[0]
                                    }
                                    return "\\edef" !== r && "\\xdef" !== r || (n = e.gullet.expandTokens(n)).reverse(),
                                        e.gullet.macros.set(a, {
                                            tokens: n,
                                            numArgs: i
                                        }, r === Pe[r]),
                                        {
                                            type: "internal",
                                            mode: e.mode
                                        }
                                }
                            }),
                            Xt({
                                type: "internal",
                                names: ["\\let", "\\\\globallet"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function(t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = De(e.gullet.popToken());
                                    e.gullet.consumeSpaces();
                                    var a = function(t) {
                                        var e = t.gullet.popToken();
                                        return "=" === e.text && " " === (e = t.gullet.popToken()).text && (e = t.gullet.popToken()),
                                            e
                                    }(e);
                                    return He(e, n, a, "\\\\globallet" === r),
                                        {
                                            type: "internal",
                                            mode: e.mode
                                        }
                                }
                            }),
                            Xt({
                                type: "internal",
                                names: ["\\futurelet", "\\\\globalfuture"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function(t) {
                                    var e = t.parser
                                        , r = t.funcName
                                        , n = De(e.gullet.popToken())
                                        , a = e.gullet.popToken()
                                        , i = e.gullet.popToken();
                                    return He(e, n, i, "\\\\globalfuture" === r),
                                        e.gullet.pushToken(i),
                                        e.gullet.pushToken(a),
                                        {
                                            type: "internal",
                                            mode: e.mode
                                        }
                                }
                            });
                        var Fe = function(t, e, r) {
                            var n = G(j.math[t] && j.math[t].replace || t, e, r);
                            if (!n)
                                throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
                            return n
                        }
                            , Ve = function(t, e, r, n) {
                            var a = r.havingBaseStyle(e)
                                , i = Dt.makeSpan(n.concat(a.sizingClasses(r)), [t], r)
                                , o = a.sizeMultiplier / r.sizeMultiplier;
                            return i.height *= o,
                                i.depth *= o,
                                i.maxFontSize = a.sizeMultiplier,
                                i
                        }
                            , Ue = function(t, e, r) {
                            var n = e.havingBaseStyle(r)
                                , a = (1 - e.sizeMultiplier / n.sizeMultiplier) * e.fontMetrics().axisHeight;
                            t.classes.push("delimcenter"),
                                t.style.top = a + "em",
                                t.height -= a,
                                t.depth += a
                        }
                            , Ge = function(t, e, r, n, a, i) {
                            var o = function(t, e, r, n) {
                                return Dt.makeSymbol(t, "Size" + e + "-Regular", r, n)
                            }(t, e, a, n)
                                , s = Ve(Dt.makeSpan(["delimsizing", "size" + e], [o], n), w.TEXT, n, i);
                            return r && Ue(s, n, w.TEXT),
                                s
                        }
                            , Ye = function(t, e, r) {
                            var n;
                            return n = "Size1-Regular" === e ? "delim-size1" : "delim-size4",
                                {
                                    type: "elem",
                                    elem: Dt.makeSpan(["delimsizinginner", n], [Dt.makeSpan([], [Dt.makeSymbol(t, e, r)])])
                                }
                        }
                            , _e = {
                            type: "kern",
                            size: -.005
                        }
                            , We = function(t, e, r, n, a, i) {
                            var o, s, l, h;
                            o = l = h = t,
                                s = null;
                            var m = "Size1-Regular";
                            "\\uparrow" === t ? l = h = "⏐" : "\\Uparrow" === t ? l = h = "‖" : "\\downarrow" === t ? o = l = "⏐" : "\\Downarrow" === t ? o = l = "‖" : "\\updownarrow" === t ? (o = "\\uparrow",
                                l = "⏐",
                                h = "\\downarrow") : "\\Updownarrow" === t ? (o = "\\Uparrow",
                                l = "‖",
                                h = "\\Downarrow") : "[" === t || "\\lbrack" === t ? (o = "⎡",
                                l = "⎢",
                                h = "⎣",
                                m = "Size4-Regular") : "]" === t || "\\rbrack" === t ? (o = "⎤",
                                l = "⎥",
                                h = "⎦",
                                m = "Size4-Regular") : "\\lfloor" === t || "⌊" === t ? (l = o = "⎢",
                                h = "⎣",
                                m = "Size4-Regular") : "\\lceil" === t || "⌈" === t ? (o = "⎡",
                                l = h = "⎢",
                                m = "Size4-Regular") : "\\rfloor" === t || "⌋" === t ? (l = o = "⎥",
                                h = "⎦",
                                m = "Size4-Regular") : "\\rceil" === t || "⌉" === t ? (o = "⎤",
                                l = h = "⎥",
                                m = "Size4-Regular") : "(" === t || "\\lparen" === t ? (o = "⎛",
                                l = "⎜",
                                h = "⎝",
                                m = "Size4-Regular") : ")" === t || "\\rparen" === t ? (o = "⎞",
                                l = "⎟",
                                h = "⎠",
                                m = "Size4-Regular") : "\\{" === t || "\\lbrace" === t ? (o = "⎧",
                                s = "⎨",
                                h = "⎩",
                                l = "⎪",
                                m = "Size4-Regular") : "\\}" === t || "\\rbrace" === t ? (o = "⎫",
                                s = "⎬",
                                h = "⎭",
                                l = "⎪",
                                m = "Size4-Regular") : "\\lgroup" === t || "⟮" === t ? (o = "⎧",
                                h = "⎩",
                                l = "⎪",
                                m = "Size4-Regular") : "\\rgroup" === t || "⟯" === t ? (o = "⎫",
                                h = "⎭",
                                l = "⎪",
                                m = "Size4-Regular") : "\\lmoustache" === t || "⎰" === t ? (o = "⎧",
                                h = "⎭",
                                l = "⎪",
                                m = "Size4-Regular") : "\\rmoustache" !== t && "⎱" !== t || (o = "⎫",
                                h = "⎩",
                                l = "⎪",
                                m = "Size4-Regular");
                            var c = Fe(o, m, a)
                                , u = c.height + c.depth
                                , p = Fe(l, m, a)
                                , d = p.height + p.depth
                                , f = Fe(h, m, a)
                                , g = f.height + f.depth
                                , x = 0
                                , v = 1;
                            if (null !== s) {
                                var b = Fe(s, m, a);
                                x = b.height + b.depth,
                                    v = 2
                            }
                            var y = u + g + x
                                , k = Math.max(0, Math.ceil((e - y) / (v * d)))
                                , S = y + k * v * d
                                , M = n.fontMetrics().axisHeight;
                            r && (M *= n.sizeMultiplier);
                            var z = S / 2 - M
                                , A = .005 * (k + 1) - d
                                , T = [];
                            if (T.push(Ye(h, m, a)),
                                null === s)
                                for (var B = 0; B < k; B++)
                                    T.push(_e),
                                        T.push(Ye(l, m, a));
                            else {
                                for (var C = 0; C < k; C++)
                                    T.push(_e),
                                        T.push(Ye(l, m, a));
                                T.push({
                                    type: "kern",
                                    size: A
                                }),
                                    T.push(Ye(l, m, a)),
                                    T.push(_e),
                                    T.push(Ye(s, m, a));
                                for (var q = 0; q < k; q++)
                                    T.push(_e),
                                        T.push(Ye(l, m, a))
                            }
                            if ("⎜" !== l && "⎟" !== l || 0 !== k)
                                T.push({
                                    type: "kern",
                                    size: A
                                }),
                                    T.push(Ye(l, m, a)),
                                    T.push(_e);
                            else {
                                var N = Dt.svgData.leftParenInner[2] / 2;
                                T.push({
                                    type: "kern",
                                    size: -N
                                });
                                var I = "⎜" === l ? "leftParenInner" : "rightParenInner"
                                    , O = Dt.staticSvg(I, n);
                                T.push({
                                    type: "elem",
                                    elem: O
                                }),
                                    T.push({
                                        type: "kern",
                                        size: -N
                                    })
                            }
                            T.push(Ye(o, m, a));
                            var R = n.havingBaseStyle(w.TEXT)
                                , E = Dt.makeVList({
                                positionType: "bottom",
                                positionData: z,
                                children: T
                            }, R);
                            return Ve(Dt.makeSpan(["delimsizing", "mult"], [E], R), w.TEXT, n, i)
                        }
                            , Xe = function(t, e, r, n, a) {
                            var i = function(t, e, r) {
                                e *= 1e3;
                                var n = "";
                                switch (t) {
                                    case "sqrtMain":
                                        n = function(t, e) {
                                            return "M95," + (622 + t + e) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + t / 2.075 + " -" + t + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + t) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                        }(e, 80);
                                        break;
                                    case "sqrtSize1":
                                        n = function(t, e) {
                                            return "M263," + (601 + t + e) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + t / 2.084 + " -" + t + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + t) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                        }(e, 80);
                                        break;
                                    case "sqrtSize2":
                                        n = function(t, e) {
                                            return "M983 " + (10 + t + e) + "\nl" + t / 3.13 + " -" + t + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + t) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z"
                                        }(e, 80);
                                        break;
                                    case "sqrtSize3":
                                        n = function(t, e) {
                                            return "M424," + (2398 + t + e) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + t / 4.223 + " -" + t + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + t) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + t) + " " + e + "\nh400000v" + (40 + t) + "h-400000z"
                                        }(e, 80);
                                        break;
                                    case "sqrtSize4":
                                        n = function(t, e) {
                                            return "M473," + (2713 + t + e) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + t / 5.298 + " -" + t + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + t) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z"
                                        }(e, 80);
                                        break;
                                    case "sqrtTall":
                                        n = function(t, e, r) {
                                            return "M702 " + (t + e) + "H400000" + (40 + t) + "\nH742v" + (r - 54 - e - t) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + e + "H400000v" + (40 + t) + "H742z"
                                        }(e, 80, r)
                                }
                                return n
                            }(t, n, r)
                                , o = new P(t,i)
                                , s = new L([o],{
                                width: "400em",
                                height: e + "em",
                                viewBox: "0 0 400000 " + r,
                                preserveAspectRatio: "xMinYMin slice"
                            });
                            return Dt.makeSvgSpan(["hide-tail"], [s], a)
                        }
                            , je = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]
                            , $e = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]
                            , Ze = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]
                            , Ke = [0, 1.2, 1.8, 2.4, 3]
                            , Je = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }]
                            , Qe = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "stack"
                        }]
                            , tr = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }, {
                            type: "stack"
                        }]
                            , er = function(t) {
                            if ("small" === t.type)
                                return "Main-Regular";
                            if ("large" === t.type)
                                return "Size" + t.size + "-Regular";
                            if ("stack" === t.type)
                                return "Size4-Regular";
                            throw new Error("Add support for delim type '" + t.type + "' here.")
                        }
                            , rr = function(t, e, r, n) {
                            for (var a = Math.min(2, 3 - n.style.size); a < r.length && "stack" !== r[a].type; a++) {
                                var i = Fe(t, er(r[a]), "math")
                                    , o = i.height + i.depth;
                                if ("small" === r[a].type && (o *= n.havingBaseStyle(r[a].style).sizeMultiplier),
                                    o > e)
                                    return r[a]
                            }
                            return r[r.length - 1]
                        }
                            , nr = function(t, e, r, n, a, i) {
                            var o;
                            "<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"),
                                o = c.contains(Ze, t) ? Je : c.contains(je, t) ? tr : Qe;
                            var s = rr(t, e, o, n);
                            return "small" === s.type ? function(t, e, r, n, a, i) {
                                var o = Dt.makeSymbol(t, "Main-Regular", a, n)
                                    , s = Ve(o, e, n, i);
                                return r && Ue(s, n, e),
                                    s
                            }(t, s.style, r, n, a, i) : "large" === s.type ? Ge(t, s.size, r, n, a, i) : We(t, e, r, n, a, i)
                        }
                            , ar = function(t, e) {
                            var r, n, a = e.havingBaseSizing(), i = rr("\\surd", t * a.sizeMultiplier, tr, a), o = a.sizeMultiplier, s = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness), l = 0, h = 0, m = 0;
                            return "small" === i.type ? (t < 1 ? o = 1 : t < 1.4 && (o = .7),
                                h = (1 + s) / o,
                                (r = Xe("sqrtMain", l = (1 + s + .08) / o, m = 1e3 + 1e3 * s + 80, s, e)).style.minWidth = "0.853em",
                                n = .833 / o) : "large" === i.type ? (m = 1080 * Ke[i.size],
                                h = (Ke[i.size] + s) / o,
                                l = (Ke[i.size] + s + .08) / o,
                                (r = Xe("sqrtSize" + i.size, l, m, s, e)).style.minWidth = "1.02em",
                                n = 1 / o) : (l = t + s + .08,
                                h = t + s,
                                m = Math.floor(1e3 * t + s) + 80,
                                (r = Xe("sqrtTall", l, m, s, e)).style.minWidth = "0.742em",
                                n = 1.056),
                                r.height = h,
                                r.style.height = l + "em",
                                {
                                    span: r,
                                    advanceWidth: n,
                                    ruleWidth: (e.fontMetrics().sqrtRuleThickness + s) * o
                                }
                        }
                            , ir = function(t, e, r, n, a) {
                            if ("<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"),
                                c.contains(je, t) || c.contains(Ze, t))
                                return Ge(t, e, !1, r, n, a);
                            if (c.contains($e, t))
                                return We(t, Ke[e], !1, r, n, a);
                            throw new o("Illegal delimiter: '" + t + "'")
                        }
                            , or = nr
                            , sr = function(t, e, r, n, a, i) {
                            var o = n.fontMetrics().axisHeight * n.sizeMultiplier
                                , s = 5 / n.fontMetrics().ptPerEm
                                , l = Math.max(e - o, r + o)
                                , h = Math.max(l / 500 * 901, 2 * l - s);
                            return nr(t, h, !0, n, a, i)
                        }
                            , lr = {
                            "\\bigl": {
                                mclass: "mopen",
                                size: 1
                            },
                            "\\Bigl": {
                                mclass: "mopen",
                                size: 2
                            },
                            "\\biggl": {
                                mclass: "mopen",
                                size: 3
                            },
                            "\\Biggl": {
                                mclass: "mopen",
                                size: 4
                            },
                            "\\bigr": {
                                mclass: "mclose",
                                size: 1
                            },
                            "\\Bigr": {
                                mclass: "mclose",
                                size: 2
                            },
                            "\\biggr": {
                                mclass: "mclose",
                                size: 3
                            },
                            "\\Biggr": {
                                mclass: "mclose",
                                size: 4
                            },
                            "\\bigm": {
                                mclass: "mrel",
                                size: 1
                            },
                            "\\Bigm": {
                                mclass: "mrel",
                                size: 2
                            },
                            "\\biggm": {
                                mclass: "mrel",
                                size: 3
                            },
                            "\\Biggm": {
                                mclass: "mrel",
                                size: 4
                            },
                            "\\big": {
                                mclass: "mord",
                                size: 1
                            },
                            "\\Big": {
                                mclass: "mord",
                                size: 2
                            },
                            "\\bigg": {
                                mclass: "mord",
                                size: 3
                            },
                            "\\Bigg": {
                                mclass: "mord",
                                size: 4
                            }
                        }
                            , hr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
                        function mr(t, e) {
                            var r = qe(t);
                            if (r && c.contains(hr, r.text))
                                return r;
                            throw new o(r ? "Invalid delimiter '" + r.text + "' after '" + e.funcName + "'" : "Invalid delimiter type '" + t.type + "'",t)
                        }
                        function cr(t) {
                            if (!t.body)
                                throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
                        }
                        Xt({
                            type: "delimsizing",
                            names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = mr(e[0], t);
                                return {
                                    type: "delimsizing",
                                    mode: t.parser.mode,
                                    size: lr[t.funcName].size,
                                    mclass: lr[t.funcName].mclass,
                                    delim: r.text
                                }
                            },
                            htmlBuilder: function(t, e) {
                                return "." === t.delim ? Dt.makeSpan([t.mclass]) : ir(t.delim, t.size, e, t.mode, [t.mclass])
                            },
                            mathmlBuilder: function(t) {
                                var e = [];
                                "." !== t.delim && e.push(pe(t.delim, t.mode));
                                var r = new ue.MathNode("mo",e);
                                return "mopen" === t.mclass || "mclose" === t.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"),
                                    r
                            }
                        }),
                            Xt({
                                type: "leftright-right",
                                names: ["\\right"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = t.parser.gullet.macros.get("\\current@color");
                                    if (r && "string" != typeof r)
                                        throw new o("\\current@color set to non-string in \\right");
                                    return {
                                        type: "leftright-right",
                                        mode: t.parser.mode,
                                        delim: mr(e[0], t).text,
                                        color: r
                                    }
                                }
                            }),
                            Xt({
                                type: "leftright",
                                names: ["\\left"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = mr(e[0], t)
                                        , n = t.parser;
                                    ++n.leftrightDepth;
                                    var a = n.parseExpression(!1);
                                    --n.leftrightDepth,
                                        n.expect("\\right", !1);
                                    var i = Be(n.parseFunction(), "leftright-right");
                                    return {
                                        type: "leftright",
                                        mode: n.mode,
                                        body: a,
                                        left: r.text,
                                        right: i.delim,
                                        rightColor: i.color
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    cr(t);
                                    for (var r, n, a = ee(t.body, e, !0, ["mopen", "mclose"]), i = 0, o = 0, s = !1, l = 0; l < a.length; l++)
                                        a[l].isMiddle ? s = !0 : (i = Math.max(a[l].height, i),
                                            o = Math.max(a[l].depth, o));
                                    if (i *= e.sizeMultiplier,
                                            o *= e.sizeMultiplier,
                                            r = "." === t.left ? ie(e, ["mopen"]) : sr(t.left, i, o, e, t.mode, ["mopen"]),
                                            a.unshift(r),
                                            s)
                                        for (var h = 1; h < a.length; h++) {
                                            var m = a[h].isMiddle;
                                            m && (a[h] = sr(m.delim, i, o, m.options, t.mode, []))
                                        }
                                    if ("." === t.right)
                                        n = ie(e, ["mclose"]);
                                    else {
                                        var c = t.rightColor ? e.withColor(t.rightColor) : e;
                                        n = sr(t.right, i, o, c, t.mode, ["mclose"])
                                    }
                                    return a.push(n),
                                        Dt.makeSpan(["minner"], a, e)
                                },
                                mathmlBuilder: function(t, e) {
                                    cr(t);
                                    var r = ge(t.body, e);
                                    if ("." !== t.left) {
                                        var n = new ue.MathNode("mo",[pe(t.left, t.mode)]);
                                        n.setAttribute("fence", "true"),
                                            r.unshift(n)
                                    }
                                    if ("." !== t.right) {
                                        var a = new ue.MathNode("mo",[pe(t.right, t.mode)]);
                                        a.setAttribute("fence", "true"),
                                        t.rightColor && a.setAttribute("mathcolor", t.rightColor),
                                            r.push(a)
                                    }
                                    return de(r)
                                }
                            }),
                            Xt({
                                type: "middle",
                                names: ["\\middle"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = mr(e[0], t);
                                    if (!t.parser.leftrightDepth)
                                        throw new o("\\middle without preceding \\left",r);
                                    return {
                                        type: "middle",
                                        mode: t.parser.mode,
                                        delim: r.text
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r;
                                    if ("." === t.delim)
                                        r = ie(e, []);
                                    else {
                                        r = ir(t.delim, 1, e, t.mode, []);
                                        var n = {
                                            delim: t.delim,
                                            options: e
                                        };
                                        r.isMiddle = n
                                    }
                                    return r
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = "\\vert" === t.delim || "|" === t.delim ? pe("|", "text") : pe(t.delim, t.mode)
                                        , n = new ue.MathNode("mo",[r]);
                                    return n.setAttribute("fence", "true"),
                                        n.setAttribute("lspace", "0.05em"),
                                        n.setAttribute("rspace", "0.05em"),
                                        n
                                }
                            });
                        var ur = function(t, e) {
                            var r, n, a = Dt.wrapFragment(oe(t.body, e), e), i = t.label.substr(1), o = e.sizeMultiplier, s = 0, l = c.isCharacterBox(t.body);
                            if ("sout" === i)
                                (r = Dt.makeSpan(["stretchy", "sout"])).height = e.fontMetrics().defaultRuleThickness / o,
                                    s = -.5 * e.fontMetrics().xHeight;
                            else {
                                /cancel/.test(i) ? l || a.classes.push("cancel-pad") : a.classes.push("boxpad");
                                var h = 0
                                    , m = 0;
                                /box/.test(i) ? (m = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness),
                                    h = e.fontMetrics().fboxsep + ("colorbox" === i ? 0 : m)) : h = l ? .2 : 0,
                                    r = ze(a, i, h, e),
                                /fbox|boxed|fcolorbox/.test(i) && (r.style.borderStyle = "solid",
                                    r.style.borderWidth = m + "em"),
                                    s = a.depth + h,
                                t.backgroundColor && (r.style.backgroundColor = t.backgroundColor,
                                t.borderColor && (r.style.borderColor = t.borderColor))
                            }
                            return n = t.backgroundColor ? Dt.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    shift: s
                                }, {
                                    type: "elem",
                                    elem: a,
                                    shift: 0
                                }]
                            }, e) : Dt.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: a,
                                    shift: 0
                                }, {
                                    type: "elem",
                                    elem: r,
                                    shift: s,
                                    wrapperClasses: /cancel/.test(i) ? ["svg-align"] : []
                                }]
                            }, e),
                            /cancel/.test(i) && (n.height = a.height,
                                n.depth = a.depth),
                                /cancel/.test(i) && !l ? Dt.makeSpan(["mord", "cancel-lap"], [n], e) : Dt.makeSpan(["mord"], [n], e)
                        }
                            , pr = function(t, e) {
                            var r = 0
                                , n = new ue.MathNode(t.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose",[ve(t.body, e)]);
                            switch (t.label) {
                                case "\\cancel":
                                    n.setAttribute("notation", "updiagonalstrike");
                                    break;
                                case "\\bcancel":
                                    n.setAttribute("notation", "downdiagonalstrike");
                                    break;
                                case "\\sout":
                                    n.setAttribute("notation", "horizontalstrike");
                                    break;
                                case "\\fbox":
                                    n.setAttribute("notation", "box");
                                    break;
                                case "\\fcolorbox":
                                case "\\colorbox":
                                    if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm,
                                            n.setAttribute("width", "+" + 2 * r + "pt"),
                                            n.setAttribute("height", "+" + 2 * r + "pt"),
                                            n.setAttribute("lspace", r + "pt"),
                                            n.setAttribute("voffset", r + "pt"),
                                        "\\fcolorbox" === t.label) {
                                        var a = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
                                        n.setAttribute("style", "border: " + a + "em solid " + String(t.borderColor))
                                    }
                                    break;
                                case "\\xcancel":
                                    n.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
                            }
                            return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor),
                                n
                        };
                        Xt({
                            type: "enclose",
                            names: ["\\colorbox"],
                            props: {
                                numArgs: 2,
                                allowedInText: !0,
                                greediness: 3,
                                argTypes: ["color", "text"]
                            },
                            handler: function(t, e, r) {
                                var n = t.parser
                                    , a = t.funcName
                                    , i = Be(e[0], "color-token").color
                                    , o = e[1];
                                return {
                                    type: "enclose",
                                    mode: n.mode,
                                    label: a,
                                    backgroundColor: i,
                                    body: o
                                }
                            },
                            htmlBuilder: ur,
                            mathmlBuilder: pr
                        }),
                            Xt({
                                type: "enclose",
                                names: ["\\fcolorbox"],
                                props: {
                                    numArgs: 3,
                                    allowedInText: !0,
                                    greediness: 3,
                                    argTypes: ["color", "color", "text"]
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = t.funcName
                                        , i = Be(e[0], "color-token").color
                                        , o = Be(e[1], "color-token").color
                                        , s = e[2];
                                    return {
                                        type: "enclose",
                                        mode: n.mode,
                                        label: a,
                                        backgroundColor: o,
                                        borderColor: i,
                                        body: s
                                    }
                                },
                                htmlBuilder: ur,
                                mathmlBuilder: pr
                            }),
                            Xt({
                                type: "enclose",
                                names: ["\\fbox"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["hbox"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    return {
                                        type: "enclose",
                                        mode: t.parser.mode,
                                        label: "\\fbox",
                                        body: e[0]
                                    }
                                }
                            }),
                            Xt({
                                type: "enclose",
                                names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = t.funcName
                                        , i = e[0];
                                    return {
                                        type: "enclose",
                                        mode: n.mode,
                                        label: a,
                                        body: i
                                    }
                                },
                                htmlBuilder: ur,
                                mathmlBuilder: pr
                            });
                        var dr = {};
                        function fr(t) {
                            for (var e = t.type, r = t.names, n = t.props, a = t.handler, i = t.htmlBuilder, o = t.mathmlBuilder, s = {
                                type: e,
                                numArgs: n.numArgs || 0,
                                greediness: 1,
                                allowedInText: !1,
                                numOptionalArgs: 0,
                                handler: a
                            }, l = 0; l < r.length; ++l)
                                dr[r[l]] = s;
                            i && (_t[e] = i),
                            o && (Wt[e] = o)
                        }
                        function gr(t) {
                            var e = [];
                            t.consumeSpaces();
                            for (var r = t.fetch().text; "\\hline" === r || "\\hdashline" === r; )
                                t.consume(),
                                    e.push("\\hdashline" === r),
                                    t.consumeSpaces(),
                                    r = t.fetch().text;
                            return e
                        }
                        function xr(t, e, r) {
                            var n = e.hskipBeforeAndAfter
                                , a = e.addJot
                                , i = e.cols
                                , s = e.arraystretch
                                , l = e.colSeparationType;
                            if (t.gullet.beginGroup(),
                                    t.gullet.macros.set("\\\\", "\\cr"),
                                    !s) {
                                var h = t.gullet.expandMacroAsText("\\arraystretch");
                                if (null == h)
                                    s = 1;
                                else if (!(s = parseFloat(h)) || s < 0)
                                    throw new o("Invalid \\arraystretch: " + h)
                            }
                            t.gullet.beginGroup();
                            var m = []
                                , c = [m]
                                , u = []
                                , p = [];
                            for (p.push(gr(t)); ; ) {
                                var d = t.parseExpression(!1, "\\cr");
                                t.gullet.endGroup(),
                                    t.gullet.beginGroup(),
                                    d = {
                                        type: "ordgroup",
                                        mode: t.mode,
                                        body: d
                                    },
                                r && (d = {
                                    type: "styling",
                                    mode: t.mode,
                                    style: r,
                                    body: [d]
                                }),
                                    m.push(d);
                                var f = t.fetch().text;
                                if ("&" === f)
                                    t.consume();
                                else {
                                    if ("\\end" === f) {
                                        1 === m.length && "styling" === d.type && 0 === d.body[0].body.length && c.pop(),
                                        p.length < c.length + 1 && p.push([]);
                                        break
                                    }
                                    if ("\\cr" !== f)
                                        throw new o("Expected & or \\\\ or \\cr or \\end",t.nextToken);
                                    var g = Be(t.parseFunction(), "cr");
                                    u.push(g.size),
                                        p.push(gr(t)),
                                        m = [],
                                        c.push(m)
                                }
                            }
                            return t.gullet.endGroup(),
                                t.gullet.endGroup(),
                                {
                                    type: "array",
                                    mode: t.mode,
                                    addJot: a,
                                    arraystretch: s,
                                    body: c,
                                    cols: i,
                                    rowGaps: u,
                                    hskipBeforeAndAfter: n,
                                    hLinesBeforeRow: p,
                                    colSeparationType: l
                                }
                        }
                        function vr(t) {
                            return "d" === t.substr(0, 1) ? "display" : "text"
                        }
                        var br = function(t, e) {
                            var r, n, a = t.body.length, i = t.hLinesBeforeRow, s = 0, l = new Array(a), h = [], m = Math.max(e.fontMetrics().arrayRuleWidth, e.minRuleThickness), u = 1 / e.fontMetrics().ptPerEm, p = 5 * u;
                            t.colSeparationType && "small" === t.colSeparationType && (p = e.havingStyle(w.SCRIPT).sizeMultiplier / e.sizeMultiplier * .2778);
                            var d = 12 * u
                                , f = 3 * u
                                , g = t.arraystretch * d
                                , x = .7 * g
                                , v = .3 * g
                                , b = 0;
                            function y(t) {
                                for (var e = 0; e < t.length; ++e)
                                    e > 0 && (b += .25),
                                        h.push({
                                            pos: b,
                                            isDashed: t[e]
                                        })
                            }
                            for (y(i[0]),
                                     r = 0; r < t.body.length; ++r) {
                                var k = t.body[r]
                                    , S = x
                                    , M = v;
                                s < k.length && (s = k.length);
                                var z = new Array(k.length);
                                for (n = 0; n < k.length; ++n) {
                                    var A = oe(k[n], e);
                                    M < A.depth && (M = A.depth),
                                    S < A.height && (S = A.height),
                                        z[n] = A
                                }
                                var T = t.rowGaps[r]
                                    , B = 0;
                                T && (B = Tt(T, e)) > 0 && (M < (B += v) && (M = B),
                                    B = 0),
                                t.addJot && (M += f),
                                    z.height = S,
                                    z.depth = M,
                                    b += S,
                                    z.pos = b,
                                    b += M + B,
                                    l[r] = z,
                                    y(i[r + 1])
                            }
                            var C, q, N = b / 2 + e.fontMetrics().axisHeight, I = t.cols || [], O = [];
                            for (n = 0,
                                     q = 0; n < s || q < I.length; ++n,
                                     ++q) {
                                for (var R = I[q] || {}, E = !0; "separator" === R.type; ) {
                                    if (E || ((C = Dt.makeSpan(["arraycolsep"], [])).style.width = e.fontMetrics().doubleRuleSep + "em",
                                            O.push(C)),
                                        "|" !== R.separator && ":" !== R.separator)
                                        throw new o("Invalid separator type: " + R.separator);
                                    var L = "|" === R.separator ? "solid" : "dashed"
                                        , P = Dt.makeSpan(["vertical-separator"], [], e);
                                    P.style.height = b + "em",
                                        P.style.borderRightWidth = m + "em",
                                        P.style.borderRightStyle = L,
                                        P.style.margin = "0 -" + m / 2 + "em",
                                        P.style.verticalAlign = -(b - N) + "em",
                                        O.push(P),
                                        R = I[++q] || {},
                                        E = !1
                                }
                                if (!(n >= s)) {
                                    var D = void 0;
                                    (n > 0 || t.hskipBeforeAndAfter) && 0 !== (D = c.deflt(R.pregap, p)) && ((C = Dt.makeSpan(["arraycolsep"], [])).style.width = D + "em",
                                        O.push(C));
                                    var H = [];
                                    for (r = 0; r < a; ++r) {
                                        var F = l[r]
                                            , V = F[n];
                                        if (V) {
                                            var U = F.pos - N;
                                            V.depth = F.depth,
                                                V.height = F.height,
                                                H.push({
                                                    type: "elem",
                                                    elem: V,
                                                    shift: U
                                                })
                                        }
                                    }
                                    H = Dt.makeVList({
                                        positionType: "individualShift",
                                        children: H
                                    }, e),
                                        H = Dt.makeSpan(["col-align-" + (R.align || "c")], [H]),
                                        O.push(H),
                                    (n < s - 1 || t.hskipBeforeAndAfter) && 0 !== (D = c.deflt(R.postgap, p)) && ((C = Dt.makeSpan(["arraycolsep"], [])).style.width = D + "em",
                                        O.push(C))
                                }
                            }
                            if (l = Dt.makeSpan(["mtable"], O),
                                h.length > 0) {
                                for (var G = Dt.makeLineSpan("hline", e, m), Y = Dt.makeLineSpan("hdashline", e, m), _ = [{
                                    type: "elem",
                                    elem: l,
                                    shift: 0
                                }]; h.length > 0; ) {
                                    var W = h.pop()
                                        , X = W.pos - N;
                                    W.isDashed ? _.push({
                                        type: "elem",
                                        elem: Y,
                                        shift: X
                                    }) : _.push({
                                        type: "elem",
                                        elem: G,
                                        shift: X
                                    })
                                }
                                l = Dt.makeVList({
                                    positionType: "individualShift",
                                    children: _
                                }, e)
                            }
                            return Dt.makeSpan(["mord"], [l], e)
                        }
                            , yr = {
                            c: "center ",
                            l: "left ",
                            r: "right "
                        }
                            , wr = function(t, e) {
                            var r = new ue.MathNode("mtable",t.body.map((function(t) {
                                    return new ue.MathNode("mtr",t.map((function(t) {
                                            return new ue.MathNode("mtd",[ve(t, e)])
                                        }
                                    )))
                                }
                            )))
                                , n = .5 === t.arraystretch ? .1 : .16 + t.arraystretch - 1 + (t.addJot ? .09 : 0);
                            r.setAttribute("rowspacing", n + "em");
                            var a = ""
                                , i = "";
                            if (t.cols && t.cols.length > 0) {
                                var o = t.cols
                                    , s = ""
                                    , l = !1
                                    , h = 0
                                    , m = o.length;
                                "separator" === o[0].type && (a += "top ",
                                    h = 1),
                                "separator" === o[o.length - 1].type && (a += "bottom ",
                                    m -= 1);
                                for (var c = h; c < m; c++)
                                    "align" === o[c].type ? (i += yr[o[c].align],
                                    l && (s += "none "),
                                        l = !0) : "separator" === o[c].type && l && (s += "|" === o[c].separator ? "solid " : "dashed ",
                                        l = !1);
                                r.setAttribute("columnalign", i.trim()),
                                /[sd]/.test(s) && r.setAttribute("columnlines", s.trim())
                            }
                            if ("align" === t.colSeparationType) {
                                for (var u = t.cols || [], p = "", d = 1; d < u.length; d++)
                                    p += d % 2 ? "0em " : "1em ";
                                r.setAttribute("columnspacing", p.trim())
                            } else
                                "alignat" === t.colSeparationType ? r.setAttribute("columnspacing", "0em") : "small" === t.colSeparationType ? r.setAttribute("columnspacing", "0.2778em") : r.setAttribute("columnspacing", "1em");
                            var f = ""
                                , g = t.hLinesBeforeRow;
                            a += g[0].length > 0 ? "left " : "",
                                a += g[g.length - 1].length > 0 ? "right " : "";
                            for (var x = 1; x < g.length - 1; x++)
                                f += 0 === g[x].length ? "none " : g[x][0] ? "dashed " : "solid ";
                            return /[sd]/.test(f) && r.setAttribute("rowlines", f.trim()),
                            "" !== a && (r = new ue.MathNode("menclose",[r])).setAttribute("notation", a.trim()),
                            t.arraystretch && t.arraystretch < 1 && (r = new ue.MathNode("mstyle",[r])).setAttribute("scriptlevel", "1"),
                                r
                        }
                            , kr = function(t, e) {
                            var r, n = [], a = xr(t.parser, {
                                cols: n,
                                addJot: !0
                            }, "display"), i = 0, s = {
                                type: "ordgroup",
                                mode: t.mode,
                                body: []
                            };
                            if (e[0] && "ordgroup" === e[0].type) {
                                for (var l = "", h = 0; h < e[0].body.length; h++)
                                    l += Be(e[0].body[h], "textord").text;
                                r = Number(l),
                                    i = 2 * r
                            }
                            var m = !i;
                            a.body.forEach((function(t) {
                                    for (var e = 1; e < t.length; e += 2) {
                                        var n = Be(t[e], "styling");
                                        Be(n.body[0], "ordgroup").body.unshift(s)
                                    }
                                    if (m)
                                        i < t.length && (i = t.length);
                                    else {
                                        var a = t.length / 2;
                                        if (r < a)
                                            throw new o("Too many math in a row: expected " + r + ", but got " + a,t[0])
                                    }
                                }
                            ));
                            for (var c = 0; c < i; ++c) {
                                var u = "r"
                                    , p = 0;
                                c % 2 == 1 ? u = "l" : c > 0 && m && (p = 1),
                                    n[c] = {
                                        type: "align",
                                        align: u,
                                        pregap: p,
                                        postgap: 0
                                    }
                            }
                            return a.colSeparationType = m ? "align" : "alignat",
                                a
                        };
                        fr({
                            type: "array",
                            names: ["array", "darray"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = {
                                    cols: (qe(e[0]) ? [e[0]] : Be(e[0], "ordgroup").body).map((function(t) {
                                            var e = Ce(t).text;
                                            if (-1 !== "lcr".indexOf(e))
                                                return {
                                                    type: "align",
                                                    align: e
                                                };
                                            if ("|" === e)
                                                return {
                                                    type: "separator",
                                                    separator: "|"
                                                };
                                            if (":" === e)
                                                return {
                                                    type: "separator",
                                                    separator: ":"
                                                };
                                            throw new o("Unknown column alignment: " + e,t)
                                        }
                                    )),
                                    hskipBeforeAndAfter: !0
                                };
                                return xr(t.parser, r, vr(t.envName))
                            },
                            htmlBuilder: br,
                            mathmlBuilder: wr
                        }),
                            fr({
                                type: "array",
                                names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    var e = {
                                        matrix: null,
                                        pmatrix: ["(", ")"],
                                        bmatrix: ["[", "]"],
                                        Bmatrix: ["\\{", "\\}"],
                                        vmatrix: ["|", "|"],
                                        Vmatrix: ["\\Vert", "\\Vert"]
                                    }[t.envName]
                                        , r = xr(t.parser, {
                                        hskipBeforeAndAfter: !1
                                    }, vr(t.envName));
                                    return e ? {
                                        type: "leftright",
                                        mode: t.mode,
                                        body: [r],
                                        left: e[0],
                                        right: e[1],
                                        rightColor: void 0
                                    } : r
                                },
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["smallmatrix"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    var e = xr(t.parser, {
                                        arraystretch: .5
                                    }, "script");
                                    return e.colSeparationType = "small",
                                        e
                                },
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["subarray"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = (qe(e[0]) ? [e[0]] : Be(e[0], "ordgroup").body).map((function(t) {
                                            var e = Ce(t).text;
                                            if (-1 !== "lc".indexOf(e))
                                                return {
                                                    type: "align",
                                                    align: e
                                                };
                                            throw new o("Unknown column alignment: " + e,t)
                                        }
                                    ));
                                    if (r.length > 1)
                                        throw new o("{subarray} can contain only one column");
                                    var n = {
                                        cols: r,
                                        hskipBeforeAndAfter: !1,
                                        arraystretch: .5
                                    };
                                    if ((n = xr(t.parser, n, "script")).body.length > 0 && n.body[0].length > 1)
                                        throw new o("{subarray} can contain only one column");
                                    return n
                                },
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["cases", "dcases", "rcases", "drcases"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    var e = xr(t.parser, {
                                        arraystretch: 1.2,
                                        cols: [{
                                            type: "align",
                                            align: "l",
                                            pregap: 0,
                                            postgap: 1
                                        }, {
                                            type: "align",
                                            align: "l",
                                            pregap: 0,
                                            postgap: 0
                                        }]
                                    }, vr(t.envName));
                                    return {
                                        type: "leftright",
                                        mode: t.mode,
                                        body: [e],
                                        left: t.envName.indexOf("r") > -1 ? "." : "\\{",
                                        right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
                                        rightColor: void 0
                                    }
                                },
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["aligned"],
                                props: {
                                    numArgs: 0
                                },
                                handler: kr,
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["gathered"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    return xr(t.parser, {
                                        cols: [{
                                            type: "align",
                                            align: "c"
                                        }],
                                        addJot: !0
                                    }, "display")
                                },
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            fr({
                                type: "array",
                                names: ["alignedat"],
                                props: {
                                    numArgs: 1
                                },
                                handler: kr,
                                htmlBuilder: br,
                                mathmlBuilder: wr
                            }),
                            Xt({
                                type: "text",
                                names: ["\\hline", "\\hdashline"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !0
                                },
                                handler: function(t, e) {
                                    throw new o(t.funcName + " valid only within array environment")
                                }
                            });
                        var Sr = dr;
                        Xt({
                            type: "environment",
                            names: ["\\begin", "\\end"],
                            props: {
                                numArgs: 1,
                                argTypes: ["text"]
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , a = e[0];
                                if ("ordgroup" !== a.type)
                                    throw new o("Invalid environment name",a);
                                for (var i = "", s = 0; s < a.body.length; ++s)
                                    i += Be(a.body[s], "textord").text;
                                if ("\\begin" === n) {
                                    if (!Sr.hasOwnProperty(i))
                                        throw new o("No such environment: " + i,a);
                                    var l = Sr[i]
                                        , h = r.parseArguments("\\begin{" + i + "}", l)
                                        , m = h.args
                                        , c = h.optArgs
                                        , u = {
                                        mode: r.mode,
                                        envName: i,
                                        parser: r
                                    }
                                        , p = l.handler(u, m, c);
                                    r.expect("\\end", !1);
                                    var d = r.nextToken
                                        , f = Be(r.parseFunction(), "environment");
                                    if (f.name !== i)
                                        throw new o("Mismatch: \\begin{" + i + "} matched by \\end{" + f.name + "}",d);
                                    return p
                                }
                                return {
                                    type: "environment",
                                    mode: r.mode,
                                    name: i,
                                    nameGroup: a
                                }
                            }
                        });
                        var Mr = Dt.makeSpan;
                        function zr(t, e) {
                            var r = ee(t.body, e, !0);
                            return Mr([t.mclass], r, e)
                        }
                        function Ar(t, e) {
                            var r, n = ge(t.body, e);
                            return "minner" === t.mclass ? ue.newDocumentFragment(n) : ("mord" === t.mclass ? t.isCharacterBox ? (r = n[0]).type = "mi" : r = new ue.MathNode("mi",n) : (t.isCharacterBox ? (r = n[0]).type = "mo" : r = new ue.MathNode("mo",n),
                                "mbin" === t.mclass ? (r.attributes.lspace = "0.22em",
                                    r.attributes.rspace = "0.22em") : "mpunct" === t.mclass ? (r.attributes.lspace = "0em",
                                    r.attributes.rspace = "0.17em") : "mopen" !== t.mclass && "mclose" !== t.mclass || (r.attributes.lspace = "0em",
                                    r.attributes.rspace = "0em")),
                                r)
                        }
                        Xt({
                            type: "mclass",
                            names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , a = e[0];
                                return {
                                    type: "mclass",
                                    mode: r.mode,
                                    mclass: "m" + n.substr(5),
                                    body: $t(a),
                                    isCharacterBox: c.isCharacterBox(a)
                                }
                            },
                            htmlBuilder: zr,
                            mathmlBuilder: Ar
                        });
                        var Tr = function(t) {
                            var e = "ordgroup" === t.type && t.body.length ? t.body[0] : t;
                            return "atom" !== e.type || "bin" !== e.family && "rel" !== e.family ? "mord" : "m" + e.family
                        };
                        Xt({
                            type: "mclass",
                            names: ["\\@binrel"],
                            props: {
                                numArgs: 2
                            },
                            handler: function(t, e) {
                                return {
                                    type: "mclass",
                                    mode: t.parser.mode,
                                    mclass: Tr(e[0]),
                                    body: [e[1]],
                                    isCharacterBox: c.isCharacterBox(e[1])
                                }
                            }
                        }),
                            Xt({
                                type: "mclass",
                                names: ["\\stackrel", "\\overset", "\\underset"],
                                props: {
                                    numArgs: 2
                                },
                                handler: function(t, e) {
                                    var r, n = t.parser, a = t.funcName, i = e[1], o = e[0];
                                    r = "\\stackrel" !== a ? Tr(i) : "mrel";
                                    var s = {
                                        type: "op",
                                        mode: i.mode,
                                        limits: !0,
                                        alwaysHandleSupSub: !0,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        suppressBaseShift: "\\stackrel" !== a,
                                        body: $t(i)
                                    }
                                        , l = {
                                        type: "supsub",
                                        mode: o.mode,
                                        base: s,
                                        sup: "\\underset" === a ? null : o,
                                        sub: "\\underset" === a ? o : null
                                    };
                                    return {
                                        type: "mclass",
                                        mode: n.mode,
                                        mclass: r,
                                        body: [l],
                                        isCharacterBox: c.isCharacterBox(l)
                                    }
                                },
                                htmlBuilder: zr,
                                mathmlBuilder: Ar
                            });
                        var Br = function(t, e) {
                            var r = t.font
                                , n = e.withFont(r);
                            return oe(t.body, n)
                        }
                            , Cr = function(t, e) {
                            var r = t.font
                                , n = e.withFont(r);
                            return ve(t.body, n)
                        }
                            , qr = {
                            "\\Bbb": "\\mathbb",
                            "\\bold": "\\mathbf",
                            "\\frak": "\\mathfrak",
                            "\\bm": "\\boldsymbol"
                        };
                        Xt({
                            type: "font",
                            names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
                            props: {
                                numArgs: 1,
                                greediness: 2
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , a = e[0]
                                    , i = n;
                                return i in qr && (i = qr[i]),
                                    {
                                        type: "font",
                                        mode: r.mode,
                                        font: i.slice(1),
                                        body: a
                                    }
                            },
                            htmlBuilder: Br,
                            mathmlBuilder: Cr
                        }),
                            Xt({
                                type: "mclass",
                                names: ["\\boldsymbol", "\\bm"],
                                props: {
                                    numArgs: 1,
                                    greediness: 2
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0]
                                        , a = c.isCharacterBox(n);
                                    return {
                                        type: "mclass",
                                        mode: r.mode,
                                        mclass: Tr(n),
                                        body: [{
                                            type: "font",
                                            mode: r.mode,
                                            font: "boldsymbol",
                                            body: n
                                        }],
                                        isCharacterBox: a
                                    }
                                }
                            }),
                            Xt({
                                type: "font",
                                names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , a = t.breakOnTokenText
                                        , i = r.mode
                                        , o = r.parseExpression(!0, a);
                                    return {
                                        type: "font",
                                        mode: i,
                                        font: "math" + n.slice(1),
                                        body: {
                                            type: "ordgroup",
                                            mode: r.mode,
                                            body: o
                                        }
                                    }
                                },
                                htmlBuilder: Br,
                                mathmlBuilder: Cr
                            });
                        var Nr = function(t, e) {
                            var r = e;
                            return "display" === t ? r = r.id >= w.SCRIPT.id ? r.text() : w.DISPLAY : "text" === t && r.size === w.DISPLAY.size ? r = w.TEXT : "script" === t ? r = w.SCRIPT : "scriptscript" === t && (r = w.SCRIPTSCRIPT),
                                r
                        }
                            , Ir = function(t, e) {
                            var r, n = Nr(t.size, e.style), a = n.fracNum(), i = n.fracDen();
                            r = e.havingStyle(a);
                            var o = oe(t.numer, r, e);
                            if (t.continued) {
                                var s = 8.5 / e.fontMetrics().ptPerEm
                                    , l = 3.5 / e.fontMetrics().ptPerEm;
                                o.height = o.height < s ? s : o.height,
                                    o.depth = o.depth < l ? l : o.depth
                            }
                            r = e.havingStyle(i);
                            var h, m, c, u, p, d, f, g, x, v, b = oe(t.denom, r, e);
                            if (t.hasBarLine ? (t.barSize ? (m = Tt(t.barSize, e),
                                    h = Dt.makeLineSpan("frac-line", e, m)) : h = Dt.makeLineSpan("frac-line", e),
                                    m = h.height,
                                    c = h.height) : (h = null,
                                    m = 0,
                                    c = e.fontMetrics().defaultRuleThickness),
                                    n.size === w.DISPLAY.size || "display" === t.size ? (u = e.fontMetrics().num1,
                                        p = m > 0 ? 3 * c : 7 * c,
                                        d = e.fontMetrics().denom1) : (m > 0 ? (u = e.fontMetrics().num2,
                                        p = c) : (u = e.fontMetrics().num3,
                                        p = 3 * c),
                                        d = e.fontMetrics().denom2),
                                    h) {
                                var y = e.fontMetrics().axisHeight;
                                u - o.depth - (y + .5 * m) < p && (u += p - (u - o.depth - (y + .5 * m))),
                                y - .5 * m - (b.height - d) < p && (d += p - (y - .5 * m - (b.height - d)));
                                var k = -(y - .5 * m);
                                f = Dt.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: b,
                                        shift: d
                                    }, {
                                        type: "elem",
                                        elem: h,
                                        shift: k
                                    }, {
                                        type: "elem",
                                        elem: o,
                                        shift: -u
                                    }]
                                }, e)
                            } else {
                                var S = u - o.depth - (b.height - d);
                                S < p && (u += .5 * (p - S),
                                    d += .5 * (p - S)),
                                    f = Dt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: b,
                                            shift: d
                                        }, {
                                            type: "elem",
                                            elem: o,
                                            shift: -u
                                        }]
                                    }, e)
                            }
                            return r = e.havingStyle(n),
                                f.height *= r.sizeMultiplier / e.sizeMultiplier,
                                f.depth *= r.sizeMultiplier / e.sizeMultiplier,
                                g = n.size === w.DISPLAY.size ? e.fontMetrics().delim1 : e.fontMetrics().delim2,
                                x = null == t.leftDelim ? ie(e, ["mopen"]) : or(t.leftDelim, g, !0, e.havingStyle(n), t.mode, ["mopen"]),
                                v = t.continued ? Dt.makeSpan([]) : null == t.rightDelim ? ie(e, ["mclose"]) : or(t.rightDelim, g, !0, e.havingStyle(n), t.mode, ["mclose"]),
                                Dt.makeSpan(["mord"].concat(r.sizingClasses(e)), [x, Dt.makeSpan(["mfrac"], [f]), v], e)
                        }
                            , Or = function(t, e) {
                            var r = new ue.MathNode("mfrac",[ve(t.numer, e), ve(t.denom, e)]);
                            if (t.hasBarLine) {
                                if (t.barSize) {
                                    var n = Tt(t.barSize, e);
                                    r.setAttribute("linethickness", n + "em")
                                }
                            } else
                                r.setAttribute("linethickness", "0px");
                            var a = Nr(t.size, e.style);
                            if (a.size !== e.style.size) {
                                r = new ue.MathNode("mstyle",[r]);
                                var i = a.size === w.DISPLAY.size ? "true" : "false";
                                r.setAttribute("displaystyle", i),
                                    r.setAttribute("scriptlevel", "0")
                            }
                            if (null != t.leftDelim || null != t.rightDelim) {
                                var o = [];
                                if (null != t.leftDelim) {
                                    var s = new ue.MathNode("mo",[new ue.TextNode(t.leftDelim.replace("\\", ""))]);
                                    s.setAttribute("fence", "true"),
                                        o.push(s)
                                }
                                if (o.push(r),
                                    null != t.rightDelim) {
                                    var l = new ue.MathNode("mo",[new ue.TextNode(t.rightDelim.replace("\\", ""))]);
                                    l.setAttribute("fence", "true"),
                                        o.push(l)
                                }
                                return de(o)
                            }
                            return r
                        };
                        Xt({
                            type: "genfrac",
                            names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
                            props: {
                                numArgs: 2,
                                greediness: 2
                            },
                            handler: function(t, e) {
                                var r, n = t.parser, a = t.funcName, i = e[0], o = e[1], s = null, l = null, h = "auto";
                                switch (a) {
                                    case "\\cfrac":
                                    case "\\dfrac":
                                    case "\\frac":
                                    case "\\tfrac":
                                        r = !0;
                                        break;
                                    case "\\\\atopfrac":
                                        r = !1;
                                        break;
                                    case "\\dbinom":
                                    case "\\binom":
                                    case "\\tbinom":
                                        r = !1,
                                            s = "(",
                                            l = ")";
                                        break;
                                    case "\\\\bracefrac":
                                        r = !1,
                                            s = "\\{",
                                            l = "\\}";
                                        break;
                                    case "\\\\brackfrac":
                                        r = !1,
                                            s = "[",
                                            l = "]";
                                        break;
                                    default:
                                        throw new Error("Unrecognized genfrac command")
                                }
                                switch (a) {
                                    case "\\cfrac":
                                    case "\\dfrac":
                                    case "\\dbinom":
                                        h = "display";
                                        break;
                                    case "\\tfrac":
                                    case "\\tbinom":
                                        h = "text"
                                }
                                return {
                                    type: "genfrac",
                                    mode: n.mode,
                                    continued: "\\cfrac" === a,
                                    numer: i,
                                    denom: o,
                                    hasBarLine: r,
                                    leftDelim: s,
                                    rightDelim: l,
                                    size: h,
                                    barSize: null
                                }
                            },
                            htmlBuilder: Ir,
                            mathmlBuilder: Or
                        }),
                            Xt({
                                type: "infix",
                                names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                                props: {
                                    numArgs: 0,
                                    infix: !0
                                },
                                handler: function(t) {
                                    var e, r = t.parser, n = t.funcName, a = t.token;
                                    switch (n) {
                                        case "\\over":
                                            e = "\\frac";
                                            break;
                                        case "\\choose":
                                            e = "\\binom";
                                            break;
                                        case "\\atop":
                                            e = "\\\\atopfrac";
                                            break;
                                        case "\\brace":
                                            e = "\\\\bracefrac";
                                            break;
                                        case "\\brack":
                                            e = "\\\\brackfrac";
                                            break;
                                        default:
                                            throw new Error("Unrecognized infix genfrac command")
                                    }
                                    return {
                                        type: "infix",
                                        mode: r.mode,
                                        replaceWith: e,
                                        token: a
                                    }
                                }
                            });
                        var Rr = ["display", "text", "script", "scriptscript"]
                            , Er = function(t) {
                            var e = null;
                            return t.length > 0 && (e = "." === (e = t) ? null : e),
                                e
                        };
                        Xt({
                            type: "genfrac",
                            names: ["\\genfrac"],
                            props: {
                                numArgs: 6,
                                greediness: 6,
                                argTypes: ["math", "math", "size", "text", "math", "math"]
                            },
                            handler: function(t, e) {
                                var r, n = t.parser, a = e[4], i = e[5], o = "atom" === e[0].type && "open" === e[0].family ? Er(e[0].text) : null, s = "atom" === e[1].type && "close" === e[1].family ? Er(e[1].text) : null, l = Be(e[2], "size"), h = null;
                                r = !!l.isBlank || (h = l.value).number > 0;
                                var m = "auto"
                                    , c = e[3];
                                if ("ordgroup" === c.type) {
                                    if (c.body.length > 0) {
                                        var u = Be(c.body[0], "textord");
                                        m = Rr[Number(u.text)]
                                    }
                                } else
                                    c = Be(c, "textord"),
                                        m = Rr[Number(c.text)];
                                return {
                                    type: "genfrac",
                                    mode: n.mode,
                                    numer: a,
                                    denom: i,
                                    continued: !1,
                                    hasBarLine: r,
                                    barSize: h,
                                    leftDelim: o,
                                    rightDelim: s,
                                    size: m
                                }
                            },
                            htmlBuilder: Ir,
                            mathmlBuilder: Or
                        }),
                            Xt({
                                type: "infix",
                                names: ["\\above"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["size"],
                                    infix: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = (t.funcName,
                                        t.token);
                                    return {
                                        type: "infix",
                                        mode: r.mode,
                                        replaceWith: "\\\\abovefrac",
                                        size: Be(e[0], "size").value,
                                        token: n
                                    }
                                }
                            }),
                            Xt({
                                type: "genfrac",
                                names: ["\\\\abovefrac"],
                                props: {
                                    numArgs: 3,
                                    argTypes: ["math", "size", "math"]
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = (t.funcName,
                                        e[0])
                                        , a = function(t) {
                                        if (!t)
                                            throw new Error("Expected non-null, but got " + String(t));
                                        return t
                                    }(Be(e[1], "infix").size)
                                        , i = e[2]
                                        , o = a.number > 0;
                                    return {
                                        type: "genfrac",
                                        mode: r.mode,
                                        numer: n,
                                        denom: i,
                                        continued: !1,
                                        hasBarLine: o,
                                        barSize: a,
                                        leftDelim: null,
                                        rightDelim: null,
                                        size: "auto"
                                    }
                                },
                                htmlBuilder: Ir,
                                mathmlBuilder: Or
                            });
                        var Lr = function(t, e) {
                            var r, n, a = e.style;
                            "supsub" === t.type ? (r = t.sup ? oe(t.sup, e.havingStyle(a.sup()), e) : oe(t.sub, e.havingStyle(a.sub()), e),
                                n = Be(t.base, "horizBrace")) : n = Be(t, "horizBrace");
                            var i, o = oe(n.base, e.havingBaseStyle(w.DISPLAY)), s = Te(n, e);
                            if (n.isOver ? (i = Dt.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: o
                                    }, {
                                        type: "kern",
                                        size: .1
                                    }, {
                                        type: "elem",
                                        elem: s
                                    }]
                                }, e)).children[0].children[0].children[1].classes.push("svg-align") : (i = Dt.makeVList({
                                    positionType: "bottom",
                                    positionData: o.depth + .1 + s.height,
                                    children: [{
                                        type: "elem",
                                        elem: s
                                    }, {
                                        type: "kern",
                                        size: .1
                                    }, {
                                        type: "elem",
                                        elem: o
                                    }]
                                }, e)).children[0].children[0].children[0].classes.push("svg-align"),
                                    r) {
                                var l = Dt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], e);
                                i = n.isOver ? Dt.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: l
                                    }, {
                                        type: "kern",
                                        size: .2
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, e) : Dt.makeVList({
                                    positionType: "bottom",
                                    positionData: l.depth + .2 + r.height + r.depth,
                                    children: [{
                                        type: "elem",
                                        elem: r
                                    }, {
                                        type: "kern",
                                        size: .2
                                    }, {
                                        type: "elem",
                                        elem: l
                                    }]
                                }, e)
                            }
                            return Dt.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], e)
                        };
                        Xt({
                            type: "horizBrace",
                            names: ["\\overbrace", "\\underbrace"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName;
                                return {
                                    type: "horizBrace",
                                    mode: r.mode,
                                    label: n,
                                    isOver: /^\\over/.test(n),
                                    base: e[0]
                                }
                            },
                            htmlBuilder: Lr,
                            mathmlBuilder: function(t, e) {
                                var r = Ae(t.label);
                                return new ue.MathNode(t.isOver ? "mover" : "munder",[ve(t.base, e), r])
                            }
                        }),
                            Xt({
                                type: "href",
                                names: ["\\href"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["url", "original"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[1]
                                        , a = Be(e[0], "url").url;
                                    return r.settings.isTrusted({
                                        command: "\\href",
                                        url: a
                                    }) ? {
                                        type: "href",
                                        mode: r.mode,
                                        href: a,
                                        body: $t(n)
                                    } : r.formatUnsupportedCmd("\\href")
                                },
                                htmlBuilder: function(t, e) {
                                    var r = ee(t.body, e, !1);
                                    return Dt.makeAnchor(t.href, [], r, e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = xe(t.body, e);
                                    return r instanceof me || (r = new me("mrow",[r])),
                                        r.setAttribute("href", t.href),
                                        r
                                }
                            }),
                            Xt({
                                type: "href",
                                names: ["\\url"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["url"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = Be(e[0], "url").url;
                                    if (!r.settings.isTrusted({
                                            command: "\\url",
                                            url: n
                                        }))
                                        return r.formatUnsupportedCmd("\\url");
                                    for (var a = [], i = 0; i < n.length; i++) {
                                        var o = n[i];
                                        "~" === o && (o = "\\textasciitilde"),
                                            a.push({
                                                type: "textord",
                                                mode: "text",
                                                text: o
                                            })
                                    }
                                    var s = {
                                        type: "text",
                                        mode: r.mode,
                                        font: "\\texttt",
                                        body: a
                                    };
                                    return {
                                        type: "href",
                                        mode: r.mode,
                                        href: n,
                                        body: $t(s)
                                    }
                                }
                            }),
                            Xt({
                                type: "html",
                                names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["raw", "original"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r, n = t.parser, a = t.funcName, i = (t.token,
                                        Be(e[0], "raw").string), s = e[1];
                                    n.settings.strict && n.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                                    var l = {};
                                    switch (a) {
                                        case "\\htmlClass":
                                            l.class = i,
                                                r = {
                                                    command: "\\htmlClass",
                                                    class: i
                                                };
                                            break;
                                        case "\\htmlId":
                                            l.id = i,
                                                r = {
                                                    command: "\\htmlId",
                                                    id: i
                                                };
                                            break;
                                        case "\\htmlStyle":
                                            l.style = i,
                                                r = {
                                                    command: "\\htmlStyle",
                                                    style: i
                                                };
                                            break;
                                        case "\\htmlData":
                                            for (var h = i.split(","), m = 0; m < h.length; m++) {
                                                var c = h[m].split("=");
                                                if (2 !== c.length)
                                                    throw new o("Error parsing key-value for \\htmlData");
                                                l["data-" + c[0].trim()] = c[1].trim()
                                            }
                                            r = {
                                                command: "\\htmlData",
                                                attributes: l
                                            };
                                            break;
                                        default:
                                            throw new Error("Unrecognized html command")
                                    }
                                    return n.settings.isTrusted(r) ? {
                                        type: "html",
                                        mode: n.mode,
                                        attributes: l,
                                        body: $t(s)
                                    } : n.formatUnsupportedCmd(a)
                                },
                                htmlBuilder: function(t, e) {
                                    var r = ee(t.body, e, !1)
                                        , n = ["enclosing"];
                                    t.attributes.class && n.push.apply(n, t.attributes.class.trim().split(/\s+/));
                                    var a = Dt.makeSpan(n, r, e);
                                    for (var i in t.attributes)
                                        "class" !== i && t.attributes.hasOwnProperty(i) && a.setAttribute(i, t.attributes[i]);
                                    return a
                                },
                                mathmlBuilder: function(t, e) {
                                    return xe(t.body, e)
                                }
                            }),
                            Xt({
                                type: "htmlmathml",
                                names: ["\\html@mathml"],
                                props: {
                                    numArgs: 2,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    return {
                                        type: "htmlmathml",
                                        mode: t.parser.mode,
                                        html: $t(e[0]),
                                        mathml: $t(e[1])
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = ee(t.html, e, !1);
                                    return Dt.makeFragment(r)
                                },
                                mathmlBuilder: function(t, e) {
                                    return xe(t.mathml, e)
                                }
                            });
                        var Pr = function(t) {
                            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
                                return {
                                    number: +t,
                                    unit: "bp"
                                };
                            var e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
                            if (!e)
                                throw new o("Invalid size: '" + t + "' in \\includegraphics");
                            var r = {
                                number: +(e[1] + e[2]),
                                unit: e[3]
                            };
                            if (!At(r))
                                throw new o("Invalid unit: '" + r.unit + "' in \\includegraphics.");
                            return r
                        };
                        Xt({
                            type: "includegraphics",
                            names: ["\\includegraphics"],
                            props: {
                                numArgs: 1,
                                numOptionalArgs: 1,
                                argTypes: ["raw", "url"],
                                allowedInText: !1
                            },
                            handler: function(t, e, r) {
                                var n = t.parser
                                    , a = {
                                    number: 0,
                                    unit: "em"
                                }
                                    , i = {
                                    number: .9,
                                    unit: "em"
                                }
                                    , s = {
                                    number: 0,
                                    unit: "em"
                                }
                                    , l = "";
                                if (r[0])
                                    for (var h = Be(r[0], "raw").string.split(","), m = 0; m < h.length; m++) {
                                        var c = h[m].split("=");
                                        if (2 === c.length) {
                                            var u = c[1].trim();
                                            switch (c[0].trim()) {
                                                case "alt":
                                                    l = u;
                                                    break;
                                                case "width":
                                                    a = Pr(u);
                                                    break;
                                                case "height":
                                                    i = Pr(u);
                                                    break;
                                                case "totalheight":
                                                    s = Pr(u);
                                                    break;
                                                default:
                                                    throw new o("Invalid key: '" + c[0] + "' in \\includegraphics.")
                                            }
                                        }
                                    }
                                var p = Be(e[0], "url").url;
                                return "" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))),
                                    n.settings.isTrusted({
                                        command: "\\includegraphics",
                                        url: p
                                    }) ? {
                                        type: "includegraphics",
                                        mode: n.mode,
                                        alt: l,
                                        width: a,
                                        height: i,
                                        totalheight: s,
                                        src: p
                                    } : n.formatUnsupportedCmd("\\includegraphics")
                            },
                            htmlBuilder: function(t, e) {
                                var r = Tt(t.height, e)
                                    , n = 0;
                                t.totalheight.number > 0 && (n = Tt(t.totalheight, e) - r,
                                    n = Number(n.toFixed(2)));
                                var a = 0;
                                t.width.number > 0 && (a = Tt(t.width, e));
                                var i = {
                                    height: r + n + "em"
                                };
                                a > 0 && (i.width = a + "em"),
                                n > 0 && (i.verticalAlign = -n + "em");
                                var o = new O(t.src,t.alt,i);
                                return o.height = r,
                                    o.depth = n,
                                    o
                            },
                            mathmlBuilder: function(t, e) {
                                var r = new ue.MathNode("mglyph",[]);
                                r.setAttribute("alt", t.alt);
                                var n = Tt(t.height, e)
                                    , a = 0;
                                if (t.totalheight.number > 0 && (a = (a = Tt(t.totalheight, e) - n).toFixed(2),
                                        r.setAttribute("valign", "-" + a + "em")),
                                        r.setAttribute("height", n + a + "em"),
                                    t.width.number > 0) {
                                    var i = Tt(t.width, e);
                                    r.setAttribute("width", i + "em")
                                }
                                return r.setAttribute("src", t.src),
                                    r
                            }
                        }),
                            Xt({
                                type: "kern",
                                names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                                props: {
                                    numArgs: 1,
                                    argTypes: ["size"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , a = Be(e[0], "size");
                                    if (r.settings.strict) {
                                        var i = "m" === n[1]
                                            , o = "mu" === a.value.unit;
                                        i ? (o || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + a.value.unit + " units"),
                                        "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : o && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
                                    }
                                    return {
                                        type: "kern",
                                        mode: r.mode,
                                        dimension: a.value
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    return Dt.makeGlue(t.dimension, e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = Tt(t.dimension, e);
                                    return new ue.SpaceNode(r)
                                }
                            }),
                            Xt({
                                type: "lap",
                                names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = t.funcName
                                        , a = e[0];
                                    return {
                                        type: "lap",
                                        mode: r.mode,
                                        alignment: n.slice(5),
                                        body: a
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r;
                                    "clap" === t.alignment ? (r = Dt.makeSpan([], [oe(t.body, e)]),
                                        r = Dt.makeSpan(["inner"], [r], e)) : r = Dt.makeSpan(["inner"], [oe(t.body, e)]);
                                    var n = Dt.makeSpan(["fix"], [])
                                        , a = Dt.makeSpan([t.alignment], [r, n], e)
                                        , i = Dt.makeSpan(["strut"]);
                                    return i.style.height = a.height + a.depth + "em",
                                        i.style.verticalAlign = -a.depth + "em",
                                        a.children.unshift(i),
                                        a = Dt.makeSpan(["thinbox"], [a], e),
                                        Dt.makeSpan(["mord", "vbox"], [a], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mpadded",[ve(t.body, e)]);
                                    if ("rlap" !== t.alignment) {
                                        var n = "llap" === t.alignment ? "-1" : "-0.5";
                                        r.setAttribute("lspace", n + "width")
                                    }
                                    return r.setAttribute("width", "0px"),
                                        r
                                }
                            }),
                            Xt({
                                type: "styling",
                                names: ["\\(", "$"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function(t, e) {
                                    var r = t.funcName
                                        , n = t.parser
                                        , a = n.mode;
                                    n.switchMode("math");
                                    var i = "\\(" === r ? "\\)" : "$"
                                        , o = n.parseExpression(!1, i);
                                    return n.expect(i),
                                        n.switchMode(a),
                                        {
                                            type: "styling",
                                            mode: n.mode,
                                            style: "text",
                                            body: o
                                        }
                                }
                            }),
                            Xt({
                                type: "text",
                                names: ["\\)", "\\]"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0,
                                    allowedInMath: !1
                                },
                                handler: function(t, e) {
                                    throw new o("Mismatched " + t.funcName)
                                }
                            });
                        var Dr = function(t, e) {
                            switch (e.style.size) {
                                case w.DISPLAY.size:
                                    return t.display;
                                case w.TEXT.size:
                                    return t.text;
                                case w.SCRIPT.size:
                                    return t.script;
                                case w.SCRIPTSCRIPT.size:
                                    return t.scriptscript;
                                default:
                                    return t.text
                            }
                        };
                        Xt({
                            type: "mathchoice",
                            names: ["\\mathchoice"],
                            props: {
                                numArgs: 4
                            },
                            handler: function(t, e) {
                                return {
                                    type: "mathchoice",
                                    mode: t.parser.mode,
                                    display: $t(e[0]),
                                    text: $t(e[1]),
                                    script: $t(e[2]),
                                    scriptscript: $t(e[3])
                                }
                            },
                            htmlBuilder: function(t, e) {
                                var r = Dr(t, e)
                                    , n = ee(r, e, !1);
                                return Dt.makeFragment(n)
                            },
                            mathmlBuilder: function(t, e) {
                                var r = Dr(t, e);
                                return xe(r, e)
                            }
                        });
                        var Hr = function(t, e, r, n, a, i, o) {
                            var s, l, h;
                            if (t = Dt.makeSpan([], [t]),
                                    e) {
                                var m = oe(e, n.havingStyle(a.sup()), n);
                                l = {
                                    elem: m,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - m.depth)
                                }
                            }
                            if (r) {
                                var c = oe(r, n.havingStyle(a.sub()), n);
                                s = {
                                    elem: c,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - c.height)
                                }
                            }
                            if (l && s) {
                                var u = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + t.depth + o;
                                h = Dt.makeVList({
                                    positionType: "bottom",
                                    positionData: u,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -i + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: t
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: i + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            } else if (s) {
                                var p = t.height - o;
                                h = Dt.makeVList({
                                    positionType: "top",
                                    positionData: p,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -i + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: t
                                    }]
                                }, n)
                            } else {
                                if (!l)
                                    return t;
                                var d = t.depth + o;
                                h = Dt.makeVList({
                                    positionType: "bottom",
                                    positionData: d,
                                    children: [{
                                        type: "elem",
                                        elem: t
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: i + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            }
                            return Dt.makeSpan(["mop", "op-limits"], [h], n)
                        }
                            , Fr = ["\\smallint"]
                            , Vr = function(t, e) {
                            var r, n, a, i = !1;
                            "supsub" === t.type ? (r = t.sup,
                                n = t.sub,
                                a = Be(t.base, "op"),
                                i = !0) : a = Be(t, "op");
                            var o, s = e.style, l = !1;
                            if (s.size === w.DISPLAY.size && a.symbol && !c.contains(Fr, a.name) && (l = !0),
                                    a.symbol) {
                                var h = l ? "Size2-Regular" : "Size1-Regular"
                                    , m = "";
                                if ("\\oiint" !== a.name && "\\oiiint" !== a.name || (m = a.name.substr(1),
                                        a.name = "oiint" === m ? "\\iint" : "\\iiint"),
                                        o = Dt.makeSymbol(a.name, h, "math", e, ["mop", "op-symbol", l ? "large-op" : "small-op"]),
                                    m.length > 0) {
                                    var u = o.italic
                                        , p = Dt.staticSvg(m + "Size" + (l ? "2" : "1"), e);
                                    o = Dt.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: o,
                                            shift: 0
                                        }, {
                                            type: "elem",
                                            elem: p,
                                            shift: l ? .08 : 0
                                        }]
                                    }, e),
                                        a.name = "\\" + m,
                                        o.classes.unshift("mop"),
                                        o.italic = u
                                }
                            } else if (a.body) {
                                var d = ee(a.body, e, !0);
                                1 === d.length && d[0]instanceof E ? (o = d[0]).classes[0] = "mop" : o = Dt.makeSpan(["mop"], Dt.tryCombineChars(d), e)
                            } else {
                                for (var f = [], g = 1; g < a.name.length; g++)
                                    f.push(Dt.mathsym(a.name[g], a.mode, e));
                                o = Dt.makeSpan(["mop"], f, e)
                            }
                            var x = 0
                                , v = 0;
                            return (o instanceof E || "\\oiint" === a.name || "\\oiiint" === a.name) && !a.suppressBaseShift && (x = (o.height - o.depth) / 2 - e.fontMetrics().axisHeight,
                                v = o.italic),
                                i ? Hr(o, r, n, e, s, v, x) : (x && (o.style.position = "relative",
                                    o.style.top = x + "em"),
                                    o)
                        }
                            , Ur = function(t, e) {
                            var r;
                            if (t.symbol)
                                r = new me("mo",[pe(t.name, t.mode)]),
                                c.contains(Fr, t.name) && r.setAttribute("largeop", "false");
                            else if (t.body)
                                r = new me("mo",ge(t.body, e));
                            else {
                                r = new me("mi",[new ce(t.name.slice(1))]);
                                var n = new me("mo",[pe("⁡", "text")]);
                                r = t.parentIsSupSub ? new me("mo",[r, n]) : he([r, n])
                            }
                            return r
                        }
                            , Gr = {
                            "∏": "\\prod",
                            "∐": "\\coprod",
                            "∑": "\\sum",
                            "⋀": "\\bigwedge",
                            "⋁": "\\bigvee",
                            "⋂": "\\bigcap",
                            "⋃": "\\bigcup",
                            "⨀": "\\bigodot",
                            "⨁": "\\bigoplus",
                            "⨂": "\\bigotimes",
                            "⨄": "\\biguplus",
                            "⨆": "\\bigsqcup"
                        };
                        Xt({
                            type: "op",
                            names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
                            props: {
                                numArgs: 0
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName;
                                return 1 === n.length && (n = Gr[n]),
                                    {
                                        type: "op",
                                        mode: r.mode,
                                        limits: !0,
                                        parentIsSupSub: !1,
                                        symbol: !0,
                                        name: n
                                    }
                            },
                            htmlBuilder: Vr,
                            mathmlBuilder: Ur
                        }),
                            Xt({
                                type: "op",
                                names: ["\\mathop"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "op",
                                        mode: r.mode,
                                        limits: !1,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        body: $t(n)
                                    }
                                },
                                htmlBuilder: Vr,
                                mathmlBuilder: Ur
                            });
                        var Yr = {
                            "∫": "\\int",
                            "∬": "\\iint",
                            "∭": "\\iiint",
                            "∮": "\\oint",
                            "∯": "\\oiint",
                            "∰": "\\oiiint"
                        };
                        Xt({
                            type: "op",
                            names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
                            props: {
                                numArgs: 0
                            },
                            handler: function(t) {
                                var e = t.parser
                                    , r = t.funcName;
                                return {
                                    type: "op",
                                    mode: e.mode,
                                    limits: !1,
                                    parentIsSupSub: !1,
                                    symbol: !1,
                                    name: r
                                }
                            },
                            htmlBuilder: Vr,
                            mathmlBuilder: Ur
                        }),
                            Xt({
                                type: "op",
                                names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    var e = t.parser
                                        , r = t.funcName;
                                    return {
                                        type: "op",
                                        mode: e.mode,
                                        limits: !0,
                                        parentIsSupSub: !1,
                                        symbol: !1,
                                        name: r
                                    }
                                },
                                htmlBuilder: Vr,
                                mathmlBuilder: Ur
                            }),
                            Xt({
                                type: "op",
                                names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
                                props: {
                                    numArgs: 0
                                },
                                handler: function(t) {
                                    var e = t.parser
                                        , r = t.funcName;
                                    return 1 === r.length && (r = Yr[r]),
                                        {
                                            type: "op",
                                            mode: e.mode,
                                            limits: !1,
                                            parentIsSupSub: !1,
                                            symbol: !0,
                                            name: r
                                        }
                                },
                                htmlBuilder: Vr,
                                mathmlBuilder: Ur
                            });
                        var _r = function(t, e) {
                            var r, n, a, i, o = !1;
                            if ("supsub" === t.type ? (r = t.sup,
                                    n = t.sub,
                                    a = Be(t.base, "operatorname"),
                                    o = !0) : a = Be(t, "operatorname"),
                                a.body.length > 0) {
                                for (var s = a.body.map((function(t) {
                                        var e = t.text;
                                        return "string" == typeof e ? {
                                            type: "textord",
                                            mode: t.mode,
                                            text: e
                                        } : t
                                    }
                                )), l = ee(s, e.withFont("mathrm"), !0), h = 0; h < l.length; h++) {
                                    var m = l[h];
                                    m instanceof E && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                                }
                                i = Dt.makeSpan(["mop"], l, e)
                            } else
                                i = Dt.makeSpan(["mop"], [], e);
                            return o ? Hr(i, r, n, e, e.style, 0, 0) : i
                        };
                        function Wr(t, e, r) {
                            for (var n = ee(t, e, !1), a = e.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
                                var o = n[i].classes.indexOf("sizing");
                                o < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(r)) : n[i].classes[o + 1] === "reset-size" + e.size && (n[i].classes[o + 1] = "reset-size" + r.size),
                                    n[i].height *= a,
                                    n[i].depth *= a
                            }
                            return Dt.makeFragment(n)
                        }
                        Xt({
                            type: "operatorname",
                            names: ["\\operatorname", "\\operatorname*"],
                            props: {
                                numArgs: 1
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , a = e[0];
                                return {
                                    type: "operatorname",
                                    mode: r.mode,
                                    body: $t(a),
                                    alwaysHandleSupSub: "\\operatorname*" === n,
                                    limits: !1,
                                    parentIsSupSub: !1
                                }
                            },
                            htmlBuilder: _r,
                            mathmlBuilder: function(t, e) {
                                for (var r = ge(t.body, e.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) {
                                    var i = r[a];
                                    if (i instanceof ue.SpaceNode)
                                        ;
                                    else if (i instanceof ue.MathNode)
                                        switch (i.type) {
                                            case "mi":
                                            case "mn":
                                            case "ms":
                                            case "mspace":
                                            case "mtext":
                                                break;
                                            case "mo":
                                                var o = i.children[0];
                                                1 === i.children.length && o instanceof ue.TextNode ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                                                break;
                                            default:
                                                n = !1
                                        }
                                    else
                                        n = !1
                                }
                                if (n) {
                                    var s = r.map((function(t) {
                                            return t.toText()
                                        }
                                    )).join("");
                                    r = [new ue.TextNode(s)]
                                }
                                var l = new ue.MathNode("mi",r);
                                l.setAttribute("mathvariant", "normal");
                                var h = new ue.MathNode("mo",[pe("⁡", "text")]);
                                return t.parentIsSupSub ? new ue.MathNode("mo",[l, h]) : ue.newDocumentFragment([l, h])
                            }
                        }),
                            jt({
                                type: "ordgroup",
                                htmlBuilder: function(t, e) {
                                    return t.semisimple ? Dt.makeFragment(ee(t.body, e, !1)) : Dt.makeSpan(["mord"], ee(t.body, e, !0), e)
                                },
                                mathmlBuilder: function(t, e) {
                                    return xe(t.body, e, !0)
                                }
                            }),
                            Xt({
                                type: "overline",
                                names: ["\\overline"],
                                props: {
                                    numArgs: 1
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "overline",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = oe(t.body, e.havingCrampedStyle())
                                        , n = Dt.makeLineSpan("overline-line", e)
                                        , a = e.fontMetrics().defaultRuleThickness
                                        , i = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }, {
                                            type: "kern",
                                            size: 3 * a
                                        }, {
                                            type: "elem",
                                            elem: n
                                        }, {
                                            type: "kern",
                                            size: a
                                        }]
                                    }, e);
                                    return Dt.makeSpan(["mord", "overline"], [i], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mo",[new ue.TextNode("‾")]);
                                    r.setAttribute("stretchy", "true");
                                    var n = new ue.MathNode("mover",[ve(t.body, e), r]);
                                    return n.setAttribute("accent", "true"),
                                        n
                                }
                            }),
                            Xt({
                                type: "phantom",
                                names: ["\\phantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "phantom",
                                        mode: r.mode,
                                        body: $t(n)
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = ee(t.body, e.withPhantom(), !1);
                                    return Dt.makeFragment(r)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = ge(t.body, e);
                                    return new ue.MathNode("mphantom",r)
                                }
                            }),
                            Xt({
                                type: "hphantom",
                                names: ["\\hphantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "hphantom",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = Dt.makeSpan([], [oe(t.body, e.withPhantom())]);
                                    if (r.height = 0,
                                            r.depth = 0,
                                            r.children)
                                        for (var n = 0; n < r.children.length; n++)
                                            r.children[n].height = 0,
                                                r.children[n].depth = 0;
                                    return r = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e),
                                        Dt.makeSpan(["mord"], [r], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = ge($t(t.body), e)
                                        , n = new ue.MathNode("mphantom",r)
                                        , a = new ue.MathNode("mpadded",[n]);
                                    return a.setAttribute("height", "0px"),
                                        a.setAttribute("depth", "0px"),
                                        a
                                }
                            }),
                            Xt({
                                type: "vphantom",
                                names: ["\\vphantom"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = e[0];
                                    return {
                                        type: "vphantom",
                                        mode: r.mode,
                                        body: n
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = Dt.makeSpan(["inner"], [oe(t.body, e.withPhantom())])
                                        , n = Dt.makeSpan(["fix"], []);
                                    return Dt.makeSpan(["mord", "rlap"], [r, n], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = ge($t(t.body), e)
                                        , n = new ue.MathNode("mphantom",r)
                                        , a = new ue.MathNode("mpadded",[n]);
                                    return a.setAttribute("width", "0px"),
                                        a
                                }
                            }),
                            Xt({
                                type: "raisebox",
                                names: ["\\raisebox"],
                                props: {
                                    numArgs: 2,
                                    argTypes: ["size", "hbox"],
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    var r = t.parser
                                        , n = Be(e[0], "size").value
                                        , a = e[1];
                                    return {
                                        type: "raisebox",
                                        mode: r.mode,
                                        dy: n,
                                        body: a
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = oe(t.body, e)
                                        , n = Tt(t.dy, e);
                                    return Dt.makeVList({
                                        positionType: "shift",
                                        positionData: -n,
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mpadded",[ve(t.body, e)])
                                        , n = t.dy.number + t.dy.unit;
                                    return r.setAttribute("voffset", n),
                                        r
                                }
                            }),
                            Xt({
                                type: "rule",
                                names: ["\\rule"],
                                props: {
                                    numArgs: 2,
                                    numOptionalArgs: 1,
                                    argTypes: ["size", "size", "size"]
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = r[0]
                                        , i = Be(e[0], "size")
                                        , o = Be(e[1], "size");
                                    return {
                                        type: "rule",
                                        mode: n.mode,
                                        shift: a && Be(a, "size").value,
                                        width: i.value,
                                        height: o.value
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = Dt.makeSpan(["mord", "rule"], [], e)
                                        , n = Tt(t.width, e)
                                        , a = Tt(t.height, e)
                                        , i = t.shift ? Tt(t.shift, e) : 0;
                                    return r.style.borderRightWidth = n + "em",
                                        r.style.borderTopWidth = a + "em",
                                        r.style.bottom = i + "em",
                                        r.width = n,
                                        r.height = a + i,
                                        r.depth = -i,
                                        r.maxFontSize = 1.125 * a * e.sizeMultiplier,
                                        r
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = Tt(t.width, e)
                                        , n = Tt(t.height, e)
                                        , a = t.shift ? Tt(t.shift, e) : 0
                                        , i = e.color && e.getColor() || "black"
                                        , o = new ue.MathNode("mspace");
                                    o.setAttribute("mathbackground", i),
                                        o.setAttribute("width", r + "em"),
                                        o.setAttribute("height", n + "em");
                                    var s = new ue.MathNode("mpadded",[o]);
                                    return a >= 0 ? s.setAttribute("height", "+" + a + "em") : (s.setAttribute("height", a + "em"),
                                        s.setAttribute("depth", "+" + -a + "em")),
                                        s.setAttribute("voffset", a + "em"),
                                        s
                                }
                            });
                        var Xr = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
                        Xt({
                            type: "sizing",
                            names: Xr,
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function(t, e) {
                                var r = t.breakOnTokenText
                                    , n = t.funcName
                                    , a = t.parser
                                    , i = a.parseExpression(!1, r);
                                return {
                                    type: "sizing",
                                    mode: a.mode,
                                    size: Xr.indexOf(n) + 1,
                                    body: i
                                }
                            },
                            htmlBuilder: function(t, e) {
                                var r = e.havingSize(t.size);
                                return Wr(t.body, r, e)
                            },
                            mathmlBuilder: function(t, e) {
                                var r = e.havingSize(t.size)
                                    , n = ge(t.body, r)
                                    , a = new ue.MathNode("mstyle",n);
                                return a.setAttribute("mathsize", r.sizeMultiplier + "em"),
                                    a
                            }
                        }),
                            Xt({
                                type: "smash",
                                names: ["\\smash"],
                                props: {
                                    numArgs: 1,
                                    numOptionalArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = !1
                                        , i = !1
                                        , o = r[0] && Be(r[0], "ordgroup");
                                    if (o)
                                        for (var s = "", l = 0; l < o.body.length; ++l)
                                            if ("t" === (s = o.body[l].text))
                                                a = !0;
                                            else {
                                                if ("b" !== s) {
                                                    a = !1,
                                                        i = !1;
                                                    break
                                                }
                                                i = !0
                                            }
                                    else
                                        a = !0,
                                            i = !0;
                                    var h = e[0];
                                    return {
                                        type: "smash",
                                        mode: n.mode,
                                        body: h,
                                        smashHeight: a,
                                        smashDepth: i
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = Dt.makeSpan([], [oe(t.body, e)]);
                                    if (!t.smashHeight && !t.smashDepth)
                                        return r;
                                    if (t.smashHeight && (r.height = 0,
                                            r.children))
                                        for (var n = 0; n < r.children.length; n++)
                                            r.children[n].height = 0;
                                    if (t.smashDepth && (r.depth = 0,
                                            r.children))
                                        for (var a = 0; a < r.children.length; a++)
                                            r.children[a].depth = 0;
                                    var i = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e);
                                    return Dt.makeSpan(["mord"], [i], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mpadded",[ve(t.body, e)]);
                                    return t.smashHeight && r.setAttribute("height", "0px"),
                                    t.smashDepth && r.setAttribute("depth", "0px"),
                                        r
                                }
                            }),
                            Xt({
                                type: "sqrt",
                                names: ["\\sqrt"],
                                props: {
                                    numArgs: 1,
                                    numOptionalArgs: 1
                                },
                                handler: function(t, e, r) {
                                    var n = t.parser
                                        , a = r[0]
                                        , i = e[0];
                                    return {
                                        type: "sqrt",
                                        mode: n.mode,
                                        body: i,
                                        index: a
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = oe(t.body, e.havingCrampedStyle());
                                    0 === r.height && (r.height = e.fontMetrics().xHeight),
                                        r = Dt.wrapFragment(r, e);
                                    var n = e.fontMetrics().defaultRuleThickness
                                        , a = n;
                                    e.style.id < w.TEXT.id && (a = e.fontMetrics().xHeight);
                                    var i = n + a / 4
                                        , o = r.height + r.depth + i + n
                                        , s = ar(o, e)
                                        , l = s.span
                                        , h = s.ruleWidth
                                        , m = s.advanceWidth
                                        , c = l.height - h;
                                    c > r.height + r.depth + i && (i = (i + c - r.height - r.depth) / 2);
                                    var u = l.height - r.height - i - h;
                                    r.style.paddingLeft = m + "em";
                                    var p = Dt.makeVList({
                                        positionType: "firstBaseline",
                                        children: [{
                                            type: "elem",
                                            elem: r,
                                            wrapperClasses: ["svg-align"]
                                        }, {
                                            type: "kern",
                                            size: -(r.height + u)
                                        }, {
                                            type: "elem",
                                            elem: l
                                        }, {
                                            type: "kern",
                                            size: h
                                        }]
                                    }, e);
                                    if (t.index) {
                                        var d = e.havingStyle(w.SCRIPTSCRIPT)
                                            , f = oe(t.index, d, e)
                                            , g = .6 * (p.height - p.depth)
                                            , x = Dt.makeVList({
                                            positionType: "shift",
                                            positionData: -g,
                                            children: [{
                                                type: "elem",
                                                elem: f
                                            }]
                                        }, e)
                                            , v = Dt.makeSpan(["root"], [x]);
                                        return Dt.makeSpan(["mord", "sqrt"], [v, p], e)
                                    }
                                    return Dt.makeSpan(["mord", "sqrt"], [p], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = t.body
                                        , n = t.index;
                                    return n ? new ue.MathNode("mroot",[ve(r, e), ve(n, e)]) : new ue.MathNode("msqrt",[ve(r, e)])
                                }
                            });
                        var jr = {
                            display: w.DISPLAY,
                            text: w.TEXT,
                            script: w.SCRIPT,
                            scriptscript: w.SCRIPTSCRIPT
                        };
                        Xt({
                            type: "styling",
                            names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
                            props: {
                                numArgs: 0,
                                allowedInText: !0
                            },
                            handler: function(t, e) {
                                var r = t.breakOnTokenText
                                    , n = t.funcName
                                    , a = t.parser
                                    , i = a.parseExpression(!0, r)
                                    , o = n.slice(1, n.length - 5);
                                return {
                                    type: "styling",
                                    mode: a.mode,
                                    style: o,
                                    body: i
                                }
                            },
                            htmlBuilder: function(t, e) {
                                var r = jr[t.style]
                                    , n = e.havingStyle(r).withFont("");
                                return Wr(t.body, n, e)
                            },
                            mathmlBuilder: function(t, e) {
                                var r = jr[t.style]
                                    , n = e.havingStyle(r)
                                    , a = ge(t.body, n)
                                    , i = new ue.MathNode("mstyle",a)
                                    , o = {
                                    display: ["0", "true"],
                                    text: ["0", "false"],
                                    script: ["1", "false"],
                                    scriptscript: ["2", "false"]
                                }[t.style];
                                return i.setAttribute("scriptlevel", o[0]),
                                    i.setAttribute("displaystyle", o[1]),
                                    i
                            }
                        }),
                            jt({
                                type: "supsub",
                                htmlBuilder: function(t, e) {
                                    var r = function(t, e) {
                                        var r = t.base;
                                        return r ? "op" === r.type ? r.limits && (e.style.size === w.DISPLAY.size || r.alwaysHandleSupSub) ? Vr : null : "operatorname" === r.type ? r.alwaysHandleSupSub && (e.style.size === w.DISPLAY.size || r.limits) ? _r : null : "accent" === r.type ? c.isCharacterBox(r.base) ? Ne : null : "horizBrace" === r.type && !t.sub === r.isOver ? Lr : null : null
                                    }(t, e);
                                    if (r)
                                        return r(t, e);
                                    var n, a, i, o = t.base, s = t.sup, l = t.sub, h = oe(o, e), m = e.fontMetrics(), u = 0, p = 0, d = o && c.isCharacterBox(o);
                                    if (s) {
                                        var f = e.havingStyle(e.style.sup());
                                        n = oe(s, f, e),
                                        d || (u = h.height - f.fontMetrics().supDrop * f.sizeMultiplier / e.sizeMultiplier)
                                    }
                                    if (l) {
                                        var g = e.havingStyle(e.style.sub());
                                        a = oe(l, g, e),
                                        d || (p = h.depth + g.fontMetrics().subDrop * g.sizeMultiplier / e.sizeMultiplier)
                                    }
                                    i = e.style === w.DISPLAY ? m.sup1 : e.style.cramped ? m.sup3 : m.sup2;
                                    var x, v = e.sizeMultiplier, b = .5 / m.ptPerEm / v + "em", y = null;
                                    if (a) {
                                        var k = t.base && "op" === t.base.type && t.base.name && ("\\oiint" === t.base.name || "\\oiiint" === t.base.name);
                                        (h instanceof E || k) && (y = -h.italic + "em")
                                    }
                                    if (n && a) {
                                        u = Math.max(u, i, n.depth + .25 * m.xHeight),
                                            p = Math.max(p, m.sub2);
                                        var S = 4 * m.defaultRuleThickness;
                                        if (u - n.depth - (a.height - p) < S) {
                                            p = S - (u - n.depth) + a.height;
                                            var M = .8 * m.xHeight - (u - n.depth);
                                            M > 0 && (u += M,
                                                p -= M)
                                        }
                                        var z = [{
                                            type: "elem",
                                            elem: a,
                                            shift: p,
                                            marginRight: b,
                                            marginLeft: y
                                        }, {
                                            type: "elem",
                                            elem: n,
                                            shift: -u,
                                            marginRight: b
                                        }];
                                        x = Dt.makeVList({
                                            positionType: "individualShift",
                                            children: z
                                        }, e)
                                    } else if (a) {
                                        p = Math.max(p, m.sub1, a.height - .8 * m.xHeight);
                                        var A = [{
                                            type: "elem",
                                            elem: a,
                                            marginLeft: y,
                                            marginRight: b
                                        }];
                                        x = Dt.makeVList({
                                            positionType: "shift",
                                            positionData: p,
                                            children: A
                                        }, e)
                                    } else {
                                        if (!n)
                                            throw new Error("supsub must have either sup or sub.");
                                        u = Math.max(u, i, n.depth + .25 * m.xHeight),
                                            x = Dt.makeVList({
                                                positionType: "shift",
                                                positionData: -u,
                                                children: [{
                                                    type: "elem",
                                                    elem: n,
                                                    marginRight: b
                                                }]
                                            }, e)
                                    }
                                    var T = ae(h, "right") || "mord";
                                    return Dt.makeSpan([T], [h, Dt.makeSpan(["msupsub"], [x])], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r, n = !1;
                                    t.base && "horizBrace" === t.base.type && !!t.sup === t.base.isOver && (n = !0,
                                        r = t.base.isOver),
                                    !t.base || "op" !== t.base.type && "operatorname" !== t.base.type || (t.base.parentIsSupSub = !0);
                                    var a, i = [ve(t.base, e)];
                                    if (t.sub && i.push(ve(t.sub, e)),
                                        t.sup && i.push(ve(t.sup, e)),
                                            n)
                                        a = r ? "mover" : "munder";
                                    else if (t.sub)
                                        if (t.sup) {
                                            var o = t.base;
                                            a = o && "op" === o.type && o.limits && e.style === w.DISPLAY || o && "operatorname" === o.type && o.alwaysHandleSupSub && (e.style === w.DISPLAY || o.limits) ? "munderover" : "msubsup"
                                        } else {
                                            var s = t.base;
                                            a = s && "op" === s.type && s.limits && (e.style === w.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || e.style === w.DISPLAY) ? "munder" : "msub"
                                        }
                                    else {
                                        var l = t.base;
                                        a = l && "op" === l.type && l.limits && (e.style === w.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || e.style === w.DISPLAY) ? "mover" : "msup"
                                    }
                                    return new ue.MathNode(a,i)
                                }
                            }),
                            jt({
                                type: "atom",
                                htmlBuilder: function(t, e) {
                                    return Dt.mathsym(t.text, t.mode, e, ["m" + t.family])
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mo",[pe(t.text, t.mode)]);
                                    if ("bin" === t.family) {
                                        var n = fe(t, e);
                                        "bold-italic" === n && r.setAttribute("mathvariant", n)
                                    } else
                                        "punct" === t.family ? r.setAttribute("separator", "true") : "open" !== t.family && "close" !== t.family || r.setAttribute("stretchy", "false");
                                    return r
                                }
                            });
                        var $r = {
                            mi: "italic",
                            mn: "normal",
                            mtext: "normal"
                        };
                        jt({
                            type: "mathord",
                            htmlBuilder: function(t, e) {
                                return Dt.makeOrd(t, e, "mathord")
                            },
                            mathmlBuilder: function(t, e) {
                                var r = new ue.MathNode("mi",[pe(t.text, t.mode, e)])
                                    , n = fe(t, e) || "italic";
                                return n !== $r[r.type] && r.setAttribute("mathvariant", n),
                                    r
                            }
                        }),
                            jt({
                                type: "textord",
                                htmlBuilder: function(t, e) {
                                    return Dt.makeOrd(t, e, "textord")
                                },
                                mathmlBuilder: function(t, e) {
                                    var r, n = pe(t.text, t.mode, e), a = fe(t, e) || "normal";
                                    return r = "text" === t.mode ? new ue.MathNode("mtext",[n]) : /[0-9]/.test(t.text) ? new ue.MathNode("mn",[n]) : "\\prime" === t.text ? new ue.MathNode("mo",[n]) : new ue.MathNode("mi",[n]),
                                    a !== $r[r.type] && r.setAttribute("mathvariant", a),
                                        r
                                }
                            });
                        var Zr = {
                            "\\nobreak": "nobreak",
                            "\\allowbreak": "allowbreak"
                        }
                            , Kr = {
                            " ": {},
                            "\\ ": {},
                            "~": {
                                className: "nobreak"
                            },
                            "\\space": {},
                            "\\nobreakspace": {
                                className: "nobreak"
                            }
                        };
                        jt({
                            type: "spacing",
                            htmlBuilder: function(t, e) {
                                if (Kr.hasOwnProperty(t.text)) {
                                    var r = Kr[t.text].className || "";
                                    if ("text" === t.mode) {
                                        var n = Dt.makeOrd(t, e, "textord");
                                        return n.classes.push(r),
                                            n
                                    }
                                    return Dt.makeSpan(["mspace", r], [Dt.mathsym(t.text, t.mode, e)], e)
                                }
                                if (Zr.hasOwnProperty(t.text))
                                    return Dt.makeSpan(["mspace", Zr[t.text]], [], e);
                                throw new o('Unknown type of space "' + t.text + '"')
                            },
                            mathmlBuilder: function(t, e) {
                                if (!Kr.hasOwnProperty(t.text)) {
                                    if (Zr.hasOwnProperty(t.text))
                                        return new ue.MathNode("mspace");
                                    throw new o('Unknown type of space "' + t.text + '"')
                                }
                                return new ue.MathNode("mtext",[new ue.TextNode(" ")])
                            }
                        });
                        var Jr = function() {
                            var t = new ue.MathNode("mtd",[]);
                            return t.setAttribute("width", "50%"),
                                t
                        };
                        jt({
                            type: "tag",
                            mathmlBuilder: function(t, e) {
                                var r = new ue.MathNode("mtable",[new ue.MathNode("mtr",[Jr(), new ue.MathNode("mtd",[xe(t.body, e)]), Jr(), new ue.MathNode("mtd",[xe(t.tag, e)])])]);
                                return r.setAttribute("width", "100%"),
                                    r
                            }
                        });
                        var Qr = {
                            "\\text": void 0,
                            "\\textrm": "textrm",
                            "\\textsf": "textsf",
                            "\\texttt": "texttt",
                            "\\textnormal": "textrm"
                        }
                            , tn = {
                            "\\textbf": "textbf",
                            "\\textmd": "textmd"
                        }
                            , en = {
                            "\\textit": "textit",
                            "\\textup": "textup"
                        }
                            , rn = function(t, e) {
                            var r = t.font;
                            return r ? Qr[r] ? e.withTextFontFamily(Qr[r]) : tn[r] ? e.withTextFontWeight(tn[r]) : e.withTextFontShape(en[r]) : e
                        };
                        Xt({
                            type: "text",
                            names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"],
                            props: {
                                numArgs: 1,
                                argTypes: ["text"],
                                greediness: 2,
                                allowedInText: !0
                            },
                            handler: function(t, e) {
                                var r = t.parser
                                    , n = t.funcName
                                    , a = e[0];
                                return {
                                    type: "text",
                                    mode: r.mode,
                                    body: $t(a),
                                    font: n
                                }
                            },
                            htmlBuilder: function(t, e) {
                                var r = rn(t, e)
                                    , n = ee(t.body, r, !0);
                                return Dt.makeSpan(["mord", "text"], Dt.tryCombineChars(n), r)
                            },
                            mathmlBuilder: function(t, e) {
                                var r = rn(t, e);
                                return xe(t.body, r)
                            }
                        }),
                            Xt({
                                type: "underline",
                                names: ["\\underline"],
                                props: {
                                    numArgs: 1,
                                    allowedInText: !0
                                },
                                handler: function(t, e) {
                                    return {
                                        type: "underline",
                                        mode: t.parser.mode,
                                        body: e[0]
                                    }
                                },
                                htmlBuilder: function(t, e) {
                                    var r = oe(t.body, e)
                                        , n = Dt.makeLineSpan("underline-line", e)
                                        , a = e.fontMetrics().defaultRuleThickness
                                        , i = Dt.makeVList({
                                        positionType: "top",
                                        positionData: r.height,
                                        children: [{
                                            type: "kern",
                                            size: a
                                        }, {
                                            type: "elem",
                                            elem: n
                                        }, {
                                            type: "kern",
                                            size: 3 * a
                                        }, {
                                            type: "elem",
                                            elem: r
                                        }]
                                    }, e);
                                    return Dt.makeSpan(["mord", "underline"], [i], e)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.MathNode("mo",[new ue.TextNode("‾")]);
                                    r.setAttribute("stretchy", "true");
                                    var n = new ue.MathNode("munder",[ve(t.body, e), r]);
                                    return n.setAttribute("accentunder", "true"),
                                        n
                                }
                            }),
                            Xt({
                                type: "verb",
                                names: ["\\verb"],
                                props: {
                                    numArgs: 0,
                                    allowedInText: !0
                                },
                                handler: function(t, e, r) {
                                    throw new o("\\verb ended by end of line instead of matching delimiter")
                                },
                                htmlBuilder: function(t, e) {
                                    for (var r = nn(t), n = [], a = e.havingStyle(e.style.text()), i = 0; i < r.length; i++) {
                                        var o = r[i];
                                        "~" === o && (o = "\\textasciitilde"),
                                            n.push(Dt.makeSymbol(o, "Typewriter-Regular", t.mode, a, ["mord", "texttt"]))
                                    }
                                    return Dt.makeSpan(["mord", "text"].concat(a.sizingClasses(e)), Dt.tryCombineChars(n), a)
                                },
                                mathmlBuilder: function(t, e) {
                                    var r = new ue.TextNode(nn(t))
                                        , n = new ue.MathNode("mtext",[r]);
                                    return n.setAttribute("mathvariant", "monospace"),
                                        n
                                }
                            });
                        var nn = function(t) {
                            return t.body.replace(/ /g, t.star ? "␣" : " ")
                        }
                            , an = Yt
                            , on = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$")
                            , sn = new RegExp("[̀-ͯ]+$")
                            , ln = function() {
                            function t(t, e) {
                                this.input = void 0,
                                    this.settings = void 0,
                                    this.tokenRegex = void 0,
                                    this.catcodes = void 0,
                                    this.input = t,
                                    this.settings = e,
                                    this.tokenRegex = new RegExp("([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])","g"),
                                    this.catcodes = {
                                        "%": 14
                                    }
                            }
                            var e = t.prototype;
                            return e.setCatcode = function(t, e) {
                                this.catcodes[t] = e
                            }
                                ,
                                e.lex = function() {
                                    var t = this.input
                                        , e = this.tokenRegex.lastIndex;
                                    if (e === t.length)
                                        return new a("EOF",new n(this,e,e));
                                    var r = this.tokenRegex.exec(t);
                                    if (null === r || r.index !== e)
                                        throw new o("Unexpected character: '" + t[e] + "'",new a(t[e],new n(this,e,e + 1)));
                                    var i = r[2] || " ";
                                    if (14 === this.catcodes[i]) {
                                        var s = t.indexOf("\n", this.tokenRegex.lastIndex);
                                        return -1 === s ? (this.tokenRegex.lastIndex = t.length,
                                            this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1,
                                            this.lex()
                                    }
                                    var l = i.match(on);
                                    return l && (i = l[1]),
                                        new a(i,new n(this,e,this.tokenRegex.lastIndex))
                                }
                                ,
                                t
                        }()
                            , hn = function() {
                            function t(t, e) {
                                void 0 === t && (t = {}),
                                void 0 === e && (e = {}),
                                    this.current = void 0,
                                    this.builtins = void 0,
                                    this.undefStack = void 0,
                                    this.current = e,
                                    this.builtins = t,
                                    this.undefStack = []
                            }
                            var e = t.prototype;
                            return e.beginGroup = function() {
                                this.undefStack.push({})
                            }
                                ,
                                e.endGroup = function() {
                                    if (0 === this.undefStack.length)
                                        throw new o("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                                    var t = this.undefStack.pop();
                                    for (var e in t)
                                        t.hasOwnProperty(e) && (void 0 === t[e] ? delete this.current[e] : this.current[e] = t[e])
                                }
                                ,
                                e.has = function(t) {
                                    return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t)
                                }
                                ,
                                e.get = function(t) {
                                    return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t]
                                }
                                ,
                                e.set = function(t, e, r) {
                                    if (void 0 === r && (r = !1),
                                            r) {
                                        for (var n = 0; n < this.undefStack.length; n++)
                                            delete this.undefStack[n][t];
                                        this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = e)
                                    } else {
                                        var a = this.undefStack[this.undefStack.length - 1];
                                        a && !a.hasOwnProperty(t) && (a[t] = this.current[t])
                                    }
                                    this.current[t] = e
                                }
                                ,
                                t
                        }()
                            , mn = {}
                            , cn = mn;
                        function un(t, e) {
                            mn[t] = e
                        }
                        un("\\noexpand", (function(t) {
                                var e = t.popToken();
                                return t.isExpandable(e.text) && (e.noexpand = !0,
                                    e.treatAsRelax = !0),
                                    {
                                        tokens: [e],
                                        numArgs: 0
                                    }
                            }
                        )),
                            un("\\expandafter", (function(t) {
                                    var e = t.popToken();
                                    return t.expandOnce(!0),
                                        {
                                            tokens: [e],
                                            numArgs: 0
                                        }
                                }
                            )),
                            un("\\@firstoftwo", (function(t) {
                                    return {
                                        tokens: t.consumeArgs(2)[0],
                                        numArgs: 0
                                    }
                                }
                            )),
                            un("\\@secondoftwo", (function(t) {
                                    return {
                                        tokens: t.consumeArgs(2)[1],
                                        numArgs: 0
                                    }
                                }
                            )),
                            un("\\@ifnextchar", (function(t) {
                                    var e = t.consumeArgs(3);
                                    t.consumeSpaces();
                                    var r = t.future();
                                    return 1 === e[0].length && e[0][0].text === r.text ? {
                                        tokens: e[1],
                                        numArgs: 0
                                    } : {
                                        tokens: e[2],
                                        numArgs: 0
                                    }
                                }
                            )),
                            un("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
                            un("\\TextOrMath", (function(t) {
                                    var e = t.consumeArgs(2);
                                    return "text" === t.mode ? {
                                        tokens: e[0],
                                        numArgs: 0
                                    } : {
                                        tokens: e[1],
                                        numArgs: 0
                                    }
                                }
                            ));
                        var pn = {
                            0: 0,
                            1: 1,
                            2: 2,
                            3: 3,
                            4: 4,
                            5: 5,
                            6: 6,
                            7: 7,
                            8: 8,
                            9: 9,
                            a: 10,
                            A: 10,
                            b: 11,
                            B: 11,
                            c: 12,
                            C: 12,
                            d: 13,
                            D: 13,
                            e: 14,
                            E: 14,
                            f: 15,
                            F: 15
                        };
                        un("\\char", (function(t) {
                                var e, r = t.popToken(), n = "";
                                if ("'" === r.text)
                                    e = 8,
                                        r = t.popToken();
                                else if ('"' === r.text)
                                    e = 16,
                                        r = t.popToken();
                                else if ("`" === r.text)
                                    if ("\\" === (r = t.popToken()).text[0])
                                        n = r.text.charCodeAt(1);
                                    else {
                                        if ("EOF" === r.text)
                                            throw new o("\\char` missing argument");
                                        n = r.text.charCodeAt(0)
                                    }
                                else
                                    e = 10;
                                if (e) {
                                    if (null == (n = pn[r.text]) || n >= e)
                                        throw new o("Invalid base-" + e + " digit " + r.text);
                                    for (var a; null != (a = pn[t.future().text]) && a < e; )
                                        n *= e,
                                            n += a,
                                            t.popToken()
                                }
                                return "\\@char{" + n + "}"
                            }
                        ));
                        var dn = function(t, e, r) {
                            var n = t.consumeArgs(1)[0];
                            if (1 !== n.length)
                                throw new o("\\newcommand's first argument must be a macro name");
                            var a = n[0].text
                                , i = t.isDefined(a);
                            if (i && !e)
                                throw new o("\\newcommand{" + a + "} attempting to redefine " + a + "; use \\renewcommand");
                            if (!i && !r)
                                throw new o("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
                            var s = 0;
                            if (1 === (n = t.consumeArgs(1)[0]).length && "[" === n[0].text) {
                                for (var l = "", h = t.expandNextToken(); "]" !== h.text && "EOF" !== h.text; )
                                    l += h.text,
                                        h = t.expandNextToken();
                                if (!l.match(/^\s*[0-9]+\s*$/))
                                    throw new o("Invalid number of arguments: " + l);
                                s = parseInt(l),
                                    n = t.consumeArgs(1)[0]
                            }
                            return t.macros.set(a, {
                                tokens: n,
                                numArgs: s
                            }),
                                ""
                        };
                        un("\\newcommand", (function(t) {
                                return dn(t, !1, !0)
                            }
                        )),
                            un("\\renewcommand", (function(t) {
                                    return dn(t, !0, !1)
                                }
                            )),
                            un("\\providecommand", (function(t) {
                                    return dn(t, !0, !0)
                                }
                            )),
                            un("\\message", (function(t) {
                                    var e = t.consumeArgs(1)[0];
                                    return console.log(e.reverse().map((function(t) {
                                            return t.text
                                        }
                                    )).join("")),
                                        ""
                                }
                            )),
                            un("\\errmessage", (function(t) {
                                    var e = t.consumeArgs(1)[0];
                                    return console.error(e.reverse().map((function(t) {
                                            return t.text
                                        }
                                    )).join("")),
                                        ""
                                }
                            )),
                            un("\\show", (function(t) {
                                    var e = t.popToken()
                                        , r = e.text;
                                    return console.log(e, t.macros.get(r), an[r], j.math[r], j.text[r]),
                                        ""
                                }
                            )),
                            un("\\bgroup", "{"),
                            un("\\egroup", "}"),
                            un("\\lq", "`"),
                            un("\\rq", "'"),
                            un("\\aa", "\\r a"),
                            un("\\AA", "\\r A"),
                            un("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"),
                            un("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"),
                            un("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),
                            un("ℬ", "\\mathscr{B}"),
                            un("ℰ", "\\mathscr{E}"),
                            un("ℱ", "\\mathscr{F}"),
                            un("ℋ", "\\mathscr{H}"),
                            un("ℐ", "\\mathscr{I}"),
                            un("ℒ", "\\mathscr{L}"),
                            un("ℳ", "\\mathscr{M}"),
                            un("ℛ", "\\mathscr{R}"),
                            un("ℭ", "\\mathfrak{C}"),
                            un("ℌ", "\\mathfrak{H}"),
                            un("ℨ", "\\mathfrak{Z}"),
                            un("\\Bbbk", "\\Bbb{k}"),
                            un("·", "\\cdotp"),
                            un("\\llap", "\\mathllap{\\textrm{#1}}"),
                            un("\\rlap", "\\mathrlap{\\textrm{#1}}"),
                            un("\\clap", "\\mathclap{\\textrm{#1}}"),
                            un("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'),
                            un("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),
                            un("\\ne", "\\neq"),
                            un("≠", "\\neq"),
                            un("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),
                            un("∉", "\\notin"),
                            un("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),
                            un("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),
                            un("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),
                            un("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),
                            un("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),
                            un("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),
                            un("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),
                            un("⟂", "\\perp"),
                            un("‼", "\\mathclose{!\\mkern-0.8mu!}"),
                            un("∌", "\\notni"),
                            un("⌜", "\\ulcorner"),
                            un("⌝", "\\urcorner"),
                            un("⌞", "\\llcorner"),
                            un("⌟", "\\lrcorner"),
                            un("©", "\\copyright"),
                            un("®", "\\textregistered"),
                            un("️", "\\textregistered"),
                            un("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'),
                            un("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'),
                            un("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'),
                            un("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'),
                            un("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"),
                            un("⋮", "\\vdots"),
                            un("\\varGamma", "\\mathit{\\Gamma}"),
                            un("\\varDelta", "\\mathit{\\Delta}"),
                            un("\\varTheta", "\\mathit{\\Theta}"),
                            un("\\varLambda", "\\mathit{\\Lambda}"),
                            un("\\varXi", "\\mathit{\\Xi}"),
                            un("\\varPi", "\\mathit{\\Pi}"),
                            un("\\varSigma", "\\mathit{\\Sigma}"),
                            un("\\varUpsilon", "\\mathit{\\Upsilon}"),
                            un("\\varPhi", "\\mathit{\\Phi}"),
                            un("\\varPsi", "\\mathit{\\Psi}"),
                            un("\\varOmega", "\\mathit{\\Omega}"),
                            un("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"),
                            un("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"),
                            un("\\boxed", "\\fbox{$\\displaystyle{#1}$}"),
                            un("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
                            un("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
                            un("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
                        var fn = {
                            ",": "\\dotsc",
                            "\\not": "\\dotsb",
                            "+": "\\dotsb",
                            "=": "\\dotsb",
                            "<": "\\dotsb",
                            ">": "\\dotsb",
                            "-": "\\dotsb",
                            "*": "\\dotsb",
                            ":": "\\dotsb",
                            "\\DOTSB": "\\dotsb",
                            "\\coprod": "\\dotsb",
                            "\\bigvee": "\\dotsb",
                            "\\bigwedge": "\\dotsb",
                            "\\biguplus": "\\dotsb",
                            "\\bigcap": "\\dotsb",
                            "\\bigcup": "\\dotsb",
                            "\\prod": "\\dotsb",
                            "\\sum": "\\dotsb",
                            "\\bigotimes": "\\dotsb",
                            "\\bigoplus": "\\dotsb",
                            "\\bigodot": "\\dotsb",
                            "\\bigsqcup": "\\dotsb",
                            "\\And": "\\dotsb",
                            "\\longrightarrow": "\\dotsb",
                            "\\Longrightarrow": "\\dotsb",
                            "\\longleftarrow": "\\dotsb",
                            "\\Longleftarrow": "\\dotsb",
                            "\\longleftrightarrow": "\\dotsb",
                            "\\Longleftrightarrow": "\\dotsb",
                            "\\mapsto": "\\dotsb",
                            "\\longmapsto": "\\dotsb",
                            "\\hookrightarrow": "\\dotsb",
                            "\\doteq": "\\dotsb",
                            "\\mathbin": "\\dotsb",
                            "\\mathrel": "\\dotsb",
                            "\\relbar": "\\dotsb",
                            "\\Relbar": "\\dotsb",
                            "\\xrightarrow": "\\dotsb",
                            "\\xleftarrow": "\\dotsb",
                            "\\DOTSI": "\\dotsi",
                            "\\int": "\\dotsi",
                            "\\oint": "\\dotsi",
                            "\\iint": "\\dotsi",
                            "\\iiint": "\\dotsi",
                            "\\iiiint": "\\dotsi",
                            "\\idotsint": "\\dotsi",
                            "\\DOTSX": "\\dotsx"
                        };
                        un("\\dots", (function(t) {
                                var e = "\\dotso"
                                    , r = t.expandAfterFuture().text;
                                return r in fn ? e = fn[r] : ("\\not" === r.substr(0, 4) || r in j.math && c.contains(["bin", "rel"], j.math[r].group)) && (e = "\\dotsb"),
                                    e
                            }
                        ));
                        var gn = {
                            ")": !0,
                            "]": !0,
                            "\\rbrack": !0,
                            "\\}": !0,
                            "\\rbrace": !0,
                            "\\rangle": !0,
                            "\\rceil": !0,
                            "\\rfloor": !0,
                            "\\rgroup": !0,
                            "\\rmoustache": !0,
                            "\\right": !0,
                            "\\bigr": !0,
                            "\\biggr": !0,
                            "\\Bigr": !0,
                            "\\Biggr": !0,
                            $: !0,
                            ";": !0,
                            ".": !0,
                            ",": !0
                        };
                        un("\\dotso", (function(t) {
                                return t.future().text in gn ? "\\ldots\\," : "\\ldots"
                            }
                        )),
                            un("\\dotsc", (function(t) {
                                    var e = t.future().text;
                                    return e in gn && "," !== e ? "\\ldots\\," : "\\ldots"
                                }
                            )),
                            un("\\cdots", (function(t) {
                                    return t.future().text in gn ? "\\@cdots\\," : "\\@cdots"
                                }
                            )),
                            un("\\dotsb", "\\cdots"),
                            un("\\dotsm", "\\cdots"),
                            un("\\dotsi", "\\!\\cdots"),
                            un("\\dotsx", "\\ldots\\,"),
                            un("\\DOTSI", "\\relax"),
                            un("\\DOTSB", "\\relax"),
                            un("\\DOTSX", "\\relax"),
                            un("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),
                            un("\\,", "\\tmspace+{3mu}{.1667em}"),
                            un("\\thinspace", "\\,"),
                            un("\\>", "\\mskip{4mu}"),
                            un("\\:", "\\tmspace+{4mu}{.2222em}"),
                            un("\\medspace", "\\:"),
                            un("\\;", "\\tmspace+{5mu}{.2777em}"),
                            un("\\thickspace", "\\;"),
                            un("\\!", "\\tmspace-{3mu}{.1667em}"),
                            un("\\negthinspace", "\\!"),
                            un("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
                            un("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
                            un("\\enspace", "\\kern.5em "),
                            un("\\enskip", "\\hskip.5em\\relax"),
                            un("\\quad", "\\hskip1em\\relax"),
                            un("\\qquad", "\\hskip2em\\relax"),
                            un("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
                            un("\\tag@paren", "\\tag@literal{({#1})}"),
                            un("\\tag@literal", (function(t) {
                                    if (t.macros.get("\\df@tag"))
                                        throw new o("Multiple \\tag");
                                    return "\\gdef\\df@tag{\\text{#1}}"
                                }
                            )),
                            un("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"),
                            un("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"),
                            un("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
                            un("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"),
                            un("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"),
                            un("\\\\", "\\newline"),
                            un("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
                        var xn = F["Main-Regular"]["T".charCodeAt(0)][1] - .7 * F["Main-Regular"]["A".charCodeAt(0)][1] + "em";
                        un("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + xn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"),
                            un("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + xn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"),
                            un("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
                            un("\\@hspace", "\\hskip #1\\relax"),
                            un("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
                            un("\\ordinarycolon", ":"),
                            un("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
                            un("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'),
                            un("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'),
                            un("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'),
                            un("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'),
                            un("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'),
                            un("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'),
                            un("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'),
                            un("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'),
                            un("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'),
                            un("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'),
                            un("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'),
                            un("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'),
                            un("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'),
                            un("∷", "\\dblcolon"),
                            un("∹", "\\eqcolon"),
                            un("≔", "\\coloneqq"),
                            un("≕", "\\eqqcolon"),
                            un("⩴", "\\Coloneqq"),
                            un("\\ratio", "\\vcentcolon"),
                            un("\\coloncolon", "\\dblcolon"),
                            un("\\colonequals", "\\coloneqq"),
                            un("\\coloncolonequals", "\\Coloneqq"),
                            un("\\equalscolon", "\\eqqcolon"),
                            un("\\equalscoloncolon", "\\Eqqcolon"),
                            un("\\colonminus", "\\coloneq"),
                            un("\\coloncolonminus", "\\Coloneq"),
                            un("\\minuscolon", "\\eqcolon"),
                            un("\\minuscoloncolon", "\\Eqcolon"),
                            un("\\coloncolonapprox", "\\Colonapprox"),
                            un("\\coloncolonsim", "\\Colonsim"),
                            un("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
                            un("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"),
                            un("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),
                            un("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"),
                            un("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),
                            un("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"),
                            un("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"),
                            un("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"),
                            un("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"),
                            un("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"),
                            un("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"),
                            un("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"),
                            un("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"),
                            un("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"),
                            un("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"),
                            un("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"),
                            un("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"),
                            un("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"),
                            un("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"),
                            un("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"),
                            un("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"),
                            un("\\imath", "\\html@mathml{\\@imath}{ı}"),
                            un("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"),
                            un("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"),
                            un("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"),
                            un("⟦", "\\llbracket"),
                            un("⟧", "\\rrbracket"),
                            un("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"),
                            un("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"),
                            un("⦃", "\\lBrace"),
                            un("⦄", "\\rBrace"),
                            un("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"),
                            un("⦵", "\\minuso"),
                            un("\\darr", "\\downarrow"),
                            un("\\dArr", "\\Downarrow"),
                            un("\\Darr", "\\Downarrow"),
                            un("\\lang", "\\langle"),
                            un("\\rang", "\\rangle"),
                            un("\\uarr", "\\uparrow"),
                            un("\\uArr", "\\Uparrow"),
                            un("\\Uarr", "\\Uparrow"),
                            un("\\N", "\\mathbb{N}"),
                            un("\\R", "\\mathbb{R}"),
                            un("\\Z", "\\mathbb{Z}"),
                            un("\\alef", "\\aleph"),
                            un("\\alefsym", "\\aleph"),
                            un("\\Alpha", "\\mathrm{A}"),
                            un("\\Beta", "\\mathrm{B}"),
                            un("\\bull", "\\bullet"),
                            un("\\Chi", "\\mathrm{X}"),
                            un("\\clubs", "\\clubsuit"),
                            un("\\cnums", "\\mathbb{C}"),
                            un("\\Complex", "\\mathbb{C}"),
                            un("\\Dagger", "\\ddagger"),
                            un("\\diamonds", "\\diamondsuit"),
                            un("\\empty", "\\emptyset"),
                            un("\\Epsilon", "\\mathrm{E}"),
                            un("\\Eta", "\\mathrm{H}"),
                            un("\\exist", "\\exists"),
                            un("\\harr", "\\leftrightarrow"),
                            un("\\hArr", "\\Leftrightarrow"),
                            un("\\Harr", "\\Leftrightarrow"),
                            un("\\hearts", "\\heartsuit"),
                            un("\\image", "\\Im"),
                        un("\\infin", "\\infty"),
                        un("\\Iota", "\\mathrm{I}"),
                        un("\\isin", "\\in"),
                        un("\\Kappa", "\\mathrm{K}"),
                        un("\\larr", "\\leftarrow"),
                        un("\\lArr", "\\Leftarrow"),
                        un("\\Larr", "\\Leftarrow"),
                        un("\\lrarr", "\\leftrightarrow"),
                        un("\\lrArr", "\\Leftrightarrow"),
                        un("\\Lrarr", "\\Leftrightarrow"),
                        un("\\Mu", "\\mathrm{M}"),
                        un("\\natnums", "\\mathbb{N}"),
                        un("\\Nu", "\\mathrm{N}"),
                        un("\\Omicron", "\\mathrm{O}"),
                        un("\\plusmn", "\\pm"),
                        un("\\rarr", "\\rightarrow"),
                        un("\\rArr", "\\Rightarrow"),
                        un("\\Rarr", "\\Rightarrow"),
                        un("\\real", "\\Re"),
                        un("\\reals", "\\mathbb{R}"),
                        un("\\Reals", "\\mathbb{R}"),
                        un("\\Rho", "\\mathrm{P}"),
                        un("\\sdot", "\\cdot"),
                        un("\\sect", "\\S"),
                        un("\\spades", "\\spadesuit"),
                        un("\\sub", "\\subset"),
                        un("\\sube", "\\subseteq"),
                        un("\\supe", "\\supseteq"),
                        un("\\Tau", "\\mathrm{T}"),
                        un("\\thetasym", "\\vartheta"),
                        un("\\weierp", "\\wp"),
                        un("\\Zeta", "\\mathrm{Z}"),
                        un("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"),
                        un("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"),
                        un("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"),
                        un("\\bra", "\\mathinner{\\langle{#1}|}"),
                        un("\\ket", "\\mathinner{|{#1}\\rangle}"),
                        un("\\braket", "\\mathinner{\\langle{#1}\\rangle}"),
                        un("\\Bra", "\\left\\langle#1\\right|"),
                        un("\\Ket", "\\left|#1\\right\\rangle"),
                        un("\\blue", "\\textcolor{##6495ed}{#1}"),
                        un("\\orange", "\\textcolor{##ffa500}{#1}"),
                        un("\\pink", "\\textcolor{##ff00af}{#1}"),
                        un("\\red", "\\textcolor{##df0030}{#1}"),
                        un("\\green", "\\textcolor{##28ae7b}{#1}"),
                        un("\\gray", "\\textcolor{gray}{#1}"),
                        un("\\purple", "\\textcolor{##9d38bd}{#1}"),
                        un("\\blueA", "\\textcolor{##ccfaff}{#1}"),
                        un("\\blueB", "\\textcolor{##80f6ff}{#1}"),
                        un("\\blueC", "\\textcolor{##63d9ea}{#1}"),
                        un("\\blueD", "\\textcolor{##11accd}{#1}"),
                        un("\\blueE", "\\textcolor{##0c7f99}{#1}"),
                        un("\\tealA", "\\textcolor{##94fff5}{#1}"),
                        un("\\tealB", "\\textcolor{##26edd5}{#1}"),
                        un("\\tealC", "\\textcolor{##01d1c1}{#1}"),
                        un("\\tealD", "\\textcolor{##01a995}{#1}"),
                        un("\\tealE", "\\textcolor{##208170}{#1}"),
                        un("\\greenA", "\\textcolor{##b6ffb0}{#1}"),
                        un("\\greenB", "\\textcolor{##8af281}{#1}"),
                        un("\\greenC", "\\textcolor{##74cf70}{#1}"),
                        un("\\greenD", "\\textcolor{##1fab54}{#1}"),
                        un("\\greenE", "\\textcolor{##0d923f}{#1}"),
                        un("\\goldA", "\\textcolor{##ffd0a9}{#1}"),
                        un("\\goldB", "\\textcolor{##ffbb71}{#1}"),
                        un("\\goldC", "\\textcolor{##ff9c39}{#1}"),
                        un("\\goldD", "\\textcolor{##e07d10}{#1}"),
                        un("\\goldE", "\\textcolor{##a75a05}{#1}"),
                        un("\\redA", "\\textcolor{##fca9a9}{#1}"),
                        un("\\redB", "\\textcolor{##ff8482}{#1}"),
                        un("\\redC", "\\textcolor{##f9685d}{#1}"),
                        un("\\redD", "\\textcolor{##e84d39}{#1}"),
                        un("\\redE", "\\textcolor{##bc2612}{#1}"),
                        un("\\maroonA", "\\textcolor{##ffbde0}{#1}"),
                        un("\\maroonB", "\\textcolor{##ff92c6}{#1}"),
                        un("\\maroonC", "\\textcolor{##ed5fa6}{#1}"),
                        un("\\maroonD", "\\textcolor{##ca337c}{#1}"),
                        un("\\maroonE", "\\textcolor{##9e034e}{#1}"),
                        un("\\purpleA", "\\textcolor{##ddd7ff}{#1}"),
                        un("\\purpleB", "\\textcolor{##c6b9fc}{#1}"),
                        un("\\purpleC", "\\textcolor{##aa87ff}{#1}"),
                        un("\\purpleD", "\\textcolor{##7854ab}{#1}"),
                        un("\\purpleE", "\\textcolor{##543b78}{#1}"),
                        un("\\mintA", "\\textcolor{##f5f9e8}{#1}"),
                        un("\\mintB", "\\textcolor{##edf2df}{#1}"),
                        un("\\mintC", "\\textcolor{##e0e5cc}{#1}"),
                        un("\\grayA", "\\textcolor{##f6f7f7}{#1}"),
                        un("\\grayB", "\\textcolor{##f0f1f2}{#1}"),
                        un("\\grayC", "\\textcolor{##e3e5e6}{#1}"),
                        un("\\grayD", "\\textcolor{##d6d8da}{#1}"),
                        un("\\grayE", "\\textcolor{##babec2}{#1}"),
                        un("\\grayF", "\\textcolor{##888d93}{#1}"),
                        un("\\grayG", "\\textcolor{##626569}{#1}"),
                        un("\\grayH", "\\textcolor{##3b3e40}{#1}"),
                        un("\\grayI", "\\textcolor{##21242c}{#1}"),
                        un("\\kaBlue", "\\textcolor{##314453}{#1}"),
                        un("\\kaGreen", "\\textcolor{##71B307}{#1}");
                        var vn = {
                            "\\relax": !0,
                            "^": !0,
                            _: !0,
                            "\\limits": !0,
                            "\\nolimits": !0
                        }
                            , bn = function() {
                            function t(t, e, r) {
                                this.settings = void 0,
                                    this.expansionCount = void 0,
                                    this.lexer = void 0,
                                    this.macros = void 0,
                                    this.stack = void 0,
                                    this.mode = void 0,
                                    this.settings = e,
                                    this.expansionCount = 0,
                                    this.feed(t),
                                    this.macros = new hn(cn,e.macros),
                                    this.mode = r,
                                    this.stack = []
                            }
                            var e = t.prototype;
                            return e.feed = function(t) {
                                this.lexer = new ln(t,this.settings)
                            }
                                ,
                                e.switchMode = function(t) {
                                    this.mode = t
                                }
                                ,
                                e.beginGroup = function() {
                                    this.macros.beginGroup()
                                }
                                ,
                                e.endGroup = function() {
                                    this.macros.endGroup()
                                }
                                ,
                                e.future = function() {
                                    return 0 === this.stack.length && this.pushToken(this.lexer.lex()),
                                        this.stack[this.stack.length - 1]
                                }
                                ,
                                e.popToken = function() {
                                    return this.future(),
                                        this.stack.pop()
                                }
                                ,
                                e.pushToken = function(t) {
                                    this.stack.push(t)
                                }
                                ,
                                e.pushTokens = function(t) {
                                    var e;
                                    (e = this.stack).push.apply(e, t)
                                }
                                ,
                                e.consumeSpaces = function() {
                                    for (; " " === this.future().text; )
                                        this.stack.pop()
                                }
                                ,
                                e.consumeArgs = function(t) {
                                    for (var e = [], r = 0; r < t; ++r) {
                                        this.consumeSpaces();
                                        var n = this.popToken();
                                        if ("{" === n.text) {
                                            for (var a = [], i = 1; 0 !== i; ) {
                                                var s = this.popToken();
                                                if (a.push(s),
                                                    "{" === s.text)
                                                    ++i;
                                                else if ("}" === s.text)
                                                    --i;
                                                else if ("EOF" === s.text)
                                                    throw new o("End of input in macro argument",n)
                                            }
                                            a.pop(),
                                                a.reverse(),
                                                e[r] = a
                                        } else {
                                            if ("EOF" === n.text)
                                                throw new o("End of input expecting macro argument");
                                            e[r] = [n]
                                        }
                                    }
                                    return e
                                }
                                ,
                                e.expandOnce = function(t) {
                                    var e = this.popToken()
                                        , r = e.text
                                        , n = e.noexpand ? null : this._getExpansion(r);
                                    if (null == n || t && n.unexpandable) {
                                        if (t && null == n && "\\" === r[0] && !this.isDefined(r))
                                            throw new o("Undefined control sequence: " + r);
                                        return this.pushToken(e),
                                            e
                                    }
                                    if (this.expansionCount++,
                                        this.expansionCount > this.settings.maxExpand)
                                        throw new o("Too many expansions: infinite loop or need to increase maxExpand setting");
                                    var a = n.tokens;
                                    if (n.numArgs)
                                        for (var i = this.consumeArgs(n.numArgs), s = (a = a.slice()).length - 1; s >= 0; --s) {
                                            var l = a[s];
                                            if ("#" === l.text) {
                                                if (0 === s)
                                                    throw new o("Incomplete placeholder at end of macro body",l);
                                                if ("#" === (l = a[--s]).text)
                                                    a.splice(s + 1, 1);
                                                else {
                                                    if (!/^[1-9]$/.test(l.text))
                                                        throw new o("Not a valid argument number",l);
                                                    var h;
                                                    (h = a).splice.apply(h, [s, 2].concat(i[+l.text - 1]))
                                                }
                                            }
                                        }
                                    return this.pushTokens(a),
                                        a
                                }
                                ,
                                e.expandAfterFuture = function() {
                                    return this.expandOnce(),
                                        this.future()
                                }
                                ,
                                e.expandNextToken = function() {
                                    for (; ; ) {
                                        var t = this.expandOnce();
                                        if (t instanceof a) {
                                            if ("\\relax" !== t.text && !t.treatAsRelax)
                                                return this.stack.pop();
                                            this.stack.pop()
                                        }
                                    }
                                    throw new Error
                                }
                                ,
                                e.expandMacro = function(t) {
                                    return this.macros.has(t) ? this.expandTokens([new a(t)]) : void 0
                                }
                                ,
                                e.expandTokens = function(t) {
                                    var e = []
                                        , r = this.stack.length;
                                    for (this.pushTokens(t); this.stack.length > r; ) {
                                        var n = this.expandOnce(!0);
                                        n instanceof a && (n.treatAsRelax && (n.noexpand = !1,
                                            n.treatAsRelax = !1),
                                            e.push(this.stack.pop()))
                                    }
                                    return e
                                }
                                ,
                                e.expandMacroAsText = function(t) {
                                    var e = this.expandMacro(t);
                                    return e ? e.map((function(t) {
                                            return t.text
                                        }
                                    )).join("") : e
                                }
                                ,
                                e._getExpansion = function(t) {
                                    var e = this.macros.get(t);
                                    if (null == e)
                                        return e;
                                    var r = "function" == typeof e ? e(this) : e;
                                    if ("string" == typeof r) {
                                        var n = 0;
                                        if (-1 !== r.indexOf("#"))
                                            for (var a = r.replace(/##/g, ""); -1 !== a.indexOf("#" + (n + 1)); )
                                                ++n;
                                        for (var i = new ln(r,this.settings), o = [], s = i.lex(); "EOF" !== s.text; )
                                            o.push(s),
                                                s = i.lex();
                                        return o.reverse(),
                                            {
                                                tokens: o,
                                                numArgs: n
                                            }
                                    }
                                    return r
                                }
                                ,
                                e.isDefined = function(t) {
                                    return this.macros.has(t) || an.hasOwnProperty(t) || j.math.hasOwnProperty(t) || j.text.hasOwnProperty(t) || vn.hasOwnProperty(t)
                                }
                                ,
                                e.isExpandable = function(t) {
                                    var e = this.macros.get(t);
                                    return null != e ? "string" == typeof e || "function" == typeof e || !e.unexpandable : an.hasOwnProperty(t)
                                }
                                ,
                                t
                        }()
                            , yn = {
                            "́": {
                                text: "\\'",
                                math: "\\acute"
                            },
                            "̀": {
                                text: "\\`",
                                math: "\\grave"
                            },
                            "̈": {
                                text: '\\"',
                                math: "\\ddot"
                            },
                            "̃": {
                                text: "\\~",
                                math: "\\tilde"
                            },
                            "̄": {
                                text: "\\=",
                                math: "\\bar"
                            },
                            "̆": {
                                text: "\\u",
                                math: "\\breve"
                            },
                            "̌": {
                                text: "\\v",
                                math: "\\check"
                            },
                            "̂": {
                                text: "\\^",
                                math: "\\hat"
                            },
                            "̇": {
                                text: "\\.",
                                math: "\\dot"
                            },
                            "̊": {
                                text: "\\r",
                                math: "\\mathring"
                            },
                            "̋": {
                                text: "\\H"
                            }
                        }
                            , wn = {
                            "á": "á",
                            "à": "à",
                            "ä": "ä",
                            "ǟ": "ǟ",
                            "ã": "ã",
                            "ā": "ā",
                            "ă": "ă",
                            "ắ": "ắ",
                            "ằ": "ằ",
                            "ẵ": "ẵ",
                            "ǎ": "ǎ",
                            "â": "â",
                            "ấ": "ấ",
                            "ầ": "ầ",
                            "ẫ": "ẫ",
                            "ȧ": "ȧ",
                            "ǡ": "ǡ",
                            "å": "å",
                            "ǻ": "ǻ",
                            "ḃ": "ḃ",
                            "ć": "ć",
                            "č": "č",
                            "ĉ": "ĉ",
                            "ċ": "ċ",
                            "ď": "ď",
                            "ḋ": "ḋ",
                            "é": "é",
                            "è": "è",
                            "ë": "ë",
                            "ẽ": "ẽ",
                            "ē": "ē",
                            "ḗ": "ḗ",
                            "ḕ": "ḕ",
                            "ĕ": "ĕ",
                            "ě": "ě",
                            "ê": "ê",
                            "ế": "ế",
                            "ề": "ề",
                            "ễ": "ễ",
                            "ė": "ė",
                            "ḟ": "ḟ",
                            "ǵ": "ǵ",
                            "ḡ": "ḡ",
                            "ğ": "ğ",
                            "ǧ": "ǧ",
                            "ĝ": "ĝ",
                            "ġ": "ġ",
                            "ḧ": "ḧ",
                            "ȟ": "ȟ",
                            "ĥ": "ĥ",
                            "ḣ": "ḣ",
                            "í": "í",
                            "ì": "ì",
                            "ï": "ï",
                            "ḯ": "ḯ",
                            "ĩ": "ĩ",
                            "ī": "ī",
                            "ĭ": "ĭ",
                            "ǐ": "ǐ",
                            "î": "î",
                            "ǰ": "ǰ",
                            "ĵ": "ĵ",
                            "ḱ": "ḱ",
                            "ǩ": "ǩ",
                            "ĺ": "ĺ",
                            "ľ": "ľ",
                            "ḿ": "ḿ",
                            "ṁ": "ṁ",
                            "ń": "ń",
                            "ǹ": "ǹ",
                            "ñ": "ñ",
                            "ň": "ň",
                            "ṅ": "ṅ",
                            "ó": "ó",
                            "ò": "ò",
                            "ö": "ö",
                            "ȫ": "ȫ",
                            "õ": "õ",
                            "ṍ": "ṍ",
                            "ṏ": "ṏ",
                            "ȭ": "ȭ",
                            "ō": "ō",
                            "ṓ": "ṓ",
                            "ṑ": "ṑ",
                            "ŏ": "ŏ",
                            "ǒ": "ǒ",
                            "ô": "ô",
                            "ố": "ố",
                            "ồ": "ồ",
                            "ỗ": "ỗ",
                            "ȯ": "ȯ",
                            "ȱ": "ȱ",
                            "ő": "ő",
                            "ṕ": "ṕ",
                            "ṗ": "ṗ",
                            "ŕ": "ŕ",
                            "ř": "ř",
                            "ṙ": "ṙ",
                            "ś": "ś",
                            "ṥ": "ṥ",
                            "š": "š",
                            "ṧ": "ṧ",
                            "ŝ": "ŝ",
                            "ṡ": "ṡ",
                            "ẗ": "ẗ",
                            "ť": "ť",
                            "ṫ": "ṫ",
                            "ú": "ú",
                            "ù": "ù",
                            "ü": "ü",
                            "ǘ": "ǘ",
                            "ǜ": "ǜ",
                            "ǖ": "ǖ",
                            "ǚ": "ǚ",
                            "ũ": "ũ",
                            "ṹ": "ṹ",
                            "ū": "ū",
                            "ṻ": "ṻ",
                            "ŭ": "ŭ",
                            "ǔ": "ǔ",
                            "û": "û",
                            "ů": "ů",
                            "ű": "ű",
                            "ṽ": "ṽ",
                            "ẃ": "ẃ",
                            "ẁ": "ẁ",
                            "ẅ": "ẅ",
                            "ŵ": "ŵ",
                            "ẇ": "ẇ",
                            "ẘ": "ẘ",
                            "ẍ": "ẍ",
                            "ẋ": "ẋ",
                            "ý": "ý",
                            "ỳ": "ỳ",
                            "ÿ": "ÿ",
                            "ỹ": "ỹ",
                            "ȳ": "ȳ",
                            "ŷ": "ŷ",
                            "ẏ": "ẏ",
                            "ẙ": "ẙ",
                            "ź": "ź",
                            "ž": "ž",
                            "ẑ": "ẑ",
                            "ż": "ż",
                            "Á": "Á",
                            "À": "À",
                            "Ä": "Ä",
                            "Ǟ": "Ǟ",
                            "Ã": "Ã",
                            "Ā": "Ā",
                            "Ă": "Ă",
                            "Ắ": "Ắ",
                            "Ằ": "Ằ",
                            "Ẵ": "Ẵ",
                            "Ǎ": "Ǎ",
                            "Â": "Â",
                            "Ấ": "Ấ",
                            "Ầ": "Ầ",
                            "Ẫ": "Ẫ",
                            "Ȧ": "Ȧ",
                            "Ǡ": "Ǡ",
                            "Å": "Å",
                            "Ǻ": "Ǻ",
                            "Ḃ": "Ḃ",
                            "Ć": "Ć",
                            "Č": "Č",
                            "Ĉ": "Ĉ",
                            "Ċ": "Ċ",
                            "Ď": "Ď",
                            "Ḋ": "Ḋ",
                            "É": "É",
                            "È": "È",
                            "Ë": "Ë",
                            "Ẽ": "Ẽ",
                            "Ē": "Ē",
                            "Ḗ": "Ḗ",
                            "Ḕ": "Ḕ",
                            "Ĕ": "Ĕ",
                            "Ě": "Ě",
                            "Ê": "Ê",
                            "Ế": "Ế",
                            "Ề": "Ề",
                            "Ễ": "Ễ",
                            "Ė": "Ė",
                            "Ḟ": "Ḟ",
                            "Ǵ": "Ǵ",
                            "Ḡ": "Ḡ",
                            "Ğ": "Ğ",
                            "Ǧ": "Ǧ",
                            "Ĝ": "Ĝ",
                            "Ġ": "Ġ",
                            "Ḧ": "Ḧ",
                            "Ȟ": "Ȟ",
                            "Ĥ": "Ĥ",
                            "Ḣ": "Ḣ",
                            "Í": "Í",
                            "Ì": "Ì",
                            "Ï": "Ï",
                            "Ḯ": "Ḯ",
                            "Ĩ": "Ĩ",
                            "Ī": "Ī",
                            "Ĭ": "Ĭ",
                            "Ǐ": "Ǐ",
                            "Î": "Î",
                            "İ": "İ",
                            "Ĵ": "Ĵ",
                            "Ḱ": "Ḱ",
                            "Ǩ": "Ǩ",
                            "Ĺ": "Ĺ",
                            "Ľ": "Ľ",
                            "Ḿ": "Ḿ",
                            "Ṁ": "Ṁ",
                            "Ń": "Ń",
                            "Ǹ": "Ǹ",
                            "Ñ": "Ñ",
                            "Ň": "Ň",
                            "Ṅ": "Ṅ",
                            "Ó": "Ó",
                            "Ò": "Ò",
                            "Ö": "Ö",
                            "Ȫ": "Ȫ",
                            "Õ": "Õ",
                            "Ṍ": "Ṍ",
                            "Ṏ": "Ṏ",
                            "Ȭ": "Ȭ",
                            "Ō": "Ō",
                            "Ṓ": "Ṓ",
                            "Ṑ": "Ṑ",
                            "Ŏ": "Ŏ",
                            "Ǒ": "Ǒ",
                            "Ô": "Ô",
                            "Ố": "Ố",
                            "Ồ": "Ồ",
                            "Ỗ": "Ỗ",
                            "Ȯ": "Ȯ",
                            "Ȱ": "Ȱ",
                            "Ő": "Ő",
                            "Ṕ": "Ṕ",
                            "Ṗ": "Ṗ",
                            "Ŕ": "Ŕ",
                            "Ř": "Ř",
                            "Ṙ": "Ṙ",
                            "Ś": "Ś",
                            "Ṥ": "Ṥ",
                            "Š": "Š",
                            "Ṧ": "Ṧ",
                            "Ŝ": "Ŝ",
                            "Ṡ": "Ṡ",
                            "Ť": "Ť",
                            "Ṫ": "Ṫ",
                            "Ú": "Ú",
                            "Ù": "Ù",
                            "Ü": "Ü",
                            "Ǘ": "Ǘ",
                            "Ǜ": "Ǜ",
                            "Ǖ": "Ǖ",
                            "Ǚ": "Ǚ",
                            "Ũ": "Ũ",
                            "Ṹ": "Ṹ",
                            "Ū": "Ū",
                            "Ṻ": "Ṻ",
                            "Ŭ": "Ŭ",
                            "Ǔ": "Ǔ",
                            "Û": "Û",
                            "Ů": "Ů",
                            "Ű": "Ű",
                            "Ṽ": "Ṽ",
                            "Ẃ": "Ẃ",
                            "Ẁ": "Ẁ",
                            "Ẅ": "Ẅ",
                            "Ŵ": "Ŵ",
                            "Ẇ": "Ẇ",
                            "Ẍ": "Ẍ",
                            "Ẋ": "Ẋ",
                            "Ý": "Ý",
                            "Ỳ": "Ỳ",
                            "Ÿ": "Ÿ",
                            "Ỹ": "Ỹ",
                            "Ȳ": "Ȳ",
                            "Ŷ": "Ŷ",
                            "Ẏ": "Ẏ",
                            "Ź": "Ź",
                            "Ž": "Ž",
                            "Ẑ": "Ẑ",
                            "Ż": "Ż",
                            "ά": "ά",
                            "ὰ": "ὰ",
                            "ᾱ": "ᾱ",
                            "ᾰ": "ᾰ",
                            "έ": "έ",
                            "ὲ": "ὲ",
                            "ή": "ή",
                            "ὴ": "ὴ",
                            "ί": "ί",
                            "ὶ": "ὶ",
                            "ϊ": "ϊ",
                            "ΐ": "ΐ",
                            "ῒ": "ῒ",
                            "ῑ": "ῑ",
                            "ῐ": "ῐ",
                            "ό": "ό",
                            "ὸ": "ὸ",
                            "ύ": "ύ",
                            "ὺ": "ὺ",
                            "ϋ": "ϋ",
                            "ΰ": "ΰ",
                            "ῢ": "ῢ",
                            "ῡ": "ῡ",
                            "ῠ": "ῠ",
                            "ώ": "ώ",
                            "ὼ": "ὼ",
                            "Ύ": "Ύ",
                            "Ὺ": "Ὺ",
                            "Ϋ": "Ϋ",
                            "Ῡ": "Ῡ",
                            "Ῠ": "Ῠ",
                            "Ώ": "Ώ",
                            "Ὼ": "Ὼ"
                        }
                            , kn = function() {
                            function t(t, e) {
                                this.mode = void 0,
                                    this.gullet = void 0,
                                    this.settings = void 0,
                                    this.leftrightDepth = void 0,
                                    this.nextToken = void 0,
                                    this.mode = "math",
                                    this.gullet = new bn(t,e,this.mode),
                                    this.settings = e,
                                    this.leftrightDepth = 0
                            }
                            var e = t.prototype;
                            return e.expect = function(t, e) {
                                if (void 0 === e && (e = !0),
                                    this.fetch().text !== t)
                                    throw new o("Expected '" + t + "', got '" + this.fetch().text + "'",this.fetch());
                                e && this.consume()
                            }
                                ,
                                e.consume = function() {
                                    this.nextToken = null
                                }
                                ,
                                e.fetch = function() {
                                    return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()),
                                        this.nextToken
                                }
                                ,
                                e.switchMode = function(t) {
                                    this.mode = t,
                                        this.gullet.switchMode(t)
                                }
                                ,
                                e.parse = function() {
                                    this.settings.globalGroup || this.gullet.beginGroup(),
                                    this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
                                    var t = this.parseExpression(!1);
                                    return this.expect("EOF"),
                                    this.settings.globalGroup || this.gullet.endGroup(),
                                        t
                                }
                                ,
                                e.parseExpression = function(e, r) {
                                    for (var n = []; ; ) {
                                        "math" === this.mode && this.consumeSpaces();
                                        var a = this.fetch();
                                        if (-1 !== t.endOfExpression.indexOf(a.text))
                                            break;
                                        if (r && a.text === r)
                                            break;
                                        if (e && an[a.text] && an[a.text].infix)
                                            break;
                                        var i = this.parseAtom(r);
                                        if (!i)
                                            break;
                                        "internal" !== i.type && n.push(i)
                                    }
                                    return "text" === this.mode && this.formLigatures(n),
                                        this.handleInfixNodes(n)
                                }
                                ,
                                e.handleInfixNodes = function(t) {
                                    for (var e, r = -1, n = 0; n < t.length; n++)
                                        if ("infix" === t[n].type) {
                                            if (-1 !== r)
                                                throw new o("only one infix operator per group",t[n].token);
                                            r = n,
                                                e = t[n].replaceWith
                                        }
                                    if (-1 !== r && e) {
                                        var a, i, s = t.slice(0, r), l = t.slice(r + 1);
                                        return a = 1 === s.length && "ordgroup" === s[0].type ? s[0] : {
                                            type: "ordgroup",
                                            mode: this.mode,
                                            body: s
                                        },
                                            i = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                                                type: "ordgroup",
                                                mode: this.mode,
                                                body: l
                                            },
                                            ["\\\\abovefrac" === e ? this.callFunction(e, [a, t[r], i], []) : this.callFunction(e, [a, i], [])]
                                    }
                                    return t
                                }
                                ,
                                e.handleSupSubscript = function(e) {
                                    var r = this.fetch()
                                        , n = r.text;
                                    this.consume();
                                    var a = this.parseGroup(e, !1, t.SUPSUB_GREEDINESS, void 0, void 0, !0);
                                    if (!a)
                                        throw new o("Expected group after '" + n + "'",r);
                                    return a
                                }
                                ,
                                e.formatUnsupportedCmd = function(t) {
                                    for (var e = [], r = 0; r < t.length; r++)
                                        e.push({
                                            type: "textord",
                                            mode: "text",
                                            text: t[r]
                                        });
                                    var n = {
                                        type: "text",
                                        mode: this.mode,
                                        body: e
                                    };
                                    return {
                                        type: "color",
                                        mode: this.mode,
                                        color: this.settings.errorColor,
                                        body: [n]
                                    }
                                }
                                ,
                                e.parseAtom = function(t) {
                                    var e, r, n = this.parseGroup("atom", !1, null, t);
                                    if ("text" === this.mode)
                                        return n;
                                    for (; ; ) {
                                        this.consumeSpaces();
                                        var a = this.fetch();
                                        if ("\\limits" === a.text || "\\nolimits" === a.text) {
                                            if (n && "op" === n.type) {
                                                var i = "\\limits" === a.text;
                                                n.limits = i,
                                                    n.alwaysHandleSupSub = !0
                                            } else {
                                                if (!n || "operatorname" !== n.type || !n.alwaysHandleSupSub)
                                                    throw new o("Limit controls must follow a math operator",a);
                                                var s = "\\limits" === a.text;
                                                n.limits = s
                                            }
                                            this.consume()
                                        } else if ("^" === a.text) {
                                            if (e)
                                                throw new o("Double superscript",a);
                                            e = this.handleSupSubscript("superscript")
                                        } else if ("_" === a.text) {
                                            if (r)
                                                throw new o("Double subscript",a);
                                            r = this.handleSupSubscript("subscript")
                                        } else {
                                            if ("'" !== a.text)
                                                break;
                                            if (e)
                                                throw new o("Double superscript",a);
                                            var l = {
                                                type: "textord",
                                                mode: this.mode,
                                                text: "\\prime"
                                            }
                                                , h = [l];
                                            for (this.consume(); "'" === this.fetch().text; )
                                                h.push(l),
                                                    this.consume();
                                            "^" === this.fetch().text && h.push(this.handleSupSubscript("superscript")),
                                                e = {
                                                    type: "ordgroup",
                                                    mode: this.mode,
                                                    body: h
                                                }
                                        }
                                    }
                                    return e || r ? {
                                        type: "supsub",
                                        mode: this.mode,
                                        base: n,
                                        sup: e,
                                        sub: r
                                    } : n
                                }
                                ,
                                e.parseFunction = function(t, e, r) {
                                    var n = this.fetch()
                                        , a = n.text
                                        , i = an[a];
                                    if (!i)
                                        return null;
                                    if (this.consume(),
                                        null != r && i.greediness <= r)
                                        throw new o("Got function '" + a + "' with no arguments" + (e ? " as " + e : ""),n);
                                    if ("text" === this.mode && !i.allowedInText)
                                        throw new o("Can't use function '" + a + "' in text mode",n);
                                    if ("math" === this.mode && !1 === i.allowedInMath)
                                        throw new o("Can't use function '" + a + "' in math mode",n);
                                    var s = this.parseArguments(a, i)
                                        , l = s.args
                                        , h = s.optArgs;
                                    return this.callFunction(a, l, h, n, t)
                                }
                                ,
                                e.callFunction = function(t, e, r, n, a) {
                                    var i = {
                                        funcName: t,
                                        parser: this,
                                        token: n,
                                        breakOnTokenText: a
                                    }
                                        , s = an[t];
                                    if (s && s.handler)
                                        return s.handler(i, e, r);
                                    throw new o("No function handler for " + t)
                                }
                                ,
                                e.parseArguments = function(t, e) {
                                    var r = e.numArgs + e.numOptionalArgs;
                                    if (0 === r)
                                        return {
                                            args: [],
                                            optArgs: []
                                        };
                                    for (var n = e.greediness, a = [], i = [], s = 0; s < r; s++) {
                                        var l = e.argTypes && e.argTypes[s]
                                            , h = s < e.numOptionalArgs
                                            , m = s > 0 && !h || 0 === s && !h && "math" === this.mode
                                            , c = this.parseGroupOfType("argument to '" + t + "'", l, h, n, m);
                                        if (!c) {
                                            if (h) {
                                                i.push(null);
                                                continue
                                            }
                                            throw new o("Expected group after '" + t + "'",this.fetch())
                                        }
                                        (h ? i : a).push(c)
                                    }
                                    return {
                                        args: a,
                                        optArgs: i
                                    }
                                }
                                ,
                                e.parseGroupOfType = function(t, e, r, n, a) {
                                    switch (e) {
                                        case "color":
                                            return a && this.consumeSpaces(),
                                                this.parseColorGroup(r);
                                        case "size":
                                            return a && this.consumeSpaces(),
                                                this.parseSizeGroup(r);
                                        case "url":
                                            return this.parseUrlGroup(r, a);
                                        case "math":
                                        case "text":
                                            return this.parseGroup(t, r, n, void 0, e, a);
                                        case "hbox":
                                            var i = this.parseGroup(t, r, n, void 0, "text", a);
                                            return i ? {
                                                type: "styling",
                                                mode: i.mode,
                                                body: [i],
                                                style: "text"
                                            } : i;
                                        case "raw":
                                            if (a && this.consumeSpaces(),
                                                r && "{" === this.fetch().text)
                                                return null;
                                            var s = this.parseStringGroup("raw", r, !0);
                                            if (s)
                                                return {
                                                    type: "raw",
                                                    mode: "text",
                                                    string: s.text
                                                };
                                            throw new o("Expected raw group",this.fetch());
                                        case "original":
                                        case null:
                                        case void 0:
                                            return this.parseGroup(t, r, n, void 0, void 0, a);
                                        default:
                                            throw new o("Unknown group type as " + t,this.fetch())
                                    }
                                }
                                ,
                                e.consumeSpaces = function() {
                                    for (; " " === this.fetch().text; )
                                        this.consume()
                                }
                                ,
                                e.parseStringGroup = function(t, e, r) {
                                    var n = e ? "[" : "{"
                                        , a = e ? "]" : "}"
                                        , i = this.fetch();
                                    if (i.text !== n) {
                                        if (e)
                                            return null;
                                        if (r && "EOF" !== i.text && /[^{}[\]]/.test(i.text))
                                            return this.consume(),
                                                i
                                    }
                                    var s = this.mode;
                                    this.mode = "text",
                                        this.expect(n);
                                    for (var l, h = "", m = this.fetch(), c = 0, u = m; (l = this.fetch()).text !== a || r && c > 0; ) {
                                        switch (l.text) {
                                            case "EOF":
                                                throw new o("Unexpected end of input in " + t,m.range(u, h));
                                            case n:
                                                c++;
                                                break;
                                            case a:
                                                c--
                                        }
                                        h += (u = l).text,
                                            this.consume()
                                    }
                                    return this.expect(a),
                                        this.mode = s,
                                        m.range(u, h)
                                }
                                ,
                                e.parseRegexGroup = function(t, e) {
                                    var r = this.mode;
                                    this.mode = "text";
                                    for (var n, a = this.fetch(), i = a, s = ""; "EOF" !== (n = this.fetch()).text && t.test(s + n.text); )
                                        s += (i = n).text,
                                            this.consume();
                                    if ("" === s)
                                        throw new o("Invalid " + e + ": '" + a.text + "'",a);
                                    return this.mode = r,
                                        a.range(i, s)
                                }
                                ,
                                e.parseColorGroup = function(t) {
                                    var e = this.parseStringGroup("color", t);
                                    if (!e)
                                        return null;
                                    var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(e.text);
                                    if (!r)
                                        throw new o("Invalid color: '" + e.text + "'",e);
                                    var n = r[0];
                                    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n),
                                        {
                                            type: "color-token",
                                            mode: this.mode,
                                            color: n
                                        }
                                }
                                ,
                                e.parseSizeGroup = function(t) {
                                    var e, r = !1;
                                    if (!(e = t || "{" === this.fetch().text ? this.parseStringGroup("size", t) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size")))
                                        return null;
                                    t || 0 !== e.text.length || (e.text = "0pt",
                                        r = !0);
                                    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e.text);
                                    if (!n)
                                        throw new o("Invalid size: '" + e.text + "'",e);
                                    var a = {
                                        number: +(n[1] + n[2]),
                                        unit: n[3]
                                    };
                                    if (!At(a))
                                        throw new o("Invalid unit: '" + a.unit + "'",e);
                                    return {
                                        type: "size",
                                        mode: this.mode,
                                        value: a,
                                        isBlank: r
                                    }
                                }
                                ,
                                e.parseUrlGroup = function(t, e) {
                                    this.gullet.lexer.setCatcode("%", 13);
                                    var r = this.parseStringGroup("url", t, !0);
                                    if (this.gullet.lexer.setCatcode("%", 14),
                                            !r)
                                        return null;
                                    var n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
                                    return {
                                        type: "url",
                                        mode: this.mode,
                                        url: n
                                    }
                                }
                                ,
                                e.parseGroup = function(e, r, a, i, s, l) {
                                    var h = this.mode;
                                    s && this.switchMode(s),
                                    l && this.consumeSpaces();
                                    var m, c = this.fetch(), u = c.text;
                                    if (r ? "[" === u : "{" === u || "\\begingroup" === u) {
                                        this.consume();
                                        var p = t.endOfGroup[u];
                                        this.gullet.beginGroup();
                                        var d = this.parseExpression(!1, p)
                                            , f = this.fetch();
                                        this.expect(p),
                                            this.gullet.endGroup(),
                                            m = {
                                                type: "ordgroup",
                                                mode: this.mode,
                                                loc: n.range(c, f),
                                                body: d,
                                                semisimple: "\\begingroup" === u || void 0
                                            }
                                    } else if (r)
                                        m = null;
                                    else if (null == (m = this.parseFunction(i, e, a) || this.parseSymbol()) && "\\" === u[0] && !vn.hasOwnProperty(u)) {
                                        if (this.settings.throwOnError)
                                            throw new o("Undefined control sequence: " + u,c);
                                        m = this.formatUnsupportedCmd(u),
                                            this.consume()
                                    }
                                    return s && this.switchMode(h),
                                        m
                                }
                                ,
                                e.formLigatures = function(t) {
                                    for (var e = t.length - 1, r = 0; r < e; ++r) {
                                        var a = t[r]
                                            , i = a.text;
                                        "-" === i && "-" === t[r + 1].text && (r + 1 < e && "-" === t[r + 2].text ? (t.splice(r, 3, {
                                            type: "textord",
                                            mode: "text",
                                            loc: n.range(a, t[r + 2]),
                                            text: "---"
                                        }),
                                            e -= 2) : (t.splice(r, 2, {
                                            type: "textord",
                                            mode: "text",
                                            loc: n.range(a, t[r + 1]),
                                            text: "--"
                                        }),
                                            e -= 1)),
                                        "'" !== i && "`" !== i || t[r + 1].text !== i || (t.splice(r, 2, {
                                            type: "textord",
                                            mode: "text",
                                            loc: n.range(a, t[r + 1]),
                                            text: i + i
                                        }),
                                            e -= 1)
                                    }
                                }
                                ,
                                e.parseSymbol = function() {
                                    var t = this.fetch()
                                        , e = t.text;
                                    if (/^\\verb[^a-zA-Z]/.test(e)) {
                                        this.consume();
                                        var r = e.slice(5)
                                            , a = "*" === r.charAt(0);
                                        if (a && (r = r.slice(1)),
                                            r.length < 2 || r.charAt(0) !== r.slice(-1))
                                            throw new o("\\verb assertion failed --\n                    please report what input caused this bug");
                                        return {
                                            type: "verb",
                                            mode: "text",
                                            body: r = r.slice(1, -1),
                                            star: a
                                        }
                                    }
                                    wn.hasOwnProperty(e[0]) && !j[this.mode][e[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + e[0] + '" used in math mode', t),
                                        e = wn[e[0]] + e.substr(1));
                                    var i, s = sn.exec(e);
                                    if (s && ("i" === (e = e.substring(0, s.index)) ? e = "ı" : "j" === e && (e = "ȷ")),
                                            j[this.mode][e]) {
                                        this.settings.strict && "math" === this.mode && "ÇÐÞçþ".indexOf(e) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + e[0] + '" used in math mode', t);
                                        var l, h = j[this.mode][e].group, m = n.range(t);
                                        if (_.hasOwnProperty(h)) {
                                            var c = h;
                                            l = {
                                                type: "atom",
                                                mode: this.mode,
                                                family: c,
                                                loc: m,
                                                text: e
                                            }
                                        } else
                                            l = {
                                                type: h,
                                                mode: this.mode,
                                                loc: m,
                                                text: e
                                            };
                                        i = l
                                    } else {
                                        if (!(e.charCodeAt(0) >= 128))
                                            return null;
                                        this.settings.strict && (M(e.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + e[0] + '" used in math mode', t) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + e[0] + '" (' + e.charCodeAt(0) + ")", t)),
                                            i = {
                                                type: "textord",
                                                mode: "text",
                                                loc: n.range(t),
                                                text: e
                                            }
                                    }
                                    if (this.consume(),
                                            s)
                                        for (var u = 0; u < s[0].length; u++) {
                                            var p = s[0][u];
                                            if (!yn[p])
                                                throw new o("Unknown accent ' " + p + "'",t);
                                            var d = yn[p][this.mode];
                                            if (!d)
                                                throw new o("Accent " + p + " unsupported in " + this.mode + " mode",t);
                                            i = {
                                                type: "accent",
                                                mode: this.mode,
                                                loc: n.range(t),
                                                label: d,
                                                isStretchy: !1,
                                                isShifty: !0,
                                                base: i
                                            }
                                        }
                                    return i
                                }
                                ,
                                t
                        }();
                        kn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"],
                            kn.endOfGroup = {
                                "[": "]",
                                "{": "}",
                                "\\begingroup": "\\endgroup"
                            },
                            kn.SUPSUB_GREEDINESS = 1;
                        var Sn = function(t, e) {
                            if (!("string" == typeof t || t instanceof String))
                                throw new TypeError("KaTeX can only parse string typed expression");
                            var r = new kn(t,e);
                            delete r.gullet.macros.current["\\df@tag"];
                            var n = r.parse();
                            if (r.gullet.macros.get("\\df@tag")) {
                                if (!e.displayMode)
                                    throw new o("\\tag works only in display equations");
                                r.gullet.feed("\\df@tag"),
                                    n = [{
                                        type: "tag",
                                        mode: "text",
                                        body: n,
                                        tag: r.parse()
                                    }]
                            }
                            return n
                        }
                            , Mn = function(t, e, r) {
                            e.textContent = "";
                            var n = An(t, r).toNode();
                            e.appendChild(n)
                        };
                        "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),
                                Mn = function() {
                                    throw new o("KaTeX doesn't work in quirks mode.")
                                }
                        );
                        var zn = function(t, e, r) {
                            if (r.throwOnError || !(t instanceof o))
                                throw t;
                            var n = Dt.makeSpan(["katex-error"], [new E(e)]);
                            return n.setAttribute("title", t.toString()),
                                n.setAttribute("style", "color:" + r.errorColor),
                                n
                        }
                            , An = function(t, e) {
                            var r = new u(e);
                            try {
                                var n = Sn(t, r);
                                return ke(n, t, r)
                            } catch (e) {
                                return zn(e, t, r)
                            }
                        }
                            , Tn = {
                            version: "0.12.0",
                            render: Mn,
                            renderToString: function(t, e) {
                                return An(t, e).toMarkup()
                            },
                            ParseError: o,
                            __parse: function(t, e) {
                                var r = new u(e);
                                return Sn(t, r)
                            },
                            __renderToDomTree: An,
                            __renderToHTMLTree: function(t, e) {
                                var r = new u(e);
                                try {
                                    return function(t, e, r) {
                                        var n = le(t, ye(r))
                                            , a = Dt.makeSpan(["katex"], [n]);
                                        return we(a, r)
                                    }(Sn(t, r), 0, r)
                                } catch (e) {
                                    return zn(e, t, r)
                                }
                            },
                            __setFontMetrics: function(t, e) {
                                F[t] = e
                            },
                            __defineSymbol: $,
                            __defineMacro: un,
                            __domTree: {
                                Span: N,
                                Anchor: I,
                                SymbolNode: E,
                                SvgNode: L,
                                PathNode: P,
                                LineNode: D
                            }
                        };
                        e.default = Tn
                    }
                ]).default
            }
            ,
            t.exports = n()
    },
    475: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(181)
            , a = r.n(n);
        r.d(e, "katex", (function() {
                return a.a
            }
        ))
    }
}));
