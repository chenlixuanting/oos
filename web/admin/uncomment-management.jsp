<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>

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
	
	                    <a id="deleteBtn" class="btn btn-danger btn-lg pull-left"
	                       style="margin-left: -27px;"> 删 除 </a> <a id="outputExcelBtn"
	                                                               class="btn btn-primary btn-lg pull-left"
	                                                               style="margin-left: 10px;"> 导出Excel </a> <a
	                        id="searchBtn"
	                        class="btn btn-success btn-lg pull-right"
	                        style="margin-left: 5px;"> 搜 索 </a> <input id="searchBox"
	                                                                   type="text" class="span2 pull-right "
	                                                                   placeholder="业务员的ID或投保人姓名"
	                                                                   style="margin-top: 1px;"/>
	
	                </div>
	            </div>
	
	            <div class="row-fluid table">
	                <table id="dataTable"
	                       class="table table-hover table-striped table-bordered">
	                    <thead>
	                    <tr>
	                        <th class="span2 sortable"><input type="checkbox"/>全选</th>
	                        <th class="span2 sortable">用户ID</th>
	                        <th class="span2 sortable">姓名</th>
	                        <th class="span2 sortable">性别</th>
	                        <th class="span2 sortable">创建时间</th>
	                        <th class="span2 sortable">业务员</th>
	                        <th class="span2 sortable">操作</th>
	                    </tr>
	                    </thead>
	
	                    <tbody>
	                    </tbody>
	
	                </table>
	            </div>
	        </div>
	    </div>
	</div>
	
	<button id="infoBtn" type="button"
	        class="btn btn-primary btn-lg pull-left" data-toggle="modal"
	        data-target="#infoModel" style="display: none;"></button>
	
	<div class="modal fade" id="infoModel" tabindex="-1" role="dialog"
	     aria-labelledby="myModalLabel">
	    <div class="modal-dialog" role="document">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal"
	                        aria-label="Close">
	                    <span aria-hidden="true">&times;</span>
	                </button>
	                <h4 class="modal-title" id="infoModelTilte"></h4>
	            </div>
	            <div class="modal-body">
	                <div class="row" style="text-align: center">
	                    <div class="col-lg-12">
	
	
	
	                        <div class="form-group">
	                            <label for="cid">CID</label> <input type="text"
	                                                                class="form-control" id="cid" placeholder="序号">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="customername">投保人姓名</label> <input type="text"
	                                                                           class="form-control" id="customername"
	                                                                           placeholder="投保人姓名">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="sex">性别</label> <input type="text"
	                                                               class="form-control" id="sex" placeholder="性别">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="mobile">电话号码</label> <input type="text"
	                                                                    class="form-control" id="mobile" placeholder="电话号码">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="polName">险种</label> <input type="text"
	                                                                   class="form-control" id="polName" placeholder="险种">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="clerkId">业务员</label> <input type="text"
	                                                                    class="form-control" id="clerkId" placeholder="业务员">
	                        </div>
	
	                        <div class="form-group">
	                            <label for="purchaseTime">购买时间</label> <input type="text"
	                                                                          class="form-control" id="purchaseTime"
	                                                                          placeholder="购买时间">
	                        </div>
	
	                    </div>
	                </div>
	            </div>
	            <div class="modal-footer">
	                <button type="button" class="btn btn-danger" id="closeModel"
	                        data-dismiss="modal">关闭
	                </button>
	                <button type="button" class="btn btn-primary" id="saveChange">保存</button>
	            </div>
	        </div>
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
	<script src="js/commen.js"></script>
</body>
</html>