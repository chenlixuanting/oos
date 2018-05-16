window.loginClickFlag = true;
var timeout;
var currUserType = 0;
var sendVerifyCodeScene = null;
var index = {
    init: function () {
        this.inputChange();
        this.initLogin();
        if (typeof(dataLayer) != "undefined") {
            dataLayer.push({"event": "home_load"})
        }
        this.initKeyBordEvent();
        this.showMenu();
        this.initBanner();
        this.forgetPassword();
        this.showPop();
        this.orderBtn();
        this.initWordLink();
        this.initHotLink();
        this.seeDetail();
        this.proNameClick();
        getGeetestLib.init(function () {
            if ($(".updataPs").is(":visible")) {
                if (sendVerifyCodeScene == "findPwd") {
                    var B = $("#getSmsCode").get(0);
                    var A = "/sendVerificationCode.action";
                    var D = {mobiOrMail: $.trim($("#mobi").val()), scene: "S6", event_id: sendSmsCodeEvent_id};
                    sendSmsCodeEvent_id = null;
                    validateForm.getSmsCaptcha(B, D, A)
                } else {
                    var D = {
                        passwordVal: $(".pop_con input[name=password1]").val(),
                        password2Val: $(".pop_con input[name=password2]").val(),
                        inputCodeVal: $.trim($(".pop_con input[name=code]")[1].value),
                        phoneNum: $.trim($("#mobi").val())
                    };
                    validateForm.savePs(D)
                }
            } else {
                if (riskControlKey && sendVerifyCodeScene == "login") {
                    var B = $("#sendPointSmscode").get(0);
                    var A = "/sendVerificationCode.action";
                    var C = "S9";
                    if ($("#password").val() == "") {
                        C = "S10"
                    }
                    var D = {mobiOrMail: $.trim($("#mobi").val()), scene: C, event_id: sendSmsCodeEvent_id};
                    sendSmsCodeEvent_id = null;
                    validateForm.getSmsCaptcha(B, D, A)
                } else {
                    index.loginAction()
                }
            }
        });
        this.initBannerPopup();
        this.initOmitNextStep();
        if (window._tag) {
            _tag.trackEvent()
        }
        this.addMealDealAction();
        base.generateDeviceId();
        this.wowBarrelScroll()
    }, wowBarrelScroll: function () {
        $(window).resize(function () {
            $(window).scrollTop(0)
        });
        $(window).scroll(function () {
            var G = $(window).width(), A = $(window).height();
            var H = 88;
            var C = $(this).scrollTop();
            var I = $(".cart-box");
            var F = $(".bucket-box");
            var E = $(".tips01-js");
            var D = $("#MainWrapper").width();
            var B = $(".wow_mainWrapper_bg").width();
            if (C > H && G > B & A > 600) {
                I.css({"position": "fixed", "top": "0", "right": ((G - D) / 2 - 0.5)});
                F.css({"position": "fixed", "top": "215px", "left": "inherit", "right": ((G - D) / 2 + 165)});
                E.css({"position": "fixed", "top": "110px", "right": ((G - D) / 2 + 225)})
            } else {
                I.css({"position": "absolute", "top": "0", "right": "0"});
                F.css({"position": "absolute", "top": "215px", "right": "165px"});
                E.css({"position": "absolute", "top": "-22px", "right": "-280px", "float": "left"})
            }
        })
    }, addMealDealAction: function () {
        var A = this;
        $(".product_order_btn").die("click").live("click", function () {
            var D = $("#nMenuFlag").val();
            var C = $("#productId").val();
            if (D == "M2" || D == "M3") {
                A.flexibleComboDetail(C);
                return
            }
            if (D == "G") {
                A.groupsDetail(C);
                return
            }
            var B = $("#iClassId").val();
            var E = new Date();
            E.setTime(new Date().getTime() + (15 * 60 * 1000));
            $.cookie(yumCfg.beforLoginClassType, "1", {expires: E, path: "/kfcios"});
            $.cookie(yumCfg.beforeLoginClass, B, {expires: E, path: "/kfcios"});
            location.href = requestContextPathHttps + "/orderLogin.action"
        });
        $("#mealDeal_query_right").die("click").live("click", function () {
            if ($("#mealDeal_text").is(":hidden")) {
                $("#mealDeal_text").show();
                $("#mealDeal_query_right").addClass("mealDeal_icon1")
            } else {
                $("#mealDeal_text").hide();
                $("#mealDeal_query_right").removeClass("mealDeal_icon1")
            }
            $("#mealDeal_tips_zi").text(pageMessage.mealdeal_choose_num_word)
        });
        $("#mealDeal_query_down").die("click").live("click", function () {
            $("#mealDeal_text").hide();
            $("#mealDeal_query_right").removeClass("mealDeal_icon1")
        });
        $("#mealDeal_selectItem").die("click").live("click", function () {
            var B = $.trim($(this).text());
            $("#mealDeal_text1").val(B);
            $("#mealDeal_text").hide();
            $("#mealDeal_query_right").removeClass("mealDeal_icon1")
        });
        $(".mealDeal_pop_item").die("mouseover").live("mouseover", function () {
            var C = $(this).find(".mealDeal_pop_radio").attr("mealdealimg");
            var B = $(this).find(".mealDeal_pop_radio").attr("altDesc");
            var D = $(this).find(".mealDeal_pop_radio").attr("titleCn");
            if (C) {
                $(this).parents(".mealDeal_pop_listItem").find("img").attr({
                    "src": window.httpVersionPath + C,
                    "alt": B,
                    "titleCn": D
                })
            }
            $(this).css("backgroundColor", "#f8f2e8")
        });
        $(".mealDeal_pop_item").die("mouseout").live("mouseout", function () {
            $(this).css("backgroundColor", "transparent")
        });
        $(".confirmButton").die("click").live("click", function () {
            var C = $("#mealDeal_text1").val();
            var B = A.getAjaxHtml(httpHtmlPath + "/mealdeal_" + C + ".html");
            if (B) {
                $("#mealDeal_query_right").removeClass("mealDeal_icon1");
                $(".home_bg_mid2").html(B);
                $(".home_bg_mid1").hide();
                $(".home_bg_mid2").show();
                return
            }
            $("#mealDeal_tips_zi").text(pageMessage.mealdeal_num_not_found)
        });
        $(".change_meal_count").die("click").live("click", function () {
            $(".home_bg_mid1").show();
            $(".home_bg_mid2").hide()
        })
    }, groupsDetail: function (B) {
        var A = $("#popupCon .popup_main");
        var D = "#popupCon";
        A.empty();
        A.attr("class", "popup_main").addClass("mealDeal_popbox_p_bg02");
        var E = this.getAjaxHtml(httpHtmlPath + "/groups_" + B + ".html");
        if (E == null) {
            location.href = requestContextPathHttps + "/orderLogin.action";
            return
        }
        A.append(E);
        var C = "";
        KFC_dialog.show_dialog(C, D);
        $(".popbox_p_bg04 .close_icon").click(function () {
            KFC_dialog.close_dialog(D)
        });
        $(".popbox_p_bg04 .layerorder_btn").click(function () {
            var F = $("#iClassId").val();
            var G = new Date();
            G.setTime(new Date().getTime() + (15 * 60 * 1000));
            $.cookie(yumCfg.beforLoginClassType, "1", {expires: G, path: "/kfcios"});
            $.cookie(yumCfg.beforeLoginClass, F, {expires: G, path: "/kfcios"});
            location.href = requestContextPathHttps + "/orderLogin.action"
        })
    }, flexibleComboDetail: function (B) {
        var A = $("#popupCon .popup_main");
        var D = "#popupCon";
        A.empty();
        A.attr("class", "popup_main").addClass("mealDeal_popbox_p_bg01");
        var E = this.getAjaxHtml(httpHtmlPath + "/flexibleMealdeal_" + B + ".html");
        if (E == null) {
            location.href = requestContextPathHttps + "/orderLogin.action";
            return
        }
        A.append(E);
        var C = "";
        KFC_dialog.show_dialog(C, D);
        $(".mealDeal_pop_radio").click(function () {
            var F = $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealDeal_pop_radio_cur");
            var G = $(this).attr("maxQty");
            if ($(this).hasClass("mealDeal_pop_radio_cur")) {
                if (F.length == 2) {
                    $(this).removeClass("mealDeal_pop_radio_cur");
                    F = $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealDeal_pop_radio_cur")[0];
                    $(F).siblings(".mealDeal_pop_num").text("X2")
                } else {
                    base.yumAlert(property.infoMinOrderItemNum)
                }
            } else {
                if (G == 2 && F.length == 2) {
                    base.yumAlert(property.errorOrderItemsNum.format([2]))
                } else {
                    if (F.length == 1 || F.length == 0) {
                        if (G == 2) {
                            $(F[0]).siblings(".mealDeal_pop_num").text("");
                            $(this).addClass("mealDeal_pop_radio_cur")
                        } else {
                            $(F[0]).removeClass("mealDeal_pop_radio_cur");
                            $(this).addClass("mealDeal_pop_radio_cur")
                        }
                        if (F.length == 0) {
                            if (G == 2) {
                                $(this).siblings(".mealDeal_pop_num").text("X2")
                            }
                            $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealdeal_round_num").text("(" + G + "/" + G + ")")
                        }
                    }
                }
            }
        });
        $(".mealDeal_pop_ok>div").click(function () {
            var F = $("#iClassId").val();
            var G = new Date();
            G.setTime(new Date().getTime() + (15 * 60 * 1000));
            $.cookie(yumCfg.beforLoginClassType, "1", {expires: G, path: "/kfcios"});
            $.cookie(yumCfg.beforeLoginClass, F, {expires: G, path: "/kfcios"});
            location.href = requestContextPathHttps + "/orderLogin.action"
        });
        $(".mealDeal_pop_close").click(function () {
            KFC_dialog.close_dialog(D)
        })
    }, initWordLink: function () {
        $("#rolling p").each(function () {
            var B = $(this).attr("rtype");
            if (B == 2) {
                var A = $(this).attr("linkurl");
                if (A.indexOf("appIndex") >= 0) {
                    $(this).find("a").attr({href: A})
                } else {
                    $(this).find("a").attr({target: "_blank", href: A})
                }
            } else {
                if (B == 1) {
                    var C = $("a[pid=" + $(this).attr("linkcid") + "]").attr("href");
                    $(this).find("a").attr({href: C})
                }
            }
        })
    }, initHotLink: function () {
        $("#hotlink a").each(function (C, B) {
            $(B).click(function () {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "首页超链接", "wt.msg", $(B).text())
                }
            });
            var A = B.attributes.rtype.value;
            if (A == 2) {
                var D = $(B).attr("linkurl");
                if (D.indexOf("appIndex") >= 0) {
                    $(B).attr({href: D})
                } else {
                    $(B).attr({target: "_blank", href: D})
                }
            } else {
                if (A == 1) {
                    var E = $("a[pid=" + $(B).attr("linkcid") + "]").attr("href");
                    $(B).attr({href: E})
                }
            }
        })
    }, showMenu: function () {
        $("#nav li ul li a").each(function () {
            var E = $(this).attr("t");
            var A = $(this).attr("pid");
            var D = $(this).parents("ul").attr("classtype");
            var C = $.trim($(this).html());
            var B = $("#wowBarrelClassId").val();
            if (A == B && validIE6().indexOf("MSIE 6.0") > 0) {
                $(this).click(function () {
                    base.yumAlert(property.wowBarrelNoIE6)
                });
                $(this).attr("href", "javascript:void(0);")
            } else {
                var F = httpHtmlPath + "/" + $(this).attr("menuPath");
                if (A == B) {
                    $(this).click(function (G) {
                        G.preventDefault();
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "WOW", "wt.msg", "wowBarrel_menu")
                        }
                        setTimeout(function () {
                            window.location.href = F + ".html"
                        }, 50)
                    })
                } else {
                    if (D == "B" || D == "L" || D == "D") {
                        $(this).click(function (G) {
                            G.preventDefault();
                            if (window._tag) {
                                if (D == "B") {
                                    _tag.dcsMultiTrack("wt.event", A + "_CT_home_早餐" + C, "wt.msg", "未登录,早餐" + C)
                                } else {
                                    if (D == "L") {
                                        _tag.dcsMultiTrack("wt.event", A + "_CT_home_正餐" + C, "wt.msg", "未登录,正餐" + C)
                                    } else {
                                        if (D == "D") {
                                            _tag.dcsMultiTrack("wt.event", A + "_CT_home_夜宵" + C, "wt.msg", "未登录,夜宵" + C)
                                        }
                                    }
                                }
                            }
                            setTimeout(function () {
                                window.location.href = F + ".html"
                            }, 100)
                        })
                    } else {
                        $(this).attr("href", F + ".html")
                    }
                }
            }
        })
    }, showPop: function () {
        $(".showPicPop").click(function () {
            var A = $(this).attr("productid");
            var C = $(this).attr("mFlag");
            var B = $(this);
            if (C == "V") {
                index.vClick(B);
                return
            }
            index.popupConShow(A, $(this))
        });
        $(".pro_img").click(function () {
            var A = $(this).attr("productid");
            var C = $(this).attr("mFlag");
            var B = $(this);
            if (C == "V") {
                index.vClick(B);
                return
            }
            index.popupConShow(A, $(this))
        })
    }, seeDetail: function () {
        $(".see_details_btn").click(function () {
            var B = $(this).closest(".pro_info").prev();
            var A = B;
            index.vClick(A)
        })
    }, proNameClick: function () {
        var A = $(".pro_name");
        A.click(function () {
            var D = $(this).closest(".pro_info").prev();
            var C = D.attr("mFlag");
            if (C == "V") {
                var B = D;
                index.vClick(B)
            }
        })
    }, vClick: function (A) {
        var C = A.attr("linkType");
        var D = A.attr("classId");
        var E = A.attr("virtualLink");
        var B = A.attr("linkShowType");
        if (B == 1) {
            if (E.indexOf("appIndex") >= 0) {
                window.location.href = E
            } else {
                window.open(E)
            }
        } else {
            if (C == 1) {
                window.location.href = $("a[pid=" + D + "]").attr("href");
                $("a[pid=" + D + "]").click()
            } else {
                if (C == 2) {
                    if (E.indexOf("appIndex") >= 0) {
                        window.location.href = E
                    } else {
                        window.open(E)
                    }
                }
            }
        }
    }, orderBtn: function () {
        $(".pr-box li>img").click(function () {
            $(this).parents("li").find(".wowBarrelOrderBtn").click()
        });
        var A = this;
        $(".order_btn_start, .wowBarrelOrderBtn, #orderSub").click(function () {
            if ($(this).hasClass("wowBarrelOrderBtn")) {
                $.cookie(yumCfg.beforeLoginWow, "1", {expires: F, path: "/kfcios"})
            }
            if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
                base.yumAlert(property.maintenanceRemind);
                return
            }
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "logon", "wt.msg", "3")
            }
            var F = new Date();
            F.setTime(new Date().getTime() + (15 * 60 * 1000));
            var B = $(this).parents(".pro_info").prev(".showPicPop").attr("productid");
            var E = $(this).parents(".pro_info").prev(".showPicPop").attr("mFlag");
            if (!B) {
                B = $(this).parents(".pro_info").prev(".pro_img").attr("productid")
            }
            if (!E) {
                E = $(this).parents(".pro_info").prev(".pro_img").attr("mFlag")
            }
            if ($(this).hasClass("condimentButton")) {
                $.cookie(yumCfg.beforeLoginCondiment, B, {expires: F, path: "/kfcios"})
            }
            if (E == "M2" || E == "M3") {
                var D = A.getAjaxHtml(httpHtmlPath + "/mealdeal_" + B + ".html");
                if (D == null) {
                    location.href = requestContextPathHttps + "/orderLogin.action";
                    return
                }
                $(".home_bg_mid").html(D);
                $(".change_meal_count").hide()
            } else {
                if (E == "G") {
                    A.groupsDetail(B);
                    return
                } else {
                    var C = $(this).attr("htmlName");
                    if (C) {
                        location.href = httpHtmlPath + "/" + C;
                        return
                    }
                    var G = $("#iClassId").val();
                    $.cookie(yumCfg.beforeLoginProduce, B, {expires: F, path: "/kfcios"});
                    $.cookie(yumCfg.beforeLoginClass, G, {expires: F, path: "/kfcios"});
                    location.href = requestContextPathHttps + "/orderLogin.action"
                }
            }
        })
    }, initBanner: function () {
        $(".index_banner,.sbanner").find("img").each(function (E, F) {
            var D = $(this).attr("linkType");
            if (D == 1) {
                var A = $(this).attr("classId");
                var B = $("#wowBarrelClassId").val();
                if (A == B && validIE6().indexOf("MSIE 6.0") > 0) {
                    $(this).parent("a").click(function () {
                        base.yumAlert(property.wowBarrelNoIE6)
                    });
                    $(this).parent("a").attr("href", "javascript:void(0);")
                } else {
                    var G = httpHtmlPath + "/" + $("a[pid=" + $(this).attr("classId") + "]").attr("menuPath") + ".html";
                    $(this).click(function () {
                        var H = $(this).attr("titleCn");
                        if ($(this).parent().hasClass("fl_l")) {
                            var J = "SubBanner_1_" + H;
                            window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_SubBanner1_click", "wt.msg", J)
                        } else {
                            if ($(this).parent().hasClass("fl_r")) {
                                var I = "SubBanner_2_" + H;
                                window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_SubBanner2_click", "wt.msg", I)
                            } else {
                                if (A != B) {
                                    var L = $(this).parent().index(), K = "Banner_" + L + "_" + H;
                                    window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_Banner_click", "wt.msg", K)
                                }
                            }
                        }
                        if (A == B) {
                            window._tag && _tag.dcsMultiTrack("wt.event", "WOW", "wt.msg", "wowBarrel_Banner")
                        }
                        setTimeout(function () {
                            window.location.href = G
                        }, 50)
                    });
                    $(this).parent("a").attr({href: "javascript:void(0);"})
                }
            } else {
                if (D == 2) {
                    var C = $(this).attr("linkedurl");
                    if (C.indexOf("appIndex") >= 0) {
                        $(this).parent("a").attr({href: C})
                    } else {
                        $(this).parent("a").attr({target: "_blank", href: C})
                    }
                }
            }
        })
    }, getFormInfo: function () {
        return {form: document.forms.myForm, showPassWord: $("#showPwd")}
    }, initLogin: function () {
        var A = $.cookie(yumCfg.rememberUser);
        if (A) {
            $("#mobi").val(A);
            $("#input_reme").prop("checked", true)
        }
        $("#loginSubmit").click(this.checkUser())
    }, inputChange: function () {
        var A = this.getFormInfo();
        var B = A.form;
        var C = A.showPassWord;
        $(B.mobi).live("click keyup", function () {
            C.hide();
            if ($("#mobi").val() == property.inputEamilorMoblie) {
                $("#mobi").val("")
            }
            B.password.value = "";
            $("#showVerifyCode").hide();
            $("#validate_user_smscode").val(pageMessage["validate_user_smscode"]);
            $(".wanji").hide();
            $(".right_order_main  .Til").hide()
        });
        $("#mobi").blur(function () {
            if ($("#mobi").val() == "") {
                $("#mobi").val(property.inputEamilorMoblie)
            }
        });
        $("#password_text").focus(function () {
            $("#password_text").parent("p").hide();
            $("#password").parent("p").show();
            $("#showPwd>.Til").hide();
            $("#password").focus()
        });
        $("#password").blur(function () {
            if ($("#password").val() == "") {
                $("#password_text").parent("p").show();
                $("#password").parent("p").hide()
            }
        });
        $("#password").focus(function () {
            $("#showPwd>.Til").hide()
        });
        $.each($(".validate_user_input"), function (E, F) {
            var D = $(F).attr("id");
            $(F).val(pageMessage[D])
        });
        $(".validate_user_input").focus(function () {
            var D = $(this).attr("id");
            if ($(this).val() == pageMessage[D]) {
                $(this).val("")
            }
        });
        $(".validate_user_input").blur(function () {
            var D = $(this).attr("id");
            if ($.trim($(this).val()) == "") {
                $(this).val(pageMessage[D])
            }
        });
        $("#sendPointSmscode").live("click", function () {
            sendVerifyCodeScene = "login";
            if ($(this).data("dis")) {
                return
            }
            var E = this;
            var F = $(this).get(0);
            var D = $.trim($("#mobi").val());
            var G = "/sendVerificationCode.action";
            var H = "S9";
            if ($("#password").val() == "") {
                H = "S10"
            }
            var I = {mobiOrMail: D, event_id: sendSmsCodeEvent_id, scene: H};
            sendSmsCodeEvent_id = null;
            validateForm.getSmsCaptcha(F, I, G)
        })
    }, initKeyBordEvent: function () {
        var B = this;
        var A = B.getFormInfo();
        var C = function (D) {
            if (D.which == 13) {
                if ($("#checkFlag").val() == 1) {
                    B.checkUser()
                } else {
                    B.checkUser()
                }
            }
        };
        $(A.form.mobi).keyup(C);
        $(A.form.password).keyup(C)
    }, loginAction: function () {
        var B = index.getFormInfo();
        if (!loginClickFlag) {
            clearTimeout(timeout);
            timeout = undefined;
            return
        }
        loginClickFlag = false;
        if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
            base.yumAlert(property.maintenanceRemind);
            loginClickFlag = true;
            return
        }
        if ($("#checkFlag").val() != 1) {
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "logon", "wt.msg", "2")
            }
        }
        var A = B.form;
        var G = $.trim(A.mobi.value);
        var F = A.password.value;
        var D = B.showPassWord;
        if (G == "" || G == property.inputEamilorMoblie) {
            $(".right_order_main > .Til").text(property.EorPNotNull);
            $(".right_order_main > .Til").show();
            loginClickFlag = true;
            return
        }
        if (common.isMobile(G)) {
            if (D.is(":visible") && F == "") {
                $("#showPwd > .Til").text(property.pwdNotNull);
                $("#showPwd > .Til").show();
                loginClickFlag = true;
                return
            }
            if (D.is(":visible") && (F.length < 6 || F.length > 16)) {
                $("#showPwd > .Til").text(property.EorPasswordFormat);
                $("#showPwd > .Til").show();
                loginClickFlag = true;
                return
            }
            if (common.isStr2(F, 4) || common.isStr2(G, 1)) {
                base.yumAlert(property.invaildStringError);
                loginClickFlag = true;
                return
            }
            var E = {mobi: G, pass: F, event_id: event_id};
            event_id = null;
            if (showGeeCaptcha && captchaObject != null && !SMSflag) {
                var H = captchaObject.getValidate();
                if (H) {
                    E["geetest_challenge"] = H.geetest_challenge;
                    E["geetest_validate"] = H.geetest_validate;
                    E["geetest_seccode"] = H.geetest_seccode
                }
            }
            if ($("#showVerifyCode").is(":visible")) {
                var C = $.trim($("#validate_user_smscode").val());
                if (C == "") {
                    base.yumAlert(pageMessage.point_register_point_smscode)
                } else {
                    E.verifycode = C
                }
            }
            if (riskControlKey) {
                E.brower_id = window.brower_id
            }
            $.ajax({
                url: requestContextPathHttps + "/loginValidate.action",
                data: E,
                dataType: "json",
                type: "post",
                success: function (J) {
                    var I = $("#toPage").val();
                    if (I == "") {
                        I = "pointCenter"
                    }
                    switch (true) {
                        case J.code == serviceCode.SUC_CODE:
                            loginClickFlag = true;
                            if ($("#input_reme").prop("checked")) {
                                $.cookie(yumCfg.rememberUser, G, {expires: yumCfg.keep, path: "/"})
                            } else {
                                $.cookie(yumCfg.rememberUser, null, {path: "/"})
                            }
                            if (J.customer.user.userType == 1) {
                                window.location.href = requestContextPath + "/validateUser.action?checkFlag=";
                                return
                            }
                            console.log("mustVipOrderFlag = " + J.mustVipOrderFlag);
                            if ("N" != J.mustVipOrderFlag && (J.customer.user.userCode == undefined || J.customer.user.userCode == "" || J.customer.user.userCode.indexOf("T") != -1)) {
                                window.location.href = requestContextPath + "/pointRegister.action?toPage=" + I;
                                return
                            }
                            if ($("#checkFlag").val() == 1) {
                                window.location.href = requestContextPath + "/check.action"
                            } else {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-suc", "wt.msg", "2", "wt.dcsvid", J.customerId)
                                }
                                window.location.href = requestContextPath + "/customer.action"
                            }
                            break;
                        case J.code == serviceCode.USER_NOT_FOUND || J.code == serviceCode.CUSTOMER_NOT_FOUND:
                            if ($("#checkFlag").val() != 1) {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-fail", "wt.msg", "2", "wt.errorCode", serviceCode.CUSTOMER_NOT_FOUND)
                                }
                            }
                            if ($("#input_reme").prop("checked")) {
                                $.cookie(yumCfg.rememberUser, G, {expires: yumCfg.keep, path: "/"})
                            } else {
                                $.cookie(yumCfg.rememberUser, null, {path: "/"})
                            }
                            if ($("#checkFlag").val() == 1) {
                                base.yumAlert(property.notExsitRecord)
                            } else {
                                if ("1" == $("#displayUserAgreement").val()) {
                                    base.setAction("agreement.action")
                                } else {
                                    window.location.href = requestContextPath + "/customerFromAgree.action"
                                }
                            }
                            break;
                        case J.code == serviceCode.MANY_PASSWOED_WRONG:
                            error.yumAlertError(J.code);
                            break;
                        case J.code == serviceCode.CUSTOMER_FORBIDDEN_NEW || J.code == serviceCode.RISK_CONTROL_CODE_89999:
                            error.yumAlertError(J.code);
                            break;
                        case J.code == serviceCode.NET_USER:
                            if ($("#checkFlag").val() != 1) {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-fail", "wt.msg", "2", "wt.errorCode", serviceCode.NET_USER)
                                }
                            }
                            base.setAction("toNetUserLogin.action");
                            break;
                        case J.code == serviceCode.NEED_PASSWORD || J.code == serviceCode.NEED_PASSWORD_NEW:
                            if ($("#checkFlag").val() != 1) {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-fail", "wt.msg", "2", "wt.errorCode", serviceCode.NEED_PASSWORD)
                                }
                            }
                            currUserType = 1;
                            D.show();
                            $("#password_text").parent("p").show();
                            $("#password").parent("p").hide();
                            $(".wanji").show();
                            break;
                        case J.code == serviceCode.INCORRECT_PASSWORD:
                            if ($("#checkFlag").val() != 1) {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-fail", "wt.msg", "2", "wt.errorCode", serviceCode.INCORRECT_PASSWORD)
                                }
                            }
                            $("#showPwd>.Til").text(property.passNotCorrect);
                            $("#showPwd>.Til").show();
                            password.value = "";
                            if ($("#password").val() == "") {
                                $("#password_text").parent("p").show();
                                $("#password").parent("p").hide()
                            }
                            break;
                        case J.code == serviceCode.MANY_LOGIN_TIMES_WRONG:
                            base.yumAlert(codeMessage.error1950.format([property.login]));
                            break;
                        case J.code == serviceCode.VERIFY_CODE_WRONG:
                            base.yumAlertBack(codeMessage.error70000, function () {
                                location.reload()
                            });
                            break;
                        case J.code == serviceCode.DEVICE_ID_IS_NONE || J.code == serviceCode.DEVICE_ID_IS_DIFFERENT:
                            $("#showVerifyCode").show();
                            $(".wangji").show();
                            currUserType = 1;
                            break;
                        case J.code == serviceCode.RISK_CONTROL_CODE_80002:
                            event_id = J.message;
                            $("#showVerifyCode").show();
                            $(".wangji").show();
                            currUserType = 1;
                            break;
                        case J.code == serviceCode.RISK_CONTROL_CODE_80001:
                            event_id = J.message;
                            SMSflag = false;
                            getGeetestLib.showCaptcha();
                            break;
                        default:
                            if ($("#checkFlag").val() != 1) {
                                if (window._tag) {
                                    _tag.dcsMultiTrack("wt.event", "logon-fail", "wt.msg", "2", "wt.errorCode", serviceCode.FAIL_CODE)
                                }
                            }
                            error.yumAlertError(J.code)
                    }
                    loginClickFlag = true
                },
                error: function () {
                    loginClickFlag = true;
                    alert(property.BadRequest)
                }
            })
        } else {
            loginClickFlag = true;
            $(".right_order_main > .Til").text(property.EorPNotcorrect);
            $(".right_order_main > .Til").show();
            return
        }
    }, checkUser: function () {
        var B = this;
        var A = this.getFormInfo();
        return function () {
            sendVerifyCodeScene = null;
            if (!loginClickFlag) {
                clearTimeout(timeout);
                timeout = undefined;
                return
            }
            loginClickFlag = false;
            var F = $.cookie(yumCfg.rememberUser);
            if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
                base.yumAlert(property.maintenanceRemind);
                loginClickFlag = true;
                return
            }
            if ($("#checkFlag").val() != 1) {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "logon", "wt.msg", "2")
                }
            }
            var D = A.form;
            var G = $.trim(D.mobi.value);
            var C = D.password.value;
            var E = A.showPassWord;
            if (G == "" || G == property.inputEamilorMoblie) {
                $(".right_order_main > .Til").text(property.EorPNotNull);
                $(".right_order_main > .Til").show();
                loginClickFlag = true;
                return
            }
            if (common.isMobile(G)) {
                if (E.is(":visible") && C == "") {
                    $("#showPwd > .Til").text(property.pwdNotNull);
                    $("#showPwd > .Til").show();
                    loginClickFlag = true;
                    return
                }
                if (E.is(":visible") && (C.length < 6 || C.length > 16)) {
                    $("#showPwd > .Til").text(property.EorPasswordFormat);
                    $("#showPwd > .Til").show();
                    loginClickFlag = true;
                    return
                }
                if (common.isStr2(C, 4) || common.isStr2(G, 1)) {
                    base.yumAlert(property.invaildStringError);
                    loginClickFlag = true;
                    return
                }
                if (F == G) {
                    loginClickFlag = true;
                    B.loginAction();
                    return
                }
                if (!riskControlKey && showGeeCaptcha && captchaObject != null && (currUserType == 0 || !captchaObject.getValidate())) {
                    loginClickFlag = true;
                    getGeetestLib.showCaptcha()
                } else {
                    loginClickFlag = true;
                    B.loginAction()
                }
            } else {
                loginClickFlag = true;
                $(".right_order_main > .Til").text(property.EorPNotcorrect);
                $(".right_order_main > .Til").show();
                return
            }
        }
    }, forgetPassword: function () {
        var A = $(".wanji");
        var D = this.getFormInfo();
        var C = D.form;
        var B = C.mobi;
        var E = "S6";
        A.click(function () {
            var F = "";
            var G = $.trim(B.value);
            validateForm.setPassword(G, {"scene": E})
        })
    }, popupConShow: function (A, G) {
        var E = "";
        $("#loginBtn").data("productid", A);
        var D = G.parents(".single_pro").find(".order_btn_start").attr("htmlName");
        var C = $("#ptpListStr").val();
        if (A) {
            var F = C.split("_");
            for (var B = 0; B < F.length; B++) {
                if (A == F[B]) {
                    E = this.getAjaxHtml(httpHtmlPath + "/" + A + ".html");
                    break
                }
            }
            if (D) {
                $("#loginBtn").attr("htmlName", D)
            }
            this.PromotionHtml(G, E);
            this.PopUp_Show_Html($("#menuPopupConShow"))
        } else {
            location.href = requestContextPathHttps + "/orderLogin.action"
        }
    }, PromotionHtml: function (J, K) {
        var R = this;
        if (K != null && K != "") {
            $("#menuPopupConShow .popup_main").removeClass().addClass("popup_main popbox_p_bg02")
        } else {
            $("#menuPopupConShow .popup_main").removeClass().addClass("popup_main popbox_p_bg03")
        }
        var S = $("#menuPopupConShow").find(".popup_product_detail>div");
        var C = J.parents(".single_pro").find(".order_btn_start").attr("htmlName");
        var E = J.find("[name=menuImg]").attr("src").replace("chickenNice/", "");
        var M = J.attr("price");
        var O = J.attr("menu");
        var H = $.localStr({cn: O, en: O}, 1);
        var G = J.attr("desc");
        var D = J.attr("saleTime");
        var B = J.attr("sVD");
        var L = J.attr("mflag");
        var A = J.find("img").attr("alt");
        var Q = J.find("img").attr("titleCn");
        var I = J.attr("area");
        var F = J.closest("li").find(".ncoFlag").clone();
        var P = S.find(".popup_product_detail_img>img");
        P.attr({"src": E, "alt": A, "titleCn": Q});
        P.siblings("span").remove();
        if (F) {
            P.after(F)
        }
        S.find("h4").empty().append(H);
        S.find("#desc").empty().append(G);
        S.find("#saleTime").empty().text(property.avaliableTime + D);
        S.find("#saleValidDate").empty().text(property.avaliableDate + B);
        S.find("#promotionArea").empty().text(property.avaliableZone + I);
        S.find("#promotionContent").empty();
        if (L == "G") {
            if ($.isEnglish()) {
                S.find(".price_span_2").empty().append($("<span/>").addClass("price").html(pageMessage.yun + M))
            } else {
                S.find(".price_span_2").empty().append($("<span/>").addClass("price").html(M + pageMessage.common_yuan + pageMessage.mealdeal_price_begin + pageMessage.home_Per))
            }
        } else {
            if (L == "M3") {
                S.find(".price_span_2").empty()
            } else {
                if (!C) {
                    if ($.isEnglish()) {
                        S.find(".price_span_2").empty().append($("<span/>").addClass("price").html(pageMessage.yun + M))
                    } else {
                        S.find(".price_span_2").empty().append($("<span/>").addClass("price").html(M + pageMessage.Yuan_Per))
                    }
                }
            }
        }
        S.find(".input_span").hide();
        var N = $("#menuPopupConShow").find(".popup_main_title_product");
        N.empty();
        N.append(K);
        $("#menuPopupConShow").find(".close_icon>a").die("click").live("click", function () {
            $("#menuPopupConShow").dialog("close")
        });
        $("#menuPopupConShow").find("#loginBtn").die("click").live("click", function () {
            if (dataUtil.compareCurrentTime(systemMaintenance.remindStartTime) == "1" && dataUtil.compareCurrentTime(systemMaintenance.remindEndTime) == "2") {
                base.yumAlert(property.maintenanceRemind);
                return
            }
            var W = new Date();
            W.setTime(new Date().getTime() + (15 * 60 * 1000));
            var T = $("#loginBtn").data("productid");
            var U = $("#loginBtn").attr("htmlName");
            var V = J.attr("mflag");
            if (T) {
                $("#loginBtn").data("productid", "")
            }
            if (V == "M2" || V == "M3") {
                R.flexibleComboDetail(T);
                $("#menuPopupConShow").dialog("close");
                return
            }
            if (U) {
                location.href = httpHtmlPath + "/" + U;
                return
            }
            if (V != "G" && V != "M2" && V != "M3") {
                $.cookie(yumCfg.beforeLoginProduce, T, {expires: W, path: "/kfcios"})
            }
            $.cookie(yumCfg.beforeLoginClass, $("#iClassId").val(), {expires: W, path: "/kfcios"});
            $("#menuPopupConShow").dialog("close");
            location.href = requestContextPathHttps + "/orderLogin.action"
        })
    }, PopUp_Show_Html: function (A) {
        var B = "big_bg";
        A.dialog({
            resizable: false,
            height: "auto",
            width: 555,
            draggable: false,
            fixed: false,
            dialogClass: B,
            position: {my: "center", at: "center", of: window, collision: "fit"},
            modal: true
        });
        A.removeClass("ui-dialog-content")
    }, getAjaxHtml: function (C) {
        var A = null;
        $.ajax({
            url: C, type: "GET", async: false, success: function (D) {
                A = D
            }
        });
        var B = $(A).find("#page_flag");
        if (B && B.val()) {
            A = null
        }
        return A
    }, initBannerPopup: function () {
        if ($(".popBannerList").length > 0) {
            var A = $.cookie("isBannerPopupIndex");
            var B = $.cookie("isBannerPopupLogin");
            $(".popBannerList").each(function () {
                var D = $(this);
                var E = D.find(".bannerPopup a img").attr("startTime");
                var F = D.find(".bannerPopup a img").attr("endTime");
                var C = E + "-" + F;
                if (index.vaildTime(C)) {
                    index.showPopBanner(A, B, D);
                    return false
                }
            })
        }
    }, initOmitNextStep: function () {
        $("#mobi").keydown(function () {
            clearTimeout(timeout);
            timeout = undefined
        }).keyup(function (B) {
            currUserType = 0;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                A()
            }, 1000)
        });
        $("#mobi").bind("paste", function (B) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                A()
            }, 1000)
        });
        function A() {
            var B = $.trim($("#mobi").val());
            if (B.length == 11 && common.isMobile(B)) {
                if (!loginClickFlag) {
                    return
                }
                $("#loginSubmit").click()
            }
        }
    }, showPopBanner: function (M, G, D) {
        var F = D.find("#isPop");
        var L = $(document).width();
        var I = D.find(".bannerPopup");
        var N = D.find(".bannerPopupBg");
        var J = D.find(".bannerPopupSmall");
        if ($.browser.chrome) {
            I.show({
                complete: function () {
                    I.css("left", (L - I.width()) / 2)
                }
            })
        } else {
            var H = I.show().width();
            I.css("left", (L - H) / 2)
        }
        if ($.browser.msie && $.browser.version == 6) {
            N.height($(document).height()).width($(document).width());
            $(window).scroll(function () {
                J.css({"bottom": "", "top": $(window).height() + $(window).scrollTop() - 5 - J.height()})
            })
        }
        if ((M == null && F.val() == "1")) {
            N.show();
            I.show();
            $.cookie("isBannerPopupIndex", "false");
            $.cookie("isBannerPopupLogin", "false", {path: "/kfcios"});
            setTimeout(function () {
                N.hide();
                I.hide();
                J.show()
            }, 6000)
        } else {
            N.hide();
            I.hide();
            J.show()
        }
        var C = I.find("a img");
        var K = C.attr("linkType");
        if (K == 1) {
            var A = $("#wowBarrelClassId").val();
            var B = httpHtmlPath + "/" + $("a[pid=" + C.attr("classId") + "]").attr("menuPath") + ".html";
            if (A == C.attr("classId")) {
                if (validIE6().indexOf("MSIE 6.0") > 0) {
                    C.parent("a").click(function () {
                        base.yumAlert(property.wowBarrelNoIE6)
                    });
                    C.parent("a").attr("href", "javascript:void(0);")
                } else {
                    C.parent("a").click(function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "WOW", "wt.msg", "wowBarrel_PopOut")
                        }
                        setTimeout(function () {
                            window.location.href = B
                        }, 50)
                    });
                    C.parent("a").attr({href: "javascript:void(0);"})
                }
            } else {
                C.parent("a").attr({href: B})
            }
        } else {
            if (K == 2) {
                var E = C.attr("linkedurl");
                if (E.indexOf("appIndex") >= 0) {
                    C.parent("a").attr({href: E})
                } else {
                    C.parent("a").attr({target: "_blank", href: E})
                }
            } else {
                C.parent("a").die().live("click", function () {
                    N.hide();
                    I.hide();
                    J.show()
                })
            }
        }
        J.live("click", function () {
            if ($.browser.msie && $.browser.version == 6) {
                N.height($(document).height()).width($(document).width())
            }
            N.show();
            I.show().css("left", ($(document).width() - I.width()) / 2);
            J.hide()
        });
        D.find(".bannerPopupBg,.closeBannerPopup").live("click", function () {
            N.hide();
            I.hide();
            J.show()
        })
    }, vaildTime: function (A) {
        var K = new Date();
        var D = K.getHours() * 100;
        var I = K.getMinutes();
        var G = parseInt(D) + parseInt(I);
        var B = A.split("-");
        var J = 0;
        var H = 0;
        for (var F = 0; F < B.length; F++) {
            var C = B[F].split(":");
            for (var E = 0; E < C.length; E++) {
                if (F == 0) {
                    if (E == 0) {
                        J += parseInt(C[E]) * 100
                    } else {
                        J += parseInt(C[E])
                    }
                } else {
                    if (E == 0) {
                        H += parseInt(C[E]) * 100
                    } else {
                        H += parseInt(C[E])
                    }
                }
            }
        }
        if (J > H) {
            if (J <= G && G <= 2359) {
                return true
            } else {
                if (0 <= G && G <= H) {
                    return true
                }
            }
        } else {
            if (J <= G && G <= H) {
                return true
            }
        }
        return false
    }
};
var KFC_dialog = function () {
    var B = function (D, E) {
        $(E).dialog({
            resizable: false,
            height: "auto",
            width: 582,
            draggable: false,
            fixed: false,
            dialogClass: D,
            position: {my: "center", at: "center", of: window, collision: "fit"},
            modal: true
        });
        $(E).removeClass("ui-dialog-content")
    };
    var A = function (D) {
        $(D).dialog("close")
    };
    var C = function (D) {
        var E = false;
        if (D) {
            E = true;
            $.cookie(yumCfg.myNotNeed, E, {expires: yumCfg.keep})
        } else {
            $.cookie(yumCfg.myNotNeed, E)
        }
    };
    return {close_dialog: A, show_dialog: B, myNotNeed: C}
}();
var KFC_Constant = {
    img: {
        prod_minus_icon: "/res/images/minus_icon_2.gif",
        prod_add_icon: "/res/images/add_icon_2.gif",
        no_pic: "no_pic.jpg",
        no_pic_en: "no_pic_en.jpg",
        cart_minus_icon: "/res/images/minus_icon.gif",
        cart_add_icon: "/res/images/add_icon.gif",
        cart_del_icon: "/res/images/delete_icon.gif",
        wordLink_hot: "/res/images/hot.png",
        wordLink_new: "/res/images/new.png",
        pop_minus_icon: "/res/images/minus_icon_3.gif",
        pop_add_icon: "/res/images/add_icon_3.gif",
        pop_close_icon: "/res/images/close_icon.png",
        pop_close_icon02: "/res/images/close02.png",
        pop_btn_Order: "/res/images/popup_btn_2.png",
        pop_btn_Order_en: "/res/images/en/popup_btn_2.png",
        pop_btn_noOrder: "/res/images/popup_btn_2_noOrder.png",
        pop_btn_noOrder_en: "/res/images/en/popup_btn_2_noOrder.png",
        pop_btn_notNeed: "/res/images/popup_btn_1.png",
        pop_btn_notNeed_en: "/res/images/en/popup_btn_1.png",
        pop_banner_close: "res/images/closeBtn.gif",
        pop_btn_timeArrived: "/res/images/pop_btn_timeArrived.png",
        pop_btn_timeArrived_en: "/res/images/en/pop_btn_timeArrived.png"
    }
};
function computationPrice(A) {
    return (A / 100).toFixed(1)
};