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

    @Override
    public boolean doCreate(Order vo) {

        String sql = "insert into order_table(orId,usId,totalCost,productAmount," +
                "deliverCost,productCost,payType,orderStatus,creatorTime,updateTime,receiverTime,receiverAddress,receiverName,receiverSex,receiverMobile,username) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, vo.getOrId());
            pstmt.setLong(2, vo.getUsId());
            pstmt.setDouble(3, vo.getTotalCost());
            pstmt.setLong(4, vo.getProductAmount());
            pstmt.setDouble(5, vo.getDeliverCost());
            pstmt.setDouble(6, vo.getProductCost());
            pstmt.setString(7, vo.getPayType());
            pstmt.setString(8, vo.getOrderStatus());
            pstmt.setString(9, vo.getCreatorTime());
            pstmt.setString(10, vo.getUpdateTime());
            pstmt.setString(11, vo.getReceiverTime());
            pstmt.setString(12, vo.getReceiverAddress());
            pstmt.setString(13, vo.getReceiverName());
            pstmt.setString(14, vo.getReceiverSex());
            pstmt.setString(15, vo.getReceiverMobile());
            pstmt.setString(16, vo.getUsername());

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

        String sql = "select * from order_table where orId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, id);

            ResultSet res = pstmt.executeQuery();

            List<Order> orders = encapsulationOrder(res);

            if (orders.size() > 0)
                return orders.get(0);

        } catch (SQLException e) {
            e.printStackTrace();
        }

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

    @Override
    public List<Order> getUserAllHistoryOrder(long usId) {

        String sql = "select * from order_table where orderStatus=? and usId=?";

        List<Order> historyOrder = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, OrderStatus.RECEIVED_GOOD);
            pstmt.setLong(2, usId);

            ResultSet res = pstmt.executeQuery();

            historyOrder = encapsulationOrder(res);

            return historyOrder;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<Order> getOrdersByUsId(long usId) {

        String sql = "select * from order_table where usId=?";

        List<Order> orders = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, usId);

            ResultSet res = pstmt.executeQuery();

            orders = encapsulationOrder(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return orders;
    }

    @Override
    public boolean deleteByOrId(String orId) {

        String sql = "delete from order_table where orId=?";

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

    @Override
    public boolean updateOrderStatus(String orId, String status) {

        String sql = "update order_table set orderStatus=? where orId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, status);
            pstmt.setString(2, orId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public int notDeliveryOrderCount() {

        String sql = "select count(*) from order_table where orderStatus=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, OrderStatus.NOT_DELIVERED);

            int total = 0;

            ResultSet res = pstmt.executeQuery();

            while (res.next())
                total += res.getInt(1);

            return total;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public List<Order> getNotDeliveryOrderList(int start, int length) {

        String sql = "select top " + length + " * from order_table where orderStatus='" + OrderStatus.NOT_DELIVERED + "' and (orId not in(select top " + start + "orId from order_table where orderStatus='" + OrderStatus.NOT_DELIVERED + "'order by orId))";

        List<Order> orders = null;

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            orders = encapsulationOrder(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return orders;
    }

    @Override
    public boolean confirmedDelivery(String orId) {

        String sql = "update order_table set orderStatus=? where orId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, OrderStatus.DELIVERY_IN_PROCESS);
            pstmt.setString(2, orId);

            pstmt.executeUpdate();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public int countAllHistoryOrder() {

        String sql = "select count(*) from order_table where orderStatus=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, OrderStatus.RECEIVED_GOOD);

            ResultSet res = pstmt.executeQuery();

            int total = 0;

            while (res.next())
                total += res.getInt(1);

            return total;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public List<Order> getHistoryOrderList(int start, int length) {

        String sql = "select top " + length + " * from order_table where orderStatus='" + OrderStatus.RECEIVED_GOOD + "' and (orId not in(select top " + start + "orId from order_table where orderStatus='" + OrderStatus.RECEIVED_GOOD + "'order by orId))";

        List<Order> orders = null;

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            orders = encapsulationOrder(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return orders;
    }

    public List<Order> encapsulationOrder(ResultSet res) {

        List<Order> orders = new ArrayList<Order>();

        try {
            while (res.next()) {

                Order order = new Order();

                order.setOrId(res.getString(OrderFields.ORID));
                order.setUsId(res.getLong(OrderFields.USID));
                order.setMgId(res.getLong(OrderFields.MGID));

                order.setTotalCost(res.getDouble(OrderFields.TOTALCOST));
                order.setProductAmount(res.getLong(OrderFields.PRODUCTAMOUNT));
                order.setDeliverCost(res.getDouble(OrderFields.DELIVERCOST));
                order.setProductCost(res.getDouble(OrderFields.PRODUCTCOST));

                order.setOrderStatus(res.getString(OrderFields.ORDERSTATUS));
                order.setPayType(res.getString(OrderFields.PAYTYPE));
                order.setCreatorTime(res.getString(OrderFields.CREATORTIME));
                order.setUpdateTime(res.getString(OrderFields.UPDATETIME));
                order.setReceiverTime(res.getString(OrderFields.RECEIVERTIME));
                order.setReceiverAddress(res.getString(OrderFields.RECEIVERADDRESS));
                order.setReceiverMobile(res.getString(OrderFields.RECEIVERMOBILE));
                order.setReceiverName(res.getString(OrderFields.RECEIVERNAME));
                order.setReceiverSex(res.getString(OrderFields.RECEIVERSEX));
                order.setUsername(res.getString(OrderFields.USERNAME));

                orders.add(order);

            }
            return orders;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
