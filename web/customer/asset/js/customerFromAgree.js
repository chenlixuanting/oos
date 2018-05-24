/**
 * Created by Shinelon on 2018/5/12.
 */
$(function () {

    $("input[name='gender']").click(
        function () {
            $("input[name='gender'][checked='checked']").removeAttr("checked");
            $(this).attr("checked", "checked");
        }
    );

    /**
     * 请求CustomerRegAgree.action保存新用户的信息
     */
    $("#saveAddressBtn").click(
        function () {
            /*校验*/
            var cityName = $("#cityName").val();
            var roadName = $("#roadName").val();
            var addressDetial = $("#addressDetial").val();
            var linkman = $("#linkman").val();
            var linkphone = $("#linkphone").val();
            var reg = /^(\+\d{2,3}\-)?\d{11}$/;

            if (cityName == "") {
                alert("送餐城市不能为空");
                return false;
            }
            if (roadName == "") {
                alert("路名/小区名不能为空");
                return false;
            }
            if (addressDetial == "") {
                alert("后续不能为空");
                return false;
            }
            if (linkman == "") {
                alert("联系人不能为空");
                return false;
            }
            if (linkphone == "") {
                alert("联系电话不能为空");
                return false;
            }
            if (!reg.test(linkphone)) {
                alert("手机号输入错误");
                return false;
            }

            var customerData = {
                cityName: $("#cityName").val(),
                roadName: $("#roadName").val(),
                addressDetial: $("#addressDetial").val(),
                sex: $("input[name='gender'][checked='checked']").val(),
                username: $("#linkman").val(),
                mobile: $("#linkphone").val()
            };

            $.ajax({
                url: "CustomerRegAgree.action",
                type: "POST",
                dataType: "json",
                data: {
                    customerData: JSON.stringify(customerData)
                },
                success: function (data) {

                    var returnData = eval(data);

                    if (returnData.head) {

                        //跳转到下一个页面
                        location.assign("customerConfirm.jsp");
                    } else {

                        //提示错误信息
                        alert(returnData.body);
                    }

                }
            });
        }
    );

    //给日历按钮绑定事件，点击则清空地址栏
    $(".add_icon").click(function () {
        $("#cityName").val("");
    });

});