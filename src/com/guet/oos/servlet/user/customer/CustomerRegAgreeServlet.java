package com.guet.oos.servlet.user.customer;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.constant.ReturnMessage;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonEntityReturn;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.TemporaryUserInfo;
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
 * 保存临时用户的地址,收货人的电话,用户姓名,用户性别信息
 * <p>
 * Created by Shinelon on 2018/5/14.
 */
@WebServlet("/customer/CustomerRegAgree.action")
public class CustomerRegAgreeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public CustomerRegAgreeServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String customerData = request.getParameter("customerData");

        Writer out = response.getWriter();

        HttpSession httpSession = request.getSession();

        if (StringUtils.isEmpty(httpSession)) {

            //若Session失效则提示错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            //判断请求参数是否为空
            if (StringUtils.isEmpty(customerData)) {

                //若为空则提示信息
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.REQUEST_PARAMTER_EMPTY)));

                //结束
                return;

            } else {

                //将临时用户信息封装成对象
                TemporaryUserInfo temporaryUserInfo = (TemporaryUserInfo) JSONObject.parseObject(customerData, TemporaryUserInfo.class);

                TemporaryUserInfo userInfo = (TemporaryUserInfo) httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO);

                temporaryUserInfo.setAccount(userInfo.getAccount());

                //将temporaryUserInfo对象保存到Session中
                httpSession.setAttribute(SessionKey.TEMPORARY_USER_INFO, temporaryUserInfo);

                //成功返回
                out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

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
