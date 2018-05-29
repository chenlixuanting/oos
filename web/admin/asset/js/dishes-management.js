/**
 * Created by Shinelon on 2018/5/1.
 */
var table;

$(function () {

    //加载菜品种类列表
    getMealTypeData();

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
        sAjaxSource: "./pagesDishes.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "dishesName"},
            {data: "dishesType"},
            {data: "price"},
            {data: "stock"},
            {data: "mgId"},
            {data: "createTime"},
            {data: "updateTime"},
            {data: null}
        ],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 8,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary btn-lg check' onclick='checkEvent(this);' dsId='" + obj.dsId + "'>查看</a>" + "&nbsp;&nbsp;" +
                    "<a class='btn btn-danger btn-lg edit' onclick='openEditModel(this);' dsId='" + obj.dsId + "'>编辑</a>";
            }
        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' dsId=" + obj.dsId + "></input>";
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

/**
 * 加载完毕后，ajax请求后台将所有餐点名称数据
 */
function getMealTypeData() {
    $.ajax({
        url: "./queryDishesType.action",
        type: "POST",
        dataType: "json",
        success: function (data) {
            var arr = eval(data);
            for (var x = 0; x < arr.length; x++) {
                $("#addDishesType").append("<option>" + arr[x] + "</option>");
                $("#editDishesType").append("<option>" + arr[x] + "</option>");
            }
        }
    });
};

//查看事件
function checkEvent(obj) {

    var dsId = $(obj).attr("dsId");

    //获取指定餐品的信息
    getOneDishesInfo(dsId);

    openCheckModel();

}

//打开查看模态框
function openCheckModel() {

    //打开查看模态框
    $("#checkModelBtn").click();
}

//关闭查看模态框
function closeCheckModel() {

    //关闭查看模态框
    $("#checkModelBtn").click();
}

//获取一条餐品信息
function getOneDishesInfo(dsId) {

    $.ajax({
        url: "queryByDishesId.action",
        dataType: "json",
        type: "POST",
        data: {
            id: dsId
        },
        success: function (data) {

            var returnData = eval(data);

            $("#checkDishesName").val(returnData.dishesName);

            $("#checkDishesType").append("<option>" + returnData.dishesType + "</option>");

            $("#checkPrice").val(returnData.price);

            $("#checkCreateTime").val(returnData.createTime);

            $("#checkUpdateTime").val(returnData.updateTime);

            $("#checkDishesPic").attr("src", pageUrls.customerAddress + returnData.picAddress);

            $("#picOperate").css("display", "none");

            $("#checkDishesInfo").val(returnData.describe);

        }
    });

}

//打开新增模态框
function openAddDishesModel() {

    //清空新增模态框
    resetAddDishesModel();

    //弹出模态框
    $("#addModelBtn").click();

}

//关闭新增模态框
function closeAddDishesModel() {

    //弹出模态框
    $("#addModelBtn").click();
}


//打开编辑模态框
function openEditModel(obj) {

    var dsId = $(obj).attr("dsId");

    $.ajax({
        url: "queryByDishesId.action",
        type: "POST",
        dataType: "json",
        data: {
            id: dsId
        },
        success: function (data) {

            var returnData = eval(data);

            $("#editRemoveBtn").click();

            $("#editDishesName").val(returnData.dishesName);

            $("#editDishesType").val(returnData.dishesType);

            $("#editPrice").val(returnData.price);

            $("#editStock").val(returnData.stock);

            $("#editDishesPic").attr("src", pageUrls.customerAddress + returnData.picAddress);

            $("#editDishesInfo").val(returnData.describe);

            $("#editDsId").val(returnData.dsId);
        }
    });

    //打开编辑模态框
    $("#editModelBtn").click();

}

//关闭编辑模态框
function closeEditModel() {

    //关闭编辑模态框
    $("#editModelBtn").click();

}

//清空新增模态框中的内容
function resetAddDishesModel() {

    $("#addDishesName").val("");

    $("#addPrice").val("");

    $("#addStock").val("");

    $("#addCreateTime").val("");

    $("#updateTimeDiv").val("");

    $("#addRemoveBtn").click();

    $("#addDishesInfo").val("");

}

//清空编辑模态框的内容
function resetEditDishesModel() {

    $("#editDishesName").val("");

    $("#editDishesType").val("");

    $("#editPrice").val("");

    $("#editStock").val("");

    $("#editDishesInfo").val("");

}

//编辑事件
function editEvent() {

}

//删除选中项
function deleteEvent() {

    if (confirm("您确定要删除餐点信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("dsId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteDishes.action",
            type: "POST",
            dataType: "json",
            data: {
                dsIds: JSON.stringify(chId)
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

/**
 * 校验添加模态框中的内容
 * @returns {boolean}
 */
function checkAddModel() {

    /*校验表单*/
    var reg1 = /^([1-9]\d*|0)(\.\d{1,2})?$/;
    var reg2 = /^[+]{0,1}(\d+)$/;
    var reg3 = /^[a-zA-Z]:(\\.+)(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/;
    if ($("#addDishesName").val() == "") {
        alert("菜品名称不能为空");
        return false;
    }
    if ($("#addDishesType").val() == "") {
        alert("菜品种类不能为空");
        return false;
    }
    if (!reg1.test($("#addPrice").val())) {
        alert("到家格式有错且菜品单价最多精确到小数点后两位");
        return false;
    }
    if (!reg2.test($("#addStock").val())) {
        alert("请填写正整数");
        return false;
    }
    if ($("#addMgId").attr("name") == "") {
        alert("ID不能为空");
        return false;
    }
    if (!reg3.test($("#headPicture").val())) {
        alert("请上传 jpg、JPG、gif、GIF、png、PNG、bmp、BMP、等常用图片格式");
        return false;
    }
    if ($("#addDishesInfo").val() == "") {
        alert("简介不能为空");
        return false;
    }

    return true;

};


