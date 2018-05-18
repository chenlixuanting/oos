package com.guet.oos.factory;

import com.guet.oos.dao.*;
import com.guet.oos.dao.impl.*;
import com.guet.oos.utils.JDBCUtils;

public class DAOFactory {

    public static UserDao getUserDaoInstance() {
        return new UserDaoImpl(JDBCUtils.getConnection());
    }

    public static AdministratorDao getAdministratorDaoInstance() {
        return new AdministratorDaoImpl(JDBCUtils.getConnection());
    }

    public static MealTypeDao getMealTypeDaoInstance() {
        return new MealTypeDaoImpl(JDBCUtils.getConnection());
    }

    public static DishesTypeDao getDishesTypeDao() {
        return new DishesTypeDaoImpl(JDBCUtils.getConnection());
    }

    public static DishesDao getDishDaoInstance() {
        return new DishesDaoImpl(JDBCUtils.getConnection());
    }

    public static ShopCartDao getShopCartDaoInstance() {
        return new ShopCartDaoImpl(JDBCUtils.getConnection());
    }

    public static DeliveryAddressDao getDeliveryAddressDaoInstance() {
        return new DeliveryAddressDaoImpl(JDBCUtils.getConnection());
    }

    public static OrderDao getOrderDaoInstance() {
        return new OrderDaoImpl(JDBCUtils.getConnection());
    }

    public static OrderItemDao getOrderItemDaoInstance() {
        return new OrderItemDaoImpl(JDBCUtils.getConnection());
    }
}
