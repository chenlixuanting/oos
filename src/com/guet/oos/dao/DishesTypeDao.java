package com.guet.oos.dao;

import com.guet.oos.po.DishesType;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public interface DishesTypeDao extends IDAO<Long, DishesType> {

    public List<DishesType> getList(int start, int length);

    public List<String> getSpecifyColumn(String column);

    public List<String> getSpecifyColumnSpecifyValue(String col1, String col2, String value);

}
