package org.jsp.reservation_app.service;

import java.util.Optional;
import org.jsp.reservation_app.dao.UserDao;
import org.jsp.reservation_app.dto.ResponseStructure;
import org.jsp.reservation_app.dto.UserRequest;
import org.jsp.reservation_app.dto.UserResponse;
import org.jsp.reservation_app.exception.UserNotFoundException;
import org.jsp.reservation_app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserDao userDao;

	public ResponseEntity<ResponseStructure<UserResponse>> saveUser(UserRequest userRequest) {
		ResponseStructure<UserResponse> structure = new ResponseStructure<>();

		structure.setMessage("User Successfully saved...!!");
		User user = userDao.saveUser(mapToUser(userRequest));
		structure.setData(mapToUserResponse(user));
		structure.setStatusCode(HttpStatus.CREATED.value());

		return ResponseEntity.status(HttpStatus.CREATED).body(structure);
	}

	/**
	 * This method will accept UserRequest(DTO) and User Id and update the User in
	 * the DataBase if identifier is valid.
	 * 
	 * @param UserRquest
	 * @param int
	 * @throws {@code UserNotFoundException} if Identifiers is Invalid.
	 */

	public ResponseEntity<ResponseStructure<UserResponse>> update(UserRequest userRequest, int id) {
		ResponseStructure<UserResponse> structure = new ResponseStructure<>();
		Optional<User> rec = userDao.findById(id);

		if (rec.isPresent()) {
			User dbUser = rec.get();
			
			dbUser.setName(userRequest.getName());
			dbUser.setAge(userRequest.getAge());
			dbUser.setEmail(userRequest.getEmail());
			dbUser.setGender(userRequest.getGender());
			dbUser.setPhone(userRequest.getPhone());
			dbUser.setPassword(userRequest.getPassword());

			structure.setData(mapToUserResponse(userDao.saveUser(dbUser)));
			structure.setMessage("User Details updated Successfully..!!");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());

			return ResponseEntity.status(HttpStatus.ACCEPTED).body(structure);
		}
		throw new UserNotFoundException("Cannot Update User as Id is Invalid");
	}

	public ResponseEntity<ResponseStructure<UserResponse>> findById(int id) {
		ResponseStructure<UserResponse> structure = new ResponseStructure<>();
		Optional<User> db = userDao.findById(id);

		if (db.isPresent()) {

			structure.setData(mapToUserResponse(db.get()));
			structure.setMessage("User found by Id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new UserNotFoundException("Invalid User Id");
	}

	public ResponseEntity<ResponseStructure<UserResponse>> verify(long phone, String password) {
		ResponseStructure<UserResponse> structure = new ResponseStructure<>();
		Optional<User> db = userDao.verify(phone, password);

		if (db.isPresent()) {

			structure.setData(mapToUserResponse(db.get()));
			structure.setMessage("Verification done by phone & password Succesfull...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new UserNotFoundException("Invalid Phone Number or Password");
	}

	public ResponseEntity<ResponseStructure<UserResponse>> verify(String email, String password) {
		ResponseStructure<UserResponse> structure = new ResponseStructure<>();
		Optional<User> db = userDao.verify(email, password);

		if (db.isPresent()) {

			structure.setData(mapToUserResponse(db.get()));
			structure.setMessage("Verification done by email & password Succesfull...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new UserNotFoundException("Invalid Email Id or Password");
	}

	public ResponseEntity<ResponseStructure<String>> delete(int id) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<User> db = userDao.findById(id);

		if (db.isPresent()) {

			userDao.delete(id);
			structure.setData("User Found");
			structure.setMessage("User deleted by Id successfully...");
			structure.setStatusCode(HttpStatus.OK.value());

			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new UserNotFoundException("Cannot delete User as Id is Invalid");
	}

	private User mapToUser(UserRequest userRequest) {
		return User.builder().name(userRequest.getName()).phone(userRequest.getPhone()).age(userRequest.getAge())
				.gender(userRequest.getGender()).email(userRequest.getEmail()).password(userRequest.getPassword())
				.build();
	}

	private UserResponse mapToUserResponse(User user) {
		return UserResponse.builder().id(user.getId()).name(user.getName()).age(user.getAge()).gender(user.getGender())
				.email(user.getEmail()).phone(user.getPhone()).password(user.getPassword()).build();
	}
}
