package com.guet.oos.service;

import com.guet.oos.po.Administrator;

import java.util.List;

/**
 * 管理员Service接口
 * Created by Shinelon on 2018/4/29.
 */
public interface AdministratorService {

    public boolean creatorAdministrator(Administrator administrator);

    public List<Administrator> findByUsername(String username);

    public boolean updateAdministratorPassword(long mgId, String newPassword);

    public int getAllCount();

    public List<Administrator> getList(int start, int length);

    public Administrator findById(long mgId);

    public boolean deleteByMgId(long mgId);

    public boolean updateByMgId(Administrator administrator);
}
