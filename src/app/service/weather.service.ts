import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "@environments/environment";
import {catchError, map} from "rxjs/operators";
import {BaseService} from "./base.service";
import {City, PeriodForecast} from "@app/models";

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
    return this.http.get<any>(environment.url, {
      params: httpParams
    }).pipe(
      map(data => {
          return data?.response?.GeoObjectCollection?.featureMember?.filter((obj: any) => obj?.GeoObject?.metaDataProperty?.GeocoderMetaData?.kind === 'locality' ||
            obj?.GeoObject?.metaDataProperty?.GeocoderMetaData?.kind === 'province')
            .map((value: any) => ({
              pos: value?.GeoObject?.Point?.pos,
              lon: value?.GeoObject?.Point?.pos?.split(' ')[0],
              lat: value?.GeoObject?.Point?.pos?.split(' ')[1],
              name: `${value?.GeoObject?.name}, ${value?.GeoObject?.description}`
            }))
        },
      ),
      catchError(this.handleError('getCities', []))
    );
  }

  getWeather(name: String): Observable<PeriodForecast[]> {
    const httpParams = new HttpParams()
      .set('lat', name.split(' ')[1])
      .set('lon', name.split(' ')[0])
      .set('appid', environment.openWeatherMapApiKey)
      .set('units', 'metric')
    return this.http.get<any>(environment.openWeatherMapURL, {params: httpParams})
      .pipe(
        map(data => {
          return data?.list?.map((value: any) => ({
            temp: Math.round(value?.main?.temp),
            time: this.datepipe.transform(value?.dt_txt, 'HH:mm'),
            date: this.datepipe.transform(value?.dt_txt, 'EEEE',),
            icon: value?.weather[0]?.icon
          }))
        }),
        catchError(this.handleError('getWeather', []))
      )
  }
}

