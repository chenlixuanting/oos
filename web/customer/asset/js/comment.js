/**
 * Created by Shinelon on 2018/5/22.
 */
$(function () {

    //初始化评论页面信息
    initCommentPage();

    //初始化用户信息
    initUserInfo();

    //清空评论框的内容
    $("#commentContent").click(function () {
        $("#commentContent").attr("placeholder", "");
    });

    //发表评论
    $("#btnComment").click(function () {

        //检查用户是否登录
        var flag = checkUserLogin();

        if (!flag) {
            alert("请先登录!");
            return;
        }

    });

});

//检查用户是否登录
function checkUserLogin() {

    var flag = false;

    $.ajax({
        url: "CheckUserLogin.action",
        type: "POST",
        dataType: "json",
        async: false,
        success: function (data) {
            var d = eval(data);
            flag = d.head == "true" ? true : false;
        }
    });

    return flag;

}

//初始化评论页面
function initCommentPage() {

}

//初始化用户信息
function initUserInfo() {

    /**
     * {
        "creatorTime": "2018-05-21 09:23:47",
        "defaultDeliverAddress": {
            "createTime": "2018-05-21 09:23:47",
            "daId": 56,
            "default": true,
            "receiverAddress": "广西壮族自治区桂林市雁山区 世纪花园北区(水芝苑C单元402) 陈宣锦 先生 13347573463",
            "receiverMobile": "13347573463",
            "receiverName": "陈宣锦",
            "receiverTime": "2018年5月22日 周二 10时1分",
            "updateTime": "2018-05-21 09:23:47",
            "usId": 56
        },
        "mobile": "18477062310",
        "password": "123456",
        "sex": "先生",
        "updateTime": "2018-05-21 09:23:47",
        "usId": 56,
        "username": "223"
       }
     */

    //判断用户是否登录
    if (checkUserLogin()) {

        $.ajax({
            url: "getUserInfo.action",
            type: "POST",
            dataType: "json",
            success: function (data) {
                var d = eval(data);
                $("#commentContent").attr("dsId", d.usId);
                $("#customerName").html(d.username);
            }
        });

    }

}