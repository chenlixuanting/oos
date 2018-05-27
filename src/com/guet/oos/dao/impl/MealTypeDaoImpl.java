package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.MealTypeDao;
import com.guet.oos.fields.MealTypeFields;
import com.guet.oos.po.MealType;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/4/30.
 */
public class MealTypeDaoImpl extends AbstractDAOImpl implements MealTypeDao {

    public MealTypeDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(MealType vo) {

        String sql = "insert into meal_type_table(mealTypeName,startTime,endTime,mgId,createTime,updateTime) values(?,?,?,?,?,?)";

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            super.pstmt.setString(1, vo.getMealTypeName());
            super.pstmt.setString(2, vo.getStartTime());
            super.pstmt.setString(3, vo.getEndTime());
            super.pstmt.setLong(4, vo.getMgId());
            super.pstmt.setString(5, vo.getCreateTime());
            super.pstmt.setString(6, vo.getUpdateTime());

            super.pstmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    @Override
    public boolean doUpdate(MealType vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public MealType findById(Long id) {

        String sql = "select * from meal_type_table where mtId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, id);

            ResultSet res = pstmt.executeQuery();

            List<MealType> mealTypes = encapsulationMealType(res);

            if (mealTypes.size() > 0) {
                return mealTypes.get(0);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public List<MealType> findAll() {

        String sql = "select * from meal_type_table";

        ResultSet res = null;

        try {
            res = super.pstmt.executeQuery(sql);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        List<MealType> mealTypes = null;

        mealTypes = encapsulationMealType(res);

        return mealTypes;
    }

    @Override
    public List<MealType> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }

    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    @Override
    public Integer getAllCount() {

        String sql = "select count(*) from meal_type_table";

        try {
            super.pstmt = super.conn.prepareStatement(sql);
            ResultSet res = super.pstmt.executeQuery();

            Integer total = new Integer(0);

            if (res.next())
                total += res.getInt(1);

            return total;
        } catch (SQLException e) {
            e.printStackTrace();
            return 0;
        }

    }

    @Override
    public List<MealType> getList(int start, int length) {

        int num1 = length + start;

        int num2 = start;

        String sql = "select top " + num1 + " * from meal_type_table where mtId not in (select top " + num2 +
                " mtId from meal_type_table)";

        List<MealType> mealTypes = null;

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            mealTypes = encapsulationMealType(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mealTypes;
    }

    @Override
    public List<String> getSpecifyColumn(String column) {

        String sql = "select " + column + " from meal_type_table";

        List<String> stringList = new ArrayList<String>();

        try {
            super.pstmt = super.conn.prepareStatement(sql);

            ResultSet res = super.pstmt.executeQuery();

            while (res.next()) {
                stringList.add(res.getString(1));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return stringList;
    }

    @Override
    public boolean deleteByMtId(long mtId) {

        String sql = "delete from meal_type_table where mtId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, mtId);

            pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean updateMealType(MealType mealType) {

        /**
         private long mtId;//餐点类型ID
         private long mgId;//管理员ID
         private String mealTypeName;
         private String startTime;
         private String endTime;
         private String createTime;
         private String updateTime;
         *
         */

        String sql = "update meal_type_table set mealTypename=?,startTime=?,endTime=?,updateTime=?,mgId=? where mtId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, mealType.getMealTypeName());
            pstmt.setString(2, mealType.getStartTime());
            pstmt.setString(3, mealType.getEndTime());
            pstmt.setString(4, mealType.getUpdateTime());
            pstmt.setLong(5, mealType.getMtId());
            pstmt.setLong(6, mealType.getMgId());

            pstmt.executeUpdate();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * 封装MealType实体
     *
     * @param res
     * @return
     * @throws SQLException
     */
    private List<MealType> encapsulationMealType(ResultSet res) {

        List<MealType> mealTypes = new ArrayList<MealType>();

        try {
            while (res.next()) {

                MealType mealType = new MealType();

                mealType.setMtId(res.getLong(MealTypeFields.MTID));
                mealType.setCreateTime(res.getString(MealTypeFields.CREATOR_TIME));
                mealType.setMgId(res.getLong(MealTypeFields.MGID));
                mealType.setEndTime(res.getString(MealTypeFields.END_TIME));
                mealType.setMealTypeName(res.getString(MealTypeFields.MEAL_TYPE_NAME));
                mealType.setStartTime(res.getString(MealTypeFields.START_TIME));
                mealType.setUpdateTime(res.getString(MealTypeFields.UPDATE_TIME));

                mealTypes.add(mealType);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return mealTypes;
    }
}
