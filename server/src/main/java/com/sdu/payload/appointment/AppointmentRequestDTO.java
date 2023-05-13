package com.sdu.payload.appointment;


import io.swagger.annotations.ApiKeyAuthDefinition;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequestDTO {

     Long timeSlotId;
     String email;
     String name;



}
