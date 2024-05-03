package com.example.booking.service;

import com.example.booking.model.Hotel;
import com.example.booking.model.HotelList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class HotelService {
    private final HotelList hotelList;
    @Autowired
    public HotelService(HotelList hotelList){
        this.hotelList=hotelList;
    }
    public List<Hotel> gethotellist(){
        return hotelList.getHotels();
    }

}
