import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientModule } from './client/client.module';
import { DevModule } from './dev/dev.module';
import { VeiculosComponent } from './client/veiculos/veiculos.component';
import { ComprarService } from './dev/dev.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule} from 'ngx-mask'

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
    DevModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
    
  ],
  providers: [ComprarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
