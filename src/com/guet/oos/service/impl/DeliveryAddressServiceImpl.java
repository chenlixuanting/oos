package com.guet.oos.service.impl;

import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.dao.DeliveryAddressDao;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by Shinelon on 2018/5/18.
 */
public class DeliveryAddressServiceImpl implements DeliveryAddressService {

    private DeliveryAddressDao deliveryAddressDao = DAOFactory.getDeliveryAddressDaoInstance();

    @Override
    public boolean pickUpDeliveryAddress(TemporaryUserInfo userInfo, User user) {

        DeliveryAddress deliveryAddress = new DeliveryAddress();

        StringBuilder strAddress = new StringBuilder(userInfo.getCityName() + " " + userInfo.getRoadName() +
                "(" + userInfo.getAddressDetial() + ")" + " " + userInfo.getDeliverName() + " " + userInfo.getDeliverSex());

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        deliveryAddress.setUsId(user.getUsId());
        deliveryAddress.setReceiverName(userInfo.getDeliverName());
        deliveryAddress.setReceiverMobile(userInfo.getMobile());
        deliveryAddress.setReceiverAddress(strAddress.toString());
        deliveryAddress.setDefault(true);
        deliveryAddress.setCreateTime(sf.format(new Date()));
        deliveryAddress.setUpdateTime(sf.format(new Date()));

        //将送货地址信息保存到数据库中
        createDeliveryAddress(deliveryAddress);

        return true;
    }

    @Override
    public boolean createDeliveryAddress(DeliveryAddress deliveryAddress) {
        return deliveryAddressDao.doCreate(deliveryAddress);
    }

    @Override
    public DeliveryAddress findUserDefaultDeliverAddress(long usId) {

        List<DeliveryAddress> addresses = deliveryAddressDao.findByUserId(usId);

        for (DeliveryAddress ds : addresses) {
            if (ds.isDefault())
                return ds;
        }

        return null;
    }

}
