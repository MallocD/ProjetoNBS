import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Clientes } from "src/app/client/comprar/clientes";
import { ComprarService } from "../dev.service";

@Component({
  templateUrl: './edit-client.component.html',
  styleUrls: [ './edit.component.css'

  ]
})
export class EditClientComponent implements OnInit{

  cliente: Clientes = new Clientes();

  constructor(private router: Router, private service:ComprarService ) {
  }

  ngOnInit(): void {
    this.Editar();
      
  }

  Editar(){
    let id=localStorage.getItem('id')
    this.service.getClientId(+id!)
    .subscribe(data=>{
      this.cliente=data;
    })
  }
  Att(cliente:Clientes){
    this.service.uptadeClient(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Dados atualizados com sucesso");
    })
  }

}