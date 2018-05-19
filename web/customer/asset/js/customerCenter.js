/**
 * Created by Shinelon on 2018/5/18.
 */
$(function () {

    initPage();

    /*姓名修改按钮*/
    $(".xgname-js").click(function () {
        $(".oldname-js").css("display", "none");
        $(".textinput .newname-js").css("display", "block");
        $("#oldname-js").css("display", "none");
        $(".newname-js").css("display", "inline");
    });

    /*姓名修改取消按钮*/
    $(".bcname-js").click(function () {

        $(".oldname-js").css("display", "inline");
        $(".textinput .newname-js").css("display", "none");
        $("#oldname-js").css("display", "inline");
        $(".newname-js").css("display", "none");

        //清空输入框
        $("input[tip='customerNameTip']").val("");
    });

    //姓名修改保存按钮
    $(".savename-js").click(function () {

        var obj = $("input[tip='customerNameTip']");

        //获取新名称
        var newUserName = obj.val();

        $.ajax({
            url: "ModifyUserName.action",
            type: "POST",
            dataType: "json",
            data: {
                requestData: newUserName
            },
            success: function (data) {

                //重新初始化页面数据
                initPage();

                //黑幕特效
                shortWait();

                //使用点击取消后的js效果
                $(".bcname-js").click();

            }
        });

    });

    //保留性别按钮绑定事件
    $(".savesex-js").click(function () {

        var newSex = $("a[value='1']").html();

        $.ajax({
            url: "ModifyUserSex.action",
            type: "POST",
            dataType: "json",
            data: {
                requestData: newSex
            },
            success: function (data) {

                //初始化页面
                initPage();

                //黑幕特效
                shortWait();

                //使用性别取消按钮的js效果
                $(".bcsex-js").click();

            }
        });

    });

    //修改密码
    $(".ui-button-text").click(function () {

            var newObj = $("#newPassword");
            var reNewObj = $("#reNewPassword");

            var requestData = {
                newPassword: newObj.val(),
                reNewPassword: reNewObj.val(),
            };

            if (requestData.newPassword != requestData.reNewPassword) {

                alert(codeMessage.error4);
                $("#newPassword").click();
                $("#reNewPassword").click();

                return;
            }

            $.ajax({
                url: "ModifyUserPassword.action",
                type: "POST",
                dataType: "json",
                data: {
                    requestData: JSON.stringify(requestData)
                },
                success: function (data) {

                    var d = eval(data);

                    var flag = d.head == "true" ? true : false;

                    if (flag) {

                        alert(property.resetPasswordSuccess);

                        //调用关闭按钮特效
                        $(".ui-icon-closethick").click();

                    } else {

                        alert(codeMessage.error4);

                        $("#newPassword").click();
                        $("#reNewPassword").click();

                    }

                }
            });

        }
    );

    /*性别修改按钮*/
    $(".xgsex-js").click(function () {

        // $(".newsex-js").css("display", "block");
        $(".oldsex-js").css("display", "none");
        $(".newsex-js").css("display", "inline");

    });

    //性别取消按钮
    $(".bcsex-js").click(function () {

        $(".newsex-js").css("display", "none");
        $(".oldsex-js").css("display", "inline");

        initPage();

    });

    //修改密码按钮
    $(".xgps-js").click(function () {
        $(".ui-dialog-buttons").css("display", "block");
    });

    $(".ui-icon-closethick").click(function () {
        $(".ui-dialog-buttons").css("display", "none");
        $("#newPassword").val("请输入新密码");
        $("#reNewPassword").val("请再次输入新密码");
    });

    $('.link1').click(function () {

        //初始化个人信息页面
        initPage();

        $('.pages1').show().siblings().hide();
        $('#l1').addClass("on");
        $('#l2').removeClass("on");
        $('#l3').removeClass("on");
    });

    $('.link2').click(function () {

        //初始化订单查询页面
        initOrderSearch();

        $('.pages2').show().siblings().hide();
        $('#l1').removeClass("on");
        $('#l2').addClass("on");
        $('#l3').removeClass("on");
    });

    $('.link3').click(function () {
        $('.pages3').show().siblings().hide();
        $('#l1').removeClass("on");
        $('#l2').removeClass("on");
        $('#l3').addClass("on");
    });

    //进入详情
    $('#details').click(function () {
        $('#order_item_detail').show().siblings().hide();

    });

    //关闭详情
    $('#close_details').click(function () {
        $('#orderList_now').show().siblings().hide();

    });

    //进入历史订单
    $('#tohistory').click(function () {
        $('#orderList_history').show().siblings().hide();

    });

    //再来一单
    $('#another_order').click(function () {
        location.replace("continueShopping.jsp");
    });

    $("#newPassword").click(resetInputBox);

    $("#reNewPassword").click(resetInputBox);

});

