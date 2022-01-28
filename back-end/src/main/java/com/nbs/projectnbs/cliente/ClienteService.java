package com.nbs.projectnbs.cliente;

import java.util.List;

public interface ClienteService {

    List<Cliente> listar();
    Cliente listarId(int id);
    Cliente add(Cliente c);
    Cliente edit(Cliente c);
    Cliente delete(int id);




}
