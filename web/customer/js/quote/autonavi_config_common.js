var autonavi_yum_kfcios = {};
autonavi_yum_kfcios.brands = "";
autonavi_yum_kfcios.cityName = "";
autonavi_yum_kfcios.parentAddr = "";
autonavi_yum_kfcios.callFun = "";
autonavi_yum_kfcios.charencode = "UTF-8";
autonavi_yum_kfcios.yumtime = 1000;
autonavi_yum_kfcios.emaptime = 200;
autonavi_yum_kfcios.interval = autonavi_yum_kfcios.yumtime;
autonavi_yum_kfcios.script = null;
autonavi_yum_kfcios.page = {cityName: null, mainAddress: null, currentPage: 1, offSet: 20, isAppend: false};
var allAddress = new Array();
var storeCode, poddingId, poddingName, dayName, nightName;
var storeCode2, poddingId2, poddingName2, dayName2, nightName2;
var currentObject, currentItem, resultAddress, formatAddress;
var resultX, resultY, resultGaodeX, resultGaodeY, initFlag;
function setBrandKfcios(A) {
    autonavi_yum_kfcios.brands = A
}
function showEMapCommonKfcios(E, H, A, J) {
    autonavi_yum_kfcios.cityName = E;
    autonavi_yum_kfcios.brands = H;
    autonavi_yum_kfcios.parentAddr = A;
    autonavi_yum_kfcios.callFun = J;
    autonavi_yum_kfcios.page.currentPage = 1;
    var G = $("#map_cont");
    $("#emapPopup").dialog({
        resizable: false,
        height: G.height(),
        width: G.width(),
        dialogClass: "emap_bg",
        position: {my: "center", at: "center", of: window, collision: "fit"},
        modal: true
    });
    var C = $(window).height() / 2 - 183;
    var I = $(window).width() / 2 - 370;
    $("#emapPopup").find("#addressresult").html("");
    $("#emapPopup").find("#searchaddr").val($("#" + A).val()).off("keydown").on("keydown", function (M) {
        if (13 == M.keyCode) {
            initFlag = false;
            var L = Number($(this).attr("ind"));
            var K = allAddress[L];
            currentInd = L;
            currentObject = $(this);
            currentItem = K;
            searchEMapAddressKfcios(E, $("#emapPopup").find("#searchaddr").val())
        }
    });
    var D = $("#emapPopup").find("#zoomin");
    D.click(function () {
        try {
            if (mapObj) {
                mapObj.zoomIn()
            }
        } catch (K) {
            alert(K.message)
        }
    });
    var B = $("#emapPopup").find("#zoomout");
    B.click(function () {
        try {
            if (mapObj) {
                mapObj.zoomOut()
            }
        } catch (K) {
            alert(K.message)
        }
    });
    var F = $("#emapPopup").find("#searchbutton");
    F.off("click").on("click", function () {
        initFlag = false;
        var K = Number($(this).attr("ind"));
        var L = allAddress[K];
        currentInd = K;
        currentObject = $(this);
        currentItem = L;
        searchEMapAddressKfcios(E, $("#emapPopup").find("#searchaddr").val())
    });
    allAddress = new Array();
    searchEMapAddressKfcios(E, $("#emapPopup").find("#searchaddr").val())
}
(function scrollPageKfcios(C) {
    var A = C.height(), B = autonavi_yum_kfcios.page, D;
    C.on("scroll", function (F) {
        var E = C.find(">ul");
        if (E.children().length <= 0 || E.children().length >= 60) {
            return
        }
        clearTimeout(D);
        D = setTimeout(function () {
            var G = E.height();
            var H = C.scrollTop();
            if (A + H >= G) {
                if (preChangeElement) {
                    preChangeElement.css("font-weight", "normal")
                }
                B.isAppend = true;
                B.currentPage += 1;
                searchEMapAddressKfcios(B.cityName, B.mainAddress)
            }
        }, 250)
    })
})($("#addressresult"));
function searchEMapAddressKfcios(C, B) {
    var A = autonavi_yum_kfcios.page;
    if (A.cityName != C) {
        A.currentPage = 1
    }
    A.cityName = C;
    A.mainAddress = B;
    searchEMapAddressCommonKfcios(C, B, keywordSearch_CallBackKfcios)
}
function keywordSearch_CallBackKfcios(C) {
    var G = [];
    var I = C;
    var K = I.length;
    var B = "<ul >";
    var D = autonavi_yum_kfcios.page;
    if (K == 0) {
    } else {
        allAddress = allAddress.concat(C)
    }
    for (var A = 0; A < K; A++) {
        var F = I[A].name, J = I[A].city + I[A].district;
        F = I[A].name + '<span class="street">' + J + "</span>";
        number = A + 1;
        if (D.isAppend) {
            number += $("#addressresult").find("li").length
        }
        G.push("<li>", number + "、", '<span class="selectedaddr" ind=' + (A + (allAddress.length - I.length)) + ">" + F + "</span>", '<span class="comfirmn"><font class="font1">确认地址</font></span>', '<font class="font2">*很抱歉,该地址不在外送范围内,请重新填写!</font>', "</li>")
    }
    if (I && I.length > 0) {
        initFlag = true;
        !D.isAppend && saveGaodeXYKfcios(I[0].x, I[0].y);
        showAddressInMapKfcios(I[0])
    }
    var H = $("#emapPopup"), E = H.find("#addressresult");
    if (D.isAppend) {
        E.find("ul").append(G.join(""));
        D.isAppend = false
    } else {
        G.unshift("<ul>");
        G.push("</ul>");
        E.html(G.join(""))
    }
    $("#emapPopup").find("li").find(".font1").hide();
    $("#emapPopup").find("li").find(".font2").hide();
    $("#emapPopup").find(".selectedaddr").off("click").on("click", function () {
        initFlag = false;
        var L = Number($(this).attr("ind"));
        var M = allAddress[L];
        currentInd = L;
        currentObject = $(this);
        currentItem = M;
        isRangeByAddress1Kfcios(M.city, M.name, M.x, M.y, isRangeSuccessFunKfcios, isRangeErrorFunKfcios)
    });
    $("#emapPopup").find(".comfirmn").off("click").on("click", function () {
        $("[address3]").show();
        $("[address4]").hide();
        var L;
        L = currentItem.name;
        resultAddress = currentItem.name;
        formatAddress = currentItem.formatAddress;
        base.yumConfirm("你确定选择[" + L + "]该地址?", function () {
            confirmAddressKfcios(currentItem.city, currentItem.name, currentItem.address, currentItem.adcode, storeCode, poddingId, poddingName, dayName, nightName, storeCode2, poddingId2, poddingName2, dayName2, nightName2, confirmAddressSuccessFunKfcios, confirmAddressErrorFunKfcios)
        }, function () {
        })
    })
}
function searchEMapAddressCommonKfcios(D, C, B) {
    var A = autonavi_yum_kfcios.page;
    placeSearchPoint(D, C, B, A.currentPage, A.offSet)
}
function isRangeSuccessFunKfcios(B) {
    if (B == null || B == "") {
        return
    }
    changeFontKfcios(currentObject);
    if (B.data.status == -1) {
        showComfirmKfcios(currentObject.parent().find(".font2"))
    } else {
        storeCode = B.data.storeCode;
        poddingId = B.data.poddingId;
        poddingName = B.data.poddingName;
        dayName = B.data.dayName;
        nightName = B.data.nightName;
        storeCode2 = B.data.storeCode2;
        poddingId2 = B.data.poddingId2;
        poddingName2 = B.data.poddingName2;
        dayName2 = B.data.dayName2;
        nightName2 = B.data.nightName2;
        adcode = B.data.adcode;
        showComfirmKfcios(currentObject.parent().find(".font1"))
    }
    var A = Number(currentObject.attr("ind"));
    showAddressInMapKfcios(currentItem)
}
function isRangeErrorFunKfcios() {
    base.yumAlert(property.BadRequest)
}
function confirmAddressKfcios(O, G, N, M, A, P, H, L, B, C, I, F, E, J, D, Q) {
    window._tag && window._tag.dcsMultiTrack("wt.event", "emap地址搜索", "wt.msg", "查看更多确认");
    if (O.lastIndexOf("市") == O.length - 1) {
        O = O.replace("市", "")
    }
    var K = {
        sid: 200003,
        x: resultGaodeX,
        y: resultGaodeY,
        brand: autonavi_yum_kfcios.brands,
        cityName: O,
        name: G,
        address: N,
        adcode: M,
        storeCode: A,
        poddingId: P,
        poddingName: H,
        dayName: L,
        nightName: B,
        storeCode2: C,
        poddingId2: I,
        poddingName2: F,
        dayName2: E,
        nightName2: J,
        encode: autonavi_yum_kfcios.charencode
    };
    requestKfcios(K, D, Q)
}
function confirmAddressSuccessFunKfcios() {
    $("#" + autonavi_yum_kfcios.parentAddr).val(resultAddress);
    window.eMapFormatAddress = formatAddress;
    $("#emapPopup").dialog("close");
    if (autonavi_yum_kfcios.callFun) {
        autonavi_yum_kfcios.callFun(resultGaodeX + "," + resultGaodeY, resultX + "," + resultY)
    }
}
function confirmAddressErrorFunKfcios() {
    base.yumAlert(property.BadRequest)
}
var preChangeElement = null, preComfirmAddrElement = null;
function changeFontKfcios(A) {
    if (preChangeElement) {
        preChangeElement.css("font-weight", "normal")
    }
    A.css("font-weight", "bold");
    preChangeElement = A
}
function showComfirmKfcios(A) {
    if (!A) {
        return
    }
    if (preComfirmAddrElement) {
        preComfirmAddrElement.hide()
    }
    A.show();
    preComfirmAddrElement = A
}
function showAddressInMapKfcios(A) {
    showAddressInMapCommonKfcios(A, A.city, A.name)
}
function mapInitKfcios(A) {
    mapInitCommonKfcios("addressMap", A + "/res/images/imgjump.png")
}
function saveGaodeXYKfcios(A, B) {
    resultX = A;
    resultY = B;
    resultGaodeX = bd2gcjString(resultX + "," + resultY).split(",")[0];
    resultGaodeY = bd2gcjString(resultX + "," + resultY).split(",")[1]
}
function isRangeByAddress1Kfcios(F, B, G, C, D, E) {
    if (G != undefined && C != undefined && G != "" && C != "") {
        saveGaodeXYKfcios(G, C);
        isRangeKfcios(resultGaodeX, resultGaodeY, D, E)
    } else {
        var A = function (H, I) {
            saveGaodeXYKfcios(H, I);
            isRangeKfcios(resultGaodeX, resultGaodeY, D, E)
        };
        regeocode(F, B, A, E)
    }
}
function isRangeKfcios(A, B, D, C) {
    var E = {sid: 200002, x: A, y: B, brand: autonavi_yum_kfcios.brands, encode: autonavi_yum_kfcios.charencode};
    requestKfcios(E, D, C)
}
function showAddressInMapCommonKfcios(C, B, A) {
    if (resultX && resultY) {
        drawMarkerKfcios(resultX, resultY)
    } else {
        if (C.x) {
            drawMarkerKfcios(C.x, C.y)
        } else {
            regeocode(B, A, drawMarkerKfcios, null, initFlag)
        }
    }
}
var mapObj;
function zoomIn() {
    if (mapObj) {
        mapObj.zoomIn()
    }
}
function zoomOut() {
    if (mapObj) {
        mapObj.zoomOut()
    }
}
var icon;
function mapInitCommonKfcios(D, B, A) {
    if (A == undefined) {
        A = false
    }
    if (!mapObj) {
        mapObj = createMap(D, 16, true, true, false, false, A);
        setMapMaxZoom(18);
        setMapMinZoom(10);
        setMapCenter(createPoint(121.44996739, 31.18478626));
        var C = document.getElementById("zoomin");
        var E = document.getElementById("zoomout");
        if (C != undefined) {
            C.onclick = zoomIn;
            E.onclick = zoomOut
        } else {
            C = null;
            E = null
        }
        icon = B
    }
}
var curMarker;
function drawMarkerKfcios(A, B) {
    if (mapObj) {
        if (curMarker == undefined) {
            curMarker = createMarker(A + "," + B);
            setMarkerIcon(curMarker, icon);
            setMarkerOffset(curMarker, createPixel(-12, -25));
            disableDraggingCommon(curMarker);
            addOverlayCommon(curMarker)
        }
        var D = createPoint(A, B);
        setMarkerPosition(curMarker, D);
        setMapCenter(D);
        if ($.browser != undefined && $.browser.msie && $.browser.version.indexOf("8.0") > -1) {
            var C = $("#emapPopup").offset();
            panBy(-(C.left + 100), -(C.top + 50))
        }
    }
}
function getBrandNameKfcios(A) {
    if (A == "1") {
        return "KFC"
    } else {
        if (A == "2") {
            return "PHHS"
        } else {
            if (A == "3") {
                return "ED"
            }
        }
    }
}
function requestKfcios(D, B, A) {
    var C = CloudEMap_Url;
    $.ajax({
        dataType: "jsonp", type: "GET", data: D, url: C, success: function (F, E) {
            if (B) {
                B(F)
            }
        }, error: function () {
            if (A) {
                A()
            }
        }
    })
};