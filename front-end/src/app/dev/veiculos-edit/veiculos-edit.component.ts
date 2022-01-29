import { Component, OnInit } from "@angular/core";
import { Veiculos } from "src/app/client/veiculos/veiculos";
import { VeiculosService } from "src/app/client/veiculos/veiculos.service";

@Component({
  templateUrl: './veiculos-edit.component.html',
  styleUrls: ['./veiculos-edit.component.css']
})
export class VeiculosEditComponent implements OnInit {

 filteredVehicle: Veiculos [] = [];
 
 _vehicles: Veiculos [] = [];

 constructor(private vehicleService: VeiculosService){

 }

 ngOnInit(): void {
     this._vehicles = this.vehicleService.retrieveAll();
     this.filteredVehicle = this._vehicles;
 }
     
}