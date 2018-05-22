package com.guet.oos.dao.impl;

import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.CommentDao;
import com.guet.oos.po.Comment;

import java.sql.Connection;
import java.util.List;
import java.util.Set;

/**
 * Created by Shinelon on 2018/5/22.
 */
public class CommentDaoImpl extends AbstractDAOImpl implements CommentDao {

    public CommentDaoImpl(Connection conn) {
        super(conn);
    }

    @Override
    public boolean doCreate(Comment vo) {
        return false;
    }

    @Override
    public boolean doUpdate(Comment vo) {
        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public Comment findById(Long id) {
        return null;
    }

    @Override
    public List<Comment> findAll() {
        return null;
    }

    @Override
    public List<Comment> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }

    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    @Override
    public Integer getAllCount() {
        return null;
    }
}
