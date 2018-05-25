package com.guet.oos.service;

import com.guet.oos.po.Comment;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/22.
 */
public interface CommentService {

    public boolean createComment(Comment comment);

    public List<Comment> getAllComment();

    public int countAllUnansweredComment();

    public List<Comment> getAllUnansweredComment();

    public List<Comment> getListUnansweredComment(int start, int length);

    public Comment getById(long coId);

    public boolean updateComment(Comment comment);
}
