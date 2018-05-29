/**
 * Created by Shinelon on 2018/5/17.
 */
$(function () {

    //页面加载成功后,获取Session中保存的TemporaryUserInfo
    $.ajax({
        url: "getTemporaryUserInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                $("#input_box_iphone").html(body.mobile);

            } else {
                alert(returnData.body);
            }

        }
    });

    //更换性别radio的状态,绑定事件
    $(".sex").click(function () {
        $(".sex").removeClass('on');
        $(this).addClass("on");
    });

    //同意用户协议radio
    $("#clickAgree").click(function () {
        var value = $(this).attr("value");

        if (value == "0") {
            $(this).removeClass('un');
            $(this).attr("value", "1");
            $("#submit_btn").removeAttr("disabled");
        } else {
            $(this).addClass('un');
            $(this).attr("value", "0");
            $("#submit_btn").attr("disabled", "disabled");
        }

    });

    //返回上一步按钮
    $("#back_menu_btn1").click(function () {
        location.assign("cart.jsp");
    });

    //确定并保存个人信息按钮
    $("#submit_btn").click(function () {

        var customerData = {
            deliverName: $("#username").val(),
            password: $("#password").val(),
            deliverSex: $(".on").html()
        };

        if ($("#clickAgree").attr("value") == "0") {
            alert("您未同意用户协议!");
            return;
        }

        if (customerData.deliverName == "" || customerData.deliverName.trim() == "") {
            alert("客户姓名不能为空!");
            return;
        }

        if (customerData.password == "" || customerData.password.trim() == "") {
            alert("密码不能为空!");
            return;
        }

        //请求将临时用户注册为正式用户
        $.ajax({
            url: "SaveCustomer.action",
            dataType: "json",
            type: "POST",
            data: {
                requestData: JSON.stringify(customerData)
            },
            success: function (data) {

                var returnData = eval(data);

                if (returnData.head) {

                    //跳转到pay.jsp
                    alert(codeMessage.success0);
                    location.assign("regPay.jsp");

                } else {

                    //提示注册用户失败
                    alert(codeMessage.error5);

                    //跳转到登陆界面
                    location.replace("orderLogin.jsp");
                }
            }
        });

    });

    $("#username").click(function () {
        $("#username").val("");
    });

    //当鼠标悬停在查看密码图标上时
    $("#password").focus(function () {
        $("#password").attr("type", "text");
    });

    //当鼠标离开时
    $("#password").blur(function () {
        $("#password").attr("type", "password");
    });

});