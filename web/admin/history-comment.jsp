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
							style="margin-left: 10px;"> 导出Excel </a> <a id="searchBtn"
							class="btn btn-success btn-lg pull-right"
							style="margin-left: 5px;"> 搜 索 </a> <input id="searchBox"
							type="text" class="span2 pull-right " placeholder="业务员的ID或投保人姓名"
							style="margin-top: 1px;">

					</div>
				</div>

				<div class="row-fluid table">
					<div id="dataTable_wrapper"
						class="dataTables_wrapper form-inline dt-bootstrap no-footer">
						<div class="row">
							<div class="col-sm-6">
								<div class="dataTables_length" id="dataTable_length">
									<label>Show <select name="dataTable_length"
										aria-controls="dataTable" class="form-control input-sm"><option
												value="10">10</option>
											<option value="25">25</option>
											<option value="50">50</option>
											<option value="100">100</option></select> entries
									</label>
								</div>
							</div>
							<div class="col-sm-6">
								<div id="dataTable_filter" class="dataTables_filter">
									<label>Search:<input type="search"
										class="form-control input-sm" placeholder=""
										aria-controls="dataTable"></label>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<table id="dataTable"
									class="table table-hover table-striped table-bordered dataTable no-footer"
									role="grid" aria-describedby="dataTable_info"
									style="width: 1681px;">
									<thead>
										<tr role="row">
											<th class="span2 sortable sorting_asc" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-sort="ascending"
												aria-label="全选: activate to sort column descending"
												style="width: 192px;"><input type="checkbox">全选</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="投保人: activate to sort column ascending"
												style="width: 192px;">投保人</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="性别: activate to sort column ascending"
												style="width: 192px;">性别</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="电话号码: activate to sort column ascending"
												style="width: 192px;">电话号码</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="险种: activate to sort column ascending"
												style="width: 192px;">险种</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="业务员: activate to sort column ascending"
												style="width: 192px;">业务员</th>
											<th class="span2 sortable sorting" tabindex="0"
												aria-controls="dataTable" rowspan="1" colspan="1"
												aria-label="操作: activate to sort column ascending"
												style="width: 193px;">操作</th>
										</tr>
									</thead>

									<tbody>
										<tr class="odd">
											<td valign="top" colspan="7" class="dataTables_empty">没有内容</td>
										</tr>
									</tbody>

								</table>
								<div id="dataTable_processing"
									class="dataTables_processing panel panel-default"
									style="display: none;">Processing...</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-5">
								<div class="dataTables_info" id="dataTable_info" role="status"
									aria-live="polite">0条记录</div>
							</div>
							<div class="col-sm-7">
								<div class="dataTables_paginate paging_full_numbers"
									id="dataTable_paginate">
									<ul class="pagination">
										<li class="paginate_button first disabled"
											id="dataTable_first"><a href="#"
											aria-controls="dataTable" data-dt-idx="0" tabindex="0">第一页</a></li>
										<li class="paginate_button previous disabled"
											id="dataTable_previous"><a href="#"
											aria-controls="dataTable" data-dt-idx="1" tabindex="0">上一页</a></li>
										<li class="paginate_button next disabled" id="dataTable_next"><a
											href="#" aria-controls="dataTable" data-dt-idx="2"
											tabindex="0">下一页</a></li>
										<li class="paginate_button last disabled" id="dataTable_last"><a
											href="#" aria-controls="dataTable" data-dt-idx="3"
											tabindex="0">最后</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- scripts -->
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
</body>
</html>