import { Component, OnInit } from '@angular/core';
import { Veiculos } from './veiculos';

@Component({
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  // // constructor(private veiculosService: VeiculosService) { }

 veiculos: Veiculos[] = []; 

  ngOnInit(): void {
    
    this.veiculos = [
      
        {
          id: 1,
          name: 'Tesla Model S',
          date: "Junho de 2012",
          price: "1.289.990,00",
          imageUrl: '/assets/images/teslas.jpg',
      },
      {
          id: 2,
          name: 'Toyota Mirai',
          date: 'Dezembro de 2019',
          price: "420.000,00",
          imageUrl: '/assets/images/thumbnail.jpg',
      },
      {
        id: 3,
        name: 'Audi A8',
        date: "Dezembro de 2021",
        price: "379.990,100",
        imageUrl: '/assets/images/Audi.jpg',
    },
    {
        id: 4,
        name: 'Volvo XC60 Polestar',
        date: 'Maio de 2021',
        price: "424.950,00",
        imageUrl: '/assets/images/polestar.jpg',
    },
    {
        id: 5,
        name: 'Honda Clarity Fuel Cell',
        date: 'Novembro de 2016',
        price: "188.365,83",
        imageUrl: '/assets/images/clarity.jpg',
    }
    
      
    ]
  }

}
