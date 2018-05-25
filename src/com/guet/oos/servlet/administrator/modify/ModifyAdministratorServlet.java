package com.guet.oos.servlet.administrator.modify;

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
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/20.
 */
@WebServlet("/admin/ModifyAdministrator.action")
public class ModifyAdministratorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyAdministratorServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String newPassword = request.getParameter("newPassword");

        HttpSession httpSession = request.getSession();

        Administrator administrator = (Administrator) httpSession.getAttribute(SessionKey.ADMINISTRATOR);

        boolean flag = administratorService.updateAdministratorPassword(administrator.getMgId(), newPassword);

        if (flag) {

            administrator.setPassword(newPassword);

            httpSession.setAttribute(SessionKey.ADMINISTRATOR, administrator);

            response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
        } else {
            response.getWriter().write(JsonReturn.buildFailEmptyContent().toString());
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}