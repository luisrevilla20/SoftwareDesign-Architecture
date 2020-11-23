import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../models/user/user';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = 'https://683cbd401a84.ngrok.io/';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  user: User = {};

  getClassrooms(): Observable <any>{

    var headerDict = {
      'Content-Type': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

     return this.http
      .get<any>(this.endpoint + 'classroom/', requestOptions)
      .pipe(
        map(this.extractData), 
      );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {}; 
  }

  constructor(private http: HttpClient) { }
}
