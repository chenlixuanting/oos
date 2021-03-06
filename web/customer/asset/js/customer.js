/**
 * Created by Shinelon on 2018/5/20.
 */
$(function () {

    var inputDate = $("#input_date");
    var inputHour = $("#input_hour");
    var inputMinute = $("#input_minute");

    /**
     * 禁用浏览器回退功能
     */
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, 'customer.jsp');
            window.history.forward(1);
        });
    }
    window.history.pushState('forward', null, 'customer.jsp'); //在IE中必须得有这两行
    window.history.forward(1);

    //初始化时间为30分钟后的收货时间
    inputDate.val(getPutOffDayDate(putOffMinutes(30)));
    inputHour.val(getPutOffHoursHour(putOffMinutes(30)));
    inputMinute.val(getPutOffMinutesMinute(putOffMinutes(30)));

    /**
     * 送达时间初始化
     */
    initDeliverTime();

    /**
     * 收货地址初始化
     */
    initDeliverAddress();

    /**
     * 下一步按钮
     */
    $("#nextStep").click(function () {

        var flag = ModiyDeliverAddress() && ModifyDeliverTime();

        if (flag) {
            //跳转到购物页面
            location.assign("continueShopping.jsp");
        } else {
            // location.assign("customerCenter.jsp");
        }

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

        $obj.prev().attr("checked", "checked");

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

        /**
         * 修改相应的输入框保存餐品送达时间
         */
        var timeType = $(this).attr("timeType");

        switch (timeType) {

            //30分钟后送达
            case "1":
                inputDate.val(getPutOffDayDate(putOffMinutes(30)));
                inputHour.val(getPutOffHoursHour(putOffMinutes(30)));
                inputMinute.val(getPutOffMinutesMinute(putOffMinutes(30)));
                break;
            //当日稍晚送达
            case "2":
                inputDate.val($("#currentDate").html());
                inputHour.val($("#putOffOneHour").val());
                inputMinute.val($("#putOffOneHourMinute").val());
                break;
            //隔天送达
            case "3":
                inputDate.val($("#putOffManyDayDate").val());
                inputHour.val($("#putOffManyDayHour").val());
                inputMinute.val($("#putOffManyDayMinute").val());
                break;
        }

    });

    $("select").change(function () {
        /**
         * 修改相应的输入框保存餐品送达时间
         */
        var timeType = $(this).attr("timeType");

        switch (timeType) {

            //30分钟后送达
            case "1":
                inputDate.val(getPutOffDayDate(putOffMinutes(30)));
                inputHour.val(getPutOffHoursHour(putOffMinutes(30)));
                inputMinute.val(getPutOffMinutesMinute(putOffMinutes(30)));
                break;
            //当日稍晚送达
            case "2":
                inputDate.val($("#currentDate").html());
                inputHour.val($("#putOffOneHour").val());
                inputMinute.val($("#putOffOneHourMinute").val());
                break;
            //隔天送达
            case "3":
                inputDate.val($("#putOffManyDayDate").val());
                inputHour.val($("#putOffManyDayHour").val());
                inputMinute.val($("#putOffManyDayMinute").val());
                break;
        }
    });

});

//初始化页面地址
function initDeliverAddress() {

    $.ajax({
        url: "getUserDeliverAddress.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                $(".info_table_1").html("");

                for (var x = 0; x < body.length; x++) {
                    $(".info_table_1").append(
                        "<li id='" + body[x].daId + "' class=''>" +
                        "<div style='width: 20px; float: left; margin-top: 12px;'>" +
                        "<input name='selAddressId' type='radio' value='" + body[x].daId + "' disabled='disabled'>" +
                        "</div>" +
                        "<div style='float:left' class='cityName'>" +
                        "<a name=selAddressLink onclick='selectDeliverAddress(this);' style='text-decoration: none;display: block;width: 493px;' href='javascript:;'>"
                        + body[x].receiverAddress + " " + body[x].receiverName + " " + body[x].receiverSex + " " + body[x].receiverMobile +
                        "</a>" +
                        "</div>" +
                        "</li>"
                    );
                }

            } else {

                //提示错误信息
                alert(returnData.body);

            }

        }
    });

}

