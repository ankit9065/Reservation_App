package org.jsp.reservation_app.service;

import org.jsp.reservation_app.dto.EmailConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ReservationApiMailService {
	@Autowired
	private JavaMailSender javaMailSender;
	
	public String sendMail(EmailConfiguration emailConfiguration) {
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setTo(emailConfiguration.getToAddress());
		simpleMailMessage.setText(emailConfiguration.getText());
		simpleMailMessage.setSubject(emailConfiguration.getSubject());
		javaMailSender.send(simpleMailMessage);
		return "Registration successfull and verification mail has been send ";
	}
}
