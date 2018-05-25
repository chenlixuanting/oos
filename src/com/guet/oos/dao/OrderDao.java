package com.guet.oos.dao;

import com.guet.oos.po.Order;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface OrderDao extends IDAO<String, Order> {

    public List<Order> getUserCurrentOrderByUserId(long usId);

    public List<Order> getList(int start, int length);

    public List<Order> getCurrentOrderList(int start, int length, String orderStatus);

    public int currentOrderCount(String orderStatus);

    public List<Order> getUserAllHistoryOrder(long usId);

}
