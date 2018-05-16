package com.guet.oos.po;

import java.io.Serializable;
import java.util.Date;

/**
 * 收货地址
 * 
 * @author Shinelon
 *
 */
public class DeliveryAddress implements Serializable {

	private static final long serialVersionUID = 786454224465450725L;

	private long daId;// 收货地址ID

	private long oId;// 订单ID

	private String receiverName;// 收货人姓名

	private String receiverMobile;// 收货人电话

	private String receiverAddress;// 收货人地址

	private Date creatorTime;// 创建时间

	private Date updateTime;// 更新时间

	public long getDaId() {
		return daId;
	}

	public void setDaId(long daId) {
		this.daId = daId;
	}

	public long getoId() {
		return oId;
	}

	public void setoId(long oId) {
		this.oId = oId;
	}

	public String getReceiverName() {
		return receiverName;
	}

	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}

	public String getReceiverMobile() {
		return receiverMobile;
	}

	public void setReceiverMobile(String receiverMobile) {
		this.receiverMobile = receiverMobile;
	}

	public String getReceiverAddress() {
		return receiverAddress;
	}

	public void setReceiverAddress(String receiverAddress) {
		this.receiverAddress = receiverAddress;
	}

	public Date getCreatorTime() {
		return creatorTime;
	}

	public void setCreatorTime(Date creatorTime) {
		this.creatorTime = creatorTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public DeliveryAddress(long daId, long oId, String receiverName, String receiverMobile, String receiverAddress,
			Date creatorTime, Date updateTime) {
		super();
		this.daId = daId;
		this.oId = oId;
		this.receiverName = receiverName;
		this.receiverMobile = receiverMobile;
		this.receiverAddress = receiverAddress;
		this.creatorTime = creatorTime;
		this.updateTime = updateTime;
	}

	public DeliveryAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "DeliveryAddress [daId=" + daId + ", oId=" + oId + ", receiverName=" + receiverName + ", receiverMobile="
				+ receiverMobile + ", receiverAddress=" + receiverAddress + ", creatorTime=" + creatorTime
				+ ", updateTime=" + updateTime + "]";
	}

}
