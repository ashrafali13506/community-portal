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
import { HeaderComponent } from './components/header/header.component';
import { ConnectBannerComponent } from './components/connect-banner/connect-banner.component';
import { ConnectHeaderComponent } from './components/connect-header/connect-header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSelectModule } from 'ngx-select-ex';
import { FooterComponent } from './components/footer/footer.component';
import { ConnectMainComponent } from './components/connect-main/connect-main.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    DiseaseAddComponent,
    ConnectThreadComponent,
    HeaderComponent,
    ConnectBannerComponent,
    ConnectHeaderComponent,
    HomePageComponent,
    FooterComponent,
    ConnectMainComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,NgxSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    // ConnectModule,
    ToastNotificationsModule.forRoot({
      autoClose: true,
      duration:2000,
      position:"top-center",

    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
