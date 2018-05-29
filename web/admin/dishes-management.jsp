<%@ page import="com.guet.oos.po.Administrator" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    Administrator administrator = (Administrator) request.getSession().getAttribute("administrator");
%>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>菜品管理</title>

    <!-- bootstrap -->
    <link href="css/bootstrap/bootstrap.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-responsive.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-overrides.css" type="text/css" rel="stylesheet"/>

    <!-- libraries -->
    <link href="css/lib/jquery-ui-1.10.2.custom.css" rel="stylesheet" type="text/css"/>
    <link href="css/lib/font-awesome.css" type="text/css" rel="stylesheet"/>

    <link href="css/bootstrap-fileupload.min.css" type="text/css" rel="stylesheet"/>

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
            <div class="row-fluid">
                <div class="span12 pull-right">

                    <a id="addBtn"
                       class="btn btn-success btn-lg pull-left"
                       style="margin-left: -26px;" onclick="openAddDishesModel();"> 新 增 </a>

                    <a id="deleteBtn" class="btn btn-danger btn-lg pull-left"
                       style="margin-left: 10px;" onclick="deleteEvent();"> 删 除 </a>

                    <a id="searchBtn"
                       class="btn btn-primary btn-lg pull-right"
                       style="margin-left: 5px;"> 搜 索 </a>

                    <input id="searchBox"
                           type="text" class="span2 pull-right "
                           style="margin-top: 1px;"/>

                </div>
            </div>

            <div class="row-fluid table">
                <table id="dataTable"
                       class="table table-hover table-striped table-bordered">
                    <thead>
                    <tr>
                        <th class="span2 sortable"><input style="margin-left: -7px;" type="checkbox"
                                                          class="checkboxMain"/>全选
                        </th>
                        <th class="span2 sortable">菜品名称</th>
                        <th class="span2 sortable">菜品种类</th>
                        <th class="span2 sortable">单价</th>
                        <th class="span2 sortable">库存</th>
                        <th class="span2 sortable">管理员ID</th>
                        <th class="span2 sortable">创建时间</th>
                        <th class="span2 sortable">更新时间</th>
                        <th class="span2 sortable" style="text-align: center;">操作</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<%--添加餐品模态框--%>
<button id="addModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#addModel" style="display: none;"></button>

<div class="modal fade" id="addModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important; display: none;">
    <div class="modal-dialog" role="document">

        <form action="addDishes.action" method="post" enctype="multipart/form-data">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title primary">新增</h4>
                </div>

                <div class="modal-body" style="max-height: none;">
                    <div class="row" style="text-align: center">
                        <div class="col-lg-12">

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品名称:</font>
                                <input type="text"
                                       class="form-control" name="addDishesName"
                                       placeholder="菜品名称" id="addDishesName"
                                       style="width: 600px !important;">
                            </div>

                            <div class="form-group" id="dishesTypeBox">
                                <font size="3" style="padding-right: 10px;">菜品种类:</font>
                                <select class="form-control" id="addDishesType" name="addDishesType"
                                        style="width: 615px; height: 31px;margin-bottom: 10px;">
                                </select>
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品单价:</font>
                                <input type="text"
                                       class="form-control"
                                       name="addPrice"
                                       placeholder="单价" id="addPrice" style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品库存:</font>
                                <input type="text"
                                       class="form-control"
                                       name="addStock"
                                       placeholder="库存" id="addStock" style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品图片预览:</font>
                                <div class="fileupload fileupload-new"
                                     data-provides="fileupload">
                                    <div class="fileupload-new thumbnail"
                                         style="width: 480px; height: 300px;"><img
                                            src="" alt=""
                                            id="addDishesPic"/></div>
                                    <div class="fileupload-preview fileupload-exists thumbnail"
                                         style="max-width: 480px; max-height: 300px; line-height: 20px;"></div>
                                    <div><span class="btn btn-file btn-primary"><span
                                            class="fileupload-new">选择图片</span><span
                                            class="fileupload-exists">更换</span><input
                                            type="file" name="headPicture"/></span>
                                        <a href="#" class="btn btn-danger fileupload-exists"
                                           data-dismiss="fileupload" id="addRemoveBtn">移除</a>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品简介:</font>
                                <textarea class="form-control" rows="3"
                                          placeholder="请输入菜品简介"
                                          style="width: 600px !important;"
                                          id="addDishesInfo" name="addDescribe"></textarea>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn btn-primary">保存</button>
                </div>

            </div>
        </form>
    </div>
</div>

<%--查看餐品模态框--%>
<button id="checkModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#checkModel" style="display: none;"></button>

