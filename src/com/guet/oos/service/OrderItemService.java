package com.guet.oos.service;

import com.guet.oos.po.OrderItem;

import java.util.List;

/**
 * 订单项Service接口
 * <p>
 * Created by Shinelon on 2018/5/15.
 */
public interface OrderItemService {

    public boolean createOrderItem(OrderItem orderItem);

    public List<OrderItem> getOrderItemsByOrderId(String orId);

    public boolean deleteByOrId(String orId);
}
