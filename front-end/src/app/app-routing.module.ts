import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './client/comprar/comprar.component';
import { HomeDevComponent } from './dev/home/home-dev.component';
import { AudiComponents } from './client/veiculos-info/audi/audia8.component';
import { HondaComponents } from './client/veiculos-info/honda/honda.component';
import { TeslaComponents } from './client/veiculos-info/tesla/tesla.component';
import { ToytaComponents } from './client/veiculos-info/toyota/toyota.component';
import { VolvoComponents } from './client/veiculos-info/volvo/volvo.component';
import { HomeComponent } from './client/home/home.component';
import { VeiculosComponent } from './client/veiculos/veiculos.component';
import { VeiculosEditComponent } from './dev/veiculos-edit/veiculos-edit.component';
import { DevCompononent } from './dev/dev.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dev$', component: HomeDevComponent},
  {path: 'dev$/veiculos', component: VeiculosEditComponent},
  {path: 'dev$/dbc', component: DevCompononent},
  {path: 'veiculos', component: VeiculosComponent },
  {path: 'veiculos/comprar' ,component: ComprarComponent },
  {path: 'veiculos/comprar/:code' ,component: ComprarComponent },
  {path: 'veiculos/673', component: AudiComponents},
  {path:'veiculos/6', component: TeslaComponents },
  {path:'veiculos/67310', component: HondaComponents },
  {path:'veiculos/67', component: ToytaComponents },
  {path:'veiculos/6731', component: VolvoComponents }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
