package com.guet.oos.servlet.administrator.pages;

import com.alibaba.fastjson.JSONObject;
import com.guet.oos.dto.Page;
import com.guet.oos.factory.ServiceFactory;
import com.guet.oos.po.DeliveryAddress;
import com.guet.oos.po.Order;
import com.guet.oos.po.User;
import com.guet.oos.service.DeliveryAddressService;
import com.guet.oos.service.OrderService;
import com.guet.oos.service.UserService;
import com.guet.oos.utils.PageUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * 查看当前订单
 * <p>
 * Created by Shinelon on 2018/5/20.
 */
@WebServlet("/admin/pagesCurrentOrder.action")
public class PagesCurrentOrderServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private OrderService orderService = ServiceFactory.getOrderServiceInstance();

    private UserService userService = ServiceFactory.getUserServiceInstance();

    private DeliveryAddressService deliveryAddressService = ServiceFactory.getDeliveryAddressServiceInstance();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public PagesCurrentOrderServlet() {
        super();
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        /**
         private String orId;// 订单ID
         private long usId;// 用户ID
         private String username;//用户名
         private long mgId;// 管理员ID
         private String receiverAddress;//收货地址
         private String receiverMobile;//收货人电话号码
         private String receiverName;//收货人姓名
         private String receiverSex;//收货人性别
         private String receiverTime;//收货时间
         private double totalCost;// 总支出金额
         private long productAmount;// 商品数量
         private double deliverCost;// 配送费用
         private double productCost;//商品开销
         private String orderStatus;// 状态标志
         private String payType;//付款方式
         private List<OrderItem> orderItems;//订单项
         private String creatorTime;// 创建时间
         private String updateTime;// 更新时间
         */

        String aoData = request.getParameter("aoData");

        //解析分页数据，并封装成Page实体
        Page pageData = PageUtils.parse(aoData);

        int iTotalRecords = orderService.currentOrderCount();

        List<Order> orders = orderService.getCurrentOrderList(pageData.getiDisplayStart(), pageData.getiDisplayLength());

        for (Order o : orders) {
            User user = userService.findByUserId(o.getUsId());
            DeliveryAddress deliveryAddress = deliveryAddressService.findUserDefaultDeliverAddress(user.getUsId());
            o.setUsername(user.getUsername());
            o.setReceiverAddress(deliveryAddress.getReceiverAddress());
        }

        JSONObject data = PageUtils.encPageJsonObj(pageData.getsEcho(), iTotalRecords, iTotalRecords, orders);

        response.getWriter().write(JSONObject.toJSONString(data));

    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}