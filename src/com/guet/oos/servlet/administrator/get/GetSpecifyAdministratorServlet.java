package com.guet.oos.servlet.administrator.get;

import com.alibaba.fastjson.JSONObject;
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

/**
 * Created by Shinelon on 2018/5/27.
 */
@WebServlet("/admin/getSpecifyAdministrator.action")
public class GetSpecifyAdministratorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetSpecifyAdministratorServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String mgIdStr = request.getParameter("mgId");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(mgIdStr)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            long mgId = Long.valueOf(mgIdStr);

            Administrator administrator = administratorService.findById(mgId);

            if (StringUtils.isEmpty(administrator)) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
            } else {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(administrator)));

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
