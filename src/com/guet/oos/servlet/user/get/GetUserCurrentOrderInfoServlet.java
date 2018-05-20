package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Order;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.User;
import com.guet.oos.service.OrderItemService;
import com.guet.oos.service.OrderService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/19.
 */
@WebServlet("/customer/getUserCurrentOrderInfo.action")
public class GetUserCurrentOrderInfoServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    private OrderItemService orderItemService = ServiceFactory.getOrderItemServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserCurrentOrderInfoServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        User user = (User) httpSession.getAttribute(SessionKey.USER);

        List<Order> orders = orderService.getUserCurrentOrderByUserId(user.getUsId());

        //将订单项封装如所属的订单中
        for (Order order : orders) {
            List<OrderItem> orderItems = orderItemService.getOrderItemsByOrderId(order.getOrId());
            order.setOrderItems(orderItems);
        }

        response.getWriter().write(JSONObject.toJSONString(orders));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}
