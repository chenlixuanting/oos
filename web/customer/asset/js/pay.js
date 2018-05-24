/**
 * Created by Shinelon on 2018/5/18.
 */
$(function () {

    /**
     * 获取用户的购物车
     */
    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

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
            alert("您还没有选择付款方式!");
            return;
        }

        $.ajax({
            url: "Pay.action?" + new Date().getTime(),
            type: "POST",
            dataType: "json",
            success: function (data) {

                var returnData = eval(data);

                if (returnData.head) {
                    location.replace("customerCenter.jsp");
                }
            }
        });

    });

    $("#back_menu_btn").click(function () {
        location.assign("cart.jsp");
    });

});

