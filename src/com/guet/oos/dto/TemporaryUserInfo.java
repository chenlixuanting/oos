package com.guet.oos.dto;

import java.io.Serializable;

/**
 * 保存临时用户的信息实体
 * Created by Shinelon on 2018/5/14.
 */
public class TemporaryUserInfo implements Serializable {

    private static final long serialVersionUID = 6256076388898114506L;

    private String username; //临时用户名
    private String password; //临时用户密码
    private String sex;//临时用户性别
    private String mobile;//临时用户手机号码
    private String cityName;//临时用户所在城市名
    private String roadName;//临时用户所在道路名
    private String addressDetial;//临时用户详细地址
    private String deliverTime;//收货人时间
    private String deliverName;//收获人名称
    private String deliverSex;//收货人性别

    public TemporaryUserInfo(String username, String password, String sex, String mobile, String cityName, String roadName, String addressDetial, String deliverTime, String deliverName, String deliverSex) {
        this.username = username;
        this.password = password;
        this.sex = sex;
        this.mobile = mobile;
        this.cityName = cityName;
        this.roadName = roadName;
        this.addressDetial = addressDetial;
        this.deliverTime = deliverTime;
        this.deliverName = deliverName;
        this.deliverSex = deliverSex;
    }

    public TemporaryUserInfo() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getRoadName() {
        return roadName;
    }

    public void setRoadName(String roadName) {
        this.roadName = roadName;
    }

    public String getAddressDetial() {
        return addressDetial;
    }

    public void setAddressDetial(String addressDetial) {
        this.addressDetial = addressDetial;
    }

    public String getDeliverTime() {
        return deliverTime;
    }

    public void setDeliverTime(String deliverTime) {
        this.deliverTime = deliverTime;
    }

    public String getDeliverName() {
        return deliverName;
    }

    public void setDeliverName(String deliverName) {
        this.deliverName = deliverName;
    }

    public String getDeliverSex() {
        return deliverSex;
    }

    public void setDeliverSex(String deliverSex) {
        this.deliverSex = deliverSex;
    }

    @Override
    public String toString() {
        return "TemporaryUserInfo{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", sex='" + sex + '\'' +
                ", mobile='" + mobile + '\'' +
                ", cityName='" + cityName + '\'' +
                ", roadName='" + roadName + '\'' +
                ", addressDetial='" + addressDetial + '\'' +
                ", deliverTime='" + deliverTime + '\'' +
                ", deliverName='" + deliverName + '\'' +
                ", deliverSex='" + deliverSex + '\'' +
                '}';
    }
}
