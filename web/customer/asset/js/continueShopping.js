/**
 * Created by Shinelon on 2018/5/11.
 */
$(function () {

    //初始化购物信息
    updateShopCart();

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

    var child = "child2";
    var childMenu = "ChildMenu2";

    if (breakfast_start <= current_hms && current_hms <= breakfast_end) {
        //早餐
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
                    $("#ChildMenu2").append("<li><a onclick='$.regCustomerPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }
            }
        });

        $("#breakfast").css("display", "block");

    } else if (lunch_start <= current_hms && current_hms <= lunch_end) {

        child = "child3";
        childMenu = "ChildMenu3";

        //中餐
        $.ajax({
            url: "./queryDishTypeByMealType.action",
            type: "POST",
            cache: false,
            async: false,
            dataType: "json",
            data: {
                mealType: "午餐"
            },
            success: function (data) {

                var d = eval(data);

                for (var x = 0; x < d.length; x++) {
                    $("#ChildMenu3").append("<li><a onclick='$.regCustomerPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }

            }
        });
        $("#lunch").css("display", "block");
    } else {

        child = "child4";
        childMenu = "ChildMenu4";

        //夜宵
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
                    $("#ChildMenu4").append("<li><a onclick='$.regCustomerPage.sendInfo(this);'" + d[x] + ">" + d[x] + "</a></li>");
                }

            }
        });
        $("#dinner").css("display", "block");
    }

    $.regCustomerPage = {
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
                            "<img onclick='$.regCustomerPage.dishesInfoDialog(this)' dsId='" + d[x].dsId + "'src='" + pageUrls.customerAddress + d[x].picAddress + "' name='menuImg' alt='" + d[x].dishesName + "' style='width: 179px;height:179px;'>" +
                            "<div>" +
                            "<div class='pro_info'>" +
                            "<p>" +
                            "<a href='javascript:;' class='pro_name'>" + d[x].dishesName + "</a> <span class='couponDesc'>&nbsp;</span>" +
                            "</p>" +
                            "<p class='p_realPrice'>" +
                            "</p>" +
                            "<p>" +
                            "<span class='pro_price' style='margin-top: -15px;'>" + d[x].price.toFixed(2) + "元 / 份" + "</span>" +
                            "<span class='pro_number'>" +
                            "<a href='javascript:;' onclick='sub(this);'>" +
                            "<img src='images/minus_icon_2.gif'>" +
                            "</a>" +
                            "<input type='text' dsId=" + d[x].dsId + " value='1' maxlength='2' class='pro_number_input'>" +
                            "<a href='javascript:;' onclick='add(this);'>" +
                            "<img src='images/add_icon_2.gif'>" +
                            "</a>" +
                            "</span>" +
                            "</p>" +
                            "<p class='p_clear_both'>" +//对价格进行四舍五入处理
                            "<input type='button' class='mealdealDeatil_j order_btn' onclick='mainWindowOrderBtn();'>" +
                            "</p>" +
                            "</div>" +
                            "</li>"
                        );
                    }
                }
            });
        },
        /**
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
                    $(".popup_product_detail_txt h4").html(d.dishesName);
                    $(".popup_product_detail_img img").attr("src", pageUrls.customerAddress + d.picAddress);
                    $(".popup_product_detail_img img").attr("alt", d.dishesName);
                    $(".pro_number_input2").attr("dsId", d.dsId);

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
        },
        /**
         * 添加到购物车
         */
        addToBuyCart: function (obj) {

            var dsId = $(obj).attr("dsId");

            var orderItem = {
                dishesId: dsId,
                quantity: $(obj).val()
            };

            $.ajax({
                url: "ShopCart.action",
                type: "POST",
                dataType: "json",
                data: {
                    orderItem: JSON.stringify(orderItem)
                },
                success: function (data) {

                    var d = eval(data);

                    var flag = d.head == "true" ? true : false;

                    if (flag) {

                        /**
                         *拉出灰募
                         * */
                        $("body").append("<div class='ui-widget-overlay' style='width: 1920px; height: 974px; z-index: 1001;'></div>");

                        //200毫秒后关闭黑幕
                        setTimeout(function () {
                            $(".ui-widget-overlay").remove();
                        }, 300);

                        //更新购物车信息
                        updateShopCart();
                    } else {
                        //提示订购失败
                        alert(codeMessage.error2);
                    }

                }
            });
        }
    };

    /**
     * 发生ajax请求CustomerConfirm.action获取临时用户的详细信息
     */
    $.ajax({
        url: "getUserInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var d = eval(data);

            /**
             * {
                "body": {
                    "creatorTime": "2018-05-22 21:10:34",
                    "defaultDeliverAddress": {
                        "createTime": "2018-05-22 21:11:28",
                        "daId": 79,
                        "default": false,
                        "receiverAddress": "去我单位 13347573463(去我的期望) 去我单位 先生 13347573463",
                        "receiverMobile": "13347573463",
                        "receiverName": "去我单位",
                        "receiverTime": "2018年5月23日 周三 17时00分",
                        "updateTime": "2018-05-22 21:11:28",
                        "usId": 60
                    },
                    "mobile": "13347573463",
                    "password": "123123",
                    "sex": "先生",
                    "updateTime": "2018-05-22 21:10:34",
                    "usId": 60,
                    "username": "13347573463"
                },
                "head": true
            }
             */

            if (d.head) {
                //初始化页面地址
                $(".order_add").find("p").eq(1).append(eval(d.body.defaultDeliverAddress).receiverAddress);
            } else {

                //显示提示信息
                alert(d.body);

                //跳转到首页
                location.replace("customerExit.action");
            }

        }
    });

    /**
     * 去结算
     */
    $("#ToCalcu").click(function () {
        location.assign("cart.jsp");
    });

    /**
     * 初始化订餐首页
     */
    $("#" + childMenu).find('li').eq(1).find('a').trigger("click");
    $("#" + child).attr("class", "minus_sign");
    $("#" + childMenu).css("display", "block");

});

