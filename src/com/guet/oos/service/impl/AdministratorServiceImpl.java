package com.guet.oos.service.impl;

import com.guet.oos.dao.AdministratorDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.AdministratorService;

import java.sql.ResultSet;
import java.sql.SQLException;
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

    /**
     * 统计总共有多少条管理员记录
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return administratorDao.getAllCount();
    }

    /**
     * 分页查询
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Administrator> getList(int start, int length) {
        return administratorDao.getList(start, length);
    }

    @Override
    public Administrator findById(long mgId) {
        return administratorDao.findById(mgId);
    }

    @Override
    public boolean deleteByMgId(long mgId) {
        return administratorDao.deleteByMgId(mgId);
    }

    @Override
    public boolean updateByMgId(Administrator administrator) {
        return administratorDao.updateByMgId(administrator);
    }

}
