import { Component, OnInit } from '@angular/core';
import { Veiculos } from '../veiculos/veiculos';
import { VeiculosService } from '../veiculos/veiculos.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  veiculos: Veiculos;

  constructor(private veiculosService:VeiculosService) { }

  ngOnInit(): void {
  }

}
