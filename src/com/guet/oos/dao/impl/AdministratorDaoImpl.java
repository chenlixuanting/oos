package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.AdministratorDao;
import com.guet.oos.fields.AdministratorFields;
import com.guet.oos.po.Administrator;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/4/29.
 */
public class AdministratorDaoImpl extends AbstractDAOImpl implements AdministratorDao {

    public AdministratorDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(Administrator vo) {

        String sql = "insert into administrator_table(username,password,maximumAuthority,creator,creatorTime,updateTime) values(?,?,?,?,?,?)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setString(1, vo.getUsername());
            super.pstmt.setString(2, vo.getPassword());
            super.pstmt.setBoolean(3, vo.isMaximumAuthority());
            super.pstmt.setString(4, vo.getCreator());
            super.pstmt.setString(5, vo.getCreatorTime());
            super.pstmt.setString(6, vo.getUpdateTime());
            pstmt.execute();
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public boolean doUpdate(Administrator vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public Administrator findById(Long id) {
        return null;
    }

    @Override
    public List<Administrator> findAll() {
        return null;
    }

    @Override
    public List<Administrator> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }

    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    @Override
    public Integer getAllCount() {

        String sql = "select count(*) from administrator_table";

        try {
            pstmt = conn.prepareStatement(sql);

            int total = 0;

            ResultSet res = pstmt.executeQuery();

            while (res.next()) {
                total += res.getInt(1);
            }

            return total;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public List<Administrator> findByUsername(String username) {

        String sql = "select * from administrator_table where username= ? ";

        List<Administrator> admins = new ArrayList<Administrator>();

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            pstmt.setString(1, username);

            ResultSet res = super.pstmt.executeQuery();

            while (res.next()) {
                Administrator a = new Administrator();
                a.setCreator(res.getString(AdministratorFields.CREATOR));
                a.setCreatorTime(res.getString(AdministratorFields.CREATORTIME));
                a.setMaximumAuthority(res.getBoolean(AdministratorFields.MAXIMUM_AUTHORITY));
                a.setMgId(res.getLong(AdministratorFields.MGID));
                a.setPassword(res.getString(AdministratorFields.PASSWORD));
                a.setUpdateTime(res.getString(AdministratorFields.UPDATETIME));
                a.setUsername(res.getString(AdministratorFields.USERNAME));
                admins.add(a);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return admins;
    }

    @Override
    public boolean updateAdministratorPassword(long mgId, String newPassword) {

        String sql = "update administrator_table set password=? where mgId=?";

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setLong(2, mgId);
            pstmt.setString(1, newPassword);
            pstmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public List<Administrator> getList(int start, int length) {

        int num1 = length + start;

        int num2 = start;

        List<Administrator> administrators = null;

        String sql = "select top " + num1 + " * from administrator_table where mgId not in (select top " + num2 +
                " mgId from administrator_table)";

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            administrators = encapsulationAdministrator(res);

            return administrators;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * 将封装管理员记录
     *
     * @param res
     * @return
     */
    public List<Administrator> encapsulationAdministrator(ResultSet res) {

        List<Administrator> administrators = new ArrayList<Administrator>();

        try {
            while (res.next()) {
                Administrator administrator = new Administrator();
                administrator.setMgId(res.getLong(AdministratorFields.MGID));
                administrator.setUsername(res.getString(AdministratorFields.USERNAME));
                administrator.setPassword(res.getString(AdministratorFields.PASSWORD));
                administrator.setMaximumAuthority(res.getBoolean(AdministratorFields.MAXIMUM_AUTHORITY));
                administrator.setCreator(res.getString(AdministratorFields.CREATOR));
                administrator.setCreatorTime(res.getString(AdministratorFields.CREATORTIME));
                administrator.setUpdateTime(res.getString(AdministratorFields.UPDATETIME));
                administrators.add(administrator);
            }

            return administrators;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
