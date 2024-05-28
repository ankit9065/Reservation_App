package org.jsp.reservation_app.dao;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.jsp.reservation_app.model.Bus;
import org.jsp.reservation_app.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BusDao {
	@Autowired
	private BusRepository busRepository;

	public Bus saveBus(Bus bus) {
		return busRepository.save(bus);
	}
	
	public Optional<Bus> findById(int id){
		return busRepository.findById(id);
	}

//	public Optional<Bus> findByName(String name) {
//		return busRepository.findByName(name);
//	}
//
//	public Optional<Bus> verifyByBusNo(String bus_No) {
//		return busRepository.findByBusNo(bus_No);
//	}
//
//	public List<Bus> verify(String from_Location, String to_Location) {
//		return busRepository.findByFromLocationToLocation(from_Location, to_Location);
//	}
//
//	public List<Bus> verify(LocalDateTime date_Of_Departure){
//		return busRepository.findByDateOfDeparture(date_Of_Departure);
//	}
	
	public void deleteBus(int id) {
		busRepository.deleteById(id);
	}
}
