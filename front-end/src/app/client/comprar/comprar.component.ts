import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComprarService } from 'src/app/dev/dev.service';
import { Veiculos } from '../veiculos/veiculos';
import { VeiculosService } from '../veiculos/veiculos.service';
import { Clientes } from './clientes';


@Component({
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  // veiculos: Veiculos;
  // veiculos: Veiculos;

  // constructor(private veiculosComponent: VeiculosComponent, private activadedRoute: ActivatedRoute){}
  
  cliente: Clientes ={
    id: 0,
    name: '',
    last: '',
    birth: '',
    cpf: '',
    email: '',
    city: '',
    state:'',
    color:'',
    vehicle:'',
    payment:'',

  }
constructor(private router:Router, private service:ComprarService,private actvatedRoute:ActivatedRoute, private vehiclesService: VeiculosService){}

// veiculos: Veiculos;

// this.veiculos = this.vehiclesService.retrieveByCode(+this.actvatedRoute.snapshot.paramMap.get("code")!);

  ngOnInit(): void {}

  confirm(){
    this.service.confirmPurchase(this.cliente)
    .subscribe(data=>{
      alert("Compra efetuada com sucesso!");
      this.router.navigate([""]);
    })
  }
   
        
    
}

