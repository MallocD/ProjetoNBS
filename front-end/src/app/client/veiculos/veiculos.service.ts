import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculos} from "./veiculos";

@Injectable({
    providedIn: 'root'//Tornando a classe legivil para injeção de dependencia//Direto na root

})
export class VeiculosService{
    

}
/* var VEICULOS: Veiculos[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        tecnology: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: CLI',
        tecnology: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 3,
        name: 'Angular: CLI',
        tecnology: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 4,
        name: 'Angular: CLI',
        tecnology: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 5,
        name: 'Angular: CLI',
        tecnology: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    }
]; */