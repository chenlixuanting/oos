package com.guet.oos.service.impl;

import com.guet.oos.dao.DishesDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Dishes;
import com.guet.oos.service.DishesService;

import java.util.List;

/**
 * 餐品Dao实现类
 * Created by Shinelon on 2018/5/1.
 */
public class DishesServiceImpl implements DishesService {

    //注入餐品dao实现类
    private DishesDao dishesDao = DAOFactory.getDishDaoInstance();

    /**
     * 插入一条餐品记录
     *
     * @param dishes
     * @return
     */
    @Override
    public boolean createDishes(Dishes dishes) {
        return dishesDao.doCreate(dishes);
    }

    /**
     * 分页查询餐品记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Dishes> getList(int start, int length) {
        return dishesDao.getList(start, length);
    }

    /**
     * 统计所有餐品记录数
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return dishesDao.getAllCount();
    }

    /**
     * 通过ID查询餐品
     *
     * @param id
     * @return
     */
    @Override
    public Dishes queryById(Long id) {
        return dishesDao.findById(id);
    }

    /**
     * 查找指定列中指定值得餐品记录
     *
     * @param col1
     * @param word
     * @return
     */
    @Override
    public List<Dishes> getSpecifyColumnSpecifyWord(String col1, String word) {
        return dishesDao.getSecifyColumnSpecifyWord(col1, word);
    }

    /**
     * 更新餐品的库存
     *
     * @param dsId
     * @param number
     * @return
     */
    @Override
    public boolean updateDishesStoreByDishesId(long dsId, long number) {
        return dishesDao.updateDishesStoreByDishesId(dsId, number);
    }

    /**
     * 通过餐品ID查询餐品的库存
     *
     * @param dsId
     * @return
     */
    @Override
    public long queryDishesStockByDishesId(long dsId) {
        return dishesDao.queryDishesStockByDishesId(dsId);
    }

    /**
     * 通过餐品ID删除餐品记录
     *
     * @param dsId
     * @return
     */
    @Override
    public boolean deleteBydsId(long dsId) {
        return dishesDao.deleteByDsId(dsId);
    }

    /**
     * 更新餐品记录
     *
     * @param dishes
     * @return
     */
    @Override
    public boolean updateDishes(Dishes dishes) {
        return dishesDao.doUpdate(dishes);
    }

}
