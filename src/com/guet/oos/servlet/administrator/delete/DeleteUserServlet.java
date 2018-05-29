package com.guet.oos.servlet.administrator.delete;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.Order;
import com.guet.oos.po.ShopCart;
import com.guet.oos.service.*;
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
 * 删除用户
 * Created by Shinelon on 2018/5/25.
 */
@WebServlet("/admin/deleteUser.action")
public class DeleteUserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    private OrderItemService orderItemService = ServiceFactory.getOrderItemServiceInstance();

    private CommentService commentService = ServiceFactory.getCommentServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteUserServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String idStr = request.getParameter("usIds");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(idStr)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            List<Long> usIdList = JSON.parseArray(idStr, Long.class);

            for (Long usId : usIdList) {

                //删除用户
                userService.deleteById(usId);

                //删除购物车
                shopCartService.deleteByUserId(usId);

                //删除送货地址
                deliveryAddressService.deleteByUsId(usId);

                //获取该用户的所有订单
                List<Order> orders = orderService.getOrdersByUsId(usId);

                for (Order order : orders) {
                    //删除订单项
                    orderItemService.deleteByOrId(order.getOrId());
                    //删除订单
                    orderService.deleteByOrId(order.getOrId());
                }

                //删除该用户的所有评论
                commentService.deleteByUsId(usId);
            }

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.DELETE_USER_SUCCESS)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}