package com.example.booking.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Hotel {
    private String name;
    private int maxrooms;
    private Map<Integer, Boolean> rooms;
}
