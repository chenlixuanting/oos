package com.guet.oos.dao;

import com.guet.oos.po.Administrator;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/29.
 */
public interface AdministratorDao extends IDAO<Long, Administrator> {

    public List<Administrator> findByUsername(String username);

    public boolean updateAdministratorPassword(long mgId, String newPassword);

    public List<Administrator> getList(int start, int length);

    public boolean deleteByMgId(long mgId);

    public boolean updateByMgId(Administrator administrator);

}
