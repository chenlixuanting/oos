package com.guet.oos.servlet.user.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.JsonReturnCode;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/19.
 */
@WebServlet("/customer/ModifyUserPassword.action")
public class ModifyUserPasswordServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyUserPasswordServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String requestData = request.getParameter("requestData");

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        String newPassword = requestDataJson.getString("newPassword");
        String reNewPassword = requestDataJson.getString("reNewPassword");

        User user = (User) request.getSession().getAttribute(SessionKey.USER);

        if (newPassword.equals(reNewPassword)) {

            userService.updateUserPassword(newPassword, user.getUsId());

            user.setPassword(newPassword);

            request.getSession().setAttribute(SessionKey.USER, user);

            response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());

        } else {

            response.getWriter().write(JsonReturn.buildFailEmptyContent().toString());

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}