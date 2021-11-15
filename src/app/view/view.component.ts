import {Component, ViewEncapsulation, ViewChild, OnInit} from "@angular/core";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: "app-swiper-example",
  templateUrl: "view.component.html",
  styleUrls: ["view.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
