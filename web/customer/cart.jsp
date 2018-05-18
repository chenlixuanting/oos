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
    <title>美味家网上订餐官网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/cart.js"></script>
    <script type="text/javascript" src="asset/js/property_cn.js"></script>

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
                                <a href="index.jsp">首页</a>
                            </span>
                    </li>
                    <li><span><a href="orderLogin.jsp">开始订餐</a></span></li>
                    <li><span><a href="customerCenter.jsp">个人中心</a></span></li>
                    <li class="last_li w5">
                        <a href="" target="_blank">评论专区</a>
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
                            <area shape="rect" coords="6,2,322,29" class="step1" href="regCustomer.jsp"/>
                        </map>
                    </div>
                    <!-- 订单明细和优惠 -->
                    <div id="order_promotion">
                        <!-- 订单详细  -->
                        <div class="order_detail_1">
                            <table width="100%" border="1" class="order_detail_table">
                                <tr>
                                    <th width="6%">序号</th>
                                    <th width="20%">品名</th>
                                    <th width="9%">单价</th>
                                    <th width="10%">数量</th>
                                    <th width="9%">小计</th>
                                    <th width="8%">
                                        <a href="javascript:;" id="clearProduct" style="color:#363435;">全部取消</a>
                                    </th>
                                    <th width="10%" class="right_th">详细</th>
                                </tr>
                            </table>
                        </div>
                        <div class="coupon_code" style="margin-bottom: 37px;*margin-bottom: 40px;">
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

<!-- footer -->
<!-- 弹出层 -->
<!--
<div id="dialog-message" title="友情提示" closeBtn="false" style="display: none;">
    <span></span>
</div>
 -->
<!-- alert 弹出层 -->
<div id="dialog-message-alert" title="友情提示" closeBtn="true" style="display: none;">
    <span></span>
</div>
<!-- dialog-bind-phone 弹出层 -->
<div id="dialog-bind-phone" title="友情提示" closeBtn="true" style="display: none;">
    <span></span>
</div>
<!-- confirm 弹出层 -->
<div id="dialog-message-confirm" title="友情提示" closeBtn="true" style="display: none;">
    <span></span>
</div>
<!-- alert_back 弹出层 -->
<div id="dialog-message-alert-back" title="友情提示" closeBtn="true" style="display: none;">
    <span></span>
</div>
<script type="text/javascript">
</script>
<div id="dialog-loading" closeBtn="false" style="display: none;">
    <span></span>
</div>
<div id="popup-captcha"></div>
</body>
</html>
