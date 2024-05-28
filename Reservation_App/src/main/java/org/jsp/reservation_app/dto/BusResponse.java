package org.jsp.reservation_app.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusResponse {
	private int id;
	private String name;
	private LocalDateTime date_Of_Departure;
	private String bus_No;
	private String from_Location;
	private String to_Location;
	private int no_Seats;
}
