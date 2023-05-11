package com.sdu.repository;

import java.time.LocalDate;
import java.util.List;

import com.sdu.model.TestCenterTimeSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface TestCenterTimeSlotRepository extends JpaRepository<TestCenterTimeSlot, Long> {
    @Query("SELECT ts FROM TestCenterTimeSlot ts WHERE ts.date = ?1 AND ts.testCenter.id = ?2 AND ts NOT IN (SELECT a.timeSlot FROM Appointment a WHERE a.timeSlot.date = ?1)")
    List<TestCenterTimeSlot> findAvailableTimeSlotsByDateAndTestCenterId(LocalDate date, Long testCenterId);
}
