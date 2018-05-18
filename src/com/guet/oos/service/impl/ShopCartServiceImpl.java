package com.guet.oos.service.impl;

import com.guet.oos.dao.ShopCartDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.ShopCart;
import com.guet.oos.service.ShopCartService;

/**
 * Created by Shinelon on 2018/5/15.
 */
public class ShopCartServiceImpl implements ShopCartService {

    private ShopCartDao shopCartDao = DAOFactory.getShopCartDaoInstance();

    /**
     * 通过User的id获取其购物车
     *
     * @param userId
     * @return
     */
    @Override
    public ShopCart getShopCartByUserId(Long userId) {
        return shopCartDao.getShopCartByUserId(userId);
    }

    /**
     * 为新用户分配一辆购物车
     *
     * @param shopCart
     * @return
     */
    @Override
    public boolean createShopCart(ShopCart shopCart) {
        return shopCartDao.doCreate(shopCart);
    }
}
