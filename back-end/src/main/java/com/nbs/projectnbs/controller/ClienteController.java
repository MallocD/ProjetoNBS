package com.nbs.projectnbs.controller;

import com.nbs.projectnbs.cliente.Cliente;
import com.nbs.projectnbs.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/clientes"})
public class ClienteController {

    @Autowired
    ClienteRepository repository;

    @GetMapping
    public List<Cliente> findAllClients(){
        return repository.findAll();
    }

    @PostMapping
    public Cliente createClients(@RequestBody Cliente c){
       return repository.save(c);
    }

    @GetMapping(path = {"/{id}"})
    public Cliente getClientById(@PathVariable (value = "id") long clientId){
        return this.repository.findById(clientId).orElseThrow(RuntimeException::new);
    }

    @PutMapping(path={"/{id}"})
    public Cliente updateClient(@RequestBody Cliente c,@PathVariable("id") long clientId){
       Cliente existingClient = this.repository.findById(clientId).orElseThrow(RuntimeException::new);
        existingClient.setName(c.getName());
        existingClient.setLast(c.getLast());
        existingClient.setBirth(c.getBirth());
        existingClient.setCity(c.getCity());
        existingClient.setState(c.getState());
        existingClient.setNumber(c.getNumber());
        existingClient.setEmail(c.getEmail());
        existingClient.setCPF(c.getCPF());
        return this.repository.save(existingClient);
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<Cliente> deleteClient(@PathVariable("id") long clientId){
        Cliente existingClient = this.repository.findById(clientId).orElseThrow(RuntimeException::new);
        this.repository.delete(existingClient);
        return ResponseEntity.ok().build();

    }

}
