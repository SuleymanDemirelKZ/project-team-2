package com.med.jalda.service;

import com.example.booking.model.TestCenter;

import java.util.List;

public interface TestCenterService {
    TestCenter createTestCenter(TestCenter testCenter);
    TestCenter getTestCenterById(Long id);
    List<TestCenter> getAllTestCenters();
    TestCenter updateTestCenter(Long id, TestCenter testCenter);
    void deleteTestCenter(Long id);
}
