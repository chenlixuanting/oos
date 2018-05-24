package com.guet.oos.servlet.user.query;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.fields.DishesFields;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;
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

        Writer out = response.getWriter();

        //判断从request中获取到的dishesType是否为null
        if (StringUtils.isEmpty(dishesType)) {

            //若为null返回错误提示信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

        } else {

            //不为null则进行数据库查询
            List<Dishes> dishesList = dishesService.getSpecifyColumnSpecifyWord(DishesFields.DISHES_TYPE, dishesType);

            //判断查询结果是否为null
            if (StringUtils.isEmpty(dishesList)) {

                //若为空则返回错误提示信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.DISHES_TYPE_EMPTY)));

            } else {

                //不为空则将查询结果返回
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(dishesList)));

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