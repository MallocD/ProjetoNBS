import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AudiComponents } from "./audi/audia8.component";
import { HondaComponents } from "./honda/honda.component";
import { TeslaComponents } from "./tesla/tesla.component";
import { ToytaComponents } from "./toyota/toyota.component";
import { VolvoComponents } from "./volvo/volvo.component";

@NgModule({
    declarations:[
        AudiComponents,
        ToytaComponents,
        TeslaComponents,
        HondaComponents,
        VolvoComponents
    ],
    imports:[
        CommonModule,
        FormsModule,
        AppRoutingModule,
    ]
})
export class VeiculosInfoModule{

}