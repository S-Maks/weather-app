import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected http: HttpClient, public datepipe: DatePipe) {
  }

  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(operation, error)
      return of(result as T)
    };
  }
}
