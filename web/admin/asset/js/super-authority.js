/**
 * Created by Shinelon on 2018/5/20.
 */
var table;

$(function () {

    /**
     * 神一般的错误!每次都给$("#saveChange").on('click', function () 一个新的事件，，导致第二次时一次性发生两次请求
     */

    /**
     * 加载DataTable
     */
    table = $("#dataTable").dataTable({

        ordering: false,//是否启用排序
        bLengthChange: false,
        searching: false,//搜索
        iDisplayLength: 10,
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
        sAjaxSource: "./pagesAdministrator.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "username"},
            {data: "password"},
            {data: "maximumAuthority"},
            {data: "adminStatus"},
            {data: "creator"},
            {data: "creatorTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 8,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-primary btn-lg edit' style='margin-left: 60px;' onclick='editEvent(this);' mgId='" + obj.mgId + "'>编辑</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' mgId='" + obj.mgId + "'></input>";
            }
        }],
        pagingType: "full_numbers"//分页样式的类型

    });

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

//封装新增模态框中的管理员数据
function encapsulAddAdminData() {

    var adminData = {
        username: $("#addUsername").val(),
        password: $("#addPassword").val(),
        maximumAuthority: $("#addMaximumAuthority").val(),
        creator: $("#addCreator").val(),
        adminStatus: $("#addAdminStatus").val()
    };

    return adminData;

}

//封装编辑模态框中的管理员数据
function encapsulEditAdminData() {

    /**
     private long mgId;// 管理员ID
     private String username;// 账号
     private String password;// 密码
     private boolean maximumAuthority;// 最高权限
     private String creator;// 创建者
     private String adminStatus;//管理员状态
     private String creatorTime;// 创建时间
     private String updateTime;// 更新时间
     */

    /**
     *$("#editUsername").val(body.username);
     $("#editPassword").val(body.password);
     $("#editMaximumAuthority").val(body.maximumAuthority);
     $("#editCreator").val(body.creator);
     $("#editAdminStatus").val(body.editAdminStatus);
     $("#editMgId").val(body.mgId);
     */

    var editData = {
        mgId: $("#editMgId").val(),
        username: $("#editUsername").val(),
        password: $("#editPassword").val(),
        maximumAuthority: $("#editMaximumAuthority").val(),
        creator: $("#editCreator").val(),
        adminStatus: $("#editAdminStatus").val()
    }

    return editData;

}
//打开添加管理员模态框
function openAddAdminModel() {

    //清空添加管理员模态框
    resetAddModel();

    //打开新增模态框
    $("#addModelBtn").click();
}

//打开编辑管理员模态框
function openEditAdminModel() {

    $("#editModelBtn").click();
}

//关闭添加管理员模态框
function closeAddAdminModel() {

    //清空添加管理员模态框
    resetAddModel();

    $("#addModelBtn").click();
}

//关闭编辑管理员模态框
function closeEditAdminModel() {
    $("#editModelBtn").click();
}

//清空新增模态框
function resetAddModel() {

    $("#addUsername").val("");
    $("#addPassword").val("");
    $("#addMaximumAuthority").val("true");
    $("#addAdminStatus").val("启用");

}

//发生添加管理员请求
function sendAddAdminRequest() {

    //将新增管理信息封装成js对象
    var adminData = encapsulAddAdminData();

    $.ajax({
        url: "addAdministrator.action",
        type: "POST",
        dataType: "json",
        data: {
            adminData: JSON.stringify(adminData)
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                closeAddAdminModel();
                table.api().draw(false);
            }

        }
    });

}

//删除事件
function deleteEvent() {

    if (confirm("您确定要删除餐点信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("mgId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteAdministrator.action",
            type: "POST",
            dataType: "json",
            data: {
                mgIds: JSON.stringify(chId)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    table.api().draw(false);

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

//编辑事件
function editEvent(obj) {

    var mgId = $(obj).attr("mgId");

    //给编辑框赋初值
    getSpecifyByMgId(mgId);

    //打开编辑管理员模态框
    openEditAdminModel();

}

//发生编辑修改管理员请求
function sendEditAdminRequest() {

    var adminData = encapsulEditAdminData();

    $.ajax({
        url: "ModifyAdministrator.action",
        type: "POST",
        dataType: "json",
        data: {
            adminData: JSON.stringify(adminData)
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                table.api().draw(false);
                closeEditAdminModel();
            }

        }
    });

}

//获取指定mgId的管理员信息
function getSpecifyByMgId(mgId) {

    $.ajax({
        url: "getSpecifyAdministrator.action",
        type: "POST",
        dataType: "json",
        data: {
            mgId: mgId
        },
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                $("#editUsername").val(body.username);
                $("#editPassword").val(body.password);
                $("#editMaximumAuthority").val("" + body.maximumAuthority);
                $("#editCreator").val(body.creator);
                $("#editAdminStatus").val(body.adminStatus);
                $("#editMgId").val(body.mgId);

            } else {

                alert(returnData.body);
            }

        }
    });

}