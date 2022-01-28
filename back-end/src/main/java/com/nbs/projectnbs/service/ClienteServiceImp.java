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
        throw new UnsupportedOperationException("Not suported yet");
    }

    @Override
    public Cliente add(Cliente c) {
        throw new UnsupportedOperationException("Not suported yet");
    }

    @Override
    public Cliente edit(Cliente c) {
        throw new UnsupportedOperationException("Not suported yet");
    }

    @Override
    public Cliente delete(int id) {
        throw new UnsupportedOperationException("Not suported yet");
    }
}
