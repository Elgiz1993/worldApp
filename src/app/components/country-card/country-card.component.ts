import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/types/api';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  @Input()
  country!: ICountry

}
