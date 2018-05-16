(function (A) {
    A.fn.extend({
        autocomplete: function (B, D) {
            var C = typeof B == "string";
            D = A.extend({}, A.Autocompleter.defaults, {
                url: C ? B : null,
                data: C ? null : B,
                delay: C ? A.Autocompleter.defaults.delay : 10,
                max: D && !D.scroll ? 10 : 150
            }, D);
            D.highlight = D.highlight || function (E) {
                    return E
                };
            D.formatMatch = D.formatMatch || D.formatItem;
            return this.each(function () {
                new A.Autocompleter(this, D)
            })
        }, result: function (B) {
            return this.bind("result", B)
        }, search: function (B) {
            return this.trigger("search", [B])
        }, flushCache: function () {
            return this.trigger("flushCache")
        }, setOptions: function (B) {
            return this.trigger("setOptions", [B])
        }, unautocomplete: function () {
            return this.trigger("unautocomplete")
        }
    });
    A.Autocompleter = function (T, M) {
        var Y = M.clickSubmit;
        var N = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };
        var I = A(T).attr("autocomplete", "off").addClass(M.inputClass);
        var Q;
        var B = "";
        var U = A.Autocompleter.Cache(M);
        var K = 0;
        var O;
        var E = {mouseDownOnSelect: false};
        var S = A.Autocompleter.Select(M, T, J, E);
        var R;
        A.browser.opera && A(T.form).bind("submit.autocomplete", function () {
            if (R) {
                R = false;
                return false
            }
        });
        I.bind((A.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (Z) {
            K = 1;
            O = Z.keyCode;
            switch (Z.keyCode) {
                case N.UP:
                    Z.preventDefault();
                    if (S.visible()) {
                        S.prev()
                    } else {
                        X(0, true)
                    }
                    break;
                case N.DOWN:
                    Z.preventDefault();
                    if (S.visible()) {
                        S.next()
                    } else {
                        X(0, true)
                    }
                    break;
                case N.PAGEUP:
                    Z.preventDefault();
                    if (S.visible()) {
                        S.pageUp()
                    } else {
                        X(0, true)
                    }
                    break;
                case N.PAGEDOWN:
                    Z.preventDefault();
                    if (S.visible()) {
                        S.pageDown()
                    } else {
                        X(0, true)
                    }
                    break;
                case M.multiple && A.trim(M.multipleSeparator) == "," && N.COMMA:
                case N.TAB:
                case N.RETURN:
                    if (J()) {
                        Z.preventDefault();
                        R = true;
                        return false
                    }
                    break;
                case N.ESC:
                    S.hide();
                    break;
                default:
                    if (typeof M.data == "string") {
                        clearTimeout(Q);
                        Q = setTimeout(X, M.delay)
                    } else {
                        S.hide()
                    }
                    break
            }
        }).focus(function () {
            K++
        }).click(function () {
            if (K++ > 1 && !S.visible()) {
                X(0, true)
            }
        }).bind("search", function () {
            var Z = (arguments.length > 1) ? arguments[1] : null;

            function a(f, d) {
                var c;
                if (d && d.length) {
                    for (var e = 0; e < d.length; e++) {
                        if (d[e].result.toLowerCase() == f.toLowerCase()) {
                            c = d[e];
                            break
                        }
                    }
                }
                if (typeof Z == "function") {
                    Z(c)
                } else {
                    I.trigger("result", c && [c.data, c.value])
                }
            }

            if (M.data) {
                function a(c) {
                    I.trigger("result", c)
                }

                a(M.data);
                function b(f) {
                    var e = [];
                    for (var d = 0; d < f.length; d++) {
                        var c = f[d];
                        if (c) {
                            e[e.length] = {data: c, value: c, result: M.formatResult && M.formatResult(c) || c[0]}
                        }
                    }
                    return e
                }

                M.data = b(M.data);
                P(I.val(), M.data);
                return
            }
            A.each(C(I.val()), function (d, c) {
                W(c, a, a)
            })
        }).bind("flushCache", function () {
            U.flush()
        }).bind("setOptions", function () {
            A.extend(M, arguments[1]);
            if ("data" in arguments[1]) {
                U.populate()
            }
        }).bind("unautocomplete", function () {
            S.unbind();
            I.unbind();
            A(T.form).unbind(".autocomplete")
        });
        function J() {
            var f = S.selected();
            if (!f) {
                return false
            }
            var c = f.result;
            B = c;
            if (M.multiple) {
                var d = C(I.val());
                if (d.length > 1) {
                    var a = M.multipleSeparator.length;
                    var e = A(T).selection().start;
                    var b, Z = 0;
                    A.each(d, function (g, h) {
                        Z += h.length;
                        if (e <= Z) {
                            b = g;
                            return false
                        }
                        Z += a
                    });
                    d[b] = c;
                    c = d.join(M.multipleSeparator)
                }
                c += M.multipleSeparator
            }
            I.val(c);
            G();
            I.trigger("result", [f.data, f.value]);
            return true
        }

        function X(Z, a) {
            if (O == N.DEL) {
                S.hide();
                return
            }
            var b = I.val();
            if (!a && b == B) {
                return
            }
            B = b;
            b = L(b);
            if (b.length >= M.minChars) {
                I.addClass(M.loadingClass);
                if (!M.matchCase) {
                    b = b.toLowerCase()
                }
                W(b, P, G)
            } else {
                V();
                S.hide()
            }
        }

        function C(Z) {
            if (!Z) {
                return [""]
            }
            if (!M.multiple) {
                return [A.trim(Z)]
            }
            return A.map(Z.split(M.multipleSeparator), function (a) {
                return A.trim(Z).length ? A.trim(a) : null
            })
        }

        function L(Z) {
            if (!M.multiple) {
                return Z
            }
            var a = C(Z);
            if (a.length == 1) {
                return a[0]
            }
            var b = A(T).selection().start;
            if (b == Z.length) {
                a = C(Z)
            } else {
                a = C(Z.replace(Z.substring(b), ""))
            }
            return a[a.length - 1]
        }

        function D(a, Z) {
            if (M.autoFill && (L(I.val()).toLowerCase() == a.toLowerCase()) && O != N.BACKSPACE) {
                I.val(I.val() + Z.substring(L(B).length));
                A(T).selection(B.length, B.length + Z.length)
            }
        }

        function F() {
            clearTimeout(Q);
            Q = setTimeout(G, 200)
        }

        function G() {
            var Z = S.visible();
            S.hide();
            clearTimeout(Q);
            V();
            if (M.mustMatch) {
                I.search(function (a) {
                    if (!a) {
                        if (M.multiple) {
                            var b = C(I.val()).slice(0, -1);
                            I.val(b.join(M.multipleSeparator) + (b.length ? M.multipleSeparator : ""))
                        } else {
                            I.val("");
                            I.trigger("result", null)
                        }
                    }
                })
            }
        }

        function P(a, Z) {
            if (Z && Z.length && K) {
                V();
                S.display(Z, a);
                D(a, Z[0].value);
                S.show()
            } else {
                G()
            }
        }

        function W(c, Z, a) {
            if (!M.matchCase) {
                c = c.toLowerCase()
            }
            var d = U.load(c);
            if (d && d.length) {
                Z(c, d)
            } else {
                if ((typeof M.url == "string") && (M.url.length > 0)) {
                    var b = {timestamp: +new Date()};
                    A.each(M.extraParams, function (e, f) {
                        b[e] = typeof f == "function" ? f() : f
                    });
                    A.ajax({
                        mode: "abort",
                        port: "autocomplete" + T.name,
                        dataType: M.dataType,
                        url: M.url,
                        data: A.extend({q: L(c), limit: M.max}, b),
                        success: function (f) {
                            var e = M.parse && M.parse(f) || H(f);
                            U.add(c, e);
                            Z(c, e)
                        }
                    })
                } else {
                    S.emptyList();
                    a(c)
                }
            }
        }

        function H(d) {
            var b = [];
            var c = d.split("\n");
            for (var a = 0; a < c.length; a++) {
                var Z = A.trim(c[a]);
                if (Z) {
                    Z = Z.split("|");
                    b[b.length] = {data: Z, value: Z[0], result: M.formatResult && M.formatResult(Z, Z[0]) || Z[0]}
                }
            }
            return b
        }

        function V() {
            I.removeClass(M.loadingClass)
        }
    };
    A.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 10,
        max: 100,
        mustMatch: false,
        extraParams: {},
        selectFirst: false,
        formatItem: function (B) {
            return B[0]
        },
        formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: ", ",
        highlight: function (B, C) {
            return B.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + C.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
        },
        scroll: true,
        scrollHeight: 180,
        clickSubmit: false
    };
    A.Autocompleter.Cache = function (F) {
        var H = {};
        var G = 0;

        function B(J, I) {
            if (!F.matchCase) {
                J = J.toLowerCase()
            }
            var K = J.indexOf(I);
            if (F.matchContains == "word") {
                K = J.toLowerCase().search("\\b" + I.toLowerCase())
            }
            if (K == -1) {
                return false
            }
            return K == 0 || F.matchContains
        }

        function D(J, I) {
            if (G > F.cacheLength) {
                C()
            }
            if (!H[J]) {
                G++
            }
            H[J] = I
        }

        function E() {
            if (!F.data) {
                return false
            }
            var L = {}, N = 0;
            if (!F.url) {
                F.cacheLength = 1
            }
            L[""] = [];
            for (var I = 0, J = F.data.length; I < J; I++) {
                var P = F.data[I];
                P = (typeof P == "string") ? [P] : P;
                var K = F.formatMatch(P, I + 1, F.data.length);
                if (K === false) {
                    continue
                }
                var O = K.charAt(0).toLowerCase();
                if (!L[O]) {
                    L[O] = []
                }
                var M = {value: K, data: P, result: F.formatResult && F.formatResult(P) || K};
                L[O].push(M);
                if (N++ < F.max) {
                    L[""].push(M)
                }
            }
            A.each(L, function (R, Q) {
                F.cacheLength++;
                D(R, Q)
            })
        }

        setTimeout(E, 25);
        function C() {
            H = {};
            G = 0
        }

        return {
            flush: C, add: D, populate: E, load: function (M) {
                if (!F.cacheLength || !G) {
                    return null
                }
                if (!F.url && F.matchContains) {
                    var I = [];
                    for (var L in H) {
                        if (L.length > 0) {
                            var J = H[L];
                            A.each(J, function (O, N) {
                                if (B(N.value, M)) {
                                    I.push(N)
                                }
                            })
                        }
                    }
                    return I
                } else {
                    if (H[M]) {
                        return H[M]
                    } else {
                        if (F.matchSubset) {
                            for (var K = M.length - 1; K >= F.minChars; K--) {
                                var J = H[M.substr(0, K)];
                                if (J) {
                                    var I = [];
                                    A.each(J, function (O, N) {
                                        if (B(N.value, M)) {
                                            I[I.length] = N
                                        }
                                    });
                                    return I
                                }
                            }
                        }
                    }
                }
                return null
            }
        }
    };
    A.Autocompleter.Select = function (C, Q, P, B) {
        var L = {ACTIVE: "ac_over"};
        var K, F = -1, E, S = "", D = true, J, O;

        function N() {
            if (!D) {
                return
            }
            J = A("<div/>").hide().addClass(C.resultsClass).css("position", "absolute").appendTo(document.body);
            O = A("<ul/>").appendTo(J).mouseover(function (T) {
                if (R(T).nodeName && R(T).nodeName.toUpperCase() == "LI") {
                    F = A("li", O).removeClass(L.ACTIVE).index(R(T));
                    A(R(T)).addClass(L.ACTIVE)
                }
            }).click(function (T) {
                A(R(T)).addClass(L.ACTIVE);
                P();
                Q.focus();
                return false
            }).mousedown(function () {
                B.mouseDownOnSelect = true
            }).mouseup(function () {
                B.mouseDownOnSelect = false
            });
            if (C.width > 0) {
                J.css("width", C.width)
            }
            D = false
        }

        function R(T) {
            var U = T.target;
            while (U && U.tagName != "LI") {
                U = U.parentNode
            }
            if (!U) {
                return []
            }
            return U
        }

        function H(T) {
            K.slice(F, F + 1).removeClass(L.ACTIVE);
            G(T);
            var U = K.slice(F, F + 1).addClass(L.ACTIVE);
            if (C.scroll) {
                var V = 0;
                K.slice(0, F).each(function () {
                    V += this.offsetHeight
                });
                if ((V + U[0].offsetHeight - O.scrollTop()) > O[0].clientHeight) {
                    O.scrollTop(V + U[0].offsetHeight - O.innerHeight())
                } else {
                    if (V < O.scrollTop()) {
                        O.scrollTop(V)
                    }
                }
            }
        }

        function G(T) {
            F += T;
            if (F < 0) {
                F = K.size() - 1
            } else {
                if (F >= K.size()) {
                    F = 0
                }
            }
        }

        function I(T) {
            return C.max && C.max < T ? C.max : T
        }

        function M() {
            O.empty();
            var W = I(E.length);
            for (var V = 0; V < W; V++) {
                if (!E[V]) {
                    continue
                }
                var T = C.formatItem(E[V].data, V + 1, W, E[V].value, S);
                if (T === false) {
                    continue
                }
                var U = A("<li/>").html(C.highlight(T, S)).addClass(V % 2 == 0 ? "ac_even" : "ac_odd").appendTo(O)[0];
                A.data(U, "ac_data", E[V])
            }
            K = O.find("li");
            if (C.selectFirst) {
                K.slice(0, 1).addClass(L.ACTIVE);
                F = 0
            }
            if (A.fn.bgiframe) {
                O.bgiframe()
            }
        }

        return {
            display: function (T, U) {
                N();
                E = T;
                S = U;
                M()
            }, next: function () {
                H(1)
            }, prev: function () {
                H(-1)
            }, pageUp: function () {
                if (F != 0 && F - 8 < 0) {
                    H(-F)
                } else {
                    H(-8)
                }
            }, pageDown: function () {
                if (F != K.size() - 1 && F + 8 > K.size()) {
                    H(K.size() - 1 - F)
                } else {
                    H(8)
                }
            }, hide: function () {
                J && J.hide();
                K && K.removeClass(L.ACTIVE);
                F = -1
            }, visible: function () {
                return J && J.is(":visible")
            }, current: function () {
                return this.visible() && (K.filter("." + L.ACTIVE)[0] || C.selectFirst && K[0])
            }, show: function () {
                var U = A(Q).offset();
                J.css({
                    width: typeof C.width == "string" || C.width > 0 ? C.width : A(Q).width(),
                    top: U.top + Q.offsetHeight,
                    left: U.left
                }).show();
                if (C.scroll) {
                    O.scrollTop(0);
                    O.css({maxHeight: C.scrollHeight, overflow: "auto"});
                    if (A.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                        var T = 0;
                        K.each(function () {
                            T += this.offsetHeight
                        });
                        var V = T > C.scrollHeight;
                        O.css("height", V ? C.scrollHeight : T);
                        if (!V) {
                            K.width(O.width() - parseInt(K.css("padding-left")) - parseInt(K.css("padding-right")))
                        }
                    }
                }
            }, selected: function () {
                var T = K && K.filter("." + L.ACTIVE).removeClass(L.ACTIVE);
                return T && T.length && A.data(T[0], "ac_data")
            }, emptyList: function () {
                O && O.empty()
            }, unbind: function () {
                J && J.remove()
            }
        }
    };
    A.fn.selection = function (G, C) {
        if (G !== undefined) {
            return this.each(function () {
                if (this.createTextRange) {
                    var J = this.createTextRange();
                    if (C === undefined || G == C) {
                        J.move("character", G);
                        J.select()
                    } else {
                        J.collapse(true);
                        J.moveStart("character", G);
                        J.moveEnd("character", C);
                        J.select()
                    }
                } else {
                    if (this.setSelectionRange) {
                        this.setSelectionRange(G, C)
                    } else {
                        if (this.selectionStart) {
                            this.selectionStart = G;
                            this.selectionEnd = C
                        }
                    }
                }
            })
        }
        var E = this[0];
        if (E.createTextRange) {
            var D = document.selection.createRange(), F = E.value, I = "<->", B = D.text.length;
            D.text = I;
            var H = E.value.indexOf(I);
            E.value = F;
            this.selection(H, H + B);
            return {start: H, end: H + B}
        } else {
            if (E.selectionStart !== undefined) {
                return {start: E.selectionStart, end: E.selectionEnd}
            }
        }
    }
})(jQuery);