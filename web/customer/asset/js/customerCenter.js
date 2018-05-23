/**
 * Created by Shinelon on 2018/5/18.
 */
$(function () {

    //初始化个人中心页面
    initPage();

    //初始化用户送餐地址
    initAddressPage();

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

    /*操作用户地址*/
    // $("#operateDeliverAddress").click(function () {
    //
    // });

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

    $("input[name='gender']").click(
        function () {
            $("input[name='gender'][checked='checked']").removeAttr("checked");
            $(this).attr("checked", "checked");
        }
    );

    /**
     * 请求CustomerRegAgree.action保存新用户的信息
     */
    $("#saveAddressBtn").click(
        function () {
            /*校验*/
            var cityName = $("#cityName").val();
            var roadName = $("#roadName").val();
            var addressDetial = $("#addressDetial").val();
            var linkman = $("#linkman").val();
            var linkphone = $("#linkphone").val();
            var reg = /^(\+\d{2,3}\-)?\d{11}$/;

            if (cityName == "") {
                alert("送餐城市不能为空");
                return false;
            }
            if (roadName == "") {
                alert("路名/小区名不能为空");
                return false;
            }
            if (addressDetial == "") {
                alert("后续不能为空");
                return false;
            }
            if (linkman == "") {
                alert("联系人不能为空");
                return false;
            }
            if (linkphone == "") {
                alert("联系电话不能为空");
                return false;
            }
            if (!reg.test(linkphone)) {
                alert("手机号输入错误");
                return false;
            }

            var requestData = {
                cityName: $("#cityName").val(),
                roadName: $("#roadName").val(),
                addressDetial: $("#addressDetial").val(),
                sex: $("input[name='gender'][checked='checked']").val(),
                username: $("#linkman").val(),
                mobile: $("#linkphone").val()
            };

            $.ajax({
                url: "AddUserDeliverAddress.action",
                type: "POST",
                dataType: "json",
                data: {
                    requestData: JSON.stringify(requestData)
                },
                success: function (data) {

                    var d = eval(data);

                    if (d.head) {

                        //清空地址框中的内容
                        resetAddressInputBox();

                        $("#addAddress").css("display", "none");

                        initAddressPage();

                        alert("新增地址成功!");
                        //刷新地址选择项
                    } else {
                        alert("新增地址失败!");
                    }

                }
            });
        }
    );

    //给日历按钮绑定事件，点击则清空地址栏
    $(".add_icon").click(function () {
        $("#cityName").val("");
    });

});

/**
 * 清空输入框
 */
function resetInputBox() {
    $(this).val("");
}

/**
 * 清空地址录入栏
 */
function resetAddressInputBox() {
    $("#cityName").val("");
    $("#roadName").val("");
    $("#addressDetial").val("");
    $("#linkman").val("");
    $("#linkphone").val("");
}

/**
 * 初始化个人中心页面内容
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

//初始化用户地址页面
function initAddressPage() {


    /**
     * [{
        "createTime": "2018-05-21 09:23:47",
        "daId": 56,
        "default": true,
        "receiverAddress": "广西壮族自治区桂林市雁山区 世纪花园北区(水芝苑C单元402) 陈宣锦 先生 13347573463",
        "receiverMobile": "13347573463",
        "receiverName": "陈宣锦",
        "receiverTime": "undefined undefined时undefined分",
        "updateTime": "2018-05-21 09:23:47",
        "usId": 56
      }]
     */

    $.ajax({
        url: "getUserDeliverAddress.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var userDeliverAddress = $("#operateDeliverAddress");

            var d = eval(data);

            //清空标签中的内容
            userDeliverAddress.html("");

            for (var x = 0; x < d.length; x++) {
                userDeliverAddress.append(
                    "<li id='" + d[x].daId + "' class=''>" +
                    "<div style='width: 20px; float: left; margin-top: 12px;'>" +
                    "<input name='selAddressId' type='radio' value='0'" + (d[x].default ? 'checked' : '') + ">" +
                    "</div>" +
                    "<div style='float:left' class='cityName'></div>" +
                    "<div class='cityName'>" +
                    "<a name='selAddressLink'" +
                    "style='text-decoration: none; display: block; float: left'" +
                    "href='javascript:void(0);'>" + d[x].receiverAddress + (d[x].default ? '<span class="showDefault">(默认)</span>' : '') +
                    "</a>" +
                    "<div class='addressOptions'>" +
                    "<div class='setDefaultAddress' daId='" + d[x].daId + "' onclick='setAsDefaultDeliverAddress(this);'>" +
                    "设为默认" +
                    "</div>" +
                    "<div class='useThisAddress' daId='" + d[x].daId + "'>" +
                    "使用此地址订餐" +
                    "<span>|</span>" +
                    "</div>" +
                    "</div>" +
                    "</li>"
                );
            }
        }
    });

}

//设为默认
function setAsDefaultDeliverAddress(obj) {

    //发送ajax请求
    $.ajax({
        url: "SetUserDefaultDeliverAddress.action",
        type: "POST",
        dataType: "json",
        data: {
            requestData: $(obj).attr("daId")
        },
        success: function (data) {

            var d = eval(data);

            if (d.head) {
                //重新初始化页面地址
                initAddressPage();
            } else {
                alert("操作失败!");
            }
        }
    });
}

//设置为送餐地址
function setAsCurrentDeliverAddress(obj) {

}

//更换性别
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

//选为默认地址
// <span class="showDefault">(默认)</span>

//数字添0操作
function fullZone(value) {
    var d = new String(value);
    return d.length < 2 ? "0" + d : d;
}

//使用新的订餐地址
function addDeliverAddress(obj) {

    //清空地址录入栏
    resetAddressInputBox();

    $(obj).attr("value", -parseInt($(obj).attr("value")));

    if ($(obj).attr("value") > 0) {
        //使用新的订餐地址
        $("#addAddress").css("display", "block");
    } else {
        $("#addAddress").css("display", "none");
    }

}

