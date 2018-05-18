package com.guet.oos.po;

import java.io.Serializable;

/**
 * 用户实体
 *
 * @author Shinelon
 */
public class User implements Serializable {

    private static final long serialVersionUID = -7576417437606766047L;

    private long usId;// 用户Id

    private String mobile;// 手机号码

    private String password;// 密码

    private String username;// 用户真实姓名

    private String sex;// 性别

    private DeliveryAddress defaultDeliverAddress;//默认送货地址

    private String creatorTime;// 创建时间

    private String updateTime;// 修改时间

    public User(long usId, String mobile, String password, String username, String sex, DeliveryAddress defaultDeliverAddress, String creatorTime, String updateTime) {
        this.usId = usId;
        this.mobile = mobile;
        this.password = password;
        this.username = username;
        this.sex = sex;
        this.defaultDeliverAddress = defaultDeliverAddress;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
    }

    public User() {
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

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

    public DeliveryAddress getDefaultDeliverAddress() {
        return defaultDeliverAddress;
    }

    public void setDefaultDeliverAddress(DeliveryAddress defaultDeliverAddress) {
        this.defaultDeliverAddress = defaultDeliverAddress;
    }

    public String getCreatorTime() {
        return creatorTime;
    }

    public void setCreatorTime(String creatorTime) {
        this.creatorTime = creatorTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "usId=" + usId +
                ", mobile='" + mobile + '\'' +
                ", password='" + password + '\'' +
                ", username='" + username + '\'' +
                ", sex='" + sex + '\'' +
                ", defaultDeliverAddress=" + defaultDeliverAddress +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
