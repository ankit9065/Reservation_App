package org.jsp.reservation_app.dto;

import org.jsp.reservation_app.model.Admin;
import lombok.Data;

@Data
public class BusRequest {
	private String name;
	private String dateofdeparture;
	private String busNumber;
	private String from;
	private String to;
	private int noOfSeats;
	private Admin admin;
}
