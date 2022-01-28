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

}