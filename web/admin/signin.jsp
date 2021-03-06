<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/admin/";
%>

<html class="login-bg">
<head>

    <base href="<%=basePath%>">
    <title>管理员登录</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

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
    <link rel="stylesheet" href="css/compiled/signin.css" type="text/css" media="screen"/>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>

<!-- background switcher -->
<div class="bg-switch visible-desktop">
    <div class="bgs">
        <a href="#" data-img="landscape.jpg" class="bg active">
            <img src="img/bgs/landscape.jpg"/>
        </a>
        <a href="#" data-img="blueish.jpg" class="bg">
            <img src="img/bgs/blueish.jpg"/>
        </a>
        <a href="#" data-img="7.jpg" class="bg">
            <img src="img/bgs/7.jpg"/>
        </a>
        <a href="#" data-img="8.jpg" class="bg">
            <img src="img/bgs/8.jpg"/>
        </a>
        <a href="#" data-img="9.jpg" class="bg">
            <img src="img/bgs/9.jpg"/>
        </a>
        <a href="#" data-img="10.jpg" class="bg">
            <img src="img/bgs/10.jpg"/>
        </a>
        <a href="#" data-img="11.jpg" class="bg">
            <img src="img/bgs/11.jpg"/>
        </a>
    </div>
</div>


<div class="row-fluid login-wrapper">

    <a href="#"></a>

    <div class="span4 box">
        <div class="content-wrap">
            <h6>管理员登录</h6>
            <input class="span12" id="username" type="text" placeholder="您的账号"/>
            <input class="span12" id="password" type="password" placeholder="您的密码"/>
            <a href="#" class="forgot">忘记密码?</a>
            <a class="btn-glow primary login" id="loginBtn" href="javascript:void(0)">登录</a>
        </div>
    </div>

</div>

<!-- scripts -->
<script src="js/jquery-3.3.1.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/theme.js"></script>
<script src="js/person-detail.js"></script>
<script src="asset/js/signin.js"></script>

<!-- pre load bg imgs -->
<script type="text/javascript">
    $(function () {
        // bg switcher
        var $btns = $(".bg-switch .bg");
        $btns.click(function (e) {
            e.preventDefault();
            $btns.removeClass("active");
            $(this).addClass("active");
            var bg = $(this).data("img");

            $("html").css("background-image", "url('img/bgs/" + bg + "')");
        });

    });
</script>

</body>
</html>