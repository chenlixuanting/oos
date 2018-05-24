package com.guet.oos.servlet.user.login;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.JsonReturnCode;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.constant.UserExist;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.LoginDataDto;
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
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;

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

        String loginData = request.getParameter("loginData");

        Writer out = response.getWriter();

        //获取Session
        HttpSession httpSession = request.getSession();

        String verifyCode = (String) httpSession.getAttribute(SessionKey.VALIDATE_CODE);

        //判断请求参数是否为空
        if (StringUtils.isEmpty(verifyCode)) {

            //若为空则返回提示信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));

            //结束
            return;
        }

        //判断请求参数是否为空
        if (StringUtils.isEmpty(loginData)) {

            //为空则返回提示新
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

        } else {


            //封装成json格式数据
            LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

            User user = userService.findByMobile(loginDataDto.getMobile());

            //判断user是否为空
            if (StringUtils.isEmpty(user)) {

                //若为空则返回提示信息
                response.getWriter().write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.USER_ACCOUNT_IS_NOT_EXIST)));

                //结束
                return;

            } else {

                //用户存在则继续判断密码
                if (!user.getPassword().equals(loginDataDto.getPassword())) {

                    //提示密码输入错误
                    response.getWriter()
                            .append(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.PASSWORD_ERROR)));

                    //密码正确继续判断验证码
                } else if (!verifyCode.equalsIgnoreCase((loginDataDto.getVerifyCode()))) {

                    //提示验证码输入错误
                    response.getWriter()
                            .append(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.VERIFYCODE_ERROR)));

                } else {

                    //将用户标记为正式用户
                    httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_EXIST);

                    //获取用户的默认送货地址
                    DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());

                    //获取用户的购物车
                    ShopCart shopCart = shopCartService.getShopCartByUserId(user.getUsId());

                    //判断从数据库中获取到的购物车和默认送货地址是否为空
                    if (StringUtils.isEmpty(deliveryAddress) || StringUtils.isEmpty(shopCart)) {

                        //若为空则提示错误信息
                        out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));

                        //结束
                        return;

                    } else {

                        //将用户的的默认地址保存到Session中
                        user.setDefaultDeliverAddress(deliveryAddress);

                        //将user信息存入Session
                        httpSession.setAttribute(SessionKey.USER, user);

                        //将shopcart保存到Session中
                        httpSession.setAttribute(SessionKey.SHOP_CART, shopCart);

                        //验证通过
                        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

                    }
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