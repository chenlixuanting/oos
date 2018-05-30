/**
 * Created by Shinelon on 2018/5/25.
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
        sAjaxSource: "pagesUnansweredComment.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "username"},
            {data: "content"},
            {data: "comStatus"},
            {data: "createTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 6,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-primary btn-lg edit' onclick='openReplyModel(this);' id=" + obj.coId + ">回复</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' id=" + obj.coId + "></input>";
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

//打开评论模态框
function openReplyModel(obj) {

    var coId = $(obj).attr("id");

    //清空模态框中的内容
    resetModelContent();

    //打开模态框
    $("#modelBtn").click();

    //获取该条coId信息并显示在页面上
    getUnansweredCommentBycoId(coId);

    $("#removeRow").val(coId);
}

//管理员回复评论
function replyComment() {

    var comData = {
        replyContent: $("#replyContent").val(),
        coId: $("#coId").val(),
        mgId: $("#adminname").attr("mgId")
    };

    /**
     * 校验评论内容
     */

    if (comData.replyContent == "") {
        alert("回复内容不能为空!")
        return;
    } else if (comData.coId == "") {
        alert("评论记录不存在!");
        return;
    } else if (comData.mgId == "") {
        alert("管理员账号失效,请重新登录!");
        return;
    }

    $.ajax({
        url: "modifyCommentStatus.action",
        type: "POST",
        dataType: "json",
        data: {
            comData: JSON.stringify(comData)
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                table.api().row($("#" + $("#removeRow").val())).remove().draw();
                closeReplyModel();
            }

        }
    });
}

//关闭评论模态框
function closeReplyModel() {
    $("#modelBtn").click();
}

//清除模态框中的内容
function resetModelContent() {
    $("#coId").val("");
    $("#username").val("");
    $("#comContent").val("");
    $("#replyContent").val("");
    $("#removeRow").val("");
}

//通过coId获取评论信息
function getUnansweredCommentBycoId(coId) {

    $.ajax({
        url: "queryByCommentId.action",
        type: "POST",
        dataType: "json",
        data: {
            coId: coId
        },
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {
                $("#username").val(returnData.body.username);
                $("#comContent").val(returnData.body.content);
                $("#coId").val(returnData.body.coId);
            } else {

                alert(returnData.body);

            }

        }
    });

}

