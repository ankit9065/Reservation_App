package org.jsp.reservation_app.service;

import org.jsp.reservation_app.dao.AdminDao;
import org.jsp.reservation_app.dao.UserDao;
import org.jsp.reservation_app.model.Admin;
import org.jsp.reservation_app.model.User;
import org.jsp.reservation_app.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;
import static org.jsp.reservation_app.util.ApplicationConstants.ADMIN_VERIFY_LINK;
import static org.jsp.reservation_app.util.ApplicationConstants.USER_VERIFY_LINK;
import static org.jsp.reservation_app.util.ApplicationConstants.ADMIN_RESET_PASSWORD_LINK;
import static org.jsp.reservation_app.util.ApplicationConstants.USER_RESET_PASSWORD_LINK;

@Service
public class LinkGeneratorService {
	@Autowired
	private AdminDao adminDao;

	@Autowired
	private UserDao userDao;

	public String getActivationLink(Admin admin, HttpServletRequest request) {
		admin.setToken(RandomString.make(45));
		admin.setStatus(AccountStatus.IN_ACTIVE.toString());
		adminDao.saveAdmin(admin);
		String siteUrl = request.getRequestURL().toString();
		return siteUrl.replace(request.getServletPath(), ADMIN_VERIFY_LINK + admin.getToken());
	}

	public String getActivationLink(User user, HttpServletRequest request) {
		user.setToken(RandomString.make(45));
		user.setStatus(AccountStatus.IN_ACTIVE.toString());
		userDao.saveUser(user);
		String siteUrl = request.getRequestURL().toString();
		return siteUrl.replace(request.getServletPath(), USER_VERIFY_LINK + user.getToken());
	}
	
	public String getUserActivationLink(String token, HttpServletRequest request) {
		String siteUrl = request.getRequestURL().toString();
		return siteUrl.replace(request.getServletPath(), USER_VERIFY_LINK + token);
	}
	
	public String getResetPasswordLink(Admin admin, HttpServletRequest request) {
		admin.setToken(RandomString.make(45));
		adminDao.saveAdmin(admin);
		String siteUrl = request.getRequestURL().toString();
		return siteUrl.replace(request.getServletPath(), ADMIN_RESET_PASSWORD_LINK + admin.getToken());
	}
	
	public String getResetPasswordLink(User user, HttpServletRequest request) {
		user.setToken(RandomString.make(45));
		userDao.saveUser(user);
		String siteUrl = request.getRequestURL().toString();
		return siteUrl.replace(request.getServletPath(), USER_RESET_PASSWORD_LINK + user.getToken());
	}
}
