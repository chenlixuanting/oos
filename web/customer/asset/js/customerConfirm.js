/**
 * Created by Shinelon on 2018/5/12.
 */
$(function () {

    function addAddress(d) {
        $("div[class='cityName']").append(
            "<a name=selAddressLink style='text-decoration: none;display: block;width: 493px;' href='javascript:;'>"
            + d.cityName + "&nbsp;&nbsp;&nbsp;&nbsp;" + d.roadName + "(" + d.addressDetial + ")<br>" + d.username + d.sex + "&nbsp;&nbsp;" + d.mobile +
            "</a>"
        );
    };

    /**
     * 发生ajax请求CustomerConfirm.action获取临时用户的详细信息
     */
    $.ajax({
        url: "CustomerConfirm.action",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var d = eval(data);
            //初始化页面地址
            addAddress(d);
        }
    });

    $("#nextStep").click(function () {
        var deliverTime = new Date();
        var timeStr = deliverTime.Format("yyyy-MM-dd");

        // 保存用户所选择的发货的时间
        $.ajax({
            url: "SelectDeliverTime.action",
            type: "POST",
            dataType: "json",
            data: {
                deliverTime: timeStr
            },
            success: function () {
                //跳转到购物页面
                location.assign("regCustomer.jsp");
            }
        });
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