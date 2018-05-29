package com.guet.oos.dao;

import com.guet.oos.po.DeliveryAddress;

import java.util.List;

/**
 * 送货地址Dao接口
 * Created by Shinelon on 2018/5/18.
 */
public interface DeliveryAddressDao extends IDAO<Long, DeliveryAddress> {

    public List<DeliveryAddress> findByUserId(long usId);

    public boolean userDefaultDeliverTime(long usId, String newTime);

    public boolean updateUserDefaultDeliverAddress(long usId, long daId);

    public boolean deleteByUsId(long usId);

    public boolean updateDeliveryAddress(DeliveryAddress deliveryAddress);
}
