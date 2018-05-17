/**
 * Created by Shinelon on 2018/5/12.
 */
$(function () {

    /**
     * 送达时间初始化
     */
    initDeliverTime();


    /**
     * 给时间列表项绑定事件
     */
    $("#putOffOneHour").click(function () {
        $(this).css("display", "block");
    });

    // $(".tag_options").find("li").onfocus(function () {
    //     $(this).addClass("hover");
    // });
    //
    // $(".tag_options").find("li").blur(function () {
    //     $(this).removeClass("hover");
    // });

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
            initDeliverAddress(d);
        }
    });

    /**
     * 选择送达时间
     */
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

//初始化页面地址
function initDeliverAddress(d) {
    $("div[class='cityName']").append(
        "<a name=selAddressLink style='text-decoration: none;display: block;width: 493px;' href='javascript:;'>"
        + d.cityName + "&nbsp;&nbsp;&nbsp;&nbsp;" + d.roadName + "(" + d.addressDetial + ")<br>" + d.username + d.sex + "&nbsp;&nbsp;" + d.mobile +
        "</a>"
    );
}

//初始化送达时间
function initDeliverTime() {

    //当天较晚时间送达
    //推迟一个小时
    var putOffOneHour = putOffHours(1);
    var putOffZoneDay = putOffDay(0);

    //添加到对应列表中
    $("#currentDate").html(putOffZoneDay);
    $("#putOffOneHour").html("<li>" + putOffOneHour + "</li>");

    //推迟三天后送达
    var putOffOneDay = putOffDay(1);
    var putOffTwoDay = putOffDay(2);
    var putOffThreeDay = putOffDay(3);

    //添加到对应列表中
    $(".tag_day_options").append("<li>" + putOffOneDay + "</li>");
    $(".tag_day_options").append("<li>" + putOffTwoDay + "</li>");
    $(".tag_day_options").append("<li>" + putOffThreeDay + "</li>");

}

//推迟day填后的日期
function putOffDay(day) {

    //今日稍晚时候送达
    //获取今天的日期
    var currentDate = new Date();

    //推迟day天
    currentDate.setDate(currentDate.getDate() + day);

    //获得年份
    var year = currentDate.getFullYear();
    //获得月份从0开始
    var month = currentDate.getMonth();
    //获得日期
    var day = currentDate.getDate();
    //获得星期
    var week = currentDate.getDay();

    var currentDateStr = year + "年" + (month + 1) + "月" + day + "日" + " " + chooseWeek(week);

    return currentDateStr;

}

//推迟一个小时
function putOffHours(hours) {
    var currentDate = new Date();
    return currentDate.getHours() + hours;
}

//选择星期
function chooseWeek(obj) {
    switch (obj) {
        case 1:
            return "周一";
        case 2:
            return "周二";
        case 3:
            return "周三";
        case 4:
            return "周四";
        case 5:
            return "周五";
        case 6:
            return "周六";
        case 0:
            return "周日";
    }
}