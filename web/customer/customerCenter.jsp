<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <!-- kfc_iso 公共资源文件  -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="美味家" />
    <meta name="description" content="美味家." />
    <title>美味家宅急送外卖网上订餐官网-美味家优惠套餐-外送菜单-送餐网</title>
    <!-- 加载CSS -->
    <script type="text/javascript">
        var requestContextPath = 'NULL';
        // https Start
        var requestContextPathHttps = 'NULL';
        var appHtmlPath = 'NULL';
        var httpHtmlPathHttps = 'NULL';
        // https End
        var httpHtmlPath = 'NULL';
        var httpResourcePath = 'NULL';
        var locale = 'zh_CN';
        var httpVersionPath = "";
        var code = 'NULL';
        /* 记住我功能的有效期（天） */
        var keep = 7;
        var riskControlKey = "true";
        var riskControlRequestUrl = "NULL";//customerCenter
    </script>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
    <!-- 加载JS -->
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
            <input type="hidden" id="page_flag" value="customerCenter" />
            <input type="hidden" id="seoPath" value="http://www.4008823823.com.cn/kfcios" />
            <input type="hidden" value="" id="topFlag" name="topFlag" />
            <div class="logo"></div>
            <div class="top_menu">
                <div class="top_menu_1">
                    <input type="hidden" id="isLogin" value="true" />
                    <input type="hidden" id="loginFlag" value="true" />
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
                                <a href="index.jsp">订餐首页</a>
                            </span>
                        </li>
                        <li class="w2"><span><a href="orderLogin.jsp">开始订餐</a></span></li>
                        <li class="w3"><span class="current"><a href="customerCenter.jsp">个人中心</a></span></li>
                        <li class="last_li w5">
                            <a href="" target="_blank">评论专区</a>
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
            <!--//////////login_content start//////////-->
            <div id="content">
                <div class="user_content">
                    <div id="online03"></div>
                    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>

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
							<input type="hidden" id="customerType" value="2" />
							<input type="hidden" id="customerBindChannel" value="1" />
							<input type="hidden" id="customerName" value="张鹏" />
							<input type="hidden" id="customerMail" value="" />
							<input type="hidden" id="customerPhone" value="18269305379" />
							<input type="hidden" id="userType" value="2" />
							<h4 class="toCustomerDes" style="cursor:pointer;border-bottom: 1px solid #e0e3e5; text-decoration: underline;">个人信息</h4>
							<h4>基本信息修改：</h4>
							<div class="linebox">
								<h5>顾客姓名：</h5>
								<div class="text">
									<span class="oldname-js">
										张鹏&nbsp;&nbsp;
										先生
									</span>
									<div class="textinput newname-js" style="display: none;"><input name="" type="text" value="" maxlength="24" tip="customerNameTip" /></div>
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
								<div id="orderList_now">
									<h4 style="text-decoration: underline;cursor:pointer">
										<span style="float:left;width:140px">当前订单</span>
										<span class="to_history_orderList">历史订单&gt;&gt;</span>
									</h4>
									<ul class="orderList_ul">
										<li class="orderList_li orderList_header">
											<div class="orderList_date">下单时间</div>
											<div class="orderList_details">订单详情</div>
											<div class="orderList_price">价格</div>
											<div class="orderList_status">状态</div>
											<div class="orderList_option">操作</div>
										</li>
									</ul>
								</div>
								<div id="orderList_history">
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
								<div id="order_item_detail" style="display:none"></div>
							</div>
							<div class="noyor noyor-js" style="display: block;">
								<p>很抱歉，没有查到订单记录。</p>
								<p>如需订餐，请点击<a id="startOrder" href="javascript:void(0)"><img src="images/layer_b01.png" style="vertical-align: -5px;width:90px" /></a></p>
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
															<input name="selAddressId" type="radio" value="df8ddc82-fe24-41b6-b7cb-3bfc331c3737-a0" deliverytime="" storeclosedflag="0" />
															<input id="chooseAddrFlag" type="hidden" value="true" />
															<input name="supportonlinepay" type="hidden" value="false" />
															<input name="nCityCode" type="hidden" value="00010" />
															<input name="nCityName" type="hidden" value="上海" />
															<input name="nMainaddress" type="hidden" value="cb5f4a40947b05365a43a13966c3c8038e22640412af9b0a457e0e4ac56fa707fb6fd8ba600398e19ffa9eb3490c99f5d65b03560962a13d89dbe0a1a9468db4b5ee070a297ddda09895d8c58fd50694053bf369796b10c2" />
															<input name="nMainaddressDescription" type="hidden" value="W1(上海新国际博览中心)(龙阳路2345号上海新国际博览中心F1层)" />
															<input name="nSupplementaladdress" type="hidden" value="5061e24ad152baf0" />
															<input name="nSupplementaladdressDescription" type="hidden" value="71" />
															<input name="nStoreId" type="hidden" value="        " />
															<input name="coordinate_x" type="hidden" value="121.565124" />
															<input name="coordinate_y" type="hidden" value="31.207368" />
															<input name="gender" type="hidden" value="0" />
															<input name="name" type="hidden" value="sd" />
															<input name="phone" type="hidden" value="18245698745" />
														</div>
														<div class="cityName">
															<a name="selAddressLink" style="text-decoration: none; display: block; float: left" href="javascript:void(0);">
																上海&nbsp;&nbsp;&nbsp;&nbsp;W1(上海新国际博览中心)(龙阳路2345号上海新国际博览中心F1层)71
																<br />
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
															<input id="editAddressId" type="hidden" />
															<input id="editCityCode" type="hidden" />
															<div class="add_address">
																<p>
																	<span class="new_tel_input">
																		<input id="cityName" type="text" class="input_5" autocomplete="off" style="color: rgb(173, 173, 173);" />
																		<span class="add_icon" id="query_city"></span> <span class="location"></span>
																	</span>
																</p>
																<p id="add_add2" address2="" style="display:none">
																	<input id="address2" style="width: 188px; color: rgb(173, 173, 173);" type="text" class="input_4" autocomplete="off" />
																	<span class="new_add_img">
																		<a href="javascript:void(0);">
																			查询
																		</a>
																	</span>
																</p>
																<p id="add_add3" address3="" style="display:none">
																	<input id="address3" type="text" maxlength="10" class="input_3" autocomplete="off" style="color: rgb(173, 173, 173);" />
																</p>
																<p id="add_add4" address4="" style="display:none">
																	<input id="address4" type="text" maxlength="10" class="input_3" autocomplete="off" style="color: rgb(173, 173, 173);" />
																</p>
																<p id="add_add5" address5="">
																	<input id="linkman" type="text" class="input_4" style="width: 188px; color: rgb(173, 173, 173);" autocomplete="off" />&nbsp;&nbsp;
																	<input id="gender0" name="gender" type="radio" value="0" checked="" />&nbsp;先生
																	&nbsp;&nbsp;
																	<input id="gender1" name="gender" type="radio" value="1" />&nbsp;女士
																</p>
																<p id="add_add6" address6="">
																	<input id="linkphone" name="linkphone" type="text" style="width: 188px; color: rgb(173, 173, 173);" maxlength="11" class="input_4" autocomplete="off" />
																	<span class="new_add_boxs1"><a id="saveAddressBtn" href="javascript:;">保存</a></span>
																</p>
																<p>
																	<span class="new_add_map">如此处与路名/小区名填写内容有矛盾，视为无效订单<br />此处仅支持中文输入地址。</span>
																</p>
																<!--城市列表开始-->
																<!--城市列表开始-->
																<div class="city_list" id="city_list" style="display: none;">
																	<div class="city_list_box">
																		<span class="chooseReminder">可直接输入中文名 / 拼音 / 英文名</span>
																		<span class="del"><a href="javascript:void(0);" id="city_del"></a></span>
																		<div class="city_menu">
																			<div class="city_menu_box">
																				<span class="h3_w alphabet">
																					<a name="tipBtn" href="javascript:void(0);" class="on">热门</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">ABCDE</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">FGHI</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">JKLMN</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">OPQR</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">STUV</a>
																				</span>
																				<span class="alphabet">
																					<a name="tipBtn" href="javascript:void(0);">WXYZ</a>
																				</span>
																			</div>
																			<div class="city_menu_box_line"></div>
																		</div>
																	</div>
																	<div class="city_box">
																		<span class="city_mode" style="display: none;" firstletter="NJ">
																			<a realname="南京" cityname="南京" citynameen="NANJING" citycode="00008" name="choose_city_btn" href="javascript:;">南京</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SH">
																			<a realname="上海" cityname="上海" citynameen="Shanghai" citycode="00010" name="choose_city_btn" href="javascript:;">上海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZ">
																			<a realname="深圳" cityname="深圳" citynameen="SHENZHEN" citycode="00011" name="choose_city_btn" href="javascript:;">深圳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GZ">
																			<a realname="广州" cityname="广州" citynameen="GUANGZHOU" citycode="00012" name="choose_city_btn" href="javascript:;">广州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BJ">
																			<a realname="北京" cityname="北京" citynameen="BEIJING" citycode="00013" name="choose_city_btn" href="javascript:;">北京</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TJ">
																			<a realname="天津" cityname="天津" citynameen="TIANJIN" citycode="00018" name="choose_city_btn" href="javascript:;">天津</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WX">
																			<a realname="无锡" cityname="无锡" citynameen="WUXI" citycode="00019" name="choose_city_btn" href="javascript:;">无锡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="杭州" cityname="杭州" citynameen="HANGZHOU" citycode="00024" name="choose_city_btn" href="javascript:;">杭州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ND">
																			<a realname="宁德" cityname="宁德" citynameen="NINGDE" citycode="00027" name="choose_city_btn" href="javascript:;">宁德</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JN">
																			<a realname="济南" cityname="济南" citynameen="JINAN" citycode="00030" name="choose_city_btn" href="javascript:;">济南</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NB">
																			<a realname="宁波" cityname="宁波" citynameen="NINGBO" citycode="00031" name="choose_city_btn" href="javascript:;">宁波</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZ">
																			<a realname="苏州" cityname="苏州" citynameen="SUZHOU" citycode="00036" name="choose_city_btn" href="javascript:;">苏州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JX">
																			<a realname="嘉兴" cityname="嘉兴" citynameen="JIAXING" citycode="00037" name="choose_city_btn" href="javascript:;">嘉兴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DZ">
																			<a realname="儋州" cityname="儋州" citynameen="DANZHOU" citycode="00039" name="choose_city_btn" href="javascript:;">儋州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XM">
																			<a realname="厦门" cityname="厦门" citynameen="XIAMEN" citycode="00042" name="choose_city_btn" href="javascript:;">厦门</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WZ">
																			<a realname="温州" cityname="温州" citynameen="WENZHOU" citycode="00043" name="choose_city_btn" href="javascript:;">温州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJJ">
																			<a realname="张家界" cityname="张家界" citynameen="ZHANGJIAJIE" citycode="00051" name="choose_city_btn" href="javascript:;">张家界</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CD">
																			<a realname="成都" cityname="成都" citynameen="CHENGDU" citycode="00054" name="choose_city_btn" href="javascript:;">成都</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FS">
																			<a realname="佛山" cityname="佛山" citynameen="FOSHAN" citycode="00060" name="choose_city_btn" href="javascript:;">佛山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HF">
																			<a realname="合肥" cityname="合肥" citynameen="HEFEI " citycode="00061" name="choose_city_btn" href="javascript:;">合肥</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="三亚" cityname="三亚" citynameen="SANYA" citycode="00063" name="choose_city_btn" href="javascript:;">三亚</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="沈阳" cityname="沈阳" citynameen="SHENYANG" citycode="00066" name="choose_city_btn" href="javascript:;">沈阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SJZ">
																			<a realname="石家庄" cityname="石家庄" citynameen="SHIJIAZHUANG" citycode="00067" name="choose_city_btn" href="javascript:;">石家庄</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TY">
																			<a realname="太原" cityname="太原" citynameen="TAIYUAN" citycode="00072" name="choose_city_btn" href="javascript:;">太原</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WH">
																			<a realname="武汉" cityname="武汉" citynameen="WUHAN" citycode="00078" name="choose_city_btn" href="javascript:;">武汉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TS">
																			<a realname="唐山" cityname="唐山" citynameen="TANGSHAN" citycode="00079" name="choose_city_btn" href="javascript:;">唐山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZZ">
																			<a realname="郑州" cityname="郑州" citynameen="ZHENGZHOU" citycode="00084" name="choose_city_btn" href="javascript:;">郑州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ST">
																			<a realname="汕头" cityname="汕头" citynameen="SHANTOU" citycode="00085" name="choose_city_btn" href="javascript:;">汕头</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JY">
																			<a realname="揭阳" cityname="揭阳" citynameen="JIEYANG " citycode="00087" name="choose_city_btn" href="javascript:;">揭阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FZ">
																			<a realname="福州" cityname="福州" citynameen="FUZHOU" citycode="00090" name="choose_city_btn" href="javascript:;">福州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DL">
																			<a realname="大理" cityname="大理" citynameen="DALI" citycode="00091" name="choose_city_btn" href="javascript:;">大理</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KM">
																			<a realname="昆明" cityname="昆明" citynameen="KUNMING" citycode="00096" name="choose_city_btn" href="javascript:;">昆明</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MY">
																			<a realname="绵阳" cityname="绵阳" citynameen="MIANYANG" citycode="00097" name="choose_city_btn" href="javascript:;">绵阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZ">
																			<a realname="宿州" cityname="宿州" citynameen="SUZHOU" citycode="00099" name="choose_city_btn" href="javascript:;">宿州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YY">
																			<a realname="余姚" cityname="余姚" citynameen="YUYAO" citycode="00102" name="choose_city_btn" href="javascript:;">余姚</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NC">
																			<a realname="南充" cityname="南充" citynameen="NANCHONG" citycode="00103" name="choose_city_btn" href="javascript:;">南充</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FY">
																			<a realname="富阳" cityname="富阳" citynameen="FUYANG" citycode="00108" name="choose_city_btn" href="javascript:;">富阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YX">
																			<a realname="玉溪" cityname="玉溪" citynameen="YUXI" citycode="00109" name="choose_city_btn" href="javascript:;">玉溪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QH">
																			<a realname="琼海" cityname="琼海" citynameen="QIONGHAI" citycode="00111" name="choose_city_btn" href="javascript:;">琼海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="上虞" cityname="上虞" citynameen="SHANGYU" citycode="00114" name="choose_city_btn" href="javascript:;">上虞</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QJ">
																			<a realname="曲靖" cityname="曲靖" citynameen="QUJING" citycode="00115" name="choose_city_btn" href="javascript:;">曲靖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJ">
																			<a realname="诸暨" cityname="诸暨" citynameen="ZHUJI" citycode="00120" name="choose_city_btn" href="javascript:;">诸暨</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SX">
																			<a realname="绍兴" cityname="绍兴" citynameen="SHAOXING" citycode="00121" name="choose_city_btn" href="javascript:;">绍兴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HS">
																			<a realname="黄山" cityname="黄山" citynameen="HUANGSHAN" citycode="00123" name="choose_city_btn" href="javascript:;">黄山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="溧阳" cityname="溧阳" citynameen="LIYANG" citycode="00126" name="choose_city_btn" href="javascript:;">溧阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JH">
																			<a realname="金华" cityname="金华" citynameen="JINHUA" citycode="00127" name="choose_city_btn" href="javascript:;">金华</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJK">
																			<a realname="张家口" cityname="张家口" citynameen="ZHANGJIAKOU" citycode="00132" name="choose_city_btn" href="javascript:;">张家口</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YW">
																			<a realname="义乌" cityname="义乌" citynameen="YIWU" citycode="00133" name="choose_city_btn" href="javascript:;">义乌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JJ">
																			<a realname="晋江" cityname="晋江" citynameen="JINJIANG" citycode="00135" name="choose_city_btn" href="javascript:;">晋江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CS">
																			<a realname="长沙" cityname="长沙" citynameen="CHANGSHA" citycode="00139" name="choose_city_btn" href="javascript:;">长沙</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MZ">
																			<a realname="蒙自" cityname="蒙自" citynameen="MENGZI" citycode="00144" name="choose_city_btn" href="javascript:;">蒙自</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WL">
																			<a realname="温岭" cityname="温岭" citynameen="WENLING" citycode="00145" name="choose_city_btn" href="javascript:;">温岭</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="池州" cityname="池州" citynameen="CHIZHOU" citycode="00147" name="choose_city_btn" href="javascript:;">池州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="常州" cityname="常州" citynameen="CHANGZHOU" citycode="00151" name="choose_city_btn" href="javascript:;">常州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MAS">
																			<a realname="马鞍山" cityname="马鞍山" citynameen="MAANSHAN" citycode="00157" name="choose_city_btn" href="javascript:;">马鞍山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJG">
																			<a realname="张家港" cityname="张家港" citynameen="ZHANGJIAGANG" citycode="00159" name="choose_city_btn" href="javascript:;">张家港</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJ">
																			<a realname="湛江" cityname="湛江" citynameen="ZHANJIANG" citycode="00163" name="choose_city_btn" href="javascript:;">湛江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XZ">
																			<a realname="徐州" cityname="徐州" citynameen="XUZHOU" citycode="00169" name="choose_city_btn" href="javascript:;">徐州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LA">
																			<a realname="六安" cityname="六安" citynameen="LIUAN" citycode="00171" name="choose_city_btn" href="javascript:;">六安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZH">
																			<a realname="珠海" cityname="珠海" citynameen="ZHUHAI" citycode="00175" name="choose_city_btn" href="javascript:;">珠海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XT">
																			<a realname="湘潭" cityname="湘潭" citynameen="XIANGTAN" citycode="00180" name="choose_city_btn" href="javascript:;">湘潭</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KS">
																			<a realname="昆山" cityname="昆山" citynameen="KUNSHAN" citycode="00181" name="choose_city_btn" href="javascript:;">昆山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AX">
																			<a realname="安溪" cityname="安溪" citynameen="ANXI" citycode="00183" name="choose_city_btn" href="javascript:;">安溪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NC">
																			<a realname="南昌" cityname="南昌" citynameen="NANCHANG" citycode="00187" name="choose_city_btn" href="javascript:;">南昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="惠州" cityname="惠州" citynameen="HUIZHOU" citycode="00193" name="choose_city_btn" href="javascript:;">惠州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QZ">
																			<a realname="钦州" cityname="钦州" citynameen="QINZHOU" citycode="00195" name="choose_city_btn" href="javascript:;">钦州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NT">
																			<a realname="南通" cityname="南通" citynameen="NANTONG" citycode="00199" name="choose_city_btn" href="javascript:;">南通</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AN">
																			<a realname="安宁" cityname="安宁" citynameen="ANNING" citycode="00204" name="choose_city_btn" href="javascript:;">安宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="盐城" cityname="盐城" citynameen="YANCHENG" citycode="00205" name="choose_city_btn" href="javascript:;">盐城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WZ">
																			<a realname="梧州" cityname="梧州" citynameen="WUZHOU" citycode="00207" name="choose_city_btn" href="javascript:;">梧州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CS">
																			<a realname="常熟" cityname="常熟" citynameen="CHANGSHU" citycode="00211" name="choose_city_btn" href="javascript:;">常熟</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XT">
																			<a realname="邢台" cityname="邢台" citynameen="XINGTAI" citycode="00216" name="choose_city_btn" href="javascript:;">邢台</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YZ">
																			<a realname="扬州" cityname="扬州" citynameen="YANGZHOU" citycode="00217" name="choose_city_btn" href="javascript:;">扬州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="浏阳" cityname="浏阳" citynameen="LIUYANG" citycode="00219" name="choose_city_btn" href="javascript:;">浏阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZJ">
																			<a realname="镇江" cityname="镇江" citynameen="ZHENJIANG" citycode="00223" name="choose_city_btn" href="javascript:;">镇江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CX">
																			<a realname="慈溪" cityname="慈溪" citynameen="CIXI" citycode="00229" name="choose_city_btn" href="javascript:;">慈溪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AS">
																			<a realname="鞍山" cityname="鞍山" citynameen="ANSHAN" citycode="00235" name="choose_city_btn" href="javascript:;">鞍山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WN">
																			<a realname="万宁" cityname="万宁" citynameen="WANNING" citycode="00240" name="choose_city_btn" href="javascript:;">万宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CC">
																			<a realname="长春" cityname="长春" citynameen="CHANGCHUN" citycode="00241" name="choose_city_btn" href="javascript:;">长春</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HHHT">
																			<a realname="呼和浩特" cityname="呼和浩特" citynameen="HUHEHAOTE" citycode="00247" name="choose_city_btn" href="javascript:;">呼和浩特</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WH">
																			<a realname="芜湖" cityname="芜湖" citynameen="WUHU" citycode="00253" name="choose_city_btn" href="javascript:;">芜湖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TZ">
																			<a realname="台州" cityname="台州" citynameen="TAIZHOU" citycode="00259" name="choose_city_btn" href="javascript:;">台州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WA">
																			<a realname="武安" cityname="武安" citynameen="WUAN" citycode="00264" name="choose_city_btn" href="javascript:;">武安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JY">
																			<a realname="江阴" cityname="江阴" citynameen="JIANGYIN" citycode="00265" name="choose_city_btn" href="javascript:;">江阴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YQ">
																			<a realname="乐清" cityname="乐清" citynameen="YUEQING" citycode="00277" name="choose_city_btn" href="javascript:;">乐清</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LH">
																			<a realname="临海" cityname="临海" citynameen="LINHAI" citycode="00283" name="choose_city_btn" href="javascript:;">临海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LZ">
																			<a realname="柳州" cityname="柳州" citynameen="LIUZHOU" citycode="00288" name="choose_city_btn" href="javascript:;">柳州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QD">
																			<a realname="青岛" cityname="青岛" citynameen="QINGDAO" citycode="00289" name="choose_city_btn" href="javascript:;">青岛</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HEB">
																			<a realname="哈尔滨" cityname="哈尔滨" citynameen="HAERBIN" citycode="00295" name="choose_city_btn" href="javascript:;">哈尔滨</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZS">
																			<a realname="舟山" cityname="舟山" citynameen="ZHOUSHAN" citycode="00301" name="choose_city_btn" href="javascript:;">舟山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RA">
																			<a realname="瑞安" cityname="瑞安" citynameen="RUIAN" citycode="00307" name="choose_city_btn" href="javascript:;">瑞安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CL">
																			<a realname="长乐" cityname="长乐" citynameen="CHANGLE" citycode="00312" name="choose_city_btn" href="javascript:;">长乐</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DL">
																			<a realname="大连" cityname="大连" citynameen="DALIAN" citycode="00313" name="choose_city_btn" href="javascript:;">大连</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HK">
																			<a realname="海口" cityname="海口" citynameen="HAIKOU " citycode="00319" name="choose_city_btn" href="javascript:;">海口</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WH">
																			<a realname="威海" cityname="威海" citynameen="WEIHAI" citycode="00325" name="choose_city_btn" href="javascript:;">威海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DY">
																			<a realname="东营" cityname="东营" citynameen="DONGYING" citycode="00331" name="choose_city_btn" href="javascript:;">东营</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HA">
																			<a realname="淮安" cityname="淮安" citynameen="HUAIAN" citycode="00336" name="choose_city_btn" href="javascript:;">淮安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YT">
																			<a realname="烟台" cityname="烟台" citynameen="YANTAI" citycode="00337" name="choose_city_btn" href="javascript:;">烟台</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QZ">
																			<a realname="泉州" cityname="泉州" citynameen="QUANZHOU" citycode="00343" name="choose_city_btn" href="javascript:;">泉州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YJ">
																			<a realname="延吉" cityname="延吉" citynameen="YANJI" citycode="00349" name="choose_city_btn" href="javascript:;">延吉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DD">
																			<a realname="丹东" cityname="丹东" citynameen="DANDONG" citycode="00355" name="choose_city_btn" href="javascript:;">丹东</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YL">
																			<a realname="榆林" cityname="榆林" citynameen="YULIN" citycode="00360" name="choose_city_btn" href="javascript:;">榆林</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JL">
																			<a realname="吉林" cityname="吉林" citynameen="JILIN" citycode="00361" name="choose_city_btn" href="javascript:;">吉林</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NN">
																			<a realname="南宁" cityname="南宁" citynameen="NANNING" citycode="00367" name="choose_city_btn" href="javascript:;">南宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="襄阳" cityname="襄阳" citynameen="XIANGYANG" citycode="00373" name="choose_city_btn" href="javascript:;">襄阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HY">
																			<a realname="衡阳" cityname="衡阳" citynameen="HENGYANG" citycode="00379" name="choose_city_btn" href="javascript:;">衡阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XT">
																			<a realname="仙桃" cityname="仙桃" citynameen="XIANTAO" citycode="00384" name="choose_city_btn" href="javascript:;">仙桃</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CD">
																			<a realname="常德" cityname="常德" citynameen="CHANGDE" citycode="00385" name="choose_city_btn" href="javascript:;">常德</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZZ">
																			<a realname="株洲" cityname="株洲" citynameen="ZHUZHOU" citycode="00391" name="choose_city_btn" href="javascript:;">株洲</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JZ">
																			<a realname="荆州" cityname="荆州" citynameen="JINGZHOU" citycode="00403" name="choose_city_btn" href="javascript:;">荆州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SR">
																			<a realname="上饶" cityname="上饶" citynameen="SHANGRAO" citycode="00408" name="choose_city_btn" href="javascript:;">上饶</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="宜昌" cityname="宜昌" citynameen="YICHANG" citycode="00409" name="choose_city_btn" href="javascript:;">宜昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TL">
																			<a realname="通辽" cityname="通辽" citynameen="TONGLIAO" citycode="00415" name="choose_city_btn" href="javascript:;">通辽</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HC">
																			<a realname="海城" cityname="海城" citynameen="HAICHENG" citycode="00421" name="choose_city_btn" href="javascript:;">海城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="十堰" cityname="十堰" citynameen="SHIYAN" citycode="00427" name="choose_city_btn" href="javascript:;">十堰</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LYG">
																			<a realname="连云港" cityname="连云港" citynameen="LIANYUNGANG" citycode="00432" name="choose_city_btn" href="javascript:;">连云港</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JJ">
																			<a realname="九江" cityname="九江" citynameen="JIUJIANG" citycode="00433" name="choose_city_btn" href="javascript:;">九江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HS">
																			<a realname="黄石" cityname="黄石" citynameen="HUANGSHI" citycode="00439" name="choose_city_btn" href="javascript:;">黄石</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XA">
																			<a realname="西安" cityname="西安" citynameen="XIAN" citycode="00445" name="choose_city_btn" href="javascript:;">西安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DG">
																			<a realname="东莞" cityname="东莞" citynameen="DONGGUAN" citycode="00451" name="choose_city_btn" href="javascript:;">东莞</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YL">
																			<a realname="玉林" cityname="玉林" citynameen="YULIN" citycode="00456" name="choose_city_btn" href="javascript:;">玉林</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="湖州" cityname="湖州" citynameen="HUZHOU" citycode="00457" name="choose_city_btn" href="javascript:;">湖州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QQHE">
																			<a realname="齐齐哈尔" cityname="齐齐哈尔" citynameen="QIQIHAER" citycode="00463" name="choose_city_btn" href="javascript:;">齐齐哈尔</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MDJ">
																			<a realname="牡丹江" cityname="牡丹江" citynameen="MUDANJIANG" citycode="00469" name="choose_city_btn" href="javascript:;">牡丹江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MM">
																			<a realname="茂名" cityname="茂名" citynameen="MAOMING" citycode="00475" name="choose_city_btn" href="javascript:;">茂名</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PX">
																			<a realname="萍乡" cityname="萍乡" citynameen="PINGXIANG" citycode="00480" name="choose_city_btn" href="javascript:;">萍乡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YJ">
																			<a realname="阳江" cityname="阳江" citynameen="YANGJIANG" citycode="00481" name="choose_city_btn" href="javascript:;">阳江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZS">
																			<a realname="中山" cityname="中山" citynameen="ZHONGSHAN" citycode="00493" name="choose_city_btn" href="javascript:;">中山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YH">
																			<a realname="玉环" cityname="玉环" citynameen="YUHUAN" citycode="00499" name="choose_city_btn" href="javascript:;">玉环</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="新余" cityname="新余" citynameen="XINYU" citycode="00504" name="choose_city_btn" href="javascript:;">新余</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WF">
																			<a realname="潍坊" cityname="潍坊" citynameen="WEIFANG" citycode="00505" name="choose_city_btn" href="javascript:;">潍坊</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GL">
																			<a realname="桂林" cityname="桂林" citynameen="GUILIN" citycode="00511" name="choose_city_btn" href="javascript:;">桂林</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DQ">
																			<a realname="大庆" cityname="大庆" citynameen="DAQING" citycode="00517" name="choose_city_btn" href="javascript:;">大庆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LZ">
																			<a realname="兰州" cityname="兰州" citynameen="LANZHOU" citycode="00523" name="choose_city_btn" href="javascript:;">兰州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JA">
																			<a realname="吉安" cityname="吉安" citynameen="JIAN" citycode="00528" name="choose_city_btn" href="javascript:;">吉安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZB">
																			<a realname="淄博" cityname="淄博" citynameen="ZIBO" citycode="00529" name="choose_city_btn" href="javascript:;">淄博</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CQ">
																			<a realname="重庆" cityname="重庆" citynameen="CHONGQING" citycode="00535" name="choose_city_btn" href="javascript:;">重庆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GY">
																			<a realname="贵阳" cityname="贵阳" citynameen="GUIYANG" citycode="00541" name="choose_city_btn" href="javascript:;">贵阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LS">
																			<a realname="丽水" cityname="丽水" citynameen="LISHUI" citycode="00547" name="choose_city_btn" href="javascript:;">丽水</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BS">
																			<a realname="保山" cityname="保山" citynameen="BAOSHAN" citycode="00552" name="choose_city_btn" href="javascript:;">保山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PJ">
																			<a realname="盘锦" cityname="盘锦" citynameen="PANJIN" citycode="00553" name="choose_city_btn" href="javascript:;">盘锦</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HLD">
																			<a realname="葫芦岛" cityname="葫芦岛" citynameen="HULUDAO" citycode="00559" name="choose_city_btn" href="javascript:;">葫芦岛</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TX">
																			<a realname="桐乡" cityname="桐乡" citynameen="TONGXIANG" citycode="00565" name="choose_city_btn" href="javascript:;">桐乡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JZ">
																			<a realname="锦州" cityname="锦州" citynameen="JINZHOU" citycode="00571" name="choose_city_btn" href="javascript:;">锦州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XG">
																			<a realname="孝感" cityname="孝感" citynameen="XIAOGAN" citycode="00576" name="choose_city_btn" href="javascript:;">孝感</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PH">
																			<a realname="平湖" cityname="平湖" citynameen="PINGHU" citycode="00577" name="choose_city_btn" href="javascript:;">平湖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YK">
																			<a realname="营口" cityname="营口" citynameen="YINGKOU" citycode="00589" name="choose_city_btn" href="javascript:;">营口</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JM">
																			<a realname="江门" cityname="江门" citynameen="JIANGMEN" citycode="00595" name="choose_city_btn" href="javascript:;">江门</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JDZ">
																			<a realname="景德镇" cityname="景德镇" citynameen="JINGDEZHEN" citycode="00600" name="choose_city_btn" href="javascript:;">景德镇</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FH">
																			<a realname="奉化" cityname="奉化" citynameen="FENGHUA" citycode="00601" name="choose_city_btn" href="javascript:;">奉化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BD">
																			<a realname="保定" cityname="保定" citynameen="BAODING" citycode="00619" name="choose_city_btn" href="javascript:;">保定</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LD">
																			<a realname="娄底" cityname="娄底" citynameen="LOUDI" citycode="00624" name="choose_city_btn" href="javascript:;">娄底</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QHD">
																			<a realname="秦皇岛" cityname="秦皇岛" citynameen="QINHUANGDAO" citycode="00625" name="choose_city_btn" href="javascript:;">秦皇岛</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BT">
																			<a realname="包头" cityname="包头" citynameen="BAOTOU" citycode="00631" name="choose_city_btn" href="javascript:;">包头</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HN">
																			<a realname="海宁" cityname="海宁" citynameen="HAINING" citycode="00637" name="choose_city_btn" href="javascript:;">海宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QZ">
																			<a realname="衢州" cityname="衢州" citynameen="QUZHOU" citycode="00643" name="choose_city_btn" href="javascript:;">衢州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YA">
																			<a realname="延安" cityname="延安" citynameen="YANAN" citycode="00648" name="choose_city_btn" href="javascript:;">延安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="辽阳" cityname="辽阳" citynameen="LIAOYANG" citycode="00649" name="choose_city_btn" href="javascript:;">辽阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="洛阳" cityname="洛阳" citynameen="LUOYANG" citycode="00661" name="choose_city_btn" href="javascript:;">洛阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TS">
																			<a realname="台山" cityname="台山" citynameen="TAISHAN" citycode="00667" name="choose_city_btn" href="javascript:;">台山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HG">
																			<a realname="黄冈" cityname="黄冈" citynameen="HUANGGANG" citycode="00672" name="choose_city_btn" href="javascript:;">黄冈</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QY">
																			<a realname="清远" cityname="清远" citynameen="QINGYUAN" citycode="00673" name="choose_city_btn" href="javascript:;">清远</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HH">
																			<a realname="怀化" cityname="怀化" citynameen="HUAIHUA" citycode="00679" name="choose_city_btn" href="javascript:;">怀化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="长治" cityname="长治" citynameen="CHANGZHI" citycode="00685" name="choose_city_btn" href="javascript:;">长治</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZQ">
																			<a realname="肇庆" cityname="肇庆" citynameen="ZHAOQING" citycode="00691" name="choose_city_btn" href="javascript:;">肇庆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZ">
																			<a realname="随州" cityname="随州" citynameen="SUIZHOU" citycode="00696" name="choose_city_btn" href="javascript:;">随州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SG">
																			<a realname="韶关" cityname="韶关" citynameen="SHAOGUAN" citycode="00697" name="choose_city_btn" href="javascript:;">韶关</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TL">
																			<a realname="铜陵" cityname="铜陵" citynameen="TONGLING" citycode="00703" name="choose_city_btn" href="javascript:;">铜陵</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HN">
																			<a realname="淮南" cityname="淮南" citynameen="HUAINAN" citycode="00709" name="choose_city_btn" href="javascript:;">淮南</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DT">
																			<a realname="大同" cityname="大同" citynameen="DATONG" citycode="00715" name="choose_city_btn" href="javascript:;">大同</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JZ">
																			<a realname="晋中" cityname="晋中" citynameen="JINZHONG" citycode="00720" name="choose_city_btn" href="javascript:;">晋中</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HB">
																			<a realname="淮北" cityname="淮北" citynameen="HUAIBEI" citycode="00721" name="choose_city_btn" href="javascript:;">淮北</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AQ">
																			<a realname="安庆" cityname="安庆" citynameen="ANQING" citycode="00727" name="choose_city_btn" href="javascript:;">安庆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FY">
																			<a realname="阜阳" cityname="阜阳" citynameen="FUYANG" citycode="00733" name="choose_city_btn" href="javascript:;">阜阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LA">
																			<a realname="临安" cityname="临安" citynameen="LINAN" citycode="00739" name="choose_city_btn" href="javascript:;">临安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BH">
																			<a realname="北海" cityname="北海" citynameen="BEIHAI" citycode="00744" name="choose_city_btn" href="javascript:;">北海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LF">
																			<a realname="临汾" cityname="临汾" citynameen="LINFEN" citycode="00745" name="choose_city_btn" href="javascript:;">临汾</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BB">
																			<a realname="蚌埠" cityname="蚌埠" citynameen="BENGBU" citycode="00751" name="choose_city_btn" href="javascript:;">蚌埠</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SQ">
																			<a realname="宿迁" cityname="宿迁" citynameen="SUQIAN" citycode="00757" name="choose_city_btn" href="javascript:;">宿迁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TZ">
																			<a realname="泰州" cityname="泰州" citynameen="TAIZHOU" citycode="00763" name="choose_city_btn" href="javascript:;">泰州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YX">
																			<a realname="宜兴" cityname="宜兴" citynameen="YIXING" citycode="00769" name="choose_city_btn" href="javascript:;">宜兴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="临沂" cityname="临沂" citynameen="LINYI" citycode="00775" name="choose_city_btn" href="javascript:;">临沂</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="银川" cityname="银川" citynameen="YINCHUAN" citycode="00781" name="choose_city_btn" href="javascript:;">银川</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XN">
																			<a realname="西宁" cityname="西宁" citynameen="XINING" citycode="00787" name="choose_city_btn" href="javascript:;">西宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TS">
																			<a realname="天水" cityname="天水" citynameen="TIANSHUI" citycode="00792" name="choose_city_btn" href="javascript:;">天水</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TT">
																			<a realname="天台" cityname="天台" citynameen="TIANTAI" citycode="00793" name="choose_city_btn" href="javascript:;">天台</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="辽源" cityname="辽源" citynameen="LIAOYUAN" citycode="00799" name="choose_city_btn" href="javascript:;">辽源</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="松原" cityname="松原" citynameen="SONGYUAN" citycode="00805" name="choose_city_btn" href="javascript:;">松原</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DY">
																			<a realname="东阳" cityname="东阳" citynameen="DONGYANG" citycode="00811" name="choose_city_btn" href="javascript:;">东阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FZ">
																			<a realname="抚州" cityname="抚州" citynameen="FUZHOU" citycode="00816" name="choose_city_btn" href="javascript:;">抚州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KP">
																			<a realname="开平" cityname="开平" citynameen="KAIPING" citycode="00817" name="choose_city_btn" href="javascript:;">开平</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PT">
																			<a realname="莆田" cityname="莆田" citynameen="PUTIAN" citycode="00823" name="choose_city_btn" href="javascript:;">莆田</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FS">
																			<a realname="抚顺" cityname="抚顺" citynameen="FUSHUN" citycode="00829" name="choose_city_btn" href="javascript:;">抚顺</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PY">
																			<a realname="濮阳" cityname="濮阳" citynameen="PUYANG" citycode="00835" name="choose_city_btn" href="javascript:;">濮阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JMS">
																			<a realname="佳木斯" cityname="佳木斯" citynameen="JIAMUSI" citycode="00840" name="choose_city_btn" href="javascript:;">佳木斯</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JD">
																			<a realname="建德" cityname="建德" citynameen="JIANDE" citycode="00841" name="choose_city_btn" href="javascript:;">建德</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HD">
																			<a realname="邯郸" cityname="邯郸" citynameen="HANDAN" citycode="00847" name="choose_city_btn" href="javascript:;">邯郸</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="咸阳" cityname="咸阳" citynameen="XIANYANG" citycode="00853" name="choose_city_btn" href="javascript:;">咸阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LF">
																			<a realname="廊坊" cityname="廊坊" citynameen="LANGFANG" citycode="00859" name="choose_city_btn" href="javascript:;">廊坊</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TM">
																			<a realname="天门" cityname="天门" citynameen="TIANMEN" citycode="00864" name="choose_city_btn" href="javascript:;">天门</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CD">
																			<a realname="承德" cityname="承德" citynameen="CHENGDE" citycode="00865" name="choose_city_btn" href="javascript:;">承德</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CF">
																			<a realname="赤峰" cityname="赤峰" citynameen="CHIFENG" citycode="00871" name="choose_city_btn" href="javascript:;">赤峰</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="沧州" cityname="沧州" citynameen="CANGZHOU" citycode="00877" name="choose_city_btn" href="javascript:;">沧州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MC">
																			<a realname="麻城" cityname="麻城" citynameen="MACHENG" citycode="00888" name="choose_city_btn" href="javascript:;">麻城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="潮州" cityname="潮州" citynameen="CHAOZHOU" citycode="00889" name="choose_city_btn" href="javascript:;">潮州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZS">
																			<a realname="石嘴山" cityname="石嘴山" citynameen="SHIZUISHAN" citycode="00895" name="choose_city_btn" href="javascript:;">石嘴山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BJ">
																			<a realname="宝鸡" cityname="宝鸡" citynameen="BAOJI" citycode="00901" name="choose_city_btn" href="javascript:;">宝鸡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YT">
																			<a realname="鹰潭" cityname="鹰潭" citynameen="YINGTAN" citycode="00912" name="choose_city_btn" href="javascript:;">鹰潭</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YK">
																			<a realname="永康" cityname="永康" citynameen="YONGKANG" citycode="00913" name="choose_city_btn" href="javascript:;">永康</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WN">
																			<a realname="渭南" cityname="渭南" citynameen="WEINAN" citycode="00919" name="choose_city_btn" href="javascript:;">渭南</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="运城" cityname="运城" citynameen="YUNCHENG" citycode="00925" name="choose_city_btn" href="javascript:;">运城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LC">
																			<a realname="聊城" cityname="聊城" citynameen="LIAOCHENG" citycode="00936" name="choose_city_btn" href="javascript:;">聊城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ss">
																			<a realname="石狮" cityname="石狮" citynameen="SHISHI" citycode="00937" name="choose_city_btn" href="javascript:;">石狮</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YB">
																			<a realname="宜宾" cityname="宜宾" citynameen="YIBIN" citycode="00943" name="choose_city_btn" href="javascript:;">宜宾</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FQ">
																			<a realname="福清" cityname="福清" citynameen="FUQING" citycode="00949" name="choose_city_btn" href="javascript:;">福清</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="宜春" cityname="宜春" citynameen="YICHUN" citycode="00960" name="choose_city_btn" href="javascript:;">宜春</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="龙岩" cityname="龙岩" citynameen="LONGYAN" citycode="00961" name="choose_city_btn" href="javascript:;">龙岩</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LZ">
																			<a realname="泸州" cityname="泸州" citynameen="LUZHOU" citycode="00967" name="choose_city_btn" href="javascript:;">泸州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CX">
																			<a realname="楚雄" cityname="楚雄" citynameen="CHUXIONG" citycode="00973" name="choose_city_btn" href="javascript:;">楚雄</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="滁州" cityname="滁州" citynameen="CHUZHOU" citycode="00984" name="choose_city_btn" href="javascript:;">滁州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LJ">
																			<a realname="丽江" cityname="丽江" citynameen="LIJIANG" citycode="00985" name="choose_city_btn" href="javascript:;">丽江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PZH">
																			<a realname="攀枝花" cityname="攀枝花" citynameen="PANZHIHUA" citycode="00991" name="choose_city_btn" href="javascript:;">攀枝花</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JH">
																			<a realname="景洪" cityname="景洪" citynameen="JINGHONG" citycode="00997" name="choose_city_btn" href="javascript:;">景洪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KF">
																			<a realname="开封" cityname="开封" citynameen="KAIFENG" citycode="01008" name="choose_city_btn" href="javascript:;">开封</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DJY">
																			<a realname="都江堰" cityname="都江堰" citynameen="DUJIANGYAN" citycode="01009" name="choose_city_btn" href="javascript:;">都江堰</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZG">
																			<a realname="自贡" cityname="自贡" citynameen="ZIGONG" citycode="01015" name="choose_city_btn" href="javascript:;">自贡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DY">
																			<a realname="德阳" cityname="德阳" citynameen="DEYANG" citycode="01021" name="choose_city_btn" href="javascript:;">德阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CH">
																			<a realname="巢湖" cityname="巢湖" citynameen="CHAOHU" citycode="01032" name="choose_city_btn" href="javascript:;">巢湖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YQ">
																			<a realname="阳泉" cityname="阳泉" citynameen="YANGQUAN" citycode="01033" name="choose_city_btn" href="javascript:;">阳泉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CMX">
																			<a realname="澄迈县" cityname="澄迈县" citynameen="CHENGMAIXIAN" citycode="01039" name="choose_city_btn" href="javascript:;">澄迈县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MS">
																			<a realname="眉山" cityname="眉山" citynameen="MEISHAN" citycode="01045" name="choose_city_btn" href="javascript:;">眉山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XC">
																			<a realname="宣城" cityname="宣城" citynameen="XUANCHENG" citycode="01056" name="choose_city_btn" href="javascript:;">宣城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="sp">
																			<a realname="四平" cityname="四平" citynameen="SIPING" citycode="01057" name="choose_city_btn" href="javascript:;">四平</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="fx">
																			<a realname="阜新" cityname="阜新" citynameen="FUXIN" citycode="01069" name="choose_city_btn" href="javascript:;">阜新</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BZ">
																			<a realname="亳州" cityname="亳州" citynameen="BOZHOU" citycode="01080" name="choose_city_btn" href="javascript:;">亳州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="bx">
																			<a realname="本溪" cityname="本溪" citynameen="BENXI" citycode="01081" name="choose_city_btn" href="javascript:;">本溪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XX">
																			<a realname="湘乡" cityname="湘乡" citynameen="XIANGXIANG" citycode="01087" name="choose_city_btn" href="javascript:;">湘乡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CY">
																			<a realname="朝阳" cityname="朝阳" citynameen="CHAOYANG" citycode="01093" name="choose_city_btn" href="javascript:;">朝阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BS">
																			<a realname="百色" cityname="百色" citynameen="BAISE" citycode="01104" name="choose_city_btn" href="javascript:;">百色</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZH">
																			<a realname="遵化" cityname="遵化" citynameen="ZUNHUA" citycode="01105" name="choose_city_btn" href="javascript:;">遵化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JYG">
																			<a realname="嘉峪关" cityname="嘉峪关" citynameen="JIAYUGUAN" citycode="01111" name="choose_city_btn" href="javascript:;">嘉峪关</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HY">
																			<a realname="河源" cityname="河源" citynameen="HEYUAN" citycode="01117" name="choose_city_btn" href="javascript:;">河源</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GG">
																			<a realname="贵港" cityname="贵港" citynameen="GUIGANG" citycode="01128" name="choose_city_btn" href="javascript:;">贵港</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JM">
																			<a realname="即墨" cityname="即墨" citynameen="JIMO" citycode="01129" name="choose_city_btn" href="javascript:;">即墨</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NP">
																			<a realname="南平" cityname="南平" citynameen="NANPING" citycode="01135" name="choose_city_btn" href="javascript:;">南平</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WJ">
																			<a realname="吴江" cityname="吴江" citynameen="WUJIANG" citycode="01141" name="choose_city_btn" href="javascript:;">吴江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MS">
																			<a realname="芒市" cityname="芒市" citynameen="MANGSHI" citycode="01152" name="choose_city_btn" href="javascript:;">芒市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="dg">
																			<a realname="东港" cityname="东港" citynameen="DONGGANG" citycode="01153" name="choose_city_btn" href="javascript:;">东港</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HJ">
																			<a realname="河间" cityname="河间" citynameen="HEJIAN" citycode="01165" name="choose_city_btn" href="javascript:;">河间</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HS">
																			<a realname="衡水" cityname="衡水" citynameen="HENGSHUI" citycode="01177" name="choose_city_btn" href="javascript:;">衡水</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JY">
																			<a realname="江油" cityname="江油" citynameen="JIANGYOU" citycode="01189" name="choose_city_btn" href="javascript:;">江油</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SH">
																			<a realname="绥化" cityname="绥化" citynameen="SUIHUA" citycode="01201" name="choose_city_btn" href="javascript:;">绥化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RG">
																			<a realname="如皋" cityname="如皋" citynameen="RUGAO" citycode="01224" name="choose_city_btn" href="javascript:;">如皋</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="dz">
																			<a realname="定州" cityname="定州" citynameen="DINGZHOU" citycode="01225" name="choose_city_btn" href="javascript:;">定州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TL">
																			<a realname="铁岭" cityname="铁岭" citynameen="TIELING" citycode="01237" name="choose_city_btn" href="javascript:;">铁岭</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PDS">
																			<a realname="平顶山" cityname="平顶山" citynameen="PINGDINGSHAN" citycode="01248" name="choose_city_btn" href="javascript:;">平顶山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RQ">
																			<a realname="任丘" cityname="任丘" citynameen="RENQIU" citycode="01249" name="choose_city_btn" href="javascript:;">任丘</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZZ">
																			<a realname="涿州" cityname="涿州" citynameen="ZHUOZHOU" citycode="01261" name="choose_city_btn" href="javascript:;">涿州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DY">
																			<a realname="大冶" cityname="大冶" citynameen="DAYE" citycode="01272" name="choose_city_btn" href="javascript:;">大冶</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HH">
																			<a realname="黄骅" cityname="黄骅" citynameen="HUANGHUA" citycode="01273" name="choose_city_btn" href="javascript:;">黄骅</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GZ">
																			<a realname="赣州" cityname="赣州" citynameen="GANZHOU" citycode="01285" name="choose_city_btn" href="javascript:;">赣州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QJ">
																			<a realname="潜江" cityname="潜江" citynameen="QIANJIANG" citycode="01297" name="choose_city_btn" href="javascript:;">潜江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CZ">
																			<a realname="郴州" cityname="郴州" citynameen="CHENZHOU" citycode="01309" name="choose_city_btn" href="javascript:;">郴州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XH">
																			<a realname="兴化" cityname="兴化" citynameen="XINGHUA" citycode="01320" name="choose_city_btn" href="javascript:;">兴化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TA">
																			<a realname="泰安" cityname="泰安" citynameen="TAIAN" citycode="01321" name="choose_city_btn" href="javascript:;">泰安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JN">
																			<a realname="济宁" cityname="济宁" citynameen="JINING" citycode="01333" name="choose_city_btn" href="javascript:;">济宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SY">
																			<a realname="邵阳" cityname="邵阳" citynameen="SHAOYANG" citycode="01344" name="choose_city_btn" href="javascript:;">邵阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RZ">
																			<a realname="日照" cityname="日照" citynameen="RIZHAO" citycode="01345" name="choose_city_btn" href="javascript:;">日照</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YY">
																			<a realname="岳阳" cityname="岳阳" citynameen="YUEYANG" citycode="01357" name="choose_city_btn" href="javascript:;">岳阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JS">
																			<a realname="吉首" cityname="吉首" citynameen="JISHOU" citycode="01368" name="choose_city_btn" href="javascript:;">吉首</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YA">
																			<a realname="永安" cityname="永安" citynameen="YONGAN" citycode="01369" name="choose_city_btn" href="javascript:;">永安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BT">
																			<a realname="泊头" cityname="泊头" citynameen="BOTOU" citycode="01381" name="choose_city_btn" href="javascript:;">泊头</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="贺州" cityname="贺州" citynameen="HEZHOU" citycode="01392" name="choose_city_btn" href="javascript:;">贺州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XC">
																			<a realname="西昌" cityname="西昌" citynameen="XICHANG" citycode="01393" name="choose_city_btn" href="javascript:;">西昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZMD">
																			<a realname="驻马店" cityname="驻马店" citynameen="ZHUMADIAN" citycode="01416" name="choose_city_btn" href="javascript:;">驻马店</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AS">
																			<a realname="安顺" cityname="安顺" citynameen="ANSHUN" citycode="01417" name="choose_city_btn" href="javascript:;">安顺</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MZ">
																			<a realname="梅州" cityname="梅州" citynameen="MEIZHOU" citycode="01440" name="choose_city_btn" href="javascript:;">梅州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KLMY">
																			<a realname="克拉玛依" cityname="克拉玛依" citynameen="KELAMAYI" citycode="01441" name="choose_city_btn" href="javascript:;">克拉玛依</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TC">
																			<a realname="太仓" cityname="太仓" citynameen="TAICANG" citycode="01464" name="choose_city_btn" href="javascript:;">太仓</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YB">
																			<a realname="延边" cityname="延边" citynameen="YANBIAN" citycode="01465" name="choose_city_btn" href="javascript:;">延边</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LZ">
																			<a realname="莱州" cityname="莱州" citynameen="LAIZHOU" citycode="01488" name="choose_city_btn" href="javascript:;">莱州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NY">
																			<a realname="南阳" cityname="南阳" citynameen="NANYANG" citycode="01512" name="choose_city_btn" href="javascript:;">南阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YZ">
																			<a realname="永州" cityname="永州" citynameen="YONGZHOU" citycode="01513" name="choose_city_btn" href="javascript:;">永州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XX">
																			<a realname="新乡" cityname="新乡" citynameen="XINXIANG" citycode="01536" name="choose_city_btn" href="javascript:;">新乡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SQ">
																			<a realname="商丘" cityname="商丘" citynameen="SHANGQIU" citycode="01560" name="choose_city_btn" href="javascript:;">商丘</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JZ">
																			<a realname="焦作" cityname="焦作" citynameen="JIAOZUO" citycode="01584" name="choose_city_btn" href="javascript:;">焦作</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AY">
																			<a realname="安阳" cityname="安阳" citynameen="ANYANG" citycode="01608" name="choose_city_btn" href="javascript:;">安阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JZ">
																			<a realname="胶州" cityname="胶州" citynameen="JIAOZHOU" citycode="01632" name="choose_city_btn" href="javascript:;">胶州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YA">
																			<a realname="雅安" cityname="雅安" citynameen="YAAN" citycode="01633" name="choose_city_btn" href="javascript:;">雅安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LX">
																			<a realname="兰溪" cityname="兰溪" citynameen="LANXI" citycode="01656" name="choose_city_btn" href="javascript:;">兰溪</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WYS">
																			<a realname="武夷山" cityname="武夷山" citynameen="WUYISHAN" citycode="01657" name="choose_city_btn" href="javascript:;">武夷山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QD">
																			<a realname="启东" cityname="启东" citynameen="QIDONG" citycode="01680" name="choose_city_btn" href="javascript:;">启东</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="信阳" cityname="信阳" citynameen="XINYANG" citycode="01704" name="choose_city_btn" href="javascript:;">信阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LS">
																			<a realname="拉萨" cityname="拉萨" citynameen="LASA" citycode="01705" name="choose_city_btn" href="javascript:;">拉萨</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZY">
																			<a realname="招远" cityname="招远" citynameen="ZHAOYUAN" citycode="01728" name="choose_city_btn" href="javascript:;">招远</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BA">
																			<a realname="北安" cityname="北安" citynameen="BEIAN" citycode="01729" name="choose_city_btn" href="javascript:;">北安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QZ">
																			<a realname="青州" cityname="青州" citynameen="QINGZHOU" citycode="01752" name="choose_city_btn" href="javascript:;">青州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XC">
																			<a realname="许昌" cityname="许昌" citynameen="XUCHANG" citycode="01776" name="choose_city_btn" href="javascript:;">许昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DX">
																			<a realname="定西" cityname="定西" citynameen="DINGXI" citycode="01777" name="choose_city_btn" href="javascript:;">定西</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KL">
																			<a realname="垦利" cityname="垦利" citynameen="KENLI" citycode="01800" name="choose_city_btn" href="javascript:;">垦利</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GEM">
																			<a realname="格尔木" cityname="格尔木" citynameen="GEERMU" citycode="01801" name="choose_city_btn" href="javascript:;">格尔木</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LH">
																			<a realname="漯河" cityname="漯河" citynameen="LUOHE" citycode="01824" name="choose_city_btn" href="javascript:;">漯河</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XX">
																			<a realname="湘西" cityname="湘西" citynameen="XIANGXI" citycode="01825" name="choose_city_btn" href="javascript:;">湘西</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LB">
																			<a realname="来宾" cityname="来宾" citynameen="LAIBIN" citycode="01848" name="choose_city_btn" href="javascript:;">来宾</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SN">
																			<a realname="遂宁" cityname="遂宁" citynameen="SUINING" citycode="01872" name="choose_city_btn" href="javascript:;">遂宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ST">
																			<a realname="昭通" cityname="昭通" citynameen="SHAOTONG" citycode="01873" name="choose_city_btn" href="javascript:;">昭通</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SG">
																			<a realname="寿光" cityname="寿光" citynameen="SHOUGUANG" citycode="01896" name="choose_city_btn" href="javascript:;">寿光</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DY">
																			<a realname="都匀" cityname="都匀" citynameen="DUYUN" citycode="01897" name="choose_city_btn" href="javascript:;">都匀</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZY">
																			<a realname="遵义" cityname="遵义" citynameen="ZUNYI" citycode="01920" name="choose_city_btn" href="javascript:;">遵义</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="兴义" cityname="兴义" citynameen="XINGYI" citycode="01921" name="choose_city_btn" href="javascript:;">兴义</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PZ">
																			<a realname="彭州" cityname="彭州" citynameen="PENGZHOU" citycode="01944" name="choose_city_btn" href="javascript:;">彭州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BJ">
																			<a realname="毕节" cityname="毕节" citynameen="BIJIE" citycode="01945" name="choose_city_btn" href="javascript:;">毕节</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZQ">
																			<a realname="章丘" cityname="章丘" citynameen="ZHANGQIU" citycode="01968" name="choose_city_btn" href="javascript:;">章丘</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="荥阳" cityname="荥阳" citynameen="XINGYANG" citycode="01969" name="choose_city_btn" href="javascript:;">荥阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="EZ">
																			<a realname="鄂州" cityname="鄂州" citynameen="EZHOU" citycode="01992" name="choose_city_btn" href="javascript:;">鄂州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ALSM">
																			<a realname="阿拉善盟" cityname="阿拉善盟" citynameen="ALASHAN" citycode="01993" name="choose_city_btn" href="javascript:;">阿拉善盟</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BYNE">
																			<a realname="巴彦淖尔" cityname="巴彦淖尔" citynameen="BAYANNAOER" citycode="02016" name="choose_city_btn" href="javascript:;">巴彦淖尔</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BETL">
																			<a realname="博尔塔拉" cityname="博尔塔拉" citynameen="BOERTALA" citycode="02017" name="choose_city_btn" href="javascript:;">博尔塔拉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WH">
																			<a realname="乌海" cityname="乌海" citynameen="WUHAI" citycode="02040" name="choose_city_btn" href="javascript:;">乌海</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HM">
																			<a realname="哈密" cityname="哈密" citynameen="HAMI" citycode="02041" name="choose_city_btn" href="javascript:;">哈密</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="EEDS">
																			<a realname="鄂尔多斯" cityname="鄂尔多斯" citynameen="EERDUOSI" citycode="02064" name="choose_city_btn" href="javascript:;">鄂尔多斯</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AKS">
																			<a realname="阿克苏" cityname="阿克苏" citynameen="AKESU" citycode="02065" name="choose_city_btn" href="javascript:;">阿克苏</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZZ">
																			<a realname="漳州" cityname="漳州" citynameen="ZHANGZHOU" citycode="02088" name="choose_city_btn" href="javascript:;">漳州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DQ">
																			<a realname="迪庆" cityname="迪庆" citynameen="DIQING" citycode="02089" name="choose_city_btn" href="javascript:;">迪庆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WLCB">
																			<a realname="乌兰察布" cityname="乌兰察布" citynameen="WULANCHABU" citycode="02112" name="choose_city_btn" href="javascript:;">乌兰察布</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HN">
																			<a realname="海南" cityname="海南" citynameen="HAINAN" citycode="02113" name="choose_city_btn" href="javascript:;">海南</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WC">
																			<a realname="文昌" cityname="文昌" citynameen="WENCHANG" citycode="02136" name="choose_city_btn" href="javascript:;">文昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TR">
																			<a realname="铜仁" cityname="铜仁" citynameen="TONGREN" citycode="02137" name="choose_city_btn" href="javascript:;">铜仁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DX">
																			<a realname="东兴" cityname="东兴" citynameen="DONGXING" citycode="02160" name="choose_city_btn" href="javascript:;">东兴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BC">
																			<a realname="白城" cityname="白城" citynameen="BAICHENG" citycode="02184" name="choose_city_btn" href="javascript:;">白城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WZ">
																			<a realname="吴忠" cityname="吴忠" citynameen="WUZHONG" citycode="02185" name="choose_city_btn" href="javascript:;">吴忠</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WLHT">
																			<a realname="乌兰浩特" cityname="乌兰浩特" citynameen="WULANHAOTE" citycode="02208" name="choose_city_btn" href="javascript:;">乌兰浩特</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WLMQ">
																			<a realname="乌鲁木齐" cityname="乌鲁木齐" citynameen="WULUMUQI" citycode="02232" name="choose_city_btn" href="javascript:;">乌鲁木齐</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HC">
																			<a realname="珲春" cityname="珲春" citynameen="HUNCHUN" citycode="02256" name="choose_city_btn" href="javascript:;">珲春</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JC">
																			<a realname="晋城" cityname="晋城" citynameen="JINCHENG" citycode="02280" name="choose_city_btn" href="javascript:;">晋城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LY">
																			<a realname="耒阳" cityname="耒阳" citynameen="LEIYANG" citycode="02304" name="choose_city_btn" href="javascript:;">耒阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHZ">
																			<a realname="石河子" cityname="石河子" citynameen="SHIHEZI" citycode="02328" name="choose_city_btn" href="javascript:;">石河子</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ES">
																			<a realname="恩施" cityname="恩施" citynameen="ENSHI" citycode="02352" name="choose_city_btn" href="javascript:;">恩施</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JX">
																			<a realname="鸡西" cityname="鸡西" citynameen="JIXI" citycode="02376" name="choose_city_btn" href="javascript:;">鸡西</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TH">
																			<a realname="通化" cityname="通化" citynameen="TONGHUA" citycode="02400" name="choose_city_btn" href="javascript:;">通化</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BS">
																			<a realname="白山" cityname="白山" citynameen="BAISHAN" citycode="02424" name="choose_city_btn" href="javascript:;">白山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="菏泽" cityname="菏泽" citynameen="HEZE" citycode="02448" name="choose_city_btn" href="javascript:;">菏泽</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HJ">
																			<a realname="河津" cityname="河津" citynameen="HEJIN" citycode="02472" name="choose_city_btn" href="javascript:;">河津</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XZ">
																			<a realname="忻州" cityname="忻州" citynameen="XINZHOU" citycode="02496" name="choose_city_btn" href="javascript:;">忻州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LL">
																			<a realname="吕梁" cityname="吕梁" citynameen="LVLIANG" citycode="02520" name="choose_city_btn" href="javascript:;">吕梁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SW">
																			<a realname="汕尾" cityname="汕尾" citynameen="SHANWEI" citycode="02544" name="choose_city_btn" href="javascript:;">汕尾</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZY">
																			<a realname="张掖" cityname="张掖" citynameen="ZHANGYE" citycode="02568" name="choose_city_btn" href="javascript:;">张掖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JC">
																			<a realname="金昌" cityname="金昌" citynameen="JINCHANG" citycode="02592" name="choose_city_btn" href="javascript:;">金昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PL">
																			<a realname="平凉" cityname="平凉" citynameen="PINGLIANG" citycode="02616" name="choose_city_btn" href="javascript:;">平凉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BZ">
																			<a realname="滨州" cityname="滨州" citynameen="BINZHOU" citycode="02640" name="choose_city_btn" href="javascript:;">滨州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YJ">
																			<a realname="沅江" cityname="沅江" citynameen="YUANJIANG" citycode="02664" name="choose_city_btn" href="javascript:;">沅江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DT">
																			<a realname="东台" cityname="东台" citynameen="DONGTAI" citycode="02688" name="choose_city_btn" href="javascript:;">东台</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DZ">
																			<a realname="达州" cityname="达州" citynameen="DAZHOU" citycode="02712" name="choose_city_btn" href="javascript:;">达州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CB">
																			<a realname="赤壁" cityname="赤壁" citynameen="CHIBI" citycode="02736" name="choose_city_btn" href="javascript:;">赤壁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZY">
																			<a realname="资阳" cityname="资阳" citynameen="ZIYANG" citycode="02760" name="choose_city_btn" href="javascript:;">资阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SMX">
																			<a realname="三门峡" cityname="三门峡" citynameen="SANMENXIA" citycode="02784" name="choose_city_btn" href="javascript:;">三门峡</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DF">
																			<a realname="东方" cityname="东方" citynameen="DONGFANG" citycode="02808" name="choose_city_btn" href="javascript:;">东方</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZC">
																			<a realname="邹城" cityname="邹城" citynameen="ZOUCHENG" citycode="02832" name="choose_city_btn" href="javascript:;">邹城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AL">
																			<a realname="安陆" cityname="安陆" citynameen="ANLU" citycode="02856" name="choose_city_btn" href="javascript:;">安陆</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HLBE">
																			<a realname="呼伦贝尔" cityname="呼伦贝尔" citynameen="HULUNBEIER" citycode="02880" name="choose_city_btn" href="javascript:;">呼伦贝尔</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FCG">
																			<a realname="防城港" cityname="防城港" citynameen="FANGCHENGGANG" citycode="02904" name="choose_city_btn" href="javascript:;">防城港</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HC">
																			<a realname="河池" cityname="河池" citynameen="HECHI" citycode="02928" name="choose_city_btn" href="javascript:;">河池</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GH">
																			<a realname="广汉" cityname="广汉" citynameen="GUANGHAN" citycode="02952" name="choose_city_btn" href="javascript:;">广汉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="伊春" cityname="伊春" citynameen="YICHUN" citycode="02976" name="choose_city_btn" href="javascript:;">伊春</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JS">
																			<a realname="江山" cityname="江山" citynameen="JIANGSHAN" citycode="03000" name="choose_city_btn" href="javascript:;">江山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DZ">
																			<a realname="德州" cityname="德州" citynameen="DEZHOU" citycode="03024" name="choose_city_btn" href="javascript:;">德州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HH">
																			<a realname="黑河" cityname="黑河" citynameen="HEIHE" citycode="03048" name="choose_city_btn" href="javascript:;">黑河</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DSQ">
																			<a realname="大石桥" cityname="大石桥" citynameen="DASHIQIAO" citycode="03072" name="choose_city_btn" href="javascript:;">大石桥</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QTH">
																			<a realname="七台河" cityname="七台河" citynameen="QITAIHE" citycode="03096" name="choose_city_btn" href="javascript:;">七台河</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CJ">
																			<a realname="昌吉" cityname="昌吉" citynameen="CHANGJI" citycode="03120" name="choose_city_btn" href="javascript:;">昌吉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HG">
																			<a realname="鹤岗" cityname="鹤岗" citynameen="HEGANG" citycode="03144" name="choose_city_btn" href="javascript:;">鹤岗</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SM">
																			<a realname="三明" cityname="三明" citynameen="SANMING" citycode="03168" name="choose_city_btn" href="javascript:;">三明</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JM">
																			<a realname="荆门" cityname="荆门" citynameen="JINGMEN" citycode="03192" name="choose_city_btn" href="javascript:;">荆门</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XS">
																			<a realname="萧山" cityname="萧山" citynameen="XIAOSHAN" citycode="03216" name="choose_city_btn" href="javascript:;">萧山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MHK">
																			<a realname="梅河口" cityname="梅河口" citynameen="MEIHEKOU" citycode="03264" name="choose_city_btn" href="javascript:;">梅河口</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XN">
																			<a realname="咸宁" cityname="咸宁" citynameen="XIANNING" citycode="03288" name="choose_city_btn" href="javascript:;">咸宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZY">
																			<a realname="枣阳" cityname="枣阳" citynameen="ZAOYANG" citycode="03312" name="choose_city_btn" href="javascript:;">枣阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZS">
																			<a realname="樟树" cityname="樟树" citynameen="ZHANGSHU" citycode="03336" name="choose_city_btn" href="javascript:;">樟树</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TC">
																			<a realname="铜川" cityname="铜川" citynameen="TONGCHUAN" citycode="03360" name="choose_city_btn" href="javascript:;">铜川</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SZ">
																			<a realname="朔州" cityname="朔州" citynameen="SHUOZHOU" citycode="03384" name="choose_city_btn" href="javascript:;">朔州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HZ">
																			<a realname="汉中" cityname="汉中" citynameen="HANZHONG" citycode="03408" name="choose_city_btn" href="javascript:;">汉中</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AK">
																			<a realname="安康" cityname="安康" citynameen="ANKANG" citycode="03432" name="choose_city_btn" href="javascript:;">安康</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WW">
																			<a realname="武威" cityname="武威" citynameen="WUWEI" citycode="03456" name="choose_city_btn" href="javascript:;">武威</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JQ">
																			<a realname="酒泉" cityname="酒泉" citynameen="JIUQUAN" citycode="03480" name="choose_city_btn" href="javascript:;">酒泉</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BY">
																			<a realname="白银" cityname="白银" citynameen="BAIYIN" citycode="03504" name="choose_city_btn" href="javascript:;">白银</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QY">
																			<a realname="庆阳" cityname="庆阳" citynameen="QINGYANG" citycode="03528" name="choose_city_btn" href="javascript:;">庆阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XY">
																			<a realname="孝义" cityname="孝义" citynameen="XIAOYI" citycode="03552" name="choose_city_btn" href="javascript:;">孝义</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FC">
																			<a realname="丰城" cityname="丰城" citynameen="FENGCHENG" citycode="03576" name="choose_city_btn" href="javascript:;">丰城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WS">
																			<a realname="文山" cityname="文山" citynameen="WENSHAN" citycode="03600" name="choose_city_btn" href="javascript:;">文山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GQC">
																			<a realname="共青城" cityname="共青城" citynameen="GONGQINGCHENG" citycode="03624" name="choose_city_btn" href="javascript:;">共青城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LC">
																			<a realname="利川" cityname="利川" citynameen="LICHUAN" citycode="03648" name="choose_city_btn" href="javascript:;">利川</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ELHT">
																			<a realname="二连浩特" cityname="二连浩特" citynameen="ERLIANHAOTE" citycode="03672" name="choose_city_btn" href="javascript:;">二连浩特</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HH">
																			<a realname="洪湖" cityname="洪湖" citynameen="HONGHU" citycode="03720" name="choose_city_btn" href="javascript:;">洪湖</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YD">
																			<a realname="宜都" cityname="宜都" citynameen="YIDU" citycode="03744" name="choose_city_btn" href="javascript:;">宜都</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GS">
																			<a realname="广水" cityname="广水" citynameen="GUANGSHUI" citycode="03768" name="choose_city_btn" href="javascript:;">广水</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZK">
																			<a realname="周口" cityname="周口" citynameen="ZHOUKOU" citycode="03792" name="choose_city_btn" href="javascript:;">周口</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RC">
																			<a realname="荣成" cityname="荣成" citynameen="RONGCHENG" citycode="03816" name="choose_city_btn" href="javascript:;">荣成</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YC">
																			<a realname="应城" cityname="应城" citynameen="YINGCHENG" citycode="03864" name="choose_city_btn" href="javascript:;">应城</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YF">
																			<a realname="云浮" cityname="云浮" citynameen="YUNFU" citycode="03888" name="choose_city_btn" href="javascript:;">云浮</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZT">
																			<a realname="昭通" cityname="昭通" citynameen="ZHAOTONG" citycode="03912" name="choose_city_btn" href="javascript:;">昭通</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NJ">
																			<a realname="内江" cityname="内江" citynameen="NEIJIANG" citycode="03936" name="choose_city_btn" href="javascript:;">内江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KL">
																			<a realname="凯里" cityname="凯里" citynameen="KAILI" citycode="03960" name="choose_city_btn" href="javascript:;">凯里</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LS">
																			<a realname="陵水" cityname="陵水" citynameen="LINGSHUI" citycode="03984" name="choose_city_btn" href="javascript:;">陵水</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZZ">
																			<a realname="枣庄" cityname="枣庄" citynameen="ZAOZHUANG" citycode="04008" name="choose_city_btn" href="javascript:;">枣庄</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GA">
																			<a realname="广安" cityname="广安" citynameen="GUANGAN" citycode="04032" name="choose_city_btn" href="javascript:;">广安</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HB">
																			<a realname="鹤壁" cityname="鹤壁" citynameen="HEBI" citycode="04056" name="choose_city_btn" href="javascript:;">鹤壁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PE">
																			<a realname="普洱" cityname="普洱" citynameen="PUER" citycode="04080" name="choose_city_btn" href="javascript:;">普洱</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JY">
																			<a realname="济源" cityname="济源" citynameen="JIYUAN" citycode="04104" name="choose_city_btn" href="javascript:;">济源</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HHZ">
																			<a realname="红河州" cityname="红河州" citynameen="HONGHEZHOU" citycode="04128" name="choose_city_btn" href="javascript:;">红河州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GY">
																			<a realname="广元" cityname="广元" citynameen="GUANGYUAN" citycode="04152" name="choose_city_btn" href="javascript:;">广元</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LC">
																			<a realname="临沧" cityname="临沧" citynameen="LINCANG" citycode="04176" name="choose_city_btn" href="javascript:;">临沧</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LS">
																			<a realname="乐山" cityname="乐山" citynameen="LESHAN" citycode="04200" name="choose_city_btn" href="javascript:;">乐山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XP">
																			<a realname="兴平" cityname="兴平" citynameen="XINGPING" citycode="04344" name="choose_city_btn" href="javascript:;">兴平</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SYS">
																			<a realname="双鸭山" cityname="双鸭山" citynameen="SHUANGYASHAN" citycode="04392" name="choose_city_btn" href="javascript:;">双鸭山</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KEL">
																			<a realname="库尔勒" cityname="库尔勒" citynameen="KUERLE" citycode="04416" name="choose_city_btn" href="javascript:;">库尔勒</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LW">
																			<a realname="莱芜" cityname="莱芜" citynameen="LAIWU" citycode="04464" name="choose_city_btn" href="javascript:;">莱芜</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SL">
																			<a realname="商洛" cityname="商洛" citynameen="SHANGLUO" citycode="04488" name="choose_city_btn" href="javascript:;">商洛</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DXAL">
																			<a realname="大兴安岭" cityname="大兴安岭" citynameen="DAXINGANLING" citycode="04512" name="choose_city_btn" href="javascript:;">大兴安岭</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YY">
																			<a realname="益阳" cityname="益阳" citynameen="YIYANG" citycode="04536" name="choose_city_btn" href="javascript:;">益阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XLGL">
																			<a realname="锡林郭勒" cityname="锡林郭勒" citynameen="XILINGUOLE" citycode="04584" name="choose_city_btn" href="javascript:;">锡林郭勒</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YL">
																			<a realname="伊犁" cityname="伊犁" citynameen="YILI" citycode="04608" name="choose_city_btn" href="javascript:;">伊犁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CJ">
																			<a realname="昌江黎族自治县" cityname="昌江黎族自治县" citynameen="CHANGJIANGLIZUZIZHIXIAN" citycode="04632" name="choose_city_btn" href="javascript:;">昌江黎族自治县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGDINGQU">
																			<a realname="张家界" cityname="永定区(张家界)" citynameen="YONGDINGQU" citycode="00051" name="choose_city_btn" href="javascript:;" id="districtName">永定区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SANHEYANJIAO">
																			<a realname="廊坊" cityname="三河燕郊(廊坊)" citynameen="SANHEYANJIAO" citycode="00859" name="choose_city_btn" href="javascript:;" id="districtName">三河燕郊</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BHXQ">
																			<a realname="天津" cityname="滨海新区(天津)" citynameen="BHXQ" citycode="00018" name="choose_city_btn" href="javascript:;" id="districtName">滨海新区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGQIAOQU">
																			<a realname="宿州" cityname="埇桥区(宿州)" citynameen="YONGQIAOQU" citycode="00099" name="choose_city_btn" href="javascript:;" id="districtName">埇桥区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIANGYIQU">
																			<a realname="六安" cityname="姜漪区(六安)" citynameen="JIANGYIQU" citycode="00171" name="choose_city_btn" href="javascript:;" id="districtName">姜漪区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QINBEIQU">
																			<a realname="钦州" cityname="钦北区(钦州)" citynameen="QINBEIQU" citycode="00195" name="choose_city_btn" href="javascript:;" id="districtName">钦北区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIUYANG">
																			<a realname="浏阳" cityname="浏阳(浏阳)" citynameen="LIUYANG" citycode="00219" name="choose_city_btn" href="javascript:;" id="districtName">浏阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HONGGUTAN">
																			<a realname="南昌" cityname="红谷滩(南昌)" citynameen="HONGGUTAN" citycode="00187" name="choose_city_btn" href="javascript:;" id="districtName">红谷滩</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RUICHANG">
																			<a realname="九江" cityname="瑞昌(九江)" citynameen="RUICHANG" citycode="00433" name="choose_city_btn" href="javascript:;" id="districtName">瑞昌</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QIANAN">
																			<a realname="唐山" cityname="迁安市(唐山)" citynameen="QIANAN" citycode="00079" name="choose_city_btn" href="javascript:;" id="districtName">迁安市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XIANGFAN">
																			<a realname="襄阳" cityname="襄樊(襄阳)" citynameen="XIANGFAN" citycode="00373" name="choose_city_btn" href="javascript:;" id="districtName">襄樊</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUSHUIQU">
																			<a realname="新余" cityname="渝水区(新余)" citynameen="YUSHUIQU" citycode="00504" name="choose_city_btn" href="javascript:;" id="districtName">渝水区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIZHOUQU">
																			<a realname="吉安" cityname="吉州区(吉安)" citynameen="JIZHOUQU" citycode="00528" name="choose_city_btn" href="javascript:;" id="districtName">吉州区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANYUANQU">
																			<a realname="萍乡" cityname="安源区(萍乡)" citynameen="ANYUANQU" citycode="00480" name="choose_city_btn" href="javascript:;" id="districtName">安源区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHANHAIGUANQU">
																			<a realname="秦皇岛" cityname="山海关区(秦皇岛)" citynameen="SHANHAIGUANQU" citycode="00625" name="choose_city_btn" href="javascript:;" id="districtName">山海关区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGYANGQU">
																			<a realname="保山" cityname="隆阳区(保山)" citynameen="LONGYANGQU" citycode="00552" name="choose_city_btn" href="javascript:;" id="districtName">隆阳区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LUOZHUANGQU">
																			<a realname="临沂" cityname="罗庄区(临沂)" citynameen="LUOZHUANGQU" citycode="00775" name="choose_city_btn" href="javascript:;" id="districtName">罗庄区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGHUAXINQU">
																			<a realname="深圳" cityname="龙华新区(深圳)" citynameen="LONGHUAXINQU" citycode="00011" name="choose_city_btn" href="javascript:;" id="districtName">龙华新区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NANMINGQU">
																			<a realname="贵阳" cityname="南明区(贵阳)" citynameen="NANMINGQU" citycode="00541" name="choose_city_btn" href="javascript:;" id="districtName">南明区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAICHENGQU">
																			<a realname="北海" cityname="海城区(北海)" citynameen="HAICHENGQU" citycode="00744" name="choose_city_btn" href="javascript:;" id="districtName">海城区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGJIA">
																			<a realname="温州" cityname="永嘉县(温州)" citynameen="YONGJIA" citycode="00043" name="choose_city_btn" href="javascript:;" id="districtName">永嘉县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUNMENGXIAN">
																			<a realname="孝感" cityname="云梦县(孝感)" citynameen="YUNMENGXIAN" citycode="00576" name="choose_city_btn" href="javascript:;" id="districtName">云梦县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HANCHUAN">
																			<a realname="孝感" cityname="汉川(孝感)" citynameen="HANCHUAN" citycode="00576" name="choose_city_btn" href="javascript:;" id="districtName">汉川</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIAOBUZHENG">
																			<a realname="东莞" cityname="寮步镇(东莞)" citynameen="LIAOBUZHENG" citycode="00451" name="choose_city_btn" href="javascript:;" id="districtName">寮步镇</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TAIXINGQU">
																			<a realname="泰州" cityname="泰兴(泰州)" citynameen="TAIXINGQU" citycode="00763" name="choose_city_btn" href="javascript:;" id="districtName">泰兴</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGQUAN">
																			<a realname="丽水" cityname="龙泉市(丽水)" citynameen="LONGQUAN" citycode="00547" name="choose_city_btn" href="javascript:;" id="districtName">龙泉市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DUJIANGYAN">
																			<a realname="成都" cityname="都江堰(成都)" citynameen="DUJIANGYAN" citycode="00054" name="choose_city_btn" href="javascript:;" id="districtName">都江堰</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGGUANG">
																			<a realname="沧州" cityname="东光县(沧州)" citynameen="DONGGUANG" citycode="00877" name="choose_city_btn" href="javascript:;" id="districtName">东光县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUARONG">
																			<a realname="岳阳" cityname="华容县(岳阳)" citynameen="HUARONG" citycode="01357" name="choose_city_btn" href="javascript:;" id="districtName">华容县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUIYANGXIAN">
																			<a realname="郴州" cityname="桂阳县(郴州)" citynameen="GUIYANGXIAN" citycode="01309" name="choose_city_btn" href="javascript:;" id="districtName">桂阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WENFENGQU">
																			<a realname="安阳" cityname="文峰区(安阳)" citynameen="WENFENGQU" citycode="01608" name="choose_city_btn" href="javascript:;" id="districtName">文峰区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINYI">
																			<a realname="徐州" cityname="新沂市(徐州)" citynameen="XINYI" citycode="00169" name="choose_city_btn" href="javascript:;" id="districtName">新沂市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAOYUHANG">
																			<a realname="杭州" cityname="老余杭区(杭州)" citynameen="LAOYUHANG" citycode="00024" name="choose_city_btn" href="javascript:;" id="districtName">老余杭区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NINGGUO">
																			<a realname="宣城" cityname="宁国市(宣城)" citynameen="NINGGUO" citycode="01056" name="choose_city_btn" href="javascript:;" id="districtName">宁国市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QIHE">
																			<a realname="德州" cityname="齐河县(德州)" citynameen="QIHE" citycode="03024" name="choose_city_btn" href="javascript:;" id="districtName">齐河县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PENGLAISHI">
																			<a realname="烟台" cityname="蓬莱市(烟台)" citynameen="PENGLAISHI" citycode="00337" name="choose_city_btn" href="javascript:;" id="districtName">蓬莱市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINGCHENG">
																			<a realname="葫芦岛" cityname="兴城市(葫芦岛)" citynameen="XINGCHENG" citycode="00559" name="choose_city_btn" href="javascript:;" id="districtName">兴城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MENGCHENG">
																			<a realname="亳州" cityname="蒙城县(亳州)" citynameen="MENGCHENG" citycode="01080" name="choose_city_btn" href="javascript:;" id="districtName">蒙城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINQUAN">
																			<a realname="阜阳" cityname="临泉县(阜阳)" citynameen="LINQUAN" citycode="00733" name="choose_city_btn" href="javascript:;" id="districtName">临泉县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TAIHE">
																			<a realname="阜阳" cityname="太和县(阜阳)" citynameen="TAIHE" citycode="00733" name="choose_city_btn" href="javascript:;" id="districtName">太和县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TONGCHENG">
																			<a realname="安庆" cityname="桐城市(安庆)" citynameen="TONGCHENG" citycode="00727" name="choose_city_btn" href="javascript:;" id="districtName">桐城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SUSONG">
																			<a realname="安庆" cityname="宿松县(安庆)" citynameen="SUSONG" citycode="00727" name="choose_city_btn" href="javascript:;" id="districtName">宿松县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHUCHENG">
																			<a realname="六安" cityname="舒城县(六安)" citynameen="SHUCHENG" citycode="00171" name="choose_city_btn" href="javascript:;" id="districtName">舒城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DINGYUAN">
																			<a realname="滁州" cityname="定远县(滁州)" citynameen="DINGYUAN" citycode="00984" name="choose_city_btn" href="javascript:;" id="districtName">定远县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGKOUSHI">
																			<a realname="烟台" cityname="龙口市(烟台)" citynameen="LONGKOUSHI" citycode="00337" name="choose_city_btn" href="javascript:;" id="districtName">龙口市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FUNAN">
																			<a realname="阜阳" cityname="阜南县(阜阳)" citynameen="FUNAN" citycode="00733" name="choose_city_btn" href="javascript:;" id="districtName">阜南县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGTU">
																			<a realname="铁岭" cityname="昌图县(铁岭)" citynameen="CHANGTU" citycode="01237" name="choose_city_btn" href="javascript:;" id="districtName">昌图县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NANLING">
																			<a realname="芜湖" cityname="南陵县(芜湖)" citynameen="NANLING" citycode="00253" name="choose_city_btn" href="javascript:;" id="districtName">南陵县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DANGTU">
																			<a realname="马鞍山" cityname="当涂县(马鞍山)" citynameen="DANGTU" citycode="00157" name="choose_city_btn" href="javascript:;" id="districtName">当涂县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAINING">
																			<a realname="嘉兴" cityname="海宁市(嘉兴)" citynameen="HAINING" citycode="00037" name="choose_city_btn" href="javascript:;" id="districtName">海宁市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGLE">
																			<a realname="潍坊" cityname="昌乐县(潍坊)" citynameen="CHANGLE" citycode="00505" name="choose_city_btn" href="javascript:;" id="districtName">昌乐县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KAIYUAN">
																			<a realname="铁岭" cityname="开原市(铁岭)" citynameen="KAIYUAN" citycode="01237" name="choose_city_btn" href="javascript:;" id="districtName">开原市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HONGZE">
																			<a realname="淮安" cityname="洪泽县(淮安)" citynameen="HONGZE" citycode="00336" name="choose_city_btn" href="javascript:;" id="districtName">洪泽县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGYANG">
																			<a realname="宜昌" cityname="长阳县(宜昌)" citynameen="CHANGYANG" citycode="00409" name="choose_city_btn" href="javascript:;" id="districtName">长阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANTU">
																			<a realname="延边" cityname="安图县(延边)" citynameen="ANTU" citycode="01465" name="choose_city_btn" href="javascript:;" id="districtName">安图县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGSHAN">
																			<a realname="衢州" cityname="常山县(衢州)" citynameen="CHANGSHAN" citycode="00643" name="choose_city_btn" href="javascript:;" id="districtName">常山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="KAIHUA">
																			<a realname="衢州" cityname="开化县(衢州)" citynameen="KAIHUA" citycode="00643" name="choose_city_btn" href="javascript:;" id="districtName">开化县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIZHANG">
																			<a realname="郴州" cityname="宜章县(郴州)" citynameen="YIZHANG" citycode="01309" name="choose_city_btn" href="javascript:;" id="districtName">宜章县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FENYI">
																			<a realname="新余" cityname="分宜县(新余)" citynameen="FENYI" citycode="00504" name="choose_city_btn" href="javascript:;" id="districtName">分宜县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUIAN">
																			<a realname="泉州" cityname="惠安县(泉州)" citynameen="HUIAN" citycode="00343" name="choose_city_btn" href="javascript:;" id="districtName">惠安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINGZHOU">
																			<a realname="怀化" cityname="靖州(怀化)" citynameen="JINGZHOU" citycode="00679" name="choose_city_btn" href="javascript:;" id="districtName">靖州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINHUA">
																			<a realname="娄底" cityname="新化县(娄底)" citynameen="XINHUA" citycode="00624" name="choose_city_btn" href="javascript:;" id="districtName">新化县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHAODONG">
																			<a realname="邵阳" cityname="邵东县(邵阳)" citynameen="SHAODONG" citycode="01344" name="choose_city_btn" href="javascript:;" id="districtName">邵东县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGKOU">
																			<a realname="邵阳" cityname="洞口县(邵阳)" citynameen="DONGKOU" citycode="01344" name="choose_city_btn" href="javascript:;" id="districtName">洞口县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGXING">
																			<a realname="郴州" cityname="永兴县(郴州)" citynameen="YONGXING" citycode="01309" name="choose_city_btn" href="javascript:;" id="districtName">永兴县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANPING">
																			<a realname="衡水" cityname="安平县(衡水)" citynameen="ANPING" citycode="01177" name="choose_city_btn" href="javascript:;" id="districtName">安平县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PUNING">
																			<a realname="揭阳" cityname="普宁(揭阳)" citynameen="PUNING" citycode="00087" name="choose_city_btn" href="javascript:;" id="districtName">普宁</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIANSHUI">
																			<a realname="淮安" cityname="涟水县(淮安)" citynameen="LIANSHUI" citycode="00336" name="choose_city_btn" href="javascript:;" id="districtName">涟水县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINXIANGSHI">
																			<a realname="岳阳" cityname="临湘市(岳阳)" citynameen="LINXIANGSHI" citycode="01357" name="choose_city_btn" href="javascript:;" id="districtName">临湘市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PEIXIAN">
																			<a realname="徐州" cityname="沛县(徐州)" citynameen="PEIXIAN" citycode="00169" name="choose_city_btn" href="javascript:;" id="districtName">沛县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SUINING">
																			<a realname="徐州" cityname="睢宁县(徐州)" citynameen="SUINING" citycode="00169" name="choose_city_btn" href="javascript:;" id="districtName">睢宁县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XUYI">
																			<a realname="淮安" cityname="盱眙县(淮安)" citynameen="XUYI" citycode="00336" name="choose_city_btn" href="javascript:;" id="districtName">盱眙县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIANYUAN">
																			<a realname="娄底" cityname="涟源市(娄底)" citynameen="LIANYUAN" citycode="00624" name="choose_city_btn" href="javascript:;" id="districtName">涟源市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TIANCHANG">
																			<a realname="滁州" cityname="天长市(滁州)" citynameen="TIANCHANG" citycode="00984" name="choose_city_btn" href="javascript:;" id="districtName">天长市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUANGSHAN">
																			<a realname="信阳" cityname="光山县(信阳)" citynameen="GUANGSHAN" citycode="01704" name="choose_city_btn" href="javascript:;" id="districtName">光山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUANGCHUAN">
																			<a realname="信阳" cityname="潢川县(信阳)" citynameen="HUANGCHUAN" citycode="01704" name="choose_city_btn" href="javascript:;" id="districtName">潢川县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOYOU">
																			<a realname="扬州" cityname="高邮市(扬州)" citynameen="GAOYOU" citycode="00217" name="choose_city_btn" href="javascript:;" id="districtName">高邮市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUAXIAN">
																			<a realname="安阳" cityname="滑县(安阳)" citynameen="HUAXIAN" citycode="01608" name="choose_city_btn" href="javascript:;" id="districtName">滑县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MILE">
																			<a realname="红河州" cityname="弥勒市(红河州)" citynameen="MILE" citycode="04128" name="choose_city_btn" href="javascript:;" id="districtName">弥勒市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WULIAN">
																			<a realname="日照" cityname="五莲县(日照)" citynameen="WULIAN" citycode="01345" name="choose_city_btn" href="javascript:;" id="districtName">五莲县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGCHUN">
																			<a realname="泉州" cityname="永春县(泉州)" citynameen="YONGCHUN" citycode="00343" name="choose_city_btn" href="javascript:;" id="districtName">永春县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUNCHENG">
																			<a realname="菏泽" cityname="郓城县(菏泽)" citynameen="YUNCHENG" citycode="02448" name="choose_city_btn" href="javascript:;" id="districtName">郓城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YINGSHANG">
																			<a realname="阜阳" cityname="颍上县(阜阳)" citynameen="YINGSHANG" citycode="00733" name="choose_city_btn" href="javascript:;" id="districtName">颍上县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUAIYUAN">
																			<a realname="蚌埠" cityname="怀远县(蚌埠)" citynameen="HUAIYUAN" citycode="00751" name="choose_city_btn" href="javascript:;" id="districtName">怀远县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MINGGUANG">
																			<a realname="滁州" cityname="明光市(滁州)" citynameen="MINGGUANG" citycode="00984" name="choose_city_btn" href="javascript:;" id="districtName">明光市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUSHAN">
																			<a realname="上饶" cityname="玉山县(上饶)" citynameen="YUSHAN" citycode="00408" name="choose_city_btn" href="javascript:;" id="districtName">玉山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANFU">
																			<a realname="吉安" cityname="安福县(吉安)" citynameen="ANFU" citycode="00528" name="choose_city_btn" href="javascript:;" id="districtName">安福县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DANGYANG">
																			<a realname="宜昌" cityname="当阳市(宜昌)" citynameen="DANGYANG" citycode="00409" name="choose_city_btn" href="javascript:;" id="districtName">当阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHONGYANG">
																			<a realname="咸宁" cityname="崇阳县(咸宁)" citynameen="CHONGYANG" citycode="03288" name="choose_city_btn" href="javascript:;" id="districtName">崇阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GEYANG">
																			<a realname="上饶" cityname="弋阳县(上饶)" citynameen="GEYANG" citycode="00408" name="choose_city_btn" href="javascript:;" id="districtName">弋阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PINGDU">
																			<a realname="青岛" cityname="平度市(青岛)" citynameen="PINGDU" citycode="00289" name="choose_city_btn" href="javascript:;" id="districtName">平度市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DUNHUA">
																			<a realname="延边" cityname="敦化市(延边)" citynameen="DUNHUA" citycode="01465" name="choose_city_btn" href="javascript:;" id="districtName">敦化市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TONGXIANG">
																			<a realname="嘉兴" cityname="桐乡市(嘉兴)" citynameen="TONGXIANG" citycode="00037" name="choose_city_btn" href="javascript:;" id="districtName">桐乡市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MANZHOULI">
																			<a realname="呼伦贝尔" cityname="满洲里(呼伦贝尔)" citynameen="MANZHOULI" citycode="02880" name="choose_city_btn" href="javascript:;" id="districtName">满洲里</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TONGCHENG">
																			<a realname="咸宁" cityname="通城县(咸宁)" citynameen="TONGCHENG" citycode="03288" name="choose_city_btn" href="javascript:;" id="districtName">通城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PIZHOU">
																			<a realname="徐州" cityname="邳州市(徐州)" citynameen="PIZHOU" citycode="00169" name="choose_city_btn" href="javascript:;" id="districtName">邳州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WENDENGSHI">
																			<a realname="威海" cityname="文登(威海)" citynameen="WENDENGSHI" citycode="00325" name="choose_city_btn" href="javascript:;" id="districtName">文登</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUADIAN">
																			<a realname="吉林" cityname="桦甸市(吉林)" citynameen="HUADIAN" citycode="00361" name="choose_city_btn" href="javascript:;" id="districtName">桦甸市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GONGANXIAN">
																			<a realname="荆州" cityname="公安县(荆州)" citynameen="GONGANXIAN" citycode="00403" name="choose_city_btn" href="javascript:;" id="districtName">公安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DINGAN">
																			<a realname="海口" cityname="定安县(海口)" citynameen="DINGAN" citycode="00319" name="choose_city_btn" href="javascript:;" id="districtName">定安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WUYIXIAN">
																			<a realname="金华" cityname="武义县(金华)" citynameen="WUYIXIAN" citycode="00127" name="choose_city_btn" href="javascript:;" id="districtName">武义县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QICHUN">
																			<a realname="黄冈" cityname="蕲春(黄冈)" citynameen="QICHUN" citycode="00672" name="choose_city_btn" href="javascript:;" id="districtName">蕲春</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DACHENG">
																			<a realname="廊坊" cityname="大城县(廊坊)" citynameen="DACHENG" citycode="00859" name="choose_city_btn" href="javascript:;" id="districtName">大城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIXIAN">
																			<a realname="保定" cityname="易县(保定)" citynameen="YIXIAN" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">易县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WANGCHENGQU">
																			<a realname="长沙" cityname="望城区(长沙)" citynameen="WANGCHENGQU" citycode="00139" name="choose_city_btn" href="javascript:;" id="districtName">望城区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAILAER">
																			<a realname="呼伦贝尔" cityname="海拉尔(呼伦贝尔)" citynameen="HAILAER" citycode="02880" name="choose_city_btn" href="javascript:;" id="districtName">海拉尔</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DAOXIAN">
																			<a realname="永州" cityname="道县(永州)" citynameen="DAOXIAN" citycode="01513" name="choose_city_btn" href="javascript:;" id="districtName">道县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHONGXIANG">
																			<a realname="荆门" cityname="钟祥市(荆门)" citynameen="ZHONGXIANG" citycode="03192" name="choose_city_btn" href="javascript:;" id="districtName">钟祥市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANHUA">
																			<a realname="益阳" cityname="安化县(益阳)" citynameen="ANHUA" citycode="04536" name="choose_city_btn" href="javascript:;" id="districtName">安化县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHOUGUANG">
																			<a realname="潍坊" cityname="寿光市(潍坊)" citynameen="SHOUGUANG" citycode="00505" name="choose_city_btn" href="javascript:;" id="districtName">寿光市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WUXUESHI">
																			<a realname="黄冈" cityname="武穴市(黄冈)" citynameen="WUXUESHI" citycode="00672" name="choose_city_btn" href="javascript:;" id="districtName">武穴市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIFENG">
																			<a realname="宜春" cityname="宜丰县(宜春)" citynameen="YIFENG" citycode="00960" name="choose_city_btn" href="javascript:;" id="districtName">宜丰县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DAYE">
																			<a realname="黄石" cityname="大冶市(黄石)" citynameen="DAYE" citycode="00439" name="choose_city_btn" href="javascript:;" id="districtName">大冶市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TONGSHAN">
																			<a realname="咸宁" cityname="通山县(咸宁)" citynameen="TONGSHAN" citycode="03288" name="choose_city_btn" href="javascript:;" id="districtName">通山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANLU">
																			<a realname="孝感" cityname="安陆市(孝感)" citynameen="ANLU" citycode="00576" name="choose_city_btn" href="javascript:;" id="districtName">安陆市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XUANWEI">
																			<a realname="曲靖" cityname="宣威市(曲靖)" citynameen="XUANWEI" citycode="00115" name="choose_city_btn" href="javascript:;" id="districtName">宣威市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGAN">
																			<a realname="永州" cityname="东安县(永州)" citynameen="DONGAN" citycode="01513" name="choose_city_btn" href="javascript:;" id="districtName">东安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHAYANG">
																			<a realname="荆门" cityname="沙洋县(荆门)" citynameen="SHAYANG" citycode="03192" name="choose_city_btn" href="javascript:;" id="districtName">沙洋县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DUCHANG">
																			<a realname="九江" cityname="都昌县(九江)" citynameen="DUCHANG" citycode="00433" name="choose_city_btn" href="javascript:;" id="districtName">都昌县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NANANSHI">
																			<a realname="泉州" cityname="南安市(泉州)" citynameen="NANANSHI" citycode="00343" name="choose_city_btn" href="javascript:;" id="districtName">南安市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DEHUAXIAN">
																			<a realname="泉州" cityname="德化县(泉州)" citynameen="DEHUAXIAN" citycode="00343" name="choose_city_btn" href="javascript:;" id="districtName">德化县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGPING">
																			<a realname="泰安" cityname="东平县(泰安)" citynameen="DONGPING" citycode="01321" name="choose_city_btn" href="javascript:;" id="districtName">东平县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YICHUAN">
																			<a realname="洛阳" cityname="伊川县(洛阳)" citynameen="YICHUAN" citycode="00661" name="choose_city_btn" href="javascript:;" id="districtName">伊川县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAIZHOU">
																			<a realname="营口" cityname="盖州市(营口)" citynameen="GAIZHOU" citycode="00589" name="choose_city_btn" href="javascript:;" id="districtName">盖州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAIFENG">
																			<a realname="恩施" cityname="来凤县(恩施)" citynameen="LAIFENG" citycode="02352" name="choose_city_btn" href="javascript:;" id="districtName">来凤县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FENGJIE">
																			<a realname="重庆" cityname="奉节县(重庆)" citynameen="FENGJIE" citycode="00535" name="choose_city_btn" href="javascript:;" id="districtName">奉节县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINGGANGZHEN">
																			<a realname="张家港" cityname="金港镇(张家港)" citynameen="JINGGANGZHEN" citycode="00159" name="choose_city_btn" href="javascript:;" id="districtName">金港镇</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MINQING">
																			<a realname="福州" cityname="闽清县(福州)" citynameen="MINQING" citycode="00090" name="choose_city_btn" href="javascript:;" id="districtName">闽清县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHIJIANG">
																			<a realname="宜昌" cityname="枝江(宜昌)" citynameen="ZHIJIANG" citycode="00409" name="choose_city_btn" href="javascript:;" id="districtName">枝江</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUGAN">
																			<a realname="上饶" cityname="余干县(上饶)" citynameen="YUGAN" citycode="00408" name="choose_city_btn" href="javascript:;" id="districtName">余干县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NINGYANG">
																			<a realname="泰安" cityname="宁阳县(泰安)" citynameen="NINGYANG" citycode="01321" name="choose_city_btn" href="javascript:;" id="districtName">宁阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINYI">
																			<a realname="德州" cityname="临邑县(德州)" citynameen="LINYI" citycode="03024" name="choose_city_btn" href="javascript:;" id="districtName">临邑县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LUANNAN">
																			<a realname="唐山" cityname="滦南县(唐山)" citynameen="LUANNAN" citycode="00079" name="choose_city_btn" href="javascript:;" id="districtName">滦南县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINXIAN">
																			<a realname="南昌" cityname="进贤县(南昌)" citynameen="JINXIAN" citycode="00187" name="choose_city_btn" href="javascript:;" id="districtName">进贤县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BOXING">
																			<a realname="滨州" cityname="博兴县(滨州)" citynameen="BOXING" citycode="02640" name="choose_city_btn" href="javascript:;" id="districtName">博兴县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TANCHENG">
																			<a realname="临沂" cityname="郯城县(临沂)" citynameen="TANCHENG" citycode="00775" name="choose_city_btn" href="javascript:;" id="districtName">郯城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HEISHAN">
																			<a realname="锦州" cityname="黑山县(锦州)" citynameen="HEISHAN" citycode="00571" name="choose_city_btn" href="javascript:;" id="districtName">黑山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BOLUO">
																			<a realname="惠州" cityname="博罗县(惠州)" citynameen="BOLUO" citycode="00193" name="choose_city_btn" href="javascript:;" id="districtName">博罗县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAOHEKOU">
																			<a realname="襄阳" cityname="老河口市(襄阳)" citynameen="LAOHEKOU" citycode="00373" name="choose_city_btn" href="javascript:;" id="districtName">老河口市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NANFENG">
																			<a realname="抚州" cityname="南丰县(抚州)" citynameen="NANFENG" citycode="00816" name="choose_city_btn" href="javascript:;" id="districtName">南丰县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAIXI">
																			<a realname="青岛" cityname="莱西市(青岛)" citynameen="LAIXI" citycode="00289" name="choose_city_btn" href="javascript:;" id="districtName">莱西市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QINYANG">
																			<a realname="焦作" cityname="沁阳市(焦作)" citynameen="QINYANG" citycode="01584" name="choose_city_btn" href="javascript:;" id="districtName">沁阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHUANGHE">
																			<a realname="大连" cityname="庄河市(大连)" citynameen="ZHUANGHE" citycode="00313" name="choose_city_btn" href="javascript:;" id="districtName">庄河市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FUQING">
																			<a realname="福州" cityname="福清市(福州)" citynameen="FUQING" citycode="00090" name="choose_city_btn" href="javascript:;" id="districtName">福清市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHAHE">
																			<a realname="邢台" cityname="沙河市(邢台)" citynameen="SHAHE" citycode="00216" name="choose_city_btn" href="javascript:;" id="districtName">沙河市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YINGSHAN">
																			<a realname="黄冈" cityname="英山县(黄冈)" citynameen="YINGSHAN" citycode="00672" name="choose_city_btn" href="javascript:;" id="districtName">英山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGLI">
																			<a realname="秦皇岛" cityname="昌黎县(秦皇岛)" citynameen="CHANGLI" citycode="00625" name="choose_city_btn" href="javascript:;" id="districtName">昌黎县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YINGDE">
																			<a realname="清远" cityname="英德市(清远)" citynameen="YINGDE" citycode="00673" name="choose_city_btn" href="javascript:;" id="districtName">英德市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BEIDAIHE">
																			<a realname="秦皇岛" cityname="北戴河(秦皇岛)" citynameen="BEIDAIHE" citycode="00625" name="choose_city_btn" href="javascript:;" id="districtName">北戴河</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHUYANG">
																			<a realname="宿迁" cityname="沭阳县(宿迁)" citynameen="SHUYANG" citycode="00757" name="choose_city_btn" href="javascript:;" id="districtName">沭阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FUDING">
																			<a realname="宁德" cityname="福鼎市(宁德)" citynameen="FUDING" citycode="00027" name="choose_city_btn" href="javascript:;" id="districtName">福鼎市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BAOYING">
																			<a realname="扬州" cityname="宝应县(扬州)" citynameen="BAOYING" citycode="00217" name="choose_city_btn" href="javascript:;" id="districtName">宝应县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FUAN">
																			<a realname="宁德" cityname="福安市(宁德)" citynameen="FUAN" citycode="00027" name="choose_city_btn" href="javascript:;" id="districtName">福安市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FENGSHUN">
																			<a realname="梅州" cityname="丰顺县(梅州)" citynameen="FENGSHUN" citycode="01440" name="choose_city_btn" href="javascript:;" id="districtName">丰顺县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGJI">
																			<a realname="运城" cityname="永济市(运城)" citynameen="YONGJI" citycode="00925" name="choose_city_btn" href="javascript:;" id="districtName">永济市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HOUMA">
																			<a realname="临汾" cityname="侯马市(临汾)" citynameen="HOUMA" citycode="00745" name="choose_city_btn" href="javascript:;" id="districtName">侯马市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINGBAO">
																			<a realname="三门峡" cityname="灵宝市(三门峡)" citynameen="LINGBAO" citycode="02784" name="choose_city_btn" href="javascript:;" id="districtName">灵宝市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAIMEN">
																			<a realname="南通" cityname="海门市(南通)" citynameen="HAIMEN" citycode="00199" name="choose_city_btn" href="javascript:;" id="districtName">海门市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOPING">
																			<a realname="晋城" cityname="高平市(晋城)" citynameen="GAOPING" citycode="02280" name="choose_city_btn" href="javascript:;" id="districtName">高平市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DINGXING">
																			<a realname="保定" cityname="定兴县(保定)" citynameen="DINGXING" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">定兴县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOBEIDIAN">
																			<a realname="保定" cityname="高碑店市(保定)" citynameen="GAOBEIDIAN" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">高碑店市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINGXI">
																			<a realname="百色" cityname="靖西市(百色)" citynameen="JINGXI" citycode="01104" name="choose_city_btn" href="javascript:;" id="districtName">靖西市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RUGAO">
																			<a realname="南通" cityname="如皋市(南通)" citynameen="RUGAO" citycode="00199" name="choose_city_btn" href="javascript:;" id="districtName">如皋市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANGUO">
																			<a realname="保定" cityname="安国市(保定)" citynameen="ANGUO" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">安国市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAILUN">
																			<a realname="绥化" cityname="海伦市(绥化)" citynameen="HAILUN" citycode="01201" name="choose_city_btn" href="javascript:;" id="districtName">海伦市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINTAN">
																			<a realname="常州" cityname="金坛市(常州)" citynameen="JINTAN" citycode="00151" name="choose_city_btn" href="javascript:;" id="districtName">金坛市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NINGJIN">
																			<a realname="邢台" cityname="宁晋县(邢台)" citynameen="NINGJIN" citycode="00216" name="choose_city_btn" href="javascript:;" id="districtName">宁晋县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUCHENG">
																			<a realname="德州" cityname="禹城市(德州)" citynameen="YUCHENG" citycode="03024" name="choose_city_btn" href="javascript:;" id="districtName">禹城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHUANGLIAO">
																			<a realname="四平" cityname="双辽市(四平)" citynameen="SHUANGLIAO" citycode="01057" name="choose_city_btn" href="javascript:;" id="districtName">双辽市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIAN">
																			<a realname="通化" cityname="集安市(通化)" citynameen="JIAN" citycode="02400" name="choose_city_btn" href="javascript:;" id="districtName">集安市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIMO">
																			<a realname="青岛" cityname="即墨市(青岛)" citynameen="JIMO" citycode="00289" name="choose_city_btn" href="javascript:;" id="districtName">即墨市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUANGRAO">
																			<a realname="东营" cityname="广饶县(东营)" citynameen="GUANGRAO" citycode="00331" name="choose_city_btn" href="javascript:;" id="districtName">广饶县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PUCHENG">
																			<a realname="渭南" cityname="蒲城县(渭南)" citynameen="PUCHENG" citycode="00919" name="choose_city_btn" href="javascript:;" id="districtName">蒲城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HANCHENG">
																			<a realname="渭南" cityname="韩城市(渭南)" citynameen="HANCHENG" citycode="00919" name="choose_city_btn" href="javascript:;" id="districtName">韩城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHENGCHENG">
																			<a realname="渭南" cityname="澄城县(渭南)" citynameen="CHENGCHENG" citycode="00919" name="choose_city_btn" href="javascript:;" id="districtName">澄城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RUDONG">
																			<a realname="南通" cityname="如东县(南通)" citynameen="RUDONG" citycode="00199" name="choose_city_btn" href="javascript:;" id="districtName">如东县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DENGTA">
																			<a realname="辽阳" cityname="灯塔市(辽阳)" citynameen="DENGTA" citycode="00649" name="choose_city_btn" href="javascript:;" id="districtName">灯塔市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HONGAN">
																			<a realname="黄冈" cityname="红安县(黄冈)" citynameen="HONGAN" citycode="00672" name="choose_city_btn" href="javascript:;" id="districtName">红安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHALANTUN">
																			<a realname="呼伦贝尔" cityname="扎兰屯(呼伦贝尔)" citynameen="ZHALANTUN" citycode="02880" name="choose_city_btn" href="javascript:;" id="districtName">扎兰屯</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUANPING">
																			<a realname="忻州" cityname="原平市(忻州)" citynameen="YUANPING" citycode="02496" name="choose_city_btn" href="javascript:;" id="districtName">原平市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SIHUI">
																			<a realname="肇庆" cityname="四会市(肇庆)" citynameen="SIHUI" citycode="00691" name="choose_city_btn" href="javascript:;" id="districtName">四会市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BAZHOU">
																			<a realname="廊坊" cityname="霸州(廊坊)" citynameen="BAZHOU" citycode="00859" name="choose_city_btn" href="javascript:;" id="districtName">霸州</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BEILIU">
																			<a realname="玉林" cityname="北流市(玉林)" citynameen="BEILIU" citycode="00456" name="choose_city_btn" href="javascript:;" id="districtName">北流市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LEPING">
																			<a realname="景德镇" cityname="乐平区(景德镇)" citynameen="LEPING" citycode="00600" name="choose_city_btn" href="javascript:;" id="districtName">乐平区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHIMEN">
																			<a realname="常德" cityname="石门县(常德)" citynameen="SHIMEN" citycode="00385" name="choose_city_btn" href="javascript:;" id="districtName">石门县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YICHENG">
																			<a realname="襄阳" cityname="宜城市(襄阳)" citynameen="YICHENG" citycode="00373" name="choose_city_btn" href="javascript:;" id="districtName">宜城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINLIXIAN">
																			<a realname="常德" cityname="临澧县(常德)" citynameen="LINLIXIAN" citycode="00385" name="choose_city_btn" href="javascript:;" id="districtName">临澧县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WENAN">
																			<a realname="廊坊" cityname="文安县(廊坊)" citynameen="WENAN" citycode="00859" name="choose_city_btn" href="javascript:;" id="districtName">文安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUYAOSHI">
																			<a realname="宁波" cityname="余姚市(宁波)" citynameen="YUYAOSHI" citycode="00031" name="choose_city_btn" href="javascript:;" id="districtName">余姚市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINZHENG">
																			<a realname="郑州" cityname="新郑市(郑州)" citynameen="XINZHENG" citycode="00084" name="choose_city_btn" href="javascript:;" id="districtName">新郑市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIPENGJIEDAO">
																			<a realname="萧山" cityname="义蓬街道(萧山)" citynameen="YIPENGJIEDAO" citycode="03216" name="choose_city_btn" href="javascript:;" id="districtName">义蓬街道</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XIANXIAN">
																			<a realname="沧州" cityname="献县(沧州)" citynameen="XIANXIAN" citycode="00877" name="choose_city_btn" href="javascript:;" id="districtName">献县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NANLANGZHEN">
																			<a realname="中山" cityname="南朗镇(中山)" citynameen="NANLANGZHEN" citycode="00493" name="choose_city_btn" href="javascript:;" id="districtName">南朗镇</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIANYUNQU">
																			<a realname="连云港" cityname="连云区(连云港)" citynameen="LIANYUNQU" citycode="00432" name="choose_city_btn" href="javascript:;" id="districtName">连云区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QUANJIAOXIAN">
																			<a realname="滁州" cityname="全椒县(滁州)" citynameen="QUANJIAOXIAN" citycode="00984" name="choose_city_btn" href="javascript:;" id="districtName">全椒县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DAWUXIAN">
																			<a realname="孝感" cityname="大悟县(孝感)" citynameen="DAWUXIAN" citycode="00576" name="choose_city_btn" href="javascript:;" id="districtName">大悟县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHOUXIAN">
																			<a realname="淮南" cityname="寿县(淮南)" citynameen="SHOUXIAN" citycode="00709" name="choose_city_btn" href="javascript:;" id="districtName">寿县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XIAOCHANGXIAN">
																			<a realname="孝感" cityname="孝昌县(孝感)" citynameen="XIAOCHANGXIAN" citycode="00576" name="choose_city_btn" href="javascript:;" id="districtName">孝昌县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HEXIAN">
																			<a realname="马鞍山" cityname="和县(马鞍山)" citynameen="HEXIAN" citycode="00157" name="choose_city_btn" href="javascript:;" id="districtName">和县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGJINAGXIAN">
																			<a realname="齐齐哈尔" cityname="龙江县(齐齐哈尔)" citynameen="LONGJINAGXIAN" citycode="00463" name="choose_city_btn" href="javascript:;" id="districtName">龙江县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHISHOU">
																			<a realname="荆州" cityname="石首市(荆州)" citynameen="SHISHOU" citycode="00403" name="choose_city_btn" href="javascript:;" id="districtName">石首市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHENZHOUSHI">
																			<a realname="衡水" cityname="深州市(衡水)" citynameen="SHENZHOUSHI" citycode="01177" name="choose_city_btn" href="javascript:;" id="districtName">深州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIANLI">
																			<a realname="荆州" cityname="监利县(荆州)" citynameen="JIANLI" citycode="00403" name="choose_city_btn" href="javascript:;" id="districtName">监利县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHONGZHOU">
																			<a realname="成都" cityname="崇州市(成都)" citynameen="CHONGZHOU" citycode="00054" name="choose_city_btn" href="javascript:;" id="districtName">崇州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHAOYANG">
																			<a realname="昭通" cityname="昭阳(昭通)" citynameen="ZHAOYANG" citycode="01873" name="choose_city_btn" href="javascript:;" id="districtName">昭阳</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAOCHENGQU">
																			<a realname="都匀" cityname="老城区(都匀)" citynameen="LAOCHENGQU" citycode="01897" name="choose_city_btn" href="javascript:;" id="districtName">老城区</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUCHENG">
																			<a realname="襄阳" cityname="谷城县(襄阳)" citynameen="GUCHENG" citycode="00373" name="choose_city_btn" href="javascript:;" id="districtName">谷城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YANGXIN">
																			<a realname="黄石" cityname="阳新县(黄石)" citynameen="YANGXIN" citycode="00439" name="choose_city_btn" href="javascript:;" id="districtName">阳新县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FUNING">
																			<a realname="盐城" cityname="阜宁县(盐城)" citynameen="FUNING" citycode="00205" name="choose_city_btn" href="javascript:;" id="districtName">阜宁县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BINHAI">
																			<a realname="盐城" cityname="滨海县(盐城)" citynameen="BINHAI" citycode="00205" name="choose_city_btn" href="javascript:;" id="districtName">滨海县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XIANGSHUI">
																			<a realname="盐城" cityname="响水县(盐城)" citynameen="XIANGSHUI" citycode="00205" name="choose_city_btn" href="javascript:;" id="districtName">响水县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHONGMOU">
																			<a realname="郑州" cityname="中牟县(郑州)" citynameen="ZHONGMOU" citycode="00084" name="choose_city_btn" href="javascript:;" id="districtName">中牟县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DAISHAN">
																			<a realname="舟山" cityname="岱山县(舟山)" citynameen="DAISHAN" citycode="00301" name="choose_city_btn" href="javascript:;" id="districtName">岱山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WENSHANG">
																			<a realname="济宁" cityname="汶上县(济宁)" citynameen="WENSHANG" citycode="01333" name="choose_city_btn" href="javascript:;" id="districtName">汶上县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIANZHOU">
																			<a realname="清远" cityname="连州市(清远)" citynameen="LIANZHOU" citycode="00673" name="choose_city_btn" href="javascript:;" id="districtName">连州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUSHI">
																			<a realname="信阳" cityname="固始县(信阳)" citynameen="GUSHI" citycode="01704" name="choose_city_btn" href="javascript:;" id="districtName">固始县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOYANG">
																			<a realname="保定" cityname="高阳县(保定)" citynameen="GAOYANG" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">高阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHIDAO">
																			<a realname="荣成" cityname="石岛(荣成)" citynameen="SHIDAO" citycode="03816" name="choose_city_btn" href="javascript:;" id="districtName">石岛</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RONGCHENG">
																			<a realname="威海" cityname="荣成市(威海)" citynameen="RONGCHENG" citycode="00325" name="choose_city_btn" href="javascript:;" id="districtName">荣成市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANYUE">
																			<a realname="资阳" cityname="安岳县(资阳)" citynameen="ANYUE" citycode="02760" name="choose_city_btn" href="javascript:;" id="districtName">安岳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIANHU">
																			<a realname="盐城" cityname="建湖县(盐城)" citynameen="JIANHU" citycode="00205" name="choose_city_btn" href="javascript:;" id="districtName">建湖县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINZHOU">
																			<a realname="石家庄" cityname="晋州市(石家庄)" citynameen="JINZHOU" citycode="00067" name="choose_city_btn" href="javascript:;" id="districtName">晋州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ALASHANZUOQI">
																			<a realname="阿拉善盟" cityname="阿拉善左旗(阿拉善盟)" citynameen="ALASHANZUOQI" citycode="01993" name="choose_city_btn" href="javascript:;" id="districtName">阿拉善左旗</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGNING">
																			<a realname="衡阳" cityname="常宁市(衡阳)" citynameen="CHANGNING" citycode="00379" name="choose_city_btn" href="javascript:;" id="districtName">常宁市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HENGDONG">
																			<a realname="衡阳" cityname="衡东县(衡阳)" citynameen="HENGDONG" citycode="00379" name="choose_city_btn" href="javascript:;" id="districtName">衡东县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BOLE">
																			<a realname="博尔塔拉" cityname="博乐市(博尔塔拉)" citynameen="BOLE" citycode="02017" name="choose_city_btn" href="javascript:;" id="districtName">博乐市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHANXIAN">
																			<a realname="菏泽" cityname="单县(菏泽)" citynameen="SHANXIAN" citycode="02448" name="choose_city_btn" href="javascript:;" id="districtName">单县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="AKESU">
																			<a realname="阿克苏" cityname="阿克苏市(阿克苏)" citynameen="AKESU" citycode="02065" name="choose_city_btn" href="javascript:;" id="districtName">阿克苏市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIAXIANGXIAN">
																			<a realname="济宁" cityname="嘉祥县(济宁)" citynameen="JIAXIANGXIAN" citycode="01333" name="choose_city_btn" href="javascript:;" id="districtName">嘉祥县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JUXIAN">
																			<a realname="日照" cityname="莒县(日照)" citynameen="JUXIAN" citycode="01345" name="choose_city_btn" href="javascript:;" id="districtName">莒县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOAN">
																			<a realname="宜春" cityname="高安市(宜春)" citynameen="GAOAN" citycode="00960" name="choose_city_btn" href="javascript:;" id="districtName">高安市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUEPING">
																			<a realname="景德镇" cityname="乐平市(景德镇)" citynameen="YUEPING" citycode="00600" name="choose_city_btn" href="javascript:;" id="districtName">乐平市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGXIANG">
																			<a realname="抚州" cityname="东乡县(抚州)" citynameen="DONGXIANG" citycode="00816" name="choose_city_btn" href="javascript:;" id="districtName">东乡县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGYANG">
																			<a realname="金华" cityname="东阳市(金华)" citynameen="DONGYANG" citycode="00127" name="choose_city_btn" href="javascript:;" id="districtName">东阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DUNHUANG">
																			<a realname="酒泉" cityname="敦煌市(酒泉)" citynameen="DUNHUANG" citycode="03480" name="choose_city_btn" href="javascript:;" id="districtName">敦煌市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIWU">
																			<a realname="金华" cityname="义乌市(金华)" citynameen="YIWU" citycode="00127" name="choose_city_btn" href="javascript:;" id="districtName">义乌市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XUPU">
																			<a realname="怀化" cityname="溆浦县(怀化)" citynameen="XUPU" citycode="00679" name="choose_city_btn" href="javascript:;" id="districtName">溆浦县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FEICHENG">
																			<a realname="泰安" cityname="肥城市(泰安)" citynameen="FEICHENG" citycode="01321" name="choose_city_btn" href="javascript:;" id="districtName">肥城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XIANGGELILA">
																			<a realname="迪庆" cityname="香格里拉市(迪庆)" citynameen="XIANGGELILA" citycode="02089" name="choose_city_btn" href="javascript:;" id="districtName">香格里拉市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIANYANG">
																			<a realname="成都" cityname="简阳市(成都)" citynameen="JIANYANG" citycode="00054" name="choose_city_btn" href="javascript:;" id="districtName">简阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QIDONG">
																			<a realname="衡阳" cityname="祁东市(衡阳)" citynameen="QIDONG" citycode="00379" name="choose_city_btn" href="javascript:;" id="districtName">祁东市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LENGSHUIJIANG">
																			<a realname="娄底" cityname="冷水江市(娄底)" citynameen="LENGSHUIJIANG" citycode="00624" name="choose_city_btn" href="javascript:;" id="districtName">冷水江市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LUFENG">
																			<a realname="汕尾" cityname="陆丰市(汕尾)" citynameen="LUFENG" citycode="02544" name="choose_city_btn" href="javascript:;" id="districtName">陆丰市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RENHUAI">
																			<a realname="遵义" cityname="仁怀市(遵义)" citynameen="RENHUAI" citycode="01920" name="choose_city_btn" href="javascript:;" id="districtName">仁怀市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PUCHENG">
																			<a realname="南平" cityname="浦城县(南平)" citynameen="PUCHENG" citycode="01135" name="choose_city_btn" href="javascript:;" id="districtName">浦城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LILING">
																			<a realname="株洲" cityname="醴陵市(株洲)" citynameen="LILING" citycode="00391" name="choose_city_btn" href="javascript:;" id="districtName">醴陵市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUAIREN">
																			<a realname="朔州" cityname="怀仁县(朔州)" citynameen="HUAIREN" citycode="03384" name="choose_city_btn" href="javascript:;" id="districtName">怀仁县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RUSHAN">
																			<a realname="威海" cityname="乳山市(威海)" citynameen="RUSHAN" citycode="00325" name="choose_city_btn" href="javascript:;" id="districtName">乳山市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BOBAI">
																			<a realname="玉林" cityname="博白县(玉林)" citynameen="BOBAI" citycode="00456" name="choose_city_btn" href="javascript:;" id="districtName">博白县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MILUO">
																			<a realname="岳阳" cityname="汨罗市(岳阳)" citynameen="MILUO" citycode="01357" name="choose_city_btn" href="javascript:;" id="districtName">汨罗市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CIXIAN">
																			<a realname="邯郸" cityname="磁县(邯郸)" citynameen="CIXIAN" citycode="00847" name="choose_city_btn" href="javascript:;" id="districtName">磁县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ENPING">
																			<a realname="江门" cityname="恩平市(江门)" citynameen="ENPING" citycode="00595" name="choose_city_btn" href="javascript:;" id="districtName">恩平市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ANDA">
																			<a realname="绥化" cityname="安达市(绥化)" citynameen="ANDA" citycode="01201" name="choose_city_btn" href="javascript:;" id="districtName">安达市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TENGZHOU">
																			<a realname="枣庄" cityname="滕州市(枣庄)" citynameen="TENGZHOU" citycode="04008" name="choose_city_btn" href="javascript:;" id="districtName">滕州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZOUPING">
																			<a realname="滨州" cityname="邹平县(滨州)" citynameen="ZOUPING" citycode="02640" name="choose_city_btn" href="javascript:;" id="districtName">邹平县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SANYA">
																			<a realname="海南" cityname="三亚市(海南)" citynameen="SANYA" citycode="02113" name="choose_city_btn" href="javascript:;" id="districtName">三亚市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JUNAN">
																			<a realname="临沂" cityname="莒南县(临沂)" citynameen="JUNAN" citycode="00775" name="choose_city_btn" href="javascript:;" id="districtName">莒南县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YISHUI">
																			<a realname="临沂" cityname="沂水县(临沂)" citynameen="YISHUI" citycode="00775" name="choose_city_btn" href="javascript:;" id="districtName">沂水县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUIDONG">
																			<a realname="惠州" cityname="惠东县(惠州)" citynameen="HUIDONG" citycode="00193" name="choose_city_btn" href="javascript:;" id="districtName">惠东县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QUFU">
																			<a realname="济宁" cityname="曲阜市(济宁)" citynameen="QUFU" citycode="01333" name="choose_city_btn" href="javascript:;" id="districtName">曲阜市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGKANG">
																			<a realname="金华" cityname="永康市(金华)" citynameen="YONGKANG" citycode="00127" name="choose_city_btn" href="javascript:;" id="districtName">永康市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="MINHOU">
																			<a realname="福州" cityname="闽侯县(福州)" citynameen="MINHOU" citycode="00090" name="choose_city_btn" href="javascript:;" id="districtName">闽侯县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGHAI">
																			<a realname="连云港" cityname="东海县(连云港)" citynameen="DONGHAI" citycode="00432" name="choose_city_btn" href="javascript:;" id="districtName">东海县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUANNAN">
																			<a realname="连云港" cityname="灌南县(连云港)" citynameen="GUANNAN" citycode="00432" name="choose_city_btn" href="javascript:;" id="districtName">灌南县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SIYANG">
																			<a realname="宿迁" cityname="泗阳县(宿迁)" citynameen="SIYANG" citycode="00757" name="choose_city_btn" href="javascript:;" id="districtName">泗阳县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="QIONGLAI">
																			<a realname="成都" cityname="邛崃市(成都)" citynameen="QIONGLAI" citycode="00054" name="choose_city_btn" href="javascript:;" id="districtName">邛崃市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINTAI">
																			<a realname="泰安" cityname="新泰市(泰安)" citynameen="XINTAI" citycode="01321" name="choose_city_btn" href="javascript:;" id="districtName">新泰市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="NINGSHAN">
																			<a realname="安康" cityname="宁陕县(安康)" citynameen="NINGSHAN" citycode="03432" name="choose_city_btn" href="javascript:;" id="districtName">宁陕县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LUJIANG">
																			<a realname="合肥" cityname="庐江县(合肥)" citynameen="LUJIANG" citycode="00061" name="choose_city_btn" href="javascript:;" id="districtName">庐江县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SIHONG">
																			<a realname="宿迁" cityname="泗洪县(宿迁)" citynameen="SIHONG" citycode="00757" name="choose_city_btn" href="javascript:;" id="districtName">泗洪县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHUCHENG">
																			<a realname="潍坊" cityname="诸城市(潍坊)" citynameen="ZHUCHENG" citycode="00505" name="choose_city_btn" href="javascript:;" id="districtName">诸城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GAOMI">
																			<a realname="潍坊" cityname="高密市(潍坊)" citynameen="GAOMI" citycode="00505" name="choose_city_btn" href="javascript:;" id="districtName">高密市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LAIYANG">
																			<a realname="烟台" cityname="莱阳市(烟台)" citynameen="LAIYANG" citycode="00337" name="choose_city_btn" href="javascript:;" id="districtName">莱阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YONGCHENG">
																			<a realname="商丘" cityname="永城市(商丘)" citynameen="YONGCHENG" citycode="01560" name="choose_city_btn" href="javascript:;" id="districtName">永城市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PINGSHAN">
																			<a realname="石家庄" cityname="平山县(石家庄)" citynameen="PINGSHAN" citycode="00067" name="choose_city_btn" href="javascript:;" id="districtName">平山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGYUAN">
																			<a realname="新乡" cityname="长垣县(新乡)" citynameen="CHANGYUAN" citycode="01536" name="choose_city_btn" href="javascript:;" id="districtName">长垣县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="PINGYU">
																			<a realname="驻马店" cityname="平舆县(驻马店)" citynameen="PINGYU" citycode="01416" name="choose_city_btn" href="javascript:;" id="districtName">平舆县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHANGPU">
																			<a realname="漳州" cityname="漳浦县(漳州)" citynameen="ZHANGPU" citycode="02088" name="choose_city_btn" href="javascript:;" id="districtName">漳浦县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUIXIAN">
																			<a realname="新乡" cityname="辉县市(新乡)" citynameen="HUIXIAN" citycode="01536" name="choose_city_btn" href="javascript:;" id="districtName">辉县市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LUXI">
																			<a realname="红河州" cityname="泸西县(红河州)" citynameen="LUXI" citycode="04128" name="choose_city_btn" href="javascript:;" id="districtName">泸西县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINLE">
																			<a realname="石家庄" cityname="新乐市(石家庄)" citynameen="XINLE" citycode="00067" name="choose_city_btn" href="javascript:;" id="districtName">新乐市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HONGDONG">
																			<a realname="临汾" cityname="洪洞县(临汾)" citynameen="HONGDONG" citycode="00745" name="choose_city_btn" href="javascript:;" id="districtName">洪洞县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUAN">
																			<a realname="廊坊" cityname="固安县(廊坊)" citynameen="GUAN" citycode="00859" name="choose_city_btn" href="javascript:;" id="districtName">固安县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RONGCHENG">
																			<a realname="保定" cityname="容城县(保定)" citynameen="RONGCHENG" citycode="00619" name="choose_city_btn" href="javascript:;" id="districtName">容城县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINYI">
																			<a realname="茂名" cityname="信宜市(茂名)" citynameen="XINYI" citycode="00475" name="choose_city_btn" href="javascript:;" id="districtName">信宜市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WEISHAN">
																			<a realname="济宁" cityname="微山县(济宁)" citynameen="WEISHAN" citycode="01333" name="choose_city_btn" href="javascript:;" id="districtName">微山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINXIANG">
																			<a realname="济宁" cityname="金乡县(济宁)" citynameen="JINXIANG" citycode="01333" name="choose_city_btn" href="javascript:;" id="districtName">金乡县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TENGCHONG">
																			<a realname="保山" cityname="腾冲市(保山)" citynameen="TENGCHONG" citycode="00552" name="choose_city_btn" href="javascript:;" id="districtName">腾冲市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="ZHONGJIANG">
																			<a realname="德阳" cityname="中江县(德阳)" citynameen="ZHONGJIANG" citycode="01021" name="choose_city_btn" href="javascript:;" id="districtName">中江县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LONGHAI">
																			<a realname="漳州" cityname="龙海市(漳州)" citynameen="LONGHAI" citycode="02088" name="choose_city_btn" href="javascript:;" id="districtName">龙海市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGYI">
																			<a realname="潍坊" cityname="昌邑市(潍坊)" citynameen="CHANGYI" citycode="00505" name="choose_city_btn" href="javascript:;" id="districtName">昌邑市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YUZHOU">
																			<a realname="许昌" cityname="禹州市(许昌)" citynameen="YUZHOU" citycode="01776" name="choose_city_btn" href="javascript:;" id="districtName">禹州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIAGEDAQI">
																			<a realname="大兴安岭" cityname="加格达奇(大兴安岭)" citynameen="JIAGEDAQI" citycode="04512" name="choose_city_btn" href="javascript:;" id="districtName">加格达奇</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HAIYANG">
																			<a realname="烟台" cityname="海阳市(烟台)" citynameen="HAIYANG" citycode="00337" name="choose_city_btn" href="javascript:;" id="districtName">海阳市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="BEIPIAO">
																			<a realname="朝阳" cityname="北票市(朝阳)" citynameen="BEIPIAO" citycode="01093" name="choose_city_btn" href="javascript:;" id="districtName">北票市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LINGHAI">
																			<a realname="锦州" cityname="凌海市(锦州)" citynameen="LINGHAI" citycode="00571" name="choose_city_btn" href="javascript:;" id="districtName">凌海市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIZHENG">
																			<a realname="扬州" cityname="仪征市(扬州)" citynameen="YIZHENG" citycode="00217" name="choose_city_btn" href="javascript:;" id="districtName">仪征市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="EMEISHAN">
																			<a realname="乐山" cityname="峨眉山市(乐山)" citynameen="EMEISHAN" citycode="04200" name="choose_city_btn" href="javascript:;" id="districtName">峨眉山市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SONGZI">
																			<a realname="荆州" cityname="松滋市(荆州)" citynameen="SONGZI" citycode="00403" name="choose_city_btn" href="javascript:;" id="districtName">松滋市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WUDI">
																			<a realname="滨州" cityname="无棣县(滨州)" citynameen="WUDI" citycode="02640" name="choose_city_btn" href="javascript:;" id="districtName">无棣县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="HUIMIN">
																			<a realname="滨州" cityname="惠民县(滨州)" citynameen="HUIMIN" citycode="02640" name="choose_city_btn" href="javascript:;" id="districtName">惠民县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIJIN">
																			<a realname="东营" cityname="利津县(东营)" citynameen="LIJIN" citycode="00331" name="choose_city_btn" href="javascript:;" id="districtName">利津县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIULIN">
																			<a realname="吕梁" cityname="柳林县(吕梁)" citynameen="LIULIN" citycode="02520" name="choose_city_btn" href="javascript:;" id="districtName">柳林县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SUIDE">
																			<a realname="榆林" cityname="绥德县(榆林)" citynameen="SUIDE" citycode="00360" name="choose_city_btn" href="javascript:;" id="districtName">绥德县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINGNING">
																			<a realname="梅州" cityname="兴宁市(梅州)" citynameen="XINGNING" citycode="01440" name="choose_city_btn" href="javascript:;" id="districtName">兴宁市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XILINHAOTE">
																			<a realname="锡林郭勒" cityname="锡林浩特市(锡林郭勒)" citynameen="XILINHAOTE" citycode="04584" name="choose_city_btn" href="javascript:;" id="districtName">锡林浩特市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="RUZHOU">
																			<a realname="平顶山" cityname="汝州市(平顶山)" citynameen="RUZHOU" citycode="01248" name="choose_city_btn" href="javascript:;" id="districtName">汝州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WUWEI">
																			<a realname="芜湖" cityname="无为县(芜湖)" citynameen="WUWEI" citycode="00253" name="choose_city_btn" href="javascript:;" id="districtName">无为县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YINING">
																			<a realname="伊犁" cityname="伊宁市(伊犁)" citynameen="YINING" citycode="04608" name="choose_city_btn" href="javascript:;" id="districtName">伊宁市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FENGXIAN">
																			<a realname="徐州" cityname="丰县(徐州)" citynameen="FENGXIAN" citycode="00169" name="choose_city_btn" href="javascript:;" id="districtName">丰县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DANJIANGKOU">
																			<a realname="十堰" cityname="丹江口市(十堰)" citynameen="DANJIANGKOU" citycode="00427" name="choose_city_btn" href="javascript:;" id="districtName">丹江口市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIANGSHAN">
																			<a realname="荆门" cityname="京山县(荆门)" citynameen="LIANGSHAN" citycode="03192" name="choose_city_btn" href="javascript:;" id="districtName">京山县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="WANNIAN">
																			<a realname="上饶" cityname="万年县(上饶)" citynameen="WANNIAN" citycode="00408" name="choose_city_btn" href="javascript:;" id="districtName">万年县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XISHUI">
																			<a realname="黄冈" cityname="浠水县(黄冈)" citynameen="XISHUI" citycode="00672" name="choose_city_btn" href="javascript:;" id="districtName">浠水县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="SHANGZHI">
																			<a realname="哈尔滨" cityname="尚志市(哈尔滨)" citynameen="SHANGZHI" citycode="00295" name="choose_city_btn" href="javascript:;" id="districtName">尚志市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="GUANGDE">
																			<a realname="宣城" cityname="广德县(宣城)" citynameen="GUANGDE" citycode="01056" name="choose_city_btn" href="javascript:;" id="districtName">广德县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TAISHUN">
																			<a realname="温州" cityname="泰顺县(温州)" citynameen="TAISHUN" citycode="00043" name="choose_city_btn" href="javascript:;" id="districtName">泰顺县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGE">
																			<a realname="聊城" cityname="东阿县(聊城)" citynameen="DONGE" citycode="00936" name="choose_city_btn" href="javascript:;" id="districtName">东阿县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="FEIXI">
																			<a realname="合肥" cityname="肥西县(合肥)" citynameen="FEIXI" citycode="00061" name="choose_city_btn" href="javascript:;" id="districtName">肥西县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JINJIANG">
																			<a realname="泉州" cityname="晋江市(泉州)" citynameen="JINJIANG" citycode="00343" name="choose_city_btn" href="javascript:;" id="districtName">晋江市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="LIXIN">
																			<a realname="亳州" cityname="利辛县(亳州)" citynameen="LIXIN" citycode="01080" name="choose_city_btn" href="javascript:;" id="districtName">利辛县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JUYE">
																			<a realname="菏泽" cityname="巨野县(菏泽)" citynameen="JUYE" citycode="02448" name="choose_city_btn" href="javascript:;" id="districtName">巨野县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DONGMING">
																			<a realname="菏泽" cityname="东明县(菏泽)" citynameen="DONGMING" citycode="02448" name="choose_city_btn" href="javascript:;" id="districtName">东明县</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="CHANGLE">
																			<a realname="福州" cityname="长乐市(福州)" citynameen="CHANGLE" citycode="00090" name="choose_city_btn" href="javascript:;" id="districtName">长乐市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="XINMIN">
																			<a realname="沈阳" cityname="新民市(沈阳)" citynameen="XINMIN" citycode="00066" name="choose_city_btn" href="javascript:;" id="districtName">新民市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="DENGZHOU">
																			<a realname="南阳" cityname="邓州市(南阳)" citynameen="DENGZHOU" citycode="01512" name="choose_city_btn" href="javascript:;" id="districtName">邓州市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JIANGYIN">
																			<a realname="无锡" cityname="江阴市(无锡)" citynameen="JIANGYIN" citycode="00019" name="choose_city_btn" href="javascript:;" id="districtName">江阴市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YIXING">
																			<a realname="无锡" cityname="宜兴市(无锡)" citynameen="YIXING" citycode="00019" name="choose_city_btn" href="javascript:;" id="districtName">宜兴市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="TAIXINGQU">
																			<a realname="泰州" cityname="泰兴市(泰州)" citynameen="TAIXINGQU" citycode="00763" name="choose_city_btn" href="javascript:;" id="districtName">泰兴市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="YANGZHONG">
																			<a realname="镇江" cityname="扬中市(镇江)" citynameen="YANGZHONG" citycode="00223" name="choose_city_btn" href="javascript:;" id="districtName">扬中市</a>
																		</span>
																		<span class="city_mode" style="display: none;" firstletter="JURONG">
																			<a realname="镇江" cityname="句容市(镇江)" citynameen="JURONG" citycode="00223" name="choose_city_btn" href="javascript:;" id="districtName">句容市</a>
																		</span>
																	</div>
																</div>
																<!--城市列表结束/-->
																<!--城市列表结束/-->
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
									<div style="margin: 20px;"><div style="float:left">友情提示：&nbsp;</div><div style="float:left">如果您选择不设置密码，您送餐信息的主要内容会以*号遮蔽，如：虹桥路2号，会显示为“虹﹡••••••﹡2号”。<br />该显示信息可能不受保护，建议您设置密码。</div></div>
								</div>
							</div>
						</div>
					</div>
                    <!--右侧主体/-->
					
                </div>
            </div>
        </div>
        <div id="footer">  </div>
        <script type="text/javascript" src="js/quote/chatService.js"></script>
        <script type="text/javascript" src="js/quote/DSPCommon.js"></script>
    </div>
    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/customerCenter.js"></script>
    <script type="text/javascript" src="js/quote/pagination.js"></script>
    <script type="text/javascript" src="js/quote/config.js"></script>
    <script type="text/javascript" src="js/quote/autonavi_config_common.js"></script>
    <script type="text/javascript" src="js/quote/jquery.md5.js"></script>
    <script type="text/javascript" src="js/quote/fingerprint.js"></script>
    <script type="text/javascript">
        var EmapOnline = ('true' == 'true');
        $(function () {
            if (typeof riskControlKey !== "undefined" && riskControlKey) {
                window.brower_id = window.GuanAnFingerBaseInfo.generateUUID();
                new Fingerprint2().get(function (result, components) {
                    GuanAnFingerBaseInfo.picking('https://fp.hwwt8.com/fingerprint/browser', window.brower_id, result);
                });
            }
            base.initNav();
            KFCIOS.customerCenter.init();
        });
    </script>
</body>
</html>
<script type="text/javascript" src="js/quote/rc.fp.js"></script>