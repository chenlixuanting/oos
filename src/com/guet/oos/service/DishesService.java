package com.guet.oos.service;

import com.guet.oos.po.Dishes;

import java.util.List;

/**
 * 餐品Service接口
 * Created by Shinelon on 2018/5/1.
 */
public interface DishesService {

    public boolean createDishes(Dishes dishes);

    public List<Dishes> getList(int start, int length);

    public int getAllCount();

    public Dishes queryById(Long id);

    public List<Dishes> getSpecifyColumnSpecifyWord(String col1, String word);

    public boolean updateDishesStoreByDishesId(long dsId, long number);

    public long queryDishesStockByDishesId(long dsId);

    public boolean deleteBydsId(long dsId);

    public boolean updateDishes(Dishes dishes);

    public boolean deleteByDishesType(String dishesType);

}
