package com.guet.oos.po;

import java.io.Serializable;

/**
 * 订单项实体
 *
 * @author Shinelon
 */
public class OrderItem implements Serializable {

    private static final long serialVersionUID = 8701727993108725468L;

    private long oiId;// 订单项ID

    private long scId;// 购物车ID

    private long orId;// 订单ID

    private long dsId;// 菜品ID

    private String dishesName;//菜品名称

    private long quantity;// 商品数量

    private double price;//菜品单价

    private double productCost;// 商品开销

    private String creatorTime;// 创建时间

    private String updateTime;// 更新时间

    public OrderItem(long oiId, long scId, long orId, long dsId, String dishesName, long quantity, double price, double productCost, String creatorTime, String updateTime) {
        this.oiId = oiId;
        this.scId = scId;
        this.orId = orId;
        this.dsId = dsId;
        this.dishesName = dishesName;
        this.quantity = quantity;
        this.price = price;
        this.productCost = productCost;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
    }

    public OrderItem() {
    }


    public long getOiId() {
        return oiId;
    }

    public void setOiId(long oiId) {
        this.oiId = oiId;
    }

    public long getScId() {
        return scId;
    }

    public void setScId(long scId) {
        this.scId = scId;
    }

    public long getOrId() {
        return orId;
    }

    public void setOrId(long orId) {
        this.orId = orId;
    }

    public long getDsId() {
        return dsId;
    }

    public void setDsId(long dsId) {
        this.dsId = dsId;
    }

    public String getDishesName() {
        return dishesName;
    }

    public void setDishesName(String dishesName) {
        this.dishesName = dishesName;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getProductCost() {
        return productCost;
    }

    public void setProductCost(double productCost) {
        this.productCost = productCost;
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
        return "OrderItem{" +
                "oiId=" + oiId +
                ", scId=" + scId +
                ", orId=" + orId +
                ", dsId=" + dsId +
                ", dishesName='" + dishesName + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", productCost=" + productCost +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }

    /**
     * 计算单项商品开销
     *
     * @return
     */
    public double calcProductCost() {
        return price * quantity;
    }
}
