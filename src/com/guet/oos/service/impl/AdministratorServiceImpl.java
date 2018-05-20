package com.guet.oos.service.impl;

import com.guet.oos.dao.AdministratorDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.service.AdministratorService;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/29.
 */
public class AdministratorServiceImpl implements AdministratorService {

    private AdministratorDao administratorDao = DAOFactory.getAdministratorDaoInstance();

    /**
     * 创建一个管理员账号
     *
     * @param administrator
     * @return
     */
    @Override
    public boolean creatorAdministrator(Administrator administrator) {
        return administratorDao.doCreate(administrator);
    }

    /**
     * 按名称查找管理员记录
     *
     * @param username
     * @return
     */
    @Override
    public List<Administrator> findByUsername(String username) {
        return administratorDao.findByUsername(username);
    }

    @Override
    public boolean updateAdministratorPassword(long mgId, String newPassword) {
        return administratorDao.updateAdministratorPassword(mgId, newPassword);
    }
}
