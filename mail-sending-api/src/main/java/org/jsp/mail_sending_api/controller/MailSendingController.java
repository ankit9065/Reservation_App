package org.jsp.mail_sending_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@RestController
@RequestMapping("/api")
public class MailSendingController {
	@Autowired
	 private JavaMailSender javaMailSender;
	
	@PostMapping("/send-mail")
	public String sendMail(@RequestParam String mailId) {
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);
		
		try {
			helper.setTo(mailId);
			helper.setSubject("Testing the new Mail Sending API");
			helper.setText("Dear User, we are sending this mail to test the send-email-api. Just Ignore it...");
		} 
		catch (MessagingException e) {
			e.printStackTrace();
		}
		javaMailSender.send(message);
		return "Mail has been sent to :" + mailId;
	}
}
