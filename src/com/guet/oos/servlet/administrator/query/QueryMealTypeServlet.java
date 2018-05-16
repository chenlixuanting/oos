package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSON;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.fields.MealTypeFields;
import com.guet.oos.service.MealTypeService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * 请求获取餐点类型名称
 * Created by Shinelon on 2018/5/1.
 */
@WebServlet("/admin/queryMealType.action")
public class QueryMealTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private MealTypeService mealTypeService = ServiceFactory.getMealTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryMealTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        List<String> mealTypeList = mealTypeService.getSecifyColumn(MealTypeFields.MEAL_TYPE_NAME);

        String mealTypeData = JSON.toJSONString(mealTypeList);

        response.getWriter().write(mealTypeData);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}