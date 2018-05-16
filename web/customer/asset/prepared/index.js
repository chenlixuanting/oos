/**
 * Created by Shinelon on 2018/5/2.
 */
$(function () {

    /**
     * ajax同步加载数据时,必须将async设置为false,否则会排除TDS 协议流错误
     */

    //ajax向后台请求这是一天的菜点
    $.ajax({
        url: "./queryDishTypeByMealType.action",
        type: "POST",
        dataType: "json",
        cache: false,
        async: false,
        data: {
            mealType: "早餐"
        },
        success: function (data) {

            var d = eval(data);

            for (var x = 0; x < d.length; x++) {
                $("#ChildMenu2").append("<li><a onclick='$.indexPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
            }
        }
    });

    // ajax向后台请求早餐菜品种类
    $.ajax({
        url: "./queryDishTypeByMealType.action",
        type: "POST",
        cache: false,
        async: false,
        dataType: "json",
        data: {
            mealType: "正餐"
        },
        success: function (data) {

            var d = eval(data);

            for (var x = 0; x < d.length; x++) {
                $("#ChildMenu3").append("<li><a onclick='$.indexPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
            }

        }
    });

    $.ajax({
        url: "./queryDishTypeByMealType.action",
        type: "POST",
        dataType: "json",
        cache: false,
        async: false,//将ajax设置为同步加载,异步加载会出现 TDS协议流问题
        data: {
            mealType: "夜宵"
        },
        success: function (data) {

            var d = eval(data);

            for (var x = 0; x < d.length; x++) {
                $("#ChildMenu4").append("<li><a onclick='$.indexPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
            }

        }
    });

    /**
     * 开始订餐
     */
    $.startOrdering = function () {

    };

    $("#loginSubmit").click(function () {
        location.assign("customerFromAgree.jsp");
    });

    $.indexPage = {
        sendInfo: function (obj) {
            $.ajax({
                url: "./queryDishesByDishesType.action",
                type: "POST",
                dataType: "json",
                data: {
                    dishesType: obj.innerHTML
                }, success: function (data) {

                    var d = eval(data);

                    //情况商品列表标签
                    $(".product_ul").html("");

                    for (var x = 0; x < d.length; x++) {

                        $(".product_ul").append(
                            "<li style='height:295px'>" +
                            "<div>" +
                            "<img onclick='$.dishesInfoDialog(this)' dsId='" + d[x].dsId + "'src='" + pageUrls.customerAddress + d[x].picAddress + "' name='menuImg' alt='" + d[x].dishesName + "' style='width: 179px;height:179px;'>" +
                            "<div>" +
                            "<div class='pro_info'>" +
                            "<p>" +
                            "<a href='javascript:;' class='pro_name'>" + d[x].dishesName + "</a> <span class='couponDesc'>&nbsp;</span>" +
                            "</p>" +
                            "<p class='p_realPrice'>" +
                            "</p>" +
                            "<p style='height:22px'>" +
                            "<span class='pro_price'>" + d[x].price + "元 / 份" + "</span>" +
                            "</p>" +
                            "<p style='clear: both; margin-bottom: 20px!important;'>" +
                            "<input type='button' class='order_btn_start'>" +
                            "</p>" +
                            "</div>" +
                            "</li>"
                        );

                    }

                }
            });

        }
    };

    /**
     * 当点击图片时，显示商品的详细信息对话框
     */
    $.dishesInfoDialog = function (obj) {

        var dsId = obj.getAttribute("dsId");

        //附带dsId，请求后台数据库
        $.ajax({
            url: "/oos/admin/queryByDishesId.action",
            type: "POST",
            dataType: "json",
            data: {
                id: dsId
            },
            success: function (data) {

                var d = eval(data);

                /**
                 *拉出灰募
                 * */
                $("body").append("<div class='ui-widget-overlay' style='width: 1920px; height: 974px; z-index: 1001;'></div>");

                /**
                 * 修改弹出框中的数据项
                 */
                $("#desc").html(d.describe);
                $("span.price").html(d.price);
                $(".popup_product_detail_txt h4").html(d.dishesName);
                $(".popup_product_detail_img img").attr("src", pageUrls.customerAddress + d.picAddress);
                $(".popup_product_detail_img img").attr("alt", d.dishesName);

                /**
                 * 显示弹出框
                 * */
                $(".ui-dialog").css("display", "block");

                /**
                 * 关闭弹出框
                 * */
                $(".close_icon").click(function () {
                    $('.ui-dialog').css("display", "none");
                    $(".ui-widget-overlay").remove();
                });

            },
        });

    }

});