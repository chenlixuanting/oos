<%@ page import="com.guet.oos.po.Administrator" %>
<%@ page import="com.guet.oos.constant.SessionKey" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/admin/";

    Administrator administrator = (Administrator) request.getSession().getAttribute(SessionKey.ADMINISTRATOR);

%>

<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>超级管理员权限</title>

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
                   style="margin-left: -26px;" onclick="openAddAdminModel();"> 新 增 </a>

                <a id="deleteBtn" class="btn btn-danger btn-lg pull-left"
                   style="margin-left: 10px;" onclick="deleteEvent();"> 禁 用 </a>

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
                        <th class="span2 sortable">账号</th>
                        <th class="span2 sortable">密码</th>
                        <th class="span2 sortable">最高权限</th>
                        <th class="span2 sortable">状态</th>
                        <th class="span2 sortable">创建者</th>
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

<%--新增管理员模态框--%>
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
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号:</font>
                            <input type="text"
                                   class="form-control"
                                   id="addUsername"
                                   placeholder="账号">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:</font>
                            <input type="text"
                                   class="form-control"
                                   id="addPassword"
                                   placeholder="密码">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">最高权限:</font>
                            <select name="polName" class="form-control" id="addMaximumAuthority"
                                    style="width: 220px; height: 31px;margin-bottom: 10px;">
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;创建者:</font>
                            <input type="text"
                                   class="form-control"
                                   id="addCreator" name="<%=administrator.getMgId()%>"
                                   value="<%=administrator.getUsername()%>" disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态:</font>
                            <select name="polName" class="form-control" id="addAdminStatus"
                                    style="width: 220px; height: 31px;margin-bottom: 10px;">
                                <option value="启用">启用</option>
                                <option value="禁用">禁用</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="sendAddAdminRequest();">保存</button>
            </div>
        </div>
    </div>
</div>

<%--编辑管理员模态框--%>
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
                                   id="editMgId" style="display: none;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号:</font>
                            <input type="text"
                                   class="form-control"
                                   id="editUsername"
                                   placeholder="账号">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码:</font>
                            <input type="text"
                                   class="form-control"
                                   id="editPassword"
                                   placeholder="密码">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">最高权限:</font>
                            <select name="polName" class="form-control" id="editMaximumAuthority"
                                    style="width: 220px; height: 31px;margin-bottom: 10px;">
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;创建者:</font>
                            <input type="text"
                                   class="form-control"
                                   id="editCreator"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态:</font>
                            <select name="polName" class="form-control" id="editAdminStatus"
                                    style="width: 220px; height: 31px;margin-bottom: 10px;">
                                <option value="启用">启用</option>
                                <option value="禁用">禁用</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" onclick="sendEditAdminRequest();">保存</button>
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
<script src="asset/js/super-authority.js"></script>

</body>
</html>