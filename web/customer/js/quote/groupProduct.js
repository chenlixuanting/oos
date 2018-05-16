var KFC_Group_PopUp_Show = function () {
    var D = "<p/>", E = "<a/>", K = "<li/>", B = "<ul/>", N = "<img/>", P = "<div/>", I = "<span/>", Q = "<h4/>",
        G = '<input id="notWarn" type="checkbox" value="" /> ',
        O = '<label for="notWarn">&nbsp;' + property.noWarn + "</label>",
        A = '<input type="text" value="1" maxlength="2" />';
    var M = KFC_GlobalVar;
    var J = KFC_Products;
    var H = function (X, U) {
        var R = $(".popup_main");
        var V = "#popupCon";
        R.empty();
        var W = "";
        var S = J.getProductById(X);
        if (S.iGroupVoList == undefined || S.iGroupVoList == {} || S.iGroupVoList.length == 0) {
            return
        }
        W = L(X);
        R.attr("class", "popup_main").addClass("popbox_p_bg04");
        R.append(C(W, X, V));
        var T = "middle_bg";
        KFC_dialog.show_dialog(T, V);
        $(R).find(".doMinus").click(function () {
            var a = parseInt($($(this).parents(".product_number")).find(".maxQty").val());
            var Z = $($(this).parents(".product_number")).find(".pId").val();
            var b = $($(this).parents(".product_number")).find(".pro_number_input2");
            var Y = parseInt($(b).val()) - 1;
            if (F(Z, a, Y)) {
                $(b).val(Y)
            } else {
                $(b).val(1)
            }
        });
        $(R).find(".doPlus").click(function () {
            var a = parseInt($($(this).parents(".product_number")).find(".maxQty").val());
            var Z = $($(this).parents(".product_number")).find(".pId").val();
            var b = $($(this).parents(".product_number")).find(".pro_number_input2");
            var Y = parseInt($(b).val()) + 1;
            if (F(Z, a, Y)) {
                $(b).val(Y)
            }
        });
        $(R).find(".pro_number_input2").keyup(function () {
            var a = parseInt($($(this).parents(".product_number")).find(".maxQty").val());
            var Z = $($(this).parents(".product_number")).find(".pId").val();
            var Y = parseInt(this.value);
            if (!/^[\d]{1,2}$/.test(String(Y))) {
                this.value = 1;
                return
            }
            if (F(Z, a, Y)) {
                $(this).val(Y)
            } else {
                $(this).val(1)
            }
        })
    };
    var F = function (T, U, S) {
        var R = KFC_Cart.getProdNumById(T);
        if (S < 0 || S + R > U) {
            base.yumAlert(property.errorOrderItemsNum.format([U]));
            return false
        }
        return true
    };
    var L = function (c) {
        var X = KFC_Products;
        var U = M.getGlobalVarByParam("httpVersionPath");
        var b = M.getGlobalVarByParam("base");
        var V = X.getProductById(c);
        var e = V.iGroupVoList[0].iMenuVoList;
        if (e == null || e.length == 0) {
            return ""
        }
        var g = "";
        var R = '<div class="price_span_1"><span class="groupProductName">{0}</span><span class="groupProductPrice">{1}</span><span class="product_number"><input type="hidden" class="maxQty" value={2} /><input type="hidden" class="pId" value={3} /><input type="hidden" class="menuType" value={4} /><a class="doMinus" href="javascript:;"><img src="' + b + KFC_Constant.img.pop_minus_icon + '"></a><input type="text" value="0" maxlength="2" class="pro_number_input2" /><a class="doPlus" href="javascript:;"><img src="' + b + KFC_Constant.img.pop_add_icon + '"></a></span></div>';
        for (var Y in e) {
            var T = e[Y];
            var W = $.localStr({cn: T.nameCn, en: T.nameEn}, 1);
            g = g + R.format([W, $.moneyFormat(computationPrice(T.price)), T.maxQty, T.systemId, T.menuType])
        }
        var d = '<div class="popup_product_detail"><div><div class="popup_product_detail_img"><img src="{0}"></div><div class="popup_product_detail_txt"><h4>{1}</h4><div class="detail_txt"><p>{2}</p><p>{3}</p><p>{4}</p><p>{5}</p></div></div></div><div class="groupItemList">' + g + "</div></div>";
        var a = U + V.imageUrl;
        var Z = $.localStr({cn: V.nameCn, en: V.nameEn}, 1);
        var f = $.localStr({cn: V.descCn, en: V.descEn}, 1);
        var i = property.avaliableTime + V.saleTimeDesc;
        var h = property.avaliableDate + V.saleValidDateDesc;
        var S = property.avaliableZone + $.localStr({
                cn: V.promotionAreaCn,
                en: V.promotionAreaEn ? V.promotionAreaEn : ""
            }, 1);
        return d.format([a, Z, f, i, h, S])
    };
    var C = function (Z, Y, d, U) {
        var R = M.getGlobalVarByParam("base");
        var T = J.getProductById(d);
        var X = T ? T.isOrderFlag : "1";
        var V = $(N).attr("src", function () {
            if (Z == "") {
                return R + KFC_Constant.img.pop_close_icon02
            } else {
                return R + KFC_Constant.img.pop_close_icon
            }
        });
        var W = $(P);
        var a = $(E);
        var f = $(D).addClass("close_icon").append(a.append(V));
        var b = $(P);
        if (Z) {
            b.addClass("popup_product_detail").append(Z)
        }
        V.unbind().click(function () {
            KFC_dialog.close_dialog("#popupCon")
        });
        var S = $(D).addClass("popup_btn");
        var c = $(E).addClass("orderBtn").attr("href", "javascript:;");
        var e = $(N).attr("src", (R + KFC_Constant.img.pop_btn_Order));
        c.append(e);
        S.append(c);
        e.unbind().click(function () {
            var g = $(".groupItemList").find(".price_span_1");
            var j = "";
            var h = "";
            for (var l = 0; l < g.length; l++) {
                var m = parseInt($($(g).find(".pro_number_input2")[l]).val());
                var k = $($(g).find(".pId")[l]).val();
                if (m > 0) {
                    if (j.length > 0) {
                        j += ",";
                        h += ","
                    }
                    j += k;
                    h += m
                }
            }
            if (j.length == 0) {
                base.yumAlert(pageMessage.selectNoneProduct);
                return
            }
            KFC_Comon.initCart("/executeOrderGroups.action", {quantity: h, productId: j});
            KFC_dialog.close_dialog("#popupCon")
        });
        return W.append(f, b, S)
    };
    return {pop_show: H}
}();