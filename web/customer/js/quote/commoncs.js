var timer;
var kvNav = function () {
    var B = 0;
    $("#kvNav .trigger").each(function (D) {
        $(this).click(function () {
            B = D;
            $("#kvContent .kv_C_a").eq(D).fadeIn("slow").siblings(".kv_C_a").hide();
            $(this).siblings(".trigger").removeClass("imgSelected").end().addClass("imgSelected");
            return false
        })
    });
    var A = $("#kvNav .trigger").length;
    var C = function (D) {
        if (D) {
            if (B == 0) {
                todo = A - 1
            } else {
                todo = (B - 1) % A
            }
        } else {
            todo = (B + 1) % A
        }
        $("#kvNav .trigger").eq(todo).click()
    };
    timer = setInterval(function () {
        todo = (B + 1) % A;
        $("#kvNav .trigger").eq(todo).click()
    }, 5000);
    $("#kvNav a").hover(function () {
        clearInterval(timer)
    }, function () {
        timer = setInterval(function () {
            todo = (B + 1) % A;
            $("#kvNav .trigger").eq(todo).click()
        }, 5000)
    });
    $(".menu_cn ul li a").click(function () {
        $(".detailDiv").hide();
        $(".foodContent ul").eq(0).show();
        $(".kv").hide();
        $(".foodlist").show();
        $(".menu_cn ul li a").removeClass("on");
        $(this).addClass("on");
        index = $(".menu_cn ul li a").index(this);
        $(".foodContent ul").eq(index).show().siblings().hide()
    });
    $(".linkKv a").click(function () {
        $(".detailDiv").hide();
        $(".foodlist").hide();
        $(".kv").show()
    });
    $(".close").click(function () {
        $(".detailDiv").hide()
    })
};
var cleanBanner = function () {
    clearInterval(timer)
};
function getEId(A) {
    return document.getElementById(A)
}
function getLeft(B) {
    var A = B.offsetLeft;
    if (B.offsetParent != null) {
        A += getLeft(B.offsetParent)
    }
    return A
}
function getTop(B) {
    var A = B.offsetTop;
    if (B.offsetParent != null) {
        A += getTop(B.offsetParent)
    }
    return A
}
var colseDivP = function () {
    $(".detailDiv").hide()
};
function showDivP(E, C) {
    var D = getLeft(E) - document.documentElement.scrollLeft;
    var F = getTop(E) - document.documentElement.scrollTop;
    var B = document.getElementById(C);
    var A = window.navigator.userAgent;
    $("div[id*='cn_detail_']").each(function (G, H) {
        H.style.display = "none"
    });
    if (A.indexOf("Chrome") >= 0) {
        B.style.top = getTop(E) + 30 + "px";
        B.style.left = getLeft(E) - 155 + "px";
        B.style.display = "block"
    } else {
        if (A.split(";")[1].toLowerCase().indexOf("msie 7.0") != "-1") {
            B.style.top = getTop(E) + 20 + "px";
            B.style.left = getLeft(E) - 155 + "px";
            B.style.display = "block"
        } else {
            if (A.split(";")[1].toLowerCase().indexOf("msie 6.0") != "-1") {
                B.style.top = getTop(E) + 20 + "px";
                B.style.left = getLeft(E) - 155 + "px";
                B.style.display = "block"
            } else {
                B.style.top = getTop(E) - 120 + "px";
                B.style.left = getLeft(E) - 155 + "px";
                B.style.display = "block"
            }
        }
    }
}
function setFunctionPostion() {
    var F = document.getElementById("right_info");
    var G = document.getElementById("menu_cn");
    var B = document.documentElement.scrollTop;
    var C = document.body.scrollHeight;
    var D = C - 60;
    if (F) {
        var E = document.getElementById("right_info").offsetHeight;
        if (B > 96) {
            if ((B + E) < D) {
                F.style.marginTop = B - 100 + "px"
            }
        } else {
            F.style.marginTop = 0 + "px"
        }
    }
    if (G) {
        var A = document.getElementById("menu_cn").offsetHeight;
        if (B > 96) {
            if ((B + A) < D) {
                G.style.marginTop = B - 100 + "px"
            }
        } else {
            G.style.marginTop = 0 + "px"
        }
    }
}
var scroll_kfc = function () {
    window.onscroll = setFunctionPostion
};