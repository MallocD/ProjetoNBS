import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Clientes } from "../client/comprar/clientes";

@Injectable({
    providedIn: 'root'
})

export class ComprarService{

    constructor(private http: HttpClient){
    }
    Url= 'test/clientes'

    

    getClients(){
        return this.http.get<Clientes[]>(this.Url)
    }
    confirmPurchase(clientes:Clientes){
        return this.http.post<Clientes>(this.Url,clientes);
    }
    getClientId(id:number){
        return this.http.get<Clientes>(this.Url+"/"+id)
    }
    uptadeClient(cliente:Clientes){
        return this.http.put<Clientes>(this.Url+"/"+cliente.id,cliente)
    }

}