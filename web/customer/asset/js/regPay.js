/**
 * Created by Shinelon on 2018/5/18.
 */
$(function () {

    /**
     * 禁用浏览器回退功能
     */
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, 'regPay.jsp');
            window.history.forward(1);
        });
    }
    window.history.pushState('forward', null, 'regPay.jsp'); //在IE中必须得有这两行
    window.history.forward(1);

    /**
     * 获取用户的购物车
     */
    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            //{"body":{"deliverCost":0,"orderItems":[],"productAmount":0,"productCost":0,"totalCost":0},"head":true}

            //添加购物车成功,修改相应页面
            var returnData = eval(data);

            if (returnData.head) {

                $("#totalCost").html(returnData.body.totalCost.toFixed(2) + "元");

            } else {

                //提示错误信息
                alert(returnData.body);
            }
        }

    });

    /**
     * 获取用户的信息
     */
    $.ajax({
        url: "getUserInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            // {
            //     "creatorTime": "2018-05-18 12:33:04",
            //     "defaultDeliverAddress": {
            //     "createTime": "2018-05-18 12:33:04",
            //         "daId": 1,
            //         "default": true,
            //         "receiverAddress": "广西壮族自治区南宁市良庆区 世纪花园北区(水芝苑C单元402) 陈宣锦 先生 18477062310",
            //         "receiverMobile": "18477062310",
            //         "receiverName": "陈宣锦",
            //         "receiverTime": "2018年5月18日 周五 13时00分",
            //         "updateTime": "2018-05-18 12:33:04",
            //         "usId": 1
            // },
            //     "mobile": "13347573463",
            //     "password": "123",
            //     "sex": "先生",
            //     "updateTime": "2018-05-18 12:33:04",
            //     "usId": 1,
            //     "username": "陈宣锦"
            // }

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                var defaultDeliverAddress = eval(body.defaultDeliverAddress);

                $("#deliverName").html("<span class='info_span_1' >顾客姓名：</span>" + defaultDeliverAddress.receiverName);
                $("#deliverAddress").html("<span class='info_span_1' >送餐地址：</span>" + defaultDeliverAddress.receiverAddress);
                $("#mobile").html("<span class='info_span_1'>联系电话：</span>" + defaultDeliverAddress.receiverMobile);
                $("#deliveryTime").html(defaultDeliverAddress.receiverTime);
                $("#customerName").html(body.username);

            } else {

                //提示信息
                alert(returnData.body);

            }

        }
    });

    /**
     * 退出登录
     */
    $(".loginExit").click(function () {
        $.ajax({
            url: "customerExit.action",
            type: "post",
            dataType: "json"
        });
    });

    $("input[name=payType]").click(function () {

        $("input[name='payType'][checked='checked']").removeAttr("checked");

        $(this).attr("checked", "checked");

        var requestData = {
            payType: $(this).val()
        };

        $.ajax({
            url: "SelectPayType.action",
            type: "post",
            dataType: "json",
            data: {
                requestData: JSON.stringify(requestData)
            },
            success: function (data) {

                var returnData = eval(data);

                if (!returnData.head) {
                    alert(returnData.body);
                }

            }
        });
    });

    /**
     * 点击提交按钮
     */
    $(".subBtn").click(function () {

        var selectPayType = $("input[name='payType'][checked='checked']").length;

        if (selectPayType == 0) {
            alert(codeMessage.error8);
            return;
        }

        $.ajax({
            url: "Pay.action?" + new Date().getTime(),
            type: "POST",
            dataType: "json",
            success: function (data) {
                var d = eval(data);
                var flag = d.head == "true" ? true : false;
                if (flag) {
                    location.replace("customerCenter.jsp");
                }
            }
        });

    });

    $("#back_menu_btn").click(function () {
        location.assign("cart.jsp");
    });

});

