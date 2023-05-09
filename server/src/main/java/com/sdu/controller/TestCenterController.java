package com.sdu.controller;


import com.sdu.model.TestCenter;
import com.sdu.service.TestCenterService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/testcenters")
public class TestCenterController {
    @Autowired
    private TestCenterService testCenterService;

    @PostMapping
    public ResponseEntity<TestCenter> createTestCenter(@RequestBody TestCenter testCenter) {
        return new ResponseEntity<>(testCenterService.createTestCenter(testCenter), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestCenter> getTestCenterById(@PathVariable Long id) {
        TestCenter testCenter = testCenterService.getTestCenterById(id);
        if (testCenter != null) {
            return new ResponseEntity<>(testCenter, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<TestCenter>> getAllTestCenters(){
        List<TestCenter> testCenters = testCenterService.getAllTestCenters();
        return new ResponseEntity<>(testCenters, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TestCenter> updateTestCenter(@PathVariable Long id, @RequestBody TestCenter testCenter) {
        TestCenter updatedTestCenter = testCenterService.updateTestCenter(id, testCenter);
        if (updatedTestCenter != null) {
            return new ResponseEntity<>(updatedTestCenter, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTestCenter(@PathVariable Long id) {
        testCenterService.deleteTestCenter(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    
}
