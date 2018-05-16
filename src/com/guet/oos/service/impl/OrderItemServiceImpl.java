package com.guet.oos.service.impl;

import com.guet.oos.po.Dishes;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
import com.guet.oos.service.OrderItemService;

/**
 * Created by Shinelon on 2018/5/15.
 */
public class OrderItemServiceImpl implements OrderItemService {

    /**
     * 添加一个订单项
     *
     * @param user
     * @param dishes
     * @param shopCart
     * @return
     */
    @Override
    public boolean addOrderItem(User user, Dishes dishes, ShopCart shopCart) {
        return false;
    }

}
