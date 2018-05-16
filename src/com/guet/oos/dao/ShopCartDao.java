package com.guet.oos.dao;

import com.guet.oos.po.ShopCart;

/**
 * Created by Shinelon on 2018/5/15.
 */
public interface ShopCartDao extends IDAO<Long, ShopCart> {

    public ShopCart getShopCartByUserId(Long userId);

}
