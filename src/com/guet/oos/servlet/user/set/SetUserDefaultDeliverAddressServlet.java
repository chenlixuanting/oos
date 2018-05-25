package com.guet.oos.servlet.user.set;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
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
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/23.
 */
@WebServlet("/customer/SetUserDefaultDeliverAddress.action")
public class SetUserDefaultDeliverAddressServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SetUserDefaultDeliverAddressServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String dsIdStr = request.getParameter("requestData");

        long daId = Long.valueOf(dsIdStr);

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        User user = (User) httpSession.getAttribute(SessionKey.USER);

        //更新数据库
        deliveryAddressService.setUserDefaultDeliverAddress(user.getUsId(), daId);

        DeliveryAddress address = user.getDefaultDeliverAddress();

        DeliveryAddress newAddress = deliveryAddressService.findById(address.getDaId());

        //实时更新Session中的deliverAddress
        user.setDefaultDeliverAddress(newAddress);

        httpSession.setAttribute(SessionKey.USER, user);

        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}