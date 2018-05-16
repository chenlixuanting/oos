package com.guet.oos.servlet.administrator.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin/queryByDishesId.action")
public class QueryByDishesId extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public QueryByDishesId() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String strId = request.getParameter("id");

        Long dsId = Long.valueOf(strId);

        Dishes dishes = dishesService.queryById(dsId);

        response.getWriter().write(JSONObject.toJSONString(dishes));
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}