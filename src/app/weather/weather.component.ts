import {Component} from '@angular/core';
import {WeatherService} from "@app/service";
import {City} from "@app/models";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  isValid: boolean = true;
  cities: City[] = []
  pos: string = ''
  search: string = ''

  constructor(private weatherService: WeatherService) {
  }

  onInput($event: { term: string; items: any[] }) {
    if ($event.term?.length > 3) {
      this.isValid = true
      this.weatherService.getCities($event.term).subscribe(event => this.cities = event)
    } else {
      this.isValid = false
      this.cities = []
    }
  }
}
