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
import { DbcComponent } from './dev/database/dbc.component';
import { EditClientComponent } from './dev/client-edit/edit-client.component';
import { EditingVehicleComponent } from './dev/veiculos-edit/editing-vehicle.component';
import { ErrorComponent } from './error404/error.component';
import { UserComponent } from './dev/user-dev/user.component';

const routes: Routes = [
  {path: '$', component: HomeComponent},
  {path: '$/dev$', component: HomeDevComponent},
  {path: '$/login$', component: UserComponent},
  {path: '$/dev$/edit', component:EditClientComponent},
  {path: '$/dev$/veiculos', component: VeiculosEditComponent},
  {path: '$/dev$/veiculos/edit/:code', component: EditingVehicleComponent},
  {path: '$/dev$/dbc', component: DevCompononent},
  {path: '$/dev$/dbc/clientes', component: DbcComponent},
  {path: '$/veiculos', component: VeiculosComponent },
  {path: '$/veiculos/comprar' ,component: ComprarComponent },
  {path: '$/veiculos/comprar/:code' ,component: ComprarComponent },
  {path: '$/veiculos/673', component: AudiComponents},
  {path:'$/veiculos/6', component: TeslaComponents },
  {path:'$/veiculos/67310', component: HondaComponents },
  {path:'$/veiculos/67', component: ToytaComponents },
  {path:'$/veiculos/6731', component: VolvoComponents },
  {path: '**', component: ErrorComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
