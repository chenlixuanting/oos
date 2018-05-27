<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>用户管理</title>

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
                   class="btn btn-success btn-lg pull-left"
                   style="margin-left: -22px;" onclick="addUserBtn();"> 新 增 </a>

                <a id="deleteBtn" class="btn btn-danger btn-lg pull-left"
                   style="margin-left: 10px;" onclick="deleteUser();"> 删 除 </a>

                <a id="searchBtn"
                   class="btn btn-primary btn-lg pull-right"
                   style="margin-left: 5px;"> 搜 索 </a>

                <input id="searchBox"
                       type="text" class="span2 pull-right "
                       style="margin-top: 1px;"/>

            </div>

            <div class="row-fluid table">
                <table id="dataTable"
                       class="table table-hover table-striped table-bordered">
                    <thead>
                    <tr>
                        <th class="span2 sortable"><input style="margin-left: -7px;" class="checkboxMain"
                                                          type="checkbox"/>全选
                        </th>
                        <th class="span2 sortable">用户姓名</th>
                        <th class="span2 sortable">手机号码</th>
                        <th class="span2 sortable">密码</th>
                        <th class="span2 sortable">性别</th>
                        <th class="span2 sortable">默认送货地址</th>
                        <th class="span2 sortable">创建时间</th>
                        <th class="span2 sortable">修改时间</th>
                        <th class="span2 sortable" style="text-align: center;">操作</th>
                    </tr>
                    </thead>

                    <tbody></tbody>

                </table>
            </div>
        </div>
    </div>
</div>

<%--新增模态框--%>
<button id="addModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#addModel" style="display: none;"></button>

<div class="modal fade" id="addModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important; display:none;">
    <div class="modal-dialog" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title primary" id="addModelTitle">新增</h4>
            </div>
            <div class="modal-body" style="max-height: none;">
                <div class="row" style="text-align: center">
                    <div class="col-lg-12">

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;margin-left: -640px; color: red;">基础信息(必填):</font>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户姓名:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="用户姓名" name="addUsername" id="addUsername"
                                   style="width: 600px !important;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户电话:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="用户电话" name="addUserMobile" id="addUserMobile"
                                   style="width: 600px !important;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户密码:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="用户密码" name="addUserPassword" id="addUserPassword"
                                   style="width: 600px !important;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户性别:</font>
                            <select name="addUserSex" class="form-control" id="addUserSex"
                                    style="width: 615px; height: 31px;margin-bottom: 10px;">
                                <option value="先生">先生</option>
                                <option value="女士">女士</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;margin-left: -640px; color: red;">详细信息(必填):</font>
                        </div>

                        <div class="form-group">
                            <font size="3"
                                  style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认收货人姓名:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="默认收货人姓名"
                                   name="addUserDefaultReceiverName"
                                   id="addUserDefaultReceiverName"
                                   style="width: 600px !important;">
                        </div>

                        <div class="form-group">
                            <font size="3"
                                  style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认收货人电话:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="默认收货人电话"
                                   name="addUserDefaultReceiverMobile"
                                   id="addUserDefaultReceiverMobile"
                                   style="width: 600px !important;">
                        </div>

                        <div class="form-group">
                            <font size="3"
                                  style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认收货人性别:</font>
                            <select name="addUserReceiverSex" class="form-control" id="addUserReceiverSex"
                                    style="width: 615px; height: 31px;margin-bottom: 10px;">
                                <option value="先生">先生</option>
                                <option value="女士">女士</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <font size="3"
                                  style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认收货人地址:</font>
                            <input type="text"
                                   class="form-control"
                                   placeholder="默认收货人地址"
                                   name="addUserDefaultReceiverAddress"
                                   id="addUserDefaultReceiverAddress"
                                   style="width: 600px !important;">
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id="addCloseModel" onclick="closeAddModel();">关闭</button>
                <button type="submit" class="btn btn-primary" id="addSaveModel" onclick="saveAddUser();">保存</button>
            </div>
        </div>
    </div>
</div>

<%--查看模态框--%>
<button id="checkModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#checkModel" style="display: none;"></button>

<div class="modal fade" id="checkModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important;display: none;">
    <div class="modal-dialog" role="document">

        <form action="./addDishes.action" method="post" enctype="multipart/form-data" style="margin-bottom: 0px;">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title primary" id="checkModelTitle">查看</h4>
                </div>
                <div class="modal-body" style="max-height: none;">
                    <div class="row" style="text-align: center">
                        <div class="col-lg-12">

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品名称:</font>
                                <input type="text"
                                       class="form-control"
                                       placeholder="菜品名称" name="dishesName" id="dishesName"
                                       style="width: 600px !important;">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="checkCloseModel" data-dismiss="modal">关闭</button>
                </div>
            </div>
        </form>
    </div>
</div>

<%--编辑模态框--%>
<%--<button id="editModelBtn" type="button"--%>
<%--class="btn btn-primary btn-lg pull-left" data-toggle="modal"--%>
<%--data-target="#editModel" style="display: none;"></button>--%>

<%--<div class="modal fade" id="editModel" tabindex="-1" role="dialog"--%>
<%--aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important;">--%>
<%--<div class="modal-dialog" role="document">--%>

<%--<form action="./addDishes.action" method="post" enctype="multipart/form-data" style="margin-bottom: 0px;">--%>
<%--<div class="modal-content">--%>
<%--<div class="modal-header">--%>
<%--<button type="button" class="close" data-dismiss="modal"--%>
<%--aria-label="Close">--%>
<%--<span aria-hidden="true">&times;</span>--%>
<%--</button>--%>
<%--<h4 class="modal-title primary" id="editModelTitle"></h4>--%>
<%--</div>--%>
<%--<div class="modal-body" style="max-height: none;">--%>
<%--<div class="row" style="text-align: center">--%>
<%--<div class="col-lg-12">--%>

<%--<div class="form-group">--%>
<%--<font size="3" style="padding-right: 10px;">菜品名称:</font>--%>
<%--<input type="text"--%>
<%--class="form-control"--%>
<%--placeholder="菜品名称" name="dishesName" id="dishesName"--%>
<%--style="width: 600px !important;">--%>
<%--</div>--%>

<%--</div>--%>
<%--</div>--%>
<%--</div>--%>
<%--<div class="modal-footer">--%>
<%--<button type="button" class="btn btn-danger" id="editCloseModel" data-dismiss="modal">关闭--%>
<%--</button>--%>
<%--<button type="submit" class="btn btn-primary" id="editSaveModel">保存</button>--%>
<%--</div>--%>
<%--</div>--%>
<%--</form>--%>
<%--</div>--%>
<%--</div>--%>

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
<script src="asset/js/user-management.js"></script>
</body>
</html>