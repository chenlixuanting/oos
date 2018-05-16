package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSON;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.fields.DishesTypeFields;
import com.guet.oos.service.DishesTypeService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * 通过餐点类型查询菜品类型
 */
@WebServlet("/customer/queryDishTypeByMealType.action")
public class QueryDishTypeByMealTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesTypeService dishesTypeService = ServiceFactory.getDishesTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryDishTypeByMealTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String mealType = request.getParameter("mealType");

        List<String> dishesTypeList = null;

        dishesTypeList = dishesTypeService.getSpecifyColumnSpecifyValue(
                DishesTypeFields.DISHES_TYPE_NAME, DishesTypeFields.MEAL_TYPE_NAME, mealType);

        String dishesTypeData = JSON.toJSONString(dishesTypeList);

        response.getWriter().write(dishesTypeData);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}