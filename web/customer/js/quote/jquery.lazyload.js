(function (A) {
    A.fn.lazyload = function (D) {
        var B = {threshold: 0, failurelimit: 0, event: "scroll", effect: "show", container: window};
        if (D) {
            A.extend(B, D)
        }
        var C = this;
        if ("scroll" == B.event) {
            A(B.container).bind("scroll", function (G) {
                var E = 0;
                C.each(function () {
                    if (A.abovethetop(this, B) || A.leftofbegin(this, B)) {
                    } else {
                        if (!A.belowthefold(this, B) && !A.rightoffold(this, B)) {
                            A(this).trigger("appear")
                        } else {
                            if (E++ > B.failurelimit) {
                                return false
                            }
                        }
                    }
                });
                var F = A.grep(C, function (H) {
                    return !H.loaded
                });
                C = A(F)
            })
        }
        this.each(function () {
            var E = this;
            A(E).one("appear", function () {
                if (!this.loaded) {
                    A("<img />").bind("load", function () {
                        A(E).hide().attr("src", A(E).attr("original"))[B.effect](B.effectspeed);
                        E.loaded = true
                    }).attr("src", A(E).attr("original"))
                }
            });
            if ("scroll" != B.event) {
                A(E).bind(B.event, function (F) {
                    if (!E.loaded) {
                        A(E).trigger("appear")
                    }
                })
            }
        });
        A(B.container).trigger(B.event);
        return this
    };
    A.belowthefold = function (D, C) {
        if (C.container === undefined || C.container === window) {
            var B = A(window).height() + A(window).scrollTop()
        } else {
            var B = A(C.container).offset().top + A(C.container).height()
        }
        return B <= A(D).offset().top - C.threshold
    };
    A.rightoffold = function (D, C) {
        if (C.container === undefined || C.container === window) {
            var B = A(window).width() + A(window).scrollLeft()
        } else {
            var B = A(C.container).offset().left + A(C.container).width()
        }
        return B <= A(D).offset().left - C.threshold
    };
    A.abovethetop = function (D, C) {
        if (C.container === undefined || C.container === window) {
            var B = A(window).scrollTop()
        } else {
            var B = A(C.container).offset().top
        }
        return B >= A(D).offset().top + C.threshold + A(D).height()
    };
    A.leftofbegin = function (D, C) {
        if (C.container === undefined || C.container === window) {
            var B = A(window).scrollLeft()
        } else {
            var B = A(C.container).offset().left
        }
        return B >= A(D).offset().left + C.threshold + A(D).width()
    };
    A.extend(A.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    })
})(jQuery);