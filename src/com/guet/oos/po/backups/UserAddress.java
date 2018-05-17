package com.guet.oos.po.backups;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户地址实体
 *
 * @author Shinelon
 */
public class UserAddress implements Serializable {

    private static final long serialVersionUID = -7962181897864769633L;

    private long uaId;// 地址ID

    private long usId;// 用户ID

    private String detailAddress;// 详细地址

    private Date updateTime;// 更新时间

    private Date creatorTime;// 创建时间

    public UserAddress(long uaId, long usId, String detailAddress, Date updateTime, Date creatorTime) {
        this.uaId = uaId;
        this.usId = usId;
        this.detailAddress = detailAddress;
        this.updateTime = updateTime;
        this.creatorTime = creatorTime;
    }

    public UserAddress() {
    }

    public long getUaId() {
        return uaId;
    }

    public void setUaId(long uaId) {
        this.uaId = uaId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public String getDetailAddress() {
        return detailAddress;
    }

    public void setDetailAddress(String detailAddress) {
        this.detailAddress = detailAddress;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getCreatorTime() {
        return creatorTime;
    }

    public void setCreatorTime(Date creatorTime) {
        this.creatorTime = creatorTime;
    }

    @Override
    public String toString() {
        return "UserAddress{" +
                "uaId=" + uaId +
                ", usId=" + usId +
                ", detailAddress='" + detailAddress + '\'' +
                ", updateTime=" + updateTime +
                ", creatorTime=" + creatorTime +
                '}';
    }
}
