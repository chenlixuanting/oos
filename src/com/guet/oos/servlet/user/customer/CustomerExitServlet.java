package com.guet.oos.servlet.user.customer;

import com.guet.oos.constant.SessionKey;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 用户退出
 * Created by Shinelon on 2018/5/17.
 */
@WebServlet("/customer/customerExit.action")
public class CustomerExitServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomerExitServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        //移除Session中的属性
        httpSession.removeAttribute(SessionKey.SHOP_CART);
        httpSession.removeAttribute(SessionKey.USER);
        httpSession.removeAttribute(SessionKey.USER_FLAG);
        httpSession.removeAttribute(SessionKey.TEMPORARY_USER_INFO);
        httpSession.removeAttribute(SessionKey.VALIDATE_CODE);

        //重定向到orderLogin.jsp
        response.sendRedirect("orderLogin.jsp");

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
