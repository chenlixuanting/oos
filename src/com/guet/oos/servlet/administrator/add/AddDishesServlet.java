package com.guet.oos.servlet.administrator.add;

import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;
import com.guet.oos.utils.FileUploadUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@WebServlet("/admin/addDishes.action")
public class AddDishesServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddDishesServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //解析文件请求返回mao结合
        Map<String, String[]> map = FileUploadUtils.parseUploadRequest(request);

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        Dishes dishes = new Dishes();

        dishes.setMgId(Long.valueOf(map.get("mgId")[0]));
        dishes.setPrice(Double.valueOf(map.get("price")[0]));
        dishes.setStock(Long.valueOf(map.get("stock")[0]));
        dishes.setDishesType(map.get("dishesType")[0]);
        dishes.setDishesName(map.get("dishesName")[0]);
        dishes.setDescribe(map.get("describe")[0]);
        dishes.setPicAddress(map.get("picRandName")[0]);
        dishes.setCreateTime(sf.format(new Date()));
        dishes.setUpdateTime(sf.format(new Date()));

        boolean flag = dishesService.createDishes(dishes);

        response.sendRedirect(request.getContextPath()+"/admin/dishes-management.jsp");
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}