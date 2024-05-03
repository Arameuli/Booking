package com.example.booking.controllers;

import com.example.booking.service.RoomService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rooms")
public class Roomcontroller {
    private final RoomService roomService;

    public Roomcontroller(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/{hotelname}")
    public void roomreserve(@PathVariable("hotelname") String name, @RequestParam("roomnum") Integer roomnum){
        roomService.Reserveroom(name,roomnum);
    }
}