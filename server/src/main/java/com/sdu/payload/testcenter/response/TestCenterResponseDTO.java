package com.sdu.payload.testcenter.response;


import lombok.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class TestCenterResponseDTO {




    Long Id;
    String name;
    String address;
    String city;
}
