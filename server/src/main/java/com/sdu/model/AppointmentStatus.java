package com.sdu.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AppointmentStatus {
    SCHEDULED("Scheduled"),
    CANCELED("Canceled"),
    COMPLETED("Completed"),

    WAITING_FOR_CONFIRMATION("Waiting_For_Confirmation");

    private final String displayValue;
}
