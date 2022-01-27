import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculos } from '../veiculos/veiculos';
import { VeiculosComponent } from '../veiculos/veiculos.component';


@Component({
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  // veiculos: Veiculos;
  veiculos: Veiculos;

  constructor(private veiculosComponent: VeiculosComponent, private activadedRoute: ActivatedRoute){}

  // constructor(private veiculosService:VeiculosService,) { }

  ngOnInit(): void {
   
    this.veiculos = this.veiculosComponent.retriveByCode(+this.activadedRoute.snapshot.paramMap.get('code')!);
        
    
  }
}

