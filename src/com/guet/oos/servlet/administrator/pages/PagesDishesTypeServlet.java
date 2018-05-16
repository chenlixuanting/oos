package com.guet.oos.servlet.administrator.pages;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DishesType;
import com.guet.oos.dto.Page;
import com.guet.oos.service.DishesTypeService;
import com.guet.oos.utils.PageUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * Servlet implementation class Template
 */
@WebServlet("/admin/pagesDishesType.action")
public class PagesDishesTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesTypeService dishesTypeService = ServiceFactory.getDishesTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public PagesDishesTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String aoData = request.getParameter("aoData");

        //解析分页数据，并封装成Page实体
        Page pageData = PageUtils.parse(aoData);

        int iTotalRecords = dishesTypeService.getAllCount();

        List<DishesType> list = dishesTypeService.getList(pageData.getiDisplayStart(), pageData.getiDisplayLength());

        JSONObject data = PageUtils.encPageJsonObj(pageData.getsEcho(), iTotalRecords, iTotalRecords, list);

        response.getWriter().write(JSONObject.toJSONString(data));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}