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
    private long mgId;//管理员ID
    private String commentContent;//评论内容
    private String replyContent;//回复内容
    private String commentStatus;//评论状态
    private String createTime;//创建时间
    private String updateTime;//更新时间

    public Comment(long coId, long usId, long mgId, String commentContent, String replyContent, String commentStatus, String createTime, String updateTime) {
        this.coId = coId;
        this.usId = usId;
        this.mgId = mgId;
        this.commentContent = commentContent;
        this.replyContent = replyContent;
        this.commentStatus = commentStatus;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Comment() {
    }

    @Override
    public String toString() {
        return "Comment{" +
                "coId=" + coId +
                ", usId=" + usId +
                ", mgId=" + mgId +
                ", commentContent='" + commentContent + '\'' +
                ", replyContent='" + replyContent + '\'' +
                ", commentStatus='" + commentStatus + '\'' +
                ", createTime='" + createTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
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

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent;
    }

    public String getCommentStatus() {
        return commentStatus;
    }

    public void setCommentStatus(String commentStatus) {
        this.commentStatus = commentStatus;
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
}