<div class="modal fade" id="checkModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important;display: none;">
    <div class="modal-dialog" role="document">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title primary">查看</h4>
            </div>

            <div class="modal-body" style="max-height: none;">
                <div class="row" style="text-align: center">
                    <div class="col-lg-12">

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品名称:</font>
                            <input type="text"
                                   class="form-control" name="checkDishesName"
                                   placeholder="菜品名称" id="checkDishesName"
                                   style="width: 600px !important;" disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品种类:</font>
                            <select class="form-control" id="checkDishesType" name="checkDishesType"
                                    style="width: 615px; height: 31px;margin-bottom: 10px;" disabled="disabled">
                            </select>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品单价:</font>
                            <input type="text"
                                   class="form-control"
                                   name="checkPrice"
                                   placeholder="单价" id="checkPrice" style="width: 600px !important;"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品库存:</font>
                            <input type="text"
                                   class="form-control"
                                   name="checkStock"
                                   placeholder="库存" id="checkStock" style="width: 600px !important;"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">创建时间:</font>
                            <input type="text"
                                   class="form-control"
                                   name="checkCreateTime"
                                   placeholder="创建时间" id="checkCreateTime" style="width: 600px !important;"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">更新时间:</font>
                            <input type="text"
                                   class="form-control"
                                   name="checkUpdateTime"
                                   placeholder="更新时间" id="checkUpdateTime" style="width: 600px !important;"
                                   disabled="disabled">
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品图片预览:</font>
                            <div class="fileupload fileupload-new"
                                 data-provides="fileupload">
                                <div class="fileupload-new thumbnail"
                                     style="width: 480px; height: 300px;"><img
                                        src="" alt=""
                                        id="checkDishesPic"/></div>
                                <div class="fileupload-preview fileupload-exists thumbnail"
                                     style="max-width: 480px; max-height: 300px; line-height: 20px;"></div>
                                <div id="picOperate"><span class="btn btn-file btn-primary"><span
                                        class="fileupload-new">选择图片</span><span
                                        class="fileupload-exists">更换</span><input
                                        type="file"/></span>
                                    <a href="#" class="btn btn-danger fileupload-exists"
                                       data-dismiss="fileupload" id="checkRemoveBtn">移除</a>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <font size="3" style="padding-right: 10px;">菜品简介:</font>
                            <textarea class="form-control" rows="3"
                                      placeholder="请输入菜品简介"
                                      style="width: 600px !important;"
                                      id="checkDishesInfo" name="checkDescribe" disabled="disabled"></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">关闭
                </button>
            </div>

        </div>
    </div>
</div>

<%--编辑餐品模态框--%>
<button id="editModelBtn" type="button"
        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
        data-target="#editModel" style="display: none;"></button>

<div class="modal fade" id="editModel" tabindex="-1" role="dialog"
     aria-labelledby="myModalLabel" style="width: 800px !important; left: 40% !important;display: none;">
    <div class="modal-dialog" role="document">

        <form action="editDishes.action" method="post" enctype="multipart/form-data">

            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title primary">编辑</h4>
                </div>

                <div class="modal-body" style="max-height: none;">
                    <div class="row" style="text-align: center">
                        <div class="col-lg-12">

                            <div class="form-group">
                                <input type="text"
                                       class="form-control" name="editDsId" id="editDsId"
                                       value=""
                                       style="width: 600px !important; display:none;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品名称:</font>
                                <input type="text"
                                       class="form-control" name="editDishesName"
                                       placeholder="菜品名称" id="editDishesName"
                                       style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品种类:</font>
                                <select class="form-control" id="editDishesType" name="editDishesType"
                                        style="width: 615px; height: 31px;margin-bottom: 10px;">
                                </select>
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品单价:</font>
                                <input type="text"
                                       class="form-control"
                                       name="editPrice"
                                       placeholder="单价" id="editPrice" style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品库存:</font>
                                <input type="text"
                                       class="form-control"
                                       name="editStock"
                                       placeholder="库存" id="editStock" style="width: 600px !important;">
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品图片预览:</font>
                                <div class="fileupload fileupload-new"
                                     data-provides="fileupload">
                                    <div class="fileupload-new thumbnail"
                                         style="width: 480px; height: 300px;"><img
                                            src="" alt=""
                                            id="editDishesPic"/></div>
                                    <div class="fileupload-preview fileupload-exists thumbnail"
                                         style="max-width: 480px; max-height: 300px; line-height: 20px;"></div>
                                    <div><span class="btn btn-file btn-primary"><span
                                            class="fileupload-new">选择图片</span><span
                                            class="fileupload-exists">更换</span><input
                                            type="file" name="headPicture"/></span>
                                        <a href="#" class="btn btn-danger fileupload-exists"
                                           data-dismiss="fileupload" id="editRemoveBtn">移除</a>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <font size="3" style="padding-right: 10px;">菜品简介:</font>
                                <textarea class="form-control" rows="3"
                                          placeholder="请输入菜品简介"
                                          style="width: 600px !important;"
                                          id="editDishesInfo" name="editDishesInfo"></textarea>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">关闭
                    </button>
                    <button type="submit" class="btn btn-primary">保存</button>
                </div>

            </div>
        </form>
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
<script type="text/javascript" src="js/bootstrap-fileupload.js"></script>
<script type="text/javascript" src="asset/js/dishes-management.js"></script>
<script type="text/javascript" src="asset/js/pageToUrls.js"></script>
</body>
</html>