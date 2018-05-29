package com.guet.oos.service.impl;

import com.guet.oos.dao.OrderItemDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.OrderItem;
import com.guet.oos.service.OrderItemService;

import java.util.List;

/**
 * 订单项Service实现类
 * Created by Shinelon on 2018/5/15.
 */
public class OrderItemServiceImpl implements OrderItemService {

    //注入订单项Dao实现类
    private OrderItemDao orderItemDao = DAOFactory.getOrderItemDaoInstance();

    /**
     * 插入一条订单项记录
     *
     * @param orderItem
     * @return
     */
    @Override
    public boolean createOrderItem(OrderItem orderItem) {
        return orderItemDao.doCreate(orderItem);
    }

    /**
     * 通过orId获取订单项集合
     *
     * @param orId
     * @return
     */
    @Override
    public List<OrderItem> getOrderItemsByOrderId(String orId) {
        return orderItemDao.getOrderItemsByOrderId(orId);
    }

    /**
     * 通过orId删除订单项
     *
     * @param orId
     * @return
     */
    @Override
    public boolean deleteByOrId(String orId) {
        return orderItemDao.deleteByOrId(orId);
    }

}
