import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculos} from "./veiculos";

@Injectable({
    providedIn: 'root'//Tornando a classe legivil para injeção de dependencia//Direto na root

})
export class VeiculosService{
    
    // private courseUrl: string = 'http://localhost:3100/api/courses'

    // constructor(private httpClient: HttpClient){}

    // retrieveAll(): Observable<Course[]>{
    //     return this.httpClient.get<Course[]>(this.courseUrl);
    // }

    // retrieveById(id: number): Observable<Course>{
    //     return this.httpClient.get<Course>(`${this.courseUrl}/${id}`)
    // }

    // save(course: Course): Observable<Course> {
    //     if(course.id){
    //         return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`,course)
    //     } else {
    //         return this.httpClient.post<Course>(`${this.courseUrl}`, course)
    //     }
    // }

    // deleteById(id:number): Observable<any>{
    //     return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)
    // }


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