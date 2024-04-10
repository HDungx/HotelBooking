package com.ASM.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ASM.dao.UserDAO;
import com.ASM.model.User;
import com.ASM.service.UserRestService;

@Service
public class UserRestServiceImpl implements UserRestService{
	@Autowired
	UserDAO udao;
	
	@Override
	public List<User> findAll() {
		return udao.findAll();
	}

	@Override
	public User create(User user) {
		return udao.save(user);
	}

	@Override
	public void delete(String email) {
		udao.deleteById(email);
		
	}

	@Override
	public List<User> findAllByEmail(Optional<String> email) {
		return udao.findAllByEmail(email);
	}

}
