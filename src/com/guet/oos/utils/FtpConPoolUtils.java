package com.guet.oos.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;

import com.guet.oos.constant.FtpConfig;

/**
 * 文件服务器连接池
 * 
 * @author Shinelon
 *
 */
public class FtpConPoolUtils {

	private static List<FTPClient> ftpClientsPool = null;

	// 池中连接的最大数目
	private final static int POOL_MAX_SIZE = 100;

	/**
	 * 创建服务器连接
	 * 
	 * @return
	 */
	public static FTPClient createFtpServerConnect() {

		FTPClient ftpClient = new FTPClient();

		try {

			// 连接
			ftpClient.connect(FtpConfig.HOST, FtpConfig.PORT);

			// 登陆
			ftpClient.login(FtpConfig.USERNAME, FtpConfig.PASSWORD);

			// 设置文件类型
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);

		} catch (IOException e) {
			e.printStackTrace();
		}

		return ftpClient;

	}

	/**
	 * 获取服务器连接
	 * 
	 * @return
	 */
	public static synchronized FTPClient getFtpServerConnection() {

		if (ftpClientsPool == null) {
			ftpClientsPool = new ArrayList<FTPClient>();
		}

		FTPClient ftpClient = null;

		if (ftpClientsPool.isEmpty()) {
			ftpClient = createFtpServerConnect();
		} else {
			int last_idx = ftpClientsPool.size() - 1;
			ftpClient = ftpClientsPool.get(last_idx);
			ftpClientsPool.remove(ftpClient);
		}

		return ftpClient;
	}

	/**
	 * 释放FTP服务器连接
	 * 
	 * @param ftpClient
	 */
	public static synchronized void releaseFtpServerConnection(FTPClient ftpClient) {

		if (ftpClientsPool.size() > POOL_MAX_SIZE) {
			try {
				ftpClient.logout();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			ftpClientsPool.add(ftpClient);
		}

	}
}
