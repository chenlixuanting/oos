package com.guet.oos.servlet.user.shopcart;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.ShopCart;
import com.guet.oos.service.DishesService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Shinelon on 2018/5/15.
 */
@WebServlet("/customer/ShopCart.action")
public class ShopCartSerlvet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShopCartSerlvet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        //获取Session
        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        //获取订单项信息
        String orderItemStr = request.getParameter("orderItem");

        JSONObject orderItemJson = JSONObject.parseObject(orderItemStr);

        long goodId = Long.valueOf(orderItemJson.getString("dishesId"));
        long quantity = Long.valueOf(orderItemJson.getString("quantity"));

        //判断是否存在购物车
        ShopCart customerShopCart = (ShopCart) httpSession.getAttribute(SessionKey.SHOP_CART);

        //通过dishesId查找菜品
        Dishes dishes = dishesService.queryById(goodId);

        OrderItem orderItem = new OrderItem();

        //设置菜品ID
        orderItem.setDsId(dishes.getDsId());

        //设置菜品名称
        orderItem.setDishesName(dishes.getDishesName());

        //设置菜品单价
        orderItem.setPrice(dishes.getPrice());

        //设置菜品数量
        orderItem.setQuantity(quantity);

        //设置菜品开销
        orderItem.setProductCost(orderItem.calcProductCost());

        //设置订单项创建时间
        orderItem.setCreatorTime(sf.format(new Date()));

        //设置订单项更新时间
        orderItem.setUpdateTime(sf.format(new Date()));

        //将商品项添加到购物车中
        customerShopCart.addOrderItem(orderItem);

        //更新购物车中的商品信息
        httpSession.setAttribute(SessionKey.SHOP_CART, customerShopCart);

        //返回成功购买的标志
        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}