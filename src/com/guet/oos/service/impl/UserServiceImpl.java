package com.guet.oos.service.impl;

import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.dao.UserDao;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class UserServiceImpl implements UserService {

    private UserDao userDao = DAOFactory.getUserDaoInstance();

    @Override
    public User findByMobile(String mobile) {

        List<User> users = userDao.findByMobile(mobile);

        if (users.size() > 0) {
            return users.get(0);
        } else {
            return null;
        }
    }

    @Override
    public boolean createUser(User vo) {
        return userDao.doCreate(vo);
    }

    @Override
    public boolean transformToFormalUser(TemporaryUserInfo userInfo) {

        User user = new User();
        SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

        user.setMobile(userInfo.getAccount());
        user.setPassword(userInfo.getPassword());
        user.setUsername(userInfo.getUsername());
        user.setSex(userInfo.getSex());
        user.setCreatorTime(sf.format(new Date()));
        user.setUpdateTime(sf.format(new Date()));

        //将user持久化到数据库中
        createUser(user);

        return true;
    }

}
