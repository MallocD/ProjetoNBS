import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { ComprarComponent } from "./comprar/comprar.component";
import { NavBarComponent } from "./cores/nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { VeiculosInfoModule } from "./veiculos-info/veiculos-info.module";
import { NgxMaskModule} from 'ngx-mask'

@NgModule({
    declarations:[
        HomeComponent,
        ComprarComponent,
        NavBarComponent


    ],
    imports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
    VeiculosInfoModule,
    NgxMaskModule.forChild()

],
exports: [
    NavBarComponent,
    
]
})
export class ClientModule{

}