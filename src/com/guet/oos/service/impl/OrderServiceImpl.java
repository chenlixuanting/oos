package com.guet.oos.service.impl;

import com.guet.oos.constant.OrderStatus;
import com.guet.oos.dao.OrderDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Order;
import com.guet.oos.service.OrderService;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public class OrderServiceImpl implements OrderService {

    private OrderDao orderDao = DAOFactory.getOrderDaoInstance();

    @Override
    public boolean createOrder(Order order) {
        return orderDao.doCreate(order);
    }

    @Override
    public List<Order> getUserCurrentOrderByUserId(long usId) {
        return orderDao.getUserCurrentOrderByUserId(usId);
    }

    @Override
    public int getAllCount() {
        return orderDao.getAllCount();
    }

    @Override
    public List<Order> getList(int start, int length) {
        return orderDao.getList(start, length);
    }

    @Override
    public List<Order> getCurrentOrderList(int start, int length) {
        return orderDao.getCurrentOrderList(start, length, OrderStatus.UNCONFIRMEED);
    }

    @Override
    public List<Order> getNotDeliveryOrderList(int start, int length) {
        return orderDao.getNotDeliveryOrderList(start, length);
    }

    @Override
    public int currentOrderCount() {
        return orderDao.currentOrderCount(OrderStatus.UNCONFIRMEED);
    }

    @Override
    public int notDeliveryOrderCount() {
        return orderDao.notDeliveryOrderCount();
    }

    @Override
    public List<Order> getUserAllHistoryOrder(long usId) {
        return orderDao.getUserAllHistoryOrder(usId);
    }

    @Override
    public List<Order> getOrdersByUsId(long usId) {
        return orderDao.getOrdersByUsId(usId);
    }

    @Override
    public boolean deleteByOrId(String orId) {
        return orderDao.deleteByOrId(orId);
    }

    @Override
    public boolean confirmedOrder(String orId) {
        return orderDao.updateOrderStatus(orId, OrderStatus.NOT_DELIVERED);
    }

    @Override
    public boolean confirmedDelivery(String orId) {
        return orderDao.confirmedDelivery(orId);
    }

    @Override
    public int countAllHistoryOrder() {
        return orderDao.countAllHistoryOrder();
    }

    @Override
    public List<Order> getHistoryOrderList(int start, int length) {
        return orderDao.getHistoryOrderList(start, length);
    }

    @Override
    public boolean confirmedReceiver(String orId) {
        return orderDao.updateOrderStatus(orId, OrderStatus.RECEIVED_GOOD);
    }

    @Override
    public Order getByOrId(String orId) {
        return orderDao.findById(orId);
    }

}
