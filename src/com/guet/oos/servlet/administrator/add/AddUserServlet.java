package com.guet.oos.servlet.administrator.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Shinelon on 2018/5/23.
 */
@WebServlet("/admin/addUser.action")
public class AddUserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private UserService userService = ServiceFactory.getUserServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddUserServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String reuqestData = request.getParameter("requestData");

        //User{usId=0, mobile='18477062310', password='1q23123', username='安慰道',
        // sex='女士', defaultDeliverAddress=null, deliverAddress='哦派送的那么', creatorTime='null', updateTime='null'}
        User user = JSONObject.parseObject(reuqestData, User.class);

        DeliveryAddress address = new DeliveryAddress();

        System.out.println(user.toString());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}