package com.med.jalda.service.impl;

import com.example.booking.model.Appointment;
import com.example.booking.model.AppointmentStatus;
import com.example.booking.repository.AppointmentRepository;
import com.example.booking.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }

    @Override
    public List<Appointment> getAppointmentsByTestCenterId(Long testCenterId) {
        return appointmentRepository.findByTestCenterId(testCenterId);
    }

    @Override
    public Appointment updateAppointment(Long id, Appointment appointment) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);
        if (optionalAppointment.isPresent()) {
            Appointment existingAppointment = optionalAppointment.get();
            existingAppointment.setDateTime(appointment.getDateTime());
            existingAppointment.setUser(appointment.getUser());
            existingAppointment.setTestCenter(appointment.getTestCenter());
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
