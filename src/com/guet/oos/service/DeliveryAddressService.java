package com.guet.oos.service;

import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;

/**
 * Created by Shinelon on 2018/5/18.
 */
public interface DeliveryAddressService {

    public boolean pickUpDeliveryAddress(TemporaryUserInfo userInfo, User user);

    public boolean createDeliveryAddress(DeliveryAddress deliveryAddress);

    public DeliveryAddress findUserDefaultDeliverAddress(long usId);

    public boolean userDefaultDeliverTime(long usId, String newTime);
}
