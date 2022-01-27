import { Component, OnInit } from '@angular/core';
import { Clientes } from '../veiculos/cliente';
import { Veiculos } from '../veiculos/veiculos';
import { VeiculosService } from '../veiculos/veiculos.service';

@Component({
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  // veiculos: Veiculos;
  cliente: Clientes[]= [];

  // constructor(private veiculosService:VeiculosService,) { }

  ngOnInit(): void {
    
    
  }
}

