// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from 'src/app/services/weather.service';
// import { IWeatherData } from 'src/app/types/weather';

// @Component({
//   selector: 'app-weather-widget',
//   templateUrl: './weather-widget.component.html',
//   styleUrls: ['./weather-widget.component.scss']
// })
// export class WeatherWidgetComponent implements OnInit {

//   cityName: string = 'Baku'
//   weatherData?: IWeatherData
 

//   constructor( private api: WeatherService) { }

//   ngOnInit(): void {
//     this.getWeatherData(this.cityName)
//   }


//   private getWeatherData(cityName: string){
//     this.api.getWeather(cityName)
//     .subscribe({
//       next: (response) => {
//         this.weatherData = response
//         console.log(response)
//       }
//     })
//   }
// }
