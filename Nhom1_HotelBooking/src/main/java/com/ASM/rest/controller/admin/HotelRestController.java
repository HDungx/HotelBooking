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

import com.ASM.model.Hotel;
import com.ASM.model.RoomType;
import com.ASM.service.HotelRestService;
import com.ASM.service.RoomTyperRestService;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/hotels")
public class HotelRestController {
	@Autowired
	HotelRestService hotelRestService;
	
	@GetMapping
	public List<Hotel> getAll(){
		return hotelRestService.findAll();
	}
		
	@PostMapping
	public Hotel create(@RequestBody Hotel hotel ) {
		return hotelRestService.create(hotel);
	}
	
	@DeleteMapping("{id}")
	public void delete(@PathVariable("id")String id) {
		hotelRestService.delete(id);
	}
	
	@GetMapping("{name}")
	public List<Hotel> getAllByName(@PathVariable("name")Optional<String> name){
		if(name.isEmpty()) {
			return hotelRestService.findAll();
		}
		return hotelRestService.findAllByTypeName(name);
	}
}
