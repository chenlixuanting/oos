package com.guet.oos.service.impl;

import com.guet.oos.dao.DishesTypeDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.DishesType;
import com.guet.oos.service.DishesTypeService;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public class DishesTypeServiceImpl implements DishesTypeService {

    private DishesTypeDao dishesTypeDao = DAOFactory.getDishesTypeDao();

    @Override
    public boolean createDishesType(DishesType dishesType) {
        return dishesTypeDao.doCreate(dishesType);
    }

    @Override
    public int getAllCount() {
        return dishesTypeDao.getAllCount();
    }

    @Override
    public List<DishesType> getAllDishesType() {
        return dishesTypeDao.findAll();
    }

    @Override
    public List<DishesType> getList(int start, int length) {
        return dishesTypeDao.getList(start, length);
    }

    @Override
    public List<String> getAllCount(String column) {
        return null;
    }

    @Override
    public List<String> getSpecifyColumn(String column) {
        return dishesTypeDao.getSpecifyColumn(column);
    }

    @Override
    public List<String> getSpecifyColumnSpecifyValue(String col1, String col2, String value) {
        return dishesTypeDao.getSpecifyColumnSpecifyValue(col1, col2, value);
    }

}
