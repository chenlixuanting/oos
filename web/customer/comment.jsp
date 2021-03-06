<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/customer/";
%>
<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="美味家"/>
    <meta name="description" content="美味家"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>美味家网上订餐</title>

    <%--加载CSS--%>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="css/comment.css">

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/comment.js"></script>
</head>
<body>
<div class="con">

    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true"/>
                <input type="hidden" id="loginFlag" value="true"/>
                <span class="span_1 fl_l" id="logon">
                    欢迎使用,美味家网上订餐系统！
                </span>
                <div class="fl_r">
                    <span class="span_2 favbtn">
                        <a href="javascript:;">收藏本订餐网站</a>
                    </span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
            <div class="top_menu_2">
                <ul>
                    <li class="w1"><span><a href="continueShopping.jsp">订餐首页</a></span></li>
                    <li class="w2"><span><a href="customerExit.action">重新登录</a></span></li>
                    <li class="w3"><span><a href="customerCenter.jsp">个人中心</a></span></li>
                    <li class="last_li w5"><span class="current"><a href="comment.jsp">评论专区</a></span></li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>

    <div id="content">
        <div class="post_comment" id="post_comm">
            <h3 id="post_comment"><span>愿您的每句评论，都能给大家的生活添色彩，带来共鸣，带来思索，带来快乐。</span></h3>
            <div class="add_comm" style="margin-top: 8px;">
                <textarea name="txtBody" id="commentContent" usId="" cols="60" rows="5" class="ipt-txt"
                          placeholder="美味之家有您参与更精彩！" style=""></textarea>
                <input type="submit" name="btnComment" value="发表评论" id="btnComment" class="button">
                <span id="commentMessage"></span>
            </div>
            <div class="comm_list" id="commentlist">
                <h3>
                    <a class="refresh">刷新全部评论</a>
                </h3>
                <div id="divcommentlist">
                    <ul class="list" id="ulcommentlist"></ul>
                </div>
                </li>
            </div>
            <div id="divLatest" style="display: none">
                <ul class="list" id="ulcommentlistLatest"></ul>
                <ul class="list" id="LoadArticleReplyLatest"></ul>
                <div id="CommentLatestMore"></div>
            </div>
        </div>
    </div>
</div>
<div id="footer">
    <div class="fl_l">
        <ul>
            <li class="last_li noBg">版权所有: 美味家汉堡有限公司</li>
            <li class="record_li">地址: 桂林电子科技大学花江校区</li>
            <li class="record_li">联系电话: 18477062310</li>
        </ul>
    </div>
    <div class="clear"></div>
</div>
</body>
</html>
