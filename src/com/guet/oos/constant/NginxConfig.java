package com.guet.oos.constant;

import java.util.ResourceBundle;

/**
 * nginx服务器地址配置
 * Created by Shinelon on 2018/4/29.
 */
public class NginxConfig {

    private static final String BUNDLE = "nginx-server";

    private static ResourceBundle rb = ResourceBundle.getBundle(BUNDLE);

    public static final String NGINX_HOST;
    public static final Integer NGINX_PORT;
    public static final String NGINX_ROOT;
    public static final String NGINX_ADMIN_BASEPATH;
    public static final String NGINX_GOODS_BASEPATH;

    static {
        NGINX_HOST = rb.getString("nginx-host");
        NGINX_PORT = Integer.valueOf(rb.getString("nginx-port"));
        NGINX_ADMIN_BASEPATH = rb.getString("nginx-adminBasePath");
        NGINX_GOODS_BASEPATH = rb.getString("nginx-goodsBasePath");
        NGINX_ROOT = rb.getString("nginx-root");
    }

    public static final String ADMIN_HEAD_PIC_ADDRS = "http://" + NGINX_HOST + ":" + NGINX_PORT + "/" + NGINX_ROOT + "/" + NGINX_ADMIN_BASEPATH + "/";
    public static final String GOODS_PIC_ADDRS = "http://" + NGINX_HOST + ":" + NGINX_PORT + "/" + NGINX_ROOT + "/" + NGINX_GOODS_BASEPATH + "/";

}
