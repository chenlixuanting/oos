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
 * 评论Dao的实现类
 * <p>
 * Created by Shinelon on 2018/5/22.
 */
public class CommentDaoImpl extends AbstractDAOImpl implements CommentDao {

    /**
     * 获取评论的Class对象
     *
     * @param conn
     */
    public CommentDaoImpl(Connection conn) {
        super(conn);
    }

    /**
     * 插入一条评论记录
     *
     * @param vo 表示要执行操作的对象
     * @return
     */
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

    /**
     * 更新一条评论记录
     *
     * @param vo 表示要执行更新的对象
     * @return
     */
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

    /**
     * 删除一条评论记录
     *
     * @param ids 表示要执行删除的数据集合
     * @return
     */
    @Override
    public boolean doRemove(Set<?> ids) {
        return false;
    }

    /**
     * 通过ID查找一条评论记录
     *
     * @param id 表示要查询的id
     * @return
     */
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

    /**
     * 查找所有评论记录
     *
     * @return
     */
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

    /**
     * 分页查询
     *
     * @param column      表示要执行查询的列
     * @param keyWord     表示查询关键字
     * @param currentPage 表示当前页
     * @param lineSize    表示每页显示记录数
     * @return
     */
    @Override
    public List<Comment> findBySplit(String column, String keyWord, Integer currentPage, Integer lineSize) {
        return null;
    }

    /**
     * 统计指定列,指定值的评论记录
     *
     * @param column  表示要查询的列
     * @param keyWord 表示查询关键字
     * @return
     */
    @Override
    public Integer getAllCount(String column, String keyWord) {
        return null;
    }


    /**
     * 统计指定列的记录数
     *
     * @param column 表示要查询的列
     * @return
     */
    @Override
    public Integer getAllCount(String column) {
        return null;
    }

    /**
     * 统计所有陪评论记录
     *
     * @return
     */
    @Override
    public Integer getAllCount() {
        return null;
    }

    /**
     * 将结果集的数据封装成List
     *
     * @param res
     * @return
     */
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

    /**
     * 统计所有未回复的评论记录数
     *
     * @return
     */
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

    /**
     * 获得所有未回复的评论
     *
     * @return
     */
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

    /**
     * 分页查询未回复的评论记录
     *
     * @param start
     * @param length
     * @return
     */
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

    /**
     * 以评论ID为参数删除评论
     *
     * @param coId
     * @return
     */
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

    /**
     * 通过用户ID删除评论
     *
     * @param usId
     * @return
     */
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

    /**
     * 统计所有已回复的评论
     *
     * @return
     */
    @Override
    public int countAllReplyComment() {

        String sql = "select count(*) from comment_table where comStatus=?";

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, CommentStatus.COMMENT_REPLIED);

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

    /**
     * 分页查询所有已回复的评论
     *
     * @param start
     * @param length
     * @return
     */
    @Override
    public List<Comment> getListReplyComment(int start, int length) {

        String sql = "select top " + length + " * from comment_table where comStatus='" + CommentStatus.COMMENT_REPLIED + "' and (coId not in(select top "
                + start + "coId from comment_table where comStatus='" + CommentStatus.COMMENT_REPLIED + "'order by coId))";

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

}
