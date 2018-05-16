package com.guet.oos.service;

import com.guet.oos.po.DishesType;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public interface DishesTypeService {

    public boolean createDishesType(DishesType dishesType);

    public int getAllCount();

    public List<DishesType> getAllDishesType();

    public List<DishesType> getList(int start, int length);

    public List<String> getAllCount(String column);

    public List<String> getSpecifyColumn(String column);

    public List<String> getSpecifyColumnSpecifyValue(String col1, String col2, String value);
}
