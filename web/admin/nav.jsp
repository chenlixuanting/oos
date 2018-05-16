<%@ page import="com.guet.oos.po.Administrator" %><%-- <%@ page import="com.guet.oos.po.Administrator" %> --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    Administrator administrator = (Administrator) request.getSession().getAttribute("administrator");
%>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>

<ul id="dashboard-menu">

    <li class="active">
        <a href="index.jsp">
            <i class="icon-home"></i>
            <span>首页</span>
        </a>
    </li>

    <li class="active">
        <a href="user-management.jsp">
            <i class="icon-group"></i>
            <span>用户管理</span>
        </a>
    </li>

    <li class="active">
        <a href="meal-management.jsp">
            <i class="icon-time"></i>
            <span>餐点管理</span>
        </a>
    </li>

    <li class="active">
        <a href="dishes-type-management.jsp">
            <i class="icon-tags"></i>
            <span>菜品种类管理</span>
        </a>
    </li>

    <li class="active">
        <a href="dishes-management.jsp">
            <i class="icon-food"></i>
            <span>菜品管理</span>
        </a>
    </li>

    <li>
        <a class="dropdown-toggle" href="#">
            <i class="icon-edit"></i>
            <span>订单管理</span>
            <i class="icon-chevron-down"></i>
        </a>
        <ul class="submenu">
            <li><a href="order-confirmed.jsp">待确认订单</a></li>
            <li><a href="history-order.jsp">历史订单</a></li>
        </ul>
    </li>

    <li>
        <a class="dropdown-toggle" href="#">
            <i class="icon-comments"></i>
            <span>评论管理</span>
            <i class="icon-chevron-down"></i>
        </a>
        <ul class="submenu">
            <li><a href="uncomment-management.jsp">待回复评论</a></li>
            <li><a href="history-comment.jsp">历史评论</a></li>
        </ul>
    </li>

    <li class="active" id="maxAuthority" style="display: none;">
        <a href="super-authority.jsp">
            <i class="icon-key"></i>
            <span>超级管理员权限</span>
        </a>
    </li>

    <li class="active">
        <a href="personal-profile.jsp">
            <i class="icon-user"></i>
            <span>个人资料</span>
        </a>
    </li>

    <li>
        <a href="./logout">
            <i class="icon-share-alt"></i>
            <span>退出</span>
        </a>
    </li>

</ul>

</body>

<script type="text/javascript">

    /**
     * 控制是否显示超级管理员权限
     */
    window.onload = function () {

        var authority = <%=administrator.isMaximumAuthority()%>;

        if (authority) {
            var maxAuthority = document.getElementById("maxAuthority");
            maxAuthority.style.setProperty('display', 'block');
        }
    };

</script>

</html>