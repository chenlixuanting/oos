package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.OrderDao;
import com.guet.oos.po.Order;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Set;

/**
 * 订单DAO
 * Created by Shinelon on 2018/5/18.
 */
public class OrderDaoImpl extends AbstractDAOImpl implements OrderDao {

    public OrderDaoImpl(Connection conn) {
        super(conn);
    }

    /**
     * private String orId;// 订单ID
     * private long usId;// 用户ID
     * private long mgId;// 管理员ID
     * private long daId;// 收货地址ID
     * private double totalCost;// 总支出金额
     * private long productAmount;// 商品数量
     * private double deliverCost;// 配送费用
     * private double productCost;//商品开销
     * private String payType;//付款方式
     * private String orderStatus;// 状态标志
     * private String creatorTime;// 创建时间
     * private String updateTime;// 更新时间
     */

    @Override
    public boolean doCreate(Order vo) {

        String sql = "insert into order_table(orId,usId,daId,totalCost,productAmount," +
                "deliverCost,productCost,payType,orderStatus,creatorTime,updateTime) values(?,?,?,?,?,?,?,?,?,?,?)";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, vo.getOrId());
            pstmt.setLong(2, vo.getUsId());
            pstmt.setLong(3, vo.getDaId());
            pstmt.setDouble(4, vo.getTotalCost());
            pstmt.setLong(5, vo.getProductAmount());
            pstmt.setDouble(6, vo.getDeliverCost());
            pstmt.setDouble(7, vo.getProductCost());
            pstmt.setString(8, vo.getPayType());
            pstmt.setString(9, vo.getOrderStatus());
            pstmt.setString(10, vo.getCreatorTime());
            pstmt.setString(11, vo.getUpdateTime());
            pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean doUpdate(Order vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public Order findById(String id) {
        return null;
    }

    @Override
    public List<Order> findAll() {
        return null;
    }

    @Override
    public List<Order> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
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
