package com.guet.oos.service.impl;

import com.guet.oos.dao.CommentDao;
import com.guet.oos.factory.DAOFactory;
import com.guet.oos.po.Comment;
import com.guet.oos.service.CommentService;

import java.util.List;

/**
 * 评论Service实现类
 * Created by Shinelon on 2018/5/22.
 */
public class CommentServiceImpl implements CommentService {

    //注入评论Dao
    private CommentDao commentDao = DAOFactory.getCommentDaoInstance();

    /**
     * 插入一条评论记录
     *
     * @param comment
     * @return
     */
    @Override
    public boolean createComment(Comment comment) {
        return commentDao.doCreate(comment);
    }

    /**
     * 获取所有评论记录
     *
     * @return
     */
    @Override
    public List<Comment> getAllComment() {
        return commentDao.findAll();
    }

    /**
     * 统计所有未回复的评论记录
     *
     * @return
     */
    @Override
    public int countAllUnansweredComment() {
        return commentDao.countAllUnansweredComment();
    }

    /**
     * 获取所有未回复的评论记录
     *
     * @return
     */
    @Override
    public List<Comment> getAllUnansweredComment() {
        return commentDao.getAllUnansweredComment();
    }

    /**
     * 分页查询所有未回复的评论记录
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Comment> getListUnansweredComment(int start, int length) {
        return commentDao.getListUnansweredComment(start, length);
    }

    /**
     * 通过ID查询所有评论记录
     *
     * @param coId
     * @return
     */
    @Override
    public Comment getById(long coId) {
        return commentDao.findById(coId);
    }

    /**
     * 更新一条评论记录
     *
     * @param comment
     * @return
     */
    @Override
    public boolean updateComment(Comment comment) {
        return commentDao.doUpdate(comment);
    }

    /**
     * 通过评论ID删除评论记录
     *
     * @param coId
     * @return
     */
    @Override
    public boolean deleteByCoId(long coId) {
        return commentDao.deleteByCoId(coId);
    }

    /**
     * 通过用户ID删除评论记录
     *
     * @param usId
     * @return
     */
    @Override
    public boolean deleteByUsId(long usId) {
        return commentDao.deleteByUsId(usId);
    }

    /**
     * 统计所有已回复的评论
     *
     * @return
     */
    @Override
    public int countAllReplyComment() {
        return commentDao.countAllReplyComment();
    }

    /**
     * 获取所有已回复的评论
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Comment> getListReplyComment(int start, int length) {
        return commentDao.getListReplyComment(start, length);
    }

}
