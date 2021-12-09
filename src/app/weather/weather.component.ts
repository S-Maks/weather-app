import {Component} from '@angular/core';
import {WeatherService} from "../service/weather.service";
import {DatePipe} from "@angular/common";
import {City} from "@app/models";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  isValid: boolean = false;
  cities: City[] = []
  pos: string = ''

  constructor(private weatherService: WeatherService, public datepipe: DatePipe) {
  }

  onInput(event: Event) {
    if ((<HTMLInputElement>event.target).value?.length > 3) {
      this.isValid = true
      this.weatherService.getCities((<HTMLInputElement>event.target).value).subscribe(event => this.cities = event)
    } else {
      this.isValid = false
      this.cities = []
    }
  }

  onEnter(pos: string) {
    this.pos = pos;
  }
}
