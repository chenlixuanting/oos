<%@ page import="com.guet.oos.po.Administrator" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/admin/";

    Administrator administrator = (Administrator) request.getSession().getAttribute("administrator");
%>

<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>餐点管理</title>

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

<!-- 菜单框 -->
<div id="sidebar-nav">
    <jsp:include page="nav.jsp"></jsp:include>
</div>

<div class="content">

    <div class="container-fluid">
        <div id="pad-wrapper" class="users-list">
            <div class="row-fluid span12 pull-right">

                <a id="addBtn"
                   class="btn btn-success btn-lg pull-left"
                   style="margin-left: -25px;" onclick="openAddModel();"> 新 增 </a>

                <a id="deleteBtn" class="btn btn-danger btn-lg pull-left"
                   style="margin-left: 10px;" onclick="deleteMealType();"> 删 除 </a>

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
                        <th class="span2 sortable"><input style="margin-left: -7px;" type="checkbox"
                                                          class="checkboxMain"/>全选
                        </th>
                        <th class="span2 sortable">餐点名称</th>
                        <th class="span2 sortable">起始时间</th>
                        <th class="span2 sortable">终止时间</th>

                        <th class="span2 sortable">管理员ID</th>
                        <th class="span2 sortable">创建时间</th>
                        <th class="span2 sortable">更新时间</th>
                        <th class="span2 sortable" style="text-align: center;">操作</th>
                    </tr>
                    </thead>

                    <tbody>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</div>

<%--新增餐点模态框--%>
<button id="addModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#addModel" style="display: none;"></button>

<div class="modal fade" id="addModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title primary">新增</h4>
            </div>
            <div class="modal-body">
                <div class="row" style="text-align: center">
                    <div class="col-lg-12">

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">餐点名称:</font>
                            <input type="text"
                                   class="form-control"
                                   id="addMealTypeName"
                                   placeholder="餐点名称">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">起始时间:</font>
                            <input type="text"
                                   class="form-control" id="addStartTime"
                                   placeholder="起始时间">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">终止时间:</font>
                            <input type="text"
                                   class="form-control" id="addEndTime"
                                   placeholder="终止时间">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;管理员:</font>
                            <input type="text"
                                   class="form-control" id="addMgId"
                                   placeholder="<%=administrator.getUsername()%>"
                                   name="<%=administrator.getMgId()%>"
                                   disabled="disabled">
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="addMealEvent();">保存</button>
            </div>
        </div>
    </div>
</div>

<%--编辑餐点类型模态框--%>
<button id="editModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#editModel" style="display: none;"></button>

<div class="modal fade" id="editModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title primary">编辑</h4>
            </div>
            <div class="modal-body">
                <div class="row" style="text-align: center">
                    <div class="col-lg-12">

                        <div class="form-group">
                            <input type="text"
                                   class="form-control"
                                   id="mtId"
                                   placeholder="餐点名称" style="display: none;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">餐点名称:</font>
                            <input type="text"
                                   class="form-control"
                                   id="editMealTypeName"
                                   placeholder="餐点名称">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">起始时间:</font>
                            <input type="text"
                                   class="form-control" id="editStartTime"
                                   placeholder="起始时间">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">终止时间:</font>
                            <input type="text"
                                   class="form-control" id="editEndTime"
                                   placeholder="终止时间">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;管理员:</font>
                            <input type="text"
                                   class="form-control" id="editMgId"
                                   placeholder="<%=administrator.getUsername()%>"
                                   name="<%=administrator.getMgId()%>"
                                   disabled="disabled">
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="editMealEvent();">保存</button>
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
<script src="asset/js/meal-management.js" type="text/javascript"></script>
</body>
</html>