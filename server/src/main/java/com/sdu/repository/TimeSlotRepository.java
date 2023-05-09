package com.sdu.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sdu.model.TimeSlot;

@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {
    @Query("SELECT ts FROM TimeSlot ts WHERE ts.date = ?1 AND ts.testCenter.id = ?2 AND ts NOT IN (SELECT a.timeSlot FROM Appointment a WHERE a.timeSlot.date = ?1)")
    List<TimeSlot> findAvailableTimeSlotsByDateAndTestCenterId(LocalDate date, Long testCenterId);
}
