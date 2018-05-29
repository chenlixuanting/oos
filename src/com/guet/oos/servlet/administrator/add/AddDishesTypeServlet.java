package com.guet.oos.servlet.administrator.add;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.po.DishesType;
import com.guet.oos.service.DishesTypeService;
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
 * 添加餐品种类
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

        Writer out = response.getWriter();

        String dishesTypeDataJson = request.getParameter("dishesTypeData");

        if (StringUtils.isEmpty(dishesTypeDataJson)) {

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;

        } else {

            DishesType dishesType = JSONObject.parseObject(dishesTypeDataJson, DishesType.class);

            dishesType.setCreateTime(sf.format(new Date()));
            dishesType.setUpdateTime(sf.format(new Date()));

            boolean flag = dishesTypeService.createDishesType(dishesType);

            if (flag) {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.CREATE_DISHES_TYPE_SUCCESS)));
            } else {
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.CREATE_DISHES_TYPE_FAIL)));
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