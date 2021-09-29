import {Component, OnInit} from '@angular/core';

export interface City {
  id: number
  name: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  isValid: boolean = false;
  cities: City[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 3) {
      this.isValid = true
      this.cities = getCities((<HTMLInputElement>event.target).value)
    } else {
      this.isValid = false
      this.cities = []
    }
  }

}

function getCities(name: string) {

  return [
    {id: 1, name: 'Москва'},
    {id: 2, name: 'Питер'},
    {id: 3, name: 'Воронеж'}
  ]
}
