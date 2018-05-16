var KFC_flexibleCombos = function () {
    var A = function (C, B) {
        var D = null;
        if (B) {
            $.each(B, function (E, F) {
                if (C == F.menuId) {
                    D = F.imenuVos
                }
            })
        }
        return D
    };
    return {getFlexibleComboItemById: A}
}();
var flexibleComboDetail = function () {
    var Y = "<p/>", O = "<a/>", M = "<li/>", B = "<ul/>", V = "<img/>", a = "<div/>", I = "<span/>", e = "<h4/>",
        G = '<input id="notWarn" type="checkbox" value="" /> ',
        E = '<label for="notWarn">&nbsp;' + property.noWarn + "</label>",
        A = '<input type="text" value="1" maxlength="2" />';
    var d = "javascript:;";
    var Q = "<li/>", D = '<div href="' + d + '" class="showPicPop showPP_IE7"/>', c = '<div class="pro_info"/>',
        L = '<a href="' + d + '" class="pro_name">{0}</a>', F = "<p/>",
        K = '<span class="pro_price">{0}' + pageMessage.home_Per + " </span>", b = "<span/>",
        J = '<a href="' + d + '"><img src="{0}' + KFC_Constant.img.prod_minus_icon + '"/></a>',
        S = '<input type="text" id="{0}" value="1" maxlength="2"/>',
        N = '<a href="' + d + '"><img src="{0}' + KFC_Constant.img.prod_add_icon + '"/></a>',
        Z = '<input type="button" />', P = '<img src="{0}" />';
    var T = KFC_Products;
    var R = KFC_Promotions;
    var U = KFC_GlobalVar;
    var C = KFC_Ncornermarks;
    var X = KFC_Cart;
    var W;
    var H = function (s, y, g, v) {
        g = g;
        var r = T.getProductById(s);
        if (g == null) {
            return ""
        }
        var x = g.mealDealDetailVoList;
        if (!x) {
            return ""
        }
        var n = U.getGlobalVarByParam("httpVersionPath");
        $currLi = $(this).parent("li");
        $mealDealVo = $(this).parents(".flexible_item");
        var t = $(".popup_main");
        var h = "#popupCon";
        t.empty();
        t.attr("class", "popup_main").addClass("mealDeal_popbox_p_bg01");
        var j = $(a).addClass("mealDeal_pop_title").text(pageMessage.mealdeal_choose_product);
        var w = $(a).addClass("mealDeal_pop_close");
        var m = $(a).addClass("mealeal_combo_list");
        for (var o = 0; o < y; o++) {
            var l = $(a).addClass("mealdeal_pop_list");
            var u = $(a).addClass("mealdeal_combo_title");
            var q = $(a).addClass("mealdeal_combo_name").text(pageMessage.mealdeal_combo + (o + 1));
            var z = $(a).addClass("mealdeal_combo_close").text("×");
            if (y > 1) {
                if (o == 0) {
                    u.append(q)
                } else {
                    u.append(q, z)
                }
            }
            $.each(x, function (Aa, Ac) {
                var Ah = Ac.mealDealDetailList[0];
                var Ae = false;
                var Aj = $(a).addClass("mealDeal_pop_listItem");
                var Ai = $(a).addClass("mealDeal_pop_list");
                var Ad = $(a).addClass("mealdeal_round_title");
                var Ak = $(I).text($.localStr({cn: Ac.descCn, en: Ac.descEn}, 1));
                $.each(Ac.mealDealDetailList, function (Ap, Al) {
                    var Au = $.localStr({cn: Al.showNameCn, en: Al.showNameEn}, 1);
                    var As = computationPrice(Al.price);
                    var Aq = $(a).addClass("mealDeal_pop_item");
                    var Ar = $(a).addClass("mealDeal_pop_detail");
                    var i = $(a).addClass("mealDeal_pop_radio");
                    var At = $(I).addClass("mealDeal_pop_num");
                    if (Al.defaultSelected == "1") {
                        Ae = true;
                        i.addClass("mealDeal_pop_radio_cur");
                        if (Ac.maxQty == 2) {
                            At.text("X" + Ac.maxQty)
                        }
                    }
                    var Am = $(I).addClass("mealDeal_pop_name").text(Au);
                    var Ao = $(I).addClass("mealDeal_pop_price").text(As);
                    var An = $(I).addClass("mealDeal_pop_per").text(pageMessage.yun + pageMessage.home_Per);
                    if (r.menuFlag == "M2") {
                        Ar.append(i, Am, At)
                    } else {
                        Ar.append(i, Am, Ao, An, At)
                    }
                    Aq.append(Ar);
                    Aq.data("mealDealDetailItem", Al);
                    Ai.append(Aq)
                });
                var Ag = $(I).addClass("mealdeal_round_num");
                if (Ae) {
                    Ag.text("(" + Ac.maxQty + "/" + Ac.maxQty + ")")
                } else {
                    Ag.text("(0/" + Ac.maxQty + ")")
                }
                Ad.append(Ak, Ag);
                var Ab = $(V).attr("src", n + Ah.imageUrl);
                var Af = $(a).addClass("mealDeal_pop_img_div").append(Ab);
                Aj.append(Ad, Af, Ai);
                Aj.data("mealDealVoItem", Ac);
                l.append(Aj)
            });
            m.append(u, l)
        }
        var p = $(a).addClass("mealDeal_pop_ok").append($(a).text(pageMessage.mealdeal_add_to_cart));
        t.append(j, w, m, p);
        var f = "";
        KFC_dialog.show_dialog(f, h);
        $(".mealDeal_pop_radio").click(function () {
            var Ac = $($(this).parents(".mealDeal_pop_item")[0]).data("mealDealDetailItem");
            var i = $($(this).parents(".mealDeal_pop_listItem")[0]).data("mealDealVoItem");
            var Ab = $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealDeal_pop_radio_cur");
            var Aa = i.maxQty;
            if ($(this).hasClass("mealDeal_pop_radio_cur")) {
                if (Ab.length == 2) {
                    $(this).removeClass("mealDeal_pop_radio_cur");
                    Ab = $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealDeal_pop_radio_cur")[0];
                    $(Ab).siblings(".mealDeal_pop_num").text("X2")
                } else {
                    base.yumAlert(property.infoMinOrderItemNum)
                }
            } else {
                if (Aa == 2 && Ab.length == 2) {
                    base.yumAlert(property.errorOrderItemsNum.format([2]))
                } else {
                    if (Ab.length == 1 || Ab.length == 0) {
                        if (Aa == 2) {
                            $(Ab[0]).siblings(".mealDeal_pop_num").text("");
                            $(this).addClass("mealDeal_pop_radio_cur")
                        } else {
                            $(Ab[0]).removeClass("mealDeal_pop_radio_cur");
                            $(this).addClass("mealDeal_pop_radio_cur")
                        }
                        if (Ab.length == 0) {
                            if (Aa == 2) {
                                $(this).siblings(".mealDeal_pop_num").text("X2")
                            }
                            $($(this).parents(".mealDeal_pop_listItem")[0]).find(".mealdeal_round_num").text("(" + Aa + "/" + Aa + ")")
                        }
                    }
                }
            }
        });
        $(".mealDeal_pop_item").mouseover(function () {
            var i = $(this).data("mealDealDetailItem");
            if (i) {
                $(this).parents(".mealDeal_pop_listItem").find("img").attr("src", n + i.imageUrl)
            }
            $(this).css("backgroundColor", "#f8f2e8")
        });
        $(".mealDeal_pop_item").mouseout(function () {
            $(this).css("backgroundColor", "transparent")
        });
        $(".mealDeal_pop_ok>div").click(function () {
            var Ad = new Array();
            var Ac = $(".mealdeal_pop_list");
            var Ab = true;
            $.each(Ac, function (Ah, Ag) {
                var Af = $(Ag).find(".mealDeal_pop_listItem");
                var Ae = new Array();
                if (!Ab) {
                    return
                }
                $.each(Af, function (Am, An) {
                    var Al = $(An).data("mealDealVoItem");
                    var Ai = $(An).find(".mealDeal_pop_radio_cur");
                    if (!Ab) {
                        return
                    }
                    if (Ai.length == 0) {
                        Ab = false;
                        base.yumAlert(pageMessage.mealDeal_not_choose.format([$.localStr({
                            cn: Al.descCn,
                            en: Al.descEn
                        }, 1)]));
                        return
                    } else {
                        if (Al.maxQty == Ai.length) {
                            $.each(Ai, function (Ao, Ap) {
                                var Aq = {};
                                var Ar = $($(Ap).parents(".mealDeal_pop_item")[0]).data("mealDealDetailItem");
                                Aq.productId = Ar.productId;
                                Aq.mealDealId = Al.mealDealId;
                                Aq.productNum = 1;
                                Ae.push(Aq)
                            })
                        } else {
                            var Ak = {};
                            var Aj = $($($(Ai)[0]).parents(".mealDeal_pop_item")[0]).data("mealDealDetailItem");
                            Ak.productId = Aj.productId;
                            Ak.productNum = Al.maxQty;
                            Ak.mealDealId = Al.mealDealId;
                            Ae.push(Ak)
                        }
                    }
                });
                Ad.push(Ae)
            });
            if (!Ab) {
                return
            }
            var i = {
                "productId": s,
                "mealList": JSON.stringify(Ad),
                "objectId": r.p_index,
                "menuFlag": r.menuFlag,
                "itype": r.menuType
            };
            var Aa = "executeFlexibleMealItems.action";
            if (v) {
                v()
            }
            KFC_Comon.initCart(Aa, i);
            KFC_dialog.close_dialog(h)
        });
        $(".mealDeal_pop_close").click(function () {
            if (v) {
                v()
            }
            KFC_dialog.close_dialog(h)
        });
        $(".mealdeal_combo_close").click(function () {
            $(this).parent().next(".mealdeal_pop_list").remove();
            $(this).parent().remove();
            $.each($(".mealdeal_combo_name"), function (Aa, Ab) {
                $(Ab).text(pageMessage.mealdeal_combo + (Aa + 1))
            })
        })
    };
    return {getFlexiblePop: H}
}();
var flexibleComboMainPage = function () {
    var C = function (F, H) {
        KFC_Products.empty();
        KFC_Original.empty();
        KFC_HPT.empty();
        var G = H.httpVirtualPath;
        var I = 0;
        var E = {};
        for (k in H.nMenuVo) {
            if (H.nMenuVo[k].menuType == "0") {
                E[H.nMenuVo[k].lunch] = H.nMenuVo[k].lunch
            }
        }
        $.each(H.nMenuVo, function (L, M) {
            if (E[M.systemId] && M.disabledFlag == "0" && M.willSaleFlag == "0") {
                M.lightFlag = "1"
            }
            if (M.cornerMark) {
                KFC_Ncornermarks.add(M.cornerMark, M.systemId)
            }
            if ("V" != M.menuFlag) {
                var K = KFC_HTML.getSingleProductTemp(M, H);
                F.append(K)
            }
            KFC_Products.add(M, I, K);
            KFC_HPT.addHalfPirce(M.menuType, M.systemId, K, M.lunch);
            I++
        });
        var J = D(H.nMenuVo, H.flexibleComboVo, H.flexibleComboPromotionVo);
        A(F, J);
        $(".change_meal_count").die("click").live("click", function () {
            C(F, H)
        })
    };
    var A = function (F, I) {
        F.empty();
        var G = ['<div class="mealDeal_name"> ', '<div style=" float: left;">' + pageMessage.mealdeal_input_meal_num + "</div>", '<input class="mealDeal_text" id="mealDeal_text1" type="text" value="' + pageMessage.mealdeal_choose_num + '" readonly = "readonly">', '<div class="mealDeal_icon" id="mealDeal_query_right"></div>', '<div class="confirmButton">' + pageMessage.mealdeal_confirm + "</div>", '<ul id="mealDeal_text">',];
        var E = ['<div class="mealDeal_tips"><p class="mealDeal_tips_zi" id="mealDeal_tips_zi">' + pageMessage.mealdeal_choose_num_word + "</p></div>",];
        for (var H = 4; H <= 20; H++) {
            G.push('<li id="mealDeal_selectItem">', '<a class="mealDeal_selectItem">', H, "</a> ", "</li>")
        }
        G.push("</ul>", "</div>");
        F.append(G.join("")).append(E);
        $("#mealDeal_text").hide();
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
            var J = $.trim($(this).text());
            $("#mealDeal_text1").val(J);
            $("#mealDeal_text").hide();
            $("#mealDeal_query_right").removeClass("mealDeal_icon1")
        });
        $(".confirmButton").die("click").live("click", function () {
            var L = $("#mealDeal_text1").val();
            for (var K in I) {
                if (K == L) {
                    $("#mealDeal_query_right").removeClass("mealDeal_icon1");
                    var J = KFC_Products.getProductById(I[K].pId);
                    if (J.menuFlag == "M1") {
                        base.yumCloseLoading();
                        KFC_PopUp_Show.pop_show(I[K].pId, false, {"showBack": true});
                        return
                    }
                    $("#mealDeal_tips_zi").text(pageMessage.mealdeal_num_not_found);
                    return
                }
            }
            $("#mealDeal_tips_zi").text(pageMessage.mealdeal_num_not_found)
        })
    };
    var D = function (F, E, H) {
        var G = {};
        if (F && E) {
            $.each(F, function (L, K) {
                if (K.menuFlag == "M1" || K.menuFlag == "M2" || K.menuFlag == "M3") {
                    var I = KFC_flexibleCombos.getFlexibleComboItemById(K.productId, E);
                    var J = null;
                    if (H) {
                        J = H[K.productId]
                    }
                    if (I != null) {
                        G[K.abbrDesc] = {pId: K.productId, item: I, promotions: J}
                    }
                }
            })
        }
        return G
    };
    var B = function (F, E) {
        var G;
        $.each(E, function (I, H) {
            if (H.menuId == F) {
                G = H;
                return
            }
        });
        return G
    };
    return {getMealDealMenu: C, getFlexibleCombos: B}
}();