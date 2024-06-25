package org.jsp.reservation_app.dao;

import java.util.Optional;
import org.jsp.reservation_app.model.User;
import org.jsp.reservation_app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public Optional<User> findById(int id){
		return userRepository.findById(id);
	}
	
	public Optional<User> verify(long phone, String password) {
		return userRepository.findByPhoneAndPassword(phone, password);
	}

	public Optional<User> verify(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	public void delete(int id) {
		userRepository.deleteById(id);
	}
	
	public Optional<User> findByToken(String token){
		return userRepository.findByToken(token);
	}
	
	public Optional<User> findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
