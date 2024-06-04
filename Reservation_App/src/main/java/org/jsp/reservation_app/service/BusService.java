package org.jsp.reservation_app.service;

import java.util.List;
import java.util.Optional;
import org.jsp.reservation_app.dao.AdminDao;
import org.jsp.reservation_app.dao.BusDao;
import org.jsp.reservation_app.dto.BusRequest;
import org.jsp.reservation_app.dto.BusResponse;
import org.jsp.reservation_app.dto.ResponseStructure;
import org.jsp.reservation_app.exception.AdminNotFoundException;
import org.jsp.reservation_app.exception.BusNotFoundException;
import org.jsp.reservation_app.exception.UserNotFoundException;
import org.jsp.reservation_app.model.Admin;
import org.jsp.reservation_app.model.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusService {
	@Autowired
	private BusDao busDao;

	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<ResponseStructure<BusResponse>> saveBus(BusRequest busRequest, int admin_id) {
		Optional<Admin> rec = adminDao.findById(admin_id);
		ResponseStructure<BusResponse> structure = new ResponseStructure<>();
		if (rec.isPresent()) {
			Bus bus = mapToBus(busRequest);
			bus.setAdmin(rec.get());
			rec.get().getBuses().add(bus);
			adminDao.saveAdmin(rec.get());
			busDao.saveBus(bus);
			structure.setData(mapToBusResponse(bus));
			structure.setMessage("Bus details Successfully saved...");
			structure.setStatusCode(HttpStatus.CREATED.value());

			return ResponseEntity.status(HttpStatus.CREATED).body(structure);
		}
		throw new AdminNotFoundException("Can't Add Bus as Admin_Id is Invalid");
	}

	public ResponseEntity<ResponseStructure<BusResponse>> update(BusRequest busRequest, int id) {
		ResponseStructure<BusResponse> structure = new ResponseStructure<>();
		Optional<Bus> rec = busDao.findById(id);

		if (rec.isPresent()) {
			Bus dbBus = rec.get();

			dbBus.setBusNumber(busRequest.getBusNumber());
			dbBus.setDateofdeparture(busRequest.getDateofdeparture());
			dbBus.setFrom(busRequest.getFrom());
			;
			dbBus.setTo(busRequest.getTo());
			dbBus.setName(busRequest.getName());
			dbBus.setNoOfSeats(busRequest.getNoOfSeats());

			structure.setData(mapToBusResponse(busDao.saveBus(dbBus)));
			structure.setMessage("Bus Details updated Successfully..!!");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());

			return ResponseEntity.status(HttpStatus.ACCEPTED).body(structure);
		}
		throw new UserNotFoundException("Cannot Update Bus as Id is Invalid");
	}

	public ResponseEntity<ResponseStructure<BusResponse>> findById(int id) {
		ResponseStructure<BusResponse> structure = new ResponseStructure<>();
		Optional<Bus> db = busDao.findById(id);

		if (db.isPresent()) {

			structure.setData(mapToBusResponse(db.get()));
			structure.setMessage("Bus found by Id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new BusNotFoundException("Invalid Bus Id");
	}

	public ResponseEntity<ResponseStructure<BusResponse>> delete(int id) {
		ResponseStructure<BusResponse> structure = new ResponseStructure<>();
		Optional<Bus> db = busDao.findById(id);

		if (db.isPresent()) {
			busDao.deleteBus(id);

			structure.setData(mapToBusResponse(db.get()));
			structure.setMessage("Bus deleted by id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new BusNotFoundException("Invalid Bus Id");
	}
	
//	public ResponseEntity<ResponseStructure<List<Bus>>> findBuses(String from, String to, String dateOfDeparture) {
//		ResponseStructure<List<Bus>> structure = new ResponseStructure<>();
//		List<Bus> buses = busDao.findBuses(from, to, dateOfDeparture);
//		if (buses.isEmpty())
//			throw new BusNotFoundException("No Buses for entered route on this Date");
//		structure.setData(buses);
//		structure.setMessage("List of Buses for entered route on this Date");
//		structure.setStatusCode(HttpStatus.OK.value());
//		return ResponseEntity.status(HttpStatus.OK).body(structure);
//	}

	public ResponseEntity<ResponseStructure<List<Bus>>> findAll() {
		ResponseStructure<List<Bus>> structure = new ResponseStructure<>();
		structure.setData(busDao.findAll());
		structure.setMessage("List of All Buses");
		structure.setStatusCode(HttpStatus.OK.value());
		return ResponseEntity.status(HttpStatus.OK).body(structure);
	}


	private Bus mapToBus(BusRequest busRequest) {
		return Bus.builder().name(busRequest.getName()).busNumber(busRequest.getBusNumber())
				.dateofdeparture(busRequest.getDateofdeparture()).from(busRequest.getFrom()).to(busRequest.getTo())
				.noOfSeats(busRequest.getNoOfSeats()).build();
	}

	private BusResponse mapToBusResponse(Bus bus) {
		return BusResponse.builder().id(bus.getId()).name(bus.getName()).dateofdeparture(bus.getDateofdeparture())
				.from(bus.getFrom()).to(bus.getTo()).noOfSeats(bus.getNoOfSeats()).busNumber(bus.getBusNumber())
				.build();
	}
}
