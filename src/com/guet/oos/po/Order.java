package com.guet.oos.po;

import java.io.Serializable;
import java.util.Date;

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

    private int status;// 状态标志

    private Date creatorTime;// 创建时间

    private Date updateTime;// 更新时间

    public Order(long orId, long usId, long mgId, int status, Date creatorTime, Date updateTime) {
        this.orId = orId;
        this.usId = usId;
        this.mgId = mgId;
        this.status = status;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getCreatorTime() {
        return creatorTime;
    }

    public void setCreatorTime(Date creatorTime) {
        this.creatorTime = creatorTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orId=" + orId +
                ", usId=" + usId +
                ", mgId=" + mgId +
                ", status=" + status +
                ", creatorTime=" + creatorTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
