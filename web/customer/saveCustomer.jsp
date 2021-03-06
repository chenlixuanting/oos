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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="美味家"/>
    <meta name="description" content="美味家"/>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>美味家网上订餐官网</title>

    <%-- 加载CSS --%>
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/saveCustomer.js"></script>
    <script type="text/javascript" src="asset/js/property_cn.js"></script>

</head>
<body>
<div id="top">
    <div class="top_menu">
        <div class="top_menu_1">
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
                <li class="w1">
                    <span>
                        <a href="index.jsp">首页</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="orderLogin.jsp">开始订餐</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="customerCenter.jsp">个人中心</a>
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
<div id="content">
    <div class="confirmation_order">
        <div class="confirmation_order_title">
            <img src="images/step_3.gif" border="0" usemap="#Map"/>
            <map name="Map" id="Map">
                <area shape="rect" coords="12,3,323,29" class="step1" href="regCustomer.jsp"/>
                <area shape="rect" coords="352,3,660,29" class="step2" href="cart.jsp"/>
            </map>
        </div>
        <div class="submit_order_main">
            <div class="reminder">
                欢迎您初次订餐，为了保障您的权益，请先阅读本站
                <a href="#" class="red02">用户协议</a>，填写完以下信息（加星号<span
                    class="red">*</span>为必填项）后，提交并选择支付
            </div>
            <div class="userinfo">
                <ul>
                    <li>
                        <div class="userinfo_til"><span class="red">*</span> 客户姓名：</div>
                        <div class="input_box">
                            <input id="username" type="text" name="username" value='客户姓名'/>
                        </div>
                        <div class="radio_box">
                            <input id="gender" name="gender" type="hidden" value="0"/>
                            <span class="radio_invoice">
                                    <a href="javascript:void(0);" class="sex male on">先生</a>
                                </span>
                            <span class="radio_invoice">
                                    <a href="javascript:void(0);" class="sex female">女士</a>
                                </span>
                        </div>
                    </li>
                    <li>
                        <div class="userinfo_til"><span class="red">*</span>
                            <span class="pr_num_jiange">手机</span>：
                        </div>
                        <div class="input_box_iphone" id="input_box_iphone"></div>
                        <div id="tipYoQ"><span>友情提示：您的手机号码将作为您的登录账户</span></div>
                    </li>
                </ul>
                <ul id="password_new">
                    <li id="setPassword">
                        <div class="userinfo_til"><span class="red">*</span> <span
                                class="pr_num_jiange">密码</span>：
                        </div>
                        <div class="input_box">
                            <input type="text" id="password" name='password' maxlength="16"
                                   style="display:block;" value='请输入密码'/>
                        </div>
                        <div class="passwordCanSee">
                        </div>
                        <div class="radio_edit">请输入6~16位密码</div>
                    </li>
                </ul>
                <div class="tishi">
                    <div class="userinfo_tils">友情提示：</div>
                    <div class="add_boxs">
                        <p>系统将自动保存您的订餐信息，方便您下次点餐。</p>
                    </div>
                </div>
            </div>
            <div class="agreement">
                <p>
                    <span class="p_left"><a id="clickAgree" class="un" value="0" href="javascript:void(0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我已阅读并同意</a></span>
                    <span class="p_right">
                        <a href="javascript:void(0);">
                            用户协议
                        </a>
                    </span>
                    <span class="p_right" style="margin-left:5px;">
                        <a href="javascript:void(0);">
                            隐私条款
                        </a>
                    </span>
                </p>
            </div>
        </div>
        <input type="button" class="b_shang" id="back_menu_btn1"/>
        <input type="submit" class="b_xia" id="submit_btn" value=""/>
        <div class="clear"></div>
    </div>
</div>
</body>
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
</html>
