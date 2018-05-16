<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="美味家" />
    <meta name="description" content="美味家" />
    <title>美味家宅急送外卖网上订餐官网-美味家优惠套餐-外送菜单-送餐网</title>
    <!-- 加载CSS -->

    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/quote/jquery.js"></script>
    <script type="text/javascript" src="js/quote/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/quote/jquery.lazyload.js"></script>
    <script type="text/javascript" src="js/quote/jquery.ui.yumdialog.js"></script>
    <script type="text/javascript" src="js/quote/property_cn.js"></script>
    <script type="text/javascript" src="js/quote/base.js"></script>
    <script type="text/javascript" src="js/quote/sdc_kfc.js"></script>

    <!-- kfc_ios add js wanglei4 20150528  start-->
    <script type="text/javascript" src="js/quote/pageToUrl.js"></script>

    <!--  kfc_ios add js wanglei4 20150528  end -->
    <script src="js/quote/cart.js" type="text/javascript" language="javascript"></script>
    <script type="text/javascript" src="js/quote/jquery.md5.js"></script>
    <script type="text/javascript" src="js/quote/fingerprint.js"></script>
    <script src="../../static.geetest.com/static/tools/gt.js"></script>
    <title>美味家宅急送官方网站-www.4008823823--订餐官网</title>
    <script type="text/javascript">
        var requestContextPath = 'null';
        // https Start
        var requestContextPathHttps = 'null';
        var appHtmlPath = 'null';
        var httpHtmlPathHttps = 'null';
        // https End
        var httpHtmlPath = 'null';
        var httpResourcePath = 'null';
        var locale = 'zh_CN';
        var httpVersionPath = 'null';
        var code = 'null';
        /* 记住我功能的有效期（天） */
        var keep = 7;
        var riskControlKey = "true";
        var riskControlRequestUrl = 'null';
    </script>
