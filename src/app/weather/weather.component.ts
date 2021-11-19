import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {DatePipe} from "@angular/common";

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
  pos: string = ''

  constructor(private weatherService: WeatherService, public datepipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
      if ((<HTMLInputElement>event.target).value?.length > 3) {
        console.log('yes')
        this.isValid = true
        this.weatherService.getCities((<HTMLInputElement>event.target).value).subscribe(event => this.cities = event)
      } else {
        console.log('no')
        this.isValid = false
        this.cities = []
      }
  }

  onEnter(pos: string) {
    this.pos = pos;
  }
}
