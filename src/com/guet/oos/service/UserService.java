package com.guet.oos.service;

import com.guet.oos.dto.TemporaryUserInfo;
import com.guet.oos.po.User;

import java.util.List;

public interface UserService {

    public User findByMobile(String mobile);

    public boolean createUser(User vo);

    public boolean transformToFormalUser(TemporaryUserInfo userInfo);

    public boolean updateUserName(String username, long usId);

    public boolean updateUserSex(String sex, long usId);

    public boolean updateUserPassword(String newPassword, long usId);

    public User findByUserId(long usId);

    public List<User> getAllUser();

    public int getAllCount();

    public List<User> getList(int start, int length);

}
