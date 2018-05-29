package com.guet.oos.service.impl;

import com.guet.oos.dao.MealTypeDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.MealType;
import com.guet.oos.service.MealTypeService;

import java.util.List;

/**
 * 餐点类型Service实现类
 * Created by Shinelon on 2018/4/30.
 */
public class MealTypeServiceImpl implements MealTypeService {

    //注入餐点类型Service
    private MealTypeDao mealTypeDao = DAOFactory.getMealTypeDaoInstance();

    /**
     * 插入一条餐点类型记录
     *
     * @param mealType
     * @return
     */
    @Override
    public boolean createMealType(MealType mealType) {
        return mealTypeDao.doCreate(mealType);
    }

    /**
     * 获取所有餐点类型记录
     *
     * @return
     */
    @Override
    public List<MealType> getALlMealType() {
        return mealTypeDao.findAll();
    }

    /**
     * 统计所有餐点类型记录数
     *
     * @return
     */
    @Override
    public int getAllCount() {
        return mealTypeDao.getAllCount();
    }

    /**
     * 分页查询餐点类型记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<MealType> getList(int start, int length) {
        return mealTypeDao.getList(start, length);
    }

    /**
     * 查找指定列餐点类型记录
     *
     * @param column
     * @return
     */
    @Override
    public List<String> getSpecifyColumn(String column) {
        return mealTypeDao.getSpecifyColumn(column);
    }

    /**
     * 删除餐点类型记录
     *
     * @param mtId
     * @return
     */
    @Override
    public boolean deleteByMtId(long mtId) {
        return mealTypeDao.deleteByMtId(mtId);
    }

    /**
     * 通过ID获取餐点类型记录
     *
     * @param mtId
     * @return
     */
    @Override
    public MealType getByMtId(long mtId) {
        return mealTypeDao.findById(mtId);
    }

    /**
     * 更新餐点类型记录
     *
     * @param mealType
     * @return
     */
    @Override
    public boolean updateMealType(MealType mealType) {
        return mealTypeDao.updateMealType(mealType);
    }

}
