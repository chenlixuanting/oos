var KFCIOS = KFCIOS || {};
KFCIOS.customerCenter = KFCIOS.customerCenter || {};
KFCIOS.customerCenter.init = function () {
    this.page.init();
    this.btn.init()
};
Date.prototype.Format = function (A) {
    var B = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(A)) {
        A = A.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (var C in B) {
        if (new RegExp("(" + C + ")").test(A)) {
            A = A.replace(RegExp.$1, (RegExp.$1.length == 1) ? (B[C]) : (("00" + B[C]).substr(("" + B[C]).length)))
        }
    }
    return A
};
KFCIOS.customerCenter.commonFn = {
    getPage: function (A, B) {
        B = B || {};
        if (A.indexOf("/") === 0) {
            A = requestContextPath + A
        } else {
            A = requestContextPath + "/" + A
        }
        $.ajax({
            dataType: "html", type: "POST", data: B, url: A, async: false, beforeSend: function (C) {
            }, success: function (C) {
                $(".user_con").empty().append($(C))
            }, complete: function (D, C) {
            }, error: function () {
                base.yumAlert(property.BadRequest)
            }
        })
    }, KFC_POST: function (B) {
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
    }, refreshCode: function (B) {
        var A = requestContextPath;
        if (A.indexOf("/en") > 0) {
            A = A.replace(/\/en/, "/")
        }
        setTimeout(function () {
            B.attr("src", A + "/code.jsp?random=" + new Date().getTime())
        }, 5)
    }, countDown: function (B, A) {
        var C = $(B);
        if (A >= 0) {
            if (typeof buttonDefaultValue === "undefined") {
                buttonDefaultValue = C.text()
            }
            C.data("dis", true);
            C.text(property.stormingBack + "(" + A + pageMessage.secs + ")");
            A--;
            setTimeout(function () {
                KFCIOS.customerCenter.commonFn.countDown(B, A)
            }, 1000)
        } else {
            C.data("dis", false);
            C.text(property.stormingBack)
        }
    }, getSmsCaptcha: function (B, C, A) {
        C = C || {};
        KFCIOS.customerCenter.commonFn.KFC_POST({
            action: A, data: C, callback: function (D) {
                var F = $(B).parents(".newpsline").prev().find("input[name=code]");
                var E = $(B).parents(".newpsline").prev().find(".radio_edit_img img");
                F.val(property.inputImageCode);
                KFCIOS.customerCenter.commonFn.refreshCode(E);
                if (D.code == serviceCode.SUC_CODE) {
                    KFCIOS.customerCenter.commonFn.countDown(B, 60);
                    base.yumTrackAlert(property.sendSussSuccessfully)
                } else {
                    if (D.code == serviceCode.CAPTCHA_OUTTIME1) {
                        base.yumTrackAlertWiden(property.sendSMSMore)
                    } else {
                        if (D.code == serviceCode.CAPTCHA_OUTTIME2) {
                            base.yumTrackAlertWiden(property.sendSMSMore2)
                        } else {
                            if (D.code == serviceCode.AUTH_CODE_UNCORRECT) {
                                base.yumTrackAlert(property.EorImageInputCode)
                            } else {
                                base.yumTrackAlert(property.sendFailed)
                            }
                        }
                    }
                }
            }
        })
    }, saveBindPhone: function (A, B) {
        KFCIOS.customerCenter.commonFn.KFC_POST({
            action: A, data: B, callback: function (C) {
                if (C.code == serviceCode.SUC_CODE) {
                    base.yumTrackAlertBack(property.setBindPhopeSuccessfully, function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdconf")
                        }
                        KFCIOS.customerCenter.commonFn.getPage("customerDesc.action")
                    })
                } else {
                    if (C.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            $("input[name=phoneCode]").val("").focus()
                        })
                    } else {
                        if (C.code == serviceCode.USER_NOT_LOGIN) {
                            loginExit(function () {
                                location.href = requestContextPathHttps + "/orderLogin.action"
                            })
                        } else {
                            if (C.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                if (C.code == serviceCode.AUTH_CODE_UNCORRECT) {
                                    base.yumTrackAlert(property.EorImageInputCode)
                                } else {
                                    base.yumTrackAlert(property.serviceUnknown)
                                }
                            }
                        }
                    }
                }
            }
        })
    }, savePs: function (G) {
        passwordVal = G.passwordVal;
        password2Val = G.password2Val;
        inputCode = G.inputCode;
        var A = null;
        var D = G.imageCode.val();
        if (inputCode) {
            A = $.trim(inputCode.value)
        }
        var E = /^[a-zA-Z0-9]{6,16}$/;
        if (passwordVal == "" || !/^[a-zA-Z0-9]{6,16}$/.test(passwordVal)) {
            base.yumTrackAlert(property.EorPasswordFormat);
            return
        }
        if (passwordVal !== password2Val) {
            base.yumTrackAlert(property.twoPasswordsDoNotMatch);
            return
        }
        if (!E.test(passwordVal)) {
            base.yumTrackAlert(property.EorPasswordFormat);
            return
        }
        if (common.isStr2(passwordVal, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        if (A == null && (D == "" || D == property.inputImageCode)) {
            base.yumTrackAlert(property.inputImageCode);
            return
        }
        if (A == "" || A == property.inputCode) {
            base.yumTrackAlert(property.inputCode);
            return
        }
        if (A != null && common.isStr2(A, 1)) {
            base.yumTrackAlert(property.invaildStringError);
            return
        }
        var B = "/modifyPassword.action";
        var F = $("#setPs").data("opFlag");
        var C = {password: passwordVal, auth: A, userFlag: F, imageCode: D};
        KFCIOS.customerCenter.commonFn.KFC_POST({
            action: B, data: C, callback: function (H) {
                if (H.code == serviceCode.SUC_CODE) {
                    base.yumTrackAlertBack(property.setPasswordSuccessfully, function () {
                        if (window._tag) {
                            _tag.dcsMultiTrack("wt.event", "orderAlert", "wt.msg", "setpwdconf")
                        }
                        window.location.href = requestContextPath + "/customerCenter.action"
                    })
                } else {
                    if (H.code == serviceCode.AUTH_CODE_UNCORRECT || H.code == serviceCode.PHONE_CODE_UNCORRECT) {
                        base.yumTrackAlertBack(property.EorInputCode, function () {
                            if (inputCode != null) {
                                $(inputCode).val("").focus()
                            } else {
                                G.imageCode.val("").focus()
                            }
                        })
                    } else {
                        if (H.code == serviceCode.USER_NOT_LOGIN) {
                            loginExit(function () {
                                location.href = requestContextPathHttps + "/orderLogin.action"
                            })
                        } else {
                            if (H.code == serviceCode.VERIFY_VERIFICATION_CODE_ERROR) {
                                base.yumTrackAlert(property.EorNmuCode)
                            } else {
                                base.yumTrackAlert(property.serviceUnknown)
                            }
                        }
                    }
                }
            }
        })
    }
}, KFCIOS.customerCenter.page = {
    init: function () {
        this.defaultPage()
    }, defaultPage: function () {
        var A = $(".user_menu_js>ul>li>a").filter(".on");
        var B = A.attr("url");
        KFCIOS.customerCenter.commonFn.getPage(B)
    }
};
KFCIOS.customerCenter.btn = {
    init: function () {
        this.leftMemuBtn()
    }, leftMemuBtn: function () {
        $(".user_menu_js li>a").click(function () {
            var B = $(this);
            var A = B.attr("url");
            $(".user_menu_js li>a").removeClass("on");
            B.addClass("on");
            KFCIOS.customerCenter.commonFn.getPage(A)
        })
    }
};
KFCIOS.customerCenter.info = {
    init: function () {
        this.page.init();
        this.btn.init()
    }, page: {
        init: function () {
            this.hideElement();
            this.inputFocus();
            this.inputBlur();
            this.initTip()
        }, hideElement: function () {
            $(".newname-js").hide();
            $(".newsex-js").hide();
            $(".newps-js").hide();
            $(".unlockPwd").hide();
            $(".newip-js").hide()
        }, inputFocus: function () {
            $("input").die("focus").live("focus", function () {
                var A = $(this);
                A.val("");
                var B = A.attr("id");
                if ("input1" === B) {
                    A.addClass("dn").next("input").removeClass("dn").focus()
                }
            })
        }, inputBlur: function () {
            $("input").die("blur").live("blur", function () {
                var C = $(this);
                var E = C.val();
                if ("" == E || null == E) {
                    var A = C.attr("type");
                    if ("password" === A) {
                        C.addClass("dn").prev("input").removeClass("dn");
                        var D = C.prev("input");
                        var B = D.attr("tip");
                        D.val(property[B])
                    } else {
                        var B = C.attr("tip");
                        C.val(property[B])
                    }
                }
            })
        }, initTip: function () {
            $("input[type=text]").each(function () {
                var B = $(this);
                var A = B.attr("tip");
                if (A) {
                    B.val(property[A])
                }
            })
        }
    }, btn: {
        init: function () {
            this.userInfoUpdateBtnList.init();
            this.userPasswordBtnList.init();
            this.bindPhoneBtnList.init()
        }, userInfoUpdateBtnList: {
            init: function () {
                this.userName.init();
                this.userSex.init()
            }, userName: {
                init: function () {
                    this.reviseNameBtn();
                    this.bcNameBtn();
                    this.saveBtn()
                }, reviseNameBtn: function () {
                    $(".xgname-js").click(function () {
                        $(".oldname-js").hide();
                        $(".newname-js").show()
                    })
                }, bcNameBtn: function () {
                    $(".bcname-js").click(function () {
                        $(".oldname-js").show();
                        $(".newname-js").hide()
                    })
                }, saveBtn: function () {
                    $(".savename-js").click(function () {
                        var B = $(".textinput.newname-js>input").val();
                        B = $.trim(B);
                        if (B == "" || B == property.customerNameTip) {
                            base.yumTrackAlert(property.customerNameNotNull);
                            return false
                        }
                        var C = {customerName: B};
                        var A = "userName";
                        KFCIOS.customerCenter.info.btn.userInfoUpdateBtnList.saveBtn(C, A);
                        $(".oldname-js").show();
                        $(".newname-js").hide()
                    })
                }
            }, userSex: {
                init: function () {
                    this.bcSexBtn();
                    this.selectSexBtn();
                    this.reviseSexBtn();
                    this.saveBtn()
                }, bcSexBtn: function () {
                    $(".bcsex-js").click(function () {
                        $(".oldsex-js").show();
                        $(".newsex-js").hide().removeClass("on").parents("#sexSelect").find("a:not(.newsex-js)").addClass("on")
                    })
                }, selectSexBtn: function () {
                    $(".sexor-js a").click(function () {
                        $(".sexor-js a").removeClass("on");
                        $(this).addClass("on")
                    })
                }, reviseSexBtn: function () {
                    $(".xgsex-js").click(function () {
                        $(".oldsex-js").hide();
                        $(".newsex-js").show()
                    })
                }, saveBtn: function () {
                    $(".savesex-js").click(function () {
                        var B = $(".text.sexor-js>.on").attr("gender");
                        var C = {gender: B};
                        var A = "userSex";
                        KFCIOS.customerCenter.info.btn.userInfoUpdateBtnList.saveBtn(C, A)
                    })
                }
            }, saveBtn: function (B, A) {
                B = B || {};
                KFCIOS.customerCenter.commonFn.KFC_POST({
                    data: B, action: "/updateInfo.action", callback: function (C) {
                        if (C.code == serviceCode.SUC_CODE) {
                            if (A == "userName") {
                                var E = $(".sexor-js>.on").attr("gender");
                                E = E == 0 ? pageMessage.common_Mr : pageMessage.common_Ms;
                                $("input#customerName").val(B.customerName);
                                $(".linebox").find(".text>.oldname-js").text($.trim(B.customerName + "　" + E));
                                $(".customerName").text($.trim(B.customerName + " " + E))
                            } else {
                                if (A == "userSex") {
                                    var D = $("input#customerName").val();
                                    var E = $(".sexor-js>.on").attr("gender");
                                    E = E == 0 ? pageMessage.common_Mr : pageMessage.common_Ms;
                                    $(".sexor-js>a").removeClass("newsex-js");
                                    $(".sexor-js>a:not(.on)").addClass("newsex-js");
                                    $(".linebox").find(".text>.oldname-js").text($.trim(D + "　" + E));
                                    $(".customerName").text($.trim(D + " " + E));
                                    $(".newsex-js").hide();
                                    $(".oldsex-js").show()
                                }
                            }
                        } else {
                            base.yumTrackAlert(property.serviceUnknown)
                        }
                    }
                })
            }
        }, userPasswordBtnList: {
            init: function () {
                this.updataPsBtn();
                this.setPsBtn()
            }, updataPsBtn: function () {
                $(".xgps-js").click(function () {
                    var A = $("#customerPhone").val();
                    var B = $("#customerMail").val();
                    validateForm.setPassword(null, {"flag": true, "phone": A, "email": B, "scene": "S11"})
                })
            }, setPsBtn: function () {
                $("#setPassword").click(function () {
                    var A = $("#customerPhone").val();
                    var B = $("#customerMail").val();
                    validateForm.setPassword(null, {"flag": true, "phone": A, "email": B})
                })
            }
        }, bindPhoneBtnList: {
            init: function () {
                this.backCustomerDesc();
                this.updataBindPhoneBtn();
                this.bindBtn()
            }, backCustomerDesc: function () {
                $(".toCustomerDes").click(function () {
                    KFCIOS.customerCenter.commonFn.getPage("customerDesc.action")
                })
            }, updataBindPhoneBtn: function () {
                $("#updataBindPhone").click(function () {
                    var A = $("#customerPhone").val();
                    var B = $("#customerMail").val();
                    var C = $("#userType").val();
                    var D = {"flag": true, "phone": A, "email": B, "userType": C};
                    if (C == 1) {
                        base.yumTrackAlertBack(property.set_password_first, function () {
                            validateForm.setPassword(null, D)
                        })
                    } else {
                        $("#userType").val(2);
                        validateForm.setPhone(null, D)
                    }
                })
            }, bindBtn: function () {
                $("#bindBtn").click(function () {
                    var A = $("#customerPhone").val();
                    var B = $("#customerMail").val();
                    var C = $("#userType").val();
                    var D = {"flag": true, "phone": A, "email": B, "userType": C};
                    if (C == 1) {
                        base.yumTrackAlertBack(property.set_password_first, function () {
                            validateForm.setPassword(null, D)
                        })
                    } else {
                        $("#userType").val(2);
                        validateForm.setPhone(null, D)
                    }
                })
            }
        }
    }
};
KFCIOS.customerCenter.promotionList = {
    init: function () {
    }
};
KFCIOS.customerCenter.orderItemDetail = {
    init: function () {
        this.specialCouponDesc = "";
        $(".close_details").die("click").live("click", function () {
            $("#order_item_detail").hide();
            if (KFCIOS.customerCenter.orderList.orderType == -1) {
                $("#orderList_history").hide();
                $("#orderList_now").show()
            } else {
                $("#orderList_now").hide();
                $("#orderList_history").show()
            }
        });
        $(".open_btn,.close_btn").die("click").live("click", function () {
            $(this).parent().parent().next().toggle();
            if ($(this).hasClass("close_btn")) {
                $(this).removeClass("close_btn")
            } else {
                $(this).addClass("close_btn")
            }
        })
    }, getGender: function (A) {
        if (0 == A) {
            return pageMessage.common_Mr
        } else {
            return +pageMessage.common_Ms
        }
    }, getPromPrice: function (A) {
        if (A) {
            return "￥" + A
        }
        return A
    }, getDeliverFee: function (C) {
        var D = "";
        if (C && C.length > 0) {
            for (var A = 0; A < C.length; A++) {
                var B = C[A];
                if (B.promotionType === 4) {
                    D = (B.realPrice / 100).toFixed(1);
                    break
                }
            }
        }
        return D
    }, getDeliveryFeeFree: function (C) {
        var D = "";
        if (C && C.length > 0) {
            for (var A = 0; A < C.length; A++) {
                var B = C[A];
                if (B.promotionType === 5) {
                    D += "（" + B.nameCN + "）";
                    break
                }
            }
        }
        return D
    }, getInvoiceHead: function (A) {
        if ("" != A) {
            if (null != A) {
                return "&nbsp&nbsp&nbsp" + pageMessage.common_invoiceTitle + pageMessage.colon + A
            } else {
                return "否"
            }
        } else {
            return "否"
        }
    }, getIremark: function (A) {
        if (null == A) {
            return pageMessage.common_nothing
        } else {
            return A
        }
    }, getOtherContact: function (A) {
        if (null == A || A == "") {
            return pageMessage.common_nothing
        } else {
            return A
        }
    }, getDonation: function (A) {
        if (null == A || A == "") {
            return ""
        } else {
            return '<span class="total_price_span_query"><em class="ft_b" style="color:#e60012">' + pageMessage.pay_donationTip.replace("{0}", A) + "</em></span>"
        }
    }, getPayType: function (A) {
        var B = "";
        if (A === 0) {
            B = "货到现金付款"
        } else {
            if (A === 1) {
                B = "网上支付"
            } else {
                if (A === 2 || A === 22) {
                    B = "支付宝支付"
                } else {
                    if (A === 3) {
                        B = "必胜宅急送美食券支付"
                    } else {
                        if (A === 4) {
                            B = "微信支付"
                        } else {
                            if (A === 5) {
                                B = "财付通支付"
                            } else {
                                if (A === 6) {
                                    B = "余额支付"
                                } else {
                                    if (A === 7) {
                                        B = "心意美食卡支付"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return B
    }, buildData: function (K, Y) {
        var Z = this;
        Z.specialCouponDesc = "";
        var J = "";
        if (K.deliverFeeTip) {
            J = "(" + K.deliverFeeTip + ")"
        }
        var T = "";
        if (K.bookingType == 2 || K.bookingType == 3) {
            T = '<span class="the_other_day_tip_detail">(' + property.theOtherDayTip + ")</span>"
        }
        var X = "<div></div>";
        var V = "";
        var U = new Date(K.promiseTime).Format("MM-dd");
        var M = new Date(K.promiseTime).Format("hh:mm");
        var B = {status: 101, updateDate: K.orderDate};
        if (K.statusList && K.statusList.length > 0) {
            B = K.statusList[0]
        }
        var P = true;
        if (K.iremark && K.iremark.indexOf("自取") > -1) {
            P = false
        }
        if (KFCIOS.customerCenter.orderList.orderType == -1) {
            if (K.big) {
                V = "送达时间以客服确认为准"
            } else {
                if (B === 400 || B === 401) {
                    V = [U + " " + M] + pageMessage.check_hasSend
                } else {
                    V = pageMessage.check_sendSoon.format([U + " " + M])
                }
            }
            if (!P) {
                V = ""
            }
            X = "<div class='orderList_details_area'><div class='orderList_detail_status'>" + KFCIOS.customerCenter.orderList.getOrderStatus(B) + "</div><div class='orderList_detail_time'>" + V + "</div></div>"
        }
        var Q = "", R = K.items.length, W = 0;
        Q = '<h4 style="text-decoration: underline;"><span>' + pageMessage.check_orderItems + '</span><span class="close_details">' + pageMessage.check_close + "</span></h4>" + X + '<div class="query_order_details"><div class="personal_info"><p><span class="personal_info_title">' + pageMessage.check_customerInformation + '</span></p><p><span class="personal_info_span_1">' + pageMessage.check_name + '</span><span class="personal_info_span_2">' + K.ilinkman + '</span></p><p><span class="personal_info_span_1">' + pageMessage.check_telephone + '</span><span class="personal_info_span_2">' + K.phone + '</span></p><p><span class="personal_info_span_1">' + pageMessage.check_address + '</span><span class="personal_info_span_2">' + K.streetName + K.address2 + '</span></p></div><div class="hr_1"></div><div class="order_info" style="border-bottom: 1px #e0e3e5 solid;"><p><span class="personal_info_title">' + pageMessage.check_orderItems + "</span>" + T + "</p>";
        Q += '<table width="100%" border="1" class="query_order_table_1"><tr><th width="8%">' + pageMessage.check_no + '</th><th width="20%">' + pageMessage.check_productName + '</th><th width="10%">' + pageMessage.check_unitPrice + '</th><th  width="8%">' + pageMessage.check_quantity + '</th><th  width="12%">' + pageMessage.check_promotionPrice + '</th><th  width="10%">' + pageMessage.check_subtotal + "</th><th>" + pageMessage.check_remark + "</th></tr>";
        var D = [];
        for (var C = 0; C < R; C++) {
            var S = K.items[C];
            if (S.promotionType === 4 || S.promotionType === 5) {
                continue
            }
            D.push(S)
        }
        for (var F = 0; F < D.length; F++) {
            var S = D[F];
            if (S.promotionType === 4 || S.promotionType === 5) {
                continue
            }
            var H = D[F].price;
            var I = S.mealItems;
            W += H * D[F].quantity;
            var O = D[F].promotionDescCN || "";
            if (O) {
                O = $.localStr({cn: D[F].promotionDescCN, en: D[F].promotionDescEN}, 1)
            }
            var L = "";
            if (O) {
                L = "￥" + (D[F].realPrice / 100).toFixed(1)
            }
            Q += '<tr><td align="left">' + (F + 1) + "</td><td>" + $.localStr({
                    cn: D[F].nameCN,
                    en: D[F].nameEN
                }, 1) + '{0}</td><td><span class="ft_color_red">￥' + (D[F].price / 100).toFixed(1) + "</span></td><td>" + D[F].quantity + "</td><td>" + L + '</td><td><span class="ft_color_red">￥' + (D[F].realPrice / 100).toFixed(1) + "</span></td><td>" + O + "</td>";
            "</tr>";
            if (I && I.length > 0) {
                Q = Q.format(['<span class="open_btn" style="margin-left: 20px;"></span>']);
                var A = "";
                for (var C = 0; C < I.length; C++) {
                    A += $.localStr({
                            cn: I[C].nameCN,
                            en: I[C].nameEN
                        }, 1) + "*" + I[C].quantity + "&nbsp&nbsp&nbsp&nbsp"
                }
                Q += '<tr style="display: table-row;"><td></td><td align="left" colspan="6"><div class="product_detail">' + A + "</div></td></tr>"
            } else {
                Q = Q.format([""])
            }
        }
        Q += '</table><div class="total_price_div"><p><span class="price_span_query"><em class="ft_b">' + pageMessage.check_subtotal2 + "</em>" + $.moneyFormat((K.totalFee / 100).toFixed(1)) + ' | <em class="ft_b">' + pageMessage.check_deliveryFeeDeliveryFee + "：</em>" + $.moneyFormat(this.getDeliverFee(K.items)) + " " + this.getDeliveryFeeFree(K.items) + '</span></p><p><span class="total_price_span_query"><em class="ft_b">' + pageMessage.check_total + "</em>" + $.moneyFormat((K.totalFee / 100).toFixed(1)) + "</span>" + this.getDonation(K.donation) + '</p></div><div class="hr_1"></div>';
        if (!P) {
            var G = K.phone.slice(-2) + K.orderId.slice(-3);
            var N = K.storename;
            var E = K.storecode;
            if (N) {
                N = N.replace(E, "")
            }
            Q += '<p><span class="personal_info_span_3">' + pageMessage.check_takeAwayDate + '</span><span class="personal_info_span_2">' + U + " " + M + '</span></p><p><span class="personal_info_span_3">' + pageMessage.check_posNumber + '</span><span class="personal_info_span_2">' + G + '</span></p><p><span class="personal_info_span_3">' + pageMessage.check_takeAwayStore + '</span><span class="personal_info_span_2">' + K.storeaddress + " （" + N + "）店</span></p>";
            K.iremark = ""
        }
        Q += '<p><span class="personal_info_span_3">' + pageMessage.check_payment + '</span><span class="personal_info_span_2">' + this.getPayType(K.payType) + "&nbsp&nbsp" + (K.payTransactionNo == null ? "" : K.payTransactionNo) + '</span></p><p><span class="personal_info_span_3">' + pageMessage.check_DoyourNeedInvoice + '</span><span class="personal_info_span_2">' + (Y.invoiceFlag ? "是" : "") + " " + this.getInvoiceHead(K.invoiceTitle) + '</span></p><p><span class="personal_info_span_3">' + pageMessage.check_anyOtherRequirement + '</span><span class="personal_info_span_2">' + K.iremark + '</span></p><p><span class="personal_info_span_3">' + pageMessage.check_backUpTelephone2 + '</span><span class="personal_info_span_2">' + this.getOtherContact(K.ilinkphone) + "</span></p></div></div>";
        return Q
    }
};
KFCIOS.customerCenter.orderList = {
    init: function () {
        this.btn.init();
        this.currPage = 0;
        this.PAGE_SIZE = 10;
        this.orderType = -1;
        this.totalPage = 0;
        this.notPayCountDownMins = 15;
        this.loadSuc = true;
        this.queryOrderList();
        this.specialCouponCode = ""
    }, countDown: function (B, A) {
        var C;
        var D = function () {
            if (B >= 0) {
                var E = Math.floor(B / 60);
                var F = Math.floor(B % 60);
                var G = "(还剩" + E + "分" + F + "秒)";
                A(G);
                --B
            } else {
                clearInterval(C);
                A("")
            }
        };
        D();
        C = setInterval(D, 1000)
    }, procNotPayOrder: function (A, C, B) {
        var H = {showCountDown: false, showCountDownText: ""};
        if (A.status && A.status == 100) {
            var D = A.orderDate;
            var G = C;
            var F = G - D;
            var E = this.notPayCountDownMins * 60 * 1000;
            var I = (E - F) > 0 ? (E - F) : 0;
            if (I > 0) {
                this.countDown(I / 1000, function (J) {
                    if (!J) {
                        A.notPayHasCanceled = true;
                        B(A)
                    } else {
                        A.showCountDownText = J;
                        A.notPayHasCanceled = false;
                        B(A)
                    }
                })
            } else {
                A.notPayHasCanceled = true;
                B(A)
            }
        }
    }, queryOrderList: function () {
        if (!this.loadSuc) {
            return
        }
        var B = this;
        var A = '<li class="orderList_li orderList_body"><div class="orderList_format orderList_date"><div class="orderList_day">{0}</div><div class="orderList_time">{1}</div></div><div class="orderList_format orderList_details"><div class="orderList_detail_info">' + pageMessage.check_totalProduct + '</div><div class="orderList_detail_desc">{3}</div></div><div class="orderList_format orderList_price">{4}' + pageMessage.common_yuan + '</div><div class="orderList_format orderList_status">{5}</div><div class="orderList_format orderList_option"><div class="gotopay_order">' + pageMessage.check_pay_order + '</div><div class="gotopay_order_info"></div><div class="orderItem_details">' + pageMessage.check_orderItems + '</div><div class="another_order">' + pageMessage.check_quick_order + "</div></div>{6}</li>";
        $(".noyor-js").hide();
        var D = "";
        var E = "";
        var G = "";
        var C = {};
        var F = "getOrderList.action?level=90&timeStamp=" + Math.random();
        if (this.orderType == -1) {
            $("#orderList_now .orderList_ul .orderList_body").remove()
        } else {
            if (this.orderType == 1) {
                F = "getOrderList.action?level=9999&timeStamp=" + Math.random();
                $("#orderList_history .orderList_ul .orderList_body").remove();
                C.pageSize = this.PAGE_SIZE;
                C.currPage = this.currPage;
                C.within = true;
                $("#Pagination_history").hide()
            } else {
                if (this.orderType == 2) {
                    F = "getOrderList.action?level=9999&timeStamp=" + Math.random();
                    $("#orderList_history .orderList_ul .orderList_body").remove();
                    C.pageSize = this.PAGE_SIZE;
                    C.currPage = this.currPage;
                    C.within = false;
                    $("#Pagination_history").hide()
                }
            }
        }
        base.yumOpenLoading();
        B.loadSuc = false;
        $.ajax({
            url: F, data: C, type: "GET", dataType: "json", success: function (H) {
                base.yumCloseLoading();
                B.loadSuc = true;
                B.specialCouponCode = H.specialCouponCode;
                if (null != H && "" != H && H.count > 0) {
                    $(".noyor-js").hide();
                    $.each(H.orderList, function (M, L) {
                        var O = new Date(L.orderDate).Format("MM-dd");
                        var I = new Date(L.orderDate).Format("hh:mm");
                        var J = (L.totalFee / 100).toFixed(1);
                        var N = L.extValue;
                        E = B.getOrderStatus(L);
                        var K = $(A.format([O, I, L.itemCount, "", J, E, ""]));
                        if (L.status === 100) {
                            B.procNotPayOrder(L, H.syncTime, function (P) {
                                if (P) {
                                    if (!P.notPayHasCanceled) {
                                        K.find(".gotopay_order_info").html(P.showCountDownText);
                                        K.find(".orderItem_details, .another_order").hide()
                                    } else {
                                        K.find(".orderList_status").text("订单已取消");
                                        K.find(".gotopay_order, .gotopay_order_info").remove();
                                        K.find(".orderItem_details, .another_order").show();
                                        if (N && N.CLOSE_AGAIN === "Y") {
                                            K.find(".another_order").remove()
                                        }
                                    }
                                }
                            })
                        } else {
                            K.find(".gotopay_order,.gotopay_order_info").remove();
                            if (N && N.CLOSE_AGAIN === "Y") {
                                K.find(".another_order").remove()
                            }
                        }
                        K.data("itemData", L);
                        if (B.orderType == -1) {
                            $("#orderList_now .orderList_ul").append(K)
                        } else {
                            $("#orderList_history .orderList_ul").append(K)
                        }
                    })
                } else {
                    if (B.orderType == -1) {
                        $(".noyor-js").show()
                    } else {
                        if (B.orderType == 1) {
                            $("#orderList_history .orderList_ul").append("<li class='orderList_body orderList_no_content '>" + pageMessage.check_noContent1 + "</li>")
                        } else {
                            if (B.orderType == 2) {
                                $("#orderList_history .orderList_ul").append("<li class='orderList_body orderList_no_content '>" + pageMessage.check_noContent2 + "</li>")
                            }
                        }
                    }
                }
            }
        })
    }, getOrderStatus: function (A) {
        var C = "";
        var B = A.status;
        if (B === 100) {
            C = "待支付"
        } else {
            if (B === 101 || B === 102) {
                C = "订单已提交"
            } else {
                if (B === 103) {
                    C = "订单已确认"
                } else {
                    if (B === 104) {
                        C = "下单失败"
                    } else {
                        if (B === 201) {
                            C = "餐点准备中"
                        } else {
                            if (B === 301) {
                                C = "派送中"
                            } else {
                                if (B === 400 || B === 401) {
                                    C = "订单完成"
                                } else {
                                    if (B === 402) {
                                        C = "派送中"
                                    } else {
                                        if (B === 506 || B === 509) {
                                            C = "订单已取消"
                                        } else {
                                            C = "订单已提交"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return C
    }, initPageNum: function () {
        var A = this;
        $("#Pagination_history").pagination(A.totalPage, {
            callback: B,
            prev_text: "<",
            next_text: ">",
            items_per_page: A.PAGESIZE,
            num_edge_entries: 2,
            num_display_entries: 6,
            current_page: A.currPage
        });
        function B(C) {
            A.currPage = C;
            A.queryOrderList()
        }
    }, btn: {
        init: function () {
            this.startOrder();
            this.toTencentUrl();
            this.orderItemDetail();
            this.historyClick()
        }, toTencentUrl: function () {
            $(".orderList_tencent").die("click").live("click", function () {
                if (window._tag) {
                    _tag.dcsMultiTrack("wt.event", "queryPageBanner广告点击", "wt.msg", "广告内容")
                }
                var A = $(this).find("img").attr("tencenturl");
                if (A != "") {
                    window.open(A, "_blank")
                }
            })
        }, orderItemDetail: function () {
            var A = this;
            var B = {};
            $(".orderItem_details").die("click").live("click", function () {
                B = $($(this).parents(".orderList_body")[0]).data("itemData");
                if (B.status === 100 || B.status === 506 || B.status === 509) {
                    base.yumAlert(property.orderCandcelled);
                    return
                }
                base.yumOpenLoading();
                $.ajax({
                    url: "getOrderDetail.action",
                    data: {orderid: B.orderId, level: KFCIOS.customerCenter.orderList.orderType == -1 ? 90 : 9999},
                    type: "GET",
                    dataType: "json",
                    success: function (F, C) {
                        base.yumCloseLoading();
                        var D = F.syncTime;
                        var E = F.orderInfo;
                        $("#orderList_now").hide();
                        $("#orderList_history").hide();
                        $("#order_item_detail").html(KFCIOS.customerCenter.orderItemDetail.buildData(E, F)).show();
                        if (KFCIOS.customerCenter.orderList.orderType == -1 && B && F.eInvoiceOpenFlag && F.invoiceFlag) {
                            $("#order_item_detail").find(".order_info").append('<p><span class="personal_info_span_3">' + property.downloadEInvoice + '</span><span class="personal_info_span_2"><a class="downLoad_invoice" style="color:#c6000a;text-decoration: underline;">' + property.download + "</a></span></p>")
                        }
                    },
                    complete: function (D, C) {
                        base.yumCloseLoading()
                    },
                    error: function () {
                        base.yumAlert(property.BadRequest)
                    }
                })
            });
            $(".another_order").die("click").live("click", function () {
                B = $($(this).parents(".orderList_body")[0]).data("itemData");
                if (B.osStatus == 5) {
                    base.yumAlert(property.orderCandcelledQuickOrderInfo);
                    return
                }
                if (B.modified) {
                    base.yumAlert(property.orderModifiedQuickOrderInfo);
                    return
                }
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    data: {"orderId": B.orderId, "orderType": KFCIOS.customerCenter.orderList.orderType},
                    async: false,
                    url: requestContextPath + "/quickOrder.action",
                    beforeSend: function (C) {
                    },
                    success: function (D, C) {
                        if (D.code == serviceCode.SUC_CODE) {
                            base.yumConfirm(pageMessage.coupon_use_no_order, function () {
                                base.setAction("customer.action")
                            })
                        }
                    },
                    complete: function (D, C) {
                    },
                    error: function () {
                        base.yumAlert(property.BadRequest)
                    }
                })
            });
            $(".gotopay_order").die("click").live("click", function () {
                B = $($(this).parents(".orderList_body")[0]).data("itemData");
                window.location.href = "gotoPay.action?orderId=" + B.orderId
            });
            $(".downLoad_invoice").die("click").live("click", function () {
                if ($(this).data("dis")) {
                    return
                }
                var C = B.orderId;
                validateForm.countDown($(".downLoad_invoice")[0], 60);
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    data: {"orderId": C},
                    async: false,
                    url: requestContextPath + "/downloadInvoice.action",
                    beforeSend: function (D) {
                    },
                    success: function (E, D) {
                        if (E && !E.downloadInvoiceFlag) {
                            base.yumTrackAlert(property.downloadEInvoiceFail)
                        } else {
                            window.open(E.url)
                        }
                    },
                    complete: function (E, D) {
                    },
                    error: function () {
                        base.yumAlert(property.BadRequest)
                    }
                })
            })
        }, historyClick: function () {
            var A = this;
            $(".to_history_orderList").die("click").live("click", function () {
                if (!KFCIOS.customerCenter.orderList.loadSuc) {
                    return
                }
                KFCIOS.customerCenter.orderList.orderType = 1;
                $("#orderList_now").hide();
                $("#orderList_history").show();
                $("#order_item_detail").hide();
                KFCIOS.customerCenter.orderList.queryOrderList()
            });
            $(".backOrderList").die("click").live("click", function () {
                KFCIOS.customerCenter.orderList.orderType = -1;
                if ($("#orderList_now .orderList_body").length == 0) {
                    $(".noyor-js").show()
                } else {
                    $(".noyor-js").hide()
                }
                $("#orderList_history").hide();
                $("#orderList_now").show();
                $("#order_item_detail").hide()
            });
            $(".orderList_tab").click(function () {
                if (!KFCIOS.customerCenter.orderList.loadSuc) {
                    return
                }
                KFCIOS.customerCenter.orderList.currPage = 0;
                $(".orderList_tab").removeClass("orderList_tab_cur");
                $(this).addClass("orderList_tab_cur");
                if ($(this).attr("id") == "orderList_tab_within") {
                    KFCIOS.customerCenter.orderList.orderType = 1
                } else {
                    KFCIOS.customerCenter.orderList.orderType = 2
                }
                KFCIOS.customerCenter.orderList.queryOrderList()
            })
        }, startOrder: function () {
            $("#startOrder").die("click").live("click", function () {
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    data: {},
                    async: false,
                    url: requestContextPath + "/orderFlag.action",
                    beforeSend: function (A) {
                    },
                    success: function (B, A) {
                        if (B.code == serviceCode.SUC_CODE) {
                            if (B.message == "true") {
                                base.setAction("continueShopping.action")
                            } else {
                                base.setAction("returnCustomer.action")
                            }
                        }
                    },
                    complete: function (B, A) {
                    },
                    error: function () {
                        base.yumAlert(property.BadRequest)
                    }
                })
            })
        }
    }
};