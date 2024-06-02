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
	private String dateofdeparture;
	private String busNumber;
	private String from;
	private String to;
	private int noOfSeats;
}
