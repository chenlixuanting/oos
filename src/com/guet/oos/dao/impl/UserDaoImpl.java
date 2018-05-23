package com.guet.oos.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.UserDao;
import com.guet.oos.fields.UserFields;
import com.guet.oos.po.User;

public class UserDaoImpl extends AbstractDAOImpl implements UserDao {

    public UserDaoImpl(Connection conn) {
        super(conn);
    }

    /**
     * 插入一条新用户记录
     */
    @Override
    public boolean doCreate(User vo) {

        try {
            String sql = "insert into user_table(mobile,username,sex,creatorTime,updateTime,password) values(?,?,?,?,?,?)";
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setString(1, vo.getMobile());
            super.pstmt.setString(2, vo.getUsername());
            super.pstmt.setString(3, vo.getSex());
            super.pstmt.setString(4, vo.getCreatorTime());
            super.pstmt.setString(5, vo.getUpdateTime());
            super.pstmt.setString(6, vo.getPassword());
            pstmt.execute();
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public boolean doUpdate(User vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public User findById(Long id) {

        String sql = "select * from user_table where usId=?";

        User user = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, id);

            ResultSet res = pstmt.executeQuery();

            user = encapsulationUser(res);

            return user;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<User> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<User> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
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

        String sql = "select count(*) from user_table";

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            int total = 0;

            while (res.next()) {
                total += res.getInt(1);
            }

            return total;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<User> findByMobile(String mobile) {

        String sql = "select * from user_table where mobile = ?";

        List<User> users = null;

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setString(1, mobile);

            ResultSet res = super.pstmt.executeQuery();

            users = encapsulationUserList(res);

            return users;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public List<User> encapsulationUserList(ResultSet res) {

        List<User> users = new ArrayList<User>();

        try {
            while (res.next()) {
                User u = new User();
                u.setUsId(res.getLong(UserFields.USID));
                u.setMobile(res.getString(UserFields.MOBILE));
                u.setPassword(res.getString(UserFields.PASSWORD));
                u.setSex(res.getString(UserFields.SEX));
                u.setUsername(res.getString(UserFields.USERNAME));
                u.setCreatorTime(res.getString(UserFields.CREATORTIME));
                u.setUpdateTime(res.getString(UserFields.UPDATETIME));
                users.add(u);
            }

            return users;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public User encapsulationUser(ResultSet res) {

        List<User> userList = encapsulationUserList(res);

        if (userList.size() != 0) {
            return userList.get(0);
        } else {
            return null;
        }

    }

    @Override
    public boolean updateUsername(String username, long usId) {

        String sql = "update user_table set username=? where usId=?";

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, username);
            pstmt.setLong(2, usId);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public boolean updateUserSex(String sex, long usId) {

        String sql = "update user_table set sex=? where usId=?";

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, sex);
            pstmt.setLong(2, usId);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

        return true;

    }

    @Override
    public boolean updateUserPassword(String newPassword, long usId) {

        String sql = "update user_table set password=? where usId=?";

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, newPassword);
            pstmt.setLong(2, usId);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

        return true;

    }

    @Override
    public List<User> getAllUser() {

        String sql = "select * from user_table";

        List<User> users = null;

        try {
            pstmt = conn.prepareStatement(sql);
            ResultSet res = pstmt.executeQuery();
            users = encapsulationUserList(res);
            return users;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<User> getList(int start, int length) {

        List<User> users = null;

        String sql = "select top " + length + " * from user_table where usId not in (select top " + start +
                " usId from user_table)";

        try {
            pstmt = conn.prepareStatement(sql);
            ResultSet res = pstmt.executeQuery();
            users = encapsulationUserList(res);
            return users;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

}
