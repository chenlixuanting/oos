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

                    var d = eval(data);

                    if (d.head) {
                        location.assign("customerConfirm.jsp");
                    } else {

                    }

                }
            })
        }
    )
});