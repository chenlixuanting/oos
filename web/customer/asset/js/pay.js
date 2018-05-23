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

            var d = eval(data);

            // {
            //     "deliverCost": 9,
            //     "orderItems": [{
            //     "creatorTime": "2018-05-18 12:32:51",
            //     "dishesName": "披萨",
            //     "dsId": 21,
            //     "oiId": 0,
            //     "orId": 0,
            //     "price": 12.55,
            //     "productCost": 12.55,
            //     "quantity": 1,
            //     "scId": 0,
            //     "updateTime": "2018-05-18 12:32:51"
            // }],
            //     "productAmount": 1,
            //     "productCost": 12.55,
            //     "totalCost": 21.55
            // }

            $("#totalCost").html(d.totalCost.toFixed(2) + "元");

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

            var d = eval(data);
            var body = eval(d.body);

            if (d.head) {

                var defaultDeliverAddress = eval(body.defaultDeliverAddress);

                $("#deliverName").html("<span class='info_span_1' >顾客姓名：</span>" + defaultDeliverAddress.receiverName);
                $("#deliverAddress").html("<span class='info_span_1' >送餐地址：</span>" + defaultDeliverAddress.receiverAddress);
                $("#mobile").html("<span class='info_span_1'>联系电话：</span>" + defaultDeliverAddress.receiverMobile);
                $("#deliveryTime").html(defaultDeliverAddress.receiverTime);
                $("#customerName").html(body.username);

            } else {
                alert(d.body);
                location.replace("customerExit.action");
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
            dataType: "json",
            success: function () {
            }
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
            }, success: function (data) {
            }
        });
    });

    /**
     * 点击提交按钮
     */
    $(".subBtn").click(function () {

        var selectPayType = $("input[name='payType'][checked='checked']").length;

        if (selectPayType == 0) {
            alert(property.error7);
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

