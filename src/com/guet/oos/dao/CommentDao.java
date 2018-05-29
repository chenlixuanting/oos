package com.guet.oos.dao;

import com.guet.oos.po.Comment;

import java.util.List;

/**
 * 用户评论Dao接口
 * Created by Shinelon on 2018/5/22.
 */
public interface CommentDao extends IDAO<Long, Comment> {

    public int countAllUnansweredComment();

    public List<Comment> getAllUnansweredComment();

    public List<Comment> getListUnansweredComment(int start, int length);

    public boolean deleteByCoId(long coId);

    public boolean deleteByUsId(long usId);

    public int countAllReplyComment();

    public List<Comment> getListReplyComment(int start, int length);
}
