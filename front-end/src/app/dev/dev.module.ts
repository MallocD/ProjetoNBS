import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { VeiculosComponent } from "../client/veiculos/veiculos.component";
import { DbcComponent } from "./database/dbc.component";
import { DevCompononent } from "./dev.component";
import { HomeDevComponent } from "./home/home-dev.component";
import { NavBarDevComponent } from "./nav-bar/nav-bar.component";
import {  VeiculosEditComponent } from "./veiculos-edit/veiculos-edit.component";


@NgModule({
    declarations:[
        NavBarDevComponent,
        HomeDevComponent,
        VeiculosEditComponent,
        DevCompononent,
        DbcComponent
    ],
    imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule
],
exports: [
    NavBarDevComponent
]
})
export class DevModule{

}