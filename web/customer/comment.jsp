<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <!-- kfc_iso 公共资源文件  -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="keywords" content="肯德基" />
    <meta name="description" content="肯德基." />
    <title>肯德基宅急送外卖网上订餐官网-KFC优惠套餐-外送菜单-送餐网</title>
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
    <script type="text/javascript" src="js/min/vendor/jquery-1.8.3/jquery.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/jquery.cookie.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/jquery.lazyload.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/jquery.ui.yumdialog.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/yum/customerCenter/property_cn.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/yum/customerCenter/kfc/common/base.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/yum/customerCenter/kfc/sdc_kfc.js~1524469088503"></script>
    <!-- kfc_ios add js wanglei4 20150528  start-->
    <script type="text/javascript" src="js/min/yum/customerCenter/pageToUrl.js~1524469088503"></script>
    <!--  kfc_ios add js wanglei4 20150528  end -->
    <style type="text/css">
        #post_comment{
	    position: relative;
	    margin: 10px 0 0 0;
	    padding: 10px 0;
	    font-size: 14px;
	    font-weight: 700;
	    color: #d22222;
	    border-bottom: 5px #d22222 solid;
		}
		.comm_login {
    	position: absolute;
    	bottom: 10px;
    	width: 680px;
    	padding: 0 10px;
		}
		
		.comm_list h3 {
	    border-bottom: 1px #d22222 solid;
	    overflow: hidden;
		}
		.post_comment h3 {
		    position: relative;
		    margin: 10px 0 0 0;
		    padding: 10px 0;
		    font-size: 14px;
		    font-weight: 700;
		    color: #d22222;
		    border-bottom: 5px #d22222 solid;
		}
		h3 {
		    display: block;
		    font-size: 1.17em;
		    -webkit-margin-before: 1em;
		    -webkit-margin-after: 1em;
		    -webkit-margin-start: 0px;
		    -webkit-margin-end: 0px;
		    font-weight: bold;
		}
		.post_comment {
		    width: 728px;
		    font-size: 14px;
		    font-family: 'Microsoft Yahei';
		}
		.button{
			margin-top: -17px;
    		margin-left: 26px;
		}
		.comm_list ul.list li.entry .adiv {
    		width: 207px;
    		float: left;
    		margin-right: 15px;
		}
		.comm_list ul.list li.entry .level {
    	font-size: 10px;
    	text-align: center;
    	width: 30px;
    	display: block;
    	line-height: 25px;
		}
		.comm_list ul.list li.entry .info, .comm_list ul.list li.entry .re_info {
    	padding: 10px 0 0 0;
    	font-size: 12px;
    	color: #888;
		}
		.comm_list ul.list li.entry .zhiChi {
    	position: relative;
    	float: right;
    	padding-bottom: 10px;
   		width: 100%;
		}
		.comm_list ul.list li.entry ul.reply {
	    clear: both;
	    margin: 5px 0 5px 35px;
	    padding: 0 8px;
	    border: 1px #fcbb90 solid;
	    background: #fefcf4;
	    zoom: 1;
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
                                <a href="regCustomer.jsp">订餐首页</a>
                            </span>
                        </li>
                        <li class="w2"><span><a href="orderLogin.jsp">开始订餐</a></span></li>
                        <li class="w3"><span class="current"><a href="js/backups/customerCenter.jsp">个人中心</a></span></li>
                        <li class="last_li w5">
                            <a href="http://www.4008823823.com.cn/kfcios/jsp/help/help_new.html" target="_blank">帮助中心</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        
        <!-- 内容 -->
        <div id="content">
            
            <!--//////////login_content start//////////-->
            <div id="content">
				<div class="post_comment" id="post_comm">
				    <h3 id="post_comment">发表评论<a target="_blank" href="http://quan.ithome.com/0/003/116.htm">[ 账户禁言和解封规则 ]</a><span>愿您的每句评论，都能给大家的生活添色彩，带来共鸣，带来思索，带来快乐。</span></h3>
				    <div class="add_comm">
				        <textarea name="txtBody" id="commentContent" cols="60" rows="5" class="ipt-txt" placeholder="美味之家有您参与更精彩！" style=""></textarea>
				        
				        <input type="submit" name="btnComment" value="发表评论" id="btnComment" class="button">
				                
				        
				        <span id="commentMessage"></span>
				    </div>
				    <script>var commentpage = 1;var commentpageLatest = 1;var hpage = 1;</script>
				    <div class="comm_list" id="commentlist">
				        
				        <h3>
				            <span class="icon2">
				                <input type="radio" name="commentorder" id="commentnew" checked="checked">
				                <label for="commentnew">最新</label>
				                <input type="radio" name="commentorder" id="commentlatest">
				                <label for="commentlatest">最早</label>
				            </span>
				            <a class="refresh">刷新</a>全部评论
				        </h3>
				        <div id="divcommentlist">
				            <ul class="list" id="LoadArticleReply"></ul>
				            <ul class="list" id="ulcommentlist">
				            <div style=""> 
				            <li class="entry">
					            <div class="adiv">
					            	<span class="nick">
					            		<a title="软媒通行证数字ID：1299384" target="_blank" href="http://quan.ithome.com/user/1299384">Tencent马化滕</a>
					            	</span>
					            	<span class="posandtime">IT之家江西宜春网友&nbsp;2018-4-29 14:03:02</span>
					            </div>
					         </div>
					         <div class="comm" style="float: right;margin-top: 28px;"><p>我需要一个响指，就像这样“boom！！！”</p></div>
					         <div class="zhiChi">
					         	<span class="comm_reply" style="float: right;margin-top: 71px;margin-right: -200px;">
					         	<span id="complainmessage32960078"></span>
					         	<a href="javascript:commentComplain(32960078)">举报</a>
					         	<a id="agree32960078" class="s" href="javascript:commentVote(32960078,1)">支持(0)</a>
					         	<a id="against32960078" class="a" href="javascript:commentVote(32960078,2)">反对(0)</a>
					         	<a href="javascript:ShowReply(32960078,357667,0,32960078,'')">回复</a></span>
					         </div>
					         	<ul class="reply" id="lou32960078" style="display:none"> </ul>
					         	<div id="Reply32960078"></div>
					         </div>
					         </li> <li class="entry">
					         					       
				        </div>
				        <div id="divLatest" style="display: none">
				            <ul class="list" id="ulcommentlistLatest"></ul>
				            <ul class="list" id="LoadArticleReplyLatest"></ul>
				            <div id="CommentLatestMore"></div>
				
				        </div>
				    </div><input type="hidden" id="hash" value="A036B4FBC39DBC71">
				</div>
            </div>
        
        </div>
        <div id="footer">  </div>
        <script type="text/javascript" src="js/min/yum/customerCenter/kfc/common/chatService.js~1524469088503"></script>
        <script type="text/javascript" src="js/min/yum/customerCenter/kfc/common/DSPCommon.js~1524469088503"></script>
    </div>
    <!-- 加载JS -->
    <script type="text/javascript" src="js/min/yum/customerCenter/kfc/customerCenter.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/pagination.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/yum/customerCenter/kfc/config.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/yum/customerCenter/kfc/autonavi_config_common.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/jquery.md5.js~1524469088503"></script>
    <script type="text/javascript" src="js/min/vendor/customerCenter/fingerprint.js~1524469088503"></script>
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
<script type="text/javascript" src="js/min/vendor/customerCenter/rc.fp.js~1524469088503"></script>