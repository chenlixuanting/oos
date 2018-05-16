package com.guet.oos.po;

import java.io.Serializable;

/**
 * 菜品
 *
 * @author Shinelon
 */
public class Dishes implements Serializable {

    private static final long serialVersionUID = 4748255689971892960L;

    private long dsId;// 菜品ID
    private long mgId;// 创建者ID
    private double price;// 单价
    private long stock;// 库存
    private String dishesType;//菜品种类
    private String dishesName;// 菜品名称
    private String describe;// 菜品描述信息
    private String picAddress;// 图片地址
    private String createTime;// 创建时间
    private String updateTime;// 更新时间

    public Dishes(long dsId, long mgId, double price, long stock, String dishesType, String dishesName, String describe, String picAddress, String createTime, String updateTime) {
        this.dsId = dsId;
        this.mgId = mgId;
        this.price = price;
        this.stock = stock;
        this.dishesType = dishesType;
        this.dishesName = dishesName;
        this.describe = describe;
        this.picAddress = picAddress;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Dishes() {
    }

    @Override
    public String toString() {
        return "Dishes{" +
                "dsId=" + dsId +
                ", mgId=" + mgId +
                ", price=" + price +
                ", stock=" + stock +
                ", dishesType='" + dishesType + '\'' +
                ", dishesName='" + dishesName + '\'' +
                ", describe='" + describe + '\'' +
                ", picAddress='" + picAddress + '\'' +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }

    public String getDishesType() {
        return dishesType;
    }

    public void setDishesType(String dishesType) {
        this.dishesType = dishesType;
    }

    public long getDsId() {
        return dsId;
    }

    public void setDsId(long dsId) {
        this.dsId = dsId;
    }

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public long getStock() {
        return stock;
    }

    public void setStock(long stock) {
        this.stock = stock;
    }

    public String getDishesName() {
        return dishesName;
    }

    public void setDishesName(String dishesName) {
        this.dishesName = dishesName;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

    public String getPicAddress() {
        return picAddress;
    }

    public void setPicAddress(String picAddress) {
        this.picAddress = picAddress;
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
}
