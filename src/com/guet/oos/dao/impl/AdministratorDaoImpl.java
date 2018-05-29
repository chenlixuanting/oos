package com.guet.oos.dao.impl;

import com.guet.oos.constant.AdminStatus;
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
 * 管理员Dao实现类
 * <p>
 * Created by Shinelon on 2018/4/29.
 */
public class AdministratorDaoImpl extends AbstractDAOImpl implements AdministratorDao {

    /**
     * 获取管理的Class对象
     *
     * @param conn
     */
    public AdministratorDaoImpl(Connection conn) {
        super(conn);
    }

    /**
     * 插入一条管理员记录
     *
     * @param vo 表示要执行操作的对象
     * @return
     */
    @Override
    public boolean doCreate(Administrator vo) {

        String sql = "insert into administrator_table(username,password,maximumAuthority,creator,creatorTime,updateTime,adminStatus) values(?,?,?,?,?,?,?)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setString(1, vo.getUsername());
            super.pstmt.setString(2, vo.getPassword());
            super.pstmt.setBoolean(3, vo.isMaximumAuthority());
            super.pstmt.setString(4, vo.getCreator());
            super.pstmt.setString(5, vo.getCreatorTime());
            super.pstmt.setString(6, vo.getUpdateTime());

            pstmt.setString(7, vo.getAdminStatus());

            pstmt.execute();

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    /**
     * 更新管理员记录
     *
     * @param vo 表示要执行更新的对象
     * @return
     */
    @Override
    public boolean doUpdate(Administrator vo) {
        return false;
    }

    /**
     * 删除管理员记录
     *
     * @param ids 表示要执行删除的数据集合
     * @return
     */
    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    /**
     * 通过管理员ID查找管理员
     *
     * @param id 表示要查询的id
     * @return
     */
    @Override
    public Administrator findById(Long id) {

        String sql = "select * from administrator_table where mgId=?";

        Administrator administrator = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, id);

            ResultSet res = pstmt.executeQuery();

            List<Administrator> administrators = encapsulationAdministrator(res);

            if (administrators.size() > 0) {
                administrator = administrators.get(0);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return administrator;
    }

    /**
     * 查找所有的管理员
     *
     * @return
     */
    @Override
    public List<Administrator> findAll() {
        return null;
    }

    /**
     * 分页查找
     *
     * @param column      表示要执行查询的列
     * @param keyWord     表示查询关键字
     * @param currentPage 表示当前页
     * @param lineSize    表示每页显示记录数
     * @return
     */
    @Override
    public List<Administrator> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    /**
     * 通过指定值，统计相应的管理员记录
     *
     * @param column  表示要查询的列
     * @param keyWord 表示查询关键字
     * @return
     */
    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }

    /**
     * 统计指定的记录
     *
     * @param column 表示要查询的列
     * @return
     */
    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    /**
     * 统计所有管理员记录
     *
     * @return
     */
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

    /**
     * 通过指定管理员名称查找管理员记录
     *
     * @param username
     * @return
     */
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
                a.setAdminStatus(res.getString(AdministratorFields.ADMIN_STATUS));
                admins.add(a);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return admins;
    }

    /**
     * 更新指定管理员记录的密码
     *
     * @param mgId
     * @param newPassword
     * @return
     */
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

    /**
     * 管理员记录分页
     *
     * @param start
     * @param length
     * @return
     */
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
     * 通过管理员ID删除指定的管理员记录
     *
     * @param mgId
     * @return
     */
    @Override
    public boolean deleteByMgId(long mgId) {

        String sql = "UPDATE administrator_table SET adminStatus=? where mgId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, AdminStatus.DISABLE);
            pstmt.setLong(2, mgId);

            pstmt.executeUpdate();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * 通过指定的ID更新管理员记录
     *
     * @param administrator
     * @return
     */
    @Override
    public boolean updateByMgId(Administrator administrator) {

        /**
         private long mgId;// 管理员ID
         private String username;// 账号
         private String password;// 密码
         private boolean maximumAuthority;// 最高权限
         private String creator;// 创建者
         private String adminStatus;//管理员状态
         private String creatorTime;// 创建时间
         private String updateTime;// 更新时间
         */

        String sql = "update administrator_table set username=?,password=?,maximumAuthority=?,creator=?,adminStatus=?,updateTime=? where mgId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, administrator.getUsername());
            pstmt.setString(2, administrator.getPassword());
            pstmt.setBoolean(3, administrator.isMaximumAuthority());
            pstmt.setString(4, administrator.getCreator());
            pstmt.setString(5, administrator.getAdminStatus());
            pstmt.setString(6, administrator.getUpdateTime());
            pstmt.setLong(7, administrator.getMgId());

            pstmt.executeUpdate();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
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
                administrator.setAdminStatus(res.getString(AdministratorFields.ADMIN_STATUS));
                administrators.add(administrator);
            }

            return administrators;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;

    }
}
