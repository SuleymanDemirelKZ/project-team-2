package com.sdu.service;

import com.sdu.model.Appointment;
import com.sdu.payload.appointment.AppointmentRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



public interface AppointmentService {
    Appointment createAppointment(AppointmentRequestDTO appointmentRequestDTO);
    Appointment getAppointmentById(Long id);
    Page<Appointment> getAllAppointments(Pageable pageable);
    Appointment updateAppointment(Long id, Appointment appointment);
    void cancelAppointment(Long id);
//    todo : appointment find by email
//    todo: findByTestCenterId
}