function selectDeliverAddress(obj) {

    //取消之前选中的地址
    $("input[name='selAddressId'][checked='checked']").removeAttr("checked");

    //点击地址的文字则选择相应的地址作为送货地址
    $(obj).parent().prev().find('input').eq(0).attr("checked", "checked");
}


//更改收货时间
function ModifyDeliverTime() {

    var result = false;

    var inputDate = $("#input_date");
    var inputHour = $("#input_hour");
    var inputMinute = $("#input_minute");

    var timeStr = inputDate.val() + " " + inputHour.val() + "时" + inputMinute.val() + "分";

    // 保存用户所选择的发货的时间
    $.ajax({
        url: "CustomerSelectDeliverTime.action",
        type: "POST",
        dataType: "json",
        async: false,
        data: {
            deliverTime: timeStr
        },
        success: function (data) {
            var d = eval(data);
            result = d.head == "true" ? true : false;
        }
    });

    return result;

}

//更改收货地址
function ModiyDeliverAddress() {

    var result = false;

    var isCheckAddress = $("input[name='selAddressId'][checked='checked']").length;

    if (isCheckAddress == 0) {
        alert("您还没有选择送餐地址!");
        return result;
    }

    var beChecked = $("input[name='selAddressId'][checked='checked']").val();

    $.ajax({
        url: "SelectDeliverAddress.action",
        type: "POST",
        dataType: "json",
        async: false,
        data: {
            requestData: beChecked
        },
        success: function (data) {
            var d = eval(data);
            result = d.head;
        }

    });

    return result;
}

//初始化送达时间
function initDeliverTime() {

    //当天较晚时间送达
    //推迟一个小时
    var putOffOneHour = getPutOffHoursHour(putOffHours(1));
    var putOffZoneDay = getPutOffDayDate(putOffHours(1));

    //添加到对应列表中
    $("#currentDate").html(putOffZoneDay);
    $("#putOffOneHour").html("<option>" + putOffOneHour + "</option>");

    //推迟三天后送达
    var putOffOneDay = getPutOffDayDate(putOffDay(1));
    var putOffTwoDay = getPutOffDayDate(putOffDay(2));
    var putOffThreeDay = getPutOffDayDate(putOffDay(3));

    //添加到对应列表中
    $(".tag_day_select").append("<option>" + putOffOneDay + "</option>");
    $(".tag_day_select").append("<option>" + putOffTwoDay + "</option>");
    $(".tag_day_select").append("<option>" + putOffThreeDay + "</option>");

}

//推迟day天
function putOffDay(day) {

    //今日稍晚时候送达
    //获取今天的日期
    var currentDate = new Date();

    //推迟day天
    currentDate.setDate(currentDate.getDate() + day);

    return currentDate;

}

//推迟hours个小时
function putOffHours(hours) {

    var currentDate = new Date();

    currentDate.setHours(currentDate.getHours() + hours);

    return currentDate;
}

//推迟minutes分钟
function putOffMinutes(minutes) {

    var currentDate = new Date();

    currentDate.setMinutes(currentDate.getMinutes() + minutes);

    return currentDate;
}

function getPutOffMinutesMinute(date) {

    var minuteStr = date.getMinutes();

    return minuteStr;

}

function getPutOffHoursHour(date) {

    var hourStr = date.getHours();

    return hourStr;

}

function getPutOffDayDate(date) {

    //获得年份
    var year = date.getFullYear();
    //获得月份从0开始
    var month = date.getMonth();
    //获得日期
    var day = date.getDate();
    //获得星期
    var week = date.getDay();

    var currentDateStr = year + "年" + (month + 1) + "月" + day + "日" + " " + chooseWeek(week);

    return currentDateStr;

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