package com.guet.oos.service;

import java.util.List;

import com.guet.oos.po.User;

public interface UserService {

	public List<User> findByMobile(String mobile);

	public boolean creatUser(User vo);

}
