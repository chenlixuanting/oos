package com.guet.oos.dao;

import java.util.List;

import com.guet.oos.po.User;

/**
 * 用户Dao接口
 */
public interface UserDao extends IDAO<Long, User> {

    /**
     * 通过电话号码查找用户
     *
     * @param mobile 电话号码
     * @return
     * @throws Exception
     */
    public List<User> findByMobile(String mobile);

    public boolean updateUsername(String username, long usId);

    public boolean updateUserSex(String sex, long usId);

    public boolean updateUserPassword(String newPassword, long usId);

    public List<User> getAllUser();

    public List<User> getList(int start, int length);

    public boolean deleteById(long usId);

    public boolean updateUser(User user);
}
