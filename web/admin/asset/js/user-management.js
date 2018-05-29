/**
 * Created by Shinelon on 2018/5/21.
 */
var table;

$(function () {

    /**
     * 加载DataTable
     */
    table = $("#dataTable").dataTable({

        ordering: false,//是否启用排序
        bLengthChange: false,
        searching: false,//搜索
        iDisplayLength: 10,//每页显示10行
        language: {

            paginate: {//分页的样式内容。
                previous: "上一页",
                next: "下一页",
                first: "第一页",
                last: "最后"
            },
            zeroRecords: "没有内容",//table tbody内容为空时，tbody的内容。
            //下面三者构成了总体的左下角的内容。
            info: "总共_PAGES_ 页，显示第_START_ 到第 _END_ ，筛选之后得到 _TOTAL_ 条，初始_MAX_ 条 ",//左下角的信息显示，大写的词为关键字。
            infoEmpty: "0条记录",//筛选为空时左下角的显示。
            infoFiltered: ""//筛选之后的左下角筛选提示，
        },
        processing: true,//设置为true,就会有表格加载时的提示
        serverSide: true,
        sAjaxSource: "./pagesUser.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "username"},
            {data: "mobile"},
            {data: "password"},
            {data: "sex"},
            {data: "deliverAddress"},
            {data: "creatorTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 8,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-danger btn-lg edit' onclick='openEditModel(this);' style='margin-left: 50px;' usId='" + obj.usId + "'>编辑</a>";
            }
        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' chId='" + obj.usId + "'/>";
            }
        }],
        pagingType: "full_numbers"//分页样式的类型

    });

    /**
     * dataTable对调数据处理函数
     * @param sSource111
     * @param aoData111
     * @param fnCallback111
     */
    function retrieveData(sSource111, aoData111, fnCallback111) {
        $.ajax({
            url: sSource111,//这个就是请求地址对应sAjaxSource
            data: {"aoData": JSON.stringify(aoData111)},//这个是把datatable的一些基本数据传给后台,比如起始位置,每页显示的行数
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (result) {
                fnCallback111(result);//把返回的数据传给这个方法就可以了,datatable会自动绑定数据的
            },
            error: function (msg) {
            }
        });
    }

});

/**
 * 增加用户
 */
function addUserBtn() {

    //打开添加用户模态框
    openAddModel();

}

/**
 * 保存新增用户信息
 */
function saveAddUser() {

    //将新增用户信息封装成js对象
    var user = encapsulAddUser();

    //发送新增用户请求
    sendAddUserRequest(user);

}

/**
 * 保存编辑用户信息
 */
function saveEditUser() {

    var userData = encapsualEditUser();

    $.ajax({
        url: "modifyUser.action",
        type: "POST",
        dataType: "json",
        data: {
            userData: JSON.stringify(userData)
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                closeEditModel();
                table.api().draw(false);
            }
        }
    });

}

/**
 * 删除用户
 */
function deleteUser() {

    if (confirm("您确定要删除用户信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("chId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteUser.action",
            type: "POST",
            dataType: "json",
            data: {
                usIds: JSON.stringify(chId)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    for (var y = 0; y < chId.length; y++) {
                        table.api().draw(false);
                    }

                } else {

                }

            }
        });

    } else {
        table.api().draw();
        $("input[class='checkbox']").removeAttr("checked");
        $("input[class='checkboxMain']").removeAttr("checked");
    }

}

/**
 * 打开添加用户模态框
 */
function openAddModel() {

    //清除添加用户模态框数据
    resetAddModel();

    $("#addModelBtn").click();
}

/**
 * 关闭添加用户模态框
 */
function closeAddModel() {

    //清除添加用户模态框数据
    resetAddModel();

    openAddModel();
}

/**
 * 打开编辑用户模态框
 */
function openEditModel(obj) {

    var usId = $(obj).attr("usId");

    //通过usId获取用户信息
    $.ajax({
        url: "queryByUserId.action",
        type: "POST",
        dataType: "json",
        data: {
            usId: usId
        },
        success: function (data) {

            var returnData = eval(data);


            if (returnData.head) {

                var body = returnData.body;

                var defaultDeliverAddress = eval(body.defaultDeliverAddress);

                $("#editUsId").val(body.usId);

                $("#editUsername").val(body.username);

                $("#editUserMobile").val(body.mobile);

                $("#editUserSex").val(body.sex);

                $("#editUserPassword").val(body.password);

                $("#editUserDefaultReceiverAddress").val(defaultDeliverAddress.receiverAddress);

            }

        }
    });

    $("#editModelBtn").click();
}

/**
 * 关闭编辑用户模态框
 */
function closeEditModel() {
    openEditModel();
}

/**
 * 打开查看用户模态框
 */
function openCheckModel() {
    $("#checkModelBtn").click();
}

/**
 * 关闭查看用户模态框
 */
function closeCheckModel() {
    openCheckModel();
}

/**
 * 清除添加用户模态框数据
 */
function resetAddModel() {
}

/**
 * 清除编辑用户模态框数据
 */
function resetEditModel() {
}

/**
 * 清除查看用户模态框数据
 */
function resetCheckModel() {
}

/**
 * 封装新增用户信息为js对象
 */
function encapsulAddUser() {

    var user = {
        username: $("#addUsername").val(),
        mobile: $("#addUserMobile").val(),
        password: $("#addUserPassword").val(),
        sex: $("#addUserSex").val(),
        receiverName: $("#addUserDefaultReceiverName").val(),
        receiverMobile: $("#addUserDefaultReceiverMobile").val(),
        receiverAddress: $("#addUserDefaultReceiverAddress").val(),
        receiverSex: $("#addUserReceiverSex").val()
    };

    return user;

}

/**
 * 封装编辑用户信息为js对象
 */
function encapsualEditUser() {

    var editUser = {
        usId: $("#editUsId").val(),
        mobile: $("#editUserMobile").val(),
        password: $("#editUserPassword").val(),
        username: $("#editUsername").val(),
        sex: $("#editUserSex").val(),
        deliverAddress: $("#editUserDefaultReceiverAddress").val()
    }

    return editUser;

}

/**
 * 发送添加用户ajax请求
 */
function sendAddUserRequest(user) {

    $.ajax({
        url: "addUser.action",
        dataType: "json",
        type: "POST",
        data: {
            requestData: JSON.stringify(user)
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                table.api().draw();
                closeAddModel();
            } else {

            }

        }
    });

}

/**
 * 发送查看用户ajax请求
 */
function sendCheckUserRequest(usId) {
}

/**
 * 发送编辑用户的ajax请求
 */
function sendEditUserRequest(user) {
}