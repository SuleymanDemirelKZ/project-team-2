package com.sdu.service;


import com.sdu.model.TestCenter;
import com.sdu.payload.testcenter.request.TestCenterRequestDTO;

import java.util.List;

public interface TestCenterService {
    TestCenter createTestCenter(TestCenterRequestDTO testCenterRequestDTO);
    TestCenter getTestCenterById(Long id);
    List<TestCenter> getAllTestCenters();
    TestCenter updateTestCenter(Long id, TestCenter testCenter);
    void deleteTestCenter(Long id);
}
