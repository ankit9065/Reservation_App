package org.jsp.reservation_app.dto;

import lombok.Data;

@Data
public class UserRequest {
	private String name;
	private long phone;
	private String gender;
	private int age;
	private String email;
	private String password;
}
