package com.guet.oos.service;

import com.guet.oos.po.MealType;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public interface MealTypeService {

    public boolean createMealType(MealType mealType);

    public List<MealType> getALlMealType();

    public int getAllCount();

    public List<MealType> getList(int start, int length);

    public List<String> getSecifyColumn(String column);

}
