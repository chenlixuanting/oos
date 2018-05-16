/**
 * Created by Shinelon on 2018/4/29.
 */
$(function () {

    /*当登录按钮别点击时，发送ajax请求*/
    $("#loginBtn").on('click', function () {

        var loginData = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        $.ajax({
            url: "./adminLogin.action",
            data: {
                loginData: JSON.stringify(loginData)
            },
            type: "POST",
            dataType: "json",
            success: function (data) {

                var d = eval(data);

                var flag = d.head == "true" ? true : false;

                if (flag) {
                    alert("登录成功");
                    window.location.href = d.body;
                } else {
                    alert(d.body);
                }
            }

        });
    });

});