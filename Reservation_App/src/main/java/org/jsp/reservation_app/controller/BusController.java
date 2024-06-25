package org.jsp.reservation_app.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.jsp.reservation_app.dto.BusRequest;
import org.jsp.reservation_app.dto.BusResponse;
import org.jsp.reservation_app.dto.ResponseStructure;
import org.jsp.reservation_app.model.Bus;
import org.jsp.reservation_app.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/buses")
public class BusController {

	@Autowired
	private BusService busService;
	
	@PostMapping("/{admin_id}")
	public ResponseEntity<ResponseStructure<BusResponse>> saveBus(@RequestBody BusRequest busRequest,
			@PathVariable(name = "admin_id") int admin_id) {
		return busService.saveBus(busRequest, admin_id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ResponseStructure<BusResponse>> updateBus(@RequestBody BusRequest busRequest,
			@PathVariable(name = "id") int id) {
		return busService.update(busRequest, id);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ResponseStructure<BusResponse>> findById(@PathVariable int id) {
		return busService.findById(id);
	}

	@DeleteMapping("/{admin_id}/{id}")
	public ResponseEntity<ResponseStructure<BusResponse>> deleteBus(@PathVariable int id) {
		return busService.delete(id);
	}
	
	@GetMapping
	public ResponseEntity<ResponseStructure<List<Bus>>> findAll() {
		return busService.findAll();
	}

	@GetMapping("/find")
	public ResponseEntity<ResponseStructure<List<Bus>>> findBuses(@RequestParam String from, @RequestParam String to,
			@RequestParam LocalDate dateofdeparture) {
		return busService.findBuses(from, to, dateofdeparture);
	}
	
	@GetMapping("/find/{admin_id}")
	public ResponseEntity<ResponseStructure<List<Bus>>> findByAdminId(@PathVariable int admin_id) {
		return busService.findByAdminId(admin_id);
	}
	
//	@GetMapping("/activate")
//	public String activate(@RequestParam String token) {
//		return busService.activate(token);
//	}
}
