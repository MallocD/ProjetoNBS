import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { ComprarComponent } from "./comprar/comprar.component";
import { NavBarComponent } from "./cores/nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { VeiculosComponent } from "./veiculos/veiculos.component";

@NgModule({
    declarations:[
        HomeComponent,
        VeiculosComponent,
        ComprarComponent,
        NavBarComponent


    ],
    imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule
],
exports: [
    NavBarComponent
]
})
export class ClientModule{

}