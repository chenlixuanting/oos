package com.guet.oos.po;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 购物车实体
 *
 * @author Shinelon
 */
public class ShopCart implements Serializable {

    private static final long serialVersionUID = 1557110188502933830L;

    @JSONField(serialize = false)
    private long scId;// 购物车ID

    @JSONField(serialize = false)
    private long usId;// 用户ID

    private double totalCost;// 总支出金额

    private long productAmount;// 商品数量

    private double deliverCost;// 配送费用

    private double productCost;//商品开销

    @JSONField(serialize = false)
    private String creatorTime;// 创建时间

    @JSONField(serialize = false)
    private String updateTime;// 更新时间

    private List<OrderItem> orderItems = new ArrayList<OrderItem>();

    public ShopCart() {
        super();
    }


    public ShopCart(long scId, long usId, double totalCost, long productAmount, double deliverCost, double productCost, String creatorTime, String updateTime, List<OrderItem> orderItems) {
        this.scId = scId;
        this.usId = usId;
        this.totalCost = totalCost;
        this.productAmount = productAmount;
        this.deliverCost = deliverCost;
        this.productCost = productCost;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
        this.orderItems = orderItems;
    }

    public long getScId() {
        return scId;
    }

    public void setScId(long scId) {
        this.scId = scId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public long getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(long productAmount) {
        this.productAmount = productAmount;
    }

    public double getDeliverCost() {
        return deliverCost;
    }

    public void setDeliverCost(double deliverCost) {
        this.deliverCost = deliverCost;
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

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    @Override
    public String toString() {
        return "ShopCart{" +
                "scId=" + scId +
                ", usId=" + usId +
                ", totalCost=" + totalCost +
                ", productAmount=" + productAmount +
                ", deliverCost=" + deliverCost +
                ", productCost=" + productCost +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                ", orderItems=" + orderItems +
                '}';
    }

    /**
     * 添加菜单项
     *
     * @param orderItem
     */
    public void addOrderItem(OrderItem orderItem) {

        //判断是否包含同款
        boolean isExist = true;

        //追加数量
        for (OrderItem o : orderItems) {

            //存在同款产品则数量叠加
            if (o.getDsId() == orderItem.getDsId()) {
                o.setQuantity(o.getQuantity() + orderItem.getQuantity());
                o.setProductCost(o.getQuantity() * o.getPrice());
                isExist = false;
                break;
            }
        }

        if (isExist) {
            orderItems.add(orderItem);
        }

        //重新计算商品总支出金额
        productCost = checkout();

        //重新计算商品数量
        productAmount = countProducts();

        //重新计算运费
        deliverCost = calcDeliverCost();

        //重新计算总支出金额
        totalCost = calcTotalCost();

    }

    /**
     * 计算总支出
     *
     * @return
     */
    public double calcTotalCost() {

        return checkout() + calcDeliverCost();

    }

    /**
     * 统计商品个数
     *
     * @return
     */
    public long countProducts() {

        long total = 0;

        for (OrderItem orderItem : orderItems) {
            total += orderItem.getQuantity();
        }

        return total;
    }

    /**
     * 计算商品总支出金额
     *
     * @return
     */
    public double checkout() {

        double spend = 0.0;

        for (OrderItem orderItem : orderItems) {
            spend += (orderItem.getQuantity() * orderItem.getPrice());
        }

        return spend;
    }

    /**
     * 计算运费
     *
     * @return
     */
    public double calcDeliverCost() {

        long products = countProducts();

        if (products >= DeliverCost.PROCUTS_1 && products < DeliverCost.PROCUTS_5) {

            deliverCost = DeliverCost.DELIVER_PRODUCTS_1;

        } else if (products >= DeliverCost.PROCUTS_5 && products < DeliverCost.PROCUTS_50) {

            deliverCost = DeliverCost.DELIVER_PRODUCTS_5;

        } else if (products >= DeliverCost.PROCUTS_50 && products < DeliverCost.PROCUTS_100) {

            deliverCost = DeliverCost.DELIVER_PRODUCTS_50;

        } else if (products >= DeliverCost.DELIVER_PRODUCTS_100) {

            deliverCost = DeliverCost.DELIVER_PRODUCTS_100;

        } else {
            deliverCost = 0.0;
        }

        return deliverCost;

    }

}
