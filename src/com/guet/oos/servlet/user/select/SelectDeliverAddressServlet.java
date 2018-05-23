package com.guet.oos.servlet.user.select;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/22.
 */
@WebServlet("/customer/SelectDeliverAddress.action")
public class SelectDeliverAddressServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectDeliverAddressServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String daId = request.getParameter("requestData");

        DeliveryAddress address = deliveryAddressService.findById(Long.valueOf(daId));

        HttpSession httpSession = request.getSession();

        User user = (User) httpSession.getAttribute(SessionKey.USER);

        user.setDefaultDeliverAddress(address);

        httpSession.setAttribute(SessionKey.USER, user);

        response.getWriter().write(JSONObject.toJSONString(JsonReturn.buildSuccessEmptyContent()));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}