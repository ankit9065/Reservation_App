package org.jsp.reservation_app.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.jsp.reservation_app.model.Admin;
import org.jsp.reservation_app.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusRepository extends JpaRepository<Bus, Integer> {	
	
//	Optional<Bus> findByBusNo(String bus_No);
//	
//	List<Bus> findByFromLocationToLocation(String from_Location, String to_Location);
//	
//	List<Bus> findByDateOfDeparture(String date_Of_Departure);
	
	@Query("select b from Bus b where b.admin.id=?1")
	List<Bus> findByAdminId(int id);
	
	@Query("select b from Bus b where b.from=?1 and b.to=?2 and b.dateofdeparture=?3")
	List<Bus> findBuses(String from, String to, LocalDate dateofdeparture);

//	Optional<Bus> findByToken(String token);
}
