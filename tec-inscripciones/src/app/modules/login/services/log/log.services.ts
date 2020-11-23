import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { User } from '../../../user/models/user/user';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LogService {

  endpoint = 'https://838e92274eb4.ngrok.io/';

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  user: User | undefined;


  /*
  createUser(user: User, username: any, email : any, password : any): Observable <any>{
	  const data = {username, email, password}

	return this.http.post(this.endpoint + 'user', data, {
		headers: new HttpHeaders()
		  .set('authorization', user.session)
	  });
  } */

  login(data: any): Observable <any>{
    console.log("gggggggggggggggggggggggggg", `${this.endpoint}user/login`, data);

    return this.http.post(`${this.endpoint}user/login`, data);
  }

  prueba(): Observable <any>{

    return this.http.get(`https://838e92274eb4.ngrok.io/classroom`);
  }

  private extractData(res: Response) {
    let body = res;
    console.log(res)
    return body || {};
  }

  constructor(private http: HttpClient) { }
}
