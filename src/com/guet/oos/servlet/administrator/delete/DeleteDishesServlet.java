package com.guet.oos.servlet.administrator.delete;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.service.DishesService;
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
 * 删除餐品
 * Created by Shinelon on 2018/5/28.
 */
@WebServlet("/admin/deleteDishes.action")
public class DeleteDishesServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteDishesServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String dsIds = request.getParameter("dsIds");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(dsIds)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            List<Long> dsIdList = JSON.parseArray(dsIds, Long.class);

            for (Long dsId : dsIdList) {
                //删除餐品
                if (!dishesService.deleteBydsId(dsId)) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    return;
                }
            }

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.DELETE_DISHES_SUCCESS)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}