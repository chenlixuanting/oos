package com.guet.oos.service;

import com.guet.oos.po.Order;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface OrderService {

    public boolean createOrder(Order order);

    public List<Order> getUserCurrentOrderByUserId(long usId);

}
