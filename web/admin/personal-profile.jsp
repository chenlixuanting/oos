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

</head>
<body>
<!-- 顶部 -->
<div class="navbar navbar-inverse">
    <jsp:include page="top.jsp"></jsp:include>
</div>

<div class="content wide-content">
    <div class="container-fluid">
        <div class="settings-wrapper" id="pad-wrapper">

            <div class="span7 personal-info">
                <div class="alert alert-info">
                    <i class="icon-lightbulb"></i>
                    你可以通过该页面来修改你的个人信息，或者
                    <br> 设置 <strong>新的密码</strong> 对于你的账号
                </div>
                <h5 class="personal-title">管理员个人信息</h5>

                <div class="field-box">
                    <label>管理员ID:</label>
                    <input class="span5 inline-input" id="mgId" type="text" disabled="disabled">
                </div>

                <div class="field-box">
                    <label>账号:</label>
                    <input class="span5 inline-input" type="text" id="username" disabled="disabled">
                </div>

                <div class="field-box">
                    <label>密码:</label>
                    <input class="span5 inline-input" type="text" id="password" disabled="disabled">
                </div>

                <div class="field-box">
                    <label>创建者:</label>
                    <input class="span5 inline-input" type="text" id="creator" disabled="disabled">
                </div>

                <div class="field-box">
                    <label>是否具备最高权限:</label>
                    <input class="span5 inline-input" type="text" id="maximumAuthority" disabled="disabled">
                </div>

                <div class="field-box">
                    <label>新密码:</label>
                    <input class="span5 inline-input" id="newPassword" type="password">
                </div>

                <div class="field-box">
                    <label>再次确认新密码:</label>
                    <input class="span5 inline-input" id="reNewPassword" type="password">
                </div>

                <div class="span6 field-box actions">
                    <input type="button" class="btn-glow primary" id="submit" value="更改设置">
                    <span>或</span>
                    <input type="reset" value="取消" id="reset" class="reset">
                </div>
            </div>
        </div>
    </div>
</div>

<script src="js/jquery-3.3.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/theme.js"></script>
<script type="text/javascript" src="asset/js/personal-profile.js"></script>

</body>
</html>