package com.guet.oos.filter;

import com.guet.oos.constant.SessionKey;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * 用户登录拦截器
 * <p>
 * Servlet Filter implementation class EncodingFilter
 */
public class UserLoginFilter implements Filter {

    /**
     * Default constructor.
     */
    public UserLoginFilter() {
    }

    /**
     * @see Filter#destroy()
     */
    public void destroy() {
    }

    /**
     * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
     */
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;

        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        HttpSession httpSession = httpServletRequest.getSession();

        if ((httpSession.getAttribute(SessionKey.TEMPORARY_USER_INFO) != null) || (httpSession.getAttribute(SessionKey.USER) != null)) {
            chain.doFilter(request, response);
        } else {
            ((HttpServletResponse) response).sendRedirect("orderLogin.jsp");
        }

    }

    /**
     * @see Filter#init(FilterConfig)
     */
    public void init(FilterConfig fConfig) throws ServletException {
    }

}