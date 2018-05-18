package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.DeliveryAddressDao;
import com.guet.oos.fields.DeliverAddressFields;
import com.guet.oos.po.DeliveryAddress;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * 配送地址实体
 * <p>
 * Created by Shinelon on 2018/5/18.
 */
public class DeliveryAddressDaoImpl extends AbstractDAOImpl implements DeliveryAddressDao {

    public DeliveryAddressDaoImpl(Connection conn) {
        super(conn);
    }

    public List<DeliveryAddress> findByUserId(long usId) {

        String sql = "select * from delivery_address_table where usId=?";

        List<DeliveryAddress> deliveryAddressList;

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setLong(1, usId);

            ResultSet res = pstmt.executeQuery();
            deliveryAddressList = encapsulationDeliveryAddrss(res);
            return deliveryAddressList;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public boolean doCreate(DeliveryAddress vo) {

        String sql = "insert into delivery_address_table(usId,receiverName,receiverMobile,receiverAddress,receiverTime,isDefault,createTime,updateTime) values(?,?,?,?,?,?,?,?)";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, vo.getUsId());
            pstmt.setString(2, vo.getReceiverName());
            pstmt.setString(3, vo.getReceiverMobile());
            pstmt.setString(4, vo.getReceiverAddress());
            pstmt.setString(5, vo.getReceiverTime());
            pstmt.setBoolean(6, vo.isDefault());
            pstmt.setString(7, vo.getCreateTime());
            pstmt.setString(8, vo.getUpdateTime());

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

    }

    @Override
    public boolean doUpdate(DeliveryAddress vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public DeliveryAddress findById(Long id) {
        return null;
    }

    @Override
    public List<DeliveryAddress> findAll() {
        return null;
    }

    @Override
    public List<DeliveryAddress> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
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

    public List<DeliveryAddress> encapsulationDeliveryAddrss(ResultSet res) {

        List<DeliveryAddress> deliveryAddresses = new ArrayList<DeliveryAddress>();

        try {
            while (res.next()) {
                DeliveryAddress address = new DeliveryAddress();
                address.setDaId(res.getLong(DeliverAddressFields.DAID));
                address.setUsId(res.getLong(DeliverAddressFields.USID));
                address.setReceiverName(res.getString(DeliverAddressFields.RECEIVER_NAME));
                address.setReceiverMobile(res.getString(DeliverAddressFields.RECEIVER_MOBILE));
                address.setReceiverAddress(res.getString(DeliverAddressFields.RECEIVER_ADDRESS));
                address.setReceiverTime(res.getString(DeliverAddressFields.RECEIVER_TIME));
                address.setDefault(res.getBoolean(DeliverAddressFields.IS_DEFAULT));
                address.setCreateTime(res.getString(DeliverAddressFields.CREATE_TIME));
                address.setUpdateTime(res.getString(DeliverAddressFields.UPDATE_TIME));
                deliveryAddresses.add(address);
            }
            return deliveryAddresses;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }
}
