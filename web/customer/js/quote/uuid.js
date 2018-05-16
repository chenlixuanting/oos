/*
 Math.uuid.js (v1.4)

 http://www.broofa.com

 mailto:robert@broofa.com

 Copyright (c) 2010 Robert Kieffer
 Dual licensed under the MIT and GPL licenses.
 */
(function () {
    var A = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    Math.uuid = function (B, D) {
        var G = A, C = [], F;
        D = D || G.length;
        if (B) {
            for (F = 0; F < B; F++) {
                C[F] = G[0 | Math.random() * D]
            }
        } else {
            var E;
            C[8] = C[13] = C[18] = C[23] = "-";
            C[14] = "4";
            for (F = 0; F < 36; F++) {
                if (!C[F]) {
                    E = 0 | Math.random() * 16;
                    C[F] = G[(F == 19) ? (E & 3) | 8 : E]
                }
            }
        }
        return C.join("")
    };
    Math.uuidFast = function () {
        var F = A, C = new Array(36), E = 0, B;
        for (var D = 0; D < 36; D++) {
            if (D == 8 || D == 13 || D == 18 || D == 23) {
                C[D] = "-"
            } else {
                if (D == 14) {
                    C[D] = "4"
                } else {
                    if (E <= 2) {
                        E = 33554432 + (Math.random() * 16777216) | 0
                    }
                    B = E & 15;
                    E = E >> 4;
                    C[D] = F[(D == 19) ? (B & 3) | 8 : B]
                }
            }
        }
        return C.join("")
    };
    Math.uuidCompact = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (D) {
            var B = Math.random() * 16 | 0, C = D == "x" ? B : (B & 3 | 8);
            return C.toString(16)
        })
    }
})();