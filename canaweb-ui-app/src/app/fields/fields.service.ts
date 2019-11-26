import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Field } from '../model/field';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  private serviceURL = 'api/fields';

  constructor(
    private http: HttpClient) { }

  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.serviceURL);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    private log(message: string) {
      console.log(`FieldsService: ${message}`);
    }
}
