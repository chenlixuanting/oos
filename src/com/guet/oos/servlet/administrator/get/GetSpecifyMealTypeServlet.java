package com.guet.oos.servlet.administrator.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.MealTypeService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/26.
 */
@WebServlet("/admin/getSpecifyMealType.action")
public class GetSpecifyMealTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private MealTypeService mealTypeService = ServiceFactory.getMealTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetSpecifyMealTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String mtIdStr = request.getParameter("mtId");

        Writer out = response.getWriter();

        long mtId = Long.valueOf(mtIdStr);

        MealType mealType = mealTypeService.getByMtId(mtId);

        out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(mealType)));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}