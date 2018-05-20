package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.po.ShopCart;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/17.
 */
@WebServlet("/customer/getShopCartInfo.action")
public class GetShopCartInfoServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetShopCartInfoServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ShopCart shopCart = (ShopCart) request.getSession().getAttribute(SessionKey.SHOP_CART);

        response.getWriter().write(JSONObject.toJSONString(shopCart));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}