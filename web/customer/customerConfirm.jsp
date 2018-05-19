<%@ page import="com.guet.oos.constant.SessionKey" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/customer/";

    Object userInfo = request.getSession().getAttribute(SessionKey.TEMPORARY_USER_INFO);

    if (userInfo == null) {
        response.sendRedirect(request.getContextPath() + "/customer/orderLogin.jsp");
    }

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
    <script type="text/javascript" src="asset/js/customerConfirm.js"></script>
    <script type="text/javascript" src="asset/js/common.js"></script>

</head>
<body>

<div class="con">
    <!-- 标题 -->
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="false">
                <span class="span_1 fl_l" id="logout" style=""> 欢迎网上订餐!</span>
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
                    <li class="w2">
                        <span>开始订餐</span>
                    </li>
                    <li class="w3">
                        <span>个人中心</span>
                    </li>
                    <li class="w4">
                        <span>
					        <a href="comment.jsp" target="_self">评论专区</a>
						</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>

    <!-- 内容 -->
    <div id="content">
        <div class="login_content">
            <div class="">
                <form id="mainForm" action="">

                    <div class="address_manage">

                        <!-- 用户欢迎栏 -->
                        <p class="title_span">欢迎您，请填送餐地址:</p>

                        <!-- 用户信息栏 -->
                        <div class=" info_table">

                            <%-- 添加送餐地址 --%>
                            <div id="addAddress" style="display: none;">
                                <div style="width:11%;float:left"><span class="span_2">送餐城市：</span>
                                    <span class="span_2" address2="" style="display: block;">路名/小区名：</span>
                                    <span class="span_2" address3="" style="display: block;">请继续填全：</span>
                                    <span class="span_2" address5="">联系人：</span>
                                    <span class="span_2" address6="">联系电话：</span>
                                </div>
                                <div style="width:760px">
                                    <div id="import_addr_tip"></div>

                                    <a href="javascript:;" style="display: none;" onclick="" id="addressAdd">新增</a>

                                    <!--添加送餐地址开始-->
                                    <div style="position: relative; height: 100px; z-index:1;">
                                        <div class="fl_l">
                                            <div class="info_table_1">
                                                <div>
                                                    <div style="border: none;">
                                                        <input id="editAddressId" type="hidden" value="0">
                                                        <input id="editCityCode" type="hidden" value="00013">
                                                        <div class="add_address">

                                                            <p>
                                                                <span class="new_tel_input">
                                                                <input id="cityName" type="text" class="input_5"
                                                                       autocomplete="off"
                                                                       style="color: rgb(115, 115, 115);">
                                                                <span class="add_icon" id="query_city"></span>
                                                                <span class="location"></span>
                                                                </span>
                                                            </p>

                                                            <p id="add_add2" address2="" style="display: block;">
                                                                <input id="address2"
                                                                       style="width: 188px; color: rgb(115, 115, 115);"
                                                                       type="text" class="input_4" autocomplete="off">
                                                                <span class="new_add_img"><a href="javascript:void(0);">查询</a></span>
                                                            </p>

                                                            <p id="add_add3" address3="" style="display: block;">
                                                                <input id="address3" type="text" maxlength="10"
                                                                       class="input_3" autocomplete="off"
                                                                       style="color: rgb(115, 115, 115);">
                                                            </p>

                                                            <p id="add_add5" address5="">
                                                                <input id="linkman" type="text" class="input_4"
                                                                       style="width: 188px; color: rgb(115, 115, 115);"
                                                                       autocomplete="off">&nbsp;&nbsp;
                                                                <input id="gender0" name="gender" type="radio" value="0"
                                                                       checked="checked">&nbsp;先生
                                                                &nbsp;&nbsp;
                                                                <input id="gender1" name="gender" type="radio"
                                                                       value="1">&nbsp;女士
                                                            </p>

                                                            <p id="add_add6" address6="">
                                                                <input id="linkphone" name="linkphone" type="text"
                                                                       style="width: 188px; color: rgb(115, 115, 115);"
                                                                       maxlength="11" class="input_4"
                                                                       autocomplete="off">
                                                                <span class="new_add_boxs1">
                                                                    <a id="saveAddressBtn" href="javascript:;">保存</a>
                                                                </span>
                                                            </p>
                                                            <p>
                                                                <span class="new_add_map">如此处与路名/小区名填写内容有矛盾，视为无效订单<br>此处仅支持中文输入地址。</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div> <!--添加送餐地址结束-->
                                </div>
                            </div>

                            <%-- 地址选择 --%>
                            <div id="adderssArea" style="padding-bottom: 20px;" class="line_back">
                                <div class="address_span"><span class="span_1" id="span1">送餐地址：</span></div>

                                <%-- 保存日期 --%>
                                <input type="text" style="display: none" id="input_date"/>

                                <%-- 保存小时 --%>
                                <input type="text" style="display: none" id="input_hour"/>

                                <%-- 保存分钟 --%>
                                <input type="text" style="display: none" id="input_minute"/>

                                <!--送餐地址开始-->
                                <div id="address_1" style="">
                                    <div class="fl_l">
                                        <ul class="info_table_1">
                                            <li id="0" class="selectcolor td_no_border">
                                                <div style="width: 20px; float: left; margin-top: 12px;">
                                                    <input name="selAddressId" type="radio" value="0" checked="checked">
                                                    <input name="supportonlinepay" type="hidden" value="true">
                                                    <input name="nCityCode" type="hidden" value="00013">
                                                    <input name="nCityName" type="hidden" value="北京">
                                                    <input name="nMainaddress" type="hidden"
                                                           value="六铺炕1区(安德里中街与旧鼓楼外大街交叉口西北150米)">
                                                    <input name="nMainaddressDescription" type="hidden"
                                                           value="六铺炕1区(安德里中街与旧鼓楼外大街交叉口西北150米)">
                                                    <input name="nSupplementaladdress" type="hidden" value="12">
                                                    <input name="nSupplementaladdressDescription" type="hidden"
                                                           value="12">
                                                    <input name="coordinate_x" type="hidden" value="">
                                                    <input name="coordinate_y" type="hidden" value="">
                                                    <input name="addressDESFlag" type="hidden" value="1">
                                                    <input name="gender" type="hidden" value="0">
                                                    <input name="name" type="hidden" value="12">
                                                    <input name="phone" type="hidden" value="13347573463">
                                                </div>

                                                <div style="float:left" class="cityName">
                                                </div>

                                                <div style="float:right">
                                                    <a href="javascript:void(0);"
                                                       class="editAddressBtn" newaddressflag="1"
                                                       tip="六铺炕1区(安德里中街与旧鼓楼外大街交叉口西北150米)"></a><a
                                                        href="javascript:;" class="deleteAddressBtn"
                                                        tip="六铺炕1区(安德里中街与旧鼓楼外大街交叉口西北150米)"></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class=" fl_l">
                                        <a href="javascript:;" class="ml20px mt5px" id="addAddressBtn">新增</a>
                                    </div>
                                    <div class="clear"></div>
                                </div> <!--送餐地址结束-->
                            </div>

                            <%-- 选择送餐时间 --%>
                            <div tip="deliveryTime" style="width:838px">
                                <div class="address_span" style="height:70px;margin-right:25px;width: 71px;">送餐时间：</div>
                                <div>
                                    <%-- 预计30分钟后送达--%>
                                    <div style=" margin-top: 20px;">
                                        <p class="deliveryHeight">
                                            <input name="sendfoodtime"
                                                   type="radio"
                                                   tip="inTime"
                                                   checked="checked"
                                                   style="vertical-align:middle;margin:-4px 0 0;">
                                            <a name="sendfoodtimeLink" href="javascript:void(0);"
                                               style="text-decoration: none;" timeType="1">
                                                <span>成功提交订单后，预计</span>
                                                <span class="bc">30</span>分钟左右送达。
                                            </a>
                                        </p>

                                        <%--空表div,为使代码统一--%>
                                        <div></div>

                                        <%--隔天送达--%>
                                        <div style="position:relative;width: 100%;height: 30px;margin-left: 93px;display:block">
                                            <div class="fl_l">
                                                <input class="sendfoodtime-style" name="sendfoodtime" type="radio">
                                                <a name="sendfoodtimeLink" href="javascript:void(0);"
                                                   style="text-decoration: none;" timeType="2">
                                                    <span>预约当日稍晚时间送餐。</span>
                                                </a>
                                            </div>
                                            <div class="selectTime sendTime" style="display: none;"
                                                 id="currentDayLater">
                                                <div><span id="currentDate" name="day"></span>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="hour" timeType="2" id="putOffOneHour"
                                                                style="width: 60px;">
                                                        </select>
                                                    </div>
                                                    <span>时</span>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="minute" timeType="2" style="width: 60px;" id="putOffOneHourMinute">
                                                            <option selected="selected">00</option>
                                                            <option>05</option>
                                                            <option>10</option>
                                                            <option>15</option>
                                                            <option>20</option>
                                                            <option>25</option>
                                                            <option>30</option>
                                                            <option>35</option>
                                                            <option>40</option>
                                                            <option>45</option>
                                                            <option>50</option>
                                                            <option>55</option>
                                                        </select>
                                                    </div>
                                                    <span>分送到</span>
                                                    <input type="hidden" name="isSecondDay" value="false">
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>

                                        <%--隔几天后送达--%>
                                        <div style="position:relative;width: 100%;height: 30px;margin-left: 93px;display:block">
                                            <div class="fl_l">
                                                <input class="sendfoodtime-style" name="sendfoodtime" type="radio"
                                                       bookingtype="2">
                                                <a name="sendfoodtimeLink" href="javascript:void(0);"
                                                   style="text-decoration:none;" timeType="3"><span>隔日预约单。</span>
                                                </a>
                                            </div>
                                            <div class="selectTime otherDaySendTime" style="display: none;">
                                                <div><span>送餐时间：</span>
                                                    <div class="macstyle">
                                                        <select class="tag_day_select" name="day" timeType="3" id="putOffManyDayDate">
                                                        </select>
                                                    </div>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="hour" timeType="3" style="width:60px;" id="putOffManyDayHour">
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                            <option>11</option>
                                                            <option>12</option>
                                                            <option>13</option>
                                                            <option>14</option>
                                                            <option>15</option>
                                                            <option>16</option>
                                                            <option>17</option>
                                                            <option>18</option>
                                                            <option>19</option>
                                                            <option>20</option>
                                                            <option>21</option>
                                                            <option>22</option>
                                                            <option>23</option>
                                                        </select>
                                                    </div>
                                                    <span>时</span>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="minute"
                                                                style="width:60px;" timeType="3" id="putOffManyDayMinute">
                                                            <option>00</option>
                                                            <option>05</option>
                                                            <option>10</option>
                                                            <option>15</option>
                                                            <option>20</option>
                                                            <option>25</option>
                                                            <option>30</option>
                                                            <option>35</option>
                                                            <option>40</option>
                                                            <option>45</option>
                                                            <option>50</option>
                                                            <option>55</option>
                                                        </select>
                                                    </div>
                                                    <span>分送到</span><input type="hidden" name="isSecondDay"
                                                                           value="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="the_other_day_tip" style="display: none;">
                                            隔日预约单是预约当日菜单、价格可能会发生变化，以实际发生为准。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div id="nextTr" style="text-align: center; margin-top: 10px;">
                                    <div class="agreeTd">
                                        <img id="nextStep" class="agree_next" src="images/next02.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

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

    <!-- 弹出层 -->
    <div id="dialog-message" title="友情提示：" closebtn="false" style="display: none;">
        <span></span>
    </div>

    <!--弹出层开始-->
    <div id="layer_box"></div>

</div>
</body>
</html>