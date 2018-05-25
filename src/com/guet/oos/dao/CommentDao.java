package com.guet.oos.dao;

import com.guet.oos.po.Comment;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/22.
 */
public interface CommentDao extends IDAO<Long, Comment> {

    public int countAllUnansweredComment();

    public List<Comment> getAllUnansweredComment();

    public List<Comment> getListUnansweredComment(int start, int length);

}
