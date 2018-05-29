package com.guet.oos.service.impl;

import com.guet.oos.dao.AdministratorDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.service.AdministratorService;

import java.util.List;

/**
 * 管理员Service实现类
 */
public class AdministratorServiceImpl implements AdministratorService {

    //注入管理员Dao
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

    /**
     * 更新管理员的密码
     *
     * @param mgId
     * @param newPassword
     * @return
     */
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

    /**
     * 通过ID查找管理员
     *
     * @param mgId
     * @return
     */
    @Override
    public Administrator findById(long mgId) {
        return administratorDao.findById(mgId);
    }

    /**
     * 通过ID删除管理员
     *
     * @param mgId
     * @return
     */
    @Override
    public boolean deleteByMgId(long mgId) {
        return administratorDao.deleteByMgId(mgId);
    }

    /**
     * 更新管理员记录
     *
     * @param administrator
     * @return
     */
    @Override
    public boolean updateByMgId(Administrator administrator) {
        return administratorDao.updateByMgId(administrator);
    }

}
