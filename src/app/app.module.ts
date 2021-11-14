import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WeatherComponent} from './weather/weather.component';

import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ViewComponent} from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule, NgSelectModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
