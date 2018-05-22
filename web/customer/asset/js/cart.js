/**
 * Created by Shinelon on 2018/5/17.
 */
$(function () {

    $("#step1").click(function () {
        location.assign("continueShopping.jsp");
    });

    $("#step_pay").click(function () {
        location.assign("pay.jsp");
    });

    /**
     * 获取用户标志并判断上一步和下一步按钮的逻辑,和修改引导流程中超链接指向continueShopping.jsp还是regCustomer.jsp
     */
    $.ajax({
        url: "getUserFlag.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            if (d.body == property.notExist) {
                $("#step1").click(function () {
                    location.assign("regCustomer.jsp");
                });

                $("#step_pay").click(function () {
                    location.assign("saveCustomer.jsp");
                });

                $("area[shape='rect']").attr("href", "regCustomer.jsp");
            }

        }
    });

    /**
     * 获取购物车的信息
     */
    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            //循环添加商品项信息
            for (var x = 0; x < data.orderItems.length; x++) {
                $(".order_detail_table").append(
                    "<tr class='sct_row'>" +
                    "<td>" + (x + 1) + "</td>" +
                    "<td>" + data.orderItems[x].dishesName + "</td>" +
                    "<td>&yen;" + data.orderItems[x].price.toFixed(2) + "</td>" +
                    "<td><span>" + data.orderItems[x].quantity + "</span></td>" +
                    "<td>&yen;" + data.orderItems[x].productCost.toFixed(2) + "</td>" +
                    "<td>" +
                    "<img src='images/delete_icon_3.png'/>" +
                    "<a class='oiCancel' href='javascript:void(0)'>取消</a>" +
                    "</td>" +
                    "<td>&nbsp;</td>" +
                    "</tr>"
                );
            }

            //修改pay页面的支出金额
            $(".coupon_code").append(
                "<span>" +
                "<em class='ft_b'>小　计：</em>" + d.productCost.toFixed(2) + "元 |" +
                "<em class='ft_b'>外送费：</em>" + d.deliverCost.toFixed(2) + "元" +
                "<strong style='color: #F00;'></strong>" +
                "</span>" +
                "<span class='total_price_span' style='margin-top: -20px;margin-left: -46px'>" +
                "<em class='ft_b'>总金额：</em>" + d.totalCost.toFixed(2) + "元" +
                "</span>"
            );

        }
    });

});