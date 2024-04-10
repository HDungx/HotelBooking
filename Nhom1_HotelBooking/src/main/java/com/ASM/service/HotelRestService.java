package com.ASM.service;

import java.util.List;
import java.util.Optional;

import com.ASM.model.Hotel;
import com.ASM.model.RoomType;

public interface HotelRestService {

	List<Hotel> findAll();

	Hotel create(Hotel hotel);

	void delete(String id);

	List<Hotel> findAllByTypeName(Optional<String> name);

	

}
