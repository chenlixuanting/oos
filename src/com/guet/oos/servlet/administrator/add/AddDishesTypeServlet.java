package com.guet.oos.servlet.administrator.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DishesType;
import com.guet.oos.service.DishesTypeService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Servlet implementation class Template
 */
@WebServlet("/admin/addDishesType.action")
public class AddDishesTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesTypeService dishesTypeService = ServiceFactory.getDishesTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddDishesTypeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        String addData = request.getParameter("addData");

        JSONObject addDataJson = JSONObject.parseObject(addData);

        DishesType dishesType = new DishesType();

        dishesType.setDishesTypeName(addDataJson.getString("dishesTypeName"));
        dishesType.setUpdateTime(sf.format(new Date()));
        dishesType.setCreateTime(sf.format(new Date()));
        dishesType.setMgId(Long.valueOf(addDataJson.getString("mgId")));
        dishesType.setMealTypeName(addDataJson.getString("mealTypeName"));

        boolean flag = dishesTypeService.createDishesType(dishesType);

        if (flag) {
            response.getWriter().write(JsonReturn.buildFail("菜品种类创建失败").toString());
        } else {
            response.getWriter().write(JsonReturn.buildFail("菜品种类创建失成功").toString());
        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}