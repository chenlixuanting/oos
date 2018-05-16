$(function () {

    /*当编辑按钮被按下时,ajax更新数据库*/
    $("#saveChange").on('click', function () {

        var data = {
            cid: $("#cid").val(),
            customername: $("#customername").val(),
            sex: $("#sex").val(),
            mobile: $("#mobile").val(),
            polName: $("#polName").val(),
            clerkId: $("#clerkId").val(),
            purchaseTime: $("#purchaseTime").val()
        };

        $.ajax({
            url: "./customer/" + data.cid,
            type: "POST",
            data: {
                jsonData: JSON.stringify(data)
            },
            dataType: "json", success: function (d) {
                if (d.head) {
                    $.DialogSuccess(d.body);
                } else {
                    $.DialogFail(d.body);
                }
            }
        });

    });

    /*删除按钮*/
    $('#deleteBtn').click(function () {
        BootstrapDialog.show({
            title: "警告",
            message: '确定删除？',
            buttons: [{
                label: "确定",
                action: function (dialog) {

                    var checkboxs = $(".checkbox");
                    var idArr = new Array();
                    var count = 0;

                    for (var x = 0; x < checkboxs.length; x++) {
                        if (checkboxs.get(x).checked) {
                            idArr[count++] = (checkboxs.get(x).name);
                        }
                    }

                    if (idArr.length == 0) {
                        var dia = $.DialogFail("您还没有选择任何一个要删除项目!");
                        return;
                    }

                    var str = JSON.stringify(idArr);

                    $.ajax({
                        url: "./customer/",
                        type: 'POST',
                        data: {
                            _method: "delete",
                            id: str
                        }, dataType: "json", success: function (data) {
                            if (data.head) {
                                // $.DialogSuccess(data.body);
                            } else {
                                // $.DialogFail(data.body);
                            }

                            window.location.href = "#";
                        }
                    });

                    dialog.close();
                }
            }, {
                label: "取消",
                action: function (dialog) {   //给当前按钮添加点击事件
                    dialog.close();
                }
            }]
        });
    });


    /*查看函数*/
    function check() {

        $("#infoModelTilte").html("查看");

        /*开启模态框,并通过ajax请求数据*/
        $.ajax({
            url: "./customer/" + this.name,
            type: "GET",
            data: {}, dataType: "json", success: function (data) {
                /*赋值给模态框*/

                var cid = $("#cid").val(data.cid);
                var customername = $("#customername").val(data.customername);
                var sex = $("#sex").val(data.sex);
                var mobile = $("#mobile").val(data.mobile);
                var polName = $("#polName").val(data.polName);
                var clerkId = $("#clerkId").val(data.clerkId);
                var purchaseTime = $("#purchaseTime").val(data.purchaseTime);

                cid.attr("disabled", true);
                customername.attr("disabled", true);
                sex.attr("disabled", true);
                mobile.attr("disabled", true);
                polName.attr("disabled", true);
                clerkId.attr("disabled", true);
                purchaseTime.attr("disabled", true);

                $("#saveChange").hide();

            }
        });

        $("#infoBtn").click();
    }

    /*编辑函数*/
    function edit() {
        $("#infoModelTilte").html("编辑");

        $.ajax({
            url: "./customer/" + this.name,
            type: "GET",
            data: {}, dataType: "json", success: function (data) {
                /*赋值给模态框*/

                var cid = $("#cid").val(data.cid);
                var customername = $("#customername").val(data.customername);
                var sex = $("#sex").val(data.sex);
                var mobile = $("#mobile").val(data.mobile);
                var polName = $("#polName").val(data.polName);
                var clerkId = $("#clerkId").val(data.clerkId);
                var purchaseTime = $("#purchaseTime").val(data.purchaseTime);

                cid.attr("disabled", false);
                customername.attr("disabled", false);
                sex.attr("disabled", false);
                mobile.attr("disabled", false);
                polName.attr("disabled", false);
                clerkId.attr("disabled", false);
                purchaseTime.attr("disabled", false);

                $("#saveChange").show();

            }
        });

        /*开启模态框,并通过ajax请求数据*/
        $("#infoBtn").click();
    }

    var table = $("#dataTable").dataTable({

//        paging: true,//分页
        ordering: false,//是否启用排序
        bLengthChange: false,
//        bPaginate: true,  //是否显示分页
        searching: false,//搜索
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

        sAjaxSource: "./customer/",//这个是请求的地址
        fnServerData: retrieveData, // 获取数据的处理函数
        columns: [
            {data: null},
            {data: "customername"},
            {data: "sex"},
            {data: "mobile"},
            {data: "polName"},
            {data: "clerkId"},
            {data: null}],
        columnDefs: [{//列渲染，可以添加一些操作等
            targets: 6,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                var id = obj.cid;
                return "<a class='btn btn-primary btn-lg check' name=" + id + ">查看</a>" + "&nbsp;&nbsp;" +
                    "<a class='btn btn-danger btn-lg edit' name=" + id + ">编辑</a>";
            }

        }, {//列渲染，可以添加一些操作等
            targets: 0,//表示是第8列，所以上面第8列没有对应数据列，就是在这里渲染的。
            render: function (obj) {
                var id = obj.cid;
                return "<input type='checkbox' class='checkbox' name=" + id + "></input>";
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
                $(".check").on('click', check);
                $(".edit").on('click', edit);
            },
            error: function (msg) {
            }
        });
    }

    $("#searchBtn").on('click', function () {
        var arg = $("#searchBox").val();
        $("#dataTable").DataTable().search(arg).draw(false);
    });

});
