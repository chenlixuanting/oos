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

    private String creatorTime;// 创建时间

    private String updateTime;// 更新时间

    public DeliveryAddress(long daId, long usId, String receiverName, String receiverMobile, String receiverAddress, String creatorTime, String updateTime) {
        this.daId = daId;
        this.usId = usId;
        this.receiverName = receiverName;
        this.receiverMobile = receiverMobile;
        this.receiverAddress = receiverAddress;
        this.creatorTime = creatorTime;
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
        return "DeliveryAddress{" +
                "daId=" + daId +
                ", usId=" + usId +
                ", receiverName='" + receiverName + '\'' +
                ", receiverMobile='" + receiverMobile + '\'' +
                ", receiverAddress='" + receiverAddress + '\'' +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
