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
    <!-- kfc_iso 公共资源文件  -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="keywords" content="美味家"/>
    <meta name="description" content="美味家"/>
    <title>美味家网上订餐官网-美味家优惠套餐-外送菜单-送餐网</title>

    <!-- 加载CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.css"/>

    <!-- 加载JS -->
    <script type="text/javascript" src="js/quote/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="asset/js/customerFromAgree.js"></script>

</head>
<body>
<div class="con">
    <!-- 标题 -->
    <div id="top">
        <div class="top_menu">
            <div class="top_menu_1">
                <input type="hidden" id="isLogin" value="false"/>
                <span class="span_1 fl_l" id="logout">
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
                    <li>
                        <span>
                            <a href="index.jsp">首页</a>
                        </span>
                    </li>
                    <li>
                        <span class="current"><a href="orderLogin.jsp">开始订餐</a></span>

                    </li>
                    <li>
                        <span><a href="customerCenter.jsp">个人中心</a></span>
                    </li>
                    <li class="last_li w5">
                        <a href="" target="_blank">评论专区</a>
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
                        <!-- 判断不在送餐范围内焦点是否落到隔日预约单的位置 -->
                        <input id="theOtherDayDefault" type="hidden" value=""/>
                        <!-- 用户信息栏 -->
                        <div class=" info_table">
                            <div id="addAddress">
                                <div style="width:11%;float:left">
                                    <span class="span_2">送餐城市：</span>
                                    <span class="span_2" address2=address2 style="display:block">路名/小区名：</span>
                                    <span class="span_2" address3=address3 style="display:block">请继续填全：</span>
                                    <span class="span_2" address5=address5>联系人：</span>
                                    <span class="span_2" address6=address6>联系电话：</span>
                                </div>
                                <div style="width:760px">
                                    <div id="import_addr_tip"></div>
                                    <!--添加送餐地址开始-->
                                    <div style="position: relative; height: 100px; z-index:1;">
                                        <div class="fl_l">
                                            <div class="info_table_1">
                                                <div>
                                                    <div style="border: none;">
                                                        <div class="add_address" style="position: relative">
                                                            <p>
                                                                <span class="new_tel_input" style="width: 315px;">
                                                                    <input id="cityName" type="text" class="input_5"
                                                                           style="width: 270px;"
                                                                           autocomplete="off"/>
                                                                    <span class="add_icon" id="query_city"></span>
                                                                    <span class="location"></span>
                                                                    <div id="allmap" style="display: none;width: 473px;height: 200px;position: absolute;top: 35px;"></div>
                                                                </span>
                                                            </p>
                                                            <p id="add_add2" address2=address2 style="display:block">
                                                                <input id="roadName" style="width:188px " type="text"
                                                                       class="input_4" autocomplete="off"/>
                                                                <%--<span class="new_add_img">--%>
                                                                <%--<a href="javascript:void(0);">--%>
                                                                <%--查询--%>
                                                                <%--</a>--%>
                                                                <%--</span>--%>
                                                            </p>
                                                            <p id="add_add3" address3=address3 style="display:block">
                                                                <input id="addressDetial" type="text" maxlength="10"
                                                                       class="input_3" autocomplete="off"/>
                                                            </p>
                                                            <p id="add_add5" address5=address5>
                                                                <input id="linkman" type="text" class="input_4"
                                                                       style="width:188px" autocomplete="off"/>&nbsp;&nbsp;
                                                                <input id="male" name="gender" type="radio"
                                                                       checked=checked value="先生"/>&nbsp;先生
                                                                &nbsp;&nbsp;
                                                                <input id="female" name="gender" type="radio"
                                                                       value="女士"/>&nbsp;女士
                                                            </p>
                                                            <p id="add_add6" address6=address6>
                                                                <input id="linkphone" name="linkphone" type="text"
                                                                       style="width:188px" maxlength="11"
                                                                       class="input_4" autocomplete="off"/>
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
                                    </div> <!--添加送餐地址结束-->
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
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
    <!-- 弹出层 -->
    <div id="dialog-message" title="友情提示：" closeBtn="false" style="display: none;">
        <span></span>
    </div>
</div>
<!--弹出层开始-->
<div id="layer_box"></div>
</div>
</body>

<!-- 地图弹出层 -->

<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=OMHt7FA3ciGcVCAMDOAbAeUf9nZ0idKZ"></script>
<script  type="text/javascript">
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var geoc = new BMap.Geocoder();

    var geolocation = new BMap.Geolocation();//定位
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);  //把位置更新至当前位置
            var pt = r.point;
            geoc.getLocation(pt, function(rs){
                var addComp = rs.addressComponents;
                //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });
        }
        else {
            alert('failed'+this.getStatus());
        }
    });

    map.addEventListener("click", function(e){       //点击获取坐标
        var pt = e.point;
        geoc.getLocation(pt, function(rs){
            var addComp = rs.addressComponents;
            if (confirm("你选择的地址是否为"+addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber)){
                $("#cityName").attr("value",addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
                $("#allmap").css({display:"none"});
            }
            //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
           //addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber ;
        });
    });


    $("#query_city").click(function () {
        console.log(111);
        $("#allmap").css({display:"block"});
    });
</script>
<!-- 地图弹出层 -->
</html>
