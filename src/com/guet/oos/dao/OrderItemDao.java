package com.guet.oos.dao;

import com.guet.oos.po.OrderItem;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface OrderItemDao extends IDAO<Long, OrderItem> {

    public List<OrderItem> getOrderItemsByOrderId(String orId);

}
