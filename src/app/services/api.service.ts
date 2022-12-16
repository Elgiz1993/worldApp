import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICountry } from '../types/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://restcountries.com/v2'

  constructor( private http: HttpClient  ) { }

    getAllCountries():Observable<ICountry[]>{
      return this.http.get<ICountry[]>(`${this.api}/all`)
    }

    getCountryByName(name: string){
      return this.http
        .get<ICountry[]>(`${this.api}/name/${name}`)
        .pipe(map(([res]) => res))
    }

    getCountriesByCodes(codes: string[]){
      return this.http.get<ICountry[]>(`${this.api}/alpha?codes=${codes.join(',')}`)
    }

}
