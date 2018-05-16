package com.guet.oos.service;

import com.guet.oos.po.ShopCart;

/**
 * 购物车Service
 * <p>
 * Created by Shinelon on 2018/5/15.
 */
public interface ShopCartService {

    public ShopCart getShopCartByUserId(Long userId);

    public boolean createShopCart(ShopCart shopCart);

}
