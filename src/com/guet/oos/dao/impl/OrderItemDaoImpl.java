package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.OrderItemDao;
import com.guet.oos.po.OrderItem;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/5/18.
 */
public class OrderItemDaoImpl extends AbstractDAOImpl implements OrderItemDao {

    public OrderItemDaoImpl(Connection conn) {
        super(conn);
    }

    /**
     * private long scId;// 购物车ID
     * private long orId;// 订单ID
     * private long dsId;// 菜品ID
     * private String dishesName;//菜品名称
     * private long quantity;// 商品数量
     * private double price;//菜品单价
     * private double productCost;// 商品开销
     * private String creatorTime;// 创建时间
     * private String updateTime;// 更新时间
     *
     * @return
     */

    @Override
    public boolean doCreate(OrderItem vo) {

        String sql = "insert into order_item_table(scId,orId,dsId,dishesName,quantity,price,productCost,creatorTime,updateTime)" +
                " values(?,?,?,?,?,?,?,?,?)";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, vo.getScId());
            pstmt.setString(2, vo.getOrId());
            pstmt.setLong(3, vo.getDsId());
            pstmt.setString(4, vo.getDishesName());
            pstmt.setLong(5, vo.getQuantity());
            pstmt.setDouble(6, vo.getPrice());
            pstmt.setDouble(7, vo.getProductCost());
            pstmt.setString(8, vo.getCreatorTime());
            pstmt.setString(9, vo.getUpdateTime());

            pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

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
