package com.guet.oos.dao;

import com.guet.oos.po.ShopCart;

/**
 * 购物车Dao接口
 * Created by Shinelon on 2018/5/15.
 */
public interface ShopCartDao extends IDAO<Long, ShopCart> {

    public ShopCart getShopCartByUserId(Long userId);

    public boolean deleteByShopCartId(long scId);

    public boolean deleteByUserId(long usId);
}
