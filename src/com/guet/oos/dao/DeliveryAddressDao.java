package com.guet.oos.dao;

import com.guet.oos.po.DeliveryAddress;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface DeliveryAddressDao extends IDAO<Long, DeliveryAddress> {

    public List<DeliveryAddress> findByUserId(long usId);

}
