import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './comprar/comprar.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'veiculos', component: VeiculosComponent },
  {path: 'veiculos/comprar' ,component: ComprarComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }