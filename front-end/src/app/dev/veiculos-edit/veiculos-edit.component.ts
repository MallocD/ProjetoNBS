import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculos } from 'src/app/client/veiculos/veiculos';
import { VeiculosComponent } from 'src/app/client/veiculos/veiculos.component';



@Component({
  templateUrl: './veiculos-edit.component.html',
  styleUrls: ['./veiculos-edit.component.css']
})
export class VeiculosEditComponent  {
  
  veiculos:Veiculos[]= [];

}