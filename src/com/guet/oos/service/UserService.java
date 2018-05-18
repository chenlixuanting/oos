package com.guet.oos.service;

import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.po.User;

public interface UserService {

    public User findByMobile(String mobile);

    public boolean createUser(User vo);

    public boolean transformToFormalUser(TemporaryUserInfo userInfo);

}
