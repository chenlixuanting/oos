package com.guet.oos.servlet.user.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
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
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Shinelon on 2018/5/22.
 */
@WebServlet("/customer/AddUserDeliverAddress.action")
public class AddUserDeliverAddressServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddUserDeliverAddressServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        boolean flag = false;

        String requestData = request.getParameter("requestData");

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        String cityName = requestDataJson.getString("username");
        String roadName = requestDataJson.getString("mobile");
        String addressDetial = requestDataJson.getString("addressDetial");
        String sex = requestDataJson.getString("sex");
        String username = requestDataJson.getString("username");
        String mobile = requestDataJson.getString("mobile");

        StringBuilder receiverAddress = new StringBuilder(cityName + " " + roadName +
                "(" + addressDetial + ")" + " " + username + " " + sex + " " + mobile);

        User user = (User) request.getSession().getAttribute(SessionKey.USER);

        DeliveryAddress address = new DeliveryAddress();

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        DeliveryAddress temp = user.getDefaultDeliverAddress();

        address.setUsId(user.getUsId());
        address.setReceiverName(username);
        address.setReceiverMobile(mobile);
        address.setReceiverAddress(receiverAddress.toString());
        address.setReceiverTime(temp.getReceiverTime());
        address.setDefault(false);
        address.setCreateTime(sf.format(new Date()));
        address.setUpdateTime(sf.format(new Date()));

        flag = deliveryAddressService.createDeliveryAddress(address);

        if (flag) {
            response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
        } else {
            response.getWriter().append(JsonReturn.buildFailEmptyContent().toString());
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}