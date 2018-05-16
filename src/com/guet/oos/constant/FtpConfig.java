package com.guet.oos.constant;

import java.util.ResourceBundle;

/**
 * ftp服务器连接配置
 *
 * @author Shinelon
 */
public class FtpConfig {

    private static final String BUNDLE = "ftp-server";

    private static ResourceBundle rb = ResourceBundle.getBundle(BUNDLE);

    public static final String HOST;
    public static final Integer PORT;
    public static final String USERNAME;
    public static final String PASSWORD;
    public static final String FTP_ROOT;
    public static final String ADMIN_BASEPATH;
    public static final String GOODS_BASEPATH;

    static {
        HOST = rb.getString("host");
        PORT = Integer.valueOf(rb.getString("port"));
        USERNAME = rb.getString("username");
        PASSWORD = rb.getString("password");
        FTP_ROOT = rb.getString("ftp-root");
        ADMIN_BASEPATH = FTP_ROOT + "/" + rb.getString("adminBasePath");
        GOODS_BASEPATH = FTP_ROOT + "/" + rb.getString("goodsBasePath");
    }

}
