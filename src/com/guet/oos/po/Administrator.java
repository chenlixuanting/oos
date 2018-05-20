package com.guet.oos.po;

import java.io.Serializable;

/**
 * 管理员
 *
 * @author Shinelon
 */
public class Administrator implements Serializable {

    private static final long serialVersionUID = -6600940403180737134L;

    private long mgId;// 管理员ID

    private String username;// 账号

    private String password;// 密码

    private boolean maximumAuthority;// 最高权限

    private String creator;// 创建者

    private String creatorTime;// 创建时间

    private String updateTime;// 更新时间

    public Administrator(long mgId, String username, String password, boolean maximumAuthority, String creator, String creatorTime, String updateTime) {
        this.mgId = mgId;
        this.username = username;
        this.password = password;
        this.maximumAuthority = maximumAuthority;
        this.creator = creator;
        this.creatorTime = creatorTime;
        this.updateTime = updateTime;
    }

    public Administrator() {
    }

    public long getMgId() {
        return mgId;
    }

    public void setMgId(long mgId) {
        this.mgId = mgId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isMaximumAuthority() {
        return maximumAuthority;
    }

    public void setMaximumAuthority(boolean maximumAuthority) {
        this.maximumAuthority = maximumAuthority;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getCreatorTime() {
        return creatorTime;
    }

    public void setCreatorTime(String creatorTime) {
        this.creatorTime = creatorTime;
    }

    public String getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(String updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Administrator{" +
                "mgId=" + mgId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", maximumAuthority=" + maximumAuthority +
                ", creator='" + creator + '\'' +
                ", creatorTime='" + creatorTime + '\'' +
                ", updateTime='" + updateTime + '\'' +
                '}';
    }
}
