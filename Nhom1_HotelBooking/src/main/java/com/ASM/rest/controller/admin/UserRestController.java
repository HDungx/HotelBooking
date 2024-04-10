package com.ASM.rest.controller.admin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ASM.model.User;
import com.ASM.service.UserRestService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/users")
public class UserRestController {
	@Autowired
	UserRestService userService;
	
	@GetMapping
	public List<User> getAll(){
		return userService.findAll();
	}
	
	@GetMapping("{email}")
	public List<User> findByEmail(@PathVariable("email")Optional<String> email){
		if(email.isEmpty()) {
			return userService.findAll();
		}
		return userService.findAllByEmail(email);
	}
	
	@PostMapping
	public User create(@RequestBody User user) {
		return userService.create(user);
	}
	
	@DeleteMapping("{email}")
	public void delete(@PathVariable("email")String email) {
		userService.delete(email);
	}
}
