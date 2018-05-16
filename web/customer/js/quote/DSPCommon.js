window._mvq = window._mvq || [];
var MidevDSP = function () {
    var D = function () {
        var F = window._mvq || [];
        F.push(["$setAccount", "m-243945-0"]);
        F.push(["$logConversion"]);
        var G = document.createElement("script");
        G.type = "text/javascript";
        G.async = true;
        G.src = ("https:" == document.location.protocol ? "https://static-ssl.mediav.com/mvl.js" : "http://static.mediav.com/mvl.js");
        (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(G)
    };
    var E = function (F, G, I) {
        var J = window._mvq || [];
        J.push(["$setAccount", "m-243945-0"]);
        J.push(["$setGeneral", "goodsdetail", "", "", ""]);
        J.push(["$logConversion"]);
        var H;
        if (G.isWOWFlag == 1) {
            H = $.localWOWStr({cn: G.nameCn, en: G.nameEn}, 1)
        } else {
            H = $.localStr({cn: G.nameCn, en: G.nameEn}, 1)
        }
        J.push(["$addGoods", F, "", H, G.systemId, G.price / 100, I + G.imageUrl, "", "", "", "", "", ""]);
        J.push(["$logData"])
    };
    var B = function (F) {
        var G = window._mvq || [];
        G.push(["$setAccount", "m-243945-0"]);
        G.push(["$setGeneral", "cartview", "", "", ""]);
        G.push(["$logConversion"]);
        G.push(["$addItem", "", F, "", ""]);
        G.push(["$logData"])
    };
    var A = function (H, F) {
        var G = window._mvq || [];
        G.push(["$setAccount", "m-243945-0"]);
        G.push(["$setGeneral", "ordercreate", "", "", ""]);
        G.push(["$logConversion"]);
        G.push(["$addOrder", H, F / 100]);
        G.push(["$logData"])
    };
    var C = function (G, F) {
        var H = window._mvq || [];
        H.push(["$setAccount", "m-243945-0"]);
        H.push(["$setGeneral", "registered", "", G, F]);
        H.push(["$logConversion"])
    };
    return {"productDetailDSP": E, "cartDSP": B, "orderDSP": A, "registerDSP": C, "loadDSPJs": D}
}();