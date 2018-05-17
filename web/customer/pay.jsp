<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="美味家">
    <meta name="description" content="美味家">
    <title>美味家网上订餐官网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>

</head>
<body>
<form id="mainForm" action="http://www.4008823823.com.cn/kfcios/saveCustomer.action">
    <input type="hidden" id="bank" name="bank" value="">
    <input type="hidden" id="trackUserId" name="trackUserId" value="9ca31493-587e-4631-960e-0a49fdb4f6e0">
    <input type="hidden" id="trackOrderNo" name="trackOrderNo" value="IBJN0291526555839661135614">
    <input type="hidden" id="trackProductionsId" name="trackProductionsId" value="56693,1404,null">
    <input type="hidden" id="trackOrderPrice" name="trackOrderPrice" value="120.0">
    <input type="hidden" id="cid" name="cid" value="9ca31493-587e-4631-960e-0a49fdb4f6e0">
    <input type="hidden" id="newUserId" name="newUserId" value="">
    <input type="hidden" id="newUserName" name="newUserName" value="">
    <input type="hidden" id="invoiceTitleList" name="invoiceTitleList" value="[]">
    <input type="hidden" id="unionCardPayTest" name="unionCardPayTest">
    <div id="top">
        <input type="hidden" id="page_flag" value="">
        <input type="hidden" id="seoPath" value="http://www.4008823823.com.cn/kfcios">
        <input type="hidden" value="" id="topFlag" name="topFlag">

        <div class="logo"></div>
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true">
                <input type="hidden" id="loginFlag" value="true">
                <span class="span_1 fl_l" id="logon">
					 欢迎<span class="customerName" id="customerName">428427 先生</span>
					  
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
                    <li class="w1"><span>
					首页</span>
                    </li>
                    <li class="w2"><span>重新登录</span></li>
                    <li class="w3"><span>个人中心</span></li>
                    <li class="w4"><span class="">
					手机订餐APP</span></li>
                    <li class="last_li w5">
                        <a href="http://www.4008823823.com.cn/kfcios/jsp/help/help_new.html" target="_blank">帮助中心</a>
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
                          href="http://www.4008823823.com.cn/kfcios/saveCustomer.action###">
                    <area shape="rect" coords="352,3,660,29" class="step2"
                          href="http://www.4008823823.com.cn/kfcios/saveCustomer.action###">
                </map>
            </div>
            <div class="submit_order_main">
                <div class="submit_order_main_info">
                    <div class="address_info">
                        <span class="info_span_2">送餐信息</span>
                        <p>
                            <span class="info_span_1">顾客姓名：</span>啊我说的去玩先生</p>
                        <p>
                            <span class="info_span_1">送餐地址：</span>滨河1号(大陈各庄)121</p>
                    </div>
                    <div class="clear"></div>
                    <div class="info_span_6" style="padding:10px 0 0;">联系信息</div>
                    <div style="height: 35px; line-height: 24px; position: relative; margin-top: 10px;">
                        <span class="info_span_1">联系电话：</span>18174198474
                        <div id="phone_number_input" style="display: none">
                            <input name="note" type="text" class="other_input other_input_phone" value="只输入手机号码"
                                   maxlength="15" onfocus="if(this.value == this.defaultValue) this.value = &#39;&#39;;"
                                   onblur="if(this.value == &#39;&#39;) this.value = this.defaultValue;">
                        </div>
                    </div>
                </div>
                <div class="submit_order_main_info">
                    <p class="time" style="margin: 10px 0 20px;">
                        <span class="time_span_2">送餐时间：</span>
                        成功提交订单后，预计<span class="time_span_3">30</span>分钟左右送达。</p>
                </div>
                <div class="total_price">
                    <span class="time_span_2">应付总价：</span>
                    <span class="time_span_3">120.0元</span>
                    <span class="donation_account"></span>
                    <!-- <p> -->
                    <ul>
                        <li>
                            <input name="payType" type="radio" value="2" onclick="doSelectPay(&#39;alipayPay&#39;)">支付宝支付
                        </li>
                        <li class="online">
                            <input name="payType" type="radio" value="2" onclick="doSelectPay(&#39;online&#39;)">货到付款
                        </li>
                    </ul>
                </div>
            </div>
            <ul id="online" style="display: none;float: left;_clear:both;margin-left: 43px;">
                <li><input id="bank_1" type="radio" value="ICBCB2C" name="checkPayment"><label for="bank_1"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_zggsyh_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_2" type="radio" value="CMB" name="checkPayment"><label for="bank_2"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_zsyh_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_3" type="radio" value="CCB" name="checkPayment"><label for="bank_3"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_ccb_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_4" type="radio" value="ABC" name="checkPayment"><label for="bank_4"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_abc_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_5" type="radio" value="BOCB2C" name="checkPayment"><label for="bank_5"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/BOC_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_6" type="radio" value="COMM" name="checkPayment"><label for="bank_6"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_comm_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_7" type="radio" value="HZCBB2C" name="checkPayment"><label for="bank_7"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/HZCB_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_8" type="radio" value="CIB" name="checkPayment"><label for="bank_8"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/index_38.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_9" type="radio" value="CMBC" name="checkPayment"><label for="bank_9"> <span
                        class="bank_img"> <img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_cmbc_s.gif"
                                               disabled="disabled"></span></label></li>
                <li><input id="bank_10" type="radio" value="GDB" name="checkPayment"><label for="bank_10"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_gdb_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_11" type="radio" value="SDB" name="checkPayment"><label for="bank_11"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_sdb_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_12" type="radio" value="SPDB" name="checkPayment"><label for="bank_12"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/SPDB_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_13" type="radio" value="CITIC" name="checkPayment"><label for="bank_13"> <span
                        class="bank_img"> <img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_itic_s.gif"
                                               disabled="disabled"></span></label></li>
                <li><input id="bank_14" type="radio" value="CEB-DEBIT" name="checkPayment"><label for="bank_14"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/icon_cebbank_s.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_15" type="radio" value="SHBANK" name="checkPayment"><label for="bank_15"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/SHBANK_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_16" type="radio" value="NBBANK" name="checkPayment"><label for="bank_16"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/NBBANK_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_17" type="radio" value="SPABANK" name="checkPayment"><label for="bank_17"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/SPABANK_OUT.gif"
                                              disabled="disabled"></span></label></li>
                <li><input id="bank_18" type="radio" value="BJRCB" name="checkPayment"><label for="bank_18"> <span
                        class="bank_img"><img src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/BJRCB_OUT.gif"
                                              disabled="disabled"></span></label></li>
            </ul>
            <div class="clear"></div>
            <!--协议开始-->
            <!--协议结束-->
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

    <script type="text/javascript">
        window.reseveKey = '#params:property.contactInfo,18174198474';
    </script>

    <script type="text/javascript">
    </script>
    <!--footer start-->
    <script type="text/javascript" src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/chatService.js.下载"></script>
    <script type="text/javascript" src="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/DSPCommon.js.下载"></script>
    <!-- 加载定制CSS -->

    <link rel="stylesheet" type="text/css" href="./肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网_files/default.css">
    <!-- <div style="height: 65px;width: 100%;"></div> -->
    <!-- 支付弹出框 -->
    <div id="payPopup" style="display: none;">
    </div>

    <div id="pay_main_pop" class="pay_main_pop pay_content" style="display: none;">
        <!-- <span class="close03"></span> -->
        <!-- 请您在新打开的网上银行页面完成付款 -->
        <div class="pay_title">请您在新打开的网上银行页面完成付款</div>
        <div class="pay_item">
            <!-- 付款完成前请不要关闭此窗口。 -->
            <p class="pay_text">付款完成前请不要关闭此窗口。</p>
            <p class="pay_text">完成付款后请根据您的情况点击以下的按钮：</p>
        </div>
        <div class="pay_btn">
            <input type="button" class="pay_done" value="已完成付款">
            <input type="button" class="pay_end" value="付款遇到问题">
        </div>
    </div>
</form>
</body>
</html>