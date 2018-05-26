<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>待确认的订单</title>

    <!-- bootstrap -->
    <link href="css/bootstrap/bootstrap.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-responsive.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-overrides.css" type="text/css" rel="stylesheet"/>

    <!-- libraries -->
    <link href="css/lib/jquery-ui-1.10.2.custom.css" rel="stylesheet" type="text/css"/>
    <link href="css/lib/font-awesome.css" type="text/css" rel="stylesheet"/>

    <!-- global styles -->
    <link rel="stylesheet" type="text/css" href="css/layout.css"/>
    <link rel="stylesheet" type="text/css" href="css/elements.css"/>
    <link rel="stylesheet" type="text/css" href="css/icons.css"/>

    <!-- this page specific styles -->
    <link rel="stylesheet" href="css/compiled/index.css" type="text/css" media="screen"/>

    <!-- open sans font -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css'/>

    <!-- lato font -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic'
          rel='stylesheet' type='text/css'/>

    <link rel="stylesheet" type="text/css" href="css/jquery.dataTables.css">

    <style type="text/css">
        .dataTable {
            text-align: center;
        }
    </style>

</head>
<body>
<!-- 顶部 -->
<div class="navbar navbar-inverse">
    <jsp:include page="top.jsp"></jsp:include>
</div>
<!-- 左边框 -->
<div id="sidebar-nav">
    <jsp:include page="nav.jsp"></jsp:include>
</div>

<div class="content">

    <div class="container-fluid">
        <div id="pad-wrapper" class="users-list">

            <div class="row-fluid span12 pull-right">

                <a id="addBtn"
                   class="btn btn-danger btn-lg pull-left"
                   style="margin-left: -26px;"> 删除</a>

                <a id="searchBtn"
                   class="btn btn-primary btn-lg pull-right"
                   style="margin-left: 5px;"> 搜 索 </a>

                <input id="searchBox"
                       type="text" class="span2 pull-right "
                       style="margin-top: 1px;"/>

            </div>

            <%--
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
            --%>

            <div class="row-fluid table">
                <table id="dataTable" class="table table-hover table-striped table-bordered dataTable">
                    <thead>
                    <tr>
                        <th class="span2 sortable"><input style="margin-left: -7px;" type="checkbox"/>全选</th>
                        <th class="span2 sortable">订单号</th>
                        <th class="span2 sortable">用户名</th>
                        <th class="span2 sortable">收货人姓名</th>
                        <th class="span2 sortable">收货人性别</th>
                        <th class="span2 sortable">收货人电话</th>
                        <th class="span2 sortable">收货地址</th>
                        <th class="span2 sortable">收货时间</th>
                        <th class="span2 sortable">总金额</th>
                        <th class="span2 sortable">商品数量</th>
                        <th class="span2 sortable">配送费用</th>
                        <th class="span2 sortable">商品开销</th>
                        <th class="span2 sortable">订单状态</th>
                        <th class="span2 sortable">付款方式</th>
                        <th class="span2 sortable">创建时间</th>
                        <th class="span2 sortable">更新时间</th>
                        <th class="span2 sortable">操作</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<button id="modelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#modelBox" style="display: none;"></button>

<div class="modal fade" id="modelBox" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important;">
    <div class="modal-dialog" role="document">

        <form action="./addDishes.action" method="post" enctype="multipart/form-data" style="margin-bottom: 0px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title primary" id="infoModelTilte"></h4>
                </div>
                <div class="modal-body" style="max-height: none;">
                    <div class="row" style="text-align: center">
                        <div class="col-lg-12">

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品单价:</font>
                                <input type="text"
                                       class="form-control"
                                       name="price"
                                       placeholder="单价" id="price" style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品库存:</font>
                                <input type="text"
                                       class="form-control"
                                       name="stock"
                                       placeholder="库存" id="stock" style="width: 600px !important;">
                            </div>

                            <div class="form-group" id="createTimeDiv" style="display:none;">
                                <font size="3" style="padding-right: 10px;">创建时间:</font>
                                <input type="text"
                                       class="form-control"
                                       name="createTime"
                                       placeholder="创建时间" id="createTime" style="width: 600px !important;">
                            </div>

                            <div class="form-group" id="updateTimeDiv" style="display:none;">
                                <font size="3" style="padding-right: 10px;">更新时间:</font>
                                <input type="text"
                                       class="form-control"
                                       name="updateTime"
                                       placeholder="更新时间" id="updateTime" style="width: 600px !important;">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="closeModel"
                            data-dismiss="modal">关闭
                    </button>
                    <button type="submit" class="btn btn-primary" id="saveChange">保存</button>
                </div>
            </div>
        </form>
    </div>
</div>

<!-- scripts -->
<script src="js/jquery-3.3.1.js"></script>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui-1.10.2.custom.min.js"></script>

<!-- knob -->
<script src="js/jquery.knob.js"></script>

<!-- flot charts -->
<script src="js/jquery.flot.js"></script>
<script src="js/jquery.flot.stack.js"></script>
<script src="js/jquery.flot.resize.js"></script>
<script src="js/theme.js"></script>
<script src="js/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="js/dataTables.bootstrap.min.js" type="text/javascript"></script>
<script src="asset/js/order-confirmed.js"></script>
</body>
</html>