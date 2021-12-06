import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';

import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ViewComponent} from './view/view.component';
import {DatePipe} from "@angular/common";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule, NgSelectModule, FormsModule, HttpClientModule, SwiperModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
