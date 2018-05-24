package com.guet.oos.servlet.user.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;

/**
 * 修改用户姓名
 * Created by Shinelon on 2018/5/19.
 */
@WebServlet("/customer/ModifyUserName.action")
public class ModifyUserNameServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyUserNameServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        String newUserName = request.getParameter("requestData");

        //判断Session是否为空
        if (StringUtils.isEmpty(httpSession)) {

            //若为空则返回错误新
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            User user = (User) httpSession.getAttribute(SessionKey.USER);

            userService.updateUserName(newUserName, user.getUsId());

            user.setUsername(newUserName);

            httpSession.setAttribute(SessionKey.USER, user);

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}