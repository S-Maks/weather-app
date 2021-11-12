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
    return this.http.get<any>(environment.url, {
      params: httpParams
    }).pipe(
      map(data => {
          return data?.response?.GeoObjectCollection?.featureMember?.filter((obj: any) => obj?.GeoObject?.metaDataProperty?.GeocoderMetaData?.kind === 'locality' ||
            obj?.GeoObject?.metaDataProperty?.GeocoderMetaData?.kind === 'province')
            .map((value: any) => ({
              pos: value?.GeoObject?.Point?.pos, name: value?.GeoObject?.name + ' ' + value?.GeoObject?.description
            }))
        },
      ),
      catchError(this.handleError('getCities', []))
    );
  }
}

