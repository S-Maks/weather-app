import {Component, ViewEncapsulation, OnInit, Input} from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

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

  constructor() { }

  ngOnInit(): void {
  }

}
