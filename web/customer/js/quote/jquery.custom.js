(function (A) {
    A.fn.extend({
        tip: function (B) {
            A(this).val(B);
            A(this).css("color", "#ADADAD");
            return A(this).focus(function () {
                A(this).css("color", "#737373");
                if (A.trim(A(this).val()) == A.trim(B)) {
                    A(this).val("")
                }
            }).blur(function () {
                if (A.trim(A(this).val()) == "") {
                    A(this).val(B);
                    A(this).css("color", "#ADADAD")
                }
            })
        }
    })
})(jQuery);