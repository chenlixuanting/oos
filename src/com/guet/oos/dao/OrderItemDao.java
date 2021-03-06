package com.guet.oos.dao;

import com.guet.oos.po.OrderItem;

import java.util.List;

/**
 * 订单项Dao接口
 * Created by Shinelon on 2018/5/18.
 */
public interface OrderItemDao extends IDAO<Long, OrderItem> {

    public List<OrderItem> getOrderItemsByOrderId(String orId);

    public boolean deleteByOrId(String orId);
}
