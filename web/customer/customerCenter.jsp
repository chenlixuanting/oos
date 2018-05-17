<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <!-- kfc_iso 公共资源文件  -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="肯德基"/>
    <meta name="description" content="肯德基."/>
    <title>肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>

    <%-- CSS样式 --%>
    <style type="text/css">
        .pages2, .pages3 {
            display: none;
        }
    </style>
</head>
<body>
<div class="con">
    <!-- 标题 -->
    <div id="top">
        <input type="hidden" id="page_flag" value="customerCenter"/>
        <input type="hidden" id="seoPath" value="http://www.4008823823.com.cn/kfcios"/>
        <input type="hidden" value="" id="topFlag" name="topFlag"/>
        <div class="logo"></div>
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="true"/>
                <input type="hidden" id="loginFlag" value="true"/>
                <span class="span_1 fl_l" id="logon">
                        欢迎<span class="customerName" id="customerName">张鹏 先生</span>
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
                    <li class="w1">
                            <span>
                                <a href="regCustomer.jsp">订餐首页</a>
                            </span>
                    </li>
                    <li class="w2"><span><a href="orderLogin.jsp">开始订餐</a></span></li>
                    <li class="w3"><span class="current"><a href="customerCenter.jsp">个人中心</a></span></li>
                    <li class="last_li w5">
                        <a href="http://www.4008823823.com.cn/kfcios/jsp/help/help_new.html" target="_blank">帮助中心</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="clear"></div>
    </div>
    <script>
        $(document).ready(function () {

            $('.link1').click(function () {
                $('.pages1').show().siblings().hide();
                $('#l1').addClass("on");
                $('#l2').removeClass("on");
                $('#l3').removeClass("on");
            })
            $('.link2').click(function () {
                $('.pages2').show().siblings().hide();
                $('#l1').removeClass("on");
                $('#l2').addClass("on");
                $('#l3').removeClass("on");
            })
            $('.link3').click(function () {
                $('.pages3').show().siblings().hide();
                $('#l1').removeClass("on");
                $('#l2').removeClass("on");
                $('#l3').addClass("on");
            })

        });

    </script>
    <!-- 内容 -->
    <div id="content">
        <div id="content">
            <div class="user_content">
                <div id="online03"></div>

                <!--左侧菜单-->
                <div class="user_menu user_menu_js">
                    <ul>
                        <li class="libg01 link1"><a id="l1" url="" class="on">个人信息</a></li>
                        <li class="libg03 link2"><a id="l2" url="">订单查询</a></li>
                        <li class="libg02 link3"><a id="l3" url="">地址管理</a></li>
                    </ul>
                </div>
                <!--左侧菜单/-->
                <!--右侧主体-->
                <div>
                    <div class="user_con pages1" id="posts">
                        <!-- 个人中心_个人信息页面 -->
                        <!--基本信息修改-->
                        <form id="mainForm" action=""></form>
                        <input type="hidden" id="customerType" value="2"/>
                        <input type="hidden" id="customerBindChannel" value="1"/>
                        <input type="hidden" id="customerName" value="张鹏"/>
                        <input type="hidden" id="customerMail" value=""/>
                        <input type="hidden" id="customerPhone" value="18269305379"/>
                        <input type="hidden" id="userType" value="2"/>
                        <h4 class="toCustomerDes"
                            style="cursor:pointer;border-bottom: 1px solid #e0e3e5; text-decoration: underline;">
                            个人信息</h4>
                        <h4>基本信息修改：</h4>
                        <div class="linebox">
                            <h5>顾客姓名：</h5>
                            <div class="text">
									<span class="oldname-js">
										张鹏&nbsp;&nbsp;
										先生
									</span>
                                <div class="textinput newname-js" style="display: none;"><input name="" type="text"
                                                                                                value="" maxlength="24"
                                                                                                tip="customerNameTip"/>
                                </div>
                            </div>
                            <div class="eidt">
                                <span class="oldname-js"><a href="javascript:void(0);" class="xgname-js">修改</a></span>
                                <span class="newname-js" style="display: none;">
										<a href="javascript:void(0);" class="on savename-js">保存</a>
										<span class="othertil">或</span>
										<a href="javascript:void(0);" class="bcname-js" style="font-size: 12px;">取消</a>
									</span>
                            </div>
                        </div>
                        <div class="linebox">
                            <h5><span class="jiange">性别</span>：</h5>
                            <div class="text sexor-js" id="sexSelect">
                                <a href="javascript:void(0);" class="on" gender="0">先生</a>
                                <a href="javascript:void(0);" class="newsex-js" gender="1" style="display: none;">女士</a>
                            </div>
                            <div class="eidt">
                                <span class="oldsex-js"><a href="javascript:void(0);" class="xgsex-js">修改</a></span>
                                <span class="newsex-js" style="display: none;">
										<a href="javascript:void(0);" class="on savesex-js">保存</a>
										<span class="othertil">或</span>
										<a href="javascript:void(0);" class="bcsex-js" style="font-size: 12px;">取消</a>
									</span>
                            </div>
                        </div>
                        <!--基本信息修改/-->
                        <div class="userline"></div>
                        <!--设置密码-->
                        <h4>设置密码：</h4>
                        <div class="linebox" id="setPs">
                            <h5><span class="jiange">密码</span>&nbsp;&nbsp;:</h5>
                            <!-- 密码用户 -->
                            <div class="okps-js">
                                <div class="text">●●●●●●</div>
                                <div class="eidt">
                                    <a href="javascript:void(0);" class="xgps-js">修改</a>
                                </div>
                            </div>
                        </div>
                        <!--设置密码/-->
                        <div class="userline"></div>
                        <!--账号绑定-->
                        <h4>账号绑定：</h4>
                        <div class="linebox" id="bindPhone">
                            <!-- 绑定用户 -->
                            <div class="okip-js">
                                <div class="text02">您当前绑定手机号码：18269305379</div>
                            </div>
                        </div>
                        <!-- 加载JS -->
                        <!--账号绑定/-->
                    </div>
                    <div class="user_con pages2" id="media">
                        <!-- 个人中心_订单列表页面 -->
                        <!-- 加载外部JS -->
                        <form id="mainForm" action=""></form>
                        <div class="orderList_area">
                            <div id="orderList_now" style="display: block;">
                                <h4 style="text-decoration: underline;cursor:pointer">
                                    <span style="float:left;width:140px">当前订单</span>
                                    <span id="tohistory" class="to_history_orderList">历史订单&gt;&gt;</span>
                                </h4>
                                <ul class="orderList_ul">
                                    <li class="orderList_li orderList_header">
                                        <div class="orderList_date">下单时间</div>
                                        <div class="orderList_details">订单详情</div>
                                        <div class="orderList_price">价格</div>
                                        <div class="orderList_status">状态</div>
                                        <div class="orderList_option">操作</div>
                                    </li>
                                    <li class="orderList_li orderList_body">
                                        <div class="orderList_format orderList_date">
                                            <div class="orderList_day">04-29</div>
                                            <div class="orderList_time">07:43</div>
                                        </div>
                                        <div class="orderList_format orderList_details">
                                            <div class="orderList_detail_info">您本次订单共计1份餐品</div>
                                            <div class="orderList_detail_desc"></div>
                                        </div>
                                        <div class="orderList_format orderList_price">10.0元</div>
                                        <div class="orderList_format orderList_status">订单已提交</div>
                                        <div class="orderList_format orderList_option">
                                            <div id="details" class="orderItem_details">订单详情</div>
                                            <div id="another_order" class="another_order">再来一单</div>
                                        </div>
                                        <script>
                                            $(document).ready(function () {
                                                //进入详情
                                                $('#details').click(function () {
                                                    $('#order_item_detail').show().siblings().hide();

                                                })
                                                //关闭详情
                                                $('#close_details').click(function () {
                                                    $('#orderList_now').show().siblings().hide();

                                                })
                                                //进入历史订单
                                                $('#tohistory').click(function () {
                                                    $('#orderList_history').show().siblings().hide();

                                                })
                                                //再来一单
                                                $('#another_order').click(function () {
                                                    location.replace("regCustomer.jsp");

                                                })
                                            });

                                        </script>
                                    </li>
                                </ul>
                            </div>
                            <div id="orderList_history" style="display: none;">
                                <h4>
                                    <span class="backOrderList" style="cursor:pointer">订单查询</span> --&gt;
                                    <span style="text-decoration: underline">历史订单</span>
                                </h4>
                                <div class="orderList_tab_area">
                                    <div id="orderList_tab_within" class="orderList_tab orderList_tab_cur">近三个月内订单</div>
                                    <div id="orderList_tab_not_within" class="orderList_tab">更多订单</div>
                                </div>
                                <ul class="orderList_ul">
                                    <li class="orderList_li orderList_header">
                                        <div class="orderList_date">下单时间</div>
                                        <div class="orderList_details">订单详情</div>
                                        <div class="orderList_price">价格</div>
                                        <div class="orderList_status">状态</div>
                                        <div class="orderList_option">操作</div>
                                    </li>
                                </ul>
                                <div id="Pagination_history" class="center redStyle"></div>
                            </div>
                            <div id="order_item_detail" style="display:none">
                                <h4 style="text-decoration: underline;">
                                    <span>订单详情</span>
                                    <span id="close_details" class="close_details">关闭详情 </span>
                                </h4>
                                <div class="orderList_details_area">
                                    <div class="orderList_detail_status">订单已提交</div>
                                    <div class="orderList_detail_time">预计05-02 21:00送达</div>
                                </div>
                                <div class="query_order_details">
                                    <div class="personal_info">
                                        <p><span class="personal_info_title">个人信息</span></p>
                                        <p><span class="personal_info_span_1">顾客姓名：</span>
                                            <span class="personal_info_span_2">sd</span></p>
                                        <p><span class="personal_info_span_1">联系电话：</span>
                                            <span class="personal_info_span_2">18245698745</span></p>
                                        <p><span class="personal_info_span_1">送餐地址：</span>
                                            <span class="personal_info_span_2">W1(上海新国际博览中心)(龙阳路2345号上海新国际博览中心F1层)71</span>
                                        </p>
                                    </div>
                                    <div class="hr_1"></div>
                                    <div class="order_info" style="border-bottom: 1px #e0e3e5 solid;">
                                        <p><span class="personal_info_title">订单详情</span></p>
                                        <table width="100%" border="1" class="query_order_table_1">
                                            <tbody>
                                            <tr>
                                                <th width="8%">序号</th>
                                                <th width="20%">品名</th>
                                                <th width="10%">单价</th>
                                                <th width="8%">数量</th>
                                                <th width="12%">优惠价</th>
                                                <th width="10%">小计</th>
                                                <th>优惠备注</th>
                                            </tr>
                                            <tr>
                                                <td align="left">1</td>
                                                <td>1元波纹薯条(中)</td>
                                                <td><span class="ft_color_red">￥1.0</span></td>
                                                <td>1</td>
                                                <td></td>
                                                <td><span class="ft_color_red">￥1.0</span></td>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="total_price_div">
                                            <p><span class="price_span_query">
												<em class="ft_b">小 计：</em>10.0元 | 
												<em class="ft_b">外送费：</em>9.0元 
												</span></p>
                                            <p>
													<span class="total_price_span_query">
														<em class="ft_b">总金额：</em>10.0元
													</span>
                                            </p>
                                        </div>
                                        <div class="hr_1"></div>
                                        <p><span class="personal_info_span_3">支付方式：</span>
                                            <span class="personal_info_span_2">货到现金付款&nbsp;&nbsp;</span></p>
                                        <p><span class="personal_info_span_3">是否需要发票：</span>
                                            <span class="personal_info_span_2"> 否</span></p>
                                        <p><span class="personal_info_span_3">其它送餐要求：</span>
                                            <span class="personal_info_span_2"></span></p>
                                        <p><span class="personal_info_span_3">备用联系手机：</span>
                                            <span class="personal_info_span_2">无</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="noyor noyor-js" style="display:none">
                            <p>很抱歉，没有查到订单记录。</p>
                            <p>如需订餐，请点击<a id="startOrder" href="javascript:void(0)"><img src="images/layer_b01.png"
                                                                                         style="vertical-align: -5px;width:90px"/></a>
                            </p>
                        </div>
                    </div>
                    <div class="user_con info_table pages3">
                        <div>
                            <div style="border-bottom: 1px solid rgb(204, 204, 204);">
                                <div>
                                    <h4 class="backAddressList" style="text-decoration: underline;cursor:pointer">
                                        地址管理
                                    </h4>
                                </div>
                            </div>
                            <div id="adderssArea" style="margin-top: 20px;">
                                <div style="width: 120px; float: left;">
										<span class="span_1">
											送餐地址
											：
										</span>
                                </div>
                                <!--送餐地址开始-->
                                <div class="address_lists">
                                    <div id="address_1">
                                        <div class="fl_l" style="width: 100%; padding-bottom: 30px">
                                            <ul style="width: 100%" class="info_table_1">
                                                <li id="df8ddc82-fe24-41b6-b7cb-3bfc331c3737-a0">
                                                    <div style="width: 20px; display: none">
                                                        <input name="selAddressId" type="radio"
                                                               value="df8ddc82-fe24-41b6-b7cb-3bfc331c3737-a0"
                                                               deliverytime="" storeclosedflag="0"/>
                                                        <input id="chooseAddrFlag" type="hidden" value="true"/>
                                                        <input name="supportonlinepay" type="hidden" value="false"/>
                                                        <input name="nCityCode" type="hidden" value="00010"/>
                                                        <input name="nCityName" type="hidden" value="上海"/>
                                                        <input name="nMainaddress" type="hidden"
                                                               value="cb5f4a40947b05365a43a13966c3c8038e22640412af9b0a457e0e4ac56fa707fb6fd8ba600398e19ffa9eb3490c99f5d65b03560962a13d89dbe0a1a9468db4b5ee070a297ddda09895d8c58fd50694053bf369796b10c2"/>
                                                        <input name="nMainaddressDescription" type="hidden"
                                                               value="W1(上海新国际博览中心)(龙阳路2345号上海新国际博览中心F1层)"/>
                                                        <input name="nSupplementaladdress" type="hidden"
                                                               value="5061e24ad152baf0"/>
                                                        <input name="nSupplementaladdressDescription" type="hidden"
                                                               value="71"/>
                                                        <input name="nStoreId" type="hidden" value="        "/>
                                                        <input name="coordinate_x" type="hidden" value="121.565124"/>
                                                        <input name="coordinate_y" type="hidden" value="31.207368"/>
                                                        <input name="gender" type="hidden" value="0"/>
                                                        <input name="name" type="hidden" value="sd"/>
                                                        <input name="phone" type="hidden" value="18245698745"/>
                                                    </div>
                                                    <div class="cityName">
                                                        <a name="selAddressLink"
                                                           style="text-decoration: none; display: block; float: left"
                                                           href="javascript:void(0);">
                                                            上海&nbsp;&nbsp;&nbsp;&nbsp;W1(上海新国际博览中心)(龙阳路2345号上海新国际博览中心F1层)71
                                                            <br/>
                                                            sd
                                                            先生
                                                            &nbsp;&nbsp;
                                                            18245698745
                                                        </a>
                                                        <div class="addressOptions">
                                                            <div class="deleteAddress">
                                                                删除
                                                            </div>
                                                            <div class="editAddress">
                                                                编辑<span>|</span>
                                                            </div>
                                                            <div class="setDefaultAddress">
                                                                设为默认
                                                                <span>|</span>
                                                            </div>
                                                            <div class="useThisAddress">
                                                                使用此地址订餐
                                                                <span>|</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <!--送餐地址结束-->
                                </div>
                            </div>
                            <div>
                                <a href="javascript:" id="addAddressBtn" style="color: #c6000a; padding: 5px 10px;">使用新地址</a>
                            </div>
                            <div id="addAddress" style="display: none;">
                                <div style="width: 120px;">
										<span class="span_2">
											送餐城市
											：
										</span>
                                    <span class="span_2" address2="" style="display:none">路名/小区名：</span>
                                    <span class="span_2" address3="" style="display:none">请继续填全：</span>
                                    <span class="span_2" address4="" style="display:none">请继续填全：</span>
                                    <span class="span_2" address5="">联系人：</span>
                                    <span class="span_2" address6="">联系电话：</span>
                                </div>
                                <div style="width: 560px">
                                    <div id="import_addr_tip">
                                    </div>
                                    <!--添加送餐地址开始-->
                                    <div style="position: relative; height: 120px; z-index: 1;">
                                        <div class="fl_l">
                                            <div class="info_table_1">
                                                <div>
                                                    <div style="border: none;">
                                                        <input id="editAddressId" type="hidden"/>
                                                        <input id="editCityCode" type="hidden"/>
                                                        <div class="add_address">
                                                            <p>
																	<span class="new_tel_input">
																		<input id="cityName" type="text" class="input_5"
                                                                               autocomplete="off"
                                                                               style="color: rgb(173, 173, 173);"/>
																		<span class="add_icon"
                                                                              id="query_city"></span> <span
                                                                            class="location"></span>
																	</span>
                                                            </p>
                                                            <p id="add_add2" address2="" style="display:none">
                                                                <input id="address2"
                                                                       style="width: 188px; color: rgb(173, 173, 173);"
                                                                       type="text" class="input_4" autocomplete="off"/>
                                                                <span class="new_add_img">
																		<a href="javascript:void(0);">
																			查询
																		</a>
																	</span>
                                                            </p>
                                                            <p id="add_add3" address3="" style="display:none">
                                                                <input id="address3" type="text" maxlength="10"
                                                                       class="input_3" autocomplete="off"
                                                                       style="color: rgb(173, 173, 173);"/>
                                                            </p>
                                                            <p id="add_add4" address4="" style="display:none">
                                                                <input id="address4" type="text" maxlength="10"
                                                                       class="input_3" autocomplete="off"
                                                                       style="color: rgb(173, 173, 173);"/>
                                                            </p>
                                                            <p id="add_add5" address5="">
                                                                <input id="linkman" type="text" class="input_4"
                                                                       style="width: 188px; color: rgb(173, 173, 173);"
                                                                       autocomplete="off"/>&nbsp;&nbsp;
                                                                <input id="gender0" name="gender" type="radio" value="0"
                                                                       checked=""/>&nbsp;先生
                                                                &nbsp;&nbsp;
                                                                <input id="gender1" name="gender" type="radio"
                                                                       value="1"/>&nbsp;女士
                                                            </p>
                                                            <p id="add_add6" address6="">
                                                                <input id="linkphone" name="linkphone" type="text"
                                                                       style="width: 188px; color: rgb(173, 173, 173);"
                                                                       maxlength="11" class="input_4"
                                                                       autocomplete="off"/>
                                                                <span class="new_add_boxs1"><a id="saveAddressBtn"
                                                                                               href="javascript:;">保存</a></span>
                                                            </p>
                                                            <p>
                                                                <span class="new_add_map">如此处与路名/小区名填写内容有矛盾，视为无效订单<br/>此处仅支持中文输入地址。</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <!--添加送餐地址结束-->
                                </div>
                            </div>
                            <div style="float: left; width: 100%; margin-top: 20px; border-top: 1px solid rgb(204, 204, 204);">
                                <div style="margin: 20px;">
                                    <div style="float:left">友情提示：&nbsp;</div>
                                    <div style="float:left">如果您选择不设置密码，您送餐信息的主要内容会以*号遮蔽，如：虹桥路2号，会显示为“虹﹡••••••﹡2号”。<br/>该显示信息可能不受保护，建议您设置密码。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--右侧主体/-->
            </div>
        </div>
    </div>
    <div id="footer"></div>
</div>
</body>
</html>
