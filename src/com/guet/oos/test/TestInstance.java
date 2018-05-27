package com.guet.oos.test;

import com.guet.oos.constant.AdminStatus;
import com.guet.oos.constant.DateTimeFormat;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.Administrator;
import com.guet.oos.po.ShopCart;
import com.guet.oos.po.User;
import com.guet.oos.service.AdministratorService;
import com.guet.oos.service.ShopCartService;
import com.guet.oos.service.UserService;
import org.junit.Test;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TestInstance {


    SimpleDateFormat sf = new SimpleDateFormat(DateTimeFormat.YYYY_MM_DD_HH_MM_SS);

    UserService userService = ServiceFactory.getUserServiceInstance();

    AdministratorService administratorService = ServiceFactory.getAdministratorServiceInstance();

    ShopCartService shopCartService = ServiceFactory.getShopCartServiceInstance();

    /**
     * 新增一个用户
     */
    @Test
    public void creatorUser() {

        User user = new User();

        user.setUsername("陈宣锦");
        user.setPassword("123456");
        user.setMobile("18477062310");
        user.setSex("先生");
        user.setCreatorTime(sf.format(new Date()));
        user.setUpdateTime(sf.format(new Date()));

        System.out.println(userService.createUser(user));
    }

    /**
     * 新增一个管理员
     */
    @Test
    public void creatorAdministrator() {

        Administrator administrator = new Administrator();

        administrator.setUsername("root");
        administrator.setUpdateTime(sf.format(new Date()));
        administrator.setPassword("root");
        administrator.setMaximumAuthority(true);
        administrator.setAdminStatus(AdminStatus.ENABLE);
        administrator.setCreatorTime(sf.format(new Date()));
        administrator.setCreator("system");

        System.out.println(administratorService.creatorAdministrator(administrator));
    }

    /**
     * 新增一辆购物车
     */
    @Test
    public void creatorShopCart() {

//        ShopCart shopCart = new ShopCart();
//
//        shopCart.setUsId(3);
//        shopCart.setTotalCost(0.0);
//        shopCart.setProductAmount(0);
//        shopCart.setCreatorTime(sf.format(new Date()));
//        shopCart.setUpdateTime(sf.format(new Date()));
//        System.out.println(shopCartService.createShopCart(shopCart));

//        User user = (User) null;

    }

}
