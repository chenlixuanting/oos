/**
 * Created by Shinelon on 2018/5/21.
 */
$(function () {

    /**
     * 加载DataTable
     */
    var table = $("#dataTable").dataTable({

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
                var id = obj.cid;
                return "<a class='btn btn-primary btn-lg edit' id=" + id + ">查看</a>" + "<a class='btn btn-danger btn-lg edit' style='margin-left: 10px;' id=" + id + ">编辑</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                var id = obj.cid;
                return "<input type='checkbox' class='checkbox' id=" + id + "></input>";
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
function addUser() {

    //清除添加用户模态框数据
    resetAddModel();

    //打开添加用户模态框
    oppenAddModel();

}

/**
 * 打开添加用户模态框
 */
function oppenAddModel() {

    $("#addModelBtn").click();
}

/**
 * 关闭添加用户模态框
 */
function closeAddModel() {
    oppenAddModel();
}

/**
 * 打开编辑用户模态框
 */
function oppenEditModel() {
    $("#editModelBtn").click();
}

/**
 * 关闭编辑用户模态框
 */
function closeEditModel() {
    oppenEditModel();
}

/**
 * 打开查看用户模态框
 */
function oppenCheckModel() {
    $("#checkModelBtn").click();
}

/**
 * 关闭查看用户模态框
 */
function closeCheckModel() {
    oppenCheckModel();
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
}

/**
 * 封装编辑用户信息为js对象
 */
function encapsualEditUser() {
}

/**
 * 发送添加用户ajax请求
 */
function sendAddUserRequest(user) {
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