package com.guet.oos.service;

import com.guet.oos.po.Administrator;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/29.
 */
public interface AdministratorService {

    public boolean creatorAdministrator(Administrator administrator);

    public List<Administrator> findByUsername(String username);

    public boolean updateAdministratorPassword(long mgId, String newPassword);

    public int getAllCount();

    public List<Administrator> getList(int start, int length);
}
