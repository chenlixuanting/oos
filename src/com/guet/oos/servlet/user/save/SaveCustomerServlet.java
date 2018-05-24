package com.guet.oos.servlet.user.save;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.OrderItem;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;
import com.guet.oos.service.ShopCartService;
import com.guet.oos.service.UserService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;

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

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        //判断请求参数是否为空
        if (StringUtils.isEmpty(requestData)) {
            //请求参数为空
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            //结束
            return;
        }

        //判断Session是否超时
        if (StringUtils.isEmpty(httpSession)) {
            //Session超时
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));
            //结束
            return;
        }

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        String deliverName = requestDataJson.getString("deliverName");
        String password = requestDataJson.getString("password");
        String deliverSex = requestDataJson.getString("deliverSex");

        TemporaryUserInfo userInfo = (TemporaryUserInfo) httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO);

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
        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}