package com.nbs.projectnbs.cliente;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name= "clientes")
public class Cliente {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String last;

    @Column(nullable = false, unique = true)
    private String CPF;

    @Column(nullable = false)
    private String birth;

    @Column
    private String email;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String vehicle;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String payment;

    @Column(nullable = false)
    private String number;



}
