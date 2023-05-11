package com.sdu.payload.testcenter.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TestCenterRequestDTO {
    String address;
    String name;
    String city;

    String state;
    String zip;

}
