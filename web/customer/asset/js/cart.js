/**
 * Created by Shinelon on 2018/5/17.
 */
$(function () {

    //初始化导航条
    initNav();

    //刷新购物车页面
    refreshCartPage();

});

/**
 * 初始化导航条
 */
function initNav() {

    /**
     * 获取用户标志并判断上一步和下一步按钮的逻辑,和修改引导流程中超链接指向continueShopping.jsp还是regCustomer.jsp
     */
    $.ajax({
        url: "getUserFlag.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            if (d.head) {

                var body = eval(d.body);

                alert(body);

                if (body) {

                    $("#step1").click(function () {
                        location.assign("continueShopping.jsp");
                    });

                    $("#step_pay").click(function () {
                        location.assign("pay.jsp");
                    });

                    $("area[shape='rect']").attr("href", "continueShopping.jsp");

                } else {

                    $("#step1").click(function () {
                        location.assign("regCustomer.jsp");
                    });

                    $("#step_pay").click(function () {
                        location.assign("saveCustomer.jsp");
                    });

                    $("area[shape='rect']").attr("href", "regCustomer.jsp");
                }

            } else {

                alert(d.body);

                //用户退出
                userExit();
            }
        }
    });

}

//从cart.jsp页面中删除订单项
function removeOrderItem(obj) {

    if (confirm("你确定要删除该订单项吗?")) {
        $.ajax({
            url: "delOrderItemFromShopCart.action",
            type: "POST",
            dataType: "json",
            data: {
                requestData: $(obj).attr("dsId")
            },
            success: function (data) {

                var d = eval(data);

                var flag = d.head == "true" ? true : false;

                if (flag) {
                    //刷新cart.jsp页面
                    refreshCartPage();
                } else {
                    alert("删除该订单项失败!");
                }

            }
        });
    }

}

//刷新购物车页面
function refreshCartPage() {

    /**
     * 获取购物车的信息
     */
    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            //清空商品显示列表
            $(".order_detail_table").html("");

            //添加表头
            $(".order_detail_table").append(
                "<tr>" +
                "<th width='6%'>序号</th>" +
                "<th width='20%'>品名</th>" +
                "<th width='9%'>单价</th>" +
                "<th width='10%'>数量</th>" +
                "<th width='9%'>小计</th>" +
                "<th width='8%'>全部取消</th>"
            );

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
                    "<a class='oiCancel' onclick='removeOrderItem(this);' dsId='" + data.orderItems[x].dsId + "'href='javascript:void(0)'>取消</a>" +
                    "</td>"
                );
            }

            $(".detail_price_span").html(
                "<em class='ft_b'>小　计：</em>" + d.productCost.toFixed(2) + "元 |" +
                "<em class='ft_b'>外送费：</em>" + d.deliverCost.toFixed(2) + "元" +
                "<strong style='color: #F00;'></strong>"
            );

            $(".total_price_span").html("<em class='ft_b'>总金额：</em>" + d.totalCost.toFixed(2) + "元");

        }
    });

}