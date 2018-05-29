package com.guet.oos.service.impl;

import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.dao.UserDao;
import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.fields.UserFields;
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

    @Override
    public boolean updateUserName(String username, long usId) {
        return userDao.updateUsername(username, usId);
    }

    @Override
    public boolean updateUserSex(String sex, long usId) {
        return userDao.updateUserSex(sex, usId);
    }

    @Override
    public boolean updateUserPassword(String newPassword, long usId) {
        return userDao.updateUserPassword(newPassword, usId);
    }

    @Override
    public User findByUserId(long usId) {
        return userDao.findById(usId);
    }

    @Override
    public List<User> getAllUser() {
        return userDao.getAllUser();
    }

    @Override
    public int getAllCount() {
        return userDao.getAllCount();
    }

    @Override
    public List<User> getList(int start, int length) {
        return userDao.getList(start, length);
    }

    @Override
    public boolean deleteById(long usId) {
        return userDao.deleteById(usId);
    }

    @Override
    public boolean updateUser(User user) {
        return userDao.updateUser(user);
    }

}
