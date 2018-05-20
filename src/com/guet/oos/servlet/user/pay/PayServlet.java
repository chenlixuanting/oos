package com.guet.oos.servlet.user.pay;

import com.guet.oos.constant.*;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Order;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
import com.guet.oos.service.OrderItemService;
import com.guet.oos.service.OrderService;
import com.guet.oos.service.ShopCartService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by Shinelon on 2018/5/18.
 */
@WebServlet("/customer/Pay.action")
public class PayServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    private OrderItemService orderItemService = ServiceFactory.getOrderItemServiceInstance();

    private ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public PayServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        HttpSession httpSession = request.getSession();

        ShopCart shopCart = (ShopCart) httpSession.getAttribute(SessionKey.SHOP_CART);

        User user = (User) httpSession.getAttribute(SessionKey.USER);

        Order order = new Order();

        String orId = UUID.randomUUID().toString();

        //手动维护order主键
        order.setOrId(orId);
        order.setUsId(user.getUsId());
        order.setDaId(user.getDefaultDeliverAddress().getDaId());
        order.setTotalCost(shopCart.getTotalCost());
        order.setProductAmount(shopCart.getProductAmount());
        order.setDeliverCost(shopCart.getDeliverCost());
        order.setProductCost(shopCart.getProductCost());
        order.setPayType(shopCart.getPayType());
        order.setOrderStatus(OrderStatus.UNCONFIRMEED);
        order.setCreatorTime(sf.format(new Date()));
        order.setUpdateTime(sf.format(new Date()));

        //保存order到数据库中
        orderService.createOrder(order);

        //获取shopcart中订单项
        List<OrderItem> orderItems = shopCart.getOrderItems();

        //循环赋予orderId的值，并将scId值-1，并保存到数据库
        for (OrderItem oi : orderItems) {
            oi.setOrId(orId);
            oi.setScId(ShopCartConstant.PURCHASED);
            orderItemService.createOrderItem(oi);
        }

        //销毁Session中shopCart
//        httpSession.removeAttribute(SessionKey.SHOP_CART);
        ShopCart newShopCart = shopCartService.getShopCartByUserId(user.getUsId());
        httpSession.setAttribute(SessionKey.SHOP_CART, newShopCart);

        //更改用户标志
        httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_EXIST);

        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}