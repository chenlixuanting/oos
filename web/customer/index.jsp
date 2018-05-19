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

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/quote/PageEffect.js"></script>
    <script type="text/javascript" src="asset/js/index.js"></script>
    <script type="text/javascript" src="asset/js/pageToUrls.js"></script>
</head>

<body>
<form id="mainForm" name="myForm" action="" method="post">

    <div class="con">

        <!-- 导航栏 -->
        <div id="top">

            <div class="logo"></div>

            <div class="top_menu">

                <div class="top_menu_1">

                    <input type="hidden" id="isLogin" value="false"/> <span
                        class="span_1 fl_l" id="logout">欢迎网上订餐！</span>

                    <div class="fl_r">
							<span class="span_2 favbtn"> <a href="javascript:;">收藏本订餐网站</a>
							</span>
                    </div>

                    <div class="clear"></div>

                </div>
                <div class="clear"></div>

                <div class="top_menu_2">

                    <ul>
                        <li>
                            <span class="current">
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

        <!-- 内容页面 -->
        <input type="hidden" id="tag" value="index"/> <input type="hidden" name="classId" id="classId" value=""/>

        <div id="content" class="ersee_product_height_ie6" style="position: relative;">

            <!-- 左侧菜单栏-->
            <div id="s_lm" class="notmenu left_menu s_lm" style="position: absolute;">
                <div class="left_menu_top">
                </div>
                <div class="left_menu_main">
                    <ul id="nav">

                        <li id="promotion">
                            <h4></h4>
                            <ul id="ChMenu" class="IClass">
                                <li class="last_li"></li>
                            </ul>
                        </li>

                        <!-- 早餐 -->
                        <li id="breakfast">
                            <h5 onclick="DoMenu('ChildMenu2','child2')">
                                <span> (5:45-9:14) </span>
                                <a href="javascript:;" id="child2" class="plus_btn"></a>
                            </h5>
                            <ul id="ChildMenu2" class="IClass collapsed" time="5:45-9:14"
                                classType="B">
                            </ul>
                        </li>

                        <!-- 中餐 -->
                        <li id="lunch">
                            <h6 onclick="DoMenu('ChildMenu3','child3')">
                                <span> (9:15-22:44) </span>
                                <a href="javascript:;" id="child3" class="plus_btn"></a>
                            </h6>
                            <ul id="ChildMenu3" class="IClass collapsed" time="9:15-22:44"
                                classType="L">
                            </ul>
                        </li>

                        <!-- 夜宵 -->
                        <li id="dinner">
                            <p onclick="DoMenu('ChildMenu4','child4')" class="night_food">
                                <span> (22:45-次日5:44) </span>
                                <a id="child4" href="javascript:;" class="plus_btn"></a>
                            </p>
                            <ul id="ChildMenu4" class="IClass collapsed" time="22:45-次日5:44"
                                classType="D">
                            </ul>
                        </li>

                    </ul>
                </div>
                <div class="left_menu_btm"></div>
            </div>

            <%--
                点击菜品的弹出框
            --%>
            <div class="ui-dialog ui-widget ui-widget-content ui-corner-all big_bg" tabindex="-1"
                 style="outline: 0px; z-index: 1002; height: auto; width: 555px; top: 403.5px; left: 155.5px; display: none;"
                 role="dialog" aria-labelledby="ui-id-1">

                <div class="ui-dialog-titlebar ui-widget-header1 ui-corner-all ui-helper-clearfix"><span id="ui-id-1"
                                                                                                         class="ui-dialog-title">&nbsp;</span>
                </div>
                <div id="menuPopupConShow" class="popup ui-widget-content"
                     style="width: auto; min-height: 120px; height: auto;"
                     scrolltop="0" scrollleft="0">

                    <div class="popup_main popbox_p_bg03">
                        <p class="close_icon"><a><img
                                src="images/close_icon.png"></a>
                        </p>

                        <!-- 产品区域 -->
                        <div class="popup_product_detail">
                            <div>
                                <div class="popup_product_detail_img">
                                    <img src=""
                                         alt="">
                                </div>
                                <div class="popup_product_detail_txt">
                                    <h4></h4>
                                    <div class="detail_txt">
                                        <p id="desc"></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="price_span_2"><span class="price"></span>元/份</div>
                            </div>
                            <input type="button" id="loginBtn" class="layerorder_btn">
                        </div>
                    </div>
                </div>
            </div>

            <!--文字链-->
            <!-- 公告 -->
            <div id="s_nt" class="notice s_nt"
                 style="position: absolute; top: 0; margin: 0 0 0 212px; z-index: 100;">
                <div class="news news_icon">&gt;最新活动：</div>
                <div id="rolling"></div>
            </div>

            <!-- 详细内容部分 -->
            <div id="main" class="e_main">
                <div class="home_bg_mid" style="margin:36px 0 0;">
                    <div class="prod_show" style="width:600px">
                        <input type="hidden" id="ptpListStr" value="">
                        <ul class="product_ul"></ul>
                    </div>
                </div>
            </div>

            <!-- 右侧模块 -->
            <div id="s_login" class="notmenu right s_rm_login"
                 style="position: absolute; top: 0; float: none; margin: 0 0 0 779px; height: 542px;">

                <!-- 右侧模块 -->
                <!-- 右侧订单 -->
                <!-- 右侧登陆 -->
                <input type="hidden" id="displayUserAgreement" name="displayUserAgreement" value="0"/>

                <div class="right_order">

                    <div class="right_order_top">
                        <b>开始订餐</b>
                    </div>

                    <div class="right_order_main">
                        <p class="username">
                            <input name="mobi" id="mobi" type="text" value="请输入手机号"
                                   class="input_text" maxlength="50"/>
                        </p>
                        <p class="ersee-indexlogin">
                            <input id="input_reme" type="checkbox" class="fl_l" value=""/>
                            <span class="checkbox_txt fl_l">记住我</span>
                        </p>
                        <a href="javascript:void(0);" class="wanji" style="display: none">忘记密码？</a>
                    </div>

                    <!-- 【下一步】按钮 -->
                    <div class="right_order_btm">
                        <p id="loginSubmit">
                            <input type="button" class="next_btn"/>
                        </p>
                        <p class="txt_2 mt5px">友情提示：</p>
                        <ul>
                            <li>如果您曾使用我们的订餐服务，请输入您上次使用的手机号码。</li>
                        </ul>
                    </div>
                </div>

                <!-- 帮助中心 -->
                <!--  帮助中心-->
                <div class="help" style="line-height: 13px; display:none;">
                    不设最低起送金额，每单酌收9元外送费。为了保证食物品质，美味家宅急送有送餐范围和服务时间限制。
                    早餐、夜宵仅限部分肯德基宅急送送餐区域供应。美味家宅急送实施专属菜单及价格，不同城市的送餐菜单和价格有所不同。
                    不同城市、不同时段产品品项及价格有所不同。详情以输入送餐地址后显示的实际供应的菜单为准。西藏自治区的美味家宅急送与全国其他地区实行不同价格。
                    “被比较价格”，是指美味家宅急送官网同款产品的单品价或套餐内产品的单品价总价，所称优惠或折扣金额均以此为计算依据。
                    <div class="index_odetail">
                        <a href="#" target="_blank" looyu_bound="1">详情�</a>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</form>

<%--实现两边的菜单栏贴紧；浏览器顶部--%>
<script>
    $.fn.smartFloat = function () {
        var position = function (element) {
            var top = element.position().top, pos = element.css("position");
            var browser = navigator.appName;
            var browser2 = navigator.userAgent;
            $(window).scroll(function () {
                var scrolls = $(this).scrollTop();
                if (scrolls > 120) {
                    if (window.XMLHttpRequest) {
                        if (browser2.indexOf("Chrome") > -1 || browser2.indexOf("MSIE") > -1 || browser2.indexOf("iPhone") > -1) {
                            element.css({position: "fixed", top: 0});//更改这里的0可以设定在哪个Y位置固定
                        } else {
                            element.css({position: "fixed", top: scrolls});
                        }
                    } else {
                        element.css({top: scrolls});
                    }
                } else {
                    element.css({position: pos, top: top});
                }
            });
        };
        return $(this).each(function () {
            position($(this));
        });
    };

    $(".notmenu").smartFloat();
</script>
</body>
</html>