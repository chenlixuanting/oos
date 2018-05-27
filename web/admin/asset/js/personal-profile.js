/**
 * Created by Shinelon on 2018/5/20.
 */
$(function () {

    //通过ajax加载当前管理员
    $.ajax({
        url: "getCurrentAdministratorInfo.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var info = eval(data);

            $("#creator").val(info.creator);
            $("#maximumAuthority").val(info.maximumAuthority);
            $("#mgId").val(info.mgId);
            $("#password").val(info.password);
            $("#username").val(info.username);

        }
    });

    $("#reset").click(function () {
        location.assign("index.jsp");
    });

    $("#submit").click(function () {

        var newPassword = $("#newPassword").val();
        var reNewPassword = $("#reNewPassword").val();

        if (newPassword != reNewPassword) {
            alert("两次密码输入不一致!");
            $("#newPassword").val("");
            $("#reNewPassword").val("");
            return;
        }

        $.ajax({
            url: "resetPassword.action",
            type: "POST",
            dataType: "json",
            data: {
                newPassword: newPassword
            },
            success: function (data) {

                var d = eval(data);

                var flag = d.head == "true" ? true : false;

                if (flag) {
                    alert("修改密码成功！");
                    location.assign("personal-profile.jsp");
                } else {
                    alert("修改密码失败!");
                    $("#newPassword").val("");
                    $("#reNewPassword").val("");
                }

            }
        });

    });

});