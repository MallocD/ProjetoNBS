package com.nbs.projectnbs.repository;

import com.nbs.projectnbs.cliente.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ClienteRepository extends Repository<Cliente, Integer> {

    List<Cliente> findAll();
//    Cliente findOne(int id);
    Cliente save(Cliente c);
    void delete(Cliente c);


}
