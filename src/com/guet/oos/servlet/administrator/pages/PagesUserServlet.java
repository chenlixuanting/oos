package com.guet.oos.servlet.administrator.pages;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.Page;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;
import com.guet.oos.service.UserService;
import com.guet.oos.utils.PageUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/21.
 */
@WebServlet("/admin/pagesUser.action")
public class PagesUserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public PagesUserServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String aoData = request.getParameter("aoData");

        //解析分页数据，并封装成Page实体
        Page pageData = PageUtils.parse(aoData);

        int iTotalRecords = userService.getAllCount();

        List<User> users = userService.getList(pageData.getiDisplayStart(), pageData.getiDisplayLength());

        for (User u : users) {
            DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(u.getUsId());
            u.setDeliverAddress(deliveryAddress.getReceiverAddress());
        }

        JSONObject data = PageUtils.encPageJsonObj(pageData.getsEcho(), iTotalRecords, iTotalRecords, users);

        response.getWriter().write(JSONObject.toJSONString(data));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}