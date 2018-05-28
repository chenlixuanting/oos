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

    public List<Order> getNotDeliveryOrderList(int start, int length);

    public int currentOrderCount();

    public int notDeliveryOrderCount();

    public List<Order> getUserAllHistoryOrder(long usId);

    public List<Order> getOrdersByUsId(long usId);

    public boolean deleteByOrId(String orId);

    public boolean confirmedOrder(String orId);

    public boolean confirmedDelivery(String orId);

    public int countAllHistoryOrder();

    public List<Order> getHistoryOrderList(int start, int length);

    public boolean confirmedReceiver(String orId);

    public Order getByOrId(String orId);

}
