package com.guet.oos.service;

import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;

import java.util.List;

/**
 * 收货地址Service接口
 * Created by Shinelon on 2018/5/18.
 */
public interface DeliveryAddressService {

    public boolean pickUpDeliveryAddress(TemporaryUserInfo userInfo, User user);

    public boolean createDeliveryAddress(DeliveryAddress deliveryAddress);

    public DeliveryAddress findUserDefaultDeliverAddress(long usId);

    public boolean userDefaultDeliverTime(long usId, String newTime);

    public List<DeliveryAddress> getDeliverAddressByUserId(long usId);

    public DeliveryAddress findById(long daId);

    public boolean setUserDefaultDeliverAddress(long usId, long daId);

    public boolean deleteByUsId(long usId);

    public boolean updateDeliveryAddress(DeliveryAddress deliveryAddress);

}
