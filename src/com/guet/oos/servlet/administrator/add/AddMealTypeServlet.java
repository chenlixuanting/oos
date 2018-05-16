package com.guet.oos.servlet.administrator.add;

/**
 * Created by Shinelon on 2018/4/30.
 */

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.MealTypeService;

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
@WebServlet("/admin/addMealType.action")
public class AddMealTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private MealTypeService MealTypeService = ServiceFactory.getMealTypeServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMealTypeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        String addData = request.getParameter("addData");

        JSONObject jsonObject = JSONObject.parseObject(addData);

        MealType mealType = new MealType();

        String mealTypeName = jsonObject.getString("mealTypeName");
        String startTime = jsonObject.getString("startTime");
        String endTime = jsonObject.getString("endTime");
        Long mgId = Long.valueOf(jsonObject.getString("mgId"));

        mealType.setMealTypeName(mealTypeName);
        mealType.setStartTime(startTime);
        mealType.setEndTime(endTime);
        mealType.setMgId(mgId);
        mealType.setCreateTime(sf.format(new Date()));
        mealType.setUpdateTime(sf.format(new Date()));

        boolean flag = MealTypeService.createMealType(mealType);

        if (flag) {
            response.getWriter().write(JsonReturn.buildFail("餐点创建失败").toString());
        } else {
            response.getWriter().write(JsonReturn.buildSuccess("餐点创建失成功").toString());
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
