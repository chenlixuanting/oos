<%@ page import="com.guet.oos.po.User" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    String path = request.getContextPath();

    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/customer/";

    User user = (User) request.getSession().getAttribute("user");
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

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/quote/PageEffect.js"></script>
    <script type="text/javascript" src="asset/js/continueShopping.js"></script>
    <script type="text/javascript" src="asset/js/pageToUrls.js"></script>
    <script type="text/javascript" src="asset/js/property_cn.js"></script>
</head>

<body style="_width: 100%; _height: 100%; display: block;">
<form id="mainForm" name="myForm" action="" method="post">
    <div class="con">
        <input type="hidden" id="specialIds" value=""/> <input
            type="hidden" id="beverageClass" value=""/>
        <!-- 导航栏 -->
        <div id="top">
            <div class="top_menu">
                <div class="top_menu_1">
                    <input type="hidden" id="isLogin" value="true"/> <input
                        type="hidden" id="loginFlag" value="true"/> <span
                        class="span_1 fl_l" id="logon">欢迎 <%=user.getUsername() + " " + user.getSex()%> 网上订餐！</span>
                    <div class="fl_r">
                        <span class="span_2 favbtn"> <a href="javascript:;">收藏本订餐网站</a>
                        </span>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="clear"></div>
                <div class="top_menu_2">
                    <ul>
                        <li><span class="current"> 首页</span></li>
                        <li><span><a href="customerExit.action">重新登录</a></span></li>
                        <li><span><a href="customerCenter.jsp">个人中心</a></span></li>
                        <li class="last_li w5">
                            <a href="comment.jsp" target="_self">评论专区</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <!-- 内容页面 -->
        <input type="hidden" id="tag" value="index"/>
        <input type="hidden" name="classId" id="classId" value=""/>
        <input type="hidden" name="gotoBeforeLoginClass" id="gotoBeforeLoginClass" value="Y"/>
        <input type="hidden" name="addBeforeLoginProduce"
               id="addBeforeLoginProduce" value="Y"/>

        <div id="content" class="ersee_product_height_ie6">

            <!-- 左侧菜单栏 -->
            <div id="s_lm" class="left_menu s_lm" style="position: absolute;">
                <div class="left_menu_top"></div>
                <div class="left_menu_main">
                    <ul id="nav">

                        <li id="promotion">
                            <h4></h4>
                            <ul id="ChMenu" class="IClass">
                                <li class="last_li"></li>
                            </ul>
                        </li>

                        <!-- 早餐 -->
                        <li id="breakfast" style="display: none">
                            <h5 onclick="DoMenu('ChildMenu2','child2')">
                                <span> (5:45-9:14) </span>
                                <a href="javascript:;" id="child2" class="plus_btn"></a>
                            </h5>
                            <ul id="ChildMenu2" class="IClass collapsed" time="5:45-9:14"
                                classType="B">
                            </ul>
                        </li>

                        <!-- 中餐 -->
                        <li id="lunch" style="display:none;">
                            <h6 onclick="DoMenu('ChildMenu3','child3')">
                                <span> (9:15-22:44) </span>
                                <a href="javascript:;" id="child3" class="plus_btn"></a>
                            </h6>
                            <ul id="ChildMenu3" class="IClass collapsed" time="9:15-22:44"
                                classType="L">
                            </ul>
                        </li>

                        <!-- 夜宵 -->
                        <li id="dinner" style="display: none">
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

                                <div class="price_span_1">
                                    <span class="product_number">
                                        <a class="doMinus" onclick="sub(this);" href="javascript:;">
                                            <img src="images/minus_icon_3.gif">
                                        </a>

                                        <input type="text" value="1" maxlength="2" dsId="" class="pro_number_input2">

                                        <a class="doPlus" onclick="add(this);" href="javascript:;">
                                            <img src="images/add_icon_3.gif">
                                        </a>
                                    </span>
                                </div>

                            </div>
                            <div>
                            </div>
                            <div class="clear"></div>
                            <p class="popup_btn" style="padding-top: 0px;">
                                <a class="orderBtn" href="javascript:;" onclick="orderModelBtn();">
                                    <img src="images/popup_btn_2.png">
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!--文字链-->
            <div id="s_nt" class="notice s_nt"
                 style="position: absolute; top: 0; margin: 0 0 0 212px; z-index: 100;">
                <div class="news news_icon">&gt;最新活动：</div>
                <div id="rolling"></div>
            </div>

            <!-- 详细内容部分 -->
            <div id="main" class="e_main">
                <!--  -->
                <div class="home_bg_mid" style="margin: 36px 0 0;">
                    <!--菜单 -->
                    <div class="prod_show" style="width: 600px">
                        <input type="hidden" id="ptpListStr" value=""/>
                        <ul class="product_ul">

                        </ul>
                    </div>
                    <!-- banner -->
                </div>
                <p class="clear"></p>
            </div>

            <!-- 右侧模块  modified by Pete-->
            <div id="s_cart" class="right s_rm_cart"
                 style="position: absolute; top: 0; float: none; margin: 0 0 0 779px;">
                <div id="shopping_cart">

                    <!-- 右侧订单 -->
                    <div class="right_order_menu">
                        <div class="right_order_top">
                            <h2>购物车</h2>
                            <span class="shop_cart_num" id="tatalnum">0</span>
                        </div>
                        <div class=" sub_right_order_main">
                            <div class="order_detail">
                                <ul id="cart_menus"></ul>
                            </div>
                        </div>
                        <div class="total">
                            <ul>
                                <li>
                                    <span class="Til">小计:</span>
                                    <span class="Price" id="productCost">0.0元</span>
                                </li>
                                <li>
                                    <span class="Til" style="width: 170px;">外送费<font
                                            id="prodesc" color="red"></font>
									</span>
                                    <span class="Price" id="deliverCost">9.0元</span>
                                </li>
                                <li>
                                    <span class="Til">合计:</span>
                                    <span class="Price" id="totalCost">9.0元</span>
                                </li>
                            </ul>
                        </div>
                        <p class="al_c">
                            <input id="ToCalcu" type="button" class="order_btn_1"/>
                        </p>
                        <div class="order_add">
                            <p>
                                <span class="til">送餐地址：</span> <span></span>
                            </p>
                            <p>
                        </div>
                        <p style="padding: 6px 10px;">
                            <span class="span_3">提醒：根据您最终提交订单时间，送餐时间可能略有调整。</span>
                        </p>
                    </div>
                    <div class=" sub_right_order_btm"></div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</form>
</body>
</html>
