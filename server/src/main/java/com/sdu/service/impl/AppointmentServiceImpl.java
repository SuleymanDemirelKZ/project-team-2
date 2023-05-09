package com.sdu.service.impl;


import com.sdu.model.Appointment;
import com.sdu.model.AppointmentStatus;
import com.sdu.repository.AppointmentRepository;
import com.sdu.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public Appointment getAppointmentById(Long id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    @Override
    public Page<Appointment> getAllAppointments(Pageable pageable) {
        return appointmentRepository.findAll(pageable);
    }



    @Override
    public Appointment updateAppointment(Long id, Appointment appointment) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
        if (optionalAppointment.isPresent()) {
            Appointment existingAppointment = optionalAppointment.get();
            existingAppointment.setTimeSlot(appointment.getTimeSlot());
            existingAppointment.setStatus(appointment.getStatus());
            return appointmentRepository.save(existingAppointment);
        }
        return null;
    }

    @Override
    public void cancelAppointment(Long id) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
        if (optionalAppointment.isPresent()) {
            Appointment existingAppointment = optionalAppointment.get();
            existingAppointment.setStatus(AppointmentStatus.CANCELED);
            appointmentRepository.save(existingAppointment);
        }
    }
}
