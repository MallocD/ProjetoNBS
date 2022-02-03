package com.nbs.projectnbs.repository;

import com.nbs.projectnbs.cliente.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {


}
