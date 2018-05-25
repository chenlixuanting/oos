function getFinal(content) {
    return flag = content.head == "true" ? true : false;
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 黑幕特效
 */
function shortWait() {

    /**
     *拉出灰募
     * */
    $("body").append("<div class='ui-widget-overlay' style='width: 1920px; height: 1920px; z-index: 1001;'></div>");

    //200毫秒后关闭黑幕
    setTimeout(function () {
        $(".ui-widget-overlay").remove();
    }, 300);

}

/**
 * 用户退出
 */
function userExit() {
    location.replace("customerExit.action");
}

