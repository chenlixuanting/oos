package com.guet.oos.servlet.user;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;
import com.guet.oos.service.ShopCartService;
import com.guet.oos.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/17.
 */
@WebServlet("/customer/SaveCustomer.action")
public class SaveCustomerServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    private ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveCustomerServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String requestData = request.getParameter("requestData");

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        HttpSession httpSession = request.getSession();

        Object obj = httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO);

        //判断TemporaryUserInfo是否被清除
        if (obj == null) {
            response.getWriter().write(JsonReturn.buildFailEmptyContent().toString());
            return;
        }

        TemporaryUserInfo userInfo = (TemporaryUserInfo) httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO);

        String deliverName = requestDataJson.getString("deliverName");
        String password = requestDataJson.getString("password");
        String deliverSex = requestDataJson.getString("deliverSex");

        //设置临时用户的收货人,密码,收货时间
        userInfo.setDeliverName(deliverName);
        userInfo.setPassword(password);
        userInfo.setDeliverSex(deliverSex);

        //将tempUserInfo封装成User并进行注册
        userService.transformToFormalUser(userInfo);

        //通过mobile查找唯一用户
        User user = userService.findByMobile(userInfo.getAccount());

        //将tempUserInfo中的地址提取封装成DeliverAddress并进行存储
        deliveryAddressService.pickUpDeliveryAddress(userInfo, user);

        //通过usId查找该用户默认地址
        DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());

        user.setDefaultDeliverAddress(deliveryAddress);

        //将temporaryUserInfo从Session中移除
        httpSession.removeAttribute(SessionKey.TEMPORARY_USER_INFO);

        //将user保存到Session中
        httpSession.setAttribute(SessionKey.USER, user);

        //给购物车中usId赋值
        ShopCart shopCart = (ShopCart) httpSession.getAttribute(SessionKey.SHOP_CART);

        shopCart.setUsId(user.getUsId());

        //为新用户创建购物车
        shopCartService.createShopCart(shopCart);

        //通过usId查找唯一的购物车
        ShopCart formalShopCart = shopCartService.getShopCartByUserId(user.getUsId());

        //为订单项赋值上购物车id
        for (OrderItem oi : shopCart.getOrderItems()) {
            oi.setScId(formalShopCart.getScId());
        }

        //重新保存shopCart
        httpSession.setAttribute(SessionKey.SHOP_CART, shopCart);

        //成功返回
        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}