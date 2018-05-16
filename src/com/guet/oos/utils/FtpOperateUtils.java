package com.guet.oos.utils;

import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.net.ftp.FTPClient;

/**
 * 文件服务器操作类
 * 
 * @author Shinelon
 *
 */
public class FtpOperateUtils {

	/**
	 * 上传文件
	 * 
	 * @param filename
	 *            文件名称
	 * @param fileLocation
	 *            文件位置
	 * @return
	 * @throws IOException
	 */
	public static boolean uploadFile(InputStream inStream, String filename, String fileLocation) {

		FTPClient ftpClient = FtpConPoolUtils.getFtpServerConnection();

		try {
			// 切换FTP服务器的工作目录
			ftpClient.changeWorkingDirectory(fileLocation);
			ftpClient.storeFile(filename, inStream);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}

		return true;
	}

	/**
	 * 下载文件
	 * 
	 * @param filename
	 *            文件名称
	 * @param fileLocatoin
	 *            文件位置
	 * @return
	 */
	public static InputStream downloadFile(String filename, String fileLocatoin) {

		FTPClient ftpClient = FtpConPoolUtils.getFtpServerConnection();

		// 返回文件读取流
		try {
			// 切换FTP服务器的工作目录
			ftpClient.changeWorkingDirectory(fileLocatoin);
			return ftpClient.retrieveFileStream(filename);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

}
