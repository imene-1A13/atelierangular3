import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataBindingComponent } from './data-binding/data-binding.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ConvertisseurComponentComponent } from './convertisseur-component/convertisseur-component.component';
import { ToEuroConvertComponentComponent } from './convert-to-euro/to-euro-convert-component.component';
import { ActorsComponentComponent } from './actors-component/actors-component.component';
import { ActorComponentComponent } from './actor-component/actor-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
   
    HeaderComponent,
  
    ConvertisseurComponentComponent,
    ToEuroConvertComponentComponent,
    ActorsComponentComponent,
    ActorComponentComponent,
    
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
