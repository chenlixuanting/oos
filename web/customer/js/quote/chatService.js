var chatService = function () {
    function D() {
        if ($.isEnglish()) {
            return
        }
        var F = "https:" == document.location.protocol ? true : false;
        var G = requestContextPath;
        if (F) {
            G = requestContextPathHttps
        }
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {},
            async: false,
            url: G + "/checkChatOnline.action",
            beforeSend: function (H) {
            },
            success: function (J, H) {
                var I = $(".e_main");
                if (I.length != 0) {
                    E(J, I);
                    C()
                } else {
                    if (A()) {
                        E(J);
                        C()
                    }
                }
            },
            complete: function (I, H) {
            },
            error: function () {
            }
        })
    }

    function A() {
        var G = window.location.href;
        var F = ["law.jsp", "policy.jsp", "contactus.jsp", "user.jsp"];
        for (var H = 0, I = F.length; H < I; H++) {
            if (G.indexOf(F[H]) > 0) {
                return false
            }
        }
        return true
    }

    function C() {
        $("#chatOn_support").live("click", function () {
            var F = "width=700,height=500,top=" + (window.screen.height - 570) / 2 + ",left=" + (window.screen.width - 700) / 2 + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no";
            window.open("http://chat.looyuoms.com/chat/chat/p.do?c=20001877&f=10064739&g=10064674", "newWindow", F)
        });
        $("#chatOn_close").live("click", function () {
            $("#chatContent").css("display", "none")
        });
        $("#chatOff_support").live("mouseover", function () {
            var F = $(".e_main");
            if (F.length > 0) {
                $("#chatOfflineTip").css("margin-top", "-115px");
                $("#chatOfflineTip").css("left", "-150px");
                $("#chatOfflineTip").css("z-index", "1")
            } else {
                $("#chatOfflineTip").css("margin-left", "-145px");
                $("#chatOfflineTip").css("margin-top", "-115px")
            }
            $("#chatOfflineTip").css("position", "absolute");
            $("#chatOfflineTip").css("display", "block")
        }).live("mouseout", function () {
            $("#chatOfflineTip").css("display", "none")
        });
        $("#chatOff_close").live("click", function () {
            $("#chatContent").css("display", "none")
        })
    }

    function E(G, F) {
        if (G.resultCode == "1") {
            $("#chatOnline").css("display", "block");
            $("#chatOffline").css("display", "none");
            B(F)
        } else {
            if (G.resultCode == "2") {
                $("#chatOnline").css("display", "none");
                $("#chatOffline").css("display", "block");
                B(F)
            }
        }
    }

    function B(H) {
        var G = $(window).width() - 1024 - 30;
        if (G < 0) {
            G = 30
        } else {
            G = 0
        }
        var F = $(H).attr("class");
        if (F == "e_main") {
            $("#chatContent").css("margin-top", "150px");
            $("#chatContent").css("left", "198px")
        } else {
            if ($.browser.msie && $.browser.version == 6) {
                $("#chatContent").css("top", -5)
            } else {
                $("#chatContent").css("top", -5)
            }
        }
    }

    return {
        init: function () {
            D()
        }, fixPosition: function (F) {
            B(F)
        }
    }
}();
$(function () {
    chatService.init()
});
$(window).resize(function () {
    var A = $(".e_main");
    if (A.length > 0) {
        chatService.fixPosition(A)
    } else {
        chatService.fixPosition()
    }
}).scroll(function () {
    var A = $(".e_main");
    if (A.length == 0) {
        chatService.fixPosition()
    }
});