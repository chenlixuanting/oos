package com.guet.oos.dao.impl;

import com.guet.oos.constant.CommentStatus;
import com.guet.oos.dao.AbstractDAOImpl;
import com.guet.oos.dao.CommentDao;
import com.guet.oos.fields.CommentFields;
import com.guet.oos.po.Comment;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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

        String sql = "insert into comment_table(usId,mgId,content,replyContent,comStatus,createTime,updateTime) values(?,?,?,?,?,?,?)";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, vo.getUsId());
            pstmt.setLong(2, vo.getMgId());
            pstmt.setString(3, vo.getContent());
            pstmt.setString(4, vo.getReplyContent());
            pstmt.setString(5, vo.getComStatus());
            pstmt.setString(6, vo.getCreateTime());
            pstmt.setString(7, vo.getUpdateTime());

            pstmt.execute();

            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean doUpdate(Comment vo) {

        String sql = "update comment_table set mgId=?,comStatus=?,replyContent=?,updateTime=? where coId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, vo.getMgId());
            pstmt.setString(2, vo.getComStatus());
            pstmt.setString(3, vo.getReplyContent());
            pstmt.setString(4, vo.getUpdateTime());
            pstmt.setLong(5, vo.getCoId());

            pstmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    @Override
    public Comment findById(Long id) {

        String sql = "select * from comment_table where coId=?";

        Comment comment = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, id);

            ResultSet res = pstmt.executeQuery();

            List<Comment> comments = encapsulationCommentList(res);

            if (comments.size() > 0) {
                comment = comments.get(0);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return comment;
    }

    @Override
    public List<Comment> findAll() {

        String sql = "select * from comment_table";

        List<Comment> comments = null;

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            comments = encapsulationCommentList(res);

            return comments;

        } catch (SQLException e) {
            e.printStackTrace();
        }

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

    public List<Comment> encapsulationCommentList(ResultSet res) {

        List<Comment> comments = new ArrayList<Comment>();

        try {
            while (res.next()) {

                Comment comment = new Comment();

                comment.setCoId(res.getLong(CommentFields.COID));
                comment.setUsId(res.getLong(CommentFields.USID));
                comment.setMgId(res.getLong(CommentFields.MGID));

                comment.setContent(res.getString(CommentFields.CONTENT));
                comment.setReplyContent(res.getString(CommentFields.REPLY_CONTENT));
                comment.setComStatus(res.getString(CommentFields.CON_STATUS));
                comment.setCreateTime(res.getString(CommentFields.CREATE_TIME));
                comment.setUpdateTime(res.getString(CommentFields.UPDATE_TIME));

                comments.add(comment);

            }

            return comments;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int countAllUnansweredComment() {

        String sql = "select count(*) from comment_table where comStatus=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, CommentStatus.COMMENT_UNANSWERED);

            ResultSet res = pstmt.executeQuery();

            int total = 0;

            while (res.next()) {
                total += res.getInt(1);
            }

            return total;
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return 0;
    }

    @Override
    public List<Comment> getAllUnansweredComment() {

        String sql = "select * from comment_table where comStatus=?";

        List<Comment> comments = null;

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, CommentStatus.COMMENT_UNANSWERED);

            ResultSet res = pstmt.executeQuery();

            comments = encapsulationCommentList(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return comments;
    }

    @Override
    public List<Comment> getListUnansweredComment(int start, int length) {

        String sql = "select top " + length + " * from comment_table where comStatus='" + CommentStatus.COMMENT_UNANSWERED + "' and (coId not in(select top "
                + start + "coId from comment_table where comStatus='" + CommentStatus.COMMENT_UNANSWERED + "'order by coId))";

        List<Comment> comments = null;

        try {
            pstmt = conn.prepareStatement(sql);

            ResultSet res = pstmt.executeQuery();

            comments = encapsulationCommentList(res);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return comments;
    }

    @Override
    public boolean deleteByCoId(long coId) {

        String sql = "delete from comment_table where coId=?";

        try {

            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, coId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public boolean deleteByUsId(long usId) {

        String sql = "delete from comment_table where usId=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setLong(1, usId);

            pstmt.execute();

            return true;

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

}
