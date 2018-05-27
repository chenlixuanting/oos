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
    <title>历史评论</title>

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
            <div class="row-fluid">
                <div class="span12 pull-right">
                    <a
                            id="searchBtn"
                            class="btn btn-primary btn-lg pull-right"
                            style="margin-left: 5px;"> 搜 索 </a>
                    <input id="searchBox"
                           type="text" class="span2 pull-right "
                           placeholder="用户名"
                           style="margin-top: 1px;"/>

                </div>
            </div>

            <div class="row-fluid table">
                <table id="dataTable"
                       class="table table-hover table-striped table-bordered">
                    <thead>
                    <tr>
                        <th class="span2 sortable">用户名</th>
                        <th class="span2 sortable">评论内容</th>
                        <th class="span2 sortable">管理员</th>
                        <th class="span2 sortable">回复内容</th>
                        <th class="span2 sortable">评论状态</th>
                        <th class="span2 sortable">创建时间</th>
                        <th class="span2 sortable">更新时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</div>

<button id="modelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#modelBox" style="display: none;"></button>

<div class="modal fade" id="modelBox" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title primary" id="infoModelTilte">回复</h4>
            </div>
            <div class="modal-body">
                <div class="row" style="text-align: center">
                    <div class="col-lg-12">

                        <div class="form-group">
                            <input type="text"
                                   class="form-control"
                                   id="coId"
                                   name="coId"
                                   disabled="disabled" style="display: none;">
                        </div>

                        <div class="form-group">
                            <input type="text"
                                   class="form-control"
                                   id="removeRow"
                                   name="removeRow"
                                   disabled="disabled" style="display: none;">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;用户名:</font>
                            <input type="text"
                                   class="form-control"
                                   id="username"
                                   name="username"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">评论内容:</font>
                            <textarea type="text"
                                      class="form-control"
                                      id="comContent"
                                      name="comContent"
                                      disabled="disabled"></textarea>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;管理员:</font>
                            <input type="text"
                                   class="form-control"
                                   id="adminname"
                                   placeholder="<%=administrator.getUsername()%>" mgId="<%=administrator.getMgId()%>"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">回复内容:</font>
                            <textarea type="text"
                                      class="form-control"
                                      id="replyContent"
                                      name="replyContent"
                                      placeholder="回复内容"></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id="closeModel"
                        data-dismiss="modal" onclick="resetModelContent();">关闭
                </button>
                <button type="submit" class="btn btn-primary" id="saveChange" onclick="replyComment();">保存</button>
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
<script src="asset/js/history-comment.js" type="text/javascript"></script>

</body>
</html>