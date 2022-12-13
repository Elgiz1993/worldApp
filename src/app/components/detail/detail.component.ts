import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, of, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Currency, ICountry, Language } from 'src/app/types/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  country$!: Observable<ICountry>
  borderCountries$!: Observable<ICountry[]>

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.country$ = this.apiService.getCountryByName(params.detail).pipe(
        tap(res => console.log(res)),
        mergeMap((res) => {
          this.borderCountries$ = this.apiService.getCountriesByCodes(res.borders);
          return of(res)
        })
      )
    })
  }

  displayCurrencies(currencies: Currency[]){
    return currencies.map(currency => currency.name).join(',')
  }

  displayLanguages(languages: Language[]){
    return languages.map(language => language.name).join(',')
  }
}
