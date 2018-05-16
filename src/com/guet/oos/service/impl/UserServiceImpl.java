package com.guet.oos.service.impl;

import com.guet.oos.dao.UserDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.User;
import com.guet.oos.service.UserService;

import java.util.List;

public class UserServiceImpl implements UserService {

    private UserDao userDao = DAOFactory.getUserDaoInstance();

    @Override
    public List<User> findByMobile(String mobile) {
        try {
            return userDao.findByMobile(mobile);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean creatUser(User vo) {
        return userDao.doCreate(vo);
    }

}
