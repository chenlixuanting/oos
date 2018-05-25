package com.guet.oos.po;

import java.io.Serializable;

/**
 * 评论实体
 * <p>
 * Created by Shinelon on 2018/5/22.
 */
public class Comment implements Serializable {

    private static final long serialVersionUID = -4710036553258337071L;

    private long coId;//评论ID
    private long usId;//用户ID
    private String username;//用户姓名

    private long mgId;//管理员ID
    private String adminname;//管理员姓名

    private String content;//评论内容
    private String replyContent;//回复内容
    private String comStatus;//评论状态

    private String createTime;//创建时间
    private String updateTime;//更新时间

    public Comment(long coId, long usId, String username, long mgId, String adminname, String content, String replyContent, String comStatus, String createTime, String updateTime) {
        this.coId = coId;
        this.usId = usId;
        this.username = username;
        this.mgId = mgId;
        this.adminname = adminname;
        this.content = content;
        this.replyContent = replyContent;
        this.comStatus = comStatus;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Comment() {
    }

    public long getCoId() {
        return coId;
    }

    public void setCoId(long coId) {
        this.coId = coId;
    }

    public long getUsId() {
        return usId;
    }

    public void setUsId(long usId) {
        this.usId = usId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent;
    }

    public String getComStatus() {
        return comStatus;
    }

    public void setComStatus(String comStatus) {
        this.comStatus = comStatus;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "coId=" + coId +
                ", usId=" + usId +
                ", username='" + username + '\'' +
                ", mgId=" + mgId +
                ", adminname='" + adminname + '\'' +
                ", content='" + content + '\'' +
                ", replyContent='" + replyContent + '\'' +
                ", comStatus='" + comStatus + '\'' +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
