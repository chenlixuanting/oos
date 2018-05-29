package com.guet.oos.servlet.administrator.add;

import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;
import com.guet.oos.utils.FileUploadUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

/**
 * 添加餐品
 */
@WebServlet("/admin/addDishes.action")
public class AddDishesServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddDishesServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        /**
         * 一定要对新增餐品进行前端校验
         */

        //解析文件请求返回mao结合
        Map<String, String[]> map = FileUploadUtils.parseUploadRequest(request);

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        HttpSession httpSession = request.getSession();

        Administrator administrator = (Administrator) httpSession.getAttribute(SessionKey.ADMINISTRATOR);

        Dishes dishes = new Dishes();

        dishes.setMgId(administrator.getMgId());
        dishes.setPrice(Double.valueOf(map.get("addPrice")[0]));
        dishes.setStock(Long.valueOf(map.get("addStock")[0]));
        dishes.setDishesType(map.get("addDishesType")[0]);
        dishes.setDishesName(map.get("addDishesName")[0]);
        dishes.setDescribe(map.get("addDescribe")[0]);
        dishes.setPicAddress(map.get("picRandName")[0]);
        dishes.setCreateTime(sf.format(new Date()));
        dishes.setUpdateTime(sf.format(new Date()));

        boolean flag = dishesService.createDishes(dishes);

        if (flag) {
            httpSession.setAttribute(SessionKey.TIP, ReturnMessage.ADD_DISHES_SUCCESS);
        } else {
            httpSession.setAttribute(SessionKey.TIP, ReturnMessage.ADD_DISHES_FAIL);
        }

        response.sendRedirect(request.getContextPath() + "/admin/tip.jsp");

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}