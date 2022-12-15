import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up/sign-up.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'
import { LandingComponent } from './components/landing/landing.component';
import { CountryComponent } from './components/country/country.component';
import { DetailComponent } from './components/detail/detail.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';




const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'login', component: LoginComponent, ...canActivate(redirectToHome)},
  {path: 'sign-up', component: SignUpComponent, ...canActivate(redirectToHome)},
  {path: 'weather', component: WeatherComponent, ...canActivate(redirectToLogin)},
  {path: 'home', component: HomeComponent, ...canActivate(redirectToLogin)},
  {path: 'country', component: CountryComponent, ...canActivate(redirectToLogin),},
  {path: ':detail', component: DetailComponent, ...canActivate(redirectToLogin)},
  {path: '**', pathMatch: 'full' ,component: ErrorPageComponent, ...canActivate(redirectToLogin)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
