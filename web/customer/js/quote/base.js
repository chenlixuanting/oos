var event_id = null;
var captchaObject = null;
var showGeeCaptcha = false;
var SMSflag = false;
var sendSmsCodeEvent_id = null;
var base = function () {
    function Z() {
        $("a").bind("focus", function () {
            if (this.blur) {
                this.blur()
            }
        });
        if ($("#isLogin").val() == "true") {
            $(".w2").click(function () {
                if ($("#page_flag").val() == "suc") {
                    base.setAction("returnCustomer.action");
                    return
                } else {
                    if (i == "customerCenter") {
                        KFCIOS_ajax.validStore(function (j) {
                            if (j.code == serviceCode.SUC_CODE) {
                                base.yumConfirm(property.giveUpOrder, function () {
                                    U(function () {
                                        base.setActionHttps("orderLogin.action")
                                    })
                                })
                            } else {
                                base.setAction("returnCustomer.action")
                            }
                        });
                        return
                    }
                }
                base.yumConfirm(property.giveUpOrder, function () {
                    U(function () {
                        base.setActionHttps("orderLogin.action")
                    })
                }, null, "true")
            });
            $(".w3").click(function () {
                if ($("#page_flag").val() == "validateUser" || $("#page_flag").val() == "pointRegister") {
                    base.yumConfirm(property.giveUpOrder, function () {
                        U(function () {
                            base.setActionHttps("orderLogin.action")
                        })
                    }, null, "true");
                    return
                } else {
                    if ($("#page_flag").val() == "suc" || $("#page_flag").val() == "customer" || $("#page_flag").val() == "returnCustomer") {
                        base.setAction("customerCenter.action");
                        return
                    } else {
                        if ($("#page_flag").val() == "home" || $("#page_flag").val() == "cart" || $("#page_flag").val() == "newPay") {
                            KFCIOS_ajax.validNewCustomer(function (j) {
                                if (j.code == serviceCode.NEW_CUSTOMER) {
                                    base.yumAlert(property.unSaveCustomerInfo);
                                    return
                                } else {
                                    base.setAction("customerCenter.action");
                                    return
                                }
                            })
                        } else {
                            base.setAction("customerCenter.action");
                            return
                        }
                    }
                }
            })
        } else {
            if ($("#loginFlag").val() == "true") {
                $(".w2").click(function () {
                    base.yumConfirm(property.giveUpOrder, function () {
                        U(function () {
                            base.setActionHttps("orderLogin.action")
                        })
                    })
                });
                $(".w3").click(function () {
                    if ($("#page_flag").val() == "suc") {
                        base.setAction("check.action");
                        return
                    }
                    base.yumConfirm(property.giveUpOrder, function () {
                        U(function () {
                            base.setActionHttps("checkLogin.action")
                        })
                    })
                })
            } else {
                $(".w2").click(function () {
                    if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
                        base.yumAlert(property.maintenanceRemind);
                        return
                    }
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "logon", "wt.msg", "1")
                    }
                    window.location.href = requestContextPathHttps + "/orderLogin.action";
                    return false
                });
                $(".w3").click(function () {
                    if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
                        base.yumAlert(property.maintenanceRemind);
                        return
                    }
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "SY", "wt.msg", "QUERY")
                    }
                    window.location.href = requestContextPathHttps + "/customerCenter.action"
                })
            }
        }
        if ($("#loginFlag").val() == "true") {
            var i = $("#page_flag").val();
            $(".w1").click(function () {
                if (i == "customer" || i == "suc" || i == "returnCustomer" || i == "pointRegister" || i == "validateUser") {
                    base.yumConfirm(property.giveUpLogin, function () {
                        U(function () {
                            window.location.href = httpHtmlPathHttps + "/index.html"
                        })
                    })
                } else {
                    if (i == "home") {
                        $("#topFlag").val("w1");
                        KFC_Comon.initContent(1)
                    } else {
                        if (i == "customerCenter") {
                            KFCIOS_ajax.validStore(function (j) {
                                if (j.code == serviceCode.SUC_CODE) {
                                    base.setAction("continueShopping.action");
                                    return
                                } else {
                                    base.setAction("returnCustomer.action");
                                    return
                                }
                            })
                        } else {
                            $("#topFlag").val("w1");
                            base.setAction("continueShopping.action")
                        }
                    }
                }
            });
            $(".w4").click(function () {
                if (i == "customer" || i == "suc" || i == "returnCustomer" || i == "validateUser" || $("#page_flag").val() == "pointRegister") {
                    base.yumConfirm(property.giveUpLogin, function () {
                        U(function () {
                            window.location.href = appHtmlPath + "/appIndex.html"
                        })
                    })
                } else {
                    $("#topFlag").val("w4");
                    base.setAction("appIndex.action")
                }
            });
            $(".w5").click(function () {
            });
            $(".bg1").click(function () {
            });
            $(".bg2").click(function () {
            });
            $(".h_1").click(function () {
                window.open(requestContextPath + "/jsp/help/help_new.html")
            });
            $(".h_2").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#10")
            });
            $(".h_3").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#3")
            });
            $(".h_4").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#2")
            });
            $(".logo").click(function () {
                $(".w1").click()
            })
        } else {
            $(".w1").click(function () {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "SY", "wt.msg", "index")
                }
                window.location.href = httpHtmlPathHttps + "/index.html"
            });
            $(".logo").click(function () {
                window.location.href = httpHtmlPathHttps + "/index.html"
            });
            $(".w4").click(function () {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "SY", "wt.msg", "APP")
                }
                window.location.href = appHtmlPath + "/appIndex.html"
            });
            $(".w5").click(function () {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "SY", "wt.msg", "HELP")
                }
            });
            $(".bg1").click(function () {
            });
            $(".bg2").click(function () {
            });
            $(".h_1").click(function () {
                window.open(requestContextPath + "/jsp/help/help_new.html")
            });
            $(".h_2").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#10")
            });
            $(".h_3").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#3")
            });
            $(".h_4").click(function () {
                window.open(requestContextPath + "/jsp/help/help_qa.html#2")
            })
        }
        $(".favbtn").click(function () {
            var j = "http://www.4008823823.com.cn";
            var k = pageMessage.base_title;
            X(j, k)
        });
        $(".loginExit").live("click", function () {
            base.yumConfirm(property.exitOrderToIndex, function () {
                U(function () {
                    window.location.href = httpHtmlPathHttps + "/index.html"
                })
            })
        });
        $(".login").live("click", function () {
            window.location.href = requestContextPathHttps + "/orderLogin.action"
        });
        function h() {
            if ($("#refreshUrl").length > 0) {
                return requestContextPath + $("#refreshUrl").val()
            } else {
                var j = window.location.href;
                if (window.location.href.indexOf("kfcios") < 0) {
                    j = requestContextPath + "/Html/index.html"
                } else {
                    if (window.location.href.indexOf(".html") < 0 && window.location.href.indexOf(".html") < 0 && window.location.href.indexOf(".action") < 0) {
                        j = j + "Html/index.html"
                    }
                }
                var k = window.location.href.indexOf("#");
                if (k == -1) {
                    return j
                }
                return j.substr(0, k)
            }
        }

        $("#change_cn").click(function (j) {
            j.preventDefault();
            if (window.location.href.indexOf("/en") > 0) {
                window.location.href = h().replace(/\/en\//, "/")
            }
            if (requestContextPath.indexOf("/en") > 0) {
                requestContextPath = requestContextPath.replace(/\/en\//, "/")
            }
            if (httpHtmlPath.indexOf("/en") > 0) {
                httpHtmlPath = httpHtmlPath.replace(/\/en\//, "/")
            }
            if (requestContextPathHttps.indexOf("/en") > 0) {
                requestContextPathHttps = requestContextPathHttps.replace(/\/en\//, "/")
            }
            if (appHtmlPath.indexOf("/en") > 0) {
                appHtmlPath = appHtmlPath.replace(/\/en\//, "/")
            }
            if (httpHtmlPathHttps.indexOf("/en") > 0) {
                httpHtmlPathHttps = httpHtmlPathHttps.replace(/\/en\//, "/")
            }
        });
        $("#change_en").click(function (j) {
            j.preventDefault();
            if (window.location.href.indexOf("/en") < 0) {
                window.location.href = h().replace(/\/(?=\w+.(action|htm|html))/, "/en/")
            }
            if (requestContextPath.indexOf("/en") < 0) {
                requestContextPath = requestContextPath + "/en"
            }
            if (httpHtmlPath.indexOf("/en") < 0) {
                httpHtmlPath = httpHtmlPath + "/en"
            }
            if (requestContextPathHttps.indexOf("/en") < 0) {
                requestContextPathHttps = requestContextPathHttps + "/en"
            }
            if (appHtmlPath.indexOf("/en") < 0) {
                appHtmlPath = appHtmlPath + "/en"
            }
            if (httpHtmlPathHttps.indexOf("/en") < 0) {
                httpHtmlPathHttps = httpHtmlPathHttps + "/en"
            }
        });
        base.initUrl()
    }

    function C() {
        if (requestContextPath.indexOf("/en/") < 0) {
            if (window.location.href.indexOf("/en/") > 0) {
                requestContextPath = requestContextPath + "/en";
                requestContextPathHttps = requestContextPathHttps + "/en";
                appHtmlPath = appHtmlPath + "/en";
                httpHtmlPathHttps = httpHtmlPathHttps + "/en"
            }
        } else {
            if (window.location.href.indexOf("/en/") < 0) {
                requestContextPath = requestContextPath.replace(/\/en\//, "/");
                requestContextPathHttps = requestContextPathHttps.replace(/\/en\//, "/");
                appHtmlPath = appHtmlPath.replace(/\/en\//, "/");
                httpHtmlPathHttps = httpHtmlPathHttps.replace(/\/en\//, "/")
            }
        }
        if (httpHtmlPath.indexOf("/en/") < 0) {
            if (window.location.href.indexOf("/en/") > 0) {
                httpHtmlPath = httpHtmlPath + "/en"
            }
        } else {
            if (window.location.href.indexOf("/en/") < 0) {
                httpHtmlPath = httpHtmlPath.replace(/\/en\//, "/")
            }
        }
    }

    function U(h) {
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {},
            url: requestContextPath + "/loginExit.action",
            beforeSend: function (i) {
            },
            success: function (j, i) {
                if (j.code == serviceCode.SUC_CODE && h != undefined && h != null) {
                    h.call()
                }
            },
            complete: function (j, i) {
            },
            error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }

    function X(h, j) {
        try {
            window.external.AddToFavoritesBar(h, j)
        } catch (i) {
            try {
                window.external.addFavorite(h, j)
            } catch (i) {
                try {
                    window.sidebar.addPanel(j, h, j)
                } catch (i) {
                    base.yumAlert(property.favoriteBtn)
                }
            }
        }
    }

    function b(h) {
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {},
            url: requestContextPath + "/inOperating.action",
            beforeSend: function (i) {
            },
            success: function (j, i) {
                if (j.code == serviceCode.SUC_CODE) {
                    if (j.message == "true") {
                        h.call()
                    } else {
                        base.yumAlert(property.notInOper)
                    }
                }
            },
            complete: function (j, i) {
            },
            error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }

    function c() {
        $("#brandSelect").live("change", function () {
            window.location.href = $(this).val()
        })
    }

    function H(h, j, i, k) {
        h = requestContextPath + "/" + h;
        j = j || "post";
        i = "#" + (i || "mainForm");
        k = k || "_self";
        $(i).attr("action", h).attr("method", j).attr("target", k).submit()
    }

    function D(h, j, i, k) {
        h = requestContextPathHttps + "/" + h;
        j = j || "post";
        i = "#" + (i || "mainForm");
        k = k || "_self";
        window.setTimeout(function () {
            $(i).attr("action", h).attr("method", j).attr("target", k).submit()
        }, 0)
    }

    function W(h) {
        $("#dialog-message-alert span").html(h);
        $("#dialog-message-alert").dialog({
            resizable: false,
            minHeight: "96px",
            width: "400px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close")
                }
            }
        })
    }

    function e(h) {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", h)
        }
        W(h)
    }

    function F(i, h) {
        $("#dialog-message-alert span").html(i);
        $("#dialog-message-alert").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close");
                    h && h.call()
                }
            }
        })
    }

    function f(i, h) {
        $("#dialog-message-alert span").html('<p style="font-size:18px;font-weight:600;">' + i + "</p>");
        $("#dialog-message-alert").dialog({
            title: '<div style="background-color:#880000;color:#FFF;width:317px;margin:-9px 0px 6px -8px;height: 28px;">' + pageMessage.customer_remind1 + "</div>",
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_backShopping: function () {
                    $(this).dialog("close");
                    h && h.call()
                }
            }
        })
    }

    function Q(i, h) {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", i)
        }
        base.yumAlert(i, h)
    }

    function I(k, i, j, h) {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", i, "wt.msg", j)
        }
        base.yumAlert(k, h)
    }

    function R(i, h) {
        $("#dialog-message-alert span").html(i);
        $("#dialog-message-alert").dialog({
            resizable: false,
            minHeight: "96px",
            width: "400px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close");
                    h.call()
                }
            }
        })
    }

    function O(k, i, m) {
        $("#dialog-bind-phone span").html(k);
        $("#dialog-bind-phone").dialog({
            resizable: false,
            minHeight: "96px",
            width: "370px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    i.call($(this))
                }
            },
            open: function () {
                $(".ui-dialog").focus();
                $(".ui-dialog-titlebar-close", $(this).parent()).click(function () {
                    if (m) {
                        m.call()
                    }
                })
            }
        });
        $('[role="dialog"]').css("left", ($(window).width() - $('[role="dialog"]').width()) / 2 + "px");
        var j = parseInt($(window).height() / 2 - 158.5);
        var l = parseInt($(window).width() / 2 - 68.5);
        if ($.isPlainObject("dialog-message-confirm")) {
            $("dialog-message-confirm").parent('[role="dialog"]').css({"top": j + "px", "left": l + "px"})
        } else {
            $("#dialog-message-confirm").parent('[role="dialog"]').css({"top": j + "px", "left": l + "px"})
        }
    }

    function g(i, h) {
        $("#dialog-message-alert span").html(i);
        $("#dialog-message-alert").dialog({
            resizable: false,
            title: "Information",
            minHeight: "96px",
            width: "600px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                    h.call()
                }
            }
        })
    }

    function A(i, h) {
        $("#dialog-message-alert-back span").html(i);
        $("#dialog-message-alert-back").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: false,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close");
                    h && h.call()
                }
            }
        })
    }

    function B(i, h) {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", i)
        }
        base.yumAlertBack(i, h)
    }

    function a(k, i, j, n) {
        $("#dialog-message-confirm span").html(k);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close");
                    if (i) {
                        i.call()
                    }
                }, base_cancle: function () {
                    $(this).dialog("close");
                    if (j) {
                        j.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        });
        if (!n) {
            $('[role="dialog"]').css("left", ($(window).width() - $('[role="dialog"]').width()) / 2 + "px");
            var m = parseInt($(window).height() / 2 - 158.5);
            var l = parseInt($(window).width() / 2 - 68.5);
            if ($.isPlainObject("dialog-message-confirm")) {
                $("dialog-message-confirm").parent('[role="dialog"]').css({"top": m + "px", "left": l + "px"})
            } else {
                $("#dialog-message-confirm").parent('[role="dialog"]').css({"top": m + "px", "left": l + "px"})
            }
            var r = navigator.appVersion;
            var q = r.search(/MSIE 6/i) != -1;
            var p = r.search(/MSIE 7/i) != -1;
            if (q || p) {
                $("#dialog-message-confirm").parent('[role="dialog"]').css({"top": "0px", "left": "0px"})
            }
        }
    }

    function M(j, k, l) {
        $("#dialog-message-confirm span").html(j);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                ApplyVaild: function () {
                    $(this).dialog("close");
                    if (k) {
                        k.call()
                    }
                }, returnUpdate: function () {
                    $(this).dialog("close");
                    if (l) {
                        l.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray");
                $(".ui-dialog-titlebar-close", $(this).parent()).click(function () {
                    if (l) {
                        l.call()
                    }
                })
            }
        });
        $('[role="dialog"]').css("left", ($(window).width() - $('[role="dialog"]').width()) / 2 + "px");
        var i = parseInt($(window).height() / 2 - 158.5);
        var m = parseInt($(window).width() / 2 - 68.5);
        if ($.isPlainObject("dialog-message-confirm")) {
            $("dialog-message-confirm").parent('[role="dialog"]').css({"top": i + "px", "left": m + "px"})
        } else {
            $("#dialog-message-confirm").parent('[role="dialog"]').css({"top": i + "px", "left": m + "px"})
        }
    }

    function V(h, i, j) {
        $("#dialog-message-confirm span").html(h);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            width: "400px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirmDonate: function () {
                    $(this).dialog("close");
                    if (i) {
                        i.call()
                    }
                }, base_quitDonate: function () {
                    $(this).dialog("close");
                    if (j) {
                        j.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        })
    }

    function L(h, i, j) {
        $("#dialog-message-confirm span").html(h);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_backCunrrent: function () {
                    $(this).dialog("close");
                    if (j) {
                        j.call()
                    }
                }, base_nextStep: function () {
                    $(this).dialog("close");
                    if (i) {
                        i.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        })
    }

    function d(h, i, j) {
        $("#dialog-message-confirm span").html(h);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_addOrder: function () {
                    $(this).dialog("close");
                    if (i) {
                        i.call()
                    }
                }, base_noNeed: function () {
                    $(this).dialog("close");
                    if (j) {
                        j.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        })
    }

    function Y(i, h) {
        $("#dialog-message-alert-back span").html(i);
        $("#dialog-message-alert-back").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: false,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_confirm: function () {
                    $(this).dialog("close");
                    h.call()
                }
            },
            open: function () {
                $(".ui-icon-closethick").hide()
            }
        })
    }

    function K(h, i, j) {
        $("#dialog-message-confirm span").html(h);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                base_continueOrder: function () {
                    $(this).dialog("close");
                    if (i) {
                        i.call()
                    }
                }, base_loginLater: function () {
                    $(this).dialog("close");
                    if (j) {
                        j.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        })
    }

    function E(h) {
        $.ajax({
            dataType: "json",
            type: "GET",
            data: {lang: h},
            url: requestContextPath + "/lang.action",
            beforeSend: function (i) {
            },
            success: function (j, i) {
                if (j.code == 1) {
                    window.location.href = window.location.href
                }
            },
            complete: function (j, i) {
            },
            error: function () {
            }
        })
    }

    function N() {
        $("#dialog-loading").dialog({resizable: false, minHeight: "96px", title: "", modal: true})
    }

    function T() {
        $("#dialog-loading").dialog("close")
    }

    function P() {
        var h = this;
        window.autonavi_yum = window.autonavi_yum || {};
        this.doYumSearch = function (j, k) {
            KFC_POST("/searchAddressList.action", {cityCode: j.citycode, streetName: k}, function (l) {
                if (!l || !l[0]) {
                    if (h.retainNewCustomer) {
                        h.retainNewCustomer(j.citycode, k, "");
                        return
                    }
                    base.yumAlert(property.sorryAddressNotInDelivery);
                    return
                }
                dataList = l
            })
        };
        this.filterYumData = function (j) {
            if (!dataList || !dataList[0]) {
                if (typeof j == "function") {
                    j();
                    return
                }
                base.yumAlert(property.sorryAddressNotInDelivery);
                return
            }
            return dataList[0]
        };
        this.doSearch = function (j, k) {
            $.ajax({
                dataType: "jsonp",
                type: "GET",
                data: {
                    sid: 10011,
                    cityName: j,
                    address: k,
                    size: 30,
                    brands: autonavi_yum.brands,
                    encode: autonavi_yum.charencode,
                    callback: "?",
                    res: "YUM"
                },
                url: autonavi_yum.hostAddr,
                beforeSend: function (l) {
                },
                success: function (m, l) {
                    if (m == null || m == "") {
                        return
                    }
                    dataList = m.data
                },
                complete: function (m, l) {
                },
                error: function () {
                    base.yumAlert(property.BadRequest)
                }
            })
        };
        this.filterData = function (k) {
            var l = null;
            if (dataList) {
                var r = dataList.length;
                if (r == 1) {
                    l = dataList[0]
                } else {
                    var q = new RegExp("^\\d*", "ig");
                    var p = q.exec(k);
                    if (p && $.trim(p).length > 0) {
                        for (var m = 0; m < r; m++) {
                            var s = dataList[m];
                            var n = true;
                            if (s.oddEven != 2) {
                                var j = (p % 2 == 0 ? 1 : 0);
                                n = (j == s.oddEven)
                            }
                            if (n && i(s.startRange, s.endRange, p)) {
                                l = s;
                                break
                            }
                        }
                    } else {
                        l = dataList[0]
                    }
                }
            }
            return l
        };
        function i(p, n, j) {
            var m = Number(j);
            var l = Number(p);
            var k = Number(n);
            return m > l && m < k
        }
    }

    function J() {
        var h = $.cookie("yum_remember") ? $.cookie("yum_remember") : Math.uuid();
        $.cookie("yum_remember", h, {path: "/"});
        return h
    }

    function G(l) {
        var k = ["|", "%", "<", ">", "+", "script", "src", "select", "update", "delete", "insert"];
        var h = l.substring(0).toLowerCase();
        for (var j = 0; j < k.length; j++) {
            if (h.indexOf(k[j]) >= 0) {
                return false
            }
        }
        return true
    }

    function S(h) {
        h = $.trim(h);
        if (/^1\d{10}$/i.test(h)) {
            return true
        }
        return false
    }

    return {
        initNav: function (h) {
            Z(h);
            c()
        }, yumAlert: function (i, h) {
            F(i, h)
        }, yumTrackAlert: function (i, h) {
            Q(i, h)
        }, yumCommonAlert: function (k, i, j, h) {
            I(k, i, j, h)
        }, yumTrackAlertWiden: e, yumAlertLeft: function (i, h) {
            R(i, h)
        }, yumAlertEN: function (i, h) {
            g(i, h)
        }, yumAlertBack: function (i, h) {
            A(i, h)
        }, yumAlertUserExit: function (i, h) {
            Y(i, h)
        }, yumMenuAlert: function (i, h) {
            f(i, h)
        }, yumTrackAlertBack: function (i, h) {
            B(i, h)
        }, yumConfirm: function (h, i, j, k) {
            a(h, i, j, k)
        }, yumDonationConfirm: function (h, i, j) {
            V(h, i, j)
        }, yumNextProConfirm: function (h, i, j) {
            L(h, i, j)
        }, yumCloseProConfirm: function (h, i, j) {
            d(h, i, j)
        }, yumOpenLoading: function () {
            N()
        }, yumCloseLoading: function () {
            T()
        }, yumConfirmNetLater: function (h, i, j) {
            K(h, i, j)
        }, yumBindPhoneConfirm: function (h, i, j) {
            M(h, i, j)
        }, yumAlertBindPhoneVaild: function (i, h, j) {
            O(i, h, j)
        }, changeLang: function (h) {
            E(h)
        }, setAction: function (h, j, i, k) {
            H(h, j, i, k)
        }, setActionHttps: function (h, j, i, k) {
            D(h, j, i, k)
        }, inOper: function (h) {
            b(h)
        }, addFavorite: function () {
            addFavorite()
        }, loginExit: function (h) {
            U(h)
        }, initUrl: function () {
            C()
        }, EMapSearcher: function () {
            P()
        }, generateDeviceId: function (h) {
            J(h)
        }, validIllegalStr: function (h) {
            return G(h)
        }, validatePhone: function (h) {
            return S(h)
        }
    }
}();
$.extend({
    trimD: function (A) {
        if (null == A) {
            return A
        }
        return A.replace(/(^D(B|N|YL)?)|P|N|C|YL/, "")
    }, trimWOW: function (A) {
        if (null == A) {
            return A
        }
        return A.replace(/^WOW?/, "")
    }, localStr: function (B, A) {
        if (locale == "en_US") {
            if (A == 1) {
                return B.en
            }
            return B.en
        } else {
            if (locale == "zh_CN") {
                if (A == 1) {
                    return $.trimD(B.cn)
                }
                return B.cn
            }
        }
    }, localWOWStr: function (C, A) {
        if (A == 1) {
            var B = $.trimD(C.cn);
            return $.trimWOW(B)
        }
        return C.cn
    }, isEnglish: function () {
        if (locale == "en_US") {
            return true
        }
        return false
    }, moneyFormat: function (A) {
        if ($.isEnglish()) {
            A = pageMessage.yun + A
        } else {
            A = A + pageMessage.yun
        }
        return A
    }
});
var common = function () {
    var S = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var I = ["1"];
    var F = new RegExp("^(" + I.join("|") + ")\\d{10}$");
    var D = /^\d{3,4}$/;
    var T = /^\d{7,8}$/;
    var H = /^[0-9]*[1-9][0-9]*$/;
    var M = /[0-9]/;
    var Q = new Array("<script>", "script", "src", "select", "update", "delete", "insert", "<", ">", "%", "&", ":", "'", '"', "style", "<!--**-->", "/**", "//**", " **/", "--**", "/n*", "/t*", "*.*", "|", "$");
    var R = new Array("<script>", "script", "src", "select", "update", "delete", "insert", "<", ">", "style", "%", "&", ":", "|", "'", "/", '"', "!", "％", "”", "“", "﹛", "﹚", "﹙", "﹜", "＋", "[", "]", "！", "@", "?", "#", "%", "……", "*", "（", "）", "{", "}", "《", "》", "？", "，", "。", "$", "(", ")", "<!--**-->", "/**", "//**", " **/", "--**", "/n*", "/t*", "*.*", "|", "$");
    var O = new Array("|", "$", "<", ">", "+", "script", "src", "select", "update", "delete", "insert", "style", "<!--**-->", "/**", "//**", " **/", "--**", "/n*", "/t*", "*.*");
    var P = new Array("|", "%", "<", ">", "+", "script", "src", "select", "update", "delete", "insert");
    var A = /^[0-9a-zA-Z\.\-\_\u4e00-\u9fa5]{1,24}$/;

    function J(X, U) {
        var W = O;
        if (U == 4) {
            W = P
        }
        var Y = false;
        for (var V = 0; V < W.length; V++) {
            if (X.indexOf(W[V]) >= 0) {
                Y = true;
                break
            }
        }
        return Y
    }

    function E(U) {
        return A.test($.trim(U))
    }

    function L(U) {
        return S.test($.trim(U))
    }

    function B(U) {
        return F.test($.trim(U))
    }

    function N(U) {
        return D.test($.trim(U))
    }

    function K(U) {
        return T.test($.trim(U))
    }

    function C(U) {
        return H.test($.trim(U))
    }

    function G(U) {
        return M.test($.trim(U))
    }

    return {
        isEmail: function (U) {
            return L(U)
        }, isMobile: function (U) {
            return B(U)
        }, isAreaCode: function (U) {
            return N(U)
        }, isTelephone: function (U) {
            return K(U)
        }, isNumber: function (U) {
            return C(U)
        }, isNum: function (U) {
            return G(U)
        }, isStr: function (U) {
            return E(U)
        }, isStr2: function (V, U) {
            return J(V, U)
        }
    }
}();
var yumCfg = {
    sid: "yum_sid",
    rememberUser: "yum_ueserInfo",
    myNotNeed: "yum_myNotNeed",
    orderFlag: "yum_order",
    payFlag: "yum_pay",
    keep: 7,
    beforeLoginClass: "yum_beforeLoginClass",
    beforeLoginProduce: "yum_beforeLoginProduce",
    beforeLoginWow: "yum_beforeLoginWow",
    beforeLoginCondiment: "yum_beforeLoginCondiment",
    defaultAddress: "yum_defaultAddress",
    rememberInvoice: "yum_invoice",
    rememberAddress: "yum_rememberAddress",
    rememberPhone: "yum_rememberPhone",
    rememberPayType: "yum_rememberPayType",
    wowVideo: "yum_wowVideo",
    STORE_STATUS_NOTOPEN: "0",
    STORE_STATUS_NORMAL: "1",
    STORE_STATUS_CLOSE: "2",
    STORE_STATUS_TEMPCLOSE: "3"
};
var serviceCode = {
    NORMAL_STATUS: 0,
    WARNING_STATUS: 1,
    UNKNOWN_SERVICE_ERROR: 2,
    VALIDATION_ERROR: 3,
    CLIENT_ERROR: 4,
    MEMCACHED_ERROR: 5,
    PARSE_ERROR: 6,
    CUSTOMER_FORBIDDEN: 100,
    CUSTOMER_NOT_FOUND: 101,
    NEED_PASSWORD_NEW: 1938,
    CUSTOMER_FORBIDDEN_NEW: 1900,
    USER_NOT_FOUND: 1901,
    NEED_PASSWORD: 1911,
    INCORRECT_PASSWORD: 1903,
    MULTI_CUSTOMER_FOUND: 104,
    MANY_PASSWOED_WRONG: 1906,
    MANY_LOGIN_TIMES_WRONG: 1950,
    DEVICE_ID_IS_NONE: 1951,
    DEVICE_ID_IS_DIFFERENT: 1952,
    VERIFY_CODE_WRONG: 70000,
    get_imageCode_error: 1933,
    validate_image_error: 1934,
    NEED_EMAIL: 106,
    CUSTOMER_EXISTED: 107,
    BINDPHONE_HAS_OCCUPY: 123,
    SUC_CODE: 10000,
    FAIL_CODE: 20000,
    MAIL_SEND_FAIL: 10004,
    AUTH_CODE_UNCORRECT: 10005,
    CREATE_POINT_ERROR: 1944,
    PHONE_CODE_UNCORRECT: 1013,
    VERIFY_VERIFICATION_CODE_ERROR: 1015,
    DEL_ADDR_CODE: 10009,
    OUT_OF_ADDR_DELIVERY: 10010,
    OUT_OF_DELIVERY_TIME: 10012,
    ADDR_START_WITH_NUM: 10013,
    ADDR_NOT_FIND: 25,
    ERRORCODE_306: 306,
    USER_NOT_LOGIN: 10014,
    STORE_CLOSED: 407,
    BOOKING_OUT_OF_STORE_TIME: 10015,
    NET_USER: 116,
    CAPTCHA_FAILD: 117,
    NET_USER_SUCCESS: 40000,
    NET_USER_PROM_TIME: 40001,
    EMAILCODE_OUTTIME1: 1018,
    CAPTCHA_OUTTIME1: 1008,
    CAPTCHA_OUTTIME2: 1009,
    TOO_MANY_RESULTS: 32,
    BIND_PHONE_CUSTOMER: 10018,
    PASSWORD_CUSTOMER: 10019,
    NEW_CUSTOMER: 10020,
    COUPON_CLIENT_ERROR: 1400,
    ORDER_IS_NONE: 60001,
    ORDER_NO_GOODS: 60002,
    COUPON_CODE_USED: 60003,
    COUPON_NOT_AVALIABLE: 318,
    RISK_CONTROL_CODE_0: 0,
    RISK_CONTROL_CODE_80001: 80001,
    RISK_CONTROL_CODE_80002: 80002,
    RISK_CONTROL_CODE_80003: 80003,
    RISK_CONTROL_CODE_89998: 89998,
    RISK_CONTROL_CODE_89999: 89999
};
String.prototype.format = function (A) {
    return this.replace(/\{(\d+)\}/g, function (C, B) {
        return A[B]
    })
};
var error = {
    yumAlertError: function (code, opflag, failedMessage) {
        if (opflag) {
            base.yumAlert(code);
            return
        }
        try {
            if (eval("codeMessage.error" + code) == undefined) {
                if (failedMessage) {
                    base.yumAlert(failedMessage)
                } else {
                    base.yumAlert(property.serviceUnknown)
                }
            } else {
                base.yumAlert(eval("codeMessage.error" + code))
            }
        } catch (e) {
            base.yumAlert(property.serviceUnknown)
        }
    }
};
function addfavo() {
    var A = "http://www.4008823823.com.cn";
    var C = pageMessage.base_title;
    try {
        window.external.AddToFavoritesBar(A, C)
    } catch (B) {
        try {
            window.external.addFavorite(A, C)
        } catch (B) {
            try {
                window.sidebar.addPanel(C, A, C)
            } catch (B) {
                base.yumAlert(property.favoriteBtn)
            }
        }
    }
}
function validIE6() {
    var C = navigator.userAgent.toLowerCase();
    if (C.indexOf("msie") > 0) {
        var D = navigator.appVersion;
        var B = D.split(";");
        var A = B[1].replace(/[ ]/g, "");
        return A
    }
    return "noIe"
}
function pageInfo(C, A, B) {
    return
}
function newGuid() {
    var A = "";
    for (var B = 1; B <= 32; B++) {
        var C = Math.floor(Math.random() * 16).toString(16);
        A += C;
        if ((B == 8) || (B == 12) || (B == 16) || (B == 20)) {
            A += "-"
        }
    }
    return A
}
function setCookie(B, C, D) {
    var A = new Date();
    A.setTime(A.getTime() + D * 3600 * 1000);
    document.cookie = B + "=" + escape(C) + ";expires=" + A.toGMTString()
}
function addCookie(A, F, B) {
    var D = A + "=" + escape(F);
    if (B == 0) {
        var E = new Date();
        var C = 1;
        E.setTime(E.getTime() + C);
        D += "; expires=" + E.toGMTString()
    }
    document.cookie = D
}
function getCookie(A) {
    var B = document.cookie.match(new RegExp("(^| )" + A + "=([^;]*)(;|$)"));
    if (B != null) {
        return unescape(B[2])
    } else {
        return null
    }
}
function showBrowser() {
    if (navigator.userAgent.indexOf("Opera") >= 0) {
        return "opera"
    } else {
        if (navigator.userAgent.indexOf("360SE") >= 0) {
            return "360"
        } else {
            if (navigator.userAgent.indexOf("SE") >= 0) {
                return "sougou"
            } else {
                if (navigator.userAgent.indexOf("Firefox") >= 0) {
                    return "firefox"
                } else {
                    if (navigator.userAgent.indexOf("Chrome") >= 0) {
                        return "chrome"
                    } else {
                        if (maxthonVersion() != "false") {
                            return "maxthon"
                        } else {
                            if (navigator.userAgent.indexOf("TencentTraveler") >= 0) {
                                return "txtt"
                            } else {
                                if (navigator.userAgent.indexOf("Safari") >= 0) {
                                    return "safari"
                                } else {
                                    if (navigator.userAgent.indexOf("Netscape") >= 0) {
                                        return "netscape"
                                    } else {
                                        return "ie"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function isMaxthon() {
    try {
        window.external.max_invoke("GetHotKey");
        return true
    } catch (A) {
        return false
    }
}
function maxthonVersion() {
    if (isMaxthon()) {
        if (window.external && window.external.max_version) {
            return window.external.max_version.substr(0, 1)
        }
        return "false"
    } else {
        return "false"
    }
}
function processParams(G) {
    var D = "";
    if (G) {
        for (var E in G) {
            var F = G[E];
            if ($.isArray(F)) {
                for (var A = 0; A < F.length; A++) {
                    var B = F[A];
                    if ("object" == typeof B) {
                        for (var C in B) {
                            D += "&" + E + "[" + A + "]." + C + "=" + encodeURIComponent(B[C])
                        }
                    } else {
                        D += "&" + E + "=" + encodeURIComponent(B)
                    }
                }
            } else {
                D += "&" + E + "=" + encodeURIComponent(F)
            }
        }
    }
    return D
}
function actionCall(A, C, B) {
    C = processParams(C);
    jQuery.post(A, C, function (D) {
        if (D.exception) {
            alert("Error:" + D.msg);
            return
        }
        if (B) {
            B(D)
        }
    }, "json")
}
var isLoad = true;
var KFCIOS_ajax = {
    validNewCustomer: function (A) {
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {},
            url: requestContextPath + "/validNewCustomer.action",
            beforeSend: function (B) {
            },
            success: function (C, B) {
                A(C)
            },
            complete: function (C, B) {
            },
            error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }, validStore: function (A) {
        $.ajax({
            dataType: "json",
            type: "POST",
            async: false,
            data: {},
            url: requestContextPath + "/validStore.action",
            beforeSend: function (B) {
            },
            success: function (C, B) {
                A(C)
            },
            complete: function (C, B) {
            },
            error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }
};
$(function () {
    $(".top_menu_2").find("span[class!=current]").mouseover(function () {
        this.className = "current"
    }).mouseout(function () {
        this.className = ""
    })
});
var imgReady = (function () {
    var C = [], D = null, A = function () {
        var E = 0;
        for (; E < C.length; E++) {
            C[E].end ? C.splice(E--, 1) : C[E]()
        }
        !C.length && B()
    }, B = function () {
        clearInterval(D);
        D = null
    };
    return function (K, L, E, G) {
        var M, J, F, N, I, H = new Image();
        H.src = K;
        if (H.complete) {
            L.call(H);
            E && E.call(H);
            return
        }
        J = H.width;
        F = H.height;
        H.onerror = function () {
            G && G.call(H);
            M.end = true;
            H = H.onload = H.onerror = null
        };
        M = function () {
            N = H.width;
            I = H.height;
            if (N !== J || I !== F || N * I > 1024) {
                L.call(H);
                M.end = true
            }
        };
        M();
        H.onload = function () {
            !M.end && M();
            E && E.call(H);
            H = H.onload = H.onerror = null
        };
        if (!M.end) {
            C.push(M);
            if (D === null) {
                D = setInterval(A, 40)
            }
        }
    }
})();
var dataUtil = {
    ParseDate: function (s) {
        var dv, reg = /^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d$/gi;
        if (!reg.test(s)) {
            return null
        } else {
            dv = new Date(Date.parse(s.replace(/-/g, "/")));
            if (dv.getFullYear() != eval(s.substring(0, 4)) || dv.getMonth() + 1 != eval(s.substring(5, 7)) || dv.getDate() != eval(s.substring(8, 10)) || dv.getHours() != eval(s.substring(11, 13)) || dv.getMinutes() != eval(s.substring(14, 16)) || dv.getSeconds() != eval(s.substring(17, 19))) {
                return null
            }
        }
        return dv
    }, compareCurrentTime: function (C) {
        var A = this.ParseDate(C);
        var B = new Date();
        if (A != null) {
            if (A < B) {
                return "1"
            } else {
                return "2"
            }
        }
        return null
    }
};
var validateForm = {
    pathTemp: function () {
        var A = requestContextPath;
        if (location.protocol === "https:") {
            A = A.replace("http:", location.protocol).replace(":8080/", ":8443/")
        }
        A = A.replace(/\/en$/, "");
        return A
    },
    getHTML: {
        setPasswordHtml: '<div class="pop_con"><div class="newps newps-js updataPs"><div class="newpsline" id="validate_emailorphone_area"><div class="textinput"><input name="validate_emailorphone" type="text" disabled="true"></div></div><div class="newpsline"><div class="textinput"><input type="text" id="input1" tip="inputPassword"><input name="password1" type="password" class="dn"></div></div><div class="newpsline"><div class="textinput"><input type="text" id="input1" tip="inputPasswordAgain"><input name="password2" type="password" class="dn"></div></div><div class="newpsline" id="imageCode"><div class="textinput"><input name="code" type="text" tip="inputImageCode"></div><div class="radio_edit"><span class="radio_edit_img" id="verificationCode"><img style="cursor: pointer;"src=""></span><span class="radio_edit_text"  id="verificationCodeRefesh"><a flag="updataPs" href="javascript:void(0);">' + property.plsRefresh1 + '</a></span></div></div><div class="newpsline"><div class="textinput"><input name="code" type="text" tip="inputCode"></div><div class="radio_edit"><span class="radio_edit_text"><a href="javascript:void(0);" id="getSmsCode">' + pageMessage.clickphonecode + "</a></span></div></div></div></div>",
        checkMobiOrEmailHtml: '<div class="pop_con"><div class="newps newps-js updataPs"><div class="newpsline" id="validate_emailorphone_area"><div class="textinput"><input name="validate_emailorphone" type="text" disabled="true"></div></div><div class="newpsline" id="imageCode"><div class="textinput"><input name="code" type="text" tip="inputImageCode"></div><div class="radio_edit"><span class="radio_edit_img" id="verificationCode"><img style="cursor: pointer;"src=""></span><span class="radio_edit_text"  id="verificationCodeRefesh"><a flag="updataPs" href="javascript:void(0);">' + property.plsRefresh1 + '</a></span></div></div><div class="newpsline"><div class="textinput"><input name="code" type="text" tip="inputCode"></div><div class="radio_edit"><span class="radio_edit_text"><a href="javascript:void(0);" id="getSmsCode">' + pageMessage.clickphonecode + "</a></span></div></div></div></div>",
        setPhoneHtml: '<div class="pop_con"><div class="newps newps-js updataPs"><div class="newpsline"><div class="textinput"><input name="setPhone" type="text" tip="bindPhone"></div></div><div class="newpsline" id="imageCode"><div class="textinput"><input name="code" type="text" tip="inputImageCode"></div><div class="radio_edit"><span class="radio_edit_img" id="verificationCode"><img style="cursor: pointer;"src=""></span><span class="radio_edit_text"  id="verificationCodeRefesh"><a flag="updataPs" href="javascript:void(0);">' + property.plsRefresh1 + '</a></span></div></div><div class="newpsline"><div class="textinput"><input name="code" type="text" tip="inputCode"></div><div class="radio_edit"><span class="radio_edit_text"><a href="javascript:void(0);" id="getSmsCode">' + pageMessage.clickphonecode + "</a></span></div></div></div></div>"
    },
    countDown: function (B, A) {
        var C = $(B);
        if (A >= 0) {
            if (typeof buttonDefaultValue === "undefined") {
                buttonDefaultValue = C.text()
            }
            C.data("dis", true);
            C.text(property.stormingBack + "(" + A + pageMessage.secs + ")");
            A--;
            setTimeout(function () {
                validateForm.countDown(B, A)
            }, 1000)
        } else {
            C.data("dis", false);
            C.text(property.stormingBack)
        }
    },
    KFC_POST: function (B) {
        var A = B.action || "";
        var D = B.data || {};
        var C = B.callback || {};
        if (A === "") {
            console.log("请求地址不能为空");
            return
        }
        $.ajax({
            url: validateForm.pathTemp() + "/" + A,
            data: D,
            type: "post",
            dataType: "json",
            beforeSend: function () {
                base.yumOpenLoading()
            },
            success: function (E) {
                if (C && $.isFunction(C)) {
                    C(E)
                }
            },
            complete: function (F, E) {
                base.yumCloseLoading()
            },
            error: function () {
                base.yumTrackAlert(property.BadRequest)
            }
        })
    },
    inputFocus: function (A) {
        A.find("input").focus(function () {
            var B = $(this);
            B.val("");
            var C = B.attr("id");
            if ("input1" === C) {
                B.addClass("dn").next("input").removeClass("dn").focus()
            }
        })
    },
    inputBlur: function (A) {
        A.find("input").blur(function () {
            var D = $(this);
            var F = D.val();
            if ("" == F || null == F) {
                var B = D.attr("type");
                if ("password" === B) {
                    D.addClass("dn").prev("input").removeClass("dn");
                    var E = D.prev("input");
                    var C = E.attr("tip");
                    E.val(property[C])
                } else {
                    var C = D.attr("tip");
                    D.val(property[C])
                }
            }
        })
    },
    valideImageCode: function (C, B, A) {
        var D = {"imageCode": C};
        $.ajax({
            url: validateForm.pathTemp() + "/verifyImageVerificationCode.action",
            data: D,
            type: "post",
            dataType: "json",
            success: function (E) {
                if (E.code == serviceCode.SUC_CODE) {
                    if (B) {
                        B()
                    }
                } else {
                    error.yumAlertError(E.code);
                    if (A) {
                        A()
                    }
                }
            },
            error: function () {
                error.yumAlertError(o.code);
                A()
            }
        })
    },
    getImageCode: function (A) {
        $.ajax({
            url: validateForm.pathTemp() + "/generateImageVerificationCode.action",
            data: {},
            type: "post",
            dataType: "json",
            success: function (B) {
                if (B.code == serviceCode.SUC_CODE) {
                    if (A) {
                        A.attr("src", B.imageUrl)
                    } else {
                        $("#verificationCode>img").attr("src", B.imageUrl)
                    }
                } else {
                    error.yumAlertError(B.code)
                }
            },
            complete: function (C, B) {
            },
            error: function () {
                error.yumAlertError(o.code)
            }
        })
    },
    getSmsCaptcha: function (B, E, A, D) {
        if (E.mobiOrMail && !common.isMobile(E.mobiOrMail)) {
            base.yumTrackAlert(property.EorPNotcorrect);
            location.reload();
            return
        }
        if (showGeeCaptcha && captchaObject != null) {
            var C = captchaObject.getValidate();
            if (C) {
                E["geetest_challenge"] = C.geetest_challenge;
                E["geetest_validate"] = C.geetest_validate;
                E["geetest_seccode"] = C.geetest_seccode
            }
        }
        E = E || {};
        if (riskControlKey) {
            E.brower_id = window.brower_id
        }
        validateForm.KFC_POST({
            action: A, data: E, callback: function (F) {
                var H = $(B).parents(".newpsline").prev().find("input[name=code]");
                var G = $(B).parents(".newpsline").prev().find(".radio_edit_img img");
                H.val(property.inputImageCode);
                if (F.code == serviceCode.SUC_CODE) {
                    validateForm.countDown(B, 60)
                } else {
                    if (F.code == serviceCode.CAPTCHA_OUTTIME1 || F.code == serviceCode.EMAILCODE_OUTTIME1) {
                        base.yumTrackAlert(property.sendSMSMore)
                    } else {
                        if (F.code == serviceCode.CAPTCHA_OUTTIME2) {
                            base.yumTrackAlert(property.sendSMSMore2)
                        } else {
                            if (F.code == serviceCode.AUTH_CODE_UNCORRECT) {
                                base.yumTrackAlert(property.EorImageInputCode)
                            } else {
                                if (F.code == serviceCode.RISK_CONTROL_CODE_80001) {
                                    sendSmsCodeEvent_id = F.message;
                                    SMSflag = true;
                                    getGeetestLib.showCaptcha()
                                } else {
                                    if (F.code == serviceCode.VERIFY_CODE_WRONG) {
                                        base.yumAlertBack(codeMessage.error70000, function () {
                                            location.reload()
                                        })
                                    } else {
                                        if (F.code == serviceCode.RISK_CONTROL_CODE_89999) {
                                            base.yumAlertBack(property.forbidden_sendVerifyCode)
                                        } else {
                                            if (F.code == serviceCode.validate_image_error) {
                                                base.yumTrackAlert(property.EorImageInputCode)
                                            } else {
                                                error.yumAlertError(F.code)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (D) {
                    D()
                }
            }
        })
    },
    savePs: function (C, A) {
        if (riskControlKey && sendVerifyCodeScene) {
            sendVerifyCodeScene = null
        }
        var D = C.passwordVal;
        var B = C.password2Val;
        var G = C.phoneNum;
        var F = C.inputCodeVal;
        if (D == "") {
            base.yumTrackAlert(property.EorPasswordFormat);
            return
        }
        if (D.length < 6 || D.length > 16) {
            base.yumAlert(property.EorPasswordFormat);
            return
        }
        if (D !== B) {
            base.yumTrackAlert(property.twoPasswordsDoNotMatch);
            return
        }
        if (common.isStr2(D, 4)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if (F == "" || F == property.inputCode) {
            base.yumTrackAlert(property.inputCode);
            return
        }
        if (common.isStr2(F, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        var H = "forgetPassword.action";
        var C = {password: D, auth: F, phoneNum: G, event_id: event_id};
        event_id = null;
        if (showGeeCaptcha && captchaObject != null) {
            var E = captchaObject.getValidate();
            if (E) {
                C["geetest_challenge"] = E.geetest_challenge;
                C["geetest_validate"] = E.geetest_validate;
                C["geetest_seccode"] = E.geetest_seccode
            }
        }
        if (riskControlKey) {
            C.brower_id = window.brower_id
        }
        validateForm.KFC_POST({
            action: H, data: C, callback: function (I) {
                if (I.code == serviceCode.SUC_CODE) {
                    base.yumTrackAlertBack(property.setPasswordSuccessfully, function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdconf")
                        }
                        if (A) {
                            A();
                            return
                        }
                        location.replace(location.href)
                    })
                } else {
                    if (I.code == serviceCode.AUTH_CODE_UNCORRECT || I.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            if (!riskControlKey) {
                                $($("[name=code]")[0]).val("").focus()
                            }
                        })
                    } else {
                        if (I.code == serviceCode.USER_NOT_LOGIN) {
                            loginExit(function () {
                                location.href = requestContextPathHttps + "/orderLogin.action"
                            })
                        } else {
                            if (I.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                if (I.code == serviceCode.RISK_CONTROL_CODE_80001) {
                                    event_id = I.message;
                                    getGeetestLib.showCaptcha()
                                } else {
                                    if (I.code == serviceCode.VERIFY_CODE_WRONG) {
                                        base.yumAlertBack(codeMessage.error70000, function () {
                                            location.reload()
                                        })
                                    } else {
                                        if (I.code == serviceCode.RISK_CONTROL_CODE_89999) {
                                            base.yumAlertBack(property.forbidden_findPwd)
                                        } else {
                                            error.yumAlertError(I.code)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    },
    valideMobiOrMail: function (C, B) {
        var A = "verifiedVerificationCode.action";
        validateForm.KFC_POST({
            action: A, data: C, callback: function (D) {
                if (B) {
                    B(D);
                    return
                }
                location.replace(location.href)
            }
        })
    },
    modifyPhone: function (C, B) {
        var A = "modifyPhone.action";
        validateForm.KFC_POST({
            action: A, data: C, callback: function (D) {
                if (D.code == serviceCode.SUC_CODE) {
                    if (B) {
                        B();
                        return
                    }
                    location.replace(location.href)
                } else {
                    if (D.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            $("input[name=phoneCode]").val("").focus()
                        })
                    } else {
                        if (D.code == serviceCode.USER_NOT_LOGIN) {
                            loginExit(function () {
                                location.href = requestContextPathHttps + "/orderLogin.action"
                            })
                        } else {
                            if (D.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                if (D.code == serviceCode.AUTH_CODE_UNCORRECT) {
                                    base.yumTrackAlert(property.EorImageInputCode)
                                } else {
                                    error.yumAlertError(D.code, false, property.modifyFailed)
                                }
                            }
                        }
                    }
                }
            }
        })
    },
    setPassword: function (D, B, C) {
        var A = $(validateForm.getHTML.setPasswordHtml);
        if (B && (B.phone || B.email)) {
            A.find("#validate_emailorphone_area").show();
            if (B.phone != "" && B.phone != null) {
                A.find("[name='validate_emailorphone']").val(B.phone)
            }
        } else {
            A.find("#validate_emailorphone_area").hide()
        }
        if (riskControlKey) {
            A.find("#imageCode").hide()
        } else {
            validateForm.getImageCode();
            A.find("#verificationCode").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            });
            A.find("#verificationCodeRefesh").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            })
        }
        A.find("#getSmsCode").click(function () {
            sendVerifyCodeScene = "findPwd";
            if (!isLoad) {
                return
            }
            var F = this;
            if ($(this).data("dis")) {
                return
            }
            if (riskControlKey) {
                var H = $(this).get(0);
                var E = D;
                var I = "/sendVerificationCode.action";
                var K = {mobiOrMail: E, scene: B.scene, event_id: sendSmsCodeEvent_id};
                sendSmsCodeEvent_id = null;
                validateForm.getSmsCaptcha(H, K, I)
            } else {
                var G = $(".pop_con input[name=code]");
                var J = $.trim(G[0].value);
                if (J == "" || J == property.inputImageCode) {
                    base.yumTrackAlert(property.inputImageCode);
                    return
                }
                var H = $(F).get(0);
                var I = "sendVerificationCode.action";
                var K = {};
                K.mobiOrMail = D;
                K.imageCode = J;
                isLoad = false;
                validateForm.getSmsCaptcha(H, K, I, function () {
                    isLoad = true;
                    validateForm.getImageCode($("#verificationCode").find("img"))
                })
            }
        });
        validateForm.inputBlur(A);
        validateForm.inputFocus(A);
        A.find("input[type=text]").each(function () {
            var F = $(this);
            var E = F.attr("tip");
            if (E) {
                F.val(property[E])
            }
        });
        base.yumAlertBindPhoneVaild(A, function () {
            var F = $(".pop_con input[name=password1]").val();
            var E = $(".pop_con input[name=password2]").val();
            var G = $(".pop_con input[name=code]");
            var H = {passwordVal: F, password2Val: E, inputCodeVal: $.trim(G[1].value), phoneNum: D};
            validateForm.savePs(H, C)
        })
    },
    checkMobiOrEmail: function (E, B, D) {
        var C;
        var A = $(validateForm.getHTML.checkMobiOrEmailHtml);
        if (B) {
            C = B.scene;
            if (B.sendVerifyCodeScene) {
                sendVerifyCodeScene = B.sendVerifyCodeScene
            }
            A.find("#validate_emailorphone_area").show();
            if (B.phone != "" && B.phone != null) {
                A.find("[name='validate_emailorphone']").val(B.phone)
            }
        } else {
            A.find("#validate_emailorphone_area").hide()
        }
        if (riskControlKey) {
            A.find("#imageCode").hide()
        } else {
            validateForm.getImageCode();
            A.find("#verificationCode").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            });
            A.find("#verificationCodeRefesh").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            })
        }
        validateForm.inputBlur(A);
        validateForm.inputFocus(A);
        A.find("#getSmsCode").click(function () {
            var G = this;
            if (!isLoad) {
                return
            }
            if ($(this).data("dis")) {
                return
            }
            if (riskControlKey) {
                var I = $(this).get(0);
                var F = E;
                var J = "/sendVerificationCode.action";
                var L = {mobiOrMail: F, scene: C};
                validateForm.getSmsCaptcha(I, L, J)
            } else {
                var H = $(".pop_con input[name=code]");
                var K = $.trim(H[0].value);
                if (K == "" || K == property.inputImageCode) {
                    base.yumTrackAlert(property.inputImageCode);
                    return
                }
                var I = $(G).get(0);
                var J = "sendVerificationCode.action";
                var L = {};
                L.mobiOrMail = E;
                L.imageCode = K;
                isLoad = false;
                validateForm.getSmsCaptcha(I, L, J, function () {
                    isLoad = true;
                    validateForm.getImageCode($("#verificationCode").find("img"))
                })
            }
        });
        A.find("input[type=text]").each(function () {
            var G = $(this);
            var F = G.attr("tip");
            if (F) {
                G.val(property[F])
            }
        });
        base.yumAlertBindPhoneVaild(A, function () {
            if (riskControlKey && sendVerifyCodeScene) {
                sendVerifyCodeScene = null
            }
            var G = $(".pop_con input[name=code]");
            var F = $.trim(G[1].value);
            if (F == "" || F == property.inputCode) {
                base.yumTrackAlert(property.inputCode);
                return
            }
            if (common.isStr2(F, 1)) {
                base.yumTrackAlert(property.invaildStringError);
                return
            }
            var H = {verifyCode: F};
            validateForm.valideMobiOrMail(H, D)
        })
    },
    setPhone: function (D, B, C) {
        var A = $(validateForm.getHTML.setPhoneHtml);
        if (B) {
            A.find("#validate_emailorphone_area").show();
            if (B.phone != "" || B.phone != null) {
                A.find("[name='validate_emailorphone']").val(B.phone)
            } else {
                A.find("[name='validate_emailorphone']").val(B.email)
            }
        } else {
            A.find("#validate_emailorphone_area").hide()
        }
        if (riskControlKey) {
            A.find("#imageCode").hide()
        } else {
            validateForm.getImageCode();
            A.find("#verificationCode").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            });
            A.find("#verificationCodeRefesh").click(function () {
                validateForm.getImageCode($("#verificationCode").find("img"))
            })
        }
        A.find("#getSmsCode").click(function () {
            if (!isLoad) {
                return
            }
            var F = this;
            if ($(this).data("dis")) {
                return
            }
            var E = $('input[name="setPhone"]').val();
            if (E == "" || property.bindPhone == E) {
                base.yumAlert(pageMessage.pay_correctMobile);
                return
            }
            if (!common.isMobile(E)) {
                base.yumAlert(pageMessage.pay_correctMobile);
                return
            }
            if (riskControlKey) {
                var H = $(this).get(0);
                var E = E;
                var I = "/sendVerificationCode.action";
                var K = {mobiOrMail: E};
                validateForm.getSmsCaptcha(H, K, I)
            } else {
                var G = $(".pop_con input[name=code]");
                var J = $.trim(G[0].value);
                if (J == "" || J == property.inputImageCode) {
                    base.yumTrackAlert(property.inputImageCode);
                    return
                }
                var H = $(F).get(0);
                var I = "sendVerificationCode.action";
                var K = {};
                K.imageCode = J;
                K.mobiOrMail = E;
                isLoad = false;
                validateForm.getSmsCaptcha(H, K, I, function () {
                    isLoad = true;
                    validateForm.getImageCode($("#verificationCode").find("img"))
                })
            }
        });
        A.find("input[type=text]").each(function () {
            var F = $(this);
            var E = F.attr("tip");
            if (E) {
                F.val(property[E])
            }
        });
        base.yumAlertBindPhoneVaild(A, function () {
            var E = $('input[name="setPhone"]').val();
            if (E == "" || property.bindPhone == E) {
                base.yumAlert(pageMessage.pay_correctMobile);
                return
            }
            if (!common.isMobile(E)) {
                base.yumAlert(pageMessage.pay_correctMobile);
                return
            }
            var F = $(".pop_con input[name=code]");
            var G = $.trim(F[1].value);
            if (G == "" || G == property.inputCode) {
                base.yumTrackAlert(property.inputCode);
                return
            }
            if (common.isStr2(G, 1)) {
                base.yumTrackAlert(property.invaildStringError);
                return
            }
            var H = {verifyCode: G, mobiOrMail: E};
            validateForm.modifyPhone(H, C)
        })
    }
};
var geeCallBack;
var getGeetestLib = {
    init: function (B) {
        geeCallBack = B;
        var A = function (C) {
            captchaObject = C;
            C.appendTo("#popup-captcha");
            C.onSuccess(function () {
                geeCallBack && geeCallBack()
            })
        };
        if (!captchaObject) {
            $.ajax({
                url: validateForm.pathTemp() + "/startCaptcha.action?timeStamp=" + new Date().getMilliseconds(),
                type: "get",
                dataType: "json",
                success: function (C) {
                    if (C.showGeeCaptcha == 1) {
                        showGeeCaptcha = false;
                        return
                    }
                    showGeeCaptcha = true;
                    initGeetest({gt: C.gt, challenge: C.challenge, product: "popup", offline: !C.success}, A)
                }
            })
        }
    }, showCaptcha: function () {
        if (captchaObject) {
            captchaObject.refresh();
            captchaObject.show()
        }
    }
};