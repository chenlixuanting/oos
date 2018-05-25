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
                    <a class="refresh">刷新</a>全部评论
                </h3>
                <div id="divcommentlist">
                    <ul class="list" id="ulcommentlist">

                        <li class="entry">
                            <div>

                                <div class="info rmp"><strong class="p_floor">1楼</strong>
                                    <div class="nmp">
                                        <span class="nick">
                                            <a>蕾丝边</a>
                                        </span>
                                        <span class="posandtime">&nbsp;2018-2-28 19:51:55</span>
                                    </div>
                                </div>

                                <div class="comm">
                                    <p>因为UWP版的爱奇艺没广告，而且不用开会员也能看1080P，不然还是继续用Windows7</p>
                                </div>

                                <ul class="reply" id="">
                                    <li class="gh">
                                        <div>
                                            <div class="re_comm">
                                                <p>
                                                    <span>回复1#
                                                        <a target="_blank"
                                                           href="https://quan.ithome.com/user/833749"
                                                           class="ruser">Aishaoquan</a>：
                                                    </span>Mac不能玩腾讯很多游戏
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </li>

                        <li class="entry">
                            <div>

                                <div class="info rmp"><strong class="p_floor">1楼</strong>
                                    <div class="nmp">
                                        <span class="nick">
                                            <a>蕾丝边</a>
                                        </span>
                                        <span class="posandtime">&nbsp;2018-2-28 19:51:55</span>
                                    </div>
                                </div>

                                <div class="comm">
                                    <p>因为UWP版的爱奇艺没广告，而且不用开会员也能看1080P，不然还是继续用Windows7</p>
                                </div>

                                <ul class="reply" id="">
                                    <li class="gh">
                                        <div>
                                            <div class="re_comm">
                                                <p>
                                                    <span>回复1#
                                                        <a target="_blank"
                                                           href="https://quan.ithome.com/user/833749"
                                                           class="ruser">Aishaoquan</a>：
                                                    </span>Mac不能玩腾讯很多游戏
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </li>

                        <li class="entry">
                            <div>

                                <div class="info rmp"><strong class="p_floor">1楼</strong>
                                    <div class="nmp">
                                        <span class="nick">
                                            <a>蕾丝边</a>
                                        </span>
                                        <span class="posandtime">&nbsp;2018-2-28 19:51:55</span>
                                    </div>
                                </div>

                                <div class="comm">
                                    <p>因为UWP版的爱奇艺没广告，而且不用开会员也能看1080P，不然还是继续用Windows7</p>
                                </div>

                                <ul class="reply" id="">
                                    <li class="gh">
                                        <div>
                                            <div class="re_comm">
                                                <p>
                                                    <span>回复1#
                                                        <a target="_blank"
                                                           href="https://quan.ithome.com/user/833749"
                                                           class="ruser">Aishaoquan</a>：
                                                    </span>Mac不能玩腾讯很多游戏
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </li>

                        <li class="entry">
                            <div>

                                <div class="info rmp"><strong class="p_floor">1楼</strong>
                                    <div class="nmp">
                                        <span class="nick">
                                            <a>蕾丝边</a>
                                        </span>
                                        <span class="posandtime">&nbsp;2018-2-28 19:51:55</span>
                                    </div>
                                </div>

                                <div class="comm">
                                    <p>因为UWP版的爱奇艺没广告，而且不用开会员也能看1080P，不然还是继续用Windows7</p>
                                </div>

                                <ul class="reply" id="">
                                    <li class="gh">
                                        <div>
                                            <div class="re_comm">
                                                <p>
                                                    <span>回复1#
                                                        <a target="_blank"
                                                           href="https://quan.ithome.com/user/833749"
                                                           class="ruser">Aishaoquan</a>：
                                                    </span>Mac不能玩腾讯很多游戏
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </li>

                    </ul>
                </div>
                </li>
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
