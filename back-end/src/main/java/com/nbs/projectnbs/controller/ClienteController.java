package com.nbs.projectnbs.controller;

import com.nbs.projectnbs.cliente.Cliente;
import com.nbs.projectnbs.cliente.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping({"/test/clientes"})
public class ClienteController {

    @Autowired
    ClienteService service;

    @GetMapping
    public List<Cliente> listar(){
        return service.listar();

    }

}
