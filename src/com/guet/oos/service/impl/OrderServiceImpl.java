package com.guet.oos.service.impl;

import com.guet.oos.constant.OrderStatus;
import com.guet.oos.dao.OrderDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Order;
import com.guet.oos.service.OrderService;

import java.util.List;

/**
 * 订单Service实现类
 * Created by Shinelon on 2018/5/18.
 */
public class OrderServiceImpl implements OrderService {

    //注入订单Dao实现类
    private OrderDao orderDao = DAOFactory.getOrderDaoInstance();

    /**
     * 插入一条订单记录
     *
     * @param order
     * @return
     */
    @Override
    public boolean createOrder(Order order) {
        return orderDao.doCreate(order);
    }

    /**
     * 获取用户当前的订单记录
     *
     * @param usId
     * @return
     */
    @Override
    public List<Order> getUserCurrentOrderByUserId(long usId) {
        return orderDao.getUserCurrentOrderByUserId(usId);
    }

    /**
     * 统计所有订单数
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return orderDao.getAllCount();
    }

    /**
     * 分页查询查询所有订单项
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Order> getList(int start, int length) {
        return orderDao.getList(start, length);
    }

    /**
     * 获取当前订单项记录集合
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Order> getCurrentOrderList(int start, int length) {
        return orderDao.getCurrentOrderList(start, length, OrderStatus.UNCONFIRMEED);
    }

    /**
     * 获取未发货的订单项记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Order> getNotDeliveryOrderList(int start, int length) {
        return orderDao.getNotDeliveryOrderList(start, length);
    }

    /**
     * 统计当前订单项数量
     *
     * @return
     */
    @Override
    public int currentOrderCount() {
        return orderDao.currentOrderCount(OrderStatus.UNCONFIRMEED);
    }

    /**
     * 统计未发货订单数量
     *
     * @return
     */
    @Override
    public int notDeliveryOrderCount() {
        return orderDao.notDeliveryOrderCount();
    }

    /**
     * 获取用户所有历史订单
     *
     * @param usId
     * @return
     */
    @Override
    public List<Order> getUserAllHistoryOrder(long usId) {
        return orderDao.getUserAllHistoryOrder(usId);
    }

    /**
     * 获取用户所有的订单
     *
     * @param usId
     * @return
     */
    @Override
    public List<Order> getOrdersByUsId(long usId) {
        return orderDao.getOrdersByUsId(usId);
    }

    /**
     * 删除指定orId的订单
     *
     * @param orId
     * @return
     */
    @Override
    public boolean deleteByOrId(String orId) {
        return orderDao.deleteByOrId(orId);
    }

    /**
     * 确认指定orId的订单
     *
     * @param orId
     * @return
     */
    @Override
    public boolean confirmedOrder(String orId) {
        return orderDao.updateOrderStatus(orId, OrderStatus.NOT_DELIVERED);
    }

    /**
     * 更改指定Id的订单的状态为 正在发货
     *
     * @param orId
     * @return
     */
    @Override
    public boolean confirmedDelivery(String orId) {
        return orderDao.confirmedDelivery(orId);
    }

    /**
     * 统计所有的历史订单
     *
     * @return
     */
    @Override
    public int countAllHistoryOrder() {
        return orderDao.countAllHistoryOrder();
    }

    /**
     * 分页查询订单
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Order> getHistoryOrderList(int start, int length) {
        return orderDao.getHistoryOrderList(start, length);
    }

    /**
     * 确认收货
     *
     * @param orId
     * @return
     */
    @Override
    public boolean confirmedReceiver(String orId) {
        return orderDao.updateOrderStatus(orId, OrderStatus.RECEIVED_GOOD);
    }

    /**
     * 通过Id查询订单
     *
     * @param orId
     * @return
     */
    @Override
    public Order getByOrId(String orId) {
        return orderDao.findById(orId);
    }

}
