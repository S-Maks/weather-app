import {Component, Input, OnChanges, Type, ViewEncapsulation} from "@angular/core";
import SwiperCore, {Pagination} from "swiper";
import {WeatherService} from "../service/weather.service";
import {PeriodForecast} from "@app/models/period-forecast.interface";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-view",
  templateUrl: "view.component.html",
  styleUrls: ["view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnChanges {

  @Input() position: string = ""
  weather: Map<String, PeriodForecast[]> = new Map<String, PeriodForecast[]>()

  constructor(private weatherService: WeatherService) {
  }

  ngOnChanges() {
    if (this.position?.length != 0) {
      this.weatherService.getWeather(this.position).subscribe(data => this.weather = this.transformToHashMap(data))
    }
  }

  originalOrder = (a: any, b: any): number => {
    return 0;
  }

  private transformToHashMap(array: PeriodForecast[]): Map<String, PeriodForecast[]> {
    const temp = new Map<String, PeriodForecast[]>();
    array.forEach((data: PeriodForecast) =>
      temp.set(data.date, ViewComponent.addElement(temp.get(data.date) || [], data)))
    return temp;
  }

  private static addElement(array: PeriodForecast[], element: PeriodForecast): PeriodForecast[] {
    array.push(element)
    return array;
  }
}
