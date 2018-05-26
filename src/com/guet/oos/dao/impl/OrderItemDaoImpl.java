package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.OrderItemDao;
import com.guet.oos.fields.OrderItemFields;
import com.guet.oos.po.OrderItem;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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


    @Override
    public List<OrderItem> getOrderItemsByOrderId(String orId) {

        String sql = "select * from order_item_table where orId=?";

        List<OrderItem> orderItems = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, orId);

            ResultSet res = pstmt.executeQuery();

            orderItems = encapsulationOrderItem(res);

            return orderItems;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public boolean deleteByOrId(String orId) {

        String sql = "delete from order_item_table where orId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, orId);

            pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * private long oiId;// 订单项ID
     * private long scId;// 购物车ID
     * private String orId;// 订单ID
     * private long dsId;// 菜品ID
     * <p>
     * private String dishesName;//菜品名称
     * private long quantity;// 商品数量
     * private double price;//菜品单价
     * private double productCost;// 商品开销
     * private String creatorTime;// 创建时间
     * private String updateTime;// 更新时间
     */

    public List<OrderItem> encapsulationOrderItem(ResultSet res) {

        List<OrderItem> orderItems = new ArrayList<OrderItem>();

        try {
            while (res.next()) {
                OrderItem orderItem = new OrderItem();

                orderItem.setOiId(res.getLong(OrderItemFields.OIID));
                orderItem.setScId(res.getLong(OrderItemFields.SCID));
                orderItem.setOrId(res.getString(OrderItemFields.ORID));
                orderItem.setDsId(res.getLong(OrderItemFields.DSID));

                orderItem.setDishesName(res.getString(OrderItemFields.DISHES_NAME));
                orderItem.setQuantity(res.getLong(OrderItemFields.QUANTITY));
                orderItem.setPrice(res.getDouble(OrderItemFields.PRICE));
                orderItem.setProductCost(res.getDouble(OrderItemFields.PRODUCT_COST));
                orderItem.setCreatorTime(res.getString(OrderItemFields.CREATOR_TIME));
                orderItem.setUpdateTime(res.getString(OrderItemFields.UPDATE_TIME));

                orderItems.add(orderItem);
            }
            return orderItems;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
