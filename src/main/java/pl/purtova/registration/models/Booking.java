package pl.purtova.registration.models;

import java.math.BigDecimal;
import java.sql.Date;

/**
 * Represents a single booking made by a particular client for a specific time
 * and date in order to schedule a visit for a beauty treatment.
 * 
 * @author olsuv
 *
 */
public class Booking {
	private String service;
	private String clientName;
	private String time;
	private Date date;
	private BigDecimal price;
	private String contactPhone;
	private String contactEmail;
	
	private boolean done;
	private boolean cancelled;
	private boolean noShow;
	
	public String getService() {
		return service;
	}
	public void setService(String service) {
		this.service = service;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public boolean isCancelled() {
		return cancelled;
	}
	public void setCancelled(boolean cancelled) {
		this.cancelled = cancelled;
	}
	public boolean isNoShow() {
		return noShow;
	}
	public void setNoShow(boolean noShow) {
		this.noShow = noShow;
	}
	
	
}