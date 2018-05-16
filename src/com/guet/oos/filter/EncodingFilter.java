package com.guet.oos.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

/**
 * 全局编码拦截器
 * <p>
 * Servlet Filter implementation class EncodingFilter
 */
public class EncodingFilter implements Filter {

    private static String encoding;
    private static final String DEFAULT_CHARSET = "UTF-8";

    /**
     * Default constructor.
     */
    public EncodingFilter() {
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

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;
//        if ("GET".equals(httpRequest.getMethod())) {
//        EncodingHttpServletRequest wrapper = new EncodingHttpServletRequest(httpRequest, encoding);
//            chain.doFilter(wrapper, response);
//        } else {
        httpRequest.setCharacterEncoding(encoding);
        httpResponse.setContentType("application/json;charset=" + encoding);
        chain.doFilter(request, response);
//        }

    }

    private static class EncodingHttpServletRequest extends HttpServletRequestWrapper {
        private HttpServletRequest request;

        public EncodingHttpServletRequest(HttpServletRequest request, String encoding) {
            super(request);
            this.request = request;
        }

        @Override
        public String getParameter(String name) {
            String value = request.getParameter(name);
            try {
                value = new String(value.getBytes("iso8859-1"), encoding);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            return super.getParameter(name);
        }
    }

    /**
     * @see Filter#init(FilterConfig)
     */
    public void init(FilterConfig fConfig) throws ServletException {
        System.out.println("--------init---------");
        encoding = fConfig.getInitParameter("encoding");
        if (encoding == null || "".equals(encoding))
            encoding = DEFAULT_CHARSET;

    }

}
