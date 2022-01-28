package com.nbs.projectnbs.service;

import com.nbs.projectnbs.cliente.Cliente;
import com.nbs.projectnbs.cliente.ClienteService;
import com.nbs.projectnbs.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClienteServiceImp implements ClienteService {
    @Autowired
    private ClienteRepository repository;

    @Override
    public List<Cliente> listar() {
        return repository.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        return repository.findById(id);
    }

    @Override
    public Cliente add(Cliente c) {
        return repository.save(c);
    }

    @Override
    public Cliente edit(Cliente c) {
        return repository.save(c);
    }

    @Override
    public Cliente delete(int id) {
        Cliente c =repository.findById(id);
        if(c!=null){
            repository.delete(c);
        }
        return c;
    }
}
