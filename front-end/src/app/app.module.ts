import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientModule } from './client/client.module';
import { DevModule } from './dev/dev.module';
import { VeiculosComponent } from './client/veiculos/veiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ClientModule,
    DevModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
