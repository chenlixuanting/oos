package com.guet.oos.servlet.user;

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
 * Created by Shinelon on 2018/5/20.
 */
@WebServlet("/customer/CustomerSelectDeliverTime.action")
public class CustomerSelectDeliverTimeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomerSelectDeliverTimeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String timeStr = request.getParameter("deliverTime");

        HttpSession session = request.getSession();

        User user = (User) session.getAttribute(SessionKey.USER);

        deliveryAddressService.userDefaultDeliverTime(user.getUsId(), timeStr);

        DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());

        user.setDefaultDeliverAddress(deliveryAddress);

        session.setAttribute(SessionKey.USER, user);

        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}