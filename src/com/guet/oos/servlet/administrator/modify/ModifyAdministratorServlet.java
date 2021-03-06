package com.guet.oos.servlet.administrator.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
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
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

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

        String adminDataJson = request.getParameter("adminData");

        Administrator administrator = JSONObject.parseObject(adminDataJson, Administrator.class);

        Writer out = response.getWriter();

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        administrator.setUpdateTime(sf.format(new Date()));

        boolean flag = administratorService.updateByMgId(administrator);

        if (flag) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.EDIT_ADMINISTRATOR_SUCCESS)));
        } else {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.EDIT_ADMINISTRATOR_FAIL)));
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