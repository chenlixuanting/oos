package com.guet.oos.servlet.administrator.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.CommentStatus;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.service.CommentService;

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
 * Created by Shinelon on 2018/5/25.
 */
@WebServlet("/admin/modifyCommentStatus.action")
public class ModifyCommentStatusServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyCommentStatusServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String comData = request.getParameter("comData");

        Comment comment = JSONObject.parseObject(comData, Comment.class);

        Writer out = response.getWriter();

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        comment.setComStatus(CommentStatus.COMMENT_REPLIED);

        comment.setUpdateTime(sf.format(new Date()));

        boolean result = commentService.updateComment(comment);

        if (result) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.REPLY_SUCCESS)));
        } else {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
