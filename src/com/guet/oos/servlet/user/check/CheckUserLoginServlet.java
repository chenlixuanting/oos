package com.guet.oos.servlet.user.check;

import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 检测用户是否登录
 * Created by Shinelon on 2018/5/22.
 */
@WebServlet("/customer/CheckUserLogin.action")
public class CheckUserLoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CheckUserLoginServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Object user = request.getSession().getAttribute(SessionKey.USER);

        if (user == null) {
            response.getWriter().write(JsonReturn.buildFailEmptyContent().toString());
        } else {
            response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}