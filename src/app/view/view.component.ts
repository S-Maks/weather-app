import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
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
  weather: Map<String, PeriodForecast[]> = new Map<String, PeriodForecast[]>()

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.position?.length != 0) {
      this.weatherService.getWeather(this.position).subscribe(data => this.weather = this.transformToHashMap(data))
    }
  }

  public originalOrder = (a: any, b: any): number => {
    return 0;
  }

  public transformToHashMap(array: PeriodForecast[]) {
    const temp = new Map<String, PeriodForecast[]>();
    array.forEach((data: PeriodForecast) =>
      temp.set(data.date, addElement(temp.get(data.date) || [], data)))
    return temp;
  }
}

function addElement(array: PeriodForecast[], element: PeriodForecast) {
  array.push(element)
  return array;
}
