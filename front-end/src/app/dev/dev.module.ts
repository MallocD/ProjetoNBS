import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { VeiculosComponent } from "../client/veiculos/veiculos.component";
import { EditClientComponent } from "./client-edit/edit-client.component";
import { DbcComponent } from "./database/dbc.component";
import { DevCompononent } from "./dev.component";
import { HomeDevComponent } from "./home/home-dev.component";
import { NavBarDevComponent } from "./nav-bar/nav-bar.component";
import { UserComponent } from "./user-dev/user.component";
import { EditingVehicleComponent } from "./veiculos-edit/editing-vehicle.component";
import {  VeiculosEditComponent } from "./veiculos-edit/veiculos-edit.component";
import { NgxMaskModule} from 'ngx-mask'


@NgModule({
    declarations:[
        NavBarDevComponent,
        HomeDevComponent,
        VeiculosEditComponent,
        DevCompononent,
        DbcComponent,
        EditClientComponent,
        EditingVehicleComponent,
        UserComponent,
        
    ],
    imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forChild()
    
  
],
exports: [
    NavBarDevComponent
]
})
export class DevModule{

}