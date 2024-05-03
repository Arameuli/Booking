package com.example.booking.controllers;

import com.example.booking.model.Hotel;
import com.example.booking.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class Hotelcontroller {
    private final HotelService hotelService;
    @Autowired
    public Hotelcontroller(HotelService hotelService) {
        this.hotelService = hotelService;
    }
    @GetMapping
    public List<Hotel> getallhotel(){
        return hotelService.gethotellist();
    }
}
