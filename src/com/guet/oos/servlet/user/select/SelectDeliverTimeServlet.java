package com.guet.oos.servlet.user.select;

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

        Writer out = response.getWriter();

        if (StringUtils.isEmpty(timeStr)) {

            //若Session失效则提示错误信息
            out.write(JSONObject.toJSONString(JsonEntityReturn.buildFail(ReturnMessage.SESSION_INVALIDATE)));

            //结束
            return;

        } else {

            TemporaryUserInfo temporaryUserInfo = (TemporaryUserInfo) session.getAttribute(SessionKey.TEMPORARY_USER_INFO);

            temporaryUserInfo.setDeliverTime(timeStr);

            session.setAttribute(SessionKey.TEMPORARY_USER_INFO, temporaryUserInfo);

            out.write(JSONObject.toJSONString(JsonEntityReturn.buildSuccessEmptyContent()));

        }

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}