package com.ASM.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ASM.model.User;

public interface UserDAO extends JpaRepository<User, String>{
	
	@Query("SELECT u FROM User u WHERE u.email = ?1")
	User findByEmail(String email);
	
	boolean existsByEmail(String email);

	@Query("SELECT o FROM User o WHERE o.email LIKE %?1%")
	List<User> findAllByEmail(Optional<String> email);
}
