package com.guet.oos.servlet.user.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
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
import java.io.IOException;
import java.io.Writer;
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

        String requestData = request.getParameter("requestData");

        Writer out = response.getWriter();

        JSONObject requestDataJson = JSONObject.parseObject(requestData);

        String cityName = requestDataJson.getString("cityName");
        String roadName = requestDataJson.getString("roadName");
        String addressDetial = requestDataJson.getString("addressDetial");
        String sex = requestDataJson.getString("sex");
        String username = requestDataJson.getString("username");
        String mobile = requestDataJson.getString("mobile");

        StringBuilder receiverAddress = new StringBuilder(cityName + " " + roadName +
                "(" + addressDetial + ")");

        User user = (User) request.getSession().getAttribute(SessionKey.USER);

        DeliveryAddress address = new DeliveryAddress();

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        DeliveryAddress temp = user.getDefaultDeliverAddress();

        address.setUsId(user.getUsId());
        address.setReceiverName(username);
        address.setReceiverMobile(mobile);
        address.setReceiverAddress(receiverAddress.toString());
        address.setReceiverTime(temp.getReceiverTime());
        address.setReceiverSex(sex);
        address.setDefault(false);
        address.setCreateTime(sf.format(new Date()));
        address.setUpdateTime(sf.format(new Date()));

        boolean flag = deliveryAddressService.createDeliveryAddress(address);

        if (flag) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));
        } else {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFailEmptyContent()));
        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}