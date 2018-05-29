package com.guet.oos.servlet.administrator.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.service.AdministratorService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 添加管理员账号
 * Created by Shinelon on 2018/5/27.
 */
@WebServlet("/admin/addAdministrator.action")
public class AddAdministratorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddAdministratorServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String adminDataJson = request.getParameter("adminData");

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(adminDataJson)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;

        } else {

            Administrator administrator = JSONObject.parseObject(adminDataJson, Administrator.class);

            administrator.setCreatorTime(sf.format(new Date()));
            administrator.setUpdateTime(sf.format(new Date()));

            boolean flag = administratorService.creatorAdministrator(administrator);

            if (flag) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.ADD_ADMINISTRATOR_SCCUESS)));
            } else {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.ADD_ADMINISTRATOR_FAIL)));
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