$(function () {

    /**
     * 禁用浏览器回退功能
     */
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, 'orderLogin.jsp');
            window.history.forward(1);
        });
    }
    window.history.pushState('forward', null, 'orderLogin.jsp'); //在IE中必须得有这两行
    window.history.forward(1);

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
    function userLogin() {

        var loginData = {
            mobile: $("#mobi").val(),
            password: $("#password_text").val(),
            verifyCode: $("#verifyCode").val()
        };

        var reg = /^(\+\d{2,3}\-)?\d{11}$/;

        //校验手机号码是否正确
        if (!reg.test(loginData.mobile)) {
            alert("你输入的手机号码有误！");
            return;
        }

        if (loginData.password == "") {
            alert("密码不能为空!");
            return;
        }

        if (loginData.verifyCode == "") {
            alert("验证码不能为空!");
            return;
        }

        $.ajax({
            url: "UserLogin.action",
            type: 'POST',
            dataType: 'json',
            data: {
                loginData: JSON.stringify(loginData)
            },
            success: function (data) {

                var returnData = eval(data);

                //更新验证码
                refreshVerifyCode();

                if (returnData.head) {

                    $("#loginSubmit").off("click");

                    $("#loginSubmit").click(isRegister);

                    $("#password").val("请输入密码");
                    $("#password").attr("type", "text");
                    $("#verifyCode").val("请输入验证码");
                    // $("#mobi").val("请输入手机号");

                    $("#showPwd").css("display", "none");
                    $("#showVerifyCode").css("display", "none");

                    //跳转到customer.jsp
                    location.assign("customer.jsp");

                } else {

                    //提示错误新
                    alert(returnData.body);

                    if (returnData.body == "密码输入错误!") {

                        $("#verifyCode").val("");

                        $("#password_text").val("");

                        $("#password_text").click("");

                    } else if (returnData.body == "验证码输入错误!") {

                        //清空验证码输入框，并聚集焦点
                        $("#verifyCode").val("");

                        $("#verifyCode").click();

                    } else if (returnData.body = "账号不存在!") {

                        $("#loginSubmit").off("click");

                        $("#loginSubmit").click(isRegister);

                        $("#password_text").val("请输入密码");
                        $("#password_text").attr("type", "text");
                        $("#verifyCode").val("请输入验证码");
                        $("#mobi").val("请输入手机号");

                        $("#showPwd").css("display", "none");
                        $("#showVerifyCode").css("display", "none");

                    }
                }
            }
        });
    };

    function isRegister() {

        var mobileData = {
            mobile: $("#mobi").val()
        };

        var reg = /^(\+\d{2,3}\-)?\d{11}$/;

        //校验手机号码是否正确
        if (!reg.test(mobileData.mobile)) {
            alert("你输入的手机号码有误！");
            return;
        }

        $.ajax({
            url: "./LoginValidate.action",
            type: 'POST',
            dataType: 'json',
            data: {
                mobileData: JSON.stringify(mobileData)
            },
            success: function (info) {

                var returnData = eval(info);

                if (returnData.head) {

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

    // 当点击提交按钮时，ajax校验该账号是否注册
    $("#loginSubmit").click(isRegister);

});

/*
 * 刷新验证码
 * */
//刷新验证码
function refreshVerifyCode() {
    $("#verifyCodeImg").attr("src", pageUrls.verifyCodeAddress + new Date().getTime());
}
