package com.guet.oos.servlet.administrator;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.service.AdministratorService;
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
 * Created by Shinelon on 2018/5/27.
 */
@WebServlet("/admin/resetPassword.action")
public class AdminResetPasswordServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminResetPasswordServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String newPassword = request.getParameter("newPassword");

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(newPassword)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.RESET_PASSWORD_FAIL)));
            return;
        } else {
            Administrator administrator = (Administrator) httpSession.getAttribute(SessionKey.ADMINISTRATOR);

            boolean flag = administratorService.updateAdministratorPassword(administrator.getMgId(), newPassword);

            if (flag) {

                administrator.setPassword(newPassword);

                httpSession.setAttribute(SessionKey.ADMINISTRATOR, administrator);

                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.RESET_PASSWORD_SUCCESS)));
            } else {

                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.RESET_PASSWORD_FAIL)));

            }
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}