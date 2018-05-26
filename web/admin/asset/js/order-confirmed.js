/**
 * Created by Shinelon on 2018/5/20.
 */
$(function () {

    /**
     * 神一般的错误!每次都给$("#saveChange").on('click', function () 一个新的事件，，导致第二次时一次性发生两次请求
     */

    /**
     * 新增
     */
    $("#addBtn").click(function () {

        //清空模态框中的内容
        $("#mealTypeName").val("");
        $("#startTime").val("");
        $("#endTime").val("");

        //更改模态框标题
        $("#infoModelTilte").html("新增");

        //弹出模态框
        $("#modelBtn").click();
    });

    /**
     * 加载DataTable
     */
    var table = $("#dataTable").dataTable({

        ordering: false,//是否启用排序
        bLengthChange: false,
        // bPaginate: true,  //是否显示分页
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
        sAjaxSource: "./pagesCurrentOrder.action",//这个是请求的地址
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
                var id = obj.cid;
                return "<a class='btn btn-success btn-small edit' style='margin-top: 5px;' id=" + id + ">确认订单</a>";
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