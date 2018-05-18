package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.OrderItemDao;
import com.guet.oos.po.OrderItem;

import java.sql.Connection;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/5/18.
 */
public class OrderItemDaoImpl extends AbstractDAOImpl implements OrderItemDao {

    public OrderItemDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(OrderItem vo) {
        return false;
    }

    @Override
    public boolean doUpdate(OrderItem vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public OrderItem findById(Long id) {
        return null;
    }

    @Override
    public List<OrderItem> findAll() {
        return null;
    }

    @Override
    public List<OrderItem> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }

    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    @Override
    public Integer getAllCount() {
        return null;
    }
}
