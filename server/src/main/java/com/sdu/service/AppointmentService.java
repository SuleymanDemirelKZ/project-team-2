package com.sdu.service;

import com.sdu.model.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface AppointmentService {
    Appointment createAppointment(Appointment appointment);
    Appointment getAppointmentById(Long id);
    Page<Appointment> getAllAppointments(Pageable pageable);
    List<Appointment> getAppointmentsByUserId(Long userId);
    List<Appointment> getAppointmentsByTestCenterId(Long testCenterId);
    Appointment updateAppointment(Long id, Appointment appointment);
    void cancelAppointment(Long id);
}
