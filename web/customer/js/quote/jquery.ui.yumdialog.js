/*
 * jQuery UI Core 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
/*
 * jQuery UI Dialog 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 *
 *-- 修正 UI 在 JS中的样式  可控制是否显示closeTitleBtn
 */
(function (B, E) {
    var F = 0, D = /^ui-id-\d+$/;
    B.ui = B.ui || {};
    if (B.ui.version) {
        return
    }
    B.extend(B.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    B.fn.extend({
        _focus: B.fn.focus, focus: function (H, G) {
            return typeof H === "number" ? this.each(function () {
                var I = this;
                setTimeout(function () {
                    B(I).focus();
                    if (G) {
                        G.call(I)
                    }
                }, H)
            }) : this._focus.apply(this, arguments)
        }, scrollParent: function () {
            var G;
            if ((B.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                G = this.parents().filter(function () {
                    return (/(relative|absolute|fixed)/).test(B.css(this, "position")) && (/(auto|scroll)/).test(B.css(this, "overflow") + B.css(this, "overflow-y") + B.css(this, "overflow-x"))
                }).eq(0)
            } else {
                G = this.parents().filter(function () {
                    return (/(auto|scroll)/).test(B.css(this, "overflow") + B.css(this, "overflow-y") + B.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !G.length ? B(document) : G
        }, zIndex: function (I) {
            if (I !== E) {
                return this.css("zIndex", I)
            }
            if (this.length) {
                var H = B(this[0]), J, G;
                while (H.length && H[0] !== document) {
                    J = H.css("position");
                    if (J === "absolute" || J === "relative" || J === "fixed") {
                        G = parseInt(H.css("zIndex"), 10);
                        if (!isNaN(G) && G !== 0) {
                            return G
                        }
                    }
                    H = H.parent()
                }
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                if (!this.id) {
                    this.id = "ui-id-" + (++F)
                }
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                if (D.test(this.id)) {
                    B(this).removeAttr("id")
                }
            })
        }
    });
    function C(J, G) {
        var K, L, I, H = J.nodeName.toLowerCase();
        if ("area" === H) {
            K = J.parentNode;
            L = K.name;
            if (!J.href || !L || K.nodeName.toLowerCase() !== "map") {
                return false
            }
            I = B("img[usemap=#" + L + "]")[0];
            return !!I && A(I)
        }
        return (/input|select|textarea|button|object/.test(H) ? !J.disabled : "a" === H ? J.href || G : G) && A(J)
    }

    function A(G) {
        return B.expr.filters.visible(G) && !B(G).parents().andSelf().filter(function () {
                return B.css(this, "visibility") === "hidden"
            }).length
    }

    B.extend(B.expr[":"], {
        data: B.expr.createPseudo ? B.expr.createPseudo(function (G) {
            return function (H) {
                return !!B.data(H, G)
            }
        }) : function (H, I, G) {
            return !!B.data(H, G[3])
        }, focusable: function (G) {
            return C(G, !isNaN(B.attr(G, "tabindex")))
        }, tabbable: function (I) {
            var G = B.attr(I, "tabindex"), H = isNaN(G);
            return (H || G >= 0) && C(I, !H)
        }
    });
    B(function () {
        var G = document.body, H = G.appendChild(H = document.createElement("div"));
        H.offsetHeight;
        B.extend(H.style, {minHeight: "100px", height: "auto", padding: 0, borderWidth: 0});
        B.support.minHeight = H.offsetHeight === 100;
        B.support.selectstart = "onselectstart" in H;
        G.removeChild(H).style.display = "none"
    });
    if (!B("<a>").outerWidth(1).jquery) {
        B.each(["Width", "Height"], function (K, H) {
            var G = H === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], J = H.toLowerCase(), I = {
                innerWidth: B.fn.innerWidth,
                innerHeight: B.fn.innerHeight,
                outerWidth: B.fn.outerWidth,
                outerHeight: B.fn.outerHeight
            };

            function L(N, M, O, P) {
                B.each(G, function () {
                    M -= parseFloat(B.css(N, "padding" + this)) || 0;
                    if (O) {
                        M -= parseFloat(B.css(N, "border" + this + "Width")) || 0
                    }
                    if (P) {
                        M -= parseFloat(B.css(N, "margin" + this)) || 0
                    }
                });
                return M
            }

            B.fn["inner" + H] = function (M) {
                if (M === E) {
                    return I["inner" + H].call(this)
                }
                return this.each(function () {
                    B(this).css(J, L(this, M) + "px")
                })
            };
            B.fn["outer" + H] = function (M, N) {
                if (typeof M !== "number") {
                    return I["outer" + H].call(this, M)
                }
                return this.each(function () {
                    B(this).css(J, L(this, M, true, N) + "px")
                })
            }
        })
    }
    if (B("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        B.fn.removeData = (function (G) {
            return function (H) {
                if (arguments.length) {
                    return G.call(this, B.camelCase(H))
                } else {
                    return G.call(this)
                }
            }
        })(B.fn.removeData)
    }
    (function () {
        var G = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        B.ui.ie = G.length ? true : false;
        B.ui.ie6 = parseFloat(G[1], 10) === 6
    })();
    B.fn.extend({
        disableSelection: function () {
            return this.bind((B.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (G) {
                G.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    });
    B.extend(B.ui, {
        plugin: {
            add: function (I, J, G) {
                var K, H = B.ui[I].prototype;
                for (K in G) {
                    H.plugins[K] = H.plugins[K] || [];
                    H.plugins[K].push([J, G[K]])
                }
            }, call: function (J, H, I) {
                var K, G = J.plugins[H];
                if (!G || !J.element[0].parentNode || J.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (K = 0; K < G.length; K++) {
                    if (J.options[G[K][0]]) {
                        G[K][1].apply(J.element, I)
                    }
                }
            }
        }, contains: B.contains, hasScroll: function (G, H) {
            if (B(G).css("overflow") === "hidden") {
                return false
            }
            var I = (H && H === "left") ? "scrollLeft" : "scrollTop", J = false;
            if (G[I] > 0) {
                return true
            }
            G[I] = 1;
            J = (G[I] > 0);
            G[I] = 0;
            return J
        }, isOverAxis: function (H, I, G) {
            return (H > I) && (H < (I + G))
        }, isOver: function (H, G, I, L, J, K) {
            return B.ui.isOverAxis(H, I, J) && B.ui.isOverAxis(G, L, K)
        }
    })
})(jQuery);
/*
 * jQuery UI Widget 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function (B, D) {
    var E = 0, A = Array.prototype.slice, C = B.cleanData;
    B.cleanData = function (I) {
        for (var G = 0, F; (F = I[G]) != null; G++) {
            try {
                B(F).triggerHandler("remove")
            } catch (H) {
            }
        }
        C(I)
    };
    B.widget = function (J, H, L) {
        var M, K, F, G, I = J.split(".")[0];
        J = J.split(".")[1];
        M = I + "-" + J;
        if (!L) {
            L = H;
            H = B.Widget
        }
        B.expr[":"][M.toLowerCase()] = function (N) {
            return !!B.data(N, M)
        };
        B[I] = B[I] || {};
        K = B[I][J];
        F = B[I][J] = function (N, O) {
            if (!this._createWidget) {
                return new F(N, O)
            }
            if (arguments.length) {
                this._createWidget(N, O)
            }
        };
        B.extend(F, K, {version: L.version, _proto: B.extend({}, L), _childConstructors: []});
        G = new H();
        G.options = B.widget.extend({}, G.options);
        B.each(L, function (O, N) {
            if (B.isFunction(N)) {
                L[O] = (function () {
                    var P = function () {
                        return H.prototype[O].apply(this, arguments)
                    }, Q = function (R) {
                        return H.prototype[O].apply(this, R)
                    };
                    return function () {
                        var T = this._super, R = this._superApply, S;
                        this._super = P;
                        this._superApply = Q;
                        S = N.apply(this, arguments);
                        this._super = T;
                        this._superApply = R;
                        return S
                    }
                })()
            }
        });
        F.prototype = B.widget.extend(G, {widgetEventPrefix: K ? G.widgetEventPrefix : J}, L, {
            constructor: F,
            namespace: I,
            widgetName: J,
            widgetBaseClass: M,
            widgetFullName: M
        });
        if (K) {
            B.each(K._childConstructors, function (P, O) {
                var N = O.prototype;
                B.widget(N.namespace + "." + N.widgetName, F, O._proto)
            });
            delete K._childConstructors
        } else {
            H._childConstructors.push(F)
        }
        B.widget.bridge(J, F)
    };
    B.widget.extend = function (I) {
        var H = A.call(arguments, 1), F = 0, G = H.length, J, K;
        for (; F < G; F++) {
            for (J in H[F]) {
                K = H[F][J];
                if (H[F].hasOwnProperty(J) && K !== D) {
                    if (B.isPlainObject(K)) {
                        I[J] = B.isPlainObject(I[J]) ? B.widget.extend({}, I[J], K) : B.widget.extend({}, K)
                    } else {
                        I[J] = K
                    }
                }
            }
        }
        return I
    };
    B.widget.bridge = function (F, G) {
        var H = G.prototype.widgetFullName || F;
        B.fn[F] = function (L) {
            var K = typeof L === "string", J = A.call(arguments, 1), I = this;
            L = !K && J.length ? B.widget.extend.apply(null, [L].concat(J)) : L;
            if (K) {
                this.each(function () {
                    var M, N = B.data(this, H);
                    if (!N) {
                        return B.error("cannot call methods on " + F + " prior to initialization; attempted to call method '" + L + "'")
                    }
                    if (!B.isFunction(N[L]) || L.charAt(0) === "_") {
                        return B.error("no such method '" + L + "' for " + F + " widget instance")
                    }
                    M = N[L].apply(N, J);
                    if (M !== N && M !== D) {
                        I = M && M.jquery ? I.pushStack(M.get()) : M;
                        return false
                    }
                })
            } else {
                this.each(function () {
                    var M = B.data(this, H);
                    if (M) {
                        M.option(L || {})._init()
                    } else {
                        B.data(this, H, new G(L, this))
                    }
                })
            }
            return I
        }
    };
    B.Widget = function () {
    };
    B.Widget._childConstructors = [];
    B.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: false, create: null},
        _createWidget: function (F, G) {
            G = B(G || this.defaultElement || this)[0];
            this.element = B(G);
            this.uuid = E++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = B.widget.extend({}, this.options, this._getCreateOptions(), F);
            this.bindings = B();
            this.hoverable = B();
            this.focusable = B();
            if (G !== this) {
                B.data(G, this.widgetName, this);
                B.data(G, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function (H) {
                        if (H.target === G) {
                            this.destroy()
                        }
                    }
                });
                this.document = B(G.style ? G.ownerDocument : G.document || G);
                this.window = B(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: B.noop,
        _getCreateEventData: B.noop,
        _create: B.noop,
        _init: B.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(B.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: B.noop,
        widget: function () {
            return this.element
        },
        option: function (G, F) {
            var I = G, K, J, H;
            if (arguments.length === 0) {
                return B.widget.extend({}, this.options)
            }
            if (typeof G === "string") {
                I = {};
                K = G.split(".");
                G = K.shift();
                if (K.length) {
                    J = I[G] = B.widget.extend({}, this.options[G]);
                    for (H = 0; H < K.length - 1; H++) {
                        J[K[H]] = J[K[H]] || {};
                        J = J[K[H]]
                    }
                    G = K.pop();
                    if (F === D) {
                        return J[G] === D ? null : J[G]
                    }
                    J[G] = F
                } else {
                    if (F === D) {
                        return this.options[G] === D ? null : this.options[G]
                    }
                    I[G] = F
                }
            }
            this._setOptions(I);
            return this
        },
        _setOptions: function (G) {
            var F;
            for (F in G) {
                this._setOption(F, G[F])
            }
            return this
        },
        _setOption: function (G, F) {
            this.options[G] = F;
            if (G === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!F).attr("aria-disabled", F);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },
        enable: function () {
            return this._setOption("disabled", false)
        },
        disable: function () {
            return this._setOption("disabled", true)
        },
        _on: function (F, H, J) {
            var G, I = this;
            if (typeof F !== "boolean") {
                J = H;
                H = F;
                F = false
            }
            if (!J) {
                J = H;
                H = this.element;
                G = this.widget()
            } else {
                H = G = B(H);
                this.bindings = this.bindings.add(H)
            }
            B.each(J, function (N, L) {
                function O() {
                    if (!F && (I.options.disabled === true || B(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof L === "string" ? I[L] : L).apply(I, arguments)
                }

                if (typeof L !== "string") {
                    O.guid = L.guid = L.guid || O.guid || B.guid++
                }
                var M = N.match(/^(\w+)\s*(.*)$/), P = M[1] + I.eventNamespace, K = M[2];
                if (K) {
                    G.delegate(K, P, O)
                } else {
                    H.bind(P, O)
                }
            })
        },
        _off: function (F, G) {
            G = (G || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            F.unbind(G).undelegate(G)
        },
        _delay: function (F, I) {
            function G() {
                return (typeof F === "string" ? H[F] : F).apply(H, arguments)
            }

            var H = this;
            return setTimeout(G, I || 0)
        },
        _hoverable: function (F) {
            this.hoverable = this.hoverable.add(F);
            this._on(F, {
                mouseenter: function (G) {
                    B(G.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (G) {
                    B(G.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (F) {
            this.focusable = this.focusable.add(F);
            this._on(F, {
                focusin: function (G) {
                    B(G.currentTarget).addClass("ui-state-focus")
                }, focusout: function (G) {
                    B(G.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (I, K, J) {
            var F, G, H = this.options[I];
            J = J || {};
            K = B.Event(K);
            K.type = (I === this.widgetEventPrefix ? I : this.widgetEventPrefix + I).toLowerCase();
            K.target = this.element[0];
            G = K.originalEvent;
            if (G) {
                for (F in G) {
                    if (!(F in K)) {
                        K[F] = G[F]
                    }
                }
            }
            this.element.trigger(K, J);
            return !(B.isFunction(H) && H.apply(this.element[0], [K].concat(J)) === false || K.isDefaultPrevented())
        }
    };
    B.each({show: "fadeIn", hide: "fadeOut"}, function (F, G) {
        B.Widget.prototype["_" + F] = function (J, K, L) {
            if (typeof K === "string") {
                K = {effect: K}
            }
            var H, I = !K ? F : K === true || typeof K === "number" ? G : K.effect || G;
            K = K || {};
            if (typeof K === "number") {
                K = {duration: K}
            }
            H = !B.isEmptyObject(K);
            K.complete = L;
            if (K.delay) {
                J.delay(K.delay)
            }
            if (H && B.effects && (B.effects.effect[I] || B.uiBackCompat !== false && B.effects[I])) {
                J[F](K)
            } else {
                if (I !== F && J[I]) {
                    J[I](K.duration, K.easing, L)
                } else {
                    J.queue(function (M) {
                        B(this)[F]();
                        if (L) {
                            L.call(J[0])
                        }
                        M()
                    })
                }
            }
        }
    });
    if (B.uiBackCompat !== false) {
        B.Widget.prototype._getCreateOptions = function () {
            return B.metadata && B.metadata.get(this.element[0])[this.widgetName]
        }
    }
})(jQuery);
/*
 * jQuery UI Mouse 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (B, C) {
    var A = false;
    B(document).mouseup(function (D) {
        A = false
    });
    B.widget("ui.mouse", {
        version: "1.9.2",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var D = this;
            this.element.bind("mousedown." + this.widgetName, function (E) {
                return D._mouseDown(E)
            }).bind("click." + this.widgetName, function (E) {
                if (true === B.data(E.target, D.widgetName + ".preventClickEvent")) {
                    B.removeData(E.target, D.widgetName + ".preventClickEvent");
                    E.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                B(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function (F) {
            if (A) {
                return
            }
            (this._mouseStarted && this._mouseUp(F));
            this._mouseDownEvent = F;
            var D = this, E = (F.which === 1),
                G = (typeof this.options.cancel === "string" && F.target.nodeName ? B(F.target).closest(this.options.cancel).length : false);
            if (!E || G || !this._mouseCapture(F)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    D.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(F) && this._mouseDelayMet(F)) {
                this._mouseStarted = (this._mouseStart(F) !== false);
                if (!this._mouseStarted) {
                    F.preventDefault();
                    return true
                }
            }
            if (true === B.data(F.target, this.widgetName + ".preventClickEvent")) {
                B.removeData(F.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function (H) {
                return D._mouseMove(H)
            };
            this._mouseUpDelegate = function (H) {
                return D._mouseUp(H)
            };
            B(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            F.preventDefault();
            A = true;
            return true
        },
        _mouseMove: function (D) {
            if (B.ui.ie && !(document.documentMode >= 9) && !D.button) {
                return this._mouseUp(D)
            }
            if (this._mouseStarted) {
                this._mouseDrag(D);
                return D.preventDefault()
            }
            if (this._mouseDistanceMet(D) && this._mouseDelayMet(D)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, D) !== false);
                (this._mouseStarted ? this._mouseDrag(D) : this._mouseUp(D))
            }
            return !this._mouseStarted
        },
        _mouseUp: function (D) {
            B(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (D.target === this._mouseDownEvent.target) {
                    B.data(D.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(D)
            }
            return false
        },
        _mouseDistanceMet: function (D) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - D.pageX), Math.abs(this._mouseDownEvent.pageY - D.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function (D) {
            return this.mouseDelayMet
        },
        _mouseStart: function (D) {
        },
        _mouseDrag: function (D) {
        },
        _mouseStop: function (D) {
        },
        _mouseCapture: function (D) {
            return true
        }
    })
})(jQuery);
/*
 * jQuery UI Draggable 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (A, B) {
    A.widget("ui.draggable", A.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function () {
            if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
            (this.options.addClasses && this.element.addClass("ui-draggable"));
            (this.options.disabled && this.element.addClass("ui-draggable-disabled"));
            this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function (D) {
            var C = this.options;
            if (this.helper || C.disabled || A(D.target).is(".ui-resizable-handle")) {
                return false
            }
            this.handle = this._getHandle(D);
            if (!this.handle) {
                return false
            }
            A(C.iframeFix === true ? "iframe" : C.iframeFix).each(function () {
                A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(A(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function (D) {
            var C = this.options;
            this.helper = this._createHelper(D);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (A.ui.ddmanager) {
                A.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left};
            A.extend(this.offset, {
                click: {left: D.pageX - this.offset.left, top: D.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(D);
            this.originalPageX = D.pageX;
            this.originalPageY = D.pageY;
            (C.cursorAt && this._adjustOffsetFromHelper(C.cursorAt));
            if (C.containment) {
                this._setContainment()
            }
            if (this._trigger("start", D) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (A.ui.ddmanager && !C.dropBehaviour) {
                A.ui.ddmanager.prepareOffsets(this, D)
            }
            this._mouseDrag(D, true);
            if (A.ui.ddmanager) {
                A.ui.ddmanager.dragStart(this, D)
            }
            return true
        },
        _mouseDrag: function (E, C) {
            this.position = this._generatePosition(E);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!C) {
                var D = this._uiHash();
                if (this._trigger("drag", E, D) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = D.position
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (A.ui.ddmanager) {
                A.ui.ddmanager.drag(this, E)
            }
            return false
        },
        _mouseStop: function (D) {
            var G = false;
            if (A.ui.ddmanager && !this.options.dropBehaviour) {
                G = A.ui.ddmanager.drop(this, D)
            }
            if (this.dropped) {
                G = this.dropped;
                this.dropped = false
            }
            var E = this.element[0], F = false;
            while (E && (E = E.parentNode)) {
                if (E == document) {
                    F = true
                }
            }
            if (!F && this.options.helper === "original") {
                return false
            }
            if ((this.options.revert == "invalid" && !G) || (this.options.revert == "valid" && G) || this.options.revert === true || (A.isFunction(this.options.revert) && this.options.revert.call(this.element, G))) {
                var C = this;
                A(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    if (C._trigger("stop", D) !== false) {
                        C._clear()
                    }
                })
            } else {
                if (this._trigger("stop", D) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function (C) {
            A("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            });
            if (A.ui.ddmanager) {
                A.ui.ddmanager.dragStop(this, C)
            }
            return A.ui.mouse.prototype._mouseUp.call(this, C)
        },
        cancel: function () {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function (C) {
            var D = !this.options.handle || !A(this.options.handle, this.element).length ? true : false;
            A(this.options.handle, this.element).find("*").andSelf().each(function () {
                if (this == C.target) {
                    D = true
                }
            });
            return D
        },
        _createHelper: function (E) {
            var C = this.options;
            var D = A.isFunction(C.helper) ? A(C.helper.apply(this.element[0], [E])) : (C.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!D.parents("body").length) {
                D.appendTo((C.appendTo == "parent" ? this.element[0].parentNode : C.appendTo))
            }
            if (D[0] != this.element[0] && !(/(fixed|absolute)/).test(D.css("position"))) {
                D.css("position", "absolute")
            }
            return D
        },
        _adjustOffsetFromHelper: function (C) {
            if (typeof C == "string") {
                C = C.split(" ")
            }
            if (A.isArray(C)) {
                C = {left: +C[0], top: +C[1] || 0}
            }
            if ("left" in C) {
                this.offset.click.left = C.left + this.margins.left
            }
            if ("right" in C) {
                this.offset.click.left = this.helperProportions.width - C.right + this.margins.left
            }
            if ("top" in C) {
                this.offset.click.top = C.top + this.margins.top
            }
            if ("bottom" in C) {
                this.offset.click.top = this.helperProportions.height - C.bottom + this.margins.top
            }
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var C = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && A.contains(this.scrollParent[0], this.offsetParent[0])) {
                C.left += this.scrollParent.scrollLeft();
                C.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && A.ui.ie)) {
                C = {top: 0, left: 0}
            }
            return {
                top: C.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: C.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var C = this.element.position();
                return {
                    top: C.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: C.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {top: 0, left: 0}
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var D = this.options;
            if (D.containment == "parent") {
                D.containment = this.helper[0].parentNode
            }
            if (D.containment == "document" || D.containment == "window") {
                this.containment = [D.containment == "document" ? 0 : A(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, D.containment == "document" ? 0 : A(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (D.containment == "document" ? 0 : A(window).scrollLeft()) + A(D.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (D.containment == "document" ? 0 : A(window).scrollTop()) + (A(D.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(D.containment) && D.containment.constructor != Array) {
                var F = A(D.containment);
                var E = F[0];
                if (!E) {
                    return
                }
                var G = F.offset();
                var C = (A(E).css("overflow") != "hidden");
                this.containment = [(parseInt(A(E).css("borderLeftWidth"), 10) || 0) + (parseInt(A(E).css("paddingLeft"), 10) || 0), (parseInt(A(E).css("borderTopWidth"), 10) || 0) + (parseInt(A(E).css("paddingTop"), 10) || 0), (C ? Math.max(E.scrollWidth, E.offsetWidth) : E.offsetWidth) - (parseInt(A(E).css("borderLeftWidth"), 10) || 0) - (parseInt(A(E).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (C ? Math.max(E.scrollHeight, E.offsetHeight) : E.offsetHeight) - (parseInt(A(E).css("borderTopWidth"), 10) || 0) - (parseInt(A(E).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = F
            } else {
                if (D.containment.constructor == Array) {
                    this.containment = D.containment
                }
            }
        },
        _convertPositionTo: function (F, E) {
            if (!E) {
                E = this.position
            }
            var H = F == "absolute" ? 1 : -1;
            var D = this.options,
                G = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && A.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                C = (/(html|body)/i).test(G[0].tagName);
            return {
                top: (E.top + this.offset.relative.top * H + this.offset.parent.top * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (C ? 0 : G.scrollTop())) * H)),
                left: (E.left + this.offset.relative.left * H + this.offset.parent.left * H - ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : C ? 0 : G.scrollLeft()) * H))
            }
        },
        _generatePosition: function (I) {
            var H = this.options,
                L = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && A.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                K = (/(html|body)/i).test(L[0].tagName);
            var F = I.pageX;
            var G = I.pageY;
            if (this.originalPosition) {
                var E;
                if (this.containment) {
                    if (this.relative_container) {
                        var J = this.relative_container.offset();
                        E = [this.containment[0] + J.left, this.containment[1] + J.top, this.containment[2] + J.left, this.containment[3] + J.top]
                    } else {
                        E = this.containment
                    }
                    if (I.pageX - this.offset.click.left < E[0]) {
                        F = E[0] + this.offset.click.left
                    }
                    if (I.pageY - this.offset.click.top < E[1]) {
                        G = E[1] + this.offset.click.top
                    }
                    if (I.pageX - this.offset.click.left > E[2]) {
                        F = E[2] + this.offset.click.left
                    }
                    if (I.pageY - this.offset.click.top > E[3]) {
                        G = E[3] + this.offset.click.top
                    }
                }
                if (H.grid) {
                    var D = H.grid[1] ? this.originalPageY + Math.round((G - this.originalPageY) / H.grid[1]) * H.grid[1] : this.originalPageY;
                    G = E ? (!(D - this.offset.click.top < E[1] || D - this.offset.click.top > E[3]) ? D : (!(D - this.offset.click.top < E[1]) ? D - H.grid[1] : D + H.grid[1])) : D;
                    var C = H.grid[0] ? this.originalPageX + Math.round((F - this.originalPageX) / H.grid[0]) * H.grid[0] : this.originalPageX;
                    F = E ? (!(C - this.offset.click.left < E[0] || C - this.offset.click.left > E[2]) ? C : (!(C - this.offset.click.left < E[0]) ? C - H.grid[0] : C + H.grid[0])) : C
                }
            }
            return {
                top: (G - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (K ? 0 : L.scrollTop())))),
                left: (F - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : K ? 0 : L.scrollLeft())))
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function (D, E, C) {
            C = C || this._uiHash();
            A.ui.plugin.call(this, D, [E, C]);
            if (D == "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return A.Widget.prototype._trigger.call(this, D, E, C)
        },
        plugins: {},
        _uiHash: function (C) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    A.ui.plugin.add("draggable", "connectToSortable", {
        start: function (F, E) {
            var D = A(this).data("draggable"), G = D.options, C = A.extend({}, E, {item: D.element});
            D.sortables = [];
            A(G.connectToSortable).each(function () {
                var H = A.data(this, "sortable");
                if (H && !H.options.disabled) {
                    D.sortables.push({instance: H, shouldRevert: H.options.revert});
                    H.refreshPositions();
                    H._trigger("activate", F, C)
                }
            })
        }, stop: function (F, E) {
            var D = A(this).data("draggable"), C = A.extend({}, E, {item: D.element});
            A.each(D.sortables, function () {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    D.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = true
                    }
                    this.instance._mouseStop(F);
                    this.instance.options.helper = this.instance.options._helper;
                    if (D.options.helper == "original") {
                        this.instance.currentItem.css({top: "auto", left: "auto"})
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", F, C)
                }
            })
        }, drag: function (G, F) {
            var D = A(this).data("draggable"), C = this;
            var E = function (J) {
                var O = this.offset.click.top, N = this.offset.click.left;
                var I = this.positionAbs.top, M = this.positionAbs.left;
                var K = J.height, P = J.width;
                var H = J.top, L = J.left;
                return A.ui.isOver(I + O, M + N, H, L, K, P)
            };
            A.each(D.sortables, function (J) {
                var I = false;
                var H = this;
                this.instance.positionAbs = D.positionAbs;
                this.instance.helperProportions = D.helperProportions;
                this.instance.offset.click = D.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    I = true;
                    A.each(D.sortables, function () {
                        this.instance.positionAbs = D.positionAbs;
                        this.instance.helperProportions = D.helperProportions;
                        this.instance.offset.click = D.offset.click;
                        if (this != H && this.instance._intersectsWith(this.instance.containerCache) && A.ui.contains(H.instance.element[0], this.instance.element[0])) {
                            I = false
                        }
                        return I
                    })
                }
                if (I) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = A(C).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function () {
                            return F.helper[0]
                        };
                        G.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(G, true);
                        this.instance._mouseStart(G, true, true);
                        this.instance.offset.click.top = D.offset.click.top;
                        this.instance.offset.click.left = D.offset.click.left;
                        this.instance.offset.parent.left -= D.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= D.offset.parent.top - this.instance.offset.parent.top;
                        D._trigger("toSortable", G);
                        D.dropped = this.instance.element;
                        D.currentItem = D.element;
                        this.instance.fromOutside = D
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(G)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", G, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(G, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        D._trigger("fromSortable", G);
                        D.dropped = false
                    }
                }
            })
        }
    });
    A.ui.plugin.add("draggable", "cursor", {
        start: function (E, D) {
            var C = A("body"), F = A(this).data("draggable").options;
            if (C.css("cursor")) {
                F._cursor = C.css("cursor")
            }
            C.css("cursor", F.cursor)
        }, stop: function (E, D) {
            var C = A(this).data("draggable").options;
            if (C._cursor) {
                A("body").css("cursor", C._cursor)
            }
        }
    });
    A.ui.plugin.add("draggable", "opacity", {
        start: function (E, D) {
            var C = A(D.helper), F = A(this).data("draggable").options;
            if (C.css("opacity")) {
                F._opacity = C.css("opacity")
            }
            C.css("opacity", F.opacity)
        }, stop: function (E, D) {
            var C = A(this).data("draggable").options;
            if (C._opacity) {
                A(D.helper).css("opacity", C._opacity)
            }
        }
    });
    A.ui.plugin.add("draggable", "scroll", {
        start: function (D, C) {
            var E = A(this).data("draggable");
            if (E.scrollParent[0] != document && E.scrollParent[0].tagName != "HTML") {
                E.overflowOffset = E.scrollParent.offset()
            }
        }, drag: function (F, E) {
            var G = A(this).data("draggable"), D = G.options, C = false;
            if (G.scrollParent[0] != document && G.scrollParent[0].tagName != "HTML") {
                if (!D.axis || D.axis != "x") {
                    if ((G.overflowOffset.top + G.scrollParent[0].offsetHeight) - F.pageY < D.scrollSensitivity) {
                        G.scrollParent[0].scrollTop = C = G.scrollParent[0].scrollTop + D.scrollSpeed
                    } else {
                        if (F.pageY - G.overflowOffset.top < D.scrollSensitivity) {
                            G.scrollParent[0].scrollTop = C = G.scrollParent[0].scrollTop - D.scrollSpeed
                        }
                    }
                }
                if (!D.axis || D.axis != "y") {
                    if ((G.overflowOffset.left + G.scrollParent[0].offsetWidth) - F.pageX < D.scrollSensitivity) {
                        G.scrollParent[0].scrollLeft = C = G.scrollParent[0].scrollLeft + D.scrollSpeed
                    } else {
                        if (F.pageX - G.overflowOffset.left < D.scrollSensitivity) {
                            G.scrollParent[0].scrollLeft = C = G.scrollParent[0].scrollLeft - D.scrollSpeed
                        }
                    }
                }
            } else {
                if (!D.axis || D.axis != "x") {
                    if (F.pageY - A(document).scrollTop() < D.scrollSensitivity) {
                        C = A(document).scrollTop(A(document).scrollTop() - D.scrollSpeed)
                    } else {
                        if (A(window).height() - (F.pageY - A(document).scrollTop()) < D.scrollSensitivity) {
                            C = A(document).scrollTop(A(document).scrollTop() + D.scrollSpeed)
                        }
                    }
                }
                if (!D.axis || D.axis != "y") {
                    if (F.pageX - A(document).scrollLeft() < D.scrollSensitivity) {
                        C = A(document).scrollLeft(A(document).scrollLeft() - D.scrollSpeed)
                    } else {
                        if (A(window).width() - (F.pageX - A(document).scrollLeft()) < D.scrollSensitivity) {
                            C = A(document).scrollLeft(A(document).scrollLeft() + D.scrollSpeed)
                        }
                    }
                }
            }
            if (C !== false && A.ui.ddmanager && !D.dropBehaviour) {
                A.ui.ddmanager.prepareOffsets(G, F)
            }
        }
    });
    A.ui.plugin.add("draggable", "snap", {
        start: function (E, D) {
            var F = A(this).data("draggable"), C = F.options;
            F.snapElements = [];
            A(C.snap.constructor != String ? (C.snap.items || ":data(draggable)") : C.snap).each(function () {
                var H = A(this);
                var G = H.offset();
                if (this != F.element[0]) {
                    F.snapElements.push({
                        item: this,
                        width: H.outerWidth(),
                        height: H.outerHeight(),
                        top: G.top,
                        left: G.left
                    })
                }
            })
        }, drag: function (D, J) {
            var U = A(this).data("draggable"), M = U.options;
            var Q = M.snapTolerance;
            var N = J.offset.left, R = N + U.helperProportions.width, O = J.offset.top,
                S = O + U.helperProportions.height;
            for (var K = U.snapElements.length - 1; K >= 0; K--) {
                var L = U.snapElements[K].left, F = L + U.snapElements[K].width, H = U.snapElements[K].top,
                    P = H + U.snapElements[K].height;
                if (!((L - Q < N && N < F + Q && H - Q < O && O < P + Q) || (L - Q < N && N < F + Q && H - Q < S && S < P + Q) || (L - Q < R && R < F + Q && H - Q < O && O < P + Q) || (L - Q < R && R < F + Q && H - Q < S && S < P + Q))) {
                    if (U.snapElements[K].snapping) {
                        (U.options.snap.release && U.options.snap.release.call(U.element, D, A.extend(U._uiHash(), {snapItem: U.snapElements[K].item})))
                    }
                    U.snapElements[K].snapping = false;
                    continue
                }
                if (M.snapMode != "inner") {
                    var C = Math.abs(H - S) <= Q;
                    var I = Math.abs(P - O) <= Q;
                    var E = Math.abs(L - R) <= Q;
                    var T = Math.abs(F - N) <= Q;
                    if (C) {
                        J.position.top = U._convertPositionTo("relative", {
                                top: H - U.helperProportions.height,
                                left: 0
                            }).top - U.margins.top
                    }
                    if (I) {
                        J.position.top = U._convertPositionTo("relative", {top: P, left: 0}).top - U.margins.top
                    }
                    if (E) {
                        J.position.left = U._convertPositionTo("relative", {
                                top: 0,
                                left: L - U.helperProportions.width
                            }).left - U.margins.left
                    }
                    if (T) {
                        J.position.left = U._convertPositionTo("relative", {top: 0, left: F}).left - U.margins.left
                    }
                }
                var G = (C || I || E || T);
                if (M.snapMode != "outer") {
                    var C = Math.abs(H - O) <= Q;
                    var I = Math.abs(P - S) <= Q;
                    var E = Math.abs(L - N) <= Q;
                    var T = Math.abs(F - R) <= Q;
                    if (C) {
                        J.position.top = U._convertPositionTo("relative", {top: H, left: 0}).top - U.margins.top
                    }
                    if (I) {
                        J.position.top = U._convertPositionTo("relative", {
                                top: P - U.helperProportions.height,
                                left: 0
                            }).top - U.margins.top
                    }
                    if (E) {
                        J.position.left = U._convertPositionTo("relative", {top: 0, left: L}).left - U.margins.left
                    }
                    if (T) {
                        J.position.left = U._convertPositionTo("relative", {
                                top: 0,
                                left: F - U.helperProportions.width
                            }).left - U.margins.left
                    }
                }
                if (!U.snapElements[K].snapping && (C || I || E || T || G)) {
                    (U.options.snap.snap && U.options.snap.snap.call(U.element, D, A.extend(U._uiHash(), {snapItem: U.snapElements[K].item})))
                }
                U.snapElements[K].snapping = (C || I || E || T || G)
            }
        }
    });
    A.ui.plugin.add("draggable", "stack", {
        start: function (F, E) {
            var C = A(this).data("draggable").options;
            var G = A.makeArray(A(C.stack)).sort(function (H, I) {
                return (parseInt(A(H).css("zIndex"), 10) || 0) - (parseInt(A(I).css("zIndex"), 10) || 0)
            });
            if (!G.length) {
                return
            }
            var D = parseInt(G[0].style.zIndex) || 0;
            A(G).each(function (H) {
                this.style.zIndex = D + H
            });
            this[0].style.zIndex = D + G.length
        }
    });
    A.ui.plugin.add("draggable", "zIndex", {
        start: function (E, D) {
            var C = A(D.helper), F = A(this).data("draggable").options;
            if (C.css("zIndex")) {
                F._zIndex = C.css("zIndex")
            }
            C.css("zIndex", F.zIndex)
        }, stop: function (E, D) {
            var C = A(this).data("draggable").options;
            if (C._zIndex) {
                A(D.helper).css("zIndex", C._zIndex)
            }
        }
    })
})(jQuery);
/*
 * jQuery UI Button 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (C, B) {
    var A, F, G, H, J = "ui-button ui-widget ui-state-default ui-corner-all", E = "ui-state-hover ui-state-active ",
        K = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        D = function () {
            var L = C(this).find(":ui-button");
            setTimeout(function () {
                L.button("refresh")
            }, 1)
        }, I = function (O) {
            var L = O.name, N = O.form, M = C([]);
            if (L) {
                if (N) {
                    M = C(N).find("[name='" + L + "']")
                } else {
                    M = C("[name='" + L + "']", O.ownerDocument).filter(function () {
                        return !this.form
                    })
                }
            }
            return M
        };
    C.widget("ui.button", {
        version: "1.9.2",
        defaultElement: "<button>",
        options: {disabled: null, text: true, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, D);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var M = this, P = this.options, L = this.type === "checkbox" || this.type === "radio",
                N = !L ? "ui-state-active" : "", O = "ui-state-focus";
            if (P.label === null) {
                P.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(J).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                if (P.disabled) {
                    return
                }
                if (this === A) {
                    C(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function () {
                if (P.disabled) {
                    return
                }
                C(this).removeClass(N)
            }).bind("click" + this.eventNamespace, function (Q) {
                if (P.disabled) {
                    Q.preventDefault();
                    Q.stopImmediatePropagation()
                }
            });
            this.element.bind("focus" + this.eventNamespace, function () {
                M.buttonElement.addClass(O)
            }).bind("blur" + this.eventNamespace, function () {
                M.buttonElement.removeClass(O)
            });
            if (L) {
                this.element.bind("change" + this.eventNamespace, function () {
                    if (H) {
                        return
                    }
                    M.refresh()
                });
                this.buttonElement.bind("mousedown" + this.eventNamespace, function (Q) {
                    if (P.disabled) {
                        return
                    }
                    H = false;
                    F = Q.pageX;
                    G = Q.pageY
                }).bind("mouseup" + this.eventNamespace, function (Q) {
                    if (P.disabled) {
                        return
                    }
                    if (F !== Q.pageX || G !== Q.pageY) {
                        H = true
                    }
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (P.disabled || H) {
                        return false
                    }
                    C(this).toggleClass("ui-state-active");
                    M.buttonElement.attr("aria-pressed", M.element[0].checked)
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function () {
                        if (P.disabled || H) {
                            return false
                        }
                        C(this).addClass("ui-state-active");
                        M.buttonElement.attr("aria-pressed", "true");
                        var Q = M.element[0];
                        I(Q).not(Q).map(function () {
                            return C(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                        if (P.disabled) {
                            return false
                        }
                        C(this).addClass("ui-state-active");
                        A = this;
                        M.document.one("mouseup", function () {
                            A = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function () {
                        if (P.disabled) {
                            return false
                        }
                        C(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function (Q) {
                        if (P.disabled) {
                            return false
                        }
                        if (Q.keyCode === C.ui.keyCode.SPACE || Q.keyCode === C.ui.keyCode.ENTER) {
                            C(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace, function () {
                        C(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function (Q) {
                            if (Q.keyCode === C.ui.keyCode.SPACE) {
                                C(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", P.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            var N, M, L;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                N = this.element.parents().last();
                M = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = N.find(M);
                if (!this.buttonElement.length) {
                    N = N.length ? N.siblings() : this.element.siblings();
                    this.buttonElement = N.filter(M);
                    if (!this.buttonElement.length) {
                        this.buttonElement = N.find(M)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                L = this.element.is(":checked");
                if (L) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", L)
            } else {
                this.buttonElement = this.element
            }
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(J + " " + E + " " + K).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },
        _setOption: function (M, L) {
            this._super(M, L);
            if (M === "disabled") {
                if (L) {
                    this.element.prop("disabled", true)
                } else {
                    this.element.prop("disabled", false)
                }
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var L = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (L !== this.options.disabled) {
                this._setOption("disabled", L)
            }
            if (this.type === "radio") {
                I(this.element[0]).each(function () {
                    if (C(this).is(":checked")) {
                        C(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        C(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },
        _resetButton: function () {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var P = this.buttonElement.removeClass(K),
                O = C("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),
                N = this.options.icons, M = N.primary && N.secondary, L = [];
            if (N.primary || N.secondary) {
                if (this.options.text) {
                    L.push("ui-button-text-icon" + (M ? "s" : (N.primary ? "-primary" : "-secondary")))
                }
                if (N.primary) {
                    P.prepend("<span class='ui-button-icon-primary ui-icon " + N.primary + "'></span>")
                }
                if (N.secondary) {
                    P.append("<span class='ui-button-icon-secondary ui-icon " + N.secondary + "'></span>")
                }
                if (!this.options.text) {
                    L.push(M ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        P.attr("title", C.trim(O))
                    }
                }
            } else {
                L.push("ui-button-text-only")
            }
            P.addClass(L.join(" "))
        }
    });
    C.widget("ui.buttonset", {
        version: "1.9.2",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (M, L) {
            if (M === "disabled") {
                this.buttons.button("option", M, L)
            }
            this._super(M, L)
        },
        refresh: function () {
            var L = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return C(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(L ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return C(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery));
/*
 * jQuery UI Position 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function (E, C) {
    E.ui = E.ui || {};
    var H, J = Math.max, I = Math.abs, G = Math.round, M = /left|center|right/, D = /top|center|bottom/,
        N = /[\+\-]\d+%?/, B = /^\w+/, L = /%$/, A = E.fn.position;

    function K(Q, P, O) {
        return [parseInt(Q[0], 10) * (L.test(Q[0]) ? P / 100 : 1), parseInt(Q[1], 10) * (L.test(Q[1]) ? O / 100 : 1)]
    }

    function F(P, O) {
        return parseInt(E.css(P, O), 10) || 0
    }

    E.position = {
        scrollbarWidth: function () {
            if (H !== C) {
                return H
            }
            var R, Q,
                P = E("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                O = P.children()[0];
            E("body").append(P);
            R = O.offsetWidth;
            P.css("overflow", "scroll");
            Q = O.offsetWidth;
            if (R === Q) {
                Q = P[0].clientWidth
            }
            P.remove();
            return (H = R - Q)
        }, getScrollInfo: function (O) {
            var Q = O.isWindow ? "" : O.element.css("overflow-x"), P = O.isWindow ? "" : O.element.css("overflow-y"),
                S = Q === "scroll" || (Q === "auto" && O.width < O.element[0].scrollWidth),
                R = P === "scroll" || (P === "auto" && O.height < O.element[0].scrollHeight);
            return {width: S ? E.position.scrollbarWidth() : 0, height: R ? E.position.scrollbarWidth() : 0}
        }, getWithinInfo: function (Q) {
            var P = E(Q || window), O = E.isWindow(P[0]);
            return {
                element: P,
                isWindow: O,
                offset: P.offset() || {left: 0, top: 0},
                scrollLeft: P.scrollLeft(),
                scrollTop: P.scrollTop(),
                width: O ? P.width() : P.outerWidth(),
                height: O ? P.height() : P.outerHeight()
            }
        }
    };
    E.fn.position = function (O) {
        if (!O || !O.of) {
            return A.apply(this, arguments)
        }
        O = E.extend({}, O);
        var U, Q, W, S, R, Y = E(O.of), Z = E.position.getWithinInfo(O.within), V = E.position.getScrollInfo(Z),
            T = Y[0], P = (O.collision || "flip").split(" "), X = {};
        if (T.nodeType === 9) {
            Q = Y.width();
            W = Y.height();
            S = {top: 0, left: 0}
        } else {
            if (E.isWindow(T)) {
                Q = Y.width();
                W = Y.height();
                S = {top: Y.scrollTop(), left: Y.scrollLeft()}
            } else {
                if (T.preventDefault) {
                    O.at = "left top";
                    Q = W = 0;
                    S = {top: T.pageY, left: T.pageX}
                } else {
                    Q = Y.outerWidth();
                    W = Y.outerHeight();
                    S = Y.offset()
                }
            }
        }
        R = E.extend({}, S);
        E.each(["my", "at"], function () {
            var b = (O[this] || "").split(" "), a, c;
            if (b.length === 1) {
                b = M.test(b[0]) ? b.concat(["center"]) : D.test(b[0]) ? ["center"].concat(b) : ["center", "center"]
            }
            b[0] = M.test(b[0]) ? b[0] : "center";
            b[1] = D.test(b[1]) ? b[1] : "center";
            a = N.exec(b[0]);
            c = N.exec(b[1]);
            X[this] = [a ? a[0] : 0, c ? c[0] : 0];
            O[this] = [B.exec(b[0])[0], B.exec(b[1])[0]]
        });
        if (P.length === 1) {
            P[1] = P[0]
        }
        if (O.at[0] === "right") {
            R.left += Q
        } else {
            if (O.at[0] === "center") {
                R.left += Q / 2
            }
        }
        if (O.at[1] === "bottom") {
            R.top += W
        } else {
            if (O.at[1] === "center") {
                R.top += W / 2
            }
        }
        U = K(X.at, Q, W);
        R.left += U[0];
        R.top += U[1];
        return this.each(function () {
            var k, c, j = E(this), g = j.outerWidth(), f = j.outerHeight(), i = F(this, "marginLeft"),
                e = F(this, "marginTop"), a = g + i + F(this, "marginRight") + V.width,
                h = f + e + F(this, "marginBottom") + V.height, b = E.extend({}, R),
                d = K(X.my, j.outerWidth(), j.outerHeight());
            if (O.my[0] === "right") {
                b.left -= g
            } else {
                if (O.my[0] === "center") {
                    b.left -= g / 2
                }
            }
            if (O.my[1] === "bottom") {
                b.top -= f
            } else {
                if (O.my[1] === "center") {
                    b.top -= f / 2
                }
            }
            b.left += d[0];
            b.top += d[1];
            if (!E.support.offsetFractions) {
                b.left = G(b.left);
                b.top = G(b.top)
            }
            k = {marginLeft: i, marginTop: e};
            E.each(["left", "top"], function (m, l) {
                if (E.ui.position[P[m]]) {
                    E.ui.position[P[m]][l](b, {
                        targetWidth: Q,
                        targetHeight: W,
                        elemWidth: g,
                        elemHeight: f,
                        collisionPosition: k,
                        collisionWidth: a,
                        collisionHeight: h,
                        offset: [U[0] + d[0], U[1] + d[1]],
                        my: O.my,
                        at: O.at,
                        within: Z,
                        elem: j
                    })
                }
            });
            if (E.fn.bgiframe) {
                j.bgiframe()
            }
            if (O.using) {
                c = function (l) {
                    var o = S.left - b.left, m = o + Q - g, p = S.top - b.top, q = p + W - f, n = {
                        target: {element: Y, left: S.left, top: S.top, width: Q, height: W},
                        element: {element: j, left: b.left, top: b.top, width: g, height: f},
                        horizontal: m < 0 ? "left" : o > 0 ? "right" : "center",
                        vertical: q < 0 ? "top" : p > 0 ? "bottom" : "middle"
                    };
                    if (Q < g && I(o + m) < Q) {
                        n.horizontal = "center"
                    }
                    if (W < f && I(p + q) < W) {
                        n.vertical = "middle"
                    }
                    if (J(I(o), I(m)) > J(I(p), I(q))) {
                        n.important = "horizontal"
                    } else {
                        n.important = "vertical"
                    }
                    O.using.call(this, l, n)
                }
            }
            j.offset(E.extend(b, {using: c}))
        })
    };
    E.ui.position = {
        fit: {
            left: function (O, Q) {
                var P = Q.within, S = P.isWindow ? P.scrollLeft : P.offset.left, T = P.width,
                    U = O.left - Q.collisionPosition.marginLeft, W = S - U, V = U + Q.collisionWidth - T - S, R;
                if (Q.collisionWidth > T) {
                    if (W > 0 && V <= 0) {
                        R = O.left + W + Q.collisionWidth - T - S;
                        O.left += W - R
                    } else {
                        if (V > 0 && W <= 0) {
                            O.left = S
                        } else {
                            if (W > V) {
                                O.left = S + T - Q.collisionWidth
                            } else {
                                O.left = S
                            }
                        }
                    }
                } else {
                    if (W > 0) {
                        O.left += W
                    } else {
                        if (V > 0) {
                            O.left -= V
                        } else {
                            O.left = J(O.left - U, O.left)
                        }
                    }
                }
            }, top: function (O, R) {
                var U = R.within, S = U.isWindow ? U.scrollTop : U.offset.top, T = R.within.height,
                    P = O.top - R.collisionPosition.marginTop, W = S - P, V = P + R.collisionHeight - T - S, Q;
                if (R.collisionHeight > T) {
                    if (W > 0 && V <= 0) {
                        Q = O.top + W + R.collisionHeight - T - S;
                        O.top += W - Q
                    } else {
                        if (V > 0 && W <= 0) {
                            O.top = S
                        } else {
                            if (W > V) {
                                O.top = S + T - R.collisionHeight
                            } else {
                                O.top = S
                            }
                        }
                    }
                } else {
                    if (W > 0) {
                        O.top += W
                    } else {
                        if (V > 0) {
                            O.top -= V
                        } else {
                            O.top = J(O.top - P, O.top)
                        }
                    }
                }
            }
        }, flip: {
            left: function (R, U) {
                var b = U.within, W = b.offset.left + b.scrollLeft, X = b.width,
                    O = b.isWindow ? b.scrollLeft : b.offset.left, Y = R.left - U.collisionPosition.marginLeft,
                    T = Y - O, S = Y + U.collisionWidth - X - O,
                    a = U.my[0] === "left" ? -U.elemWidth : U.my[0] === "right" ? U.elemWidth : 0,
                    P = U.at[0] === "left" ? U.targetWidth : U.at[0] === "right" ? -U.targetWidth : 0,
                    Q = -2 * U.offset[0], V, Z;
                if (T < 0) {
                    V = R.left + a + P + Q + U.collisionWidth - X - W;
                    if (V < 0 || V < I(T)) {
                        R.left += a + P + Q
                    }
                } else {
                    if (S > 0) {
                        Z = R.left - U.collisionPosition.marginLeft + a + P + Q - O;
                        if (Z > 0 || I(Z) < S) {
                            R.left += a + P + Q
                        }
                    }
                }
            }, top: function (Q, T) {
                var Z = T.within, U = Z.offset.top + Z.scrollTop, X = Z.height,
                    c = Z.isWindow ? Z.scrollTop : Z.offset.top, R = Q.top - T.collisionPosition.marginTop, S = R - c,
                    a = R + T.collisionHeight - X - c, P = T.my[1] === "top",
                    Y = P ? -T.elemHeight : T.my[1] === "bottom" ? T.elemHeight : 0,
                    W = T.at[1] === "top" ? T.targetHeight : T.at[1] === "bottom" ? -T.targetHeight : 0,
                    O = -2 * T.offset[1], V, b;
                if (S < 0) {
                    b = Q.top + Y + W + O + T.collisionHeight - X - U;
                    if ((Q.top + Y + W + O) > S && (b < 0 || b < I(S))) {
                        Q.top += Y + W + O
                    }
                } else {
                    if (a > 0) {
                        V = Q.top - T.collisionPosition.marginTop + Y + W + O - c;
                        if ((Q.top + Y + W + O) > a && (V > 0 || I(V) < a)) {
                            Q.top += Y + W + O
                        }
                    }
                }
            }
        }, flipfit: {
            left: function () {
                E.ui.position.flip.left.apply(this, arguments);
                E.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                E.ui.position.flip.top.apply(this, arguments);
                E.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    (function () {
        var T, O, R, Q, U, S = document.getElementsByTagName("body")[0], P = document.createElement("div");
        T = document.createElement(S ? "div" : "body");
        R = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"};
        if (S) {
            E.extend(R, {position: "absolute", left: "-1000px", top: "-1000px"})
        }
        for (U in R) {
            T.style[U] = R[U]
        }
        T.appendChild(P);
        O = S || document.documentElement;
        O.insertBefore(T, O.firstChild);
        P.style.cssText = "position: absolute; left: 10.7432222px;";
        Q = E(P).offset().left;
        E.support.offsetFractions = Q > 10 && Q < 11;
        T.innerHTML = "";
        O.removeChild(T)
    })();
    if (E.uiBackCompat !== false) {
        (function (O) {
            var P = O.fn.position;
            O.fn.position = function (R) {
                if (!R || !R.offset) {
                    return P.call(this, R)
                }
                var S = R.offset.split(" "), Q = R.at.split(" ");
                if (S.length === 1) {
                    S[1] = S[0]
                }
                if (/^\d/.test(S[0])) {
                    S[0] = "+" + S[0]
                }
                if (/^\d/.test(S[1])) {
                    S[1] = "+" + S[1]
                }
                if (Q.length === 1) {
                    if (/left|center|right/.test(Q[0])) {
                        Q[1] = "center"
                    } else {
                        Q[1] = Q[0];
                        Q[0] = "center"
                    }
                }
                return P.call(this, O.extend(R, {at: Q[0] + S[0] + " " + Q[1] + S[1], offset: C}))
            }
        }(jQuery))
    }
}(jQuery));
/*
 * jQuery UI Resizable 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (A, C) {
    A.widget("ui.resizable", A.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1000
        },
        _create: function () {
            var E = this, F = this.options;
            this.element.addClass("ui-resizable");
            A.extend(this, {
                _aspectRatio: !!(F.aspectRatio),
                aspectRatio: F.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: F.helper || F.ghost || F.animate ? F.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(A('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({margin: this.originalElement.css("margin")});
                this._proportionallyResize()
            }
            this.handles = F.handles || (!A(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                });
            if (this.handles.constructor == String) {
                if (this.handles == "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                var I = this.handles.split(",");
                this.handles = {};
                for (var H = 0; H < I.length; H++) {
                    var K = A.trim(I[H]), G = "ui-resizable-" + K;
                    var J = A('<div class="ui-resizable-handle ' + G + '"></div>');
                    J.css({zIndex: F.zIndex});
                    if ("se" == K) {
                        J.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[K] = ".ui-resizable-" + K;
                    this.element.append(J)
                }
            }
            this._renderAxis = function (N) {
                N = N || this.element;
                for (var O in this.handles) {
                    if (this.handles[O].constructor == String) {
                        this.handles[O] = A(this.handles[O], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var P = A(this.handles[O], this.element), L = 0;
                        L = /sw|ne|nw|se|n|s/.test(O) ? P.outerHeight() : P.outerWidth();
                        var M = ["padding", /ne|nw|n/.test(O) ? "Top" : /se|sw|s/.test(O) ? "Bottom" : /^e$/.test(O) ? "Right" : "Left"].join("");
                        N.css(M, L);
                        this._proportionallyResize()
                    }
                    if (!A(this.handles[O]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = A(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function () {
                if (!E.resizing) {
                    if (this.className) {
                        var L = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    E.axis = L && L[1] ? L[1] : "se"
                }
            });
            if (F.autoHide) {
                this._handles.hide();
                A(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    if (F.disabled) {
                        return
                    }
                    A(this).removeClass("ui-resizable-autohide");
                    E._handles.show()
                }).mouseleave(function () {
                    if (F.disabled) {
                        return
                    }
                    if (!E.resizing) {
                        A(this).addClass("ui-resizable-autohide");
                        E._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var E = function (G) {
                A(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                E(this.element);
                var F = this.element;
                this.originalElement.css({
                    position: F.css("position"),
                    width: F.outerWidth(),
                    height: F.outerHeight(),
                    top: F.css("top"),
                    left: F.css("left")
                }).insertAfter(F);
                F.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            E(this.originalElement);
            return this
        },
        _mouseCapture: function (E) {
            var G = false;
            for (var F in this.handles) {
                if (A(this.handles[F])[0] == E.target) {
                    G = true
                }
            }
            return !this.options.disabled && G
        },
        _mouseStart: function (I) {
            var F = this.options, K = this.element.position(), G = this.element;
            this.resizing = true;
            this.documentScroll = {top: A(document).scrollTop(), left: A(document).scrollLeft()};
            if (G.is(".ui-draggable") || (/absolute/).test(G.css("position"))) {
                G.css({position: "absolute", top: K.top, left: K.left})
            }
            this._renderProxy();
            var J = D(this.helper.css("left")), H = D(this.helper.css("top"));
            if (F.containment) {
                J += A(F.containment).scrollLeft() || 0;
                H += A(F.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {left: J, top: H};
            this.size = this._helper ? {width: G.outerWidth(), height: G.outerHeight()} : {
                width: G.width(),
                height: G.height()
            };
            this.originalSize = this._helper ? {width: G.outerWidth(), height: G.outerHeight()} : {
                width: G.width(),
                height: G.height()
            };
            this.originalPosition = {left: J, top: H};
            this.sizeDiff = {width: G.outerWidth() - G.width(), height: G.outerHeight() - G.height()};
            this.originalMousePosition = {left: I.pageX, top: I.pageY};
            this.aspectRatio = (typeof F.aspectRatio == "number") ? F.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            var E = A(".ui-resizable-" + this.axis).css("cursor");
            A("body").css("cursor", E == "auto" ? this.axis + "-resize" : E);
            G.addClass("ui-resizable-resizing");
            this._propagate("start", I);
            return true
        },
        _mouseDrag: function (O) {
            var L = this.helper, H = this.options, K = {}, F = this, I = this.originalMousePosition, J = this.axis;
            var M = (O.pageX - I.left) || 0, N = (O.pageY - I.top) || 0;
            var E = this._change[J];
            if (!E) {
                return false
            }
            var G = E.apply(this, [O, M, N]);
            this._updateVirtualBoundaries(O.shiftKey);
            if (this._aspectRatio || O.shiftKey) {
                G = this._updateRatio(G, O)
            }
            G = this._respectSize(G, O);
            this._propagate("resize", O);
            L.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            this._updateCache(G);
            this._trigger("resize", O, this.ui());
            return false
        },
        _mouseStop: function (J) {
            this.resizing = false;
            var I = this.options, H = this;
            if (this._helper) {
                var M = this._proportionallyResizeElements, K = M.length && (/textarea/i).test(M[0].nodeName),
                    F = K && A.ui.hasScroll(M[0], "left") ? 0 : H.sizeDiff.height, L = K ? 0 : H.sizeDiff.width;
                var N = {width: (H.helper.width() - L), height: (H.helper.height() - F)},
                    G = (parseInt(H.element.css("left"), 10) + (H.position.left - H.originalPosition.left)) || null,
                    E = (parseInt(H.element.css("top"), 10) + (H.position.top - H.originalPosition.top)) || null;
                if (!I.animate) {
                    this.element.css(A.extend(N, {top: E, left: G}))
                }
                H.helper.height(H.size.height);
                H.helper.width(H.size.width);
                if (this._helper && !I.animate) {
                    this._proportionallyResize()
                }
            }
            A("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", J);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updateVirtualBoundaries: function (K) {
            var E = this.options, H, J, F, I, G;
            G = {
                minWidth: B(E.minWidth) ? E.minWidth : 0,
                maxWidth: B(E.maxWidth) ? E.maxWidth : Infinity,
                minHeight: B(E.minHeight) ? E.minHeight : 0,
                maxHeight: B(E.maxHeight) ? E.maxHeight : Infinity
            };
            if (this._aspectRatio || K) {
                H = G.minHeight * this.aspectRatio;
                F = G.minWidth / this.aspectRatio;
                J = G.maxHeight * this.aspectRatio;
                I = G.maxWidth / this.aspectRatio;
                if (H > G.minWidth) {
                    G.minWidth = H
                }
                if (F > G.minHeight) {
                    G.minHeight = F
                }
                if (J < G.maxWidth) {
                    G.maxWidth = J
                }
                if (I < G.maxHeight) {
                    G.maxHeight = I
                }
            }
            this._vBoundaries = G
        },
        _updateCache: function (F) {
            var E = this.options;
            this.offset = this.helper.offset();
            if (B(F.left)) {
                this.position.left = F.left
            }
            if (B(F.top)) {
                this.position.top = F.top
            }
            if (B(F.height)) {
                this.size.height = F.height
            }
            if (B(F.width)) {
                this.size.width = F.width
            }
        },
        _updateRatio: function (J, H) {
            var F = this.options, I = this.position, E = this.size, G = this.axis;
            if (B(J.height)) {
                J.width = (J.height * this.aspectRatio)
            } else {
                if (B(J.width)) {
                    J.height = (J.width / this.aspectRatio)
                }
            }
            if (G == "sw") {
                J.left = I.left + (E.width - J.width);
                J.top = null
            }
            if (G == "nw") {
                J.top = I.top + (E.height - J.height);
                J.left = I.left + (E.width - J.width)
            }
            return J
        },
        _respectSize: function (H, F) {
            var I = this.helper, E = this._vBoundaries, O = this._aspectRatio || F.shiftKey, G = this.axis,
                R = B(H.width) && E.maxWidth && (E.maxWidth < H.width),
                N = B(H.height) && E.maxHeight && (E.maxHeight < H.height),
                J = B(H.width) && E.minWidth && (E.minWidth > H.width),
                M = B(H.height) && E.minHeight && (E.minHeight > H.height);
            if (J) {
                H.width = E.minWidth
            }
            if (M) {
                H.height = E.minHeight
            }
            if (R) {
                H.width = E.maxWidth
            }
            if (N) {
                H.height = E.maxHeight
            }
            var K = this.originalPosition.left + this.originalSize.width, P = this.position.top + this.size.height;
            var L = /sw|nw|w/.test(G), S = /nw|ne|n/.test(G);
            if (J && L) {
                H.left = K - E.minWidth
            }
            if (R && L) {
                H.left = K - E.maxWidth
            }
            if (M && S) {
                H.top = P - E.minHeight
            }
            if (N && S) {
                H.top = P - E.maxHeight
            }
            var Q = !H.width && !H.height;
            if (Q && !H.left && H.top) {
                H.top = null
            } else {
                if (Q && !H.top && H.left) {
                    H.left = null
                }
            }
            return H
        },
        _proportionallyResize: function () {
            var F = this.options;
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var I = this.helper || this.element;
            for (var G = 0; G < this._proportionallyResizeElements.length; G++) {
                var J = this._proportionallyResizeElements[G];
                if (!this.borderDif) {
                    var H = [J.css("borderTopWidth"), J.css("borderRightWidth"), J.css("borderBottomWidth"), J.css("borderLeftWidth")],
                        E = [J.css("paddingTop"), J.css("paddingRight"), J.css("paddingBottom"), J.css("paddingLeft")];
                    this.borderDif = A.map(H, function (L, N) {
                        var M = parseInt(L, 10) || 0, K = parseInt(E[N], 10) || 0;
                        return M + K
                    })
                }
                J.css({
                    height: (I.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (I.width() - this.borderDif[1] - this.borderDif[3]) || 0
                })
            }
        },
        _renderProxy: function () {
            var G = this.element, F = this.options;
            this.elementOffset = G.offset();
            if (this._helper) {
                this.helper = this.helper || A('<div style="overflow:hidden;"></div>');
                var E = (A.ui.ie6 ? 1 : 0), H = (A.ui.ie6 ? 2 : -1);
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + H,
                    height: this.element.outerHeight() + H,
                    position: "absolute",
                    left: this.elementOffset.left - E + "px",
                    top: this.elementOffset.top - E + "px",
                    zIndex: ++F.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function (E, G, F) {
                return {width: this.originalSize.width + G}
            }, w: function (G, J, H) {
                var F = this.options, I = this.originalSize, E = this.originalPosition;
                return {left: E.left + J, width: I.width - J}
            }, n: function (G, J, H) {
                var F = this.options, I = this.originalSize, E = this.originalPosition;
                return {top: E.top + H, height: I.height - H}
            }, s: function (E, G, F) {
                return {height: this.originalSize.height + F}
            }, se: function (E, G, F) {
                return A.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [E, G, F]))
            }, sw: function (E, G, F) {
                return A.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [E, G, F]))
            }, ne: function (E, G, F) {
                return A.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [E, G, F]))
            }, nw: function (E, G, F) {
                return A.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [E, G, F]))
            }
        },
        _propagate: function (E, F) {
            A.ui.plugin.call(this, E, [F, this.ui()]);
            (E != "resize" && this._trigger(E, F, this.ui()))
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    A.ui.plugin.add("resizable", "alsoResize", {
        start: function (H, G) {
            var E = A(this).data("resizable"), F = E.options;
            var I = function (J) {
                A(J).each(function () {
                    var K = A(this);
                    K.data("resizable-alsoresize", {
                        width: parseInt(K.width(), 10),
                        height: parseInt(K.height(), 10),
                        left: parseInt(K.css("left"), 10),
                        top: parseInt(K.css("top"), 10)
                    })
                })
            };
            if (typeof(F.alsoResize) == "object" && !F.alsoResize.parentNode) {
                if (F.alsoResize.length) {
                    F.alsoResize = F.alsoResize[0];
                    I(F.alsoResize)
                } else {
                    A.each(F.alsoResize, function (J) {
                        I(J)
                    })
                }
            } else {
                I(F.alsoResize)
            }
        }, resize: function (H, K) {
            var F = A(this).data("resizable"), G = F.options, L = F.originalSize, J = F.originalPosition;
            var E = {
                height: (F.size.height - L.height) || 0,
                width: (F.size.width - L.width) || 0,
                top: (F.position.top - J.top) || 0,
                left: (F.position.left - J.left) || 0
            }, I = function (M, N) {
                A(M).each(function () {
                    var P = A(this), Q = A(this).data("resizable-alsoresize"), R = {},
                        O = N && N.length ? N : P.parents(K.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    A.each(O, function (S, U) {
                        var T = (Q[U] || 0) + (E[U] || 0);
                        if (T && T >= 0) {
                            R[U] = T || null
                        }
                    });
                    P.css(R)
                })
            };
            if (typeof(G.alsoResize) == "object" && !G.alsoResize.nodeType) {
                A.each(G.alsoResize, function (M, N) {
                    I(M, N)
                })
            } else {
                I(G.alsoResize)
            }
        }, stop: function (F, E) {
            A(this).removeData("resizable-alsoresize")
        }
    });
    A.ui.plugin.add("resizable", "animate", {
        stop: function (J, M) {
            var H = A(this).data("resizable"), I = H.options;
            var N = H._proportionallyResizeElements, K = N.length && (/textarea/i).test(N[0].nodeName),
                F = K && A.ui.hasScroll(N[0], "left") ? 0 : H.sizeDiff.height, L = K ? 0 : H.sizeDiff.width;
            var O = {width: (H.size.width - L), height: (H.size.height - F)},
                G = (parseInt(H.element.css("left"), 10) + (H.position.left - H.originalPosition.left)) || null,
                E = (parseInt(H.element.css("top"), 10) + (H.position.top - H.originalPosition.top)) || null;
            H.element.animate(A.extend(O, E && G ? {top: E, left: G} : {}), {
                duration: I.animateDuration,
                easing: I.animateEasing,
                step: function () {
                    var P = {
                        width: parseInt(H.element.css("width"), 10),
                        height: parseInt(H.element.css("height"), 10),
                        top: parseInt(H.element.css("top"), 10),
                        left: parseInt(H.element.css("left"), 10)
                    };
                    if (N && N.length) {
                        A(N[0]).css({width: P.width, height: P.height})
                    }
                    H._updateCache(P);
                    H._propagate("resize", J)
                }
            })
        }
    });
    A.ui.plugin.add("resizable", "containment", {
        start: function (I, N) {
            var F = A(this).data("resizable"), H = F.options, K = F.element;
            var R = H.containment, Q = (R instanceof A) ? R.get(0) : (/parent/.test(R)) ? K.parent().get(0) : R;
            if (!Q) {
                return
            }
            F.containerElement = A(Q);
            if (/document/.test(R) || R == document) {
                F.containerOffset = {left: 0, top: 0};
                F.containerPosition = {left: 0, top: 0};
                F.parentData = {
                    element: A(document),
                    left: 0,
                    top: 0,
                    width: A(document).width(),
                    height: A(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                var G = A(Q), O = [];
                A(["Top", "Right", "Left", "Bottom"]).each(function (T, S) {
                    O[T] = D(G.css("padding" + S))
                });
                F.containerOffset = G.offset();
                F.containerPosition = G.position();
                F.containerSize = {height: (G.innerHeight() - O[3]), width: (G.innerWidth() - O[1])};
                var M = F.containerOffset, P = F.containerSize.height, J = F.containerSize.width,
                    E = (A.ui.hasScroll(Q, "left") ? Q.scrollWidth : J), L = (A.ui.hasScroll(Q) ? Q.scrollHeight : P);
                F.parentData = {element: Q, left: M.left, top: M.top, width: E, height: L}
            }
        }, resize: function (J, N) {
            var G = A(this).data("resizable"), I = G.options, E = G.containerSize, M = G.containerOffset, R = G.size,
                O = G.position, Q = G._aspectRatio || J.shiftKey, S = {top: 0, left: 0}, H = G.containerElement;
            if (H[0] != document && (/static/).test(H.css("position"))) {
                S = M
            }
            if (O.left < (G._helper ? M.left : 0)) {
                G.size.width = G.size.width + (G._helper ? (G.position.left - M.left) : (G.position.left - S.left));
                if (Q) {
                    G.size.height = G.size.width / G.aspectRatio
                }
                G.position.left = I.helper ? M.left : 0
            }
            if (O.top < (G._helper ? M.top : 0)) {
                G.size.height = G.size.height + (G._helper ? (G.position.top - M.top) : G.position.top);
                if (Q) {
                    G.size.width = G.size.height * G.aspectRatio
                }
                G.position.top = G._helper ? M.top : 0
            }
            G.offset.left = G.parentData.left + G.position.left;
            G.offset.top = G.parentData.top + G.position.top;
            var L = Math.abs((G._helper ? G.offset.left - S.left : (G.offset.left - S.left)) + G.sizeDiff.width),
                F = Math.abs((G._helper ? G.offset.top - S.top : (G.offset.top - M.top)) + G.sizeDiff.height);
            var P = G.containerElement.get(0) == G.element.parent().get(0),
                K = /relative|absolute/.test(G.containerElement.css("position"));
            if (P && K) {
                L -= G.parentData.left
            }
            if (L + G.size.width >= G.parentData.width) {
                G.size.width = G.parentData.width - L;
                if (Q) {
                    G.size.height = G.size.width / G.aspectRatio
                }
            }
            if (F + G.size.height >= G.parentData.height) {
                G.size.height = G.parentData.height - F;
                if (Q) {
                    G.size.width = G.size.height * G.aspectRatio
                }
            }
        }, stop: function (I, K) {
            var F = A(this).data("resizable"), H = F.options, L = F.position, J = F.containerOffset,
                M = F.containerPosition, N = F.containerElement;
            var G = A(F.helper), E = G.offset(), O = G.outerWidth() - F.sizeDiff.width,
                P = G.outerHeight() - F.sizeDiff.height;
            if (F._helper && !H.animate && (/relative/).test(N.css("position"))) {
                A(this).css({left: E.left - M.left - J.left, width: O, height: P})
            }
            if (F._helper && !H.animate && (/static/).test(N.css("position"))) {
                A(this).css({left: E.left - M.left - J.left, width: O, height: P})
            }
        }
    });
    A.ui.plugin.add("resizable", "ghost", {
        start: function (H, G) {
            var E = A(this).data("resizable"), F = E.options, I = E.size;
            E.ghost = E.originalElement.clone();
            E.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: I.height,
                width: I.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof F.ghost == "string" ? F.ghost : "");
            E.ghost.appendTo(E.helper)
        }, resize: function (H, G) {
            var E = A(this).data("resizable"), F = E.options;
            if (E.ghost) {
                E.ghost.css({position: "relative", height: E.size.height, width: E.size.width})
            }
        }, stop: function (H, G) {
            var E = A(this).data("resizable"), F = E.options;
            if (E.ghost && E.helper) {
                E.helper.get(0).removeChild(E.ghost.get(0))
            }
        }
    });
    A.ui.plugin.add("resizable", "grid", {
        resize: function (H, K) {
            var F = A(this).data("resizable"), G = F.options, N = F.size, L = F.originalSize, J = F.originalPosition,
                I = F.axis, O = G._aspectRatio || H.shiftKey;
            G.grid = typeof G.grid == "number" ? [G.grid, G.grid] : G.grid;
            var E = Math.round((N.width - L.width) / (G.grid[0] || 1)) * (G.grid[0] || 1),
                M = Math.round((N.height - L.height) / (G.grid[1] || 1)) * (G.grid[1] || 1);
            if (/^(se|s|e)$/.test(I)) {
                F.size.width = L.width + E;
                F.size.height = L.height + M
            } else {
                if (/^(ne)$/.test(I)) {
                    F.size.width = L.width + E;
                    F.size.height = L.height + M;
                    F.position.top = J.top - M
                } else {
                    if (/^(sw)$/.test(I)) {
                        F.size.width = L.width + E;
                        F.size.height = L.height + M;
                        F.position.left = J.left - E
                    } else {
                        F.size.width = L.width + E;
                        F.size.height = L.height + M;
                        F.position.top = J.top - M;
                        F.position.left = J.left - E
                    }
                }
            }
        }
    });
    var D = function (E) {
        return parseInt(E, 10) || 0
    };
    var B = function (E) {
        return !isNaN(parseInt(E, 10))
    }
})(jQuery);
/*
 * jQuery UI Dialog 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 *
 *-- 修正 UI 在 JS中的样式  可控制是否显示closeTitleBtn
 */
(function (C, E) {
    var D = "ui-dialog ui-widget ui-widget-content ui-corner-all ", A = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    }, B = {maxHeight: true, maxWidth: true, minHeight: true, minWidth: true};
    C.widget("ui.dialog", {
        version: "1.9.2",
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center", at: "center", of: "body", collision: "fit", using: function (G) {
                    var F = C(this).css(G).offset().top;
                    if (F < 0) {
                        C(this).css("top", G.top - F)
                    }
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1000
        },
        _create: function () {
            this.originalTitle = this.element.attr("title");
            this.closeBtn = this.element.attr("closeBtn");
            if (typeof this.originalTitle !== "string") {
                this.originalTitle = ""
            }
            this.oldPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.options.title = this.options.title || this.originalTitle;
            var G = this, F = this.options, J = F.title || "&#160;", M, K, L, I, H;
            M = (this.uiDialog = C("<div>")).addClass(D + F.dialogClass).css({
                display: "none",
                outline: 0,
                zIndex: F.zIndex
            }).attr("tabIndex", -1).keydown(function (N) {
                if (F.closeOnEscape && !N.isDefaultPrevented() && N.keyCode && N.keyCode === C.ui.keyCode.ESCAPE) {
                    G.close(N);
                    N.preventDefault()
                }
            }).mousedown(function (N) {
                G.moveToTop(false, N)
            }).appendTo("body");
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(M);
            K = (J == "&#160;") ? (this.uiDialogTitlebar = C("<div>")).addClass("ui-dialog-titlebar ui-widget-header1  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                M.focus()
            }).prependTo(M) : (this.uiDialogTitlebar = C("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
                M.focus()
            }).prependTo(M);
            if (this.closeBtn == "true") {
                L = C("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (N) {
                    N.preventDefault();
                    G.close(N)
                }).appendTo(K);
                (this.uiDialogTitlebarCloseText = C("<span>")).addClass("ui-icon ui-icon-closethick").text(F.closeText).appendTo(L)
            }
            I = C("<span>").uniqueId().addClass("ui-dialog-title").html(J).prependTo(K);
            H = (this.uiDialogButtonPane = C("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix").css("border", "0px");
            (this.uiButtonSet = C("<div>")).addClass("ui-dialog-buttonset").appendTo(H);
            M.attr({role: "dialog", "aria-labelledby": I.attr("id")});
            K.find("*").add(K).disableSelection();
            if (this.closeBtn == "true") {
                this._hoverable(L);
                this._focusable(L)
            }
            if (F.draggable && C.fn.draggable) {
                this._makeDraggable()
            }
            if (F.resizable && C.fn.resizable) {
                this._makeResizable()
            }
            this._createButtons(F.buttons);
            this._isOpen = false;
            if (C.fn.bgiframe) {
                M.bgiframe()
            }
            this._on(M, {
                keydown: function (P) {
                    if (!F.modal || P.keyCode !== C.ui.keyCode.TAB) {
                        return
                    }
                    var N = C(":tabbable", M), O = N.filter(":first"), Q = N.filter(":last");
                    if (P.target === Q[0] && !P.shiftKey) {
                        O.focus(1);
                        return false
                    } else {
                        if (P.target === O[0] && P.shiftKey) {
                            Q.focus(1);
                            return false
                        }
                    }
                }
            })
        },
        _init: function () {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _destroy: function () {
            var G, F = this.oldPosition;
            if (this.overlay) {
                this.overlay.destroy()
            }
            this.uiDialog.hide();
            this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            this.uiDialog.remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            G = F.parent.children().eq(F.index);
            if (G.length && G[0] !== this.element[0]) {
                G.before(this.element)
            } else {
                F.parent.append(this.element)
            }
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (H) {
            var F = this, I, G;
            if (!this._isOpen) {
                return
            }
            if (false === this._trigger("beforeClose", H)) {
                return
            }
            this._isOpen = false;
            if (this.overlay) {
                this.overlay.destroy()
            }
            if (this.options.hide) {
                this._hide(this.uiDialog, this.options.hide, function () {
                    F._trigger("close", H)
                })
            } else {
                this.uiDialog.hide();
                this._trigger("close", H)
            }
            C.ui.dialog.overlay.resize();
            if (this.options.modal) {
                I = 0;
                C(".ui-dialog").each(function () {
                    if (this !== F.uiDialog[0]) {
                        G = C(this).css("z-index");
                        if (!isNaN(G)) {
                            I = Math.max(I, G)
                        }
                    }
                });
                C.ui.dialog.maxZ = I
            }
            return this
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (H, G) {
            var I = this.options, F;
            if ((I.modal && !H) || (!I.stack && !I.modal)) {
                return this._trigger("focus", G)
            }
            if (I.zIndex > C.ui.dialog.maxZ) {
                C.ui.dialog.maxZ = I.zIndex
            }
            if (this.overlay) {
                C.ui.dialog.maxZ += 1;
                C.ui.dialog.overlay.maxZ = C.ui.dialog.maxZ;
                this.overlay.$el.css("z-index", C.ui.dialog.overlay.maxZ)
            }
            F = {scrollTop: this.element.scrollTop(), scrollLeft: this.element.scrollLeft()};
            C.ui.dialog.maxZ += 1;
            this.uiDialog.css("z-index", C.ui.dialog.maxZ);
            this.element.attr(F);
            this._trigger("focus", G);
            return this
        },
        open: function () {
            if (this._isOpen) {
                return
            }
            var H, G = this.options, F = this.uiDialog;
            this._size();
            this._position(G.position);
            F.show(G.show);
            this.overlay = G.modal ? new C.ui.dialog.overlay(this) : null;
            this.moveToTop(true);
            H = this.element.find(":tabbable");
            if (!H.length) {
                H = this.uiDialogButtonPane.find(":tabbable");
                if (!H.length) {
                    H = F
                }
            }
            H.eq(0).focus();
            this._isOpen = true;
            this._trigger("open");
            return this
        },
        _createButtons: function (G) {
            var F = this, H = false;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (typeof G === "object" && G !== null) {
                C.each(G, function () {
                    return !(H = true)
                })
            }
            if (H) {
                C.each(G, function (J, I) {
                    var K, L;
                    J = pageMessage[J];
                    I = C.isFunction(I) ? {click: I, text: J} : I;
                    I = C.extend({type: "button"}, I);
                    L = I.click;
                    I.click = function () {
                        L.apply(F.element[0], arguments)
                    };
                    K = C("<button></button>", I).appendTo(F.uiButtonSet);
                    if (C.fn.button) {
                        K.button()
                    }
                });
                this.uiDialog.addClass("ui-dialog-buttons");
                this.uiDialogButtonPane.appendTo(this.uiDialog)
            } else {
                this.uiDialog.removeClass("ui-dialog-buttons")
            }
        },
        _makeDraggable: function () {
            var F = this, G = this.options;

            function H(I) {
                return {position: I.position, offset: I.offset}
            }

            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (J, I) {
                    C(this).addClass("ui-dialog-dragging");
                    F._trigger("dragStart", J, H(I))
                },
                drag: function (J, I) {
                    F._trigger("drag", J, H(I))
                },
                stop: function (J, I) {
                    G.position = [I.position.left - F.document.scrollLeft(), I.position.top - F.document.scrollTop()];
                    C(this).removeClass("ui-dialog-dragging");
                    F._trigger("dragStop", J, H(I));
                    C.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (G) {
            G = (G === E ? this.options.resizable : G);
            var F = this, I = this.options, K = this.uiDialog.css("position"),
                H = typeof G === "string" ? G : "n,e,s,w,se,sw,ne,nw";

            function J(L) {
                return {
                    originalPosition: L.originalPosition,
                    originalSize: L.originalSize,
                    position: L.position,
                    size: L.size
                }
            }

            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: I.maxWidth,
                maxHeight: I.maxHeight,
                minWidth: I.minWidth,
                minHeight: this._minHeight(),
                handles: H,
                start: function (M, L) {
                    C(this).addClass("ui-dialog-resizing");
                    F._trigger("resizeStart", M, J(L))
                },
                resize: function (M, L) {
                    F._trigger("resize", M, J(L))
                },
                stop: function (M, L) {
                    C(this).removeClass("ui-dialog-resizing");
                    I.height = C(this).height();
                    I.width = C(this).width();
                    F._trigger("resizeStop", M, J(L));
                    C.ui.dialog.overlay.resize()
                }
            }).css("position", K).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var F = this.options;
            if (F.height === "auto") {
                return F.minHeight
            } else {
                return Math.min(F.minHeight, F.height)
            }
        },
        _position: function (I) {
            var G = [], H = [0, 0], F;
            if (I) {
                if (typeof I === "string" || (typeof I === "object" && "0" in I)) {
                    G = I.split ? I.split(" ") : [I[0], I[1]];
                    if (G.length === 1) {
                        G[1] = G[0]
                    }
                    C.each(["left", "top"], function (J, K) {
                        if (+G[J] === G[J]) {
                            H[J] = G[J];
                            G[J] = K
                        }
                    });
                    I = {
                        my: G[0] + (H[0] < 0 ? H[0] : "+" + H[0]) + " " + G[1] + (H[1] < 0 ? H[1] : "+" + H[1]),
                        at: G.join(" ")
                    }
                }
                I = C.extend({}, C.ui.dialog.prototype.options.position, I)
            } else {
                I = C.ui.dialog.prototype.options.position
            }
            F = this.uiDialog.is(":visible");
            if (!F) {
                this.uiDialog.show()
            }
            this.uiDialog.position(I);
            if (!F) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function (I) {
            var F = this, H = {}, G = false;
            C.each(I, function (K, J) {
                F._setOption(K, J);
                if (K in A) {
                    G = true
                }
                if (K in B) {
                    H[K] = J
                }
            });
            if (G) {
                this._size()
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", H)
            }
        },
        _setOption: function (H, G) {
            var I, F, J = this.uiDialog;
            switch (H) {
                case"buttons":
                    this._createButtons(G);
                    break;
                case"closeText":
                    this.uiDialogTitlebarCloseText.text("" + G);
                    break;
                case"dialogClass":
                    J.removeClass(this.options.dialogClass).addClass(D + G);
                    break;
                case"disabled":
                    if (G) {
                        J.addClass("ui-dialog-disabled")
                    } else {
                        J.removeClass("ui-dialog-disabled")
                    }
                    break;
                case"draggable":
                    I = J.is(":data(draggable)");
                    if (I && !G) {
                        J.draggable("destroy")
                    }
                    if (!I && G) {
                        this._makeDraggable()
                    }
                    break;
                case"position":
                    this._position(G);
                    break;
                case"resizable":
                    F = J.is(":data(resizable)");
                    if (F && !G) {
                        J.resizable("destroy")
                    }
                    if (F && typeof G === "string") {
                        J.resizable("option", "handles", G)
                    }
                    if (!F && G !== false) {
                        this._makeResizable(G)
                    }
                    break;
                case"title":
                    C(".ui-dialog-title", this.uiDialogTitlebar).html("" + (G || "&#160;"));
                    break
            }
            this._super(H, G)
        },
        _size: function () {
            var J, H, G, I = this.options, F = this.uiDialog.is(":visible");
            this.element.show().css({width: "auto", minHeight: 0, height: 0});
            if (I.minWidth > I.width) {
                I.width = I.minWidth
            }
            J = this.uiDialog.css({height: "auto", width: I.width}).outerHeight();
            H = Math.max(0, I.minHeight - J);
            if (I.height === "auto") {
                if (C.support.minHeight) {
                    this.element.css({minHeight: H, height: "auto"})
                } else {
                    this.uiDialog.show();
                    G = this.element.css("height", "auto").height();
                    if (!F) {
                        this.uiDialog.hide()
                    }
                    this.element.height(Math.max(G, H))
                }
            } else {
                this.element.height(Math.max(I.height - J, 0))
            }
            if (this.uiDialog.is(":data(resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }
    });
    C.extend(C.ui.dialog, {
        uuid: 0, maxZ: 0, getTitleId: function (F) {
            var G = F.attr("id");
            if (!G) {
                this.uuid += 1;
                G = this.uuid
            }
            return "ui-dialog-title-" + G
        }, overlay: function (F) {
            this.$el = C.ui.dialog.overlay.create(F)
        }
    });
    C.extend(C.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: C.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (F) {
            return F + ".dialog-overlay"
        }).join(" "),
        create: function (G) {
            if (this.instances.length === 0) {
                setTimeout(function () {
                    if (C.ui.dialog.overlay.instances.length) {
                        C(document).bind(C.ui.dialog.overlay.events, function (H) {
                            if (C(H.target).zIndex() < C.ui.dialog.overlay.maxZ) {
                                return false
                            }
                        })
                    }
                }, 1);
                C(window).bind("resize.dialog-overlay", C.ui.dialog.overlay.resize)
            }
            var F = (this.oldInstances.pop() || C("<div>").addClass("ui-widget-overlay"));
            C(document).bind("keydown.dialog-overlay", function (H) {
                var I = C.ui.dialog.overlay.instances;
                if (I.length !== 0 && I[I.length - 1] === F && G.options.closeOnEscape && !H.isDefaultPrevented() && H.keyCode && H.keyCode === C.ui.keyCode.ESCAPE) {
                    G.close(H);
                    H.preventDefault()
                }
            });
            F.appendTo(document.body).css({width: this.width(), height: this.height()});
            if (C.fn.bgiframe) {
                F.bgiframe()
            }
            this.instances.push(F);
            return F
        },
        destroy: function (F) {
            var G = C.inArray(F, this.instances), H = 0;
            if (G !== -1) {
                this.oldInstances.push(this.instances.splice(G, 1)[0])
            }
            if (this.instances.length === 0) {
                C([document, window]).unbind(".dialog-overlay")
            }
            F.height(0).width(0).remove();
            C.each(this.instances, function () {
                H = Math.max(H, this.css("z-index"))
            });
            this.maxZ = H
        },
        height: function () {
            var F, G;
            if (C.ui.ie) {
                F = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                G = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                if (F < G) {
                    return C(window).height() + "px"
                } else {
                    return F + "px"
                }
            } else {
                return C(document).height() + "px"
            }
        },
        width: function () {
            var G, F;
            if (C.ui.ie) {
                G = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                F = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                if (G < F) {
                    return C(window).width() + "px"
                } else {
                    return G + "px"
                }
            } else {
                return C(document).width() + "px"
            }
        },
        resize: function () {
            var F = C([]);
            C.each(C.ui.dialog.overlay.instances, function () {
                F = F.add(this)
            });
            F.css({width: 0, height: 0}).css({width: C.ui.dialog.overlay.width(), height: C.ui.dialog.overlay.height()})
        }
    });
    C.extend(C.ui.dialog.overlay.prototype, {
        destroy: function () {
            C.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery));