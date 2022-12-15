import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { IWeatherData } from 'src/app/types/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  title = false

  cityName: string = 'Baku'
  weatherData?: IWeatherData

  imgHot!: string
  imgCold!: string

  constructor(
    private api: WeatherService
  ){
    this.imgHot = '../../../assets/hot.jpg'
    this.imgCold = '../../../assets/cold.jpg'
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }

  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName = ''
  }

  private getWeatherData(cityName: string){
    this.api.getWeather(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response)
      }
    })
  }

}
