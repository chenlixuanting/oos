package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;
import com.guet.oos.service.UserService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/29.
 */
@WebServlet("/admin/queryByUserId.action")
public class QueryByUserId extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryByUserId() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String usIdStr = request.getParameter("usId");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(usIdStr)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;
        } else {

            Long usId = Long.valueOf(usIdStr);

            User user = userService.findByUserId(usId);

            if (StringUtils.isEmpty(user)) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.USER_IS_NOT_EXIST)));
                return;
            } else {
                DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());

                user.setDefaultDeliverAddress(deliveryAddress);

                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(user)));
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