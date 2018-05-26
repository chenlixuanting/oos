package com.guet.oos.servlet.user.pay;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.*;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.*;
import com.guet.oos.service.*;

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

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

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

        HttpSession httpSession = request.getSession();

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        ShopCart shopCart = (ShopCart) httpSession.getAttribute(SessionKey.SHOP_CART);

        User user = (User) httpSession.getAttribute(SessionKey.USER);

        DeliveryAddress deliveryAddress = user.getDefaultDeliverAddress();

        Order order = new Order();

        String orId = UUID.randomUUID().toString();

        //手动维护order主键
        order.setOrId(orId);

        //设置当前订单的用户ID
        order.setUsId(user.getUsId());

        //设置当前订单的总费用
        order.setTotalCost(shopCart.getTotalCost());

        //设置当前订单商品的总数量
        order.setProductAmount(shopCart.getProductAmount());

        //设置当前订单的运费
        order.setDeliverCost(shopCart.getDeliverCost());

        //设置当前订单商品的总支出
        order.setProductCost(shopCart.getProductCost());

        //设置当前订单的付款方式
        order.setPayType(shopCart.getPayType());

        //设置当前订单状态
        order.setOrderStatus(OrderStatus.UNCONFIRMEED);

        //设置当前订单的创建时间
        order.setCreatorTime(sf.format(new Date()));

        //设置当前订单的更新时间
        order.setUpdateTime(sf.format(new Date()));

        //设置收货时间
        order.setReceiverTime(deliveryAddress.getReceiverTime());

        //设置收货人姓名
        order.setReceiverName(deliveryAddress.getReceiverName());

        //设置收货人电话
        order.setReceiverMobile(deliveryAddress.getReceiverMobile());

        //设置收货人的地址
        order.setReceiverAddress(deliveryAddress.getReceiverAddress());

        //设置收货人的性别
        order.setReceiverSex(deliveryAddress.getReceiverSex());

        //设置用户姓名
        order.setUsername(user.getUsername());

        //保存order到数据库中
        orderService.createOrder(order);

        //获取shopcart中订单项
        List<OrderItem> orderItems = shopCart.getOrderItems();

        //循环赋予orderId的值，并将scId值-1，并保存到数据库
        for (OrderItem oi : orderItems) {

            oi.setOrId(orId);
            oi.setScId(ShopCartConstant.PURCHASED);
            orderItemService.createOrderItem(oi);

            //获取原库存
            long stock = dishesService.queryDishesStockByDishesId(oi.getDsId());

            //计算新库存
            long newStock = stock - oi.getQuantity();

            //获取订单项所属的餐品，将其减去相应的数量
            dishesService.updateDishesStoreByDishesId(oi.getDsId(), newStock);

        }

        //销毁Session中shopCart
        ShopCart newShopCart = shopCartService.getShopCartByUserId(user.getUsId());

        httpSession.setAttribute(SessionKey.SHOP_CART, newShopCart);

        //更改用户标志
        httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_EXIST);

        response.getWriter().write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}