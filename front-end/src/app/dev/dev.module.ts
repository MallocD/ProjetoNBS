import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { HomeDevComponent } from "./home/home-dev.component";
import { NavBarDevComponent } from "./nav-bar/nav-bar.component";


@NgModule({
    declarations:[
        NavBarDevComponent,
        HomeDevComponent
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