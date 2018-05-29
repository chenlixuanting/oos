package com.guet.oos.servlet.administrator.add;

/**
 * Created by Shinelon on 2018/4/30.
 */

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.MealTypeService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 添加餐点类型
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

        String addData = request.getParameter("addData");

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(addData)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;

        } else {

            JSONObject mealTypeJson = JSONObject.parseObject(addData);

            MealType mealType = JSONObject.parseObject(mealTypeJson.toJSONString(), MealType.class);

            mealType.setCreateTime(sf.format(new Date()));
            mealType.setUpdateTime(sf.format(new Date()));

            boolean flag = MealTypeService.createMealType(mealType);

            if (flag) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.MEALTYPE_ADD_SUCCESS)));
            } else {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.MEALTYPE_ADD_FAIL)));
            }

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
