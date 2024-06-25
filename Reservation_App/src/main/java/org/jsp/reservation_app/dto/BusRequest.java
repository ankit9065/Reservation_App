package org.jsp.reservation_app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.jsp.reservation_app.model.Admin;

import lombok.Data;

@Data
public class BusRequest {
	private int id;
	private String name;
	private String busNumber;
	private LocalDate dateofdeparture;
	private String from;
	private String to;
	private int noOfSeats;
	private double costPerSeat;
	private Admin admin;
}
