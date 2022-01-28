import { HttpClient } from "@angular/common/http";
import { Veiculos } from "../client/veiculos/veiculos";

export class ComprarService{
    constructor(private http: HttpClient){
    }
    Url= 'http://localhost:8080/Clientes'

    

    getClients(){
        return this.http.get<Veiculos[]>(this.Url)
    }

}