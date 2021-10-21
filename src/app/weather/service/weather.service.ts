import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {City} from "../weather.component";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseService {

  getCities(name: string): Observable<City[]> {
    const httpParams = new HttpParams()
      .set('apikey', environment.geocodeYandexApiKey)
      .set('geocode', name)
      .set('results', environment.resultCitiesCount.toString())
      .set('format', environment.format)
      .set('kind', environment.kind)
    return this.http.get<any>(environment.url, {
      params: httpParams
    }).pipe(
      map(data => {
          return data?.response?.GeoObjectCollection?.featureMember?.map((value: any) => ({
            pos: value?.Point?.pos, name: value?.GeoObject?.name
          }))
        },
      ),
      catchError(this.handleError('getCities', []))
    );
  }
}

