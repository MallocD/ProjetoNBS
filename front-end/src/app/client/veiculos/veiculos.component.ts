import { Component, Injectable, OnInit } from '@angular/core';
import { Veiculos } from './veiculos';
import { VeiculosService } from './veiculos.service';

@Injectable({
  providedIn: 'root'//Tornando a classe legivil para injeção de dependencia//Direto na root

})
@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

 filteredVehicle: Veiculos [] = [];
 
 _vehicles: Veiculos [] = [];

 constructor(private vehicleService: VeiculosService){

 }

 ngOnInit(): void {
     this._vehicles = this.vehicleService.retrieveAll();
     this.filteredVehicle = this._vehicles;
 }
     
}


      
    






