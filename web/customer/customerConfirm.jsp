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
    <script type="text/javascript" src="asset/js/customerConfirm.js"></script>
    <script type="text/javascript" src="asset/js/common.js"></script>

</head>
<body>

<div class="con">
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="false">
                <span class="span_1 fl_l" id="logout" style=""> 欢迎使用,美味家网上订餐系统！</span>
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
                                                    <input name="selAddressId" type="radio" value="0" checked="checked"
                                                           disabled="disabled">
                                                </div>

                                                <div style="float:left" class="cityName"></div>

                                            </li>
                                        </ul>
                                    </div>
                                    <div class=" fl_l">
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
                                                   style="vertical-align:middle;margin:-4px 0 0;" disabled="disabled">
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
                                                <input class="sendfoodtime-style" name="sendfoodtime" type="radio"
                                                       disabled="disabled">
                                                <a name="sendfoodtimeLink" href="javascript:void(0);"
                                                   style="text-decoration: none;" timeType="2">
                                                    <span>预约当日稍晚时间送餐。</span>
                                                </a>
                                            </div>
                                            <div class="selectTime sendTime" style="display: none;"
                                                 id="currentDayLater">
                                                <div><span id="currentDate" name="day"></span>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="hour" timeType="2"
                                                                id="putOffOneHour"
                                                                style="width: 60px;">
                                                        </select>
                                                    </div>
                                                    <span>时</span>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="minute" timeType="2"
                                                                style="width: 60px;" id="putOffOneHourMinute">
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
                                                       bookingtype="2" disabled="disabled">
                                                <a name="sendfoodtimeLink" href="javascript:void(0);"
                                                   style="text-decoration:none;" timeType="3"><span>隔日预约单。</span>
                                                </a>
                                            </div>
                                            <div class="selectTime otherDaySendTime" style="display: none;">
                                                <div><span>送餐时间：</span>
                                                    <div class="macstyle">
                                                        <select class="tag_day_select" name="day" timeType="3"
                                                                id="putOffManyDayDate">
                                                        </select>
                                                    </div>
                                                    <div class="macstyle">
                                                        <select class="tag_select" name="hour" timeType="3"
                                                                style="width:60px;" id="putOffManyDayHour">
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
                                                                style="width:60px;" timeType="3"
                                                                id="putOffManyDayMinute">
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