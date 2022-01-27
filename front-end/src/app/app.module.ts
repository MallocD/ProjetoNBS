import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './cores/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ComprarComponent } from './comprar/comprar.component';
import { FormsModule } from '@angular/forms';
import { AudiComponents } from './veiculos_info/audi/audia8.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VeiculosComponent,
    NavBarComponent,
    ComprarComponent,
    AudiComponents
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
