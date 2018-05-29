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

/**
 * 用户Servie实现类
 */
public class UserServiceImpl implements UserService {

    //注入Userdao实现类
    private UserDao userDao = DAOFactory.getUserDaoInstance();

    /**
     * 通过电话查找User
     *
     * @param mobile
     * @return
     */
    @Override
    public User findByMobile(String mobile) {

        List<User> users = userDao.findByMobile(mobile);

        if (users.size() > 0) {
            return users.get(0);
        } else {
            return null;
        }
    }

    /**
     * 插入一条User记录
     *
     * @param vo
     * @return
     */
    @Override
    public boolean createUser(User vo) {
        return userDao.doCreate(vo);
    }

    /**
     * 提取临时用户信息，组册成正式用户
     *
     * @param userInfo
     * @return
     */
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

    /**
     * 更新用户名
     *
     * @param username
     * @param usId
     * @return
     */
    @Override
    public boolean updateUserName(String username, long usId) {
        return userDao.updateUsername(username, usId);
    }

    /**
     * 更新用户性别
     *
     * @param sex
     * @param usId
     * @return
     */
    @Override
    public boolean updateUserSex(String sex, long usId) {
        return userDao.updateUserSex(sex, usId);
    }

    /**
     * 更新用户密码
     *
     * @param newPassword
     * @param usId
     * @return
     */
    @Override
    public boolean updateUserPassword(String newPassword, long usId) {
        return userDao.updateUserPassword(newPassword, usId);
    }

    /**
     * 通过usId查找用户记录
     *
     * @param usId
     * @return
     */
    @Override
    public User findByUserId(long usId) {
        return userDao.findById(usId);
    }

    /**
     * 获取所有用户记录
     *
     * @return
     */
    @Override
    public List<User> getAllUser() {
        return userDao.getAllUser();
    }

    /**
     * 统计所有用户记录
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return userDao.getAllCount();
    }

    /**
     * 分页查询用户记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<User> getList(int start, int length) {
        return userDao.getList(start, length);
    }

    /**
     * 通过Id删除用户记录
     *
     * @param usId
     * @return
     */
    @Override
    public boolean deleteById(long usId) {
        return userDao.deleteById(usId);
    }

    /**
     * 更新用户记录
     *
     * @param user
     * @return
     */
    @Override
    public boolean updateUser(User user) {
        return userDao.updateUser(user);
    }

}
