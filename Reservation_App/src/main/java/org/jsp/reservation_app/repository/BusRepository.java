package org.jsp.reservation_app.repository;

//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;

import org.jsp.reservation_app.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Integer> {
	
	
//	Optional<Bus> findByBusNo(String bus_No);
//	
//	List<Bus> findByFromLocationToLocation(String from_Location, String to_Location);
//	
//	List<Bus> findByDateOfDeparture(LocalDateTime date_Of_Departure);
}
