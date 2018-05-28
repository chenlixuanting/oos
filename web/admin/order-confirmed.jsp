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

                <a id="deleteBtn"
                   class="btn btn-danger btn-lg pull-left"
                   style="margin-left: -26px;" onclick="deleteOrder();"> 删除</a>

                <a id="searchBtn"
                   class="btn btn-primary btn-lg pull-right"
                   style="margin-left: 5px;"> 搜 索 </a>

                <input id="searchBox"
                       type="text" class="span2 pull-right "
                       style="margin-top: 1px;"/>

            </div>
            <div class="row-fluid table">
                <table id="dataTable" class="table table-hover table-striped table-bordered dataTable">
                    <thead>
                    <tr>
                        <th class="span2 sortable"><input style="margin-left: -7px;" type="checkbox"
                                                          class="checkboxMain"/>全选
                        </th>
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

<!-- scripts -->
<script src="js/jquery-3.3.1.js"></script>
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