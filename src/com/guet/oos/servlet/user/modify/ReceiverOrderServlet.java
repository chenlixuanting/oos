package com.guet.oos.servlet.user.modify;

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
 * 用户确认收货
 * <p>
 * Created by Shinelon on 2018/5/28.
 */
@WebServlet("/customer/receiverOrder.action")
public class ReceiverOrderServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReceiverOrderServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String orId = request.getParameter("orId");

        Writer out = response.getWriter();

        boolean flag = orderService.confirmedReceiver(orId);

        if (flag) {

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.RECEIVER_ORDER_SUCCESS)));

        } else {

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.RECEIVER_ORDER_FIAL)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}