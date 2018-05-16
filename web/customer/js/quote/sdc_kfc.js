function _wt() {
    this.u = "http" + (window.location.protocol.indexOf("https:") == 0 ? "s" : "") + "://dt.hwwt8.com/dcs5w0txb10000wocrvqy1nqm_6n1p/dcs.gif?WT.branch=SVRA";
    this.p = "";
    this.t = "";
    this.WT = {};
    this.z = true
}
_wt.prototype.V = function () {
    this.p += "&dcssip=" + window.location.hostname + "&WT.host=" + window.location.hostname + "&dcsuri=" + encodeURIComponent(window.location.pathname) + "&WT.es=" + encodeURIComponent(window.location.href);
    if (window.location.search) {
        this.p += "&dcsqry=" + encodeURIComponent(window.location.search)
    }
    if ((window.document.referrer != "") && (window.document.referrer != "-")) {
        this.p += "&dcsref=" + encodeURIComponent(window.document.referrer) + "&WT.referrer=" + encodeURIComponent(window.document.referrer)
    }
    if (typeof(screen) == "object") {
        this.p += "&WT.sr=" + screen.width + "x" + screen.height
    }
};
_wt.prototype.M = function () {
    var A;
    if (document.all) {
        A = document.all.tags("meta")
    } else {
        if (document.documentElement) {
            A = document.getElementsByTagName("meta")
        }
    }
    if (typeof(A) != "undefined") {
        var D = A.length;
        for (var C = 0; C < D; C++) {
            var B = A.item(C).name;
            if (B.length > 0) {
                if (B.toUpperCase().indexOf("WT.") == 0) {
                    this.p += "&" + B + "=" + A.item(C).content
                }
            }
        }
    }
    for (N in this.WT) {
        this.p += "&WT." + N + "=" + this.WT[N]
    }
};
_wt.prototype.G = function () {
    var E = this.p + "&dcsdat=" + (new Date()).getTime() + this.t;
    var D = {};
    var C = E.split("&");
    E = "";
    for (var B = 0; B < C.length; B++) {
        if (C[B].length > 0) {
            D[C[B].split("=")[0]] = C[B].split("=")[1]
        }
    }
    for (N in D) {
        E += "&" + N + "=" + D[N]
    }
    var A = new Image();
    A.style.display = "none";
    A.onload = function () {
        try {
            document.body.appendChild(A)
        } catch (F) {
        }
    };
    A.src = this.u + E
};
_wt.prototype.S = function () {
    if (this.z) {
        this.z = false;
        this.V();
        this.M();
        this.F();
        this.G()
    }
};
_wt.prototype.dcsMultiTrack = function () {
    var A = this.dcsMultiTrack.arguments ? this.dcsMultiTrack.arguments : arguments;
    if (A.length % 2 == 0) {
        for (var B = 0; B < A.length; B += 2) {
            this.t += "&" + A[B] + "=" + encodeURIComponent(A[B + 1])
        }
    }
    this.G();
    this.t = ""
};
_wt.prototype.E = function (B, A) {
    var C = B.target || B.srcElement;
    while (C.tagName && (C.tagName.toLowerCase() != A.toLowerCase())) {
        C = C.parentElement || C.parentNode;
        C = C || {}
    }
    return C
};
_wt.prototype.P = function (B) {
    var A = B.clientX;
    var E = B.clientY;
    $h = (document.documentElement != undefined && document.documentElement.clientHeight != 0) ? document.documentElement : document.body;
    var D = window.pageXOffset == undefined ? $h.scrollLeft : window.pageXOffset;
    var C = window.pageYOffset == undefined ? $h.scrollTop : window.pageYOffset;
    return (A + D) + "x" + (E + C)
};
_wt.prototype.N = function (C) {
    var B = "";
    var H = "";
    var D = ["div", "table"];
    var E = D.length;
    var A, F, G;
    for (A = 0; A < E; A++) {
        G = D[A];
        if (G.length) {
            F = this.E(C, G);
            B = (F.getAttribute && F.getAttribute("id")) ? F.getAttribute("id") : "";
            H = F.className || "";
            if (B.length || H.length) {
                break
            }
        }
    }
    return B.length ? B : H
};
Function.prototype.wtbind = function (C) {
    var B = this;
    var A = function () {
        return B.apply(C, arguments)
    };
    return A
};
_wt.prototype.K = function (C) {
    C = C || (window.event || "");
    if (C && ((typeof(C.which) != "number") || (C.which == 1))) {
        var B = "";
        var A = "";
        var D = this.E(C, "A");
        if (D.href) {
            B = D.href;
            A = "Link"
        } else {
            D = this.E(C, "INPUT");
            A = D.type || "";
            if (A && ((A == "submit") || (A == "button") || (A == "reset") || (A == "text") || (A == "radio") || (A == "checkbox"))) {
                B = D.name || D.id || "null"
            }
        }
        if (typeof(this.trackObj) == "undefined" || this.trackObj == "" || this.trackObj.indexOf(";" + B + ";") > -1) {
            if (A && ((A == "radio") || (A == "checkbox"))) {
                B = (D.name || D.id || "null") + "." + (D.value || "null")
            }
            if (D.form) {
                B = (D.form.id || D.form.name || D.form.className || "frm") + "." + B
            }
            if (B && A) {
                this.dcsMultiTrack("WT.type", A, "WT.event", B, "WT.nv", this.N(C), "WT.pos", this.P(C))
            }
        }
    }
};
_wt.prototype.trackEvent = function () {
    var A = (navigator.appVersion.indexOf("MSIE") != -1) ? "click" : "mousedown";
    if (document.body.addEventListener) {
        document.body.addEventListener(A, this.K.wtbind(this), true)
    } else {
        if (document.body.attachEvent) {
            document.body.attachEvent("on" + A, this.K.wtbind(this))
        }
    }
};
_wt.prototype.F = function () {
    var E = "2";
    var D = new Date();
    var C = new Date(D.getTime() + 315360000000);
    var B = new Date(D.getTime());
    if (document.cookie.indexOf("WT_FPC=") != -1) {
        E = document.cookie.substring(document.cookie.indexOf("WT_FPC=") + 10);
        if (E.indexOf(";") != -1) {
            E = E.substring(0, E.indexOf(";"))
        }
        if (D.getTime() < ((new Date(parseInt(E.substring(E.indexOf(":lv=") + 4, E.indexOf(":ss="))))).getTime() + 1800000)) {
            B.setTime((new Date(parseInt(E.substring(E.indexOf(":ss=") + 4)))).getTime())
        }
        E = E.substring(0, E.indexOf(":lv="))
    }
    if (E.length < 10) {
        var A = D.getTime().toString();
        for (var F = 2; F <= (32 - A.length); F++) {
            E += Math.floor(Math.random() * 16).toString(16)
        }
        E += A
    }
    E = encodeURIComponent(E);
    this.p += "&WT.co_f=" + E;
    document.cookie = "WT_FPC=id=" + E + ":lv=" + D.getTime().toString() + ":ss=" + B.getTime().toString() + "; expires=" + C.toGMTString() + "; path=/; domain=.4008823823.com.cn"
};
var _tag = new _wt();
_tag.V();
_tag.M();
_tag.F();
_tag.S();