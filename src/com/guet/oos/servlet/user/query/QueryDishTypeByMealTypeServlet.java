package com.guet.oos.servlet.user.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.fields.DishesTypeFields;
import com.guet.oos.service.DishesTypeService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
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

        Writer out = response.getWriter();

        //判断从request中获取到的参数是否为空
        if (StringUtils.isEmpty(mealType)) {

            //为空返回服务器错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

        } else {

            //不为空则进行数据库查询
            List<String> dishesTypeList = dishesTypeList = dishesTypeService.getSpecifyColumnSpecifyValue(
                    DishesTypeFields.DISHES_TYPE_NAME, DishesTypeFields.MEAL_TYPE_NAME, mealType);

            //判断查询结果是否为空
            if (StringUtils.isEmpty(dishesTypeList)) {

                //查询结果为空则返回空的提示信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.MEAL_TYPE_EMPTY)));

            } else {

                //返回查询结果
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(dishesTypeList)));
            }

        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}