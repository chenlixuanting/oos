package com.guet.oos.service.impl;

import com.guet.oos.dao.CommentDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.service.CommentService;

import java.util.List;

/**
 * Created by Shinelon on 2018/5/22.
 */
public class CommentServiceImpl implements CommentService {

    private CommentDao commentDao = DAOFactory.getCommentDaoInstance();

    @Override
    public boolean createComment(Comment comment) {
        return commentDao.doCreate(comment);
    }

    @Override
    public List<Comment> getAllComment() {
        return commentDao.findAll();
    }

    @Override
    public int countAllUnansweredComment() {
        return commentDao.countAllUnansweredComment();
    }

    @Override
    public List<Comment> getAllUnansweredComment() {
        return commentDao.getAllUnansweredComment();
    }

    @Override
    public List<Comment> getListUnansweredComment(int start, int length) {
        return commentDao.getListUnansweredComment(start, length);
    }

}
