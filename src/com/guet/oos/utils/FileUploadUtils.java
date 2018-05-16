package com.guet.oos.utils;

import com.guet.oos.constant.FtpConfig;
import com.guet.oos.constant.NginxConfig;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * Created by Shinelon on 2018/5/1.
 */
public class FileUploadUtils {

    // 目录分离算法
    public static String getRandomDirectory(String filename) {

        // 函数的实现方式
        // int hashcode = filename.hashCode();
        // // System.out.println(hashcode);
        // //int类型数据在内存占32位，转换成16进制数，就得到8个16进制数
        // String hex = Integer.toHexString(hashcode);
        // // System.out.println(hex); 784900b4
        // return "/"+hex.charAt(0)+"/"+hex.charAt(1); //演示只得到两层目录

        // 位运算符实现，hashCode向16进制的转换
        int hashCode = filename.hashCode();
        int c = hashCode & 0xf;
        hashCode = hashCode >>> 4;
        int b = hashCode & 0xf;
        return "/" + c + "/" + b;

    }

    // 得到上传文件真实名称
    public static String getRealName(String filename) {

        // filename 具备两种情况
        // 1.c:\\a.txt
        // 2.a.txt
        // 两种情况都可以获取得到正确的文件名。
        // 对于 a.txt 没有 \\ lastIndexOf返回 -1, -1 + 1= 0; 依然可以获取的正确的文件名
        int index = filename.lastIndexOf("\\") + 1;
        return filename.substring(index);
    }

    // 获取随机名称 a.txt
    public static String getUUIDFIleName(String filename) {
        int index = filename.lastIndexOf(".");

        if (index != -1) {
            return UUID.randomUUID() + filename.substring(index);
        } else {
            return UUID.randomUUID().toString();
        }
    }

    //解析上传文件的请求
    public static Map<String, String[]> parseUploadRequest(HttpServletRequest request) {

        Map<String, String[]> map = new HashMap<String, String[]>();

        // 1.创建DiskFileItemFactory
        DiskFileItemFactory fileItemFactory = new DiskFileItemFactory();

        // 2.创建ServletFileUpload
        ServletFileUpload servletFileUpload = new ServletFileUpload(
                fileItemFactory);

        // 设置上传文件中文名称乱码
        servletFileUpload.setHeaderEncoding("utf-8");

        // 3.得到所有的FileItem
        try {

            List<FileItem> items = null;

            try {

                //解析请求
                items = servletFileUpload.parseRequest(request);

            } catch (FileUploadException e) {
                e.printStackTrace();
            }

            // 遍历items,得到所有的上传信息
            for (FileItem item : items) {

                //判断是否为表单字段
                if (item.isFormField()) {

                    // 不是上传组件
                    map.put(item.getFieldName(),
                            new String[]{item.getString("utf-8")});// 封装非上传组建信息

                } else {
                    // 是上传组件

                    // 得到上传文件名称
                    String filename = item.getName();

                    filename = FileUploadUtils.getRealName(filename);

//                    map.put("realname", new String[]{filename});//封装上传文件真实名称

                    // 得到随机名称
                    String picRandAddress = FileUploadUtils.getUUIDFIleName(filename);

                    // 得到随机目录
//                    String randomDirectory = FileUploadUtils
//                            .getRandomDirectory(filename);

                    // getRealPath()得到的是将项目部署到Tomcat服务器上时的磁盘路径:D:\apache-tomcat-7.0.79\webapps\traffic
//                    String uploadPath = this.getServletContext().getRealPath(
//                            "/WEB-INF/upload");

                    // getContextPath();得到是项目部署到Tomcat服务时的虚拟路径 /day23_1
                    // 虚拟路径可以在MyEclipse中右键选择工程项目文件夹->properties->搜索web->web即可看到
                    // request.getContextPath();

//                    File parentDirectory = new File(uploadPath, randomDirectory);

//                    map.put("savepath", new String[]{uploadPath + randomDirectory});//封装上传文件保存路径

//                    if (!parentDirectory.exists()) {
//                        parentDirectory.mkdirs();
//                    }

//                    IOUtils.copy(item.getInputStream(), new FileOutputStream(
//                            new File(parentDirectory, uuidname)));

                    //调用FtpOperateUtils上传文件
                    FtpOperateUtils.uploadFile(item.getInputStream(), picRandAddress, FtpConfig.GOODS_BASEPATH);

                    map.put("picRandName", new String[]{picRandAddress});//封装上传文件随机名称

                    item.delete();
                }

            }

            return map;

//            // 将数据封装到javaBean
//            Resource resource = new Resource();
//            BeanUtils.populate(resource, map);
//
//            //调用service完成保存数据到db
//            ResourceService resourceService = new ResourceService();
//
//            response.sendRedirect(request.getContextPath() + "/index.jsp");
//
//            try {
//                resourceService.save(resource);
//            } catch (SQLException e) {
//                // TODO Auto-generated catch block
//                e.printStackTrace();
//            }
//
//        } catch (FileUploadException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        } catch (IllegalAccessException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        } catch (InvocationTargetException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
//    public static void main(String[] args) {
//        String path = getRandomDirectory("123.txt");
//
//        File file = new File("d:/upload");
//
//        File directory = new File(file, path);
//
//        if (!directory.exists()) {
//            directory.mkdirs();
//        }
//    }

}
