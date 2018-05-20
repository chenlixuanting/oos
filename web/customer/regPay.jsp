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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="美味家">
    <meta name="description" content="美味家">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>美味家网上订餐官网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/regPay.js"></script>

</head>
<body>
<form id="mainForm" action="">
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true">
                <input type="hidden" id="loginFlag" value="true">
                <span class="span_1 fl_l" id="logon">
					 欢迎&nbsp;<span class="customerName" id="customerName"></span>!<i class="loginExit">退出</i>
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
                    <li class="w1"><span>
					首页</span>
                    </li>
                    <li class="w2"><span>重新登录</span></li>
                    <li class="w3"><span>个人中心</span></li>
                    <li class="last_li w5">
                        <a href="comment.jsp" target="_self">评论专区</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
    <div id="content">
        <div class=" submit_order">
            <div class="submit_order_title">
                <img src="images/step_3.gif" border="0" usemap="#Map">
                <map name="Map" id="Map">
                    <area shape="rect" coords="12,3,323,29" class="step1"
                          href="regCustomer.jsp">
                    <area shape="rect" coords="352,3,660,29" class="step2"
                          href="cart.jsp">
                </map>
            </div>
            <div class="submit_order_main">
                <div class="submit_order_main_info">
                    <div class="address_info">
                        <span class="info_span_2">送餐信息</span>
                        <p id="deliverName">
                        </p>
                        <p id="deliverAddress">
                        </p>
                    </div>
                    <div class="clear"></div>
                    <div class="info_span_6" style="padding:10px 0 0;">联系信息</div>
                    <div style="height: 35px; line-height: 24px; position: relative; margin-top: 10px;" id="mobile">

                    </div>
                </div>
                <div class="submit_order_main_info">
                    <p class="time" style="margin: 10px 0 20px;">
                        <span class="time_span_2">送餐时间：</span>
                        成功提交订单后，预计<span class="time_span_3" id="deliveryTime"></span>送达。</p>
                </div>
                <div class="total_price">
                    <span class="time_span_2">应付总价：</span>
                    <span class="time_span_3" id="totalCost"></span>
                    <span class="donation_account"></span>
                    <!-- <p> -->
                    <ul>
                        <li>
                            <input name="payType" type="radio" value="支付宝支付">支付宝支付
                        </li>
                        <li class="online">
                            <input name="payType" type="radio" checked="checked" value="货到付款">货到付款
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
            <input name="paymentflag" id="paymentflag" type="hidden" value="">
            <input id="back_menu_btn" type="button" class="backbtn">
            <input type="button" class="subBtn">
            <div class="submit_notes">
                友情提示：点击"提交"后，您的订单会立即下到我们的餐厅开始制作食品，因此我们将无法接受修改或取消订单，请提交前仔细核对订单内容。
            </div>
            <div class="clear"></div>
        </div>
    </div>

    <!-- 弹出层 -->
    <!--
    <div id="dialog-message" title="友情提示" closeBtn="false" style="display: none;">
        <span></span>
    </div>
     -->

    <!-- alert 弹出层 -->
    <div id="dialog-message-alert" title="友情提示" closebtn="true" style="display: none;">
        <span></span>
    </div>

    <!-- dialog-bind-phone 弹出层 -->
    <div id="dialog-bind-phone" title="友情提示" closebtn="true" style="display: none;">
        <span></span>
    </div>

    <!-- confirm 弹出层 -->
    <div id="dialog-message-confirm" title="友情提示" closebtn="true" style="display: none;">
        <span></span>
    </div>

    <!-- alert_back 弹出层 -->
    <div id="dialog-message-alert-back" title="友情提示" closebtn="true" style="display: none;">
        <span></span>
    </div>

    <!-- 支付弹出框 -->
    <div id="payPopup" style="display: none;">
    </div>

</form>
</body>
</html>