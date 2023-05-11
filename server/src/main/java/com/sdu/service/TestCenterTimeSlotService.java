package com.sdu.service;



import com.sdu.model.TestCenterTimeSlot;
import com.sdu.repository.TestCenterTimeSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdu.model.TestCenter;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class TestCenterTimeSlotService {
    @Autowired
    private TestCenterTimeSlotRepository timeSlotRepository;

    public TestCenterTimeSlot saveTestCenterTimeSlot(TestCenterTimeSlot timeSlot) {
        return timeSlotRepository.save(timeSlot);
    }

    public List<TestCenterTimeSlot> findAllTimeSlots() {
        return timeSlotRepository.findAll();
    }

    public void createTimeSlotsForTestCenter(TestCenter testCenter, LocalDate date, int numberOfSlots) {
        LocalTime startTime = LocalTime.of(9, 0); // Assuming the test center opens at 9 AM
        int intervalInMinutes = 20; // Assuming a 30-minute interval between slots
    
        for (int i = 0; i < numberOfSlots; i++) {
            TestCenterTimeSlot timeSlot = new TestCenterTimeSlot();
            timeSlot.setDate(date);
            timeSlot.setTime(startTime.plusMinutes(intervalInMinutes * i));
            timeSlot.setTestCenter(testCenter);
            timeSlot.setBooked(false);
    
            timeSlotRepository.save(timeSlot);
        }
    }

    public List<TestCenterTimeSlot> findAvailableTimeSlotsByDateAndTestCenterId(LocalDate date, Long testCenterId) {
        return timeSlotRepository.findAvailableTimeSlotsByDateAndTestCenterId(date, testCenterId);
    }



    
}
