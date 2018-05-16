/**
 * Created by Shinelon on 2018/5/12.
 */
$(function () {

    /**
     * 发生ajax请求CustomerConfirm.action获取临时用户的详细信息
     */
    $.ajax({
        url: "CustomerConfirm.action",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var d = eval(data);
            alert(d.head);
        }
    });

    $("#nextStep").click(function () {
        location.assign("regCustomer.jsp");
    });

    /**
     * 更新送货时间radio
     */
    $("a[name='sendfoodtimeLink']").click(function () {

        var $obj = $(this);

        //清除被选择的radio的checked标记
        var input_checked = $("input[name='sendfoodtime'][checked='checked']");
        for (var x = 0; x < input_checked.length; x++)
            $(input_checked[x]).removeAttr("checked");

        $obj.prev().attr('checked', 'checked');

        var div_selectTime = $(".selectTime");

        $(".the_other_day_tip").css("display", "none");

        //隐藏之前显示送货时间
        for (var y = 0; y < div_selectTime.length; y++)
            $(div_selectTime[y]).css("display", "none");

        //现在对于送货时间
        $obj.parent().next().css("display", "block");
        $obj.parent().parent().next().css("display", "block");

        /**
         *拉出灰募
         * */
        $("body").append("<div class='ui-widget-overlay' style='width: 1920px; height: 974px; z-index: 1001;'></div>");

        /**
         * 两百毫秒后关闭黑幕
         */
        setTimeout(function () {
            $(".ui-widget-overlay").remove();
        }, 200);
    });

    /**
     * 添加新地址
     */
    $(".editAddressBtn").click(function () {
        $("#addAddress").css("display", "block");
    });

    /**
     * 删除地址
     */
    $(".deleteAddressBtn").click(function () {
    });

});