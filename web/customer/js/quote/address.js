var address = {
    init: function () {
        this.initElements()
    }, initElements: function () {
        this.delAddressBtn = $(".delAddressBtn");
        this.initEvent()
    }, initEvent: function () {
        this.delAddressBtn.click(this.deleteBtnAction())
    }, deleteBtnAction: function () {
        var A = $("#code").val();
        return function () {
            var D = $(this);
            var C = D.attr("tip");
            var B = function () {
                D.closest("tr").remove()
            };
            base.yumConfirm(property.deleteAddressWarn, function () {
                $.ajax({
                    url: requestContextPath + "/delAddressMail.action",
                    type: "post",
                    data: {code: A, addressId: C},
                    dataType: "json",
                    success: function (E) {
                        if (E.code == serviceCode.SUC_CODE) {
                            B();
                            base.yumAlert(property.deleteSuccessfully)
                        } else {
                            base.yumAlert(property.deleteFailed)
                        }
                    }
                })
            })
        }
    }
};
$(function () {
    address.init()
});