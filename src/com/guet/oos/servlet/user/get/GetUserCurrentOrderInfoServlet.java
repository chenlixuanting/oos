package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Order;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.User;
import com.guet.oos.service.OrderItemService;
import com.guet.oos.service.OrderService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;
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

        Writer out = response.getWriter();

        //判断Session是否为空
        if (StringUtils.isEmpty(httpSession)) {

            //若为空则返回错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            User user = (User) httpSession.getAttribute(SessionKey.USER);

            //判断Session属性是否存在
            if (StringUtils.isEmpty(user)) {

                //不存在则返回错误信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.USER_INVALIDATE)));

                //结束
                return;

            } else {
                List<Order> orders = orderService.getUserCurrentOrderByUserId(user.getUsId());
                //判断查询结果是否为空
                if (StringUtils.isEmpty(orders)) {
                    //若为空则返回错信息
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    //结束
                    return;
                } else {

                    //将订单项封装如所属的订单中
                    for (Order order : orders) {

                        //根据订单ID查询订单项
                        List<OrderItem> orderItems = orderItemService.getOrderItemsByOrderId(order.getOrId());

                        //判断查询结果是否为空
                        if (StringUtils.isEmpty(orderItems)) {
                            //若查询结果为空
                            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                            //结束
                            return;
                        } else {
                            order.setOrderItems(orderItems);
                        }
                    }
                    //结果返回
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(orders)));
                }
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
