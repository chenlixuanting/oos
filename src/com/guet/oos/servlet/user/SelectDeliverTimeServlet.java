package com.guet.oos.servlet.user;

import com.alibaba.fastjson.JSONReader;
import com.guet.oos.constant.SessionKey;
import com.guet.oos.dto.JsonReturn;
import com.guet.oos.dto.TemporaryUserInfo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 保存用户所选择的发货的时间
 * Created by Shinelon on 2018/5/14.
 */
@WebServlet("/customer/SelectDeliverTime.action")
public class SelectDeliverTimeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectDeliverTimeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String timeStr = request.getParameter("deliverTime");

        HttpSession session = request.getSession();

        TemporaryUserInfo temporaryUserInfo = (TemporaryUserInfo) session.getAttribute(SessionKey.TEMPORARY_USER_INFO);

        temporaryUserInfo.setDeliverTime(timeStr);

        session.setAttribute(SessionKey.TEMPORARY_USER_INFO, temporaryUserInfo);

        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}