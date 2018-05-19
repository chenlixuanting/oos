package com.guet.oos.servlet.user;

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
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String timeStr = request.getParameter("deliverTime");

        HttpSession session = request.getSession();

        Object temporaryUserInfo = session.getAttribute(SessionKey.TEMPORARY_USER_INFO);

        if (temporaryUserInfo == null) {
            response.getWriter().write(JsonReturn.buildFailEmptyContent().toString());
            return;
        }

        ((TemporaryUserInfo) temporaryUserInfo).setDeliverTime(timeStr);

        session.setAttribute(SessionKey.TEMPORARY_USER_INFO, temporaryUserInfo);

        response.getWriter().write(JsonReturn.buildSuccessEmptyContent().toString());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}