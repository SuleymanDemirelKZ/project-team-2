package com.sdu.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sdu.model.TimeSlot;
import com.sdu.service.TimeSlotService;

import java.time.LocalDate;
import java.util.List;

// Other imports and controller annotations

@RestController
@RequestMapping("/time-slots")
public class TimeSlotController {
    // Autowired services

    @Autowired
    private  TimeSlotService timeSlotService;

    @GetMapping("/available")
    public List<TimeSlot> getAvailableTimeSlotsByDateAndTestCenterId(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @RequestParam("testCenterId") Long testCenterId) {
        return timeSlotService.findAvailableTimeSlotsByDateAndTestCenterId(date, testCenterId);
    }

    // Other methods
}
