package com.guet.oos.servlet.administrator.pages;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.Page;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.po.User;
import com.guet.oos.service.CommentService;
import com.guet.oos.service.UserService;
import com.guet.oos.utils.PageUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/25.
 */
@WebServlet("/admin/pagesUnansweredComment.action")
public class PagesUnansweredCommentServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public PagesUnansweredCommentServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String aoData = request.getParameter("aoData");

        //解析分页数据，并封装成Page实体
        Page pageData = PageUtils.parse(aoData);

        int iTotalRecords = commentService.countAllUnansweredComment();

        List<Comment> comments = commentService.getListUnansweredComment(pageData.getiDisplayStart(), pageData.getiDisplayLength());

        for (Comment com : comments) {
            User user = userService.findByUserId(com.getUsId());
            com.setUsername(user.getUsername());
        }

        JSONObject data = PageUtils.encPageJsonObj(pageData.getsEcho(), iTotalRecords, iTotalRecords, comments);

        response.getWriter().write(JSONObject.toJSONString(data));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}