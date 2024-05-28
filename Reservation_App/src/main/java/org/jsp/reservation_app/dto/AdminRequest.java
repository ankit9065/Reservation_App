package org.jsp.reservation_app.dto;

//import java.util.List;
//import org.jsp.reservation_app.model.Bus;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AdminRequest {
	@NotBlank(message = "Name is mandatory")
	private String name;
	@NotBlank(message = "GST No is mandatory")
	@Size(min = 10, max = 15, message = "Gst No msut have 15 characters")
	private String gst_no;
	@NotBlank(message = "Travels name is mandatory")
	private String travles_name;
	private long phone;
	@Email(message = "Invalid email formate")
	private String email;
	@NotBlank(message = "Password is mandatory")
	private String password;
	
//	private List<Bus> bus;
}
