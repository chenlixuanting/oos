jQuery.fn.pagination = function (B, A) {
    A = jQuery.extend({
        items_per_page: 10,
        num_display_entries: 10,
        current_page: 0,
        num_edge_entries: 0,
        link_to: "#",
        prev_text: "Prev",
        next_text: "Next",
        ellipse_text: "...",
        prev_show_always: true,
        next_show_always: true,
        callback: function () {
            return false
        }
    }, A || {});
    return this.each(function () {
        function C() {
            return Math.ceil(B / A.items_per_page)
        }

        function D() {
            var L = Math.ceil(A.num_display_entries / 2);
            var M = C();
            var J = M - A.num_display_entries;
            var I = G > L ? Math.max(Math.min(G - L, J), 0) : 0;
            var K = G > L ? Math.min(G + L, M) : Math.min(A.num_display_entries, M);
            return [I, K]
        }

        function F(K, J) {
            G = K;
            H();
            var I = A.callback(K, E);
            if (!I) {
                if (J.stopPropagation) {
                    J.stopPropagation()
                } else {
                    J.cancelBubble = true
                }
            }
            return I
        }

        function H() {
            E.empty();
            var L = D();
            var N = C();
            var I = function (P) {
                return function (Q) {
                    return F(P, Q)
                }
            };
            var J = function (Q, P) {
                Q = Q < 0 ? 0 : (Q < N ? Q : N - 1);
                P = jQuery.extend({text: Q + 1, classes: "current"}, P || {});
                if (Q == G) {
                    var R = $("<span class='current'>" + (P.text) + "</span>")
                } else {
                    var R = $("<a>" + (P.text) + "</a>").bind("click", I(Q)).attr("href", A.link_to.replace(/__id__/, Q))
                }
                if (P.classes) {
                    R.removeAttr("class");
                    R.addClass(P.classes)
                }
                E.append(R)
            };
            if (A.prev_text && (G > 0 || A.prev_show_always)) {
                J(G - 1, {text: A.prev_text, classes: "disabled"})
            }
            if (L[0] > 0 && A.num_edge_entries > 0) {
                var O = Math.min(A.num_edge_entries, L[0]);
                for (var M = 0; M < O; M++) {
                    J(M)
                }
                if (A.num_edge_entries < L[0] && A.ellipse_text) {
                    jQuery("<span>" + A.ellipse_text + "</span>").appendTo(E)
                }
            }
            for (var M = L[0]; M < L[1]; M++) {
                J(M)
            }
            if (L[1] < N && A.num_edge_entries > 0) {
                if (N - A.num_edge_entries > L[1] && A.ellipse_text) {
                    jQuery("<span>" + A.ellipse_text + "</span>").appendTo(E)
                }
                var K = Math.max(N - A.num_edge_entries, L[1]);
                for (var M = K; M < N; M++) {
                    J(M)
                }
            }
            if (A.next_text && (G < N - 1 || A.next_show_always)) {
                J(G + 1, {text: A.next_text, classes: "disabled"})
            }
        }

        var G = A.current_page;
        B = (!B || B < 0) ? 1 : B;
        A.items_per_page = (!A.items_per_page || A.items_per_page < 0) ? 1 : A.items_per_page;
        var E = jQuery(this);
        this.selectPage = function (I) {
            F(I)
        };
        this.prevPage = function () {
            if (G > 0) {
                F(G - 1);
                return true
            } else {
                return false
            }
        };
        this.nextPage = function () {
            if (G < C() - 1) {
                F(G + 1);
                return true
            } else {
                return false
            }
        };
        H()
    })
};