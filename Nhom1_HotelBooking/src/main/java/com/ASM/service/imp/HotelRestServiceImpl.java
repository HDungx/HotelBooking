package com.ASM.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ASM.dao.HotelDAO;
import com.ASM.model.Hotel;
import com.ASM.model.RoomType;
import com.ASM.service.HotelRestService;

@Service
public class HotelRestServiceImpl implements HotelRestService {
	@Autowired
	HotelDAO hdao;

	@Override
	public List<Hotel> findAll() {
		// TODO Auto-generated method stub
		return hdao.findAll();
	}

	@Override
	public Hotel create(Hotel hotel) {
		// TODO Auto-generated method stub
		return hdao.save(hotel);
	}

	@Override
	public void delete(String id) {
		hdao.deleteById(id);

	}

	@Override
	public List<Hotel> findAllByTypeName(Optional<String> name) {
		// TODO Auto-generated method stub
		return hdao.findAllByHotelName(name);
	}

}
