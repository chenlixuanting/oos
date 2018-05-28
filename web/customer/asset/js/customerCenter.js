/**
 * Created by Shinelon on 2018/5/18.
 */
$(function () {

    //初始化个人中心页面
    initPage();

    //初始化用户送餐地址
    initAddressPage();

    //初始化订单页面
    initOrderSearch();

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

                var returnData = eval(data);

                if (returnData.head) {

                    //重新初始化页面数据
                    initPage();

                    //黑幕特效
                    shortWait();

                    //使用点击取消后的js效果
                    $(".bcname-js").click();

                } else {

                    alert(returnData.body);

                }

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

                var returnData = eval(data);

                if (returnData.head) {

                    //初始化页面
                    initPage();

                    //黑幕特效
                    shortWait();

                    //使用性别取消按钮的js效果
                    $(".bcsex-js").click();

                } else {

                    alert(returnData.body);

                }

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

                    var returnData = eval(data);

                    if (returnData.head) {
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

        $(".user_menu").height(490);

        $('.pages1').show().siblings().hide();
        $('#l1').addClass("on");
        $('#l2').removeClass("on");
        $('#l3').removeClass("on");
    });

    $('.link2').click(function () {

        //初始化订单查询页面
        // initOrderSearch();

        $(".backOrderList").click();

        $('.pages2').show().siblings().hide();
        $('#l1').removeClass("on");
        $('#l2').addClass("on");
        $('#l3').removeClass("on");
    });

    $('.link3').click(function () {

        //初始化地址管理页面
        initAddressPage();

        $(".user_menu").height(490);

        $('.pages3').show().siblings().hide();
        $('#l1').removeClass("on");
        $('#l2').removeClass("on");
        $('#l3').addClass("on");
    });

    //关闭详情
    $('#close_details').click(function () {

        //初始化订单详情页
        // initOrderSearch();

        $('#orderList_now').show().siblings().hide();
    });

    //进入历史订单
    $('#tohistory').click(function () {

        //初始化历史订单
        initHistoryOrder();

        $('#orderList_history').show().siblings().hide();

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

    $(".backOrderList").click(
        function () {
            location.assign("customerCenter.jsp");
        }
    );

});

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

            if (d.head) {

                var str;
                var body = eval(d.body);

                $(".customerName").html(" " + body.username + " " + body.sex);
                $("#customerName").html(" " + body.username + " " + body.sex);
                $("#bindMobile").html("您当前绑定手机号码：" + d.body.mobile);

                //判断性别
                if (body.sex == property.male) {
                    str = "<a href='javascript:void(0);' class='on' value = '1' gender='0' onclick='changeSex(this)'>先生</a>" +
                        "<a href='javascript:void(0);' class='newsex-js' value='0' gender='1' onclick='changeSex(this)' style='display: none;'>女士</a>"
                } else {
                    str = "<a href='javascript:void(0);' class='newsex-js' value='0' gender='0' onclick='changeSex(this)' style='display: none;'>先生</a>" +
                        "<a href='javascript:void(0);' class='on' gender='1' value='1' onclick='changeSex(this)'>女士</a>"
                }

                $("#sexSelect").html(str);
                $("input[name='validate_emailorphone']").val(body.mobile);

            } else {

                //输出提示信息
                alert(d.body);

                //用户退出
                location.replace("customerExit.action");

            }

        }
    });

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

