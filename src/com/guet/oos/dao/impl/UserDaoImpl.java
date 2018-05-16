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
        // TODO Auto-generated constructor stub
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
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public User findById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<User> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<User> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Integer getAllCount(String column, String keyWord) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    @Override
    public Integer getAllCount() {
        return null;
    }

    @Override
    public List<User> findByMobile(String mobile) {

        String sql = "select * from user_table where mobile = ?";

        List<User> users = new ArrayList<User>();

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            super.pstmt.setString(1, mobile);

            ResultSet res = super.pstmt.executeQuery();

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
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return users;
    }

}
