package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSON;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.fields.DishesFields;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/customer/queryDishesByDishesType.action")
public class QueryDishesByDishesTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryDishesByDishesTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String dishesType = request.getParameter("dishesType");

        List<Dishes> dishesList = dishesService.getSpecifyColumnSpecifyWord(DishesFields.DISHES_TYPE, dishesType);

        String mealTypeData = JSON.toJSONString(dishesList);

        response.getWriter().write(mealTypeData);

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}