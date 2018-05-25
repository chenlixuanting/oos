package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.CommentStatus;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.Comment;
import com.guet.oos.po.User;
import com.guet.oos.service.AdministratorService;
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
import java.util.List;

/**
 * Created by Shinelon on 2018/5/24.
 */
@WebServlet("/customer/getAllComment.action")
public class GetAllCommentServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllCommentServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<Comment> comments = commentService.getAllComment();

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(comments)) {

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.COMMENT_IS_EMPTY)));

            return;

        } else {

            for (Comment comment : comments) {

                User user = userService.findByUserId(comment.getUsId());

                comment.setUsername(user.getUsername());

                if (comment.getComStatus().equals(CommentStatus.COMMENT_REPLIED)) {
                    Administrator administrator = administratorService.findById(comment.getMgId());
                    comment.setAdminname(administrator.getUsername());
                }

            }

            //返回数据
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(comments)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}