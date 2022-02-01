package com.nbs.projectnbs.controller;

import com.nbs.projectnbs.cliente.Cliente;
import com.nbs.projectnbs.cliente.ClienteService;
import com.nbs.projectnbs.service.ClienteServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/test/clientes"})
public class ClienteController {

    @Autowired
    ClienteServiceImp service;

    @GetMapping
    public List<Cliente> listar(){
        return service.listar();

    }
    @PostMapping
    public Cliente adicionar(@RequestBody Cliente c){
        return service.add(c);
    }
    @GetMapping(path={"/{id}"})
    public Cliente listarId(@PathVariable("id") int id){
        return service.listarId(id);
    }
    @PutMapping(path={"/{id}"})
    public Cliente editar(@RequestBody Cliente c,@PathVariable("id") int id){
        c.setId(id);
        return service.edit(c);
    }
    @DeleteMapping(path = {"/{id}"})
    public Cliente delete (@PathVariable("id") int id){
        return service.delete(id);
    }

}
