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
            mealType: "午餐"
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

    // $("#loginSubmit").click(function () {
    //     var User = $("#mobi").val();
    //     var reg = /^(\+\d{2,3}\-)?\d{11}$/;
    //     if (User == "") {
    //         alert("手机号码不能为空");
    //         return false;
    //     }
    //     if (!reg.test(User)) {
    //         alert("手机号输入错误");
    //         return false;
    //     }
    //     location.assign("customerFromAgree.jsp");
    // });


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

                    //清空商品列表标签
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
                            "<input type='button' class='order_btn_start' onclick='startOrder();'>" +
                            "</p>" +
                            "</div>" +
                            "</li>"
                        );

                    }

                }
            });

        }
    };

    // $("#startOrderBtn").click(startOrder);

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
                $("body").append("<div class='ui-widget-overlay' style='width: 1920px; height: 1080px; z-index: 1001;'></div>");

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

    };

    /**
     * 初始化订餐首页
     */
    $("#ChildMenu2").find('li').eq(0).find('a').trigger("click");
    $("#child2").attr("class", "minus_sign");
    $("#ChildMenu2").css("display", "block");

    //清空手机号码输入提示文字
    $("#mobi").click(function () {
        $(this).val("");
    });

    //清空密码输入提示文字
    $("#password").click(function () {
        $(this).val("");
        $(this).attr("type", "password");
    });

    //清空验证码输入提示文字
    $("#verifyCode").click(function () {
        $(this).val("");
    });

    //更新验证码
    $("#sendVerifyCodeBtn").click(function () {
        refreshVerifyCode();
    });

    /**
     * 判断用户手机号码是否注册
     */
    $("#loginSubmit").click(isRegister);

});

/**
 * 用户登陆
 */
function userLogin() {

    // refreshVerifyCode();

    var loginData = {
        mobile: $("#mobi").val(),
        password: $("#password").val(),
        verifyCode: $("#verifyCode").val()
    };

    $.ajax({
        url: "UserLogin.action",
        type: 'POST',
        dataType: 'json',
        data: {
            loginData: JSON.stringify(loginData)
        },
        success: function (data) {

            var d = eval(data);

            if (d.head) {

                $("#loginSubmit").off("click");

                $("#loginSubmit").click(isRegister);

                $("#password").val("请输入密码");
                $("#password").attr("type", "text");
                $("#verifyCode").val("请输入验证码");
                // $("#mobi").val("请输入手机号");

                $("#showPwd").css("display", "none");
                $("#showVerifyCode").css("display", "none");

                //更新验证码
                refreshVerifyCode();

                //跳转到continueShopping.jsp
                location.assign("customer.jsp");

            } else {

                if (d.body == "error0") {

                    //提示密码输入错误
                    alert(codeMessage.error0);

                    //清空密码输入框,并将聚集焦点
                    $("#password").val("");

                    refreshVerifyCode();

                    $("#verifyCode").val("");

                    $("#password").click();

                } else if (d.body == "error1") {

                    //提示密码输入错误
                    alert(codeMessage.error1);

                    //更新验证码
                    refreshVerifyCode();

                    //清空验证码输入框，并聚集焦点
                    $("#verifyCode").val("");

                    $("#verifyCode").click();

                } else if (d.body = "error3") {

                    alert(codeMessage.error3);

                    $("#loginSubmit").off("click");

                    $("#loginSubmit").click(isRegister);

                    $("#password").val("请输入密码");
                    $("#password").attr("type", "text");
                    $("#verifyCode").val("请输入验证码");
                    $("#mobi").val("请输入手机号");

                    $("#showPwd").css("display", "none");
                    $("#showVerifyCode").css("display", "none");

                    //更新验证码
                    refreshVerifyCode();

                }
            }
        }
    });
};


function isRegister() {

    var mobileData = {
        mobile: $("#mobi").val()
    };

    $.ajax({
        url: "./LoginValidate.action",
        type: 'POST',
        dataType: 'json',
        data: {
            mobileData: JSON.stringify(mobileData)
        },
        success: function (info) {

            var d = eval(info);

            var flag = d.head == "true" ? true : false;

            if (flag) {

                $("#showPwd").css("display", "block");
                $("#showVerifyCode").css("display", "block");
                $("#forgetPassword").css("display", "block");

                //解绑click事件
                $("#loginSubmit").off("click");

                /**
                 * 按钮绑定另一函数
                 */
                $("#loginSubmit").click(userLogin);

            } else {
                //未注册用户跳转到新增地址页面
                location.assign("customerFromAgree.jsp");
            }
        }
    });
};

function startOrder() {
    location.assign("orderLogin.jsp");
}

function refreshVerifyCode() {
    $("#verifyCodeImg").attr("src", pageUrls.verifyCodeAddress + new Date().getTime());
}