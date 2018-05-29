package com.guet.oos.servlet.administrator.modify;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;
import com.guet.oos.utils.FileUploadUtils;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

/**
 * Created by Shinelon on 2018/5/29.
 */
@WebServlet("/admin/editDishes.action")
public class ModifyDishesManagementServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private DishesService dishesService = ServiceFactory.getDishesServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifyDishesManagementServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //解析文件请求返回mao结合
        Map<String, String[]> map = FileUploadUtils.parseUploadRequest(request);

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        Writer out = response.getWriter();

        HttpSession httpSession = request.getSession();

        Administrator administrator = (Administrator) httpSession.getAttribute(SessionKey.ADMINISTRATOR);

        Dishes dishes = new Dishes();

        dishes.setDsId(Long.valueOf(map.get("editDsId")[0]));

        dishes.setPrice(Double.valueOf(map.get("editPrice")[0]));

        dishes.setStock(Long.valueOf(map.get("editStock")[0]));

        dishes.setDishesType(map.get("editDishesType")[0]);

        dishes.setDishesName(map.get("editDishesName")[0]);

        dishes.setDescribe(map.get("editDishesInfo")[0]);

        if (!StringUtils.isEmpty(map.get("picRandName"))) {
            //新的图片地址
            dishes.setPicAddress(map.get("picRandName")[0]);
        } else {
            //原来的 图片地址
            Dishes temp = dishesService.queryById(dishes.getDsId());
            dishes.setPicAddress(temp.getPicAddress());
        }

        dishes.setUpdateTime(sf.format(new Date()));

        boolean flag = dishesService.updateDishes(dishes);

        if (flag) {
            httpSession.setAttribute(SessionKey.TIP, ReturnMessage.EDIT_DISHES_SUCCESS);
        } else {
            httpSession.setAttribute(SessionKey.TIP, ReturnMessage.EDIT_DISHES_FAIL);
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
