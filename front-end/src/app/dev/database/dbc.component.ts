import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Clientes } from "src/app/client/comprar/clientes";
import { ComprarService } from "../dev.service";

@Component({
    templateUrl: './dbc.component.html',
    styleUrls: ['./dbc.component.css']
})
export class DbcComponent implements OnInit{

    clientes: Clientes[];

    constructor(private service:ComprarService, private router:Router){}
   
    ngOnInit(): void {
        this.service.getClients()
        .subscribe(data=>{
            this.clientes = data;
        })
        
    }
    Editar(cliente:Clientes):void{
        localStorage.setItem("id",cliente.id.toString())
        this.router.navigate(["$/dev$/edit"])//Arrumar

    }
    Delete(cliente:Clientes){
        this.service.deleteCliente(cliente)
        .subscribe(data=>{
            this.clientes=this.clientes.filter(c=>c!==cliente);
            alert("O Cliente foi excluído do Banco do dados")
        })
    }
    

}