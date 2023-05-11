package com.sdu.service.impl;


import com.sdu.model.TestCenter;
import com.sdu.repository.TestCenterRepository;
import com.sdu.service.TestCenterService;
import com.sdu.util.TimeSlotScheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestCenterServiceImpl implements TestCenterService {
    @Autowired
    private TestCenterRepository testCenterRepository;

    @Autowired
    private TimeSlotScheduler timeSlotScheduler;


    @Override
    public TestCenter createTestCenter(TestCenter testCenter) {
//        MED: I don't think that it's works
        testCenter.setTimeSlots(testCenter.getTimeSlots());
        timeSlotScheduler.generateTimeSlotsForNextTenDays();
        return testCenterRepository.save(testCenter);
    }

    @Override
    public TestCenter getTestCenterById(Long id) {
        return testCenterRepository.findById(id).orElse(null);
    }

    @Override
    public List<TestCenter> getAllTestCenters() {
        return testCenterRepository.findAll();
    }

    @Override
    public TestCenter updateTestCenter(Long id, TestCenter testCenter) {
        Optional<TestCenter> optionalTestCenter = testCenterRepository.findById(id);
        if (optionalTestCenter.isPresent()) {
            TestCenter existingTestCenter = optionalTestCenter.get();
            existingTestCenter.setName(testCenter.getName());
            existingTestCenter.setAddress(testCenter.getAddress());
            existingTestCenter.setCity(testCenter.getCity());
            return testCenterRepository.save(existingTestCenter);
        }
        return null;
    }

    @Override
    public void deleteTestCenter(Long id) {
        testCenterRepository.deleteById(id);
    }

}
