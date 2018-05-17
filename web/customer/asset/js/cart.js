/**
 * Created by Shinelon on 2018/5/17.
 */
$(function () {

    /**
     * 获取购物车的信息
     */
    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {
        }
    });

});