package com.guet.oos.po;

import java.io.Serializable;
import java.util.List;

/**
 * 订单实体
 *
 * @author Shinelon
 */
public class Order implements Serializable {

    private static final long serialVersionUID = -1354904956050380915L;

    private String orId;// 订单ID

    private long usId;// 用户ID

    private String username;//用户名

    private long mgId;// 管理员ID

    private long daId;// 收货地址ID

    private String receiverAddress;//收货地址

    private double totalCost;// 总支出金额

    private long productAmount;// 商品数量

    private double deliverCost;// 配送费用

    private double productCost;//商品开销

    private String orderStatus;// 状态标志

    private String payType;//付款方式

    private List<OrderItem> orderItems;//订单项

    private String creatorTime;// 创建时间

    private String updateTime;// 更新时间

    public Order(String orId, long usId, String username, long mgId, long daId, String receiverAddress, double totalCost, long productAmount, double deliverCost, double productCost, String orderStatus, String payType, List<OrderItem> orderItems, String creatorTime, String updateTime) {
        this.orId = orId;
        this.usId = usId;
        this.username = username;
        this.mgId = mgId;
        this.daId = daId;
        this.receiverAddress = receiverAddress;
        this.totalCost = totalCost;
        this.productAmount = productAmount;
        this.deliverCost = deliverCost;
        this.productCost = productCost;
        this.orderStatus = orderStatus;
        this.payType = payType;
        this.orderItems = orderItems;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
    }

    public Order() {
    }

    public String getOrId() {
        return orId;
    }

    public void setOrId(String orId) {
        this.orId = orId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
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

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
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
                "orId='" + orId + '\'' +
                ", usId=" + usId +
                ", username='" + username + '\'' +
                ", mgId=" + mgId +
                ", daId=" + daId +
                ", receiverAddress='" + receiverAddress + '\'' +
                ", totalCost=" + totalCost +
                ", productAmount=" + productAmount +
                ", deliverCost=" + deliverCost +
                ", productCost=" + productCost +
                ", orderStatus='" + orderStatus + '\'' +
                ", payType='" + payType + '\'' +
                ", orderItems=" + orderItems +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
