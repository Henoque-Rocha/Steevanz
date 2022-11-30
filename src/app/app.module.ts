import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { Checkout1Component } from './components/checkout1/checkout1.component';
import { Checkout2Component } from './components/checkout2/checkout2.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Checkout3Component } from './components/checkout3/checkout3.component';
import { CompleteComponent } from './components/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Checkout1Component,
    Checkout2Component,
    Checkout3Component,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
