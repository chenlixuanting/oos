var _currentIclass = {};
var WOWInfo = {"cId": "", "pId": "", "clickType": ""};
var changeAddressFlag = false;
function computationPrice(A) {
    return (A / 100).toFixed(1)
}
function wlClick(B, A) {
    if (B == 2) {
        if (A.indexOf("appIndex") >= 0) {
            base.setAction("appIndex.action")
        } else {
            window.open(A, "", "")
        }
    } else {
        if (B == 1) {
            KFC_Comon.initContent(A)
        }
    }
}
var popBannerClose = true;
var isOldProcess = true;
var flexibleComboList = null;
var flexibleComboPromotionList = null;
var KFC_Comon = function () {
    var H = function (X) {
        var W = [];
        var V = {};
        for (var T = 0; T < X.length; T++) {
            var U = X[T];
            var S = typeof(U) + U;
            if (V[S] !== 1) {
                W.push(U);
                V[S] = 1
            }
        }
        return W
    };
    var M = function (U, V) {
        var T = KFC_Promotions.getPromotionVosById(U);
        if (!T) {
            return false
        }
        if (T.multiuse) {
            return true
        }
        var W = KFC_Promotions.getPromNumInCart(T) + 1;
        var S = KFC_Promotions.vaildPromQuantity(T, W, U, true);
        return S
    };
    var R = function (T, X) {
        _currentIclass.id = T;
        var V = $(".home_bg_mid");
        var U = $("#topFlag");
        var S = $("#rolling");
        var W = $("#popBannerTemp");
        $.ajax({
            url: requestContextPath + "/getMenuJson.action",
            type: "post",
            async: false,
            data: {classId: $.trim(T), topFlag: U.val()},
            dataType: "json",
            beforeSend: function () {
                base.yumOpenLoading()
            },
            success: function (Y) {
                if (Y) {
                    if (2 == Y.code) {
                        return
                    }
                    if (Y.status && Y.status.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    }
                    if (Y.status && Y.status.code == 50000) {
                        WOWInfo.cId = T;
                        WOWInfo.pId = Y.nMenuVo[0].productId;
                        WOWInfo.clickType = X
                    }
                    if (Y.nMenuVo && 0 == Y.nMenuVo.length) {
                        if ("Y" == $("#gotoBeforeLoginClass").val() && "Y" == $("#addBeforeLoginProduce").val()) {
                            KFC_Comon.initContent(KFC_Comon.getDefClassId())
                        }
                    }
                    flexibleComboList = Y.flexibleComboVo;
                    flexibleComboPromotionList = Y.flexibleComboPromotionVo;
                    KFC_GlobalVar.add(Y);
                    if (U.val() == "w1") {
                        N(V, Y)
                    } else {
                        if ("Y" == Y.carnivalMenu) {
                            L(V, Y)
                        } else {
                            if ("1" == Y.isSinglePage || "Y" == Y.isSinglePage) {
                                P(V, Y)
                            } else {
                                if ("2" == Y.isSinglePage) {
                                    flexibleComboMainPage.getMealDealMenu(V, Y);
                                    $.each(Y.menuPromVo, function (b, a) {
                                        KFC_Promotions.add(a)
                                    })
                                } else {
                                    O(V, Y)
                                }
                            }
                        }
                    }
                    if (Y.bannerPopup) {
                        Q(W, Y.bannerPopup)
                    }
                    if (!Y.hotlinkList) {
                        S.empty();
                        if (Y.wordlinkList) {
                            var Z = Y.httpWordLinkPath;
                            I(Y.wordlinkList, S, Z)
                        }
                    }
                }
                U.val("");
                KFC_Comon.initPopBanner();
                if ($.cookie(yumCfg.beforeLoginWow) == "1") {
                    $.cookie(yumCfg.beforeLoginWow, null, {path: "/kfcios"})
                }
            },
            error: function () {
                base.yumAlert(property.netError)
            },
            complete: function () {
                $(window).scrollTop(0);
                base.yumCloseLoading()
            }
        })
    };
    var C = function () {
        $("#rolling p").each(function (T, S) {
            $(S).live("click", function () {
                var U = $(S).attr("rtype");
                var W = $(S).attr("linkurl");
                var X = $(S).attr("linkcid");
                var V = "";
                if (U == 2) {
                    V = W
                } else {
                    if (U == 1) {
                        V = X
                    }
                }
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "首页超链接", "wt.msg", $(S).text())
                }
                wlClick(U, V)
            })
        })
    };
    var J = function () {
        $("#hotlink a").each(function (T, S) {
            $(S).live("click", function () {
                var U = $(S).attr("rtype");
                var W = $(S).attr("linkUrl");
                var X = $(S).attr("linkCid");
                var V = "";
                if (U == 2) {
                    V = W
                } else {
                    if (U == 1) {
                        V = X
                    }
                }
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "首页超链接", "wt.msg", $(S).text())
                }
                wlClick(U, V)
            })
        })
    };
    var I = function (U, S, T) {
        cleanSilder();
        $.each(U, function (W, V) {
            S.append(KFC_HTML.getWordLink({
                rType: V.relationType,
                cId: V.linkedClassId,
                linkCid: V.linkedClassId,
                linkUrl: T + V.linkedUrl,
                titleCn: V.descCn,
                titleEn: V.descEn,
                textCn: V.textCn,
                textEn: V.textEn,
                textType: V.textType
            }))
        });
        initSilder()
    };
    var Q = function (T, U) {
        T.empty();
        var S = null;
        KFC_Banner.empty();
        $.each(U, function (X, W) {
            var V = {
                id: W.id,
                imageUrl: W.imageUrl,
                linkedUrl: W.linkedUrl,
                classId: W.classId,
                linkType: W.linkType,
                smallPictureUrl: W.smallPictureUrl,
                isPopup: W.isPopup,
                title: $.localStr({cn: W.titleCn, en: W.titleEn}, 1)
            };
            S = KFC_HTML.getBannerPopTemp(V);
            KFC_Banner.add(W.id, S, W.isPopup, W.type);
            return false
        });
        T.append(S)
    };
    var N = function (T, W) {
        cleanBanner();
        T.empty();
        KFC_GlobalVar.add(W);
        var a = $('<p class="mt7px index_banner"/>');
        var b = $('<div class="kvContent" id="kvContent">');
        var V = $('<p class="mt7px sbanner"/>');
        var Y = 0;
        var U = 0;
        var X = 0;
        var Z = 0;
        $.each(W.bannerVoList, function (e, d) {
            if (d.type == 1) {
                Z = Z + 1
            }
            if (d.type == 1 && Z > 6) {
            } else {
                var c = KFC_HTML.getBannerTemp({
                    id: d.id,
                    imageUrl: d.imageUrl,
                    type: d.type,
                    position: d.position,
                    linkedUrl: d.linkedUrl,
                    classId: d.classId,
                    linkType: d.linkType,
                    title: $.localStr({cn: d.titleCn, en: d.titleEn}, 1),
                    bflag: Y,
                    rflag: U,
                    lflag: X,
                    titleCn: d.titleCn,
                    bigOrder: Z
                });
                if (d.type == 1) {
                    Y++
                } else {
                    if (d.position == 1) {
                        X++
                    } else {
                        U++
                    }
                }
                if (d.type == 1) {
                    a.append(b.append(c))
                } else {
                    V.append(c)
                }
            }
        });
        var S = KFC_HTML.getBannerCorner(Z);
        a.append(b.append(S));
        T.append(a, V);
        kvNav();
        scroll_kfc()
    };
    var L = function (S, V) {
        S.empty();
        KFC_Products.empty();
        KFC_Original.empty();
        KFC_HPT.empty();
        var U = '<div class="prod_show" style="width:600px"/>', c = '<ul class="product_ul_carnival"/>';
        var g = $(U);
        var W = $(c);
        S.append(g.append(W));
        var a = V.specialClass;
        var b = V.specialClassForOne;
        var j = V.specialClassForTwo;
        var f = V.specialClassForThree;
        var X = V.specialClassForFour;
        var d = {};
        for (var T in f.menuVoList) {
            if (f.menuVoList[T].menuType == "0") {
                d[f.menuVoList[T].lunch] = f.menuVoList[T].lunch
            }
        }
        for (var i in j.menuVoList) {
            if (j.menuVoList[i].menuType == "0") {
                d[j.menuVoList[i].lunch] = j.menuVoList[i].lunch
            }
        }
        $.each(a.menuVoList, function (h, l) {
            var m = KFC_Carnival["specialClassTemp"](l);
            W.append(m)
        });
        var Y = KFC_Carnival["specialClassForOneTemp"](b, d);
        W.append(Y);
        var e = KFC_Carnival["specialClassForTowOrThreeTemp"](j, f, d);
        W.append(e);
        var Z = KFC_Carnival["specialClassForFourTemp"](X, d);
        W.append(Z);
        KFC_Original.add();
        KFC_Original.closeBtnAll();
        KFC_OrderBtn.setHptOrOigOrderBtnState();
        $.each(V.menuPromVo, function (l, h) {
            KFC_Promotions.add(h)
        })
    };
    var O = function (T, a) {
        T.empty();
        KFC_Products.empty();
        KFC_Original.empty();
        KFC_HPT.empty();
        var d = '<div class="prod_show" style="width:600px"/>', S = '<ul class="product_ul"/>';
        var Y = a.nMenuVo;
        var X = a.activityTodayNum;
        var b = a.nMenuVo.length;
        if (a.isChangeActivityMenu == "Y") {
            S = '<ul class="product_activity_ul"/>'
        } else {
            if (a.isAddYuanActivityMenu == "Y") {
                S = '<ul class="addOneYuan_activity_ul"/>'
            }
        }
        var W = $(d);
        var c = $(S);
        T.append(W.append(c));
        var Z = 0;
        var V = a.httpVirtualPath;
        var U = {};
        for (k in a.nMenuVo) {
            if (a.nMenuVo[k].menuType == "0") {
                U[a.nMenuVo[k].lunch] = a.nMenuVo[k].lunch
            }
        }
        $.each(Y, function (g, f) {
            if (f.cornerMark) {
                KFC_Ncornermarks.add(f.cornerMark, f.systemId)
            }
            if (U[f.systemId] && f.disabledFlag == "0" && f.willSaleFlag == "0") {
                f.lightFlag = "1"
            }
            if ("Y" == a.isChangeActivityMenu) {
                if (g == 1) {
                    var e = $("<li class='activity39banner'></li>");
                    c.append(e)
                }
                if (g == 5) {
                    var e = $("<li class='activity59banner'></li>");
                    c.append(e)
                }
            }
            var h = KFC_HTML.getProductTemp({
                id: f.systemId,
                menuType: f.menuType,
                name: $.localStr({cn: f.nameCn, en: f.nameEn}, 1),
                price: f.price,
                isChangeActivityMenu: a.isChangeActivityMenu,
                isAddYuanActivityMenu: a.isAddYuanActivityMenu,
                imageUrl: f.imageUrl,
                menuFlag: f.menuFlag,
                virtualLink: V + f.virtualLinkUrl,
                virtualLinkClass: f.virtualLinkClass,
                virtualLinkType: f.virtualLinkType,
                lightFlag: f.lightFlag,
                nameEn: f.nameEn,
                descCn: f.descCn,
                descEn: f.descEn,
                couponDescCn: f.couponDescCn,
                couponDescEn: f.couponDescEn,
                lunch: f.lunch,
                disabledFlag: f.disabledFlag,
                willSaleFlag: f.willSaleFlag,
                linkShowType: f.linkShowType,
                index: g,
                saleTimeDesc: f.saleTimeDesc,
                condimentRoundList: f.condimentRoundList
            });
            c.append(h);
            KFC_Products.add(f, Z, h);
            KFC_HPT.addHalfPirce(f.menuType, f.systemId, h, f.lunch);
            Z++
        });
        KFC_Original.add();
        KFC_Original.closeBtnAll();
        KFC_OrderBtn.setHptOrOigOrderBtnState();
        $.each(a.menuPromVo, function (f, e) {
            KFC_Promotions.add(e)
        })
    };
    var P = function (V, T) {
        V.empty();
        KFC_Products.empty();
        KFC_Original.empty();
        KFC_HPT.empty();
        var U = T.httpVirtualPath;
        var S = 0;
        var W = {};
        for (k in T.nMenuVo) {
            if (T.nMenuVo[k].menuType == "0") {
                W[T.nMenuVo[k].lunch] = T.nMenuVo[k].lunch
            }
        }
        $.each(T.nMenuVo, function (Y, Z) {
            if (W[Z.systemId] && Z.disabledFlag == "0" && Z.willSaleFlag == "0") {
                Z.lightFlag = "1"
            }
            if (Z.cornerMark) {
                KFC_Ncornermarks.add(Z.cornerMark, Z.systemId)
            }
            if ("V" != Z.menuFlag) {
                var X = KFC_HTML.getSingleProductTemp(Z, T);
                V.append(X)
            }
            KFC_Products.add(Z, S, X);
            KFC_HPT.addHalfPirce(Z.menuType, Z.systemId, X, Z.lunch);
            S++
        });
        KFC_Original.add();
        KFC_Original.closeBtnAll();
        KFC_OrderBtn.setHptOrOigOrderBtnState();
        $.each(T.menuPromVo, function (Y, X) {
            KFC_Promotions.add(X)
        })
    };
    var A = function (S, X, W) {
        var T = $("#cart_menus");
        var V = $(".shop_cart_num");
        var U = KFC_GlobalVar.getGlobalVarByParam("halfPriceNumber");
        base.yumOpenLoading();
        $.ajax({
            url: requestContextPath + "/" + S, type: "post", dataType: "json", data: X, beforeSend: function () {
                base.yumOpenLoading()
            }, success: function (a) {
                if (!a) {
                    return
                }
                if (B(a.status)) {
                    return
                }
                if (!a.order) {
                    return
                }
                if (!a.order.items) {
                    return
                }
                T.empty();
                KFC_Cart.cartItmesEmpty();
                KFC_GlobalVar.add(a);
                var d = 0;
                var e = "";
                var Y = "";
                var b = "";
                $.each(a.order.items, function (i, g) {
                    if (!g.show) {
                        return
                    }
                    if (a.specialCouponCode == g.promotionCode) {
                        e = "(" + $.localStr({cn: g.promotionDescCN, en: g.promotionDescEN}, 1) + ")";
                        return
                    }
                    var h = "";
                    if (a.halfPirceId) {
                        if (a.halfPirceId.length >= U) {
                            h = "0";
                            b = h
                        }
                        Y = a.halfPirceId
                    }
                    if (g.promotionType != 4 && g.promotionType != 5 && g.promotionType != 6) {
                        var f = g.price;
                        if (g.itemType == 4) {
                            f = g.realPrice
                        }
                        T.append(KFC_HTML.getCartTemp({
                            num: g.quantity,
                            isPromo: g.promotionType,
                            id: g.productId,
                            name: $.localStr({cn: g.nameCN, en: g.nameEN}, 1),
                            price: g.quantity * f,
                            path: a.base,
                            isAutoPromo: g.autoPromotion,
                            realPrice: g.quantity * g.realPrice,
                            itype: h,
                            itemType: g.itemType,
                            index: d,
                            orderItemId: g.id,
                            varibleCondiment: a.varibleCondiment
                        }));
                        KFC_Cart.setCartItmes(g, d, Y)
                    } else {
                        if (g.promotionType == 5) {
                            e = "(" + $.localStr({cn: g.promotionDescCN, en: g.promotionDescEN}, 1) + ")"
                        }
                    }
                    d++
                });
                KFC_HTML.getCartPromotion(a);
                if (b) {
                    KFC_HPT.closeBtnAll();
                    KFC_Original.openBtnAll()
                } else {
                    KFC_HPT.openBtnAll();
                    KFC_Original.closeBtnAll()
                }
                KFC_HTML.getCartPriceTemp({
                    subtotal: a.order.subtotal,
                    deliverFee: a.order.deliverFee,
                    total: a.order.total,
                    totalProvince: a.order.totalProvince,
                    channelName: a.order.channelName,
                    cartRemark: e
                });
                V.text(KFC_Cart.getAllItemNum());
                var c = KFC_Cart.data("operFlag");
                if (c) {
                    if (c == "add") {
                        var Z = KFC_Cart.data("productId");
                        if (Z) {
                            KFC_Cart.showPopupWithCart(Z, c)
                        }
                    } else {
                        if (c == "sub") {
                            if (a.order.popupFlag) {
                                var Z = KFC_Cart.data("productId");
                                if (Z) {
                                    KFC_Cart.showPopupWithCart(Z, c)
                                }
                            }
                        }
                    }
                }
                KFC_OrderBtn.setHptOrOigOrderBtnState();
                return a.order.warningCode
            }, error: function () {
                base.yumAlert(property.netError)
            }, complete: function () {
                base.yumCloseLoading()
            }
        })
    };
    var D = function (S) {
        KFC_Products.clearProNumOneById(S);
        $("#" + S).val(1);
        if (KFC_Promotions.getPromItemsById(S)) {
            KFC_Promotions.getAllPromotionZore(S)
        }
    };
    var K = function () {
        var T = $("#nav .IClass").length == 0 ? $("#nav ul") : $("#nav .IClass");
        var U = $("#topFlag");
        if (U.val() == "drinks") {
            var V = $("#beverageClass").val();
            if (V) {
                return V
            }
        }
        var S = (function () {
            var W = "";
            T.each(function () {
                var X = $(this).find("li")[0];
                if (X) {
                    W = $(X).find("a").attr("pid");
                    return false
                }
            });
            return W
        })();
        return S
    };
    var B = function (X) {
        KFC_Status.empty();
        var U = 0;
        var V = true;
        if (X && X.code) {
            if (X.code == serviceCode.SUC_CODE) {
                return U
            } else {
                U = 1
            }
            if (X.code == serviceCode.USER_NOT_LOGIN) {
                base.yumAlertBack(property.userNotFound, function () {
                    base.loginExit(function () {
                        base.setActionHttps("orderLogin.action")
                    })
                })
            } else {
                if (X.code == serviceCode.ERRORCODE_306) {
                    V = false;
                    base.yumAlert(property.ErrorCode_306)
                } else {
                    if (X.code == 10015) {
                        var T = KFC_GlobalVar.getGlobalVarByParam("halfPriceNumber");
                        var W = property.halfPriceErrorMsg.format([T]);
                        var S = X.message;
                        KFC_Cart.getCartItmesById(S).quantity = KFC_Cart.getCartItmesById(S).quantity - 1;
                        error.yumAlertError(W, true)
                    } else {
                        error.yumAlertError(X.code)
                    }
                }
            }
            if (V) {
                KFC_Status.add(X)
            }
        }
        return U
    };
    var F = function () {
        $.cookie(yumCfg.orderFlag, true, {path: "/"});
        $.cookie(yumCfg.payFlag, true, {path: "/"})
    };
    var E = function () {
        var U = KFC_Banner.getBannerPopObj();
        if (undefined == U.popBannerObj) {
            return
        } else {
            xunFlag = true
        }
        var W = U.popBannerObj;
        var b = U.isPopup;
        var S = W.find(".bannerPopup");
        var Z = W.find(".bannerPopupBg");
        var a = W.find(".bannerPopupSmall");
        var T = $.cookie("isBannerPopupLogin");
        var Y = $(document).width();
        var X = U.bannerType;
        if (!$.browser.msie) {
            S.show({
                complete: function () {
                    S.css("left", (Y - S.width()) / 2)
                }
            })
        } else {
            var V = S.show().width();
            if (V == 0) {
                imgReady(imageUrl, function () {
                    V = this.width
                })
            }
            S.css("left", (Y - V) / 2)
        }
        if ($.browser.msie && $.browser.version == 6) {
            Z.height($(document).height()).width($(document).width());
            $(window).scroll(function () {
                a.css({"bottom": "", "top": $(window).height() + $(window).scrollTop() - 5 - a.height()})
            })
        }
        if ((T == null && b == "1" && X == 4)) {
            Z.show();
            S.show();
            $.cookie("isBannerPopupLogin", "false");
            setTimeout(function () {
                Z.hide();
                S.hide();
                a.show()
            }, 6000)
        } else {
            Z.hide();
            S.hide();
            if (popBannerClose) {
                a.show()
            }
        }
    };
    var G = function () {
        var S = $("#userFlag").val() == 0 ? true : false;
        $(".order_add a").on("click", function () {
            if (!S) {
                window.location.href = requestContextPath + "/customer.action"
            } else {
                $("#changeAddress").show();
                $("#addAddress_pop").show();
                $("#addAddress").show();
                $("#adderssArea_pop").hide();
                $("#adderssArea").find(".info_table_1 tr").hide();
                $("#cityName").val($("#cityNameDes").val());
                $("[cityname=" + $("#cityNameDes").val() + "]").click();
                $("#address2").val($("#mainAddressDes").val());
                $(".selectItem").data("autoClick", true);
                $("[address3]").show();
                $("#address3").val($("#supplementaladdressDes").val());
                changeAddressFlag = true;
                selectAddressFlag = false
            }
        });
        $(".closeAddress").on("click", function () {
            $(".city_list").hide();
            $(".selectItem").hide();
            $("#changeAddress").hide()
        })
    };
    return {
        initContent: R,
        initCart: A,
        initCookie: F,
        initPropAndPromToNum: D,
        initPopBanner: E,
        initHotLink: J,
        initWordLink: C,
        vaildPromNum: M,
        getDefClassId: K,
        unique: H,
        vaildStatus: B,
        bindChangeAddressEvent: G
    }
}();
var KFC_OrderBtn = {
    setHptOrOigOrderBtnState: function () {
        var B = KFC_GlobalVar.getGlobalVarByParam("halfPriceNumber");
        if (KFC_Cart.getAllCartItems() && KFC_Cart.getHptNum() >= B) {
            KFC_HPT.closeBtnAll();
            KFC_Original.openBtnAll()
        } else {
            var C = KFC_Cart.getAllCartItems().hptId;
            if (!C || C.length <= 0) {
                return
            }
            var E = KFC_Comon.unique(C);
            var D = KFC_GlobalVar.getGlobalVarByParam("eachHalfPriceNum");
            for (var A = 0; A < E.length; A++) {
                var G = E[A];
                var F = KFC_Cart.getProdNumById(G);
                if (D > 0) {
                    if (F >= D) {
                        KFC_HPT.closeBtnByHptPid(G);
                        KFC_Original.openBtnByHalfProdrById(G)
                    } else {
                        KFC_HPT.openBtnByHptPid(G);
                        KFC_Original.closeBtnByHalfProdrById(G)
                    }
                }
            }
        }
    }
};
var KFC_Menu = {
    init: function () {
        this.initElement();
        this.showQuickOrderInfo()
    }, initElement: function () {
        this.nav = $("#nav").find(".IClass>li").length == 0 ? $("#nav li :first").find("li") : $("#nav").find(".IClass>li");
        this.initEvent()
    }, showQuickOrderInfo: function () {
        if (quickOrderError == "true") {
            base.yumAlert(pageMessage.check_quick_order_error)
        }
        var B = $("#invalidItems");
        if (B && B.length > 0) {
            var A = "";
            base.yumAlert(B.html())
        }
    }, initEvent: function () {
        this.nav.click(this.navAction)
    }, navAction: function () {
        var A = $(this).find("a").attr("pid");
        var C = $.trim($(this).find("a").html());
        var B = $(this).find("a").parent().parent().attr("classtype");
        if (window._tag) {
            if (B == "L") {
                _tag.dcsMultiTrack("wt.event", A + "_CT_menu_正餐" + C, "wt.msg", "登录,正餐" + C)
            } else {
                if (B == "B") {
                    _tag.dcsMultiTrack("wt.event", A + "_CT_menu_早餐" + C, "wt.msg", "登录,早餐" + C)
                } else {
                    if (B == "D") {
                        _tag.dcsMultiTrack("wt.event", A + "_CT_menu_晚餐" + C, "wt.msg", "登录,晚餐" + C)
                    }
                }
            }
        }
        if (!A) {
            return
        }
        KFC_Comon.initContent(A, "wowBarrel_menu")
    }
};
var KFC_Banner = function () {
    var A = {};
    var C = function () {
        var H = "";
        var G = "";
        var F = ""
    };
    var D = function (J, I, H, G) {
        var F = new C();
        F.popBannerObj = I;
        F.isPopup = H;
        F.bannerType = G;
        A = F
    };
    var E = function () {
        A = {}
    };
    var B = function () {
        return A
    };
    return {add: D, empty: E, getBannerPopObj: B}
}();
var KFC_GlobalVar = function () {
    var D = function () {
        this.base = "";
        this.httpVersionPath = "";
        this.httpCornerMarkPath = "";
        this.login = "";
        this.halfPriceNumber = 0;
        this.eachHalfPriceNum = -1
    };
    var E = {};
    var B = function () {
        var H = arguments[0];
        var G = new D();
        for (var F in H) {
            if (G.hasOwnProperty(F)) {
                E[F] = H[F]
            }
        }
    };
    var C = function (F) {
        return E[F]
    };
    var A = function () {
        return E
    };
    return {add: B, getGlobalVar: A, getGlobalVarByParam: C}
}();
var KFC_Status = function () {
    var B = {};
    var C = function (E) {
        B = E
    };
    var D = function () {
        B = {}
    };
    var A = function () {
        return B
    };
    return {add: C, empty: D, getStatus: A}
}();
var KFC_Original = function () {
    var J = {};
    var D = function () {
        var M = KFC_HPT.getHptObjAll();
        for (var N in M) {
            var L = M[N].lunch;
            if (KFC_Products.getProductById(L)) {
                J[L] = KFC_Products.getProductById(L).$li
            }
        }
    };
    var H = function () {
        return J = {}
    };
    var E = function () {
        return J
    };
    var F = function (L) {
        return J[L]
    };
    var C = function (L) {
        if (!KFC_HPT.getHptObjById(L)) {
            return
        }
        var N = KFC_HPT.getHptObjById(L).lunch;
        var O = KFC_Products.getProductById(L);
        var M = KFC_Products.getProductById(N);
        var P = F(N);
        G({herfObj: O, prodObj: M, oriProdId: N, oriProdObj: P})
    };
    var I = function () {
        var L = E();
        for (var Q in L) {
            var O = KFC_Products.getHalfProdByOriPId(Q);
            var P = KFC_Products.getProductById(Q);
            if (O.isOrderFlag == "0" && P.lightFlag == "1") {
                if (L[Q].find(":button").size() > 0) {
                    L[Q].find(":button").removeClass("order_btn_h");
                    if ("1" == P.disabledFlag) {
                        $button = L[Q].find(":button").addClass("order_btn_h");
                        return
                    } else {
                        if ("1" == P.willSaleFlag) {
                            $button = L[Q].find(":button").addClass("timeArrived_btn");
                            $button.val(P.saleTimeDesc + property.sale);
                            return
                        }
                    }
                } else {
                    var N = KFC_GlobalVar.getGlobalVarByParam("base");
                    var M = N + "/res/images/order_btn.gif";
                    if ($.isEnglish()) {
                        M = N + "/res/images/en/order_btn.gif"
                    }
                    L[Q].find(".center>img").attr("src", M);
                    if ("1" == P.disabledFlag) {
                        M = N + "/res/images/order_btn_1.png";
                        if ($.isEnglish()) {
                            M = N + "/res/images/en/order_btn_1.gif"
                        }
                        L[Q].find(".center>img").attr("src", M);
                        return
                    } else {
                        if ("1" == P.willSaleFlag) {
                            M = N + "/res/images/timeArrived_btn.png";
                            if ($.isEnglish()) {
                                M = N + "/res/images/en/timeArrived_btn.png"
                            }
                            L[Q].find(".center>img").attr("src", M);
                            return
                        }
                    }
                }
                KFC_Products.modifyIsOrderById(Q, 1)
            }
        }
    };
    var G = function (N) {
        var P = N.herfObj;
        var Q = N.prodObj;
        var M = N.oriProdObj;
        var O = N.oriProdId;
        if (!Q) {
            return
        }
        if (P.isOrderFlag == "0" && Q.lightFlag == "1") {
            if (M.find(":button").size() > 0) {
                M.find(":button").removeClass("order_btn_h");
                if ("1" == Q.disabledFlag) {
                    $button = M.find(":button").addClass("order_btn_h");
                    return
                } else {
                    if ("1" == Q.willSaleFlag) {
                        $button = M.find(":button").addClass("timeArrived_btn");
                        $button.val(Q.saleTimeDesc + property.sale);
                        return
                    }
                }
            } else {
                var L = KFC_GlobalVar.getGlobalVarByParam("base");
                var R = L + "/res/images/order_btn.gif";
                if ($.isEnglish()) {
                    R = L + "/res/images/en/order_btn.gif"
                }
                M.find(".center>img").attr("src", R);
                if ("1" == Q.disabledFlag) {
                    R = L + "/res/images/order_btn_1.png";
                    if ($.isEnglish()) {
                        R = L + "/res/images/en/order_btn_1.gif"
                    }
                    M.find(".center>img").attr("src", R);
                    return
                } else {
                    if ("1" == Q.willSaleFlag) {
                        R = L + "/res/images/timeArrived_btn.png";
                        if ($.isEnglish()) {
                            R = L + "/res/images/en/timeArrived_btn.png"
                        }
                        M.find(".center>img").attr("src", R);
                        return
                    }
                }
            }
            KFC_Products.modifyIsOrderById(O, 1)
        }
    };
    var B = function () {
        var L = E();
        for (var P in L) {
            var N = KFC_Products.getProductById(P);
            if ("1" === N.willSaleFlag) {
                continue
            }
            if (L[P].find(":button").size() > 0) {
                L[P].find(":button").addClass("order_btn_h")
            } else {
                var O = KFC_GlobalVar.getGlobalVarByParam("base");
                var M = O + "/res/images/order_btn_1.png";
                if ($.isEnglish()) {
                    M = O + "/res/images/en/order_btn_1.gif"
                }
                L[P].find(".center>img").attr("src", M)
            }
            KFC_Products.modifyIsOrderById(P, 0)
        }
    };
    var A = function (L) {
        if (!KFC_HPT.getHptObjById(L)) {
            return
        }
        var N = KFC_HPT.getHptObjById(L).lunch;
        var M = KFC_Products.getProductById(N);
        var O = F(N);
        K({oriPid: N, pObj: M, oriProd: O})
    };
    var K = function (N) {
        var O = N.pObj;
        var M = N.oriProd;
        var P = N.oriPid;
        if (!O || "1" === O.willSaleFlag) {
            return
        }
        if (M.find(":button").size() > 0) {
            M.find(":button").addClass("order_btn_h")
        } else {
            var L = KFC_GlobalVar.getGlobalVarByParam("base");
            var Q = L + "/res/images/order_btn_1.png";
            if ($.isEnglish()) {
                Q = L + "/res/images/en/order_btn_1.gif"
            }
            M.find(".center>img").attr("src", Q)
        }
        KFC_Products.modifyIsOrderById(P, 0)
    };
    return {
        add: D,
        empty: H,
        openBtnAll: I,
        openOrderBtn: G,
        openBtnByHalfProdrById: C,
        closeBtnAll: B,
        closeOrderBtn: K,
        closeBtnByHalfProdrById: A,
        getOriProdAll: E,
        getOriProdById: F
    }
}();
var KFC_HPT = function () {
    var I = {};
    var L = function () {
        this.li = "";
        this.lunch = ""
    };
    var E = function (Q, N, P, M) {
        if (Q == "0" && KFC_Products.getProductById(N).lightFlag == "1") {
            var O = new L();
            O.li = P;
            O.lunch = M;
            I[N] = O
        }
    };
    var G = function () {
        return I = {}
    };
    var J = function () {
        return I
    };
    var B = function (M) {
        return I[M]
    };
    var H = function () {
        var Q = J();
        for (var M in Q) {
            var O = KFC_Products.getProductById(M);
            if ("1" === O.willSaleFlag) {
                continue
            }
            if (O.lightFlag == "1") {
                if (Q[M].li.find(":button").size() > 0) {
                    Q[M].li.find(":button").removeClass("order_btn_h")
                } else {
                    var P = KFC_GlobalVar.getGlobalVarByParam("base");
                    var N = P + "/res/images/order_btn.gif";
                    if ($.isEnglish()) {
                        N = P + "/res/images/en/order_btn.gif"
                    }
                    Q[M].li.find(".center>img").attr("src", N)
                }
                KFC_Products.modifyIsOrderById(M, 1)
            }
        }
    };
    var C = function (M) {
        var O = KFC_Products.getProductById(M);
        var N = B(M);
        F(M, O, N)
    };
    var F = function (N, Q, P) {
        if (!Q || "1" === Q.willSaleFlag) {
            return
        }
        if (Q.lightFlag == "1") {
            if (P.li.find(":button").size() > 0) {
                P.li.find(":button").removeClass("order_btn_h")
            } else {
                var M = KFC_GlobalVar.getGlobalVarByParam("base");
                var O = M + "/res/images/order_btn.gif";
                if ($.isEnglish()) {
                    O = M + "/res/images/en/order_btn.gif"
                }
                P.li.find(".center>img").attr("src", O)
            }
            KFC_Products.modifyIsOrderById(N, 1)
        }
    };
    var D = function () {
        var Q = J();
        for (var M in Q) {
            var O = KFC_Products.getProductById(M);
            if ("1" === O.willSaleFlag) {
                continue
            }
            if (Q[M].li.find(":button").size() > 0) {
                Q[M].li.find(":button").addClass("order_btn_h")
            } else {
                var P = KFC_GlobalVar.getGlobalVarByParam("base");
                var N = P + "/res/images/order_btn_1.png";
                if ($.isEnglish()) {
                    N = P + "/res/images/en/order_btn_1.gif"
                }
                Q[M].li.find(".center>img").attr("src", N)
            }
            KFC_Products.modifyIsOrderById(M, 0)
        }
    };
    var A = function (M) {
        var O = KFC_Products.getProductById(M);
        var N = B(M);
        K(M, O, N)
    };
    var K = function (P, Q, O) {
        if (!Q || "1" === Q.willSaleFlag) {
            return
        }
        if (O.li.find(":button").size() > 0) {
            O.li.find(":button").addClass("order_btn_h")
        } else {
            var M = KFC_GlobalVar.getGlobalVarByParam("base");
            var N = M + "/res/images/order_btn_1.png";
            if ($.isEnglish()) {
                N = M + "/res/images/en/order_btn_1.gif"
            }
            O.li.find(".center>img").attr("src", N)
        }
        KFC_Products.modifyIsOrderById(P, 0)
    };
    return {
        addHalfPirce: E,
        empty: G,
        openBtnAll: H,
        openBtnOrder: F,
        openBtnByHptPid: C,
        closeBtnAll: D,
        closeOrderBtn: K,
        closeBtnByHptPid: A,
        getHptObjAll: J,
        getHptObjById: B
    }
}();
var KFC_Ncornermarks = function () {
    var A = function () {
        this.imageCn = "";
        this.nameCn = "";
        this.nameEn = "";
        this.imageEn = "";
        this.cornerMarkType = ""
    };
    var B = {};
    var E = function () {
        var I = arguments[0];
        var G = arguments[1];
        var H = new A();
        for (var F in I) {
            if (H.hasOwnProperty(F)) {
                H[F] = I[F]
            }
        }
        B[G] = H
    };
    var D = function (F) {
        return B[F]
    };
    var C = function () {
        return B
    };
    return {add: E, getAllNco: C, getNcoById: D}
}();
var KFC_Promotions = function () {
    var R = function () {
        this.imagePath = "";
        this.nameCN = "";
        this.nameEN = "";
        this.currentQuantity = "";
        this.maxQuantity = "";
        this.realPrice = "";
        this.id = "";
        this.pmid = "";
        this.classId = ""
    };
    var J = function () {
        this.id = "";
        this.couponTitleCn = "";
        this.couponTitleEn = "";
        this.descEN = "";
        this.descCN = "";
        this.maxQuantity = "";
        this.multiuse = "";
        this.aNum = "";
        this.bNum = "";
        this.items = {};
        this.code = ""
    };
    var D = function () {
        this.promotionVOs = []
    };
    var B = {};
    var N = function () {
        var V = arguments[0];
        var W = new D();
        for (var a in V) {
            if (W.hasOwnProperty(a)) {
                W[a] = V[a];
                if (typeof V[a] == "object") {
                    var U = V[a][0];
                    var d = new J();
                    for (var Y in U) {
                        if (d.hasOwnProperty(Y)) {
                            if (typeof U[Y] == "object") {
                                var b = U[Y];
                                for (var c in b) {
                                    var Z = b[c];
                                    var e = new R();
                                    for (var X in Z) {
                                        if (e.hasOwnProperty(X)) {
                                            e[X] = Z[X]
                                        }
                                    }
                                    d[Y][Z.pmid] = e
                                }
                            } else {
                                d[Y] = U[Y]
                            }
                        }
                    }
                }
            }
            W[a] = d
        }
        B[V.menuId] = W
    };
    var I = function () {
        return B
    };
    var L = function (U) {
        if (B[U]) {
            return B[U].promotionVOs.items
        }
        return null
    };
    var S = function (U) {
        if (B[U]) {
            return B[U].promotionVOs.code
        }
        return ""
    };
    var H = function (U) {
        var V = 0;
        if (U) {
            for (var W in U.items) {
                if (W != null && W != "") {
                    V = U.items[W].currentQuantity + V
                }
            }
        }
        return V
    };
    var K = function (V) {
        var U = 0;
        for (var W in V.items) {
            U += KFC_Cart.getProdNumById(W, V.id)
        }
        return U
    };
    var G = function (U) {
        if (B[U]) {
            return B[U].promotionVOs
        }
        return null
    };
    var M = function () {
        B = {}
    };
    var F = function (Y, W, Z) {
        var V = G(Y);
        var X = H(V);
        X++;
        var a = K(V);
        X += a;
        var U = T(V, X, Y, Z);
        if (U) {
            V.items[W].currentQuantity += 1
        } else {
            base.yumAlert(property.errorPromItmesNum)
        }
    };
    var T = function (X, U, V, b) {
        var Z = 0;
        var Y = 0;
        Z = X.aNum;
        Y = X.bNum;
        var W = 0;
        var a = 0;
        if (KFC_Cart.getItemNmuById(V)) {
            W = KFC_Cart.getItemNmuById(V)
        }
        if (b) {
            a = KFC_Products.getProductNumById(V) + W
        } else {
            a = W
        }
        if (Z != null && Z != "" && Y != null && Y != "") {
            if (X.multiuse) {
                if (parseInt(a / Z, 10) >= U / Y) {
                    return true
                }
            } else {
                if (U <= Y && a >= Z) {
                    return true
                }
            }
        }
        return false
    };
    var C = function (V, U) {
        if (B[V].promotionVOs.items[U].currentQuantity < 1) {
        } else {
            B[V].promotionVOs.items[U].currentQuantity -= 1
        }
    };
    var A = function (V) {
        var U = KFC_Promotions.getAllPromotion();
        for (var W in U[V].promotionVOs.items) {
            if (W != null && W != "") {
                U[V].promotionVOs.items[W].currentQuantity = 0;
                $("#" + W).val(0)
            }
        }
    };
    var P = function (V, W) {
        var U = L(V);
        U.items[W].currentQuantity = 0
    };
    var O = function (X, W, Z) {
        if (typeof Z == "string") {
            Z = parseInt(Z)
        }
        var V = G(X);
        var Y = H(V) - E(X, W) + Z;
        var a = K(V);
        Y += a;
        var U = T(V, Y, X);
        if (!U) {
            base.yumAlert(property.errorPromItmesNum);
            V.items[W].currentQuantity = 0;
            return
        }
        V.items[W].currentQuantity = Z
    };
    var E = function (W, V) {
        var U = G(W);
        return U.items[V].currentQuantity
    };
    var Q = function (X, b) {
        var U = KFC_Promotions.getPromotionVosById(X);
        if (!U) {
            return ""
        }
        var Z = U.items;
        var V = $("<div/>");
        var a = 0;
        for (var Y in Z) {
            var W = Z[Y];
            V.append(KFC_HTML.getPropDatil({
                id: W.id,
                name: $.localStr({cn: W.nameCN, en: W.nameEN}, 1),
                price: W.realPrice,
                imagePath: W.imagePath,
                index_Itemp: a++,
                pId: X,
                pmid: W.pmid,
                isCheckPic: b
            }))
        }
        var c = $.localStr({cn: U.couponTitleCn, en: U.couponTitleEn}, 1);
        return KFC_HTML.getPropMain(c, V, b)
    };
    return {
        add: N,
        addHtml: Q,
        addPromotionNumById: F,
        empty: M,
        getAllPromotion: I,
        getPromItemsById: L,
        getPromCodeById: S,
        getAllPromotionZore: A,
        getPromotionVosById: G,
        getPromZoreBypromIid: P,
        getPromNum: H,
        getPromNumInCart: K,
        getPromItmesNumById: E,
        modifyPromotionNumById: O,
        subPromotionNumById: C,
        vaildPromQuantity: T
    }
}();
var KFC_Products = function () {
    var G = function () {
        this.lunch = "";
        this.lightFlag = "";
        this.nameCn = "";
        this.nameEn = "";
        this.descCn = "";
        this.descEn = "";
        this.imageUrl = "";
        this.price = "";
        this.endTime = "";
        this.num = 1;
        this.isPromo = 0;
        this.p_index = 0;
        this.systemId = "";
        this.menuFlag = "";
        this.maxQty = "";
        this.saleValidDateDesc = "";
        this.saleTimeDesc = "";
        this.promotionAreaCn = "";
        this.promotionAreaEn = "";
        this.menuType = "";
        this.validFrom = "";
        this.validTo = "";
        this.$li = "";
        this.disabledFlag = "";
        this.willSaleFlag = "";
        this.isOrderFlag = "1";
        this.promotionAmount = "0";
        this.abbrDesc = 0;
        this.iGroupVoList = new Array();
        this.condimentRoundList = new Array()
    };
    var E = {};
    var D = function () {
        var T = arguments[0];
        var Q = arguments[1];
        var S = arguments[2];
        var R = new G();
        R.p_index = Q;
        R.$li = S;
        for (var P in T) {
            if (R.hasOwnProperty(P)) {
                R[P] = T[P]
            }
        }
        if (!R.imageUrl) {
            R.imageUrl = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        R.isOrderFlag = R.lightFlag;
        E[T.systemId] = R
    };
    var J = function () {
        E = {}
    };
    var K = function () {
        return E
    };
    var N = function (P) {
        return E[P]
    };
    var L = function (Q) {
        var P = K();
        for (var R in P) {
            if (P[R].lunch == Q) {
                return P[R]
            }
        }
    };
    var A = function (P, R) {
        var Q = 0;
        if (R == "0") {
            Q = 1
        } else {
            Q = E[P].maxQty
        }
        if (E[P].num >= Q) {
            base.yumAlert(property.errorOrderItemsNum.format([Q]));
            return
        }
        E[P].num += 1
    };
    var M = function (P) {
        if (E[P].num <= 1) {
            base.yumAlert(property.infoMinOrderItemNum);
            return
        }
        E[P].num -= 1
    };
    var C = function (P, Q) {
        if (typeof Q == "string") {
            Q = parseInt(Q)
        }
        E[P].num = Q
    };
    var O = function (P, Q) {
        if (typeof Q == "string") {
            Q = parseInt(Q)
        }
        E[P].isOrderFlag = Q
    };
    var F = function (P, Q) {
        if (typeof Q == "string") {
            Q = parseInt(Q)
        }
        if (E[P]) {
            E[P].lightFlag = Q
        }
    };
    var I = function (P) {
        return E[P].num
    };
    var H = function () {
        if (E) {
            for (var P in E) {
                E[P].num = 1
            }
        }
    };
    var B = function (P) {
        if (E[P]) {
            E[P].num = 1
        }
    };
    return {
        add: D,
        addProductNumById: A,
        clearProNumOneById: B,
        empty: J,
        getAllProduct: K,
        getProductById: N,
        getProductNumById: I,
        getProductNumOne: H,
        getHalfProdByOriPId: L,
        modifyProductNumById: C,
        modifyisCHFById: F,
        modifyIsOrderById: O,
        subProductNumById: M
    }
}();
var KFC_Cart = function () {
    var tmpData = {};
    var kfcProducts = KFC_Products;
    var cartItems = {hptId: new Array()};
    var data = function () {
        var len = arguments.length;
        if (len == 1) {
            return tmpData[arguments[0]]
        } else {
            if (len == 2) {
                tmpData[arguments[0]] = arguments[1]
            } else {
                if (len == 0) {
                    return tmpData
                }
            }
        }
    };
    var CartItem = function () {
        this.index = "";
        this.id = "";
        this.productId = "";
        this.quantity = "";
        this.promotionType = "";
        this.promotionId = 0;
        this.itemType = "";
        this.condimentItems = ""
    };
    var getHptNum = function () {
        var hptNum = 0;
        if (cartItems.hptId) {
            hptNum = cartItems.hptId.length
        }
        return hptNum
    };
    var validWowBarrelItem = function () {
        var cartItems = getAllCartItems();
        if (cartItems) {
            for (var i in cartItems) {
                if (cartItems[i].itemType == 4) {
                    return cartItems[i]
                }
            }
        }
        return null
    };
    var executeOrder = function (data) {
        var warningCode = KFC_Comon.initCart("/executeOrder.action", data);
        if (warningCode == "2") {
            base.yumAlert(property.WarningCode_2);
            return
        }
    };
    var executeMealItems = function (data) {
        var warningCode = KFC_Comon.initCart("/executeMealItems.action", data);
        if (warningCode == "2") {
            base.yumAlert(property.WarningCode_2)
        }
    };
    var executeCondiment = function (data) {
        var warningCode = KFC_Comon.initCart("/executeCondimentItems.action", data);
        if (warningCode == "2") {
            base.yumAlert(property.WarningCode_2)
        }
    };
    var validHarfPriceProd = function (pid) {
        var cartItems = getAllCartItems();
        if (cartItems) {
            var hptPids = cartItems.hptId;
            for (var i = 0; i < hptPids.length; i++) {
                if (hptPids[i] == pid) {
                    return true
                }
            }
        }
        return false
    };
    var addProToCartById = function (pId) {
        var product = kfcProducts.getProductById(pId);
        if (product.menuFlag == "M") {
            executeMealItems({
                productId: pId,
                classId: product.classExtId,
                quantity: product.num,
                objectId: product.p_index,
                itype: product.menuType,
                menuFlag: product.menuFlag
            })
        } else {
            executeOrder({
                classId: product.classExtId,
                quantity: product.num,
                productId: product.systemId,
                itype: product.menuType
            })
        }
    };
    var addProToOrderById = function (pId, pType) {
        var c_Obj = getCartItmesById(pId, pType);
        var halfPNum = KFC_GlobalVar.getGlobalVarByParam("halfPriceNumber");
        var eachHPN = KFC_GlobalVar.getGlobalVarByParam("eachHalfPriceNum");
        var pidStr = "," + pId + ",";
        var specialIds = $("#specialIds").val();
        var num = 99;
        if (validHarfPriceProd(pId)) {
            num = halfPNum - KFC_Cart.getHptNum();
            if (1 > num) {
                if (specialIds != "" && specialIds.indexOf(pidStr) != -1) {
                    base.yumAlert(property.eachLooseChangeMenuErrorMsg.format([halfPNum]))
                } else {
                    base.yumAlert(property.halfPriceErrorMsg.format([halfPNum]))
                }
                return
            }
            if (eachHPN > -1 && c_Obj.quantity >= eachHPN) {
                base.yumAlert(property.eachHalfPriceErrorMsg.format([eachHPN]));
                return
            }
        } else {
            if (c_Obj.quantity >= num) {
                base.yumAlert(property.errorCartNum.format([num]));
                return
            }
        }
        c_Obj.quantity += 1;
        executeOrder({
            objectId: c_Obj.index,
            orderItemId: c_Obj.id,
            productId: c_Obj.productId,
            quantity: c_Obj.quantity
        })
    };
    var subProToOrderById = function (pId, pType) {
        var c_Obj = getCartItmesById(pId, pType);
        if (c_Obj.quantity <= 1) {
            return
        }
        c_Obj.quantity -= 1;
        executeOrder({
            opFlag: 0,
            objectId: c_Obj.index,
            orderItemId: c_Obj.id,
            productId: c_Obj.productId,
            quantity: c_Obj.quantity
        })
    };
    var showPopupWithCart = function (productId, operFlag) {
        KFC_Cart.data("operFlag", null);
        KFC_Cart.data("productId", null);
        if (!productId) {
            return
        }
        if ($.cookie(yumCfg.myNotNeed) == "true") {
            return
        }
        if (KFC_Promotions.getPromItemsById(productId)) {
            if (operFlag == "sub") {
                var showInfo = property.reduceItemClearProm;
                if (KFC_Promotions.getPromCodeById(productId) == "Bucket1") {
                    showInfo = property.reduceItemClearProm2
                }
                base.yumAlertBack(showInfo, function () {
                    base.yumCloseLoading();
                    KFC_PopUp_Show.pop_show(productId)
                })
            } else {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(productId)
            }
        }
    };
    var deletProById = function (pId, pType, p_orderItemId) {
        var c_Obj = getCartItmesById(pId, pType, p_orderItemId);
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "cancelAlert0")
        }
        base.yumConfirm(property.delOrderItem, function () {
            executeOrder({
                opFlag: 0,
                objectId: c_Obj.index,
                orderItemId: c_Obj.id,
                productId: c_Obj.productId,
                quantity: 0
            });
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "cancelConfirm0")
            }
        })
    };
    var getCartItmesById = function (pId, pType, p_orderItemId) {
        pType = pType || 0;
        var result = "";
        for (var k in cartItems) {
            if (cartItems[k]) {
                if (cartItems[k].productId == pId && cartItems[k].promotionType == pType) {
                    if (p_orderItemId) {
                        if (p_orderItemId == cartItems[k].id) {
                            result = clone(cartItems[k])
                        }
                    } else {
                        if (result != "") {
                            result.quantity++
                        } else {
                            result = clone(cartItems[k])
                        }
                    }
                }
            }
        }
        return result
    };

    function isClass(o) {
        if (o === null) {
            return "Null"
        }
        if (o === undefined) {
            return "Undefined"
        }
        return Object.prototype.toString.call(o).slice(8, -1)
    }

    var clone = function (obj) {
        var result = {}, oClass = isClass(obj);
        for (key in obj) {
            var copy = obj[key];
            if (isClass(copy) == "Object") {
                result[key] = arguments.callee(copy)
            } else {
                if (isClass(copy) == "Array") {
                    result[key] = arguments.callee(copy)
                } else {
                    result[key] = obj[key]
                }
            }
        }
        return result
    };
    var getProductNumInCartById = function (pId) {
        var productNum = 0;
        for (var k in cartItems) {
            if (cartItems[k]) {
                if (cartItems[k].productId == pId) {
                    productNum++
                }
            }
        }
        return productNum
    };
    var getProdNumById = function (pid, promotionId) {
        var quantity = 0;
        for (var k in cartItems) {
            if (promotionId != null && promotionId != cartItems[k].promotionId) {
                continue
            }
            if (cartItems[k] && cartItems[k].productId == pid) {
                quantity += cartItems[k].quantity
            }
        }
        return quantity
    };
    var getItemNmuById = function (pId) {
        var c_Obj = getCartItmesById(pId);
        return c_Obj ? c_Obj.quantity : 0
    };
    var getAllItemNum = function () {
        var count = 0;
        for (var k in cartItems) {
            if (/^\d+$/.test(k)) {
                count += cartItems[k].quantity
            }
        }
        return count
    };
    var getAllCartItems = function () {
        return cartItems
    };
    var setCartItmes = function () {
        var args = arguments[0];
        var i = arguments[1];
        var hptId = arguments[2];
        var cartItem = new CartItem();
        cartItem.index = i;
        for (var k in args) {
            if (cartItem.hasOwnProperty(k)) {
                cartItem[k] = args[k]
            }
        }
        cartItems[i] = cartItem;
        cartItems.hptId = hptId
    };
    var cartItmesEmpty = function () {
        cartItems = {}
    };
    var submitCart = function () {
        $(".right_order_menu").find(".order_btn_1").live("click", function () {
            $.cookie(yumCfg.orderFlag, false, {path: "/"});
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
                                });
                                return
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
                                        base.setAction("continueShopping.action")
                                    })
                                } else {
                                    if (data.invaildCode != null) {
                                        if (data.invaildCode == "431") {
                                            base.setAction("cart.action")
                                        } else {
                                            base.yumAlertBack(eval("codeMessage.error" + data.invaildCode), function () {
                                                base.setAction("continueShopping.action")
                                            })
                                        }
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
                                        base.setAction("cart.action")
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
                            base.setAction("cart.action")
                        }
                    }
                }
            })
        })
    };
    var addBeforeLoginProduce = function () {
        var beforeLoginClass = $.cookie(yumCfg.beforeLoginClass);
        var beforeLoginProduce = $.cookie(yumCfg.beforeLoginProduce);
        var hasClassId = false;
        var $obj = $(".IClass").length == 0 ? $("#nav ul") : $(".IClass");
        $.each($obj, function (i, e) {
            $.each($(e).find("a"), function (index, element) {
                if ($(element).attr("pid") == beforeLoginClass) {
                    hasClassId = true
                }
            })
        });
        if (hasClassId && "Y" == $("#gotoBeforeLoginClass").val() && beforeLoginClass && "Y" == $("#addBeforeLoginProduce").val()) {
            KFC_Comon.initContent(beforeLoginClass)
        } else {
            if ($.cookie(yumCfg.beforeLoginWow) == "1" && window.wowBarrelClass != "") {
                KFC_Comon.initContent(window.wowBarrelClass)
            } else {
                KFC_Comon.initContent(KFC_Comon.getDefClassId())
            }
        }
        if (hasClassId && "Y" == $("#addBeforeLoginProduce").val() && beforeLoginProduce) {
            var topFlag = $("#topFlag");
            var cId = beforeLoginClass;
            $.ajax({
                url: requestContextPath + "/getMenuJson.action",
                type: "post",
                data: {classId: $.trim(cId), topFlag: topFlag.val()},
                dataType: "json",
                beforeSend: function () {
                    base.yumOpenLoading()
                },
                success: function (o) {
                    if (o) {
                        if (KFC_Comon.vaildStatus(o.status)) {
                            return
                        }
                        var carnivalMenuFlag = o.carnivalMenu;
                        var isBuy = false;
                        if (carnivalMenuFlag != "Y") {
                            $.each(o.nMenuVo, function (_, v) {
                                if (beforeLoginProduce == v.systemId) {
                                    isBuy = true;
                                    return
                                }
                            })
                        }
                        if (isBuy || carnivalMenuFlag === "Y") {
                            var pId = beforeLoginProduce;
                            var proObj = KFC_Products.getProductById(beforeLoginProduce);
                            var cNum = 0;
                            var pNum = 1;
                            var isCHF2 = proObj.lightFlag;
                            var isOrderFlag = proObj.isOrderFlag;
                            var itype = proObj.menuType;
                            var iMaxQty = proObj.maxQty;
                            if (proObj.menuFlag == "V") {
                                return
                            }
                            if ("1" == proObj.disabledFlag || "1" == proObj.willSaleFlag) {
                                return
                            }
                            if (itype == "0") {
                                iMaxQty = 1
                            }
                            if (isCHF2 == "0") {
                                return
                            }
                            if (isOrderFlag == "0") {
                                return
                            }
                            if (cNum + pNum > iMaxQty || pNum == 0) {
                                return
                            }
                            var httpVP = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
                            var product = KFC_Products.getProductById(pId);
                            MidevDSP.productDetailDSP($.trim(cId), product, httpVP);
                            if (proObj.menuFlag == "M") {
                                executeMealItems({
                                    productId: pId,
                                    classId: proObj.classExtId,
                                    quantity: 1,
                                    objectId: 0,
                                    itype: proObj.menuType,
                                    menuFlag: product.menuFlag
                                })
                            } else {
                                if (!$.cookie(yumCfg.beforeLoginCondiment)) {
                                    executeOrder({
                                        classId: proObj.classExtId,
                                        quantity: 1,
                                        productId: proObj.systemId,
                                        itype: proObj.menuType
                                    })
                                } else {
                                    $.cookie(yumCfg.beforeLoginCondiment, null, {path: "/kfcios"})
                                }
                            }
                            if (window._tag) {
                                _tag.dcsMultiTrack("wt.event", "orderAdd", "wt.msg", "txt", "wt.pn_sku", pId)
                            }
                        }
                    }
                },
                error: function () {
                    base.yumAlert(property.netError)
                },
                complete: function () {
                    base.yumCloseLoading()
                }
            })
        }
        $.cookie(yumCfg.beforeLoginProduce, null, {path: "/kfcios"});
        $.cookie(yumCfg.beforeLoginClass, null, {path: "/kfcios"})
    };
    return {
        addProToCartById: addProToCartById,
        addProToOrderById: addProToOrderById,
        cartItmesEmpty: cartItmesEmpty,
        deletProById: deletProById,
        getItemNmuById: getItemNmuById,
        getAllItemNum: getAllItemNum,
        getCartItmesById: getCartItmesById,
        getProductNumInCartById: getProductNumInCartById,
        getAllCartItems: getAllCartItems,
        subProToOrderById: subProToOrderById,
        submitCart: submitCart,
        setCartItmes: setCartItmes,
        getProdNumById: getProdNumById,
        showPopupWithCart: showPopupWithCart,
        addBeforeLoginProduce: addBeforeLoginProduce,
        data: data,
        validWowBarrelItem: validWowBarrelItem,
        validHarfPriceProd: validHarfPriceProd,
        getHptNum: getHptNum
    }
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
var KFC_HTML = function () {
    var G = KFC_Products;
    var C = KFC_Cart;
    var Q = KFC_Promotions;
    var m = KFC_GlobalVar;
    var I = KFC_Status;
    var B = KFC_Ncornermarks;
    var Z = "javascript:;";
    var Ai = "<li/>", W = '<div href="' + Z + '" class="showPicPop showPP_IE7"/>', X = '<div class="pro_info"/>',
        As = '<a href="' + Z + '" class="pro_name">{0}</a>', Aj = "<p/>", v = '<p class="p_realPrice">{0}</p>',
        Ar = '<span class="pro_price">{0}' + pageMessage.home_Per + " </span>", f = "<span/>",
        F = '<a href="' + Z + '"><img src="{0}' + KFC_Constant.img.prod_minus_icon + '"/></a>',
        Ag = '<input type="text" id="{0}" value="1" maxlength="2"/>',
        s = '<a href="' + Z + '"><img src="{0}' + KFC_Constant.img.prod_add_icon + '"/></a>',
        A = '<input type="button" class="mealdealDeatil_j" />', x = '<img src="{0}" />';
    var Ao = function (AP) {
        var AV = AP.id;
        var AL = AP.menuType;
        var AQ = AP.imageUrl ? AP.imageUrl : $.localStr({
            cn: KFC_Constant.img.no_pic,
            en: KFC_Constant.img.no_pic_en
        }, 1);
        var AJ = AP.name;
        var AX = AP.nameEn;
        var A5 = AP.menuFlag;
        var AB = $.moneyFormat((computationPrice(AP.descEn) == "NaN" || computationPrice(AP.descEn) == "0.0") ? "" : computationPrice(AP.descEn));
        var AN = $.moneyFormat((computationPrice(AP.nameEn) == "NaN" || computationPrice(AP.nameEn) == "0.0") ? "" : computationPrice(AP.nameEn));
        var Bk = $.moneyFormat(computationPrice(AP.price));
        var A9 = AP.lightFlag;
        var Ba = AP.virtualLink;
        var A8 = AP.virtualLinkClass;
        var A0 = AP.descCn;
        var AY = AP.descEn;
        var AD = AP.couponDescCn;
        var AA = AP.couponDescEn;
        var AZ = AP.virtualLinkType;
        var AC = AP.disabledFlag;
        var Bj = AP.willSaleFlag;
        var AF = AP.saleTimeDesc;
        var A1 = m.getGlobalVarByParam("base");
        var p = m.getGlobalVarByParam("httpCornerMarkPath");
        var Bq = m.getGlobalVarByParam("httpVersionPath");
        var Bn = AP.linkShowType || 0;
        var AI = m.getGlobalVarByParam("halfPriceNumber");
        var Aw = AP.index;
        var AU = AP.flexibleComboItem;
        var AT = B.getNcoById(AV);
        var Bp = $(Ai);
        var Bc = $(x.format([Bq + AQ]));
        var A3 = "";
        var A7 = "";
        var A4 = $(v.format([""]));
        var Bi = AP.condimentRoundList;
        var Bd = AP.price;
        var Bb = true;
        if (Bi && Bi.length > 0) {
            for (var Bl = 0; Bl < Bi.length; Bl++) {
                if (Bi[Bl].condimentItemList.length > 1) {
                    Bb = false;
                    var Ay = Bi[Bl].condimentItemList[0].price;
                    for (var Bh = 0; Bh < Bi[Bl].condimentItemList.length; Bh++) {
                        if (Bi[Bl].condimentItemList[Bh].price < Ay) {
                            Ay = Bi[Bl].condimentItemList[Bh].price
                        }
                    }
                    Bd += Ay * Bi[Bl].itemCount
                } else {
                    Bd += Bi[Bl].condimentItemList[0].price * Bi[Bl].itemCount
                }
            }
        }
        if (Bi && Bi.length > 0) {
            Bk = $.moneyFormat(computationPrice(Bd))
        }
        if (AP.menuFlag == "M3") {
            A7 = ""
        } else {
            if (AP.menuFlag == "G" || Bi && Bi.length > 0 && !Bb) {
                A7 = $(Ar.format([Bk + pageMessage.mealdeal_price_begin])).addClass("pro_price_group")
            } else {
                A7 = $(Ar.format([Bk]))
            }
        }
        var AM = "";
        if (AP.menuFlag == "P" && (!Bi || Bi.length == 0)) {
            AM = "单品价"
        } else {
            if (AP.menuFlag == "M" || AP.menuFlag == "M1" || AP.menuFlag == "M2") {
                AM = "套餐价"
            }
        }
        if (AP.menuFlag == "P" && computationPrice(AY) != "NaN" && computationPrice(AY) != "0.0" && (!Bi || Bi.length == 0)) {
            A7 = $(Ar.format([pageMessage.memberPrice + Bk]));
            A4 = $(v.format([AM + " " + AB + pageMessage.home_Per]))
        }
        if (AY && AY.indexOf(",") > -1) {
            var AR = AY.split(",");
            if (AR[1] && AR[1].match("[0-9]+")) {
                A7 = $(Ar.format([pageMessage.memberPrice + Bk]));
                var Bg = $.moneyFormat((computationPrice(AR[1]) == "NaN" || computationPrice(AR[1]) == "0.0") ? "" : computationPrice(AR[1]));
                A4 = $(v.format([AR[0] + " " + Bg + pageMessage.home_Per]))
            }
        }
        if (computationPrice(AX) != "NaN" && computationPrice(AX) != "0.0" && (!Bi || Bi.length == 0)) {
            A7 = $(Ar.format([Bk]));
            A4 = $(v.format([AM + " " + AN + pageMessage.home_Per]))
        }
        if (AX && AX.indexOf(",") > -1) {
            var AR = AX.split(",");
            if (AR[1] && AR[1].match("[0-9]+")) {
                A7 = $(Ar.format([Bk]));
                var Bg = $.moneyFormat((computationPrice(AR[1]) == "NaN" || computationPrice(AR[1]) == "0.0") ? "" : computationPrice(AR[1]));
                A4 = $(v.format([AR[0] + " " + Bg + pageMessage.home_Per]))
            }
        }
        var Bo = $(F.format([A1]));
        var AK = $(Ag.format([AV]));
        var AG = $(s.format([A1]));
        var Au = $(Aj).addClass("p_clear_both");
        var AO = $(A);
        var AW = $(Aj).addClass("p_ta_center");
        var A2 = "";
        if (AL == "0") {
            if (AP.isChangeActivityMenu != "Y" && AP.isAddYuanActivityMenu != "Y") {
                AK.addClass("pro_number_input3").attr("readonly", "readonly");
                A2 = $(f).addClass("pro_number").append(AK)
            }
        } else {
            if (A5 != "G") {
                AK.addClass("pro_number_input");
                A2 = $(f).addClass("pro_number").append(Bo, AK, AG);
                if (A5 == "M3") {
                    A2.css("margin-left", "43px")
                }
            }
        }
        if (A5 == "G" || Bi && Bi.length > 0 && !Bb) {
            A2 = $(f).addClass("pro_number")
        }
        var AH = $(W).append(Bc);
        var A6 = $(Aj).append(A7, A2);
        var AS = "";
        var a = "";
        if (AL == 7) {
            A7.addClass("wow_hidden");
            A2.addClass("wow_hidden")
        }
        if (A5 == "V") {
            if (Aw == 0 && Bn == 1) {
                if (A9 == "1") {
                    a = $(Aj);
                    Bp.width("558px").height("135").css("border", "0px");
                    Bc.width("559px").height("135")
                } else {
                    return
                }
            } else {
                if (AZ == 1) {
                    A3 = $(As.format([AJ]));
                    a = $('<p style="min-height:55px;">').append(A3);
                    AO = AO.addClass("order_btn");
                    AS = $(X).append(a, Au.append(AO))
                } else {
                    if (A9 == "1") {
                        A3 = $(As.format([$.localStr({cn: A0, en: AY}, 1)]));
                        a = $(Aj).addClass("p_h60px").append(A3);
                        AS = $(X).append(a, AW.append(AO.addClass("see_details_btn")))
                    } else {
                        return
                    }
                }
            }
        } else {
            A3 = $(As.format([AJ]));
            a = $(Aj).append(A3);
            if ("CN" == $.localStr({
                    cn: "CN",
                    en: ""
                }, 1) && AP.isChangeActivityMenu != "Y" && AP.isAddYuanActivityMenu != "Y") {
                if ($.localStr({cn: AD, en: AA}, 1)) {
                    a = a.append($('<span class="couponDesc">' + $.localStr({cn: AD, en: AA}, 1) + "</span>"))
                } else {
                    a = a.append($('<span class="couponDesc">&nbsp;</span>'))
                }
            }
            AO = AO.addClass("order_btn");
            if (A5 == "M2" || A5 == "M3") {
                AO.addClass("mealdealDeatil");
                AO.val("")
            } else {
                if (A5 == "G" || Bi && Bi.length > 0 && !Bb) {
                    AO.addClass(A5 == "G" ? "groupDeatil" : "condimentButton");
                    AO.val("")
                } else {
                    if (A5 == "p") {
                        AO.addClass("mealdealDeatil");
                        AO.val("")
                    }
                }
            }
            if (A9 == "0") {
                AO = AO.addClass("order_btn_h");
                if (A5 == "M2" || A5 == "M3") {
                    AO.removeClass("mealdealDeatil")
                } else {
                    if (A5 == "G") {
                        AO.removeClass("groupDeatil")
                    }
                }
                if ("1" == AC) {
                    AO = AO.addClass("order_btn_h");
                    if (A5 == "M2" || A5 == "M3") {
                        AO.addClass("mealdealDeatil_h");
                        AO.val("")
                    } else {
                        if (A5 == "G") {
                            AO.addClass("groupDeatil_h");
                            AO.val("")
                        }
                    }
                } else {
                    if ("1" == Bj) {
                        AO = AO.addClass("timeArrived_btn");
                        AO.val(AF + property.sale)
                    }
                }
            }
            AS = $(X).append(a, A4, A6, Au.append(AO))
        }
        if (A9 == "0" && "1" == AC) {
            var Bm = $(x.format([A1 + $.localStr({
                cn: "/res/images/isOutOfStock.png",
                en: "/res/images/en/isOutOfStock.png"
            }, 1)])).width("50px").height("50px");
            Bf = $(f).addClass("ersee_superscript_img").append(Bm);
            AH.append(Bf)
        } else {
            if (AT) {
                var Be = AT.imageEn;
                var AE = AT.cornerMarkType;
                var Av = AT.nameCn;
                var Ax = AT.nameEn;
                var Bf = "";
                if (AE == 1) {
                    var Bm = $(x.format([p + Be])).width("50px").height("50px");
                    Bf = $(f).addClass("ersee_superscript_img").append(Bm)
                } else {
                    var Az = $.localStr({cn: Av, en: Ax}, 1);
                    Bf = $(f).addClass("ersee_superscript_txt red yellow gray").text(Az)
                }
                AH.append(Bf)
            }
        }
        AH.click(function () {
            var Bu = KFC_Products.getProductById(AV);
            MidevDSP.productDetailDSP(_currentIclass.id, Bu, Bq);
            if (A5 == "V") {
                if (Aw == 0 && Bn == 1) {
                    if (Ba.indexOf("appIndex") >= 0) {
                        base.setAction("appIndex.action")
                    } else {
                        var Bv = Ba.split("/");
                        var Bs = Bv.length - 1;
                        if (Bv[Bs] != "null") {
                            window.open(Ba)
                        }
                    }
                } else {
                    if (AZ == 1) {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "menu", "wt.msg", AP.name)
                        }
                        KFC_Comon.initContent(A8)
                    } else {
                        if (AZ == 2) {
                            if (Ba.indexOf("appIndex") >= 0) {
                                base.setAction("appIndex.action")
                            } else {
                                var Bv = Ba.split("/");
                                var Bs = Bv.length - 1;
                                if (Bv[Bs] != "null") {
                                    window.open(Ba)
                                }
                            }
                        }
                    }
                }
            } else {
                if (Bu.menuFlag == "P" && Bu.condimentRoundList.length > 0) {
                    var Br = true;
                    for (var Bt = 0; Bt < Bu.condimentRoundList.length; Bt++) {
                        if (Bu.condimentRoundList[Bt].condimentItemList.length > 1) {
                            Br = false;
                            break
                        }
                    }
                    if (!Br) {
                        KFC_HTML.initCondiment(Bu);
                        return
                    }
                }
                KFC_PopUp_Show.pop_show(AV, true)
            }
        });
        AW.click(function () {
            if (Aw != 0 && Bn != 1) {
                if (AZ == 1) {
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "menu", "wt.msg", AP.name)
                    }
                    KFC_Comon.initContent(A8)
                } else {
                    if (AZ == 2) {
                        if (Ba.indexOf("appIndex") >= 0) {
                            base.setAction("appIndex.action")
                        } else {
                            window.open(Ba)
                        }
                    }
                }
            }
        });
        a.click(function () {
            if (A5 == "V") {
                AW.click()
            }
        });
        Bo.click(function () {
            G.subProductNumById(AV);
            AK.val(G.getProductById(AV).num)
        });
        AG.click(function () {
            G.addProductNumById(AV, AL);
            AK.val(G.getProductById(AV).num)
        });
        AO.click(function () {
            if (A5 == "V") {
                if (AZ == 1) {
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "menu", "wt.msg", AP.name)
                    }
                    KFC_Comon.initContent(A8)
                }
                return
            }
            var Bz = C.getItemNmuById(AV);
            var Bv = G.getProductById(AV);
            var Bx = Bv.num;
            var BB = Bv.lightFlag;
            var Br = Bv.isOrderFlag;
            var BC = Bv.menuType;
            var BA = Bv.maxQty;
            if ("1" == AC || "1" == Bj) {
                return
            }
            if (Bv.menuType == 7) {
                KFC_HTML.toWOWBarrel(AV);
                return
            }
            if (Bv.menuFlag == "P" && Bv.condimentRoundList.length > 0) {
                var By = {
                    productId: Bv.systemId,
                    "itemType": 0,
                    "mealFlag": false,
                    "quantity": Bx,
                    "condimentItems": [],
                    modify: true
                };
                var Bt = true;
                for (var Bw = 0; Bw < Bv.condimentRoundList.length; Bw++) {
                    if (Bv.condimentRoundList[Bw].condimentItemList.length > 1) {
                        Bt = false;
                        break
                    } else {
                        By.condimentItems.push({
                            productId: Bv.condimentRoundList[Bw].condimentItemList[0].productId,
                            itemType: 11,
                            mealFlag: false,
                            quantity: Bv.condimentRoundList[Bw].itemCount,
                            modify: true
                        })
                    }
                }
                if (!Bt) {
                    KFC_HTML.initCondiment(Bv)
                } else {
                    var BD = KFC_Cart.getCartItmesById(By.productId);
                    if (BD) {
                        var Bu = By.quantity + BD.quantity;
                        By.quantity = Bu;
                        for (var Bw = 0; Bw < By.condimentItems.length; Bw++) {
                            By.condimentItems[Bw].quantity *= Bu
                        }
                    }
                    KFC_Comon.initCart("/executeCondimentItems.action", {
                        mealList: JSON.stringify([By]),
                        fixCondiment: 1,
                        productId: By.productId
                    })
                }
                return
            }
            if (BC == "0") {
                BA = AI - KFC_Cart.getHptNum()
            }
            if (BB == "0") {
                return
            }
            if (Br == "0") {
                return
            }
            MidevDSP.productDetailDSP(_currentIclass.id, Bv, Bq);
            var Bs = KFC_flexibleCombos.getFlexibleComboItemById(AV, flexibleComboList);
            if (Bv.menuFlag == "M1" || Bv.menuFlag == "M2" || Bv.menuFlag == "M3") {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(AV);
                return
            }
            if (Bv.menuFlag == "G") {
                KFC_Group_PopUp_Show.pop_show(AV);
                return
            }
            if (BC == "0") {
                if (Bx > BA || Bx == 0) {
                    G.modifyProductNumById(AV, 1);
                    AK.val(G.getProductById(AV).num);
                    base.yumAlert(property.errorOrderItemsNum.format([BA]));
                    return
                }
            } else {
                if (Bz + Bx > BA || Bx == 0) {
                    G.modifyProductNumById(AV, 1);
                    AK.val(G.getProductById(AV).num);
                    base.yumAlert(property.errorOrderItemsNum.format([BA]));
                    return
                }
            }
            if ((!isOldProcess || $.cookie(yumCfg.myNotNeed) != "true" || Bv.menuFlag == "M1" || Bv.menuFlag == "M2" || Bv.menuFlag == "M3") && KFC_Promotions.getPromItemsById(AV)) {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(AV);
                if (!isOldProcess && (Bv.menuFlag == "M1" || Bv.menuFlag == "M2" || Bv.menuFlag == "M3")) {
                    return
                }
            }
            if (Bv.menuFlag == "G") {
                KFC_Group_PopUp_Show.pop_show(AV);
                return
            }
            C.addProToCartById(AV);
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAdd", "wt.msg", "txt", "wt.pn_sku", AV)
            }
            if (I.getStatus().code && I.getStatus().code != serviceCode.SUC_CODE) {
                return
            }
        });
        AK.keyup(function () {
            var Br = this.value;
            if (!/^[\d]{1,2}$/.test(String(Br))) {
                this.value = 1;
                return
            }
            G.modifyProductNumById(AV, Br)
        });
        return Bp.append(AH, AS)
    };
    var O = "<tr/>", c = "<td/>", i = '<td class="order_table_td1"/>',
        e = '<td class="order_table_td2"  style="text-align:left">{0}</td>',
        w = '<a href="' + Z + '"><img src="{0}' + KFC_Constant.img.cart_minus_icon + '"></a>',
        Ab = '<span class="ft_b">{0}</span>',
        g = '<a href="' + Z + '"><img src="{0}' + KFC_Constant.img.cart_add_icon + '"></a>',
        n = '<td class="order_table_td3" >{0}</td>',
        P = '<a href="' + Z + '"><img src="{0}' + KFC_Constant.img.cart_del_icon + '"></a>',
        An = '<span class="order_price">' + pageMessage.subtotal + ':<em>{0}</em></span><span class="order_price">' + pageMessage.deliverFee + '<font color="red">{1}</font>:<em>{2}</em></span>',
        N = '<span class="netUser_price">' + property.promotionNotice + "</span>",
        U = '<span class="order_price">' + pageMessage.total + ":<em>{0}</em></span>";
    var h = function (a) {
        $($(".Price")[0]).html(computationPrice(a.subtotal));
        $($(".Price")[1]).html(computationPrice(a.deliverFee));
        $($(".Price")[3]).html(computationPrice(a.totalProvince));
        if (0 == Number(a.totalProvince)) {
            $($(".Price")[3]).hide();
            $($(".Price")[3]).prev().hide()
        } else {
            $($(".Price")[3]).hide();
            $($(".Price")[3]).prev().hide()
        }
        $("#prodesc").html(a.cartRemark);
        if (a.channelName) {
            $("#netUser_price").html(property.promotionNotice);
            $("#netUser_price").show()
        } else {
            $("#netUser_price").html("");
            $("#netUser_price").hide()
        }
        $($(".Price")[2]).html(computationPrice(a.total))
    };
    var Ah = function (p) {
        var AK = p.id, Av = p.name, AN = computationPrice(p.price), Ax = p.num, Az = p.isPromo,
            AM = m.getGlobalVarByParam("base"), AL = p.isAutoPromo, AO = computationPrice(p.realPrice), Aw = p.itype,
            AC = p.orderItemId, Au = p.varibleCondiment;
        p_itmeTpye = p.itemType;
        var AG = $('<div class="pro_title">{0}</div>'.format([Av])),
            AD = $('<div class="del"><a href="javascript:void(0);"></a></div>'), a = $('<div class="pro_numbers">'),
            AA = "";
        if (Az || p_itmeTpye == 4) {
            var AE = $("<label>{0}{1}</label>".format([Ax, pageMessage.fen]));
            a.append(AE);
            AA = $('<div class="price">{0}</div>'.format([AO]))
        } else {
            var AJ = "";
            var Ay = "";
            var AB = "";
            var AH = "";
            if (1 == Ax) {
                AJ = "minus_icon_2s_dis.gif";
                AB = 'style="cursor: default;"'
            } else {
                AJ = "minus_icon_2s.gif";
                AB = 'style="cursor: pointer;"'
            }
            if (99 == Ax) {
                Ay = "plus_icon_2s_dis.gif";
                AH = 'style="cursor: default;"'
            } else {
                Ay = "plus_icon_2s.gif";
                AH = 'style="cursor: pointer;"'
            }
            var AI = $('<a href="javascript:void(0);" {0} class="doMinus"><img src="{1}/res/images/{2}"></a>'.format([AB, AM, AJ])),
                AE = $('<input type="text" class="pro_numbers_input" value="{0}" maxlength="2" disabled="disabled" onkeyup="this.value=this.value.replace(/D/g,\'\');">'.format([Ax])),
                AF = $('<a href="javascript:void(0);" {0} class="doPlus"><img src="{1}/res/images/{2}"></a>'.format([AH, AM, Ay]));
            if (p.itemType != 7 && p.itemType != 8 && ("," + Au + ",").indexOf("," + AK + ",") == -1) {
                a.append(AI, AE, AF)
            } else {
                var AE = $("<label>{0}{1}</label>".format([Ax, pageMessage.fen]));
                a.append(AE)
            }
            AA = $('<div class="price">{0}</div>'.format([AN]));
            AI.click(function () {
                KFC_Cart.data("operFlag", "sub");
                KFC_Cart.data("productId", AK);
                C.subProToOrderById(AK, Az)
            });
            AF.click(function () {
                KFC_Cart.data("operFlag", "add");
                KFC_Cart.data("productId", AK);
                C.addProToOrderById(AK, Az)
            })
        }
        AD.click(function () {
            KFC_Cart.data("operFlag", "del");
            C.deletProById(AK, Az, AC)
        });
        return $("<li>").append(AG, AD, a, AA)
    };
    var o = "<a />", Aa = '<img width="558" height="354" src="{0}" alt="{1}" />',
        D = '<img width="274" height="140" src="{0}" alt="{1}" />',
        S = '<img width="558" height="354" src="{0}" alt="{1}" />', L = '<img src="{0}"/>', Ad = "<div/>";
    var Ae = function (AA) {
        var Az = AA.imageUrl;
        var AF = AA.linkedUrl;
        var AK = AA.classId;
        var AJ = AA.linkType;
        var a = AA.smallPictureUrl;
        var p = AA.isPopup;
        var AG = AA.title;
        var Ax = m.getGlobalVarByParam("base");
        var AH = $(Ad);
        var AI = $(Ad).addClass("bannerPopupBg").css("display", "none");
        var Aw = $(Ad).addClass("bannerPopup").css("display", "none");
        var AE = $(Ad).addClass("bannerPopupSmall").css("display", "none");
        var AC = $(o);
        var AB = $(L.format([Az]));
        var Au = $(L.format([a]));
        var AD = $(L.format([Ax + "/" + KFC_Constant.img.pop_banner_close])).addClass("closeBannerPopup");
        var Av = $(L.format([Ax + "/" + KFC_Constant.img.pop_banner_close])).addClass("closeBannerPopupSmall");
        AC.append(AB);
        Aw.append(AC, AD);
        AE.append(Au, Av);
        AH.append(AI, Aw, AE);
        AE.click(function () {
            if ($.browser.msie && $.browser.version == 6) {
                AI.height($(document).height()).width($(document).width())
            }
            AI.show();
            Aw.show().css("left", ($(document).width() - Aw.width()) / 2);
            AE.hide()
        });
        AC.click(function () {
            if (AJ == 1) {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "首页超链接", "wt.msg", AG)
                }
                KFC_Comon.initContent(AK, "wowBarrel_PopOut")
            } else {
                if (AJ == 2) {
                    if (AF.indexOf("appIndex") >= 0) {
                        base.setAction("appIndex.action")
                    } else {
                        window.open(AF, "", "")
                    }
                }
            }
        });
        AI.click(function () {
            Ay()
        });
        AD.click(function () {
            Ay()
        });
        var Ay = function () {
            AI.hide();
            Aw.hide();
            AE.show()
        };
        Av.click(function (AL) {
            AL.stopPropagation();
            AE.hide();
            popBannerClose = false
        });
        return AH
    };
    var Ak = function (a) {
        var Ax = a.imageUrl;
        var AG = a.type;
        var AE = a.position;
        var Au = a.linkedUrl;
        var AD = a.classId;
        var AF = a.linkType;
        var AA = a.title;
        var AC = a.bflag;
        var AH = a.lflag;
        var AI = a.rflag;
        var AB = a.bigOrder;
        var p = a.titleCn;
        var Az = $(o);
        var Aw = $(Aa.format([Ax, p]));
        var Ay = $(D.format([Ax, p]));
        var Av = $(S.format([Ax, p]));
        if (AG == 1) {
            if (AB == 1) {
                Az.addClass("kv_C_a").append(Aw)
            } else {
                Az = $('<a style="display:none;"/>');
                Az.addClass("kv_C_a").append(Av)
            }
        } else {
            if (AE == 1) {
                if (AH < 1) {
                    Az.addClass("fl_l").append(Ay)
                }
            } else {
                if (AI < 1) {
                    Az.addClass("fl_r").append(Ay)
                }
            }
        }
        Az.click(function () {
            var AJ = $(this).find("img").attr("alt");
            if ($(this).hasClass("fl_l")) {
                var AL = "SubBanner_1_" + AJ;
                window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_SubBanner1_click", "wt.msg", AL)
            } else {
                if ($(this).hasClass("fl_r")) {
                    var AK = "SubBanner_2_" + AJ;
                    window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_SubBanner2_click", "wt.msg", AK)
                } else {
                    var AN = $(this).index(), AM = "Banner_" + AN + "_" + AJ;
                    window._tag && _tag.dcsMultiTrack("wt.event", "HomePage_Banner_click", "wt.msg", AM)
                }
            }
            if (AF == 1) {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "首页超链接", "wt.msg", AA)
                }
                KFC_Comon.initContent(AD, "wowBarrel_Banner")
            } else {
                if (AF == 2) {
                    if (Au.indexOf("appIndex") >= 0) {
                        base.setAction("appIndex.action")
                    } else {
                        window.open(Au, "", "")
                    }
                }
            }
        });
        return Az
    };
    var z = function (Ax) {
        if (typeof Ax == "string") {
            Ax = parseInt(Ax)
        }
        var Aw = '<div id="kvNav" class="kvNav"/>',
            p = '<a class="trigger imgSelected" href="javascript:void(0);">{0}</a>',
            Ay = '<a class="trigger" href="javascript:void(0);">{0}</a>';
        var Au = $(Aw);
        for (var Av = 1; Av <= Ax; Av++) {
            if (Av > 6) {
                break
            }
            if (Av == 1) {
                var a = $(p.format([Av]))
            } else {
                var a = $(Ay.format([Av]))
            }
            Au.append(a)
        }
        return Au
    };
    var t = '<p onclick="wlClick({0},{1})"/>', d = "<a/>", u = "<img/>", l = "<span/>";
    var Al = function (p) {
        var a = p.rType;
        var Aw = p.linkCid;
        var AD = p.linkUrl;
        var Ay = p.titleCn;
        var Au = p.titleEn;
        var AB = p.textCn;
        var Az = p.textEn;
        var AH = p.textType;
        var AE = m.getGlobalVarByParam("base");
        var AA = AE + KFC_Constant.img.wordLink_hot;
        var Av = AE + KFC_Constant.img.wordLink_new;
        var AG;
        if (AH == 1) {
            AG = $(u).attr("src", AA)
        } else {
            AG = $(u).attr("src", Av)
        }
        var AC = $(l).text(property.moreDetail);
        var AF = $(d).attr("title", $.localStr({cn: Ay, en: Au}, 1)).text($.localStr({
                cn: AB,
                en: Az
            }, 1) + " ").append(AG, AC);
        var Ax = "";
        if (a == 2) {
            Ax = "'" + AD + "'"
        } else {
            if (a == 1) {
                Ax = Aw
            }
        }
        return $(t.format([a, Ax])).append(AF)
    };
    var y = "<p/>", Y = "<a/>", j = "<li/>", At = "<ul/>", Af = "<img/>", J = "<div/>", M = "<span/>", r = "<h4/>",
        Am = '<input id="notWarn" type="checkbox" value="" /> ',
        E = '<label for="notWarn">&nbsp;' + property.noWarn + "</label>",
        q = '<input type="text" value="1" maxlength="2" />';
    var H = function (p, a, Ay) {
        var Ax = $(J).addClass("popup_main_title_product");
        var Az = $(J).addClass("popup_main_product");
        var Au = $(At);
        Au.append(a);
        Az.append(Au);
        var Aw = p;
        var Av = "";
        if (Ay) {
            Av = $(J).addClass("popup_main_title");
            Av.append(Aw);
            return Ax.append(Av, Az)
        } else {
            var AA = $("<span>").html(property.couponTitleAdd + "<br/>" + property.couponTitleUse);
            AA.addClass("popup_main_title_span");
            Av = $("<h4>").addClass("popup_main_title");
            Av.append(Aw);
            return Ax.append(AA, Av, Az)
        }
    };
    var V = function (AB) {
        var AG = AB.pId;
        var AH = AB.imagePath ? AB.imagePath : KFC_Constant.img.no_pic;
        var p = AB.name;
        var AD = AB.index_Itemp;
        var a = AB.pmid;
        var Ay = m.getGlobalVarByParam("base");
        var AI = m.getGlobalVarByParam("httpVersionPath");
        var Ax = AB.isCheckPic;
        var Av = $(j);
        var AF = $(Af).attr("src", AI + AH);
        var AA = $(M).addClass("ImgBox").append(AF);
        var Aw = $(M).addClass("popup_txt").text(p);
        var Au = $(Y).addClass("doMinus").attr("href", Z).append($("<img></img>").attr("src", Ay + KFC_Constant.img.pop_minus_icon));
        var Az = $(q).addClass("pro_number_input2").attr("productId", AG).val(0);
        var AE = $(Y).addClass("doPlus").attr("href", Z).append($("<img></img>").attr("src", Ay + KFC_Constant.img.pop_add_icon));
        var AC = $(M).addClass("product_number").append(Au, Az, AE);
        Au.click(function () {
            Q.subPromotionNumById(AG, a);
            Az.val(Q.getPromItemsById(AG)[a].currentQuantity)
        });
        AE.click(function () {
            Q.addPromotionNumById(AG, a, Ax);
            Az.val(Q.getPromItemsById(AG)[a].currentQuantity)
        });
        Az.keyup(function () {
            var AJ = this.value;
            if (!/^[\d]{1,2}$/.test(String(AJ))) {
                this.value = 1;
                return
            }
            Q.modifyPromotionNumById(AG, a, AJ);
            Az.val(Q.getPromItmesNumById(AG, a))
        });
        return Av.append(AA, Aw, AC)
    };
    var R = function (AM) {
        var AE = G.getProductById(AM);
        var AO = B.getNcoById(AM);
        var AR = m.getGlobalVarByParam("httpVersionPath");
        var AA = m.getGlobalVarByParam("base");
        var Au = m.getGlobalVarByParam("httpCornerMarkPath");
        var Az = $.moneyFormat(computationPrice(AE.price));
        var a = Az + pageMessage.home_Per;
        if (AE.menuFlag == "G") {
            if (!$.isEnglish()) {
                a = Az + pageMessage.mealdeal_price_begin + pageMessage.home_Per
            }
        } else {
            if (AE.menuFlag == "M3") {
                a = ""
            }
        }
        var AL = "";
        if (AE.menuFlag == "G") {
            AL = $(f).addClass("price pro_price_group_popup").text(a)
        } else {
            if (AE.menuFlag == "M3") {
                AL = $(f).addClass("price").text(a)
            }
        }
        var AJ = $(Af).attr("src", AA + KFC_Constant.img.pop_minus_icon);
        var AK = $(Y).addClass("doMinus").attr("href", Z).append(AJ);
        var Aw = $(q).addClass("pro_number_input2").val(AE.num);
        var AG = $(Af).attr("src", AA + KFC_Constant.img.pop_add_icon);
        var AS = $(Y).addClass("doPlus").attr("href", Z).append(AG);
        var Ay = "";
        if (AE.menuType == "0") {
            Aw.attr("readonly", "readonly");
            Ay = $(M).addClass("product_number").append(Aw)
        } else {
            if (AE.menuFlag != "G") {
                Ay = $(M).addClass("product_number").append(AK, Aw, AS)
            }
        }
        var Ax = $(J).addClass("price_span_1").append(AL, Ay);
        var AT = $(Af).attr("src", AR + AE.imageUrl);
        var AU = $(J).addClass("popup_product_detail_img");
        if ("0" == AE.lightFlag && "1" == AE.disabledFlag) {
            var AF = "";
            var AD = $(Af).attr("src", AA + $.localStr({
                    cn: "/res/images/isOutOfStock.png",
                    en: "/res/images/en/isOutOfStock.png"
                }, 1)).width("130px").height("111px");
            AF = $(f).addClass("ersee_superscript_img").append(AD);
            AU.append(AT, AF)
        } else {
            if (AO) {
                var AF = "";
                if (AO.cornerMarkType == 1) {
                    var AD = $(Af).attr("src", Au + AO.imageEn).width("130px").height("111px");
                    AF = $(f).addClass("ersee_superscript_img").append(AD)
                } else {
                    var p = $.localStr({cn: AO.nameCn, en: AO.nameEn}, 1);
                    AF = $(f).addClass("nco").text(p)
                }
                AU.append(AT, AF)
            } else {
                AU.append(AT)
            }
        }
        var Av = $(r).text($.localStr({cn: AE.nameCn, en: AE.nameEn}, 1));
        var AQ = $(y).html($.localStr({cn: AE.descCn, en: AE.descEn}, 1));
        var AB = $(y).text(property.avaliableTime + AE.saleTimeDesc);
        var AC = $(y).text(property.avaliableDate + AE.saleValidDateDesc);
        var AH = $(y).text(property.avaliableZone + $.localStr({
                cn: AE.promotionAreaCn,
                en: AE.promotionAreaEn ? AE.promotionAreaEn : ""
            }, 1));
        var AN = $(y).addClass("price_font_small");
        if (AE.menuFlag == "M3") {
            var AI = $(J).addClass("detail_txt").append(AQ, AB, AC, AH, AN)
        } else {
            var AI = $(J).addClass("detail_txt").append(AQ, AB, AC, AH)
        }
        var AP = $(J).addClass("popup_product_detail_txt").append(Av, AI);
        AS.click(function () {
            G.addProductNumById(AM, AE.menuType);
            Aw.val(G.getProductNumById(AM))
        });
        AK.click(function () {
            G.subProductNumById(AM);
            Aw.val(G.getProductNumById(AM));
            var AW = Q.getPromotionVosById(AM);
            var AX = Q.getPromNum(AW);
            var AV = Q.vaildPromQuantity(AW, AX, AM);
            if (!AV) {
                $("input[productId=" + AM + "]").val(0);
                for (var AY in AW.items) {
                    AW.items[AY].currentQuantity = 0
                }
            }
        });
        Aw.keyup(function () {
            var AV = this.value;
            if (!/^[\d]{1,2}$/.test(String(AV))) {
                this.value = 1;
                return
            }
            G.modifyProductNumById(AM, AV)
        });
        if (WOWInfo.pId == AM) {
            return $(J).append(AU, AP)
        } else {
            return $(J).append(AU, AP, Ax)
        }
    };
    var T = function (AN, Az, AK, Ay) {
        var AA = m.getGlobalVarByParam("base");
        var p = G.getProductById(AK);
        var AE = p ? p.isOrderFlag : "1";
        var AI = $(Af).attr("src", function () {
            if (AN == "") {
                return AA + KFC_Constant.img.pop_close_icon02
            } else {
                return AA + KFC_Constant.img.pop_close_icon
            }
        });
        var a = $(Y);
        var AD = $(y).addClass("close_icon").append(a.append(AI));
        var AB = $(J);
        if (AN) {
            AB.addClass("popup_product_detail").append(AN)
        }
        var AH = $(J);
        if (Az) {
            AH.addClass("propmDetail").append(Az)
        }
        var AP = $(J).addClass("clear");
        var AF = $(y).addClass("popup_btn");
        if (AN) {
            var AQ = true;
            var AO = $(Af).attr("src", AA + $.localStr({
                    cn: KFC_Constant.img.pop_btn_Order,
                    en: KFC_Constant.img.pop_btn_Order_en
                }, 1));
            if (AE == "0") {
                AO = $(Af).attr("src", AA + $.localStr({
                        cn: KFC_Constant.img.pop_btn_noOrder,
                        en: KFC_Constant.img.pop_btn_noOrder_en
                    }, 1));
                if ("1" == p.disabledFlag) {
                    AO = $(Af).attr("src", AA + $.localStr({
                            cn: KFC_Constant.img.pop_btn_noOrder,
                            en: KFC_Constant.img.pop_btn_noOrder_en
                        }, 1))
                } else {
                    if ("1" == p.willSaleFlag) {
                        AO = $(Af).attr("src", AA + $.localStr({
                                cn: KFC_Constant.img.pop_btn_timeArrived,
                                en: KFC_Constant.img.pop_btn_timeArrived_en
                            }, 1));
                        AF.append('<div style="position: absolute;margin-top: 5px;cursor: pointer;width: 100%;text-align: center;left:0px;color:#fff">' + p.saleTimeDesc + property.sale + "</div>")
                    }
                }
            }
            var AJ = $(Y).addClass("orderBtn").attr("href", Z);
            AF.append(AJ.append(AO));
            $(AJ).unbind().click(function () {
                if ("1" == p.disabledFlag || "1" == p.willSaleFlag) {
                    return
                }
                if (AE == "0") {
                    return
                }
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "orderAdd", "wt.msg", "pic", "wt.pn_sku", AK)
                }
                var AV = KFC_Products.getProductById(AK);
                if (AV.menuFlag == "G") {
                    KFC_Group_PopUp_Show.pop_show(AK);
                    return
                }
                if (AV.menuFlag == "P" && AV.condimentRoundList.length > 1) {
                    var AU = {
                        productId: AV.systemId,
                        "itemType": 0,
                        "mealFlag": false,
                        "quantity": AV.num,
                        "condimentItems": [],
                        modify: true
                    };
                    var AR = true;
                    for (var AS = 0; AS < AV.condimentRoundList.length; AS++) {
                        if (AV.condimentRoundList[AS].condimentItemList.length > 1) {
                            AR = false;
                            break
                        } else {
                            AU.condimentItems.push({
                                productId: AV.condimentRoundList[AS].condimentItemList[0].productId,
                                itemType: 11,
                                mealFlag: false,
                                quantity: AV.condimentRoundList[AS].itemCount,
                                modify: true
                            })
                        }
                    }
                    if (!AR) {
                        KFC_HTML.initCondiment(AV)
                    } else {
                        var AW = KFC_Cart.getCartItmesById(AU.productId);
                        if (AW) {
                            var AT = AU.quantity + AW.quantity;
                            AU.quantity = AT;
                            for (var AS = 0; AS < AU.condimentItems.length; AS++) {
                                AU.condimentItems[AS].quantity *= AT
                            }
                        }
                        KFC_Comon.initCart("/executeCondimentItems.action", {
                            mealList: JSON.stringify([AU]),
                            fixCondiment: 1,
                            productId: AU.productId
                        })
                    }
                } else {
                    KFC_PopUp_Show.OrderSubmit(AK, AQ)
                }
                var AX = KFC_flexibleCombos.getFlexibleComboItemById(AK, flexibleComboList);
                if (AV.menuFlag == "M2" || AV.menuFlag == "M3") {
                    KFC_dialog.close_dialog("#popupCon");
                    flexibleComboDetail.getFlexiblePop(AK, AV.num, AX, function () {
                        KFC_Comon.initPropAndPromToNum(AK)
                    });
                    return
                }
                KFC_Comon.initPropAndPromToNum(AK);
                KFC_dialog.close_dialog(Ay)
            })
        } else {
            var Au = $(Af).attr("src", AA + $.localStr({
                    cn: KFC_Constant.img.pop_btn_notNeed,
                    en: KFC_Constant.img.pop_btn_notNeed_en
                }, 1));
            var AC = $(Af).attr("src", AA + $.localStr({
                    cn: KFC_Constant.img.pop_btn_Order,
                    en: KFC_Constant.img.pop_btn_Order_en
                }, 1));
            var Av = $(Y).addClass("not_need").attr("href", Z);
            var AM = $(Y).addClass("pro_submit").attr("href", Z);
            var Ax = $(Am);
            var AG = $(E);
            var AL = $(Aj).addClass("check").append(Ax, AG);
            AF.append(Av.append(Au), AM.append(AC)).after(AL);
            Ax.click(function () {
                KFC_dialog.myNotNeed($(this).is(":checked"))
            });
            Av.unbind().click(function () {
                KFC_Comon.initPropAndPromToNum(AK);
                KFC_dialog.close_dialog(Ay)
            });
            AM.unbind().click(function () {
                var AR = Q.getPromotionVosById(AK);
                if (!KFC_Promotions.getPromNum(AR)) {
                    base.yumAlert(property.promItemNumIsNull);
                    return
                }
                KFC_PopUp_Show.OrderSubmit(AK);
                KFC_Comon.initPropAndPromToNum(AK);
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "popPromotion", "wt.pn_sk", AR.id)
                }
                KFC_dialog.close_dialog(Ay)
            })
        }
        var Aw = $(J);
        AI.unbind().click(function () {
            KFC_Comon.initPropAndPromToNum(AK);
            KFC_dialog.close_dialog("#popupCon")
        });
        return Aw.append(AD, AB, AH, AP, AF)
    };
    var Ap = function (Ax, AP) {
        var Az = Ax.disabledFlag;
        var AW = Ax.willSaleFlag;
        var AH = m.getGlobalVarByParam("base");
        var p = m.getGlobalVarByParam("httpCornerMarkPath");
        var A2 = m.getGlobalVarByParam("httpVersionPath");
        var AF = m.getGlobalVarByParam("halfPriceNumber");
        var AJ = Ax.systemId;
        var AY = $('<div id="sinP{0}" class="single_pro" />'.format([Ax.systemId]));
        var AQ = Ax.imageUrl;
        if (!AQ) {
            AQ = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var AZ = $('<div class="pro_img" />');
        var Au = $('<img class="prod_pic" src="{0}"/>'.format([A2 + AQ]));
        AZ.append(Au);
        var A1 = $('<div class="pro_info" />');
        var Ay = $("<h4>{0}</h4>".format([$.localStr({cn: Ax.nameCn, en: Ax.nameEn}, 1)]));
        A1.append(Ay);
        var a = $('<p class="mt2px min_height"> {0} </p>'.format([$.localStr({cn: Ax.descCn, en: Ax.descEn}, 1)]));
        A1.append(a);
        var AN = $('<p class="mt2px">{0}{1}</p>'.format([property.avaliableTime, Ax.saleTimeDesc]));
        A1.append(AN);
        var AT = $('<p class="mt2px">{0}{1}</p>'.format([property.avaliableDate, Ax.saleValidDateDesc]));
        A1.append(AT);
        var AC = $('<p class="mt2px">{0}{1}</p>'.format([property.avaliableZone, $.localStr({
            cn: Ax.promotionAreaCn,
            en: Ax.promotionAreaEn
        }, 1)]));
        A1.append(AC);
        var AA = $("<p/>");
        var AV = $('<input type="button">');
        var AI = KFC_flexibleCombos.getFlexibleComboItemById(Ax.productId, flexibleComboList);
        if (AI) {
            AV.data("flexibleComboItem", AI)
        }
        AV.addClass("order_btn");
        if ("0" == Ax.lightFlag) {
            AV.addClass("order_btn_h");
            if ("1" == Az) {
                AV.addClass("order_btn_h")
            } else {
                if ("1" == AW) {
                    AV.addClass("timeArrived_btn");
                    AV.val(Ax.saleTimeDesc + property.sale)
                }
            }
        }
        if ("0" == Ax.menuType && C.getAllCartItems() && KFC_Cart.getHptNum() >= AF) {
            AV.addClass("order_btn_h")
        }
        if (Ax.menuFlag == "M2" || Ax.menuFlag == "M3") {
            AV.addClass("mealdealDeatil");
            AV.val("")
        } else {
            if (Ax.menuFlag == "G") {
                AV.addClass("groupDeatil");
                AV.val("")
            }
        }
        AA.append(AV);
        var AX = $.moneyFormat(computationPrice(Ax.price));
        var AO = "";
        if (Ax.menuFlag == "G") {
            AO = $('<span class="pro_price"><font class="red">{0}</font>{1}</span>'.format([(AX + pageMessage.mealdeal_price_begin), pageMessage.home_Per]))
        } else {
            if (Ax.menuFlag != "M3") {
                AO = $('<span class="pro_price"><font class="red">{0}</font>{1}</span>'.format([AX, pageMessage.home_Per]))
            }
        }
        if (!AP.status || AP.status.code != 50000) {
            AA.append(AO)
        }
        var AG = $('<span class="pro_number"/>');
        if (Ax.menuType != "0" && Ax.menuFlag != "G") {
            var AL = $('<a href="javascript:void(0)"><img  src="../../images/minus_icon_2.gif" /></a>'.format([m.getGlobalVarByParam("base")]));
            AG.append(AL)
        }
        var AE = "";
        if (Ax.menuType != "0" && Ax.menuFlag != "G") {
            AE = '<input type="text" class="pro_number_input" value="1" maxlength="2" id="' + AJ + '" />'
        } else {
            if (Ax.menuType == "0") {
                AE = '<input type="text" class="pro_number_input" value="1" maxlength="2" disabled="disabled" id="' + AJ + '" />'
            }
        }
        var AU = $(AE);
        AG.append(AU);
        if (Ax.menuType != "0" && Ax.menuFlag != "G") {
            var AM = $('<a href="javascript:void(0)"><img src="../../images/add_icon._2.gif"/></a>'.format([m.getGlobalVarByParam("base")]));
            AG.append(AM)
        }
        if (!AP.status || AP.status.code != 50000) {
            AA.append(AG)
        }
        if (Ax.menuType == 7) {
            AO.addClass("wow_hidden");
            AG.addClass("wow_hidden")
        }
        A1.append(AA);
        AY.append(AZ);
        AY.append(A1);
        var AB = B.getNcoById(AJ);
        if ("0" == Ax.lightFlag && "1" == Az) {
            var A0 = $(x.format([AH + $.localStr({
                cn: "/res/images/isOutOfStock.png",
                en: "/res/images/en/isOutOfStock.png"
            }, 1)])).width("50px").height("50px");
            AR = $(f).addClass("ersee_superscript_img").append(A0);
            AZ.append(AR)
        } else {
            if (AB) {
                var AS = AB.imageEn;
                var AD = AB.cornerMarkType;
                var Av = AB.nameCn;
                var Aw = AB.nameEn;
                var AR = "";
                if (AD == 1) {
                    var A0 = $(x.format([p + AS])).width("50px").height("50px");
                    AR = $(f).addClass("ersee_superscript_img").append(A0)
                } else {
                    var AK = $.localStr({cn: Av, en: Aw}, 1);
                    AR = $(f).addClass("ersee_superscript_txt red yellow gray").text(AK)
                }
                AZ.append(AR)
            }
        }
        if (AM) {
            AM.click(function () {
                G.addProductNumById(AJ, Ax.menuType);
                AU.val(G.getProductNumById(AJ))
            })
        }
        if (AL) {
            AL.click(function () {
                G.subProductNumById(AJ);
                AU.val(G.getProductNumById(AJ))
            })
        }
        AU.keyup(function () {
            var A3 = this.value;
            if (!/^[\d]{1,2}$/.test(String(A3))) {
                this.value = 1;
                return
            }
            G.modifyProductNumById(AJ, A3)
        });
        AZ.click(function () {
            var A3 = G.getProductById(AJ);
            MidevDSP.productDetailDSP(_currentIclass.id, A3, A2);
            KFC_PopUp_Show.pop_show(AJ, true)
        });
        AV.click(function () {
            if (Ax.menuFlag == "V") {
                return
            }
            var A3 = C.getItemNmuById(AJ);
            var A5 = G.getProductById(AJ);
            var A7 = A5.num;
            var A8 = Ax.lightFlag;
            var A4 = Ax.isOrderFlag;
            var A9 = Ax.menuType;
            var A6 = Ax.maxQty;
            if (AJ == WOWInfo.pId || A5.menuType == 7) {
                KFC_HTML.toWOWBarrel(AJ);
                return
            }
            MidevDSP.productDetailDSP(_currentIclass.id, A5, A2);
            if (Ax.menuFlag == "M1" || A5.menuFlag == "M2" || A5.menuFlag == "M3") {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(AJ);
                return
            }
            if (Ax.menuFlag == "G") {
                KFC_Group_PopUp_Show.pop_show(AJ);
                return
            }
            if ("0" == A9 && C.getAllCartItems() && KFC_Cart.getHptNum() >= AF) {
                A4 = "0"
            } else {
                A4 = "1"
            }
            if (A9 == "0") {
                A6 = AF - KFC_Cart.getHptNum()
            }
            if ("1" == Az || "1" == AW) {
                return
            }
            if (A8 == "0") {
                return
            }
            if (A4 == "0") {
                return
            }
            if (AV.hasClass("order_btn_h")) {
                return
            }
            if (A9 == "0") {
                if (A7 > A6 || A7 == 0) {
                    G.modifyProductNumById(AJ, 1);
                    AU.val(G.getProductById(AJ).num);
                    base.yumAlert(property.errorOrderItemsNum.format([A6]));
                    return
                }
            } else {
                if (A3 + A7 > A6 || A7 == 0) {
                    G.modifyProductNumById(AJ, 1);
                    AU.val(G.getProductById(AJ).num);
                    base.yumAlert(property.errorOrderItemsNum.format([A6]));
                    return
                }
            }
            C.addProToCartById(AJ);
            if (Q.getPromItemsById(AJ)) {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(AJ);
                return
            }
            if (I.getStatus().code && I.getStatus().code != serviceCode.SUC_CODE) {
                return
            }
            if ($.cookie(yumCfg.myNotNeed) == "true") {
                return
            }
        });
        return AY
    };
    var Aq = function (Av) {
        var Au = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
        var p = G.getProductById(Av);
        p.isWOWFlag = 1;
        MidevDSP.productDetailDSP($.trim(WOWInfo.cId), p, Au);
        if (validIE6().indexOf("MSIE 6.0") > 0) {
            base.yumAlert(property.wowBarrelNoIE6);
            return
        }
        var a = KFC_Cart.validWowBarrelItem();
        if (a == null) {
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "WOW", "wt.msg", WOWInfo.clickType)
            }
            setTimeout(function () {
                base.setAction("wowBarrel.action?classId=" + _currentIclass.id)
            }, 50);
            return
        } else {
            base.yumConfirm(property.wowBarrelCartError, function () {
                var Ax = a;
                var Ay = {opFlag: 0, objectId: Ax.index, orderItemId: Ax.id, productId: Ax.productId, quantity: 0};
                var Aw = "executeOrder.action";
                $.ajax({
                    url: requestContextPath + "/" + Aw,
                    type: "post",
                    dataType: "json",
                    data: Ay,
                    success: function (Az) {
                        if (!Az) {
                            return
                        }
                        if (KFC_Comon.vaildStatus(Az.status)) {
                            return
                        }
                        if (!Az.order) {
                            return
                        }
                        if (!Az.order.items) {
                            return
                        }
                        base.setAction("wowBarrel.action?classId=" + _currentIclass.id)
                    }
                })
            })
        }
    };
    var K = function (Ax) {
        var a = $(Ax.order.collects).size() == 0 ? 0 : 1;
        var Av = $(Ax.order.kfcPromotions).size();
        $("#cart_promotion_list").html("");
        if (0 == Av && 0 == a) {
            $(".cart_promotion").hide();
            if ("cn" == $.localStr({cn: "cn", en: "en"}, 1)) {
                $(".order_detail").css("height", "265px")
            } else {
                $(".order_detail").css("height", "255px")
            }
        } else {
            $(".cart_promotion").show();
            if ("cn" == $.localStr({cn: "cn", en: "en"}, 1)) {
                $(".order_detail").css("height", "167px")
            } else {
                $(".order_detail").css("height", "157px")
            }
            if (1 == a) {
                var Ay = Ax.order.collects[0].listCollectPromotionVo;
                var p = $.localStr({cn: Ay[0].couponTitleCn, en: Ay[0].couponTitleEn}, 1);
                var Az = Number(Ay[0].balance) / 100;
                var Aw = '<span class="Til2">{0}' + property.balance + "</span>";
                Aw = Aw.format([p, Az]);
                var Au = $("<li>").append($(Aw));
                $("#cart_promotion_list").append(Au)
            }
            if (0 != Av) {
                $.each(Ax.order.kfcPromotions, function (AB, AC) {
                    if ((9 - a + 1) > AB) {
                        var AA = $.localStr({cn: AC.couponTitleCn, en: AC.couponTitleEn}, 1);
                        var AD = $("<li>").append($('<span class="Til">{0}</span>'.format([AA])));
                        if (AC.showMode == 1) {
                            AD.append($('<span class="other01"><a promid="{0}" prodid="" name="addPromotion" href="javascript:void(0);"></a></span>'.format([AC.id])))
                        } else {
                            if (1 == AC.items.length && 1 == AC.maxQuantity) {
                                AD.append($('<span class="other01"><a promid="{0}" prodid="{1}" name="addPromotion" href="javascript:void(0);"></a></span>'.format([AC.id, AC.items[0].pmid])))
                            } else {
                                AD.append($('<span class="other02"><a promid="{0}" name="promotionDetail" href="javascript:void(0);" class="P_layer_bf"></a></span>'.format([AC.id])))
                            }
                        }
                        $("#cart_promotion_list").append(AD)
                    } else {
                        return false
                    }
                });
                $("[name=addPromotion]").click(function () {
                    var AE = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"{2}","isMeal":0}';
                    var AA = '{"productId":"","count":"","items":[{0}]}';
                    var AC = $(this).attr("promid");
                    var AB = 1;
                    var AD = $(this).attr("prodid");
                    var AF = AA.format([AE.format([AB, AC, AD])]);
                    KFC_Comon.initCart("/executeCartPromo.action", {jsonStr: AF});
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "cartPromotion", "wt.pn_sk", AC)
                    }
                });
                $("[name=promotionDetail]").click(function () {
                    var AD = $(this).attr("promid");
                    var AH = null;
                    $.each(Ax.order.kfcPromotions, function (AN, AO) {
                        if (AD == AO.id) {
                            AH = AO
                        }
                    });
                    if (null != AH) {
                        var AJ = $.localStr({cn: AH.couponTitleCn, en: AH.couponTitleEn}, 1),
                            AG = $("#cart_prom_pop").html();
                        $("<div id='pop_cart_prom' style='overflow:hidden'>").append(AG).dialog({
                            resizable: false,
                            height: "auto",
                            width: 582,
                            draggable: false,
                            fixed: false,
                            position: {my: "center", at: "center", of: window, collision: "fit"},
                            modal: true,
                            open: function () {
                                $(this).find("#popbox_bf").removeAttr("style").show()
                            }
                        });
                        $("#pop_cart_prom").height(450);
                        $("#pop_cart_prom").find("#cart_prom_title").html(AJ);
                        $("#pop_cart_prom").find("#prod_list").attr("curnum", AH.currentQuantity);
                        var AF = $("#pop_cart_prom").find("#prod_list").html();
                        $("#pop_cart_prom").find("#prod_list").html("");
                        var AM = $(AH.items).size();
                        for (var AC = 0; AC < AM; AC++) {
                            var AK = AH.items[AC], AA = $.localStr({cn: AK.nameCN, en: AK.nameEN}, 1),
                                AE = AK.imagePath, AI = m.getGlobalVarByParam("httpVersionPath"),
                                AL = '<img src="{0}{1}">'.format([AI, AE]), AB = $(AF).attr("pitid", AK.pmid);
                            AB.find(".ImgBox").html(AL);
                            AB.find(".Til").html(AA);
                            $("#pop_cart_prom").find("#prod_list").append(AB)
                        }
                        $("#pop_cart_prom").find("ul").attr("maxnum", AH.maxQuantity);
                        $("#pop_cart_prom").find(".close02").click(function () {
                            $("#pop_cart_prom").dialog("close");
                            $("#pop_cart_prom").remove()
                        });
                        $("#pop_cart_prom").find(".layerorder_btn02").click(function () {
                            $("#pop_cart_prom").dialog("close");
                            $("#pop_cart_prom").remove()
                        });
                        $("#pop_cart_prom").find(".doMinus").click(function () {
                            var AN = $(this).next(".pro_number_input");
                            var AO = $(this).parents("ul");
                            if (0 != Number(AN.val())) {
                                AN.val(Number(AN.val()) - 1);
                                AO.attr("curnum", Number(AO.attr("curnum")) - 1)
                            }
                            b()
                        });
                        $("#pop_cart_prom").find(".doPlus").click(function () {
                            var AN = $(this).prev(".pro_number_input");
                            var AO = $(this).parents("ul");
                            if (Number(AO.attr("curnum")) + 1 <= Number(AO.attr("maxnum"))) {
                                AN.val(Number(AN.val()) + 1);
                                AO.attr("curnum", Number(AO.attr("curnum")) + 1)
                            }
                            b()
                        });
                        $("#pop_cart_prom").find(".layerorder_btn").click(function () {
                            var AP = '{"count":{0},"promotionId":{1},"name":"","classId":"","promotionItemId":"{2}","isMeal":0}';
                            var AN = '{"productId":"","count":"","items":[{0}]}';
                            var AQ = "";
                            var AO = [];
                            $("#pop_cart_prom").find("#prod_list").find("li").each(function () {
                                var AR = $(this).find("input").val();
                                if (AR != 0) {
                                    var AS = $(this).attr("pitid");
                                    AO.push(AP.format([AR, AD, AS]))
                                }
                            });
                            if (AO.length == 0) {
                                base.yumAlert(property.infoMinOrderItemNum);
                                return
                            }
                            AQ = AN.format([AO.join(",")]);
                            $("#pop_cart_prom").dialog("close");
                            $("#pop_cart_prom").remove();
                            KFC_Comon.initCart("/executeCartPromo.action", {jsonStr: AQ});
                            if (window._tag) {
                                _tag.dcsMultiTrack("wt.event", "cartPromotion", "wt.pn_sk", AD)
                            }
                        })
                    }
                })
            }
        }
    };
    var b = function () {
        var p = 0;
        var a = "";
        $("#pop_cart_prom").find(".pro_number").each(function () {
            var Ax = $(this), Av = Number(Ax.children(".pro_number_input").val()),
                Aw = Ax.children(".doMinus").children(), Au = Aw.attr("src");
            if (!a) {
                a = Au.substring(0, Au.lastIndexOf("/"))
            }
            if (0 == Av) {
                Aw.attr("src", a + "/minus_icon_2_dis.gif")
            } else {
                Aw.attr("src", a + "/minus_icon_2.gif")
            }
            p += Av
        });
        if (p == Number($("#pop_cart_prom").find("ul").attr("maxnum"))) {
            $("#pop_cart_prom").find(".doPlus").children().attr("src", a + "/add_icon._2_dis.gif")
        } else {
            $("#pop_cart_prom").find(".doPlus").children().attr("src", a + "/add_icon._2.gif")
        }
    };
    var Ac = function (AR) {
        var AG = $(".home_bg_mid");
        AG.empty();
        var AO = m.getGlobalVarByParam("httpVersionPath");
        var Az = $('<div class="product_box"></div>');
        var AE = $("<img />").attr("src", AO + AR.imageUrl);
        var AJ = $('<div class="product_detail_img"></div>');
        var Aw = $('<div class="product_detail_txt"></div>');
        var AL = $("<h4></h4>").html($.trimD(AR.nameCn));
        var AN = $("<label></label>").html(AR.descCn);
        var AI = $('<p class="mt2px"><label>{0}</label>{1}</p>'.format([property.avaliableTime, AR.saleTimeDesc]));
        var AH = $('<p class="mt2px"><label>{0}</label>{1}</p>'.format([property.avaliableDate, AR.saleValidDateDesc]));
        var Av = $('<p class="mt2px"><label>{0}</label>{1}</p>'.format([property.avaliableZone, $.localStr({
            cn: AR.promotionAreaCn,
            en: AR.promotionAreaEn
        }, 1)]));
        var AB = $('<ul class="fixRound"></ul>');
        var AA = $('<div class="variableRoundList"></div>');
        var AD = $('<div class="sc"><div class="left"><label>小计：</label><label class="price"></label><label class="tips">（不含外送费）</label></div></div>');
        var AP = $('<div class="widget-num"><a class="icon-reduce"><img src="' + basePath + KFC_Constant.img.prod_minus_icon + '" /></a><label class="num"></label><a class="icon-plus"><img src="' + basePath + KFC_Constant.img.prod_add_icon + '" /></a></div>');
        var Au = $('<a class="addSc"></a>');
        Au.click(function () {
            var AY = [];
            var AW = {productId: AR.systemId, "itemType": 0, "mealFlag": false, "quantity": 1, "condimentItems": []};
            var AU = $(".fixPro");
            var AX = $(".variableRound");
            if (AU && AU.length > 0) {
                for (var AT = 0; AT < AU.length; AT++) {
                    var AV = $(AU[AT]).data("product");
                    AW.condimentItems.push({
                        productId: AV.productId,
                        itemType: 11,
                        mealFlag: false,
                        quantity: $(AU[AT]).attr("rountCount")
                    })
                }
            }
            for (var AT = 0; AT < AX.length; AT++) {
                var AS = $(AX[AT]).find(".rightDiv div.on").data("product");
                AW.condimentItems.push({
                    productId: AS.productId,
                    itemType: 11,
                    mealFlag: false,
                    quantity: $(AX[AT]).attr("rountCount")
                })
            }
            for (var AT = 0; AT < parseInt($(".widget-num .num").text()); AT++) {
                AY.push(AW)
            }
            KFC_Comon.initCart("/executeCondimentItems.action", {
                mealList: JSON.stringify(AY),
                fixCondiment: 0,
                productId: AW.productId
            })
        });
        AD.append(AP).append(Au);
        Aw.append(AL);
        Aw.append(AN);
        Aw.append(AI);
        Aw.append(AH);
        Aw.append(Av);
        var Ax = AR.price;
        var a = AR.price;
        for (var AM = 0; AM < AR.condimentRoundList.length; AM++) {
            var p = AR.condimentRoundList[AM];
            if (p.condimentItemList.length == 1) {
                var AC = $('<li class="fixPro"><div class="round"></div><div class="pro"><img /><label></label></div></li>');
                AC.data("product", p.condimentItemList[0]);
                AC.attr("rountCount", p.itemCount);
                AC.find(".round").html("已选" + p.roundNameCn + "<label style='color:#c6000a;'>&nbsp;<font>" + p.itemCount + "</font>份</label>");
                AC.find(".pro img").attr("src", AO + p.condimentItemList[0].imageUrl);
                AC.find(".pro label").text($.trimD(p.condimentItemList[0].menuCn));
                Ax += p.condimentItemList[0].price * p.itemCount;
                a += p.condimentItemList[0].price * p.itemCount;
                if (AB.find("li") && AB.find("li").length % 3 != 0) {
                    AC.css("margin-left", "69px")
                }
                AB.append(AC)
            } else {
                var AQ = $('<div class="variableRound"></div>');
                AQ.attr("rountCount", p.itemCount);
                AQ.append($('<div class="title"></div>').html("请选择" + p.roundNameCn + "<label style='color:#c6000a;'>&nbsp;<font>" + p.itemCount + "</font>份</label>"));
                var AK = $('<div class="content"><img /><div class="rightDiv"></div></div>');
                AK.find("img").attr("src", AO + p.condimentItemList[0].imageUrl);
                var AF = p.condimentItemList[0].price * p.itemCount;
                for (var Ay = 0; Ay < p.condimentItemList.length; Ay++) {
                    if (p.condimentItemList[Ay].price < AF) {
                        AF = p.condimentItemList[Ay].price
                    }
                }
                a += AF * p.itemCount;
                for (var Ay = 0; Ay < p.condimentItemList.length; Ay++) {
                    var AC = $("<div class='off'><label class='nameCn'></label><label class='tips'></label></div>");
                    AC.data("product", p.condimentItemList[Ay]);
                    AC.attr("price", p.condimentItemList[Ay].price);
                    AC.find(".nameCn").text($.trimD(p.condimentItemList[Ay].menuCn));
                    AC.find(".tips").hide();
                    if (p.condimentItemList[Ay].price - AF != 0) {
                        AC.find(".tips").html("+￥<font>" + computationPrice(p.condimentItemList[Ay].price - AF) + "</font>元换购");
                        AC.find(".tips").show()
                    }
                    AK.find("div.rightDiv").append(AC)
                }
                AK.find("div.rightDiv div").click(function () {
                    var AS = $(this).data("product");
                    Ax += ($(this).attr("price") - $(this).parent().find("div.on").attr("price")) * p.itemCount;
                    AD.find(".left .price").html("<font>￥</font>" + computationPrice(Ax * parseInt(AD.find(".widget-num .num").text())));
                    $(this).parent().prev().attr("src", AO + AS.imageUrl);
                    $(this).siblings().removeClass("on");
                    $(this).addClass("on")
                });
                Ax += p.condimentItemList[0].price * p.itemCount;
                AK.find("div.rightDiv div:eq(0)").addClass("on");
                AQ.attr("minPrice", AF);
                AQ.append(AK);
                AA.append(AQ)
            }
        }
        AD.find(".widget-num .num").text(1);
        AD.find(".widget-num .icon-plus").click(function () {
            $(this).prev().text(parseInt($(this).prev().text()) + 1);
            var AS = $(".fixPro .round label font");
            for (var AT = 0; AT < AS.length; AT++) {
                $(AS[AT]).text(parseInt($(AS[AT]).text()) / (parseInt($(this).prev().text()) - 1) * parseInt($(this).prev().text()))
            }
            AD.find(".left .price").html("<font>￥</font>" + computationPrice(Ax * parseInt($(this).prev().text())));
            $(".variableRound .title label font").text(parseInt($(".variableRound .title label font").text()) / (parseInt($(this).prev().text()) - 1) * parseInt($(this).prev().text()))
        });
        AD.find(".widget-num .icon-reduce").click(function () {
            if (parseInt($(this).next().text()) > 1) {
                $(this).next().text(parseInt($(this).next().text()) - 1);
                AD.find(".left .price").html("<font>￥</font>" + computationPrice(Ax * parseInt($(this).next().text())));
                var AS = $(".fixPro .round label font");
                for (var AT = 0; AT < AS.length; AT++) {
                    $(AS[AT]).text(parseInt($(AS[AT]).text()) / (parseInt($(this).next().text()) + 1) * parseInt($(this).next().text()))
                }
                $(".variableRound .title label font").text(parseInt($(".variableRound .title label font").text()) / (parseInt($(this).next().text()) + 1) * parseInt($(this).next().text()))
            }
        });
        AD.find(".left .price").html("<font>￥</font>" + computationPrice(Ax));
        Aw.append("<p class='salePrice'>售价 <span style='color:#c6000a;'><font>￥</font>" + computationPrice(a) + "</span> 起</p>");
        Az.append(AJ.append(AE));
        Az.append(Aw);
        AG.append(Az);
        if (AB.find("li") && AB.find("li").length > 0) {
            AG.append(AB)
        }
        AG.append(AA);
        AG.append(AD)
    };
    return {
        getBannerTemp: Ak,
        getBannerPopTemp: Ae,
        getCartTemp: Ah,
        getCartPriceTemp: h,
        getProductTemp: Ao,
        getPropDatil: V,
        getPropMain: H,
        getPopMain: T,
        getProdDetail: R,
        getBannerCorner: z,
        getWordLink: Al,
        getSingleProductTemp: Ap,
        getCartPromotion: K,
        toWOWBarrel: Aq,
        initCondiment: Ac
    }
}();
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
var KFC_PopUp_Show = function () {
    var B = function (D, I, K) {
        var E = $(".popup_main");
        var C = "#popupCon";
        E.empty();
        var H = "";
        var G = "";
        var L = KFC_Products;
        var J = L.getProductById(D);
        if (I) {
            H = KFC_HTML.getProdDetail(D)
        }
        if (isOldProcess) {
            if (KFC_Comon.vaildPromNum(D, I)) {
                G = KFC_Promotions.addHtml(D, I)
            }
            if (J.menuFlag == "M1" || J.menuFlag == "M2" || J.menuFlag == "M3") {
                if (I) {
                    G = KFC_Promotions.addHtml(D, I)
                } else {
                    $(window).scrollTop(0);
                    popCombo.getFlexHtml($(".home_bg_mid"), D, K);
                    return
                }
            }
        } else {
            if (KFC_Comon.vaildPromNum(D, I) || J.menuFlag == "M1" || J.menuFlag == "M2" || J.menuFlag == "M3") {
                if (I) {
                    G = KFC_Promotions.addHtml(D, I)
                } else {
                    $(window).scrollTop(0);
                    popCombo.getFlexHtml($(".home_bg_mid"), D, K)
                }
            }
        }
        if (H == "" && G == "") {
            return
        }
        E.attr("class", "popup_main").addClass(function () {
            if (H == "") {
                return "popbox_p_bg01"
            }
            return !G ? "popbox_p_bg03" : "popbox_p_bg02"
        });
        E.append(KFC_HTML.getPopMain(H, G, D, C));
        var F = "middle_bg";
        KFC_dialog.show_dialog(F, C)
    };
    var A = function (O, T, S) {
        var W = KFC_Promotions.getPromItemsById(O);
        var N = KFC_Products.getProductById(O);
        if (O == WOWInfo.pId) {
            KFC_HTML.toWOWBarrel(O);
            return
        }
        if (N.menuFlag == "M2" || N.menuFlag == "M3") {
            var J = KFC_flexibleCombos.getFlexibleComboItemById(O, flexibleComboList);
            flexibleComboDetail.getFlexiblePop(O, N.num, J, function () {
                KFC_Comon.initPropAndPromToNum(O)
            });
            return
        }
        if (W == null) {
            if (N.menuFlag == "P") {
                var R = {productId: N.systemId, quantity: N.num, itype: N.menuType};
                KFC_Comon.initCart("/executeOrder.action", R);
                return
            } else {
                var R = {
                    productId: N.systemId,
                    quantity: N.num,
                    classId: N.classExtId,
                    objectId: N.p_index,
                    itype: N.menuType,
                    menuFlag: N.menuFlag
                };
                KFC_Comon.initCart("/executeMealItems.action", R);
                return
            }
        }
        var D = "";
        var H = '{"count":{0},"promotionId":{1},"name":"{2}","classId":"{3}","promotionItemId":"{4}","isMeal":{5}}';
        var Q = '{"productId":"{0}","count":"{1}", "mFlag":"{2}","index":"{3}","itype":"{4}","items":[{5}]}';
        if (typeof W == "object") {
            for (var F in W) {
                var C = W[F].currentQuantity;
                if (S) {
                    if (S == F) {
                        if (C != 0) {
                            var E = W[F].nameCN;
                            var K = W[F].id;
                            var I = W[F].pmid;
                            var V = W[F].classId;
                            if (D) {
                                D += ","
                            }
                            D += H.format([C, K, E, V, I, 0])
                        }
                        break
                    }
                } else {
                    if (C != 0) {
                        var E = W[F].nameCN;
                        var K = W[F].id;
                        var I = W[F].pmid;
                        var V = W[F].classId;
                        if (D) {
                            D += ","
                        }
                        D += H.format([C, K, E, V, I, 0])
                    }
                }
            }
        }
        var L = "";
        var G = "";
        var P = "";
        var M = 0;
        var U = "";
        if (T) {
            L = N.num;
            G = N.systemId;
            P = N.menuFlag;
            M = N.p_index;
            if (N.menuType) {
                U = N.menuType
            }
        }
        Q = Q.format([G, L, P, M, U, D]);
        KFC_Comon.initCart("/executePromo.action", {jsonStr: Q})
    };
    return {OrderSubmit: A, pop_show: B}
}();
var KFC_Carnival = {
    specialClassTemp: function (D) {
        var B = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
        var A = '<li class="title1"><div class="showPicPop showPP_IE7"><img src="{0}" name="menuImg" style="width: 558px; height: 179px;"></div></li>';
        var C = D.imageUrl;
        if (!C) {
            C = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var E = $(A.format([B + C]));
        return E
    },
    specialClassForOneTemp: function (G, B) {
        var C = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
        var A = $.localStr({cn: G.imageCnUrl, en: G.imageEnUrl}, 1);
        if (!A) {
            A = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var D = $(KFC_Carnival.htmlTmp.oneHtml.classTemp.format([C + A]));
        var F = G.menuVoList;
        var E = KFC_Carnival.commonFn.getMenu(F, B);
        return D.append(E)
    },
    specialClassForTowOrThreeTemp: function (C, H, E) {
        var B = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
        var K = KFC_GlobalVar.getGlobalVarByParam("base");
        var F = $.localStr({cn: C.imageCnUrl, en: C.imageEnUrl}, 1);
        if (!F) {
            F = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var M = K + "/res/images/carnival/tip.png";
        var I = property.everyDayNoon;
        var A = property.everyDayarvo;
        var G = "off";
        var L = $(KFC_Carnival.htmlTmp.towOrThreeHtml.classTemp.format([B + F, M, I, A]));
        var J = KFC_Carnival.commonFn.getMenu(C.menuVoList, E, G);
        L.find(".noon").append(J);
        var D = KFC_Carnival.commonFn.getMenu(H.menuVoList, E, G);
        L.find(".arvo").append(D);
        return L
    },
    specialClassForFourTemp: function (F, B) {
        var C = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
        var A = $.localStr({cn: F.imageCnUrl, en: F.imageEnUrl}, 1);
        if (!A) {
            A = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var E = F.menuVoList[0].imageUrl;
        if (!E) {
            E = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
        }
        var D = $(KFC_Carnival.htmlTmp.fourHtml.classTemp.format([C + A, C + E]));
        return D
    },
    htmlTmp: {
        ul: "<ul></ul>",
        oneHtml: {
            classTemp: '<li class="title2"><div class="showPicPop showPP_IE7"><img src="{0}" name="menuImg" style="width: 118px; height: 193px;"></div> </li>',
            menuTemp: '<li><div class="showPicPop"><img src="{0}" name="menuImg"></div><div class="pro_info"><p class="center h34"><a href="javascript:;" class="pro_name">{1}</a></p><p class="center" style="margin-right: 0px;"> <span class="pro_price">{2} </span></p><p style="clear: both;" class="center"><img src="{3}" class="order_btn_start"></p></div></li>'
        },
        towOrThreeHtml: {classTemp: '<li class="title3"><div class="showPicPop showPP_IE7" objectid="0"><img src="{0}" name="menuImg" style="width: 118px; height: 193px;"></div><div class="noon"><div class="tip"><img src="{1}" style="width: 146px"></img><div>{2}</div></div></div><div class="arvo"><div class="tip"><img src="{1}" style="width: 146px"></img><div>{3}</div></div></div></li>'},
        fourHtml: {classTemp: '<li class="title4"><div class="showPicPop showPP_IE7" objectid="0"><img src="{0}" name="menuImg" style="width: 118px;height: 152px;"></div><div class="wxPic"><img src="{1}" name="menuImg"></div></li>'}
    },
    commonFn: {
        getMenu: function (B, G, E) {
            var A = $(KFC_Carnival.htmlTmp.ul);
            var F = KFC_GlobalVar.getGlobalVarByParam("base");
            var C = KFC_GlobalVar.getGlobalVarByParam("httpVersionPath");
            var D = 0;
            $.each(B, function (L, J) {
                if (J.cornerMark) {
                    KFC_Ncornermarks.add(J.cornerMark, J.systemId)
                }
                if (G[J.systemId]) {
                    J.lightFlag = "1"
                }
                var H = "chickenNice/" + J.imageUrl;
                if (!H) {
                    H = $.localStr({cn: "no_pic.jpg", en: "no_pic_en.jpg"}, 1)
                }
                H = C + H;
                var K = $.localStr({cn: J.nameCn, en: J.nameEn}, 1);
                var N = $.moneyFormat(computationPrice(J.price)) + pageMessage.home_Per;
                var I = "";
                if (J.willSaleFlag === "1") {
                    I = F + "/res/images/timeArrived_btn.png";
                    if ($.isEnglish()) {
                        I = F + "/res/images/en/timeArrived_btn.png"
                    }
                } else {
                    if ("1" == J.disabledFlag || J.lightFlag === "0") {
                        I = F + "/res/images/order_btn_1.png";
                        if ($.isEnglish()) {
                            I = F + "/res/images/en/order_btn_1.gif"
                        }
                    } else {
                        I = F + "/res/images/order_btn.gif";
                        if ($.isEnglish()) {
                            I = F + "/res/images/en/order_btn.gif"
                        }
                    }
                }
                var M = $(KFC_Carnival.htmlTmp.oneHtml.menuTemp.format([H, K, N, I]));
                if ("off" === E) {
                    M.find(".pro_price").parent().remove()
                }
                M.find(".showPicPop>img").click(function () {
                    KFC_Carnival.commonFn.imgClick(J)
                });
                M.find(".order_btn_start").click(function () {
                    KFC_Carnival.commonFn.orderBtn(J)
                });
                A.append(M);
                KFC_Products.add(J, D, M);
                KFC_HPT.addHalfPirce(J.menuType, J.systemId, M, J.lunch);
                D++
            });
            return A
        }, orderBtn: function (C) {
            var J = C.menuFlag;
            var H = C.linkType;
            var F = C.virtualLinkClass;
            var L = C.systemId;
            var E = C.disabledFlag;
            var B = C.willSaleFlag;
            var O = KFC_GlobalVar.getGlobalVarByParam("halfPriceNumber");
            var M = C.condimentRoundList;
            if (J == "V") {
                if (H == 1) {
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "menu", "wt.msg", C.name)
                    }
                    KFC_Comon.initContent(F)
                }
                return
            }
            var I = KFC_Cart.getItemNmuById(L);
            var G = KFC_Products.getProductById(L);
            var N = G.num;
            var P = G.lightFlag;
            var D = G.isOrderFlag;
            var A = G.menuType;
            var K = G.maxQty;
            if ("1" == E || "1" == B) {
                return
            }
            if (A == "0") {
                K = O - KFC_Cart.getHptNum()
            }
            if (P == "0") {
                return
            }
            if (D == "0") {
                return
            }
            if (A == "0") {
                if (N > K || N == 0) {
                    KFC_Products.modifyProductNumById(L, 1);
                    base.yumAlert(property.errorOrderItemsNum.format([O]));
                    return
                }
            } else {
                if (I + N > K || N == 0) {
                    KFC_Products.modifyProductNumById(L, 1);
                    base.yumAlert(property.errorOrderItemsNum.format([K]));
                    return
                }
            }
            KFC_Cart.addProToCartById(L);
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAdd", "wt.msg", "txt", "wt.pn_sku", L)
            }
            if (KFC_Status.getStatus().code && KFC_Status.getStatus().code != serviceCode.SUC_CODE) {
                return
            }
            if ($.cookie(yumCfg.myNotNeed) == "true") {
                return
            }
            if (KFC_Promotions.getPromItemsById(L)) {
                base.yumCloseLoading();
                KFC_PopUp_Show.pop_show(L)
            }
        }, imgClick: function (C) {
            var A = C.virtualLinkClass;
            var B = C.systemId;
            if (C.menuFlag == "V") {
                if (index == 0 && C.linkShowType == 1) {
                    if (C.virtualLink.indexOf("appIndex") >= 0) {
                        base.setAction("appIndex.action")
                    } else {
                        window.open(C.virtualLink)
                    }
                } else {
                    if (C.linkType == 1) {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "menu", "wt.msg", C.name)
                        }
                        KFC_Comon.initContent(A)
                    } else {
                        if (C.linkType == 2) {
                            if (C.virtualLink.indexOf("appIndex") >= 0) {
                                base.setAction("appIndex.action")
                            } else {
                                window.open(C.virtualLink)
                            }
                        }
                    }
                }
            } else {
                KFC_PopUp_Show.pop_show(B, true)
            }
        }
    }
};
var popCombo = function () {
    var T = "<p/>", J = "<a/>", P = "<li/>", X = "<ul/>", E = "<img/>", L = "<div/>", C = "<span/>", S = "<h4/>",
        Y = '<input id="notWarn" type="checkbox" value="" /> ',
        M = '<label for="notWarn">&nbsp;' + property.noWarn + "</label>",
        D = '<input type="text" value="1" maxlength="2" />';
    var A = "javascript:;";
    var K = "<li/>", B = '<div href="' + A + '" class="showPicPop showPP_IE7"/>', H = '<div class="pro_info"/>',
        e = '<a href="' + A + '" class="pro_name">{0}</a>', U = "<p/>",
        I = '<span class="pro_price">{0}' + pageMessage.home_Per + " </span>", b = "<span/>",
        R = '<a href="' + A + '"><img src="{0}' + KFC_Constant.img.prod_minus_icon + '"/></a>',
        W = '<input type="text" id="{0}" value="1" maxlength="2"/>',
        Z = '<a href="' + A + '"><img src="{0}' + KFC_Constant.img.prod_add_icon + '"/></a>',
        N = '<input type="button" />', f = '<img src="{0}" />';
    var a = KFC_Products;
    var V = KFC_Promotions;
    var G = KFC_GlobalVar;
    var F = KFC_Ncornermarks;
    var c = KFC_Cart;
    var Q = function (o, n, An) {
        o.empty();
        var v = a.getProductById(n);
        var m = F.getNcoById(n);
        var Aq = G.getGlobalVarByParam("httpVersionPath");
        var t = G.getGlobalVarByParam("base");
        var z = G.getGlobalVarByParam("httpCornerMarkPath");
        var Ao = v.price;
        var Af = $(b).addClass("price_font_big").text(computationPrice(v.price));
        var p = v.promotionAmount;
        if (p == null) {
            p = 0
        }
        var w = $(L).addClass("change_meal_count").text(pageMessage.mealdeal_modify_num);
        var h = computationPrice(p);
        var s = $(b).addClass("price_red").text("￥" + h);
        var Ab = $(b);
        if (v.menuFlag == "M3") {
            Ab = Ab.addClass("price_font_small")
        }
        if (!$.isEnglish()) {
            if (v.menuFlag == "M3") {
                var Al = ""
            } else {
                if (v.menuFlag == "G") {
                    var Al = $(b).addClass("product_price pro_price_group").append(Af, pageMessage.yun, pageMessage.mealdeal_price_begin, pageMessage.home_Per, "<br>", Ab)
                } else {
                    var Al = $(b).addClass("product_price").append(Af, pageMessage.yun, pageMessage.home_Per, "<br>", Ab)
                }
            }
        } else {
            if (v.menuFlag == "G") {
                var Al = $(b).addClass("product_price pro_price_group").append(Af, pageMessage.yun, pageMessage.mealdeal_price_begin, pageMessage.home_Per, "<br>", Ab)
            } else {
                var Al = $(b).addClass("product_price").append(pageMessage.yun, Af, pageMessage.home_Per, "<br>", Ab)
            }
        }
        var Ak = $(E).attr("src", t + KFC_Constant.img.pop_minus_icon);
        var Ap = $(J).addClass("doMinus").attr("href", A).append(Ak);
        var l = $(D).addClass("pro_number_input2").val(v.num).attr("id", n);
        var r = $(E).attr("src", t + KFC_Constant.img.pop_add_icon);
        var q = $(J).addClass("doPlus").attr("href", A).append(r);
        var Am = "";
        if (v.menuType == "0") {
            l.attr("readonly", "readonly");
            Am = $(C).addClass("product_number").append(l)
        } else {
            if (v.menuFlag != "G") {
                Am = $(C).addClass("product_number").append(Ap, l, q)
            }
        }
        var x = $(T).addClass("price_span_1").append(Al, Am);
        var i = $(E).attr("src", Aq + v.imageUrl);
        var Ai = $(L).addClass("product_detail_img");
        if ("0" == v.lightFlag && "1" == v.disabledFlag) {
            var Aj = "";
            var Ad = $(E).attr("src", t + $.localStr({
                    cn: "/res/images/isOutOfStock.png",
                    en: "/res/images/en/isOutOfStock.png"
                }, 1)).width("130px").height("111px");
            Aj = $(b).addClass("ersee_superscript_img").append(Ad);
            Ai.append(i, Aj)
        } else {
            if (m) {
                var Aj = "";
                if (m.cornerMarkType == 1) {
                    var Ad = $(E).attr("src", z + m.imageEn).width("130px").height("111px");
                    Aj = $(b).addClass("ersee_superscript_img").append(Ad)
                } else {
                    var Ae = $.localStr({cn: m.nameCn, en: m.nameEn}, 1);
                    Aj = $(b).addClass("nco").text(Ae)
                }
                Ai.append(i, Aj)
            } else {
                Ai.append(i)
            }
        }
        var Ac = $(S).text($.localStr({cn: v.nameCn, en: v.nameEn}, 1));
        var u = $(T).text(property.productInfoTitle);
        var y = $(T).addClass("product_desc").text($.localStr({cn: v.descCn, en: v.descEn}, 1));
        var Ah = $(T).addClass("product_use_detail").text(property.avaliableTime + v.saleTimeDesc + " " + property.avaliableDate + v.saleValidDateDesc + property.avaliableZone + $.localStr({
                cn: v.promotionAreaCn,
                en: v.promotionAreaEn ? v.promotionAreaEn : ""
            }, 1));
        var Aa = $(T).addClass("product_order_btn").text(pageMessage.order);
        var j = $(L).addClass("detail_txt").append(u, y, Ah, x, Aa);
        var Ag = $(L).addClass("product_detail_txt").append(Ac, j);
        Aa.click(function () {
            var Ar = c.getItemNmuById(n);
            var At = a.getProductById(n);
            var Av = At.num;
            var Aw = At.lightFlag;
            var As = At.isOrderFlag;
            var Ax = At.menuType;
            var Au = At.maxQty;
            if (Ax == "0") {
                Au = halfPNum - KFC_Cart.getHptNum()
            }
            if (Aw == "0") {
                return
            }
            if (As == "0") {
                return
            }
            if (Ax == "0") {
                if (Av > Au || Av == 0) {
                    a.modifyProductNumById(n, 1);
                    base.yumAlert(property.errorOrderItemsNum.format([Au]));
                    return
                }
            } else {
                if (Ar + Av > Au || Av == 0) {
                    a.modifyProductNumById(n, 1);
                    base.yumAlert(property.errorOrderItemsNum.format([Au]));
                    return
                }
            }
            KFC_PopUp_Show.OrderSubmit(n, true);
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "orderAdd", "wt.msg", "txt", "wt.pn_sku", n)
            }
        });
        q.click(function () {
            a.addProductNumById(n, v.menuType);
            l.val(a.getProductNumById(n))
        });
        Ap.click(function () {
            a.subProductNumById(n);
            l.val(a.getProductNumById(n));
            var As = V.getPromotionVosById(n);
            if (As == null) {
                return
            }
            var At = V.getPromNum(As);
            var Ar = V.vaildPromQuantity(As, At, n);
            if (!Ar) {
                $("input[productId=" + n + "]").val(0);
                for (var Au in As.items) {
                    As.items[Au].currentQuantity = 0
                }
            }
        });
        l.keyup(function () {
            var Ar = this.value;
            if (!/^[\d]{1,2}$/.test(String(Ar))) {
                this.value = 1;
                return
            }
            a.modifyProductNumById(n, Ar)
        });
        if (An) {
            if (An.showBack) {
                o.append(w, Ai, Ag)
            }
        }
        o.append(Ai, Ag);
        d(n, true, o)
    };
    var d = function (n, r, l) {
        var h = KFC_Promotions.getPromotionVosById(n);
        if (!h) {
            return ""
        }
        var p = h.items;
        var j = $("<div/>");
        var q = 0;
        for (var o in p) {
            var m = p[o];
            if (q >= 3) {
                break
            }
            j.append(O({
                id: m.id,
                name: $.localStr({cn: m.nameCN, en: m.nameEN}, 1),
                price: m.realPrice,
                imagePath: m.imagePath,
                index_Itemp: q++,
                pId: n,
                pmid: m.pmid,
                isCheckPic: r
            }))
        }
        var s = $.localStr({cn: h.couponTitleCn, en: h.couponTitleEn}, 1);
        return g(s, j, l)
    };
    var O = function (r) {
        var w = r.pId;
        var x = r.imagePath ? r.imagePath : KFC_Constant.img.no_pic;
        var i = r.name;
        var t = r.index_Itemp;
        var h = r.pmid;
        var o = G.getGlobalVarByParam("base");
        var y = G.getGlobalVarByParam("httpVersionPath");
        var n = r.isCheckPic;
        var l = $(P);
        var v = $(E).attr("src", y + x);
        var q = $(C).addClass("ImgBox").append(v);
        var m = $(C).addClass("popup_txt").text(i);
        var j = $(J).addClass("doMinus").attr("href", A).append($("<img></img>").attr("src", o + KFC_Constant.img.pop_minus_icon));
        var p = $(D).addClass("pro_number_input2").attr({"productId": w, "id": r.pmid}).val(0);
        var u = $(J).addClass("doPlus").attr("href", A).append($("<img></img>").attr("src", o + KFC_Constant.img.pop_add_icon));
        var s = $(C).addClass("product_number").append(j, p, u);
        var z = $(C).addClass("product_order").text(pageMessage.order);
        z.unbind().click(function () {
            var Aa = V.getPromotionVosById(w);
            if (!KFC_Promotions.getPromNum(Aa)) {
                base.yumAlert(property.promItemNumIsNull);
                return
            }
            KFC_PopUp_Show.OrderSubmit(w, null);
            if (window._tag) {
                _tag.dcsMultiTrack("wt.event", "popPromotion", "wt.pn_sk", Aa.id)
            }
        });
        j.click(function () {
            V.subPromotionNumById(w, h);
            p.val(V.getPromItemsById(w)[h].currentQuantity)
        });
        u.click(function () {
            V.addPromotionNumById(w, h, true);
            p.val(V.getPromItemsById(w)[h].currentQuantity)
        });
        p.keyup(function () {
            var Aa = this.value;
            if (!/^[\d]{1,2}$/.test(String(Aa))) {
                this.value = 1;
                return
            }
            V.modifyPromotionNumById(w, h, Aa);
            p.val(V.getPromItmesNumById(w, h))
        });
        return l.append(q, m, s)
    };
    var g = function (i, h, j) {
        var o = $(L).addClass("main_title_product");
        var p = $(L).addClass("main_product");
        var l = $(X);
        l.append(h);
        p.append(l);
        var n = i;
        var m = "";
        m = $(L).addClass("main_title");
        m.append(n);
        return j.append(o.append(m, p))
    };
    return {getFlexHtml: Q}
}();
var home = {
    init: function () {
        dataLayer.push({"event": "home_load"});
        MidevDSP.loadDSPJs();
        KFC_Menu.init();
        KFC_Cart.submitCart();
        KFC_Comon.initCookie();
        KFC_Comon.initHotLink();
        KFC_Comon.initWordLink();
        KFC_Comon.initCart("/getOrderJson.action", "");
        KFC_Cart.addBeforeLoginProduce();
        KFC_Comon.bindChangeAddressEvent()
    }
};