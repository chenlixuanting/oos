package com.guet.oos.utils;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;

/**
 * JDBCUtils工具类
 * 
 * @author Shinelon
 *
 */
public class JDBCUtils implements Serializable {

	private static final long serialVersionUID = 6381625480620107038L;

	private static DataSource dataSource = null;

	static {
		dataSource = new ComboPooledDataSource();
	}

	/**
	 * 获取数据库连接
	 * 
	 * @return
	 */
	public static Connection getConnection() {

		Connection con = null;

		try {
			con = dataSource.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return con;

	}

	/**
	 * 关闭数据库连接
	 * 
	 * @param con
	 */
	public static void closeConnection(Connection con) {

		try {
			if (con != null && !con.isClosed()) {
				con.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
