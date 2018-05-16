/**
 * Created by Shinelon on 2018/5/11.
 */
$(function () {

    /**
     * 页面加载时,自动加载对应餐点产品
     *
     * 1.判断当前时间段所属的餐点
     *
     * 2.确定显示 早餐，中餐，宵夜
     *
     * 3.加载对应餐点的菜品种类
     *
     * 4.点击相应菜品种类时,加载对应菜品信息
     */
    var baseTime = new Date(property.baseTime);

    //早餐起始和终止时间
    var breakfast_start = new Date(property.breakfastStart).getTime() - baseTime.getTime();
    var breakfast_end = new Date(property.breakfastEnd).getTime() - baseTime.getTime();

    //正餐起始和终止时间
    var lunch_start = new Date(property.lunchStart).getTime() - baseTime.getTime();
    var lunch_end = new Date(property.lunchEnd).getTime() - baseTime.getTime();

    //宵夜起始和终止时间
    // var midnight_start = new Date("2018/01/01 22:45:00").getTime() - baseTime.getTime();
    // var midnight_end = new Date("2018/01/01 05:44:00").getTime() - baseTime.getTime();

    //当前时间
    var current_time = new Date();

    //当前年月日---有一个坑,月份是从0开始的
    var current_yms = new Date(current_time.getFullYear() + "/" + (current_time.getMonth() + 1) + "/" + current_time.getDate());

    //当前时分秒
    var current_hms = current_time.getTime() - current_yms.getTime();

    if (breakfast_start <= current_hms && current_hms <= breakfast_end) {
        //早餐
        $.ajax({
            url: "./queryDishTypeByMealType.action",
            type: "POST",
            dataType: "json",
            cache: false,
            async: true,
            data: {
                mealType: "早餐"
            },
            success: function (data) {

                var d = eval(data);

                for (var x = 0; x < d.length; x++) {
                    $("#ChildMenu2").append("<li><a onclick='$.currentShoppingPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }
            }
        });

        $("#breakfast").css("display", "block");

    } else if (lunch_start <= current_hms && current_hms <= lunch_end) {
        //中餐
        $.ajax({
            url: "./queryDishTypeByMealType.action",
            type: "POST",
            cache: false,
            async: true,
            dataType: "json",
            data: {
                mealType: "正餐"
            },
            success: function (data) {

                var d = eval(data);

                for (var x = 0; x < d.length; x++) {
                    $("#ChildMenu3").append("<li><a onclick='$.currentShoppingPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }

            }
        });
        $("#lunch").css("display", "block");
    } else {
        //夜宵
        $.ajax({
            url: "./queryDishTypeByMealType.action",
            type: "POST",
            dataType: "json",
            cache: false,
            async: true,//将ajax设置为同步加载,异步加载会出现 TDS协议流问题
            data: {
                mealType: "夜宵"
            },
            success: function (data) {

                var d = eval(data);

                for (var x = 0; x < d.length; x++) {
                    $("#ChildMenu4").append("<li><a onclick='$.currentShoppingPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }

            }
        });
        $("#dinner").css("display", "block");
    }

    $.currentShoppingPage = {
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
                            "<img onclick='$.currentShoppingPage.dishesInfoDialog(this)' dsId='" + d[x].dsId + "'src='" + pageUrls.customerAddress + d[x].picAddress + "' name='menuImg' alt='" + d[x].dishesName + "' style='width: 179px;height:179px;'>" +
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

        }, /**
         * 当点击图片时，显示商品的详细信息对话框
         */
        dishesInfoDialog: function (obj) {

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
                }
            });
        }
    };

    /**
     * 去结算
     */
    $("#ToCalcu").click(function () {
        location.assign("cart.jsp");
    });

});