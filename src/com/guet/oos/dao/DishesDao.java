package com.guet.oos.dao;

import com.guet.oos.po.Dishes;

import java.util.List;

/**
 * 餐品Dao接口
 * Created by Shinelon on 2018/5/1.
 */
public interface DishesDao extends IDAO<Long, Dishes> {

    public List<Dishes> getList(int start, int length);

    public List<Dishes> getSecifyColumnSpecifyWord(String col1, String word);

    public boolean updateDishesStoreByDishesId(long dsId, long number);

    public long queryDishesStockByDishesId(long dsId);

    public boolean deleteByDsId(long dsId);

}
