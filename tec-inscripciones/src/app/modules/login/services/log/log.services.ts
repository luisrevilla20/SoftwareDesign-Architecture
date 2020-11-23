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
/*
  login(data: any): Observable <any>{
    console.log("gggggggggggggggggggggggggg", `${this.endpoint}user/login`, data );

    return this.http.post(`${this.endpoint}user/login`, data, {headers: new HttpHeaders()});
  }*/


  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  constructor(private http: HttpClient) { }
}
