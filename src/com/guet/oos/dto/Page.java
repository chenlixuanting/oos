package com.guet.oos.dto;

import java.io.Serializable;

/**
 * 分页实体
 * Created by Shinelon on 2018/4/30.
 */
public class Page implements Serializable {

    private static final long serialVersionUID = -9214784318917951643L;

    private String sEcho;//当前页

    private int iDisplayStart;//开始显示行数

    private int iDisplayLength;//一页显示的行数

    public String getsEcho() {
        return sEcho;
    }

    public void setsEcho(String sEcho) {
        this.sEcho = sEcho;
    }

    public int getiDisplayStart() {
        return iDisplayStart;
    }

    public void setiDisplayStart(int iDisplayStart) {
        this.iDisplayStart = iDisplayStart;
    }

    public int getiDisplayLength() {
        return iDisplayLength;
    }

    public void setiDisplayLength(int iDisplayLength) {
        this.iDisplayLength = iDisplayLength;
    }

    public Page(String sEcho, int iDisplayStart, int iDisplayLength) {
        this.sEcho = sEcho;
        this.iDisplayStart = iDisplayStart;
        this.iDisplayLength = iDisplayLength;
    }

    public Page() {
    }
}
