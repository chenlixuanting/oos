package com.guet.oos.dao;

import com.guet.oos.po.MealType;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public interface MealTypeDao extends IDAO<Long, MealType> {

    public List<MealType> getList(int start, int length);

    public List<String> getSpecifyColumn(String column);

    public boolean deleteByMtId(long mtId);

    public boolean updateMealType(MealType mealType);

}
