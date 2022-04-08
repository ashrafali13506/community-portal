import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './components/connect/connect.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
