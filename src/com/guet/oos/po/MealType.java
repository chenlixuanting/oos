package com.guet.oos.po;

import java.io.Serializable;

/**
 * 餐点类型实体
 * <p>
 * Created by Shinelon on 2018/4/29.
 */
public class MealType implements Serializable {

    private static final long serialVersionUID = 5851916062556129418L;

    private long mtId;//餐点类型ID

    private long mgId;//管理员ID

    private String mealTypeName;

    private String startTime;

    private String endTime;

    private String createTime;

    private String updateTime;

    public MealType(long mtId, String mealTypeName, String startTime, String endTime, long mgId, String createTime, String updateTime) {
        this.mtId = mtId;
        this.mealTypeName = mealTypeName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.mgId = mgId;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public MealType() {
    }

    public long getMtId() {
        return mtId;
    }

    public void setMtId(long mtId) {
        this.mtId = mtId;
    }

    public String getMealTypeName() {
        return mealTypeName;
    }

    public void setMealTypeName(String mealTypeName) {
        this.mealTypeName = mealTypeName;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
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
        return "MealType{" +
                "mtId=" + mtId +
                ", mealTypeName='" + mealTypeName + '\'' +
                ", startTime='" + startTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", mgId=" + mgId +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}