</head>
<body>
    <form id="mainForm" action=" ">
        <input type="hidden" id="page_flag" value="cart" />
        <!-- top -->
        <div id="top">
            <input type="hidden" id="page_flag" value="" />
            <input type="hidden" id="seoPath" value="http://www.4008823823.com.cn/kfcios" />
            <input type="hidden" value="" id="topFlag" name="topFlag" />
            <div class="logo"></div>
            <div class="top_menu">
                <div class="top_menu_1">
                    <input type="hidden" id="isLogin" value="true" />
                    <input type="hidden" id="loginFlag" value="true" />
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

            <input id="userEmail" type="hidden" name="userEmail" value="" /></input>
            <input id="userPhone" type="hidden" name="userPhone" value="" /></input>
            <div class="login_content">
                <div class="login_content_top"></div>
                <div class="order_content_main">
                    <div class="confirmation_order">
                        <!-- 导航条 -->
                        <div class="confirmation_order_title">
                            <img src="images/step_2.gif" border="0" usemap="#Map" />
                            <map name="Map" id="Map">
                                <area shape="rect" coords="6,2,322,29" class="step1" href="regCustomer.jsp" />
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
                                        <th width="9%">优惠价</th>
                                        <th width="9%">小计</th>
                                        <th width="19%">优惠备注</th>
                                        <th width="8%"><a href="javascript:;" id="clearProduct" style="color:#363435;">全部取消</a></th>
                                        <th width="10%" class="right_th">详细</th>
                                    </tr>
                                    <tr class="sct_row" productid="53458"
                                        objectid="1df28d5b-34f0-4eb5-9868-e3894daaa695">
                                        <td>1</td>
                                        <td>喵咪咖啡(拿铁热大)</td>
                                        <td>&yen;25.0</td>
                                        <td><span>1</span></td>
                                        <td>&yen;18.0</td>
                                        <td>&yen; 18.0</td>
                                        <td style="text-align: left;line-height: 18px;">网订任意消费，+18元得喵咪拿铁,每单仅限一份。</td>
                                        <td>
                                            <img src="images/delete_icon_3.png" /> <a class="oiCancel" href="javascript:void(0)">取消</a>
                                        </td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr style="display: none;">
                                        <td></td>
                                        <td colspan="8">
                                            <div class="product_detail">
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="coupon_code" style="margin-bottom: 37px;*margin-bottom: 40px;">
                                
                                <span >
                                    <em class="ft_b">小　计：</em>18.0元 | <em class="ft_b">
                                      	  外送费
                                        	：
                                    </em>9.0元<strong style="color: #F00;">
                                    </strong>
                                </span>
                                
                                <span class="total_price_span" style="margin-top: -20px;margin-left: -46px">
                                    <em class="ft_b">总金额：</em>27.0元
                                </span>
                            </div><!-- 优惠区 -->
                            <input type="hidden" id="promotionProductionsId" value="" />
                            <div class="code_notes">
                                <p class="gift">根据您的订餐，您还可以选择以下优惠项目！</p>
                                <p class="gifr">
                                   	 展开 >
                                </p>
                            </div>
                            <div class="prom_prods">
                                <div class="jleft" style="display: none;"></div>
                                <div class="jright"></div>
                                <div index="0" class="cheap_products typeB first_prom" >
                                    <input type="hidden" value="" name="promotion.msg" />
                                    <input type="hidden" value="0" name="promotion.msgType" />
                                    <h4>
                                        8元波纹霸王薯条
                                    </h4>
                                    <ul class="pro_ul" currentnum="0" maxnum="1">
                                        <li class="li01" pid="1128" pcode="FG1" pitid="36815" maxitemnum="1">
                                            <span class="ImgBox">
                                                <img src="../../img.4008823823.com.cn/kfcios/Version/406_239082.jpg" />
                                            </span>
                                            <span class="Til">
                                               	 波纹霸王薯条
                                            </span>
                                            <span class="pro_number">
                                                <a href="javascript:void(0)" class="promDoMinus2">
                                                    <img src="images/minus_icon_pro_dis.gif" />
                                                </a>
                                                <input type="text" class="pro_number_input" value="0" maxlength="2" disabled="disabled" />
                                                <a href="javascript:void(0)" class="promDoPlus2">
                                                    <img src="images/plus_icon_pro.gif" />
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                    <input type="button" class="promo_btn_2 order_btn_2" />
                                </div>
                                <div index="1" class="cheap_products typeB " >
                                    <input type="hidden" value="" name="promotion.msg" />
                                    <input type="hidden" value="0" name="promotion.msgType" />
                                    <h4>
                                        8元得圣代
                                    </h4>
                                    <ul class="pro_ul" currentnum="0" maxnum="1">
                                        <li class="li01" pid="11217" pcode="FA3EE4DOJ0" pitid="55345" maxitemnum="1">
                                            <span class="ImgBox">
                                                <img src="../../img.4008823823.com.cn/kfcios/Version/435_265503.jpg" />
                                            </span>
                                            <span class="Til">
                                                	抹茶圣代
                                            </span>
                                            <span class="pro_number">
                                                <a href="javascript:void(0)" class="promDoMinus2">
                                                    <img src="images/minus_icon_pro_dis.gif" />
                                                </a>
                                                <input type="text" class="pro_number_input" value="0" maxlength="2" disabled="disabled" />
                                                <a href="javascript:void(0)" class="promDoPlus2">
                                                    <img src="images/plus_icon_pro.gif" />
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                    <input type="button" class="promo_btn_2 order_btn_2" />
                                </div>
                                <div index="2" class="cheap_products typeB " >
                                    <input type="hidden" value="" name="promotion.msg" />
                                    <input type="hidden" value="0" name="promotion.msgType" />
                                    <h4>
                                        7元圣代
                                    </h4>
                                    <ul class="pro_ul" currentnum="0" maxnum="1">
                                        <li class="li02" pid="11169" pcode="FG3" pitid="33723" maxitemnum="1">
                                            <span class="ImgBox">
                                                <img src="../../img.4008823823.com.cn/kfcios/Version/435_265534.jpg" />
                                            </span>
                                            <span class="Til">
                                           	     新原味圣代(草莓酱)
                                            </span>
                                            <span class="pro_number">
                                                <a href="javascript:void(0)" class="promDoMinus2">
                                                    <img src="images/minus_icon_pro_dis.gif" />
                                                </a>
                                                <input type="text" class="pro_number_input" value="0" maxlength="2" disabled="disabled" />
                                                <a href="javascript:void(0)" class="promDoPlus2">
                                                    <img src="images/plus_icon_pro.gif" />
                                                </a>
                                            </span>
                                        </li>
                                        <li class="li02" pid="11169" pcode="FG3" pitid="51398" maxitemnum="1">
                                            <span class="ImgBox">
                                                <img src="../../img.4008823823.com.cn/kfcios/Version/435_265532.jpg" />
                                            </span>
                                            <span class="Til">
                                                	新原圣代比利时巧酱
                                            </span>
                                            <span class="pro_number">
                                                <a href="javascript:void(0)" class="promDoMinus2">
                                                    <img src="images/minus_icon_pro_dis.gif" />
                                                </a>
                                                <input type="text" class="pro_number_input" value="0" maxlength="2" disabled="disabled" />
                                                <a href="javascript:void(0)" class="promDoPlus2">
                                                    <img src="images/plus_icon_pro.gif" />
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                    <input type="button" class="promo_btn_2 order_btn_2" />
                                </div>
                            </div>
                            <div id="noUsePromotionHtml">
                                <div class="promotionList">
                                    <span class="close04"></span>
                                    <div class="code_notes">
                                        <p class="gift">根据您的订餐，您还可以选择以下优惠项目，如您未选择则视为放弃。</p>
                                    </div>
                                    <div class="promotionProds">
                                        <table width="100%">
                                            <tr>
                                                <th class="th1">序号</th>
                                                <th class="th2">优惠描述</th>
                                                <th class="th3">品名</th>
                                                <th class="th4">数量</th>
                                                <th class="th5">操作</th>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="button_div">
                                        <input type="button" class="no_thanks" id="no_thanks" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script type="text/javascript">
                            //判断订单项减少时是否弹出提示
                            var reduceItemFlag = false;
                            $(function () {
                                PromotionUtil.init();
                                var warningCode = "0";
                                if ('2' == warningCode) {
                                    base.yumAlert(property.WarningCode_2);
                                }
                                var halfPriceError = "10000";
                                var halfPNum = 1;
                                var eachHalfNum = 1;
                                if ("1") {
                                    halfPNum = "1";
                                }
                                if ("") {
                                    eachHalfNum = "";
                                }
                                if ('10015' == halfPriceError) {
                                    base.yumAlert(property.halfPriceErrorMsg.format([halfPNum]));
                                }
                                if ('10024' == halfPriceError) {
                                    base.yumAlert(property.eachHalfPriceErrorMsg.format([eachHalfNum]));
                                }
                            });
                        </script>
                        <div class="clear"></div>
                    </div>
                    <p>
                        <input id="step1" type="button" class="step1 backbtn" />
                        <input id="step_pay" type="button" class="nextbtn" />
                    </p>
                    <script>
                        $("#step1").click(function () {
                            location.assign("regCustomer.jsp");
                        });
                        $("#step_pay").click(function () {
                            location.assign("pay.jsp");
                        });
                    </script>
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
    <!--footer start-->
    <script type="text/javascript" src="js/quote/chatService.js"></script>
    <script type="text/javascript" src="js/quote/DSPCommon.js"></script>
    <!-- 加载定制CSS -->
    <link rel="stylesheet" type="text/css" href="http://res.4008823823.com.cn/kfcios/Html/res/css/default.css?1524344121029" />
    <div id="dialog-loading" closeBtn="false" style="display: none;">
        <span></span>
    </div>
    <div id="popup-captcha"></div>
    <script type="text/javascript">
        $(document).ready(function () {
            if (typeof riskControlKey !== "undefined" && riskControlKey) {
                window.brower_id = window.GuanAnFingerBaseInfo.generateUUID();
                new Fingerprint2().get(function (result, components) {
                    GuanAnFingerBaseInfo.picking('https://fp.hwwt8.com/fingerprint/browser', window.brower_id, result);
                });
            }
            // 初始化JS added by Pete
            base.initNav();
            // dataTracking code
            if ('false' == 'true') {
                pageInfo('orderContent');
            }
        });
    </script>
</body>
</html>
<script type="text/javascript" src="js/quote/rc.fp.js"></script>