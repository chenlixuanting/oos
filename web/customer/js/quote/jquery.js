/*
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function (AW, AO) {
    var Be, Ak, BT = AW.document, Bm = AW.location, Bp = AW.navigator, v = AW.jQuery, Aq = AW.$,
        V = Array.prototype.push, AT = Array.prototype.slice, AA = Array.prototype.indexOf,
        Bk = Object.prototype.toString, AD = Object.prototype.hasOwnProperty, BC = String.prototype.trim,
        Ag = function (BY, e) {
            return new Ag.fn.init(BY, e, Be)
        }, w = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, BV = /\S/, Al = /\s+/,
        BU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Bh = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        X = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, BW = /^[\],:{}\s]*$/, A6 = /(?:^|:|,)(?:\s*\[)+/g,
        Av = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Ah = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, AK = /^-ms-/, A2 = /-([\da-z])/gi,
        Y = function (BY, e) {
            return (e + "").toUpperCase()
        }, BF = function () {
            if (BT.addEventListener) {
                BT.removeEventListener("DOMContentLoaded", BF, false);
                Ag.ready()
            } else {
                if (BT.readyState === "complete") {
                    BT.detachEvent("onreadystatechange", BF);
                    Ag.ready()
                }
            }
        }, m = {};
    Ag.fn = Ag.prototype = {
        constructor: Ag, init: function (B0, BZ, B2) {
            var e, BY, B3, B1;
            if (!B0) {
                return this
            }
            if (B0.nodeType) {
                this.context = this[0] = B0;
                this.length = 1;
                return this
            }
            if (typeof B0 === "string") {
                if (B0.charAt(0) === "<" && B0.charAt(B0.length - 1) === ">" && B0.length >= 3) {
                    e = [null, B0, null]
                } else {
                    e = Bh.exec(B0)
                }
                if (e && (e[1] || !BZ)) {
                    if (e[1]) {
                        BZ = BZ instanceof Ag ? BZ[0] : BZ;
                        B1 = (BZ && BZ.nodeType ? BZ.ownerDocument || BZ : BT);
                        B0 = Ag.parseHTML(e[1], B1, true);
                        if (X.test(e[1]) && Ag.isPlainObject(BZ)) {
                            this.attr.call(B0, BZ, true)
                        }
                        return Ag.merge(this, B0)
                    } else {
                        BY = BT.getElementById(e[2]);
                        if (BY && BY.parentNode) {
                            if (BY.id !== e[2]) {
                                return B2.find(B0)
                            }
                            this.length = 1;
                            this[0] = BY
                        }
                        this.context = BT;
                        this.selector = B0;
                        return this
                    }
                } else {
                    if (!BZ || BZ.jquery) {
                        return (BZ || B2).find(B0)
                    } else {
                        return this.constructor(BZ).find(B0)
                    }
                }
            } else {
                if (Ag.isFunction(B0)) {
                    return B2.ready(B0)
                }
            }
            if (B0.selector !== AO) {
                this.selector = B0.selector;
                this.context = B0.context
            }
            return Ag.makeArray(B0, this)
        }, selector: "", jquery: "1.8.3", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return AT.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        }, pushStack: function (B0, e, BZ) {
            var BY = Ag.merge(this.constructor(), B0);
            BY.prevObject = this;
            BY.context = this.context;
            if (e === "find") {
                BY.selector = this.selector + (this.selector ? " " : "") + BZ
            } else {
                if (e) {
                    BY.selector = this.selector + "." + e + "(" + BZ + ")"
                }
            }
            return BY
        }, each: function (BY, e) {
            return Ag.each(this, BY, e)
        }, ready: function (e) {
            Ag.ready.promise().done(e);
            return this
        }, eq: function (e) {
            e = +e;
            return e === -1 ? this.slice(e) : this.slice(e, e + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(AT.apply(this, arguments), "slice", AT.call(arguments).join(","))
        }, map: function (e) {
            return this.pushStack(Ag.map(this, function (BY, BZ) {
                return e.call(BY, BZ, BY)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: V, sort: [].sort, splice: [].splice
    };
    Ag.fn.init.prototype = Ag.fn;
    Ag.extend = Ag.fn.extend = function () {
        var e, B1, B5, B0, B3, B6, BY = arguments[0] || {}, B4 = 1, B2 = arguments.length, BZ = false;
        if (typeof BY === "boolean") {
            BZ = BY;
            BY = arguments[1] || {};
            B4 = 2
        }
        if (typeof BY !== "object" && !Ag.isFunction(BY)) {
            BY = {}
        }
        if (B2 === B4) {
            BY = this;
            --B4
        }
        for (; B4 < B2; B4++) {
            if ((e = arguments[B4]) != null) {
                for (B1 in e) {
                    B5 = BY[B1];
                    B0 = e[B1];
                    if (BY === B0) {
                        continue
                    }
                    if (BZ && B0 && (Ag.isPlainObject(B0) || (B3 = Ag.isArray(B0)))) {
                        if (B3) {
                            B3 = false;
                            B6 = B5 && Ag.isArray(B5) ? B5 : []
                        } else {
                            B6 = B5 && Ag.isPlainObject(B5) ? B5 : {}
                        }
                        BY[B1] = Ag.extend(BZ, B6, B0)
                    } else {
                        if (B0 !== AO) {
                            BY[B1] = B0
                        }
                    }
                }
            }
        }
        return BY
    };
    Ag.extend({
        noConflict: function (e) {
            if (AW.$ === Ag) {
                AW.$ = Aq
            }
            if (e && AW.jQuery === Ag) {
                AW.jQuery = v
            }
            return Ag
        }, isReady: false, readyWait: 1, holdReady: function (e) {
            if (e) {
                Ag.readyWait++
            } else {
                Ag.ready(true)
            }
        }, ready: function (e) {
            if (e === true ? --Ag.readyWait : Ag.isReady) {
                return
            }
            if (!BT.body) {
                return setTimeout(Ag.ready, 1)
            }
            Ag.isReady = true;
            if (e !== true && --Ag.readyWait > 0) {
                return
            }
            Ak.resolveWith(BT, [Ag]);
            if (Ag.fn.trigger) {
                Ag(BT).trigger("ready").off("ready")
            }
        }, isFunction: function (e) {
            return Ag.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return Ag.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return e == null ? String(e) : m[Bk.call(e)] || "object"
        }, isPlainObject: function (B0) {
            if (!B0 || Ag.type(B0) !== "object" || B0.nodeType || Ag.isWindow(B0)) {
                return false
            }
            try {
                if (B0.constructor && !AD.call(B0, "constructor") && !AD.call(B0.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (BZ) {
                return false
            }
            var BY;
            for (BY in B0) {
            }
            return BY === AO || AD.call(B0, BY)
        }, isEmptyObject: function (BY) {
            var e;
            for (e in BY) {
                return false
            }
            return true
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (B0, e, BY) {
            var BZ;
            if (!B0 || typeof B0 !== "string") {
                return null
            }
            if (typeof e === "boolean") {
                BY = e;
                e = 0
            }
            e = e || BT;
            if ((BZ = X.exec(B0))) {
                return [e.createElement(BZ[1])]
            }
            BZ = Ag.buildFragment([B0], e, BY ? null : []);
            return Ag.merge([], (BZ.cacheable ? Ag.clone(BZ.fragment) : BZ.fragment).childNodes)
        }, parseJSON: function (e) {
            if (!e || typeof e !== "string") {
                return null
            }
            e = Ag.trim(e);
            if (AW.JSON && AW.JSON.parse) {
                return AW.JSON.parse(e)
            }
            if (BW.test(e.replace(Av, "@").replace(Ah, "]").replace(A6, ""))) {
                return (new Function("return " + e))()
            }
            Ag.error("Invalid JSON: " + e)
        }, parseXML: function (B1) {
            var BY, BZ;
            if (!B1 || typeof B1 !== "string") {
                return null
            }
            try {
                if (AW.DOMParser) {
                    BZ = new DOMParser();
                    BY = BZ.parseFromString(B1, "text/xml")
                } else {
                    BY = new ActiveXObject("Microsoft.XMLDOM");
                    BY.async = "false";
                    BY.loadXML(B1)
                }
            } catch (B0) {
                BY = AO
            }
            if (!BY || !BY.documentElement || BY.getElementsByTagName("parsererror").length) {
                Ag.error("Invalid XML: " + B1)
            }
            return BY
        }, noop: function () {
        }, globalEval: function (e) {
            if (e && BV.test(e)) {
                (AW.execScript || function (BY) {
                    AW["eval"].call(AW, BY)
                })(e)
            }
        }, camelCase: function (e) {
            return e.replace(AK, "ms-").replace(A2, Y)
        }, nodeName: function (BY, e) {
            return BY.nodeName && BY.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (B3, e, BY) {
            var B0, BZ = 0, B2 = B3.length, B1 = B2 === AO || Ag.isFunction(B3);
            if (BY) {
                if (B1) {
                    for (B0 in B3) {
                        if (e.apply(B3[B0], BY) === false) {
                            break
                        }
                    }
                } else {
                    for (; BZ < B2;) {
                        if (e.apply(B3[BZ++], BY) === false) {
                            break
                        }
                    }
                }
            } else {
                if (B1) {
                    for (B0 in B3) {
                        if (e.call(B3[B0], B0, B3[B0]) === false) {
                            break
                        }
                    }
                } else {
                    for (; BZ < B2;) {
                        if (e.call(B3[BZ], BZ, B3[BZ++]) === false) {
                            break
                        }
                    }
                }
            }
            return B3
        }, trim: BC && !BC.call("\uFEFF\xA0") ? function (e) {
            return e == null ? "" : BC.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(BU, "")
        }, makeArray: function (e, BZ) {
            var BY, B0 = BZ || [];
            if (e != null) {
                BY = Ag.type(e);
                if (e.length == null || BY === "string" || BY === "function" || BY === "regexp" || Ag.isWindow(e)) {
                    V.call(B0, e)
                } else {
                    Ag.merge(B0, e)
                }
            }
            return B0
        }, inArray: function (BZ, BY, B0) {
            var e;
            if (BY) {
                if (AA) {
                    return AA.call(BY, BZ, B0)
                }
                e = BY.length;
                B0 = B0 ? B0 < 0 ? Math.max(0, e + B0) : B0 : 0;
                for (; B0 < e; B0++) {
                    if (B0 in BY && BY[B0] === BZ) {
                        return B0
                    }
                }
            }
            return -1
        }, merge: function (e, BY) {
            var B1 = BY.length, BZ = e.length, B0 = 0;
            if (typeof B1 === "number") {
                for (; B0 < B1; B0++) {
                    e[BZ++] = BY[B0]
                }
            } else {
                while (BY[B0] !== AO) {
                    e[BZ++] = BY[B0++]
                }
            }
            e.length = BZ;
            return e
        }, grep: function (B3, e, BY) {
            var BZ, B0 = [], B1 = 0, B2 = B3.length;
            BY = !!BY;
            for (; B1 < B2; B1++) {
                BZ = !!e(B3[B1], B1);
                if (BY !== BZ) {
                    B0.push(B3[B1])
                }
            }
            return B0
        }, map: function (B1, B5, BZ) {
            var B0, B4, BY = [], e = 0, B3 = B1.length,
                B2 = B1 instanceof Ag || B3 !== AO && typeof B3 === "number" && ((B3 > 0 && B1[0] && B1[B3 - 1]) || B3 === 0 || Ag.isArray(B1));
            if (B2) {
                for (; e < B3; e++) {
                    B0 = B5(B1[e], e, BZ);
                    if (B0 != null) {
                        BY[BY.length] = B0
                    }
                }
            } else {
                for (B4 in B1) {
                    B0 = B5(B1[B4], B4, BZ);
                    if (B0 != null) {
                        BY[BY.length] = B0
                    }
                }
            }
            return BY.concat.apply([], BY)
        }, guid: 1, proxy: function (e, BZ) {
            var B1, BY, B0;
            if (typeof BZ === "string") {
                B1 = e[BZ];
                BZ = e;
                e = B1
            }
            if (!Ag.isFunction(e)) {
                return AO
            }
            BY = AT.call(arguments, 2);
            B0 = function () {
                return e.apply(BZ, BY.concat(AT.call(arguments)))
            };
            B0.guid = e.guid = e.guid || Ag.guid++;
            return B0
        }, access: function (B2, B7, BZ, B0, B5, BY, B6) {
            var B4, B1 = BZ == null, e = 0, B3 = B2.length;
            if (BZ && typeof BZ === "object") {
                for (e in BZ) {
                    Ag.access(B2, B7, e, BZ[e], 1, BY, B0)
                }
                B5 = 1
            } else {
                if (B0 !== AO) {
                    B4 = B6 === AO && Ag.isFunction(B0);
                    if (B1) {
                        if (B4) {
                            B4 = B7;
                            B7 = function (Ca, B9, B8) {
                                return B4.call(Ag(Ca), B8)
                            }
                        } else {
                            B7.call(B2, B0);
                            B7 = null
                        }
                    }
                    if (B7) {
                        for (; e < B3; e++) {
                            B7(B2[e], BZ, B4 ? B0.call(B2[e], e, B7(B2[e], BZ)) : B0, B6)
                        }
                    }
                    B5 = 1
                }
            }
            return B5 ? B2 : B1 ? B7.call(B2) : B3 ? B7(B2[0], BZ) : BY
        }, now: function () {
            return (new Date()).getTime()
        }
    });
    Ag.ready.promise = function (B1) {
        if (!Ak) {
            Ak = Ag.Deferred();
            if (BT.readyState === "complete") {
                setTimeout(Ag.ready, 1)
            } else {
                if (BT.addEventListener) {
                    BT.addEventListener("DOMContentLoaded", BF, false);
                    AW.addEventListener("load", Ag.ready, false)
                } else {
                    BT.attachEvent("onreadystatechange", BF);
                    AW.attachEvent("onload", Ag.ready);
                    var BY = false;
                    try {
                        BY = AW.frameElement == null && BT.documentElement
                    } catch (BZ) {
                    }
                    if (BY && BY.doScroll) {
                        (function B0() {
                            if (!Ag.isReady) {
                                try {
                                    BY.doScroll("left")
                                } catch (B2) {
                                    return setTimeout(B0, 50)
                                }
                                Ag.ready()
                            }
                        })()
                    }
                }
            }
        }
        return Ak.promise(B1)
    };
    Ag.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (BY, e) {
        m["[object " + e + "]"] = e.toLowerCase()
    });
    Be = Ag(BT);
    var Br = {};

    function Aj(BY) {
        var e = Br[BY] = {};
        Ag.each(BY.split(Al), function (B0, BZ) {
            e[BZ] = true
        });
        return e
    }

    Ag.Callbacks = function (e) {
        e = typeof e === "string" ? (Br[e] || Aj(e)) : Ag.extend({}, e);
        var BY, BZ, B3, B5, B1, B4, B2 = [], B6 = !e.once && [], B0 = function (B8) {
            BY = e.memory && B8;
            BZ = true;
            B4 = B5 || 0;
            B5 = 0;
            B1 = B2.length;
            B3 = true;
            for (; B2 && B4 < B1; B4++) {
                if (B2[B4].apply(B8[0], B8[1]) === false && e.stopOnFalse) {
                    BY = false;
                    break
                }
            }
            B3 = false;
            if (B2) {
                if (B6) {
                    if (B6.length) {
                        B0(B6.shift())
                    }
                } else {
                    if (BY) {
                        B2 = []
                    } else {
                        B7.disable()
                    }
                }
            }
        }, B7 = {
            add: function () {
                if (B2) {
                    var B9 = B2.length;
                    (function B8(Ca) {
                        Ag.each(Ca, function (Cd, Cb) {
                            var Cc = Ag.type(Cb);
                            if (Cc === "function") {
                                if (!e.unique || !B7.has(Cb)) {
                                    B2.push(Cb)
                                }
                            } else {
                                if (Cb && Cb.length && Cc !== "string") {
                                    B8(Cb)
                                }
                            }
                        })
                    })(arguments);
                    if (B3) {
                        B1 = B2.length
                    } else {
                        if (BY) {
                            B5 = B9;
                            B0(BY)
                        }
                    }
                }
                return this
            }, remove: function () {
                if (B2) {
                    Ag.each(arguments, function (Ca, B8) {
                        var B9;
                        while ((B9 = Ag.inArray(B8, B2, B9)) > -1) {
                            B2.splice(B9, 1);
                            if (B3) {
                                if (B9 <= B1) {
                                    B1--
                                }
                                if (B9 <= B4) {
                                    B4--
                                }
                            }
                        }
                    })
                }
                return this
            }, has: function (B8) {
                return Ag.inArray(B8, B2) > -1
            }, empty: function () {
                B2 = [];
                return this
            }, disable: function () {
                B2 = B6 = BY = AO;
                return this
            }, disabled: function () {
                return !B2
            }, lock: function () {
                B6 = AO;
                if (!BY) {
                    B7.disable()
                }
                return this
            }, locked: function () {
                return !B6
            }, fireWith: function (B9, B8) {
                B8 = B8 || [];
                B8 = [B9, B8.slice ? B8.slice() : B8];
                if (B2 && (!BZ || B6)) {
                    if (B3) {
                        B6.push(B8)
                    } else {
                        B0(B8)
                    }
                }
                return this
            }, fire: function () {
                B7.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!BZ
            }
        };
        return B7
    };
    Ag.extend({
        Deferred: function (B1) {
            var BZ = [["resolve", "done", Ag.Callbacks("once memory"), "resolved"], ["reject", "fail", Ag.Callbacks("once memory"), "rejected"], ["notify", "progress", Ag.Callbacks("memory")]],
                e = "pending", BY = {
                    state: function () {
                        return e
                    }, always: function () {
                        B0.done(arguments).fail(arguments);
                        return this
                    }, then: function () {
                        var B2 = arguments;
                        return Ag.Deferred(function (B3) {
                            Ag.each(BZ, function (B6, B5) {
                                var B7 = B5[0], B4 = B2[B6];
                                B0[B5[1]](Ag.isFunction(B4) ? function () {
                                    var B8 = B4.apply(this, arguments);
                                    if (B8 && Ag.isFunction(B8.promise)) {
                                        B8.promise().done(B3.resolve).fail(B3.reject).progress(B3.notify)
                                    } else {
                                        B3[B7 + "With"](this === B0 ? B3 : this, [B8])
                                    }
                                } : B3[B7])
                            });
                            B2 = null
                        }).promise()
                    }, promise: function (B2) {
                        return B2 != null ? Ag.extend(B2, BY) : BY
                    }
                }, B0 = {};
            BY.pipe = BY.then;
            Ag.each(BZ, function (B4, B2) {
                var B3 = B2[2], B5 = B2[3];
                BY[B2[1]] = B3.add;
                if (B5) {
                    B3.add(function () {
                        e = B5
                    }, BZ[B4 ^ 1][2].disable, BZ[2][2].lock)
                }
                B0[B2[0]] = B3.fire;
                B0[B2[0] + "With"] = B3.fireWith
            });
            BY.promise(B0);
            if (B1) {
                B1.call(B0, B0)
            }
            return B0
        }, when: function (B0) {
            var e = 0, B2 = AT.call(arguments), B3 = B2.length,
                B4 = B3 !== 1 || (B0 && Ag.isFunction(B0.promise)) ? B3 : 0, B1 = B4 === 1 ? B0 : Ag.Deferred(),
                BY = function (B8, B7, B9) {
                    return function (Ca) {
                        B7[B8] = this;
                        B9[B8] = arguments.length > 1 ? AT.call(arguments) : Ca;
                        if (B9 === B6) {
                            B1.notifyWith(B7, B9)
                        } else {
                            if (!(--B4)) {
                                B1.resolveWith(B7, B9)
                            }
                        }
                    }
                }, B6, BZ, B5;
            if (B3 > 1) {
                B6 = new Array(B3);
                BZ = new Array(B3);
                B5 = new Array(B3);
                for (; e < B3; e++) {
                    if (B2[e] && Ag.isFunction(B2[e].promise)) {
                        B2[e].promise().done(BY(e, B5, B2)).fail(B1.reject).progress(BY(e, BZ, B6))
                    } else {
                        --B4
                    }
                }
            }
            if (!B4) {
                B1.resolveWith(B5, B2)
            }
            return B1.promise()
        }
    });
    Ag.support = (function () {
        var B5, B7, B2, B8, B3, B4, BZ, BY, B0, B6, B9, Ca = BT.createElement("div");
        Ca.setAttribute("className", "t");
        Ca.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        B7 = Ca.getElementsByTagName("*");
        B2 = Ca.getElementsByTagName("a")[0];
        if (!B7 || !B2 || !B7.length) {
            return {}
        }
        B8 = BT.createElement("select");
        B3 = B8.appendChild(BT.createElement("option"));
        B4 = Ca.getElementsByTagName("input")[0];
        B2.style.cssText = "top:1px;float:left;opacity:.5";
        B5 = {
            leadingWhitespace: (Ca.firstChild.nodeType === 3),
            tbody: !Ca.getElementsByTagName("tbody").length,
            htmlSerialize: !!Ca.getElementsByTagName("link").length,
            style: /top/.test(B2.getAttribute("style")),
            hrefNormalized: (B2.getAttribute("href") === "/a"),
            opacity: /^0.5/.test(B2.style.opacity),
            cssFloat: !!B2.style.cssFloat,
            checkOn: (B4.value === "on"),
            optSelected: B3.selected,
            getSetAttribute: Ca.className !== "t",
            enctype: !!BT.createElement("form").enctype,
            html5Clone: BT.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            boxModel: (BT.compatMode === "CSS1Compat"),
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true,
            boxSizingReliable: true,
            pixelPosition: false
        };
        B4.checked = true;
        B5.noCloneChecked = B4.cloneNode(true).checked;
        B8.disabled = true;
        B5.optDisabled = !B3.disabled;
        try {
            delete Ca.test
        } catch (B1) {
            B5.deleteExpando = false
        }
        if (!Ca.addEventListener && Ca.attachEvent && Ca.fireEvent) {
            Ca.attachEvent("onclick", B9 = function () {
                B5.noCloneEvent = false
            });
            Ca.cloneNode(true).fireEvent("onclick");
            Ca.detachEvent("onclick", B9)
        }
        B4 = BT.createElement("input");
        B4.value = "t";
        B4.setAttribute("type", "radio");
        B5.radioValue = B4.value === "t";
        B4.setAttribute("checked", "checked");
        B4.setAttribute("name", "t");
        Ca.appendChild(B4);
        BZ = BT.createDocumentFragment();
        BZ.appendChild(Ca.lastChild);
        B5.checkClone = BZ.cloneNode(true).cloneNode(true).lastChild.checked;
        B5.appendChecked = B4.checked;
        BZ.removeChild(B4);
        BZ.appendChild(Ca);
        if (Ca.attachEvent) {
            for (B0 in {submit: true, change: true, focusin: true}) {
                BY = "on" + B0;
                B6 = (BY in Ca);
                if (!B6) {
                    Ca.setAttribute(BY, "return;");
                    B6 = (typeof Ca[BY] === "function")
                }
                B5[B0 + "Bubbles"] = B6
            }
        }
        Ag(function () {
            var Cc, Cb, Cf, Cd, Ce = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                e = BT.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            Cc = BT.createElement("div");
            Cc.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            e.insertBefore(Cc, e.firstChild);
            Cb = BT.createElement("div");
            Cc.appendChild(Cb);
            Cb.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            Cf = Cb.getElementsByTagName("td");
            Cf[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            B6 = (Cf[0].offsetHeight === 0);
            Cf[0].style.display = "";
            Cf[1].style.display = "none";
            B5.reliableHiddenOffsets = B6 && (Cf[0].offsetHeight === 0);
            Cb.innerHTML = "";
            Cb.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            B5.boxSizing = (Cb.offsetWidth === 4);
            B5.doesNotIncludeMarginInBodyOffset = (e.offsetTop !== 1);
            if (AW.getComputedStyle) {
                B5.pixelPosition = (AW.getComputedStyle(Cb, null) || {}).top !== "1%";
                B5.boxSizingReliable = (AW.getComputedStyle(Cb, null) || {width: "4px"}).width === "4px";
                Cd = BT.createElement("div");
                Cd.style.cssText = Cb.style.cssText = Ce;
                Cd.style.marginRight = Cd.style.width = "0";
                Cb.style.width = "1px";
                Cb.appendChild(Cd);
                B5.reliableMarginRight = !parseFloat((AW.getComputedStyle(Cd, null) || {}).marginRight)
            }
            if (typeof Cb.style.zoom !== "undefined") {
                Cb.innerHTML = "";
                Cb.style.cssText = Ce + "width:1px;padding:1px;display:inline;zoom:1";
                B5.inlineBlockNeedsLayout = (Cb.offsetWidth === 3);
                Cb.style.display = "block";
                Cb.style.overflow = "visible";
                Cb.innerHTML = "<div></div>";
                Cb.firstChild.style.width = "5px";
                B5.shrinkWrapBlocks = (Cb.offsetWidth !== 3);
                Cc.style.zoom = 1
            }
            e.removeChild(Cc);
            Cc = Cb = Cf = Cd = null
        });
        BZ.removeChild(Ca);
        B7 = B2 = B8 = B3 = B4 = BZ = Ca = null;
        return B5
    })();
    var U = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, T = /([A-Z])/g;
    Ag.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (Ag.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {"embed": true, "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "applet": true},
        hasData: function (e) {
            e = e.nodeType ? Ag.cache[e[Ag.expando]] : e[Ag.expando];
            return !!e && !C(e)
        },
        data: function (B7, B2, B1, BZ) {
            if (!Ag.acceptData(B7)) {
                return
            }
            var B5, BY, B4 = Ag.expando, e = typeof B2 === "string", B3 = B7.nodeType, B6 = B3 ? Ag.cache : B7,
                B0 = B3 ? B7[B4] : B7[B4] && B4;
            if ((!B0 || !B6[B0] || (!BZ && !B6[B0].data)) && e && B1 === AO) {
                return
            }
            if (!B0) {
                if (B3) {
                    B7[B4] = B0 = Ag.deletedIds.pop() || Ag.guid++
                } else {
                    B0 = B4
                }
            }
            if (!B6[B0]) {
                B6[B0] = {};
                if (!B3) {
                    B6[B0].toJSON = Ag.noop
                }
            }
            if (typeof B2 === "object" || typeof B2 === "function") {
                if (BZ) {
                    B6[B0] = Ag.extend(B6[B0], B2)
                } else {
                    B6[B0].data = Ag.extend(B6[B0].data, B2)
                }
            }
            B5 = B6[B0];
            if (!BZ) {
                if (!B5.data) {
                    B5.data = {}
                }
                B5 = B5.data
            }
            if (B1 !== AO) {
                B5[Ag.camelCase(B2)] = B1
            }
            if (e) {
                BY = B5[B2];
                if (BY == null) {
                    BY = B5[Ag.camelCase(B2)]
                }
            } else {
                BY = B5
            }
            return BY
        },
        removeData: function (B5, B1, B0) {
            if (!Ag.acceptData(B5)) {
                return
            }
            var B2, e, BZ, B3 = B5.nodeType, B4 = B3 ? Ag.cache : B5, BY = B3 ? B5[Ag.expando] : Ag.expando;
            if (!B4[BY]) {
                return
            }
            if (B1) {
                B2 = B0 ? B4[BY] : B4[BY].data;
                if (B2) {
                    if (!Ag.isArray(B1)) {
                        if (B1 in B2) {
                            B1 = [B1]
                        } else {
                            B1 = Ag.camelCase(B1);
                            if (B1 in B2) {
                                B1 = [B1]
                            } else {
                                B1 = B1.split(" ")
                            }
                        }
                    }
                    for (e = 0, BZ = B1.length; e < BZ; e++) {
                        delete B2[B1[e]]
                    }
                    if (!(B0 ? C : Ag.isEmptyObject)(B2)) {
                        return
                    }
                }
            }
            if (!B0) {
                delete B4[BY].data;
                if (!C(B4[BY])) {
                    return
                }
            }
            if (B3) {
                Ag.cleanData([B5], true)
            } else {
                if (Ag.support.deleteExpando || B4 != B4.window) {
                    delete B4[BY]
                } else {
                    B4[BY] = null
                }
            }
        },
        _data: function (BY, e, BZ) {
            return Ag.data(BY, e, BZ, true)
        },
        acceptData: function (e) {
            var BY = e.nodeName && Ag.noData[e.nodeName.toLowerCase()];
            return !BY || BY !== true && e.getAttribute("classid") === BY
        }
    });
    Ag.fn.extend({
        data: function (B6, B1) {
            var B4, B2, BZ, B3, BY, B5 = this[0], e = 0, B0 = null;
            if (B6 === AO) {
                if (this.length) {
                    B0 = Ag.data(B5);
                    if (B5.nodeType === 1 && !Ag._data(B5, "parsedAttrs")) {
                        BZ = B5.attributes;
                        for (BY = BZ.length; e < BY; e++) {
                            B3 = BZ[e].name;
                            if (!B3.indexOf("data-")) {
                                B3 = Ag.camelCase(B3.substring(5));
                                AN(B5, B3, B0[B3])
                            }
                        }
                        Ag._data(B5, "parsedAttrs", true)
                    }
                }
                return B0
            }
            if (typeof B6 === "object") {
                return this.each(function () {
                    Ag.data(this, B6)
                })
            }
            B4 = B6.split(".", 2);
            B4[1] = B4[1] ? "." + B4[1] : "";
            B2 = B4[1] + "!";
            return Ag.access(this, function (B7) {
                if (B7 === AO) {
                    B0 = this.triggerHandler("getData" + B2, [B4[0]]);
                    if (B0 === AO && B5) {
                        B0 = Ag.data(B5, B6);
                        B0 = AN(B5, B6, B0)
                    }
                    return B0 === AO && B4[1] ? this.data(B4[0]) : B0
                }
                B4[1] = B7;
                this.each(function () {
                    var B8 = Ag(this);
                    B8.triggerHandler("setData" + B2, B4);
                    Ag.data(this, B6, B7);
                    B8.triggerHandler("changeData" + B2, B4)
                })
            }, null, B1, arguments.length > 1, null, false)
        }, removeData: function (e) {
            return this.each(function () {
                Ag.removeData(this, e)
            })
        }
    });
    function AN(B0, BZ, B2) {
        if (B2 === AO && B0.nodeType === 1) {
            var BY = "data-" + BZ.replace(T, "-$1").toLowerCase();
            B2 = B0.getAttribute(BY);
            if (typeof B2 === "string") {
                try {
                    B2 = B2 === "true" ? true : B2 === "false" ? false : B2 === "null" ? null : +B2 + "" === B2 ? +B2 : U.test(B2) ? Ag.parseJSON(B2) : B2
                } catch (B1) {
                }
                Ag.data(B0, BZ, B2)
            } else {
                B2 = AO
            }
        }
        return B2
    }

    function C(BY) {
        var e;
        for (e in BY) {
            if (e === "data" && Ag.isEmptyObject(BY[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }

    Ag.extend({
        queue: function (e, BY, B0) {
            var BZ;
            if (e) {
                BY = (BY || "fx") + "queue";
                BZ = Ag._data(e, BY);
                if (B0) {
                    if (!BZ || Ag.isArray(B0)) {
                        BZ = Ag._data(e, BY, Ag.makeArray(B0))
                    } else {
                        BZ.push(B0)
                    }
                }
                return BZ || []
            }
        }, dequeue: function (BZ, B0) {
            B0 = B0 || "fx";
            var B1 = Ag.queue(BZ, B0), B3 = B1.length, e = B1.shift(), B2 = Ag._queueHooks(BZ, B0), BY = function () {
                Ag.dequeue(BZ, B0)
            };
            if (e === "inprogress") {
                e = B1.shift();
                B3--
            }
            if (e) {
                if (B0 === "fx") {
                    B1.unshift("inprogress")
                }
                delete B2.stop;
                e.call(BZ, BY, B2)
            }
            if (!B3 && B2) {
                B2.empty.fire()
            }
        }, _queueHooks: function (BY, BZ) {
            var e = BZ + "queueHooks";
            return Ag._data(BY, e) || Ag._data(BY, e, {
                    empty: Ag.Callbacks("once memory").add(function () {
                        Ag.removeData(BY, BZ + "queue", true);
                        Ag.removeData(BY, e, true)
                    })
                })
        }
    });
    Ag.fn.extend({
        queue: function (e, BZ) {
            var BY = 2;
            if (typeof e !== "string") {
                BZ = e;
                e = "fx";
                BY--
            }
            if (arguments.length < BY) {
                return Ag.queue(this[0], e)
            }
            return BZ === AO ? this : this.each(function () {
                var B0 = Ag.queue(this, e, BZ);
                Ag._queueHooks(this, e);
                if (e === "fx" && B0[0] !== "inprogress") {
                    Ag.dequeue(this, e)
                }
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Ag.dequeue(this, e)
            })
        }, delay: function (BY, e) {
            BY = Ag.fx ? Ag.fx.speeds[BY] || BY : BY;
            e = e || "fx";
            return this.queue(e, function (B1, BZ) {
                var B0 = setTimeout(B1, BY);
                BZ.stop = function () {
                    clearTimeout(B0)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (BZ, e) {
            var B0, B3 = 1, B4 = Ag.Deferred(), BY = this, B2 = this.length, B1 = function () {
                if (!(--B3)) {
                    B4.resolveWith(BY, [BY])
                }
            };
            if (typeof BZ !== "string") {
                e = BZ;
                BZ = AO
            }
            BZ = BZ || "fx";
            while (B2--) {
                B0 = Ag._data(BY[B2], BZ + "queueHooks");
                if (B0 && B0.empty) {
                    B3++;
                    B0.empty.add(B1)
                }
            }
            B1();
            return B4.promise(e)
        }
    });
    var An, L, Bw, D = /[\t\r\n]/g, BB = /\r/g, G = /^(?:button|input)$/i,
        Bo = /^(?:button|input|object|select|textarea)$/i, k = /^a(?:rea|)$/i,
        M = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = Ag.support.getSetAttribute;
    Ag.fn.extend({
        attr: function (e, BY) {
            return Ag.access(this, Ag.attr, e, BY, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Ag.removeAttr(this, e)
            })
        }, prop: function (e, BY) {
            return Ag.access(this, Ag.prop, e, BY, arguments.length > 1)
        }, removeProp: function (e) {
            e = Ag.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = AO;
                    delete this[e]
                } catch (BY) {
                }
            })
        }, addClass: function (B0) {
            var BY, e, BZ, B4, B3, B2, B1;
            if (Ag.isFunction(B0)) {
                return this.each(function (B5) {
                    Ag(this).addClass(B0.call(this, B5, this.className))
                })
            }
            if (B0 && typeof B0 === "string") {
                BY = B0.split(Al);
                for (e = 0, BZ = this.length; e < BZ; e++) {
                    B4 = this[e];
                    if (B4.nodeType === 1) {
                        if (!B4.className && BY.length === 1) {
                            B4.className = B0
                        } else {
                            B3 = " " + B4.className + " ";
                            for (B2 = 0, B1 = BY.length; B2 < B1; B2++) {
                                if (B3.indexOf(" " + BY[B2] + " ") < 0) {
                                    B3 += BY[B2] + " "
                                }
                            }
                            B4.className = Ag.trim(B3)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (BZ) {
            var B2, B4, B3, B1, B0, e, BY;
            if (Ag.isFunction(BZ)) {
                return this.each(function (B5) {
                    Ag(this).removeClass(BZ.call(this, B5, this.className))
                })
            }
            if ((BZ && typeof BZ === "string") || BZ === AO) {
                B2 = (BZ || "").split(Al);
                for (e = 0, BY = this.length; e < BY; e++) {
                    B3 = this[e];
                    if (B3.nodeType === 1 && B3.className) {
                        B4 = (" " + B3.className + " ").replace(D, " ");
                        for (B1 = 0, B0 = B2.length; B1 < B0; B1++) {
                            while (B4.indexOf(" " + B2[B1] + " ") >= 0) {
                                B4 = B4.replace(" " + B2[B1] + " ", " ")
                            }
                        }
                        B3.className = BZ ? Ag.trim(B4) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (e, BY) {
            var BZ = typeof e, B0 = typeof BY === "boolean";
            if (Ag.isFunction(e)) {
                return this.each(function (B1) {
                    Ag(this).toggleClass(e.call(this, B1, this.className, BY), BY)
                })
            }
            return this.each(function () {
                if (BZ === "string") {
                    var B2, B4 = 0, B3 = Ag(this), B1 = BY, B5 = e.split(Al);
                    while ((B2 = B5[B4++])) {
                        B1 = B0 ? B1 : !B3.hasClass(B2);
                        B3[B1 ? "addClass" : "removeClass"](B2)
                    }
                } else {
                    if (BZ === "undefined" || BZ === "boolean") {
                        if (this.className) {
                            Ag._data(this, "__className__", this.className)
                        }
                        this.className = this.className || e === false ? "" : Ag._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (BY) {
            var e = " " + BY + " ", BZ = 0, B0 = this.length;
            for (; BZ < B0; BZ++) {
                if (this[BZ].nodeType === 1 && (" " + this[BZ].className + " ").replace(D, " ").indexOf(e) >= 0) {
                    return true
                }
            }
            return false
        }, val: function (e) {
            var B0, B1, BZ, BY = this[0];
            if (!arguments.length) {
                if (BY) {
                    B0 = Ag.valHooks[BY.type] || Ag.valHooks[BY.nodeName.toLowerCase()];
                    if (B0 && "get" in B0 && (B1 = B0.get(BY, "value")) !== AO) {
                        return B1
                    }
                    B1 = BY.value;
                    return typeof B1 === "string" ? B1.replace(BB, "") : B1 == null ? "" : B1
                }
                return
            }
            BZ = Ag.isFunction(e);
            return this.each(function (B3) {
                var B4, B2 = Ag(this);
                if (this.nodeType !== 1) {
                    return
                }
                if (BZ) {
                    B4 = e.call(this, B3, B2.val())
                } else {
                    B4 = e
                }
                if (B4 == null) {
                    B4 = ""
                } else {
                    if (typeof B4 === "number") {
                        B4 += ""
                    } else {
                        if (Ag.isArray(B4)) {
                            B4 = Ag.map(B4, function (B5) {
                                return B5 == null ? "" : B5 + ""
                            })
                        }
                    }
                }
                B0 = Ag.valHooks[this.type] || Ag.valHooks[this.nodeName.toLowerCase()];
                if (!B0 || !("set" in B0) || B0.set(this, B4, "value") === AO) {
                    this.value = B4
                }
            })
        }
    });
    Ag.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var BY = e.attributes.value;
                    return !BY || BY.specified ? e.value : e.text
                }
            }, select: {
                get: function (B4) {
                    var BY, B1, e = B4.options, BZ = B4.selectedIndex, B3 = B4.type === "select-one" || BZ < 0,
                        B0 = B3 ? null : [], B5 = B3 ? BZ + 1 : e.length, B2 = BZ < 0 ? B5 : B3 ? BZ : 0;
                    for (; B2 < B5; B2++) {
                        B1 = e[B2];
                        if ((B1.selected || B2 === BZ) && (Ag.support.optDisabled ? !B1.disabled : B1.getAttribute("disabled") === null) && (!B1.parentNode.disabled || !Ag.nodeName(B1.parentNode, "optgroup"))) {
                            BY = Ag(B1).val();
                            if (B3) {
                                return BY
                            }
                            B0.push(BY)
                        }
                    }
                    return B0
                }, set: function (BY, e) {
                    var BZ = Ag.makeArray(e);
                    Ag(BY).find("option").each(function () {
                        this.selected = Ag.inArray(Ag(this).val(), BZ) >= 0
                    });
                    if (!BZ.length) {
                        BY.selectedIndex = -1
                    }
                    return BZ
                }
            }
        },
        attrFn: {},
        attr: function (B1, BY, B0, B4) {
            var BZ, e, B2, B3 = B1.nodeType;
            if (!B1 || B3 === 3 || B3 === 8 || B3 === 2) {
                return
            }
            if (B4 && Ag.isFunction(Ag.fn[BY])) {
                return Ag(B1)[BY](B0)
            }
            if (typeof B1.getAttribute === "undefined") {
                return Ag.prop(B1, BY, B0)
            }
            B2 = B3 !== 1 || !Ag.isXMLDoc(B1);
            if (B2) {
                BY = BY.toLowerCase();
                e = Ag.attrHooks[BY] || (M.test(BY) ? L : An)
            }
            if (B0 !== AO) {
                if (B0 === null) {
                    Ag.removeAttr(B1, BY);
                    return
                } else {
                    if (e && "set" in e && B2 && (BZ = e.set(B1, B0, BY)) !== AO) {
                        return BZ
                    } else {
                        B1.setAttribute(BY, B0 + "");
                        return B0
                    }
                }
            } else {
                if (e && "get" in e && B2 && (BZ = e.get(B1, BY)) !== null) {
                    return BZ
                } else {
                    BZ = B1.getAttribute(BY);
                    return BZ === null ? AO : BZ
                }
            }
        },
        removeAttr: function (B0, BY) {
            var BZ, e, B2, B1, B3 = 0;
            if (BY && B0.nodeType === 1) {
                e = BY.split(Al);
                for (; B3 < e.length; B3++) {
                    B2 = e[B3];
                    if (B2) {
                        BZ = Ag.propFix[B2] || B2;
                        B1 = M.test(B2);
                        if (!B1) {
                            Ag.attr(B0, B2, "")
                        }
                        B0.removeAttribute(f ? B2 : BZ);
                        if (B1 && BZ in B0) {
                            B0[BZ] = false
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function (BY, e) {
                    if (G.test(BY.nodeName) && BY.parentNode) {
                        Ag.error("type property can't be changed")
                    } else {
                        if (!Ag.support.radioValue && e === "radio" && Ag.nodeName(BY, "input")) {
                            var BZ = BY.value;
                            BY.setAttribute("type", e);
                            if (BZ) {
                                BY.value = BZ
                            }
                            return e
                        }
                    }
                }
            }, value: {
                get: function (BY, e) {
                    if (An && Ag.nodeName(BY, "button")) {
                        return An.get(BY, e)
                    }
                    return e in BY ? BY.value : null
                }, set: function (BY, e, BZ) {
                    if (An && Ag.nodeName(BY, "button")) {
                        return An.set(BY, e, BZ)
                    }
                    BY.value = e
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (BY, e, B3) {
            var B0, B2, BZ, B1 = BY.nodeType;
            if (!BY || B1 === 3 || B1 === 8 || B1 === 2) {
                return
            }
            BZ = B1 !== 1 || !Ag.isXMLDoc(BY);
            if (BZ) {
                e = Ag.propFix[e] || e;
                B2 = Ag.propHooks[e]
            }
            if (B3 !== AO) {
                if (B2 && "set" in B2 && (B0 = B2.set(BY, B3, e)) !== AO) {
                    return B0
                } else {
                    return (BY[e] = B3)
                }
            } else {
                if (B2 && "get" in B2 && (B0 = B2.get(BY, e)) !== null) {
                    return B0
                } else {
                    return BY[e]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (BY) {
                    var e = BY.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : Bo.test(BY.nodeName) || k.test(BY.nodeName) && BY.href ? 0 : AO
                }
            }
        }
    });
    L = {
        get: function (BZ, e) {
            var B0, BY = Ag.prop(BZ, e);
            return BY === true || typeof BY !== "boolean" && (B0 = BZ.getAttributeNode(e)) && B0.nodeValue !== false ? e.toLowerCase() : AO
        }, set: function (BZ, e, B0) {
            var BY;
            if (e === false) {
                Ag.removeAttr(BZ, B0)
            } else {
                BY = Ag.propFix[B0] || B0;
                if (BY in BZ) {
                    BZ[BY] = true
                }
                BZ.setAttribute(B0, B0.toLowerCase())
            }
            return B0
        }
    };
    if (!f) {
        Bw = {name: true, id: true, coords: true};
        An = Ag.valHooks.button = {
            get: function (BY, e) {
                var BZ;
                BZ = BY.getAttributeNode(e);
                return BZ && (Bw[e] ? BZ.value !== "" : BZ.specified) ? BZ.value : AO
            }, set: function (BY, e, BZ) {
                var B0 = BY.getAttributeNode(BZ);
                if (!B0) {
                    B0 = BT.createAttribute(BZ);
                    BY.setAttributeNode(B0)
                }
                return (B0.value = e + "")
            }
        };
        Ag.each(["width", "height"], function (BY, e) {
            Ag.attrHooks[e] = Ag.extend(Ag.attrHooks[e], {
                set: function (B0, BZ) {
                    if (BZ === "") {
                        B0.setAttribute(e, "auto");
                        return BZ
                    }
                }
            })
        });
        Ag.attrHooks.contenteditable = {
            get: An.get, set: function (BY, e, BZ) {
                if (e === "") {
                    e = "false"
                }
                An.set(BY, e, BZ)
            }
        }
    }
    if (!Ag.support.hrefNormalized) {
        Ag.each(["href", "src", "width", "height"], function (BY, e) {
            Ag.attrHooks[e] = Ag.extend(Ag.attrHooks[e], {
                get: function (BZ) {
                    var B0 = BZ.getAttribute(e, 2);
                    return B0 === null ? AO : B0
                }
            })
        })
    }
    if (!Ag.support.style) {
        Ag.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || AO
            }, set: function (BY, e) {
                return (BY.style.cssText = e + "")
            }
        }
    }
    if (!Ag.support.optSelected) {
        Ag.propHooks.selected = Ag.extend(Ag.propHooks.selected, {
            get: function (BY) {
                var e = BY.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!Ag.support.enctype) {
        Ag.propFix.enctype = "encoding"
    }
    if (!Ag.support.checkOn) {
        Ag.each(["radio", "checkbox"], function () {
            Ag.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    Ag.each(["radio", "checkbox"], function () {
        Ag.valHooks[this] = Ag.extend(Ag.valHooks[this], {
            set: function (BY, e) {
                if (Ag.isArray(e)) {
                    return (BY.checked = Ag.inArray(Ag(BY).val(), e) >= 0)
                }
            }
        })
    });
    var BE = /^(?:textarea|input|select)$/i, Ac = /^([^\.]*|)(?:\.(.+)|)$/, BI = /(?:^|\s)hover(\.\S+|)\b/, S = /^key/,
        AF = /^(?:mouse|contextmenu)|click/, AP = /^(?:focusinfocus|focusoutblur)$/, Aa = function (e) {
            return Ag.event.special.hover ? e : e.replace(BI, "mouseenter$1 mouseleave$1")
        };
    Ag.event = {
        add: function (Cb, B0, Cc, B5, B2) {
            var B7, B9, B3, Ca, B4, BY, B6, B8, B1, BZ, e;
            if (Cb.nodeType === 3 || Cb.nodeType === 8 || !B0 || !Cc || !(B7 = Ag._data(Cb))) {
                return
            }
            if (Cc.handler) {
                B1 = Cc;
                Cc = B1.handler;
                B2 = B1.selector
            }
            if (!Cc.guid) {
                Cc.guid = Ag.guid++
            }
            B3 = B7.events;
            if (!B3) {
                B7.events = B3 = {}
            }
            B9 = B7.handle;
            if (!B9) {
                B7.handle = B9 = function (Cd) {
                    return typeof Ag !== "undefined" && (!Cd || Ag.event.triggered !== Cd.type) ? Ag.event.dispatch.apply(B9.elem, arguments) : AO
                };
                B9.elem = Cb
            }
            B0 = Ag.trim(Aa(B0)).split(" ");
            for (Ca = 0; Ca < B0.length; Ca++) {
                B4 = Ac.exec(B0[Ca]) || [];
                BY = B4[1];
                B6 = (B4[2] || "").split(".").sort();
                e = Ag.event.special[BY] || {};
                BY = (B2 ? e.delegateType : e.bindType) || BY;
                e = Ag.event.special[BY] || {};
                B8 = Ag.extend({
                    type: BY,
                    origType: B4[1],
                    data: B5,
                    handler: Cc,
                    guid: Cc.guid,
                    selector: B2,
                    needsContext: B2 && Ag.expr.match.needsContext.test(B2),
                    namespace: B6.join(".")
                }, B1);
                BZ = B3[BY];
                if (!BZ) {
                    BZ = B3[BY] = [];
                    BZ.delegateCount = 0;
                    if (!e.setup || e.setup.call(Cb, B5, B6, B9) === false) {
                        if (Cb.addEventListener) {
                            Cb.addEventListener(BY, B9, false)
                        } else {
                            if (Cb.attachEvent) {
                                Cb.attachEvent("on" + BY, B9)
                            }
                        }
                    }
                }
                if (e.add) {
                    e.add.call(Cb, B8);
                    if (!B8.handler.guid) {
                        B8.handler.guid = Cc.guid
                    }
                }
                if (B2) {
                    BZ.splice(BZ.delegateCount++, 0, B8)
                } else {
                    BZ.push(B8)
                }
                Ag.event.global[BY] = true
            }
            Cb = null
        },
        global: {},
        remove: function (BY, B7, Cc, Ca, Cb) {
            var B2, B8, e, B9, B5, B1, B4, BZ, B3, Cd, B6, B0 = Ag.hasData(BY) && Ag._data(BY);
            if (!B0 || !(BZ = B0.events)) {
                return
            }
            B7 = Ag.trim(Aa(B7 || "")).split(" ");
            for (B2 = 0; B2 < B7.length; B2++) {
                B8 = Ac.exec(B7[B2]) || [];
                e = B9 = B8[1];
                B5 = B8[2];
                if (!e) {
                    for (e in BZ) {
                        Ag.event.remove(BY, e + B7[B2], Cc, Ca, true)
                    }
                    continue
                }
                B3 = Ag.event.special[e] || {};
                e = (Ca ? B3.delegateType : B3.bindType) || e;
                Cd = BZ[e] || [];
                B1 = Cd.length;
                B5 = B5 ? new RegExp("(^|\\.)" + B5.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (B4 = 0; B4 < Cd.length; B4++) {
                    B6 = Cd[B4];
                    if ((Cb || B9 === B6.origType) && (!Cc || Cc.guid === B6.guid) && (!B5 || B5.test(B6.namespace)) && (!Ca || Ca === B6.selector || Ca === "**" && B6.selector)) {
                        Cd.splice(B4--, 1);
                        if (B6.selector) {
                            Cd.delegateCount--
                        }
                        if (B3.remove) {
                            B3.remove.call(BY, B6)
                        }
                    }
                }
                if (Cd.length === 0 && B1 !== Cd.length) {
                    if (!B3.teardown || B3.teardown.call(BY, B5, B0.handle) === false) {
                        Ag.removeEvent(BY, e, B0.handle)
                    }
                    delete BZ[e]
                }
            }
            if (Ag.isEmptyObject(BZ)) {
                delete B0.handle;
                Ag.removeData(BY, "events", true)
            }
        },
        customEvent: {"getData": true, "setData": true, "changeData": true},
        trigger: function (B3, B5, Cb, B4) {
            if (Cb && (Cb.nodeType === 3 || Cb.nodeType === 8)) {
                return
            }
            var Ca, B9, e, B8, BZ, B6, B1, B7, BY, B2, B0 = B3.type || B3, Cc = [];
            if (AP.test(B0 + Ag.event.triggered)) {
                return
            }
            if (B0.indexOf("!") >= 0) {
                B0 = B0.slice(0, -1);
                B9 = true
            }
            if (B0.indexOf(".") >= 0) {
                Cc = B0.split(".");
                B0 = Cc.shift();
                Cc.sort()
            }
            if ((!Cb || Ag.event.customEvent[B0]) && !Ag.event.global[B0]) {
                return
            }
            B3 = typeof B3 === "object" ? B3[Ag.expando] ? B3 : new Ag.Event(B0, B3) : new Ag.Event(B0);
            B3.type = B0;
            B3.isTrigger = true;
            B3.exclusive = B9;
            B3.namespace = Cc.join(".");
            B3.namespace_re = B3.namespace ? new RegExp("(^|\\.)" + Cc.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            B6 = B0.indexOf(":") < 0 ? "on" + B0 : "";
            if (!Cb) {
                Ca = Ag.cache;
                for (e in Ca) {
                    if (Ca[e].events && Ca[e].events[B0]) {
                        Ag.event.trigger(B3, B5, Ca[e].handle.elem, true)
                    }
                }
                return
            }
            B3.result = AO;
            if (!B3.target) {
                B3.target = Cb
            }
            B5 = B5 != null ? Ag.makeArray(B5) : [];
            B5.unshift(B3);
            B1 = Ag.event.special[B0] || {};
            if (B1.trigger && B1.trigger.apply(Cb, B5) === false) {
                return
            }
            BY = [[Cb, B1.bindType || B0]];
            if (!B4 && !B1.noBubble && !Ag.isWindow(Cb)) {
                B2 = B1.delegateType || B0;
                B8 = AP.test(B2 + B0) ? Cb : Cb.parentNode;
                for (BZ = Cb; B8; B8 = B8.parentNode) {
                    BY.push([B8, B2]);
                    BZ = B8
                }
                if (BZ === (Cb.ownerDocument || BT)) {
                    BY.push([BZ.defaultView || BZ.parentWindow || AW, B2])
                }
            }
            for (e = 0; e < BY.length && !B3.isPropagationStopped(); e++) {
                B8 = BY[e][0];
                B3.type = BY[e][1];
                B7 = (Ag._data(B8, "events") || {})[B3.type] && Ag._data(B8, "handle");
                if (B7) {
                    B7.apply(B8, B5)
                }
                B7 = B6 && B8[B6];
                if (B7 && Ag.acceptData(B8) && B7.apply && B7.apply(B8, B5) === false) {
                    B3.preventDefault()
                }
            }
            B3.type = B0;
            if (!B4 && !B3.isDefaultPrevented()) {
                if ((!B1._default || B1._default.apply(Cb.ownerDocument, B5) === false) && !(B0 === "click" && Ag.nodeName(Cb, "a")) && Ag.acceptData(Cb)) {
                    if (B6 && Cb[B0] && ((B0 !== "focus" && B0 !== "blur") || B3.target.offsetWidth !== 0) && !Ag.isWindow(Cb)) {
                        BZ = Cb[B6];
                        if (BZ) {
                            Cb[B6] = null
                        }
                        Ag.event.triggered = B0;
                        Cb[B0]();
                        Ag.event.triggered = AO;
                        if (BZ) {
                            Cb[B6] = BZ
                        }
                    }
                }
            }
            return B3.result
        },
        dispatch: function (BZ) {
            BZ = Ag.event.fix(BZ || AW.event);
            var B8, B5, e, B2, B4, B1, B3, B9, Cc, Cd, BY = ((Ag._data(this, "events") || {})[BZ.type] || []),
                Ca = BY.delegateCount, B6 = AT.call(arguments), B7 = !BZ.exclusive && !BZ.namespace,
                Cb = Ag.event.special[BZ.type] || {}, B0 = [];
            B6[0] = BZ;
            BZ.delegateTarget = this;
            if (Cb.preDispatch && Cb.preDispatch.call(this, BZ) === false) {
                return
            }
            if (Ca && !(BZ.button && BZ.type === "click")) {
                for (e = BZ.target; e != this; e = e.parentNode || this) {
                    if (e.disabled !== true || BZ.type !== "click") {
                        B4 = {};
                        B3 = [];
                        for (B8 = 0; B8 < Ca; B8++) {
                            B9 = BY[B8];
                            Cc = B9.selector;
                            if (B4[Cc] === AO) {
                                B4[Cc] = B9.needsContext ? Ag(Cc, this).index(e) >= 0 : Ag.find(Cc, this, null, [e]).length
                            }
                            if (B4[Cc]) {
                                B3.push(B9)
                            }
                        }
                        if (B3.length) {
                            B0.push({elem: e, matches: B3})
                        }
                    }
                }
            }
            if (BY.length > Ca) {
                B0.push({elem: this, matches: BY.slice(Ca)})
            }
            for (B8 = 0; B8 < B0.length && !BZ.isPropagationStopped(); B8++) {
                B1 = B0[B8];
                BZ.currentTarget = B1.elem;
                for (B5 = 0; B5 < B1.matches.length && !BZ.isImmediatePropagationStopped(); B5++) {
                    B9 = B1.matches[B5];
                    if (B7 || (!BZ.namespace && !B9.namespace) || BZ.namespace_re && BZ.namespace_re.test(B9.namespace)) {
                        BZ.data = B9.data;
                        BZ.handleObj = B9;
                        B2 = ((Ag.event.special[B9.origType] || {}).handle || B9.handler).apply(B1.elem, B6);
                        if (B2 !== AO) {
                            BZ.result = B2;
                            if (B2 === false) {
                                BZ.preventDefault();
                                BZ.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (Cb.postDispatch) {
                Cb.postDispatch.call(this, BZ)
            }
            return BZ.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (BY, e) {
                if (BY.which == null) {
                    BY.which = e.charCode != null ? e.charCode : e.keyCode
                }
                return BY
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (B1, e) {
                var BY, B0, BZ, B3 = e.button, B2 = e.fromElement;
                if (B1.pageX == null && e.clientX != null) {
                    BY = B1.target.ownerDocument || BT;
                    B0 = BY.documentElement;
                    BZ = BY.body;
                    B1.pageX = e.clientX + (B0 && B0.scrollLeft || BZ && BZ.scrollLeft || 0) - (B0 && B0.clientLeft || BZ && BZ.clientLeft || 0);
                    B1.pageY = e.clientY + (B0 && B0.scrollTop || BZ && BZ.scrollTop || 0) - (B0 && B0.clientTop || BZ && BZ.clientTop || 0)
                }
                if (!B1.relatedTarget && B2) {
                    B1.relatedTarget = B2 === B1.target ? e.toElement : B2
                }
                if (!B1.which && B3 !== AO) {
                    B1.which = (B3 & 1 ? 1 : (B3 & 2 ? 3 : (B3 & 4 ? 2 : 0)))
                }
                return B1
            }
        },
        fix: function (BZ) {
            if (BZ[Ag.expando]) {
                return BZ
            }
            var B1, B2, e = BZ, B0 = Ag.event.fixHooks[BZ.type] || {},
                BY = B0.props ? this.props.concat(B0.props) : this.props;
            BZ = Ag.Event(e);
            for (B1 = BY.length; B1;) {
                B2 = BY[--B1];
                BZ[B2] = e[B2]
            }
            if (!BZ.target) {
                BZ.target = e.srcElement || BT
            }
            if (BZ.target.nodeType === 3) {
                BZ.target = BZ.target.parentNode
            }
            BZ.metaKey = !!BZ.metaKey;
            return B0.filter ? B0.filter(BZ, e) : BZ
        },
        special: {
            load: {noBubble: true},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (BZ, e, BY) {
                    if (Ag.isWindow(this)) {
                        this.onbeforeunload = BY
                    }
                }, teardown: function (e, BY) {
                    if (this.onbeforeunload === BY) {
                        this.onbeforeunload = null
                    }
                }
            }
        },
        simulate: function (B0, BZ, B2, BY) {
            var B1 = Ag.extend(new Ag.Event(), B2, {type: B0, isSimulated: true, originalEvent: {}});
            if (BY) {
                Ag.event.trigger(B1, null, BZ)
            } else {
                Ag.event.dispatch.call(BZ, B1)
            }
            if (B1.isDefaultPrevented()) {
                B2.preventDefault()
            }
        }
    };
    Ag.event.handle = Ag.event.dispatch;
    Ag.removeEvent = BT.removeEventListener ? function (e, BY, BZ) {
        if (e.removeEventListener) {
            e.removeEventListener(BY, BZ, false)
        }
    } : function (BY, BZ, B0) {
        var e = "on" + BZ;
        if (BY.detachEvent) {
            if (typeof BY[e] === "undefined") {
                BY[e] = null
            }
            BY.detachEvent(e, B0)
        }
    };
    Ag.Event = function (BY, e) {
        if (!(this instanceof Ag.Event)) {
            return new Ag.Event(BY, e)
        }
        if (BY && BY.type) {
            this.originalEvent = BY;
            this.type = BY.type;
            this.isDefaultPrevented = (BY.defaultPrevented || BY.returnValue === false || BY.getPreventDefault && BY.getPreventDefault()) ? AG : Bx
        } else {
            this.type = BY
        }
        if (e) {
            Ag.extend(this, e)
        }
        this.timeStamp = BY && BY.timeStamp || Ag.now();
        this[Ag.expando] = true
    };
    function Bx() {
        return false
    }

    function AG() {
        return true
    }

    Ag.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = AG;
            var BY = this.originalEvent;
            if (!BY) {
                return
            }
            if (BY.preventDefault) {
                BY.preventDefault()
            } else {
                BY.returnValue = false
            }
        }, stopPropagation: function () {
            this.isPropagationStopped = AG;
            var BY = this.originalEvent;
            if (!BY) {
                return
            }
            if (BY.stopPropagation) {
                BY.stopPropagation()
            }
            BY.cancelBubble = true
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = AG;
            this.stopPropagation()
        }, isDefaultPrevented: Bx, isPropagationStopped: Bx, isImmediatePropagationStopped: Bx
    };
    Ag.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (BY, e) {
        Ag.event.special[BY] = {
            delegateType: e, bindType: e, handle: function (B1) {
                var B4, B0 = this, BZ = B1.relatedTarget, B3 = B1.handleObj, B2 = B3.selector;
                if (!BZ || (BZ !== B0 && !Ag.contains(B0, BZ))) {
                    B1.type = B3.origType;
                    B4 = B3.handler.apply(this, arguments);
                    B1.type = e
                }
                return B4
            }
        }
    });
    if (!Ag.support.submitBubbles) {
        Ag.event.special.submit = {
            setup: function () {
                if (Ag.nodeName(this, "form")) {
                    return false
                }
                Ag.event.add(this, "click._submit keypress._submit", function (B0) {
                    var BY = B0.target, BZ = Ag.nodeName(BY, "input") || Ag.nodeName(BY, "button") ? BY.form : AO;
                    if (BZ && !Ag._data(BZ, "_submit_attached")) {
                        Ag.event.add(BZ, "submit._submit", function (e) {
                            e._submit_bubble = true
                        });
                        Ag._data(BZ, "_submit_attached", true)
                    }
                })
            }, postDispatch: function (e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        Ag.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            }, teardown: function () {
                if (Ag.nodeName(this, "form")) {
                    return false
                }
                Ag.event.remove(this, "._submit")
            }
        }
    }
    if (!Ag.support.changeBubbles) {
        Ag.event.special.change = {
            setup: function () {
                if (BE.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        Ag.event.add(this, "propertychange._change", function (e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        Ag.event.add(this, "click._change", function (e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            Ag.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                Ag.event.add(this, "beforeactivate._change", function (BZ) {
                    var BY = BZ.target;
                    if (BE.test(BY.nodeName) && !Ag._data(BY, "_change_attached")) {
                        Ag.event.add(BY, "change._change", function (e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                Ag.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        Ag._data(BY, "_change_attached", true)
                    }
                })
            }, handle: function (BY) {
                var e = BY.target;
                if (this !== e || BY.isSimulated || BY.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return BY.handleObj.handler.apply(this, arguments)
                }
            }, teardown: function () {
                Ag.event.remove(this, "._change");
                return !BE.test(this.nodeName)
            }
        }
    }
    if (!Ag.support.focusinBubbles) {
        Ag.each({focus: "focusin", blur: "focusout"}, function (BY, e) {
            var B0 = 0, BZ = function (B1) {
                Ag.event.simulate(e, B1.target, Ag.event.fix(B1), true)
            };
            Ag.event.special[e] = {
                setup: function () {
                    if (B0++ === 0) {
                        BT.addEventListener(BY, BZ, true)
                    }
                }, teardown: function () {
                    if (--B0 === 0) {
                        BT.removeEventListener(BY, BZ, true)
                    }
                }
            }
        })
    }
    Ag.fn.extend({
        on: function (B1, BZ, B3, e, BY) {
            var B2, B0;
            if (typeof B1 === "object") {
                if (typeof BZ !== "string") {
                    B3 = B3 || BZ;
                    BZ = AO
                }
                for (B0 in B1) {
                    this.on(B0, BZ, B3, B1[B0], BY)
                }
                return this
            }
            if (B3 == null && e == null) {
                e = BZ;
                B3 = BZ = AO
            } else {
                if (e == null) {
                    if (typeof BZ === "string") {
                        e = B3;
                        B3 = AO
                    } else {
                        e = B3;
                        B3 = BZ;
                        BZ = AO
                    }
                }
            }
            if (e === false) {
                e = Bx
            } else {
                if (!e) {
                    return this
                }
            }
            if (BY === 1) {
                B2 = e;
                e = function (B4) {
                    Ag().off(B4);
                    return B2.apply(this, arguments)
                };
                e.guid = B2.guid || (B2.guid = Ag.guid++)
            }
            return this.each(function () {
                Ag.event.add(this, B1, e, B3, BZ)
            })
        }, one: function (BZ, BY, B0, e) {
            return this.on(BZ, BY, B0, e, 1)
        }, off: function (B0, BY, e) {
            var B1, BZ;
            if (B0 && B0.preventDefault && B0.handleObj) {
                B1 = B0.handleObj;
                Ag(B0.delegateTarget).off(B1.namespace ? B1.origType + "." + B1.namespace : B1.origType, B1.selector, B1.handler);
                return this
            }
            if (typeof B0 === "object") {
                for (BZ in B0) {
                    this.off(BZ, BY, B0[BZ])
                }
                return this
            }
            if (BY === false || typeof BY === "function") {
                e = BY;
                BY = AO
            }
            if (e === false) {
                e = Bx
            }
            return this.each(function () {
                Ag.event.remove(this, B0, e, BY)
            })
        }, bind: function (BY, BZ, e) {
            return this.on(BY, null, BZ, e)
        }, unbind: function (BY, e) {
            return this.off(BY, null, e)
        }, live: function (BY, BZ, e) {
            Ag(this.context).on(BY, this.selector, BZ, e);
            return this
        }, die: function (BY, e) {
            Ag(this.context).off(BY, this.selector || "**", e);
            return this
        }, delegate: function (BY, BZ, B0, e) {
            return this.on(BZ, BY, B0, e)
        }, undelegate: function (BY, BZ, e) {
            return arguments.length === 1 ? this.off(BY, "**") : this.off(BZ, BY || "**", e)
        }, trigger: function (e, BY) {
            return this.each(function () {
                Ag.event.trigger(e, BY, this)
            })
        }, triggerHandler: function (e, BY) {
            if (this[0]) {
                return Ag.event.trigger(e, BY, this[0], true)
            }
        }, toggle: function (e) {
            var BY = arguments, BZ = e.guid || Ag.guid++, B0 = 0, B1 = function (B3) {
                var B2 = (Ag._data(this, "lastToggle" + e.guid) || 0) % B0;
                Ag._data(this, "lastToggle" + e.guid, B2 + 1);
                B3.preventDefault();
                return BY[B2].apply(this, arguments) || false
            };
            B1.guid = BZ;
            while (B0 < BY.length) {
                BY[B0++].guid = BZ
            }
            return this.click(B1)
        }, hover: function (BY, e) {
            return this.mouseenter(BY).mouseleave(e || BY)
        }
    });
    Ag.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function (BY, e) {
        Ag.fn[e] = function (B0, BZ) {
            if (BZ == null) {
                BZ = B0;
                B0 = null
            }
            return arguments.length > 0 ? this.on(e, null, B0, BZ) : this.trigger(e)
        };
        if (S.test(e)) {
            Ag.event.fixHooks[e] = Ag.event.keyHooks
        }
        if (AF.test(e)) {
            Ag.event.fixHooks[e] = Ag.event.mouseHooks
        }
    });
    /*
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
    (function (B6, B2) {
        var Cs, CQ, B7, C1, Cm, CY, CA, Cb, Cv, Cp, Cy = true, C5 = "undefined",
            CF = ("sizcache" + Math.random()).replace(".", ""), CT = String, Cj = B6.document, B9 = Cj.documentElement,
            B4 = 0, CN = 0, CU = [].pop, CW = [].push, Ca = [].slice, CR = [].indexOf || function (C6) {
                    var C7 = 0, e = this.length;
                    for (; C7 < e; C7++) {
                        if (this[C7] === C6) {
                            return C7
                        }
                    }
                    return -1
                }, Cw = function (e, C6) {
                e[CF] = C6 == null || C6;
                return e
            }, CM = function () {
                var e = {}, C6 = [];
                return Cw(function (C8, C7) {
                    if (C6.push(C8) > B7.cacheLength) {
                        delete e[C6.shift()]
                    }
                    return (e[C8 + " "] = C7)
                }, e)
            }, Cg = CM(), C4 = CM(), CV = CM(), CG = "[\\x20\\t\\r\\n\\f]", CH = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
            CZ = CH.replace("w", "w#"), CP = "([*^$|!~]?=)",
            Cz = "\\[" + CG + "*(" + CH + ")" + CG + "*(?:" + CP + CG + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + CZ + ")|)|)" + CG + "*\\]",
            Ci = ":(" + CH + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Cz + ")|[^:]|\\\\.)*|.*))\\)|)",
            BY = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + CG + "*((?:-\\d)?\\d*)" + CG + "*\\)|)(?=[^-]|$)",
            Cu = new RegExp("^" + CG + "+|((?:^|[^\\\\])(?:\\\\.)*)" + CG + "+$", "g"),
            CS = new RegExp("^" + CG + "*," + CG + "*"),
            Co = new RegExp("^" + CG + "*([\\x20\\t\\r\\n\\f>+~])" + CG + "*"), CI = new RegExp(Ci),
            B3 = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, B0 = /^:not/, Cf = /[\x20\t\r\n\f]*[+~]/, C0 = /:not\($/,
            B1 = /h\d/i, CC = /input|select|textarea|button/i, C3 = /\\(?!\\)/g, BZ = {
                "ID": new RegExp("^#(" + CH + ")"),
                "CLASS": new RegExp("^\\.(" + CH + ")"),
                "NAME": new RegExp("^\\[name=['\"]?(" + CH + ")['\"]?\\]"),
                "TAG": new RegExp("^(" + CH.replace("w", "w*") + ")"),
                "ATTR": new RegExp("^" + Cz),
                "PSEUDO": new RegExp("^" + Ci),
                "POS": new RegExp(BY, "i"),
                "CHILD": new RegExp("^:(only|nth|first|last)-child(?:\\(" + CG + "*(even|odd|(([+-]|)(\\d*)n|)" + CG + "*(?:([+-]|)" + CG + "*(\\d+)|))" + CG + "*\\)|)", "i"),
                "needsContext": new RegExp("^" + CG + "*[>+~]|" + BY, "i")
            }, Ch = function (C6) {
                var C7 = Cj.createElement("div");
                try {
                    return C6(C7)
                } catch (C8) {
                    return false
                } finally {
                    C7 = null
                }
            }, CO = Ch(function (e) {
                e.appendChild(Cj.createComment(""));
                return !e.getElementsByTagName("*").length
            }), Ct = Ch(function (e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild && typeof e.firstChild.getAttribute !== C5 && e.firstChild.getAttribute("href") === "#"
            }), Cr = Ch(function (e) {
                e.innerHTML = "<select></select>";
                var C6 = typeof e.lastChild.getAttribute("multiple");
                return C6 !== "boolean" && C6 !== "string"
            }), Cn = Ch(function (e) {
                e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
                if (!e.getElementsByClassName || !e.getElementsByClassName("e").length) {
                    return false
                }
                e.lastChild.className = "e";
                return e.getElementsByClassName("e").length === 2
            }), Cc = Ch(function (e) {
                e.id = CF + 0;
                e.innerHTML = "<a name='" + CF + "'></a><div name='" + CF + "'></div>";
                B9.insertBefore(e, B9.firstChild);
                var C6 = Cj.getElementsByName && Cj.getElementsByName(CF).length === 2 + Cj.getElementsByName(CF + 0).length;
                CQ = !Cj.getElementById(CF);
                B9.removeChild(e);
                return C6
            });
        try {
            Ca.call(B9.childNodes, 0)[0].nodeType
        } catch (CE) {
            Ca = function (C6) {
                var e, C7 = [];
                for (; (e = this[C6]); C6++) {
                    C7.push(e)
                }
                return C7
            }
        }
        function B8(C8, Dc, C7, Da) {
            C7 = C7 || [];
            Dc = Dc || Cj;
            var Db, Dd, e, C6, C9 = Dc.nodeType;
            if (!C8 || typeof C8 !== "string") {
                return C7
            }
            if (C9 !== 1 && C9 !== 9) {
                return []
            }
            e = Cm(Dc);
            if (!e && !Da) {
                if ((Db = B3.exec(C8))) {
                    if ((C6 = Db[1])) {
                        if (C9 === 9) {
                            Dd = Dc.getElementById(C6);
                            if (Dd && Dd.parentNode) {
                                if (Dd.id === C6) {
                                    C7.push(Dd);
                                    return C7
                                }
                            } else {
                                return C7
                            }
                        } else {
                            if (Dc.ownerDocument && (Dd = Dc.ownerDocument.getElementById(C6)) && CY(Dc, Dd) && Dd.id === C6) {
                                C7.push(Dd);
                                return C7
                            }
                        }
                    } else {
                        if (Db[2]) {
                            CW.apply(C7, Ca.call(Dc.getElementsByTagName(C8), 0));
                            return C7
                        } else {
                            if ((C6 = Db[3]) && Cn && Dc.getElementsByClassName) {
                                CW.apply(C7, Ca.call(Dc.getElementsByClassName(C6), 0));
                                return C7
                            }
                        }
                    }
                }
            }
            return Ce(C8.replace(Cu, "$1"), Dc, C7, Da, e)
        }

        B8.matches = function (C6, e) {
            return B8(C6, null, null, e)
        };
        B8.matchesSelector = function (e, C6) {
            return B8(C6, null, null, [e]).length > 0
        };
        function CK(e) {
            return function (C7) {
                var C6 = C7.nodeName.toLowerCase();
                return C6 === "input" && C7.type === e
            }
        }

        function Ck(e) {
            return function (C7) {
                var C6 = C7.nodeName.toLowerCase();
                return (C6 === "input" || C6 === "button") && C7.type === e
            }
        }

        function CJ(e) {
            return Cw(function (C6) {
                C6 = +C6;
                return Cw(function (C8, C7) {
                    var Da, Db = e([], C8.length, C6), C9 = Db.length;
                    while (C9--) {
                        if (C8[(Da = Db[C9])]) {
                            C8[Da] = !(C7[Da] = C8[Da])
                        }
                    }
                })
            })
        }

        C1 = B8.getText = function (C6) {
            var C9, C7 = "", C8 = 0, e = C6.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof C6.textContent === "string") {
                        return C6.textContent
                    } else {
                        for (C6 = C6.firstChild; C6; C6 = C6.nextSibling) {
                            C7 += C1(C6)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return C6.nodeValue
                    }
                }
            } else {
                for (; (C9 = C6[C8]); C8++) {
                    C7 += C1(C9)
                }
            }
            return C7
        };
        Cm = B8.isXML = function (C6) {
            var e = C6 && (C6.ownerDocument || C6).documentElement;
            return e ? e.nodeName !== "HTML" : false
        };
        CY = B8.contains = B9.contains ? function (C6, C7) {
            var C8 = C6.nodeType === 9 ? C6.documentElement : C6, e = C7 && C7.parentNode;
            return C6 === e || !!(e && e.nodeType === 1 && C8.contains && C8.contains(e))
        } : B9.compareDocumentPosition ? function (e, C6) {
            return C6 && !!(e.compareDocumentPosition(C6) & 16)
        } : function (e, C6) {
            while ((C6 = C6.parentNode)) {
                if (C6 === e) {
                    return true
                }
            }
            return false
        };
        B8.attr = function (C7, e) {
            var C8, C6 = Cm(C7);
            if (!C6) {
                e = e.toLowerCase()
            }
            if ((C8 = B7.attrHandle[e])) {
                return C8(C7)
            }
            if (C6 || Cr) {
                return C7.getAttribute(e)
            }
            C8 = C7.getAttributeNode(e);
            return C8 ? typeof C7[e] === "boolean" ? C7[e] ? e : null : C8.specified ? C8.value : null : null
        };
        B7 = B8.selectors = {
            cacheLength: 50,
            createPseudo: Cw,
            match: BZ,
            attrHandle: Ct ? {} : {
                "href": function (e) {
                    return e.getAttribute("href", 2)
                }, "type": function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                "ID": CQ ? function (C8, C7, C6) {
                    if (typeof C7.getElementById !== C5 && !C6) {
                        var e = C7.getElementById(C8);
                        return e && e.parentNode ? [e] : []
                    }
                } : function (C8, C7, C6) {
                    if (typeof C7.getElementById !== C5 && !C6) {
                        var e = C7.getElementById(C8);
                        return e ? e.id === C8 || typeof e.getAttributeNode !== C5 && e.getAttributeNode("id").value === C8 ? [e] : B2 : []
                    }
                }, "TAG": CO ? function (e, C6) {
                    if (typeof C6.getElementsByTagName !== C5) {
                        return C6.getElementsByTagName(e)
                    }
                } : function (C6, C8) {
                    var Da = C8.getElementsByTagName(C6);
                    if (C6 === "*") {
                        var e, C9 = [], C7 = 0;
                        for (; (e = Da[C7]); C7++) {
                            if (e.nodeType === 1) {
                                C9.push(e)
                            }
                        }
                        return C9
                    }
                    return Da
                }, "NAME": Cc && function (e, C6) {
                    if (typeof C6.getElementsByName !== C5) {
                        return C6.getElementsByName(name)
                    }
                }, "CLASS": Cn && function (C7, C6, e) {
                    if (typeof C6.getElementsByClassName !== C5 && !e) {
                        return C6.getElementsByClassName(C7)
                    }
                }
            },
            relative: {
                ">": {dir: "parentNode", first: true},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: true},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                "ATTR": function (e) {
                    e[1] = e[1].replace(C3, "");
                    e[3] = (e[4] || e[5] || "").replace(C3, "");
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                }, "CHILD": function (e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            B8.error(e[0])
                        }
                        e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd"));
                        e[4] = +((e[6] + e[7]) || e[2] === "odd")
                    } else {
                        if (e[2]) {
                            B8.error(e[0])
                        }
                    }
                    return e
                }, "PSEUDO": function (e) {
                    var C7, C6;
                    if (BZ["CHILD"].test(e[0])) {
                        return null
                    }
                    if (e[3]) {
                        e[2] = e[3]
                    } else {
                        if ((C7 = e[4])) {
                            if (CI.test(C7) && (C6 = C2(C7, true)) && (C6 = C7.indexOf(")", C7.length - C6) - C7.length)) {
                                C7 = C7.slice(0, C6);
                                e[0] = e[0].slice(0, C6)
                            }
                            e[2] = C7
                        }
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                "ID": CQ ? function (e) {
                    e = e.replace(C3, "");
                    return function (C6) {
                        return C6.getAttribute("id") === e
                    }
                } : function (e) {
                    e = e.replace(C3, "");
                    return function (C6) {
                        var C7 = typeof C6.getAttributeNode !== C5 && C6.getAttributeNode("id");
                        return C7 && C7.value === e
                    }
                }, "TAG": function (e) {
                    if (e === "*") {
                        return function () {
                            return true
                        }
                    }
                    e = e.replace(C3, "").toLowerCase();
                    return function (C6) {
                        return C6.nodeName && C6.nodeName.toLowerCase() === e
                    }
                }, "CLASS": function (C6) {
                    var e = Cg[CF][C6 + " "];
                    return e || (e = new RegExp("(^|" + CG + ")" + C6 + "(" + CG + "|$)")) && Cg(C6, function (C7) {
                            return e.test(C7.className || (typeof C7.getAttribute !== C5 && C7.getAttribute("class")) || "")
                        })
                }, "ATTR": function (e, C6, C7) {
                    return function (C9, Da) {
                        var C8 = B8.attr(C9, e);
                        if (C8 == null) {
                            return C6 === "!="
                        }
                        if (!C6) {
                            return true
                        }
                        C8 += "";
                        return C6 === "=" ? C8 === C7 : C6 === "!=" ? C8 !== C7 : C6 === "^=" ? C7 && C8.indexOf(C7) === 0 : C6 === "*=" ? C7 && C8.indexOf(C7) > -1 : C6 === "$=" ? C7 && C8.substr(C8.length - C7.length) === C7 : C6 === "~=" ? (" " + C8 + " ").indexOf(C7) > -1 : C6 === "|=" ? C8 === C7 || C8.substr(0, C7.length + 1) === C7 + "-" : false
                    }
                }, "CHILD": function (C6, C7, e, C8) {
                    if (C6 === "nth") {
                        return function (Da) {
                            var Dc, Db, C9 = Da.parentNode;
                            if (e === 1 && C8 === 0) {
                                return true
                            }
                            if (C9) {
                                Db = 0;
                                for (Dc = C9.firstChild; Dc; Dc = Dc.nextSibling) {
                                    if (Dc.nodeType === 1) {
                                        Db++;
                                        if (Da === Dc) {
                                            break
                                        }
                                    }
                                }
                            }
                            Db -= C8;
                            return Db === e || (Db % e === 0 && Db / e >= 0)
                        }
                    }
                    return function (C9) {
                        var Da = C9;
                        switch (C6) {
                            case"only":
                            case"first":
                                while ((Da = Da.previousSibling)) {
                                    if (Da.nodeType === 1) {
                                        return false
                                    }
                                }
                                if (C6 === "first") {
                                    return true
                                }
                                Da = C9;
                            case"last":
                                while ((Da = Da.nextSibling)) {
                                    if (Da.nodeType === 1) {
                                        return false
                                    }
                                }
                                return true
                        }
                    }
                }, "PSEUDO": function (C8, C7) {
                    var C6,
                        e = B7.pseudos[C8] || B7.setFilters[C8.toLowerCase()] || B8.error("unsupported pseudo: " + C8);
                    if (e[CF]) {
                        return e(C7)
                    }
                    if (e.length > 1) {
                        C6 = [C8, C8, "", C7];
                        return B7.setFilters.hasOwnProperty(C8.toLowerCase()) ? Cw(function (Db, C9) {
                            var Dd, Da = e(Db, C7), Dc = Da.length;
                            while (Dc--) {
                                Dd = CR.call(Db, Da[Dc]);
                                Db[Dd] = !(C9[Dd] = Da[Dc])
                            }
                        }) : function (C9) {
                            return e(C9, 0, C6)
                        }
                    }
                    return e
                }
            },
            pseudos: {
                "not": Cw(function (C7) {
                    var C6 = [], C8 = [], e = CA(C7.replace(Cu, "$1"));
                    return e[CF] ? Cw(function (Dd, Db, Df, Da) {
                        var C9, Dc = e(Dd, null, Da, []), De = Dd.length;
                        while (De--) {
                            if ((C9 = Dc[De])) {
                                Dd[De] = !(Db[De] = C9)
                            }
                        }
                    }) : function (Da, Db, C9) {
                        C6[0] = Da;
                        e(C6, null, C9, C8);
                        return !C8.pop()
                    }
                }),
                "has": Cw(function (e) {
                    return function (C6) {
                        return B8(e, C6).length > 0
                    }
                }),
                "contains": Cw(function (e) {
                    return function (C6) {
                        return (C6.textContent || C6.innerText || C1(C6)).indexOf(e) > -1
                    }
                }),
                "enabled": function (e) {
                    return e.disabled === false
                },
                "disabled": function (e) {
                    return e.disabled === true
                },
                "checked": function (C6) {
                    var e = C6.nodeName.toLowerCase();
                    return (e === "input" && !!C6.checked) || (e === "option" && !!C6.selected)
                },
                "selected": function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                "parent": function (e) {
                    return !B7.pseudos["empty"](e)
                },
                "empty": function (C6) {
                    var e;
                    C6 = C6.firstChild;
                    while (C6) {
                        if (C6.nodeName > "@" || (e = C6.nodeType) === 3 || e === 4) {
                            return false
                        }
                        C6 = C6.nextSibling
                    }
                    return true
                },
                "header": function (e) {
                    return B1.test(e.nodeName)
                },
                "text": function (e) {
                    var C6, C7;
                    return e.nodeName.toLowerCase() === "input" && (C6 = e.type) === "text" && ((C7 = e.getAttribute("type")) == null || C7.toLowerCase() === C6)
                },
                "radio": CK("radio"),
                "checkbox": CK("checkbox"),
                "file": CK("file"),
                "password": CK("password"),
                "image": CK("image"),
                "submit": Ck("submit"),
                "reset": Ck("reset"),
                "button": function (C6) {
                    var e = C6.nodeName.toLowerCase();
                    return e === "input" && C6.type === "button" || e === "button"
                },
                "input": function (e) {
                    return CC.test(e.nodeName)
                },
                "focus": function (C6) {
                    var e = C6.ownerDocument;
                    return C6 === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(C6.type || C6.href || ~C6.tabIndex)
                },
                "active": function (e) {
                    return e === e.ownerDocument.activeElement
                },
                "first": CJ(function () {
                    return [0]
                }),
                "last": CJ(function (C6, e) {
                    return [e - 1]
                }),
                "eq": CJ(function (C7, e, C6) {
                    return [C6 < 0 ? C6 + e : C6]
                }),
                "even": CJ(function (C7, e) {
                    for (var C6 = 0; C6 < e; C6 += 2) {
                        C7.push(C6)
                    }
                    return C7
                }),
                "odd": CJ(function (C7, e) {
                    for (var C6 = 1; C6 < e; C6 += 2) {
                        C7.push(C6)
                    }
                    return C7
                }),
                "lt": CJ(function (C8, e, C6) {
                    for (var C7 = C6 < 0 ? C6 + e : C6; --C7 >= 0;) {
                        C8.push(C7)
                    }
                    return C8
                }),
                "gt": CJ(function (C8, e, C6) {
                    for (var C7 = C6 < 0 ? C6 + e : C6; ++C7 < e;) {
                        C8.push(C7)
                    }
                    return C8
                })
            }
        };
        function CL(e, C6, C8) {
            if (e === C6) {
                return C8
            }
            var C7 = e.nextSibling;
            while (C7) {
                if (C7 === C6) {
                    return -1
                }
                C7 = C7.nextSibling
            }
            return 1
        }

        Cb = B9.compareDocumentPosition ? function (e, C6) {
            if (e === C6) {
                Cv = true;
                return 0
            }
            return (!e.compareDocumentPosition || !C6.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(C6) & 4) ? -1 : 1
        } : function (C8, C9) {
            if (C8 === C9) {
                Cv = true;
                return 0
            } else {
                if (C8.sourceIndex && C9.sourceIndex) {
                    return C8.sourceIndex - C9.sourceIndex
                }
            }
            var C6, C7, Da = [], Db = [], Dd = C8.parentNode, De = C9.parentNode, e = Dd;
            if (Dd === De) {
                return CL(C8, C9)
            } else {
                if (!Dd) {
                    return -1
                } else {
                    if (!De) {
                        return 1
                    }
                }
            }
            while (e) {
                Da.unshift(e);
                e = e.parentNode
            }
            e = De;
            while (e) {
                Db.unshift(e);
                e = e.parentNode
            }
            C6 = Da.length;
            C7 = Db.length;
            for (var Dc = 0; Dc < C6 && Dc < C7; Dc++) {
                if (Da[Dc] !== Db[Dc]) {
                    return CL(Da[Dc], Db[Dc])
                }
            }
            return Dc === C6 ? CL(C8, Db[Dc], -1) : CL(Da[Dc], C9, 1)
        };
        [0, 0].sort(Cb);
        Cy = !Cv;
        B8.uniqueSort = function (C8) {
            var C6, C9 = [], C7 = 1, e = 0;
            Cv = Cy;
            C8.sort(Cb);
            if (Cv) {
                for (; (C6 = C8[C7]); C7++) {
                    if (C6 === C8[C7 - 1]) {
                        e = C9.push(C7)
                    }
                }
                while (e--) {
                    C8.splice(C9[e], 1)
                }
            }
            return C8
        };
        B8.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        function C2(Dd, C8) {
            var C6, Db, C9, C7, Dc, Da, De, e = C4[CF][Dd + " "];
            if (e) {
                return C8 ? 0 : e.slice(0)
            }
            Dc = Dd;
            Da = [];
            De = B7.preFilter;
            while (Dc) {
                if (!C6 || (Db = CS.exec(Dc))) {
                    if (Db) {
                        Dc = Dc.slice(Db[0].length) || Dc
                    }
                    Da.push(C9 = [])
                }
                C6 = false;
                if ((Db = Co.exec(Dc))) {
                    C9.push(C6 = new CT(Db.shift()));
                    Dc = Dc.slice(C6.length);
                    C6.type = Db[0].replace(Cu, " ")
                }
                for (C7 in B7.filter) {
                    if ((Db = BZ[C7].exec(Dc)) && (!De[C7] || (Db = De[C7](Db)))) {
                        C9.push(C6 = new CT(Db.shift()));
                        Dc = Dc.slice(C6.length);
                        C6.type = C7;
                        C6.matches = Db
                    }
                }
                if (!C6) {
                    break
                }
            }
            return C8 ? Dc.length : Dc ? B8.error(Dd) : C4(Dd, Da).slice(0)
        }

        function B5(C7, C8, C6) {
            var e = C8.dir, C9 = C6 && C8.dir === "parentNode", Da = CN++;
            return C8.first ? function (Dc, Dd, Db) {
                while ((Dc = Dc[e])) {
                    if (C9 || Dc.nodeType === 1) {
                        return C7(Dc, Dd, Db)
                    }
                }
            } : function (De, Df, Dd) {
                if (!Dd) {
                    var Dc, Db = B4 + " " + Da + " ", Dg = Db + Cs;
                    while ((De = De[e])) {
                        if (C9 || De.nodeType === 1) {
                            if ((Dc = De[CF]) === Dg) {
                                return De.sizset
                            } else {
                                if (typeof Dc === "string" && Dc.indexOf(Db) === 0) {
                                    if (De.sizset) {
                                        return De
                                    }
                                } else {
                                    De[CF] = Dg;
                                    if (C7(De, Df, Dd)) {
                                        De.sizset = true;
                                        return De
                                    }
                                    De.sizset = false
                                }
                            }
                        }
                    }
                } else {
                    while ((De = De[e])) {
                        if (C9 || De.nodeType === 1) {
                            if (C7(De, Df, Dd)) {
                                return De
                            }
                        }
                    }
                }
            }
        }

        function CB(e) {
            return e.length > 1 ? function (C7, C9, C6) {
                var C8 = e.length;
                while (C8--) {
                    if (!e[C8](C7, C9, C6)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }

        function CD(De, Da, C8, Dc, C6) {
            var Dd, C9 = [], e = 0, C7 = De.length, Db = Da != null;
            for (; e < C7; e++) {
                if ((Dd = De[e])) {
                    if (!C8 || C8(Dd, Dc, C6)) {
                        C9.push(Dd);
                        if (Db) {
                            Da.push(e)
                        }
                    }
                }
            }
            return C9
        }

        function Cq(C7, C8, e, C9, Da, C6) {
            if (C9 && !C9[CF]) {
                C9 = Cq(C9)
            }
            if (Da && !Da[CF]) {
                Da = Cq(Da, C6)
            }
            return Cw(function (Dj, Df, Dl, Dc) {
                var Dk, Db, Dm, Dd = [], Di = [], Dh = Df.length, Dg = Dj || Cd(C8 || "*", Dl.nodeType ? [Dl] : Dl, []),
                    De = C7 && (Dj || !C8) ? CD(Dg, Dd, C7, Dl, Dc) : Dg,
                    Dn = e ? Da || (Dj ? C7 : Dh || C9) ? [] : Df : De;
                if (e) {
                    e(De, Dn, Dl, Dc)
                }
                if (C9) {
                    Dk = CD(Dn, Di);
                    C9(Dk, [], Dl, Dc);
                    Db = Dk.length;
                    while (Db--) {
                        if ((Dm = Dk[Db])) {
                            Dn[Di[Db]] = !(De[Di[Db]] = Dm)
                        }
                    }
                }
                if (Dj) {
                    if (Da || C7) {
                        if (Da) {
                            Dk = [];
                            Db = Dn.length;
                            while (Db--) {
                                if ((Dm = Dn[Db])) {
                                    Dk.push((De[Db] = Dm))
                                }
                            }
                            Da(null, (Dn = []), Dk, Dc)
                        }
                        Db = Dn.length;
                        while (Db--) {
                            if ((Dm = Dn[Db]) && (Dk = Da ? CR.call(Dj, Dm) : Dd[Db]) > -1) {
                                Dj[Dk] = !(Df[Dk] = Dm)
                            }
                        }
                    }
                } else {
                    Dn = CD(Dn === Df ? Dn.splice(Dh, Dn.length) : Dn);
                    if (Da) {
                        Da(null, Df, Dn, Dc)
                    } else {
                        CW.apply(Df, Dn)
                    }
                }
            })
        }

        function CX(Da) {
            var C8, C7, C6, De = Da.length, Dd = B7.relative[Da[0].type], Db = Dd || B7.relative[" "], e = Dd ? 1 : 0,
                Dc = B5(function (Dg) {
                    return Dg === C8
                }, Db, true), Df = B5(function (Dg) {
                    return CR.call(C8, Dg) > -1
                }, Db, true), C9 = [function (Dh, Di, Dg) {
                    return (!Dd && (Dg || Di !== Cp)) || ((C8 = Di).nodeType ? Dc(Dh, Di, Dg) : Df(Dh, Di, Dg))
                }];
            for (; e < De; e++) {
                if ((C7 = B7.relative[Da[e].type])) {
                    C9 = [B5(CB(C9), C7)]
                } else {
                    C7 = B7.filter[Da[e].type].apply(null, Da[e].matches);
                    if (C7[CF]) {
                        C6 = ++e;
                        for (; C6 < De; C6++) {
                            if (B7.relative[Da[C6].type]) {
                                break
                            }
                        }
                        return Cq(e > 1 && CB(C9), e > 1 && Da.slice(0, e - 1).join("").replace(Cu, "$1"), C7, e < C6 && CX(Da.slice(e, C6)), C6 < De && CX((Da = Da.slice(C6))), C6 < De && Da.join(""))
                    }
                    C9.push(C7)
                }
            }
            return CB(C9)
        }

        function Cl(C9, C6) {
            var C7 = C6.length > 0, e = C9.length > 0, C8 = function (Dk, Dn, Db, De, Dm) {
                var Do, Di, Dc, Dl = [], Dh = 0, Da = "0", Dd = Dk && [], Dg = Dm != null, Dp = Cp,
                    Df = Dk || e && B7.find["TAG"]("*", Dm && Dn.parentNode || Dn),
                    Dj = (B4 += Dp == null ? 1 : Math.E);
                if (Dg) {
                    Cp = Dn !== Cj && Dn;
                    Cs = C8.el
                }
                for (; (Do = Df[Da]) != null; Da++) {
                    if (e && Do) {
                        for (Di = 0; (Dc = C9[Di]); Di++) {
                            if (Dc(Do, Dn, Db)) {
                                De.push(Do);
                                break
                            }
                        }
                        if (Dg) {
                            B4 = Dj;
                            Cs = ++C8.el
                        }
                    }
                    if (C7) {
                        if ((Do = !Dc && Do)) {
                            Dh--
                        }
                        if (Dk) {
                            Dd.push(Do)
                        }
                    }
                }
                Dh += Da;
                if (C7 && Da !== Dh) {
                    for (Di = 0; (Dc = C6[Di]); Di++) {
                        Dc(Dd, Dl, Dn, Db)
                    }
                    if (Dk) {
                        if (Dh > 0) {
                            while (Da--) {
                                if (!(Dd[Da] || Dl[Da])) {
                                    Dl[Da] = CU.call(De)
                                }
                            }
                        }
                        Dl = CD(Dl)
                    }
                    CW.apply(De, Dl);
                    if (Dg && !Dk && Dl.length > 0 && (Dh + C6.length) > 1) {
                        B8.uniqueSort(De)
                    }
                }
                if (Dg) {
                    B4 = Dj;
                    Cp = Dp
                }
                return Dd
            };
            C8.el = 0;
            return C7 ? Cw(C8) : C8
        }

        CA = B8.compile = function (C8, C6) {
            var C9, C7 = [], Da = [], e = CV[CF][C8 + " "];
            if (!e) {
                if (!C6) {
                    C6 = C2(C8)
                }
                C9 = C6.length;
                while (C9--) {
                    e = CX(C6[C9]);
                    if (e[CF]) {
                        C7.push(e)
                    } else {
                        Da.push(e)
                    }
                }
                e = CV(C8, Cl(Da, C7))
            }
            return e
        };
        function Cd(C7, e, C9) {
            var C8 = 0, C6 = e.length;
            for (; C8 < C6; C8++) {
                B8(C7, e[C8], C9)
            }
            return C9
        }

        function Ce(Dg, Df, C9, Dd, C6) {
            var e, Da, Db, C8, C7, De = C2(Dg), Dc = De.length;
            if (!Dd) {
                if (De.length === 1) {
                    Da = De[0] = De[0].slice(0);
                    if (Da.length > 2 && (Db = Da[0]).type === "ID" && Df.nodeType === 9 && !C6 && B7.relative[Da[1].type]) {
                        Df = B7.find["ID"](Db.matches[0].replace(C3, ""), Df, C6)[0];
                        if (!Df) {
                            return C9
                        }
                        Dg = Dg.slice(Da.shift().length)
                    }
                    for (e = BZ["POS"].test(Dg) ? -1 : Da.length - 1; e >= 0; e--) {
                        Db = Da[e];
                        if (B7.relative[(C8 = Db.type)]) {
                            break
                        }
                        if ((C7 = B7.find[C8])) {
                            if ((Dd = C7(Db.matches[0].replace(C3, ""), Cf.test(Da[0].type) && Df.parentNode || Df, C6))) {
                                Da.splice(e, 1);
                                Dg = Dd.length && Da.join("");
                                if (!Dg) {
                                    CW.apply(C9, Ca.call(Dd, 0));
                                    return C9
                                }
                                break
                            }
                        }
                    }
                }
            }
            CA(Dg, De)(Dd, Df, C6, C9, Cf.test(Dg));
            return C9
        }

        if (Cj.querySelectorAll) {
            (function () {
                var C9, C8 = Ce, Da = /'|\\/g, C7 = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Db = [":focus"],
                    e = [":active"],
                    C6 = B9.matchesSelector || B9.mozMatchesSelector || B9.webkitMatchesSelector || B9.oMatchesSelector || B9.msMatchesSelector;
                Ch(function (Dc) {
                    Dc.innerHTML = "<select><option selected=''></option></select>";
                    if (!Dc.querySelectorAll("[selected]").length) {
                        Db.push("\\[" + CG + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
                    }
                    if (!Dc.querySelectorAll(":checked").length) {
                        Db.push(":checked")
                    }
                });
                Ch(function (Dc) {
                    Dc.innerHTML = "<p test=''></p>";
                    if (Dc.querySelectorAll("[test^='']").length) {
                        Db.push("[*^$]=" + CG + "*(?:\"\"|'')")
                    }
                    Dc.innerHTML = "<input type='hidden'/>";
                    if (!Dc.querySelectorAll(":enabled").length) {
                        Db.push(":enabled", ":disabled")
                    }
                });
                Db = new RegExp(Db.join("|"));
                Ce = function (Di, Dm, Dh, Dj, Dd) {
                    if (!Dj && !Dd && !Db.test(Di)) {
                        var Dl, Dc, De = true, Dn = CF, Dg = Dm, Df = Dm.nodeType === 9 && Di;
                        if (Dm.nodeType === 1 && Dm.nodeName.toLowerCase() !== "object") {
                            Dl = C2(Di);
                            if ((De = Dm.getAttribute("id"))) {
                                Dn = De.replace(Da, "\\$&")
                            } else {
                                Dm.setAttribute("id", Dn)
                            }
                            Dn = "[id='" + Dn + "'] ";
                            Dc = Dl.length;
                            while (Dc--) {
                                Dl[Dc] = Dn + Dl[Dc].join("")
                            }
                            Dg = Cf.test(Di) && Dm.parentNode || Dm;
                            Df = Dl.join(",")
                        }
                        if (Df) {
                            try {
                                CW.apply(Dh, Ca.call(Dg.querySelectorAll(Df), 0));
                                return Dh
                            } catch (Dk) {
                            } finally {
                                if (!De) {
                                    Dm.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return C8(Di, Dm, Dh, Dj, Dd)
                };
                if (C6) {
                    Ch(function (Dc) {
                        C9 = C6.call(Dc, "div");
                        try {
                            C6.call(Dc, "[test!='']:sizzle");
                            e.push("!=", Ci)
                        } catch (Dd) {
                        }
                    });
                    e = new RegExp(e.join("|"));
                    B8.matchesSelector = function (Dc, Dd) {
                        Dd = Dd.replace(C7, "='$1']");
                        if (!Cm(Dc) && !e.test(Dd) && !Db.test(Dd)) {
                            try {
                                var Df = C6.call(Dc, Dd);
                                if (Df || C9 || Dc.document && Dc.document.nodeType !== 11) {
                                    return Df
                                }
                            } catch (De) {
                            }
                        }
                        return B8(Dd, null, null, [Dc]).length > 0
                    }
                }
            })()
        }
        B7.pseudos["nth"] = B7.pseudos["eq"];
        function Cx() {
        }

        B7.filters = Cx.prototype = B7.pseudos;
        B7.setFilters = new Cx();
        B8.attr = Ag.attr;
        Ag.find = B8;
        Ag.expr = B8.selectors;
        Ag.expr[":"] = Ag.expr.pseudos;
        Ag.unique = B8.uniqueSort;
        Ag.text = B8.getText;
        Ag.isXMLDoc = B8.isXML;
        Ag.contains = B8.contains
    })(AW);
    var AX = /Until$/, R = /^(?:parents|prev(?:Until|All))/, BH = /^.[^:#\[\.,]*$/, l = Ag.expr.match.needsContext,
        AV = {children: true, contents: true, next: true, prev: true};
    Ag.fn.extend({
        find: function (B1) {
            var e, BY, B3, B0, B2, BZ, B4 = this;
            if (typeof B1 !== "string") {
                return Ag(B1).filter(function () {
                    for (e = 0, BY = B4.length; e < BY; e++) {
                        if (Ag.contains(B4[e], this)) {
                            return true
                        }
                    }
                })
            }
            BZ = this.pushStack("", "find", B1);
            for (e = 0, BY = this.length; e < BY; e++) {
                B3 = BZ.length;
                Ag.find(B1, this[e], BZ);
                if (e > 0) {
                    for (B0 = B3; B0 < BZ.length; B0++) {
                        for (B2 = 0; B2 < B3; B2++) {
                            if (BZ[B2] === BZ[B0]) {
                                BZ.splice(B0--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return BZ
        }, has: function (BZ) {
            var B0, e = Ag(BZ, this), BY = e.length;
            return this.filter(function () {
                for (B0 = 0; B0 < BY; B0++) {
                    if (Ag.contains(this, e[B0])) {
                        return true
                    }
                }
            })
        }, not: function (e) {
            return this.pushStack(Ae(this, e, false), "not", e)
        }, filter: function (e) {
            return this.pushStack(Ae(this, e, true), "filter", e)
        }, is: function (e) {
            return !!e && (typeof e === "string" ? l.test(e) ? Ag(e, this.context).index(this[0]) >= 0 : Ag.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (BY, B2) {
            var BZ, B1 = 0, B3 = this.length, B0 = [],
                e = l.test(BY) || typeof BY !== "string" ? Ag(BY, B2 || this.context) : 0;
            for (; B1 < B3; B1++) {
                BZ = this[B1];
                while (BZ && BZ.ownerDocument && BZ !== B2 && BZ.nodeType !== 11) {
                    if (e ? e.index(BZ) > -1 : Ag.find.matchesSelector(BZ, BY)) {
                        B0.push(BZ);
                        break
                    }
                    BZ = BZ.parentNode
                }
            }
            B0 = B0.length > 1 ? Ag.unique(B0) : B0;
            return this.pushStack(B0, "closest", BY)
        }, index: function (e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.prevAll().length : -1
            }
            if (typeof e === "string") {
                return Ag.inArray(this[0], Ag(e))
            }
            return Ag.inArray(e.jquery ? e[0] : e, this)
        }, add: function (BZ, BY) {
            var e = typeof BZ === "string" ? Ag(BZ, BY) : Ag.makeArray(BZ && BZ.nodeType ? [BZ] : BZ),
                B0 = Ag.merge(this.get(), e);
            return this.pushStack(Bt(e[0]) || Bt(B0[0]) ? B0 : Ag.unique(B0))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });
    Ag.fn.andSelf = Ag.fn.addBack;
    function Bt(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function Au(BY, e) {
        do {
            BY = BY[e]
        } while (BY && BY.nodeType !== 1);
        return BY
    }

    Ag.each({
        parent: function (BY) {
            var e = BY.parentNode;
            return e && e.nodeType !== 11 ? e : null
        }, parents: function (e) {
            return Ag.dir(e, "parentNode")
        }, parentsUntil: function (BY, BZ, e) {
            return Ag.dir(BY, "parentNode", e)
        }, next: function (e) {
            return Au(e, "nextSibling")
        }, prev: function (e) {
            return Au(e, "previousSibling")
        }, nextAll: function (e) {
            return Ag.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Ag.dir(e, "previousSibling")
        }, nextUntil: function (BY, BZ, e) {
            return Ag.dir(BY, "nextSibling", e)
        }, prevUntil: function (BY, BZ, e) {
            return Ag.dir(BY, "previousSibling", e)
        }, siblings: function (e) {
            return Ag.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Ag.sibling(e.firstChild)
        }, contents: function (e) {
            return Ag.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Ag.merge([], e.childNodes)
        }
    }, function (BY, e) {
        Ag.fn[BY] = function (BZ, B0) {
            var B1 = Ag.map(this, e, BZ);
            if (!AX.test(BY)) {
                B0 = BZ
            }
            if (B0 && typeof B0 === "string") {
                B1 = Ag.filter(B0, B1)
            }
            B1 = this.length > 1 && !AV[BY] ? Ag.unique(B1) : B1;
            if (this.length > 1 && R.test(BY)) {
                B1 = B1.reverse()
            }
            return this.pushStack(B1, BY, AT.call(arguments).join(","))
        }
    });
    Ag.extend({
        filter: function (BY, BZ, e) {
            if (e) {
                BY = ":not(" + BY + ")"
            }
            return BZ.length === 1 ? Ag.find.matchesSelector(BZ[0], BY) ? [BZ[0]] : [] : Ag.find.matches(BY, BZ)
        }, dir: function (BZ, e, BY) {
            var B0 = [], B1 = BZ[e];
            while (B1 && B1.nodeType !== 9 && (BY === AO || B1.nodeType !== 1 || !Ag(B1).is(BY))) {
                if (B1.nodeType === 1) {
                    B0.push(B1)
                }
                B1 = B1[e]
            }
            return B0
        }, sibling: function (BY, BZ) {
            var e = [];
            for (; BY; BY = BY.nextSibling) {
                if (BY.nodeType === 1 && BY !== BZ) {
                    e.push(BY)
                }
            }
            return e
        }
    });
    function Ae(BY, BZ, B0) {
        BZ = BZ || 0;
        if (Ag.isFunction(BZ)) {
            return Ag.grep(BY, function (B1, B3) {
                var B2 = !!BZ.call(B1, B3, B1);
                return B2 === B0
            })
        } else {
            if (BZ.nodeType) {
                return Ag.grep(BY, function (B1, B2) {
                    return (B1 === BZ) === B0
                })
            } else {
                if (typeof BZ === "string") {
                    var e = Ag.grep(BY, function (B1) {
                        return B1.nodeType === 1
                    });
                    if (BH.test(BZ)) {
                        return Ag.filter(BZ, e, !B0)
                    } else {
                        BZ = Ag.filter(BZ, e)
                    }
                }
            }
        }
        return Ag.grep(BY, function (B1, B2) {
            return (Ag.inArray(B1, BZ) >= 0) === B0
        })
    }

    function y(e) {
        var BY = AU.split("|"), BZ = e.createDocumentFragment();
        if (BZ.createElement) {
            while (BY.length) {
                BZ.createElement(BY.pop())
            }
        }
        return BZ
    }

    var AU = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Bg = / jQuery\d+="(?:null|\d+)"/g, Bq = /^\s+/,
        AC = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, A5 = /<([\w:]+)/, K = /<tbody/i,
        O = /<|&#?\w+;/, BP = /<(?:script|style|link)/i, p = /<(?:script|object|embed|option|style)/i,
        Bi = new RegExp("<(?:" + AU + ")[\\s/>]", "i"), Bb = /^(?:checkbox|radio)$/,
        AL = /checked\s*(?:[^=]|=\s*.checked.)/i, AS = /\/(java|ecma)script/i,
        N = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, A7 = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, BD = y(BT), Ai = BD.appendChild(BT.createElement("div"));
    A7.optgroup = A7.option;
    A7.tbody = A7.tfoot = A7.colgroup = A7.caption = A7.thead;
    A7.th = A7.td;
    if (!Ag.support.htmlSerialize) {
        A7._default = [1, "X<div>", "</div>"]
    }
    Ag.fn.extend({
        text: function (e) {
            return Ag.access(this, function (BY) {
                return BY === AO ? Ag.text(this) : this.empty().append((this[0] && this[0].ownerDocument || BT).createTextNode(BY))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (Ag.isFunction(e)) {
                return this.each(function (BZ) {
                    Ag(this).wrapAll(e.call(this, BZ))
                })
            }
            if (this[0]) {
                var BY = Ag(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    BY.insertBefore(this[0])
                }
                BY.map(function () {
                    var BZ = this;
                    while (BZ.firstChild && BZ.firstChild.nodeType === 1) {
                        BZ = BZ.firstChild
                    }
                    return BZ
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (Ag.isFunction(e)) {
                return this.each(function (BY) {
                    Ag(this).wrapInner(e.call(this, BY))
                })
            }
            return this.each(function () {
                var BY = Ag(this), BZ = BY.contents();
                if (BZ.length) {
                    BZ.wrapAll(e)
                } else {
                    BY.append(e)
                }
            })
        }, wrap: function (e) {
            var BY = Ag.isFunction(e);
            return this.each(function (BZ) {
                Ag(this).wrapAll(BY ? e.call(this, BZ) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!Ag.nodeName(this, "body")) {
                    Ag(this).replaceWith(this.childNodes)
                }
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        }, before: function () {
            if (!Bt(this[0])) {
                return this.domManip(arguments, false, function (BY) {
                    this.parentNode.insertBefore(BY, this)
                })
            }
            if (arguments.length) {
                var e = Ag.clean(arguments);
                return this.pushStack(Ag.merge(e, this), "before", this.selector)
            }
        }, after: function () {
            if (!Bt(this[0])) {
                return this.domManip(arguments, false, function (BY) {
                    this.parentNode.insertBefore(BY, this.nextSibling)
                })
            }
            if (arguments.length) {
                var e = Ag.clean(arguments);
                return this.pushStack(Ag.merge(this, e), "after", this.selector)
            }
        }, remove: function (BZ, BY) {
            var e, B0 = 0;
            for (; (e = this[B0]) != null; B0++) {
                if (!BZ || Ag.filter(BZ, [e]).length) {
                    if (!BY && e.nodeType === 1) {
                        Ag.cleanData(e.getElementsByTagName("*"));
                        Ag.cleanData([e])
                    }
                    if (e.parentNode) {
                        e.parentNode.removeChild(e)
                    }
                }
            }
            return this
        }, empty: function () {
            var e, BY = 0;
            for (; (e = this[BY]) != null; BY++) {
                if (e.nodeType === 1) {
                    Ag.cleanData(e.getElementsByTagName("*"))
                }
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
            }
            return this
        }, clone: function (BY, e) {
            BY = BY == null ? false : BY;
            e = e == null ? BY : e;
            return this.map(function () {
                return Ag.clone(this, BY, e)
            })
        }, html: function (e) {
            return Ag.access(this, function (BY) {
                var BZ = this[0] || {}, B0 = 0, B2 = this.length;
                if (BY === AO) {
                    return BZ.nodeType === 1 ? BZ.innerHTML.replace(Bg, "") : AO
                }
                if (typeof BY === "string" && !BP.test(BY) && (Ag.support.htmlSerialize || !Bi.test(BY)) && (Ag.support.leadingWhitespace || !Bq.test(BY)) && !A7[(A5.exec(BY) || ["", ""])[1].toLowerCase()]) {
                    BY = BY.replace(AC, "<$1></$2>");
                    try {
                        for (; B0 < B2; B0++) {
                            BZ = this[B0] || {};
                            if (BZ.nodeType === 1) {
                                Ag.cleanData(BZ.getElementsByTagName("*"));
                                BZ.innerHTML = BY
                            }
                        }
                        BZ = 0
                    } catch (B1) {
                    }
                }
                if (BZ) {
                    this.empty().append(BY)
                }
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            if (!Bt(this[0])) {
                if (Ag.isFunction(e)) {
                    return this.each(function (B0) {
                        var BZ = Ag(this), BY = BZ.html();
                        BZ.replaceWith(e.call(this, B0, BY))
                    })
                }
                if (typeof e !== "string") {
                    e = Ag(e).detach()
                }
                return this.each(function () {
                    var BZ = this.nextSibling, BY = this.parentNode;
                    Ag(this).remove();
                    if (BZ) {
                        Ag(BZ).before(e)
                    } else {
                        Ag(BY).append(e)
                    }
                })
            }
            return this.length ? this.pushStack(Ag(Ag.isFunction(e) ? e() : e), "replaceWith", e) : this
        }, detach: function (e) {
            return this.remove(e, true)
        }, domManip: function (B3, e, B7) {
            B3 = [].concat.apply([], B3);
            var B2, B4, BY, B6, B5 = 0, B0 = B3[0], B1 = [], BZ = this.length;
            if (!Ag.support.checkClone && BZ > 1 && typeof B0 === "string" && AL.test(B0)) {
                return this.each(function () {
                    Ag(this).domManip(B3, e, B7)
                })
            }
            if (Ag.isFunction(B0)) {
                return this.each(function (B9) {
                    var B8 = Ag(this);
                    B3[0] = B0.call(this, B9, e ? B8.html() : AO);
                    B8.domManip(B3, e, B7)
                })
            }
            if (this[0]) {
                B2 = Ag.buildFragment(B3, this, B1);
                BY = B2.fragment;
                B4 = BY.firstChild;
                if (BY.childNodes.length === 1) {
                    BY = B4
                }
                if (B4) {
                    e = e && Ag.nodeName(B4, "tr");
                    for (B6 = B2.cacheable || BZ - 1; B5 < BZ; B5++) {
                        B7.call(e && Ag.nodeName(this[B5], "table") ? AB(this[B5], "tbody") : this[B5], B5 === B6 ? BY : Ag.clone(BY, true, true))
                    }
                }
                BY = B4 = null;
                if (B1.length) {
                    Ag.each(B1, function (B9, B8) {
                        if (B8.src) {
                            if (Ag.ajax) {
                                Ag.ajax({
                                    url: B8.src,
                                    type: "GET",
                                    dataType: "script",
                                    async: false,
                                    global: false,
                                    "throws": true
                                })
                            } else {
                                Ag.error("no ajax")
                            }
                        } else {
                            Ag.globalEval((B8.text || B8.textContent || B8.innerHTML || "").replace(N, ""))
                        }
                        if (B8.parentNode) {
                            B8.parentNode.removeChild(B8)
                        }
                    })
                }
            }
            return this
        }
    });
    function AB(BY, e) {
        return BY.getElementsByTagName(e)[0] || BY.appendChild(BY.ownerDocument.createElement(e))
    }

    function Ad(B3, B2) {
        if (B2.nodeType !== 1 || !Ag.hasData(B3)) {
            return
        }
        var B0, e, BY, B4 = Ag._data(B3), BZ = Ag._data(B2, B4), B1 = B4.events;
        if (B1) {
            delete BZ.handle;
            BZ.events = {};
            for (B0 in B1) {
                for (e = 0, BY = B1[B0].length; e < BY; e++) {
                    Ag.event.add(B2, B0, B1[B0][e])
                }
            }
        }
        if (BZ.data) {
            BZ.data = Ag.extend({}, BZ.data)
        }
    }

    function i(BZ, BY) {
        var e;
        if (BY.nodeType !== 1) {
            return
        }
        if (BY.clearAttributes) {
            BY.clearAttributes()
        }
        if (BY.mergeAttributes) {
            BY.mergeAttributes(BZ)
        }
        e = BY.nodeName.toLowerCase();
        if (e === "object") {
            if (BY.parentNode) {
                BY.outerHTML = BZ.outerHTML
            }
            if (Ag.support.html5Clone && (BZ.innerHTML && !Ag.trim(BY.innerHTML))) {
                BY.innerHTML = BZ.innerHTML
            }
        } else {
            if (e === "input" && Bb.test(BZ.type)) {
                BY.defaultChecked = BY.checked = BZ.checked;
                if (BY.value !== BZ.value) {
                    BY.value = BZ.value
                }
            } else {
                if (e === "option") {
                    BY.selected = BZ.defaultSelected
                } else {
                    if (e === "input" || e === "textarea") {
                        BY.defaultValue = BZ.defaultValue
                    } else {
                        if (e === "script" && BY.text !== BZ.text) {
                            BY.text = BZ.text
                        }
                    }
                }
            }
        }
        BY.removeAttribute(Ag.expando)
    }

    Ag.buildFragment = function (BZ, B0, B1) {
        var B3, BY, B2, e = BZ[0];
        B0 = B0 || BT;
        B0 = !B0.nodeType && B0[0] || B0;
        B0 = B0.ownerDocument || B0;
        if (BZ.length === 1 && typeof e === "string" && e.length < 512 && B0 === BT && e.charAt(0) === "<" && !p.test(e) && (Ag.support.checkClone || !AL.test(e)) && (Ag.support.html5Clone || !Bi.test(e))) {
            BY = true;
            B3 = Ag.fragments[e];
            B2 = B3 !== AO
        }
        if (!B3) {
            B3 = B0.createDocumentFragment();
            Ag.clean(BZ, B0, B3, B1);
            if (BY) {
                Ag.fragments[e] = B2 && B3
            }
        }
        return {fragment: B3, cacheable: BY}
    };
    Ag.fragments = {};
    Ag.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (BY, e) {
        Ag.fn[BY] = function (B2) {
            var B5, B3 = 0, BZ = [], B1 = Ag(B2), B4 = B1.length, B0 = this.length === 1 && this[0].parentNode;
            if ((B0 == null || B0 && B0.nodeType === 11 && B0.childNodes.length === 1) && B4 === 1) {
                B1[e](this[0]);
                return this
            } else {
                for (; B3 < B4; B3++) {
                    B5 = (B3 > 0 ? this.clone(true) : this).get();
                    Ag(B1[B3])[e](B5);
                    BZ = BZ.concat(B5)
                }
                return this.pushStack(BZ, BY, B1.selector)
            }
        }
    });
    function AR(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }

    function BO(e) {
        if (Bb.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }

    Ag.extend({
        clone: function (B0, BZ, e) {
            var BY, B1, B2, B3;
            if (Ag.support.html5Clone || Ag.isXMLDoc(B0) || !Bi.test("<" + B0.nodeName + ">")) {
                B3 = B0.cloneNode(true)
            } else {
                Ai.innerHTML = B0.outerHTML;
                Ai.removeChild(B3 = Ai.firstChild)
            }
            if ((!Ag.support.noCloneEvent || !Ag.support.noCloneChecked) && (B0.nodeType === 1 || B0.nodeType === 11) && !Ag.isXMLDoc(B0)) {
                i(B0, B3);
                BY = AR(B0);
                B1 = AR(B3);
                for (B2 = 0; BY[B2]; ++B2) {
                    if (B1[B2]) {
                        i(BY[B2], B1[B2])
                    }
                }
            }
            if (BZ) {
                Ad(B0, B3);
                if (e) {
                    BY = AR(B0);
                    B1 = AR(B3);
                    for (B2 = 0; BY[B2]; ++B2) {
                        Ad(BY[B2], B1[B2])
                    }
                }
            }
            BY = B1 = null;
            return B3
        }, clean: function (B9, Cb, B5, Ce) {
            var B6, B7, e, Cd, BY, B3, Cc, BZ, B4, B8, Ca, B2, B1 = Cb === BT && BD, B0 = [];
            if (!Cb || typeof Cb.createDocumentFragment === "undefined") {
                Cb = BT
            }
            for (B6 = 0; (e = B9[B6]) != null; B6++) {
                if (typeof e === "number") {
                    e += ""
                }
                if (!e) {
                    continue
                }
                if (typeof e === "string") {
                    if (!O.test(e)) {
                        e = Cb.createTextNode(e)
                    } else {
                        B1 = B1 || y(Cb);
                        Cc = Cb.createElement("div");
                        B1.appendChild(Cc);
                        e = e.replace(AC, "<$1></$2>");
                        Cd = (A5.exec(e) || ["", ""])[1].toLowerCase();
                        BY = A7[Cd] || A7._default;
                        B3 = BY[0];
                        Cc.innerHTML = BY[1] + e + BY[2];
                        while (B3--) {
                            Cc = Cc.lastChild
                        }
                        if (!Ag.support.tbody) {
                            BZ = K.test(e);
                            B4 = Cd === "table" && !BZ ? Cc.firstChild && Cc.firstChild.childNodes : BY[1] === "<table>" && !BZ ? Cc.childNodes : [];
                            for (B7 = B4.length - 1; B7 >= 0; --B7) {
                                if (Ag.nodeName(B4[B7], "tbody") && !B4[B7].childNodes.length) {
                                    B4[B7].parentNode.removeChild(B4[B7])
                                }
                            }
                        }
                        if (!Ag.support.leadingWhitespace && Bq.test(e)) {
                            Cc.insertBefore(Cb.createTextNode(Bq.exec(e)[0]), Cc.firstChild)
                        }
                        e = Cc.childNodes;
                        Cc.parentNode.removeChild(Cc)
                    }
                }
                if (e.nodeType) {
                    B0.push(e)
                } else {
                    Ag.merge(B0, e)
                }
            }
            if (Cc) {
                e = Cc = B1 = null
            }
            if (!Ag.support.appendChecked) {
                for (B6 = 0; (e = B0[B6]) != null; B6++) {
                    if (Ag.nodeName(e, "input")) {
                        BO(e)
                    } else {
                        if (typeof e.getElementsByTagName !== "undefined") {
                            Ag.grep(e.getElementsByTagName("input"), BO)
                        }
                    }
                }
            }
            if (B5) {
                Ca = function (Cf) {
                    if (!Cf.type || AS.test(Cf.type)) {
                        return Ce ? Ce.push(Cf.parentNode ? Cf.parentNode.removeChild(Cf) : Cf) : B5.appendChild(Cf)
                    }
                };
                for (B6 = 0; (e = B0[B6]) != null; B6++) {
                    if (!(Ag.nodeName(e, "script") && Ca(e))) {
                        B5.appendChild(e);
                        if (typeof e.getElementsByTagName !== "undefined") {
                            B2 = Ag.grep(Ag.merge([], e.getElementsByTagName("script")), Ca);
                            B0.splice.apply(B0, [B6 + 1, 0].concat(B2));
                            B6 += B2.length
                        }
                    }
                }
            }
            return B0
        }, cleanData: function (B3, B5) {
            var B1, BY, B7, B2, e = 0, B4 = Ag.expando, B6 = Ag.cache, BZ = Ag.support.deleteExpando,
                B0 = Ag.event.special;
            for (; (B7 = B3[e]) != null; e++) {
                if (B5 || Ag.acceptData(B7)) {
                    BY = B7[B4];
                    B1 = BY && B6[BY];
                    if (B1) {
                        if (B1.events) {
                            for (B2 in B1.events) {
                                if (B0[B2]) {
                                    Ag.event.remove(B7, B2)
                                } else {
                                    Ag.removeEvent(B7, B2, B1.handle)
                                }
                            }
                        }
                        if (B6[BY]) {
                            delete B6[BY];
                            if (BZ) {
                                delete B7[B4]
                            } else {
                                if (B7.removeAttribute) {
                                    B7.removeAttribute(B4)
                                } else {
                                    B7[B4] = null
                                }
                            }
                            Ag.deletedIds.push(BY)
                        }
                    }
                }
            }
        }
    });
    (function () {
        var BY, e;
        Ag.uaMatch = function (B0) {
            B0 = B0.toLowerCase();
            var BZ = /(chrome)[ \/]([\w.]+)/.exec(B0) || /(webkit)[ \/]([\w.]+)/.exec(B0) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(B0) || /(msie) ([\w.]+)/.exec(B0) || B0.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(B0) || [];
            return {browser: BZ[1] || "", version: BZ[2] || "0"}
        };
        BY = Ag.uaMatch(Bp.userAgent);
        e = {};
        if (BY.browser) {
            e[BY.browser] = true;
            e.version = BY.version
        }
        if (e.chrome) {
            e.webkit = true
        } else {
            if (e.webkit) {
                e.safari = true
            }
        }
        Ag.browser = e;
        Ag.sub = function () {
            function BZ(B3, B2) {
                return new BZ.fn.init(B3, B2)
            }

            Ag.extend(true, BZ, this);
            BZ.superclass = this;
            BZ.fn = BZ.prototype = this();
            BZ.fn.constructor = BZ;
            BZ.sub = this.sub;
            BZ.fn.init = function B1(B3, B2) {
                if (B2 && B2 instanceof Ag && !(B2 instanceof BZ)) {
                    B2 = BZ(B2)
                }
                return Ag.fn.init.call(this, B3, B2, B0)
            };
            BZ.fn.init.prototype = BZ.fn;
            var B0 = BZ(BT);
            return BZ
        }
    })();
    var z, h, BA, BQ = /alpha\([^)]*\)/i, B = /opacity=([^)]*)/, W = /^(top|right|bottom|left)$/,
        AJ = /^(none|table(?!-c[ea]).+)/, u = /^margin/, Ap = new RegExp("^(" + w + ")(.*)$", "i"),
        Ar = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), AM = new RegExp("^([-+])=(" + w + ")", "i"),
        BK = {BODY: "block"}, BJ = {position: "absolute", visibility: "hidden", display: "block"},
        A3 = {letterSpacing: 0, fontWeight: 400}, Af = ["Top", "Right", "Bottom", "Left"],
        d = ["Webkit", "O", "Moz", "ms"], A9 = Ag.fn.toggle;

    function b(BY, e) {
        if (e in BY) {
            return e
        }
        var B1 = e.charAt(0).toUpperCase() + e.slice(1), BZ = e, B0 = d.length;
        while (B0--) {
            e = d[B0] + B1;
            if (e in BY) {
                return e
            }
        }
        return BZ
    }

    function t(BY, e) {
        BY = e || BY;
        return Ag.css(BY, "display") === "none" || !Ag.contains(BY.ownerDocument, BY)
    }

    function AH(BZ, B1) {
        var e, B2, B3 = [], B0 = 0, BY = BZ.length;
        for (; B0 < BY; B0++) {
            e = BZ[B0];
            if (!e.style) {
                continue
            }
            B3[B0] = Ag._data(e, "olddisplay");
            if (B1) {
                if (!B3[B0] && e.style.display === "none") {
                    e.style.display = ""
                }
                if (e.style.display === "" && t(e)) {
                    B3[B0] = Ag._data(e, "olddisplay", s(e.nodeName))
                }
            } else {
                B2 = z(e, "display");
                if (!B3[B0] && B2 !== "none") {
                    Ag._data(e, "olddisplay", B2)
                }
            }
        }
        for (B0 = 0; B0 < BY; B0++) {
            e = BZ[B0];
            if (!e.style) {
                continue
            }
            if (!B1 || e.style.display === "none" || e.style.display === "") {
                e.style.display = B1 ? B3[B0] || "" : "none"
            }
        }
        return BZ
    }

    Ag.fn.extend({
        css: function (e, BY) {
            return Ag.access(this, function (B0, BZ, B1) {
                return B1 !== AO ? Ag.style(B0, BZ, B1) : Ag.css(B0, BZ)
            }, e, BY, arguments.length > 1)
        }, show: function () {
            return AH(this, true)
        }, hide: function () {
            return AH(this)
        }, toggle: function (e, BY) {
            var BZ = typeof e === "boolean";
            if (Ag.isFunction(e) && Ag.isFunction(BY)) {
                return A9.apply(this, arguments)
            }
            return this.each(function () {
                if (BZ ? e : t(this)) {
                    Ag(this).show()
                } else {
                    Ag(this).hide()
                }
            })
        }
    });
    Ag.extend({
        cssHooks: {
            opacity: {
                get: function (BY, e) {
                    if (e) {
                        var BZ = z(BY, "opacity");
                        return BZ === "" ? "1" : BZ
                    }
                }
            }
        },
        cssNumber: {
            "fillOpacity": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        cssProps: {"float": Ag.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (B5, B3, B1, B7) {
            if (!B5 || B5.nodeType === 3 || B5.nodeType === 8 || !B5.style) {
                return
            }
            var B0, B2, BY, BZ = Ag.camelCase(B3), B6 = B5.style;
            B3 = Ag.cssProps[BZ] || (Ag.cssProps[BZ] = b(B6, BZ));
            BY = Ag.cssHooks[B3] || Ag.cssHooks[BZ];
            if (B1 !== AO) {
                B2 = typeof B1;
                if (B2 === "string" && (B0 = AM.exec(B1))) {
                    B1 = (B0[1] + 1) * B0[2] + parseFloat(Ag.css(B5, B3));
                    B2 = "number"
                }
                if (B1 == null || B2 === "number" && isNaN(B1)) {
                    return
                }
                if (B2 === "number" && !Ag.cssNumber[BZ]) {
                    B1 += "px"
                }
                if (!BY || !("set" in BY) || (B1 = BY.set(B5, B1, B7)) !== AO) {
                    try {
                        B6[B3] = B1
                    } catch (B4) {
                    }
                }
            } else {
                if (BY && "get" in BY && (B0 = BY.get(B5, false, B7)) !== AO) {
                    return B0
                }
                return B6[B3]
            }
        },
        css: function (B3, B1, BZ, B4) {
            var B0, B2, e, BY = Ag.camelCase(B1);
            B1 = Ag.cssProps[BY] || (Ag.cssProps[BY] = b(B3.style, BY));
            e = Ag.cssHooks[B1] || Ag.cssHooks[BY];
            if (e && "get" in e) {
                B0 = e.get(B3, true, B4)
            }
            if (B0 === AO) {
                B0 = z(B3, B1)
            }
            if (B0 === "normal" && B1 in A3) {
                B0 = A3[B1]
            }
            if (BZ || B4 !== AO) {
                B2 = parseFloat(B0);
                return BZ || Ag.isNumeric(B2) ? B2 || 0 : B0
            }
            return B0
        },
        swap: function (BY, B0, B2) {
            var BZ, e, B1 = {};
            for (e in B0) {
                B1[e] = BY.style[e];
                BY.style[e] = B0[e]
            }
            BZ = B2.call(BY);
            for (e in B0) {
                BY.style[e] = B1[e]
            }
            return BZ
        }
    });
    if (AW.getComputedStyle) {
        z = function (B1, B2) {
            var BZ, BY, B0, B3, e = AW.getComputedStyle(B1, null), B4 = B1.style;
            if (e) {
                BZ = e.getPropertyValue(B2) || e[B2];
                if (BZ === "" && !Ag.contains(B1.ownerDocument, B1)) {
                    BZ = Ag.style(B1, B2)
                }
                if (Ar.test(BZ) && u.test(B2)) {
                    BY = B4.width;
                    B0 = B4.minWidth;
                    B3 = B4.maxWidth;
                    B4.minWidth = B4.maxWidth = B4.width = BZ;
                    BZ = e.width;
                    B4.width = BY;
                    B4.minWidth = B0;
                    B4.maxWidth = B3
                }
            }
            return BZ
        }
    } else {
        if (BT.documentElement.currentStyle) {
            z = function (B0, e) {
                var B1, BY, B2 = B0.currentStyle && B0.currentStyle[e], BZ = B0.style;
                if (B2 == null && BZ && BZ[e]) {
                    B2 = BZ[e]
                }
                if (Ar.test(B2) && !W.test(e)) {
                    B1 = BZ.left;
                    BY = B0.runtimeStyle && B0.runtimeStyle.left;
                    if (BY) {
                        B0.runtimeStyle.left = B0.currentStyle.left
                    }
                    BZ.left = e === "fontSize" ? "1em" : B2;
                    B2 = BZ.pixelLeft + "px";
                    BZ.left = B1;
                    if (BY) {
                        B0.runtimeStyle.left = BY
                    }
                }
                return B2 === "" ? "auto" : B2
            }
        }
    }
    function Bu(BZ, e, BY) {
        var B0 = Ap.exec(e);
        return B0 ? Math.max(0, B0[1] - (BY || 0)) + (B0[2] || "px") : e
    }

    function A4(BZ, BY, B1, e) {
        var B0 = B1 === (e ? "border" : "content") ? 4 : BY === "width" ? 1 : 0, B2 = 0;
        for (; B0 < 4; B0 += 2) {
            if (B1 === "margin") {
                B2 += Ag.css(BZ, B1 + Af[B0], true)
            }
            if (e) {
                if (B1 === "content") {
                    B2 -= parseFloat(z(BZ, "padding" + Af[B0])) || 0
                }
                if (B1 !== "margin") {
                    B2 -= parseFloat(z(BZ, "border" + Af[B0] + "Width")) || 0
                }
            } else {
                B2 += parseFloat(z(BZ, "padding" + Af[B0])) || 0;
                if (B1 !== "padding") {
                    B2 += parseFloat(z(BZ, "border" + Af[B0] + "Width")) || 0
                }
            }
        }
        return B2
    }

    function BR(BZ, BY, B1) {
        var B2 = BY === "width" ? BZ.offsetWidth : BZ.offsetHeight, e = true,
            B0 = Ag.support.boxSizing && Ag.css(BZ, "boxSizing") === "border-box";
        if (B2 <= 0 || B2 == null) {
            B2 = z(BZ, BY);
            if (B2 < 0 || B2 == null) {
                B2 = BZ.style[BY]
            }
            if (Ar.test(B2)) {
                return B2
            }
            e = B0 && (Ag.support.boxSizingReliable || B2 === BZ.style[BY]);
            B2 = parseFloat(B2) || 0
        }
        return (B2 + A4(BZ, BY, B1 || (B0 ? "border" : "content"), e)) + "px"
    }

    function s(e) {
        if (BK[e]) {
            return BK[e]
        }
        var BY = Ag("<" + e + ">").appendTo(BT.body), BZ = BY.css("display");
        BY.remove();
        if (BZ === "none" || BZ === "") {
            h = BT.body.appendChild(h || Ag.extend(BT.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!BA || !h.createElement) {
                BA = (h.contentWindow || h.contentDocument).document;
                BA.write("<!doctype html><html><body>");
                BA.close()
            }
            BY = BA.body.appendChild(BA.createElement(e));
            BZ = z(BY, "display");
            BT.body.removeChild(h)
        }
        BK[e] = BZ;
        return BZ
    }

    Ag.each(["height", "width"], function (BY, e) {
        Ag.cssHooks[e] = {
            get: function (B0, BZ, B1) {
                if (BZ) {
                    if (B0.offsetWidth === 0 && AJ.test(z(B0, "display"))) {
                        return Ag.swap(B0, BJ, function () {
                            return BR(B0, e, B1)
                        })
                    } else {
                        return BR(B0, e, B1)
                    }
                }
            }, set: function (B0, BZ, B1) {
                return Bu(B0, BZ, B1 ? A4(B0, e, B1, Ag.support.boxSizing && Ag.css(B0, "boxSizing") === "border-box") : 0)
            }
        }
    });
    if (!Ag.support.opacity) {
        Ag.cssHooks.opacity = {
            get: function (BY, e) {
                return B.test((e && BY.currentStyle ? BY.currentStyle.filter : BY.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            }, set: function (B0, BY) {
                var BZ = B0.style, e = B0.currentStyle, B1 = Ag.isNumeric(BY) ? "alpha(opacity=" + BY * 100 + ")" : "",
                    B2 = e && e.filter || BZ.filter || "";
                BZ.zoom = 1;
                if (BY >= 1 && Ag.trim(B2.replace(BQ, "")) === "" && BZ.removeAttribute) {
                    BZ.removeAttribute("filter");
                    if (e && !e.filter) {
                        return
                    }
                }
                BZ.filter = BQ.test(B2) ? B2.replace(BQ, B1) : B2 + " " + B1
            }
        }
    }
    Ag(function () {
        if (!Ag.support.reliableMarginRight) {
            Ag.cssHooks.marginRight = {
                get: function (BY, e) {
                    return Ag.swap(BY, {"display": "inline-block"}, function () {
                        if (e) {
                            return z(BY, "marginRight")
                        }
                    })
                }
            }
        }
        if (!Ag.support.pixelPosition && Ag.fn.position) {
            Ag.each(["top", "left"], function (e, BY) {
                Ag.cssHooks[BY] = {
                    get: function (B0, BZ) {
                        if (BZ) {
                            var B1 = z(B0, BY);
                            return Ar.test(B1) ? Ag(B0).position()[BY] + "px" : B1
                        }
                    }
                }
            })
        }
    });
    if (Ag.expr && Ag.expr.filters) {
        Ag.expr.filters.hidden = function (e) {
            return (e.offsetWidth === 0 && e.offsetHeight === 0) || (!Ag.support.reliableHiddenOffsets && ((e.style && e.style.display) || z(e, "display")) === "none")
        };
        Ag.expr.filters.visible = function (e) {
            return !Ag.expr.filters.hidden(e)
        }
    }
    Ag.each({margin: "", padding: "", border: "Width"}, function (e, BY) {
        Ag.cssHooks[e + BY] = {
            expand: function (BZ) {
                var B1, B2 = typeof BZ === "string" ? BZ.split(" ") : [BZ], B0 = {};
                for (B1 = 0; B1 < 4; B1++) {
                    B0[e + Af[B1] + BY] = B2[B1] || B2[B1 - 2] || B2[0]
                }
                return B0
            }
        };
        if (!u.test(e)) {
            Ag.cssHooks[e + BY].set = Bu
        }
    });
    var g = /%20/g, Aw = /\[\]$/, Ba = /\r?\n/g,
        Bj = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        F = /^(?:select|textarea)/i;
    Ag.fn.extend({
        serialize: function () {
            return Ag.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? Ag.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || F.test(this.nodeName) || Bj.test(this.type))
            }).map(function (BY, e) {
                var BZ = Ag(this).val();
                return BZ == null ? null : Ag.isArray(BZ) ? Ag.map(BZ, function (B1, B0) {
                    return {name: e.name, value: B1.replace(Ba, "\r\n")}
                }) : {name: e.name, value: BZ.replace(Ba, "\r\n")}
            }).get()
        }
    });
    Ag.param = function (BZ, B1) {
        var B0, e = [], BY = function (B3, B2) {
            B2 = Ag.isFunction(B2) ? B2() : (B2 == null ? "" : B2);
            e[e.length] = encodeURIComponent(B3) + "=" + encodeURIComponent(B2)
        };
        if (B1 === AO) {
            B1 = Ag.ajaxSettings && Ag.ajaxSettings.traditional
        }
        if (Ag.isArray(BZ) || (BZ.jquery && !Ag.isPlainObject(BZ))) {
            Ag.each(BZ, function () {
                BY(this.name, this.value)
            })
        } else {
            for (B0 in BZ) {
                Az(B0, BZ[B0], B1, BY)
            }
        }
        return e.join("&").replace(g, "+")
    };
    function Az(BZ, B1, e, BY) {
        var B0;
        if (Ag.isArray(B1)) {
            Ag.each(B1, function (B3, B2) {
                if (e || Aw.test(BZ)) {
                    BY(BZ, B2)
                } else {
                    Az(BZ + "[" + (typeof B2 === "object" ? B3 : "") + "]", B2, e, BY)
                }
            })
        } else {
            if (!e && Ag.type(B1) === "object") {
                for (B0 in B1) {
                    Az(BZ + "[" + B0 + "]", B1[B0], e, BY)
                }
            } else {
                BY(BZ, B1)
            }
        }
    }

    var Bn, x, Bd = /#.*$/, Am = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        BM = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, A8 = /^(?:GET|HEAD)$/, AY = /^\/\//,
        H = /\?/, Z = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, AE = /([?&])_=[^&]*/,
        Bz = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, o = Ag.fn.load, Bv = {}, q = {}, AQ = ["*/"] + ["*"];
    try {
        x = Bm.href
    } catch (a) {
        x = BT.createElement("a");
        x.href = "";
        x = x.href
    }
    Bn = Bz.exec(x.toLowerCase()) || [];
    function P(e) {
        return function (B1, BZ) {
            if (typeof B1 !== "string") {
                BZ = B1;
                B1 = "*"
            }
            var B3, B0, B2, B4 = B1.toLowerCase().split(Al), BY = 0, B5 = B4.length;
            if (Ag.isFunction(BZ)) {
                for (; BY < B5; BY++) {
                    B3 = B4[BY];
                    B2 = /^\+/.test(B3);
                    if (B2) {
                        B3 = B3.substr(1) || "*"
                    }
                    B0 = e[B3] = e[B3] || [];
                    B0[B2 ? "unshift" : "push"](BZ)
                }
            }
        }
    }

    function Ab(B7, e, B2, B3, B5, B6) {
        B5 = B5 || e.dataTypes[0];
        B6 = B6 || {};
        B6[B5] = true;
        var BZ, B0 = B7[B5], B1 = 0, B4 = B0 ? B0.length : 0, BY = (B7 === Bv);
        for (; B1 < B4 && (BY || !BZ); B1++) {
            BZ = B0[B1](e, B2, B3);
            if (typeof BZ === "string") {
                if (!BY || B6[BZ]) {
                    BZ = AO
                } else {
                    e.dataTypes.unshift(BZ);
                    BZ = Ab(B7, e, B2, B3, BZ, B6)
                }
            }
        }
        if ((BY || !BZ) && !B6["*"]) {
            BZ = Ab(B7, e, B2, B3, "*", B6)
        }
        return BZ
    }

    function A(BY, B1) {
        var e, B0, BZ = Ag.ajaxSettings.flatOptions || {};
        for (e in B1) {
            if (B1[e] !== AO) {
                (BZ[e] ? BY : (B0 || (B0 = {})))[e] = B1[e]
            }
        }
        if (B0) {
            Ag.extend(true, BY, B0)
        }
    }

    Ag.fn.load = function (B0, BZ, B4) {
        if (typeof B0 !== "string" && o) {
            return o.apply(this, arguments)
        }
        if (!this.length) {
            return this
        }
        var B1, e, BY, B3 = this, B2 = B0.indexOf(" ");
        if (B2 >= 0) {
            B1 = B0.slice(B2, B0.length);
            B0 = B0.slice(0, B2)
        }
        if (Ag.isFunction(BZ)) {
            B4 = BZ;
            BZ = AO
        } else {
            if (BZ && typeof BZ === "object") {
                e = "POST"
            }
        }
        Ag.ajax({
            url: B0, type: e, dataType: "html", data: BZ, complete: function (B6, B5) {
                if (B4) {
                    B3.each(B4, BY || [B6.responseText, B5, B6])
                }
            }
        }).done(function (B5) {
            BY = arguments;
            B3.html(B1 ? Ag("<div>").append(B5.replace(Z, "")).find(B1) : B5)
        });
        return this
    };
    Ag.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (BY, e) {
        Ag.fn[e] = function (BZ) {
            return this.on(e, BZ)
        }
    });
    Ag.each(["get", "post"], function (BY, e) {
        Ag[e] = function (B1, B2, BZ, B0) {
            if (Ag.isFunction(B2)) {
                B0 = B0 || BZ;
                BZ = B2;
                B2 = AO
            }
            return Ag.ajax({type: e, url: B1, data: B2, success: BZ, dataType: B0})
        }
    });
    Ag.extend({
        getScript: function (e, BY) {
            return Ag.get(e, AO, BY, "script")
        },
        getJSON: function (BY, BZ, e) {
            return Ag.get(BY, BZ, e, "json")
        },
        ajaxSetup: function (BY, e) {
            if (e) {
                A(BY, Ag.ajaxSettings)
            } else {
                e = BY;
                BY = Ag.ajaxSettings
            }
            A(BY, e);
            return BY
        },
        ajaxSettings: {
            url: x,
            isLocal: BM.test(Bn[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": AQ
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": AW.String, "text html": true, "text json": Ag.parseJSON, "text xml": Ag.parseXML},
            flatOptions: {context: true, url: true}
        },
        ajaxPrefilter: P(Bv),
        ajaxTransport: P(q),
        ajax: function (Cg, B9) {
            if (typeof Cg === "object") {
                B9 = Cg;
                Cg = AO
            }
            B9 = B9 || {};
            var B2, Ce, Cc, B4, Ch, Cl, Ca, B8, B3 = Ag.ajaxSetup({}, B9), Cj = B3.context || B3,
                Ck = Cj !== B3 && (Cj.nodeType || Cj instanceof Ag) ? Ag(Cj) : Ag.event, Cb = Ag.Deferred(),
                BZ = Ag.Callbacks("once memory"), Ci = B3.statusCode || {}, B5 = {}, B7 = {}, B0 = 0, B6 = "canceled",
                Cm = {
                    readyState: 0, setRequestHeader: function (e, Co) {
                        if (!B0) {
                            var Cn = e.toLowerCase();
                            e = B7[Cn] = B7[Cn] || e;
                            B5[e] = Co
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return B0 === 2 ? Ce : null
                    }, getResponseHeader: function (e) {
                        var Cn;
                        if (B0 === 2) {
                            if (!Cc) {
                                Cc = {};
                                while ((Cn = Am.exec(Ce))) {
                                    Cc[Cn[1].toLowerCase()] = Cn[2]
                                }
                            }
                            Cn = Cc[e.toLowerCase()]
                        }
                        return Cn === AO ? null : Cn
                    }, overrideMimeType: function (e) {
                        if (!B0) {
                            B3.mimeType = e
                        }
                        return this
                    }, abort: function (e) {
                        e = e || B6;
                        if (B4) {
                            B4.abort(e)
                        }
                        B1(0, e);
                        return this
                    }
                };

            function B1(Cp, Cv, e, Cu) {
                var Cn, Cr, Cq, Ct, Co, Cs = Cv;
                if (B0 === 2) {
                    return
                }
                B0 = 2;
                if (Ch) {
                    clearTimeout(Ch)
                }
                B4 = AO;
                Ce = Cu || "";
                Cm.readyState = Cp > 0 ? 4 : 0;
                if (e) {
                    Ct = BG(B3, Cm, e)
                }
                if (Cp >= 200 && Cp < 300 || Cp === 304) {
                    if (B3.ifModified) {
                        Co = Cm.getResponseHeader("Last-Modified");
                        if (Co) {
                            Ag.lastModified[B2] = Co
                        }
                        Co = Cm.getResponseHeader("Etag");
                        if (Co) {
                            Ag.etag[B2] = Co
                        }
                    }
                    if (Cp === 304) {
                        Cs = "notmodified";
                        Cn = true
                    } else {
                        Cn = AZ(B3, Ct);
                        Cs = Cn.state;
                        Cr = Cn.data;
                        Cq = Cn.error;
                        Cn = !Cq
                    }
                } else {
                    Cq = Cs;
                    if (!Cs || Cp) {
                        Cs = "error";
                        if (Cp < 0) {
                            Cp = 0
                        }
                    }
                }
                Cm.status = Cp;
                Cm.statusText = (Cv || Cs) + "";
                if (Cn) {
                    Cb.resolveWith(Cj, [Cr, Cs, Cm])
                } else {
                    Cb.rejectWith(Cj, [Cm, Cs, Cq])
                }
                Cm.statusCode(Ci);
                Ci = AO;
                if (Ca) {
                    Ck.trigger("ajax" + (Cn ? "Success" : "Error"), [Cm, B3, Cn ? Cr : Cq])
                }
                BZ.fireWith(Cj, [Cm, Cs]);
                if (Ca) {
                    Ck.trigger("ajaxComplete", [Cm, B3]);
                    if (!(--Ag.active)) {
                        Ag.event.trigger("ajaxStop")
                    }
                }
            }

            Cb.promise(Cm);
            Cm.success = Cm.done;
            Cm.error = Cm.fail;
            Cm.complete = BZ.add;
            Cm.statusCode = function (Cn) {
                if (Cn) {
                    var e;
                    if (B0 < 2) {
                        for (e in Cn) {
                            Ci[e] = [Ci[e], Cn[e]]
                        }
                    } else {
                        e = Cn[Cm.status];
                        Cm.always(e)
                    }
                }
                return this
            };
            B3.url = ((Cg || B3.url) + "").replace(Bd, "").replace(AY, Bn[1] + "//");
            B3.dataTypes = Ag.trim(B3.dataType || "*").toLowerCase().split(Al);
            if (B3.crossDomain == null) {
                Cl = Bz.exec(B3.url.toLowerCase());
                B3.crossDomain = !!(Cl && (Cl[1] !== Bn[1] || Cl[2] !== Bn[2] || (Cl[3] || (Cl[1] === "http:" ? 80 : 443)) != (Bn[3] || (Bn[1] === "http:" ? 80 : 443))))
            }
            if (B3.data && B3.processData && typeof B3.data !== "string") {
                B3.data = Ag.param(B3.data, B3.traditional)
            }
            Ab(Bv, B3, B9, Cm);
            if (B0 === 2) {
                return Cm
            }
            Ca = B3.global;
            B3.type = B3.type.toUpperCase();
            B3.hasContent = !A8.test(B3.type);
            if (Ca && Ag.active++ === 0) {
                Ag.event.trigger("ajaxStart")
            }
            if (!B3.hasContent) {
                if (B3.data) {
                    B3.url += (H.test(B3.url) ? "&" : "?") + B3.data;
                    delete B3.data
                }
                B2 = B3.url;
                if (B3.cache === false) {
                    var BY = Ag.now(), Cd = B3.url.replace(AE, "$1_=" + BY);
                    B3.url = Cd + ((Cd === B3.url) ? (H.test(B3.url) ? "&" : "?") + "_=" + BY : "")
                }
            }
            if (B3.data && B3.hasContent && B3.contentType !== false || B9.contentType) {
                Cm.setRequestHeader("Content-Type", B3.contentType)
            }
            if (B3.ifModified) {
                B2 = B2 || B3.url;
                if (Ag.lastModified[B2]) {
                    Cm.setRequestHeader("If-Modified-Since", Ag.lastModified[B2])
                }
                if (Ag.etag[B2]) {
                    Cm.setRequestHeader("If-None-Match", Ag.etag[B2])
                }
            }
            Cm.setRequestHeader("Accept", B3.dataTypes[0] && B3.accepts[B3.dataTypes[0]] ? B3.accepts[B3.dataTypes[0]] + (B3.dataTypes[0] !== "*" ? ", " + AQ + "; q=0.01" : "") : B3.accepts["*"]);
            for (B8 in B3.headers) {
                Cm.setRequestHeader(B8, B3.headers[B8])
            }
            if (B3.beforeSend && (B3.beforeSend.call(Cj, Cm, B3) === false || B0 === 2)) {
                return Cm.abort()
            }
            B6 = "abort";
            for (B8 in {success: 1, error: 1, complete: 1}) {
                Cm[B8](B3[B8])
            }
            B4 = Ab(q, B3, B9, Cm);
            if (!B4) {
                B1(-1, "No Transport")
            } else {
                Cm.readyState = 1;
                if (Ca) {
                    Ck.trigger("ajaxSend", [Cm, B3])
                }
                if (B3.async && B3.timeout > 0) {
                    Ch = setTimeout(function () {
                        Cm.abort("timeout")
                    }, B3.timeout)
                }
                try {
                    B0 = 1;
                    B4.send(B5, B1)
                } catch (Cf) {
                    if (B0 < 2) {
                        B1(-1, Cf)
                    } else {
                        throw Cf
                    }
                }
            }
            return Cm
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    function BG(B5, B2, BY) {
        var BZ, B0, B1, e, B6 = B5.contents, B3 = B5.dataTypes, B4 = B5.responseFields;
        for (B0 in B4) {
            if (B0 in BY) {
                B2[B4[B0]] = BY[B0]
            }
        }
        while (B3[0] === "*") {
            B3.shift();
            if (BZ === AO) {
                BZ = B5.mimeType || B2.getResponseHeader("content-type")
            }
        }
        if (BZ) {
            for (B0 in B6) {
                if (B6[B0] && B6[B0].test(BZ)) {
                    B3.unshift(B0);
                    break
                }
            }
        }
        if (B3[0] in BY) {
            B1 = B3[0]
        } else {
            for (B0 in BY) {
                if (!B3[0] || B5.converters[B0 + " " + B3[0]]) {
                    B1 = B0;
                    break
                }
                if (!e) {
                    e = B0
                }
            }
            B1 = B1 || e
        }
        if (B1) {
            if (B1 !== B3[0]) {
                B3.unshift(B1)
            }
            return BY[B1]
        }
    }

    function AZ(B8, B1) {
        var B5, B3, BZ, B4, B7 = B8.dataTypes.slice(), B2 = B7[0], B6 = {}, BY = 0;
        if (B8.dataFilter) {
            B1 = B8.dataFilter(B1, B8.dataType)
        }
        if (B7[1]) {
            for (B5 in B8.converters) {
                B6[B5.toLowerCase()] = B8.converters[B5]
            }
        }
        for (; (BZ = B7[++BY]);) {
            if (BZ !== "*") {
                if (B2 !== "*" && B2 !== BZ) {
                    B5 = B6[B2 + " " + BZ] || B6["* " + BZ];
                    if (!B5) {
                        for (B3 in B6) {
                            B4 = B3.split(" ");
                            if (B4[1] === BZ) {
                                B5 = B6[B2 + " " + B4[0]] || B6["* " + B4[0]];
                                if (B5) {
                                    if (B5 === true) {
                                        B5 = B6[B3]
                                    } else {
                                        if (B6[B3] !== true) {
                                            BZ = B4[0];
                                            B7.splice(BY--, 0, BZ)
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (B5 !== true) {
                        if (B5 && B8["throws"]) {
                            B1 = B5(B1)
                        } else {
                            try {
                                B1 = B5(B1)
                            } catch (B0) {
                                return {state: "parsererror", error: B5 ? B0 : "No conversion from " + B2 + " to " + BZ}
                            }
                        }
                    }
                }
                B2 = BZ
            }
        }
        return {state: "success", data: B1}
    }

    var Ao = [], BL = /\?/, Bc = /(=)\?(?=&|$)|\?\?/, j = Ag.now();
    Ag.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Ao.pop() || (Ag.expando + "_" + (j++));
            this[e] = true;
            return e
        }
    });
    Ag.ajaxPrefilter("json jsonp", function (B5, B1, B3) {
        var e, B6, B7, B2 = B5.data, B0 = B5.url, B4 = B5.jsonp !== false, BZ = B4 && Bc.test(B0),
            BY = B4 && !BZ && typeof B2 === "string" && !(B5.contentType || "").indexOf("application/x-www-form-urlencoded") && Bc.test(B2);
        if (B5.dataTypes[0] === "jsonp" || BZ || BY) {
            e = B5.jsonpCallback = Ag.isFunction(B5.jsonpCallback) ? B5.jsonpCallback() : B5.jsonpCallback;
            B6 = AW[e];
            if (BZ) {
                B5.url = B0.replace(Bc, "$1" + e)
            } else {
                if (BY) {
                    B5.data = B2.replace(Bc, "$1" + e)
                } else {
                    if (B4) {
                        B5.url += (BL.test(B0) ? "&" : "?") + B5.jsonp + "=" + e
                    }
                }
            }
            B5.converters["script json"] = function () {
                if (!B7) {
                    Ag.error(e + " was not called")
                }
                return B7[0]
            };
            B5.dataTypes[0] = "json";
            AW[e] = function () {
                B7 = arguments
            };
            B3.always(function () {
                AW[e] = B6;
                if (B5[e]) {
                    B5.jsonpCallback = B1.jsonpCallback;
                    Ao.push(e)
                }
                if (B7 && Ag.isFunction(B6)) {
                    B6(B7[0])
                }
                B7 = B6 = AO
            });
            return "script"
        }
    });
    Ag.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                Ag.globalEval(e);
                return e
            }
        }
    });
    Ag.ajaxPrefilter("script", function (e) {
        if (e.cache === AO) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    Ag.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var BZ, BY = BT.head || BT.getElementsByTagName("head")[0] || BT.documentElement;
            return {
                send: function (B0, B1) {
                    BZ = BT.createElement("script");
                    BZ.async = "async";
                    if (e.scriptCharset) {
                        BZ.charset = e.scriptCharset
                    }
                    BZ.src = e.url;
                    BZ.onload = BZ.onreadystatechange = function (B3, B2) {
                        if (B2 || !BZ.readyState || /loaded|complete/.test(BZ.readyState)) {
                            BZ.onload = BZ.onreadystatechange = null;
                            if (BY && BZ.parentNode) {
                                BY.removeChild(BZ)
                            }
                            BZ = AO;
                            if (!B2) {
                                B1(200, "success")
                            }
                        }
                    };
                    BY.insertBefore(BZ, BY.firstChild)
                }, abort: function () {
                    if (BZ) {
                        BZ.onload(0, 1)
                    }
                }
            }
        }
    });
    var Bs, Q = AW.ActiveXObject ? function () {
        for (var e in Bs) {
            Bs[e](0, 1)
        }
    } : false, A1 = 0;

    function By() {
        try {
            return new AW.XMLHttpRequest()
        } catch (BY) {
        }
    }

    function n() {
        try {
            return new AW.ActiveXObject("Microsoft.XMLHTTP")
        } catch (BY) {
        }
    }

    Ag.ajaxSettings.xhr = AW.ActiveXObject ? function () {
        return !this.isLocal && By() || n()
    } : By;
    (function (e) {
        Ag.extend(Ag.support, {ajax: !!e, cors: !!e && ("withCredentials" in e)})
    })(Ag.ajaxSettings.xhr());
    if (Ag.support.ajax) {
        Ag.ajaxTransport(function (e) {
            if (!e.crossDomain || Ag.support.cors) {
                var BY;
                return {
                    send: function (B3, BZ) {
                        var B4, B1, B2 = e.xhr();
                        if (e.username) {
                            B2.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            B2.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (B1 in e.xhrFields) {
                                B2[B1] = e.xhrFields[B1]
                            }
                        }
                        if (e.mimeType && B2.overrideMimeType) {
                            B2.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !B3["X-Requested-With"]) {
                            B3["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (B1 in B3) {
                                B2.setRequestHeader(B1, B3[B1])
                            }
                        } catch (B0) {
                        }
                        B2.send((e.hasContent && e.data) || null);
                        BY = function (B7, Cc) {
                            var B8, Cd, Ca, B6, B5;
                            try {
                                if (BY && (Cc || B2.readyState === 4)) {
                                    BY = AO;
                                    if (B4) {
                                        B2.onreadystatechange = Ag.noop;
                                        if (Q) {
                                            delete Bs[B4]
                                        }
                                    }
                                    if (Cc) {
                                        if (B2.readyState !== 4) {
                                            B2.abort()
                                        }
                                    } else {
                                        B8 = B2.status;
                                        Ca = B2.getAllResponseHeaders();
                                        B6 = {};
                                        B5 = B2.responseXML;
                                        if (B5 && B5.documentElement) {
                                            B6.xml = B5
                                        }
                                        try {
                                            B6.text = B2.responseText
                                        } catch (B9) {
                                        }
                                        try {
                                            Cd = B2.statusText
                                        } catch (B9) {
                                            Cd = ""
                                        }
                                        if (!B8 && e.isLocal && !e.crossDomain) {
                                            B8 = B6.text ? 200 : 404
                                        } else {
                                            if (B8 === 1223) {
                                                B8 = 204
                                            }
                                        }
                                    }
                                }
                            } catch (Cb) {
                                if (!Cc) {
                                    BZ(-1, Cb)
                                }
                            }
                            if (B6) {
                                BZ(B8, Cd, B6, Ca)
                            }
                        };
                        if (!e.async) {
                            BY()
                        } else {
                            if (B2.readyState === 4) {
                                setTimeout(BY, 0)
                            } else {
                                B4 = ++A1;
                                if (Q) {
                                    if (!Bs) {
                                        Bs = {};
                                        Ag(AW).unload(Q)
                                    }
                                    Bs[B4] = BY
                                }
                                B2.onreadystatechange = BY
                            }
                        }
                    }, abort: function () {
                        if (BY) {
                            BY(0, 1)
                        }
                    }
                }
            }
        })
    }
    var BS, Ax, At = /^(?:toggle|show|hide)$/, BX = new RegExp("^(?:([-+])=|)(" + w + ")([a-z%]*)$", "i"),
        BN = /queueHooks$/, c = [AI], I = {
            "*": [function (BY, B1) {
                var BZ, e, B4 = this.createTween(BY, B1), B2 = BX.exec(B1), B6 = B4.cur(), B5 = +B6 || 0, B0 = 1, B3 = 20;
                if (B2) {
                    BZ = +B2[2];
                    e = B2[3] || (Ag.cssNumber[BY] ? "" : "px");
                    if (e !== "px" && B5) {
                        B5 = Ag.css(B4.elem, BY, true) || BZ || 1;
                        do {
                            B0 = B0 || ".5";
                            B5 = B5 / B0;
                            Ag.style(B4.elem, BY, B5 + e)
                        } while (B0 !== (B0 = B4.cur() / B6) && B0 !== 1 && --B3)
                    }
                    B4.unit = e;
                    B4.start = B5;
                    B4.end = B2[1] ? B5 + (B2[1] + 1) * BZ : BZ
                }
                return B4
            }]
        };

    function Bl() {
        setTimeout(function () {
            BS = AO
        }, 0);
        return (BS = Ag.now())
    }

    function r(BY, e) {
        Ag.each(e, function (B3, B0) {
            var BZ = (I[B3] || []).concat(I["*"]), B2 = 0, B1 = BZ.length;
            for (; B2 < B1; B2++) {
                if (BZ[B2].call(BY, B3, B0)) {
                    return
                }
            }
        })
    }

    function A0(B5, B6, e) {
        var BZ, B2 = 0, B3 = 0, B4 = c.length, B0 = Ag.Deferred().always(function () {
            delete B1.elem
        }), B1 = function () {
            var Cc = BS || Bl(), Cd = Math.max(0, B7.startTime + B7.duration - Cc), B9 = Cd / B7.duration || 0,
                Cb = 1 - B9, Ca = 0, B8 = B7.tweens.length;
            for (; Ca < B8; Ca++) {
                B7.tweens[Ca].run(Cb)
            }
            B0.notifyWith(B5, [B7, Cb, Cd]);
            if (Cb < 1 && B8) {
                return Cd
            } else {
                B0.resolveWith(B5, [B7]);
                return false
            }
        }, B7 = B0.promise({
            elem: B5,
            props: Ag.extend({}, B6),
            opts: Ag.extend(true, {specialEasing: {}}, e),
            originalProperties: B6,
            originalOptions: e,
            startTime: BS || Bl(),
            duration: e.duration,
            tweens: [],
            createTween: function (Cb, Ca, B8) {
                var B9 = Ag.Tween(B5, B7.opts, Cb, Ca, B7.opts.specialEasing[Cb] || B7.opts.easing);
                B7.tweens.push(B9);
                return B9
            },
            stop: function (B9) {
                var Ca = 0, B8 = B9 ? B7.tweens.length : 0;
                for (; Ca < B8; Ca++) {
                    B7.tweens[Ca].run(1)
                }
                if (B9) {
                    B0.resolveWith(B5, [B7, B9])
                } else {
                    B0.rejectWith(B5, [B7, B9])
                }
                return this
            }
        }), BY = B7.props;
        Bf(BY, B7.opts.specialEasing);
        for (; B2 < B4; B2++) {
            BZ = c[B2].call(B7, B5, BY, B7.opts);
            if (BZ) {
                return BZ
            }
        }
        r(B7, BY);
        if (Ag.isFunction(B7.opts.start)) {
            B7.opts.start.call(B5, B7)
        }
        Ag.fx.timer(Ag.extend(B1, {anim: B7, queue: B7.opts.queue, elem: B5}));
        return B7.progress(B7.opts.progress).done(B7.opts.done, B7.opts.complete).fail(B7.opts.fail).always(B7.opts.always)
    }

    function Bf(e, BZ) {
        var B2, BY, B3, B1, B0;
        for (B2 in e) {
            BY = Ag.camelCase(B2);
            B3 = BZ[BY];
            B1 = e[B2];
            if (Ag.isArray(B1)) {
                B3 = B1[1];
                B1 = e[B2] = B1[0]
            }
            if (B2 !== BY) {
                e[BY] = B1;
                delete e[B2]
            }
            B0 = Ag.cssHooks[BY];
            if (B0 && "expand" in B0) {
                B1 = B0.expand(B1);
                delete e[BY];
                for (B2 in B1) {
                    if (!(B2 in e)) {
                        e[B2] = B1[B2];
                        BZ[B2] = B3
                    }
                }
            } else {
                BZ[BY] = B3
            }
        }
    }

    Ag.Animation = Ag.extend(A0, {
        tweener: function (e, B1) {
            if (Ag.isFunction(e)) {
                B1 = e;
                e = ["*"]
            } else {
                e = e.split(" ")
            }
            var BZ, B0 = 0, BY = e.length;
            for (; B0 < BY; B0++) {
                BZ = e[B0];
                I[BZ] = I[BZ] || [];
                I[BZ].unshift(B1)
            }
        }, prefilter: function (BY, e) {
            if (e) {
                c.unshift(BY)
            } else {
                c.push(BY)
            }
        }
    });
    function AI(BY, B0, B7) {
        var B9, B2, e, Cd, BZ, Cb, Cc, B3, B5, Ca = this, B6 = BY.style, B1 = {}, B8 = [], B4 = BY.nodeType && t(BY);
        if (!B7.queue) {
            B3 = Ag._queueHooks(BY, "fx");
            if (B3.unqueued == null) {
                B3.unqueued = 0;
                B5 = B3.empty.fire;
                B3.empty.fire = function () {
                    if (!B3.unqueued) {
                        B5()
                    }
                }
            }
            B3.unqueued++;
            Ca.always(function () {
                Ca.always(function () {
                    B3.unqueued--;
                    if (!Ag.queue(BY, "fx").length) {
                        B3.empty.fire()
                    }
                })
            })
        }
        if (BY.nodeType === 1 && ("height" in B0 || "width" in B0)) {
            B7.overflow = [B6.overflow, B6.overflowX, B6.overflowY];
            if (Ag.css(BY, "display") === "inline" && Ag.css(BY, "float") === "none") {
                if (!Ag.support.inlineBlockNeedsLayout || s(BY.nodeName) === "inline") {
                    B6.display = "inline-block"
                } else {
                    B6.zoom = 1
                }
            }
        }
        if (B7.overflow) {
            B6.overflow = "hidden";
            if (!Ag.support.shrinkWrapBlocks) {
                Ca.done(function () {
                    B6.overflow = B7.overflow[0];
                    B6.overflowX = B7.overflow[1];
                    B6.overflowY = B7.overflow[2]
                })
            }
        }
        for (B9 in B0) {
            e = B0[B9];
            if (At.exec(e)) {
                delete B0[B9];
                Cb = Cb || e === "toggle";
                if (e === (B4 ? "hide" : "show")) {
                    continue
                }
                B8.push(B9)
            }
        }
        Cd = B8.length;
        if (Cd) {
            BZ = Ag._data(BY, "fxshow") || Ag._data(BY, "fxshow", {});
            if ("hidden" in BZ) {
                B4 = BZ.hidden
            }
            if (Cb) {
                BZ.hidden = !B4
            }
            if (B4) {
                Ag(BY).show()
            } else {
                Ca.done(function () {
                    Ag(BY).hide()
                })
            }
            Ca.done(function () {
                var Ce;
                Ag.removeData(BY, "fxshow", true);
                for (Ce in B1) {
                    Ag.style(BY, Ce, B1[Ce])
                }
            });
            for (B9 = 0; B9 < Cd; B9++) {
                B2 = B8[B9];
                Cc = Ca.createTween(B2, B4 ? BZ[B2] : 0);
                B1[B2] = BZ[B2] || Ag.style(BY, B2);
                if (!(B2 in BZ)) {
                    BZ[B2] = Cc.start;
                    if (B4) {
                        Cc.end = Cc.start;
                        Cc.start = B2 === "width" || B2 === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function Ay(BY, B0, B1, BZ, e) {
        return new Ay.prototype.init(BY, B0, B1, BZ, e)
    }

    Ag.Tween = Ay;
    Ay.prototype = {
        constructor: Ay, init: function (BZ, B1, B2, B0, e, BY) {
            this.elem = BZ;
            this.prop = B2;
            this.easing = e || "swing";
            this.options = B1;
            this.start = this.now = this.cur();
            this.end = B0;
            this.unit = BY || (Ag.cssNumber[B2] ? "" : "px")
        }, cur: function () {
            var e = Ay.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ay.propHooks._default.get(this)
        }, run: function (BY) {
            var e, BZ = Ay.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = e = Ag.easing[this.easing](BY, this.options.duration * BY, 0, 1, this.options.duration)
            } else {
                this.pos = e = BY
            }
            this.now = (this.end - this.start) * e + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (BZ && BZ.set) {
                BZ.set(this)
            } else {
                Ay.propHooks._default.set(this)
            }
            return this
        }
    };
    Ay.prototype.init.prototype = Ay.prototype;
    Ay.propHooks = {
        _default: {
            get: function (e) {
                var BY;
                if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                    return e.elem[e.prop]
                }
                BY = Ag.css(e.elem, e.prop, false, "");
                return !BY || BY === "auto" ? 0 : BY
            }, set: function (e) {
                if (Ag.fx.step[e.prop]) {
                    Ag.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[Ag.cssProps[e.prop]] != null || Ag.cssHooks[e.prop])) {
                        Ag.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    Ay.propHooks.scrollTop = Ay.propHooks.scrollLeft = {
        set: function (e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    Ag.each(["toggle", "show", "hide"], function (BZ, e) {
        var BY = Ag.fn[e];
        Ag.fn[e] = function (B1, B0, B2) {
            return B1 == null || typeof B1 === "boolean" || (!BZ && Ag.isFunction(B1) && Ag.isFunction(B0)) ? BY.apply(this, arguments) : this.animate(E(e, true), B1, B0, B2)
        }
    });
    Ag.fn.extend({
        fadeTo: function (BZ, BY, e, B0) {
            return this.filter(t).css("opacity", 0).show().end().animate({opacity: BY}, BZ, e, B0)
        }, animate: function (B3, B1, BY, BZ) {
            var B0 = Ag.isEmptyObject(B3), B2 = Ag.speed(B1, BY, BZ), e = function () {
                var B4 = A0(this, Ag.extend({}, B3), B2);
                if (B0) {
                    B4.stop(true)
                }
            };
            return B0 || B2.queue === false ? this.each(e) : this.queue(B2.queue, e)
        }, stop: function (BZ, e, B0) {
            var BY = function (B2) {
                var B1 = B2.stop;
                delete B2.stop;
                B1(B0)
            };
            if (typeof BZ !== "string") {
                B0 = e;
                e = BZ;
                BZ = AO
            }
            if (e && BZ !== false) {
                this.queue(BZ || "fx", [])
            }
            return this.each(function () {
                var B4 = true, B3 = BZ != null && BZ + "queueHooks", B1 = Ag.timers, B2 = Ag._data(this);
                if (B3) {
                    if (B2[B3] && B2[B3].stop) {
                        BY(B2[B3])
                    }
                } else {
                    for (B3 in B2) {
                        if (B2[B3] && B2[B3].stop && BN.test(B3)) {
                            BY(B2[B3])
                        }
                    }
                }
                for (B3 = B1.length; B3--;) {
                    if (B1[B3].elem === this && (BZ == null || B1[B3].queue === BZ)) {
                        B1[B3].anim.stop(B0);
                        B4 = false;
                        B1.splice(B3, 1)
                    }
                }
                if (B4 || !B0) {
                    Ag.dequeue(this, BZ)
                }
            })
        }
    });
    function E(BY, B1) {
        var e, B0 = {height: BY}, BZ = 0;
        B1 = B1 ? 1 : 0;
        for (; BZ < 4; BZ += 2 - B1) {
            e = Af[BZ];
            B0["margin" + e] = B0["padding" + e] = BY
        }
        if (B1) {
            B0.opacity = B0.width = BY
        }
        return B0
    }

    Ag.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (BY, e) {
        Ag.fn[BY] = function (B0, BZ, B1) {
            return this.animate(e, B0, BZ, B1)
        }
    });
    Ag.speed = function (BZ, BY, e) {
        var B0 = BZ && typeof BZ === "object" ? Ag.extend({}, BZ) : {
            complete: e || !e && BY || Ag.isFunction(BZ) && BZ,
            duration: BZ,
            easing: e && BY || BY && !Ag.isFunction(BY) && BY
        };
        B0.duration = Ag.fx.off ? 0 : typeof B0.duration === "number" ? B0.duration : B0.duration in Ag.fx.speeds ? Ag.fx.speeds[B0.duration] : Ag.fx.speeds._default;
        if (B0.queue == null || B0.queue === true) {
            B0.queue = "fx"
        }
        B0.old = B0.complete;
        B0.complete = function () {
            if (Ag.isFunction(B0.old)) {
                B0.old.call(this)
            }
            if (B0.queue) {
                Ag.dequeue(this, B0.queue)
            }
        };
        return B0
    };
    Ag.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    Ag.timers = [];
    Ag.fx = Ay.prototype.init;
    Ag.fx.tick = function () {
        var BY, e = Ag.timers, BZ = 0;
        BS = Ag.now();
        for (; BZ < e.length; BZ++) {
            BY = e[BZ];
            if (!BY() && e[BZ] === BY) {
                e.splice(BZ--, 1)
            }
        }
        if (!e.length) {
            Ag.fx.stop()
        }
        BS = AO
    };
    Ag.fx.timer = function (e) {
        if (e() && Ag.timers.push(e) && !Ax) {
            Ax = setInterval(Ag.fx.tick, Ag.fx.interval)
        }
    };
    Ag.fx.interval = 13;
    Ag.fx.stop = function () {
        clearInterval(Ax);
        Ax = null
    };
    Ag.fx.speeds = {slow: 600, fast: 200, _default: 400};
    Ag.fx.step = {};
    if (Ag.expr && Ag.expr.filters) {
        Ag.expr.filters.animated = function (e) {
            return Ag.grep(Ag.timers, function (BY) {
                return e === BY.elem
            }).length
        }
    }
    var As = /^(?:body|html)$/i;
    Ag.fn.offset = function (e) {
        if (arguments.length) {
            return e === AO ? this : this.each(function (B8) {
                Ag.offset.setOffset(this, e, B8)
            })
        }
        var B4, B6, B7, B5, BY, BZ, B1, B0 = {top: 0, left: 0}, B2 = this[0], B3 = B2 && B2.ownerDocument;
        if (!B3) {
            return
        }
        if ((B6 = B3.body) === B2) {
            return Ag.offset.bodyOffset(B2)
        }
        B4 = B3.documentElement;
        if (!Ag.contains(B4, B2)) {
            return B0
        }
        if (typeof B2.getBoundingClientRect !== "undefined") {
            B0 = B2.getBoundingClientRect()
        }
        B7 = J(B3);
        B5 = B4.clientTop || B6.clientTop || 0;
        BY = B4.clientLeft || B6.clientLeft || 0;
        BZ = B7.pageYOffset || B4.scrollTop;
        B1 = B7.pageXOffset || B4.scrollLeft;
        return {top: B0.top + BZ - B5, left: B0.left + B1 - BY}
    };
    Ag.offset = {
        bodyOffset: function (e) {
            var BY = e.offsetTop, BZ = e.offsetLeft;
            if (Ag.support.doesNotIncludeMarginInBodyOffset) {
                BY += parseFloat(Ag.css(e, "marginTop")) || 0;
                BZ += parseFloat(Ag.css(e, "marginLeft")) || 0
            }
            return {top: BY, left: BZ}
        }, setOffset: function (B9, e, B8) {
            var B0 = Ag.css(B9, "position");
            if (B0 === "static") {
                B9.style.position = "relative"
            }
            var B5 = Ag(B9), B7 = B5.offset(), B6 = Ag.css(B9, "top"), BZ = Ag.css(B9, "left"),
                BY = (B0 === "absolute" || B0 === "fixed") && Ag.inArray("auto", [B6, BZ]) > -1, B2 = {}, B1 = {}, B4,
                B3;
            if (BY) {
                B1 = B5.position();
                B4 = B1.top;
                B3 = B1.left
            } else {
                B4 = parseFloat(B6) || 0;
                B3 = parseFloat(BZ) || 0
            }
            if (Ag.isFunction(e)) {
                e = e.call(B9, B8, B7)
            }
            if (e.top != null) {
                B2.top = (e.top - B7.top) + B4
            }
            if (e.left != null) {
                B2.left = (e.left - B7.left) + B3
            }
            if ("using" in e) {
                e.using.call(B9, B2)
            } else {
                B5.css(B2)
            }
        }
    };
    Ag.fn.extend({
        position: function () {
            if (!this[0]) {
                return
            }
            var BY = this[0], B0 = this.offsetParent(), BZ = this.offset(),
                e = As.test(B0[0].nodeName) ? {top: 0, left: 0} : B0.offset();
            BZ.top -= parseFloat(Ag.css(BY, "marginTop")) || 0;
            BZ.left -= parseFloat(Ag.css(BY, "marginLeft")) || 0;
            e.top += parseFloat(Ag.css(B0[0], "borderTopWidth")) || 0;
            e.left += parseFloat(Ag.css(B0[0], "borderLeftWidth")) || 0;
            return {top: BZ.top - e.top, left: BZ.left - e.left}
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || BT.body;
                while (e && (!As.test(e.nodeName) && Ag.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || BT.body
            })
        }
    });
    Ag.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, BZ) {
        var BY = /Y/.test(BZ);
        Ag.fn[e] = function (B0) {
            return Ag.access(this, function (B2, B1, B4) {
                var B3 = J(B2);
                if (B4 === AO) {
                    return B3 ? (BZ in B3) ? B3[BZ] : B3.document.documentElement[B1] : B2[B1]
                }
                if (B3) {
                    B3.scrollTo(!BY ? B4 : Ag(B3).scrollLeft(), BY ? B4 : Ag(B3).scrollTop())
                } else {
                    B2[B1] = B4
                }
            }, e, B0, arguments.length, null)
        }
    });
    function J(e) {
        return Ag.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }

    Ag.each({Height: "height", Width: "width"}, function (e, BY) {
        Ag.each({padding: "inner" + e, content: BY, "": "outer" + e}, function (BZ, B0) {
            Ag.fn[B0] = function (B4, B1) {
                var B2 = arguments.length && (BZ || typeof B4 !== "boolean"),
                    B3 = BZ || (B4 === true || B1 === true ? "margin" : "border");
                return Ag.access(this, function (B6, B7, B5) {
                    var B8;
                    if (Ag.isWindow(B6)) {
                        return B6.document.documentElement["client" + e]
                    }
                    if (B6.nodeType === 9) {
                        B8 = B6.documentElement;
                        return Math.max(B6.body["scroll" + e], B8["scroll" + e], B6.body["offset" + e], B8["offset" + e], B8["client" + e])
                    }
                    return B5 === AO ? Ag.css(B6, B7, B5, B3) : Ag.style(B6, B7, B5, B3)
                }, BY, B2 ? B4 : AO, B2, null)
            }
        })
    });
    AW.jQuery = AW.$ = Ag;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return Ag
        })
    }
})(window);