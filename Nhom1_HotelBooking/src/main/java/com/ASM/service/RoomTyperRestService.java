package com.ASM.service;

import java.util.List;
import java.util.Optional;

import com.ASM.model.RoomType;

public interface RoomTyperRestService {

	List<RoomType> findAll();

	RoomType findById(String id);

	RoomType create(RoomType roomtype);

	void delete(String id);

	List<RoomType> findAllByTypeName(Optional<String> name);

}
