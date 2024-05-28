package org.jsp.reservation_app.dto;

import java.time.LocalDateTime;
import org.jsp.reservation_app.model.Admin;
import lombok.Data;

@Data
public class BusRequest {
	private String name;
	private LocalDateTime date_Of_Departure;
	private String bus_No;
	private String from_Location;
	private String to_Location;
	private int no_Seats;
	private Admin admin;
}
