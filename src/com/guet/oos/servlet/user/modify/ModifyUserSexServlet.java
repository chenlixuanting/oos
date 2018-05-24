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
 * Created by Shinelon on 2018/5/19.
 */
@WebServlet("/customer/ModifyUserSex.action")
public class ModifyUserSexServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyUserSexServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        //判断Session是否失效
        if (StringUtils.isEmpty(httpSession)) {

            //若未失效则返回舱错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            User user = (User) httpSession.getAttribute(SessionKey.USER);

            String newSex = request.getParameter("requestData");

            userService.updateUserSex(newSex, user.getUsId());

            user.setSex(newSex);

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
