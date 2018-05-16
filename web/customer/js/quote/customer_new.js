var isMenuPage = false;
var selectAddressFlag = false;
var KFC_POST = function (A, C, B) {
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
};
var KFC_Base = function (D) {
    var A = $("#userEmail");
    var C = $("#username");
    var G = $(".modifyBtn");
    C.tip(property.customerNameTip);
    var F = "";
    C.change(function () {
        var I = this.value;
        var H = I.replace(/[^\x00-\xff]/g, "xx").length;
        if (H > 24) {
            base.yumTrackAlert(property.notLonger);
            this.value = F;
            return
        }
        if (!common.isStr(I)) {
            base.yumTrackAlert(property.customerNameNotRight);
            this.value = F;
            return
        }
        F = I
    });
    var B = function () {
        var H = $.trim(A.val());
        var I = $.trim(C.val());
        var J = $("input[name=gender]:checked");
        if (!D.isNewUser) {
            return true
        }
        if (A[0] && A.is(":visible")) {
            if (H == "") {
                base.yumTrackAlert(property.emailNotNull);
                return false
            }
            if (!common.isEmail(H)) {
                base.yumTrackAlert(property.emailNotcorrect);
                return false
            }
        }
        if (C[0] && C.is(":visible")) {
            if (I == "" || I == property.customerNameTip) {
                base.yumTrackAlert(property.customerNameNotNull);
                return false
            }
            if (common.isStr2(I, 2)) {
                base.yumTrackAlert(property.customerNameNotRight);
                return false
            }
            if (!J[0]) {
                base.yumTrackAlert(property.genderNotChoose);
                return false
            }
        }
        return true
    };
    var E = function () {
        var H = $(this);
        var K = C.val() == property.customerNameTip ? "" : C.val();
        var M = $("input[name=gender]:checked");
        var I = $(".customerName");
        var J = function () {
            C.val(property.customerNameTip);
            if (M[0]) {
                M[0].checked = false
            }
            H.parent().hide().siblings().show()
        };
        var L = M.val();
        if (C.is(":visible")) {
            if (K == "") {
                base.yumTrackAlert(property.customerNameNotNull);
                return
            }
            if (common.isStr2(K, 2)) {
                base.yumTrackAlert(property.customerNameNotRight);
                return false
            }
            if (!L) {
                base.yumTrackAlert(property.genderNotChoose);
                return
            }
            KFC_POST("/updateInfo.action", {customerName: $.trim(K), gender: M.val()}, function (O) {
                if (O.code == serviceCode.SUC_CODE) {
                    L = L == 0 ? pageMessage.common_Mr : pageMessage.common_Ms;
                    var N = H.parent().siblings().children();
                    H.parent().siblings().text(K + " " + L).append(N);
                    I.text($.trim(K + " " + L));
                    J()
                } else {
                    base.yumTrackAlert(property.serviceUnknown)
                }
            })
        } else {
            J()
        }
    };
    this.isFinish = function () {
        return B()
    };
    G.live("click", E)
};
var KFC_Phone = function (F) {
    var J = common.isMobile($("#mobiOrMail").val()) ? $("#mobiOrMail").val() : "";
    var C = $("#addPhone");
    var A = $("#phone_1");
    var B = $("#addPhoneBtn");
    var R = $("#savePhoneBtn");
    var E = $("input[name=selPhoneId]");
    var H = $(".deletePhoneBtn");
    var I = $("#newMobile");
    var O = $("#newTel1");
    var P = $("#newTel2");
    var Q = $("#newTel3");
    var N = '<tr><td>{0}</td><td>{1}</td><td align="center"><input name="phone" type="hidden" value="{1}"><input name="selPhoneId" type="radio" value="{2}"></td><td align="center"><div class="del_btn" value="{2}"><a href="javascript:;" class="deletePhoneBtn"><img src="../../images/delete_icon_2.gif"></a></div></td></tr>';
    var K = $("#telephone_1 .info_table_1");
    var M = $('<div class="selectItem"><div class="selectItemCount"></div></div>');
    I.tip(property.mobileTip);
    O.tip(property.areaCodeTip);
    P.tip(property.telephoneTip);
    var L = function () {
        I.val(property.mobileTip);
        O.val(property.areaCodeTip);
        P.val(property.telephoneTip);
        Q.val("")
    };
    E.live("click", function () {
        L();
        C.hide();
        B.show();
        R.hide();
        $(this).parents("#telephone_1").find(".selectcolor").removeClass("selectcolor");
        $(this).parent().parent().addClass("selectcolor")
    });
    E.each(function () {
        var S = $(this);
        F.phoneList.push(S.next("[name=phone]").val())
    });
    E.live("click", function () {
        $(this).click(function () {
            L()
        })
    });
    B.click(function () {
        $(this).hide();
        R.show();
        C.show();
        $("input[name=selPhoneId]").each(function () {
            this.checked = false;
            $(this).parent().parent().removeClass("selectcolor")
        })
    });
    var D = function () {
        var V = $.trim(I.val());
        var Y = $.trim(O.val());
        var S = $.trim(P.val());
        var X = $.trim(Q.val());
        var T = $("input[name=selPhoneId]").size();
        if (V == property.mobileTip) {
            V = ""
        }
        if (Y == property.areaCodeTip) {
            Y = ""
        }
        if (S == property.telephoneTip) {
            S = ""
        }
        if (!V && !Y && !S) {
            base.yumTrackAlert(property.mobiTelephone);
            return
        }
        if (V) {
            if (common.isMobile(V)) {
            } else {
                base.yumTrackAlert(property.mobNotcorrect);
                return
            }
        }
        if (Y) {
            if (!common.isAreaCode(Y)) {
                base.yumTrackAlert(property.areaCodeNotCorrent);
                return
            }
            if (!S) {
                base.yumTrackAlert(property.teleNotCorrent);
                return
            }
        }
        if (S) {
            if (!common.isTelephone(S)) {
                base.yumTrackAlert(property.teleNotCorrent);
                return
            }
            if (!Y) {
                base.yumTrackAlert(property.areaCodeNotCorrent);
                return
            }
        }
        if (X) {
            if (!/^\d+$/.test(X)) {
                base.yumTrackAlert(property.extensionNumNotCorrent);
                return
            }
        }
        if (!F.isNewUser) {
            var U = Y + S;
            if (U != "" && X != "") {
                U += "-" + X
            }
            KFC_POST("/addPhones.action", {phone1: V, phone2: U}, function (b) {
                if (b.code == serviceCode.SUC_CODE) {
                    var Z = b.message.indexOf(",");
                    if (Z != -1) {
                        var c = b.message.substring(0, Z);
                        var a = b.message.substring(Z + 1);
                        K.append(N.format([property.mobile, V, c]));
                        K.append(N.format([property.fixedPhone, U, a]));
                        F.phoneList.push(V);
                        F.phoneList.push(U)
                    } else {
                        if (V) {
                            K.append(N.format([property.mobile, V, b.message]));
                            F.phoneList.push(V)
                        } else {
                            K.append(N.format([property.fixedPhone, U, b.message]));
                            F.phoneList.push(U)
                        }
                    }
                    B.show();
                    C.hide();
                    if (!A.is(":visible")) {
                        A.removeClass("dn")
                    }
                    base.yumTrackAlert(property.saveSuccessfully)
                } else {
                    if (b.code == "113") {
                        base.yumTrackAlert(property.mobileExitCantAdd)
                    } else {
                        base.yumTrackAlert(property.saveFailed)
                    }
                }
            })
        } else {
            if (V) {
                if ($.inArray(V, F.phoneList) !== -1) {
                    base.yumTrackAlert(property.mobileExitCantAdd);
                    return
                }
                K.append(N.format([property.mobile, V, T++]));
                F.phoneList.push(V)
            }
            if (S) {
                var W = Y + S;
                if (X) {
                    W += "-" + X
                }
                if ($.inArray(W, F.phoneList) !== -1) {
                    base.yumTrackAlert(property.mobileExitCantAdd);
                    return
                }
                K.append(N.format([property.fixedPhone, W, T++]));
                F.phoneList.push(W)
            }
            B.show();
            C.hide();
            if (!A.is(":visible")) {
                A.removeClass("dn")
            }
            if (J == null || J == "") {
                J = V;
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    data: {phone: V},
                    url: requestContextPath + "/hasOaddress.action",
                    beforeSend: function (Z) {
                    },
                    success: function (b, Z) {
                        if (b) {
                            $("#import_addr_tip").html(property.importAddress);
                            $("#import_addr_tip").show();
                            var a = new KFC_Osaddress();
                            a.bindImportAddress(J)
                        }
                    },
                    complete: function (a, Z) {
                    },
                    error: function () {
                        base.yumTrackAlert(property.BadRequest)
                    }
                })
            }
            base.yumTrackAlert(property.saveSuccessfully)
        }
        L()
    };
    var G = function () {
        var U = $(this);
        var S = U.parent().attr("deleteflag");
        var T = U.parent().attr("value");
        if (S == 1) {
            base.yumTrackAlert(property.phoneCantDelete);
            return
        }
        base.yumConfirm(property.deletePhoneWarn, function () {
            if (F.isNewUser) {
                var V;
                U.closest("tr").each(function () {
                    V = $(this).children("td").eq(1).html()
                });
                U.closest("tr").remove();
                F.phoneList.pop();
                if (V == J) {
                    $("#import_addr_tip").hide()
                }
            } else {
                KFC_POST("/delPhone.action", {phoneId: T}, function (W) {
                    if (W.code == serviceCode.SUC_CODE) {
                        U.closest("tr").remove();
                        F.phoneList.pop();
                        base.yumTrackAlert(property.deleteSuccessfully)
                    } else {
                        if (W.code == serviceCode.UNKNOWN_SERVICE_ERROR) {
                            base.yumTrackAlert(property.serviceUnknown)
                        } else {
                            base.yumTrackAlert(property.deleteFailed)
                        }
                    }
                })
            }
        })
    };
    this.isFinish = function () {
        if (R.is(":visible")) {
            R.click();
            return false
        }
        if (F.phoneList.length == 1) {
            $("input[name=selPhoneId]").each(function () {
                this.checked = true;
                $(this).parent().parent().addClass("selectcolor")
            })
        }
        if (!$("[name=selPhoneId]:checked")[0]) {
            base.yumTrackAlert(property.phoneNotSelected);
            return false
        }
        return true
    };
    R.click(D);
    H.live("click", G)
};
var emapSearcher = new base.EMapSearcher();
var KFC_Address = function (v) {
    var k = $("#cityName");
    var D = $("#address2");
    var K = $("#address3");
    var o = $("#address4");
    var h = $("#linkman");
    var U = $("#linkphone");
    var t = $("#addAddress");
    var X = $("#address_1");
    var Ac = $("#delivery");
    var T = D.next(".new_add_img");
    var n = $("#addAddressBtn");
    var Q = $(".editAddressBtn");
    var i = $("#saveAddressBtn");
    var Y = $("#saveAddressBtn1");
    var m = $(".deleteAddressBtn");
    var z = $(".editAddressBtn");
    var Aa = $("input[name=selAddressId]");
    var w = {};
    var e = {};
    var B = new CityChoose($("#city_list"));
    var L = $('<div class="selectItem"><div class="selectItemCount"></div></div>');
    var M = '<li id="{4}"><div style="width: 20px; float: left; margin-top: 12px;"><input name="selAddressId" type="radio" value="{4}"><input name="nCityCode" type="hidden" value="{1}"><input name="nCityName" type="hidden" value="{0}"><input name="nMainaddress" type="hidden" value="{2}"><input name="nMainaddressDescription" type="hidden" value="{2}"><input name="nSupplementaladdress" type="hidden" value="{3}"><input name="nSupplementaladdressDescription" type="hidden" value="{3}"><input name="coordinate_x" type="hidden" value="{5}"><input name="coordinate_y" type="hidden" value="{6}"><input name="addressDESFlag" type="hidden" value="1"><input name="gender" type="hidden" value="{10}"><input name="name" type="hidden" value="{7}"><input name="phone" type="hidden" value="{9}"></div><div style="float:left" class="cityName"><a name="selAddressLink" style="text-decoration: none;display: block;width: 493px;" href="javascript:void(0);">{0}&nbsp;&nbsp;&nbsp;&nbsp;{2} {3}<br>{7}{8}&nbsp;&nbsp;{9}</a></div><div style="float:right"><a href="javascript:void(0);" class="editAddressBtn" newaddressflag="1" tip="{2}"></a><a href="javascript:;" class="deleteAddressBtn" tip="{2}"></a></div></li>';
    var C = '<div tip="deliveryTime"  style="width:838px"><div class="address_span" style="height:70px;margin-right:25px;width: 71px;">' + property.deliveryTime + '</div><div><div style=" margin-top: 20px;"><p class="deliveryHeight"><input name="sendfoodtime" type="radio" checked="checked" tip="inTime" style="vertical-align:middle;margin:-4px 0 0;" /><a name="sendfoodtimeLink" href="javascript:void(0);" style="text-decoration: none;"><span>{3}</span><span class="bc">{0}</span>{4}</a></p><div style="position:relative;width: 100%;height: 30px;margin-left: 93px;"><div class="fl_l"><input {2} class="sendfoodtime-style" name="sendfoodtime" type="radio" value="{1}" /> <a name="sendfoodtimeLink" href="javascript:void(0);" style="text-decoration: none;"><span>' + property.currentLater + '</span></a></div><div class="selectTime sendTime"></div></div><div style="position:relative;width: 100%;height: 30px;margin-left: 93px;display:{5}"><div class="fl_l"><input class="sendfoodtime-style" name="sendfoodtime" type="radio" value="{6}" bookingType="2"/> <a name="sendfoodtimeLink" href="javascript:void(0);" style="text-decoration:none;"><span>' + property.theOtherDay + '</span></a></div><div class="selectTime otherDaySendTime"></div></div></div></div></div>';
    var E = '<input name="supportonlinepay" type="hidden" value="{0}"/>';
    var x = '<span class="bc">' + property.bookingService + "</span>";
    var V = false;
    $("#query_city").live("click", function () {
        B.init();
        $(".selectItem").hide()
    });
    $("#city_del").live("click", function () {
        B.close()
    });
    var f = null;
    var P = null;
    var c = "", r = "", G;

    function Z(Ad) {
        if (f) {
            Ad.streetName = $.trim($("#address2").val());
            G = Ad.split(",");
            c = G[0];
            r = G[1];
            f(Ad);
            f = null
        }
    }

    function N(Ad) {
        if (Ad && Ad != undefined) {
            c = Ad.split(",")[0];
            r = Ad.split(",")[1];
            e.x = c;
            e.y = r;
            e.streetName = $.trim(D.val());
            e.name = $.trim(D.val())
        }
    }

    function J(Ae, Ad) {
        f = Ad;
        P = Ae;
        var Af = P.name;
        if (P.realname) {
            Af = P.realname
        }
        $('[role="dialog"]').css("left", ($(window).width() - $('[role="dialog"]').width()) / 2 + "px");
        $("#closeDiv").css("top", 0);
        $("#closeDiv").css("right", 0);
        $("#emapPopup").find("#closeDiv").live("click", function () {
            $("#emapPopup").dialog("close")
        });
        showEMapCommonKfcios(Af, "1", "address2", Z)
    }

    function a(Ao, Ai, Aj) {
        window.eMapFormatAddress = null;
        if (window.EmapOnline) {
            autonavi_yum_kfcios.brands = autonavi_yum_kfcios.brands || 1;
            var Ad = Ao.x, Ak = Ao.y, Ae = Ao.name, Al = Ao.formatAddress, An = Ao.streetName, Am = Ao.adcode,
                Af = Ao.address;
            var Ag = function (As) {
                if (As.data.status == -1) {
                    base.yumTrackAlert(property.sorryAddressNotInDelivery, function () {
                        mapInitKfcios(httpResourcePath);
                        J(w, N)
                    })
                } else {
                    var Aw = As.data.storeCode;
                    var Ar = As.data.poddingId;
                    var Ax = As.data.poddingName;
                    var At = As.data.dayName;
                    var Aq = As.data.nightName;
                    var Ay = As.data.storeCode2;
                    var Au = As.data.poddingId2;
                    var Az = As.data.poddingName2;
                    var Ap = As.data.dayName2;
                    var Av = As.data.nightName2;
                    var AA = As.data.type;
                    var AB = Ao.adcode;
                    confirmAddressKfcios($("#cityName").val(), Ae, Af, AB, Aw, Ar, Ax, At, Aq, Ay, Au, Az, Ap, Av, function () {
                    }, function () {
                    });
                    Ai && Ai.val(Aj);
                    window.eMapFormatAddress = Al
                }
            };
            var Ah = function (Ap) {
                base.yumTrackAlert(property.sorryAddressNotInDelivery, function () {
                    mapInitKfcios(httpResourcePath);
                    J(w, N)
                })
            };
            if (Ao.type == "road") {
                $("#address2").val(Ae);
                $(".selectItemCount").hide();
                $("[address3]").hide();
                $("[address4]").show();
                o.tip(property.suppleMentalAddressTip1);
                window.eMapFormatAddress = Al;
                window.currentDistrictName = Ao.district
            } else {
                $("[address3]").show();
                $("[address4]").hide();
                isRangeByAddress1Kfcios($("#cityName").val(), Ao, Ad, Ak, Ag, Ah)
            }
        } else {
            Ai && Ai.val(Aj)
        }
    }

    $(".selectItemCount a").live("click", function () {
        mapInitKfcios(httpResourcePath);
        if (!window.EmapOnline) {
            $("#popAddress").text($("#address2").val())
        } else {
            $(this).parents(".selectItem").hide();
            J(w, N);
            var Ae = $("#cityName").val();
            var Ad = $("#address2").val();
            _tag.dcsMultiTrack("wt.event", "emap地址搜索", "wt.msg", "新用户查看更多", "wt.emapaddress", Ae + ":" + Ad)
        }
    });
    $("a[name=tipBtn]").live("click", function () {
        var Ae = 0;
        var Ad = $(this);
        $("a[name=tipBtn]").each(function (Af, Ag) {
            if ($(Ag).text() == Ad.text()) {
                Ae = Af;
                return false
            }
        });
        B.tipChange(Ae)
    });
    $("#city_list").find("a[name=choose_city_btn]").live("click", function () {
        $("[address2]").show();
        var Ad = $(this);
        w = {};
        w.citycode = Ad.attr("citycode");
        w.id = Ad.attr("cityId");
        w.name = Ad.attr("cityname");
        w.districtName = Ad.attr("districtName");
        w.realname = Ad.attr("realname");
        $("#cityName").val(Ad.attr("cityname"));
        B.close();
        W({element: k, value: w.name, districtName: w.districtName, data: w})();
        D.val(property.mainAddressTip)
    });
    var W = function () {
        var Ah = arguments[0];
        var Af = Ah.element;
        var Ae = Ah.value;
        var Ad = Ah.data;
        var Ag = Ah.districtName;
        return function () {
            if (Ag) {
                if (Ae == "杭州") {
                    $("#userInfoBrand").show()
                } else {
                    if (!u()) {
                        $("#userInfoBrand").hide()
                    }
                }
                Ae = Ag + "(" + Ae + ")"
            } else {
                if (Ae == "杭州") {
                    $("#userInfoBrand").show()
                } else {
                    if (!u()) {
                        $("#userInfoBrand").hide()
                    }
                }
            }
            L.remove();
            Af == k ? w = Ad : e = Ad;
            if (Ad.x) {
                c = Ad.x;
                r = Ad.y
            }
            if (Ad.citycode) {
                var Ai = p(Ad.citycode);
                Af.val(Ae);
                $("#addAddress [address2]").show()
            } else {
                $("[address3]").show();
                selectAddressFlag = true;
                a(e, Af, Ae)
            }
        }
    };
    var p = function (Ae) {
        var Ad = "";
        for (cityDomIndex in B.cityListDom) {
            var Af = B.cityListDom[cityDomIndex];
            var Ag = Af.find("a");
            if (Ag.attr("citycode") == Ae) {
                Ad = Ag.attr("realname");
                return Ad
            }
        }
        return Ad
    };
    var u = function () {
        if ($("#addAddress").css("display") != "none" && $("#cityName").val().indexOf("杭州") != -1) {
            return true
        }
        var Ad = $(".cityName");
        var Ae = false;
        Ad.each(function () {
            if (this.innerHTML.indexOf("杭州") != -1) {
                Ae = true;
                return
            }
        });
        return Ae
    };
    var A = function () {
        k.tip(property.cityTip);
        D.tip(property.mainAddressTip);
        K.tip(property.suppleMentalAddressTip);
        o.tip(property.suppleMentalAddressTip1);
        h.tip(property.linkmanTip);
        U.tip(property.linkphoneTip)
    };
    k.tip(property.cityTip);
    D.tip(property.mainAddressTip);
    K.tip(property.suppleMentalAddressTip);
    o.tip(property.suppleMentalAddressTip1);
    h.tip(property.linkmanTip);
    U.tip(property.linkphoneTip);
    Aa.each(function () {
        v.addressList.push(this.value)
    });
    k.keyup(function (Ad) {
        B.close();
        var Ae = $.trim(this.value);
        Ae = Ae.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g, "");
        if (Ae && (!common.isStr(Ae) || common.isStr2(Ae, 1))) {
            L.remove();
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if ((Ad.keyCode >= 65 && Ad.keyCode <= 90) || (Ad.keyCode >= 48 && Ad.keyCode <= 57) || Ad.keyCode == 32 || Ad.keyCode == 8) {
            L.css({top: "25px", left: "0px"});
            if (Ae && Ae != property.cityTip) {
                L.find(".selectItemCount").html('<img src="../../images/loading.gif"/>');
                $(this).after(L.show());
                $.ajax({
                    url: requestContextPath + "/queryCity.action",
                    data: {cityName: Ae},
                    type: "post",
                    dataType: "json",
                    beforeSend: function () {
                    },
                    success: function (Ag) {
                        $(".selectItemCount").data("current", -1);
                        var Ai = $("<ul></ul>");
                        if (Ag && Ag.length > 0) {
                            for (var Ak in Ag) {
                                var Aj = Ag[Ak];
                                var Ah = Aj.name + Aj.nameen;
                                if (Aj.districtName) {
                                    Ah = Aj.districtName + "(" + Aj.name + ")" + Aj.pinYinName
                                }
                                var Af = $("<li>" + Ah + "</li>");
                                Af.hover(function () {
                                    $(this).addClass("hover")
                                }, function () {
                                    $(this).removeClass("hover")
                                });
                                Af.click(W({element: k, value: Aj.name, districtName: Aj.districtName, data: Aj}));
                                Ai.append(Af)
                            }
                        } else {
                            Ai.append("<li>" + property.noMatch + "</li>")
                        }
                        L.find(".selectItemCount").html("").append(Ai)
                    },
                    complete: function (Ag, Af) {
                    },
                    error: function () {
                        base.yumTrackAlert(property.BadRequest)
                    }
                })
            } else {
                L.remove();
                w = {}
            }
        }
    }).off("keydown").on("keydown", function (Af) {
        var Ad = $(".selectItemCount").find("li"), Ag = $(".selectItemCount").data("current") || 0, Ae = Ad.length;
        if (9 == Af.keyCode) {
            if (1 == Ae) {
                Ad.first().click();
                $("[address2]").show()
            }
        } else {
            if (38 == Af.keyCode || 40 == Af.keyCode) {
                if (38 == Af.keyCode) {
                    Ag = Ag > 0 ? Ag - 1 : Ae - 1
                } else {
                    if (40 == Af.keyCode) {
                        Ag = Ag < Ae - 1 ? Ag + 1 : 0
                    }
                }
                $(".selectItemCount").data("current", Ag).find("li").removeClass("hover").eq(Ag).addClass("hover");
                $(".selectItemCount").scrollTop((Ag - 2) * 22)
            } else {
                if (13 == Af.keyCode) {
                    if (Ad[Ag]) {
                        Ad[Ag].click();
                        $("#address2").focus();
                        $("[address2]").show()
                    }
                }
            }
        }
    });
    k.change(function () {
        if (!this.value) {
            w = {}
        }
        e = {};
        D.val(property.mainAddressTip)
    });
    $("#address2").off("keyup").on("keyup", function (Ad) {
        if (!window.EmapOnline) {
            return
        }
        if ((Ad.keyCode >= 65 && Ad.keyCode <= 90) || (Ad.keyCode >= 96 && Ad.keyCode <= 105) || (Ad.keyCode >= 48 && Ad.keyCode <= 57) || Ad.keyCode == 32 || Ad.keyCode == 8) {
            $(".selectItemCount").data("current", -1);
            S();
            checkTime()
        }
    }).off("keydown").on("keydown", function (Af) {
        if (!window.EmapOnline) {
            return
        }
        var Ad = $(".selectItemCount").find("li"),
            Ah = $(".selectItemCount").data("current") == -1 ? 0 : $(".selectItemCount").data("current"),
            Ae = Ad.length;
        if (38 == Af.keyCode || 40 == Af.keyCode) {
            if (38 == Af.keyCode) {
                Ah = Ah > 0 ? Ah - 1 : Ae - 1
            } else {
                if (40 == Af.keyCode) {
                    Ah = Ah < Ae - 1 ? Ah + 1 : 0
                }
            }
            $(".selectItemCount").data("current", Ah).find("li").removeClass("hover").eq(Ah).addClass("hover");
            $(".selectItemCount").scrollTop((Ah - 2) * 22)
        } else {
            if (13 == Af.keyCode) {
                var Ag = $($(".selectItemCount").find("li")[Ah]);
                if (Ag.length > 0) {
                    Ad[Ah].click();
                    if ($("#address3").is(":visible")) {
                        $("#address3").focus()
                    } else {
                        $("#address4").focus()
                    }
                } else {
                    T.click()
                }
            }
        }
    }).keypress(function () {
        e = {}
    }).focus(function () {
        var Ad = $(".selectItemCount").find("li"), Ae = Ad.length;
        if (1 == Ae) {
            Ad.first().click();
            $("[address2]").show()
        }
    });
    var j = "0";

    function S() {
        theD = new Date();
        stime = theD.getTime();
        j = "0"
    }

    function s(Ad) {
        return Ad.replace(/[^\x00-\xff]/g, "xx").length
    }

    window.checkTime = function () {
        newD = new Date();
        etime = newD.getTime();
        if (j == "0") {
            c = "";
            r = "";
            if ((etime - stime) >= autonavi_yum_kfcios.interval) {
                if (s($("#address2").val()) > 2) {
                    j = "1";
                    l()
                }
            } else {
                clearTimeout(Ad);
                var Ad = setTimeout("checkTime()", 2);
                Ad
            }
        }
    };
    function l() {
        var Ad = $.trim(D.val());
        if (!w.hasOwnProperty("citycode")) {
            base.yumTrackAlert(property.pleaseChooseCityFirst);
            return
        }
        if ("" == Ad || Ad == property.mainAddressTip) {
            base.yumTrackAlert(property.communityDescNotNull);
            return
        }
        if (common.isStr2(Ad, 3)) {
            L.remove();
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if (window.EmapOnline) {
            placeSearchRoadPoint($("#cityName").val(), $("#address2").val(), O)
        } else {
            y(Ad)
        }
    }

    function O(Al) {
        if (isMenuPage) {
            L.css({top: "41px", left: "247px"})
        } else {
            L.css({top: "69px"})
        }
        L.find(".selectItemCount").html('<img src="../../images/loading.gif">');
        D.after(L.show());
        var Ah = Al;
        var Am = $("<ul></ul>");
        if (Ah && Ah.length > 0) {
            var Ak = 0;
            var Ag = Ah.length;
            for (var Ai in Ah) {
                Ak++;
                var Ae = Ah[Ai], Ad;
                Ae.streetName = Ae.address;
                if (Ae.name.length > 23) {
                    Ad = Ae.name.substr(0, 23) + "..."
                } else {
                    Ad = Ae.name
                }
                Ad += "&nbsp;&nbsp;<span>" + Ae.city + Ae.district + "</span>";
                var Aj = "";
                if (Ak < Ag) {
                    Aj = $("<li>" + Ad + "</li>")
                } else {
                    Aj = $('<li style="margin-bottom:15px;">' + Ad + "</li>")
                }
                Aj.hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                });
                Aj.click(W({element: D, value: Ae.name, data: Ae}));
                Am.append(Aj)
            }
        }
        var Af = $('<li class="findMap">' + property.notFindClick + "<a>" + property.notFindMore + "</a></li>");
        var An = $(".selectItemCount").height();
        if (An <= 300) {
            Am.height("6px");
            Af.width("100%")
        }
        Am.append(Af);
        L.find(".selectItemCount").html("").append(Am)
    }

    function d(Af, Ad) {
        L.css({top: "37px", left: "253px"});
        L.find(".selectItemCount").html('<img src="../../images/loading.gif">');
        D.after(L.show());
        var Ae = p(w.citycode);
        $.ajax({
            url: autonavi_yum_kfcios.hostAddr,
            dataType: "jsonp",
            data: {
                sid: 1012,
                cityName: Ae,
                address: Af,
                size: 30,
                brands: "KFC",
                encode: autonavi_yum_kfcios.charencode,
                callback: "?"
            },
            type: "GET",
            beforeSend: function () {
            },
            success: function (Ag) {
                if (Ad && $.isFunction(Ad)) {
                    Ad(Ag)
                }
            },
            complete: function (Ah, Ag) {
                if ($(".selectItem").data("autoClick")) {
                    $(".selectItem").find("li").click()
                }
                $(".selectItem").data("autoClick", false)
            },
            error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }

    function y(Ae, Ad) {
        if (isMenuPage) {
            L.css({top: "41px", left: "247px"})
        } else {
            L.css({top: "69px"})
        }
        L.find(".selectItemCount").html('<img src="../../images/loading.gif">');
        D.after(L.show());
        Ad = Ad || "false";
        $.ajax({
            url: requestContextPath + "/searchAddressList.action",
            data: {cityCode: w.citycode, streetName: Ae, saveFlag: Ad},
            type: "post",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (Ah) {
                var Aj = $("<ul></ul>");
                if (Ah && Ah.code == serviceCode.TOO_MANY_RESULTS) {
                    Aj.append('<li style="margin-bottom:15px;">' + property.tooManyResults + "</li>")
                } else {
                    if (Ah && Ah.code == 10014) {
                        base.yumAlertBack(property.userNotFound, function () {
                            base.setActionHttps("orderLogin.action")
                        });
                        return
                    } else {
                        var Ag = 0;
                        var Ak = Ah.length;
                        if (Ah && Ah.length > 0) {
                            for (var Al in Ah) {
                                var Ai = Ah[Al];
                                Ag++;
                                var Af = "";
                                if (Ag < Ak) {
                                    Af = $("<li>" + Ai.streetName + "</li>")
                                } else {
                                    Af = $('<li style="margin-bottom:15px;">' + Ai.streetName + "</li>")
                                }
                                Af.hover(function () {
                                    $(this).addClass("hover")
                                }, function () {
                                    $(this).removeClass("hover")
                                });
                                Af.click(W({element: D, value: Ai.streetName, data: Ai}));
                                Aj.append(Af)
                            }
                        }
                    }
                }
                if (Aj.children(Af).length > 0) {
                    L.find(".selectItemCount").html("").append(Aj)
                } else {
                    D.after(L.hide())
                }
            },
            complete: function (Ag, Af) {
                if ($(".selectItem").data("autoClick")) {
                    $(".selectItem").find("li").click()
                }
                $(".selectItem").data("autoClick", false)
            },
            error: function () {
                base.yumTrackAlert(property.BadRequest)
            }
        })
    }

    T.click(function () {
        V = true;
        l()
    });
    D.focus(function () {
    });
    D.blur(function () {
        if (!window.EmapOnline) {
            return
        }
        setTimeout(function () {
            if (!V) {
                var Ad = $(".selectItemCount>ul>li").size();
                if (Ad <= 1) {
                    var Ae = $.trim(D.val());
                    if ($(".ui-dialog").css("display") == "block") {
                        return
                    }
                    if (common.isStr2(Ae, 1)) {
                        base.yumTrackAlert(property.invaildStringError);
                        return
                    }
                    if (!w.hasOwnProperty("citycode")) {
                        base.yumTrackAlert(property.pleaseChooseCityFirst);
                        return
                    }
                }
            } else {
                V = false
            }
        }, 50)
    });
    if (!window.EmapOnline) {
        D.off("keydown").on("keydown", function (Ad) {
            if (13 == Ad.keyCode) {
                T.click()
            }
        })
    }
    D.change(function () {
        e = {}
    });
    var g = function () {
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack("WT.event", "XXQR_KFC_xyhsyxdz", "WT.msg", "23")
        }
        $("#nextTr").hide();
        $("[tip=deliveryTime]").hide();
        A();
        $(this).hide();
        t.show();
        window.eMapFormatAddress = "";
        $("#editAddressId").val("");
        $("[address2],[address3],[address4]").hide();
        $("input[name=selAddressId]").each(function () {
            this.checked = false;
            $(this).closest("ul").find(".td_no_border").removeClass("td_no_border").next("[tip=deliveryTime]").remove()
        })
    };
    var q = function () {
        t.show();
        n.show();
        $("[address2],[address3]").show();
        $(".info_table").find("tr[tip=deliveryTime]").hide();
        $("input[name=selAddressId]").each(function () {
            this.checked = false
        });
        var Ah = $(this).parents("li");
        var Ag = Ah.find('input[name="selAddressId"]').val();
        var Ak = Ah.find('input[name="nCityName"]').val();
        var Ae = Ah.find('input[name="nCityCode"]').val();
        var Aj = Ah.find('input[name="nMainaddressDescription"]').val();
        var Ai = Ah.find('input[name="nSupplementaladdressDescription"]').val();
        var Ad = Ah.find('input[name="name"]').val();
        var Am = Ah.find('input[name="gender"]').val();
        var Af = Ah.find('input[name="phone"]').val();
        var Al = Ah.find('input[name="coordinate_x"]').val();
        var An = Ah.find('input[name="coordinate_y"]').val();
        w = {citycode: Ae, name: Ak};
        c = Al;
        r = An;
        e = {streetName: Aj, name: Aj, x: Al, y: An};
        if (!window.EmapOnline) {
            e.id = ""
        }
        $("#editAddressId").val(Ag);
        $("#editCityCode").val(Ae);
        $("#cityName").val(Ak).css("color", "#737373");
        $("#address2").val(Aj).css("color", "#737373");
        $("#address3").val(Ai).css("color", "#737373");
        $("#linkman").val(Ad).css("color", "#737373");
        $("#gender" + Am).attr("checked", "true");
        $("#linkphone").val(Af).css("color", "#737373")
    };
    var I = function () {
        var Ai = $("#editAddressId").val();
        if (isMenuPage && !selectAddressFlag && changeAddressFlag) {
            window.eMapFormatAddress = null;
            e = {}
        }
        var Ah = $.trim(k.val());
        var Am = window.eMapFormatAddress || $.trim(D.val());
        if (!isMenuPage || $("#cityNameDes").val() != $("#cityName").val() || $("#mainAddressDes").val() != D.val() || $("#supplementaladdressDes").val() != K.val()) {
            if (!w.hasOwnProperty("id") && !w.hasOwnProperty("name")) {
                base.yumTrackAlert(property.pleaseChooseCityFirst);
                return
            }
            if (window.EmapOnline && !e.hasOwnProperty("x")) {
                base.yumTrackAlert(property.pleaseChooseMainAddress);
                return
            }
            if (!window.EmapOnline && !e.hasOwnProperty("id")) {
                base.yumTrackAlert(property.pleaseChooseMainAddress);
                return
            }
        }
        if ("" == Ah || Ah == property.cityTip) {
            base.yumTrackAlert(property.cityNotNull);
            return false
        }
        if ("" == Am || Am == property.mainAddressTip) {
            base.yumTrackAlert(property.communityNotNull);
            return false
        }
        var Ak;
        if ($("[address3]").is(":visible")) {
            Ak = $.trim(K.val());
            $("[address4]").hide()
        } else {
            Ak = $.trim(o.val());
            $("[address4]").show()
        }
        if ("" == Ak || Ak == property.suppleMentalAddressTip || Ak == property.suppleMentalAddressTip1) {
            base.yumTrackAlert(property.suppleMentalAddressStart);
            return false
        }
        if (isMenuPage && e.streetName == null) {
            e.x = $.trim($("#x").val());
            e.y = $.trim($("#y").val());
            e.streetName = $.trim(D.val());
            e.name = $.trim(D.val());
            e.id = $.trim($("#addressId").val());
            c = e.x;
            r = e.y
        }
        var Aq = /^(?=.*?[!@#$%^&*、<>《》,\\\/\[\]\'\;\=+！＃￥……]).*$/;
        var Ad = $("input[name=selAddressId]").size();
        var Aj = $.trim(h.val());
        var An = $.trim(U.val());
        var Ao = $('input[name="gender"]:checked').val();
        var Al = "先生";
        if (Ao == 1) {
            Al = "女士"
        }
        var Af = function (Av, Au) {
            var At = w.name;
            if (w.realname) {
                At = w.realname
            }
            var As = X.find("ul");
            if (isMenuPage) {
                As.empty();
                Av = 0
            }
            if (Au) {
                As.find('li[id="' + Av + '"]').replaceWith(M.format([At, w.citycode, window.eMapFormatAddress || e.name || e.streetName, Ak, Av, c, r, Aj, Al, An, Ao]))
            } else {
                As.append(M.format([At, w.citycode, window.eMapFormatAddress || e.name || e.streetName, Ak, Av, c, r, Aj, Al, An, Ao]))
            }
            isMenuPage && As.find('a[name="selAddressLink"]:last').click();
            t.hide();
            X.show();
            if (!u()) {
                $("#userInfoBrand").hide()
            }
            n.show();
            $("#address_1 tr").show()
        };
        if (Aq.test(Ak)) {
            base.yumTrackAlert(property.addressFalse);
            return false;
            var Ag = Ak.replace(/[^\x00-\xff]/g, "xx").length;
            if (Ag >= 60) {
                base.yumTrackAlert(property.suppleMentalAddressTooLong);
                return
            }
        }
        if (common.isStr2(Ak, 1) || common.isStr2(Am, 1) || common.isStr2(Ah, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return false
        }
        var Ap = w.citycode + Am + Ak;
        if (typeof(_tag) != "undefined") {
            _tag.dcsMultiTrack("WT.event", "XXQR_KFC_xyhbcxdz", "WT.msg", "24")
        }
        if (Aj == "" || Aj == property.linkmanTip) {
            base.yumTrackAlert("请输入联系人");
            return false
        }
        if (!base.validIllegalStr(Aj)) {
            base.yumTrackAlert("联系人请勿输入非法字符");
            return false
        }
        if (An == "" || An == property.linkphoneTip) {
            base.yumTrackAlert("请输入联系电话");
            return false
        }
        if (!base.validatePhone(An)) {
            if (!base.validIllegalStr(An)) {
                base.yumTrackAlert("请勿输入特殊字符")
            } else {
                base.yumTrackAlert("请输入正确的手机号")
            }
            return false
        }
        var Ae = function () {
            if (!isMenuPage) {
                for (var At in v.addressList) {
                    if (v.addressList[At] == Ap) {
                        base.yumTrackAlert(property.addressExitCantAdd);
                        return
                    }
                }
            }
            var As = $("#editAddressId").val();
            KFC_POST("/" + (isMenuPage ? "update" : "add") + "AddressNew.action", {
                cityCode: w.citycode,
                mainAddress: window.eMapFormatAddress || Am,
                supplementaladdress: Ak,
                coordinate_x: c,
                coordinate_y: r,
                linkphone: An,
                linkman: Aj,
                gender: Ao,
                addressId: As
            }, function (Au) {
                if (Au.code == serviceCode.SUC_CODE) {
                    if (As != "" && As > -1) {
                        Af(As, true)
                    } else {
                        Af(Ad, false)
                    }
                    v.addressList.push(w.citycode + e.streetName + Ak);
                    if (isMenuPage) {
                        $("#adderssArea_pop").show();
                        isMenuPage && $("#adderssArea_pop").find('input[name="selAddressId"]').attr("checked", true);
                        setTimeout(function () {
                            $("#adderssArea").find(".info_table_1 cao li:visible").find("input[name='selAddressId']").click()
                        }, 0)
                    } else {
                        $("#adderssArea").show();
                        if (As != "" && As > -1) {
                            $("input[name=selAddressId]").each(function () {
                                if ($(this).val() == As) {
                                    $(this).prop("checked", true).click();
                                    $(this).parents("li").addClass("selectcolor");
                                    return false
                                }
                            })
                        }
                        if (v.addressList.length == 1 && (!$("[name=selAddressId]:checked")[0])) {
                            $("input[name=selAddressId]").each(function () {
                                this.checked = true;
                                $(this).click();
                                $(this).parents("li").addClass("selectcolor")
                            })
                        } else {
                            $("[tip=deliveryTime]").hide();
                            $("#nextTr").hide();
                            base.yumTrackAlert(property.saveSuccessfully)
                        }
                    }
                } else {
                    if (Au.code == serviceCode.OUT_OF_ADDR_DELIVERY) {
                        base.yumAlertBack(property.addressNotInDelivery, function () {
                            mapInitKfcios(httpResourcePath);
                            if (!window.EmapOnline) {
                                $("#popAddress").text($("#address2").val())
                            } else {
                                $(this).parents(".selectItem").hide();
                                J(w, N);
                                var Aw = $("#cityName").val();
                                var Av = $("#address2").val();
                                _tag.dcsMultiTrack("wt.event", "emap地址搜索", "wt.msg", "老用户查看更多", "wt.emapaddress", Aw + ":" + Av)
                            }
                        })
                    } else {
                        if (Au.code == "24") {
                            base.yumCommonAlert(codeMessage.error24, "XXQR_kfc_xyhcws", "24")
                        } else {
                            if (Au.code == "25") {
                                base.yumCommonAlert(codeMessage.error25, "XXQR_kfc_xyhcws", "24")
                            } else {
                                if (Au.code == "20") {
                                    base.yumCommonAlert(codeMessage.error25, "XXQR_kfc_xyhcws", "24")
                                } else {
                                    if (Au.code == "114") {
                                        base.yumTrackAlert(property.addressExitCantAdd, function () {
                                        })
                                    } else {
                                        if (Au.code == "125") {
                                            base.yumTrackAlert(property.addressMaxNum)
                                        } else {
                                            if (Au.code == "10013") {
                                                base.yumTrackAlert(property.addrStartWithNum)
                                            } else {
                                                if (Au.code == serviceCode.UNKNOWN_SERVICE_ERROR) {
                                                    base.yumTrackAlert(property.serviceUnknown)
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
        };
        if ($("#address4").is(":visible")) {
            if (!/^\d.{0,}/.test($("#address4").val())) {
                base.yumTrackAlert(property.addrStartWithNum);
                $("#address4").val("");
                return false
            }
            var Ar = window.currentDistrictName || "";
            regeocode($("#cityName").val(), Ar + $("#address2").val() + $("#address4").val(), function (As, At) {
                saveGaodeXYKfcios(As, At);
                isRangeKfcios(As, At, function (Ax) {
                    if (Ax.data.status == -1) {
                        base.yumAlertBack(property.sorryAddressNotInDelivery, function () {
                            mapInitKfcios(httpResourcePath);
                            J(w, N)
                        })
                    } else {
                        var AB = Ax.data.storeCode;
                        var Aw = Ax.data.poddingId;
                        var AC = Ax.data.poddingName;
                        var Ay = Ax.data.dayName;
                        var Av = Ax.data.nightName;
                        var AD = Ax.data.storeCode2;
                        var Az = Ax.data.poddingId2;
                        var AE = Ax.data.poddingName2;
                        var Au = Ax.data.dayName2;
                        var AA = Ax.data.nightName2;
                        var AF = e.adcode;
                        confirmAddressKfcios($("#cityName").val(), $("#address2").val(), $("#address4").val(), AF, AB, Aw, AC, Ay, Av, AD, Az, AE, Au, AA, function () {
                        }, function () {
                        });
                        $("#x").val(As);
                        $("#y").val(At);
                        Ae()
                    }
                }, function () {
                    base.yumAlertBack(property.sorryAddressNotInDelivery, function () {
                        mapInitKfcios(httpResourcePath);
                        J(w, N)
                    })
                })
            }, function () {
                $("#x").val("");
                $("#y").val("");
                Ae()
            })
        } else {
            Ae()
        }
    };
    emapSearcher.retainNewCustomer = function (Ae, Ad, Af) {
        base.yumConfirm(property.newUnknownAddressTip, function () {
            $.ajax({
                url: requestContextPath + "/retainNewCustomer.action",
                type: "post",
                data: {cityCode: Ae, nMainaddress: Ad, supplementaladdress: Af, blackType: "1"},
                dataType: "json"
            })
        }, function () {
            $.ajax({
                url: requestContextPath + "/retainNewCustomer.action",
                type: "post",
                data: {cityCode: Ae, nMainaddress: Ad, supplementaladdress: Af, blackType: "0"},
                dataType: "json"
            })
        }, true)
    };
    var R = function () {
        $("#address_1").find(".selectcolor").each(function (Ao, Ap) {
            $(Ap).removeClass("selectcolor")
        });
        $(this).parent().parent().addClass("selectcolor");
        t.hide();
        n.show();
        L.remove();
        $(".the_other_day_tip").hide();
        var Ae = $(this);
        var Am = Ae.attr("deliverytime");
        Ae.closest("ul").find(".td_no_border").removeClass("td_no_border");
        $("#adderssArea").next("[tip=deliveryTime]").remove();
        var Al = Ae.parent();
        var Aj = Al.find("input[name=nSupplementaladdress]").val() || "";
        var Ak = Al.find("input[name=nCityCode]").val();
        var Ai = Al.find("input[name=addressDESFlag]").val();
        var Ad = Al.find("input[name=nMainaddress]").val();
        var Af = Al.find("input[name=coordinate_x]").val();
        var Ag = Al.find("input[name=coordinate_y]").val();
        var Ah = Ae.val();
        if (v.isNewUser) {
            Ah = Ak + "," + Aj + "," + Ad + "," + Af + "," + Ag
        }
        $('[tip="deliveryTime"]').remove();
        if (Am && Am != "") {
            var An = $(C.format([Am, Ah]));
            Ae.closest("li").addClass("td_no_border");
            $("#adderssArea").after(An);
            Ac.val(Am);
            return
        } else {
            KFC_POST("/getDeliveryTime.action", {
                cityCode: Ak,
                supplementaladdress: Aj,
                nMainaddress: Ad,
                addressDESFlag: Ai,
                coordinate_x: Af,
                coordinate_y: Ag
            }, function (Aq) {
                $(".info_table_1 cao").find("li").each(function (At, Au) {
                    $(Au).removeClass("selectcolor").removeClass("td_no_border")
                });
                if (Aq.code == serviceCode.SUC_CODE || Aq.code == serviceCode.BOOKING_OUT_OF_STORE_TIME) {
                    var Ao = Aq.message.split(",");
                    var Ar = "none";
                    if (Aq.message.indexOf("isBookingOnTheOtherDay") != -1) {
                        Ar = "block"
                    }
                    var As = "";
                    if (Aq.code == serviceCode.SUC_CODE) {
                        As = Aq.message.indexOf("isSecondDay") != -1 ? $(C.format([Ao[0], "", "disabled", property.afterSubmit, property.timeArrive, Ar, Ah])) : $(C.format([Ao[0], Ah, "", property.afterSubmit, property.timeArrive, Ar, Ah]));
                        $("#nextTr").show()
                    }
                    if (Aq.code == serviceCode.BOOKING_OUT_OF_STORE_TIME) {
                        base.yumTrackAlert(property.bookingTimeWarn.format([Ao[2], x]));
                        As = Aq.message.indexOf("isSecondDay") != -1 ? $(C.format(["", "", "disabled", property.outOfBuinessHours.format([Ao[2]]), "", Ar, Ah])) : $(C.format(["", Ah, "", property.outOfBuinessHours.format([Ao[2]]), "", Ar, Ah]));
                        $("#nextTr").hide()
                    }
                    Ae.closest("li").addClass("td_no_border");
                    $("#adderssArea").after(As);
                    var Ap = $(E.format([Ao[1]]));
                    if (Al.find("input[name=supportonlinepay]")) {
                        Al.find("input[name=supportonlinepay]").remove()
                    }
                    Ae.after(Ap);
                    Ac.val(Ao[0]);
                    if (Aq.code == serviceCode.BOOKING_OUT_OF_STORE_TIME) {
                        $("#adderssArea").next().find('input[type="radio"]:first').attr("checked", false);
                        $("#adderssArea").next().find('input[type="radio"]:first').attr("disabled", "disabled");
                        if ($("#theOtherDayDefault").val() == "1" || Aq.message.indexOf("theOtherDaySelected") != -1) {
                            $("#adderssArea").next().find('input[type="radio"]:eq(2)').attr("checked", true);
                            $("#adderssArea").next().find('input[type="radio"]:eq(2)').trigger("click")
                        } else {
                            if (Aq.message.indexOf("closeBookingToday") == -1) {
                                $("#adderssArea").next().find('input[type="radio"]:eq(1)').attr("checked", true);
                                $("#adderssArea").next().find('input[type="radio"]:eq(1)').trigger("click")
                            } else {
                                if (Aq.message.indexOf("closeBookingToday") != -1) {
                                    $("#adderssArea").next().find('input[type="radio"]:eq(1)').attr("checked", false);
                                    $("#adderssArea").next().find('input[type="radio"]:eq(1)').attr("disabled", "disabled")
                                }
                            }
                        }
                    } else {
                        if (Aq.message.indexOf("closeBookingToday") != -1) {
                            $("#adderssArea").next().find('input[type="radio"]:eq(1)').attr("checked", false);
                            $("#adderssArea").next().find('input[type="radio"]:eq(1)').attr("disabled", "disabled")
                        }
                    }
                } else {
                    if (Aq.code == "20") {
                        base.yumCommonAlert(property.addressNotInDeliveryHelp, "XXQR_kfc_lyhcws", "24")
                    } else {
                        if (Aq.code == "25") {
                            base.yumCommonAlert(property.addressNotInDeliveryHelp, "XXQR_kfc_lyhcws", "24")
                        } else {
                            if (Aq.code == "1") {
                                base.yumTrackAlert(property.storeClosed)
                            } else {
                                if (Aq.code == serviceCode.STORE_CLOSED) {
                                    base.yumTrackAlert(Aq.message)
                                } else {
                                    if (Aq.code == "26") {
                                        base.yumTrackAlert(Aq.message.split("_")[0])
                                    } else {
                                        if (Aq.code == 10014) {
                                            base.yumAlertBack(property.userNotFound, function () {
                                                base.setActionHttps("orderLogin.action")
                                            });
                                            return
                                        } else {
                                            base.yumTrackAlert(property.addressNotInDeliveryHelp)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (isMenuPage) {
                        $("#changeAddress").hide()
                    }
                    Ac.val("");
                    Ae[0].checked = false
                }
            })
        }
    };
    var Ab = function (Ae) {
        var Ak = "<span/>";
        var Ao = "<div/>";
        var Al = "<ul/>";
        var Ag = "<li/>";
        var Aj = '<input type="hidden"/>';
        var Ai = Ae.currentTime;
        var Ah = Ae.isSecondDay;
        var Ad = [];
        var Af = (function () {
            var Aq = Ae.timeList;
            var As = {};
            for (var Ap in Aq) {
                var At = Aq[Ap].hour;
                var Ar = Aq[Ap].minutes;
                Ad.push(At);
                As[At] = Ar
            }
            return As
        })();
        var Am = function (Av) {
            var As = Af[Av];
            var Aw = $(Ao).addClass("macstyle");
            var At = $(Ao).addClass("tag_select").text(As[0]);
            var Ap = $(Al).addClass("tag_options");
            var Ax = $(Aj).attr("name", "minute").val(As[0]);
            for (var Au in As) {
                var Aq = $(Ag).hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                }).click(function () {
                    At.text($(this).text());
                    Ax.val($(this).text());
                    Ap.hide()
                });
                Ap.append(Aq.text(As[Au]))
            }
            var Ar = null;
            Aw.mouseover(function () {
                clearTimeout(Ar);
                Ap.show()
            }).mouseout(function () {
                Ar = setTimeout(function () {
                    Ap.hide()
                }, 150)
            });
            return Aw.append(At, Ap, Ax)
        };
        var An = function () {
            var Av = $(Ao).addClass("macstyle");
            var Aq = $(Ao).addClass("tag_select").text(Ad[0]);
            var Ap = $(Al).addClass("tag_options");
            var Aw = $(Aj).attr("name", "hour").val(Ad[0]);
            var At = function () {
                $(this).closest(".macstyle").siblings(".macstyle").after(Am($(this).text())).remove();
                Aq.text($(this).text());
                Aw.val($(this).text());
                Ap.hide()
            };
            for (var As in Ad) {
                var Ar = $(Ag).hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                }).click(At);
                Ap.append(Ar.text(Ad[As]))
            }
            var Au = null;
            Av.mouseover(function () {
                clearTimeout(Au);
                Ap.show()
            }).mouseout(function () {
                Au = setTimeout(function () {
                    Ap.hide()
                }, 150)
            });
            return Av.append(Aq, Ap, Aw)
        };
        this.getHtml = function () {
            var At = new Date();
            currentTimeEn = At.getFullYear() + "/" + (At.getMonth() + 1) + "/" + At.getDate();
            currentTimeCn = At.getFullYear() + "年" + (At.getMonth() + 1) + "月" + At.getDate() + "日";
            var Ap = $(Ak).text($.localStr({cn: currentTimeCn, en: currentTimeEn}, 1));
            var Aq = $(Ak).text(property.hour);
            var Ar = $(Ak).text(property.min);
            var As = $(Aj).attr("name", "isSecondDay").val(Ah);
            return $("<div/>").append(Ap, An(), Aq, Am(Ad[0]), Ar, As)
        }
    };
    var b = function (Ad) {
        var At = "<span/>";
        var Aj = "<div/>";
        var Ar = "<ul/>";
        var Ak = "<li/>";
        var An = '<input type="hidden"/>';
        var Am = Ad.dateList;
        var Ag = Ad.isSecondDay;
        var Ae = {};
        var Av = {};
        var As = Ad.otherDaytimeList;
        var Af = {};
        for (var Ao = 0; Ao < Am.length; Ao++) {
            var Aq = [];
            var Ah = {};
            for (var Al in As[Ao]) {
                var Aw = As[Ao][Al].hour;
                Aq.push(Aw);
                var Au = As[Ao][Al].minutes;
                Ah[Aw] = Au
            }
            Av[Am[Ao]] = Ah;
            Ae[Am[Ao]] = Aq
        }
        var Ai = function (AE, AF) {
            var AB = Av[AE][AF];
            var AG = $(Aj).addClass("macstyle");
            var AC = $(Aj).addClass("tag_select").text(AB[0]);
            var Ay = $(Ar).addClass("tag_options");
            var AH = $(An).attr("name", "minute").val(AB[0]);
            for (var AD in AB) {
                var Az = $(Ak).hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                }).click(function () {
                    AC.text($(this).text());
                    AH.val($(this).text());
                    Ay.hide()
                });
                Ay.append(Az.text(AB[AD]))
            }
            var AA = null;
            AG.mouseover(function () {
                clearTimeout(AA);
                Ay.show()
            }).mouseout(function () {
                AA = setTimeout(function () {
                    Ay.hide()
                }, 150)
            });
            return AG.append(AC, Ay, AH)
        };
        var Ap = function () {
            var AD = $(Aj).addClass("macstyle");
            var Az = $(Aj).addClass("tag_day_select").text(Am[0]);
            var Ay = $(Ar).addClass("tag_day_options");
            var AF = $(An).attr("name", "day").val(Am[0]);
            var AE = function () {
                $($(this).closest(".macstyle").siblings(".macstyle")[0]).after(Ax($(this).text())).remove();
                $($(this).closest(".macstyle").siblings(".macstyle")[1]).after(Ai($(this).text(), Ae[$(this).text()][0])).remove();
                Az.text($(this).text());
                AF.val($(this).text());
                Ay.hide()
            };
            for (var AB in Am) {
                var AA = $(Ak).hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                }).click(AE);
                Ay.append(AA.text(Am[AB]))
            }
            var AC = null;
            AD.mouseover(function () {
                clearTimeout(AC);
                Ay.show()
            }).mouseout(function () {
                AC = setTimeout(function () {
                    Ay.hide()
                }, 150)
            });
            return AD.append(Az, Ay, AF)
        };
        var Ax = function (AC) {
            var AF = $(Aj).addClass("macstyle");
            var AA = $(Aj).addClass("tag_select").text(Ae[AC][0]);
            var Ay = $(Ar).addClass("tag_options");
            var AG = $(An).attr("name", "hour").val(Ae[AC][0]);
            var AD = function () {
                $($(this).closest(".macstyle").siblings(".macstyle")[1]).after(Ai(AC, $(this).text())).remove();
                AA.text($(this).text());
                AG.val($(this).text());
                Ay.hide()
            };
            for (var AB in Ae[AC]) {
                var Az = $(Ak).hover(function () {
                    $(this).addClass("hover")
                }, function () {
                    $(this).removeClass("hover")
                }).click(AD);
                Ay.append(Az.text(Ae[AC][AB]))
            }
            var AE = null;
            AF.mouseover(function () {
                clearTimeout(AE);
                Ay.show()
            }).mouseout(function () {
                AE = setTimeout(function () {
                    Ay.hide()
                }, 150)
            });
            return AF.append(AA, Ay, AG)
        };
        this.getHtml = function () {
            var Ay = $(At).text(property.deliveryTime);
            var Az = $(At).text(property.hour);
            var AA = $(At).text(property.min);
            var AB = $(An).attr("name", "isSecondDay").val(Ag);
            return $("<div/>").append(Ay, Ap(), Ax(Am[0]), Az, Ai(Am[0], Ae[Am[0]][0]), AA, AB)
        }
    };
    $("input[name=sendfoodtime]").live("click", function () {
        var Ak = $(this);
        var Ah = $(".sendTime");
        var Af = $(".otherDaySendTime");
        var Ai = $(this).attr("tip");
        Ah.empty().hide();
        Af.empty().hide();
        $(".the_other_day_tip").hide();
        if (Ai && Ai == "inTime") {
            Ah.empty().hide()
        } else {
            var Ae = this.value;
            var Ag = Ak.attr("bookingType");
            var Ad = {addressId: Ae};
            if (v.isNewUser) {
                var Aj = Ae.split(",");
                if (!Aj[0] || !Aj[1] || !Aj[2]) {
                    throw new Error('"/getTimeByStore.action" parameters is null')
                }
                Ad = {
                    cityCode: Aj[0],
                    supplementaladdress: Aj[1],
                    mainAddress: Aj[2],
                    coordinate_x: Aj[3],
                    coordinate_y: Aj[4],
                    bookingType: Ag
                }
            }
            KFC_POST("/getTimeByStore.action", Ad, function (Am) {
                if (Am.timeList && Am.timeList.length > 0) {
                    var An = new Ab(Am);
                    Ah.empty().append(An.getHtml()).show();
                    $("#nextTr").show()
                } else {
                    if (Am.otherDaytimeList && Am.otherDaytimeList.length > 0) {
                        var Al = new b(Am);
                        Af.empty().append(Al.getHtml()).show();
                        $(".the_other_day_tip").show().text(property.theOtherDayTip)
                    } else {
                        if (Am && Am.code == serviceCode.OUT_OF_DELIVERY_TIME) {
                            base.yumTrackAlert(Am.message);
                            Ak.closest("td").find("[name=sendfoodtime]:first").click()
                        } else {
                            if (Am && Am.code == serviceCode.ADDR_NOT_FIND) {
                                base.yumTrackAlert(property.notFindAddress);
                                Ak.closest("td").find("[name=sendfoodtime]:first").click()
                            } else {
                                base.yumTrackAlert(property.serviceUnknown);
                                Ak.closest("td").find("[name=sendfoodtime]:first").click()
                            }
                        }
                    }
                }
            })
        }
    });
    $("[name=sendfoodtimeLink]").live("click", function () {
        var Ak = $(this).prev("[name=sendfoodtime]");
        if (Ak.attr("disabled")) {
            return
        }
        $("[name=sendfoodtime]").each(function (Al, Am) {
            $(Am).attr("checked", "false")
        });
        Ak.attr("checked", "true");
        var Ah = $(".sendTime");
        var Af = $(".otherDaySendTime");
        var Ag = Ak.attr("bookingType");
        var Ad = {addressId: Ae};
        var Ai = Ak.attr("tip");
        Ah.empty().hide();
        Af.empty().hide();
        $(".the_other_day_tip").hide();
        if (Ai && Ai == "inTime") {
            Ah.empty().hide()
        } else {
            var Ae = Ak[0].value;
            var Ad = {addressId: Ae};
            if (v.isNewUser) {
                var Aj = Ae.split(",");
                var Ag = Ak.attr("bookingType");
                if (!Aj[0] || !Aj[1] || !Aj[2]) {
                    throw new Error('"/getTimeByStore.action" parameters is null')
                }
                Ad = {
                    cityCode: Aj[0],
                    supplementaladdress: Aj[1],
                    mainAddress: Aj[2],
                    coordinate_x: Aj[3],
                    coordinate_y: Aj[4],
                    bookingType: Ag
                }
            }
            KFC_POST("/getTimeByStore.action", Ad, function (Am) {
                if (Am.timeList && Am.timeList.length > 0) {
                    var An = new Ab(Am);
                    Ah.empty().append(An.getHtml()).show();
                    $("#nextTr").show()
                } else {
                    if (Am.otherDaytimeList && Am.otherDaytimeList.length > 0) {
                        var Al = new b(Am);
                        Af.empty().append(Al.getHtml()).show();
                        $(".the_other_day_tip").show().text(property.theOtherDayTip)
                    } else {
                        if (Am && Am.code == serviceCode.OUT_OF_DELIVERY_TIME) {
                            base.yumTrackAlert(Am.message);
                            Ak.closest("td").find("[name=sendfoodtime]:first").click()
                        } else {
                            if (Am && Am.code == serviceCode.ADDR_NOT_FIND) {
                                base.yumTrackAlert(property.notFindAddress);
                                Ak.closest("td").find("[name=sendfoodtime]:first").click()
                            } else {
                                base.yumTrackAlert(property.serviceUnknown);
                                Ak.closest("td").find("[name=sendfoodtime]:first").click()
                            }
                        }
                    }
                }
            })
        }
    });
    var F = function () {
        var Ad = true;
        $.ajax({
            url: requestContextPath + "/delOsAddrAction.action",
            async: false,
            data: {},
            dataType: "json",
            type: "post",
            success: function (Ae) {
                if (Ae.code == serviceCode.FAIL_CODE) {
                    Ad = false
                }
            }
        });
        return Ad
    };
    var H = function () {
        var Ak = $(this);
        var Ah = Boolean(Ak.attr("needMailFlag"));
        var Ae = !!Ak.attr("isos");
        var Ad = function () {
            var Am = Ak.parents("li");
            if ($("#adderssArea").next()[0] && $("#adderssArea").next().attr("tip") == "deliveryTime") {
                $("#adderssArea").next().remove()
            }
            Am.remove();
            if (!u()) {
                $("#userInfoBrand").hide()
            }
            if ($("#address_1 .info_table_1 li").length == 0) {
                $("#addAddressBtn").click();
                $("#adderssArea").hide()
            }
        };
        if (Ae) {
            var Ai = $('<input style="margin:0 5px" type="text"/>');
            var Aj = $("<button>" + pageMessage.base_confirm + "</button>");
            var Af = $('<button style="margin-left:10px;">' + pageMessage.base_cancle + "</button>");
            var Al = $('<div style="text-align:left;margin:20px 0 15px;padding-left:20px;">' + property.validateCode + ":</div>").append(Ai);
            Al = $("<div/>").append(Al, Aj, Af);
            Af.click(function () {
                Al.remove()
            });
            Aj.click(function () {
                var Am = Ai.val();
                if ($.trim(Am) == "") {
                    base.yumTrackAlert(property.codeNotNull);
                    return
                }
                KFC_POST("/delOsAddress.action", {newCode: $.trim(Am), oaddressid: Ak.attr("isos")}, function (An) {
                    if (An.code == serviceCode.SUC_CODE) {
                        Ad();
                        v.addressList.pop();
                        base.yumTrackAlert(property.deleteSuccessfully)
                    } else {
                        if (An.code == serviceCode.AUTH_CODE_UNCORRECT) {
                            base.yumTrackAlert(property.EorImageInputCode)
                        } else {
                            base.yumTrackAlert(property.serviceUnknown)
                        }
                    }
                    Al.dialog("close")
                })
            });
            var Ag = $('<div><p style="margin-top:20px;">' + property.msgSending + "...</p></div>").dialog({
                title: pageMessage.customer_remind,
                resizable: false,
                modal: true,
                closeOnEscape: true,
                dialogClass: "ui-alert",
                close: function () {
                    $(this).remove()
                },
                position: {my: "center", at: "center", of: window, collision: "fit"}
            });
            if (F()) {
                setTimeout(function () {
                    Ag.remove();
                    Al.dialog({
                        title: pageMessage.customer_remind,
                        resizable: false,
                        modal: true,
                        closeOnEscape: true,
                        dialogClass: "ui-alert",
                        close: function () {
                            $(this).remove()
                        },
                        position: {my: "center", at: "center", of: window, collision: "fit"}
                    })
                }, 3000)
            } else {
                setTimeout(function () {
                    Ag.remove();
                    base.yumTrackAlert(property.sendFailed)
                }, 3000)
            }
        } else {
            base.yumConfirm(property.deleteAddressWarn, function () {
                var Am = Ak.parent().parent().find("input[name=selAddressId]").val();
                if (!v.isNewUser) {
                    if (Am) {
                        KFC_POST("/delAddress.action", {addressId: Am, sendFlag: Ah}, function (An) {
                            if (An.code == serviceCode.SUC_CODE) {
                                Ad();
                                v.addressList.pop();
                                base.yumTrackAlert(property.deleteSuccessfully)
                            } else {
                                if (An.code == serviceCode.DEL_ADDR_CODE) {
                                    base.yumTrackAlert(property.addressDel.format([v.userEmail]))
                                } else {
                                    base.yumTrackAlert(property.emailSendFail)
                                }
                            }
                        })
                    }
                } else {
                    Ad();
                    v.addressList.pop();
                    base.yumTrackAlert(property.deleteSuccessfully)
                }
            })
        }
    };
    this.isFinish = function () {
        if (i.is(":visible")) {
            i.click();
            return false
        }
        if (Y.is(":visible")) {
            Y.click();
            return false
        }
        if (v.addressList.length == 1 && (!$("[name=selAddressId]:checked")[0])) {
            $("input[name=selAddressId]").each(function () {
                this.checked = true;
                $(this).click();
                $(this).parent().parent().addClass("selectcolor")
            });
            return false
        }
        if (!$("[name=selAddressId]:checked")[0]) {
            base.yumTrackAlert(property.addressNotSelect);
            return false
        }
        return true
    };
    this.flagOpenOline = function () {
        if ($("[name=selAddressId]:checked")[0]) {
            return $("[name=selAddressId]:checked").next("input[name=supportonlinepay]").val()
        }
    };
    n.click(g);
    Q.live("click", q);
    $("[address2],[address3],[address4]").hide();
    Aa.live("click", R).each(function () {
        if ($(this).is(":checked")) {
            $(this).click();
            $(this).parent().parent().addClass("selectcolor")
        }
    });
    $("[name=selAddressLink]").live("click", function () {
        $("[address2],[address3],[address4]").hide();
        var Ad = $(this).parent().parent().find("[name=selAddressId]");
        $(this).parent().parent().parent().children().each(function (Ae, Af) {
            $(Af).removeClass("selectcolor")
        });
        Ad.click();
        Ad.parent().parent().addClass("selectcolor")
    });
    m.live("click", H);
    i.click(I);
    Y.click(I)
};
var KFC_Osaddress = function () {
    var A = '<tr><td><input name="selAddressId" type="radio" value="{5}"><input name="nCityCode" type="hidden" value="{1}"><input name="nMainaddress" type="hidden" value="{2}"><input name="nSupplementaladdress" type="hidden" value="{3}"><input name="nStoreId" type="hidden" value="{4}"></td><td class="cityName"><a name="selAddressLink" style="text-decoration: none;display: block;width: 493px;" href="javascript:void(0);">{0}&nbsp;&nbsp;&nbsp;&nbsp;{2}</a></td><td align="right"><a href="javascript:;" class="deleteAddressBtn" isos="{6}" needmailflag="{7}"></a></td></tr>';
    this.bindImportAddress = function (D) {
        $("#import_addr_btn").click(function () {
            var E = KFC_Phone.firstAddPhone ? property.importAddressMobile1.format([D]) : property.importAddressMobile2.format([D]);
            base.yumConfirm(E, function () {
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    data: {mobi: D},
                    url: requestContextPath + "/sendCaptcha.action",
                    beforeSend: function (F) {
                    },
                    success: function (G, F) {
                        if (G.code == serviceCode.SUC_CODE) {
                            B(D)
                        } else {
                            if (G.code == serviceCode.UNKNOWN_SERVICE_ERROR) {
                                base.yumTrackAlert(property.sendFailed)
                            } else {
                                if (G.code == serviceCode.CAPTCHA_OUTTIME1) {
                                    base.yumTrackAlert(property.sendSMSMore)
                                } else {
                                    if (G.code == serviceCode.CAPTCHA_OUTTIME2) {
                                        base.yumTrackAlert(property.sendSMSMore2)
                                    } else {
                                        base.yumTrackAlert(property.sendFailed)
                                    }
                                }
                            }
                        }
                    },
                    complete: function (G, F) {
                    },
                    error: function () {
                        base.yumTrackAlert(property.sendFailed)
                    }
                })
            })
        })
    };
    var B = function (D) {
        var F = 60;
        $("#phoneNo").text(D);
        var E = $("#sms_popup");
        $("#dialog-message-sms").html(E.html());
        $("#dialog-message-sms").dialog({
            resizable: false,
            height: 180,
            width: 400,
            title: property.moblieIdentification,
            closeBtn: true,
            dialogClass: "ui-alert",
            position: {my: "center", at: "center", of: window, collision: "fit"},
            modal: true
        });
        function G() {
            F--;
            $(".count_sms:visible").text(property.sendSMSAgain.format([F]));
            if (F <= 0 || countFlag == false) {
                F = 60;
                $(".count_sms").hide();
                $(".count_sms").text(property.sendSMSAgain.format("60"));
                $(".send_sms_code").show();
                return
            }
            window.setTimeout(G, 1000)
        }

        if (F == 60) {
            $(".count_sms").show();
            $(".send_sms_code").hide();
            countFlag = true;
            G()
        } else {
            F = 60
        }
        $(".vali_phone_btn").unbind("click").bind("click", function () {
            var H = $.trim($(".phoneCode:visible").val());
            if (H == "") {
                base.yumTrackAlert(property.pleaseFillInCode);
                return
            }
            $.ajax({
                dataType: "json",
                type: "POST",
                data: {smsCode: H, mobile: D},
                url: requestContextPath + "/validateSMS.action",
                beforeSend: function (I) {
                },
                success: function (J, I) {
                    if (J.code == serviceCode.SUC_CODE) {
                        C(D);
                        $("#dialog-message-sms").dialog("close")
                    } else {
                        if (J.code == serviceCode.UNKNOWN_SERVICE_ERROR) {
                            base.yumTrackAlert(property.BadRequest)
                        } else {
                            base.yumTrackAlert(property.smsValidationCodeIncorrect);
                            $(".phoneCode:visible").val("")
                        }
                    }
                },
                complete: function (J, I) {
                },
                error: function () {
                    base.yumTrackAlert(property.BadRequest)
                }
            })
        });
        $(".close_sms_btn").unbind("click").bind("click", function () {
            $("#dialog-message-sms").dialog("close");
            countFlag = false
        });
        $(".send_sms_code").unbind("click").bind("click", function () {
            $.ajax({
                dataType: "json",
                type: "POST",
                data: {mobi: D},
                url: requestContextPath + "/sendCaptcha.action",
                beforeSend: function (H) {
                },
                success: function (I, H) {
                    if (I.code == serviceCode.SUC_CODE) {
                        $(".count_sms").show();
                        $(".send_sms_code").hide();
                        G()
                    } else {
                        if (I.code == serviceCode.CAPTCHA_OUTTIME1) {
                            $(".sms_validate_main").find(".sms_tip").text(property.sendSMSMoreDay).show();
                            $(".sms_validate_main").find(".send_sms").hide()
                        } else {
                            if (I.code == serviceCode.CAPTCHA_OUTTIME2) {
                                $(".sms_validate_main").find(".sms_tip").text(property.sendSMSMorePeriod).show();
                                $(".sms_validate_main").find(".send_sms").hide()
                            } else {
                                base.yumTrackAlert(property.sendFailed)
                            }
                        }
                    }
                },
                complete: function (I, H) {
                },
                error: function () {
                    base.yumTrackAlert(property.sendFailed)
                }
            })
        });
        $(".sms_validate_main").find(".sms_tip").hide();
        $(".sms_validate_main").find(".send_sms").show()
    };
    var C = function (D) {
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {phone: D},
            url: requestContextPath + "/importAddress.action",
            beforeSend: function (E) {
            },
            success: function (F, E) {
                if (F) {
                    $.each(F, function () {
                        $("#address_1").find("ul").append(A.format([this.cityName, this.kfcIAddress.citycode, this.fullAddress, this.kfcIAddress.supplementaladdress, this.kfcIAddress.storecode, $("input[name=selAddressId]").size(), this.kfcIAddress.oaddressid, this.needMailFlag]))
                    });
                    $("#addAddress").hide();
                    $("#address_1").show();
                    $("#addAddressBtn").show();
                    $("#import_addr_tip").hide();
                    $("#addressAdd").hide();
                    $("#adderssArea").show();
                    if ($("#address_1").find("li").length == 1 && (!$("[name=selAddressId]:checked")[0])) {
                        $("input[name=selAddressId]").each(function () {
                            this.checked = true;
                            $(this).click();
                            $(this).parent().parent().addClass("selectcolor")
                        })
                    } else {
                        $("[tip=deliveryTime]").hide();
                        $("#nextTr").hide()
                    }
                } else {
                    base.yumTrackAlert(property.importAddressFail)
                }
            },
            complete: function (F, E) {
            },
            error: function () {
                base.yumTrackAlert(property.BadRequest)
            }
        })
    }
};
var KFC_Password = function (G) {
    var S = this;
    var B = $("#edit_pwd");
    var N = B.prev();
    var D = B.next();
    var R = $("#modifyPwdBtn");
    var C = $("#unlockPwdBtn");
    var L = $("#setPassword");
    var I = $("#savePwd");
    var M = I.next();
    var F = $("input[name=password]");
    var O = $("input[name=password1]");
    var P = $("input[name=password2]");
    var H = $("input[name=code]");
    var T = H.next("img");
    var E = /^[a-zA-Z0-9]{6,16}$/;
    this.empty = function () {
        O.val("");
        P.val("");
        H.val("")
    };
    var A = function (U) {
        U.blur(function () {
            if (this.value == "") {
                $(this).addClass("dn").prev().removeClass("dn")
            }
        }).prev().focus(function () {
            $(this).addClass("dn").next().removeClass("dn").focus();
            $(this).addClass("dn").prev().removeClass("dn")
        })
    };
    A(O);
    A(P);
    O.prev().val(property.inputPassword);
    P.prev().val(property.inputPasswordAgain);
    H.tip(property.inputCode);
    var Q = function () {
        var U = requestContextPath;
        if (U.indexOf("/en") > 0) {
            U = U.replace(/\/en/, "/")
        }
        setTimeout(function () {
            T.attr("src", U + "/code.jsp?random=" + new Date().getTime())
        }, 5)
    };
    H.siblings("a,img").click(Q);
    M.click(function () {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdcans")
        }
        if (S.flag == "SET") {
            N.show();
            B.hide();
            O.val("")
        } else {
            if (S.flag == "MODIFY") {
                D.show();
                B.hide()
            }
        }
    });
    R.click(function () {
        S.flag = "MODIFY";
        J();
        D.hide();
        B.show();
        Q()
    });
    L.click(function () {
        if (window._tag) {
            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwd0")
        }
        if (G.isNewUser) {
            J();
            S.flag = "SET";
            N.hide();
            B.show();
            Q()
        } else {
            KFC_POST("/setPassword.action", {}, function (U) {
                if (U.code == serviceCode.SUC_CODE) {
                    base.yumTrackAlert(property.resetMail.format([G.userEmail]))
                } else {
                    if (U.code == serviceCode.MAIL_SEND_FAIL) {
                        base.yumTrackAlert(property.emailSendFail)
                    } else {
                        if (U.code == serviceCode.USER_NOT_LOGIN) {
                            location.href = requestContextPathHttps + "/orderLogin.action"
                        } else {
                            base.yumTrackAlert(property.serviceUnknown)
                        }
                    }
                }
            })
        }
    });
    I.click(function () {
        var W = O.val();
        var V = P.val();
        var U = $.trim(H.val());
        if (W == "" || !/^[a-zA-Z0-9]{6,16}$/.test(W)) {
            base.yumTrackAlert(property.EorPasswordFormat);
            return
        }
        if (W !== V) {
            base.yumTrackAlert(property.twoPasswordsDoNotMatch);
            return
        }
        if (!E.test(W)) {
            base.yumTrackAlert(property.EorPasswordFormat);
            return
        }
        if (common.isStr2(W, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if (U == "" || U == property.inputCode) {
            base.yumTrackAlert(property.inputCode);
            Q();
            return
        }
        if (common.isStr2(U, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if (!G.isNewUser) {
            KFC_POST("/modifyPassword.action", {password: W, auth: U}, function (X) {
                if (X.code == serviceCode.SUC_CODE) {
                    base.yumTrackAlertBack(property.setPasswordSuccessfully, function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdconf")
                        }
                        if (S.flag == "SET") {
                            N.show();
                            B.hide();
                            O.val("")
                        } else {
                            if (S.flag == "MODIFY") {
                                D.show();
                                B.hide()
                            }
                        }
                    })
                } else {
                    if (X.code == serviceCode.AUTH_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            H.val("").focus();
                            Q()
                        })
                    } else {
                        if (X.code == serviceCode.USER_NOT_LOGIN) {
                            loginExit(function () {
                                location.href = requestContextPathHttps + "/orderLogin.action"
                            })
                        } else {
                            if (X.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                base.yumTrackAlert(property.serviceUnknown)
                            }
                        }
                    }
                }
            })
        } else {
            if (H.val() != "") {
                if (K(H.val())) {
                    B.hide();
                    D.show();
                    F.val(W);
                    if (window._tag) {
                        _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdconf")
                    }
                    base.yumTrackAlert(property.setPasswordSuccessfully)
                }
            } else {
                base.yumTrackAlert(property.inputCode)
            }
        }
    });
    var J = function () {
        O.val("").blur();
        P.val("").blur();
        H.val("").blur()
    };
    var K = function (U) {
        var V = false;
        $.ajax({
            url: requestContextPath + "/auth.action",
            type: "post",
            data: {auth: U},
            dataType: "json",
            async: false,
            success: function (W) {
                if (W.code == serviceCode.AUTH_CODE_UNCORRECT) {
                    base.yumTrackAlertBack(property.EorInputCode, function () {
                        H.val("").focus();
                        Q()
                    })
                } else {
                    if (W.code == serviceCode.SUC_CODE) {
                        V = true
                    } else {
                        base.yumTrackAlert(property.serviceUnknown)
                    }
                }
            }
        });
        return V
    };
    this.noPassworddFlag = false;
    this.isFinish = function (V) {
        if (!G.isNewUser) {
            return true
        }
        if (F.val()) {
            return true
        }
        var U = $("[name=selAddressId]:checked");
        if (!this.noPassworddFlag && !O.val() && U[0]) {
            U = U.parent().prev("td").text();
            $("<div><span>" + property.noCodeWarn + U.replace(/^(.).+(.{2})$/, "$1*……*$2") + pageMessage.period + "</span></div>").dialog({
                resizable: false,
                minHeight: "96px",
                modal: true,
                closeOnEscape: true,
                dialogClass: "ui-alert",
                title: pageMessage.customer_remind,
                position: {my: "center", at: "center", of: window, collision: "fit"},
                buttons: {
                    customer_setCode: function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwd1")
                        }
                        $(this).remove();
                        L.click()
                    }, customer_continueOrder: function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "gotomenu")
                        }
                        $(this).remove();
                        V.click()
                    }
                }
            });
            this.noPassworddFlag = true;
            return false
        }
        return this.noPassworddFlag
    };
    Q()
};
var KFC_Customer = function () {
    if (typeof(_tag) != "undefined") {
        _tag.dcsMultiTrack("WT.event", "XXQR_KFC_xyhsyxdz", "WT.msg", "23")
    }
    var E = this;
    this.isNewUser = $("#userFlag").val() == 0 ? true : false;
    this.userEmail = $("#userEmail").val();
    this.userName = "";
    this.gender = "";
    this.phoneList = [];
    this.addressList = [];
    this.password = "";
    var D = new KFC_Base(this);
    var C = new KFC_Phone(this);
    var G = new KFC_Address(this);
    var F = new KFC_Password(this);
    if ($("#phoneUserFlag").val() == "1") {
        var B = new KFC_Osaddress();
        var A = $("#mobiOrMail").val();
        B.bindImportAddress(A)
    }
    $("#nextStep").click(function () {
        if (!isMenuPage) {
            if (!D.isFinish()) {
                return
            }
            if (!G.isFinish()) {
                return
            }
        }
        $.cookie(yumCfg.myNotNeed, null);
        var I = $("#adderssArea").find(".info_table_1 cao li:visible").find("input[name='nStoreId']").val();
        if (G.flagOpenOline() == "true") {
            if (!isMenuPage) {
                base.setAction("regCustomer.action")
            } else {
                var H = $("[name=selAddressId]").size() - 1;
                KFC_POST("/getSelStoreCode.action", {
                    cityCode: $($("[name=nCityCode]")[H]).val(),
                    mainAddress: $($("[name=nMainaddress]")[H]).val(),
                    supplementaladdress: $($("[name=nSupplementaladdress]")[H]).val() || "",
                    isBookingOrder: $("[name=sendfoodtime]")[1].checked,
                    coordinate_x: $($("[name=coordinate_x]")[H]).val(),
                    coordinate_y: $($("[name=coordinate_y]")[H]).val()
                }, function (J) {
                    if (J) {
                        if (J.code == serviceCode.SUC_CODE) {
                            if ("false" == J.message) {
                                $("#changeAddress").hide();
                                base.yumCloseLoading();
                                $("#orderFlag").val("1");
                                base.setAction("regCustomer.action", "post", "changeAddressForm")
                            } else {
                                $("#orderFlag").val("");
                                base.setAction("regCustomer.action", "post", "changeAddressForm")
                            }
                        }
                    }
                })
            }
        } else {
            base.yumTrackAlertBack(property.notOnlinePay, function () {
                if (!isMenuPage) {
                    base.setAction("regCustomer.action")
                } else {
                    var J = $("[name=selAddressId]").size() - 1;
                    KFC_POST("/getSelStoreCode.action", {
                        cityCode: $($("[name=nCityCode]")[J]).val(),
                        mainAddress: $($("[name=nMainaddress]")[J]).val(),
                        supplementaladdress: $($("[name=nSupplementaladdress]")[J]).val() || "",
                        isBookingOrder: $("[name=sendfoodtime]")[1].checked,
                        coordinate_x: $($("[name=coordinate_x]")[J]).val(),
                        coordinate_y: $($("[name=coordinate_y]")[J]).val()
                    }, function (K) {
                        if (K) {
                            if (K.code == serviceCode.SUC_CODE) {
                                if ("false" == K.message) {
                                    $("#changeAddress").hide();
                                    base.yumCloseLoading();
                                    base.yumConfirm(property.addressChangeConfirm, function () {
                                        $("#orderFlag").val("1");
                                        base.setAction("regCustomer.action", "post", "changeAddressForm")
                                    })
                                } else {
                                    $("#orderFlag").val("");
                                    base.setAction("regCustomer.action", "post", "changeAddressForm")
                                }
                            }
                        }
                    })
                }
            })
        }
    })
};
$(function () {
    KFC_Customer();
    isMenuPage = $("input#tag").val() == "index"
});