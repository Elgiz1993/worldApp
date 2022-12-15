import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeatherData } from '../types/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'
  weatherKey = `ab0130596e5b6630143af270a3d61048`

  constructor(
    private http: HttpClient
  ) { }

  getWeather(name: string):Observable<IWeatherData>{
    return this.http.get<IWeatherData>(`${this.weatherUrl}?q=${name}&appid=${this.weatherKey}`)
  }
}
