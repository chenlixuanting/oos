package com.guet.oos.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.Page;

import java.util.List;

/**
 * Created by Shinelon on 2018/4/30.
 */
public class PageUtils {

    /**
     * 解析分页的数据
     *
     * @param aoData
     * @return
     */
    public static Page parse(String aoData) {

        JSONArray jsonarray = (JSONArray) JSONArray.parse(aoData);//json格式化用的是fastjson

        Page page = new Page();

        for (int i = 0; i < jsonarray.size(); i++) {

            JSONObject obj = (JSONObject) jsonarray.get(i);

            if (obj.get("name").equals("sEcho")) {
                page.setsEcho(obj.get("value").toString());

            } else if (obj.get("name").equals("iDisplayStart")) {
                page.setiDisplayStart(Integer.parseInt(obj.get("value").toString()));

            } else if (obj.get("name").equals("iDisplayLength"))
                page.setiDisplayLength(Integer.parseInt(obj.get("value").toString()));

        }

        return page;

    }

    /**
     * 将分页数据封装成json实体
     *
     * @param sEcho
     * @param iTotalRecords
     * @param iTotalDisplayRecords
     * @param aoData
     * @return
     */
    public static JSONObject encPageJsonObj(String sEcho, int iTotalRecords, int iTotalDisplayRecords, List aoData) {

//        JSONObject getObj = new JSONObject();
//        getObj.put("sEcho", pageData.getsEcho());// DataTable前台必须要的
//        getObj.put("iTotalRecords", mealTypeService.getAllCount());//实际的行数，调用查询总记录数的方法
//        getObj.put("iTotalDisplayRecords", mealTypeService.getAllCount());//显示的行数,这个要和上面写的一样
//        getObj.put("aaData", mealTypeService.getList(pageData.getiDisplayStart(), pageData.getiDisplayLength()));//把查到数据装入aaData,要以JSON格式返回

        JSONObject getObj = new JSONObject();

        getObj.put("sEcho", sEcho);// DataTable前台必须要的

        getObj.put("iTotalRecords", iTotalRecords);//实际的行数，调用查询总记录数的方法

        getObj.put("iTotalDisplayRecords", iTotalDisplayRecords);//显示的行数,这个要和上面写的一样

        getObj.put("aaData", aoData);//把查到数据装入aaData,要以JSON格式返回

        return getObj;
    }

}
