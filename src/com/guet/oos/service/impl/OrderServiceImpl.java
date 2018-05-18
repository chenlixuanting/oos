package com.guet.oos.service.impl;

import com.guet.oos.dao.OrderDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Order;
import com.guet.oos.service.OrderService;

/**
 * Created by Shinelon on 2018/5/18.
 */
public class OrderServiceImpl implements OrderService {

    private OrderDao orderDao = DAOFactory.getOrderDaoInstance();

    @Override
    public boolean createOrder(Order order) {
        return orderDao.doCreate(order);
    }

}
