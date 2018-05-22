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
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="美味家"/>
    <meta name="description" content="美味家"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>美味家网上订餐</title>

    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>
    <link rel="stylesheet" type="text/css" href="css/comment.css">

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/comment.js"></script>

</head>
<body>
<div class="con">

    <!-- 标题 -->
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true"/>
                <input type="hidden" id="loginFlag" value="true"/>
                <span class="span_1 fl_l" id="logon">
                        欢迎&nbsp;<span class="customerName" id="customerName"></span>
                        !
                        <i class="loginExit">退出</i>
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
                    <li class="w1">
                        <span>
                            <a href="continueShopping.jsp">订餐首页</a>
                        </span>
                    </li>
                    <li class="w2"><span><a href="customerExit.action">重新登录</a></span></li>
                    <li class="w3"><span><a href="customerCenter.jsp">个人中心</a></span></li>
                    <li class="last_li w5">
                        <span class="current"><a href="comment.jsp">评论专区</a></span></li>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 内容 -->
    <div id="content">
        <div class="post_comment" id="post_comm">
            <h3 id="post_comment"><span>愿您的每句评论，都能给大家的生活添色彩，带来共鸣，带来思索，带来快乐。</span></h3>
            <div class="add_comm" style="margin-top: 8px;">
                <textarea name="txtBody" id="commentContent" usId="" cols="60" rows="5" class="ipt-txt"
                          placeholder="美味之家有您参与更精彩！" style=""></textarea>
                <input type="submit" name="btnComment" value="发表评论" id="btnComment" class="button">
                <span id="commentMessage"></span>
            </div>

            <script>
                var commentpage = 1;
                var commentpageLatest = 1;
                var hpage = 1;
            </script>

            <div class="comm_list" id="commentlist">
                <h3>
                    <span class="icon2">
                        <input type="radio" name="commentorder" id="commentnew" checked="checked">
                        <label for="commentnew">最新</label>
                        <input type="radio" name="commentorder" id="commentlatest">
                        <label for="commentlatest">最早</label>
                    </span>
                    <a class="refresh">刷新</a>全部评论
                </h3>
                <div id="divcommentlist">
                    <ul class="list" id="LoadArticleReply"></ul>
                    <ul class="list" id="ulcommentlist">
                        <div style="">
                            <li class="entry">
                                <div class="adiv">
					            	<span class="nick">
					            		<a title="软媒通行证数字ID：1299384" target="_blank"
                                           href="http://quan.ithome.com/user/1299384">Tencent马化滕</a>
					            	</span>
                                    <span class="posandtime">美味之家江西宜春网友&nbsp;2018-4-29 14:03:02</span>
                                </div>
                        </div>
                        <div class="comm" style="float: right;margin-top: 28px;"><p>我需要一个响指，就像这样“boom！！！”</p></div>
                        <div class="zhiChi">
					         	<span class="comm_reply" style="float: right;margin-top: 71px;margin-right: -200px;">
					         	<span id="complainmessage32960078"></span>
					         	<a href="javascript:commentComplain(32960078)">举报</a>
					         	<a id="agree32960078" class="s" href="javascript:commentVote(32960078,1)">支持(0)</a>
					         	<a id="against32960078" class="a" href="javascript:commentVote(32960078,2)">反对(0)</a>
					         	<a href="javascript:ShowReply(32960078,357667,0,32960078,'')">回复</a></span>
                        </div>
                        <ul class="reply" id="lou32960078" style="display:none"></ul>
                        <div id="Reply32960078"></div>
                    </ul>
                </div>
                </li>
                <li class="entry">

            </div>
            <div id="divLatest" style="display: none">
                <ul class="list" id="ulcommentlistLatest"></ul>
                <ul class="list" id="LoadArticleReplyLatest"></ul>
                <div id="CommentLatestMore"></div>
            </div>
        </div>
        <input type="hidden" id="hash" value="A036B4FBC39DBC71">
    </div>

</div>
<div id="footer"></div>
<!-- 加载JS -->
</body>
</html>
