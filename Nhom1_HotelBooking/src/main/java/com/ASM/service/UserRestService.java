package com.ASM.service;

import java.util.List;
import java.util.Optional;

import com.ASM.model.User;



public interface UserRestService {

	List<User> findAll();

	User create(User user);

	void delete(String email);

	List<User> findAllByEmail(Optional<String> email);

}
