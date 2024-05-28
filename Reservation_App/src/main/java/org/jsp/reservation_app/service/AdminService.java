package org.jsp.reservation_app.service;

import java.util.Optional;

import org.jsp.reservation_app.dao.AdminDao;
import org.jsp.reservation_app.dto.AdminRequest;
import org.jsp.reservation_app.dto.AdminResponse;
import org.jsp.reservation_app.dto.ResponseStructure;
import org.jsp.reservation_app.exception.AdminNotFoundException;
import org.jsp.reservation_app.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	@Autowired
	private AdminDao adminDao;

	public ResponseEntity<ResponseStructure<AdminResponse>> saveAdmin(AdminRequest adminRequest) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();

		structure.setMessage("Admin Successfully saved...!!");
		Admin admin = adminDao.saveAdmin(mapToAdmin(adminRequest));
		structure.setData(mapToAdminResponse(admin));
		structure.setStatusCode(HttpStatus.CREATED.value());

		return ResponseEntity.status(HttpStatus.CREATED).body(structure);
	}

	/**
	 * This method will accept AdminRequest(DTO) and Admin Id and update the Admin
	 * in the DataBase if identifier is valid.
	 * 
	 * @param AdminRquest
	 * @param int
	 * @throws {@code AdminNotFoundException} if Identifiers is Invalid.
	 */

	public ResponseEntity<ResponseStructure<AdminResponse>> update(AdminRequest adminRequest, int id) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> rec = adminDao.findById(id);

		if (rec.isPresent()) {
			Admin dbAdmin = rec.get();
			
			dbAdmin.setEmail(adminRequest.getEmail());
			dbAdmin.setGst_no(adminRequest.getGst_no());
			dbAdmin.setName(adminRequest.getName());
			dbAdmin.setPhone(adminRequest.getPhone());
			dbAdmin.setPassword(adminRequest.getPassword());
			dbAdmin.setTravels_name(adminRequest.getTravles_name());
			
			structure.setData(mapToAdminResponse(adminDao.saveAdmin(dbAdmin)));
			structure.setMessage("Admin Details updated Successfully..!!");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());

			return ResponseEntity.status(HttpStatus.ACCEPTED).body(structure);
		}
		throw new AdminNotFoundException("Cannot Update Admin as Id is Invalid");
	}

	public ResponseEntity<ResponseStructure<AdminResponse>> findById(int id) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> db = adminDao.findById(id);

		if (db.isPresent()) {

			structure.setData(mapToAdminResponse(db.get()));
			structure.setMessage("Admin found by Id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Admin Id");
	}

	public ResponseEntity<ResponseStructure<AdminResponse>> verify(long phone, String password) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> db = adminDao.verify(phone, password);

		if (db.isPresent()) {

			structure.setData(mapToAdminResponse(db.get()));
			structure.setMessage("Verification done by phone & password Succesfull...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Phone Number or Password");
	}

	public ResponseEntity<ResponseStructure<AdminResponse>> verify(String email, String password) {
		ResponseStructure<AdminResponse> structure = new ResponseStructure<>();
		Optional<Admin> db = adminDao.verify(email, password);

		if (db.isPresent()) {

			structure.setData(mapToAdminResponse(db.get()));
			structure.setMessage("Verification done by email & password Succesfull...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Invalid Email Id or Password");
	}

	public ResponseEntity<ResponseStructure<String>> delete(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Admin> db = adminDao.findById(id);

		if (db.isPresent()) {

			adminDao.delete(id);
			structure.setData("Admin Found");
			structure.setMessage("Admin deleted by Id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new AdminNotFoundException("Cannot delete Admin as Id is Invalid");
	}

	private Admin mapToAdmin(AdminRequest adminRequest) {
		return Admin.builder().name(adminRequest.getName()).phone(adminRequest.getPhone())
				.gst_no(adminRequest.getGst_no()).travels_name(adminRequest.getTravles_name())
				.email(adminRequest.getEmail()).password(adminRequest.getPassword()).build();
	}

	private AdminResponse mapToAdminResponse(Admin admin) {
		return AdminResponse.builder().name(admin.getName()).email(admin.getEmail()).gst_no(admin.getGst_no())
				.id(admin.getId()).phone(admin.getPhone()).password(admin.getPassword())
				.travels_name(admin.getTravels_name()).build();
	}
}
