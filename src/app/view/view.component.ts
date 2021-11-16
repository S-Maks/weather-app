import {Component, ViewEncapsulation, OnInit, Input} from "@angular/core";
import SwiperCore, {Pagination} from "swiper";
import {WeatherService} from "../weather/service/weather.service";

SwiperCore.use([Pagination]);

export interface PeriodForecast {
  temp: number
  time: string
  date: string
}

@Component({
  selector: "app-view",
  templateUrl: "view.component.html",
  styleUrls: ["view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {
  @Input() position: string = ""
  weather: PeriodForecast[] = []
  test: Map<String, Array<PeriodForecast>> = new Map<String, Array<PeriodForecast>>()
  test2: Array<PeriodForecast> = new Array<PeriodForecast>();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.weatherService.getWeather(this.position).subscribe(data => this.weather = data)
    this.weather.forEach((data: PeriodForecast) => {
    })
  }
}
