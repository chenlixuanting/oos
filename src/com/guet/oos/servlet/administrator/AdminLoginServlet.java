package com.guet.oos.servlet.administrator;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.AdminStatus;
import com.guet.oos.constant.NginxConfig;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.service.AdministratorService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.List;


/**
 * 管理员登录
 * Servlet implementation class Template
 */
@WebServlet("/admin/adminLogin.action")
public class AdminLoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdminLoginServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String loginData = request.getParameter("loginData");

        Writer out = response.getWriter();

        Administrator administrator = JSONObject.parseObject(loginData, Administrator.class);

        List<Administrator> administrators = administratorService.findByUsername(administrator.getUsername());

        if (administrators.size() > 0) {

            Administrator temp = administrators.get(0);

            //判断该管理员是否被禁用
            if (temp.getAdminStatus().equals(AdminStatus.DISABLE)) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.ADMINISTRATOR_DISABLE)));
                return;
            }

            if (!administrator.getPassword().equals(temp.getPassword())) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.PASSWORD_ERROR)));
                return;
            }

        } else {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.ADMINISTRATOR_IS_NOT_EXIST)));
            return;
        }

        //将administrator加入session
        request.getSession().setAttribute(SessionKey.ADMINISTRATOR, administrators.get(0));

        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess("/oos/admin/index.jsp")));
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
