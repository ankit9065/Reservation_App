package org.jsp.reservation_app.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Bus {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false, name = "bus_name")
	private String name;
	@Column(nullable = false, name = "date_Of_departure")
	@CreationTimestamp
	private LocalDate dateofdeparture;
	@Column(nullable = false, name = "bus_number")
	private String busNumber;
	@Column(nullable = false, name = "from_location")
	private String from;
	@Column(nullable = false, name = "to_location")
	private String to;
	@Column(nullable = false, name = "number_of_seats")
	private int noOfSeats;
	@Column(nullable = false, name = "available_seats")
	private int availableSeats;
	@Column(nullable = false, name = "cost_per_seat")
	private double costPerSeat;
	
	@ManyToOne
	@JoinColumn(name = "admin_id")
	@JsonIgnore
	private Admin admin;
	
	@OneToMany(mappedBy = "bus")
	private List<Ticket> bookedTickets;
}