package com.guet.oos.po;

import java.io.Serializable;

/**
 * 菜品种类
 * Created by Shinelon on 2018/4/30.
 */
public class DishesType implements Serializable {

    private static final long serialVersionUID = 5325011751096410258L;

    private long dtId;

    private long mgId;//管理员ID

    private String dishesTypeName;

    private String mealTypeName;//菜品类型所属的餐点

    private String createTime;

    private String updateTime;

    public DishesType(long dtId, String dishesTypeName, String mealTypeName, long mgId, String createTime, String updateTime) {
        this.dtId = dtId;
        this.dishesTypeName = dishesTypeName;
        this.mealTypeName = mealTypeName;
        this.mgId = mgId;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public DishesType() {
    }

    public long getDtId() {
        return dtId;
    }

    public void setDtId(long dtId) {
        this.dtId = dtId;
    }

    public String getDishesTypeName() {
        return dishesTypeName;
    }

    public void setDishesTypeName(String dishesTypeName) {
        this.dishesTypeName = dishesTypeName;
    }

    public String getMealTypeName() {
        return mealTypeName;
    }

    public void setMealTypeName(String mealTypeName) {
        this.mealTypeName = mealTypeName;
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
        return "DishesType{" +
                "dtId=" + dtId +
                ", dishesTypeName='" + dishesTypeName + '\'' +
                ", mealTypeName='" + mealTypeName + '\'' +
                ", mgId=" + mgId +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
