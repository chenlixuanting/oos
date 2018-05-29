package com.guet.oos.servlet.administrator.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
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
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 添加用户
 * Created by Shinelon on 2018/5/23.
 */
@WebServlet("/admin/addUser.action")
public class AddUserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    private ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddUserServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        String requestData = request.getParameter("requestData");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(requestData)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        }

        User user = JSONObject.parseObject(requestData, User.class);

        user.setCreatorTime(sf.format(new Date()));
        user.setUpdateTime(sf.format(new Date()));

        //将User保存到数据库中
        boolean result1 = userService.createUser(user);

        DeliveryAddress deliveryAddress = JSONObject.parseObject(requestData, DeliveryAddress.class);

        //通过mobile从数据库中获取新插入的User
        User userRecord = userService.findByMobile(user.getMobile());

        deliveryAddress.setUsId(userRecord.getUsId());
        deliveryAddress.setDefault(true);
        deliveryAddress.setCreateTime(sf.format(new Date()));
        deliveryAddress.setUpdateTime(sf.format(new Date()));
        deliveryAddress.setReceiverTime(sf.format(new Date()));

        //创建收货地址记录
        boolean result2 = deliveryAddressService.createDeliveryAddress(deliveryAddress);

        ShopCart shopCart = new ShopCart();

        shopCart.setUsId(userRecord.getUsId());
        shopCart.setCreatorTime(sf.format(new Date()));
        shopCart.setUpdateTime(sf.format(new Date()));

        //为用户创建购物车
        boolean result3 = shopCartService.createShopCart(shopCart);

        if (result1 && result2 && result3) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.CREATE_USER_SUCCESS)));
        } else {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.CREATE_USER_FAIL)));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}