<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/customer/";
%>

<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="美味家"/>
    <meta name="description" content="美味家"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>美味家网上订餐官网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/cart.js"></script>
    <script type="text/javascript" src="asset/js/property_cn.js"></script>
    <script type="text/javascript" src="asset/js/common.js"></script>

</head>
<body>
<form id="mainForm" action=" ">
    <input type="hidden" id="page_flag" value="cart"/>
    <!-- top -->
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true"/>
                <input type="hidden" id="loginFlag" value="true"/>
                <span class="span_1 fl_l" id="logon">
                       	 欢迎网上订餐！
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
                            <a href="" id="nav1">订餐首页</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="customerExit.action" id="nav2">重新登录</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="" id="nav3">个人中心</a>
                        </span>
                    </li>
                    <li class="last_li w5">
                        <a href="comment.jsp" target="_self">评论专区</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
    <!-- 详细内容区 -->
    <div id="content">
        <div class="login_content">
            <div class="login_content_top"></div>
            <div class="order_content_main">
                <div class="confirmation_order" style="min-height:0px;">
                    <!-- 导航条 -->
                    <div class="confirmation_order_title">
                        <img src="images/step_2.gif" border="0" usemap="#Map"/>
                        <map name="Map" id="Map">
                            <area shape="rect" coords="6,2,322,29" class="step1" href="continueShopping.jsp"/>
                        </map>
                    </div>
                    <!-- 订单明细和优惠 -->
                    <div id="order_promotion">
                        <!-- 订单详细  -->
                        <div class="order_detail_1">
                            <table width="100%" border="1" class="order_detail_table">
                            </table>
                        </div>
                        <div class="coupon_code" style="margin-bottom: 37px;*margin-bottom: 40px;">
                            <span class="detail_price_span"></span>
                            <span class='total_price_span' style='margin-top: -20px;margin-left: -46px'></span>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <p>
                    <input id="step1" type="button" class="step1 backbtn"/>
                    <input id="step_pay" type="button" class="nextbtn"/>
                </p>
            </div>
            <div class="login_content_btm"></div>
        </div>
    </div>
</form>
</body>
</html>
