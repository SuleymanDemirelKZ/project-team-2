package com.med.jalda.service.impl;

import com.example.booking.model.TestCenter;
import com.example.booking.repository.TestCenterRepository;
import com.example.booking.service.TestCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestCenterServiceImpl implements TestCenterService {
    @Autowired
    private TestCenterRepository testCenterRepository;

    @Override
    public TestCenter createTestCenter(TestCenter testCenter) {
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
            existingTestCenter.setState(testCenter.getState());
            existingTestCenter.setZip(testCenter.getZip());
            return testCenterRepository.save(existingTestCenter);
        }
        return null;
    }

    @Override
    public void deleteTestCenter(Long id) {
        testCenterRepository.deleteById(id);
    }
}
