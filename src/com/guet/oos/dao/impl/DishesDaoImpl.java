package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.DishesDao;
import com.guet.oos.fields.DishesFields;
import com.guet.oos.po.Dishes;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * 餐品Dao实现类
 * Created by Shinelon on 2018/5/1.
 */
public class DishesDaoImpl extends AbstractDAOImpl implements DishesDao {

    public DishesDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(Dishes vo) {

        String sql = "insert into dishes_table(mgId,price,stock,dishesName,describe,picAddress,createTime,updateTime,dishesType) values(?,?,?,?,?,?,?,?,?)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            super.pstmt.setLong(1, vo.getMgId());
            super.pstmt.setDouble(2, vo.getPrice());
            super.pstmt.setLong(3, vo.getStock());
            super.pstmt.setString(4, vo.getDishesName());
            super.pstmt.setString(5, vo.getDescribe());
            super.pstmt.setString(6, vo.getPicAddress());
            super.pstmt.setString(7, vo.getCreateTime());
            super.pstmt.setString(8, vo.getUpdateTime());
            super.pstmt.setString(9, vo.getDishesType());

            super.pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

    }

    @Override
    public boolean doUpdate(Dishes vo) {

        String sql = "update dishes_table set price=?,stock=?,dishesType=?,dishesName=?,describe=?,picAddress=?,updateTime=? where dsId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setDouble(1, vo.getPrice());
            pstmt.setLong(2, vo.getStock());
            pstmt.setString(3, vo.getDishesType());
            pstmt.setString(4, vo.getDishesName());
            pstmt.setString(5, vo.getDescribe());
            pstmt.setString(6, vo.getPicAddress());
            pstmt.setString(7, vo.getUpdateTime());
            pstmt.setLong(8, vo.getDsId());

            pstmt.executeUpdate();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public Dishes findById(Long id) {

        String sql = "select * from dishes_table where dsId=?";

        Dishes dishes = null;

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            super.pstmt.setLong(1, id);

            ResultSet res = super.pstmt.executeQuery();

            dishes = encapsulationDishes(res).get(0);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return dishes;
    }

    @Override
    public List<Dishes> findAll() {
        return null;
    }

    @Override
    public List<Dishes> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
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

        String sql = "select count(*) from dishes_table";

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            int total = 0;

            if (res.next())
                total += res.getInt(1);

            return total;
        } catch (SQLException e) {
            e.printStackTrace();
            return 0;
        }

    }

    @Override
    public List<Dishes> getList(int start, int length) {

        List<Dishes> dishesList = null;

        String sql = "select top " + length + " * from dishes_table where dsId not in (select top " + start +
                " dsId from dishes_table)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            dishesList = encapsulationDishes(res);

            return dishesList;

        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }

    }

    @Override
    public List<Dishes> getSecifyColumnSpecifyWord(String col1, String word) {

        String sql = "select * from dishes_table where " + col1 + "=?";

        List<Dishes> dishesList = null;

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            super.pstmt.setString(1, word);

            ResultSet res = super.pstmt.executeQuery();

            dishesList = encapsulationDishes(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return dishesList;
    }

    @Override
    public boolean updateDishesStoreByDishesId(long dsId, long number) {

        String sql = "update dishes_table set stock=? where dsId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, number);
            pstmt.setLong(2, dsId);

            pstmt.executeUpdate();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public long queryDishesStockByDishesId(long dsId) {

        String sql = "select stock from dishes_table where dsId=?";

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setLong(1, dsId);
            ResultSet res = pstmt.executeQuery();

            int stock = 0;

            while (res.next()) {
                stock += res.getLong(1);
            }

            return stock;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public boolean deleteByDsId(long dsId) {

        String sql = "delete from dishes_table where dsId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, dsId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean deleteByDishesType(String dishesType) {

        String sql = "delete from dishes_table where dishesType=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, dishesType);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }


        return false;
    }

    private List<Dishes> encapsulationDishes(ResultSet res) throws SQLException {

        List<Dishes> dishesList = new ArrayList<Dishes>();

        while (res.next()) {

            Dishes dishes = new Dishes();

            dishes.setUpdateTime(res.getString(DishesFields.UPDATE_TIME));
            dishes.setStock(res.getLong(DishesFields.STOCK));
            dishes.setPrice(res.getDouble(DishesFields.PRICE));
            dishes.setPicAddress(res.getString(DishesFields.PIC_ADDRESS));
            dishes.setMgId(res.getLong(DishesFields.MGID));
            dishes.setDishesName(res.getString(DishesFields.DISHES_NAME));
            dishes.setDescribe(res.getString(DishesFields.DESCRIBE));
            dishes.setCreateTime(res.getString(DishesFields.CREATE_TIME));
            dishes.setDishesType(res.getString(DishesFields.DISHES_TYPE));
            dishes.setDsId(Long.valueOf(res.getString(DishesFields.DSID)));

            dishesList.add(dishes);
        }

        return dishesList;

    }
}
