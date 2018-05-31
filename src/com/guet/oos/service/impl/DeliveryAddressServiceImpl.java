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
 * 收货地Dao实现类
 * <p>
 * Created by Shinelon on 2018/5/18.
 */
public class DeliveryAddressServiceImpl implements DeliveryAddressService {

    //注入收货地址Dao实现类
    private DeliveryAddressDao deliveryAddressDao = DAOFactory.getDeliveryAddressDaoInstance();

    /***
     * 从TemporaryUserInfo中提取用户收获地址信息，并插入数据库
     * @param userInfo
     * @param user
     * @return
     */
    @Override
    public boolean pickUpDeliveryAddress(TemporaryUserInfo userInfo, User user) {

        DeliveryAddress deliveryAddress = new DeliveryAddress();

        StringBuilder strAddress = new StringBuilder(userInfo.getCityName() + " " + userInfo.getRoadName() + "(" + userInfo.getAddressDetial() + ")");

        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        deliveryAddress.setUsId(user.getUsId());
        deliveryAddress.setReceiverName(userInfo.getDeliverName());
        deliveryAddress.setReceiverMobile(userInfo.getMobile());
        deliveryAddress.setReceiverAddress(strAddress.toString());
        deliveryAddress.setReceiverTime(userInfo.getDeliverTime());
        deliveryAddress.setDefault(true);
        deliveryAddress.setReceiverSex(userInfo.getDeliverSex());
        deliveryAddress.setCreateTime(sf.format(new Date()));
        deliveryAddress.setUpdateTime(sf.format(new Date()));

        //将送货地址信息保存到数据库中
        createDeliveryAddress(deliveryAddress);

        return true;
    }

    /**
     * 插入一条收货地址信息记录
     *
     * @param deliveryAddress
     * @return
     */
    @Override
    public boolean createDeliveryAddress(DeliveryAddress deliveryAddress) {
        return deliveryAddressDao.doCreate(deliveryAddress);
    }

    /**
     * 通过用户ID查找用户默认的收货地址记录
     *
     * @param usId
     * @return
     */
    @Override
    public DeliveryAddress findUserDefaultDeliverAddress(long usId) {

        List<DeliveryAddress> addresses = deliveryAddressDao.findByUserId(usId);

        for (DeliveryAddress ds : addresses) {
            if (ds.isDefault())
                return ds;
        }

        return null;
    }

    /**
     * 设置用户默认收货时间
     *
     * @param usId
     * @param newTime
     * @return
     */
    @Override
    public boolean userDefaultDeliverTime(long usId, String newTime) {
        return deliveryAddressDao.userDefaultDeliverTime(usId, newTime);
    }

    /**
     * 获得指定用户ID的所有的收货地址
     *
     * @param usId
     * @return
     */
    @Override
    public List<DeliveryAddress> getDeliverAddressByUserId(long usId) {
        return deliveryAddressDao.findByUserId(usId);
    }

    /**
     * 通过ID查找用户的收货地址
     *
     * @param daId
     * @return
     */
    @Override
    public DeliveryAddress findById(long daId) {
        return deliveryAddressDao.findById(daId);
    }

    /**
     * 设置指定用户的默认收货地址
     *
     * @param usId
     * @param daId
     * @return
     */
    @Override
    public boolean setUserDefaultDeliverAddress(long usId, long daId) {
        return deliveryAddressDao.updateUserDefaultDeliverAddress(usId, daId);
    }

    /**
     * 删除指定用户的收货地址
     *
     * @param usId
     * @return
     */
    @Override
    public boolean deleteByUsId(long usId) {
        return deliveryAddressDao.deleteByUsId(usId);
    }

    /**
     * 更新用户的收货地址
     *
     * @param deliveryAddress
     * @return
     */
    @Override
    public boolean updateDeliveryAddress(DeliveryAddress deliveryAddress) {
        return deliveryAddressDao.updateDeliveryAddress(deliveryAddress);
    }

    @Override
    public boolean deleteByDaId(long daId) {
        return deliveryAddressDao.deleteByDaId(daId);
    }

}
