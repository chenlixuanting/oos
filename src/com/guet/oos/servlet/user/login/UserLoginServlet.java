package com.guet.oos.servlet.user.login;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.JsonReturnCode;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.LoginDataDto;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
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

/**
 * Created by Shinelon on 2018/5/11.
 */
@WebServlet("/customer/UserLogin.action")
public class UserLoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    private ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserLoginServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        //清除Session
        httpSession.removeAttribute(SessionKey.TEMPORARY_USER_INFO);
        httpSession.removeAttribute(SessionKey.SHOP_CART);
        httpSession.removeAttribute(SessionKey.USER);
        httpSession.removeAttribute(SessionKey.USER_FLAG);

        String loginData = request.getParameter("loginData");

        LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

        User user = userService.findByMobile(loginDataDto.getMobile());

        if (user == null) {
            response.getWriter().write(JSONObject.toJSONString(JsonReturn.buildFail(JsonReturnCode.USER_IS_NOT_EXIST)));
            return;
        }

        //用户存在则继续判断密码
        if (!user.getPassword().equals(loginDataDto.getPassword())) {
            response.getWriter()
                    .append(JSONObject.toJSONString(JsonReturn.buildFail(JsonReturnCode.PASSWORD_ERROR)));

            //密码正确继续判断验证码
        } else if (!((String) request.getSession().getAttribute(
                SessionKey.VALIDATE_CODE)).equalsIgnoreCase((loginDataDto.getVerifyCode()))) {
            response.getWriter()
                    .append(JSONObject.toJSONString(JsonReturn.buildFail(JsonReturnCode.VERIFY_CODE_ERROR)));
        } else {

            //获取用户的默认送货地址
            DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());

            //将用户的的默认地址保存到Session中
            user.setDefaultDeliverAddress(deliveryAddress);

            //将user信息存入Session
            httpSession.setAttribute(SessionKey.USER, user);

            ShopCart shopCart = shopCartService.getShopCartByUserId(user.getUsId());

            //将shopcart保存到Session中
            httpSession.setAttribute(SessionKey.SHOP_CART, shopCart);

            //验证通过
            response.getWriter()
                    .append(JSONObject.toJSONString(JsonReturn.buildSuccessEmptyContent()));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}