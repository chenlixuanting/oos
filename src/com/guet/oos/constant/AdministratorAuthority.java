package com.guet.oos.constant;

import java.io.Serializable;

/**
 * 最高权限常量标识
 *
 * @author Shinelon
 */
public class AdministratorAuthority implements Serializable {

    private static final long serialVersionUID = 325282138898878292L;

    // 普通管理员权限
    public static final boolean GENERAL_AUTHORITY = false;

    // 超级管理员权限
    public static final boolean SUPER_AUTHORITY = true;

}
