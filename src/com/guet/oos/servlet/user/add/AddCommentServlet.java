package com.guet.oos.servlet.user.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.CommentStatus;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.service.CommentService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 用户评论
 * <p>
 * Created by Shinelon on 2018/5/22.
 */
@WebServlet("/customer/addComment.action")
public class AddCommentServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddCommentServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String commentData = request.getParameter("commentData");

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        Writer out = response.getWriter();

        //判断请求参数是否为空
        if (StringUtils.isEmpty(commentData)) {

            //若为空
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

            //结束
            return;

        } else {

            Comment comment = JSONObject.parseObject(commentData, Comment.class);
            comment.setComStatus(CommentStatus.COMMENT_UNANSWERED);
            comment.setCreateTime(sf.format(new Date()));
            comment.setUpdateTime(sf.format(new Date()));

            boolean result = commentService.createComment(comment);

            if (result) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.COMMENT_ADD_SUCCESS)));
            } else {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
            }
        }


    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}