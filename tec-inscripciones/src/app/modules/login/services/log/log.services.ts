import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../../user/models/user/user';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LogService {

  endpoint = 'https://683cbd401a84.ngrok.io/';

  user: User | undefined;


  /*
  createUser(user: User, username: any, email : any, password : any): Observable <any>{
	  const data = {username, email, password}

	return this.http.post(this.endpoint + 'user', data, {
		headers: new HttpHeaders()
		  .set('authorization', user.session)
	  });
  } */

  // login(data: any): Observable <any>{
  //   console.log("gggggggggggggggggggggggggg", `${this.endpoint}user/login`, data);

  //   return this.http.post(`${this.endpoint}user/login`, data);
  // }

  // login(data: any,){
  //   return this.http
  //   .post<any>(this.endpoint + 'user/login', data,  {
  //       headers: new HttpHeaders()
  //     })
  //     .pipe( map(this.extractData), );
  // }

  login(data: any, session: any){

    var headerDict = {
      'Content-Type': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    console.log("Data", data);
    
    return this.http.post<any>(this.endpoint + 'user/login', data,  requestOptions).pipe(
          map(this.extractData));
  }

  prueba(): Observable <any>{

    var headerDict = {
      'Content-Type': 'application/json',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    // var httpOptions = {
    //   header: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }

    return this.http
    .get<any>(`https://683cbd401a84.ngrok.io/classroom`, requestOptions)
    .pipe( map(this.extractData), );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }
}
