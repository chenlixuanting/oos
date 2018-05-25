package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.po.User;
import com.guet.oos.service.CommentService;
import com.guet.oos.service.UserService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/25.
 */
@WebServlet("/admin/queryByCommentId.action")
public class QueryByCommentId extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryByCommentId() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String coIdStr = request.getParameter("coId");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(coIdStr)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {
            long coId = Long.valueOf(coIdStr);
            Comment comment = commentService.getById(coId);
            User user = userService.findByUserId(comment.getUsId());
            comment.setUsername(user.getUsername());
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(comment)));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}