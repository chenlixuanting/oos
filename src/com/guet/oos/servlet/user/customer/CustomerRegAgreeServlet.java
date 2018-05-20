package com.guet.oos.servlet.user.customer;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.TemporaryUserInfo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/14.
 */
@WebServlet("/customer/CustomerRegAgree.action")
public class CustomerRegAgreeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomerRegAgreeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String customerData = request.getParameter("customerData");

        //将临时用户信息封装成对象
        TemporaryUserInfo temporaryUserInfo = (TemporaryUserInfo) JSONObject.parseObject(customerData, TemporaryUserInfo.class);

        HttpSession httpSession = request.getSession();

        TemporaryUserInfo userInfo = (TemporaryUserInfo) httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO);

        temporaryUserInfo.setAccount(userInfo.getAccount());

        //将temporaryUserInfo对象保存到Session中
        httpSession.setAttribute(SessionKey.TEMPORARY_USER_INFO, temporaryUserInfo);

        //返回Success以及temporaryUserInfo实体的Json格式数据
        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
