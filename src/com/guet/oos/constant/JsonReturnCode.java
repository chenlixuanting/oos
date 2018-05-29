package com.guet.oos.constant;

/**
 * Json返回实体中携带的错误代码，与前台的js文件中的错误代码向对应
 * <p>
 * Created by Shinelon on 2018/5/11.
 */
public class JsonReturnCode {

    //密码错误
    public static final String PASSWORD_ERROR = "error0";

    //验证码错误
    public static final String VERIFY_CODE_ERROR = "error1";

    //用户不存在
    public static final String USER_IS_NOT_EXIST = "error3";

    //两次密码输入不一致
    public static final String PASSWORD_IS_NOT_SAME = "error4";

    //创建用户失败
    public static final String BUILD_USER_FAIL = "error5";

}
