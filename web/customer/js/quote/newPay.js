var newPay = function () {
    var G = false;
    var K = null;

    function E() {
        getGeetestLib.init(function () {
            if (K == "register") {
                var M = $("#getSmsCode").get(0);
                var L = "/sendVerificationCode.action";
                var N = {mobiOrMail: $.trim($("#input_box_iphone").text()), scene: "S1", event_id: sendSmsCodeEvent_id};
                sendSmsCodeEvent_id = null;
                validateForm.getSmsCaptcha(M, N, L)
            } else {
                C()
            }
        });
        B();
        D();
        $("#code").click(function () {
            D()
        });
        $("#verificationCodeRefesh").click(function () {
            D()
        });
        $(".p_left a").click(function () {
            $(this).toggleClass("un")
        });
        $("#blackSelect").click(function () {
            if ($(this).hasClass("un")) {
                $("#blackType").val(3)
            } else {
                $("#blackType").val(2)
            }
        });
        $("#getSmsCode").click(function () {
            K = "register";
            if ($($(this).get(0)).data("dis")) {
                return
            }
            var M = this;
            if (riskControlKey) {
                var O = "S1";
                var N = $(M).get(0);
                var L = "sendVerificationCode.action";
                var Q = {};
                Q.mobiOrMail = $.trim($("#input_box_iphone").text());
                Q.scene = O;
                validateForm.getSmsCaptcha(N, Q, L)
            } else {
                var P = $.trim($("#auth").val());
                if (P == "" || P == property.inputImageCode) {
                    base.yumTrackAlert(property.inputImageCode);
                    return
                }
                var N = $(M).get(0);
                var L = "sendVerificationCode.action";
                var Q = {};
                Q.mobiOrMail = $.trim($("#input_box_iphone").text());
                Q.imageCode = P;
                validateForm.getSmsCaptcha(N, Q, L, function () {
                    D()
                })
            }
        });
        $(".passwordSee").click(function () {
            if ($("#password11").val() != "" && $("#password11").val() != property.inputPassword) {
                $(".passwordSee").hide();
                $(".passwordNotSee").show();
                $("#password11").show();
                $("#password1").hide()
            }
        });
        $(".passwordNotSee").click(function () {
            if ($("#password11").val() != "" && $("#password11").val() != property.inputPassword) {
                $(".passwordNotSee").hide();
                $(".passwordSee").show();
                $("#password1").show();
                $("#password11").hide()
            }
        });
        $("#setconfirmCode .pr_num_jiange").text("");
        $(".radio_invoice a").click(function () {
            $(".radio_invoice a").removeClass("on");
            $(this).addClass("on")
        });
        $(".radio_invoice a").click(function () {
            if ($(this).text() == $("#male").val()) {
                $("#gender").val(0)
            } else {
                $("#gender").val(1)
            }
        });
        $(".step1").click(function () {
            base.setAction("continueShopping.action")
        });
        $(".step2").click(function () {
            $.cookie(yumCfg.orderFlag, false, {path: "/"});
            base.setAction("cart.action")
        })
    }

    function B() {
        $("#auth").val(property.inputImageCode);
        $("#sendInputCode input").val(property.inputCode);
        $("#password11").focus(function () {
            if ($(".passwordSee").is(":hidden")) {
                if ($(this).val() == "" || $(this).val() == property.inputPassword) {
                    $("#password11").val("")
                }
            } else {
                $(this).hide();
                $("#password1").show().focus()
            }
        });
        $("#password11").blur(function () {
            if ($(this).val() == "" || $(this).val() == property.inputPassword) {
                $("#password1").val("");
                $("#password11").val(property.inputPassword)
            } else {
                $("#password1").val($(this).val())
            }
        });
        $("#password1").blur(function () {
            if ($(this).val() == "") {
                $(this).hide();
                $("#password11").show().val(property.inputPassword)
            } else {
                $("#password11").val($(this).val())
            }
        });
        $("#password1").keyup(function (L) {
            if (L.which == 13) {
                if ($(this).val() == "") {
                    $(this).hide();
                    $("#password11").show();
                    $("#password11").val(property.inputPassword)
                }
            }
        });
        $("#auth").focus(function () {
            $("#auth").val("")
        });
        $("#auth").blur(function () {
            if ($(this).val() == "") {
                $("#auth").val(property.inputImageCode)
            }
        });
        $("#sendInputCode input").focus(function () {
            $(this).val("")
        });
        $("#sendInputCode input").blur(function () {
            if ($(this).val() == "") {
                $(this).val(property.inputCode)
            }
        })
    }

    function A() {
        var M = $("#password1").val();
        var L = $.trim($("#sendInputCode input").val());
        if (M == "") {
            return property.passwordCantNull
        }
        if (M.length < 6 || M.length > 16) {
            return property.passwordLengthLimit
        }
        if (common.isStr2(M, 4)) {
            return property.invaildStringError
        }
        if (L == "" || L == property.inputCode) {
            return property.inputCode
        }
        if (L.length != 6) {
            return property.EorInputCode
        }
        return ""
    }

    function D() {
        validateForm.getImageCode($("#code"))
    }

    function H() {
        $("#back_menu_btn").click(function () {
            base.setAction("continueShopping.action")
        });
        $("#submit_btn").click(function () {
            K = null;
            C()
        });
        $("#step1").click(function () {
            base.setAction("continueShopping.action")
        });
        $("#step2").click(function () {
            base.setAction("order.action")
        })
    }

    function I() {
        $("#password11").focus(function () {
            console.log(111);
            $(this).hide();
            $("#password1").show().focus()
        });
        $("#password1").blur(function () {
            if ($(this).val() == "") {
                $(this).hide();
                $("#password11").show()
            }
        });
        $("#password1").click("keyup", function (L) {
            if (L.which == 13) {
                console.log(333);
                if ($(this).val() == "") {
                    $(this).hide();
                    $("#password11").show();
                    $("#password11").val(property.inputPassword)
                } else {
                    $("#password11").val($(this).val())
                }
            }
        })
    }

    function J(L) {
        _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", L);
        base.yumAlert(L)
    }

    function C() {
        var L = $.trim($("#username").val());
        var M = $.trim($("#input_box_iphone").text());
        var O = $("#sendInputCode input");
        var P = $("#password1");
        var U = $("#user_flag").val();
        if (L == "") {
            J(property.customerNameNotNull);
            return
        }
        if (O.length != 0 && ($.trim(O.val()) == "" || $.trim(O.val()) == property.inputCode)) {
            J(property.inputCode);
            return
        }
        if (P.length != 0 && $.trim(P.val()) == "") {
            J(property.passwordCantNull);
            return
        }
        if (common.isStr2(L, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            $("#username").val("");
            return
        }
        var N = true;
        if (U == "true") {
            if (M == "") {
                J(property.mobiTelephone);
                return
            } else {
                if (!common.isMobile(M)) {
                    J(property.mobNotcorrect);
                    return
                } else {
                    N = false;
                    $.ajax({
                        dataType: "json",
                        type: "POST",
                        data: {mobiOrMail: M},
                        async: false,
                        url: requestContextPath + "/checkUser.action",
                        beforeSend: function (V) {
                        },
                        success: function (W, V) {
                            if (W.code != serviceCode.USER_NOT_FOUND) {
                                base.yumAlert(property.phoneExist);
                                return
                            }
                            N = true
                        },
                        complete: function (W, V) {
                        },
                        error: function () {
                            base.yumAlert(property.BadRequest)
                        }
                    })
                }
            }
        }
        if (!N) {
            return
        }
        if ($("#clickAgree").hasClass("un")) {
            J(property.pleaseChooseAgree);
            return
        }
        base.yumOpenLoading();
        $.cookie("orderFlag", "1");
        var T = "/saveCustomerInfo.action";
        var S = $("#setPs").data("opFlag");
        var R = {phone: M, username: L, gender: $("#gender").val(), event_id: event_id};
        event_id = null;
        if (showGeeCaptcha && captchaObject != null) {
            var Q = captchaObject.getValidate();
            if (Q) {
                R["geetest_challenge"] = Q.geetest_challenge;
                R["geetest_validate"] = Q.geetest_validate;
                R["geetest_seccode"] = Q.geetest_seccode
            }
        }
        if (P.length != 0 && O.length != 0) {
            R.userPassword = $.trim(P.val());
            R.verifyCode = $.trim(O.val())
        }
        if (riskControlKey) {
            R.brower_id = window.brower_id
        }
        KFCIOS.newPay_modify.commonFn.KFC_POST({
            action: T, data: R, callback: function (V) {
                if (V.code == serviceCode.SUC_CODE) {
                    dataLayer.push({"event": "register_succ"});
                    base.setAction("saveCustomer.action")
                } else {
                    if (V.code == serviceCode.AUTH_CODE_UNCORRECT || V.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            O.val("").focus()
                        })
                    } else {
                        if (V.code == serviceCode.USER_NOT_LOGIN) {
                            location.href = requestContextPathHttps + "/orderLogin.action"
                        } else {
                            if (V.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                if (V.code == serviceCode.MANY_LOGIN_TIMES_WRONG) {
                                    base.yumAlert(codeMessage.error1950.format([property.register]))
                                } else {
                                    if (V.code == serviceCode.RISK_CONTROL_CODE_80001) {
                                        event_id = V.message;
                                        getGeetestLib.showCaptcha()
                                    } else {
                                        if (V.code == serviceCode.VERIFY_CODE_WRONG) {
                                            base.yumAlertBack(codeMessage.error70000, function () {
                                                location.reload()
                                            })
                                        } else {
                                            if (V.code == serviceCode.RISK_CONTROL_CODE_89999) {
                                                base.yumAlertBack(property.forbidden_register)
                                            } else {
                                                base.yumTrackAlert(V.message)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }

    function F(L, M, N) {
        $("#dialog-message-confirm span").html(L);
        $("#dialog-message-confirm").dialog({
            resizable: false,
            minHeight: "96px",
            modal: true,
            closeOnEscape: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            buttons: {
                newPay_setCode: function () {
                    $(this).dialog("close");
                    if (M) {
                        M.call()
                    }
                }, newPay_continueOrder: function () {
                    $(this).dialog("close");
                    if (N) {
                        N.call()
                    }
                }
            },
            open: function () {
                $(":button:last").addClass("ui-gray")
            }
        });
        $('[role="dialog"]').css("left", ($(window).width() - $('[role="dialog"]').width()) / 2 + "px")
    }

    return {
        init: function () {
            E();
            H()
        }, validate: function (L) {
            validate(L)
        }
    }
}();
var KFCIOS = KFCIOS || {};
KFCIOS.newPay_modify = {
    commonFn: {
        KFC_POST: function (B) {
            var A = B.action || "";
            var D = B.data || {};
            var C = B.callback || {};
            if (A === "") {
                console.log("请求地址不能为空");
                return
            }
            $.ajax({
                url: requestContextPath + "/" + A, data: D, type: "post", dataType: "json", beforeSend: function () {
                    base.yumOpenLoading()
                }, success: function (E) {
                    if (C && $.isFunction(C)) {
                        C(E)
                    }
                }, complete: function (F, E) {
                    base.yumCloseLoading()
                }, error: function () {
                    base.yumTrackAlert(property.BadRequest)
                }
            })
        }
    }
};