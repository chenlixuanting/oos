package com.guet.oos.dao.impl;

import com.guet.oos.constant.OrderStatus;
import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.OrderDao;
import com.guet.oos.fields.OrderFields;
import com.guet.oos.po.Order;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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

        String sql = "select count(*) from order_table";

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            int total = 0;

            while (res.next()) {
                total += res.getInt(1);
            }

            return total;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    /**
     * public static final String UNCONFIRMEED = "商家未接单";
     * public static final String CONFIRMED = "商家已接单";
     * public static final String NOT_DELIVERED = "未发货";
     * public static final String DELIVERY_IN_PROCESS = "正在发货";
     *
     * @param usId
     * @return
     */

    @Override
    public List<Order> getUserCurrentOrderByUserId(long usId) {

        String sql = "select * from order_table where usId=? and(orderStatus=? or orderStatus=? OR orderStatus=? OR orderStatus=?)";

        List<Order> orders = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, usId);
            pstmt.setString(2, OrderStatus.UNCONFIRMEED);
            pstmt.setString(3, OrderStatus.CONFIRMED);
            pstmt.setString(4, OrderStatus.NOT_DELIVERED);
            pstmt.setString(5, OrderStatus.DELIVERY_IN_PROCESS);

            ResultSet res = pstmt.executeQuery();

            orders = encapsulationOrder(res);

            return orders;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<Order> getList(int start, int length) {

        List<Order> orders = null;

        String sql = "select top " + length + " * from order_table where orId not in (select top " + start +
                " orId from order_table)";

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            orders = encapsulationOrder(res);

            return orders;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<Order> getCurrentOrderList(int start, int length, String orderStatus) {

        String sql = "select top " + length + " * from order_table where orderStatus='" + orderStatus + "' and (orId not in(select top " + start + "orId from order_table where orderStatus='" + orderStatus + "'order by orId))";

        List<Order> orders = null;

        try {
            pstmt = conn.prepareStatement(sql);
            ResultSet res = pstmt.executeQuery();

            orders = encapsulationOrder(res);

            return orders;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int currentOrderCount(String orderStatus) {

        String sql = "select count(*) from order_table where orderStatus=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, orderStatus);

            ResultSet res = pstmt.executeQuery();

            int total = 0;

            while (res.next()) {
                total += res.getInt(1);
            }

            return total;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    public List<Order> encapsulationOrder(ResultSet res) {

        List<Order> orders = new ArrayList<Order>();

        try {
            while (res.next()) {

                Order order = new Order();

                order.setOrId(res.getString(OrderFields.ORID));
                order.setUsId(res.getLong(OrderFields.USID));
                order.setMgId(res.getLong(OrderFields.MGID));
                order.setDaId(res.getLong(OrderFields.DAID));

                order.setTotalCost(res.getDouble(OrderFields.TOTALCOST));
                order.setProductAmount(res.getLong(OrderFields.PRODUCTAMOUNT));
                order.setDeliverCost(res.getDouble(OrderFields.DELIVERCOST));
                order.setProductCost(res.getDouble(OrderFields.PRODUCTCOST));

                order.setOrderStatus(res.getString(OrderFields.ORDERSTATUS));
                order.setPayType(res.getString(OrderFields.PAYTYPE));
                order.setCreatorTime(res.getString(OrderFields.CREATORTIME));
                order.setUpdateTime(res.getString(OrderFields.UPDATETIME));

                orders.add(order);

            }
            return orders;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
