/**
 * Created by Shinelon on 2018/5/1.
 */
var table;

$(function () {

    /**
     * 加载完毕后，ajax请求后台将所有餐点名称数据
     */
    $.ajax({
        url: "./queryMealType.action",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var arr = eval(data);
            for (var x = 0; x < arr.length; x++) {
                $("#addMealType").append("<option>" + arr[x] + "</option>");
                $("#editMealType").append("<option>" + arr[x] + "</option>");
            }
        }
    });

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
        sAjaxSource: "./pagesDishesType.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "dishesTypeName"},
            {data: "mealTypeName"},
            {data: "mgId"},
            {data: "createTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 6,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-primary btn-lg edit' style='margin-left: 200px;' onclick='openEditDishesTypeModel(this);' dtId=" + obj.dtId + ">编辑</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' dtId=" + obj.dtId + "></input>";
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

//清空添加菜品种类模态框
function resetAddDishesTypeModel() {

    //清空模态框中的内容
    $("#addDishesTypeName").val("");

}

//打开添加菜品种类模态框
function openAddDishesTypeModel() {

    //清空添加菜品种类模态框
    resetAddDishesTypeModel();

    //弹出模态框
    $("#addDishesTypeBtn").click();

}

//打开编辑菜品种类模态框
function openEditDishesTypeModel(obj) {

    var dtId = $(obj).attr("dtId");

    //弹出模态框
    $("#editDishesTypeBtn").click();

    //获取该条记录数据
    getDishesDataByDtId(dtId);


}

//关闭编辑菜品种类模态框
function closeEditDishesTypeModel() {

    //关闭模态框
    $("#editDishesTypeBtn").click();
}

//关闭添加菜品种类模态框
function closeAddDishesTypeModel() {

    //关闭模态框
    $("#addDishesTypeBtn").click();

}

//封装新增菜品种类信息
function encapsulAddDishesType() {

    var dishesType = {
        mgId: $("#addMgId").attr("name"),
        dishesTypeName: $("#addDishesTypeName").val(),
        mealTypeName: $("#addMealType").val()
    };

    return dishesType;

}

//封装编辑菜品种类信息
function encapsulEditDishesType() {

    var dishesType = {
        mgId: $("#editMgId").attr("name"),
        dishesTypeName: $("#editDishesTypeName").val(),
        mealTypeName: $("#editMealType").val(),
        dtId: $("#editDtId").val()
    };

    return dishesType;

}

//校验添加输入信息
function checkAddDishesTypeCode() {

    /*校验表单*/
    if ($("#dishesTypeName").val() == "") {
        alert("菜品种类不能为空");
        return false;
    }
    if ($("#mealTypeName").val() == "") {
        alert("餐点类型不能为空");
        return false;
    }
    if ($("#mgId").val() == "") {
        alert("ID不能为空");
        return false;
    }

    return true;

}

//校验编辑输入信息
function checkEditDishesTypeCode() {

    /*校验表单*/
    if ($("#editDishesTypeName").val() == "") {
        alert("菜品种类不能为空");
        return false;
    }
    if ($("#editMealType").val() == "") {
        alert("餐点类型不能为空");
        return false;
    }
    // if ($("#editMgId").val() == "") {
    //     alert("ID不能为空");
    //     return false;
    // }

    return true;

}

//发送添加菜品种类请求
function sendCreateDishesTypeRequest() {

    var flag = checkAddDishesTypeCode();

    if (flag) {

        var dishesTypeData = encapsulAddDishesType();

        $.ajax({
            url: "addDishesType.action",
            type: "POST",
            dataType: "json",
            data: {
                dishesTypeData: JSON.stringify(dishesTypeData)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    //关闭添加模态框
                    closeAddDishesTypeModel();

                    //表格刷新
                    table.api().draw(false);
                }

            }
        })

    } else {

    }

}

//删除菜品种类
function deleteDishesType() {

    if (confirm("您确定要删除餐点信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("dtId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteDishesType.action",
            type: "POST",
            dataType: "json",
            data: {
                dtIds: JSON.stringify(chId)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {
                    table.api().draw(false);
                }

            }
        });

    } else {
        table.api().draw();
        $("input[class='checkbox']").removeAttr("checked");
        $("input[class='checkboxMain']").removeAttr("checked");
    }


}

//获取指定dtId的数据
function getDishesDataByDtId(dtId) {

    $.ajax({
        url: "getSpecifyDishesType.action",
        type: "POST",
        dataType: "json",
        data: {
            dtId: dtId
        },
        success: function (data) {

            var returnData = eval(data);

            /**
             * {
                    "body": {
                        "createTime": "2018-05-26 10:11:26",
                        "dishesTypeName": "握的大饭团",
                        "dtId": 4,
                        "mealTypeName": "早餐",
                        "mgId": 2,
                        "updateTime": "2018-05-26 10:11:26"
                    },
                    "head": true
                }
             */

            if (returnData.head) {

                var body = eval(returnData.body);

                $("#editDtId").val(body.dtId);
                $("#editDishesTypeName").val(body.dishesTypeName);
                $("#editMealType").val(body.mealTypeName);

            } else {

                alert(returnData.body);

            }

        }
    });

}

//保存编辑
function saveEdit() {

    var flag = checkEditDishesTypeCode();

    if (flag) {

        var dishesTypeData = encapsulEditDishesType();

        $.ajax({
            url: "modifyDishesType.action",
            type: "POST",
            dataType: "json",
            data: {
                dishesType: JSON.stringify(dishesTypeData)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    table.api().draw(false);

                    closeEditDishesTypeModel();

                }

            }
        });

    } else {

        alert("添加餐品种类失败!");

    }

}