package com.guet.oos.service.impl;

import com.guet.oos.constant.OrderStatus;
import com.guet.oos.dao.OrderDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.fields.OrderFields;
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
    public int currentOrderCount() {
        return orderDao.currentOrderCount(OrderStatus.UNCONFIRMEED);
    }

    @Override
    public List<Order> getUserAllHistoryOrder(long usId) {
        return orderDao.getUserAllHistoryOrder(usId);
    }

}
