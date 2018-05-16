package com.guet.oos.service;

import com.guet.oos.po.Dishes;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;

/**
 * 订单项
 * <p>
 * Created by Shinelon on 2018/5/15.
 */
public interface OrderItemService {

    public boolean addOrderItem(User user, Dishes dishes, ShopCart shopCart);

}
