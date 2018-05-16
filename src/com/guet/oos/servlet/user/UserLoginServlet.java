package com.guet.oos.servlet.user;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.JsonReturnCode;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.LoginDataDto;
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
 * Created by Shinelon on 2018/5/11.
 */
@WebServlet("/customer/UserLogin.action")
public class UserLoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserLoginServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String loginData = request.getParameter("loginData");

        LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

        User user = userService.findByMobile(loginDataDto.getMobile()).get(0);

        //用户存在则继续判断密码
        if (!user.getPassword().equals(loginDataDto.getPassword())) {
            response.getWriter()
                    .append(JsonReturn.buildFail(JsonReturnCode.PASSWORD_ERROR).toString());

            //密码正确继续判断验证码
        } else if (!((String) request.getSession().getAttribute(
                SessionKey.VALIDATE_CODE)).equalsIgnoreCase((loginDataDto.getVerifyCode()))) {
            response.getWriter()
                    .append(JsonReturn.buildFail(JsonReturnCode.VERIFY_CODE_ERROR).toString());
        } else {
            //将user信息存入Session
            request.getSession().setAttribute(SessionKey.USER, user);

            //验证通过
            response.getWriter()
                    .append(JsonReturn.buildSuccessEmptyContent().toString());
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}