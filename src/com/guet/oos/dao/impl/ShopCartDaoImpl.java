package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.ShopCartDao;
import com.guet.oos.fields.ShopCartFields;
import com.guet.oos.po.ShopCart;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/5/15.
 */
public class ShopCartDaoImpl extends AbstractDAOImpl implements ShopCartDao {

    public ShopCartDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(ShopCart vo) {

        String sql = "insert into shop_cart_table(usId,creatorTime,updateTime) values(?,?,?)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            super.pstmt.setLong(1, vo.getUsId());
            super.pstmt.setString(2, vo.getCreatorTime());
            super.pstmt.setString(3, vo.getUpdateTime());

            super.pstmt.execute();

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public boolean doUpdate(ShopCart vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public ShopCart findById(Long id) {
        return null;
    }

    @Override
    public List<ShopCart> findAll() {
        return null;
    }

    @Override
    public List<ShopCart> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
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

    @Override
    public ShopCart getShopCartByUserId(Long userId) {

        String sql = "select * from shop_cart_table where usId=?";

        List<ShopCart> shopCarts = null;

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setLong(1, userId);
            ResultSet res = super.pstmt.executeQuery();
            shopCarts = encapsulationShopCart(res);
            return shopCarts.get(0);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public boolean deleteByShopCartId(long scId) {

        String sql = "delete from shop_cart_table where scId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, scId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean deleteByUserId(long usId) {

        String sql = "delete from shop_cart_table where usId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, usId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * 封装购物车实体
     *
     * @param res 结果集
     * @return
     */
    public List<ShopCart> encapsulationShopCart(ResultSet res) {

        List<ShopCart> shopCarts = new ArrayList<ShopCart>();

        try {
            while (res.next()) {

                ShopCart shopCart = new ShopCart();

                shopCart.setUsId(res.getLong(ShopCartFields.USID));
                shopCart.setScId(res.getLong(ShopCartFields.SCID));
                shopCart.setCreatorTime(res.getString(ShopCartFields.CREATOR_TIME));
                shopCart.setUpdateTime(res.getString(ShopCartFields.UPDATE_TIME));

                shopCarts.add(shopCart);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return shopCarts;

    }
}
