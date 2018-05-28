/**
 * Created by Shinelon on 2018/5/28.
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
        iDisplayLength: 10,//指定也显示10条
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
        sAjaxSource: "./pagesPendingDeliveryOrder.action",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "orId"},
            {data: "username"},
            {data: "receiverName"},
            {data: "receiverSex"},
            {data: "receiverMobile"},
            {data: "receiverAddress"},
            {data: "receiverTime"},
            {data: "totalCost"},
            {data: "productAmount"},
            {data: "deliverCost"},
            {data: "productCost"},
            {data: "orderStatus"},
            {data: "payType"},
            {data: "creatorTime"},
            {data: "updateTime"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 16,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<a class='btn btn-success btn-small edit' style='margin-top: 5px;' onclick='confirmedOrder(this);' orId='" + obj.orId + "'>确认<br/>发货</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                return "<input type='checkbox' class='checkbox' orId='" + obj.orId + "'/>";
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
 * 删除订单
 */
function deleteOrder() {

    if (confirm("您确定要删除用户信息吗?")) {

        var checkBox = $("input[class='checkbox']");

        var chId = new Array();

        for (var x = 0; x < checkBox.length; x++) {
            if ($(checkBox[x]).is(":checked"))
                chId.unshift(($(checkBox[x]).attr("orId")));
        }

        if (chId.length == 0) {
            alert("你还没有选择要删除的元素");
            return;
        }

        $.ajax({
            url: "deleteOrder.action",
            type: "POST",
            dataType: "json",
            data: {
                orIds: JSON.stringify(chId)
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
 * 确认订单
 */
function confirmedOrder(obj) {

    var orId = $(obj).attr("orId");

    $.ajax({
        url: "confirmedOrder.action",
        type: "POST",
        dataType: "json",
        data: {
            orId: orId
        },
        success: function (data) {

            var returnData = eval(data);

            alert(returnData.body);

            if (returnData.head) {
                table.api().draw(false);
            }

        }
    });

}