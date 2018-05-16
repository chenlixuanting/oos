<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>个人资料</title>

    <!-- bootstrap -->
    <link href="css/bootstrap/bootstrap.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-responsive.css" rel="stylesheet"/>
    <link href="css/bootstrap/bootstrap-overrides.css" type="text/css" rel="stylesheet"/>

    <!-- global styles -->
    <link rel="stylesheet" type="text/css" href="css/layout.css"/>
    <link rel="stylesheet" type="text/css" href="css/elements.css"/>
    <link rel="stylesheet" type="text/css" href="css/icons.css"/>

    <!-- libraries -->
    <link rel="stylesheet" type="text/css" href="css/lib/font-awesome.css"/>

    <!-- this page specific styles -->
    <link rel="stylesheet" href="css/compiled/personal-info.css" type="text/css" media="screen"/>

    <!-- open sans font -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
          rel='stylesheet' type='text/css'/>

</head>
<body>
<!-- 顶部 -->
<div class="navbar navbar-inverse">
    <jsp:include page="top.jsp"></jsp:include>
</div>

<div class="content wide-content">
    <div class="container-fluid">
        <div class="settings-wrapper" id="pad-wrapper">

            <div class="span3 avatar-box">
                <div class="personal-image">
                    <img src="img/personal-info.png" class="avatar img-circle">
                    <p>更换头像</p>
                    <input type="file">
                </div>
            </div>

            <div class="span7 personal-info">
                <div class="alert alert-info">
                    <i class="icon-lightbulb"></i>
                    你可以通过该页面来修改你的个人信息，或者
                    <br> 设置 <strong>新的密码</strong> 对于你的账号
                </div>
                <h5 class="personal-title">管理员个人信息</h5>

                <form>
                    <div class="field-box">
                        <label>姓名:</label>
                        <input class="span5 inline-input" type="text" value="Alejandra">
                    </div>
                    <div class="field-box">
                        <label>账号:</label>
                        <input class="span5 inline-input" type="text" value="Galvan">
                    </div>
                    <div class="field-box">
                        <label>密码:</label>
                        <input class="span5 inline-input" type="text" value="Design Co.">
                    </div>
                    <div class="field-box">
                        <label>Email:</label>
                        <input class="span5 inline-input" type="text" value="alejandra@design.com">
                    </div>
                    <div class="field-box">
                        <label>管理员ID:</label>
                        <input class="span5 inline-input" type="text" value="alegalvan">
                    </div>
                    <div class="field-box">
                        <label>新密码:</label>
                        <input class="span5 inline-input" type="password" value="">
                    </div>
                    <div class="field-box">
                        <label>再次确认新密码:</label>
                        <input class="span5 inline-input" type="password" value="">
                    </div>
                    <div class="span6 field-box actions">
                        <input type="button" class="btn-glow primary" value="更改设置">
                        <span>或</span>
                        <input type="reset" value="取消" class="reset">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/theme.js"></script>

</body>
</html>