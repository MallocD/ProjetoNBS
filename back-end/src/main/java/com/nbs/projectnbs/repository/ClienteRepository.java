package com.nbs.projectnbs.repository;

import com.nbs.projectnbs.cliente.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {


}
