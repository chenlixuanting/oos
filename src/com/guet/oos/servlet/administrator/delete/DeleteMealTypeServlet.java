package com.guet.oos.servlet.administrator.delete;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.DishesService;
import com.guet.oos.service.DishesTypeService;
import com.guet.oos.service.MealTypeService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;
import java.util.List;

/**
 * 删除餐点类型
 * Created by Shinelon on 2018/5/26.
 */
@WebServlet("/admin/deleteMealType.action")
public class DeleteMealTypeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private MealTypeService mealTypeService = ServiceFactory.getMealTypeServiceInstance();

    private DishesTypeService dishesTypeService = ServiceFactory.getDishesTypeServiceInstance();

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteMealTypeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String mtIds = request.getParameter("mtIds");

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(mtIds)) {
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));
            return;

        } else {

            List<Long> mtIdList = JSON.parseArray(mtIds, Long.class);

            for (long mtId : mtIdList) {

                //通过mtId获取餐点类型
                MealType mealType = mealTypeService.getByMtId(mtId);

                //通过餐点类型名获取餐品种类
                List<String> dishesType = dishesTypeService.getDishesTypeByMealTypeName(mealType.getMealTypeName());

                //判断餐品类型是否为空
                if (StringUtils.isEmpty(mealType)) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    return;
                }

                //级联删除餐品
                for (String dts : dishesType) {
                    if (!dishesService.deleteByDishesType(dts)) {
                        out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                        return;
                    }
                }

                //级联删除餐品种类
                if (!dishesTypeService.deleteByMealTypeName(mealType.getMealTypeName())) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.DELETE_DISHES_TYPE_FAIL)));
                    return;
                }

                //删除餐点
                if (!mealTypeService.deleteByMtId(mtId)) {
                    out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SERVER_INNER_ERROR)));
                    return;
                }

            }

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(ReturnMessage.DELETE_MEAL_TYPE_SUCCESS)));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}