//初始化订单查询页面
function initOrderSearch() {

    $.ajax({
        url: "getUserCurrentOrderInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var d = eval(returnData.body);

                $("#orderList").html("");

                //设置导航条长度
                $(".user_menu").height((d.length * 129) + 150);

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
                        "<div id='details' class='orderItem_details' orId='" + d[x].orId + "' daId='" + d[x].daId + "'onclick='orderDetail(this);'>订单详情</div>" +
                        "<div id='another_order' class='another_order' orId='" + d[x].orId + "'onclick='confirmedReceiver(this);'>确认收货</div>" +
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


//初始化历史订单
function initHistoryOrder() {

    $.ajax({
        url: "getUserAllHistoryOrder.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var d = eval(returnData.body);

                $("#Pagination_history").html("");

                //设置导航条长度
                $(".user_menu").height((d.length * 129) + 150);

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

                    $("#Pagination_history").append(
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
                        "<div class='orderList_format orderList_option' style=' margin-top: -40px;height: 104px;cursor: pointer; line-height: 34px;'>" +
                        "<div id='details' class='orderItem_details' orId='" + d[x].orId + "' style='margin-top: 15px;' onclick='historyOrderDetail(this);'>订单详情</div>" +
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

//数字添0操作
function fullZone(value) {
    var d = new String(value);
    return d.length < 2 ? "0" + d : d;
}

function historyOrderDetail(obj) {

    //设置导航条高度
    $(".user_menu").height(490);

    //餐品详情
    $.ajax({
        url: "getUserHistoryOneOrderInfo.action",
        type: "POST",
        dataType: "json",
        data: {
            requestData: $(obj).attr("orId")
        },
        success: function (data) {

            var d = eval(data);

            if (d.head) {

                var body = eval(d.body);

                //设置客户姓名
                $("#receiverName").html(body.receiverName);

                //设置客户电话
                $("#receiverMobile").html(body.receiverMobile);

                //设置送餐地址
                $("#receiverAddress").html(body.receiverAddress);

                //设置订单状态
                $(".orderList_detail_status").html(body.orderStatus);

                //设置送达时间
                $(".orderList_detail_time").html("预计" + body.receiverTime + "送达");

                //设置付款方式
                $("#orderPayType").html(body.payType);

                var orderItems = eval(body.orderItems);

                $("#orderItemTable").html("");

                $("#orderItemTable").append(
                    "<tr>" +
                    "<th width='20%'>序号</th>" +
                    "<th width='20%'>品名</th>" +
                    "<th width='20%'>单价</th>" +
                    "<th width='20%'>数量</th>" +
                    "<th width='20%'>小计</th>" +
                    "</tr>"
                );

                for (var x = 0; x < orderItems.length; x++) {
                    $("#orderItemTable").append(
                        "<tr>" +
                        "<td align='left'>" + (x + 1) + "</td>" +
                        "<td>" + orderItems[x].dishesName + "</td>" +
                        "<td><span class='ft_color_red'>￥" + orderItems[x].price.toFixed(1) + "</span></td>" +
                        "<td>" + orderItems[x].quantity + "</td>" +
                        "<td><span class='ft_color_red'>￥" + orderItems[x].productCost.toFixed(1) + "</span></td>" +
                        "</tr>"
                    );
                }

                $(".total_price_div").html(
                    "<p>" +
                    "<span class='price_span_query'>" +
                    "<em class='ft_b'>小 计：</em>" + (parseFloat(body.totalCost) - parseFloat(body.deliverCost)).toFixed(1) + "元 |" +
                    "<em class='ft_b'>外送费：</em>" + body.deliverCost.toFixed(1) + "元" +
                    "</span>" +
                    "</p>" +
                    "<p>" +
                    "<span class='total_price_span_query'>" +
                    "<em class='ft_b'>总金额：</em>" + body.totalCost.toFixed(1) + "元" +
                    "</span>" +
                    "</p>"
                );

            } else {
                alert("查看订单详情失败!");
            }

        }
    });

    $('#order_item_detail').css("display", "block");
    $("#orderList_history").css("display", "none");

}

//查看订单详情
function orderDetail(obj) {

    //设置导航条高度
    $(".user_menu").height(490);

    //餐品详情
    $.ajax({
        url: "getUserCurrentOneOrderInfo.action",
        type: "POST",
        dataType: "json",
        data: {
            requestData: $(obj).attr("orId")
        },
        success: function (data) {

            var d = eval(data);

            if (d.head) {

                var body = eval(d.body);

                //设置客户姓名
                $("#receiverName").html(body.receiverName);

                //设置客户电话
                $("#receiverMobile").html(body.receiverMobile);

                //设置送餐地址
                $("#receiverAddress").html(body.receiverAddress);

                //设置订单状态
                $(".orderList_detail_status").html(body.orderStatus);

                //设置送达时间
                $(".orderList_detail_time").html("预计" + body.receiverTime + "送达");

                //设置付款方式
                $("#orderPayType").html(body.payType);

                var orderItems = eval(body.orderItems);

                $("#orderItemTable").html("");

                $("#orderItemTable").append(
                    "<tr>" +
                    "<th width='20%'>序号</th>" +
                    "<th width='20%'>品名</th>" +
                    "<th width='20%'>单价</th>" +
                    "<th width='20%'>数量</th>" +
                    "<th width='20%'>小计</th>" +
                    "</tr>"
                );

                for (var x = 0; x < orderItems.length; x++) {
                    $("#orderItemTable").append(
                        "<tr>" +
                        "<td align='left'>" + (x + 1) + "</td>" +
                        "<td>" + orderItems[x].dishesName + "</td>" +
                        "<td><span class='ft_color_red'>￥" + orderItems[x].price.toFixed(1) + "</span></td>" +
                        "<td>" + orderItems[x].quantity + "</td>" +
                        "<td><span class='ft_color_red'>￥" + orderItems[x].productCost.toFixed(1) + "</span></td>" +
                        "</tr>"
                    );
                }

                $(".total_price_div").html(
                    "<p>" +
                    "<span class='price_span_query'>" +
                    "<em class='ft_b'>小 计：</em>" + (parseFloat(body.totalCost) - parseFloat(body.deliverCost)).toFixed(1) + "元 |" +
                    "<em class='ft_b'>外送费：</em>" + body.deliverCost.toFixed(1) + "元" +
                    "</span>" +
                    "</p>" +
                    "<p>" +
                    "<span class='total_price_span_query'>" +
                    "<em class='ft_b'>总金额：</em>" + body.totalCost.toFixed(1) + "元" +
                    "</span>" +
                    "</p>"
                );

            } else {
                alert("查看订单详情失败!");
            }

        }
    });

    $('#order_item_detail').css("display", "block");
    $("#orderList_now").css("display", "none");

}

//确认收货
function confirmedReceiver(obj) {

    var orId = $(obj).attr("orId");

    $.ajax({
        url: "receiverOrder.action",
        type: "POST",
        dataType: "json",
        data: {
            orId: orId
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                initOrderSearch();
            }

        }
    });

}


//初始化用户地址页面
function initAddressPage() {

    $.ajax({
        url: "getUserDeliverAddress.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var d = eval(returnData.body);

                var userDeliverAddress = $("#operateDeliverAddress");

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
                        "href='javascript:void(0);'>" + d[x].receiverAddress + " " + d[x].receiverName + " " + d[x].receiverSex +
                        " " + d[x].receiverMobile + "&nbsp;&nbsp;&nbsp;<br/>" + (d[x].default ? '<span class="showDefault">(默认)</span>' : '') +
                        "</a>" +
                        "<div class='addressOptions'>" +
                        "<div class='setDefaultAddress' daId='" + d[x].daId + "' onclick='setAsDefaultDeliverAddress(this);'>" +
                        "设为默认" +
                        "</div>" +
                        "<div class='useThisAddress' daId='" + d[x].daId + "' onclick='setAsCurrentDeliverAddress(this);'>" +
                        "使用此地址订餐" +
                        "<span>|</span>" +
                        "</div>" +
                        "</div>" +
                        "</li>"
                    );
                }

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

    //发送ajax请求
    $.ajax({
        url: "SelectDeliverAddress.action",
        type: "POST",
        dataType: "json",
        data: {
            requestData: $(obj).attr("daId")
        },
        success: function (data) {

            var d = eval(data);

            if (d.head) {
                alert("设置当前订餐地址成功!");
            } else {
                alert("设置当前订餐地址失败!");
            }

        }
    });

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

