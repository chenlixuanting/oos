package com.guet.oos.service;

import com.guet.oos.po.Order;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface OrderService {

    public boolean createOrder(Order order);

    public List<Order> getUserCurrentOrderByUserId(long usId);

    public int getAllCount();

    public List<Order> getList(int start, int length);

    public List<Order> getCurrentOrderList(int start, int length);

    public int currentOrderCount();
}
