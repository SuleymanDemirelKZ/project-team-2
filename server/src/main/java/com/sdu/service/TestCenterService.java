package com.sdu.service;


import com.sdu.model.TestCenter;
import com.sdu.payload.testcenter.request.TestCenterRequestDTO;
import com.sdu.payload.testcenter.response.TestCenterResponseDTO;

import java.util.List;

public interface TestCenterService {
    TestCenter createTestCenter(TestCenterRequestDTO testCenterRequestDTO);
    TestCenter getTestCenterById(Long id);
    List<TestCenterResponseDTO> getAllTestCenters();
    TestCenter updateTestCenter(Long id, TestCenter testCenter);
    void deleteTestCenter(Long id);
}
