package com.guet.oos.servlet.user.login;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.constant.UserExist;
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
import javax.servlet.http.HttpSession;
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

        //清除Session
        request.getSession().removeAttribute(SessionKey.TEMPORARY_USER_INFO);
        request.getSession().removeAttribute(SessionKey.SHOP_CART);
        request.getSession().removeAttribute(SessionKey.USER);
        request.getSession().removeAttribute(SessionKey.USER_FLAG);

        String loginData = request.getParameter("mobileData");

        LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

        User user = userService.findByMobile(loginDataDto.getMobile());

        HttpSession httpSession = request.getSession();

        //默认将用户标记为非正式用户
        httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_NOT_EXIST);

        // 用户存在
        if (user != null) {

            //将用户标记为正式用户
            httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_EXIST);

            // 将bean.String转成成json格式数据，响应ajax
            response.getWriter()
                    .append(JsonReturn.buildSuccessEmptyContent().toString());

            // 用户不存在
        } else {

            TemporaryUserInfo userInfo = new TemporaryUserInfo();

            userInfo.setAccount(loginDataDto.getMobile());

            //检测Session中是否存在User
//            if (request.getSession().getAttribute(SessionKey.USER) != null) {
//                request.getSession().removeAttribute(SessionKey.USER);
//            }

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