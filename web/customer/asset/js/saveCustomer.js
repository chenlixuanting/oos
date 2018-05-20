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

            var d = eval(data);

            $("#input_box_iphone").html(d.mobile);

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

        //请求将临时用户注册为正式用户
        $.ajax({
            url: "SaveCustomer.action",
            dataType: "json",
            type: "POST",
            data: {
                requestData: JSON.stringify(customerData)
            },
            success: function (data) {

                var d = eval(data);

                var flag = d.head == "true" ? true : false;

                //跳转到pay.jsp
                if (flag) {

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

});