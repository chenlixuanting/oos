package com.guet.oos.servlet.administrator;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.NginxConfig;
import com.guet.oos.constant.SessionKey;
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

        JSONObject jsonObject = JSONObject.parseObject(loginData);

        List<Administrator> administrators = administratorService.findByUsername(jsonObject.getString("username"));

        if (administrators.size() > 0) {

            if (!jsonObject.getString("password").equals(administrators.get(0).getPassword())) {
                response.getWriter().write(JsonReturn.buildFail("密码错误").toString());
                return;
            }

        } else {
            response.getWriter().write(JsonReturn.buildFail("管理员账号不存在").toString());
            return;
        }

        //将administrator加入session
        request.getSession().setAttribute(SessionKey.ADMINISTRATOR, administrators.get(0));

        //将admin_head_pic_addrs加入session
        request.getSession().setAttribute("admin_head_pic_addrs", NginxConfig.ADMIN_HEAD_PIC_ADDRS);

        //将admin_pic+addrs加入session
        request.getSession().setAttribute("goods_pic_addrs", NginxConfig.GOODS_PIC_ADDRS);

        response.getWriter().write(JsonReturn.buildSuccess("/oos/admin/index.jsp").toString());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
