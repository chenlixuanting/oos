package com.guet.oos.dao;

import java.util.List;

import com.guet.oos.po.User;

public interface UserDao extends IDAO<Long, User> {

    /**
     * 通过电话号码查找用户
     *
     * @param mobile 电话号码
     * @return
     * @throws Exception
     */
    public List<User> findByMobile(String mobile);

}
