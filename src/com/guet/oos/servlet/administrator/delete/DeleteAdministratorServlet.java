package com.guet.oos.servlet.administrator.delete;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.service.AdministratorService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.List;

/**
 * 删除管理员账号
 * Created by Shinelon on 2018/5/27.
 */
@WebServlet("/admin/deleteAdministrator.action")
public class DeleteAdministratorServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteAdministratorServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String mgIds = request.getParameter("mgIds");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(mgIds)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            List<Long> mgIdList = JSONObject.parseArray(mgIds, Long.class);

            for (long mgId : mgIdList) {
                //删除管理员
                if (!administratorService.deleteByMgId(mgId)) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    return;
                }
            }

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.ADMINISTRATOR_DISABLE)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}