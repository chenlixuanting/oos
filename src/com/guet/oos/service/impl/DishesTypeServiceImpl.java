package com.guet.oos.service.impl;

import com.guet.oos.dao.DishesTypeDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.DishesType;
import com.guet.oos.service.DishesTypeService;

import java.util.List;

/**
 * 餐品种类Service实现类
 * Created by Shinelon on 2018/4/30.
 */
public class DishesTypeServiceImpl implements DishesTypeService {

    //注入餐品种类Dao
    private DishesTypeDao dishesTypeDao = DAOFactory.getDishesTypeDao();

    /**
     * 插入一条餐品种类记录
     *
     * @param dishesType
     * @return
     */
    @Override
    public boolean createDishesType(DishesType dishesType) {
        return dishesTypeDao.doCreate(dishesType);
    }

    /**
     * 统计所有餐品种类记录
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return dishesTypeDao.getAllCount();
    }

    /**
     * 查询所有餐品种类记录
     *
     * @return
     */
    @Override
    public List<DishesType> getAllDishesType() {
        return dishesTypeDao.findAll();
    }

    /**
     * 分页查询所有餐品种类记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<DishesType> getList(int start, int length) {
        return dishesTypeDao.getList(start, length);
    }

    /**
     * 获取指定列的所有记录
     *
     * @param column
     * @return
     */
    @Override
    public List<String> getAllCount(String column) {
        return null;
    }

    /**
     * 获取指定列的所有记录
     *
     * @param column
     * @return
     */
    @Override
    public List<String> getSpecifyColumn(String column) {
        return dishesTypeDao.getSpecifyColumn(column);
    }

    /**
     * 获取指定列,指定值的所有记录
     *
     * @param col1
     * @param col2
     * @param value
     * @return
     */
    @Override
    public List<String> getSpecifyColumnSpecifyValue(String col1, String col2, String value) {
        return dishesTypeDao.getSpecifyColumnSpecifyValue(col1, col2, value);
    }

    /**
     * 通过DtId删除餐品种类记录
     *
     * @param dtId
     * @return
     */
    @Override
    public boolean deleteByDtId(long dtId) {
        return dishesTypeDao.deleteByDtId(dtId);
    }

    /**
     * 通过DtId获取指定餐品种类记录
     *
     * @param dtId
     * @return
     */
    @Override
    public DishesType getByDtId(long dtId) {
        return dishesTypeDao.findById(dtId);
    }

    /**
     * 更新指定餐品种类记录
     *
     * @param dishesType
     * @return
     */
    @Override
    public boolean updateDishesType(DishesType dishesType) {
        return dishesTypeDao.doUpdate(dishesType);
    }

}
