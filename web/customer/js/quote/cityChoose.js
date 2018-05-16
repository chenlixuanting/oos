(function () {
    var A = ["00010", "00013", "00012", "00011", "00008", "00018", "00313", "00289", "00445", "00036", "00024", "00042", "00054", "00030", "00031", "00066", "00078", "00019"];
    CityChoose = function (F) {
        var D = new Array();
        F.find("span.city_mode").each(function () {
            D.push($(this))
        });
        var E = new Array();
        F.find("div.city_menu_box").children(".alphabet").each(function () {
            var H = new Array();
            var G = $(this).children("a").text();
            for (letterIndex in G.split("")) {
                H.push(G.split("")[letterIndex])
            }
            E.push(H)
        });
        this.cityChooseDom = F;
        this.cityListDom = D;
        this.chooseIndex = 0;
        this.tipList = E
    };
    CityChoose.prototype.init = function () {
        $(".alphabet a").removeClass("on");
        $(".h3_w a").addClass("on");
        this.cityChooseDom.show();
        B(this)
    };
    CityChoose.prototype.close = function () {
        this.cityChooseDom.hide()
    };
    CityChoose.prototype.tipChange = function (D) {
        this.chooseIndex = D;
        this.cityChooseDom.find("div.city_menu_box").find("a").each(function (F, E) {
            $(this).removeClass("on");
            if (D == F) {
                $(this).addClass("on")
            }
        });
        if (0 == D) {
            B(this)
        }
        if (0 != D) {
            C(this)
        }
    };
    function C(D) {
        var F = D.tipList[D.chooseIndex];
        $(".city_box").empty();
        for (tipIndex in F) {
            $(".city_box").append('<div class="city_til">' + F[tipIndex].toUpperCase() + '</div><div id="' + F[tipIndex].toUpperCase() + '" class="city_modebox"></div>')
        }
        for (cityDomIndex in D.cityListDom) {
            var E = D.cityListDom[cityDomIndex];
            for (tipIndex in F) {
                if ($(E).attr("firstletter").split("")[0].toUpperCase() == F[tipIndex].toUpperCase()) {
                    $("#" + F[tipIndex].toUpperCase()).append(E);
                    $(E).show()
                }
            }
        }
        for (tipIndex in F) {
            if ($("#" + F[tipIndex].toUpperCase()).children().length == 0) {
                $("#" + F[tipIndex].toUpperCase()).prev().remove();
                $("#" + F[tipIndex].toUpperCase()).remove()
            }
        }
    }

    function B(D) {
        $(".city_box").empty();
        $(".city_box").append('<div id="hot" class="city_modebox_hot"></div>');
        for (hotCityListIndex in A) {
            for (cityDomIndex in D.cityListDom) {
                var G = D.cityListDom[cityDomIndex];
                var E = $(G).children().attr("citycode");
                var F = $(G).children().attr("id");
                if (E == A[hotCityListIndex] && F != "districtName") {
                    $("#hot").append(G);
                    $(G).show()
                }
            }
        }
    }
})();