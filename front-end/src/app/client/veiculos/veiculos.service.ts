import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Veiculos} from "./veiculos";

@Injectable({
    providedIn: 'root'//Tornando a classe legivil para injeção de dependencia//Direto na root

})
export class VeiculosService{

    retrieveAll(): Veiculos[]{
        return VEICULOS;
    }

    retrieveByCode(code:number): Veiculos{
        return VEICULOS.find((veiculosIterator: Veiculos)=>veiculosIterator.code ===code)!;
    }
    save(veiculos: Veiculos): void{
        if(veiculos.code){
            const index = VEICULOS.findIndex((veiculosIte:Veiculos)=>veiculosIte.code===veiculos.code)
            VEICULOS[index] = veiculos;
        }
    }
    

}
 var VEICULOS: Veiculos[] = [
   
    {
        code: 6,
        name: 'Tesla Model S',
        date: "Junho de 2012",
        price: "1.289.990,00",
        imageUrl: '/assets/images/teslas.jpg',
        color: ''
    },
    {
        code: 67,
        name: 'Toyota Mirai',
        date: 'Dezembro de 2019',
        price: "420.000,00",
        imageUrl: '/assets/images/thumbnail.jpg',
        color: ''
    },
    {
      code: 673,
      name: 'Audi A8',
      date: "Dezembro de 2021",
      price: "379.990,100",
      imageUrl: '/assets/images/Audi.jpg',
      color: ''
  },
  {
      code: 6731,
      name: 'Volvo XC60 Polestar',
      date: 'Maio de 2021',
      price: "424.950,00",
      imageUrl: '/assets/images/polestar.jpg',
      color: ''
  },
  {
      code: 67310,
      name: 'Honda Clarity Fuel Cell',
      date: 'Novembro de 2016',
      price: "188.365,83",
      imageUrl: '/assets/images/clarity.jpg',
      color: ''
  }
]; 