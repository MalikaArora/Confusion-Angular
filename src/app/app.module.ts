//root module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';

//decorator takes metadata (decl etc.)
@NgModule({
  declarations: [ //view classes in the form of components, directives and pipes
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
