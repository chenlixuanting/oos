package com.guet.oos.service.impl;

import com.guet.oos.dao.MealTypeDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.MealTypeService;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public class MealTypeServiceImpl implements MealTypeService {

    private MealTypeDao mealTypeDao = DAOFactory.getMealTypeDaoInstance();

    @Override
    public boolean createMealType(MealType mealType) {
        return mealTypeDao.doCreate(mealType);
    }

    @Override
    public List<MealType> getALlMealType() {
        return mealTypeDao.findAll();
    }

    @Override
    public int getAllCount() {
        return mealTypeDao.getAllCount();
    }

    @Override
    public List<MealType> getList(int start, int length) {
        return mealTypeDao.getList(start, length);
    }

    @Override
    public List<String> getSpecifyColumn(String column) {
        return mealTypeDao.getSpecifyColumn(column);
    }

    @Override
    public boolean deleteByMtId(long mtId) {
        return mealTypeDao.deleteByMtId(mtId);
    }

    @Override
    public MealType getByMtId(long mtId) {
        return mealTypeDao.findById(mtId);
    }

    @Override
    public boolean updateMealType(MealType mealType) {
        return mealTypeDao.updateMealType(mealType);
    }

}
