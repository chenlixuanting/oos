var cloudEMapConfig = "https://emap.4008823823.com.cn/CloudEMap/config.js";
function LoadJS(E, C) {
    var B = document.getElementById(E);
    var A = document.getElementsByTagName("HEAD").item(0);
    var D = document.createElement("script");
    if (B) {
        A.removeChild(B)
    }
    D.id = E;
    D.type = "text/javascript";
    D.src = C;
    A.appendChild(D)
}
document.ready = function (A) {
    LoadJS("cloudEmap", cloudEMapConfig);
    $.getScript(cloudEMapConfig, function () {
        window.getMapType && window.getMapType()
    })
};