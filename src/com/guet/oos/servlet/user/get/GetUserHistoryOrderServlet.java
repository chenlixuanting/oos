package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Order;
import com.guet.oos.po.User;
import com.guet.oos.service.OrderService;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/24.
 */
@WebServlet("/customer/getUserAllHistoryOrder.action")
public class GetUserHistoryOrderServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserHistoryOrderServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        //判断Session是否为空
        if (StringUtils.isEmpty(httpSession)) {

            //若为空则返回错误新
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            User user = (User) httpSession.getAttribute(SessionKey.USER);

            List<Order> orders = orderService.getUserAllHistoryOrder(user.getUsId());

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(orders)));

        }
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}