import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './components/connect/connect.component';
import { DiseaseAddComponent } from './components/disease-add/disease-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConnectThreadComponent } from './connect-thread/connect-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    DiseaseAddComponent,
    ConnectThreadComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // ConnectModule,
    ToastNotificationsModule.forRoot({
      autoClose: true,
      duration:2000,
      position:"top-center",

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
