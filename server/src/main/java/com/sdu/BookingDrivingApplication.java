package com.sdu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BookingDrivingApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookingDrivingApplication.class, args);
    }

}
