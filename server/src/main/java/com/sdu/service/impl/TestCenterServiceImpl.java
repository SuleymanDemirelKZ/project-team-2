package com.sdu.service.impl;


import com.sdu.model.TestCenter;
import com.sdu.payload.testcenter.request.TestCenterRequestDTO;
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

//        timeSlotScheduler.generateTimeSlotsForNextTenDays();

    @Override
    public TestCenter createTestCenter(TestCenterRequestDTO testCenterRequestDTO) {

//        TestCenter testCenter = TestCenter.builder()
//                .address(testCenterRequestDTO.getAddress())
//                .name(testCenterRequestDTO.getName())
//                .city(testCenterRequestDTO.getCity()).build();


        return testCenterRepository.save(TestCenter.builder()
                .address(testCenterRequestDTO.getAddress())
                .name(testCenterRequestDTO.getName())
                .city(testCenterRequestDTO.getCity())
                        .state(testCenterRequestDTO.getState())
                        .zip(testCenterRequestDTO.getZip())
                .build());


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
