package com.guet.oos.servlet.administrator.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.service.OrderService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/28.
 */
@WebServlet("/admin/confirmedDelivery.action")
public class confirmedDeliveryServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public confirmedDeliveryServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Writer out = response.getWriter();

        String orId = request.getParameter("orId");

//        boolean flag = orderService.confirmedOrder(orId);
//
//        if (flag) {
//            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.CONFIRM_ORDER_SUCCESS)));
//        } else {
//            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.CONFIRM_ORDER_FAIL)));
//        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
