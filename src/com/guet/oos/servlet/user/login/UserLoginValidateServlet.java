package com.guet.oos.servlet.user.login;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.constant.UserExist;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.LoginDataDto;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
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
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 判断用户是否注册
 * <p>
 * Servlet implementation class UserLoginValidateServlet
 */
@WebServlet("/customer/LoginValidate.action")
public class UserLoginValidateServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserLoginValidateServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        String loginData = request.getParameter("mobileData");

        Writer out = response.getWriter();

        HttpSession httpSession = request.getSession();

        if (StringUtils.isEmpty(httpSession)) {

            //若Session失效则提示错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            //清除Session
            httpSession.removeAttribute(SessionKey.TEMPORARY_USER_INFO);
            httpSession.removeAttribute(SessionKey.SHOP_CART);
            httpSession.removeAttribute(SessionKey.USER);
            httpSession.removeAttribute(SessionKey.USER_FLAG);

            //判断请求参数是否为空
            if (StringUtils.isEmpty(loginData)) {

                //若为空返回错误提示信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

                //结束
                return;

            } else {

                LoginDataDto loginDataDto = JSONObject.parseObject(loginData, LoginDataDto.class);

                User user = userService.findByMobile(loginDataDto.getMobile());

                // 用户存在
                if (!StringUtils.isEmpty(user)) {

                    //返回真值
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

                } else {

                    // 用户不存在,则创建临时用户记录实体
                    TemporaryUserInfo userInfo = new TemporaryUserInfo();

                    userInfo.setAccount(loginDataDto.getMobile());

                    //默认将用户标记为非正式用户
                    httpSession.setAttribute(SessionKey.USER_FLAG, UserExist.USER_NOT_EXIST);

                    //将临时用户记录实体存入Session中
                    httpSession.setAttribute(SessionKey.TEMPORARY_USER_INFO, userInfo);

                    //穿件购物车对象
                    ShopCart temporaryShopCart = new ShopCart();

                    //设置购物的创建和更新时间
                    temporaryShopCart.setCreatorTime(sf.format(new Date()));
                    temporaryShopCart.setUpdateTime(sf.format(new Date()));

                    //将购物车实体存入Session中
                    httpSession.setAttribute(SessionKey.SHOP_CART, temporaryShopCart);

                    //返回假值
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFailEmptyContent()));
                }

            }

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
