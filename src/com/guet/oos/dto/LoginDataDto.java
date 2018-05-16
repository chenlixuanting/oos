package com.guet.oos.dto;

import java.io.Serializable;

/**
 * 封装登陆返回的数据
 * Created by Shinelon on 2018/5/14.
 */
public class LoginDataDto implements Serializable {

    private static final long serialVersionUID = 8668302560880061846L;

    private String mobile;
    private String password;
    private String verifyCode;

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerifyCode() {
        return verifyCode;
    }

    public void setVerifyCode(String verifyCode) {
        this.verifyCode = verifyCode;
    }

    public LoginDataDto() {
    }
}
