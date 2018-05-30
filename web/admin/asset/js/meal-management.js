/**
 * Created by Shinelon on 2018/4/29.
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
        // bPaginate: true,  //是否显示分页
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
        sAjaxSource: "./pagesMealType.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "mealTypeName"},
            {data: "startTime"},
            {data: "endTime"},
            {data: "mgId"},
            {data: "createTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 7,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-primary btn-lg edit' onclick='openEditModel(this);' style='margin-left: 130px;' mtId='" + obj.mtId + "'>编辑</a>";
            }
        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' mtId='" + obj.mtId + "'></input>";
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

//打开添加模态框
function openAddModel() {

    //清空新增模态框
    resetAddModel();

    //打开新增模态框
    $("#addModelBtn").click();

}

//打开编辑模态框
function openEditModel(obj) {

    var mtId = $(obj).attr("mtId");

    //清空编辑模态框
    resetEditModel();

    getSpecifyMealType(mtId);

    $("#editModelBtn").click();

}

//关闭添加模态框
function closeAddModel() {

    //清空新增模态框
    resetAddModel();

    //关闭新增模态框
    $("#addModelBtn").click();

}

//关闭编辑模态框
function closeEditModel() {

    //清空编辑模态框
    resetEditModel();

    $("#editModelBtn").click();

}

//清空添加模态框中的内容
function resetAddModel() {

    //清空模态框中的内容
    $("#addMealTypeName").val("");
    $("#addStartTime").val("");
    $("#addEndTime").val("");

}

//清空编辑模态框中的内容
function resetEditModel() {

    //清空模态框中的内容
    $("#editMealTypeName").val("");
    $("#editStartTime").val("");
    $("#editEndTime").val("");
    $("#mtId").val("");

}

//封装新增餐点数据
function encapsulAddData() {

    var mealData = {
        mgId: $("#addMgId").attr("name"),
        mealTypeName: $("#addMealTypeName").val(),
        startTime: $("#addStartTime").val(),
        endTime: $("#addEndTime").val()
    };

    return mealData;
}

//封装编辑餐点数据
function encapsulEditData() {

    var editData = {
        startTime: $("#editStartTime").val(),
        endTime: $("#editEndTime").val(),
        mtId: $("#mtId").val(),
        mealTypeName: $("#editMealTypeName").val(),
        mgId: $("#editMgId").attr("name")
    };

    return editData;

}

//编辑模态框检验代码
function editMealCheckCode() {

    var reg = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;  //时间正则表达式

    if ($("#editMealTypeName").val() == "") {
        alert("点餐名称不能为空");
        return false;
    }

    if ($("#mtId").val() == "") {
        alert("编辑的餐点类型不存在!");
        return false;
    }

    if ($("#editMgId").attr("name") == "") {
        alert("管理员账号失效,请重新登录!");
        return false;
    }

    if (!reg.test($("#editStartTime").val())) {
        alert("起始时间所输入的字符不符要求,标准格式：HH:MM");
        return false;
    }

    if (!reg.test($("#editEndTime").val())) {
        alert("终止时间所输入的字符不符要求,标准格式：HH:MM");
        return false;
    }

    return true;

}

//添加模态框校验代码
function addMealCheckCode() {

    var reg = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/;  //时间正则表达式

    if ($("#addMealTypeName").val() == "") {
        alert("点餐名称不能为空");
        return false;
    }

    if (!reg.test($("#addStartTime").val())) {
        alert("起始时间所输入的字符不符要求,标准格式：HH:MM");
        return false;
    }

    if (!reg.test($("#addEndTime").val())) {
        alert("终止时间所输入的字符不符要求,标准格式：HH:MM");
        return false;
    }

    if ($("#addMgId").attr("name") == "") {
        alert("管理员账号失效，请重新登录!");
        return false;
    }

    return true;
}

//新增餐点事件
function addMealEvent() {

    //校验输入
    var flag = addMealCheckCode();

    if (flag) {

        //封装新增餐点数据
        var mealData = encapsulAddData();

        //发送ajax请求新增餐点信息
        $.ajax({
            url: "./addMealType.action",
            type: "POST",
            dataType: "json",
            data: {
                addData: JSON.stringify(mealData)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    //dataTable当前页重绘
                    table.dataTable().fnDraw(false);

                    //关闭添加模态框
                    closeAddModel();
                }

            }
        });

    } else {
        alert("添加餐点类型失败!");
    }

}

//编辑餐点时间
function editMealEvent() {

    //输入校验
    var flag = editMealCheckCode();

    if (flag) {

        var editData = encapsulEditData()

        $.ajax({
            url: "modifyMealType.action",
            type: "POST",
            dataType: "json",
            data: {
                editData: JSON.stringify(editData)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {
                    table.api().draw();
                    closeEditModel();
                }

            }
        });

    } else {
        alert("编辑餐点类型失败!");
    }

}

//删除餐点事件
function deleteMealType() {

    if (confirm("您确定要删除餐点信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("mtId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteMealType.action",
            type: "POST",
            dataType: "json",
            data: {
                mtIds: JSON.stringify(chId)
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

//获取指定mtId的餐点新
function getSpecifyMealType(mtId) {


    $.ajax({
        url: "getSpecifyMealType.action",
        type: "POST",
        dataType: "json",
        data: {
            mtId: mtId
        },
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                $("#editMealTypeName").val(body.mealTypeName);
                $("#editStartTime").val(body.startTime);
                $("#editEndTime").val(body.endTime);
                $("#mtId").val(body.mtId);

            } else {
                alert(returnData.body);
            }

        }
    });

}