import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculos } from 'src/app/client/veiculos/veiculos';
import { VeiculosService } from 'src/app/client/veiculos/veiculos.service';



@Component({
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingVehicleComponent  {

constructor(private actvatedRoute:ActivatedRoute, private vehiclesService: VeiculosService){

}

veiculos: Veiculos;

ngOnInit(): void {
  this.veiculos = this.vehiclesService.retrieveByCode(+this.actvatedRoute.snapshot.paramMap.get("code")!);}

  save(): void{
    this.vehiclesService.save(this.veiculos)
    alert("Dados atualizados com sucesso");
  }


}