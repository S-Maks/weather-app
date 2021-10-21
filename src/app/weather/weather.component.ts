import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";

export interface City {
  pos: string
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

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 3) {
      this.isValid = true
      this.weatherService.getCities((<HTMLInputElement>event.target).value).subscribe(event => this.cities = event)
    } else {
      this.isValid = false
      this.cities = []
    }
  }

  onEnter(id: any) {
    console.log(id)
  }
}
