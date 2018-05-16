String.prototype.format = function (A) {
    return this.replace(/\{(\d+)\}/g, function (C, B) {
        return A[B]
    })
};
var noUsePromotionFlag = false;
var order = {
    init: function () {
        MidevDSP.loadDSPJs();
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderContent")
        }
        this.initActivity();
        this.doShowHide();
        this.initCookie();
        $(".prom_prods").data("showAll", false);
        $(".prom_prods").data("promShowIndex", 0);
        $(".jleft").live("click", function () {
            var A = $(".prom_prods").data("promShowIndex");
            if (undefined == A) {
                A = 0
            }
            if (0 < A) {
                A = Number(A) - 1;
                $(".prom_prods").data("promShowIndex", A);
                $(".cheap_products").each(function (B, C) {
                    $(C).removeClass("first_prom");
                    $(C).hide();
                    var D = $(C).attr("index");
                    if (D == A || D == A + 1 || D == A + 2) {
                        $(C).show();
                        if (D == A) {
                            $(C).addClass("first_prom")
                        }
                    }
                });
                $(".jright").show();
                if (0 == A) {
                    $(".jleft").hide()
                }
            }
        });
        $(".jright").live("click", function () {
            var A = $(".prom_prods").data("promShowIndex");
            if (undefined == A) {
                A = 0
            }
            if ($(".cheap_products").size() - 1 > A) {
                A = Number(A) + 1;
                $(".prom_prods").data("promShowIndex", A);
                $(".cheap_products").each(function (B, C) {
                    $(C).removeClass("first_prom");
                    $(C).hide();
                    var D = $(C).attr("index");
                    if (D == A || D == A + 1 || D == A + 2) {
                        $(C).show();
                        if (D == A) {
                            $(C).addClass("first_prom")
                        }
                    }
                });
                $(".jleft").show();
                if ($(".cheap_products").size() == A + 3) {
                    $(".jright").hide()
                }
            }
        });
        $(".gifr").live("click", function () {
            var A = $(this);
            var B = !$(".prom_prods").data("showAll");
            if (undefined == B) {
                B = false
            }
            $(".prom_prods").data("showAll", B);
            $(".cheap_products").each(function (C, D) {
                if (B) {
                    A.html(pageMessage.cart_less);
                    $(D).show();
                    $(D).removeClass("first_prom");
                    if (0 == C % 3) {
                        $(D).addClass("first_prom")
                    }
                    $(".jleft").hide();
                    $(".jright").hide()
                } else {
                    A.html(pageMessage.cart_more);
                    $(D).hide();
                    $(D).removeClass("first_prom");
                    if (3 > C) {
                        $(D).show();
                        if (0 == C) {
                            $(D).addClass("first_prom")
                        }
                    }
                    $(".jleft").hide();
                    $(".jright").show()
                }
            })
        })
    },
    initCookie: function () {
        if ($.cookie(yumCfg.orderFlag) == "true") {
            $.cookie(yumCfg.orderFlag, false, {path: "/"});
            window.location.href = requestContextPath + property.cart_url
        }
        $.cookie(yumCfg.payFlag, true, {path: "/"})
    },
    orderElement: {
        orderItemRows: $(".food_row"),
        doMinus: $(".doMinus"),
        doPlus: $(".doPlus"),
        doCancel: $(".oiCancel"),
        clearProduct: $("#clearProduct")
    },
    doShowHide: function () {
        $(".open_btn,.close_btn").live("click", function () {
            $(this).parent().parent().next().toggle();
            if ($(this).html() == pageMessage.cart_expand) {
                $(this).html(pageMessage.cart_retract).addClass("close_btn")
            } else {
                $(this).html(pageMessage.cart_expand).removeClass("close_btn")
            }
        })
    },
    initActivity: function () {
        $(".step1").live("click", this.backToShoppingCart());
        $("#step_pay").click(function () {
            var A = 0;
            $(".prom_prods").find(".pro_number_input2:visible").each(function () {
                A = A + parseInt($(this).val())
            });
            if (A > 0) {
                base.yumNextProConfirm(property.chosePromotion, order.nextStep)
            } else {
                order.nextStep()
            }
        });
        order.orderElement.doMinus.live("click", function () {
            order.doMinusEvent($(this))
        });
        order.orderElement.doPlus.live("click", function () {
            order.doPlusEvent($(this))
        });
        order.orderElement.doCancel.live("click", function () {
            order.doCancelEvent($(this))
        });
        order.orderElement.clearProduct.live("click", function () {
            order.doClearProductEvent($(this))
        })
    },
    backToShoppingCart: function () {
        return function () {
            $(".coupon_code_input").val("");
            base.setAction("continueShopping.action")
        }
    },
    nextStep: function () {
        var me = this;
        var validFlag = true;
        judgePromotion(function () {
            $.cookie(yumCfg.payFlag, false, {path: "/"});
            var $productIds = $(".food_row");
            var $promotions = $(".sct_row");
            var productIds = [];
            $.each($productIds, function (index, element) {
                if ($(element).attr("productid")) {
                    productIds.push($(element).attr("productid"))
                }
            });
            $.each($promotions, function (index, element) {
                if ($(element).attr("productid")) {
                    productIds.push($(element).attr("productid"))
                }
            });
            MidevDSP.cartDSP(productIds.toString());
            $(".coupon_code_input").val("");
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {},
                url: requestContextPath + "/specialSystemIds.action",
                async: false,
                beforeSend: function (XMLHttpRequest) {
                },
                success: function (data, status) {
                    if (data.status && data.status.code) {
                        if (data.status.code == serviceCode.USER_NOT_LOGIN) {
                            base.yumAlertBack(property.userNotFound, function () {
                                base.loginExit(function () {
                                    base.setActionHttps("orderLogin.action")
                                })
                            });
                            validFlag = false
                        } else {
                            if (data.status.code == 5666) {
                                validFlag = false;
                                base.yumMenuAlert(property.orderSmallChange, function () {
                                    base.setAction("continueShopping.action")
                                })
                            } else {
                                if (data.status.code == 60007) {
                                    validFlag = false;
                                    base.yumMenuAlert(property.orderLessThanTHIRTYNINE.format([data.status.message]), function () {
                                        base.setAction("continueShopping.action")
                                    })
                                }
                            }
                        }
                    }
                }
            });
            if (!validFlag) {
                return
            }
            $.ajax({
                type: "POST",
                dataType: "json",
                data: {},
                url: requestContextPath + "/vaildOrderingTime.action",
                async: false,
                beforeSend: function (XMLHttpRequest) {
                },
                success: function (data, status) {
                    if (data.status && data.status.code) {
                        if (data.status.code == serviceCode.USER_NOT_LOGIN) {
                            base.yumAlertBack(property.userNotFound, function () {
                                base.loginExit(function () {
                                    base.setActionHttps("orderLogin.action")
                                })
                            });
                            return
                        } else {
                            if (data.status.code == 10015) {
                                base.yumAlertBack(codeMessage.limitExceeded, function () {
                                    base.setAction("continueShopping.action")
                                });
                                return
                            } else {
                                if (data.status.code == 10024) {
                                    base.yumAlertBack(codeMessage.limitExceeded, function () {
                                        base.setAction("continueShopping.action")
                                    });
                                    return
                                }
                            }
                        }
                    } else {
                        if (data.invaildText) {
                            if (data.invaildText == "storeClosed" || (data.invaildCode && data.invaildCode == serviceCode.STORE_CLOSED)) {
                                base.yumAlertBack(property.storeClose, function () {
                                    base.setAction("returnCustomer.action")
                                });
                                return
                            }
                            if (data.isInvaildTimeFlag) {
                                if (data.invaildCode == 2) {
                                    base.yumAlertBack(property.WarningCode_2, function () {
                                        window.location.href = requestContextPath + "/cart.action"
                                    })
                                } else {
                                    if (data.invaildCode != null) {
                                        base.yumAlertBack(eval("codeMessage.error" + data.invaildCode), function () {
                                            base.setAction("continueShopping.action")
                                        })
                                    } else {
                                        if (data.invaildText != null) {
                                            base.yumAlertBack(data.invaildText, function () {
                                                base.setAction("continueShopping.action")
                                            })
                                        }
                                    }
                                }
                            } else {
                                if (data.invaildCode != null) {
                                    base.yumAlertBack(eval("codeMessage.error" + data.invaildCode), function () {
                                        base.setAction("pay.action?brower_id=" + window.brower_id)
                                    })
                                } else {
                                    if (data.invaildText != null) {
                                        base.yumAlertBack(data.invaildText, function () {
                                            base.setAction("pay.action?brower_id=" + window.brower_id)
                                        })
                                    }
                                }
                            }
                        } else {
                            base.setAction("pay.action?brower_id=" + window.brower_id)
                        }
                    }
                }
            })
        })
    },
    doMinusEvent: function (H) {
        var E = H;
        var D = E.parents("tr").attr("objectid");
        var F = E.parents("tr").attr("productId");
        var B = E.parents("tr").attr("index");
        var G = parseInt(E.next().val());
        var C = $(E).children();
        var A = C.attr("src");
        G = G - 1;
        if (G < 1) {
            return
        } else {
            if (G == 1) {
                A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_2_dis.gif";
                C.attr("src", A);
                $(E).css("cursor", "default")
            } else {
                A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_2.gif";
                C.attr("src", A);
                $(E).css("cursor", "auto")
            }
        }
        base.yumOpenLoading();
        setTimeout(function () {
            order.modifyOrderItemEvent(D, F, G, B, true)
        }, 500)
    },
    doPlusEvent: function (H) {
        var E = H;
        var D = E.parents("tr").attr("objectid");
        var F = E.parents("tr").attr("productId");
        var B = E.parents("tr").attr("index");
        var G = parseInt(E.prev().val());
        var C = $(E).children();
        var A = C.attr("src");
        G = G + 1;
        if (G > 99) {
            return
        } else {
            if (G == 99) {
                A = A.substring(0, A.lastIndexOf("/")) + "/add_icon._2_dis.gif";
                C.attr("src", A);
                $(E).css("cursor", "default")
            } else {
                A = A.substring(0, A.lastIndexOf("/")) + "/add_icon._2.gif";
                C.attr("src", A);
                $(E).css("cursor", "auto")
            }
        }
        base.yumOpenLoading();
        setTimeout(function () {
            order.modifyOrderItemEvent(D, F, G, B)
        }, 500)
    },
    doCancelEvent: function (A) {
        var D = A;
        var C = D.parents("tr").attr("objectid");
        var B = D.parents("tr").attr("productId");
        var E = D.parents("tr").attr("index");
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "cancelAlert1")
        }
        base.yumConfirm(property.delOrderItem, function () {
            base.yumOpenLoading();
            setTimeout(function () {
                order.modifyOrderItemEvent(C, B, 0, E)
            }, 500);
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "cancelConfirm1")
            }
        })
    },
    doClearProductEvent: function (A) {
        base.yumConfirm(property.delAllOrderItem, function () {
            base.setAction("reshopping.action")
        })
    },
    modifyOrderItemEvent: function (C, B, A, D, F) {
        var E = 1;
        $.ajax({
            type: "POST",
            data: {orderItemId: C, productId: B, quantity: A, objectId: D},
            url: requestContextPath + "/modifyOrder.action",
            async: false,
            beforeSend: function (G) {
            },
            success: function (H, G) {
                if (H.code && H.code == 10014) {
                    base.yumAlertBack(property.userNotFound, function () {
                        base.setActionHttps("orderLogin.action")
                    });
                    return
                }
                if (H.code) {
                    error.yumAlertError(H.code)
                } else {
                    $("#order_promotion").html("");
                    $("#order_promotion").append(H);
                    if (F && reduceItemFlag) {
                        base.yumAlert(property.reduceItemClearProm)
                    }
                }
                base.yumCloseLoading()
            }
        })
    }
};
function judgePromotion(A) {
    var C = 0;
    var B = "";
    $("input[name='promotion.msgType']").each(function () {
        C = $(this).val();
        B = $(this).prev("input[name='promotion.msg']").val();
        if (0 != C) {
            return false
        }
    });
    if (1 == C) {
        base.yumNextProConfirm(B, function () {
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "next")
            }
            A.call()
        }, function () {
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "chpromootion")
            }
        })
    } else {
        if (2 == C) {
            if (!noUsePromotionFlag) {
                NoUsePromotionDialog.init()
            } else {
                A.call()
            }
        } else {
            A.call()
        }
    }
}
function showMore() {
    $(".youhui1").live("click", function () {
        $(this).hide().prev().show()
    })
}
function showYouhui() {
    $(".coupon_code_table").toggle();
    $(".coupon_code_input").focus()
}
function hideYouHui() {
    if ($("#youhui2").css("display") == "block") {
        $("#youhui2").hide();
        $("#youhui1").show()
    }
    $("#youhui0").css("display", "");
    $("#youhui3").css("display", "")
}
var UsePromoCode = function () {
    this.init = function () {
        this.initBtn();
        this.initBtnAction();
        getGeetestLib.init(this.doUsePromoCodeAction)
    };
    this.initBtn = function () {
        this.doUsePromoCode = $(".use_promo_code");
        this.toCouponList = $(".toCouponList")
    };
    this.initBtnAction = function () {
        this.doUsePromoCode.click(this.doUsePromoCodeAction);
        this.toCouponList.click(this.toCouponListAction)
    };
    this.toCouponListAction = function () {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "我的优惠券", "wt.msg", "确认页面我的优惠券超链接")
        }
        base.setAction("customerCenter.action?toPage=card")
    };
    this.doUsePromoCodeAction = function () {
        var B = $.trim($(".coupon_code_input").val());
        var C = {couponCode: B, event_id: event_id};
        event_id = null;
        if (showGeeCaptcha && captchaObject != null) {
            var A = captchaObject.getValidate();
            if (A) {
                C["geetest_challenge"] = A.geetest_challenge;
                C["geetest_validate"] = A.geetest_validate;
                C["geetest_seccode"] = A.geetest_seccode
            }
        }
        if (riskControlKey) {
            C.brower_id = window.brower_id
        }
        if (common.isStr2(B, 1)) {
            base.yumAlert(property.invaildStringError);
            $(".coupon_code_input").val("");
            return
        }
        if (B == "" || B == property.promotionCodeText) {
            base.yumAlert(property.promotionCodeNotNull)
        } else {
            if (validateIllegalCharStr(B)) {
                base.yumAlert(property.promotionCodeNotFound);
                $(".coupon_code_input").val("")
            } else {
                base.yumOpenLoading();
                setTimeout(function () {
                    $.ajax({
                        url: requestContextPath + "/usePromoCode.action",
                        type: "post",
                        data: C,
                        async: false,
                        beforeSend: function (D) {
                        },
                        success: function (H, G) {
                            if (H.code) {
                                if (H.code == 10023) {
                                    var D = $("#userPhone").val();
                                    var E = $("#userEmail").val();
                                    var F = {"flag": true, "phone": D, "email": E};
                                    validateForm.checkMobiOrEmail(null, F, function () {
                                        var I = "/resetLimitTimes.action";
                                        validateForm.KFC_POST({
                                            action: I, data: {}, callback: function (J) {
                                                if (J.code == serviceCode.SUC_CODE) {
                                                    $('a[role="button"]:visible').click();
                                                    base.yumTrackAlert(property.successfulApplicant)
                                                } else {
                                                    error.yumAlertError(J.code)
                                                }
                                            }
                                        })
                                    });
                                    base.yumCloseLoading();
                                    return
                                } else {
                                    if (H.code == 10014) {
                                        base.yumAlertBack(property.userNotFound, function () {
                                            base.setActionHttps("orderLogin.action")
                                        });
                                        base.yumCloseLoading();
                                        return
                                    } else {
                                        if (H.code == serviceCode.RISK_CONTROL_CODE_80001) {
                                            event_id = H.message;
                                            getGeetestLib.showCaptcha();
                                            base.yumCloseLoading();
                                            return
                                        } else {
                                            if (H.code == serviceCode.VERIFY_CODE_WRONG) {
                                                base.yumAlertBack(codeMessage.error70000, function () {
                                                    location.reload()
                                                })
                                            } else {
                                                if (H.code == serviceCode.RISK_CONTROL_CODE_89998) {
                                                    base.yumAlertUserExit(codeMessage.error89998, function () {
                                                        base.loginExit(function () {
                                                            base.setActionHttps("orderLogin.action")
                                                        })
                                                    });
                                                    base.yumCloseLoading();
                                                    return
                                                } else {
                                                    if (H.code == serviceCode.RISK_CONTROL_CODE_89999) {
                                                        base.yumAlertBack(property.forbidden_useCoupon);
                                                        base.yumCloseLoading();
                                                        return
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                error.yumAlertError(H.code);
                                $(".coupon_code_input").val("")
                            } else {
                                $("#order_promotion").html("");
                                $("#order_promotion").append(H)
                            }
                            base.yumCloseLoading()
                        }
                    })
                }, 500)
            }
        }
    }
};
var Promotion1 = function () {
    var B = $("#promo_btn_1");
    var C = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"","isMeal":0}';
    var A = '{"productId":"","count":"","items":[{0}]}';
    B.live("click", function () {
        var E = $(this).attr("name");
        var D = 1;
        var F = A.format([C.format([D, E])]);
        base.yumOpenLoading();
        setTimeout(function () {
            $.ajax({
                url: requestContextPath + "/modifyPromo.action",
                type: "post",
                data: {jsonStr: F},
                async: false,
                beforeSend: function (G) {
                },
                success: function (H, G) {
                    if (H.code && H.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (H.code && H.code == 306) {
                        base.yumAlert(property.ErrorCode_306);
                        base.yumCloseLoading();
                        return
                    }
                    if (H.message) {
                        base.yumAlert(H.message)
                    } else {
                        $("#order_promotion").html("");
                        $("#order_promotion").append(H)
                    }
                    base.yumCloseLoading()
                }
            })
        }, 500)
    })
}();
var NoUsePromotion1 = function () {
    var D = arguments[0];
    var B = D.find("#no_use_promo_btn_1");
    var C = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"","isMeal":0}';
    var A = '{"productId":"","count":"","items":[{0}]}';
    B.live("click", function () {
        var F = $(this).attr("name");
        var E = 1;
        var G = A.format([C.format([E, F])]);
        base.yumOpenLoading();
        setTimeout(function () {
            $.ajax({
                url: requestContextPath + "/modifyPromo.action",
                type: "post",
                data: {jsonStr: G},
                async: false,
                beforeSend: function (H) {
                },
                success: function (I, H) {
                    $("#noUsePromotion").dialog("close");
                    $("#noUsePromotion").remove();
                    if (I.code && I.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (I.code && I.code == 306) {
                        base.yumAlert(property.ErrorCode_306);
                        base.yumCloseLoading();
                        return
                    }
                    if (I.message) {
                        base.yumAlert(I.message)
                    } else {
                        $("#order_promotion").html("");
                        $("#order_promotion").append(I)
                    }
                    base.yumCloseLoading();
                    NoUsePromotionDialog.init()
                }
            })
        }, 500)
    })
};
var Promotion2 = function () {
    var B = arguments[0];
    var A = B.find("ul").attr("maxnum");
    var E = 0;
    var I = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"{2}","isMeal":0}';
    var D = '{"productId":"","count":"","items":[{0}]}';
    var J = B.find(".promDoMinus2");
    var H = B.find(".promDoPlus2");
    var G = B.find(".promo_btn_2");
    var L = B.find(".yuihuiclose");
    J.click(C);
    H.click(F);
    G.click(K);
    L.die().live("click", function () {
        M($(this))
    });
    function C() {
        var P = $(this).siblings("input");
        var O = P.val();
        if (O == 0) {
            return
        }
        P.val(--O);
        E--;
        var N = $(this).children().attr("src");
        if (0 == O) {
            N = N.substring(0, N.lastIndexOf("/")) + "/minus_icon_pro_dis.gif";
            $(this).children().attr("src", N);
            $(this).css("cursor", "default")
        } else {
            N = N.substring(0, N.lastIndexOf("/")) + "/minus_icon_pro.gif";
            $(this).children().attr("src", N);
            $(this).css("cursor", "auto")
        }
        currentNum = parseInt($(this).closest("ul").attr("currentnum"));
        H.each(function (R, Q) {
            var S = $(this).children().attr("src");
            if (E >= (A - currentNum)) {
                S = S.substring(0, S.lastIndexOf("/")) + "/plus_icon_pro_dis.gif";
                $(this).children().attr("src", S);
                $(this).css("cursor", "default")
            } else {
                S = S.substring(0, S.lastIndexOf("/")) + "/plus_icon_pro.gif";
                $(this).children().attr("src", S);
                $(this).css("cursor", "auto")
            }
        })
    }

    function F() {
        var P = $(this).parents("li").attr("maxitemnum");
        var O = $(this).siblings("input").val();
        if (P - O < 1) {
            return
        }
        currentNum = parseInt($(this).closest("ul").attr("currentnum"));
        if (E >= (A - currentNum)) {
            return
        }
        var R = $(this).siblings("input");
        var Q = R.val();
        R.val(++Q);
        E++;
        var S = $(this).siblings(".promDoMinus2");
        var N = S.children().attr("src");
        if (0 == E) {
            N = N.substring(0, N.lastIndexOf("/")) + "/minus_icon_pro_dis.gif";
            S.children().attr("src", N);
            S.css("cursor", "default")
        } else {
            N = N.substring(0, N.lastIndexOf("/")) + "/minus_icon_pro.gif";
            S.children().attr("src", N);
            S.css("cursor", "auto")
        }
        H.each(function (U, T) {
            var V = $(T).children().attr("src");
            if (E >= (A - currentNum)) {
                V = V.substring(0, V.lastIndexOf("/")) + "/plus_icon_pro_dis.gif";
                $(T).children().attr("src", V);
                $(T).css("cursor", "default")
            } else {
                V = V.substring(0, V.lastIndexOf("/")) + "/plus_icon_pro.gif";
                $(T).children().attr("src", V);
                $(T).css("cursor", "auto")
            }
        })
    }

    function M(N) {
        var O = N.parents(".cheap_products");
        var P = 0;
        O.find(".pro_number_input2").each(function () {
            P = P + parseInt($(this).val())
        });
        if (P) {
            base.yumCloseProConfirm(property.chosePromotion, function () {
                O.find(".promo_btn_2, #promo_btn_3").click();
                O.hide().next().show()
            }, function () {
                O.find(".pro_number_input2").each(function () {
                    $(this).val("0");
                    E = 0
                });
                O.hide().next().show()
            })
        } else {
            O.hide().next().show()
        }
    }

    function K() {
        var O = $(this).closest("div").find("li");
        var P = "";
        var N = [];
        O.each(function () {
            var Q = $(this).find("input").val();
            if (Q != 0) {
                var S = $(this).attr("pid");
                var R = $(this).attr("pitid");
                N.push(I.format([Q, S, R]))
            }
        });
        if (N.length == 0) {
            base.yumAlert(property.infoMinOrderItemNum);
            return
        }
        P = D.format([N.join(",")]);
        base.yumOpenLoading();
        setTimeout(function () {
            $.ajax({
                url: requestContextPath + "/modifyPromo.action",
                type: "post",
                data: {jsonStr: P},
                async: false,
                beforeSend: function (Q) {
                },
                success: function (R, Q) {
                    if (R.code && R.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (R.code && R.code == 306) {
                        base.yumAlert(property.ErrorCode_306);
                        base.yumCloseLoading();
                        return
                    }
                    if (R.message) {
                        base.yumAlert(R.message)
                    } else {
                        $("#order_promotion").html("");
                        $("#order_promotion").append(R);
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "promotion", "wt.pn_sk", $("#promotionProductionsId").val())
                        }
                    }
                    base.yumCloseLoading()
                }
            })
        }, 500)
    }

    E = (function () {
        var N = 0;
        J.siblings("input").each(function () {
            N += parseInt(this.value)
        });
        return N
    })()
};
var NoUsePromotion2 = function () {
    var B = arguments[0];
    var A = B.find("ul.nupi").attr("maxnum");
    var D = 0;
    var H = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"{2}","isMeal":0}';
    var C = '{"productId":"","count":"","items":[{0}]}';
    var I = B.find(".promDoMinus2");
    var G = B.find(".promDoPlus2");
    var F = B.find(".order_prod");
    I.click(K);
    G.click(E);
    F.click(J);
    function K() {
        var N = $(this).siblings("input");
        var M = N.val();
        if (M == 0) {
            return
        }
        N.val(--M);
        D--;
        var L = $(this).children().attr("src");
        if (0 == M) {
            L = L.substring(0, L.lastIndexOf("/")) + "/minus_icon_2_dis.gif";
            $(this).children().attr("src", L);
            $(this).css("cursor", "default")
        } else {
            L = L.substring(0, L.lastIndexOf("/")) + "/minus_icon_2.gif";
            $(this).children().attr("src", L);
            $(this).css("cursor", "auto")
        }
        currentNum = parseInt($(this).closest("ul.nupi").attr("currentnum"));
        G.each(function (P, O) {
            var Q = $(this).children().attr("src");
            if (D >= (A - currentNum)) {
                Q = Q.substring(0, Q.lastIndexOf("/")) + "/add_icon._2_dis.gif";
                $(this).children().attr("src", Q);
                $(this).css("cursor", "default")
            } else {
                Q = Q.substring(0, Q.lastIndexOf("/")) + "/add_icon._2.gif";
                $(this).children().attr("src", Q);
                $(this).css("cursor", "auto")
            }
        })
    }

    function E() {
        currentNum = parseInt($(this).closest("ul.nupi").attr("currentnum"));
        if (D >= (A - currentNum)) {
            if (D == 1) {
                return
            }
            return
        }
        var N = $(this).siblings("input");
        var M = N.val();
        N.val(++M);
        D++;
        var O = $(this).siblings(".promDoMinus2");
        var L = O.children().attr("src");
        if (0 == D) {
            L = L.substring(0, L.lastIndexOf("/")) + "/minus_icon_2_dis.gif";
            O.children().attr("src", L);
            O.css("cursor", "default")
        } else {
            L = L.substring(0, L.lastIndexOf("/")) + "/minus_icon_2.gif";
            O.children().attr("src", L);
            O.css("cursor", "auto")
        }
        G.each(function (Q, P) {
            var R = $(this).children().attr("src");
            if (D >= (A - currentNum)) {
                R = R.substring(0, R.lastIndexOf("/")) + "/add_icon._2_dis.gif";
                $(this).children().attr("src", R);
                $(this).css("cursor", "default")
            } else {
                R = R.substring(0, R.lastIndexOf("/")) + "/add_icon._2.gif";
                $(this).children().attr("src", R);
                $(this).css("cursor", "auto")
            }
        })
    }

    function J() {
        var M = $(this).closest("tr").find("ul.nupi").find("li");
        var N = "";
        var L = [];
        M.each(function () {
            var O = $(this).find("input").val();
            if (O != 0) {
                var Q = $(this).attr("pid");
                var P = $(this).attr("pitid");
                L.push(H.format([O, Q, P]))
            }
        });
        if (L.length == 0) {
            base.yumAlert(property.infoMinOrderItemNum);
            return
        }
        N = C.format([L.join(",")]);
        base.yumOpenLoading();
        setTimeout(function () {
            $.ajax({
                url: requestContextPath + "/modifyPromo.action",
                type: "post",
                data: {jsonStr: N},
                async: false,
                beforeSend: function (O) {
                },
                success: function (P, O) {
                    $("#noUsePromotion").dialog("close");
                    $("#noUsePromotion").remove();
                    if (P.code && P.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (P.code && P.code == 306) {
                        base.yumAlert(property.ErrorCode_306);
                        base.yumCloseLoading();
                        return
                    }
                    if (P.message) {
                        base.yumAlert(P.message)
                    } else {
                        $("#order_promotion").html("");
                        $("#order_promotion").append(P);
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "promotion", "wt.pn_sk", $("#promotionProductionsId").val())
                        }
                    }
                    base.yumCloseLoading();
                    NoUsePromotionDialog.init()
                }
            })
        }, 500)
    }

    D = (function () {
        var L = 0;
        I.siblings("input").each(function () {
            L += parseInt(this.value)
        });
        return L
    })()
};
var Promotion3 = function () {
    this.init = function () {
        this.initBtn();
        this.initBtnAction()
    };
    this.initBtn = function () {
        this.doMinus = $(".promDoMinus3");
        this.doPlus = $(".promDoPlus3");
        this.btn = $("#promo_btn_3")
    };
    this.initBtnAction = function () {
        this.doMinus.click(this.doMinusAction);
        this.doPlus.click(this.doPlusAction);
        this.btn.click(this.btnAction)
    };
    this.doMinusAction = function () {
        var C = $(this).siblings("input");
        var B = C.val();
        if (B == 0) {
            return
        }
        C.val(--B);
        var A = $(this).children().attr("src");
        if (0 == B) {
            A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_pro_dis.gif";
            $(this).children().attr("src", A);
            $(this).css("cursor", "default")
        } else {
            A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_pro.gif";
            $(this).children().attr("src", A);
            $(this).css("cursor", "auto")
        }
        var D = $(this).siblings(".promDoPlus3");
        var E = D.children().attr("src");
        if (parseInt(--B) >= 99) {
            E = E.substring(0, E.lastIndexOf("/")) + "/plus_icon_pro_dis.gif";
            D.children().attr("src", E);
            D.css("cursor", "default")
        } else {
            E = E.substring(0, E.lastIndexOf("/")) + "/plus_icon_pro.gif";
            D.children().attr("src", E);
            D.css("cursor", "auto")
        }
    };
    this.doPlusAction = function () {
        var C = $(this).siblings("input");
        var B = C.val();
        if (parseInt(B) >= 99) {
            return
        }
        C.val(++B);
        var D = $(this).siblings(".promDoMinus3");
        var A = D.children().attr("src");
        if (0 == B) {
            A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_pro_dis.gif";
            D.children().attr("src", A);
            D.css("cursor", "default")
        } else {
            A = A.substring(0, A.lastIndexOf("/")) + "/minus_icon_pro.gif";
            D.children().attr("src", A);
            D.css("cursor", "auto")
        }
        var E = $(this).children().attr("src");
        if (parseInt(B) >= 99) {
            E = E.substring(0, E.lastIndexOf("/")) + "/plus_icon_pro_dis.gif";
            $(this).children().attr("src", E);
            $(this).css("cursor", "default")
        } else {
            E = E.substring(0, E.lastIndexOf("/")) + "/plus_icon_pro.gif";
            $(this).children().attr("src", E);
            $(this).css("cursor", "auto")
        }
    };
    this.btnAction = function () {
        var A = $(this).closest("div").find("input");
        var C = "";
        var B = [];
        A.each(function () {
            var D = $(this).val();
            if (D != 0) {
                var E = $(this).attr("name");
                B.push(E + "_" + D)
            }
        });
        if (B.length == 0) {
            base.yumAlert(property.infoMinOrderItemNum);
            return
        }
        C = B.join(",");
        base.yumOpenLoading();
        setTimeout(function () {
            $.ajax({
                url: requestContextPath + "/modifyOrder.action",
                type: "post",
                data: {collectProducts: C},
                dataType: "html",
                async: false,
                beforeSend: function (D) {
                },
                success: function (E, D) {
                    if (E.code && E.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (E.message) {
                        base.yumAlert(E.message)
                    } else {
                        $("#order_promotion").html("");
                        $("#order_promotion").append(E)
                    }
                    base.yumCloseLoading()
                }
            })
        }, 500)
    }
};
var PromotionUtil = {
    init: function () {
        var A = new Promotion3();
        var B = new UsePromoCode();
        A.init();
        B.init();
        $(".code_1").hover(function () {
            $(".coupon_explain").show()
        }, function () {
            $(".coupon_explain").hide()
        });
        $(".typeB").each(function () {
            new Promotion2($(this))
        })
    }
};
var NoUsePromotionDialog = {
    init: function () {
        if (0 != $(".noUsePromProd").length) {
            var A = $("#noUsePromotionHtml").html();
            $("<div id='noUsePromotion' class='noUsePromotion' style='overflow: hidden;'>").append(A).dialog({
                resizable: false,
                height: "auto",
                width: 980,
                draggable: false,
                fixed: false,
                position: {my: "center", at: "center", of: window, collision: "fit"},
                modal: true
            });
            $(".noUseTypeA").each(function () {
                new NoUsePromotion1($(this))
            });
            $(".noUseTypeB").each(function () {
                new NoUsePromotion2($(this))
            });
            $("#no_thanks").live("click", function () {
                noUsePromotionFlag = true;
                $("#noUsePromotion").dialog("close");
                $("#noUsePromotion").remove
            });
            $("#noUsePromotion").find(".close04").live("click", function () {
                noUsePromotionFlag = true;
                $("#noUsePromotion").dialog("close");
                $("#noUsePromotion").remove
            })
        }
    }
};
function validateIllegalCharStr(F, A) {
    var C = "";
    if (F) {
        var D = new Array("<script>", "script", "src", "select", "update", "delete", "insert", "<", ">", "%", "&", ":", "|", "'", "/", '"', "style");
        for (var B = 0, E = D.length; B < E; B++) {
            if (F.indexOf(D[B]) >= 0) {
                var G = $.trim(A);
                if (G) {
                    C = "“" + G.replace(/[?:？：>]/g, "") + "”" + property.containIllegalChar
                } else {
                    C = property.containIllegalChar
                }
                break
            }
        }
    }
    return C
}
var captCha = {
    second: 0,
    timeOut: null,
    smsMobileNum: null,
    createCaptChaHtml: function (A, C) {
        var B = null;
        B = $(captCha.htmlTemp.format([captCha.pt]));
        if (captCha.second > 0) {
            if (!captCha.timeOut) {
                captCha.countDown()
            }
        } else {
            B.find("#getSmsCode").show()
        }
        B.find("#verificationCode").click(function () {
            var D = $("#verificationCode").find("img");
            captCha.refreshCode(D)
        });
        B.find("#verificationCodeRefesh").click(function () {
            var D = $("#verificationCode").find("img");
            captCha.refreshCode(D)
        });
        B.find("#getSmsCode").click(function () {
            if ($(this).data("dis")) {
                return
            }
            var H = $(".pop_con input[name=code]");
            var J = $.trim(H[0].value);
            var E = $(".tipMessage");
            var K = $("input[name=mobile]");
            var G = $(this);
            var F = "/customerSmsCode.action";
            var D = {};
            if (K.size() > 0) {
                var I = K.val();
                if (I.indexOf("*") < 0) {
                    if (!I || !common.isMobile(I)) {
                        E.text(property.mobiNotNull);
                        return
                    }
                    D.mobileNum = I
                }
                captCha.smsMobileNum = I
            }
            if (J == "" || J == property.inputImageCode) {
                base.yumAlert(property.inputImageCode);
                return
            }
            D.imageCode = J;
            captCha.getSmsCaptcha(G, D, F, E)
        });
        base.yumAlertBindPhoneVaild(B, function () {
            var F = $(".pop_con input[name=code]");
            var I = $.trim(F[1].value);
            var G = $(".tipMessage");
            var J = $("input[name=mobile]");
            var E = {};
            if (J.size() > 0) {
                var H = J.val();
                if (H.indexOf("*") < 0) {
                    if (!H || !common.isMobile(H)) {
                        G.text(property.mobiNotNull);
                        return
                    }
                    E.mobileNum = H
                }
            }
            if (I == "" || I == property.inputCode) {
                G.text(property.inputCode);
                return
            }
            E.messageCode = I;
            var D = "/resetLimitTimes.action";
            captCha.KFC_POST(D, E, function (K) {
                if (K.code == serviceCode.SUC_CODE) {
                    $('a[role="button"]:visible').click();
                    base.yumTrackAlert(property.successfulApplicant)
                } else {
                    if (K.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        G.text(property.EorInputCode)
                    } else {
                        if (K.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                            G.text(property.EorNmuCode)
                        } else {
                            G.text(property.serviceUnknown)
                        }
                    }
                }
            })
        });
        captCha.inputFocus();
        captCha.inputBlur();
        $("verificationCode").click();
        if (captCha.smsMobileNum) {
            captCha.initInput(captCha.smsMobileNum)
        } else {
            captCha.initInput(A)
        }
    },
    bindPhone: '<div class="textinput" style="text-align: left;color:#AAA"><span style="margin-left: 5px;">{0}</span></div>',
    pt: '<div class="textinput"><input name="mobile" type="text" tip="mobileTip"></div>',
    htmlTemp: '<div class="pop_con"><div class="newps newps-js updataPs"><div class="newpsline" id="phoneNmu">{0}</div><div class="newpsline"><div class="textinput"><input name="code" type="text" tip="inputImageCode"></div><div class="radio_edit"><span class="radio_edit_img" id="verificationCode"><img style="cursor: pointer;"src="' + requestContextPath + "/code.jsp?random=" + new Date().getTime() + '"></span><span class="radio_edit_text" id="verificationCodeRefesh"><a flag="updataPs" href="javascript:void(0);">' + property.plsRefresh1 + '</a></span></div></div><div class="newpsline"><div class="textinput"><input name="code" type="text" tip="inputCode"></div><div class="radio_edit"><span class="radio_edit_text"><a href="javascript:void(0);" id="getSmsCode" style="display: none;">' + pageMessage.clickphonecode + '</a></span></div></div></div><div class="newpsline tipMessage" style="color: red;text-align: left;"></div></div></div>',
    refreshCode: function (B) {
        var A = requestContextPath;
        if (A.indexOf("/en") > 0) {
            A = A.replace(/\/en/, "/")
        }
        setTimeout(function () {
            B.attr("src", A + "/code.jsp?random=" + new Date().getTime())
        }, 5)
    },
    countDown: function () {
        var A = $("#getSmsCode");
        if (captCha.second >= 0) {
            if (typeof buttonDefaultValue === "undefined") {
                buttonDefaultValue = A.text()
            }
            A.data("dis", true);
            A.show().text(property.stormingBack + "(" + captCha.second + pageMessage.secs + ")");
            captCha.second--;
            captCha.timeOut = setTimeout(function () {
                captCha.countDown(A, captCha.second)
            }, 1000)
        } else {
            A.data("dis", false);
            A.text(property.stormingBack);
            clearTimeout(captCha.timeOut);
            captCha.timeOut = null
        }
    },
    getSmsCaptcha: function (B, D, A, C) {
        D = D || {};
        captCha.KFC_POST(A, D, function (E) {
            var G = $(B).parents(".newpsline").prev().find("input[name=code]");
            var F = $(B).parents(".newpsline").prev().find(".radio_edit_img img");
            G.val(property.inputImageCode);
            captCha.refreshCode(F);
            if (E.code == serviceCode.SUC_CODE) {
                if (captCha.second <= 0) {
                    captCha.second = 60
                }
                if (!captCha.timeOut) {
                    captCha.countDown()
                }
            } else {
                if (E.code == serviceCode.CAPTCHA_OUTTIME1) {
                    C.text(property.sendSMSMore)
                } else {
                    if (E.code == serviceCode.CAPTCHA_OUTTIME2) {
                        C.text(property.sendSMSMore2.replace("<br>", ""))
                    } else {
                        if (E.code == serviceCode.AUTH_CODE_UNCORRECT) {
                            base.yumTrackAlert(property.EorImageInputCode)
                        } else {
                            C.text(property.sendFailed)
                        }
                    }
                }
            }
        })
    },
    initInput: function (A) {
        $(".pop_con input").each(function () {
            var C = $(this);
            var B = C.attr("tip");
            C.val(property[B])
        });
        if (A) {
            $(".pop_con").find("input[name=mobile]").val(A).attr("isBind", "true")
        }
    },
    inputFocus: function () {
        $(".pop_con input").die("focus").live("focus", function () {
            var A = $(this);
            A.val("")
        })
    },
    inputBlur: function () {
        $(".pop_con input").die("blur").live("blur", function () {
            var B = $(this);
            var C = B.val();
            if ("" == C || null == C) {
                var A = B.attr("tip");
                B.val(property[A])
            }
        })
    },
    KFC_POST: function (A, C, B) {
        $.ajax({
            url: requestContextPath + "/" + A, data: C, type: "post", dataType: "json", beforeSend: function () {
                base.yumOpenLoading()
            }, success: function (D) {
                if (B && $.isFunction(B)) {
                    B(D)
                }
            }, complete: function (E, D) {
                base.yumCloseLoading()
            }, error: function () {
                base.yumTrackAlert(property.BadRequest)
            }
        })
    }
};
$(function () {
    order.init();
    showMore()
});