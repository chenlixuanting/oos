package com.guet.oos.servlet.administrator.delete;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.service.OrderItemService;
import com.guet.oos.service.OrderService;
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
 * 删除订单
 * Created by Shinelon on 2018/5/28.
 */
@WebServlet("/admin/deleteOrder.action")
public class DeleteOrderServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    private OrderItemService orderItemService = ServiceFactory.getOrderItemServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteOrderServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String orIds = request.getParameter("orIds");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(orIds)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            List<String> orIdList = JSON.parseArray(orIds, String.class);

            for (String orId : orIdList) {

                //删除餐点并且级联删除订单项
                if (!orderService.deleteByOrId(orId) || !orderItemService.deleteByOrId(orId)) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    return;
                }

            }

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.DELETE_ORDER_SUCCESS)));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}