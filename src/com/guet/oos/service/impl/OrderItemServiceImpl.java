package com.guet.oos.service.impl;

import com.guet.oos.dao.OrderItemDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.OrderItem;
import com.guet.oos.service.OrderItemService;

/**
 * Created by Shinelon on 2018/5/15.
 */
public class OrderItemServiceImpl implements OrderItemService {

    private OrderItemDao orderItemDao = DAOFactory.getOrderItemDaoInstance();

    @Override
    public boolean createOrderItem(OrderItem orderItem) {
        return orderItemDao.doCreate(orderItem);
    }

}
