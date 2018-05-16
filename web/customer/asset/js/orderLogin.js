$(function () {

    // 当输入框被点击时触发事件
    // 清除输入框中内容
    $("#mobi").on('click', function () {
        var content = $("#mobi").val();
        if (content == '请输入手机号') {
            $("#mobi").val("");
        }
    });

    // 当输入框失去焦点时触发事件
    // 当失去焦点时，判断是否应该恢复input中的提示内容
    $("#mobi").on('blur', function () {
        var content = $("#mobi").val();
        if (content == null || content.trim().length == 0) {
            $("#mobi").val("请输入手机号");
        }
    });

    $("#password_text").on('click', function () {
        var content = $("#password_text").val();
        if (content == '请输入密码') {
            $("#password_text").val("");
            $("#password_text").attr("type", "password");
        }
    });

    $("#password_text").on('blur', function () {
        var content = $("#password_text").val();
        if (content == null || content.trim().length == 0) {
            $("#password_text").val("请输入密码");
            $("#password_text").attr("type", "text");
        }
    });

    /**
     * 用户登陆
     */
    var userLogin = function () {

        $("#showVerifyCode").css("display", "block");

        //解绑click事件
        $("#loginSubmit").off("click");

        $("#loginSubmit").click(function () {
            var loginData = {
                mobile: $("#mobi").val(),
                password: $("#password_text").val(),
                verifyCode: $("#verifyCode").val()
            };
            $.ajax({
                url: "./UserLogin.action",
                type: 'POST',
                dataType: 'json',
                data: {
                    loginData: JSON.stringify(loginData)
                },
                success: function (data) {

                    var d = eval(data);
                    var flag = d.head == "true" ? true : false;

                    if (flag) {
                        //跳转到continueShopping.jsp
                        location.assign("continueShopping.jsp");
                    } else {

                        if (d.body == "error0") {

                            //提示密码输入错误
                            alert(codeMessage.error0);

                            //清空密码输入框,并将聚集焦点
                            $("#password_text").val("");

                            $("#password_text").click();

                        } else if (d.body == "error1") {

                            //提示密码输入错误
                            alert(codeMessage.error1);

                            //更新验证码
                            $.orderLogin.refreshVerifyCode($("#verifyCodeImg"));

                            //清空验证码输入框，并聚集焦点
                            $("#verifyCode").val("");

                            $("#verifyCode").click();
                        }

                    }
                }
            });
        });
    };

    /**
     * 判断用户手机号码是否注册
     */
    var isRegister = function () {

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
                    $(".Loginboxbg03").css("display", "block");
                    $(".wangji").css("display", "block");

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

    // 当点击提交按钮时，ajax校验该账号是否注册
    $("#loginSubmit").click(isRegister);

    /*
     * 刷新验证码
     * */
    $.orderLogin = {
        refreshVerifyCode: function (obj) {
            var $verifyCode = $(obj);
            $verifyCode.attr("src", "./getRandVerifyCode.action?" + new Date().getTime());
        }
    };

});