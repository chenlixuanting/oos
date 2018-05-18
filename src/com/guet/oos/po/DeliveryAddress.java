package com.guet.oos.po;

import java.io.Serializable;

/**
 * 收货地址
 *
 * @author Shinelon
 */
public class DeliveryAddress implements Serializable {

    private static final long serialVersionUID = 786454224465450725L;

    private long daId;// 收货地址ID

    private long usId;//用户ID

    private String receiverName;// 收货人姓名

    private String receiverMobile;// 收货人电话

    private String receiverAddress;// 收货人地址

    private boolean isDefault;//是否为默认地址

    private String createTime;// 创建时间

    private String updateTime;// 更新时间

    public DeliveryAddress(long daId, long usId, String receiverName, String receiverMobile, String receiverAddress, boolean isDefault, String createTime, String updateTime) {
        this.daId = daId;
        this.usId = usId;
        this.receiverName = receiverName;
        this.receiverMobile = receiverMobile;
        this.receiverAddress = receiverAddress;
        this.isDefault = isDefault;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public DeliveryAddress() {
    }

    public long getDaId() {
        return daId;
    }

    public void setDaId(long daId) {
        this.daId = daId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getReceiverMobile() {
        return receiverMobile;
    }

    public void setReceiverMobile(String receiverMobile) {
        this.receiverMobile = receiverMobile;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public boolean isDefault() {
        return isDefault;
    }

    public void setDefault(boolean aDefault) {
        isDefault = aDefault;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "DeliveryAddress{" +
                "daId=" + daId +
                ", usId=" + usId +
                ", receiverName='" + receiverName + '\'' +
                ", receiverMobile='" + receiverMobile + '\'' +
                ", receiverAddress='" + receiverAddress + '\'' +
                ", isDefault=" + isDefault +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
