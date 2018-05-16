(function (B, A, C) {
    if (typeof define === "function" && define.amd) {
        define(C)
    } else {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = C()
        } else {
            if (A.exports) {
                A.exports = C()
            } else {
                A[B] = C()
            }
        }
    }
})("GuanAnFingerBaseInfo", this, function () {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (E, G) {
            var B;
            if (this == null) {
                throw new TypeError("'this' is null or undefined")
            }
            var D = Object(this);
            var F = D.length >>> 0;
            if (F === 0) {
                return -1
            }
            var C = +G || 0;
            if (Math.abs(C) === Infinity) {
                C = 0
            }
            if (C >= F) {
                return -1
            }
            B = Math.max(C >= 0 ? C : F - Math.abs(C), 0);
            while (B < F) {
                if (B in D && D[B] === E) {
                    return B
                }
                B++
            }
            return -1
        }
    }
    function A(C) {
        if (!(this instanceof A)) {
            return new A(C)
        }
        var B = {
            swfContainerId: "GuanAnFingerBaseInfoJs",
            swfPath: "flash/compiled/FontList.swf",
            detectScreenOrientation: true,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(C, B);
        if (typeof Array.prototype.forEach != "function") {
            Array.prototype.forEach = function (F, D) {
                for (var G = 0, E = this.length; G < E; G++) {
                    if (typeof F === "function" && Object.prototype.hasOwnProperty.call(this, G)) {
                        F.call(D, this[G], G, this)
                    }
                }
            }
        }
        this.nativeForEach = Array.prototype.forEach;
        if (typeof Array.prototype.map != "function") {
            Array.prototype.map = function (F, D) {
                var G = [];
                if (typeof F === "function") {
                    for (var H = 0, E = this.length; H < E; H++) {
                        G.push(F.call(D, this[H], H, this))
                    }
                }
                return G
            }
        }
        this.nativeMap = Array.prototype.map
    }

    A.prototype = {
        constructor: A, extend: function (B, C) {
            if (B == null) {
                return C
            }
            for (var D in B) {
                if (B[D] != null && C[D] !== B[D]) {
                    C[D] = B[D]
                }
            }
            return C
        }, get: function (B) {
            var D = [];
            D = this.userAgentKey(D);
            D = this.languageKey(D);
            D = this.colorDepthKey(D);
            D = this.pixelRatioKey(D);
            D = this.screenResolutionKey(D);
            D = this.availableScreenResolutionKey(D);
            D = this.timezoneOffsetKey(D);
            D = this.sessionStorageKey(D);
            D = this.localStorageKey(D);
            D = this.indexedDbKey(D);
            D = this.addBehaviorKey(D);
            D = this.openDatabaseKey(D);
            D = this.cpuClassKey(D);
            D = this.platformKey(D);
            D = this.doNotTrackKey(D);
            D = this.pluginsKey(D);
            D = this.canvasKey(D);
            D = this.webglKey(D);
            D = this.adBlockKey(D);
            D = this.hasLiedLanguagesKey(D);
            D = this.hasLiedResolutionKey(D);
            D = this.hasLiedOsKey(D);
            D = this.hasLiedBrowserKey(D);
            D = this.touchSupportKey(D);
            D = this.cookieidKey(D);
            window.console && window.console.log && console.log(D);
            var C = this;
            this.fontsKey(D, function (E) {
                var G = [];
                C.each(E, function (H) {
                    var I = H.value;
                    if (typeof H.value.join !== "undefined") {
                        I = H.value.join(";")
                    }
                    G.push(I)
                });
                var F = C.x64hash128(G.join("~~~"), 31);
                return B(F, E)
            })
        }, getUserAgent: function () {
            return navigator.userAgent
        }, getLanguageKey: function (B) {
            if (!this.options.excludeLanguage) {
                return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ""
            }
            return B
        }, getColorDepthKey: function () {
            if (!this.options.excludeColorDepth) {
                return screen.colorDepth || -1
            }
            return keys
        }, getScreenWidth: function () {
            if (!this.options.excludeScreenResolution) {
                return (window.screen.width)
            }
        }, getScreenHeight: function () {
            if (!this.options.excludeScreenResolution) {
                return (window.screen.height)
            }
        }, getTimezoneOffsetKey: function () {
            if (!this.options.excludeTimezoneOffset) {
                return new Date().getTimezoneOffset()
            }
        }, hasSessionStorage: function () {
            if (window.localStorage) {
                return "true"
            } else {
                return "false"
            }
        }, hasLocalStorage: function () {
            if (window.localStorage) {
                return "true"
            } else {
                return "false"
            }
        }, hasIndexedDB: function () {
            return !!window.indexedDB
        }, getAddBehaviorKey: function () {
            if (document.body && !this.options.excludeAddBehavior && document.body.addBehavior) {
                return "true"
            } else {
                return "false"
            }
        }, getOpenDatabaseKey: function () {
            if (!this.options.excludeOpenDatabase && window.openDatabase) {
                return "true"
            } else {
                return "false"
            }
        }, getNavigatorCpuClass: function () {
            if (navigator.cpuClass) {
                return navigator.cpuClass
            } else {
                return ""
            }
        }, getNavigatorPlatform: function () {
            if (navigator.platform) {
                return navigator.platform
            } else {
                return "unknown"
            }
        }, getDoNotTrack: function () {
            if (navigator.doNotTrack) {
                return "true"
            } else {
                return "false"
            }
        }, fontsKey: function (C, B) {
            if (this.options.excludeJsFonts) {
                return this.flashFontsKey(C, B)
            }
            return this.jsFontsKey(C, B)
        }, flashFontsKey: function (C, B) {
            if (this.options.excludeFlashFonts) {
                if (typeof NODEBUG === "undefined") {
                    C.push({key: "swf_fonts", value: "请检查是否配置了检测Flash字体！"})
                }
                return B(C)
            }
            if (!this.hasSwfObjectLoaded()) {
                if (typeof NODEBUG === "undefined") {
                    C.push({key: "swf_fonts", value: "未检测到Flash字体，跳过！"})
                }
                return B(C)
            }
            if (!this.hasMinFlashInstalled()) {
                if (typeof NODEBUG === "undefined") {
                    C.push({key: "swf_fonts", value: "未安装flash，跳过字体检测！"})
                }
                return B(C)
            }
            if (typeof this.options.swfPath === "undefined") {
                if (typeof NODEBUG === "undefined") {
                    C.push({key: "swf_fonts", value: "Flash文件路径错误！"})
                }
                return B(C)
            }
            this.loadSwfAndDetectFonts(function (D) {
                C.push({key: "swf_fonts", value: D.join(";")});
                return B(C)
            })
        }, getFlashFontsKey: function () {
            var B = [];
            return this.flashFontsKey(B, function () {
                return B[0]["value"]
            })
        }, jsFontsKey: function (O, G) {
            var X = this;
            var Q = ["Arial", "宋体", "微软雅黑"];
            var T = ["宋体", "微软雅黑", "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            var W = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
            if (X.options.extendedJsFonts) {
                T = T.concat(W)
            }
            T = T.concat(X.options.userDefinedFonts);
            var C = "mmmmmmmmmmlli";
            var M = "72px";
            var V = document.createElement("div");
            var D = document.createElement("div");
            var E = document.getElementsByTagName("body")[0];
            var S = {};
            var K = {};
            var Y = function () {
                var a = document.createElement("span");
                a.style.position = "absolute";
                a.style.left = "-9999px";
                a.style.fontSize = M;
                a.style.lineHeight = "normal";
                a.innerHTML = C;
                return a
            };
            var P = function (c, b) {
                var a = Y();
                a.style.fontFamily = "'" + c + "'," + b;
                return a
            };
            var U = function () {
                var d = [];
                for (var c = 0, a = Q.length; c < a; c++) {
                    var b = Y();
                    b.style.fontFamily = Q[c];
                    V.appendChild(b);
                    d.push(b)
                }
                return d
            };
            var Z = function () {
                var e = {};
                for (var a = 0, d = T.length; a < d; a++) {
                    var g = [];
                    for (var f = 0, b = Q.length; f < b; f++) {
                        var c = P(T[a], Q[f]);
                        D.appendChild(c);
                        g.push(c)
                    }
                    e[T[a]] = g
                }
                return e
            };
            var L = function (c) {
                var a = false;
                for (var b = 0; b < Q.length; b++) {
                    a = (c[b].offsetWidth !== S[Q[b]] || c[b].offsetHeight !== K[Q[b]]);
                    if (a) {
                        return a
                    }
                }
                return a
            };
            var J = U();
            E.appendChild(V);
            for (var R = 0, B = Q.length; R < B; R++) {
                S[Q[R]] = J[R].offsetWidth;
                K[Q[R]] = J[R].offsetHeight
            }
            var I = Z();
            E.appendChild(D);
            var N = [];
            for (var F = 0, H = T.length; F < H; F++) {
                if (L(I[T[F]])) {
                    N.push(T[F])
                }
            }
            E.removeChild(D);
            E.removeChild(V);
            O.push({key: "js_fonts", value: N});
            return G(O)
        }, getJsFontsKey: function () {
            var B = [];
            return this.jsFontsKey(B, function () {
                return B[0]["value"]
            })
        }, getTimestamp: function () {
            var B = new Date();
            var G = B.getFullYear();
            var D = B.getMonth() + 1;
            var J = B.getDate();
            var E = B.getDay();
            var F = B.getHours();
            var I = B.getMinutes();
            var H = B.getSeconds();
            var C = "";
            C = G + "-" + D + "-" + J + " " + F + ":" + I + ":" + H;
            return (C)
        }, hasSwfObjectLoaded: function () {
            return typeof window.swfobject !== "undefined"
        }, bin2hex: function () {
            var B, E, D = "", C, F;
            F += "";
            for (B = 0, E = F.length; B < E; B++) {
                C = F.charCodeAt(B).toString(16);
                D += C.length < 2 ? "0" + C : C
            }
            return D
        }, strToHexCharCode: function (C) {
            if (C === "") {
                return ""
            }
            var D = [];
            for (var B = 0; B < C.length; B++) {
                D.push((C.charCodeAt(B)).toString(16))
            }
            return D.join("")
        }, generateUUID: function () {
            var C = this.getUUIDCookie();
            if (C == null) {
                var B = new Date().getTime();
                var D = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (F) {
                    var E = (B + Math.random() * 16) % 16 | 0;
                    B = Math.floor(B / 16);
                    return (F == "x" ? E : (E & 3 | 8)).toString(16)
                });
                this.setUUIDCookie(D);
                return D
            } else {
                return C
            }
        }, setUUIDCookie: function (B) {
            document.cookie = "ga_uuid=" + escape(B)
        }, getUUIDCookie: function () {
            var C, B = new RegExp("(^| )ga_uuid=([^;]*)(;|$)");
            if (C = document.cookie.match(B)) {
                return unescape(C[2])
            } else {
                return null
            }
        }, getBrowserInfo: function (S, I) {
            var T = this.getJsFontsKey().toString();
            var D = this.getFlashFontsKey().toString();
            var J = T.split(",");
            var P = D.split(",");
            var O = "[";
            var V = "[";
            for (var K = 0; K < J.length; K++) {
                O += '"' + J[K] + '",'
            }
            O = O.substring(0, O.length - 1) + "]";
            for (var K = 0; K < P.length; K++) {
                V += '"' + P[K] + '",'
            }
            V = V.substring(0, V.length - 1) + "]";
            var B = this.getUserAgent();
            var H = this.getLanguageKey();
            var U = this.getColorDepthKey();
            var Y = this.getScreenWidth();
            var L = this.getScreenHeight();
            var R = this.getTimezoneOffsetKey();
            var c = this.hasSessionStorage();
            var Q = this.hasLocalStorage();
            var N = this.hasIndexedDB();
            var C = this.getAddBehaviorKey();
            var d = this.getOpenDatabaseKey();
            var e = this.getNavigatorCpuClass();
            var F = this.getNavigatorPlatform();
            var G = this.getDoNotTrack();
            var Z = V;
            var a = O;
            var b = this.getTimestamp();
            var W = I;
            var M = new Array(18);
            M[0] = "sdkVersion1.0.0";
            M[1] = "language" + H;
            M[2] = "colorDepth" + U;
            M[3] = "screenWidth" + Y;
            M[4] = "screenHeight" + L;
            M[5] = "timezone" + R;
            M[6] = "enableSessionStore" + c;
            M[7] = "enableLocateStore" + Q;
            M[8] = "enableDBIndex" + N;
            M[9] = "enableIEAB" + C;
            M[10] = "enableOpenDB" + d;
            M[11] = "cpuInfo" + e;
            M[12] = "platform" + F;
            M[13] = "enableDoNotTrack" + G;
            M[14] = "flashFontList" + Z;
            M[15] = "sysFontList" + a;
            M[16] = "crc" + W;
            M[17] = "useragent" + B;
            M.sort();
            var E = M.join("");
            var X = $.md5("timestamp" + b + "djT&#m23d4i@1#2D" + E);
            return '{"sdkVersion":"1.0.0","language":"' + H + '","colorDepth":' + U + ',"screenWidth":' + Y + ',"screenHeight":' + L + ',"timezone":"' + R + '","enableSessionStore":"' + c + '","enableLocateStore":"' + Q + '","enableDBIndex":"' + N + '","enableIEAB":"' + C + '","enableOpenDB":"' + d + '","cpuInfo":"' + e + '","platform":"' + F + '","enableDoNotTrack":"' + G + '","flashFontList":' + Z + ',"sysFontList":' + a + ',"timestamp":"' + b + '","signature":"' + X + '","cookieid":"' + S + '","crc":"' + W + '","useragent":"' + B + '"}'
        }, picking: function (D, E, B) {
            var C = this.getBrowserInfo(E, B);
            $.ajax({
                type: "get", url: D, dataType: "jsonp", data: {"json": C}, jsonp: "callback", success: function (F) {
                }, error: function () {
                }
            })
        }
    };
    return new A()
});