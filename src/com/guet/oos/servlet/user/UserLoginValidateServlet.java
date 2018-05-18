package com.guet.oos.servlet.user;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.LoginDataDto;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * 用户手机号码验证
 * Servlet implementation class UserLoginValidateServlet
 */
@WebServlet("/customer/LoginValidate.action")
public class UserLoginValidateServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserLoginValidateServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String loginData = request.getParameter("mobileData");

        LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

        User user = userService.findByMobile(loginDataDto.getMobile());

        // 用户存在
        if (user != null) {
            // 将bean.String转成成json格式数据，响应ajax
            response.getWriter()
                    .append(JsonReturn.buildSuccessEmptyContent().toString());
            // 用户不存在
        } else {

            TemporaryUserInfo userInfo = new TemporaryUserInfo();

            userInfo.setAccount(loginDataDto.getMobile());

            //将新用户电话号码添加到Session中
            request.getSession().setAttribute(SessionKey.TEMPORARY_USER_INFO, userInfo);

            // 重定向到customerFromAgree.jsp
            response.getWriter()
                    .append(JsonReturn.buildFailEmptyContent().toString());
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
