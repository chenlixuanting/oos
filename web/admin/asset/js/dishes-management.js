/**
 * Created by Shinelon on 2018/5/1.
 */
$(function () {

    $("#saveChange").on('click', function () {
        /*校验表单*/
        var reg1 = /^([1-9]\d*|0)(\.\d{1,2})?$/;
        var reg2 = /^[+]{0,1}(\d+)$/;
        var reg3 = /^[a-zA-Z]:(\\.+)(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$/;
        if ($("#dishesName").val() == "") {
            alert("菜品名称不能为空");
            return false;
        }
        if ($("#dishesType").val() == "") {
            alert("菜品种类不能为空");
            return false;
        }
        if (!reg1.test($("#price").val())) {
            alert("到家格式有错且菜品单价最多精确到小数点后两位");
            return false;
        }
        if (!reg2.test($("#stock").val())) {
            alert("请填写正整数");
            return false;
        }
        if ($("#mgId").val() == "") {
            alert("ID不能为空");
            return false;
        }
        if (!reg3.test($("#headPicture").val())) {
            alert("请上传 jpg、JPG、gif、GIF、png、PNG、bmp、BMP、等常用图片格式");
            return false;
        }
        if ($("#describe").val() == "") {
            alert("简介不能为空");
            return false;
        }
    });

    /**
     * 加载完毕后，ajax请求后台将所有餐点名称数据
     */
    var getMealTypeData = function () {
        $.ajax({
            url: "./queryDishesType.action",
            type: "POST",
            dataType: "json",
            success: function (data) {
                var arr = eval(data);
                for (var x = 0; x < arr.length; x++) {
                    $("#dishesType").append("<option>" + arr[x] + "</option>");
                }
            }
        });
    };

    getMealTypeData();

    /**
     * 删除
     */

    /**
     * 加载DataTable
     */
    var table = $("#dataTable").dataTable({

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
                return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='btn btn-primary btn-lg check' dsId='" + obj.dsId + "'>查看</a>" + "&nbsp;&nbsp;" +
                    "<a class='btn btn-danger btn-lg edit' dsId='" + obj.dsId + "'>编辑</a>";
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

    /**
     * 查看操作
     */
    $(".check").on('click', function () {

        var dsId = this.getAttribute("dsId");

        //ajax请求
        $.ajax({
            url: "./queryByDishesId.action",
            type: "POST",
            dataType: "json",
            data: {
                id: dsId
            },
            success: function (data) {

                var d = eval(data);

                //更改模态框标题
                $("#infoModelTilte").html("查看");

                //弹出模态框
                $("#modelBtn").click();

                //菜品名称
                $("#dishesName").attr("disabled", true);
                $("#dishesName").val(d.dishesName);

                //菜品种类??/
                $("#dishesTypeBox").css("display", "none");

                //菜品单价
                $("#price").attr("disabled", true);
                $("#price").val(d.price);

                //库存
                $("#stock").attr("disabled", true);
                $("#stock").val(d.stock);

                //创建时间
                $("#createTime").attr("disabled", true);
                $("#createTimeDiv").css("display", "block");
                $("#createTime").val(d.createTime);

                //更新时间
                $("#updateTime").attr("disabled", true);
                $("#updateTimeDiv").css("display", "block");
                $("#updateTime").val(d.createTime);

                //管理员ID
                $("#mgId").attr("disabled", true);

                //图片
                $("#dishesPic").attr("src", $("#goods_pic_addrs").val() + d.picAddress);
                $("#chosePicBtnBox").css("display", "none");

                //菜品简介
                $("#dishesInfo").attr("disabled", true);
                $("#dishesInfo").val(d.describe);
            }
        });

    });

    /**
     * 编辑操作
     */
    $(".edit").on('click', function () {

    });

    /**
     * 新增
     */
    $("#addBtn").on('click', function () {

        //菜品名称
        $("#dishesName").attr("disabled", false);
        $("#dishesName").val("");

        // 菜品种类
        $("#dishesTypeBox").css("display", "block");
        $("#dishesType").attr("disabled", false);

        //菜品单价
        $("#price").attr("disabled", false);
        $("#price").val("");

        //库存
        $("#stock").attr("disabled", false);
        $("#stock").val("");

        //创建时间
        $("#createTime").attr("disabled", false);
        $("#createTimeDiv").css("display", "none");
        $("#createTime").val("");

        //更新时间
        $("#updateTime").attr("disabled", false);
        $("#updateTimeDiv").css("display", "none");
        $("#updateTime").val("");

        //图片
        $("#dishesPic").attr("src", "");
        $("#chosePicBtnBox").css("display", "block");

        $("#mgId").attr("disabled", false);

        //菜品简介
        $("#dishesInfo").attr("disabled", false);
        $("#dishesInfo").val("");

        //更改模态框标题
        $("#infoModelTilte").html("新增");

        //弹出模态框
        $("#modelBtn").click();

    });

    $("#closeModel").on('click', function () {
        $("#removeBtn").click();
    });

});