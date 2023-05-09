package com.sdu.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdu.model.TestCenter;
import com.sdu.model.TimeSlot;
import com.sdu.repository.TimeSlotRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class TimeSlotService {
    @Autowired
    private TimeSlotRepository timeSlotRepository;

    public TimeSlot saveTimeSlot(TimeSlot timeSlot) {
        return timeSlotRepository.save(timeSlot);
    }

    public List<TimeSlot> findAllTimeSlots() {
        return timeSlotRepository.findAll();
    }

    public void createTimeSlotsForTestCenter(TestCenter testCenter, LocalDate date, int numberOfSlots) {
        LocalTime startTime = LocalTime.of(9, 0); // Assuming the test center opens at 9 AM
        int intervalInMinutes = 30; // Assuming a 30-minute interval between slots
    
        for (int i = 0; i < numberOfSlots; i++) {
            TimeSlot timeSlot = new TimeSlot();
            timeSlot.setDate(date);
            timeSlot.setTime(startTime.plusMinutes(intervalInMinutes * i));
            timeSlot.setTestCenter(testCenter);
    
            timeSlotRepository.save(timeSlot);
        }
    }

    public List<TimeSlot> findAvailableTimeSlotsByDateAndTestCenterId(LocalDate date, Long testCenterId) {
        return timeSlotRepository.findAvailableTimeSlotsByDateAndTestCenterId(date, testCenterId);
    }
    
}
