import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { RoundedImagesComponent } from './rounded-images/rounded-images.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FooterComponent } from './footer/footer.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MapaComponent } from './mapa/mapa.component';
import { InformacionPequenaComponent } from './informacion-pequena/informacion-pequena.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    RoundedImagesComponent,
    DocumentosComponent,
    ContactosComponent,
    FooterComponent,
    InformacionComponent,
    MapaComponent,
    InformacionPequenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
