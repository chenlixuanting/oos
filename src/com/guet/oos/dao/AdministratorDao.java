package com.guet.oos.dao;

import com.guet.oos.po.Administrator;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/29.
 */
public interface AdministratorDao extends IDAO<Long, Administrator> {

    public List<Administrator> findByUsername(String username);

}
