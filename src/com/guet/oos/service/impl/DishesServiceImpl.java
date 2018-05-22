package com.guet.oos.service.impl;

import com.guet.oos.dao.DishesDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/1.
 */
public class DishesServiceImpl implements DishesService {

    private DishesDao dishesDao = DAOFactory.getDishDaoInstance();

    @Override
    public boolean createDishes(Dishes dishes) {
        return dishesDao.doCreate(dishes);
    }

    @Override
    public List<Dishes> getList(int start, int length) {
        return dishesDao.getList(start, length);
    }

    @Override
    public int getAllCount() {
        return dishesDao.getAllCount();
    }

    @Override
    public Dishes queryById(Long id) {
        return dishesDao.findById(id);
    }

    @Override
    public List<Dishes> getSpecifyColumnSpecifyWord(String col1, String word) {
        return dishesDao.getSecifyColumnSpecifyWord(col1, word);
    }

    @Override
    public boolean updateDishesStoreByDishesId(long dsId, long number) {
        return dishesDao.updateDishesStoreByDishesId(dsId, number);
    }

    @Override
    public long queryDishesStockByDishesId(long dsId) {
        return dishesDao.queryDishesStockByDishesId(dsId);
    }

}
