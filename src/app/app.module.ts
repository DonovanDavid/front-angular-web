import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCiudadComponent } from './components/add-ciudad/add-ciudad.component';
import { DetailsCiudadComponent } from './components/details-ciudad/details-ciudad.component';
import { ListCiudadComponent } from './components/list-ciudad/list-ciudad.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddCiudadComponent,
    DetailsCiudadComponent,
    ListCiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
