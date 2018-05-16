package com.guet.oos.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Set;

/**
 * 这个接口表示一个公共的DAO接口
 *
 * @param <K> 表示主键
 * @param <V> 表示要操作的对象
 * @author Shawn
 */
public interface IDAO<K, V> {

    /**
     * 实现数据增加操作
     *
     * @param vo 表示要执行操作的对象
     * @return 成功返回 true，失败返回 false
     * @throws SQLException
     */
    boolean doCreate(V vo);

    /**
     * 实现数据更新操作
     *
     * @param vo 表示要执行更新的对象
     * @return 成功返回 true，失败返回 false
     * @throws SQLException
     */
    boolean doUpdate(V vo);

    /**
     * 实现数据批量删除
     *
     * @param ids 表示要执行删除的数据集合
     * @return 成功返回 true，失败返回 false
     * @throws SQLException
     */
    boolean doRemove(Set<?> ids);

    /**
     * 根据用户提供的id执行查询
     *
     * @param id 表示要查询的id
     * @return 查询成功返回该数据行的记录，失败返回null
     * @throws SQLException
     */
    V findById(K id);

    /**
     * 实现数据全部查询
     *
     * @return 成功返回全部数据，失败返回null
     * @throws SQLException
     */
    List<V> findAll();

    /**
     * 实现数据分页操作
     *
     * @param column      表示要执行查询的列
     * @param keyWord     表示查询关键字
     * @param currentPage 表示当前页
     * @param lineSize    表示每页显示记录数
     * @return 查询成功返回满足条件的数据，失败返回null
     * @throws SQLException
     */
    List<V> findBySplit(
            String column,
            String keyWord,
            Integer currentPage,
            Integer lineSize
    );

    /**
     * 实现数据量统计操作
     *
     * @param column  表示要查询的列
     * @param keyWord 表示查询关键字
     * @return 成功返回数据量，失败返回0
     * @throws SQLException
     */
    Integer getAllCount(
            String column,
            String keyWord
    );

    /**
     * 实现数据量统计操作
     *
     * @param column 表示要查询的列
     * @return 成功返回数据量，失败返回0
     * @throws SQLException
     */
    Integer getAllCount(
            String column
    );

    /**
     * 实现数据量统计操作
     *
     * @return 成功返回数据量，失败返回0
     * @throws SQLException
     */
    Integer getAllCount(
    );
}
