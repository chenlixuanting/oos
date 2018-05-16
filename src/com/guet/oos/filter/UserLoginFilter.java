package com.guet.oos.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/**
 * 用户登录拦截器
 * <p>
 * Servlet Filter implementation class EncodingFilter
 */
//@WebFilter("/UserLoginFilter")
//public class UserLoginFilter implements Filter {
//
//    /**
//     * Default constructor.
//     */
//    public UserLoginFilter() {
//    }
//
//    /**
//     * @see Filter#destroy()
//     */
//    public void destroy() {
//    }
//
//    /**
//     * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
//     */
//    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
//            throws IOException, ServletException {
//
//        request.setCharacterEncoding("UTF-8");
//
//        chain.doFilter(request, response); // 放行
//
//        response.setCharacterEncoding("UTF-8");
//    }
//
//    /**
//     * @see Filter#init(FilterConfig)
//     */
//    public void init(FilterConfig fConfig) throws ServletException {
//    }
//
//}