/**
 * 清空输入框
 */
function resetInputBox() {
    $(this).val("");
}

/**
 * 初始化页面内容
 */
function initPage() {

    /**
     * 发送ajax请求获取UserInfo，进行页面信息初始化
     */
    $.ajax({
        url: "getUserInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);
            var str;

            $(".customerName").html(" " + d.username + " " + d.sex);
            $("#customerName").html(" " + d.username + " " + d.sex);
            $("#bindMobile").html("您当前绑定手机号码：" + d.mobile);

            //判断性别
            if (d.sex == property.male) {
                str = "<a href='javascript:void(0);' class='on' value = '1' gender='0' onclick='changeSex(this)'>先生</a>" +
                    "<a href='javascript:void(0);' class='newsex-js' value='0' gender='1' onclick='changeSex(this)' style='display: none;'>女士</a>"
            } else {
                str = "<a href='javascript:void(0);' class='newsex-js' value='0' gender='0' onclick='changeSex(this)' style='display: none;'>先生</a>" +
                    "<a href='javascript:void(0);' class='on' gender='1' value='1' onclick='changeSex(this)'>女士</a>"
            }

            $("#sexSelect").html(str);
            $("input[name='validate_emailorphone']").val(d.mobile);

        }
    });

}

//初始化订单查询页面
function initOrderSearch() {

    /**
     * [{
        "creatorTime": "2018-05-19 15:04:21",
        "daId": 4,
        "deliverCost": 18,
        "mgId": 0,
        "orId": "5c2ddb11-5f91-4c56-b436-6c6be1af413f",
        "orderStatus": "商家未接单",
        "payType": "货到付款",
        "productAmount": 14,
        "productCost": 562.05,
        "totalCost": 580.05,
        "updateTime": "2018-05-19 15:04:21",
        "usId": 4
    }, {
        "creatorTime": "2018-05-18 18:03:22",
        "daId": 4,
        "deliverCost": 18,
        "mgId": 0,
        "orId": "c625876c-0d73-42d2-b5c3-83b2c8143182",
        "orderStatus": "商家未接单",
        "payType": "货到付款",
        "productAmount": 5,
        "productCost": 268.55,
        "totalCost": 286.55,
        "updateTime": "2018-05-18 18:03:22",
        "usId": 4
    }]
     */

    $.ajax({
        url: "getUserCurrentOrderInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            $("#orderList").html("");

            for (var x = 0; x < d.length; x++) {

                var date = new Date(d[x].creatorTime);

                var month = date.getMonth() + 1;
                month = fullZone(month);

                var day = date.getDate();
                day = fullZone(day);

                var hours = date.getHours();
                hours = fullZone(hours);

                var minutes = date.getMinutes();
                minutes = fullZone(minutes);

                $("#orderList").append(
                    "<li class='orderList_li orderList_body'>" +
                    "<div class='orderList_format orderList_date'>" +
                    "<div class='orderList_day'>" + month + "-" + day + "</div>" +
                    "<div class='orderList_time'>" + hours + ":" + minutes + "</div>" +
                    "</div>" +
                    "<div class='orderList_format orderList_details'>" +
                    "<div class='orderList_detail_info'>您本次订单共计" + d[x].productAmount + "份餐品</div>" +
                    "<div class='orderList_detail_desc'></div>" +
                    "</div>" +
                    "<div class='orderList_format orderList_price'>" + d[x].totalCost + "</div>" +
                    "<div class='orderList_format orderList_status'>" + d[x].orderStatus + "</div>" +
                    "<div class='orderList_format orderList_option'>" +
                    "<div id='details' class='orderItem_details'>订单详情</div>" +
                    "<div id='another_order' class='another_order'>再来一单</div>" +
                    "</div>" +
                    "</li>"
                );
            }

        }
    });

}

function changeSex(obj) {

    var value = $(obj).attr("value");

    if (value == "0") {

        $("a[value='1']").removeClass('on');
        $("a[value='1']").addClass("newsex-js");
        $("a[value='1']").attr("value", "0");

        $(obj).removeClass("newsex-js");
        $(obj).addClass("on");
        $(obj).attr("value", "1");

    }

}

function fullZone(value) {

    var d = new String(value);

    return d.length < 2 ? "0" + d : d;
}

