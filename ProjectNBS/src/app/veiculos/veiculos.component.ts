import { Component, OnInit } from '@angular/core';
import { Veiculos } from './veiculos';
import { VeiculosService } from './veiculos.service';

@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  constructor(private veiculosService: VeiculosService) { }

 veiculos: Veiculos[] = []; 

  ngOnInit(): void {
    this.veiculos = [
      
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
      
    ]
  }

}
