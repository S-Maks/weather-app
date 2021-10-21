import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export interface City {
  id: number
  name: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  isValid: boolean = false;
  cities: City[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 3) {
      this.isValid = true
      getCities((<HTMLInputElement>event.target).value, this.http).subscribe(event => this.cities = event)
    } else {
      this.isValid = false
      this.cities = []
    }
  }
}

function getCities(name: string, http: HttpClient): Observable<City[]> {
  const httpParams = new HttpParams()
    .set('apikey', environment.geocodeYandexApiKey)
    .set('geocode', name)
    .set('results', environment.resultCitiesCount.toString())
    .set('format', 'json')
    .set('kind', 'locality')
  return http.get<any>(environment.url, {
    params: httpParams
  }).pipe(
    map(
      data => {
        return data?.response?.GeoObjectCollection?.featureMember?.map((value: any) => ({
          id: 1,
          name: value['GeoObject']['name']
        }))
      }
    )
  )
}
