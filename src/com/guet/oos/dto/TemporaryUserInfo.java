package com.guet.oos.dto;

import java.io.Serializable;

/**
 * 保存临时用户的信息实体
 * Created by Shinelon on 2018/5/14.
 */
public class TemporaryUserInfo implements Serializable {

    private static final long serialVersionUID = 6256076388898114506L;

    private String username;
    private String sex;
    private String mobile;
    private String cityName;
    private String roadName;
    private String addressDetial;
    private String deliverTime;

    public String getDeliverTime() {
        return deliverTime;
    }

    public void setDeliverTime(String deliverTime) {
        this.deliverTime = deliverTime;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public TemporaryUserInfo(String username, String sex, String mobile, String cityName, String roadName, String addressDetial) {
        this.username = username;
        this.sex = sex;
        this.mobile = mobile;
        this.cityName = cityName;
        this.roadName = roadName;
        this.addressDetial = addressDetial;
    }

    @Override
    public String toString() {
        return "TemporaryUserInfo{" +
                "username='" + username + '\'' +
                ", sex='" + sex + '\'' +
                ", mobile='" + mobile + '\'' +
                ", cityName='" + cityName + '\'' +
                ", roadName='" + roadName + '\'' +
                ", addressDetial='" + addressDetial + '\'' +
                '}';
    }

    public TemporaryUserInfo() {
    }
}
