package com.guet.oos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

public abstract class AbstractDAOImpl {

    protected Connection conn;

    protected PreparedStatement pstmt;

    public AbstractDAOImpl(Connection conn){
        this.conn = conn;
    }

}
