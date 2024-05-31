package org.jsp.reservation_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ReservationApiMailService {
	@Autowired
	private JavaMailSender javaMailSender;
	
	public String sendMail(String email, String url) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(email);
		simpleMailMessage.setText("Dear user, please activate your account by clicking on url_link: " + url);
		simpleMailMessage.setSubject("Activate your account");
		javaMailSender.send(simpleMailMessage);
		return "Registration successfull and verification mail has been send ";
	}
}
