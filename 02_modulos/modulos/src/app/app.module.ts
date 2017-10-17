import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PieComponent } from './pie/pie.component';
import { HeaderComponent } from './header/header.component';
import { CabComponent } from './cabecera/cabecera.component';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
