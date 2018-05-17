package com.guet.oos.po;

import java.io.Serializable;

/**
 * 订单实体
 *
 * @author Shinelon
 */
public class Order implements Serializable {

    private static final long serialVersionUID = -1354904956050380915L;

    private long orId;// 订单ID

    private long usId;// 用户ID

    private long mgId;// 管理员ID

    private long daId;// 收货地址ID

    private int status;// 状态标志

    private String payType;//付款方式

    private String creatorTime;// 创建时间

    private String updateTime;// 更新时间

    public Order(long orId, long usId, long mgId, long daId, int status, String payType, String creatorTime, String updateTime) {
        this.orId = orId;
        this.usId = usId;
        this.mgId = mgId;
        this.daId = daId;
        this.status = status;
        this.payType = payType;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
    }

    public Order() {
    }

    public long getOrId() {
        return orId;
    }

    public void setOrId(long orId) {
        this.orId = orId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
    }

    public long getDaId() {
        return daId;
    }

    public void setDaId(long daId) {
        this.daId = daId;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
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
        return "Order{" +
                "orId=" + orId +
                ", usId=" + usId +
                ", mgId=" + mgId +
                ", daId=" + daId +
                ", status=" + status +
                ", payType='" + payType + '\'' +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
