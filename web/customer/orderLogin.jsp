<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/customer/";
%>

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

    <%-- 加载CSS--%>
    <link rel="stylesheet" type="text/css"
          href="css/style.css"/>
    <link rel="stylesheet" type="text/css"
          href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="asset/js/common.js"></script>
    <script type="text/javascript" src="asset/js/orderLogin.js"></script>
    <script type="text/javascript" src="asset/js/property_cn.js"></script>
    <script type="text/javascript" src="asset/js/pageToUrls.js"></script>
</head>
<body>
<form id="mainForm" name="myForm" action="" method="post">
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="false"/> <span
                    class="span_1 fl_l" id="logout"> 欢迎使用,美味家网上订餐系统！</span>
                <div class="fl_r">
						<span class="span_2 favbtn"> <a href="javascript:;">收藏本订餐网站</a>
						</span>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
            <div class="top_menu_2">
                <ul>
                    <li><span><a href="index.jsp">首页</a></span></li>
                    <li class="w2"><span class="current"><a
                            href="orderLogin.jsp">开始订餐</a></span></li>
                    <li><span><a href="customerCenter.jsp">个人中心</a></span></li>
                    <li class="last_li w5">
                        <a href="comment.jsp" target="_self">评论专区</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
    <div id="content">
        <div class="login_content">
            <input type="hidden" id="checkFlag" name="checkFlag" value=""/> <input
                type="hidden" id="toPage" name="toPage" value=""/> <input
                type="hidden" name="token_for_request" value=""/> <input
                type="hidden" id="displayUserAgreement" name="displayUserAgreement"
                value="0"/>
            <ul>
                <li><span class="Loginbox Loginboxbg01"> <input
                        name="mobi" id="mobi" type="text" class="loinput_text"
                        value='请输入手机号' maxlength="50"/>
					</span></li>
                <li id="showPwd" style="display: none;"><span
                        class="Loginbox Loginboxbg03"> <input
                        type="text" class="loinput_text" id="password_text" value='请输入密码'/>
					</span></li>
                <li id="showVerifyCode" style="display: none">
                    <div class="validate_user_line">
                        <div class="validate_user_value">
                            <input id="verifyCode"
                                   class="validate_user_input validate_user_smscode"/>
                            <div class="validate_btn">
                                <img src="getRandVerifyCode.action" onclick="refreshVerifyCode();"
                                     id="verifyCodeImg"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span class="Loginother">
					</span>
                </li>
            </ul>
            <input type="button" id="loginSubmit" class="layerorder_btn"/>
            <div class="lotishi">
                友情提示： <br> <span>如果您曾使用我们的订餐服务，请输入您上次使用的手机号码。</span>
            </div>
            <div class="xuzhi">
                <p>订单须知</p>
                <p>1)产品和包装以实物为准，产品均加强检测，请放心食用；</p>
                <p>2)为保证食物质量，美味家送设有送餐范围。若您的送餐地址超出送餐范围无法送餐，敬请谅解！建议您就近选择美味家餐厅用餐；</p>
                <p>3)不设最低消费，每单收取统一外送费，谢绝小费。</p>
                <p>4)如遭遇不可抗力因素，美味家宅急送将暂时不提供相关服务，敬请谅解！</p>
            </div>
        </div>
    </div>
</form>
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