/**
 * 加号按钮,点击一次商品数目加1
 */
function add(obj) {

    var preInput = $(obj).prev();

    var quantityOrdered = parseInt(preInput.val());

    if (quantityOrdered >= 199) {
        alert(codeMessage.error7);
        return false;
    }

    var number = quantityOrdered + 1;

    //将数量加1
    preInput.val(number);

    return true;
}

/**
 * 减号按钮,点击一次商品数目减1
 */
function sub(obj) {

    var preInput = $(obj).next();

    var quantityOrdered = parseInt(preInput.val());

    if (quantityOrdered <= 1) {
        alert(codeMessage.error6);
        return false;
    }

    var number = quantityOrdered - 1;

    //将数量加1
    preInput.val(number);

    return true;
}

/**
 * 主页面的订购按钮添加购物事件
 */
function mainWindowOrderBtn() {
    $.regCustomerPage.addToBuyCart($(".pro_number_input"));
}


/**
 * 给弹出黑幕的订购按钮添加放购物事件
 */
function orderModelBtn() {
    $.regCustomerPage.addToBuyCart($(".pro_number_input2"));
    $('.ui-dialog').css("display", "none");
    $(".pro_number_input2").val(1);
}

/**
 * 购物车加号按钮事件
 * @param obj
 */
function shopCartAdd(obj) {
    if (add(obj)) {
        $(".pro_numbers_input").val(1);
        $.regCustomerPage.addToBuyCart($(".pro_numbers_input"));
    }

}

/**
 * 购物车减好按钮
 * @param obj
 */
function shopCartSub(obj) {

    if (sub(obj)) {
        $(".pro_numbers_input").val(-1);
        $.regCustomerPage.addToBuyCart($(".pro_numbers_input"));
    }

}

/**
 * 删除购物车中的商品
 */
function delDishesFromCart() {

    var result = confirm("你真的要删除该餐品吗?");

    if (result) {

        var dsId = $(".pro_numbers_input").attr("dsId");

        $.ajax({
            url: "delOrderItemFromShopCart.action",
            type: "POST",
            dataType: "json",
            data: {
                requestData: dsId
            },
            success: function (data) {
                updateShopCart();
            }
        });
    }

}

/**
 * 更新购物车信息
 *
 * @param data
 */
function updateShopCart() {

    $.ajax({
        url: "getShopCartInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            //添加购物车成功,修改相应页面
            var d = eval(data);

            //清空购物车的信息
            $("#cart_menus").html("");

            //购物车中商品信息
            for (var x = 0; x < data.orderItems.length; x++) {
                $("#cart_menus").append("<li>" +
                    "<div class='pro_title'>" + data.orderItems[x].dishesName + "</div>" +
                    "<div class='del'>" +
                    "<a href='javascript:void(0);' onclick='delDishesFromCart();'></a></div>" +
                    "<div class='pro_numbers'><a href='javascript:void(0);' onclick='shopCartSub(this);' style='cursor: pointer;'class='doMinus'>" +
                    "<img src='images/minus_icon_2s.gif' >" +
                    "</a>" +
                    "<input type='text' class='pro_numbers_input' dsId='" + data.orderItems[x].dsId + "'value='" + data.orderItems[x].quantity + "' maxlength='2'disabled='disabled'>" +
                    "<a href='javascript:void(0);' style='cursor: pointer;' onclick='shopCartAdd(this);' class='doPlus'>" +
                    "<img src='images/plus_icon_2s.gif'>" +
                    "</a>" +
                    "</div>" +
                    "<div class='price'>" + data.orderItems[x].productCost.toFixed(2) + "</div>" +
                    "</li>");
            }

            //修改购物车中商品数量
            $("#tatalnum").html(d.productAmount);

            //修改费用信息
            $("#productCost").html(d.productCost.toFixed(2));

            //修改运费信息,保留两位小数
            $("#deliverCost").html(d.deliverCost.toFixed(2));

            //修改总费用
            $("#totalCost").html(d.totalCost.toFixed(2));

        }
    });

}