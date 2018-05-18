package com.guet.oos.factory;

import com.guet.oos.service.*;
import com.guet.oos.service.impl.*;

public class ServiceFactory {

    public static UserService getUserServiceInstance() {
        return new UserServiceImpl();
    }

    public static AdministratorService getAdministratorServiceInstance() {
        return new AdministratorServiceImpl();
    }

    public static MealTypeService getMealTypeServiceInstance() {
        return new MealTypeServiceImpl();
    }

    public static DishesTypeService getDishesTypeServiceInstance() {
        return new DishesTypeServiceImpl();
    }

    public static DishesService getDishesServiceInstance() {
        return new DishesServiceImpl();
    }

    public static ShopCartService getShopCartServiceInstance() {
        return new ShopCartServiceImpl();
    }

    public static DeliveryAddressService getDeliveryAddressServiceInstance() {
        return new DeliveryAddressServiceImpl();
    }

    public static OrderService getOrderServiceInstance() {
        return new OrderServiceImpl();
    }

    public static OrderItemService getOrderItemServiceInstance() {
        return new OrderItemServiceImpl();
    }
}
