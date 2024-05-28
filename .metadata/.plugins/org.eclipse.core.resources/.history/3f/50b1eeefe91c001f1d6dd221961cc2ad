package org.jsp.reservation_app.controller;

import org.jsp.reservation_app.dto.AdminRequest;
import org.jsp.reservation_app.dto.AdminResponse;
import org.jsp.reservation_app.dto.ResponseStructure;
import org.jsp.reservation_app.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admins")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping
	public ResponseEntity<ResponseStructure<AdminResponse>> saveAdmin(@RequestBody AdminRequest adminRequest) {
		return adminService.saveAdmin(adminRequest);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ResponseStructure<AdminResponse>> updateAdmin(@RequestBody AdminRequest adminRequest,
			@PathVariable int id) {
		return adminService.update(adminRequest, id);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResponseStructure<AdminResponse>> findAdmin(@PathVariable int id) {
		return adminService.findById(id);
	}

	@PostMapping("/verify-by-phone")
	public ResponseEntity<ResponseStructure<AdminResponse>> verifyByPhone(@RequestParam long phone,
			@RequestParam String password) {
		return adminService.verify(phone, password);
	}

	@GetMapping("/verify-by-email")
	public ResponseEntity<ResponseStructure<AdminResponse>> verifyByEmail(@RequestParam String email,
			@RequestParam String password) {
		return adminService.verify(email, password);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<ResponseStructure<String>> delete(@PathVariable int id) {
		return adminService.delete(id);
	}
}
