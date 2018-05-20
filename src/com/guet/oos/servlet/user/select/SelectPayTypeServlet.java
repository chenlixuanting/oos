package com.guet.oos.servlet.user.select;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.po.ShopCart;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/18.
 */
@WebServlet("/customer/SelectPayType.action")
public class SelectPayTypeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectPayTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String requestData = request.getParameter("requestData");

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        HttpSession httpSession = request.getSession();

        ShopCart shopCart = (ShopCart) httpSession.getAttribute(SessionKey.SHOP_CART);

        //获取付款方式
        shopCart.setPayType(requestDataJson.getString("payType"));

        httpSession.setAttribute(SessionKey.SHOP_CART, shopCart);

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}