package org.jsp.reservation_app.repository;

import java.util.List;

//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;

import org.jsp.reservation_app.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusRepository extends JpaRepository<Bus, Integer> {
	
	
//	Optional<Bus> findByBusNo(String bus_No);
//	
//	List<Bus> findByFromLocationToLocation(String from_Location, String to_Location);
//	
//	List<Bus> findByDateOfDeparture(LocalDateTime date_Of_Departure);
	
//	@Query("select b from Bus b where b.from=?1 and b.to=?2 and b.dateofDeparture=?3")
//	List<Bus> findBuses(String from, String to, String dateOfDeparture);
}
