package com.guet.oos.service;

import com.guet.oos.po.Comment;

import java.util.List;

/**
 * 评论Service接口
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

    public boolean deleteByCoId(long coId);

    public boolean deleteByUsId(long usId);

    public int countAllReplyComment();

    public List<Comment> getListReplyComment(int start, int length);
}
