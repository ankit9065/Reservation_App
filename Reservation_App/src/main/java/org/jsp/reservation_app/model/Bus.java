package org.jsp.reservation_app.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private LocalDateTime date_Of_Departure;
	@Column(nullable = false)
	private String bus_No;
	@Column(nullable = false)
	private String from_Location;
	@Column(nullable = false)
	private String to_Location;
	@Column(nullable = false)
	private int no_Seats;
	
	@ManyToOne
	@JoinColumn(name = "admin_id")
	@JsonIgnore
	private Admin admin;
}
