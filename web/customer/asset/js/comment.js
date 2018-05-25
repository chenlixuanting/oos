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

    $(".refresh").click(function () {
            initCommentPage();
        }
    );

    //发表评论
    $("#btnComment").click(function () {

        //检查用户是否登录
        var flag = checkUserLogin();

        if (!flag) {
            alert("请先登录!");
            return;
        }

        var commentData = {
            usId: $("#commentContent").attr("dsId"),
            content: $("#commentContent").val(),
        };

        $.ajax({
            url: "addComment.action",
            type: "POST",
            dataType: "json",
            data: {
                commentData: JSON.stringify(commentData)
            },
            success: function (data) {

                var returnData = eval(data);

                alert(returnData.body);

                if (returnData.head) {

                    initCommentPage();

                } else {

                }

            }
        });

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
            var returnData = eval(data);
            flag = returnData.head;
        }
    });

    return flag;

}

//初始化评论页面
function initCommentPage() {

    //获取所有
    $.ajax({
        url: "getAllComment.action",
        type: "POST",
        dataType: "json",
        success: function (data) {

            var returnData = eval(data);

            if (returnData.head) {

                var body = eval(returnData.body);

                //清空评论
                $("#ulcommentlist").html("");

                for (var x = 0; x < body.length; x++) {

                    $("#ulcommentlist").append(
                        "<li class='entry' id='" + body[x].coId + "'>" +
                        "<div>" +
                        "<div class='info rmp'><strong class='p_floor'>" + (x + 1) + "楼</strong>" +
                        "<div class'nmp'>" +
                        "<span class='nick'>" +
                        "<a>" + body[x].username + "</a>" +
                        "</span>" +
                        "<span class='posandtime'>&nbsp;" + body[x].createTime + "</span>" +
                        "</div>" +
                        "</div>" +
                        "<div class='comm'>" +
                        "<p>" + body[x].content + "</p>" +
                        "</div>" +
                        (body[x].comStatus == "已回复" ? "<ul class='reply' id='" + body[x].coId + "'>" +
                            "<li class='gh'>" +
                            "<div>" +
                            "<div class='re_comm'>" +
                            "<p>" +
                            "<span>回复1#" +
                            "<a>" + body[x].adminname + " " + body[x].updateTime + "</a>：" +
                            "</span>" + body[x].replyContent +
                            "</p>" +
                            "</div>" +
                            "</div>" +
                            "</li>" +
                            "</ul>" : "") +
                        "</div>" +
                        "</li>"
                    );

                }

            } else {
                alert(returnData.body);
            }

        }
    });

}

//初始化用户信息
function initUserInfo() {

    //判断用户是否登录
    if (checkUserLogin()) {

        $.ajax({
            url: "getUserInfo.action",
            type: "POST",
            dataType: "json",
            success: function (data) {

                var returnData = eval(data);

                if (returnData.head) {

                    $("#commentContent").attr("dsId", returnData.body.usId);
                    $("#customerName").html(returnData.body.username);

                } else {
                    alert(returnData.body);
                }

            }
        });

    }

}