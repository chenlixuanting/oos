package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.Page;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.Comment;
import com.guet.oos.po.User;
import com.guet.oos.service.AdministratorService;
import com.guet.oos.service.CommentService;
import com.guet.oos.service.UserService;
import com.guet.oos.utils.PageUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/27.
 */
@WebServlet("/admin/queryHistoryComment.action")
public class QueryHistoryCommentServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryHistoryCommentServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String aoData = request.getParameter("aoData");

        Writer out = response.getWriter();

        //解析分页数据，并封装成Page实体
        Page pageData = PageUtils.parse(aoData);

        int iTotalRecords = commentService.countAllReplyComment();

        List<Comment> commentList = commentService.getListReplyComment(pageData.getiDisplayStart(), pageData.getiDisplayLength());

        for (Comment comment : commentList) {
            User user = userService.findByUserId(comment.getUsId());
            Administrator administrator = administratorService.findById(comment.getMgId());
            comment.setUsername(user.getUsername());
            comment.setAdminname(administrator.getUsername());
        }

        JSONObject data = PageUtils.encPageJsonObj(pageData.getsEcho(), iTotalRecords, iTotalRecords, commentList);

        out.write(JSONObject.toJSONString(data));
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}