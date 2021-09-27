import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  isValid: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    this.isValid = (<HTMLInputElement>event.target).value.length > 3
  }

  selectedCity: number = 0;

  cities = [];
}
