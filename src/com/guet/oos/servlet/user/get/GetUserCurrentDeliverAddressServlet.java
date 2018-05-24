package com.guet.oos.servlet.user.get;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import org.springframework.util.StringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Writer;

/**
 * Created by Shinelon on 2018/5/24.
 */
@WebServlet("/customer/getUserCurrentDeliverAddress.action")
public class GetUserCurrentDeliverAddressServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserCurrentDeliverAddressServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession httpSession = request.getSession();

        Writer out = response.getWriter();

        //判断Session是否存在
        if (StringUtils.isEmpty(httpSession)) {

            //输出错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            User user = (User) httpSession.getAttribute(SessionKey.USER);

            DeliveryAddress deliveryAddress = user.getDefaultDeliverAddress();

            //判断Session属性是否为空
            if (StringUtils.isEmpty(user) || StringUtils.isEmpty(deliveryAddress)) {

                //若为空规则返回错误信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.USER_INVALIDATE)));

                //结束
                return;

            } else {

                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccess(deliveryAddress)));

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