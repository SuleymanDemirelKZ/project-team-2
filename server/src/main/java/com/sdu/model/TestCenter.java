package com.sdu.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.*;


@Entity
@Table(name = "test_centers")

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class TestCenter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String city;

    @OneToMany(mappedBy = "testCenter", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<TestCenterTimeSlot> timeSlots;
}
