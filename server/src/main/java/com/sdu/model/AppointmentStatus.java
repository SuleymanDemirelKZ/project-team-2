package com.sdu.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AppointmentStatus {
    SCHEDULED("Scheduled"),
    CANCELED("Canceled"),
    COMPLETED("Completed");

    private final String displayValue;
}
