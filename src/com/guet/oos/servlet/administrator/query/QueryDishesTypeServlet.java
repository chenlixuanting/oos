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


@WebServlet("/admin/queryDishesType.action")
public class QueryDishesTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesTypeService dishesTypeService = ServiceFactory.getDishesTypeServiceInstance();

    public QueryDishesTypeServlet() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<String> dishesTypeList = dishesTypeService.getSpecifyColumn(DishesTypeFields.DISHES_TYPE_NAME);

        String mealTypeData = JSON.toJSONString(dishesTypeList);

        response.getWriter().write(mealTypeData);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}