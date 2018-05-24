package com.guet.oos.servlet.user.query;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
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

@WebServlet("/customer/queryByDishesId.action")
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

        String strId = request.getParameter("dsId");

        Writer out = response.getWriter();

        //判断从requset中获取到的参数是否为空
        if (StringUtils.isEmpty(strId)) {

            //若为空则返回错误提示信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

        } else {

            //若参数不为空,则转成Long类型
            Long dsId = Long.valueOf(strId);

            //查询数据库
            Dishes dishes = dishesService.queryById(dsId);

            //判断查询结果是否为空
            if (StringUtils.isEmpty(dishes)) {

                //为空则返回提示信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.DISHES_IS_NOT_EXIST)));

            } else {

                //不为空，则返回查询结果
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(dishes)));

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