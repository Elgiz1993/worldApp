import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat'


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { DetailComponent } from './components/detail/detail.component';
import { WeatherComponent } from './components/weather/weather.component';
import { DegreePipe } from './pipe/degree.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UrlPipePipe } from './pipe/url-pipe.pipe';
import { ErrorPageComponent } from './components/error-page/error-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    CountryComponent,
    CountryCardComponent,
    DetailComponent,
    WeatherComponent,
    DegreePipe,
    DropdownComponent,
    UrlPipePipe,
    ErrorPageComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HotToastModule.forRoot(),
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
