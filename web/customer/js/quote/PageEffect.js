var MWJ_float = function () {
    var B = $(window).width(), A = $(window).height();
    $(window).resize(function () {
        B = $(window).width(), A = $(window).height()
    });
    $(window).scroll(function () {
        var I = 88;
        var H = $(document).height() - 610;
        var C = $(document).height() - 567;
        var E = $(this).scrollTop();
        var G = $(".s_lm");
        var K = $(".s_nt");
        var J = $(".s_rm_login");
        var F = $(".s_rm_cart");
        if (E > I && B > 1000 & A > 550) {
            if (E < H) {
                G.css("position", "fixed").css("top", "0");
                J.css("position", "fixed").css("top", "0");
                F.css("position", "fixed").css("top", "0")
            } else {
                var D = H - E;
                G.css("position", "fixed").css("top", D);
                F.css("position", "fixed").css("top", D - 5);
                J.css("position", "fixed").css("top", D)
            }
        } else {
            G.css("position", "absolute").css("top", "0");
            K.css("position", "absolute").css("top", "0");
            J.css("position", "absolute").css("top", "0");
            F.css("position", "absolute").css("top", "0")
        }
    })
};
var t;
var initSilder = function () {
    var A = document.getElementById("rolling");
    if (null != A) {
        var B = true;
        A.innerHTML += A.innerHTML;
        A.onmouseover = function () {
            B = false
        };
        A.onmouseout = function () {
            B = true
        };
        (function () {
            var C = A.scrollTop % 29 == 0 && !B;
            if (!C) {
                A.scrollTop == parseInt(A.scrollHeight / 2) ? A.scrollTop = 0 : A.scrollTop++
            }
            t = setTimeout(arguments.callee, A.scrollTop % 29 ? 25 : 1600)
        })()
    }
};
var cleanSilder = function () {
    clearTimeout(t)
};
var vaildTime = function (A, J) {
    var L = new Date();
    var K = L.getHours() * 100;
    var F = L.getMinutes();
    var G = parseInt(K) + parseInt(F);
    var B = A.split("-");
    var C = 0;
    var H = 0;
    for (var E = 0; E < B.length; E++) {
        var D = B[E].split(":");
        for (var I = 0; I < D.length; I++) {
            if (E == 0) {
                if (I == 0) {
                    C += parseInt(D[I]) * 100
                } else {
                    C += parseInt(D[I])
                }
            } else {
                if (I == 0) {
                    H += parseInt(D[I]) * 100
                } else {
                    H += parseInt(D[I])
                }
            }
        }
    }
    if (J == "D") {
        if (C <= G && G <= 2359) {
            return true
        } else {
            if (0 <= G && G <= H) {
                return true
            }
        }
    } else {
        if (C <= G && G <= H) {
            return true
        }
    }
    return false
};
var MWJ_initLeftMenu = function () {
    var B = $("#isLogin").val();
    if (B == "true") {
        $("#nav").find($("ul[id^='ChildMenu']")).not(function (F) {
            var C = $(this);
            var G = C.prev().children("a").attr("id");
            var E = C.attr("id");
            var D = C.html();
            if (C.children("li").length) {
                DoMenu(E, G)
            }
        })
    } else {
        var A = $("#iClassType").val();
        if (A && A != "I") {
            $("#nav").find($("ul[id^='ChildMenu']")).not(function (E) {
                var C = $(this);
                var F = C.prev().children("a").attr("id");
                var D = C.attr("id");
                var G = C.attr("classType");
                if (A == G) {
                    DoMenu(D, F)
                }
            })
        } else {
            $("#nav").find($("ul[id^='ChildMenu']")).not(function (D) {
                var E = $(this);
                var C = E.attr("time");
                C = C.replace(/[\u2E80-\u9FFF]+/, "");
                var I = E.attr("classType");
                var F = vaildTime(C, I);
                var G = E.prev().children("a").attr("id");
                var H = E.attr("id");
                var J = E.html();
                if (F) {
                    DoMenu(H, G)
                }
            })
        }
        $("#nav").find("ul li a").click(function (D) {
            var C = $(this).attr("pid");
            if (isMobile()) {
                D.preventDefault();
                window.location.href = "https://m.4008823823.com.cn/kfcmwos/indexMenu.htm?classId=" + C
            }
        })
    }
};
function isMobile() {
    return !!navigator.userAgent.match(/iphone|android/i)
}
function DoMenu(A, E) {
    var H = $("#" + A).find("li");
    var B = new Array();
    var I = "";
    var D = $("#isLogin").val();
    if (!H[0]) {
        if (D == "false") {
            return
        }
        if (A == "ChildMenu2") {
            B[0] = property.breakfast
        } else {
            if (A == "ChildMenu3") {
                B[1] = property.meal
            } else {
                if (A == "ChildMenu4") {
                    B[2] = property.snack
                }
            }
        }
        if (!$("#ChildMenu2").find("li")[0] && A != "ChildMenu2") {
            B[0] = property.breakfast
        } else {
            if (!$("#ChildMenu3").find("li")[0] && A != "ChildMenu3") {
                B[1] = property.meal
            } else {
                if (!$("#ChildMenu4").find("li")[0] && A != "ChildMenu4") {
                    B[2] = property.snack
                }
            }
        }
        var G = true;
        for (var C = 0; C < B.length; C++) {
            if (B[C] != null) {
                if (G) {
                    I = B[C] + pageMessage.or;
                    G = false
                } else {
                    I += B[C]
                }
            }
        }
        base.yumAlert(property.outOfservice.format([I]));
        return
    }
    var F = $("#" + E);
    if (F.attr("class") == "plus_btn") {
        $("[id^=ChildMenu]").css("display", "none");
        $("[id^=child]").removeClass("minus_sign").addClass("plus_btn");
        $("[id=" + A + "]").css("display", "block");
        $("[id=" + E + "]").removeClass("plus_btn").addClass("minus_sign")
    } else {
        $("[id^=ChildMenu]").css("display", "none");
        $("[id^=child]").removeClass("minus_sign").addClass("plus_btn");
        $("[id=" + A + "]").css("display", "none");
        $("[id=" + E + "]").removeClass("minus_sign").addClass("plus_btn")
    }
}
var pageEffect = {
    init: function () {
        if (typeof document.body.style.maxHeight !== "undefined") {
            MWJ_float()
        }
        initSilder();
        MWJ_initLeftMenu()
    }
};