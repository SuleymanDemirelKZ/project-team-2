package com.sdu.controller;


import com.sdu.model.TestCenterTimeSlot;
import com.sdu.service.TestCenterTimeSlotService;
import com.sdu.util.TimeSlotScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import java.time.LocalDate;
import java.util.List;

// Other imports and controller annotations

@RestController
@RequestMapping("/api/time-slots")
public class TestCenterTimeSlotController {
    // Autowired services

    @Autowired
    private TestCenterTimeSlotService timeSlotService;

//    @GetMapping("/available")
//    public ResponseEntity<List<TestCenterTimeSlot>> getAvailableTimeSlotsByDateAndTestCenterId(
//            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
//            @RequestParam("testCenterId") Long testCenterId) {
//        List<TestCenterTimeSlot> list = timeSlotService.findAvailableTimeSlotsByDateAndTestCenterId(date, testCenterId);
//        return ResponseEntity.ok(list);
//    }

    @GetMapping("/available")
    public ResponseEntity<List<TestCenterTimeSlot>> getAvailableTimeSlotsByDateAndTestCenterId(
            @RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @RequestParam("testCenterId") Long testCenterId) {
        List<TestCenterTimeSlot> list = timeSlotService.findAvailableTimeSlotsByDateAndTestCenterId(date, testCenterId);
        return ResponseEntity.ok(list);
    }

    // Other methods
}
