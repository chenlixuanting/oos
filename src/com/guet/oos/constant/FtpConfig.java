package com.guet.oos.constant;

import java.util.ResourceBundle;

/**
 * ftp服务器连接配置
 *
 * @author Shinelon
 */
public class FtpConfig {

    //key
    private static final String BUNDLE = "ftp-server";

    //获取配置文件资源句柄
    private static ResourceBundle rb = ResourceBundle.getBundle(BUNDLE);

    //主机名
    public static final String HOST;

    //端口
    public static final Integer PORT;

    //用户名
    public static final String USERNAME;

    //密码
    public static final String PASSWORD;

    //FTP服务器文件的根目录
    public static final String FTP_ROOT;

    //FTP服务器上管理员文件的根目录
    public static final String ADMIN_BASEPATH;

    //FTP服务器上餐品文件的根目录
    public static final String GOODS_BASEPATH;

    //通过资源句柄从配置文件中获取配置参数
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
